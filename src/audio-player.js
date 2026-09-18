// Read uncompressed PCM directly, including legacy 8-bit WAV and odd-sized chunks.
// The primary path does not ask a browser media codec to decode the TV files.
export function readPcmWav(uri){
  const raw=atob(uri.slice(uri.indexOf(',')+1));
  const bytes=Uint8Array.from(raw,c=>c.charCodeAt(0)),view=new DataView(bytes.buffer);
  const tag=offset=>String.fromCharCode(...bytes.subarray(offset,offset+4));
  if(bytes.length<44||tag(0)!=='RIFF'||tag(8)!=='WAVE')throw Error('Invalid WAV header');
  let format,dataStart,dataLength;
  for(let p=12;p+8<=bytes.length;){
    const id=tag(p),length=view.getUint32(p+4,true),start=p+8;
    if(start+length>bytes.length)throw Error('Truncated WAV chunk');
    if(id==='fmt '){if(length<16)throw Error('Invalid PCM format');format={codec:view.getUint16(start,true),channels:view.getUint16(start+2,true),sampleRate:view.getUint32(start+4,true),align:view.getUint16(start+12,true),bits:view.getUint16(start+14,true)};}
    if(id==='data'){dataStart=start;dataLength=length;}
    p=start+length+(length%2);
  }
  if(!format||dataStart===undefined||format.codec!==1||![8,16].includes(format.bits)||format.channels<1||format.channels>2||format.sampleRate<8000||format.sampleRate>96000||format.align!==format.channels*format.bits/8)throw Error('Unsupported PCM layout');
  const count=Math.floor(dataLength/format.align),channels=Array.from({length:format.channels},()=>new Float32Array(count));
  for(let i=0;i<count;i++)for(let ch=0;ch<format.channels;ch++){
    const p=dataStart+i*format.align+ch*(format.bits/8);
    channels[ch][i]=format.bits===8?(bytes[p]-128)/128:view.getInt16(p,true)/32768;
  }
  return {channels,sampleRate:format.sampleRate,duration:count/format.sampleRate};
}

export function makeAudioBuffer(context,pcm){
  const buffer=context.createBuffer(pcm.channels.length,pcm.channels[0].length,pcm.sampleRate);
  pcm.channels.forEach((samples,ch)=>buffer.getChannelData(ch).set(samples));
  return buffer;
}

export class ClipPlayer {
  constructor(env=window){this.env=env;this.serial=0;this.cache=new Map();}
  async play(clip,events={}){
    this.stop();const serial=this.serial;
    const current=()=>this.serial===serial;
    const fail=error=>{if(current())events.onError?.(error);};
    const AudioContextClass=this.env.AudioContext||this.env.webkitAudioContext;
    if(!AudioContextClass){this.playMedia(clip,events,serial);return;}
    try{
      if(!this.context||this.context.state==='closed')this.context=new AudioContextClass({latencyHint:'interactive'});
      const context=this.context;
      // Called synchronously from the visitor's click, before the first await.
      const resumed=context.state==='running'?Promise.resolve():context.resume();
      let timeout;
      try{await Promise.race([resumed,new Promise((_,reject)=>{timeout=setTimeout(()=>reject(Error('Audio activation timed out')),1800);})]);}finally{clearTimeout(timeout);}
      if(!current())return;
      if(context.state!=='running')throw Error('Audio is suspended by this browser');
      let buffer=this.cache.get(clip.src);
      if(!buffer){buffer=makeAudioBuffer(context,readPcmWav(clip.src));this.cache.set(clip.src,buffer);}
      const source=context.createBufferSource(),gain=context.createGain();source.buffer=buffer;gain.gain.value=.85;
      source.connect(gain);gain.connect(context.destination);this.source=source;this.gain=gain;
      source.onended=()=>{source.disconnect();gain.disconnect();if(current()){this.source=null;this.gain=null;events.onEnd?.();}};
      source.start();events.onStart?.('pcm');
    }catch(error){
      if(current())this.playMedia(clip,{...events,onError:mediaError=>fail(Error(`${error.message}; ${mediaError.message}`))},serial);
    }
  }
  playMedia(clip,events,serial){
    if(serial!==this.serial)return;
    const current=()=>serial===this.serial;
    const fail=error=>{if(current())events.onError?.(error instanceof Error?error:Error('MP3 playback failed'));};
    try{
      const sound=new this.env.Audio(clip.mp3);this.media=sound;sound.preload='auto';sound.volume=.85;
      sound.onplaying=()=>{clearTimeout(this.mediaTimer);if(current())events.onStart?.('mp3');};
      sound.onended=()=>{clearTimeout(this.mediaTimer);if(current()){this.media=null;events.onEnd?.();}};
      sound.onerror=()=>{clearTimeout(this.mediaTimer);fail(Error(`MP3 playback failed${sound.error?.code?' (code '+sound.error.code+')':''}`));};
      this.mediaTimer=setTimeout(()=>fail(Error('No audio playback confirmation')),3500);
      const pending=sound.play();pending?.catch(error=>{clearTimeout(this.mediaTimer);fail(error);});
    }catch(error){clearTimeout(this.mediaTimer);fail(error);}
  }
  stop(){
    this.serial++;clearTimeout(this.mediaTimer);
    if(this.source){this.source.onended=null;try{this.source.stop();}catch{}this.source.disconnect();this.source=null;}
    this.gain?.disconnect();this.gain=null;
    if(this.media){this.media.onplaying=null;this.media.onended=null;this.media.onerror=null;this.media.pause();this.media=null;}
  }
  dispose(){this.stop();this.context?.close()?.catch(()=>{});this.context=null;this.cache.clear();}
}
