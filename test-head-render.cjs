// Retraction changes only the visible inserted length, never the part scale.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const esbuild=require('esbuild'),sharp=require('sharp'),{JSDOM}=require('jsdom');
async function load(source){
 const r=await esbuild.build({stdin:{contents:source,resolveDir:path.join(__dirname,'src'),loader:'js'},bundle:true,platform:'node',format:'cjs',write:false});
 const m={exports:{}};new Function('module','exports',r.outputFiles[0].text)(m,m.exports);return m.exports;
}
const lowerImage=svg=>sharp(Buffer.from(svg.outerHTML)).extract({left:0,top:136,width:440,height:304}).ensureAlpha().raw().toBuffer();
const collarImage=svg=>sharp(Buffer.from(svg.outerHTML)).extract({left:160,top:112,width:120,height:22}).ensureAlpha().raw().toBuffer();
(async()=>{
 const api=await load(fs.readFileSync(__dirname+'/src/compatibility.js','utf8')),svg=new JSDOM(api.compatibilityMarkup()).window.document.querySelector('svg');
 for(const degrees of [-90,-45,0,45,90]){
  api.poseCompatibility(svg,{yaw:degrees*Math.PI/180});const baseline=await lowerImage(svg),basePixels=await collarImage(svg);
  const collar=svg.querySelector('.compat-collar'),neck=svg.querySelector('.compat-neck'),head=svg.querySelector('.compat-head');
  const geometry=[collar.innerHTML,neck.innerHTML,head.innerHTML];
  for(let i=0;i<=8;i++){
   api.poseCompatibility(svg,{yaw:degrees*Math.PI/180,bob:-.58*i/8});
   for(const part of [collar,neck,head])assert.match(part.getAttribute('transform'),/^translate\([^)]*\)$/,'Retraction must use translation only');
   assert.deepEqual([collar.innerHTML,neck.innerHTML,head.innerHTML],geometry,'Rigid head parts retain their exact geometry');
   assert.deepEqual(await lowerImage(svg),baseline,`Body/base pixels changed at ${degrees} degrees, retraction ${i}/8`);
   assert.equal(collar.getAttribute('transform'),'translate(0 0)','Fluted base is fixed to the torso');
   assert.equal(collar.getAttribute('visibility'),'visible','Fluted base never disappears');
   assert.deepEqual(await collarImage(svg),basePixels,'Visible base pixels must remain identical throughout retraction');
   assert.equal(svg.querySelector('#head-frame-clip rect').getAttribute('height'),'134','Frame opening must not move');
  }
  assert.equal(svg.querySelector('.compat-stem-window').getAttribute('height'),'0','Full retraction leaves no exposed stem');
  assert.equal(head.getAttribute('transform'),'translate(0 32)','Bulb rests on the fixed collar rim');
 }
 console.log('PASS: fixed visible collar with identical rendered pixels, stem-only retraction, bulb stop at collar rim, and unchanged body/treads at 9 depths in 5 views.');
 if(process.argv[2]){
  const old=await load(fs.readFileSync(process.argv[2],'utf8')),oldSvg=new JSDOM(old.compatibilityMarkup()).window.document.querySelector('svg'),frames=[];
  for(const [label,rig,element] of [['Before',old,oldSvg],['After',api,svg]])for(const depth of [0,.5,1]){
   rig.poseCompatibility(element,{bob:-.58*depth});
   const crop=await sharp(Buffer.from(element.outerHTML)).extract({left:140,top:20,width:160,height:142}).resize(320,284).png().toBuffer();
   const caption=Buffer.from(`<svg width="320" height="314"><text x="160" y="306" text-anchor="middle" font-family="Arial" font-size="14" fill="#293b42">${label} · ${depth*100}% retracted</text></svg>`);
   frames.push(await sharp({create:{width:320,height:314,channels:4,background:'#eeeae0'}}).composite([{input:crop,left:0,top:0},{input:caption,left:0,top:0}]).png().toBuffer());
  }
  assert.equal(oldSvg.querySelector('.compat-collar').getAttribute('visibility'),'hidden','Prior source reproduces the disappearing collar');
  await sharp({create:{width:960,height:628,channels:4,background:'#eeeae0'}}).composite(frames.map((input,i)=>({input,left:i%3*320,top:Math.floor(i/3)*314}))).png().toFile(__dirname+'/verification/collar-retraction-fix.png');
 }
})().catch(e=>{console.error(e);process.exitCode=1;});
