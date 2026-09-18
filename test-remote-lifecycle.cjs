// Production remote lifecycle checks; rendering and audio have separate suites.
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {JSDOM,VirtualConsole}=require('jsdom');
const bundle=fs.readFileSync(__dirname+'/dist/b9-companion.js','utf8');

function fixture(t,markup='<b9-companion id="robot"></b9-companion><b9-remote for="robot"></b9-remote>'){
  const errors=[],virtualConsole=new VirtualConsole();
  virtualConsole.on('jsdomError',error=>errors.push(error.message));
  const dom=new JSDOM('<!doctype html><body>'+markup+'</body>',{runScripts:'outside-only',pretendToBeVisual:true,virtualConsole});
  const w=dom.window,motion=new w.EventTarget();motion.matches=false;w.matchMedia=()=>motion;
  // These tests check command dispatch without advancing the animation clock.
  w.requestAnimationFrame=()=>1;w.cancelAnimationFrame=()=>{};
  w.eval(bundle);
  t.after(()=>{w.document.body.replaceChildren();w.close();assert.deepEqual(errors,[],'Unexpected browser errors');});
  return {window:w,document:w.document,robot:w.document.querySelector('b9-companion'),remote:w.document.querySelector('b9-remote'),
    async flush(){for(let i=0;i<6;i++)await Promise.resolve();}};
}

test('a remote inserted after registration connects to its named target added later',async t=>{
  const f=fixture(t,'<main></main>');
  assert.ok(f.window.customElements.get('b9-companion'));
  const remote=f.document.createElement('b9-remote');remote.setAttribute('for','late-robot');f.document.body.append(remote);
  await f.flush();
  assert.equal(remote.robot,null);
  assert.equal(remote.shadowRoot.querySelector('[data-action="voice"]').disabled,true);
  const wrapper=f.document.createElement('section'),robot=f.document.createElement('b9-companion');robot.id='late-robot';
  wrapper.append(robot);f.document.querySelector('main').append(wrapper);
  await f.flush();
  assert.equal(remote.robot,robot);
  assert.equal(remote.shadowRoot.querySelector('.label').textContent,'Meet B-9');
  assert.equal(remote.shadowRoot.querySelector('[data-action="voice"]').disabled,false);
  remote.launcher.click();assert.equal(robot.mode,'entering');
  let lookups=0;const connect=remote.connect.bind(remote);remote.connect=()=>{lookups++;connect();};
  const unrelated=f.document.createElement('div');f.document.body.append(unrelated);unrelated.id='ordinary-page-update';
  await f.flush();
  assert.equal(lookups,0,'A connected remote does not observe unrelated document changes');
});

test('a remote without for connects when the first companion arrives later',async t=>{
  const f=fixture(t,'<b9-remote></b9-remote>');await f.flush();assert.equal(f.remote.robot,null);
  const robot=f.document.createElement('b9-companion');f.document.body.append(robot);await f.flush();
  assert.equal(f.remote.robot,robot);
  assert.equal(f.remote.shadowRoot.querySelector('.label').textContent,'Meet B-9');
});

test('changing for clears stale controls, waits for the new ID, and can restore the default target',async t=>{
  const f=fixture(t);await f.flush();f.remote.setAttribute('for','replacement');
  assert.equal(f.remote.robot,null);
  assert.equal(f.remote.shadowRoot.querySelector('.label').textContent,'B-9 remote');
  assert.equal(f.remote.launcher.getAttribute('aria-controls'),'controls');
  assert.equal(f.remote.shadowRoot.querySelector('[data-action="voice"]').disabled,true);
  f.robot.setVoice(true);assert.equal(f.remote.robot,null,'The old target cannot reclaim the remote with a state event');
  const replacement=f.document.createElement('b9-companion');replacement.id='not-yet-the-target';f.document.body.append(replacement);
  await f.flush();assert.equal(f.remote.robot,null);
  replacement.id='replacement';await f.flush();assert.equal(f.remote.robot,replacement);
  assert.equal(f.remote.shadowRoot.querySelector('[data-action="voice"]').getAttribute('aria-pressed'),'false');
  f.remote.removeAttribute('for');assert.equal(f.remote.robot,f.robot);
  assert.equal(f.remote.shadowRoot.querySelector('[data-action="voice"]').getAttribute('aria-pressed'),'true');
});

test('disconnect cancels observation and pending definition callbacks; reinsertion reconnects once',async t=>{
  const f=fixture(t,'<b9-remote for="later"></b9-remote>'),remote=f.remote;
  let lookups=0;const connect=remote.connect.bind(remote);remote.connect=()=>{lookups++;connect();};remote.remove();
  const robot=f.document.createElement('b9-companion');robot.id='later';f.document.body.append(robot);await f.flush();
  assert.equal(lookups,0);assert.equal(remote.robot,null);assert.equal(remote.abort,null);
  f.document.body.append(remote);await f.flush();assert.equal(remote.robot,robot);
  let shows=0;const show=robot.show.bind(robot);robot.show=(...args)=>{shows++;return show(...args);};remote.launcher.click();
  assert.equal(shows,1,'Reinsertion installs one set of launcher handlers');assert.equal(robot.mode,'entering');
});

test('disconnect removes document and window listeners',async t=>{
  const f=fixture(t);await f.flush();f.remote.setOpen(true);f.remote.remove();
  let closes=0,resizes=0;f.remote.setOpen=()=>{closes++;};f.remote.clampPosition=()=>{resizes++;};
  f.document.body.dispatchEvent(new f.window.Event('pointerdown',{bubbles:true,composed:true}));
  f.window.dispatchEvent(new f.window.Event('resize'));assert.equal(closes,0);assert.equal(resizes,0);
});
