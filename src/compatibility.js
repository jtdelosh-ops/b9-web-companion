import {chassisMarkup,supportMarkup,projectPoint,SUPPORT_X,SUPPORT_Z} from './chassis.js';
const chassisCache=new WeakMap();
const BODY_OUTLINE='M176 134Q144 136 138 156v57q0 26 43 34h78q43-8 43-34v-57q-6-20-38-22z';

// A code-native articulated SVG, not a still-image fallback. No GPU required.
export function compatibilityMarkup(){
  const rows=(n,fn)=>Array.from({length:n},(_,i)=>fn(i)).join('');
  const leg=side=>`<g class="compat-leg" data-side="${side}" transform="translate(${side*SUPPORT_X} ${SUPPORT_Z*.13-5.2})">${supportMarkup()}</g>`;
  const arm=side=>`<g class="compat-arm" data-side="${side}" transform="translate(${220+side*76} 177)"><ellipse rx="25" ry="27" fill="url(#silver)" stroke="#cdd3d4" stroke-width="2"/><ellipse rx="20" ry="23" fill="#202629" stroke="#646e72" stroke-width="2"/><g class="compat-shoulder"><rect x="-18" y="-1" width="36" height="47" rx="16" fill="url(#rubber)"/>${rows(10,i=>`<ellipse cx="0" cy="${i*4}" rx="20" ry="5" fill="url(#rubber)" stroke="#131819" stroke-width=".7"/>`)}<g class="compat-elbow" transform="translate(0 41)"><rect x="-16" y="-2" width="32" height="36" rx="14" fill="url(#rubber)"/>${rows(8,i=>`<ellipse cy="${i*4}" rx="18" ry="5" fill="url(#rubber)" stroke="#14191a" stroke-width=".7"/>`)}<ellipse cy="30" rx="23" ry="8" fill="url(#silver)" stroke="#d5d8d6" stroke-width="1.5"/><ellipse cy="34" rx="23" ry="8" fill="url(#silver)" stroke="#414b50"/><ellipse cy="36" rx="17" ry="6" fill="#252a2b"/><g class="compat-claw" transform="translate(0 37)"><path d="M-2 1h-10q-11 2-11 14t16 17v-9q-7-2-7-9t12-6zM2 1h10q11 2 11 14t-16 17v-9q7-2 7-9t-12-6z" fill="url(#claw)" stroke="#620b0e" stroke-width="1.3"/><path d="M-12 4q-9 3-8 13M12 4q9 3 8 13" fill="none" stroke="#ee6559" stroke-width="1" opacity=".7"/></g></g></g></g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 440" role="img" aria-label="Articulated classic television-style B-9 robot">
  <defs>
    <clipPath id="body-panel-clip" clipPathUnits="userSpaceOnUse"><path d="${BODY_OUTLINE}"/></clipPath>
    <clipPath id="head-frame-clip" clipPathUnits="userSpaceOnUse"><rect width="440" height="134"/></clipPath>
    <clipPath id="head-stem-clip" clipPathUnits="userSpaceOnUse"><rect class="compat-stem-window" x="0" y="76" width="440" height="32"/></clipPath>
    <linearGradient id="silver"><stop stop-color="#5e686c"/><stop offset=".13" stop-color="#9aa6aa"/><stop offset=".31" stop-color="#d3d8d8"/><stop offset=".52" stop-color="#b5bdc0"/><stop offset=".78" stop-color="#7b888f"/><stop offset=".95" stop-color="#aeb8bd"/><stop offset="1" stop-color="#65737a"/></linearGradient>
    <linearGradient id="rubber" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#15191a"/><stop offset=".3" stop-color="#454b4b"/><stop offset=".52" stop-color="#303637"/><stop offset="1" stop-color="#131819"/></linearGradient>
    <linearGradient id="amber" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#ffdf86"/><stop offset=".25" stop-color="#ffbd52"/><stop offset=".6" stop-color="#e97a24"/><stop offset="1" stop-color="#9f3819"/></linearGradient>
    <linearGradient id="claw"><stop stop-color="#6b080b"/><stop offset=".35" stop-color="#e13934"/><stop offset=".7" stop-color="#b4131a"/><stop offset="1" stop-color="#69070d"/></linearGradient>
    <radialGradient id="glass" cx=".37" cy=".18" r=".82"><stop stop-color="#fff" stop-opacity=".64"/><stop offset=".4" stop-color="#c0d2df" stop-opacity=".05"/><stop offset=".84" stop-color="#a9c3d4" stop-opacity=".20"/><stop offset="1" stop-color="#eaf5fd" stop-opacity=".70"/></radialGradient>
    <linearGradient id="stem"><stop stop-color="#101215"/><stop offset=".4" stop-color="#5d6164"/><stop offset=".6" stop-color="#323539"/><stop offset="1" stop-color="#101215"/></linearGradient>
    <pattern id="tracks" width="13" height="10" patternUnits="userSpaceOnUse"><rect width="13" height="10" fill="#13171b"/><rect x="1" y="1" width="11" height="6" rx="1" fill="#4b5258"/><path d="M2 1h9" stroke="#839096" stroke-width="1"/><path d="M6 2v5" stroke="#2a3036"/></pattern>
    <pattern id="side-tracks" width="10" height="13" patternUnits="userSpaceOnUse"><rect width="10" height="13" fill="#13171b"/><rect x="1" y="1" width="6" height="11" rx="1" fill="#4b5258"/><path d="M1 2v9" stroke="#839096" stroke-width="1"/></pattern>
  </defs>
  <ellipse cx="220" cy="429" rx="111" ry="7" fill="#000" opacity=".16"/>
  <g class="compat-chassis">${chassisMarkup(0)}</g><g class="compat-legs">${leg(-1)}${leg(1)}</g>
  <g class="compat-waist"><ellipse cx="220" cy="250" rx="67" ry="9" fill="url(#silver)" stroke="#d6dcd9"/><path d="M154 246v10q66 12 132 0v-10" fill="url(#silver)" stroke="#65747b"/>${rows(5,i=>`<rect x="151" y="${253+i*8}" width="138" height="13" rx="7" fill="url(#rubber)" stroke="#171c1d" stroke-width="1"/>`)}</g>
  <g class="compat-arms-back"></g>
  <g class="compat-body">
    <path class="compat-body-outline" d="${BODY_OUTLINE}" fill="url(#silver)" stroke="#747e85" stroke-width="1.5"/>
    <path d="M139 154q81-12 162 0M139 222q81 10 162 0" fill="none" stroke="#59676d" stroke-width="2"/>
    <path d="M142 151q78-12 156 0M140 224q80 10 160 0" fill="none" stroke="#e0e4e2" stroke-width="1"/>
    <path d="M168 244q52 9 104 0" fill="none" stroke="#dce2df" stroke-width="2"/>
    <g class="compat-body-panels" clip-path="url(#body-panel-clip)">
    <g class="compat-front-panel">
    <path d="M187 138h66v37h-66z" fill="#454e50" stroke="#e0e3df" stroke-width="2.5"/>
    <path d="M191 142h58v28h-58z" fill="#723b20"/>
    <path class="compat-mouth compat-speech-glass" d="M191 142h58v28h-58z" fill="url(#amber)" opacity=".45"/>
    ${rows(4,i=>`<path d="M191 ${145+i*7}h58" stroke="#f2dfb5" stroke-width="2"/><path d="M191 ${147+i*7}h58" stroke="#b66a33" stroke-width=".7"/>`)}
    <path d="M193 143h54" stroke="#fff1ca" stroke-opacity=".8" stroke-width="1"/>
    <rect class="compat-console" x="194" y="176" width="52" height="47" rx="1" fill="#343b3c" stroke="#d7dcda" stroke-width="1.8"/>
    <circle cx="207" cy="185" r="6.2" fill="#eff0db" stroke="#a0a8a5"/><circle cx="233" cy="185" r="6.2" fill="#f3f4df" stroke="#a0a8a5"/>
    ${rows(15,i=>`<rect x="${197+i%5*9.5}" y="${195+Math.floor(i/5)*6.4}" width="7.4" height="5.2" rx=".5" fill="${['#59a868','#e8c653','#f4e19d','#d84d52','#70adc0'][i%5]}" stroke="#c5ceba" stroke-width=".6"/>`)}
    ${rows(12,i=>`<circle class="compat-lamp" cx="${200+i%6*8}" cy="${217+Math.floor(i/6)*5.3}" r="2.25" fill="${['#d893d2','#a39add','#83bcb2','#ad91bd','#e5d6ae','#718f9a'][i%6]}" stroke="#a5b4af" stroke-width=".4"/>`)}
    ${rows(2,side=>{const x=side?257:151;return `<path d="M${x} 226l25 2-5 14-18-6z" fill="#606c70" stroke="#c3cccb"/>${rows(8,i=>`<path d="M${x+2+i*2.8} 228l${side?-3:3} 10" stroke="#cad1cd" stroke-width="1"/>`)}`;})}
    <ellipse cx="178" cy="217" rx="5" ry="4" fill="#262b30" stroke="#e0e5e8"/><path d="M173 217h10" stroke="#f2f4f5"/>
    <ellipse cx="262" cy="217" rx="5" ry="4" fill="#747b80" stroke="#cdd5da"/>
    </g>
    <g class="compat-rear-panel" opacity="0"><path d="M195 146h50v88h-50z" fill="url(#silver)" stroke="#69737b" stroke-width="1.5"/><path d="M199 152h42v28h-42z" fill="#30383e"/>${rows(9,i=>`<path d="M201 ${155+i*2.7}h38" stroke="#aeb8c0" stroke-width="1.2"/>`)}<rect x="209" y="208" width="22" height="12" rx="2" fill="#1d252a" stroke="#c3cbd0"/><circle cx="220" cy="214" r="3.5" fill="#8e979c"/><circle cx="199" cy="186" r="1.6" fill="#363e45"/><circle cx="241" cy="186" r="1.6" fill="#363e45"/></g>
    </g>
  </g>
  <g class="compat-arms-front">${arm(-1)}${arm(1)}</g>
  <g class="compat-head-pocket" clip-path="url(#head-frame-clip)">
  <g class="compat-collar"><ellipse cx="220" cy="134" rx="42" ry="7" fill="#24292d"/><path d="M187 107q-34 15-12 26q45 14 90 0q22-11-12-26z" fill="url(#stem)"/>
    ${rows(39,i=>{const x=174+i*2.42;const top=220+(x-220)*.69;return `<path d="M${top} 107Q${x} 118 ${x} 128l${(220-x)*.12} 6" fill="none" stroke="#cbd1d5" stroke-width="1.25"/>`;})}
    <ellipse cx="220" cy="108" rx="34" ry="5" fill="url(#silver)" stroke="#cbd0cc"/><g class="compat-ears"><path d="M186 108l-14-4v-11m82 15 14-4V91" fill="none" stroke="#343a40" stroke-width="3"/><ellipse cx="172" cy="91" rx="4" ry="9" fill="#bfb253" stroke="#6c704c"/><ellipse cx="268" cy="91" rx="8" ry="4" fill="url(#claw)"/></g>
  </g>
  <g clip-path="url(#head-stem-clip)"><g class="compat-neck" transform="translate(220 108)"><rect x="-13" y="-44" width="26" height="44" rx="3" fill="url(#stem)"/>${rows(10,i=>`<ellipse cy="${-41+i*4}" rx="14" ry="1.8" fill="url(#stem)" stroke="#858d93" stroke-opacity=".55" stroke-width=".6"/>`)}</g></g>
  </g>
  <g class="compat-head">
    <ellipse cx="220" cy="50" rx="55" ry="26" fill="url(#glass)" stroke="#94a5b1" stroke-width="1.3"/>
    <ellipse cx="220" cy="54" rx="43" ry="12" fill="#66716e" fill-opacity=".62" stroke="#bac7c8" stroke-width="1"/>
    ${rows(8,i=>{const a=i*Math.PI/4;return `<circle cx="${220+35*Math.cos(a)}" cy="${54+8*Math.sin(a)}" r="1.6" fill="#d3d7c6"/>`;})}
    <g class="compat-radar"><path d="M179 44q41-8 82 0v9q-41 9-82 0z" fill="#313a38" stroke="#85918e"/><ellipse cx="182" cy="47" rx="3.7" ry="6" fill="#d9d8be"/><ellipse cx="258" cy="47" rx="3.7" ry="6" fill="#d9d8be"/><path d="M190 43h60" stroke="#a3aba1" stroke-width="1.3"/></g>
    <path d="M207 59l3-24h20l3 24z" fill="url(#stem)"/>
    <path d="M202 33h36v9h-36z" fill="url(#silver)" stroke="#adb8b3"/>
    <ellipse cx="220" cy="33" rx="18" ry="4" fill="#c4c9be" stroke="#818d85"/><circle cx="219" cy="38" r="3.1" fill="#eeebcd"/>
    <ellipse cx="220" cy="50" rx="55" ry="26" fill="url(#glass)" stroke="#cbd6dd" stroke-width=".8"/>
    <path d="M178 46q7-17 30-19m-30 28q2 4 6 7M252 32q11 5 13 14" stroke="#fff" stroke-opacity=".6" stroke-width="3" fill="none" stroke-linecap="round"/>
    <ellipse cx="220" cy="64" rx="43" ry="8" fill="none" stroke="#dce4e8" stroke-width=".9"/>
  </g></svg>`;
}

export function poseCompatibility(svg,{t=0,phase=0,bob=0,warning=false,wave=false,animate=true,yaw=0,turn=0}){
  const active=(warning||wave)&&animate;
  const c=Math.cos(yaw),sine=Math.sin(yaw),sideAmount=Math.abs(sine),frontAmount=Math.abs(c);
  const front=svg.querySelector('.compat-front-panel'),rear=svg.querySelector('.compat-rear-panel');
  front.setAttribute('transform',`translate(${220+74*sine} 0) scale(${Math.max(.001,c)} 1) translate(-220 0)`);
  front.setAttribute('opacity',c>0?Math.min(1,c*5):0);
  rear.setAttribute('transform',`translate(${220-74*sine} 0) scale(${Math.max(.001,-c)} 1) translate(-220 0)`);
  rear.setAttribute('opacity',c<0?Math.min(1,-c*5):0);
  svg.querySelector('.compat-ears').setAttribute('transform',`translate(220 0) scale(${c} 1) translate(-220 0)`);
  svg.querySelector('.compat-radar').setAttribute('transform',`translate(220 0) scale(${Math.max(.15,frontAmount)} 1) translate(-220 0)`);
  const legs=[...svg.querySelectorAll('.compat-leg')].sort((a,b)=>Number(b.dataset.side)*sine-Number(a.dataset.side)*sine);
  for(const leg of legs){
    const side=Number(leg.dataset.side),center=projectPoint([side*SUPPORT_X,0,SUPPORT_Z],yaw);
    leg.setAttribute('transform',`translate(${center[0]-220} ${center[1]})`);
    svg.querySelector('.compat-legs').append(leg);
  }
  const chassisKey=[yaw.toFixed(5),phase.toFixed(5),turn.toFixed(5)].join(',');
  if(chassisCache.get(svg)!==chassisKey){svg.querySelector('.compat-chassis').innerHTML=chassisMarkup(yaw,phase,turn);chassisCache.set(svg,chassisKey);}
  // Only the stem and bulb descend. The fluted base and its ear dishes are
  // fixed to the torso; the bulb's underside stops at the base's upper rim.
  const depth=Math.max(0,Math.min(1,-bob/.58)),drop=32*depth;
  const collar=svg.querySelector('.compat-collar'),neck=svg.querySelector('.compat-neck');
  collar.setAttribute('transform','translate(0 0)');
  collar.setAttribute('visibility','visible');
  neck.setAttribute('transform',`translate(220 ${108+drop})`);
  neck.setAttribute('visibility',depth>=.999?'hidden':'visible');
  const stemWindow=svg.querySelector('.compat-stem-window');
  stemWindow.setAttribute('y',76+drop);stemWindow.setAttribute('height',32-drop);
  svg.querySelector('.compat-head').setAttribute('transform',`translate(0 ${drop})`);
  svg.querySelector('#tracks').setAttribute('patternTransform',`translate(0 ${phase*500%10})`);
  svg.querySelector('#side-tracks').setAttribute('patternTransform',`translate(${phase*500%10} 0)`);
  for(const arm of svg.querySelectorAll('.compat-arm')){
    const s=Number(arm.dataset.side);
    const depth=-s*sine;
    const parent=svg.querySelector(depth<-.1?'.compat-arms-back':'.compat-arms-front');if(arm.parentNode!==parent)parent.append(arm);
    arm.setAttribute('transform',`translate(${220+s*76*c} ${177+depth*76*.13})`);
    const shoulder=-s*c*(active?57+21*Math.sin(t*5+s):28)-sine*(active?38:12), elbow=-s*c*(active?22+18*Math.sin(t*6+s):-10);
    arm.querySelector('.compat-shoulder').setAttribute('transform',`rotate(${shoulder})`);
    arm.querySelector('.compat-elbow').setAttribute('transform',`translate(0 41) rotate(${elbow})`);
    arm.querySelector('.compat-claw').setAttribute('transform',`translate(0 37) rotate(${active?12*Math.sin(t*7+s):0})`);
  }
  svg.querySelector('.compat-mouth').setAttribute('opacity',warning&&animate?.45+.55*Math.abs(Math.sin(t*11)):.45);
}
