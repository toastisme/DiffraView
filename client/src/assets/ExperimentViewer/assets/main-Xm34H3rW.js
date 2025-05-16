var bm=Object.defineProperty;var Mm=(i,e,t)=>e in i?bm(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var di=(i,e,t)=>Mm(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="172",ar={ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wm=0,Gh=1,Sm=2,rd=1,Em=2,ei=3,Ui=0,Kt=1,si=2,Ai=0,Yr=1,Wh=2,Xh=3,Yh=4,Tm=5,Ki=100,Am=101,Rm=102,Cm=103,Pm=104,Dm=200,Im=201,Lm=202,Um=203,kl=204,Bl=205,Om=206,Nm=207,Fm=208,km=209,Bm=210,zm=211,Hm=212,Vm=213,Gm=214,zl=0,Hl=1,Vl=2,Qr=3,Gl=4,Wl=5,Xl=6,Yl=7,Kc=0,Wm=1,Xm=2,Ri=0,Ym=1,qm=2,Zm=3,jm=4,$m=5,Km=6,Jm=7,sd=300,es=301,ts=302,ql=303,Zl=304,Ao=306,jl=1e3,er=1001,$l=1002,Un=1003,Qm=1004,ya=1005,zn=1006,Fo=1007,tr=1008,ci=1009,ad=1010,od=1011,Ys=1012,Jc=1013,ur=1014,ai=1015,ca=1016,Qc=1017,eh=1018,ns=1020,ld=35902,cd=1021,hd=1022,Ln=1023,ud=1024,fd=1025,qr=1026,is=1027,dd=1028,th=1029,pd=1030,nh=1031,ih=1033,Qa=33776,eo=33777,to=33778,no=33779,Kl=35840,Jl=35841,Ql=35842,ec=35843,tc=36196,nc=37492,ic=37496,rc=37808,sc=37809,ac=37810,oc=37811,lc=37812,cc=37813,hc=37814,uc=37815,fc=37816,dc=37817,pc=37818,mc=37819,_c=37820,gc=37821,io=36492,xc=36494,vc=36495,md=36283,yc=36284,bc=36285,Mc=36286,e_=3200,t_=3201,_d=0,n_=1,bi="",bn="srgb",rs="srgb-linear",ho="linear",Qe="srgb",wr=7680,qh=519,i_=512,r_=513,s_=514,gd=515,a_=516,o_=517,l_=518,c_=519,Zh=35044,jh="300 es",oi=2e3,uo=2001;class xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ro=Math.PI/180,wc=180/Math.PI;function ha(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Ne(i,e,t){return Math.max(e,Math.min(t,i))}function h_(i,e){return(i%e+e)%e}function ko(i,e,t){return(1-t)*i+t*e}function ws(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const u_={DEG2RAD:ro};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ne(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(e,t,n,r,s,a,o,c,l){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=r[0],m=r[3],p=r[6],S=r[1],w=r[4],y=r[7],b=r[2],T=r[5],M=r[8];return s[0]=a*_+o*S+c*b,s[3]=a*m+o*w+c*T,s[6]=a*p+o*y+c*M,s[1]=l*_+h*S+u*b,s[4]=l*m+h*w+u*T,s[7]=l*p+h*y+u*M,s[2]=d*_+f*S+g*b,s[5]=d*m+f*w+g*T,s[8]=d*p+f*y+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,g=t*u+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*l-h*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bo.makeScale(e,t)),this}rotate(e){return this.premultiply(Bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bo=new ve;function xd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function f_(){const i=qs("canvas");return i.style.display="block",i}const $h={};function zr(i){i in $h||($h[i]=!0,console.warn(i))}function d_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function p_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function m_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Kh=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function __(){const i={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Qe&&(r.r=li(r.r),r.g=li(r.g),r.b=li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(r.r=Zr(r.r),r.g=Zr(r.g),r.b=Zr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bi?ho:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rs]:{primaries:e,whitePoint:n,transfer:ho,toXYZ:Kh,fromXYZ:Jh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:Kh,fromXYZ:Jh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),i}const Ye=__();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Sr;class g_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=qs("canvas")),Sr.width=e.width,Sr.height=e.height;const n=Sr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=li(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let x_=0;class vd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=ha(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zo(r[a].image)):s.push(zo(r[a]))}else s=zo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?g_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let v_=0;class Bt extends xr{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=er,r=er,s=zn,a=tr,o=Ln,c=ci,l=Bt.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=ha(),this.name="",this.source=new vd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jl:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jl:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=sd;Bt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,y=(f+1)/2,b=(p+1)/2,T=(h+d)/4,M=(u+_)/4,C=(g+m)/4;return w>y&&w>b?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=T/n,s=M/n):y>b?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=T/r,s=C/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=M/s,r=C/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this.w=Ne(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this.w=Ne(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class y_ extends xr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Bt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new vd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fr extends y_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yd extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class b_ extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*_,S=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const b=Math.sqrt(w),T=Math.atan2(b,p*S);m=Math.sin(m*T)/b,o=Math.sin(o*T)/b}const y=o*S;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),u=o(s/2),d=c(n/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ne(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new D,Qh=new dr;class ms{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),Ma.subVectors(this.max,Ss),Er.subVectors(e.a,Ss),Tr.subVectors(e.b,Ss),Ar.subVectors(e.c,Ss),pi.subVectors(Tr,Er),mi.subVectors(Ar,Tr),Hi.subVectors(Er,Ar);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Hi.z,Hi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Hi.z,0,-Hi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Hi.y,Hi.x,0];return!Vo(t,Er,Tr,Ar,Ma)||(t=[1,0,0,0,1,0,0,0,1],!Vo(t,Er,Tr,Ar,Ma))?!1:(wa.crossVectors(pi,mi),t=[wa.x,wa.y,wa.z],Vo(t,Er,Tr,Ar,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new D,new D,new D,new D,new D,new D,new D,new D],Cn=new D,ba=new ms,Er=new D,Tr=new D,Ar=new D,pi=new D,mi=new D,Hi=new D,Ss=new D,Ma=new D,wa=new D,Vi=new D;function Vo(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Vi.fromArray(i,s);const o=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const M_=new ms,Es=new D,Go=new D;class _s{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):M_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Es,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(Go)),this.expandByPoint(Es.copy(e.center).sub(Go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new D,Wo=new D,Sa=new D,_i=new D,Xo=new D,Ea=new D,Yo=new D;class gs{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Wo.copy(e).add(t).multiplyScalar(.5),Sa.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Wo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Sa),o=_i.dot(this.direction),c=-_i.dot(Sa),l=_i.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Wo).addScaledVector(Sa,d),f}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),r=jn.dot(jn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,r,s){Xo.subVectors(t,e),Ea.subVectors(n,e),Yo.crossVectors(Xo,Ea);let a=this.direction.dot(Yo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,e);const c=o*this.direction.dot(Ea.crossVectors(_i,Ea));if(c<0)return null;const l=o*this.direction.dot(Xo.cross(_i));if(l<0||c+l>a)return null;const h=-o*_i.dot(Yo);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,r,s,a,o,c,l,h,u,d,f,g,_,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,u,d,f,g,_,m)}set(e,t,n,r,s,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),a=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w_,e,S_)}lookAt(e,t,n){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),gi.crossVectors(n,sn),gi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),gi.crossVectors(n,sn)),gi.normalize(),Ta.crossVectors(sn,gi),r[0]=gi.x,r[4]=Ta.x,r[8]=sn.x,r[1]=gi.y,r[5]=Ta.y,r[9]=sn.y,r[2]=gi.z,r[6]=Ta.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],w=n[7],y=n[11],b=n[15],T=r[0],M=r[4],C=r[8],x=r[12],v=r[1],A=r[5],F=r[9],O=r[13],V=r[2],X=r[6],G=r[10],q=r[14],H=r[3],te=r[7],oe=r[11],me=r[15];return s[0]=a*T+o*v+c*V+l*H,s[4]=a*M+o*A+c*X+l*te,s[8]=a*C+o*F+c*G+l*oe,s[12]=a*x+o*O+c*q+l*me,s[1]=h*T+u*v+d*V+f*H,s[5]=h*M+u*A+d*X+f*te,s[9]=h*C+u*F+d*G+f*oe,s[13]=h*x+u*O+d*q+f*me,s[2]=g*T+_*v+m*V+p*H,s[6]=g*M+_*A+m*X+p*te,s[10]=g*C+_*F+m*G+p*oe,s[14]=g*x+_*O+m*q+p*me,s[3]=S*T+w*v+y*V+b*H,s[7]=S*M+w*A+y*X+b*te,s[11]=S*C+w*F+y*G+b*oe,s[15]=S*x+w*O+y*q+b*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*u-r*l*u-s*o*d+n*l*d+r*o*f-n*c*f)+_*(+t*c*f-t*l*d+s*a*d-r*a*f+r*l*h-s*c*h)+m*(+t*l*u-t*o*f-s*a*u+n*a*f+s*o*h-n*l*h)+p*(-r*o*h-t*c*u+t*o*d+r*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,w=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,y=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,b=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,T=t*S+n*w+r*y+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=S*M,e[1]=(_*d*s-u*m*s-_*r*f+n*m*f+u*r*p-n*d*p)*M,e[2]=(o*m*s-_*c*s+_*r*l-n*m*l-o*r*p+n*c*p)*M,e[3]=(u*c*s-o*d*s-u*r*l+n*d*l+o*r*f-n*c*f)*M,e[4]=w*M,e[5]=(h*m*s-g*d*s+g*r*f-t*m*f-h*r*p+t*d*p)*M,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*M,e[7]=(a*d*s-h*c*s+h*r*l-t*d*l-a*r*f+t*c*f)*M,e[8]=y*M,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*M,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*p+t*o*p)*M,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*f-t*o*f)*M,e[12]=b*M,e[13]=(h*_*r-g*u*r+g*n*d-t*_*d-h*n*m+t*u*m)*M,e[14]=(g*o*r-a*_*r-g*n*c+t*_*c+a*n*m-t*o*m)*M,e[15]=(a*u*r-h*o*r+h*n*c-t*u*c-a*n*d+t*o*d)*M,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,g=s*u,_=a*h,m=a*u,p=o*u,S=c*l,w=c*h,y=c*u,b=n.x,T=n.y,M=n.z;return r[0]=(1-(_+p))*b,r[1]=(f+y)*b,r[2]=(g-w)*b,r[3]=0,r[4]=(f-y)*T,r[5]=(1-(d+p))*T,r[6]=(m+S)*T,r[7]=0,r[8]=(g+w)*M,r[9]=(m-S)*M,r[10]=(1-(d+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const a=Rr.set(r[4],r[5],r[6]).length(),o=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const l=1/s,h=1/a,u=1/o;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=oi){const c=this.elements,l=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let f,g;if(o===oi)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===uo)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=oi){const c=this.elements,l=1/(t-e),h=1/(n-r),u=1/(a-s),d=(t+e)*l,f=(n+r)*h;let g,_;if(o===oi)g=(a+s)*u,_=-2*u;else if(o===uo)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Rr=new D,Pn=new at,w_=new D(0,0,0),S_=new D(1,1,1),gi=new D,Ta=new D,sn=new D,eu=new at,tu=new dr;class Xn{constructor(e=0,t=0,n=0,r=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tu.setFromEuler(this),this.setFromQuaternion(tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class rh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let E_=0;const nu=new D,Cr=new dr,$n=new at,Aa=new D,Ts=new D,T_=new D,A_=new dr,iu=new D(1,0,0),ru=new D(0,1,0),su=new D(0,0,1),au={type:"added"},R_={type:"removed"},Pr={type:"childadded",child:null},qo={type:"childremoved",child:null};class Xt extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new D,t=new Xn,n=new dr,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new ve}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(ru,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(ru,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Aa.copy(e):Aa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ts,Aa,this.up):$n.lookAt(Aa,Ts,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Cr.setFromRotationMatrix($n),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(au),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R_),qo.child=e,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(au),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,T_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,A_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new D(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new D,Kn=new D,Zo=new D,Jn=new D,Dr=new D,Ir=new D,ou=new D,jo=new D,$o=new D,Ko=new D,Jo=new xt,Qo=new xt,el=new xt;class In{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Dn.subVectors(e,t),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Dn.subVectors(r,t),Kn.subVectors(n,t),Zo.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot(Kn),c=Dn.dot(Zo),l=Kn.dot(Kn),h=Kn.dot(Zo),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Jo.setScalar(0),Qo.setScalar(0),el.setScalar(0),Jo.fromBufferAttribute(e,t),Qo.fromBufferAttribute(e,n),el.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jo,s.x),a.addScaledVector(Qo,s.y),a.addScaledVector(el,s.z),a}static isFrontFacing(e,t,n,r){return Dn.subVectors(n,t),Kn.subVectors(e,t),Dn.cross(Kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Dn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return In.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Dr.subVectors(r,n),Ir.subVectors(s,n),jo.subVectors(e,n);const c=Dr.dot(jo),l=Ir.dot(jo);if(c<=0&&l<=0)return t.copy(n);$o.subVectors(e,r);const h=Dr.dot($o),u=Ir.dot($o);if(h>=0&&u<=h)return t.copy(r);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Dr,a);Ko.subVectors(e,s);const f=Dr.dot(Ko),g=Ir.dot(Ko);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ir,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ou.subVectors(s,r),o=(u-h)/(u-h+(f-g)),t.copy(r).addScaledVector(ou,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Dr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function tl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=h_(e,1),t=Ne(t,0,1),n=Ne(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=tl(a,s,e+1/3),this.g=tl(a,s,e),this.b=tl(a,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=bn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Ye.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Ne(Nt.r*255,0,255))*65536+Math.round(Ne(Nt.g*255,0,255))*256+Math.round(Ne(Nt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,r=Nt.g,s=Nt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=bn){Ye.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,r=Nt.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Ra);const n=ko(xi.h,Ra.h,t),r=ko(xi.s,Ra.s,t),s=ko(xi.l,Ra.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ue;Ue.NAMES=bd;let C_=0;class vr extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=ha(),this.name="",this.type="Material",this.blending=Yr,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Bl,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kl&&(n.blendSrc=this.blendSrc),this.blendDst!==Bl&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vr extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new D,Ca=new Ee;class bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zh,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ws(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zh&&(e.usage=this.usage),e}}class Md extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wd extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let P_=0;const vn=new at,nl=new Xt,Lr=new D,an=new ms,As=new ms,At=new D;class nt extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xd(e)?wd:Md)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];As.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(an.min,As.min),an.expandByPoint(At),At.addVectors(an.max,As.max),an.expandByPoint(At)):(an.expandByPoint(As.min),an.expandByPoint(As.max))}an.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(At));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)At.fromBufferAttribute(o,l),c&&(Lr.fromBufferAttribute(e,l),At.add(Lr)),r=Math.max(r,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new D,c[C]=new D;const l=new D,h=new D,u=new D,d=new Ee,f=new Ee,g=new Ee,_=new D,m=new D;function p(C,x,v){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,v),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,x),g.fromBufferAttribute(s,v),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),o[C].add(_),o[x].add(_),o[v].add(_),c[C].add(m),c[x].add(m),c[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,x=S.length;C<x;++C){const v=S[C],A=v.start,F=v.count;for(let O=A,V=A+F;O<V;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const w=new D,y=new D,b=new D,T=new D;function M(C){b.fromBufferAttribute(r,C),T.copy(b);const x=o[C];w.copy(x),w.sub(b.multiplyScalar(b.dot(x))).normalize(),y.crossVectors(T,x);const A=y.dot(c[C])<0?-1:1;a.setXYZW(C,w.x,w.y,w.z,A)}for(let C=0,x=S.length;C<x;++C){const v=S[C],A=v.start,F=v.count;for(let O=A,V=A+F;O<V;O+=3)M(e.getX(O+0)),M(e.getX(O+1)),M(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lu=new at,Gi=new gs,Pa=new _s,cu=new D,Da=new D,Ia=new D,La=new D,il=new D,Ua=new D,hu=new D,Oa=new D;class Ct extends Xt{constructor(e=new nt,t=new Vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ua.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(il.fromBufferAttribute(u,e),a?Ua.addScaledVector(il,h):Ua.addScaledVector(il.sub(t),h))}t.add(Ua)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),Gi.copy(e.ray).recast(e.near),!(Pa.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Pa,cu)===null||Gi.origin.distanceToSquared(cu)>(e.far-e.near)**2))&&(lu.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(lu),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,b=w;y<b;y+=3){const T=o.getX(y),M=o.getX(y+1),C=o.getX(y+2);r=Na(this,p,e,n,l,h,u,T,M,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);r=Na(this,a,e,n,l,h,u,S,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,b=w;y<b;y+=3){const T=y,M=y+1,C=y+2;r=Na(this,p,e,n,l,h,u,T,M,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,w=m+1,y=m+2;r=Na(this,a,e,n,l,h,u,S,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function D_(i,e,t,n,r,s,a,o){let c;if(e.side===Kt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Ui,o),c===null)return null;Oa.copy(o),Oa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Oa);return l<t.near||l>t.far?null:{distance:l,point:Oa.clone(),object:i}}function Na(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Da),i.getVertexPosition(c,Ia),i.getVertexPosition(l,La);const h=D_(i,e,t,n,Da,Ia,La,hu);if(h){const u=new D;In.getBarycoord(hu,Da,Ia,La,u),r&&(h.uv=In.getInterpolatedAttribute(r,o,c,l,u,new Ee)),s&&(h.uv1=In.getInterpolatedAttribute(s,o,c,l,u,new Ee)),a&&(h.normal=In.getInterpolatedAttribute(a,o,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};In.getNormal(Da,Ia,La,d.normal),h.face=d,h.barycoord=u}return h}class ua extends nt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(_,m,p,S,w,y,b,T,M,C,x){const v=y/M,A=b/C,F=y/2,O=b/2,V=T/2,X=M+1,G=C+1;let q=0,H=0;const te=new D;for(let oe=0;oe<G;oe++){const me=oe*A-O;for(let Te=0;Te<X;Te++){const je=Te*v-F;te[_]=je*S,te[m]=me*w,te[p]=V,l.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=T>0?1:-1,h.push(te.x,te.y,te.z),u.push(Te/M),u.push(1-oe/C),q+=1}}for(let oe=0;oe<C;oe++)for(let me=0;me<M;me++){const Te=d+me+X*oe,je=d+me+X*(oe+1),Y=d+(me+1)+X*(oe+1),Q=d+(me+1)+X*oe;c.push(Te,je,Q),c.push(je,Y,Q),H+=6}o.addGroup(f,H,x),f+=H,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=ss(i[t]);for(const r in n)e[r]=n[r]}return e}function I_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const L_={clone:ss,merge:Vt};var U_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U_,this.fragmentShader=O_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=I_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ed extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new D,uu=new Ee,fu=new Ee;class Mn extends Ed{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wc*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,uu,fu),t.subVectors(fu,uu)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ro*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ur=-90,Or=1;class N_ extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(Ur,Or,e,t);r.layers=this.layers,this.add(r);const s=new Mn(Ur,Or,e,t);s.layers=this.layers,this.add(s);const a=new Mn(Ur,Or,e,t);a.layers=this.layers,this.add(a);const o=new Mn(Ur,Or,e,t);o.layers=this.layers,this.add(o);const c=new Mn(Ur,Or,e,t);c.layers=this.layers,this.add(c);const l=new Mn(Ur,Or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Td extends Bt{constructor(e,t,n,r,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class F_ extends fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Td(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ua(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Ai});s.uniforms.tEquirect.value=t;const a=new Ct(r,s),o=t.minFilter;return t.minFilter===tr&&(t.minFilter=zn),new N_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class sh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new sh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class k_ extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const rl=new D,B_=new D,z_=new ve;class yi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=rl.subVectors(n,t).cross(B_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||z_.getNormalMatrix(e),r=this.coplanarPoint(rl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new _s,Fa=new D;class Ad{constructor(e=new yi,t=new yi,n=new yi,r=new yi,s=new yi,a=new yi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],S=r[13],w=r[14],y=r[15];if(n[0].setComponents(c-s,d-l,m-f,y-p).normalize(),n[1].setComponents(c+s,d+l,m+f,y+p).normalize(),n[2].setComponents(c+a,d+h,m+g,y+S).normalize(),n[3].setComponents(c-a,d-h,m-g,y-S).normalize(),n[4].setComponents(c-o,d-u,m-_,y-w).normalize(),t===oi)n[5].setComponents(c+o,d+u,m+_,y+w).normalize();else if(t===uo)n[5].setComponents(o,u,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fa.x=r.normal.x>0?e.max.x:e.min.x,Fa.y=r.normal.y>0?e.max.y:e.min.y,Fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fo extends vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const po=new D,mo=new D,du=new at,Rs=new gs,ka=new _s,sl=new D,pu=new D;class ah extends Xt{constructor(e=new nt,t=new fo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)po.fromBufferAttribute(t,r-1),mo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=po.distanceTo(mo);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(r),ka.radius+=s,e.ray.intersectsSphere(ka)===!1)return;du.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(du);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),S=h.getX(_+1),w=Ba(this,e,Rs,c,p,S);w&&t.push(w)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Ba(this,e,Rs,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=Ba(this,e,Rs,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ba(this,e,Rs,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ba(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(po.fromBufferAttribute(a,r),mo.fromBufferAttribute(a,s),t.distanceSqToSegment(po,mo,sl,pu)>n)return;sl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(sl);if(!(c<e.near||c>e.far))return{distance:c,point:pu.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const mu=new D,_u=new D;class H_ extends ah{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)mu.fromBufferAttribute(t,r),_u.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+mu.distanceTo(_u);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jt extends vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gu=new at,Sc=new gs,za=new _s,Ha=new D;class on extends Xt{constructor(e=new nt,t=new jt){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),za.radius+=s,e.ray.intersectsSphere(za)===!1)return;gu.copy(r).invert(),Sc.copy(e.ray).applyMatrix4(gu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Ha.fromBufferAttribute(u,m),xu(Ha,m,c,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Ha.fromBufferAttribute(u,g),xu(Ha,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function xu(i,e,t,n,r,s,a){const o=Sc.distanceSqToPoint(i);if(o<t){const c=new D;Sc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Va extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Rd extends Bt{constructor(e,t,n,r,s,a,o,c,l,h=qr){if(h!==qr&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qr&&(n=ur),n===void 0&&h===is&&(n=ns),super(null,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Un,this.minFilter=c!==void 0?c:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class as extends nt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*d-a;for(let w=0;w<l;w++){const y=w*u-s;g.push(y,-S,0),_.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const w=S+l*p,y=S+l*(p+1),b=S+1+l*(p+1),T=S+1+l*p;f.push(w,y,T),f.push(y,b,T)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}class oh extends nt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],w=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const T=b/t;u.x=-e*Math.cos(r+T*s)*Math.sin(a+w*o),u.y=e*Math.cos(a+w*o),u.z=e*Math.sin(r+T*s)*Math.sin(a+w*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+y,1-w),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const w=h[p][S+1],y=h[p][S],b=h[p+1][S],T=h[p+1][S+1];(p!==0||a>0)&&f.push(w,y,T),(p!==n-1||c<Math.PI)&&f.push(y,b,T)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class V_ extends vr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_d,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class G_ extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W_ extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class X_{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Y_=new X_;class lh{constructor(e){this.manager=e!==void 0?e:Y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lh.DEFAULT_MATERIAL_NAME="__DEFAULT";class q_ extends lh{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=vu.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=qs("img");function c(){h(),vu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Z_ extends lh{constructor(e){super(e)}load(e,t,n,r){const s=new Bt,a=new q_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class j_ extends Ed{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $_ extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const yu=new at;class K_{constructor(e,t,n=0,r=1/0){this.ray=new gs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new rh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yu),this}intersectObject(e,t=!0,n=[]){return Ec(e,this,n,t),n.sort(bu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ec(e[r],this,n,t);return n.sort(bu),n}}function bu(i,e){return i.distance-e.distance}function Ec(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Ec(s[a],e,t,!0)}}class Mu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ne(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class J_ extends xr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function wu(i,e,t,n){const r=Q_(n);switch(t){case cd:return i*e;case ud:return i*e;case fd:return i*e*2;case dd:return i*e/r.components*r.byteLength;case th:return i*e/r.components*r.byteLength;case pd:return i*e*2/r.components*r.byteLength;case nh:return i*e*2/r.components*r.byteLength;case hd:return i*e*3/r.components*r.byteLength;case Ln:return i*e*4/r.components*r.byteLength;case ih:return i*e*4/r.components*r.byteLength;case Qa:case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:case ec:return Math.max(i,16)*Math.max(e,8)/4;case Kl:case Ql:return Math.max(i,8)*Math.max(e,8)/2;case tc:case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case io:case xc:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case md:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case bc:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Q_(i){switch(i){case ci:case ad:return{byteLength:1,components:1};case Ys:case od:case ca:return{byteLength:2,components:1};case Qc:case eh:return{byteLength:2,components:4};case ur:case Jc:case ai:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cd(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function eg(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var tg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ng=`#ifdef USE_ALPHAHASH
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
#endif`,ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,og=`#ifdef USE_AOMAP
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
#endif`,lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cg=`#ifdef USE_BATCHING
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
#endif`,hg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ug=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pg=`#ifdef USE_IRIDESCENCE
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
#endif`,mg=`#ifdef USE_BUMPMAP
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sg=`#define PI 3.141592653589793
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
} // validated`,Eg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ig=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vg=`#ifdef USE_GRADIENTMAP
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
}`,Gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yg=`uniform bool receiveShadow;
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
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jg=`PhysicalMaterial material;
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
#endif`,Qg=`struct PhysicalMaterial {
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
}`,e0=`
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
#endif`,t0=`#if defined( RE_IndirectDiffuse )
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h0=`#if defined( USE_POINTS_UV )
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
#endif`,u0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
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
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w0=`#ifdef USE_NORMALMAP
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
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B0=`float getShadowMask() {
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
}`,z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,V0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#ifdef USE_TRANSMISSION
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`#include <common>
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
}`,ox=`#if DEPTH_PACKING == 3200
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
}`,lx=`#define DISTANCE
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
}`,cx=`#define DISTANCE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
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
}`,dx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 diffuse;
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
}`,_x=`#define LAMBERT
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
}`,gx=`#define LAMBERT
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
}`,xx=`#define MATCAP
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
}`,vx=`#define MATCAP
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
}`,yx=`#define NORMAL
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
}`,bx=`#define NORMAL
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
}`,Mx=`#define PHONG
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
}`,wx=`#define PHONG
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
}`,Sx=`#define STANDARD
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
}`,Ex=`#define STANDARD
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
}`,Tx=`#define TOON
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
}`,Ax=`#define TOON
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
}`,Rx=`uniform float size;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Dx=`uniform vec3 color;
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
}`,Ix=`uniform float rotation;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:tg,alphahash_pars_fragment:ng,alphamap_fragment:ig,alphamap_pars_fragment:rg,alphatest_fragment:sg,alphatest_pars_fragment:ag,aomap_fragment:og,aomap_pars_fragment:lg,batching_pars_vertex:cg,batching_vertex:hg,begin_vertex:ug,beginnormal_vertex:fg,bsdfs:dg,iridescence_fragment:pg,bumpmap_pars_fragment:mg,clipping_planes_fragment:_g,clipping_planes_pars_fragment:gg,clipping_planes_pars_vertex:xg,clipping_planes_vertex:vg,color_fragment:yg,color_pars_fragment:bg,color_pars_vertex:Mg,color_vertex:wg,common:Sg,cube_uv_reflection_fragment:Eg,defaultnormal_vertex:Tg,displacementmap_pars_vertex:Ag,displacementmap_vertex:Rg,emissivemap_fragment:Cg,emissivemap_pars_fragment:Pg,colorspace_fragment:Dg,colorspace_pars_fragment:Ig,envmap_fragment:Lg,envmap_common_pars_fragment:Ug,envmap_pars_fragment:Og,envmap_pars_vertex:Ng,envmap_physical_pars_fragment:qg,envmap_vertex:Fg,fog_vertex:kg,fog_pars_vertex:Bg,fog_fragment:zg,fog_pars_fragment:Hg,gradientmap_pars_fragment:Vg,lightmap_pars_fragment:Gg,lights_lambert_fragment:Wg,lights_lambert_pars_fragment:Xg,lights_pars_begin:Yg,lights_toon_fragment:Zg,lights_toon_pars_fragment:jg,lights_phong_fragment:$g,lights_phong_pars_fragment:Kg,lights_physical_fragment:Jg,lights_physical_pars_fragment:Qg,lights_fragment_begin:e0,lights_fragment_maps:t0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:a0,map_fragment:o0,map_pars_fragment:l0,map_particle_fragment:c0,map_particle_pars_fragment:h0,metalnessmap_fragment:u0,metalnessmap_pars_fragment:f0,morphinstance_vertex:d0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:_0,morphtarget_vertex:g0,normal_fragment_begin:x0,normal_fragment_maps:v0,normal_pars_fragment:y0,normal_pars_vertex:b0,normal_vertex:M0,normalmap_pars_fragment:w0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:A0,opaque_fragment:R0,packing:C0,premultiplied_alpha_fragment:P0,project_vertex:D0,dithering_fragment:I0,dithering_pars_fragment:L0,roughnessmap_fragment:U0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:N0,shadowmap_pars_vertex:F0,shadowmap_vertex:k0,shadowmask_pars_fragment:B0,skinbase_vertex:z0,skinning_pars_vertex:H0,skinning_vertex:V0,skinnormal_vertex:G0,specularmap_fragment:W0,specularmap_pars_fragment:X0,tonemapping_fragment:Y0,tonemapping_pars_fragment:q0,transmission_fragment:Z0,transmission_pars_fragment:j0,uv_pars_fragment:$0,uv_pars_vertex:K0,uv_vertex:J0,worldpos_vertex:Q0,background_vert:ex,background_frag:tx,backgroundCube_vert:nx,backgroundCube_frag:ix,cube_vert:rx,cube_frag:sx,depth_vert:ax,depth_frag:ox,distanceRGBA_vert:lx,distanceRGBA_frag:cx,equirect_vert:hx,equirect_frag:ux,linedashed_vert:fx,linedashed_frag:dx,meshbasic_vert:px,meshbasic_frag:mx,meshlambert_vert:_x,meshlambert_frag:gx,meshmatcap_vert:xx,meshmatcap_frag:vx,meshnormal_vert:yx,meshnormal_frag:bx,meshphong_vert:Mx,meshphong_frag:wx,meshphysical_vert:Sx,meshphysical_frag:Ex,meshtoon_vert:Tx,meshtoon_frag:Ax,points_vert:Rx,points_frag:Cx,shadow_vert:Px,shadow_frag:Dx,sprite_vert:Ix,sprite_frag:Lx},ne={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Fn={basic:{uniforms:Vt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Vt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Vt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Vt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Vt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Vt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Vt([ne.points,ne.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Vt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Vt([ne.common,ne.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Vt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Vt([ne.sprite,ne.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Vt([ne.common,ne.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Vt([ne.lights,ne.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Fn.physical={uniforms:Vt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Ga={r:0,b:0,g:0},Xi=new Xn,Ux=new at;function Ox(i,e,t,n,r,s,a){const o=new Ue(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function _(w){let y=!1;const b=g(w);b===null?p(o,c):b&&b.isColor&&(p(b,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===Ao)?(h===void 0&&(h=new Ct(new ua(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:ss(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Xi.copy(y.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(Xi)),h.material.toneMapped=Ye.getTransfer(b.colorSpace)!==Qe,(u!==b||d!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ct(new as(2,2),new hi({name:"BackgroundMaterial",uniforms:ss(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(b.colorSpace)!==Qe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,y){w.getRGB(Ga,Sd(i)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,y,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(w,y=1){o.set(w),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(o,c)},render:_,addToRenderList:m,dispose:S}}function Nx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(v,A,F,O,V){let X=!1;const G=u(O,F,A);s!==G&&(s=G,l(s.object)),X=f(v,O,F,V),X&&g(v,O,F,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(v,A,F,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,A,F){const O=F.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let X=V[A.id];X===void 0&&(X={},V[A.id]=X);let G=X[O];return G===void 0&&(G=d(c()),X[O]=G),G}function d(v){const A=[],F=[],O=[];for(let V=0;V<t;V++)A[V]=0,F[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:F,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,A,F,O){const V=s.attributes,X=A.attributes;let G=0;const q=F.getAttributes();for(const H in q)if(q[H].location>=0){const oe=V[H];let me=X[H];if(me===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(me=v.instanceColor)),oe===void 0||oe.attribute!==me||me&&oe.data!==me.data)return!0;G++}return s.attributesNum!==G||s.index!==O}function g(v,A,F,O){const V={},X=A.attributes;let G=0;const q=F.getAttributes();for(const H in q)if(q[H].location>=0){let oe=X[H];oe===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor));const me={};me.attribute=oe,oe&&oe.data&&(me.data=oe.data),V[H]=me,G++}s.attributes=V,s.attributesNum=G,s.index=O}function _(){const v=s.newAttributes;for(let A=0,F=v.length;A<F;A++)v[A]=0}function m(v){p(v,0)}function p(v,A){const F=s.newAttributes,O=s.enabledAttributes,V=s.attributeDivisors;F[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),V[v]!==A&&(i.vertexAttribDivisor(v,A),V[v]=A)}function S(){const v=s.newAttributes,A=s.enabledAttributes;for(let F=0,O=A.length;F<O;F++)A[F]!==v[F]&&(i.disableVertexAttribArray(F),A[F]=0)}function w(v,A,F,O,V,X,G){G===!0?i.vertexAttribIPointer(v,A,F,V,X):i.vertexAttribPointer(v,A,F,O,V,X)}function y(v,A,F,O){_();const V=O.attributes,X=F.getAttributes(),G=A.defaultAttributeValues;for(const q in X){const H=X[q];if(H.location>=0){let te=V[q];if(te===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),te!==void 0){const oe=te.normalized,me=te.itemSize,Te=e.get(te);if(Te===void 0)continue;const je=Te.buffer,Y=Te.type,Q=Te.bytesPerElement,_e=Y===i.INT||Y===i.UNSIGNED_INT||te.gpuType===Jc;if(te.isInterleavedBufferAttribute){const se=te.data,Se=se.stride,Ce=te.offset;if(se.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)p(H.location+Oe,se.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)m(H.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Oe=0;Oe<H.locationSize;Oe++)w(H.location+Oe,me/H.locationSize,Y,oe,Se*Q,(Ce+me/H.locationSize*Oe)*Q,_e)}else{if(te.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)p(H.location+se,te.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);i.bindBuffer(i.ARRAY_BUFFER,je);for(let se=0;se<H.locationSize;se++)w(H.location+se,me/H.locationSize,Y,oe,me*Q,me/H.locationSize*se*Q,_e)}}else if(G!==void 0){const oe=G[q];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(H.location,oe);break;case 3:i.vertexAttrib3fv(H.location,oe);break;case 4:i.vertexAttrib4fv(H.location,oe);break;default:i.vertexAttrib1fv(H.location,oe)}}}}S()}function b(){C();for(const v in n){const A=n[v];for(const F in A){const O=A[F];for(const V in O)h(O[V].object),delete O[V];delete A[F]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const A=n[v.id];for(const F in A){const O=A[F];for(const V in O)h(O[V].object),delete O[V];delete A[F]}delete n[v.id]}function M(v){for(const A in n){const F=n[A];if(F[v.id]===void 0)continue;const O=F[v.id];for(const V in O)h(O[V].object),delete O[V];delete F[v.id]}}function C(){x(),a=!0,s!==r&&(s=r,l(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Fx(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function kx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(M){return!(M!==Ln&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const C=M===ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ci&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==ai&&!C)}function c(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:b,maxSamples:T}}function Bx(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new yi,o=new ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||r;return r=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const S=s?0:n,w=S*4;let y=p.clippingState||null;c.value=y,y=h(g,d,w,f);for(let b=0;b!==w;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=f;w!==_;++w,y+=4)a.copy(u[w]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zx(i){let e=new WeakMap;function t(a,o){return o===ql?a.mapping=es:o===Zl&&(a.mapping=ts),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ql||o===Zl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new F_(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Gr=4,Su=[.125,.215,.35,.446,.526,.582],Ji=20,al=new j_,Eu=new Ue;let ol=null,ll=0,cl=0,hl=!1;const ji=(1+Math.sqrt(5))/2,Nr=1/ji,Tu=[new D(-ji,Nr,0),new D(ji,Nr,0),new D(-Nr,0,ji),new D(Nr,0,ji),new D(0,ji,-Nr),new D(0,ji,Nr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ol=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ol,ll,cl),this._renderer.xr.enabled=hl,e.scissorTest=!1,Wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ol=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ca,format:Ln,colorSpace:rs,depthBuffer:!1},r=Ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hx(s)),this._blurMaterial=Vx(s,e,t)}return r}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,al)}_sceneToCubeUV(e,t,n,r){const o=new Mn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Eu),h.toneMapping=Ri,h.autoClear=!1;const f=new Vr({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new Ct(new ua,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Eu),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):S===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const w=this._cubeSize;Wa(r,S*w,p>2?w:0,w,w),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===es||e.mapping===ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ct(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Wa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,al)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Tu[(r-s-1)%Tu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ct(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Ji;m>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const p=[];let S=0;for(let M=0;M<Ji;++M){const C=M/_,x=Math.exp(-C*C/2);p.push(x),M===0?S+=x:M<m&&(S+=2*x)}for(let M=0;M<p.length;M++)p[M]=p[M]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const y=this._sizeLods[r],b=3*y*(r>w-Gr?r-w+Gr:0),T=4*(this._cubeSize-y);Wa(t,b,T,3*y,2*y),c.setRenderTarget(t),c.render(u,al)}}function Hx(i){const e=[],t=[],n=[];let r=i;const s=i-Gr+1+Su.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Gr?c=Su[a-i+Gr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),w=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){const M=T%3*2/3-1,C=T>2?0:-1,x=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];S.set(x,_*g*T),w.set(d,m*g*T);const v=[T,T,T,T,T,T];y.set(v,p*g*T)}const b=new nt;b.setAttribute("position",new bt(S,_)),b.setAttribute("uv",new bt(w,m)),b.setAttribute("faceIndex",new bt(y,p)),e.push(b),r>Gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ru(i,e,t){const n=new fr(i,e,t);return n.texture.mapping=Ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Vx(i,e,t){const n=new Float32Array(Ji),r=new D(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Cu(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Pu(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function Gx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ql||c===Zl,h=c===es||c===ts;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Au(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new Au(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Wx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&zr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Xx(i,e,t,n){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let w=0,y=S.length;w<y;w+=3){const b=S[w+0],T=S[w+1],M=S[w+2];d.push(b,T,T,M,M,b)}}else if(g!==void 0){const S=g.array;_=g.version;for(let w=0,y=S.length/3-1;w<y;w+=3){const b=w+0,T=w+1,M=w+2;d.push(b,T,T,M,M,b)}}else return;const m=new(xd(d)?wd:Md)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Yx(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,s,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Zx(i,e,t){const n=new WeakMap,r=new xt;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let b=o.attributes.position.count*y,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const M=new Float32Array(b*T*4*u),C=new yd(M,b,T,u);C.type=ai,C.needsUpdate=!0;const x=y*4;for(let A=0;A<u;A++){const F=p[A],O=S[A],V=w[A],X=b*T*4*A;for(let G=0;G<F.count;G++){const q=G*x;g===!0&&(r.fromBufferAttribute(F,G),M[X+q+0]=r.x,M[X+q+1]=r.y,M[X+q+2]=r.z,M[X+q+3]=0),_===!0&&(r.fromBufferAttribute(O,G),M[X+q+4]=r.x,M[X+q+5]=r.y,M[X+q+6]=r.z,M[X+q+7]=0),m===!0&&(r.fromBufferAttribute(V,G),M[X+q+8]=r.x,M[X+q+9]=r.y,M[X+q+10]=r.z,M[X+q+11]=V.itemSize===4?r.w:1)}}d={count:u,texture:C,size:new Ee(b,T)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function jx(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Pd=new Bt,Du=new Rd(1,1),Dd=new yd,Id=new b_,Ld=new Td,Iu=[],Lu=[],Uu=new Float32Array(16),Ou=new Float32Array(9),Nu=new Float32Array(4);function xs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Iu[r];if(s===void 0&&(s=new Float32Array(r),Iu[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ro(i,e){let t=Lu[e];t===void 0&&(t=new Int32Array(e),Lu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $x(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function ev(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Nu.set(n),i.uniformMatrix2fv(this.addr,!1,Nu),Tt(t,n)}}function tv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Ou.set(n),i.uniformMatrix3fv(this.addr,!1,Ou),Tt(t,n)}}function nv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Uu.set(n),i.uniformMatrix4fv(this.addr,!1,Uu),Tt(t,n)}}function iv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function ov(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function uv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Du.compareFunction=gd,s=Du):s=Pd,t.setTexture2D(e||s,r)}function fv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Id,r)}function dv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ld,r)}function pv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Dd,r)}function mv(i){switch(i){case 5126:return $x;case 35664:return Kx;case 35665:return Jx;case 35666:return Qx;case 35674:return ev;case 35675:return tv;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return rv;case 35668:case 35672:return sv;case 35669:case 35673:return av;case 5125:return ov;case 36294:return lv;case 36295:return cv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return pv}}function _v(i,e){i.uniform1fv(this.addr,e)}function gv(i,e){const t=xs(e,this.size,2);i.uniform2fv(this.addr,t)}function xv(i,e){const t=xs(e,this.size,3);i.uniform3fv(this.addr,t)}function vv(i,e){const t=xs(e,this.size,4);i.uniform4fv(this.addr,t)}function yv(i,e){const t=xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bv(i,e){const t=xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mv(i,e){const t=xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wv(i,e){i.uniform1iv(this.addr,e)}function Sv(i,e){i.uniform2iv(this.addr,e)}function Ev(i,e){i.uniform3iv(this.addr,e)}function Tv(i,e){i.uniform4iv(this.addr,e)}function Av(i,e){i.uniform1uiv(this.addr,e)}function Rv(i,e){i.uniform2uiv(this.addr,e)}function Cv(i,e){i.uniform3uiv(this.addr,e)}function Pv(i,e){i.uniform4uiv(this.addr,e)}function Dv(i,e,t){const n=this.cache,r=e.length,s=Ro(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Pd,s[a])}function Iv(i,e,t){const n=this.cache,r=e.length,s=Ro(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Id,s[a])}function Lv(i,e,t){const n=this.cache,r=e.length,s=Ro(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ld,s[a])}function Uv(i,e,t){const n=this.cache,r=e.length,s=Ro(t,r);Et(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Dd,s[a])}function Ov(i){switch(i){case 5126:return _v;case 35664:return gv;case 35665:return xv;case 35666:return vv;case 35674:return yv;case 35675:return bv;case 35676:return Mv;case 5124:case 35670:return wv;case 35667:case 35671:return Sv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return Rv;case 36295:return Cv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Uv}}class Nv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mv(t.type)}}class Fv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ov(t.type)}}class kv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ul=/(\w+)(\])?(\[|\.)?/g;function Fu(i,e){i.seq.push(e),i.map[e.id]=e}function Bv(i,e,t){const n=i.name,r=n.length;for(ul.lastIndex=0;;){const s=ul.exec(n),a=ul.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Fu(t,l===void 0?new Nv(o,i,e):new Fv(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new kv(o),Fu(t,u)),t=u}}}class so{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Bv(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ku(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zv=37297;let Hv=0;function Vv(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Bu=new ve;function Gv(i){Ye._getMatrix(Bu,Ye.workingColorSpace,i);const e=`mat3( ${Bu.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case ho:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Vv(i.getShaderSource(e),a)}else return r}function Wv(i,e){const t=Gv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xv(i,e){let t;switch(e){case Ym:t="Linear";break;case qm:t="Reinhard";break;case Zm:t="Cineon";break;case jm:t="ACESFilmic";break;case Km:t="AgX";break;case Jm:t="Neutral";break;case $m:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xa=new D;function Yv(){Ye.getLuminanceCoefficients(Xa);const i=Xa.x.toFixed(4),e=Xa.y.toFixed(4),t=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function Zv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ls(i){return i!==""}function Hu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $v=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(i){return i.replace($v,Jv)}const Kv=new Map;function Jv(i,e){let t=Le[e];if(t===void 0){const n=Kv.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tc(t)}const Qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(i){return i.replace(Qv,ey)}function ey(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wu(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ty(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Em?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function ny(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function ry(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kc:e="ENVMAP_BLENDING_MULTIPLY";break;case Wm:e="ENVMAP_BLENDING_MIX";break;case Xm:e="ENVMAP_BLENDING_ADD";break}return e}function sy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ay(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=ty(t),l=ny(t),h=iy(t),u=ry(t),d=sy(t),f=qv(t),g=Zv(s),_=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),p.length>0&&(p+=`
`)):(m=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),p=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Le.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,Wv("linearToOutputTexel",t.outputColorSpace),Yv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),a=Tc(a),a=Hu(a,t),a=Vu(a,t),o=Tc(o),o=Hu(o,t),o=Vu(o,t),a=Gu(a),o=Gu(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=S+m+a,y=S+p+o,b=ku(r,r.VERTEX_SHADER,w),T=ku(r,r.FRAGMENT_SHADER,y);r.attachShader(_,b),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(A){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(b).trim(),V=r.getShaderInfoLog(T).trim();let X=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,b,T);else{const q=zu(r,b,"vertex"),H=zu(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+q+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||V==="")&&(G=!1);G&&(A.diagnostics={runnable:X,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(b),r.deleteShader(T),C=new so(r,_),x=jv(r,_)}let C;this.getUniforms=function(){return C===void 0&&M(this),C};let x;this.getAttributes=function(){return x===void 0&&M(this),x};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,zv)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let oy=0;class ly{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cy(e),t.set(e,n)),n}}class cy{constructor(e){this.id=oy++,this.code=e,this.usedTimes=0}}function hy(i,e,t,n,r,s,a){const o=new rh,c=new ly,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,v,A,F,O){const V=F.fog,X=O.geometry,G=x.isMeshStandardMaterial?F.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),H=q&&q.mapping===Ao?q.image.height:null,te=g[x.type];x.precision!==null&&(f=r.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const oe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,me=oe!==void 0?oe.length:0;let Te=0;X.morphAttributes.position!==void 0&&(Te=1),X.morphAttributes.normal!==void 0&&(Te=2),X.morphAttributes.color!==void 0&&(Te=3);let je,Y,Q,_e;if(te){const Je=Fn[te];je=Je.vertexShader,Y=Je.fragmentShader}else je=x.vertexShader,Y=x.fragmentShader,c.update(x),Q=c.getVertexShaderID(x),_e=c.getFragmentShaderID(x);const se=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ce=O.isInstancedMesh===!0,Oe=O.isBatchedMesh===!0,ht=!!x.map,Ve=!!x.matcap,_t=!!q,I=!!x.aoMap,_n=!!x.lightMap,Be=!!x.bumpMap,ze=!!x.normalMap,ye=!!x.displacementMap,rt=!!x.emissiveMap,xe=!!x.metalnessMap,P=!!x.roughnessMap,E=x.anisotropy>0,k=x.clearcoat>0,j=x.dispersion>0,K=x.iridescence>0,Z=x.sheen>0,ge=x.transmission>0,ae=E&&!!x.anisotropyMap,ue=k&&!!x.clearcoatMap,Ge=k&&!!x.clearcoatNormalMap,ee=k&&!!x.clearcoatRoughnessMap,fe=K&&!!x.iridescenceMap,we=K&&!!x.iridescenceThicknessMap,Ae=Z&&!!x.sheenColorMap,de=Z&&!!x.sheenRoughnessMap,He=!!x.specularMap,Ie=!!x.specularColorMap,it=!!x.specularIntensityMap,L=ge&&!!x.transmissionMap,ie=ge&&!!x.thicknessMap,W=!!x.gradientMap,$=!!x.alphaMap,ce=x.alphaTest>0,le=!!x.alphaHash,De=!!x.extensions;let dt=Ri;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(dt=i.toneMapping);const Ut={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:je,fragmentShader:Y,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&O._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&O.instanceColor!==null,instancingMorph:Ce&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:rs,alphaToCoverage:!!x.alphaToCoverage,map:ht,matcap:Ve,envMap:_t,envMapMode:_t&&q.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:_n,bumpMap:Be,normalMap:ze,displacementMap:d&&ye,emissiveMap:rt,normalMapObjectSpace:ze&&x.normalMapType===n_,normalMapTangentSpace:ze&&x.normalMapType===_d,metalnessMap:xe,roughnessMap:P,anisotropy:E,anisotropyMap:ae,clearcoat:k,clearcoatMap:ue,clearcoatNormalMap:Ge,clearcoatRoughnessMap:ee,dispersion:j,iridescence:K,iridescenceMap:fe,iridescenceThicknessMap:we,sheen:Z,sheenColorMap:Ae,sheenRoughnessMap:de,specularMap:He,specularColorMap:Ie,specularIntensityMap:it,transmission:ge,transmissionMap:L,thicknessMap:ie,gradientMap:W,opaque:x.transparent===!1&&x.blending===Yr&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:ce,alphaHash:le,combine:x.combine,mapUv:ht&&_(x.map.channel),aoMapUv:I&&_(x.aoMap.channel),lightMapUv:_n&&_(x.lightMap.channel),bumpMapUv:Be&&_(x.bumpMap.channel),normalMapUv:ze&&_(x.normalMap.channel),displacementMapUv:ye&&_(x.displacementMap.channel),emissiveMapUv:rt&&_(x.emissiveMap.channel),metalnessMapUv:xe&&_(x.metalnessMap.channel),roughnessMapUv:P&&_(x.roughnessMap.channel),anisotropyMapUv:ae&&_(x.anisotropyMap.channel),clearcoatMapUv:ue&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(x.sheenRoughnessMap.channel),specularMapUv:He&&_(x.specularMap.channel),specularColorMapUv:Ie&&_(x.specularColorMap.channel),specularIntensityMapUv:it&&_(x.specularIntensityMap.channel),transmissionMapUv:L&&_(x.transmissionMap.channel),thicknessMapUv:ie&&_(x.thicknessMap.channel),alphaMapUv:$&&_(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ze||E),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(ht||$),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Se,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Te,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:ht&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===Qe,decodeVideoTextureEmissive:rt&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===Qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===si,flipSided:x.side===Kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:De&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&x.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function p(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)v.push(A),v.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(S(v,x),w(v,x),v.push(i.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function S(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function w(x,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),x.push(o.mask)}function y(x){const v=g[x.type];let A;if(v){const F=Fn[v];A=L_.clone(F.uniforms)}else A=x.uniforms;return A}function b(x,v){let A;for(let F=0,O=h.length;F<O;F++){const V=h[F];if(V.cacheKey===v){A=V,++A.usedTimes;break}}return A===void 0&&(A=new ay(i,v,x,s),h.push(A)),A}function T(x){if(--x.usedTimes===0){const v=h.indexOf(x);h[v]=h[h.length-1],h.pop(),x.destroy()}}function M(x){c.remove(x)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:T,releaseShaderCache:M,programs:h,dispose:C}}function uy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function fy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||fy),n.length>1&&n.sort(d||Xu),r.length>1&&r.sort(d||Xu)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function dy(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Yu,i.set(n,[a])):r>=s.length?(a=new Yu,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function py(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ue};break;case"SpotLight":t={position:new D,direction:new D,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function my(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _y=0;function gy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xy(i){const e=new py,t=my(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const r=new D,s=new at,a=new at;function o(l){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,w=0,y=0,b=0,T=0,M=0;l.sort(gy);for(let x=0,v=l.length;x<v;x++){const A=l[x],F=A.color,O=A.intensity,V=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=F.r*O,u+=F.g*O,d+=F.b*O;else if(A.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(A.sh.coefficients[G],O);M++}else if(A.isDirectionalLight){const G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const q=A.shadow,H=t.get(A);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=A.shadow.matrix,S++}n.directional[f]=G,f++}else if(A.isSpotLight){const G=e.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(F).multiplyScalar(O),G.distance=V,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,n.spot[_]=G;const q=A.shadow;if(A.map&&(n.spotLightMap[b]=A.map,b++,q.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[_]=q.matrix,A.castShadow){const H=t.get(A);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=X,y++}_++}else if(A.isRectAreaLight){const G=e.get(A);G.color.copy(F).multiplyScalar(O),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=G,m++}else if(A.isPointLight){const G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){const q=A.shadow,H=t.get(A);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=A.shadow.matrix,w++}n.point[g]=G,g++}else if(A.isHemisphereLight){const G=e.get(A);G.skyColor.copy(A.color).multiplyScalar(O),G.groundColor.copy(A.groundColor).multiplyScalar(O),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==w||C.numSpotShadows!==y||C.numSpotMaps!==b||C.numLightProbes!==M)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=M,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=w,C.numSpotShadows=y,C.numSpotMaps=b,C.numLightProbes=M,n.version=_y++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const w=l[p];if(w.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),u++}else if(w.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function qu(i){const e=new xy(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function vy(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new qu(i),e.set(r,[o])):s>=a.length?(o=new qu(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const yy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,by=`uniform sampler2D shadow_pass;
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
}`;function My(i,e,t){let n=new Ad;const r=new Ee,s=new Ee,a=new xt,o=new G_({depthPacking:t_}),c=new W_,l={},h=t.maxTextureSize,u={[Ui]:Kt,[Kt]:Ui,[si]:si},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:yy,fragmentShader:by}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new nt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ct(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rd;let p=this.type;this.render=function(T,M,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const x=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ai),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==ei&&this.type===ei,V=p===ei&&this.type!==ei;for(let X=0,G=T.length;X<G;X++){const q=T[X],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const te=H.getFrameExtents();if(r.multiply(te),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,H.mapSize.y=s.y)),H.map===null||O===!0||V===!0){const me=this.type!==ei?{minFilter:Un,magFilter:Un}:{};H.map!==null&&H.map.dispose(),H.map=new fr(r.x,r.y,me),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const oe=H.getViewportCount();for(let me=0;me<oe;me++){const Te=H.getViewport(me);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),F.viewport(a),H.updateMatrices(q,me),n=H.getFrustum(),y(M,C,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===ei&&S(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,v,A)};function S(T,M){const C=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new fr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(M,null,C,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(M,null,C,f,_,null)}function w(T,M,C,x){let v=null;const A=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)v=A;else if(v=C.isPointLight===!0?c:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const F=v.uuid,O=M.uuid;let V=l[F];V===void 0&&(V={},l[F]=V);let X=V[O];X===void 0&&(X=v.clone(),V[O]=X,M.addEventListener("dispose",b)),v=X}if(v.visible=M.visible,v.wireframe=M.wireframe,x===ei?v.side=M.shadowSide!==null?M.shadowSide:M.side:v.side=M.shadowSide!==null?M.shadowSide:u[M.side],v.alphaMap=M.alphaMap,v.alphaTest=M.alphaTest,v.map=M.map,v.clipShadows=M.clipShadows,v.clippingPlanes=M.clippingPlanes,v.clipIntersection=M.clipIntersection,v.displacementMap=M.displacementMap,v.displacementScale=M.displacementScale,v.displacementBias=M.displacementBias,v.wireframeLinewidth=M.wireframeLinewidth,v.linewidth=M.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=i.properties.get(v);F.light=C}return v}function y(T,M,C,x,v){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===ei)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const O=e.update(T),V=T.material;if(Array.isArray(V)){const X=O.groups;for(let G=0,q=X.length;G<q;G++){const H=X[G],te=V[H.materialIndex];if(te&&te.visible){const oe=w(T,te,x,v);T.onBeforeShadow(i,T,M,C,O,oe,H),i.renderBufferDirect(C,null,O,oe,T,H),T.onAfterShadow(i,T,M,C,O,oe,H)}}}else if(V.visible){const X=w(T,V,x,v);T.onBeforeShadow(i,T,M,C,O,X,null),i.renderBufferDirect(C,null,O,X,T,null),T.onAfterShadow(i,T,M,C,O,X,null)}}const F=T.children;for(let O=0,V=F.length;O<V;O++)y(F[O],M,C,x,v)}function b(T){T.target.removeEventListener("dispose",b);for(const C in l){const x=l[C],v=T.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}const wy={[zl]:Hl,[Vl]:Xl,[Gl]:Yl,[Qr]:Wl,[Hl]:zl,[Xl]:Vl,[Yl]:Gl,[Wl]:Qr};function Sy(i,e){function t(){let L=!1;const ie=new xt;let W=null;const $=new xt(0,0,0,0);return{setMask:function(ce){W!==ce&&!L&&(i.colorMask(ce,ce,ce,ce),W=ce)},setLocked:function(ce){L=ce},setClear:function(ce,le,De,dt,Ut){Ut===!0&&(ce*=dt,le*=dt,De*=dt),ie.set(ce,le,De,dt),$.equals(ie)===!1&&(i.clearColor(ce,le,De,dt),$.copy(ie))},reset:function(){L=!1,W=null,$.set(-1,0,0,0)}}}function n(){let L=!1,ie=!1,W=null,$=null,ce=null;return{setReversed:function(le){if(ie!==le){const De=e.get("EXT_clip_control");ie?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const dt=ce;ce=null,this.setClear(dt)}ie=le},getReversed:function(){return ie},setTest:function(le){le?se(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(le){W!==le&&!L&&(i.depthMask(le),W=le)},setFunc:function(le){if(ie&&(le=wy[le]),$!==le){switch(le){case zl:i.depthFunc(i.NEVER);break;case Hl:i.depthFunc(i.ALWAYS);break;case Vl:i.depthFunc(i.LESS);break;case Qr:i.depthFunc(i.LEQUAL);break;case Gl:i.depthFunc(i.EQUAL);break;case Wl:i.depthFunc(i.GEQUAL);break;case Xl:i.depthFunc(i.GREATER);break;case Yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=le}},setLocked:function(le){L=le},setClear:function(le){ce!==le&&(ie&&(le=1-le),i.clearDepth(le),ce=le)},reset:function(){L=!1,W=null,$=null,ce=null,ie=!1}}}function r(){let L=!1,ie=null,W=null,$=null,ce=null,le=null,De=null,dt=null,Ut=null;return{setTest:function(Je){L||(Je?se(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Je){ie!==Je&&!L&&(i.stencilMask(Je),ie=Je)},setFunc:function(Je,An,qn){(W!==Je||$!==An||ce!==qn)&&(i.stencilFunc(Je,An,qn),W=Je,$=An,ce=qn)},setOp:function(Je,An,qn){(le!==Je||De!==An||dt!==qn)&&(i.stencilOp(Je,An,qn),le=Je,De=An,dt=qn)},setLocked:function(Je){L=Je},setClear:function(Je){Ut!==Je&&(i.clearStencil(Je),Ut=Je)},reset:function(){L=!1,ie=null,W=null,$=null,ce=null,le=null,De=null,dt=null,Ut=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,w=null,y=null,b=null,T=null,M=new Ue(0,0,0),C=0,x=!1,v=null,A=null,F=null,O=null,V=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,q=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=q>=2);let te=null,oe={};const me=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),je=new xt().fromArray(me),Y=new xt().fromArray(Te);function Q(L,ie,W,$){const ce=new Uint8Array(4),le=i.createTexture();i.bindTexture(L,le),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<W;De++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(ie+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return le}const _e={};_e[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(Qr),Be(!1),ze(Gh),se(i.CULL_FACE),I(Ai);function se(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Se(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ce(L,ie){return u[L]!==ie?(i.bindFramebuffer(L,ie),u[L]=ie,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ie),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Oe(L,ie){let W=f,$=!1;if(L){W=d.get(ie),W===void 0&&(W=[],d.set(ie,W));const ce=L.textures;if(W.length!==ce.length||W[0]!==i.COLOR_ATTACHMENT0){for(let le=0,De=ce.length;le<De;le++)W[le]=i.COLOR_ATTACHMENT0+le;W.length=ce.length,$=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,$=!0);$&&i.drawBuffers(W)}function ht(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const Ve={[Ki]:i.FUNC_ADD,[Am]:i.FUNC_SUBTRACT,[Rm]:i.FUNC_REVERSE_SUBTRACT};Ve[Cm]=i.MIN,Ve[Pm]=i.MAX;const _t={[Dm]:i.ZERO,[Im]:i.ONE,[Lm]:i.SRC_COLOR,[kl]:i.SRC_ALPHA,[Bm]:i.SRC_ALPHA_SATURATE,[Fm]:i.DST_COLOR,[Om]:i.DST_ALPHA,[Um]:i.ONE_MINUS_SRC_COLOR,[Bl]:i.ONE_MINUS_SRC_ALPHA,[km]:i.ONE_MINUS_DST_COLOR,[Nm]:i.ONE_MINUS_DST_ALPHA,[zm]:i.CONSTANT_COLOR,[Hm]:i.ONE_MINUS_CONSTANT_COLOR,[Vm]:i.CONSTANT_ALPHA,[Gm]:i.ONE_MINUS_CONSTANT_ALPHA};function I(L,ie,W,$,ce,le,De,dt,Ut,Je){if(L===Ai){_===!0&&(Se(i.BLEND),_=!1);return}if(_===!1&&(se(i.BLEND),_=!0),L!==Tm){if(L!==m||Je!==x){if((p!==Ki||y!==Ki)&&(i.blendEquation(i.FUNC_ADD),p=Ki,y=Ki),Je)switch(L){case Yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wh:i.blendFunc(i.ONE,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,w=null,b=null,T=null,M.set(0,0,0),C=0,m=L,x=Je}return}ce=ce||ie,le=le||W,De=De||$,(ie!==p||ce!==y)&&(i.blendEquationSeparate(Ve[ie],Ve[ce]),p=ie,y=ce),(W!==S||$!==w||le!==b||De!==T)&&(i.blendFuncSeparate(_t[W],_t[$],_t[le],_t[De]),S=W,w=$,b=le,T=De),(dt.equals(M)===!1||Ut!==C)&&(i.blendColor(dt.r,dt.g,dt.b,Ut),M.copy(dt),C=Ut),m=L,x=!1}function _n(L,ie){L.side===si?Se(i.CULL_FACE):se(i.CULL_FACE);let W=L.side===Kt;ie&&(W=!W),Be(W),L.blending===Yr&&L.transparent===!1?I(Ai):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const $=L.stencilWrite;o.setTest($),$&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),rt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){v!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),v=L)}function ze(L){L!==wm?(se(i.CULL_FACE),L!==A&&(L===Gh?i.cullFace(i.BACK):L===Sm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),A=L}function ye(L){L!==F&&(G&&i.lineWidth(L),F=L)}function rt(L,ie,W){L?(se(i.POLYGON_OFFSET_FILL),(O!==ie||V!==W)&&(i.polygonOffset(ie,W),O=ie,V=W)):Se(i.POLYGON_OFFSET_FILL)}function xe(L){L?se(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function P(L){L===void 0&&(L=i.TEXTURE0+X-1),te!==L&&(i.activeTexture(L),te=L)}function E(L,ie,W){W===void 0&&(te===null?W=i.TEXTURE0+X-1:W=te);let $=oe[W];$===void 0&&($={type:void 0,texture:void 0},oe[W]=$),($.type!==L||$.texture!==ie)&&(te!==W&&(i.activeTexture(W),te=W),i.bindTexture(L,ie||_e[L]),$.type=L,$.texture=ie)}function k(){const L=oe[te];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(L){je.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),je.copy(L))}function de(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function He(L,ie){let W=l.get(ie);W===void 0&&(W=new WeakMap,l.set(ie,W));let $=W.get(L);$===void 0&&($=i.getUniformBlockIndex(ie,L.name),W.set(L,$))}function Ie(L,ie){const $=l.get(ie).get(L);c.get(ie)!==$&&(i.uniformBlockBinding(ie,$,L.__bindingPointIndex),c.set(ie,$))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},te=null,oe={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,w=null,y=null,b=null,T=null,M=new Ue(0,0,0),C=0,x=!1,v=null,A=null,F=null,O=null,V=null,je.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Se,bindFramebuffer:Ce,drawBuffers:Oe,useProgram:ht,setBlending:I,setMaterial:_n,setFlipSided:Be,setCullFace:ze,setLineWidth:ye,setPolygonOffset:rt,setScissorTest:xe,activeTexture:P,bindTexture:E,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:K,texImage2D:fe,texImage3D:we,updateUBOMapping:He,uniformBlockBinding:Ie,texStorage2D:Ge,texStorage3D:ee,texSubImage2D:Z,texSubImage3D:ge,compressedTexSubImage2D:ae,compressedTexSubImage3D:ue,scissor:Ae,viewport:de,reset:it}}function Ey(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return f?new OffscreenCanvas(P,E):qs("canvas")}function _(P,E,k){let j=1;const K=xe(P);if((K.width>k||K.height>k)&&(j=k/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(j*K.width),ge=Math.floor(j*K.height);u===void 0&&(u=g(Z,ge));const ae=E?g(Z,ge):u;return ae.width=Z,ae.height=ge,ae.getContext("2d").drawImage(P,0,0,Z,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Z+"x"+ge+")."),ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(P,E,k,j,K=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=E;if(E===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8)),E===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),E===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8)),E===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),E===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),E===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),E===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),E===i.RGBA){const ge=K?ho:Ye.getTransfer(j);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=ge===Qe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(P,E){let k;return P?E===null||E===ur||E===ns?k=i.DEPTH24_STENCIL8:E===ai?k=i.DEPTH32F_STENCIL8:E===Ys&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ur||E===ns?k=i.DEPTH_COMPONENT24:E===ai?k=i.DEPTH_COMPONENT32F:E===Ys&&(k=i.DEPTH_COMPONENT16),k}function b(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Un&&P.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function T(P){const E=P.target;E.removeEventListener("dispose",T),C(E),E.isVideoTexture&&h.delete(E)}function M(P){const E=P.target;E.removeEventListener("dispose",M),v(E)}function C(P){const E=n.get(P);if(E.__webglInit===void 0)return;const k=P.source,j=d.get(k);if(j){const K=j[E.__cacheKey];K.usedTimes--,K.usedTimes===0&&x(P),Object.keys(j).length===0&&d.delete(k)}n.remove(P)}function x(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const k=P.source,j=d.get(k);delete j[E.__cacheKey],a.memory.textures--}function v(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let K=0;K<E.__webglFramebuffer[j].length;K++)i.deleteFramebuffer(E.__webglFramebuffer[j][K]);else i.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)i.deleteFramebuffer(E.__webglFramebuffer[j]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=P.textures;for(let j=0,K=k.length;j<K;j++){const Z=n.get(k[j]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(k[j])}n.remove(P)}let A=0;function F(){A=0}function O(){const P=A;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),A+=1,P}function V(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function X(P,E){const k=n.get(P);if(P.isVideoTexture&&ye(P),P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,P,E);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+E)}function G(P,E){const k=n.get(P);if(P.version>0&&k.__version!==P.version){Y(k,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+E)}function q(P,E){const k=n.get(P);if(P.version>0&&k.__version!==P.version){Y(k,P,E);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+E)}function H(P,E){const k=n.get(P);if(P.version>0&&k.__version!==P.version){Q(k,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+E)}const te={[jl]:i.REPEAT,[er]:i.CLAMP_TO_EDGE,[$l]:i.MIRRORED_REPEAT},oe={[Un]:i.NEAREST,[Qm]:i.NEAREST_MIPMAP_NEAREST,[ya]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Fo]:i.LINEAR_MIPMAP_NEAREST,[tr]:i.LINEAR_MIPMAP_LINEAR},me={[i_]:i.NEVER,[c_]:i.ALWAYS,[r_]:i.LESS,[gd]:i.LEQUAL,[s_]:i.EQUAL,[l_]:i.GEQUAL,[a_]:i.GREATER,[o_]:i.NOTEQUAL};function Te(P,E){if(E.type===ai&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===Fo||E.magFilter===ya||E.magFilter===tr||E.minFilter===zn||E.minFilter===Fo||E.minFilter===ya||E.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,te[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,te[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,te[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,oe[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,oe[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==ya&&E.minFilter!==tr||E.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function je(P,E){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",T));const j=E.source;let K=d.get(j);K===void 0&&(K={},d.set(j,K));const Z=V(E);if(Z!==P.__cacheKey){K[Z]===void 0&&(K[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[Z].usedTimes++;const ge=K[P.__cacheKey];ge!==void 0&&(K[P.__cacheKey].usedTimes--,ge.usedTimes===0&&x(E)),P.__cacheKey=Z,P.__webglTexture=K[Z].texture}return k}function Y(P,E,k){let j=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=i.TEXTURE_3D);const K=je(P,E),Z=E.source;t.bindTexture(j,P.__webglTexture,i.TEXTURE0+k);const ge=n.get(Z);if(Z.version!==ge.__version||K===!0){t.activeTexture(i.TEXTURE0+k);const ae=Ye.getPrimaries(Ye.workingColorSpace),ue=E.colorSpace===bi?null:Ye.getPrimaries(E.colorSpace),Ge=E.colorSpace===bi||ae===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ee=_(E.image,!1,r.maxTextureSize);ee=rt(E,ee);const fe=s.convert(E.format,E.colorSpace),we=s.convert(E.type);let Ae=w(E.internalFormat,fe,we,E.colorSpace,E.isVideoTexture);Te(j,E);let de;const He=E.mipmaps,Ie=E.isVideoTexture!==!0,it=ge.__version===void 0||K===!0,L=Z.dataReady,ie=b(E,ee);if(E.isDepthTexture)Ae=y(E.format===is,E.type),it&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,Ae,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Ae,ee.width,ee.height,0,fe,we,null));else if(E.isDataTexture)if(He.length>0){Ie&&it&&t.texStorage2D(i.TEXTURE_2D,ie,Ae,He[0].width,He[0].height);for(let W=0,$=He.length;W<$;W++)de=He[W],Ie?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,de.width,de.height,fe,we,de.data):t.texImage2D(i.TEXTURE_2D,W,Ae,de.width,de.height,0,fe,we,de.data);E.generateMipmaps=!1}else Ie?(it&&t.texStorage2D(i.TEXTURE_2D,ie,Ae,ee.width,ee.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,fe,we,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,ee.width,ee.height,0,fe,we,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ie&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Ae,He[0].width,He[0].height,ee.depth);for(let W=0,$=He.length;W<$;W++)if(de=He[W],E.format!==Ln)if(fe!==null)if(Ie){if(L)if(E.layerUpdates.size>0){const ce=wu(de.width,de.height,E.format,E.type);for(const le of E.layerUpdates){const De=de.data.subarray(le*ce/de.data.BYTES_PER_ELEMENT,(le+1)*ce/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,le,de.width,de.height,1,fe,De)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,ee.depth,fe,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ae,de.width,de.height,ee.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,ee.depth,fe,we,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Ae,de.width,de.height,ee.depth,0,fe,we,de.data)}else{Ie&&it&&t.texStorage2D(i.TEXTURE_2D,ie,Ae,He[0].width,He[0].height);for(let W=0,$=He.length;W<$;W++)de=He[W],E.format!==Ln?fe!==null?Ie?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,de.width,de.height,fe,we,de.data):t.texImage2D(i.TEXTURE_2D,W,Ae,de.width,de.height,0,fe,we,de.data)}else if(E.isDataArrayTexture)if(Ie){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Ae,ee.width,ee.height,ee.depth),L)if(E.layerUpdates.size>0){const W=wu(ee.width,ee.height,E.format,E.type);for(const $ of E.layerUpdates){const ce=ee.data.subarray($*W/ee.data.BYTES_PER_ELEMENT,($+1)*W/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,fe,we,ce)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,we,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,ee.width,ee.height,ee.depth,0,fe,we,ee.data);else if(E.isData3DTexture)Ie?(it&&t.texStorage3D(i.TEXTURE_3D,ie,Ae,ee.width,ee.height,ee.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,we,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,ee.width,ee.height,ee.depth,0,fe,we,ee.data);else if(E.isFramebufferTexture){if(it)if(Ie)t.texStorage2D(i.TEXTURE_2D,ie,Ae,ee.width,ee.height);else{let W=ee.width,$=ee.height;for(let ce=0;ce<ie;ce++)t.texImage2D(i.TEXTURE_2D,ce,Ae,W,$,0,fe,we,null),W>>=1,$>>=1}}else if(He.length>0){if(Ie&&it){const W=xe(He[0]);t.texStorage2D(i.TEXTURE_2D,ie,Ae,W.width,W.height)}for(let W=0,$=He.length;W<$;W++)de=He[W],Ie?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,fe,we,de):t.texImage2D(i.TEXTURE_2D,W,Ae,fe,we,de);E.generateMipmaps=!1}else if(Ie){if(it){const W=xe(ee);t.texStorage2D(i.TEXTURE_2D,ie,Ae,W.width,W.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,we,ee)}else t.texImage2D(i.TEXTURE_2D,0,Ae,fe,we,ee);m(E)&&p(j),ge.__version=Z.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Q(P,E,k){if(E.image.length!==6)return;const j=je(P,E),K=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+k);const Z=n.get(K);if(K.version!==Z.__version||j===!0){t.activeTexture(i.TEXTURE0+k);const ge=Ye.getPrimaries(Ye.workingColorSpace),ae=E.colorSpace===bi?null:Ye.getPrimaries(E.colorSpace),ue=E.colorSpace===bi||ge===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ge=E.isCompressedTexture||E.image[0].isCompressedTexture,ee=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let $=0;$<6;$++)!Ge&&!ee?fe[$]=_(E.image[$],!0,r.maxCubemapSize):fe[$]=ee?E.image[$].image:E.image[$],fe[$]=rt(E,fe[$]);const we=fe[0],Ae=s.convert(E.format,E.colorSpace),de=s.convert(E.type),He=w(E.internalFormat,Ae,de,E.colorSpace),Ie=E.isVideoTexture!==!0,it=Z.__version===void 0||j===!0,L=K.dataReady;let ie=b(E,we);Te(i.TEXTURE_CUBE_MAP,E);let W;if(Ge){Ie&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,He,we.width,we.height);for(let $=0;$<6;$++){W=fe[$].mipmaps;for(let ce=0;ce<W.length;ce++){const le=W[ce];E.format!==Ln?Ae!==null?Ie?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,le.width,le.height,Ae,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,He,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,le.width,le.height,Ae,de,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,He,le.width,le.height,0,Ae,de,le.data)}}}else{if(W=E.mipmaps,Ie&&it){W.length>0&&ie++;const $=xe(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,He,$.width,$.height)}for(let $=0;$<6;$++)if(ee){Ie?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,fe[$].width,fe[$].height,Ae,de,fe[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,fe[$].width,fe[$].height,0,Ae,de,fe[$].data);for(let ce=0;ce<W.length;ce++){const De=W[ce].image[$].image;Ie?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,De.width,De.height,Ae,de,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,He,De.width,De.height,0,Ae,de,De.data)}}else{Ie?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,de,fe[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,Ae,de,fe[$]);for(let ce=0;ce<W.length;ce++){const le=W[ce];Ie?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Ae,de,le.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,He,Ae,de,le.image[$])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),Z.__version=K.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function _e(P,E,k,j,K,Z){const ge=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),ue=w(k.internalFormat,ge,ae,k.colorSpace),Ge=n.get(E),ee=n.get(k);if(ee.__renderTarget=E,!Ge.__hasExternalTextures){const fe=Math.max(1,E.width>>Z),we=Math.max(1,E.height>>Z);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,Z,ue,fe,we,E.depth,0,ge,ae,null):t.texImage2D(K,Z,ue,fe,we,0,ge,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ze(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,ee.__webglTexture,0,Be(E)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,K,ee.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(P,E,k){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const j=E.depthTexture,K=j&&j.isDepthTexture?j.type:null,Z=y(E.stencilBuffer,K),ge=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=Be(E);ze(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Z,E.width,E.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Z,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Z,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,P)}else{const j=E.textures;for(let K=0;K<j.length;K++){const Z=j[K],ge=s.convert(Z.format,Z.colorSpace),ae=s.convert(Z.type),ue=w(Z.internalFormat,ge,ae,Z.colorSpace),Ge=Be(E);k&&ze(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,ue,E.width,E.height):ze(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge,ue,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ue,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(E.depthTexture);j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const K=j.__webglTexture,Z=Be(E);if(E.depthTexture.format===qr)ze(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(E.depthTexture.format===is)ze(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ce(P){const E=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){const K=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),E.__depthDisposeCallback=K}E.__boundDepthTexture=j}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Se(E.__webglFramebuffer,P)}else if(k){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=i.createRenderbuffer(),se(E.__webglDepthbuffer[j],P,!1);else{const K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),se(E.__webglDepthbuffer,P,!1);else{const j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(P,E,k){const j=n.get(P);E!==void 0&&_e(j.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ce(P)}function ht(P){const E=P.texture,k=n.get(P),j=n.get(E);P.addEventListener("dispose",M);const K=P.textures,Z=P.isWebGLCubeRenderTarget===!0,ge=K.length>1;if(ge||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=E.version,a.memory.textures++),Z){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let ue=0;ue<E.mipmaps.length;ue++)k.__webglFramebuffer[ae][ue]=i.createFramebuffer()}else k.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)k.__webglFramebuffer[ae]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ge)for(let ae=0,ue=K.length;ae<ue;ae++){const Ge=n.get(K[ae]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&ze(P)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){const ue=K[ae];k.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);const Ge=s.convert(ue.format,ue.colorSpace),ee=s.convert(ue.type),fe=w(ue.internalFormat,Ge,ee,ue.colorSpace,P.isXRRenderTarget===!0),we=Be(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,fe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),se(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Te(i.TEXTURE_CUBE_MAP,E);for(let ae=0;ae<6;ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)_e(k.__webglFramebuffer[ae][ue],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else _e(k.__webglFramebuffer[ae],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ae=0,ue=K.length;ae<ue;ae++){const Ge=K[ae],ee=n.get(Ge);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),Te(i.TEXTURE_2D,Ge),_e(k.__webglFramebuffer,P,Ge,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),m(Ge)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ae=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),Te(ae,E),E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)_e(k.__webglFramebuffer[ue],P,E,i.COLOR_ATTACHMENT0,ae,ue);else _e(k.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,ae,0);m(E)&&p(ae),t.unbindTexture()}P.depthBuffer&&Ce(P)}function Ve(P){const E=P.textures;for(let k=0,j=E.length;k<j;k++){const K=E[k];if(m(K)){const Z=S(P),ge=n.get(K).__webglTexture;t.bindTexture(Z,ge),p(Z),t.unbindTexture()}}}const _t=[],I=[];function _n(P){if(P.samples>0){if(ze(P)===!1){const E=P.textures,k=P.width,j=P.height;let K=i.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(P),ae=E.length>1;if(ae)for(let ue=0;ue<E.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[ue]);const Ge=n.get(E[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,k,j,0,0,k,j,K,i.NEAREST),c===!0&&(_t.length=0,I.length=0,_t.push(i.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(_t.push(Z),I.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let ue=0;ue<E.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,ge.__webglColorRenderbuffer[ue]);const Ge=n.get(E[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Be(P){return Math.min(r.maxSamples,P.samples)}function ze(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ye(P){const E=a.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function rt(P,E){const k=P.colorSpace,j=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==rs&&k!==bi&&(Ye.getTransfer(k)===Qe?(j!==Ln||K!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=Oe,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ze}function Ty(i,e){function t(n,r=bi){let s;const a=Ye.getTransfer(r);if(n===ci)return i.UNSIGNED_BYTE;if(n===Qc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===eh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ad)return i.BYTE;if(n===od)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===Jc)return i.INT;if(n===ur)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===ca)return i.HALF_FLOAT;if(n===cd)return i.ALPHA;if(n===hd)return i.RGB;if(n===Ln)return i.RGBA;if(n===ud)return i.LUMINANCE;if(n===fd)return i.LUMINANCE_ALPHA;if(n===qr)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===dd)return i.RED;if(n===th)return i.RED_INTEGER;if(n===pd)return i.RG;if(n===nh)return i.RG_INTEGER;if(n===ih)return i.RGBA_INTEGER;if(n===Qa||n===eo||n===to||n===no)if(a===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kl||n===Jl||n===Ql||n===ec)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ql)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===nc||n===ic)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===tc||n===nc)return a===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ic)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rc||n===sc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===_c||n===gc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===rc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_c)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===io||n===xc||n===vc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===io)return a===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===md||n===yc||n===bc||n===Mc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===io)return s.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ay={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ay)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Va;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cy=`
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

}`;class Py{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Bt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hi({vertexShader:Ry,fragmentShader:Cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new as(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dy extends xr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new Py,m=t.getContextAttributes();let p=null,S=null;const w=[],y=[],b=new Ee;let T=null;const M=new Mn;M.viewport=new xt;const C=new Mn;C.viewport=new xt;const x=[M,C],v=new $_;let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=w[Y];return Q===void 0&&(Q=new fl,w[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=w[Y];return Q===void 0&&(Q=new fl,w[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=w[Y];return Q===void 0&&(Q=new fl,w[Y]=Q),Q.getHandSpace()};function O(Y){const Q=y.indexOf(Y.inputSource);if(Q===-1)return;const _e=w[Q];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,l||a),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",X);for(let Y=0;Y<w.length;Y++){const Q=y[Y];Q!==null&&(y[Y]=null,w[Y].disconnect(Q))}A=null,F=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,r=null,S=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",V),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let _e=null,se=null,Se=null;m.depth&&(Se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?is:qr,se=m.stencil?ns:ur);const Ce={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new fr(d.textureWidth,d.textureHeight,{format:Ln,type:ci,depthTexture:new Rd(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new fr(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),je.setContext(r),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Y){for(let Q=0;Q<Y.removed.length;Q++){const _e=Y.removed[Q],se=y.indexOf(_e);se>=0&&(y[se]=null,w[se].disconnect(_e))}for(let Q=0;Q<Y.added.length;Q++){const _e=Y.added[Q];let se=y.indexOf(_e);if(se===-1){for(let Ce=0;Ce<w.length;Ce++)if(Ce>=y.length){y.push(_e),se=Ce;break}else if(y[Ce]===null){y[Ce]=_e,se=Ce;break}if(se===-1)break}const Se=w[se];Se&&Se.connect(_e)}}const G=new D,q=new D;function H(Y,Q,_e){G.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(_e.matrixWorld);const se=G.distanceTo(q),Se=Q.projectionMatrix.elements,Ce=_e.projectionMatrix.elements,Oe=Se[14]/(Se[10]-1),ht=Se[14]/(Se[10]+1),Ve=(Se[9]+1)/Se[5],_t=(Se[9]-1)/Se[5],I=(Se[8]-1)/Se[0],_n=(Ce[8]+1)/Ce[0],Be=Oe*I,ze=Oe*_n,ye=se/(-I+_n),rt=ye*-I;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(rt),Y.translateZ(ye),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Se[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const xe=Oe+ye,P=ht+ye,E=Be-rt,k=ze+(se-rt),j=Ve*ht/P*xe,K=_t*ht/P*xe;Y.projectionMatrix.makePerspective(E,k,j,K,xe,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function te(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Q=Y.near,_e=Y.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),v.near=C.near=M.near=Q,v.far=C.far=M.far=_e,(A!==v.near||F!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,F=v.far),M.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,v.layers.mask=M.layers.mask|C.layers.mask;const se=Y.parent,Se=v.cameras;te(v,se);for(let Ce=0;Ce<Se.length;Ce++)te(Se[Ce],se);Se.length===2?H(v,M,C):v.projectionMatrix.copy(M.projectionMatrix),oe(Y,v,se)};function oe(Y,Q,_e){_e===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=wc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let me=null;function Te(Y,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){const _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let se=!1;_e.length!==v.cameras.length&&(v.cameras.length=0,se=!0);for(let Ce=0;Ce<_e.length;Ce++){const Oe=_e[Ce];let ht=null;if(f!==null)ht=f.getViewport(Oe);else{const _t=u.getViewSubImage(d,Oe);ht=_t.viewport,Ce===0&&(e.setRenderTargetTextures(S,_t.colorTexture,d.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(S))}let Ve=x[Ce];Ve===void 0&&(Ve=new Mn,Ve.layers.enable(Ce),Ve.viewport=new xt,x[Ce]=Ve),Ve.matrix.fromArray(Oe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Oe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ht.x,ht.y,ht.width,ht.height),Ce===0&&(v.matrix.copy(Ve.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),se===!0&&v.cameras.push(Ve)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const Ce=u.getDepthInformation(_e[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,r.renderState)}}for(let _e=0;_e<w.length;_e++){const se=y[_e],Se=w[_e];se!==null&&Se!==void 0&&Se.update(se,Q,l||a)}me&&me(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const je=new Cd;je.setAnimationLoop(Te),this.setAnimationLoop=function(Y){me=Y},this.dispose=function(){}}}const Yi=new Xn,Iy=new at;function Ly(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,w,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),w=S.envMap,y=S.envMapRotation;w&&(m.envMap.value=w,Yi.copy(y),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(Yi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Uy(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){const y=w.program;n.uniformBlockBinding(S,y)}function l(S,w){let y=r[S.id];y===void 0&&(g(S),y=h(S),r[S.id]=y,S.addEventListener("dispose",m));const b=w.program;n.updateUBOMapping(S,b);const T=e.render.frame;s[S.id]!==T&&(d(S),s[S.id]=T)}function h(S){const w=u();S.__bindingPointIndex=w;const y=i.createBuffer(),b=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const w=r[S.id],y=S.uniforms,b=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,M=y.length;T<M;T++){const C=Array.isArray(y[T])?y[T]:[y[T]];for(let x=0,v=C.length;x<v;x++){const A=C[x];if(f(A,T,x,b)===!0){const F=A.__offset,O=Array.isArray(A.value)?A.value:[A.value];let V=0;for(let X=0;X<O.length;X++){const G=O[X],q=_(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+V,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,V),V+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,w,y,b){const T=S.value,M=w+"_"+y;if(b[M]===void 0)return typeof T=="number"||typeof T=="boolean"?b[M]=T:b[M]=T.clone(),!0;{const C=b[M];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return b[M]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(S){const w=S.uniforms;let y=0;const b=16;for(let M=0,C=w.length;M<C;M++){const x=Array.isArray(w[M])?w[M]:[w[M]];for(let v=0,A=x.length;v<A;v++){const F=x[v],O=Array.isArray(F.value)?F.value:[F.value];for(let V=0,X=O.length;V<X;V++){const G=O[V],q=_(G),H=y%b,te=H%q.boundary,oe=H+te;y+=te,oe!==0&&b-oe<q.storage&&(y+=b-oe),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=q.storage}}}const T=y%b;return T>0&&(y+=b-T),S.__size=y,S.__cache={},this}function _(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Oy{constructor(e={}){const{canvas:t=f_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=Ri,this.toneMappingExposure=1;const y=this;let b=!1,T=0,M=0,C=null,x=-1,v=null;const A=new xt,F=new xt;let O=null;const V=new Ue(0);let X=0,G=t.width,q=t.height,H=1,te=null,oe=null;const me=new xt(0,0,G,q),Te=new xt(0,0,G,q);let je=!1;const Y=new Ad;let Q=!1,_e=!1;this.transmissionResolutionScale=1;const se=new at,Se=new at,Ce=new D,Oe=new xt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function _t(){return C===null?H:1}let I=n;function _n(R,U){return t.getContext(R,U)}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${To}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),I===null){const U="webgl2";if(I=_n(U,R),I===null)throw _n(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Be,ze,ye,rt,xe,P,E,k,j,K,Z,ge,ae,ue,Ge,ee,fe,we,Ae,de,He,Ie,it,L;function ie(){Be=new Wx(I),Be.init(),Ie=new Ty(I,Be),ze=new kx(I,Be,e,Ie),ye=new Sy(I,Be),ze.reverseDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),rt=new qx(I),xe=new uy,P=new Ey(I,Be,ye,xe,ze,Ie,rt),E=new zx(y),k=new Gx(y),j=new eg(I),it=new Nx(I,j),K=new Xx(I,j,rt,it),Z=new jx(I,K,j,rt),Ae=new Zx(I,ze,P),ee=new Bx(xe),ge=new hy(y,E,k,Be,ze,it,ee),ae=new Ly(y,xe),ue=new dy,Ge=new vy(Be),we=new Ox(y,E,k,ye,Z,f,c),fe=new My(y,Z,ze),L=new Uy(I,rt,ze,ye),de=new Fx(I,Be,rt),He=new Yx(I,Be,rt),rt.programs=ge.programs,y.capabilities=ze,y.extensions=Be,y.properties=xe,y.renderLists=ue,y.shadowMap=fe,y.state=ye,y.info=rt}ie();const W=new Dy(y,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(G,q,!1))},this.getSize=function(R){return R.set(G,q)},this.setSize=function(R,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=R,q=U,t.width=Math.floor(R*H),t.height=Math.floor(U*H),B===!0&&(t.style.width=R+"px",t.style.height=U+"px"),this.setViewport(0,0,R,U)},this.getDrawingBufferSize=function(R){return R.set(G*H,q*H).floor()},this.setDrawingBufferSize=function(R,U,B){G=R,q=U,H=B,t.width=Math.floor(R*B),t.height=Math.floor(U*B),this.setViewport(0,0,R,U)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(me)},this.setViewport=function(R,U,B,z){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,U,B,z),ye.viewport(A.copy(me).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(Te)},this.setScissor=function(R,U,B,z){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,U,B,z),ye.scissor(F.copy(Te).multiplyScalar(H).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(R){ye.setScissorTest(je=R)},this.setOpaqueSort=function(R){te=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(R=!0,U=!0,B=!0){let z=0;if(R){let N=!1;if(C!==null){const J=C.texture.format;N=J===ih||J===nh||J===th}if(N){const J=C.texture.type,re=J===ci||J===ur||J===Ys||J===ns||J===Qc||J===eh,he=we.getClearColor(),pe=we.getClearAlpha(),Re=he.r,Pe=he.g,be=he.b;re?(g[0]=Re,g[1]=Pe,g[2]=be,g[3]=pe,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Re,_[1]=Pe,_[2]=be,_[3]=pe,I.clearBufferiv(I.COLOR,0,_))}else z|=I.COLOR_BUFFER_BIT}U&&(z|=I.DEPTH_BUFFER_BIT),B&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),we.dispose(),ue.dispose(),Ge.dispose(),xe.dispose(),E.dispose(),k.dispose(),Z.dispose(),it.dispose(),L.dispose(),ge.dispose(),W.dispose(),W.removeEventListener("sessionstart",Nh),W.removeEventListener("sessionend",Fh),Bi.stop()};function $(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=rt.autoReset,U=fe.enabled,B=fe.autoUpdate,z=fe.needsUpdate,N=fe.type;ie(),rt.autoReset=R,fe.enabled=U,fe.autoUpdate=B,fe.needsUpdate=z,fe.type=N}function le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function De(R){const U=R.target;U.removeEventListener("dispose",De),dt(U)}function dt(R){Ut(R),xe.remove(R)}function Ut(R){const U=xe.get(R).programs;U!==void 0&&(U.forEach(function(B){ge.releaseProgram(B)}),R.isShaderMaterial&&ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,U,B,z,N,J){U===null&&(U=ht);const re=N.isMesh&&N.matrixWorld.determinant()<0,he=mm(R,U,B,z,N);ye.setMaterial(z,re);let pe=B.index,Re=1;if(z.wireframe===!0){if(pe=K.getWireframeAttribute(B),pe===void 0)return;Re=2}const Pe=B.drawRange,be=B.attributes.position;let We=Pe.start*Re,$e=(Pe.start+Pe.count)*Re;J!==null&&(We=Math.max(We,J.start*Re),$e=Math.min($e,(J.start+J.count)*Re)),pe!==null?(We=Math.max(We,0),$e=Math.min($e,pe.count)):be!=null&&(We=Math.max(We,0),$e=Math.min($e,be.count));const vt=$e-We;if(vt<0||vt===1/0)return;it.setup(N,z,he,B,pe);let pt,Xe=de;if(pe!==null&&(pt=j.get(pe),Xe=He,Xe.setIndex(pt)),N.isMesh)z.wireframe===!0?(ye.setLineWidth(z.wireframeLinewidth*_t()),Xe.setMode(I.LINES)):Xe.setMode(I.TRIANGLES);else if(N.isLine){let Me=z.linewidth;Me===void 0&&(Me=1),ye.setLineWidth(Me*_t()),N.isLineSegments?Xe.setMode(I.LINES):N.isLineLoop?Xe.setMode(I.LINE_LOOP):Xe.setMode(I.LINE_STRIP)}else N.isPoints?Xe.setMode(I.POINTS):N.isSprite&&Xe.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Xe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Xe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Me=N._multiDrawStarts,Dt=N._multiDrawCounts,Ke=N._multiDrawCount,Rn=pe?j.get(pe).bytesPerElement:1,Mr=xe.get(z).currentProgram.getUniforms();for(let rn=0;rn<Ke;rn++)Mr.setValue(I,"_gl_DrawID",rn),Xe.render(Me[rn]/Rn,Dt[rn])}else if(N.isInstancedMesh)Xe.renderInstances(We,vt,N.count);else if(B.isInstancedBufferGeometry){const Me=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Dt=Math.min(B.instanceCount,Me);Xe.renderInstances(We,vt,Dt)}else Xe.render(We,vt)};function Je(R,U,B){R.transparent===!0&&R.side===si&&R.forceSinglePass===!1?(R.side=Kt,R.needsUpdate=!0,va(R,U,B),R.side=Ui,R.needsUpdate=!0,va(R,U,B),R.side=si):va(R,U,B)}this.compile=function(R,U,B=null){B===null&&(B=R),p=Ge.get(B),p.init(U),w.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),R!==B&&R.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const z=new Set;return R.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const J=N.material;if(J)if(Array.isArray(J))for(let re=0;re<J.length;re++){const he=J[re];Je(he,B,N),z.add(he)}else Je(J,B,N),z.add(J)}),w.pop(),p=null,z},this.compileAsync=function(R,U,B=null){const z=this.compile(R,U,B);return new Promise(N=>{function J(){if(z.forEach(function(re){xe.get(re).currentProgram.isReady()&&z.delete(re)}),z.size===0){N(R);return}setTimeout(J,10)}Be.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let An=null;function qn(R){An&&An(R)}function Nh(){Bi.stop()}function Fh(){Bi.start()}const Bi=new Cd;Bi.setAnimationLoop(qn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(R){An=R,W.setAnimationLoop(R),R===null?Bi.stop():Bi.start()},W.addEventListener("sessionstart",Nh),W.addEventListener("sessionend",Fh),this.render=function(R,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,U,C),p=Ge.get(R,w.length),p.init(U),w.push(p),Se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Se),_e=this.localClippingEnabled,Q=ee.init(this.clippingPlanes,_e),m=ue.get(R,S.length),m.init(),S.push(m),W.enabled===!0&&W.isPresenting===!0){const J=y.xr.getDepthSensingMesh();J!==null&&Oo(J,U,-1/0,y.sortObjects)}Oo(R,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(te,oe),Ve=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ve&&we.addToRenderList(m,R),this.info.render.frame++,Q===!0&&ee.beginShadows();const B=p.state.shadowsArray;fe.render(B,R,U),Q===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const J=U.cameras;if(N.length>0)for(let re=0,he=J.length;re<he;re++){const pe=J[re];Bh(z,N,R,pe)}Ve&&we.render(R);for(let re=0,he=J.length;re<he;re++){const pe=J[re];kh(m,R,pe,pe.viewport)}}else N.length>0&&Bh(z,N,R,U),Ve&&we.render(R),kh(m,R,U);C!==null&&M===0&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(y,R,U),it.resetDefaultState(),x=-1,v=null,w.pop(),w.length>0?(p=w[w.length-1],Q===!0&&ee.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Oo(R,U,B,z){if(R.visible===!1)return;if(R.layers.test(U.layers)){if(R.isGroup)B=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(U);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){z&&Oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Se);const re=Z.update(R),he=R.material;he.visible&&m.push(R,re,he,B,Oe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){const re=Z.update(R),he=R.material;if(z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Oe.copy(R.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Oe.copy(re.boundingSphere.center)),Oe.applyMatrix4(R.matrixWorld).applyMatrix4(Se)),Array.isArray(he)){const pe=re.groups;for(let Re=0,Pe=pe.length;Re<Pe;Re++){const be=pe[Re],We=he[be.materialIndex];We&&We.visible&&m.push(R,re,We,B,Oe.z,be)}}else he.visible&&m.push(R,re,he,B,Oe.z,null)}}const J=R.children;for(let re=0,he=J.length;re<he;re++)Oo(J[re],U,B,z)}function kh(R,U,B,z){const N=R.opaque,J=R.transmissive,re=R.transparent;p.setupLightsView(B),Q===!0&&ee.setGlobalState(y.clippingPlanes,B),z&&ye.viewport(A.copy(z)),N.length>0&&xa(N,U,B),J.length>0&&xa(J,U,B),re.length>0&&xa(re,U,B),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Bh(R,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new fr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?ca:ci,minFilter:tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const J=p.state.transmissionRenderTarget[z.id],re=z.viewport||A;J.setSize(re.z*y.transmissionResolutionScale,re.w*y.transmissionResolutionScale);const he=y.getRenderTarget();y.setRenderTarget(J),y.getClearColor(V),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),Ve&&we.render(B);const pe=y.toneMapping;y.toneMapping=Ri;const Re=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),Q===!0&&ee.setGlobalState(y.clippingPlanes,z),xa(R,B,z),P.updateMultisampleRenderTarget(J),P.updateRenderTargetMipmap(J),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let be=0,We=U.length;be<We;be++){const $e=U[be],vt=$e.object,pt=$e.geometry,Xe=$e.material,Me=$e.group;if(Xe.side===si&&vt.layers.test(z.layers)){const Dt=Xe.side;Xe.side=Kt,Xe.needsUpdate=!0,zh(vt,B,z,pt,Xe,Me),Xe.side=Dt,Xe.needsUpdate=!0,Pe=!0}}Pe===!0&&(P.updateMultisampleRenderTarget(J),P.updateRenderTargetMipmap(J))}y.setRenderTarget(he),y.setClearColor(V,X),Re!==void 0&&(z.viewport=Re),y.toneMapping=pe}function xa(R,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,J=R.length;N<J;N++){const re=R[N],he=re.object,pe=re.geometry,Re=z===null?re.material:z,Pe=re.group;he.layers.test(B.layers)&&zh(he,U,B,pe,Re,Pe)}}function zh(R,U,B,z,N,J){R.onBeforeRender(y,U,B,z,N,J),R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),N.onBeforeRender(y,U,B,z,R,J),N.transparent===!0&&N.side===si&&N.forceSinglePass===!1?(N.side=Kt,N.needsUpdate=!0,y.renderBufferDirect(B,U,z,N,R,J),N.side=Ui,N.needsUpdate=!0,y.renderBufferDirect(B,U,z,N,R,J),N.side=si):y.renderBufferDirect(B,U,z,N,R,J),R.onAfterRender(y,U,B,z,N,J)}function va(R,U,B){U.isScene!==!0&&(U=ht);const z=xe.get(R),N=p.state.lights,J=p.state.shadowsArray,re=N.state.version,he=ge.getParameters(R,N.state,J,U,B),pe=ge.getProgramCacheKey(he);let Re=z.programs;z.environment=R.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(R.isMeshStandardMaterial?k:E).get(R.envMap||z.environment),z.envMapRotation=z.environment!==null&&R.envMap===null?U.environmentRotation:R.envMapRotation,Re===void 0&&(R.addEventListener("dispose",De),Re=new Map,z.programs=Re);let Pe=Re.get(pe);if(Pe!==void 0){if(z.currentProgram===Pe&&z.lightsStateVersion===re)return Vh(R,he),Pe}else he.uniforms=ge.getUniforms(R),R.onBeforeCompile(he,y),Pe=ge.acquireProgram(he,pe),Re.set(pe,Pe),z.uniforms=he.uniforms;const be=z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(be.clippingPlanes=ee.uniform),Vh(R,he),z.needsLights=gm(R),z.lightsStateVersion=re,z.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMap.value=N.state.directionalShadowMap,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotShadowMap.value=N.state.spotShadowMap,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMap.value=N.state.pointShadowMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Pe,z.uniformsList=null,Pe}function Hh(R){if(R.uniformsList===null){const U=R.currentProgram.getUniforms();R.uniformsList=so.seqWithValue(U.seq,R.uniforms)}return R.uniformsList}function Vh(R,U){const B=xe.get(R);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function mm(R,U,B,z,N){U.isScene!==!0&&(U=ht),P.resetTextureUnits();const J=U.fog,re=z.isMeshStandardMaterial?U.environment:null,he=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:rs,pe=(z.isMeshStandardMaterial?k:E).get(z.envMap||re),Re=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pe=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),be=!!B.morphAttributes.position,We=!!B.morphAttributes.normal,$e=!!B.morphAttributes.color;let vt=Ri;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(vt=y.toneMapping);const pt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Xe=pt!==void 0?pt.length:0,Me=xe.get(z),Dt=p.state.lights;if(Q===!0&&(_e===!0||R!==v)){const Ht=R===v&&z.id===x;ee.setState(z,R,Ht)}let Ke=!1;z.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Dt.state.version||Me.outputColorSpace!==he||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==pe||z.fog===!0&&Me.fog!==J||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==Re||Me.vertexTangents!==Pe||Me.morphTargets!==be||Me.morphNormals!==We||Me.morphColors!==$e||Me.toneMapping!==vt||Me.morphTargetsCount!==Xe)&&(Ke=!0):(Ke=!0,Me.__version=z.version);let Rn=Me.currentProgram;Ke===!0&&(Rn=va(z,U,N));let Mr=!1,rn=!1,Ms=!1;const ot=Rn.getUniforms(),gn=Me.uniforms;if(ye.useProgram(Rn.program)&&(Mr=!0,rn=!0,Ms=!0),z.id!==x&&(x=z.id,rn=!0),Mr||v!==R){ye.buffers.depth.getReversed()?(se.copy(R.projectionMatrix),p_(se),m_(se),ot.setValue(I,"projectionMatrix",se)):ot.setValue(I,"projectionMatrix",R.projectionMatrix),ot.setValue(I,"viewMatrix",R.matrixWorldInverse);const Yt=ot.map.cameraPosition;Yt!==void 0&&Yt.setValue(I,Ce.setFromMatrixPosition(R.matrixWorld)),ze.logarithmicDepthBuffer&&ot.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ot.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,rn=!0,Ms=!0)}if(N.isSkinnedMesh){ot.setOptional(I,N,"bindMatrix"),ot.setOptional(I,N,"bindMatrixInverse");const Ht=N.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),ot.setValue(I,"boneTexture",Ht.boneTexture,P))}N.isBatchedMesh&&(ot.setOptional(I,N,"batchingTexture"),ot.setValue(I,"batchingTexture",N._matricesTexture,P),ot.setOptional(I,N,"batchingIdTexture"),ot.setValue(I,"batchingIdTexture",N._indirectTexture,P),ot.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&ot.setValue(I,"batchingColorTexture",N._colorsTexture,P));const xn=B.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Ae.update(N,B,Rn),(rn||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,ot.setValue(I,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(gn.envMap.value=pe,gn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),rn&&(ot.setValue(I,"toneMappingExposure",y.toneMappingExposure),Me.needsLights&&_m(gn,Ms),J&&z.fog===!0&&ae.refreshFogUniforms(gn,J),ae.refreshMaterialUniforms(gn,z,H,q,p.state.transmissionRenderTarget[R.id]),so.upload(I,Hh(Me),gn,P)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(so.upload(I,Hh(Me),gn,P),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ot.setValue(I,"center",N.center),ot.setValue(I,"modelViewMatrix",N.modelViewMatrix),ot.setValue(I,"normalMatrix",N.normalMatrix),ot.setValue(I,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ht=z.uniformsGroups;for(let Yt=0,No=Ht.length;Yt<No;Yt++){const zi=Ht[Yt];L.update(zi,Rn),L.bind(zi,Rn)}}return Rn}function _m(R,U){R.ambientLightColor.needsUpdate=U,R.lightProbe.needsUpdate=U,R.directionalLights.needsUpdate=U,R.directionalLightShadows.needsUpdate=U,R.pointLights.needsUpdate=U,R.pointLightShadows.needsUpdate=U,R.spotLights.needsUpdate=U,R.spotLightShadows.needsUpdate=U,R.rectAreaLights.needsUpdate=U,R.hemisphereLights.needsUpdate=U}function gm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,U,B){xe.get(R.texture).__webglTexture=U,xe.get(R.depthTexture).__webglTexture=B;const z=xe.get(R);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,U){const B=xe.get(R);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const xm=I.createFramebuffer();this.setRenderTarget=function(R,U=0,B=0){C=R,T=U,M=B;let z=!0,N=null,J=!1,re=!1;if(R){const pe=xe.get(R);if(pe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(pe.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(pe.__hasExternalTextures)P.rebindTextures(R,xe.get(R.texture).__webglTexture,xe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const be=R.depthTexture;if(pe.__boundDepthTexture!==be){if(be!==null&&xe.has(be)&&(R.width!==be.image.width||R.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const Re=R.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(re=!0);const Pe=xe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?N=Pe[U][B]:N=Pe[U],J=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?N=xe.get(R).__webglMultisampledFramebuffer:Array.isArray(Pe)?N=Pe[B]:N=Pe,A.copy(R.viewport),F.copy(R.scissor),O=R.scissorTest}else A.copy(me).multiplyScalar(H).floor(),F.copy(Te).multiplyScalar(H).floor(),O=je;if(B!==0&&(N=xm),ye.bindFramebuffer(I.FRAMEBUFFER,N)&&z&&ye.drawBuffers(R,N),ye.viewport(A),ye.scissor(F),ye.setScissorTest(O),J){const pe=xe.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,B)}else if(re){const pe=xe.get(R.texture),Re=U;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,pe.__webglTexture,B,Re)}else if(R!==null&&B!==0){const pe=xe.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pe.__webglTexture,B)}x=-1},this.readRenderTargetPixels=function(R,U,B,z,N,J,re){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&re!==void 0&&(he=he[re]),he){ye.bindFramebuffer(I.FRAMEBUFFER,he);try{const pe=R.texture,Re=pe.format,Pe=pe.type;if(!ze.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=R.width-z&&B>=0&&B<=R.height-N&&I.readPixels(U,B,z,N,Ie.convert(Re),Ie.convert(Pe),J)}finally{const pe=C!==null?xe.get(C).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(R,U,B,z,N,J,re){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&re!==void 0&&(he=he[re]),he){const pe=R.texture,Re=pe.format,Pe=pe.type;if(!ze.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=R.width-z&&B>=0&&B<=R.height-N){ye.bindFramebuffer(I.FRAMEBUFFER,he);const be=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.bufferData(I.PIXEL_PACK_BUFFER,J.byteLength,I.STREAM_READ),I.readPixels(U,B,z,N,Ie.convert(Re),Ie.convert(Pe),0);const We=C!==null?xe.get(C).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,We);const $e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await d_(I,$e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,J),I.deleteBuffer(be),I.deleteSync($e),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,U=null,B=0){R.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,R=arguments[1]);const z=Math.pow(2,-B),N=Math.floor(R.image.width*z),J=Math.floor(R.image.height*z),re=U!==null?U.x:0,he=U!==null?U.y:0;P.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,re,he,N,J),ye.unbindTexture()};const vm=I.createFramebuffer(),ym=I.createFramebuffer();this.copyTextureToTexture=function(R,U,B=null,z=null,N=0,J=null){R.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,R=arguments[1],U=arguments[2],J=arguments[3]||0,B=null),J===null&&(N!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=N,N=0):J=0);let re,he,pe,Re,Pe,be,We,$e,vt;const pt=R.isCompressedTexture?R.mipmaps[J]:R.image;if(B!==null)re=B.max.x-B.min.x,he=B.max.y-B.min.y,pe=B.isBox3?B.max.z-B.min.z:1,Re=B.min.x,Pe=B.min.y,be=B.isBox3?B.min.z:0;else{const xn=Math.pow(2,-N);re=Math.floor(pt.width*xn),he=Math.floor(pt.height*xn),R.isDataArrayTexture?pe=pt.depth:R.isData3DTexture?pe=Math.floor(pt.depth*xn):pe=1,Re=0,Pe=0,be=0}z!==null?(We=z.x,$e=z.y,vt=z.z):(We=0,$e=0,vt=0);const Xe=Ie.convert(U.format),Me=Ie.convert(U.type);let Dt;U.isData3DTexture?(P.setTexture3D(U,0),Dt=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(P.setTexture2DArray(U,0),Dt=I.TEXTURE_2D_ARRAY):(P.setTexture2D(U,0),Dt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Ke=I.getParameter(I.UNPACK_ROW_LENGTH),Rn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Mr=I.getParameter(I.UNPACK_SKIP_PIXELS),rn=I.getParameter(I.UNPACK_SKIP_ROWS),Ms=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,be);const ot=R.isDataArrayTexture||R.isData3DTexture,gn=U.isDataArrayTexture||U.isData3DTexture;if(R.isDepthTexture){const xn=xe.get(R),Ht=xe.get(U),Yt=xe.get(xn.__renderTarget),No=xe.get(Ht.__renderTarget);ye.bindFramebuffer(I.READ_FRAMEBUFFER,Yt.__webglFramebuffer),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,No.__webglFramebuffer);for(let zi=0;zi<pe;zi++)ot&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xe.get(R).__webglTexture,N,be+zi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xe.get(U).__webglTexture,J,vt+zi)),I.blitFramebuffer(Re,Pe,re,he,We,$e,re,he,I.DEPTH_BUFFER_BIT,I.NEAREST);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||R.isRenderTargetTexture||xe.has(R)){const xn=xe.get(R),Ht=xe.get(U);ye.bindFramebuffer(I.READ_FRAMEBUFFER,vm),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,ym);for(let Yt=0;Yt<pe;Yt++)ot?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xn.__webglTexture,N,be+Yt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xn.__webglTexture,N),gn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.__webglTexture,J,vt+Yt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ht.__webglTexture,J),N!==0?I.blitFramebuffer(Re,Pe,re,he,We,$e,re,he,I.COLOR_BUFFER_BIT,I.NEAREST):gn?I.copyTexSubImage3D(Dt,J,We,$e,vt+Yt,Re,Pe,re,he):I.copyTexSubImage2D(Dt,J,We,$e,Re,Pe,re,he);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else gn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Dt,J,We,$e,vt,re,he,pe,Xe,Me,pt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Dt,J,We,$e,vt,re,he,pe,Xe,pt.data):I.texSubImage3D(Dt,J,We,$e,vt,re,he,pe,Xe,Me,pt):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,J,We,$e,re,he,Xe,Me,pt.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,J,We,$e,pt.width,pt.height,Xe,pt.data):I.texSubImage2D(I.TEXTURE_2D,J,We,$e,re,he,Xe,Me,pt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ke),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Rn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mr),I.pixelStorei(I.UNPACK_SKIP_ROWS,rn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ms),J===0&&U.generateMipmaps&&I.generateMipmap(Dt),ye.unbindTexture()},this.copyTextureToTexture3D=function(R,U,B=null,z=null,N=0){return R.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,R=arguments[2],U=arguments[3],N=arguments[4]||0),zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,U,B,z,N)},this.initRenderTarget=function(R){xe.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),ye.unbindTexture()},this.resetState=function(){T=0,M=0,C=null,ye.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const Zu={type:"change"},hh={type:"start"},Ud={type:"end"},Ya=new gs,ju=new yi,Ny=Math.cos(70*u_.DEG2RAD),St=new D,Zt=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dl=1e-6;class Fy extends J_{constructor(e,t=null){super(e,t),this.state=et.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ar.ROTATE,MIDDLE:ar.DOLLY,RIGHT:ar.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new dr,this._lastTargetPosition=new D,this._quat=new dr().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mu,this._sphericalDelta=new Mu,this._scale=1,this._panOffset=new D,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new D,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=By.bind(this),this._onPointerDown=ky.bind(this),this._onPointerUp=zy.bind(this),this._onContextMenu=qy.bind(this),this._onMouseWheel=Gy.bind(this),this._onKeyDown=Wy.bind(this),this._onTouchStart=Xy.bind(this),this._onTouchMove=Yy.bind(this),this._onMouseDown=Hy.bind(this),this._onMouseMove=Vy.bind(this),this._interceptControlDown=Zy.bind(this),this._interceptControlUp=jy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zu),this.update(),this.state=et.NONE}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Zt:n>Math.PI&&(n-=Zt),r<-Math.PI?r+=Zt:r>Math.PI&&(r-=Zt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=St.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ya.origin.copy(this.object.position),Ya.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ya.direction))<Ny?this.object.lookAt(this.target):(ju.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ya.intersectPlane(ju,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>dl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dl||this._lastTargetPosition.distanceToSquared(this.target)>dl?(this.dispatchEvent(Zu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zt/60*this.autoRotateSpeed*e:Zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;St.copy(r).sub(this.target);let s=St.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ky(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function By(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function zy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ud),this.state=et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Hy(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=et.DOLLY;break;case ar.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=et.ROTATE}break;case ar.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(hh)}function Vy(i){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Gy(i){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(i.preventDefault(),this.dispatchEvent(hh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ud))}function Wy(i){this.enabled!==!1&&this._handleKeyDown(i)}function Xy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=et.TOUCH_ROTATE;break;case Hr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case Hr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=et.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(hh)}function Yy(i){switch(this._trackPointer(i),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=et.NONE}}function qy(i){this.enabled!==!1&&i.preventDefault()}function Zy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ti(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Od(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},os={duration:.5,overwrite:!1,delay:0},uh,Lt,ct,Vn=1e8,kt=1/Vn,Ac=Math.PI*2,$y=Ac/4,Ky=0,Nd=Math.sqrt,Jy=Math.cos,Qy=Math.sin,Pt=function(e){return typeof e=="string"},mt=function(e){return typeof e=="function"},ui=function(e){return typeof e=="number"},fh=function(e){return typeof e>"u"},Yn=function(e){return typeof e=="object"},Jt=function(e){return e!==!1},dh=function(){return typeof window<"u"},qa=function(e){return mt(e)||Pt(e)},Fd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},zt=Array.isArray,Rc=/(?:-?\.?\d|\.)+/gi,kd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Wr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bd=/[+-]=-?[.\d]+/,zd=/[^,'"\[\]\s]+/gi,eb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,Nn,Cc,ph,pn={},_o={},Hd,Vd=function(e){return(_o=ls(e,pn))&&nn},mh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Zs=function(e,t){return!t&&console.warn(e)},Gd=function(e,t){return e&&(pn[e]=t)&&_o&&(_o[e]=t)||pn},js=function(){return 0},tb={suppressEvents:!0,isStart:!0,kill:!1},ao={suppressEvents:!0,kill:!1},nb={suppressEvents:!0},_h={},Ci=[],Pc={},Wd,cn={},ml={},$u=30,oo=[],gh="",xh=function(e){var t=e[0],n,r;if(Yn(t)||mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=oo.length;r--&&!oo[r].targetTest(t););n=oo[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new pp(e[r],n)))||e.splice(r,1);return e},or=function(e){return e._gsap||xh(Sn(e))[0]._gsap},Xd=function(e,t,n){return(n=e[t])&&mt(n)?e[t]():fh(n)&&e.getAttribute&&e.getAttribute(t)||n},Qt=function(e,t){return(e=e.split(",")).forEach(t)||e},gt=function(e){return Math.round(e*1e5)/1e5||0},wt=function(e){return Math.round(e*1e7)/1e7||0},jr=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},ib=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},go=function(){var e=Ci.length,t=Ci.slice(0),n,r;for(Pc={},Ci.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},vh=function(e){return!!(e._initted||e._startAt||e.add)},Yd=function(e,t,n,r){Ci.length&&!Lt&&go(),e.render(t,n,!!(Lt&&t<0&&vh(e))),Ci.length&&!Lt&&go()},qd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(zd).length<2?t:Pt(e)?e.trim():e},Zd=function(e){return e},mn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},rb=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},ls=function(e,t){for(var n in t)e[n]=t[n];return e},Ku=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Yn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},xo=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Bs=function(e){var t=e.parent||ut,n=e.keyframes?rb(zt(e.keyframes)):mn;if(Jt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},sb=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},jd=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Co=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Oi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},lr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ab=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Dc=function(e,t,n,r){return e._startAt&&(Lt?e._startAt.revert(ao):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},ob=function i(e){return!e||e._ts&&i(e.parent)},Ju=function(e){return e._repeat?cs(e._tTime,e=e.duration()+e._rDelay)*e:0},cs=function(e,t){var n=Math.floor(e=wt(e/t));return e&&n===e?n-1:n},vo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Po=function(e){return e._end=wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||kt)||0))},Do=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Po(e),n._dirty||lr(n,e)),e},$d=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=vo(e.rawTime(),t),(!t._dur||fa(0,t.totalDuration(),n)-t._tTime>kt)&&t.render(n,!0)),lr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},kn=function(e,t,n,r){return t.parent&&Oi(t),t._start=wt((ui(n)?n:n||e!==ut?yn(e,n,t):e._time)+t._delay),t._end=wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jd(e,t,"_first","_last",e._sort?"_start":0),Ic(t)||(e._recent=t),r||$d(e,t),e._ts<0&&Do(e,e._tTime),e},Kd=function(e,t){return(pn.ScrollTrigger||mh("scrollTrigger",t))&&pn.ScrollTrigger.create(t,e)},Jd=function(e,t,n,r,s){if(bh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Lt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Wd!==hn.frame)return Ci.push(e),e._lazy=[s,r],1},lb=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Ic=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},cb=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&lb(e)&&!(!e._initted&&Ic(e))||(e._ts<0||e._dp._ts<0)&&!Ic(e))?0:1,o=e._rDelay,c=0,l,h,u;if(o&&e._repeat&&(c=fa(0,e._tDur,t),h=cs(c,o),e._yoyo&&h&1&&(a=1-a),h!==cs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Lt||r||e._zTime===kt||!t&&e._zTime){if(!e._initted&&Jd(e,t,r,n,c))return;for(u=e._zTime,e._zTime=t||(n?kt:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&Dc(e,t,n,!0),e._onUpdate&&!n&&un(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Oi(e,1),!n&&!Lt&&(un(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},hb=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},hs=function(e,t,n,r){var s=e._repeat,a=wt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:wt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Do(e,e._tTime=e._tDur*o),e.parent&&Po(e),n||lr(e.parent,e),e},Qu=function(e){return e instanceof Gt?lr(e):hs(e,e._dur)},ub={_start:0,endTime:js,totalDuration:js},yn=function i(e,t,n){var r=e.labels,s=e._recent||ub,a=e.duration()>=Vn?s.endTime(!1):e._dur,o,c,l;return Pt(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(zt(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},zs=function(e,t,n){var r=ui(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,c;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Jt(c.vars.inherit)&&c.parent;a.immediateRender=Jt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Mt(t[0],a,t[s+1])},ki=function(e,t){return e||e===0?t(e):t},fa=function(e,t,n){return n<e?e:n>t?t:n},Ft=function(e,t){return!Pt(e)||!(t=eb.exec(e))?"":t[1]},fb=function(e,t,n){return ki(n,function(r){return fa(e,t,r)})},Lc=[].slice,Qd=function(e,t){return e&&Yn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yn(e[0]))&&!e.nodeType&&e!==Nn},db=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Pt(r)&&!t||Qd(r,1)?(s=n).push.apply(s,Sn(r)):n.push(r)})||n},Sn=function(e,t,n){return ct&&!t&&ct.selector?ct.selector(e):Pt(e)&&!n&&(Cc||!us())?Lc.call((t||ph).querySelectorAll(e),0):zt(e)?db(e,n):Qd(e)?Lc.call(e,0):e?[e]:[]},Uc=function(e){return e=Sn(e)[0]||Zs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Sn(t,n.querySelectorAll?n:n===e?Zs("Invalid scope")||ph.createElement("div"):e)}},ep=function(e){return e.sort(function(){return .5-Math.random()})},tp=function(e){if(mt(e))return e;var t=Yn(e)?e:{each:e},n=cr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,c=isNaN(r)||o,l=t.axis,h=r,u=r;return Pt(r)?h=u={center:.5,edges:.5,end:1}[r]||0:!o&&c&&(h=r[0],u=r[1]),function(d,f,g){var _=(g||t).length,m=a[_],p,S,w,y,b,T,M,C,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,Vn])[1],!x){for(M=-1e8;M<(M=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],p=c?Math.min(x,_)*h-.5:r%x,S=x===Vn?0:c?_*u/x-.5:r/x|0,M=0,C=Vn,T=0;T<_;T++)w=T%x-p,y=S-(T/x|0),m[T]=b=l?Math.abs(l==="y"?y:w):Nd(w*w+y*y),b>M&&(M=b),b<C&&(C=b);r==="random"&&ep(m),m.max=M-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:l?l==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ft(t.amount||t.each)||0,n=n&&_<0?up(n):n}return _=(m[d]-m.min)/m.max||0,wt(m.b+(n?n(_):_)*m.v)+m.u}},Oc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=wt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ui(n)?0:Ft(n))}},np=function(e,t){var n=zt(e),r,s;return!n&&Yn(e)&&(r=n=e.radius||Vn,e.values?(e=Sn(e.values),(s=!ui(e[0]))&&(r*=r)):e=Oc(e.increment)),ki(t,n?mt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=Vn,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-o,f=e[u].y-c,d=d*d+f*f):d=Math.abs(e[u]-o),d<l&&(l=d,h=u);return h=!r||l<=r?e[h]:a,s||h===a||ui(a)?h:h+Ft(a)}:Oc(e))},ip=function(e,t,n,r){return ki(zt(e)?!t:n===!0?!!(n=0):!r,function(){return zt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},pb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},mb=function(e,t){return function(n){return e(parseFloat(n))+(t||Ft(n))}},_b=function(e,t,n){return sp(e,t,0,1,n)},rp=function(e,t,n){return ki(n,function(r){return e[~~t(r)]})},gb=function i(e,t,n){var r=t-e;return zt(e)?rp(e,i(0,e.length),t):ki(n,function(s){return(r+(s-e)%r)%r+e})},xb=function i(e,t,n){var r=t-e,s=r*2;return zt(e)?rp(e,i(0,e.length-1),t):ki(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},$s=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?zd:Rc),n+=e.substr(t,r-t)+ip(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},sp=function(e,t,n,r,s){var a=t-e,o=r-n;return ki(s,function(c){return n+((c-e)/a*o||0)})},vb=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Pt(e),o={},c,l,h,u,d;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(zt(e)&&!zt(t)){for(h=[],u=e.length,d=u-2,l=1;l<u;l++)h.push(i(e[l-1],e[l]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else r||(e=ls(zt(e)?[]:{},e));if(!h){for(c in t)yh.call(o,e,c,"get",t[c]);s=function(g){return Sh(g,o)||(a?e.p:e)}}}return ki(n,s)},ef=function(e,t,n){var r=e.labels,s=Vn,a,o,c;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},un=function(e,t,n){var r=e.vars,s=r[t],a=ct,o=e._ctx,c,l,h;if(s)return c=r[t+"Params"],l=r.callbackScope||e,n&&Ci.length&&go(),o&&(ct=o),h=c?s.apply(l,c):s.call(l),ct=a,h},Us=function(e){return Oi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Lt),e.progress()<1&&un(e,"onInterrupt"),e},Xr,ap=[],op=function(e){if(e)if(e=!e.name&&e.default||e,dh()||e.headless){var t=e.name,n=mt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:js,render:Sh,add:yh,kill:Ob,modifier:Ub,rawVars:0},a={targetTest:0,get:0,getSetter:wh,aliases:{},register:0};if(us(),e!==r){if(cn[t])return;mn(r,mn(xo(e,s),a)),ls(r.prototype,ls(s,xo(e,a))),cn[r.prop=t]=r,e.targetTest&&(oo.push(r),_h[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Gd(t,r),e.register&&e.register(nn,r,en)}else ap.push(e)},tt=255,Os={aqua:[0,tt,tt],lime:[0,tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tt],navy:[0,0,128],white:[tt,tt,tt],olive:[128,128,0],yellow:[tt,tt,0],orange:[tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tt,0,0],pink:[tt,192,203],cyan:[0,tt,tt],transparent:[tt,tt,tt,0]},_l=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*tt+.5|0},lp=function(e,t,n){var r=e?ui(e)?[e>>16,e>>8&tt,e&tt]:0:Os.black,s,a,o,c,l,h,u,d,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Os[e])r=Os[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&tt,r&tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&tt,e&tt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Rc),!t)c=+r[0]%360/360,l=+r[1]/100,h=+r[2]/100,a=h<=.5?h*(l+1):h+l-h*l,s=h*2-a,r.length>3&&(r[3]*=1),r[0]=_l(c+1/3,s,a),r[1]=_l(c,s,a),r[2]=_l(c-1/3,s,a);else if(~e.indexOf("="))return r=e.match(kd),n&&r.length<4&&(r[3]=1),r}else r=e.match(Rc)||Os.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/tt,a=r[1]/tt,o=r[2]/tt,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?c=l=0:(f=u-d,l=h>.5?f/(2-u-d):f/(u+d),c=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},cp=function(e){var t=[],n=[],r=-1;return e.split(Pi).forEach(function(s){var a=s.match(Wr)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},tf=function(e,t,n){var r="",s=(e+r).match(Pi),a=t?"hsla(":"rgba(",o=0,c,l,h,u;if(!s)return e;if(s=s.map(function(d){return(d=lp(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=cp(e),c=n.c,c.join(r)!==h.c.join(r)))for(l=e.replace(Pi,"1").split(Wr),u=l.length-1;o<u;o++)r+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=e.split(Pi),u=l.length-1;o<u;o++)r+=l[o]+s[o];return r+l[u]},Pi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Os)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),yb=/hsl[a]?\(/,hp=function(e){var t=e.join(" "),n;if(Pi.lastIndex=0,Pi.test(t))return n=yb.test(t),e[1]=tf(e[1],n),e[0]=tf(e[0],n,cp(e[1])),!0},Ks,hn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],c,l,h,u,d,f,g=function _(m){var p=i()-r,S=m===!0,w,y,b,T;if((p>e||p<0)&&(n+=p-t),r+=p,b=r-n,w=b-a,(w>0||S)&&(T=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,a+=w+(w>=s?4:s-w),y=1),S||(c=l(_)),y)for(f=0;f<o.length;f++)o[f](b,d,T,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Hd&&(!Cc&&dh()&&(Nn=Cc=window,ph=Nn.document||{},pn.gsap=nn,(Nn.gsapVersions||(Nn.gsapVersions=[])).push(nn.version),Vd(_o||Nn.GreenSockGlobals||!Nn.gsap&&Nn||{}),ap.forEach(op)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Ks=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),Ks=0,l=js},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,S){var w=p?function(y,b,T,M){m(y,b,T,M),u.remove(w)}:m;return u.remove(m),o[S?"unshift":"push"](w),us(),w},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),us=function(){return!Ks&&hn.wake()},ke={},bb=/^[\d.\-M][\d.\-,\s]/,Mb=/["']/g,wb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[r]=isNaN(l)?l.replace(Mb,"").trim():+l,r=c.substr(o+1).trim();return t},Sb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Eb=function(e){var t=(e+"").split("("),n=ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[wb(t[1])]:Sb(e).split(",").map(qd)):ke._CE&&bb.test(e)?ke._CE("",e):n},up=function(e){return function(t){return 1-e(1-t)}},fp=function i(e,t){for(var n=e._first,r;n;)n instanceof Gt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},cr=function(e,t){return e&&(mt(e)?e:ke[e]||Eb(e))||t},yr=function(e,t,n,r){n===void 0&&(n=function(c){return 1-t(1-c)}),r===void 0&&(r=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Qt(e,function(o){ke[o]=pn[o]=s,ke[a=o.toLowerCase()]=n;for(var c in s)ke[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ke[o+"."+c]=s[c]}),s},dp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},gl=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Ac*(Math.asin(1/r)||0),o=function(h){return h===1?1:r*Math.pow(2,-10*h)*Qy((h-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:dp(o);return s=Ac/s,c.config=function(l,h){return i(e,l,h)},c},xl=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:dp(n);return r.config=function(s){return i(e,s)},r};Qt("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;yr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ke.Linear.easeNone=ke.none=ke.Linear.easeIn;yr("Elastic",gl("in"),gl("out"),gl());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};yr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);yr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});yr("Circ",function(i){return-(Nd(1-i*i)-1)});yr("Sine",function(i){return i===1?1:-Jy(i*$y)+1});yr("Back",xl("in"),xl("out"),xl());ke.SteppedEase=ke.steps=pn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-kt;return function(o){return((r*fa(0,a,o)|0)+s)*n}}};os.ease=ke["quad.out"];Qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return gh+=i+","+i+"Params,"});var pp=function(e,t){this.id=Ky++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xd,this.set=t?t.getSetter:wh},Js=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,hs(this,+t.duration,1,1),this.data=t.data,ct&&(this._ctx=ct,ct.data.push(this)),Ks||hn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(us(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Do(this,n),!s._dp||s.parent||$d(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&kn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===kt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Yd(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ju(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ju(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?cs(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?vo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(fa(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Po(this),ab(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(us(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==kt&&(this._tTime-=kt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&kn(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Jt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vo(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=nb);var r=Lt;return Lt=n,vh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Lt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Qu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Qu(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(yn(this,n),Jt(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Jt(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-kt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=mt(n)?n:Zd,o=function(){var l=r.then;r.then=null,mt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=l),s(a),r.then=l};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){Us(this)},i}();mn(Js.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Gt=function(i){Od(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Jt(n.sortChildren),ut&&kn(n.parent||ut,ti(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Kd(ti(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return zs(0,arguments,this),this},t.from=function(r,s,a){return zs(1,arguments,this),this},t.fromTo=function(r,s,a,o){return zs(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Bs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Mt(r,s,yn(this,a),1),this},t.call=function(r,s,a){return kn(this,Mt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,c,l,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new Mt(r,a,yn(this,c)),this},t.staggerFrom=function(r,s,a,o,c,l,h){return a.runBackwards=1,Bs(a).immediateRender=Jt(a.immediateRender),this.staggerTo(r,s,a,o,c,l,h)},t.staggerFromTo=function(r,s,a,o,c,l,h,u){return o.startAt=a,Bs(o).immediateRender=Jt(o.immediateRender),this.staggerTo(r,s,o,c,l,h,u)},t.render=function(r,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=r<=0?0:wt(r),u=this._zTime<0!=r<0&&(this._initted||!l),d,f,g,_,m,p,S,w,y,b,T,M;if(this!==ut&&h>c&&r>=0&&(h=c),h!==this._tTime||a||u){if(o!==this._time&&l&&(h+=this._time-o,r+=this._time-o),d=h,y=this._start,w=this._ts,p=!w,u&&(l||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(d=wt(h%m),h===c?(_=this._repeat,d=l):(b=wt(h/m),_=~~b,_&&_===b&&(d=l,_--),d>l&&(d=l)),b=cs(this._tTime,m),!o&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),T&&_&1&&(d=l-d,M=1),_!==b&&!this._lock){var C=T&&b&1,x=C===(T&&_&1);if(_<b&&(C=!C),o=C?0:h%l?l:h,this._lock=1,this.render(o||(M?0:wt(_*m)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&un(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,o=C?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;fp(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=hb(this,wt(o),wt(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&h&&!s&&!b&&(un(this,"onStart"),this._tTime!==h))return this;if(d>=o&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=-1e-8);break}}f=g}else{f=this._last;for(var v=r<0?r:d;f;){if(g=f._prev,(f._act||v<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,s,a||Lt&&vh(f)),d!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=v?-1e-8:kt);break}}f=g}}if(S&&!s&&(this.pause(),S.render(d>=o?0:-1e-8)._zTime=d>=o?1:-1,this._ts))return this._start=y,Po(this),this.render(r,s,a);this._onUpdate&&!s&&un(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Oi(this,1),!s&&!(r<0&&!o)&&(h||o||!c)&&(un(this,h===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(ui(s)||(s=yn(this,s,r)),!(r instanceof Js)){if(zt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Pt(r))return this.addLabel(r,s);if(mt(r))r=Mt.delayedCall(0,r);else return this}return this!==r?kn(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Mt?s&&c.push(l):(a&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Pt(r)?this.removeLabel(r):mt(r)?this.killTweensOf(r):(r.parent===this&&Co(this,r),r===this._recent&&(this._recent=this._last),lr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wt(hn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=yn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Mt.delayedCall(0,s||js,a);return o.data="isPause",this._hasPause=1,kn(this,o,yn(this,r))},t.removePause=function(r){var s=this._first;for(r=yn(this,r);s;)s._start===r&&s.data==="isPause"&&Oi(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),c=o.length;c--;)wi!==o[c]&&o[c].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Sn(r),c=this._first,l=ui(s),h;c;)c instanceof Mt?ib(c._targets,o)&&(l?(!wi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(h=c.getTweensOf(o,s)).length&&a.push.apply(a,h),c=c._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=yn(a,r),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,f,g=Mt.to(a,mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||kt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==m&&hs(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,mn({startAt:{time:yn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ef(this,yn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ef(this,yn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+kt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=r);return lr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),lr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,c=Vn,l,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(u=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,kn(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;hs(a,a===ut&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(ut._ts&&(Yd(ut,vo(r,ut)),Wd=hn.frame),hn.frame>=$u){$u+=dn.autoSleep||120;var s=ut._first;if((!s||!s._ts)&&dn.autoSleep&&hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||hn.sleep()}}},e}(Js);mn(Gt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Tb=function(e,t,n,r,s,a,o){var c=new en(this._pt,e,t,0,1,yp,null,s),l=0,h=0,u,d,f,g,_,m,p,S;for(c.b=n,c.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=$s(r)),a&&(S=[n,r],a(S,e,t),n=S[0],r=S[1]),d=n.match(pl)||[];u=pl.exec(r);)g=u[0],_=r.substring(l,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?jr(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},l=pl.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=o,(Bd.test(r)||p)&&(c.e=0),this._pt=c,c},yh=function(e,t,n,r,s,a,o,c,l,h){mt(r)&&(r=r(s||0,e,a));var u=e[t],d=n!=="get"?n:mt(u)?l?e[t.indexOf("set")||!mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():u,f=mt(u)?l?Db:xp:Mh,g;if(Pt(r)&&(~r.indexOf("random(")&&(r=$s(r)),r.charAt(1)==="="&&(g=jr(d,r)+(Ft(d)||0),(g||g===0)&&(r=g))),!h||d!==r||Nc)return!isNaN(d*r)&&r!==""?(g=new en(this._pt,e,t,+d||0,r-(d||0),typeof u=="boolean"?Lb:vp,0,f),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!u&&!(t in e)&&mh(t,r),Tb.call(this,e,t,d,r,f,c||dn.stringFilter,l))},Ab=function(e,t,n,r,s){if(mt(e)&&(e=Hs(e,s,t,n,r)),!Yn(e)||e.style&&e.nodeType||zt(e)||Fd(e))return Pt(e)?Hs(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Hs(e[o],s,t,n,r);return a},mp=function(e,t,n,r,s,a){var o,c,l,h;if(cn[e]&&(o=new cn[e]).init(s,o.rawVars?t[e]:Ab(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=c=new en(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Xr))for(l=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)l[o._props[h]]=c;return o},wi,Nc,bh=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,c=r.lazy,l=r.onUpdate,h=r.runBackwards,u=r.yoyoEase,d=r.keyframes,f=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,w=e._overwrite==="auto"&&!uh,y=e.timeline,b,T,M,C,x,v,A,F,O,V,X,G,q;if(y&&(!d||!s)&&(s="none"),e._ease=cr(s,os.ease),e._yEase=u?up(cr(u===!0?s:u,os.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!r.runBackwards,!y||d&&!r.stagger){if(F=m[0]?or(m[0]).harness:0,G=F&&r[F.prop],b=xo(r,_h),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?ao:tb),_._lazy=0),a){if(Oi(e._startAt=Mt.set(m,mn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Jt(c),startAt:null,delay:0,onUpdate:l&&function(){return un(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt||!o&&!f)&&e._startAt.revert(ao),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(o=!1),M=mn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Jt(c),immediateRender:o,stagger:0,parent:p},b),G&&(M[F.prop]=G),Oi(e._startAt=Mt.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt?e._startAt.revert(ao):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,kt,kt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&Jt(c)||c&&!g,T=0;T<m.length;T++){if(x=m[T],A=x._gsap||xh(m)[T]._gsap,e._ptLookup[T]=V={},Pc[A.id]&&Ci.length&&go(),X=S===m?T:S.indexOf(x),F&&(O=new F).init(x,G||b,e,X,S)!==!1&&(e._pt=C=new en(e._pt,x,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(H){V[H]=C}),O.priority&&(v=1)),!F||G)for(M in b)cn[M]&&(O=mp(M,b,e,X,x,S))?O.priority&&(v=1):V[M]=C=yh.call(e,x,M,"get",b[M],X,S,0,r.stringFilter);e._op&&e._op[T]&&e.kill(x,e._op[T]),w&&e._pt&&(wi=e,ut.killTweensOf(x,V,e.globalTime(t)),q=!e.parent,wi=0),e._pt&&c&&(Pc[A.id]=1)}v&&bp(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&y.render(Vn,!0,!0)},Rb=function(e,t,n,r,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Nc=1,e.vars[t]="+=0",bh(e,o),Nc=0,c?Zs(t+" not eligible for reset"):1;l.push(h)}for(f=l.length;f--;)u=l[f],h=u._pt||u,h.s=(r||r===0)&&!s?r:h.s+(r||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=gt(n)+Ft(u.e)),u.b&&(u.b=h.s+Ft(u.b))},Cb=function(e,t){var n=e[0]?or(e[0]).harness:0,r=n&&n.aliases,s,a,o,c;if(!r)return t;s=ls({},t);for(a in r)if(a in s)for(c=r[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},Pb=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(zt(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Hs=function(e,t,n,r,s){return mt(e)?e.call(t,n,r,s):Pt(e)&&~e.indexOf("random(")?$s(e):e},_p=gh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gp={};Qt(_p+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return gp[i]=1});var Mt=function(i){Od(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Bs(r))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,S=r.parent||ut,w=(zt(n)||Fd(n)?ui(n[0]):"length"in r)?[n]:Sn(n),y,b,T,M,C,x,v,A;if(o._targets=w.length?xh(w):Zs("GSAP target "+n+" not found. https://gsap.com",!dn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||qa(l)||qa(h)){if(r=o.vars,y=o.timeline=new Gt({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:w}),y.kill(),y.parent=y._dp=ti(o),y._start=0,d||qa(l)||qa(h)){if(M=w.length,v=d&&tp(d),Yn(d))for(C in d)~_p.indexOf(C)&&(A||(A={}),A[C]=d[C]);for(b=0;b<M;b++)T=xo(r,gp),T.stagger=0,p&&(T.yoyoEase=p),A&&ls(T,A),x=w[b],T.duration=+Hs(l,ti(o),b,x,w),T.delay=(+Hs(h,ti(o),b,x,w)||0)-o._delay,!d&&M===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),y.to(x,T,v?v(b,x,w):0),y._ease=ke.none;y.duration()?l=h=0:o.timeline=0}else if(g){Bs(mn(y.vars.defaults,{ease:"none"})),y._ease=cr(g.ease||r.ease||"none");var F=0,O,V,X;if(zt(g))g.forEach(function(G){return y.to(w,G,">")}),y.duration();else{T={};for(C in g)C==="ease"||C==="easeEach"||Pb(C,g[C],T,g.easeEach);for(C in T)for(O=T[C].sort(function(G,q){return G.t-q.t}),F=0,b=0;b<O.length;b++)V=O[b],X={ease:V.e,duration:(V.t-(b?O[b-1].t:0))/100*l},X[C]=V.v,y.to(w,X,F),F+=X.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||o.duration(l=y.duration())}else o.timeline=0;return f===!0&&!uh&&(wi=ti(o),ut.killTweensOf(w),wi=0),kn(S,ti(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(u||!l&&!g&&o._start===wt(S._time)&&Jt(u)&&ob(ti(o))&&S.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-h)||0)),m&&Kd(ti(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,c=this._tDur,l=this._dur,h=r<0,u=r>c-kt&&!h?c:r<kt?0:r,d,f,g,_,m,p,S,w,y;if(!l)cb(this,r,s,a);else if(u!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,w=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+r,s,a);if(d=wt(u%_),u===c?(g=this._repeat,d=l):(m=wt(u/_),g=~~m,g&&g===m?(d=l,g--):d>l&&(d=l)),p=this._yoyo&&g&1,p&&(y=this._yEase,d=l-d),m=cs(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(w&&this._yEase&&fp(w,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(wt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Jd(this,h?r:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(r,s,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(d/l),this._from&&(this.ratio=S=1-S),!o&&u&&!s&&!m&&(un(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;w&&w.render(r<0?r:w._dur*w._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&Dc(this,r,s,a),un(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&un(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Dc(this,r,!0,!0),(r||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Oi(this,1),!s&&!(h&&!o)&&(u||o||p)&&(un(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,c){Ks||hn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||bh(this,l),h=this._ease(l/this._dur),Rb(this,r,s,a,o,h,l,c)?this.resetTo(r,s,a,o,1):(Do(this,0),this.parent||jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Us(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Lt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,wi&&wi.vars.overwrite!==!0)._first||Us(this),this.parent&&a!==this.timeline.totalDuration()&&hs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=r?Sn(r):o,l=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!s||s==="all")&&sb(o,c))return s==="all"&&(this._pt=0),Us(this);for(u=this._op=this._op||[],s!=="all"&&(Pt(s)&&(_={},Qt(s,function(S){return _[S]=1}),s=_),s=Cb(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){d=l[p],s==="all"?(u[p]=s,g=d,f={}):(f=u[p]=u[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Co(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Us(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return zs(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return zs(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return ut.killTweensOf(r,s,a)},e}(Js);mn(Mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qt("staggerTo,staggerFrom,staggerFromTo",function(i){Mt[i]=function(){var e=new Gt,t=Lc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Mh=function(e,t,n){return e[t]=n},xp=function(e,t,n){return e[t](n)},Db=function(e,t,n,r){return e[t](r.fp,n)},Ib=function(e,t,n){return e.setAttribute(t,n)},wh=function(e,t){return mt(e[t])?xp:fh(e[t])&&e.setAttribute?Ib:Mh},vp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Lb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},yp=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Sh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ub=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},Ob=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Co(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Nb=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},bp=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},en=function(){function i(t,n,r,s,a,o,c,l,h){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||vp,this.d=c||this,this.set=l||Mh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Nb,this.m=n,this.mt=s,this.tween=r},i}();Qt(gh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return _h[i]=1});pn.TweenMax=pn.TweenLite=Mt;pn.TimelineLite=pn.TimelineMax=Gt;ut=new Gt({sortChildren:!1,defaults:os,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});dn.stringFilter=hp;var hr=[],lo={},Fb=[],nf=0,kb=0,vl=function(e){return(lo[e]||Fb).map(function(t){return t()})},Fc=function(){var e=Date.now(),t=[];e-nf>2&&(vl("matchMediaInit"),hr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,c,l;for(o in r)a=Nn.matchMedia(r[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),vl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),nf=e,vl("matchMedia"))},Mp=function(){function i(t,n){this.selector=n&&Uc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=kb++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){mt(n)&&(s=r,r=n,n=mt);var a=this,o=function(){var l=ct,h=a.selector,u;return l&&l!==a&&l.data.push(a),s&&(a.selector=Uc(s)),ct=a,u=r.apply(a,arguments),mt(u)&&a._r.push(u),ct=l,a.selector=h,a.isReverted=!1,u};return a.last=o,n===mt?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var r=ct;ct=null,n(this),ct=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Mt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Gt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Mt)&&l.revert&&l.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=hr.length;a--;)hr[a].id===this.id&&hr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),Bb=function(){function i(t){this.contexts=[],this.scope=t,ct&&ct.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Yn(n)||(n={matches:n});var a=new Mp(0,s||this.scope),o=a.conditions={},c,l,h;ct&&!a.selector&&(a.selector=ct.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(l in n)l==="all"?h=1:(c=Nn.matchMedia(n[l]),c&&(hr.indexOf(a)<0&&hr.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(Fc):c.addEventListener("change",Fc)));return h&&r(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),yo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return op(r)})},timeline:function(e){return new Gt(e)},getTweensOf:function(e,t){return ut.getTweensOf(e,t)},getProperty:function(e,t,n,r){Pt(e)&&(e=Sn(e)[0]);var s=or(e||{}).get,a=n?Zd:qd;return n==="native"&&(n=""),e&&(t?a((cn[t]&&cn[t].get||s)(e,t,n,r)):function(o,c,l){return a((cn[o]&&cn[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=Sn(e),e.length>1){var r=e.map(function(h){return nn.quickSetter(h,t,n)}),s=r.length;return function(h){for(var u=s;u--;)r[u](h)}}e=e[0]||{};var a=cn[t],o=or(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(h){var u=new a;Xr._pt=0,u.init(e,n?h+n:h,Xr,0,[e]),u.render(1,u),Xr._pt&&Sh(1,Xr)}:o.set(e,c);return a?l:function(h){return l(e,c,n?h+n:h,o,1)}},quickTo:function(e,t,n){var r,s=nn.to(e,mn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(c,l,h){return s.resetTo(t,c,l,h)};return a.tween=s,a},isTweening:function(e){return ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=cr(e.ease,os.ease)),Ku(os,e||{})},config:function(e){return Ku(dn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!cn[o]&&!pn[o]&&Zs(t+" effect requires "+o+" plugin.")}),ml[t]=function(o,c,l){return n(Sn(o),mn(c||{},s),l)},a&&(Gt.prototype[t]=function(o,c,l){return this.add(ml[t](o,Yn(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){ke[e]=cr(t)},parseEase:function(e,t){return arguments.length?cr(e,t):ke},getById:function(e){return ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Gt(e),r,s;for(n.smoothChildTiming=Jt(e.smoothChildTiming),ut.remove(n),n._dp=0,n._time=n._tTime=ut._time,r=ut._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Mt&&r.vars.onComplete===r._targets[0]))&&kn(n,r,r._start-r._delay),r=s;return kn(ut,n,0),n},context:function(e,t){return e?new Mp(e,t):ct},matchMedia:function(e){return new Bb(e)},matchMediaRefresh:function(){return hr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Fc()},addEventListener:function(e,t){var n=lo[e]||(lo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=lo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:gb,wrapYoyo:xb,distribute:tp,random:ip,snap:np,normalize:_b,getUnit:Ft,clamp:fb,splitColor:lp,toArray:Sn,selector:Uc,mapRange:sp,pipe:pb,unitize:mb,interpolate:vb,shuffle:ep},install:Vd,effects:ml,ticker:hn,updateRoot:Gt.updateRoot,plugins:cn,globalTimeline:ut,core:{PropTween:en,globals:Gd,Tween:Mt,Timeline:Gt,Animation:Js,getCache:or,_removeLinkedListItem:Co,reverting:function(){return Lt},context:function(e){return e&&ct&&(ct.data.push(e),e._ctx=ct),ct},suppressOverwrites:function(e){return uh=e}}};Qt("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return yo[i]=Mt[i]});hn.add(Gt.updateRoot);Xr=yo.to({},{duration:0});var zb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Hb=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=zb(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},yl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var c,l;if(Pt(s)&&(c={},Qt(s,function(h){return c[h]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}Hb(o,s)}}}},nn=yo.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Lt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},yl("roundProps",Oc),yl("modifiers"),yl("snap",np))||yo;Mt.version=Gt.version=nn.version="3.13.0";Hd=1;dh()&&us();ke.Power0;ke.Power1;ke.Power2;ke.Power3;ke.Power4;ke.Linear;ke.Quad;ke.Cubic;ke.Quart;ke.Quint;ke.Strong;ke.Elastic;ke.Back;ke.SteppedEase;ke.Bounce;ke.Sine;ke.Expo;ke.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rf,Si,$r,Eh,nr,sf,Th,Vb=function(){return typeof window<"u"},fi={},$i=180/Math.PI,Kr=Math.PI/180,Fr=Math.atan2,af=1e8,Ah=/([A-Z])/g,Gb=/(left|right|width|margin|padding|x)/i,Wb=/[\s,\(]\S/,Hn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},wp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Sp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Zb=function(e,t,n){return e.style[t]=n},jb=function(e,t,n){return e.style.setProperty(t,n)},$b=function(e,t,n){return e._gsap[t]=n},Kb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Jb=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Qb=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},ft="transform",tn=ft+"Origin",eM=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in fi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Hn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ni(r,o)}):this.tfm[e]=a.x?a[e]:ni(r,e),e===tn&&(this.tfm.zOrigin=a.zOrigin);else return Hn.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(ft)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(tn,t,"")),e=ft}(s||t)&&this.props.push(e,t,s[e])},Ep=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},tM=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ah,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Th(),(!s||!s.isStart)&&!n[ft]&&(Ep(n),r.zOrigin&&n[tn]&&(n[tn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Tp=function(e,t){var n={target:e,props:[],revert:tM,save:eM};return e._gsap||nn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Ap,Bc=function(e,t){var n=Si.createElementNS?Si.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Si.createElement(e);return n&&n.style?n:Si.createElement(e)},En=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ah,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,fs(t)||t,1)||""},of="O,Moz,ms,Ms,Webkit".split(","),fs=function(e,t,n){var r=t||nr,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(of[a]+e in s););return a<0?null:(a===3?"ms":a>=0?of[a]:"")+e},zc=function(){Vb()&&window.document&&(rf=window,Si=rf.document,$r=Si.documentElement,nr=Bc("div")||{style:{}},Bc("div"),ft=fs(ft),tn=ft+"Origin",nr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ap=!!fs("perspective"),Th=nn.core.reverting,Eh=1)},lf=function(e){var t=e.ownerSVGElement,n=Bc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),$r.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),$r.removeChild(n),s},cf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Rp=function(e){var t,n;try{t=e.getBBox()}catch{t=lf(e),n=1}return t&&(t.width||t.height)||n||(t=lf(e)),t&&!t.width&&!t.x&&!t.y?{x:+cf(e,["x","cx","x1"])||0,y:+cf(e,["y","cy","y1"])||0,width:0,height:0}:t},Cp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Rp(e))},pr=function(e,t){if(t){var n=e.style,r;t in fi&&t!==tn&&(t=ft),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Ah,"-$1").toLowerCase())):n.removeAttribute(t)}},Ei=function(e,t,n,r,s,a){var o=new en(e._pt,t,n,0,1,a?Sp:wp);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},hf={deg:1,rad:1,turn:1},nM={grid:1,flex:1},Ni=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=nr.style,c=Gb.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=r==="px",f=r==="%",g,_,m,p;if(r===a||!s||hf[r]||hf[a])return s;if(a!=="px"&&!d&&(s=i(e,t,n,"px")),p=e.getCTM&&Cp(e),(f||a==="%")&&(fi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[c?"width":"height"]:e[h],gt(f?s/g*u:s/100*g);if(o[c?"width":"height"]=u+(d?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Si||!_.appendChild)&&(_=Si.body),m=_._gsap,m&&f&&m.width&&c&&m.time===hn.time&&!m.uncache)return gt(s/m.width*u);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=u+r,g=e[h],S?e.style[t]=S:pr(e,t)}else(f||a==="%")&&!nM[En(_,"display")]&&(o.position=En(e,"position")),_===e&&(o.position="static"),_.appendChild(nr),g=nr[h],_.removeChild(nr),o.position="absolute";return c&&f&&(m=or(_),m.time=hn.time,m.width=_[h]),gt(d?g*s/u:g&&s?u/g*s:0)},ni=function(e,t,n,r){var s;return Eh||zc(),t in Hn&&t!=="transform"&&(t=Hn[t],~t.indexOf(",")&&(t=t.split(",")[0])),fi[t]&&t!=="transform"?(s=ea(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Mo(En(e,tn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=bo[t]&&bo[t](e,t,n)||En(e,t)||Xd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ni(e,t,s,n)+n:s},iM=function(e,t,n,r){if(!n||n==="none"){var s=fs(t,e,1),a=s&&En(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=En(e,"borderTopColor"))}var o=new en(this._pt,e.style,t,0,1,yp),c=0,l=0,h,u,d,f,g,_,m,p,S,w,y,b;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=En(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=En(e,t)||r,_?e.style[t]=_:pr(e,t)),h=[n,r],hp(h),n=h[0],r=h[1],d=n.match(Wr)||[],b=r.match(Wr)||[],b.length){for(;u=Wr.exec(r);)m=u[0],S=r.substring(c,u.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=d[l++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),m.charAt(1)==="="&&(m=jr(f,m)+y),p=parseFloat(m),w=m.substr((p+"").length),c=Wr.lastIndex-w.length,w||(w=w||dn.units[t]||y,c===r.length&&(r+=w,o.e+=w)),y!==w&&(f=Ni(e,t,_,w)||0),o._pt={_next:o._pt,p:S||l===1?S:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<r.length?r.substring(c,r.length):""}else o.r=t==="display"&&r==="none"?Sp:wp;return Bd.test(r)&&(o.e=0),this._pt=o,o},uf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rM=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=uf[n]||n,t[1]=uf[r]||r,t.join(" ")},sM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)r.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],fi[o]&&(c=1,o=o==="transformOrigin"?tn:ft),pr(n,o);c&&(pr(n,ft),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ea(n,1),a.uncache=1,Ep(r)))}},bo={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new en(e._pt,t,n,0,0,sM);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Qs=[1,0,0,1,0,0],Pp={},Dp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ff=function(e){var t=En(e,ft);return Dp(t)?Qs:t.substr(7).match(kd).map(gt)},Rh=function(e,t){var n=e._gsap||or(e),r=e.style,s=ff(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Qs:s):(s===Qs&&!e.offsetParent&&e!==$r&&!n.svg&&(c=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,$r.appendChild(e)),s=ff(e),c?r.display=c:pr(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):$r.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Hc=function(e,t,n,r,s,a){var o=e._gsap,c=s||Rh(e,!0),l=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=c[0],g=c[1],_=c[2],m=c[3],p=c[4],S=c[5],w=t.split(" "),y=parseFloat(w[0])||0,b=parseFloat(w[1])||0,T,M,C,x;n?c!==Qs&&(M=f*m-g*_)&&(C=y*(m/M)+b*(-_/M)+(_*S-m*p)/M,x=y*(-g/M)+b*(f/M)-(f*S-g*p)/M,y=C,b=x):(T=Rp(e),y=T.x+(~w[0].indexOf("%")?y/100*T.width:y),b=T.y+(~(w[1]||w[0]).indexOf("%")?b/100*T.height:b)),r||r!==!1&&o.smooth?(p=y-l,S=b-h,o.xOffset=u+(p*f+S*_)-p,o.yOffset=d+(p*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[tn]="0px 0px",a&&(Ei(a,o,"xOrigin",l,y),Ei(a,o,"yOrigin",h,b),Ei(a,o,"xOffset",u,o.xOffset),Ei(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},ea=function(e,t){var n=e._gsap||new pp(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=En(e,tn)||"0",h,u,d,f,g,_,m,p,S,w,y,b,T,M,C,x,v,A,F,O,V,X,G,q,H,te,oe,me,Te,je,Y,Q;return h=u=d=_=m=p=S=w=y=0,f=g=1,n.svg=!!(e.getCTM&&Cp(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[ft]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ft]!=="none"?c[ft]:"")),r.scale=r.rotate=r.translate="none"),M=Rh(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),l=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Hc(e,q||l,!!q||n.originIsAbsolute,n.smooth!==!1,M)),b=n.xOrigin||0,T=n.yOrigin||0,M!==Qs&&(A=M[0],F=M[1],O=M[2],V=M[3],h=X=M[4],u=G=M[5],M.length===6?(f=Math.sqrt(A*A+F*F),g=Math.sqrt(V*V+O*O),_=A||F?Fr(F,A)*$i:0,S=O||V?Fr(O,V)*$i+_:0,S&&(g*=Math.abs(Math.cos(S*Kr))),n.svg&&(h-=b-(b*A+T*O),u-=T-(b*F+T*V))):(Q=M[6],je=M[7],oe=M[8],me=M[9],Te=M[10],Y=M[11],h=M[12],u=M[13],d=M[14],C=Fr(Q,Te),m=C*$i,C&&(x=Math.cos(-C),v=Math.sin(-C),q=X*x+oe*v,H=G*x+me*v,te=Q*x+Te*v,oe=X*-v+oe*x,me=G*-v+me*x,Te=Q*-v+Te*x,Y=je*-v+Y*x,X=q,G=H,Q=te),C=Fr(-O,Te),p=C*$i,C&&(x=Math.cos(-C),v=Math.sin(-C),q=A*x-oe*v,H=F*x-me*v,te=O*x-Te*v,Y=V*v+Y*x,A=q,F=H,O=te),C=Fr(F,A),_=C*$i,C&&(x=Math.cos(C),v=Math.sin(C),q=A*x+F*v,H=X*x+G*v,F=F*x-A*v,G=G*x-X*v,A=q,X=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=gt(Math.sqrt(A*A+F*F+O*O)),g=gt(Math.sqrt(G*G+Q*Q)),C=Fr(X,G),S=Math.abs(C)>2e-4?C*$i:0,y=Y?1/(Y<0?-Y:Y):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Dp(En(e,ft)),q&&e.setAttribute("transform",q))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=gt(f),n.scaleY=gt(g),n.rotation=gt(_)+o,n.rotationX=gt(m)+o,n.rotationY=gt(p)+o,n.skewX=S+o,n.skewY=w+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(r[tn]=Mo(l)),n.xOffset=n.yOffset=0,n.force3D=dn.force3D,n.renderTransform=n.svg?oM:Ap?Ip:aM,n.uncache=0,n},Mo=function(e){return(e=e.split(" "))[0]+" "+e[1]},bl=function(e,t,n){var r=Ft(t);return gt(parseFloat(t)+parseFloat(Ni(e,"x",n+"px",r)))+r},aM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ip(e,t)},qi="0deg",Cs="0px",Zi=") ",Ip=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,w=n.zOrigin,y="",b=p==="auto"&&e&&e!==1||p===!0;if(w&&(u!==qi||h!==qi)){var T=parseFloat(h)*Kr,M=Math.sin(T),C=Math.cos(T),x;T=parseFloat(u)*Kr,x=Math.cos(T),a=bl(S,a,M*x*-w),o=bl(S,o,-Math.sin(T)*-w),c=bl(S,c,C*x*-w+w)}m!==Cs&&(y+="perspective("+m+Zi),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(b||a!==Cs||o!==Cs||c!==Cs)&&(y+=c!==Cs||b?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Zi),l!==qi&&(y+="rotate("+l+Zi),h!==qi&&(y+="rotateY("+h+Zi),u!==qi&&(y+="rotateX("+u+Zi),(d!==qi||f!==qi)&&(y+="skew("+d+", "+f+Zi),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Zi),S.style[ft]=y||"translate(0, 0)"},oM=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,w=parseFloat(a),y=parseFloat(o),b,T,M,C,x;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Kr,l*=Kr,b=Math.cos(c)*u,T=Math.sin(c)*u,M=Math.sin(c-l)*-d,C=Math.cos(c-l)*d,l&&(h*=Kr,x=Math.tan(l-h),x=Math.sqrt(1+x*x),M*=x,C*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),b*=x,T*=x)),b=gt(b),T=gt(T),M=gt(M),C=gt(C)):(b=u,C=d,T=M=0),(w&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(w=Ni(f,"x",a,"px"),y=Ni(f,"y",o,"px")),(g||_||m||p)&&(w=gt(w+g-(g*b+_*M)+m),y=gt(y+_-(g*T+_*C)+p)),(r||s)&&(x=f.getBBox(),w=gt(w+r/100*x.width),y=gt(y+s/100*x.height)),x="matrix("+b+","+T+","+M+","+C+","+w+","+y+")",f.setAttribute("transform",x),S&&(f.style[ft]=x)},lM=function(e,t,n,r,s){var a=360,o=Pt(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?$i:1),l=c-r,h=r+l+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-360)),u==="cw"&&l<0?l=(l+a*af)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*af)%a-~~(l/a)*a)),e._pt=d=new en(e._pt,t,n,r,l,Xb),d.e=h,d.u="deg",e._props.push(n),d},df=function(e,t){for(var n in t)e[n]=t[n];return e},cM=function(e,t,n){var r=df({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,h,u,d,f,g;r.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[ft]=t,o=ea(n,1),pr(n,ft),n.setAttribute("transform",l)):(l=getComputedStyle(n)[ft],a[ft]=t,o=ea(n,1),a[ft]=l);for(c in fi)l=r[c],h=o[c],l!==h&&s.indexOf(c)<0&&(f=Ft(l),g=Ft(h),u=f!==g?Ni(n,c,l,g):parseFloat(l),d=parseFloat(h),e._pt=new en(e._pt,o,c,u,d-u,kc),e._pt.u=g||0,e._props.push(c));df(o,r)};Qt("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});bo[e>1?"border"+i:i]=function(o,c,l,h,u){var d,f;if(arguments.length<4)return d=a.map(function(g){return ni(o,g,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(c,f,u)}});var Lp={name:"css",register:zc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,c=n.vars.startAt,l,h,u,d,f,g,_,m,p,S,w,y,b,T,M,C;Eh||zc(),this.styles=this.styles||Tp(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(cn[_]&&mp(_,t,n,r,e,s)))){if(f=typeof h,g=bo[_],f==="function"&&(h=h.call(n,r,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=$s(h)),g)g(this,e,_,h,n)&&(M=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Pi.lastIndex=0,Pi.test(l)||(m=Ft(l),p=Ft(h)),p?m!==p&&(l=Ni(e,_,l,p)+p):m&&(h+=m),this.add(o,"setProperty",l,h,r,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,r,e,s):c[_],Pt(l)&&~l.indexOf("random(")&&(l=$s(l)),Ft(l+"")||l==="auto"||(l+=dn.units[_]||Ft(ni(e,_))||""),(l+"").charAt(1)==="="&&(l=ni(e,_))):l=ni(e,_),d=parseFloat(l),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),_ in Hn&&(_==="autoAlpha"&&(d===1&&ni(e,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,o.visibility),Ei(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Hn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in fi,w){if(this.styles.save(_),f==="string"&&h.substring(0,6)==="var(--"&&(h=En(e,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),y||(b=e._gsap,b.renderTransform&&!t.parseTransform||ea(e,t.parseTransform),T=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new en(this._pt,o,ft,0,1,b.renderTransform,b,0,-1),y.dep=1),_==="scale")this._pt=new en(this._pt,b,"scaleY",b.scaleY,(S?jr(b.scaleY,S+u):u)-b.scaleY||0,kc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(tn,0,o[tn]),h=rM(h),b.svg?Hc(e,h,0,T,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&Ei(this,b,"zOrigin",b.zOrigin,p),Ei(this,o,_,Mo(l),Mo(h)));continue}else if(_==="svgOrigin"){Hc(e,h,1,T,0,this);continue}else if(_ in Pp){lM(this,b,_,d,S?jr(d,S+h):h);continue}else if(_==="smoothOrigin"){Ei(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){cM(this,h,e);continue}}else _ in o||(_=fs(_)||_);if(w||(u||u===0)&&(d||d===0)&&!Wb.test(h)&&_ in o)m=(l+"").substr((d+"").length),u||(u=0),p=Ft(h)||(_ in dn.units?dn.units[_]:m),m!==p&&(d=Ni(e,_,l,p)),this._pt=new en(this._pt,w?b:o,_,d,(S?jr(d,S+u):u)-d,!w&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?qb:kc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=Yb);else if(_ in o)iM.call(this,e,_,l,S?S+h:h);else if(_ in e)this.add(e,_,l||e[_],S?S+h:h,r,s);else if(_!=="parseTransform"){mh(_,h);continue}w||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,l||e[_])),a.push(_)}}M&&bp(this)},render:function(e,t){if(t.tween._time||!Th())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ni,aliases:Hn,getSetter:function(e,t,n){var r=Hn[t];return r&&r.indexOf(",")<0&&(t=r),t in fi&&t!==tn&&(e._gsap.x||ni(e,"x"))?n&&sf===n?t==="scale"?Kb:$b:(sf=n||{})&&(t==="scale"?Jb:Qb):e.style&&!fh(e.style[t])?Zb:~t.indexOf("-")?jb:wh(e,t)},core:{_removeProperty:pr,_getMatrix:Rh}};nn.utils.checkPrefix=fs;nn.core.getStyleSaver=Tp;(function(i,e,t,n){var r=Qt(i+","+e+","+t,function(s){fi[s]=1});Qt(e,function(s){dn.units[s]="deg",Pp[s]=1}),Hn[r[13]]=i+","+e,Qt(n,function(s){var a=s.split(":");Hn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){dn.units[i]="px"});nn.registerPlugin(Lp);var Ns=nn.registerPlugin(Lp)||nn;Ns.core.Tween;var hM=Object.defineProperty,uM=(i,e,t)=>e in i?hM(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Ze=(i,e,t)=>(uM(i,typeof e!="symbol"?e+"":e,t),t);function Ml(i,e,t,n,r){let s;if(i=i.subarray||i.slice?i:i.buffer,t=t.subarray||t.slice?t:t.buffer,i=e?i.subarray?i.subarray(e,r&&e+r):i.slice(e,r&&e+r):i,t.set)t.set(i,n);else for(s=0;s<i.length;s++)t[s+n]=i[s];return t}function fM(i){return i instanceof Float32Array?i:i instanceof nt?i.getAttribute("position").array:i.map(e=>{const t=Array.isArray(e);return e instanceof D?[e.x,e.y,e.z]:e instanceof Ee?[e.x,e.y,0]:t&&e.length===3?[e[0],e[1],e[2]]:t&&e.length===2?[e[0],e[1],0]:e}).flat()}class Ps extends nt{constructor(){super(),Ze(this,"type","MeshLine"),Ze(this,"isMeshLine",!0),Ze(this,"positions",[]),Ze(this,"previous",[]),Ze(this,"next",[]),Ze(this,"side",[]),Ze(this,"width",[]),Ze(this,"indices_array",[]),Ze(this,"uvs",[]),Ze(this,"counters",[]),Ze(this,"widthCallback",null),Ze(this,"_attributes"),Ze(this,"_points",[]),Ze(this,"points"),Ze(this,"matrixWorld",new at),Object.defineProperties(this,{points:{enumerable:!0,get(){return this._points},set(e){this.setPoints(e,this.widthCallback)}}})}setMatrixWorld(e){this.matrixWorld=e}setPoints(e,t){if(e=fM(e),this._points=e,this.widthCallback=t??null,this.positions=[],this.counters=[],e.length&&e[0]instanceof D)for(let n=0;n<e.length;n++){const r=e[n],s=n/(e.length-1);this.positions.push(r.x,r.y,r.z),this.positions.push(r.x,r.y,r.z),this.counters.push(s),this.counters.push(s)}else for(let n=0;n<e.length;n+=3){const r=n/(e.length-1);this.positions.push(e[n],e[n+1],e[n+2]),this.positions.push(e[n],e[n+1],e[n+2]),this.counters.push(r),this.counters.push(r)}this.process()}compareV3(e,t){const n=e*6,r=t*6;return this.positions[n]===this.positions[r]&&this.positions[n+1]===this.positions[r+1]&&this.positions[n+2]===this.positions[r+2]}copyV3(e){const t=e*6;return[this.positions[t],this.positions[t+1],this.positions[t+2]]}process(){const e=this.positions.length/6;this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[];let t,n;this.compareV3(0,e-1)?n=this.copyV3(e-2):n=this.copyV3(0),this.previous.push(n[0],n[1],n[2]),this.previous.push(n[0],n[1],n[2]);for(let r=0;r<e;r++){if(this.side.push(1),this.side.push(-1),this.widthCallback?t=this.widthCallback(r/(e-1)):t=1,this.width.push(t),this.width.push(t),this.uvs.push(r/(e-1),0),this.uvs.push(r/(e-1),1),r<e-1){n=this.copyV3(r),this.previous.push(n[0],n[1],n[2]),this.previous.push(n[0],n[1],n[2]);const s=r*2;this.indices_array.push(s,s+1,s+2),this.indices_array.push(s+2,s+1,s+3)}r>0&&(n=this.copyV3(r),this.next.push(n[0],n[1],n[2]),this.next.push(n[0],n[1],n[2]))}this.compareV3(e-1,0)?n=this.copyV3(1):n=this.copyV3(e-1),this.next.push(n[0],n[1],n[2]),this.next.push(n[0],n[1],n[2]),!this._attributes||this._attributes.position.count!==this.counters.length?this._attributes={position:new bt(new Float32Array(this.positions),3),previous:new bt(new Float32Array(this.previous),3),next:new bt(new Float32Array(this.next),3),side:new bt(new Float32Array(this.side),1),width:new bt(new Float32Array(this.width),1),uv:new bt(new Float32Array(this.uvs),2),index:new bt(new Uint16Array(this.indices_array),1),counters:new bt(new Float32Array(this.counters),1)}:(this._attributes.position.copyArray(new Float32Array(this.positions)),this._attributes.position.needsUpdate=!0,this._attributes.previous.copyArray(new Float32Array(this.previous)),this._attributes.previous.needsUpdate=!0,this._attributes.next.copyArray(new Float32Array(this.next)),this._attributes.next.needsUpdate=!0,this._attributes.side.copyArray(new Float32Array(this.side)),this._attributes.side.needsUpdate=!0,this._attributes.width.copyArray(new Float32Array(this.width)),this._attributes.width.needsUpdate=!0,this._attributes.uv.copyArray(new Float32Array(this.uvs)),this._attributes.uv.needsUpdate=!0,this._attributes.index.copyArray(new Uint16Array(this.indices_array)),this._attributes.index.needsUpdate=!0),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setIndex(this._attributes.index),this.computeBoundingSphere(),this.computeBoundingBox()}advance({x:e,y:t,z:n}){const r=this._attributes.position.array,s=this._attributes.previous.array,a=this._attributes.next.array,o=r.length;Ml(r,0,s,0,o),Ml(r,6,r,0,o-6),r[o-6]=e,r[o-5]=t,r[o-4]=n,r[o-3]=e,r[o-2]=t,r[o-1]=n,Ml(r,6,a,0,o-6),a[o-6]=e,a[o-5]=t,a[o-4]=n,a[o-3]=e,a[o-2]=t,a[o-1]=n,this._attributes.position.needsUpdate=!0,this._attributes.previous.needsUpdate=!0,this._attributes.next.needsUpdate=!0}}const dM=`
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
`,pM=parseInt(To.replace(/\D+/g,"")),mM=pM>=154?"colorspace_fragment":"encodings_fragment",_M=`
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
    #include <${mM}>
  }
`;class Ds extends hi{constructor(e){super({uniforms:{...ne.fog,lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},color:{value:new Ue(16777215)},gradient:{value:[new Ue(16711680),new Ue(65280)]},opacity:{value:1},resolution:{value:new Ee(1,1)},sizeAttenuation:{value:1},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:0},useGradient:{value:0},visibility:{value:1},alphaTest:{value:0},repeat:{value:new Ee(1,1)}},vertexShader:dM,fragmentShader:_M}),Ze(this,"lineWidth"),Ze(this,"map"),Ze(this,"useMap"),Ze(this,"alphaMap"),Ze(this,"useAlphaMap"),Ze(this,"color"),Ze(this,"gradient"),Ze(this,"resolution"),Ze(this,"sizeAttenuation"),Ze(this,"dashArray"),Ze(this,"dashOffset"),Ze(this,"dashRatio"),Ze(this,"useDash"),Ze(this,"useGradient"),Ze(this,"visibility"),Ze(this,"repeat"),this.type="MeshLineMaterial",Object.defineProperties(this,{lineWidth:{enumerable:!0,get(){return this.uniforms.lineWidth.value},set(t){this.uniforms.lineWidth.value=t}},map:{enumerable:!0,get(){return this.uniforms.map.value},set(t){this.uniforms.map.value=t}},useMap:{enumerable:!0,get(){return this.uniforms.useMap.value},set(t){this.uniforms.useMap.value=t}},alphaMap:{enumerable:!0,get(){return this.uniforms.alphaMap.value},set(t){this.uniforms.alphaMap.value=t}},useAlphaMap:{enumerable:!0,get(){return this.uniforms.useAlphaMap.value},set(t){this.uniforms.useAlphaMap.value=t}},color:{enumerable:!0,get(){return this.uniforms.color.value},set(t){this.uniforms.color.value=t}},gradient:{enumerable:!0,get(){return this.uniforms.gradient.value},set(t){this.uniforms.gradient.value=t}},opacity:{enumerable:!0,get(){return this.uniforms.opacity.value},set(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get(){return this.uniforms.resolution.value},set(t){this.uniforms.resolution.value.copy(t)}},sizeAttenuation:{enumerable:!0,get(){return this.uniforms.sizeAttenuation.value},set(t){this.uniforms.sizeAttenuation.value=t}},dashArray:{enumerable:!0,get(){return this.uniforms.dashArray.value},set(t){this.uniforms.dashArray.value=t,this.useDash=t!==0?1:0}},dashOffset:{enumerable:!0,get(){return this.uniforms.dashOffset.value},set(t){this.uniforms.dashOffset.value=t}},dashRatio:{enumerable:!0,get(){return this.uniforms.dashRatio.value},set(t){this.uniforms.dashRatio.value=t}},useDash:{enumerable:!0,get(){return this.uniforms.useDash.value},set(t){this.uniforms.useDash.value=t}},useGradient:{enumerable:!0,get(){return this.uniforms.useGradient.value},set(t){this.uniforms.useGradient.value=t}},visibility:{enumerable:!0,get(){return this.uniforms.visibility.value},set(t){this.uniforms.visibility.value=t}},alphaTest:{enumerable:!0,get(){return this.uniforms.alphaTest.value},set(t){this.uniforms.alphaTest.value=t}},repeat:{enumerable:!0,get(){return this.uniforms.repeat.value},set(t){this.uniforms.repeat.value.copy(t)}}}),this.setValues(e)}copy(e){return super.copy(e),this.lineWidth=e.lineWidth,this.map=e.map,this.useMap=e.useMap,this.alphaMap=e.alphaMap,this.useAlphaMap=e.useAlphaMap,this.color.copy(e.color),this.gradient=e.gradient,this.opacity=e.opacity,this.resolution.copy(e.resolution),this.sizeAttenuation=e.sizeAttenuation,this.dashArray=e.dashArray,this.dashOffset=e.dashOffset,this.dashRatio=e.dashRatio,this.useDash=e.useDash,this.useGradient=e.useGradient,this.visibility=e.visibility,this.alphaTest=e.alphaTest,this.repeat.copy(e.repeat),this}}function pf(i,e){const t=new at,n=new gs,r=new _s,s=new D,a=this.geometry;if(r.copy(a.boundingSphere),r.applyMatrix4(this.matrixWorld),!i.ray.intersectSphere(r,s))return;t.copy(this.matrixWorld).invert(),n.copy(i.ray).applyMatrix4(t);const o=new D,c=new D,l=new D,h=this instanceof H_?2:1,u=a.index,d=a.attributes;if(u!==null){const f=u.array,g=d.position.array,_=d.width.array;for(let m=0,p=f.length-1;m<p;m+=h){const S=f[m],w=f[m+1];o.fromArray(g,S*3),c.fromArray(g,w*3);const y=_[Math.floor(m/3)]!=null?_[Math.floor(m/3)]:1,b=i.params.Line.threshold+this.material.lineWidth*y/2,T=b*b;if(n.distanceSqToSegment(o,c,s,l)>T)continue;s.applyMatrix4(this.matrixWorld);const C=i.ray.origin.distanceTo(s);C<i.near||C>i.far||(e.push({distance:C,point:l.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:void 0,object:this}),m=p)}}}/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const gM=4,mf=0,_f=1,xM=2;function vs(i){let e=i.length;for(;--e>=0;)i[e]=0}const vM=0,Up=1,yM=2,bM=3,MM=258,Ch=29,da=256,ta=da+1+Ch,Jr=30,Ph=19,Op=2*ta+1,ir=15,wl=16,wM=7,Dh=256,Np=16,Fp=17,kp=18,Vc=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),co=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),SM=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),Bp=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),EM=512,ii=new Array((ta+2)*2);vs(ii);const Vs=new Array(Jr*2);vs(Vs);const na=new Array(EM);vs(na);const ia=new Array(MM-bM+1);vs(ia);const Ih=new Array(Ch);vs(Ih);const wo=new Array(Jr);vs(wo);function Sl(i,e,t,n,r){this.static_tree=i,this.extra_bits=e,this.extra_base=t,this.elems=n,this.max_length=r,this.has_stree=i&&i.length}let zp,Hp,Vp;function El(i,e){this.dyn_tree=i,this.max_code=0,this.stat_desc=e}const Gp=i=>i<256?na[i]:na[256+(i>>>7)],ra=(i,e)=>{i.pending_buf[i.pending++]=e&255,i.pending_buf[i.pending++]=e>>>8&255},$t=(i,e,t)=>{i.bi_valid>wl-t?(i.bi_buf|=e<<i.bi_valid&65535,ra(i,i.bi_buf),i.bi_buf=e>>wl-i.bi_valid,i.bi_valid+=t-wl):(i.bi_buf|=e<<i.bi_valid&65535,i.bi_valid+=t)},Bn=(i,e,t)=>{$t(i,t[e*2],t[e*2+1])},Wp=(i,e)=>{let t=0;do t|=i&1,i>>>=1,t<<=1;while(--e>0);return t>>>1},TM=i=>{i.bi_valid===16?(ra(i,i.bi_buf),i.bi_buf=0,i.bi_valid=0):i.bi_valid>=8&&(i.pending_buf[i.pending++]=i.bi_buf&255,i.bi_buf>>=8,i.bi_valid-=8)},AM=(i,e)=>{const t=e.dyn_tree,n=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,h,u,d,f,g,_=0;for(d=0;d<=ir;d++)i.bl_count[d]=0;for(t[i.heap[i.heap_max]*2+1]=0,l=i.heap_max+1;l<Op;l++)h=i.heap[l],d=t[t[h*2+1]*2+1]+1,d>c&&(d=c,_++),t[h*2+1]=d,!(h>n)&&(i.bl_count[d]++,f=0,h>=o&&(f=a[h-o]),g=t[h*2],i.opt_len+=g*(d+f),s&&(i.static_len+=g*(r[h*2+1]+f)));if(_!==0){do{for(d=c-1;i.bl_count[d]===0;)d--;i.bl_count[d]--,i.bl_count[d+1]+=2,i.bl_count[c]--,_-=2}while(_>0);for(d=c;d!==0;d--)for(h=i.bl_count[d];h!==0;)u=i.heap[--l],!(u>n)&&(t[u*2+1]!==d&&(i.opt_len+=(d-t[u*2+1])*t[u*2],t[u*2+1]=d),h--)}},Xp=(i,e,t)=>{const n=new Array(ir+1);let r=0,s,a;for(s=1;s<=ir;s++)r=r+t[s-1]<<1,n[s]=r;for(a=0;a<=e;a++){let o=i[a*2+1];o!==0&&(i[a*2]=Wp(n[o]++,o))}},RM=()=>{let i,e,t,n,r;const s=new Array(ir+1);for(t=0,n=0;n<Ch-1;n++)for(Ih[n]=t,i=0;i<1<<Vc[n];i++)ia[t++]=n;for(ia[t-1]=n,r=0,n=0;n<16;n++)for(wo[n]=r,i=0;i<1<<co[n];i++)na[r++]=n;for(r>>=7;n<Jr;n++)for(wo[n]=r<<7,i=0;i<1<<co[n]-7;i++)na[256+r++]=n;for(e=0;e<=ir;e++)s[e]=0;for(i=0;i<=143;)ii[i*2+1]=8,i++,s[8]++;for(;i<=255;)ii[i*2+1]=9,i++,s[9]++;for(;i<=279;)ii[i*2+1]=7,i++,s[7]++;for(;i<=287;)ii[i*2+1]=8,i++,s[8]++;for(Xp(ii,ta+1,s),i=0;i<Jr;i++)Vs[i*2+1]=5,Vs[i*2]=Wp(i,5);zp=new Sl(ii,Vc,da+1,ta,ir),Hp=new Sl(Vs,co,0,Jr,ir),Vp=new Sl(new Array(0),SM,0,Ph,wM)},Yp=i=>{let e;for(e=0;e<ta;e++)i.dyn_ltree[e*2]=0;for(e=0;e<Jr;e++)i.dyn_dtree[e*2]=0;for(e=0;e<Ph;e++)i.bl_tree[e*2]=0;i.dyn_ltree[Dh*2]=1,i.opt_len=i.static_len=0,i.sym_next=i.matches=0},qp=i=>{i.bi_valid>8?ra(i,i.bi_buf):i.bi_valid>0&&(i.pending_buf[i.pending++]=i.bi_buf),i.bi_buf=0,i.bi_valid=0},gf=(i,e,t,n)=>{const r=e*2,s=t*2;return i[r]<i[s]||i[r]===i[s]&&n[e]<=n[t]},Tl=(i,e,t)=>{const n=i.heap[t];let r=t<<1;for(;r<=i.heap_len&&(r<i.heap_len&&gf(e,i.heap[r+1],i.heap[r],i.depth)&&r++,!gf(e,n,i.heap[r],i.depth));)i.heap[t]=i.heap[r],t=r,r<<=1;i.heap[t]=n},xf=(i,e,t)=>{let n,r,s=0,a,o;if(i.sym_next!==0)do n=i.pending_buf[i.sym_buf+s++]&255,n+=(i.pending_buf[i.sym_buf+s++]&255)<<8,r=i.pending_buf[i.sym_buf+s++],n===0?Bn(i,r,e):(a=ia[r],Bn(i,a+da+1,e),o=Vc[a],o!==0&&(r-=Ih[a],$t(i,r,o)),n--,a=Gp(n),Bn(i,a,t),o=co[a],o!==0&&(n-=wo[a],$t(i,n,o)));while(s<i.sym_next);Bn(i,Dh,e)},Gc=(i,e)=>{const t=e.dyn_tree,n=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let a,o,c=-1,l;for(i.heap_len=0,i.heap_max=Op,a=0;a<s;a++)t[a*2]!==0?(i.heap[++i.heap_len]=c=a,i.depth[a]=0):t[a*2+1]=0;for(;i.heap_len<2;)l=i.heap[++i.heap_len]=c<2?++c:0,t[l*2]=1,i.depth[l]=0,i.opt_len--,r&&(i.static_len-=n[l*2+1]);for(e.max_code=c,a=i.heap_len>>1;a>=1;a--)Tl(i,t,a);l=s;do a=i.heap[1],i.heap[1]=i.heap[i.heap_len--],Tl(i,t,1),o=i.heap[1],i.heap[--i.heap_max]=a,i.heap[--i.heap_max]=o,t[l*2]=t[a*2]+t[o*2],i.depth[l]=(i.depth[a]>=i.depth[o]?i.depth[a]:i.depth[o])+1,t[a*2+1]=t[o*2+1]=l,i.heap[1]=l++,Tl(i,t,1);while(i.heap_len>=2);i.heap[--i.heap_max]=i.heap[1],AM(i,e),Xp(t,c,i.bl_count)},vf=(i,e,t)=>{let n,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(t+1)*2+1]=65535,n=0;n<=t;n++)s=a,a=e[(n+1)*2+1],!(++o<c&&s===a)&&(o<l?i.bl_tree[s*2]+=o:s!==0?(s!==r&&i.bl_tree[s*2]++,i.bl_tree[Np*2]++):o<=10?i.bl_tree[Fp*2]++:i.bl_tree[kp*2]++,o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4))},yf=(i,e,t)=>{let n,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),n=0;n<=t;n++)if(s=a,a=e[(n+1)*2+1],!(++o<c&&s===a)){if(o<l)do Bn(i,s,i.bl_tree);while(--o!==0);else s!==0?(s!==r&&(Bn(i,s,i.bl_tree),o--),Bn(i,Np,i.bl_tree),$t(i,o-3,2)):o<=10?(Bn(i,Fp,i.bl_tree),$t(i,o-3,3)):(Bn(i,kp,i.bl_tree),$t(i,o-11,7));o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4)}},CM=i=>{let e;for(vf(i,i.dyn_ltree,i.l_desc.max_code),vf(i,i.dyn_dtree,i.d_desc.max_code),Gc(i,i.bl_desc),e=Ph-1;e>=3&&i.bl_tree[Bp[e]*2+1]===0;e--);return i.opt_len+=3*(e+1)+5+5+4,e},PM=(i,e,t,n)=>{let r;for($t(i,e-257,5),$t(i,t-1,5),$t(i,n-4,4),r=0;r<n;r++)$t(i,i.bl_tree[Bp[r]*2+1],3);yf(i,i.dyn_ltree,e-1),yf(i,i.dyn_dtree,t-1)},DM=i=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&i.dyn_ltree[t*2]!==0)return mf;if(i.dyn_ltree[9*2]!==0||i.dyn_ltree[10*2]!==0||i.dyn_ltree[13*2]!==0)return _f;for(t=32;t<da;t++)if(i.dyn_ltree[t*2]!==0)return _f;return mf};let bf=!1;const IM=i=>{bf||(RM(),bf=!0),i.l_desc=new El(i.dyn_ltree,zp),i.d_desc=new El(i.dyn_dtree,Hp),i.bl_desc=new El(i.bl_tree,Vp),i.bi_buf=0,i.bi_valid=0,Yp(i)},Zp=(i,e,t,n)=>{$t(i,(vM<<1)+(n?1:0),3),qp(i),ra(i,t),ra(i,~t),t&&i.pending_buf.set(i.window.subarray(e,e+t),i.pending),i.pending+=t},LM=i=>{$t(i,Up<<1,3),Bn(i,Dh,ii),TM(i)},UM=(i,e,t,n)=>{let r,s,a=0;i.level>0?(i.strm.data_type===xM&&(i.strm.data_type=DM(i)),Gc(i,i.l_desc),Gc(i,i.d_desc),a=CM(i),r=i.opt_len+3+7>>>3,s=i.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?Zp(i,e,t,n):i.strategy===gM||s===r?($t(i,(Up<<1)+(n?1:0),3),xf(i,ii,Vs)):($t(i,(yM<<1)+(n?1:0),3),PM(i,i.l_desc.max_code+1,i.d_desc.max_code+1,a+1),xf(i,i.dyn_ltree,i.dyn_dtree)),Yp(i),n&&qp(i)},OM=(i,e,t)=>(i.pending_buf[i.sym_buf+i.sym_next++]=e,i.pending_buf[i.sym_buf+i.sym_next++]=e>>8,i.pending_buf[i.sym_buf+i.sym_next++]=t,e===0?i.dyn_ltree[t*2]++:(i.matches++,e--,i.dyn_ltree[(ia[t]+da+1)*2]++,i.dyn_dtree[Gp(e)*2]++),i.sym_next===i.sym_end);var NM=IM,FM=Zp,kM=UM,BM=OM,zM=LM,HM={_tr_init:NM,_tr_stored_block:FM,_tr_flush_block:kM,_tr_tally:BM,_tr_align:zM};const VM=(i,e,t,n)=>{let r=i&65535|0,s=i>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+e[n++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0};var sa=VM;const GM=()=>{let i,e=[];for(var t=0;t<256;t++){i=t;for(var n=0;n<8;n++)i=i&1?3988292384^i>>>1:i>>>1;e[t]=i}return e},WM=new Uint32Array(GM()),XM=(i,e,t,n)=>{const r=WM,s=n+t;i^=-1;for(let a=n;a<s;a++)i=i>>>8^r[(i^e[a])&255];return i^-1};var Rt=XM,mr={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},pa={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:YM,_tr_stored_block:Wc,_tr_flush_block:qM,_tr_tally:Di,_tr_align:ZM}=HM,{Z_NO_FLUSH:Ii,Z_PARTIAL_FLUSH:jM,Z_FULL_FLUSH:$M,Z_FINISH:wn,Z_BLOCK:Mf,Z_OK:It,Z_STREAM_END:wf,Z_STREAM_ERROR:Gn,Z_DATA_ERROR:KM,Z_BUF_ERROR:Al,Z_DEFAULT_COMPRESSION:JM,Z_FILTERED:QM,Z_HUFFMAN_ONLY:Za,Z_RLE:ew,Z_FIXED:tw,Z_DEFAULT_STRATEGY:nw,Z_UNKNOWN:iw,Z_DEFLATED:Io}=pa,rw=9,sw=15,aw=8,ow=29,lw=256,Xc=lw+1+ow,cw=30,hw=19,uw=2*Xc+1,fw=15,Fe=3,Ti=258,Wn=Ti+Fe+1,dw=32,ds=42,Lh=57,Yc=69,qc=73,Zc=91,jc=103,rr=113,Fs=666,Wt=1,ys=2,_r=3,bs=4,pw=3,sr=(i,e)=>(i.msg=mr[e],e),Sf=i=>i*2-(i>4?9:0),Mi=i=>{let e=i.length;for(;--e>=0;)i[e]=0},mw=i=>{let e,t,n,r=i.w_size;e=i.hash_size,n=e;do t=i.head[--n],i.head[n]=t>=r?t-r:0;while(--e);e=r,n=e;do t=i.prev[--n],i.prev[n]=t>=r?t-r:0;while(--e)};let _w=(i,e,t)=>(e<<i.hash_shift^t)&i.hash_mask,Li=_w;const ln=i=>{const e=i.state;let t=e.pending;t>i.avail_out&&(t=i.avail_out),t!==0&&(i.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),i.next_out),i.next_out+=t,e.pending_out+=t,i.total_out+=t,i.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},fn=(i,e)=>{qM(i,i.block_start>=0?i.block_start:-1,i.strstart-i.block_start,e),i.block_start=i.strstart,ln(i.strm)},qe=(i,e)=>{i.pending_buf[i.pending++]=e},Is=(i,e)=>{i.pending_buf[i.pending++]=e>>>8&255,i.pending_buf[i.pending++]=e&255},$c=(i,e,t,n)=>{let r=i.avail_in;return r>n&&(r=n),r===0?0:(i.avail_in-=r,e.set(i.input.subarray(i.next_in,i.next_in+r),t),i.state.wrap===1?i.adler=sa(i.adler,e,r,t):i.state.wrap===2&&(i.adler=Rt(i.adler,e,r,t)),i.next_in+=r,i.total_in+=r,r)},jp=(i,e)=>{let t=i.max_chain_length,n=i.strstart,r,s,a=i.prev_length,o=i.nice_match;const c=i.strstart>i.w_size-Wn?i.strstart-(i.w_size-Wn):0,l=i.window,h=i.w_mask,u=i.prev,d=i.strstart+Ti;let f=l[n+a-1],g=l[n+a];i.prev_length>=i.good_match&&(t>>=2),o>i.lookahead&&(o=i.lookahead);do if(r=e,!(l[r+a]!==g||l[r+a-1]!==f||l[r]!==l[n]||l[++r]!==l[n+1])){n+=2,r++;do;while(l[++n]===l[++r]&&l[++n]===l[++r]&&l[++n]===l[++r]&&l[++n]===l[++r]&&l[++n]===l[++r]&&l[++n]===l[++r]&&l[++n]===l[++r]&&l[++n]===l[++r]&&n<d);if(s=Ti-(d-n),n=d-Ti,s>a){if(i.match_start=e,a=s,s>=o)break;f=l[n+a-1],g=l[n+a]}}while((e=u[e&h])>c&&--t!==0);return a<=i.lookahead?a:i.lookahead},ps=i=>{const e=i.w_size;let t,n,r;do{if(n=i.window_size-i.lookahead-i.strstart,i.strstart>=e+(e-Wn)&&(i.window.set(i.window.subarray(e,e+e-n),0),i.match_start-=e,i.strstart-=e,i.block_start-=e,i.insert>i.strstart&&(i.insert=i.strstart),mw(i),n+=e),i.strm.avail_in===0)break;if(t=$c(i.strm,i.window,i.strstart+i.lookahead,n),i.lookahead+=t,i.lookahead+i.insert>=Fe)for(r=i.strstart-i.insert,i.ins_h=i.window[r],i.ins_h=Li(i,i.ins_h,i.window[r+1]);i.insert&&(i.ins_h=Li(i,i.ins_h,i.window[r+Fe-1]),i.prev[r&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=r,r++,i.insert--,!(i.lookahead+i.insert<Fe)););}while(i.lookahead<Wn&&i.strm.avail_in!==0)},$p=(i,e)=>{let t=i.pending_buf_size-5>i.w_size?i.w_size:i.pending_buf_size-5,n,r,s,a=0,o=i.strm.avail_in;do{if(n=65535,s=i.bi_valid+42>>3,i.strm.avail_out<s||(s=i.strm.avail_out-s,r=i.strstart-i.block_start,n>r+i.strm.avail_in&&(n=r+i.strm.avail_in),n>s&&(n=s),n<t&&(n===0&&e!==wn||e===Ii||n!==r+i.strm.avail_in)))break;a=e===wn&&n===r+i.strm.avail_in?1:0,Wc(i,0,0,a),i.pending_buf[i.pending-4]=n,i.pending_buf[i.pending-3]=n>>8,i.pending_buf[i.pending-2]=~n,i.pending_buf[i.pending-1]=~n>>8,ln(i.strm),r&&(r>n&&(r=n),i.strm.output.set(i.window.subarray(i.block_start,i.block_start+r),i.strm.next_out),i.strm.next_out+=r,i.strm.avail_out-=r,i.strm.total_out+=r,i.block_start+=r,n-=r),n&&($c(i.strm,i.strm.output,i.strm.next_out,n),i.strm.next_out+=n,i.strm.avail_out-=n,i.strm.total_out+=n)}while(a===0);return o-=i.strm.avail_in,o&&(o>=i.w_size?(i.matches=2,i.window.set(i.strm.input.subarray(i.strm.next_in-i.w_size,i.strm.next_in),0),i.strstart=i.w_size,i.insert=i.strstart):(i.window_size-i.strstart<=o&&(i.strstart-=i.w_size,i.window.set(i.window.subarray(i.w_size,i.w_size+i.strstart),0),i.matches<2&&i.matches++,i.insert>i.strstart&&(i.insert=i.strstart)),i.window.set(i.strm.input.subarray(i.strm.next_in-o,i.strm.next_in),i.strstart),i.strstart+=o,i.insert+=o>i.w_size-i.insert?i.w_size-i.insert:o),i.block_start=i.strstart),i.high_water<i.strstart&&(i.high_water=i.strstart),a?bs:e!==Ii&&e!==wn&&i.strm.avail_in===0&&i.strstart===i.block_start?ys:(s=i.window_size-i.strstart,i.strm.avail_in>s&&i.block_start>=i.w_size&&(i.block_start-=i.w_size,i.strstart-=i.w_size,i.window.set(i.window.subarray(i.w_size,i.w_size+i.strstart),0),i.matches<2&&i.matches++,s+=i.w_size,i.insert>i.strstart&&(i.insert=i.strstart)),s>i.strm.avail_in&&(s=i.strm.avail_in),s&&($c(i.strm,i.window,i.strstart,s),i.strstart+=s,i.insert+=s>i.w_size-i.insert?i.w_size-i.insert:s),i.high_water<i.strstart&&(i.high_water=i.strstart),s=i.bi_valid+42>>3,s=i.pending_buf_size-s>65535?65535:i.pending_buf_size-s,t=s>i.w_size?i.w_size:s,r=i.strstart-i.block_start,(r>=t||(r||e===wn)&&e!==Ii&&i.strm.avail_in===0&&r<=s)&&(n=r>s?s:r,a=e===wn&&i.strm.avail_in===0&&n===r?1:0,Wc(i,i.block_start,n,a),i.block_start+=n,ln(i.strm)),a?_r:Wt)},Rl=(i,e)=>{let t,n;for(;;){if(i.lookahead<Wn){if(ps(i),i.lookahead<Wn&&e===Ii)return Wt;if(i.lookahead===0)break}if(t=0,i.lookahead>=Fe&&(i.ins_h=Li(i,i.ins_h,i.window[i.strstart+Fe-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),t!==0&&i.strstart-t<=i.w_size-Wn&&(i.match_length=jp(i,t)),i.match_length>=Fe)if(n=Di(i,i.strstart-i.match_start,i.match_length-Fe),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=Fe){i.match_length--;do i.strstart++,i.ins_h=Li(i,i.ins_h,i.window[i.strstart+Fe-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart;while(--i.match_length!==0);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.ins_h=i.window[i.strstart],i.ins_h=Li(i,i.ins_h,i.window[i.strstart+1]);else n=Di(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(n&&(fn(i,!1),i.strm.avail_out===0))return Wt}return i.insert=i.strstart<Fe-1?i.strstart:Fe-1,e===wn?(fn(i,!0),i.strm.avail_out===0?_r:bs):i.sym_next&&(fn(i,!1),i.strm.avail_out===0)?Wt:ys},kr=(i,e)=>{let t,n,r;for(;;){if(i.lookahead<Wn){if(ps(i),i.lookahead<Wn&&e===Ii)return Wt;if(i.lookahead===0)break}if(t=0,i.lookahead>=Fe&&(i.ins_h=Li(i,i.ins_h,i.window[i.strstart+Fe-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=Fe-1,t!==0&&i.prev_length<i.max_lazy_match&&i.strstart-t<=i.w_size-Wn&&(i.match_length=jp(i,t),i.match_length<=5&&(i.strategy===QM||i.match_length===Fe&&i.strstart-i.match_start>4096)&&(i.match_length=Fe-1)),i.prev_length>=Fe&&i.match_length<=i.prev_length){r=i.strstart+i.lookahead-Fe,n=Di(i,i.strstart-1-i.prev_match,i.prev_length-Fe),i.lookahead-=i.prev_length-1,i.prev_length-=2;do++i.strstart<=r&&(i.ins_h=Li(i,i.ins_h,i.window[i.strstart+Fe-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart);while(--i.prev_length!==0);if(i.match_available=0,i.match_length=Fe-1,i.strstart++,n&&(fn(i,!1),i.strm.avail_out===0))return Wt}else if(i.match_available){if(n=Di(i,0,i.window[i.strstart-1]),n&&fn(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return Wt}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(n=Di(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<Fe-1?i.strstart:Fe-1,e===wn?(fn(i,!0),i.strm.avail_out===0?_r:bs):i.sym_next&&(fn(i,!1),i.strm.avail_out===0)?Wt:ys},gw=(i,e)=>{let t,n,r,s;const a=i.window;for(;;){if(i.lookahead<=Ti){if(ps(i),i.lookahead<=Ti&&e===Ii)return Wt;if(i.lookahead===0)break}if(i.match_length=0,i.lookahead>=Fe&&i.strstart>0&&(r=i.strstart-1,n=a[r],n===a[++r]&&n===a[++r]&&n===a[++r])){s=i.strstart+Ti;do;while(n===a[++r]&&n===a[++r]&&n===a[++r]&&n===a[++r]&&n===a[++r]&&n===a[++r]&&n===a[++r]&&n===a[++r]&&r<s);i.match_length=Ti-(s-r),i.match_length>i.lookahead&&(i.match_length=i.lookahead)}if(i.match_length>=Fe?(t=Di(i,1,i.match_length-Fe),i.lookahead-=i.match_length,i.strstart+=i.match_length,i.match_length=0):(t=Di(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++),t&&(fn(i,!1),i.strm.avail_out===0))return Wt}return i.insert=0,e===wn?(fn(i,!0),i.strm.avail_out===0?_r:bs):i.sym_next&&(fn(i,!1),i.strm.avail_out===0)?Wt:ys},xw=(i,e)=>{let t;for(;;){if(i.lookahead===0&&(ps(i),i.lookahead===0)){if(e===Ii)return Wt;break}if(i.match_length=0,t=Di(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++,t&&(fn(i,!1),i.strm.avail_out===0))return Wt}return i.insert=0,e===wn?(fn(i,!0),i.strm.avail_out===0?_r:bs):i.sym_next&&(fn(i,!1),i.strm.avail_out===0)?Wt:ys};function On(i,e,t,n,r){this.good_length=i,this.max_lazy=e,this.nice_length=t,this.max_chain=n,this.func=r}const ks=[new On(0,0,0,0,$p),new On(4,4,8,4,Rl),new On(4,5,16,8,Rl),new On(4,6,32,32,Rl),new On(4,4,16,16,kr),new On(8,16,32,32,kr),new On(8,16,128,128,kr),new On(8,32,128,256,kr),new On(32,128,258,1024,kr),new On(32,258,258,4096,kr)],vw=i=>{i.window_size=2*i.w_size,Mi(i.head),i.max_lazy_match=ks[i.level].max_lazy,i.good_match=ks[i.level].good_length,i.nice_match=ks[i.level].nice_length,i.max_chain_length=ks[i.level].max_chain,i.strstart=0,i.block_start=0,i.lookahead=0,i.insert=0,i.match_length=i.prev_length=Fe-1,i.match_available=0,i.ins_h=0};function yw(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Io,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(uw*2),this.dyn_dtree=new Uint16Array((2*cw+1)*2),this.bl_tree=new Uint16Array((2*hw+1)*2),Mi(this.dyn_ltree),Mi(this.dyn_dtree),Mi(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(fw+1),this.heap=new Uint16Array(2*Xc+1),Mi(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Xc+1),Mi(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const ma=i=>{if(!i)return 1;const e=i.state;return!e||e.strm!==i||e.status!==ds&&e.status!==Lh&&e.status!==Yc&&e.status!==qc&&e.status!==Zc&&e.status!==jc&&e.status!==rr&&e.status!==Fs?1:0},Kp=i=>{if(ma(i))return sr(i,Gn);i.total_in=i.total_out=0,i.data_type=iw;const e=i.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?Lh:e.wrap?ds:rr,i.adler=e.wrap===2?0:1,e.last_flush=-2,YM(e),It},Jp=i=>{const e=Kp(i);return e===It&&vw(i.state),e},bw=(i,e)=>ma(i)||i.state.wrap!==2?Gn:(i.state.gzhead=e,It),Qp=(i,e,t,n,r,s)=>{if(!i)return Gn;let a=1;if(e===JM&&(e=6),n<0?(a=0,n=-n):n>15&&(a=2,n-=16),r<1||r>rw||t!==Io||n<8||n>15||e<0||e>9||s<0||s>tw||n===8&&a!==1)return sr(i,Gn);n===8&&(n=9);const o=new yw;return i.state=o,o.strm=i,o.status=ds,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=r+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+Fe-1)/Fe),o.window=new Uint8Array(o.w_size*2),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<r+6,o.pending_buf_size=o.lit_bufsize*4,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=(o.lit_bufsize-1)*3,o.level=e,o.strategy=s,o.method=t,Jp(i)},Mw=(i,e)=>Qp(i,e,Io,sw,aw,nw),ww=(i,e)=>{if(ma(i)||e>Mf||e<0)return i?sr(i,Gn):Gn;const t=i.state;if(!i.output||i.avail_in!==0&&!i.input||t.status===Fs&&e!==wn)return sr(i,i.avail_out===0?Al:Gn);const n=t.last_flush;if(t.last_flush=e,t.pending!==0){if(ln(i),i.avail_out===0)return t.last_flush=-1,It}else if(i.avail_in===0&&Sf(e)<=Sf(n)&&e!==wn)return sr(i,Al);if(t.status===Fs&&i.avail_in!==0)return sr(i,Al);if(t.status===ds&&t.wrap===0&&(t.status=rr),t.status===ds){let r=Io+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=Za||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=dw),r+=31-r%31,Is(t,r),t.strstart!==0&&(Is(t,i.adler>>>16),Is(t,i.adler&65535)),i.adler=1,t.status=rr,ln(i),t.pending!==0)return t.last_flush=-1,It}if(t.status===Lh){if(i.adler=0,qe(t,31),qe(t,139),qe(t,8),t.gzhead)qe(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),qe(t,t.gzhead.time&255),qe(t,t.gzhead.time>>8&255),qe(t,t.gzhead.time>>16&255),qe(t,t.gzhead.time>>24&255),qe(t,t.level===9?2:t.strategy>=Za||t.level<2?4:0),qe(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(qe(t,t.gzhead.extra.length&255),qe(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(i.adler=Rt(i.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Yc;else if(qe(t,0),qe(t,0),qe(t,0),qe(t,0),qe(t,0),qe(t,t.level===9?2:t.strategy>=Za||t.level<2?4:0),qe(t,pw),t.status=rr,ln(i),t.pending!==0)return t.last_flush=-1,It}if(t.status===Yc){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(i.adler=Rt(i.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=o,ln(i),t.pending!==0)return t.last_flush=-1,It;r=0,s-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(i.adler=Rt(i.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=qc}if(t.status===qc){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(i.adler=Rt(i.adler,t.pending_buf,t.pending-r,r)),ln(i),t.pending!==0)return t.last_flush=-1,It;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,qe(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(i.adler=Rt(i.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Zc}if(t.status===Zc){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(i.adler=Rt(i.adler,t.pending_buf,t.pending-r,r)),ln(i),t.pending!==0)return t.last_flush=-1,It;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,qe(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(i.adler=Rt(i.adler,t.pending_buf,t.pending-r,r))}t.status=jc}if(t.status===jc){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(ln(i),t.pending!==0))return t.last_flush=-1,It;qe(t,i.adler&255),qe(t,i.adler>>8&255),i.adler=0}if(t.status=rr,ln(i),t.pending!==0)return t.last_flush=-1,It}if(i.avail_in!==0||t.lookahead!==0||e!==Ii&&t.status!==Fs){let r=t.level===0?$p(t,e):t.strategy===Za?xw(t,e):t.strategy===ew?gw(t,e):ks[t.level].func(t,e);if((r===_r||r===bs)&&(t.status=Fs),r===Wt||r===_r)return i.avail_out===0&&(t.last_flush=-1),It;if(r===ys&&(e===jM?ZM(t):e!==Mf&&(Wc(t,0,0,!1),e===$M&&(Mi(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),ln(i),i.avail_out===0))return t.last_flush=-1,It}return e!==wn?It:t.wrap<=0?wf:(t.wrap===2?(qe(t,i.adler&255),qe(t,i.adler>>8&255),qe(t,i.adler>>16&255),qe(t,i.adler>>24&255),qe(t,i.total_in&255),qe(t,i.total_in>>8&255),qe(t,i.total_in>>16&255),qe(t,i.total_in>>24&255)):(Is(t,i.adler>>>16),Is(t,i.adler&65535)),ln(i),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?It:wf)},Sw=i=>{if(ma(i))return Gn;const e=i.state.status;return i.state=null,e===rr?sr(i,KM):It},Ew=(i,e)=>{let t=e.length;if(ma(i))return Gn;const n=i.state,r=n.wrap;if(r===2||r===1&&n.status!==ds||n.lookahead)return Gn;if(r===1&&(i.adler=sa(i.adler,e,t,0)),n.wrap=0,t>=n.w_size){r===0&&(Mi(n.head),n.strstart=0,n.block_start=0,n.insert=0);let c=new Uint8Array(n.w_size);c.set(e.subarray(t-n.w_size,t),0),e=c,t=n.w_size}const s=i.avail_in,a=i.next_in,o=i.input;for(i.avail_in=t,i.next_in=0,i.input=e,ps(n);n.lookahead>=Fe;){let c=n.strstart,l=n.lookahead-(Fe-1);do n.ins_h=Li(n,n.ins_h,n.window[c+Fe-1]),n.prev[c&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=c,c++;while(--l);n.strstart=c,n.lookahead=Fe-1,ps(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=Fe-1,n.match_available=0,i.next_in=a,i.input=o,i.avail_in=s,n.wrap=r,It};var Tw=Mw,Aw=Qp,Rw=Jp,Cw=Kp,Pw=bw,Dw=ww,Iw=Sw,Lw=Ew,Uw="pako deflate (from Nodeca project)",Gs={deflateInit:Tw,deflateInit2:Aw,deflateReset:Rw,deflateResetKeep:Cw,deflateSetHeader:Pw,deflate:Dw,deflateEnd:Iw,deflateSetDictionary:Lw,deflateInfo:Uw};const Ow=(i,e)=>Object.prototype.hasOwnProperty.call(i,e);var Nw=function(i){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const n in t)Ow(t,n)&&(i[n]=t[n])}}return i},Fw=i=>{let e=0;for(let n=0,r=i.length;n<r;n++)e+=i[n].length;const t=new Uint8Array(e);for(let n=0,r=0,s=i.length;n<s;n++){let a=i[n];t.set(a,r),r+=a.length}return t},Lo={assign:Nw,flattenChunks:Fw};let em=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{em=!1}const aa=new Uint8Array(256);for(let i=0;i<256;i++)aa[i]=i>=252?6:i>=248?5:i>=240?4:i>=224?3:i>=192?2:1;aa[254]=aa[254]=1;var kw=i=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(i);let e,t,n,r,s,a=i.length,o=0;for(r=0;r<a;r++)t=i.charCodeAt(r),(t&64512)===55296&&r+1<a&&(n=i.charCodeAt(r+1),(n&64512)===56320&&(t=65536+(t-55296<<10)+(n-56320),r++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),s=0,r=0;s<o;r++)t=i.charCodeAt(r),(t&64512)===55296&&r+1<a&&(n=i.charCodeAt(r+1),(n&64512)===56320&&(t=65536+(t-55296<<10)+(n-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const Bw=(i,e)=>{if(e<65534&&i.subarray&&em)return String.fromCharCode.apply(null,i.length===e?i:i.subarray(0,e));let t="";for(let n=0;n<e;n++)t+=String.fromCharCode(i[n]);return t};var zw=(i,e)=>{const t=e||i.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(i.subarray(0,e));let n,r;const s=new Array(t*2);for(r=0,n=0;n<t;){let a=i[n++];if(a<128){s[r++]=a;continue}let o=aa[a];if(o>4){s[r++]=65533,n+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&n<t;)a=a<<6|i[n++]&63,o--;if(o>1){s[r++]=65533;continue}a<65536?s[r++]=a:(a-=65536,s[r++]=55296|a>>10&1023,s[r++]=56320|a&1023)}return Bw(s,r)},Hw=(i,e)=>{e=e||i.length,e>i.length&&(e=i.length);let t=e-1;for(;t>=0&&(i[t]&192)===128;)t--;return t<0||t===0?e:t+aa[i[t]]>e?t:e},oa={string2buf:kw,buf2string:zw,utf8border:Hw};function Vw(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var tm=Vw;const nm=Object.prototype.toString,{Z_NO_FLUSH:Gw,Z_SYNC_FLUSH:Ww,Z_FULL_FLUSH:Xw,Z_FINISH:Yw,Z_OK:So,Z_STREAM_END:qw,Z_DEFAULT_COMPRESSION:Zw,Z_DEFAULT_STRATEGY:jw,Z_DEFLATED:$w}=pa;function _a(i){this.options=Lo.assign({level:Zw,method:$w,chunkSize:16384,windowBits:15,memLevel:8,strategy:jw},i||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new tm,this.strm.avail_out=0;let t=Gs.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==So)throw new Error(mr[t]);if(e.header&&Gs.deflateSetHeader(this.strm,e.header),e.dictionary){let n;if(typeof e.dictionary=="string"?n=oa.string2buf(e.dictionary):nm.call(e.dictionary)==="[object ArrayBuffer]"?n=new Uint8Array(e.dictionary):n=e.dictionary,t=Gs.deflateSetDictionary(this.strm,n),t!==So)throw new Error(mr[t]);this._dict_set=!0}}_a.prototype.push=function(i,e){const t=this.strm,n=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?Yw:Gw,typeof i=="string"?t.input=oa.string2buf(i):nm.call(i)==="[object ArrayBuffer]"?t.input=new Uint8Array(i):t.input=i,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(n),t.next_out=0,t.avail_out=n),(s===Ww||s===Xw)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=Gs.deflate(t,s),r===qw)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=Gs.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===So;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};_a.prototype.onData=function(i){this.chunks.push(i)};_a.prototype.onEnd=function(i){i===So&&(this.result=Lo.flattenChunks(this.chunks)),this.chunks=[],this.err=i,this.msg=this.strm.msg};function Uh(i,e){const t=new _a(e);if(t.push(i,!0),t.err)throw t.msg||mr[t.err];return t.result}function Kw(i,e){return e=e||{},e.raw=!0,Uh(i,e)}function Jw(i,e){return e=e||{},e.gzip=!0,Uh(i,e)}var Qw=_a,eS=Uh,tS=Kw,nS=Jw,iS={Deflate:Qw,deflate:eS,deflateRaw:tS,gzip:nS};const ja=16209,rS=16191;var sS=function(e,t){let n,r,s,a,o,c,l,h,u,d,f,g,_,m,p,S,w,y,b,T,M,C,x,v;const A=e.state;n=e.next_in,x=e.input,r=n+(e.avail_in-5),s=e.next_out,v=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),c=A.dmax,l=A.wsize,h=A.whave,u=A.wnext,d=A.window,f=A.hold,g=A.bits,_=A.lencode,m=A.distcode,p=(1<<A.lenbits)-1,S=(1<<A.distbits)-1;e:do{g<15&&(f+=x[n++]<<g,g+=8,f+=x[n++]<<g,g+=8),w=_[f&p];t:for(;;){if(y=w>>>24,f>>>=y,g-=y,y=w>>>16&255,y===0)v[s++]=w&65535;else if(y&16){b=w&65535,y&=15,y&&(g<y&&(f+=x[n++]<<g,g+=8),b+=f&(1<<y)-1,f>>>=y,g-=y),g<15&&(f+=x[n++]<<g,g+=8,f+=x[n++]<<g,g+=8),w=m[f&S];n:for(;;){if(y=w>>>24,f>>>=y,g-=y,y=w>>>16&255,y&16){if(T=w&65535,y&=15,g<y&&(f+=x[n++]<<g,g+=8,g<y&&(f+=x[n++]<<g,g+=8)),T+=f&(1<<y)-1,T>c){e.msg="invalid distance too far back",A.mode=ja;break e}if(f>>>=y,g-=y,y=s-a,T>y){if(y=T-y,y>h&&A.sane){e.msg="invalid distance too far back",A.mode=ja;break e}if(M=0,C=d,u===0){if(M+=l-y,y<b){b-=y;do v[s++]=d[M++];while(--y);M=s-T,C=v}}else if(u<y){if(M+=l+u-y,y-=u,y<b){b-=y;do v[s++]=d[M++];while(--y);if(M=0,u<b){y=u,b-=y;do v[s++]=d[M++];while(--y);M=s-T,C=v}}}else if(M+=u-y,y<b){b-=y;do v[s++]=d[M++];while(--y);M=s-T,C=v}for(;b>2;)v[s++]=C[M++],v[s++]=C[M++],v[s++]=C[M++],b-=3;b&&(v[s++]=C[M++],b>1&&(v[s++]=C[M++]))}else{M=s-T;do v[s++]=v[M++],v[s++]=v[M++],v[s++]=v[M++],b-=3;while(b>2);b&&(v[s++]=v[M++],b>1&&(v[s++]=v[M++]))}}else if((y&64)===0){w=m[(w&65535)+(f&(1<<y)-1)];continue n}else{e.msg="invalid distance code",A.mode=ja;break e}break}}else if((y&64)===0){w=_[(w&65535)+(f&(1<<y)-1)];continue t}else if(y&32){A.mode=rS;break e}else{e.msg="invalid literal/length code",A.mode=ja;break e}break}}while(n<r&&s<o);b=g>>3,n-=b,g-=b<<3,f&=(1<<g)-1,e.next_in=n,e.next_out=s,e.avail_in=n<r?5+(r-n):5-(n-r),e.avail_out=s<o?257+(o-s):257-(s-o),A.hold=f,A.bits=g};const Br=15,Ef=852,Tf=592,Af=0,Cl=1,Rf=2,aS=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),oS=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),lS=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),cS=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),hS=(i,e,t,n,r,s,a,o)=>{const c=o.bits;let l=0,h=0,u=0,d=0,f=0,g=0,_=0,m=0,p=0,S=0,w,y,b,T,M,C=null,x;const v=new Uint16Array(Br+1),A=new Uint16Array(Br+1);let F=null,O,V,X;for(l=0;l<=Br;l++)v[l]=0;for(h=0;h<n;h++)v[e[t+h]]++;for(f=c,d=Br;d>=1&&v[d]===0;d--);if(f>d&&(f=d),d===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,o.bits=1,0;for(u=1;u<d&&v[u]===0;u++);for(f<u&&(f=u),m=1,l=1;l<=Br;l++)if(m<<=1,m-=v[l],m<0)return-1;if(m>0&&(i===Af||d!==1))return-1;for(A[1]=0,l=1;l<Br;l++)A[l+1]=A[l]+v[l];for(h=0;h<n;h++)e[t+h]!==0&&(a[A[e[t+h]]++]=h);if(i===Af?(C=F=a,x=20):i===Cl?(C=aS,F=oS,x=257):(C=lS,F=cS,x=0),S=0,h=0,l=u,M=s,g=f,_=0,b=-1,p=1<<f,T=p-1,i===Cl&&p>Ef||i===Rf&&p>Tf)return 1;for(;;){O=l-_,a[h]+1<x?(V=0,X=a[h]):a[h]>=x?(V=F[a[h]-x],X=C[a[h]-x]):(V=96,X=0),w=1<<l-_,y=1<<g,u=y;do y-=w,r[M+(S>>_)+y]=O<<24|V<<16|X|0;while(y!==0);for(w=1<<l-1;S&w;)w>>=1;if(w!==0?(S&=w-1,S+=w):S=0,h++,--v[l]===0){if(l===d)break;l=e[t+a[h]]}if(l>f&&(S&T)!==b){for(_===0&&(_=f),M+=u,g=l-_,m=1<<g;g+_<d&&(m-=v[g+_],!(m<=0));)g++,m<<=1;if(p+=1<<g,i===Cl&&p>Ef||i===Rf&&p>Tf)return 1;b=S&T,r[b]=f<<24|g<<16|M-s|0}}return S!==0&&(r[M+S]=l-_<<24|64<<16|0),o.bits=f,0};var Ws=hS;const uS=0,im=1,rm=2,{Z_FINISH:Cf,Z_BLOCK:fS,Z_TREES:$a,Z_OK:gr,Z_STREAM_END:dS,Z_NEED_DICT:pS,Z_STREAM_ERROR:Tn,Z_DATA_ERROR:sm,Z_MEM_ERROR:am,Z_BUF_ERROR:mS,Z_DEFLATED:Pf}=pa,Uo=16180,Df=16181,If=16182,Lf=16183,Uf=16184,Of=16185,Nf=16186,Ff=16187,kf=16188,Bf=16189,Eo=16190,Qn=16191,Pl=16192,zf=16193,Dl=16194,Hf=16195,Vf=16196,Gf=16197,Wf=16198,Ka=16199,Ja=16200,Xf=16201,Yf=16202,qf=16203,Zf=16204,jf=16205,Il=16206,$f=16207,Kf=16208,lt=16209,om=16210,lm=16211,_S=852,gS=592,xS=15,vS=xS,Jf=i=>(i>>>24&255)+(i>>>8&65280)+((i&65280)<<8)+((i&255)<<24);function yS(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const br=i=>{if(!i)return 1;const e=i.state;return!e||e.strm!==i||e.mode<Uo||e.mode>lm?1:0},cm=i=>{if(br(i))return Tn;const e=i.state;return i.total_in=i.total_out=e.total=0,i.msg="",e.wrap&&(i.adler=e.wrap&1),e.mode=Uo,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(_S),e.distcode=e.distdyn=new Int32Array(gS),e.sane=1,e.back=-1,gr},hm=i=>{if(br(i))return Tn;const e=i.state;return e.wsize=0,e.whave=0,e.wnext=0,cm(i)},um=(i,e)=>{let t;if(br(i))return Tn;const n=i.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?Tn:(n.window!==null&&n.wbits!==e&&(n.window=null),n.wrap=t,n.wbits=e,hm(i))},fm=(i,e)=>{if(!i)return Tn;const t=new yS;i.state=t,t.strm=i,t.window=null,t.mode=Uo;const n=um(i,e);return n!==gr&&(i.state=null),n},bS=i=>fm(i,vS);let Qf=!0,Ll,Ul;const MS=i=>{if(Qf){Ll=new Int32Array(512),Ul=new Int32Array(32);let e=0;for(;e<144;)i.lens[e++]=8;for(;e<256;)i.lens[e++]=9;for(;e<280;)i.lens[e++]=7;for(;e<288;)i.lens[e++]=8;for(Ws(im,i.lens,0,288,Ll,0,i.work,{bits:9}),e=0;e<32;)i.lens[e++]=5;Ws(rm,i.lens,0,32,Ul,0,i.work,{bits:5}),Qf=!1}i.lencode=Ll,i.lenbits=9,i.distcode=Ul,i.distbits=5},dm=(i,e,t,n)=>{let r;const s=i.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),n>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>n&&(r=n),s.window.set(e.subarray(t-n,t-n+r),s.wnext),n-=r,n?(s.window.set(e.subarray(t-n,t),0),s.wnext=n,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},wS=(i,e)=>{let t,n,r,s,a,o,c,l,h,u,d,f,g,_,m=0,p,S,w,y,b,T,M,C;const x=new Uint8Array(4);let v,A;const F=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(br(i)||!i.output||!i.input&&i.avail_in!==0)return Tn;t=i.state,t.mode===Qn&&(t.mode=Pl),a=i.next_out,r=i.output,c=i.avail_out,s=i.next_in,n=i.input,o=i.avail_in,l=t.hold,h=t.bits,u=o,d=c,C=gr;e:for(;;)switch(t.mode){case Uo:if(t.wrap===0){t.mode=Pl;break}for(;h<16;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,x[0]=l&255,x[1]=l>>>8&255,t.check=Rt(t.check,x,2,0),l=0,h=0,t.mode=Df;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){i.msg="incorrect header check",t.mode=lt;break}if((l&15)!==Pf){i.msg="unknown compression method",t.mode=lt;break}if(l>>>=4,h-=4,M=(l&15)+8,t.wbits===0&&(t.wbits=M),M>15||M>t.wbits){i.msg="invalid window size",t.mode=lt;break}t.dmax=1<<t.wbits,t.flags=0,i.adler=t.check=1,t.mode=l&512?Bf:Qn,l=0,h=0;break;case Df:for(;h<16;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(t.flags=l,(t.flags&255)!==Pf){i.msg="unknown compression method",t.mode=lt;break}if(t.flags&57344){i.msg="unknown header flags set",t.mode=lt;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,t.check=Rt(t.check,x,2,0)),l=0,h=0,t.mode=If;case If:for(;h<32;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,x[2]=l>>>16&255,x[3]=l>>>24&255,t.check=Rt(t.check,x,4,0)),l=0,h=0,t.mode=Lf;case Lf:for(;h<16;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,t.check=Rt(t.check,x,2,0)),l=0,h=0,t.mode=Uf;case Uf:if(t.flags&1024){for(;h<16;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,t.check=Rt(t.check,x,2,0)),l=0,h=0}else t.head&&(t.head.extra=null);t.mode=Of;case Of:if(t.flags&1024&&(f=t.length,f>o&&(f=o),f&&(t.head&&(M=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(n.subarray(s,s+f),M)),t.flags&512&&t.wrap&4&&(t.check=Rt(t.check,n,f,s)),o-=f,s+=f,t.length-=f),t.length))break e;t.length=0,t.mode=Nf;case Nf:if(t.flags&2048){if(o===0)break e;f=0;do M=n[s+f++],t.head&&M&&t.length<65536&&(t.head.name+=String.fromCharCode(M));while(M&&f<o);if(t.flags&512&&t.wrap&4&&(t.check=Rt(t.check,n,f,s)),o-=f,s+=f,M)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=Ff;case Ff:if(t.flags&4096){if(o===0)break e;f=0;do M=n[s+f++],t.head&&M&&t.length<65536&&(t.head.comment+=String.fromCharCode(M));while(M&&f<o);if(t.flags&512&&t.wrap&4&&(t.check=Rt(t.check,n,f,s)),o-=f,s+=f,M)break e}else t.head&&(t.head.comment=null);t.mode=kf;case kf:if(t.flags&512){for(;h<16;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(t.wrap&4&&l!==(t.check&65535)){i.msg="header crc mismatch",t.mode=lt;break}l=0,h=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),i.adler=t.check=0,t.mode=Qn;break;case Bf:for(;h<32;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}i.adler=t.check=Jf(l),l=0,h=0,t.mode=Eo;case Eo:if(t.havedict===0)return i.next_out=a,i.avail_out=c,i.next_in=s,i.avail_in=o,t.hold=l,t.bits=h,pS;i.adler=t.check=1,t.mode=Qn;case Qn:if(e===fS||e===$a)break e;case Pl:if(t.last){l>>>=h&7,h-=h&7,t.mode=Il;break}for(;h<3;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}switch(t.last=l&1,l>>>=1,h-=1,l&3){case 0:t.mode=zf;break;case 1:if(MS(t),t.mode=Ka,e===$a){l>>>=2,h-=2;break e}break;case 2:t.mode=Vf;break;case 3:i.msg="invalid block type",t.mode=lt}l>>>=2,h-=2;break;case zf:for(l>>>=h&7,h-=h&7;h<32;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if((l&65535)!==(l>>>16^65535)){i.msg="invalid stored block lengths",t.mode=lt;break}if(t.length=l&65535,l=0,h=0,t.mode=Dl,e===$a)break e;case Dl:t.mode=Hf;case Hf:if(f=t.length,f){if(f>o&&(f=o),f>c&&(f=c),f===0)break e;r.set(n.subarray(s,s+f),a),o-=f,s+=f,c-=f,a+=f,t.length-=f;break}t.mode=Qn;break;case Vf:for(;h<14;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(t.nlen=(l&31)+257,l>>>=5,h-=5,t.ndist=(l&31)+1,l>>>=5,h-=5,t.ncode=(l&15)+4,l>>>=4,h-=4,t.nlen>286||t.ndist>30){i.msg="too many length or distance symbols",t.mode=lt;break}t.have=0,t.mode=Gf;case Gf:for(;t.have<t.ncode;){for(;h<3;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}t.lens[F[t.have++]]=l&7,l>>>=3,h-=3}for(;t.have<19;)t.lens[F[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,v={bits:t.lenbits},C=Ws(uS,t.lens,0,19,t.lencode,0,t.work,v),t.lenbits=v.bits,C){i.msg="invalid code lengths set",t.mode=lt;break}t.have=0,t.mode=Wf;case Wf:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,S=m>>>16&255,w=m&65535,!(p<=h);){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(w<16)l>>>=p,h-=p,t.lens[t.have++]=w;else{if(w===16){for(A=p+2;h<A;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(l>>>=p,h-=p,t.have===0){i.msg="invalid bit length repeat",t.mode=lt;break}M=t.lens[t.have-1],f=3+(l&3),l>>>=2,h-=2}else if(w===17){for(A=p+3;h<A;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}l>>>=p,h-=p,M=0,f=3+(l&7),l>>>=3,h-=3}else{for(A=p+7;h<A;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}l>>>=p,h-=p,M=0,f=11+(l&127),l>>>=7,h-=7}if(t.have+f>t.nlen+t.ndist){i.msg="invalid bit length repeat",t.mode=lt;break}for(;f--;)t.lens[t.have++]=M}}if(t.mode===lt)break;if(t.lens[256]===0){i.msg="invalid code -- missing end-of-block",t.mode=lt;break}if(t.lenbits=9,v={bits:t.lenbits},C=Ws(im,t.lens,0,t.nlen,t.lencode,0,t.work,v),t.lenbits=v.bits,C){i.msg="invalid literal/lengths set",t.mode=lt;break}if(t.distbits=6,t.distcode=t.distdyn,v={bits:t.distbits},C=Ws(rm,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,v),t.distbits=v.bits,C){i.msg="invalid distances set",t.mode=lt;break}if(t.mode=Ka,e===$a)break e;case Ka:t.mode=Ja;case Ja:if(o>=6&&c>=258){i.next_out=a,i.avail_out=c,i.next_in=s,i.avail_in=o,t.hold=l,t.bits=h,sS(i,d),a=i.next_out,r=i.output,c=i.avail_out,s=i.next_in,n=i.input,o=i.avail_in,l=t.hold,h=t.bits,t.mode===Qn&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,S=m>>>16&255,w=m&65535,!(p<=h);){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(S&&(S&240)===0){for(y=p,b=S,T=w;m=t.lencode[T+((l&(1<<y+b)-1)>>y)],p=m>>>24,S=m>>>16&255,w=m&65535,!(y+p<=h);){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}l>>>=y,h-=y,t.back+=y}if(l>>>=p,h-=p,t.back+=p,t.length=w,S===0){t.mode=jf;break}if(S&32){t.back=-1,t.mode=Qn;break}if(S&64){i.msg="invalid literal/length code",t.mode=lt;break}t.extra=S&15,t.mode=Xf;case Xf:if(t.extra){for(A=t.extra;h<A;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=Yf;case Yf:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,S=m>>>16&255,w=m&65535,!(p<=h);){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if((S&240)===0){for(y=p,b=S,T=w;m=t.distcode[T+((l&(1<<y+b)-1)>>y)],p=m>>>24,S=m>>>16&255,w=m&65535,!(y+p<=h);){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}l>>>=y,h-=y,t.back+=y}if(l>>>=p,h-=p,t.back+=p,S&64){i.msg="invalid distance code",t.mode=lt;break}t.offset=w,t.extra=S&15,t.mode=qf;case qf:if(t.extra){for(A=t.extra;h<A;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){i.msg="invalid distance too far back",t.mode=lt;break}t.mode=Zf;case Zf:if(c===0)break e;if(f=d-c,t.offset>f){if(f=t.offset-f,f>t.whave&&t.sane){i.msg="invalid distance too far back",t.mode=lt;break}f>t.wnext?(f-=t.wnext,g=t.wsize-f):g=t.wnext-f,f>t.length&&(f=t.length),_=t.window}else _=r,g=a-t.offset,f=t.length;f>c&&(f=c),c-=f,t.length-=f;do r[a++]=_[g++];while(--f);t.length===0&&(t.mode=Ja);break;case jf:if(c===0)break e;r[a++]=t.length,c--,t.mode=Ja;break;case Il:if(t.wrap){for(;h<32;){if(o===0)break e;o--,l|=n[s++]<<h,h+=8}if(d-=c,i.total_out+=d,t.total+=d,t.wrap&4&&d&&(i.adler=t.check=t.flags?Rt(t.check,r,d,a-d):sa(t.check,r,d,a-d)),d=c,t.wrap&4&&(t.flags?l:Jf(l))!==t.check){i.msg="incorrect data check",t.mode=lt;break}l=0,h=0}t.mode=$f;case $f:if(t.wrap&&t.flags){for(;h<32;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(t.wrap&4&&l!==(t.total&4294967295)){i.msg="incorrect length check",t.mode=lt;break}l=0,h=0}t.mode=Kf;case Kf:C=dS;break e;case lt:C=sm;break e;case om:return am;case lm:default:return Tn}return i.next_out=a,i.avail_out=c,i.next_in=s,i.avail_in=o,t.hold=l,t.bits=h,(t.wsize||d!==i.avail_out&&t.mode<lt&&(t.mode<Il||e!==Cf))&&dm(i,i.output,i.next_out,d-i.avail_out),u-=i.avail_in,d-=i.avail_out,i.total_in+=u,i.total_out+=d,t.total+=d,t.wrap&4&&d&&(i.adler=t.check=t.flags?Rt(t.check,r,d,i.next_out-d):sa(t.check,r,d,i.next_out-d)),i.data_type=t.bits+(t.last?64:0)+(t.mode===Qn?128:0)+(t.mode===Ka||t.mode===Dl?256:0),(u===0&&d===0||e===Cf)&&C===gr&&(C=mS),C},SS=i=>{if(br(i))return Tn;let e=i.state;return e.window&&(e.window=null),i.state=null,gr},ES=(i,e)=>{if(br(i))return Tn;const t=i.state;return(t.wrap&2)===0?Tn:(t.head=e,e.done=!1,gr)},TS=(i,e)=>{const t=e.length;let n,r,s;return br(i)||(n=i.state,n.wrap!==0&&n.mode!==Eo)?Tn:n.mode===Eo&&(r=1,r=sa(r,e,t,0),r!==n.check)?sm:(s=dm(i,e,t,t),s?(n.mode=om,am):(n.havedict=1,gr))};var AS=hm,RS=um,CS=cm,PS=bS,DS=fm,IS=wS,LS=SS,US=ES,OS=TS,NS="pako inflate (from Nodeca project)",ri={inflateReset:AS,inflateReset2:RS,inflateResetKeep:CS,inflateInit:PS,inflateInit2:DS,inflate:IS,inflateEnd:LS,inflateGetHeader:US,inflateSetDictionary:OS,inflateInfo:NS};function FS(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var kS=FS;const pm=Object.prototype.toString,{Z_NO_FLUSH:BS,Z_FINISH:zS,Z_OK:la,Z_STREAM_END:Ol,Z_NEED_DICT:Nl,Z_STREAM_ERROR:HS,Z_DATA_ERROR:ed,Z_MEM_ERROR:VS}=pa;function ga(i){this.options=Lo.assign({chunkSize:1024*64,windowBits:15,to:""},i||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(i&&i.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15)===0&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new tm,this.strm.avail_out=0;let t=ri.inflateInit2(this.strm,e.windowBits);if(t!==la)throw new Error(mr[t]);if(this.header=new kS,ri.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=oa.string2buf(e.dictionary):pm.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=ri.inflateSetDictionary(this.strm,e.dictionary),t!==la)))throw new Error(mr[t])}ga.prototype.push=function(i,e){const t=this.strm,n=this.options.chunkSize,r=this.options.dictionary;let s,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?zS:BS,pm.call(i)==="[object ArrayBuffer]"?t.input=new Uint8Array(i):t.input=i,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(n),t.next_out=0,t.avail_out=n),s=ri.inflate(t,a),s===Nl&&r&&(s=ri.inflateSetDictionary(t,r),s===la?s=ri.inflate(t,a):s===ed&&(s=Nl));t.avail_in>0&&s===Ol&&t.state.wrap>0&&i[t.next_in]!==0;)ri.inflateReset(t),s=ri.inflate(t,a);switch(s){case HS:case ed:case Nl:case VS:return this.onEnd(s),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||s===Ol))if(this.options.to==="string"){let c=oa.utf8border(t.output,t.next_out),l=t.next_out-c,h=oa.buf2string(t.output,c);t.next_out=l,t.avail_out=n-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(h)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(s===la&&o===0)){if(s===Ol)return s=ri.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};ga.prototype.onData=function(i){this.chunks.push(i)};ga.prototype.onEnd=function(i){i===la&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Lo.flattenChunks(this.chunks)),this.chunks=[],this.err=i,this.msg=this.strm.msg};function Oh(i,e){const t=new ga(e);if(t.push(i),t.err)throw t.msg||mr[t.err];return t.result}function GS(i,e){return e=e||{},e.raw=!0,Oh(i,e)}var WS=ga,XS=Oh,YS=GS,qS=Oh,ZS={Inflate:WS,inflate:XS,inflateRaw:YS,ungzip:qS};const{Deflate:jS,deflate:$S,deflateRaw:KS,gzip:JS}=iS,{Inflate:QS,inflate:eE,inflateRaw:tE,ungzip:nE}=ZS;var iE=jS,rE=$S,sE=KS,aE=JS,oE=QS,lE=eE,cE=tE,hE=nE,uE=pa,fE={Deflate:iE,deflate:rE,deflateRaw:sE,gzip:aE,Inflate:oE,inflate:lE,inflateRaw:cE,ungzip:hE,constants:uE},Fl={exports:{}},td;function dE(){return td||(td=1,function(i){(function(){function e(a,o){if(o&&o.multiple&&!Array.isArray(a))throw new Error("Invalid argument type: Expected an Array to serialize multiple values.");const c=4294967296;let l,h,u=new Uint8Array(128),d=0;if(o&&o.multiple)for(let x=0;x<a.length;x++)f(a[x]);else f(a);return u.subarray(0,d);function f(x,v){switch(typeof x){case"undefined":g();break;case"boolean":_(x);break;case"number":m(x);break;case"string":p(x);break;case"object":x===null?g():x instanceof Date?b(x):Array.isArray(x)?S(x):x instanceof Uint8Array||x instanceof Uint8ClampedArray?w(x):x instanceof Int8Array||x instanceof Int16Array||x instanceof Uint16Array||x instanceof Int32Array||x instanceof Uint32Array||x instanceof Float32Array||x instanceof Float64Array?S(x):y(x);break;default:if(!v&&o&&o.invalidTypeReplacement)typeof o.invalidTypeReplacement=="function"?f(o.invalidTypeReplacement(x),!0):f(o.invalidTypeReplacement,!0);else throw new Error("Invalid argument type: The type '"+typeof x+"' cannot be serialized.")}}function g(x){T(192)}function _(x){T(x?195:194)}function m(x){if(isFinite(x)&&Math.floor(x)===x)if(x>=0&&x<=127)T(x);else if(x<0&&x>=-32)T(x);else if(x>0&&x<=255)M([204,x]);else if(x>=-128&&x<=127)M([208,x]);else if(x>0&&x<=65535)M([205,x>>>8,x]);else if(x>=-32768&&x<=32767)M([209,x>>>8,x]);else if(x>0&&x<=4294967295)M([206,x>>>24,x>>>16,x>>>8,x]);else if(x>=-2147483648&&x<=2147483647)M([210,x>>>24,x>>>16,x>>>8,x]);else if(x>0&&x<=18446744073709552e3){let v=x/c,A=x%c;M([211,v>>>24,v>>>16,v>>>8,v,A>>>24,A>>>16,A>>>8,A])}else x>=-9223372036854776e3&&x<=9223372036854776e3?(T(211),C(x)):x<0?M([211,128,0,0,0,0,0,0,0]):M([207,255,255,255,255,255,255,255,255]);else h||(l=new ArrayBuffer(8),h=new DataView(l)),h.setFloat64(0,x),T(203),M(new Uint8Array(l))}function p(x){let v=n(x),A=v.length;A<=31?T(160+A):A<=255?M([217,A]):A<=65535?M([218,A>>>8,A]):M([219,A>>>24,A>>>16,A>>>8,A]),M(v)}function S(x){let v=x.length;v<=15?T(144+v):v<=65535?M([220,v>>>8,v]):M([221,v>>>24,v>>>16,v>>>8,v]);for(let A=0;A<v;A++)f(x[A])}function w(x){let v=x.length;v<=15?M([196,v]):v<=65535?M([197,v>>>8,v]):M([198,v>>>24,v>>>16,v>>>8,v]),M(x)}function y(x){let v=0;for(let A in x)x[A]!==void 0&&v++;v<=15?T(128+v):v<=65535?M([222,v>>>8,v]):M([223,v>>>24,v>>>16,v>>>8,v]);for(let A in x){let F=x[A];F!==void 0&&(f(A),f(F))}}function b(x){let v=x.getTime()/1e3;if(x.getMilliseconds()===0&&v>=0&&v<4294967296)M([214,255,v>>>24,v>>>16,v>>>8,v]);else if(v>=0&&v<17179869184){let A=x.getMilliseconds()*1e6;M([215,255,A>>>22,A>>>14,A>>>6,A<<2>>>0|v/c,v>>>24,v>>>16,v>>>8,v])}else{let A=x.getMilliseconds()*1e6;M([199,12,255,A>>>24,A>>>16,A>>>8,A]),C(v)}}function T(x){if(u.length<d+1){let v=u.length*2;for(;v<d+1;)v*=2;let A=new Uint8Array(v);A.set(u),u=A}u[d]=x,d++}function M(x){if(u.length<d+x.length){let v=u.length*2;for(;v<d+x.length;)v*=2;let A=new Uint8Array(v);A.set(u),u=A}u.set(x,d),d+=x.length}function C(x){let v,A;x>=0?(v=x/c,A=x%c):(x++,v=Math.abs(x)/c,A=Math.abs(x)%c,v=~v,A=~A),M([v>>>24,v>>>16,v>>>8,v,A>>>24,A>>>16,A>>>8,A])}}function t(a,o){let l=0;if(a instanceof ArrayBuffer&&(a=new Uint8Array(a)),typeof a!="object"||typeof a.length>"u")throw new Error("Invalid argument type: Expected a byte array (Array or Uint8Array) to deserialize.");if(!a.length)throw new Error("Invalid argument: The byte array to deserialize is empty.");a instanceof Uint8Array||(a=new Uint8Array(a));let h;if(o&&o.multiple)for(h=[];l<a.length;)h.push(u());else h=u();return h;function u(){const b=a[l++];if(b>=0&&b<=127)return b;if(b>=128&&b<=143)return m(b-128);if(b>=144&&b<=159)return p(b-144);if(b>=160&&b<=191)return S(b-160);if(b===192)return null;if(b===193)throw new Error("Invalid byte code 0xc1 found.");if(b===194)return!1;if(b===195)return!0;if(b===196)return _(-1,1);if(b===197)return _(-1,2);if(b===198)return _(-1,4);if(b===199)return w(-1,1);if(b===200)return w(-1,2);if(b===201)return w(-1,4);if(b===202)return g(4);if(b===203)return g(8);if(b===204)return f(1);if(b===205)return f(2);if(b===206)return f(4);if(b===207)return f(8);if(b===208)return d(1);if(b===209)return d(2);if(b===210)return d(4);if(b===211)return d(8);if(b===212)return w(1);if(b===213)return w(2);if(b===214)return w(4);if(b===215)return w(8);if(b===216)return w(16);if(b===217)return S(-1,1);if(b===218)return S(-1,2);if(b===219)return S(-1,4);if(b===220)return p(-1,2);if(b===221)return p(-1,4);if(b===222)return m(-1,2);if(b===223)return m(-1,4);if(b>=224&&b<=255)return b-256;throw console.debug("msgpack array:",a),new Error("Invalid byte value '"+b+"' at index "+(l-1)+" in the MessagePack binary data (length "+a.length+"): Expecting a range of 0 to 255. This is not a byte array.")}function d(b){let T=0,M=!0;for(;b-- >0;)if(M){let C=a[l++];T+=C&127,C&128&&(T-=128),M=!1}else T*=256,T+=a[l++];return T}function f(b){let T=0;for(;b-- >0;)T*=256,T+=a[l++];return T}function g(b){let T=new DataView(a.buffer,l+a.byteOffset,b);if(l+=b,b===4)return T.getFloat32(0,!1);if(b===8)return T.getFloat64(0,!1)}function _(b,T){b<0&&(b=f(T));let M=a.subarray(l,l+b);return l+=b,M}function m(b,T){b<0&&(b=f(T));let M={};for(;b-- >0;){let C=u();M[C]=u()}return M}function p(b,T){b<0&&(b=f(T));let M=[];for(;b-- >0;)M.push(u());return M}function S(b,T){b<0&&(b=f(T));let M=l;return l+=b,r(a,M,b)}function w(b,T){b<0&&(b=f(T));let M=f(1),C=_(b);switch(M){case 255:return y(C)}return{type:M,data:C}}function y(b){if(b.length===4){let T=(b[0]<<24>>>0)+(b[1]<<16>>>0)+(b[2]<<8>>>0)+b[3];return new Date(T*1e3)}if(b.length===8){let T=(b[0]<<22>>>0)+(b[1]<<14>>>0)+(b[2]<<6>>>0)+(b[3]>>>2),M=(b[3]&3)*4294967296+(b[4]<<24>>>0)+(b[5]<<16>>>0)+(b[6]<<8>>>0)+b[7];return new Date(M*1e3+T/1e6)}if(b.length===12){let T=(b[0]<<24>>>0)+(b[1]<<16>>>0)+(b[2]<<8>>>0)+b[3];l-=8;let M=d(8);return new Date(M*1e3+T/1e6)}throw new Error("Invalid data length for a date value.")}}function n(a){let o=!0,c=a.length;for(let u=0;u<c;u++)if(a.charCodeAt(u)>127){o=!1;break}let l=0,h=new Uint8Array(a.length*(o?1:4));for(let u=0;u!==c;u++){let d=a.charCodeAt(u);if(d<128){h[l++]=d;continue}if(d<2048)h[l++]=d>>6|192;else{if(d>55295&&d<56320){if(++u>=c)throw new Error("UTF-8 encode: incomplete surrogate pair");let f=a.charCodeAt(u);if(f<56320||f>57343)throw new Error("UTF-8 encode: second surrogate character 0x"+f.toString(16)+" at index "+u+" out of range");d=65536+((d&1023)<<10)+(f&1023),h[l++]=d>>18|240,h[l++]=d>>12&63|128}else h[l++]=d>>12|224;h[l++]=d>>6&63|128}h[l++]=d&63|128}return o?h:h.subarray(0,l)}function r(a,o,c){let l=o,h="";for(c+=o;l<c;){let u=a[l++];if(u>127)if(u>191&&u<224){if(l>=c)throw new Error("UTF-8 decode: incomplete 2-byte sequence");u=(u&31)<<6|a[l++]&63}else if(u>223&&u<240){if(l+1>=c)throw new Error("UTF-8 decode: incomplete 3-byte sequence");u=(u&15)<<12|(a[l++]&63)<<6|a[l++]&63}else if(u>239&&u<248){if(l+2>=c)throw new Error("UTF-8 decode: incomplete 4-byte sequence");u=(u&7)<<18|(a[l++]&63)<<12|(a[l++]&63)<<6|a[l++]&63}else throw new Error("UTF-8 decode: unknown multibyte start 0x"+u.toString(16)+" at index "+(l-1));if(u<=65535)h+=String.fromCharCode(u);else if(u<=1114111)u-=65536,h+=String.fromCharCode(u>>10|55296),h+=String.fromCharCode(u&1023|56320);else throw new Error("UTF-8 decode: code point 0x"+u.toString(16)+" exceeds UTF-16 reach")}return h}let s={serialize:e,deserialize:t,encode:e,decode:t};i?i.exports=s:window[window.msgpackJsName||"msgpack"]=s})()}(Fl)),Fl.exports}var Xs=dE();class nd{constructor(e,t,n,r,s,a,o){this.imageFilenames=e,this.crystalSummary=t,this.goniometer=n,this.crystal=r,this.scan=s,this.detectorPanelData=a,this.imageFilename=o,this.imageData={}}parseImageData(e,t){const n=Fi.decompressImageData(e);this.imageData[t]=n}parseExptImageData(e){for(let t=0;t<e.length;t++){const n=Fi.decompressImageData(e[t]);this.imageData[t]=n}}clearExperiment(){this.imageFilenames=null,this.crystalSummary=null,this.goniometer=null,this.crystal=null,this.scan=null,this.detectorPanelData=null,this.imageFilename=null,this.imageData={}}}class Fi{constructor(){di(this,"parseExperiment",e=>{const t=new FileReader;return new Promise((n,r)=>{t.onerror=()=>{t.abort(),r(new DOMException("Problem parsing .expt file."))},t.onloadend=()=>{if(n(t.result),Fi.isDIALSExpt(e,t.result)){this.exptJSON=JSON.parse(t.result);for(var s=0;s<this.numExperiments();s++)this.experiments[s]=new nd(this.getImageFilenames(s),this.getCrystalSummary(s),this.getGoniometer(s),this.getCrystal(s),this.getScan(s),this.getDetectorData(s),this.getImageFilenames(s));this.filename=e.name}},t.readAsText(e)})});this.exptJSON=null,this.filename=null,this.experiments={},this.crystals={}}hasExptJSON(){return this.exptJSON!=null}static isDIALSExpt(e,t){return e.name.split(".").pop()==="expt"&&t[0]==="{"}static isExptJSON(e){try{return e.__id__=="ExperimentList"}catch{return!1}}static decompressImageData(e){e=Xs.decode(e);const{data:t,shape:n,dtype:r}=e,s=fE.inflate(t);let a;switch(r){case"float32":a=Float32Array;break;case"float64":a=Float64Array;break;case"int32":a=Int32Array;break;default:throw new Error(`Unsupported data type: ${r}`)}const o=new a(s.buffer,s.byteOffset,s.byteLength/a.BYTES_PER_ELEMENT);if(n.length===2){const[c,l]=n;if(o.length!==c*l)throw new Error("Data length mismatch for 2D reshape");return Array.from({length:c},(h,u)=>o.slice(u*l,(u+1)*l))}else if(n.length===3){const[c,l,h]=n;if(o.length!==c*l*h)throw new Error("Data length mismatch for 3D reshape");return Array.from({length:c},(u,d)=>Array.from({length:l},(f,g)=>o.slice(d*l*h+g*h,d*l*h+(g+1)*h)))}else throw new Error("Only 2D and 3D arrays are supported")}clearExperiment(){this.exptJSON=null,this.filename=null,Object.values(this.experiments).forEach(e=>e.clearExperiment()),this.experiments={},this.crystals={}}numExperiments(){return this.exptJSON==null?0:this.exptJSON.imageset.length}parseExperimentJSON(e){this.exptJSON=e,this.imageFilenames=[];for(var t=0;t<this.numExperiments();t++)this.experiments[t]=new nd(this.getImageFilenames(t),this.getCrystalSummary(t),this.getGoniometer(t),this.getCrystal(t),this.getScan(t),this.getDetectorData(t),this.getImageFilenames(t)),this.imageFilenames.push(this.getImageFilenames(t)),this.crystals=this.getAllCrystals()}parseImageData(e,t,n){this.experiments[n].parseImageData(e,t)}parseExptImageData(e,t){this.experiments[t].parseExptImageData(e)}getImageFilenames(e){const t=this.exptJSON.experiment[e].imageset;return this.exptJSON.imageset[t].template}getDetectorData(e){const t=this.getRawDetectorPanelData(e);for(var n=this.getDetectorOrientationData(e),r=[],s=0;s<t.length;s++){const M=t[s];var a=new Ee(M.pixel_size[0],M.pixel_size[1]),o=new Ee(M.image_size[0],M.image_size[1]),c=new Ee(a.x*o.x,a.y*o.y),l=new D(M.fast_axis[0],M.fast_axis[1],M.fast_axis[2]),h=new D(M.slow_axis[0],M.slow_axis[1],M.slow_axis[2]),u=new D(M.origin[0],M.origin[1],M.origin[2]),d=new ve(l.x,h.x,u.x,l.y,h.y,u.y,l.z,h.z,u.z),f=new D(n.fast_axis[0],n.fast_axis[1],n.fast_axis[2]),g=new D(n.slow_axis[0],n.slow_axis[1],n.slow_axis[2]),_=f.clone().cross(g),m=new ve(f.x,g.x,_.x,f.y,g.y,_.y,f.z,g.z,_.z),p=new D(n.origin[0],n.origin[1],n.origin[2]),S=m.clone().multiply(d),w=S.elements;w[6]+=p.x,w[7]+=p.y,w[8]+=p.z;var y=new ve().fromArray(w),b=l.clone().multiplyScalar(c.x),T=h.clone().multiplyScalar(c.y);let C=u.clone();C.add(b.clone().multiplyScalar(.5)),C.add(T.clone().multiplyScalar(.5)),r.push({panelSize:c,pxSize:a,pxs:o,fastAxis:l,slowAxis:h,scaledFastAxis:b,scaledSlowAxis:T,origin:u,dMatrix:y,centroid:C,name:M.name})}return r}getRawDetectorPanelData(e){const t=this.exptJSON.experiment[e].detector;return this.exptJSON.detector[t].panels}getBeamData(e){const t=this.exptJSON.experiment[e].beam;return this.exptJSON.beam[t]}getBeamSummary(e){const t=this.getBeamData(e);var n=t.direction;n=[n[0].toFixed(3),n[1].toFixed(3),n[2].toFixed(3)];const r=t.wavelength;var s="direction: ("+n+"), ";return r&&(s+=" wavelength: "+r.toFixed(3)),s}getGoniometer(e){function t(c){const l=["axes","angles","scan_axis"];for(var h=0;h<l.length;h++)if(!(l[h]in c))return!1;return!0}function n(c){const l=c.fixed_rotation,h=c.setting_rotation,u=c.rotation_axis;return{fixedRotation:new ve(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8]),settingRotation:new ve(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8]),rotationAxis:new D(u[0],u[1],u[2])}}function r(c){function l(S,w){const y=new D(S[0],S[1],S[2]).normalize(),b=Math.cos(w*Math.PI/180),T=Math.sin(w*Math.PI/180),[M,C,x]=y.toArray(),v=b+(1-b)*M*M,A=(1-b)*M*C-T*x,F=(1-b)*M*x+T*C,O=(1-b)*M*C+T*x,V=b+(1-b)*C*C,X=(1-b)*C*x-T*M,G=(1-b)*M*x-T*C,q=(1-b)*C*x+T*M,H=b+(1-b)*x*x;return new ve().set(v,A,F,O,V,X,G,q,H).transpose()}const h=c.axes,u=c.angles,d=c.scan_axis,f=h[d],g=new D(f[0],f[1],f[2]);var _=new ve(1,0,0,0,1,0,0,0,1);const m=new ve(1,0,0,0,1,0,0,0,1);for(var p=0;p<d;p++){const S=l(h[p],u[p]);_=_.clone().multiply(S)}for(var p=d+1;p<h.length;p++){const w=l(h[p],u[p]);m.multiply(w)}return{fixedRotation:_,settingRotation:m,rotationAxis:g}}const s=this.exptJSON.goniometer;if(!s||s.length===0){this.goniometer=null;return}const a=this.exptJSON.experiment[e].goniometer,o=s[a];return t(o)?r(o):n(o)}getCrystalData(e){if(this.exptJSON.crystal.length===0||e===void 0)return null;var t=this.exptJSON.experiment[e].crystal;return this.exptJSON.crystal[t]}getAllCrystalData(){return this.exptJSON.crystal}hasCrystal(e){return this.exptJSON===null||this.experiments===void 0?!1:this.experiments[e].crystal!==null&&this.experiments[e].crystal!==void 0}latticeParameters(e,t,n){const r=e.length(),s=t.length(),a=n.length(),o=Math.acos(t.dot(n)/(s*a)),c=Math.acos(e.dot(n)/(r*a)),l=Math.acos(e.dot(t)/(r*s));return[r,s,a,o,c,l]}unitCellVolume(e,t,n,r,s,a){const o=Math.cos(r)**2,c=Math.cos(s)**2,l=Math.cos(a)**2,h=Math.cos(r),u=Math.cos(s),d=Math.cos(a);return e*t*n*Math.sqrt(1-o-c-l+2*h*u*d)}reciprocalLatticeConstants(e,t,n,r,s,a,o){const c=new Array(6);return c[0]=t*n*Math.sin(r)/o,c[1]=n*e*Math.sin(s)/o,c[2]=e*t*Math.sin(a)/o,c[3]=Math.cos(s)*Math.cos(a)-Math.cos(r),c[3]/=Math.sin(s)*Math.sin(a),c[4]=Math.cos(a)*Math.cos(r)-Math.cos(s),c[4]/=Math.sin(a)*Math.sin(r),c[5]=Math.cos(r)*Math.cos(s)-Math.cos(a),c[5]/=Math.sin(r)*Math.sin(s),c}getBMatrix(e,t,n){const[r,s,a,o,c,l]=this.latticeParameters(e,t,n),h=this.unitCellVolume(r,s,a,o,c,l),u=this.reciprocalLatticeConstants(r,s,a,o,c,l,h),d=Math.sqrt(1-u[3]*u[3]),f=new Array(9);return f[0]=1/r,f[1]=-Math.cos(l)/(Math.sin(l)*r),f[2]=-(Math.cos(l)*Math.sin(c)*u[3]+Math.cos(c)*Math.sin(l)),f[2]/=Math.sin(c)*d*Math.sin(l)*r,f[3]=0,f[4]=1/(Math.sin(l)*s),f[5]=u[3]/(d*Math.sin(l)*s),f[6]=0,f[7]=0,f[8]=1/(Math.sin(c)*d*a),new ve(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8])}getAllCrystals(){const e=this.getAllCrystalData();if(!e){this.crystalSummary=null;return}const t=[];for(let a=0;a<e.length;a++){const o=e[a];var n=o.real_space_a;n=new D(n[0],n[1],n[2]);var r=o.real_space_b;r=new D(r[0],r[1],r[2]);var s=o.real_space_c;s=new D(s[0],s[1],s[2]);const c=this.getBMatrix(n.clone(),r.clone(),s.clone()),l=new ve(n.x,n.y,n.z,r.x,r.y,r.z,s.x,s.y,s.z).invert(),h=l.elements;l.transpose();const u=new ve;u.multiplyMatrices(c.clone().invert(),l.clone());const d=[new D(h[0],h[3],h[6]),new D(h[1],h[4],h[7]),new D(h[2],h[5],h[8])];t.push({U:u,B:c,UB:l,reciprocalCell:d})}return t}getCrystal(e){const t=this.getCrystalData(e);if(!t){this.crystalSummary=null;return}var n=t.real_space_a;n=new D(n[0],n[1],n[2]);var r=t.real_space_b;r=new D(r[0],r[1],r[2]);var s=t.real_space_c;s=new D(s[0],s[1],s[2]);const a=this.getBMatrix(n.clone(),r.clone(),s.clone()),o=new ve(n.x,n.y,n.z,r.x,r.y,r.z,s.x,s.y,s.z).invert(),c=o.elements;o.transpose();const l=new ve;l.multiplyMatrices(a.clone().invert(),o.clone());const h=[new D(c[0],c[3],c[6]),new D(c[1],c[4],c[7]),new D(c[2],c[5],c[8])];return{U:l,B:a,UB:o,reciprocalCell:h,exptID:e}}getCrystalRLV(e){return this.experiments[e].crystal.reciprocalCell}getAllCrystalRLVs(){if(!this.crystals)return null;const e=[];for(let t=0;t<this.crystals.length;t++)e.push([this.crystals[t].reciprocalCell[0].clone(),this.crystals[t].reciprocalCell[1].clone(),this.crystals[t].reciprocalCell[2].clone()]);return e}getAllCrystalRCVs(){if(!this.crystals)return null;const e=[];for(let t=0;t<this.crystals.length;t++){const n=this.crystals[t].B.clone().elements;e.push([new D(n[0],n[3],n[6]),new D(n[1],n[4],n[7]),new D(n[2],n[5],n[8])])}return e}getCrystalU(e){return this.crystals[e].U.clone()}getCrystalSummary(e){if(this.experiments!==void 0&&this.experiments[e]!==void 0)return this.experiments[e].crystalSummary!==void 0?this.experiments[e].crystalSummary:null;const t=this.getCrystalData(e);if(!t)return null;const n=t.real_space_a,r=new D(n[0],n[1],n[2]),s=t.real_space_b,a=new D(s[0],s[1],s[2]),o=t.real_space_c,c=new D(o[0],o[1],o[2]),l=r.length().toFixed(3),h=a.length().toFixed(3),u=c.length().toFixed(3),d=(a.angleTo(c)*(180/Math.PI)).toFixed(3),f=(r.angleTo(c)*(180/Math.PI)).toFixed(3),g=(r.angleTo(a)*(180/Math.PI)).toFixed(3);var _="a: "+l+" b: "+h+" c: "+u;return _+=" alpha: "+d+" beta: "+f+" gamma: "+g,_+=" ("+t.space_group_hall_symbol+")",_}getDetectorOrientationData(e){const t=this.exptJSON.experiment[e].detector;return this.exptJSON.detector[t].hierarchy}getDetectorPanelDataByIdx(e,t){return this.experiments[e].detectorPanelData[t]}getDetectorPanelName(e,t){return this.getDetectorPanelDataByIdx(e,t).name}getDetectorPanelCorners(e,t){const n=this.getDetectorPanelDataByIdx(e,t);var r=n.origin.clone(),s=n.origin.clone().add(n.scaledFastAxis),a=n.origin.clone().add(n.scaledFastAxis).add(n.scaledSlowAxis),o=n.origin.clone().add(n.scaledSlowAxis);return[r,s,a,o]}getDetectorPanelNormal(e,t){const n=this.getDetectorPanelDataByIdx(e,t);return n.scaledFastAxis.clone().cross(n.scaledSlowAxis.clone()).normalize()}getDetectorPanelIdxByName(e,t){const n=this.experiments[e].detectorPanelData;for(let r=0;r<n.length;r++)if(n[r].name===t)return r;return null}getDetectorPanelDataByName(e,t){const n=this.experiments[e].detectorPanelData;for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}getDetectorPanelCentroidByName(e,t){const n=this.getDetectorPanelDataByName(e,t);return n!==null?n.centroid:null}getDetectorPanelSize(e,t){return this.experiments[e].detectorPanelData[t].pxs}getBeamDirection(e){const t=this.getBeamData(e);return new D(t.direction[0],t.direction[1],t.direction[2])}getNumDetectorPanels(e){return this.experiments[e].detectorPanelData.length}getScanData(e){if(!("scan"in this.exptJSON))return null;var t=this.exptJSON.experiment[e].scan;return this.exptJSON.scan[t]}getScan(e){const t=this.getScanData(e);if(!t||!("oscillation"in t.properties))return null;const n=new Ee(t.properties.oscillation[0]*Math.PI/180,t.properties.oscillation[1]*Math.PI/180),r=new Ee(t.image_range[0]-1,t.image_range[1]-1);return{oscillation:n,imageRange:r}}getAngleFromFrame(e,t){if(e===null)return null;const n=e.oscillation,r=e.imageRange;return n.x+(t-r.x)*n.y}addAnglesToReflections(e){for(var t=0;t<e.length;t++){var n=this.experiments[e[t].exptID].scan;if("xyzObs"in e[t]){var r;n==null?r=0:r=this.getAngleFromFrame(n,e[t].xyzObs[2]),e[t].angleObs=r}if("xyzCal"in e[t]){var s;n===null?s=0:s=this.getAngleFromFrame(n,e[t].xyzCal[2]),e[t].angleCal=s}}return e}getExptIDs(){let e=[];return this.exptJSON.experiment.forEach((t,n)=>{e.push(n)}),e}getImagesetIDs(){return Object.keys(this.experiments)}getExptLabels(){var e=window.navigator.oscpu?window.navigator.oscpu.indexOf("Windows")>-1:window.navigator.platform.indexOf("Win")>-1,t=[];for(let r in this.experiments){var n=this.experiments[r].imageFilename;e?t.push(n.split("\\").pop()):t.push(n.split("/").pop())}return t}getCrystalIDsMap(){const e={"-1":"-1"};return this.exptJSON.experiment.forEach((t,n)=>{"crystal"in t?e[n.toString()]=t.crystal.toString():e[n.toString()]="-1"}),e}}class pE{constructor(e,t,n){this.positions=[e],this.panelName=t,this.lineMesh=null,this.bboxMesh=null,this.lineMaterial=new fo({color:n})}addBboxMesh(e){this.clearLineMesh(),this.bboxMesh=e,window.scene.add(e)}clearLineMesh(){this.lineMesh&&(window.scene.remove(this.lineMesh),this.lineMesh.geometry.dispose(),this.lineMesh.material.dispose(),this.lineMesh=null)}clearBboxMesh(){this.bboxMesh&&(window.scene.remove(this.bboxMesh),this.bboxMesh.geometry.dispose(),this.bboxMesh.material.dispose(),this.bboxMesh=null)}clear(){this.clearLineMesh(),this.clearBboxMesh()}updateUserOutline(e){this.positions.push(e),this.clearLineMesh();const t=new nt().setFromPoints(this.positions);this.lineMesh=new ah(t,this.lineMaterial),window.scene.add(this.lineMesh)}}class Qi{constructor(e,t,n,r,s=null){di(this,"addExperiment",async e=>{this.clearExperiment(),this.clearReflectionTable(),await this.expt.parseExperiment(e),console.assert(this.hasExperiment());for(var t=0;t<this.expt.getNumDetectorPanels();t++)for(var n=0;n<this.expt.numExperiments();n++)this.addDetectorPanel(t,n,imageData!==null);this.addBeam(),this.addSample(),this.setCameraToDefaultPositionWithExperiment(),this.showSidebar(),this.isStandalone&&this.showCloseExptButton(),this.requestRender(),this.updateExperimentList(),this.updatePanelMeshes()});di(this,"addExperimentFromJSONString",async e=>{this.clearExperiment(),this.clearReflectionTable(),await this.expt.parseExperimentJSON(e),console.assert(this.hasExperiment()),this.allPanelMeshes={};for(var t=0;t<this.expt.getNumDetectorPanels(0);t++)for(var n=0;n<this.expt.numExperiments();n++)this.addDetectorPanel(t,n,!1);this.addBeam(),this.addSample(),this.setCameraToDefaultPositionWithExperiment(),this.showSidebar(),this.isStandalone&&this.showCloseExptButton(),this.requestRender(),this.loading=!1,this.displayDefaultHeaderText(),this.updateExperimentList(),this.updatePanelMeshes()});di(this,"addReflectionTable",async e=>{this.clearReflectionTable(),await this.refl.parseReflectionTable(e),this.addReflections(),this.hasReflectionTable()&&this.isStandalone&&this.showCloseReflButton(),this.requestRender()});this.isStandalone=r,this.debugImageMode=!1,this.debugThresholdMode=!1,this.serverWS=null,this.colors=null,s!=null?this.colors=s:this.colors=Qi.defaultColors(),this.expt=e,this.refl=t,this.calculatedIntegratedRefl=n,this.headerText=window.document.getElementById("headerText"),this.footerText=window.document.getElementById("footerText"),this.sidebar=window.document.getElementById("sidebar"),this.closeExptButton=document.getElementById("closeExpt"),this.closeReflButton=document.getElementById("closeRefl"),this.observedIndexedReflsCheckbox=document.getElementById("observedIndexedReflections"),this.observedUnindexedReflsCheckbox=document.getElementById("observedUnindexedReflections"),this.calculatedReflsCheckbox=document.getElementById("calculatedReflections"),this.integratedReflsCheckbox=document.getElementById("integratedReflections"),this.boundingBoxesCheckbox=document.getElementById("boundingBoxes"),this.reflectionSize=document.getElementById("reflectionSize"),this.userContrast=document.getElementById("userContrast"),this.contrastMethod="exponential",this.panelOutlineMeshes={},this.panelMeshes={},this.allPanelMeshes={},this.debugPanelMeshes={},this.debugPanelThresholdMeshes={},this.reflPointsObsUnindexed=[],this.reflPositionsUnindexed=[],this.reflPointsObsIndexed=[],this.reflPositionsIndexed=[],this.reflPointsIntegrated=[],this.reflPositionsIntegrated=[],this.reflPointsCal=[],this.reflPositionsCal=[],this.bboxMeshesUnindexed=[],this.bboxMeshesIndexed=[],this.beamMeshes=[],this.axesMeshes=[],this.sampleMesh=null,this.highlightReflectionMesh=null,this.createReflectionMesh=null,this.creatingReflection=!1,this.drawingReflection=!1,this.userReflection=null,this.visibleExptID=0,this.preventMouseClick=!1,this.cursorActive=!0,this.lastClickedPanelPosition=null,this.loading=!1,this.isPanning=!1,this.startMousePosition={x:0,y:0},this.panelFocusAxes=null,this.hightlightColor=new Ue(this.colors.highlight),this.panelColor=new Ue(this.colors.panel),this.reflSprite=new Z_().load("disc.png"),this.displayingTextFromHTMLEvent=!1,this.updateReflectionCheckboxEnabledStatus(),this.setDefaultReflectionsDisplay()}sendClickedPanelPosition(e,t,n){this.lastClickedPanelPosition={panelIdx:e,panelPos:t,name:n};const r=JSON.stringify({channel:"server",command:"clicked_on_panel",panel_idx:e,panel_pos:t,name:n,expt_id:this.visibleExptID});this.serverWS.send(r)}static defaultColors(){return{background:2236962,sample:16643811,reflectionObsUnindexed:[9894267,7715837,12548086,1305289,16756860,16765407,13696766,16777092,16777215,16749576,129478,11468140,16646146,10030923,7918006,16775447,16713609,13959167,6936655,5680727],reflectionObsIndexed:15158332,reflectionCal:16755370,reflectionIntegrated:16761436,panel:6127001,highlight:16777215,beam:16777215,bbox:16777215,axes:[16755370,11206570,11184895],highlightBbox:5879160,createNewReflectionBbox:16756860}}static cameraPositions(){return{default:{position:new D(0,0,1e3),target:new D(0,0,0)},defaultWithExperiment:{position:new D(1e3,0,0),target:new D(0,0,0)}}}static text(){return{default:"To view an experiment, drag .expt and .refl files into the browser",defaultWithExpt:null}}static sizes(){return{highlightBboxSize:2}}toggleSidebar(){this.sidebar.style.display=this.sidebar.style.display==="block"?"none":"block"}showSidebar(){this.sidebar.style.display="block"}updatePanelMeshes(){if(this.panelMeshes={},!this.debugImageMode&&!this.debugThresholdMode){for(const e of Object.keys(this.allPanelMeshes)){const t=parseInt(e);for(const n of Object.keys(this.allPanelMeshes[e]))this.allPanelMeshes[e][n].visible=t===this.visibleExptID;t===this.visibleExptID&&(this.panelMeshes=this.allPanelMeshes[e])}for(const e of Object.keys(this.debugPanelMeshes))this.debugPanelMeshes[e].visible=!1;for(const e of Object.keys(this.debugPanelThresholdMeshes))this.debugPanelThresholdMeshes[e].visible=!1}else{for(const e of Object.keys(this.allPanelMeshes))for(const t of Object.keys(this.allPanelMeshes[e]))this.allPanelMeshes[e][t].visible=!1;if(this.debugImageMode){for(const e of Object.keys(this.debugPanelMeshes))this.debugPanelMeshes[e].visible=!0;for(const e of Object.keys(this.debugPanelThresholdMeshes))this.debugPanelThresholdMeshes[e].visible=!1;this.panelMeshes=this.debugPanelMeshes}else if(this.debugThresholdMode){for(const e of Object.keys(this.debugPanelThresholdMeshes))this.debugPanelThresholdMeshes[e].visible=!0;for(const e of Object.keys(this.debugPanelMeshes))this.debugPanelMeshes[e].visible=!1;this.panelMeshes=this.debugPanelThresholdMeshes}}this.requestRender()}updateObservedIndexedReflections(e=null){e!==null&&(this.observedIndexedReflsCheckbox.checked=e);for(var t=0;t<this.reflPointsObsIndexed.length;t++)this.reflPointsObsIndexed[t][0].visible=this.observedIndexedReflsCheckbox.checked&&this.visibleExptID===t;this.requestRender()}updateObservedUnindexedReflections(e=null){e!==null&&(this.observedUnindexedReflsCheckbox.checked=e);for(var t=0;t<this.reflPointsObsUnindexed.length;t++)this.reflPointsObsUnindexed[t][0].visible=this.observedUnindexedReflsCheckbox.checked&&this.visibleExptID===t;this.requestRender()}updateCalculatedReflections(e=null){e!==null&&(this.calculatedReflsCheckbox.checked=e);for(var t=0;t<this.reflPointsCal.length;t++)this.reflPointsCal[t][0].visible=this.calculatedReflsCheckbox.checked&&this.visibleExptID===t;this.requestRender()}updateIntegratedReflections(e=null){e!==null&&(this.integratedReflsCheckbox.checked=e);for(var t=0;t<this.reflPointsIntegrated.length;t++)this.reflPointsIntegrated[t][0].visible=this.integratedReflsCheckbox.checked&&this.visibleExptID===t;this.requestRender()}updateBoundingBoxes(e=null){if(e!==null&&(this.boundingBoxesCheckbox.checked=e),this.observedIndexedReflsCheckbox.checked&&this.boundingBoxesCheckbox.checked)for(var t=0;t<this.bboxMeshesIndexed.length;t++)for(var n=0;n<this.bboxMeshesIndexed[t].length;n++)this.bboxMeshesIndexed[t][n].visible=this.visibleExptID===t;else for(var t=0;t<this.bboxMeshesIndexed.length;t++)for(var n=0;n<this.bboxMeshesIndexed[t].length;n++)this.bboxMeshesIndexed[t][n].visible=!1;if(this.observedUnindexedReflsCheckbox.checked&&this.boundingBoxesCheckbox.checked)for(var t=0;t<this.bboxMeshesUnindexed.length;t++)for(var n=0;n<this.bboxMeshesUnindexed[t].length;n++)this.bboxMeshesUnindexed[t][n].visible=this.visibleExptID===t;else for(var t=0;t<this.bboxMeshesUnindexed.length;t++)for(var n=0;n<this.bboxMeshesUnindexed[t].length;n++)this.bboxMeshesUnindexed[t][n].visible=!1;this.requestRender()}updateAxes(e=null){if(e!==null){for(var t=0;t<this.axesMeshes.length;t++)this.axesMeshes[t].visible=e;this.requestRender()}}updateReflectionSize(){if(this.hasReflectionTable()){if(this.reflPointsObsUnindexed){const n=[];for(var e=0;e<this.reflPositionsUnindexed.length;e++){const r=new nt;r.setAttribute("position",new st(this.reflPositionsUnindexed[e],3));const s=new jt({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionObsUnindexed[e%this.colors.reflectionObsUnindexed.length]}),a=new on(r,s);n.push([a])}this.clearReflPointsObsUnindexed();for(var t=0;t<n.length;t++)window.scene.add(n[t][0]);this.reflPointsObsUnindexed=n,this.updateObservedUnindexedReflections()}if(this.reflPointsObsIndexed){const n=[];for(var e=0;e<this.reflPositionsIndexed.length;e++){const s=new nt;s.setAttribute("position",new st(this.reflPositionsIndexed[e],3));const a=new jt({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionObsIndexed}),o=new on(s,a);n.push([o])}this.clearReflPointsObsIndexed();for(var t=0;t<n.length;t++)window.scene.add(n[t][0]);this.reflPointsObsIndexed=n,this.updateObservedIndexedReflections()}if(this.reflPositionsCal){const n=[];for(let r=0;r<this.reflPositionsCal.length;r++){const s=new nt;s.setAttribute("position",new st(this.reflPositionsCal[r],3));const a=new jt({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionCal}),o=new on(s,a);n.push([o])}this.clearReflPointsCal();for(let r=0;r<n.length;r++)window.scene.add(n[r][0]);if(this.reflPointsCal=n,this.updateCalculatedReflections(),this.reflPointsIntegrated){const r=[];for(let s=0;s<this.reflPositionsIntegrated.length;s++){const a=new nt;a.setAttribute("position",new st(this.reflPositionsIntegrated[s],3));const o=new jt({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionIntegrated}),c=new on(a,o);r.push([c])}this.clearReflPointsIntegrated();for(let s=0;s<r.length;s++)window.scene.add(r[s][0]);this.reflPointsIntegrated=r,this.updateIntegratedReflections()}}this.requestRender()}}hasExperiment(){return this.expt.hasExptJSON()}clearExperiment(){for(const t in this.panelOutlineMeshes)window.scene.remove(this.panelOutlineMeshes[t]),this.panelOutlineMeshes[t].geometry.dispose(),this.panelOutlineMeshes[t].material.dispose();this.panelOutlineMeshes={},this.clearDebugPanelMeshes();for(const t in this.panelMeshes)window.scene.remove(this.panelMeshes[t]),this.panelMeshes[t].geometry.dispose(),this.panelMeshes[t].material.dispose();for(const t in this.allPanelMeshes)for(const n in this.allPanelMeshes[t])this.clearDetectorMesh(n,t);this.allPanelMeshes={},this.panelMeshes={};for(var e=0;e<this.beamMeshes.length;e++)window.scene.remove(this.beamMeshes[e]),this.beamMeshes[e].geometry.dispose(),this.beamMeshes[e].material.dispose();this.beamMeshes=[],this.sampleMesh&&(window.scene.remove(this.sampleMesh),this.sampleMesh.geometry.dispose(),this.sampleMesh.material.dispose(),this.sampleMesh=null),this.highlightReflectionMesh&&(window.scene.remove(this.highlightReflectionMesh),this.highlightReflectionMesh.geometry.dispose(),this.highlightReflectionMesh.material.dispose(),this.highlightReflectionMesh=null),this.expt.clearExperiment(),this.hideCloseExptButton(),this.clearReflectionTable(),this.clearExperimentList(),this.requestRender(),this.updateReflectionCheckboxEnabledStatus(),this.setDefaultReflectionsDisplay()}showCloseExptButton(){this.closeExptButton.style.display="inline",this.closeExptButton.innerHTML="<b>"+this.expt.filename+' <i class="fa fa-trash"></i>'}hideCloseExptButton(){this.closeExptButton.style.display="none"}hasReflectionTable(){return this.refl.hasReflTable()}clearReflPointsObsIndexed(){for(var e=0;e<this.reflPointsObsIndexed.length;e++)window.scene.remove(this.reflPointsObsIndexed[e][0]),this.reflPointsObsIndexed[e][0].geometry.dispose(),this.reflPointsObsIndexed[e][0].material.dispose();this.reflPointsObsIndexed=[]}clearReflPointsObsUnindexed(){for(var e=0;e<this.reflPointsObsUnindexed.length;e++)window.scene.remove(this.reflPointsObsUnindexed[e][0]),this.reflPointsObsUnindexed[e][0].geometry.dispose(),this.reflPointsObsUnindexed[e][0].material.dispose();this.reflPointsObsUnindexed=[]}clearReflPointsCal(){for(var e=0;e<this.reflPointsCal.length;e++)window.scene.remove(this.reflPointsCal[e][0]),this.reflPointsCal[e][0].geometry.dispose(),this.reflPointsCal[e][0].material.dispose();this.reflPointsCal=[]}clearReflPointsIntegrated(){for(var e=0;e<this.reflPointsIntegrated.length;e++)window.scene.remove(this.reflPointsIntegrated[e][0]),this.reflPointsIntegrated[e][0].geometry.dispose(),this.reflPointsIntegrated[e][0].material.dispose();this.reflPointsIntegrated=[]}clearBoundingBoxes(){for(var e=0;e<this.bboxMeshesIndexed.length;e++)for(var t=0;t<this.bboxMeshesIndexed[e].length;t++)window.scene.remove(this.bboxMeshesIndexed[e][t]),this.bboxMeshesIndexed[e][t].geometry.dispose(),this.bboxMeshesIndexed[e][t].material.dispose();this.bboxMeshesIndexed=[];for(var e=0;e<this.bboxMeshesUnindexed.length;e++)for(var t=0;t<this.bboxMeshesUnindexed[e].length;t++)window.scene.remove(this.bboxMeshesUnindexed[e][t]),this.bboxMeshesUnindexed[e][t].geometry.dispose(),this.bboxMeshesUnindexed[e][t].material.dispose();this.bboxMeshesUnindexed=[]}clearReflectionTable(){this.clearReflPointsObsIndexed(),this.clearReflPointsObsUnindexed(),this.clearReflPointsCal(),this.clearReflPointsIntegrated(),this.clearBoundingBoxes(),this.refl.clearReflectionTable(),this.calculatedIntegratedRefl.clearReflectionTable(),this.updateReflectionCheckboxEnabledStatus(),this.setDefaultReflectionsDisplay(),this.hideCloseReflButton(),this.requestRender()}clearCalculatedIntegratedReflectionTable(){this.clearReflPointsIntegrated(),this.calculatedIntegratedRefl.clearReflectionTable(),this.requestRender()}clearDebugPanelMeshes(){for(const e in this.debugPanelMeshes)window.scene.remove(this.debugPanelMeshes[e]),this.debugPanelMeshes[e].geometry.dispose(),this.debugPanelMeshes[e].material.dispose();for(const e in this.debugPanelThresholdMeshes)window.scene.remove(this.debugPanelThresholdMeshes[e]),this.debugPanelThresholdMeshes[e].geometry.dispose(),this.debugPanelThresholdMeshes[e].material.dispose();this.debugPanelMeshes={},this.debugPanelThresholdMeshes={}}showCloseReflButton(){this.closeReflButton.style.display="inline",this.closeReflButton.innerHTML="<b>"+this.refl.filename+' <i class="fa fa-trash"></i>'}hideCloseReflButton(){this.closeReflButton.style.display="none"}getBboxMesh(e,t,n,r,s,a,o){const c=n.mapPointToGlobal([e[0],e[2]],r,s,a,o),l=n.mapPointToGlobal([e[1],e[2]],r,s,a,o),h=n.mapPointToGlobal([e[1],e[3]],r,s,a,o),u=n.mapPointToGlobal([e[0],e[3]],r,s,a,o),d=[c,l,h,u,c],f=new nt().setFromPoints(d);return new ah(f,t)}addReflectionsFromJSONMsgpack(e){if(!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded"),this.clearReflectionTable();return}this.clearReflectionTable(),this.refl.parseReflectionTableFromJSONMsgpack(e);const t=this.refl.getPanelNumbers();t===null&&console.warn("Tried to add reflections but no data was parsed in refl file");const n=this.refl.getXYZObs(),r=this.refl.getXYZCal(),s=this.refl.getBoundingBoxes(),a=this.refl.getMillerIndices(),o=this.refl.getExperimentIDs(),c=this.refl.getFlags(),l={};var h=0;const u=new fo({color:this.colors.bbox}),d=[],f=[],g=[],_=[],m=[],p=[],S=[],w=[],y=[],b=[];for(let x=0;x<this.expt.numExperiments();x++)d.push([]),f.push([]),g.push([]),_.push([]),m.push([]),p.push([]),S.push([]),w.push([]),y.push([]),b.push([]);const T=new Set(t);let M={};for(const x of T)M[x]=this.expt.getDetectorPanelDataByIdx(0,x);for(let x=0;x<t.length;x++){const v=t[x];let A;if(o!==null?A=o[x]:A=0,n!==null){const F=n[x],O=this.mapPointToGlobal(F,M[v].origin,M[v].scaledFastAxis,M[v].scaledSlowAxis,M[v].pxSize);let V=null;s!==null&&(V=this.getBboxMesh(s[x],u,this,M[v].origin,M[v].scaledFastAxis,M[v].scaledSlowAxis,M[v].pxSize)),a!==null&&this.refl.isValidMillerIndex(a[x])?(g[A].push(O.x),g[A].push(O.y),g[A].push(O.z),V!==null&&y[A].push(V),l[h]=a[x],h++):(f[A].push(O.x),f[A].push(O.y),f[A].push(O.z),V!==null&&b[A].push(V)),V!==null&&window.scene.add(V)}if(r!==null){const F=r[x],O=this.mapPointToGlobal(F,M[v].origin,M[v].scaledFastAxis,M[v].scaledSlowAxis,M[v].pxSize);p[A].push(O.x),p[A].push(O.y),p[A].push(O.z),this.refl.isSummationIntegrated(c[x])&&(w[A].push(O.x),w[A].push(O.y),w[A].push(O.z))}}if(n!==null){if(a!==null){for(var C=0;C<g.length;C++){const x=new nt;x.setAttribute("position",new st(g[C],3));const v=new jt({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionObsIndexed}),A=new on(x,v);window.scene.add(A),_[C].push(A)}this.reflPointsObsIndexed=_,this.reflPositionsIndexed=g,this.bboxMeshesIndexed=y}for(var C=0;C<f.length;C++){const v=new nt;v.setAttribute("position",new st(f[C],3));const A=new jt({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionObsUnindexed[C%this.colors.reflectionObsUnindexed.length]}),F=new on(v,A);window.scene.add(F),d[C].push(F)}this.reflPointsObsUnindexed=d,this.reflPositionsUnindexed=f,this.bboxMeshesUnindexed=b}if(r!==null){for(var C=0;C<p.length;C++){const v=new nt;v.setAttribute("position",new st(p[C],3));const A=new jt({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionCal}),F=new on(v,A);window.scene.add(F),m[C].push(F)}if(this.reflPointsCal=m,this.reflPositionsCal=p,w.length!==0){for(var C=0;C<w.length;C++){const v=new nt;v.setAttribute("position",new st(w[C],3));const A=new jt({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionIntegrated}),F=new on(v,A);window.scene.add(F),S[C].push(F)}this.reflPointsIntegrated=S,this.reflPositionsIntegrated=w}}this.updateReflectionCheckboxEnabledStatus(),this.setDefaultReflectionsDisplay(),this.updateReflectionVisibility(),this.lastClickedPanelPosition!=null&&this.sendClickedPanelPosition(this.lastClickedPanelPosition.panelIdx,this.lastClickedPanelPosition.panelPos,this.lastClickedPanelPosition.name),this.refl.indexedMap=l,this.loading=!1,this.requestRender()}addCalculatedIntegratedReflectionsFromJSONMsgpack(e){if(!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded"),this.clearCalculatedIntegratedReflectionTable();return}this.clearCalculatedIntegratedReflectionTable(),this.calculatedIntegratedRefl.parseReflectionTableFromJSONMsgpack(e);const t=this.calculatedIntegratedRefl.getPanelNumbers();t===null&&console.warn("Tried to add reflections but no data was parsed in refl file");const n=[],r=[];for(var s=0;s<this.expt.numExperiments();s++)n.push([]),r.push([]);const a=this.calculatedIntegratedRefl.getXYZCal();this.calculatedIntegratedRefl.getMillerIndices();const o=this.calculatedIntegratedRefl.getExperimentIDs(),c=new Set(t);let l={};for(const u of c)l[u]=this.expt.getDetectorPanelDataByIdx(0,u);for(let u=0;u<t.length;u++){const d=t[u];let f;if(o!==null?f=o[u]:f=0,a!==null){const g=a[u],_=this.mapPointToGlobal(g,l[d].origin,l[d].scaledFastAxis,l[d].scaledSlowAxis,l[d].pxSize);r[f].push(_.x),r[f].push(_.y),r[f].push(_.z)}}if(r.length!==0){for(var h=0;h<r.length;h++){const u=new nt;u.setAttribute("position",new st(r[h],3));const d=new jt({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionIntegrated}),f=new on(u,d);window.scene.add(f),n[h].push(f)}this.reflPointsIntegrated=n,this.reflPositionsIntegrated=r}this.reflPointsIntegrated.length!==0&&(this.integratedReflsCheckbox.disabled=!1),this.updateReflectionVisibility(),this.lastClickedPanelPosition!=null&&this.sendClickedPanelPosition(this.lastClickedPanelPosition.panelIdx,this.lastClickedPanelPosition.panelPos,this.lastClickedPanelPosition.name),this.loading=!1,this.requestRender()}addCalculatedIntegratedReflectionsFromData(e){if(!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded"),this.clearReflectionTable();return}this.clearReflPointsIntegrated();const t=[],n=[];for(var r=0;r<this.expt.numExperiments();r++)t.push([]),n.push([]);const s=Object.keys(e),o="xyzCal"in e[s[0]][0];for(var r=0;r<s.length;r++){const u=parseInt(s[r]),d=e[s[r]];if(d===void 0)continue;const f=this.expt.getDetectorPanelDataByIdx(0,u),g=f.scaledFastAxis,_=f.scaledSlowAxis,m=f.origin,p=[f.pxSize.x,f.pxSize.y];for(var c=0;c<d.length;c++){const S=d[c].exptID;if(o){const w=d[c].xyzCal,y=this.mapPointToGlobal(w,m,g,_,p);n[S].push(y.x),n[S].push(y.y),n[S].push(y.z)}}}if(o&&n.length!==0){for(var l=0;l<n.length;l++){const h=new nt;h.setAttribute("position",new st(n[l],3));const u=new jt({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionIntegrated}),d=new on(h,u);window.scene.add(d),t[l].push(d)}this.reflPointsIntegrated=t,this.reflPositionsIntegrated=n}this.reflPointsIntegrated.length!==0&&(this.integratedReflsCheckbox.disabled=!1),this.updateReflectionVisibility(),this.lastClickedPanelPosition!=null&&this.sendClickedPanelPosition(this.lastClickedPanelPosition.panelIdx,this.lastClickedPanelPosition.panelPos,this.lastClickedPanelPosition.name),this.loading=!1,this.requestRender()}addReflections(){if(!this.hasReflectionTable()){console.warn("Tried to add reflections but no table has been loaded");return}if(!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded"),this.clearReflectionTable();return}const e=[],t=[],n=[],r=[],s=[],a=[],o=[];for(var c=0;c<this.expt.numExperiments();c++)e.push([]),t.push([]),n.push([]),r.push([]),a.push([]),o.push([]);const l=new fo({color:this.colors.bbox}),h=this.refl.containsXYZObs(),u=this.refl.containsXYZCal(),d=this.refl.containsMillerIndices();this.refl.containsBboxes();for(var c=0;c<this.expt.getNumDetectorPanels(0);c++){const m=this.refl.getReflectionsForPanel(c);if(m==null)continue;const p=this.expt.getDetectorPanelDataByIdx(0,c),S=p.scaledFastAxis,w=p.scaledSlowAxis,y=p.origin,b=[p.pxSize.x,p.pxSize.y];for(var f=0;f<m.length;f++){const T=m[f].exptID;if(h){const M=m[f].xyzObs,C=this.mapPointToGlobal(M,y,S,w,b),x=this.getBboxMesh(m[f].bbox,l,this,y,S,w,b);d&&m[f].indexed?(n[T].push(C.x),n[T].push(C.y),n[T].push(C.z),a[T].push(x)):(t[T].push(C.x),t[T].push(C.y),t[T].push(C.z),o[T].push(x)),window.scene.add(x)}if(u){const M=m[f].xyzCal,C=this.mapPointToGlobal(M,y,S,w,b);s.push(C.x),s.push(C.y),s.push(C.z)}}}if(h){if(d){for(var g=0;g<n.length;g++){const _=new nt;_.setAttribute("position",new st(n[g],3));const m=new jt({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionObsIndexed}),p=new on(_,m);window.scene.add(p),r[g].push(p)}this.reflPointsObsIndexed=r,this.reflPositionsIndexed=n,this.bboxMeshesIndexed=a}for(var g=0;g<t.length;g++){const m=new nt;m.setAttribute("position",new st(t[g],3));const p=new jt({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionObsUnindexed[g%this.colors.reflectionObsUnindexed.length]}),S=new on(m,p);window.scene.add(S),e[g].push(S)}this.reflPointsObsUnindexed=e,this.reflPositionsUnindexed=t,this.bboxMeshesUnindexed=o}if(u){const _=new nt;_.setAttribute("position",new st(s,3));const m=new jt({size:this.reflectionSize.value,transparent:!0,map:this.reflSprite,color:this.colors.reflectionCal}),p=new on(_,m);window.scene.add(p),this.reflPointsCal=[p],this.reflPositionsCal=s}this.updateReflectionCheckboxEnabledStatus(),this.setDefaultReflectionsDisplay(),this.loading=!1}highlightReflection(e,t=!0){const n=Qi.sizes().highlightBboxSize,r=e.panelPos;if("focusOnPanel"in e&&(t=e.focusOnPanel),t){const d=e.name;var s=this.panelMeshes[e.panelIdx];window.viewer.zoomInOnPanel(s,-1,d,r)}this.userReflection&&(this.userReflection.clear(),this.userReflection=null),this.highlightReflectionMesh&&(window.scene.remove(this.highlightReflectionMesh),this.highlightReflectionMesh.geometry.dispose(),this.highlightReflectionMesh.material.dispose(),this.highlightReflectionMesh=null);const a=this.expt.getDetectorPanelDataByIdx(0,e.panelIdx),o=64;let c=[];for(let d=0;d<=o;d++){const f=d/o*Math.PI*2;let g=[r[1]+Math.cos(f)*n,r[0]+Math.sin(f)*n];g=this.mapPointToGlobal(g,a.origin,a.scaledFastAxis,a.scaledSlowAxis,a.pxSize),c.push(g)}c.push(c[0]);const l=new Ps;c=c.map(d=>new D(d.x,d.y,d.z)),l.setPoints(c);const h=new Ds({lineWidth:3,color:this.colors.highlightBbox}),u=new Ct(l,h);window.scene.add(u),this.highlightReflectionMesh=u,this.requestRender()}mapPointToGlobal(e,t,n,r,s={x:1,y:1}){const a=t.clone();return a.add(n.clone().normalize().multiplyScalar(e[0]*s.x)),a.add(r.clone().normalize().multiplyScalar(e[1]*s.y)),a}setDefaultReflectionsDisplay(){if(!this.hasReflectionTable()){this.observedIndexedReflsCheckbox.checked=!1,this.observedUnindexedReflsCheckbox.checked=!1,this.calculatedReflsCheckbox.checked=!1,this.integratedReflsCheckbox.checked=!1,this.boundingBoxesCheckbox.checked=!1;return}this.reflPointsObsIndexed.length>0&&(this.observedIndexedReflsCheckbox.checked=!0),this.reflPointsObsUnindexed.length>0&&(this.observedUnindexedReflsCheckbox.checked=!0),this.updateBoundingBoxes(!1),this.boundingBoxesCheckbox.checked=!1}updateReflectionVisibility(){this.updateObservedIndexedReflections(),this.updateObservedUnindexedReflections(),this.updateCalculatedReflections(),this.updateIntegratedReflections()}updateReflectionCheckboxEnabledStatus(){if(!this.hasReflectionTable()){this.observedIndexedReflsCheckbox.disabled=!0,this.observedUnindexedReflsCheckbox.disabled=!0,this.calculatedReflsCheckbox.disabled=!0,this.integratedReflsCheckbox.disabled=!0,this.boundingBoxesCheckbox.disabled=!0;return}this.observedUnindexedReflsCheckbox.disabled=!this.refl.containsXYZObs(),this.observedIndexedReflsCheckbox.disabled=!this.refl.containsMillerIndices(),this.calculatedReflsCheckbox.disabled=!this.refl.containsXYZCal(),this.integratedReflsCheckbox.disabled=this.integrationDataEmpty(),this.boundingBoxesCheckbox.disabled=!this.refl.containsBoundingBoxes()}integrationDataEmpty(){return this.reflPositionsIntegrated.every(function(e){return e.length===0})}updatePanelTextures(){if(Object.keys(this.allPanelMeshes).length!==0&&this.visibleExptID!==void 0){for(const e of Object.keys(this.allPanelMeshes[this.visibleExptID])){const t=this.getPanelTexture(e,this.visibleExptID);this.allPanelMeshes[this.visibleExptID][e].material.map=t,this.allPanelMeshes[this.visibleExptID][e].material.map.needsUpdate=!0}if(this.requestRender(),Object.keys(this.allPanelMeshes).length!==1){for(const e of Object.keys(this.allPanelMeshes))if(parseInt(e)!==this.visibleExptID)for(let t=0;t<this.allPanelMeshes[e].length;t++){const n=this.getPanelTexture(t,e);this.allPanelMeshes[e][t].material.map=n,this.allPanelMeshes[e][t].material.map.needsUpdate=!0}this.requestRender()}}}gammaContrast(e,t){const n=1/(t*2);return Math.pow(e,n)}logarithmicContrast(e,t){return Math.log(1+e*t)/Math.log(1+t)}exponentialContrast(e,t){return(Math.exp(e*t)-1)/(Math.exp(t)-1)}getContrast(e,t){switch(this.contrastMethod){case"exponential":return this.exponentialContrast(e,t);case"logarithmic":return this.logarithmicContrast(e,t);case"gamma":return this.gammaContrast(e,t)}}getPanelTexture(e,t,n=null){n==null&&(n=this.expt.experiments[t].imageData[e]);let r=this.expt.getDetectorPanelSize(t,e);n[0].length!==r[0]&&(r=(r[1],r[0]));var s=document.createElement("canvas");s.width=n[0].length,s.height=n.length;var a=s.getContext("2d");a.fillRect(0,0,s.width,s.height);const o=a.getImageData(0,0,s.width,s.height),c=o.data;for(var l=0,h=0;h<n.length;h++)for(var u=0;u<n[0].length;u++){let f=this.getContrast(n[h][u],this.userContrast.value)*255;f=Math.min(255,Math.max(0,f)),c[l]=f,c[l+1]=f,c[l+2]=f,c[l+3]=255,l+=4}a.putImageData(o,0,0);var d=new Bt(s);return d.needsUpdate=!0,d}clearDetectorMesh(e,t){t===this.visibleExptID&&e in this.panelMeshes&&(window.scene.remove(this.panelMeshes[e]),this.panelMeshes[e].geometry.dispose(),this.panelMeshes[e].material.dispose(),delete this.panelMeshes[e]),t in this.allPanelMeshes&&e in this.allPanelMeshes[t]&&(window.scene.remove(this.allPanelMeshes[t][e]),this.allPanelMeshes[t][e].geometry.dispose(),this.allPanelMeshes[t][e].material.dispose(),delete this.allPanelMeshes[t][e]),this.requestRender()}toggleDebugMode(e){e===!0?this.debugImageMode===!1&&this.debugThresholdMode==!1&&(this.debugImageMode=!0):(this.debugImageMode=!1,this.debugThresholdMode=!1),this.updatePanelMeshes()}setDebugToImage(){this.debugImageMode=!0,this.debugThresholdMode=!1,this.updatePanelMeshes()}setDebugToThreshold(){this.debugImageMode=!1,this.debugThresholdMode=!0,this.updatePanelMeshes()}addPanelImageData(e,t,n){this.expt.parseImageData(e,t,n),this.clearDetectorMesh(t,n),this.addDetectorMesh(t,n),this.updatePanelMeshes()}addExptImageData(e,t){this.expt.parseExptImageData(e,t);for(let n=0;n<e.length;n++)this.clearDetectorMesh(n,t),this.addDetectorMesh(n,t);this.updatePanelMeshes()}addDebugImageData(e,t){this.clearDebugPanelMeshes();for(let n=0;n<e.length;n++){const r=Fi.decompressImageData(e[n]),s=Fi.decompressImageData(t[n]);this.addDebugDetectorMesh(n,r,s)}this.updatePanelMeshes()}addDebugDetectorMesh(e,t,n){const r=this.expt.getDetectorPanelSize(0,e),s=new as(r[1],r[0]);var a,o,c=new Float32Array([0,0,1,0,1,1,0,1]);s.setAttribute("uvs",new bt(c,2));const l=this.getPanelTexture(e,0,t),h=this.getPanelTexture(e,0,n);a=new Vr({map:l}),o=new Vr({map:h});const u=new Ct(s,a);var d=this.expt.getDetectorPanelName(0,e);u.name=d;const f=new Ct(s,o);f.name=d;var g=this.expt.getDetectorPanelCorners(0,e),_=[1,2,0,3],m=this.expt.getDetectorPanelNormal(0,e),p=g[0].clone();p.add(g[1].clone()),p.add(g[2].clone()),p.add(g[3].clone()),p.divideScalar(4).normalize(),p.dot(m)<0&&(_=[0,3,1,2]);const S=1.01;for(var w=0,y=0;y<12;y+=3)u.geometry.attributes.position.array[y]=g[_[w]].x*S,u.geometry.attributes.position.array[y+1]=g[_[w]].y*S,u.geometry.attributes.position.array[y+2]=g[_[w]].z*S,w++;u.userData.corners=[new D(u.geometry.attributes.position.array[0],u.geometry.attributes.position.array[1],u.geometry.attributes.position.array[2]),new D(u.geometry.attributes.position.array[3],u.geometry.attributes.position.array[4],u.geometry.attributes.position.array[5]),new D(u.geometry.attributes.position.array[6],u.geometry.attributes.position.array[7],u.geometry.attributes.position.array[8]),new D(u.geometry.attributes.position.array[9],u.geometry.attributes.position.array[10],u.geometry.attributes.position.array[11])],w=0;for(var y=0;y<12;y+=3)f.geometry.attributes.position.array[y]=g[_[w]].x*S,f.geometry.attributes.position.array[y+1]=g[_[w]].y*S,f.geometry.attributes.position.array[y+2]=g[_[w]].z*S,w++;f.userData.corners=[new D(f.geometry.attributes.position.array[0],f.geometry.attributes.position.array[1],f.geometry.attributes.position.array[2]),new D(f.geometry.attributes.position.array[3],f.geometry.attributes.position.array[4],f.geometry.attributes.position.array[5]),new D(f.geometry.attributes.position.array[6],f.geometry.attributes.position.array[7],f.geometry.attributes.position.array[8]),new D(f.geometry.attributes.position.array[9],f.geometry.attributes.position.array[10],f.geometry.attributes.position.array[11])],window.scene.add(u),window.scene.add(f),this.debugPanelMeshes[e]=u,this.debugPanelThresholdMeshes[e]=f,this.requestRender()}addDetectorMesh(e,t){const n=this.expt.getDetectorPanelSize(t,e),r=new as(n[1],n[0]);var s;if(this.isStandalone)s=new V_({color:this.colors.panel,opacity:.25,transparent:!0,depthWrite:!1});else{var a=new Float32Array([0,0,1,0,1,1,0,1]);r.setAttribute("uvs",new bt(a,2));const m=this.getPanelTexture(e,t);s=new Vr({map:m})}const o=new Ct(r,s);var c=this.expt.getDetectorPanelName(t,e);o.name=c;var l=this.expt.getDetectorPanelCorners(t,e),h=[1,2,0,3],u=this.expt.getDetectorPanelNormal(t,e),d=l[0].clone();d.add(l[1].clone()),d.add(l[2].clone()),d.add(l[3].clone()),d.divideScalar(4).normalize(),d.dot(u)<0&&(h=[0,3,1,2]);const f=1.01;for(var g=0,_=0;_<12;_+=3)o.geometry.attributes.position.array[_]=l[h[g]].x*f,o.geometry.attributes.position.array[_+1]=l[h[g]].y*f,o.geometry.attributes.position.array[_+2]=l[h[g]].z*f,g++;o.userData.corners=[new D(o.geometry.attributes.position.array[0],o.geometry.attributes.position.array[1],o.geometry.attributes.position.array[2]),new D(o.geometry.attributes.position.array[3],o.geometry.attributes.position.array[4],o.geometry.attributes.position.array[5]),new D(o.geometry.attributes.position.array[6],o.geometry.attributes.position.array[7],o.geometry.attributes.position.array[8]),new D(o.geometry.attributes.position.array[9],o.geometry.attributes.position.array[10],o.geometry.attributes.position.array[11])],window.scene.add(o),t in this.allPanelMeshes||(this.allPanelMeshes[t]={}),this.allPanelMeshes[t][e]=o,this.requestRender()}addDetectorPanel(e,t,n=!0){var r=this.expt.getDetectorPanelName(t,e);if(r in this.panelOutlineMeshes)return;var s=this.expt.getDetectorPanelCorners(t,e);s.push(s[0]),s=s.map(u=>new D(u.x,u.y,u.z));var a=this.expt.getDetectorPanelNormal(t,e),o=s[0].clone();o.add(s[1].clone()),o.add(s[2].clone()),o.add(s[3].clone()),o.divideScalar(4).normalize(),o.dot(a)<0;const c=new Ps;c.setPoints(s);const l=new Ds({lineWidth:8,color:this.colors.panel,transparent:!0,opacity:.3}),h=new Ct(c,l);this.panelOutlineMeshes[r]=h,window.scene.add(h),n&&this.addDetectorMesh(e,t)}addBeam(){var e=800,t=this.expt.getBeamDirection(0),n=[];n.push(new D(t.x*-800,t.y*-800,t.z*-800)),n.push(new D(t.x*-800*.5,t.y*-800*.5,t.z*-800*.5)),n.push(new D(0,0,0));const r=new Ps;r.setPoints(n);const s=new Ds({lineWidth:5,color:this.colors.beam,transparent:!0,opacity:0,depthWrite:!1}),a=new Ct(r,s);a.raycast=pf,this.beamMeshes.push(a),window.scene.add(a);var o=[];o.push(new D(0,0,0)),o.push(new D(t.x*e*.5,t.y*e*.5,t.z*e*.5)),o.push(new D(t.x*e,t.y*e,t.z*e));const c=new Ps;c.setPoints(o);const l=new Ds({lineWidth:5,color:this.colors.beam,transparent:!0,opacity:.25,depthWrite:!1}),h=new Ct(c,l);h.raycast=pf,this.beamMeshes.push(h),window.scene.add(h)}addSample(){const e=new oh(5),t=new Vr({color:this.colors.sample,transparent:!0,depthWrite:!1}),n=new Ct(e,t);n.name="sample",this.sampleMesh=n,window.scene.add(n)}addAxes(){function e(a,o,c){const l=new Ps;l.setPoints(o);const h=new Ds({lineWidth:5,color:c,transparent:!0,opacity:.5,depthWrite:!1}),u=new Ct(l,h);a.axesMeshes.push(u),window.scene.add(u)}const t=200;this.axesMeshes=[];const n=[new D(0,0,0),new D(t,0,0)],r=[new D(0,0,0),new D(0,t,0)],s=[new D(0,0,0),new D(0,0,t)];e(this,n,this.colors.axes[0]),e(this,r,this.colors.axes[1]),e(this,s,this.colors.axes[2])}setCameraSmooth(e,t){Ns.to(window.camera.position,{duration:1,x:e.x,y:e.y,z:e.z,onUpdate:()=>{window.camera.lookAt(window.controls.target),window.viewer.requestRender()}});const n=window.controls.target.clone();Ns.to(n,{duration:1,x:t.x,y:t.y,z:t.z,onUpdate:()=>{window.controls.target.set(n.x,n.y,n.z),window.camera.lookAt(window.controls.target),window.viewer.requestRender()},onComplete:()=>{window.controls.update()}})}setCameraToDefaultPosition(){const{position:e,target:t}=Qi.cameraPositions().default;this.setCameraSmooth(e,t)}setCameraToDefaultPositionWithExperiment(){const{position:e,target:t}=Qi.cameraPositions().defaultWithExperiment;this.setCameraSmooth(e,t),this.panelFocusAxes=null}displayHeaderText(e){this.showHeaderText(),this.headerText.innerHTML=e}appendHeaderText(e){this.headerText.innerHTML+=e}hideHeaderText(){this.headerText.style.display="none"}showHeaderText(){this.headerText.style.display="block"}displayFooterText(e){this.showFooterText(),this.footerText.textContent=e}hideFooterText(){this.footerText.style.display="none"}showFooterText(){this.footerText.style.display="block"}displayDefaultHeaderText(){this.hasExperiment()||!this.isStandalone?this.hideHeaderText():this.displayHeaderText(Qi.text().default)}displayImageFilenames(){this.displayHeaderText(this.expt.getImageFilenames(0)),this.displayingTextFromHTMLEvent=!0}displayNumberOfReflections(){this.displayHeaderText(this.refl.numReflections+" reflections"),this.displayingTextFromHTMLEvent=!0}stopDisplayingText(){this.displayingTextFromHTMLEvent=!1}highlightObject(e){e.material.color=new Ue(this.colors.highlight),e.material.opacity=.8}beamHidden(){return this.beamMeshes.length===0?!0:this.beamMeshes[0].material.opacity<.01}sampleHidden(){return this.sampleMesh===null?!0:this.sampleMesh.material.opacity<.01}onLeftClick(){if(this.isStandalone||this.preventMouseClick)return;if(this.creatingReflection&&!this.drawingReflection){window.viewer.disableReflectionCreation();return}const e=window.rayCaster.intersectObjects(Object.values(this.panelMeshes));if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),e.length>0){const t=e[0].object.name,n=this.expt.getDetectorPanelIdxByName(0,t),r=this.getPanelPosition(e[0].point,t);this.sendClickedPanelPosition(n,r,t),this.highlightReflection({panelIdx:n,panelPos:r},!1)}}disableMouseClick(){this.preventMouseClick=!0}enableMouseClick(){this.preventMouseClick=!1}showLoadingImagesMsg(){this.displayHeaderText("Loading images..."),this.loading=!0}showLoadingReflectionMsg(){this.displayHeaderText("Loading reflection..."),this.loading=!0}updateGUIInfo(){function e(s){const a=window.rayCaster.intersectObjects(Object.values(s.panelMeshes));if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),a.length>0){const o=a[0].object.name;s.displayHeaderText(o+" ["+s.getPanelPositionAsString(a[0].point,o)+"]"),s.highlightObject(s.panelOutlineMeshes[o])}}function t(s){if(s.observedIndexedReflsCheckbox.checked)for(var a=0;a<s.reflPointsObsIndexed.length;a++){const c=window.rayCaster.intersectObjects(s.reflPointsObsIndexed[a]);if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),c.length>0)for(var o=0;o<c.length;o++){const l=s.refl.getMillerIndexById(c[o].index);s.appendHeaderText(" ("+l[0]+", "+l[1]+", "+l[2]+")")}}}function n(s){if(s.beamHidden())return;const a=window.rayCaster.intersectObjects(s.beamMeshes);if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),a.length>0){const o="<b>beam: </b>"+s.expt.getBeamSummary(0);s.displayHeaderText(o)}}function r(s){if(s.sampleHidden()||s.expt.getCrystalSummary(0)==null)return;const a=window.rayCaster.intersectObjects([s.sampleMesh]);if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),a.length>0){const o="<b>crystal: </b>"+s.expt.getCrystalSummary(0);s.displayHeaderText(o)}}this.displayingTextFromHTMLEvent||this.cursorActive&&(this.loading||(this.displayDefaultHeaderText(),e(this),t(this),n(this),r(this)))}getPanelPosition(e,t){const n=this.expt.getDetectorPanelDataByName(0,t),r=n.origin.clone().sub(e),s=n.fastAxis,a=n.slowAxis,o=(r.x*s.x+r.y*s.y+r.z*s.z)/n.pxSize.x,c=(r.x*a.x+r.y*a.y+r.z*a.z)/n.pxSize.y;return[Math.floor(-c),Math.floor(-o)]}getPanelPositionAsString(e,t){const[n,r]=this.getPanelPosition(e,t);return n+", "+r}getPanelCentroid(e){return this.expt.getDetectorPanelCentroidByName(0,e)}resetPanelColors(){for(var e in this.panelOutlineMeshes)this.panelOutlineMeshes[e].material.color=this.panelColor,this.panelOutlineMeshes[e].material.opacity=.3}updateOriginObjectsOpacity(){if(!this.hasExperiment())return;const e=55e3,t=1e6,n=window.camera.position;var s=(Math.pow(n.x,2)+Math.pow(n.y,2)+Math.pow(n.z,2)-e)/(t-e);s=Math.min(1,Math.max(s,0)),this.beamMeshes[0].material.opacity=s*.25,this.beamMeshes[1].material.opacity=s,this.sampleMesh.material.opacity=s;for(var a=0;a<this.axesMeshes.length;a++)this.axesMeshes[a].material.opacity=s*.5}getClickedPanelPos(){window.rayCaster.setFromCamera(window.mousePosition,window.camera);const e=rayCaster.intersectObjects(Object.values(this.panelMeshes));if(e.length>0)return e[0].point}getClickedPanelCentroid(){window.rayCaster.setFromCamera(window.mousePosition,window.camera);const e=rayCaster.intersectObjects(Object.values(this.panelMeshes));if(e.length>0)return window.viewer.getPanelCentroid(e[0].object.name)}getClickedPanelMesh(){window.rayCaster.setFromCamera(window.mousePosition,window.camera);const e=rayCaster.intersectObjects(Object.values(this.panelMeshes));if(e.length>0)return e[0].object}rotateToPos(e){Ns.to(window.camera.position,{duration:1,x:-e.x,y:-e.y,z:-e.z,onUpdate:function(){window.camera.lookAt(e),window.viewer.requestRender()}})}zoomInOnPanel(e,t=-1,n=null,r=null){const s=new ms().setFromObject(e),a=s.getSize(new D),o=s.getCenter(new D),c=e.userData.corners;if(!c||c.length<4){console.error("Panel corners are not properly defined.");return}const l=new D().subVectors(c[1],c[0]),h=new D().subVectors(c[3],c[0]),u=new D().subVectors(c[2],c[0]),d=new D().crossVectors(l,h).normalize(),f=u.clone().normalize(),g=l.clone().normalize(),_=d;window.viewer.panelFocusAxes={panelX:f,panelY:g,panelNormal:_,center:o};const p=Math.max(a.x,a.y,a.z)/(2*Math.atan(Math.PI*window.camera.fov/360)),S=p/window.camera.aspect,w=t*Math.max(p,S),y=o.clone().add(d.clone().multiplyScalar(w));Ns.to(window.camera.position,{duration:1,x:y.x,y:y.y,z:y.z,onUpdate:()=>{window.camera.lookAt(o),window.viewer.requestRender()},onComplete:()=>{n&&r&&window.viewer.displayHeaderText(`${n} [${r[0]}, ${r[1]}]`)}}),window.controls.target.copy(o),window.controls.update()}toggleExperimentList(){document.getElementById("experimentDropdown").classList.toggle("show");var e=document.getElementById("dropdownIcon");e.classList.toggle("fa-chevron-down"),e.classList.toggle("fa-chevron-right")}selectExpt(e){if(this.visibleExptID!==e){this.visibleExptID=e;for(var t=0;t<this.expt.numExperiments();t++)if(t!==e){var n=document.getElementById("exptID-dropdown-icon-"+t.toString());n.classList.contains("fa-check")&&n.classList.toggle("fa-check")}dropdownIcon.classList.toggle("fa-check"),this.updatePanelMeshes(),this.updateObservedIndexedReflections(),this.updateObservedUnindexedReflections(),this.updateCalculatedReflections(),this.updateIntegratedReflections(),this.updateBoundingBoxes()}}toggleExptVisibility(e){var t=parseInt(e.split("-").pop()),n=document.getElementById("exptID-dropdown-icon-"+t.toString());n.classList.contains("fa-check")?this.visibleExptID=-1:(this.visibleExptID=t,this.serverWS.send(JSON.stringify({channel:"server",command:"update_experiment_description",expt_id:t,in_debug_mode:this.debugImageMode||this.debugThresholdMode})));for(var r=0;r<this.expt.numExperiments();r++)if(r!==t){var s=document.getElementById("exptID-dropdown-icon-"+r.toString());s.classList.contains("fa-check")&&s.classList.toggle("fa-check")}n.classList.toggle("fa-check"),this.updatePanelMeshes(),this.updateObservedIndexedReflections(),this.updateObservedUnindexedReflections(),this.updateCalculatedReflections(),this.updateIntegratedReflections(),this.updateBoundingBoxes()}clearExperimentList(){var e=document.getElementById("experimentDropdown");e!==null&&(e.innerHTML="")}updateExperimentList(){var e=22,t=this.expt.getExptIDs(),n=this.expt.getExptLabels(),r=document.getElementById("experimentDropdown");r.innerHTML="";for(var s=0;s<t.length;s++){var a=document.createElement("label");a.classList.add("experiment-label");var o="#"+this.colors.reflectionObsUnindexed[t[s]%this.colors.reflectionObsUnindexed.length].toString(16).padStart(6,"0");a.style.color=o;var c=document.createElement("i");c.classList.add("fa","fa-check"),c.style.float="right",c.id="exptID-dropdown-icon-"+t[s],s!==0&&c.classList.toggle("fa-check");var l=n[s];l.length>e&&(l=l.slice(0,19)+"..."),a.textContent=l,a.id="exptID-"+t[s],a.appendChild(c),a.addEventListener("click",u=>{this.toggleExptVisibility(u.target.id)}),r.appendChild(a),r.appendChild(document.createElement("br"))}}enableReflectionCreation(){if(this.preventMouseClick)return;const e=window.rayCaster.intersectObjects(Object.values(this.panelMeshes));if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),e.length===0)return;this.userReflection&&(this.userReflection.clearLineMesh(),this.userReflection.clearBboxMesh(),this.userReflection=null),window.controls.enabled=!1,this.creatingReflection=!0,this.drawingReflection=!0;const t=e[0].object.name;this.expt.getDetectorPanelIdxByName(0,t),this.userReflection=new pE(e[0].point,t,this.colors.createNewReflectionBbox)}onEndDrawingReflection(){window.viewer.drawingReflection=!1,this.highlightReflectionMesh&&(window.scene.remove(this.highlightReflectionMesh),this.highlightReflectionMesh.geometry.dispose(),this.highlightReflectionMesh.material.dispose(),this.highlightReflectionMesh=null);for(var e=[],t=0;t<this.userReflection.positions.length;t++)e.push(this.getPanelPosition(this.userReflection.positions[t],this.userReflection.panelName));const n=e.map(f=>f[0]),r=e.map(f=>f[1]),s=Math.min(...n),a=Math.max(...n),o=Math.min(...r),c=Math.max(...r),l=[o,c,a,s],h=this.expt.getDetectorPanelIdxByName(0,this.userReflection.panelName),u=this.expt.getDetectorPanelDataByName(0,this.userReflection.panelName),d=this.getBboxMesh(l,this.userReflection.lineMaterial,this,u.origin,u.scaledFastAxis,u.scaledSlowAxis,[u.pxSize.x,u.pxSize.y]);this.userReflection.addBboxMesh(d),this.serverWS.send(JSON.stringify({channel:"server",command:"new_reflection_xy",panel_idx:h,expt_id:this.visibleExptID,bbox:l,panel_name:this.userReflection.panelName}))}disableReflectionCreation(){window.controls.enabled=!0,this.creatingReflection=!1,this.userReflection&&(this.userReflection.clear(),this.userReflection=null),this.serverWS.send(JSON.stringify({channel:"server",command:"cancel_new_reflection"}))}updateNewReflection(){const e=window.rayCaster.intersectObjects(Object.values(this.panelMeshes));window.rayCaster.setFromCamera(window.mousePosition,window.camera),e.length!==0&&this.userReflection&&this.userReflection.updateUserOutline(e[0].point)}animate(){this.renderRequested&&(this.drawingReflection&&this.updateNewReflection(),window.viewer.resetPanelColors(),window.viewer.updateOriginObjectsOpacity(),window.viewer.updateGUIInfo(),window.renderer.render(window.scene,window.camera),this.renderRequested=!1,window.viewer.enableMouseClick())}requestRender(){typeof window<"u"&&!this.renderRequested&&(this.renderRequested=!0,window.requestAnimationFrame(this.animate.bind(this)))}}function mE(){typeof window.viewer>"u"||(window.renderer=new Oy,window.renderer.setClearColor(window.viewer.colors.background),window.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(window.renderer.domElement),window.scene=new k_,window.scene.fog=new sh(window.viewer.colors.background,500,3e3),window.camera=new Mn(45,window.innerWidth/window.innerHeight,.1,1e4),window.renderer.render(window.scene,window.camera),window.rayCaster=new K_,window.controls=new Fy(window.camera,window.renderer.domElement),window.controls.mouseButtons.MIDDLE=ar.NONE,window.controls.maxDistance=3e3,window.controls.enablePan=!1,window.controls.update(),window.controls.addEventListener("change",function(){window.viewer.requestRender()}),window.mousePosition=new Ee,window.addEventListener("mousemove",function(i){if(window.mousePosition.x=i.clientX/window.innerWidth*2-1,window.mousePosition.y=-(i.clientY/window.innerHeight)*2+1,window.viewer.requestRender(),window.viewer.isPanning&&this.window.viewer.panelFocusAxes!==null){const{panelX:e,panelY:t,panelNormal:n,center:r}=window.viewer.panelFocusAxes,s=i.clientX-window.viewer.startMousePosition.x,a=i.clientY-window.viewer.startMousePosition.y,o=.5,c=e.clone().multiplyScalar(s*o),l=t.clone().multiplyScalar(-a*o);window.camera.position.add(c).add(l),window.controls.target.add(c).add(l),window.viewer.startMousePosition.x=i.clientX,window.viewer.startMousePosition.y=i.clientY}}),window.renderer.domElement.addEventListener("mouseup",i=>{i.button===1&&(window.viewer.isPanning=!1)}),window.renderer.domElement.addEventListener("mouseleave",()=>{window.viewer.isPanning=!1}),window.addEventListener("resize",function(){window.camera.aspect=window.innerWidth/window.innerHeight,window.camera.updateProjectionMatrix(),window.renderer.setSize(window.innerWidth,window.innerHeight),window.viewer.requestRender()}),window.addEventListener("dragstart",i=>{dragged=i.target}),window.addEventListener("dragover",i=>{i.preventDefault()}),window.addEventListener("drop",function(i){i.preventDefault(),i.stopPropagation();const e=i.dataTransfer.files[0],t=e.name.split(".").pop();t=="refl"&&window.viewer.isStandalone?window.viewer.addReflectionTable(e):t=="expt"&&window.viewer.isStandalone&&window.viewer.addExperiment(e)}),window.addEventListener("dblclick",function(i){var e=window.viewer.getClickedPanelMesh();e&&window.viewer.zoomInOnPanel(e)}),window.addEventListener("click",function(i){i.button===0&&(i.altKey&&window.viewer.drawingReflection?window.viewer.onEndDrawingReflection():window.viewer.onLeftClick())}),window.addEventListener("mousedown",function(i){i.button===0&&i.altKey&&window.viewer.enableReflectionCreation(),i.button==2&&window.viewer.setCameraToDefaultPositionWithExperiment(),i.button===1&&(window.viewer.isPanning=!0,window.viewer.startMousePosition.x=i.clientX,window.viewer.startMousePosition.y=i.clientY)}),window.addEventListener("mouseout",function(i){this.window.viewer.cursorActive=!1}),window.addEventListener("mouseover",function(i){this.window.viewer.cursorActive=!0}),window.addEventListener("keydown",function(i){i.key==="s"&&window.viewer.toggleSidebar()}),window.viewer.addAxes(),window.viewer.updateAxes(!1),window.viewer.setCameraToDefaultPosition(),window.viewer.requestRender())}class id{constructor(){di(this,"parseReflectionTableFromMsgpackFile",e=>{const t=new FileReader;return new Promise((n,r)=>{t.onerror=()=>{t.abort(),r(new DOMException("Problem parsing input file."))},t.onloadend=()=>{n(t.result);const s=Xs.deserialize(new Uint8Array(t.result));this.refl=s[2].data},t.readAsArrayBuffer(e),this.filename=e.name})});di(this,"parseReflectionTableFromMsgpack",e=>{const t=Xs.deserialize(new Uint8Array(e));this.refl=t[2].data,this.rawReflData=e});di(this,"parseReflectionTableFromJSONMsgpack",e=>{const t=Uint8Array.from(atob(e),r=>r.charCodeAt(0)),n=Xs.decode(t);this.refl=n[2].data,this.rawReflData=e});this.refl=null,this.indexedMap={},this.unindexedMap={},this.filename=null,this.rawReflData=null}hasReflTable(){return this.refl!=null}clearReflectionTable(){this.refl=null,this.rawReflData=null,this.indexedMap={},this.unindexedMap={},this.filename=null}containsColumn(e){return e in this.refl}getColumnBuffer(e){return this.refl[e][1][1]}getUint32Array(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new DataView(t.buffer),r=new Uint32Array(t.byteLength/8);let s=0;for(let a=0;a<t.byteLength;a+=8)r[s]=n.getUint32(t.byteOffset+a,!0),s++;return r}getInt32Array(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new DataView(t.buffer),r=new Int32Array(t.byteLength/4);let s=0;for(let a=0;a<t.byteLength;a+=4)r[s]=n.getInt32(t.byteOffset+a,!0),s++;return r}getDoubleArray(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new DataView(t.buffer),r=new Float64Array(t.length/8);let s=0;for(let a=0;a<t.byteLength;a+=8)r[s]=n.getFloat64(t.byteOffset+a,!0),s++;return r}getVec3DoubleArray(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new DataView(t.buffer),r=new Array(t.length/(8*3));let s=0;for(let a=0;a<t.byteLength;a+=24){const o=new Float64Array(3);o[0]=n.getFloat64(t.byteOffset+a,!0),o[1]=n.getFloat64(t.byteOffset+a+8,!0),o[2]=n.getFloat64(t.byteOffset+a+16,!0),r[s]=o,s++}return r}getVec6Int32Array(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new Array(t.length/(6*4)),r=new DataView(t.buffer);let s=0;for(let a=0;a<t.length;a+=24){const o=new Int32Array(6);o[0]=r.getInt32(t.byteOffset+a,!0),o[1]=r.getInt32(t.byteOffset+a+4,!0),o[2]=r.getInt32(t.byteOffset+a+8,!0),o[3]=r.getInt32(t.byteOffset+a+12,!0),o[4]=r.getInt32(t.byteOffset+a+16,!0),o[5]=r.getInt32(t.byteOffset+a+20,!0),n[s]=o,s++}return n}getVec3Int32Array(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new Array(t.length/(3*4)),r=new DataView(t.buffer);let s=0;for(let a=0;a<t.length;a+=12){const o=new Int32Array(3);o[0]=r.getInt32(t.byteOffset+a,!0),o[1]=r.getInt32(t.byteOffset+a+4,!0),o[2]=r.getInt32(t.byteOffset+a+8,!0),n[s]=o,s++}return n}getPanelNumbers(){return this.getUint32Array("panel")}getFlags(){return this.getUint32Array("flags")}isSummationIntegrated(e){return(e&256)===256}isPrfIntegrated(e){return(e&512)===512}isIndexed(e){return(e&4)===4}isObserved(e){return(e&2)===2}isPredicted(e){return(e&1)===1}getXYZObs(){return this.getVec3DoubleArray("xyzobs.px.value")}containsXYZObs(){return this.containsColumn("xyzobs.px.value")}getXYZObsMm(){return this.getVec3DoubleArray("xyzobs.mm.value")}containsXYZObsMm(){return this.containsColumn("xyzobs.mm.value")}getCrystalIDs(){return this.getInt32Array("crystal_id")}getWavelengths(){return this.getDoubleArray("wavelength")}containsWavelengths(){return this.containsColumn("wavelength")}getCalculatedWavelengths(){return this.getDoubleArray("wavelength_cal")}containsCalculatedWavelengths(){return this.containsColumn("wavelength_cal")}getXYZCal(){return this.getVec3DoubleArray("xyzcal.px")}containsXYZCal(){return this.containsColumn("xyzcal.px")}getXYZCalMm(){return this.getVec3DoubleArray("xyzcal.mm")}containsXYZCalMm(){return this.containsColumn("xyzcal.mm")}containsSummationIntensities(){return this.containsColumn("intensity.sum.value")}containsProfileIntensities(){return this.containsColumn("intensity.prf.value")}containsBoundingBoxes(){return this.containsColumn("bbox")}getBoundingBoxes(){return this.getVec6Int32Array("bbox")}containsMillerIndices(){return this.containsColumn("miller_index")}getMillerIndices(){return this.getVec3Int32Array("miller_index")}isValidMillerIndex(e){return Math.abs(e[0])+Math.abs(e[1])+Math.abs(e[2])>0}containsExperimentIDs(){return this.containsColumn("id")}getExperimentIDs(){return this.getInt32Array("id")}getImagesetIDs(){return this.getInt32Array("imageset_id")}getMillerIndexById(e){return this.indexedMap[e]}}function _E(i){return"channel"in i&&i.channel=="experiment_viewer"}const gE="ws://127.0.0.1:50010/",xE={background:133143,sample:16643811,reflectionObsUnindexed:[9894267,7715837,12548086,1305289,16756860,16765407,13696766,16777092,16777215,16749576,129478,11468140,16646146,10030923,7918006,16775447,16713609,13959167,6936655,5680727],reflectionObsIndexed:15158332,reflectionCal:16755370,reflectionIntegrated:16761436,panel:6127001,highlight:16777215,beam:16777215,bbox:16777215,axes:[16755370,11206570,11184895],highlightBbox:1305289,createNewReflectionBbox:16756860};window.onload=function(){window.viewer=new Qi(new Fi,new id,new id,!1,xE),window.viewer.serverWS=new WebSocket(gE),window.viewer.serverWS.binaryType="arraybuffer",window.viewer.serverWS.onopen=()=>{console.log("Experiment viewer opened Connection to server"),window.viewer.serverWS.send(JSON.stringify({channel:"server",command:"record_connection",id:"experiment_viewer"}))},window.viewer.serverWS.onclose=()=>{console.log("Experiment viewer closed Connection to server")},window.viewer.serverWS.onmessage=i=>{let e=i.data;if(console.log("msg received",e),e instanceof ArrayBuffer){const r=new Uint8Array(e);try{const s=Xs.decode(r);let a=s.command;switch(a){case"add_panel_image_data":window.viewer.addPanelImageData(s.image_data,s.panel_idx,s.expt_id);break;case"add_expt_image_data":window.viewer.addExptImageData(s.image_data,s.expt_id);break;case"add_debug_panel_image_data":window.viewer.addDebugPanelImageData(s.image_data,s.mask_data,s.panel_idx,s.expt_id);break;case"add_debug_image_data":window.viewer.addDebugImageData(s.image_data,s.mask_data);break;default:console.warn("Unrecognised Msgpack command ",a)}return}catch(s){console.error("Invalid Msgpack",s);return}}const t=JSON.parse(i.data);if(!_E(t))return;const n=t.command;switch(n){case"update_experiment":console.assert("expt"in t,"expt not found when calling update_experiment");const r=t.expt;console.assert(Fi.isExptJSON(r),"expt is not recognised as an expt JSON string"),"image_data"in t?window.viewer.addExperimentFromJSONString(r,t.image_data):window.viewer.addExperimentFromJSONString(r);break;case"clear_experiment":window.viewer.clearExperiment();break;case"update_reflection_table":window.viewer.addReflectionsFromJSONMsgpack(t.refl_msgpack);break;case"update_calculated_integrated_reflection_table":window.viewer.addCalculatedIntegratedReflectionsFromJSONMsgpack(t.refl_msgpack);break;case"highlight_reflection":window.viewer.highlightReflection(t);break;case"loading_images":window.viewer.showLoadingImagesMsg();break;case"loading_reflection":window.viewer.showLoadingReflectionMsg();break;case"select_expt":console.assert("expt_id"in t);const s=Number(t.expt_id);console.assert(typeof s=="number"&&!Number.isNaN(s)),window.viewer.selectExpt(s);break;case"toggle_debug_mode":window.viewer.toggleDebugMode(t.debug_mode);break;case"set_debug_to_image":window.viewer.setDebugToImage();break;case"set_debug_to_threshold":window.viewer.setDebugToThreshold();break;case"toggle_sidebar":window.viewer.toggleSidebar();break;default:console.warn("Unrecognised command ",n)}},mE()};
