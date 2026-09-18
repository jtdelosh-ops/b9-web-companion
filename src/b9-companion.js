import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {buildRobot} from './model.js';
import {compatibilityMarkup,poseCompatibility} from './compatibility.js';
import {TV_CLIPS,SOUND_BITES} from './voice-clips.js';
import {ClipPlayer} from './audio-player.js';
import './b9-remote.js';

const QUOTES = SOUND_BITES.map(quote=>quote.text);

// Geometry is kept separate so its proportions can be inspected independently.

class B9Companion extends HTMLElement {
  static get observedAttributes(){return ['size'];}
  constructor(){
    super();this.attachShadow({mode:'open'});this.motion=matchMedia('(prefers-reduced-motion: reduce)');
    this.mode='parked';this.voiceEnabled=false;this.routine=false;this.phase=0;this.direction=-1;this.verticalDirection=1;
    this.departure=null;this.entrance=null;this.returnPosition=null;this.entrySide=-1;
    this.warningUntil=0;this.nextQuote=18;this.quoteIndex=0;this.yaw=0;this.targetYaw=0;this.turnPhase=0;this.x=0;this.y=0;this.docked=true;this.elapsed=0;
    this.motionOverride=null;this.waveUntil=0;this.bobUntil=0;this.renderMode='compatibility';
    this.voiceMode='tv';
    this.greetings=true;this.nextGreeting=7;this.greeting=null;
    this.resumeAt=null;this.retraction=null;this.restoration=null;this.helloUntil=0;this.nextRetraction=15+Math.random()*15;
  }
  connectedCallback(){
    if(this.abort)return;
    if(!this.introduced&&!this.hasAttribute('parked')&&!this.hasAttribute('autostart'))this.hidden=true;
    this.abort=new AbortController();const on=(target,event,fn)=>target.addEventListener(event,fn,{signal:this.abort.signal});
    this.shadowRoot.innerHTML=`<style>
      :host{position:fixed;left:0;top:0;z-index:1000;width:var(--b9-size,300px);height:var(--b9-size,300px);pointer-events:none;isolation:isolate;font-family:Arial,sans-serif}
      :host([hidden]){display:none!important}*{box-sizing:border-box}.figure{position:absolute;inset:6% 18% 8%;background:none;border:0;padding:0;width:64%;height:86%;pointer-events:auto;touch-action:none;cursor:grab;color:inherit}.figure:active{cursor:grabbing}.figure:focus-visible{outline:2px solid #bf4934;border-radius:18px}
      canvas,.compatibility,.compatibility svg{width:100%;height:100%;display:block;pointer-events:none}canvas[hidden],.compatibility[hidden]{display:none}.close{position:absolute;right:8%;top:5%;width:26px;height:26px;border:1px solid #7777;background:#f7f4eddd;color:#313c41;border-radius:50%;font:18px Arial;pointer-events:auto;cursor:pointer;opacity:0;transition:opacity .12s ease}
      :host(:hover) .close,.figure:focus-visible ~ .close,.close:focus-visible{opacity:1}.close:focus-visible{outline:2px solid #bf4934;outline-offset:2px}
      :host([departing]) .figure,:host([departing]) .close{pointer-events:none}:host([departing]) .close{opacity:0}
      :host([arriving]) .figure{pointer-events:none}
      @media(prefers-reduced-motion:reduce){.close{transition:none}}
      .bubble{position:absolute;bottom:93%;left:0;width:210px;padding:13px 16px;background:#faf7ef;color:#303b42;border:1px solid #d9d0c3;border-radius:12px;box-shadow:0 5px 24px #0002;line-height:1.4;font-size:14px;pointer-events:none}.bubble[hidden]{display:none}.bubble small{display:block;font:9px monospace;letter-spacing:.15em;color:#9a4431;margin-bottom:5px}
      .error{position:absolute;bottom:0;left:12%;right:12%;background:#fcf5eb;color:#503b2a;font:11px/1.4 Arial;padding:8px;border-radius:6px}.error[hidden]{display:none}
      @media print{:host{display:none!important}}
    </style><canvas aria-hidden="true" hidden></canvas><div class="compatibility">${compatibilityMarkup()}</div><button class="figure" aria-label="B-9 Robot: click for a warning or drag to reposition"></button><button class="close" aria-label="Hide Robot" title="Hide Robot">×</button><div class="bubble" role="status" hidden><small>ENVIRONMENTAL CONTROL ROBOT</small><span></span></div><div class="error" hidden></div>`;
    this.canvas=this.shadowRoot.querySelector('canvas');this.figure=this.shadowRoot.querySelector('.figure');this.bubble=this.shadowRoot.querySelector('.bubble');this.caption=this.bubble.querySelector('span');
    this.resize();
    this.compatibility=this.shadowRoot.querySelector('.compatibility');this.svg=this.compatibility.querySelector('svg');
    this.setRenderMode(this.getAttribute('renderer')||'compatibility');
    on(this.canvas,'webglcontextlost',event=>{event.preventDefault();this.renderFallback('3D stopped; animated compatibility mode is active.');});
    on(this.figure,'pointerdown',event=>{
      if(event.button!==0||this.departure||this.entrance)return;this.noClick=false;this.drag={id:event.pointerId,x:event.clientX,y:event.clientY,dx:event.clientX-this.x,dy:event.clientY-this.y,moved:false,resume:this.mode==='patrol'||this.resumeAt!==null};
      const resume=this.drag.resume;this.figure.setPointerCapture(event.pointerId);this.park(false);this.drag.resume=resume;
    });
    on(this.figure,'pointermove',event=>{if(!this.drag||event.pointerId!==this.drag.id)return;this.drag.moved ||= Math.hypot(event.clientX-this.drag.x,event.clientY-this.drag.y)>5;this.x=event.clientX-this.drag.dx;this.y=event.clientY-this.drag.dy;this.clamp();this.paint();});
    const release=event=>{
      if(!this.drag||this.drag.id!==event.pointerId)return;
      const drag=this.drag,cancelled=event.type!=='pointerup';this.noClick=drag.moved||cancelled;this.drag=null;
      if(this.figure.hasPointerCapture(event.pointerId))this.figure.releasePointerCapture(event.pointerId);
      if(!cancelled&&drag.resume&&this.motionAllowed&&!this.hidden){
        this.resumeAt=this.elapsed+(drag.moved?3:0);this.requestFrame();
      }
      this.emit();
    };
    on(this.figure,'pointerup',release);on(this.figure,'pointercancel',release);on(this.figure,'lostpointercapture',release);
    on(this.figure,'click',()=>{if(this.noClick){this.noClick=false;return;}this.warn();});
    on(this.shadowRoot.querySelector('.close'),'click',()=>this.hide());
    on(this,'keydown',event=>{if(event.key==='Escape'){this.park(false);this.stopSpeech();this.warningUntil=0;this.bubble.hidden=true;}});
    on(window,'resize',()=>this.resize());on(this.motion,'change',()=>{if(!this.motionAllowed){if(this.departure)this.finishHide();else if(this.entrance)this.finishEntrance();else this.park(false);}this.requestFrame();this.emit();});
    on(document,'visibilitychange',()=>{if(document.hidden){if(this.departure)this.finishHide();this.cancelGreeting();this.stopFrames();this.stopSpeech();}else this.requestFrame();});
    if(!this.introduced){this.introduced=true;if(this.hasAttribute('autostart')){this.hidden=true;this.show();}}
    this.requestFrame();this.emit();
  }
  initScene(){
    this.renderer=new THREE.WebGLRenderer({canvas:this.canvas,alpha:true,antialias:true,powerPreference:'low-power',preserveDrawingBuffer:true});
    this.renderer.localClippingEnabled=true;
    this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.75));this.renderer.setSize(this.size,this.size,false);
    this.renderer.setClearColor(0x000000,0);this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=.9;
    this.scene=new THREE.Scene();const pmrem=new THREE.PMREMGenerator(this.renderer),room=new RoomEnvironment();
    this.environment=pmrem.fromScene(room,.04);this.scene.environment=this.environment.texture;room.dispose();pmrem.dispose();
    this.scene.add(new THREE.HemisphereLight(0xe5edf4,0x706456,1.2));
    const key=new THREE.DirectionalLight(0xffffff,2.4);key.position.set(3,5,6);this.scene.add(key);
    const fill=new THREE.DirectionalLight(0xc8d8e4,1.2);fill.position.set(-4,3,1);this.scene.add(fill);
    this.camera=new THREE.OrthographicCamera(-2.06,2.06,2.06,-2.06,.1,30);this.camera.position.set(2.0,2.5,9.2);this.camera.lookAt(0,1.82,0);
    this.rig=buildRobot();this.scene.add(this.rig.root);this.renderer.render(this.scene,this.camera);
  }
  renderFallback(message){
    this.ready=true;this.renderMode='compatibility';this.canvas.hidden=true;this.compatibility.hidden=false;
    const notice=this.shadowRoot.querySelector('.error');notice.textContent=message;notice.hidden=!message;this.requestFrame();this.emit();
  }
  setRenderMode(mode){
    if(mode!=='3d'){this.renderFallback('');return;}
    try{if(!this.renderer)this.initScene();this.renderMode='3d';this.ready=true;this.canvas.hidden=false;this.compatibility.hidden=true;this.shadowRoot.querySelector('.error').hidden=true;this.requestFrame();this.emit();}
    catch(error){this.renderer?.dispose();this.renderer=null;this.renderFallback('3D unavailable; animated compatibility mode is active.');}
  }
  disconnectedCallback(){
    if(this.departure||this.entrance)this.finishHide();
    this.resumeAt=null;this.drag=null;this.stopFrames();this.stopSpeech();this.clipPlayer?.dispose();this.clipPlayer=null;this.abort?.abort();
    this.scene?.traverse(object=>{object.geometry?.dispose();if(object.material){for(const m of Array.isArray(object.material)?object.material:[object.material])m.dispose();}});
    this.environment?.dispose();this.renderer?.dispose();this.renderer=null;this.abort=null;
  }
  attributeChangedCallback(){if(this.figure)this.resize();}
  get size(){return this.realSize||300;}
  get motionAllowed(){return this.motionOverride??!this.motion.matches;}
  setMotion(enabled){this.motionOverride=!!enabled;if(!enabled){if(this.departure)this.finishHide();else if(this.entrance)this.finishEntrance();else this.park(false);}this.requestFrame();this.emit();}
  wave(){this.show({immediate:true});this.waveUntil=performance.now()+5200;this.requestFrame();this.emit();}
  // Legacy name retained, but it can no longer extend above the default height.
  bobHead(){this.retractHead();}
  restoreHead(){
    this.retraction=null;this.restoration={start:this.elapsed,from:this.headBob||0};this.requestFrame();this.emit();
  }
  retractHead(holdMs){
    this.show({immediate:true});this.restoration=null;
    const hold=holdMs===undefined?1.5+Math.random()*4.5:Math.max(.2,Math.min(10,Number(holdMs)/1000||2.2));
    this.retraction={start:this.elapsed,hold,from:this.headBob||0};
    this.nextRetraction=this.elapsed+hold+1.7+15+Math.random()*15;this.requestFrame();this.emit();
  }
  startIntroduction(){
    this.resumeAt=null;this.docked=false;this.x=(innerWidth-this.size)/2;this.y=(innerHeight-this.size)/2;this.clamp();this.paint();
    this.yaw=this.targetYaw=0;
    this.helloUntil=performance.now()+3600;this.caption.textContent='Hello!';this.bubble.hidden=false;
    if(this.motionAllowed){this.mode='patrol';this.greeting={phase:'waving',intro:true,endsAt:this.elapsed+3.6};this.waveUntil=this.helloUntil;}
    else{this.mode='parked';this.greeting=null;this.waveUntil=0;}
    this.requestFrame();this.emit();
  }
  finishEntrance(){
    this.entrance=null;this.removeAttribute('arriving');this.figure.disabled=false;this.startIntroduction();
  }
  face(degrees=0){this.park(false);this.targetYaw=Number(degrees)*Math.PI/180;if(!this.motionAllowed)this.yaw=this.targetYaw;this.requestFrame();this.emit();}
  turn(degrees=90){this.face(this.targetYaw*180/Math.PI+Number(degrees));}
  setGreetings(enabled){this.greetings=!!enabled;if(!enabled)this.cancelGreeting();this.nextGreeting=this.elapsed+7;this.requestFrame();this.emit();}
  greet(){
    if(!this.motionAllowed)return;this.show({immediate:true});this.greeting={phase:'turning',started:this.elapsed};this.waveUntil=0;this.targetYaw=0;this.requestFrame();this.emit();
  }
  cancelGreeting(){if(this.greeting){this.greeting=null;this.helloUntil=0;this.waveUntil=0;this.warningUntil=0;if(this.bubble)this.bubble.hidden=true;this.stopSpeech();}this.nextGreeting=this.elapsed+16+Math.random()*10;}
  resize(){
    const limit=innerWidth<650?Math.min(220,innerWidth*.57):480;
    this.realSize=Math.max(100,Math.min(Number(this.getAttribute('size'))||280,limit,innerWidth-16,innerHeight-24));this.style.setProperty('--b9-size',this.size+'px');
    if(this.docked){this.x=innerWidth-this.size-12;this.y=innerHeight-this.size-4;}
    if(this.departure)this.y=Math.max(0,Math.min(this.y,innerHeight-this.size));else if(!this.entrance)this.clamp();this.paint();
    if(this.renderer){this.renderer.setSize(this.size,this.size,false);this.requestFrame();}
  }
  clamp(){this.x=Math.max(0,Math.min(this.x,innerWidth-this.size));this.y=Math.max(0,Math.min(this.y,innerHeight-this.size));}
  paint(){
    this.style.transform=`translate(${this.x.toFixed(2)}px,${this.y.toFixed(2)}px)`;
    if(this.bubble){const w=Math.min(210,innerWidth-24);this.bubble.style.width=w+'px';this.bubble.style.left=Math.max(12-this.x,Math.min(12,innerWidth-this.x-w-12))+'px';this.bubble.style.bottom=this.y<110?'auto':'91%';this.bubble.style.top=this.y<110?'90%':'auto';}
  }
  requestFrame(){
    if(this.raf||this.hidden||document.hidden)return;
    this.last=performance.now();this.raf=requestAnimationFrame(now=>this.tick(now));
  }
  stopFrames(){if(this.raf)cancelAnimationFrame(this.raf);this.raf=0;}
  tick(now){
    this.raf=0;if(this.hidden||document.hidden)return;
    if(now-this.last<1000/30){this.raf=requestAnimationFrame(time=>this.tick(time));return;}
    const dt=Math.min((now-this.last)/1000,.06);this.last=now;this.elapsed+=dt;
    const t=this.elapsed,animate=this.motionAllowed;
    let warning=now<this.warningUntil,wave=now<this.waveUntil;
    if(this.greeting?.phase==='waving'&&t>=this.greeting.endsAt){this.greeting=null;this.nextGreeting=t+16+Math.random()*10;this.nextQuote=t+18;this.emit();}
    if(this.greeting?.phase==='waving')wave=true;
    if(animate&&!this.drag&&this.mode==='patrol'&&!this.greeting&&!warning&&!wave&&((this.greetings&&t>=this.nextGreeting)||(this.routine&&t>=this.nextQuote)))this.greet();
    if(this.resumeAt!==null&&t>=this.resumeAt&&animate&&!this.drag&&!this.greeting&&!warning&&!wave)this.patrol({keepPosition:true});
    const moving=this.mode==='patrol'&&animate&&!this.drag&&!this.greeting;
    if(animate&&this.mode==='patrol'&&!this.drag&&!this.greeting&&!this.retraction&&!this.restoration&&t>=this.nextRetraction)this.retractHead();
    const smooth=x=>{x=Math.max(0,Math.min(1,x));return x*x*(3-2*x);};
    let bob=0;
    if(this.retraction){
      const age=t-this.retraction.start,holdEnd=.7+this.retraction.hold;
      bob=age<.7?this.retraction.from+(-.58-this.retraction.from)*smooth(age/.7):age<holdEnd?-.58:-.58*(1-smooth((age-holdEnd)/1.0));
      if(age>=holdEnd+1){this.retraction=null;this.emit();}
    }else if(this.restoration){
      const age=t-this.restoration.start;bob=this.restoration.from*(1-smooth(age/.9));
      if(age>=.9){this.restoration=null;this.emit();}
    }
    if(!animate)bob=0;
    this.headBob=bob;
    if(moving){
      const x0=this.x,y0=this.y,speed=40/Math.hypot(1,.65);
      this.x+=this.direction*speed*dt;this.y+=this.verticalDirection*speed*.65*dt;
      const maxX=Math.max(4,innerWidth-this.size-4),maxY=Math.max(4,innerHeight-this.size-4);
      if(this.x<=4){this.x=4;this.direction=1;}else if(this.x>=maxX){this.x=maxX;this.direction=-1;}
      if(this.y<=4){this.y=4;this.verticalDirection=1;}else if(this.y>=maxY){this.y=maxY;this.verticalDirection=-1;}
      this.phase+=Math.hypot(this.x-x0,this.y-y0)/Math.max(65,this.size*.4)*.24;
      this.paint();
    }
    if(this.entrance){
      if(!animate)this.finishEntrance();
      else{
        const dx=(innerWidth-this.size)/2-this.x,dy=(innerHeight-this.size)/2-this.y,distance=Math.hypot(dx,dy);
        if(distance>.01){
          this.entrance.phase='rolling';this.targetYaw=Math.atan2(dx,dy);
          const error=Math.atan2(Math.sin(this.targetYaw-this.yaw),Math.cos(this.targetYaw-this.yaw));
          if(Math.abs(error)<.08){
            const step=Math.min(distance,this.entrance.speed*dt);this.x+=dx/distance*step;this.y+=dy/distance*step;
            this.phase+=step/Math.max(65,this.size*.4)*.24;this.paint();
          }
        }else{this.entrance.phase='turning';this.targetYaw=0;}
      }
    }
    if(this.greeting)this.targetYaw=0;
    else if(this.mode==='patrol')this.targetYaw=warning?0:Math.atan2(this.direction,this.verticalDirection*.65);
    const yawError=Math.atan2(Math.sin(this.targetYaw-this.yaw),Math.cos(this.targetYaw-this.yaw));
    const yawStep=animate?yawError*Math.min(1,dt*4.5):yawError;
    this.yaw=Math.atan2(Math.sin(this.yaw+yawStep),Math.cos(this.yaw+yawStep));this.turnPhase+=yawStep*.10;
    if(this.entrance?.phase==='turning'&&Math.abs(this.yaw)<.025){this.finishEntrance();wave=true;}
    if(this.departure){
      const d=this.departure;
      if(!animate){this.finishHide();return;}
      if(d.phase==='turning'&&(Math.abs(yawError)<.06||t-d.started>1.1)){d.phase='rolling';this.emit();}
      if(d.phase==='rolling'){
        const goal=d.side<0?-this.size-12:innerWidth+12,x0=this.x;
        this.x+=d.side*d.speed*dt;
        const arrived=d.side<0?this.x<=goal:this.x>=goal;
        if(arrived)this.x=goal;
        this.phase+=Math.abs(this.x-x0)/Math.max(65,this.size*.4)*.24;this.paint();
        if(arrived){this.finishHide();return;}
      }
    }
    if(this.greeting?.phase==='turning'&&animate&&Math.abs(Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)))<.025){
      this.yaw=0;this.greeting.phase='waving';this.greeting.endsAt=t+(this.routine?5:4);this.waveUntil=now+4000;wave=true;
      if(this.routine){this.warn(QUOTES[this.quoteIndex++%QUOTES.length]);warning=true;this.nextQuote=t+18;}
      this.emit();
    }
    if(this.routine&&this.mode==='parked'&&!this.greeting&&!warning&&t>this.nextQuote){this.warn(QUOTES[this.quoteIndex++%QUOTES.length]);this.nextQuote=t+18;warning=true;}
    if(!warning&&now>=this.helloUntil&&!this.bubble.hidden){this.bubble.hidden=true;this.emit();}
    if(this.renderMode==='compatibility')poseCompatibility(this.svg,{t,phase:this.phase,turn:this.turnPhase,bob,warning,wave,animate,yaw:this.yaw});
    if(this.rig&&this.renderMode==='3d'){
      const r=this.rig;
      r.root.rotation.y=this.yaw+Math.atan2(2,9.2);
      r.updateHead(bob);r.radar.rotation.y=0;
      r.torso.rotation.y=0; // Only whole-robot steering can rotate the head assembly.
      for(const a of r.arms){
        const s=a.side;
        const active=(warning||wave)&&animate;
        a.shoulder.rotation.z=s*(active?1.0+.35*Math.sin(t*5+s):.51);
        a.shoulder.rotation.x=active?-.30+.22*Math.cos(t*5+s):-.22;
        a.elbow.rotation.z=s*(active?.38+.29*Math.sin(t*6+s):-.17);
        a.hand.rotation.y=active?.25*Math.sin(t*7+s):0;
        a.fingers.forEach((finger,i)=>{finger.rotation.z=active?(i?1:-1)*(.08+.09*Math.sin(t*8)):0;});
      }
      r.mouthMat.emissiveIntensity=warning&&animate?.4+1.3*Math.abs(Math.sin(t*15)*Math.sin(t*7)):.14;
      r.indicators.forEach((lamp,i)=>{lamp.emissiveIntensity=animate?.18+.35*Math.max(0,Math.sin(t*2+i*2)):.2;});
      r.updateTracks(this.phase,this.turnPhase);
      this.renderer.render(this.scene,this.camera);
    }
    if(!this.raf&&(animate||warning||wave||now<this.bobUntil||now<this.helloUntil))this.raf=requestAnimationFrame(time=>this.tick(time));
  }
  warn(text='Warning! Warning! Warning!'){
    this.show({immediate:true});if(/does not compute/i.test(text))this.retractHead();this.caption.textContent=String(text).slice(0,180);this.bubble.hidden=false;this.warningUntil=performance.now()+4800;
    if(this.voiceEnabled)this.speak(this.caption.textContent);this.requestFrame();this.emit();
  }
  speak(text){
    this.stopSpeech();this.audioError='';
    const clip=Object.hasOwn(TV_CLIPS,text)?TV_CLIPS[text]:null;
    if(clip){this.playClip(clip);return;}
    this.voiceStatus='No original recording for this line · caption only';this.emit();
  }
  playClip(clip){
    this.stopSpeech();this.clipPlayer??=new ClipPlayer();this.audioError='';this.voiceStatus='Starting TV voice clip…';this.emit();
    this.clipPlayer.play(clip,{
      onStart:engine=>{this.audioEngine=engine;this.voiceStatus='Playing original TV voice clip';this.warningUntil=Math.max(this.warningUntil,performance.now()+clip.duration*1000+600);this.emit();},
      onEnd:()=>{this.voiceStatus='TV voice ready';this.emit();},
      onError:error=>{this.audioError=error.message;this.voiceStatus='Audio could not play. Try the direct player under Audio help.';this.emit();}
    });
  }
  getVoiceClip(){return TV_CLIPS['Warning! Warning! Warning!'].mp3;}
  getQuotes(){return SOUND_BITES.map(quote=>({...quote}));}
  testVoice(){this.setVoiceMode('tv');this.setVoice(true);this.warn();}
  stopSpeech(){this.clipPlayer?.stop();}
  // Compatibility with older integrations: this can no longer enable synthesis.
  setVoiceMode(){this.stopSpeech();this.voiceMode='tv';this.setVoice(this.voiceEnabled);}
  setVoice(enabled){this.voiceEnabled=!!enabled;if(!enabled)this.stopSpeech();this.voiceStatus=enabled?'Original TV clips enabled':'Silent · enable voice to hear him';this.emit();}
  setRoutine(enabled){this.routine=!!enabled;this.nextQuote=this.elapsed+10;this.emit();this.requestFrame();}
  patrol({keepPosition=true}={}){this.resumeAt=null;if(!this.motionAllowed){this.mode='parked';this.emit();return;}this.cancelGreeting();this.nextGreeting=this.elapsed+6+Math.random()*3;this.show({immediate:true});this.mode='patrol';this.docked=false;if(!keepPosition){this.y=innerHeight-this.size-4;this.direction=-1;this.paint();}this.requestFrame();this.emit();}
  park(dock=true){if(this.departure||this.entrance)this.show({immediate:true});this.resumeAt=null;if(this.drag)this.drag.resume=false;this.cancelGreeting();this.mode='parked';this.docked=dock;if(dock){this.targetYaw=0;this.resize();}this.requestFrame();this.emit();}
  hide({immediate=false}={}){
    if(this.hidden)return;
    if(this.departure){if(immediate)this.finishHide();return;}
    this.entrance=null;this.removeAttribute('arriving');this.figure.disabled=false;
    this.returnPosition={x:this.x,y:this.y};this.resumeAt=null;
    const pointerId=this.drag?.id;this.drag=null;
    if(pointerId!==undefined&&this.figure.hasPointerCapture(pointerId))this.figure.releasePointerCapture(pointerId);
    this.cancelGreeting();this.routine=false;this.stopSpeech();this.warningUntil=this.waveUntil=this.helloUntil=0;this.bubble.hidden=true;this.docked=false;
    const side=this.x+this.size/2<innerWidth/2?-1:1;
    this.entrySide=side;
    if(immediate||!this.motionAllowed||document.hidden||!this.isConnected||this.x+this.size<=0||this.x>=innerWidth){this.finishHide();return;}
    const distance=side<0?this.x+this.size+12:innerWidth+12-this.x;
    this.departure={side,phase:'turning',started:this.elapsed,speed:Math.max(170,distance/1.4)};
    this.mode='exiting';this.targetYaw=side*Math.PI/2;this.setAttribute('departing','');
    this.figure.disabled=true;this.shadowRoot.querySelector('.close').disabled=true;this.requestFrame();this.emit();
  }
  finishHide(){
    this.departure=null;this.entrance=null;this.removeAttribute('departing');this.removeAttribute('arriving');this.hidden=true;this.mode='parked';this.stopFrames();
    this.figure.disabled=false;this.shadowRoot.querySelector('.close').disabled=false;this.emit();
  }
  show({immediate=false}={}){
    if(immediate){
      const changed=this.hidden||this.departure||this.entrance;
      this.departure=null;this.entrance=null;this.removeAttribute('departing');this.removeAttribute('arriving');
      if(this.returnPosition){this.x=this.returnPosition.x;this.y=this.returnPosition.y;}
      this.returnPosition=null;this.hidden=false;this.figure.disabled=false;this.shadowRoot.querySelector('.close').disabled=false;
      if(changed){this.mode='parked';this.clamp();this.paint();}this.requestFrame();this.emit();return;
    }
    if(this.entrance||(!this.hidden&&!this.departure))return;
    const offscreen=this.hidden,side=this.departure?.side??this.entrySide;
    this.stopFrames();this.stopSpeech();this.cancelGreeting();this.resumeAt=null;this.departure=null;this.returnPosition=null;
    this.removeAttribute('departing');this.warningUntil=this.waveUntil=this.helloUntil=0;this.bubble.hidden=true;
    this.retraction=this.restoration=null;this.headBob=0;this.docked=false;
    if(offscreen){this.x=side<0?-this.size-12:innerWidth+12;this.y=(innerHeight-this.size)/2;this.yaw=side<0?Math.PI/2:-Math.PI/2;}
    this.hidden=false;this.shadowRoot.querySelector('.close').disabled=false;
    this.mode='entering';this.entrance={phase:'rolling',speed:Math.max(150,Math.hypot((innerWidth-this.size)/2-this.x,(innerHeight-this.size)/2-this.y)/1.8)};
    this.targetYaw=Math.atan2((innerWidth-this.size)/2-this.x,(innerHeight-this.size)/2-this.y);
    this.setAttribute('arriving','');this.figure.disabled=true;this.paint();
    this.nextRetraction=this.elapsed+20+Math.random()*15;
    if(!this.motionAllowed)this.finishEntrance();else{this.requestFrame();this.emit();}
  }
  emit(){this.dispatchEvent(new CustomEvent('robotstatechange',{bubbles:true,detail:{mode:this.mode,resumePending:this.resumeAt!==null,greeting:this.greeting?.phase||null,introduction:!!this.greeting?.intro,retracting:!!this.retraction,voice:this.voiceEnabled,voiceStatus:this.voiceStatus||'Silent · enable voice to hear him',hidden:this.hidden,ready:!!this.ready,renderer:this.renderMode,motionAllowed:this.motionAllowed,reducedMotion:this.motion.matches}}));}
  debugState(){return {ready:this.ready,renderer:this.renderMode,mode:this.mode,resumePending:this.resumeAt!==null,resumeIn:this.resumeAt===null?null:Math.max(0,this.resumeAt-this.elapsed),retracting:!!this.retraction,greeting:this.greeting?.phase||null,introduction:!!this.greeting?.intro,greetings:this.greetings,x:this.x,y:this.y,phase:this.phase,yaw:this.yaw,targetYaw:this.targetYaw,headBob:this.headBob||0,headY:this.rig?.head.position.y,armZ:this.rig?.arms[0].shoulder.rotation.z,warning:performance.now()<this.warningUntil,voice:this.voiceEnabled,voiceMode:this.voiceMode,audioEngine:this.audioEngine||null,audioError:this.audioError||null,motionAllowed:this.motionAllowed,reducedMotion:this.motion.matches,framePending:!!this.raf};}
}
if(!customElements.get('b9-companion'))customElements.define('b9-companion',B9Companion);
