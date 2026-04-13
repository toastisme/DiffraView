var _f=Object.defineProperty;var gf=(r,e,t)=>e in r?_f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Zn=(r,e,t)=>gf(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="172",Ni={ROTATE:0,DOLLY:1,PAN:2},fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xf=0,ec=1,vf=2,Dh=1,Mf=2,Bn=3,fi=0,Gt=1,Vn=2,li=0,_r=1,tc=2,nc=3,ic=4,yf=5,Pi=100,bf=101,Sf=102,Ef=103,wf=104,Tf=200,Af=201,Rf=202,Cf=203,ho=204,uo=205,Pf=206,Df=207,If=208,Lf=209,Uf=210,Of=211,Nf=212,Ff=213,Bf=214,fo=0,po=1,mo=2,br=3,_o=4,go=5,xo=6,vo=7,ml=0,zf=1,kf=2,ci=0,Vf=1,Hf=2,Gf=3,Wf=4,Xf=5,qf=6,Yf=7,Ih=300,Sr=301,Er=302,Mo=303,yo=304,pa=306,bo=1e3,Li=1001,So=1002,Sn=1003,jf=1004,gs=1005,fn=1006,ya=1007,Ui=1008,Xn=1009,Lh=1010,Uh=1011,ns=1012,_l=1013,Hi=1014,Hn=1015,us=1016,gl=1017,xl=1018,wr=1020,Oh=35902,Nh=1021,Fh=1022,bn=1023,Bh=1024,zh=1025,gr=1026,Tr=1027,kh=1028,vl=1029,Vh=1030,Ml=1031,yl=1033,Xs=33776,qs=33777,Ys=33778,js=33779,Eo=35840,wo=35841,To=35842,Ao=35843,Ro=36196,Co=37492,Po=37496,Do=37808,Io=37809,Lo=37810,Uo=37811,Oo=37812,No=37813,Fo=37814,Bo=37815,zo=37816,ko=37817,Vo=37818,Ho=37819,Go=37820,Wo=37821,Zs=36492,Xo=36494,qo=36495,Hh=36283,Yo=36284,jo=36285,Zo=36286,Zf=3200,Kf=3201,Gh=0,$f=1,ri="",hn="srgb",Ar="srgb-linear",na="linear",$e="srgb",Ki=7680,rc=519,Jf=512,Qf=513,ed=514,Wh=515,td=516,nd=517,id=518,rd=519,sc=35044,ac="300 es",Gn=2e3,ia=2001;class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ks=Math.PI/180,Ko=180/Math.PI;function fs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[r&255]+Dt[r>>8&255]+Dt[r>>16&255]+Dt[r>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Be(r,e,t){return Math.max(e,Math.min(t,r))}function sd(r,e){return(r%e+e)%e}function ba(r,e,t){return(1-t)*r+t*e}function kr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ad={DEG2RAD:Ks};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Me{constructor(e,t,n,i,s,a,o,l,c){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],b=i[4],y=i[7],M=i[2],A=i[5],E=i[8];return s[0]=a*_+o*S+l*M,s[3]=a*m+o*b+l*A,s[6]=a*p+o*y+l*E,s[1]=c*_+h*S+u*M,s[4]=c*m+h*b+u*A,s[7]=c*p+h*y+u*E,s[2]=f*_+d*S+g*M,s[5]=f*m+d*b+g*A,s[8]=f*p+d*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new Me;function Xh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function is(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function od(){const r=is("canvas");return r.style.display="block",r}const oc={};function ur(r){r in oc||(oc[r]=!0,console.warn(r))}function ld(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function cd(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hd(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lc=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ud(){const r={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===$e&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(i.r=xr(i.r),i.g=xr(i.g),i.b=xr(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ri?na:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ar]:{primaries:e,whitePoint:n,transfer:na,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),r}const qe=ud();function Wn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let $i;class fd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=is("canvas")),$i.width=e.width,$i.height=e.height;const n=$i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Wn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dd=0;class qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ea(i[a].image)):s.push(Ea(i[a]))}else s=Ea(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ea(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pd=0;class Rt extends qi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Li,i=Li,s=fn,a=Ui,o=bn,l=Xn,c=Rt.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=fs(),this.name="",this.source=new qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bo:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bo:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Ih;Rt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(d+1)/2,M=(p+1)/2,A=(h+f)/4,E=(u+_)/4,C=(g+m)/4;return b>y&&b>M?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=A/n,s=E/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=C/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=E/s,i=C/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class md extends qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new qh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends md{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yh extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _d extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*_,S=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const M=Math.sqrt(b),A=Math.atan2(M,p*S);m=Math.sin(m*A)/M,o=Math.sin(o*A)/M}const y=o*S;if(l=l*m+f*y,c=c*m+d*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new D,hc=new Wi;class Or{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),vs.subVectors(this.max,Vr),Ji.subVectors(e.a,Vr),Qi.subVectors(e.b,Vr),er.subVectors(e.c,Vr),Kn.subVectors(Qi,Ji),$n.subVectors(er,Qi),vi.subVectors(Ji,er);let t=[0,-Kn.z,Kn.y,0,-$n.z,$n.y,0,-vi.z,vi.y,Kn.z,0,-Kn.x,$n.z,0,-$n.x,vi.z,0,-vi.x,-Kn.y,Kn.x,0,-$n.y,$n.x,0,-vi.y,vi.x,0];return!Ta(t,Ji,Qi,er,vs)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,Ji,Qi,er,vs))?!1:(Ms.crossVectors(Kn,$n),t=[Ms.x,Ms.y,Ms.z],Ta(t,Ji,Qi,er,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new D,new D,new D,new D,new D,new D,new D,new D],gn=new D,xs=new Or,Ji=new D,Qi=new D,er=new D,Kn=new D,$n=new D,vi=new D,Vr=new D,vs=new D,Ms=new D,Mi=new D;function Ta(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Mi.fromArray(r,s);const o=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const gd=new Or,Hr=new D,Aa=new D;class Nr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Hr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(Aa)),this.expandByPoint(Hr.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new D,Ra=new D,ys=new D,Jn=new D,Ca=new D,bs=new D,Pa=new D;class Fr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ra.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(Ra);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ys),o=Jn.dot(this.direction),l=-Jn.dot(ys),c=Jn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ra).addScaledVector(ys,f),d}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,i,s){Ca.subVectors(t,e),bs.subVectors(n,e),Pa.crossVectors(Ca,bs);let a=this.direction.dot(Pa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(bs.crossVectors(Jn,bs));if(l<0)return null;const c=o*this.direction.dot(Ca.cross(Jn));if(c<0||l+c>a)return null;const h=-o*Jn.dot(Pa);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,i,s,a,o,l,c,h,u,f,d,g,_,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,f,d,g,_,m)}set(e,t,n,i,s,a,o,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/tr.setFromMatrixColumn(e,0).length(),s=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xd,e,vd)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Qn.crossVectors(n,Kt),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Qn.crossVectors(n,Kt)),Qn.normalize(),Ss.crossVectors(Kt,Qn),i[0]=Qn.x,i[4]=Ss.x,i[8]=Kt.x,i[1]=Qn.y,i[5]=Ss.y,i[9]=Kt.y,i[2]=Qn.z,i[6]=Ss.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],b=n[7],y=n[11],M=n[15],A=i[0],E=i[4],C=i[8],x=i[12],v=i[1],R=i[5],V=i[9],U=i[13],N=i[2],O=i[6],I=i[10],W=i[14],k=i[3],Z=i[7],Q=i[11],ne=i[15];return s[0]=a*A+o*v+l*N+c*k,s[4]=a*E+o*R+l*O+c*Z,s[8]=a*C+o*V+l*I+c*Q,s[12]=a*x+o*U+l*W+c*ne,s[1]=h*A+u*v+f*N+d*k,s[5]=h*E+u*R+f*O+d*Z,s[9]=h*C+u*V+f*I+d*Q,s[13]=h*x+u*U+f*W+d*ne,s[2]=g*A+_*v+m*N+p*k,s[6]=g*E+_*R+m*O+p*Z,s[10]=g*C+_*V+m*I+p*Q,s[14]=g*x+_*U+m*W+p*ne,s[3]=S*A+b*v+y*N+M*k,s[7]=S*E+b*R+y*O+M*Z,s[11]=S*C+b*V+y*I+M*Q,s[15]=S*x+b*U+y*W+M*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*h-s*l*h)+m*(+t*c*u-t*o*d-s*a*u+n*a*d+s*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=u*m*c-_*f*c+_*l*d-o*m*d-u*l*p+o*f*p,b=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,y=h*_*c-g*u*c+g*o*d-a*_*d-h*o*p+a*u*p,M=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,A=t*S+n*b+i*y+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=S*E,e[1]=(_*f*s-u*m*s-_*i*d+n*m*d+u*i*p-n*f*p)*E,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*E,e[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*d-n*l*d)*E,e[4]=b*E,e[5]=(h*m*s-g*f*s+g*i*d-t*m*d-h*i*p+t*f*p)*E,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*E,e[7]=(a*f*s-h*l*s+h*i*c-t*f*c-a*i*d+t*l*d)*E,e[8]=y*E,e[9]=(g*u*s-h*_*s-g*n*d+t*_*d+h*n*p-t*u*p)*E,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*E,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*d-t*o*d)*E,e[12]=M*E,e[13]=(h*_*i-g*u*i+g*n*f-t*_*f-h*n*m+t*u*m)*E,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*E,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,g=s*u,_=a*h,m=a*u,p=o*u,S=l*c,b=l*h,y=l*u,M=n.x,A=n.y,E=n.z;return i[0]=(1-(_+p))*M,i[1]=(d+y)*M,i[2]=(g-b)*M,i[3]=0,i[4]=(d-y)*A,i[5]=(1-(f+p))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(g+b)*E,i[9]=(m-S)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=tr.set(i[0],i[1],i[2]).length();const a=tr.set(i[4],i[5],i[6]).length(),o=tr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],xn.copy(this);const c=1/s,h=1/a,u=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,t.setFromRotationMatrix(xn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Gn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(o===Gn)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ia)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Gn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),f=(t+e)*c,d=(n+i)*h;let g,_;if(o===Gn)g=(a+s)*u,_=-2*u;else if(o===ia)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const tr=new D,xn=new it,xd=new D(0,0,0),vd=new D(1,1,1),Qn=new D,Ss=new D,Kt=new D,uc=new it,fc=new Wi;class Pn{constructor(e=0,t=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fc.setFromEuler(this),this.setFromQuaternion(fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class bl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Md=0;const dc=new D,nr=new Wi,On=new it,Es=new D,Gr=new D,yd=new D,bd=new Wi,pc=new D(1,0,0),mc=new D(0,1,0),_c=new D(0,0,1),gc={type:"added"},Sd={type:"removed"},ir={type:"childadded",child:null},Da={type:"childremoved",child:null};class zt extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new D,t=new Pn,n=new Wi,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new Me}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(pc,e)}rotateY(e){return this.rotateOnAxis(mc,e)}rotateZ(e){return this.rotateOnAxis(_c,e)}translateOnAxis(e,t){return dc.copy(e).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pc,e)}translateY(e){return this.translateOnAxis(mc,e)}translateZ(e){return this.translateOnAxis(_c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Es.copy(e):Es.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Gr,Es,this.up):On.lookAt(Es,Gr,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),nr.setFromRotationMatrix(On),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gc),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sd),Da.child=e,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gc),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zt.DEFAULT_UP=new D(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new D,Nn=new D,Ia=new D,Fn=new D,rr=new D,sr=new D,xc=new D,La=new D,Ua=new D,Oa=new D,Na=new mt,Fa=new mt,Ba=new mt;class yn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vn.subVectors(e,t),i.cross(vn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){vn.subVectors(i,t),Nn.subVectors(n,t),Ia.subVectors(e,t);const a=vn.dot(vn),o=vn.dot(Nn),l=vn.dot(Ia),c=Nn.dot(Nn),h=Nn.dot(Ia),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Na.setScalar(0),Fa.setScalar(0),Ba.setScalar(0),Na.fromBufferAttribute(e,t),Fa.fromBufferAttribute(e,n),Ba.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Na,s.x),a.addScaledVector(Fa,s.y),a.addScaledVector(Ba,s.z),a}static isFrontFacing(e,t,n,i){return vn.subVectors(n,t),Nn.subVectors(e,t),vn.cross(Nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),vn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;rr.subVectors(i,n),sr.subVectors(s,n),La.subVectors(e,n);const l=rr.dot(La),c=sr.dot(La);if(l<=0&&c<=0)return t.copy(n);Ua.subVectors(e,i);const h=rr.dot(Ua),u=sr.dot(Ua);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(rr,a);Oa.subVectors(e,s);const d=rr.dot(Oa),g=sr.dot(Oa);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(sr,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return xc.subVectors(s,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(xc,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(rr,a).addScaledVector(sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},ws={h:0,s:0,l:0};function za(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=sd(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=za(a,s,e+1/3),this.g=za(a,s,e),this.b=za(a,s,e-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(e,t=hn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=jh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return qe.fromWorkingColorSpace(It.copy(this),e),Math.round(Be(It.r*255,0,255))*65536+Math.round(Be(It.g*255,0,255))*256+Math.round(Be(It.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,s=It.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=hn){qe.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(ws);const n=ba(ei.h,ws.h,t),i=ba(ei.s,ws.s,t),s=ba(ei.l,ws.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ne;Ne.NAMES=jh;let Ed=0;class Yi extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=_r,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Di extends Yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new D,Ts=new Ae;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),i=Vt(i,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sc&&(e.usage=this.usage),e}}class Zh extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kh extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wd=0;const ln=new it,ka=new zt,ar=new D,$t=new Or,Wr=new Or,wt=new D;class at extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xh(e)?Kh:Zh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Me().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return ka.lookAt(e),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors($t.min,Wr.min),$t.expandByPoint(wt),wt.addVectors($t.max,Wr.max),$t.expandByPoint(wt)):($t.expandByPoint(Wr.min),$t.expandByPoint(Wr.max))}$t.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(ar.fromBufferAttribute(e,c),wt.add(ar)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new D,l[C]=new D;const c=new D,h=new D,u=new D,f=new Ae,d=new Ae,g=new Ae,_=new D,m=new D;function p(C,x,v){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,v),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,v),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),o[C].add(_),o[x].add(_),o[v].add(_),l[C].add(m),l[x].add(m),l[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,x=S.length;C<x;++C){const v=S[C],R=v.start,V=v.count;for(let U=R,N=R+V;U<N;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const b=new D,y=new D,M=new D,A=new D;function E(C){M.fromBufferAttribute(i,C),A.copy(M);const x=o[C];b.copy(x),b.sub(M.multiplyScalar(M.dot(x))).normalize(),y.crossVectors(A,x);const R=y.dot(l[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,R)}for(let C=0,x=S.length;C<x;++C){const v=S[C],R=v.start,V=v.count;for(let U=R,N=R+V;U<N;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new xt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new at,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vc=new it,yi=new Fr,As=new Nr,Mc=new D,Rs=new D,Cs=new D,Ps=new D,Va=new D,Ds=new D,yc=new D,Is=new D;class bt extends zt{constructor(e=new at,t=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ds.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Va.fromBufferAttribute(u,e),a?Ds.addScaledVector(Va,h):Ds.addScaledVector(Va.sub(t),h))}t.add(Ds)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(s),yi.copy(e.ray).recast(e.near),!(As.containsPoint(yi.origin)===!1&&(yi.intersectSphere(As,Mc)===null||yi.origin.distanceToSquared(Mc)>(e.far-e.near)**2))&&(vc.copy(s).invert(),yi.copy(e.ray).applyMatrix4(vc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,M=b;y<M;y+=3){const A=o.getX(y),E=o.getX(y+1),C=o.getX(y+2);i=Ls(this,p,e,n,c,h,u,A,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);i=Ls(this,a,e,n,c,h,u,S,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,M=b;y<M;y+=3){const A=y,E=y+1,C=y+2;i=Ls(this,p,e,n,c,h,u,A,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,b=m+1,y=m+2;i=Ls(this,a,e,n,c,h,u,S,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Td(r,e,t,n,i,s,a,o){let l;if(e.side===Gt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===fi,o),l===null)return null;Is.copy(o),Is.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Is);return c<t.near||c>t.far?null:{distance:c,point:Is.clone(),object:r}}function Ls(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Rs),r.getVertexPosition(l,Cs),r.getVertexPosition(c,Ps);const h=Td(r,e,t,n,Rs,Cs,Ps,yc);if(h){const u=new D;yn.getBarycoord(yc,Rs,Cs,Ps,u),i&&(h.uv=yn.getInterpolatedAttribute(i,o,l,c,u,new Ae)),s&&(h.uv1=yn.getInterpolatedAttribute(s,o,l,c,u,new Ae)),a&&(h.normal=yn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};yn.getNormal(Rs,Cs,Ps,f.normal),h.face=f,h.barycoord=u}return h}class ds extends at{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function g(_,m,p,S,b,y,M,A,E,C,x){const v=y/E,R=M/C,V=y/2,U=M/2,N=A/2,O=E+1,I=C+1;let W=0,k=0;const Z=new D;for(let Q=0;Q<I;Q++){const ne=Q*R-U;for(let de=0;de<O;de++){const we=de*v-V;Z[_]=we*S,Z[m]=ne*b,Z[p]=N,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(de/E),u.push(1-Q/C),W+=1}}for(let Q=0;Q<C;Q++)for(let ne=0;ne<E;ne++){const de=f+ne+O*Q,we=f+ne+O*(Q+1),q=f+(ne+1)+O*(Q+1),K=f+(ne+1)+O*Q;l.push(de,we,K),l.push(we,q,K),k+=6}o.addGroup(d,k,x),d+=k,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(r){const e={};for(let t=0;t<r.length;t++){const n=Rr(r[t]);for(const i in n)e[i]=n[i]}return e}function Ad(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function $h(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Rd={clone:Rr,merge:Ft};var Cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cd,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=Ad(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jh extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new D,bc=new Ae,Sc=new Ae;class un extends Jh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,bc,Sc),t.subVectors(Sc,bc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const or=-90,lr=1;class Dd extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(or,lr,e,t);i.layers=this.layers,this.add(i);const s=new un(or,lr,e,t);s.layers=this.layers,this.add(s);const a=new un(or,lr,e,t);a.layers=this.layers,this.add(a);const o=new un(or,lr,e,t);o.layers=this.layers,this.add(o);const l=new un(or,lr,e,t);l.layers=this.layers,this.add(l);const c=new un(or,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qh extends Rt{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Id extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ds(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:li});s.uniforms.tEquirect.value=t;const a=new bt(i,s),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=fn),new Dd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Sl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new Sl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ld extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ha=new D,Ud=new D,Od=new Me;class ni{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ha.subVectors(n,t).cross(Ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ha),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Od.getNormalMatrix(e),i=this.coplanarPoint(Ha).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Nr,Us=new D;class eu{constructor(e=new ni,t=new ni,n=new ni,i=new ni,s=new ni,a=new ni){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],b=i[14],y=i[15];if(n[0].setComponents(l-s,f-c,m-d,y-p).normalize(),n[1].setComponents(l+s,f+c,m+d,y+p).normalize(),n[2].setComponents(l+a,f+h,m+g,y+S).normalize(),n[3].setComponents(l-a,f-h,m-g,y-S).normalize(),n[4].setComponents(l-o,f-u,m-_,y-b).normalize(),t===Gn)n[5].setComponents(l+o,f+u,m+_,y+b).normalize();else if(t===ia)n[5].setComponents(o,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Us.x=i.normal.x>0?e.max.x:e.min.x,Us.y=i.normal.y>0?e.max.y:e.min.y,Us.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class El extends Yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ra=new D,sa=new D,Ec=new it,Xr=new Fr,Os=new Nr,Ga=new D,wc=new D;class tu extends zt{constructor(e=new at,t=new El){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ra.fromBufferAttribute(t,i-1),sa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ra.distanceTo(sa);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(i),Os.radius+=s,e.ray.intersectsSphere(Os)===!1)return;Ec.copy(i).invert(),Xr.copy(e.ray).applyMatrix4(Ec);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=h.getX(_),S=h.getX(_+1),b=Ns(this,e,Xr,l,p,S);b&&t.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=Ns(this,e,Xr,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=Ns(this,e,Xr,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ns(this,e,Xr,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ns(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(ra.fromBufferAttribute(a,i),sa.fromBufferAttribute(a,s),t.distanceSqToSegment(ra,sa,Ga,wc)>n)return;Ga.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Ga);if(!(l<e.near||l>e.far))return{distance:l,point:wc.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Tc=new D,Ac=new D;class Nd extends tu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Tc.fromBufferAttribute(t,i),Ac.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tc.distanceTo(Ac);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mn extends Yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rc=new it,$o=new Fr,Fs=new Nr,Bs=new D;class En extends zt{constructor(e=new at,t=new Mn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(i),Fs.radius+=s,e.ray.intersectsSphere(Fs)===!1)return;Rc.copy(i).invert(),$o.copy(e.ray).applyMatrix4(Rc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Bs.fromBufferAttribute(u,m),Cc(Bs,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Bs.fromBufferAttribute(u,g),Cc(Bs,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Cc(r,e,t,n,i,s,a){const o=$o.distanceSqToPoint(r);if(o<t){const l=new D;$o.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class zs extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class nu extends Rt{constructor(e,t,n,i,s,a,o,l,c,h=gr){if(h!==gr&&h!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gr&&(n=Hi),n===void 0&&h===Tr&&(n=wr),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fi extends at{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*f-a;for(let b=0;b<c;b++){const y=b*u-s;g.push(y,-S,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const b=S+c*p,y=S+c*(p+1),M=S+1+c*(p+1),A=S+1+c*p;d.push(b,y,A),d.push(y,M,A)}this.setIndex(d),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}}class wl extends at{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,f=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],b=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const A=M/t;u.x=-e*Math.cos(i+A*s)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(i+A*s)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+y,1-b),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const b=h[p][S+1],y=h[p][S],M=h[p+1][S],A=h[p+1][S+1];(p!==0||a>0)&&d.push(b,y,A),(p!==n-1||l<Math.PI)&&d.push(y,M,A)}this.setIndex(d),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fd extends Yi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bd extends Yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zd extends Yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class kd{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const Vd=new kd;class Tl{constructor(e){this.manager=e!==void 0?e:Vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Tl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Hd extends Tl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Pc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=is("img");function l(){h(),Pc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Gd extends Tl{constructor(e){super(e)}load(e,t,n,i){const s=new Rt,a=new Hd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Wd extends Jh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xd extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Dc=new it;class qd{constructor(e,t,n=0,i=1/0){this.ray=new Fr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dc),this}intersectObject(e,t=!0,n=[]){return Jo(e,this,n,t),n.sort(Ic),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Jo(e[i],this,n,t);return n.sort(Ic),n}}function Ic(r,e){return r.distance-e.distance}function Jo(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Jo(s[a],e,t,!0)}}class Lc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yd extends qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Uc(r,e,t,n){const i=jd(n);switch(t){case Nh:return r*e;case Bh:return r*e;case zh:return r*e*2;case kh:return r*e/i.components*i.byteLength;case vl:return r*e/i.components*i.byteLength;case Vh:return r*e*2/i.components*i.byteLength;case Ml:return r*e*2/i.components*i.byteLength;case Fh:return r*e*3/i.components*i.byteLength;case bn:return r*e*4/i.components*i.byteLength;case yl:return r*e*4/i.components*i.byteLength;case Xs:case qs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ys:case js:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wo:case Ao:return Math.max(r,16)*Math.max(e,8)/4;case Eo:case To:return Math.max(r,8)*Math.max(e,8)/2;case Ro:case Co:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Po:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Do:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case No:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case zo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ko:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Go:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Zs:case Xo:case qo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Hh:case Yo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case jo:case Zo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jd(r){switch(r){case Xn:case Lh:return{byteLength:1,components:1};case ns:case Uh:case us:return{byteLength:2,components:1};case gl:case xl:return{byteLength:2,components:4};case Hi:case _l:case Hn:return{byteLength:4,components:1};case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function iu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Zd(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vp=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yp=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
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
}`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Hp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,jp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sm=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Um=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`#include <common>
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
}`,n_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i_=`#define DISTANCE
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
}`,r_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`uniform float scale;
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
}`,l_=`uniform vec3 diffuse;
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
}`,c_=`#include <common>
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#define LAMBERT
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
}`,f_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,d_=`#define MATCAP
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
}`,p_=`#define MATCAP
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
}`,m_=`#define NORMAL
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
}`,__=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g_=`#define PHONG
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
}`,x_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,v_=`#define STANDARD
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
}`,M_=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,y_=`#define TOON
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
}`,b_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,S_=`uniform float size;
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
}`,E_=`uniform vec3 diffuse;
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
}`,w_=`#include <common>
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
}`,T_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,A_=`uniform float rotation;
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
}`,R_=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Kd,alphahash_pars_fragment:$d,alphamap_fragment:Jd,alphamap_pars_fragment:Qd,alphatest_fragment:ep,alphatest_pars_fragment:tp,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:rp,batching_vertex:sp,begin_vertex:ap,beginnormal_vertex:op,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:dp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:_p,color_pars_vertex:gp,color_vertex:xp,common:vp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:yp,displacementmap_pars_vertex:bp,displacementmap_vertex:Sp,emissivemap_fragment:Ep,emissivemap_pars_fragment:wp,colorspace_fragment:Tp,colorspace_pars_fragment:Ap,envmap_fragment:Rp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Pp,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Hp,envmap_vertex:Ip,fog_vertex:Lp,fog_pars_vertex:Up,fog_fragment:Op,fog_pars_fragment:Np,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:Bp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:kp,lights_pars_begin:Vp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:qp,lights_physical_fragment:Yp,lights_physical_pars_fragment:jp,lights_fragment_begin:Zp,lights_fragment_maps:Kp,lights_fragment_end:$p,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:tm,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:rm,map_particle_pars_fragment:sm,metalnessmap_fragment:am,metalnessmap_pars_fragment:om,morphinstance_vertex:lm,morphcolor_vertex:cm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:fm,normal_fragment_begin:dm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:_m,normal_vertex:gm,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:ym,iridescence_pars_fragment:bm,opaque_fragment:Sm,packing:Em,premultiplied_alpha_fragment:wm,project_vertex:Tm,dithering_fragment:Am,dithering_pars_fragment:Rm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Im,shadowmap_vertex:Lm,shadowmask_pars_fragment:Um,skinbase_vertex:Om,skinning_pars_vertex:Nm,skinning_vertex:Fm,skinnormal_vertex:Bm,specularmap_fragment:zm,specularmap_pars_fragment:km,tonemapping_fragment:Vm,tonemapping_pars_fragment:Hm,transmission_fragment:Gm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:qm,uv_vertex:Ym,worldpos_vertex:jm,background_vert:Zm,background_frag:Km,backgroundCube_vert:$m,backgroundCube_frag:Jm,cube_vert:Qm,cube_frag:e_,depth_vert:t_,depth_frag:n_,distanceRGBA_vert:i_,distanceRGBA_frag:r_,equirect_vert:s_,equirect_frag:a_,linedashed_vert:o_,linedashed_frag:l_,meshbasic_vert:c_,meshbasic_frag:h_,meshlambert_vert:u_,meshlambert_frag:f_,meshmatcap_vert:d_,meshmatcap_frag:p_,meshnormal_vert:m_,meshnormal_frag:__,meshphong_vert:g_,meshphong_frag:x_,meshphysical_vert:v_,meshphysical_frag:M_,meshtoon_vert:y_,meshtoon_frag:b_,points_vert:S_,points_frag:E_,shadow_vert:w_,shadow_frag:T_,sprite_vert:A_,sprite_frag:R_},se={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},Tn={basic:{uniforms:Ft([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ft([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ft([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ft([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ft([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ft([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ft([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ft([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ft([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ft([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ft([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ft([se.common,se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ft([se.lights,se.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Tn.physical={uniforms:Ft([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ks={r:0,b:0,g:0},Si=new Pn,C_=new it;function P_(r,e,t,n,i,s,a){const o=new Ne(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function _(b){let y=!1;const M=g(b);M===null?p(o,l):M&&M.isColor&&(p(M,1),y=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===pa)?(h===void 0&&(h=new bt(new ds(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Rr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Si.copy(y.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(C_.makeRotationFromEuler(Si)),h.material.toneMapped=qe.getTransfer(M.colorSpace)!==$e,(u!==M||f!==M.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new bt(new Fi(2,2),new qn({name:"BackgroundMaterial",uniforms:Rr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=qe.getTransfer(M.colorSpace)!==$e,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(ks,$h(r)),n.buffers.color.setClear(ks.r,ks.g,ks.b,y,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m,dispose:S}}function D_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(v,R,V,U,N){let O=!1;const I=u(U,V,R);s!==I&&(s=I,c(s.object)),O=d(v,U,V,N),O&&g(v,U,V,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,y(v,R,V,U),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,R,V){const U=V.wireframe===!0;let N=n[v.id];N===void 0&&(N={},n[v.id]=N);let O=N[R.id];O===void 0&&(O={},N[R.id]=O);let I=O[U];return I===void 0&&(I=f(l()),O[U]=I),I}function f(v){const R=[],V=[],U=[];for(let N=0;N<t;N++)R[N]=0,V[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:U,object:v,attributes:{},index:null}}function d(v,R,V,U){const N=s.attributes,O=R.attributes;let I=0;const W=V.getAttributes();for(const k in W)if(W[k].location>=0){const Q=N[k];let ne=O[k];if(ne===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor)),Q===void 0||Q.attribute!==ne||ne&&Q.data!==ne.data)return!0;I++}return s.attributesNum!==I||s.index!==U}function g(v,R,V,U){const N={},O=R.attributes;let I=0;const W=V.getAttributes();for(const k in W)if(W[k].location>=0){let Q=O[k];Q===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor));const ne={};ne.attribute=Q,Q&&Q.data&&(ne.data=Q.data),N[k]=ne,I++}s.attributes=N,s.attributesNum=I,s.index=U}function _(){const v=s.newAttributes;for(let R=0,V=v.length;R<V;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){const V=s.newAttributes,U=s.enabledAttributes,N=s.attributeDivisors;V[v]=1,U[v]===0&&(r.enableVertexAttribArray(v),U[v]=1),N[v]!==R&&(r.vertexAttribDivisor(v,R),N[v]=R)}function S(){const v=s.newAttributes,R=s.enabledAttributes;for(let V=0,U=R.length;V<U;V++)R[V]!==v[V]&&(r.disableVertexAttribArray(V),R[V]=0)}function b(v,R,V,U,N,O,I){I===!0?r.vertexAttribIPointer(v,R,V,N,O):r.vertexAttribPointer(v,R,V,U,N,O)}function y(v,R,V,U){_();const N=U.attributes,O=V.getAttributes(),I=R.defaultAttributeValues;for(const W in O){const k=O[W];if(k.location>=0){let Z=N[W];if(Z===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Z=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Z=v.instanceColor)),Z!==void 0){const Q=Z.normalized,ne=Z.itemSize,de=e.get(Z);if(de===void 0)continue;const we=de.buffer,q=de.type,K=de.bytesPerElement,ue=q===r.INT||q===r.UNSIGNED_INT||Z.gpuType===_l;if(Z.isInterleavedBufferAttribute){const re=Z.data,Se=re.stride,Re=Z.offset;if(re.isInstancedInterleavedBuffer){for(let Ie=0;Ie<k.locationSize;Ie++)p(k.location+Ie,re.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ie=0;Ie<k.locationSize;Ie++)m(k.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Ie=0;Ie<k.locationSize;Ie++)b(k.location+Ie,ne/k.locationSize,q,Q,Se*K,(Re+ne/k.locationSize*Ie)*K,ue)}else{if(Z.isInstancedBufferAttribute){for(let re=0;re<k.locationSize;re++)p(k.location+re,Z.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let re=0;re<k.locationSize;re++)m(k.location+re);r.bindBuffer(r.ARRAY_BUFFER,we);for(let re=0;re<k.locationSize;re++)b(k.location+re,ne/k.locationSize,q,Q,ne*K,ne/k.locationSize*re*K,ue)}}else if(I!==void 0){const Q=I[W];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(k.location,Q);break;case 3:r.vertexAttrib3fv(k.location,Q);break;case 4:r.vertexAttrib4fv(k.location,Q);break;default:r.vertexAttrib1fv(k.location,Q)}}}}S()}function M(){C();for(const v in n){const R=n[v];for(const V in R){const U=R[V];for(const N in U)h(U[N].object),delete U[N];delete R[V]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const V in R){const U=R[V];for(const N in U)h(U[N].object),delete U[N];delete R[V]}delete n[v.id]}function E(v){for(const R in n){const V=n[R];if(V[v.id]===void 0)continue;const U=V[v.id];for(const N in U)h(U[N].object),delete U[N];delete V[v.id]}}function C(){x(),a=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function I_(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function L_(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==bn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Xn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Hn&&!C)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:M,maxSamples:A}}function U_(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ni,o=new Me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const S=s?0:n,b=S*4;let y=p.clippingState||null;l.value=y,y=h(g,f,b,d);for(let M=0;M!==b;++M)y[M]=t[M];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=d;b!==_;++b,y+=4)a.copy(u[b]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function O_(r){let e=new WeakMap;function t(a,o){return o===Mo?a.mapping=Sr:o===yo&&(a.mapping=Er),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mo||o===yo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Id(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const dr=4,Oc=[.125,.215,.35,.446,.526,.582],Ii=20,Wa=new Wd,Nc=new Ne;let Xa=null,qa=0,Ya=0,ja=!1;const Ri=(1+Math.sqrt(5))/2,cr=1/Ri,Fc=[new D(-Ri,cr,0),new D(Ri,cr,0),new D(-cr,0,Ri),new D(cr,0,Ri),new D(0,Ri,-cr),new D(0,Ri,cr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=ja,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:us,format:bn,colorSpace:Ar,depthBuffer:!1},i=zc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N_(s)),this._blurMaterial=F_(s,e,t)}return i}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,i){const o=new un(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Nc),h.toneMapping=ci,h.autoClear=!1;const d=new Di({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new bt(new ds,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Nc),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const b=this._cubeSize;Vs(i,S*b,p>2?b:0,b,b),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Sr||e.mapping===Er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Vs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Fc[(i-s-1)%Fc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new bt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Ii;m>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const p=[];let S=0;for(let E=0;E<Ii;++E){const C=E/_,x=Math.exp(-C*C/2);p.push(x),E===0?S+=x:E<m&&(S+=2*x)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const y=this._sizeLods[i],M=3*y*(i>b-dr?i-b+dr:0),A=4*(this._cubeSize-y);Vs(t,M,A,3*y,2*y),l.setRenderTarget(t),l.render(u,Wa)}}function N_(r){const e=[],t=[],n=[];let i=r;const s=r-dr+1+Oc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-dr?l=Oc[a-r+dr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),b=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let A=0;A<d;A++){const E=A%3*2/3-1,C=A>2?0:-1,x=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];S.set(x,_*g*A),b.set(f,m*g*A);const v=[A,A,A,A,A,A];y.set(v,p*g*A)}const M=new at;M.setAttribute("position",new xt(S,_)),M.setAttribute("uv",new xt(b,m)),M.setAttribute("faceIndex",new xt(y,p)),e.push(M),i>dr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zc(r,e,t){const n=new Gi(r,e,t);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function F_(r,e,t){const n=new Float32Array(Ii),i=new D(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function kc(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Vc(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function B_(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mo||l===yo,h=l===Sr||l===Er;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Bc(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Bc(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function z_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ur("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function k_(r,e,t,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let b=0,y=S.length;b<y;b+=3){const M=S[b+0],A=S[b+1],E=S[b+2];f.push(M,A,A,E,E,M)}}else if(g!==void 0){const S=g.array;_=g.version;for(let b=0,y=S.length/3-1;b<y;b+=3){const M=b+0,A=b+1,E=b+2;f.push(M,A,A,E,E,M)}}else return;const m=new(Xh(f)?Kh:Zh)(f,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function V_(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*a,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function H_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function G_(r,e,t){const n=new WeakMap,i=new mt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let M=o.attributes.position.count*y,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const E=new Float32Array(M*A*4*u),C=new Yh(E,M,A,u);C.type=Hn,C.needsUpdate=!0;const x=y*4;for(let R=0;R<u;R++){const V=p[R],U=S[R],N=b[R],O=M*A*4*R;for(let I=0;I<V.count;I++){const W=I*x;g===!0&&(i.fromBufferAttribute(V,I),E[O+W+0]=i.x,E[O+W+1]=i.y,E[O+W+2]=i.z,E[O+W+3]=0),_===!0&&(i.fromBufferAttribute(U,I),E[O+W+4]=i.x,E[O+W+5]=i.y,E[O+W+6]=i.z,E[O+W+7]=0),m===!0&&(i.fromBufferAttribute(N,I),E[O+W+8]=i.x,E[O+W+9]=i.y,E[O+W+10]=i.z,E[O+W+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new Ae(M,A)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function W_(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const ru=new Rt,Hc=new nu(1,1),su=new Yh,au=new _d,ou=new Qh,Gc=[],Wc=[],Xc=new Float32Array(16),qc=new Float32Array(9),Yc=new Float32Array(4);function Br(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Gc[i];if(s===void 0&&(s=new Float32Array(i),Gc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function St(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Et(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ma(r,e){let t=Wc[e];t===void 0&&(t=new Int32Array(e),Wc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function X_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function q_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2fv(this.addr,e),Et(t,e)}}function Y_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;r.uniform3fv(this.addr,e),Et(t,e)}}function j_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4fv(this.addr,e),Et(t,e)}}function Z_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Yc.set(n),r.uniformMatrix2fv(this.addr,!1,Yc),Et(t,n)}}function K_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;qc.set(n),r.uniformMatrix3fv(this.addr,!1,qc),Et(t,n)}}function $_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Xc.set(n),r.uniformMatrix4fv(this.addr,!1,Xc),Et(t,n)}}function J_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Q_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2iv(this.addr,e),Et(t,e)}}function eg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3iv(this.addr,e),Et(t,e)}}function tg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4iv(this.addr,e),Et(t,e)}}function ng(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ig(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2uiv(this.addr,e),Et(t,e)}}function rg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3uiv(this.addr,e),Et(t,e)}}function sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4uiv(this.addr,e),Et(t,e)}}function ag(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Hc.compareFunction=Wh,s=Hc):s=ru,t.setTexture2D(e||s,i)}function og(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||au,i)}function lg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ou,i)}function cg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||su,i)}function hg(r){switch(r){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return j_;case 35674:return Z_;case 35675:return K_;case 35676:return $_;case 5124:case 35670:return J_;case 35667:case 35671:return Q_;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ng;case 36294:return ig;case 36295:return rg;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(r,e){r.uniform1fv(this.addr,e)}function fg(r,e){const t=Br(e,this.size,2);r.uniform2fv(this.addr,t)}function dg(r,e){const t=Br(e,this.size,3);r.uniform3fv(this.addr,t)}function pg(r,e){const t=Br(e,this.size,4);r.uniform4fv(this.addr,t)}function mg(r,e){const t=Br(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function _g(r,e){const t=Br(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gg(r,e){const t=Br(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xg(r,e){r.uniform1iv(this.addr,e)}function vg(r,e){r.uniform2iv(this.addr,e)}function Mg(r,e){r.uniform3iv(this.addr,e)}function yg(r,e){r.uniform4iv(this.addr,e)}function bg(r,e){r.uniform1uiv(this.addr,e)}function Sg(r,e){r.uniform2uiv(this.addr,e)}function Eg(r,e){r.uniform3uiv(this.addr,e)}function wg(r,e){r.uniform4uiv(this.addr,e)}function Tg(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ru,s[a])}function Ag(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||au,s[a])}function Rg(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ou,s[a])}function Cg(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||su,s[a])}function Pg(r){switch(r){case 5126:return ug;case 35664:return fg;case 35665:return dg;case 35666:return pg;case 35674:return mg;case 35675:return _g;case 35676:return gg;case 5124:case 35670:return xg;case 35667:case 35671:return vg;case 35668:case 35672:return Mg;case 35669:case 35673:return yg;case 5125:return bg;case 36294:return Sg;case 36295:return Eg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}class Dg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hg(t.type)}}class Ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pg(t.type)}}class Lg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function jc(r,e){r.seq.push(e),r.map[e.id]=e}function Ug(r,e,t){const n=r.name,i=n.length;for(Za.lastIndex=0;;){const s=Za.exec(n),a=Za.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){jc(t,c===void 0?new Dg(o,r,e):new Ig(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Lg(o),jc(t,u)),t=u}}}class $s{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Ug(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Zc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Og=37297;let Ng=0;function Fg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Kc=new Me;function Bg(r){qe._getMatrix(Kc,qe.workingColorSpace,r);const e=`mat3( ${Kc.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(r)){case na:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function $c(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Fg(r.getShaderSource(e),a)}else return i}function zg(r,e){const t=Bg(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kg(r,e){let t;switch(e){case Vf:t="Linear";break;case Hf:t="Reinhard";break;case Gf:t="Cineon";break;case Wf:t="ACESFilmic";break;case qf:t="AgX";break;case Yf:t="Neutral";break;case Xf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hs=new D;function Vg(){qe.getLuminanceCoefficients(Hs);const r=Hs.x.toFixed(4),e=Hs.y.toFixed(4),t=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function Gg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wg(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Zr(r){return r!==""}function Jc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(r){return r.replace(Xg,Yg)}const qg=new Map;function Yg(r,e){let t=Oe[e];if(t===void 0){const n=qg.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qo(t)}const jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(r){return r.replace(jg,Zg)}function Zg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function th(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Dh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Mf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function $g(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Sr:case Er:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function Qg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ml:e="ENVMAP_BLENDING_MULTIPLY";break;case zf:e="ENVMAP_BLENDING_MIX";break;case kf:e="ENVMAP_BLENDING_ADD";break}return e}function e0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function t0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Kg(t),c=$g(t),h=Jg(t),u=Qg(t),f=e0(t),d=Hg(t),g=Gg(s),_=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zr).join(`
`),p.length>0&&(p+=`
`)):(m=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),p=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Oe.tonemapping_pars_fragment:"",t.toneMapping!==ci?kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,zg("linearToOutputTexel",t.outputColorSpace),Vg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),a=Qo(a),a=Jc(a,t),a=Qc(a,t),o=Qo(o),o=Jc(o,t),o=Qc(o,t),a=eh(a),o=eh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=S+m+a,y=S+p+o,M=Zc(i,i.VERTEX_SHADER,b),A=Zc(i,i.FRAGMENT_SHADER,y);i.attachShader(_,M),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(R){if(r.debug.checkShaderErrors){const V=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(M).trim(),N=i.getShaderInfoLog(A).trim();let O=!0,I=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,A);else{const W=$c(i,M,"vertex"),k=$c(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+W+`
`+k)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(U===""||N==="")&&(I=!1);I&&(R.diagnostics={runnable:O,programLog:V,vertexShader:{log:U,prefix:m},fragmentShader:{log:N,prefix:p}})}i.deleteShader(M),i.deleteShader(A),C=new $s(i,_),x=Wg(i,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Og)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ng++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=A,this}let n0=0;class i0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new r0(e),t.set(e,n)),n}}class r0{constructor(e){this.id=n0++,this.code=e,this.usedTimes=0}}function s0(r,e,t,n,i,s,a){const o=new bl,l=new i0,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,v,R,V,U){const N=V.fog,O=U.geometry,I=x.isMeshStandardMaterial?V.environment:null,W=(x.isMeshStandardMaterial?t:e).get(x.envMap||I),k=W&&W.mapping===pa?W.image.height:null,Z=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ne=Q!==void 0?Q.length:0;let de=0;O.morphAttributes.position!==void 0&&(de=1),O.morphAttributes.normal!==void 0&&(de=2),O.morphAttributes.color!==void 0&&(de=3);let we,q,K,ue;if(Z){const Ke=Tn[Z];we=Ke.vertexShader,q=Ke.fragmentShader}else we=x.vertexShader,q=x.fragmentShader,l.update(x),K=l.getVertexShaderID(x),ue=l.getFragmentShaderID(x);const re=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),Re=U.isInstancedMesh===!0,Ie=U.isBatchedMesh===!0,et=!!x.map,Fe=!!x.matcap,dt=!!W,L=!!x.aoMap,sn=!!x.lightMap,ke=!!x.bumpMap,Ve=!!x.normalMap,ye=!!x.displacementMap,nt=!!x.emissiveMap,ve=!!x.metalnessMap,P=!!x.roughnessMap,w=x.anisotropy>0,H=x.clearcoat>0,$=x.dispersion>0,ee=x.iridescence>0,j=x.sheen>0,xe=x.transmission>0,le=w&&!!x.anisotropyMap,pe=H&&!!x.clearcoatMap,Ge=H&&!!x.clearcoatNormalMap,ie=H&&!!x.clearcoatRoughnessMap,me=ee&&!!x.iridescenceMap,Te=ee&&!!x.iridescenceThicknessMap,Ce=j&&!!x.sheenColorMap,_e=j&&!!x.sheenRoughnessMap,He=!!x.specularMap,Ue=!!x.specularColorMap,tt=!!x.specularIntensityMap,F=xe&&!!x.transmissionMap,ae=xe&&!!x.thicknessMap,Y=!!x.gradientMap,J=!!x.alphaMap,he=x.alphaTest>0,ce=!!x.alphaHash,Le=!!x.extensions;let ct=ci;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ct=r.toneMapping);const Pt={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:we,fragmentShader:q,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&U._colorsTexture!==null,instancing:Re,instancingColor:Re&&U.instanceColor!==null,instancingMorph:Re&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ar,alphaToCoverage:!!x.alphaToCoverage,map:et,matcap:Fe,envMap:dt,envMapMode:dt&&W.mapping,envMapCubeUVHeight:k,aoMap:L,lightMap:sn,bumpMap:ke,normalMap:Ve,displacementMap:f&&ye,emissiveMap:nt,normalMapObjectSpace:Ve&&x.normalMapType===$f,normalMapTangentSpace:Ve&&x.normalMapType===Gh,metalnessMap:ve,roughnessMap:P,anisotropy:w,anisotropyMap:le,clearcoat:H,clearcoatMap:pe,clearcoatNormalMap:Ge,clearcoatRoughnessMap:ie,dispersion:$,iridescence:ee,iridescenceMap:me,iridescenceThicknessMap:Te,sheen:j,sheenColorMap:Ce,sheenRoughnessMap:_e,specularMap:He,specularColorMap:Ue,specularIntensityMap:tt,transmission:xe,transmissionMap:F,thicknessMap:ae,gradientMap:Y,opaque:x.transparent===!1&&x.blending===_r&&x.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:ce,combine:x.combine,mapUv:et&&_(x.map.channel),aoMapUv:L&&_(x.aoMap.channel),lightMapUv:sn&&_(x.lightMap.channel),bumpMapUv:ke&&_(x.bumpMap.channel),normalMapUv:Ve&&_(x.normalMap.channel),displacementMapUv:ye&&_(x.displacementMap.channel),emissiveMapUv:nt&&_(x.emissiveMap.channel),metalnessMapUv:ve&&_(x.metalnessMap.channel),roughnessMapUv:P&&_(x.roughnessMap.channel),anisotropyMapUv:le&&_(x.anisotropyMap.channel),clearcoatMapUv:pe&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(x.sheenRoughnessMap.channel),specularMapUv:He&&_(x.specularMap.channel),specularColorMapUv:Ue&&_(x.specularColorMap.channel),specularIntensityMapUv:tt&&_(x.specularIntensityMap.channel),transmissionMapUv:F&&_(x.transmissionMap.channel),thicknessMapUv:ae&&_(x.thicknessMap.channel),alphaMapUv:J&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ve||w),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(et||J),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Se,skinning:U.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:de,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:et&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===$e,decodeVideoTextureEmissive:nt&&x.emissiveMap.isVideoTexture===!0&&qe.getTransfer(x.emissiveMap.colorSpace)===$e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vn,flipSided:x.side===Gt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Le&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&x.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)v.push(R),v.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(S(v,x),b(v,x),v.push(r.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function S(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function b(x,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),x.push(o.mask)}function y(x){const v=g[x.type];let R;if(v){const V=Tn[v];R=Rd.clone(V.uniforms)}else R=x.uniforms;return R}function M(x,v){let R;for(let V=0,U=h.length;V<U;V++){const N=h[V];if(N.cacheKey===v){R=N,++R.usedTimes;break}}return R===void 0&&(R=new t0(r,v,x,s),h.push(R)),R}function A(x){if(--x.usedTimes===0){const v=h.indexOf(x);h[v]=h[h.length-1],h.pop(),x.destroy()}}function E(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:C}}function a0(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function o0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ih(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||o0),n.length>1&&n.sort(f||nh),i.length>1&&i.sort(f||nh)}function h(){for(let u=e,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function l0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new ih,r.set(n,[a])):i>=s.length?(a=new ih,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function c0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function h0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let u0=0;function f0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function d0(r){const e=new c0,t=h0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,s=new it,a=new it;function o(c){let h=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,b=0,y=0,M=0,A=0,E=0;c.sort(f0);for(let x=0,v=c.length;x<v;x++){const R=c[x],V=R.color,U=R.intensity,N=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=V.r*U,u+=V.g*U,f+=V.b*U;else if(R.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(R.sh.coefficients[I],U);E++}else if(R.isDirectionalLight){const I=e.get(R);if(I.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,k=t.get(R);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=R.shadow.matrix,S++}n.directional[d]=I,d++}else if(R.isSpotLight){const I=e.get(R);I.position.setFromMatrixPosition(R.matrixWorld),I.color.copy(V).multiplyScalar(U),I.distance=N,I.coneCos=Math.cos(R.angle),I.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),I.decay=R.decay,n.spot[_]=I;const W=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,W.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=W.matrix,R.castShadow){const k=t.get(R);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=O,y++}_++}else if(R.isRectAreaLight){const I=e.get(R);I.color.copy(V).multiplyScalar(U),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=I,m++}else if(R.isPointLight){const I=e.get(R);if(I.color.copy(R.color).multiplyScalar(R.intensity),I.distance=R.distance,I.decay=R.decay,R.castShadow){const W=R.shadow,k=t.get(R);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=I,g++}else if(R.isHemisphereLight){const I=e.get(R);I.skyColor.copy(R.color).multiplyScalar(U),I.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[p]=I,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==b||C.numSpotShadows!==y||C.numSpotMaps!==M||C.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+M-A,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=b,C.numSpotShadows=y,C.numSpotMaps=M,C.numLightProbes=E,n.version=u0++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const b=c[p];if(b.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(b.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function rh(r){const e=new d0(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function p0(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new rh(r),e.set(i,[o])):s>=a.length?(o=new rh(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const m0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function g0(r,e,t){let n=new eu;const i=new Ae,s=new Ae,a=new mt,o=new Bd({depthPacking:Kf}),l=new zd,c={},h=t.maxTextureSize,u={[fi]:Gt,[Gt]:fi,[Vn]:Vn},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:m0,fragmentShader:_0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new at;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let p=this.type;this.render=function(A,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const x=r.getRenderTarget(),v=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),V=r.state;V.setBlending(li),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const U=p!==Bn&&this.type===Bn,N=p===Bn&&this.type!==Bn;for(let O=0,I=A.length;O<I;O++){const W=A[O],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const Z=k.getFrameExtents();if(i.multiply(Z),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,k.mapSize.y=s.y)),k.map===null||U===!0||N===!0){const ne=this.type!==Bn?{minFilter:Sn,magFilter:Sn}:{};k.map!==null&&k.map.dispose(),k.map=new Gi(i.x,i.y,ne),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const Q=k.getViewportCount();for(let ne=0;ne<Q;ne++){const de=k.getViewport(ne);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),V.viewport(a),k.updateMatrices(W,ne),n=k.getFrustum(),y(E,C,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===Bn&&S(k,C),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(x,v,R)};function S(A,E){const C=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gi(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,C,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,C,d,_,null)}function b(A,E,C,x){let v=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)v=R;else if(v=C.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const V=v.uuid,U=E.uuid;let N=c[V];N===void 0&&(N={},c[V]=N);let O=N[U];O===void 0&&(O=v.clone(),N[U]=O,E.addEventListener("dispose",M)),v=O}if(v.visible=E.visible,v.wireframe=E.wireframe,x===Bn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const V=r.properties.get(v);V.light=C}return v}function y(A,E,C,x,v){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Bn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const U=e.update(A),N=A.material;if(Array.isArray(N)){const O=U.groups;for(let I=0,W=O.length;I<W;I++){const k=O[I],Z=N[k.materialIndex];if(Z&&Z.visible){const Q=b(A,Z,x,v);A.onBeforeShadow(r,A,E,C,U,Q,k),r.renderBufferDirect(C,null,U,Q,A,k),A.onAfterShadow(r,A,E,C,U,Q,k)}}}else if(N.visible){const O=b(A,N,x,v);A.onBeforeShadow(r,A,E,C,U,O,null),r.renderBufferDirect(C,null,U,O,A,null),A.onAfterShadow(r,A,E,C,U,O,null)}}const V=A.children;for(let U=0,N=V.length;U<N;U++)y(V[U],E,C,x,v)}function M(A){A.target.removeEventListener("dispose",M);for(const C in c){const x=c[C],v=A.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}const x0={[fo]:po,[mo]:xo,[_o]:vo,[br]:go,[po]:fo,[xo]:mo,[vo]:_o,[go]:br};function v0(r,e){function t(){let F=!1;const ae=new mt;let Y=null;const J=new mt(0,0,0,0);return{setMask:function(he){Y!==he&&!F&&(r.colorMask(he,he,he,he),Y=he)},setLocked:function(he){F=he},setClear:function(he,ce,Le,ct,Pt){Pt===!0&&(he*=ct,ce*=ct,Le*=ct),ae.set(he,ce,Le,ct),J.equals(ae)===!1&&(r.clearColor(he,ce,Le,ct),J.copy(ae))},reset:function(){F=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let F=!1,ae=!1,Y=null,J=null,he=null;return{setReversed:function(ce){if(ae!==ce){const Le=e.get("EXT_clip_control");ae?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const ct=he;he=null,this.setClear(ct)}ae=ce},getReversed:function(){return ae},setTest:function(ce){ce?re(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(ce){Y!==ce&&!F&&(r.depthMask(ce),Y=ce)},setFunc:function(ce){if(ae&&(ce=x0[ce]),J!==ce){switch(ce){case fo:r.depthFunc(r.NEVER);break;case po:r.depthFunc(r.ALWAYS);break;case mo:r.depthFunc(r.LESS);break;case br:r.depthFunc(r.LEQUAL);break;case _o:r.depthFunc(r.EQUAL);break;case go:r.depthFunc(r.GEQUAL);break;case xo:r.depthFunc(r.GREATER);break;case vo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ce}},setLocked:function(ce){F=ce},setClear:function(ce){he!==ce&&(ae&&(ce=1-ce),r.clearDepth(ce),he=ce)},reset:function(){F=!1,Y=null,J=null,he=null,ae=!1}}}function i(){let F=!1,ae=null,Y=null,J=null,he=null,ce=null,Le=null,ct=null,Pt=null;return{setTest:function(Ke){F||(Ke?re(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(Ke){ae!==Ke&&!F&&(r.stencilMask(Ke),ae=Ke)},setFunc:function(Ke,mn,In){(Y!==Ke||J!==mn||he!==In)&&(r.stencilFunc(Ke,mn,In),Y=Ke,J=mn,he=In)},setOp:function(Ke,mn,In){(ce!==Ke||Le!==mn||ct!==In)&&(r.stencilOp(Ke,mn,In),ce=Ke,Le=mn,ct=In)},setLocked:function(Ke){F=Ke},setClear:function(Ke){Pt!==Ke&&(r.clearStencil(Ke),Pt=Ke)},reset:function(){F=!1,ae=null,Y=null,J=null,he=null,ce=null,Le=null,ct=null,Pt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,b=null,y=null,M=null,A=null,E=new Ne(0,0,0),C=0,x=!1,v=null,R=null,V=null,U=null,N=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,W=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),I=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),I=W>=2);let Z=null,Q={};const ne=r.getParameter(r.SCISSOR_BOX),de=r.getParameter(r.VIEWPORT),we=new mt().fromArray(ne),q=new mt().fromArray(de);function K(F,ae,Y,J){const he=new Uint8Array(4),ce=r.createTexture();r.bindTexture(F,ce),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Le=0;Le<Y;Le++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(ae+Le,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return ce}const ue={};ue[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),ue[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ue[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(r.DEPTH_TEST),a.setFunc(br),ke(!1),Ve(ec),re(r.CULL_FACE),L(li);function re(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function Se(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Re(F,ae){return u[F]!==ae?(r.bindFramebuffer(F,ae),u[F]=ae,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ae),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ie(F,ae){let Y=d,J=!1;if(F){Y=f.get(ae),Y===void 0&&(Y=[],f.set(ae,Y));const he=F.textures;if(Y.length!==he.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,Le=he.length;ce<Le;ce++)Y[ce]=r.COLOR_ATTACHMENT0+ce;Y.length=he.length,J=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,J=!0);J&&r.drawBuffers(Y)}function et(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const Fe={[Pi]:r.FUNC_ADD,[bf]:r.FUNC_SUBTRACT,[Sf]:r.FUNC_REVERSE_SUBTRACT};Fe[Ef]=r.MIN,Fe[wf]=r.MAX;const dt={[Tf]:r.ZERO,[Af]:r.ONE,[Rf]:r.SRC_COLOR,[ho]:r.SRC_ALPHA,[Uf]:r.SRC_ALPHA_SATURATE,[If]:r.DST_COLOR,[Pf]:r.DST_ALPHA,[Cf]:r.ONE_MINUS_SRC_COLOR,[uo]:r.ONE_MINUS_SRC_ALPHA,[Lf]:r.ONE_MINUS_DST_COLOR,[Df]:r.ONE_MINUS_DST_ALPHA,[Of]:r.CONSTANT_COLOR,[Nf]:r.ONE_MINUS_CONSTANT_COLOR,[Ff]:r.CONSTANT_ALPHA,[Bf]:r.ONE_MINUS_CONSTANT_ALPHA};function L(F,ae,Y,J,he,ce,Le,ct,Pt,Ke){if(F===li){_===!0&&(Se(r.BLEND),_=!1);return}if(_===!1&&(re(r.BLEND),_=!0),F!==yf){if(F!==m||Ke!==x){if((p!==Pi||y!==Pi)&&(r.blendEquation(r.FUNC_ADD),p=Pi,y=Pi),Ke)switch(F){case _r:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tc:r.blendFunc(r.ONE,r.ONE);break;case nc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ic:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case _r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case nc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ic:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,b=null,M=null,A=null,E.set(0,0,0),C=0,m=F,x=Ke}return}he=he||ae,ce=ce||Y,Le=Le||J,(ae!==p||he!==y)&&(r.blendEquationSeparate(Fe[ae],Fe[he]),p=ae,y=he),(Y!==S||J!==b||ce!==M||Le!==A)&&(r.blendFuncSeparate(dt[Y],dt[J],dt[ce],dt[Le]),S=Y,b=J,M=ce,A=Le),(ct.equals(E)===!1||Pt!==C)&&(r.blendColor(ct.r,ct.g,ct.b,Pt),E.copy(ct),C=Pt),m=F,x=!1}function sn(F,ae){F.side===Vn?Se(r.CULL_FACE):re(r.CULL_FACE);let Y=F.side===Gt;ae&&(Y=!Y),ke(Y),F.blending===_r&&F.transparent===!1?L(li):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const J=F.stencilWrite;o.setTest(J),J&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),nt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function ke(F){v!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),v=F)}function Ve(F){F!==xf?(re(r.CULL_FACE),F!==R&&(F===ec?r.cullFace(r.BACK):F===vf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),R=F}function ye(F){F!==V&&(I&&r.lineWidth(F),V=F)}function nt(F,ae,Y){F?(re(r.POLYGON_OFFSET_FILL),(U!==ae||N!==Y)&&(r.polygonOffset(ae,Y),U=ae,N=Y)):Se(r.POLYGON_OFFSET_FILL)}function ve(F){F?re(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function P(F){F===void 0&&(F=r.TEXTURE0+O-1),Z!==F&&(r.activeTexture(F),Z=F)}function w(F,ae,Y){Y===void 0&&(Z===null?Y=r.TEXTURE0+O-1:Y=Z);let J=Q[Y];J===void 0&&(J={type:void 0,texture:void 0},Q[Y]=J),(J.type!==F||J.texture!==ae)&&(Z!==Y&&(r.activeTexture(Y),Z=Y),r.bindTexture(F,ae||ue[F]),J.type=F,J.texture=ae)}function H(){const F=Q[Z];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(F){we.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),we.copy(F))}function _e(F){q.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),q.copy(F))}function He(F,ae){let Y=c.get(ae);Y===void 0&&(Y=new WeakMap,c.set(ae,Y));let J=Y.get(F);J===void 0&&(J=r.getUniformBlockIndex(ae,F.name),Y.set(F,J))}function Ue(F,ae){const J=c.get(ae).get(F);l.get(ae)!==J&&(r.uniformBlockBinding(ae,J,F.__bindingPointIndex),l.set(ae,J))}function tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Z=null,Q={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,b=null,y=null,M=null,A=null,E=new Ne(0,0,0),C=0,x=!1,v=null,R=null,V=null,U=null,N=null,we.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Se,bindFramebuffer:Re,drawBuffers:Ie,useProgram:et,setBlending:L,setMaterial:sn,setFlipSided:ke,setCullFace:Ve,setLineWidth:ye,setPolygonOffset:nt,setScissorTest:ve,activeTexture:P,bindTexture:w,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:me,texImage3D:Te,updateUBOMapping:He,uniformBlockBinding:Ue,texStorage2D:Ge,texStorage3D:ie,texSubImage2D:j,texSubImage3D:xe,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:Ce,viewport:_e,reset:tt}}function M0(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return d?new OffscreenCanvas(P,w):is("canvas")}function _(P,w,H){let $=1;const ee=ve(P);if((ee.width>H||ee.height>H)&&($=H/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor($*ee.width),xe=Math.floor($*ee.height);u===void 0&&(u=g(j,xe));const le=w?g(j,xe):u;return le.width=j,le.height=xe,le.getContext("2d").drawImage(P,0,0,j,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+xe+")."),le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(P,w,H,$,ee=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=w;if(w===r.RED&&(H===r.FLOAT&&(j=r.R32F),H===r.HALF_FLOAT&&(j=r.R16F),H===r.UNSIGNED_BYTE&&(j=r.R8)),w===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.R8UI),H===r.UNSIGNED_SHORT&&(j=r.R16UI),H===r.UNSIGNED_INT&&(j=r.R32UI),H===r.BYTE&&(j=r.R8I),H===r.SHORT&&(j=r.R16I),H===r.INT&&(j=r.R32I)),w===r.RG&&(H===r.FLOAT&&(j=r.RG32F),H===r.HALF_FLOAT&&(j=r.RG16F),H===r.UNSIGNED_BYTE&&(j=r.RG8)),w===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RG8UI),H===r.UNSIGNED_SHORT&&(j=r.RG16UI),H===r.UNSIGNED_INT&&(j=r.RG32UI),H===r.BYTE&&(j=r.RG8I),H===r.SHORT&&(j=r.RG16I),H===r.INT&&(j=r.RG32I)),w===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RGB8UI),H===r.UNSIGNED_SHORT&&(j=r.RGB16UI),H===r.UNSIGNED_INT&&(j=r.RGB32UI),H===r.BYTE&&(j=r.RGB8I),H===r.SHORT&&(j=r.RGB16I),H===r.INT&&(j=r.RGB32I)),w===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),H===r.UNSIGNED_INT&&(j=r.RGBA32UI),H===r.BYTE&&(j=r.RGBA8I),H===r.SHORT&&(j=r.RGBA16I),H===r.INT&&(j=r.RGBA32I)),w===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),w===r.RGBA){const xe=ee?na:qe.getTransfer($);H===r.FLOAT&&(j=r.RGBA32F),H===r.HALF_FLOAT&&(j=r.RGBA16F),H===r.UNSIGNED_BYTE&&(j=xe===$e?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(P,w){let H;return P?w===null||w===Hi||w===wr?H=r.DEPTH24_STENCIL8:w===Hn?H=r.DEPTH32F_STENCIL8:w===ns&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Hi||w===wr?H=r.DEPTH_COMPONENT24:w===Hn?H=r.DEPTH_COMPONENT32F:w===ns&&(H=r.DEPTH_COMPONENT16),H}function M(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==fn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function A(P){const w=P.target;w.removeEventListener("dispose",A),C(w),w.isVideoTexture&&h.delete(w)}function E(P){const w=P.target;w.removeEventListener("dispose",E),v(w)}function C(P){const w=n.get(P);if(w.__webglInit===void 0)return;const H=P.source,$=f.get(H);if($){const ee=$[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&x(P),Object.keys($).length===0&&f.delete(H)}n.remove(P)}function x(P){const w=n.get(P);r.deleteTexture(w.__webglTexture);const H=P.source,$=f.get(H);delete $[w.__cacheKey],a.memory.textures--}function v(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let ee=0;ee<w.__webglFramebuffer[$].length;ee++)r.deleteFramebuffer(w.__webglFramebuffer[$][ee]);else r.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)r.deleteFramebuffer(w.__webglFramebuffer[$]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=P.textures;for(let $=0,ee=H.length;$<ee;$++){const j=n.get(H[$]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(H[$])}n.remove(P)}let R=0;function V(){R=0}function U(){const P=R;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),R+=1,P}function N(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function O(P,w){const H=n.get(P);if(P.isVideoTexture&&ye(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,P,w);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+w)}function I(P,w){const H=n.get(P);if(P.version>0&&H.__version!==P.version){q(H,P,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+w)}function W(P,w){const H=n.get(P);if(P.version>0&&H.__version!==P.version){q(H,P,w);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+w)}function k(P,w){const H=n.get(P);if(P.version>0&&H.__version!==P.version){K(H,P,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+w)}const Z={[bo]:r.REPEAT,[Li]:r.CLAMP_TO_EDGE,[So]:r.MIRRORED_REPEAT},Q={[Sn]:r.NEAREST,[jf]:r.NEAREST_MIPMAP_NEAREST,[gs]:r.NEAREST_MIPMAP_LINEAR,[fn]:r.LINEAR,[ya]:r.LINEAR_MIPMAP_NEAREST,[Ui]:r.LINEAR_MIPMAP_LINEAR},ne={[Jf]:r.NEVER,[rd]:r.ALWAYS,[Qf]:r.LESS,[Wh]:r.LEQUAL,[ed]:r.EQUAL,[id]:r.GEQUAL,[td]:r.GREATER,[nd]:r.NOTEQUAL};function de(P,w){if(w.type===Hn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===fn||w.magFilter===ya||w.magFilter===gs||w.magFilter===Ui||w.minFilter===fn||w.minFilter===ya||w.minFilter===gs||w.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Z[w.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Z[w.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Z[w.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Q[w.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Q[w.minFilter]),w.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ne[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Sn||w.minFilter!==gs&&w.minFilter!==Ui||w.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function we(P,w){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",A));const $=w.source;let ee=f.get($);ee===void 0&&(ee={},f.set($,ee));const j=N(w);if(j!==P.__cacheKey){ee[j]===void 0&&(ee[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[j].usedTimes++;const xe=ee[P.__cacheKey];xe!==void 0&&(ee[P.__cacheKey].usedTimes--,xe.usedTimes===0&&x(w)),P.__cacheKey=j,P.__webglTexture=ee[j].texture}return H}function q(P,w,H){let $=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=r.TEXTURE_3D);const ee=we(P,w),j=w.source;t.bindTexture($,P.__webglTexture,r.TEXTURE0+H);const xe=n.get(j);if(j.version!==xe.__version||ee===!0){t.activeTexture(r.TEXTURE0+H);const le=qe.getPrimaries(qe.workingColorSpace),pe=w.colorSpace===ri?null:qe.getPrimaries(w.colorSpace),Ge=w.colorSpace===ri||le===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ie=_(w.image,!1,i.maxTextureSize);ie=nt(w,ie);const me=s.convert(w.format,w.colorSpace),Te=s.convert(w.type);let Ce=b(w.internalFormat,me,Te,w.colorSpace,w.isVideoTexture);de($,w);let _e;const He=w.mipmaps,Ue=w.isVideoTexture!==!0,tt=xe.__version===void 0||ee===!0,F=j.dataReady,ae=M(w,ie);if(w.isDepthTexture)Ce=y(w.format===Tr,w.type),tt&&(Ue?t.texStorage2D(r.TEXTURE_2D,1,Ce,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Ce,ie.width,ie.height,0,me,Te,null));else if(w.isDataTexture)if(He.length>0){Ue&&tt&&t.texStorage2D(r.TEXTURE_2D,ae,Ce,He[0].width,He[0].height);for(let Y=0,J=He.length;Y<J;Y++)_e=He[Y],Ue?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,_e.width,_e.height,me,Te,_e.data):t.texImage2D(r.TEXTURE_2D,Y,Ce,_e.width,_e.height,0,me,Te,_e.data);w.generateMipmaps=!1}else Ue?(tt&&t.texStorage2D(r.TEXTURE_2D,ae,Ce,ie.width,ie.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie.width,ie.height,me,Te,ie.data)):t.texImage2D(r.TEXTURE_2D,0,Ce,ie.width,ie.height,0,me,Te,ie.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ue&&tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Ce,He[0].width,He[0].height,ie.depth);for(let Y=0,J=He.length;Y<J;Y++)if(_e=He[Y],w.format!==bn)if(me!==null)if(Ue){if(F)if(w.layerUpdates.size>0){const he=Uc(_e.width,_e.height,w.format,w.type);for(const ce of w.layerUpdates){const Le=_e.data.subarray(ce*he/_e.data.BYTES_PER_ELEMENT,(ce+1)*he/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,ce,_e.width,_e.height,1,me,Le)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,ie.depth,me,_e.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,Ce,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,ie.depth,me,Te,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,Ce,_e.width,_e.height,ie.depth,0,me,Te,_e.data)}else{Ue&&tt&&t.texStorage2D(r.TEXTURE_2D,ae,Ce,He[0].width,He[0].height);for(let Y=0,J=He.length;Y<J;Y++)_e=He[Y],w.format!==bn?me!==null?Ue?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,_e.width,_e.height,me,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,Ce,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,_e.width,_e.height,me,Te,_e.data):t.texImage2D(r.TEXTURE_2D,Y,Ce,_e.width,_e.height,0,me,Te,_e.data)}else if(w.isDataArrayTexture)if(Ue){if(tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Ce,ie.width,ie.height,ie.depth),F)if(w.layerUpdates.size>0){const Y=Uc(ie.width,ie.height,w.format,w.type);for(const J of w.layerUpdates){const he=ie.data.subarray(J*Y/ie.data.BYTES_PER_ELEMENT,(J+1)*Y/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,me,Te,he)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,me,Te,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ce,ie.width,ie.height,ie.depth,0,me,Te,ie.data);else if(w.isData3DTexture)Ue?(tt&&t.texStorage3D(r.TEXTURE_3D,ae,Ce,ie.width,ie.height,ie.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,me,Te,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Ce,ie.width,ie.height,ie.depth,0,me,Te,ie.data);else if(w.isFramebufferTexture){if(tt)if(Ue)t.texStorage2D(r.TEXTURE_2D,ae,Ce,ie.width,ie.height);else{let Y=ie.width,J=ie.height;for(let he=0;he<ae;he++)t.texImage2D(r.TEXTURE_2D,he,Ce,Y,J,0,me,Te,null),Y>>=1,J>>=1}}else if(He.length>0){if(Ue&&tt){const Y=ve(He[0]);t.texStorage2D(r.TEXTURE_2D,ae,Ce,Y.width,Y.height)}for(let Y=0,J=He.length;Y<J;Y++)_e=He[Y],Ue?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,me,Te,_e):t.texImage2D(r.TEXTURE_2D,Y,Ce,me,Te,_e);w.generateMipmaps=!1}else if(Ue){if(tt){const Y=ve(ie);t.texStorage2D(r.TEXTURE_2D,ae,Ce,Y.width,Y.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me,Te,ie)}else t.texImage2D(r.TEXTURE_2D,0,Ce,me,Te,ie);m(w)&&p($),xe.__version=j.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function K(P,w,H){if(w.image.length!==6)return;const $=we(P,w),ee=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+H);const j=n.get(ee);if(ee.version!==j.__version||$===!0){t.activeTexture(r.TEXTURE0+H);const xe=qe.getPrimaries(qe.workingColorSpace),le=w.colorSpace===ri?null:qe.getPrimaries(w.colorSpace),pe=w.colorSpace===ri||xe===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ge=w.isCompressedTexture||w.image[0].isCompressedTexture,ie=w.image[0]&&w.image[0].isDataTexture,me=[];for(let J=0;J<6;J++)!Ge&&!ie?me[J]=_(w.image[J],!0,i.maxCubemapSize):me[J]=ie?w.image[J].image:w.image[J],me[J]=nt(w,me[J]);const Te=me[0],Ce=s.convert(w.format,w.colorSpace),_e=s.convert(w.type),He=b(w.internalFormat,Ce,_e,w.colorSpace),Ue=w.isVideoTexture!==!0,tt=j.__version===void 0||$===!0,F=ee.dataReady;let ae=M(w,Te);de(r.TEXTURE_CUBE_MAP,w);let Y;if(Ge){Ue&&tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,He,Te.width,Te.height);for(let J=0;J<6;J++){Y=me[J].mipmaps;for(let he=0;he<Y.length;he++){const ce=Y[he];w.format!==bn?Ce!==null?Ue?F&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,ce.width,ce.height,Ce,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,He,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,ce.width,ce.height,Ce,_e,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,He,ce.width,ce.height,0,Ce,_e,ce.data)}}}else{if(Y=w.mipmaps,Ue&&tt){Y.length>0&&ae++;const J=ve(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,He,J.width,J.height)}for(let J=0;J<6;J++)if(ie){Ue?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me[J].width,me[J].height,Ce,_e,me[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,me[J].width,me[J].height,0,Ce,_e,me[J].data);for(let he=0;he<Y.length;he++){const Le=Y[he].image[J].image;Ue?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Le.width,Le.height,Ce,_e,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,He,Le.width,Le.height,0,Ce,_e,Le.data)}}else{Ue?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ce,_e,me[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,Ce,_e,me[J]);for(let he=0;he<Y.length;he++){const ce=Y[he];Ue?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Ce,_e,ce.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,He,Ce,_e,ce.image[J])}}}m(w)&&p(r.TEXTURE_CUBE_MAP),j.__version=ee.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ue(P,w,H,$,ee,j){const xe=s.convert(H.format,H.colorSpace),le=s.convert(H.type),pe=b(H.internalFormat,xe,le,H.colorSpace),Ge=n.get(w),ie=n.get(H);if(ie.__renderTarget=w,!Ge.__hasExternalTextures){const me=Math.max(1,w.width>>j),Te=Math.max(1,w.height>>j);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,pe,me,Te,w.depth,0,xe,le,null):t.texImage2D(ee,j,pe,me,Te,0,xe,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Ve(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,ee,ie.__webglTexture,0,ke(w)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,ee,ie.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(P,w,H){if(r.bindRenderbuffer(r.RENDERBUFFER,P),w.depthBuffer){const $=w.depthTexture,ee=$&&$.isDepthTexture?$.type:null,j=y(w.stencilBuffer,ee),xe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=ke(w);Ve(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,j,w.width,w.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,j,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,j,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,P)}else{const $=w.textures;for(let ee=0;ee<$.length;ee++){const j=$[ee],xe=s.convert(j.format,j.colorSpace),le=s.convert(j.type),pe=b(j.internalFormat,xe,le,j.colorSpace),Ge=ke(w);H&&Ve(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,pe,w.width,w.height):Ve(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge,pe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,pe,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(w.depthTexture);$.__renderTarget=w,(!$.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const ee=$.__webglTexture,j=ke(w);if(w.depthTexture.format===gr)Ve(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(w.depthTexture.format===Tr)Ve(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Re(P){const w=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),$){const ee=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),w.__depthDisposeCallback=ee}w.__boundDepthTexture=$}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Se(w.__webglFramebuffer,P)}else if(H){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]===void 0)w.__webglDepthbuffer[$]=r.createRenderbuffer(),re(w.__webglDepthbuffer[$],P,!1);else{const ee=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),re(w.__webglDepthbuffer,P,!1);else{const $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ee)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(P,w,H){const $=n.get(P);w!==void 0&&ue($.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Re(P)}function et(P){const w=P.texture,H=n.get(P),$=n.get(w);P.addEventListener("dispose",E);const ee=P.textures,j=P.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=w.version,a.memory.textures++),j){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let pe=0;pe<w.mipmaps.length;pe++)H.__webglFramebuffer[le][pe]=r.createFramebuffer()}else H.__webglFramebuffer[le]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)H.__webglFramebuffer[le]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(xe)for(let le=0,pe=ee.length;le<pe;le++){const Ge=n.get(ee[le]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&Ve(P)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const pe=ee[le];H.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[le]);const Ge=s.convert(pe.format,pe.colorSpace),ie=s.convert(pe.type),me=b(pe.internalFormat,Ge,ie,pe.colorSpace,P.isXRRenderTarget===!0),Te=ke(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,me,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,H.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),re(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),de(r.TEXTURE_CUBE_MAP,w);for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)ue(H.__webglFramebuffer[le][pe],P,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else ue(H.__webglFramebuffer[le],P,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(w)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let le=0,pe=ee.length;le<pe;le++){const Ge=ee[le],ie=n.get(Ge);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),de(r.TEXTURE_2D,Ge),ue(H.__webglFramebuffer,P,Ge,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),m(Ge)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),de(le,w),w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)ue(H.__webglFramebuffer[pe],P,w,r.COLOR_ATTACHMENT0,le,pe);else ue(H.__webglFramebuffer,P,w,r.COLOR_ATTACHMENT0,le,0);m(w)&&p(le),t.unbindTexture()}P.depthBuffer&&Re(P)}function Fe(P){const w=P.textures;for(let H=0,$=w.length;H<$;H++){const ee=w[H];if(m(ee)){const j=S(P),xe=n.get(ee).__webglTexture;t.bindTexture(j,xe),p(j),t.unbindTexture()}}}const dt=[],L=[];function sn(P){if(P.samples>0){if(Ve(P)===!1){const w=P.textures,H=P.width,$=P.height;let ee=r.COLOR_BUFFER_BIT;const j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(P),le=w.length>1;if(le)for(let pe=0;pe<w.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const Ge=n.get(w[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,H,$,0,0,H,$,ee,r.NEAREST),l===!0&&(dt.length=0,L.length=0,dt.push(r.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(dt.push(j),L.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<w.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const Ge=n.get(w[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,Ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function ke(P){return Math.min(i.maxSamples,P.samples)}function Ve(P){const w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ye(P){const w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function nt(P,w){const H=P.colorSpace,$=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Ar&&H!==ri&&(qe.getTransfer(H)===$e?($!==bn||ee!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function ve(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=V,this.setTexture2D=O,this.setTexture2DArray=I,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=Ie,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ve}function y0(r,e){function t(n,i=ri){let s;const a=qe.getTransfer(i);if(n===Xn)return r.UNSIGNED_BYTE;if(n===gl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return r.BYTE;if(n===Uh)return r.SHORT;if(n===ns)return r.UNSIGNED_SHORT;if(n===_l)return r.INT;if(n===Hi)return r.UNSIGNED_INT;if(n===Hn)return r.FLOAT;if(n===us)return r.HALF_FLOAT;if(n===Nh)return r.ALPHA;if(n===Fh)return r.RGB;if(n===bn)return r.RGBA;if(n===Bh)return r.LUMINANCE;if(n===zh)return r.LUMINANCE_ALPHA;if(n===gr)return r.DEPTH_COMPONENT;if(n===Tr)return r.DEPTH_STENCIL;if(n===kh)return r.RED;if(n===vl)return r.RED_INTEGER;if(n===Vh)return r.RG;if(n===Ml)return r.RG_INTEGER;if(n===yl)return r.RGBA_INTEGER;if(n===Xs||n===qs||n===Ys||n===js)if(a===$e)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===wo||n===To||n===Ao)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===To)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ro||n===Co||n===Po)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ro||n===Co)return a===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Po)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Do||n===Io||n===Lo||n===Uo||n===Oo||n===No||n===Fo||n===Bo||n===zo||n===ko||n===Vo||n===Ho||n===Go||n===Wo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Do)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Io)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zo)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ko)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wo)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zs||n===Xo||n===qo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Zs)return a===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hh||n===Yo||n===jo||n===Zo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const b0={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(b0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const S0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E0=`
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

}`;class w0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Rt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qn({vertexShader:S0,fragmentShader:E0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T0 extends qi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new w0,m=t.getContextAttributes();let p=null,S=null;const b=[],y=[],M=new Ae;let A=null;const E=new un;E.viewport=new mt;const C=new un;C.viewport=new mt;const x=[E,C],v=new Xd;let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=b[q];return K===void 0&&(K=new Ka,b[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=b[q];return K===void 0&&(K=new Ka,b[q]=K),K.getGripSpace()},this.getHand=function(q){let K=b[q];return K===void 0&&(K=new Ka,b[q]=K),K.getHandSpace()};function U(q){const K=y.indexOf(q.inputSource);if(K===-1)return;const ue=b[K];ue!==void 0&&(ue.update(q.inputSource,q.frame,c||a),ue.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",O);for(let q=0;q<b.length;q++){const K=y[q];K!==null&&(y[q]=null,b[q].disconnect(K))}R=null,V=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,i=null,S=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",N),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(M),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let ue=null,re=null,Se=null;m.depth&&(Se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?Tr:gr,re=m.stencil?wr:Hi);const Re={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Re),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Gi(f.textureWidth,f.textureHeight,{format:bn,type:Xn,depthTexture:new nu(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Gi(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function O(q){for(let K=0;K<q.removed.length;K++){const ue=q.removed[K],re=y.indexOf(ue);re>=0&&(y[re]=null,b[re].disconnect(ue))}for(let K=0;K<q.added.length;K++){const ue=q.added[K];let re=y.indexOf(ue);if(re===-1){for(let Re=0;Re<b.length;Re++)if(Re>=y.length){y.push(ue),re=Re;break}else if(y[Re]===null){y[Re]=ue,re=Re;break}if(re===-1)break}const Se=b[re];Se&&Se.connect(ue)}}const I=new D,W=new D;function k(q,K,ue){I.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(ue.matrixWorld);const re=I.distanceTo(W),Se=K.projectionMatrix.elements,Re=ue.projectionMatrix.elements,Ie=Se[14]/(Se[10]-1),et=Se[14]/(Se[10]+1),Fe=(Se[9]+1)/Se[5],dt=(Se[9]-1)/Se[5],L=(Se[8]-1)/Se[0],sn=(Re[8]+1)/Re[0],ke=Ie*L,Ve=Ie*sn,ye=re/(-L+sn),nt=ye*-L;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(nt),q.translateZ(ye),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ve=Ie+ye,P=et+ye,w=ke-nt,H=Ve+(re-nt),$=Fe*et/P*ve,ee=dt*et/P*ve;q.projectionMatrix.makePerspective(w,H,$,ee,ve,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Z(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let K=q.near,ue=q.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(ue=_.depthFar)),v.near=C.near=E.near=K,v.far=C.far=E.far=ue,(R!==v.near||V!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,V=v.far),E.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,v.layers.mask=E.layers.mask|C.layers.mask;const re=q.parent,Se=v.cameras;Z(v,re);for(let Re=0;Re<Se.length;Re++)Z(Se[Re],re);Se.length===2?k(v,E,C):v.projectionMatrix.copy(E.projectionMatrix),Q(q,v,re)};function Q(q,K,ue){ue===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ue.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ko*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ne=null;function de(q,K){if(h=K.getViewerPose(c||a),g=K,h!==null){const ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let re=!1;ue.length!==v.cameras.length&&(v.cameras.length=0,re=!0);for(let Re=0;Re<ue.length;Re++){const Ie=ue[Re];let et=null;if(d!==null)et=d.getViewport(Ie);else{const dt=u.getViewSubImage(f,Ie);et=dt.viewport,Re===0&&(e.setRenderTargetTextures(S,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(S))}let Fe=x[Re];Fe===void 0&&(Fe=new un,Fe.layers.enable(Re),Fe.viewport=new mt,x[Re]=Fe),Fe.matrix.fromArray(Ie.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ie.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(et.x,et.y,et.width,et.height),Re===0&&(v.matrix.copy(Fe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),re===!0&&v.cameras.push(Fe)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const Re=u.getDepthInformation(ue[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,i.renderState)}}for(let ue=0;ue<b.length;ue++){const re=y[ue],Se=b[ue];re!==null&&Se!==void 0&&Se.update(re,K,c||a)}ne&&ne(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const we=new iu;we.setAnimationLoop(de),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}}const Ei=new Pn,A0=new it;function R0(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$h(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),b=S.envMap,y=S.envMapRotation;b&&(m.envMap.value=b,Ei.copy(y),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(A0.makeRotationFromEuler(Ei)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function C0(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const y=b.program;n.uniformBlockBinding(S,y)}function c(S,b){let y=i[S.id];y===void 0&&(g(S),y=h(S),i[S.id]=y,S.addEventListener("dispose",m));const M=b.program;n.updateUBOMapping(S,M);const A=e.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function h(S){const b=u();S.__bindingPointIndex=b;const y=r.createBuffer(),M=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,M,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,y),y}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=i[S.id],y=S.uniforms,M=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let A=0,E=y.length;A<E;A++){const C=Array.isArray(y[A])?y[A]:[y[A]];for(let x=0,v=C.length;x<v;x++){const R=C[x];if(d(R,A,x,M)===!0){const V=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let N=0;for(let O=0;O<U.length;O++){const I=U[O],W=_(I);typeof I=="number"||typeof I=="boolean"?(R.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,V+N,R.__data)):I.isMatrix3?(R.__data[0]=I.elements[0],R.__data[1]=I.elements[1],R.__data[2]=I.elements[2],R.__data[3]=0,R.__data[4]=I.elements[3],R.__data[5]=I.elements[4],R.__data[6]=I.elements[5],R.__data[7]=0,R.__data[8]=I.elements[6],R.__data[9]=I.elements[7],R.__data[10]=I.elements[8],R.__data[11]=0):(I.toArray(R.__data,N),N+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,b,y,M){const A=S.value,E=b+"_"+y;if(M[E]===void 0)return typeof A=="number"||typeof A=="boolean"?M[E]=A:M[E]=A.clone(),!0;{const C=M[E];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return M[E]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(S){const b=S.uniforms;let y=0;const M=16;for(let E=0,C=b.length;E<C;E++){const x=Array.isArray(b[E])?b[E]:[b[E]];for(let v=0,R=x.length;v<R;v++){const V=x[v],U=Array.isArray(V.value)?V.value:[V.value];for(let N=0,O=U.length;N<O;N++){const I=U[N],W=_(I),k=y%M,Z=k%W.boundary,Q=k+Z;y+=Z,Q!==0&&M-Q<W.storage&&(y+=M-Q),V.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=W.storage}}}const A=y%M;return A>0&&(y+=M-A),S.__size=y,S.__cache={},this}function _(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class P0{constructor(e={}){const{canvas:t=od(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=ci,this.toneMappingExposure=1;const y=this;let M=!1,A=0,E=0,C=null,x=-1,v=null;const R=new mt,V=new mt;let U=null;const N=new Ne(0);let O=0,I=t.width,W=t.height,k=1,Z=null,Q=null;const ne=new mt(0,0,I,W),de=new mt(0,0,I,W);let we=!1;const q=new eu;let K=!1,ue=!1;this.transmissionResolutionScale=1;const re=new it,Se=new it,Re=new D,Ie=new mt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function dt(){return C===null?k:1}let L=n;function sn(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ce,!1),L===null){const B="webgl2";if(L=sn(B,T),L===null)throw sn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ke,Ve,ye,nt,ve,P,w,H,$,ee,j,xe,le,pe,Ge,ie,me,Te,Ce,_e,He,Ue,tt,F;function ae(){ke=new z_(L),ke.init(),Ue=new y0(L,ke),Ve=new L_(L,ke,e,Ue),ye=new v0(L,ke),Ve.reverseDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),nt=new H_(L),ve=new a0,P=new M0(L,ke,ye,ve,Ve,Ue,nt),w=new O_(y),H=new B_(y),$=new Zd(L),tt=new D_(L,$),ee=new k_(L,$,nt,tt),j=new W_(L,ee,$,nt),Ce=new G_(L,Ve,P),ie=new U_(ve),xe=new s0(y,w,H,ke,Ve,tt,ie),le=new R0(y,ve),pe=new l0,Ge=new p0(ke),Te=new P_(y,w,H,ye,j,d,l),me=new g0(y,j,Ve),F=new C0(L,nt,Ve,ye),_e=new I_(L,ke,nt),He=new V_(L,ke,nt),nt.programs=xe.programs,y.capabilities=Ve,y.extensions=ke,y.properties=ve,y.renderLists=pe,y.shadowMap=me,y.state=ye,y.info=nt}ae();const Y=new T0(y,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=ke.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ke.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(I,W,!1))},this.getSize=function(T){return T.set(I,W)},this.setSize=function(T,B,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=T,W=B,t.width=Math.floor(T*k),t.height=Math.floor(B*k),G===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(I*k,W*k).floor()},this.setDrawingBufferSize=function(T,B,G){I=T,W=B,k=G,t.width=Math.floor(T*G),t.height=Math.floor(B*G),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(ne)},this.setViewport=function(T,B,G,X){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,B,G,X),ye.viewport(R.copy(ne).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(de)},this.setScissor=function(T,B,G,X){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,B,G,X),ye.scissor(V.copy(de).multiplyScalar(k).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(T){ye.setScissorTest(we=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(T=!0,B=!0,G=!0){let X=0;if(T){let z=!1;if(C!==null){const te=C.texture.format;z=te===yl||te===Ml||te===vl}if(z){const te=C.texture.type,oe=te===Xn||te===Hi||te===ns||te===wr||te===gl||te===xl,fe=Te.getClearColor(),ge=Te.getClearAlpha(),Pe=fe.r,De=fe.g,be=fe.b;oe?(g[0]=Pe,g[1]=De,g[2]=be,g[3]=ge,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Pe,_[1]=De,_[2]=be,_[3]=ge,L.clearBufferiv(L.COLOR,0,_))}else X|=L.COLOR_BUFFER_BIT}B&&(X|=L.DEPTH_BUFFER_BIT),G&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Te.dispose(),pe.dispose(),Ge.dispose(),ve.dispose(),w.dispose(),H.dispose(),j.dispose(),tt.dispose(),F.dispose(),xe.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Yl),Y.removeEventListener("sessionend",jl),gi.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=nt.autoReset,B=me.enabled,G=me.autoUpdate,X=me.needsUpdate,z=me.type;ae(),nt.autoReset=T,me.enabled=B,me.autoUpdate=G,me.needsUpdate=X,me.type=z}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Le(T){const B=T.target;B.removeEventListener("dispose",Le),ct(B)}function ct(T){Pt(T),ve.remove(T)}function Pt(T){const B=ve.get(T).programs;B!==void 0&&(B.forEach(function(G){xe.releaseProgram(G)}),T.isShaderMaterial&&xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,G,X,z,te){B===null&&(B=et);const oe=z.isMesh&&z.matrixWorld.determinant()<0,fe=hf(T,B,G,X,z);ye.setMaterial(X,oe);let ge=G.index,Pe=1;if(X.wireframe===!0){if(ge=ee.getWireframeAttribute(G),ge===void 0)return;Pe=2}const De=G.drawRange,be=G.attributes.position;let We=De.start*Pe,je=(De.start+De.count)*Pe;te!==null&&(We=Math.max(We,te.start*Pe),je=Math.min(je,(te.start+te.count)*Pe)),ge!==null?(We=Math.max(We,0),je=Math.min(je,ge.count)):be!=null&&(We=Math.max(We,0),je=Math.min(je,be.count));const _t=je-We;if(_t<0||_t===1/0)return;tt.setup(z,X,fe,G,ge);let ht,Xe=_e;if(ge!==null&&(ht=$.get(ge),Xe=He,Xe.setIndex(ht)),z.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*dt()),Xe.setMode(L.LINES)):Xe.setMode(L.TRIANGLES);else if(z.isLine){let Ee=X.linewidth;Ee===void 0&&(Ee=1),ye.setLineWidth(Ee*dt()),z.isLineSegments?Xe.setMode(L.LINES):z.isLineLoop?Xe.setMode(L.LINE_LOOP):Xe.setMode(L.LINE_STRIP)}else z.isPoints?Xe.setMode(L.POINTS):z.isSprite&&Xe.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Xe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Xe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ee=z._multiDrawStarts,At=z._multiDrawCounts,Ze=z._multiDrawCount,_n=ge?$.get(ge).bytesPerElement:1,Zi=ve.get(X).currentProgram.getUniforms();for(let Zt=0;Zt<Ze;Zt++)Zi.setValue(L,"_gl_DrawID",Zt),Xe.render(Ee[Zt]/_n,At[Zt])}else if(z.isInstancedMesh)Xe.renderInstances(We,_t,z.count);else if(G.isInstancedBufferGeometry){const Ee=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,At=Math.min(G.instanceCount,Ee);Xe.renderInstances(We,_t,At)}else Xe.render(We,_t)};function Ke(T,B,G){T.transparent===!0&&T.side===Vn&&T.forceSinglePass===!1?(T.side=Gt,T.needsUpdate=!0,_s(T,B,G),T.side=fi,T.needsUpdate=!0,_s(T,B,G),T.side=Vn):_s(T,B,G)}this.compile=function(T,B,G=null){G===null&&(G=T),p=Ge.get(G),p.init(B),b.push(p),G.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==G&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const te=z.material;if(te)if(Array.isArray(te))for(let oe=0;oe<te.length;oe++){const fe=te[oe];Ke(fe,G,z),X.add(fe)}else Ke(te,G,z),X.add(te)}),b.pop(),p=null,X},this.compileAsync=function(T,B,G=null){const X=this.compile(T,B,G);return new Promise(z=>{function te(){if(X.forEach(function(oe){ve.get(oe).currentProgram.isReady()&&X.delete(oe)}),X.size===0){z(T);return}setTimeout(te,10)}ke.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let mn=null;function In(T){mn&&mn(T)}function Yl(){gi.stop()}function jl(){gi.start()}const gi=new iu;gi.setAnimationLoop(In),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(T){mn=T,Y.setAnimationLoop(T),T===null?gi.stop():gi.start()},Y.addEventListener("sessionstart",Yl),Y.addEventListener("sessionend",jl),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,B,C),p=Ge.get(T,b.length),p.init(B),b.push(p),Se.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),q.setFromProjectionMatrix(Se),ue=this.localClippingEnabled,K=ie.init(this.clippingPlanes,ue),m=pe.get(T,S.length),m.init(),S.push(m),Y.enabled===!0&&Y.isPresenting===!0){const te=y.xr.getDepthSensingMesh();te!==null&&va(te,B,-1/0,y.sortObjects)}va(T,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Z,Q),Fe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Fe&&Te.addToRenderList(m,T),this.info.render.frame++,K===!0&&ie.beginShadows();const G=p.state.shadowsArray;me.render(G,T,B),K===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const te=B.cameras;if(z.length>0)for(let oe=0,fe=te.length;oe<fe;oe++){const ge=te[oe];Kl(X,z,T,ge)}Fe&&Te.render(T);for(let oe=0,fe=te.length;oe<fe;oe++){const ge=te[oe];Zl(m,T,ge,ge.viewport)}}else z.length>0&&Kl(X,z,T,B),Fe&&Te.render(T),Zl(m,T,B);C!==null&&E===0&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(y,T,B),tt.resetDefaultState(),x=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],K===!0&&ie.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function va(T,B,G,X){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){X&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Se);const oe=j.update(T),fe=T.material;fe.visible&&m.push(T,oe,fe,G,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const oe=j.update(T),fe=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ie.copy(oe.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(Se)),Array.isArray(fe)){const ge=oe.groups;for(let Pe=0,De=ge.length;Pe<De;Pe++){const be=ge[Pe],We=fe[be.materialIndex];We&&We.visible&&m.push(T,oe,We,G,Ie.z,be)}}else fe.visible&&m.push(T,oe,fe,G,Ie.z,null)}}const te=T.children;for(let oe=0,fe=te.length;oe<fe;oe++)va(te[oe],B,G,X)}function Zl(T,B,G,X){const z=T.opaque,te=T.transmissive,oe=T.transparent;p.setupLightsView(G),K===!0&&ie.setGlobalState(y.clippingPlanes,G),X&&ye.viewport(R.copy(X)),z.length>0&&ms(z,B,G),te.length>0&&ms(te,B,G),oe.length>0&&ms(oe,B,G),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Kl(T,B,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Gi(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?us:Xn,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const te=p.state.transmissionRenderTarget[X.id],oe=X.viewport||R;te.setSize(oe.z*y.transmissionResolutionScale,oe.w*y.transmissionResolutionScale);const fe=y.getRenderTarget();y.setRenderTarget(te),y.getClearColor(N),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),Fe&&Te.render(G);const ge=y.toneMapping;y.toneMapping=ci;const Pe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),K===!0&&ie.setGlobalState(y.clippingPlanes,X),ms(T,G,X),P.updateMultisampleRenderTarget(te),P.updateRenderTargetMipmap(te),ke.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let be=0,We=B.length;be<We;be++){const je=B[be],_t=je.object,ht=je.geometry,Xe=je.material,Ee=je.group;if(Xe.side===Vn&&_t.layers.test(X.layers)){const At=Xe.side;Xe.side=Gt,Xe.needsUpdate=!0,$l(_t,G,X,ht,Xe,Ee),Xe.side=At,Xe.needsUpdate=!0,De=!0}}De===!0&&(P.updateMultisampleRenderTarget(te),P.updateRenderTargetMipmap(te))}y.setRenderTarget(fe),y.setClearColor(N,O),Pe!==void 0&&(X.viewport=Pe),y.toneMapping=ge}function ms(T,B,G){const X=B.isScene===!0?B.overrideMaterial:null;for(let z=0,te=T.length;z<te;z++){const oe=T[z],fe=oe.object,ge=oe.geometry,Pe=X===null?oe.material:X,De=oe.group;fe.layers.test(G.layers)&&$l(fe,B,G,ge,Pe,De)}}function $l(T,B,G,X,z,te){T.onBeforeRender(y,B,G,X,z,te),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(y,B,G,X,T,te),z.transparent===!0&&z.side===Vn&&z.forceSinglePass===!1?(z.side=Gt,z.needsUpdate=!0,y.renderBufferDirect(G,B,X,z,T,te),z.side=fi,z.needsUpdate=!0,y.renderBufferDirect(G,B,X,z,T,te),z.side=Vn):y.renderBufferDirect(G,B,X,z,T,te),T.onAfterRender(y,B,G,X,z,te)}function _s(T,B,G){B.isScene!==!0&&(B=et);const X=ve.get(T),z=p.state.lights,te=p.state.shadowsArray,oe=z.state.version,fe=xe.getParameters(T,z.state,te,B,G),ge=xe.getProgramCacheKey(fe);let Pe=X.programs;X.environment=T.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(T.isMeshStandardMaterial?H:w).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",Le),Pe=new Map,X.programs=Pe);let De=Pe.get(ge);if(De!==void 0){if(X.currentProgram===De&&X.lightsStateVersion===oe)return Ql(T,fe),De}else fe.uniforms=xe.getUniforms(T),T.onBeforeCompile(fe,y),De=xe.acquireProgram(fe,ge),Pe.set(ge,De),X.uniforms=fe.uniforms;const be=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=ie.uniform),Ql(T,fe),X.needsLights=ff(T),X.lightsStateVersion=oe,X.needsLights&&(be.ambientLightColor.value=z.state.ambient,be.lightProbe.value=z.state.probe,be.directionalLights.value=z.state.directional,be.directionalLightShadows.value=z.state.directionalShadow,be.spotLights.value=z.state.spot,be.spotLightShadows.value=z.state.spotShadow,be.rectAreaLights.value=z.state.rectArea,be.ltc_1.value=z.state.rectAreaLTC1,be.ltc_2.value=z.state.rectAreaLTC2,be.pointLights.value=z.state.point,be.pointLightShadows.value=z.state.pointShadow,be.hemisphereLights.value=z.state.hemi,be.directionalShadowMap.value=z.state.directionalShadowMap,be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,be.spotShadowMap.value=z.state.spotShadowMap,be.spotLightMatrix.value=z.state.spotLightMatrix,be.spotLightMap.value=z.state.spotLightMap,be.pointShadowMap.value=z.state.pointShadowMap,be.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=De,X.uniformsList=null,De}function Jl(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=$s.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Ql(T,B){const G=ve.get(T);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function hf(T,B,G,X,z){B.isScene!==!0&&(B=et),P.resetTextureUnits();const te=B.fog,oe=X.isMeshStandardMaterial?B.environment:null,fe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ar,ge=(X.isMeshStandardMaterial?H:w).get(X.envMap||oe),Pe=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,De=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),be=!!G.morphAttributes.position,We=!!G.morphAttributes.normal,je=!!G.morphAttributes.color;let _t=ci;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_t=y.toneMapping);const ht=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Xe=ht!==void 0?ht.length:0,Ee=ve.get(X),At=p.state.lights;if(K===!0&&(ue===!0||T!==v)){const Nt=T===v&&X.id===x;ie.setState(X,T,Nt)}let Ze=!1;X.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==At.state.version||Ee.outputColorSpace!==fe||z.isBatchedMesh&&Ee.batching===!1||!z.isBatchedMesh&&Ee.batching===!0||z.isBatchedMesh&&Ee.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ee.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ee.instancing===!1||!z.isInstancedMesh&&Ee.instancing===!0||z.isSkinnedMesh&&Ee.skinning===!1||!z.isSkinnedMesh&&Ee.skinning===!0||z.isInstancedMesh&&Ee.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ee.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ee.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ee.instancingMorph===!1&&z.morphTexture!==null||Ee.envMap!==ge||X.fog===!0&&Ee.fog!==te||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Pe||Ee.vertexTangents!==De||Ee.morphTargets!==be||Ee.morphNormals!==We||Ee.morphColors!==je||Ee.toneMapping!==_t||Ee.morphTargetsCount!==Xe)&&(Ze=!0):(Ze=!0,Ee.__version=X.version);let _n=Ee.currentProgram;Ze===!0&&(_n=_s(X,B,z));let Zi=!1,Zt=!1,zr=!1;const rt=_n.getUniforms(),an=Ee.uniforms;if(ye.useProgram(_n.program)&&(Zi=!0,Zt=!0,zr=!0),X.id!==x&&(x=X.id,Zt=!0),Zi||v!==T){ye.buffers.depth.getReversed()?(re.copy(T.projectionMatrix),cd(re),hd(re),rt.setValue(L,"projectionMatrix",re)):rt.setValue(L,"projectionMatrix",T.projectionMatrix),rt.setValue(L,"viewMatrix",T.matrixWorldInverse);const kt=rt.map.cameraPosition;kt!==void 0&&kt.setValue(L,Re.setFromMatrixPosition(T.matrixWorld)),Ve.logarithmicDepthBuffer&&rt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&rt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Zt=!0,zr=!0)}if(z.isSkinnedMesh){rt.setOptional(L,z,"bindMatrix"),rt.setOptional(L,z,"bindMatrixInverse");const Nt=z.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),rt.setValue(L,"boneTexture",Nt.boneTexture,P))}z.isBatchedMesh&&(rt.setOptional(L,z,"batchingTexture"),rt.setValue(L,"batchingTexture",z._matricesTexture,P),rt.setOptional(L,z,"batchingIdTexture"),rt.setValue(L,"batchingIdTexture",z._indirectTexture,P),rt.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&rt.setValue(L,"batchingColorTexture",z._colorsTexture,P));const on=G.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Ce.update(z,G,_n),(Zt||Ee.receiveShadow!==z.receiveShadow)&&(Ee.receiveShadow=z.receiveShadow,rt.setValue(L,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(an.envMap.value=ge,an.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(an.envMapIntensity.value=B.environmentIntensity),Zt&&(rt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&uf(an,zr),te&&X.fog===!0&&le.refreshFogUniforms(an,te),le.refreshMaterialUniforms(an,X,k,W,p.state.transmissionRenderTarget[T.id]),$s.upload(L,Jl(Ee),an,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&($s.upload(L,Jl(Ee),an,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&rt.setValue(L,"center",z.center),rt.setValue(L,"modelViewMatrix",z.modelViewMatrix),rt.setValue(L,"normalMatrix",z.normalMatrix),rt.setValue(L,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Nt=X.uniformsGroups;for(let kt=0,Ma=Nt.length;kt<Ma;kt++){const xi=Nt[kt];F.update(xi,_n),F.bind(xi,_n)}}return _n}function uf(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function ff(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,B,G){ve.get(T.texture).__webglTexture=B,ve.get(T.depthTexture).__webglTexture=G;const X=ve.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const G=ve.get(T);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0};const df=L.createFramebuffer();this.setRenderTarget=function(T,B=0,G=0){C=T,A=B,E=G;let X=!0,z=null,te=!1,oe=!1;if(T){const ge=ve.get(T);if(ge.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(ge.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(ge.__hasExternalTextures)P.rebindTextures(T,ve.get(T.texture).__webglTexture,ve.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const be=T.depthTexture;if(ge.__boundDepthTexture!==be){if(be!==null&&ve.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const Pe=T.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(oe=!0);const De=ve.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[B])?z=De[B][G]:z=De[B],te=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?z=ve.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?z=De[G]:z=De,R.copy(T.viewport),V.copy(T.scissor),U=T.scissorTest}else R.copy(ne).multiplyScalar(k).floor(),V.copy(de).multiplyScalar(k).floor(),U=we;if(G!==0&&(z=df),ye.bindFramebuffer(L.FRAMEBUFFER,z)&&X&&ye.drawBuffers(T,z),ye.viewport(R),ye.scissor(V),ye.setScissorTest(U),te){const ge=ve.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge.__webglTexture,G)}else if(oe){const ge=ve.get(T.texture),Pe=B;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ge.__webglTexture,G,Pe)}else if(T!==null&&G!==0){const ge=ve.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ge.__webglTexture,G)}x=-1},this.readRenderTargetPixels=function(T,B,G,X,z,te,oe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&oe!==void 0&&(fe=fe[oe]),fe){ye.bindFramebuffer(L.FRAMEBUFFER,fe);try{const ge=T.texture,Pe=ge.format,De=ge.type;if(!Ve.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-X&&G>=0&&G<=T.height-z&&L.readPixels(B,G,X,z,Ue.convert(Pe),Ue.convert(De),te)}finally{const ge=C!==null?ve.get(C).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(T,B,G,X,z,te,oe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&oe!==void 0&&(fe=fe[oe]),fe){const ge=T.texture,Pe=ge.format,De=ge.type;if(!Ve.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-X&&G>=0&&G<=T.height-z){ye.bindFramebuffer(L.FRAMEBUFFER,fe);const be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.bufferData(L.PIXEL_PACK_BUFFER,te.byteLength,L.STREAM_READ),L.readPixels(B,G,X,z,Ue.convert(Pe),Ue.convert(De),0);const We=C!==null?ve.get(C).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,We);const je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ld(L,je,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,te),L.deleteBuffer(be),L.deleteSync(je),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,G=0){T.isTexture!==!0&&(ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-G),z=Math.floor(T.image.width*X),te=Math.floor(T.image.height*X),oe=B!==null?B.x:0,fe=B!==null?B.y:0;P.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,oe,fe,z,te),ye.unbindTexture()};const pf=L.createFramebuffer(),mf=L.createFramebuffer();this.copyTextureToTexture=function(T,B,G=null,X=null,z=0,te=null){T.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],B=arguments[2],te=arguments[3]||0,G=null),te===null&&(z!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=z,z=0):te=0);let oe,fe,ge,Pe,De,be,We,je,_t;const ht=T.isCompressedTexture?T.mipmaps[te]:T.image;if(G!==null)oe=G.max.x-G.min.x,fe=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,Pe=G.min.x,De=G.min.y,be=G.isBox3?G.min.z:0;else{const on=Math.pow(2,-z);oe=Math.floor(ht.width*on),fe=Math.floor(ht.height*on),T.isDataArrayTexture?ge=ht.depth:T.isData3DTexture?ge=Math.floor(ht.depth*on):ge=1,Pe=0,De=0,be=0}X!==null?(We=X.x,je=X.y,_t=X.z):(We=0,je=0,_t=0);const Xe=Ue.convert(B.format),Ee=Ue.convert(B.type);let At;B.isData3DTexture?(P.setTexture3D(B,0),At=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(P.setTexture2DArray(B,0),At=L.TEXTURE_2D_ARRAY):(P.setTexture2D(B,0),At=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const Ze=L.getParameter(L.UNPACK_ROW_LENGTH),_n=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Zi=L.getParameter(L.UNPACK_SKIP_PIXELS),Zt=L.getParameter(L.UNPACK_SKIP_ROWS),zr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,be);const rt=T.isDataArrayTexture||T.isData3DTexture,an=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const on=ve.get(T),Nt=ve.get(B),kt=ve.get(on.__renderTarget),Ma=ve.get(Nt.__renderTarget);ye.bindFramebuffer(L.READ_FRAMEBUFFER,kt.__webglFramebuffer),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ma.__webglFramebuffer);for(let xi=0;xi<ge;xi++)rt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ve.get(T).__webglTexture,z,be+xi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ve.get(B).__webglTexture,te,_t+xi)),L.blitFramebuffer(Pe,De,oe,fe,We,je,oe,fe,L.DEPTH_BUFFER_BIT,L.NEAREST);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||ve.has(T)){const on=ve.get(T),Nt=ve.get(B);ye.bindFramebuffer(L.READ_FRAMEBUFFER,pf),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,mf);for(let kt=0;kt<ge;kt++)rt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,on.__webglTexture,z,be+kt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,on.__webglTexture,z),an?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nt.__webglTexture,te,_t+kt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Nt.__webglTexture,te),z!==0?L.blitFramebuffer(Pe,De,oe,fe,We,je,oe,fe,L.COLOR_BUFFER_BIT,L.NEAREST):an?L.copyTexSubImage3D(At,te,We,je,_t+kt,Pe,De,oe,fe):L.copyTexSubImage2D(At,te,We,je,Pe,De,oe,fe);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else an?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(At,te,We,je,_t,oe,fe,ge,Xe,Ee,ht.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(At,te,We,je,_t,oe,fe,ge,Xe,ht.data):L.texSubImage3D(At,te,We,je,_t,oe,fe,ge,Xe,Ee,ht):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,te,We,je,oe,fe,Xe,Ee,ht.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,te,We,je,ht.width,ht.height,Xe,ht.data):L.texSubImage2D(L.TEXTURE_2D,te,We,je,oe,fe,Xe,Ee,ht);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ze),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_n),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,zr),te===0&&B.generateMipmaps&&L.generateMipmap(At),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,B,G=null,X=null,z=0){return T.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,T=arguments[2],B=arguments[3],z=arguments[4]||0),ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,G,X,z)},this.initRenderTarget=function(T){ve.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){A=0,E=0,C=null,ye.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const sh={type:"change"},Rl={type:"start"},lu={type:"end"},Gs=new Fr,ah=new ni,D0=Math.cos(70*ad.DEG2RAD),yt=new D,Ht=2*Math.PI,Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$a=1e-6;class I0 extends Yd{constructor(e,t=null){super(e,t),this.state=Je.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ni.ROTATE,MIDDLE:Ni.DOLLY,RIGHT:Ni.PAN},this.touches={ONE:fr.ROTATE,TWO:fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Wi,this._lastTargetPosition=new D,this._quat=new Wi().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lc,this._sphericalDelta=new Lc,this._scale=1,this._panOffset=new D,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new D,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=U0.bind(this),this._onPointerDown=L0.bind(this),this._onPointerUp=O0.bind(this),this._onContextMenu=H0.bind(this),this._onMouseWheel=B0.bind(this),this._onKeyDown=z0.bind(this),this._onTouchStart=k0.bind(this),this._onTouchMove=V0.bind(this),this._onMouseDown=N0.bind(this),this._onMouseMove=F0.bind(this),this._interceptControlDown=G0.bind(this),this._interceptControlUp=W0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sh),this.update(),this.state=Je.NONE}update(e=null){const t=this.object.position;yt.copy(t).sub(this.target),yt.applyQuaternion(this._quat),this._spherical.setFromVector3(yt),this.autoRotate&&this.state===Je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ht:n>Math.PI&&(n-=Ht),i<-Math.PI?i+=Ht:i>Math.PI&&(i-=Ht),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(yt.setFromSpherical(this._spherical),yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=yt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Gs.origin.copy(this.object.position),Gs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gs.direction))<D0?this.object.lookAt(this.target):(ah.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gs.intersectPlane(ah,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>$a||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$a||this._lastTargetPosition.distanceToSquared(this.target)>$a?(this.dispatchEvent(sh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ht/60*this.autoRotateSpeed*e:Ht/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yt.setFromMatrixColumn(t,0),yt.multiplyScalar(-e),this._panOffset.add(yt)}_panUp(e,t){this.screenSpacePanning===!0?yt.setFromMatrixColumn(t,1):(yt.setFromMatrixColumn(t,0),yt.crossVectors(this.object.up,yt)),yt.multiplyScalar(e),this._panOffset.add(yt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;yt.copy(i).sub(this.target);let s=yt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function L0(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function U0(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function O0(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lu),this.state=Je.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function N0(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ni.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Je.DOLLY;break;case Ni.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Je.ROTATE}break;case Ni.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Je.PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Rl)}function F0(r){switch(this.state){case Je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function B0(r){this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE||(r.preventDefault(),this.dispatchEvent(Rl),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(lu))}function z0(r){this.enabled!==!1&&this._handleKeyDown(r)}function k0(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case fr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Je.TOUCH_ROTATE;break;case fr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Je.TOUCH_PAN;break;default:this.state=Je.NONE}break;case 2:switch(this.touches.TWO){case fr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Je.TOUCH_DOLLY_PAN;break;case fr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Je.TOUCH_DOLLY_ROTATE;break;default:this.state=Je.NONE}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Rl)}function V0(r){switch(this._trackPointer(r),this.state){case Je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Je.NONE}}function H0(r){this.enabled!==!1&&r.preventDefault()}function G0(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function W0(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function cu(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cr={duration:.5,overwrite:!1,delay:0},Cl,Ct,st,Cn=1e8,Ut=1/Cn,el=Math.PI*2,X0=el/4,q0=0,hu=Math.sqrt,Y0=Math.cos,j0=Math.sin,Tt=function(e){return typeof e=="string"},ft=function(e){return typeof e=="function"},Yn=function(e){return typeof e=="number"},Pl=function(e){return typeof e>"u"},Dn=function(e){return typeof e=="object"},Wt=function(e){return e!==!1},Dl=function(){return typeof window<"u"},Ws=function(e){return ft(e)||Tt(e)},uu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ot=Array.isArray,tl=/(?:-?\.?\d|\.)+/gi,fu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,pr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ja=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,du=/[+-]=-?[.\d]+/,pu=/[^,'"\[\]\s]+/gi,Z0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot,wn,nl,Il,nn={},aa={},mu,_u=function(e){return(aa=Pr(e,nn))&&jt},Ll=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},rs=function(e,t){return!t&&console.warn(e)},gu=function(e,t){return e&&(nn[e]=t)&&aa&&(aa[e]=t)||nn},ss=function(){return 0},K0={suppressEvents:!0,isStart:!0,kill:!1},Js={suppressEvents:!0,kill:!1},$0={suppressEvents:!0},Ul={},hi=[],il={},xu,Jt={},Qa={},oh=30,Qs=[],Ol="",Nl=function(e){var t=e[0],n,i;if(Dn(t)||ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Qs.length;i--&&!Qs[i].targetTest(t););n=Qs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Hu(e[i],n)))||e.splice(i,1);return e},Bi=function(e){return e._gsap||Nl(dn(e))[0]._gsap},vu=function(e,t,n){return(n=e[t])&&ft(n)?e[t]():Pl(n)&&e.getAttribute&&e.getAttribute(t)||n},Xt=function(e,t){return(e=e.split(",")).forEach(t)||e},pt=function(e){return Math.round(e*1e5)/1e5||0},Mt=function(e){return Math.round(e*1e7)/1e7||0},vr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},J0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},oa=function(){var e=hi.length,t=hi.slice(0),n,i;for(il={},hi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Fl=function(e){return!!(e._initted||e._startAt||e.add)},Mu=function(e,t,n,i){hi.length&&!Ct&&oa(),e.render(t,n,!!(Ct&&t<0&&Fl(e))),hi.length&&!Ct&&oa()},yu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(pu).length<2?t:Tt(e)?e.trim():e},bu=function(e){return e},rn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Q0=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Pr=function(e,t){for(var n in t)e[n]=t[n];return e},lh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Dn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},la=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Qr=function(e){var t=e.parent||ot,n=e.keyframes?Q0(Ot(e.keyframes)):rn;if(Wt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ex=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Su=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},_a=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},di=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},zi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},tx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},rl=function(e,t,n,i){return e._startAt&&(Ct?e._startAt.revert(Js):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},nx=function r(e){return!e||e._ts&&r(e.parent)},ch=function(e){return e._repeat?Dr(e._tTime,e=e.duration()+e._rDelay)*e:0},Dr=function(e,t){var n=Math.floor(e=Mt(e/t));return e&&n===e?n-1:n},ca=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ga=function(e){return e._end=Mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ut)||0))},xa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Mt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ga(e),n._dirty||zi(n,e)),e},Eu=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ca(e.rawTime(),t),(!t._dur||ps(0,t.totalDuration(),n)-t._tTime>Ut)&&t.render(n,!0)),zi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},An=function(e,t,n,i){return t.parent&&di(t),t._start=Mt((Yn(n)?n:n||e!==ot?cn(e,n,t):e._time)+t._delay),t._end=Mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Su(e,t,"_first","_last",e._sort?"_start":0),sl(t)||(e._recent=t),i||Eu(e,t),e._ts<0&&xa(e,e._tTime),e},wu=function(e,t){return(nn.ScrollTrigger||Ll("scrollTrigger",t))&&nn.ScrollTrigger.create(t,e)},Tu=function(e,t,n,i,s){if(zl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ct&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&xu!==Qt.frame)return hi.push(e),e._lazy=[s,i],1},ix=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},sl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},rx=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&ix(e)&&!(!e._initted&&sl(e))||(e._ts<0||e._dp._ts<0)&&!sl(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=ps(0,e._tDur,t),h=Dr(l,o),e._yoyo&&h&1&&(a=1-a),h!==Dr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Ct||i||e._zTime===Ut||!t&&e._zTime){if(!e._initted&&Tu(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?Ut:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&rl(e,t,n,!0),e._onUpdate&&!n&&en(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&en(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&di(e,1),!n&&!Ct&&(en(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ir=function(e,t,n,i){var s=e._repeat,a=Mt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Mt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&xa(e,e._tTime=e._tDur*o),e.parent&&ga(e),n||zi(e.parent,e),e},hh=function(e){return e instanceof Bt?zi(e):Ir(e,e._dur)},ax={_start:0,endTime:ss,totalDuration:ss},cn=function r(e,t,n){var i=e.labels,s=e._recent||ax,a=e.duration()>=Cn?s.endTime(!1):e._dur,o,l,c;return Tt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Ot(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},es=function(e,t,n){var i=Yn(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Wt(l.vars.inherit)&&l.parent;a.immediateRender=Wt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new vt(t[0],a,t[s+1])},_i=function(e,t){return e||e===0?t(e):t},ps=function(e,t,n){return n<e?e:n>t?t:n},Lt=function(e,t){return!Tt(e)||!(t=Z0.exec(e))?"":t[1]},ox=function(e,t,n){return _i(n,function(i){return ps(e,t,i)})},al=[].slice,Au=function(e,t){return e&&Dn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Dn(e[0]))&&!e.nodeType&&e!==wn},lx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Tt(i)&&!t||Au(i,1)?(s=n).push.apply(s,dn(i)):n.push(i)})||n},dn=function(e,t,n){return st&&!t&&st.selector?st.selector(e):Tt(e)&&!n&&(nl||!Lr())?al.call((t||Il).querySelectorAll(e),0):Ot(e)?lx(e,n):Au(e)?al.call(e,0):e?[e]:[]},ol=function(e){return e=dn(e)[0]||rs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return dn(t,n.querySelectorAll?n:n===e?rs("Invalid scope")||Il.createElement("div"):e)}},Ru=function(e){return e.sort(function(){return .5-Math.random()})},Cu=function(e){if(ft(e))return e;var t=Dn(e)?e:{each:e},n=ki(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return Tt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,g){var _=(g||t).length,m=a[_],p,S,b,y,M,A,E,C,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,Cn])[1],!x){for(E=-1e8;E<(E=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],p=l?Math.min(x,_)*h-.5:i%x,S=x===Cn?0:l?_*u/x-.5:i/x|0,E=0,C=Cn,A=0;A<_;A++)b=A%x-p,y=S-(A/x|0),m[A]=M=c?Math.abs(c==="y"?y:b):hu(b*b+y*y),M>E&&(E=M),M<C&&(C=M);i==="random"&&Ru(m),m.max=E-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Lt(t.amount||t.each)||0,n=n&&_<0?zu(n):n}return _=(m[f]-m.min)/m.max||0,Mt(m.b+(n?n(_):_)*m.v)+m.u}},ll=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Mt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Yn(n)?0:Lt(n))}},Pu=function(e,t){var n=Ot(e),i,s;return!n&&Dn(e)&&(i=n=e.radius||Cn,e.values?(e=dn(e.values),(s=!Yn(e[0]))&&(i*=i)):e=ll(e.increment)),_i(t,n?ft(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Cn,h=0,u=e.length,f,d;u--;)s?(f=e[u].x-o,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:a,s||h===a||Yn(a)?h:h+Lt(a)}:ll(e))},Du=function(e,t,n,i){return _i(Ot(e)?!t:n===!0?!!(n=0):!i,function(){return Ot(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},cx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},hx=function(e,t){return function(n){return e(parseFloat(n))+(t||Lt(n))}},ux=function(e,t,n){return Lu(e,t,0,1,n)},Iu=function(e,t,n){return _i(n,function(i){return e[~~t(i)]})},fx=function r(e,t,n){var i=t-e;return Ot(e)?Iu(e,r(0,e.length),t):_i(n,function(s){return(i+(s-e)%i)%i+e})},dx=function r(e,t,n){var i=t-e,s=i*2;return Ot(e)?Iu(e,r(0,e.length-1),t):_i(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},as=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?pu:tl),n+=e.substr(t,i-t)+Du(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Lu=function(e,t,n,i,s){var a=t-e,o=i-n;return _i(s,function(l){return n+((l-e)/a*o||0)})},px=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=Tt(e),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Ot(e)&&!Ot(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=t}else i||(e=Pr(Ot(e)?[]:{},e));if(!h){for(l in t)Bl.call(o,e,l,"get",t[l]);s=function(g){return Hl(g,o)||(a?e.p:e)}}}return _i(n,s)},uh=function(e,t,n){var i=e.labels,s=Cn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},en=function(e,t,n){var i=e.vars,s=i[t],a=st,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&hi.length&&oa(),o&&(st=o),h=l?s.apply(c,l):s.call(c),st=a,h},Kr=function(e){return di(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ct),e.progress()<1&&en(e,"onInterrupt"),e},mr,Uu=[],Ou=function(e){if(e)if(e=!e.name&&e.default||e,Dl()||e.headless){var t=e.name,n=ft(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ss,render:Hl,add:Bl,kill:Px,modifier:Cx,rawVars:0},a={targetTest:0,get:0,getSetter:Vl,aliases:{},register:0};if(Lr(),e!==i){if(Jt[t])return;rn(i,rn(la(e,s),a)),Pr(i.prototype,Pr(s,la(e,a))),Jt[i.prop=t]=i,e.targetTest&&(Qs.push(i),Ul[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gu(t,i),e.register&&e.register(jt,i,qt)}else Uu.push(e)},Qe=255,$r={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},eo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Qe+.5|0},Nu=function(e,t,n){var i=e?Yn(e)?[e>>16,e>>8&Qe,e&Qe]:0:$r.black,s,a,o,l,c,h,u,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),$r[e])i=$r[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Qe,i&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(tl),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=eo(l+1/3,s,a),i[1]=eo(l,s,a),i[2]=eo(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(fu),n&&i.length<4&&(i[3]=1),i}else i=e.match(tl)||$r.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Qe,a=i[1]/Qe,o=i[2]/Qe,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Fu=function(e){var t=[],n=[],i=-1;return e.split(ui).forEach(function(s){var a=s.match(pr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},fh=function(e,t,n){var i="",s=(e+i).match(ui),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return e;if(s=s.map(function(f){return(f=Nu(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Fu(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(ui,"1").split(pr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(ui),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},ui=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in $r)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),mx=/hsl[a]?\(/,Bu=function(e){var t=e.join(" "),n;if(ui.lastIndex=0,ui.test(t))return n=mx.test(t),e[1]=fh(e[1],n),e[0]=fh(e[0],n,Fu(e[1])),!0},os,Qt=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,f,d,g=function _(m){var p=r()-i,S=m===!0,b,y,M,A;if((p>e||p<0)&&(n+=p-t),i+=p,M=i-n,b=M-a,(b>0||S)&&(A=++u.frame,f=M-u.time*1e3,u.time=M=M/1e3,a+=b+(b>=s?4:s-b),y=1),S||(l=c(_)),y)for(d=0;d<o.length;d++)o[d](M,f,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){mu&&(!nl&&Dl()&&(wn=nl=window,Il=wn.document||{},nn.gsap=jt,(wn.gsapVersions||(wn.gsapVersions=[])).push(jt.version),_u(aa||wn.GreenSockGlobals||!wn.gsap&&wn||{}),Uu.forEach(Ou)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},os=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),os=0,c=ss},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,S){var b=p?function(y,M,A,E){m(y,M,A,E),u.remove(b)}:m;return u.remove(m),o[S?"unshift":"push"](b),Lr(),b},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},u}(),Lr=function(){return!os&&Qt.wake()},ze={},_x=/^[\d.\-M][\d.\-,\s]/,gx=/["']/g,xx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(gx,"").trim():+c,i=l.substr(o+1).trim();return t},vx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Mx=function(e){var t=(e+"").split("("),n=ze[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[xx(t[1])]:vx(e).split(",").map(yu)):ze._CE&&_x.test(e)?ze._CE("",e):n},zu=function(e){return function(t){return 1-e(1-t)}},ku=function r(e,t){for(var n=e._first,i;n;)n instanceof Bt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ki=function(e,t){return e&&(ft(e)?e:ze[e]||Mx(e))||t},ji=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Xt(e,function(o){ze[o]=nn[o]=s,ze[a=o.toLowerCase()]=n;for(var l in s)ze[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ze[o+"."+l]=s[l]}),s},Vu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},to=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/el*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*j0((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Vu(o);return s=el/s,l.config=function(c,h){return r(e,c,h)},l},no=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Vu(n);return i.config=function(s){return r(e,s)},i};Xt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ji(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ze.Linear.easeNone=ze.none=ze.Linear.easeIn;ji("Elastic",to("in"),to("out"),to());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ji("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ji("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ji("Circ",function(r){return-(hu(1-r*r)-1)});ji("Sine",function(r){return r===1?1:-Y0(r*X0)+1});ji("Back",no("in"),no("out"),no());ze.SteppedEase=ze.steps=nn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Ut;return function(o){return((i*ps(0,a,o)|0)+s)*n}}};Cr.ease=ze["quad.out"];Xt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ol+=r+","+r+"Params,"});var Hu=function(e,t){this.id=q0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vu,this.set=t?t.getSetter:Vl},ls=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ir(this,+t.duration,1,1),this.data=t.data,st&&(this._ctx=st,st.data.push(this)),os||Qt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ir(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Lr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xa(this,n),!s._dp||s.parent||Eu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&An(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ut||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Mu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ch(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ch(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Dr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ca(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(ps(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ga(this),tx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Lr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ut&&(this._tTime-=Ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&An(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Wt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ca(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=$0);var i=Ct;return Ct=n,Fl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ct=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(cn(this,n),Wt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Wt(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ut)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=ft(n)?n:bu,o=function(){var c=i.then;i.then=null,ft(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Kr(this)},r}();rn(ls.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Bt=function(r){cu(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Wt(n.sortChildren),ot&&An(n.parent||ot,zn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&wu(zn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return es(0,arguments,this),this},t.from=function(i,s,a){return es(1,arguments,this),this},t.fromTo=function(i,s,a,o){return es(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Qr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new vt(i,s,cn(this,a),1),this},t.call=function(i,s,a){return An(this,vt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new vt(i,a,cn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Qr(a).immediateRender=Wt(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,Qr(o).immediateRender=Wt(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Mt(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,S,b,y,M,A,E;if(this!==ot&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,y=this._start,b=this._ts,p=!b,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=Mt(h%m),h===l?(_=this._repeat,f=c):(M=Mt(h/m),_=~~M,_&&_===M&&(f=c,_--),f>c&&(f=c)),M=Dr(this._tTime,m),!o&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),A&&_&1&&(f=c-f,E=1),_!==M&&!this._lock){var C=A&&M&1,x=C===(A&&_&1);if(_<M&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(E?0:Mt(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&en(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;ku(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=sx(this,Mt(o),Mt(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&!M&&(en(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var v=i<0?i:f;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,a||Ct&&Fl(d)),f!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=v?-1e-8:Ut);break}}d=g}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-1e-8)._zTime=f>=o?1:-1,this._ts))return this._start=y,ga(this),this.render(i,s,a);this._onUpdate&&!s&&en(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&di(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(en(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Yn(s)||(s=cn(this,s,i)),!(i instanceof ls)){if(Ot(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Tt(i))return this.addLabel(i,s);if(ft(i))i=vt.delayedCall(0,i);else return this}return this!==i?An(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof vt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Tt(i)?this.removeLabel(i):ft(i)?this.killTweensOf(i):(i.parent===this&&_a(this,i),i===this._recent&&(this._recent=this._last),zi(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mt(Qt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=cn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=vt.delayedCall(0,s||ss,a);return o.data="isPause",this._hasPause=1,An(this,o,cn(this,i))},t.removePause=function(i){var s=this._first;for(i=cn(this,i);s;)s._start===i&&s.data==="isPause"&&di(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)si!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=dn(i),l=this._first,c=Yn(s),h;l;)l instanceof vt?J0(l._targets,o)&&(c?(!si||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=cn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=vt.to(a,rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ut,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Ir(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,rn({startAt:{time:cn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),uh(this,cn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),uh(this,cn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ut)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return zi(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zi(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Cn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,An(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ir(a,a===ot&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ot._ts&&(Mu(ot,ca(i,ot)),xu=Qt.frame),Qt.frame>=oh){oh+=tn.autoSleep||120;var s=ot._first;if((!s||!s._ts)&&tn.autoSleep&&Qt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Qt.sleep()}}},e}(ls);rn(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});var yx=function(e,t,n,i,s,a,o){var l=new qt(this._pt,e,t,0,1,ju,null,s),c=0,h=0,u,f,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=as(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(Ja)||[];u=Ja.exec(i);)g=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?vr(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Ja.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(du.test(i)||p)&&(l.e=0),this._pt=l,l},Bl=function(e,t,n,i,s,a,o,l,c,h){ft(i)&&(i=i(s||0,e,a));var u=e[t],f=n!=="get"?n:ft(u)?c?e[t.indexOf("set")||!ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=ft(u)?c?Tx:qu:kl,g;if(Tt(i)&&(~i.indexOf("random(")&&(i=as(i)),i.charAt(1)==="="&&(g=vr(f,i)+(Lt(f)||0),(g||g===0)&&(i=g))),!h||f!==i||cl)return!isNaN(f*i)&&i!==""?(g=new qt(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?Rx:Yu,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!u&&!(t in e)&&Ll(t,i),yx.call(this,e,t,f,i,d,l||tn.stringFilter,c))},bx=function(e,t,n,i,s){if(ft(e)&&(e=ts(e,s,t,n,i)),!Dn(e)||e.style&&e.nodeType||Ot(e)||uu(e))return Tt(e)?ts(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=ts(e[o],s,t,n,i);return a},Gu=function(e,t,n,i,s,a){var o,l,c,h;if(Jt[e]&&(o=new Jt[e]).init(s,o.rawVars?t[e]:bx(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new qt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==mr))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},si,cl,zl=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!Cl,y=e.timeline,M,A,E,C,x,v,R,V,U,N,O,I,W;if(y&&(!f||!s)&&(s="none"),e._ease=ki(s,Cr.ease),e._yEase=u?zu(ki(u===!0?s:u,Cr.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(V=m[0]?Bi(m[0]).harness:0,I=V&&i[V.prop],M=la(i,Ul),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&g?Js:K0),_._lazy=0),a){if(di(e._startAt=vt.set(m,rn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Wt(l),startAt:null,delay:0,onUpdate:c&&function(){return en(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ct||!o&&!d)&&e._startAt.revert(Js),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(o=!1),E=rn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Wt(l),immediateRender:o,stagger:0,parent:p},M),I&&(E[V.prop]=I),di(e._startAt=vt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ct?e._startAt.revert(Js):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Ut,Ut);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Wt(l)||l&&!g,A=0;A<m.length;A++){if(x=m[A],R=x._gsap||Nl(m)[A]._gsap,e._ptLookup[A]=N={},il[R.id]&&hi.length&&oa(),O=S===m?A:S.indexOf(x),V&&(U=new V).init(x,I||M,e,O,S)!==!1&&(e._pt=C=new qt(e._pt,x,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(k){N[k]=C}),U.priority&&(v=1)),!V||I)for(E in M)Jt[E]&&(U=Gu(E,M,e,O,x,S))?U.priority&&(v=1):N[E]=C=Bl.call(e,x,E,"get",M[E],O,S,0,i.stringFilter);e._op&&e._op[A]&&e.kill(x,e._op[A]),b&&e._pt&&(si=e,ot.killTweensOf(x,N,e.globalTime(t)),W=!e.parent,si=0),e._pt&&l&&(il[R.id]=1)}v&&Zu(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,f&&t<=0&&y.render(Cn,!0,!0)},Sx=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return cl=1,e.vars[t]="+=0",zl(e,o),cl=0,l?rs(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=pt(n)+Lt(u.e)),u.b&&(u.b=h.s+Lt(u.b))},Ex=function(e,t){var n=e[0]?Bi(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Pr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},wx=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Ot(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ts=function(e,t,n,i,s){return ft(e)?e.call(t,n,i,s):Tt(e)&&~e.indexOf("random(")?as(e):e},Wu=Ol+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Xu={};Xt(Wu+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Xu[r]=1});var vt=function(r){cu(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Qr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||ot,b=(Ot(n)||uu(n)?Yn(n[0]):"length"in i)?[n]:dn(n),y,M,A,E,C,x,v,R;if(o._targets=b.length?Nl(b):rs("GSAP target "+n+" not found. https://gsap.com",!tn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Ws(c)||Ws(h)){if(i=o.vars,y=o.timeline=new Bt({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:b}),y.kill(),y.parent=y._dp=zn(o),y._start=0,f||Ws(c)||Ws(h)){if(E=b.length,v=f&&Cu(f),Dn(f))for(C in f)~Wu.indexOf(C)&&(R||(R={}),R[C]=f[C]);for(M=0;M<E;M++)A=la(i,Xu),A.stagger=0,p&&(A.yoyoEase=p),R&&Pr(A,R),x=b[M],A.duration=+ts(c,zn(o),M,x,b),A.delay=(+ts(h,zn(o),M,x,b)||0)-o._delay,!f&&E===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),y.to(x,A,v?v(M,x,b):0),y._ease=ze.none;y.duration()?c=h=0:o.timeline=0}else if(g){Qr(rn(y.vars.defaults,{ease:"none"})),y._ease=ki(g.ease||i.ease||"none");var V=0,U,N,O;if(Ot(g))g.forEach(function(I){return y.to(b,I,">")}),y.duration();else{A={};for(C in g)C==="ease"||C==="easeEach"||wx(C,g[C],A,g.easeEach);for(C in A)for(U=A[C].sort(function(I,W){return I.t-W.t}),V=0,M=0;M<U.length;M++)N=U[M],O={ease:N.e,duration:(N.t-(M?U[M-1].t:0))/100*c},O[C]=N.v,y.to(b,O,V),V+=O.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!Cl&&(si=zn(o),ot.killTweensOf(b),si=0),An(S,zn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===Mt(S._time)&&Wt(u)&&nx(zn(o))&&S.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-h)||0)),m&&wu(zn(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Ut&&!h?l:i<Ut?0:i,f,d,g,_,m,p,S,b,y;if(!c)rx(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(f=Mt(u%_),u===l?(g=this._repeat,f=c):(m=Mt(u/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(y=this._yEase,f=c-f),m=Dr(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(b&&this._yEase&&ku(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Mt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Tu(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!o&&u&&!s&&!m&&(en(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&rl(this,i,s,a),en(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&en(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&rl(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&di(this,1),!s&&!(h&&!o)&&(u||o||p)&&(en(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){os||Qt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||zl(this,c),h=this._ease(c/this._dur),Sx(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(xa(this,0),this.parent||Su(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Kr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ct),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,si&&si.vars.overwrite!==!0)._first||Kr(this),this.parent&&a!==this.timeline.totalDuration()&&Ir(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?dn(i):o,c=this._ptLookup,h=this._pt,u,f,d,g,_,m,p;if((!s||s==="all")&&ex(o,l))return s==="all"&&(this._pt=0),Kr(this);for(u=this._op=this._op||[],s!=="all"&&(Tt(s)&&(_={},Xt(s,function(S){return _[S]=1}),s=_),s=Ex(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(u[p]=s,g=f,d={}):(d=u[p]=u[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&_a(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Kr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return es(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return es(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return ot.killTweensOf(i,s,a)},e}(ls);rn(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xt("staggerTo,staggerFrom,staggerFromTo",function(r){vt[r]=function(){var e=new Bt,t=al.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var kl=function(e,t,n){return e[t]=n},qu=function(e,t,n){return e[t](n)},Tx=function(e,t,n,i){return e[t](i.fp,n)},Ax=function(e,t,n){return e.setAttribute(t,n)},Vl=function(e,t){return ft(e[t])?qu:Pl(e[t])&&e.setAttribute?Ax:kl},Yu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Rx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ju=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Hl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Cx=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Px=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?_a(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Dx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Zu=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},qt=function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Yu,this.d=l||this,this.set=c||kl,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Dx,this.m=n,this.mt=s,this.tween=i},r}();Xt(Ol+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ul[r]=1});nn.TweenMax=nn.TweenLite=vt;nn.TimelineLite=nn.TimelineMax=Bt;ot=new Bt({sortChildren:!1,defaults:Cr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});tn.stringFilter=Bu;var Vi=[],ea={},Ix=[],dh=0,Lx=0,io=function(e){return(ea[e]||Ix).map(function(t){return t()})},hl=function(){var e=Date.now(),t=[];e-dh>2&&(io("matchMediaInit"),Vi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=wn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),io("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),dh=e,io("matchMedia"))},Ku=function(){function r(t,n){this.selector=n&&ol(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Lx++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){ft(n)&&(s=i,i=n,n=ft);var a=this,o=function(){var c=st,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=ol(s)),st=a,u=i.apply(a,arguments),ft(u)&&a._r.push(u),st=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===ft?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=st;st=null,n(this),st=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof vt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Bt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof vt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Vi.length;a--;)Vi[a].id===this.id&&Vi.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),Ux=function(){function r(t){this.contexts=[],this.scope=t,st&&st.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Dn(n)||(n={matches:n});var a=new Ku(0,s||this.scope),o=a.conditions={},l,c,h;st&&!a.selector&&(a.selector=st.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=wn.matchMedia(n[c]),l&&(Vi.indexOf(a)<0&&Vi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(hl):l.addEventListener("change",hl)));return h&&i(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ha={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ou(i)})},timeline:function(e){return new Bt(e)},getTweensOf:function(e,t){return ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){Tt(e)&&(e=dn(e)[0]);var s=Bi(e||{}).get,a=n?bu:yu;return n==="native"&&(n=""),e&&(t?a((Jt[t]&&Jt[t].get||s)(e,t,n,i)):function(o,l,c){return a((Jt[o]&&Jt[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=dn(e),e.length>1){var i=e.map(function(h){return jt.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var a=Jt[t],o=Bi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;mr._pt=0,u.init(e,n?h+n:h,mr,0,[e]),u.render(1,u),mr._pt&&Hl(1,mr)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=jt.to(e,rn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ki(e.ease,Cr.ease)),lh(Cr,e||{})},config:function(e){return lh(tn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Jt[o]&&!nn[o]&&rs(t+" effect requires "+o+" plugin.")}),Qa[t]=function(o,l,c){return n(dn(o),rn(l||{},s),c)},a&&(Bt.prototype[t]=function(o,l,c){return this.add(Qa[t](o,Dn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ze[e]=ki(t)},parseEase:function(e,t){return arguments.length?ki(e,t):ze},getById:function(e){return ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Bt(e),i,s;for(n.smoothChildTiming=Wt(e.smoothChildTiming),ot.remove(n),n._dp=0,n._time=n._tTime=ot._time,i=ot._first;i;)s=i._next,(t||!(!i._dur&&i instanceof vt&&i.vars.onComplete===i._targets[0]))&&An(n,i,i._start-i._delay),i=s;return An(ot,n,0),n},context:function(e,t){return e?new Ku(e,t):st},matchMedia:function(e){return new Ux(e)},matchMediaRefresh:function(){return Vi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||hl()},addEventListener:function(e,t){var n=ea[e]||(ea[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ea[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:fx,wrapYoyo:dx,distribute:Cu,random:Du,snap:Pu,normalize:ux,getUnit:Lt,clamp:ox,splitColor:Nu,toArray:dn,selector:ol,mapRange:Lu,pipe:cx,unitize:hx,interpolate:px,shuffle:Ru},install:_u,effects:Qa,ticker:Qt,updateRoot:Bt.updateRoot,plugins:Jt,globalTimeline:ot,core:{PropTween:qt,globals:gu,Tween:vt,Timeline:Bt,Animation:ls,getCache:Bi,_removeLinkedListItem:_a,reverting:function(){return Ct},context:function(e){return e&&st&&(st.data.push(e),e._ctx=st),st},suppressOverwrites:function(e){return Cl=e}}};Xt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ha[r]=vt[r]});Qt.add(Bt.updateRoot);mr=ha.to({},{duration:0});var Ox=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Nx=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Ox(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},ro=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Tt(s)&&(l={},Xt(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Nx(o,s)}}}},jt=ha.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ct?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ro("roundProps",ll),ro("modifiers"),ro("snap",Pu))||ha;vt.version=Bt.version=jt.version="3.13.0";mu=1;Dl()&&Lr();ze.Power0;ze.Power1;ze.Power2;ze.Power3;ze.Power4;ze.Linear;ze.Quad;ze.Cubic;ze.Quart;ze.Quint;ze.Strong;ze.Elastic;ze.Back;ze.SteppedEase;ze.Bounce;ze.Sine;ze.Expo;ze.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ph,ai,Mr,Gl,Oi,mh,Wl,Fx=function(){return typeof window<"u"},jn={},Ci=180/Math.PI,yr=Math.PI/180,hr=Math.atan2,_h=1e8,Xl=/([A-Z])/g,Bx=/(left|right|width|margin|padding|x)/i,zx=/[\s,\(]\S/,Rn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ul=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Vx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Hx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},$u=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ju=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Gx=function(e,t,n){return e.style[t]=n},Wx=function(e,t,n){return e.style.setProperty(t,n)},Xx=function(e,t,n){return e._gsap[t]=n},qx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Yx=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},jx=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},lt="transform",Yt=lt+"Origin",Zx=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in jn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Rn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=kn(i,o)}):this.tfm[e]=a.x?a[e]:kn(i,e),e===Yt&&(this.tfm.zOrigin=a.zOrigin);else return Rn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(lt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Yt,t,"")),e=lt}(s||t)&&this.props.push(e,t,s[e])},Qu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Kx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Xl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Wl(),(!s||!s.isStart)&&!n[lt]&&(Qu(n),i.zOrigin&&n[Yt]&&(n[Yt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ef=function(e,t){var n={target:e,props:[],revert:Kx,save:Zx};return e._gsap||jt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},tf,fl=function(e,t){var n=ai.createElementNS?ai.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ai.createElement(e);return n&&n.style?n:ai.createElement(e)},pn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Xl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ur(t)||t,1)||""},gh="O,Moz,ms,Ms,Webkit".split(","),Ur=function(e,t,n){var i=t||Oi,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(gh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?gh[a]:"")+e},dl=function(){Fx()&&window.document&&(ph=window,ai=ph.document,Mr=ai.documentElement,Oi=fl("div")||{style:{}},fl("div"),lt=Ur(lt),Yt=lt+"Origin",Oi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tf=!!Ur("perspective"),Wl=jt.core.reverting,Gl=1)},xh=function(e){var t=e.ownerSVGElement,n=fl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Mr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Mr.removeChild(n),s},vh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},nf=function(e){var t,n;try{t=e.getBBox()}catch{t=xh(e),n=1}return t&&(t.width||t.height)||n||(t=xh(e)),t&&!t.width&&!t.x&&!t.y?{x:+vh(e,["x","cx","x1"])||0,y:+vh(e,["y","cy","y1"])||0,width:0,height:0}:t},rf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&nf(e))},Xi=function(e,t){if(t){var n=e.style,i;t in jn&&t!==Yt&&(t=lt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Xl,"-$1").toLowerCase())):n.removeAttribute(t)}},oi=function(e,t,n,i,s,a){var o=new qt(e._pt,t,n,0,1,a?Ju:$u);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Mh={deg:1,rad:1,turn:1},$x={grid:1,flex:1},pi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Oi.style,l=Bx.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,_,m,p;if(i===a||!s||Mh[i]||Mh[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&rf(e),(d||a==="%")&&(jn[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[h],pt(d?s/g*u:s/100*g);if(o[l?"width":"height"]=u+(f?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ai||!_.appendChild)&&(_=ai.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Qt.time&&!m.uncache)return pt(s/m.width*u);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=u+i,g=e[h],S?e.style[t]=S:Xi(e,t)}else(d||a==="%")&&!$x[pn(_,"display")]&&(o.position=pn(e,"position")),_===e&&(o.position="static"),_.appendChild(Oi),g=Oi[h],_.removeChild(Oi),o.position="absolute";return l&&d&&(m=Bi(_),m.time=Qt.time,m.width=_[h]),pt(f?g*s/u:g&&s?u/g*s:0)},kn=function(e,t,n,i){var s;return Gl||dl(),t in Rn&&t!=="transform"&&(t=Rn[t],~t.indexOf(",")&&(t=t.split(",")[0])),jn[t]&&t!=="transform"?(s=hs(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:fa(pn(e,Yt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ua[t]&&ua[t](e,t,n)||pn(e,t)||vu(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?pi(e,t,s,n)+n:s},Jx=function(e,t,n,i){if(!n||n==="none"){var s=Ur(t,e,1),a=s&&pn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=pn(e,"borderTopColor"))}var o=new qt(this._pt,e.style,t,0,1,ju),l=0,c=0,h,u,f,d,g,_,m,p,S,b,y,M;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=pn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=pn(e,t)||i,_?e.style[t]=_:Xi(e,t)),h=[n,i],Bu(h),n=h[0],i=h[1],f=n.match(pr)||[],M=i.match(pr)||[],M.length){for(;u=pr.exec(i);)m=u[0],S=i.substring(l,u.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=vr(d,m)+y),p=parseFloat(m),b=m.substr((p+"").length),l=pr.lastIndex-b.length,b||(b=b||tn.units[t]||y,l===i.length&&(i+=b,o.e+=b)),y!==b&&(d=pi(e,t,_,b)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Ju:$u;return du.test(i)&&(o.e=0),this._pt=o,o},yh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=yh[n]||n,t[1]=yh[i]||i,t.join(" ")},ev=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],jn[o]&&(l=1,o=o==="transformOrigin"?Yt:lt),Xi(n,o);l&&(Xi(n,lt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",hs(n,1),a.uncache=1,Qu(i)))}},ua={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new qt(e._pt,t,n,0,0,ev);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},cs=[1,0,0,1,0,0],sf={},af=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bh=function(e){var t=pn(e,lt);return af(t)?cs:t.substr(7).match(fu).map(pt)},ql=function(e,t){var n=e._gsap||Bi(e),i=e.style,s=bh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?cs:s):(s===cs&&!e.offsetParent&&e!==Mr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Mr.appendChild(e)),s=bh(e),l?i.display=l:Xi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Mr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},pl=function(e,t,n,i,s,a){var o=e._gsap,l=s||ql(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],b=t.split(" "),y=parseFloat(b[0])||0,M=parseFloat(b[1])||0,A,E,C,x;n?l!==cs&&(E=d*m-g*_)&&(C=y*(m/E)+M*(-_/E)+(_*S-m*p)/E,x=y*(-g/E)+M*(d/E)-(d*S-g*p)/E,y=C,M=x):(A=nf(e),y=A.x+(~b[0].indexOf("%")?y/100*A.width:y),M=A.y+(~(b[1]||b[0]).indexOf("%")?M/100*A.height:M)),i||i!==!1&&o.smooth?(p=y-c,S=M-h,o.xOffset=u+(p*d+S*_)-p,o.yOffset=f+(p*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Yt]="0px 0px",a&&(oi(a,o,"xOrigin",c,y),oi(a,o,"yOrigin",h,M),oi(a,o,"xOffset",u,o.xOffset),oi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},hs=function(e,t){var n=e._gsap||new Hu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=pn(e,Yt)||"0",h,u,f,d,g,_,m,p,S,b,y,M,A,E,C,x,v,R,V,U,N,O,I,W,k,Z,Q,ne,de,we,q,K;return h=u=f=_=m=p=S=b=y=0,d=g=1,n.svg=!!(e.getCTM&&rf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[lt]!=="none"?l[lt]:"")),i.scale=i.rotate=i.translate="none"),E=ql(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),pl(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,E)),M=n.xOrigin||0,A=n.yOrigin||0,E!==cs&&(R=E[0],V=E[1],U=E[2],N=E[3],h=O=E[4],u=I=E[5],E.length===6?(d=Math.sqrt(R*R+V*V),g=Math.sqrt(N*N+U*U),_=R||V?hr(V,R)*Ci:0,S=U||N?hr(U,N)*Ci+_:0,S&&(g*=Math.abs(Math.cos(S*yr))),n.svg&&(h-=M-(M*R+A*U),u-=A-(M*V+A*N))):(K=E[6],we=E[7],Q=E[8],ne=E[9],de=E[10],q=E[11],h=E[12],u=E[13],f=E[14],C=hr(K,de),m=C*Ci,C&&(x=Math.cos(-C),v=Math.sin(-C),W=O*x+Q*v,k=I*x+ne*v,Z=K*x+de*v,Q=O*-v+Q*x,ne=I*-v+ne*x,de=K*-v+de*x,q=we*-v+q*x,O=W,I=k,K=Z),C=hr(-U,de),p=C*Ci,C&&(x=Math.cos(-C),v=Math.sin(-C),W=R*x-Q*v,k=V*x-ne*v,Z=U*x-de*v,q=N*v+q*x,R=W,V=k,U=Z),C=hr(V,R),_=C*Ci,C&&(x=Math.cos(C),v=Math.sin(C),W=R*x+V*v,k=O*x+I*v,V=V*x-R*v,I=I*x-O*v,R=W,O=k),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=pt(Math.sqrt(R*R+V*V+U*U)),g=pt(Math.sqrt(I*I+K*K)),C=hr(O,I),S=Math.abs(C)>2e-4?C*Ci:0,y=q?1/(q<0?-q:q):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!af(pn(e,lt)),W&&e.setAttribute("transform",W))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=pt(d),n.scaleY=pt(g),n.rotation=pt(_)+o,n.rotationX=pt(m)+o,n.rotationY=pt(p)+o,n.skewX=S+o,n.skewY=b+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Yt]=fa(c)),n.xOffset=n.yOffset=0,n.force3D=tn.force3D,n.renderTransform=n.svg?nv:tf?of:tv,n.uncache=0,n},fa=function(e){return(e=e.split(" "))[0]+" "+e[1]},so=function(e,t,n){var i=Lt(t);return pt(parseFloat(t)+parseFloat(pi(e,"x",n+"px",i)))+i},tv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,of(e,t)},wi="0deg",qr="0px",Ti=") ",of=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,b=n.zOrigin,y="",M=p==="auto"&&e&&e!==1||p===!0;if(b&&(u!==wi||h!==wi)){var A=parseFloat(h)*yr,E=Math.sin(A),C=Math.cos(A),x;A=parseFloat(u)*yr,x=Math.cos(A),a=so(S,a,E*x*-b),o=so(S,o,-Math.sin(A)*-b),l=so(S,l,C*x*-b+b)}m!==qr&&(y+="perspective("+m+Ti),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(M||a!==qr||o!==qr||l!==qr)&&(y+=l!==qr||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ti),c!==wi&&(y+="rotate("+c+Ti),h!==wi&&(y+="rotateY("+h+Ti),u!==wi&&(y+="rotateX("+u+Ti),(f!==wi||d!==wi)&&(y+="skew("+f+", "+d+Ti),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ti),S.style[lt]=y||"translate(0, 0)"},nv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,b=parseFloat(a),y=parseFloat(o),M,A,E,C,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=yr,c*=yr,M=Math.cos(l)*u,A=Math.sin(l)*u,E=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(h*=yr,x=Math.tan(c-h),x=Math.sqrt(1+x*x),E*=x,C*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),M*=x,A*=x)),M=pt(M),A=pt(A),E=pt(E),C=pt(C)):(M=u,C=f,A=E=0),(b&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(b=pi(d,"x",a,"px"),y=pi(d,"y",o,"px")),(g||_||m||p)&&(b=pt(b+g-(g*M+_*E)+m),y=pt(y+_-(g*A+_*C)+p)),(i||s)&&(x=d.getBBox(),b=pt(b+i/100*x.width),y=pt(y+s/100*x.height)),x="matrix("+M+","+A+","+E+","+C+","+b+","+y+")",d.setAttribute("transform",x),S&&(d.style[lt]=x)},iv=function(e,t,n,i,s){var a=360,o=Tt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ci:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-360)),u==="cw"&&c<0?c=(c+a*_h)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*_h)%a-~~(c/a)*a)),e._pt=f=new qt(e._pt,t,n,i,c,kx),f.e=h,f.u="deg",e._props.push(n),f},Sh=function(e,t){for(var n in t)e[n]=t[n];return e},rv=function(e,t,n){var i=Sh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[lt]=t,o=hs(n,1),Xi(n,lt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[lt],a[lt]=t,o=hs(n,1),a[lt]=c);for(l in jn)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=Lt(c),g=Lt(h),u=d!==g?pi(n,l,c,g):parseFloat(c),f=parseFloat(h),e._pt=new qt(e._pt,o,l,u,f-u,ul),e._pt.u=g||0,e._props.push(l));Sh(o,i)};Xt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ua[e>1?"border"+r:r]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(g){return kn(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,u)}});var lf={name:"css",register:dl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,f,d,g,_,m,p,S,b,y,M,A,E,C;Gl||dl(),this.styles=this.styles||ef(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(Jt[_]&&Gu(_,t,n,i,e,s)))){if(d=typeof h,g=ua[_],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=as(h)),g)g(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",ui.lastIndex=0,ui.test(c)||(m=Lt(c),p=Lt(h)),p?m!==p&&(c=pi(e,_,c,p)+p):m&&(h+=m),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Tt(c)&&~c.indexOf("random(")&&(c=as(c)),Lt(c+"")||c==="auto"||(c+=tn.units[_]||Lt(kn(e,_))||""),(c+"").charAt(1)==="="&&(c=kn(e,_))):c=kn(e,_),f=parseFloat(c),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),_ in Rn&&(_==="autoAlpha"&&(f===1&&kn(e,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,o.visibility),oi(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Rn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in jn,b){if(this.styles.save(_),d==="string"&&h.substring(0,6)==="var(--"&&(h=pn(e,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||hs(e,t.parseTransform),A=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new qt(this._pt,o,lt,0,1,M.renderTransform,M,0,-1),y.dep=1),_==="scale")this._pt=new qt(this._pt,M,"scaleY",M.scaleY,(S?vr(M.scaleY,S+u):u)-M.scaleY||0,ul),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Yt,0,o[Yt]),h=Qx(h),M.svg?pl(e,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==M.zOrigin&&oi(this,M,"zOrigin",M.zOrigin,p),oi(this,o,_,fa(c),fa(h)));continue}else if(_==="svgOrigin"){pl(e,h,1,A,0,this);continue}else if(_ in sf){iv(this,M,_,f,S?vr(f,S+h):h);continue}else if(_==="smoothOrigin"){oi(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){rv(this,h,e);continue}}else _ in o||(_=Ur(_)||_);if(b||(u||u===0)&&(f||f===0)&&!zx.test(h)&&_ in o)m=(c+"").substr((f+"").length),u||(u=0),p=Lt(h)||(_ in tn.units?tn.units[_]:m),m!==p&&(f=pi(e,_,c,p)),this._pt=new qt(this._pt,b?M:o,_,f,(S?vr(f,S+u):u)-f,!b&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Hx:ul),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Vx);else if(_ in o)Jx.call(this,e,_,c,S?S+h:h);else if(_ in e)this.add(e,_,c||e[_],S?S+h:h,i,s);else if(_!=="parseTransform"){Ll(_,h);continue}b||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),a.push(_)}}E&&Zu(this)},render:function(e,t){if(t.tween._time||!Wl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:kn,aliases:Rn,getSetter:function(e,t,n){var i=Rn[t];return i&&i.indexOf(",")<0&&(t=i),t in jn&&t!==Yt&&(e._gsap.x||kn(e,"x"))?n&&mh===n?t==="scale"?qx:Xx:(mh=n||{})&&(t==="scale"?Yx:jx):e.style&&!Pl(e.style[t])?Gx:~t.indexOf("-")?Wx:Vl(e,t)},core:{_removeProperty:Xi,_getMatrix:ql}};jt.utils.checkPrefix=Ur;jt.core.getStyleSaver=ef;(function(r,e,t,n){var i=Xt(r+","+e+","+t,function(s){jn[s]=1});Xt(e,function(s){tn.units[s]="deg",sf[s]=1}),Rn[i[13]]=r+","+e,Xt(n,function(s){var a=s.split(":");Rn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){tn.units[r]="px"});jt.registerPlugin(lf);var Jr=jt.registerPlugin(lf)||jt;Jr.core.Tween;var sv=Object.defineProperty,av=(r,e,t)=>e in r?sv(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ye=(r,e,t)=>(av(r,typeof e!="symbol"?e+"":e,t),t);function ao(r,e,t,n,i){let s;if(r=r.subarray||r.slice?r:r.buffer,t=t.subarray||t.slice?t:t.buffer,r=e?r.subarray?r.subarray(e,i&&e+i):r.slice(e,i&&e+i):r,t.set)t.set(r,n);else for(s=0;s<r.length;s++)t[s+n]=r[s];return t}function ov(r){return r instanceof Float32Array?r:r instanceof at?r.getAttribute("position").array:r.map(e=>{const t=Array.isArray(e);return e instanceof D?[e.x,e.y,e.z]:e instanceof Ae?[e.x,e.y,0]:t&&e.length===3?[e[0],e[1],e[2]]:t&&e.length===2?[e[0],e[1],0]:e}).flat()}class Yr extends at{constructor(){super(),Ye(this,"type","MeshLine"),Ye(this,"isMeshLine",!0),Ye(this,"positions",[]),Ye(this,"previous",[]),Ye(this,"next",[]),Ye(this,"side",[]),Ye(this,"width",[]),Ye(this,"indices_array",[]),Ye(this,"uvs",[]),Ye(this,"counters",[]),Ye(this,"widthCallback",null),Ye(this,"_attributes"),Ye(this,"_points",[]),Ye(this,"points"),Ye(this,"matrixWorld",new it),Object.defineProperties(this,{points:{enumerable:!0,get(){return this._points},set(e){this.setPoints(e,this.widthCallback)}}})}setMatrixWorld(e){this.matrixWorld=e}setPoints(e,t){if(e=ov(e),this._points=e,this.widthCallback=t??null,this.positions=[],this.counters=[],e.length&&e[0]instanceof D)for(let n=0;n<e.length;n++){const i=e[n],s=n/(e.length-1);this.positions.push(i.x,i.y,i.z),this.positions.push(i.x,i.y,i.z),this.counters.push(s),this.counters.push(s)}else for(let n=0;n<e.length;n+=3){const i=n/(e.length-1);this.positions.push(e[n],e[n+1],e[n+2]),this.positions.push(e[n],e[n+1],e[n+2]),this.counters.push(i),this.counters.push(i)}this.process()}compareV3(e,t){const n=e*6,i=t*6;return this.positions[n]===this.positions[i]&&this.positions[n+1]===this.positions[i+1]&&this.positions[n+2]===this.positions[i+2]}copyV3(e){const t=e*6;return[this.positions[t],this.positions[t+1],this.positions[t+2]]}process(){const e=this.positions.length/6;this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[];let t,n;this.compareV3(0,e-1)?n=this.copyV3(e-2):n=this.copyV3(0),this.previous.push(n[0],n[1],n[2]),this.previous.push(n[0],n[1],n[2]);for(let i=0;i<e;i++){if(this.side.push(1),this.side.push(-1),this.widthCallback?t=this.widthCallback(i/(e-1)):t=1,this.width.push(t),this.width.push(t),this.uvs.push(i/(e-1),0),this.uvs.push(i/(e-1),1),i<e-1){n=this.copyV3(i),this.previous.push(n[0],n[1],n[2]),this.previous.push(n[0],n[1],n[2]);const s=i*2;this.indices_array.push(s,s+1,s+2),this.indices_array.push(s+2,s+1,s+3)}i>0&&(n=this.copyV3(i),this.next.push(n[0],n[1],n[2]),this.next.push(n[0],n[1],n[2]))}this.compareV3(e-1,0)?n=this.copyV3(1):n=this.copyV3(e-1),this.next.push(n[0],n[1],n[2]),this.next.push(n[0],n[1],n[2]),!this._attributes||this._attributes.position.count!==this.counters.length?this._attributes={position:new xt(new Float32Array(this.positions),3),previous:new xt(new Float32Array(this.previous),3),next:new xt(new Float32Array(this.next),3),side:new xt(new Float32Array(this.side),1),width:new xt(new Float32Array(this.width),1),uv:new xt(new Float32Array(this.uvs),2),index:new xt(new Uint16Array(this.indices_array),1),counters:new xt(new Float32Array(this.counters),1)}:(this._attributes.position.copyArray(new Float32Array(this.positions)),this._attributes.position.needsUpdate=!0,this._attributes.previous.copyArray(new Float32Array(this.previous)),this._attributes.previous.needsUpdate=!0,this._attributes.next.copyArray(new Float32Array(this.next)),this._attributes.next.needsUpdate=!0,this._attributes.side.copyArray(new Float32Array(this.side)),this._attributes.side.needsUpdate=!0,this._attributes.width.copyArray(new Float32Array(this.width)),this._attributes.width.needsUpdate=!0,this._attributes.uv.copyArray(new Float32Array(this.uvs)),this._attributes.uv.needsUpdate=!0,this._attributes.index.copyArray(new Uint16Array(this.indices_array)),this._attributes.index.needsUpdate=!0),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setIndex(this._attributes.index),this.computeBoundingSphere(),this.computeBoundingBox()}advance({x:e,y:t,z:n}){const i=this._attributes.position.array,s=this._attributes.previous.array,a=this._attributes.next.array,o=i.length;ao(i,0,s,0,o),ao(i,6,i,0,o-6),i[o-6]=e,i[o-5]=t,i[o-4]=n,i[o-3]=e,i[o-2]=t,i[o-1]=n,ao(i,6,a,0,o-6),a[o-6]=e,a[o-5]=t,a[o-4]=n,a[o-3]=e,a[o-2]=t,a[o-1]=n,this._attributes.position.needsUpdate=!0,this._attributes.previous.needsUpdate=!0,this._attributes.next.needsUpdate=!0}}const lv=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  #include <fog_pars_vertex>
  #include <clipping_planes_pars_vertex>

  attribute vec3 previous;
  attribute vec3 next;
  attribute float side;
  attribute float width;
  attribute float counters;
  
  uniform vec2 resolution;
  uniform float lineWidth;
  uniform vec3 color;
  uniform float opacity;
  uniform float sizeAttenuation;
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
    return res;
  }
  
  void main() {
    float aspect = resolution.x / resolution.y;
    vColor = vec4(color, opacity);
    vUV = uv;
    vCounters = counters;
  
    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4(position, 1.0) * aspect;
    vec4 prevPos = m * vec4(previous, 1.0);
    vec4 nextPos = m * vec4(next, 1.0);
  
    vec2 currentP = fix(finalPosition, aspect);
    vec2 prevP = fix(prevPos, aspect);
    vec2 nextP = fix(nextPos, aspect);
  
    float w = lineWidth * width;
  
    vec2 dir;
    if (nextP == currentP) dir = normalize(currentP - prevP);
    else if (prevP == currentP) dir = normalize(nextP - currentP);
    else {
      vec2 dir1 = normalize(currentP - prevP);
      vec2 dir2 = normalize(nextP - currentP);
      dir = normalize(dir1 + dir2);
  
      vec2 perp = vec2(-dir1.y, dir1.x);
      vec2 miter = vec2(-dir.y, dir.x);
      //w = clamp(w / dot(miter, perp), 0., 4. * lineWidth * width);
    }
  
    //vec2 normal = (cross(vec3(dir, 0.), vec3(0., 0., 1.))).xy;
    vec4 normal = vec4(-dir.y, dir.x, 0., 1.);
    normal.xy *= .5 * w;
    //normal *= projectionMatrix;
    if (sizeAttenuation == 0.) {
      normal.xy *= finalPosition.w;
      normal.xy /= (vec4(resolution, 0., 1.) * projectionMatrix).xy * aspect;
    }
  
    finalPosition.xy += normal.xy * side;
    gl_Position = finalPosition;
    #include <logdepthbuf_vertex>
    #include <fog_vertex>
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    #include <clipping_planes_vertex>
    #include <fog_vertex>
  }
`,cv=parseInt(da.replace(/\D+/g,"")),hv=cv>=154?"colorspace_fragment":"encodings_fragment",uv=`
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  
  uniform sampler2D map;
  uniform sampler2D alphaMap;
  uniform float useGradient;
  uniform float useMap;
  uniform float useAlphaMap;
  uniform float useDash;
  uniform float dashArray;
  uniform float dashOffset;
  uniform float dashRatio;
  uniform float visibility;
  uniform float alphaTest;
  uniform vec2 repeat;
  uniform vec3 gradient[2];
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  void main() {
    #include <logdepthbuf_fragment>
    vec4 diffuseColor = vColor;
    if (useGradient == 1.) diffuseColor = vec4(mix(gradient[0], gradient[1], vCounters), 1.0);
    if (useMap == 1.) diffuseColor *= texture2D(map, vUV * repeat);
    if (useAlphaMap == 1.) diffuseColor.a *= texture2D(alphaMap, vUV * repeat).a;
    if (diffuseColor.a < alphaTest) discard;
    if (useDash == 1.) diffuseColor.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
    diffuseColor.a *= step(vCounters, visibility);
    #include <clipping_planes_fragment>
    gl_FragColor = diffuseColor;     
    #include <fog_fragment>
    #include <tonemapping_fragment>
    #include <${hv}>
  }
`;class jr extends qn{constructor(e){super({uniforms:{...se.fog,lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},color:{value:new Ne(16777215)},gradient:{value:[new Ne(16711680),new Ne(65280)]},opacity:{value:1},resolution:{value:new Ae(1,1)},sizeAttenuation:{value:1},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:0},useGradient:{value:0},visibility:{value:1},alphaTest:{value:0},repeat:{value:new Ae(1,1)}},vertexShader:lv,fragmentShader:uv}),Ye(this,"lineWidth"),Ye(this,"map"),Ye(this,"useMap"),Ye(this,"alphaMap"),Ye(this,"useAlphaMap"),Ye(this,"color"),Ye(this,"gradient"),Ye(this,"resolution"),Ye(this,"sizeAttenuation"),Ye(this,"dashArray"),Ye(this,"dashOffset"),Ye(this,"dashRatio"),Ye(this,"useDash"),Ye(this,"useGradient"),Ye(this,"visibility"),Ye(this,"repeat"),this.type="MeshLineMaterial",Object.defineProperties(this,{lineWidth:{enumerable:!0,get(){return this.uniforms.lineWidth.value},set(t){this.uniforms.lineWidth.value=t}},map:{enumerable:!0,get(){return this.uniforms.map.value},set(t){this.uniforms.map.value=t}},useMap:{enumerable:!0,get(){return this.uniforms.useMap.value},set(t){this.uniforms.useMap.value=t}},alphaMap:{enumerable:!0,get(){return this.uniforms.alphaMap.value},set(t){this.uniforms.alphaMap.value=t}},useAlphaMap:{enumerable:!0,get(){return this.uniforms.useAlphaMap.value},set(t){this.uniforms.useAlphaMap.value=t}},color:{enumerable:!0,get(){return this.uniforms.color.value},set(t){this.uniforms.color.value=t}},gradient:{enumerable:!0,get(){return this.uniforms.gradient.value},set(t){this.uniforms.gradient.value=t}},opacity:{enumerable:!0,get(){return this.uniforms.opacity.value},set(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get(){return this.uniforms.resolution.value},set(t){this.uniforms.resolution.value.copy(t)}},sizeAttenuation:{enumerable:!0,get(){return this.uniforms.sizeAttenuation.value},set(t){this.uniforms.sizeAttenuation.value=t}},dashArray:{enumerable:!0,get(){return this.uniforms.dashArray.value},set(t){this.uniforms.dashArray.value=t,this.useDash=t!==0?1:0}},dashOffset:{enumerable:!0,get(){return this.uniforms.dashOffset.value},set(t){this.uniforms.dashOffset.value=t}},dashRatio:{enumerable:!0,get(){return this.uniforms.dashRatio.value},set(t){this.uniforms.dashRatio.value=t}},useDash:{enumerable:!0,get(){return this.uniforms.useDash.value},set(t){this.uniforms.useDash.value=t}},useGradient:{enumerable:!0,get(){return this.uniforms.useGradient.value},set(t){this.uniforms.useGradient.value=t}},visibility:{enumerable:!0,get(){return this.uniforms.visibility.value},set(t){this.uniforms.visibility.value=t}},alphaTest:{enumerable:!0,get(){return this.uniforms.alphaTest.value},set(t){this.uniforms.alphaTest.value=t}},repeat:{enumerable:!0,get(){return this.uniforms.repeat.value},set(t){this.uniforms.repeat.value.copy(t)}}}),this.setValues(e)}copy(e){return super.copy(e),this.lineWidth=e.lineWidth,this.map=e.map,this.useMap=e.useMap,this.alphaMap=e.alphaMap,this.useAlphaMap=e.useAlphaMap,this.color.copy(e.color),this.gradient=e.gradient,this.opacity=e.opacity,this.resolution.copy(e.resolution),this.sizeAttenuation=e.sizeAttenuation,this.dashArray=e.dashArray,this.dashOffset=e.dashOffset,this.dashRatio=e.dashRatio,this.useDash=e.useDash,this.useGradient=e.useGradient,this.visibility=e.visibility,this.alphaTest=e.alphaTest,this.repeat.copy(e.repeat),this}}function Eh(r,e){const t=new it,n=new Fr,i=new Nr,s=new D,a=this.geometry;if(i.copy(a.boundingSphere),i.applyMatrix4(this.matrixWorld),!r.ray.intersectSphere(i,s))return;t.copy(this.matrixWorld).invert(),n.copy(r.ray).applyMatrix4(t);const o=new D,l=new D,c=new D,h=this instanceof Nd?2:1,u=a.index,f=a.attributes;if(u!==null){const d=u.array,g=f.position.array,_=f.width.array;for(let m=0,p=d.length-1;m<p;m+=h){const S=d[m],b=d[m+1];o.fromArray(g,S*3),l.fromArray(g,b*3);const y=_[Math.floor(m/3)]!=null?_[Math.floor(m/3)]:1,M=r.params.Line.threshold+this.material.lineWidth*y/2,A=M*M;if(n.distanceSqToSegment(o,l,s,c)>A)continue;s.applyMatrix4(this.matrixWorld);const C=r.ray.origin.distanceTo(s);C<r.near||C>r.far||(e.push({distance:C,point:c.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:void 0,object:this}),m=p)}}}function fv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var oo={},lo={},Ai={},wh;function cf(){return wh||(wh=1,Ai.hashU32=function(e){return e=e|0,e=e+2127912214+(e<<12)|0,e=e^-949894596^e>>>19,e=e+374761393+(e<<5)|0,e=e+-744332180^e<<9,e=e+-42973499+(e<<3)|0,e^-1252372727^e>>>16|0},Ai.readU64=function(e,t){var n=0;return n|=e[t++]<<0,n|=e[t++]<<8,n|=e[t++]<<16,n|=e[t++]<<24,n|=e[t++]<<32,n|=e[t++]<<40,n|=e[t++]<<48,n|=e[t++]<<56,n},Ai.readU32=function(e,t){var n=0;return n|=e[t++]<<0,n|=e[t++]<<8,n|=e[t++]<<16,n|=e[t++]<<24,n},Ai.writeU32=function(e,t,n){e[t++]=n>>0&255,e[t++]=n>>8&255,e[t++]=n>>16&255,e[t++]=n>>24&255},Ai.imul=function(e,t){var n=e>>>16,i=e&65535,s=t>>>16,a=t&65535;return i*a+(n*a+i*s<<16)|0}),Ai}var Th;function dv(){if(Th)return lo;Th=1;var r=cf(),e=2654435761,t=2246822519,n=3266489917,i=668265263,s=374761393;function a(g,_){return g=g|0,_=_|0,g>>>(32-_|0)|g<<_|0}function o(g,_,m){return g=g|0,_=_|0,m=m|0,r.imul(g>>>(32-_|0)|g<<_,m)|0}function l(g,_){return g=g|0,_=_|0,g>>>_^g|0}function c(g,_,m,p,S){return o(r.imul(_,m)+g,p,S)}function h(g,_,m){return o(g+r.imul(_[m],s),11,e)}function u(g,_,m){return c(g,r.readU32(_,m),n,17,i)}function f(g,_,m){return[c(g[0],r.readU32(_,m+0),t,13,e),c(g[1],r.readU32(_,m+4),t,13,e),c(g[2],r.readU32(_,m+8),t,13,e),c(g[3],r.readU32(_,m+12),t,13,e)]}function d(g,_,m,p){var S,b;if(b=p,p>=16){for(S=[g+e+t,g+t,g,g-e];p>=16;)S=f(S,_,m),m+=16,p-=16;S=a(S[0],1)+a(S[1],7)+a(S[2],12)+a(S[3],18)+b}else S=g+s+p>>>0;for(;p>=4;)S=u(S,_,m),m+=4,p-=4;for(;p>0;)S=h(S,_,m),m++,p--;return S=l(r.imul(l(r.imul(l(S,15),t),13),n),16),S>>>0}return lo.hash=d,lo}var Ah;function pv(){return Ah||(Ah=1,function(r){var e=dv(),t=cf(),n=4,i=13,s=5,a=6,o=65536,l=4,c=(1<<l)-1,h=4,u=(1<<h)-1,f=R(5<<20),d=x(),g=407708164,_=4,m=8,p=16,S=64,b=192,y=2147483648,M=7,A=4,E=7,C={4:65536,5:262144,6:1048576,7:4194304};function x(){try{return new Uint32Array(o)}catch{for(var U=new Array(o),N=0;N<o;N++)U[N]=0;return U}}function v(U){for(var N=0;N<o;N++)d[N]=0}function R(U){try{return new Uint8Array(U)}catch{for(var N=new Array(U),O=0;O<U;O++)N[O]=0;return N}}function V(U,N,O){if(typeof U.buffer!==void 0){if(Uint8Array.prototype.slice)return U.slice(N,O);var I=U.length;N=N|0,N=N<0?Math.max(I+N,0):Math.min(N,I),O=O===void 0?I:O|0,O=O<0?Math.max(I+O,0):Math.min(O,I);for(var W=new Uint8Array(O-N),k=N,Z=0;k<O;)W[Z++]=U[k++];return W}else return U.slice(N,O)}r.compressBound=function(N){return N+N/255+16|0},r.decompressBound=function(N){var O=0;if(t.readU32(N,O)!==g)throw new Error("invalid magic number");O+=4;var I=N[O++];if((I&b)!==S)throw new Error("incompatible descriptor version "+(I&b));var W=(I&p)!==0,k=(I&m)!==0,Z=N[O++]>>A&E;if(C[Z]===void 0)throw new Error("invalid block size "+Z);var Q=C[Z];if(k)return t.readU64(N,O);O++;for(var ne=0;;){var de=t.readU32(N,O);if(O+=4,de&y?(de&=2147483647,ne+=de):ne+=Q,de===0)return ne;W&&(O+=4),O+=de}},r.makeBuffer=R,r.decompressBlock=function(N,O,I,W,k){var Z,Q,ne,de,we;for(ne=I+W;I<ne;){var q=N[I++],K=q>>4;if(K>0){if(K===15)for(;K+=N[I],N[I++]===255;);for(de=I+K;I<de;)O[k++]=N[I++]}if(I>=ne)break;if(Z=q&15,Q=N[I++]|N[I++]<<8,Z===15)for(;Z+=N[I],N[I++]===255;);for(Z+=n,we=k-Q,de=we+Z;we<de;)O[k++]=O[we++]|0}return k},r.compressBlock=function(N,O,I,W,k){var Z,Q,ne,de,we,q,K,ue,re;if(K=0,ue=W+I,Q=I,W>=i)for(var Se=(1<<a)+3;I+n<ue-s;){var Re=t.readU32(N,I),Ie=t.hashU32(Re)>>>0;if(Ie=(Ie>>16^Ie)>>>0&65535,Z=k[Ie]-1,k[Ie]=I+1,Z<0||I-Z>>>16>0||t.readU32(N,Z)!==Re){we=Se++>>a,I+=we;continue}for(Se=(1<<a)+3,q=I-Q,de=I-Z,I+=n,Z+=n,ne=I;I<ue-s&&N[I]===N[Z];)I++,Z++;ne=I-ne;var et=ne<c?ne:c;if(q>=u){for(O[K++]=(u<<l)+et,re=q-u;re>=255;re-=255)O[K++]=255;O[K++]=re}else O[K++]=(q<<l)+et;for(var Fe=0;Fe<q;Fe++)O[K++]=N[Q+Fe];if(O[K++]=de,O[K++]=de>>8,ne>=c){for(re=ne-c;re>=255;re-=255)O[K++]=255;O[K++]=re}Q=I}if(Q===0)return 0;if(q=ue-Q,q>=u){for(O[K++]=u<<l,re=q-u;re>=255;re-=255)O[K++]=255;O[K++]=re}else O[K++]=q<<l;for(I=Q;I<ue;)O[K++]=N[I++];return K},r.decompressFrame=function(N,O){var I,W,k,Z,Q=0,ne=0;if(t.readU32(N,Q)!==g)throw new Error("invalid magic number");if(Q+=4,Z=N[Q++],(Z&b)!==S)throw new Error("incompatible descriptor version");I=(Z&p)!==0,W=(Z&_)!==0,k=(Z&m)!==0;var de=N[Q++]>>A&E;if(C[de]===void 0)throw new Error("invalid block size");for(k&&(Q+=8),Q++;;){var we;if(we=t.readU32(N,Q),Q+=4,we===0)break;if(I&&(Q+=4),(we&y)!==0){we&=2147483647;for(var q=0;q<we;q++)O[ne++]=N[Q++]}else ne=r.decompressBlock(N,O,Q,we,ne),Q+=we}return W&&(Q+=4),ne},r.compressFrame=function(N,O){var I=0;t.writeU32(O,I,g),I+=4,O[I++]=S,O[I++]=M<<A,O[I]=e.hash(0,O,4,I-4)>>8,I++;var W=C[M],k=N.length,Z=0;for(v();k>0;){var Q=0,ne=k>W?W:k;if(Q=r.compressBlock(N,f,Z,ne,d),Q>ne||Q===0){t.writeU32(O,I,2147483648|ne),I+=4;for(var de=Z+ne;Z<de;)O[I++]=N[Z++];k-=ne}else{t.writeU32(O,I,Q),I+=4;for(var we=0;we<Q;)O[I++]=f[we++];Z+=ne,k-=ne}}return t.writeU32(O,I,0),I+=4,I},r.decompress=function(N,O){var I,W;return O===void 0&&(O=r.decompressBound(N)),I=r.makeBuffer(O),W=r.decompressFrame(N,I),W!==O&&(I=V(I,0,W)),I},r.compress=function(N,O){var I,W;return O===void 0&&(O=r.compressBound(N.length)),I=r.makeBuffer(O),W=r.compressFrame(N,I),W!==O&&(I=V(I,0,W)),I}}(oo)),oo}var mv=pv();const _v=fv(mv);class Rh{constructor(e,t,n,i,s,a,o){this.imageFilenames=e,this.crystalSummary=t,this.goniometer=n,this.crystal=i,this.scan=s,this.detectorPanelData=a,this.imageFilename=o,this.imageData={}}parseImageData(e,t){const n=mi.decompressImageData(e);this.imageData[t]=n}parseExptImageData(e){for(let t=0;t<e.length;t++){const n=mi.decompressImageData(e[t]);this.imageData[t]=n}}clearExperiment(){this.imageFilenames=null,this.crystalSummary=null,this.goniometer=null,this.crystal=null,this.scan=null,this.detectorPanelData=null,this.imageFilename=null,this.imageData={}}}class mi{constructor(){Zn(this,"parseExperiment",e=>{const t=new FileReader;return new Promise((n,i)=>{t.onerror=()=>{t.abort(),i(new DOMException("Problem parsing .expt file."))},t.onloadend=()=>{if(n(t.result),mi.isDIALSExpt(e,t.result)){this.exptJSON=JSON.parse(t.result);for(var s=0;s<this.numExperiments();s++)this.experiments[s]=new Rh(this.getImageFilenames(s),this.getCrystalSummary(s),this.getGoniometer(s),this.getCrystal(s),this.getScan(s),this.getDetectorData(s),this.getImageFilenames(s));this.filename=e.name}},t.readAsText(e)})});this.exptJSON=null,this.filename=null,this.experiments={},this.crystals={}}hasExptJSON(){return this.exptJSON!=null}static isDIALSExpt(e,t){return e.name.split(".").pop()==="expt"&&t[0]==="{"}static isExptJSON(e){try{return e.__id__=="ExperimentList"}catch{return!1}}static decompressImageData(e){const{data:t,shape:n,dtype:i}=e,s=_v.decompress(new Uint8Array(t));let a;if(i==="float16"){const o=new Uint16Array(s.buffer,s.byteOffset,s.byteLength/2);a=new Float32Array(o.length);for(let l=0;l<o.length;l++){const c=o[l],h=c>>10&31,u=c&1023,f=c>>15?-1:1;h===0?a[l]=f*5960464477539063e-23*u:h===31?a[l]=u?NaN:f*(1/0):a[l]=f*Math.pow(2,h-15)*(1+u/1024)}}else{let o;switch(i){case"float32":o=Float32Array;break;case"float64":o=Float64Array;break;case"int32":o=Int32Array;break;default:throw new Error(`Unsupported data type: ${i}`)}a=new o(s.buffer,s.byteOffset,s.byteLength/o.BYTES_PER_ELEMENT)}if(n.length===2){const[o,l]=n;if(a.length!==o*l)throw new Error("Data length mismatch for 2D reshape");return Array.from({length:o},(h,u)=>a.slice(u*l,(u+1)*l))}else if(n.length===3){const[o,l,c]=n;if(a.length!==o*l*c)throw new Error("Data length mismatch for 3D reshape");return Array.from({length:o},(u,f)=>Array.from({length:l},(d,g)=>a.slice(f*l*c+g*c,f*l*c+(g+1)*c)))}else throw new Error("Only 2D and 3D arrays are supported")}clearExperiment(){this.exptJSON=null,this.filename=null,Object.values(this.experiments).forEach(e=>e.clearExperiment()),this.experiments={},this.crystals={}}numExperiments(){return this.exptJSON==null?0:this.exptJSON.imageset.length}parseExperimentJSON(e){this.exptJSON=e,this.imageFilenames=[];for(var t=0;t<this.numExperiments();t++)this.experiments[t]=new Rh(this.getImageFilenames(t),this.getCrystalSummary(t),this.getGoniometer(t),this.getCrystal(t),this.getScan(t),this.getDetectorData(t),this.getImageFilenames(t)),this.imageFilenames.push(this.getImageFilenames(t)),this.crystals=this.getAllCrystals()}parseImageData(e,t,n){this.experiments[n].parseImageData(e,t)}parseExptImageData(e,t){this.experiments[t].parseExptImageData(e)}getImageFilenames(e){const t=this.exptJSON.experiment[e].imageset;return this.exptJSON.imageset[t].template}getDetectorData(e){const t=this.getRawDetectorPanelData(e);for(var n=this.getDetectorOrientationData(e),i=[],s=0;s<t.length;s++){const E=t[s];var a=new Ae(E.pixel_size[0],E.pixel_size[1]),o=new Ae(E.image_size[0],E.image_size[1]),l=new Ae(a.x*o.x,a.y*o.y),c=new D(E.fast_axis[0],E.fast_axis[1],E.fast_axis[2]),h=new D(E.slow_axis[0],E.slow_axis[1],E.slow_axis[2]),u=new D(E.origin[0],E.origin[1],E.origin[2]),f=new Me(c.x,h.x,u.x,c.y,h.y,u.y,c.z,h.z,u.z),d=new D(n.fast_axis[0],n.fast_axis[1],n.fast_axis[2]),g=new D(n.slow_axis[0],n.slow_axis[1],n.slow_axis[2]),_=d.clone().cross(g),m=new Me(d.x,g.x,_.x,d.y,g.y,_.y,d.z,g.z,_.z),p=new D(n.origin[0],n.origin[1],n.origin[2]),S=m.clone().multiply(f),b=S.elements;b[6]+=p.x,b[7]+=p.y,b[8]+=p.z;var y=new Me().fromArray(b),M=c.clone().multiplyScalar(l.x),A=h.clone().multiplyScalar(l.y);let C=u.clone();C.add(M.clone().multiplyScalar(.5)),C.add(A.clone().multiplyScalar(.5)),i.push({panelSize:l,pxSize:a,pxs:o,fastAxis:c,slowAxis:h,scaledFastAxis:M,scaledSlowAxis:A,origin:u,dMatrix:y,centroid:C,name:E.name})}return i}getRawDetectorPanelData(e){const t=this.exptJSON.experiment[e].detector;return this.exptJSON.detector[t].panels}getBeamData(e){const t=this.exptJSON.experiment[e].beam;return this.exptJSON.beam[t]}getBeamSummary(e){const t=this.getBeamData(e);var n=t.direction;n=[n[0].toFixed(3),n[1].toFixed(3),n[2].toFixed(3)];const i=t.wavelength;var s="direction: ("+n+"), ";return i&&(s+=" wavelength: "+i.toFixed(3)),s}getGoniometer(e){function t(l){const c=["axes","angles","scan_axis"];for(var h=0;h<c.length;h++)if(!(c[h]in l))return!1;return!0}function n(l){const c=l.fixed_rotation,h=l.setting_rotation,u=l.rotation_axis;return{fixedRotation:new Me(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8]),settingRotation:new Me(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8]),rotationAxis:new D(u[0],u[1],u[2])}}function i(l){function c(S,b){const y=new D(S[0],S[1],S[2]).normalize(),M=Math.cos(b*Math.PI/180),A=Math.sin(b*Math.PI/180),[E,C,x]=y.toArray(),v=M+(1-M)*E*E,R=(1-M)*E*C-A*x,V=(1-M)*E*x+A*C,U=(1-M)*E*C+A*x,N=M+(1-M)*C*C,O=(1-M)*C*x-A*E,I=(1-M)*E*x-A*C,W=(1-M)*C*x+A*E,k=M+(1-M)*x*x;return new Me().set(v,R,V,U,N,O,I,W,k).transpose()}const h=l.axes,u=l.angles,f=l.scan_axis,d=h[f],g=new D(d[0],d[1],d[2]);var _=new Me(1,0,0,0,1,0,0,0,1);const m=new Me(1,0,0,0,1,0,0,0,1);for(var p=0;p<f;p++){const S=c(h[p],u[p]);_=_.clone().multiply(S)}for(var p=f+1;p<h.length;p++){const b=c(h[p],u[p]);m.multiply(b)}return{fixedRotation:_,settingRotation:m,rotationAxis:g}}const s=this.exptJSON.goniometer;if(!s||s.length===0){this.goniometer=null;return}const a=this.exptJSON.experiment[e].goniometer,o=s[a];return t(o)?i(o):n(o)}getCrystalData(e){if(this.exptJSON.crystal.length===0||e===void 0)return null;var t=this.exptJSON.experiment[e].crystal;return this.exptJSON.crystal[t]}getAllCrystalData(){return this.exptJSON.crystal}hasCrystal(e){return this.exptJSON===null||this.experiments===void 0?!1:this.experiments[e].crystal!==null&&this.experiments[e].crystal!==void 0}latticeParameters(e,t,n){const i=e.length(),s=t.length(),a=n.length(),o=Math.acos(t.dot(n)/(s*a)),l=Math.acos(e.dot(n)/(i*a)),c=Math.acos(e.dot(t)/(i*s));return[i,s,a,o,l,c]}unitCellVolume(e,t,n,i,s,a){const o=Math.cos(i)**2,l=Math.cos(s)**2,c=Math.cos(a)**2,h=Math.cos(i),u=Math.cos(s),f=Math.cos(a);return e*t*n*Math.sqrt(1-o-l-c+2*h*u*f)}reciprocalLatticeConstants(e,t,n,i,s,a,o){const l=new Array(6);return l[0]=t*n*Math.sin(i)/o,l[1]=n*e*Math.sin(s)/o,l[2]=e*t*Math.sin(a)/o,l[3]=Math.cos(s)*Math.cos(a)-Math.cos(i),l[3]/=Math.sin(s)*Math.sin(a),l[4]=Math.cos(a)*Math.cos(i)-Math.cos(s),l[4]/=Math.sin(a)*Math.sin(i),l[5]=Math.cos(i)*Math.cos(s)-Math.cos(a),l[5]/=Math.sin(i)*Math.sin(s),l}getBMatrix(e,t,n){const[i,s,a,o,l,c]=this.latticeParameters(e,t,n),h=this.unitCellVolume(i,s,a,o,l,c),u=this.reciprocalLatticeConstants(i,s,a,o,l,c,h),f=Math.sqrt(1-u[3]*u[3]),d=new Array(9);return d[0]=1/i,d[1]=-Math.cos(c)/(Math.sin(c)*i),d[2]=-(Math.cos(c)*Math.sin(l)*u[3]+Math.cos(l)*Math.sin(c)),d[2]/=Math.sin(l)*f*Math.sin(c)*i,d[3]=0,d[4]=1/(Math.sin(c)*s),d[5]=u[3]/(f*Math.sin(c)*s),d[6]=0,d[7]=0,d[8]=1/(Math.sin(l)*f*a),new Me(d[0],d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8])}getAllCrystals(){const e=this.getAllCrystalData();if(!e){this.crystalSummary=null;return}const t=[];for(let a=0;a<e.length;a++){const o=e[a];var n=o.real_space_a;n=new D(n[0],n[1],n[2]);var i=o.real_space_b;i=new D(i[0],i[1],i[2]);var s=o.real_space_c;s=new D(s[0],s[1],s[2]);const l=this.getBMatrix(n.clone(),i.clone(),s.clone()),c=new Me(n.x,n.y,n.z,i.x,i.y,i.z,s.x,s.y,s.z).invert(),h=c.elements;c.transpose();const u=new Me;u.multiplyMatrices(l.clone().invert(),c.clone());const f=[new D(h[0],h[3],h[6]),new D(h[1],h[4],h[7]),new D(h[2],h[5],h[8])];t.push({U:u,B:l,UB:c,reciprocalCell:f})}return t}getCrystal(e){const t=this.getCrystalData(e);if(!t){this.crystalSummary=null;return}var n=t.real_space_a;n=new D(n[0],n[1],n[2]);var i=t.real_space_b;i=new D(i[0],i[1],i[2]);var s=t.real_space_c;s=new D(s[0],s[1],s[2]);const a=this.getBMatrix(n.clone(),i.clone(),s.clone()),o=new Me(n.x,n.y,n.z,i.x,i.y,i.z,s.x,s.y,s.z).invert(),l=o.elements;o.transpose();const c=new Me;c.multiplyMatrices(a.clone().invert(),o.clone());const h=[new D(l[0],l[3],l[6]),new D(l[1],l[4],l[7]),new D(l[2],l[5],l[8])];return{U:c,B:a,UB:o,reciprocalCell:h,exptID:e}}getCrystalRLV(e){return this.experiments[e].crystal.reciprocalCell}getAllCrystalRLVs(){if(!this.crystals)return null;const e=[];for(let t=0;t<this.crystals.length;t++)e.push([this.crystals[t].reciprocalCell[0].clone(),this.crystals[t].reciprocalCell[1].clone(),this.crystals[t].reciprocalCell[2].clone()]);return e}getAllCrystalRCVs(){if(!this.crystals)return null;const e=[];for(let t=0;t<this.crystals.length;t++){const n=this.crystals[t].B.clone().elements;e.push([new D(n[0],n[3],n[6]),new D(n[1],n[4],n[7]),new D(n[2],n[5],n[8])])}return e}getCrystalU(e){return this.crystals[e].U.clone()}getCrystalSummary(e){if(this.experiments!==void 0&&this.experiments[e]!==void 0)return this.experiments[e].crystalSummary!==void 0?this.experiments[e].crystalSummary:null;const t=this.getCrystalData(e);if(!t)return null;const n=t.real_space_a,i=new D(n[0],n[1],n[2]),s=t.real_space_b,a=new D(s[0],s[1],s[2]),o=t.real_space_c,l=new D(o[0],o[1],o[2]),c=i.length().toFixed(3),h=a.length().toFixed(3),u=l.length().toFixed(3),f=(a.angleTo(l)*(180/Math.PI)).toFixed(3),d=(i.angleTo(l)*(180/Math.PI)).toFixed(3),g=(i.angleTo(a)*(180/Math.PI)).toFixed(3);var _="a: "+c+" b: "+h+" c: "+u;return _+=" alpha: "+f+" beta: "+d+" gamma: "+g,_+=" ("+t.space_group_hall_symbol+")",_}getDetectorOrientationData(e){const t=this.exptJSON.experiment[e].detector;return this.exptJSON.detector[t].hierarchy}getDetectorPanelDataByIdx(e,t){return this.experiments[e].detectorPanelData[t]}getDetectorPanelName(e,t){return this.getDetectorPanelDataByIdx(e,t).name}getDetectorPanelCorners(e,t){const n=this.getDetectorPanelDataByIdx(e,t);var i=n.origin.clone(),s=n.origin.clone().add(n.scaledFastAxis),a=n.origin.clone().add(n.scaledFastAxis).add(n.scaledSlowAxis),o=n.origin.clone().add(n.scaledSlowAxis);return[i,s,a,o]}getDetectorPanelNormal(e,t){const n=this.getDetectorPanelDataByIdx(e,t);return n.scaledFastAxis.clone().cross(n.scaledSlowAxis.clone()).normalize()}getDetectorPanelIdxByName(e,t){const n=this.experiments[e].detectorPanelData;for(let i=0;i<n.length;i++)if(n[i].name===t)return i;return null}getDetectorPanelDataByName(e,t){const n=this.experiments[e].detectorPanelData;for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}getDetectorPanelCentroidByName(e,t){const n=this.getDetectorPanelDataByName(e,t);return n!==null?n.centroid:null}getDetectorPanelSize(e,t){return this.experiments[e].detectorPanelData[t].pxs}getBeamDirection(e){const t=this.getBeamData(e);return new D(t.direction[0],t.direction[1],t.direction[2])}getNumDetectorPanels(e){return this.experiments[e].detectorPanelData.length}getScanData(e){if(!("scan"in this.exptJSON))return null;var t=this.exptJSON.experiment[e].scan;return this.exptJSON.scan[t]}getScan(e){const t=this.getScanData(e);if(!t||!("oscillation"in t.properties))return null;const n=new Ae(t.properties.oscillation[0]*Math.PI/180,t.properties.oscillation[1]*Math.PI/180),i=new Ae(t.image_range[0]-1,t.image_range[1]-1);return{oscillation:n,imageRange:i}}getAngleFromFrame(e,t){if(e===null)return null;const n=e.oscillation,i=e.imageRange;return n.x+(t-i.x)*n.y}addAnglesToReflections(e){for(var t=0;t<e.length;t++){var n=this.experiments[e[t].exptID].scan;if("xyzObs"in e[t]){var i;n==null?i=0:i=this.getAngleFromFrame(n,e[t].xyzObs[2]),e[t].angleObs=i}if("xyzCal"in e[t]){var s;n===null?s=0:s=this.getAngleFromFrame(n,e[t].xyzCal[2]),e[t].angleCal=s}}return e}getExptIDs(){let e=[];return this.exptJSON.experiment.forEach((t,n)=>{e.push(n)}),e}getImagesetIDs(){return Object.keys(this.experiments)}getExptLabels(){var e=window.navigator.oscpu?window.navigator.oscpu.indexOf("Windows")>-1:window.navigator.platform.indexOf("Win")>-1,t=[];for(let i in this.experiments){var n=this.experiments[i].imageFilename;e?t.push(n.split("\\").pop()):t.push(n.split("/").pop())}return t}getCrystalIDsMap(){const e={"-1":"-1"};return this.exptJSON.experiment.forEach((t,n)=>{"crystal"in t?e[n.toString()]=t.crystal.toString():e[n.toString()]="-1"}),e}}class gv{constructor(e,t,n){this.positions=[e],this.panelName=t,this.lineMesh=null,this.bboxMesh=null,this.lineMaterial=new El({color:n})}addBboxMesh(e){this.clearLineMesh(),this.bboxMesh=e,window.scene.add(e)}clearLineMesh(){this.lineMesh&&(window.scene.remove(this.lineMesh),this.lineMesh.geometry.dispose(),this.lineMesh.material.dispose(),this.lineMesh=null)}clearBboxMesh(){this.bboxMesh&&(window.scene.remove(this.bboxMesh),this.bboxMesh.geometry.dispose(),this.bboxMesh.material.dispose(),this.bboxMesh=null)}clear(){this.clearLineMesh(),this.clearBboxMesh()}updateUserOutline(e){this.positions.push(e),this.clearLineMesh();const t=new at().setFromPoints(this.positions);this.lineMesh=new tu(t,this.lineMaterial),window.scene.add(this.lineMesh)}}class ii{constructor(e,t,n,i,s=null){Zn(this,"addExperiment",async e=>{this.clearExperiment(),this.clearReflectionTable(),await this.expt.parseExperiment(e),console.assert(this.hasExperiment());for(var t=0;t<this.expt.getNumDetectorPanels();t++)for(var n=0;n<this.expt.numExperiments();n++)this.addDetectorPanel(t,n,imageData!==null);this.addBeam(),this.addSample(),this.setCameraToDefaultPositionWithExperiment(),this.isStandalone&&this.showCloseExptButton(),this.requestRender(),this.updateExperimentList(),this.updatePanelMeshes()});Zn(this,"addExperimentFromJSONString",async e=>{this.clearExperiment(),this.clearReflectionTable(),await this.expt.parseExperimentJSON(e),console.assert(this.hasExperiment()),this.allPanelMeshes={};for(var t=0;t<this.expt.getNumDetectorPanels(0);t++)for(var n=0;n<this.expt.numExperiments();n++)this.addDetectorPanel(t,n,!1);this.addBeam(),this.addSample(),this.setCameraToDefaultPositionWithExperiment(),this.isStandalone&&this.showCloseExptButton(),this.requestRender(),this.loading=!1,this.displayDefaultHeaderText(),this.updateExperimentList(),this.updatePanelMeshes()});Zn(this,"addReflectionTable",async e=>{this.clearReflectionTable(),await this.refl.parseReflectionTable(e),this.addReflections(),this.hasReflectionTable()&&this.isStandalone&&this.showCloseReflButton(),this.requestRender()});this.isStandalone=i,this.debugImageMode=!1,this.debugThresholdMode=!1,this.serverWS=null,this.colors=null,s!=null?this.colors=s:this.colors=ii.defaultColors(),this.expt=e,this.refl=t,this.calculatedIntegratedRefl=n,this.headerText=window.document.getElementById("headerText"),this.footerText=window.document.getElementById("footerText"),this.sidebar=window.document.getElementById("sidebar"),this.closeExptButton=document.getElementById("closeExpt"),this.closeReflButton=document.getElementById("closeRefl"),this.observedIndexedReflsCheckbox=document.getElementById("observedIndexedReflections"),this.observedUnindexedReflsCheckbox=document.getElementById("observedUnindexedReflections"),this.calculatedReflsCheckbox=document.getElementById("calculatedReflections"),this.integratedReflsCheckbox=document.getElementById("integratedReflections"),this.boundingBoxesCheckbox=document.getElementById("boundingBoxes"),this.reflectionSize=document.getElementById("reflectionSizeSlider"),this.userContrast=document.getElementById("userContrast"),this.contrastMethod="exponential",this.panelOutlineMeshes={},this.panelMeshes={},this.allPanelMeshes={},this.debugPanelMeshes={},this.debugPanelThresholdMeshes={},this.reflPointsObsUnindexed=[],this.reflPositionsUnindexed=[],this.reflPointsObsIndexed=[],this.reflPositionsIndexed=[],this.reflPointsIntegrated=[],this.reflPositionsIntegrated=[],this.reflPointsCal=[],this.reflPositionsCal=[],this.bboxMeshesUnindexed=[],this.bboxMeshesIndexed=[],this.beamMeshes=[],this.axesMeshes=[],this.sampleMesh=null,this.highlightReflectionMesh=null,this.createReflectionMesh=null,this.creatingReflection=!1,this.drawingReflection=!1,this.userReflection=null,this.visibleExptID=0,this.preventMouseClick=!1,this.cursorActive=!0,this.lastClickedPanelPosition=null,this.loading=!1,this.isPanning=!1,this.startMousePosition={x:0,y:0},this.panelFocusAxes=null,this.hightlightColor=new Ne(this.colors.highlight),this.panelColor=new Ne(this.colors.panel),this.reflSprite=new Gd().load("disc.png"),this.displayingTextFromHTMLEvent=!1,this.updateReflectionCheckboxEnabledStatus(),this.updateBoundingBoxes(!1),this.setDefaultReflectionsDisplay()}sendClickedPanelPosition(e,t,n){this.lastClickedPanelPosition={panelIdx:e,panelPos:t,name:n};const i=JSON.stringify({channel:"server",command:"clicked_on_panel",panel_idx:e,panel_pos:t,name:n,expt_id:this.visibleExptID});this.serverWS.send(i)}static defaultColors(){return{background:2236962,sample:16643811,reflectionObsUnindexed:[9894267,7715837,12548086,1305289,16756860,16765407,13696766,16777092,16777215,16749576,129478,11468140,16646146,10030923,7918006,16775447,16713609,13959167,6936655,5680727],reflectionObsIndexed:15158332,reflectionCal:16755370,reflectionIntegrated:16761436,panel:6127001,highlight:16777215,beam:16777215,bbox:16777215,axes:[16755370,11206570,11184895],highlightBbox:5879160,createNewReflectionBbox:16756860}}static cameraPositions(){return{default:{position:new D(0,0,1e3),target:new D(0,0,0)},defaultWithExperiment:{position:new D(1e3,0,0),target:new D(0,0,0)}}}static text(){return{default:"To view an experiment, drag .expt and .refl files into the browser",defaultWithExpt:null}}static sizes(){return{highlightBboxSize:2,bboxLineWidth:.3}}toggleSidebar(){this.sidebar.classList.toggle("hidden")}updatePanelMeshes(){if(this.panelMeshes={},!this.debugImageMode&&!this.debugThresholdMode){for(const e of Object.keys(this.allPanelMeshes)){const t=parseInt(e);for(const n of Object.keys(this.allPanelMeshes[e]))this.allPanelMeshes[e][n].visible=t===this.visibleExptID;t===this.visibleExptID&&(this.panelMeshes=this.allPanelMeshes[e])}for(const e of Object.keys(this.debugPanelMeshes))this.debugPanelMeshes[e].visible=!1;for(const e of Object.keys(this.debugPanelThresholdMeshes))this.debugPanelThresholdMeshes[e].visible=!1}else{for(const e of Object.keys(this.allPanelMeshes))for(const t of Object.keys(this.allPanelMeshes[e]))this.allPanelMeshes[e][t].visible=!1;if(this.debugImageMode){for(const e of Object.keys(this.debugPanelMeshes))this.debugPanelMeshes[e].visible=!0;for(const e of Object.keys(this.debugPanelThresholdMeshes))this.debugPanelThresholdMeshes[e].visible=!1;this.panelMeshes=this.debugPanelMeshes}else if(this.debugThresholdMode){for(const e of Object.keys(this.debugPanelThresholdMeshes))this.debugPanelThresholdMeshes[e].visible=!0;for(const e of Object.keys(this.debugPanelMeshes))this.debugPanelMeshes[e].visible=!1;this.panelMeshes=this.debugPanelThresholdMeshes}}this.requestRender()}updateObservedIndexedReflections(e=null){e!==null&&(this.observedIndexedReflsCheckbox.checked=e);for(var t=0;t<this.reflPointsObsIndexed.length;t++)this.reflPointsObsIndexed[t][0].visible=this.observedIndexedReflsCheckbox.checked&&this.visibleExptID===t;this.updateBoundingBoxes(),this.requestRender()}updateObservedUnindexedReflections(e=null){e!==null&&(this.observedUnindexedReflsCheckbox.checked=e);for(var t=0;t<this.reflPointsObsUnindexed.length;t++)this.reflPointsObsUnindexed[t][0].visible=this.observedUnindexedReflsCheckbox.checked&&this.visibleExptID===t;this.updateBoundingBoxes(),this.requestRender()}updateCalculatedReflections(e=null){e!==null&&(this.calculatedReflsCheckbox.checked=e);for(var t=0;t<this.reflPointsCal.length;t++)this.reflPointsCal[t][0].visible=this.calculatedReflsCheckbox.checked&&this.visibleExptID===t;this.updateBoundingBoxes(),this.requestRender()}updateIntegratedReflections(e=null){e!==null&&(this.integratedReflsCheckbox.checked=e);for(var t=0;t<this.reflPointsIntegrated.length;t++)this.reflPointsIntegrated[t][0].visible=this.integratedReflsCheckbox.checked&&this.visibleExptID===t;this.updateBoundingBoxes(),this.requestRender()}updateBoundingBoxes(e=null){if(e!==null&&(this.boundingBoxesCheckbox.checked=e),(this.observedIndexedReflsCheckbox.checked||this.calculatedReflsCheckbox.checked)&&this.boundingBoxesCheckbox.checked)for(var t=0;t<this.bboxMeshesIndexed.length;t++)for(var n in this.bboxMeshesIndexed[t])this.bboxMeshesIndexed[t][n].visible=this.visibleExptID===t;else for(var t=0;t<this.bboxMeshesIndexed.length;t++)for(var n in this.bboxMeshesIndexed[t])this.bboxMeshesIndexed[t][n].visible=!1;if(this.observedUnindexedReflsCheckbox.checked&&this.boundingBoxesCheckbox.checked)for(var t=0;t<this.bboxMeshesUnindexed.length;t++)for(var n in this.bboxMeshesUnindexed[t])this.bboxMeshesUnindexed[t][n].visible=this.visibleExptID===t;else for(var t=0;t<this.bboxMeshesUnindexed.length;t++)for(var n in this.bboxMeshesUnindexed[t])this.bboxMeshesUnindexed[t][n].visible=!1;this.requestRender()}updateAxes(e=null){if(e!==null){for(var t=0;t<this.axesMeshes.length;t++)this.axesMeshes[t].visible=e;this.requestRender()}}updateReflectionSize(){if(this.hasReflectionTable()){if(this.reflPointsObsUnindexed){const n=[];for(var e=0;e<this.reflPositionsUnindexed.length;e++){const i=new at;i.setAttribute("position",new ut(this.reflPositionsUnindexed[e],3));const s=new Mn({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionObsUnindexed[e%this.colors.reflectionObsUnindexed.length]}),a=new En(i,s);n.push([a])}this.clearReflPointsObsUnindexed();for(var t=0;t<n.length;t++)window.scene.add(n[t][0]);this.reflPointsObsUnindexed=n,this.updateObservedUnindexedReflections()}if(this.reflPointsObsIndexed){const n=[];for(var e=0;e<this.reflPositionsIndexed.length;e++){const s=new at;s.setAttribute("position",new ut(this.reflPositionsIndexed[e],3));const a=new Mn({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionObsIndexed}),o=new En(s,a);n.push([o])}this.clearReflPointsObsIndexed();for(var t=0;t<n.length;t++)window.scene.add(n[t][0]);this.reflPointsObsIndexed=n,this.updateObservedIndexedReflections()}if(this.reflPositionsCal){const n=[];for(let i=0;i<this.reflPositionsCal.length;i++){const s=new at;s.setAttribute("position",new ut(this.reflPositionsCal[i],3));const a=new Mn({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionCal}),o=new En(s,a);n.push([o])}this.clearReflPointsCal();for(let i=0;i<n.length;i++)window.scene.add(n[i][0]);if(this.reflPointsCal=n,this.updateCalculatedReflections(),this.reflPointsIntegrated){const i=[];for(let s=0;s<this.reflPositionsIntegrated.length;s++){const a=new at;a.setAttribute("position",new ut(this.reflPositionsIntegrated[s],3));const o=new Mn({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionIntegrated}),l=new En(a,o);i.push([l])}this.clearReflPointsIntegrated();for(let s=0;s<i.length;s++)window.scene.add(i[s][0]);this.reflPointsIntegrated=i,this.updateIntegratedReflections()}}this.requestRender()}}hasExperiment(){return this.expt.hasExptJSON()}clearExperiment(){for(const t in this.panelOutlineMeshes)window.scene.remove(this.panelOutlineMeshes[t]),this.panelOutlineMeshes[t].geometry.dispose(),this.panelOutlineMeshes[t].material.dispose();this.panelOutlineMeshes={},this.clearDebugPanelMeshes();for(const t in this.panelMeshes)window.scene.remove(this.panelMeshes[t]),this.panelMeshes[t].geometry.dispose(),this.panelMeshes[t].material.dispose();for(const t in this.allPanelMeshes)for(const n in this.allPanelMeshes[t])this.clearDetectorMesh(n,t);this.allPanelMeshes={},this.panelMeshes={};for(var e=0;e<this.beamMeshes.length;e++)window.scene.remove(this.beamMeshes[e]),this.beamMeshes[e].geometry.dispose(),this.beamMeshes[e].material.dispose();this.beamMeshes=[],this.sampleMesh&&(window.scene.remove(this.sampleMesh),this.sampleMesh.geometry.dispose(),this.sampleMesh.material.dispose(),this.sampleMesh=null),this.highlightReflectionMesh&&(window.scene.remove(this.highlightReflectionMesh),this.highlightReflectionMesh.geometry.dispose(),this.highlightReflectionMesh.material.dispose(),this.highlightReflectionMesh=null),this.expt.clearExperiment(),this.hideCloseExptButton(),this.clearReflectionTable(),this.clearExperimentList(),this.requestRender(),this.updateReflectionCheckboxEnabledStatus(),this.updateBoundingBoxes(!1),this.setDefaultReflectionsDisplay()}showCloseExptButton(){this.closeExptButton.style.display="inline",this.closeExptButton.innerHTML="<b>"+this.expt.filename+' <i class="fa fa-trash"></i>'}hideCloseExptButton(){this.closeExptButton.style.display="none"}hasReflectionTable(){return this.refl.hasReflTable()}clearReflPointsObsIndexed(){for(var e=0;e<this.reflPointsObsIndexed.length;e++)window.scene.remove(this.reflPointsObsIndexed[e][0]),this.reflPointsObsIndexed[e][0].geometry.dispose(),this.reflPointsObsIndexed[e][0].material.dispose();this.reflPointsObsIndexed=[]}clearReflPointsObsUnindexed(){for(var e=0;e<this.reflPointsObsUnindexed.length;e++)window.scene.remove(this.reflPointsObsUnindexed[e][0]),this.reflPointsObsUnindexed[e][0].geometry.dispose(),this.reflPointsObsUnindexed[e][0].material.dispose();this.reflPointsObsUnindexed=[]}clearReflPointsCal(){for(var e=0;e<this.reflPointsCal.length;e++)window.scene.remove(this.reflPointsCal[e][0]),this.reflPointsCal[e][0].geometry.dispose(),this.reflPointsCal[e][0].material.dispose();this.reflPointsCal=[]}clearReflPointsIntegrated(){for(var e=0;e<this.reflPointsIntegrated.length;e++)window.scene.remove(this.reflPointsIntegrated[e][0]),this.reflPointsIntegrated[e][0].geometry.dispose(),this.reflPointsIntegrated[e][0].material.dispose();this.reflPointsIntegrated=[]}clearBoundingBoxes(){for(var e=0;e<this.bboxMeshesUnindexed.length;e++)for(var t in this.bboxMeshesUnindexed[e])this.bboxMeshesUnindexed[e][t].length!==0&&(window.scene.remove(this.bboxMeshesUnindexed[e][t]),this.bboxMeshesUnindexed[e][t].geometry.dispose(),this.bboxMeshesUnindexed[e][t].material.dispose());this.bboxMeshesUnindexed=[];for(var e=0;e<this.bboxMeshesIndexed.length;e++)for(var t in this.bboxMeshesIndexed[e])this.bboxMeshesIndexed[e][t].length!==0&&(window.scene.remove(this.bboxMeshesIndexed[e][t]),this.bboxMeshesIndexed[e][t].geometry.dispose(),this.bboxMeshesIndexed[e][t].material.dispose());this.bboxMeshesIndexed=[]}clearReflectionTable(){this.clearReflPointsObsIndexed(),this.clearReflPointsObsUnindexed(),this.clearReflPointsCal(),this.clearReflPointsIntegrated(),this.clearBoundingBoxes(),this.refl.clearReflectionTable(),this.calculatedIntegratedRefl.clearReflectionTable(),this.updateReflectionCheckboxEnabledStatus(),this.setDefaultReflectionsDisplay(),this.hideCloseReflButton(),this.requestRender()}clearCalculatedIntegratedReflectionTable(){this.clearReflPointsIntegrated(),this.calculatedIntegratedRefl.clearReflectionTable(),this.requestRender()}clearDebugPanelMeshes(){for(const e in this.debugPanelMeshes)window.scene.remove(this.debugPanelMeshes[e]),this.debugPanelMeshes[e].geometry.dispose(),this.debugPanelMeshes[e].material.dispose();for(const e in this.debugPanelThresholdMeshes)window.scene.remove(this.debugPanelThresholdMeshes[e]),this.debugPanelThresholdMeshes[e].geometry.dispose(),this.debugPanelThresholdMeshes[e].material.dispose();this.debugPanelMeshes={},this.debugPanelThresholdMeshes={}}showCloseReflButton(){this.closeReflButton.style.display="inline",this.closeReflButton.innerHTML="<b>"+this.refl.filename+' <i class="fa fa-trash"></i>'}hideCloseReflButton(){this.closeReflButton.style.display="none"}getBboxTexture(e,t,n=2){const i=document.createElement("canvas"),s=20;i.width=t.x*s,i.height=t.y*s;const a=i.getContext("2d");a.scale(s,s),a.clearRect(0,0,i.width,i.height);const o=this.colors.bbox.toString(16).padStart(6,"0");a.strokeStyle="#"+o,a.lineWidth=n;for(const c of e){const h=c[1]-c[0],u=c[3]-c[2],f=t.y-c[0]-h,d=c[2];a.strokeRect(d,f,u,h)}const l=new Rt(i);return l.needsUpdate=!0,l.transparent=!0,l.minFilter=fn,l.magFilter=fn,l.generateMipmaps=!1,document.body.appendChild(i),l}getBboxMesh(e,t,n,i=2){const s=this.expt.experiments[t].detectorPanelData[n].pxs,a=new Fi(s[0],s[1]);var o;const l=this.getBboxTexture(e,s,i);o=new Di({map:l,transparent:!0});const c=new bt(a,o);var h=this.expt.getDetectorPanelName(t,n);c.name=h;var u=this.expt.getDetectorPanelCorners(t,n),f=[1,2,0,3],d=this.expt.getDetectorPanelNormal(t,n),g=u[0].clone();g.add(u[1].clone()),g.add(u[2].clone()),g.add(u[3].clone()),g.divideScalar(4).normalize(),g.dot(d)<0&&(f=[0,3,1,2]);const _=1.01;for(var m=0,p=0;p<12;p+=3)c.geometry.attributes.position.array[p]=u[f[m]].x*_,c.geometry.attributes.position.array[p+1]=u[f[m]].y*_,c.geometry.attributes.position.array[p+2]=u[f[m]].z*_,m++;return c.userData.corners=[new D(c.geometry.attributes.position.array[0],c.geometry.attributes.position.array[1],c.geometry.attributes.position.array[2]),new D(c.geometry.attributes.position.array[3],c.geometry.attributes.position.array[4],c.geometry.attributes.position.array[5]),new D(c.geometry.attributes.position.array[6],c.geometry.attributes.position.array[7],c.geometry.attributes.position.array[8]),new D(c.geometry.attributes.position.array[9],c.geometry.attributes.position.array[10],c.geometry.attributes.position.array[11])],c}addReflectionsFromJSONMsgpack(e){if(!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded"),this.clearReflectionTable();return}this.clearReflectionTable(),this.refl.parseReflectionTableFromJSONMsgpack(e);const t=this.refl.getPanelNumbers();t===null&&console.warn("Tried to add reflections but no data was parsed in refl file");const n=this.refl.getXYZObs(),i=this.refl.getXYZCal(),s=this.refl.getBoundingBoxes(),a=this.refl.getMillerIndices(),o=this.refl.getImagesetIDs(),l=this.refl.getFlags(),c={};var h=0;new El({color:this.colors.bbox});const u=[],f=[],d=[],g=[],_=[],m=[],p=[],S=[],b=[],y=[];for(let x=0;x<this.expt.numExperiments();x++)u.push([]),f.push([]),d.push([]),g.push([]),_.push([]),m.push([]),p.push([]),S.push([]),y.push({}),b.push({});const M=new Set(t);let A={};for(const x of M){A[x]=this.expt.getDetectorPanelDataByIdx(0,x);for(let v=0;v<this.expt.numExperiments();v++)y[v][x]=[],b[v][x]=[]}for(let x=0;x<t.length;x++){const v=t[x];let R;if(o!==null?R=o[x]:R=0,n!==null){const V=n[x],U=this.mapPointToGlobal(V,A[v].origin,A[v].scaledFastAxis,A[v].scaledSlowAxis,A[v].pxSize);a!==null&&this.refl.isValidMillerIndex(a[x])?(d[R].push(U.x),d[R].push(U.y),d[R].push(U.z),c[h]=a[x],y[R][v].push(s[x]),h++):(f[R].push(U.x),f[R].push(U.y),f[R].push(U.z),b[R][v].push(s[x]))}if(i!==null){const V=i[x],U=this.mapPointToGlobal(V,A[v].origin,A[v].scaledFastAxis,A[v].scaledSlowAxis,A[v].pxSize);m[R].push(U.x),m[R].push(U.y),m[R].push(U.z),this.refl.isSummationIntegrated(l[x])&&(S[R].push(U.x),S[R].push(U.y),S[R].push(U.z))}}if(n!==null){if(a!==null){for(var E=0;E<d.length;E++){const x=new at;x.setAttribute("position",new ut(d[E],3));const v=new Mn({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionObsIndexed}),R=new En(x,v);window.scene.add(R),g[E].push(R)}this.reflPointsObsIndexed=g,this.reflPositionsIndexed=d}for(var E=0;E<f.length;E++){const v=new at;v.setAttribute("position",new ut(f[E],3));const R=new Mn({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionObsUnindexed[E%this.colors.reflectionObsUnindexed.length]}),V=new En(v,R);window.scene.add(V),u[E].push(V)}this.reflPointsObsUnindexed=u,this.reflPositionsUnindexed=f}if(i!==null){for(var E=0;E<m.length;E++){const v=new at;v.setAttribute("position",new ut(m[E],3));const R=new Mn({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionCal}),V=new En(v,R);window.scene.add(V),_[E].push(V)}if(this.reflPointsCal=_,this.reflPositionsCal=m,S.length!==0){for(var E=0;E<S.length;E++){const v=new at;v.setAttribute("position",new ut(S[E],3));const R=new Mn({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionIntegrated}),V=new En(v,R);window.scene.add(V),p[E].push(V)}this.reflPointsIntegrated=p,this.reflPositionsIntegrated=S}}const C=ii.sizes().bboxLineWidth;for(let x=0;x<b.length;x++)for(const v in b[x]){if(b[x][v].length==0)continue;const R=this.getBboxMesh(b[x][v],x,parseInt(v),C);b[x][v]=R,window.scene.add(R)}for(let x=0;x<y.length;x++)for(const v in y[x]){if(y[x][v].length==0)continue;const R=this.getBboxMesh(y[x][v],x,parseInt(v),C);y[x][v]=R,window.scene.add(R)}this.bboxMeshesUnindexed=b,this.bboxMeshesIndexed=y,this.updateReflectionCheckboxEnabledStatus(),this.setDefaultReflectionsDisplay(),this.updateReflectionVisibility(),this.lastClickedPanelPosition!=null&&this.sendClickedPanelPosition(this.lastClickedPanelPosition.panelIdx,this.lastClickedPanelPosition.panelPos,this.lastClickedPanelPosition.name),this.refl.indexedMap=c,this.loading=!1,this.requestRender()}addCalculatedIntegratedReflectionsFromJSONMsgpack(e){if(!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded"),this.clearCalculatedIntegratedReflectionTable();return}this.clearCalculatedIntegratedReflectionTable(),this.calculatedIntegratedRefl.parseReflectionTableFromJSONMsgpack(e);const t=this.calculatedIntegratedRefl.getPanelNumbers();t===null&&console.warn("Tried to add reflections but no data was parsed in refl file");const n=[],i=[];for(var s=0;s<this.expt.numExperiments();s++)n.push([]),i.push([]);const a=this.calculatedIntegratedRefl.getXYZCal();this.calculatedIntegratedRefl.getMillerIndices();const o=this.calculatedIntegratedRefl.getExperimentIDs(),l=new Set(t);let c={};for(const u of l)c[u]=this.expt.getDetectorPanelDataByIdx(0,u);for(let u=0;u<t.length;u++){const f=t[u];let d;if(o!==null?d=o[u]:d=0,a!==null){const g=a[u],_=this.mapPointToGlobal(g,c[f].origin,c[f].scaledFastAxis,c[f].scaledSlowAxis,c[f].pxSize);i[d].push(_.x),i[d].push(_.y),i[d].push(_.z)}}if(i.length!==0){for(var h=0;h<i.length;h++){const u=new at;u.setAttribute("position",new ut(i[h],3));const f=new Mn({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionIntegrated}),d=new En(u,f);window.scene.add(d),n[h].push(d)}this.reflPointsIntegrated=n,this.reflPositionsIntegrated=i}this.reflPointsIntegrated.length!==0&&(this.integratedReflsCheckbox.disabled=!1),this.updateReflectionVisibility(),this.lastClickedPanelPosition!=null&&this.sendClickedPanelPosition(this.lastClickedPanelPosition.panelIdx,this.lastClickedPanelPosition.panelPos,this.lastClickedPanelPosition.name),this.loading=!1,this.requestRender()}addCalculatedIntegratedReflectionsFromData(e){if(!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded"),this.clearReflectionTable();return}this.clearReflPointsIntegrated();const t=[],n=[];for(var i=0;i<this.expt.numExperiments();i++)t.push([]),n.push([]);const s=Object.keys(e),o="xyzCal"in e[s[0]][0];for(var i=0;i<s.length;i++){const u=parseInt(s[i]),f=e[s[i]];if(f===void 0)continue;const d=this.expt.getDetectorPanelDataByIdx(0,u),g=d.scaledFastAxis,_=d.scaledSlowAxis,m=d.origin,p=[d.pxSize.x,d.pxSize.y];for(var l=0;l<f.length;l++){const S=f[l].exptID;if(o){const b=f[l].xyzCal,y=this.mapPointToGlobal(b,m,g,_,p);n[S].push(y.x),n[S].push(y.y),n[S].push(y.z)}}}if(o&&n.length!==0){for(var c=0;c<n.length;c++){const h=new at;h.setAttribute("position",new ut(n[c],3));const u=new Mn({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionIntegrated}),f=new En(h,u);window.scene.add(f),t[c].push(f)}this.reflPointsIntegrated=t,this.reflPositionsIntegrated=n}this.reflPointsIntegrated.length!==0&&(this.integratedReflsCheckbox.disabled=!1),this.updateReflectionVisibility(),this.lastClickedPanelPosition!=null&&this.sendClickedPanelPosition(this.lastClickedPanelPosition.panelIdx,this.lastClickedPanelPosition.panelPos,this.lastClickedPanelPosition.name),this.loading=!1,this.requestRender()}addReflections(){console.error("No longer implemented.")}highlightReflection(e,t=!0){const n=ii.sizes().highlightBboxSize,i=e.panelPos;if("focusOnPanel"in e&&(t=e.focusOnPanel),t){const f=e.name;var s=this.panelMeshes[e.panelIdx];window.viewer.zoomInOnPanel(s,-1,f,i)}this.userReflection&&(this.userReflection.clear(),this.userReflection=null),this.highlightReflectionMesh&&(window.scene.remove(this.highlightReflectionMesh),this.highlightReflectionMesh.geometry.dispose(),this.highlightReflectionMesh.material.dispose(),this.highlightReflectionMesh=null);const a=this.expt.getDetectorPanelDataByIdx(0,e.panelIdx),o=64;let l=[];for(let f=0;f<=o;f++){const d=f/o*Math.PI*2;let g=[i[1]+Math.cos(d)*n,i[0]+Math.sin(d)*n];g=this.mapPointToGlobal(g,a.origin,a.scaledFastAxis,a.scaledSlowAxis,a.pxSize),l.push(g)}l.push(l[0]);const c=new Yr;l=l.map(f=>new D(f.x,f.y,f.z)),c.setPoints(l);const h=new jr({lineWidth:3,color:this.colors.highlightBbox}),u=new bt(c,h);window.scene.add(u),this.highlightReflectionMesh=u,this.requestRender()}mapPointToGlobal(e,t,n,i,s={x:1,y:1}){const a=t.clone();return a.add(n.clone().normalize().multiplyScalar(e[0]*s.x)),a.add(i.clone().normalize().multiplyScalar(e[1]*s.y)),a}setDefaultReflectionsDisplay(){if(!this.hasReflectionTable()){this.observedIndexedReflsCheckbox.checked=!1,this.observedUnindexedReflsCheckbox.checked=!1,this.calculatedReflsCheckbox.checked=!1,this.integratedReflsCheckbox.checked=!1;return}this.reflPointsObsIndexed.length>0&&(this.observedIndexedReflsCheckbox.checked=!0),this.reflPointsObsUnindexed.length>0&&(this.observedUnindexedReflsCheckbox.checked=!0),this.updateBoundingBoxes()}updateReflectionVisibility(){this.updateObservedIndexedReflections(),this.updateObservedUnindexedReflections(),this.updateCalculatedReflections(),this.updateIntegratedReflections(),this.updateBoundingBoxes()}updateReflectionCheckboxEnabledStatus(){if(!this.hasReflectionTable()){this.observedIndexedReflsCheckbox.disabled=!0,this.observedUnindexedReflsCheckbox.disabled=!0,this.calculatedReflsCheckbox.disabled=!0,this.integratedReflsCheckbox.disabled=!0,this.boundingBoxesCheckbox.disabled=!0;return}this.observedUnindexedReflsCheckbox.disabled=!this.refl.containsXYZObs(),this.observedIndexedReflsCheckbox.disabled=!this.refl.containsMillerIndices(),this.calculatedReflsCheckbox.disabled=!this.refl.containsXYZCal(),this.integratedReflsCheckbox.disabled=this.integrationDataEmpty(),this.boundingBoxesCheckbox.disabled=!this.refl.containsBoundingBoxes()}integrationDataEmpty(){return this.reflPositionsIntegrated.every(function(e){return e.length===0})}updatePanelTextures(){if(Object.keys(this.allPanelMeshes).length!==0&&this.visibleExptID!==void 0){for(const e of Object.keys(this.allPanelMeshes[this.visibleExptID])){const t=this.getPanelTexture(e,this.visibleExptID);this.allPanelMeshes[this.visibleExptID][e].material.map=t,this.allPanelMeshes[this.visibleExptID][e].material.map.needsUpdate=!0}if(this.requestRender(),Object.keys(this.allPanelMeshes).length!==1){for(const e of Object.keys(this.allPanelMeshes))if(parseInt(e)!==this.visibleExptID)for(let t=0;t<this.allPanelMeshes[e].length;t++){const n=this.getPanelTexture(t,e);this.allPanelMeshes[e][t].material.map=n,this.allPanelMeshes[e][t].material.map.needsUpdate=!0}this.requestRender()}}}gammaContrast(e,t){const n=1/(t*2);return Math.pow(e,n)}logarithmicContrast(e,t){return Math.log(1+e*t)/Math.log(1+t)}exponentialContrast(e,t){return(Math.exp(e*t)-1)/(Math.exp(t)-1)}getContrast(e,t){switch(this.contrastMethod){case"exponential":return this.exponentialContrast(e,t);case"logarithmic":return this.logarithmicContrast(e,t);case"gamma":return this.gammaContrast(e,t)}}getPanelTexture(e,t,n=null){n==null&&(n=this.expt.experiments[t].imageData[e]);let i=this.expt.getDetectorPanelSize(t,e);n[0].length!==i[0]&&(i=(i[1],i[0]));var s=document.createElement("canvas");s.width=n[0].length,s.height=n.length;var a=s.getContext("2d");a.fillRect(0,0,s.width,s.height);const o=a.getImageData(0,0,s.width,s.height),l=o.data;for(var c=0,h=0;h<n.length;h++)for(var u=0;u<n[0].length;u++){let d=this.getContrast(n[h][u],this.userContrast.value)*255;d=Math.min(255,Math.max(0,d)),l[c]=d,l[c+1]=d,l[c+2]=d,l[c+3]=255,c+=4}a.putImageData(o,0,0);var f=new Rt(s);return f.needsUpdate=!0,f}clearDetectorMesh(e,t){t===this.visibleExptID&&e in this.panelMeshes&&(window.scene.remove(this.panelMeshes[e]),this.panelMeshes[e].geometry.dispose(),this.panelMeshes[e].material.dispose(),delete this.panelMeshes[e]),t in this.allPanelMeshes&&e in this.allPanelMeshes[t]&&(window.scene.remove(this.allPanelMeshes[t][e]),this.allPanelMeshes[t][e].geometry.dispose(),this.allPanelMeshes[t][e].material.dispose(),delete this.allPanelMeshes[t][e]),this.requestRender()}toggleDebugMode(e){e===!0?this.debugImageMode===!1&&this.debugThresholdMode==!1&&(this.debugImageMode=!0):(this.debugImageMode=!1,this.debugThresholdMode=!1),this.updatePanelMeshes()}setDebugToImage(){this.debugImageMode=!0,this.debugThresholdMode=!1,this.updatePanelMeshes()}setDebugToThreshold(){this.debugImageMode=!1,this.debugThresholdMode=!0,this.updatePanelMeshes()}addPanelImageData(e,t,n){this.expt.parseImageData(e,t,n),this.clearDetectorMesh(t,n),this.addDetectorMesh(t,n),this.updatePanelMeshes()}addExptImageData(e,t){this.expt.parseExptImageData(e,t);for(let n=0;n<e.length;n++)this.clearDetectorMesh(n,t),this.addDetectorMesh(n,t);this.updatePanelMeshes()}addDebugImageData(e,t){this.clearDebugPanelMeshes();for(let n=0;n<e.length;n++){const i=mi.decompressImageData(e[n]),s=mi.decompressImageData(t[n]);this.addDebugDetectorMesh(n,i,s)}this.updatePanelMeshes()}addDebugDetectorMesh(e,t,n){const i=this.expt.getDetectorPanelSize(0,e),s=new Fi(i[1],i[0]);var a,o,l=new Float32Array([0,0,1,0,1,1,0,1]);s.setAttribute("uvs",new xt(l,2));const c=this.getPanelTexture(e,0,t),h=this.getPanelTexture(e,0,n);a=new Di({map:c}),o=new Di({map:h});const u=new bt(s,a);var f=this.expt.getDetectorPanelName(0,e);u.name=f;const d=new bt(s,o);d.name=f;var g=this.expt.getDetectorPanelCorners(0,e),_=[1,2,0,3],m=this.expt.getDetectorPanelNormal(0,e),p=g[0].clone();p.add(g[1].clone()),p.add(g[2].clone()),p.add(g[3].clone()),p.divideScalar(4).normalize(),p.dot(m)<0&&(_=[0,3,1,2]);const S=1.01;for(var b=0,y=0;y<12;y+=3)u.geometry.attributes.position.array[y]=g[_[b]].x*S,u.geometry.attributes.position.array[y+1]=g[_[b]].y*S,u.geometry.attributes.position.array[y+2]=g[_[b]].z*S,b++;u.userData.corners=[new D(u.geometry.attributes.position.array[0],u.geometry.attributes.position.array[1],u.geometry.attributes.position.array[2]),new D(u.geometry.attributes.position.array[3],u.geometry.attributes.position.array[4],u.geometry.attributes.position.array[5]),new D(u.geometry.attributes.position.array[6],u.geometry.attributes.position.array[7],u.geometry.attributes.position.array[8]),new D(u.geometry.attributes.position.array[9],u.geometry.attributes.position.array[10],u.geometry.attributes.position.array[11])],b=0;for(var y=0;y<12;y+=3)d.geometry.attributes.position.array[y]=g[_[b]].x*S,d.geometry.attributes.position.array[y+1]=g[_[b]].y*S,d.geometry.attributes.position.array[y+2]=g[_[b]].z*S,b++;d.userData.corners=[new D(d.geometry.attributes.position.array[0],d.geometry.attributes.position.array[1],d.geometry.attributes.position.array[2]),new D(d.geometry.attributes.position.array[3],d.geometry.attributes.position.array[4],d.geometry.attributes.position.array[5]),new D(d.geometry.attributes.position.array[6],d.geometry.attributes.position.array[7],d.geometry.attributes.position.array[8]),new D(d.geometry.attributes.position.array[9],d.geometry.attributes.position.array[10],d.geometry.attributes.position.array[11])],window.scene.add(u),window.scene.add(d),this.debugPanelMeshes[e]=u,this.debugPanelThresholdMeshes[e]=d,this.requestRender()}addDetectorMesh(e,t){const n=this.expt.getDetectorPanelSize(t,e),i=new Fi(n[0],n[1]);var s;if(this.isStandalone)s=new Fd({color:this.colors.panel,opacity:.25,transparent:!0,depthWrite:!1});else{var a=new Float32Array([0,0,1,0,1,1,0,1]);i.setAttribute("uvs",new xt(a,2));const m=this.getPanelTexture(e,t);s=new Di({map:m})}const o=new bt(i,s);var l=this.expt.getDetectorPanelName(t,e);o.name=l;var c=this.expt.getDetectorPanelCorners(t,e),h=[1,2,0,3],u=this.expt.getDetectorPanelNormal(t,e),f=c[0].clone();f.add(c[1].clone()),f.add(c[2].clone()),f.add(c[3].clone()),f.divideScalar(4).normalize(),f.dot(u)<0&&(h=[0,3,1,2]);const d=1.01;for(var g=0,_=0;_<12;_+=3)o.geometry.attributes.position.array[_]=c[h[g]].x*d,o.geometry.attributes.position.array[_+1]=c[h[g]].y*d,o.geometry.attributes.position.array[_+2]=c[h[g]].z*d,g++;o.userData.corners=[new D(o.geometry.attributes.position.array[0],o.geometry.attributes.position.array[1],o.geometry.attributes.position.array[2]),new D(o.geometry.attributes.position.array[3],o.geometry.attributes.position.array[4],o.geometry.attributes.position.array[5]),new D(o.geometry.attributes.position.array[6],o.geometry.attributes.position.array[7],o.geometry.attributes.position.array[8]),new D(o.geometry.attributes.position.array[9],o.geometry.attributes.position.array[10],o.geometry.attributes.position.array[11])],window.scene.add(o),t in this.allPanelMeshes||(this.allPanelMeshes[t]={}),this.allPanelMeshes[t][e]=o,this.requestRender()}addDetectorPanel(e,t,n=!0){var i=this.expt.getDetectorPanelName(t,e);if(i in this.panelOutlineMeshes)return;var s=this.expt.getDetectorPanelCorners(t,e);s.push(s[0]),s=s.map(u=>new D(u.x,u.y,u.z));var a=this.expt.getDetectorPanelNormal(t,e),o=s[0].clone();o.add(s[1].clone()),o.add(s[2].clone()),o.add(s[3].clone()),o.divideScalar(4).normalize(),o.dot(a)<0;const l=new Yr;l.setPoints(s);const c=new jr({lineWidth:8,color:this.colors.panel,transparent:!0,opacity:.3}),h=new bt(l,c);this.panelOutlineMeshes[i]=h,window.scene.add(h),n&&this.addDetectorMesh(e,t)}addBeam(){var e=800,t=this.expt.getBeamDirection(0),n=[];n.push(new D(t.x*-800,t.y*-800,t.z*-800)),n.push(new D(t.x*-800*.5,t.y*-800*.5,t.z*-800*.5)),n.push(new D(0,0,0));const i=new Yr;i.setPoints(n);const s=new jr({lineWidth:5,color:this.colors.beam,transparent:!0,opacity:0,depthWrite:!1}),a=new bt(i,s);a.raycast=Eh,this.beamMeshes.push(a),window.scene.add(a);var o=[];o.push(new D(0,0,0)),o.push(new D(t.x*e*.5,t.y*e*.5,t.z*e*.5)),o.push(new D(t.x*e,t.y*e,t.z*e));const l=new Yr;l.setPoints(o);const c=new jr({lineWidth:5,color:this.colors.beam,transparent:!0,opacity:.25,depthWrite:!1}),h=new bt(l,c);h.raycast=Eh,this.beamMeshes.push(h),window.scene.add(h)}addSample(){const e=new wl(5),t=new Di({color:this.colors.sample,transparent:!0,depthWrite:!1}),n=new bt(e,t);n.name="sample",this.sampleMesh=n,window.scene.add(n)}addAxes(){function e(a,o,l){const c=new Yr;c.setPoints(o);const h=new jr({lineWidth:5,color:l,transparent:!0,opacity:.5,depthWrite:!1}),u=new bt(c,h);a.axesMeshes.push(u),window.scene.add(u)}const t=200;this.axesMeshes=[];const n=[new D(0,0,0),new D(t,0,0)],i=[new D(0,0,0),new D(0,t,0)],s=[new D(0,0,0),new D(0,0,t)];e(this,n,this.colors.axes[0]),e(this,i,this.colors.axes[1]),e(this,s,this.colors.axes[2])}setCameraSmooth(e,t){Jr.to(window.camera.position,{duration:1,x:e.x,y:e.y,z:e.z,onUpdate:()=>{window.camera.lookAt(window.controls.target),window.viewer.requestRender()}});const n=window.controls.target.clone();Jr.to(n,{duration:1,x:t.x,y:t.y,z:t.z,onUpdate:()=>{window.controls.target.set(n.x,n.y,n.z),window.camera.lookAt(window.controls.target),window.viewer.requestRender()},onComplete:()=>{window.controls.update()}})}setCameraToDefaultPosition(){const{position:e,target:t}=ii.cameraPositions().default;this.setCameraSmooth(e,t)}setCameraToDefaultPositionWithExperiment(){const{position:e,target:t}=ii.cameraPositions().defaultWithExperiment;this.setCameraSmooth(e,t),this.panelFocusAxes=null}displayHeaderText(e){this.showHeaderText(),this.headerText.innerHTML=e}appendHeaderText(e){this.headerText.innerHTML+=e}hideHeaderText(){this.headerText.style.display="none"}showHeaderText(){this.headerText.style.display="block"}displayFooterText(e){this.showFooterText(),this.footerText.textContent=e}hideFooterText(){this.footerText.style.display="none"}showFooterText(){this.footerText.style.display="block"}displayDefaultHeaderText(){this.hasExperiment()||!this.isStandalone?this.hideHeaderText():this.displayHeaderText(ii.text().default)}displayImageFilenames(){this.displayHeaderText(this.expt.getImageFilenames(0)),this.displayingTextFromHTMLEvent=!0}displayNumberOfReflections(){this.displayHeaderText(this.refl.numReflections+" reflections"),this.displayingTextFromHTMLEvent=!0}stopDisplayingText(){this.displayingTextFromHTMLEvent=!1}highlightObject(e){e.material.color=new Ne(this.colors.highlight),e.material.opacity=.8}beamHidden(){return this.beamMeshes.length===0?!0:this.beamMeshes[0].material.opacity<.01}sampleHidden(){return this.sampleMesh===null?!0:this.sampleMesh.material.opacity<.01}onLeftClick(){if(this.isStandalone||this.preventMouseClick)return;if(this.creatingReflection&&!this.drawingReflection){window.viewer.disableReflectionCreation();return}const e=window.rayCaster.intersectObjects(Object.values(this.panelMeshes));if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),e.length>0){const t=e[0].object.name,n=this.expt.getDetectorPanelIdxByName(0,t),i=this.getPanelPosition(e[0].point,t);this.sendClickedPanelPosition(n,i,t),this.highlightReflection({panelIdx:n,panelPos:i},!1)}}disableMouseClick(){this.preventMouseClick=!0}enableMouseClick(){this.preventMouseClick=!1}showLoadingImagesMsg(){this.displayHeaderText("Loading images..."),this.loading=!0}showLoadingReflectionMsg(){this.displayHeaderText("Loading reflection..."),this.loading=!0}updateGUIInfo(){function e(s){const a=window.rayCaster.intersectObjects(Object.values(s.panelMeshes));if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),a.length>0){const o=a[0].object.name;s.displayHeaderText(o+" ["+s.getPanelPositionAsString(a[0].point,o)+"]"),s.highlightObject(s.panelOutlineMeshes[o])}}function t(s){if(s.observedIndexedReflsCheckbox.checked)for(var a=0;a<s.reflPointsObsIndexed.length;a++){const l=window.rayCaster.intersectObjects(s.reflPointsObsIndexed[a]);if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),l.length>0)for(var o=0;o<l.length;o++){const c=s.refl.getMillerIndexById(l[o].index);s.appendHeaderText(" ("+c[0]+", "+c[1]+", "+c[2]+")")}}}function n(s){if(s.beamHidden())return;const a=window.rayCaster.intersectObjects(s.beamMeshes);if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),a.length>0){const o="<b>beam: </b>"+s.expt.getBeamSummary(0);s.displayHeaderText(o)}}function i(s){if(s.sampleHidden()||s.expt.getCrystalSummary(0)==null)return;const a=window.rayCaster.intersectObjects([s.sampleMesh]);if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),a.length>0){const o="<b>crystal: </b>"+s.expt.getCrystalSummary(0);s.displayHeaderText(o)}}this.displayingTextFromHTMLEvent||this.cursorActive&&(this.loading||(this.displayDefaultHeaderText(),e(this),t(this),n(this),i(this)))}getPanelPosition(e,t){const n=this.expt.getDetectorPanelDataByName(0,t),i=n.origin.clone().sub(e),s=n.fastAxis,a=n.slowAxis,o=(i.x*s.x+i.y*s.y+i.z*s.z)/n.pxSize.x,l=(i.x*a.x+i.y*a.y+i.z*a.z)/n.pxSize.y;return[Math.floor(-l),Math.floor(-o)]}getPanelPositionAsString(e,t){const[n,i]=this.getPanelPosition(e,t);return n+", "+i}getPanelCentroid(e){return this.expt.getDetectorPanelCentroidByName(0,e)}resetPanelColors(){for(var e in this.panelOutlineMeshes)this.panelOutlineMeshes[e].material.color=this.panelColor,this.panelOutlineMeshes[e].material.opacity=.3}updateOriginObjectsOpacity(){if(!this.hasExperiment())return;const e=55e3,t=1e6,n=window.camera.position;var s=(Math.pow(n.x,2)+Math.pow(n.y,2)+Math.pow(n.z,2)-e)/(t-e);s=Math.min(1,Math.max(s,0)),this.beamMeshes[0].material.opacity=s*.25,this.beamMeshes[1].material.opacity=s,this.sampleMesh.material.opacity=s;for(var a=0;a<this.axesMeshes.length;a++)this.axesMeshes[a].material.opacity=s*.5}getClickedPanelPos(){window.rayCaster.setFromCamera(window.mousePosition,window.camera);const e=rayCaster.intersectObjects(Object.values(this.panelMeshes));if(e.length>0)return e[0].point}getClickedPanelCentroid(){window.rayCaster.setFromCamera(window.mousePosition,window.camera);const e=rayCaster.intersectObjects(Object.values(this.panelMeshes));if(e.length>0)return window.viewer.getPanelCentroid(e[0].object.name)}getClickedPanelMesh(){window.rayCaster.setFromCamera(window.mousePosition,window.camera);const e=rayCaster.intersectObjects(Object.values(this.panelMeshes));if(e.length>0)return e[0].object}rotateToPos(e){Jr.to(window.camera.position,{duration:1,x:-e.x,y:-e.y,z:-e.z,onUpdate:function(){window.camera.lookAt(e),window.viewer.requestRender()}})}zoomInOnPanel(e,t=-1,n=null,i=null){const s=new Or().setFromObject(e),a=s.getSize(new D),o=s.getCenter(new D),l=e.userData.corners;if(!l||l.length<4){console.error("Panel corners are not properly defined.");return}const c=new D().subVectors(l[1],l[0]),h=new D().subVectors(l[3],l[0]),u=new D().subVectors(l[2],l[0]),f=new D().crossVectors(c,h).normalize(),d=u.clone().normalize(),g=c.clone().normalize(),_=f;window.viewer.panelFocusAxes={panelX:d,panelY:g,panelNormal:_,center:o};const p=Math.max(a.x,a.y,a.z)/(2*Math.atan(Math.PI*window.camera.fov/360)),S=p/window.camera.aspect,b=t*Math.max(p,S),y=o.clone().add(f.clone().multiplyScalar(b));Jr.to(window.camera.position,{duration:1,x:y.x,y:y.y,z:y.z,onUpdate:()=>{window.camera.lookAt(o),window.viewer.requestRender()},onComplete:()=>{n&&i&&window.viewer.displayHeaderText(`${n} [${i[0]}, ${i[1]}]`)}}),window.controls.target.copy(o),window.controls.update()}toggleExperimentList(){document.getElementById("experimentDropdown").classList.toggle("show");var e=document.getElementById("dropdownIcon");e.classList.toggle("fa-chevron-down"),e.classList.toggle("fa-chevron-right")}selectExpt(e){if(this.visibleExptID!==e){this.visibleExptID=e;for(var t=0;t<this.expt.numExperiments();t++)if(t!==e){var n=document.getElementById("exptID-dropdown-icon-"+t.toString());n.classList.contains("fa-check")&&n.classList.toggle("fa-check")}dropdownIcon.classList.toggle("fa-check"),this.updatePanelMeshes(),this.updateObservedIndexedReflections(),this.updateObservedUnindexedReflections(),this.updateCalculatedReflections(),this.updateIntegratedReflections(),this.updateBoundingBoxes()}}toggleExptVisibility(e){var t=parseInt(e.split("-").pop()),n=document.getElementById("exptID-dropdown-icon-"+t.toString());n.classList.contains("fa-check")?this.visibleExptID=-1:(this.visibleExptID=t,this.serverWS.send(JSON.stringify({channel:"server",command:"update_experiment_description",expt_id:t,in_debug_mode:this.debugImageMode||this.debugThresholdMode})));for(var i=0;i<this.expt.numExperiments();i++)if(i!==t){var s=document.getElementById("exptID-dropdown-icon-"+i.toString());s.classList.contains("fa-check")&&s.classList.toggle("fa-check")}n.classList.toggle("fa-check"),this.updatePanelMeshes(),this.updateObservedIndexedReflections(),this.updateObservedUnindexedReflections(),this.updateCalculatedReflections(),this.updateIntegratedReflections(),this.updateBoundingBoxes()}clearExperimentList(){var e=document.getElementById("experimentDropdown");e!==null&&(e.innerHTML="")}updateExperimentList(){var e=22,t=this.expt.getExptIDs(),n=this.expt.getExptLabels(),i=document.getElementById("experimentDropdown");i.innerHTML="";for(var s=0;s<t.length;s++){var a=document.createElement("label");a.classList.add("experiment-label");var o="#"+this.colors.reflectionObsUnindexed[t[s]%this.colors.reflectionObsUnindexed.length].toString(16).padStart(6,"0");a.style.color=o;var l=document.createElement("i");l.classList.add("fa","fa-check"),l.style.float="right",l.id="exptID-dropdown-icon-"+t[s],s!==0&&l.classList.toggle("fa-check");var c=n[s];c.length>e&&(c=c.slice(0,19)+"..."),a.textContent=c,a.id="exptID-"+t[s],a.appendChild(l),a.addEventListener("click",u=>{this.toggleExptVisibility(u.target.id)}),i.appendChild(a),i.appendChild(document.createElement("br"))}}enableReflectionCreation(){if(this.preventMouseClick)return;const e=window.rayCaster.intersectObjects(Object.values(this.panelMeshes));if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),e.length===0)return;this.userReflection&&(this.userReflection.clearLineMesh(),this.userReflection.clearBboxMesh(),this.userReflection=null),window.controls.enabled=!1,this.creatingReflection=!0,this.drawingReflection=!0;const t=e[0].object.name;this.expt.getDetectorPanelIdxByName(0,t),this.userReflection=new gv(e[0].point,t,this.colors.createNewReflectionBbox)}onEndDrawingReflection(){window.viewer.drawingReflection=!1,this.highlightReflectionMesh&&(window.scene.remove(this.highlightReflectionMesh),this.highlightReflectionMesh.geometry.dispose(),this.highlightReflectionMesh.material.dispose(),this.highlightReflectionMesh=null);for(var e=[],t=0;t<this.userReflection.positions.length;t++)e.push(this.getPanelPosition(this.userReflection.positions[t],this.userReflection.panelName));e.map(i=>i[0]),e.map(i=>i[1]);const n=this.expt.getDetectorPanelIdxByName(0,this.userReflection.panelName);this.expt.getDetectorPanelDataByName(0,this.userReflection.panelName),this.serverWS.send(JSON.stringify({channel:"server",command:"new_reflection_xy",panel_idx:n,expt_id:this.visibleExptID,panel_name:this.userReflection.panelName}))}disableReflectionCreation(){window.controls.enabled=!0,this.creatingReflection=!1,this.userReflection&&(this.userReflection.clear(),this.userReflection=null),this.serverWS.send(JSON.stringify({channel:"server",command:"cancel_new_reflection"}))}updateNewReflection(){const e=window.rayCaster.intersectObjects(Object.values(this.panelMeshes));window.rayCaster.setFromCamera(window.mousePosition,window.camera),e.length!==0&&this.userReflection&&this.userReflection.updateUserOutline(e[0].point)}animate(){this.renderRequested&&(this.drawingReflection&&this.updateNewReflection(),window.viewer.resetPanelColors(),window.viewer.updateOriginObjectsOpacity(),window.viewer.updateGUIInfo(),window.renderer.render(window.scene,window.camera),this.renderRequested=!1,window.viewer.enableMouseClick())}requestRender(){typeof window<"u"&&!this.renderRequested&&(this.renderRequested=!0,window.requestAnimationFrame(this.animate.bind(this)))}}function xv(){typeof window.viewer>"u"||(window.renderer=new P0,window.renderer.setClearColor(window.viewer.colors.background),window.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(window.renderer.domElement),window.scene=new Ld,window.scene.fog=new Sl(window.viewer.colors.background,500,3e3),window.camera=new un(45,window.innerWidth/window.innerHeight,.1,1e4),window.renderer.render(window.scene,window.camera),window.rayCaster=new qd,window.controls=new I0(window.camera,window.renderer.domElement),window.controls.mouseButtons.MIDDLE=Ni.NONE,window.controls.maxDistance=3e3,window.controls.enablePan=!1,window.controls.update(),window.controls.addEventListener("change",function(){window.viewer.requestRender()}),window.mousePosition=new Ae,window.addEventListener("mousemove",function(r){if(window.mousePosition.x=r.clientX/window.innerWidth*2-1,window.mousePosition.y=-(r.clientY/window.innerHeight)*2+1,window.viewer.requestRender(),window.viewer.isPanning&&this.window.viewer.panelFocusAxes!==null){const{panelX:e,panelY:t,panelNormal:n,center:i}=window.viewer.panelFocusAxes,s=r.clientX-window.viewer.startMousePosition.x,a=r.clientY-window.viewer.startMousePosition.y,o=.5,l=e.clone().multiplyScalar(s*o),c=t.clone().multiplyScalar(-a*o);window.camera.position.add(l).add(c),window.controls.target.add(l).add(c),window.viewer.startMousePosition.x=r.clientX,window.viewer.startMousePosition.y=r.clientY}}),window.renderer.domElement.addEventListener("mouseup",r=>{r.button===1&&(window.viewer.isPanning=!1)}),window.renderer.domElement.addEventListener("mouseleave",()=>{window.viewer.isPanning=!1}),window.addEventListener("resize",function(){window.camera.aspect=window.innerWidth/window.innerHeight,window.camera.updateProjectionMatrix(),window.renderer.setSize(window.innerWidth,window.innerHeight),window.viewer.requestRender()}),window.addEventListener("dragstart",r=>{dragged=r.target}),window.addEventListener("dragover",r=>{r.preventDefault()}),window.addEventListener("drop",function(r){r.preventDefault(),r.stopPropagation();const e=r.dataTransfer.files[0],t=e.name.split(".").pop();t=="refl"&&window.viewer.isStandalone?window.viewer.addReflectionTable(e):t=="expt"&&window.viewer.isStandalone&&window.viewer.addExperiment(e)}),window.addEventListener("dblclick",function(r){var e=window.viewer.getClickedPanelMesh();e&&window.viewer.zoomInOnPanel(e)}),window.addEventListener("click",function(r){r.button===0&&(r.altKey&&window.viewer.drawingReflection?window.viewer.onEndDrawingReflection():window.viewer.onLeftClick())}),window.addEventListener("mousedown",function(r){r.button===0&&r.altKey&&window.viewer.enableReflectionCreation(),r.button==2&&window.viewer.setCameraToDefaultPositionWithExperiment(),r.button===1&&(window.viewer.isPanning=!0,window.viewer.startMousePosition.x=r.clientX,window.viewer.startMousePosition.y=r.clientY)}),window.addEventListener("mouseout",function(r){this.window.viewer.cursorActive=!1}),window.addEventListener("mouseover",function(r){this.window.viewer.cursorActive=!0}),window.addEventListener("keydown",function(r){r.key==="s"&&window.viewer.toggleSidebar()}),window.viewer.addAxes(),window.viewer.updateAxes(!1),window.viewer.setCameraToDefaultPosition(),window.viewer.requestRender())}var co={exports:{}},Ch;function vv(){return Ch||(Ch=1,function(r){(function(){function e(a,o){if(o&&o.multiple&&!Array.isArray(a))throw new Error("Invalid argument type: Expected an Array to serialize multiple values.");const l=4294967296;let c,h,u=new Uint8Array(128),f=0;if(o&&o.multiple)for(let x=0;x<a.length;x++)d(a[x]);else d(a);return u.subarray(0,f);function d(x,v){switch(typeof x){case"undefined":g();break;case"boolean":_(x);break;case"number":m(x);break;case"string":p(x);break;case"object":x===null?g():x instanceof Date?M(x):Array.isArray(x)?S(x):x instanceof Uint8Array||x instanceof Uint8ClampedArray?b(x):x instanceof Int8Array||x instanceof Int16Array||x instanceof Uint16Array||x instanceof Int32Array||x instanceof Uint32Array||x instanceof Float32Array||x instanceof Float64Array?S(x):y(x);break;default:if(!v&&o&&o.invalidTypeReplacement)typeof o.invalidTypeReplacement=="function"?d(o.invalidTypeReplacement(x),!0):d(o.invalidTypeReplacement,!0);else throw new Error("Invalid argument type: The type '"+typeof x+"' cannot be serialized.")}}function g(x){A(192)}function _(x){A(x?195:194)}function m(x){if(isFinite(x)&&Math.floor(x)===x)if(x>=0&&x<=127)A(x);else if(x<0&&x>=-32)A(x);else if(x>0&&x<=255)E([204,x]);else if(x>=-128&&x<=127)E([208,x]);else if(x>0&&x<=65535)E([205,x>>>8,x]);else if(x>=-32768&&x<=32767)E([209,x>>>8,x]);else if(x>0&&x<=4294967295)E([206,x>>>24,x>>>16,x>>>8,x]);else if(x>=-2147483648&&x<=2147483647)E([210,x>>>24,x>>>16,x>>>8,x]);else if(x>0&&x<=18446744073709552e3){let v=x/l,R=x%l;E([211,v>>>24,v>>>16,v>>>8,v,R>>>24,R>>>16,R>>>8,R])}else x>=-9223372036854776e3&&x<=9223372036854776e3?(A(211),C(x)):x<0?E([211,128,0,0,0,0,0,0,0]):E([207,255,255,255,255,255,255,255,255]);else h||(c=new ArrayBuffer(8),h=new DataView(c)),h.setFloat64(0,x),A(203),E(new Uint8Array(c))}function p(x){let v=n(x),R=v.length;R<=31?A(160+R):R<=255?E([217,R]):R<=65535?E([218,R>>>8,R]):E([219,R>>>24,R>>>16,R>>>8,R]),E(v)}function S(x){let v=x.length;v<=15?A(144+v):v<=65535?E([220,v>>>8,v]):E([221,v>>>24,v>>>16,v>>>8,v]);for(let R=0;R<v;R++)d(x[R])}function b(x){let v=x.length;v<=15?E([196,v]):v<=65535?E([197,v>>>8,v]):E([198,v>>>24,v>>>16,v>>>8,v]),E(x)}function y(x){let v=0;for(let R in x)x[R]!==void 0&&v++;v<=15?A(128+v):v<=65535?E([222,v>>>8,v]):E([223,v>>>24,v>>>16,v>>>8,v]);for(let R in x){let V=x[R];V!==void 0&&(d(R),d(V))}}function M(x){let v=x.getTime()/1e3;if(x.getMilliseconds()===0&&v>=0&&v<4294967296)E([214,255,v>>>24,v>>>16,v>>>8,v]);else if(v>=0&&v<17179869184){let R=x.getMilliseconds()*1e6;E([215,255,R>>>22,R>>>14,R>>>6,R<<2>>>0|v/l,v>>>24,v>>>16,v>>>8,v])}else{let R=x.getMilliseconds()*1e6;E([199,12,255,R>>>24,R>>>16,R>>>8,R]),C(v)}}function A(x){if(u.length<f+1){let v=u.length*2;for(;v<f+1;)v*=2;let R=new Uint8Array(v);R.set(u),u=R}u[f]=x,f++}function E(x){if(u.length<f+x.length){let v=u.length*2;for(;v<f+x.length;)v*=2;let R=new Uint8Array(v);R.set(u),u=R}u.set(x,f),f+=x.length}function C(x){let v,R;x>=0?(v=x/l,R=x%l):(x++,v=Math.abs(x)/l,R=Math.abs(x)%l,v=~v,R=~R),E([v>>>24,v>>>16,v>>>8,v,R>>>24,R>>>16,R>>>8,R])}}function t(a,o){let c=0;if(a instanceof ArrayBuffer&&(a=new Uint8Array(a)),typeof a!="object"||typeof a.length>"u")throw new Error("Invalid argument type: Expected a byte array (Array or Uint8Array) to deserialize.");if(!a.length)throw new Error("Invalid argument: The byte array to deserialize is empty.");a instanceof Uint8Array||(a=new Uint8Array(a));let h;if(o&&o.multiple)for(h=[];c<a.length;)h.push(u());else h=u();return h;function u(){const M=a[c++];if(M>=0&&M<=127)return M;if(M>=128&&M<=143)return m(M-128);if(M>=144&&M<=159)return p(M-144);if(M>=160&&M<=191)return S(M-160);if(M===192)return null;if(M===193)throw new Error("Invalid byte code 0xc1 found.");if(M===194)return!1;if(M===195)return!0;if(M===196)return _(-1,1);if(M===197)return _(-1,2);if(M===198)return _(-1,4);if(M===199)return b(-1,1);if(M===200)return b(-1,2);if(M===201)return b(-1,4);if(M===202)return g(4);if(M===203)return g(8);if(M===204)return d(1);if(M===205)return d(2);if(M===206)return d(4);if(M===207)return d(8);if(M===208)return f(1);if(M===209)return f(2);if(M===210)return f(4);if(M===211)return f(8);if(M===212)return b(1);if(M===213)return b(2);if(M===214)return b(4);if(M===215)return b(8);if(M===216)return b(16);if(M===217)return S(-1,1);if(M===218)return S(-1,2);if(M===219)return S(-1,4);if(M===220)return p(-1,2);if(M===221)return p(-1,4);if(M===222)return m(-1,2);if(M===223)return m(-1,4);if(M>=224&&M<=255)return M-256;throw console.debug("msgpack array:",a),new Error("Invalid byte value '"+M+"' at index "+(c-1)+" in the MessagePack binary data (length "+a.length+"): Expecting a range of 0 to 255. This is not a byte array.")}function f(M){let A=0,E=!0;for(;M-- >0;)if(E){let C=a[c++];A+=C&127,C&128&&(A-=128),E=!1}else A*=256,A+=a[c++];return A}function d(M){let A=0;for(;M-- >0;)A*=256,A+=a[c++];return A}function g(M){let A=new DataView(a.buffer,c+a.byteOffset,M);if(c+=M,M===4)return A.getFloat32(0,!1);if(M===8)return A.getFloat64(0,!1)}function _(M,A){M<0&&(M=d(A));let E=a.subarray(c,c+M);return c+=M,E}function m(M,A){M<0&&(M=d(A));let E={};for(;M-- >0;){let C=u();E[C]=u()}return E}function p(M,A){M<0&&(M=d(A));let E=[];for(;M-- >0;)E.push(u());return E}function S(M,A){M<0&&(M=d(A));let E=c;return c+=M,i(a,E,M)}function b(M,A){M<0&&(M=d(A));let E=d(1),C=_(M);switch(E){case 255:return y(C)}return{type:E,data:C}}function y(M){if(M.length===4){let A=(M[0]<<24>>>0)+(M[1]<<16>>>0)+(M[2]<<8>>>0)+M[3];return new Date(A*1e3)}if(M.length===8){let A=(M[0]<<22>>>0)+(M[1]<<14>>>0)+(M[2]<<6>>>0)+(M[3]>>>2),E=(M[3]&3)*4294967296+(M[4]<<24>>>0)+(M[5]<<16>>>0)+(M[6]<<8>>>0)+M[7];return new Date(E*1e3+A/1e6)}if(M.length===12){let A=(M[0]<<24>>>0)+(M[1]<<16>>>0)+(M[2]<<8>>>0)+M[3];c-=8;let E=f(8);return new Date(E*1e3+A/1e6)}throw new Error("Invalid data length for a date value.")}}function n(a){let o=!0,l=a.length;for(let u=0;u<l;u++)if(a.charCodeAt(u)>127){o=!1;break}let c=0,h=new Uint8Array(a.length*(o?1:4));for(let u=0;u!==l;u++){let f=a.charCodeAt(u);if(f<128){h[c++]=f;continue}if(f<2048)h[c++]=f>>6|192;else{if(f>55295&&f<56320){if(++u>=l)throw new Error("UTF-8 encode: incomplete surrogate pair");let d=a.charCodeAt(u);if(d<56320||d>57343)throw new Error("UTF-8 encode: second surrogate character 0x"+d.toString(16)+" at index "+u+" out of range");f=65536+((f&1023)<<10)+(d&1023),h[c++]=f>>18|240,h[c++]=f>>12&63|128}else h[c++]=f>>12|224;h[c++]=f>>6&63|128}h[c++]=f&63|128}return o?h:h.subarray(0,c)}function i(a,o,l){let c=o,h="";for(l+=o;c<l;){let u=a[c++];if(u>127)if(u>191&&u<224){if(c>=l)throw new Error("UTF-8 decode: incomplete 2-byte sequence");u=(u&31)<<6|a[c++]&63}else if(u>223&&u<240){if(c+1>=l)throw new Error("UTF-8 decode: incomplete 3-byte sequence");u=(u&15)<<12|(a[c++]&63)<<6|a[c++]&63}else if(u>239&&u<248){if(c+2>=l)throw new Error("UTF-8 decode: incomplete 4-byte sequence");u=(u&7)<<18|(a[c++]&63)<<12|(a[c++]&63)<<6|a[c++]&63}else throw new Error("UTF-8 decode: unknown multibyte start 0x"+u.toString(16)+" at index "+(c-1));if(u<=65535)h+=String.fromCharCode(u);else if(u<=1114111)u-=65536,h+=String.fromCharCode(u>>10|55296),h+=String.fromCharCode(u&1023|56320);else throw new Error("UTF-8 decode: code point 0x"+u.toString(16)+" exceeds UTF-16 reach")}return h}let s={serialize:e,deserialize:t,encode:e,decode:t};r?r.exports=s:window[window.msgpackJsName||"msgpack"]=s})()}(co)),co.exports}var ta=vv();class Ph{constructor(){Zn(this,"parseReflectionTableFromMsgpackFile",e=>{const t=new FileReader;return new Promise((n,i)=>{t.onerror=()=>{t.abort(),i(new DOMException("Problem parsing input file."))},t.onloadend=()=>{n(t.result);const s=ta.deserialize(new Uint8Array(t.result));this.refl=s[2].data},t.readAsArrayBuffer(e),this.filename=e.name})});Zn(this,"parseReflectionTableFromMsgpack",e=>{const t=ta.deserialize(new Uint8Array(e));this.refl=t[2].data,this.rawReflData=e});Zn(this,"parseReflectionTableFromJSONMsgpack",e=>{const t=Uint8Array.from(atob(e),i=>i.charCodeAt(0)),n=ta.decode(t);this.refl=n[2].data,this.rawReflData=e});this.refl=null,this.indexedMap={},this.unindexedMap={},this.filename=null,this.rawReflData=null}hasReflTable(){return this.refl!=null}clearReflectionTable(){this.refl=null,this.rawReflData=null,this.indexedMap={},this.unindexedMap={},this.filename=null}containsColumn(e){return e in this.refl}getColumnBuffer(e){return this.refl[e][1][1]}getUint32Array(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new DataView(t.buffer),i=new Uint32Array(t.byteLength/8);let s=0;for(let a=0;a<t.byteLength;a+=8)i[s]=n.getUint32(t.byteOffset+a,!0),s++;return i}getInt32Array(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new DataView(t.buffer),i=new Int32Array(t.byteLength/4);let s=0;for(let a=0;a<t.byteLength;a+=4)i[s]=n.getInt32(t.byteOffset+a,!0),s++;return i}getDoubleArray(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new DataView(t.buffer),i=new Float64Array(t.length/8);let s=0;for(let a=0;a<t.byteLength;a+=8)i[s]=n.getFloat64(t.byteOffset+a,!0),s++;return i}getVec3DoubleArray(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new DataView(t.buffer),i=new Array(t.length/(8*3));let s=0;for(let a=0;a<t.byteLength;a+=24){const o=new Float64Array(3);o[0]=n.getFloat64(t.byteOffset+a,!0),o[1]=n.getFloat64(t.byteOffset+a+8,!0),o[2]=n.getFloat64(t.byteOffset+a+16,!0),i[s]=o,s++}return i}getVec6Int32Array(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new Array(t.length/(6*4)),i=new DataView(t.buffer);let s=0;for(let a=0;a<t.length;a+=24){const o=new Int32Array(6);o[0]=i.getInt32(t.byteOffset+a,!0),o[1]=i.getInt32(t.byteOffset+a+4,!0),o[2]=i.getInt32(t.byteOffset+a+8,!0),o[3]=i.getInt32(t.byteOffset+a+12,!0),o[4]=i.getInt32(t.byteOffset+a+16,!0),o[5]=i.getInt32(t.byteOffset+a+20,!0),n[s]=o,s++}return n}getVec3Int32Array(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new Array(t.length/(3*4)),i=new DataView(t.buffer);let s=0;for(let a=0;a<t.length;a+=12){const o=new Int32Array(3);o[0]=i.getInt32(t.byteOffset+a,!0),o[1]=i.getInt32(t.byteOffset+a+4,!0),o[2]=i.getInt32(t.byteOffset+a+8,!0),n[s]=o,s++}return n}getPanelNumbers(){return this.getUint32Array("panel")}getFlags(){return this.getUint32Array("flags")}isSummationIntegrated(e){return(e&256)===256}isPrfIntegrated(e){return(e&512)===512}isIndexed(e){return(e&4)===4}isObserved(e){return(e&2)===2}isPredicted(e){return(e&1)===1}getXYZObs(){return this.getVec3DoubleArray("xyzobs.px.value")}containsXYZObs(){return this.containsColumn("xyzobs.px.value")}getXYZObsMm(){return this.getVec3DoubleArray("xyzobs.mm.value")}containsXYZObsMm(){return this.containsColumn("xyzobs.mm.value")}getCrystalIDs(){return this.getInt32Array("crystal_id")}getWavelengths(){return this.getDoubleArray("wavelength")}containsWavelengths(){return this.containsColumn("wavelength")}getCalculatedWavelengths(){return this.getDoubleArray("wavelength_cal")}containsCalculatedWavelengths(){return this.containsColumn("wavelength_cal")}getXYZCal(){return this.getVec3DoubleArray("xyzcal.px")}containsXYZCal(){return this.containsColumn("xyzcal.px")}getXYZCalMm(){return this.getVec3DoubleArray("xyzcal.mm")}containsXYZCalMm(){return this.containsColumn("xyzcal.mm")}containsSummationIntensities(){return this.containsColumn("intensity.sum.value")}containsProfileIntensities(){return this.containsColumn("intensity.prf.value")}containsBoundingBoxes(){return this.containsColumn("bbox")}getBoundingBoxes(){return this.getVec6Int32Array("bbox")}containsMillerIndices(){return this.containsColumn("miller_index")}getMillerIndices(){return this.getVec3Int32Array("miller_index")}isValidMillerIndex(e){return Math.abs(e[0])+Math.abs(e[1])+Math.abs(e[2])>0}containsExperimentIDs(){return this.containsColumn("id")}getExperimentIDs(){return this.getInt32Array("id")}getImagesetIDs(){return this.getInt32Array("imageset_id")}getMillerIndexById(e){return this.indexedMap[e]}}function Mv(r){return"channel"in r&&r.channel=="experiment_viewer"}const yv="ws://127.0.0.1:50010/",bv={background:133143,sample:16643811,reflectionObsUnindexed:[9894267,7715837,12548086,1305289,16756860,16765407,13696766,16777092,16777215,16749576,129478,11468140,16646146,10030923,7918006,16775447,16713609,13959167,6936655,5680727],reflectionObsIndexed:15158332,reflectionCal:16755370,reflectionIntegrated:16761436,panel:6127001,highlight:16777215,beam:16777215,bbox:14540253,axes:[16755370,11206570,11184895],highlightBbox:1305289,createNewReflectionBbox:16756860};window.onload=function(){window.viewer=new ii(new mi,new Ph,new Ph,!1,bv),window.viewer.serverWS=new WebSocket(yv),window.viewer.serverWS.binaryType="arraybuffer",window.viewer.serverWS.onopen=()=>{console.log("Experiment viewer opened Connection to server"),window.viewer.serverWS.send(JSON.stringify({channel:"server",command:"record_connection",id:"experiment_viewer"}))},window.viewer.serverWS.onclose=()=>{console.log("Experiment viewer closed Connection to server")},window.viewer.serverWS.onmessage=r=>{let e=r.data;if(typeof e!="string"){const i=e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer??e);try{const s=ta.decode(i);let a=s.command;switch(a){case"add_panel_image_data":window.viewer.addPanelImageData(s.image_data,s.panel_idx,s.expt_id);break;case"add_expt_image_data":window.viewer.addExptImageData(s.image_data,s.expt_id);break;case"add_debug_panel_image_data":window.viewer.addDebugPanelImageData(s.image_data,s.mask_data,s.panel_idx,s.expt_id);break;case"add_debug_image_data":window.viewer.addDebugImageData(s.image_data,s.mask_data);break;default:console.warn("Unrecognised Msgpack command ",a)}return}catch(s){console.error("Invalid Msgpack",s);return}}const t=JSON.parse(r.data);if(!Mv(t))return;const n=t.command;switch(n){case"update_experiment":console.assert("expt"in t,"expt not found when calling update_experiment");const i=t.expt;console.assert(mi.isExptJSON(i),"expt is not recognised as an expt JSON string"),"image_data"in t?window.viewer.addExperimentFromJSONString(i,t.image_data):window.viewer.addExperimentFromJSONString(i);break;case"clear_experiment":window.viewer.clearExperiment();break;case"update_reflection_table":window.viewer.addReflectionsFromJSONMsgpack(t.refl_msgpack);break;case"update_calculated_integrated_reflection_table":window.viewer.addCalculatedIntegratedReflectionsFromJSONMsgpack(t.refl_msgpack);break;case"highlight_reflection":window.viewer.highlightReflection(t);break;case"loading_images":window.viewer.showLoadingImagesMsg();break;case"loading_reflection":window.viewer.showLoadingReflectionMsg();break;case"select_expt":console.assert("expt_id"in t);const s=Number(t.expt_id);console.assert(typeof s=="number"&&!Number.isNaN(s)),window.viewer.selectExpt(s);break;case"toggle_debug_mode":window.viewer.toggleDebugMode(t.debug_mode);break;case"set_debug_to_image":window.viewer.setDebugToImage();break;case"set_debug_to_threshold":window.viewer.setDebugToThreshold();break;case"toggle_sidebar":window.viewer.toggleSidebar();break;default:console.warn("Unrecognised command ",n)}},xv()};
