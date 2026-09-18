const assert=require('node:assert/strict'),esbuild=require('esbuild');
(async()=>{
const result=await esbuild.build({entryPoints:[__dirname+'/src/chassis.js'],bundle:true,platform:'node',format:'cjs',write:false});const m={exports:{}};new Function('module','exports',result.outputFiles[0].text)(m,m.exports);
const {chassisFaces,projectChassis,projectPoint,supportParts,SUPPORT_X,SUPPORT_Z,DECK_Y,DECK_BOUNDS,BELTS}=m.exports;
assert.equal(BELTS.length,4,'The reference carriage has four narrow tread runs');
assert.equal(SUPPORT_Z,0,'Supports share the torso fore/aft centerline');
assert.equal(DECK_BOUNDS.front,-DECK_BOUNDS.back,'Deck centered beneath the torso in profile');
assert.equal(chassisFaces().filter(f=>f.id.startsWith('side-cover-')).length,2,'Solid outer side covers replace exposed wheels');
assert.equal(chassisFaces().filter(f=>f.id.startsWith('wheel-')).length,0);
const fixed=faces=>faces.filter(f=>!f.id.startsWith('cleat-'));
assert.deepEqual(fixed(chassisFaces()),fixed(chassisFaces(.137,.243)),'Travel and pivot must leave every housing vertex fixed');
assert.equal(chassisFaces().filter(f=>f.id==='deck').length,1,'One continuous deck');
const mount=supportParts.find(p=>p.id==='mount');
assert.equal(Math.max(...mount.profile.map(p=>p[1])),DECK_Y,'Supports seat exactly on the deck');
for(const part of supportParts)for(const [radius,y] of part.profile){
 assert(y<=DECK_Y,'No lower-body surface may penetrate the carriage');
 if(y===DECK_Y)for(const side of [-1,1]){
  assert(side*SUPPORT_X-radius>DECK_BOUNDS.left&&side*SUPPORT_X+radius<DECK_BOUNDS.right);
  assert(SUPPORT_Z-radius>DECK_BOUNDS.back&&SUPPORT_Z+radius<DECK_BOUNDS.front,'Mount fits on the deck fore/aft');
 }
}
const contactRadius=mount.profile.at(-1)[0];
const cross=(a,b,p)=>(b[0]-a[0])*(p[1]-a[1])-(b[1]-a[1])*(p[0]-a[0]);
let previous=null;
for(let degrees=-180;degrees<=180;degrees+=.5){
 const yaw=degrees*Math.PI/180,faces=projectChassis(yaw),points=faces.flatMap(f=>f.points);
 assert(points.flat().every(Number.isFinite));
 const bounds=[Math.min(...points.map(p=>p[0])),Math.max(...points.map(p=>p[0]))];
 assert(bounds[1]-bounds[0]>85,'Rigid chassis silhouette must not collapse during a turn');
 if(previous)assert(Math.max(...bounds.map((n,i)=>Math.abs(n-previous[i])))<1,'No outline jump across front/side view transitions');previous=bounds;
 // Detail layers sit on their visible parent face. A cleat's bevel can remain
 // visible after its parent face becomes edge-on, so it then sorts independently.
 const order=new Map(faces.map((f,i)=>[f.id,i]));for(const f of faces)if(f.surface&&order.has(f.surface))assert(order.get(f.id)>order.get(f.surface));
 const centers=[-1,1].map(side=>projectPoint([side*SUPPORT_X,DECK_Y,SUPPORT_Z],yaw));
 assert(Math.abs((centers[0][0]+centers[1][0])/2-220)<1e-9,'Supports must stay centered below the torso during turns');
 // Independent point-in-polygon check of the actual projected contact ring.
 // A wrong support offset, height, or projection recreates the reported clipping.
 const deck=faces.find(f=>f.id==='deck').points;
 for(const side of [-1,1])for(let i=0;i<64;i++){
  const a=i/64*Math.PI*2,p=projectPoint([side*SUPPORT_X+contactRadius*Math.cos(a),DECK_Y,SUPPORT_Z+contactRadius*Math.sin(a)],yaw);
  const edges=deck.map((q,j)=>cross(q,deck[(j+1)%deck.length],p));
  assert(edges.every(n=>n>=-1e-8)||edges.every(n=>n<=1e-8),`Support slips off deck at ${degrees} degrees`);
 }
}
for(const yaw of [0,Math.PI/4,Math.PI/2,Math.PI]){
 const p=projectPoint([30,399,50],yaw),q=projectPoint([30,399,50],yaw+Math.PI*2);assert(p.every((n,i)=>Math.abs(n-q[i])<1e-9));
}
console.log('PASS: four tread runs in one fixed chassis, moving cleats, centered/seated supports and continuous silhouette over 721 headings, no body/carriage penetration, wraparound and surface ordering.');
})().catch(e=>{console.error(e);process.exitCode=1;});
