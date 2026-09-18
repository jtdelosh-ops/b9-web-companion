(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Uc=0,nl=1,Dc=2;var Gs=1,Nc=2,Bi=3,qn=0,Re=1,ke=2,yn=0,Oi=1,il=2,sl=3,rl=4,zc=5;var ri=100,Fc=101,Bc=102,Oc=103,kc=104,Vc=200,Hc=201,Gc=202,Wc=203,al=204,ol=205,qc=206,Xc=207,Yc=208,Zc=209,$c=210,Jc=211,jc=212,Qc=213,Kc=214,Lr=0,Ur=1,Dr=2,Ti=3,Nr=4,zr=5,Fr=6,Br=7,pa=0,th=1,eh=2,an=0,ll=1,cl=2,hl=3,Ws=4,ul=5,dl=6,fl=7;var pl=300,Xn=301,ai=302,ma=303,ga=304,qs=306,Or=1e3,dn=1001,kr=1002,Ae=1003,nh=1004;var Xs=1005;var Ee=1006,xa=1007;var Yn=1008;var Ve=1009,ml=1010,gl=1011,ki=1012,_a=1013,on=1014,Je=1015,ln=1016,ya=1017,va=1018,Vi=1020,xl=35902,_l=35899,yl=1021,vl=1022,je=1023,fn=1026,Zn=1027,ba=1028,Ma=1029,$n=1030,Sa=1031;var wa=1033,Ys=33776,Zs=33777,$s=33778,Js=33779,Aa=35840,Ta=35841,Ea=35842,Ra=35843,Ca=36196,Pa=37492,Ia=37496,La=37488,Ua=37489,js=37490,Da=37491,Na=37808,za=37809,Fa=37810,Ba=37811,Oa=37812,ka=37813,Va=37814,Ha=37815,Ga=37816,Wa=37817,qa=37818,Xa=37819,Ya=37820,Za=37821,$a=36492,Ja=36494,ja=36495,Qa=36283,Ka=36284,Qs=36285,to=36286;var as=2300,Vr=2301,Pr=2302,qo=2303,Xo=2400,Yo=2401,Zo=2402;var ih=3200;var Ks=0,sh=1,Cn="",We="srgb",os="srgb-linear",ls="linear",re="srgb";var Ir=7680;var rh=519,ah=512,oh=513,lh=514,eo=515,ch=516,hh=517,no=518,uh=519,dh=35044;var bl="300 es",sn=2e3,Ei=2001;function yu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fh(){let i=cs("canvas");return i.style.display="block",i}var sc={},Ri=null;function Ml(...i){let t="THREE."+i.shift();Ri?Ri("log",t,...i):console.log(t,...i)}function ph(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=ph(i);let t="THREE."+i.shift();if(Ri)Ri("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=ph(i);let t="THREE."+i.shift();if(Ri)Ri("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ni(...i){let t=i.join(" ");t in sc||(sc[t]=!0,Vt(...i))}function mh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var gh={[Lr]:Ur,[Dr]:Fr,[Nr]:Br,[Ti]:zr,[Ur]:Lr,[Fr]:Dr,[Br]:Nr,[zr]:Ti},pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yo=Math.PI/180,Hr=180/Math.PI;function Hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function bu(i,t){return(i%t+t)%t}function vo(i,t,e){return(1-e)*i+e*t}function Ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ft=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*y;m<0&&(h=-h,d=-d,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let w=Math.acos(m),T=Math.sin(w);p=Math.sin(p*w)/T,o=Math.sin(o*w)/T,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+y*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+y*o;let w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-o*d,t[e+2]=c*g+u*d+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bo.copy(this).projectOnVector(t),this.sub(bo)}reflect(t){return this.sub(bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bo=new L,rc=new mn,Wt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],y=s[0],m=s[3],p=s[6],w=s[1],T=s[4],v=s[7],S=s[2],M=s[5],R=s[8];return r[0]=a*y+o*w+l*S,r[3]=a*m+o*T+l*M,r[6]=a*p+o*v+l*R,r[1]=c*y+u*w+f*S,r[4]=c*m+u*T+f*M,r[7]=c*p+u*v+f*R,r[2]=h*y+d*w+g*S,r[5]=h*m+d*T+g*M,r[8]=h*p+d*v+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(s*c-u*n)*y,t[2]=(o*n-s*a)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ni("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mo.makeScale(t,e)),this}rotate(t){return ni("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mo.makeRotation(-t)),this}translate(t,e){return ni("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Mo=new Wt,ac=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oc=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mu(){let i={enabled:!0,workingColorSpace:os,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?ls:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ni("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ni("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[os]:{primaries:t,whitePoint:n,transfer:ls,toXYZ:ac,fromXYZ:oc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:re,toXYZ:ac,fromXYZ:oc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),i}var te=Mu();function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ui,Gr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ui===void 0&&(ui=cs("canvas")),ui.width=t.width,ui.height=t.height;let s=ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=cs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=En(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Su=0,Ci=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(So(s[a].image)):r.push(So(s[a]))}else r=So(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function So(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var wu=0,wo=new L,Be=class i extends pn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=dn,s=dn,r=Ee,a=Yn,o=je,l=Ve,c=i.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Hi(),this.name="",this.source=new Ci(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wo).x}get height(){return this.source.getSize(wo).y}get depth(){return this.source.getSize(wo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Or:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Or:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=pl;Be.DEFAULT_ANISOTROPY=1;var pe=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,v=(d+1)/2,S=(p+1)/2,M=(u+h)/4,R=(f+y)/4,_=(g+m)/4;return T>v&&T>S?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=M/n,r=R/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=_/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-y)/w,this.z=(h-u)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wr=class extends pn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Be(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ee,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ci(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends Wr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},hs=class extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qr=class extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ce=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,f,h,d,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,h,d,g,y,m)}set(t,e,n,s,r,a,o,l,c,u,f,h,d,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/di.setFromMatrixColumn(t,0).length(),r=1/di.setFromMatrixColumn(t,1).length(),a=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,d=a*f,g=o*u,y=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-y*c,e[9]=-o*l,e[2]=y-h*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,d=l*f,g=c*u,y=c*f;e[0]=h+y*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=y+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,d=l*f,g=c*u,y=c*f;e[0]=h-y*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=y-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,d=a*f,g=o*u,y=o*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+y,e[1]=l*f,e[5]=y*c+h,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=y-h*f,e[8]=g*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-y*f}else if(t.order==="XZY"){let h=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+y,e[5]=a*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Au,t,Tu)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Un.crossVectors(n,He),Un.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Un.crossVectors(n,He)),Un.normalize(),lr.crossVectors(He,Un),s[0]=Un.x,s[4]=lr.x,s[8]=He.x,s[1]=Un.y,s[5]=lr.y,s[9]=He.y,s[2]=Un.z,s[6]=lr.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],w=n[3],T=n[7],v=n[11],S=n[15],M=s[0],R=s[4],_=s[8],A=s[12],C=s[1],D=s[5],F=s[9],k=s[13],P=s[2],B=s[6],X=s[10],Y=s[14],rt=s[3],Z=s[7],tt=s[11],it=s[15];return r[0]=a*M+o*C+l*P+c*rt,r[4]=a*R+o*D+l*B+c*Z,r[8]=a*_+o*F+l*X+c*tt,r[12]=a*A+o*k+l*Y+c*it,r[1]=u*M+f*C+h*P+d*rt,r[5]=u*R+f*D+h*B+d*Z,r[9]=u*_+f*F+h*X+d*tt,r[13]=u*A+f*k+h*Y+d*it,r[2]=g*M+y*C+m*P+p*rt,r[6]=g*R+y*D+m*B+p*Z,r[10]=g*_+y*F+m*X+p*tt,r[14]=g*A+y*k+m*Y+p*it,r[3]=w*M+T*C+v*P+S*rt,r[7]=w*R+T*D+v*B+S*Z,r[11]=w*_+T*F+v*X+S*tt,r[15]=w*A+T*k+v*Y+S*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15],w=l*d-c*h,T=o*d-c*f,v=o*h-l*f,S=a*d-c*u,M=a*h-l*u,R=a*f-o*u;return e*(y*w-m*T+p*v)-n*(g*w-m*S+p*M)+s*(g*T-y*S+p*R)-r*(g*v-y*M+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],w=e*o-n*a,T=e*l-s*a,v=e*c-r*a,S=n*l-s*o,M=n*c-r*o,R=s*c-r*l,_=u*y-f*g,A=u*m-h*g,C=u*p-d*g,D=f*m-h*y,F=f*p-d*y,k=h*p-d*m,P=w*k-T*F+v*D+S*C-M*A+R*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/P;return t[0]=(o*k-l*F+c*D)*B,t[1]=(s*F-n*k-r*D)*B,t[2]=(y*R-m*M+p*S)*B,t[3]=(h*M-f*R-d*S)*B,t[4]=(l*C-a*k-c*A)*B,t[5]=(e*k-s*C+r*A)*B,t[6]=(m*v-g*R-p*T)*B,t[7]=(u*R-h*v+d*T)*B,t[8]=(a*F-o*C+c*_)*B,t[9]=(n*C-e*F-r*_)*B,t[10]=(g*M-y*v+p*w)*B,t[11]=(f*v-u*M-d*w)*B,t[12]=(o*A-a*D-l*_)*B,t[13]=(e*D-n*A+s*_)*B,t[14]=(y*T-g*S-m*w)*B,t[15]=(u*S-f*T+h*w)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,y=a*u,m=a*f,p=o*f,w=l*c,T=l*u,v=l*f,S=n.x,M=n.y,R=n.z;return s[0]=(1-(y+p))*S,s[1]=(d+v)*S,s[2]=(g-T)*S,s[3]=0,s[4]=(d-v)*M,s[5]=(1-(h+p))*M,s[6]=(m+w)*M,s[7]=0,s[8]=(g+T)*R,s[9]=(m-w)*R,s[10]=(1-(h+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=di.set(s[0],s[1],s[2]).length(),o=di.set(s[4],s[5],s[6]).length(),l=di.set(s[8],s[9],s[10]).length();r<0&&(a=-a),tn.copy(this);let c=1/a,u=1/o,f=1/l;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,e.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=sn,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===sn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ei)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=sn,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===sn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ei)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},di=new L,tn=new ce,Au=new L(0,0,0),Tu=new L(1,1,1),Un=new L,lr=new L,He=new L,lc=new ce,cc=new mn,gn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cc.setFromEuler(this),this.setFromQuaternion(cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Eu=0,hc=new L,fi=new mn,Mn=new ce,cr=new L,ji=new L,Ru=new L,Cu=new mn,uc=new L(1,0,0),dc=new L(0,1,0),fc=new L(0,0,1),pc={type:"added"},Pu={type:"removed"},pi={type:"childadded",child:null},Ao={type:"childremoved",child:null},Te=class i extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new gn,n=new mn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Wt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(uc,t)}rotateY(t){return this.rotateOnAxis(dc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return hc.copy(t).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uc,t)}translateY(t){return this.translateOnAxis(dc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cr.copy(t):cr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ji,cr,this.up):Mn.lookAt(cr,ji,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),fi.setFromRotationMatrix(Mn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pc),pi.child=t,this.dispatchEvent(pi),pi.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pu),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pc),pi.child=t,this.dispatchEvent(pi),pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,t,Ru),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Cu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Te.DEFAULT_UP=new L(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xe=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},Iu={type:"move"},Pi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Iu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function To(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=bu(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=To(a,r,t+1/3),this.g=To(a,r,t),this.b=To(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let n=xh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return te.workingToColorSpace(Ie.copy(this),t),Math.round(jt(Ie.r*255,0,255))*65536+Math.round(jt(Ie.g*255,0,255))*256+Math.round(jt(Ie.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ie.copy(this),e);let n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=We){te.workingToColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,s=Ie.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(hr);let n=vo(Dn.h,hr.h,e),s=vo(Dn.s,hr.s,e),r=vo(Dn.l,hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new Yt;Yt.NAMES=xh;var ii=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},en=new L,Sn=new L,Eo=new L,wn=new L,mi=new L,gi=new L,mc=new L,Ro=new L,Co=new L,Po=new L,Io=new pe,Lo=new pe,Uo=new pe,Bn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),Sn.subVectors(n,e),Eo.subVectors(t,e);let a=en.dot(en),o=en.dot(Sn),l=en.dot(Eo),c=Sn.dot(Sn),u=Sn.dot(Eo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Io.setScalar(0),Lo.setScalar(0),Uo.setScalar(0),Io.fromBufferAttribute(t,e),Lo.fromBufferAttribute(t,n),Uo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Io,r.x),a.addScaledVector(Lo,r.y),a.addScaledVector(Uo,r.z),a}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),Sn.subVectors(t,e),en.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),en.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;mi.subVectors(s,n),gi.subVectors(r,n),Ro.subVectors(t,n);let l=mi.dot(Ro),c=gi.dot(Ro);if(l<=0&&c<=0)return e.copy(n);Co.subVectors(t,s);let u=mi.dot(Co),f=gi.dot(Co);if(u>=0&&f<=u)return e.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(mi,a);Po.subVectors(t,r);let d=mi.dot(Po),g=gi.dot(Po);if(g>=0&&d<=g)return e.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(gi,o);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return mc.subVectors(r,s),o=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(mc,o);let p=1/(m+y+h);return a=y*p,o=h*p,e.copy(n).addScaledVector(mi,a).addScaledVector(gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qi),dr.subVectors(this.max,Qi),xi.subVectors(t.a,Qi),_i.subVectors(t.b,Qi),yi.subVectors(t.c,Qi),Nn.subVectors(_i,xi),zn.subVectors(yi,_i),jn.subVectors(xi,yi);let e=[0,-Nn.z,Nn.y,0,-zn.z,zn.y,0,-jn.z,jn.y,Nn.z,0,-Nn.x,zn.z,0,-zn.x,jn.z,0,-jn.x,-Nn.y,Nn.x,0,-zn.y,zn.x,0,-jn.y,jn.x,0];return!Do(e,xi,_i,yi,dr)||(e=[1,0,0,0,1,0,0,0,1],!Do(e,xi,_i,yi,dr))?!1:(fr.crossVectors(Nn,zn),e=[fr.x,fr.y,fr.z],Do(e,xi,_i,yi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},An=[new L,new L,new L,new L,new L,new L,new L,new L],nn=new L,ur=new xn,xi=new L,_i=new L,yi=new L,Nn=new L,zn=new L,jn=new L,Qi=new L,dr=new L,fr=new L,Qn=new L;function Do(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qn.fromArray(i,r);let o=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var ve=new L,pr=new ft,Lu=0,Le=class extends pn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dh,this.updateRanges=[],this.gpuType=Je,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ds=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fs=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},Uu=new xn,Ki=new L,No=new L,On=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Uu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ki.subVectors(t,this.center);let e=Ki.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ki.copy(t.center).add(No)),this.expandByPoint(Ki.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Du=0,$e=new ce,zo=new Te,vi=new L,Ge=new xn,ts=new xn,we=new L,be=class i extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?fs:ds)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return zo.lookAt(t),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Ge.min,ts.min),Ge.expandByPoint(we),we.addVectors(Ge.max,ts.max),Ge.expandByPoint(we)):(Ge.expandByPoint(ts.min),Ge.expandByPoint(ts.max))}Ge.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)we.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(t,c),we.add(vi)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Le(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new L,l[_]=new L;let c=new L,u=new L,f=new L,h=new ft,d=new ft,g=new ft,y=new L,m=new L;function p(_,A,C){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,C),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,C),u.sub(c),f.sub(c),d.sub(h),g.sub(h);let D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[_].add(y),o[A].add(y),o[C].add(y),l[_].add(m),l[A].add(m),l[C].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let _=0,A=w.length;_<A;++_){let C=w[_],D=C.start,F=C.count;for(let k=D,P=D+F;k<P;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let T=new L,v=new L,S=new L,M=new L;function R(_){S.fromBufferAttribute(s,_),M.copy(S);let A=o[_];T.copy(A),T.sub(S.multiplyScalar(S.dot(A))).normalize(),v.crossVectors(M,A);let D=v.dot(l[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,D)}for(let _=0,A=w.length;_<A;++_){let C=w[_],D=C.start,F=C.count;for(let k=D,P=D+F;k<P;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,f=new L;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Le(h,u,f)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Fo=new L,Nu=new L,zu=new Wt,Ne=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fo.subVectors(n,e).cross(Nu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Fo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||zu.getNormalMatrix(t),s=this.coplanarPoint(Fo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Fu=0,Rn=class extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Oi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ne().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Tn=new L,Bo=new L,mr=new L,gr=new L,Xr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Bo.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),gr.copy(this.origin).sub(Bo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=gr.dot(this.direction),l=-gr.dot(mr),c=gr.lengthSq(),u=Math.abs(1-a*a),f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){let y=1/u;f*=y,h*=y,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Bo).addScaledVector(mr,h),d}intersectSphere(t,e){if(t.radius<0)return null;Tn.subVectors(t.center,this.origin);let n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=n.x-a.x,w=n.y-a.y,T=n.z-a.z,v=Math.abs(l),S=Math.abs(c),M=Math.abs(u),R,_,A,C,D,F,k,P,B,X,Y,rt;if(v>=S&&v>=M?(A=l,F=f,B=g,rt=p,l>=0?(R=c,_=u,C=h,D=d,k=y,P=m,X=w,Y=T):(R=u,_=c,C=d,D=h,k=m,P=y,X=T,Y=w)):S>=M?(A=c,F=h,B=y,rt=w,c>=0?(R=u,_=l,C=d,D=f,k=m,P=g,X=T,Y=p):(R=l,_=u,C=f,D=d,k=g,P=m,X=p,Y=T)):(A=u,F=d,B=m,rt=T,u>=0?(R=l,_=c,C=f,D=h,k=g,P=y,X=p,Y=w):(R=c,_=l,C=h,D=f,k=y,P=g,X=w,Y=p)),A===0)return null;let Z=R/A,tt=_/A,it=1/A,Et=C-Z*F,At=D-tt*F,j=k-Z*B,Q=P-tt*B,ot=X-Z*rt,z=Y-tt*rt,W=ot*Q-z*j,lt=Et*z-At*ot,Ct=j*At-Q*Et;if(s){if(W<0||lt<0||Ct<0)return null}else if((W<0||lt<0||Ct<0)&&(W>0||lt>0||Ct>0))return null;let ut=W+lt+Ct;if(ut===0)return null;let Bt=it*(W*F+lt*B+Ct*rt);return(ut>0?Bt<0:Bt>0)?null:this.at(Bt/ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ps=class extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gc=new ce,Kn=new Xr,xr=new On,xc=new L,_r=new L,yr=new L,vr=new L,Oo=new L,br=new L,_c=new L,Mr=new L,me=class extends Te{constructor(t=new be,e=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(Oo.fromBufferAttribute(f,t),a?br.addScaledVector(Oo,u):br.addScaledVector(Oo.sub(e),u))}e.add(br)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!(xr.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(xr,xc)===null||Kn.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(gc.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(gc),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),T=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=w,S=T;v<S;v+=3){let M=o.getX(v),R=o.getX(v+1),_=o.getX(v+2);s=Sr(this,p,t,n,c,u,f,M,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let w=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);s=Sr(this,a,t,n,c,u,f,w,T,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=w,S=T;v<S;v+=3){let M=v,R=v+1,_=v+2;s=Sr(this,p,t,n,c,u,f,M,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let w=m,T=m+1,v=m+2;s=Sr(this,a,t,n,c,u,f,w,T,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Bu(i,t,e,n,s,r,a,o){let l;if(t.side===Re?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===qn,o),l===null)return null;Mr.copy(o),Mr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Mr);return c<e.near||c>e.far?null:{distance:c,point:Mr.clone(),object:i}}function Sr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,_r),i.getVertexPosition(l,yr),i.getVertexPosition(c,vr);let u=Bu(i,t,e,n,_r,yr,vr,_c);if(u){let f=new L;Bn.getBarycoord(_c,_r,yr,vr,f),s&&(u.uv=Bn.getInterpolatedAttribute(s,o,l,c,f,new ft)),r&&(u.uv1=Bn.getInterpolatedAttribute(r,o,l,c,f,new ft)),a&&(u.normal=Bn.getInterpolatedAttribute(a,o,l,c,f,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new L,materialIndex:0};Bn.getNormal(_r,yr,vr,h.normal),u.face=h,u.barycoord=f}return u}var ms=class extends Be{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ae,u=Ae,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gs=class extends Le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},bi=new ce,yc=new ce,wr=[],vc=new xn,Ou=new ce,es=new me,ns=new On,xs=class extends me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ou)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),vc.copy(t.boundingBox).applyMatrix4(bi),this.boundingBox.union(vc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),ns.copy(t.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),t.ray.intersectsSphere(ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bi),yc.multiplyMatrices(n,bi),es.matrixWorld=yc,es.raycast(t,wr);for(let a=0,o=wr.length;a<o;a++){let l=wr[a];l.instanceId=r,l.object=this,e.push(l)}wr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ms(new Float32Array(s*this.count),s,this.count,ba,Je));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ti=new On,ku=new ft(.5,.5),Ar=new L,Ii=class{constructor(t=new Ne,e=new Ne,n=new Ne,s=new Ne,r=new Ne,a=new Ne){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=sn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],y=r[9],m=r[10],p=r[11],w=r[12],T=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-a,d-u,p-g,S-w).normalize(),s[1].setComponents(c+a,d+u,p+g,S+w).normalize(),s[2].setComponents(c+o,d+f,p+y,S+T).normalize(),s[3].setComponents(c-o,d-f,p-y,S-T).normalize(),n)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,d-h,p-m,S-v).normalize();else if(s[4].setComponents(c-l,d-h,p-m,S-v).normalize(),e===sn)s[5].setComponents(c+l,d+h,p+m,S+v).normalize();else if(e===Ei)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){ti.center.set(0,0,0);let e=ku.distanceTo(t.center);return ti.radius=.7071067811865476+e,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ar.x=s.normal.x>0?t.max.x:t.min.x,Ar.y=s.normal.y>0?t.max.y:t.min.y,Ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _s=class extends Be{constructor(t=[],e=Xn,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var kn=class extends Be{constructor(t,e,n=on,s,r,a,o=Ae,l=Ae,c,u=fn,f=1){if(u!==fn&&u!==Zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ci(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Yr=class extends kn{constructor(t,e=on,n=Xn,s,r,a=Ae,o=Ae,l,c=fn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ys=class extends Be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},_n=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2));function g(y,m,p,w,T,v,S,M,R,_,A){let C=v/R,D=S/_,F=v/2,k=S/2,P=M/2,B=R+1,X=_+1,Y=0,rt=0,Z=new L;for(let tt=0;tt<X;tt++){let it=tt*D-k;for(let Et=0;Et<B;Et++){let At=Et*C-F;Z[y]=At*w,Z[m]=it*T,Z[p]=P,c.push(Z.x,Z.y,Z.z),Z[y]=0,Z[m]=0,Z[p]=M>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(Et/R),f.push(1-tt/_),Y+=1}}for(let tt=0;tt<_;tt++)for(let it=0;it<R;it++){let Et=h+it+B*tt,At=h+it+B*(tt+1),j=h+(it+1)+B*(tt+1),Q=h+(it+1)+B*tt;l.push(Et,At,Q),l.push(At,j,Q),rt+=6}o.addGroup(d,rt,A),d+=rt,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var vs=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],g=0,y=[],m=n/2,p=0;w(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new ae(f,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function w(){let v=new L,S=new L,M=0,R=(e-t)/n;for(let _=0;_<=r;_++){let A=[],C=_/r,D=C*(e-t)+t;for(let F=0;F<=s;F++){let k=F/s,P=k*l+o,B=Math.sin(P),X=Math.cos(P);S.x=D*B,S.y=-C*n+m,S.z=D*X,f.push(S.x,S.y,S.z),v.set(B,R,X).normalize(),h.push(v.x,v.y,v.z),d.push(k,1-C),A.push(g++)}y.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){let C=y[A][_],D=y[A+1][_],F=y[A+1][_+1],k=y[A][_+1];(t>0||A!==0)&&(u.push(C,D,k),M+=3),(e>0||A!==r-1)&&(u.push(D,F,k),M+=3)}c.addGroup(p,M,0),p+=M}function T(v){let S=g,M=new ft,R=new L,_=0,A=v===!0?t:e,C=v===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*C,0),h.push(0,C,0),d.push(.5,.5),g++;let D=g;for(let F=0;F<=s;F++){let P=F/s*l+o,B=Math.cos(P),X=Math.sin(P);R.x=A*X,R.y=m*C,R.z=A*B,f.push(R.x,R.y,R.z),h.push(0,C,0),M.x=B*.5+.5,M.y=X*.5*C+.5,d.push(M.x,M.y),g++}for(let F=0;F<s;F++){let k=S+F,P=D+F;v===!0?u.push(P,P+1,k):u.push(P+1,P,k),_+=3}c.addGroup(p,_,v===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var qe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ft:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new ce;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(jt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(jt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Li=class extends qe{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ft){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Zr=class extends Li{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Sl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var bc=new L,Mc=new L,ko=new Sl,Vo=new Sl,Ho=new Sl,Ui=class extends qe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Mc.subVectors(s[0],s[1]).add(s[0]),c=Mc);let f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(bc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=bc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),ko.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,y,m),Vo.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,y,m),Ho.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Vo.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Ho.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(ko.calc(l),Vo.calc(l),Ho.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Sc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Vu(i,t){let e=1-i;return e*e*t}function Hu(i,t){return 2*(1-i)*i*t}function Gu(i,t){return i*i*t}function ss(i,t,e,n){return Vu(i,t)+Hu(i,e)+Gu(i,n)}function Wu(i,t){let e=1-i;return e*e*e*t}function qu(i,t){let e=1-i;return 3*e*e*i*t}function Xu(i,t){return 3*(1-i)*i*i*t}function Yu(i,t){return i*i*i*t}function rs(i,t,e,n,s){return Wu(i,t)+qu(i,e)+Xu(i,n)+Yu(i,s)}var bs=class extends qe{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rs(t,s.x,r.x,a.x,o.x),rs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$r=class extends qe{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rs(t,s.x,r.x,a.x,o.x),rs(t,s.y,r.y,a.y,o.y),rs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ms=class extends qe{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends qe{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ss=class extends qe{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ss(t,s.x,r.x,a.x),ss(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ws=class extends qe{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ss(t,s.x,r.x,a.x),ss(t,s.y,r.y,a.y),ss(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},As=class extends qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Sc(o,l.x,c.x,u.x,f.x),Sc(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},jr=Object.freeze({__proto__:null,ArcCurve:Zr,CatmullRomCurve3:Ui,CubicBezierCurve:bs,CubicBezierCurve3:$r,EllipseCurve:Li,LineCurve:Ms,LineCurve3:Jr,QuadraticBezierCurve:Ss,QuadraticBezierCurve3:ws,SplineCurve:As}),Qr=class extends qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jr[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new jr[s.type]().fromJSON(s))}return this}},Ts=class extends Qr{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ms(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ss(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new bs(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new As(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Li(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Di=class extends Ts{constructor(t){super(t),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ts().fromJSON(s))}return this}};function Zu(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=_h(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Ku(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,f=l;for(let h=e;h<s;h+=e){let d=i[h],g=i[h+1];d<o&&(o=d),g<l&&(l=g),d>u&&(u=d),g>f&&(f=g)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Es(r,a,e,o,l,c,0),a}function _h(i,t,e,n,s){let r;if(s===hd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=wc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=wc(a/n|0,i[a],i[a+1],r);return r&&Ni(r,r.next)&&(Cs(r),r=r.next),r}function si(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ni(e,e.next)||ge(e.prev,e,e.next)===0)){if(Cs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Es(i,t,e,n,s,r,a){if(!i)return;!a&&r&&sd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Ju(i,n,s,r):$u(i)){t.push(l.i,i.i,c.i),Cs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ju(si(i),t),Es(i,t,e,n,s,r,2)):a===2&&Qu(i,t,e,n,s,r):Es(si(i),t,e,n,s,r,1);break}}}function $u(i){let t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&is(s,o,r,l,a,c,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ju(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ge(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),g=Math.min(u,f,h),y=Math.max(o,l,c),m=Math.max(u,f,h),p=$o(d,g,t,e,n),w=$o(y,m,t,e,n),T=i.prevZ,v=i.nextZ;for(;T&&T.z>=p&&v&&v.z<=w;){if(T.x>=d&&T.x<=y&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&is(o,u,l,f,c,h,T.x,T.y)&&ge(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&is(o,u,l,f,c,h,v.x,v.y)&&ge(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=p;){if(T.x>=d&&T.x<=y&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&is(o,u,l,f,c,h,T.x,T.y)&&ge(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=w;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&is(o,u,l,f,c,h,v.x,v.y)&&ge(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ju(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ni(n,s)&&vh(n,e,e.next,s)&&Rs(n,s)&&Rs(s,n)&&(t.push(n.i,e.i,s.i),Cs(e),Cs(e.next),e=i=s),e=e.next}while(e!==i);return si(e)}function Qu(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&od(a,o)){let l=bh(a,o);a=si(a,a.next),l=si(l,l.next),Es(a,t,e,n,s,r,0),Es(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ku(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=_h(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ad(c))}s.sort(td);for(let r=0;r<s.length;r++)e=ed(s[r],e);return e}function td(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function ed(i,t){let e=nd(i,t);if(!e)return t;let n=bh(e,i);return si(n,n.next),si(e,e.next)}function nd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ni(i,e))return e;do{if(Ni(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&yh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Rs(e,i)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&id(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function id(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function sd(i,t,e,n){let s=i;do s.z===0&&(s.z=$o(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rd(s)}function rd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function $o(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ad(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function yh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function is(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&yh(i,t,e,n,s,r,a,o)}function od(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ld(i,t)&&(Rs(i,t)&&Rs(t,i)&&cd(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||Ni(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ni(i,t){return i.x===t.x&&i.y===t.y}function vh(i,t,e,n){let s=Er(ge(i,t,e)),r=Er(ge(i,t,n)),a=Er(ge(e,n,i)),o=Er(ge(e,n,t));return!!(s!==r&&a!==o||s===0&&Tr(i,e,t)||r===0&&Tr(i,n,t)||a===0&&Tr(e,i,n)||o===0&&Tr(e,t,n))}function Tr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Er(i){return i>0?1:i<0?-1:0}function ld(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Rs(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function cd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bh(i,t){let e=Jo(i.i,i.x,i.y),n=Jo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wc(i,t,e,n){let s=Jo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Jo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var jo=class{static triangulate(t,e,n=2){return Zu(t,e,n)}},ei=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ac(t),Tc(n,t);let a=t.length;e.forEach(Ac);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Tc(n,e[l]);let o=jo.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ac(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ps=class i extends be{constructor(t=new Di([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:ud,T,v=!1,S,M,R,_;if(p){T=p.getSpacedPoints(u),v=!0,h=!1;let nt=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(u,nt),M=new L,R=new L,_=new L}h||(m=0,d=0,g=0,y=0);let A=o.extractPoints(c),C=A.shape,D=A.holes;if(!ei.isClockWise(C)){C=C.reverse();for(let nt=0,at=D.length;nt<at;nt++){let ct=D[nt];ei.isClockWise(ct)&&(D[nt]=ct.reverse())}}function k(nt){let ct=10000000000000001e-36,ht=nt[0];for(let mt=1;mt<=nt.length;mt++){let Ot=mt%nt.length,Ft=nt[Ot],Gt=Ft.x-ht.x,qt=Ft.y-ht.y,I=Gt*Gt+qt*qt,ne=Math.max(Math.abs(Ft.x),Math.abs(Ft.y),Math.abs(ht.x),Math.abs(ht.y)),Qt=ct*ne*ne;if(I<=Qt){nt.splice(Ot,1),mt--;continue}ht=Ft}}k(C),D.forEach(k);let P=D.length,B=C;for(let nt=0;nt<P;nt++){let at=D[nt];C=C.concat(at)}function X(nt,at,ct){return at||Ht("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(at,ct)}let Y=C.length;function rt(nt,at,ct){let ht,mt,Ot,Ft=nt.x-at.x,Gt=nt.y-at.y,qt=ct.x-nt.x,I=ct.y-nt.y,ne=Ft*Ft+Gt*Gt,Qt=Ft*I-Gt*qt;if(Math.abs(Qt)>Number.EPSILON){let E=Math.sqrt(ne),x=Math.sqrt(qt*qt+I*I),O=at.x-Gt/E,G=at.y+Ft/E,$=ct.x-I/x,dt=ct.y+qt/x,pt=(($-O)*I-(dt-G)*qt)/(Ft*I-Gt*qt);ht=O+Ft*pt-nt.x,mt=G+Gt*pt-nt.y;let J=ht*ht+mt*mt;if(J<=2)return new ft(ht,mt);Ot=Math.sqrt(J/2)}else{let E=!1;Ft>Number.EPSILON?qt>Number.EPSILON&&(E=!0):Ft<-Number.EPSILON?qt<-Number.EPSILON&&(E=!0):Math.sign(Gt)===Math.sign(I)&&(E=!0),E?(ht=-Gt,mt=Ft,Ot=Math.sqrt(ne)):(ht=Ft,mt=Gt,Ot=Math.sqrt(ne/2))}return new ft(ht/Ot,mt/Ot)}let Z=[];for(let nt=0,at=B.length,ct=at-1,ht=nt+1;nt<at;nt++,ct++,ht++)ct===at&&(ct=0),ht===at&&(ht=0),Z[nt]=rt(B[nt],B[ct],B[ht]);let tt=[],it,Et=Z.concat();for(let nt=0,at=P;nt<at;nt++){let ct=D[nt];it=[];for(let ht=0,mt=ct.length,Ot=mt-1,Ft=ht+1;ht<mt;ht++,Ot++,Ft++)Ot===mt&&(Ot=0),Ft===mt&&(Ft=0),it[ht]=rt(ct[ht],ct[Ot],ct[Ft]);tt.push(it),Et=Et.concat(it)}let At;if(m===0)At=ei.triangulateShape(B,D);else{let nt=[],at=[];for(let ct=0;ct<m;ct++){let ht=ct/m,mt=d*Math.cos(ht*Math.PI/2),Ot=g*Math.sin(ht*Math.PI/2)+y;for(let Ft=0,Gt=B.length;Ft<Gt;Ft++){let qt=X(B[Ft],Z[Ft],Ot);lt(qt.x,qt.y,-mt),ht===0&&nt.push(qt)}for(let Ft=0,Gt=P;Ft<Gt;Ft++){let qt=D[Ft];it=tt[Ft];let I=[];for(let ne=0,Qt=qt.length;ne<Qt;ne++){let E=X(qt[ne],it[ne],Ot);lt(E.x,E.y,-mt),ht===0&&I.push(E)}ht===0&&at.push(I)}}At=ei.triangulateShape(nt,at)}let j=At.length,Q=g+y;for(let nt=0;nt<Y;nt++){let at=h?X(C[nt],Et[nt],Q):C[nt];v?(R.copy(S.normals[0]).multiplyScalar(at.x),M.copy(S.binormals[0]).multiplyScalar(at.y),_.copy(T[0]).add(R).add(M),lt(_.x,_.y,_.z)):lt(at.x,at.y,0)}for(let nt=1;nt<=u;nt++)for(let at=0;at<Y;at++){let ct=h?X(C[at],Et[at],Q):C[at];v?(R.copy(S.normals[nt]).multiplyScalar(ct.x),M.copy(S.binormals[nt]).multiplyScalar(ct.y),_.copy(T[nt]).add(R).add(M),lt(_.x,_.y,_.z)):lt(ct.x,ct.y,f/u*nt)}for(let nt=m-1;nt>=0;nt--){let at=nt/m,ct=d*Math.cos(at*Math.PI/2),ht=g*Math.sin(at*Math.PI/2)+y;for(let mt=0,Ot=B.length;mt<Ot;mt++){let Ft=X(B[mt],Z[mt],ht);lt(Ft.x,Ft.y,f+ct)}for(let mt=0,Ot=D.length;mt<Ot;mt++){let Ft=D[mt];it=tt[mt];for(let Gt=0,qt=Ft.length;Gt<qt;Gt++){let I=X(Ft[Gt],it[Gt],ht);v?lt(I.x,I.y+T[u-1].y,T[u-1].x+ct):lt(I.x,I.y,f+ct)}}}ot(),z();function ot(){let nt=s.length/3;if(h){let at=0,ct=Y*at;for(let ht=0;ht<j;ht++){let mt=At[ht];Ct(mt[2]+ct,mt[1]+ct,mt[0]+ct)}at=u+m*2,ct=Y*at;for(let ht=0;ht<j;ht++){let mt=At[ht];Ct(mt[0]+ct,mt[1]+ct,mt[2]+ct)}}else{for(let at=0;at<j;at++){let ct=At[at];Ct(ct[2],ct[1],ct[0])}for(let at=0;at<j;at++){let ct=At[at];Ct(ct[0]+Y*u,ct[1]+Y*u,ct[2]+Y*u)}}n.addGroup(nt,s.length/3-nt,0)}function z(){let nt=s.length/3,at=0;W(B,at),at+=B.length;for(let ct=0,ht=D.length;ct<ht;ct++){let mt=D[ct];W(mt,at),at+=mt.length}n.addGroup(nt,s.length/3-nt,1)}function W(nt,at){let ct=nt.length;for(;--ct>=0;){let ht=ct,mt=ct-1;mt<0&&(mt=nt.length-1);for(let Ot=0,Ft=u+m*2;Ot<Ft;Ot++){let Gt=Y*Ot,qt=Y*(Ot+1),I=at+ht+Gt,ne=at+mt+Gt,Qt=at+mt+qt,E=at+ht+qt;ut(I,ne,Qt,E)}}}function lt(nt,at,ct){l.push(nt),l.push(at),l.push(ct)}function Ct(nt,at,ct){Bt(nt),Bt(at),Bt(ct);let ht=s.length/3,mt=w.generateTopUV(n,s,ht-3,ht-2,ht-1);Zt(mt[0]),Zt(mt[1]),Zt(mt[2])}function ut(nt,at,ct,ht){Bt(nt),Bt(at),Bt(ht),Bt(at),Bt(ct),Bt(ht);let mt=s.length/3,Ot=w.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);Zt(Ot[0]),Zt(Ot[1]),Zt(Ot[3]),Zt(Ot[1]),Zt(Ot[2]),Zt(Ot[3])}function Bt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function Zt(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return dd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new jr[s.type]().fromJSON(s)),new i(n,t.options)}},ud={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ft(r,a),new ft(o,l),new ft(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ft(a,1-l),new ft(c,1-f),new ft(h,1-g),new ft(y,1-p)]:[new ft(o,1-l),new ft(u,1-f),new ft(d,1-g),new ft(m,1-p)]}};function dd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Is=class i extends be{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=jt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,f=new L,h=new ft,d=new L,g=new L,y=new L,m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(g)}for(let w=0;w<=e;w++){let T=n+w*u*s,v=Math.sin(T),S=Math.cos(T);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*v,f.y=t[M].y,f.z=t[M].x*S,a.push(f.x,f.y,f.z),h.x=w/e,h.y=M/(t.length-1),o.push(h.x,h.y);let R=l[3*M+0]*v,_=l[3*M+1],A=l[3*M+0]*S;c.push(R,_,A)}}for(let w=0;w<e;w++)for(let T=0;T<t.length-1;T++){let v=T+w*t.length,S=v,M=v+t.length,R=v+t.length+1,_=v+1;r.push(S,M,_),r.push(R,_,M)}this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("uv",new ae(o,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ls=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,d=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let w=p*h-a;for(let T=0;T<c;T++){let v=T*f-r;g.push(v,-w,0),y.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let T=w+c*p,v=w+c*(p+1),S=w+1+c*(p+1),M=w+1+c*p;d.push(T,v,M),d.push(v,S,M)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(y,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Us=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new L,h=new L,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let w=[],T=p/n,v=a+T*o,S=t*Math.cos(v),M=Math.sqrt(t*t-S*S),R=0;p===0&&a===0?R=.5/e:p===n&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){let A=_/e,C=s+A*r;f.x=-M*Math.cos(C),f.y=S,f.z=M*Math.sin(C),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(A+R,1-T),w.push(c++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let T=u[p][w+1],v=u[p][w],S=u[p+1][w],M=u[p+1][w+1];(p!==0||a>0)&&d.push(T,v,M),(p!==n-1||l<Math.PI)&&d.push(v,S,M)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(y,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ds=class i extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new L,d=new L,g=new L;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let w=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(w),d.y=(t+e*Math.cos(m))*Math.sin(w),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),h.x=t*Math.cos(w),h.y=t*Math.sin(w),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,w=(s+1)*(y-1)+m-1,T=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(p,w,v),l.push(w,T,v)}this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ns=class i extends be{constructor(t=new ws(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new ft,u=new L,f=[],h=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ae(f,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function y(){for(let T=0;T<e;T++)m(T);m(r===!1?e:0),w(),p()}function m(T){u=t.getPointAt(T/e,u);let v=a.normals[T],S=a.binormals[T];for(let M=0;M<=s;M++){let R=M/s*Math.PI*2,_=Math.sin(R),A=-Math.cos(R);l.x=A*v.x+_*S.x,l.y=A*v.y+_*S.y,l.z=A*v.z+_*S.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=e;T++)for(let v=1;v<=s;v++){let S=(s+1)*(T-1)+(v-1),M=(s+1)*T+(v-1),R=(s+1)*T+v,_=(s+1)*(T-1)+v;g.push(S,M,_),g.push(M,R,_)}}function w(){for(let T=0;T<=e;T++)for(let v=0;v<=s;v++)c.x=T/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new jr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function oi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ec(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ec(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ue(i){let t={};for(let e=0;e<i.length;e++){let n=oi(i[e]);for(let s in n)t[s]=n[s]}return t}function Ec(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function fd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Mh={clone:oi,merge:Ue},pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=oi(t.uniforms),this.uniformsGroups=fd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ft().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ce().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Kr=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},rn=class extends Rn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ks,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zs=class extends rn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Fs=class extends Rn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ks,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=pa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ta=class extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ea=class extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Mi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Go(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Vn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},na=class extends Vn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xo,endingEnd:Xo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yo:r=t,o=2*e-n;break;case Zo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yo:a=t,l=2*n-e;break;case Zo:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-h*m+2*h*y-h*g,w=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,T=(-1-d)*m+(1.5+d)*y+.5*g,v=d*m-d*y;for(let S=0;S!==o;++S)r[S]=p*a[u+S]+w*a[c+S]+T*a[l+S]+v*a[f+S];return r}},ia=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},sa=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ra=class extends Vn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let h=o*2,d=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=d*h+g*2,w=f[p],T=f[p+1],v=t*h+g*2,S=u[v],M=u[v+1],R=xd(n,e,w,S,s);r[g]=Sh(R,y,T,M,m)}return r}};function Sh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function gd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function xd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Sh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=gd(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ye=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mi(e,this.TimeBufferType),this.values=Mi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mi(t.times,Array),values:Mi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Go(t.settings)&&(n.settings={inTangents:Mi(t.settings.inTangents,Array),outTangents:Mi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ra(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case as:e=this.InterpolantFactoryMethodDiscrete;break;case Vr:e=this.InterpolantFactoryMethodLinear;break;case Pr:e=this.InterpolantFactoryMethodSmooth;break;case qo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return as;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return Pr;case this.InterpolantFactoryMethodBezier:return qo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Go(this.settings)&&(Rc(this.settings.inTangents,t),Rc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ht("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&vu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let y=e[f+g];if(y!==e[h+g]||y!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Go(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ye.prototype.ValueTypeName="";Ye.prototype.TimeBufferType=Float32Array;Ye.prototype.ValueBufferType=Float32Array;Ye.prototype.DefaultInterpolation=Vr;var Hn=class extends Ye{constructor(t,e,n){super(t,e,n)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=as;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends Ye{constructor(t,e,n,s){super(t,e,n,s)}};aa.prototype.ValueTypeName="color";var oa=class extends Ye{constructor(t,e,n,s){super(t,e,n,s)}};oa.prototype.ValueTypeName="number";var la=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Bs=class extends Ye{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new la(this.times,this.values,this.getValueSize(),t)}};Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Ye{constructor(t,e,n){super(t,e,n)}};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=as;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends Ye{constructor(t,e,n,s){super(t,e,n,s)}};ca.prototype.ValueTypeName="vector";var ha=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wh=new ha,ua=class{constructor(t){this.manager=t!==void 0?t:wh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ua.DEFAULT_MATERIAL_NAME="__DEFAULT";var zi=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Os=class extends zi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Wo=new ce,Cc=new L,Pc=new L,ks=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=Ve,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ii,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cc),Pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Wo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ei||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Rr=new L,Cr=new mn,un=new L,Vs=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Rr,Cr,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Cr,un.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Rr,Cr,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Cr,un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fn=new L,Ic=new ft,Lc=new ft,ze=class extends Vs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z)}getViewSize(t,e){return this.getViewBounds(t,Ic,Lc),e.subVectors(Lc,Ic)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(yo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Qo=class extends ks{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0}},Hs=class extends zi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Wn=class extends Vs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ko=class extends ks{constructor(){super(new Wn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fi=class extends zi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Ko}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Si=-90,wi=1,da=class extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ze(Si,wi,t,e);s.layers=this.layers,this.add(s);let r=new ze(Si,wi,t,e);r.layers=this.layers,this.add(r);let a=new ze(Si,wi,t,e);a.layers=this.layers,this.add(a);let o=new ze(Si,wi,t,e);o.layers=this.layers,this.add(o);let l=new ze(Si,wi,t,e);l.layers=this.layers,this.add(l);let c=new ze(Si,wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ei)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},fa=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Al="\\[\\]\\.:\\/",_d=new RegExp("["+Al+"]","g"),Tl="[^"+Al+"]",yd="[^"+Al.replace("\\.","")+"]",vd=/((?:WC+[\/:])*)/.source.replace("WC",Tl),bd=/(WCOD+)?/.source.replace("WCOD",yd),Md=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),Sd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),wd=new RegExp("^"+vd+bd+Md+Sd+"$"),Ad=["material","materials","bones","map"],tl=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_d,"")}static parseTrackName(t){let e=wd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ad.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=tl;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P0=new Float32Array(1);var el=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function El(i,t,e,n){let s=Td(n);switch(e){case yl:return i*t;case ba:return i*t/s.components*s.byteLength;case Ma:return i*t/s.components*s.byteLength;case $n:return i*t*2/s.components*s.byteLength;case Sa:return i*t*2/s.components*s.byteLength;case vl:return i*t*3/s.components*s.byteLength;case je:return i*t*4/s.components*s.byteLength;case wa:return i*t*4/s.components*s.byteLength;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $s:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:case Ra:return Math.max(i,16)*Math.max(t,8)/4;case Aa:case Ea:return Math.max(i,8)*Math.max(t,8)/2;case Ca:case Pa:case La:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ia:case js:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $a:case Ja:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qa:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qs:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Td(i){switch(i){case Ve:case ml:return{byteLength:1,components:1};case ki:case gl:case ln:return{byteLength:2,components:1};case ya:case va:return{byteLength:2,components:4};case on:case _a:case Je:return{byteLength:4,components:1};case xl:case _l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rd(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],y=f[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let y=f[d];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,af="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Mf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ef=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,If=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$f=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ap=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ip=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Op=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$p=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,em=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:Cd,alphahash_pars_fragment:Pd,alphamap_fragment:Id,alphamap_pars_fragment:Ld,alphatest_fragment:Ud,alphatest_pars_fragment:Dd,aomap_fragment:Nd,aomap_pars_fragment:zd,batching_pars_vertex:Fd,batching_vertex:Bd,begin_vertex:Od,beginnormal_vertex:kd,bsdfs:Vd,iridescence_fragment:Hd,bumpmap_pars_fragment:Gd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Xd,clipping_planes_vertex:Yd,color_fragment:Zd,color_pars_fragment:$d,color_pars_vertex:Jd,color_vertex:jd,common:Qd,cube_uv_reflection_fragment:Kd,defaultnormal_vertex:tf,displacementmap_pars_vertex:ef,displacementmap_vertex:nf,emissivemap_fragment:sf,emissivemap_pars_fragment:rf,colorspace_fragment:af,colorspace_pars_fragment:of,envmap_fragment:lf,envmap_common_pars_fragment:cf,envmap_pars_fragment:hf,envmap_pars_vertex:uf,envmap_physical_pars_fragment:Mf,envmap_vertex:df,fog_vertex:ff,fog_pars_vertex:pf,fog_fragment:mf,fog_pars_fragment:gf,gradientmap_pars_fragment:xf,lightmap_pars_fragment:_f,lights_lambert_fragment:yf,lights_lambert_pars_fragment:vf,lights_pars_begin:bf,lights_toon_fragment:Sf,lights_toon_pars_fragment:wf,lights_phong_fragment:Af,lights_phong_pars_fragment:Tf,lights_physical_fragment:Ef,lights_physical_pars_fragment:Rf,lights_fragment_begin:Cf,lights_fragment_maps:Pf,lights_fragment_end:If,lightprobes_pars_fragment:Lf,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:Df,logdepthbuf_pars_vertex:Nf,logdepthbuf_vertex:zf,map_fragment:Ff,map_pars_fragment:Bf,map_particle_fragment:Of,map_particle_pars_fragment:kf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:Gf,morphcolor_vertex:Wf,morphnormal_vertex:qf,morphtarget_pars_vertex:Xf,morphtarget_vertex:Yf,normal_fragment_begin:Zf,normal_fragment_maps:$f,normal_pars_fragment:Jf,normal_pars_vertex:jf,normal_vertex:Qf,normalmap_pars_fragment:Kf,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:np,iridescence_pars_fragment:ip,opaque_fragment:sp,packing:rp,premultiplied_alpha_fragment:ap,project_vertex:op,dithering_fragment:lp,dithering_pars_fragment:cp,roughnessmap_fragment:hp,roughnessmap_pars_fragment:up,shadowmap_pars_fragment:dp,shadowmap_pars_vertex:fp,shadowmap_vertex:pp,shadowmask_pars_fragment:mp,skinbase_vertex:gp,skinning_pars_vertex:xp,skinning_vertex:_p,skinnormal_vertex:yp,specularmap_fragment:vp,specularmap_pars_fragment:bp,tonemapping_fragment:Mp,tonemapping_pars_fragment:Sp,transmission_fragment:wp,transmission_pars_fragment:Ap,uv_pars_fragment:Tp,uv_pars_vertex:Ep,uv_vertex:Rp,worldpos_vertex:Cp,background_vert:Pp,background_frag:Ip,backgroundCube_vert:Lp,backgroundCube_frag:Up,cube_vert:Dp,cube_frag:Np,depth_vert:zp,depth_frag:Fp,distance_vert:Bp,distance_frag:Op,equirect_vert:kp,equirect_frag:Vp,linedashed_vert:Hp,linedashed_frag:Gp,meshbasic_vert:Wp,meshbasic_frag:qp,meshlambert_vert:Xp,meshlambert_frag:Yp,meshmatcap_vert:Zp,meshmatcap_frag:$p,meshnormal_vert:Jp,meshnormal_frag:jp,meshphong_vert:Qp,meshphong_frag:Kp,meshphysical_vert:tm,meshphysical_frag:em,meshtoon_vert:nm,meshtoon_frag:im,points_vert:sm,points_frag:rm,shadow_vert:am,shadow_frag:om,sprite_vert:lm,sprite_frag:cm},bt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},bn={basic:{uniforms:Ue([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ue([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ue([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ue([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ue([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ue([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ue([bt.points,bt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ue([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ue([bt.common,bt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ue([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ue([bt.sprite,bt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Ue([bt.common,bt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Ue([bt.lights,bt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};bn.physical={uniforms:Ue([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var io={r:0,b:0,g:0},hm=new ce,Yh=new Wt;Yh.set(-1,0,0,0,1,0,0,0,1);function um(i,t,e,n,s,r){let a=new Yt(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(w){let T=w.isScene===!0?w.background:null;if(T&&T.isTexture){let v=w.backgroundBlurriness>0;T=t.get(T,v)}return T}function g(w){let T=!1,v=d(w);v===null?m(a,o):v&&v.isColor&&(m(v,1),T=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(w,T){let v=d(T);v&&(v.isCubeTexture||v.mapping===qs)?(c===void 0&&(c=new me(new _n(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:oi(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hm.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yh),c.material.toneMapped=te.getTransfer(v.colorSpace)!==re,(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new me(new Ls(2,2),new Xe({name:"BackgroundMaterial",uniforms:oi(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=te.getTransfer(v.colorSpace)!==re,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,T){w.getRGB(io,wl(i)),e.buffers.color.setClear(io.r,io.g,io.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,T=1){a.set(w),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:g,addToRenderList:y,dispose:p}}function dm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(D,F,k,P,B){let X=!1,Y=f(D,P,k,F);r!==Y&&(r=Y,c(r.object)),X=d(D,P,k,B),X&&g(D,P,k,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(D,F,k,P),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function f(D,F,k,P){let B=P.wireframe===!0,X=n[F.id];X===void 0&&(X={},n[F.id]=X);let Y=D.isInstancedMesh===!0?D.id:0,rt=X[Y];rt===void 0&&(rt={},X[Y]=rt);let Z=rt[k.id];Z===void 0&&(Z={},rt[k.id]=Z);let tt=Z[B];return tt===void 0&&(tt=h(l()),Z[B]=tt),tt}function h(D){let F=[],k=[],P=[];for(let B=0;B<e;B++)F[B]=0,k[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:P,object:D,attributes:{},index:null}}function d(D,F,k,P){let B=r.attributes,X=F.attributes,Y=0,rt=k.getAttributes();for(let Z in rt)if(rt[Z].location>=0){let it=B[Z],Et=X[Z];if(Et===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(Et=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(Et=D.instanceColor)),it===void 0||it.attribute!==Et||Et&&it.data!==Et.data)return!0;Y++}return r.attributesNum!==Y||r.index!==P}function g(D,F,k,P){let B={},X=F.attributes,Y=0,rt=k.getAttributes();for(let Z in rt)if(rt[Z].location>=0){let it=X[Z];it===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(it=D.instanceColor));let Et={};Et.attribute=it,it&&it.data&&(Et.data=it.data),B[Z]=Et,Y++}r.attributes=B,r.attributesNum=Y,r.index=P}function y(){let D=r.newAttributes;for(let F=0,k=D.length;F<k;F++)D[F]=0}function m(D){p(D,0)}function p(D,F){let k=r.newAttributes,P=r.enabledAttributes,B=r.attributeDivisors;k[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),B[D]!==F&&(i.vertexAttribDivisor(D,F),B[D]=F)}function w(){let D=r.newAttributes,F=r.enabledAttributes;for(let k=0,P=F.length;k<P;k++)F[k]!==D[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function T(D,F,k,P,B,X,Y){Y===!0?i.vertexAttribIPointer(D,F,k,B,X):i.vertexAttribPointer(D,F,k,P,B,X)}function v(D,F,k,P){y();let B=P.attributes,X=k.getAttributes(),Y=F.defaultAttributeValues;for(let rt in X){let Z=X[rt];if(Z.location>=0){let tt=B[rt];if(tt===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),tt!==void 0){let it=tt.normalized,Et=tt.itemSize,At=t.get(tt);if(At===void 0)continue;let j=At.buffer,Q=At.type,ot=At.bytesPerElement,z=Q===i.INT||Q===i.UNSIGNED_INT||tt.gpuType===_a;if(tt.isInterleavedBufferAttribute){let W=tt.data,lt=W.stride,Ct=tt.offset;if(W.isInstancedInterleavedBuffer){for(let ut=0;ut<Z.locationSize;ut++)p(Z.location+ut,W.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ut=0;ut<Z.locationSize;ut++)m(Z.location+ut);i.bindBuffer(i.ARRAY_BUFFER,j);for(let ut=0;ut<Z.locationSize;ut++)T(Z.location+ut,Et/Z.locationSize,Q,it,lt*ot,(Ct+Et/Z.locationSize*ut)*ot,z)}else{if(tt.isInstancedBufferAttribute){for(let W=0;W<Z.locationSize;W++)p(Z.location+W,tt.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let W=0;W<Z.locationSize;W++)m(Z.location+W);i.bindBuffer(i.ARRAY_BUFFER,j);for(let W=0;W<Z.locationSize;W++)T(Z.location+W,Et/Z.locationSize,Q,it,Et*ot,Et/Z.locationSize*W*ot,z)}}else if(Y!==void 0){let it=Y[rt];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(Z.location,it);break;case 3:i.vertexAttrib3fv(Z.location,it);break;case 4:i.vertexAttrib4fv(Z.location,it);break;default:i.vertexAttrib1fv(Z.location,it)}}}}w()}function S(){A();for(let D in n){let F=n[D];for(let k in F){let P=F[k];for(let B in P){let X=P[B];for(let Y in X)u(X[Y].object),delete X[Y];delete P[B]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;let F=n[D.id];for(let k in F){let P=F[k];for(let B in P){let X=P[B];for(let Y in X)u(X[Y].object),delete X[Y];delete P[B]}}delete n[D.id]}function R(D){for(let F in n){let k=n[F];for(let P in k){let B=k[P];if(B[D.id]===void 0)continue;let X=B[D.id];for(let Y in X)u(X[Y].object),delete X[Y];delete B[D.id]}}}function _(D){for(let F in n){let k=n[F],P=D.isInstancedMesh===!0?D.id:0,B=k[P];if(B!==void 0){for(let X in B){let Y=B[X];for(let rt in Y)u(Y[rt].object),delete Y[rt];delete B[X]}delete k[P],Object.keys(k).length===0&&delete n[F]}}}function A(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function fm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function pm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==je&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ve&&R!==Je&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Vt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:v,maxSamples:S,samples:M}}function mm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ne,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let w=r?0:n,T=w*4,v=p.clippingState||null;l.value=v,v=u(g,h,T,d);for(let S=0;S!==T;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=d+y*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=d;T!==y;++T,v+=4)a.copy(f[T]).applyMatrix4(w,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Wi=4,gm=6,xm=20,_m=256,tr=new Wn,Ah=new Yt,Rl=null,Cl=0,Pl=0,Il=!1,ym=new L,li=new L,Xi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ym}=r;Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Rl,Cl,Pl),this._renderer.xr.enabled=Il,t.scissorTest=!1,Gi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xn||t.mapping===ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:ln,format:je,colorSpace:os,depthBuffer:!1},s=Th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vm(r)),this._blurMaterial=Mm(r,t,e),this._ggxMaterial=bm(r,t,e)}return s}_compileMaterial(t){let e=new me(new be,t);this._renderer.compile(e,tr)}_sceneToCubeUV(t,e,n,s,r){let l=new ze(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Ah),f.toneMapping=an,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new me(new _n,new ps({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,w=t.background;w?w.isColor&&(m.color.copy(w),t.background=null,p=!0):(m.color.copy(Ah),p=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):v===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));let S=this._cubeSize;Gi(s,v*S,T>2?S:0,S,S),f.setRenderTarget(s),p&&f.render(y,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Xn||t.mapping===ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Gi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,tr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Wi?n-g+Wi:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Gi(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,tr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Gi(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(o,tr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Wi?s-this._lodMax+Wi:0),h=4*(this._cubeSize-u);Gi(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(l,tr)}};function vm(i){let t=[],e=[],n=i,s=i-Wi+1+gm;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,g=new Float32Array(d*h*f),y=new Float32Array(d*h*f);for(let p=0;p<f;p++){let w=p%3*2/3-1,T=p>2?0:-1,v=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];g.set(v,d*h*p);for(let S=0;S<h;S++){let M=u[S*2]*2-1,R=u[S*2+1]*2-1;p===0?li.set(1,R,M):p===1?li.set(-M,1,-R):p===2?li.set(-M,R,1):p===3?li.set(-1,R,-M):p===4?li.set(-M,-1,R):li.set(M,R,-1),li.toArray(y,(p*h+S)*d)}}let m=new be;m.setAttribute("position",new Le(g,d)),m.setAttribute("outputDirection",new Le(y,d)),e.push(new me(m,null)),n>Wi&&n--}return{lodMeshes:e,sizeLods:t}}function Th(i,t,e){let n=new Oe(i,t,e);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bm(i,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_m,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Mm(i,t,e){return new Xe({name:"SphericalGaussianBlur",defines:{SAMPLES:xm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Eh(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Rh(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function oo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ro=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _s(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _n(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:yn});r.uniforms.tEquirect.value=e;let a=new me(s,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=Ee),new da(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Sm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===ma||d===ga)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new ro(g.height);return y.fromEquirectangularTexture(i,h),t.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,g=d===ma||d===ga,y=d===Xn||d===ai;if(g||y){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Xi(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let w=h.image;return g&&w&&w.height>0||y&&w&&l(w)?(n===null&&(n=new Xi(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===ma?h.mapping=Xn:d===ga&&(h.mapping=ai),h}function l(h){let d=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function wm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ni("WebGLRenderer: "+n+" extension not supported."),s}}}function Am(i,t,e,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,g=f.attributes.position,y=0;if(g===void 0)return;if(d!==null){let w=d.array;y=d.version;for(let T=0,v=w.length;T<v;T+=3){let S=w[T+0],M=w[T+1],R=w[T+2];h.push(S,M,M,R,R,S)}}else{let w=g.array;y=g.version;for(let T=0,v=w.length/3-1;T<v;T+=3){let S=T+0,M=T+1,R=T+2;h.push(S,M,M,R,R,S)}}let m=new(g.count>=65535?fs:ds)(h,1);m.version=y;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Tm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let y=0;for(let m=0;m<d;m++)y+=h[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Em(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rm(i,t,e){let n=new WeakMap,s=new pe;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let A=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],T=0;d===!0&&(T=1),g===!0&&(T=2),y===!0&&(T=3);let v=o.attributes.position.count*T,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*S*4*f),R=new hs(M,v,S,f);R.type=Je,R.needsUpdate=!0;let _=T*4;for(let C=0;C<f;C++){let D=m[C],F=p[C],k=w[C],P=v*S*4*C;for(let B=0;B<D.count;B++){let X=B*_;d===!0&&(s.fromBufferAttribute(D,B),M[P+X+0]=s.x,M[P+X+1]=s.y,M[P+X+2]=s.z,M[P+X+3]=0),g===!0&&(s.fromBufferAttribute(F,B),M[P+X+4]=s.x,M[P+X+5]=s.y,M[P+X+6]=s.z,M[P+X+7]=0),y===!0&&(s.fromBufferAttribute(k,B),M[P+X+8]=s.x,M[P+X+9]=s.y,M[P+X+10]=s.z,M[P+X+11]=k.itemSize===4?s.w:1)}}h={count:f,texture:R,size:new ft(v,S)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Cm(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Pm={[ll]:"LINEAR_TONE_MAPPING",[cl]:"REINHARD_TONE_MAPPING",[hl]:"CINEON_TONE_MAPPING",[Ws]:"ACES_FILMIC_TONE_MAPPING",[dl]:"AGX_TONE_MAPPING",[fl]:"NEUTRAL_TONE_MAPPING",[ul]:"CUSTOM_TONE_MAPPING"};function Im(i,t,e,n,s,r){let a=new Oe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new be;c.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ae([0,2,0,0,2,0],2));let u=new Kr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new me(c,u),h=new Wn(-1,1,1,-1,0,1),d=null,g=null,y=!1,m,p=null,w=[],T=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),l!==null&&l.setSize(v,S);for(let M=0;M<w.length;M++){let R=w[M];R.setSize&&R.setSize(v,S)}},this.setEffects=function(v){w=v,T=w.length>0&&w[0].isRenderPass===!0;let S=a.width,M=a.height;w.length>0&&o===null&&(o=new Oe(S,M,{type:ln,depthBuffer:!1,stencilBuffer:!1}),l=new Oe(S,M,{type:ln,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<w.length;R++){let _=w[R];_.setSize&&_.setSize(S,M)}},this.begin=function(v,S){if(y||v.toneMapping===an&&w.length===0)return!1;if(p=S,S!==null){let M=S.width,R=S.height;(a.width!==M||a.height!==R)&&this.setSize(M,R)}return T===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=an,!0},this.hasRenderPass=function(){return T},this.end=function(v,S){v.toneMapping=m,y=!0;let M=a,R=o;for(let _=0;_<w.length;_++){let A=w[_];A.enabled!==!1&&(A.render(v,R,M,S),A.needsSwap!==!1&&(M=R,R=R===o?l:o))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,u.defines={},te.getTransfer(d)===re&&(u.defines.SRGB_TRANSFER="");let _=Pm[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(p),v.render(f,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Zh=new Be,Dl=new kn(1,1),$h=new hs,Jh=new qr,jh=new _s,Ch=[],Ph=[],Ih=new Float32Array(16),Lh=new Float32Array(9),Uh=new Float32Array(4);function Yi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ch[s];if(r===void 0&&(r=new Float32Array(s),Ch[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lo(i,t){let e=Ph[t];e===void 0&&(e=new Int32Array(t),Ph[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Uh.set(n),i.uniformMatrix2fv(this.addr,!1,Uh),Se(e,n)}}function Fm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Lh.set(n),i.uniformMatrix3fv(this.addr,!1,Lh),Se(e,n)}}function Bm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Ih.set(n),i.uniformMatrix4fv(this.addr,!1,Ih),Se(e,n)}}function Om(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function Vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function Hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function Gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function Ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dl.compareFunction=e.isReversedDepthBuffer()?no:eo,r=Dl):r=Zh,e.setTexture2D(t||r,s)}function Zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jh,s)}function $m(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jh,s)}function Jm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$h,s)}function jm(i){switch(i){case 5126:return Lm;case 35664:return Um;case 35665:return Dm;case 35666:return Nm;case 35674:return zm;case 35675:return Fm;case 35676:return Bm;case 5124:case 35670:return Om;case 35667:case 35671:return km;case 35668:case 35672:return Vm;case 35669:case 35673:return Hm;case 5125:return Gm;case 36294:return Wm;case 36295:return qm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Jm}}function Qm(i,t){i.uniform1fv(this.addr,t)}function Km(i,t){let e=Yi(t,this.size,2);i.uniform2fv(this.addr,e)}function tg(i,t){let e=Yi(t,this.size,3);i.uniform3fv(this.addr,e)}function eg(i,t){let e=Yi(t,this.size,4);i.uniform4fv(this.addr,e)}function ng(i,t){let e=Yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ig(i,t){let e=Yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sg(i,t){let e=Yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rg(i,t){i.uniform1iv(this.addr,t)}function ag(i,t){i.uniform2iv(this.addr,t)}function og(i,t){i.uniform3iv(this.addr,t)}function lg(i,t){i.uniform4iv(this.addr,t)}function cg(i,t){i.uniform1uiv(this.addr,t)}function hg(i,t){i.uniform2uiv(this.addr,t)}function ug(i,t){i.uniform3uiv(this.addr,t)}function dg(i,t){i.uniform4uiv(this.addr,t)}function fg(i,t,e){let n=this.cache,s=t.length,r=lo(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Dl:a=Zh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function pg(i,t,e){let n=this.cache,s=t.length,r=lo(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jh,r[a])}function mg(i,t,e){let n=this.cache,s=t.length,r=lo(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||jh,r[a])}function gg(i,t,e){let n=this.cache,s=t.length,r=lo(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$h,r[a])}function xg(i){switch(i){case 5126:return Qm;case 35664:return Km;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}var Nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jm(e.type)}},zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xg(e.type)}},Fl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function Dh(i,t){i.seq.push(t),i.map[t.id]=t}function _g(i,t,e){let n=i.name,s=n.length;for(Ll.lastIndex=0;;){let r=Ll.exec(n),a=Ll.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Dh(e,c===void 0?new Nl(o,i,t):new zl(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Fl(o),Dh(e,f)),e=f}}}var qi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);_g(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Nh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var yg=37297,vg=0;function bg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var zh=new Wt;function Mg(i){te._getMatrix(zh,te.workingColorSpace,i);let t=`mat3( ${zh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case ls:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+bg(i.getShaderSource(t),o)}else return r}function Sg(i,t){let e=Mg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var wg={[ll]:"Linear",[cl]:"Reinhard",[hl]:"Cineon",[Ws]:"ACESFilmic",[dl]:"AgX",[fl]:"Neutral",[ul]:"Custom"};function Ag(i,t){let e=wg[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var so=new L;function Tg(){te.getLuminanceCoefficients(so);let i=so.x.toFixed(4),t=so.y.toFixed(4),e=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function Rg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function nr(i){return i!==""}function Bh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(i){return i.replace(Pg,Lg)}var Ig=new Map;function Lg(i,t){let e=Jt[t];if(e===void 0){let n=Ig.get(t);if(n!==void 0)e=Jt[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Bl(e)}var Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(i){return i.replace(Ug,Dg)}function Dg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ng={[Gs]:"SHADOWMAP_TYPE_PCF",[Bi]:"SHADOWMAP_TYPE_VSM"};function zg(i){return Ng[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fg={[Xn]:"ENVMAP_TYPE_CUBE",[ai]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE_UV"};function Bg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Fg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Og={[ai]:"ENVMAP_MODE_REFRACTION"};function kg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Og[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vg={[pa]:"ENVMAP_BLENDING_MULTIPLY",[th]:"ENVMAP_BLENDING_MIX",[eh]:"ENVMAP_BLENDING_ADD"};function Hg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vg[i.combine]||"ENVMAP_BLENDING_NONE"}function Gg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=zg(e),c=Bg(e),u=kg(e),f=Hg(e),h=Gg(e),d=Eg(e),g=Rg(r),y=s.createProgram(),m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(nr).join(`
`),p.length>0&&(p+=`
`)):(m=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),p=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==an?"#define TONE_MAPPING":"",e.toneMapping!==an?Jt.tonemapping_pars_fragment:"",e.toneMapping!==an?Ag("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Sg("linearToOutputTexel",e.outputColorSpace),Tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(nr).join(`
`)),a=Bl(a),a=Bh(a,e),a=Oh(a,e),o=Bl(o),o=Bh(o,e),o=Oh(o,e),a=kh(a),o=kh(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=w+m+a,v=w+p+o,S=Nh(s,s.VERTEX_SHADER,T),M=Nh(s,s.FRAGMENT_SHADER,v);s.attachShader(y,S),s.attachShader(y,M),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(D){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(S)||"",P=s.getShaderInfoLog(M)||"",B=F.trim(),X=k.trim(),Y=P.trim(),rt=!0,Z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,S,M);else{let tt=Fh(s,S,"vertex"),it=Fh(s,M,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+tt+`
`+it)}else B!==""?Vt("WebGLProgram: Program Info Log:",B):(X===""||Y==="")&&(Z=!1);Z&&(D.diagnostics={runnable:rt,programLog:B,vertexShader:{log:X,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(S),s.deleteShader(M),_=new qi(s,y),A=Cg(s,y)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,yg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=M,this}var qg=0,Ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new kl(t),e.set(t,n)),n}},kl=class{constructor(t){this.id=qg++,this.code=t,this.usedTimes=0}};function Xg(i){return i===$n||i===js||i===Qs}function Yg(i,t,e,n,s,r){let a=new us,o=new Ol,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,A,C,D,F,k){let P=D.fog,B=F.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,rt=t.get(_.envMap||X,Y),Z=rt&&rt.mapping===qs?rt.image.height:null,tt=d[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Vt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Et=it!==void 0?it.length:0,At=0;B.morphAttributes.position!==void 0&&(At=1),B.morphAttributes.normal!==void 0&&(At=2),B.morphAttributes.color!==void 0&&(At=3);let j,Q,ot,z;if(tt){let he=bn[tt];j=he.vertexShader,Q=he.fragmentShader}else{j=_.vertexShader,Q=_.fragmentShader;let he=o.getVertexShaderStage(_),ie=o.getFragmentShaderStage(_);o.update(_,he,ie),ot=he.id,z=ie.id}let W=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),Ct=F.isInstancedMesh===!0,ut=F.isBatchedMesh===!0,Bt=!!_.map,Zt=!!_.matcap,nt=!!rt,at=!!_.aoMap,ct=!!_.lightMap,ht=!!_.bumpMap&&_.wireframe===!1,mt=!!_.normalMap,Ot=!!_.displacementMap,Ft=!!_.emissiveMap,Gt=!!_.metalnessMap,qt=!!_.roughnessMap,I=_.anisotropy>0,ne=_.clearcoat>0,Qt=_.dispersion>0,E=_.retroreflectivity>0,x=_.iridescence>0,O=_.sheen>0,G=_.transmission>0,$=I&&!!_.anisotropyMap,dt=ne&&!!_.clearcoatMap,pt=ne&&!!_.clearcoatNormalMap,J=ne&&!!_.clearcoatRoughnessMap,et=x&&!!_.iridescenceMap,gt=x&&!!_.iridescenceThicknessMap,Dt=O&&!!_.sheenColorMap,vt=O&&!!_.sheenRoughnessMap,xt=!!_.specularMap,Nt=!!_.specularColorMap,kt=!!_.specularIntensityMap,Xt=G&&!!_.transmissionMap,N=G&&!!_.thicknessMap,_t=!!_.gradientMap,K=!!_.alphaMap,yt=_.alphaTest>0,wt=!!_.alphaHash,st=!!_.extensions,zt=an;_.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(zt=i.toneMapping);let Lt={shaderID:tt,shaderType:_.type,shaderName:_.name,vertexShader:j,fragmentShader:Q,defines:_.defines,customVertexShaderID:ot,customFragmentShaderID:z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:ut,batchingColor:ut&&F._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&F.instanceColor!==null,instancingMorph:Ct&&F.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Bt,matcap:Zt,envMap:nt,envMapMode:nt&&rt.mapping,envMapCubeUVHeight:Z,aoMap:at,lightMap:ct,bumpMap:ht,normalMap:mt,displacementMap:Ot,emissiveMap:Ft,normalMapObjectSpace:mt&&_.normalMapType===sh,normalMapTangentSpace:mt&&_.normalMapType===Ks,packedNormalMap:mt&&_.normalMapType===Ks&&Xg(_.normalMap.format),metalnessMap:Gt,roughnessMap:qt,anisotropy:I,anisotropyMap:$,clearcoat:ne,clearcoatMap:dt,clearcoatNormalMap:pt,clearcoatRoughnessMap:J,dispersion:Qt,retroreflection:E,iridescence:x,iridescenceMap:et,iridescenceThicknessMap:gt,sheen:O,sheenColorMap:Dt,sheenRoughnessMap:vt,specularMap:xt,specularColorMap:Nt,specularIntensityMap:kt,transmission:G,transmissionMap:Xt,thicknessMap:N,gradientMap:_t,opaque:_.transparent===!1&&_.blending===Oi&&_.alphaToCoverage===!1,alphaMap:K,alphaTest:yt,alphaHash:wt,combine:_.combine,mapUv:Bt&&g(_.map.channel),aoMapUv:at&&g(_.aoMap.channel),lightMapUv:ct&&g(_.lightMap.channel),bumpMapUv:ht&&g(_.bumpMap.channel),normalMapUv:mt&&g(_.normalMap.channel),displacementMapUv:Ot&&g(_.displacementMap.channel),emissiveMapUv:Ft&&g(_.emissiveMap.channel),metalnessMapUv:Gt&&g(_.metalnessMap.channel),roughnessMapUv:qt&&g(_.roughnessMap.channel),anisotropyMapUv:$&&g(_.anisotropyMap.channel),clearcoatMapUv:dt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(_.sheenRoughnessMap.channel),specularMapUv:xt&&g(_.specularMap.channel),specularColorMapUv:Nt&&g(_.specularColorMap.channel),specularIntensityMapUv:kt&&g(_.specularIntensityMap.channel),transmissionMapUv:Xt&&g(_.transmissionMap.channel),thicknessMapUv:N&&g(_.thicknessMap.channel),alphaMapUv:K&&g(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(mt||I),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Bt||K),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:lt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:At,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:Bt&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===re,decodeVideoTextureEmissive:Ft&&_.emissiveMap.isVideoTexture===!0&&te.getTransfer(_.emissiveMap.colorSpace)===re,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ke,flipSided:_.side===Re,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:st&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&_.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function m(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)A.push(C),A.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(A,_),w(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function w(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){let A=d[_.type],C;if(A){let D=bn[A];C=Mh.clone(D.uniforms)}else C=_.uniforms;return C}function v(_,A){let C=u.get(A);return C!==void 0?++C.usedTimes:(C=new Wg(i,A,_,s),c.push(C),u.set(A,C)),C}function S(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:T,acquireProgram:v,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:R}}function Zg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Hh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,y,m,p){let w=i[t];return w===void 0?(w={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},i[t]=w):(w.id=h.id,w.object=h,w.geometry=d,w.material=g,w.materialVariant=a(h),w.groupOrder=y,w.renderOrder=h.renderOrder,w.z=m,w.group=p),t++,w}function l(h,d,g,y,m,p,w){w.reversedDepth===!0&&(m=-m);let T=o(h,d,g,y,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(h,d,g,y,m,p){let w=o(h,d,g,y,m,p);g.transmission>0?n.unshift(w):g.transparent===!0?s.unshift(w):e.unshift(w)}function u(h,d){e.length>1&&e.sort(h||$g),n.length>1&&n.sort(d||Hh),s.length>1&&s.sort(d||Hh)}function f(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Jg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Gh,i.set(n,[a])):s>=r.length?(a=new Gh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function jg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Yt};break;case"SpotLight":e={position:new L,direction:new L,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Qg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Kg=0;function t0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function e0(i){let t=new jg,e=Qg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new ce,a=new ce;function o(c){let u=0,f=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,w=0,T=0,v=0,S=0,M=0,R=0,_=0,A=0,C=0;c.sort(t0);for(let F=0,k=c.length;F<k;F++){let P=c[F],B=P.color,X=P.intensity,Y=P.distance,rt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===$n?rt=P.shadow.map.texture:rt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=B.r*X,f+=B.g*X,h+=B.b*X;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],X);C++}else if(P.isSunLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,it=e.get(P);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[g]=it,n.sunShadowMap[g]=rt;let Et=tt.getViewportCount();for(let At=0;At<Et;At++)n.sunShadowMatrix[y+At]=tt.getMatrix(At),n.sunShadowCascade[y+At]=tt._cascadeData[At];y+=Et,g++}n.sun[d]=Z,d++}else if(P.isDirectionalLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,it=e.get(P);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=P.shadow.matrix,S++}n.directional[m]=Z,m++}else if(P.isSpotLight){let Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(B).multiplyScalar(X),Z.distance=Y,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[w]=Z;let tt=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,tt.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[w]=tt.matrix,P.castShadow){let it=e.get(P);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.spotShadow[w]=it,n.spotShadowMap[w]=rt,R++}w++}else if(P.isRectAreaLight){let Z=t.get(P);Z.color.copy(B).multiplyScalar(X),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=Z,T++}else if(P.isPointLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let tt=P.shadow,it=e.get(P);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,it.shadowCameraNear=tt.camera.near,it.shadowCameraFar=tt.camera.far,n.pointShadow[p]=it,n.pointShadowMap[p]=rt,n.pointShadowMatrix[p]=P.shadow.matrix,M++}n.point[p]=Z,p++}else if(P.isHemisphereLight){let Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(X),Z.groundColor.copy(P.groundColor).multiplyScalar(X),n.hemi[v]=Z,v++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let D=n.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==w||D.rectAreaLength!==T||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==M||D.numSpotShadows!==R||D.numSpotMaps!==_||D.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=w,n.rectArea.length=T,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,D.sunLength=d,D.directionalLength=m,D.pointLength=p,D.spotLength=w,D.rectAreaLength=T,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=M,D.numSpotShadows=R,D.numSpotMaps=_,D.numLightProbes=C,n.version=Kg++)}function l(c,u){let f=0,h=0,d=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let w=0,T=c.length;w<T;w++){let v=c[w];if(v.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),f++}else if(v.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(v.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let S=n.rectArea[y];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Wh(i){let t=new e0(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function n0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Wh(i),t.set(s,[o])):r>=a.length?(o=new Wh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var i0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,r0=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],a0=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],qh=new ce,er=new L,Ul=new L;function o0(i,t,e){let n=new Ii,s=new ft,r=new ft,a=new pe,o=new ta,l=new ea,c={},u=e.maxTextureSize,f={[qn]:Re,[Re]:qn,[ke]:ke},h=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:i0,fragmentShader:s0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new be;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new me(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let p=this.type;this.render=function(M,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Nc&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gs);let A=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(yn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==this.type;k&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=M.length;P<B;P++){let X=M[P],Y=X.shadow;if(Y===void 0){Vt("WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let rt=Y.getFrameExtents();s.multiply(rt),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,Y.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=Z,Y.map===null||k===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Bi){if(X.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Oe(s.x,s.y,{format:$n,type:ln,minFilter:Ee,magFilter:Ee,generateMipmaps:!1}),Y.map.texture.name=X.name+".shadowMap",Y.map.depthTexture=new kn(s.x,s.y,Je),Y.map.depthTexture.name=X.name+".shadowMapDepth",Y.map.depthTexture.format=fn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ae,Y.map.depthTexture.magFilter=Ae}else X.isPointLight?(Y.map=new ro(s.x),Y.map.depthTexture=new Yr(s.x,on)):(Y.map=new Oe(s.x,s.y),Y.map.depthTexture=new kn(s.x,s.y,on)),Y.map.depthTexture.name=X.name+".shadowMap",Y.map.depthTexture.format=fn,this.type===Gs?(Y.map.depthTexture.compareFunction=Z?no:eo,Y.map.depthTexture.minFilter=Ee,Y.map.depthTexture.magFilter=Ee):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ae,Y.map.depthTexture.magFilter=Ae);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let tt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();X.isPointLight!==!0&&Y.updateMatrices(X,_);for(let it=0;it<tt;it++){let Et=Y.getCamera(it);if(X.isPointLight){let At=Y.camera,j=Y.matrix,Q=X.distance||At.far;Q!==At.far&&(At.far=Q,At.updateProjectionMatrix()),er.setFromMatrixPosition(X.matrixWorld),At.position.copy(er),Ul.copy(At.position),Ul.add(r0[it]),At.up.copy(a0[it]),At.lookAt(Ul),At.updateMatrixWorld(),j.makeTranslation(-er.x,-er.y,-er.z),qh.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(qh,At.coordinateSystem,At.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,it),i.clear();else{it===0&&(i.setRenderTarget(Y.map),i.clear());let At=Y.getViewport(it);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),F.viewport(a)}n=Y.getFrustum(it),v(R,_,Et,X,this.type)}Y.isPointLightShadow!==!0&&this.type===Bi&&w(Y,_),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,C,D)};function w(M,R){let _=t.update(y);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Oe(s.x,s.y,{format:$n,type:ln}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(R,null,_,h,y,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(R,null,_,d,y,null)}function T(M,R,_,A){let C=null,D=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)C=D;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=C.uuid,k=R.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let B=P[k];B===void 0&&(B=C.clone(),P[k]=B,R.addEventListener("dispose",S)),C=B}if(C.visible=R.visible,C.wireframe=R.wireframe,A===Bi?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:f[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=_}return C}function v(M,R,_,A,C){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===Bi)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let k=t.update(M),P=M.material;if(Array.isArray(P)){let B=k.groups;for(let X=0,Y=B.length;X<Y;X++){let rt=B[X],Z=P[rt.materialIndex];if(Z&&Z.visible){let tt=T(M,Z,A,C);M.onBeforeShadow(i,M,R,_,k,tt,rt),i.renderBufferDirect(_,null,k,tt,M,rt),M.onAfterShadow(i,M,R,_,k,tt,rt)}}}else if(P.visible){let B=T(M,P,A,C);M.onBeforeShadow(i,M,R,_,k,B,null),i.renderBufferDirect(_,null,k,B,M,null),M.onAfterShadow(i,M,R,_,k,B,null)}}let F=M.children;for(let k=0,P=F.length;k<P;k++)v(F[k],R,_,A,C)}function S(M){M.target.removeEventListener("dispose",S);for(let _ in c){let A=c[_],C=M.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function l0(i,t){function e(){let N=!1,_t=new pe,K=null,yt=new pe(0,0,0,0);return{setMask:function(wt){K!==wt&&!N&&(i.colorMask(wt,wt,wt,wt),K=wt)},setLocked:function(wt){N=wt},setClear:function(wt,st,zt,Lt,he){he===!0&&(wt*=Lt,st*=Lt,zt*=Lt),_t.set(wt,st,zt,Lt),yt.equals(_t)===!1&&(i.clearColor(wt,st,zt,Lt),yt.copy(_t))},reset:function(){N=!1,K=null,yt.set(-1,0,0,0)}}}function n(){let N=!1,_t=!1,K=null,yt=null,wt=null;return{setReversed:function(st){if(_t!==st){let zt=t.get("EXT_clip_control");st?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),_t=st;let Lt=wt;wt=null,this.setClear(Lt)}},getReversed:function(){return _t},setTest:function(st){st?W(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(st){K!==st&&!N&&(i.depthMask(st),K=st)},setFunc:function(st){if(_t&&(st=gh[st]),yt!==st){switch(st){case Lr:i.depthFunc(i.NEVER);break;case Ur:i.depthFunc(i.ALWAYS);break;case Dr:i.depthFunc(i.LESS);break;case Ti:i.depthFunc(i.LEQUAL);break;case Nr:i.depthFunc(i.EQUAL);break;case zr:i.depthFunc(i.GEQUAL);break;case Fr:i.depthFunc(i.GREATER);break;case Br:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=st}},setLocked:function(st){N=st},setClear:function(st){wt!==st&&(wt=st,_t&&(st=1-st),i.clearDepth(st))},reset:function(){N=!1,K=null,yt=null,wt=null,_t=!1}}}function s(){let N=!1,_t=null,K=null,yt=null,wt=null,st=null,zt=null,Lt=null,he=null;return{setTest:function(ie){N||(ie?W(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(ie){_t!==ie&&!N&&(i.stencilMask(ie),_t=ie)},setFunc:function(ie,Ke,cn){(K!==ie||yt!==Ke||wt!==cn)&&(i.stencilFunc(ie,Ke,cn),K=ie,yt=Ke,wt=cn)},setOp:function(ie,Ke,cn){(st!==ie||zt!==Ke||Lt!==cn)&&(i.stencilOp(ie,Ke,cn),st=ie,zt=Ke,Lt=cn)},setLocked:function(ie){N=ie},setClear:function(ie){he!==ie&&(i.clearStencil(ie),he=ie)},reset:function(){N=!1,_t=null,K=null,yt=null,wt=null,st=null,zt=null,Lt=null,he=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],y=null,m=!1,p=null,w=null,T=null,v=null,S=null,M=null,R=null,_=new Yt(0,0,0),A=0,C=!1,D=null,F=null,k=null,P=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,rt=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=rt>=1):Z.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=rt>=2);let tt=null,it={},Et=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),j=new pe().fromArray(Et),Q=new pe().fromArray(At);function ot(N,_t,K,yt){let wt=new Uint8Array(4),st=i.createTexture();i.bindTexture(N,st),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<K;zt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(_t+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return st}let z={};z[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(i.DEPTH_TEST),a.setFunc(Ti),ht(!1),mt(nl),W(i.CULL_FACE),at(yn);function W(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function lt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Ct(N,_t){return h[N]!==_t?(i.bindFramebuffer(N,_t),h[N]=_t,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_t),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function ut(N,_t){let K=g,yt=!1;if(N){K=d.get(_t),K===void 0&&(K=[],d.set(_t,K));let wt=N.textures;if(K.length!==wt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let st=0,zt=wt.length;st<zt;st++)K[st]=i.COLOR_ATTACHMENT0+st;K.length=wt.length,yt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,yt=!0);yt&&i.drawBuffers(K)}function Bt(N){return y!==N?(i.useProgram(N),y=N,!0):!1}let Zt={[ri]:i.FUNC_ADD,[Fc]:i.FUNC_SUBTRACT,[Bc]:i.FUNC_REVERSE_SUBTRACT};Zt[Oc]=i.MIN,Zt[kc]=i.MAX;let nt={[Vc]:i.ZERO,[Hc]:i.ONE,[Gc]:i.SRC_COLOR,[al]:i.SRC_ALPHA,[$c]:i.SRC_ALPHA_SATURATE,[Yc]:i.DST_COLOR,[qc]:i.DST_ALPHA,[Wc]:i.ONE_MINUS_SRC_COLOR,[ol]:i.ONE_MINUS_SRC_ALPHA,[Zc]:i.ONE_MINUS_DST_COLOR,[Xc]:i.ONE_MINUS_DST_ALPHA,[Jc]:i.CONSTANT_COLOR,[jc]:i.ONE_MINUS_CONSTANT_COLOR,[Qc]:i.CONSTANT_ALPHA,[Kc]:i.ONE_MINUS_CONSTANT_ALPHA};function at(N,_t,K,yt,wt,st,zt,Lt,he,ie){if(N===yn){m===!0&&(lt(i.BLEND),m=!1);return}if(m===!1&&(W(i.BLEND),m=!0),N!==zc){if(N!==p||ie!==C){if((w!==ri||S!==ri)&&(i.blendEquation(i.FUNC_ADD),w=ri,S=ri),ie)switch(N){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",N);break}else switch(N){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sl:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",N);break}T=null,v=null,M=null,R=null,_.set(0,0,0),A=0,p=N,C=ie}return}wt=wt||_t,st=st||K,zt=zt||yt,(_t!==w||wt!==S)&&(i.blendEquationSeparate(Zt[_t],Zt[wt]),w=_t,S=wt),(K!==T||yt!==v||st!==M||zt!==R)&&(i.blendFuncSeparate(nt[K],nt[yt],nt[st],nt[zt]),T=K,v=yt,M=st,R=zt),(Lt.equals(_)===!1||he!==A)&&(i.blendColor(Lt.r,Lt.g,Lt.b,he),_.copy(Lt),A=he),p=N,C=!1}function ct(N,_t){N.side===ke?lt(i.CULL_FACE):W(i.CULL_FACE);let K=N.side===Re;_t&&(K=!K),ht(K),N.blending===Oi&&N.transparent===!1?at(yn):at(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let yt=N.stencilWrite;o.setTest(yt),yt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ft(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(N){D!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),D=N)}function mt(N){N!==Uc?(W(i.CULL_FACE),N!==F&&(N===nl?i.cullFace(i.BACK):N===Dc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),F=N}function Ot(N){N!==k&&(Y&&i.lineWidth(N),k=N)}function Ft(N,_t,K){N?(W(i.POLYGON_OFFSET_FILL),(P!==_t||B!==K)&&(P=_t,B=K,a.getReversed()&&(_t=-_t),i.polygonOffset(_t,K))):lt(i.POLYGON_OFFSET_FILL)}function Gt(N){N?W(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function qt(N){N===void 0&&(N=i.TEXTURE0+X-1),tt!==N&&(i.activeTexture(N),tt=N)}function I(N,_t,K){K===void 0&&(tt===null?K=i.TEXTURE0+X-1:K=tt);let yt=it[K];yt===void 0&&(yt={type:void 0,texture:void 0},it[K]=yt),(yt.type!==N||yt.texture!==_t)&&(tt!==K&&(i.activeTexture(K),tt=K),i.bindTexture(N,_t||z[N]),yt.type=N,yt.texture=_t)}function ne(){let N=it[tt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Qt(){try{i.compressedTexImage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function x(){try{i.texSubImage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function O(){try{i.texSubImage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function dt(){try{i.texStorage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function pt(){try{i.texStorage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function J(){try{i.texImage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function et(){try{i.texImage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function gt(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function Dt(N,_t){f[N]!==_t&&(i.pixelStorei(N,_t),f[N]=_t)}function vt(N){j.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),j.copy(N))}function xt(N){Q.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Q.copy(N))}function Nt(N,_t){let K=c.get(_t);K===void 0&&(K=new WeakMap,c.set(_t,K));let yt=K.get(N);yt===void 0&&(yt=i.getUniformBlockIndex(_t,N.name),K.set(N,yt))}function kt(N,_t){let yt=c.get(_t).get(N);l.get(_t)!==yt&&(i.uniformBlockBinding(_t,yt,N.__bindingPointIndex),l.set(_t,yt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},tt=null,it={},h={},d=new WeakMap,g=[],y=null,m=!1,p=null,w=null,T=null,v=null,S=null,M=null,R=null,_=new Yt(0,0,0),A=0,C=!1,D=null,F=null,k=null,P=null,B=null,j.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:W,disable:lt,bindFramebuffer:Ct,drawBuffers:ut,useProgram:Bt,setBlending:at,setMaterial:ct,setFlipSided:ht,setCullFace:mt,setLineWidth:Ot,setPolygonOffset:Ft,setScissorTest:Gt,activeTexture:qt,bindTexture:I,unbindTexture:ne,compressedTexImage2D:Qt,compressedTexImage3D:E,texImage2D:J,texImage3D:et,pixelStorei:Dt,getParameter:gt,updateUBOMapping:Nt,uniformBlockBinding:kt,texStorage2D:dt,texStorage3D:pt,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:$,scissor:vt,viewport:xt,reset:Xt}}function c0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,x){return g?new OffscreenCanvas(E,x):cs("canvas")}function m(E,x,O){let G=1,$=Qt(E);if(($.width>O||$.height>O)&&(G=O/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let dt=Math.floor(G*$.width),pt=Math.floor(G*$.height);h===void 0&&(h=y(dt,pt));let J=x?y(dt,pt):h;return J.width=dt,J.height=pt,J.getContext("2d").drawImage(E,0,0,dt,pt),Vt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+dt+"x"+pt+")."),J}else return"data"in E&&Vt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function p(E){return E.generateMipmaps}function w(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(E,x,O,G,$,dt=!1){if(E!==null){if(i[E]!==void 0)return i[E];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let pt;G&&(pt=t.get("EXT_texture_norm16"),pt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8),O===i.UNSIGNED_SHORT&&pt&&(J=pt.R16_EXT),O===i.SHORT&&pt&&(J=pt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),x===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8),O===i.UNSIGNED_SHORT&&pt&&(J=pt.RG16_EXT),O===i.SHORT&&pt&&(J=pt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&pt&&(J=pt.RGB16_EXT),O===i.SHORT&&pt&&(J=pt.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){let et=dt?ls:te.getTransfer($);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=et===re?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&pt&&(J=pt.RGBA16_EXT),O===i.SHORT&&pt&&(J=pt.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(E,x){let O;return E?x===null||x===on||x===Vi?O=i.DEPTH24_STENCIL8:x===Je?O=i.DEPTH32F_STENCIL8:x===ki&&(O=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===on||x===Vi?O=i.DEPTH_COMPONENT24:x===Je?O=i.DEPTH_COMPONENT32F:x===ki&&(O=i.DEPTH_COMPONENT16),O}function M(E,x){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ae&&E.minFilter!==Ee?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){let x=E.target;x.removeEventListener("dispose",R),A(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&f.delete(x)}function _(E){let x=E.target;x.removeEventListener("dispose",_),D(x)}function A(E){let x=n.get(E);if(x.__webglInit===void 0)return;let O=E.source,G=d.get(O);if(G){let $=G[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(E),Object.keys(G).length===0&&d.delete(O)}n.remove(E)}function C(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let O=E.source,G=d.get(O);delete G[x.__cacheKey],a.memory.textures--}function D(E){let x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let $=0;$<x.__webglFramebuffer[G].length;$++)i.deleteFramebuffer(x.__webglFramebuffer[G][$]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=E.textures;for(let G=0,$=O.length;G<$;G++){let dt=n.get(O[G]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(O[G])}n.remove(E)}let F=0;function k(){F=0}function P(){return F}function B(E){F=E}function X(){let E=F;return E>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,E}function Y(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function rt(E,x){let O=n.get(E);if(E.isVideoTexture&&I(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let G=E.image;if(G===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(O,E,x);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function Z(E,x){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){lt(O,E,x);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function tt(E,x){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){lt(O,E,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function it(E,x){let O=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){Ct(O,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let Et={[Or]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[kr]:i.MIRRORED_REPEAT},At={[Ae]:i.NEAREST,[nh]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Ee]:i.LINEAR,[xa]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},j={[ah]:i.NEVER,[uh]:i.ALWAYS,[oh]:i.LESS,[eo]:i.LEQUAL,[lh]:i.EQUAL,[no]:i.GEQUAL,[ch]:i.GREATER,[hh]:i.NOTEQUAL};function Q(E,x){if(x.type===Je&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ee||x.magFilter===xa||x.magFilter===Xs||x.magFilter===Yn||x.minFilter===Ee||x.minFilter===xa||x.minFilter===Xs||x.minFilter===Yn)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Et[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Et[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Et[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,At[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,At[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,j[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ae||x.minFilter!==Xs&&x.minFilter!==Yn||x.type===Je&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ot(E,x){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",R));let G=x.source,$=d.get(G);$===void 0&&($={},d.set(G,$));let dt=Y(x);if(dt!==E.__cacheKey){$[dt]===void 0&&($[dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[dt].usedTimes++;let pt=$[E.__cacheKey];pt!==void 0&&($[E.__cacheKey].usedTimes--,pt.usedTimes===0&&C(x)),E.__cacheKey=dt,E.__webglTexture=$[dt].texture}return O}function z(E,x,O){return Math.floor(Math.floor(E/O)/x)}function W(E,x,O,G){let dt=E.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,G,x.data);else{dt.sort((Dt,vt)=>Dt.start-vt.start);let pt=0;for(let Dt=1;Dt<dt.length;Dt++){let vt=dt[pt],xt=dt[Dt],Nt=vt.start+vt.count,kt=z(xt.start,x.width,4),Xt=z(vt.start,x.width,4);xt.start<=Nt+1&&kt===Xt&&z(xt.start+xt.count-1,x.width,4)===kt?vt.count=Math.max(vt.count,xt.start+xt.count-vt.start):(++pt,dt[pt]=xt)}dt.length=pt+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Dt=0,vt=dt.length;Dt<vt;Dt++){let xt=dt[Dt],Nt=Math.floor(xt.start/4),kt=Math.ceil(xt.count/4),Xt=Nt%x.width,N=Math.floor(Nt/x.width),_t=kt,K=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Xt,N,_t,K,O,G,x.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function lt(E,x,O){let G=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=i.TEXTURE_3D);let $=ot(E,x),dt=x.source;e.bindTexture(G,E.__webglTexture,i.TEXTURE0+O);let pt=n.get(dt);if(dt.version!==pt.__version||$===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let K=te.getPrimaries(te.workingColorSpace),yt=x.colorSpace===Cn?null:te.getPrimaries(x.colorSpace),wt=x.colorSpace===Cn||K===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let et=m(x.image,!1,s.maxTextureSize);et=ne(x,et);let gt=r.convert(x.format,x.colorSpace),Dt=r.convert(x.type),vt=v(x.internalFormat,gt,Dt,x.normalized,x.colorSpace,x.isVideoTexture);Q(G,x);let xt,Nt=x.mipmaps,kt=x.isVideoTexture!==!0,Xt=pt.__version===void 0||$===!0,N=dt.dataReady,_t=M(x,et);if(x.isDepthTexture)vt=S(x.format===Zn,x.type),Xt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,vt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,vt,et.width,et.height,0,gt,Dt,null));else if(x.isDataTexture)if(Nt.length>0){kt&&Xt&&e.texStorage2D(i.TEXTURE_2D,_t,vt,Nt[0].width,Nt[0].height);for(let K=0,yt=Nt.length;K<yt;K++)xt=Nt[K],kt?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,gt,Dt,xt.data):e.texImage2D(i.TEXTURE_2D,K,vt,xt.width,xt.height,0,gt,Dt,xt.data);x.generateMipmaps=!1}else kt?(Xt&&e.texStorage2D(i.TEXTURE_2D,_t,vt,et.width,et.height),N&&W(x,et,gt,Dt)):e.texImage2D(i.TEXTURE_2D,0,vt,et.width,et.height,0,gt,Dt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){kt&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,vt,Nt[0].width,Nt[0].height,et.depth);for(let K=0,yt=Nt.length;K<yt;K++)if(xt=Nt[K],x.format!==je)if(gt!==null)if(kt){if(N)if(x.layerUpdates.size>0){let wt=El(xt.width,xt.height,x.format,x.type);for(let st of x.layerUpdates){let zt=xt.data.subarray(st*wt/xt.data.BYTES_PER_ELEMENT,(st+1)*wt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,st,xt.width,xt.height,1,gt,zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,et.depth,gt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,vt,xt.width,xt.height,et.depth,0,xt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,et.depth,gt,Dt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,vt,xt.width,xt.height,et.depth,0,gt,Dt,xt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{kt&&Xt&&e.texStorage2D(i.TEXTURE_2D,_t,vt,Nt[0].width,Nt[0].height);for(let K=0,yt=Nt.length;K<yt;K++)xt=Nt[K],x.format!==je?gt!==null?kt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,vt,xt.width,xt.height,0,xt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,gt,Dt,xt.data):e.texImage2D(i.TEXTURE_2D,K,vt,xt.width,xt.height,0,gt,Dt,xt.data)}else if(x.isDataArrayTexture)if(kt){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,vt,et.width,et.height,et.depth),N)if(x.layerUpdates.size>0){let K=El(et.width,et.height,x.format,x.type);for(let yt of x.layerUpdates){let wt=et.data.subarray(yt*K/et.data.BYTES_PER_ELEMENT,(yt+1)*K/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,et.width,et.height,1,gt,Dt,wt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,Dt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,et.width,et.height,et.depth,0,gt,Dt,et.data);else if(x.isData3DTexture)kt?(Xt&&e.texStorage3D(i.TEXTURE_3D,_t,vt,et.width,et.height,et.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,Dt,et.data)):e.texImage3D(i.TEXTURE_3D,0,vt,et.width,et.height,et.depth,0,gt,Dt,et.data);else if(x.isFramebufferTexture){if(Xt)if(kt)e.texStorage2D(i.TEXTURE_2D,_t,vt,et.width,et.height);else{let K=et.width,yt=et.height;for(let wt=0;wt<_t;wt++)e.texImage2D(i.TEXTURE_2D,wt,vt,K,yt,0,gt,Dt,null),K>>=1,yt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),et.parentNode!==K){K.appendChild(et),f.add(x),K.onpaint=yt=>{let wt=yt.changedElements;for(let st of f)wt.includes(st.image)&&(st.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let wt=i.RGBA,st=i.RGBA,zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,wt,st,zt,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(kt&&Xt){let K=Qt(Nt[0]);e.texStorage2D(i.TEXTURE_2D,_t,vt,K.width,K.height)}for(let K=0,yt=Nt.length;K<yt;K++)xt=Nt[K],kt?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,gt,Dt,xt):e.texImage2D(i.TEXTURE_2D,K,vt,gt,Dt,xt);x.generateMipmaps=!1}else if(kt){if(Xt){let K=Qt(et);e.texStorage2D(i.TEXTURE_2D,_t,vt,K.width,K.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Dt,et)}else e.texImage2D(i.TEXTURE_2D,0,vt,gt,Dt,et);p(x)&&w(G),pt.__version=dt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ct(E,x,O){if(x.image.length!==6)return;let G=ot(E,x),$=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let dt=n.get($);if($.version!==dt.__version||G===!0){e.activeTexture(i.TEXTURE0+O);let pt=te.getPrimaries(te.workingColorSpace),J=x.colorSpace===Cn?null:te.getPrimaries(x.colorSpace),et=x.colorSpace===Cn||pt===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let gt=x.isCompressedTexture||x.image[0].isCompressedTexture,Dt=x.image[0]&&x.image[0].isDataTexture,vt=[];for(let st=0;st<6;st++)!gt&&!Dt?vt[st]=m(x.image[st],!0,s.maxCubemapSize):vt[st]=Dt?x.image[st].image:x.image[st],vt[st]=ne(x,vt[st]);let xt=vt[0],Nt=r.convert(x.format,x.colorSpace),kt=r.convert(x.type),Xt=v(x.internalFormat,Nt,kt,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,_t=dt.__version===void 0||G===!0,K=$.dataReady,yt=M(x,xt);Q(i.TEXTURE_CUBE_MAP,x);let wt;if(gt){N&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Xt,xt.width,xt.height);for(let st=0;st<6;st++){wt=vt[st].mipmaps;for(let zt=0;zt<wt.length;zt++){let Lt=wt[zt];x.format!==je?Nt!==null?N?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,0,0,Lt.width,Lt.height,Nt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,Xt,Lt.width,Lt.height,0,Lt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,0,0,Lt.width,Lt.height,Nt,kt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,Xt,Lt.width,Lt.height,0,Nt,kt,Lt.data)}}}else{if(wt=x.mipmaps,N&&_t){wt.length>0&&yt++;let st=Qt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Xt,st.width,st.height)}for(let st=0;st<6;st++)if(Dt){N?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,vt[st].width,vt[st].height,Nt,kt,vt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Xt,vt[st].width,vt[st].height,0,Nt,kt,vt[st].data);for(let zt=0;zt<wt.length;zt++){let he=wt[zt].image[st].image;N?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,0,0,he.width,he.height,Nt,kt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,Xt,he.width,he.height,0,Nt,kt,he.data)}}else{N?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Nt,kt,vt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Xt,Nt,kt,vt[st]);for(let zt=0;zt<wt.length;zt++){let Lt=wt[zt];N?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,0,0,Nt,kt,Lt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,Xt,Nt,kt,Lt.image[st])}}}p(x)&&w(i.TEXTURE_CUBE_MAP),dt.__version=$.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ut(E,x,O,G,$,dt){let pt=r.convert(O.format,O.colorSpace),J=r.convert(O.type),et=v(O.internalFormat,pt,J,O.normalized,O.colorSpace),gt=n.get(x),Dt=n.get(O);if(Dt.__renderTarget=x,!gt.__hasExternalTextures){let vt=Math.max(1,x.width>>dt),xt=Math.max(1,x.height>>dt);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,dt,et,vt,xt,x.depth,0,pt,J,null):e.texImage2D($,dt,et,vt,xt,0,pt,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),qt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,$,Dt.__webglTexture,0,Gt(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,$,Dt.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(E,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let G=x.depthTexture,$=G&&G.isDepthTexture?G.type:null,dt=S(x.stencilBuffer,$),pt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;qt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(x),dt,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(x),dt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,dt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,E)}else{let G=x.textures;for(let $=0;$<G.length;$++){let dt=G[$],pt=r.convert(dt.format,dt.colorSpace),J=r.convert(dt.type),et=v(dt.internalFormat,pt,J,dt.normalized,dt.colorSpace);qt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(x),et,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(x),et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,et,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Zt(E,x,O){let G=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Q(i.TEXTURE_CUBE_MAP,x.depthTexture);let gt=r.convert(x.depthTexture.format),Dt=r.convert(x.depthTexture.type),vt;x.depthTexture.format===fn?vt=i.DEPTH_COMPONENT24:x.depthTexture.format===Zn&&(vt=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,vt,x.width,x.height,0,gt,Dt,null)}}else rt(x.depthTexture,0);let dt=$.__webglTexture,pt=Gt(x),J=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,et=x.depthTexture.format===Zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===fn)qt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,J,dt,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,et,J,dt,0);else if(x.depthTexture.format===Zn)qt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,J,dt,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,et,J,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(E){let x=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let G=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=G}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)Zt(x.__webglFramebuffer[G],E,G);else{let G=E.texture.mipmaps;G&&G.length>0?Zt(x.__webglFramebuffer[0],E,0):Zt(x.__webglFramebuffer,E,0)}else if(O){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=i.createRenderbuffer(),Bt(x.__webglDepthbuffer[G],E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=x.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,dt)}}else{let G=E.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Bt(x.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(E,x,O){let G=n.get(E);x!==void 0&&ut(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&nt(E)}function ct(E){let x=E.texture,O=n.get(E),G=n.get(x);E.addEventListener("dispose",_);let $=E.textures,dt=E.isWebGLCubeRenderTarget===!0,pt=$.length>1;if(pt||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=x.version,a.memory.textures++),dt){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let et=0;et<x.mipmaps.length;et++)O.__webglFramebuffer[J][et]=i.createFramebuffer()}else O.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)O.__webglFramebuffer[J]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(pt)for(let J=0,et=$.length;J<et;J++){let gt=n.get($[J]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&qt(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){let et=$[J];O.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let gt=r.convert(et.format,et.colorSpace),Dt=r.convert(et.type),vt=v(et.internalFormat,gt,Dt,et.normalized,et.colorSpace,E.isXRRenderTarget===!0),xt=Gt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,vt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,O.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Q(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)ut(O.__webglFramebuffer[J][et],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,et);else ut(O.__webglFramebuffer[J],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(x)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let J=0,et=$.length;J<et;J++){let gt=$[J],Dt=n.get(gt),vt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(vt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Dt.__webglTexture),Q(vt,gt),ut(O.__webglFramebuffer,E,gt,i.COLOR_ATTACHMENT0+J,vt,0),p(gt)&&w(vt)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,G.__webglTexture),Q(J,x),x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)ut(O.__webglFramebuffer[et],E,x,i.COLOR_ATTACHMENT0,J,et);else ut(O.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,J,0);p(x)&&w(J),e.unbindTexture()}E.depthBuffer&&nt(E)}function ht(E){let x=E.textures;for(let O=0,G=x.length;O<G;O++){let $=x[O];if(p($)){let dt=T(E),pt=n.get($).__webglTexture;e.bindTexture(dt,pt),w(dt),e.unbindTexture()}}}let mt=[],Ot=[];function Ft(E){if(E.samples>0){if(qt(E)===!1){let x=E.textures,O=E.width,G=E.height,$=i.COLOR_BUFFER_BIT,dt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(E),J=x.length>1;if(J)for(let gt=0;gt<x.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let et=E.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let gt=0;gt<x.length;gt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[gt]);let Dt=n.get(x[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,O,G,0,0,O,G,$,i.NEAREST),l===!0&&(mt.length=0,Ot.length=0,mt.push(i.COLOR_ATTACHMENT0+gt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(mt.push(dt),Ot.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let gt=0;gt<x.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[gt]);let Dt=n.get(x[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Gt(E){return Math.min(s.maxSamples,E.samples)}function qt(E){let x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(E){let x=a.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function ne(E,x){let O=E.colorSpace,G=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==os&&O!==Cn&&(te.getTransfer(O)===re?(G!==je||$!==Ve)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",O)),x}function Qt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.getTextureUnits=P,this.setTextureUnits=B,this.setTexture2D=rt,this.setTexture2DArray=Z,this.setTexture3D=tt,this.setTextureCube=it,this.rebindTextures=at,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function h0(i,t){function e(n,s=Cn){let r,a=te.getTransfer(s);if(n===Ve)return i.UNSIGNED_BYTE;if(n===ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ml)return i.BYTE;if(n===gl)return i.SHORT;if(n===ki)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===on)return i.UNSIGNED_INT;if(n===Je)return i.FLOAT;if(n===ln)return i.HALF_FLOAT;if(n===yl)return i.ALPHA;if(n===vl)return i.RGB;if(n===je)return i.RGBA;if(n===fn)return i.DEPTH_COMPONENT;if(n===Zn)return i.DEPTH_STENCIL;if(n===ba)return i.RED;if(n===Ma)return i.RED_INTEGER;if(n===$n)return i.RG;if(n===Sa)return i.RG_INTEGER;if(n===wa)return i.RGBA_INTEGER;if(n===Ys||n===Zs||n===$s||n===Js)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ta||n===Ea||n===Ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Pa||n===Ia||n===La||n===Ua||n===js||n===Da)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ca||n===Pa)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ia)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===La)return r.COMPRESSED_R11_EAC;if(n===Ua)return r.COMPRESSED_SIGNED_R11_EAC;if(n===js)return r.COMPRESSED_RG11_EAC;if(n===Da)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Na||n===za||n===Fa||n===Ba||n===Oa||n===ka||n===Va||n===Ha||n===Ga||n===Wa||n===qa||n===Xa||n===Ya||n===Za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ka)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ha)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ga)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$a||n===Ja||n===ja)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$a)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===Ka||n===Qs||n===to)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var u0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ys(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:u0,fragmentShader:d0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hl=class extends pn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null,y=typeof XRWebGLBinding<"u",m=new Vl,p={},w=e.getContextAttributes(),T=null,v=null,S=[],M=[],R=new ft,_=null,A=null,C=new ze;C.viewport=new pe;let D=new ze;D.viewport=new pe;let F=[C,D],k=new fa,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let W=S[z];return W===void 0&&(W=new Pi,S[z]=W),W.getTargetRaySpace()},this.getControllerGrip=function(z){let W=S[z];return W===void 0&&(W=new Pi,S[z]=W),W.getGripSpace()},this.getHand=function(z){let W=S[z];return W===void 0&&(W=new Pi,S[z]=W),W.getHandSpace()};function X(z){let W=M.indexOf(z.inputSource);if(W===-1)return;let lt=S[W];lt!==void 0&&(lt.update(z.inputSource,z.frame,c||a),lt.dispatchEvent({type:z.type,data:z.inputSource}))}function Y(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",rt);for(let z=0;z<S.length;z++){let W=M[z];W!==null&&(M[z]=null,S[z].disconnect(W))}P=null,B=null,m.reset();for(let z in p)delete p[z];if(t.setRenderTarget(T),d=null,h=null,f=null,s=null,v=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),A!==null){let z=A.camera;z.fov=A.fov,z.zoom=A.zoom,z.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",rt),w.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,Ct=null,ut=null;w.depth&&(ut=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=w.stencil?Zn:fn,Ct=w.stencil?Vi:on);let Bt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Bt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Oe(h.textureWidth,h.textureHeight,{format:je,type:Ve,depthTexture:new kn(h.textureWidth,h.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let lt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Oe(d.framebufferWidth,d.framebufferHeight,{format:je,type:Ve,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(z){for(let W=0;W<z.removed.length;W++){let lt=z.removed[W],Ct=M.indexOf(lt);Ct>=0&&(M[Ct]=null,S[Ct].disconnect(lt))}for(let W=0;W<z.added.length;W++){let lt=z.added[W],Ct=M.indexOf(lt);if(Ct===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=M.length){M.push(lt),Ct=Bt;break}else if(M[Bt]===null){M[Bt]=lt,Ct=Bt;break}if(Ct===-1)break}let ut=S[Ct];ut&&ut.connect(lt)}}let Z=new L,tt=new L;function it(z,W,lt){Z.setFromMatrixPosition(W.matrixWorld),tt.setFromMatrixPosition(lt.matrixWorld);let Ct=Z.distanceTo(tt),ut=W.projectionMatrix.elements,Bt=lt.projectionMatrix.elements,Zt=ut[14]/(ut[10]-1),nt=ut[14]/(ut[10]+1),at=(ut[9]+1)/ut[5],ct=(ut[9]-1)/ut[5],ht=(ut[8]-1)/ut[0],mt=(Bt[8]+1)/Bt[0],Ot=Zt*ht,Ft=Zt*mt,Gt=Ct/(-ht+mt),qt=Gt*-ht;if(W.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(qt),z.translateZ(Gt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ut[10]===-1)z.projectionMatrix.copy(W.projectionMatrix),z.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let I=Zt+Gt,ne=nt+Gt,Qt=Ot-qt,E=Ft+(Ct-qt),x=at*nt/ne*I,O=ct*nt/ne*I;z.projectionMatrix.makePerspective(Qt,E,x,O,I,ne),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Et(z,W){W===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(W.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let W=z.near,lt=z.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(lt=m.depthFar)),k.near=D.near=C.near=W,k.far=D.far=C.far=lt,(P!==k.near||B!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),P=k.near,B=k.far),k.layers.mask=z.layers.mask|6,C.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let Ct=z.parent,ut=k.cameras;Et(k,Ct);for(let Bt=0;Bt<ut.length;Bt++)Et(ut[Bt],Ct);ut.length===2?it(k,C,D):k.projectionMatrix.copy(C.projectionMatrix),A===null&&z.isPerspectiveCamera&&(A={camera:z,fov:z.fov,zoom:z.zoom}),At(z,k,Ct)};function At(z,W,lt){lt===null?z.matrix.copy(W.matrixWorld):(z.matrix.copy(lt.matrixWorld),z.matrix.invert(),z.matrix.multiply(W.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(W.projectionMatrix),z.projectionMatrixInverse.copy(W.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Hr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(z){return p[z]};let j=null;function Q(z,W){if(u=W.getViewerPose(c||a),g=W,u!==null){let lt=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ct=!1;lt.length!==k.cameras.length&&(k.cameras.length=0,Ct=!0);for(let nt=0;nt<lt.length;nt++){let at=lt[nt],ct=null;if(d!==null)ct=d.getViewport(at);else{let mt=f.getViewSubImage(h,at);ct=mt.viewport,nt===0&&(t.setRenderTargetTextures(v,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(v))}let ht=F[nt];ht===void 0&&(ht=new ze,ht.layers.enable(nt),ht.viewport=new pe,F[nt]=ht),ht.matrix.fromArray(at.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(at.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ct.x,ct.y,ct.width,ct.height),nt===0&&(k.matrix.copy(ht.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ct===!0&&k.cameras.push(ht)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let nt=f.getDepthInformation(lt[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,s.renderState)}if(ut&&ut.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let nt=0;nt<lt.length;nt++){let at=lt[nt].camera;if(at){let ct=p[at];ct||(ct=new ys,p[at]=ct);let ht=f.getCameraImage(at);ct.sourceTexture=ht}}}}for(let lt=0;lt<S.length;lt++){let Ct=M[lt],ut=S[lt];Ct!==null&&ut!==void 0&&ut.update(Ct,W,c||a)}j&&j(z,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}let ot=new Xh;ot.setAnimationLoop(Q),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}},f0=new ce,Qh=new Wt;Qh.set(-1,0,0,0,1,0,0,0,1);function p0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,T,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),T=w.envMap,v=w.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(f0.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let M=S.program;n.uniformBlockBinding(v,M)}function c(v,S){let M=s[v.id];M===void 0&&(m(v),M=u(v),s[v.id]=M,v.addEventListener("dispose",w));let R=S.program;n.updateUBOMapping(v,R);let _=t.render.frame;r[v.id]!==_&&(h(v),r[v.id]=_)}function u(v){let S=f();v.__bindingPointIndex=S;let M=i.createBuffer(),R=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let S=s[v.id],M=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,A=M.length;_<A;_++){let C=M[_];if(Array.isArray(C))for(let D=0,F=C.length;D<F;D++)d(C[D],_,D,R);else d(C,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,S,M,R){if(y(v,S,M,R)===!0){let _=v.__offset,A=v.value;if(Array.isArray(A)){let C=0;for(let D=0;D<A.length;D++){let F=A[D],k=p(F);g(F,v.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,S,M){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,M)}function y(v,S,M,R){let _=v.value,A=S+"_"+M;if(R[A]===void 0)return typeof _=="number"||typeof _=="boolean"?R[A]=_:ArrayBuffer.isView(_)?R[A]=_.slice():R[A]=_.clone(),!0;{let C=R[A];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(v){let S=v.uniforms,M=0,R=16;for(let A=0,C=S.length;A<C;A++){let D=Array.isArray(S[A])?S[A]:[S[A]];for(let F=0,k=D.length;F<k;F++){let P=D[F],B=Array.isArray(P.value)?P.value:[P.value];for(let X=0,Y=B.length;X<Y;X++){let rt=B[X],Z=p(rt),tt=M%R,it=tt%Z.boundary,Et=tt+it;M+=it,Et!==0&&R-Et<Z.storage&&(M+=R-Et),P.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=Z.storage}}}let _=M%R;return _>0&&(M+=R-_),v.__size=M,v.__cache={},this}function p(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",v),S}function w(v){let S=v.target;S.removeEventListener("dispose",w);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function T(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var g0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vn=null;function x0(){return vn===null&&(vn=new ms(g0,16,16,$n,ln),vn.name="DFG_LUT",vn.minFilter=Ee,vn.magFilter=Ee,vn.wrapS=dn,vn.wrapT=dn,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}var ao=class{constructor(t={}){let{canvas:e=fh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Ve}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=d,m=new Set([wa,Sa,Ma]),p=new Set([Ve,on,ki,Vi,ya,va]),w=new Uint32Array(4),T=new Int32Array(4),v=new L,S=null,M=null,R=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=an,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,F=null,k=null,P=null,B=null;this._outputColorSpace=We;let X=0,Y=0,rt=null,Z=-1,tt=null,it=new pe,Et=new pe,At=null,j=new Yt(0),Q=0,ot=e.width,z=e.height,W=1,lt=null,Ct=null,ut=new pe(0,0,ot,z),Bt=new pe(0,0,ot,z),Zt=!1,nt=new Ii,at=!1,ct=!1,ht=new ce,mt=new L,Ot=new pe,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function qt(){return rt===null?W:1}let I=n;function ne(b,U){return e.getContext(b,U)}let Qt,E,x,O,G,$,dt,pt,J,et,gt,Dt,vt,xt,Nt,kt,Xt,N,_t,K,yt,wt,st;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",he,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",Ke,!1),I===null){let U="webgl2";if(I=ne(U,b),I===null)throw ne(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(b){throw e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Ke,!1),Ht("WebGLRenderer: "+b.message),b}function zt(){Qt=new wm(I),Qt.init(),yt=new h0(I,Qt),E=new pm(I,Qt,t,yt),x=new l0(I,Qt),E.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),k=I.createFramebuffer(),P=I.createFramebuffer(),B=I.createFramebuffer(),O=new Em(I),G=new Zg,$=new c0(I,Qt,x,G,E,yt,O),dt=new Sm(C),pt=new Rd(I),wt=new dm(I,pt),J=new Am(I,pt,O,wt),et=new Cm(I,J,pt,wt,O),N=new Rm(I,E,$),Nt=new mm(G),gt=new Yg(C,dt,Qt,E,wt,Nt),Dt=new p0(C,G),vt=new Jg,xt=new n0(Qt),Xt=new um(C,dt,x,et,g,l),kt=new o0(C,et,E),st=new m0(I,O,E,x),_t=new fm(I,Qt,O),K=new Tm(I,Qt,O),O.programs=gt.programs,C.capabilities=E,C.extensions=Qt,C.properties=G,C.renderLists=vt,C.shadowMap=kt,C.state=x,C.info=O}y!==Ve&&(A=new Im(y,e.width,e.height,o,s,r));let Lt=new Hl(C,I);this.xr=Lt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=Qt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Qt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(ot,z,!1))},this.getSize=function(b){return b.set(ot,z)},this.setSize=function(b,U,q=!0){if(Lt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=b,z=U,e.width=Math.floor(b*W),e.height=Math.floor(U*W),q===!0&&(e.style.width=b+"px",e.style.height=U+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(ot*W,z*W).floor()},this.setDrawingBufferSize=function(b,U,q){ot=b,z=U,W=q,e.width=Math.floor(b*q),e.height=Math.floor(U*q),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(y===Ve){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(it)},this.getViewport=function(b){return b.copy(ut)},this.setViewport=function(b,U,q,V){b.isVector4?ut.set(b.x,b.y,b.z,b.w):ut.set(b,U,q,V),x.viewport(it.copy(ut).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Bt)},this.setScissor=function(b,U,q,V){b.isVector4?Bt.set(b.x,b.y,b.z,b.w):Bt.set(b,U,q,V),x.scissor(Et.copy(Bt).multiplyScalar(W).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(b){x.setScissorTest(Zt=b)},this.setOpaqueSort=function(b){lt=b},this.setTransparentSort=function(b){Ct=b},this.getClearColor=function(b){return b.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,q=!0){let V=0;if(b){let H=!1;if(rt!==null){let St=rt.texture.format;H=m.has(St)}if(H){let St=rt.texture.type,Rt=p.has(St),Mt=Xt.getClearColor(),Pt=Xt.getClearAlpha(),Ut=Mt.r,$t=Mt.g,Kt=Mt.b;Rt?(w[0]=Ut,w[1]=$t,w[2]=Kt,w[3]=Pt,I.clearBufferuiv(I.COLOR,0,w)):(T[0]=Ut,T[1]=$t,T[2]=Kt,T[3]=Pt,I.clearBufferiv(I.COLOR,0,T))}else V|=I.COLOR_BUFFER_BIT}U&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Ke,!1),Xt.dispose(),vt.dispose(),xt.dispose(),G.dispose(),dt.dispose(),et.dispose(),wt.dispose(),st.dispose(),gt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",$l),Lt.removeEventListener("sessionend",Jl),Jn.stop()};function he(b){b.preventDefault(),Ml("WebGLRenderer: Context Lost."),D=!0}function ie(){Ml("WebGLRenderer: Context Restored."),D=!1;let b=O.autoReset,U=kt.enabled,q=kt.autoUpdate,V=kt.needsUpdate,H=kt.type;zt(),O.autoReset=b,kt.enabled=U,kt.autoUpdate=q,kt.needsUpdate=V,kt.type=H}function Ke(b){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function cn(b){let U=b.target;U.removeEventListener("dispose",cn),du(U)}function du(b){fu(b),G.remove(b)}function fu(b){let U=G.get(b).programs;U!==void 0&&(U.forEach(function(q){gt.releaseProgram(q)}),b.isShaderMaterial&&gt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,q,V,H,St){U===null&&(U=Ft);let Rt=H.isMesh&&H.matrixWorld.determinantAffine()<0,Mt=gu(b,U,q,V,H);x.setMaterial(V,Rt);let Pt=q.index,Ut=1;if(V.wireframe===!0){if(Pt=J.getWireframeAttribute(q),Pt===void 0)return;Ut=2}let $t=q.drawRange,Kt=q.attributes.position,It=$t.start*Ut,se=($t.start+$t.count)*Ut;St!==null&&(It=Math.max(It,St.start*Ut),se=Math.min(se,(St.start+St.count)*Ut)),Pt!==null?(It=Math.max(It,0),se=Math.min(se,Pt.count)):Kt!=null&&(It=Math.max(It,0),se=Math.min(se,Kt.count));let ye=se-It;if(ye<0||ye===1/0)return;wt.setup(H,V,Mt,q,Pt);let de,le=_t;if(Pt!==null&&(de=pt.get(Pt),le=K,le.setIndex(de)),H.isMesh)V.wireframe===!0?(x.setLineWidth(V.wireframeLinewidth*qt()),le.setMode(I.LINES)):le.setMode(I.TRIANGLES);else if(H.isLine){let Ce=V.linewidth;Ce===void 0&&(Ce=1),x.setLineWidth(Ce*qt()),H.isLineSegments?le.setMode(I.LINES):H.isLineLoop?le.setMode(I.LINE_LOOP):le.setMode(I.LINE_STRIP)}else H.isPoints?le.setMode(I.POINTS):H.isSprite&&le.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))le.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ce=H._multiDrawStarts,Tt=H._multiDrawCounts,De=H._multiDrawCount,ee=Pt?pt.get(Pt).bytesPerElement:1,Ze=G.get(V).currentProgram.getUniforms();for(let hn=0;hn<De;hn++)Ze.setValue(I,"_gl_DrawID",hn),le.render(Ce[hn]/ee,Tt[hn])}else if(H.isInstancedMesh)le.renderInstances(It,ye,H.count);else if(q.isInstancedBufferGeometry){let Ce=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Tt=Math.min(q.instanceCount,Ce);le.renderInstances(It,ye,Tt)}else le.render(It,ye)};function Zl(b,U,q,V){F!==null&&b.isNodeMaterial&&F.setObject(V,b),at===!0&&Nt.setState(b,q,!1),b.transparent===!0&&b.side===ke&&b.forceSinglePass===!1?(b.side=Re,b.needsUpdate=!0,or(b,U,V),b.side=qn,b.needsUpdate=!0,or(b,U,V),b.side=ke):or(b,U,V)}this.compile=function(b,U,q=null){q===null&&(q=b),F!==null&&F.renderStart(b,U,q),M=xt.get(q),M.init(U),_.push(M),q.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),b!==q&&b.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),M.setupLights(),F!==null&&F.updateLights(M.state.lightsArray),ct=this.localClippingEnabled,at=Nt.init(this.clippingPlanes,ct),at===!0&&Nt.setGlobalState(this.clippingPlanes,U),F!==null&&kt.render(M.state.shadowsArray,q,U);let V=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let St=H.material;if(St)if(Array.isArray(St))for(let Rt=0;Rt<St.length;Rt++){let Mt=St[Rt];Zl(Mt,q,U,H),V.add(Mt)}else Zl(St,q,U,H),V.add(St)}),M=_.pop(),F!==null&&F.renderEnd(),V},this.compileAsync=function(b,U,q=null){let V=this.compile(b,U,q);return new Promise(H=>{function St(){if(V.forEach(function(Rt){let Pt=G.get(Rt).currentProgram;(Pt===void 0||Pt.isReady())&&V.delete(Rt)}),V.size===0){H(b);return}setTimeout(St,10)}Qt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let xo=null;function pu(b){xo&&xo(b)}function $l(){Jn.stop()}function Jl(){Jn.start()}let Jn=new Xh;Jn.setAnimationLoop(pu),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(b){xo=b,Lt.setAnimationLoop(b),b===null?Jn.stop():Jn.start()},Lt.addEventListener("sessionstart",$l),Lt.addEventListener("sessionend",Jl),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(b,U);let q=Lt.enabled===!0&&Lt.isPresenting===!0,V=A!==null&&(rt===null||q)&&A.begin(C,rt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(U),U=Lt.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,U,rt),M=xt.get(b,_.length),M.init(U),M.state.textureUnits=$.getTextureUnits(),_.push(M),ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),nt.setFromProjectionMatrix(ht,sn,U.reversedDepth),ct=this.localClippingEnabled,at=Nt.init(this.clippingPlanes,ct),S=vt.get(b,R.length),S.init(),R.push(S),Lt.enabled===!0&&Lt.isPresenting===!0){let Rt=C.xr.getDepthSensingMesh();Rt!==null&&_o(Rt,U,-1/0,C.sortObjects)}_o(b,U,0,C.sortObjects),S.finish(),F!==null&&F.updateLights(M.state.lightsArray),C.sortObjects===!0&&S.sort(lt,Ct),Gt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Gt&&Xt.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Nt.beginShadows();let H=M.state.shadowsArray;if(kt.render(H,b,U),at===!0&&Nt.endShadows(),(V&&A.hasRenderPass())===!1){let Rt=S.opaque,Mt=S.transmissive;if(M.setupLights(),U.isArrayCamera){let Pt=U.cameras;if(Mt.length>0)for(let Ut=0,$t=Pt.length;Ut<$t;Ut++){let Kt=Pt[Ut];Ql(Rt,Mt,b,Kt)}Gt&&Xt.render(b);for(let Ut=0,$t=Pt.length;Ut<$t;Ut++){let Kt=Pt[Ut];jl(S,b,Kt,Kt.viewport)}}else Mt.length>0&&Ql(Rt,Mt,b,U),Gt&&Xt.render(b),jl(S,b,U)}rt!==null&&Y===0&&($.updateMultisampleRenderTarget(rt),$.updateRenderTargetMipmap(rt)),V&&A.end(C),b.isScene===!0&&b.onAfterRender(C,b,U),wt.resetDefaultState(),Z=-1,tt=null,_.pop(),_.length>0?(M=_[_.length-1],$.setTextureUnits(M.state.textureUnits),at===!0&&Nt.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,F!==null&&F.renderEnd()};function _o(b,U,q,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLightProbeGrid)M.pushLightProbeGrid(b);else if(b.isLight)M.pushLight(b),b.castShadow&&M.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(nt)){V&&Ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);let Rt=et.update(b),Mt=b.material;Mt.visible&&S.push(b,Rt,Mt,q,Ot.z,null,U)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(nt))){let Rt=et.update(b),Mt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ot.copy(b.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ot.copy(Rt.boundingSphere.center)),Ot.applyMatrix4(b.matrixWorld).applyMatrix4(ht)),Array.isArray(Mt)){let Pt=Rt.groups;for(let Ut=0,$t=Pt.length;Ut<$t;Ut++){let Kt=Pt[Ut],It=Mt[Kt.materialIndex];It&&It.visible&&S.push(b,Rt,It,q,Ot.z,Kt,U)}}else Mt.visible&&S.push(b,Rt,Mt,q,Ot.z,null,U)}}let St=b.children;for(let Rt=0,Mt=St.length;Rt<Mt;Rt++)_o(St[Rt],U,q,V)}function jl(b,U,q,V){let{opaque:H,transmissive:St,transparent:Rt}=b;M.setupLightsView(q),at===!0&&Nt.setGlobalState(C.clippingPlanes,q),V&&x.viewport(it.copy(V)),H.length>0&&ar(H,U,q),St.length>0&&ar(St,U,q),Rt.length>0&&ar(Rt,U,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Ql(b,U,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[V.id]===void 0){let It=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[V.id]=new Oe(1,1,{generateMipmaps:!0,type:It?ln:Ve,minFilter:Yn,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let St=M.state.transmissionRenderTarget[V.id],Rt=V.viewport||it;St.setSize(Rt.z*C.transmissionResolutionScale,Rt.w*C.transmissionResolutionScale);let Mt=C.getRenderTarget(),Pt=C.getActiveCubeFace(),Ut=C.getActiveMipmapLevel();C.setRenderTarget(St),C.getClearColor(j),Q=C.getClearAlpha(),Q<1&&C.setClearColor(16777215,.5),C.clear(),Gt&&Xt.render(q);let $t=C.toneMapping;C.toneMapping=an;let Kt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),M.setupLightsView(V),at===!0&&Nt.setGlobalState(C.clippingPlanes,V),ar(b,q,V),$.updateMultisampleRenderTarget(St),$.updateRenderTargetMipmap(St),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let se=0,ye=U.length;se<ye;se++){let de=U[se],{object:le,geometry:Ce,material:Tt,group:De}=de;if(Tt.side===ke&&le.layers.test(V.layers)){let ee=Tt.side;Tt.side=Re,Tt.needsUpdate=!0,Kl(le,q,V,Ce,Tt,De),Tt.side=ee,Tt.needsUpdate=!0,It=!0}}It===!0&&($.updateMultisampleRenderTarget(St),$.updateRenderTargetMipmap(St))}C.setRenderTarget(Mt,Pt,Ut),C.setClearColor(j,Q),Kt!==void 0&&(V.viewport=Kt),C.toneMapping=$t}function ar(b,U,q){let V=U.isScene===!0?U.overrideMaterial:null;for(let H=0,St=b.length;H<St;H++){let Rt=b[H],{object:Mt,geometry:Pt,group:Ut}=Rt,$t=Rt.material;$t.allowOverride===!0&&V!==null&&($t=V),Mt.layers.test(q.layers)&&Kl(Mt,U,q,Pt,$t,Ut)}}function Kl(b,U,q,V,H,St){F!==null&&H.isNodeMaterial&&F.setObject(b,H),b.onBeforeRender(C,U,q,V,H,St),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(C,U,q,V,b,St),H.transparent===!0&&H.side===ke&&H.forceSinglePass===!1?(H.side=Re,H.needsUpdate=!0,C.renderBufferDirect(q,U,V,H,b,St),H.side=qn,H.needsUpdate=!0,C.renderBufferDirect(q,U,V,H,b,St),H.side=ke):C.renderBufferDirect(q,U,V,H,b,St),b.onAfterRender(C,U,q,V,H,St)}function or(b,U,q){U.isScene!==!0&&(U=Ft);let V=G.get(b),H=M.state.lights,St=M.state.shadowsArray,Rt=H.state.version,Mt=gt.getParameters(b,H.state,St,U,q,M.state.lightProbeGridArray),Pt=gt.getProgramCacheKey(Mt),Ut=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let $t=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=dt.get(b.envMap||V.environment,$t),V.envMapRotation=V.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",cn),Ut=new Map,V.programs=Ut);let Kt=Ut.get(Pt);if(Kt!==void 0){if(V.currentProgram===Kt&&V.lightsStateVersion===Rt)return ec(b,Mt),Kt}else Mt.uniforms=gt.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,q,Mt),b.onBeforeCompile(Mt,C),Kt=gt.acquireProgram(Mt,Pt),Ut.set(Pt,Kt),V.uniforms=Mt.uniforms;let It=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(It.clippingPlanes=Nt.uniform),ec(b,Mt),V.needsLights=_u(b),V.lightsStateVersion=Rt,V.needsLights&&(It.ambientLightColor.value=H.state.ambient,It.lightProbe.value=H.state.probe,It.sunLights.value=H.state.sun,It.sunLightShadows.value=H.state.sunShadow,It.directionalLights.value=H.state.directional,It.directionalLightShadows.value=H.state.directionalShadow,It.spotLights.value=H.state.spot,It.spotLightShadows.value=H.state.spotShadow,It.rectAreaLights.value=H.state.rectArea,It.ltc_1.value=H.state.rectAreaLTC1,It.ltc_2.value=H.state.rectAreaLTC2,It.pointLights.value=H.state.point,It.pointLightShadows.value=H.state.pointShadow,It.hemisphereLights.value=H.state.hemi,It.sunShadowMatrix.value=H.state.sunShadowMatrix,It.sunShadowCascade.value=H.state.sunShadowCascade,It.directionalShadowMatrix.value=H.state.directionalShadowMatrix,It.spotLightMatrix.value=H.state.spotLightMatrix,It.spotLightMap.value=H.state.spotLightMap,It.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=M.state.lightProbeGridArray.length>0,V.currentProgram=Kt,V.uniformsList=null,Kt}function tc(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=qi.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function ec(b,U){let q=G.get(b);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function mu(b,U){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let q=0,V=b.length;q<V;q++){let H=b[q];if(H.texture!==null&&H.boundingBox.containsPoint(v))return H}return null}function gu(b,U,q,V,H){U.isScene!==!0&&(U=Ft),$.resetTextureUnits();let St=U.fog,Rt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,Mt=rt===null?C.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:te.workingColorSpace,Pt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ut=dt.get(V.envMap||Rt,Pt),$t=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Kt=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),It=!!q.morphAttributes.position,se=!!q.morphAttributes.normal,ye=!!q.morphAttributes.color,de=an;V.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(de=C.toneMapping);let le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ce=le!==void 0?le.length:0,Tt=G.get(V),De=M.state.lights;if(at===!0&&(ct===!0||b!==tt)){let ue=b===tt&&V.id===Z;Nt.setState(V,b,ue)}let ee=!1;V.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==De.state.version||Tt.outputColorSpace!==Mt||H.isBatchedMesh&&Tt.batching===!1||!H.isBatchedMesh&&Tt.batching===!0||H.isBatchedMesh&&Tt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Tt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Tt.instancing===!1||!H.isInstancedMesh&&Tt.instancing===!0||H.isSkinnedMesh&&Tt.skinning===!1||!H.isSkinnedMesh&&Tt.skinning===!0||H.isInstancedMesh&&Tt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Tt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Tt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Tt.instancingMorph===!1&&H.morphTexture!==null||Tt.envMap!==Ut||V.fog===!0&&Tt.fog!==St||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Nt.numPlanes||Tt.numIntersection!==Nt.numIntersection)||Tt.vertexAlphas!==$t||Tt.vertexTangents!==Kt||Tt.morphTargets!==It||Tt.morphNormals!==se||Tt.morphColors!==ye||Tt.toneMapping!==de||Tt.morphTargetsCount!==Ce||!!Tt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,Tt.__version=V.version);let Ze=Tt.currentProgram;ee===!0&&(Ze=or(V,U,H),F&&V.isNodeMaterial&&F.onUpdateProgram(V,Ze,Tt));let hn=!1,Pn=!1,ci=!1,oe=Ze.getUniforms(),_e=Tt.uniforms;if(x.useProgram(Ze.program)&&(hn=!0,Pn=!0,ci=!0),V.id!==Z&&(Z=V.id,Pn=!0),Tt.needsLights){let ue=mu(M.state.lightProbeGridArray,H);Tt.lightProbeGrid!==ue&&(Tt.lightProbeGrid=ue,Pn=!0)}if(hn||tt!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),oe.setValue(I,"projectionMatrix",b.projectionMatrix),oe.setValue(I,"viewMatrix",b.matrixWorldInverse);let Ln=oe.map.cameraPosition;Ln!==void 0&&Ln.setValue(I,mt.setFromMatrixPosition(b.matrixWorld)),E.logarithmicDepthBuffer&&oe.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&oe.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),tt!==b&&(tt=b,Pn=!0,ci=!0)}if(Tt.needsLights&&(De.state.sunShadowMap.length>0&&oe.setValue(I,"sunShadowMap",De.state.sunShadowMap,$),De.state.directionalShadowMap.length>0&&oe.setValue(I,"directionalShadowMap",De.state.directionalShadowMap,$),De.state.spotShadowMap.length>0&&oe.setValue(I,"spotShadowMap",De.state.spotShadowMap,$),De.state.pointShadowMap.length>0&&oe.setValue(I,"pointShadowMap",De.state.pointShadowMap,$)),H.isSkinnedMesh){oe.setOptional(I,H,"bindMatrix"),oe.setOptional(I,H,"bindMatrixInverse");let ue=H.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),oe.setValue(I,"boneTexture",ue.boneTexture,$))}H.isBatchedMesh&&(oe.setOptional(I,H,"batchingTexture"),oe.setValue(I,"batchingTexture",H._matricesTexture,$),oe.setOptional(I,H,"batchingIdTexture"),oe.setValue(I,"batchingIdTexture",H._indirectTexture,$),oe.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&oe.setValue(I,"batchingColorTexture",H._colorsTexture,$));let In=q.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&N.update(H,q,Ze),(Pn||Tt.receiveShadow!==H.receiveShadow)&&(Tt.receiveShadow=H.receiveShadow,oe.setValue(I,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(_e.envMapIntensity.value=U.environmentIntensity),_e.dfgLUT!==void 0&&(_e.dfgLUT.value=x0()),Pn){if(oe.setValue(I,"toneMappingExposure",C.toneMappingExposure),Tt.needsLights&&xu(_e,ci),St&&V.fog===!0&&Dt.refreshFogUniforms(_e,St),Dt.refreshMaterialUniforms(_e,V,W,z,M.state.transmissionRenderTarget[b.id]),Tt.needsLights&&Tt.lightProbeGrid){let ue=Tt.lightProbeGrid;_e.probesSH.value=ue.texture,_e.probesMin.value.copy(ue.boundingBox.min),_e.probesMax.value.copy(ue.boundingBox.max),_e.probesResolution.value.copy(ue.resolution)}qi.upload(I,tc(Tt),_e,$)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(qi.upload(I,tc(Tt),_e,$),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&oe.setValue(I,"center",H.center),oe.setValue(I,"modelViewMatrix",H.modelViewMatrix),oe.setValue(I,"normalMatrix",H.normalMatrix),oe.setValue(I,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){let ue=V.uniformsGroups;for(let Ln=0,hi=ue.length;Ln<hi;Ln++){let ic=ue[Ln];st.update(ic,Ze),st.bind(ic,Ze)}}return Ze}function xu(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function _u(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(b,U,q){let V=G.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=U,G.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let q=G.get(b);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,q=0){rt=b,X=U,Y=q;let V=null,H=!1,St=!1;if(b){let Mt=G.get(b);if(Mt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,Mt.__webglFramebuffer),it.copy(b.viewport),Et.copy(b.scissor),At=b.scissorTest,x.viewport(it),x.scissor(Et),x.setScissorTest(At),Z=-1;return}else if(Mt.__webglFramebuffer===void 0)$.setupRenderTarget(b);else if(Mt.__hasExternalTextures)$.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let $t=b.depthTexture;if(Mt.__boundDepthTexture!==$t){if($t!==null&&G.has($t)&&(b.width!==$t.image.width||b.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(b)}}let Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(St=!0);let Ut=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?V=Ut[U][q]:V=Ut[U],H=!0):b.samples>0&&$.useMultisampledRTT(b)===!1?V=G.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?V=Ut[q]:V=Ut,it.copy(b.viewport),Et.copy(b.scissor),At=b.scissorTest}else it.copy(ut).multiplyScalar(W).floor(),Et.copy(Bt).multiplyScalar(W).floor(),At=Zt;if(q!==0&&(V=k),x.bindFramebuffer(I.FRAMEBUFFER,V)&&x.drawBuffers(b,V),x.viewport(it),x.scissor(Et),x.setScissorTest(At),H){let Mt=G.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,q)}else if(St){let Mt=U;for(let Pt=0;Pt<b.textures.length;Pt++){let Ut=G.get(b.textures[Pt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pt,Ut.__webglTexture,q,Mt)}}else if(b!==null&&q!==0){let Mt=G.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mt.__webglTexture,q)}Z=-1};function nc(b){let U=G.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=E.textureFormatReadable(b.format),U.__typeReadable=E.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,q,V,H,St,Rt,Mt=0){if(!(b&&b.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){x.bindFramebuffer(I.FRAMEBUFFER,Pt);try{let Ut=b.textures[Mt],$t=Ut.format,Kt=Ut.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Mt);let It=nc(Ut);if(It.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&q>=0&&q<=b.height-H&&I.readPixels(U,q,V,H,yt.convert($t),yt.convert(Kt),St)}finally{let Ut=rt!==null?G.get(rt).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,U,q,V,H,St,Rt,Mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt)if(U>=0&&U<=b.width-V&&q>=0&&q<=b.height-H){x.bindFramebuffer(I.FRAMEBUFFER,Pt);let Ut=b.textures[Mt],$t=Ut.format,Kt=Ut.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Mt);let It=nc(Ut);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,se),I.bufferData(I.PIXEL_PACK_BUFFER,St.byteLength,I.STREAM_READ),I.readPixels(U,q,V,H,yt.convert($t),yt.convert(Kt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let ye=rt!==null?G.get(rt).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,ye);let de=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await mh(I,de,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,se),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,St),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(se),I.deleteSync(de),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,q=0){let V=Math.pow(2,-q),H=Math.floor(b.image.width*V),St=Math.floor(b.image.height*V),Rt=U!==null?U.x:0,Mt=U!==null?U.y:0;$.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,Rt,Mt,H,St),x.unbindTexture()},this.copyTextureToTexture=function(b,U,q=null,V=null,H=0,St=0){let Rt,Mt,Pt,Ut,$t,Kt,It,se,ye,de=b.isCompressedTexture?b.mipmaps[St]:b.image;if(q!==null)Rt=q.max.x-q.min.x,Mt=q.max.y-q.min.y,Pt=q.isBox3?q.max.z-q.min.z:1,Ut=q.min.x,$t=q.min.y,Kt=q.isBox3?q.min.z:0;else{let _e=Math.pow(2,-H);Rt=Math.floor(de.width*_e),Mt=Math.floor(de.height*_e),b.isDataArrayTexture?Pt=de.depth:b.isData3DTexture?Pt=Math.floor(de.depth*_e):Pt=1,Ut=0,$t=0,Kt=0}V!==null?(It=V.x,se=V.y,ye=V.z):(It=0,se=0,ye=0);let le=yt.convert(U.format),Ce=yt.convert(U.type),Tt;U.isData3DTexture?($.setTexture3D(U,0),Tt=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),Tt=I.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),Tt=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let De=x.getParameter(I.UNPACK_ROW_LENGTH),ee=x.getParameter(I.UNPACK_IMAGE_HEIGHT),Ze=x.getParameter(I.UNPACK_SKIP_PIXELS),hn=x.getParameter(I.UNPACK_SKIP_ROWS),Pn=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,de.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Ut),x.pixelStorei(I.UNPACK_SKIP_ROWS,$t),x.pixelStorei(I.UNPACK_SKIP_IMAGES,Kt);let ci=b.isDataArrayTexture||b.isData3DTexture,oe=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let _e=G.get(b),In=G.get(U),ue=G.get(_e.__renderTarget),Ln=G.get(In.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,ue.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let hi=0;hi<Pt;hi++)ci&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(b).__webglTexture,H,Kt+hi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(U).__webglTexture,St,ye+hi)),I.blitFramebuffer(Ut,$t,Rt,Mt,It,se,Rt,Mt,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||G.has(b)){let _e=G.get(b),In=G.get(U);x.bindFramebuffer(I.READ_FRAMEBUFFER,P),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,B);for(let ue=0;ue<Pt;ue++)ci?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.__webglTexture,H,Kt+ue):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_e.__webglTexture,H),oe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,In.__webglTexture,St,ye+ue):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,In.__webglTexture,St),H!==0?I.blitFramebuffer(Ut,$t,Rt,Mt,It,se,Rt,Mt,I.COLOR_BUFFER_BIT,I.NEAREST):oe?I.copyTexSubImage3D(Tt,St,It,se,ye+ue,Ut,$t,Rt,Mt):I.copyTexSubImage2D(Tt,St,It,se,Ut,$t,Rt,Mt);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else oe?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Tt,St,It,se,ye,Rt,Mt,Pt,le,Ce,de.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Tt,St,It,se,ye,Rt,Mt,Pt,le,de.data):I.texSubImage3D(Tt,St,It,se,ye,Rt,Mt,Pt,le,Ce,de):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,St,It,se,Rt,Mt,le,Ce,de.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,St,It,se,de.width,de.height,le,de.data):I.texSubImage2D(I.TEXTURE_2D,St,It,se,Rt,Mt,le,Ce,de);x.pixelStorei(I.UNPACK_ROW_LENGTH,De),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ee),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Ze),x.pixelStorei(I.UNPACK_SKIP_ROWS,hn),x.pixelStorei(I.UNPACK_SKIP_IMAGES,Pn),St===0&&U.generateMipmaps&&I.generateMipmap(Tt),x.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&$.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){X=0,Y=0,rt=null,x.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var co=class extends ii{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new _n;t.deleteAttribute("uv");let e=new rn({side:Re}),n=new rn,s=new Hs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new me(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new xs(t,n,6),o=new Te;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new me(t,Zi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new me(t,Zi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new me(t,Zi(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new me(t,Zi(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let h=new me(t,Zi(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let d=new me(t,Zi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Zi(i){return new Fs({color:0,emissive:16777215,emissiveIntensity:i})}var _0={left:-86,right:86,back:-35,front:35},ir=[{id:0,x:-63,side:-1},{id:1,x:-21,side:-1},{id:2,x:21,side:1},{id:3,x:63,side:1}],Gl=[{id:"core",profile:[[25,284],[25,326]],fill:"#24282d",stroke:"#181a1c"},...Array.from({length:4},(i,t)=>({id:"bellows-"+t,profile:[[25,294+t*7],[30,295+t*7],[32,297+t*7],[32,299+t*7],[29,301+t*7],[25,302+t*7]],fill:"rubber",stroke:"#141619"})),{id:"collar",profile:[[29,322],[33,324],[33,326],[24,326]],fill:"silver",stroke:"#59656e"},{id:"ankle-core",profile:[[21,326],[21,346]],fill:"#24282d",stroke:"#181a1c"},...Array.from({length:3},(i,t)=>({id:"ankle-"+t,profile:[[21,328+t*5],[25,329+t*5],[25,331+t*5],[21,333+t*5]],fill:"rubber",stroke:"#141619"})),{id:"mount",profile:[[21,344],[22,345],[22,346]],fill:"#373f46",stroke:"#252c32"}];function y0(i){let t=i.slice().sort((s,r)=>s[0]-r[0]||s[1]-r[1]),e=(s,r,a)=>(r[0]-s[0])*(a[1]-s[1])-(r[1]-s[1])*(a[0]-s[0]),n=s=>{let r=[];for(let a of s){for(;r.length>=2&&e(r.at(-2),r.at(-1),a)<=0;)r.pop();r.push(a)}return r};return[...n(t).slice(0,-1),...n(t.reverse()).slice(0,-1)]}function tu(){return Gl.map(i=>{let t=y0(i.profile.flatMap(([e,n])=>Array.from({length:64},(s,r)=>{let a=r/64*Math.PI*2;return[220+e*Math.cos(a),n+.13*e*Math.sin(a)]})));return`<path data-support="${i.id}" d="M${t.map(e=>e.map(n=>n.toFixed(3)).join(" ")).join("L")}Z" fill="${["silver","rubber"].includes(i.fill)?"url(#"+i.fill+")":i.fill}" stroke="${i.stroke}" stroke-width=".7" stroke-linejoin="round"/>`}).join("")}var Qe=[[-35,354],[35,354],[57,409],[58,418],[52,426],[-52,426],[-58,418],[-57,409]],$i=Qe.map(([i,t],e)=>{let n=Qe[(e+1)%Qe.length];return Math.hypot(n[0]-i,n[1]-t)}),ho=$i.reduce((i,t)=>i+t,0);function v0(i){let t=(i%ho+ho)%ho;for(let e=0;e<Qe.length;e++){if(t<=$i[e]){let[n,s]=Qe[e],r=Qe[(e+1)%Qe.length],a=(r[0]-n)/$i[e],o=(r[1]-s)/$i[e];return{segment:e,z:n+a*t,y:s+o*t,dz:a,dy:o,ny:-a,nz:o}}t-=$i[e]}}function uo(i=0,t=0){let e=[],n=(u,f,h,d,g="#59656e")=>e.push({id:u,points:f,normal:h,fill:d,stroke:g}),s=[[-33,353],[33,353],[54,408],[55,417],[49,423],[-49,423],[-55,417],[-54,408]],r=86;for(let u of[-1,1]){let f="shell-side-"+u;n(f,s.map(([d,g])=>[u*r,g,d]),[u,0,0],"#939da3","#515d64");let h=[[-29,358],[29,358],[49,407],[50,414],[45,419],[-45,419],[-50,414],[-49,407]];n("side-cover-"+u,h.map(([d,g])=>[u*(r+.2),g,d]),[u,0,0],"#7e898e","#c3cccf"),e.at(-1).surface=f,e.at(-1).layer=.001;for(let[d,[g,y,m,p]]of[[0,[0,361,0,379]],[1,[-26,361,-9,380]],[2,[26,361,9,380]],[3,[-35,413,-10,392]],[4,[35,413,10,392]],[5,[0,414,0,394]]]){let w=m-g,T=p-y,v=Math.hypot(w,T),S=-T/v*1.15,M=w/v*1.15;n("side-rib-"+u+"-"+d,[[u*(r+.45),y+M,g+S],[u*(r+.45),p+M,m+S],[u*(r+.45),p-M,m-S],[u*(r+.45),y-M,g-S]],[u,0,0],"#bac4c8","#525e64"),e.at(-1).surface=f,e.at(-1).layer=.002}}for(let u=0;u<s.length;u++){let[f,h]=s[u],d=s[(u+1)%s.length],g=d[0]-f,y=d[1]-h,m=Math.hypot(g,y);n("shell-panel-"+u,[[-r,h,f],[r,h,f],[r,d[1],d[0]],[-r,d[1],d[0]]],[0,-g/m,y/m],["#d4d9da","#bfc7c9","#a5b0b4","#879399","#6d7a82","#879399","#a5b0b4","#bfc7c9"][u])}let{left:a,right:o,back:l,front:c}=_0;n("deck",[[a,346,l],[o,346,l],[o,346,c],[a,346,c]],[0,-1,0],"#d1d7da");for(let[u,f,h,d,g]of[["bridge",325,86,34,2],["plinth",348,78,30,5]]){n(u+"-top",[[-h,f,-d],[h,f,-d],[h,f,d],[-h,f,d]],[0,-1,0],"#dce0df");for(let y of[-1,1])n(u+"-side-"+y,[[y*h,f,-d],[y*h,f,d],[y*h,f+g,d],[y*h,f+g,-d]],[y,0,0],"#8d999f"),n(u+"-end-"+y,[[-h,f,y*d],[h,f,y*d],[h,f+g,y*d],[-h,f+g,y*d]],[0,0,y],"#aab6bb")}for(let{id:u,x:f,side:h}of ir){let d=f-6.5,g=f+6.5;for(let[y,m]of[[d,-1],[g,1]])n("belt-cap-"+u+"-"+m,Qe.map(([p,w])=>[y,w,p]),[m,0,0],"#202629","#263139");for(let y=0;y<Qe.length;y++){let[m,p]=Qe[y],w=Qe[(y+1)%Qe.length],T=w[0]-m,v=w[1]-p,S=$i[y];n("belt-surface-"+u+"-"+y,[[d,p,m],[g,p,m],[g,w[1],w[0]],[d,w[1],w[0]]],[0,-T/S,v/S],"#252c2e","#192124"),e.at(-1).surface="shell-panel-"+y,e.at(-1).layer=.01}for(let y=0;y<38;y++){let m=v0((y/38+i+h*t)*ho),p=2.2,w="cleat-"+u+"-"+y,T=(k,P,B)=>[k,m.y+m.ny*B+P*m.dy*p,m.z+m.nz*B+P*m.dz*p],v=T(d-.1,-1,1),S=T(g+.1,-1,1),M=T(g+.1,1,1),R=T(d-.1,1,1),_=T(d-.1,-1,0),A=T(g+.1,-1,0),C=T(g+.1,1,0),D=T(d-.1,1,0),F=e.length;n(w,[v,S,M,R],[0,m.ny,m.nz],"#566063","#253033"),n(w+"-left",[_,v,R,D],[-1,0,0],"#3c464b","#253033"),n(w+"-right",[A,S,M,C],[1,0,0],"#3c464b","#253033"),n(w+"-leading",[_,A,S,v],[0,-m.dy,-m.dz],"#697276","#253033"),n(w+"-trailing",[D,C,M,R],[0,m.dy,m.dz],"#354147","#253033");for(let k of e.slice(F))k.surface="shell-panel-"+m.segment,k.layer=.02}}return e}function Wl([i,t,e],n){let s=Math.cos(n),r=Math.sin(n),a=-i*r+e*s;return[220+i*s+e*r,t+a*.13-5.2,a-.13*t]}function b0(i,t=0,e=0){let n=[-Math.sin(i),-.13,Math.cos(i)],s=uo(t,e).filter(a=>a.normal.reduce((o,l,c)=>o+l*n[c],0)>1e-8).map(a=>{let o=a.points.map(l=>Wl(l,i));return{...a,points:o,depth:o.reduce((l,c)=>l+c[2],0)/o.length}}),r=new Map(s.map(a=>[a.id,a]));for(let a of s)a.surface&&r.has(a.surface)&&(a.depth=r.get(a.surface).depth+a.layer);return s.sort((a,o)=>a.depth-o.depth)}function ql(i,t=0,e=0){return b0(i,t,e).map(n=>`<polygon data-face="${n.id}" points="${n.points.map(s=>s.slice(0,2).map(r=>r.toFixed(3)).join(",")).join(" ")}" fill="${n.fill}" stroke="${n.stroke}" stroke-width="${n.id.startsWith("cleat-")?.4:.7}" stroke-linejoin="round"/>`).join("")}function eu(){let i=new xe,t=new xe;i.add(t);let e=(j,Q=0,ot=.5)=>new rn({color:j,metalness:Q,roughness:ot}),n=e(10857904,.68,.4),s=e(14014940,.82,.25),r=e(1448732,.2,.4),a=e(3159606,.06,.65),o=e(11012367,.3,.28),l=new zs({color:14149615,metalness:.08,roughness:.12,transparent:!0,opacity:.19,side:ke,depthWrite:!1,clearcoat:1}),c=new rn({color:11954725,emissive:16753472,emissiveIntensity:.35,roughness:.25}),u=[],f=[],h=[],d=(j,Q,ot,z=0,W=0,lt=0)=>{let Ct=new me(Q,ot);return Ct.position.set(z,W,lt),j.add(Ct),Ct},g=(j,Q,ot,z,W,lt=0,Ct=0,ut=0)=>d(j,new _n(Q,ot,z),W,lt,Ct,ut),y=(j,Q,ot,z,W,lt=0,Ct=0,ut=0)=>d(j,new vs(Q,ot,z,48),W,lt,Ct,ut),m=(j,Q,ot,z=0,W=0,lt=0)=>d(j,new Us(Q,40,24),ot,z,W,lt),p=(j,Q,ot,z,W=0,lt=0,Ct=0)=>{let ut=d(j,new Ds(Q,ot,12,56),z,lt,W,Ct);return ut.rotation.x=Math.PI/2,ut},w=(j,Q,ot)=>d(j,new Is(Q.map(([z,W])=>new ft(z,W)),64),ot),T=new xe;T.name="rigid-chassis",i.add(T);let v=new Map,S=new Map,M=j=>{let Q=[],ot=([z,W,lt])=>[z*.0085,(423-W)*.0085+.03,lt*.0085];for(let z=1;z<j.points.length-1;z++)Q.push(...ot(j.points[0]),...ot(j.points[z]),...ot(j.points[z+1]));return new Float32Array(Q)},R=uo();for(let j of R.filter(Q=>!Q.id.startsWith("cleat-"))){let Q=new be;if(Q.setAttribute("position",new Le(M(j),3)),Q.computeVertexNormals(),!S.has(j.fill)){let z=e(j.fill,.5,.4);z.side=ke,S.set(j.fill,z)}let ot=d(T,Q,S.get(j.fill));ot.name=j.id,v.set(j.id,ot)}let _=(j,Q)=>new Float32Array(j.filter(ot=>ot.id.startsWith("cleat-"+Q+"-")).flatMap(ot=>Array.from(M(ot))));for(let j of ir){let Q=new be;Q.setAttribute("position",new Le(_(R,j.id),3)),Q.computeVertexNormals();let ot=e("#505a5e",.25,.65);ot.side=ke;let z=d(T,Q,ot);z.name="cleat-"+j.id+"-mesh",v.set(z.name,z)}let A=(j,Q=0)=>{let ot=uo(j,Q);for(let z of ir){let W=v.get("cleat-"+z.id+"-mesh").geometry;W.attributes.position.array.set(_(ot,z.id)),W.attributes.position.needsUpdate=!0,W.computeVertexNormals(),W.computeBoundingSphere()}};for(let j of[-1,1])f.push({side:j,cleats:ir.filter(Q=>Q.side===j).map(Q=>v.get("cleat-"+Q.id+"-mesh"))});let C=new xe;C.name="fixed-body-supports",i.add(C);for(let j of[-1,1])for(let Q of Gl){let ot=[[0,Q.profile[0][1]],...Q.profile,[0,Q.profile.at(-1)[1]]],z=Q.fill==="silver"?s:Q.fill==="rubber"?a:r,W=w(C,ot.slice().reverse().map(([lt,Ct])=>[lt*.0085,(423-Ct)*.0085+.03]),z);W.position.set(j*34*.0085,0,0*.0085),W.name="support-"+j+"-"+Q.id}A(0);for(let j=0;j<5;j++)p(i,.545,.053,a,1.42-j*.068).scale.set(1.08,.94,1);y(i,.56,.56,.1,n,0,1.545),p(i,.58,.022,s,1.59),p(i,.58,.018,s,1.49),w(t,[[0,1.62],[.46,1.62],[.56,1.65],[.65,1.73],[.7,1.84],[.7,2.04],[.7,2.3],[.64,2.43],[.51,2.53],[.37,2.56],[0,2.56]],n),p(t,.7,.018,s,1.89),p(t,.668,.012,r,2.38),g(t,.5,.3,.044,s,0,2.4,.6),g(t,.455,.267,.052,r,0,2.4,.62);let D=g(t,.425,.24,.02,c,0,2.4,.654);D.name="upper-speech-glass";for(let j=0;j<4;j++)g(t,.43,.015,.025,s,0,2.304+j*.063,.67);g(t,.43,.4,.045,s,0,2.058,.688),g(t,.382,.36,.02,r,0,2.058,.717);let F=(j,Q,ot,z=.026)=>{let W=new rn({color:ot,emissive:ot,emissiveIntensity:.35,roughness:.25});u.push(W);let lt=m(t,z,W,j,Q,.74);lt.scale.z=.45};F(-.102,2.175,16765083,.049),F(.102,2.175,14740185,.049);for(let j=0;j<3;j++)for(let Q=0;Q<5;Q++){let ot=[5875816,15255123,16048541,14175570,7384512][Q];g(t,.047,.03,.015,e(ot,.2,.3),-.13+Q*.065,2.08-j*.036,.745)}for(let j=0;j<2;j++)for(let Q=0;Q<6;Q++)F(-.143+Q*.057,1.977-j*.043,[14963990,16760354,3313092][(j+Q)%3],.017);for(let j of[-1,1]){g(t,.19,.13,.025,r,j*.4,1.76,.535);for(let ot=0;ot<8;ot++)g(t,.011,.13,.028,s,j*.4-.08+ot*.023,1.76,.551);let Q=m(t,.041,r,j*.405,1.982,.58);Q.scale.z=.44,g(t,.043,.008,.04,s,j*.405,1.988,.605)}let k=new xe;k.position.y=2.588,t.add(k);let P=new xe;P.position.y=-2.588,k.add(P),y(P,.34,.41,.08,r,0,2.588,0);for(let j=0;j<56;j++){let Q=j/56*Math.PI*2,ot=new Ui([new L(Math.sin(Q)*.31,2.6,Math.cos(Q)*.31),new L(Math.sin(Q)*.48,2.7,Math.cos(Q)*.48),new L(Math.sin(Q)*.43,2.78,Math.cos(Q)*.43),new L(Math.sin(Q)*.31,2.85,Math.cos(Q)*.31)]);d(P,new Ns(ot,12,.009,5,!1),s)}y(P,.32,.32,.042,r,0,2.863,0),p(P,.324,.009,s,2.88);for(let j of[-1,1]){let Q=y(P,.02,.02,.2,r,j*.37,2.88,0);Q.rotation.z=j*1.1,m(P,.035,r,j*.46,2.94,0),y(P,.012,.012,.11,s,j*.46,3,0);let ot=m(P,.075,j<0?e(12563027,.5,.4):o,j*.46,3.068,0);ot.scale.set(j<0?.45:1,j<0?1:.45,.15),ot.rotation.y=j*.4}let B=new xe;B.position.y=2.87,t.add(B);let X=new xe;X.position.y=2.88,t.add(X),y(X,.089,.096,.32,r,0,.16,0);for(let j=0;j<10;j++)p(X,.092,.012,a,.018+j*.031);let Y=new Ne(new L(0,1,0),-2.588),rt=new Ne(new L(0,1,0),-2.88),Z=new Ne(new L(0,-1,0),3.11);for(let[j,Q]of[[k,[Y]],[X,[rt,Z]]]){let ot=new Map;j.traverse(z=>{if(z.isMesh){if(!ot.has(z.material)){let W=z.material.clone();W.clippingPlanes=Q,ot.set(z.material,W)}z.material=ot.get(z.material)}})}let tt=j=>{let Q=Math.max(-.58,Math.min(0,j)),ot=-Q/.58;B.position.set(0,2.87-.23*ot,0),B.rotation.set(0,0,0),k.position.y=2.588,k.visible=!0,X.position.y=2.88-.23*ot,X.visible=ot<.999,Z.constant=3.11-.23*ot};m(B,.5,l,0,.47,0).scale.set(1,.46,.84),p(B,.45,.009,s,.392);let Et=new xe;Et.position.y=.49,B.add(Et),y(Et,.095,.14,.12,r,0,-.03,0);for(let j of[-1,1]){let Q=g(Et,.26,.047,.018,r,j*.19,-.005,0);Q.rotation.z=j*-.2;for(let ot=0;ot<7;ot++)m(Et,.009,e(10254658,.7,.3),j*(.08+ot*.035),-.005,.016);m(Et,.025,e(16301092,.4,.23),j*.17,.047,0)}y(B,.17,.17,.075,n,0,.585,0),p(B,.17,.012,s,.621);function At(j,Q,ot){y(j,ot*.84,ot*.84,Q,r,0,-Q/2);for(let z=0;z<9;z++)p(j,ot,.027,a,-.03-z*(Q-.06)/8)}for(let j of[-1,1]){let Q=new xe;Q.position.set(j*.64,2.185,0),t.add(Q),m(Q,.218,n).scale.set(1,.9,.95);let z=new xe;Q.add(z),At(z,.43,.16);let W=new xe;W.position.y=-.43,z.add(W),m(W,.15,a),At(W,.31,.148),y(W,.2,.2,.048,s,0,-.335),y(W,.163,.163,.057,r,0,-.36);let lt=new xe;lt.position.y=-.386,W.add(lt);let Ct=[];for(let ut of[-1,1]){let Bt=new xe;Bt.position.x=ut*.019,lt.add(Bt);let Zt=new Di;Zt.moveTo(ut*.018,0),Zt.lineTo(ut*.14,-.015),Zt.quadraticCurveTo(ut*.195,-.03,ut*.195,-.12),Zt.quadraticCurveTo(ut*.195,-.225,ut*.06,-.232),Zt.lineTo(ut*.06,-.168),Zt.quadraticCurveTo(ut*.127,-.163,ut*.13,-.113),Zt.lineTo(ut*.13,-.075),Zt.lineTo(ut*.018,-.07),Zt.closePath();let nt=d(Bt,new Ps(Zt,{depth:.07,bevelEnabled:!0,bevelSize:.01,bevelThickness:.006,bevelSegments:2,steps:1}),o,0,0,-.035);Ct.push(Bt)}h.push({shoulder:Q,upper:z,elbow:W,hand:lt,fingers:Ct,side:j})}return{root:i,torso:t,chassis:T,supports:C,head:B,neck:X,collar:k,updateHead:tt,radar:Et,arms:h,tracks:f,updateTracks:A,mouthMat:c,indicators:u,headRest:2.87}}var nu=new WeakMap,iu="M176 134Q144 136 138 156v57q0 26 43 34h78q43-8 43-34v-57q-6-20-38-22z";function su(){let i=(n,s)=>Array.from({length:n},(r,a)=>s(a)).join(""),t=n=>`<g class="compat-leg" data-side="${n}" transform="translate(${n*34} ${0*.13-5.2})">${tu()}</g>`,e=n=>`<g class="compat-arm" data-side="${n}" transform="translate(${220+n*76} 177)"><ellipse rx="25" ry="27" fill="url(#silver)" stroke="#cdd3d4" stroke-width="2"/><ellipse rx="20" ry="23" fill="#202629" stroke="#646e72" stroke-width="2"/><g class="compat-shoulder"><rect x="-18" y="-1" width="36" height="47" rx="16" fill="url(#rubber)"/>${i(10,s=>`<ellipse cx="0" cy="${s*4}" rx="20" ry="5" fill="url(#rubber)" stroke="#131819" stroke-width=".7"/>`)}<g class="compat-elbow" transform="translate(0 41)"><rect x="-16" y="-2" width="32" height="36" rx="14" fill="url(#rubber)"/>${i(8,s=>`<ellipse cy="${s*4}" rx="18" ry="5" fill="url(#rubber)" stroke="#14191a" stroke-width=".7"/>`)}<ellipse cy="30" rx="23" ry="8" fill="url(#silver)" stroke="#d5d8d6" stroke-width="1.5"/><ellipse cy="34" rx="23" ry="8" fill="url(#silver)" stroke="#414b50"/><ellipse cy="36" rx="17" ry="6" fill="#252a2b"/><g class="compat-claw" transform="translate(0 37)"><path d="M-2 1h-10q-11 2-11 14t16 17v-9q-7-2-7-9t12-6zM2 1h10q11 2 11 14t-16 17v-9q7-2 7-9t-12-6z" fill="url(#claw)" stroke="#620b0e" stroke-width="1.3"/><path d="M-12 4q-9 3-8 13M12 4q9 3 8 13" fill="none" stroke="#ee6559" stroke-width="1" opacity=".7"/></g></g></g></g>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 440" role="img" aria-label="Articulated classic television-style B-9 robot">
  <defs>
    <clipPath id="body-panel-clip" clipPathUnits="userSpaceOnUse"><path d="${iu}"/></clipPath>
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
  <g class="compat-chassis">${ql(0)}</g><g class="compat-legs">${t(-1)}${t(1)}</g>
  <g class="compat-waist"><ellipse cx="220" cy="250" rx="67" ry="9" fill="url(#silver)" stroke="#d6dcd9"/><path d="M154 246v10q66 12 132 0v-10" fill="url(#silver)" stroke="#65747b"/>${i(5,n=>`<rect x="151" y="${253+n*8}" width="138" height="13" rx="7" fill="url(#rubber)" stroke="#171c1d" stroke-width="1"/>`)}</g>
  <g class="compat-arms-back"></g>
  <g class="compat-body">
    <path class="compat-body-outline" d="${iu}" fill="url(#silver)" stroke="#747e85" stroke-width="1.5"/>
    <path d="M139 154q81-12 162 0M139 222q81 10 162 0" fill="none" stroke="#59676d" stroke-width="2"/>
    <path d="M142 151q78-12 156 0M140 224q80 10 160 0" fill="none" stroke="#e0e4e2" stroke-width="1"/>
    <path d="M168 244q52 9 104 0" fill="none" stroke="#dce2df" stroke-width="2"/>
    <g class="compat-body-panels" clip-path="url(#body-panel-clip)">
    <g class="compat-front-panel">
    <path d="M187 138h66v37h-66z" fill="#454e50" stroke="#e0e3df" stroke-width="2.5"/>
    <path d="M191 142h58v28h-58z" fill="#723b20"/>
    <path class="compat-mouth compat-speech-glass" d="M191 142h58v28h-58z" fill="url(#amber)" opacity=".45"/>
    ${i(4,n=>`<path d="M191 ${145+n*7}h58" stroke="#f2dfb5" stroke-width="2"/><path d="M191 ${147+n*7}h58" stroke="#b66a33" stroke-width=".7"/>`)}
    <path d="M193 143h54" stroke="#fff1ca" stroke-opacity=".8" stroke-width="1"/>
    <rect class="compat-console" x="194" y="176" width="52" height="47" rx="1" fill="#343b3c" stroke="#d7dcda" stroke-width="1.8"/>
    <circle cx="207" cy="185" r="6.2" fill="#eff0db" stroke="#a0a8a5"/><circle cx="233" cy="185" r="6.2" fill="#f3f4df" stroke="#a0a8a5"/>
    ${i(15,n=>`<rect x="${197+n%5*9.5}" y="${195+Math.floor(n/5)*6.4}" width="7.4" height="5.2" rx=".5" fill="${["#59a868","#e8c653","#f4e19d","#d84d52","#70adc0"][n%5]}" stroke="#c5ceba" stroke-width=".6"/>`)}
    ${i(12,n=>`<circle class="compat-lamp" cx="${200+n%6*8}" cy="${217+Math.floor(n/6)*5.3}" r="2.25" fill="${["#d893d2","#a39add","#83bcb2","#ad91bd","#e5d6ae","#718f9a"][n%6]}" stroke="#a5b4af" stroke-width=".4"/>`)}
    ${i(2,n=>{let s=n?257:151;return`<path d="M${s} 226l25 2-5 14-18-6z" fill="#606c70" stroke="#c3cccb"/>${i(8,r=>`<path d="M${s+2+r*2.8} 228l${n?-3:3} 10" stroke="#cad1cd" stroke-width="1"/>`)}`})}
    <ellipse cx="178" cy="217" rx="5" ry="4" fill="#262b30" stroke="#e0e5e8"/><path d="M173 217h10" stroke="#f2f4f5"/>
    <ellipse cx="262" cy="217" rx="5" ry="4" fill="#747b80" stroke="#cdd5da"/>
    </g>
    <g class="compat-rear-panel" opacity="0"><path d="M195 146h50v88h-50z" fill="url(#silver)" stroke="#69737b" stroke-width="1.5"/><path d="M199 152h42v28h-42z" fill="#30383e"/>${i(9,n=>`<path d="M201 ${155+n*2.7}h38" stroke="#aeb8c0" stroke-width="1.2"/>`)}<rect x="209" y="208" width="22" height="12" rx="2" fill="#1d252a" stroke="#c3cbd0"/><circle cx="220" cy="214" r="3.5" fill="#8e979c"/><circle cx="199" cy="186" r="1.6" fill="#363e45"/><circle cx="241" cy="186" r="1.6" fill="#363e45"/></g>
    </g>
  </g>
  <g class="compat-arms-front">${e(-1)}${e(1)}</g>
  <g class="compat-head-pocket" clip-path="url(#head-frame-clip)">
  <g class="compat-collar"><ellipse cx="220" cy="134" rx="42" ry="7" fill="#24292d"/><path d="M187 107q-34 15-12 26q45 14 90 0q22-11-12-26z" fill="url(#stem)"/>
    ${i(39,n=>{let s=174+n*2.42;return`<path d="M${220+(s-220)*.69} 107Q${s} 118 ${s} 128l${(220-s)*.12} 6" fill="none" stroke="#cbd1d5" stroke-width="1.25"/>`})}
    <ellipse cx="220" cy="108" rx="34" ry="5" fill="url(#silver)" stroke="#cbd0cc"/><g class="compat-ears"><path d="M186 108l-14-4v-11m82 15 14-4V91" fill="none" stroke="#343a40" stroke-width="3"/><ellipse cx="172" cy="91" rx="4" ry="9" fill="#bfb253" stroke="#6c704c"/><ellipse cx="268" cy="91" rx="8" ry="4" fill="url(#claw)"/></g>
  </g>
  <g clip-path="url(#head-stem-clip)"><g class="compat-neck" transform="translate(220 108)"><rect x="-13" y="-44" width="26" height="44" rx="3" fill="url(#stem)"/>${i(10,n=>`<ellipse cy="${-41+n*4}" rx="14" ry="1.8" fill="url(#stem)" stroke="#858d93" stroke-opacity=".55" stroke-width=".6"/>`)}</g></g>
  </g>
  <g class="compat-head">
    <ellipse cx="220" cy="50" rx="55" ry="26" fill="url(#glass)" stroke="#94a5b1" stroke-width="1.3"/>
    <ellipse cx="220" cy="54" rx="43" ry="12" fill="#66716e" fill-opacity=".62" stroke="#bac7c8" stroke-width="1"/>
    ${i(8,n=>{let s=n*Math.PI/4;return`<circle cx="${220+35*Math.cos(s)}" cy="${54+8*Math.sin(s)}" r="1.6" fill="#d3d7c6"/>`})}
    <g class="compat-radar"><path d="M179 44q41-8 82 0v9q-41 9-82 0z" fill="#313a38" stroke="#85918e"/><ellipse cx="182" cy="47" rx="3.7" ry="6" fill="#d9d8be"/><ellipse cx="258" cy="47" rx="3.7" ry="6" fill="#d9d8be"/><path d="M190 43h60" stroke="#a3aba1" stroke-width="1.3"/></g>
    <path d="M207 59l3-24h20l3 24z" fill="url(#stem)"/>
    <path d="M202 33h36v9h-36z" fill="url(#silver)" stroke="#adb8b3"/>
    <ellipse cx="220" cy="33" rx="18" ry="4" fill="#c4c9be" stroke="#818d85"/><circle cx="219" cy="38" r="3.1" fill="#eeebcd"/>
    <ellipse cx="220" cy="50" rx="55" ry="26" fill="url(#glass)" stroke="#cbd6dd" stroke-width=".8"/>
    <path d="M178 46q7-17 30-19m-30 28q2 4 6 7M252 32q11 5 13 14" stroke="#fff" stroke-opacity=".6" stroke-width="3" fill="none" stroke-linecap="round"/>
    <ellipse cx="220" cy="64" rx="43" ry="8" fill="none" stroke="#dce4e8" stroke-width=".9"/>
  </g></svg>`}function ru(i,{t=0,phase:e=0,bob:n=0,warning:s=!1,wave:r=!1,animate:a=!0,yaw:o=0,turn:l=0}){let c=(s||r)&&a,u=Math.cos(o),f=Math.sin(o),h=Math.abs(f),d=Math.abs(u),g=i.querySelector(".compat-front-panel"),y=i.querySelector(".compat-rear-panel");g.setAttribute("transform",`translate(${220+74*f} 0) scale(${Math.max(.001,u)} 1) translate(-220 0)`),g.setAttribute("opacity",u>0?Math.min(1,u*5):0),y.setAttribute("transform",`translate(${220-74*f} 0) scale(${Math.max(.001,-u)} 1) translate(-220 0)`),y.setAttribute("opacity",u<0?Math.min(1,-u*5):0),i.querySelector(".compat-ears").setAttribute("transform",`translate(220 0) scale(${u} 1) translate(-220 0)`),i.querySelector(".compat-radar").setAttribute("transform",`translate(220 0) scale(${Math.max(.15,d)} 1) translate(-220 0)`);let m=[...i.querySelectorAll(".compat-leg")].sort((R,_)=>Number(_.dataset.side)*f-Number(R.dataset.side)*f);for(let R of m){let _=Number(R.dataset.side),A=Wl([_*34,0,0],o);R.setAttribute("transform",`translate(${A[0]-220} ${A[1]})`),i.querySelector(".compat-legs").append(R)}let p=[o.toFixed(5),e.toFixed(5),l.toFixed(5)].join(",");nu.get(i)!==p&&(i.querySelector(".compat-chassis").innerHTML=ql(o,e,l),nu.set(i,p));let w=Math.max(0,Math.min(1,-n/.58)),T=32*w,v=i.querySelector(".compat-collar"),S=i.querySelector(".compat-neck");v.setAttribute("transform","translate(0 0)"),v.setAttribute("visibility","visible"),S.setAttribute("transform",`translate(220 ${108+T})`),S.setAttribute("visibility",w>=.999?"hidden":"visible");let M=i.querySelector(".compat-stem-window");M.setAttribute("y",76+T),M.setAttribute("height",32-T),i.querySelector(".compat-head").setAttribute("transform",`translate(0 ${T})`),i.querySelector("#tracks").setAttribute("patternTransform",`translate(0 ${e*500%10})`),i.querySelector("#side-tracks").setAttribute("patternTransform",`translate(${e*500%10} 0)`);for(let R of i.querySelectorAll(".compat-arm")){let _=Number(R.dataset.side),A=-_*f,C=i.querySelector(A<-.1?".compat-arms-back":".compat-arms-front");R.parentNode!==C&&C.append(R),R.setAttribute("transform",`translate(${220+_*76*u} ${177+A*76*.13})`);let D=-_*u*(c?57+21*Math.sin(t*5+_):28)-f*(c?38:12),F=-_*u*(c?22+18*Math.sin(t*6+_):-10);R.querySelector(".compat-shoulder").setAttribute("transform",`rotate(${D})`),R.querySelector(".compat-elbow").setAttribute("transform",`translate(0 41) rotate(${F})`),R.querySelector(".compat-claw").setAttribute("transform",`translate(0 37) rotate(${c?12*Math.sin(t*7+_):0})`)}i.querySelector(".compat-mouth").setAttribute("opacity",s&&a?.45+.55*Math.abs(Math.sin(t*11)):.45)}var au="data:audio/wave;base64,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O1Ku79FzOixMgKrJnzsyc6iliH6DbVp0h4advMugXFOJqph6XkEnSbT37JJPOTtZk8rHhlFCQlif7u+/VBYzhr+9p2wkGkSMysGAVkRCY4+0ybWXiWRUfbTBn2EuKTRCiOXvv3lBJkF2tercjjsQGl2+9N+TVDpctu/Pi2BEPVWEqpBRPlVqdo+70KRydYidvsmnazszUHJxdZu/vqBvTGSKlKqtZx8laLTRx6BdMDl9yuO+hV5UV1dicGlnaGBefaCtpndMabDc4sWPXUhRY2lba6fBpZuYc1hfYGuQm3xsjK6agXx1dIihsq+Ne4iHbk5EX4KSlYZucn5ycYJ8eJq6rpBwXF1rgpSNalVskpSUnIxoVFdohIxpQ1SCkYmRnqakhXKHjndxd3NpZH2jooRvVlWBmIyVmoB2eoSKdmqOp4x1d32FjJeeiniDgnqHfWFfZ1hgk7apiniDmpBydIh9Yml8h42QkoNubn2QkXNTYY2ein6GinFhgaOfiYeKfW5zkKGCcYqOd3B0e4WNe2h0i4dxeI2Ph3dueYuVlYd6fnlviqeTcGFsgIZ4gpJ2U2OEiHx3foiIfH2QnYtrZIWXfoKkpHlZXXeGe3J0dYCRiHNziZ2Peoqkl4SGjpGBbYCaloZ4c3t6bnuXg2hxgIyQfXODiYKMmJiPaVGW2qNYbXlnaVNToMJyM0mOupZ6kZ+MXEmMzq6Dcl13i2h8p3hJTmaIhFpae3x0gpCgnX6DoZdycoialndjTSZe1uhdWqtvPVZ+yPKRIjmdy6Ccp4ZtaVif7LZQU1VbhoCBjlItVpKummppk6Oaq7aljGRXeJB6YGFnYGJ1jHEwVtHxqoC0cR87jcDIliwWXrGNi7d+V4OTse3Yck5RWXmGinU3JUBfmreShpSVnsPl0Z1vW2+EdWpqV0lXhKKLSiGD8eZwhrRAOZrIxL1aDiSLsYGbn2xffI7E7KY3L1dqgXRQRy8eRIi/sXBchLvX2MSphW9xhH1nTUZedHJ3jZ2APoD19IdqsF5QssWcrHkQHIfQin2cYk6mx8LWojI0gpCLejwjLz9ppL+jbVuOwtPJrYJsYVxmbl5IOUdncGuDsbR8Plja8ag+i5ZQfqJ8cmotG3HVtHuVdoPL1b3InERIeIOEXyckSl+JvreFfZ+60eXEgXJ0ZHR4VTs7TXmYlIqKob3Ckk9Vzu2NLIrEVTlzcVV3XCJo0q5UksiMfbevnZxVJF+iYSYzRk1ehqK4yql6o8y0lIRwbHJgSFlpWVt0fHqVqaWsu5pUJWPk62AuoqIuZKxsZn0wK53xnWasmlWY3c+tdCEphqlQLzsuNnOxzsubfZi8tqaWdl9ZXWp0a0xCYYmWmpucoKqln5VUMp7jgT+htkNTnXJgnHYuctnRfpicap7fuoSARi58qmQ4NzhXjrG2oJKVpLi2kXluZGp0cmNIOk53jYR+g4OOoaqpjV8lNp3PZ0OimzRgqXFdlGw5iea0U4Kfi9HwnmJ+WkePpkkzSk19vq6Sn6KWsN3CZGSMdF91fl1GWnKMppBtg6atnZGXlHZELI/umyh+12I1fIVvnHEjaNa0PGemjrfJfW2RYThsh0M8UE1wqH1nocCWo9K5d25uX3CEW0BYbG6Jopt7cYmrtZR1hKmaTxtj2cJBaMNkG2jCn3BdL1TK63dOpsOWp8STY11GTYqQRB1BhZF5m556krKksq5vQVeCfF1ZWmJ2jJGOfHiLrbuUZ3myt2wlPLn3hTidrzJTx7xTWF9BmPS6SovSl5rTo2dqWDtelWIgLXCVnqWSgqC8trmwe1BRcYd8UztQgYh2gpF0ZI2mjHt1eqqvWBVNyORfO5ySSH22gF1sTFXC8IpKlsOyuKhmUnBqWoaSPh9ZmqOjl3J5rLmpsZNPTXydjWJIYIyXi4uHdGh8q7eKVVSLw7BoLTqw7HU0n7A0Yb1xOnJwQZXrnT2D0Kqjr19AgZFTZpJJG1KhqZt9WWKq2K5zbXqRpZZwZm96i5uHZ1hbdpeYbFFpjJGvx6BTI2/hyEFZt2pVr5M2UHVEeOPOSE682b2wa0R0nHNqhlciOoKvpWxAWavUrIV9gJ2vkoV8WlWIrIRGQGKHoY5hZoKGjbDTunY9NJ33myN1y2ZVkW8+X3VTiuusQYTpx4KAbnChl0lFc2REb6eLXEpmpNW/dFyIubmMc3RpYXuXg045WIuiiFpIZ5ixoY+gmmtBQ7j1giCE1WFomEwqb5Fmo+2PNpDttoaIXGqtl0dakWpKgKBtXnB1k76gW2Glya+BaWSAno54b1dUe5OGbFRch6WWdICmoHg8Q77lWiifzFZWjFVHioJKjduGPqHklXSSdHm4m0BZlmlPjI1GVouHjKyNY4TDxJB2e4eWnoZoWF14joNrVlF0nZqBgpeYkIlOW9LWREjJtzlmmFFRjXJMm9d2Q6rceWSVgYixeDRmpnJNc3dNYId4fKCQaH7Eyo5qeZuqmHdpcoWJd2hwb2Byi4RzfZinnYNcP5brkDKKzmBVn2wsW5VpeMWSQYnblm6ejnKanF9ii3JVfYNKU4aEeIF1co2tpId9gI6ilHJqb32Og2NfaHKEh3x0fZGioo52WVCu74EwjMBhe6lRLX66cn2ubV6y0YhyhW6AtpdHV4x7foxaSoqWcXJ0bYiprIZuiqGYkoZrb4yPdWNgYXSGdGJsfoGQoIZzg35bas/QQD2wxGhsYjtww6VZbKSekbKaXm+jk3iKgVtokZB7dW1gb4mGbGmDnpN6fJillYd0aYSgiHBran2TgmhqdXmEi35xeYmEdXdbU7HKTE/DsEZuil6Nu3hNgLKWdoh9X4awgHCdfV6fuHFphm52pIJSZ4x+gqKLZ4WlmIuBdoGYi3F4iIiDgnZwfIJwZnaFhIlzVnChj154waheiKJsgbF8RXSofm6CZ1OAonlsgHZ5pJ5raHd6mqdvUmp3fpqHWl+GmpaMdnSQn4+GgoWQjX6AhIF7dXl8dG93hXx1e3l2k5x2cnx2obtzYZ+ngYBvWGiRjVxXgIV8j3tYhrGNh5JsbJuadnBtdIiGc25sdYSGfH2Pk4yTmIyKj5KKdnGHloRhY4GSjHxrZ4KdlIFxb4isqoNqcn2Fn51uaoKCgYx7YWR5joyDgX52hI59e4eHiYBrdIh3d4Z5b4CEdXR2c3aBhoCDkImAjJOHe3x+dnN5eHN3eoGKhHt8hY2MhoWFiIiIem17kYpyXmSUqYV4goCKloJ0enyIlIBzfXx1fHt6g4iDc3eKgXyQgnCMkXKBlHNng4x9fH50eo2Ed4WPjIN2eYyOg3hvfJKLdGRsg4yBdHKAlZODfYODj5uEaG6Oo5WEhICGn5BpbYCAh417bnODiH12fIWJhnt9gH6Fhn2Ggm9venBmcYCBfHyAiZKHd4ablnxxfYV9em5neoZxaXR4eIWIe4GQjIeOiXZ4i4h4dnZrdpaahoeSkZWbgG6Bk5CEdWt3jo56dHuHlZWBe4aCiJKAc4aHc3d+cnR+fnd7g3l4jJB8fIeBdXp2b4CMdHWMg3N7enB7h3psbXmJiXpydH6IhoiEdXiCfIqmlXuPnY2JfmNrhYt+bnOAg4uMenyTnZOHdXeLkIyAanWPhHZ1amuBiIOCgYSKjI6Oi4eFi4d6eX6Gh318gX6Cgnh2eXd6fHyCgnyBgoGBfnJsfYqBd3d0epShjISRkIKIgmdkdnmBhHd2iJSHeXyHjZCFdHyKhYiFc3aFgHdxcnyGg3x6fYiMg3qAh4eHhoOBgn56enx9fnt8gH56dXd8dneGiHp5e3iAhnp1fIKCh4mGhIiKhoWNj4aEioR+fHV2fICFhn59gYWJh4KCh4yHfH6GhIGFgn2CfHR2fIGDgX6Bh4WAgIOBgomHfXyAhIOAfHN1fn18enp8gHx6eHd5e3yBhXt1gIaDg4SGioqIhIKEg4B9fYSNj4iEgX6Dg3ZsdHt+hYJ7gYmJiImIiImHgn17gX58gYB9fnlvc319fYKCgoqPg36GhYKGhn1+hYJ6gYV5dXl4eX14b3V8fYB8e4KEgn2CiIWCg4SDhIZ+foaIhoWBgIKCfXyBg4SFhYOCg4OAe3t+gIOEgYGJioWDhYWLjIaBgYKCfX5+fH5+eHV5fH2BhIaEgoWFg4GBgoJ+e3t7eXh3d3x7dXJ0eoOBgIB+hIeGhYWEh4iDgoaBgYSAeHyDgoCDgnx+goaJh4OBg4KDg4iHgX6CgoB7dHiEgXyBfnyChX5+hIaJi4h+fH6AfX18e3x+eXZ3e3p9gYGAgX18fYCBhIeDgIKEg4SFgX6Bg4J9fH6Ag4WBh4yIg4N+fH6GiImIfXuCgnyBhYN7eHqBiIeAfYGCgoSEgoCCfXp9h4aCfHh1eHl2dHN3en18hIyPjISAgoaKiIB7fHp3d3R2fX56enp6fIOFg4aMi4eJiYSHioN+goCAfXx4eYKDgoCAhIWCg4OCh4uHhoWDgoOBfoB+fX2Bgn16e3t8gH18gIKAgoaEg4WDgIF5eX19e3p5eHN0fIaOjoJ9fnp2en6DiYR8e4CHi4yJhoeFhICBgYKDfnVxeX2AgoSEhoWFiZGSjIqJhYJ+end6enl4enl4eXp+hIOBhoeGiYeFg4ODgHt6d3R3e3l4foCChYOBgYWFgn56d3d6d3h3dXV9g4SFiYqLioWFio2JhIN+fn15dXqAfX1+hIqOjIuKgnh2dHqEiIiGg4GBfHl+iYuJg3t3dXJzdHuChYJ9enx8e4OJio2MhYCBfXp2cnN0dnNwcHNyeH6Ch46Qjo2MhYaIhIKCfn18eXd3eoCGi5CSjo2MiIeHhYCBg4F+e3d2d3h8g4iMjYyJiImIhYSGhYWGgXt2dnR5fHt9hYOAgISDgIKCfnt+gHx4eXt8foKFgn6BhIN+fH2CgHt5eHZ4dnN4hIaIi46OjYeBgIJ+e31+eXZ4d3V2eoCGi4+RkI+Nh36AgHl4fYF+ent5eHh5eXuChIKEiIeDgYN9dHx8d3l3eHp+gIKAfoGFgoWHhYKBgoB+gIGBfH56gISEh4qLiYeHgYGHiImJhoiFgoKDgH5+foSFhIGAenh7end8fX6EhoOFhICBe3uAhYR3cXeFgG1senp0e358dnyDgIKHi4SGi4yDfoGCenh3dnl9dXN3fYKIhoKChYmIhICEhXZ1h4aEgn14dnyBh4qPl5OMkI59foWAhoiGjYqNjYV9foWFiIuKkIt+gHt1dnR0dXp4gH17gIWBhYuHhIeCgIGAe3t1c3Vxb3J0eIF+gYaChoqGg4SDe3yAfYKDg4SEgoOCgIGAgIKBgYKAfYGDgoaHh4V9eXl5ent7fX55fH18fn59gYGEhoSCgIF8eXl5e3p8h4N8fHl6c4CEiY6LhX2DeHh4fHp9iI2OiYN5dHByhYCKj4qEgYaCgYKPioeIgoN8fX17goaJiYSJeHV5fYKIiY6Pfnt7gHV6gYKBfnx4eHp5dXyBgX19e3p4e32EgIOKg357e3t6eoGCfX17eXl3eoCBgYGCfnt8e36EhYSMjYeEhYWCgYSKioiHg35+gYOFhYaDgYF8fn2BgIGAhISCgYF8e4CDhYOChIF7fYSCfoCCgYCCg4CAgoGDg4SDhoB+hIKCgoCAgICBfX1+fnx8gYB+gIOCgICCgoGBg4CBgYKCgYSGhIOEgoGDgYKDg4WFg4CAg4KEg4GBfYGDgYCBe3l9gIKCgH1+eXh6fX5+g4B+foCAfX1+foCAgIKBfnt8fHt7fXt9fn59gH16e4GAgISEgoKDhIKAg4SEhISDhISEhomJhoWEhIGBg4F+gYKBgYOCgoKCfXx+fn5+fXx8fH5+gIGBfX18e3t7fX19gIB9gICCg4OEg4GCg4SCgoGBgYCAgYKCg4OCgoGEg4GBgYGCgYB+fX2CgoKDfoaEgoSFg4OBfn19fX6CgIGEg4KDgn2BgoB6fICAfICCgYCBgHx9fHx9gHx9gYGCgH58fX19gYCCgYODgoGAgHx8fX18fXx8gIKBgoWEhIOBgoKFhYKAgYODgoCBhIaFhYSEhISEhYaFhYaGg4B+fnx8fX1+fX17e3t7e3p8gIB9gYOAgYKBgICCgn6BgYKChYSBg4KBgoB8foKBfoGAfX19fX18fYGAg4GCg4OFg4KCg4CBgYKDhIOAgIGBgoWFhoaEg4CCgICAfX19fXt6en1+fn19foGCgoB+gIGAfn18fHt8fYCAgoKChIKEhIKAgYOEgoJ+gICAgYB+fYCAfoCBgX5+fn6AgICChISChYiJiIeKi4aFh4aCgoOFhIGDhoSDhIR+e3t8fHl5enx8fn6AfoCAgoOBfnx7e3p4e3x+e3x+fn5+fn5+fX18fX18foGBgYKBgH1+fn19e3t6foGCg4SHh4eGhYWFhIaEhYaGhIWGhoSEhoWDg4SCgYKCgoOBgoF+fn6AgH19goSCgISDgHl8gHp1eYB7eIGHhICDhYR8eoCBeHd7end5fH6AgHx5ent1cnh7eXd9g4SEhYiJhISIiYR9gH14d32ChYWIiIqNjY2LiIOCg4SEioyMjIuIhoSBgHx9fXt8gICAgYKAend2enl2eoGBe32DiYOBiZeRhYiPhm1qdXRhX3F6dHiMl4+IjpCKgYCBe3V0dXh7eXZ7gX53eYOEe32JjIKCjZKLhomKgHZ0dHBtanB3eXuAh4iCgYSDgYKKjYuIioqIhICAgn5+gIWGgoCCgnx6dXFue4F6gqOqko6jm3Vhc3tgUW+Le3OSqZ6MlJ6OeXZ8cnBycXSDiYGDkpaHeoeTg3qQoZaNmKOXiYOAd2lgW11gXVxodnl5hI6Pio+Ym5aVm5iNgXNsY1hSVFtWSl+Kh3Gb0b+MmrmTUUxyZzhAfpV4ibW4mIyPg2tfX1ZWa3dsdJuggn2YnnRmiZeBgZ20rJ6ln5d6YVRNRj04VnR6gaa+rqCmtK2in6Oej3x0cmA3J05vUF677bSa3OmSR2OBQhlEjoJxr9m8oqaWblpURyo4a2tVib6hfI6tl2Frm6GGmsbIqZaAa1M2IytHX2mCsr6bjqqqkYmUnp6ReUg7eIU0Q7vWU0q/uS8dgbVNYNnxqqrlyoRgSioXHyceNIO3gYjj7pZWgK58PGa70KOgv7CIUiceKSUaNHewsaPM9tmdocjGk0YeV5tQGXPpwDxVz8c8CSl7bj6S8PXt8e/ElmsmCQ8pGRxywXlu0eN9R4m0h4HC7NS7lG1aKg8RGjk+b8PwyLXhzmAhcrhTQrrvezeKixwOGVBMWrLu5e318ryutmwiI0AsCRVTYjtRmLqbqdz18+rbyKaNVx4SHBoRIF2Un6zIxHmH1NeAiunmiE9+Xg8OERstSpre7enu6q6Dk2shI2B+QEmTiTshOURAY5rJ9Pb049K9fkVJWT8lNzUQOYeJfeD77oe15nsPG1hMKnTOzMXz24p6iU8ULneJVYnTtmxVY1xVd5usyOLIjZetdkNVfFcSKoOyZpXy75pah1wQER5PaKHw8+Dk8LRXYIdVEBtfgENUhXldaoqUuu7owcPBhDk4YFM9Y4M5Np3Ma3Ho85dDfo0yDy+FrsTy6qihp0YMNpKBRoHhxVo9V0gbLm2s7e7YrKGYUB04fHk9JV6/1IGg8+uJPEIkDRAqarX2+vfJxrxjFzh2ZEF0uY5QMCguUZHB7vf27LKFZy8LETZGSafww5Xr8aJDZHMtE1akioni7IpPna5QY8LipI2pfigPERQWNXy+7fLw7byRaC8iOzAdbNTLYqn3ujgTQlA9dcbOv+PXZyRnk0hUw/bboaV5JAkLDhRNm8rq9PLilHlgNSsvH1vL5IuV46EhEBU7c7nx8NzPojYOEjg6W7ry7+LAgzQTERIUN4S41+7s0J5+aGdrUm7B4KicpVwPCAoONILY/Pn49KtMMjwVHGm5zNTRnEw4TjMeU6rIwszDpo95Yk5FOUqp6MOozq9DDhEUI2rC8O7r5Z04JUxHRomwr76rbC40Xl1FbsLMr8a6gXOEcUImOJfp26LHzF8MCAsZZsLs1unyuTwbYIN+nYh2m4g8DSV4lHWAssS9sYWHvcSERCcQLI3GscXppjoOERM8m+blw9vHWxI8gZ22n2xpb1EcHV+eooyBb4i+rYGf2cuHPAgXe8+vquvKWQoJCzqk9umr0NlpEEWhxd+9bD4zLhUZac/psoViXImJcqDZz5RTDxE4o9bP6+N9HxASFVzQ8MCTq3QaJnu97e2xSRoWExRCqe3XoWw1UJ25u9PerGMeChVv0u3q6qE8CAsQVcb475FnaUE2jN7y785oDAwSQm2w8d58OBQdcdXw7uS0ZiUPEiGG7vDEpHUXEhZAlubt5nwgOFVZq/HvtHo8DxEsicjb45QrEClRlu727aVfMxkhRmGk+fi/aVs1EDJ8ssHW1n0wUKK5y/DjhTolLDVhuOG7jmoqEkCXzOLpxnxITFdmj6BdR5XAiWlzWjs9WmpsmN/Qemybq5eYiEUcP4eEZ5XAn3hfOipguN3GlYiEbHORmJWedB8wk9nInng6EiRUep3h9L9cSXujsa2MYEZTfYRgcqSYZkxIVo/I2q5vaI2srKyadVYqF02479egUBMTPpre49PBdCtGlb3Grm88OmKju5yLe006Rk1mo8KxfFNprd3gwIVYRygONp3t35VHDxNVvPDZnHdTJkWTwMGjb0dYdZzUxXo9LT5bdnx9ZlR8oKO649iGUlBiamFPQYDX3ZpaNDt1vuHAZEFWYHWswqyXe3GOp7nOrlgqPGN2a1tganWj0sqekZSDcYSck2o9FTSc7uOMQihGgr3IhjssTF6Bu9Cta1qHusq8m2ErFjBfa2doaWJeisnXqoN4fafSw4FFLSA5kOjrnVk2MFWPr6J4TU5wlb7Mr4N2jL7jr1IzQEJKdJqVe2JcYny01bV0Yoy80LeKX0RKVWyk18p6Qy4zWoyvrng4Onu5296lXFh5n7+eWjtEV1pYZImce2Z6mKetmnR5nb/Io2ZHV3B3em50mKeOdGxkc4eTl31eXoysqI1+jKOpjm9aWm6BfWBQXHuWk4J+j4txZ3mXmImOmHxYV2dygX5qe6u0jGdXTVdziJWakIuNiISWraqNZ1lwhYF5cWxpeJaqnHZziaG0q4twWUNGapGhqa2rlnJYXHWgqXtTVnCFm5yQj4NmY36KeHN+ko90YWN5kI2HjJ6ijnhnX11kgYqEgI6Wjndsc4GPkYZ6bm13houUnYRsfZaKe4aVnoxpYmxub4aWj3xjVWSKoZaQjYWKkI+JgnNscXR7gnqDioF1gIuIhIB7dG1zgIeMmqGMcG94d3uMiHFpXVVjfYiGh4uPkIF5ipeRhnp0fIB6ka6miXVobHp5c3NvbXuQopZ+gp+kiXp7gYGDjH1ncYd4bnuOpKVuO02EmpOKhY2DX2ylwZ12am50ammKkGRNYoedi2RvfWtriaa1oXJog4J+jYZnRX3j2WFBa2RpeITAvEcfbMHFqo2DhXNxodfAXDJeiZyVY01WRFGbuJ14UF+eq6a5qouAeYWcgV1rc1lEOEqy86xMgaFudHB3onk6X7nFgVV4jnuFkJy3gzJJiZSddUJcb3eut4J5ZlybtJSNgXaarqKPdGRyeXBdOCWE78dFc6dfiqSDpKZDOY7MoWt3fXSLhn2omkNKh5SecyozXWaXsYRxdWeIqZCHiYOKi4SFeniMl31kXVBJsvK+SHeKUpG4gXJ2Xmas3qJoeW9qm5aAkXFQeZqNfVM8TlqAro9reoiUsqWHi4yGjZOMfXdzdoSIeHNNL6LzpzybqkyMqnODhEZNrtqAVoF0b5CCiaJwTIankHZJOVlseKGce4aMiZaNfI2jl311gomAdnZ6e3JxYTxk2+93TpuFaJqSYHOGWGS5qFRcjYaFlY+Wmnppk7aTVztJaneFk3tseHyMnYeBj5OIh5yulHJpbXiGdFRPQTii9L07ZruToJVXa51zWJ6+b1B6foKinoilrm5upZBWR01mkIpQT3WDh6GrhGqIo5ieqIdzjpF0amFdYVRNX1Z14NtbdM+YWm+Em5dcOlqeo3Rxh3yHqb7Ek1l5rJp3VUZ+oVEsXHp6m6ehpJeRudSgcJKqhG9pUE1VV2J4dmpQUsb1skmSqFuCtolJQDZYxLxBNYOuwcaQaHCElaqOUzI6Y4NyU0ZCXJ23qaSKeqfOtot0Z2RvfG9aSUFdlKGDfopjZNj0tTl5vH6otVYyYVdQp8tfM4nZz72UZpO8jnySZz1UfIJxTDlhnLK2o5eUmLbFmmdbcYSCa1ZNVGd8hX5xfp6RSnDlzkRBopNyZ0pFYV5dgqd1W5XKzrJ7aZecipaDVlxjVW6ETkWJmHOKsbi/xq6RlpiKg3tdRElngX1saHKNq7ioloZxR4ruuypGwKNYdFMtZoxuhKViUqbXp3qBkrCjaF9sUTtNX1lDO2aktp6MpMK8sJh1eIBsXmNiXGRsZm2Il5WSkpKPmppUUcvkUz69zFJcdEZnq3VFh712ecite7C8doCaaV2FeklCV2Nyho17dJiup7KneHGJkYp2VURKd5iCYFBem8WfcHB+i6q6hS5FweFgV7qQTm1xZoNuNVS3unF3kaPLsWqIoHZ6j1pGYFlZiXxObqCUiZSbqbaqkIN6c3t8Y19nZneHgnVvdIKToZqKhIBZRajqeyaBwF9YimI9c3tkorheYMnmooKHgpuvflRdcWdYa3trYH6en5uUipe2pXx6h4CBfHJvd4aHfHN3hIuGe3F1hYaJnJdqLV7g1jk5vMJqe1coYZxyWIiEaJ/Ro2lmdae9ez5TfouDYUVYeoSPiWphiaagmot9mrKRbXuKdnSKgm57fXqMgWl9koyKmJ+QYDCC7aAib+GUT3BTSZynUFitkmu40XRQeJa3oUYmbK6Ualpeco+OgXdtZnWIlJR7b5qrinaKlYNvb36UmHBXbYmEdmRtkaWbh3dUT7LvfTOY0YB7bzdRppFZcI15p8iFZoWSob19O26xjXl3TFCWkVpeZ2qQrY93gqK8uI1veZSVgGhbZH6CbWJqeYKBfoadoop0d4Bsn8lsNpjPfllNRXbDpUxJlKessHdRdqKqm2dTfJaOgllQgpp0aHFyhpyBa4KYopZxY4SblXtgZIGWl3tfaI2ael5qfIaSiGtgaWpvtKtBVb+sYGtYZquxa1qFtrCKb1l4rZdsZ3eNn4qAfXeJmoJtbGyBj3NhdoOaqIRsj6GOjoFujaCJenV4ioNmY3F2fn52eH16ioxheseoX5SrbXSLeG11e3yBmHlUboiFkHxmjaGEgoB+lIdrd3p4inZkgXhrkJOBjol6k5N8gYB9kZeBd3SFlX5sfntrgZODc3Bye4SDc2iDrZtte56RlJJiYZaYcm1rbXyCd29ugpKRind2i4yEe2xvh4qCclhkiYx7c2+HrqSIfoWYrZV1foqHkYuCempsgH53c254iYOEin1+lZ14a5OolYB1e4yHbWF1j4ltYnCOk3h0iIiPlXZuiYJxhXxygHZrenZga3qDgXN7jIiOj3uMn4N4h3p5jXZreXyGg296i4WLiYGYlHmHioGLe158l36DkXl3kH5wgpOThISGfpCTbXGKe4OIbmt3cnuFe3t0gol1cIN2d5B5Z4eXiYSBeX6IgHFtdoOAdn19eImId3x7c4WSi3ZuhpyThG1geJCQlIZ0j6KalHJkh5WViWZpioqGeml3j5iTdXCLiYeKcneTj313b3qPhHp9gYiMjI6Fe4aSioJ6b4CWgW+Ai4d3YWd9h4BwcYeMfXp8fH5+gYd7coKQiHp+i4aAemlshIqHfnmBj46BdnJyhJGAbHR5hZSDc4KOhXx0b3eChH57fYWLkYh6hpqQfHd5g5CFbmd6jn5wdXaCj351hIKAjIR2en2AhH14cWRqhI6CgYiMjoVzdYaLioaDgHd8gnyAfXiLjHuGh32Nj4GKjHt6enR9hX6Agn6GkYl9iJKOiYKDfnyLhXCDhnmJhHKHhXSGh3uDfnqHhHVwc4GJe3N2eoaDc3SAiZSMh4uHhn5ydXuBhIF+fYCHi4qJhIyThXtzcYmNdnZ4dIB8cXR3eIGCgIKIj42BfoKDg4J+eYCDdXR4b3eFeXqBeYGIgoKAfo2JgIR+eoJ4cHx5eH18god9gIJ6fYyOh4eEgoR9dniAiId8foSFioh9hZCIkpV8fYiEi4h3d4OAfnlxdn1+g4KDiYqFh4eHioqGg4F7foeDdHF1e4F5e4WDhIV8g4Z8fX18gXt2enl5gHt0fYKDhHt8hIN9gIB+hISBfoCAgoaGg4N6dHqFhYB9en6JioB6goeHhn1+goSHfnp+g4KCfXZ7fH2Dg36AgYWIhIKEiYuEfoB+en19dn6CgYKAd3N2e3x6eoGGh4R+gIF+fnx8goiEfYOMh4OKiYWJhoKHhH19fICJioR9gYmOiH17fYWEenR2en59cW93e36AgoiLj4uGfXuChod9eH6BgH15eICHg3p8hIN9foB+gIOFg35+gH17dHJ5gH17d3Z8g4GBgoGGioiDgIGFh4eDgICDhYaHjYqDgH19goaFgYOEgYGAgYF9fIOFg3t4d32IiYF5d32HhHdub3yGg4GCfoOLiIKBfYGJh3t3en18fHl6fHp0dHRzeYODgISJj5OOhYSLi4iGfHyEhX11dHp9foWGhYmEfYGAfYaFfYCFhoeEgoCAhoeFhH59g4WAfHl2fYF7eHl9hoiFgX6EiYqJgXp9goB7enFxgZCKeG9wc36DenB0foSHhYCDiYqEgYWGg355eIKIgX18eoCIhX6Ch4qMi4eKkI+MhoB9goJ5c3N5eXl3eHyGiYeHhYOFiIaEhIKEhHtycHR2dnNwc36Kj42IhYeNin52c3mDfnRucHJ4fHl9goaIh4qDhYyJhYeHhYF4dnyCgHt5eX2DhIuQlI+Hgn17gYmIhoN9enp9iIqGgoCBg4eCfnt5eXl3dHd9fnl3e4SNjoyLiImNi4Z7dXVwcXd1dHV4d3h8hpCQjoqHiouGenZ5e3l4enV3fH2BgXyAjJSRkIyKiomEgoN8enh3dHF4fX59hYqHhIF+hIJ9gIJ+fICDg4B1dX6FgoCAfn59gIB+enh8fn5+foB9fX5+fn2EiIF7e3hydHd+iIqIhX6BiYmHi4uJh4OChoaGh4B3eXuDgIF8enp5eHt7fHt7fX59gH19goSEhICEhoOEg4OFg4CBg4OFe3l+hYSDhoeHgYGBgX2EgIOKg357e3t6eoGCfX17eXl3eoCBgYGCfnt8e36EhYSMjYeEhYWCgYSKioiHg35+gYOFhYaDgYF8fn2BgIGAhISCgYF8e4CDhYOChIF7fYSCfoCCgYCCg4CAgoGDg4SDhoB+hIKCgoCAgICBfX1+fnx8gYB+gIOCgICCgoGBg4CBgYKCgYSGhIOEgoGDgYKDg4WFg4CAg4KEg4GBfYGDgYCBe3l9gIKCgH1+eXh6fX5+g4B+foCAfX1+foCAgIKBfnt8fHt7fXt9fn59gH16e4GAgISEgoKDhIKAg4SEhISDhISEhomJhoWEhIGBg4F+gYKBgYOCgoKCfXx+fn5+fXx8fH5+gIGBfX18e3t7fX19gIB9gICCg4OEg4GCg4SCgoGBgYCAgYKCg4OCgoGEg4GBgYGCgYB+fX2CgoKDfoaEgoSFg4OBfn19fX6CgIGEg4KDgn2BgoB6fICAfICCgYCBgHx9fHx9gHx9gYGCgH58fX19gYCCgYODgoGAgHx8fX18fXx8gIKBgoWEhIOBgoKFhYKAgYODgoCBhIaFhYSEhISEhYaFhYaGg4B+fnx8fX1+fX17e3t7e3p8gIB9gYOAgYKBgICCgn6BgYKChYSBg4KBgoB8foKBfoGAfX19fX18fYGAg4GCg4OFg4KCg4CBgYKDhIOAgIGBgoWFhoaEg4CCgICAfX19fXt6en1+fn19foGCgoB+gIGAfn18fHt8fYCAgoKChIKEhIKAgYOEgoJ+gICAgYB+fYCAfoCBgX5+fn6AgICChISChYiJiIeKi4aFh4aCgoOFhIGDhoSDhIR+e3t8fHl5enx8fn6AfoCAgoOBfnx7e3p4e3x+e3x+fn5+fn5+fX18fX18foGBgYKBgH1+fn19e3t6foGCg4SHh4eGhYWFhIaEhYaGhIWGhoSEhoWBg4GBgoGBgoGAgoGCfX2EgoGDhYGDfnd5eXp5d3p8e3Z4eXl7fn6EhoKEgXt8gYF9fXt5e3p+g359fXt9goODhISCgYKChomLjY2LjIyKiYiJiIeCgoSFhoWEhIF+gYOEhIKBgX2Ag4WIiIeKi4mChIB8ent8e3l3e35+gYSDgICAfoKCgoF+enl+fXt7fX1+fXx7ent8foOBgIGDgIKJjIqK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gHSBdVZakMK2dF1+nqqihlo0JnDc7LZiKRQkWq3mz4pwYEI/et7roU8uOGaVv8BpKU2UrJd9gntdZIGGja7Ivn1Ma6CmiG1TLyx75vTEaj44SHKy1KpjR0JHd8vw6IkrG1mpwreOQxYoZ7DQoWZOQFB6osPDo5F4VWGcwbWCQycuOFy68uOXXy0sW5XS8LleHhE2j+PxvXBBQIfc6qxyUT1FapymcD9HYXCApczAhW9+kK3JvYpPMj5kdm+EscKyi1dRe5CdtZI6F0KPyNG3gkIrVqjg16FuVVdXWmttZmhmW2qRqK2TW1CMzOPXrHRPSVtpYV2IvbScnohgW2FhfpyOb3ehq4p8enJ8lau2oIGAi31eQ09yjJWQeGt7eW56gnaGrbihfmNbYnWNlXxaW4GWk5eYellTXnSMgFJEbI+LjZihqJd1epGDcnV3b2RskqiSeWJPaJOSjZuPd3d+iYNsd6GefXR6goiRnpZ9fIR8gYZvXWRgVnaqtph9eo+agm5+iW5hc4OKj5OMd2x0iJSGX1V3m5aCgYuBZG2VppGGioV2bIGek3N8kYJycXh+i4hwaYKNeXKEkI2Ab3KDkJeQfnt+cXidpIFkZHaFgXiLi2BVdYqCeHmEioN6hpqXe2Jyk414lKuQZFdrgoN1c3R4i5B9b3yVmoF9m6GMg4qQjHNykJyNfnV3fXRvjJRxanmFkYl0eYmFhZObloBTasPPc1t6b2hhSnO/pEc0aq2ug4Kel3dJYbbJk3lnY4p5aJiaWEdYeI5uUmyCdXqJl6ONepKkg257kpyIa1s1Mp31pkCKoEdHZ6Dq0U0eaMG8lKWcdG1bcczldklZUXKJeo12NTt2paqCYHyinp61r5t5WGOKiWpeZmNgaoOGUC6Q8uJ8n6Q6IWKvyLpjEy2PrX2mqF1okZzT8KZUT1NphIiHViUwT3qxqIWNlpat2eK3hWBffYBsbGJOTGyYnXAnRsX0rWCygSZovsTIlh4SVbGTiKWIXG+EpOPZaCREYXaCX0w/ICpkqcSPXGygztrRuJZ3bHuEc1lFT2x0coKXl1pMw/jJXpqXP4HLqqKiPApNurhykolGdsPCysxmIFqTioheJic3UIe5t4hcb6zO0L+WdGdeX2xpUz87WG9tcZy7nVs2lfTkYlepaFucknJ0URU8qtiGi4twqN3Dw75rPGCDhHk/HTZXbqfGm3mMrcXd36BzdWtpe2lEOUBhjpqOiJKwxLBvPoru1EpPvJM0VIFZZHg0N6TYcmi7snWdvKKggC83i447JkBJU3CWrMTBi4W/xqGLemxwblBNZGJVZ314haOopbiwdzczp/avKmfDWTmUllp5Xhpd1dtpiLdrasbcvphEFVSsfTY2NytQlsLUtoWGr7ytoIdoW1picHRcQk93k5ebm5ynqaGefC9g08FJasR5NYCXV36cRUCr6aGDpn54yNeXg2oqT6KORzU2QnKkua2Vk5utvKSDdGlkb3VsVj4+YoeKgIGEh5imrJ54QhxmyKM8cb1bO46bVnmTQVa/5HZdoYmo79FxcnZDZK94ND5MXaS/nJWknJ3K3pFYe4hjaIBxTE1ofJyieXGWrqeUlJiIXi1Sy9tQQrysNFaQboeWPDak4ms/kpqdyqpngoY/TIhoNUdQVZGfZ328rJK+0ZZrcWRjfnZFSGZseJiji3F6nLaogXaYq3cqL6PrejqiqSs2ncGBZ0cwje+8SXfDrZPAsXRgU0BqnGwoJmSVgoali32prKa4k1FFb4ZrV1tda4KRkId3fpy6rnlnlsGWQx907tJCYMRqLY/de01mR2DW63NZvb2Ju8h+YWhGRH6LOxtOiZuioYOMtLq1u5hhTF9+h2lCP2qMfXiNh2Z0oJ2Bd3KQuYosIYvtqDJrr2BWpaZhZmNAh+zKVGq4vLG6hlNgc1xrm2wiNIGjo6CFbpG6r6yrbkRgk5t4T1B3lZKKioBsbZO4pmxOa6zEj0YjcOLAOGPGajWYrUBQhkxezNlbUrbFnLKNQFyYcVCFeSUtfq2jjWxUg8nOi2p0hp6jg2dqdIKVlXVdVmeIn4VZVn2QnMC9ei87r/CAMI+qRIO4WTdsX06y8IovhtvHuZZMVJKMZHt6MyRcoK+NUEGByseTgHyKraSHhG1Qa6KhXz1PdZWgdlx0h4acxs6aVypd3OFNOa+oRXiPSklzYl7D5GhQweqde3pniKtvOl52TFKRonFPUoHD1ZpebaXApXlzcGFrjpNpPERynZhxTFKBqayUlaOFVDR069E5RcCkTo56KUePd3TW0VBTzt+TiXJYjLJqRHmKUF2cil1ndXytunpTgb/DlnFkbpOagXVkUGSMkHleU3Cbo4RylKqOXCt866gmXdGSQXl8PWeXXVvDw01i1Mh2h4lrm7tmP36LTmmeZkJ0j4KfpnNqp86qfXeCjZ+UdV1YaIiMd2BQXYyhjH2MnZOPcT+W8I0njN9sPI56QXCPUmfJtkRv2LBdgZF5oqNKQY+XVFuBX055hHKPoXpoo9Wvc22LpqaIbGx8iYNsa3NnY4KLeXWLo6SPc0NeztNPUMCfQ36WPzqBh2CkwVpWv8lxhKR1gqZ+VXmJWWaMZkNwi3p8fnB8oa2UgH2FmqCDamt2iIxyXWNse4iEdnaHnKSYg2lKdeDHQVW+jl2hhS5OrJtnoJZWhNKvcnx9bp22a0J2i3WLeEVmn4Jtdm53mrGdc3ecnpSPd2l9koRqYWBogoFoZHeBhZyXd3mGbVWb6oojc9WNYHJISKLDeFaMqJCisnZcjKWAgIxsW32WhnZzZGN9jXhncpOchneJo6CNgGxxl5p4bWpwjI9yZnB2fYmHdXKDiXt1cEl71I80ithuTI1uarGiVl2hq4J8impqpZ9siJthd7qXYXp+aY+gYVR+iniSoXFvm6OQh3l3j5d7cYKJhYN9cXWCemhrgYWHg2BajaF0XqDGemiih2ugpFVSmJxteHxUY5uSa3aAcY6rhGNxd4epj1hadXaNl21WcpOakoNxgJ2XiYWBi5GFfIODfnd2fHhwcX6Ed3d7dIOejG55d4a5oFp9sJB7fV9afZd1UWuIfYaNYmekpYOQgmKDpIZxb29+intwbG59h4J6hZSPjpiRioyQkIFwepGScV1yjZGEdGRxkpyKeG53nbGWcmx5fpGmhWN2hYCHiW5eboaPh4GBeXqMh3mDiIeHdGuCgnKBhHF1hnxzdnR0eoWDfoqPgoSSj4B6gHpzdnp1dHl8h4l+e4CKjYmGhYaIiINxcImSfmdbeqeaeX2CgpSPdnd7gJKNdniAd3h9eX6HiHlxg4h6iI50epaCcpCIZnONhXt+eXSFjXp7jI+IfHSDkYh9cnKKk35qZHeLiHhxdY2Xi36Bg4eXk3NnfJyfi4SCfpOfeWZ4goGMh3Jue4eFd3mCh4iBe4B9gYmBgYd3bHZ3aWl4gn18fYOQj3x6kZ2KdHaEhHt1aG6FfWlud3d8iYJ7ipCIio6Ac4KNgHV4b22Hn5CDjpKRm5BydIyTi3xvboSShHV2go6Yi3uBhYOPjHZ6jHtyfXlxeoF6d4F+dYKRhnmDhnl2enF0ioRugox4dn5zcoSDcmtygouDdXJ5hIiGiHt0foB+m6SEgZuViYdxYXiMhXVueoKFjoR3iJuYjn1ygpCOiHNrhY17dnBndYeGgoKCh4yMj42JhIeLgHd7goiDe4CAgIN9dnh4d3x7gIN+fYKBgIF5bHKIh3p4dXWGn5eFipWIg4p0YG94fIV+dH2RkX54gouPjXt1hoiFiXxxfoR6dHB2goaAenuCjIh9fIOIh4eFgIKCfHl7fH59e36AfHd1e3p0fYmCeHt5eoWCdniCgYSJh4SGiYiEiJCKg4iIgH15dXl+goeDfH6DiImEgYSLioF8g4aBg4R+gIF4dHmAgoJ+foWHgn2Cg4GGiYJ7fYKFgX53cnqAfHt6e35+fHh3eHp7foSCdniFhYKDhYiLiYaDg4SCfnyAiY+MhYKAgIR+b254fIOEfXyFi4iIiYiIiYWAe36BfH2DfX59c295fnyAgoGGjop9g4eDg4eBfIOGfHyEgHZ2end7fHNxeXx+fnt+g4R+foaHg4KEg4SFhHyDiIeFhICBg357foKDhYWEgoODgn16fH6BhIJ+hYuHhISEh42JhICCg4B+fn18gHx1dnt8gIKFhYKDhoSBgYKCgXt7e3p5d3d6fXlyc3WAg4CAgIGGh4WFhIWIhoGEhIGDg3t5gIOAgoN+fYCEiIiEgoKDgoKFiIR9gISBfXh0foR9foF8fYWCfIGFh4uKg3x9gH59fXt7fXx2dnl6fH6BgYCAfXx+gIKFh4CBhISEhIOAfoKDgH18fYGFg4SKi4WDgXx7hIeJiYR6foN+fYOGfnp4fYWJg3yAgoKChIOBgYB7eoOHhX56dXd5eXR0dHl8fICIjo2HgICDh4iEe3x7eHd1dXmAfHl6enuAg4OCiYyIh4iGhImGgICBfn59eXd+g4KBfoGEgoGCgYOJiIaFg4GBgn6AgH1+foGAe3t7e36AfH6AgICDhYKEg4CAfXh7fXx6eXp2c3eBiI6IfX59d3d8gIaHgHt8g4iKiYeFhYSAgICAgoF6cnZ7foCCg4SFhIWLkIyIiIWCgXx5eXt6eXl6eXl6fICDgYKFhYWGhIOCgoF9enp2dnp7eXuAgIKEgICBhIKAfXl3enp5eHd2eoCDg4WHh4iFg4WJiYSCgX5+fHh4fYB9fYCGiYmIiIR8eXd3foWGhoOBgH57e4OIiIR+eXh2dnV5foKDgHx7fXuAhYaIiYaBgIB8end1dnh3dXR1dXd8gIKGi4qJiYaDhISCgIB9fHx5eXp9goWJjIuIiIaEhYSBgIGBfn17eXl5e36Dh4iIhoWFhoOCg4ODg4J+enl4eXx9fYGDgH6BgoCAgYB8fYB9e3p7fH2AgoGAfoGDgH19gIF9e3t6enp4eH6DhIWHiIiGgYCAgH18fn16enp5eXp9gYSHiImIh4aBfYF9e3x+gH18fHt6e3t8gIGBgYOEg4CBgXt6fnt7e3p7fYCAgH5+gYKBg4OCgIGBfYCAgH59fX2BgoKDhYSDg4J+gYODhIODg4GAgYB+gH6AgoKAgH57fH17fH5+gIOBgYKAgH58foCCfnp5gIJ6dXl9e3t+fnx7gIB+goSDgYOFg4CAgH58fHt7fnx6enyAgoOBgIGCg4KAgIJ+eX6DgYGAfXt8foGDhIeIhYSGgX2BgYCDgYOEhISEfn6BgYKDg4WFgX5+fHt7e3p9fH2AfX2BgYCDg4GCgX6AgH59fXp7e3p6e3x+gICBgYCCg4CAgX5+fn5+gICBgIGAgYCAgICAgICAgH5+gICAgYGBgH19fX19fX5+fX1+fn6Afn6AgIGBgICAgH19fX1+fYCBfn59fnx9gYCDgoKAgIB8fX1+fYCCgoKBfnx8e36BgIOCgYCAgIB+gYKBgYGAgH6Afn6AgYGAgYB9fX5+gYGCgoF+foB9fX6AgIB+fn1+fn19gIB+fn5+fX5+gICAgYGAfn5+fn5+gH5+fn5+fX5+gH6AgIB+fn5+gICAgIGBgICAgICAgIGAgICAfoCAgICAgICAfn5+foCAgICAgICAfn5+gICAgICAfn6AgH5+gICAgICAfoCAgICAgICAfoCAgICAgICAgH5+foB+fn6AfoCAgIB+gICAgICAgICAgICAgICAgICAgICAgICAgICA";var ou="data:audio/wave;base64,UklGRoQqAABXQVZFZm10IBAAAAABAAEAESsAABErAAABAAgAZGF0YV8qAABrfHV2d2qEfZmcm66Ro5F0gXeCdIqMeZRvcWRmeXqcio6Ng5Jxio+Vno6ghIB/bXxogoJuZWOhdlR0eHd5onRquH5UbJaQjKNqc4FmX1+dkHd7c4RwjHpjj4CIj5mPb3xabI6Oo5Wikox/aJOLkJOJooiEal5zep6cq6OMil1sY05bU2xea32DgTVwz7NiVIVEYJ51lMSjR1i5wLqSh4p+qIN2h3dMIHGrt654c1tpfZfRtp90cYh/hlxkbHCEfZmAbWpkmp+okXyCYHB5kqyqw6CKQRh+wJ8yO3dNVWRteYl3KF2v9ux3W2qGmZ2wo6FQGl2fyYtaWoTIx9G1i21CebTXqllCJ0ljY3dkb2R3nJ6uhIWWpMzK1HkgMIHVeSk0SjIkd5etpEIyYc3/wHE4eqS0xbGrTg8mb9C0gUZHhpG5pox2X3eJv6xiNBBIaomQd4d7maqw0Le9qJqeZzQ9s+CAMSB/hGt7fo9XSmae/OOkMxVeptGUfGo3OFiovrqUS3yu8Oiefl94eYKSXT8KCzFZjXmJlrDSwMSrwNiSPh2J16VOCFR+fZCGgUg/QGLH7NNoI0yc0n5XVC4kVMTMkmAvZaX19LGSaH16e3VBORo2dImKX4Cv4P/TkYDT85JIJX2RhJlaNBImMlDM7cVmTZfT9Z1LOjZQdbmhVi4OY7PTvH5uca7GqqFxZ1RhiGhQJ0GBqZlLnOz4tE+KuqjAtWsraEkeisKeKDmDvf/AZzN1yby6flNISXCGxLyMhpK6kW5UR3JvgXRqe3BhLIPlzHs1j8yon1QsWrm1UqHEbz58qqXGYC6EurdrVltppKKyqamVaqW0mFsxRlmFSBZSYklWxvOoX1+7yN/AQEGGm2aMvk0lXZbCyZ8zOJ7CrW5UM06dhHRbY4CYz5xiR06BhpV9aEFEv9WJN1jFusqcN0WOtWSZ34JWbZGClXkRSaHHmVx1ZHyQgnt9nmNprn5EMHBuaYpfRFa87JNcgeK9noQraK6QWY/lpJqxjHplRhp0qEQkR5CjhGI5d6W9pIGmf3SAgoltdDlJv9OUQprouLB5QWjApUSPrW17sa12eDYrl6x8M1SWnp9dX4mnrZC2p42cjX1tiEQfhqx/KFu2oLOQSnnKtVGImGmevopNZ0owjoRIJm+zjnxYXICpvpizqoiemX48RFeU23AyV6eiXF08ieCofay9e6bdo6yCOkWTpzUhXI6cZm1wgXpZkrS1e3WcmIhAasmXRjmPhHBcHm29xIGO0qDA0o+ju4xTkJNMSDtYYFZmY4+IeneAnX+Lmp+ERqPJZ0F8sHqYbyV4p3VGn7GI0ohRmKN2ZJl4WnpwiG5RTWumgXODkJqKmYehjWDAz31Egq95n1U4nqhmSZF8h71ndbWTX2WHW2x1e5tsZ3CFilxwfZ+sjXdngFSIzlxJiph6hVQrncJ8g5WFkblvV7KRe39seXBeQm6EbY6Limpkg3CWj3yMgGqC0nczhaSimXA9eMVoYZJ5o7uATZKUapuAfI5+dGZ9cnBxa5CEnJVtb1+Ag3V+r9VfSZONfHZgSrDFXomddZurcWK0f1mAUFlrb3B1h3SIfX6QfLOqkpN6fmZZWa25RnGhfYJ+VGHPrnK6opKvilaDoWaJbTtvXl1kX2VoiHN9bFuIcnqAjKyOa3PHjTWCjYiehUd1zHdpr4mkyJRgnZlXgGdkjHFsbXRdcot1l4uSmnOIdYGJgnmS1ntCeYp5eW4xe8Nwa4t5hbGaZbGebpl0aXp5bIGbbYV9b4Vpf4eGiXuEfo5VUcWgXnuUcXqbO2PBmoKen4G5mkiej2iKeWBec1BhhVx7iIqOcX12hYSJjYKkZVy6rmBUoYWGrENapoNmmZpvvq1Zi5h6eZJwZohSZ2c+eoaWlYZvYIB0e3l6onxvmr98OoF8fqhyTYbDfIa1ZZjEe36fdGeeZ1eWboemfmB0gV95XFSVe4B5cYmMiG2zvYJxaHVymW88mZd+hnRvkr2KoKh0n35PZnlyb5t2iJ1ujHZjbXOBdYZhco5ZWn2+onWZhJCabkt3rm2Mp2mRrYhzmol5pFhbfVJxgXl1kIBdlHBii3uAg5SPmZJba3ixs2uBgn6BhGJGjnx/tIyFk5R0hZNkjYJfhXhoa4dubItgdnNkbmuCdJGYhJZ2jYZmqK6FWl5mZr2wdE98fXvSjoF8crCLjGqDpILZpl1XMENSiYuVsGyGYmB+dYWKnoB+jnuhnKWRc4xycWFIWnCbmaGZhLasiWNmfnynfGBaRHaKl4V4gWuWiHF4eJuJg3J/qoiqpZCUhpBgaWlbfG94boehjLGqp5d+jn6diGlsRE5XdIGBn3h7hnuPkZh+hZKRsJSQdl1zfY9ucXNrg2ZxeWNpX355cmlYiYWesIh+a4J6g5d+m4p5gHBzdZh7equZmnVpfIGsoK+VbIKFrZ5/WVOWgJiEV2tzm5KSiXGkjpWqj4ZyfmR2kG98dltcd3Ztm4OCjm2Jla+uj4dkbGhwdnCQgpqFYn91fGlpcWqNfHh5d4WEppCFhVt2d4SAboNwiXpogXeWqbKaipNufXlmeHqYkp2bfo1xeHdwdF6OjH50aot4iJGTqJaejoJ/cIx4c35xfHWBX1ZrX4KIh3ptdlt5dGmEgpSEfnB6rJShoIqQeYNkZnt5oJeii2tnVnJ6lZF/o4aGj5GWiKWJhJN2hYB8dnaEdI5xZHFocWSKh4+ymqWWlpKDkHmGeGNsV2trh457n4iCgX6QiaGVlJt6hHiAc2+RhJyFd3ZjeGpyc2d+aHRvZXh5p5SZmH6Sg5mNgYh3jXp6d2ZzW3iBgYtzfmlygnuZlJ+Ript+jYKAhoGRc4V+X29sh42WkHmQbmxtX2xok5GRmniKgoiJgJR9gmldY05naICOfZN5hYWBlYKXi4+LaHxrfoOAkoCSfG9sZoN9kZWSoISIf4ORgpaMmZKCjHaIfIWPhZR4e2tcb2SBeH6Gc39oc4CGn4unmoeHdo55i5KCknN5aGNwaYh8hYaBmHV7cnuUgZeKjIZxf2qIiIWYgot1eXZsg3STi3d4XGhbcoRxkYaSiYKQfJqYpqyEi3Z4cHqUc5STfoN5fGWBiniPgIZsZWlXgn6Ci4aOcHlucYZ4kYB6d2yAbIWEh5l9jHV3dWmHeo6Lh5FygHR+kIehipCCd3pnhX2Gn4yRd4OHdJqQlIqKhnB+XWx2gI6CmYaFiHmMfpOJh5JqdGpzeXqij6COdndmd3SPiHOSdXtzb5GEj4KKi2tpaH50fpN7mH5ufmyJfI6Zh5p2iYJ5iIGLhJ6bdXpuhnaDoIeNgn5sYYtqeYiGjHWTe36Lh6iYoI52eWB6doSKg4lzlYVjcnuMfoCUbHxxenR3mn2lg22MXHpte4qCjGyCcHJ+b52FlZF8kGV1f3uRgot9fmdnfGuEkoWbf4xxbYNykIKHk4SMg4dri4eFkXB7XFtpW3V3hY2Fm3eSfo6ZhqOMmJx6im11fnuKdpFvjXx5jH6dl36NZ3hyc2xwqnh3jGt2UoWAb4OJp3efe1SfgJGSa49olXdudVCNho2Rp4hgjYJ+dHl9d25iWHx9m4GkmYSgZ26RmJeVtYx7eVpwanttiaNzh4F8eHCdoZiUiIVoiGyIlYSddnxpT2dgfnVpgWx3ZoB3hqqVnJWPhn+pi5KokJuFZYFXdHGLjX6XV5GEZXWEbYeZfGx1aXV+jHyJinh7WVxlgpdsho6HmY6bhpGXkqeUk3RgdWhnaoGEgIpziXtmcGt6bHmEfZ90cXySsJafe4qFY2hxmYZ1iZKQWXdqa7qMh46wnW6CgrOqbI+1l11hj26EhXB+gaCJeHOFmGSTo39/doRxhJCIlmtnXVtyWG9idY17hl9pZm+PdIJ+f2tZiX6BhX+eh4VZX4d4hWqRo4J7Wp26k32GqpOJhHmIh4ViZazMuWFXaG6Le4B0d4RobmGMmG9tcqKfkoxieY2oo5GUb21cZomEk3Nyf3+UeoKDjpd5kIR8bV14YXmDd4ZyinqAj46gaHK53rZXVlJikJ6lgHZuZ4F9o514Z1+SipSRZltYk6mgildTTICllJh5hnt9moWMcHqQiph7clxaeHKIgYyUgYt1cVeA8OWjSTU+VqeMeWtce3aJhZiXZXZ1mcbGrVtac6bTpYpSUWN2oH18bGiUfHyIhFs3im6Ilo+DT3VdgHt/tqCBXar9yIdCLyhptJFiHSZnhb7G2J5Rd3aMpc3NdEo2Zo+XrXhcbp7EkZFxY3iCpoKGfVdONWRwcnRZdYGcoJF0XKjr/tKAXRUvh6yxYEJDU4SEtKd6hIGRkLrWx6NaVGebtpZwMEhvepyaoo6Gfm+MdIBrSlRHcmhph3eRgZOeaGuc+fGufigTMn6ccmEpMUZUmL3Ck5CRa3yZtruzmUlPcrXdpoFJYoaawpGSkX15ZIxxYUw5QTtsh7TAnpuPimiP5vnglFAVAEOCppJvWzJJZKHGnqKLf2h5urvVu4RNEUFpnJ50dUxdhqzUqZ5qUlxSX0BVYUxaaXeRvs/h7rKAZY3n5sBxKAAAS4+7nGllSV5st9+vyaRuRFycmLCcZysFM161y56RW11dd6GUpYtwWkdPQlteXmZOdo6st67Fta1rVZO89MeFSwASPJbBlHc6Qk1yucLk4L2UaGhTcol6YikwP3a/2s+hnICBlZq8nntMJysQPFVkgX6YnLTPxdTT5c+sdzBjnsSkYDoACDJ7x7CUa19eetDXybKojk5NPUhgZYpoVkZpqsLsw6eRdKOfrJpsXSsxHClPXYiDg5GLsc7v0rC+raVALmyduoVrLgMqYMPQuKOEfHGyvqy2pJVGMTw9aW2EZjlES4ScwcuemW1+hHqIbHNEMjsoVGiUoJm3mpWOpNHBxaGHZjp8k6GQZEgYJFOo8Na6hYWAlK+Qn5iMcUlLQmhkfZJhPUF2krfVrJd8cnRShIabdlRsS0iCnI2asIOo3sCuhqCsiH9XLxBZlntuRCIuT6/N5KWYg3Kbss7SspxYPzRCOEtegH1HU3eO1/DjunmIaYGKc4R7pH1kWV6Sjp6Vo52Gj2l0aV+LlYJkN1JKkKyVkEtUU4TGy7yMb4GF0LyXi2gsGiIYIzBedWZzZGSLs/bAqpVwbneah4aJeo5mdX2JybjMm42Ga4WPkoVxgHmKjah9L09koIpeVi4oSJvdvcqxtJWSwYyLZGlnQUpEXoWFrqd7ZneSkKGHjmdJcWNvWmaMgI5naXBumJCih3qMhbSjpJt6kZKXio6TdlcvZJGauodeKR1xsOjDsaxmdY2qk42xh3hUVnZmlKCYgFRpUWahqKOJfGR5goKLXmxdV3VljndlcWmLh5ehobeWh3F0f3aceWBTGw4igrfIvHZQMma+8P/MpGRblrG6fGBHTGRMaHJ1iHVzSFhxfcfJtIhqc32WkaeNYF01VVVigYusg4SGfKGYubGvpoWKYnaAd39UamMwHjyd0/HOg1xDdLXnxHiATUqAma18dXBocGSLe32DdHNScIeS1sKdh3F8fZ2ZknhcXTxOS0d0gaWTmI+Gqa/V2r2uf5WGe3JMRDVca4B+MkJ5veK9mzcuVZz54r+HWExWqLaZcE1VTW1uiY9sj3VygZXCr8q0iGIsRkJhiYBxVV5cZmVplXmgsnmDhaa0vLN7gnqYn3Z0QkJCa4FshmdCTpzn1dOoYzk4irCvkXptLlKPqZ99hmBrhIakf3JxeW1Wio6en3h3UHSMmqqjpmRZZWGPiJeTaW1jbX6hupuNeoyQjqWKmIV7eVVpWnN1YXhlXkyK1c/Xm10xO4fB+cqRZyk5YbCze3dLRENomo2WhIV8XYGEk5iSkWmCh6GtlIxeZWVsnqCfhWNHN217jpSOk2+FiqjPucGchmVMaV1xbm14ZIF7clxstrnHpWpAJl6Bm4haUUdyn8zRk4Zxg4+auIhwVFJaTIGOnrKXkGdXWoq0nrOTcmVZfGl2gHaKgoxzb4eds5CdkYaXjKGEen1ie3BuVTpQRGBskrGQdmW88OvgmHJPeruznUklIy6IusWObnNRZHyhlW12XWRNUn2DqKSlnoiqp6OJjJJpd2xtYDxTVGpqZXRgeHl/gXydjZ6fj5qHmImKj26BcHd2ZnlpgYaWoIGapsbSp4k5P3Knu31QIzVgntyzmmhieHOtrZmGd4Via2p5hG2GfYaEkL6Ib2Bif4OlelhCQGlji4uKjHSUiY6IdpSJoqibmW1kSVZsd5yHinJVX1iCkKu8d26HytOzpFY4RY/GqJFGPl52tLOaV0djaJ2rsZd4i3yPiYuhhYV5k6OXqn1xbWyHhJRuVkwzSUtzfoCSe5aNho18l4ycnYeEWVhSb5KKmnlqaW6TgpSGhZNrWlGXyLi3hWRbjdzFpFxHZYTBtpFKNFZkn7Cwg1poZY+cnqSBeWSDnJOjeWRVapSVonBVSkx3gZiMe4h6l5GLi3WKeIuGfolobWJ1lZixhXRpYICIpIFqeHaKaWVxl8euroZhb4y1i3FNTIuNnoJkUD+CjpiTcnhie4CMp4mgnJ2VkLCMjImElYKSfGZPOVxSbHV3eFd1dYKOgZV7goWFmXqDe4GUkayThHdpgX2clH9yWWpicHJmenKfubqfbnlxi62kp31uZn2ObIJ8d3RngWl1ZmBrZIyXsZdteWiEjqS0kZeBkZR+jHGDeHuUdnllbXh0jXyPhH+Vh5J5gZORrpWQem19c4uBg4t9kGpnYFh0bIuOjYxvfGV+mp2efIt4dH5ne3SFjoWPam9ob31lfHeKj36LanyCj6iTo5eUlYCOeoJ8boBufW1yfXKRfoiFeoRsfGZjdXiZiYmAa4R3lpSIkICRdHFzaH1tgn58inaGZ216epmKnY5+i3eKgIuUiaJ8gHtuf3CDb3Z9codtfnJ0h4Cfk4+CboRzg317jHKDcnR6dJSEkpCEl36IdHR6dpSKm4t0hGt/fY2bkqN/em1lfHOKgIOGbIBudXhvjIKcjoCDZ3x7kZqGlHyJfnR/cIl8gYJ2inB4b2+Hd5WWnZJ7iniCgIGXg5OBf4FuhXWFhoWTdX1tbHRxk4aTjHV5YHVsdop/moF9dWZ6a4eKkJ+IkHh4eXGNgJSLd3hleGlxem2HeImBdntohnyCkn6UfoiAeIp/mpKfloONdIF4eIVzinR3e3CDco6JhJCDnIiGhHKKe5STiIxwhHd/ioKYgIZ5bHlog36Gjn+Sf4yFdIN2kYeFg2uCbHl8dYp9lYh8gGyEeIuNeop0gXZyfW6GeoqOf4t0g3lxfWqKg4mFdIJmd4KHmoGWhIKAa4d9i4eCj3WDdXZ/cot5hX1reGeBf3+Le5V+hYZ4h3SMiIiQfYt0e4J1in+VlIiOeZGJkZGAlYSPi4SLan12g42BkHWAcm99b4x7goJve2N4eHeAcpCAgYV2jX2Qj42Yfo9+e39zjoCTkoiQc4l+gYZ1iXB+eGx4ZoJ8g4+ClX+FhXSHdIp/fodnem+Bh3yNeol8dYBpemt4iICVf4yNjJd7joGJkX6KcHd0cn5phomGhG18bn2AeIl2iHd+jHGCfJOSgIt3gnRwe2qGeX57c4N0joqFl4iWeX6Eb4JyhIF/jnaQiIqMf5OCk46AiXOEdnuHdoqBjYh5hnKHeIKJdYNvgnx7inygk5KPeoxyfHVwgW6Ec3mCc5CDjYR4hnKFd3N2ZoN7j419inmNgYCKeJB8hoRziHWHgoWSeIt+gX1vhHaDe3J/cIR4hZKHnouUi36PdYd9go14ineJhnyNgJyPhYx5jHqEgXSMdYV5eoRug3N/gHaCZnRqYm1deW54gXWKe4qGfZKDlHyAgnCEcHp8e4tvg3d+inuSfYiEeYhxg32Bin6ZiZGRg5R+jX9/i3J+aHd6c4t8lIOFjXmHcYB4bYNwenF4fW2PhJGOgpR5in99iHWHe4WMgZaEloyDj3qNe3pwYHdkeXl8iXWNfn6Ad5J8iH5xgGt7cnmPiZ+Ei4Z+jnmLe32Ib4dzdXt9loSZiIGUgYl1gH1yiHiOg4eKfJqMjZOHiWN1X1tyX3pzhHtqhnaHfHaOdYNsa29hfXKLkoqXfph/foJ4jnyUlISUeYB5gJeImIGIhHKBb5GAb4KIrX5vdVeAg4p/ko9adnSFnZKFeo1xeJJ7iXB9iJajbnVtZnt6iYCJeGqQeId/fZCJlW19dmB5c4mLgYR4kn6IkJGvin57nK5reW1gend2cp5zTYJ/kJuNdGqRaHKOiI15i4SirWyGgXR1ipyAjnOCpHZfY5igmZhsiopgZ1qTmV5LTm5idqLhzIuvcEd2c25sqmROrohmSlN7jamQk3VOX1t4ipF8ZpOZnKCcpJSnpruvbmhaamhfcV9xfnx7SS9UxOaQcnd2bLW+nMJoN4rQs1dULS92gKSddTw+o7a0gm2Vp8uUgXtjd3/KxoxpbaaHY2FskmEyXcPiekRzrrHCvnySaCh2uZYoJmJrmohZSUJPUaWjbFZhnsHSspGrsL+XjIRaaHqNZE1iLxxStOWERnPL0szAXGRnZLbitUgjP1/CsGlANk9po280TG2w2teHdbCinohrWUZoZo2SXDkvn+fSeTafx8DAk3BKZnvL8YU/JnC1wo0vQmNzmpV6UW6kzdmUhZvMwnBHKC5BS19AQCJj0erEV3O0n8mfenV3cYbww2QoO6zJmj8KT5rWjFVdfqGOuJlvn7vuyH47G088T1M+Jyqd3810U8rm1LpfODpaUKnlhUVCm9W4dBM6k8yrTVBmh5eViWKY0fflhVI7TE5KXRY7n9e3Q3HJxr2RUTF2aTmVqWgsSYiqmiwiZazapnlUe6ykrXyIstfzvZdXR2l5gTUUXa/ZZUKa39uqaSyErVaPrW9DaIiLqE0WQZLQhlQ6cL2oqWpJYI7oxYdPR4CWmDEggL2xOlCosdKjU2nGqEqZr2tee4+ZqTcfgKh+NlN0mq+Ac22EhYvHjl90iXIwNHbO5n1VlOTFe0QrlMaIhrGUVHWUrMZPL3e1plY6NYS4h5+RjHyS1KJ6RWyhUC9pv4gmYK7LnGErT8GbWIWOmMfAXnCKPHCWglhKYFeMd12Mm7upsqNyhH6QYiVirtJpQqzVvHc6O5fOYkJ3mrfUrFqDazd/jGIjVIWdqkI6fKGbg6+cp8eliSwuiMOWKF+yt5lOP4LRlFGUfYObbFmSsXOMiklTa3pjUkl/4rR4c4ieiayWa0Y3sMyEPFvTwZA+LJi/k0h8paLRh2SMg2+Bl1Jwp2RSOUaKwalPebvMnXB0ZFs/hOCOQ1zB2HtLKILUpVpcoYujhEGpnWWNlmdPnaCFk16CsphOWNHVrHJhpYtETLGaKlikwXs8NnHPhEKcu7WXTUKXtGaWj2h1iX9TXUx9vYReXqK9fGtbkJ5UUaLGVjWPr553SEegrjZcqbjDpWVpung4gXZ1hoOGgm86erGTemiltZxqOICackJ604NDZLC1knsvds6WX3SXgKOcVbG1YXSMeUxqd4inX3CZloBZc4Kcfk10kphLN6HBiDmOyKecQECYsWdipWiVpDxqm36DvIo3bnR9jF5HesCsfVJeppGJi4usm4BGhtNxOlm1wIpnNJrLdVqKsZOjhVuXZGKLc2Ftg2uDdUiNqJiAaWyClFhYhZ+6lWlGlNt5Qma6qZGKN4C7Ym2gmYzDoXOsal6ddldpinqQgEJ5enN7bXJvfGptdGeOkIxuidaDPlqZmHh2OXzAeG6MiYTErW6ygWKll3JhgYumm0RaanF0TF6NnG1xj3WLhZGghq7Yt2FegWWNdjlgnIxbhGd5xoRygHZ1hZlhbnp5roJodHZ0Z25flp+Cn4KTqKqwlZFqsbQ1OWKPoohRSbiWXXVmdbDGf5+0ZaGqaGBsbnOlbDJfaHRpZmSKpnF/f4WlmquVh2tes5lSSYevi4VDSqSLWWCGgqTDeo6IbpOTcFlxY3WSVFpxeYyBdG+XgmqTh6mumZCFj2JYUnauaWySkJBxaGWjlHjLsJepi32Ij1SCnVhpW1dsaFZdk3txfW+agXOBkaORnHV7jGSOh2l+lIBTcVpamHZslKqJk7BrkKx8jKKFWHtvU5J8cpGUgGmGaHaYd5ebmZSNg2aJcXSFg4hygmlgh3yRk52elZBkdIWNnpqwhHd8XF9PWGJ5gWKAYWOCdZCMko6bq3qDg5Gwop96d2labFd0d3GFfZB+g4F5hm6GioyhiYh2ioNzmXRsdoaPepN8hJB0hnV0b3eJcoyGjJZ3e2JzhYWOcY+LeoN0g3SAiJGkdHVzcnVleW+KhmB3YmxwbHyAqYyIlHuFdYiLkJyGo5GGiHiYl6GThJFyg4h/hHiSgIqAbnRdb2x6iHSNeISAbXV3ppSMnI2eg4Z8colvfHqBhnqQc4qWiqGIg2dre3eVf4mQhZJ2hYWFiXuQb2loW3FjcHmKoYeTf4B9cId8jH16kH+Kam2AfopreGZjg2l/gIOMiJx+g4J2k46aiJGNaINvb29rg3eQiXyBaXtyg4WHnHd9foKId4t/jZ1/e2d1aXibf5p0dHVgalp/jIqnjZiJgnx4l4SIjoB6cJKJlqOLoYOMin56Y4JoZ5mAZnmOd3aVgYp/mpFciXFpcIWfjYt3aGRAZXKZoa2smrmejJp4iX17dVVZUHCIg5B4iYKDgmhzZW5vfYl5l4yioo+ulauDa2hZh3dngYOTj451W3NveHl5gnKTfpWjj52OlYOMlIGUf3Z1YnRogYV8e3iHeoR7Z4N1inJrcV90bYGMb3Frg4qRmIuagXZvaYd0g4FthnuPg4iLe5aMnJaFg2mBfYuciKKQmJGAlnZ/cnSOfYdhb4dwemR4i4SBcoRud318joKeiIWRg4Jzf31wfHd8bXV8a5GImZiFlHuNh3qQhpSKkIR7j3+bmZudfpCDhoFvgm2IkIWOeZKDgIp5hnqRhG16WWtlanR1iGV3enSMfYJwdn1uj4GDg4qgmLudhZV6fGZ0b2KKdXZ3eYh0hnaEgml0XG9gZod1jX6AgXiLd4OCiZyHkXqEhniQeIqLeox1eW96iHyThJWOhYx5lIWOppKbhod9eo99jIyOenWadm2Eh456jGllg2Bmbn1udYVwjX51dWp+cIaMeoFthXqQnHqPfYJ9doBsjIuOn4uZioqQi56DmYZzc2B+bX2FhKaNl4V5hGiFbXqPYG9sf3qQsZ7DwrqeZ4Bja354iHSGd3OEdYSDmaSMimddTExaTXV8lJmUsZOahniKcHlnbHRodVh3fneQeIF0jpBojHV4cWFwYXqFjJqasJCUimqKfIGDcYxtan2Di4Sln6mOjYNzjXiAi2+MZoJ8iKGSrJCUgnZrU3NkgZ9sknZ0bmR6dJVkeId4cWl3a4Otl52fpYl/iX6Kj5WUgZZqZ6GGjYuGinBqVVxXTGh3j4SSh3+chKSglJx8knhmc22HeX2JcX1meG15i2eScpCWaZRuiYeLq3icg3+GbYd4eX6TiFV+Z2iHdnl6koRXeHR/h4qUi5+Fgod0gnd5nn1veIlpgXiBkIaHaHJyYYBbj42AjHGGfHmWmqSTn6SHk218ho+geY18iIdfgHyFfXF9bntoan2Dm4uGi4+Ka4ZlgY9viHyPiYB+eJaMj4V6g1lQVGN3eKqYkZJ6kWqDgoOUe4Rke4Z4lJq7mJqsbYZtcn1pkWxzfG10a42RlaeLjoKAYFJmaYWDhpSEjnaCkpWniZF+cG5Vcmd9kX6Hg5KAe4dylZKBd1xzaXyEdIV7iYGFelxtVXKKg4B0iHVlfJuhiZCJhqCCWU94mIN+doWQeHl5np+Jh3aNdWdlW4+RpaOMjHePiZqojJZ3f3lycFqAg5CSdX1lcGt0i3aZh3ttY4N2kZiUoIWPdW1ya4F8ko50fWttYm6TmKiYkXN2hm5/eJKojH1oj5Rzd1Vkd46ZdXdme5WXsaCjh3p8ZoWJlZB8j3yOgG1uYISFnZ5+eVdyhJixlp2EfnlhaVNnb3iJZ3tta3RxkoOWloaMa3l3e3BSkLO0f09HK2iQm5dmYVhzg4WifoeOkJmQoHp2d3Shm5V2WE1IlK28u5iUepqZhYtndnGDhmVfPVNeep2Pnn+Eg32cka6npKuAZkaAvrylZEw4Y5p6bkRGbIu8sbePaHd0n7XHvYduO1JocIhwaVBzlo6ge25uhLCcn3VhYlN7fpiVhYlmdnaBkIqdiJimmKSAiW5OUojny5FWEBM+pbifjE5ba463x8GKk4VvlZKSbWJZTn19jntQSk2FlLa4eGpabXFyiG1+dHJ2XWtheIOJp5Wmn5WVgqeotbmZgjMvYKW6f2skHFqPtZeMXVWGrvPcs4FbW06InJiVbF8xOFJvqqKni3aJmLmXl5V9jYCNbFFZSnBneol7knp/bXWgnbWoqKCHlHh5dWhRNn2QfXJIMRlZkbLWoIdyfZiu4bOkj1tMQmtfboxzdFFYZG6em7qol66iroyAeWd7boV6X2RSZFZqgYGqoKWXi4+GtLi+s4Z7T0lCQV45Q3Owt5iRQylUnOTq6JxlaGmfqKWFaGRAUkxJZXaihHpzZI+VsaudmYipnpiVaV1IXFNdbGJqR1FWYJGZwcC1sIydk6WxnKBtVTc0TEpwdI19RXSu4dzBjC5AcrzozaFHJTFptayaakg9QXyEpLa3tHVwWmaUqMOagGRfhn2OfWhrXn1vfIJmcm+IipSroLKgmYZziIauspl9RkAwU3qHn4KDXClIg9rZ1KU5J0iVw8+vVUQ6ZKe2t3tmUFONosOvoJNZVkdZcImxhHVSUXyIwrWkiml7a3RuaHdyjYB6emyJiqSfm6eZrJSGakdWUXp5eHxeaUM+a6fs5NeELSdFn9HmsmBBJ2CQqq58elZbcnuhjp6Qb3BjgYSdpXx3VmuCmL+dj2pYXFh7d4eBaW9XbGN7nqDEraeai56Rn4draVBrZ3FyZ3hpe3NymbHcuJxvPlRqtMGggDw2NWyioqp5aF1aenmkpKWXaFw7TW2PtqWrhXR+eZyYn5J8jG9pWmBnTnR0gomSr5+voIyTja2dmoxoZlp9fnR6WGVfcIh2e22g1fbxo3gqHjlakH+ObldjYoN9laWYoX2Acm+Bdo9rX2drj42oo42PfKays6iAflhWSEFfY39qWlVNepHE1sS7kp+Ul6OEimtwalRcQVdecpCJqqavpn+Ti7KxqpdDIAsxaIi0mJR7c5Sgz7SajHaCYW5sYGlcdGBYcIW7qaeLY3Bvk56ll2NsUk9PS2lpiHdzeWebnbevntKnmIxjc2iRdU4tO2Z0lIyNf5rUwMqkkKCRwJJtSgANFWy4sdSzs3tbj3yVildUVW1QUXKNqI2LZld4hKmxuZtxenelvLWOYFo9RjgtVF+eiHNvbbbN8ujGu4aQhXJkJCYPKVpvn4yQeXypqLOdsayGgFqGstbfoHYuFCE6h6OxmXNwbYyXn52OkmtqYmFzcJx/dWxShpHHy7azb31/lJ5kWS03SkJcTWNtc4dzioGQsqy1n7GhlKiOiVpKVlmSm6CWiZeHoLG6rXl/epd8SlxrsZmFaA8aOozb7uKkh2V8lazDkn1KR01BbnaJhGl+eIWFlLWglmlqdXCNd393W2RVcnmAiX2RcnmNmMPI4cOdj2RsZm5mR0IjMEloenWQhp61rLuhrqWdqH52aX6aj4A0JSdCg6HKpYl1XnyOsLOqm2l0aHCAgKiZknRZbGSLl66uf3lbcYyMoX9xSjVITGxncnhxl5S7v622kJBzbHd1iWppV01qcZ6iqKaElI+QgnSQhZ6ahHFlk527sHVZL09mjayRlWVofouoioxpW2VWbml5goeeeXhxgaWtvJWAcmN3dZONhXJOXkpohYSdjpeBc4OEpaGwsJyoh5iGY1s9VFRdaWR7b3qDi5uMoZWPkYKPZ2NmfLKnpHNJQkuQqs3DiWxNbYGYqpGPZ2RmXnRshouSlW1oYIapq7yViXRsenSGXk9LPVlQdnd7moGMgIuus9O5rpZ5gW2Oi4B1VmVRY3V0j4SgkIaMcZCKnK6qtYNxYGB6haJ8Wj8iTGmmr6mecYWDl5WHiGl2aWNyaoWDnZt6eFx1gJmskJVwam1ti4SVf2VmRF5ge5KWrI6RhX6lr9rOuqBtb1tnYFFcQlpZaXxyiH+cnYygiJuOi5aGnYV5bnGOi6iWgWkzRlqSrJicbnBzhKWespaGeWRwXnZ2gJV4eVdTZ3y0r7aedV9JbXSIm4OKb3N0ZoJ9mZSfoH6LeIeHhJZ+i4B+g2t4ZXiEfZF+j355hnGOhpScjJZ8hXx7jGdwboSZmKl+YEJahqHGrZ95WXx/oJaQlnN8VFRYUHV8rJ15akVgdZ62q7aYlntyioKYfoF+YV5BUmJ7npakiHl8dI+DmJubr5aWd2xmUnl1d2hdbldsaXOGi6+nubOXmH2OjZeUZwA=";var lu="data:audio/wave;base64,UklGRpQ1AABXQVZFZm10IBAAAAABAAEAESsAABErAAABAAgAZGF0YXA1AACAf4B/gH+Af31/en2Bf36AgH+Egn6Bfn2BgYSNjIiKhH5/goF/goWIioaChYWAgYaFgIKCgX15eH1/foKJiYiGgoKCgYSJiYWIioqJhYKEhYWEiIqIhoiJiImMjI2JhISCgH5+gIGAfX1/fn19fnx6enx+enp9f356enx6enp8fn+AgYGAgH55eXh2dnR0dXRydHV1eHl5dnV0dXV4eXx+f35+fX1+f4CBhYWEgoSBfoCBgoKGioyMjo6IgX+Cf36IioaJjIiBgH9+gICAiYaBf4CBfn9/gYB9f399dnh8foCBhIiGgn99fHh4fX9+enV0dXVyeoB+foGAgH9+gISCgoSEhYSAgIKEhYiKioiGgoCEgoGFhoKBhoaIiIaIiIJ/hoV+homFhIWBgYF+fn16eX6CgICBgX9/gYKGhYWGhYF9fnx+fn9+enp6enp5en18fHx+gIB9f4B/foCCgoKAgIJ+fH+EhYmIiIiBf4CBgYSJioiFhIF/goGCiIJ/gn54eHp8foB+fX5/gISEgoGCgYCAgYCAgH9/gICAf4B/gH99fX+AgoKBgH99fX5/gIGBgH19foKIiomJiomGhoiIioqJhoSFhoiJioqJiIaFhoWGhYJ/f4CAgYKBgH9+fX18enp5eHl5enp6enl6enl4enx9fn99fHx8enp4eHh4dnh5enx9enV2dXV4fH+BgYCBgn58foCFhICGioGAiYyGio6NjIiCgoJ9foWJiIWFiIWChIiMiIWGhYGAf4CEf32Af3x6fn5+fn2AgHx6f399goSAhH94eHp4eX18fX98eXx5dXh5enx/fX2Bf35/gIKFiISFhYKBgoaFiYmKjYyMjoyGhYaFhYmMiYaFgYGCgoSCgoGEgoCAf35+fn1+f4B/gYF/f3x8fn16eXh2dnp/hISBgYB8eXp8fHx8enl2dnp9fYCFiIWBfXx9fH+BgoSFgoGGhoiOkZCQjYaEhoqJjI2JiIaEhomKjI6NhoWEgYCBgICEgn+AgIB/fX19fHh4eHp9enx+fXp9f35+fn19fHl4dnV2eHVxcHBxdXh5fX19f39/hIiJhoKCgn92fpGMhYKCgH6CjpSRkIl9cniQlIycoIVxamBkf5GUnJ6GbWRqdICQlJGRgmRdeICAkpiIgXhiYnaBfoKOgm1kanGInZiYmX5YUFlohJ2YkJZ6VlRuho6iqJh8ZWJxiJWippF2am2Coq6omolmXHGJpbCgiIyCXHCWlZGWiHZ8fHiChn55eXh/gIF/hYSChI2ZkoB+ho2WXgotpp5a1f6aKSkNHYy1bsb2bggILHi9+PjFqWgILrDhgri2LgwQEDmeoFZydTotddz99PGYdIw4NanpvnghERYYMXzc5qSJjarBpbTt6oBUiYFoXj0hMUpAbtTQka7IoaLVwLzlkjJFVi4pZoZlZmRSfa2s1fbuqVYaHIj2xKH4oBoFCRxy2u2NkYUZIZr07uzOfh4KDhx+2GkNFBUcRp3p9PSuWY7KuKG5oD0JDQ4eXXiIto1RXrz++fa8cTkNCR5lfzYeXaLA6f70pUkkMHjI0KiadTo2erixnH9lbG5yoNjOpKCSeH6pzcCeYhoegejx5dKZIggOFWbS9LxWTlJJnO7uvUYNDQ0gcqm0fR4QVMb59vS5TQ4IKZrovGw6Ihk9lej6vFk0SlVpuOzOgjkaIkaJxt3FeERansSwpJpxSE2AtM3atXpoaGBsmqmFf5CVnqiQfIaAXXCswLm+oj0IHH3o8O3RgRUFCSiU6u6BChhRcsH86YYUBgkZarKYeU0SJYnx8cqcTBUVOH/NxXJMaYqgyOXEfkAiNnSJmL7ArpiKiIWQkZ2wjlAuRYiytbzNsn5ucnJ8hm1MWX6ZsczKmW1scXaBbklAUn3I+bYiDX3u8anQqRwCBRJp0uxmIH2iXKH61VIFEBIpdJZ2jXowaN7+0pF+PiA1YqTZqkQsaKK95PXOeDgeRJ6thZGKZUFZqNTMur7BjDkSNYiljqnBlVVMZn+YrpVxfYqBnMyxXDo4QILItEUGObD95MTdbQkMEFi88poZLpCIlu7xlBgOGUqixYmKmEQwnfTahFQ8SXaSqtGwTS1syerdvohWLRZCrvHBdWZ1YlR/qpp5epi1nE0+iMKhgIZwQTA2QGWlsYac0cCdnn86KlZqKQpJtvi41PqIFQwlYcHBNRRktqXY9umFMj5ssrBMFSUyNHbZ9taSXXzI1ayZhVIpNXKptqJ2YW56oODhjUI8cbTFsppuNSlktNSgPR1ZrdTh5KZQIhYVKlFiWWyStN325Y0dDVLMuIGyYRASLJLo9pkqToyKtPDRZR0aULjytWJcSi5dxO7FaSxJmbm1vrCATEaKxapiKiRFcbLw9tyOVEAwOGWWpImRwMmweCEGOZSstcKNaY6lfGRqRBIeVJri2FQhjvjWyfSYIAwOIoXGYCRilbbt7vDAaCoobIRCLEpINmKcxtiohbDUwI1iYHFdTX24snpZboiGgYSdsZFuf6SMSC5UmtLZuqJ8MhE5iKCEalp/tsK6sp1sODFMfZFBKY3yyrn6tEkhFVi2lUQmQYymquH0sGmBqNDJdDQtJiEuYJFoOl2e2PLOqJ58aIa+zH0pIj1oiX15fVROkNb1wm5UaZLB0q6CVBYNTZqVdEowUZC+3eK+kGhkjK6mSQoZaqmx9MpoRhlBwuSccCkteIim5rRcRWK98cyIblE5RXKWekEgJWq4vayihH6UyfLplUA4XoiMjI1dKSFBgbWUUVaRwuLu4LlpMlCJqI1JHRw0bJ2SiJWAjdDUtriNZGFARKG5fH9qVWxwjLycdXh4jZR1fpqRhn9wdHVuhaCYhXRgXXGClJZ/WkJWkbm2lWZSbJqtqKaQVjpIZoiRbkxQeqa8tZx+YlZieYqJbVVWYH6hoJSEZm2lwbSddVloeXqFjYJsXXacoJKQlqKmnJGIdWZyiIx8aWBdYn+tybKEeZm1qpqQdk0wOGaRmYBYVIawsbrMpmZRZICZjF5BQkhKZJSsnIJyfqKwno11VUpWanh2ZVllhqrByLSNgpCWlIxuUUVKZIGOjYiUqayioaWZhH6AfXlpWFx0gIaQjIaYraWilHhkaHiAemxmaW15ipCVmIaElZqSjGZNTlRdanZtbXFqeqLAuqaQem1xfHp0XD5AWX2graaRiJmyvLidcFVQVmh8gXx0cHaMqbKZiYqGhpSVgGlZYHSNkHlsdHh6jZmSiYaIiISAdmllaGp1gH12eHqJpKCGfXh0eXZmXl1YWmqGnJyUlp6dlZGMgnlqYWV1hIV6dYCRorbBspaEfHJxdnl8cmJpgI6YnpWOkpGWoJF2ZWVygYR2cXR6gIiUmY2EfnqBiIKBf3J1enR0gYSAhYV5dXyBhYKBfnpycn6GgXZ1gZGVkpaViYKAgoaAdXF0eXx8goiMjZGisaKIfXx+f3ZydXFpYWyGlpacnYl6eX6JjHRZXm1tdH6CgoB8gI6QgXp1aWZweHlxZWJsfISEhIJ0bH2KiYR9cW1yen6Bgnx2dn+VpqGRjZGNhYKBemplZXWFipGgqKihlIqMkYh0amxqbXZ9hpKQlJSNjo2GhYBubHV5fHx4cHR+gomQlIx/eXV5f354cnBpZW5+gYKCf36CiJGclX51eHp/hoV/enBtgJKWmJyalpGMjYyGeWpqdHp+hJKalIqQnKGYjIqGcWRmcHp4bnJ8f4KRoZ6Ienp8gIF5cXFsYWqCioF8eHJyfoiGf3VsaHJ+fX19dG10fYWOkIV/gIiNlJB+dnZ5gYmNioaEhZCeopWGfnV4goiIgX+FiIqUmY2BgH9+hIR8eXl4eoSJf3Z2fYqSioB8en5/fH5+cWhwfISFfHBtdXl8hIV8dHF0fYWGf3JpaHGAiYmCfHp/jJaYjoB2dHmAhYJ/f36AiJWdkoiBgImGgISBeXl/go2VjIGCiYJ/hYJ6eXR2iIZ9hIZ5fo2GgomAdn+CdXB2eXh9f36CgXh5gX52en14eYKFfXl8eX6GiYiKhXp/kJGJiIaCgYSFiIqCeXh+gomRkY2MioaGiYqEenp+eHJ8hIJ9eXyBhYiIioV+fHx6eXh4eXl8gIaGgYKCgYKAenZ0dHBwdHl+f3+CgH19fXqAgn18gYKAgYSEhIJ9f4iKgYGKjIiGiY6VkoV/goB5fIB/fn+BhpKVjo2Kgn1/gX55eHR1fYSJioiBgIaOioWBfXRudHyAgoB8enp8f4SBfnx4dXZ8fXl2eHh6gIF9f4SAfYKIiYiGgoSGgn6Bgn59goWKjYiCiZCJgoKAgIGAfYCFgHx+gH6BiIWFhoF9gIR/eHl9eXV2eX2Af3+FjYyEgoKAfHh2dnhycnqAgYGChIF+fYKEfnp5eH1+eXqCgYCQnHmEjoiKeomMgYF9goKBhYaGgoGFlIZ6eY1/aXiQkHqBf3V0cX6CfISEgYmEeoR1eXRxioWBdXSJf4KFf4yEjYR6hoZ+eX51coGAcHh/fIqAhIB/ioWKhoWMiICFf42QjoKGiJCKgH+JcnKAkImNkoh8mZCNmox+gGxsgm55hG15dXaQhIV4eIKGgX9/gnVudXJwin5/fIF5gYmBiYJyYkVpnZGYonJkbEZOkaCRlnBdfYB6nKGhiG5qfpipoYiMeml2dYWdhGRqcHmSlpqeinRwhp6hmoh9hIGCkYV/fW5mbnZwcXh9gol6aYGAeYKCeX99cn2JfEolcMSgwuR1XXAdJZS0gpRJIFpeTaTeuX9UXp7Y7M2qqngxQXGFon0kJEQ9YKS2zMh+crXc5OTCpZB5bIGspXRROTE9PUp2hXyAhJC+1MHJyZ6IhXVtenRgVkxBQmCCgkIUTaSyzv/MfXIlGXa+kYVVDhgxOnzZ6qFVSXy23uzSuZQ6FEB2jpJMFSgsKmaw0tqhbZTQ7vHs2rqAVV5/kG08JR4iOWqszMi8mIW44dzl6qJtdmhdbmlkZkkuMlydcSlu1sLB/9F8mkgGZrFpel0KGjUwac3uxnZcjLHM4dLApEIJHkFVakodLDApZLbh7MiQnb3J2NrOrW09PVJkVTIcFhYlXqzR1NKseprOyNLllUpMTEFRZmRkUTQqUZShXEKZ7eTk/d6IWBwKSZZ6YkokJDJKluj+3Ix2pMbJ1enWlUQVGkRdXlQ4MjhEes319NqwtMjc5N3VsWk+OkxYSC0dHCg9cLTa3uHElbDazszQklBJQjVBWF5cTDg9UXScpXZFjPHm0fbVaUwmBkaScGJYIB02WqXs9tqNcJSsttjhtoA+ERY+VVxWODQ4Om685fDqxbnJwb7JwaV1SkRAOS4dHTA2QW2gwtXd2sK6xba1wZVgXlA4ODlIXlRGUGF+kJKhcGbR/LnS+I1ZaBoigH1OfVExVFBswODk0pKStZyeyMKif0EiLTw+UGBiXUU+Zp7Q7eji4KyNnJ62yZVhTCwWFiZCYGZVWH+oyOrptrG4iYimhniCWC4uMD1ZWmFpYXaBhbaZSpT0tpr2xmSBSgpUhk6IqVFlYS5sxeHwxZCtknCduL7EeSwqNC1FWmCEdTEucarR7d7a3Jhlf6nBpXZhUDAcHTpuf2RYdIySrsy1obKScJWggY6QXUZMTF5xamZmbHF6lbq0bWLF5pC69o1pfiAgenlduJBWilk2hrrF4ryguIJdgJaorHhVWkEmMlFxiHhhfJiQnr7K3MyUkZh6cnl4gGYwKEBOVVlmjZZxcJKSf5GhnqyhcXGSgmxubGhwTj5lfH+Gfn+arKZ2WZ7WioLmwXyWShZefUySwomkfSlIepC9wrLNmFJgbY6+nH6JZUQ4LkyGkn6FioKBiqHAyrymjn14cGZ1fnV4dF1SUlhdbHSMmpR6bZKUqci2mqqWTFhxYXCBdWZtcFFmkZSWrq2gmHVdeqSSnsWkhX9VSWhoXn2GiY1tYXV0dIqUoLKdiJSUkpyJdoJ9XVZUTV5sYmVpcmhshY2YqKyamY2GiYaEf451TFpYQmR1bYaoiHKNmq66vcKspX9WdXVYeXVpcGh+YoSalKCgqqCYsYmAhnl6hn6FhmlYVlZSbY2KlJh+dI2BeaWqkZKYhoJ6aGxpcGlcen5eYGxxYXqFoqSSmIaCiHx9hnxwfXyAgIl6fo52f4yUhJSicIGhiHGVmHV+f2R+fo1sYI59aZiclqqKfHJxhoKClpB9dWV1cHZ6eZSUZnFmbH+GmpiBhHVaanV/jIh/gG5idXF5loqAloGBiIZ/hIqFeYKJf3B0foCBoJCEommFmZSMnKZ2dXJmeIR9jZltf3p6eH+FlJpqdJJsdIqWioJ5YnJsgIGBhHGFf2p2kWyFimyGeHR/hIBxeoR2dG6JeHF4dYaAipSVfHmZnnSGoXmcdXKFfXqGjJGWgZSCeJWleoCthoGKgIGhlW5+jWp4gH18dX5xcISGeISYiYB/hH6JhIRymn5mgGiGhVV8eVhcf35qfahSepZhlI2QhXmAbW5xiXl5iYRtgYmIeqCAlI6ibYWRcZiMeoCJiYGWcomEiIKMfYyKeIR/kH5/nm56mHx2gX11fXF5dnWCbnmEdHWFcIKGfIp0gH92gn58fXxwdHJthXmBjHSChnZ9nImCkn6RcYGFfo6FhnyZcYqUeZGRkoaJhY1+jIyIhop1iXp9hH6AgXx/eoR6ioSEfoGGfISKeXmFeHWFfIGCfH52en18gXh/dnyAeX+BfH50gHR2gHaAfXl9coJ+foiKhomBhoSEiIp/lYCBjYCBhYyBkH+BioCRhYWIfoaBgn+JgXWGeoZ1hHZ9hnl9gH15iHyAgXqAfnp+hXp+gnZxhnV8hHx/dXmBcHp+eYB/fnaAfG6EfHyEhnyGhYCGgomEgIx/kIaJgYaCiIqFjYaFgoaFio2IiYJ/hoCAiIqCgYSAfoZ+hHyFeHZ+fXyIeX1+foF9hYaAfH19eXl+fHZ6dXV+eX9+eoB5eXx9f39/f3l6gHmAhoCEgICBhYaIgYSFgoKNhIqJgYiChYqFjYyGf4F/foGFf4GBf4F/goWBhX+CiYGJgH+BeIF6dIF9gIJ9goSBf3Z4f3aAfXp9dXxydXZ6fX58enx/f3+FgICBgoCAhH+BgH19eoCFhISJhomMio2KiYmGiomIhoWFhICA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dnB2f4WOkYyBdGlqcXV4eICMkImBhIiMjoV+gH50coaamIx+eIaUkI2NiXxtdIWRmJmKfoGAfH6ChYFybH6VoJyQhYKCeXJ6hYp+bWx2hIyOjIR+dWlocn9/dnBxdHZ/ho2Nhnx0cXF1en1/hIiFhoV/foKIhoqKiIF+hIqQkYB4gH96eH6MgXR9iIqSlpKVlYR8fXhxcmlibYKNkJSQhoCBhYWCgXppbHZ1foaEgYB6dnhyen1wcnl0dYCBgIaFfHR2eHh4gIJ+goiIhomFfnyAhoWBhYqIjZaMhpCFeoiMdXR2bXqFiJielpGOlpWGhIB0cmxlcoWGjJGEgYyJiZWUiHlqcX6BfoSFeXR2eoKCenV4dXWBioqFfnl2dnl8f4GAgISIjpGRkYp+enl4goqEen6EgYiNjpWZkIJ8enVqbH2AfoKGgoWIiIyJgHp4cXB4enl2dHl6dXWAhoR9dnZ6fXl6fnx1dnhxcXl4cm5xen+FiIaFgnx5fH1+fnp4en+FjpWWlY2CgoWGkJGIhYWCgYiMkZmZko2KiYaEhoiEhIiJjJCJhImKgn+Af4KKgnp/hoSAf3+AgYB5dXyEhoCAfnh1dnV4fHZpaG51dn6IiH98fHZ5gYWBf3ZsbHmCiZGViX59foKKjoqEfnZ4fH+CiYmEhIKChYJ/gH98foGEiIh/enp+f35+foCBfHh8hImKhn15eXp6f4KBf315fICCgoJ+eXJxdniAgn59gIWCgoKAgYGBhIJ/fYB/fIGNkIiIiIWJjYqCgoF+foSMio2KhYmIhIaCgH5/gYCCiIl/fYKBfoGIhICFgXh6goSChH96eXZ2fH18eHJ1fX+ChIB8eXRwdHp+fHh2dnqAgYCChIB+f4SGhYSBfn1/hIKIjYyKiYiFiIiAeZKacYGajIp5bIaBdomJgIKUgXWFiIiGdnmJgnxxaHiSmXJwgImKenWJjIaBcHp9cnxxbYSGenp4fYV+gHZ2fnKJjXx5hoZ/gnyGkI19fY2QhX19fX1/ho2NjI6Ien+BhIqVkpKCeHxudoGBfnBuhZKEgXWAkY6GiYV5f4B2bm18gIF2dICEfn59dH+GeX10en9wcHlygY12ZXGGlIx0eIiNhXyFkH96hoF+hH2GhZKVgYWNjZaYiHh9iIqJf3iBipKCfH19jIV4goSAjIGBgX6Bgnl1foF/fHB4f3V6hoF6fIGFfXh+gXx5fISFeGxseIF9fG5xfoR/goV6fIyYiYh+ZHWQjYF4dIWRkYx4f5yQiZCSlYZ9dICWiISFgYF9f42FiY6FgICMjHx5eoGKhXx8gYqVkoiEfXx6eHl1bG51dHp9eXV1gImMioV/goqMhoF9cnR4bWp4fXFmaXyJhYR9dZCkkpSkklAwermtxrBWUIKMhX18flRSfniEsYhQZYKguK6dfG2UpIiRlnFQUFJWbGxZUVZodXyRnJiiqqKksK6ekYJxZmluZl5ZSlRganp9aGJ8mbLIuJWVlZ2lioKBbXqcXRI1ntbW8qhGVmleaZzpxUw2SESJ2qlueIaJiajNyb2waTJKcHBdWEQwOExZdabIvqWywLjByKmRhGZKPEFIPTZAPkRYcJbA4ey+fHictca4eEE5SUkyNGGJlohyldq2OUjG7dnx6YVWQgoOKIbNkGFtNDKMuND07eymXmFVbLGERFY2EBASOICy3cqEpMalveTOuqRsQiolPkxOZV1FUlFQhsDk+vDMsn9GTW56jphsQTlCSliAtMjK0a2EmrmkSS2S6aSq6nU6ZSQKInK0wqykjnWOhHzI8OKqaU44KEJILWacZWF6VWCFiabF1e3BcXh1Tmp/UlVyZFVNRFZmcJGWlsK+kJCOgZR6WnyFdohtQGCQjYSCkqmhlYR+nLaolVkWQrK1lujolIFIChIgZZLB4eDJnFUqQXaqxrq5vHg6LhQRRGp4paKEgmhadGp0tdrh5r16WTogLEh0rKaEdVFAUGB/qL7Y3MK4jkpMdHaKrpqFhm1GOlV9ma25tKmtqolGIl3CvKDo5JaCSgkOFUFpntz04bV1REFNapahtuLAeWFBGRUhMV6UqqaVgWxSTm2gvsjIupp1UUA9SmV0cHmAcnF0fJmmrcG5rqJ0ZYKGhI6AdYaEZlZadJKosaqkpJaGekg1hNSkldK6jYA8DBI4ZniOtsnGrXptcVxtjn+UwKKMjV5ERDIyTlVafpCJgn19iZ2opaGkoph9ZGFgZGlqaWlxeoSOlJaenJWajGp1jIKOmpKZnJGCbW5/enaJkJGZkoJxYF1tZWKizaiRno6EeVhQbImanZJ/dXpaOlJtfKWlhpSSenpuXW6Cf36Bem5maXJ4en2MnJWOhnl/jIJ/jJmajYiOjI6Shn6EioV1aGptcoWJhpWeoJ2Vkol8dGxqeHxycGxweHV1gZSRfYGlrpqVkYySfVFMYGp2fnFiaYCAcXiCkKKUeXp8dHl4bHaSnop+hoR0cXJteJCWiYqNgnp+hoyNlKSilZ6giXp5dHR4eX1/gYZ+cnyBgIaVmZKWlIBwZWFqdXV9iIaGf2pkcoaVlH9sepaReGx0iZFwUlhsfoV/cG2CjXJaYGqAlIl8iKCmloJ9gpGYgmxocnx4bGZxhpSOiZChrKGYmpSMjH5ydXRyeHyCiIWJkY6NkYyIhISIgnh4fG5tcmxpdn59fX6BhYaFgHx9gHx0bWZdWGR+hYKQko6MeGhyfoqRhHZ4dnJ0cnyRoqaYhYWEgH9+hI6ZmYyCenBwfYWIkZmRhn5uaG12f4mWpaidjoSBhIqOjoyMjYF0am12eX6KjYiFfnZ1fIB6dn+BfoCAfXx9enl8go2RjZGSiYaAfIaOkZGEeoKIgX54eoqUiH54dHZ1cXR6hZaUioqGhIB+gH1+gnxtampkZGlxeH1/fX1/gYF8eYGIhHx5enl6eXVwcXl1cHBxdH1/eHV6fX19fXp8fHp+enR+iomJjIiFjY2CgoqFgH+AgIGRoqCVjoqSlI6KgYKBfnx1cXZ/iYSAipGOhYSGhYSCf4GFhIiJgoGFgn58fH5/f4GCfXVxdHZ6fXx/goCAfn1/goWEfH2FioiCgYKGgoCAgoyMiYaCf4CCfXl9gYJ9fYKFgoKFgYaMf4WOgX58eoJ6eoKAhoB5gHp/f3l/gIGEgHp0dHp2enmBjYWBeHJ5en9+fIB/goJ5en1/hYaEhYmKhn56f399f4B+gIiJhH5+gISIiZCOkpmQiYKChYSCen+JhYaIhYJ6fn5/gn6Cf3x9dH1/fYWBf3+AhYF+gIGEgn9+fH19fX12dXh+f3Z4enZ2dXh9f39+fX5+fX+Af3+BgX59eoCFhIKFhoiFhIiJiImJhoSEhIiFgYSAf3p5fX6AgYWIhYSEgoKCfX19enl+eXaAf3x+fH6EhYCAgH+EhX5/gnx8f3l5gYB+gX55eoKEfXl/gX+Afn6EiIWGgYGIhISEgYSJioWGjImJjIqJhYaJioiIjIqGhYKCgH16fHx8foGEgIKGhH14en18fX1+f358fICCgH+ChH+AgHp5enl8enZ4fH15fYB/fnyAgH2BgYCAf39/foGAhYiFhIKIjImIhoiGhISCgoWFhoF/hYmGhYaEhImFf4KCgYF/fH5/eHl+fH6FgXyAfHV9eHF6fnl6fXp5fHx9fX59dnp6dHJ0cnFycG5ydnx8eHp9foCBgISEgH+Af35/hYWChYaJjIiIioqKjY2JiImJiImJiImMhoWIiImNjIiJiIWFiISGhoCAgoSIioiIiYSAfoCEhYGBgX+AgYB/fX1+fXp6fHx5dnh5enp5fX9+f4B/fX+CgoSEgoSCgYKBgYWFgoWJhYWEgIGAfn+AfX2Bfnl/gHx/gYGEhIB/goB8foCAfHl6eHZ4eX2BgH6BgH6AfISIdXF9hnZ5joVxamiJhnR4gYV/dIWNhoR8dXyAf4F8hJKKf3p9jZCBfYiSjYKGioqIgn+GjoaBgn6Bfn2MjX19hoyBeIKIiYF1fJiBbnx/iX+CenF8ioZqgpSAdXp/gYiFcnWAfXh5dnWAjoVpaZaleWZ6mYxkbYGYkG6BnYl8eXGRoImMgYKejHCFiICNgnSAkI52dp6MaHqFhYqEbXKGjHB+mH92fYV+dH96bX2EdHaEfHWBiYB5iYhufoR/eHCBfHSBfXF+fmVwfn99foV8eniEhYiGcnmSjG1+joV6gI2MgYaMjJV9cJSGeZGUiH9/ioWFkHWGpHVhiJF6ho59goZ8boKRfHmOjHJ5hYJ5foGChHpkdpZ5ZnmJfGl5kIZxcnR8jnZhdoV6bHCMjHWAfYyUcmqSmHh0gZGGeYSSioWJgZF/dYyQiHqAnIF1nJGEhXyGlHiAhX6BhYiCdnyQfH2GkJSMdn6GenZ+kohtiI15goB6hYB9coWNYnSYeHGJgnF+iXB4iXl5jolwfpyOdHmUjn56foaReGKJkXqCjJKKdoGQiIJ1fpiAaoCSgnF6jH58gXV/hXJuhYFyiI1/bYGSeXR+goV8cYx/cn14fXV2jnVkeIB+f4R/dIR4aISBdX6JfHWSf2qFjHx6hYyGjpB6hJB9hIiFiIKYjXCElXh8f4SJiIWOkYyAdpGKbXSBfWxseYJ5eoaFiIR9hYZ8fYWAenh9gnl4fn92en18fnp8fH+JenCCgHx+foGGjoV5gox+cYCGfnSEiX6JhoqRjoWGoI16gZKOeniYmZCQhZmSdYCMjIFwlqRsfqJ2doh9gHp5inx5iHF8jnJwhYqJfIGOgImEcYmKcnR4fHheZnZ2bV1pdHWAgHh9hXl+iH96fImIgIKBfoKIeX+AgoZ/dHaChn56iIFxeYWEfXiCgoKgmISAlJRgdLjNpGJuqZpiaX55bVxujo1xYHGYkHWFlJWSlZycmpJ/fo6FbWhubWJaXmZscGVmipZucJaprpWJmZ2ajIGNjHR6iIiFeXB2eW5haoCNf3R+iYqJfHKIjH+AlaWJPiV92pA6pOJtUpylhWpwWUyhuEkkaK2YbYqabYGuhoq5jkxdmaJqQElRVXBmRU51cmWAopV9lbGppaKRjKCoiXmRmIF8gYmJf4B6XXKuonWGlYCQsaWCgaaukZ69smkleOi2NW64WVW5nURVlmkugNiOKDWItZ20mUFu1rRtiZZwWGR/dlVUTDE9gY5MQG18gKWYeYWcoZGQurx4bYmKkIVYTWmOmWRMbVxOmrFqYXl5iLHBjFqJya6NmqCRbi4olfSeLFJWSKrMWC1soW1JksqVSUF8rcLhnilSxtCVjG1RVWiFfVZkZDExfK2Gcn1mcb7szJh/nLG41rxtcYlwdI6GaUZCbX+FhEQ8nNywinBurNrOjV6QxJVmfIyKf14dHYrwii1ZMlHM5nUxYqh4RZndkkRKXWip8qUgKoiusq5tNjZYgHZYbGotLHKdlaadaXSu1dW5naCSgayyfIWIUFR8fW1cYHVwf4lkidnEnq2KerHWuG5ZkaqQfF5VcXxJFUWw4pJkWjJpydGJaH2KYVmVpn51XTJCjsacUFFxeJKuhVlWZWVNQmqFZWBwXGGmzbKUlKCeob7Jmnh9dGqFloRsYGVsZYKhjH55ZIjY7MqecnKkuaqUfHiAeHB5fXl4akIdOab50n+EUTiS1KJ5jKJuLEaQnpSETiY6mNidf5lwWY6ghnp1fWAySYF+hI5eVpnEtKGaqK6kraV0cp6IWWVuan5+bWVmf4ZsYmyBttixgnV+lqaWdVlkjpZuWWFqbm5WPEp6ckqJ3LmJtIkxSYCBfISMfUk4WlxEYZSejY6MaXK51LCeiGFSUGGQkmhVRUBxnZqkrp2WnKrFxLmxlH6CeFlggZiahGJMUHGVhm51bXipvK65sY6QnJaGfoyWgnRyaGBmbWldXn5/STB80cTB5J0+VXFUapmimHRELCg+grKooZp6bIiZlaLAuIRiUkA8XIWJeHJuTkVymazM0rKajIqSlaK0noKAYj5Wf356em1iWFxgVXjB2cXApoCJoJyMf4SRel5aUE5ykn5VSGKBkIpRQZ7mydnslG2MZC08fcTZnlIwJTJheoi94siVclp+yuzRoIFsWkk5QlxqdGhAOlhqhqSoudTGqo1weJCapZlsVUo2LC5KhaKJbUY1XpGoxdStkYRdQU6AqqKIdl5UboF2dm50jYJ8gHRsWlSS2dXe9bVuakoyWYmorIVwXTUyVWh/ueThybWSaXSouK6umGlEJhUaNXGikoCAbnKZqqy5vryslJaZdml5cGVycFhBQGF5eI2JXmiRjIWVlJGWlopxaIihlY2UkYF1dXRlcZiafW1wdoScml1AktmuuuiaaJBhHSxhnsCafnZIPmlubJzG0cmujHBxgHZwhIyFeE4pICZJen+Bnp6VjGxihbTY2bWiiFZKUURSiaKNZD5FWnakpYCOpY1+fnV2kq6xmISQkX2AjZGcqKF/VlJ4lIR1dnR6f3JlcpSoeVmSspbC6ZVif1IkPmqOsKKBZUVMbXF4ory1sJ1qUWV1doSQhHhgPiwuSICimJ2hhnh9hJy8yMGkfXBmVl5ygp2woH5cVWpxgrG5npmIXlVico6ekY6Abn9/eZaompmhkHJicYWIkJBsUVhJQV51ja6okoFxcVpIkM2lst6MPkUuKV6Nqb6VcWE2KFWIrM3QsIpqXmaCqsHCtJJpRTRBaX+Mmox4cW12iJKqxrWVjIqNlJSRlpiOemhgWWB6hn1qWlRhcoCkuqCEgXFZZYKVoa2miHFoaXaGgXh5dGVWTVZxeXV6cnF9eXJ/lKq5tqCBdHZsVHC60bG0nkwxVmBqpLmhjGpOSVR+sbmxspRqaH2Jnbq2lXFVRUhddpSehWxSRF6Flqm2oYyEdnaKnqWchnVsamZkaXh/fXZqZWlsdYWEgJKglYqIgHh1fpGdnZSFfn55eIWQlJJ+bXBwcX6Ef4iNhIB/fIWSjYqOiISKjoh/fYqRgXFdTXWxoH2aiEpUcV52rpptYlphfomJlo18dm50kKWdkYZ0anFuZW51aGRpZXSMiYaNjpmhnqKpnpWShoSNjoiCfnJwfH59hIV8dXBofqKckZqIbYCUhoqamZCEeHJxdoJ/cGlxeHl/hX58fnZtfYqFhoV6dHBueYB2dHZ8fn56dHR+gYB+f4aGgoV/eIWVkISJkY15aIGgkIKckmRgeoCGkoZ2gJCJfYWOhYB8cXyVmo6IgH2Af3h9hIB4bmx6gXyBiYB4eoCGjIyFf3Z4f3Z1f3x1eHJueoF/goaBgoWEjJSFgYp+eomCcn2FfoiOiX94iZyShoqIiJGJfH5+fYKAenZ4gYiCfYCBf35+gH5+hoR1bnh/gYV/eYCJiYaIhoaAfX95cXZ4dXZ4enp0eH99eYCGhYSAfoGEgH6BhIJ9gI2IgY6Vhn5/gIiJgH9+eHmBgoGAfoCEgoaRlJKOgIGFfYGMhHp+fXV4fn9/eXyAf4B+gIqGhISCgoSFgoJ/fn+AdmxxenxycXh8eXx9eX2CgoaIgoGGhH2AhYSBfYGCgIGFhoaEhIaGfnqAiYyGgoKEgoiJhYCEiYh9dn6Cfn5+fX9/eXh6enx/gH98fIB+fX19goaEgYB4dX2FiIaEgHp2dXh9gYWEgHx4fH1/goF/goF8fYCCgoaJiYmGjI6JiY2NkZWOjox/fYyJfX5/fn55fIWIhoWFiIaBgIKBgIWEgXx4enx4eX99goR9fX56eX19fX99eXp4dn1/f35+fnp1dnp4dXZ4enx8gIF6fYKEgoSChIqGhIqMiIiEgIGBgYqMhIWJhoKEiIiCgoKBgoB/hYZ+fYKCgYF8eISIfX59fIB/enyAfX6Fgn18fYB+f4CAhH99f4F+dXx9cXV/fn5+enl6foF9fISCfn+AjYh8hYZ+goKElpV+hZGBcIaaeHmQjox+ip6AcIB4cImIfpKFfX2JeHGBiHyJgW6RbVqRcXGVf3mleWyZanWZcYKYaHGFWn+FWqCAZIVxaYp5cp1wjJZxjolqiYSBfoCKlXiYkXiSjXaWf4aZlJSZiop+foaCfZKJgZVwdKlsephwgI1meZxpfI1ilnplmmh6iGKBgnR/fXiAcXh8cnJ9dICFcn5+dIFignptiXJ5cH19co1+dYGAgniNeISQf3qMfYGafIqcdImUfpiRfpyChJ10hal2mKFumZxqnIxynXh+lX15lnyCmnWEpVqImVSEmVqlhFymhGqoZHqVZXl+aIlweXF0hmF5hWGFgF6OjF2NhmSJgm2UeHSNhoCOdYGIdHyOfnyFjXSQhm6WgnSNf3mRgnyNdniGcH6CcYKMcYCMbYqEcYx6bJF9doWBen+BeYCGZZR9ZZWEaZV5bIR8eoB1gXZsinB1jHx+f4iGfZGKdJmCaaCAeJxyiJl0lZJ8mIl+lomBlYSKjYSOiICIiH+FgoCEf3yCjnR6jXx8inp9hoF2go16foB/iIiIf3iCdnF+f3J6emh8fHaEdnZ6cXiIeXiCgHqAeH6Cen2FfHyCgYmFgJqIhpWAgZCChYZ6gH6BjX2Bin+ChoqRf32JeXSGfn2BdoWGeYKAfYWCfIJ6fH96iHp4hHp6gXl/hHx9gH6AeH2CdH+FdH2IdHaFeXmEgXiAf3+CiYWBhoJ/jpSCiYqBiIh+jY5/hIWFjX6FjXyAgYCGgoGBiX5+hISEgoJ+fnp6hn6BiX+Agnl9enZ5gn8=";var cu="data:audio/mpeg;base64,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+J0yDesnSfsTZkHN5NkIBUEGZSGkUBpA45kmfmiuGEJmkRF1TKmjxFDAMQdrPNiMEtMK8Cok3ogkGmxKnWgBgYxGE6rsDIBCtMSgMqcbQtoadQZAe2Q2GswtKWfMs1colKt4VQIRhQ0qMkTBfsv4iQEEAEQaHViYSresZdbK3ZfuT0s3SkI6hCMzqjjxYz9cMHHTQmc6GmI4YOsDKB5/TaCkHkgHoDZBcEVDAppigfE1GzSYAIDWQVkGBhZZPMHRBVAwyguOcIrOUrxI8xAATEEJBZccBEAw6QJmgEg1WkSAhGbSaLTB5qlSYMWxIv0Ig8XfZpphSphRpdcLhxwKCiBQNWgTDFhlqzqNiz2qr0uSqloGBI/Igs+BRyaMbAI5NlXiYnFCMywMMLXDFxgxIOHSQ//7cMTgg880lzAN6waKaJPkwc1lqSkEPWOxEELZAAIZ0ZzBj3goWYwhgOPoZAigwu+FlxAkQqoIjNBF7BlsSNN846MzMRC6IOEGEzsTambRZxoMENYhE8rmbCX1IADLMBAYFMNVBa6ApE4wAwOgZRrITTRCyCjxiGmWE3yC5YFSzXfMsRca9OU8ajSQDxMeYm4xTCKTIUHxBoAyeZg/hxGNCMSY5w45geg1PbDJhBlhmNcB8YI4GxgigrTEWNcS2Mm4fEASGTZ/SrM0yJ83UGgwQXw0/WgwTJQ0bUCJRKLG6YmHqaWGrrHmWikGe49GHBGmPwemCwc1aXkAmGAPGyyVGkYbjQBmSQTGEoyGQ4wGKSZmVaVGgY3RmGktVbYANUwJNURxMaEYMDwwMBwBMXASMwnJMqUaNCz/+3LE6IPR5J0mDedNSkmUJEK3kAH2M4TWMFhLMTAtR1UpcyjxxeZqGHct8HgRh1VTN5EsLjXYt5QoMAR0WOqCt/4PNALXvBY/Ci9Cv5R4XIipQFRpL6SWSnVuCD////4tb1rr2rr//1rl69o+fRoL2717R8zPn1z+IMS5nG6GpJauBvEFISdMQ5idIU1mizAX5ad/1A0VDQic8S2eJToied/TO56InlVBQGioaER3/+CpYOiVbhFb0iIOgqEgZkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7cMTqAB6grwYZ7oABjxSQB4DwAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=";var hu="data:audio/mpeg;base64,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";var uu="data:audio/mpeg;base64,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AAQMyUnHk4eNB4WIiMyAFLpPqMgDAm5tqOhDwlzE6J5bta3ZvNlYEroJkRjQcY0Ejo4DAEoHk9zTgAIAJAdAHf/7csTqg5H0nTBObyHKaxOmhb1tODRlVINCJEtNDLAMZcSC1Z0WDI1aZcNK9AAPqCGqHnIxzGCWl2AUwUCh4EBAEPAYsHMgBBuJEsgMiFDJ0szT0OGhQ2FOTtDLms2MKOFDBEjiyc3wEIwM2komACExQNXOrEnpDI0AhQLKwEVBzBgAKACQbZWbRLt641UAMAMrWPxZMuQNqpGkwGcEBQeZJkmhEweFSCJRdNYFBkGj17DoeCg4RDQYKL/kqzyYOSaL7q2BQCMFDy3hhQUNBZQWvO+4AAigFGhAxQtBgWYm2CxWYCpg5rMDFB4aFCcPTAsZGmKoFhDgQw0cQL9F4zFRAUDgMJAo7MID1wopNwBIAkCxmrBLUwqAJWwba7frUrkgAAIQBgEAG+7xr54K3ZvqebPlGOnRxKga//twxOeDkhCfPk3nacpHE+eFvGz5OKAApFgAxAHNbBwUkmRrZkACTJgUOjIlIxMINIIwuZGPEhkBqWBUVNRo9FSVDKGgEqmHhQcIGJHJpaIaKkGlI5nR6ZAIpWg5IO1YTahkHJpIVmgLY1Lgx+M9qxERFYCaidmQHB1LYZCFlyQIXnEqxq5oAl4x0wMLEBkFXmKBcDWzIBUZAyzSNj8Q6Y4JhQXUVHQO5KqPX///P////u8rty37Yg7kOf///////////u/G5e7kYlkPxuX///////////////SUlinp86Skwp7f//AgYB8CBgHwIc////6AfAgYB8CBgHwIGExBTUUKAAAAACoDdFtE1LisF+Mp/QnoJkASgAkAUg3SwtiigHMaSHRsvXr1iQ5DkONItwtwR4HMPSoYrP/7csToABJsnzpVrYAEAqfmjzewAChpbRbQ1IR0W4lyqXJBRCQcoOUJCZUM5SclxUM0JXRdZgvVarVarXz58+fWCgkFBQUFCgoKCgkFBQUFyCgo78QUF/8gr////4QUTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//twxK6D0DydNVz3gAgAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==";var sr={"Warning! Warning! Warning!":{src:au,mp3:cu,duration:1.693},"Danger, danger!":{src:ou,mp3:hu,duration:.984},"That does not compute.":{src:lu,mp3:uu,duration:1.241}},rr=Object.keys(sr).map(i=>({text:i,kind:"tv"}));function R0(i){let t=atob(i.slice(i.indexOf(",")+1)),e=Uint8Array.from(t,u=>u.charCodeAt(0)),n=new DataView(e.buffer),s=u=>String.fromCharCode(...e.subarray(u,u+4));if(e.length<44||s(0)!=="RIFF"||s(8)!=="WAVE")throw Error("Invalid WAV header");let r,a,o;for(let u=12;u+8<=e.length;){let f=s(u),h=n.getUint32(u+4,!0),d=u+8;if(d+h>e.length)throw Error("Truncated WAV chunk");if(f==="fmt "){if(h<16)throw Error("Invalid PCM format");r={codec:n.getUint16(d,!0),channels:n.getUint16(d+2,!0),sampleRate:n.getUint32(d+4,!0),align:n.getUint16(d+12,!0),bits:n.getUint16(d+14,!0)}}f==="data"&&(a=d,o=h),u=d+h+h%2}if(!r||a===void 0||r.codec!==1||![8,16].includes(r.bits)||r.channels<1||r.channels>2||r.sampleRate<8e3||r.sampleRate>96e3||r.align!==r.channels*r.bits/8)throw Error("Unsupported PCM layout");let l=Math.floor(o/r.align),c=Array.from({length:r.channels},()=>new Float32Array(l));for(let u=0;u<l;u++)for(let f=0;f<r.channels;f++){let h=a+u*r.align+f*(r.bits/8);c[f][u]=r.bits===8?(e[h]-128)/128:n.getInt16(h,!0)/32768}return{channels:c,sampleRate:r.sampleRate,duration:l/r.sampleRate}}function C0(i,t){let e=i.createBuffer(t.channels.length,t.channels[0].length,t.sampleRate);return t.channels.forEach((n,s)=>e.getChannelData(s).set(n)),e}var mo=class{constructor(t=window){this.env=t,this.serial=0,this.cache=new Map}async play(t,e={}){this.stop();let n=this.serial,s=()=>this.serial===n,r=o=>{s()&&e.onError?.(o)},a=this.env.AudioContext||this.env.webkitAudioContext;if(!a){this.playMedia(t,e,n);return}try{(!this.context||this.context.state==="closed")&&(this.context=new a({latencyHint:"interactive"}));let o=this.context,l=o.state==="running"?Promise.resolve():o.resume(),c;try{await Promise.race([l,new Promise((d,g)=>{c=setTimeout(()=>g(Error("Audio activation timed out")),1800)})])}finally{clearTimeout(c)}if(!s())return;if(o.state!=="running")throw Error("Audio is suspended by this browser");let u=this.cache.get(t.src);u||(u=C0(o,R0(t.src)),this.cache.set(t.src,u));let f=o.createBufferSource(),h=o.createGain();f.buffer=u,h.gain.value=.85,f.connect(h),h.connect(o.destination),this.source=f,this.gain=h,f.onended=()=>{f.disconnect(),h.disconnect(),s()&&(this.source=null,this.gain=null,e.onEnd?.())},f.start(),e.onStart?.("pcm")}catch(o){s()&&this.playMedia(t,{...e,onError:l=>r(Error(`${o.message}; ${l.message}`))},n)}}playMedia(t,e,n){if(n!==this.serial)return;let s=()=>n===this.serial,r=a=>{s()&&e.onError?.(a instanceof Error?a:Error("MP3 playback failed"))};try{let a=new this.env.Audio(t.mp3);this.media=a,a.preload="auto",a.volume=.85,a.onplaying=()=>{clearTimeout(this.mediaTimer),s()&&e.onStart?.("mp3")},a.onended=()=>{clearTimeout(this.mediaTimer),s()&&(this.media=null,e.onEnd?.())},a.onerror=()=>{clearTimeout(this.mediaTimer),r(Error(`MP3 playback failed${a.error?.code?" (code "+a.error.code+")":""}`))},this.mediaTimer=setTimeout(()=>r(Error("No audio playback confirmation")),3500),a.play()?.catch(l=>{clearTimeout(this.mediaTimer),r(l)})}catch(a){clearTimeout(this.mediaTimer),r(a)}}stop(){if(this.serial++,clearTimeout(this.mediaTimer),this.source){this.source.onended=null;try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}this.gain?.disconnect(),this.gain=null,this.media&&(this.media.onplaying=null,this.media.onended=null,this.media.onerror=null,this.media.pause(),this.media=null)}dispose(){this.stop(),this.context?.close()?.catch(()=>{}),this.context=null,this.cache.clear()}};var Xl=class extends HTMLElement{static get observedAttributes(){return["for"]}constructor(){super(),this.attachShadow({mode:"open"}),this.open=!1,this.position=null}connectedCallback(){if(this.abort)return;this.abort=new AbortController;let t=this.abort.signal,e=(n,s,r)=>n.addEventListener(s,r,{signal:this.abort.signal});this.shadowRoot.innerHTML=`<style>
      :host{position:fixed;left:16px;bottom:16px;z-index:var(--b9-remote-z-index,1200);display:block;width:236px;max-width:calc(100vw - 24px);font:13px/1.4 Arial,Helvetica,sans-serif;color:#2b363c;color-scheme:light}
      :host([hidden]){display:none!important}*{box-sizing:border-box}button{font:inherit;color:inherit;cursor:pointer}button:focus-visible,.grip:focus-visible{outline:2px solid #aa4031;outline-offset:3px}button:disabled{cursor:default;opacity:.5}
      .launcher{display:flex;align-items:center;gap:9px;min-height:44px;padding:10px 15px;border:1px solid #cac7bd;border-radius:24px;background:#f7f4ed;box-shadow:0 3px 14px #0002;touch-action:none;user-select:none}
      .dot{width:8px;height:8px;border-radius:50%;background:#a63e31}.label{font-size:12px;font-weight:600}.panel{margin-top:8px;border:1px solid #cecac0;border-radius:14px;background:#f7f4ed;box-shadow:0 8px 32px #18282b26;overflow:auto;max-height:calc(100dvh - 84px)}[hidden]{display:none!important}
      header{display:flex;align-items:center;justify-content:space-between;padding:5px 8px 5px 14px;border-bottom:1px solid #ddd8ce}.grip{flex:1;padding:10px 0;font-size:10px;letter-spacing:.12em;cursor:grab;touch-action:none;user-select:none}.grip:active{cursor:grabbing}.close{border:0;background:none;width:34px;height:34px;border-radius:6px;font-size:20px}
      .body{padding:12px}.actions{display:grid;grid-template-columns:1fr 1fr;gap:7px}.actions button{border:1px solid #d1cdc3;border-radius:7px;background:#fffdf7;min-height:38px;padding:7px 5px;font-size:12px}.actions button:hover{border-color:#ae5a48}.actions button[aria-pressed=true]{background:#e8e4d9;border-color:#a8a397}.actions .accent{color:#97402f}
      .status{font-size:11px;color:#637075;margin:11px 0 0;min-height:16px}.hint{font-size:10px;color:#7b827f;margin:4px 0 0}.close:hover{background:#e9e4d9}
      .about-toggle{margin-top:10px;width:100%;min-height:34px;padding:6px 9px;border:1px solid #d1cdc3;border-radius:7px;background:transparent;font-size:11px;text-align:left}.about-toggle::after{content:'+';float:right}.about-toggle[aria-expanded=true]::after{content:'\u2212'}.about{margin-top:10px;padding-top:10px;border-top:1px solid #ddd8ce;font-size:12px;color:#59686c}.about p{margin:0 0 8px}.about p:last-child{margin:0;font-size:11px}.about strong{color:#33464c}
      .soundbites{margin-top:10px;border:1px solid #d1cdc3;border-radius:7px;font-size:11px}.soundbites summary{cursor:pointer;padding:9px}.soundbody{padding:0 9px 10px}.soundbody select{width:100%;min-height:36px;font:12px Arial;background:#fffdf7;border:1px solid #d1cdc3;border-radius:5px;color:inherit}.soundbody button{margin-top:7px;min-height:34px;width:100%;border:1px solid #d1cdc3;border-radius:5px;background:#fffdf7}.soundbody label{display:flex;align-items:center;gap:6px;margin-top:9px}.soundbody input{accent-color:#a63e31}.sound-note{font-size:10px;line-height:1.4;color:#637075;margin:7px 0}.soundbody select:focus-visible,.soundbites summary:focus-visible{outline:2px solid #aa4031;outline-offset:2px}
      @media print{:host{display:none!important}}
    </style>
    <button class="launcher" aria-label="Open B-9 remote" aria-expanded="false" aria-controls="controls" title="B-9 remote \xB7 drag to move"><span class="dot" aria-hidden="true"></span><span class="label">B-9 remote</span></button>
    <section class="panel" id="controls" aria-label="B-9 remote controls" hidden>
      <header><div class="grip" role="button" tabindex="0" aria-label="Move remote: drag or use arrow keys; Home resets position" title="Drag to move \xB7 arrow keys also work">\u283F &nbsp; ROBOT CONTROL</div><button class="close" aria-label="Close remote">\xD7</button></header>
      <div class="body"><div class="actions">
        <button data-action="roam">Start roaming</button><button data-action="voice" aria-pressed="false">Sound: off</button>
        <button data-action="greet">Face & wave</button><button class="accent" data-action="warn">Warning!</button>
        <button data-action="retract">Retract head</button><button data-action="raise">Restore head</button>
        <button data-action="left" aria-label="Turn robot left">\u21B6 Turn left</button><button data-action="right" aria-label="Turn robot right">Turn right \u21B7</button>
        <button data-action="motion">Pause motion</button><button data-action="visible">Hide robot</button>
      </div><details class="soundbites"><summary>Soundbites</summary><div class="soundbody"><select aria-label="Choose a Robot soundbite"></select><button data-action="say">Say it</button><p class="sound-note"></p><label><input class="routine" type="checkbox">Occasional lines</label></div></details><button class="about-toggle" aria-expanded="false" aria-controls="about">About me</button><section class="about" id="about" aria-label="About B-9" hidden><p>I'm B-9, a fan-made companion inspired by the Robot from the original <em>Lost in Space</em>. I roam, wave, and keep an eye out for danger.</p><p><strong>Built with</strong> JavaScript, Web Components, SVG and Web Audio. Optional 3D uses Three.js.</p></section><p class="status" role="status">Connecting to Robot\u2026</p><p class="hint">Drag the top bar to move this remote.</p></div>
    </section>`,this.launcher=this.shadowRoot.querySelector(".launcher"),this.panel=this.shadowRoot.querySelector(".panel"),this.quote=this.shadowRoot.querySelector(".soundbody select");for(let n of rr){let s=document.createElement("option");s.value=n.text,s.textContent=n.text,this.quote.append(s)}e(this.quote,"change",()=>this.sync()),e(this.shadowRoot.querySelector(".routine"),"change",n=>this.robot?.setRoutine(n.target.checked)),e(this.shadowRoot.querySelector(".soundbites"),"toggle",()=>this.clampPosition()),e(this.shadowRoot.querySelector(".about-toggle"),"click",()=>this.setAbout(this.shadowRoot.querySelector(".about").hidden)),e(this.launcher,"click",()=>{if(this.suppressClick){this.suppressClick=!1;return}this.robot&&(this.robot.hidden||this.robot.mode==="exiting")?(this.setOpen(!1),this.robot.show()):this.setOpen(!this.open)}),e(this.shadowRoot.querySelector(".close"),"click",()=>this.setOpen(!1,!0)),e(this.shadowRoot,"click",n=>{let s=n.target.closest("[data-action]")?.dataset.action;s&&this.act(s)}),e(this.shadowRoot,"keydown",n=>{n.key==="Escape"&&this.open&&(n.preventDefault(),n.stopPropagation(),this.setOpen(!1,!0))}),e(document,"pointerdown",n=>{this.open&&!n.composedPath().includes(this)&&this.setOpen(!1)}),e(document,"robotstatechange",n=>{n.target===this.robot&&this.sync()}),e(window,"resize",()=>this.clampPosition());for(let n of[this.launcher,this.shadowRoot.querySelector(".grip")]){e(n,"pointerdown",r=>{if(r.button!==0)return;let a=this.getBoundingClientRect();this.suppressClick=!1,this.drag={id:r.pointerId,x:r.clientX,y:r.clientY,left:a.left,top:a.top,moved:!1},n.setPointerCapture(r.pointerId)}),e(n,"pointermove",r=>{let a=this.drag;!a||r.pointerId!==a.id||(a.moved||=Math.hypot(r.clientX-a.x,r.clientY-a.y)>5,a.moved&&(this.position={x:a.left+r.clientX-a.x,y:a.top+r.clientY-a.y},this.clampPosition()))});let s=r=>{this.drag?.id===r.pointerId&&(this.suppressClick=this.drag.moved,this.drag=null,n.hasPointerCapture(r.pointerId)&&n.releasePointerCapture(r.pointerId))};e(n,"pointerup",s),e(n,"pointercancel",s),e(n,"lostpointercapture",s)}e(this.shadowRoot.querySelector(".grip"),"keydown",n=>{if(n.key==="Home"){n.preventDefault(),this.position=null,this.style.left="",this.style.top="",this.style.bottom="";return}let s={ArrowLeft:[-20,0],ArrowRight:[20,0],ArrowUp:[0,-20],ArrowDown:[0,20]}[n.key];if(!s)return;n.preventDefault();let r=this.getBoundingClientRect();this.position={x:r.left+s[0],y:r.top+s[1]},this.clampPosition()}),this.setOpen(this.open),this.connect(),customElements.whenDefined("b9-companion").then(()=>{!t.aborted&&this.isConnected&&this.connect()})}disconnectedCallback(){this.abort?.abort(),this.abort=null,this.stopWaitingForRobot(),this.drag=null,this.robot=null}attributeChangedCallback(){this.abort&&this.connect()}connect(){if(!this.isConnected||!this.abort)return;let t=this.getAttribute("for");this.robot=t?this.ownerDocument.getElementById(t):this.ownerDocument.querySelector("b9-companion"),typeof this.robot?.debugState!="function"&&(this.robot=null),this.sync(),this.robot?this.stopWaitingForRobot():this.targetObserver||(this.targetObserver=new MutationObserver(()=>this.connect()),this.targetObserver.observe(this.ownerDocument,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["id"]}))}stopWaitingForRobot(){this.targetObserver?.disconnect(),this.targetObserver=null}setAbout(t){this.shadowRoot.querySelector(".about").hidden=!t,this.shadowRoot.querySelector(".about-toggle").setAttribute("aria-expanded",String(!!t)),this.clampPosition()}showAbout(){this.setOpen(!0),this.setAbout(!0)}setOpen(t,e=!1){this.open=!!t,this.panel.hidden=!this.open,this.open||this.setAbout(!1),this.syncLauncher(),this.style.width=this.open?"236px":"max-content",this.clampPosition(),e&&this.launcher.focus()}syncLauncher(){let t=this.robot&&(this.robot.hidden||this.robot.mode==="exiting");this.launcher.querySelector(".label").textContent=t?"Meet B-9":"B-9 remote",this.launcher.setAttribute("aria-label",t?"Meet B-9":`${this.open?"Close":"Open"} B-9 remote`),this.launcher.title=t?"Meet B-9 \xB7 drag to move":"B-9 remote \xB7 drag to move",t?(this.launcher.removeAttribute("aria-expanded"),this.launcher.removeAttribute("aria-controls")):(this.launcher.setAttribute("aria-expanded",String(this.open)),this.launcher.setAttribute("aria-controls","controls"))}clampPosition(){if(!this.position)return;let t=this.getBoundingClientRect();this.position.x=Math.max(12,Math.min(this.position.x,innerWidth-t.width-12)),this.position.y=Math.max(12,Math.min(this.position.y,innerHeight-t.height-12)),this.style.left=this.position.x+"px",this.style.top=this.position.y+"px",this.style.bottom="auto"}act(t){let e=this.robot;if(e){switch(t){case"roam":e.mode==="patrol"||e.resumeAt!==null?e.park(!1):(e.setMotion(!0),e.patrol({keepPosition:!0}));break;case"voice":e.setVoice(!e.voiceEnabled),e.voiceEnabled&&!e.hidden&&!["entering","exiting"].includes(e.mode)&&e.warn();break;case"greet":e.greet();break;case"warn":e.warn();break;case"say":e.warn(this.quote.value);break;case"retract":e.retractHead();break;case"raise":e.restoreHead();break;case"left":e.turn(-90);break;case"right":e.turn(90);break;case"motion":e.setMotion(!e.motionAllowed);break;case"visible":e.hidden||e.mode==="exiting"?e.show():e.hide();break}this.sync()}}sync(){if(!this.panel)return;let t=this.shadowRoot.querySelector(".status");if(this.shadowRoot.querySelectorAll("[data-action]").forEach(u=>u.disabled=!this.robot),this.quote.disabled=!this.robot,this.shadowRoot.querySelector(".routine").disabled=!this.robot,!this.robot){this.syncLauncher(),t.textContent="Robot not found. Check the remote\u2019s \u201Cfor\u201D ID.";return}let n=this.robot,s=n.debugState(),r=u=>this.shadowRoot.querySelector(`[data-action="${u}"]`);n.hidden&&!this.wasHidden&&this.setOpen(!1),this.wasHidden=n.hidden,this.syncLauncher(),r("roam").textContent=s.mode==="patrol"||s.resumePending?"Park here":"Start roaming",r("voice").textContent=s.voice?"Sound: on":"Sound: off",r("voice").setAttribute("aria-pressed",String(s.voice)),r("motion").textContent=s.motionAllowed?"Pause motion":"Allow motion",r("visible").textContent=n.hidden||s.mode==="exiting"?"Show robot":"Hide robot";for(let u of["greet","retract","raise"])r(u).disabled=!s.motionAllowed;let a=n.hidden||["entering","exiting"].includes(s.mode);if(a)for(let u of["roam","greet","warn","say","retract","raise","left","right"])r(u).disabled=!0;let o=this.shadowRoot.querySelector(".routine");o.checked=n.routine,o.disabled=a,this.shadowRoot.querySelector(".sound-note").textContent=`Original TV recording \xB7 ${s.voice?"sound enabled":"captions only until Sound is on"}`;let l=n.hidden?"Ready to meet B-9":s.mode==="entering"?"Rolling in":s.mode==="exiting"?"Rolling away":s.motionAllowed?s.resumePending?"Resumes shortly":s.introduction?"Hello!":s.greeting?"Facing & waving":s.retracting?"Head retracted":s.mode==="patrol"?"Roaming":"Parked":"Motion paused",c=s.voice&&s.audioError?"Voice unavailable \xB7 captions remain active":`${l} \xB7 ${s.voice?"sound on":"muted"}`;t.textContent!==c&&(t.textContent=c)}};customElements.get("b9-remote")||customElements.define("b9-remote",Xl);var go=rr.map(i=>i.text),Yl=class extends HTMLElement{static get observedAttributes(){return["size"]}constructor(){super(),this.attachShadow({mode:"open"}),this.motion=matchMedia("(prefers-reduced-motion: reduce)"),this.mode="parked",this.voiceEnabled=!1,this.routine=!1,this.phase=0,this.direction=-1,this.verticalDirection=1,this.departure=null,this.entrance=null,this.returnPosition=null,this.entrySide=-1,this.warningUntil=0,this.nextQuote=18,this.quoteIndex=0,this.yaw=0,this.targetYaw=0,this.turnPhase=0,this.x=0,this.y=0,this.docked=!0,this.elapsed=0,this.motionOverride=null,this.waveUntil=0,this.bobUntil=0,this.renderMode="compatibility",this.voiceMode="tv",this.greetings=!0,this.nextGreeting=7,this.greeting=null,this.resumeAt=null,this.retraction=null,this.restoration=null,this.helloUntil=0,this.nextRetraction=15+Math.random()*15}connectedCallback(){if(this.abort)return;!this.introduced&&!this.hasAttribute("parked")&&!this.hasAttribute("autostart")&&(this.hidden=!0),this.abort=new AbortController;let t=(n,s,r)=>n.addEventListener(s,r,{signal:this.abort.signal});this.shadowRoot.innerHTML=`<style>
      :host{position:fixed;left:0;top:0;z-index:1000;width:var(--b9-size,300px);height:var(--b9-size,300px);pointer-events:none;isolation:isolate;font-family:Arial,sans-serif}
      :host([hidden]){display:none!important}*{box-sizing:border-box}.figure{position:absolute;inset:6% 18% 8%;background:none;border:0;padding:0;width:64%;height:86%;pointer-events:auto;touch-action:none;cursor:grab;color:inherit}.figure:active{cursor:grabbing}.figure:focus-visible{outline:2px solid #bf4934;border-radius:18px}.figure[data-pointer-focus]:focus-visible{outline:none}
      canvas,.compatibility,.compatibility svg{width:100%;height:100%;display:block;pointer-events:none}canvas[hidden],.compatibility[hidden]{display:none}.close{position:absolute;right:8%;top:5%;width:26px;height:26px;border:1px solid #7777;background:#f7f4eddd;color:#313c41;border-radius:50%;font:18px Arial;pointer-events:auto;cursor:pointer;opacity:0;transition:opacity .12s ease}
      :host(:hover) .close,.figure:focus-visible ~ .close,.close:focus-visible{opacity:1}.close:focus-visible{outline:2px solid #bf4934;outline-offset:2px}
      :host([departing]) .figure,:host([departing]) .close{pointer-events:none}:host([departing]) .close{opacity:0}
      :host([arriving]) .figure{pointer-events:none}
      @media(prefers-reduced-motion:reduce){.close{transition:none}}
      .bubble{position:absolute;bottom:93%;left:0;width:210px;padding:13px 16px;background:#faf7ef;color:#303b42;border:1px solid #d9d0c3;border-radius:12px;box-shadow:0 5px 24px #0002;line-height:1.4;font-size:14px;pointer-events:none}.bubble[hidden]{display:none}.bubble small{display:block;font:9px monospace;letter-spacing:.15em;color:#9a4431;margin-bottom:5px}
      .error{position:absolute;bottom:0;left:12%;right:12%;background:#fcf5eb;color:#503b2a;font:11px/1.4 Arial;padding:8px;border-radius:6px}.error[hidden]{display:none}
      @media print{:host{display:none!important}}
    </style><canvas aria-hidden="true" hidden></canvas><div class="compatibility">${su()}</div><button class="figure" aria-label="B-9 Robot: click for a warning or drag to reposition"></button><button class="close" aria-label="Hide Robot" title="Hide Robot">\xD7</button><div class="bubble" role="status" hidden><small>ENVIRONMENTAL CONTROL ROBOT</small><span></span></div><div class="error" hidden></div>`,this.canvas=this.shadowRoot.querySelector("canvas"),this.figure=this.shadowRoot.querySelector(".figure"),this.bubble=this.shadowRoot.querySelector(".bubble"),this.caption=this.bubble.querySelector("span"),this.resize(),this.compatibility=this.shadowRoot.querySelector(".compatibility"),this.svg=this.compatibility.querySelector("svg"),this.setRenderMode(this.getAttribute("renderer")||"compatibility"),t(this.canvas,"webglcontextlost",n=>{n.preventDefault(),this.renderFallback("3D stopped; animated compatibility mode is active.")}),t(this.figure,"pointerdown",n=>{if(n.button!==0||this.departure||this.entrance)return;this.noClick=!1,this.drag={id:n.pointerId,x:n.clientX,y:n.clientY,dx:n.clientX-this.x,dy:n.clientY-this.y,moved:!1,resume:this.mode==="patrol"||this.resumeAt!==null},this.figure.setAttribute("data-pointer-focus","");let s=this.drag.resume;this.figure.setPointerCapture(n.pointerId),this.park(!1),this.drag.resume=s}),t(this.figure,"blur",()=>this.figure.removeAttribute("data-pointer-focus")),t(this.figure,"keydown",n=>{["Shift","Control","Alt","Meta"].includes(n.key)||this.figure.removeAttribute("data-pointer-focus")}),t(this.figure,"pointermove",n=>{!this.drag||n.pointerId!==this.drag.id||(this.drag.moved||=Math.hypot(n.clientX-this.drag.x,n.clientY-this.drag.y)>5,this.x=n.clientX-this.drag.dx,this.y=n.clientY-this.drag.dy,this.clamp(),this.paint())});let e=n=>{if(!this.drag||this.drag.id!==n.pointerId)return;let s=this.drag,r=n.type!=="pointerup";this.noClick=s.moved||r,this.drag=null,this.figure.hasPointerCapture(n.pointerId)&&this.figure.releasePointerCapture(n.pointerId),!r&&s.resume&&this.motionAllowed&&!this.hidden&&(this.resumeAt=this.elapsed+(s.moved?3:0),this.requestFrame()),this.emit()};t(this.figure,"pointerup",e),t(this.figure,"pointercancel",e),t(this.figure,"lostpointercapture",e),t(this.figure,"click",()=>{if(this.noClick){this.noClick=!1;return}this.warn()}),t(this.shadowRoot.querySelector(".close"),"click",()=>this.hide()),t(this,"keydown",n=>{n.key==="Escape"&&(this.park(!1),this.stopSpeech(),this.warningUntil=0,this.bubble.hidden=!0)}),t(window,"resize",()=>this.resize()),t(this.motion,"change",()=>{this.motionAllowed||(this.departure?this.finishHide():this.entrance?this.finishEntrance():this.park(!1)),this.requestFrame(),this.emit()}),t(document,"visibilitychange",()=>{if(document.hidden)this.visibilityPausedAt??=performance.now(),this.departure&&this.finishHide(),this.stopFrames(),this.stopSpeech();else{if(this.visibilityPausedAt!=null){let n=performance.now()-this.visibilityPausedAt;for(let s of["helloUntil","waveUntil","bobUntil"])this[s]>this.visibilityPausedAt&&(this[s]+=n);this.visibilityPausedAt=null}this.requestFrame()}}),this.introduced||(this.introduced=!0,this.hasAttribute("autostart")&&(this.hidden=!0,this.show())),this.requestFrame(),this.emit()}initScene(){this.renderer=new ao({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:"low-power",preserveDrawingBuffer:!0}),this.renderer.localClippingEnabled=!0,this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.75)),this.renderer.setSize(this.size,this.size,!1),this.renderer.setClearColor(0,0),this.renderer.toneMapping=Ws,this.renderer.toneMappingExposure=.9,this.scene=new ii;let t=new Xi(this.renderer),e=new co;this.environment=t.fromScene(e,.04),this.scene.environment=this.environment.texture,e.dispose(),t.dispose(),this.scene.add(new Os(15068660,7365718,1.2));let n=new Fi(16777215,2.4);n.position.set(3,5,6),this.scene.add(n);let s=new Fi(13162724,1.2);s.position.set(-4,3,1),this.scene.add(s),this.camera=new Wn(-2.06,2.06,2.06,-2.06,.1,30),this.camera.position.set(2,2.5,9.2),this.camera.lookAt(0,1.82,0),this.rig=eu(),this.scene.add(this.rig.root),this.renderer.render(this.scene,this.camera)}renderFallback(t){this.ready=!0,this.renderMode="compatibility",this.canvas.hidden=!0,this.compatibility.hidden=!1;let e=this.shadowRoot.querySelector(".error");e.textContent=t,e.hidden=!t,this.requestFrame(),this.emit()}setRenderMode(t){if(t!=="3d"){this.renderFallback("");return}try{this.renderer||this.initScene(),this.renderMode="3d",this.ready=!0,this.canvas.hidden=!1,this.compatibility.hidden=!0,this.shadowRoot.querySelector(".error").hidden=!0,this.requestFrame(),this.emit()}catch{this.renderer?.dispose(),this.renderer=null,this.renderFallback("3D unavailable; animated compatibility mode is active.")}}disconnectedCallback(){this.visibilityPausedAt=null,(this.departure||this.entrance)&&this.finishHide(),this.resumeAt=null,this.drag=null,this.stopFrames(),this.stopSpeech(),this.clipPlayer?.dispose(),this.clipPlayer=null,this.abort?.abort(),this.scene?.traverse(t=>{if(t.geometry?.dispose(),t.material)for(let e of Array.isArray(t.material)?t.material:[t.material])e.dispose()}),this.environment?.dispose(),this.renderer?.dispose(),this.renderer=null,this.abort=null}attributeChangedCallback(){this.figure&&this.resize()}get size(){return this.realSize||300}get motionAllowed(){return this.motionOverride??!this.motion.matches}setMotion(t){this.motionOverride=!!t,t||(this.departure?this.finishHide():this.entrance?this.finishEntrance():this.park(!1)),this.requestFrame(),this.emit()}wave(){this.show({immediate:!0}),this.waveUntil=performance.now()+5200,this.requestFrame(),this.emit()}bobHead(){this.retractHead()}restoreHead(){this.retraction=null,this.restoration={start:this.elapsed,from:this.headBob||0},this.requestFrame(),this.emit()}retractHead(t){this.show({immediate:!0}),this.restoration=null;let e=t===void 0?1.5+Math.random()*4.5:Math.max(.2,Math.min(10,Number(t)/1e3||2.2));this.retraction={start:this.elapsed,hold:e,from:this.headBob||0},this.nextRetraction=this.elapsed+e+1.7+15+Math.random()*15,this.requestFrame(),this.emit()}startIntroduction(){this.resumeAt=null,this.docked=!1,this.x=(innerWidth-this.size)/2,this.y=(innerHeight-this.size)/2,this.clamp(),this.paint(),this.yaw=this.targetYaw=0,this.helloUntil=performance.now()+3600,this.caption.textContent="Hello!",this.bubble.hidden=!1,this.motionAllowed?(this.mode="patrol",this.greeting={phase:"waving",intro:!0,endsAt:this.elapsed+3.6},this.waveUntil=this.helloUntil):(this.mode="parked",this.greeting=null,this.waveUntil=0),this.requestFrame(),this.emit()}finishEntrance(){this.entrance=null,this.removeAttribute("arriving"),this.figure.disabled=!1,this.startIntroduction()}face(t=0){this.park(!1),this.targetYaw=Number(t)*Math.PI/180,this.motionAllowed||(this.yaw=this.targetYaw),this.requestFrame(),this.emit()}turn(t=90){this.face(this.targetYaw*180/Math.PI+Number(t))}setGreetings(t){this.greetings=!!t,t||this.cancelGreeting(),this.nextGreeting=this.elapsed+7,this.requestFrame(),this.emit()}greet(){this.motionAllowed&&(this.show({immediate:!0}),this.greeting={phase:"turning",started:this.elapsed},this.waveUntil=0,this.targetYaw=0,this.requestFrame(),this.emit())}cancelGreeting(){this.greeting&&(this.greeting=null,this.helloUntil=0,this.waveUntil=0,this.warningUntil=0,this.bubble&&(this.bubble.hidden=!0),this.stopSpeech()),this.nextGreeting=this.elapsed+16+Math.random()*10}resize(){let t=innerWidth<650?Math.min(220,innerWidth*.57):480;this.realSize=Math.max(100,Math.min(Number(this.getAttribute("size"))||280,t,innerWidth-16,innerHeight-24)),this.style.setProperty("--b9-size",this.size+"px"),this.docked&&(this.x=innerWidth-this.size-12,this.y=innerHeight-this.size-4),this.departure?this.y=Math.max(0,Math.min(this.y,innerHeight-this.size)):this.entrance||this.clamp(),this.paint(),this.renderer&&(this.renderer.setSize(this.size,this.size,!1),this.requestFrame())}clamp(){this.x=Math.max(0,Math.min(this.x,innerWidth-this.size)),this.y=Math.max(0,Math.min(this.y,innerHeight-this.size))}paint(){if(this.style.transform=`translate(${this.x.toFixed(2)}px,${this.y.toFixed(2)}px)`,this.bubble){let t=Math.min(210,innerWidth-24);this.bubble.style.width=t+"px",this.bubble.style.left=Math.max(12-this.x,Math.min(12,innerWidth-this.x-t-12))+"px",this.bubble.style.bottom=this.y<110?"auto":"91%",this.bubble.style.top=this.y<110?"90%":"auto"}}requestFrame(){this.raf||this.hidden||document.hidden||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t)))}stopFrames(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0}tick(t){if(this.raf=0,this.hidden||document.hidden)return;if(t-this.last<1e3/30){this.raf=requestAnimationFrame(h=>this.tick(h));return}let e=Math.min((t-this.last)/1e3,.06);this.last=t,this.elapsed+=e;let n=this.elapsed,s=this.motionAllowed,r=t<this.warningUntil,a=t<this.waveUntil;this.greeting?.phase==="waving"&&n>=this.greeting.endsAt&&(this.greeting=null,this.nextGreeting=n+16+Math.random()*10,this.nextQuote=n+18,this.emit()),this.greeting?.phase==="waving"&&(a=!0),s&&!this.drag&&this.mode==="patrol"&&!this.greeting&&!r&&!a&&(this.greetings&&n>=this.nextGreeting||this.routine&&n>=this.nextQuote)&&this.greet(),this.resumeAt!==null&&n>=this.resumeAt&&s&&!this.drag&&!this.greeting&&!r&&!a&&this.patrol({keepPosition:!0});let o=this.mode==="patrol"&&s&&!this.drag&&!this.greeting;s&&this.mode==="patrol"&&!this.drag&&!this.greeting&&!this.retraction&&!this.restoration&&n>=this.nextRetraction&&this.retractHead();let l=h=>(h=Math.max(0,Math.min(1,h)),h*h*(3-2*h)),c=0;if(this.retraction){let h=n-this.retraction.start,d=.7+this.retraction.hold;c=h<.7?this.retraction.from+(-.58-this.retraction.from)*l(h/.7):h<d?-.58:-.58*(1-l((h-d)/1)),h>=d+1&&(this.retraction=null,this.emit())}else if(this.restoration){let h=n-this.restoration.start;c=this.restoration.from*(1-l(h/.9)),h>=.9&&(this.restoration=null,this.emit())}if(s||(c=0),this.headBob=c,o){let h=this.x,d=this.y,g=40/Math.hypot(1,.65);this.x+=this.direction*g*e,this.y+=this.verticalDirection*g*.65*e;let y=Math.max(4,innerWidth-this.size-4),m=Math.max(4,innerHeight-this.size-4);this.x<=4?(this.x=4,this.direction=1):this.x>=y&&(this.x=y,this.direction=-1),this.y<=4?(this.y=4,this.verticalDirection=1):this.y>=m&&(this.y=m,this.verticalDirection=-1),this.phase+=Math.hypot(this.x-h,this.y-d)/Math.max(65,this.size*.4)*.24,this.paint()}if(this.entrance)if(!s)this.finishEntrance();else{let h=(innerWidth-this.size)/2-this.x,d=(innerHeight-this.size)/2-this.y,g=Math.hypot(h,d);if(g>.01){this.entrance.phase="rolling",this.targetYaw=Math.atan2(h,d);let y=Math.atan2(Math.sin(this.targetYaw-this.yaw),Math.cos(this.targetYaw-this.yaw));if(Math.abs(y)<.08){let m=Math.min(g,this.entrance.speed*e);this.x+=h/g*m,this.y+=d/g*m,this.phase+=m/Math.max(65,this.size*.4)*.24,this.paint()}}else this.entrance.phase="turning",this.targetYaw=0}this.greeting?this.targetYaw=0:this.mode==="patrol"&&(this.targetYaw=r?0:Math.atan2(this.direction,this.verticalDirection*.65));let u=Math.atan2(Math.sin(this.targetYaw-this.yaw),Math.cos(this.targetYaw-this.yaw)),f=s?u*Math.min(1,e*4.5):u;if(this.yaw=Math.atan2(Math.sin(this.yaw+f),Math.cos(this.yaw+f)),this.turnPhase+=f*.1,this.entrance?.phase==="turning"&&Math.abs(this.yaw)<.025&&(this.finishEntrance(),a=!0),this.departure){let h=this.departure;if(!s){this.finishHide();return}if(h.phase==="turning"&&(Math.abs(u)<.06||n-h.started>1.1)&&(h.phase="rolling",this.emit()),h.phase==="rolling"){let d=h.side<0?-this.size-12:innerWidth+12,g=this.x;this.x+=h.side*h.speed*e;let y=h.side<0?this.x<=d:this.x>=d;if(y&&(this.x=d),this.phase+=Math.abs(this.x-g)/Math.max(65,this.size*.4)*.24,this.paint(),y){this.finishHide();return}}}if(this.greeting?.phase==="turning"&&s&&Math.abs(Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)))<.025&&(this.yaw=0,this.greeting.phase="waving",this.greeting.endsAt=n+(this.routine?5:4),this.waveUntil=t+4e3,a=!0,this.routine&&(this.warn(go[this.quoteIndex++%go.length]),r=!0,this.nextQuote=n+18),this.emit()),this.routine&&this.mode==="parked"&&!this.greeting&&!r&&n>this.nextQuote&&(this.warn(go[this.quoteIndex++%go.length]),this.nextQuote=n+18,r=!0),!r&&t>=this.helloUntil&&!this.bubble.hidden&&(this.bubble.hidden=!0,this.emit()),this.renderMode==="compatibility"&&ru(this.svg,{t:n,phase:this.phase,turn:this.turnPhase,bob:c,warning:r,wave:a,animate:s,yaw:this.yaw}),this.rig&&this.renderMode==="3d"){let h=this.rig;h.root.rotation.y=this.yaw+Math.atan2(2,9.2),h.updateHead(c),h.radar.rotation.y=0,h.torso.rotation.y=0;for(let d of h.arms){let g=d.side,y=(r||a)&&s;d.shoulder.rotation.z=g*(y?1+.35*Math.sin(n*5+g):.51),d.shoulder.rotation.x=y?-.3+.22*Math.cos(n*5+g):-.22,d.elbow.rotation.z=g*(y?.38+.29*Math.sin(n*6+g):-.17),d.hand.rotation.y=y?.25*Math.sin(n*7+g):0,d.fingers.forEach((m,p)=>{m.rotation.z=y?(p?1:-1)*(.08+.09*Math.sin(n*8)):0})}h.mouthMat.emissiveIntensity=r&&s?.4+1.3*Math.abs(Math.sin(n*15)*Math.sin(n*7)):.14,h.indicators.forEach((d,g)=>{d.emissiveIntensity=s?.18+.35*Math.max(0,Math.sin(n*2+g*2)):.2}),h.updateTracks(this.phase,this.turnPhase),this.renderer.render(this.scene,this.camera)}!this.raf&&(s||r||a||t<this.bobUntil||t<this.helloUntil)&&(this.raf=requestAnimationFrame(h=>this.tick(h)))}warn(t="Warning! Warning! Warning!"){this.show({immediate:!0}),/does not compute/i.test(t)&&this.retractHead(),this.caption.textContent=String(t).slice(0,180),this.bubble.hidden=!1,this.warningUntil=performance.now()+4800,this.voiceEnabled&&this.speak(this.caption.textContent),this.requestFrame(),this.emit()}speak(t){this.stopSpeech(),this.audioError="";let e=Object.hasOwn(sr,t)?sr[t]:null;if(e){this.playClip(e);return}this.voiceStatus="No original recording for this line \xB7 caption only",this.emit()}playClip(t){this.stopSpeech(),this.clipPlayer??=new mo,this.audioError="",this.voiceStatus="Starting TV voice clip\u2026",this.emit(),this.clipPlayer.play(t,{onStart:e=>{this.audioEngine=e,this.voiceStatus="Playing original TV voice clip",this.warningUntil=Math.max(this.warningUntil,performance.now()+t.duration*1e3+600),this.emit()},onEnd:()=>{this.voiceStatus="TV voice ready",this.emit()},onError:e=>{this.audioError=e.message,this.voiceStatus="Audio could not play. Try the direct player under Audio help.",this.emit()}})}getVoiceClip(){return sr["Warning! Warning! Warning!"].mp3}getQuotes(){return rr.map(t=>({...t}))}testVoice(){this.setVoiceMode("tv"),this.setVoice(!0),this.warn()}stopSpeech(){this.clipPlayer?.stop()}setVoiceMode(){this.stopSpeech(),this.voiceMode="tv",this.setVoice(this.voiceEnabled)}setVoice(t){this.voiceEnabled=!!t,t||this.stopSpeech(),this.voiceStatus=t?"Original TV clips enabled":"Silent \xB7 enable voice to hear him",this.emit()}setRoutine(t){this.routine=!!t,this.nextQuote=this.elapsed+10,this.emit(),this.requestFrame()}patrol({keepPosition:t=!0}={}){if(this.resumeAt=null,!this.motionAllowed){this.mode="parked",this.emit();return}this.cancelGreeting(),this.nextGreeting=this.elapsed+6+Math.random()*3,this.show({immediate:!0}),this.mode="patrol",this.docked=!1,t||(this.y=innerHeight-this.size-4,this.direction=-1,this.paint()),this.requestFrame(),this.emit()}park(t=!0){(this.departure||this.entrance)&&this.show({immediate:!0}),this.resumeAt=null,this.drag&&(this.drag.resume=!1),this.cancelGreeting(),this.mode="parked",this.docked=t,t&&(this.targetYaw=0,this.resize()),this.requestFrame(),this.emit()}hide({immediate:t=!1}={}){if(this.hidden)return;if(this.departure){t&&this.finishHide();return}this.entrance=null,this.removeAttribute("arriving"),this.figure.disabled=!1,this.returnPosition={x:this.x,y:this.y},this.resumeAt=null;let e=this.drag?.id;this.drag=null,e!==void 0&&this.figure.hasPointerCapture(e)&&this.figure.releasePointerCapture(e),this.cancelGreeting(),this.routine=!1,this.stopSpeech(),this.warningUntil=this.waveUntil=this.helloUntil=0,this.bubble.hidden=!0,this.docked=!1;let n=this.x+this.size/2<innerWidth/2?-1:1;if(this.entrySide=n,t||!this.motionAllowed||document.hidden||!this.isConnected||this.x+this.size<=0||this.x>=innerWidth){this.finishHide();return}let s=n<0?this.x+this.size+12:innerWidth+12-this.x;this.departure={side:n,phase:"turning",started:this.elapsed,speed:Math.max(170,s/1.4)},this.mode="exiting",this.targetYaw=n*Math.PI/2,this.setAttribute("departing",""),this.figure.disabled=!0,this.shadowRoot.querySelector(".close").disabled=!0,this.requestFrame(),this.emit()}finishHide(){this.departure=null,this.entrance=null,this.removeAttribute("departing"),this.removeAttribute("arriving"),this.hidden=!0,this.mode="parked",this.stopFrames(),this.figure.disabled=!1,this.shadowRoot.querySelector(".close").disabled=!1,this.emit()}show({immediate:t=!1}={}){if(t){let s=this.hidden||this.departure||this.entrance;this.departure=null,this.entrance=null,this.removeAttribute("departing"),this.removeAttribute("arriving"),this.returnPosition&&(this.x=this.returnPosition.x,this.y=this.returnPosition.y),this.returnPosition=null,this.hidden=!1,this.figure.disabled=!1,this.shadowRoot.querySelector(".close").disabled=!1,s&&(this.mode="parked",this.clamp(),this.paint()),this.requestFrame(),this.emit();return}if(this.entrance||!this.hidden&&!this.departure)return;let e=this.hidden,n=this.departure?.side??this.entrySide;this.stopFrames(),this.stopSpeech(),this.cancelGreeting(),this.resumeAt=null,this.departure=null,this.returnPosition=null,this.removeAttribute("departing"),this.warningUntil=this.waveUntil=this.helloUntil=0,this.bubble.hidden=!0,this.retraction=this.restoration=null,this.headBob=0,this.docked=!1,e&&(this.x=n<0?-this.size-12:innerWidth+12,this.y=(innerHeight-this.size)/2,this.yaw=n<0?Math.PI/2:-Math.PI/2),this.hidden=!1,this.shadowRoot.querySelector(".close").disabled=!1,this.mode="entering",this.entrance={phase:"rolling",speed:Math.max(150,Math.hypot((innerWidth-this.size)/2-this.x,(innerHeight-this.size)/2-this.y)/1.8)},this.targetYaw=Math.atan2((innerWidth-this.size)/2-this.x,(innerHeight-this.size)/2-this.y),this.setAttribute("arriving",""),this.figure.disabled=!0,this.paint(),this.nextRetraction=this.elapsed+20+Math.random()*15,this.motionAllowed?(this.requestFrame(),this.emit()):this.finishEntrance()}emit(){this.dispatchEvent(new CustomEvent("robotstatechange",{bubbles:!0,detail:{mode:this.mode,resumePending:this.resumeAt!==null,greeting:this.greeting?.phase||null,introduction:!!this.greeting?.intro,retracting:!!this.retraction,voice:this.voiceEnabled,voiceStatus:this.voiceStatus||"Silent \xB7 enable voice to hear him",hidden:this.hidden,ready:!!this.ready,renderer:this.renderMode,motionAllowed:this.motionAllowed,reducedMotion:this.motion.matches}}))}debugState(){return{ready:this.ready,renderer:this.renderMode,mode:this.mode,resumePending:this.resumeAt!==null,resumeIn:this.resumeAt===null?null:Math.max(0,this.resumeAt-this.elapsed),retracting:!!this.retraction,greeting:this.greeting?.phase||null,introduction:!!this.greeting?.intro,greetings:this.greetings,x:this.x,y:this.y,phase:this.phase,yaw:this.yaw,targetYaw:this.targetYaw,headBob:this.headBob||0,headY:this.rig?.head.position.y,armZ:this.rig?.arms[0].shoulder.rotation.z,warning:performance.now()<this.warningUntil,voice:this.voiceEnabled,voiceMode:this.voiceMode,audioEngine:this.audioEngine||null,audioError:this.audioError||null,motionAllowed:this.motionAllowed,reducedMotion:this.motion.matches,framePending:!!this.raf}}};customElements.get("b9-companion")||customElements.define("b9-companion",Yl);})();
