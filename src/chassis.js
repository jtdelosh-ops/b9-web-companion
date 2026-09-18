// One rigid chassis shared by the SVG and 3D renderers. Coordinates are in
// artwork units: X across the body, Y down the page, Z toward the viewer.
export const DECK_Y=346, SUPPORT_X=34, SUPPORT_Z=0;
export const DECK_BOUNDS={left:-86,right:86,back:-35,front:35};
export const BELTS=[{id:0,x:-63,side:-1},{id:1,x:-21,side:-1},{id:2,x:21,side:1},{id:3,x:63,side:1}];
// The rubber supports seat on the deck, never below it. Both renderers use
// these surfaces on the torso centerline, including in profile. The upper and
// lower connecting plates tie them into one carriage. Profiles: [radius, Y].
export const supportParts=[
  {id:'core',profile:[[25,284],[25,326]],fill:'#24282d',stroke:'#181a1c'},
  ...Array.from({length:4},(_,i)=>({id:'bellows-'+i,profile:[[25,294+i*7],[30,295+i*7],[32,297+i*7],[32,299+i*7],[29,301+i*7],[25,302+i*7]],fill:'rubber',stroke:'#141619'})),
  {id:'collar',profile:[[29,322],[33,324],[33,326],[24,326]],fill:'silver',stroke:'#59656e'},
  {id:'ankle-core',profile:[[21,326],[21,DECK_Y]],fill:'#24282d',stroke:'#181a1c'},
  ...Array.from({length:3},(_,i)=>({id:'ankle-'+i,profile:[[21,328+i*5],[25,329+i*5],[25,331+i*5],[21,333+i*5]],fill:'rubber',stroke:'#141619'})),
  {id:'mount',profile:[[21,344],[22,345],[22,DECK_Y]],fill:'#373f46',stroke:'#252c32'}
];
// A round support is invariant under yaw. Its projected convex rings can be
// cached once; only its center moves as the whole carriage turns. Rendering
// each solid as one path also avoids seams between tiny polygon faces.
function convexHull(points){
  const sorted=points.slice().sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
  const cross=(o,a,b)=>(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0]);
  const half=list=>{const out=[];for(const p of list){while(out.length>=2&&cross(out.at(-2),out.at(-1),p)<=0)out.pop();out.push(p);}return out;};
  return [...half(sorted).slice(0,-1),...half(sorted.reverse()).slice(0,-1)];
}
export function supportMarkup(){
  return supportParts.map(part=>{
    const points=convexHull(part.profile.flatMap(([r,y])=>Array.from({length:64},(_,i)=>{const a=i/64*Math.PI*2;return [220+r*Math.cos(a),y+.13*r*Math.sin(a)];})));
    return `<path data-support="${part.id}" d="M${points.map(p=>p.map(n=>n.toFixed(3)).join(' ')).join('L')}Z" fill="${['silver','rubber'].includes(part.fill)?'url(#'+part.fill+')':part.fill}" stroke="${part.stroke}" stroke-width=".7" stroke-linejoin="round"/>`;
  }).join('');
}
// Four continuous belt loops follow the tall, flared reference carriage.
const profile=[[-35,354],[35,354],[57,409],[58,418],[52,426],[-52,426],[-58,418],[-57,409]];
const lengths=profile.map(([z,y],i)=>{const q=profile[(i+1)%profile.length];return Math.hypot(q[0]-z,q[1]-y);});
const perimeter=lengths.reduce((a,b)=>a+b,0);
function beltPoint(distance){
  let d=((distance%perimeter)+perimeter)%perimeter;
  for(let i=0;i<profile.length;i++){
    if(d<=lengths[i]){const [z,y]=profile[i],q=profile[(i+1)%profile.length],dz=(q[0]-z)/lengths[i],dy=(q[1]-y)/lengths[i];return {segment:i,z:z+dz*d,y:y+dy*d,dz,dy,ny:-dz,nz:dy};}
    d-=lengths[i];
  }
}
export function chassisFaces(phase=0,turn=0){
  const faces=[];
  const add=(id,points,normal,fill,stroke='#59656e')=>faces.push({id,points,normal,fill,stroke});
  const shell=[[-33,353],[33,353],[54,408],[55,417],[49,423],[-49,423],[-55,417],[-54,408]],width=86;
  for(const side of [-1,1]){
    const surface='shell-side-'+side;
    add(surface,shell.map(([z,y])=>[side*width,y,z]),[side,0,0],'#939da3','#515d64');
    // Recessed side cover with six raised spokes, rather than exposed wheels.
    const inset=[[-29,358],[29,358],[49,407],[50,414],[45,419],[-45,419],[-50,414],[-49,407]];
    add('side-cover-'+side,inset.map(([z,y])=>[side*(width+.2),y,z]),[side,0,0],'#7e898e','#c3cccf');
    faces.at(-1).surface=surface;faces.at(-1).layer=.001;
    for(const [i,[z1,y1,z2,y2]] of [[0,[0,361,0,379]],[1,[-26,361,-9,380]],[2,[26,361,9,380]],[3,[-35,413,-10,392]],[4,[35,413,10,392]],[5,[0,414,0,394]]]){
      const dz=z2-z1,dy=y2-y1,n=Math.hypot(dz,dy),oz=-dy/n*1.15,oy=dz/n*1.15;
      add('side-rib-'+side+'-'+i,[[side*(width+.45),y1+oy,z1+oz],[side*(width+.45),y2+oy,z2+oz],[side*(width+.45),y2-oy,z2-oz],[side*(width+.45),y1-oy,z1-oz]],[side,0,0],'#bac4c8','#525e64');
      faces.at(-1).surface=surface;faces.at(-1).layer=.002;
    }
  }
  for(let i=0;i<shell.length;i++){
    const [z,y]=shell[i],q=shell[(i+1)%shell.length],dz=q[0]-z,dy=q[1]-y,n=Math.hypot(dz,dy);
    add('shell-panel-'+i,[[-width,y,z],[width,y,z],[width,q[1],q[0]],[-width,q[1],q[0]]],[0,-dz/n,dy/n],['#d4d9da','#bfc7c9','#a5b0b4','#879399','#6d7a82','#879399','#a5b0b4','#bfc7c9'][i]);
  }
  // A single continuous top plate joins both fixed rubber columns.
  const {left,right,back,front}=DECK_BOUNDS;
  add('deck',[[left,DECK_Y,back],[right,DECK_Y,back],[right,DECK_Y,front],[left,DECK_Y,front]],[0,-1,0],'#d1d7da');
  // Thin, continuous cross plates above and below the small ankle bellows.
  for(const [name,y,w,d,h] of [['bridge',325,86,34,2],['plinth',348,78,30,5]]){
    add(name+'-top',[[-w,y,-d],[w,y,-d],[w,y,d],[-w,y,d]],[0,-1,0],'#dce0df');
    for(const side of [-1,1]){
      add(name+'-side-'+side,[[side*w,y,-d],[side*w,y,d],[side*w,y+h,d],[side*w,y+h,-d]],[side,0,0],'#8d999f');
      add(name+'-end-'+side,[[-w,y,side*d],[w,y,side*d],[w,y+h,side*d],[-w,y+h,side*d]],[0,0,side],'#aab6bb');
    }
  }
  for(const {id:track,x:center,side} of BELTS){
    const lo=center-6.5,hi=center+6.5;
    for(const [x,nx] of [[lo,-1],[hi,1]])add('belt-cap-'+track+'-'+nx,profile.map(([z,y])=>[x,y,z]),[nx,0,0],'#202629','#263139');
    for(let i=0;i<profile.length;i++){
      const [z,y]=profile[i],q=profile[(i+1)%profile.length],dz=q[0]-z,dy=q[1]-y,n=lengths[i];
      add('belt-surface-'+track+'-'+i,[[lo,y,z],[hi,y,z],[hi,q[1],q[0]],[lo,q[1],q[0]]],[0,-dz/n,dy/n],'#252c2e','#192124');
      faces.at(-1).surface='shell-panel-'+i;faces.at(-1).layer=.01;
    }
    // Actual cleats travel around the fixed belt loop; the chassis never deforms.
    for(let i=0;i<38;i++){
      const p=beltPoint((i/38+phase+side*turn)*perimeter),half=2.2,id='cleat-'+track+'-'+i;
      const at=(x,sign,height)=>[x,p.y+p.ny*height+sign*p.dy*half,p.z+p.nz*height+sign*p.dz*half];
      const a=at(lo-.1,-1,1),b=at(hi+.1,-1,1),c=at(hi+.1,1,1),d=at(lo-.1,1,1);
      const a0=at(lo-.1,-1,0),b0=at(hi+.1,-1,0),c0=at(hi+.1,1,0),d0=at(lo-.1,1,0);
      const start=faces.length;
      add(id,[a,b,c,d],[0,p.ny,p.nz],'#566063','#253033');
      add(id+'-left',[a0,a,d,d0],[-1,0,0],'#3c464b','#253033');
      add(id+'-right',[b0,b,c,c0],[1,0,0],'#3c464b','#253033');
      add(id+'-leading',[a0,b0,b,a],[0,-p.dy,-p.dz],'#697276','#253033');
      add(id+'-trailing',[d0,c0,c,d],[0,p.dy,p.dz],'#354147','#253033');
      for(const face of faces.slice(start)){face.surface='shell-panel-'+p.segment;face.layer=.02;}
    }
  }
  return faces;
}
export function projectPoint([x,y,z],yaw){
  const c=Math.cos(yaw),s=Math.sin(yaw),depth=-x*s+z*c;
  return [220+x*c+z*s,y+depth*.13-5.2,depth-.13*y];
}
export function projectChassis(yaw,phase=0,turn=0){
  const camera=[-Math.sin(yaw),-.13,Math.cos(yaw)];
  const projected=chassisFaces(phase,turn).filter(f=>f.normal.reduce((n,v,i)=>n+v*camera[i],0)>1e-8).map(f=>{
    const points=f.points.map(p=>projectPoint(p,yaw));
    return {...f,points,depth:points.reduce((n,p)=>n+p[2],0)/points.length};
  });
  const byId=new Map(projected.map(f=>[f.id,f]));
  for(const f of projected)if(f.surface&&byId.has(f.surface))f.depth=byId.get(f.surface).depth+f.layer;
  return projected.sort((a,b)=>a.depth-b.depth);
}
export function chassisMarkup(yaw,phase=0,turn=0){
  return projectChassis(yaw,phase,turn).map(f=>`<polygon data-face="${f.id}" points="${f.points.map(p=>p.slice(0,2).map(n=>n.toFixed(3)).join(',')).join(' ')}" fill="${f.fill}" stroke="${f.stroke}" stroke-width="${f.id.startsWith('cleat-')?.4:.7}" stroke-linejoin="round"/>`).join('');
}
