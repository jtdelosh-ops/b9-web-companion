// Render the actual player graph into PCM in Node. No browser or sound card involved.
const assert=require('node:assert/strict');
const esbuild=require('esbuild');
const {RenderingAudioContext}=require('web-audio-engine');
(async()=>{
  const result=await esbuild.build({stdin:{contents:"export * from './audio-player.js'; export * from './voice-clips.js';",resolveDir:__dirname+'/src'},bundle:true,platform:'node',format:'cjs',loader:{'.wav':'dataurl','.mp3':'dataurl'},write:false});
  const module={exports:{}};new Function('module','exports',result.outputFiles[0].text)(module,module.exports);
  const {ClipPlayer,readPcmWav,TV_CLIPS}=module.exports;
  class RenderContext extends RenderingAudioContext {constructor(){super({sampleRate:44100,numberOfChannels:1});}}
  const energy=samples=>Math.sqrt(samples.reduce((n,x)=>n+x*x,0)/samples.length);
  for(const [name,clip] of Object.entries(TV_CLIPS)){
    const pcm=readPcmWav(clip.src);assert.equal(pcm.sampleRate,11025);assert.equal(pcm.channels.length,1);assert(energy(pcm.channels[0])>.1);
    const player=new ClipPlayer({AudioContext:RenderContext,Audio:class{constructor(){throw Error('The PCM path must not require media decoding');}}});
    let engine,error;await player.play(clip,{onStart:e=>engine=e,onError:e=>error=e});assert.equal(error,undefined);assert.equal(engine,'pcm');
    player.context.processTo(clip.duration+.2);const rendered=player.context.exportAsAudioData().channelData[0];
    assert(energy(rendered)>.08,`${name}: rendered output should contain the voice signal`);
    assert(energy(rendered.slice(Math.ceil((clip.duration+.06)*44100)))<.0001,'Output must return to silence at the end');
    console.log('PCM rendered:',name,'RMS',energy(rendered).toFixed(4));player.dispose();
  }
  const clip=Object.values(TV_CLIPS)[0];
  const player=new ClipPlayer({AudioContext:RenderContext});await player.play(clip);player.context.processTo(.25);player.stop();player.context.processTo(1);
  assert(energy(player.context.exportAsAudioData().channelData[0].slice(16000))<.0001,'Mute must stop the real rendered signal');player.dispose();
  let mediaCount=0;
  class Media {constructor(src){assert.match(src,/^data:audio\/mpeg;base64,/);mediaCount++;}play(){this.onplaying?.();return Promise.resolve();}pause(){}}
  const fallback=new ClipPlayer({Audio:Media});let engine;await fallback.play(clip,{onStart:e=>engine=e});assert.equal(engine,'mp3');fallback.dispose();
  class DeniedContext {get state(){return 'suspended';}resume(){return Promise.reject(Error('Activation denied'));}close(){return Promise.resolve();}}
  const denied=new ClipPlayer({AudioContext:DeniedContext,Audio:Media});await denied.play(clip,{onStart:e=>engine=e});assert.equal(engine,'mp3');denied.dispose();
  let release,started=false;
  class PendingContext {get state(){return 'suspended';}resume(){return new Promise(resolve=>release=resolve);}close(){return Promise.resolve();}}
  const pending=new ClipPlayer({AudioContext:PendingContext,Audio:Media});const playing=pending.play(clip,{onStart:()=>started=true});pending.stop();release();await playing;assert.equal(started,false);assert.equal(mediaCount,2,'Cancelled activation must not fall through to media playback');pending.dispose();
  console.log('PASS: actual PCM conversion/resampling/output, silence after completion/mute, MP3 fallback, and cancellation during pending activation.');
  console.log('This verifies audio samples and routing, not the user device speakers or in-app audio policy.');
})().catch(error=>{console.error(error);process.exitCode=1;});
