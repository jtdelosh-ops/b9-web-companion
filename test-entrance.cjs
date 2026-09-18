// Production component with a controlled animation clock; no browser renderer.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {JSDOM}=require('jsdom');
const dom=new JSDOM('<!doctype html><body></body>',{runScripts:'outside-only',pretendToBeVisual:true}),w=dom.window;
let now=0,id=0,reduced=false,background=false,sounds=0;const frames=new Map(),preference=new w.EventTarget();
Object.defineProperty(w.performance,'now',{value:()=>now});
Object.defineProperty(preference,'matches',{get:()=>reduced});w.matchMedia=()=>preference;
Object.defineProperty(w.document,'hidden',{get:()=>background});
w.requestAnimationFrame=fn=>{frames.set(++id,fn);return id;};w.cancelAnimationFrame=id=>frames.delete(id);
w.Audio=class{play(){sounds++;return Promise.resolve();}pause(){}};
w.eval(fs.readFileSync(__dirname+'/dist/b9-companion.js','utf8'));
const r=w.document.createElement('b9-companion');r.id='entry';w.document.body.append(r);
const remote=w.document.createElement('b9-remote');remote.setAttribute('for','entry');w.document.body.append(remote);
const action=name=>remote.shadowRoot.querySelector(`[data-action="${name}"]`);
const advance=ms=>{for(let t=0;t<ms;t+=40){now+=40;const pending=[...frames.values()];frames.clear();pending.forEach(fn=>fn(now));}};
const arrive=()=>{for(let i=0;i<200&&r.entrance;i++)advance(40);assert(!r.entrance);assert(r.greeting?.intro);assert.equal(r.yaw,0);assert.equal(r.x,(w.innerWidth-r.size)/2);assert.equal(r.y,(w.innerHeight-r.size)/2);};
assert(r.hidden);assert.equal(frames.size,0);assert.equal(remote.launcher.textContent,'Meet B-9');assert.equal(remote.launcher.getAttribute('aria-label'),'Meet B-9');assert(action('roam').disabled);
remote.launcher.click();assert.equal(r.mode,'entering');assert(r.x+r.size<0);assert.equal(r.greeting,null);assert(r.figure.disabled);assert(remote.panel.hidden);assert(action('warn').disabled);
const initialX=r.x,initialTreads=r.svg.querySelector('.compat-chassis').innerHTML;advance(400);assert(r.x>initialX);assert(r.phase>0);assert.notEqual(r.svg.querySelector('.compat-chassis').innerHTML,initialTreads);
const sameEntry=r.entrance;r.show();assert.equal(r.entrance,sameEntry,'Repeated Show must not reset travel');
arrive();const cx=r.x,cy=r.y,phase=r.phase,arm=r.svg.querySelector('.compat-shoulder').getAttribute('transform');advance(400);assert.notEqual(r.svg.querySelector('.compat-shoulder').getAttribute('transform'),arm);advance(2800);assert(r.greeting?.intro);assert.equal(r.x,cx);assert.equal(r.y,cy);assert.equal(r.phase,phase);
advance(700);assert.equal(r.greeting,null);assert.equal(r.mode,'patrol');assert.notEqual(r.x,cx);assert.notEqual(r.y,cy);assert.equal(sounds,0);assert.equal(r.voiceEnabled,false);
remote.launcher.click();assert(remote.open);r.hide();advance(4000);assert(r.hidden);assert(remote.panel.hidden);assert.equal(remote.launcher.textContent,'Meet B-9');
// The Show control and launcher share the entrance; both screen edges work.
for(const side of [-1,1]){
 r.entrySide=side;action('visible').click();assert.equal(r.mode,'entering');assert(side<0?r.x+r.size<0:r.x>w.innerWidth);arrive();r.hide({immediate:true});
}
// Mid-exit Show turns back from the current location without teleporting.
r.show({immediate:true});r.park(false);r.x=100;r.y=180;r.hide();advance(1000);const exitX=r.x,exitY=r.y;r.show();assert.equal(r.x,exitX);assert.equal(r.y,exitY);assert.equal(r.mode,'entering');arrive();
// Entry tracks a viewport resize, including the smaller mobile size limit.
r.hide({immediate:true});r.show();advance(400);const travelX=r.x;w.innerWidth=390;w.innerHeight=844;r.resize();assert.equal(r.x,travelX);arrive();assert(r.size<=220);
// A background tab suspends entry; returning resumes toward the center.
r.hide({immediate:true});r.show();advance(200);background=true;w.document.dispatchEvent(new w.Event('visibilitychange'));const suspendedX=r.x;advance(2000);assert.equal(frames.size,0);assert.equal(r.x,suspendedX);background=false;w.document.dispatchEvent(new w.Event('visibilitychange'));arrive();
// Backgrounding during Hello preserves its remaining visible wave and caption.
advance(1000);const helloX=r.x,helloY=r.y,helloElapsed=r.elapsed;
background=true;w.document.dispatchEvent(new w.Event('visibilitychange'));advance(20000);
assert.equal(frames.size,0);assert.equal(r.elapsed,helloElapsed);assert.equal(r.x,helloX);assert.equal(r.y,helloY);
background=false;w.document.dispatchEvent(new w.Event('visibilitychange'));advance(2400);
assert(r.greeting?.intro,'Hello must finish its remaining visible duration after returning');assert.equal(r.caption.textContent,'Hello!');assert.equal(r.bubble.hidden,false);assert.equal(r.x,helloX);assert.equal(r.y,helloY);
advance(400);assert.equal(r.greeting,null);assert.equal(r.bubble.hidden,true);assert.equal(r.mode,'patrol');assert.notEqual(r.x,helloX);assert.notEqual(r.y,helloY);
// Motion preferences finish entry without animation, then stay parked.
r.hide({immediate:true});r.show();advance(200);reduced=true;preference.dispatchEvent(new w.Event('change'));assert(!r.entrance);assert.equal(r.mode,'parked');assert.equal(r.greeting,null);assert.equal(r.x,(w.innerWidth-r.size)/2);advance(4000);assert.equal(frames.size,0);
r.hide();r.show();assert.equal(r.mode,'parked');assert.equal(r.waveUntil,0);assert.equal(r.caption.textContent,'Hello!');
// The stationary reduced-motion Hello also retains its caption while suspended.
advance(1000);const stillX=r.x,stillY=r.y;background=true;w.document.dispatchEvent(new w.Event('visibilitychange'));advance(20000);assert.equal(frames.size,0);
background=false;w.document.dispatchEvent(new w.Event('visibilitychange'));advance(2400);assert.equal(r.bubble.hidden,false);assert.equal(r.mode,'parked');assert.equal(r.x,stillX);assert.equal(r.y,stillY);
advance(400);assert.equal(r.bubble.hidden,true);assert.equal(frames.size,0);assert.equal(r.x,stillX);assert.equal(r.y,stillY);r.hide();assert.equal(frames.size,0);
reduced=false;r.show();advance(200);r.setMotion(false);assert.equal(r.mode,'parked');assert.equal(r.entrance,null);r.hide();r.setMotion(true);
// Cancelling entry must leave no delayed greeting or motion callback.
for(const stop of [()=>r.hide({immediate:true}),()=>r.park(false),()=>r.remove()]){
 if(!r.isConnected)w.document.body.append(r);r.hide({immediate:true});r.show();advance(240);stop();const x=r.x;advance(5000);assert.equal(r.entrance,null);assert.equal(r.greeting,null);assert.equal(r.x,x);
}
assert.equal(sounds,0);remote.remove();dom.window.close();assert.equal(frames.size,0);
console.log('PASS: opt-in Meet/Show, both entry sides, center/turn/hello/roam, active treads, repeat clicks, exit reversal, resize, background entry/Hello suspension, reduced motion, interruptions and mute.');
