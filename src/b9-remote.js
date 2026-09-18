import {SOUND_BITES} from './voice-clips.js';
// Optional, style-isolated controls. Including the bundle alone adds no remote.
class B9Remote extends HTMLElement {
  static get observedAttributes(){return ['for'];}
  constructor(){super();this.attachShadow({mode:'open'});this.open=false;this.position=null;}
  connectedCallback(){
    if(this.abort)return;
    this.abort=new AbortController();
    const on=(target,event,fn)=>target.addEventListener(event,fn,{signal:this.abort.signal});
    this.shadowRoot.innerHTML=`<style>
      :host{position:fixed;left:16px;bottom:16px;z-index:var(--b9-remote-z-index,1200);display:block;width:236px;max-width:calc(100vw - 24px);font:13px/1.4 Arial,Helvetica,sans-serif;color:#2b363c;color-scheme:light}
      :host([hidden]){display:none!important}*{box-sizing:border-box}button{font:inherit;color:inherit;cursor:pointer}button:focus-visible,.grip:focus-visible{outline:2px solid #aa4031;outline-offset:3px}button:disabled{cursor:default;opacity:.5}
      .launcher{display:flex;align-items:center;gap:9px;min-height:44px;padding:10px 15px;border:1px solid #cac7bd;border-radius:24px;background:#f7f4ed;box-shadow:0 3px 14px #0002;touch-action:none;user-select:none}
      .dot{width:8px;height:8px;border-radius:50%;background:#a63e31}.label{font-size:12px;font-weight:600}.panel{margin-top:8px;border:1px solid #cecac0;border-radius:14px;background:#f7f4ed;box-shadow:0 8px 32px #18282b26;overflow:auto;max-height:calc(100dvh - 84px)}[hidden]{display:none!important}
      header{display:flex;align-items:center;justify-content:space-between;padding:5px 8px 5px 14px;border-bottom:1px solid #ddd8ce}.grip{flex:1;padding:10px 0;font-size:10px;letter-spacing:.12em;cursor:grab;touch-action:none;user-select:none}.grip:active{cursor:grabbing}.close{border:0;background:none;width:34px;height:34px;border-radius:6px;font-size:20px}
      .body{padding:12px}.actions{display:grid;grid-template-columns:1fr 1fr;gap:7px}.actions button{border:1px solid #d1cdc3;border-radius:7px;background:#fffdf7;min-height:38px;padding:7px 5px;font-size:12px}.actions button:hover{border-color:#ae5a48}.actions button[aria-pressed=true]{background:#e8e4d9;border-color:#a8a397}.actions .accent{color:#97402f}
      .status{font-size:11px;color:#637075;margin:11px 0 0;min-height:16px}.hint{font-size:10px;color:#7b827f;margin:4px 0 0}.close:hover{background:#e9e4d9}
      .about-toggle{margin-top:10px;width:100%;min-height:34px;padding:6px 9px;border:1px solid #d1cdc3;border-radius:7px;background:transparent;font-size:11px;text-align:left}.about-toggle::after{content:'+';float:right}.about-toggle[aria-expanded=true]::after{content:'−'}.about{margin-top:10px;padding-top:10px;border-top:1px solid #ddd8ce;font-size:12px;color:#59686c}.about p{margin:0 0 8px}.about p:last-child{margin:0;font-size:11px}.about strong{color:#33464c}
      .soundbites{margin-top:10px;border:1px solid #d1cdc3;border-radius:7px;font-size:11px}.soundbites summary{cursor:pointer;padding:9px}.soundbody{padding:0 9px 10px}.soundbody select{width:100%;min-height:36px;font:12px Arial;background:#fffdf7;border:1px solid #d1cdc3;border-radius:5px;color:inherit}.soundbody button{margin-top:7px;min-height:34px;width:100%;border:1px solid #d1cdc3;border-radius:5px;background:#fffdf7}.soundbody label{display:flex;align-items:center;gap:6px;margin-top:9px}.soundbody input{accent-color:#a63e31}.sound-note{font-size:10px;line-height:1.4;color:#637075;margin:7px 0}.soundbody select:focus-visible,.soundbites summary:focus-visible{outline:2px solid #aa4031;outline-offset:2px}
      @media print{:host{display:none!important}}
    </style>
    <button class="launcher" aria-label="Open B-9 remote" aria-expanded="false" aria-controls="controls" title="B-9 remote · drag to move"><span class="dot" aria-hidden="true"></span><span class="label">B-9 remote</span></button>
    <section class="panel" id="controls" aria-label="B-9 remote controls" hidden>
      <header><div class="grip" role="button" tabindex="0" aria-label="Move remote: drag or use arrow keys; Home resets position" title="Drag to move · arrow keys also work">⠿ &nbsp; ROBOT CONTROL</div><button class="close" aria-label="Close remote">×</button></header>
      <div class="body"><div class="actions">
        <button data-action="roam">Start roaming</button><button data-action="voice" aria-pressed="false">Sound: off</button>
        <button data-action="greet">Face & wave</button><button class="accent" data-action="warn">Warning!</button>
        <button data-action="retract">Retract head</button><button data-action="raise">Restore head</button>
        <button data-action="left" aria-label="Turn robot left">↶ Turn left</button><button data-action="right" aria-label="Turn robot right">Turn right ↷</button>
        <button data-action="motion">Pause motion</button><button data-action="visible">Hide robot</button>
      </div><details class="soundbites"><summary>Soundbites</summary><div class="soundbody"><select aria-label="Choose a Robot soundbite"></select><button data-action="say">Say it</button><p class="sound-note"></p><label><input class="routine" type="checkbox">Occasional lines</label></div></details><button class="about-toggle" aria-expanded="false" aria-controls="about">About me</button><section class="about" id="about" aria-label="About B-9" hidden><p>I'm B-9, a fan-made companion inspired by the Robot from the original <em>Lost in Space</em>. I roam, wave, and keep an eye out for danger.</p><p><strong>Built with</strong> JavaScript, Web Components, SVG and Web Audio. Optional 3D uses Three.js.</p></section><p class="status" role="status">Connecting to Robot…</p><p class="hint">Drag the top bar to move this remote.</p></div>
    </section>`;
    this.launcher=this.shadowRoot.querySelector('.launcher');this.panel=this.shadowRoot.querySelector('.panel');
    this.quote=this.shadowRoot.querySelector('.soundbody select');
    for(const quote of SOUND_BITES){const option=document.createElement('option');option.value=quote.text;option.textContent=quote.text;this.quote.append(option);}
    on(this.quote,'change',()=>this.sync());
    on(this.shadowRoot.querySelector('.routine'),'change',event=>this.robot?.setRoutine(event.target.checked));
    on(this.shadowRoot.querySelector('.soundbites'),'toggle',()=>this.clampPosition());
    on(this.shadowRoot.querySelector('.about-toggle'),'click',()=>this.setAbout(this.shadowRoot.querySelector('.about').hidden));
    on(this.launcher,'click',()=>{if(this.suppressClick){this.suppressClick=false;return;}if(this.robot&&(this.robot.hidden||this.robot.mode==='exiting')){this.setOpen(false);this.robot.show();}else this.setOpen(!this.open);});
    on(this.shadowRoot.querySelector('.close'),'click',()=>this.setOpen(false,true));
    on(this.shadowRoot,'click',event=>{const action=event.target.closest('[data-action]')?.dataset.action;if(action)this.act(action);});
    on(this.shadowRoot,'keydown',event=>{if(event.key==='Escape'&&this.open){event.preventDefault();event.stopPropagation();this.setOpen(false,true);}});
    on(document,'pointerdown',event=>{if(this.open&&!event.composedPath().includes(this))this.setOpen(false);});
    on(document,'robotstatechange',event=>{if(event.target===this.robot)this.sync();});
    on(window,'resize',()=>this.clampPosition());
    for(const handle of [this.launcher,this.shadowRoot.querySelector('.grip')]){
      on(handle,'pointerdown',event=>{
        if(event.button!==0)return;
        const rect=this.getBoundingClientRect();this.suppressClick=false;
        this.drag={id:event.pointerId,x:event.clientX,y:event.clientY,left:rect.left,top:rect.top,moved:false};handle.setPointerCapture(event.pointerId);
      });
      on(handle,'pointermove',event=>{
        const d=this.drag;if(!d||event.pointerId!==d.id)return;
        d.moved ||= Math.hypot(event.clientX-d.x,event.clientY-d.y)>5;
        if(d.moved){this.position={x:d.left+event.clientX-d.x,y:d.top+event.clientY-d.y};this.clampPosition();}
      });
      const release=event=>{if(this.drag?.id!==event.pointerId)return;this.suppressClick=this.drag.moved;this.drag=null;if(handle.hasPointerCapture(event.pointerId))handle.releasePointerCapture(event.pointerId);};
      on(handle,'pointerup',release);on(handle,'pointercancel',release);on(handle,'lostpointercapture',release);
    }
    on(this.shadowRoot.querySelector('.grip'),'keydown',event=>{
      if(event.key==='Home'){event.preventDefault();this.position=null;this.style.left='';this.style.top='';this.style.bottom='';return;}
      const delta={ArrowLeft:[-20,0],ArrowRight:[20,0],ArrowUp:[0,-20],ArrowDown:[0,20]}[event.key];if(!delta)return;
      event.preventDefault();const rect=this.getBoundingClientRect();this.position={x:rect.left+delta[0],y:rect.top+delta[1]};this.clampPosition();
    });
    this.setOpen(this.open);this.connect();
    customElements.whenDefined('b9-companion').then(()=>{if(this.isConnected)this.connect();});
  }
  disconnectedCallback(){this.abort?.abort();this.abort=null;this.drag=null;this.robot=null;}
  attributeChangedCallback(){if(this.abort)this.connect();}
  connect(){
    const id=this.getAttribute('for');this.robot=id?document.getElementById(id):document.querySelector('b9-companion');
    if(typeof this.robot?.debugState!=='function')this.robot=null;this.sync();
  }
  setAbout(show){
    this.shadowRoot.querySelector('.about').hidden=!show;
    this.shadowRoot.querySelector('.about-toggle').setAttribute('aria-expanded',String(!!show));this.clampPosition();
  }
  showAbout(){this.setOpen(true);this.setAbout(true);}
  setOpen(open,restoreFocus=false){
    this.open=!!open;this.panel.hidden=!this.open;if(!this.open)this.setAbout(false);this.syncLauncher();
    this.style.width=this.open?'236px':'max-content';this.clampPosition();
    if(restoreFocus)this.launcher.focus();
  }
  syncLauncher(){
    const meet=this.robot&&(this.robot.hidden||this.robot.mode==='exiting');
    this.launcher.querySelector('.label').textContent=meet?'Meet B-9':'B-9 remote';
    this.launcher.setAttribute('aria-label',meet?'Meet B-9':`${this.open?'Close':'Open'} B-9 remote`);
    this.launcher.title=meet?'Meet B-9 · drag to move':'B-9 remote · drag to move';
    if(meet){this.launcher.removeAttribute('aria-expanded');this.launcher.removeAttribute('aria-controls');}
    else{this.launcher.setAttribute('aria-expanded',String(this.open));this.launcher.setAttribute('aria-controls','controls');}
  }
  clampPosition(){
    if(!this.position)return;
    const r=this.getBoundingClientRect();this.position.x=Math.max(12,Math.min(this.position.x,innerWidth-r.width-12));this.position.y=Math.max(12,Math.min(this.position.y,innerHeight-r.height-12));
    this.style.left=this.position.x+'px';this.style.top=this.position.y+'px';this.style.bottom='auto';
  }
  act(action){
    const r=this.robot;if(!r)return;
    switch(action){
      case 'roam':if(r.mode==='patrol'||r.resumeAt!==null)r.park(false);else{r.setMotion(true);r.patrol({keepPosition:true});}break;
      case 'voice':r.setVoice(!r.voiceEnabled);if(r.voiceEnabled&&!r.hidden&&!['entering','exiting'].includes(r.mode))r.warn();break;
      case 'greet':r.greet();break;
      case 'warn':r.warn();break;
      case 'say':r.warn(this.quote.value);break;
      case 'retract':r.retractHead();break;
      case 'raise':r.restoreHead();break;
      case 'left':r.turn(-90);break;
      case 'right':r.turn(90);break;
      case 'motion':r.setMotion(!r.motionAllowed);break;
      case 'visible':r.hidden||r.mode==='exiting'?r.show():r.hide();break;
    }
    this.sync();
  }
  sync(){
    if(!this.panel)return;
    const status=this.shadowRoot.querySelector('.status'),buttons=this.shadowRoot.querySelectorAll('[data-action]');
    buttons.forEach(button=>button.disabled=!this.robot);
    this.quote.disabled=!this.robot;this.shadowRoot.querySelector('.routine').disabled=!this.robot;
    if(!this.robot){status.textContent='Robot not found. Check the remote’s “for” ID.';return;}
    const r=this.robot,s=r.debugState(),button=action=>this.shadowRoot.querySelector(`[data-action="${action}"]`);
    if(r.hidden&&!this.wasHidden)this.setOpen(false);this.wasHidden=r.hidden;this.syncLauncher();
    button('roam').textContent=s.mode==='patrol'||s.resumePending?'Park here':'Start roaming';
    button('voice').textContent=s.voice?'Sound: on':'Sound: off';button('voice').setAttribute('aria-pressed',String(s.voice));
    button('motion').textContent=s.motionAllowed?'Pause motion':'Allow motion';button('visible').textContent=r.hidden||s.mode==='exiting'?'Show robot':'Hide robot';
    for(const action of ['greet','retract','raise'])button(action).disabled=!s.motionAllowed;
    const unavailable=r.hidden||['entering','exiting'].includes(s.mode);
    if(unavailable)for(const action of ['roam','greet','warn','say','retract','raise','left','right'])button(action).disabled=true;
    const routine=this.shadowRoot.querySelector('.routine');routine.checked=r.routine;routine.disabled=unavailable;
    this.shadowRoot.querySelector('.sound-note').textContent=`Original TV recording · ${s.voice?'sound enabled':'captions only until Sound is on'}`;
    const activity=r.hidden?'Ready to meet B-9':s.mode==='entering'?'Rolling in':s.mode==='exiting'?'Rolling away':!s.motionAllowed?'Motion paused':s.resumePending?'Resumes shortly':s.introduction?'Hello!':s.greeting?'Facing & waving':s.retracting?'Head retracted':s.mode==='patrol'?'Roaming':'Parked';
    const text=s.voice&&s.audioError?'Voice unavailable · captions remain active':`${activity} · ${s.voice?'sound on':'muted'}`;
    if(status.textContent!==text)status.textContent=text;
  }
}
if(!customElements.get('b9-remote'))customElements.define('b9-remote',B9Remote);
