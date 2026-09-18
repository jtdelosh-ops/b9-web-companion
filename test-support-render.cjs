// Actual SVG paint-order regression at the body/carriage joint.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const esbuild=require('esbuild'),sharp=require('sharp'),{JSDOM}=require('jsdom');
async function load(source,chassis){
 const plugins=chassis?[{name:'previous-chassis',setup(build){build.onResolve({filter:/^\.\/chassis\.js$/},()=>({path:path.resolve(chassis)}));}}]:[];
 const result=await esbuild.build({stdin:{contents:source,resolveDir:path.join(__dirname,'src'),loader:'js'},plugins,bundle:true,platform:'node',format:'cjs',write:false});
 const m={exports:{}};new Function('module','exports',result.outputFiles[0].text)(m,m.exports);return m.exports;
}
async function hiddenSupportPixels(svg){
 const isolated=svg.cloneNode(true),joint=svg.cloneNode(true);
 for(const el of [...isolated.children])if(!el.matches('defs,.compat-legs'))el.remove();
 for(const el of [...joint.children])if(!el.matches('defs,.compat-legs,.compat-chassis'))el.remove();
 const [support,combined]=await Promise.all([isolated,joint].map(el=>sharp(Buffer.from(el.outerHTML)).ensureAlpha().raw().toBuffer()));
 let hidden=0;for(let i=0;i<support.length;i+=4)if(support[i+3]===255&&[0,1,2].some(k=>Math.abs(support[i+k]-combined[i+k])>5))hidden++;
 return hidden;
}
(async()=>{
 const api=await load(fs.readFileSync(__dirname+'/src/compatibility.js','utf8')),svg=new JSDOM(api.compatibilityMarkup()).window.document.querySelector('svg');
 const angles=[-180,-150,-135,-110,-90,-83,-70,-45,-2,-1,0,1,2,45,70,83,90,110,135,150,180];
 for(const degrees of angles){api.poseCompatibility(svg,{yaw:degrees*Math.PI/180,phase:.137,turn:.21});assert.equal(await hiddenSupportPixels(svg),0,`Carriage cuts through supports at ${degrees} degrees`);}
 console.log('PASS: rendered carriage never paints over the body supports at 21 front, side and rear headings.');
 if(process.argv[2]){
  const old=await load(fs.readFileSync(process.argv[2],'utf8'),process.argv[3]),oldSvg=new JSDOM(old.compatibilityMarkup()).window.document.querySelector('svg'),frames=[];let reproduced=0;
  for(const degrees of [-83,83])for(const [label,rig,element] of [['Before',old,oldSvg],['After',api,svg]]){
   rig.poseCompatibility(element,{yaw:degrees*Math.PI/180,bob:-.58,phase:.137,turn:.21});const pixels=await hiddenSupportPixels(element);if(label==='Before')reproduced+=pixels;
   const caption=Buffer.from(`<svg width="440" height="466"><text x="220" y="457" text-anchor="middle" font-family="Arial" font-size="16" fill="#293b42">${label} · ${degrees}°</text></svg>`);
   frames.push(await sharp({create:{width:440,height:466,channels:4,background:'#eeeae0'}}).composite([{input:await sharp(Buffer.from(element.outerHTML)).png().toBuffer(),left:0,top:0},{input:caption,left:0,top:0}]).png().toBuffer());
   console.log(label,degrees,'body pixels overpainted by carriage:',pixels);
  }
  assert(reproduced>0,'Previous source must reproduce the reported overlap');
  await sharp({create:{width:1760,height:466,channels:4,background:'#eeeae0'}}).composite(frames.map((input,i)=>({input,left:i*440,top:0}))).png().toFile(__dirname+'/verification/support-before-after.png');
 }
})().catch(e=>{console.error(e);process.exitCode=1;});
