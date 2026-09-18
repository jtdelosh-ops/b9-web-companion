// Runs the compiled page scripts in a DOM, not a browser rendering engine.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {JSDOM}=require('jsdom');
(async()=>{
for(const name of ['classic-b9-demo.html','classic-b9-remote.html','embed-example.html']){
 const dom=new JSDOM(fs.readFileSync(__dirname+'/dist/'+name,'utf8'),{runScripts:'outside-only',pretendToBeVisual:true});const w=dom.window;
 let soundStarts=0,now=0,id=0;const frames=new Map();
 w.matchMedia=()=>({matches:false,addEventListener(){}});w.requestAnimationFrame=fn=>{frames.set(++id,fn);return id;};w.cancelAnimationFrame=n=>frames.delete(n);w.setInterval=()=>1;
 Object.defineProperty(w.performance,'now',{value:()=>now});w.HTMLMediaElement.prototype.pause=()=>{};
 w.Audio=class{constructor(){this.paused=true;}play(){soundStarts++;this.paused=false;this.onplaying?.();return Promise.resolve();}pause(){this.paused=true;}};
 w.HTMLCanvasElement.prototype.getContext=()=>{throw Error('Page must use the SVG renderer by default');};
 for(const script of w.document.scripts){w.eval(script.src?fs.readFileSync(__dirname+'/dist/b9-companion.js','utf8'):script.textContent);}
 await Promise.resolve();
 const robot=w.document.querySelector('b9-companion'),remote=w.document.querySelector('b9-remote');
 assert(robot.ready);assert.equal(robot.voiceEnabled,false);assert.equal(soundStarts,0);assert(remote.panel.hidden);assert.equal(remote.robot,robot);assert.equal(remote.quote.options.length,3);assert(robot.getQuotes().every(q=>q.kind==='tv'));assert.equal(w.document.getElementById('voice-mode'),null);
 assert(robot.hidden);assert.equal(frames.size,0);assert.equal(remote.launcher.textContent,'Meet B-9');
 const advance=()=>{now+=40;const callbacks=[...frames.values()];frames.clear();callbacks.forEach(fn=>fn(now));};
 if(name==='classic-b9-demo.html')w.document.getElementById('visibility').click();else remote.launcher.click();
 assert.equal(robot.mode,'entering');assert(robot.x+robot.size<0);assert(remote.panel.hidden);
 for(let i=0;i<130&&!robot.greeting;i++)advance();
 assert.equal(robot.mode,'patrol');assert(robot.greeting.intro);assert.equal(robot.caption.textContent,'Hello!');
 assert.equal(robot.x,(w.innerWidth-robot.size)/2);assert.equal(robot.y,(w.innerHeight-robot.size)/2);
 const startX=robot.x,startY=robot.y;
 for(let i=0;i<75;i++){now+=40;const callbacks=[...frames.values()];frames.clear();callbacks.forEach(fn=>fn(now));assert.equal(robot.x,startX);assert.equal(robot.y,startY);assert.equal(robot.headBob,0);}
 assert(robot.greeting.intro,'Hello should last a few seconds before roaming');
 for(let i=0;i<225;i++){now+=40;const callbacks=[...frames.values()];frames.clear();callbacks.forEach(fn=>fn(now));}
 assert.equal(robot.greeting,null);assert.notEqual(robot.x,startX);assert.notEqual(robot.y,startY);assert(robot.x>=0&&robot.x+robot.size<=w.innerWidth);assert(robot.y>=0&&robot.y+robot.size<=w.innerHeight);
 assert.equal(soundStarts,0,'Idle, rolling and automatic greetings must stay silent');assert.equal(robot.voiceEnabled,false);
 remote.launcher.click();assert(remote.open);
 const about=remote.shadowRoot.querySelector('.about'),aboutButton=remote.shadowRoot.querySelector('.about-toggle');
 assert(about.hidden);aboutButton.click();assert(!about.hidden);assert.equal(aboutButton.getAttribute('aria-expanded'),'true');assert.match(about.textContent,/Web Components/);assert.equal(soundStarts,0);
 const beforeAbout=robot.mode;aboutButton.click();assert(about.hidden);remote.showAbout();assert(!about.hidden);assert.equal(robot.mode,beforeAbout);remote.setOpen(false);assert(about.hidden);assert(remote.panel.hidden);
 if(name==='classic-b9-demo.html'){w.document.getElementById('about').click();assert(remote.open&&!about.hidden);remote.setOpen(false);}
 remote.launcher.click();remote.shadowRoot.querySelector('[data-action="warn"]').click();assert.equal(soundStarts,0,'Warning gesture must not enable sound');
 remote.shadowRoot.querySelector('[data-action="voice"]').click();assert.equal(soundStarts,1);assert(robot.voiceEnabled);
 remote.shadowRoot.querySelector('[data-action="voice"]').click();assert.equal(robot.voiceEnabled,false);
 robot.remove();remote.remove();dom.window.close();
 console.log('PASS compiled page:',name,'— muted startup, Meet entry, center greeting and roaming, remote binding, and explicit sound opt-in.');
}
})();
