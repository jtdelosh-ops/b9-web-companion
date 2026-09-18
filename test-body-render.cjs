// Raster regression: chest/rear details may never draw beyond the torso.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const esbuild=require('esbuild'),sharp=require('sharp'),{JSDOM}=require('jsdom');
async function load(source){
 const r=await esbuild.build({stdin:{contents:source,resolveDir:path.join(__dirname,'src'),loader:'js'},bundle:true,platform:'node',format:'cjs',write:false});const m={exports:{}};new Function('module','exports',r.outputFiles[0].text)(m,m.exports);return m.exports;
}
async function escapedPixels(svg){
 const outline=svg.querySelector('.compat-body-outline')||svg.querySelector('.compat-body>path');
 const outer=content=>`<svg xmlns="http://www.w3.org/2000/svg" width="440" height="440" viewBox="0 0 440 440">${content}</svg>`;
 const panels=svg.querySelector('.compat-body-panels')?.outerHTML||svg.querySelector('.compat-front-panel').outerHTML+svg.querySelector('.compat-rear-panel').outerHTML;
 const [picture,mask]=await Promise.all([sharp(Buffer.from(outer(svg.querySelector('defs').outerHTML+panels))).ensureAlpha().raw().toBuffer(),sharp(Buffer.from(outer(`<path d="${outline.getAttribute('d')}" fill="white"/>`))).ensureAlpha().raw().toBuffer()]);
 let escaped=0;for(let i=3;i<picture.length;i+=4)if(picture[i]>8&&mask[i]===0)escaped++;return escaped;
}
(async()=>{
 const api=await load(fs.readFileSync(__dirname+'/src/compatibility.js','utf8'));const document=new JSDOM(api.compatibilityMarkup()).window.document,svg=document.querySelector('svg');
 const angles=[-180,-135,-110,-98,-90,-89,-83,-70,-45,-2,0,2,45,70,83,89,90,98,110,135,180];
 for(const degrees of angles){api.poseCompatibility(svg,{yaw:degrees*Math.PI/180,bob:-.58});assert.equal(await escapedPixels(svg),0,`Panel pixels escape torso at ${degrees} degrees`);}
 console.log('PASS: rasterized chest/rear panels stay within the torso at 21 front, side and rear headings.');
 // Optional before/after reproduction from the previous revision, not required by npm test.
 if(process.argv[2]){
  const old=await load(fs.readFileSync(process.argv[2],'utf8')),oldSvg=new JSDOM(old.compatibilityMarkup()).window.document.querySelector('svg');
  const contact=[];let reproduced=0;
  for(const degrees of [-83,83])for(const [label,rig,element] of [['Before',old,oldSvg],['After',api,svg]]){
   rig.poseCompatibility(element,{yaw:degrees*Math.PI/180,bob:-.58});const escaped=await escapedPixels(element);if(label==='Before')reproduced+=escaped;
   const caption=Buffer.from(`<svg width="330" height="352"><text x="165" y="344" text-anchor="middle" font-family="Arial" font-size="13" fill="#293b42">${label} · ${degrees}°</text></svg>`);
   contact.push(await sharp({create:{width:330,height:352,channels:4,background:'#eeeae0'}}).composite([{input:await sharp(Buffer.from(element.outerHTML)).resize(330,330).png().toBuffer(),left:0,top:0},{input:caption,left:0,top:0}]).png().toBuffer());
   console.log(label,degrees,'outside-panel pixels:',escaped);
  }
  assert(reproduced>0,'Prior source should reproduce the reported panel leak');
  await sharp({create:{width:1320,height:352,channels:4,background:'#eeeae0'}}).composite(contact.map((input,i)=>({input,left:i*330,top:0}))).png().toFile(__dirname+'/verification/panel-before-after.png');
 }
})().catch(e=>{console.error(e);process.exitCode=1;});
