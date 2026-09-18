import * as THREE from 'three';
import {chassisFaces,supportParts,SUPPORT_X,SUPPORT_Z,BELTS} from './chassis.js';

// Original code-built model, proportioned against photographs of the TV-style B-9.
export function buildRobot() {
  const root=new THREE.Group(), torso=new THREE.Group();root.add(torso);
  const material=(color,metalness=0,roughness=.5)=>new THREE.MeshStandardMaterial({color,metalness,roughness});
  const silver=material(0xa5adb0,.68,.40),rim=material(0xd5d9dc,.82,.25),black=material(0x161b1c,.2,.40),rubber=material(0x303636,.06,.65),red=material(0xa8090f,.3,.28);
  const glass=new THREE.MeshPhysicalMaterial({color:0xd7e7ef,metalness:.08,roughness:.12,transparent:true,opacity:.19,side:THREE.DoubleSide,depthWrite:false,clearcoat:1});
  const mouthMat=new THREE.MeshStandardMaterial({color:0xb66a25,emissive:0xffa340,emissiveIntensity:.35,roughness:.25});
  const indicators=[],tracks=[],arms=[];
  const mesh=(p,g,m,x=0,y=0,z=0)=>{const o=new THREE.Mesh(g,m);o.position.set(x,y,z);p.add(o);return o;};
  const box=(p,w,h,d,m,x=0,y=0,z=0)=>mesh(p,new THREE.BoxGeometry(w,h,d),m,x,y,z);
  const cyl=(p,rt,rb,h,m,x=0,y=0,z=0)=>mesh(p,new THREE.CylinderGeometry(rt,rb,h,48),m,x,y,z);
  const sphere=(p,r,m,x=0,y=0,z=0)=>mesh(p,new THREE.SphereGeometry(r,40,24),m,x,y,z);
  const ring=(p,r,t,m,y=0,x=0,z=0)=>{const o=mesh(p,new THREE.TorusGeometry(r,t,12,56),m,x,y,z);o.rotation.x=Math.PI/2;return o;};
  const lathe=(p,points,m)=>mesh(p,new THREE.LatheGeometry(points.map(([r,y])=>new THREE.Vector2(r,y)),64),m);
  // One joined chassis, built from the same rigid faces as the SVG renderer.
  const chassis=new THREE.Group();chassis.name='rigid-chassis';root.add(chassis);
  const chassisMeshes=new Map(),chassisMaterials=new Map();
  const vertices=face=>{
    const out=[],point=([x,y,z])=>[x*.0085,(423-y)*.0085+.03,z*.0085];
    for(let i=1;i<face.points.length-1;i++)out.push(...point(face.points[0]),...point(face.points[i]),...point(face.points[i+1]));
    return new Float32Array(out);
  };
  const initialFaces=chassisFaces();
  for(const face of initialFaces.filter(f=>!f.id.startsWith('cleat-'))){
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(vertices(face),3));geometry.computeVertexNormals();
    if(!chassisMaterials.has(face.fill)){const m=material(face.fill,.50,.40);m.side=THREE.DoubleSide;chassisMaterials.set(face.fill,m);}
    const part=mesh(chassis,geometry,chassisMaterials.get(face.fill));part.name=face.id;chassisMeshes.set(face.id,part);
  }
  // One animated mesh per belt keeps the four-tread design inexpensive to draw.
  const beltVertices=(faces,id)=>new Float32Array(faces.filter(f=>f.id.startsWith('cleat-'+id+'-')).flatMap(f=>Array.from(vertices(f))));
  for(const belt of BELTS){
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(beltVertices(initialFaces,belt.id),3));geometry.computeVertexNormals();
    const treadMaterial=material('#505a5e',.25,.65);treadMaterial.side=THREE.DoubleSide;
    const part=mesh(chassis,geometry,treadMaterial);part.name='cleat-'+belt.id+'-mesh';chassisMeshes.set(part.name,part);
  }
  const updateTracks=(phase,turn=0)=>{
    const faces=chassisFaces(phase,turn);
    for(const belt of BELTS){
      const g=chassisMeshes.get('cleat-'+belt.id+'-mesh').geometry;g.attributes.position.array.set(beltVertices(faces,belt.id));g.attributes.position.needsUpdate=true;g.computeVertexNormals();g.computeBoundingSphere();
    }
  };
  for(const side of [-1,1])tracks.push({side,cleats:BELTS.filter(b=>b.side===side).map(b=>chassisMeshes.get('cleat-'+b.id+'-mesh'))});
  const supports=new THREE.Group();supports.name='fixed-body-supports';root.add(supports);
  for(const side of [-1,1])for(const part of supportParts){
    const profile=[[0,part.profile[0][1]],...part.profile,[0,part.profile.at(-1)[1]]];
    const mat=part.fill==='silver'?rim:part.fill==='rubber'?rubber:black;
    const o=lathe(supports,profile.slice().reverse().map(([r,y])=>[r*.0085,(423-y)*.0085+.03]),mat);
    o.position.set(side*SUPPORT_X*.0085,0,SUPPORT_Z*.0085);o.name='support-'+side+'-'+part.id;
  }
  updateTracks(0);
  // Broad hip bellows, without the previous little conical skirt.
  for(let i=0;i<5;i++){const o=ring(root,.545,.053,rubber,1.42-i*.068);o.scale.set(1.08,.94,1);}
  cyl(root,.56,.56,.10,silver,0,1.545);ring(root,.58,.022,rim,1.59);ring(root,.58,.018,rim,1.49);
  lathe(torso,[[0,1.62],[.46,1.62],[.56,1.65],[.65,1.73],[.70,1.84],[.70,2.04],[.70,2.30],[.64,2.43],[.51,2.53],[.37,2.56],[0,2.56]],silver);
  ring(torso,.70,.018,rim,1.89);ring(torso,.668,.012,black,2.38);
  // The amber glass ABOVE the console is the speaking light.
  box(torso,.50,.30,.044,rim,0,2.40,.60);box(torso,.455,.267,.052,black,0,2.40,.62);
  const speechGlass=box(torso,.425,.24,.020,mouthMat,0,2.40,.654);speechGlass.name='upper-speech-glass';
  for(let i=0;i<4;i++)box(torso,.43,.015,.025,rim,0,2.304+i*.063,.670);
  box(torso,.43,.40,.045,rim,0,2.058,.688);box(torso,.382,.36,.020,black,0,2.058,.717);
  const lamp=(x,y,color,radius=.026)=>{const m=new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:.35,roughness:.25});indicators.push(m);const o=sphere(torso,radius,m,x,y,.740);o.scale.z=.45;};
  lamp(-.102,2.175,0xffd09b,.049);lamp(.102,2.175,0xe0ead9,.049);
  for(let row=0;row<3;row++)for(let col=0;col<5;col++){const c=[0x59a868,0xe8c653,0xf4e19d,0xd84d52,0x70adc0][col];box(torso,.047,.030,.015,material(c,.2,.3),-.13+col*.065,2.08-row*.036,.745);}
  for(let row=0;row<2;row++)for(let col=0;col<6;col++)lamp(-.143+col*.057,1.977-row*.043,[0xe45516,0xffbe22,0x328dc4][(row+col)%3],.017);
  // Passive metal vents on the rounded lower torso; these never glow.
  for(const side of [-1,1]){
    box(torso,.19,.13,.025,black,side*.40,1.76,.535);
    for(let i=0;i<8;i++)box(torso,.011,.13,.028,rim,side*.40-.08+i*.023,1.76,.551);
    const knob=sphere(torso,.041,black,side*.405,1.982,.58);knob.scale.z=.44;box(torso,.043,.008,.04,rim,side*.405,1.988,.605);
  }
  const collar=new THREE.Group();collar.position.y=2.588;torso.add(collar);
  const collarDetails=new THREE.Group();collarDetails.position.y=-2.588;collar.add(collarDetails);
  // Neck: fluted, rounded collar, black telescoping stem and separate ear dishes.
  cyl(collarDetails,.34,.41,.08,black,0,2.588,0);
  for(let i=0;i<56;i++){const a=i/56*Math.PI*2;const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(Math.sin(a)*.31,2.60,Math.cos(a)*.31),new THREE.Vector3(Math.sin(a)*.48,2.70,Math.cos(a)*.48),new THREE.Vector3(Math.sin(a)*.43,2.78,Math.cos(a)*.43),new THREE.Vector3(Math.sin(a)*.31,2.85,Math.cos(a)*.31)]);mesh(collarDetails,new THREE.TubeGeometry(curve,12,.009,5,false),rim);}
  cyl(collarDetails,.32,.32,.042,black,0,2.863,0);ring(collarDetails,.324,.009,rim,2.88);
  for(const side of [-1,1]){const a=cyl(collarDetails,.020,.020,.20,black,side*.37,2.88,0);a.rotation.z=side*1.1;sphere(collarDetails,.035,black,side*.46,2.94,0);cyl(collarDetails,.012,.012,.11,rim,side*.46,3.0,0);const ear=sphere(collarDetails,.075,side<0?material(0xbfb253,.5,.4):red,side*.46,3.068,0);ear.scale.set(side<0?.45:1,side<0?1:.45,.15);ear.rotation.y=side*.4;}
  const head=new THREE.Group();head.position.y=2.87;torso.add(head);
  // The fluted collar is fixed. Only the stem and bulb slide into its opening.
  const neck=new THREE.Group();neck.position.y=2.88;torso.add(neck);
  cyl(neck,.089,.096,.32,black,0,.16,0);
  for(let i=0;i<10;i++)ring(neck,.092,.012,rubber,.018+i*.031);
  const shoulderPlane=new THREE.Plane(new THREE.Vector3(0,1,0),-2.588);
  const stemFloor=new THREE.Plane(new THREE.Vector3(0,1,0),-2.88);
  const stemCeiling=new THREE.Plane(new THREE.Vector3(0,-1,0),3.11);
  for(const [group,planes] of [[collar,[shoulderPlane]],[neck,[stemFloor,stemCeiling]]]){
    const materials=new Map();group.traverse(o=>{if(o.isMesh){if(!materials.has(o.material)){const m=o.material.clone();m.clippingPlanes=planes;materials.set(o.material,m);}o.material=materials.get(o.material);}});
  }
  const updateHead=offset=>{
    const bounded=Math.max(-.58,Math.min(0,offset)),depth=-bounded/.58;
    head.position.set(0,2.87-.23*depth,0);head.rotation.set(0,0,0);
    collar.position.y=2.588;collar.visible=true;
    neck.position.y=2.88-.23*depth;neck.visible=depth<.999;
    stemCeiling.constant=3.11-.23*depth;
  };
  const dome=sphere(head,.50,glass,0,.47,0);dome.scale.set(1,.46,.84);ring(head,.45,.009,rim,.392);
  const radar=new THREE.Group();radar.position.y=.49;head.add(radar);
  cyl(radar,.095,.14,.12,black,0,-.03,0);
  for(const side of [-1,1]){const blade=box(radar,.26,.047,.018,black,side*.19,-.005,0);blade.rotation.z=side*-.20;for(let i=0;i<7;i++)sphere(radar,.009,material(0x9c7942,.7,.3),side*(.08+i*.035),-.005,.016);sphere(radar,.025,material(0xf8bc24,.4,.23),side*.17,.047,0);}
  cyl(head,.17,.17,.075,silver,0,.585,0);ring(head,.17,.012,rim,.621);
  function bellows(p,length,radius){cyl(p,radius*.84,radius*.84,length,black,0,-length/2);for(let i=0;i<9;i++)ring(p,radius,.027,rubber,-.03-i*(length-.06)/8);}
  for(const side of [-1,1]){
    const shoulder=new THREE.Group();shoulder.position.set(side*.64,2.185,0);torso.add(shoulder);
    const socket=sphere(shoulder,.218,silver);socket.scale.set(1,.90,.95);
    const upper=new THREE.Group();shoulder.add(upper);bellows(upper,.43,.16);
    const elbow=new THREE.Group();elbow.position.y=-.43;upper.add(elbow);sphere(elbow,.15,rubber);bellows(elbow,.31,.148);
    cyl(elbow,.20,.20,.048,rim,0,-.335);cyl(elbow,.163,.163,.057,black,0,-.36);
    const hand=new THREE.Group();hand.position.y=-.386;elbow.add(hand);
    const fingers=[];
    for(const edge of [-1,1]){const finger=new THREE.Group();finger.position.x=edge*.019;hand.add(finger);const shape=new THREE.Shape();shape.moveTo(edge*.018,0);shape.lineTo(edge*.14,-.015);shape.quadraticCurveTo(edge*.195,-.03,edge*.195,-.12);shape.quadraticCurveTo(edge*.195,-.225,edge*.06,-.232);shape.lineTo(edge*.06,-.168);shape.quadraticCurveTo(edge*.127,-.163,edge*.13,-.113);shape.lineTo(edge*.13,-.075);shape.lineTo(edge*.018,-.070);shape.closePath();const jaw=mesh(finger,new THREE.ExtrudeGeometry(shape,{depth:.07,bevelEnabled:true,bevelSize:.01,bevelThickness:.006,bevelSegments:2,steps:1}),red,0,0,-.035);fingers.push(finger);}
    arms.push({shoulder,upper,elbow,hand,fingers,side});
  }
  return {root,torso,chassis,supports,head,neck,collar,updateHead,radar,arms,tracks,updateTracks,mouthMat,indicators,headRest:2.87};
}
