var fh=Object.defineProperty;var dh=(s,e,t)=>e in s?fh(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ai=(s,e,t)=>dh(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const po="152",Ri={ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ph=0,Go=1,mh=2,Ic=1,_h=2,wn=3,jn=0,Lt=1,Pn=2,Wn=0,tr=1,Ho=2,Vo=3,Wo=4,gh=5,$i=100,xh=101,vh=102,Xo=103,qo=104,Mh=200,yh=201,Sh=202,Eh=203,Uc=204,Oc=205,bh=206,Th=207,wh=208,Ah=209,Rh=210,Ch=0,Ph=1,Lh=2,za=3,Dh=4,Ih=5,Uh=6,Oh=7,Fc=0,Fh=1,Nh=2,Dn=0,Bh=1,zh=2,kh=3,Gh=4,Hh=5,Nc=300,or=301,lr=302,ka=303,Ga=304,Bs=306,Ha=1e3,on=1001,Va=1002,At=1003,Yo=1004,Ks=1005,jt=1006,Vh=1007,Fr=1008,Mi=1009,Wh=1010,Xh=1011,Bc=1012,qh=1013,hi=1014,fi=1015,Nr=1016,Yh=1017,jh=1018,nr=1020,Kh=1021,ln=1023,Zh=1024,$h=1025,pi=1026,cr=1027,Jh=1028,Qh=1029,ef=1030,tf=1031,nf=1033,Zs=33776,$s=33777,Js=33778,Qs=33779,jo=35840,Ko=35841,Zo=35842,$o=35843,rf=36196,Jo=37492,Qo=37496,el=37808,tl=37809,nl=37810,il=37811,rl=37812,sl=37813,al=37814,ol=37815,ll=37816,cl=37817,ul=37818,hl=37819,fl=37820,dl=37821,ea=36492,sf=36283,pl=36284,ml=36285,_l=36286,zc=3e3,mi=3001,af=3200,of=3201,lf=0,cf=1,_i="",Ae="srgb",xn="srgb-linear",kc="display-p3",ta=7680,uf=519,Wa=35044,gl="300 es",Xa=1035;class bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,qa=180/Math.PI;function Xn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[s&255]+_t[s>>8&255]+_t[s>>16&255]+_t[s>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function hf(s,e){return(s%e+e)%e}function ia(s,e,t){return(1-t)*s+t*e}function xl(s){return(s&s-1)===0&&s!==0}function ff(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xe(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xe{constructor(){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],v=n[8],_=i[0],m=i[3],d=i[6],y=i[1],M=i[4],b=i[7],x=i[2],E=i[5],w=i[8];return r[0]=a*_+o*y+l*x,r[3]=a*m+o*M+l*E,r[6]=a*d+o*b+l*w,r[1]=c*_+u*y+h*x,r[4]=c*m+u*M+h*E,r[7]=c*d+u*b+h*w,r[2]=f*_+p*y+v*x,r[5]=f*m+p*M+v*E,r[8]=f*d+p*b+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,v=t*h+n*f+i*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new xe;function Gc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const vl={};function Dr(s){s in vl||(vl[s]=!0,console.warn(s))}function ir(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function sa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const df=new xe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),pf=new xe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function mf(s){return s.convertSRGBToLinear().applyMatrix3(pf)}function _f(s){return s.applyMatrix3(df).convertLinearToSRGB()}const gf={[xn]:s=>s,[Ae]:s=>s.convertSRGBToLinear(),[kc]:mf},xf={[xn]:s=>s,[Ae]:s=>s.convertLinearToSRGB(),[kc]:_f},tn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return xn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=gf[e],i=xf[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Pi;class Hc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=Br("canvas")),Pi.width=e.width,Pi.height=e.height;const n=Pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ir(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ir(t[n]/255)*255):t[n]=ir(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Vc{constructor(e=null){this.isSource=!0,this.uuid=Xn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(aa(i[a].image)):r.push(aa(i[a]))}else r=aa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function aa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vf=0;class Ct extends bi{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=on,i=on,r=jt,a=Fr,o=ln,l=Mi,c=Ct.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Xn(),this.name="",this.source=new Vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===mi?Ae:_i),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ae?mi:zc}set encoding(e){Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mi?Ae:_i}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Nc;Ct.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],v=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(p+1)/2,x=(d+1)/2,E=(u+f)/4,w=(h+_)/4,C=(v+m)/4;return M>b&&M>x?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=w/n):b>x?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=E/i,r=C/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=w/r,i=C/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-v)*(m-v)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yi extends bi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mi?Ae:_i),this.texture=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wc extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mf extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],p=r[a+1],v=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(h!==_||l!==f||c!==p||u!==v){let m=1-o;const d=l*f+c*p+u*v+h*_,y=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const x=Math.sqrt(M),E=Math.atan2(x,d*y);m=Math.sin(m*E)/x,o=Math.sin(o*E)/x}const b=o*y;if(l=l*m+f*b,c=c*m+p*b,u=u*m+v*b,h=h*m+_*b,m===1-o){const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*h+l*p-c*f,e[t+1]=l*v+u*f+c*h-o*p,e[t+2]=c*v+u*p+o*f-l*h,e[t+3]=u*v-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),p=l(i/2),v=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"YZX":this._x=f*u*h+c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h-f*p*v;break;case"XZY":this._x=f*u*h-c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=c*l+f*-r+u*-o-h*-a,this.y=u*l+f*-a+h*-r-c*-o,this.z=h*l+f*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new P,Ml=new Kn;class xr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Li.copy(e.boundingBox),Li.applyMatrix4(e.matrixWorld),this.union(Li);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)yn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(yn)}else i.boundingBox===null&&i.computeBoundingBox(),Li.copy(i.boundingBox),Li.applyMatrix4(e.matrixWorld),this.union(Li)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),Kr.subVectors(this.max,yr),Di.subVectors(e.a,yr),Ii.subVectors(e.b,yr),Ui.subVectors(e.c,yr),Fn.subVectors(Ii,Di),Nn.subVectors(Ui,Ii),ni.subVectors(Di,Ui);let t=[0,-Fn.z,Fn.y,0,-Nn.z,Nn.y,0,-ni.z,ni.y,Fn.z,0,-Fn.x,Nn.z,0,-Nn.x,ni.z,0,-ni.x,-Fn.y,Fn.x,0,-Nn.y,Nn.x,0,-ni.y,ni.x,0];return!la(t,Di,Ii,Ui,Kr)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Di,Ii,Ui,Kr))?!1:(Zr.crossVectors(Fn,Nn),t=[Zr.x,Zr.y,Zr.z],la(t,Di,Ii,Ui,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new P,new P,new P,new P,new P,new P,new P,new P],yn=new P,Li=new xr,Di=new P,Ii=new P,Ui=new P,Fn=new P,Nn=new P,ni=new P,yr=new P,Kr=new P,Zr=new P,ii=new P;function la(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ii.fromArray(s,r);const o=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const yf=new xr,Sr=new P,ca=new P;class Xr{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Sr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(ca)),this.expandByPoint(Sr.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new P,ua=new P,$r=new P,Bn=new P,ha=new P,Jr=new P,fa=new P;class zs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ua.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(ua);const r=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=Bn.dot(this.direction),l=-Bn.dot($r),c=Bn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,v;if(u>0)if(h=a*l-o,f=a*o-l,v=r*u,h>=0)if(f>=-v)if(f<=v){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ua).addScaledVector($r,f),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,r){ha.subVectors(t,e),Jr.subVectors(n,e),fa.crossVectors(ha,Jr);let a=this.direction.dot(fa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,e);const l=o*this.direction.dot(Jr.crossVectors(Bn,Jr));if(l<0)return null;const c=o*this.direction.dot(ha.cross(Bn));if(c<0||l+c>a)return null;const u=-o*Bn.dot(fa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,l,c,u,h,f,p,v,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Oi.setFromMatrixColumn(e,0).length(),r=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,p=a*h,v=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,v=c*u,_=c*h;t[0]=f+_*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,v=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,v=o*u,_=o*h;t[0]=l*u,t[4]=v*c-p,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=v*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+v,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,p=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sf,e,Ef)}lookAt(e,t,n){const i=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),zn.crossVectors(n,Bt),zn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),zn.crossVectors(n,Bt)),zn.normalize(),Qr.crossVectors(Bt,zn),i[0]=zn.x,i[4]=Qr.x,i[8]=Bt.x,i[1]=zn.y,i[5]=Qr.y,i[9]=Bt.y,i[2]=zn.z,i[6]=Qr.z,i[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],v=n[2],_=n[6],m=n[10],d=n[14],y=n[3],M=n[7],b=n[11],x=n[15],E=i[0],w=i[4],C=i[8],g=i[12],S=i[1],D=i[5],k=i[9],O=i[13],N=i[2],z=i[6],K=i[10],H=i[14],V=i[3],Q=i[7],J=i[11],pe=i[15];return r[0]=a*E+o*S+l*N+c*V,r[4]=a*w+o*D+l*z+c*Q,r[8]=a*C+o*k+l*K+c*J,r[12]=a*g+o*O+l*H+c*pe,r[1]=u*E+h*S+f*N+p*V,r[5]=u*w+h*D+f*z+p*Q,r[9]=u*C+h*k+f*K+p*J,r[13]=u*g+h*O+f*H+p*pe,r[2]=v*E+_*S+m*N+d*V,r[6]=v*w+_*D+m*z+d*Q,r[10]=v*C+_*k+m*K+d*J,r[14]=v*g+_*O+m*H+d*pe,r[3]=y*E+M*S+b*N+x*V,r[7]=y*w+M*D+b*z+x*Q,r[11]=y*C+M*k+b*K+x*J,r[15]=y*g+M*O+b*H+x*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],v=e[3],_=e[7],m=e[11],d=e[15];return v*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*p-n*l*p)+_*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],v=e[12],_=e[13],m=e[14],d=e[15],y=h*m*c-_*f*c+_*l*p-o*m*p-h*l*d+o*f*d,M=v*f*c-u*m*c-v*l*p+a*m*p+u*l*d-a*f*d,b=u*_*c-v*h*c+v*o*p-a*_*p-u*o*d+a*h*d,x=v*h*l-u*_*l-v*o*f+a*_*f+u*o*m-a*h*m,E=t*y+n*M+i*b+r*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=y*w,e[1]=(_*f*r-h*m*r-_*i*p+n*m*p+h*i*d-n*f*d)*w,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*d+n*l*d)*w,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*p-n*l*p)*w,e[4]=M*w,e[5]=(u*m*r-v*f*r+v*i*p-t*m*p-u*i*d+t*f*d)*w,e[6]=(v*l*r-a*m*r-v*i*c+t*m*c+a*i*d-t*l*d)*w,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*p+t*l*p)*w,e[8]=b*w,e[9]=(v*h*r-u*_*r-v*n*p+t*_*p+u*n*d-t*h*d)*w,e[10]=(a*_*r-v*o*r+v*n*c-t*_*c-a*n*d+t*o*d)*w,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*w,e[12]=x*w,e[13]=(u*_*i-v*h*i+v*n*f-t*_*f-u*n*m+t*h*m)*w,e[14]=(v*o*i-a*_*i-v*n*l+t*_*l+a*n*m-t*o*m)*w,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,v=r*h,_=a*u,m=a*h,d=o*h,y=l*c,M=l*u,b=l*h,x=n.x,E=n.y,w=n.z;return i[0]=(1-(_+d))*x,i[1]=(p+b)*x,i[2]=(v-M)*x,i[3]=0,i[4]=(p-b)*E,i[5]=(1-(f+d))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(v+M)*w,i[9]=(m-y)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Oi.set(i[0],i[1],i[2]).length();const a=Oi.set(i[4],i[5],i[6]).length(),o=Oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],nn.copy(this);const c=1/r,u=1/a,h=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,t.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),h=(t+e)*l,f=(n+i)*c,p=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Oi=new P,nn=new tt,Sf=new P(0,0,0),Ef=new P(1,1,1),zn=new P,Qr=new P,Bt=new P,yl=new tt,Sl=new Kn;class ks{constructor(e=0,t=0,n=0,i=ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ks.DEFAULT_ORDER="XYZ";class mo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bf=0;const El=new P,Fi=new Kn,En=new tt,es=new P,Er=new P,Tf=new P,wf=new Kn,bl=new P(1,0,0),Tl=new P(0,1,0),wl=new P(0,0,1),Af={type:"added"},Al={type:"removed"};class Mt extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new P,t=new ks,n=new Kn,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new xe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(bl,e)}rotateY(e){return this.rotateOnAxis(Tl,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return El.copy(e).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bl,e)}translateY(e){return this.translateOnAxis(Tl,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?es.copy(e):es.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Er,es,this.up):En.lookAt(es,Er,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(En),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Af)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Al)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Al)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,Tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DEFAULT_UP=new P(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new P,bn=new P,da=new P,Tn=new P,Ni=new P,Bi=new P,Rl=new P,pa=new P,ma=new P,_a=new P;let ts=!1;class Kt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){rn.subVectors(i,t),bn.subVectors(n,t),da.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(bn),l=rn.dot(da),c=bn.dot(bn),u=bn.dot(da),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-o*u)*f,v=(a*u-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(e,t,n,i,r,a,o,l){return ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ts=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Tn),l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),bn.subVectors(e,t),rn.cross(bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),rn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ts=!0),Kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ni.subVectors(i,n),Bi.subVectors(r,n),pa.subVectors(e,n);const l=Ni.dot(pa),c=Bi.dot(pa);if(l<=0&&c<=0)return t.copy(n);ma.subVectors(e,i);const u=Ni.dot(ma),h=Bi.dot(ma);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ni,a);_a.subVectors(e,r);const p=Ni.dot(_a),v=Bi.dot(_a);if(v>=0&&p<=v)return t.copy(r);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Bi,o);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return Rl.subVectors(r,i),o=(h-u)/(h-u+(p-v)),t.copy(i).addScaledVector(Rl,o);const d=1/(m+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(Ni,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rf=0;class Ti extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=tr,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Uc,this.blendDst=Oc,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},ns={h:0,s:0,l:0};function ga(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ae){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tn.workingColorSpace){return this.r=e,this.g=t,this.b=n,tn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tn.workingColorSpace){if(e=hf(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ga(a,r,e+1/3),this.g=ga(a,r,e),this.b=ga(a,r,e-1/3)}return tn.toWorkingColorSpace(this,i),this}setStyle(e,t=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ae){const n=Xc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ae){return tn.fromWorkingColorSpace(gt.copy(this),e),Math.round(Rt(gt.r*255,0,255))*65536+Math.round(Rt(gt.g*255,0,255))*256+Math.round(Rt(gt.b*255,0,255))}getHexString(e=Ae){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tn.workingColorSpace){tn.fromWorkingColorSpace(gt.copy(this),t);const n=gt.r,i=gt.g,r=gt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tn.workingColorSpace){return tn.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Ae){tn.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,i=gt.b;return e!==Ae?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(sn),sn.h+=e,sn.s+=t,sn.l+=n,this.setHSL(sn.h,sn.s,sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(ns);const n=ia(sn.h,ns.h,t),i=ia(sn.s,ns.s,t),r=ia(sn.l,ns.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new ze;ze.NAMES=Xc;class _o extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new P,is=new Se;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array),r=Xe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class qc extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yc extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cf=0;const Xt=new tt,xa=new Mt,zi=new P,zt=new xr,br=new xr,ut=new P;class Dt extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gc(e)?Yc:qc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];br.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(zt.min,br.min),zt.expandByPoint(ut),ut.addVectors(zt.max,br.max),zt.expandByPoint(ut)):(zt.expandByPoint(br.min),zt.expandByPoint(br.max))}zt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ut));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ut.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),ut.add(zi)),i=Math.max(i,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<o;S++)c[S]=new P,u[S]=new P;const h=new P,f=new P,p=new P,v=new Se,_=new Se,m=new Se,d=new P,y=new P;function M(S,D,k){h.fromArray(i,S*3),f.fromArray(i,D*3),p.fromArray(i,k*3),v.fromArray(a,S*2),_.fromArray(a,D*2),m.fromArray(a,k*2),f.sub(h),p.sub(h),_.sub(v),m.sub(v);const O=1/(_.x*m.y-m.x*_.y);isFinite(O)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(O),y.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(O),c[S].add(d),c[D].add(d),c[k].add(d),u[S].add(y),u[D].add(y),u[k].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let S=0,D=b.length;S<D;++S){const k=b[S],O=k.start,N=k.count;for(let z=O,K=O+N;z<K;z+=3)M(n[z+0],n[z+1],n[z+2])}const x=new P,E=new P,w=new P,C=new P;function g(S){w.fromArray(r,S*3),C.copy(w);const D=c[S];x.copy(D),x.sub(w.multiplyScalar(w.dot(D))).normalize(),E.crossVectors(C,D);const O=E.dot(u[S])<0?-1:1;l[S*4]=x.x,l[S*4+1]=x.y,l[S*4+2]=x.z,l[S*4+3]=O}for(let S=0,D=b.length;S<D;++S){const k=b[S],O=k.start,N=k.count;for(let z=O,K=O+N;z<K;z+=3)g(n[z+0]),g(n[z+1]),g(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)f[v++]=c[p++]}return new cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new tt,fn=new zs,rs=new Xr,Pl=new P,ki=new P,Gi=new P,Hi=new P,va=new P,ss=new P,as=new Se,os=new Se,ls=new Se,Ll=new P,Dl=new P,Il=new P,cs=new P,us=new P;class Ln extends Mt{constructor(e=new Dt,t=new _o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(va.fromBufferAttribute(h,e),a?ss.addScaledVector(va,u):ss.addScaledVector(va.sub(t),u))}t.add(ss)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),fn.copy(e.ray).recast(e.near),!(rs.containsPoint(fn.origin)===!1&&(fn.intersectSphere(rs,Pl)===null||fn.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Cl.copy(r).invert(),fn.copy(e.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,r=this.material,a=i.index,o=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv1,u=i.attributes.normal,h=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,v=h.length;p<v;p++){const _=h[p],m=r[_.materialIndex],d=Math.max(_.start,f.start),y=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let M=d,b=y;M<b;M+=3){const x=a.getX(M),E=a.getX(M+1),w=a.getX(M+2);n=hs(this,m,e,fn,l,c,u,x,E,w),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let _=p,m=v;_<m;_+=3){const d=a.getX(_),y=a.getX(_+1),M=a.getX(_+2);n=hs(this,r,e,fn,l,c,u,d,y,M),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,v=h.length;p<v;p++){const _=h[p],m=r[_.materialIndex],d=Math.max(_.start,f.start),y=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let M=d,b=y;M<b;M+=3){const x=M,E=M+1,w=M+2;n=hs(this,m,e,fn,l,c,u,x,E,w),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let _=p,m=v;_<m;_+=3){const d=_,y=_+1,M=_+2;n=hs(this,r,e,fn,l,c,u,d,y,M),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}}function Pf(s,e,t,n,i,r,a,o){let l;if(e.side===Lt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===jn,o),l===null)return null;us.copy(o),us.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(us);return c<t.near||c>t.far?null:{distance:c,point:us.clone(),object:s}}function hs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ki),s.getVertexPosition(l,Gi),s.getVertexPosition(c,Hi);const u=Pf(s,e,t,n,ki,Gi,Hi,cs);if(u){i&&(as.fromBufferAttribute(i,o),os.fromBufferAttribute(i,l),ls.fromBufferAttribute(i,c),u.uv=Kt.getInterpolation(cs,ki,Gi,Hi,as,os,ls,new Se)),r&&(as.fromBufferAttribute(r,o),os.fromBufferAttribute(r,l),ls.fromBufferAttribute(r,c),u.uv1=Kt.getInterpolation(cs,ki,Gi,Hi,as,os,ls,new Se),u.uv2=u.uv1),a&&(Ll.fromBufferAttribute(a,o),Dl.fromBufferAttribute(a,l),Il.fromBufferAttribute(a,c),u.normal=Kt.getInterpolation(cs,ki,Gi,Hi,Ll,Dl,Il,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};Kt.getNormal(ki,Gi,Hi,h.normal),u.face=h}return u}class qr extends Dt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(h,2));function v(_,m,d,y,M,b,x,E,w,C,g){const S=b/w,D=x/C,k=b/2,O=x/2,N=E/2,z=w+1,K=C+1;let H=0,V=0;const Q=new P;for(let J=0;J<K;J++){const pe=J*D-O;for(let ie=0;ie<z;ie++){const W=ie*S-k;Q[_]=W*y,Q[m]=pe*M,Q[d]=N,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[d]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(ie/w),h.push(1-J/C),H+=1}}for(let J=0;J<C;J++)for(let pe=0;pe<w;pe++){const ie=f+pe+z*J,W=f+pe+z*(J+1),Z=f+(pe+1)+z*(J+1),re=f+(pe+1)+z*J;l.push(ie,W,re),l.push(W,Z,re),V+=6}o.addGroup(p,V,g),p+=V,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ur(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(s){const e={};for(let t=0;t<s.length;t++){const n=ur(s[t]);for(const i in n)e[i]=n[i]}return e}function Lf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function jc(s){return s.getRenderTarget()===null?s.outputColorSpace:xn}const Df={clone:ur,merge:wt};var If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=Lf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kc extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends Kc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vi=-90,Wi=1;class Of extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new an(Vi,Wi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new an(Vi,Wi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new an(Vi,Wi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new an(Vi,Wi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new an(Vi,Wi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new an(Vi,Wi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Dn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Zc extends Ct{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ff extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===mi?Ae:_i),this.texture=new Zc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qr(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Wn});r.uniforms.tEquirect.value=t;const a=new Ln(i,r),o=t.minFilter;return t.minFilter===Fr&&(t.minFilter=jt),new Of(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Ma=new P,Nf=new P,Bf=new xe;class oi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ma.subVectors(n,t).cross(Nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ma),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bf.getNormalMatrix(e),i=this.coplanarPoint(Ma).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new Xr,fs=new P;class $c{constructor(e=new oi,t=new oi,n=new oi,i=new oi,r=new oi,a=new oi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],v=n[10],_=n[11],m=n[12],d=n[13],y=n[14],M=n[15];return t[0].setComponents(o-i,h-l,_-f,M-m).normalize(),t[1].setComponents(o+i,h+l,_+f,M+m).normalize(),t[2].setComponents(o+r,h+c,_+p,M+d).normalize(),t[3].setComponents(o-r,h-c,_-p,M-d).normalize(),t[4].setComponents(o-a,h-u,_-v,M-y).normalize(),t[5].setComponents(o+a,h+u,_+v,M+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fs.x=i.normal.x>0?e.max.x:e.min.x,fs.y=i.normal.y>0?e.max.y:e.min.y,fs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function zf(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=s.SHORT;else if(h instanceof Uint32Array)v=s.UNSIGNED_INT;else if(h instanceof Int32Array)v=s.INT;else if(h instanceof Int8Array)v=s.BYTE;else if(h instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;s.bindBuffer(h,c),p.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class go extends Dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,p=[],v=[],_=[],m=[];for(let d=0;d<u;d++){const y=d*f-a;for(let M=0;M<c;M++){const b=M*h-r;v.push(b,-y,0),_.push(0,0,1),m.push(M/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const M=y+c*d,b=y+c*(d+1),x=y+1+c*(d+1),E=y+1+c*d;p.push(M,b,E),p.push(b,x,E)}this.setIndex(p),this.setAttribute("position",new Jt(v,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}var kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf="vec3 transformed = vec3( position );",Yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Zf=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sd=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,od=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",dd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ed=`#ifdef USE_GRADIENTMAP
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
}`,bd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Cd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ld=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ud=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,Od=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Fd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,zd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vd=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qd=`#if defined( USE_POINTS_UV )
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
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$d=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,up=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Pp=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Lp=`#ifdef USE_UV
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
#endif`,Dp=`#ifdef USE_UV
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
#endif`,Ip=`#ifdef USE_UV
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
#endif`,Up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Hp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Wp=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yp=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kp=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Zp=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Jp=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,em=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nm=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,im=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,rm=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,am=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,lm=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`uniform float size;
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
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,fm=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,dm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pe={alphamap_fragment:kf,alphamap_pars_fragment:Gf,alphatest_fragment:Hf,alphatest_pars_fragment:Vf,aomap_fragment:Wf,aomap_pars_fragment:Xf,begin_vertex:qf,beginnormal_vertex:Yf,bsdfs:jf,iridescence_fragment:Kf,bumpmap_pars_fragment:Zf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:Jf,clipping_planes_pars_vertex:Qf,clipping_planes_vertex:ed,color_fragment:td,color_pars_fragment:nd,color_pars_vertex:id,color_vertex:rd,common:sd,cube_uv_reflection_fragment:ad,defaultnormal_vertex:od,displacementmap_pars_vertex:ld,displacementmap_vertex:cd,emissivemap_fragment:ud,emissivemap_pars_fragment:hd,encodings_fragment:fd,encodings_pars_fragment:dd,envmap_fragment:pd,envmap_common_pars_fragment:md,envmap_pars_fragment:_d,envmap_pars_vertex:gd,envmap_physical_pars_fragment:Cd,envmap_vertex:xd,fog_vertex:vd,fog_pars_vertex:Md,fog_fragment:yd,fog_pars_fragment:Sd,gradientmap_pars_fragment:Ed,lightmap_fragment:bd,lightmap_pars_fragment:Td,lights_lambert_fragment:wd,lights_lambert_pars_fragment:Ad,lights_pars_begin:Rd,lights_toon_fragment:Pd,lights_toon_pars_fragment:Ld,lights_phong_fragment:Dd,lights_phong_pars_fragment:Id,lights_physical_fragment:Ud,lights_physical_pars_fragment:Od,lights_fragment_begin:Fd,lights_fragment_maps:Nd,lights_fragment_end:Bd,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:Gd,logdepthbuf_vertex:Hd,map_fragment:Vd,map_pars_fragment:Wd,map_particle_fragment:Xd,map_particle_pars_fragment:qd,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:jd,morphcolor_vertex:Kd,morphnormal_vertex:Zd,morphtarget_pars_vertex:$d,morphtarget_vertex:Jd,normal_fragment_begin:Qd,normal_fragment_maps:ep,normal_pars_fragment:tp,normal_pars_vertex:np,normal_vertex:ip,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:ap,clearcoat_pars_fragment:op,iridescence_pars_fragment:lp,output_fragment:cp,packing:up,premultiplied_alpha_fragment:hp,project_vertex:fp,dithering_fragment:dp,dithering_pars_fragment:pp,roughnessmap_fragment:mp,roughnessmap_pars_fragment:_p,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:xp,shadowmap_vertex:vp,shadowmask_pars_fragment:Mp,skinbase_vertex:yp,skinning_pars_vertex:Sp,skinning_vertex:Ep,skinnormal_vertex:bp,specularmap_fragment:Tp,specularmap_pars_fragment:wp,tonemapping_fragment:Ap,tonemapping_pars_fragment:Rp,transmission_fragment:Cp,transmission_pars_fragment:Pp,uv_pars_fragment:Lp,uv_pars_vertex:Dp,uv_vertex:Ip,worldpos_vertex:Up,background_vert:Op,background_frag:Fp,backgroundCube_vert:Np,backgroundCube_frag:Bp,cube_vert:zp,cube_frag:kp,depth_vert:Gp,depth_frag:Hp,distanceRGBA_vert:Vp,distanceRGBA_frag:Wp,equirect_vert:Xp,equirect_frag:qp,linedashed_vert:Yp,linedashed_frag:jp,meshbasic_vert:Kp,meshbasic_frag:Zp,meshlambert_vert:$p,meshlambert_frag:Jp,meshmatcap_vert:Qp,meshmatcap_frag:em,meshnormal_vert:tm,meshnormal_frag:nm,meshphong_vert:im,meshphong_frag:rm,meshphysical_vert:sm,meshphysical_frag:am,meshtoon_vert:om,meshtoon_frag:lm,points_vert:cm,points_frag:um,shadow_vert:hm,shadow_frag:fm,sprite_vert:dm,sprite_frag:pm},ae={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaTest:{value:0}}},dn={basic:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ze(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:wt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:wt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ze(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:wt([ae.points,ae.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:wt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:wt([ae.common,ae.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:wt([ae.sprite,ae.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:wt([ae.common,ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:wt([ae.lights,ae.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};dn.physical={uniforms:wt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const ds={r:0,b:0,g:0};function mm(s,e,t,n,i,r,a){const o=new ze(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function v(m,d){let y=!1,M=d.isScene===!0?d.background:null;switch(M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?_(o,l):M&&M.isColor&&(_(M,1),y=!0),s.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),y=!0;break}(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Bs)?(u===void 0&&(u=new Ln(new qr(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:ur(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=M.colorSpace!==Ae,(h!==M||f!==M.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,p=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ln(new go(2,2),new Si({name:"BackgroundMaterial",uniforms:ur(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=M.colorSpace!==Ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(ds,jc(s)),n.buffers.color.setClear(ds.r,ds.g,ds.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:v}}function _m(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(N,z,K,H,V){let Q=!1;if(a){const J=_(H,K,z);c!==J&&(c=J,p(c.object)),Q=d(N,H,K,V),Q&&y(N,H,K,V)}else{const J=z.wireframe===!0;(c.geometry!==H.id||c.program!==K.id||c.wireframe!==J)&&(c.geometry=H.id,c.program=K.id,c.wireframe=J,Q=!0)}V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,C(N,z,K,H),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(N){return n.isWebGL2?s.bindVertexArray(N):r.bindVertexArrayOES(N)}function v(N){return n.isWebGL2?s.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function _(N,z,K){const H=K.wireframe===!0;let V=o[N.id];V===void 0&&(V={},o[N.id]=V);let Q=V[z.id];Q===void 0&&(Q={},V[z.id]=Q);let J=Q[H];return J===void 0&&(J=m(f()),Q[H]=J),J}function m(N){const z=[],K=[],H=[];for(let V=0;V<i;V++)z[V]=0,K[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:K,attributeDivisors:H,object:N,attributes:{},index:null}}function d(N,z,K,H){const V=c.attributes,Q=z.attributes;let J=0;const pe=K.getAttributes();for(const ie in pe)if(pe[ie].location>=0){const Z=V[ie];let re=Q[ie];if(re===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(re=N.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;J++}return c.attributesNum!==J||c.index!==H}function y(N,z,K,H){const V={},Q=z.attributes;let J=0;const pe=K.getAttributes();for(const ie in pe)if(pe[ie].location>=0){let Z=Q[ie];Z===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),V[ie]=re,J++}c.attributes=V,c.attributesNum=J,c.index=H}function M(){const N=c.newAttributes;for(let z=0,K=N.length;z<K;z++)N[z]=0}function b(N){x(N,0)}function x(N,z){const K=c.newAttributes,H=c.enabledAttributes,V=c.attributeDivisors;K[N]=1,H[N]===0&&(s.enableVertexAttribArray(N),H[N]=1),V[N]!==z&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,z),V[N]=z)}function E(){const N=c.newAttributes,z=c.enabledAttributes;for(let K=0,H=z.length;K<H;K++)z[K]!==N[K]&&(s.disableVertexAttribArray(K),z[K]=0)}function w(N,z,K,H,V,Q){n.isWebGL2===!0&&(K===s.INT||K===s.UNSIGNED_INT)?s.vertexAttribIPointer(N,z,K,V,Q):s.vertexAttribPointer(N,z,K,H,V,Q)}function C(N,z,K,H){if(n.isWebGL2===!1&&(N.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const V=H.attributes,Q=K.getAttributes(),J=z.defaultAttributeValues;for(const pe in Q){const ie=Q[pe];if(ie.location>=0){let W=V[pe];if(W===void 0&&(pe==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),pe==="instanceColor"&&N.instanceColor&&(W=N.instanceColor)),W!==void 0){const Z=W.normalized,re=W.itemSize,ce=t.get(W);if(ce===void 0)continue;const U=ce.buffer,be=ce.type,Ee=ce.bytesPerElement;if(W.isInterleavedBufferAttribute){const se=W.data,Me=se.stride,Be=W.offset;if(se.isInstancedInterleavedBuffer){for(let ge=0;ge<ie.locationSize;ge++)x(ie.location+ge,se.meshPerAttribute);N.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ge=0;ge<ie.locationSize;ge++)b(ie.location+ge);s.bindBuffer(s.ARRAY_BUFFER,U);for(let ge=0;ge<ie.locationSize;ge++)w(ie.location+ge,re/ie.locationSize,be,Z,Me*Ee,(Be+re/ie.locationSize*ge)*Ee)}else{if(W.isInstancedBufferAttribute){for(let se=0;se<ie.locationSize;se++)x(ie.location+se,W.meshPerAttribute);N.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let se=0;se<ie.locationSize;se++)b(ie.location+se);s.bindBuffer(s.ARRAY_BUFFER,U);for(let se=0;se<ie.locationSize;se++)w(ie.location+se,re/ie.locationSize,be,Z,re*Ee,re/ie.locationSize*se*Ee)}}else if(J!==void 0){const Z=J[pe];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(ie.location,Z);break;case 3:s.vertexAttrib3fv(ie.location,Z);break;case 4:s.vertexAttrib4fv(ie.location,Z);break;default:s.vertexAttrib1fv(ie.location,Z)}}}}E()}function g(){k();for(const N in o){const z=o[N];for(const K in z){const H=z[K];for(const V in H)v(H[V].object),delete H[V];delete z[K]}delete o[N]}}function S(N){if(o[N.id]===void 0)return;const z=o[N.id];for(const K in z){const H=z[K];for(const V in H)v(H[V].object),delete H[V];delete z[K]}delete o[N.id]}function D(N){for(const z in o){const K=o[z];if(K[N.id]===void 0)continue;const H=K[N.id];for(const V in H)v(H[V].object),delete H[V];delete K[N.id]}}function k(){O(),u=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:O,dispose:g,releaseStatesOfGeometry:S,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:b,disableUnusedAttributes:E}}function gm(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=s,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function xm(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,b=a||e.has("OES_texture_float"),x=M&&b,E=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:E}}function vm(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new oi,o=new xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=s.get(h);if(!i||v===null||v.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,M=y*4;let b=d.clippingState||null;l.value=b,b=u(v,f,M,p);for(let x=0;x!==M;++x)b[x]=t[x];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,v){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const d=p+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,b=p;M!==_;++M,b+=4)a.copy(h[M]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Mm(s){let e=new WeakMap;function t(a,o){return o===ka?a.mapping=or:o===Ga&&(a.mapping=lr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ka||o===Ga)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ff(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Qc extends Kc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ji=4,Ul=[.125,.215,.35,.446,.526,.582],ui=20,ya=new Qc,Ol=new ze;let Sa=null;const li=(1+Math.sqrt(5))/2,Xi=1/li,Fl=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,li,Xi),new P(0,li,-Xi),new P(Xi,0,li),new P(-Xi,0,li),new P(li,Xi,0),new P(-li,Xi,0)];class Nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Sa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa),e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Nr,format:ln,colorSpace:xn,depthBuffer:!1},i=Bl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ym(r)),this._blurMaterial=Sm(r,e,t)}return i}_compileMaterial(e){const t=new Ln(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,n,i){const o=new an(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ol),u.toneMapping=Dn,u.autoClear=!1;const p=new _o({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),v=new Ln(new qr,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ol),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const M=this._cubeSize;ps(i,y*M,d>2?M:0,M,M),u.setRenderTarget(i),_&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===or||e.mapping===lr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ln(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ya)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Fl[(i-1)%Fl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ln(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ui-1),_=r/v,m=isFinite(r)?1+Math.floor(u*_):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const d=[];let y=0;for(let w=0;w<ui;++w){const C=w/_,g=Math.exp(-C*C/2);d.push(g),w===0?y+=g:w<m&&(y+=2*g)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-n;const b=this._sizeLods[i],x=3*b*(i>M-Ji?i-M+Ji:0),E=4*(this._cubeSize-b);ps(t,x,E,3*b,2*b),l.setRenderTarget(t),l.render(h,ya)}}function ym(s){const e=[],t=[],n=[];let i=s;const r=s-Ji+1+Ul.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ji?l=Ul[a-s+Ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,_=3,m=2,d=1,y=new Float32Array(_*v*p),M=new Float32Array(m*v*p),b=new Float32Array(d*v*p);for(let E=0;E<p;E++){const w=E%3*2/3-1,C=E>2?0:-1,g=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(g,_*v*E),M.set(f,m*v*E);const S=[E,E,E,E,E,E];b.set(S,d*v*E)}const x=new Dt;x.setAttribute("position",new cn(y,_)),x.setAttribute("uv",new cn(M,m)),x.setAttribute("faceIndex",new cn(b,d)),e.push(x),i>Ji&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bl(s,e,t){const n=new yi(s,e,t);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Sm(s,e,t){const n=new Float32Array(ui),i=new P(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xo(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function zl(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function kl(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function xo(){return`

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
	`}function Em(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ka||l===Ga,u=l===or||l===lr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Nl(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Nl(s));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function bm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tm(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const _=p[v];for(let m=0,d=_.length;m<d;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,v=h.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let M=0,b=y.length;M<b;M+=3){const x=y[M+0],E=y[M+1],w=y[M+2];f.push(x,E,E,w,w,x)}}else{const y=v.array;_=v.version;for(let M=0,b=y.length/3-1;M<b;M+=3){const x=M+0,E=M+1,w=M+2;f.push(x,E,E,w,w,x)}}const m=new(Gc(f)?Yc:qc)(f,1);m.version=_;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function wm(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,p){s.drawElements(r,p,o,f*l),t.update(p,r,1)}function h(f,p,v){if(v===0)return;let _,m;if(i)_=s,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,o,f*l,v),t.update(p,r,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Am(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Rm(s,e){return s[0]-e[0]}function Cm(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Pm(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=v!==void 0?v.length:0;let m=r.get(u);if(m===void 0||m.count!==_){let z=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",z)};var p=z;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let g=0;M===!0&&(g=1),b===!0&&(g=2),x===!0&&(g=3);let S=u.attributes.position.count*g,D=1;S>e.maxTextureSize&&(D=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const k=new Float32Array(S*D*4*_),O=new Wc(k,S,D,_);O.type=fi,O.needsUpdate=!0;const N=g*4;for(let K=0;K<_;K++){const H=E[K],V=w[K],Q=C[K],J=S*D*4*K;for(let pe=0;pe<H.count;pe++){const ie=pe*N;M===!0&&(a.fromBufferAttribute(H,pe),k[J+ie+0]=a.x,k[J+ie+1]=a.y,k[J+ie+2]=a.z,k[J+ie+3]=0),b===!0&&(a.fromBufferAttribute(V,pe),k[J+ie+4]=a.x,k[J+ie+5]=a.y,k[J+ie+6]=a.z,k[J+ie+7]=0),x===!0&&(a.fromBufferAttribute(Q,pe),k[J+ie+8]=a.x,k[J+ie+9]=a.y,k[J+ie+10]=a.z,k[J+ie+11]=Q.itemSize===4?a.w:1)}}m={count:_,texture:O,size:new Se(S,D)},r.set(u,m),u.addEventListener("dispose",z)}let d=0;for(let M=0;M<f.length;M++)d+=f[M];const y=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const v=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==v){_=[];for(let b=0;b<v;b++)_[b]=[b,0];n[u.id]=_}for(let b=0;b<v;b++){const x=_[b];x[0]=b,x[1]=f[b]}_.sort(Cm);for(let b=0;b<8;b++)b<v&&_[b][1]?(o[b][0]=_[b][0],o[b][1]=_[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Rm);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const x=o[b],E=x[0],w=x[1];E!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+b)!==m[E]&&u.setAttribute("morphTarget"+b,m[E]),d&&u.getAttribute("morphNormal"+b)!==d[E]&&u.setAttribute("morphNormal"+b,d[E]),i[b]=w,y+=w):(m&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),d&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),i[b]=0)}const M=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Lm(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const eu=new Ct,tu=new Wc,nu=new Mf,iu=new Zc,Gl=[],Hl=[],Vl=new Float32Array(16),Wl=new Float32Array(9),Xl=new Float32Array(4);function vr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Gl[i];if(r===void 0&&(r=new Float32Array(i),Gl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ot(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Gs(s,e){let t=Hl[e];t===void 0&&(t=new Int32Array(e),Hl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Dm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Im(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;s.uniform2fv(this.addr,e),lt(t,e)}}function Um(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;s.uniform3fv(this.addr,e),lt(t,e)}}function Om(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;s.uniform4fv(this.addr,e),lt(t,e)}}function Fm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Xl.set(n),s.uniformMatrix2fv(this.addr,!1,Xl),lt(t,n)}}function Nm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Wl.set(n),s.uniformMatrix3fv(this.addr,!1,Wl),lt(t,n)}}function Bm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Vl.set(n),s.uniformMatrix4fv(this.addr,!1,Vl),lt(t,n)}}function zm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function km(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;s.uniform2iv(this.addr,e),lt(t,e)}}function Gm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;s.uniform3iv(this.addr,e),lt(t,e)}}function Hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;s.uniform4iv(this.addr,e),lt(t,e)}}function Vm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Wm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;s.uniform2uiv(this.addr,e),lt(t,e)}}function Xm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;s.uniform3uiv(this.addr,e),lt(t,e)}}function qm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;s.uniform4uiv(this.addr,e),lt(t,e)}}function Ym(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||eu,i)}function jm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nu,i)}function Km(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||iu,i)}function Zm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||tu,i)}function $m(s){switch(s){case 5126:return Dm;case 35664:return Im;case 35665:return Um;case 35666:return Om;case 35674:return Fm;case 35675:return Nm;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return km;case 35668:case 35672:return Gm;case 35669:case 35673:return Hm;case 5125:return Vm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Zm}}function Jm(s,e){s.uniform1fv(this.addr,e)}function Qm(s,e){const t=vr(e,this.size,2);s.uniform2fv(this.addr,t)}function e_(s,e){const t=vr(e,this.size,3);s.uniform3fv(this.addr,t)}function t_(s,e){const t=vr(e,this.size,4);s.uniform4fv(this.addr,t)}function n_(s,e){const t=vr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function i_(s,e){const t=vr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function r_(s,e){const t=vr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function s_(s,e){s.uniform1iv(this.addr,e)}function a_(s,e){s.uniform2iv(this.addr,e)}function o_(s,e){s.uniform3iv(this.addr,e)}function l_(s,e){s.uniform4iv(this.addr,e)}function c_(s,e){s.uniform1uiv(this.addr,e)}function u_(s,e){s.uniform2uiv(this.addr,e)}function h_(s,e){s.uniform3uiv(this.addr,e)}function f_(s,e){s.uniform4uiv(this.addr,e)}function d_(s,e,t){const n=this.cache,i=e.length,r=Gs(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||eu,r[a])}function p_(s,e,t){const n=this.cache,i=e.length,r=Gs(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||nu,r[a])}function m_(s,e,t){const n=this.cache,i=e.length,r=Gs(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||iu,r[a])}function __(s,e,t){const n=this.cache,i=e.length,r=Gs(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||tu,r[a])}function g_(s){switch(s){case 5126:return Jm;case 35664:return Qm;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return r_;case 5124:case 35670:return s_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return u_;case 36295:return h_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return __}}class x_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=$m(t.type)}}class v_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=g_(t.type)}}class M_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function ql(s,e){s.seq.push(e),s.map[e.id]=e}function y_(s,e,t){const n=s.name,i=n.length;for(Ea.lastIndex=0;;){const r=Ea.exec(n),a=Ea.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ql(t,c===void 0?new x_(o,s,e):new v_(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new M_(o),ql(t,h)),t=h}}}class bs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);y_(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Yl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let S_=0;function E_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function b_(s){switch(s){case xn:return["Linear","( value )"];case Ae:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function jl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+E_(s.getShaderSource(e),a)}else return i}function T_(s,e){const t=b_(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function w_(s,e){let t;switch(e){case Bh:t="Linear";break;case zh:t="Reinhard";break;case kh:t="OptimizedCineon";break;case Gh:t="ACESFilmic";break;case Hh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function A_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cr).join(`
`)}function R_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function C_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Cr(s){return s!==""}function Kl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(s){return s.replace(P_,L_)}function L_(s,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ya(t)}const D_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(s){return s.replace(D_,I_)}function I_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function U_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_h?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function O_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case or:case lr:e="ENVMAP_TYPE_CUBE";break;case Bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function N_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fc:e="ENVMAP_BLENDING_MULTIPLY";break;case Fh:e="ENVMAP_BLENDING_MIX";break;case Nh:e="ENVMAP_BLENDING_ADD";break}return e}function B_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function z_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=U_(t),c=O_(t),u=F_(t),h=N_(t),f=B_(t),p=t.isWebGL2?"":A_(t),v=R_(r),_=i.createProgram();let m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[v].filter(Cr).join(`
`),m.length>0&&(m+=`
`),d=[p,v].filter(Cr).join(`
`),d.length>0&&(d+=`
`)):(m=[Jl(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),d=[p,Jl(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Dn?w_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,T_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=Ya(a),a=Kl(a,t),a=Zl(a,t),o=Ya(o),o=Kl(o,t),o=Zl(o,t),a=$l(a),o=$l(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=y+m+a,b=y+d+o,x=Yl(i,i.VERTEX_SHADER,M),E=Yl(i,i.FRAGMENT_SHADER,b);if(i.attachShader(_,x),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const g=i.getProgramInfoLog(_).trim(),S=i.getShaderInfoLog(x).trim(),D=i.getShaderInfoLog(E).trim();let k=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,x,E);else{const N=jl(i,x,"vertex"),z=jl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+g+`
`+N+`
`+z)}else g!==""?console.warn("THREE.WebGLProgram: Program Info Log:",g):(S===""||D==="")&&(O=!1);O&&(this.diagnostics={runnable:k,programLog:g,vertexShader:{log:S,prefix:m},fragmentShader:{log:D,prefix:d}})}i.deleteShader(x),i.deleteShader(E);let w;this.getUniforms=function(){return w===void 0&&(w=new bs(i,_)),w};let C;return this.getAttributes=function(){return C===void 0&&(C=C_(i,_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=S_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=E,this}let k_=0;class G_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new H_(e),t.set(e,n)),n}}class H_{constructor(e){this.id=k_++,this.code=e,this.usedTimes=0}}function V_(s,e,t,n,i,r,a){const o=new mo,l=new G_,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return g===1?"uv1":g===2?"uv2":g===3?"uv3":"uv"}function m(g,S,D,k,O){const N=k.fog,z=O.geometry,K=g.isMeshStandardMaterial?k.environment:null,H=(g.isMeshStandardMaterial?t:e).get(g.envMap||K),V=H&&H.mapping===Bs?H.image.height:null,Q=v[g.type];g.precision!==null&&(p=i.getMaxPrecision(g.precision),p!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,pe=J!==void 0?J.length:0;let ie=0;z.morphAttributes.position!==void 0&&(ie=1),z.morphAttributes.normal!==void 0&&(ie=2),z.morphAttributes.color!==void 0&&(ie=3);let W,Z,re,ce;if(Q){const Ge=dn[Q];W=Ge.vertexShader,Z=Ge.fragmentShader}else W=g.vertexShader,Z=g.fragmentShader,l.update(g),re=l.getVertexShaderID(g),ce=l.getFragmentShaderID(g);const U=s.getRenderTarget(),be=O.isInstancedMesh===!0,Ee=!!g.map,se=!!g.matcap,Me=!!H,Be=!!g.aoMap,ge=!!g.lightMap,Re=!!g.bumpMap,Ke=!!g.normalMap,qe=!!g.displacementMap,nt=!!g.emissiveMap,$e=!!g.metalnessMap,Ne=!!g.roughnessMap,We=g.clearcoat>0,pt=g.iridescence>0,R=g.sheen>0,T=g.transmission>0,X=We&&!!g.clearcoatMap,ee=We&&!!g.clearcoatNormalMap,ne=We&&!!g.clearcoatRoughnessMap,oe=pt&&!!g.iridescenceMap,L=pt&&!!g.iridescenceThicknessMap,$=R&&!!g.sheenColorMap,G=R&&!!g.sheenRoughnessMap,le=!!g.specularMap,fe=!!g.specularColorMap,me=!!g.specularIntensityMap,ue=T&&!!g.transmissionMap,de=T&&!!g.thicknessMap,Te=!!g.gradientMap,Le=!!g.alphaMap,Je=g.alphaTest>0,I=!!g.extensions,q=!!z.attributes.uv1,te=!!z.attributes.uv2,he=!!z.attributes.uv3;return{isWebGL2:u,shaderID:Q,shaderName:g.type,vertexShader:W,fragmentShader:Z,defines:g.defines,customVertexShaderID:re,customFragmentShaderID:ce,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,instancing:be,instancingColor:be&&O.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:U===null?s.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:xn,map:Ee,matcap:se,envMap:Me,envMapMode:Me&&H.mapping,envMapCubeUVHeight:V,aoMap:Be,lightMap:ge,bumpMap:Re,normalMap:Ke,displacementMap:f&&qe,emissiveMap:nt,normalMapObjectSpace:Ke&&g.normalMapType===cf,normalMapTangentSpace:Ke&&g.normalMapType===lf,metalnessMap:$e,roughnessMap:Ne,clearcoat:We,clearcoatMap:X,clearcoatNormalMap:ee,clearcoatRoughnessMap:ne,iridescence:pt,iridescenceMap:oe,iridescenceThicknessMap:L,sheen:R,sheenColorMap:$,sheenRoughnessMap:G,specularMap:le,specularColorMap:fe,specularIntensityMap:me,transmission:T,transmissionMap:ue,thicknessMap:de,gradientMap:Te,opaque:g.transparent===!1&&g.blending===tr,alphaMap:Le,alphaTest:Je,combine:g.combine,mapUv:Ee&&_(g.map.channel),aoMapUv:Be&&_(g.aoMap.channel),lightMapUv:ge&&_(g.lightMap.channel),bumpMapUv:Re&&_(g.bumpMap.channel),normalMapUv:Ke&&_(g.normalMap.channel),displacementMapUv:qe&&_(g.displacementMap.channel),emissiveMapUv:nt&&_(g.emissiveMap.channel),metalnessMapUv:$e&&_(g.metalnessMap.channel),roughnessMapUv:Ne&&_(g.roughnessMap.channel),clearcoatMapUv:X&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:L&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:$&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:G&&_(g.sheenRoughnessMap.channel),specularMapUv:le&&_(g.specularMap.channel),specularColorMapUv:fe&&_(g.specularColorMap.channel),specularIntensityMapUv:me&&_(g.specularIntensityMap.channel),transmissionMapUv:ue&&_(g.transmissionMap.channel),thicknessMapUv:de&&_(g.thicknessMap.channel),alphaMapUv:Le&&_(g.alphaMap.channel),vertexTangents:Ke&&!!z.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:q,vertexUv2s:te,vertexUv3s:he,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Ee||Le),fog:!!N,useFog:g.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:g.toneMapped?s.toneMapping:Dn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Pn,flipSided:g.side===Lt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:I&&g.extensions.derivatives===!0,extensionFragDepth:I&&g.extensions.fragDepth===!0,extensionDrawBuffers:I&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&g.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){const S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(const D in g.defines)S.push(D),S.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(y(S,g),M(S,g),S.push(s.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function y(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function M(g,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),g.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),g.push(o.mask)}function b(g){const S=v[g.type];let D;if(S){const k=dn[S];D=Df.clone(k.uniforms)}else D=g.uniforms;return D}function x(g,S){let D;for(let k=0,O=c.length;k<O;k++){const N=c[k];if(N.cacheKey===S){D=N,++D.usedTimes;break}}return D===void 0&&(D=new z_(s,S,g,r),c.push(D)),D}function E(g){if(--g.usedTimes===0){const S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),g.destroy()}}function w(g){l.remove(g)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:x,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:C}}function W_(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function X_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ql(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ec(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,p,v,_,m){let d=s[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:_,group:m},s[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function o(h,f,p,v,_,m){const d=a(h,f,p,v,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(h,f,p,v,_,m){const d=a(h,f,p,v,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||X_),n.length>1&&n.sort(f||Ql),i.length>1&&i.sort(f||Ql)}function u(){for(let h=e,f=s.length;h<f;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function q_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new ec,s.set(n,[a])):i>=r.length?(a=new ec,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Y_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function j_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let K_=0;function Z_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $_(s,e){const t=new Y_,n=j_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new P);const r=new P,a=new tt,o=new tt;function l(u,h){let f=0,p=0,v=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let _=0,m=0,d=0,y=0,M=0,b=0,x=0,E=0,w=0,C=0;u.sort(Z_);const g=h===!0?Math.PI:1;for(let D=0,k=u.length;D<k;D++){const O=u[D],N=O.color,z=O.intensity,K=O.distance,H=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=N.r*z*g,p+=N.g*z*g,v+=N.b*z*g;else if(O.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(O.sh.coefficients[V],z);else if(O.isDirectionalLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*g),O.castShadow){const Q=O.shadow,J=n.get(O);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=H,i.directionalShadowMatrix[_]=O.shadow.matrix,b++}i.directional[_]=V,_++}else if(O.isSpotLight){const V=t.get(O);V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(N).multiplyScalar(z*g),V.distance=K,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,i.spot[d]=V;const Q=O.shadow;if(O.map&&(i.spotLightMap[w]=O.map,w++,Q.updateMatrices(O),O.castShadow&&C++),i.spotLightMatrix[d]=Q.matrix,O.castShadow){const J=n.get(O);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,i.spotShadow[d]=J,i.spotShadowMap[d]=H,E++}d++}else if(O.isRectAreaLight){const V=t.get(O);V.color.copy(N).multiplyScalar(z),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),i.rectArea[y]=V,y++}else if(O.isPointLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*g),V.distance=O.distance,V.decay=O.decay,O.castShadow){const Q=O.shadow,J=n.get(O);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,J.shadowCameraNear=Q.camera.near,J.shadowCameraFar=Q.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=O.shadow.matrix,x++}i.point[m]=V,m++}else if(O.isHemisphereLight){const V=t.get(O);V.skyColor.copy(O.color).multiplyScalar(z*g),V.groundColor.copy(O.groundColor).multiplyScalar(z*g),i.hemi[M]=V,M++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=v;const S=i.hash;(S.directionalLength!==_||S.pointLength!==m||S.spotLength!==d||S.rectAreaLength!==y||S.hemiLength!==M||S.numDirectionalShadows!==b||S.numPointShadows!==x||S.numSpotShadows!==E||S.numSpotMaps!==w)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=y,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,S.directionalLength=_,S.pointLength=m,S.spotLength=d,S.rectAreaLength=y,S.hemiLength=M,S.numDirectionalShadows=b,S.numPointShadows=x,S.numSpotShadows=E,S.numSpotMaps=w,i.version=K_++)}function c(u,h){let f=0,p=0,v=0,_=0,m=0;const d=h.matrixWorldInverse;for(let y=0,M=u.length;y<M;y++){const b=u[y];if(b.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),f++}else if(b.isSpotLight){const x=i.spot[v];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),v++}else if(b.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(d),o.identity(),a.copy(b.matrixWorld),a.premultiply(d),o.extractRotation(a),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){const x=i.hemi[m];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function tc(s,e){const t=new $_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function J_(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new tc(s,e),t.set(r,[l])):a>=o.length?(l=new tc(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Q_ extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eg extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ng=`uniform sampler2D shadow_pass;
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
}`;function ig(s,e,t){let n=new $c;const i=new Se,r=new Se,a=new dt,o=new Q_({depthPacking:of}),l=new eg,c={},u=t.maxTextureSize,h={[jn]:Lt,[Lt]:jn,[Pn]:Pn},f=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:tg,fragmentShader:ng}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Dt;v.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ln(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let d=this.type;this.render=function(x,E,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const C=s.getRenderTarget(),g=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Wn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=d!==wn&&this.type===wn,O=d===wn&&this.type!==wn;for(let N=0,z=x.length;N<z;N++){const K=x[N],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const V=H.getFrameExtents();if(i.multiply(V),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/V.x),i.x=r.x*V.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/V.y),i.y=r.y*V.y,H.mapSize.y=r.y)),H.map===null||k===!0||O===!0){const J=this.type!==wn?{minFilter:At,magFilter:At}:{};H.map!==null&&H.map.dispose(),H.map=new yi(i.x,i.y,J),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const Q=H.getViewportCount();for(let J=0;J<Q;J++){const pe=H.getViewport(J);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),D.viewport(a),H.updateMatrices(K,J),n=H.getFrustum(),b(E,w,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===wn&&y(H,w),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(C,g,S)};function y(x,E){const w=e.update(_);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new yi(i.x,i.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,s.setRenderTarget(x.mapPass),s.clear(),s.renderBufferDirect(E,null,w,f,_,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,s.setRenderTarget(x.map),s.clear(),s.renderBufferDirect(E,null,w,p,_,null)}function M(x,E,w,C){let g=null;const S=w.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(S!==void 0)g=S;else if(g=w.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const D=g.uuid,k=E.uuid;let O=c[D];O===void 0&&(O={},c[D]=O);let N=O[k];N===void 0&&(N=g.clone(),O[k]=N),g=N}if(g.visible=E.visible,g.wireframe=E.wireframe,C===wn?g.side=E.shadowSide!==null?E.shadowSide:E.side:g.side=E.shadowSide!==null?E.shadowSide:h[E.side],g.alphaMap=E.alphaMap,g.alphaTest=E.alphaTest,g.map=E.map,g.clipShadows=E.clipShadows,g.clippingPlanes=E.clippingPlanes,g.clipIntersection=E.clipIntersection,g.displacementMap=E.displacementMap,g.displacementScale=E.displacementScale,g.displacementBias=E.displacementBias,g.wireframeLinewidth=E.wireframeLinewidth,g.linewidth=E.linewidth,w.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const D=s.properties.get(g);D.light=w}return g}function b(x,E,w,C,g){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&g===wn)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,x.matrixWorld);const k=e.update(x),O=x.material;if(Array.isArray(O)){const N=k.groups;for(let z=0,K=N.length;z<K;z++){const H=N[z],V=O[H.materialIndex];if(V&&V.visible){const Q=M(x,V,C,g);s.renderBufferDirect(w,null,k,Q,x,H)}}}else if(O.visible){const N=M(x,O,C,g);s.renderBufferDirect(w,null,k,N,x,null)}}const D=x.children;for(let k=0,O=D.length;k<O;k++)b(D[k],E,w,C,g)}}function rg(s,e,t){const n=t.isWebGL2;function i(){let I=!1;const q=new dt;let te=null;const he=new dt(0,0,0,0);return{setMask:function(_e){te!==_e&&!I&&(s.colorMask(_e,_e,_e,_e),te=_e)},setLocked:function(_e){I=_e},setClear:function(_e,Ge,He,mt,On){On===!0&&(_e*=mt,Ge*=mt,He*=mt),q.set(_e,Ge,He,mt),he.equals(q)===!1&&(s.clearColor(_e,Ge,He,mt),he.copy(q))},reset:function(){I=!1,te=null,he.set(-1,0,0,0)}}}function r(){let I=!1,q=null,te=null,he=null;return{setTest:function(_e){_e?U(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(_e){q!==_e&&!I&&(s.depthMask(_e),q=_e)},setFunc:function(_e){if(te!==_e){switch(_e){case Ch:s.depthFunc(s.NEVER);break;case Ph:s.depthFunc(s.ALWAYS);break;case Lh:s.depthFunc(s.LESS);break;case za:s.depthFunc(s.LEQUAL);break;case Dh:s.depthFunc(s.EQUAL);break;case Ih:s.depthFunc(s.GEQUAL);break;case Uh:s.depthFunc(s.GREATER);break;case Oh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=_e}},setLocked:function(_e){I=_e},setClear:function(_e){he!==_e&&(s.clearDepth(_e),he=_e)},reset:function(){I=!1,q=null,te=null,he=null}}}function a(){let I=!1,q=null,te=null,he=null,_e=null,Ge=null,He=null,mt=null,On=null;return{setTest:function(Qe){I||(Qe?U(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(Qe){q!==Qe&&!I&&(s.stencilMask(Qe),q=Qe)},setFunc:function(Qe,Wt,hn){(te!==Qe||he!==Wt||_e!==hn)&&(s.stencilFunc(Qe,Wt,hn),te=Qe,he=Wt,_e=hn)},setOp:function(Qe,Wt,hn){(Ge!==Qe||He!==Wt||mt!==hn)&&(s.stencilOp(Qe,Wt,hn),Ge=Qe,He=Wt,mt=hn)},setLocked:function(Qe){I=Qe},setClear:function(Qe){On!==Qe&&(s.clearStencil(Qe),On=Qe)},reset:function(){I=!1,q=null,te=null,he=null,_e=null,Ge=null,He=null,mt=null,On=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},p={},v=new WeakMap,_=[],m=null,d=!1,y=null,M=null,b=null,x=null,E=null,w=null,C=null,g=!1,S=null,D=null,k=null,O=null,N=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=H>=2);let Q=null,J={};const pe=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),W=new dt().fromArray(pe),Z=new dt().fromArray(ie);function re(I,q,te,he){const _e=new Uint8Array(4),Ge=s.createTexture();s.bindTexture(I,Ge),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<te;He++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(q,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(q+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return Ge}const ce={};ce[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ce[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),U(s.DEPTH_TEST),l.setFunc(za),qe(!1),nt(Go),U(s.CULL_FACE),Re(Wn);function U(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}function be(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}function Ee(I,q){return p[I]!==q?(s.bindFramebuffer(I,q),p[I]=q,n&&(I===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=q),I===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=q)),!0):!1}function se(I,q){let te=_,he=!1;if(I)if(te=v.get(q),te===void 0&&(te=[],v.set(q,te)),I.isWebGLMultipleRenderTargets){const _e=I.texture;if(te.length!==_e.length||te[0]!==s.COLOR_ATTACHMENT0){for(let Ge=0,He=_e.length;Ge<He;Ge++)te[Ge]=s.COLOR_ATTACHMENT0+Ge;te.length=_e.length,he=!0}}else te[0]!==s.COLOR_ATTACHMENT0&&(te[0]=s.COLOR_ATTACHMENT0,he=!0);else te[0]!==s.BACK&&(te[0]=s.BACK,he=!0);he&&(t.isWebGL2?s.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Me(I){return m!==I?(s.useProgram(I),m=I,!0):!1}const Be={[$i]:s.FUNC_ADD,[xh]:s.FUNC_SUBTRACT,[vh]:s.FUNC_REVERSE_SUBTRACT};if(n)Be[Xo]=s.MIN,Be[qo]=s.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(Be[Xo]=I.MIN_EXT,Be[qo]=I.MAX_EXT)}const ge={[Mh]:s.ZERO,[yh]:s.ONE,[Sh]:s.SRC_COLOR,[Uc]:s.SRC_ALPHA,[Rh]:s.SRC_ALPHA_SATURATE,[wh]:s.DST_COLOR,[bh]:s.DST_ALPHA,[Eh]:s.ONE_MINUS_SRC_COLOR,[Oc]:s.ONE_MINUS_SRC_ALPHA,[Ah]:s.ONE_MINUS_DST_COLOR,[Th]:s.ONE_MINUS_DST_ALPHA};function Re(I,q,te,he,_e,Ge,He,mt){if(I===Wn){d===!0&&(be(s.BLEND),d=!1);return}if(d===!1&&(U(s.BLEND),d=!0),I!==gh){if(I!==y||mt!==g){if((M!==$i||E!==$i)&&(s.blendEquation(s.FUNC_ADD),M=$i,E=$i),mt)switch(I){case tr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ho:s.blendFunc(s.ONE,s.ONE);break;case Vo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case tr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ho:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,x=null,w=null,C=null,y=I,g=mt}return}_e=_e||q,Ge=Ge||te,He=He||he,(q!==M||_e!==E)&&(s.blendEquationSeparate(Be[q],Be[_e]),M=q,E=_e),(te!==b||he!==x||Ge!==w||He!==C)&&(s.blendFuncSeparate(ge[te],ge[he],ge[Ge],ge[He]),b=te,x=he,w=Ge,C=He),y=I,g=!1}function Ke(I,q){I.side===Pn?be(s.CULL_FACE):U(s.CULL_FACE);let te=I.side===Lt;q&&(te=!te),qe(te),I.blending===tr&&I.transparent===!1?Re(Wn):Re(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const he=I.stencilWrite;c.setTest(he),he&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?U(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(I){S!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),S=I)}function nt(I){I!==ph?(U(s.CULL_FACE),I!==D&&(I===Go?s.cullFace(s.BACK):I===mh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),D=I}function $e(I){I!==k&&(K&&s.lineWidth(I),k=I)}function Ne(I,q,te){I?(U(s.POLYGON_OFFSET_FILL),(O!==q||N!==te)&&(s.polygonOffset(q,te),O=q,N=te)):be(s.POLYGON_OFFSET_FILL)}function We(I){I?U(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function pt(I){I===void 0&&(I=s.TEXTURE0+z-1),Q!==I&&(s.activeTexture(I),Q=I)}function R(I,q,te){te===void 0&&(Q===null?te=s.TEXTURE0+z-1:te=Q);let he=J[te];he===void 0&&(he={type:void 0,texture:void 0},J[te]=he),(he.type!==I||he.texture!==q)&&(Q!==te&&(s.activeTexture(te),Q=te),s.bindTexture(I,q||ce[I]),he.type=I,he.texture=q)}function T(){const I=J[Q];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(I){W.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),W.copy(I))}function de(I){Z.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Z.copy(I))}function Te(I,q){let te=h.get(q);te===void 0&&(te=new WeakMap,h.set(q,te));let he=te.get(I);he===void 0&&(he=s.getUniformBlockIndex(q,I.name),te.set(I,he))}function Le(I,q){const he=h.get(q).get(I);u.get(q)!==he&&(s.uniformBlockBinding(q,he,I.__bindingPointIndex),u.set(q,he))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Q=null,J={},p={},v=new WeakMap,_=[],m=null,d=!1,y=null,M=null,b=null,x=null,E=null,w=null,C=null,g=!1,S=null,D=null,k=null,O=null,N=null,W.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:U,disable:be,bindFramebuffer:Ee,drawBuffers:se,useProgram:Me,setBlending:Re,setMaterial:Ke,setFlipSided:qe,setCullFace:nt,setLineWidth:$e,setPolygonOffset:Ne,setScissorTest:We,activeTexture:pt,bindTexture:R,unbindTexture:T,compressedTexImage2D:X,compressedTexImage3D:ee,texImage2D:fe,texImage3D:me,updateUBOMapping:Te,uniformBlockBinding:Le,texStorage2D:G,texStorage3D:le,texSubImage2D:ne,texSubImage3D:oe,compressedTexSubImage2D:L,compressedTexSubImage3D:$,scissor:ue,viewport:de,reset:Je}}function sg(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,T){return d?new OffscreenCanvas(R,T):Br("canvas")}function M(R,T,X,ee){let ne=1;if((R.width>ee||R.height>ee)&&(ne=ee/Math.max(R.width,R.height)),ne<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const oe=T?ff:Math.floor,L=oe(ne*R.width),$=oe(ne*R.height);_===void 0&&(_=y(L,$));const G=X?y(L,$):_;return G.width=L,G.height=$,G.getContext("2d").drawImage(R,0,0,L,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+L+"x"+$+")."),G}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function b(R){return xl(R.width)&&xl(R.height)}function x(R){return o?!1:R.wrapS!==on||R.wrapT!==on||R.minFilter!==At&&R.minFilter!==jt}function E(R,T){return R.generateMipmaps&&T&&R.minFilter!==At&&R.minFilter!==jt}function w(R){s.generateMipmap(R)}function C(R,T,X,ee,ne=!1){if(o===!1)return T;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=T;return T===s.RED&&(X===s.FLOAT&&(oe=s.R32F),X===s.HALF_FLOAT&&(oe=s.R16F),X===s.UNSIGNED_BYTE&&(oe=s.R8)),T===s.RG&&(X===s.FLOAT&&(oe=s.RG32F),X===s.HALF_FLOAT&&(oe=s.RG16F),X===s.UNSIGNED_BYTE&&(oe=s.RG8)),T===s.RGBA&&(X===s.FLOAT&&(oe=s.RGBA32F),X===s.HALF_FLOAT&&(oe=s.RGBA16F),X===s.UNSIGNED_BYTE&&(oe=ee===Ae&&ne===!1?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)),(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function g(R,T,X){return E(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==At&&R.minFilter!==jt?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function S(R){return R===At||R===Yo||R===Ks?s.NEAREST:s.LINEAR}function D(R){const T=R.target;T.removeEventListener("dispose",D),O(T),T.isVideoTexture&&v.delete(T)}function k(R){const T=R.target;T.removeEventListener("dispose",k),z(T)}function O(R){const T=n.get(R);if(T.__webglInit===void 0)return;const X=R.source,ee=m.get(X);if(ee){const ne=ee[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&N(R),Object.keys(ee).length===0&&m.delete(X)}n.remove(R)}function N(R){const T=n.get(R);s.deleteTexture(T.__webglTexture);const X=R.source,ee=m.get(X);delete ee[T.__cacheKey],a.memory.textures--}function z(R){const T=R.texture,X=n.get(R),ee=n.get(T);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)s.deleteFramebuffer(X.__webglFramebuffer[ne]),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[ne]);else{if(s.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ne=0;ne<X.__webglColorRenderbuffer.length;ne++)X.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(X.__webglColorRenderbuffer[ne]);X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,oe=T.length;ne<oe;ne++){const L=n.get(T[ne]);L.__webglTexture&&(s.deleteTexture(L.__webglTexture),a.memory.textures--),n.remove(T[ne])}n.remove(T),n.remove(R)}let K=0;function H(){K=0}function V(){const R=K;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),K+=1,R}function Q(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function J(R,T){const X=n.get(R);if(R.isVideoTexture&&We(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(X,R,T);return}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+T)}function pe(R,T){const X=n.get(R);if(R.version>0&&X.__version!==R.version){be(X,R,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+T)}function ie(R,T){const X=n.get(R);if(R.version>0&&X.__version!==R.version){be(X,R,T);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+T)}function W(R,T){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Ee(X,R,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+T)}const Z={[Ha]:s.REPEAT,[on]:s.CLAMP_TO_EDGE,[Va]:s.MIRRORED_REPEAT},re={[At]:s.NEAREST,[Yo]:s.NEAREST_MIPMAP_NEAREST,[Ks]:s.NEAREST_MIPMAP_LINEAR,[jt]:s.LINEAR,[Vh]:s.LINEAR_MIPMAP_NEAREST,[Fr]:s.LINEAR_MIPMAP_LINEAR};function ce(R,T,X){if(X?(s.texParameteri(R,s.TEXTURE_WRAP_S,Z[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Z[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Z[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,re[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,re[T.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==on||T.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,S(T.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,S(T.minFilter)),T.minFilter!==At&&T.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===At||T.minFilter!==Ks&&T.minFilter!==Fr||T.type===fi&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Nr&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(R,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function U(R,T){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",D));const ee=T.source;let ne=m.get(ee);ne===void 0&&(ne={},m.set(ee,ne));const oe=Q(T);if(oe!==R.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ne[oe].usedTimes++;const L=ne[R.__cacheKey];L!==void 0&&(ne[R.__cacheKey].usedTimes--,L.usedTimes===0&&N(T)),R.__cacheKey=oe,R.__webglTexture=ne[oe].texture}return X}function be(R,T,X){let ee=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=s.TEXTURE_3D);const ne=U(R,T),oe=T.source;t.bindTexture(ee,R.__webglTexture,s.TEXTURE0+X);const L=n.get(oe);if(oe.version!==L.__version||ne===!0){t.activeTexture(s.TEXTURE0+X),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const $=x(T)&&b(T.image)===!1;let G=M(T.image,$,!1,u);G=pt(T,G);const le=b(G)||o,fe=r.convert(T.format,T.colorSpace);let me=r.convert(T.type),ue=C(T.internalFormat,fe,me,T.colorSpace);ce(ee,T,le);let de;const Te=T.mipmaps,Le=o&&T.isVideoTexture!==!0,Je=L.__version===void 0||ne===!0,I=g(T,G,le);if(T.isDepthTexture)ue=s.DEPTH_COMPONENT,o?T.type===fi?ue=s.DEPTH_COMPONENT32F:T.type===hi?ue=s.DEPTH_COMPONENT24:T.type===nr?ue=s.DEPTH24_STENCIL8:ue=s.DEPTH_COMPONENT16:T.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===pi&&ue===s.DEPTH_COMPONENT&&T.type!==Bc&&T.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=hi,me=r.convert(T.type)),T.format===cr&&ue===s.DEPTH_COMPONENT&&(ue=s.DEPTH_STENCIL,T.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=nr,me=r.convert(T.type))),Je&&(Le?t.texStorage2D(s.TEXTURE_2D,1,ue,G.width,G.height):t.texImage2D(s.TEXTURE_2D,0,ue,G.width,G.height,0,fe,me,null));else if(T.isDataTexture)if(Te.length>0&&le){Le&&Je&&t.texStorage2D(s.TEXTURE_2D,I,ue,Te[0].width,Te[0].height);for(let q=0,te=Te.length;q<te;q++)de=Te[q],Le?t.texSubImage2D(s.TEXTURE_2D,q,0,0,de.width,de.height,fe,me,de.data):t.texImage2D(s.TEXTURE_2D,q,ue,de.width,de.height,0,fe,me,de.data);T.generateMipmaps=!1}else Le?(Je&&t.texStorage2D(s.TEXTURE_2D,I,ue,G.width,G.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,G.width,G.height,fe,me,G.data)):t.texImage2D(s.TEXTURE_2D,0,ue,G.width,G.height,0,fe,me,G.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Le&&Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,I,ue,Te[0].width,Te[0].height,G.depth);for(let q=0,te=Te.length;q<te;q++)de=Te[q],T.format!==ln?fe!==null?Le?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,de.width,de.height,G.depth,fe,de.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,ue,de.width,de.height,G.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,de.width,de.height,G.depth,fe,me,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,ue,de.width,de.height,G.depth,0,fe,me,de.data)}else{Le&&Je&&t.texStorage2D(s.TEXTURE_2D,I,ue,Te[0].width,Te[0].height);for(let q=0,te=Te.length;q<te;q++)de=Te[q],T.format!==ln?fe!==null?Le?t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(s.TEXTURE_2D,q,ue,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(s.TEXTURE_2D,q,0,0,de.width,de.height,fe,me,de.data):t.texImage2D(s.TEXTURE_2D,q,ue,de.width,de.height,0,fe,me,de.data)}else if(T.isDataArrayTexture)Le?(Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,I,ue,G.width,G.height,G.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,fe,me,G.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ue,G.width,G.height,G.depth,0,fe,me,G.data);else if(T.isData3DTexture)Le?(Je&&t.texStorage3D(s.TEXTURE_3D,I,ue,G.width,G.height,G.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,fe,me,G.data)):t.texImage3D(s.TEXTURE_3D,0,ue,G.width,G.height,G.depth,0,fe,me,G.data);else if(T.isFramebufferTexture){if(Je)if(Le)t.texStorage2D(s.TEXTURE_2D,I,ue,G.width,G.height);else{let q=G.width,te=G.height;for(let he=0;he<I;he++)t.texImage2D(s.TEXTURE_2D,he,ue,q,te,0,fe,me,null),q>>=1,te>>=1}}else if(Te.length>0&&le){Le&&Je&&t.texStorage2D(s.TEXTURE_2D,I,ue,Te[0].width,Te[0].height);for(let q=0,te=Te.length;q<te;q++)de=Te[q],Le?t.texSubImage2D(s.TEXTURE_2D,q,0,0,fe,me,de):t.texImage2D(s.TEXTURE_2D,q,ue,fe,me,de);T.generateMipmaps=!1}else Le?(Je&&t.texStorage2D(s.TEXTURE_2D,I,ue,G.width,G.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,me,G)):t.texImage2D(s.TEXTURE_2D,0,ue,fe,me,G);E(T,le)&&w(ee),L.__version=oe.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Ee(R,T,X){if(T.image.length!==6)return;const ee=U(R,T),ne=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+X);const oe=n.get(ne);if(ne.version!==oe.__version||ee===!0){t.activeTexture(s.TEXTURE0+X),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const L=T.isCompressedTexture||T.image[0].isCompressedTexture,$=T.image[0]&&T.image[0].isDataTexture,G=[];for(let q=0;q<6;q++)!L&&!$?G[q]=M(T.image[q],!1,!0,c):G[q]=$?T.image[q].image:T.image[q],G[q]=pt(T,G[q]);const le=G[0],fe=b(le)||o,me=r.convert(T.format,T.colorSpace),ue=r.convert(T.type),de=C(T.internalFormat,me,ue,T.colorSpace),Te=o&&T.isVideoTexture!==!0,Le=oe.__version===void 0||ee===!0;let Je=g(T,le,fe);ce(s.TEXTURE_CUBE_MAP,T,fe);let I;if(L){Te&&Le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Je,de,le.width,le.height);for(let q=0;q<6;q++){I=G[q].mipmaps;for(let te=0;te<I.length;te++){const he=I[te];T.format!==ln?me!==null?Te?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te,0,0,he.width,he.height,me,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te,de,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te,0,0,he.width,he.height,me,ue,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te,de,he.width,he.height,0,me,ue,he.data)}}}else{I=T.mipmaps,Te&&Le&&(I.length>0&&Je++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Je,de,G[0].width,G[0].height));for(let q=0;q<6;q++)if($){Te?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,G[q].width,G[q].height,me,ue,G[q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,de,G[q].width,G[q].height,0,me,ue,G[q].data);for(let te=0;te<I.length;te++){const _e=I[te].image[q].image;Te?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te+1,0,0,_e.width,_e.height,me,ue,_e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te+1,de,_e.width,_e.height,0,me,ue,_e.data)}}else{Te?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,me,ue,G[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,de,me,ue,G[q]);for(let te=0;te<I.length;te++){const he=I[te];Te?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te+1,0,0,me,ue,he.image[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te+1,de,me,ue,he.image[q])}}}E(T,fe)&&w(s.TEXTURE_CUBE_MAP),oe.__version=ne.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function se(R,T,X,ee,ne){const oe=r.convert(X.format,X.colorSpace),L=r.convert(X.type),$=C(X.internalFormat,oe,L,X.colorSpace);n.get(T).__hasExternalTextures||(ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,$,T.width,T.height,T.depth,0,oe,L,null):t.texImage2D(ne,0,$,T.width,T.height,0,oe,L,null)),t.bindFramebuffer(s.FRAMEBUFFER,R),Ne(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,ne,n.get(X).__webglTexture,0,$e(T)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,ne,n.get(X).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(R,T,X){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let ee=s.DEPTH_COMPONENT16;if(X||Ne(T)){const ne=T.depthTexture;ne&&ne.isDepthTexture&&(ne.type===fi?ee=s.DEPTH_COMPONENT32F:ne.type===hi&&(ee=s.DEPTH_COMPONENT24));const oe=$e(T);Ne(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,ee,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,ee,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,ee,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const ee=$e(T);X&&Ne(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,T.width,T.height):Ne(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const ee=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0;ne<ee.length;ne++){const oe=ee[ne],L=r.convert(oe.format,oe.colorSpace),$=r.convert(oe.type),G=C(oe.internalFormat,L,$,oe.colorSpace),le=$e(T);X&&Ne(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,G,T.width,T.height):Ne(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,G,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,G,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J(T.depthTexture,0);const ee=n.get(T.depthTexture).__webglTexture,ne=$e(T);if(T.depthTexture.format===pi)Ne(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(T.depthTexture.format===cr)Ne(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ge(R){const T=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Be(T.__webglFramebuffer,R)}else if(X){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]=s.createRenderbuffer(),Me(T.__webglDepthbuffer[ee],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),Me(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(R,T,X){const ee=n.get(R);T!==void 0&&se(ee.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),X!==void 0&&ge(R)}function Ke(R){const T=R.texture,X=n.get(R),ee=n.get(T);R.addEventListener("dispose",k),R.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=T.version,a.memory.textures++);const ne=R.isWebGLCubeRenderTarget===!0,oe=R.isWebGLMultipleRenderTargets===!0,L=b(R)||o;if(ne){X.__webglFramebuffer=[];for(let $=0;$<6;$++)X.__webglFramebuffer[$]=s.createFramebuffer()}else{if(X.__webglFramebuffer=s.createFramebuffer(),oe)if(i.drawBuffers){const $=R.texture;for(let G=0,le=$.length;G<le;G++){const fe=n.get($[G]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ne(R)===!1){const $=oe?T:[T];X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let G=0;G<$.length;G++){const le=$[G];X.__webglColorRenderbuffer[G]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[G]);const fe=r.convert(le.format,le.colorSpace),me=r.convert(le.type),ue=C(le.internalFormat,fe,me,le.colorSpace,R.isXRRenderTarget===!0),de=$e(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,ue,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+G,s.RENDERBUFFER,X.__webglColorRenderbuffer[G])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Me(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),ce(s.TEXTURE_CUBE_MAP,T,L);for(let $=0;$<6;$++)se(X.__webglFramebuffer[$],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$);E(T,L)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const $=R.texture;for(let G=0,le=$.length;G<le;G++){const fe=$[G],me=n.get(fe);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),ce(s.TEXTURE_2D,fe,L),se(X.__webglFramebuffer,R,fe,s.COLOR_ATTACHMENT0+G,s.TEXTURE_2D),E(fe,L)&&w(s.TEXTURE_2D)}t.unbindTexture()}else{let $=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?$=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture($,ee.__webglTexture),ce($,T,L),se(X.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,$),E(T,L)&&w($),t.unbindTexture()}R.depthBuffer&&ge(R)}function qe(R){const T=b(R)||o,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ee=0,ne=X.length;ee<ne;ee++){const oe=X[ee];if(E(oe,T)){const L=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,$=n.get(oe).__webglTexture;t.bindTexture(L,$),w(L),t.unbindTexture()}}}function nt(R){if(o&&R.samples>0&&Ne(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,ee=R.height;let ne=s.COLOR_BUFFER_BIT;const oe=[],L=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=n.get(R),G=R.isWebGLMultipleRenderTargets===!0;if(G)for(let le=0;le<T.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,$.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let le=0;le<T.length;le++){oe.push(s.COLOR_ATTACHMENT0+le),R.depthBuffer&&oe.push(L);const fe=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(fe===!1&&(R.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),G&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$.__webglColorRenderbuffer[le]),fe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[L]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[L])),G){const me=n.get(T[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,me,0)}s.blitFramebuffer(0,0,X,ee,0,0,X,ee,ne,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),G)for(let le=0;le<T.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,$.__webglColorRenderbuffer[le]);const fe=n.get(T[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,$.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}}function $e(R){return Math.min(h,R.samples)}function Ne(R){const T=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function We(R){const T=a.render.frame;v.get(R)!==T&&(v.set(R,T),R.update())}function pt(R,T){const X=R.colorSpace,ee=R.format,ne=R.type;return R.isCompressedTexture===!0||R.format===Xa||X!==xn&&X!==_i&&(X===Ae?o===!1?e.has("EXT_sRGB")===!0&&ee===ln?(R.format=Xa,R.minFilter=jt,R.generateMipmaps=!1):T=Hc.sRGBToLinear(T):(ee!==ln||ne!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=pe,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=Re,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Ne}function ag(s,e,t){const n=t.isWebGL2;function i(r,a=_i){let o;if(r===Mi)return s.UNSIGNED_BYTE;if(r===Yh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===jh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Wh)return s.BYTE;if(r===Xh)return s.SHORT;if(r===Bc)return s.UNSIGNED_SHORT;if(r===qh)return s.INT;if(r===hi)return s.UNSIGNED_INT;if(r===fi)return s.FLOAT;if(r===Nr)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Kh)return s.ALPHA;if(r===ln)return s.RGBA;if(r===Zh)return s.LUMINANCE;if(r===$h)return s.LUMINANCE_ALPHA;if(r===pi)return s.DEPTH_COMPONENT;if(r===cr)return s.DEPTH_STENCIL;if(r===Xa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Jh)return s.RED;if(r===Qh)return s.RED_INTEGER;if(r===ef)return s.RG;if(r===tf)return s.RG_INTEGER;if(r===nf)return s.RGBA_INTEGER;if(r===Zs||r===$s||r===Js||r===Qs)if(a===Ae)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Zs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Zs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$s)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Js)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jo||r===Ko||r===Zo||r===$o)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===jo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ko)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$o)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Jo||r===Qo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Jo)return a===Ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Qo)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===el||r===tl||r===nl||r===il||r===rl||r===sl||r===al||r===ol||r===ll||r===cl||r===ul||r===hl||r===fl||r===dl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===el)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===tl)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nl)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===il)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rl)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sl)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===al)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ol)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ll)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cl)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ul)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hl)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fl)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dl)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ea)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ea)return a===Ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===sf||r===pl||r===ml||r===_l)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===ea)return o.COMPRESSED_RED_RGTC1_EXT;if(r===pl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ml)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_l)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===nr?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class og extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ms extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lg={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class cg extends Ct{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:pi,u!==pi&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pi&&(n=hi),n===void 0&&u===cr&&(n=nr),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1}}class ug extends bi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,v=null;const _=t.getContextAttributes();let m=null,d=null;const y=[],M=[],b=new Set,x=new Map,E=new an;E.layers.enable(1),E.viewport=new dt;const w=new an;w.layers.enable(2),w.viewport=new dt;const C=[E,w],g=new og;g.layers.enable(1),g.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=y[W];return Z===void 0&&(Z=new ba,y[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=y[W];return Z===void 0&&(Z=new ba,y[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=y[W];return Z===void 0&&(Z=new ba,y[W]=Z),Z.getHandSpace()};function k(W){const Z=M.indexOf(W.inputSource);if(Z===-1)return;const re=y[Z];re!==void 0&&(re.update(W.inputSource,W.frame,c||a),re.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",N);for(let W=0;W<y.length;W++){const Z=M[W];Z!==null&&(M[W]=null,y[W].disconnect(Z))}S=null,D=null,e.setRenderTarget(m),p=null,f=null,h=null,i=null,d=null,ie.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",O),i.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:p}),d=new yi(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,re=null,ce=null;_.depth&&(ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?cr:pi,re=_.stencil?nr:hi);const U={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(U),i.updateRenderState({layers:[f]}),d=new yi(f.textureWidth,f.textureHeight,{format:ln,type:Mi,depthTexture:new cg(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const be=e.properties.get(d);be.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(W){for(let Z=0;Z<W.removed.length;Z++){const re=W.removed[Z],ce=M.indexOf(re);ce>=0&&(M[ce]=null,y[ce].disconnect(re))}for(let Z=0;Z<W.added.length;Z++){const re=W.added[Z];let ce=M.indexOf(re);if(ce===-1){for(let be=0;be<y.length;be++)if(be>=M.length){M.push(re),ce=be;break}else if(M[be]===null){M[be]=re,ce=be;break}if(ce===-1)break}const U=y[ce];U&&U.connect(re)}}const z=new P,K=new P;function H(W,Z,re){z.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(re.matrixWorld);const ce=z.distanceTo(K),U=Z.projectionMatrix.elements,be=re.projectionMatrix.elements,Ee=U[14]/(U[10]-1),se=U[14]/(U[10]+1),Me=(U[9]+1)/U[5],Be=(U[9]-1)/U[5],ge=(U[8]-1)/U[0],Re=(be[8]+1)/be[0],Ke=Ee*ge,qe=Ee*Re,nt=ce/(-ge+Re),$e=nt*-ge;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX($e),W.translateZ(nt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Ne=Ee+nt,We=se+nt,pt=Ke-$e,R=qe+(ce-$e),T=Me*se/We*Ne,X=Be*se/We*Ne;W.projectionMatrix.makePerspective(pt,R,T,X,Ne,We),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function V(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;g.near=w.near=E.near=W.near,g.far=w.far=E.far=W.far,(S!==g.near||D!==g.far)&&(i.updateRenderState({depthNear:g.near,depthFar:g.far}),S=g.near,D=g.far);const Z=W.parent,re=g.cameras;V(g,Z);for(let ce=0;ce<re.length;ce++)V(re[ce],Z);re.length===2?H(g,E,w):g.projectionMatrix.copy(E.projectionMatrix),Q(W,g,Z)};function Q(W,Z,re){re===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(re.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const ce=W.children;for(let U=0,be=ce.length;U<be;U++)ce[U].updateMatrixWorld(!0);W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=qa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.getPlanes=function(){return b};let J=null;function pe(W,Z){if(u=Z.getViewerPose(c||a),v=Z,u!==null){const re=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ce=!1;re.length!==g.cameras.length&&(g.cameras.length=0,ce=!0);for(let U=0;U<re.length;U++){const be=re[U];let Ee=null;if(p!==null)Ee=p.getViewport(be);else{const Me=h.getViewSubImage(f,be);Ee=Me.viewport,U===0&&(e.setRenderTargetTextures(d,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(d))}let se=C[U];se===void 0&&(se=new an,se.layers.enable(U),se.viewport=new dt,C[U]=se),se.matrix.fromArray(be.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(be.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),U===0&&(g.matrix.copy(se.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ce===!0&&g.cameras.push(se)}}for(let re=0;re<y.length;re++){const ce=M[re],U=y[re];ce!==null&&U!==void 0&&U.update(ce,Z,c||a)}if(J&&J(W,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let re=null;for(const ce of b)Z.detectedPlanes.has(ce)||(re===null&&(re=[]),re.push(ce));if(re!==null)for(const ce of re)b.delete(ce),x.delete(ce),n.dispatchEvent({type:"planeremoved",data:ce});for(const ce of Z.detectedPlanes)if(!b.has(ce))b.add(ce),x.set(ce,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ce});else{const U=x.get(ce);ce.lastChangedTime>U&&(x.set(ce,ce.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ce}))}}v=null}const ie=new Jc;ie.setAnimationLoop(pe),this.setAnimationLoop=function(W){J=W},this.dispose=function(){}}}function hg(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,jc(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,y,M,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Lt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Lt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const M=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Lt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fg(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,M){const b=M.program;n.uniformBlockBinding(y,b)}function c(y,M){let b=i[y.id];b===void 0&&(v(y),b=u(y),i[y.id]=b,y.addEventListener("dispose",m));const x=M.program;n.updateUBOMapping(y,x);const E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function u(y){const M=h();y.__bindingPointIndex=M;const b=s.createBuffer(),x=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,x,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,b),b}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=i[y.id],b=y.uniforms,x=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,w=b.length;E<w;E++){const C=b[E];if(p(C,E,x)===!0){const g=C.__offset,S=Array.isArray(C.value)?C.value:[C.value];let D=0;for(let k=0;k<S.length;k++){const O=S[k],N=_(O);typeof O=="number"?(C.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,g+D,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=O.elements[0],C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=O.elements[0],C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=O.elements[0]):(O.toArray(C.__data,D),D+=N.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,g,C.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,M,b){const x=y.value;if(b[M]===void 0){if(typeof x=="number")b[M]=x;else{const E=Array.isArray(x)?x:[x],w=[];for(let C=0;C<E.length;C++)w.push(E[C].clone());b[M]=w}return!0}else if(typeof x=="number"){if(b[M]!==x)return b[M]=x,!0}else{const E=Array.isArray(b[M])?b[M]:[b[M]],w=Array.isArray(x)?x:[x];for(let C=0;C<E.length;C++){const g=E[C];if(g.equals(w[C])===!1)return g.copy(w[C]),!0}}return!1}function v(y){const M=y.uniforms;let b=0;const x=16;let E=0;for(let w=0,C=M.length;w<C;w++){const g=M[w],S={boundary:0,storage:0},D=Array.isArray(g.value)?g.value:[g.value];for(let k=0,O=D.length;k<O;k++){const N=D[k],z=_(N);S.boundary+=z.boundary,S.storage+=z.storage}if(g.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),g.__offset=b,w>0){E=b%x;const k=x-E;E!==0&&k-S.boundary<0&&(b+=x-E,g.__offset=b)}b+=S.storage}return E=b%x,E>0&&(b+=x-E),y.__size=b,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function d(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}function dg(){const s=Br("canvas");return s.style.display="block",s}class ru{constructor(e={}){const{canvas:t=dg(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let p=null,v=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ae,this.useLegacyLights=!0,this.toneMapping=Dn,this.toneMappingExposure=1;const d=this;let y=!1,M=0,b=0,x=null,E=-1,w=null;const C=new dt,g=new dt;let S=null,D=t.width,k=t.height,O=1,N=null,z=null;const K=new dt(0,0,D,k),H=new dt(0,0,D,k);let V=!1;const Q=new $c;let J=!1,pe=!1,ie=null;const W=new tt,Z=new P,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return x===null?O:1}let U=n;function be(A,B){for(let Y=0;Y<A.length;Y++){const F=A[Y],j=t.getContext(F,B);if(j!==null)return j}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${po}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Le,!1),U===null){const B=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&B.shift(),U=be(B,A),U===null)throw be(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,se,Me,Be,ge,Re,Ke,qe,nt,$e,Ne,We,pt,R,T,X,ee,ne,oe,L,$,G,le,fe;function me(){Ee=new bm(U),se=new xm(U,Ee,e),Ee.init(se),G=new ag(U,Ee,se),Me=new rg(U,Ee,se),Be=new Am(U),ge=new W_,Re=new sg(U,Ee,Me,ge,se,G,Be),Ke=new Mm(d),qe=new Em(d),nt=new zf(U,se),le=new _m(U,Ee,nt,se),$e=new Tm(U,nt,Be,le),Ne=new Lm(U,$e,nt,Be),oe=new Pm(U,se,Re),X=new vm(ge),We=new V_(d,Ke,qe,Ee,se,le,X),pt=new hg(d,ge),R=new q_,T=new J_(Ee,se),ne=new mm(d,Ke,qe,Me,Ne,f,l),ee=new ig(d,Ne,se),fe=new fg(U,Be,se,Me),L=new gm(U,Ee,Be,se),$=new wm(U,Ee,Be,se),Be.programs=We.programs,d.capabilities=se,d.extensions=Ee,d.properties=ge,d.renderLists=R,d.shadowMap=ee,d.state=Me,d.info=Be}me();const ue=new ug(d,U);this.xr=ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(D,k,!1))},this.getSize=function(A){return A.set(D,k)},this.setSize=function(A,B,Y=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,k=B,t.width=Math.floor(A*O),t.height=Math.floor(B*O),Y===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(D*O,k*O).floor()},this.setDrawingBufferSize=function(A,B,Y){D=A,k=B,O=Y,t.width=Math.floor(A*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,B,Y,F){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,B,Y,F),Me.viewport(C.copy(K).multiplyScalar(O).floor())},this.getScissor=function(A){return A.copy(H)},this.setScissor=function(A,B,Y,F){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,B,Y,F),Me.scissor(g.copy(H).multiplyScalar(O).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(A){Me.setScissorTest(V=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){z=A},this.getClearColor=function(A){return A.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(A=!0,B=!0,Y=!0){let F=0;A&&(F|=U.COLOR_BUFFER_BIT),B&&(F|=U.DEPTH_BUFFER_BIT),Y&&(F|=U.STENCIL_BUFFER_BIT),U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),R.dispose(),T.dispose(),ge.dispose(),Ke.dispose(),qe.dispose(),Ne.dispose(),le.dispose(),fe.dispose(),We.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",_e),ue.removeEventListener("sessionend",Ge),ie&&(ie.dispose(),ie=null),He.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Be.autoReset,B=ee.enabled,Y=ee.autoUpdate,F=ee.needsUpdate,j=ee.type;me(),Be.autoReset=A,ee.enabled=B,ee.autoUpdate=Y,ee.needsUpdate=F,ee.type=j}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Je(A){const B=A.target;B.removeEventListener("dispose",Je),I(B)}function I(A){q(A),ge.remove(A)}function q(A){const B=ge.get(A).programs;B!==void 0&&(B.forEach(function(Y){We.releaseProgram(Y)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Y,F,j,ve){B===null&&(B=re);const ye=j.isMesh&&j.matrixWorld.determinant()<0,we=lh(A,B,Y,F,j);Me.setMaterial(F,ye);let Ce=Y.index,De=1;F.wireframe===!0&&(Ce=$e.getWireframeAttribute(Y),De=2);const Ie=Y.drawRange,Ue=Y.attributes.position;let ke=Ie.start*De,Et=(Ie.start+Ie.count)*De;ve!==null&&(ke=Math.max(ke,ve.start*De),Et=Math.min(Et,(ve.start+ve.count)*De)),Ce!==null?(ke=Math.max(ke,0),Et=Math.min(Et,Ce.count)):Ue!=null&&(ke=Math.max(ke,0),Et=Math.min(Et,Ue.count));const en=Et-ke;if(en<0||en===1/0)return;le.setup(j,F,we,Y,Ce);let Qn,it=L;if(Ce!==null&&(Qn=nt.get(Ce),it=$,it.setIndex(Qn)),j.isMesh)F.wireframe===!0?(Me.setLineWidth(F.wireframeLinewidth*ce()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if(j.isLine){let Fe=F.linewidth;Fe===void 0&&(Fe=1),Me.setLineWidth(Fe*ce()),j.isLineSegments?it.setMode(U.LINES):j.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else j.isPoints?it.setMode(U.POINTS):j.isSprite&&it.setMode(U.TRIANGLES);if(j.isInstancedMesh)it.renderInstances(ke,en,j.count);else if(Y.isInstancedBufferGeometry){const Fe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Xs=Math.min(Y.instanceCount,Fe);it.renderInstances(ke,en,Xs)}else it.render(ke,en)},this.compile=function(A,B){function Y(F,j,ve){F.transparent===!0&&F.side===Pn&&F.forceSinglePass===!1?(F.side=Lt,F.needsUpdate=!0,jr(F,j,ve),F.side=jn,F.needsUpdate=!0,jr(F,j,ve),F.side=Pn):jr(F,j,ve)}v=T.get(A),v.init(),m.push(v),A.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(v.pushLight(F),F.castShadow&&v.pushShadow(F))}),v.setupLights(d.useLegacyLights),A.traverse(function(F){const j=F.material;if(j)if(Array.isArray(j))for(let ve=0;ve<j.length;ve++){const ye=j[ve];Y(ye,A,F)}else Y(j,A,F)}),m.pop(),v=null};let te=null;function he(A){te&&te(A)}function _e(){He.stop()}function Ge(){He.start()}const He=new Jc;He.setAnimationLoop(he),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(A){te=A,ue.setAnimationLoop(A),A===null?He.stop():He.start()},ue.addEventListener("sessionstart",_e),ue.addEventListener("sessionend",Ge),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(B),B=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,B,x),v=T.get(A,m.length),v.init(),m.push(v),W.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(W),pe=this.localClippingEnabled,J=X.init(this.clippingPlanes,pe),p=R.get(A,_.length),p.init(),_.push(p),mt(A,B,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(N,z),J===!0&&X.beginShadows();const Y=v.state.shadowsArray;if(ee.render(Y,A,B),J===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(p,A),v.setupLights(d.useLegacyLights),B.isArrayCamera){const F=B.cameras;for(let j=0,ve=F.length;j<ve;j++){const ye=F[j];On(p,A,ye,ye.viewport)}}else On(p,A,B);x!==null&&(Re.updateMultisampleRenderTarget(x),Re.updateRenderTargetMipmap(x)),A.isScene===!0&&A.onAfterRender(d,A,B),le.resetDefaultState(),E=-1,w=null,m.pop(),m.length>0?v=m[m.length-1]:v=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function mt(A,B,Y,F){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){F&&Z.setFromMatrixPosition(A.matrixWorld).applyMatrix4(W);const ye=Ne.update(A),we=A.material;we.visible&&p.push(A,ye,we,Y,Z.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==Be.render.frame&&(A.skeleton.update(),A.skeleton.frame=Be.render.frame);const ye=Ne.update(A),we=A.material;if(F&&(ye.boundingSphere===null&&ye.computeBoundingSphere(),Z.copy(ye.boundingSphere.center).applyMatrix4(A.matrixWorld).applyMatrix4(W)),Array.isArray(we)){const Ce=ye.groups;for(let De=0,Ie=Ce.length;De<Ie;De++){const Ue=Ce[De],ke=we[Ue.materialIndex];ke&&ke.visible&&p.push(A,ye,ke,Y,Z.z,Ue)}}else we.visible&&p.push(A,ye,we,Y,Z.z,null)}}const ve=A.children;for(let ye=0,we=ve.length;ye<we;ye++)mt(ve[ye],B,Y,F)}function On(A,B,Y,F){const j=A.opaque,ve=A.transmissive,ye=A.transparent;v.setupLightsView(Y),J===!0&&X.setGlobalState(d.clippingPlanes,Y),ve.length>0&&Qe(j,ve,B,Y),F&&Me.viewport(C.copy(F)),j.length>0&&Wt(j,B,Y),ve.length>0&&Wt(ve,B,Y),ye.length>0&&Wt(ye,B,Y),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Qe(A,B,Y,F){if(ie===null){const we=se.isWebGL2;ie=new yi(1024,1024,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Nr:Mi,minFilter:Fr,samples:we&&o===!0?4:0})}const j=d.getRenderTarget();d.setRenderTarget(ie),d.clear();const ve=d.toneMapping;d.toneMapping=Dn,Wt(A,Y,F),Re.updateMultisampleRenderTarget(ie),Re.updateRenderTargetMipmap(ie);let ye=!1;for(let we=0,Ce=B.length;we<Ce;we++){const De=B[we],Ie=De.object,Ue=De.geometry,ke=De.material,Et=De.group;if(ke.side===Pn&&Ie.layers.test(F.layers)){const en=ke.side;ke.side=Lt,ke.needsUpdate=!0,hn(Ie,Y,F,Ue,ke,Et),ke.side=en,ke.needsUpdate=!0,ye=!0}}ye===!0&&(Re.updateMultisampleRenderTarget(ie),Re.updateRenderTargetMipmap(ie)),d.setRenderTarget(j),d.toneMapping=ve}function Wt(A,B,Y){const F=B.isScene===!0?B.overrideMaterial:null;for(let j=0,ve=A.length;j<ve;j++){const ye=A[j],we=ye.object,Ce=ye.geometry,De=F===null?ye.material:F,Ie=ye.group;we.layers.test(Y.layers)&&hn(we,B,Y,Ce,De,Ie)}}function hn(A,B,Y,F,j,ve){A.onBeforeRender(d,B,Y,F,j,ve),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(d,B,Y,F,A,ve),j.transparent===!0&&j.side===Pn&&j.forceSinglePass===!1?(j.side=Lt,j.needsUpdate=!0,d.renderBufferDirect(Y,B,F,j,A,ve),j.side=jn,j.needsUpdate=!0,d.renderBufferDirect(Y,B,F,j,A,ve),j.side=Pn):d.renderBufferDirect(Y,B,F,j,A,ve),A.onAfterRender(d,B,Y,F,j,ve)}function jr(A,B,Y){B.isScene!==!0&&(B=re);const F=ge.get(A),j=v.state.lights,ve=v.state.shadowsArray,ye=j.state.version,we=We.getParameters(A,j.state,ve,B,Y),Ce=We.getProgramCacheKey(we);let De=F.programs;F.environment=A.isMeshStandardMaterial?B.environment:null,F.fog=B.fog,F.envMap=(A.isMeshStandardMaterial?qe:Ke).get(A.envMap||F.environment),De===void 0&&(A.addEventListener("dispose",Je),De=new Map,F.programs=De);let Ie=De.get(Ce);if(Ie!==void 0){if(F.currentProgram===Ie&&F.lightsStateVersion===ye)return Bo(A,we),Ie}else we.uniforms=We.getUniforms(A),A.onBuild(Y,we,d),A.onBeforeCompile(we,d),Ie=We.acquireProgram(we,Ce),De.set(Ce,Ie),F.uniforms=we.uniforms;const Ue=F.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=X.uniform),Bo(A,we),F.needsLights=uh(A),F.lightsStateVersion=ye,F.needsLights&&(Ue.ambientLightColor.value=j.state.ambient,Ue.lightProbe.value=j.state.probe,Ue.directionalLights.value=j.state.directional,Ue.directionalLightShadows.value=j.state.directionalShadow,Ue.spotLights.value=j.state.spot,Ue.spotLightShadows.value=j.state.spotShadow,Ue.rectAreaLights.value=j.state.rectArea,Ue.ltc_1.value=j.state.rectAreaLTC1,Ue.ltc_2.value=j.state.rectAreaLTC2,Ue.pointLights.value=j.state.point,Ue.pointLightShadows.value=j.state.pointShadow,Ue.hemisphereLights.value=j.state.hemi,Ue.directionalShadowMap.value=j.state.directionalShadowMap,Ue.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ue.spotShadowMap.value=j.state.spotShadowMap,Ue.spotLightMatrix.value=j.state.spotLightMatrix,Ue.spotLightMap.value=j.state.spotLightMap,Ue.pointShadowMap.value=j.state.pointShadowMap,Ue.pointShadowMatrix.value=j.state.pointShadowMatrix);const ke=Ie.getUniforms(),Et=bs.seqWithValue(ke.seq,Ue);return F.currentProgram=Ie,F.uniformsList=Et,Ie}function Bo(A,B){const Y=ge.get(A);Y.outputColorSpace=B.outputColorSpace,Y.instancing=B.instancing,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function lh(A,B,Y,F,j){B.isScene!==!0&&(B=re),Re.resetTextureUnits();const ve=B.fog,ye=F.isMeshStandardMaterial?B.environment:null,we=x===null?d.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:xn,Ce=(F.isMeshStandardMaterial?qe:Ke).get(F.envMap||ye),De=F.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ie=!!F.normalMap&&!!Y.attributes.tangent,Ue=!!Y.morphAttributes.position,ke=!!Y.morphAttributes.normal,Et=!!Y.morphAttributes.color,en=F.toneMapped?d.toneMapping:Dn,Qn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,it=Qn!==void 0?Qn.length:0,Fe=ge.get(F),Xs=v.state.lights;if(J===!0&&(pe===!0||A!==w)){const Nt=A===w&&F.id===E;X.setState(F,A,Nt)}let ct=!1;F.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Xs.state.version||Fe.outputColorSpace!==we||j.isInstancedMesh&&Fe.instancing===!1||!j.isInstancedMesh&&Fe.instancing===!0||j.isSkinnedMesh&&Fe.skinning===!1||!j.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Ce||F.fog===!0&&Fe.fog!==ve||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==X.numPlanes||Fe.numIntersection!==X.numIntersection)||Fe.vertexAlphas!==De||Fe.vertexTangents!==Ie||Fe.morphTargets!==Ue||Fe.morphNormals!==ke||Fe.morphColors!==Et||Fe.toneMapping!==en||se.isWebGL2===!0&&Fe.morphTargetsCount!==it)&&(ct=!0):(ct=!0,Fe.__version=F.version);let ei=Fe.currentProgram;ct===!0&&(ei=jr(F,B,j));let zo=!1,Mr=!1,qs=!1;const bt=ei.getUniforms(),ti=Fe.uniforms;if(Me.useProgram(ei.program)&&(zo=!0,Mr=!0,qs=!0),F.id!==E&&(E=F.id,Mr=!0),zo||w!==A){if(bt.setValue(U,"projectionMatrix",A.projectionMatrix),se.logarithmicDepthBuffer&&bt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),w!==A&&(w=A,Mr=!0,qs=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Nt=bt.map.cameraPosition;Nt!==void 0&&Nt.setValue(U,Z.setFromMatrixPosition(A.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&bt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||j.isSkinnedMesh)&&bt.setValue(U,"viewMatrix",A.matrixWorldInverse)}if(j.isSkinnedMesh){bt.setOptional(U,j,"bindMatrix"),bt.setOptional(U,j,"bindMatrixInverse");const Nt=j.skeleton;Nt&&(se.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),bt.setValue(U,"boneTexture",Nt.boneTexture,Re),bt.setValue(U,"boneTextureSize",Nt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ys=Y.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0&&se.isWebGL2===!0)&&oe.update(j,Y,ei),(Mr||Fe.receiveShadow!==j.receiveShadow)&&(Fe.receiveShadow=j.receiveShadow,bt.setValue(U,"receiveShadow",j.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ti.envMap.value=Ce,ti.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Mr&&(bt.setValue(U,"toneMappingExposure",d.toneMappingExposure),Fe.needsLights&&ch(ti,qs),ve&&F.fog===!0&&pt.refreshFogUniforms(ti,ve),pt.refreshMaterialUniforms(ti,F,O,k,ie),bs.upload(U,Fe.uniformsList,ti,Re)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(bs.upload(U,Fe.uniformsList,ti,Re),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&bt.setValue(U,"center",j.center),bt.setValue(U,"modelViewMatrix",j.modelViewMatrix),bt.setValue(U,"normalMatrix",j.normalMatrix),bt.setValue(U,"modelMatrix",j.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Nt=F.uniformsGroups;for(let js=0,hh=Nt.length;js<hh;js++)if(se.isWebGL2){const ko=Nt[js];fe.update(ko,ei),fe.bind(ko,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function ch(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function uh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(A,B,Y){ge.get(A.texture).__webglTexture=B,ge.get(A.depthTexture).__webglTexture=Y;const F=ge.get(A);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=Y===void 0,F.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){const Y=ge.get(A);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,Y=0){x=A,M=B,b=Y;let F=!0,j=null,ve=!1,ye=!1;if(A){const Ce=ge.get(A);Ce.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(U.FRAMEBUFFER,null),F=!1):Ce.__webglFramebuffer===void 0?Re.setupRenderTarget(A):Ce.__hasExternalTextures&&Re.rebindTextures(A,ge.get(A.texture).__webglTexture,ge.get(A.depthTexture).__webglTexture);const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ye=!0);const Ie=ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(j=Ie[B],ve=!0):se.isWebGL2&&A.samples>0&&Re.useMultisampledRTT(A)===!1?j=ge.get(A).__webglMultisampledFramebuffer:j=Ie,C.copy(A.viewport),g.copy(A.scissor),S=A.scissorTest}else C.copy(K).multiplyScalar(O).floor(),g.copy(H).multiplyScalar(O).floor(),S=V;if(Me.bindFramebuffer(U.FRAMEBUFFER,j)&&se.drawBuffers&&F&&Me.drawBuffers(A,j),Me.viewport(C),Me.scissor(g),Me.setScissorTest(S),ve){const Ce=ge.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ce.__webglTexture,Y)}else if(ye){const Ce=ge.get(A.texture),De=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.__webglTexture,Y||0,De)}E=-1},this.readRenderTargetPixels=function(A,B,Y,F,j,ve,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){Me.bindFramebuffer(U.FRAMEBUFFER,we);try{const Ce=A.texture,De=Ce.format,Ie=Ce.type;if(De!==ln&&G.convert(De)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ie===Nr&&(Ee.has("EXT_color_buffer_half_float")||se.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ie!==Mi&&G.convert(Ie)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===fi&&(se.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-F&&Y>=0&&Y<=A.height-j&&U.readPixels(B,Y,F,j,G.convert(De),G.convert(Ie),ve)}finally{const Ce=x!==null?ge.get(x).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(A,B,Y=0){const F=Math.pow(2,-Y),j=Math.floor(B.image.width*F),ve=Math.floor(B.image.height*F);Re.setTexture2D(B,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,A.x,A.y,j,ve),Me.unbindTexture()},this.copyTextureToTexture=function(A,B,Y,F=0){const j=B.image.width,ve=B.image.height,ye=G.convert(Y.format),we=G.convert(Y.type);Re.setTexture2D(Y,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment),B.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,A.x,A.y,j,ve,ye,we,B.image.data):B.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,ye,B.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,F,A.x,A.y,ye,we,B.image),F===0&&Y.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(A,B,Y,F,j=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=A.max.x-A.min.x+1,ye=A.max.y-A.min.y+1,we=A.max.z-A.min.z+1,Ce=G.convert(F.format),De=G.convert(F.type);let Ie;if(F.isData3DTexture)Re.setTexture3D(F,0),Ie=U.TEXTURE_3D;else if(F.isDataArrayTexture)Re.setTexture2DArray(F,0),Ie=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const Ue=U.getParameter(U.UNPACK_ROW_LENGTH),ke=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Et=U.getParameter(U.UNPACK_SKIP_PIXELS),en=U.getParameter(U.UNPACK_SKIP_ROWS),Qn=U.getParameter(U.UNPACK_SKIP_IMAGES),it=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,it.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,A.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,A.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,A.min.z),Y.isDataTexture||Y.isData3DTexture?U.texSubImage3D(Ie,j,B.x,B.y,B.z,ve,ye,we,Ce,De,it.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ie,j,B.x,B.y,B.z,ve,ye,we,Ce,it.data)):U.texSubImage3D(Ie,j,B.x,B.y,B.z,ve,ye,we,Ce,De,it),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ue),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ke),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Et),U.pixelStorei(U.UNPACK_SKIP_ROWS,en),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Qn),j===0&&F.generateMipmaps&&U.generateMipmap(Ie),Me.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Re.setTextureCube(A,0):A.isData3DTexture?Re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Re.setTexture2DArray(A,0):Re.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){M=0,b=0,x=null,Me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ae?mi:zc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mi?Ae:xn}}class pg extends ru{}pg.prototype.isWebGL1Renderer=!0;class mg extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class _g{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tt=new P;class Cs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array),r=Xe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class su extends Ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let qi;const Tr=new P,Yi=new P,ji=new P,Ki=new Se,wr=new Se,au=new tt,_s=new P,Ar=new P,gs=new P,nc=new Se,Ta=new Se,ic=new Se;class gg extends Mt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _g(t,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new Cs(n,3,0,!1)),qi.setAttribute("uv",new Cs(n,2,3,!1))}this.geometry=qi,this.material=e!==void 0?e:new su,this.center=new Se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),au.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-ji.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;xs(_s.set(-.5,-.5,0),ji,a,Yi,i,r),xs(Ar.set(.5,-.5,0),ji,a,Yi,i,r),xs(gs.set(.5,.5,0),ji,a,Yi,i,r),nc.set(0,0),Ta.set(1,0),ic.set(1,1);let o=e.ray.intersectTriangle(_s,Ar,gs,!1,Tr);if(o===null&&(xs(Ar.set(-.5,.5,0),ji,a,Yi,i,r),Ta.set(0,1),o=e.ray.intersectTriangle(_s,gs,Ar,!1,Tr),o===null))return;const l=e.ray.origin.distanceTo(Tr);l<e.near||l>e.far||t.push({distance:l,point:Tr.clone(),uv:Kt.getInterpolation(Tr,_s,Ar,gs,nc,Ta,ic,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xs(s,e,t,n,i,r){Ki.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(wr.x=r*Ki.x-i*Ki.y,wr.y=i*Ki.x+r*Ki.y):wr.copy(Ki),s.copy(e),s.x+=wr.x,s.y+=wr.y,s.applyMatrix4(au)}class ja extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rc=new P,sc=new P,ac=new tt,wa=new zs,vs=new Xr;class oc extends Mt{constructor(e=new Dt,t=new ja){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)rc.fromBufferAttribute(t,i-1),sc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=rc.distanceTo(sc);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(i),vs.radius+=r,e.ray.intersectsSphere(vs)===!1)return;ac.copy(i).invert(),wa.copy(e.ray).applyMatrix4(ac);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,u=new P,h=new P,f=new P,p=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const d=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count);for(let M=d,b=y-1;M<b;M+=p){const x=v.getX(M),E=v.getX(M+1);if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,E),wa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let M=d,b=y-1;M<b;M+=p){if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,M+1),wa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class ou extends Ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lc=new tt,Ka=new zs,Ms=new Xr,ys=new P;class xg extends Mt{constructor(e=new Dt,t=new ou){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(i),Ms.radius+=r,e.ray.intersectsSphere(Ms)===!1)return;lc.copy(i).invert(),Ka.copy(e.ray).applyMatrix4(lc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=f,_=p;v<_;v++){const m=c.getX(v);ys.fromBufferAttribute(h,m),cc(ys,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,_=p;v<_;v++)ys.fromBufferAttribute(h,v),cc(ys,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function cc(s,e,t,n,i,r,a){const o=Ka.distanceSqToPoint(s);if(o<t){const l=new P;Ka.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class vg extends Ct{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vo extends Dt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new P,f=new P,p=[],v=[],_=[],m=[];for(let d=0;d<=n;d++){const y=[],M=d/n;let b=0;d===0&&a===0?b=.5/t:d===n&&l===Math.PI&&(b=-.5/t);for(let x=0;x<=t;x++){const E=x/t;h.x=-e*Math.cos(i+E*r)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(i+E*r)*Math.sin(a+M*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(E+b,1-M),y.push(c++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){const M=u[d][y+1],b=u[d][y],x=u[d+1][y],E=u[d+1][y+1];(d!==0||a>0)&&p.push(M,b,E),(d!==n-1||l<Math.PI)&&p.push(b,x,E)}this.setIndex(p),this.setAttribute("position",new Jt(v,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const uc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Mg{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],v=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const yg=new Mg;class lu{constructor(e){this.manager=e!==void 0?e:yg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Sg extends lu{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=uc.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Br("img");function l(){u(),uc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Eg extends lu{constructor(e){super(e)}load(e,t,n,i){const r=new Ct,a=new Sg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class bg{constructor(e,t,n=0,i=1/0){this.ray=new zs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Za(e,this,n,t),n.sort(hc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Za(e[i],this,n,t);return n.sort(hc),n}}function hc(s,e){return s.distance-e.distance}function Za(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Za(i[r],e,t,!0)}}class fc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=po);const dc={type:"change"},Aa={type:"start"},pc={type:"end"};class Tg extends bi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",We),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",We),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(dc),n.update(),r=i.NONE},this.update=function(){const L=new P,$=new Kn().setFromUnitVectors(e.up,new P(0,1,0)),G=$.clone().invert(),le=new P,fe=new Kn,me=2*Math.PI;return function(){const de=n.object.position;L.copy(de).sub(n.target),L.applyQuaternion($),o.setFromVector3(L),n.autoRotate&&r===i.NONE&&g(w()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Te=n.minAzimuthAngle,Le=n.maxAzimuthAngle;return isFinite(Te)&&isFinite(Le)&&(Te<-Math.PI?Te+=me:Te>Math.PI&&(Te-=me),Le<-Math.PI?Le+=me:Le>Math.PI&&(Le-=me),Te<=Le?o.theta=Math.max(Te,Math.min(Le,o.theta)):o.theta=o.theta>(Te+Le)/2?Math.max(Te,o.theta):Math.min(Le,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(o),L.applyQuaternion(G),de.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||le.distanceToSquared(n.object.position)>a||8*(1-fe.dot(n.object.quaternion))>a?(n.dispatchEvent(dc),le.copy(n.object.position),fe.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",T),n.domElement.removeEventListener("pointerdown",Re),n.domElement.removeEventListener("pointercancel",qe),n.domElement.removeEventListener("wheel",Ne),n.domElement.removeEventListener("pointermove",Ke),n.domElement.removeEventListener("pointerup",qe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",We),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new fc,l=new fc;let c=1;const u=new P;let h=!1;const f=new Se,p=new Se,v=new Se,_=new Se,m=new Se,d=new Se,y=new Se,M=new Se,b=new Se,x=[],E={};function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function g(L){l.theta-=L}function S(L){l.phi-=L}const D=function(){const L=new P;return function(G,le){L.setFromMatrixColumn(le,0),L.multiplyScalar(-G),u.add(L)}}(),k=function(){const L=new P;return function(G,le){n.screenSpacePanning===!0?L.setFromMatrixColumn(le,1):(L.setFromMatrixColumn(le,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(G),u.add(L)}}(),O=function(){const L=new P;return function(G,le){const fe=n.domElement;if(n.object.isPerspectiveCamera){const me=n.object.position;L.copy(me).sub(n.target);let ue=L.length();ue*=Math.tan(n.object.fov/2*Math.PI/180),D(2*G*ue/fe.clientHeight,n.object.matrix),k(2*le*ue/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(G*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),k(le*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(L){f.set(L.clientX,L.clientY)}function H(L){y.set(L.clientX,L.clientY)}function V(L){_.set(L.clientX,L.clientY)}function Q(L){p.set(L.clientX,L.clientY),v.subVectors(p,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;g(2*Math.PI*v.x/$.clientHeight),S(2*Math.PI*v.y/$.clientHeight),f.copy(p),n.update()}function J(L){M.set(L.clientX,L.clientY),b.subVectors(M,y),b.y>0?N(C()):b.y<0&&z(C()),y.copy(M),n.update()}function pe(L){m.set(L.clientX,L.clientY),d.subVectors(m,_).multiplyScalar(n.panSpeed),O(d.x,d.y),_.copy(m),n.update()}function ie(L){L.deltaY<0?z(C()):L.deltaY>0&&N(C()),n.update()}function W(L){let $=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?g(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?g(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),$=!0;break}$&&(L.preventDefault(),n.update())}function Z(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const L=.5*(x[0].pageX+x[1].pageX),$=.5*(x[0].pageY+x[1].pageY);f.set(L,$)}}function re(){if(x.length===1)_.set(x[0].pageX,x[0].pageY);else{const L=.5*(x[0].pageX+x[1].pageX),$=.5*(x[0].pageY+x[1].pageY);_.set(L,$)}}function ce(){const L=x[0].pageX-x[1].pageX,$=x[0].pageY-x[1].pageY,G=Math.sqrt(L*L+$*$);y.set(0,G)}function U(){n.enableZoom&&ce(),n.enablePan&&re()}function be(){n.enableZoom&&ce(),n.enableRotate&&Z()}function Ee(L){if(x.length==1)p.set(L.pageX,L.pageY);else{const G=oe(L),le=.5*(L.pageX+G.x),fe=.5*(L.pageY+G.y);p.set(le,fe)}v.subVectors(p,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;g(2*Math.PI*v.x/$.clientHeight),S(2*Math.PI*v.y/$.clientHeight),f.copy(p)}function se(L){if(x.length===1)m.set(L.pageX,L.pageY);else{const $=oe(L),G=.5*(L.pageX+$.x),le=.5*(L.pageY+$.y);m.set(G,le)}d.subVectors(m,_).multiplyScalar(n.panSpeed),O(d.x,d.y),_.copy(m)}function Me(L){const $=oe(L),G=L.pageX-$.x,le=L.pageY-$.y,fe=Math.sqrt(G*G+le*le);M.set(0,fe),b.set(0,Math.pow(M.y/y.y,n.zoomSpeed)),N(b.y),y.copy(M)}function Be(L){n.enableZoom&&Me(L),n.enablePan&&se(L)}function ge(L){n.enableZoom&&Me(L),n.enableRotate&&Ee(L)}function Re(L){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",Ke),n.domElement.addEventListener("pointerup",qe)),X(L),L.pointerType==="touch"?pt(L):nt(L))}function Ke(L){n.enabled!==!1&&(L.pointerType==="touch"?R(L):$e(L))}function qe(L){ee(L),x.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",Ke),n.domElement.removeEventListener("pointerup",qe)),n.dispatchEvent(pc),r=i.NONE}function nt(L){let $;switch(L.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case Ri.DOLLY:if(n.enableZoom===!1)return;H(L),r=i.DOLLY;break;case Ri.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;V(L),r=i.PAN}else{if(n.enableRotate===!1)return;K(L),r=i.ROTATE}break;case Ri.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;K(L),r=i.ROTATE}else{if(n.enablePan===!1)return;V(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Aa)}function $e(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Q(L);break;case i.DOLLY:if(n.enableZoom===!1)return;J(L);break;case i.PAN:if(n.enablePan===!1)return;pe(L);break}}function Ne(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent(Aa),ie(L),n.dispatchEvent(pc))}function We(L){n.enabled===!1||n.enablePan===!1||W(L)}function pt(L){switch(ne(L),x.length){case 1:switch(n.touches.ONE){case Ci.ROTATE:if(n.enableRotate===!1)return;Z(),r=i.TOUCH_ROTATE;break;case Ci.PAN:if(n.enablePan===!1)return;re(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(),r=i.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Aa)}function R(L){switch(ne(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;se(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(L),n.update();break;default:r=i.NONE}}function T(L){n.enabled!==!1&&L.preventDefault()}function X(L){x.push(L)}function ee(L){delete E[L.pointerId];for(let $=0;$<x.length;$++)if(x[$].pointerId==L.pointerId){x.splice($,1);return}}function ne(L){let $=E[L.pointerId];$===void 0&&($=new Se,E[L.pointerId]=$),$.set(L.pageX,L.pageY)}function oe(L){const $=L.pointerId===x[0].pointerId?x[1]:x[0];return E[$.pointerId]}n.domElement.addEventListener("contextmenu",T),n.domElement.addEventListener("pointerdown",Re),n.domElement.addEventListener("pointercancel",qe),n.domElement.addEventListener("wheel",Ne,{passive:!1}),this.update()}}function An(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function cu(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ht={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},hr={duration:.5,overwrite:!1,delay:0},Mo,yt,st,_n=1e8,vt=1/_n,$a=Math.PI*2,wg=$a/4,Ag=0,uu=Math.sqrt,Rg=Math.cos,Cg=Math.sin,ht=function(e){return typeof e=="string"},Ze=function(e){return typeof e=="function"},In=function(e){return typeof e=="number"},yo=function(e){return typeof e>"u"},vn=function(e){return typeof e=="object"},It=function(e){return e!==!1},So=function(){return typeof window<"u"},Ss=function(e){return Ze(e)||ht(e)},hu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},St=Array.isArray,Ja=/(?:-?\.?\d|\.)+/gi,fu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ra=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,du=/[+-]=-?[.\d]+/,pu=/[^,'"\[\]\s]+/gi,Pg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ye,Yt,Qa,Eo,Vt={},Ps={},mu,_u=function(e){return(Ps=Ei(e,Vt))&&Ft},bo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ls=function(e,t){return!t&&console.warn(e)},gu=function(e,t){return e&&(Vt[e]=t)&&Ps&&(Ps[e]=t)||Vt},zr=function(){return 0},Lg={suppressEvents:!0,isStart:!0,kill:!1},Ts={suppressEvents:!0,kill:!1},Dg={suppressEvents:!0},To={},qn=[],eo={},xu,kt={},Ca={},mc=30,ws=[],wo="",Ao=function(e){var t=e[0],n,i;if(vn(t)||Ze(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ws.length;i--&&!ws[i].targetTest(t););n=ws[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Hu(e[i],n)))||e.splice(i,1);return e},gi=function(e){return e._gsap||Ao(Zt(e))[0]._gsap},vu=function(e,t,n){return(n=e[t])&&Ze(n)?e[t]():yo(n)&&e.getAttribute&&e.getAttribute(t)||n},Ut=function(e,t){return(e=e.split(",")).forEach(t)||e},et=function(e){return Math.round(e*1e5)/1e5||0},ft=function(e){return Math.round(e*1e7)/1e7||0},rr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ig=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ds=function(){var e=qn.length,t=qn.slice(0),n,i;for(eo={},qn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Mu=function(e,t,n,i){qn.length&&!yt&&Ds(),e.render(t,n,yt&&t<0&&(e._initted||e._startAt)),qn.length&&!yt&&Ds()},yu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(pu).length<2?t:ht(e)?e.trim():e},Su=function(e){return e},Qt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ug=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ei=function(e,t){for(var n in t)e[n]=t[n];return e},_c=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=vn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Is=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ir=function(e){var t=e.parent||Ye,n=e.keyframes?Ug(St(e.keyframes)):Qt;if(It(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Og=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Eu=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Hs=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Zn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},xi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Fg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},to=function(e,t,n,i){return e._startAt&&(yt?e._startAt.revert(Ts):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Ng=function s(e){return!e||e._ts&&s(e.parent)},gc=function(e){return e._repeat?fr(e._tTime,e=e.duration()+e._rDelay)*e:0},fr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Us=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Vs=function(e){return e._end=ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||vt)||0))},Ws=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Vs(e),n._dirty||xi(n,e)),e},bu=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Us(e.rawTime(),t),(!t._dur||Yr(0,t.totalDuration(),n)-t._tTime>vt)&&t.render(n,!0)),xi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},pn=function(e,t,n,i){return t.parent&&Zn(t),t._start=ft((In(n)?n:n||e!==Ye?qt(e,n,t):e._time)+t._delay),t._end=ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Eu(e,t,"_first","_last",e._sort?"_start":0),no(t)||(e._recent=t),i||bu(e,t),e._ts<0&&Ws(e,e._tTime),e},Tu=function(e,t){return(Vt.ScrollTrigger||bo("scrollTrigger",t))&&Vt.ScrollTrigger.create(t,e)},wu=function(e,t,n,i,r){if(Co(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&xu!==Gt.frame)return qn.push(e),e._lazy=[r,i],1},Bg=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},no=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zg=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Bg(e)&&!(!e._initted&&no(e))||(e._ts<0||e._dp._ts<0)&&!no(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Yr(0,e._tDur,t),u=fr(l,o),e._yoyo&&u&1&&(a=1-a),u!==fr(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||yt||i||e._zTime===vt||!t&&e._zTime){if(!e._initted&&wu(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?vt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&to(e,t,n,!0),e._onUpdate&&!n&&$t(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&$t(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Zn(e,1),!n&&!yt&&($t(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},dr=function(e,t,n,i){var r=e._repeat,a=ft(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:ft(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Ws(e,e._tTime=e._tDur*o),e.parent&&Vs(e),n||xi(e.parent,e),e},xc=function(e){return e instanceof Pt?xi(e):dr(e,e._dur)},Gg={_start:0,endTime:zr,totalDuration:zr},qt=function s(e,t,n){var i=e.labels,r=e._recent||Gg,a=e.duration()>=_n?r.endTime(!1):e._dur,o,l,c;return ht(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(St(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ur=function(e,t,n){var i=In(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=It(l.vars.inherit)&&l.parent;a.immediateRender=It(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new at(t[0],a,t[r+1])},Jn=function(e,t){return e||e===0?t(e):t},Yr=function(e,t,n){return n<e?e:n>t?t:n},xt=function(e,t){return!ht(e)||!(t=Pg.exec(e))?"":t[1]},Hg=function(e,t,n){return Jn(n,function(i){return Yr(e,t,i)})},io=[].slice,Au=function(e,t){return e&&vn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&vn(e[0]))&&!e.nodeType&&e!==Yt},Vg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ht(i)&&!t||Au(i,1)?(r=n).push.apply(r,Zt(i)):n.push(i)})||n},Zt=function(e,t,n){return st&&!t&&st.selector?st.selector(e):ht(e)&&!n&&(Qa||!pr())?io.call((t||Eo).querySelectorAll(e),0):St(e)?Vg(e,n):Au(e)?io.call(e,0):e?[e]:[]},ro=function(e){return e=Zt(e)[0]||Ls("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Zt(t,n.querySelectorAll?n:n===e?Ls("Invalid scope")||Eo.createElement("div"):e)}},Ru=function(e){return e.sort(function(){return .5-Math.random()})},Cu=function(e){if(Ze(e))return e;var t=vn(e)?e:{each:e},n=vi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return ht(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,p,v){var _=(v||t).length,m=a[_],d,y,M,b,x,E,w,C,g;if(!m){if(g=t.grid==="auto"?0:(t.grid||[1,_n])[1],!g){for(w=-1e8;w<(w=v[g++].getBoundingClientRect().left)&&g<_;);g--}for(m=a[_]=[],d=l?Math.min(g,_)*u-.5:i%g,y=g===_n?0:l?_*h/g-.5:i/g|0,w=0,C=_n,E=0;E<_;E++)M=E%g-d,b=y-(E/g|0),m[E]=x=c?Math.abs(c==="y"?b:M):uu(M*M+b*b),x>w&&(w=x),x<C&&(C=x);i==="random"&&Ru(m),m.max=w-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(g>_?_-1:c?c==="y"?_/g:g:Math.max(g,_/g))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=xt(t.amount||t.each)||0,n=n&&_<0?zu(n):n}return _=(m[f]-m.min)/m.max||0,ft(m.b+(n?n(_):_)*m.v)+m.u}},so=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(In(n)?0:xt(n))}},Pu=function(e,t){var n=St(e),i,r;return!n&&vn(e)&&(i=n=e.radius||_n,e.values?(e=Zt(e.values),(r=!In(e[0]))&&(i*=i)):e=so(e.increment)),Jn(t,n?Ze(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=_n,u=0,h=e.length,f,p;h--;)r?(f=e[h].x-o,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,r||u===a||In(a)?u:u+xt(a)}:so(e))},Lu=function(e,t,n,i){return Jn(St(e)?!t:n===!0?!!(n=0):!i,function(){return St(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Wg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Xg=function(e,t){return function(n){return e(parseFloat(n))+(t||xt(n))}},qg=function(e,t,n){return Iu(e,t,0,1,n)},Du=function(e,t,n){return Jn(n,function(i){return e[~~t(i)]})},Yg=function s(e,t,n){var i=t-e;return St(e)?Du(e,s(0,e.length),t):Jn(n,function(r){return(i+(r-e)%i)%i+e})},jg=function s(e,t,n){var i=t-e,r=i*2;return St(e)?Du(e,s(0,e.length-1),t):Jn(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},kr=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?pu:Ja),n+=e.substr(t,i-t)+Lu(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Iu=function(e,t,n,i,r){var a=t-e,o=i-n;return Jn(r,function(l){return n+((l-e)/a*o||0)})},Kg=function s(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var a=ht(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(St(e)&&!St(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(v){v*=h;var _=Math.min(f,~~v);return u[_](v-_)},n=t}else i||(e=Ei(St(e)?[]:{},e));if(!u){for(l in t)Ro.call(o,e,l,"get",t[l]);r=function(v){return Do(v,o)||(a?e.p:e)}}}return Jn(n,r)},vc=function(e,t,n){var i=e.labels,r=_n,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},$t=function(e,t,n){var i=e.vars,r=i[t],a=st,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&qn.length&&Ds(),o&&(st=o),u=l?r.apply(c,l):r.call(c),st=a,u},Pr=function(e){return Zn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yt),e.progress()<1&&$t(e,"onInterrupt"),e},er,Uu=[],Ou=function(e){if(!So()){Uu.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=Ze(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:zr,render:Do,add:Ro,kill:h0,modifier:u0,rawVars:0},a={targetTest:0,get:0,getSetter:Lo,aliases:{},register:0};if(pr(),e!==i){if(kt[t])return;Qt(i,Qt(Is(e,r),a)),Ei(i.prototype,Ei(r,Is(e,a))),kt[i.prop=t]=i,e.targetTest&&(ws.push(i),To[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gu(t,i),e.register&&e.register(Ft,i,Ot)},Ve=255,Lr={aqua:[0,Ve,Ve],lime:[0,Ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ve],navy:[0,0,128],white:[Ve,Ve,Ve],olive:[128,128,0],yellow:[Ve,Ve,0],orange:[Ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ve,0,0],pink:[Ve,192,203],cyan:[0,Ve,Ve],transparent:[Ve,Ve,Ve,0]},Pa=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ve+.5|0},Fu=function(e,t,n){var i=e?In(e)?[e>>16,e>>8&Ve,e&Ve]:0:Lr.black,r,a,o,l,c,u,h,f,p,v;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Lr[e])i=Lr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ve,i&Ve,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ve,e&Ve]}else if(e.substr(0,3)==="hsl"){if(i=v=e.match(Ja),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Pa(l+1/3,r,a),i[1]=Pa(l,r,a),i[2]=Pa(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(fu),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ja)||Lr.transparent;i=i.map(Number)}return t&&!v&&(r=i[0]/Ve,a=i[1]/Ve,o=i[2]/Ve,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===r?(a-o)/p+(a<o?6:0):h===a?(o-r)/p+2:(r-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Nu=function(e){var t=[],n=[],i=-1;return e.split(Yn).forEach(function(r){var a=r.match(Qi)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Mc=function(e,t,n){var i="",r=(e+i).match(Yn),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Fu(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Nu(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Yn,"1").split(Qi),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Yn),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},Yn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Lr)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Zg=/hsl[a]?\(/,Bu=function(e){var t=e.join(" "),n;if(Yn.lastIndex=0,Yn.test(t))return n=Zg.test(t),e[1]=Mc(e[1],n),e[0]=Mc(e[0],n,Nu(e[1])),!0},Gr,Gt=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,f,p,v=function _(m){var d=s()-i,y=m===!0,M,b,x,E;if(d>e&&(n+=d-t),i+=d,x=i-n,M=x-a,(M>0||y)&&(E=++h.frame,f=x-h.time*1e3,h.time=x=x/1e3,a+=M+(M>=r?4:r-M),b=1),y||(l=c(_)),b)for(p=0;p<o.length;p++)o[p](x,f,E,m)};return h={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){mu&&(!Qa&&So()&&(Yt=Qa=window,Eo=Yt.document||{},Vt.gsap=Ft,(Yt.gsapVersions||(Yt.gsapVersions=[])).push(Ft.version),_u(Ps||Yt.GreenSockGlobals||!Yt.gsap&&Yt||{}),u=Yt.requestAnimationFrame,Uu.forEach(Ou)),l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Gr=1,v(2))},sleep:function(){(u?Yt.cancelAnimationFrame:clearTimeout)(l),Gr=0,c=zr},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,d,y){var M=d?function(b,x,E,w){m(b,x,E,w),h.remove(M)}:m;return h.remove(m),o[y?"unshift":"push"](M),pr(),M},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},h}(),pr=function(){return!Gr&&Gt.wake()},Oe={},$g=/^[\d.\-M][\d.\-,\s]/,Jg=/["']/g,Qg=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Jg,"").trim():+c,i=l.substr(o+1).trim();return t},e0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},t0=function(e){var t=(e+"").split("("),n=Oe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Qg(t[1])]:e0(e).split(",").map(yu)):Oe._CE&&$g.test(e)?Oe._CE("",e):n},zu=function(e){return function(t){return 1-e(1-t)}},ku=function s(e,t){for(var n=e._first,i;n;)n instanceof Pt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},vi=function(e,t){return e&&(Ze(e)?e:Oe[e]||t0(e))||t},wi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Ut(e,function(o){Oe[o]=Vt[o]=r,Oe[a=o.toLowerCase()]=n;for(var l in r)Oe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Oe[o+"."+l]=r[l]}),r},Gu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},La=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/$a*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Cg((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Gu(o);return r=$a/r,l.config=function(c,u){return s(e,c,u)},l},Da=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Gu(n);return i.config=function(r){return s(e,r)},i};Ut("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;wi(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Oe.Linear.easeNone=Oe.none=Oe.Linear.easeIn;wi("Elastic",La("in"),La("out"),La());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};wi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);wi("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});wi("Circ",function(s){return-(uu(1-s*s)-1)});wi("Sine",function(s){return s===1?1:-Rg(s*wg)+1});wi("Back",Da("in"),Da("out"),Da());Oe.SteppedEase=Oe.steps=Vt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-vt;return function(o){return((i*Yr(0,a,o)|0)+r)*n}}};hr.ease=Oe["quad.out"];Ut("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return wo+=s+","+s+"Params,"});var Hu=function(e,t){this.id=Ag++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vu,this.set=t?t.getSetter:Lo},mr=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,dr(this,+t.duration,1,1),this.data=t.data,st&&(this._ctx=st,st.data.push(this)),Gr||Gt.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,dr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(pr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ws(this,n),!r._dp||r.parent||bu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===vt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Mu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?fr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Us(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Yr(-Math.abs(this._delay),this._tDur,i),!0),Vs(this),Fg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(pr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==vt&&(this._tTime-=vt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(It(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Us(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Dg);var i=yt;return yt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),yt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,xc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,xc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(qt(this,n),It(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,It(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-vt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=Ze(n)?n:Su,o=function(){var c=i.then;i.then=null,Ze(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Pr(this)},s}();Qt(mr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Pt=function(s){cu(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=It(n.sortChildren),Ye&&pn(n.parent||Ye,An(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Tu(An(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Ur(0,arguments,this),this},t.from=function(i,r,a){return Ur(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Ur(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Ir(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new at(i,r,qt(this,a),1),this},t.call=function(i,r,a){return pn(this,at.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new at(i,a,qt(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,Ir(a).immediateRender=It(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,Ir(o).immediateRender=It(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ft(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,v,_,m,d,y,M,b,x,E,w;if(this!==Ye&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,b=this._start,M=this._ts,d=!M,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=ft(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),x=fr(this._tTime,m),!o&&this._tTime&&x!==_&&this._tTime-x*m-this._dur<=0&&(x=_),E&&_&1&&(f=c-f,w=1),_!==x&&!this._lock){var C=E&&x&1,g=C===(E&&_&1);if(_<x&&(C=!C),o=C?0:c,this._lock=1,this.render(o||(w?0:ft(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&$t(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,g&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;ku(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=kg(this,ft(o),ft(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!_&&($t(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(v=p._next,(p._act||f>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,r,a),f!==this._time||!this._ts&&!d){y=0,v&&(u+=this._zTime=-1e-8);break}}p=v}else{p=this._last;for(var S=i<0?i:f;p;){if(v=p._prev,(p._act||S<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,r,a||yt&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){y=0,v&&(u+=this._zTime=S?-1e-8:vt);break}}p=v}}if(y&&!r&&(this.pause(),y.render(f>=o?0:-1e-8)._zTime=f>=o?1:-1,this._ts))return this._start=b,Vs(this),this.render(i,r,a);this._onUpdate&&!r&&$t(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Zn(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&($t(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(In(r)||(r=qt(this,r,i)),!(i instanceof mr)){if(St(i))return i.forEach(function(o){return a.add(o,r)}),this;if(ht(i))return this.addLabel(i,r);if(Ze(i))i=at.delayedCall(0,i);else return this}return this!==i?pn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof at?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return ht(i)?this.removeLabel(i):Ze(i)?this.killTweensOf(i):(Hs(this,i),i===this._recent&&(this._recent=this._last),xi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ft(Gt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=qt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=at.delayedCall(0,r||zr,a);return o.data="isPause",this._hasPause=1,pn(this,o,qt(this,i))},t.removePause=function(i){var r=this._first;for(i=qt(this,i);r;)r._start===i&&r.data==="isPause"&&Zn(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Gn!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Zt(i),l=this._first,c=In(r),u;l;)l instanceof at?Ig(l._targets,o)&&(c?(!Gn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=qt(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,v=at.to(a,Qt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||vt,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());v._dur!==m&&dr(v,m,0,1).render(v._time,!0,!0),p=1}u&&u.apply(v,h||[])}},r));return f?v.render(0):v},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Qt({startAt:{time:qt(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),vc(this,qt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),vc(this,qt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+vt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return xi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xi(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=_n,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,pn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;dr(a,a===Ye&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ye._ts&&(Mu(Ye,Us(i,Ye)),xu=Gt.frame),Gt.frame>=mc){mc+=Ht.autoSleep||120;var r=Ye._first;if((!r||!r._ts)&&Ht.autoSleep&&Gt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Gt.sleep()}}},e}(mr);Qt(Pt.prototype,{_lock:0,_hasPause:0,_forcing:0});var n0=function(e,t,n,i,r,a,o){var l=new Ot(this._pt,e,t,0,1,ju,null,r),c=0,u=0,h,f,p,v,_,m,d,y;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=kr(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),f=n.match(Ra)||[];h=Ra.exec(i);)v=h[0],_=i.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),v!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:v.charAt(1)==="="?rr(m,v)-m:parseFloat(v)-m,m:p&&p<4?Math.round:0},c=Ra.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(du.test(i)||d)&&(l.e=0),this._pt=l,l},Ro=function(e,t,n,i,r,a,o,l,c,u){Ze(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:Ze(h)?c?e[t.indexOf("set")||!Ze(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=Ze(h)?c?o0:qu:Po,v;if(ht(i)&&(~i.indexOf("random(")&&(i=kr(i)),i.charAt(1)==="="&&(v=rr(f,i)+(xt(f)||0),(v||v===0)&&(i=v))),!u||f!==i||ao)return!isNaN(f*i)&&i!==""?(v=new Ot(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?c0:Yu,0,p),c&&(v.fp=c),o&&v.modifier(o,this,e),this._pt=v):(!h&&!(t in e)&&bo(t,i),n0.call(this,e,t,f,i,p,l||Ht.stringFilter,c))},i0=function(e,t,n,i,r){if(Ze(e)&&(e=Or(e,r,t,n,i)),!vn(e)||e.style&&e.nodeType||St(e)||hu(e))return ht(e)?Or(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Or(e[o],r,t,n,i);return a},Vu=function(e,t,n,i,r,a){var o,l,c,u;if(kt[e]&&(o=new kt[e]).init(r,o.rawVars?t[e]:i0(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Ot(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==er))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Gn,ao,Co=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,v=i.keyframes,_=i.autoRevert,m=e._dur,d=e._startAt,y=e._targets,M=e.parent,b=M&&M.data==="nested"?M.vars.targets:y,x=e._overwrite==="auto"&&!Mo,E=e.timeline,w,C,g,S,D,k,O,N,z,K,H,V,Q;if(E&&(!v||!r)&&(r="none"),e._ease=vi(r,hr.ease),e._yEase=p?zu(vi(p===!0?r:p,hr.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!i.runBackwards,!E||v&&!i.stagger){if(N=y[0]?gi(y[0]).harness:0,V=N&&i[N.prop],w=Is(i,To),d&&(d._zTime<0&&d.progress(1),t<0&&f&&o&&!_?d.render(-1,!0):d.revert(f&&m?Ts:Lg),d._lazy=0),a){if(Zn(e._startAt=at.set(y,Qt({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!d&&It(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yt||!o&&!_)&&e._startAt.revert(Ts),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!d){if(t&&(o=!1),g=Qt({overwrite:!1,data:"isFromStart",lazy:o&&!d&&It(l),immediateRender:o,stagger:0,parent:M},w),V&&(g[N.prop]=V),Zn(e._startAt=at.set(y,g)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yt?e._startAt.revert(Ts):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,vt,vt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&It(l)||l&&!m,C=0;C<y.length;C++){if(D=y[C],O=D._gsap||Ao(y)[C]._gsap,e._ptLookup[C]=K={},eo[O.id]&&qn.length&&Ds(),H=b===y?C:b.indexOf(D),N&&(z=new N).init(D,V||w,e,H,b)!==!1&&(e._pt=S=new Ot(e._pt,D,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(J){K[J]=S}),z.priority&&(k=1)),!N||V)for(g in w)kt[g]&&(z=Vu(g,w,e,H,D,b))?z.priority&&(k=1):K[g]=S=Ro.call(e,D,g,"get",w[g],H,b,0,i.stringFilter);e._op&&e._op[C]&&e.kill(D,e._op[C]),x&&e._pt&&(Gn=e,Ye.killTweensOf(D,K,e.globalTime(t)),Q=!e.parent,Gn=0),e._pt&&l&&(eo[O.id]=1)}k&&Ku(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,v&&t<=0&&E.render(_n,!0,!0)},r0=function(e,t,n,i,r,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return ao=1,e.vars[t]="+=0",Co(e,o),ao=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=et(n)+xt(u.e)),u.b&&(u.b=c.s+xt(u.b))},s0=function(e,t){var n=e[0]?gi(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=Ei({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},a0=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(St(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Or=function(e,t,n,i,r){return Ze(e)?e.call(t,n,i,r):ht(e)&&~e.indexOf("random(")?kr(e):e},Wu=wo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Xu={};Ut(Wu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Xu[s]=1});var at=function(s){cu(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Ir(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,v=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,y=i.parent||Ye,M=(St(n)||hu(n)?In(n[0]):"length"in i)?[n]:Zt(n),b,x,E,w,C,g,S,D;if(o._targets=M.length?Ao(M):Ls("GSAP target "+n+" not found. https://greensock.com",!Ht.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,v||f||Ss(c)||Ss(u)){if(i=o.vars,b=o.timeline=new Pt({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:M}),b.kill(),b.parent=b._dp=An(o),b._start=0,f||Ss(c)||Ss(u)){if(w=M.length,S=f&&Cu(f),vn(f))for(C in f)~Wu.indexOf(C)&&(D||(D={}),D[C]=f[C]);for(x=0;x<w;x++)E=Is(i,Xu),E.stagger=0,d&&(E.yoyoEase=d),D&&Ei(E,D),g=M[x],E.duration=+Or(c,An(o),x,g,M),E.delay=(+Or(u,An(o),x,g,M)||0)-o._delay,!f&&w===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),b.to(g,E,S?S(x,g,M):0),b._ease=Oe.none;b.duration()?c=u=0:o.timeline=0}else if(v){Ir(Qt(b.vars.defaults,{ease:"none"})),b._ease=vi(v.ease||i.ease||"none");var k=0,O,N,z;if(St(v))v.forEach(function(K){return b.to(M,K,">")}),b.duration();else{E={};for(C in v)C==="ease"||C==="easeEach"||a0(C,v[C],E,v.easeEach);for(C in E)for(O=E[C].sort(function(K,H){return K.t-H.t}),k=0,x=0;x<O.length;x++)N=O[x],z={ease:N.e,duration:(N.t-(x?O[x-1].t:0))/100*c},z[C]=N.v,b.to(M,z,k),k+=z.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return p===!0&&!Mo&&(Gn=An(o),Ye.killTweensOf(M),Gn=0),pn(y,An(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!v&&o._start===ft(y._time)&&It(h)&&Ng(An(o))&&y.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-u)||0)),m&&Tu(An(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-vt&&!u?l:i<vt?0:i,f,p,v,_,m,d,y,M,b;if(!c)zg(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,a);if(f=ft(h%_),h===l?(v=this._repeat,f=c):(v=~~(h/_),v&&v===h/_&&(f=c,v--),f>c&&(f=c)),d=this._yoyo&&v&1,d&&(b=this._yEase,f=c-f),m=fr(this._tTime,_),f===o&&!a&&this._initted)return this._tTime=h,this;v!==m&&(M&&this._yEase&&ku(M,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=a=1,this.render(ft(_*v),!0).invalidate()._lock=0))}if(!this._initted){if(wu(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(b||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!o&&!r&&!v&&($t(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;M&&M.render(i<0?i:!f&&d?-1e-8:M._dur*M._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&to(this,i,r,a),$t(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!r&&this.parent&&$t(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&to(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Zn(this,1),!r&&!(u&&!o)&&(h||o||d)&&($t(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){Gr||Gt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Co(this,l),c=this._ease(l/this._dur),r0(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(Ws(this,0),this.parent||Eu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Pr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Gn&&Gn.vars.overwrite!==!0)._first||Pr(this),this.parent&&a!==this.timeline.totalDuration()&&dr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Zt(i):o,c=this._ptLookup,u=this._pt,h,f,p,v,_,m,d;if((!r||r==="all")&&Og(o,l))return r==="all"&&(this._pt=0),Pr(this);for(h=this._op=this._op||[],r!=="all"&&(ht(r)&&(_={},Ut(r,function(y){return _[y]=1}),r=_),r=s0(o,r)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],r==="all"?(h[d]=r,v=f,p={}):(p=h[d]=h[d]||{},v=r);for(_ in v)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Hs(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Pr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ur(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Ur(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Ye.killTweensOf(i,r,a)},e}(mr);Qt(at.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ut("staggerTo,staggerFrom,staggerFromTo",function(s){at[s]=function(){var e=new Pt,t=io.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Po=function(e,t,n){return e[t]=n},qu=function(e,t,n){return e[t](n)},o0=function(e,t,n,i){return e[t](i.fp,n)},l0=function(e,t,n){return e.setAttribute(t,n)},Lo=function(e,t){return Ze(e[t])?qu:yo(e[t])&&e.setAttribute?l0:Po},Yu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},c0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ju=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Do=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},u0=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},h0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Hs(this,t,"_pt"):t.dep||(n=1),t=i;return!n},f0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ku=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Ot=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Yu,this.d=l||this,this.set=c||Po,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=f0,this.m=n,this.mt=r,this.tween=i},s}();Ut(wo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return To[s]=1});Vt.TweenMax=Vt.TweenLite=at;Vt.TimelineLite=Vt.TimelineMax=Pt;Ye=new Pt({sortChildren:!1,defaults:hr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ht.stringFilter=Bu;var _r=[],As={},d0=[],yc=0,Ia=function(e){return(As[e]||d0).map(function(t){return t()})},oo=function(){var e=Date.now(),t=[];e-yc>2&&(Ia("matchMediaInit"),_r.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Yt.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Ia("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),yc=e,Ia("matchMedia"))},Zu=function(){function s(t,n){this.selector=n&&ro(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Ze(n)&&(r=i,i=n,n=Ze);var a=this,o=function(){var c=st,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=ro(r)),st=a,h=i.apply(a,arguments),Ze(h)&&a._r.push(h),st=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Ze?o(a):n?a[n]=o:o},e.ignore=function(n){var i=st;st=null,n(this),st=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof at&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof mr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=_r.indexOf(this);~o&&_r.splice(o,1)}},e.revert=function(n){this.kill(n||{})},s}(),p0=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){vn(n)||(n={matches:n});var a=new Zu(0,r||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Yt.matchMedia(n[c]),l&&(_r.indexOf(a)<0&&_r.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(oo):l.addEventListener("change",oo)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Os={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ou(i)})},timeline:function(e){return new Pt(e)},getTweensOf:function(e,t){return Ye.getTweensOf(e,t)},getProperty:function(e,t,n,i){ht(e)&&(e=Zt(e)[0]);var r=gi(e||{}).get,a=n?Su:yu;return n==="native"&&(n=""),e&&(t?a((kt[t]&&kt[t].get||r)(e,t,n,i)):function(o,l,c){return a((kt[o]&&kt[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Zt(e),e.length>1){var i=e.map(function(u){return Ft.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=kt[t],o=gi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;er._pt=0,h.init(e,n?u+n:u,er,0,[e]),h.render(1,h),er._pt&&Do(1,er)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Ft.to(e,Ei((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return Ye.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vi(e.ease,hr.ease)),_c(hr,e||{})},config:function(e){return _c(Ht,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!kt[o]&&!Vt[o]&&Ls(t+" effect requires "+o+" plugin.")}),Ca[t]=function(o,l,c){return n(Zt(o),Qt(l||{},r),c)},a&&(Pt.prototype[t]=function(o,l,c){return this.add(Ca[t](o,vn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Oe[e]=vi(t)},parseEase:function(e,t){return arguments.length?vi(e,t):Oe},getById:function(e){return Ye.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Pt(e),i,r;for(n.smoothChildTiming=It(e.smoothChildTiming),Ye.remove(n),n._dp=0,n._time=n._tTime=Ye._time,i=Ye._first;i;)r=i._next,(t||!(!i._dur&&i instanceof at&&i.vars.onComplete===i._targets[0]))&&pn(n,i,i._start-i._delay),i=r;return pn(Ye,n,0),n},context:function(e,t){return e?new Zu(e,t):st},matchMedia:function(e){return new p0(e)},matchMediaRefresh:function(){return _r.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||oo()},addEventListener:function(e,t){var n=As[e]||(As[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=As[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Yg,wrapYoyo:jg,distribute:Cu,random:Lu,snap:Pu,normalize:qg,getUnit:xt,clamp:Hg,splitColor:Fu,toArray:Zt,selector:ro,mapRange:Iu,pipe:Wg,unitize:Xg,interpolate:Kg,shuffle:Ru},install:_u,effects:Ca,ticker:Gt,updateRoot:Pt.updateRoot,plugins:kt,globalTimeline:Ye,core:{PropTween:Ot,globals:gu,Tween:at,Timeline:Pt,Animation:mr,getCache:gi,_removeLinkedListItem:Hs,reverting:function(){return yt},context:function(e){return e&&st&&(st.data.push(e),e._ctx=st),st},suppressOverwrites:function(e){return Mo=e}}};Ut("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Os[s]=at[s]});Gt.add(Pt.updateRoot);er=Os.to({},{duration:0});var m0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},_0=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=m0(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Ua=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(ht(r)&&(l={},Ut(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}_0(o,r)}}}},Ft=Os.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)yt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ua("roundProps",so),Ua("modifiers"),Ua("snap",Pu))||Os;at.version=Pt.version=Ft.version="3.11.5";mu=1;So()&&pr();Oe.Power0;Oe.Power1;Oe.Power2;Oe.Power3;Oe.Power4;Oe.Linear;Oe.Quad;Oe.Cubic;Oe.Quart;Oe.Quint;Oe.Strong;Oe.Elastic;Oe.Back;Oe.SteppedEase;Oe.Bounce;Oe.Sine;Oe.Expo;Oe.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sc,Hn,sr,Io,di,Ec,Uo,g0=function(){return typeof window<"u"},Un={},ci=180/Math.PI,ar=Math.PI/180,Zi=Math.atan2,bc=1e8,Oo=/([A-Z])/g,x0=/(left|right|width|margin|padding|x)/i,v0=/[\s,\(]\S/,mn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},M0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},y0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},S0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},$u=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ju=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},E0=function(e,t,n){return e.style[t]=n},b0=function(e,t,n){return e.style.setProperty(t,n)},T0=function(e,t,n){return e._gsap[t]=n},w0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},A0=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},R0=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},je="transform",un=je+"Origin",C0=function s(e,t){var n=this,i=this.target,r=i.style;if(e in Un){if(this.tfm=this.tfm||{},e!=="transform")e=mn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Cn(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Cn(i,e);else return mn.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(je)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(un,t,"")),e=je}(r||t)&&this.props.push(e,t,r[e])},Qu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},P0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Oo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Uo(),(!r||!r.isStart)&&!n[je]&&(Qu(n),i.uncache=1)}},eh=function(e,t){var n={target:e,props:[],revert:P0,save:C0};return e._gsap||Ft.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},th,co=function(e,t){var n=Hn.createElementNS?Hn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Hn.createElement(e);return n.style?n:Hn.createElement(e)},gn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Oo,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,gr(t)||t,1)||""},Tc="O,Moz,ms,Ms,Webkit".split(","),gr=function(e,t,n){var i=t||di,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Tc[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Tc[a]:"")+e},uo=function(){g0()&&window.document&&(Sc=window,Hn=Sc.document,sr=Hn.documentElement,di=co("div")||{style:{}},co("div"),je=gr(je),un=je+"Origin",di.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",th=!!gr("perspective"),Uo=Ft.core.reverting,Io=1)},Oa=function s(e){var t=co("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(sr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),sr.removeChild(t),this.style.cssText=r,a},wc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},nh=function(e){var t;try{t=e.getBBox()}catch{t=Oa.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Oa||(t=Oa.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+wc(e,["x","cx","x1"])||0,y:+wc(e,["y","cy","y1"])||0,width:0,height:0}:t},ih=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&nh(e))},Hr=function(e,t){if(t){var n=e.style;t in Un&&t!==un&&(t=je),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Oo,"-$1").toLowerCase())):n.removeAttribute(t)}},Vn=function(e,t,n,i,r,a){var o=new Ot(e._pt,t,n,0,1,a?Ju:$u);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Ac={deg:1,rad:1,turn:1},L0={grid:1,flex:1},$n=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=di.style,l=x0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",v,_,m,d;return i===a||!r||Ac[i]||Ac[a]?r:(a!=="px"&&!f&&(r=s(e,t,n,"px")),d=e.getCTM&&ih(e),(p||a==="%")&&(Un[t]||~t.indexOf("adius"))?(v=d?e.getBBox()[l?"width":"height"]:e[u],et(p?r/v*h:r/100*v)):(o[l?"width":"height"]=h+(f?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Hn||!_.appendChild)&&(_=Hn.body),m=_._gsap,m&&p&&m.width&&l&&m.time===Gt.time&&!m.uncache?et(r/m.width*h):((p||a==="%")&&!L0[gn(_,"display")]&&(o.position=gn(e,"position")),_===e&&(o.position="static"),_.appendChild(di),v=di[u],_.removeChild(di),o.position="absolute",l&&p&&(m=gi(_),m.time=Gt.time,m.width=_[u]),et(f?v*r/h:v&&r?h/v*r:0))))},Cn=function(e,t,n,i){var r;return Io||uo(),t in mn&&t!=="transform"&&(t=mn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Un[t]&&t!=="transform"?(r=Wr(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ns(gn(e,un))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Fs[t]&&Fs[t](e,t,n)||gn(e,t)||vu(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?$n(e,t,r,n)+n:r},D0=function(e,t,n,i){if(!n||n==="none"){var r=gr(t,e,1),a=r&&gn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=gn(e,"borderTopColor"))}var o=new Ot(this._pt,e.style,t,0,1,ju),l=0,c=0,u,h,f,p,v,_,m,d,y,M,b,x;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=gn(e,t)||i,e.style[t]=n),u=[n,i],Bu(u),n=u[0],i=u[1],f=n.match(Qi)||[],x=i.match(Qi)||[],x.length){for(;h=Qi.exec(i);)m=h[0],y=i.substring(l,h.index),v?v=(v+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(v=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,b=_.substr((p+"").length),m.charAt(1)==="="&&(m=rr(p,m)+b),d=parseFloat(m),M=m.substr((d+"").length),l=Qi.lastIndex-M.length,M||(M=M||Ht.units[t]||b,l===i.length&&(i+=M,o.e+=M)),b!==M&&(p=$n(e,t,_,M)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:p,c:d-p,m:v&&v<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Ju:$u;return du.test(i)&&(o.e=0),this._pt=o,o},Rc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},I0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Rc[n]||n,t[1]=Rc[i]||i,t.join(" ")},U0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Un[o]&&(l=1,o=o==="transformOrigin"?un:je),Hr(n,o);l&&(Hr(n,je),a&&(a.svg&&n.removeAttribute("transform"),Wr(n,1),a.uncache=1,Qu(i)))}},Fs={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Ot(e._pt,t,n,0,0,U0);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Vr=[1,0,0,1,0,0],rh={},sh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Cc=function(e){var t=gn(e,je);return sh(t)?Vr:t.substr(7).match(fu).map(et)},Fo=function(e,t){var n=e._gsap||gi(e),i=e.style,r=Cc(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Vr:r):(r===Vr&&!e.offsetParent&&e!==sr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,sr.appendChild(e)),r=Cc(e),l?i.display=l:Hr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):sr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ho=function(e,t,n,i,r,a){var o=e._gsap,l=r||Fo(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],v=l[1],_=l[2],m=l[3],d=l[4],y=l[5],M=t.split(" "),b=parseFloat(M[0])||0,x=parseFloat(M[1])||0,E,w,C,g;n?l!==Vr&&(w=p*m-v*_)&&(C=b*(m/w)+x*(-_/w)+(_*y-m*d)/w,g=b*(-v/w)+x*(p/w)-(p*y-v*d)/w,b=C,x=g):(E=nh(e),b=E.x+(~M[0].indexOf("%")?b/100*E.width:b),x=E.y+(~(M[1]||M[0]).indexOf("%")?x/100*E.height:x)),i||i!==!1&&o.smooth?(d=b-c,y=x-u,o.xOffset=h+(d*p+y*_)-d,o.yOffset=f+(d*v+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=x,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[un]="0px 0px",a&&(Vn(a,o,"xOrigin",c,b),Vn(a,o,"yOrigin",u,x),Vn(a,o,"xOffset",h,o.xOffset),Vn(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+x)},Wr=function(e,t){var n=e._gsap||new Hu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=gn(e,un)||"0",u,h,f,p,v,_,m,d,y,M,b,x,E,w,C,g,S,D,k,O,N,z,K,H,V,Q,J,pe,ie,W,Z,re;return u=h=f=_=m=d=y=M=b=0,p=v=1,n.svg=!!(e.getCTM&&ih(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[je]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[je]!=="none"?l[je]:"")),i.scale=i.rotate=i.translate="none"),w=Fo(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),ho(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,w)),x=n.xOrigin||0,E=n.yOrigin||0,w!==Vr&&(D=w[0],k=w[1],O=w[2],N=w[3],u=z=w[4],h=K=w[5],w.length===6?(p=Math.sqrt(D*D+k*k),v=Math.sqrt(N*N+O*O),_=D||k?Zi(k,D)*ci:0,y=O||N?Zi(O,N)*ci+_:0,y&&(v*=Math.abs(Math.cos(y*ar))),n.svg&&(u-=x-(x*D+E*O),h-=E-(x*k+E*N))):(re=w[6],W=w[7],J=w[8],pe=w[9],ie=w[10],Z=w[11],u=w[12],h=w[13],f=w[14],C=Zi(re,ie),m=C*ci,C&&(g=Math.cos(-C),S=Math.sin(-C),H=z*g+J*S,V=K*g+pe*S,Q=re*g+ie*S,J=z*-S+J*g,pe=K*-S+pe*g,ie=re*-S+ie*g,Z=W*-S+Z*g,z=H,K=V,re=Q),C=Zi(-O,ie),d=C*ci,C&&(g=Math.cos(-C),S=Math.sin(-C),H=D*g-J*S,V=k*g-pe*S,Q=O*g-ie*S,Z=N*S+Z*g,D=H,k=V,O=Q),C=Zi(k,D),_=C*ci,C&&(g=Math.cos(C),S=Math.sin(C),H=D*g+k*S,V=z*g+K*S,k=k*g-D*S,K=K*g-z*S,D=H,z=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=et(Math.sqrt(D*D+k*k+O*O)),v=et(Math.sqrt(K*K+re*re)),C=Zi(z,K),y=Math.abs(C)>2e-4?C*ci:0,b=Z?1/(Z<0?-Z:Z):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!sh(gn(e,je)),H&&e.setAttribute("transform",H))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(p*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(v*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=et(p),n.scaleY=et(v),n.rotation=et(_)+o,n.rotationX=et(m)+o,n.rotationY=et(d)+o,n.skewX=y+o,n.skewY=M+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[un]=Ns(c)),n.xOffset=n.yOffset=0,n.force3D=Ht.force3D,n.renderTransform=n.svg?F0:th?ah:O0,n.uncache=0,n},Ns=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fa=function(e,t,n){var i=xt(t);return et(parseFloat(t)+parseFloat($n(e,"x",n+"px",i)))+i},O0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ah(e,t)},si="0deg",Rr="0px",ai=") ",ah=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,v=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,y=n.target,M=n.zOrigin,b="",x=d==="auto"&&e&&e!==1||d===!0;if(M&&(h!==si||u!==si)){var E=parseFloat(u)*ar,w=Math.sin(E),C=Math.cos(E),g;E=parseFloat(h)*ar,g=Math.cos(E),a=Fa(y,a,w*g*-M),o=Fa(y,o,-Math.sin(E)*-M),l=Fa(y,l,C*g*-M+M)}m!==Rr&&(b+="perspective("+m+ai),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(x||a!==Rr||o!==Rr||l!==Rr)&&(b+=l!==Rr||x?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ai),c!==si&&(b+="rotate("+c+ai),u!==si&&(b+="rotateY("+u+ai),h!==si&&(b+="rotateX("+h+ai),(f!==si||p!==si)&&(b+="skew("+f+", "+p+ai),(v!==1||_!==1)&&(b+="scale("+v+", "+_+ai),y.style[je]=b||"translate(0, 0)"},F0=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,v=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,y=n.forceCSS,M=parseFloat(a),b=parseFloat(o),x,E,w,C,g;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ar,c*=ar,x=Math.cos(l)*h,E=Math.sin(l)*h,w=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=ar,g=Math.tan(c-u),g=Math.sqrt(1+g*g),w*=g,C*=g,u&&(g=Math.tan(u),g=Math.sqrt(1+g*g),x*=g,E*=g)),x=et(x),E=et(E),w=et(w),C=et(C)):(x=h,C=f,E=w=0),(M&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(M=$n(p,"x",a,"px"),b=$n(p,"y",o,"px")),(v||_||m||d)&&(M=et(M+v-(v*x+_*w)+m),b=et(b+_-(v*E+_*C)+d)),(i||r)&&(g=p.getBBox(),M=et(M+i/100*g.width),b=et(b+r/100*g.height)),g="matrix("+x+","+E+","+w+","+C+","+M+","+b+")",p.setAttribute("transform",g),y&&(p.style[je]=g)},N0=function(e,t,n,i,r){var a=360,o=ht(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?ci:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-360)),h==="cw"&&c<0?c=(c+a*bc)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*bc)%a-~~(c/a)*a)),e._pt=f=new Ot(e._pt,t,n,i,c,M0),f.e=u,f.u="deg",e._props.push(n),f},Pc=function(e,t){for(var n in t)e[n]=t[n];return e},B0=function(e,t,n){var i=Pc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,p,v;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[je]=t,o=Wr(n,1),Hr(n,je),n.setAttribute("transform",c)):(c=getComputedStyle(n)[je],a[je]=t,o=Wr(n,1),a[je]=c);for(l in Un)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(p=xt(c),v=xt(u),h=p!==v?$n(n,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new Ot(e._pt,o,l,h,f-h,lo),e._pt.u=v||0,e._props.push(l));Pc(o,i)};Ut("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});Fs[e>1?"border"+s:s]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=a.map(function(v){return Cn(o,v,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(v,_){return p[v]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,p,h)}});var oh={name:"css",register:uo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,p,v,_,m,d,y,M,b,x,E,w,C;Io||uo(),this.styles=this.styles||eh(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(kt[_]&&Vu(_,t,n,i,e,r)))){if(p=typeof u,v=Fs[_],p==="function"&&(u=u.call(n,i,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=kr(u)),v)v(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Yn.lastIndex=0,Yn.test(c)||(m=xt(c),d=xt(u)),d?m!==d&&(c=$n(e,_,c,d)+d):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,_),a.push(_),C.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],ht(c)&&~c.indexOf("random(")&&(c=kr(c)),xt(c+"")||(c+=Ht.units[_]||xt(Cn(e,_))||""),(c+"").charAt(1)==="="&&(c=Cn(e,_))):c=Cn(e,_),f=parseFloat(c),y=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in mn&&(_==="autoAlpha"&&(f===1&&Cn(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,o.visibility),Vn(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=mn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Un,M){if(this.styles.save(_),b||(x=e._gsap,x.renderTransform&&!t.parseTransform||Wr(e,t.parseTransform),E=t.smoothOrigin!==!1&&x.smooth,b=this._pt=new Ot(this._pt,o,je,0,1,x.renderTransform,x,0,-1),b.dep=1),_==="scale")this._pt=new Ot(this._pt,x,"scaleY",x.scaleY,(y?rr(x.scaleY,y+h):h)-x.scaleY||0,lo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(un,0,o[un]),u=I0(u),x.svg?ho(e,u,0,E,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==x.zOrigin&&Vn(this,x,"zOrigin",x.zOrigin,d),Vn(this,o,_,Ns(c),Ns(u)));continue}else if(_==="svgOrigin"){ho(e,u,1,E,0,this);continue}else if(_ in rh){N0(this,x,_,f,y?rr(f,y+u):u);continue}else if(_==="smoothOrigin"){Vn(this,x,"smooth",x.smooth,u);continue}else if(_==="force3D"){x[_]=u;continue}else if(_==="transform"){B0(this,u,e);continue}}else _ in o||(_=gr(_)||_);if(M||(h||h===0)&&(f||f===0)&&!v0.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),d=xt(u)||(_ in Ht.units?Ht.units[_]:m),m!==d&&(f=$n(e,_,c,d)),this._pt=new Ot(this._pt,M?x:o,_,f,(y?rr(f,y+h):h)-f,!M&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?S0:lo),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=y0);else if(_ in o)D0.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,r);else if(_!=="parseTransform"){bo(_,u);continue}M||(_ in o?C.push(_,0,o[_]):C.push(_,1,c||e[_])),a.push(_)}}w&&Ku(this)},render:function(e,t){if(t.tween._time||!Uo())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Cn,aliases:mn,getSetter:function(e,t,n){var i=mn[t];return i&&i.indexOf(",")<0&&(t=i),t in Un&&t!==un&&(e._gsap.x||Cn(e,"x"))?n&&Ec===n?t==="scale"?w0:T0:(Ec=n||{})&&(t==="scale"?A0:R0):e.style&&!yo(e.style[t])?E0:~t.indexOf("-")?b0:Lo(e,t)},core:{_removeProperty:Hr,_getMatrix:Fo}};Ft.utils.checkPrefix=gr;Ft.core.getStyleSaver=eh;(function(s,e,t,n){var i=Ut(s+","+e+","+t,function(r){Un[r]=1});Ut(e,function(r){Ht.units[r]="deg",rh[r]=1}),mn[i[13]]=s+","+e,Ut(n,function(r){var a=r.split(":");mn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ut("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ht.units[s]="px"});Ft.registerPlugin(oh);var Rs=Ft.registerPlugin(oh)||Ft;Rs.core.Tween;var Na={exports:{}},Lc;function z0(){return Lc||(Lc=1,function(s){(function(){function e(a,o){if(o&&o.multiple&&!Array.isArray(a))throw new Error("Invalid argument type: Expected an Array to serialize multiple values.");const l=4294967296;let c,u,h=new Uint8Array(128),f=0;if(o&&o.multiple)for(let g=0;g<a.length;g++)p(a[g]);else p(a);return h.subarray(0,f);function p(g,S){switch(typeof g){case"undefined":v();break;case"boolean":_(g);break;case"number":m(g);break;case"string":d(g);break;case"object":g===null?v():g instanceof Date?x(g):Array.isArray(g)?y(g):g instanceof Uint8Array||g instanceof Uint8ClampedArray?M(g):g instanceof Int8Array||g instanceof Int16Array||g instanceof Uint16Array||g instanceof Int32Array||g instanceof Uint32Array||g instanceof Float32Array||g instanceof Float64Array?y(g):b(g);break;default:if(!S&&o&&o.invalidTypeReplacement)typeof o.invalidTypeReplacement=="function"?p(o.invalidTypeReplacement(g),!0):p(o.invalidTypeReplacement,!0);else throw new Error("Invalid argument type: The type '"+typeof g+"' cannot be serialized.")}}function v(g){E(192)}function _(g){E(g?195:194)}function m(g){if(isFinite(g)&&Math.floor(g)===g)if(g>=0&&g<=127)E(g);else if(g<0&&g>=-32)E(g);else if(g>0&&g<=255)w([204,g]);else if(g>=-128&&g<=127)w([208,g]);else if(g>0&&g<=65535)w([205,g>>>8,g]);else if(g>=-32768&&g<=32767)w([209,g>>>8,g]);else if(g>0&&g<=4294967295)w([206,g>>>24,g>>>16,g>>>8,g]);else if(g>=-2147483648&&g<=2147483647)w([210,g>>>24,g>>>16,g>>>8,g]);else if(g>0&&g<=18446744073709552e3){let S=g/l,D=g%l;w([211,S>>>24,S>>>16,S>>>8,S,D>>>24,D>>>16,D>>>8,D])}else g>=-9223372036854776e3&&g<=9223372036854776e3?(E(211),C(g)):g<0?w([211,128,0,0,0,0,0,0,0]):w([207,255,255,255,255,255,255,255,255]);else u||(c=new ArrayBuffer(8),u=new DataView(c)),u.setFloat64(0,g),E(203),w(new Uint8Array(c))}function d(g){let S=n(g),D=S.length;D<=31?E(160+D):D<=255?w([217,D]):D<=65535?w([218,D>>>8,D]):w([219,D>>>24,D>>>16,D>>>8,D]),w(S)}function y(g){let S=g.length;S<=15?E(144+S):S<=65535?w([220,S>>>8,S]):w([221,S>>>24,S>>>16,S>>>8,S]);for(let D=0;D<S;D++)p(g[D])}function M(g){let S=g.length;S<=15?w([196,S]):S<=65535?w([197,S>>>8,S]):w([198,S>>>24,S>>>16,S>>>8,S]),w(g)}function b(g){let S=0;for(let D in g)g[D]!==void 0&&S++;S<=15?E(128+S):S<=65535?w([222,S>>>8,S]):w([223,S>>>24,S>>>16,S>>>8,S]);for(let D in g){let k=g[D];k!==void 0&&(p(D),p(k))}}function x(g){let S=g.getTime()/1e3;if(g.getMilliseconds()===0&&S>=0&&S<4294967296)w([214,255,S>>>24,S>>>16,S>>>8,S]);else if(S>=0&&S<17179869184){let D=g.getMilliseconds()*1e6;w([215,255,D>>>22,D>>>14,D>>>6,D<<2>>>0|S/l,S>>>24,S>>>16,S>>>8,S])}else{let D=g.getMilliseconds()*1e6;w([199,12,255,D>>>24,D>>>16,D>>>8,D]),C(S)}}function E(g){if(h.length<f+1){let S=h.length*2;for(;S<f+1;)S*=2;let D=new Uint8Array(S);D.set(h),h=D}h[f]=g,f++}function w(g){if(h.length<f+g.length){let S=h.length*2;for(;S<f+g.length;)S*=2;let D=new Uint8Array(S);D.set(h),h=D}h.set(g,f),f+=g.length}function C(g){let S,D;g>=0?(S=g/l,D=g%l):(g++,S=Math.abs(g)/l,D=Math.abs(g)%l,S=~S,D=~D),w([S>>>24,S>>>16,S>>>8,S,D>>>24,D>>>16,D>>>8,D])}}function t(a,o){let c=0;if(a instanceof ArrayBuffer&&(a=new Uint8Array(a)),typeof a!="object"||typeof a.length>"u")throw new Error("Invalid argument type: Expected a byte array (Array or Uint8Array) to deserialize.");if(!a.length)throw new Error("Invalid argument: The byte array to deserialize is empty.");a instanceof Uint8Array||(a=new Uint8Array(a));let u;if(o&&o.multiple)for(u=[];c<a.length;)u.push(h());else u=h();return u;function h(){const x=a[c++];if(x>=0&&x<=127)return x;if(x>=128&&x<=143)return m(x-128);if(x>=144&&x<=159)return d(x-144);if(x>=160&&x<=191)return y(x-160);if(x===192)return null;if(x===193)throw new Error("Invalid byte code 0xc1 found.");if(x===194)return!1;if(x===195)return!0;if(x===196)return _(-1,1);if(x===197)return _(-1,2);if(x===198)return _(-1,4);if(x===199)return M(-1,1);if(x===200)return M(-1,2);if(x===201)return M(-1,4);if(x===202)return v(4);if(x===203)return v(8);if(x===204)return p(1);if(x===205)return p(2);if(x===206)return p(4);if(x===207)return p(8);if(x===208)return f(1);if(x===209)return f(2);if(x===210)return f(4);if(x===211)return f(8);if(x===212)return M(1);if(x===213)return M(2);if(x===214)return M(4);if(x===215)return M(8);if(x===216)return M(16);if(x===217)return y(-1,1);if(x===218)return y(-1,2);if(x===219)return y(-1,4);if(x===220)return d(-1,2);if(x===221)return d(-1,4);if(x===222)return m(-1,2);if(x===223)return m(-1,4);if(x>=224&&x<=255)return x-256;throw console.debug("msgpack array:",a),new Error("Invalid byte value '"+x+"' at index "+(c-1)+" in the MessagePack binary data (length "+a.length+"): Expecting a range of 0 to 255. This is not a byte array.")}function f(x){let E=0,w=!0;for(;x-- >0;)if(w){let C=a[c++];E+=C&127,C&128&&(E-=128),w=!1}else E*=256,E+=a[c++];return E}function p(x){let E=0;for(;x-- >0;)E*=256,E+=a[c++];return E}function v(x){let E=new DataView(a.buffer,c+a.byteOffset,x);if(c+=x,x===4)return E.getFloat32(0,!1);if(x===8)return E.getFloat64(0,!1)}function _(x,E){x<0&&(x=p(E));let w=a.subarray(c,c+x);return c+=x,w}function m(x,E){x<0&&(x=p(E));let w={};for(;x-- >0;){let C=h();w[C]=h()}return w}function d(x,E){x<0&&(x=p(E));let w=[];for(;x-- >0;)w.push(h());return w}function y(x,E){x<0&&(x=p(E));let w=c;return c+=x,i(a,w,x)}function M(x,E){x<0&&(x=p(E));let w=p(1),C=_(x);switch(w){case 255:return b(C)}return{type:w,data:C}}function b(x){if(x.length===4){let E=(x[0]<<24>>>0)+(x[1]<<16>>>0)+(x[2]<<8>>>0)+x[3];return new Date(E*1e3)}if(x.length===8){let E=(x[0]<<22>>>0)+(x[1]<<14>>>0)+(x[2]<<6>>>0)+(x[3]>>>2),w=(x[3]&3)*4294967296+(x[4]<<24>>>0)+(x[5]<<16>>>0)+(x[6]<<8>>>0)+x[7];return new Date(w*1e3+E/1e6)}if(x.length===12){let E=(x[0]<<24>>>0)+(x[1]<<16>>>0)+(x[2]<<8>>>0)+x[3];c-=8;let w=f(8);return new Date(w*1e3+E/1e6)}throw new Error("Invalid data length for a date value.")}}function n(a){let o=!0,l=a.length;for(let h=0;h<l;h++)if(a.charCodeAt(h)>127){o=!1;break}let c=0,u=new Uint8Array(a.length*(o?1:4));for(let h=0;h!==l;h++){let f=a.charCodeAt(h);if(f<128){u[c++]=f;continue}if(f<2048)u[c++]=f>>6|192;else{if(f>55295&&f<56320){if(++h>=l)throw new Error("UTF-8 encode: incomplete surrogate pair");let p=a.charCodeAt(h);if(p<56320||p>57343)throw new Error("UTF-8 encode: second surrogate character 0x"+p.toString(16)+" at index "+h+" out of range");f=65536+((f&1023)<<10)+(p&1023),u[c++]=f>>18|240,u[c++]=f>>12&63|128}else u[c++]=f>>12|224;u[c++]=f>>6&63|128}u[c++]=f&63|128}return o?u:u.subarray(0,c)}function i(a,o,l){let c=o,u="";for(l+=o;c<l;){let h=a[c++];if(h>127)if(h>191&&h<224){if(c>=l)throw new Error("UTF-8 decode: incomplete 2-byte sequence");h=(h&31)<<6|a[c++]&63}else if(h>223&&h<240){if(c+1>=l)throw new Error("UTF-8 decode: incomplete 3-byte sequence");h=(h&15)<<12|(a[c++]&63)<<6|a[c++]&63}else if(h>239&&h<248){if(c+2>=l)throw new Error("UTF-8 decode: incomplete 4-byte sequence");h=(h&7)<<18|(a[c++]&63)<<12|(a[c++]&63)<<6|a[c++]&63}else throw new Error("UTF-8 decode: unknown multibyte start 0x"+h.toString(16)+" at index "+(c-1));if(h<=65535)u+=String.fromCharCode(h);else if(h<=1114111)h-=65536,u+=String.fromCharCode(h>>10|55296),u+=String.fromCharCode(h&1023|56320);else throw new Error("UTF-8 decode: code point 0x"+h.toString(16)+" exceeds UTF-16 reach")}return u}let r={serialize:e,deserialize:t,encode:e,decode:t};s?s.exports=r:window[window.msgpackJsName||"msgpack"]=r})()}(Na)),Na.exports}var k0=z0();class fo{constructor(){Ai(this,"parseReflectionTable",e=>{const t=new FileReader;return new Promise((n,i)=>{t.onerror=()=>{t.abort(),i(new DOMException("Problem parsing input file."))},t.onloadend=()=>{n(t.result);const r=k0.deserialize(new Uint8Array(t.result));this.reflTable=r[2].data,this.loadReflectionData()},t.readAsArrayBuffer(e),this.filename=e.name})});this.reflTable=null,this.panelReflData={},this.reflUnindexedDisplaySummary={},this.reflIndexedDisplaySummary={},this.filename=null,this.numReflections=null}hasReflTable(){return this.reflTable!=null}clearReflectionTable(){this.reflTable=null,this.panelReflData={},this.filename=null,this.numReflections=null}hasXYZObsData(){if(!this.hasReflTable())return!1;for(var e in this.panelReflData)if(this.panelReflData[e].count>0)return"xyzObs"in this.panelReflData[e][0];return!0}hasXYZCalData(){if(!this.hasReflTable())return!1;for(var e in this.panelReflData)if(this.panelReflData[e].count>0)return"xyzCal"in this.panelReflData[e][0];return!0}hasMillerIndicesData(){if(!this.hasReflTable())return!1;for(var e in this.panelReflData)if(this.panelReflData[e].count>0)return"millerIdx"in this.panelReflData[e][0];return!0}hasIndexedXYZObsData(){if(!this.hasReflTable())return!1;for(var e in this.panelReflData)if(this.panelReflData[e].count>0)return"xyzObs"in this.panelReflData[e][0]?"millerIdx"in this.panelReflData[e][0]:!1;return!0}containsColumn(e){return e in this.reflTable}getColumnBuffer(e){return this.reflTable[e][1][1]}getUint32Array(e){const t=this.getColumnBuffer(e),n=new DataView(t.buffer),i=new Uint32Array(t.byteLength/8);let r=0;for(let a=0;a<t.byteLength;a+=8)i[r]=n.getUint32(t.byteOffset+a,!0),r++;return i}getDoubleArray(e){const t=this.getColumnBuffer(e),n=new DataView(t.buffer),i=new Float64Array(t.length/8);let r=0;for(let a=0;a<t.byteLength;a+=8)i[r]=n.getFloat64(t.byteOffset+a,!0),r++;return i}getVec3DoubleArray(e){const t=this.getColumnBuffer(e),n=new DataView(t.buffer),i=new Array(t.length/(8*3));let r=0;for(let a=0;a<t.byteLength;a+=24){const o=new Float64Array(3);o[0]=n.getFloat64(t.byteOffset+a,!0),o[1]=n.getFloat64(t.byteOffset+a+8,!0),o[2]=n.getFloat64(t.byteOffset+a+16,!0),i[r]=o,r++}return i}getVec3Int32Array(e){const t=this.getColumnBuffer(e),n=new Array(t.length/(3*4)),i=new DataView(t.buffer);let r=0;for(let a=0;a<t.length;a+=12){const o=new Int32Array(3);o[0]=i.getInt32(t.byteOffset+a,!0),o[1]=i.getInt32(t.byteOffset+a+4,!0),o[2]=i.getInt32(t.byteOffset+a+8,!0),n[r]=o,r++}return n}getPanelNumbers(){return this.getUint32Array("panel")}getXYZObs(){return this.getVec3DoubleArray("xyzobs.px.value")}containsXYZObs(){return this.containsColumn("xyzobs.px.value")}containsRotationAnglesObs(){return this.containsColumn("xyzobs.mm.value")}getRotationAnglesObs(){const e=this.getVec3DoubleArray("xyzobs.mm.value"),t=[];for(var n=0;n<e.length;n++)t.push(e[n][2]);return t}containsRotationAnglesCal(){return this.containsColumn("xyzcal.mm")}getRotationAnglesCal(){const e=this.getVec3DoubleArray("xyzcal.mm"),t=[];for(var n=0;n<e.length;n++)t.push(e[n][2]);return t}getXYZCal(){return this.getVec3DoubleArray("xyzcal.px")}containsXYZCal(){return this.containsColumn("xyzcal.px")}containsMillerIndices(){return this.containsColumn("miller_index")}getMillerIndices(){return this.getVec3Int32Array("miller_index")}isValidMillerIndex(e){return Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)>.001}containsWavelengths(){return this.containsColumn("wavelength")}getWavelengths(){return this.getDoubleArray("wavelength")}containsWavelengthsCal(){return this.containsColumn("wavelength_cal")}getWavelengthsCal(){return this.getDoubleArray("wavelength_cal")}loadReflectionData(){const e=this.getPanelNumbers();var t,n,i,r,a,o,l;this.containsXYZObs()&&(t=this.getXYZObs()),this.containsXYZCal()&&(i=this.getXYZCal()),this.containsMillerIndices()&&(a=this.getMillerIndices()),this.containsWavelengths()&&(o=this.getWavelengths()),this.containsWavelengthsCal()&&(l=this.getWavelengthsCal()),this.containsRotationAnglesObs()&&(n=this.getRotationAnglesObs()),this.containsRotationAnglesCal()&&(r=this.getRotationAnglesCal()),console.assert(t||i);for(var c=0,u=0,h=0;h<e.length;h++){const p=e[h],v={indexed:!1};var f="<b>id: </b>"+h+" <b>panel: </b>"+p;t!=null&&(v.xyzObs=t[h],f+=" <b>xyzObs: </b> (",f+=t[h][0].toFixed(1)+", ",f+=t[h][1].toFixed(1)+", ",f+=t[h][2].toFixed(1)+")"),i!=null&&(v.xyzCal=i[h],f+=" <b>xyzCal: </b> (",f+=i[h][0].toFixed(1)+", ",f+=i[h][1].toFixed(1)+", ",f+=i[h][2].toFixed(1)+`)
`),a!=null?(v.millerIdx=a[h],this.isValidMillerIndex(a[h])?(v.indexed=!0,v.id=u,f+="<b>hkl </b>("+a[h]+")",this.reflIndexedDisplaySummary[u]=f,u++):(v.id=c,this.reflUnindexedDisplaySummary[c]=f,c++)):(v.id=c,this.reflUnindexedDisplaySummary[c]=f,c++),o!=null&&(v.wavelength=o[h]),l!=null&&(v.wavelengthCal=l[h]),n!=null&&(v.angleObs=n[h]),r!=null&&(v.angleCal=r[h]),p in this.panelReflData?this.panelReflData[p].push(v):this.panelReflData[p]=[v]}this.numReflections=e.length}getIndexedSummaryById(e){return this.reflIndexedDisplaySummary[e]}getUnindexedSummaryById(e){return this.reflUnindexedDisplaySummary[e]}getReflectionsForPanel(e){return console.assert(this.hasReflTable()),this.panelReflData[e]}}class Es{constructor(e){this.collection=e}empty(){return Object.keys(this.collection).length===0}hide(e=null){const t=e&&e in this.collection?[e]:Object.keys(this.collection);for(const n of t)this.collection[n].hide()}show(e=null){const t=e&&e in this.collection?[e]:Object.keys(this.collection);for(const n of t)this.collection[n].show()}resize(e,t=null){const n=t&&t in this.collection?[t]:Object.keys(this.collection);for(const i of n)this.collection[i].resize(e)}destroy(e=null){const t=e&&e in this.collection?[e]:Object.keys(this.collection);for(const n of t)this.collection[n].destroy();this.collection={}}}class Ba{constructor(e,t,n,i){this.sprites=[],this.createSprites(e,t,n),i||this.hide()}createSprite(e,t,n,i,r){const a=document.createElement("canvas");a.width=128,a.height=48;const o=a.getContext("2d");o.font="Bold 24px Tahoma",o.fillStyle="white",o.textAlign="center",o.textBaseline="middle",o.fillText(e,a.width/2,a.height/2);const l=new vg(a),c=new su({map:l,transparent:!0,alphaTest:.01,depthWrite:!1,depthTest:!1,sizeAttenuation:!0}),u=new gg(c);return u.scale.set(r*2,r,1),u.position.set(t,n+r*.6,i),u}createSprites(e,t,n){const i=n*4;for(let r=0;r<t.length;r++){const a=t[r],o=`${a[0]} ${a[1]} ${a[2]}`,l=this.createSprite(o,e[3*r],e[3*r+1],e[3*r+2],i);window.scene.add(l),this.sprites.push(l)}}hide(){for(const e of this.sprites)e.visible=!1}show(){for(const e of this.sprites)e.visible=!0}destroy(){for(const e of this.sprites)window.scene.remove(e),e.material.map.dispose(),e.material.dispose();this.sprites=[]}resize(e){const t=e*4;for(const n of this.sprites)n.scale.set(t*2,t,1)}}class Rn{constructor(e,t,n,i,r=null){Ai(this,"addExperiment",async e=>{this.clearExperiment(),this.clearObservedReflectionTable(),this.clearPredictedReflectionTable(),this.clearActivePredictedReflectionTable(),await this.expt.parseExperiment(e),console.assert(this.hasExperiment()),this.addBeam(),this.addSample(),this.setCameraToDefaultPositionWithExperiment(),this.showSidebar(),this.isStandalone&&this.showCloseExptButton(),this.requestRender()});Ai(this,"addExperimentFromJSONString",async(e,t=!0,n=!1)=>{this.clearExperiment(),this.hideErrorText(),this.clearObservedReflectionTable(),this.clearPredictedReflectionTable(),await this.expt.parseExperimentJSON(e),console.assert(this.hasExperiment()),this.addBeam(),this.addSample(),t&&this.showSidebar(),this.isStandalone&&this.showCloseExptButton(),this.requestRender()});Ai(this,"addObservedReflectionTable",async e=>{this.clearObservedReflectionTable(),await this.observedRefl.parseReflectionTable(e),this.addObservedReflections(),this.hasObservedReflectionTable()&&this.isStandalone&&this.showCloseReflButton(),this.requestRender()});this.isStandalone=i,this.serverWS=null,this.colors=null,r!=null?this.colors=r:this.colors=Rn.defaultColors(),this.expt=e,this.activePredictedRefl=t,this.storedPredictedRefls=[],this.storedObservedRefls=[],this.numInitialOrientations=0,this.lastExpPhi=null,this.observedRefl=n,this.headerText=document.getElementById("headerText"),this.errorText=document.getElementById("errorText"),this.sidebar=document.getElementById("sidebar"),this.closeExptButton=document.getElementById("closeExpt"),this.closeReflButton=document.getElementById("closeRefl"),this.reflectionSize=document.getElementById("reflectionSizeSlider"),this.goniometerPhi=document.getElementById("goniometerPhiSlider"),this.millerIndexLabelsCheckbox=document.getElementById("millerIndexLabelsCheckbox"),this.millerIndexLabelSizeSlider=document.getElementById("millerIndexLabelSizeSlider"),this.reflPointsObsIndexed=[],this.reflPositionsIndexed=[],this.millerIndicesIndexed=[],this.millerIndexLabels=new Es({}),this.activeMillerIndexLabelsCal=null,this.reflPointsCal=[],this.activeReflPointsCal=null,this.reflPositionsCal=[],this.activeReflPositionsCal=null,this.beamMeshes=[],this.sampleMesh=null,this.reciprocalCellMeshes=[],this.preventMouseClick=!1,this.hightlightColor=new ze(this.colors.highlight),this.reflectionInexedColor=new ze(this.colors.reflectionObsIndexed),this.reflectionCalculatedColor=new ze(this.colors.reflectionCal),this.rlpScaleFactor=1e3,this.reflSprite=new Eg().load("disc.png"),this.displayingTextFromHTMLEvent=!1,this.lastDataFromExperiment=!1}static defaultColors(){return{background:2236962,sample:16643811,reflectionObsIndexed:15158332,reflectionCal:16755370,highlight:16777215,beam:16777215,reciprocalCell:16777215,RLVLabels:"white"}}static sizes(){return{minRLVLineWidth:1,maxRLVLineWidth:8,minRLVLabelSize:18,beamLength:800,sample:1,RLVLineWidthScaleFactor:15,RLVLabelScaleFactor:7}}static cameraPositions(){return{default:new P(0,0,-1e3),defaultWithExperiment:new P(-1e3,0,0),centre:new P(0,0,0)}}static text(){return{default:"To view an experiment, drag .expt and .refl files into the browser",defaultWithExpt:null}}toggleSidebar(){this.sidebar.classList.toggle("hidden")}showSidebar(){this.sidebar.style.display="block"}clearUserPredictedReflections(){this.clearActivePredictedReflectionTable(),this.clearUserReflPointsCal(),this.clearUserReflPositionsCal();for(let t=this.storedPredictedRefls.length-1;t>this.numInitialOrientations;t--)this.storedPredictedRefls[t].clearReflectionTable(),this.storedPredictedRefls.pop();const e=JSON.stringify({channel:"server",command:"clear_planner_user_predicted_reflections",num_initial_orientations:this.numInitialOrientations});this.serverWS.send(e),this.goniometerPhi.value=this.lastExpPhi,this.lastDataFromExperiment=!0,this.storeActiveReflections(),this.hideErrorText(),this.requestRender()}clearAllPredictedReflections(){this.clearActivePredictedReflectionTable(),this.clearReflPointsCal(),this.clearReflPositionsCal(),this.millerIndexLabels.destroy(),this.millerIndexLabels=new Es({});for(var e=0;e<this.storedPredictedRefls.length;e++)this.storedPredictedRefls[e].clearReflectionTable();this.storedPredictedRefls=[],this.requestRender()}updateReflectionSize(){if(!this.hasObservedReflectionTable()&&!this.hasPredictedReflectionTable())return;if(this.observedRefl.hasXYZObsData()&&this.reflPositionsIndexed){const n=this.createPoints(this.reflPositionsIndexed[0],this.colors.reflectionObsIndexed,this.reflectionSize.value);this.clearReflPointsObsIndexed(),window.scene.add(n),this.reflPointsObsIndexed=[n]}const e=[];for(var t=0;t<this.storedPredictedRefls.length;t++)if(this.storedPredictedRefls[t].hasXYZCalData()&&this.reflPositionsCal[t]){const n=this.createPoints(this.reflPositionsCal[t],this.colors.reflectionCal[t],this.reflectionSize.value);window.scene.add(n),e.push(n)}if(this.activePredictedRefl.hasXYZCalData()&&this.activeReflPositionsCal){const n=this.createPoints(this.activeReflPositionsCal,this.colors.reflectionCal[e.length],this.reflectionSize.value);window.scene.add(n),this.clearActiveReflPointsCal(),this.activeReflPointsCal=n}this.clearReflPointsCal(),this.reflPointsCal=e,this.requestRender()}updateMillerIndexLabelsVisibility(){const e=this.millerIndexLabelsCheckbox&&this.millerIndexLabelsCheckbox.checked;this.activeMillerIndexLabelsCal&&(e?this.activeMillerIndexLabelsCal.show():this.activeMillerIndexLabelsCal.hide()),this.millerIndexLabels.empty()||(e?this.millerIndexLabels.show():this.millerIndexLabels.hide()),this.requestRender()}updateMillerIndexLabelSize(){const e=parseInt(this.millerIndexLabelSizeSlider.value);this.activeMillerIndexLabelsCal&&this.activeMillerIndexLabelsCal.resize(e),this.millerIndexLabels.empty()||this.millerIndexLabels.resize(e),this.requestRender()}getS1(e,t,n,i=[1,1]){const r=new P(e[0]*i[0],e[1]*i[1],1);return r.applyMatrix3(t),r.normalize().multiplyScalar(1/n),r}hasExperiment(){return this.expt.hasExptJSON()}clearExperiment(){for(var e=0;e<this.beamMeshes.length;e++)window.scene.remove(this.beamMeshes[e]),this.beamMeshes[e].geometry.dispose(),this.beamMeshes[e].material.dispose();for(var e=0;e<this.reciprocalCellMeshes.length;e++)window.scene.remove(this.reciprocalCellMeshes[e]),this.reciprocalCellMeshes[e].geometry.dispose(),this.reciprocalCellMeshes[e].material.dispose();this.beamMeshes=[],this.sampleMesh&&(window.scene.remove(this.sampleMesh),this.sampleMesh.geometry.dispose(),this.sampleMesh.material.dispose(),this.sampleMesh=null),this.expt.clearExperiment(),this.hideCloseExptButton(),this.clearObservedReflectionTable(),this.clearPredictedReflectionTable(),this.hideErrorText(),this.requestRender()}showCloseExptButton(){this.closeExptButton.style.display="inline",this.closeExptButton.innerHTML="<b>"+this.expt.filename+' <i class="fa fa-trash"></i>'}hideCloseExptButton(){this.closeExptButton.style.display="none"}hasObservedReflectionTable(){return this.observedRefl.hasReflTable()}hasPredictedReflectionTable(){return this.activePredictedRefl.hasReflTable()}clearReflPointsObsIndexed(){for(var e=0;e<this.reflPointsObsIndexed.length;e++)window.scene.remove(this.reflPointsObsIndexed[e]),this.reflPointsObsIndexed[e].geometry.dispose(),this.reflPointsObsIndexed[e].material.dispose();this.reflPointsObsIndexed=[]}clearUserReflPointsCal(){for(let e=this.numInitialOrientations;e<this.reflPointsCal.length;e++)window.scene.remove(this.reflPointsCal[e]),this.reflPointsCal[e].geometry.dispose(),this.reflPointsCal[e].material.dispose()}clearReflPointsCal(){for(var e=0;e<this.reflPointsCal.length;e++)window.scene.remove(this.reflPointsCal[e]),this.reflPointsCal[e].geometry.dispose(),this.reflPointsCal[e].material.dispose();this.reflPointsCal=[]}clearUserReflPositionsCal(){this.reflPositionsCal=this.reflPositionsCal.splice(0,this.numInitialOrientations)}clearReflPositionsCal(){this.reflPositionsCal=[]}clearPredictedReflectionTable(){this.clearReflPointsCal(),this.clearReflPositionsCal();for(var e=0;e<this.storedPredictedRefls.length;e++)this.storedPredictedRefls[e].clearReflectionTable();this.requestRender()}clearActiveReflPointsCal(){this.activeReflPointsCal===null||this.activeReflPointsCal===void 0||(window.scene.remove(this.activeReflPointsCal),this.activeReflPointsCal.geometry.dispose(),this.activeReflPointsCal.material.dispose(),this.activeReflPointsCal=null)}clearActiveReflPositionsCal(){this.activeReflPositionsCal=null}clearActivePredictedReflectionTable(){this.activeReflPointsCal===null&&this.activeReflPositionsCal===null||(this.clearActiveReflPointsCal(),this.clearActiveReflPositionsCal(),this.clearActiveMillerIndexLabels(),this.activePredictedRefl.clearReflectionTable(),this.requestRender())}clearObservedReflectionTable(){this.clearReflPointsObsIndexed(),this.observedRefl.clearReflectionTable(),this.hideCloseReflButton(),this.requestRender()}createPoints(e,t,n){const i=new Dt;i.setAttribute("position",new Jt(e,3));const r=new ou({size:n,map:this.reflSprite,alphaTest:.5,transparent:!0,color:t}),a=new xg(i,r);return a.frustumCulled=!1,a}showCloseReflButton(){this.closeReflButton.style.display="inline",this.closeReflButton.innerHTML="<b>"+this.observedRefl.filename+' <i class="fa fa-trash"></i>'}hideCloseReflButton(){this.closeReflButton.style.display="none"}addExptOrientation(e){console.assert("expt_ids"in e),console.assert("predicted_refl_data"in e),console.assert("phi"in e),this.hideErrorText(),this.updateGoniometerPhi(e.phi),"refl_data"in e&&this.addObservedReflectionsFromData(e.refl_data),this.addPredictedReflectionsFromData(e.predicted_refl_data,!1),this.requestRender()}addObservedReflectionsFromData(e){function t(M,b,x,E,w,C,g,S){const D=M.clone().normalize().sub(x.clone().normalize()).multiplyScalar(1/b);if(!S)return D.multiplyScalar(E.rlpScaleFactor);if(C==null)return console.warn("Rotation angles not in reflection table. Cannot generate rlps correctly."),D.multiplyScalar(E.rlpScaleFactor);var k=w.fixedRotation;const O=w.settingRotation,N=w.rotationAxis;return k=k.clone().multiply(g),D.applyMatrix3(O.clone().invert()),D.applyAxisAngle(N,-C),D.applyMatrix3(k.clone().invert().transpose()),D.multiplyScalar(E.rlpScaleFactor)}if(!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded");return}this.hideErrorText(),this.observedRefl.panelReflData=e,this.observedRefl.reflTable="reflData";const n=new Array,i=new Array,r=Object.keys(e);var a;for(var o in e)if(e[o].length>0){a=e[o][0];break}if(a===void 0)return;const l="xyzObs"in a,c="millerIdx"in a,u="wavelength"in a;for(var h=this.expt.getBeamData(0).wavelength,f=this.expt.getBeamDirection(0).multiplyScalar(-1).normalize(),p=this.expt.goniometer,v=this.expt.scan,_=p!=null&&v!=null,o=0;o<this.expt.getNumDetectorPanels(0);o++){var m=e[r[o]];if(m==null)continue;const b=this.expt.getDetectorPanelDataByIdx(0,r[o]);_&&(m=this.expt.addAnglesToReflections(m));const x=[b.pxSize.x,b.pxSize.y],E=b.dMatrix;var d=null;this.expt.hasCrystal()&&(d=this.expt.getCrystalU());for(var y=0;y<m.length;y++)if(l){const w=m[y].xyzObs;if(u&&(h=m[y].wavelength),!h)continue;const C=this.getS1(w,E,h,x),g=m[y].angleObs,S=t(C,h,f,this,p,g,d,_);c&&m[y].indexed&&(n.push(S.x),n.push(S.y),n.push(S.z),i.push(m[y].millerIdx))}}if(l&&c){const M=this.createPoints(n,this.colors.reflectionObsIndexed,this.reflectionSize.value);window.scene.add(M),this.reflPointsObsIndexed.push(M),this.reflPositionsIndexed.push(n),this.millerIndicesIndexed.push(i);const b=this.millerIndexLabelSizeSlider?parseInt(this.millerIndexLabelSizeSlider.value):8,x=this.millerIndexLabelsCheckbox?this.millerIndexLabelsCheckbox.checked:!1,E=this.reflPositionsIndexed.length-1,w={};w[E]=new Ba(n,i,b,x);const C=this.millerIndexLabels.collection;this.millerIndexLabels=new Es(Object.assign({},C,w))}this.requestRender()}storeActiveReflections(){this.storedPredictedRefls.push(this.activePredictedRefl);var e=new fo;this.activePredictedRefl=e;const t=this.activeReflPositionsCal,n=this.activeMillerIndicesCal;if(this.reflPointsCal.push(this.activeReflPointsCal),this.reflPositionsCal.push(this.activeReflPositionsCal),this.activeReflPointsCal=null,this.activeReflPositionsCal=null,this.activeMillerIndicesCal=null,n&&n.length>0&&t){const i=this.reflPointsCal.length-1,r=this.millerIndexLabelSizeSlider?parseInt(this.millerIndexLabelSizeSlider.value):8,a=this.millerIndexLabelsCheckbox?this.millerIndexLabelsCheckbox.checked:!1,o=new Ba(t,n,r,a),l=Object.assign({},this.millerIndexLabels.collection);l[i]=o,this.millerIndexLabels=new Es(l)}}addPredictedReflectionsFromData(e,t=!0){function n(_,m,d,y,M,b,x){const E=_.clone().normalize().sub(d.clone().normalize()).multiplyScalar(1/m);if(b==null)return console.warn("Rotation angles not in reflection table. Cannot generate rlps correctly."),E.multiplyScalar(y.rlpScaleFactor);var w=M.fixedRotation;const C=M.settingRotation,g=M.rotationAxis;return w=w.clone().multiply(x),E.applyMatrix3(C.clone().invert()),E.applyAxisAngle(g,-b),E.applyMatrix3(w.clone().invert().transpose()),E.multiplyScalar(y.rlpScaleFactor)}if(t&&this.clearActivePredictedReflectionTable(),this.hideErrorText(),!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded");return}let i=this.goniometerPhi.value*Math.PI/180;this.activePredictedRefl.panelReflData=e,this.activePredictedRefl.reflTable="reflData";const r=[],a=[],o=Object.keys(e);var l=this.expt.getBeamData(0).wavelength,c=this.expt.getBeamDirection(0).multiplyScalar(-1).normalize();for(let _ of o){var u=e[_];if(u==null)continue;const m=this.expt.getDetectorPanelDataByIdx(0,_),d=[m.pxSize.x,m.pxSize.y],y=m.dMatrix;for(var h=0;h<u.length;h++){let M=null,b=null;"exptID"in u[h]?(M=u[h].exptID,b=this.expt.getGoniometerForExptID(M)):b=this.expt.getGoniometerWithAngle(i);var f=null;"crystalID"in u[h]&&u[h].crystalID!=="-1"&&(f=this.expt.getCrystalU(parseInt(u[h].crystalID)));const x=u[h].xyzCal;if(l=u[h].wavelengthCal,!l)continue;var p=this.getS1(x,y,l,d);p.multiplyScalar(.1);const E=n(p,l,c,this,b,i,f);r.push(E.x),r.push(E.y),r.push(E.z),"millerIdx"in u[h]&&a.push(u[h].millerIdx)}}const v=this.createPoints(r,this.colors.reflectionCal[this.reflPointsCal.length],this.reflectionSize.value);if(window.scene.add(v),this.activeReflPointsCal=v,this.activeReflPositionsCal=r,this.activeMillerIndicesCal=a,t){if(a.length>0){this.clearActiveMillerIndexLabels();const _=this.millerIndexLabelSizeSlider?parseInt(this.millerIndexLabelSizeSlider.value):8,m=this.millerIndexLabelsCheckbox?this.millerIndexLabelsCheckbox.checked:!1;this.activeMillerIndexLabelsCal=new Ba(r,a,_,m)}this.lastDataFromExperiment=!1}else this.numInitialOrientations+=1,this.storeActiveReflections(),this.lastDataFromExperiment=!0,this.lastExpPhi=this.goniometerPhi.value;this.requestRender()}clearActiveMillerIndexLabels(){this.activeMillerIndexLabelsCal&&(this.activeMillerIndexLabelsCal.destroy(),this.activeMillerIndexLabelsCal=null)}addObservedReflections(){function e(f,p,v,_,m,d,y){const M=f.clone().normalize().sub(v.clone().normalize()).multiplyScalar(1/p);if(m==null)return M.multiplyScalar(_.rlpScaleFactor);if(d==null)return console.warn("Rotation angles not in reflection table. Cannot generate rlps correctly."),M.multiplyScalar(_.rlpScaleFactor);var b=m.fixedRotation;const x=m.settingRotation,E=m.rotationAxis;return M.applyMatrix3(x.clone().invert()),M.applyAxisAngle(E,-d),M.applyMatrix3(b.clone().invert().transpose()),M.multiplyScalar(_.rlpScaleFactor)}if(!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded"),this.clearObservedReflectionTable(),this.clearPredictedReflectionTable();return}const t=new Array,n=this.observedRefl.containsXYZObs(),i=this.observedRefl.containsMillerIndices(),r=this.observedRefl.containsWavelengths();for(var a=this.expt.getBeamData(0).wavelength,o=this.expt.getBeamDirection(0).multiplyScalar(-1).normalize(),l=this.expt.goniometer,c=0;c<this.expt.getNumDetectorPanels(0);c++){var u=this.observedRefl.getReflectionsForPanel(c);const f=this.expt.getDetectorPanelDataByIdx(0,c);l!=null&&(!this.observedRefl.containsRotationAnglesObs()||!this.observedRefl.containsRotationAnglesCal())&&(u=this.expt.addAnglesToReflections(u));const p=[f.pxSize.x,f.pxSize.y],v=f.dMatrix;this.expt.hasCrystal()&&this.expt.getCrystalU();for(var h=0;h<u.length;h++)if(n){const _=u[h].xyzObs;if(r&&(a=u[h].wavelength),!a)continue;const m=this.getS1(_,v,a,p),d=u[h].angleObs,y=e(m,a,o,this,l,d);i&&u[h].indexed&&(t.push(y.x),t.push(y.y),t.push(y.z))}}if(n&&i){const f=this.createPoints(t,this.colors.reflectionObsIndexed,this.reflectionSize.value);window.scene.add(f),this.reflPointsObsIndexed=[f],this.reflPositionsIndexed=t}}addBeam(){var e=Rn.sizes().beamLength,t=this.expt.getBeamDirection(0),n=[];n.push(new P(t.x*-800,t.y*-800,t.z*-800)),n.push(new P(t.x*-800*.5,t.y*-800*.5,t.z*-800*.5)),n.push(new P(0,0,0));const i=new Dt().setFromPoints(n),r=new ja({color:this.colors.beam,fog:!0,depthWrite:!1}),a=new oc(i,r);this.beamMeshes.push(a),window.scene.add(a);var o=[];o.push(new P(0,0,0)),o.push(new P(t.x*e*.5,t.y*e*.5,t.z*e*.5)),o.push(new P(t.x*e,t.y*e,t.z*e));const l=new Dt().setFromPoints(o),c=new ja({color:this.colors.beam,transparent:!0,opacity:.25,fog:!0,depthWrite:!1}),u=new oc(l,c);this.beamMeshes.push(u),window.scene.add(u)}addSample(){const e=new vo(Rn.sizes().sample),t=new _o({color:this.colors.sample,transparent:!0,depthWrite:!1}),n=new Ln(e,t);n.name="sample",this.sampleMesh=n,window.scene.add(n)}setCameraSmooth(e){this.rotateToPos(e),this.resetCameraZoomSmooth()}setCameraToDefaultPosition(){this.setCameraSmooth(Rn.cameraPositions().default)}setCameraToDefaultPositionWithExperiment(){this.setCameraSmooth(Rn.cameraPositions().defaultWithExperiment)}setCameraToCentrePosition(){this.setCameraSmooth(Rn.cameraPositions().centre)}displayHeaderText(e){this.showHeaderText(),this.headerText.innerHTML=e}displayErrorText(e){this.showErrorText(),this.errorText.innerHTML=e}appendHeaderText(e){this.headerText.innerHTML+=e}hideHeaderText(){this.headerText.style.display="none"}showHeaderText(){this.headerText.style.display="block"}hideErrorText(){this.errorText.style.display="none"}showErrorText(){this.errorText.style.display="block"}displayDefaultHeaderText(){this.hasExperiment()||!this.isStandalone?this.hideHeaderText():this.displayHeaderText(Rn.text().default)}displayImageFilenames(){this.displayHeaderText(this.expt.imageFilenames),this.displayingTextFromHTMLEvent=!0}displayNumberOfReflections(){this.displayHeaderText(this.observedRefl.numReflections+" reflections"),this.displayingTextFromHTMLEvent=!0}stopDisplayingText(){this.displayingTextFromHTMLEvent=!1}highlightObject(e){e.material.color=new ze(this.colors.highlight)}beamHidden(){return this.beamMeshes.length===0?!0:this.beamMeshes[0].material.opacity<.01}sampleHidden(){return this.sampleMesh===null?!0:this.sampleMesh.material.opacity<.01}disableMouseClick(){this.preventMouseClick=!0}enableMouseClick(){this.preventMouseClick=!1}updateActivePredictedReflections(){const e=JSON.stringify({channel:"server",command:"update_planner_goniometer_phi",phi:parseFloat(this.goniometerPhi.value),last_data_from_experiment:this.lastDataFromExperiment});this.serverWS.send(e),this.requestRender()}updateGoniometerPhi(e){this.goniometerPhi.value=e,document.getElementById("goniometerValue").textContent=e+"°",this.requestRender()}updateGUIInfo(){function e(n){if(n.beamHidden())return;const i=window.rayCaster.intersectObjects(n.beamMeshes);if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),i.length>0){const r="<b>beam: </b>"+n.expt.getBeamSummary(0);n.displayHeaderText(r)}}function t(n){if(n.sampleHidden()||n.expt.getCrystalSummary()===null)return;const i=window.rayCaster.intersectObjects([n.sampleMesh]);if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),i.length>0){const r="<b>crystal: </b>"+n.expt.getCrystalSummary();n.displayHeaderText(r)}}this.displayingTextFromHTMLEvent||(this.displayDefaultHeaderText(),e(this),t(this))}rotateToPos(e){Rs.to(window.camera.position,{duration:1,x:-e.x,y:-e.y,z:-e.z,onUpdate:function(){window.camera.lookAt(e),window.viewer.requestRender()}})}resetCameraZoomSmooth(){Rs.to(window.camera,{duration:1,zoom:1,onUpdate:function(){window.camera.updateProjectionMatrix(),window.viewer.requestRender()}}),window.controls.update()}zoomInOnObject(e,t=.2){const n=new P,i=new P,r=new xr;r.makeEmpty(),r.expandByObject(e),r.getSize(n),r.getCenter(i);const o=[new P(i.x-n.x/2,i.y-n.y/2,i.z-n.z/2),new P(i.x-n.x/2,i.y-n.y/2,i.z+n.z/2),new P(i.x-n.x/2,i.y+n.y/2,i.z-n.z/2),new P(i.x-n.x/2,i.y+n.y/2,i.z+n.z/2),new P(i.x+n.x/2,i.y-n.y/2,i.z-n.z/2),new P(i.x+n.x/2,i.y-n.y/2,i.z+n.z/2),new P(i.x+n.x/2,i.y+n.y/2,i.z-n.z/2),new P(i.x+n.x/2,i.y+n.y/2,i.z+n.z/2)].map(u=>{const h=u.clone().project(camera);return h.x=(h.x+1)/2*window.innerWidth,h.y=(1-h.y)/2*window.innerHeight,h});let l=0;for(let u=0;u<o.length;u++)for(let h=u+1;h<o.length;h++){const f=o[u].distanceTo(o[h]);f>l&&(l=f)}const c=window.camera.zoom*(window.innerWidth*t)/l;Rs.to(window.camera,{duration:1,zoom:c,onUpdate:function(){window.camera.updateProjectionMatrix(),window.viewer.requestRender()}}),window.controls.update()}animate(){this.renderRequested&&(window.viewer.updateGUIInfo(),window.controls.update(),window.renderer.render(window.scene,window.camera),this.renderRequested=!1,window.viewer.enableMouseClick())}requestRender(){typeof window<"u"&&!this.renderRequested&&(this.renderRequested=!0,window.requestAnimationFrame(this.animate.bind(this)))}}function G0(){if(!(typeof window.viewer>"u")){window.renderer=new ru,window.renderer.setClearColor(window.viewer.colors.background),window.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(window.renderer.domElement),window.scene=new mg;var s=500,e=window.innerWidth/window.innerHeight;window.camera=new Qc(s*e/-2,s*e/2,s/2,s/-2,1,5e4),window.renderer.render(window.scene,window.camera),window.rayCaster=new bg,window.controls=new Tg(window.camera,window.renderer.domElement),window.controls.maxDistance=3e3,window.controls.enablePan=!1,window.controls.rotateSpeed=.2,window.controls.update(),window.controls.addEventListener("change",function(){window.viewer.requestRender()}),window.mousePosition=new Se,window.addEventListener("mousemove",function(t){window.mousePosition.x=t.clientX/window.innerWidth*2-1,window.mousePosition.y=-(t.clientY/window.innerHeight)*2+1,window.viewer.requestRender()}),window.addEventListener("resize",function(){window.camera.aspect=window.innerWidth/window.innerHeight,window.camera.updateProjectionMatrix(),window.renderer.setSize(window.innerWidth,window.innerHeight),window.viewer.requestRender()}),window.addEventListener("dragstart",t=>{dragged=t.target}),window.addEventListener("dragover",t=>{t.preventDefault()}),window.addEventListener("drop",function(t){t.preventDefault(),t.stopPropagation();const n=t.dataTransfer.files[0],i=n.name.split(".").pop();i=="refl"&&window.viewer.isStandalone?window.viewer.addReflectionTable(n):i=="expt"&&window.viewer.isStandalone&&window.viewer.addExperiment(n)}),window.addEventListener("dblclick",function(t){}),window.addEventListener("mousedown",function(t){t.button==2&&window.viewer.setCameraToDefaultPositionWithExperiment()}),window.addEventListener("keydown",function(t){t.key==="s"&&window.viewer.toggleSidebar()}),window.viewer.setCameraToDefaultPosition(),window.viewer.requestRender()}}class Dc{constructor(e,t,n,i,r,a,o){this.imageFilenames=e,this.crystalSummary=t,this.goniometer=n,this.crystal=i,this.scan=r,this.detectorPanelData=a,this.imageFilename=o}clearExperiment(){this.imageFilenames=null,this.crystalSummary=null,this.goniometer=null,this.crystal=null,this.scan=null,this.detectorPanelData=null,this.imageFilename=null}}class No{constructor(){Ai(this,"parseExperiment",e=>{const t=new FileReader;return new Promise((n,i)=>{t.onerror=()=>{t.abort(),i(new DOMException("Problem parsing .expt file."))},t.onloadend=()=>{if(n(t.result),No.isDIALSExpt(e,t.result)){this.exptJSON=JSON.parse(t.result);for(var r=0;r<this.numExperiments();r++)this.experiments.push(new Dc(this.getImageFilenames(r),this.getCrystalSummary(r),this.getGoniometer(r),this.getCrystal(r),this.getScan(r),this.getDetectorPanelData(r),this.getImageFilenames(r)));this.filename=e.name}},t.readAsText(e)})});this.exptJSON=null,this.filename=null,this.experiments=[],this.crystals=[]}hasExptJSON(){return this.exptJSON!=null}static isDIALSExpt(e,t){return e.name.split(".").pop()==="expt"&&t[0]==="{"}clearExperiment(){this.exptJSON=null,this.filename=null,this.experiments.forEach(e=>e.clearExperiment()),this.experiments=[],this.crystals=[]}numExperiments(){return this.exptJSON==null?0:this.exptJSON.imageset.length}parseExperimentJSON(e){this.exptJSON=e,this.imageFilenames=[];for(var t=0;t<this.numExperiments();t++)this.experiments.push(new Dc(this.getImageFilenames(t),this.getCrystalSummary(t),this.getGoniometer(t),this.getCrystal(t),this.getScan(t),this.getDetectorPanelData(t),this.getImageFilenames(t))),this.imageFilenames.push(this.getImageFilenames(t)),this.crystals=this.getAllCrystals()}getImageFilenames(e){const t=this.exptJSON.experiment[e].imageset;return this.exptJSON.imageset[t].template}getDetectorPanelData(e){const t=this.getRawDetectorPanelData(e);for(var n=this.getDetectorOrientationData(e),i=[],r=0;r<t.length;r++){const x=t[r];var a=new Se(x.pixel_size[0],x.pixel_size[1]),o=new Se(x.image_size[0],x.image_size[1]),l=new Se(a.x*o.x,a.y*o.y),c=new P(x.fast_axis[0],x.fast_axis[1],x.fast_axis[2]),u=new P(x.slow_axis[0],x.slow_axis[1],x.slow_axis[2]),h=new P(x.origin[0],x.origin[1],x.origin[2]),f=new xe().set(c.x,u.x,h.x,c.y,u.y,h.y,c.z,u.z,h.z),p=new P(n.fast_axis[0],n.fast_axis[1],n.fast_axis[2]),v=new P(n.slow_axis[0],n.slow_axis[1],n.slow_axis[2]),_=p.clone().cross(v),m=new xe().set(p.x,v.x,_.x,p.y,v.y,_.y,p.z,v.z,_.z),d=new P(n.origin[0],n.origin[1],n.origin[2]),y=m.clone().multiply(f),M=y.elements;M[6]+=d.x,M[7]+=d.y,M[8]+=d.z;var b=new xe().fromArray(M);c.multiplyScalar(l.x),u.multiplyScalar(l.y),i.push({panelSize:l,pxSize:a,pxs:o,fastAxis:c,slowAxis:u,origin:h,dMatrix:b})}return i}getRawDetectorPanelData(e){const t=this.exptJSON.experiment[e].detector;return this.exptJSON.detector[t].panels}getBeamData(e){const t=this.exptJSON.experiment[e].beam;return this.exptJSON.beam[t]}getBeamSummary(e){const t=this.getBeamData(e);var n=t.direction;n=[n[0].toFixed(3),n[1].toFixed(3),n[2].toFixed(3)];const i=t.wavelength;var r="direction: ("+n+"), ";return i&&(r+=" wavelength: "+i.toFixed(3)),r}getGoniometerForExptID(e){return e!==null?this.experiments[e%this.experiments.length].goniometer:{fixedRotation:new xe().identity(),settingRotation:new xe().identity(),rotationAxis:new P(0,1,0)}}getGoniometerWithAngle(e){let t=new xe().identity(),n=new P(0,1,0);const i=new Kn;i.setFromAxisAngle(n,e);const r=new xe().setFromMatrix4(new tt().makeRotationFromQuaternion(i));return t.premultiply(r),{fixedRotation:new xe().identity(),settingRotation:t,rotationAxis:n}}getGoniometer(e){function t(l){const c=["axes","angles","scan_axis"];for(var u=0;u<c.length;u++)if(!(c[u]in l))return!1;return!0}function n(l){const c=l.fixed_rotation,u=l.setting_rotation,h=l.rotation_axis;return{fixedRotation:new xe().set(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8]),settingRotation:new xe().set(u[0],u[1],u[2],u[3],u[4],u[5],u[6],u[7],u[8]),rotationAxis:new P(h[0],h[1],h[2])}}function i(l){function c(y,M){const b=new P(y[0],y[1],y[2]).normalize(),x=Math.cos(M*Math.PI/180),E=Math.sin(M*Math.PI/180),[w,C,g]=b.toArray(),S=x+(1-x)*w*w,D=(1-x)*w*C-E*g,k=(1-x)*w*g+E*C,O=(1-x)*w*C+E*g,N=x+(1-x)*C*C,z=(1-x)*C*g-E*w,K=(1-x)*w*g-E*C,H=(1-x)*C*g+E*w,V=x+(1-x)*g*g;return new xe().set(S,D,k,O,N,z,K,H,V).transpose()}const u=l.axes,h=l.angles,f=l.scan_axis,p=u[f],v=new P(p[0],p[1],p[2]);var _=new xe().set(1,0,0,0,1,0,0,0,1);const m=new xe().set(1,0,0,0,1,0,0,0,1);for(var d=0;d<f;d++){const y=c(u[d],h[d]);_=_.clone().multiply(y)}for(var d=f+1;d<u.length;d++){const M=c(u[d],h[d]);m.multiply(M)}return{fixedRotation:_,settingRotation:m,rotationAxis:v}}const r=this.exptJSON.goniometer;if(!r||r.length===0){this.goniometer=null;return}const a=this.exptJSON.experiment[e].goniometer,o=r[a];return t(o)?i(o):n(o)}getCrystalData(e){if(this.exptJSON.crystal.length===0||e===void 0)return null;var t=this.exptJSON.experiment[e].crystal;return this.exptJSON.crystal[t]}getAllCrystalData(){return this.exptJSON.crystal}hasCrystal(e){return this.exptJSON===null||this.experiments===void 0?!1:this.experiments[e].crystal!==null&&this.experiments[e].crystal!==void 0}latticeParameters(e,t,n){const i=e.length(),r=t.length(),a=n.length(),o=Math.acos(t.dot(n)/(r*a)),l=Math.acos(e.dot(n)/(i*a)),c=Math.acos(e.dot(t)/(i*r));return[i,r,a,o,l,c]}unitCellVolume(e,t,n,i,r,a){const o=Math.cos(i)**2,l=Math.cos(r)**2,c=Math.cos(a)**2,u=Math.cos(i),h=Math.cos(r),f=Math.cos(a);return e*t*n*Math.sqrt(1-o-l-c+2*u*h*f)}reciprocalLatticeConstants(e,t,n,i,r,a,o){const l=new Array(6);return l[0]=t*n*Math.sin(i)/o,l[1]=n*e*Math.sin(r)/o,l[2]=e*t*Math.sin(a)/o,l[3]=Math.cos(r)*Math.cos(a)-Math.cos(i),l[3]/=Math.sin(r)*Math.sin(a),l[4]=Math.cos(a)*Math.cos(i)-Math.cos(r),l[4]/=Math.sin(a)*Math.sin(i),l[5]=Math.cos(i)*Math.cos(r)-Math.cos(a),l[5]/=Math.sin(i)*Math.sin(r),l}getBMatrix(e,t,n){const[i,r,a,o,l,c]=this.latticeParameters(e,t,n),u=this.unitCellVolume(i,r,a,o,l,c),h=this.reciprocalLatticeConstants(i,r,a,o,l,c,u),f=Math.sqrt(1-h[3]*h[3]),p=new Array(9);p[0]=1/i,p[1]=-Math.cos(c)/(Math.sin(c)*i),p[2]=-(Math.cos(c)*Math.sin(l)*h[3]+Math.cos(l)*Math.sin(c)),p[2]/=Math.sin(l)*f*Math.sin(c)*i,p[3]=0,p[4]=1/(Math.sin(c)*r),p[5]=h[3]/(f*Math.sin(c)*r),p[6]=0,p[7]=0,p[8]=1/(Math.sin(l)*f*a);const v=new xe;return v.set(p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8]),v}getAllCrystals(){const e=this.getAllCrystalData();if(!e){this.crystalSummary=null;return}const t=[];for(let a=0;a<e.length;a++){const o=e[a];var n=o.real_space_a;n=new P(n[0],n[1],n[2]);var i=o.real_space_b;i=new P(i[0],i[1],i[2]);var r=o.real_space_c;r=new P(r[0],r[1],r[2]);const l=this.getBMatrix(n.clone(),i.clone(),r.clone()),c=new xe;c.set(n.x,n.y,n.z,i.x,i.y,i.z,r.x,r.y,r.z),c.invert();const u=c.elements;c.transpose();const h=new xe;h.multiplyMatrices(l.clone().invert(),c.clone());const f=[new P(u[0],u[3],u[6]),new P(u[1],u[4],u[7]),new P(u[2],u[5],u[8])];t.push({U:h,B:l,UB:c,reciprocalCell:f})}return t}getCrystal(e){const t=this.getCrystalData(e);if(!t){this.crystalSummary=null;return}var n=t.real_space_a;n=new P(n[0],n[1],n[2]);var i=t.real_space_b;i=new P(i[0],i[1],i[2]);var r=t.real_space_c;r=new P(r[0],r[1],r[2]);const a=this.getBMatrix(n.clone(),i.clone(),r.clone()),o=new xe().set(n.x,n.y,n.z,i.x,i.y,i.z,r.x,r.y,r.z).invert(),l=o.elements;o.transpose();const c=new xe;c.multiplyMatrices(a.clone().invert(),o.clone());const u=[new P(l[0],l[3],l[6]),new P(l[1],l[4],l[7]),new P(l[2],l[5],l[8])];return{U:c,B:a,UB:o,reciprocalCell:u,exptID:e}}getCrystalRLV(e){return this.experiments[e].crystal.reciprocalCell}getAllCrystalRLVs(){if(!this.crystals)return null;const e=[];for(let t=0;t<this.crystals.length;t++)e.push([this.crystals[t].reciprocalCell[0].clone(),this.crystals[t].reciprocalCell[1].clone(),this.crystals[t].reciprocalCell[2].clone()]);return e}getAllCrystalRCVs(){if(!this.crystals)return null;const e=[];for(let t=0;t<this.crystals.length;t++){const n=this.crystals[t].B.clone().elements;e.push([new P(n[0],n[3],n[6]),new P(n[1],n[4],n[7]),new P(n[2],n[5],n[8])])}return e}getCrystalU(e){return this.crystals[e].U.clone()}getCrystalSummary(e){if(this.experiments!==void 0&&this.experiments[e]!==void 0)return this.experiments[e].crystalSummary!==void 0?this.experiments[e].crystalSummary:null;const t=this.getCrystalData(e);if(!t)return null;const n=t.real_space_a,i=new P(n[0],n[1],n[2]),r=t.real_space_b,a=new P(r[0],r[1],r[2]),o=t.real_space_c,l=new P(o[0],o[1],o[2]),c=i.length().toFixed(3),u=a.length().toFixed(3),h=l.length().toFixed(3),f=(a.angleTo(l)*(180/Math.PI)).toFixed(3),p=(i.angleTo(l)*(180/Math.PI)).toFixed(3),v=(i.angleTo(a)*(180/Math.PI)).toFixed(3);var _="a: "+c+" b: "+u+" c: "+h;return _+=" alpha: "+f+" beta: "+p+" gamma: "+v,_+=" ("+t.space_group_hall_symbol+")",_}getDetectorOrientationData(e){const t=this.exptJSON.experiment[e].detector;return this.exptJSON.detector[t].hierarchy}getDetectorPanelDataByIdx(e,t){return this.experiments[e].detectorPanelData[t]}getBeamDirection(e){const t=this.getBeamData(e);return new P(t.direction[0],t.direction[1],t.direction[2])}getNumDetectorPanels(e){return this.experiments[e].detectorPanelData.length}getScanData(e){if(!("scan"in this.exptJSON))return null;var t=this.exptJSON.experiment[e].scan;return this.exptJSON.scan[t]}getScan(e){const t=this.getScanData(e);if(!t||!("oscillation"in t))return null;const n=new Se(t.oscillation[0]*Math.PI/180,t.oscillation[1]*Math.PI/180),i=new Se(t.image_range[0]-1,t.image_range[1]-1);return{oscillation:n,imageRange:i}}getAngleFromFrame(e,t){if(e===null)return null;const n=e.oscillation,i=e.imageRange;return n.x+(t-i.x)*n.y}addAnglesToReflections(e){for(var t=0;t<e.length;t++){var n=this.experiments[e[t].exptID].scan;if("xyzObs"in e[t]){var i;n==null?i=0:i=this.getAngleFromFrame(n,e[t].xyzObs[2]),e[t].angleObs=i}if("xyzCal"in e[t]){var r;n===null?r=0:r=this.getAngleFromFrame(n,e[t].xyzCal[2]),e[t].angleCal=r}}return e}getExptIDs(){for(var e=[],t=0;t<this.experiments.length;t++)e.push(t);return e}getExptLabels(){for(var e=window.navigator.oscpu?window.navigator.oscpu.indexOf("Windows")>-1:window.navigator.platform.indexOf("Win")>-1,t=[],n=0;n<this.experiments.length;n++){var i=this.experiments[n].imageFilename;e?t.push(i.split("\\").pop()):t.push(i.split("/").pop())}return t}}function H0(s){return"channel"in s&&s.channel=="experiment_planner"}const V0="ws://127.0.0.1:50010/",W0={background:133143,sample:16643811,reflectionObsIndexed:15158332,reflectionCal:[9894267,7715837,12548086,1305289,16756860,16765407,13696766,16777092,16777215,16749576,129478,11468140,16646146,10030923,7918006,16775447,16713609,13959167,6936655,5680727],highlight:16777215,beam:16777215,reciprocalCell:16777215,RLVLabels:"white"};document.addEventListener("DOMContentLoaded",function(){window.viewer=new Rn(new No,new fo,new fo,!1,W0),window.viewer.serverWS=new WebSocket(V0),window.viewer.serverWS.onopen=()=>{console.log("Experiment planner opened Connection to server"),window.viewer.serverWS.send(JSON.stringify({channel:"server",command:"record_connection",id:"experiment_planner"}))},window.viewer.serverWS.onclose=()=>{console.log("Experiment planner closed Connection to server")},window.viewer.serverWS.onmessage=s=>{const e=JSON.parse(s.data);if(!H0(e))return;const t=e.command;switch(t){case"update_experiment":"reindexed_cell"in e?window.viewer.addExperimentFromJSONString(e,!1,!0):window.viewer.addExperimentFromJSONString(e);break;case"add_exp_orientation":window.viewer.addExptOrientation(e);break;case"clear_experiment":window.viewer.clearExperiment();break;case"update_predicted_reflection_table":delete e.command,delete e.channel,window.viewer.addPredictedReflectionsFromData(e);break;case"update_observed_reflection_table":delete e.command,delete e.channel,window.viewer.addObservedReflectionsFromData(e);break;case"update_params":"phi"in e&&window.viewer.updateGoniometerPhi(e.phi);break;case"get_next_best_orientation":window.viewer.serverWS.send(JSON.stringify({channel:"server",command:"get_next_best_planner_orientation",orientations:e.orientations}));break;case"store_active_reflections":window.viewer.storeActiveReflections();break;case"clear_predicted_reflections":window.viewer.clearAllPredictedReflections();break;case"display_error":console.assert("error"in e),window.viewer.displayErrorText(e.error);break;case"toggle_sidebar":window.viewer.toggleSidebar();break;default:console.warn("Unrecognised command ",t)}},G0()});
