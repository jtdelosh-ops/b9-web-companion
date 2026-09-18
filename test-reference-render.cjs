// Visual regressions for the reference update: common centerline and upper voice glass.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const esbuild=require('esbuild'),sharp=require('sharp'),{JSDOM}=require('jsdom');
async function load(source,chassis){
 const plugins=chassis?[{name:'previous-chassis',setup(build){build.onResolve({filter:/^\.\/chassis\.js$/},()=>({path:path.resolve(chassis)}));}}]:[];
 const r=await esbuild.build({stdin:{contents:source,resolveDir:path.join(__dirname,'src'),loader:'js'},plugins,bundle:true,platform:'node',format:'cjs',write:false});
 const m={exports:{}};new Function('module','exports',r.outputFiles[0].text)(m,m.exports);return m.exports;
}
const isolated=(svg,selector)=>`<svg xmlns="http://www.w3.org/2000/svg" width="440" height="440" viewBox="0 0 440 440">${svg.querySelector('defs').outerHTML}${svg.querySelector(selector).outerHTML}</svg>`;
const pixels=source=>sharp(Buffer.from(source)).ensureAlpha().raw().toBuffer();
async function center(svg,selector){
 const data=await pixels(isolated(svg,selector));let left=440,right=-1;
 for(let y=0;y<440;y++)for(let x=0;x<440;x++)if(data[(y*440+x)*4+3]>127){left=Math.min(left,x);right=Math.max(right,x);}
 assert(right>=left);return (left+right+1)/2;
}
(async()=>{
 const api=await load(fs.readFileSync(__dirname+'/src/compatibility.js','utf8')),svg=new JSDOM(api.compatibilityMarkup()).window.document.querySelector('svg');
 for(const degrees of [-90,-83,0,83,90]){
  api.poseCompatibility(svg,{yaw:degrees*Math.PI/180,phase:.1});
  const body=await center(svg,'.compat-body-outline'),supports=await center(svg,'.compat-legs'),carriage=await center(svg,'.compat-chassis');
  assert(Math.abs(body-supports)<=.5,`Torso/support centerlines differ at ${degrees}°`);
  assert(Math.abs(body-carriage)<=1,`Torso/carriage centerlines differ at ${degrees}°`);
 }
 api.poseCompatibility(svg,{t:.142});const quiet=await pixels(isolated(svg,'.compat-front-panel'));
 api.poseCompatibility(svg,{t:.142,warning:true});const speaking=await pixels(isolated(svg,'.compat-front-panel'));
 let changed=0;const consoleTop=Number(svg.querySelector('.compat-console').getAttribute('y'));
 for(let y=0;y<440;y++)for(let x=0;x<440;x++){
  const p=(y*440+x)*4;if([0,1,2].some(i=>Math.abs(quiet[p+i]-speaking[p+i])>8)){changed++;assert(y>=142&&y<consoleTop,'Speech light must stay above the console');}
 }
 assert(changed>500,'Upper amber glass must visibly brighten');
 api.poseCompatibility(svg,{warning:true,animate:false});assert.equal(svg.querySelector('.compat-mouth').getAttribute('opacity'),'0.45');
 console.log('PASS: rendered torso/support/carriage alignment in five views; speech light changes only upper glass; reduced-motion glow stays still.');
 if(process.argv[2]){
  const old=await load(fs.readFileSync(process.argv[2],'utf8'),process.argv[3]),oldSvg=new JSDOM(old.compatibilityMarkup()).window.document.querySelector('svg'),frames=[];
  old.poseCompatibility(oldSvg,{yaw:Math.PI/2});assert(Math.abs(await center(oldSvg,'.compat-body-outline')-await center(oldSvg,'.compat-legs'))>9,'Prior renderer reproduces the profile offset');
  for(const [label,rig,element] of [['Previous design',old,oldSvg],['Reference update',api,svg]])for(const degrees of [0,45,90]){
   rig.poseCompatibility(element,{yaw:degrees*Math.PI/180});
   const caption=Buffer.from(`<svg width="440" height="466"><text x="220" y="457" text-anchor="middle" font-family="Arial" font-size="14" fill="#293b42">${label} · ${degrees}°</text></svg>`);
   frames.push(await sharp({create:{width:440,height:466,channels:4,background:'#eeeae0'}}).composite([{input:await sharp(Buffer.from(element.outerHTML)).png().toBuffer(),left:0,top:0},{input:caption,left:0,top:0}]).png().toBuffer());
  }
  await sharp({create:{width:1320,height:932,channels:4,background:'#eeeae0'}}).composite(frames.map((input,i)=>({input,left:i%3*440,top:Math.floor(i/3)*466}))).png().toFile(__dirname+'/verification/reference-update.png');
 }
})().catch(e=>{console.error(e);process.exitCode=1;});
