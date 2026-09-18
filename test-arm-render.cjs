// Raster regression: the far arm sits behind the torso and waist, with its
// exposed silhouette intact and the near claw still visible.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const esbuild=require('esbuild'),sharp=require('sharp'),{JSDOM}=require('jsdom');
async function load(source){
 const result=await esbuild.build({stdin:{contents:source,resolveDir:path.join(__dirname,'src'),loader:'js'},bundle:true,platform:'node',format:'cjs',write:false});
 const m={exports:{}};new Function('module','exports',result.outputFiles[0].text)(m,m.exports);return m.exports;
}
function layers(svg,selector){
 const clone=svg.cloneNode(true);for(const el of [...clone.children])if(!el.matches(`defs,${selector}`))el.remove();return clone;
}
async function armPixels(svg){
 const body=layers(svg,'.compat-body,.compat-waist'),far=layers(svg,'.compat-arms-back'),combined=layers(svg,'.compat-body,.compat-waist,.compat-arms-back');
 const withoutFar=svg.cloneNode(true),withoutNearClaw=svg.cloneNode(true);
 withoutFar.querySelector('.compat-arms-back').remove();
 for(const claw of withoutNearClaw.querySelectorAll('.compat-arms-front .compat-claw'))claw.remove();
 const [mask,arm,occluded,picture,noFar,noNearClaw]=await Promise.all([body,far,combined,svg,withoutFar,withoutNearClaw].map(el=>sharp(Buffer.from(el.outerHTML)).ensureAlpha().raw().toBuffer()));
 const changed=(a,b,i)=>[0,1,2,3].some(k=>Math.abs(a[i+k]-b[i+k])>5);
 let overlap=0,overpainted=0,exposed=0,missing=0,farVisible=0,nearClawVisible=0;
 for(let i=0;i<mask.length;i+=4){
  if(mask[i+3]===255&&arm[i+3]>8){overlap++;if(changed(mask,occluded,i))overpainted++;}
  if(mask[i+3]===0&&arm[i+3]>128){
   exposed++;if(changed(arm,occluded,i))missing++;
   if(changed(picture,noFar,i))farVisible++;
  }
  if(picture[i]>picture[i+1]*1.6&&picture[i]>picture[i+2]*1.6&&changed(picture,noNearClaw,i))nearClawVisible++;
 }
 return {overlap,overpainted,exposed,missing,farVisible,nearClawVisible};
}
(async()=>{
 const api=await load(fs.readFileSync(__dirname+'/src/compatibility.js','utf8')),svg=new JSDOM(api.compatibilityMarkup()).window.document.querySelector('svg');
 const poses=[{name:'idle',t:0},{name:'wave',wave:true,t:.137},{name:'warning',warning:true,t:.61}];
 const angles=[-110,-83,-60,-45,45,60,83,110];let overlap=0,farVisible=0;
 for(const pose of poses)for(const degrees of angles){
  api.poseCompatibility(svg,{...pose,yaw:degrees*Math.PI/180,phase:.137,turn:.21});
  const pixels=await armPixels(svg),frame=`${pose.name} at ${degrees} degrees`;
  assert.equal(pixels.overpainted,0,`Far arm paints over the opaque torso/waist: ${frame}`);
  assert.equal(pixels.missing,0,`Far-arm silhouette disappears outside the torso/waist: ${frame}`);
  assert(pixels.nearClawVisible>20,`Near claw should remain visible: ${frame}`);
  overlap+=pixels.overlap;farVisible+=pixels.farVisible;
 }
 assert(overlap>100,'Poses must exercise far-arm occlusion by the torso/waist');
 assert(farVisible>100,'Exposed far-arm silhouette must remain visible in the complete robot');
 console.log('PASS: rasterized far arms stay behind the torso/waist while exposed arms and near claws remain visible across 24 idle, wave and warning poses.');
 // Optional before/after reproduction from a previous source revision.
 if(process.argv[2]){
  const old=await load(fs.readFileSync(process.argv[2],'utf8')),oldSvg=new JSDOM(old.compatibilityMarkup()).window.document.querySelector('svg'),frames=[];let reproduced=0;
  for(const degrees of [-60,60])for(const [label,rig,element] of [['Before',old,oldSvg],['After',api,svg]]){
   rig.poseCompatibility(element,{yaw:degrees*Math.PI/180,phase:.137,turn:.21});const pixels=await armPixels(element);if(label==='Before')reproduced+=pixels.overpainted;
   const caption=Buffer.from(`<svg width="440" height="466"><text x="220" y="457" text-anchor="middle" font-family="Arial" font-size="16" fill="#293b42">${label} · ${degrees}°</text></svg>`);
   frames.push(await sharp({create:{width:440,height:466,channels:4,background:'#eeeae0'}}).composite([{input:await sharp(Buffer.from(element.outerHTML)).png().toBuffer(),left:0,top:0},{input:caption,left:0,top:0}]).png().toBuffer());
   console.log(label,degrees,'torso/waist pixels overpainted by far arm:',pixels.overpainted);
  }
  assert(reproduced>0,'Prior source must reproduce the reported far-claw overlap');
  await sharp({create:{width:1760,height:466,channels:4,background:'#eeeae0'}}).composite(frames.map((input,i)=>({input,left:i*440,top:0}))).png().toFile(__dirname+'/verification/arm-before-after.png');
 }
})().catch(e=>{console.error(e);process.exitCode=1;});
