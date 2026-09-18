// Production component, controlled animation clock. No browser rendering engine.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {JSDOM}=require('jsdom');
const dom=new JSDOM('<!doctype html><body></body>',{runScripts:'outside-only',pretendToBeVisual:true}),w=dom.window;
let now=0,id=0,reduced=false,background=false;const frames=new Map(),preference=new w.EventTarget();
Object.defineProperty(w.performance,'now',{value:()=>now});
Object.defineProperty(preference,'matches',{get:()=>reduced});w.matchMedia=()=>preference;
Object.defineProperty(w.document,'hidden',{get:()=>background});
w.requestAnimationFrame=fn=>{frames.set(++id,fn);return id;};w.cancelAnimationFrame=id=>frames.delete(id);
const spoken=[];let cancelled=0,recordings=0;
w.SpeechSynthesisUtterance=class{constructor(text){this.text=text;}};
w.speechSynthesis={getVoices:()=>[],speak:u=>{spoken.push(u);u.onstart?.();},cancel:()=>cancelled++};
w.Audio=class{play(){recordings++;this.onplaying?.();return Promise.resolve();}pause(){}};
w.eval(fs.readFileSync(__dirname+'/dist/b9-companion.js','utf8'));
const robot=w.document.createElement('b9-companion');robot.setAttribute('parked','');robot.id='travel';w.document.body.append(robot);
robot.setGreetings(false);robot.nextRetraction=Infinity;
const advance=ms=>{for(let t=0;t<ms;t+=40){now+=40;const pending=[...frames.values()];frames.clear();pending.forEach(fn=>fn(now));}};
const bounds=()=>{assert(robot.x>=0&&robot.x+robot.size<=w.innerWidth);assert(robot.y>=0&&robot.y+robot.size<=w.innerHeight);};
for(const [width,height] of [[1100,800],[390,844]]){
  w.innerWidth=width;w.innerHeight=height;robot.docked=false;robot.resize();robot.x=80;robot.y=120;robot.direction=1;robot.verticalDirection=1;robot.patrol();
  advance(400);assert(robot.x>80&&robot.y>120,'Travel advances both axes');bounds();
  for(const [edge,axis,sign] of [['left','x',-1],['right','x',1],['top','y',-1],['bottom','y',1]]){
    robot.x=(width-robot.size)/2;robot.y=(height-robot.size)/2;
    robot[axis]=sign<0?4:(axis==='x'?width:height)-robot.size-4;
    robot[axis==='x'?'direction':'verticalDirection']=sign;
    advance(80);bounds();assert.equal(robot[axis==='x'?'direction':'verticalDirection'],-sign,edge+' must reverse travel');
  }
}
w.innerWidth=1100;w.innerHeight=800;robot.resize();robot.x=500;robot.y=200;robot.verticalDirection=-1;robot.direction=1;robot.patrol();advance(1200);
assert(Math.sin(robot.yaw)>.5&&Math.cos(robot.yaw)<0,'Up/right travel faces away and right');
robot.park(false);
// Dismissal turns, then moves the complete robot with active treads. It only
// sets hidden once the entire host has crossed the viewport edge.
for(const side of [-1,1]){
  robot.show({immediate:true});robot.x=side<0?100:700;robot.y=230;robot.face(0);advance(1600);
  const home={x:robot.x,y:robot.y},phase=robot.phase;
  robot.hide();assert.equal(robot.mode,'exiting');assert(!robot.hidden);assert(robot.figure.disabled);
  robot.hide();assert.deepEqual({...robot.returnPosition},home,'Repeated close keeps the return position');
  advance(160);assert.equal(robot.x,home.x,'Finish the turn before rolling');
  let sawTravel=false;
  for(let i=0;i<100&&!robot.hidden;i++){
    advance(40);assert.equal(robot.y,home.y);
    if(!robot.hidden){if(robot.x!==home.x)sawTravel=true;assert(side<0?robot.x>-robot.size-12:robot.x<w.innerWidth+12);}
  }
  assert(sawTravel&&robot.hidden);assert(robot.phase>phase);assert.equal(frames.size,0);
  assert(side<0?robot.x+robot.size<0:robot.x>w.innerWidth,'Fully outside before hidden');
  robot.show({immediate:true});assert(!robot.hidden);assert.equal(robot.mode,'parked');assert.equal(robot.x,home.x);assert.equal(robot.y,home.y);assert(!robot.figure.disabled);
}
robot.x=180;robot.y=160;robot.hide();advance(1300);robot.show({immediate:true});assert.equal(robot.x,180);assert.equal(robot.y,160);advance(600);assert(!robot.hidden);assert.equal(robot.mode,'parked');
// Resizing during an exit must not clamp him back on screen.
robot.x=700;robot.hide();advance(1200);const exitX=robot.x;w.innerWidth=800;robot.resize();assert.equal(robot.x,exitX);advance(2200);assert(robot.hidden);robot.show({immediate:true});bounds();
robot.hide();robot.setMotion(false);assert(robot.hidden);assert.equal(frames.size,0);robot.show({immediate:true});robot.hide();assert(robot.hidden,'Paused motion dismisses immediately');
robot.show({immediate:true});robot.motionOverride=null;reduced=false;robot.hide();reduced=true;preference.dispatchEvent(new w.Event('change'));assert(robot.hidden,'New reduced-motion preference finishes dismissal without motion');
reduced=false;robot.show({immediate:true});robot.hide();background=true;w.document.dispatchEvent(new w.Event('visibilitychange'));assert(robot.hidden);assert.equal(frames.size,0);background=false;
robot.show({immediate:true});robot.hide();robot.remove();assert.equal(frames.size,0,'Removal cleans up an exit');
w.document.body.append(robot);robot.show({immediate:true});
// Every advertised line has the expected caption and playback route. Neither
// selecting nor saying a line unmutes the widget.
const remote=w.document.createElement('b9-remote');remote.setAttribute('for','travel');w.document.body.append(remote);
const say=remote.shadowRoot.querySelector('[data-action="say"]');
assert.equal(remote.quote.options.length,3);
assert.equal(remote.quote.options[0].value,'Warning! Warning! Warning!');
for(const quote of robot.getQuotes()){
  assert.equal(quote.kind,'tv');
  remote.quote.value=quote.text;remote.quote.dispatchEvent(new w.Event('change'));say.click();
  assert.equal(robot.caption.textContent,quote.text);assert.equal(spoken.length,0);assert.equal(recordings,0);assert(!robot.voiceEnabled);
}
robot.setVoice(true);
for(const quote of robot.getQuotes()){remote.quote.value=quote.text;say.click();}
assert.equal(recordings,3);assert.equal(spoken.length,0);assert.match(remote.shadowRoot.querySelector('.sound-note').textContent,/Original TV recording/);
robot.warn('Danger, danger, Will Robinson!');assert.equal(recordings,3);assert.equal(spoken.length,0);assert.match(robot.voiceStatus,/caption only/);
robot.setVoiceMode('browser');assert.equal(robot.voiceMode,'tv');robot.warn();assert.equal(recordings,4);assert.equal(spoken.length,0);
robot.warn('toString');assert.equal(recordings,4);assert.equal(spoken.length,0);
robot.setVoice(false);assert.equal(cancelled,0,'Widget must never call even the shared synthesis cancel API');
robot.setVoice(false);const routine=remote.shadowRoot.querySelector('.routine');routine.checked=true;routine.dispatchEvent(new w.Event('change'));assert(robot.routine);assert(!robot.voiceEnabled);
robot.hide();assert(!robot.routine);assert.equal(say.disabled,true);assert.equal(remote.shadowRoot.querySelector('[data-action="visible"]').textContent,'Show robot');
remote.shadowRoot.querySelector('[data-action="visible"]').click();assert.equal(robot.mode,'entering');assert(!robot.hidden);
robot.remove();remote.remove();dom.window.close();assert.equal(frames.size,0);
console.log('PASS: two-axis travel, four edges, heading, both exits, immediate cancellation/restore, resize, pause/reduced motion/background/removal, and authentic-only muted soundbite routing.');
