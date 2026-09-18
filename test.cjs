// Deterministic code/DOM unit tests. This is NOT an end-to-end browser or audio test.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const esbuild=require('esbuild');
const {JSDOM}=require('jsdom');
(async()=>{
  const dom=new JSDOM('<!doctype html><body></body>',{runScripts:'outside-only',pretendToBeVisual:true});
  const w=dom.window;
  let now=0,frameId=0;const frames=new Map();
  Object.defineProperty(w.performance,'now',{value:()=>now});
  w.requestAnimationFrame=fn=>{frames.set(++frameId,fn);return frameId;};
  w.cancelAnimationFrame=id=>frames.delete(id);
  let reduce=false;const motion=new w.EventTarget();Object.defineProperty(motion,'matches',{get:()=>reduce});w.matchMedia=()=>motion;
  // WebGL intentionally fails. The default path must not call it at all.
  let contextCalls=0;w.HTMLCanvasElement.prototype.getContext=()=>{contextCalls++;throw Error('Deliberate unit-test GPU failure');};
  const sounds=[];let audioFailure=false;
  w.Audio=class {constructor(src){this.src=src;this.paused=true;sounds.push(this);}play(){if(audioFailure)throw Error('Deliberate unit-test audio failure');this.paused=false;this.onplaying?.();return Promise.resolve();}pause(){this.paused=true;}};
  const bundle=fs.readFileSync(__dirname+'/dist/b9-companion.js','utf8');
  new vm.Script(bundle).runInContext(dom.getInternalVMContext());
  const robot=w.document.createElement('b9-companion');robot.id='test-robot';robot.setAttribute('parked','');robot.setAttribute('size','400');w.document.body.append(robot);
  assert.equal(robot.voiceEnabled,false,'New widgets must start muted');assert.equal(sounds.length,0);
  const advance=ms=>{for(let i=0;i<ms;i+=40){now+=40;const pending=[...frames.values()];frames.clear();pending.forEach(fn=>fn(now));}};
  const svg=robot.shadowRoot.querySelector('svg');
  assert(robot.ready&&svg);assert.equal(contextCalls,0,'Compatibility must work without touching WebGL');
  advance(40);
  const first=robot.debugState();const idleArm=svg.querySelector('.compat-shoulder').getAttribute('transform');
  robot.patrol();advance(840);
  assert(robot.x<first.x);assert(robot.phase>first.phase);const tread1=svg.querySelector('.compat-chassis').innerHTML;advance(160);assert.notEqual(svg.querySelector('.compat-chassis').innerHTML,tread1);
  assert(Math.sin(robot.yaw)<-.8,'Travel left should rotate the artwork left');
  robot.x=1;robot.direction=-1;advance(1600);assert.equal(robot.direction,1);assert(Math.sin(robot.yaw)>.8,'An edge bounce should turn the robot right');
  robot.face(180);advance(1800);assert(Number(svg.querySelector('.compat-front-panel').getAttribute('opacity'))<.01);assert(Number(svg.querySelector('.compat-rear-panel').getAttribute('opacity'))>.99);
  robot.face(0);advance(1800);assert(Number(svg.querySelector('.compat-front-panel').getAttribute('opacity'))>.99);
  robot.turn(90);advance(1600);assert(Math.abs(robot.yaw-Math.PI/2)<.01);assert.equal(svg.querySelector('.compat-arms-back').children.length,1);assert.equal(svg.querySelector('.compat-arms-front').children.length,1);assert(svg.querySelector('.compat-chassis polygon'));assert.equal(svg.querySelectorAll('.compat-front-foot,.compat-side-foot').length,0);
  robot.face(0);advance(1600);
  // A greeting stops translation, finishes turning before waving, then resumes.
  robot.setGreetings(true);robot.setRoutine(false);robot.patrol();robot.nextGreeting=robot.elapsed+.2;advance(320);
  assert.equal(robot.greeting.phase,'turning');const stoppedX=robot.x,stoppedY=robot.y,stoppedPhase=robot.phase;
  advance(1600);assert.equal(robot.greeting.phase,'waving');assert.equal(robot.yaw,0);assert.equal(robot.x,stoppedX);assert.equal(robot.y,stoppedY);assert.equal(robot.phase,stoppedPhase);
  const greetingArm=svg.querySelector('.compat-shoulder').getAttribute('transform');advance(400);assert.notEqual(svg.querySelector('.compat-shoulder').getAttribute('transform'),greetingArm);assert.equal(robot.x,stoppedX);
  advance(4200);assert.equal(robot.greeting,null);assert.notEqual(robot.x,stoppedX);assert(robot.nextGreeting>robot.elapsed+10);
  robot.greet();advance(1800);robot.park(false);const parkedX=robot.x;advance(6000);assert.equal(robot.mode,'parked');assert.equal(robot.greeting,null);assert.equal(robot.x,parkedX,'Park must cancel the pending resume');
  robot.patrol();robot.greet();advance(120);robot.setMotion(false);advance(5000);assert.equal(robot.greeting,null);assert.equal(robot.mode,'parked');robot.setMotion(true);robot.setGreetings(false);
  robot.park(false);robot.wave();advance(400);const wave1=svg.querySelector('.compat-shoulder').getAttribute('transform');assert.notEqual(wave1,idleArm);advance(200);assert.notEqual(svg.querySelector('.compat-shoulder').getAttribute('transform'),wave1);
  robot.retractHead(2200);advance(800);assert.equal(robot.headBob,-.58);robot.restoreHead();advance(1000);assert.equal(robot.headBob,0);
  const raisedStem=svg.querySelector('.compat-neck').getAttribute('transform');
  robot.retractHead(2200);advance(800);assert.equal(robot.headBob,-.58);assert.equal(svg.querySelector('.compat-head').getAttribute('transform'),'translate(0 32)');assert.notEqual(svg.querySelector('.compat-neck').getAttribute('transform'),raisedStem);assert.equal(svg.querySelector('.compat-neck').getAttribute('visibility'),'hidden');assert.equal(svg.querySelector('.compat-collar').getAttribute('visibility'),'visible');
  advance(1700);assert.equal(robot.headBob,-.58,'Discomfort holds at shoulder height');advance(1600);assert.equal(robot.retraction,null);assert.equal(robot.headBob,0);const holds=new Set();for(let i=0;i<10;i++){robot.retractHead();holds.add(robot.retraction.hold);assert(robot.retraction.hold>=1.5&&robot.retraction.hold<=6);}assert(holds.size>1);robot.restoreHead();advance(1200);for(let i=0;i<20;i++){advance(100);assert.equal(robot.headBob,0,'Parked head must not idle-rock');}
  // Dragging preserves roaming intent and the dropped height. Explicit stops cancel it.
  robot.waveUntil=0;robot.warningUntil=0;robot.setGreetings(false);robot.setRoutine(false);
  const figure=robot.figure;let captured=null;
  figure.setPointerCapture=id=>{captured=id;};figure.hasPointerCapture=id=>captured===id;figure.releasePointerCapture=()=>{captured=null;};
  const pointer=(target,type,x,y,id=7)=>{const e=new w.MouseEvent(type,{bubbles:true,button:0,clientX:x,clientY:y});Object.defineProperty(e,'pointerId',{value:id});target.dispatchEvent(e);};
  const dragTo=(x,y,release='pointerup')=>{pointer(figure,'pointerdown',robot.x+50,robot.y+50);pointer(figure,'pointermove',x+50,y+50);pointer(figure,release,x+50,y+50);};
  robot.patrol();advance(240);dragTo(180,100);assert.equal(robot.mode,'parked');assert.equal(robot.debugState().resumePending,true);
  const droppedX=robot.x,droppedY=robot.y;advance(2800);assert.equal(robot.x,droppedX);advance(480);assert.equal(robot.mode,'patrol');assert.notEqual(robot.x,droppedX);assert.notEqual(robot.y,droppedY);assert(Math.abs(robot.y-droppedY)<12,'Resume must continue near the drop position');
  dragTo(220,110);advance(1200);dragTo(240,120);advance(2800);assert.equal(robot.mode,'parked');advance(480);assert.equal(robot.mode,'patrol','A second drag must retain roaming intent and restart the delay');
  dragTo(210,100);robot.park(false);advance(3600);assert.equal(robot.mode,'parked');assert.equal(robot.resumeAt,null);assert(Math.abs(robot.x-210)<1e-8);
  dragTo(250,150);advance(3600);assert.equal(robot.mode,'parked','Dragging an intentionally parked robot must keep him parked');
  robot.patrol();dragTo(220,150,'pointercancel');advance(3600);assert.equal(robot.mode,'parked');assert.equal(robot.resumeAt,null);
  robot.patrol();dragTo(220,150,'lostpointercapture');advance(3600);assert.equal(robot.mode,'parked');
  robot.patrol();dragTo(200,140);robot.setMotion(false);advance(3600);assert.equal(robot.resumeAt,null);assert.equal(robot.mode,'parked');robot.setMotion(true);
  robot.patrol();dragTo(220,140);robot.hide();robot.show({immediate:true});advance(3600);assert.equal(robot.mode,'parked');assert.equal(robot.resumeAt,null);
  // The remote is opt-in UI, stays small, and reflects commands from either UI.
  const remote=w.document.createElement('b9-remote');remote.setAttribute('for','test-robot');w.document.body.append(remote);
  const rb=action=>remote.shadowRoot.querySelector(`[data-action="${action}"]`);
  assert(remote.panel.hidden);assert.equal(robot.voiceEnabled,false);assert.equal(sounds.length,0);assert.equal(rb('voice').textContent,'Sound: off');
  remote.launcher.click();assert(!remote.panel.hidden);assert.equal(remote.launcher.getAttribute('aria-expanded'),'true');
  rb('roam').click();assert.equal(robot.mode,'patrol');assert.equal(rb('roam').textContent,'Park here');
  rb('roam').click();assert.equal(robot.mode,'parked');rb('retract').click();advance(800);assert.equal(robot.headBob,-.58);
  rb('voice').click();assert(robot.voiceEnabled);assert(sounds.length>0);rb('voice').click();assert(!robot.voiceEnabled);assert(sounds.at(-1).paused);
  robot.patrol();dragTo(170,130);assert.equal(rb('roam').textContent,'Park here');rb('roam').click();advance(4000);assert.equal(robot.mode,'parked');assert.equal(robot.resumeAt,null);
  robot.setVoice(true);assert.equal(rb('voice').textContent,'Sound: on');robot.setVoice(false);
  rb('visible').click();assert.equal(robot.mode,'exiting');assert(!robot.hidden);advance(3000);assert(robot.hidden);assert.equal(rb('visible').textContent,'Show robot');rb('visible').click();assert(!robot.hidden);
  rb('motion').click();assert.equal(robot.motionAllowed,false);assert(rb('greet').disabled);rb('motion').click();assert(robot.motionAllowed);
  const grip=remote.shadowRoot.querySelector('.grip');grip.dispatchEvent(new w.KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true}));assert(remote.position);assert.equal(remote.style.bottom,'auto');grip.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Home',bubbles:true}));assert.equal(remote.position,null);
  remote.launcher.setPointerCapture=()=>{};remote.launcher.hasPointerCapture=()=>false;
  pointer(remote.launcher,'pointerdown',30,30);pointer(remote.launcher,'pointermove',130,80);pointer(remote.launcher,'pointerup',130,80);remote.launcher.click();assert(!remote.open,'Dragging the launcher must not toggle it');assert(remote.position);
  remote.shadowRoot.querySelector('.close').click();assert(remote.panel.hidden);assert.equal(remote.shadowRoot.activeElement,remote.launcher);
  remote.launcher.click();remote.panel.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));assert(remote.panel.hidden);
  remote.setAttribute('for','missing');assert(rb('roam').disabled);remote.setAttribute('for','test-robot');assert(!rb('roam').disabled);
  remote.remove();robot.waveUntil=0;robot.warningUntil=0;
  robot.warn('Warning! Warning!');advance(400);assert.equal(robot.caption.textContent,'Warning! Warning!');assert(!robot.bubble.hidden);
  robot.setVoice(true);robot.warn();assert.match(robot.voiceStatus,/original TV voice clip/);assert.match(sounds.at(-1).src,/^data:audio\/.*;base64,/);assert.equal(sounds.at(-1).paused,false);
  const warningSound=sounds.at(-1);robot.warn('That does not compute.');assert(warningSound.paused);assert.notEqual(sounds.at(-1).src,warningSound.src);
  robot.setVoice(false);assert(sounds.at(-1).paused);robot.setVoice(true);robot.warn('Custom diagnostic phrase.');assert.match(robot.voiceStatus,/caption only/);
  audioFailure=true;robot.warn();assert.match(robot.voiceStatus,/could not play/);audioFailure=false;
  robot.setRenderMode('3d');assert(contextCalls>0);assert.equal(robot.renderMode,'compatibility');assert.equal(robot.compatibility.hidden,false);advance(400);assert.equal(robot.ready,true);
  robot.setMotion(false);advance(80);const p=robot.phase;const stopped=svg.querySelector('.compat-shoulder').getAttribute('transform');advance(500);assert.equal(robot.phase,p);assert.equal(svg.querySelector('.compat-shoulder').getAttribute('transform'),stopped);
  robot.motionOverride=null;reduce=true;motion.dispatchEvent(new w.Event('change'));assert.equal(robot.motionAllowed,false);robot.patrol();assert.equal(robot.mode,'parked');
  robot.face(-90);advance(80);assert.equal(robot.yaw,-Math.PI/2,'An explicit turn should work instantly under reduced motion');
  robot.setMotion(true);robot.patrol();advance(200);assert.equal(robot.mode,'patrol');assert(robot.phase>p);
  robot.warn();robot.hide({immediate:true});assert(sounds.at(-1).paused);assert.equal(frames.size,0);assert(robot.hidden);robot.show();assert(!robot.hidden);
  Object.defineProperty(w,'innerWidth',{value:390,writable:true});Object.defineProperty(w,'innerHeight',{value:844,writable:true});robot.park();assert(robot.size<=220);assert(robot.x>=0&&robot.x+robot.size<=390);
  robot.remove();assert.equal(frames.size,0);
  reduce=false;
  // Interruption of the introduction cannot leave a delayed roaming callback.
  for(const stop of [r=>r.park(false),r=>r.setMotion(false),r=>r.hide({immediate:true}),r=>r.face(90)]){
    const r=w.document.createElement('b9-companion');w.document.body.append(r);r.show({immediate:true});r.startIntroduction();assert(r.greeting?.intro);advance(800);stop(r);const x=r.x;advance(5000);assert.equal(r.mode,'parked');assert.equal(r.greeting,null);assert.equal(r.x,x);r.remove();
  }
  reduce=true;const still=w.document.createElement('b9-companion');w.document.body.append(still);still.show();advance(2000);assert.equal(still.mode,'parked');assert.equal(still.greeting,null);assert.equal(still.voiceEnabled,false);assert.equal(still.x,(w.innerWidth-still.size)/2);still.remove();
  assert.equal(frames.size,0);dom.window.close();
  // Pure geometry tests: no renderer or page is involved.
  const model=await esbuild.build({entryPoints:[__dirname+'/src/model.js'],bundle:true,platform:'node',format:'cjs',write:false});
  const m={exports:{}};new Function('module','exports','require',model.outputFiles[0].text)(m,m.exports,require);
  const rig=m.exports.buildRobot();assert.equal(rig.tracks.length,2);assert.equal(rig.arms.length,2);assert.equal(rig.arms[0].fingers.length,2);
  assert(rig.tracks.every(side=>side.cleats.length===2),'Two animated belts on each drive side');
  const speechParts=[];rig.root.traverse(o=>{if(o.material===rig.mouthMat)speechParts.push(o);});
  assert.equal(speechParts.length,1,'Only one speech-light surface');assert.equal(speechParts[0].name,'upper-speech-glass');assert(speechParts[0].position.y>2.25,'Speaking light is above the console');
  const deck=rig.chassis.getObjectByName('deck');deck.geometry.computeBoundingBox();
  for(const part of rig.supports.children){part.geometry.computeBoundingBox();assert(part.geometry.boundingBox.min.y>=deck.geometry.boundingBox.max.y-1e-6,'3D support must stay above the deck');}
  for(const side of [-1,1]){
    const mount=rig.supports.getObjectByName('support-'+side+'-mount'),bounds=mount.geometry.boundingBox;
    assert(Math.abs(bounds.min.y-deck.geometry.boundingBox.max.y)<1e-6,'3D mount is seated on the deck');
    for(const axis of ['x','z'])assert(bounds.min[axis]+mount.position[axis]>deck.geometry.boundingBox.min[axis]&&bounds.max[axis]+mount.position[axis]<deck.geometry.boundingBox.max[axis],'3D mount fits the deck');
  }
  const rest=rig.head.position.clone();rig.head.rotation.set(.1,.2,.3);rig.updateHead(-.58);
  assert.equal(rig.head.position.x,rest.x);assert.equal(rig.head.position.z,rest.z);assert(Math.abs(rig.head.position.y-(rest.y-.23))<1e-9);assert.equal(rig.head.rotation.x,0);assert.equal(rig.head.rotation.y,0);assert.equal(rig.head.rotation.z,0);assert(Math.abs(rig.neck.position.y-(2.88-.23))<1e-9);assert.equal(rig.neck.visible,false);assert.equal(rig.collar.visible,true);
  rig.updateHead(.18);assert.equal(rig.head.position.x,0);assert.equal(rig.head.position.z,0);assert.equal(rig.head.position.y,rest.y,'Positive extension must be clamped to rest');assert.equal(rig.neck.scale.y,1);rig.updateHead(0);
  const fixedGroups=[rig.root,rig.torso,rig.chassis,rig.supports,rig.collar],fixedTransforms=fixedGroups.map(o=>[...o.position.toArray(),...o.scale.toArray(),...o.rotation.toArray()]);
  for(const amount of [0,.125,.25,.5,.75,.875,1]){
    rig.updateHead(-.58*amount);
    for(const part of [rig.collar,rig.neck,rig.head])assert.deepEqual(part.scale.toArray(),[1,1,1],'Retraction must not squash any head part');
    assert.deepEqual(fixedGroups.map(o=>[...o.position.toArray(),...o.scale.toArray(),...o.rotation.toArray()]),fixedTransforms,'Body and tread base remain fixed during retraction');
    assert(Math.abs(rig.collar.position.y-(2.588))<1e-9);
    for(const part of [rig.collar,rig.neck])part.traverse(o=>{if(o.isMesh)assert.equal(o.material.clippingPlanes[0].constant,part===rig.collar?-2.588:-2.88,'Base and stem opening remain fixed');});
  }
  rig.updateHead(0);
  const cleat=rig.tracks[0].cleats[0].geometry.attributes.position;
  const before=Array.from(cleat.array),shell=rig.chassis.getObjectByName('shell-panel-1');
  const fixedShell=Array.from(shell.geometry.attributes.position.array);rig.updateTracks(.01);assert.notDeepEqual(Array.from(cleat.array),before);assert.deepEqual(Array.from(shell.geometry.attributes.position.array),fixedShell);
  rig.updateTracks(0,.05);
  const yz=tr=>Array.from(tr.cleats[0].geometry.attributes.position.array).filter((_,i)=>i%3!==0);
  assert.notDeepEqual(yz(rig.tracks[0]),yz(rig.tracks[1]),'Pivoting drives the two belts in opposite directions');
  assert.equal(rig.chassis.children.filter(c=>c.name==='shell-panel-1').length,1,'A single joined housing');
  let meshes=0;rig.root.traverse(o=>{if(o.geometry){meshes++;assert(Array.from(o.geometry.attributes.position.array).every(Number.isFinite));}});assert(meshes>100);
  console.log('PASS: vertical head travel and full retraction; drag/resume delay, position and cancellation; portable remote actions, mute defaults, accessibility and dismissal; greeting, turns, audio fallback, motion preferences, geometry and bounds.');
  console.log('Scope: Node/DOM unit tests + geometry checks; NOT browser rendering or audible speech verification.');
})().catch(e=>{console.error(e);process.exitCode=1;});
