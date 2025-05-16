var Yu=Object.defineProperty;var ju=(s,e,t)=>e in s?Yu(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ei=(s,e,t)=>ju(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $a="152",Ti={ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ku=0,bo=1,Zu=2,_c=1,$u=2,bn=3,Xn=0,Rt=1,Cn=2,Hn=0,Yi=1,wo=2,Ao=3,Ro=4,Ju=5,Vi=100,Qu=101,eh=102,Co=103,Po=104,th=200,nh=201,ih=202,rh=203,gc=204,xc=205,sh=206,ah=207,oh=208,lh=209,ch=210,uh=0,hh=1,fh=2,Ta=3,dh=4,ph=5,mh=6,_h=7,vc=0,gh=1,xh=2,Ln=0,vh=1,Mh=2,Sh=3,yh=4,Eh=5,Mc=300,Qi=301,er=302,ba=303,wa=304,bs=306,Aa=1e3,an=1001,Ra=1002,Tt=1003,Lo=1004,Fs=1005,Yt=1006,Th=1007,wr=1008,gi=1009,bh=1010,wh=1011,Sc=1012,Ah=1013,li=1014,ci=1015,Ar=1016,Rh=1017,Ch=1018,ji=1020,Ph=1021,on=1023,Lh=1024,Dh=1025,hi=1026,tr=1027,Uh=1028,Ih=1029,Oh=1030,Fh=1031,Nh=1033,Ns=33776,Bs=33777,zs=33778,ks=33779,Do=35840,Uo=35841,Io=35842,Oo=35843,Bh=36196,Fo=37492,No=37496,Bo=37808,zo=37809,ko=37810,Go=37811,Ho=37812,Vo=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,jo=37818,Ko=37819,Zo=37820,$o=37821,Gs=36492,zh=36283,Jo=36284,Qo=36285,el=36286,yc=3e3,fi=3001,kh=3200,Gh=3201,Hh=0,Vh=1,di="",Ae="srgb",gn="srgb-linear",Ec="display-p3",Hs=7680,Wh=519,tl=35044,nl="300 es",Ca=1035;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vs=Math.PI/180,Pa=180/Math.PI;function Or(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[s&255]+mt[s>>8&255]+mt[s>>16&255]+mt[s>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function Xh(s,e){return(s%e+e)%e}function Ws(s,e,t){return(1-t)*s+t*e}function il(s){return(s&s-1)===0&&s!==0}function qh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function kr(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xe{constructor(){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],v=n[8],m=i[0],_=i[3],d=i[6],S=i[1],M=i[4],T=i[7],x=i[2],E=i[5],w=i[8];return r[0]=a*m+o*S+c*x,r[3]=a*_+o*M+c*E,r[6]=a*d+o*T+c*w,r[1]=l*m+u*S+h*x,r[4]=l*_+u*M+h*E,r[7]=l*d+u*T+h*w,r[2]=f*m+p*S+v*x,r[5]=f*_+p*M+v*E,r[8]=f*d+p*T+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,p=l*r-a*c,v=t*h+n*f+i*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=h*m,e[1]=(i*l-u*n)*m,e[2]=(o*n-i*a)*m,e[3]=f*m,e[4]=(u*t-i*c)*m,e[5]=(i*r-o*t)*m,e[6]=p*m,e[7]=(n*c-l*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xs.makeScale(e,t)),this}rotate(e){return this.premultiply(Xs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new xe;function Tc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Rr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const rl={};function yr(s){s in rl||(rl[s]=!0,console.warn(s))}function Ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Yh=new xe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),jh=new xe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Kh(s){return s.convertSRGBToLinear().applyMatrix3(jh)}function Zh(s){return s.applyMatrix3(Yh).convertLinearToSRGB()}const $h={[gn]:s=>s,[Ae]:s=>s.convertSRGBToLinear(),[Ec]:Kh},Jh={[gn]:s=>s,[Ae]:s=>s.convertLinearToSRGB(),[Ec]:Zh},Qt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return gn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=$h[e],i=Jh[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let wi;class bc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=Rr("canvas")),wi.width=e.width,wi.height=e.height;const n=wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ki(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class wc{constructor(e=null){this.isSource=!0,this.uuid=Or(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ys(i[a].image)):r.push(Ys(i[a]))}else r=Ys(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ys(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qh=0;class Ct extends Si{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=an,i=an,r=Yt,a=wr,o=on,c=gi,l=Ct.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Or(),this.name="",this.source=new wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===fi?Ae:di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Aa:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Aa:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ae?fi:yc}set encoding(e){yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fi?Ae:di}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Mc;Ct.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],v=c[9],m=c[2],_=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(v+_)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,T=(p+1)/2,x=(d+1)/2,E=(u+f)/4,w=(h+m)/4,C=(v+_)/4;return M>T&&M>x?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=w/n):T>x?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=E/i,r=C/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=w/r,i=C/r),this.set(n,i,r,t),this}let S=Math.sqrt((_-v)*(_-v)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(_-v)/S,this.y=(h-m)/S,this.z=(f-u)/S,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xi extends Si{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(yr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fi?Ae:di),this.texture=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Yt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ac extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ef extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],p=r[a+1],v=r[a+2],m=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=m;return}if(h!==m||c!==f||l!==p||u!==v){let _=1-o;const d=c*f+l*p+u*v+h*m,S=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const x=Math.sqrt(M),E=Math.atan2(x,d*S);_=Math.sin(_*E)/x,o=Math.sin(o*E)/x}const T=o*S;if(c=c*_+f*T,l=l*_+p*T,u=u*_+v*T,h=h*_+m*T,_===1-o){const x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*h+c*p-l*f,e[t+1]=c*v+u*f+l*h-o*p,e[t+2]=l*v+u*p+o*f-c*h,e[t+3]=u*v-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),f=c(n/2),p=c(i/2),v=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*p*v,this._y=l*p*h-f*u*v,this._z=l*u*v+f*p*h,this._w=l*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+l*p*v,this._y=l*p*h-f*u*v,this._z=l*u*v-f*p*h,this._w=l*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-l*p*v,this._y=l*p*h+f*u*v,this._z=l*u*v+f*p*h,this._w=l*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-l*p*v,this._y=l*p*h+f*u*v,this._z=l*u*v-f*p*h,this._w=l*u*h+f*p*v;break;case"YZX":this._x=f*u*h+l*p*v,this._y=l*p*h+f*u*v,this._z=l*u*v-f*p*h,this._w=l*u*h-f*p*v;break;case"XZY":this._x=f*u*h-l*p*v,this._y=l*p*h-f*u*v,this._z=l*u*v+f*p*h,this._w=l*u*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,u=c*n+o*t-r*i,h=c*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=l*c+f*-r+u*-o-h*-a,this.y=u*c+f*-a+h*-r-l*-o,this.z=h*c+f*-o+l*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new P,sl=new qn;class ur{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ai.copy(e.boundingBox),Ai.applyMatrix4(e.matrixWorld),this.union(Ai);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)Mn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Mn)}else i.boundingBox===null&&i.computeBoundingBox(),Ai.copy(i.boundingBox),Ai.applyMatrix4(e.matrixWorld),this.union(Ai)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Gr.subVectors(this.max,pr),Ri.subVectors(e.a,pr),Ci.subVectors(e.b,pr),Pi.subVectors(e.c,pr),On.subVectors(Ci,Ri),Fn.subVectors(Pi,Ci),Qn.subVectors(Ri,Pi);let t=[0,-On.z,On.y,0,-Fn.z,Fn.y,0,-Qn.z,Qn.y,On.z,0,-On.x,Fn.z,0,-Fn.x,Qn.z,0,-Qn.x,-On.y,On.x,0,-Fn.y,Fn.x,0,-Qn.y,Qn.x,0];return!Ks(t,Ri,Ci,Pi,Gr)||(t=[1,0,0,0,1,0,0,0,1],!Ks(t,Ri,Ci,Pi,Gr))?!1:(Hr.crossVectors(On,Fn),t=[Hr.x,Hr.y,Hr.z],Ks(t,Ri,Ci,Pi,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new P,new P,new P,new P,new P,new P,new P,new P],Mn=new P,Ai=new ur,Ri=new P,Ci=new P,Pi=new P,On=new P,Fn=new P,Qn=new P,pr=new P,Gr=new P,Hr=new P,ei=new P;function Ks(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ei.fromArray(s,r);const o=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),c=e.dot(ei),l=t.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const tf=new ur,mr=new P,Zs=new P;class Fr{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(mr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(Zs)),this.expandByPoint(mr.copy(e.center).sub(Zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new P,$s=new P,Vr=new P,Nn=new P,Js=new P,Wr=new P,Qs=new P;class ws{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$s.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub($s);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Vr),o=Nn.dot(this.direction),c=-Nn.dot(Vr),l=Nn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,v;if(u>0)if(h=a*c-o,f=a*o-c,v=r*u,h>=0)if(f>=-v)if(f<=v){const m=1/u;h*=m,f*=m,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-v?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=v?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy($s).addScaledVector(Vr,f),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,r){Js.subVectors(t,e),Wr.subVectors(n,e),Qs.crossVectors(Js,Wr);let a=this.direction.dot(Qs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,e);const c=o*this.direction.dot(Wr.crossVectors(Nn,Wr));if(c<0)return null;const l=o*this.direction.dot(Js.cross(Nn));if(l<0||c+l>a)return null;const u=-o*Nn.dot(Qs);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,c,l,u,h,f,p,v,m,_){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=m,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,p=a*h,v=o*u,m=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+v*l,t[5]=f-m*l,t[9]=-o*c,t[2]=m-f*l,t[6]=v+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,v=l*u,m=l*h;t[0]=f+m*o,t[4]=v*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=m+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,v=l*u,m=l*h;t[0]=f-m*o,t[4]=-a*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=m-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,p=a*h,v=o*u,m=o*h;t[0]=c*u,t[4]=v*l-p,t[8]=f*l+m,t[1]=c*h,t[5]=m*l+f,t[9]=p*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,v=o*c,m=o*l;t[0]=c*u,t[4]=m-f*h,t[8]=v*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+v,t[10]=f-m*h}else if(e.order==="XZY"){const f=a*c,p=a*l,v=o*c,m=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+m,t[5]=a*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nf,e,rf)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Bn.crossVectors(n,Ft),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Bn.crossVectors(n,Ft)),Bn.normalize(),Xr.crossVectors(Ft,Bn),i[0]=Bn.x,i[4]=Xr.x,i[8]=Ft.x,i[1]=Bn.y,i[5]=Xr.y,i[9]=Ft.y,i[2]=Bn.z,i[6]=Xr.z,i[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],v=n[2],m=n[6],_=n[10],d=n[14],S=n[3],M=n[7],T=n[11],x=n[15],E=i[0],w=i[4],C=i[8],g=i[12],y=i[1],U=i[5],G=i[9],O=i[13],B=i[2],z=i[6],K=i[10],H=i[14],V=i[3],Q=i[7],J=i[11],pe=i[15];return r[0]=a*E+o*y+c*B+l*V,r[4]=a*w+o*U+c*z+l*Q,r[8]=a*C+o*G+c*K+l*J,r[12]=a*g+o*O+c*H+l*pe,r[1]=u*E+h*y+f*B+p*V,r[5]=u*w+h*U+f*z+p*Q,r[9]=u*C+h*G+f*K+p*J,r[13]=u*g+h*O+f*H+p*pe,r[2]=v*E+m*y+_*B+d*V,r[6]=v*w+m*U+_*z+d*Q,r[10]=v*C+m*G+_*K+d*J,r[14]=v*g+m*O+_*H+d*pe,r[3]=S*E+M*y+T*B+x*V,r[7]=S*w+M*U+T*z+x*Q,r[11]=S*C+M*G+T*K+x*J,r[15]=S*g+M*O+T*H+x*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],v=e[3],m=e[7],_=e[11],d=e[15];return v*(+r*c*h-i*l*h-r*o*f+n*l*f+i*o*p-n*c*p)+m*(+t*c*p-t*l*f+r*a*f-i*a*p+i*l*u-r*c*u)+_*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+d*(-i*o*u-t*c*h+t*o*f+i*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],v=e[12],m=e[13],_=e[14],d=e[15],S=h*_*l-m*f*l+m*c*p-o*_*p-h*c*d+o*f*d,M=v*f*l-u*_*l-v*c*p+a*_*p+u*c*d-a*f*d,T=u*m*l-v*h*l+v*o*p-a*m*p-u*o*d+a*h*d,x=v*h*c-u*m*c-v*o*f+a*m*f+u*o*_-a*h*_,E=t*S+n*M+i*T+r*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=S*w,e[1]=(m*f*r-h*_*r-m*i*p+n*_*p+h*i*d-n*f*d)*w,e[2]=(o*_*r-m*c*r+m*i*l-n*_*l-o*i*d+n*c*d)*w,e[3]=(h*c*r-o*f*r-h*i*l+n*f*l+o*i*p-n*c*p)*w,e[4]=M*w,e[5]=(u*_*r-v*f*r+v*i*p-t*_*p-u*i*d+t*f*d)*w,e[6]=(v*c*r-a*_*r-v*i*l+t*_*l+a*i*d-t*c*d)*w,e[7]=(a*f*r-u*c*r+u*i*l-t*f*l-a*i*p+t*c*p)*w,e[8]=T*w,e[9]=(v*h*r-u*m*r-v*n*p+t*m*p+u*n*d-t*h*d)*w,e[10]=(a*m*r-v*o*r+v*n*l-t*m*l-a*n*d+t*o*d)*w,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*p-t*o*p)*w,e[12]=x*w,e[13]=(u*m*i-v*h*i+v*n*f-t*m*f-u*n*_+t*h*_)*w,e[14]=(v*o*i-a*m*i-v*n*c+t*m*c+a*n*_-t*o*_)*w,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,p=r*u,v=r*h,m=a*u,_=a*h,d=o*h,S=c*l,M=c*u,T=c*h,x=n.x,E=n.y,w=n.z;return i[0]=(1-(m+d))*x,i[1]=(p+T)*x,i[2]=(v-M)*x,i[3]=0,i[4]=(p-T)*E,i[5]=(1-(f+d))*E,i[6]=(_+S)*E,i[7]=0,i[8]=(v+M)*w,i[9]=(_-S)*w,i[10]=(1-(f+m))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Li.set(i[0],i[1],i[2]).length();const a=Li.set(i[4],i[5],i[6]).length(),o=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const l=1/r,u=1/a,h=1/o;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,c=1/(t-e),l=1/(n-i),u=1/(a-r),h=(t+e)*c,f=(n+i)*l,p=(a+r)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new P,en=new rt,nf=new P(0,0,0),rf=new P(1,1,1),Bn=new P,Xr=new P,Ft=new P,al=new rt,ol=new qn;class As{constructor(e=0,t=0,n=0,i=As.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ol.setFromEuler(this),this.setFromQuaternion(ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}As.DEFAULT_ORDER="XYZ";class Ja{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sf=0;const ll=new P,Di=new qn,yn=new rt,qr=new P,_r=new P,af=new P,of=new qn,cl=new P(1,0,0),ul=new P(0,1,0),hl=new P(0,0,1),lf={type:"added"},fl={type:"removed"};class wt extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new P,t=new As,n=new qn,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new xe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(cl,e)}rotateY(e){return this.rotateOnAxis(ul,e)}rotateZ(e){return this.rotateOnAxis(hl,e)}translateOnAxis(e,t){return ll.copy(e).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cl,e)}translateY(e){return this.translateOnAxis(ul,e)}translateZ(e){return this.translateOnAxis(hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qr.copy(e):qr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(_r,qr,this.up):yn.lookAt(qr,_r,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(yn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(fl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}wt.DEFAULT_UP=new P(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new P,En=new P,ea=new P,Tn=new P,Ui=new P,Ii=new P,dl=new P,ta=new P,na=new P,ia=new P;let Yr=!1;class rn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){tn.subVectors(i,t),En.subVectors(n,t),ea.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(En),c=tn.dot(ea),l=En.dot(En),u=En.dot(ea),h=a*l-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(l*c-o*u)*f,v=(a*u-o*c)*f;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(e,t,n,i,r,a,o,c){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Tn),c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(a,Tn.y),c.addScaledVector(o,Tn.z),c}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),En.subVectors(e,t),tn.cross(En).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),tn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ui.subVectors(i,n),Ii.subVectors(r,n),ta.subVectors(e,n);const c=Ui.dot(ta),l=Ii.dot(ta);if(c<=0&&l<=0)return t.copy(n);na.subVectors(e,i);const u=Ui.dot(na),h=Ii.dot(na);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ui,a);ia.subVectors(e,r);const p=Ui.dot(ia),v=Ii.dot(ia);if(v>=0&&p<=v)return t.copy(r);const m=p*l-c*v;if(m<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(Ii,o);const _=u*v-p*h;if(_<=0&&h-u>=0&&p-v>=0)return dl.subVectors(r,i),o=(h-u)/(h-u+(p-v)),t.copy(i).addScaledVector(dl,o);const d=1/(_+m+f);return a=m*d,o=f*d,t.copy(n).addScaledVector(Ui,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let cf=0;class hr extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=Yi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=gc,this.blendDst=xc,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={h:0,s:0,l:0},jr={h:0,s:0,l:0};function ra(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ae){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qt.workingColorSpace){if(e=Xh(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ra(a,r,e+1/3),this.g=ra(a,r,e),this.b=ra(a,r,e-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ae){const n=Rc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ae){return Qt.fromWorkingColorSpace(_t.copy(this),e),Math.round(bt(_t.r*255,0,255))*65536+Math.round(bt(_t.g*255,0,255))*256+Math.round(bt(_t.b*255,0,255))}getHexString(e=Ae){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qt.workingColorSpace){Qt.fromWorkingColorSpace(_t.copy(this),t);const n=_t.r,i=_t.g,r=_t.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Ae){Qt.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,i=_t.b;return e!==Ae?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(nn),nn.h+=e,nn.s+=t,nn.l+=n,this.setHSL(nn.h,nn.s,nn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nn),e.getHSL(jr);const n=Ws(nn.h,jr.h,t),i=Ws(nn.s,jr.s,t),r=Ws(nn.l,jr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new ze;ze.NAMES=Rc;class Qa extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new P,Kr=new we;class pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Cc extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pc extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zt extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uf=0;const Wt=new rt,sa=new wt,Oi=new P,Nt=new ur,gr=new ur,ct=new P;class kt extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tc(e)?Pc:Cc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(Nt.min,gr.min),Nt.expandByPoint(ct),ct.addVectors(Nt.max,gr.max),Nt.expandByPoint(ct)):(Nt.expandByPoint(gr.min),Nt.expandByPoint(gr.max))}Nt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ct.fromBufferAttribute(o,l),c&&(Oi.fromBufferAttribute(e,l),ct.add(Oi)),i=Math.max(i,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let y=0;y<o;y++)l[y]=new P,u[y]=new P;const h=new P,f=new P,p=new P,v=new we,m=new we,_=new we,d=new P,S=new P;function M(y,U,G){h.fromArray(i,y*3),f.fromArray(i,U*3),p.fromArray(i,G*3),v.fromArray(a,y*2),m.fromArray(a,U*2),_.fromArray(a,G*2),f.sub(h),p.sub(h),m.sub(v),_.sub(v);const O=1/(m.x*_.y-_.x*m.y);isFinite(O)&&(d.copy(f).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(O),S.copy(p).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(O),l[y].add(d),l[U].add(d),l[G].add(d),u[y].add(S),u[U].add(S),u[G].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let y=0,U=T.length;y<U;++y){const G=T[y],O=G.start,B=G.count;for(let z=O,K=O+B;z<K;z+=3)M(n[z+0],n[z+1],n[z+2])}const x=new P,E=new P,w=new P,C=new P;function g(y){w.fromArray(r,y*3),C.copy(w);const U=l[y];x.copy(U),x.sub(w.multiplyScalar(w.dot(U))).normalize(),E.crossVectors(C,U);const O=E.dot(u[y])<0?-1:1;c[y*4]=x.x,c[y*4+1]=x.y,c[y*4+2]=x.z,c[y*4+3]=O}for(let y=0,U=T.length;y<U;++y){const G=T[y],O=G.start,B=G.count;for(let z=O,K=O+B;z<K;z+=3)g(n[z+0]),g(n[z+1]),g(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),m=e.getX(f+1),_=e.getX(f+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,_),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),o.add(u),c.add(u),l.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let p=0,v=0;for(let m=0,_=c.length;m<_;m++){o.isInterleavedBufferAttribute?p=c[m]*o.data.stride+o.offset:p=c[m]*u;for(let d=0;d<u;d++)f[v++]=l[p++]}return new pn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new rt,un=new ws,Zr=new Fr,ml=new P,Fi=new P,Ni=new P,Bi=new P,aa=new P,$r=new P,Jr=new we,Qr=new we,es=new we,_l=new P,gl=new P,xl=new P,ts=new P,ns=new P;class Pn extends wt{constructor(e=new kt,t=new Qa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){$r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(aa.fromBufferAttribute(h,e),a?$r.addScaledVector(aa,u):$r.addScaledVector(aa.sub(t),u))}t.add($r)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),un.copy(e.ray).recast(e.near),!(Zr.containsPoint(un.origin)===!1&&(un.intersectSphere(Zr,ml)===null||un.origin.distanceToSquared(ml)>(e.far-e.near)**2))&&(pl.copy(r).invert(),un.copy(e.ray).applyMatrix4(pl),!(n.boundingBox!==null&&un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,r=this.material,a=i.index,o=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,h=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,v=h.length;p<v;p++){const m=h[p],_=r[m.materialIndex],d=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=d,T=S;M<T;M+=3){const x=a.getX(M),E=a.getX(M+1),w=a.getX(M+2);n=is(this,_,e,un,c,l,u,x,E,w),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,_=v;m<_;m+=3){const d=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);n=is(this,r,e,un,c,l,u,d,S,M),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,v=h.length;p<v;p++){const m=h[p],_=r[m.materialIndex],d=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=d,T=S;M<T;M+=3){const x=M,E=M+1,w=M+2;n=is(this,_,e,un,c,l,u,x,E,w),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=p,_=v;m<_;m+=3){const d=m,S=m+1,M=m+2;n=is(this,r,e,un,c,l,u,d,S,M),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function hf(s,e,t,n,i,r,a,o){let c;if(e.side===Rt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Xn,o),c===null)return null;ns.copy(o),ns.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ns);return l<t.near||l>t.far?null:{distance:l,point:ns.clone(),object:s}}function is(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Fi),s.getVertexPosition(c,Ni),s.getVertexPosition(l,Bi);const u=hf(s,e,t,n,Fi,Ni,Bi,ts);if(u){i&&(Jr.fromBufferAttribute(i,o),Qr.fromBufferAttribute(i,c),es.fromBufferAttribute(i,l),u.uv=rn.getInterpolation(ts,Fi,Ni,Bi,Jr,Qr,es,new we)),r&&(Jr.fromBufferAttribute(r,o),Qr.fromBufferAttribute(r,c),es.fromBufferAttribute(r,l),u.uv1=rn.getInterpolation(ts,Fi,Ni,Bi,Jr,Qr,es,new we),u.uv2=u.uv1),a&&(_l.fromBufferAttribute(a,o),gl.fromBufferAttribute(a,c),xl.fromBufferAttribute(a,l),u.normal=rn.getInterpolation(ts,Fi,Ni,Bi,_l,gl,xl,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new P,materialIndex:0};rn.getNormal(Fi,Ni,Bi,h.normal),u.face=h}return u}class Nr extends kt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function v(m,_,d,S,M,T,x,E,w,C,g){const y=T/w,U=x/C,G=T/2,O=x/2,B=E/2,z=w+1,K=C+1;let H=0,V=0;const Q=new P;for(let J=0;J<K;J++){const pe=J*U-O;for(let ie=0;ie<z;ie++){const W=ie*y-G;Q[m]=W*S,Q[_]=pe*M,Q[d]=B,l.push(Q.x,Q.y,Q.z),Q[m]=0,Q[_]=0,Q[d]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(ie/w),h.push(1-J/C),H+=1}}for(let J=0;J<C;J++)for(let pe=0;pe<w;pe++){const ie=f+pe+z*J,W=f+pe+z*(J+1),Z=f+(pe+1)+z*(J+1),re=f+(pe+1)+z*J;c.push(ie,W,re),c.push(W,Z,re),V+=6}o.addGroup(p,V,g),p+=V,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Et(s){const e={};for(let t=0;t<s.length;t++){const n=nr(s[t]);for(const i in n)e[i]=n[i]}return e}function ff(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Lc(s){return s.getRenderTarget()===null?s.outputColorSpace:gn}const df={clone:nr,merge:Et};var pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pf,this.fragmentShader=mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Dc extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends Dc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,ki=1;class _f extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new sn(zi,ki,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new sn(zi,ki,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new sn(zi,ki,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new sn(zi,ki,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new sn(zi,ki,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new sn(zi,ki,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Ln,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Uc extends Ct{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gf extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(yr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fi?Ae:di),this.texture=new Uc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Nr(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Hn});r.uniforms.tEquirect.value=t;const a=new Pn(i,r),o=t.minFilter;return t.minFilter===wr&&(t.minFilter=Yt),new _f(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const oa=new P,xf=new P,vf=new xe;class ri{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=oa.subVectors(n,t).cross(xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vf.getNormalMatrix(e),i=this.coplanarPoint(oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new Fr,rs=new P;class Ic{constructor(e=new ri,t=new ri,n=new ri,i=new ri,r=new ri,a=new ri){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],p=n[9],v=n[10],m=n[11],_=n[12],d=n[13],S=n[14],M=n[15];return t[0].setComponents(o-i,h-c,m-f,M-_).normalize(),t[1].setComponents(o+i,h+c,m+f,M+_).normalize(),t[2].setComponents(o+r,h+l,m+p,M+d).normalize(),t[3].setComponents(o-r,h-l,m-p,M-d).normalize(),t[4].setComponents(o-a,h-u,m-v,M-S).normalize(),t[5].setComponents(o+a,h+u,m+v,M+S).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(rs.x=i.normal.x>0?e.max.x:e.min.x,rs.y=i.normal.y>0?e.max.y:e.min.y,rs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Mf(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,h,f),l.onUploadCallback();let v;if(h instanceof Float32Array)v=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=s.SHORT;else if(h instanceof Uint32Array)v=s.UNSIGNED_INT;else if(h instanceof Int32Array)v=s.INT;else if(h instanceof Int8Array)v=s.BYTE;else if(h instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,p=u.updateRange;s.bindBuffer(h,l),p.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:a,remove:o,update:c}}class eo extends kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,f=t/c,p=[],v=[],m=[],_=[];for(let d=0;d<u;d++){const S=d*f-a;for(let M=0;M<l;M++){const T=M*h-r;v.push(T,-S,0),m.push(0,0,1),_.push(M/o),_.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<o;S++){const M=S+l*d,T=S+l*(d+1),x=S+1+l*(d+1),E=S+1+l*d;p.push(M,T,E),p.push(T,x,E)}this.setIndex(p),this.setAttribute("position",new Zt(v,3)),this.setAttribute("normal",new Zt(m,3)),this.setAttribute("uv",new Zt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af="vec3 transformed = vec3( position );",Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pf=`#ifdef USE_IRIDESCENCE
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
#endif`,Lf=`#ifdef USE_BUMPMAP
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kf=`#define PI 3.141592653589793
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
} // validated`,Gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hf=`vec3 transformedNormal = objectNormal;
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
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",jf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rd=`#ifdef USE_GRADIENTMAP
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
}`,sd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
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
#endif`,ud=`#if defined( USE_ENVMAP )
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
#endif`,hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,md=`PhysicalMaterial material;
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
#endif`,_d=`struct PhysicalMaterial {
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
}`,gd=`
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
#endif`,xd=`#if defined( RE_IndirectDiffuse )
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Md=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Td=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ad=`#if defined( USE_POINTS_UV )
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
#endif`,Rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ld=`#ifdef USE_MORPHNORMALS
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
#endif`,Dd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ud=`#ifdef USE_MORPHTARGETS
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
#endif`,Id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Od=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zd=`#ifdef USE_NORMALMAP
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
#endif`,kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tp=`float getShadowMask() {
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
}`,np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sp=`#ifdef USE_SKINNING
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
#endif`,ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,up=`#ifdef USE_TRANSMISSION
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
#endif`,hp=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#ifdef USE_UV
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
#endif`,dp=`#ifdef USE_UV
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
#endif`,pp=`#ifdef USE_UV
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
#endif`,mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yp=`#include <common>
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
}`,Ep=`#if DEPTH_PACKING == 3200
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
}`,Tp=`#define DISTANCE
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
}`,bp=`#define DISTANCE
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rp=`uniform float scale;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Dp=`#define LAMBERT
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
}`,Up=`#define LAMBERT
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
}`,Ip=`#define MATCAP
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
}`,Op=`#define MATCAP
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
}`,Fp=`#define NORMAL
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
}`,Np=`#define NORMAL
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
}`,Bp=`#define PHONG
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
}`,zp=`#define PHONG
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
}`,kp=`#define STANDARD
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
}`,Gp=`#define STANDARD
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
}`,Hp=`#define TOON
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
}`,Vp=`#define TOON
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
}`,Wp=`uniform float size;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,qp=`#include <common>
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
}`,Yp=`uniform vec3 color;
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
}`,jp=`uniform float rotation;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Pe={alphamap_fragment:Sf,alphamap_pars_fragment:yf,alphatest_fragment:Ef,alphatest_pars_fragment:Tf,aomap_fragment:bf,aomap_pars_fragment:wf,begin_vertex:Af,beginnormal_vertex:Rf,bsdfs:Cf,iridescence_fragment:Pf,bumpmap_pars_fragment:Lf,clipping_planes_fragment:Df,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:If,clipping_planes_vertex:Of,color_fragment:Ff,color_pars_fragment:Nf,color_pars_vertex:Bf,color_vertex:zf,common:kf,cube_uv_reflection_fragment:Gf,defaultnormal_vertex:Hf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:qf,encodings_fragment:Yf,encodings_pars_fragment:jf,envmap_fragment:Kf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:$f,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:ud,envmap_vertex:Qf,fog_vertex:ed,fog_pars_vertex:td,fog_fragment:nd,fog_pars_fragment:id,gradientmap_pars_fragment:rd,lightmap_fragment:sd,lightmap_pars_fragment:ad,lights_lambert_fragment:od,lights_lambert_pars_fragment:ld,lights_pars_begin:cd,lights_toon_fragment:hd,lights_toon_pars_fragment:fd,lights_phong_fragment:dd,lights_phong_pars_fragment:pd,lights_physical_fragment:md,lights_physical_pars_fragment:_d,lights_fragment_begin:gd,lights_fragment_maps:xd,lights_fragment_end:vd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:Sd,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:Ed,map_fragment:Td,map_pars_fragment:bd,map_particle_fragment:wd,map_particle_pars_fragment:Ad,metalnessmap_fragment:Rd,metalnessmap_pars_fragment:Cd,morphcolor_vertex:Pd,morphnormal_vertex:Ld,morphtarget_pars_vertex:Dd,morphtarget_vertex:Ud,normal_fragment_begin:Id,normal_fragment_maps:Od,normal_pars_fragment:Fd,normal_pars_vertex:Nd,normal_vertex:Bd,normalmap_pars_fragment:zd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:Gd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Vd,output_fragment:Wd,packing:Xd,premultiplied_alpha_fragment:qd,project_vertex:Yd,dithering_fragment:jd,dithering_pars_fragment:Kd,roughnessmap_fragment:Zd,roughnessmap_pars_fragment:$d,shadowmap_pars_fragment:Jd,shadowmap_pars_vertex:Qd,shadowmap_vertex:ep,shadowmask_pars_fragment:tp,skinbase_vertex:np,skinning_pars_vertex:ip,skinning_vertex:rp,skinnormal_vertex:sp,specularmap_fragment:ap,specularmap_pars_fragment:op,tonemapping_fragment:lp,tonemapping_pars_fragment:cp,transmission_fragment:up,transmission_pars_fragment:hp,uv_pars_fragment:fp,uv_pars_vertex:dp,uv_vertex:pp,worldpos_vertex:mp,background_vert:_p,background_frag:gp,backgroundCube_vert:xp,backgroundCube_frag:vp,cube_vert:Mp,cube_frag:Sp,depth_vert:yp,depth_frag:Ep,distanceRGBA_vert:Tp,distanceRGBA_frag:bp,equirect_vert:wp,equirect_frag:Ap,linedashed_vert:Rp,linedashed_frag:Cp,meshbasic_vert:Pp,meshbasic_frag:Lp,meshlambert_vert:Dp,meshlambert_frag:Up,meshmatcap_vert:Ip,meshmatcap_frag:Op,meshnormal_vert:Fp,meshnormal_frag:Np,meshphong_vert:Bp,meshphong_frag:zp,meshphysical_vert:kp,meshphysical_frag:Gp,meshtoon_vert:Hp,meshtoon_frag:Vp,points_vert:Wp,points_frag:Xp,shadow_vert:qp,shadow_frag:Yp,sprite_vert:jp,sprite_frag:Kp},ae={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaTest:{value:0}}},hn={basic:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ze(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Et([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Et([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ze(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Et([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Et([ae.points,ae.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Et([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Et([ae.common,ae.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Et([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Et([ae.sprite,ae.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Et([ae.common,ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Et([ae.lights,ae.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};hn.physical={uniforms:Et([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const ss={r:0,b:0,g:0};function Zp(s,e,t,n,i,r,a){const o=new ze(0);let c=r===!0?0:1,l,u,h=null,f=0,p=null;function v(_,d){let S=!1,M=d.isScene===!0?d.background:null;switch(M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?m(o,c):M&&M.isColor&&(m(M,1),S=!0),s.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),S=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),S=!0;break}(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===bs)?(u===void 0&&(u=new Pn(new Nr(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:nr(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=M.colorSpace!==Ae,(h!==M||f!==M.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,p=s.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Pn(new eo(2,2),new vi({name:"BackgroundMaterial",uniforms:nr(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=M.colorSpace!==Ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,p=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,d){_.getRGB(ss,Lc(s)),n.buffers.color.setClear(ss.r,ss.g,ss.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(_,d=1){o.set(_),c=d,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,m(o,c)},render:v}}function $p(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=_(null);let l=c,u=!1;function h(B,z,K,H,V){let Q=!1;if(a){const J=m(H,K,z);l!==J&&(l=J,p(l.object)),Q=d(B,H,K,V),Q&&S(B,H,K,V)}else{const J=z.wireframe===!0;(l.geometry!==H.id||l.program!==K.id||l.wireframe!==J)&&(l.geometry=H.id,l.program=K.id,l.wireframe=J,Q=!0)}V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,C(B,z,K,H),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(B){return n.isWebGL2?s.bindVertexArray(B):r.bindVertexArrayOES(B)}function v(B){return n.isWebGL2?s.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function m(B,z,K){const H=K.wireframe===!0;let V=o[B.id];V===void 0&&(V={},o[B.id]=V);let Q=V[z.id];Q===void 0&&(Q={},V[z.id]=Q);let J=Q[H];return J===void 0&&(J=_(f()),Q[H]=J),J}function _(B){const z=[],K=[],H=[];for(let V=0;V<i;V++)z[V]=0,K[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:K,attributeDivisors:H,object:B,attributes:{},index:null}}function d(B,z,K,H){const V=l.attributes,Q=z.attributes;let J=0;const pe=K.getAttributes();for(const ie in pe)if(pe[ie].location>=0){const Z=V[ie];let re=Q[ie];if(re===void 0&&(ie==="instanceMatrix"&&B.instanceMatrix&&(re=B.instanceMatrix),ie==="instanceColor"&&B.instanceColor&&(re=B.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;J++}return l.attributesNum!==J||l.index!==H}function S(B,z,K,H){const V={},Q=z.attributes;let J=0;const pe=K.getAttributes();for(const ie in pe)if(pe[ie].location>=0){let Z=Q[ie];Z===void 0&&(ie==="instanceMatrix"&&B.instanceMatrix&&(Z=B.instanceMatrix),ie==="instanceColor"&&B.instanceColor&&(Z=B.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),V[ie]=re,J++}l.attributes=V,l.attributesNum=J,l.index=H}function M(){const B=l.newAttributes;for(let z=0,K=B.length;z<K;z++)B[z]=0}function T(B){x(B,0)}function x(B,z){const K=l.newAttributes,H=l.enabledAttributes,V=l.attributeDivisors;K[B]=1,H[B]===0&&(s.enableVertexAttribArray(B),H[B]=1),V[B]!==z&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,z),V[B]=z)}function E(){const B=l.newAttributes,z=l.enabledAttributes;for(let K=0,H=z.length;K<H;K++)z[K]!==B[K]&&(s.disableVertexAttribArray(K),z[K]=0)}function w(B,z,K,H,V,Q){n.isWebGL2===!0&&(K===s.INT||K===s.UNSIGNED_INT)?s.vertexAttribIPointer(B,z,K,V,Q):s.vertexAttribPointer(B,z,K,H,V,Q)}function C(B,z,K,H){if(n.isWebGL2===!1&&(B.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const V=H.attributes,Q=K.getAttributes(),J=z.defaultAttributeValues;for(const pe in Q){const ie=Q[pe];if(ie.location>=0){let W=V[pe];if(W===void 0&&(pe==="instanceMatrix"&&B.instanceMatrix&&(W=B.instanceMatrix),pe==="instanceColor"&&B.instanceColor&&(W=B.instanceColor)),W!==void 0){const Z=W.normalized,re=W.itemSize,ce=t.get(W);if(ce===void 0)continue;const I=ce.buffer,Ee=ce.type,ye=ce.bytesPerElement;if(W.isInterleavedBufferAttribute){const se=W.data,Me=se.stride,Be=W.offset;if(se.isInstancedInterleavedBuffer){for(let ge=0;ge<ie.locationSize;ge++)x(ie.location+ge,se.meshPerAttribute);B.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ge=0;ge<ie.locationSize;ge++)T(ie.location+ge);s.bindBuffer(s.ARRAY_BUFFER,I);for(let ge=0;ge<ie.locationSize;ge++)w(ie.location+ge,re/ie.locationSize,Ee,Z,Me*ye,(Be+re/ie.locationSize*ge)*ye)}else{if(W.isInstancedBufferAttribute){for(let se=0;se<ie.locationSize;se++)x(ie.location+se,W.meshPerAttribute);B.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let se=0;se<ie.locationSize;se++)T(ie.location+se);s.bindBuffer(s.ARRAY_BUFFER,I);for(let se=0;se<ie.locationSize;se++)w(ie.location+se,re/ie.locationSize,Ee,Z,re*ye,re/ie.locationSize*se*ye)}}else if(J!==void 0){const Z=J[pe];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(ie.location,Z);break;case 3:s.vertexAttrib3fv(ie.location,Z);break;case 4:s.vertexAttrib4fv(ie.location,Z);break;default:s.vertexAttrib1fv(ie.location,Z)}}}}E()}function g(){G();for(const B in o){const z=o[B];for(const K in z){const H=z[K];for(const V in H)v(H[V].object),delete H[V];delete z[K]}delete o[B]}}function y(B){if(o[B.id]===void 0)return;const z=o[B.id];for(const K in z){const H=z[K];for(const V in H)v(H[V].object),delete H[V];delete z[K]}delete o[B.id]}function U(B){for(const z in o){const K=o[z];if(K[B.id]===void 0)continue;const H=K[B.id];for(const V in H)v(H[V].object),delete H[V];delete K[B.id]}}function G(){O(),u=!0,l!==c&&(l=c,p(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:G,resetDefaultState:O,dispose:g,releaseStatesOfGeometry:y,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:T,disableUnusedAttributes:E}}function Jp(s,e,t,n){const i=n.isWebGL2;let r;function a(l){r=l}function o(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,p;if(i)f=s,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,l,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=c}function Qp(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,T=a||e.has("OES_texture_float"),x=M&&T,E=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:_,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:T,floatVertexTextures:x,maxSamples:E}}function em(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ri,o=new xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,m=h.clipIntersection,_=h.clipShadows,d=s.get(h);if(!i||v===null||v.length===0||r&&!_)r?u(null):l();else{const S=r?0:n,M=S*4;let T=d.clippingState||null;c.value=T,T=u(v,f,M,p);for(let x=0;x!==M;++x)T[x]=t[x];d.clippingState=T,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,v){const m=h!==null?h.length:0;let _=null;if(m!==0){if(_=c.value,v!==!0||_===null){const d=p+m*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(_===null||_.length<d)&&(_=new Float32Array(d));for(let M=0,T=p;M!==m;++M,T+=4)a.copy(h[M]).applyMatrix4(S,o),a.normal.toArray(_,T),_[T+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}}function tm(s){let e=new WeakMap;function t(a,o){return o===ba?a.mapping=Qi:o===wa&&(a.mapping=er),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ba||o===wa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new gf(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Fc extends Dc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wi=4,vl=[.125,.215,.35,.446,.526,.582],oi=20,la=new Fc,Ml=new ze;let ca=null;const si=(1+Math.sqrt(5))/2,Gi=1/si,Sl=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,si,Gi),new P(0,si,-Gi),new P(Gi,0,si),new P(-Gi,0,si),new P(si,Gi,0),new P(-si,Gi,0)];class yl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ca=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ca),e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Ar,format:on,colorSpace:gn,depthBuffer:!1},i=El(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nm(r)),this._blurMaterial=im(r,e,t)}return i}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,n,i){const o=new sn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ml),u.toneMapping=Ln,u.autoClear=!1;const p=new Qa({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),v=new Pn(new Nr,p);let m=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(Ml),m=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):S===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const M=this._cubeSize;as(i,S*M,d>2?M:0,M,M),u.setRenderTarget(i),m&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qi||e.mapping===er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Pn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;as(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,la)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Sl[(i-1)%Sl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pn(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*oi-1),m=r/v,_=isFinite(r)?1+Math.floor(u*m):oi;_>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${oi}`);const d=[];let S=0;for(let w=0;w<oi;++w){const C=w/m,g=Math.exp(-C*C/2);d.push(g),w===0?S+=g:w<_&&(S+=2*g)}for(let w=0;w<d.length;w++)d[w]=d[w]/S;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-n;const T=this._sizeLods[i],x=3*T*(i>M-Wi?i-M+Wi:0),E=4*(this._cubeSize-T);as(t,x,E,3*T,2*T),c.setRenderTarget(t),c.render(h,la)}}function nm(s){const e=[],t=[],n=[];let i=s;const r=s-Wi+1+vl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Wi?c=vl[a-s+Wi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,m=3,_=2,d=1,S=new Float32Array(m*v*p),M=new Float32Array(_*v*p),T=new Float32Array(d*v*p);for(let E=0;E<p;E++){const w=E%3*2/3-1,C=E>2?0:-1,g=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];S.set(g,m*v*E),M.set(f,_*v*E);const y=[E,E,E,E,E,E];T.set(y,d*v*E)}const x=new kt;x.setAttribute("position",new pn(S,m)),x.setAttribute("uv",new pn(M,_)),x.setAttribute("faceIndex",new pn(T,d)),e.push(x),i>Wi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function El(s,e,t){const n=new xi(s,e,t);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function im(s,e,t){const n=new Float32Array(oi),i=new P(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:to(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Tl(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function bl(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function to(){return`

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
	`}function rm(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ba||c===wa,u=c===Qi||c===er;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new yl(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new yl(s));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function sm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function am(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const v in f)e.update(f[v],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const m=p[v];for(let _=0,d=m.length;_<d;_++)e.update(m[_],s.ARRAY_BUFFER)}}function l(h){const f=[],p=h.index,v=h.attributes.position;let m=0;if(p!==null){const S=p.array;m=p.version;for(let M=0,T=S.length;M<T;M+=3){const x=S[M+0],E=S[M+1],w=S[M+2];f.push(x,E,E,w,w,x)}}else{const S=v.array;m=v.version;for(let M=0,T=S.length/3-1;M<T;M+=3){const x=M+0,E=M+1,w=M+2;f.push(x,E,E,w,w,x)}}const _=new(Tc(f)?Pc:Cc)(f,1);_.version=m;const d=r.get(h);d&&e.remove(d),r.set(h,_)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function om(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function u(f,p){s.drawElements(r,p,o,f*c),t.update(p,r,1)}function h(f,p,v){if(v===0)return;let m,_;if(i)m=s,_="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,p,o,f*c,v),t.update(p,r,v)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function lm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cm(s,e){return s[0]-e[0]}function um(s,e){return Math.abs(e[1])-Math.abs(s[1])}function hm(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new ft,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=v!==void 0?v.length:0;let _=r.get(u);if(_===void 0||_.count!==m){let z=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",z)};var p=z;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let g=0;M===!0&&(g=1),T===!0&&(g=2),x===!0&&(g=3);let y=u.attributes.position.count*g,U=1;y>e.maxTextureSize&&(U=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const G=new Float32Array(y*U*4*m),O=new Ac(G,y,U,m);O.type=ci,O.needsUpdate=!0;const B=g*4;for(let K=0;K<m;K++){const H=E[K],V=w[K],Q=C[K],J=y*U*4*K;for(let pe=0;pe<H.count;pe++){const ie=pe*B;M===!0&&(a.fromBufferAttribute(H,pe),G[J+ie+0]=a.x,G[J+ie+1]=a.y,G[J+ie+2]=a.z,G[J+ie+3]=0),T===!0&&(a.fromBufferAttribute(V,pe),G[J+ie+4]=a.x,G[J+ie+5]=a.y,G[J+ie+6]=a.z,G[J+ie+7]=0),x===!0&&(a.fromBufferAttribute(Q,pe),G[J+ie+8]=a.x,G[J+ie+9]=a.y,G[J+ie+10]=a.z,G[J+ie+11]=Q.itemSize===4?a.w:1)}}_={count:m,texture:O,size:new we(y,U)},r.set(u,_),u.addEventListener("dispose",z)}let d=0;for(let M=0;M<f.length;M++)d+=f[M];const S=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(s,"morphTargetBaseInfluence",S),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const v=f===void 0?0:f.length;let m=n[u.id];if(m===void 0||m.length!==v){m=[];for(let T=0;T<v;T++)m[T]=[T,0];n[u.id]=m}for(let T=0;T<v;T++){const x=m[T];x[0]=T,x[1]=f[T]}m.sort(um);for(let T=0;T<8;T++)T<v&&m[T][1]?(o[T][0]=m[T][0],o[T][1]=m[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(cm);const _=u.morphAttributes.position,d=u.morphAttributes.normal;let S=0;for(let T=0;T<8;T++){const x=o[T],E=x[0],w=x[1];E!==Number.MAX_SAFE_INTEGER&&w?(_&&u.getAttribute("morphTarget"+T)!==_[E]&&u.setAttribute("morphTarget"+T,_[E]),d&&u.getAttribute("morphNormal"+T)!==d[E]&&u.setAttribute("morphNormal"+T,d[E]),i[T]=w,S+=w):(_&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),d&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),i[T]=0)}const M=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function fm(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER)),h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Nc=new Ct,Bc=new Ac,zc=new ef,kc=new Uc,wl=[],Al=[],Rl=new Float32Array(16),Cl=new Float32Array(9),Pl=new Float32Array(4);function fr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=wl[i];if(r===void 0&&(r=new Float32Array(i),wl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function at(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Rs(s,e){let t=Al[e];t===void 0&&(t=new Int32Array(e),Al[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function dm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function pm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;s.uniform2fv(this.addr,e),ot(t,e)}}function mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;s.uniform3fv(this.addr,e),ot(t,e)}}function _m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;s.uniform4fv(this.addr,e),ot(t,e)}}function gm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(at(t,n))return;Pl.set(n),s.uniformMatrix2fv(this.addr,!1,Pl),ot(t,n)}}function xm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(at(t,n))return;Cl.set(n),s.uniformMatrix3fv(this.addr,!1,Cl),ot(t,n)}}function vm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(at(t,n))return;Rl.set(n),s.uniformMatrix4fv(this.addr,!1,Rl),ot(t,n)}}function Mm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Sm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;s.uniform2iv(this.addr,e),ot(t,e)}}function ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;s.uniform3iv(this.addr,e),ot(t,e)}}function Em(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;s.uniform4iv(this.addr,e),ot(t,e)}}function Tm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function bm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;s.uniform2uiv(this.addr,e),ot(t,e)}}function wm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;s.uniform3uiv(this.addr,e),ot(t,e)}}function Am(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;s.uniform4uiv(this.addr,e),ot(t,e)}}function Rm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Nc,i)}function Cm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zc,i)}function Pm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kc,i)}function Lm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bc,i)}function Dm(s){switch(s){case 5126:return dm;case 35664:return pm;case 35665:return mm;case 35666:return _m;case 35674:return gm;case 35675:return xm;case 35676:return vm;case 5124:case 35670:return Mm;case 35667:case 35671:return Sm;case 35668:case 35672:return ym;case 35669:case 35673:return Em;case 5125:return Tm;case 36294:return bm;case 36295:return wm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Lm}}function Um(s,e){s.uniform1fv(this.addr,e)}function Im(s,e){const t=fr(e,this.size,2);s.uniform2fv(this.addr,t)}function Om(s,e){const t=fr(e,this.size,3);s.uniform3fv(this.addr,t)}function Fm(s,e){const t=fr(e,this.size,4);s.uniform4fv(this.addr,t)}function Nm(s,e){const t=fr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Bm(s,e){const t=fr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function zm(s,e){const t=fr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function km(s,e){s.uniform1iv(this.addr,e)}function Gm(s,e){s.uniform2iv(this.addr,e)}function Hm(s,e){s.uniform3iv(this.addr,e)}function Vm(s,e){s.uniform4iv(this.addr,e)}function Wm(s,e){s.uniform1uiv(this.addr,e)}function Xm(s,e){s.uniform2uiv(this.addr,e)}function qm(s,e){s.uniform3uiv(this.addr,e)}function Ym(s,e){s.uniform4uiv(this.addr,e)}function jm(s,e,t){const n=this.cache,i=e.length,r=Rs(t,i);at(n,r)||(s.uniform1iv(this.addr,r),ot(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Nc,r[a])}function Km(s,e,t){const n=this.cache,i=e.length,r=Rs(t,i);at(n,r)||(s.uniform1iv(this.addr,r),ot(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||zc,r[a])}function Zm(s,e,t){const n=this.cache,i=e.length,r=Rs(t,i);at(n,r)||(s.uniform1iv(this.addr,r),ot(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||kc,r[a])}function $m(s,e,t){const n=this.cache,i=e.length,r=Rs(t,i);at(n,r)||(s.uniform1iv(this.addr,r),ot(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Bc,r[a])}function Jm(s){switch(s){case 5126:return Um;case 35664:return Im;case 35665:return Om;case 35666:return Fm;case 35674:return Nm;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return km;case 35667:case 35671:return Gm;case 35668:case 35672:return Hm;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return $m}}class Qm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Dm(t.type)}}class e_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Jm(t.type)}}class t_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function Ll(s,e){s.seq.push(e),s.map[e.id]=e}function n_(s,e,t){const n=s.name,i=n.length;for(ua.lastIndex=0;;){const r=ua.exec(n),a=ua.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Ll(t,l===void 0?new Qm(o,s,e):new e_(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new t_(o),Ll(t,h)),t=h}}}class fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);n_(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Dl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let i_=0;function r_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function s_(s){switch(s){case gn:return["Linear","( value )"];case Ae:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Ul(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+r_(s.getShaderSource(e),a)}else return i}function a_(s,e){const t=s_(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function o_(s,e){let t;switch(e){case vh:t="Linear";break;case Mh:t="Reinhard";break;case Sh:t="OptimizedCineon";break;case yh:t="ACESFilmic";break;case Eh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function l_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vr).join(`
`)}function c_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function vr(s){return s!==""}function Il(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ol(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h_=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(s){return s.replace(h_,f_)}function f_(s,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return La(t)}const d_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(s){return s.replace(d_,p_)}function p_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function m_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===_c?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$u?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function __(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qi:case er:e="ENVMAP_TYPE_CUBE";break;case bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case er:e="ENVMAP_MODE_REFRACTION";break}return e}function x_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vc:e="ENVMAP_BLENDING_MULTIPLY";break;case gh:e="ENVMAP_BLENDING_MIX";break;case xh:e="ENVMAP_BLENDING_ADD";break}return e}function v_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function M_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=m_(t),l=__(t),u=g_(t),h=x_(t),f=v_(t),p=t.isWebGL2?"":l_(t),v=c_(r),m=i.createProgram();let _,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[v].filter(vr).join(`
`),_.length>0&&(_+=`
`),d=[p,v].filter(vr).join(`
`),d.length>0&&(d+=`
`)):(_=[Nl(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),d=[p,Nl(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Ln?o_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,a_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),a=La(a),a=Il(a,t),a=Ol(a,t),o=La(o),o=Il(o,t),o=Ol(o,t),a=Fl(a),o=Fl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",t.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=S+_+a,T=S+d+o,x=Dl(i,i.VERTEX_SHADER,M),E=Dl(i,i.FRAGMENT_SHADER,T);if(i.attachShader(m,x),i.attachShader(m,E),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),s.debug.checkShaderErrors){const g=i.getProgramInfoLog(m).trim(),y=i.getShaderInfoLog(x).trim(),U=i.getShaderInfoLog(E).trim();let G=!0,O=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,x,E);else{const B=Ul(i,x,"vertex"),z=Ul(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+g+`
`+B+`
`+z)}else g!==""?console.warn("THREE.WebGLProgram: Program Info Log:",g):(y===""||U==="")&&(O=!1);O&&(this.diagnostics={runnable:G,programLog:g,vertexShader:{log:y,prefix:_},fragmentShader:{log:U,prefix:d}})}i.deleteShader(x),i.deleteShader(E);let w;this.getUniforms=function(){return w===void 0&&(w=new fs(i,m)),w};let C;return this.getAttributes=function(){return C===void 0&&(C=u_(i,m)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=i_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=E,this}let S_=0;class y_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new E_(e),t.set(e,n)),n}}class E_{constructor(e){this.id=S_++,this.code=e,this.usedTimes=0}}function T_(s,e,t,n,i,r,a){const o=new Ja,c=new y_,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return g===1?"uv1":g===2?"uv2":g===3?"uv3":"uv"}function _(g,y,U,G,O){const B=G.fog,z=O.geometry,K=g.isMeshStandardMaterial?G.environment:null,H=(g.isMeshStandardMaterial?t:e).get(g.envMap||K),V=H&&H.mapping===bs?H.image.height:null,Q=v[g.type];g.precision!==null&&(p=i.getMaxPrecision(g.precision),p!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,pe=J!==void 0?J.length:0;let ie=0;z.morphAttributes.position!==void 0&&(ie=1),z.morphAttributes.normal!==void 0&&(ie=2),z.morphAttributes.color!==void 0&&(ie=3);let W,Z,re,ce;if(Q){const Ge=hn[Q];W=Ge.vertexShader,Z=Ge.fragmentShader}else W=g.vertexShader,Z=g.fragmentShader,c.update(g),re=c.getVertexShaderID(g),ce=c.getFragmentShaderID(g);const I=s.getRenderTarget(),Ee=O.isInstancedMesh===!0,ye=!!g.map,se=!!g.matcap,Me=!!H,Be=!!g.aoMap,ge=!!g.lightMap,Re=!!g.bumpMap,je=!!g.normalMap,Xe=!!g.displacementMap,et=!!g.emissiveMap,Ze=!!g.metalnessMap,Ne=!!g.roughnessMap,We=g.clearcoat>0,dt=g.iridescence>0,R=g.sheen>0,b=g.transmission>0,X=We&&!!g.clearcoatMap,ee=We&&!!g.clearcoatNormalMap,ne=We&&!!g.clearcoatRoughnessMap,oe=dt&&!!g.iridescenceMap,L=dt&&!!g.iridescenceThicknessMap,$=R&&!!g.sheenColorMap,k=R&&!!g.sheenRoughnessMap,le=!!g.specularMap,fe=!!g.specularColorMap,me=!!g.specularIntensityMap,ue=b&&!!g.transmissionMap,de=b&&!!g.thicknessMap,Te=!!g.gradientMap,Le=!!g.alphaMap,$e=g.alphaTest>0,D=!!g.extensions,q=!!z.attributes.uv1,te=!!z.attributes.uv2,he=!!z.attributes.uv3;return{isWebGL2:u,shaderID:Q,shaderName:g.type,vertexShader:W,fragmentShader:Z,defines:g.defines,customVertexShaderID:re,customFragmentShaderID:ce,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,instancing:Ee,instancingColor:Ee&&O.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:I===null?s.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:gn,map:ye,matcap:se,envMap:Me,envMapMode:Me&&H.mapping,envMapCubeUVHeight:V,aoMap:Be,lightMap:ge,bumpMap:Re,normalMap:je,displacementMap:f&&Xe,emissiveMap:et,normalMapObjectSpace:je&&g.normalMapType===Vh,normalMapTangentSpace:je&&g.normalMapType===Hh,metalnessMap:Ze,roughnessMap:Ne,clearcoat:We,clearcoatMap:X,clearcoatNormalMap:ee,clearcoatRoughnessMap:ne,iridescence:dt,iridescenceMap:oe,iridescenceThicknessMap:L,sheen:R,sheenColorMap:$,sheenRoughnessMap:k,specularMap:le,specularColorMap:fe,specularIntensityMap:me,transmission:b,transmissionMap:ue,thicknessMap:de,gradientMap:Te,opaque:g.transparent===!1&&g.blending===Yi,alphaMap:Le,alphaTest:$e,combine:g.combine,mapUv:ye&&m(g.map.channel),aoMapUv:Be&&m(g.aoMap.channel),lightMapUv:ge&&m(g.lightMap.channel),bumpMapUv:Re&&m(g.bumpMap.channel),normalMapUv:je&&m(g.normalMap.channel),displacementMapUv:Xe&&m(g.displacementMap.channel),emissiveMapUv:et&&m(g.emissiveMap.channel),metalnessMapUv:Ze&&m(g.metalnessMap.channel),roughnessMapUv:Ne&&m(g.roughnessMap.channel),clearcoatMapUv:X&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:ee&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&m(g.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:L&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:$&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:k&&m(g.sheenRoughnessMap.channel),specularMapUv:le&&m(g.specularMap.channel),specularColorMapUv:fe&&m(g.specularColorMap.channel),specularIntensityMapUv:me&&m(g.specularIntensityMap.channel),transmissionMapUv:ue&&m(g.transmissionMap.channel),thicknessMapUv:de&&m(g.thicknessMap.channel),alphaMapUv:Le&&m(g.alphaMap.channel),vertexTangents:je&&!!z.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:q,vertexUv2s:te,vertexUv3s:he,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(ye||Le),fog:!!B,useFog:g.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ie,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:g.toneMapped?s.toneMapping:Ln,useLegacyLights:s.useLegacyLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Cn,flipSided:g.side===Rt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:D&&g.extensions.derivatives===!0,extensionFragDepth:D&&g.extensions.fragDepth===!0,extensionDrawBuffers:D&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:D&&g.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const U in g.defines)y.push(U),y.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(S(y,g),M(y,g),y.push(s.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function S(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function M(g,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),g.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),g.push(o.mask)}function T(g){const y=v[g.type];let U;if(y){const G=hn[y];U=df.clone(G.uniforms)}else U=g.uniforms;return U}function x(g,y){let U;for(let G=0,O=l.length;G<O;G++){const B=l[G];if(B.cacheKey===y){U=B,++U.usedTimes;break}}return U===void 0&&(U=new M_(s,y,g,r),l.push(U)),U}function E(g){if(--g.usedTimes===0){const y=l.indexOf(g);l[y]=l[l.length-1],l.pop(),g.destroy()}}function w(g){c.remove(g)}function C(){c.dispose()}return{getParameters:_,getProgramCacheKey:d,getUniforms:T,acquireProgram:x,releaseProgram:E,releaseShaderCache:w,programs:l,dispose:C}}function b_(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function w_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Bl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,p,v,m,_){let d=s[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:m,group:_},s[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=m,d.group=_),e++,d}function o(h,f,p,v,m,_){const d=a(h,f,p,v,m,_);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function c(h,f,p,v,m,_){const d=a(h,f,p,v,m,_);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||w_),n.length>1&&n.sort(f||Bl),i.length>1&&i.sort(f||Bl)}function u(){for(let h=e,f=s.length;h<f;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function A_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new zl,s.set(n,[a])):i>=r.length?(a=new zl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function R_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function C_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let P_=0;function L_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function D_(s,e){const t=new R_,n=C_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new P);const r=new P,a=new rt,o=new rt;function c(u,h){let f=0,p=0,v=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,_=0,d=0,S=0,M=0,T=0,x=0,E=0,w=0,C=0;u.sort(L_);const g=h===!0?Math.PI:1;for(let U=0,G=u.length;U<G;U++){const O=u[U],B=O.color,z=O.intensity,K=O.distance,H=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=B.r*z*g,p+=B.g*z*g,v+=B.b*z*g;else if(O.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(O.sh.coefficients[V],z);else if(O.isDirectionalLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*g),O.castShadow){const Q=O.shadow,J=n.get(O);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=H,i.directionalShadowMatrix[m]=O.shadow.matrix,T++}i.directional[m]=V,m++}else if(O.isSpotLight){const V=t.get(O);V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(B).multiplyScalar(z*g),V.distance=K,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,i.spot[d]=V;const Q=O.shadow;if(O.map&&(i.spotLightMap[w]=O.map,w++,Q.updateMatrices(O),O.castShadow&&C++),i.spotLightMatrix[d]=Q.matrix,O.castShadow){const J=n.get(O);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,i.spotShadow[d]=J,i.spotShadowMap[d]=H,E++}d++}else if(O.isRectAreaLight){const V=t.get(O);V.color.copy(B).multiplyScalar(z),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=V,S++}else if(O.isPointLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*g),V.distance=O.distance,V.decay=O.decay,O.castShadow){const Q=O.shadow,J=n.get(O);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,J.shadowCameraNear=Q.camera.near,J.shadowCameraFar=Q.camera.far,i.pointShadow[_]=J,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=O.shadow.matrix,x++}i.point[_]=V,_++}else if(O.isHemisphereLight){const V=t.get(O);V.skyColor.copy(O.color).multiplyScalar(z*g),V.groundColor.copy(O.groundColor).multiplyScalar(z*g),i.hemi[M]=V,M++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=v;const y=i.hash;(y.directionalLength!==m||y.pointLength!==_||y.spotLength!==d||y.rectAreaLength!==S||y.hemiLength!==M||y.numDirectionalShadows!==T||y.numPointShadows!==x||y.numSpotShadows!==E||y.numSpotMaps!==w)&&(i.directional.length=m,i.spot.length=d,i.rectArea.length=S,i.point.length=_,i.hemi.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,y.directionalLength=m,y.pointLength=_,y.spotLength=d,y.rectAreaLength=S,y.hemiLength=M,y.numDirectionalShadows=T,y.numPointShadows=x,y.numSpotShadows=E,y.numSpotMaps=w,i.version=P_++)}function l(u,h){let f=0,p=0,v=0,m=0,_=0;const d=h.matrixWorldInverse;for(let S=0,M=u.length;S<M;S++){const T=u[S];if(T.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),f++}else if(T.isSpotLight){const x=i.spot[v];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),v++}else if(T.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(d),o.identity(),a.copy(T.matrixWorld),a.premultiply(d),o.extractRotation(a),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(T.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(d),_++}}}return{setup:c,setupView:l,state:i}}function kl(s,e){const t=new D_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function U_(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new kl(s,e),t.set(r,[c])):a>=o.length?(c=new kl(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class I_ extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O_ extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
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
}`;function B_(s,e,t){let n=new Ic;const i=new we,r=new we,a=new ft,o=new I_({depthPacking:Gh}),c=new O_,l={},u=t.maxTextureSize,h={[Xn]:Rt,[Rt]:Xn,[Cn]:Cn},f=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:F_,fragmentShader:N_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new kt;v.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Pn(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let d=this.type;this.render=function(x,E,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||x.length===0)return;const C=s.getRenderTarget(),g=s.getActiveCubeFace(),y=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Hn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const G=d!==bn&&this.type===bn,O=d===bn&&this.type!==bn;for(let B=0,z=x.length;B<z;B++){const K=x[B],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const V=H.getFrameExtents();if(i.multiply(V),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/V.x),i.x=r.x*V.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/V.y),i.y=r.y*V.y,H.mapSize.y=r.y)),H.map===null||G===!0||O===!0){const J=this.type!==bn?{minFilter:Tt,magFilter:Tt}:{};H.map!==null&&H.map.dispose(),H.map=new xi(i.x,i.y,J),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const Q=H.getViewportCount();for(let J=0;J<Q;J++){const pe=H.getViewport(J);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),U.viewport(a),H.updateMatrices(K,J),n=H.getFrustum(),T(E,w,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===bn&&S(H,w),H.needsUpdate=!1}d=this.type,_.needsUpdate=!1,s.setRenderTarget(C,g,y)};function S(x,E){const w=e.update(m);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new xi(i.x,i.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,s.setRenderTarget(x.mapPass),s.clear(),s.renderBufferDirect(E,null,w,f,m,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,s.setRenderTarget(x.map),s.clear(),s.renderBufferDirect(E,null,w,p,m,null)}function M(x,E,w,C){let g=null;const y=w.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(y!==void 0)g=y;else if(g=w.isPointLight===!0?c:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=g.uuid,G=E.uuid;let O=l[U];O===void 0&&(O={},l[U]=O);let B=O[G];B===void 0&&(B=g.clone(),O[G]=B),g=B}if(g.visible=E.visible,g.wireframe=E.wireframe,C===bn?g.side=E.shadowSide!==null?E.shadowSide:E.side:g.side=E.shadowSide!==null?E.shadowSide:h[E.side],g.alphaMap=E.alphaMap,g.alphaTest=E.alphaTest,g.map=E.map,g.clipShadows=E.clipShadows,g.clippingPlanes=E.clippingPlanes,g.clipIntersection=E.clipIntersection,g.displacementMap=E.displacementMap,g.displacementScale=E.displacementScale,g.displacementBias=E.displacementBias,g.wireframeLinewidth=E.wireframeLinewidth,g.linewidth=E.linewidth,w.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const U=s.properties.get(g);U.light=w}return g}function T(x,E,w,C,g){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&g===bn)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,x.matrixWorld);const G=e.update(x),O=x.material;if(Array.isArray(O)){const B=G.groups;for(let z=0,K=B.length;z<K;z++){const H=B[z],V=O[H.materialIndex];if(V&&V.visible){const Q=M(x,V,C,g);s.renderBufferDirect(w,null,G,Q,x,H)}}}else if(O.visible){const B=M(x,O,C,g);s.renderBufferDirect(w,null,G,B,x,null)}}const U=x.children;for(let G=0,O=U.length;G<O;G++)T(U[G],E,w,C,g)}}function z_(s,e,t){const n=t.isWebGL2;function i(){let D=!1;const q=new ft;let te=null;const he=new ft(0,0,0,0);return{setMask:function(_e){te!==_e&&!D&&(s.colorMask(_e,_e,_e,_e),te=_e)},setLocked:function(_e){D=_e},setClear:function(_e,Ge,He,pt,In){In===!0&&(_e*=pt,Ge*=pt,He*=pt),q.set(_e,Ge,He,pt),he.equals(q)===!1&&(s.clearColor(_e,Ge,He,pt),he.copy(q))},reset:function(){D=!1,te=null,he.set(-1,0,0,0)}}}function r(){let D=!1,q=null,te=null,he=null;return{setTest:function(_e){_e?I(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(_e){q!==_e&&!D&&(s.depthMask(_e),q=_e)},setFunc:function(_e){if(te!==_e){switch(_e){case uh:s.depthFunc(s.NEVER);break;case hh:s.depthFunc(s.ALWAYS);break;case fh:s.depthFunc(s.LESS);break;case Ta:s.depthFunc(s.LEQUAL);break;case dh:s.depthFunc(s.EQUAL);break;case ph:s.depthFunc(s.GEQUAL);break;case mh:s.depthFunc(s.GREATER);break;case _h:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=_e}},setLocked:function(_e){D=_e},setClear:function(_e){he!==_e&&(s.clearDepth(_e),he=_e)},reset:function(){D=!1,q=null,te=null,he=null}}}function a(){let D=!1,q=null,te=null,he=null,_e=null,Ge=null,He=null,pt=null,In=null;return{setTest:function(Je){D||(Je?I(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(Je){q!==Je&&!D&&(s.stencilMask(Je),q=Je)},setFunc:function(Je,Vt,cn){(te!==Je||he!==Vt||_e!==cn)&&(s.stencilFunc(Je,Vt,cn),te=Je,he=Vt,_e=cn)},setOp:function(Je,Vt,cn){(Ge!==Je||He!==Vt||pt!==cn)&&(s.stencilOp(Je,Vt,cn),Ge=Je,He=Vt,pt=cn)},setLocked:function(Je){D=Je},setClear:function(Je){In!==Je&&(s.clearStencil(Je),In=Je)},reset:function(){D=!1,q=null,te=null,he=null,_e=null,Ge=null,He=null,pt=null,In=null}}}const o=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let f={},p={},v=new WeakMap,m=[],_=null,d=!1,S=null,M=null,T=null,x=null,E=null,w=null,C=null,g=!1,y=null,U=null,G=null,O=null,B=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=H>=2);let Q=null,J={};const pe=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),W=new ft().fromArray(pe),Z=new ft().fromArray(ie);function re(D,q,te,he){const _e=new Uint8Array(4),Ge=s.createTexture();s.bindTexture(D,Ge),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<te;He++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(q,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(q+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return Ge}const ce={};ce[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ce[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),I(s.DEPTH_TEST),c.setFunc(Ta),Xe(!1),et(bo),I(s.CULL_FACE),Re(Hn);function I(D){f[D]!==!0&&(s.enable(D),f[D]=!0)}function Ee(D){f[D]!==!1&&(s.disable(D),f[D]=!1)}function ye(D,q){return p[D]!==q?(s.bindFramebuffer(D,q),p[D]=q,n&&(D===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=q),D===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=q)),!0):!1}function se(D,q){let te=m,he=!1;if(D)if(te=v.get(q),te===void 0&&(te=[],v.set(q,te)),D.isWebGLMultipleRenderTargets){const _e=D.texture;if(te.length!==_e.length||te[0]!==s.COLOR_ATTACHMENT0){for(let Ge=0,He=_e.length;Ge<He;Ge++)te[Ge]=s.COLOR_ATTACHMENT0+Ge;te.length=_e.length,he=!0}}else te[0]!==s.COLOR_ATTACHMENT0&&(te[0]=s.COLOR_ATTACHMENT0,he=!0);else te[0]!==s.BACK&&(te[0]=s.BACK,he=!0);he&&(t.isWebGL2?s.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Me(D){return _!==D?(s.useProgram(D),_=D,!0):!1}const Be={[Vi]:s.FUNC_ADD,[Qu]:s.FUNC_SUBTRACT,[eh]:s.FUNC_REVERSE_SUBTRACT};if(n)Be[Co]=s.MIN,Be[Po]=s.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Be[Co]=D.MIN_EXT,Be[Po]=D.MAX_EXT)}const ge={[th]:s.ZERO,[nh]:s.ONE,[ih]:s.SRC_COLOR,[gc]:s.SRC_ALPHA,[ch]:s.SRC_ALPHA_SATURATE,[oh]:s.DST_COLOR,[sh]:s.DST_ALPHA,[rh]:s.ONE_MINUS_SRC_COLOR,[xc]:s.ONE_MINUS_SRC_ALPHA,[lh]:s.ONE_MINUS_DST_COLOR,[ah]:s.ONE_MINUS_DST_ALPHA};function Re(D,q,te,he,_e,Ge,He,pt){if(D===Hn){d===!0&&(Ee(s.BLEND),d=!1);return}if(d===!1&&(I(s.BLEND),d=!0),D!==Ju){if(D!==S||pt!==g){if((M!==Vi||E!==Vi)&&(s.blendEquation(s.FUNC_ADD),M=Vi,E=Vi),pt)switch(D){case Yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wo:s.blendFunc(s.ONE,s.ONE);break;case Ao:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ro:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ao:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ro:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,x=null,w=null,C=null,S=D,g=pt}return}_e=_e||q,Ge=Ge||te,He=He||he,(q!==M||_e!==E)&&(s.blendEquationSeparate(Be[q],Be[_e]),M=q,E=_e),(te!==T||he!==x||Ge!==w||He!==C)&&(s.blendFuncSeparate(ge[te],ge[he],ge[Ge],ge[He]),T=te,x=he,w=Ge,C=He),S=D,g=!1}function je(D,q){D.side===Cn?Ee(s.CULL_FACE):I(s.CULL_FACE);let te=D.side===Rt;q&&(te=!te),Xe(te),D.blending===Yi&&D.transparent===!1?Re(Hn):Re(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);const he=D.stencilWrite;l.setTest(he),he&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?I(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}function et(D){D!==Ku?(I(s.CULL_FACE),D!==U&&(D===bo?s.cullFace(s.BACK):D===Zu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),U=D}function Ze(D){D!==G&&(K&&s.lineWidth(D),G=D)}function Ne(D,q,te){D?(I(s.POLYGON_OFFSET_FILL),(O!==q||B!==te)&&(s.polygonOffset(q,te),O=q,B=te)):Ee(s.POLYGON_OFFSET_FILL)}function We(D){D?I(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function dt(D){D===void 0&&(D=s.TEXTURE0+z-1),Q!==D&&(s.activeTexture(D),Q=D)}function R(D,q,te){te===void 0&&(Q===null?te=s.TEXTURE0+z-1:te=Q);let he=J[te];he===void 0&&(he={type:void 0,texture:void 0},J[te]=he),(he.type!==D||he.texture!==q)&&(Q!==te&&(s.activeTexture(te),Q=te),s.bindTexture(D,q||ce[D]),he.type=D,he.texture=q)}function b(){const D=J[Q];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function L(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(D){W.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),W.copy(D))}function de(D){Z.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Z.copy(D))}function Te(D,q){let te=h.get(q);te===void 0&&(te=new WeakMap,h.set(q,te));let he=te.get(D);he===void 0&&(he=s.getUniformBlockIndex(q,D.name),te.set(D,he))}function Le(D,q){const he=h.get(q).get(D);u.get(q)!==he&&(s.uniformBlockBinding(q,he,D.__bindingPointIndex),u.set(q,he))}function $e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Q=null,J={},p={},v=new WeakMap,m=[],_=null,d=!1,S=null,M=null,T=null,x=null,E=null,w=null,C=null,g=!1,y=null,U=null,G=null,O=null,B=null,W.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:I,disable:Ee,bindFramebuffer:ye,drawBuffers:se,useProgram:Me,setBlending:Re,setMaterial:je,setFlipSided:Xe,setCullFace:et,setLineWidth:Ze,setPolygonOffset:Ne,setScissorTest:We,activeTexture:dt,bindTexture:R,unbindTexture:b,compressedTexImage2D:X,compressedTexImage3D:ee,texImage2D:fe,texImage3D:me,updateUBOMapping:Te,uniformBlockBinding:Le,texStorage2D:k,texStorage3D:le,texSubImage2D:ne,texSubImage3D:oe,compressedTexSubImage2D:L,compressedTexSubImage3D:$,scissor:ue,viewport:de,reset:$e}}function k_(s,e,t,n,i,r,a){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let m;const _=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,b){return d?new OffscreenCanvas(R,b):Rr("canvas")}function M(R,b,X,ee){let ne=1;if((R.width>ee||R.height>ee)&&(ne=ee/Math.max(R.width,R.height)),ne<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const oe=b?qh:Math.floor,L=oe(ne*R.width),$=oe(ne*R.height);m===void 0&&(m=S(L,$));const k=X?S(L,$):m;return k.width=L,k.height=$,k.getContext("2d").drawImage(R,0,0,L,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+L+"x"+$+")."),k}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function T(R){return il(R.width)&&il(R.height)}function x(R){return o?!1:R.wrapS!==an||R.wrapT!==an||R.minFilter!==Tt&&R.minFilter!==Yt}function E(R,b){return R.generateMipmaps&&b&&R.minFilter!==Tt&&R.minFilter!==Yt}function w(R){s.generateMipmap(R)}function C(R,b,X,ee,ne=!1){if(o===!1)return b;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=b;return b===s.RED&&(X===s.FLOAT&&(oe=s.R32F),X===s.HALF_FLOAT&&(oe=s.R16F),X===s.UNSIGNED_BYTE&&(oe=s.R8)),b===s.RG&&(X===s.FLOAT&&(oe=s.RG32F),X===s.HALF_FLOAT&&(oe=s.RG16F),X===s.UNSIGNED_BYTE&&(oe=s.RG8)),b===s.RGBA&&(X===s.FLOAT&&(oe=s.RGBA32F),X===s.HALF_FLOAT&&(oe=s.RGBA16F),X===s.UNSIGNED_BYTE&&(oe=ee===Ae&&ne===!1?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)),(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function g(R,b,X){return E(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==Tt&&R.minFilter!==Yt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function y(R){return R===Tt||R===Lo||R===Fs?s.NEAREST:s.LINEAR}function U(R){const b=R.target;b.removeEventListener("dispose",U),O(b),b.isVideoTexture&&v.delete(b)}function G(R){const b=R.target;b.removeEventListener("dispose",G),z(b)}function O(R){const b=n.get(R);if(b.__webglInit===void 0)return;const X=R.source,ee=_.get(X);if(ee){const ne=ee[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&B(R),Object.keys(ee).length===0&&_.delete(X)}n.remove(R)}function B(R){const b=n.get(R);s.deleteTexture(b.__webglTexture);const X=R.source,ee=_.get(X);delete ee[b.__cacheKey],a.memory.textures--}function z(R){const b=R.texture,X=n.get(R),ee=n.get(b);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)s.deleteFramebuffer(X.__webglFramebuffer[ne]),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[ne]);else{if(s.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ne=0;ne<X.__webglColorRenderbuffer.length;ne++)X.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(X.__webglColorRenderbuffer[ne]);X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,oe=b.length;ne<oe;ne++){const L=n.get(b[ne]);L.__webglTexture&&(s.deleteTexture(L.__webglTexture),a.memory.textures--),n.remove(b[ne])}n.remove(b),n.remove(R)}let K=0;function H(){K=0}function V(){const R=K;return R>=c&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+c),K+=1,R}function Q(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function J(R,b){const X=n.get(R);if(R.isVideoTexture&&We(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(X,R,b);return}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+b)}function pe(R,b){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Ee(X,R,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+b)}function ie(R,b){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Ee(X,R,b);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+b)}function W(R,b){const X=n.get(R);if(R.version>0&&X.__version!==R.version){ye(X,R,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+b)}const Z={[Aa]:s.REPEAT,[an]:s.CLAMP_TO_EDGE,[Ra]:s.MIRRORED_REPEAT},re={[Tt]:s.NEAREST,[Lo]:s.NEAREST_MIPMAP_NEAREST,[Fs]:s.NEAREST_MIPMAP_LINEAR,[Yt]:s.LINEAR,[Th]:s.LINEAR_MIPMAP_NEAREST,[wr]:s.LINEAR_MIPMAP_LINEAR};function ce(R,b,X){if(X?(s.texParameteri(R,s.TEXTURE_WRAP_S,Z[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Z[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Z[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,re[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,re[b.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==an||b.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,y(b.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,y(b.minFilter)),b.minFilter!==Tt&&b.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Tt||b.minFilter!==Fs&&b.minFilter!==wr||b.type===ci&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Ar&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(R,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function I(R,b){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",U));const ee=b.source;let ne=_.get(ee);ne===void 0&&(ne={},_.set(ee,ne));const oe=Q(b);if(oe!==R.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ne[oe].usedTimes++;const L=ne[R.__cacheKey];L!==void 0&&(ne[R.__cacheKey].usedTimes--,L.usedTimes===0&&B(b)),R.__cacheKey=oe,R.__webglTexture=ne[oe].texture}return X}function Ee(R,b,X){let ee=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=s.TEXTURE_3D);const ne=I(R,b),oe=b.source;t.bindTexture(ee,R.__webglTexture,s.TEXTURE0+X);const L=n.get(oe);if(oe.version!==L.__version||ne===!0){t.activeTexture(s.TEXTURE0+X),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const $=x(b)&&T(b.image)===!1;let k=M(b.image,$,!1,u);k=dt(b,k);const le=T(k)||o,fe=r.convert(b.format,b.colorSpace);let me=r.convert(b.type),ue=C(b.internalFormat,fe,me,b.colorSpace);ce(ee,b,le);let de;const Te=b.mipmaps,Le=o&&b.isVideoTexture!==!0,$e=L.__version===void 0||ne===!0,D=g(b,k,le);if(b.isDepthTexture)ue=s.DEPTH_COMPONENT,o?b.type===ci?ue=s.DEPTH_COMPONENT32F:b.type===li?ue=s.DEPTH_COMPONENT24:b.type===ji?ue=s.DEPTH24_STENCIL8:ue=s.DEPTH_COMPONENT16:b.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===hi&&ue===s.DEPTH_COMPONENT&&b.type!==Sc&&b.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=li,me=r.convert(b.type)),b.format===tr&&ue===s.DEPTH_COMPONENT&&(ue=s.DEPTH_STENCIL,b.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ji,me=r.convert(b.type))),$e&&(Le?t.texStorage2D(s.TEXTURE_2D,1,ue,k.width,k.height):t.texImage2D(s.TEXTURE_2D,0,ue,k.width,k.height,0,fe,me,null));else if(b.isDataTexture)if(Te.length>0&&le){Le&&$e&&t.texStorage2D(s.TEXTURE_2D,D,ue,Te[0].width,Te[0].height);for(let q=0,te=Te.length;q<te;q++)de=Te[q],Le?t.texSubImage2D(s.TEXTURE_2D,q,0,0,de.width,de.height,fe,me,de.data):t.texImage2D(s.TEXTURE_2D,q,ue,de.width,de.height,0,fe,me,de.data);b.generateMipmaps=!1}else Le?($e&&t.texStorage2D(s.TEXTURE_2D,D,ue,k.width,k.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,k.width,k.height,fe,me,k.data)):t.texImage2D(s.TEXTURE_2D,0,ue,k.width,k.height,0,fe,me,k.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Le&&$e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,D,ue,Te[0].width,Te[0].height,k.depth);for(let q=0,te=Te.length;q<te;q++)de=Te[q],b.format!==on?fe!==null?Le?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,de.width,de.height,k.depth,fe,de.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,ue,de.width,de.height,k.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,de.width,de.height,k.depth,fe,me,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,ue,de.width,de.height,k.depth,0,fe,me,de.data)}else{Le&&$e&&t.texStorage2D(s.TEXTURE_2D,D,ue,Te[0].width,Te[0].height);for(let q=0,te=Te.length;q<te;q++)de=Te[q],b.format!==on?fe!==null?Le?t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(s.TEXTURE_2D,q,ue,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(s.TEXTURE_2D,q,0,0,de.width,de.height,fe,me,de.data):t.texImage2D(s.TEXTURE_2D,q,ue,de.width,de.height,0,fe,me,de.data)}else if(b.isDataArrayTexture)Le?($e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,D,ue,k.width,k.height,k.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,fe,me,k.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ue,k.width,k.height,k.depth,0,fe,me,k.data);else if(b.isData3DTexture)Le?($e&&t.texStorage3D(s.TEXTURE_3D,D,ue,k.width,k.height,k.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,fe,me,k.data)):t.texImage3D(s.TEXTURE_3D,0,ue,k.width,k.height,k.depth,0,fe,me,k.data);else if(b.isFramebufferTexture){if($e)if(Le)t.texStorage2D(s.TEXTURE_2D,D,ue,k.width,k.height);else{let q=k.width,te=k.height;for(let he=0;he<D;he++)t.texImage2D(s.TEXTURE_2D,he,ue,q,te,0,fe,me,null),q>>=1,te>>=1}}else if(Te.length>0&&le){Le&&$e&&t.texStorage2D(s.TEXTURE_2D,D,ue,Te[0].width,Te[0].height);for(let q=0,te=Te.length;q<te;q++)de=Te[q],Le?t.texSubImage2D(s.TEXTURE_2D,q,0,0,fe,me,de):t.texImage2D(s.TEXTURE_2D,q,ue,fe,me,de);b.generateMipmaps=!1}else Le?($e&&t.texStorage2D(s.TEXTURE_2D,D,ue,k.width,k.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,me,k)):t.texImage2D(s.TEXTURE_2D,0,ue,fe,me,k);E(b,le)&&w(ee),L.__version=oe.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ye(R,b,X){if(b.image.length!==6)return;const ee=I(R,b),ne=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+X);const oe=n.get(ne);if(ne.version!==oe.__version||ee===!0){t.activeTexture(s.TEXTURE0+X),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const L=b.isCompressedTexture||b.image[0].isCompressedTexture,$=b.image[0]&&b.image[0].isDataTexture,k=[];for(let q=0;q<6;q++)!L&&!$?k[q]=M(b.image[q],!1,!0,l):k[q]=$?b.image[q].image:b.image[q],k[q]=dt(b,k[q]);const le=k[0],fe=T(le)||o,me=r.convert(b.format,b.colorSpace),ue=r.convert(b.type),de=C(b.internalFormat,me,ue,b.colorSpace),Te=o&&b.isVideoTexture!==!0,Le=oe.__version===void 0||ee===!0;let $e=g(b,le,fe);ce(s.TEXTURE_CUBE_MAP,b,fe);let D;if(L){Te&&Le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,$e,de,le.width,le.height);for(let q=0;q<6;q++){D=k[q].mipmaps;for(let te=0;te<D.length;te++){const he=D[te];b.format!==on?me!==null?Te?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te,0,0,he.width,he.height,me,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te,de,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te,0,0,he.width,he.height,me,ue,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te,de,he.width,he.height,0,me,ue,he.data)}}}else{D=b.mipmaps,Te&&Le&&(D.length>0&&$e++,t.texStorage2D(s.TEXTURE_CUBE_MAP,$e,de,k[0].width,k[0].height));for(let q=0;q<6;q++)if($){Te?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,k[q].width,k[q].height,me,ue,k[q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,de,k[q].width,k[q].height,0,me,ue,k[q].data);for(let te=0;te<D.length;te++){const _e=D[te].image[q].image;Te?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te+1,0,0,_e.width,_e.height,me,ue,_e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te+1,de,_e.width,_e.height,0,me,ue,_e.data)}}else{Te?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,me,ue,k[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,de,me,ue,k[q]);for(let te=0;te<D.length;te++){const he=D[te];Te?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te+1,0,0,me,ue,he.image[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,te+1,de,me,ue,he.image[q])}}}E(b,fe)&&w(s.TEXTURE_CUBE_MAP),oe.__version=ne.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function se(R,b,X,ee,ne){const oe=r.convert(X.format,X.colorSpace),L=r.convert(X.type),$=C(X.internalFormat,oe,L,X.colorSpace);n.get(b).__hasExternalTextures||(ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,$,b.width,b.height,b.depth,0,oe,L,null):t.texImage2D(ne,0,$,b.width,b.height,0,oe,L,null)),t.bindFramebuffer(s.FRAMEBUFFER,R),Ne(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,ne,n.get(X).__webglTexture,0,Ze(b)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,ne,n.get(X).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(R,b,X){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let ee=s.DEPTH_COMPONENT16;if(X||Ne(b)){const ne=b.depthTexture;ne&&ne.isDepthTexture&&(ne.type===ci?ee=s.DEPTH_COMPONENT32F:ne.type===li&&(ee=s.DEPTH_COMPONENT24));const oe=Ze(b);Ne(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,ee,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,ee,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,ee,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){const ee=Ze(b);X&&Ne(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,b.width,b.height):Ne(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const ee=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0;ne<ee.length;ne++){const oe=ee[ne],L=r.convert(oe.format,oe.colorSpace),$=r.convert(oe.type),k=C(oe.internalFormat,L,$,oe.colorSpace),le=Ze(b);X&&Ne(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,k,b.width,b.height):Ne(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,k,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,k,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);const ee=n.get(b.depthTexture).__webglTexture,ne=Ze(b);if(b.depthTexture.format===hi)Ne(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(b.depthTexture.format===tr)Ne(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ge(R){const b=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Be(b.__webglFramebuffer,R)}else if(X){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]=s.createRenderbuffer(),Me(b.__webglDepthbuffer[ee],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Me(b.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(R,b,X){const ee=n.get(R);b!==void 0&&se(ee.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),X!==void 0&&ge(R)}function je(R){const b=R.texture,X=n.get(R),ee=n.get(b);R.addEventListener("dispose",G),R.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=b.version,a.memory.textures++);const ne=R.isWebGLCubeRenderTarget===!0,oe=R.isWebGLMultipleRenderTargets===!0,L=T(R)||o;if(ne){X.__webglFramebuffer=[];for(let $=0;$<6;$++)X.__webglFramebuffer[$]=s.createFramebuffer()}else{if(X.__webglFramebuffer=s.createFramebuffer(),oe)if(i.drawBuffers){const $=R.texture;for(let k=0,le=$.length;k<le;k++){const fe=n.get($[k]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ne(R)===!1){const $=oe?b:[b];X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let k=0;k<$.length;k++){const le=$[k];X.__webglColorRenderbuffer[k]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[k]);const fe=r.convert(le.format,le.colorSpace),me=r.convert(le.type),ue=C(le.internalFormat,fe,me,le.colorSpace,R.isXRRenderTarget===!0),de=Ze(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,ue,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+k,s.RENDERBUFFER,X.__webglColorRenderbuffer[k])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Me(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),ce(s.TEXTURE_CUBE_MAP,b,L);for(let $=0;$<6;$++)se(X.__webglFramebuffer[$],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$);E(b,L)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const $=R.texture;for(let k=0,le=$.length;k<le;k++){const fe=$[k],me=n.get(fe);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),ce(s.TEXTURE_2D,fe,L),se(X.__webglFramebuffer,R,fe,s.COLOR_ATTACHMENT0+k,s.TEXTURE_2D),E(fe,L)&&w(s.TEXTURE_2D)}t.unbindTexture()}else{let $=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?$=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture($,ee.__webglTexture),ce($,b,L),se(X.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,$),E(b,L)&&w($),t.unbindTexture()}R.depthBuffer&&ge(R)}function Xe(R){const b=T(R)||o,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ee=0,ne=X.length;ee<ne;ee++){const oe=X[ee];if(E(oe,b)){const L=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,$=n.get(oe).__webglTexture;t.bindTexture(L,$),w(L),t.unbindTexture()}}}function et(R){if(o&&R.samples>0&&Ne(R)===!1){const b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,ee=R.height;let ne=s.COLOR_BUFFER_BIT;const oe=[],L=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=n.get(R),k=R.isWebGLMultipleRenderTargets===!0;if(k)for(let le=0;le<b.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,$.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let le=0;le<b.length;le++){oe.push(s.COLOR_ATTACHMENT0+le),R.depthBuffer&&oe.push(L);const fe=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(fe===!1&&(R.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),k&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$.__webglColorRenderbuffer[le]),fe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[L]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[L])),k){const me=n.get(b[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,me,0)}s.blitFramebuffer(0,0,X,ee,0,0,X,ee,ne,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),k)for(let le=0;le<b.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,$.__webglColorRenderbuffer[le]);const fe=n.get(b[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,$.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}}function Ze(R){return Math.min(h,R.samples)}function Ne(R){const b=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function We(R){const b=a.render.frame;v.get(R)!==b&&(v.set(R,b),R.update())}function dt(R,b){const X=R.colorSpace,ee=R.format,ne=R.type;return R.isCompressedTexture===!0||R.format===Ca||X!==gn&&X!==di&&(X===Ae?o===!1?e.has("EXT_sRGB")===!0&&ee===on?(R.format=Ca,R.minFilter=Yt,R.generateMipmaps=!1):b=bc.sRGBToLinear(b):(ee!==on||ne!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=pe,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=Re,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Ne}function G_(s,e,t){const n=t.isWebGL2;function i(r,a=di){let o;if(r===gi)return s.UNSIGNED_BYTE;if(r===Rh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ch)return s.UNSIGNED_SHORT_5_5_5_1;if(r===bh)return s.BYTE;if(r===wh)return s.SHORT;if(r===Sc)return s.UNSIGNED_SHORT;if(r===Ah)return s.INT;if(r===li)return s.UNSIGNED_INT;if(r===ci)return s.FLOAT;if(r===Ar)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ph)return s.ALPHA;if(r===on)return s.RGBA;if(r===Lh)return s.LUMINANCE;if(r===Dh)return s.LUMINANCE_ALPHA;if(r===hi)return s.DEPTH_COMPONENT;if(r===tr)return s.DEPTH_STENCIL;if(r===Ca)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Uh)return s.RED;if(r===Ih)return s.RED_INTEGER;if(r===Oh)return s.RG;if(r===Fh)return s.RG_INTEGER;if(r===Nh)return s.RGBA_INTEGER;if(r===Ns||r===Bs||r===zs||r===ks)if(a===Ae)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ns)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ns)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ks)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Do||r===Uo||r===Io||r===Oo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Do)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Io)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fo||r===No)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Fo)return a===Ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===No)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bo||r===zo||r===ko||r===Go||r===Ho||r===Vo||r===Wo||r===Xo||r===qo||r===Yo||r===jo||r===Ko||r===Zo||r===$o)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Bo)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zo)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ko)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Go)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ho)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vo)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wo)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xo)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qo)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yo)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jo)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ko)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zo)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$o)return a===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Gs)return a===Ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===zh||r===Jo||r===Qo||r===el)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Gs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Jo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===el)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ji?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class H_ extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class os extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V_={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const m of e.hand.values()){const _=t.getJointPose(m,n),d=this._getHandJoint(l,m);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;l.inputState.pinching&&f>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(V_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new os;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class W_ extends Ct{constructor(e,t,n,i,r,a,o,c,l,u){if(u=u!==void 0?u:hi,u!==hi&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hi&&(n=li),n===void 0&&u===tr&&(n=ji),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tt,this.minFilter=c!==void 0?c:Tt,this.flipY=!1,this.generateMipmaps=!1}}class X_ extends Si{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,v=null;const m=t.getContextAttributes();let _=null,d=null;const S=[],M=[],T=new Set,x=new Map,E=new sn;E.layers.enable(1),E.viewport=new ft;const w=new sn;w.layers.enable(2),w.viewport=new ft;const C=[E,w],g=new H_;g.layers.enable(1),g.layers.enable(2);let y=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=S[W];return Z===void 0&&(Z=new ha,S[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=S[W];return Z===void 0&&(Z=new ha,S[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=S[W];return Z===void 0&&(Z=new ha,S[W]=Z),Z.getHandSpace()};function G(W){const Z=M.indexOf(W.inputSource);if(Z===-1)return;const re=S[Z];re!==void 0&&(re.update(W.inputSource,W.frame,l||a),re.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",B);for(let W=0;W<S.length;W++){const Z=M[W];Z!==null&&(M[W]=null,S[W].disconnect(Z))}y=null,U=null,e.setRenderTarget(_),p=null,f=null,h=null,i=null,d=null,ie.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",O),i.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:p}),d=new xi(p.framebufferWidth,p.framebufferHeight,{format:on,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,re=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?tr:hi,re=m.stencil?ji:li);const I={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(I),i.updateRenderState({layers:[f]}),d=new xi(f.textureWidth,f.textureHeight,{format:on,type:gi,depthTexture:new W_(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Ee=e.properties.get(d);Ee.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(W){for(let Z=0;Z<W.removed.length;Z++){const re=W.removed[Z],ce=M.indexOf(re);ce>=0&&(M[ce]=null,S[ce].disconnect(re))}for(let Z=0;Z<W.added.length;Z++){const re=W.added[Z];let ce=M.indexOf(re);if(ce===-1){for(let Ee=0;Ee<S.length;Ee++)if(Ee>=M.length){M.push(re),ce=Ee;break}else if(M[Ee]===null){M[Ee]=re,ce=Ee;break}if(ce===-1)break}const I=S[ce];I&&I.connect(re)}}const z=new P,K=new P;function H(W,Z,re){z.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(re.matrixWorld);const ce=z.distanceTo(K),I=Z.projectionMatrix.elements,Ee=re.projectionMatrix.elements,ye=I[14]/(I[10]-1),se=I[14]/(I[10]+1),Me=(I[9]+1)/I[5],Be=(I[9]-1)/I[5],ge=(I[8]-1)/I[0],Re=(Ee[8]+1)/Ee[0],je=ye*ge,Xe=ye*Re,et=ce/(-ge+Re),Ze=et*-ge;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ze),W.translateZ(et),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Ne=ye+et,We=se+et,dt=je-Ze,R=Xe+(ce-Ze),b=Me*se/We*Ne,X=Be*se/We*Ne;W.projectionMatrix.makePerspective(dt,R,b,X,Ne,We),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function V(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;g.near=w.near=E.near=W.near,g.far=w.far=E.far=W.far,(y!==g.near||U!==g.far)&&(i.updateRenderState({depthNear:g.near,depthFar:g.far}),y=g.near,U=g.far);const Z=W.parent,re=g.cameras;V(g,Z);for(let ce=0;ce<re.length;ce++)V(re[ce],Z);re.length===2?H(g,E,w):g.projectionMatrix.copy(E.projectionMatrix),Q(W,g,Z)};function Q(W,Z,re){re===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(re.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const ce=W.children;for(let I=0,Ee=ce.length;I<Ee;I++)ce[I].updateMatrixWorld(!0);W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Pa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.getPlanes=function(){return T};let J=null;function pe(W,Z){if(u=Z.getViewerPose(l||a),v=Z,u!==null){const re=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ce=!1;re.length!==g.cameras.length&&(g.cameras.length=0,ce=!0);for(let I=0;I<re.length;I++){const Ee=re[I];let ye=null;if(p!==null)ye=p.getViewport(Ee);else{const Me=h.getViewSubImage(f,Ee);ye=Me.viewport,I===0&&(e.setRenderTargetTextures(d,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(d))}let se=C[I];se===void 0&&(se=new sn,se.layers.enable(I),se.viewport=new ft,C[I]=se),se.matrix.fromArray(Ee.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Ee.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ye.x,ye.y,ye.width,ye.height),I===0&&(g.matrix.copy(se.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ce===!0&&g.cameras.push(se)}}for(let re=0;re<S.length;re++){const ce=M[re],I=S[re];ce!==null&&I!==void 0&&I.update(ce,Z,l||a)}if(J&&J(W,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let re=null;for(const ce of T)Z.detectedPlanes.has(ce)||(re===null&&(re=[]),re.push(ce));if(re!==null)for(const ce of re)T.delete(ce),x.delete(ce),n.dispatchEvent({type:"planeremoved",data:ce});for(const ce of Z.detectedPlanes)if(!T.has(ce))T.add(ce),x.set(ce,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ce});else{const I=x.get(ce);ce.lastChangedTime>I&&(x.set(ce,ce.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ce}))}}v=null}const ie=new Oc;ie.setAnimationLoop(pe),this.setAnimationLoop=function(W){J=W},this.dispose=function(){}}}function q_(s,e){function t(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function n(_,d){d.color.getRGB(_.fogColor.value,Lc(s)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function i(_,d,S,M,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(_,d):d.isMeshToonMaterial?(r(_,d),h(_,d)):d.isMeshPhongMaterial?(r(_,d),u(_,d)):d.isMeshStandardMaterial?(r(_,d),f(_,d),d.isMeshPhysicalMaterial&&p(_,d,T)):d.isMeshMatcapMaterial?(r(_,d),v(_,d)):d.isMeshDepthMaterial?r(_,d):d.isMeshDistanceMaterial?(r(_,d),m(_,d)):d.isMeshNormalMaterial?r(_,d):d.isLineBasicMaterial?(a(_,d),d.isLineDashedMaterial&&o(_,d)):d.isPointsMaterial?c(_,d,S,M):d.isSpriteMaterial?l(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,t(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===Rt&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,t(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===Rt&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,t(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,t(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const S=e.get(d).envMap;if(S&&(_.envMap.value=S,_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap){_.lightMap.value=d.lightMap;const M=s.useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,_.lightMapTransform)}d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,_.aoMapTransform))}function a(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform))}function o(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function c(_,d,S,M){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*S,_.scale.value=M*.5,d.map&&(_.map.value=d.map,t(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function l(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function u(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function h(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function f(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,_.roughnessMapTransform)),e.get(d).envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function p(_,d,S){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rt&&_.clearcoatNormalScale.value.negate())),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,d){d.matcap&&(_.matcap.value=d.matcap)}function m(_,d){const S=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Y_(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,M){const T=M.program;n.uniformBlockBinding(S,T)}function l(S,M){let T=i[S.id];T===void 0&&(v(S),T=u(S),i[S.id]=T,S.addEventListener("dispose",_));const x=M.program;n.updateUBOMapping(S,x);const E=e.render.frame;r[S.id]!==E&&(f(S),r[S.id]=E)}function u(S){const M=h();S.__bindingPointIndex=M;const T=s.createBuffer(),x=S.__size,E=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,x,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,T),T}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=i[S.id],T=S.uniforms,x=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,w=T.length;E<w;E++){const C=T[E];if(p(C,E,x)===!0){const g=C.__offset,y=Array.isArray(C.value)?C.value:[C.value];let U=0;for(let G=0;G<y.length;G++){const O=y[G],B=m(O);typeof O=="number"?(C.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,g+U,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=O.elements[0],C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=O.elements[0],C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=O.elements[0]):(O.toArray(C.__data,U),U+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,g,C.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,M,T){const x=S.value;if(T[M]===void 0){if(typeof x=="number")T[M]=x;else{const E=Array.isArray(x)?x:[x],w=[];for(let C=0;C<E.length;C++)w.push(E[C].clone());T[M]=w}return!0}else if(typeof x=="number"){if(T[M]!==x)return T[M]=x,!0}else{const E=Array.isArray(T[M])?T[M]:[T[M]],w=Array.isArray(x)?x:[x];for(let C=0;C<E.length;C++){const g=E[C];if(g.equals(w[C])===!1)return g.copy(w[C]),!0}}return!1}function v(S){const M=S.uniforms;let T=0;const x=16;let E=0;for(let w=0,C=M.length;w<C;w++){const g=M[w],y={boundary:0,storage:0},U=Array.isArray(g.value)?g.value:[g.value];for(let G=0,O=U.length;G<O;G++){const B=U[G],z=m(B);y.boundary+=z.boundary,y.storage+=z.storage}if(g.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),g.__offset=T,w>0){E=T%x;const G=x-E;E!==0&&G-y.boundary<0&&(T+=x-E,g.__offset=T)}T+=y.storage}return E=T%x,E>0&&(T+=x-E),S.__size=T,S.__cache={},this}function m(S){const M={boundary:0,storage:0};return typeof S=="number"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function _(S){const M=S.target;M.removeEventListener("dispose",_);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function d(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:c,update:l,dispose:d}}function j_(){const s=Rr("canvas");return s.style.display="block",s}class Gc{constructor(e={}){const{canvas:t=j_(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let p=null,v=null;const m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ae,this.useLegacyLights=!0,this.toneMapping=Ln,this.toneMappingExposure=1;const d=this;let S=!1,M=0,T=0,x=null,E=-1,w=null;const C=new ft,g=new ft;let y=null,U=t.width,G=t.height,O=1,B=null,z=null;const K=new ft(0,0,U,G),H=new ft(0,0,U,G);let V=!1;const Q=new Ic;let J=!1,pe=!1,ie=null;const W=new rt,Z=new P,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return x===null?O:1}let I=n;function Ee(A,N){for(let Y=0;Y<A.length;Y++){const F=A[Y],j=t.getContext(F,N);if(j!==null)return j}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$a}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Le,!1),I===null){const N=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&N.shift(),I=Ee(N,A),I===null)throw Ee(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ye,se,Me,Be,ge,Re,je,Xe,et,Ze,Ne,We,dt,R,b,X,ee,ne,oe,L,$,k,le,fe;function me(){ye=new sm(I),se=new Qp(I,ye,e),ye.init(se),k=new G_(I,ye,se),Me=new z_(I,ye,se),Be=new lm(I),ge=new b_,Re=new k_(I,ye,Me,ge,se,k,Be),je=new tm(d),Xe=new rm(d),et=new Mf(I,se),le=new $p(I,ye,et,se),Ze=new am(I,et,Be,le),Ne=new fm(I,Ze,et,Be),oe=new hm(I,se,Re),X=new em(ge),We=new T_(d,je,Xe,ye,se,le,X),dt=new q_(d,ge),R=new A_,b=new U_(ye,se),ne=new Zp(d,je,Xe,Me,Ne,f,c),ee=new B_(d,Ne,se),fe=new Y_(I,Be,se,Me),L=new Jp(I,ye,Be,se),$=new om(I,ye,Be,se),Be.programs=We.programs,d.capabilities=se,d.extensions=ye,d.properties=ge,d.renderLists=R,d.shadowMap=ee,d.state=Me,d.info=Be}me();const ue=new X_(d,I);this.xr=ue,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(U,G,!1))},this.getSize=function(A){return A.set(U,G)},this.setSize=function(A,N,Y=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,G=N,t.width=Math.floor(A*O),t.height=Math.floor(N*O),Y===!0&&(t.style.width=A+"px",t.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(U*O,G*O).floor()},this.setDrawingBufferSize=function(A,N,Y){U=A,G=N,O=Y,t.width=Math.floor(A*Y),t.height=Math.floor(N*Y),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,N,Y,F){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,N,Y,F),Me.viewport(C.copy(K).multiplyScalar(O).floor())},this.getScissor=function(A){return A.copy(H)},this.setScissor=function(A,N,Y,F){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,N,Y,F),Me.scissor(g.copy(H).multiplyScalar(O).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(A){Me.setScissorTest(V=A)},this.setOpaqueSort=function(A){B=A},this.setTransparentSort=function(A){z=A},this.getClearColor=function(A){return A.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(A=!0,N=!0,Y=!0){let F=0;A&&(F|=I.COLOR_BUFFER_BIT),N&&(F|=I.DEPTH_BUFFER_BIT),Y&&(F|=I.STENCIL_BUFFER_BIT),I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),R.dispose(),b.dispose(),ge.dispose(),je.dispose(),Xe.dispose(),Ne.dispose(),le.dispose(),fe.dispose(),We.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",_e),ue.removeEventListener("sessionend",Ge),ie&&(ie.dispose(),ie=null),He.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Be.autoReset,N=ee.enabled,Y=ee.autoUpdate,F=ee.needsUpdate,j=ee.type;me(),Be.autoReset=A,ee.enabled=N,ee.autoUpdate=Y,ee.needsUpdate=F,ee.type=j}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $e(A){const N=A.target;N.removeEventListener("dispose",$e),D(N)}function D(A){q(A),ge.remove(A)}function q(A){const N=ge.get(A).programs;N!==void 0&&(N.forEach(function(Y){We.releaseProgram(Y)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,Y,F,j,ve){N===null&&(N=re);const Se=j.isMesh&&j.matrixWorld.determinant()<0,be=Vu(A,N,Y,F,j);Me.setMaterial(F,Se);let Ce=Y.index,De=1;F.wireframe===!0&&(Ce=Ze.getWireframeAttribute(Y),De=2);const Ue=Y.drawRange,Ie=Y.attributes.position;let ke=Ue.start*De,St=(Ue.start+Ue.count)*De;ve!==null&&(ke=Math.max(ke,ve.start*De),St=Math.min(St,(ve.start+ve.count)*De)),Ce!==null?(ke=Math.max(ke,0),St=Math.min(St,Ce.count)):Ie!=null&&(ke=Math.max(ke,0),St=Math.min(St,Ie.count));const Jt=St-ke;if(Jt<0||Jt===1/0)return;le.setup(j,F,be,Y,Ce);let Zn,tt=L;if(Ce!==null&&(Zn=et.get(Ce),tt=$,tt.setIndex(Zn)),j.isMesh)F.wireframe===!0?(Me.setLineWidth(F.wireframeLinewidth*ce()),tt.setMode(I.LINES)):tt.setMode(I.TRIANGLES);else if(j.isLine){let Fe=F.linewidth;Fe===void 0&&(Fe=1),Me.setLineWidth(Fe*ce()),j.isLineSegments?tt.setMode(I.LINES):j.isLineLoop?tt.setMode(I.LINE_LOOP):tt.setMode(I.LINE_STRIP)}else j.isPoints?tt.setMode(I.POINTS):j.isSprite&&tt.setMode(I.TRIANGLES);if(j.isInstancedMesh)tt.renderInstances(ke,Jt,j.count);else if(Y.isInstancedBufferGeometry){const Fe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ds=Math.min(Y.instanceCount,Fe);tt.renderInstances(ke,Jt,Ds)}else tt.render(ke,Jt)},this.compile=function(A,N){function Y(F,j,ve){F.transparent===!0&&F.side===Cn&&F.forceSinglePass===!1?(F.side=Rt,F.needsUpdate=!0,zr(F,j,ve),F.side=Xn,F.needsUpdate=!0,zr(F,j,ve),F.side=Cn):zr(F,j,ve)}v=b.get(A),v.init(),_.push(v),A.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(v.pushLight(F),F.castShadow&&v.pushShadow(F))}),v.setupLights(d.useLegacyLights),A.traverse(function(F){const j=F.material;if(j)if(Array.isArray(j))for(let ve=0;ve<j.length;ve++){const Se=j[ve];Y(Se,A,F)}else Y(j,A,F)}),_.pop(),v=null};let te=null;function he(A){te&&te(A)}function _e(){He.stop()}function Ge(){He.start()}const He=new Oc;He.setAnimationLoop(he),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(A){te=A,ue.setAnimationLoop(A),A===null?He.stop():He.start()},ue.addEventListener("sessionstart",_e),ue.addEventListener("sessionend",Ge),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(N),N=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,N,x),v=b.get(A,_.length),v.init(),_.push(v),W.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(W),pe=this.localClippingEnabled,J=X.init(this.clippingPlanes,pe),p=R.get(A,m.length),p.init(),m.push(p),pt(A,N,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(B,z),J===!0&&X.beginShadows();const Y=v.state.shadowsArray;if(ee.render(Y,A,N),J===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(p,A),v.setupLights(d.useLegacyLights),N.isArrayCamera){const F=N.cameras;for(let j=0,ve=F.length;j<ve;j++){const Se=F[j];In(p,A,Se,Se.viewport)}}else In(p,A,N);x!==null&&(Re.updateMultisampleRenderTarget(x),Re.updateRenderTargetMipmap(x)),A.isScene===!0&&A.onAfterRender(d,A,N),le.resetDefaultState(),E=-1,w=null,_.pop(),_.length>0?v=_[_.length-1]:v=null,m.pop(),m.length>0?p=m[m.length-1]:p=null};function pt(A,N,Y,F){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){F&&Z.setFromMatrixPosition(A.matrixWorld).applyMatrix4(W);const Se=Ne.update(A),be=A.material;be.visible&&p.push(A,Se,be,Y,Z.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==Be.render.frame&&(A.skeleton.update(),A.skeleton.frame=Be.render.frame);const Se=Ne.update(A),be=A.material;if(F&&(Se.boundingSphere===null&&Se.computeBoundingSphere(),Z.copy(Se.boundingSphere.center).applyMatrix4(A.matrixWorld).applyMatrix4(W)),Array.isArray(be)){const Ce=Se.groups;for(let De=0,Ue=Ce.length;De<Ue;De++){const Ie=Ce[De],ke=be[Ie.materialIndex];ke&&ke.visible&&p.push(A,Se,ke,Y,Z.z,Ie)}}else be.visible&&p.push(A,Se,be,Y,Z.z,null)}}const ve=A.children;for(let Se=0,be=ve.length;Se<be;Se++)pt(ve[Se],N,Y,F)}function In(A,N,Y,F){const j=A.opaque,ve=A.transmissive,Se=A.transparent;v.setupLightsView(Y),J===!0&&X.setGlobalState(d.clippingPlanes,Y),ve.length>0&&Je(j,ve,N,Y),F&&Me.viewport(C.copy(F)),j.length>0&&Vt(j,N,Y),ve.length>0&&Vt(ve,N,Y),Se.length>0&&Vt(Se,N,Y),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Je(A,N,Y,F){if(ie===null){const be=se.isWebGL2;ie=new xi(1024,1024,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Ar:gi,minFilter:wr,samples:be&&o===!0?4:0})}const j=d.getRenderTarget();d.setRenderTarget(ie),d.clear();const ve=d.toneMapping;d.toneMapping=Ln,Vt(A,Y,F),Re.updateMultisampleRenderTarget(ie),Re.updateRenderTargetMipmap(ie);let Se=!1;for(let be=0,Ce=N.length;be<Ce;be++){const De=N[be],Ue=De.object,Ie=De.geometry,ke=De.material,St=De.group;if(ke.side===Cn&&Ue.layers.test(F.layers)){const Jt=ke.side;ke.side=Rt,ke.needsUpdate=!0,cn(Ue,Y,F,Ie,ke,St),ke.side=Jt,ke.needsUpdate=!0,Se=!0}}Se===!0&&(Re.updateMultisampleRenderTarget(ie),Re.updateRenderTargetMipmap(ie)),d.setRenderTarget(j),d.toneMapping=ve}function Vt(A,N,Y){const F=N.isScene===!0?N.overrideMaterial:null;for(let j=0,ve=A.length;j<ve;j++){const Se=A[j],be=Se.object,Ce=Se.geometry,De=F===null?Se.material:F,Ue=Se.group;be.layers.test(Y.layers)&&cn(be,N,Y,Ce,De,Ue)}}function cn(A,N,Y,F,j,ve){A.onBeforeRender(d,N,Y,F,j,ve),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(d,N,Y,F,A,ve),j.transparent===!0&&j.side===Cn&&j.forceSinglePass===!1?(j.side=Rt,j.needsUpdate=!0,d.renderBufferDirect(Y,N,F,j,A,ve),j.side=Xn,j.needsUpdate=!0,d.renderBufferDirect(Y,N,F,j,A,ve),j.side=Cn):d.renderBufferDirect(Y,N,F,j,A,ve),A.onAfterRender(d,N,Y,F,j,ve)}function zr(A,N,Y){N.isScene!==!0&&(N=re);const F=ge.get(A),j=v.state.lights,ve=v.state.shadowsArray,Se=j.state.version,be=We.getParameters(A,j.state,ve,N,Y),Ce=We.getProgramCacheKey(be);let De=F.programs;F.environment=A.isMeshStandardMaterial?N.environment:null,F.fog=N.fog,F.envMap=(A.isMeshStandardMaterial?Xe:je).get(A.envMap||F.environment),De===void 0&&(A.addEventListener("dispose",$e),De=new Map,F.programs=De);let Ue=De.get(Ce);if(Ue!==void 0){if(F.currentProgram===Ue&&F.lightsStateVersion===Se)return yo(A,be),Ue}else be.uniforms=We.getUniforms(A),A.onBuild(Y,be,d),A.onBeforeCompile(be,d),Ue=We.acquireProgram(be,Ce),De.set(Ce,Ue),F.uniforms=be.uniforms;const Ie=F.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=X.uniform),yo(A,be),F.needsLights=Xu(A),F.lightsStateVersion=Se,F.needsLights&&(Ie.ambientLightColor.value=j.state.ambient,Ie.lightProbe.value=j.state.probe,Ie.directionalLights.value=j.state.directional,Ie.directionalLightShadows.value=j.state.directionalShadow,Ie.spotLights.value=j.state.spot,Ie.spotLightShadows.value=j.state.spotShadow,Ie.rectAreaLights.value=j.state.rectArea,Ie.ltc_1.value=j.state.rectAreaLTC1,Ie.ltc_2.value=j.state.rectAreaLTC2,Ie.pointLights.value=j.state.point,Ie.pointLightShadows.value=j.state.pointShadow,Ie.hemisphereLights.value=j.state.hemi,Ie.directionalShadowMap.value=j.state.directionalShadowMap,Ie.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ie.spotShadowMap.value=j.state.spotShadowMap,Ie.spotLightMatrix.value=j.state.spotLightMatrix,Ie.spotLightMap.value=j.state.spotLightMap,Ie.pointShadowMap.value=j.state.pointShadowMap,Ie.pointShadowMatrix.value=j.state.pointShadowMatrix);const ke=Ue.getUniforms(),St=fs.seqWithValue(ke.seq,Ie);return F.currentProgram=Ue,F.uniformsList=St,Ue}function yo(A,N){const Y=ge.get(A);Y.outputColorSpace=N.outputColorSpace,Y.instancing=N.instancing,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function Vu(A,N,Y,F,j){N.isScene!==!0&&(N=re),Re.resetTextureUnits();const ve=N.fog,Se=F.isMeshStandardMaterial?N.environment:null,be=x===null?d.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:gn,Ce=(F.isMeshStandardMaterial?Xe:je).get(F.envMap||Se),De=F.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ue=!!F.normalMap&&!!Y.attributes.tangent,Ie=!!Y.morphAttributes.position,ke=!!Y.morphAttributes.normal,St=!!Y.morphAttributes.color,Jt=F.toneMapped?d.toneMapping:Ln,Zn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,tt=Zn!==void 0?Zn.length:0,Fe=ge.get(F),Ds=v.state.lights;if(J===!0&&(pe===!0||A!==w)){const It=A===w&&F.id===E;X.setState(F,A,It)}let lt=!1;F.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ds.state.version||Fe.outputColorSpace!==be||j.isInstancedMesh&&Fe.instancing===!1||!j.isInstancedMesh&&Fe.instancing===!0||j.isSkinnedMesh&&Fe.skinning===!1||!j.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Ce||F.fog===!0&&Fe.fog!==ve||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==X.numPlanes||Fe.numIntersection!==X.numIntersection)||Fe.vertexAlphas!==De||Fe.vertexTangents!==Ue||Fe.morphTargets!==Ie||Fe.morphNormals!==ke||Fe.morphColors!==St||Fe.toneMapping!==Jt||se.isWebGL2===!0&&Fe.morphTargetsCount!==tt)&&(lt=!0):(lt=!0,Fe.__version=F.version);let $n=Fe.currentProgram;lt===!0&&($n=zr(F,N,j));let Eo=!1,dr=!1,Us=!1;const yt=$n.getUniforms(),Jn=Fe.uniforms;if(Me.useProgram($n.program)&&(Eo=!0,dr=!0,Us=!0),F.id!==E&&(E=F.id,dr=!0),Eo||w!==A){if(yt.setValue(I,"projectionMatrix",A.projectionMatrix),se.logarithmicDepthBuffer&&yt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),w!==A&&(w=A,dr=!0,Us=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const It=yt.map.cameraPosition;It!==void 0&&It.setValue(I,Z.setFromMatrixPosition(A.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&yt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||j.isSkinnedMesh)&&yt.setValue(I,"viewMatrix",A.matrixWorldInverse)}if(j.isSkinnedMesh){yt.setOptional(I,j,"bindMatrix"),yt.setOptional(I,j,"bindMatrixInverse");const It=j.skeleton;It&&(se.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),yt.setValue(I,"boneTexture",It.boneTexture,Re),yt.setValue(I,"boneTextureSize",It.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Is=Y.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0&&se.isWebGL2===!0)&&oe.update(j,Y,$n),(dr||Fe.receiveShadow!==j.receiveShadow)&&(Fe.receiveShadow=j.receiveShadow,yt.setValue(I,"receiveShadow",j.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Jn.envMap.value=Ce,Jn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),dr&&(yt.setValue(I,"toneMappingExposure",d.toneMappingExposure),Fe.needsLights&&Wu(Jn,Us),ve&&F.fog===!0&&dt.refreshFogUniforms(Jn,ve),dt.refreshMaterialUniforms(Jn,F,O,G,ie),fs.upload(I,Fe.uniformsList,Jn,Re)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(fs.upload(I,Fe.uniformsList,Jn,Re),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&yt.setValue(I,"center",j.center),yt.setValue(I,"modelViewMatrix",j.modelViewMatrix),yt.setValue(I,"normalMatrix",j.normalMatrix),yt.setValue(I,"modelMatrix",j.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const It=F.uniformsGroups;for(let Os=0,qu=It.length;Os<qu;Os++)if(se.isWebGL2){const To=It[Os];fe.update(To,$n),fe.bind(To,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function Wu(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function Xu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(A,N,Y){ge.get(A.texture).__webglTexture=N,ge.get(A.depthTexture).__webglTexture=Y;const F=ge.get(A);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=Y===void 0,F.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,N){const Y=ge.get(A);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,Y=0){x=A,M=N,T=Y;let F=!0,j=null,ve=!1,Se=!1;if(A){const Ce=ge.get(A);Ce.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(I.FRAMEBUFFER,null),F=!1):Ce.__webglFramebuffer===void 0?Re.setupRenderTarget(A):Ce.__hasExternalTextures&&Re.rebindTextures(A,ge.get(A.texture).__webglTexture,ge.get(A.depthTexture).__webglTexture);const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Se=!0);const Ue=ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(j=Ue[N],ve=!0):se.isWebGL2&&A.samples>0&&Re.useMultisampledRTT(A)===!1?j=ge.get(A).__webglMultisampledFramebuffer:j=Ue,C.copy(A.viewport),g.copy(A.scissor),y=A.scissorTest}else C.copy(K).multiplyScalar(O).floor(),g.copy(H).multiplyScalar(O).floor(),y=V;if(Me.bindFramebuffer(I.FRAMEBUFFER,j)&&se.drawBuffers&&F&&Me.drawBuffers(A,j),Me.viewport(C),Me.scissor(g),Me.setScissorTest(y),ve){const Ce=ge.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ce.__webglTexture,Y)}else if(Se){const Ce=ge.get(A.texture),De=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.__webglTexture,Y||0,De)}E=-1},this.readRenderTargetPixels=function(A,N,Y,F,j,ve,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){Me.bindFramebuffer(I.FRAMEBUFFER,be);try{const Ce=A.texture,De=Ce.format,Ue=Ce.type;if(De!==on&&k.convert(De)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Ue===Ar&&(ye.has("EXT_color_buffer_half_float")||se.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ue!==gi&&k.convert(Ue)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===ci&&(se.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-F&&Y>=0&&Y<=A.height-j&&I.readPixels(N,Y,F,j,k.convert(De),k.convert(Ue),ve)}finally{const Ce=x!==null?ge.get(x).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(A,N,Y=0){const F=Math.pow(2,-Y),j=Math.floor(N.image.width*F),ve=Math.floor(N.image.height*F);Re.setTexture2D(N,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,A.x,A.y,j,ve),Me.unbindTexture()},this.copyTextureToTexture=function(A,N,Y,F=0){const j=N.image.width,ve=N.image.height,Se=k.convert(Y.format),be=k.convert(Y.type);Re.setTexture2D(Y,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Y.unpackAlignment),N.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,A.x,A.y,j,ve,Se,be,N.image.data):N.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,A.x,A.y,N.mipmaps[0].width,N.mipmaps[0].height,Se,N.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,F,A.x,A.y,Se,be,N.image),F===0&&Y.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(A,N,Y,F,j=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=A.max.x-A.min.x+1,Se=A.max.y-A.min.y+1,be=A.max.z-A.min.z+1,Ce=k.convert(F.format),De=k.convert(F.type);let Ue;if(F.isData3DTexture)Re.setTexture3D(F,0),Ue=I.TEXTURE_3D;else if(F.isDataArrayTexture)Re.setTexture2DArray(F,0),Ue=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Ie=I.getParameter(I.UNPACK_ROW_LENGTH),ke=I.getParameter(I.UNPACK_IMAGE_HEIGHT),St=I.getParameter(I.UNPACK_SKIP_PIXELS),Jt=I.getParameter(I.UNPACK_SKIP_ROWS),Zn=I.getParameter(I.UNPACK_SKIP_IMAGES),tt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,tt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,A.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,A.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,A.min.z),Y.isDataTexture||Y.isData3DTexture?I.texSubImage3D(Ue,j,N.x,N.y,N.z,ve,Se,be,Ce,De,tt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ue,j,N.x,N.y,N.z,ve,Se,be,Ce,tt.data)):I.texSubImage3D(Ue,j,N.x,N.y,N.z,ve,Se,be,Ce,De,tt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ie),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ke),I.pixelStorei(I.UNPACK_SKIP_PIXELS,St),I.pixelStorei(I.UNPACK_SKIP_ROWS,Jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zn),j===0&&F.generateMipmaps&&I.generateMipmap(Ue),Me.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Re.setTextureCube(A,0):A.isData3DTexture?Re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Re.setTexture2DArray(A,0):Re.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){M=0,T=0,x=null,Me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ae?fi:yc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fi?Ae:gn}}class K_ extends Gc{}K_.prototype.isWebGL1Renderer=!0;class Z_ extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Da extends hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gl=new P,Hl=new P,Vl=new rt,fa=new ws,ls=new Fr;class Wl extends wt{constructor(e=new kt,t=new Da){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Gl.fromBufferAttribute(t,i-1),Hl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Gl.distanceTo(Hl);e.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(i),ls.radius+=r,e.ray.intersectsSphere(ls)===!1)return;Vl.copy(i).invert(),fa.copy(e.ray).applyMatrix4(Vl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,u=new P,h=new P,f=new P,p=this.isLineSegments?2:1,v=n.index,_=n.attributes.position;if(v!==null){const d=Math.max(0,a.start),S=Math.min(v.count,a.start+a.count);for(let M=d,T=S-1;M<T;M+=p){const x=v.getX(M),E=v.getX(M+1);if(l.fromBufferAttribute(_,x),u.fromBufferAttribute(_,E),fa.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),S=Math.min(_.count,a.start+a.count);for(let M=d,T=S-1;M<T;M+=p){if(l.fromBufferAttribute(_,M),u.fromBufferAttribute(_,M+1),fa.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class Hc extends hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xl=new rt,Ua=new ws,cs=new Fr,us=new P;class $_ extends wt{constructor(e=new kt,t=new Hc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(i),cs.radius+=r,e.ray.intersectsSphere(cs)===!1)return;Xl.copy(i).invert(),Ua.copy(e.ray).applyMatrix4(Xl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let v=f,m=p;v<m;v++){const _=l.getX(v);us.fromBufferAttribute(h,_),ql(us,_,c,i,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,m=p;v<m;v++)us.fromBufferAttribute(h,v),ql(us,v,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ql(s,e,t,n,i,r,a){const o=Ua.distanceSqToPoint(s);if(o<t){const c=new P;Ua.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class no extends kt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new P,f=new P,p=[],v=[],m=[],_=[];for(let d=0;d<=n;d++){const S=[],M=d/n;let T=0;d===0&&a===0?T=.5/t:d===n&&c===Math.PI&&(T=-.5/t);for(let x=0;x<=t;x++){const E=x/t;h.x=-e*Math.cos(i+E*r)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(i+E*r)*Math.sin(a+M*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),m.push(f.x,f.y,f.z),_.push(E+T,1-M),S.push(l++)}u.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){const M=u[d][S+1],T=u[d][S],x=u[d+1][S],E=u[d+1][S+1];(d!==0||a>0)&&p.push(M,T,E),(d!==n-1||c<Math.PI)&&p.push(T,x,E)}this.setIndex(p),this.setAttribute("position",new Zt(v,3)),this.setAttribute("normal",new Zt(m,3)),this.setAttribute("uv",new Zt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Yl={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class J_{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],v=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const Q_=new J_;class Vc{constructor(e){this.manager=e!==void 0?e:Q_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class eg extends Vc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Yl.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Rr("img");function c(){u(),Yl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class tg extends Vc{constructor(e){super(e)}load(e,t,n,i){const r=new Ct,a=new eg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ng{constructor(e,t,n=0,i=1/0){this.ray=new ws(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ia(e,this,n,t),n.sort(jl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ia(e[i],this,n,t);return n.sort(jl),n}}function jl(s,e){return s.distance-e.distance}function Ia(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Ia(i[r],e,t,!0)}}class Kl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);const Zl={type:"change"},da={type:"start"},$l={type:"end"};class ig extends Si{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",We),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",We),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Zl),n.update(),r=i.NONE},this.update=function(){const L=new P,$=new qn().setFromUnitVectors(e.up,new P(0,1,0)),k=$.clone().invert(),le=new P,fe=new qn,me=2*Math.PI;return function(){const de=n.object.position;L.copy(de).sub(n.target),L.applyQuaternion($),o.setFromVector3(L),n.autoRotate&&r===i.NONE&&g(w()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Te=n.minAzimuthAngle,Le=n.maxAzimuthAngle;return isFinite(Te)&&isFinite(Le)&&(Te<-Math.PI?Te+=me:Te>Math.PI&&(Te-=me),Le<-Math.PI?Le+=me:Le>Math.PI&&(Le-=me),Te<=Le?o.theta=Math.max(Te,Math.min(Le,o.theta)):o.theta=o.theta>(Te+Le)/2?Math.max(Te,o.theta):Math.min(Le,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(o),L.applyQuaternion(k),de.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||le.distanceToSquared(n.object.position)>a||8*(1-fe.dot(n.object.quaternion))>a?(n.dispatchEvent(Zl),le.copy(n.object.position),fe.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",b),n.domElement.removeEventListener("pointerdown",Re),n.domElement.removeEventListener("pointercancel",Xe),n.domElement.removeEventListener("wheel",Ne),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",Xe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",We),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new Kl,c=new Kl;let l=1;const u=new P;let h=!1;const f=new we,p=new we,v=new we,m=new we,_=new we,d=new we,S=new we,M=new we,T=new we,x=[],E={};function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function g(L){c.theta-=L}function y(L){c.phi-=L}const U=function(){const L=new P;return function(k,le){L.setFromMatrixColumn(le,0),L.multiplyScalar(-k),u.add(L)}}(),G=function(){const L=new P;return function(k,le){n.screenSpacePanning===!0?L.setFromMatrixColumn(le,1):(L.setFromMatrixColumn(le,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(k),u.add(L)}}(),O=function(){const L=new P;return function(k,le){const fe=n.domElement;if(n.object.isPerspectiveCamera){const me=n.object.position;L.copy(me).sub(n.target);let ue=L.length();ue*=Math.tan(n.object.fov/2*Math.PI/180),U(2*k*ue/fe.clientHeight,n.object.matrix),G(2*le*ue/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(k*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),G(le*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function B(L){n.object.isPerspectiveCamera?l/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(L){n.object.isPerspectiveCamera?l*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(L){f.set(L.clientX,L.clientY)}function H(L){S.set(L.clientX,L.clientY)}function V(L){m.set(L.clientX,L.clientY)}function Q(L){p.set(L.clientX,L.clientY),v.subVectors(p,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;g(2*Math.PI*v.x/$.clientHeight),y(2*Math.PI*v.y/$.clientHeight),f.copy(p),n.update()}function J(L){M.set(L.clientX,L.clientY),T.subVectors(M,S),T.y>0?B(C()):T.y<0&&z(C()),S.copy(M),n.update()}function pe(L){_.set(L.clientX,L.clientY),d.subVectors(_,m).multiplyScalar(n.panSpeed),O(d.x,d.y),m.copy(_),n.update()}function ie(L){L.deltaY<0?z(C()):L.deltaY>0&&B(C()),n.update()}function W(L){let $=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?g(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?g(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),$=!0;break}$&&(L.preventDefault(),n.update())}function Z(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const L=.5*(x[0].pageX+x[1].pageX),$=.5*(x[0].pageY+x[1].pageY);f.set(L,$)}}function re(){if(x.length===1)m.set(x[0].pageX,x[0].pageY);else{const L=.5*(x[0].pageX+x[1].pageX),$=.5*(x[0].pageY+x[1].pageY);m.set(L,$)}}function ce(){const L=x[0].pageX-x[1].pageX,$=x[0].pageY-x[1].pageY,k=Math.sqrt(L*L+$*$);S.set(0,k)}function I(){n.enableZoom&&ce(),n.enablePan&&re()}function Ee(){n.enableZoom&&ce(),n.enableRotate&&Z()}function ye(L){if(x.length==1)p.set(L.pageX,L.pageY);else{const k=oe(L),le=.5*(L.pageX+k.x),fe=.5*(L.pageY+k.y);p.set(le,fe)}v.subVectors(p,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;g(2*Math.PI*v.x/$.clientHeight),y(2*Math.PI*v.y/$.clientHeight),f.copy(p)}function se(L){if(x.length===1)_.set(L.pageX,L.pageY);else{const $=oe(L),k=.5*(L.pageX+$.x),le=.5*(L.pageY+$.y);_.set(k,le)}d.subVectors(_,m).multiplyScalar(n.panSpeed),O(d.x,d.y),m.copy(_)}function Me(L){const $=oe(L),k=L.pageX-$.x,le=L.pageY-$.y,fe=Math.sqrt(k*k+le*le);M.set(0,fe),T.set(0,Math.pow(M.y/S.y,n.zoomSpeed)),B(T.y),S.copy(M)}function Be(L){n.enableZoom&&Me(L),n.enablePan&&se(L)}function ge(L){n.enableZoom&&Me(L),n.enableRotate&&ye(L)}function Re(L){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",je),n.domElement.addEventListener("pointerup",Xe)),X(L),L.pointerType==="touch"?dt(L):et(L))}function je(L){n.enabled!==!1&&(L.pointerType==="touch"?R(L):Ze(L))}function Xe(L){ee(L),x.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",Xe)),n.dispatchEvent($l),r=i.NONE}function et(L){let $;switch(L.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case Ti.DOLLY:if(n.enableZoom===!1)return;H(L),r=i.DOLLY;break;case Ti.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;V(L),r=i.PAN}else{if(n.enableRotate===!1)return;K(L),r=i.ROTATE}break;case Ti.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;K(L),r=i.ROTATE}else{if(n.enablePan===!1)return;V(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(da)}function Ze(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Q(L);break;case i.DOLLY:if(n.enableZoom===!1)return;J(L);break;case i.PAN:if(n.enablePan===!1)return;pe(L);break}}function Ne(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent(da),ie(L),n.dispatchEvent($l))}function We(L){n.enabled===!1||n.enablePan===!1||W(L)}function dt(L){switch(ne(L),x.length){case 1:switch(n.touches.ONE){case bi.ROTATE:if(n.enableRotate===!1)return;Z(),r=i.TOUCH_ROTATE;break;case bi.PAN:if(n.enablePan===!1)return;re(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case bi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(),r=i.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(da)}function R(L){switch(ne(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;se(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(L),n.update();break;default:r=i.NONE}}function b(L){n.enabled!==!1&&L.preventDefault()}function X(L){x.push(L)}function ee(L){delete E[L.pointerId];for(let $=0;$<x.length;$++)if(x[$].pointerId==L.pointerId){x.splice($,1);return}}function ne(L){let $=E[L.pointerId];$===void 0&&($=new we,E[L.pointerId]=$),$.set(L.pageX,L.pageY)}function oe(L){const $=L.pointerId===x[0].pointerId?x[1]:x[0];return E[$.pointerId]}n.domElement.addEventListener("contextmenu",b),n.domElement.addEventListener("pointerdown",Re),n.domElement.addEventListener("pointercancel",Xe),n.domElement.addEventListener("wheel",Ne,{passive:!1}),this.update()}}function wn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Wc(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ir={duration:.5,overwrite:!1,delay:0},io,vt,it,mn=1e8,xt=1/mn,Oa=Math.PI*2,rg=Oa/4,sg=0,Xc=Math.sqrt,ag=Math.cos,og=Math.sin,ut=function(e){return typeof e=="string"},Ke=function(e){return typeof e=="function"},Dn=function(e){return typeof e=="number"},ro=function(e){return typeof e>"u"},xn=function(e){return typeof e=="object"},Pt=function(e){return e!==!1},so=function(){return typeof window<"u"},hs=function(e){return Ke(e)||ut(e)},qc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mt=Array.isArray,Fa=/(?:-?\.?\d|\.)+/gi,Yc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,jc=/[+-]=-?[.\d]+/,Kc=/[^,'"\[\]\s]+/gi,lg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qe,qt,Na,ao,Ht={},gs={},Zc,$c=function(e){return(gs=Mi(e,Ht))&&Ut},oo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xs=function(e,t){return!t&&console.warn(e)},Jc=function(e,t){return e&&(Ht[e]=t)&&gs&&(gs[e]=t)||Ht},Cr=function(){return 0},cg={suppressEvents:!0,isStart:!0,kill:!1},ds={suppressEvents:!0,kill:!1},ug={suppressEvents:!0},lo={},Vn=[],Ba={},Qc,Bt={},ma={},Jl=30,ps=[],co="",uo=function(e){var t=e[0],n,i;if(xn(t)||Ke(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ps.length;i--&&!ps[i].targetTest(t););n=ps[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Eu(e[i],n)))||e.splice(i,1);return e},pi=function(e){return e._gsap||uo(jt(e))[0]._gsap},eu=function(e,t,n){return(n=e[t])&&Ke(n)?e[t]():ro(n)&&e.getAttribute&&e.getAttribute(t)||n},Lt=function(e,t){return(e=e.split(",")).forEach(t)||e},Qe=function(e){return Math.round(e*1e5)/1e5||0},ht=function(e){return Math.round(e*1e7)/1e7||0},Zi=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},hg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},vs=function(){var e=Vn.length,t=Vn.slice(0),n,i;for(Ba={},Vn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},tu=function(e,t,n,i){Vn.length&&!vt&&vs(),e.render(t,n,vt&&t<0&&(e._initted||e._startAt)),Vn.length&&!vt&&vs()},nu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Kc).length<2?t:ut(e)?e.trim():e},iu=function(e){return e},$t=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},fg=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Mi=function(e,t){for(var n in t)e[n]=t[n];return e},Ql=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=xn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Ms=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Er=function(e){var t=e.parent||qe,n=e.keyframes?fg(Mt(e.keyframes)):$t;if(Pt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},dg=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ru=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Cs=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Yn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},mi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},pg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},za=function(e,t,n,i){return e._startAt&&(vt?e._startAt.revert(ds):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},mg=function s(e){return!e||e._ts&&s(e.parent)},ec=function(e){return e._repeat?rr(e._tTime,e=e.duration()+e._rDelay)*e:0},rr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ss=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ps=function(e){return e._end=ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||xt)||0))},Ls=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ps(e),n._dirty||mi(n,e)),e},su=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Ss(e.rawTime(),t),(!t._dur||Br(0,t.totalDuration(),n)-t._tTime>xt)&&t.render(n,!0)),mi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},fn=function(e,t,n,i){return t.parent&&Yn(t),t._start=ht((Dn(n)?n:n||e!==qe?Xt(e,n,t):e._time)+t._delay),t._end=ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ru(e,t,"_first","_last",e._sort?"_start":0),ka(t)||(e._recent=t),i||su(e,t),e._ts<0&&Ls(e,e._tTime),e},au=function(e,t){return(Ht.ScrollTrigger||oo("scrollTrigger",t))&&Ht.ScrollTrigger.create(t,e)},ou=function(e,t,n,i,r){if(fo(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Qc!==zt.frame)return Vn.push(e),e._lazy=[r,i],1},_g=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},ka=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},gg=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&_g(e)&&!(!e._initted&&ka(e))||(e._ts<0||e._dp._ts<0)&&!ka(e))?0:1,o=e._rDelay,c=0,l,u,h;if(o&&e._repeat&&(c=Br(0,e._tDur,t),u=rr(c,o),e._yoyo&&u&1&&(a=1-a),u!==rr(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||vt||i||e._zTime===xt||!t&&e._zTime){if(!e._initted&&ou(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?xt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&za(e,t,n,!0),e._onUpdate&&!n&&Kt(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Kt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Yn(e,1),!n&&!vt&&(Kt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},xg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},sr=function(e,t,n,i){var r=e._repeat,a=ht(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:ht(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Ls(e,e._tTime=e._tDur*o),e.parent&&Ps(e),n||mi(e.parent,e),e},tc=function(e){return e instanceof At?mi(e):sr(e,e._dur)},vg={_start:0,endTime:Cr,totalDuration:Cr},Xt=function s(e,t,n){var i=e.labels,r=e._recent||vg,a=e.duration()>=mn?r.endTime(!1):e._dur,o,c,l;return ut(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(Mt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},Tr=function(e,t,n){var i=Dn(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Pt(c.vars.inherit)&&c.parent;a.immediateRender=Pt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new st(t[0],a,t[r+1])},Kn=function(e,t){return e||e===0?t(e):t},Br=function(e,t,n){return n<e?e:n>t?t:n},gt=function(e,t){return!ut(e)||!(t=lg.exec(e))?"":t[1]},Mg=function(e,t,n){return Kn(n,function(i){return Br(e,t,i)})},Ga=[].slice,lu=function(e,t){return e&&xn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&xn(e[0]))&&!e.nodeType&&e!==qt},Sg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ut(i)&&!t||lu(i,1)?(r=n).push.apply(r,jt(i)):n.push(i)})||n},jt=function(e,t,n){return it&&!t&&it.selector?it.selector(e):ut(e)&&!n&&(Na||!ar())?Ga.call((t||ao).querySelectorAll(e),0):Mt(e)?Sg(e,n):lu(e)?Ga.call(e,0):e?[e]:[]},Ha=function(e){return e=jt(e)[0]||xs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return jt(t,n.querySelectorAll?n:n===e?xs("Invalid scope")||ao.createElement("div"):e)}},cu=function(e){return e.sort(function(){return .5-Math.random()})},uu=function(e){if(Ke(e))return e;var t=xn(e)?e:{each:e},n=_i(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=t.axis,u=i,h=i;return ut(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],h=i[1]),function(f,p,v){var m=(v||t).length,_=a[m],d,S,M,T,x,E,w,C,g;if(!_){if(g=t.grid==="auto"?0:(t.grid||[1,mn])[1],!g){for(w=-1e8;w<(w=v[g++].getBoundingClientRect().left)&&g<m;);g--}for(_=a[m]=[],d=c?Math.min(g,m)*u-.5:i%g,S=g===mn?0:c?m*h/g-.5:i/g|0,w=0,C=mn,E=0;E<m;E++)M=E%g-d,T=S-(E/g|0),_[E]=x=l?Math.abs(l==="y"?T:M):Xc(M*M+T*T),x>w&&(w=x),x<C&&(C=x);i==="random"&&cu(_),_.max=w-C,_.min=C,_.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(g>m?m-1:l?l==="y"?m/g:g:Math.max(g,m/g))||0)*(i==="edges"?-1:1),_.b=m<0?r-m:r,_.u=gt(t.amount||t.each)||0,n=n&&m<0?Mu(n):n}return m=(_[f]-_.min)/_.max||0,ht(_.b+(n?n(m):m)*_.v)+_.u}},Va=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ht(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Dn(n)?0:gt(n))}},hu=function(e,t){var n=Mt(e),i,r;return!n&&xn(e)&&(i=n=e.radius||mn,e.values?(e=jt(e.values),(r=!Dn(e[0]))&&(i*=i)):e=Va(e.increment)),Kn(t,n?Ke(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=mn,u=0,h=e.length,f,p;h--;)r?(f=e[h].x-o,p=e[h].y-c,f=f*f+p*p):f=Math.abs(e[h]-o),f<l&&(l=f,u=h);return u=!i||l<=i?e[u]:a,r||u===a||Dn(a)?u:u+gt(a)}:Va(e))},fu=function(e,t,n,i){return Kn(Mt(e)?!t:n===!0?!!(n=0):!i,function(){return Mt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},yg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Eg=function(e,t){return function(n){return e(parseFloat(n))+(t||gt(n))}},Tg=function(e,t,n){return pu(e,t,0,1,n)},du=function(e,t,n){return Kn(n,function(i){return e[~~t(i)]})},bg=function s(e,t,n){var i=t-e;return Mt(e)?du(e,s(0,e.length),t):Kn(n,function(r){return(i+(r-e)%i)%i+e})},wg=function s(e,t,n){var i=t-e,r=i*2;return Mt(e)?du(e,s(0,e.length-1),t):Kn(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Pr=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?Kc:Fa),n+=e.substr(t,i-t)+fu(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},pu=function(e,t,n,i,r){var a=t-e,o=i-n;return Kn(r,function(c){return n+((c-e)/a*o||0)})},Ag=function s(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var a=ut(e),o={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Mt(e)&&!Mt(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(s(e[l-1],e[l]));h--,r=function(v){v*=h;var m=Math.min(f,~~v);return u[m](v-m)},n=t}else i||(e=Mi(Mt(e)?[]:{},e));if(!u){for(c in t)ho.call(o,e,c,"get",t[c]);r=function(v){return _o(v,o)||(a?e.p:e)}}}return Kn(n,r)},nc=function(e,t,n){var i=e.labels,r=mn,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},Kt=function(e,t,n){var i=e.vars,r=i[t],a=it,o=e._ctx,c,l,u;if(r)return c=i[t+"Params"],l=i.callbackScope||e,n&&Vn.length&&vs(),o&&(it=o),u=c?r.apply(l,c):r.call(l),it=a,u},Mr=function(e){return Yn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vt),e.progress()<1&&Kt(e,"onInterrupt"),e},qi,mu=[],_u=function(e){if(!so()){mu.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=Ke(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Cr,render:_o,add:ho,kill:Vg,modifier:Hg,rawVars:0},a={targetTest:0,get:0,getSetter:mo,aliases:{},register:0};if(ar(),e!==i){if(Bt[t])return;$t(i,$t(Ms(e,r),a)),Mi(i.prototype,Mi(r,Ms(e,a))),Bt[i.prop=t]=i,e.targetTest&&(ps.push(i),lo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Jc(t,i),e.register&&e.register(Ut,i,Dt)},Ve=255,Sr={aqua:[0,Ve,Ve],lime:[0,Ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ve],navy:[0,0,128],white:[Ve,Ve,Ve],olive:[128,128,0],yellow:[Ve,Ve,0],orange:[Ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ve,0,0],pink:[Ve,192,203],cyan:[0,Ve,Ve],transparent:[Ve,Ve,Ve,0]},_a=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ve+.5|0},gu=function(e,t,n){var i=e?Dn(e)?[e>>16,e>>8&Ve,e&Ve]:0:Sr.black,r,a,o,c,l,u,h,f,p,v;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Sr[e])i=Sr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ve,i&Ve,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ve,e&Ve]}else if(e.substr(0,3)==="hsl"){if(i=v=e.match(Fa),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=_a(c+1/3,r,a),i[1]=_a(c,r,a),i[2]=_a(c-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Yc),n&&i.length<4&&(i[3]=1),i}else i=e.match(Fa)||Sr.transparent;i=i.map(Number)}return t&&!v&&(r=i[0]/Ve,a=i[1]/Ve,o=i[2]/Ve,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?c=l=0:(p=h-f,l=u>.5?p/(2-h-f):p/(h+f),c=h===r?(a-o)/p+(a<o?6:0):h===a?(o-r)/p+2:(r-a)/p+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},xu=function(e){var t=[],n=[],i=-1;return e.split(Wn).forEach(function(r){var a=r.match(Xi)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},ic=function(e,t,n){var i="",r=(e+i).match(Wn),a=t?"hsla(":"rgba(",o=0,c,l,u,h;if(!r)return e;if(r=r.map(function(f){return(f=gu(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=xu(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Wn,"1").split(Xi),h=l.length-1;o<h;o++)i+=l[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=e.split(Wn),h=l.length-1;o<h;o++)i+=l[o]+r[o];return i+l[h]},Wn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Sr)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Rg=/hsl[a]?\(/,vu=function(e){var t=e.join(" "),n;if(Wn.lastIndex=0,Wn.test(t))return n=Rg.test(t),e[1]=ic(e[1],n),e[0]=ic(e[0],n,xu(e[1])),!0},Lr,zt=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],c,l,u,h,f,p,v=function m(_){var d=s()-i,S=_===!0,M,T,x,E;if(d>e&&(n+=d-t),i+=d,x=i-n,M=x-a,(M>0||S)&&(E=++h.frame,f=x-h.time*1e3,h.time=x=x/1e3,a+=M+(M>=r?4:r-M),T=1),S||(c=l(m)),T)for(p=0;p<o.length;p++)o[p](x,f,E,_)};return h={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){Zc&&(!Na&&so()&&(qt=Na=window,ao=qt.document||{},Ht.gsap=Ut,(qt.gsapVersions||(qt.gsapVersions=[])).push(Ut.version),$c(gs||qt.GreenSockGlobals||!qt.gsap&&qt||{}),u=qt.requestAnimationFrame,mu.forEach(_u)),c&&h.sleep(),l=u||function(_){return setTimeout(_,a-h.time*1e3+1|0)},Lr=1,v(2))},sleep:function(){(u?qt.cancelAnimationFrame:clearTimeout)(c),Lr=0,l=Cr},lagSmoothing:function(_,d){e=_||1/0,t=Math.min(d||33,e)},fps:function(_){r=1e3/(_||240),a=h.time*1e3+r},add:function(_,d,S){var M=d?function(T,x,E,w){_(T,x,E,w),h.remove(M)}:_;return h.remove(_),o[S?"unshift":"push"](M),ar(),M},remove:function(_,d){~(d=o.indexOf(_))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},h}(),ar=function(){return!Lr&&zt.wake()},Oe={},Cg=/^[\d.\-M][\d.\-,\s]/,Pg=/["']/g,Lg=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,c,l;r<a;r++)c=n[r],o=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[i]=isNaN(l)?l.replace(Pg,"").trim():+l,i=c.substr(o+1).trim();return t},Dg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Ug=function(e){var t=(e+"").split("("),n=Oe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Lg(t[1])]:Dg(e).split(",").map(nu)):Oe._CE&&Cg.test(e)?Oe._CE("",e):n},Mu=function(e){return function(t){return 1-e(1-t)}},Su=function s(e,t){for(var n=e._first,i;n;)n instanceof At?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},_i=function(e,t){return e&&(Ke(e)?e:Oe[e]||Ug(e))||t},yi=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Lt(e,function(o){Oe[o]=Ht[o]=r,Oe[a=o.toLowerCase()]=n;for(var c in r)Oe[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Oe[o+"."+c]=r[c]}),r},yu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ga=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Oa*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*og((u-a)*r)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:yu(o);return r=Oa/r,c.config=function(l,u){return s(e,l,u)},c},xa=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:yu(n);return i.config=function(r){return s(e,r)},i};Lt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;yi(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Oe.Linear.easeNone=Oe.none=Oe.Linear.easeIn;yi("Elastic",ga("in"),ga("out"),ga());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};yi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);yi("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});yi("Circ",function(s){return-(Xc(1-s*s)-1)});yi("Sine",function(s){return s===1?1:-ag(s*rg)+1});yi("Back",xa("in"),xa("out"),xa());Oe.SteppedEase=Oe.steps=Ht.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-xt;return function(o){return((i*Br(0,a,o)|0)+r)*n}}};ir.ease=Oe["quad.out"];Lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return co+=s+","+s+"Params,"});var Eu=function(e,t){this.id=sg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:eu,this.set=t?t.getSetter:mo},or=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,sr(this,+t.duration,1,1),this.data=t.data,it&&(this._ctx=it,it.data.push(this)),Lr||zt.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,sr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ar(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ls(this,n),!r._dp||r.parent||su(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===xt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),tu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ec(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ec(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?rr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ss(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Br(-Math.abs(this._delay),this._tDur,i),!0),Ps(this),pg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ar(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xt&&(this._tTime-=xt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&fn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Pt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ss(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ug);var i=vt;return vt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),vt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,tc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,tc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Xt(this,n),Pt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-xt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=Ke(n)?n:iu,o=function(){var l=i.then;i.then=null,Ke(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),r(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Mr(this)},s}();$t(or.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var At=function(s){Wc(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Pt(n.sortChildren),qe&&fn(n.parent||qe,wn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&au(wn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Tr(0,arguments,this),this},t.from=function(i,r,a){return Tr(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Tr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Er(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new st(i,r,Xt(this,a),1),this},t.call=function(i,r,a){return fn(this,st.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,c,l,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new st(i,a,Xt(this,c)),this},t.staggerFrom=function(i,r,a,o,c,l,u){return a.runBackwards=1,Er(a).immediateRender=Pt(a.immediateRender),this.staggerTo(i,r,a,o,c,l,u)},t.staggerFromTo=function(i,r,a,o,c,l,u,h){return o.startAt=a,Er(o).immediateRender=Pt(o.immediateRender),this.staggerTo(i,r,o,c,l,u,h)},t.render=function(i,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:ht(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,p,v,m,_,d,S,M,T,x,E,w;if(this!==qe&&u>c&&i>=0&&(u=c),u!==this._tTime||a||h){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),f=u,T=this._start,M=this._ts,d=!M,h&&(l||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,_=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,r,a);if(f=ht(u%_),u===c?(m=this._repeat,f=l):(m=~~(u/_),m&&m===u/_&&(f=l,m--),f>l&&(f=l)),x=rr(this._tTime,_),!o&&this._tTime&&x!==m&&this._tTime-x*_-this._dur<=0&&(x=m),E&&m&1&&(f=l-f,w=1),m!==x&&!this._lock){var C=E&&x&1,g=C===(E&&m&1);if(m<x&&(C=!C),o=C?0:l,this._lock=1,this.render(o||(w?0:ht(m*_)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&Kt(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,g&&(this._lock=2,o=C?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Su(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=xg(this,ht(o),ht(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!m&&(Kt(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(v=p._next,(p._act||f>=p._start)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,r,a),f!==this._time||!this._ts&&!d){S=0,v&&(u+=this._zTime=-1e-8);break}}p=v}else{p=this._last;for(var y=i<0?i:f;p;){if(v=p._prev,(p._act||y<=p._end)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(y-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(y-p._start)*p._ts,r,a||vt&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){S=0,v&&(u+=this._zTime=y?-1e-8:xt);break}}p=v}}if(S&&!r&&(this.pause(),S.render(f>=o?0:-1e-8)._zTime=f>=o?1:-1,this._ts))return this._start=T,Ps(this),this.render(i,r,a);this._onUpdate&&!r&&Kt(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(T===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Yn(this,1),!r&&!(i<0&&!o)&&(u||o||!c)&&(Kt(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Dn(r)||(r=Xt(this,r,i)),!(i instanceof or)){if(Mt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(ut(i))return this.addLabel(i,r);if(Ke(i))i=st.delayedCall(0,i);else return this}return this!==i?fn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof st?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return ut(i)?this.removeLabel(i):Ke(i)?this.killTweensOf(i):(Cs(this,i),i===this._recent&&(this._recent=this._last),mi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ht(zt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Xt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=st.delayedCall(0,r||Cr,a);return o.data="isPause",this._hasPause=1,fn(this,o,Xt(this,i))},t.removePause=function(i){var r=this._first;for(i=Xt(this,i);r;)r._start===i&&r.data==="isPause"&&Yn(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)zn!==o[c]&&o[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=jt(i),c=this._first,l=Dn(r),u;c;)c instanceof st?hg(c._targets,o)&&(l?(!zn||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(u=c.getTweensOf(o,r)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=Xt(a,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,p,v=st.to(a,$t({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||xt,onStart:function(){if(a.pause(),!p){var _=r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());v._dur!==_&&sr(v,_,0,1).render(v._time,!0,!0),p=1}u&&u.apply(v,h||[])}},r));return f?v.render(0):v},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,$t({startAt:{time:Xt(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),nc(this,Xt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),nc(this,Xt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+xt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return mi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),mi(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,c=mn,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,fn(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;sr(a,a===qe&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(qe._ts&&(tu(qe,Ss(i,qe)),Qc=zt.frame),zt.frame>=Jl){Jl+=Gt.autoSleep||120;var r=qe._first;if((!r||!r._ts)&&Gt.autoSleep&&zt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||zt.sleep()}}},e}(or);$t(At.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ig=function(e,t,n,i,r,a,o){var c=new Dt(this._pt,e,t,0,1,Cu,null,r),l=0,u=0,h,f,p,v,m,_,d,S;for(c.b=n,c.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Pr(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(pa)||[];h=pa.exec(i);)v=h[0],m=i.substring(l,h.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),v!==f[u++]&&(_=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:m||u===1?m:",",s:_,c:v.charAt(1)==="="?Zi(_,v)-_:parseFloat(v)-_,m:p&&p<4?Math.round:0},l=pa.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(jc.test(i)||d)&&(c.e=0),this._pt=c,c},ho=function(e,t,n,i,r,a,o,c,l,u){Ke(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:Ke(h)?l?e[t.indexOf("set")||!Ke(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,p=Ke(h)?l?zg:Au:po,v;if(ut(i)&&(~i.indexOf("random(")&&(i=Pr(i)),i.charAt(1)==="="&&(v=Zi(f,i)+(gt(f)||0),(v||v===0)&&(i=v))),!u||f!==i||Wa)return!isNaN(f*i)&&i!==""?(v=new Dt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Gg:Ru,0,p),l&&(v.fp=l),o&&v.modifier(o,this,e),this._pt=v):(!h&&!(t in e)&&oo(t,i),Ig.call(this,e,t,f,i,p,c||Gt.stringFilter,l))},Og=function(e,t,n,i,r){if(Ke(e)&&(e=br(e,r,t,n,i)),!xn(e)||e.style&&e.nodeType||Mt(e)||qc(e))return ut(e)?br(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=br(e[o],r,t,n,i);return a},Tu=function(e,t,n,i,r,a){var o,c,l,u;if(Bt[e]&&(o=new Bt[e]).init(r,o.rawVars?t[e]:Og(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new Dt(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==qi))for(l=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)l[o._props[u]]=c;return o},zn,Wa,fo=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,v=i.keyframes,m=i.autoRevert,_=e._dur,d=e._startAt,S=e._targets,M=e.parent,T=M&&M.data==="nested"?M.vars.targets:S,x=e._overwrite==="auto"&&!io,E=e.timeline,w,C,g,y,U,G,O,B,z,K,H,V,Q;if(E&&(!v||!r)&&(r="none"),e._ease=_i(r,ir.ease),e._yEase=p?Mu(_i(p===!0?r:p,ir.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!i.runBackwards,!E||v&&!i.stagger){if(B=S[0]?pi(S[0]).harness:0,V=B&&i[B.prop],w=Ms(i,lo),d&&(d._zTime<0&&d.progress(1),t<0&&f&&o&&!m?d.render(-1,!0):d.revert(f&&_?ds:cg),d._lazy=0),a){if(Yn(e._startAt=st.set(S,$t({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!d&&Pt(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vt||!o&&!m)&&e._startAt.revert(ds),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&_&&!d){if(t&&(o=!1),g=$t({overwrite:!1,data:"isFromStart",lazy:o&&!d&&Pt(c),immediateRender:o,stagger:0,parent:M},w),V&&(g[B.prop]=V),Yn(e._startAt=st.set(S,g)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vt?e._startAt.revert(ds):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,xt,xt);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&Pt(c)||c&&!_,C=0;C<S.length;C++){if(U=S[C],O=U._gsap||uo(S)[C]._gsap,e._ptLookup[C]=K={},Ba[O.id]&&Vn.length&&vs(),H=T===S?C:T.indexOf(U),B&&(z=new B).init(U,V||w,e,H,T)!==!1&&(e._pt=y=new Dt(e._pt,U,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(J){K[J]=y}),z.priority&&(G=1)),!B||V)for(g in w)Bt[g]&&(z=Tu(g,w,e,H,U,T))?z.priority&&(G=1):K[g]=y=ho.call(e,U,g,"get",w[g],H,T,0,i.stringFilter);e._op&&e._op[C]&&e.kill(U,e._op[C]),x&&e._pt&&(zn=e,qe.killTweensOf(U,K,e.globalTime(t)),Q=!e.parent,zn=0),e._pt&&c&&(Ba[O.id]=1)}G&&Pu(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!Q,v&&t<=0&&E.render(mn,!0,!0)},Fg=function(e,t,n,i,r,a,o){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(l=h[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return Wa=1,e.vars[t]="+=0",fo(e,o),Wa=0,1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(i||i===0)&&!r?i:l.s+(i||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=Qe(n)+gt(u.e)),u.b&&(u.b=l.s+gt(u.b))},Ng=function(e,t){var n=e[0]?pi(e[0]).harness:0,i=n&&n.aliases,r,a,o,c;if(!i)return t;r=Mi({},t);for(a in i)if(a in r)for(c=i[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},Bg=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Mt(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},br=function(e,t,n,i,r){return Ke(e)?e.call(t,n,i,r):ut(e)&&~e.indexOf("random(")?Pr(e):e},bu=co+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",wu={};Lt(bu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return wu[s]=1});var st=function(s){Wc(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Er(i))||this;var c=o.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,p=c.overwrite,v=c.keyframes,m=c.defaults,_=c.scrollTrigger,d=c.yoyoEase,S=i.parent||qe,M=(Mt(n)||qc(n)?Dn(n[0]):"length"in i)?[n]:jt(n),T,x,E,w,C,g,y,U;if(o._targets=M.length?uo(M):xs("GSAP target "+n+" not found. https://greensock.com",!Gt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,v||f||hs(l)||hs(u)){if(i=o.vars,T=o.timeline=new At({data:"nested",defaults:m||{},targets:S&&S.data==="nested"?S.vars.targets:M}),T.kill(),T.parent=T._dp=wn(o),T._start=0,f||hs(l)||hs(u)){if(w=M.length,y=f&&uu(f),xn(f))for(C in f)~bu.indexOf(C)&&(U||(U={}),U[C]=f[C]);for(x=0;x<w;x++)E=Ms(i,wu),E.stagger=0,d&&(E.yoyoEase=d),U&&Mi(E,U),g=M[x],E.duration=+br(l,wn(o),x,g,M),E.delay=(+br(u,wn(o),x,g,M)||0)-o._delay,!f&&w===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),T.to(g,E,y?y(x,g,M):0),T._ease=Oe.none;T.duration()?l=u=0:o.timeline=0}else if(v){Er($t(T.vars.defaults,{ease:"none"})),T._ease=_i(v.ease||i.ease||"none");var G=0,O,B,z;if(Mt(v))v.forEach(function(K){return T.to(M,K,">")}),T.duration();else{E={};for(C in v)C==="ease"||C==="easeEach"||Bg(C,v[C],E,v.easeEach);for(C in E)for(O=E[C].sort(function(K,H){return K.t-H.t}),G=0,x=0;x<O.length;x++)B=O[x],z={ease:B.e,duration:(B.t-(x?O[x-1].t:0))/100*l},z[C]=B.v,T.to(M,z,G),G+=z.duration;T.duration()<l&&T.to({},{duration:l-T.duration()})}}l||o.duration(l=T.duration())}else o.timeline=0;return p===!0&&!io&&(zn=wn(o),qe.killTweensOf(M),zn=0),fn(S,wn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!l&&!v&&o._start===ht(S._time)&&Pt(h)&&mg(wn(o))&&S.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-u)||0)),_&&au(wn(o),_),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-xt&&!u?c:i<xt?0:i,f,p,v,m,_,d,S,M,T;if(!l)gg(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,M=this.timeline,this._repeat){if(m=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,r,a);if(f=ht(h%m),h===c?(v=this._repeat,f=l):(v=~~(h/m),v&&v===h/m&&(f=l,v--),f>l&&(f=l)),d=this._yoyo&&v&1,d&&(T=this._yEase,f=l-f),_=rr(this._tTime,m),f===o&&!a&&this._initted)return this._tTime=h,this;v!==_&&(M&&this._yEase&&Su(M,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=a=1,this.render(ht(m*v),!0).invalidate()._lock=0))}if(!this._initted){if(ou(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(l!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(T||this._ease)(f/l),this._from&&(this.ratio=S=1-S),f&&!o&&!r&&!v&&(Kt(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(S,p.d),p=p._next;M&&M.render(i<0?i:!f&&d?-1e-8:M._dur*M._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&za(this,i,r,a),Kt(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!r&&this.parent&&Kt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&za(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Yn(this,1),!r&&!(u&&!o)&&(h||o||d)&&(Kt(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){Lr||zt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||fo(this,c),l=this._ease(c/this._dur),Fg(this,i,r,a,o,l,c)?this.resetTo(i,r,a,o):(Ls(this,0),this.parent||ru(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Mr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,zn&&zn.vars.overwrite!==!0)._first||Mr(this),this.parent&&a!==this.timeline.totalDuration()&&sr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?jt(i):o,l=this._ptLookup,u=this._pt,h,f,p,v,m,_,d;if((!r||r==="all")&&dg(o,c))return r==="all"&&(this._pt=0),Mr(this);for(h=this._op=this._op||[],r!=="all"&&(ut(r)&&(m={},Lt(r,function(S){return m[S]=1}),r=m),r=Ng(o,r)),d=o.length;d--;)if(~c.indexOf(o[d])){f=l[d],r==="all"?(h[d]=r,v=f,p={}):(p=h[d]=h[d]||{},v=r);for(m in v)_=f&&f[m],_&&((!("kill"in _.d)||_.d.kill(m)===!0)&&Cs(this,_,"_pt"),delete f[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&u&&Mr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Tr(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Tr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return qe.killTweensOf(i,r,a)},e}(or);$t(st.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Lt("staggerTo,staggerFrom,staggerFromTo",function(s){st[s]=function(){var e=new At,t=Ga.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var po=function(e,t,n){return e[t]=n},Au=function(e,t,n){return e[t](n)},zg=function(e,t,n,i){return e[t](i.fp,n)},kg=function(e,t,n){return e.setAttribute(t,n)},mo=function(e,t){return Ke(e[t])?Au:ro(e[t])&&e.setAttribute?kg:po},Ru=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Gg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Cu=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},_o=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Hg=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},Vg=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Cs(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Wg=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Pu=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Dt=function(){function s(t,n,i,r,a,o,c,l,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Ru,this.d=c||this,this.set=l||po,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Wg,this.m=n,this.mt=r,this.tween=i},s}();Lt(co+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return lo[s]=1});Ht.TweenMax=Ht.TweenLite=st;Ht.TimelineLite=Ht.TimelineMax=At;qe=new At({sortChildren:!1,defaults:ir,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gt.stringFilter=vu;var lr=[],ms={},Xg=[],rc=0,va=function(e){return(ms[e]||Xg).map(function(t){return t()})},Xa=function(){var e=Date.now(),t=[];e-rc>2&&(va("matchMediaInit"),lr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,c,l;for(o in i)a=qt.matchMedia(i[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),va("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),rc=e,va("matchMedia"))},Lu=function(){function s(t,n){this.selector=n&&Ha(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Ke(n)&&(r=i,i=n,n=Ke);var a=this,o=function(){var l=it,u=a.selector,h;return l&&l!==a&&l.data.push(a),r&&(a.selector=Ha(r)),it=a,h=i.apply(a,arguments),Ke(h)&&a._r.push(h),it=l,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Ke?o(a):n?a[n]=o:o},e.ignore=function(n){var i=it;it=null,n(this),it=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof st&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return a.splice(a.indexOf(l),1)}))}),a.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof or)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,r)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i){var o=lr.indexOf(this);~o&&lr.splice(o,1)}},e.revert=function(n){this.kill(n||{})},s}(),qg=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){xn(n)||(n={matches:n});var a=new Lu(0,r||this.scope),o=a.conditions={},c,l,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=qt.matchMedia(n[l]),c&&(lr.indexOf(a)<0&&lr.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(Xa):c.addEventListener("change",Xa)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ys={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return _u(i)})},timeline:function(e){return new At(e)},getTweensOf:function(e,t){return qe.getTweensOf(e,t)},getProperty:function(e,t,n,i){ut(e)&&(e=jt(e)[0]);var r=pi(e||{}).get,a=n?iu:nu;return n==="native"&&(n=""),e&&(t?a((Bt[t]&&Bt[t].get||r)(e,t,n,i)):function(o,c,l){return a((Bt[o]&&Bt[o].get||r)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=jt(e),e.length>1){var i=e.map(function(u){return Ut.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Bt[t],o=pi(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var h=new a;qi._pt=0,h.init(e,n?u+n:u,qi,0,[e]),h.render(1,h),qi._pt&&_o(1,qi)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Ut.to(e,Mi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(c,l,u){return r.resetTo(t,c,l,u)};return a.tween=r,a},isTweening:function(e){return qe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_i(e.ease,ir.ease)),Ql(ir,e||{})},config:function(e){return Ql(Gt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Bt[o]&&!Ht[o]&&xs(t+" effect requires "+o+" plugin.")}),ma[t]=function(o,c,l){return n(jt(o),$t(c||{},r),l)},a&&(At.prototype[t]=function(o,c,l){return this.add(ma[t](o,xn(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Oe[e]=_i(t)},parseEase:function(e,t){return arguments.length?_i(e,t):Oe},getById:function(e){return qe.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new At(e),i,r;for(n.smoothChildTiming=Pt(e.smoothChildTiming),qe.remove(n),n._dp=0,n._time=n._tTime=qe._time,i=qe._first;i;)r=i._next,(t||!(!i._dur&&i instanceof st&&i.vars.onComplete===i._targets[0]))&&fn(n,i,i._start-i._delay),i=r;return fn(qe,n,0),n},context:function(e,t){return e?new Lu(e,t):it},matchMedia:function(e){return new qg(e)},matchMediaRefresh:function(){return lr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Xa()},addEventListener:function(e,t){var n=ms[e]||(ms[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ms[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:bg,wrapYoyo:wg,distribute:uu,random:fu,snap:hu,normalize:Tg,getUnit:gt,clamp:Mg,splitColor:gu,toArray:jt,selector:Ha,mapRange:pu,pipe:yg,unitize:Eg,interpolate:Ag,shuffle:cu},install:$c,effects:ma,ticker:zt,updateRoot:At.updateRoot,plugins:Bt,globalTimeline:qe,core:{PropTween:Dt,globals:Jc,Tween:st,Timeline:At,Animation:or,getCache:pi,_removeLinkedListItem:Cs,reverting:function(){return vt},context:function(e){return e&&it&&(it.data.push(e),e._ctx=it),it},suppressOverwrites:function(e){return io=e}}};Lt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ys[s]=st[s]});zt.add(At.updateRoot);qi=ys.to({},{duration:0});var Yg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},jg=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Yg(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Ma=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var c,l;if(ut(r)&&(c={},Lt(r,function(u){return c[u]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}jg(o,r)}}}},Ut=ys.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ma("roundProps",Va),Ma("modifiers"),Ma("snap",hu))||ys;st.version=At.version=Ut.version="3.11.5";Zc=1;so()&&ar();Oe.Power0;Oe.Power1;Oe.Power2;Oe.Power3;Oe.Power4;Oe.Linear;Oe.Quad;Oe.Cubic;Oe.Quart;Oe.Quint;Oe.Strong;Oe.Elastic;Oe.Back;Oe.SteppedEase;Oe.Bounce;Oe.Sine;Oe.Expo;Oe.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sc,kn,$i,go,ui,ac,xo,Kg=function(){return typeof window<"u"},Un={},ai=180/Math.PI,Ji=Math.PI/180,Hi=Math.atan2,oc=1e8,vo=/([A-Z])/g,Zg=/(left|right|width|margin|padding|x)/i,$g=/[\s,\(]\S/,dn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qa=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Jg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Qg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},e0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Du=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Uu=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},t0=function(e,t,n){return e.style[t]=n},n0=function(e,t,n){return e.style.setProperty(t,n)},i0=function(e,t,n){return e._gsap[t]=n},r0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},s0=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},a0=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Ye="transform",ln=Ye+"Origin",o0=function s(e,t){var n=this,i=this.target,r=i.style;if(e in Un){if(this.tfm=this.tfm||{},e!=="transform")e=dn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Rn(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Rn(i,e);else return dn.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Ye)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ln,t,"")),e=Ye}(r||t)&&this.props.push(e,t,r[e])},Iu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},l0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(vo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=xo(),(!r||!r.isStart)&&!n[Ye]&&(Iu(n),i.uncache=1)}},Ou=function(e,t){var n={target:e,props:[],revert:l0,save:o0};return e._gsap||Ut.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Fu,Ya=function(e,t){var n=kn.createElementNS?kn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):kn.createElement(e);return n.style?n:kn.createElement(e)},_n=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(vo,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,cr(t)||t,1)||""},lc="O,Moz,ms,Ms,Webkit".split(","),cr=function(e,t,n){var i=t||ui,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(lc[a]+e in r););return a<0?null:(a===3?"ms":a>=0?lc[a]:"")+e},ja=function(){Kg()&&window.document&&(sc=window,kn=sc.document,$i=kn.documentElement,ui=Ya("div")||{style:{}},Ya("div"),Ye=cr(Ye),ln=Ye+"Origin",ui.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Fu=!!cr("perspective"),xo=Ut.core.reverting,go=1)},Sa=function s(e){var t=Ya("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if($i.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),$i.removeChild(t),this.style.cssText=r,a},cc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Nu=function(e){var t;try{t=e.getBBox()}catch{t=Sa.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Sa||(t=Sa.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+cc(e,["x","cx","x1"])||0,y:+cc(e,["y","cy","y1"])||0,width:0,height:0}:t},Bu=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Nu(e))},Dr=function(e,t){if(t){var n=e.style;t in Un&&t!==ln&&(t=Ye),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(vo,"-$1").toLowerCase())):n.removeAttribute(t)}},Gn=function(e,t,n,i,r,a){var o=new Dt(e._pt,t,n,0,1,a?Uu:Du);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},uc={deg:1,rad:1,turn:1},c0={grid:1,flex:1},jn=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=ui.style,c=Zg.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",p=i==="%",v,m,_,d;return i===a||!r||uc[i]||uc[a]?r:(a!=="px"&&!f&&(r=s(e,t,n,"px")),d=e.getCTM&&Bu(e),(p||a==="%")&&(Un[t]||~t.indexOf("adius"))?(v=d?e.getBBox()[c?"width":"height"]:e[u],Qe(p?r/v*h:r/100*v)):(o[c?"width":"height"]=h+(f?a:i),m=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,d&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===kn||!m.appendChild)&&(m=kn.body),_=m._gsap,_&&p&&_.width&&c&&_.time===zt.time&&!_.uncache?Qe(r/_.width*h):((p||a==="%")&&!c0[_n(m,"display")]&&(o.position=_n(e,"position")),m===e&&(o.position="static"),m.appendChild(ui),v=ui[u],m.removeChild(ui),o.position="absolute",c&&p&&(_=pi(m),_.time=zt.time,_.width=m[u]),Qe(f?v*r/h:v&&r?h/v*r:0))))},Rn=function(e,t,n,i){var r;return go||ja(),t in dn&&t!=="transform"&&(t=dn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Un[t]&&t!=="transform"?(r=Ir(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ts(_n(e,ln))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Es[t]&&Es[t](e,t,n)||_n(e,t)||eu(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?jn(e,t,r,n)+n:r},u0=function(e,t,n,i){if(!n||n==="none"){var r=cr(t,e,1),a=r&&_n(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=_n(e,"borderTopColor"))}var o=new Dt(this._pt,e.style,t,0,1,Cu),c=0,l=0,u,h,f,p,v,m,_,d,S,M,T,x;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=_n(e,t)||i,e.style[t]=n),u=[n,i],vu(u),n=u[0],i=u[1],f=n.match(Xi)||[],x=i.match(Xi)||[],x.length){for(;h=Xi.exec(i);)_=h[0],S=i.substring(c,h.index),v?v=(v+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(v=1),_!==(m=f[l++]||"")&&(p=parseFloat(m)||0,T=m.substr((p+"").length),_.charAt(1)==="="&&(_=Zi(p,_)+T),d=parseFloat(_),M=_.substr((d+"").length),c=Xi.lastIndex-M.length,M||(M=M||Gt.units[t]||T,c===i.length&&(i+=M,o.e+=M)),T!==M&&(p=jn(e,t,m,M)||0),o._pt={_next:o._pt,p:S||l===1?S:",",s:p,c:d-p,m:v&&v<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?Uu:Du;return jc.test(i)&&(o.e=0),this._pt=o,o},hc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},h0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=hc[n]||n,t[1]=hc[i]||i,t.join(" ")},f0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],Un[o]&&(c=1,o=o==="transformOrigin"?ln:Ye),Dr(n,o);c&&(Dr(n,Ye),a&&(a.svg&&n.removeAttribute("transform"),Ir(n,1),a.uncache=1,Iu(i)))}},Es={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Dt(e._pt,t,n,0,0,f0);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Ur=[1,0,0,1,0,0],zu={},ku=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},fc=function(e){var t=_n(e,Ye);return ku(t)?Ur:t.substr(7).match(Yc).map(Qe)},Mo=function(e,t){var n=e._gsap||pi(e),i=e.style,r=fc(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Ur:r):(r===Ur&&!e.offsetParent&&e!==$i&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(l=1,o=e.nextElementSibling,$i.appendChild(e)),r=fc(e),c?i.display=c:Dr(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):$i.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ka=function(e,t,n,i,r,a){var o=e._gsap,c=r||Mo(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=c[0],v=c[1],m=c[2],_=c[3],d=c[4],S=c[5],M=t.split(" "),T=parseFloat(M[0])||0,x=parseFloat(M[1])||0,E,w,C,g;n?c!==Ur&&(w=p*_-v*m)&&(C=T*(_/w)+x*(-m/w)+(m*S-_*d)/w,g=T*(-v/w)+x*(p/w)-(p*S-v*d)/w,T=C,x=g):(E=Nu(e),T=E.x+(~M[0].indexOf("%")?T/100*E.width:T),x=E.y+(~(M[1]||M[0]).indexOf("%")?x/100*E.height:x)),i||i!==!1&&o.smooth?(d=T-l,S=x-u,o.xOffset=h+(d*p+S*m)-d,o.yOffset=f+(d*v+S*_)-S):o.xOffset=o.yOffset=0,o.xOrigin=T,o.yOrigin=x,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ln]="0px 0px",a&&(Gn(a,o,"xOrigin",l,T),Gn(a,o,"yOrigin",u,x),Gn(a,o,"xOffset",h,o.xOffset),Gn(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",T+" "+x)},Ir=function(e,t){var n=e._gsap||new Eu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=_n(e,ln)||"0",u,h,f,p,v,m,_,d,S,M,T,x,E,w,C,g,y,U,G,O,B,z,K,H,V,Q,J,pe,ie,W,Z,re;return u=h=f=m=_=d=S=M=T=0,p=v=1,n.svg=!!(e.getCTM&&Bu(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Ye]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ye]!=="none"?c[Ye]:"")),i.scale=i.rotate=i.translate="none"),w=Mo(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),l=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Ka(e,H||l,!!H||n.originIsAbsolute,n.smooth!==!1,w)),x=n.xOrigin||0,E=n.yOrigin||0,w!==Ur&&(U=w[0],G=w[1],O=w[2],B=w[3],u=z=w[4],h=K=w[5],w.length===6?(p=Math.sqrt(U*U+G*G),v=Math.sqrt(B*B+O*O),m=U||G?Hi(G,U)*ai:0,S=O||B?Hi(O,B)*ai+m:0,S&&(v*=Math.abs(Math.cos(S*Ji))),n.svg&&(u-=x-(x*U+E*O),h-=E-(x*G+E*B))):(re=w[6],W=w[7],J=w[8],pe=w[9],ie=w[10],Z=w[11],u=w[12],h=w[13],f=w[14],C=Hi(re,ie),_=C*ai,C&&(g=Math.cos(-C),y=Math.sin(-C),H=z*g+J*y,V=K*g+pe*y,Q=re*g+ie*y,J=z*-y+J*g,pe=K*-y+pe*g,ie=re*-y+ie*g,Z=W*-y+Z*g,z=H,K=V,re=Q),C=Hi(-O,ie),d=C*ai,C&&(g=Math.cos(-C),y=Math.sin(-C),H=U*g-J*y,V=G*g-pe*y,Q=O*g-ie*y,Z=B*y+Z*g,U=H,G=V,O=Q),C=Hi(G,U),m=C*ai,C&&(g=Math.cos(C),y=Math.sin(C),H=U*g+G*y,V=z*g+K*y,G=G*g-U*y,K=K*g-z*y,U=H,z=V),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,d=180-d),p=Qe(Math.sqrt(U*U+G*G+O*O)),v=Qe(Math.sqrt(K*K+re*re)),C=Hi(z,K),S=Math.abs(C)>2e-4?C*ai:0,T=Z?1/(Z<0?-Z:Z):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ku(_n(e,Ye)),H&&e.setAttribute("transform",H))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(p*=-1,S+=m<=0?180:-180,m+=m<=0?180:-180):(v*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Qe(p),n.scaleY=Qe(v),n.rotation=Qe(m)+o,n.rotationX=Qe(_)+o,n.rotationY=Qe(d)+o,n.skewX=S+o,n.skewY=M+o,n.transformPerspective=T+a,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[ln]=Ts(l)),n.xOffset=n.yOffset=0,n.force3D=Gt.force3D,n.renderTransform=n.svg?p0:Fu?Gu:d0,n.uncache=0,n},Ts=function(e){return(e=e.split(" "))[0]+" "+e[1]},ya=function(e,t,n){var i=gt(t);return Qe(parseFloat(t)+parseFloat(jn(e,"x",n+"px",i)))+i},d0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Gu(e,t)},ni="0deg",xr="0px",ii=") ",Gu=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,v=n.scaleX,m=n.scaleY,_=n.transformPerspective,d=n.force3D,S=n.target,M=n.zOrigin,T="",x=d==="auto"&&e&&e!==1||d===!0;if(M&&(h!==ni||u!==ni)){var E=parseFloat(u)*Ji,w=Math.sin(E),C=Math.cos(E),g;E=parseFloat(h)*Ji,g=Math.cos(E),a=ya(S,a,w*g*-M),o=ya(S,o,-Math.sin(E)*-M),c=ya(S,c,C*g*-M+M)}_!==xr&&(T+="perspective("+_+ii),(i||r)&&(T+="translate("+i+"%, "+r+"%) "),(x||a!==xr||o!==xr||c!==xr)&&(T+=c!==xr||x?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+ii),l!==ni&&(T+="rotate("+l+ii),u!==ni&&(T+="rotateY("+u+ii),h!==ni&&(T+="rotateX("+h+ii),(f!==ni||p!==ni)&&(T+="skew("+f+", "+p+ii),(v!==1||m!==1)&&(T+="scale("+v+", "+m+ii),S.style[Ye]=T||"translate(0, 0)"},p0=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,v=n.xOrigin,m=n.yOrigin,_=n.xOffset,d=n.yOffset,S=n.forceCSS,M=parseFloat(a),T=parseFloat(o),x,E,w,C,g;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Ji,l*=Ji,x=Math.cos(c)*h,E=Math.sin(c)*h,w=Math.sin(c-l)*-f,C=Math.cos(c-l)*f,l&&(u*=Ji,g=Math.tan(l-u),g=Math.sqrt(1+g*g),w*=g,C*=g,u&&(g=Math.tan(u),g=Math.sqrt(1+g*g),x*=g,E*=g)),x=Qe(x),E=Qe(E),w=Qe(w),C=Qe(C)):(x=h,C=f,E=w=0),(M&&!~(a+"").indexOf("px")||T&&!~(o+"").indexOf("px"))&&(M=jn(p,"x",a,"px"),T=jn(p,"y",o,"px")),(v||m||_||d)&&(M=Qe(M+v-(v*x+m*w)+_),T=Qe(T+m-(v*E+m*C)+d)),(i||r)&&(g=p.getBBox(),M=Qe(M+i/100*g.width),T=Qe(T+r/100*g.height)),g="matrix("+x+","+E+","+w+","+C+","+M+","+T+")",p.setAttribute("transform",g),S&&(p.style[Ye]=g)},m0=function(e,t,n,i,r){var a=360,o=ut(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?ai:1),l=c-i,u=i+l+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-360)),h==="cw"&&l<0?l=(l+a*oc)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*oc)%a-~~(l/a)*a)),e._pt=f=new Dt(e._pt,t,n,i,l,Jg),f.e=u,f.u="deg",e._props.push(n),f},dc=function(e,t){for(var n in t)e[n]=t[n];return e},_0=function(e,t,n){var i=dc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,h,f,p,v;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ye]=t,o=Ir(n,1),Dr(n,Ye),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ye],a[Ye]=t,o=Ir(n,1),a[Ye]=l);for(c in Un)l=i[c],u=o[c],l!==u&&r.indexOf(c)<0&&(p=gt(l),v=gt(u),h=p!==v?jn(n,c,l,v):parseFloat(l),f=parseFloat(u),e._pt=new Dt(e._pt,o,c,h,f-h,qa),e._pt.u=v||0,e._props.push(c));dc(o,i)};Lt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});Es[e>1?"border"+s:s]=function(o,c,l,u,h){var f,p;if(arguments.length<4)return f=a.map(function(v){return Rn(o,v,l)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(v,m){return p[v]=f[m]=f[m]||f[(m-1)/2|0]}),o.init(c,p,h)}});var Hu={name:"css",register:ja,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,c=n.vars.startAt,l,u,h,f,p,v,m,_,d,S,M,T,x,E,w,C;go||ja(),this.styles=this.styles||Ou(e),C=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(Bt[m]&&Tu(m,t,n,i,e,r)))){if(p=typeof u,v=Es[m],p==="function"&&(u=u.call(n,i,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Pr(u)),v)v(this,e,m,u,n)&&(w=1);else if(m.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Wn.lastIndex=0,Wn.test(l)||(_=gt(l),d=gt(u)),d?_!==d&&(l=jn(e,m,l,d)+d):_&&(u+=_),this.add(o,"setProperty",l,u,i,r,0,0,m),a.push(m),C.push(m,0,o[m]);else if(p!=="undefined"){if(c&&m in c?(l=typeof c[m]=="function"?c[m].call(n,i,e,r):c[m],ut(l)&&~l.indexOf("random(")&&(l=Pr(l)),gt(l+"")||(l+=Gt.units[m]||gt(Rn(e,m))||""),(l+"").charAt(1)==="="&&(l=Rn(e,m))):l=Rn(e,m),f=parseFloat(l),S=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),m in dn&&(m==="autoAlpha"&&(f===1&&Rn(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,o.visibility),Gn(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=dn[m],~m.indexOf(",")&&(m=m.split(",")[0]))),M=m in Un,M){if(this.styles.save(m),T||(x=e._gsap,x.renderTransform&&!t.parseTransform||Ir(e,t.parseTransform),E=t.smoothOrigin!==!1&&x.smooth,T=this._pt=new Dt(this._pt,o,Ye,0,1,x.renderTransform,x,0,-1),T.dep=1),m==="scale")this._pt=new Dt(this._pt,x,"scaleY",x.scaleY,(S?Zi(x.scaleY,S+h):h)-x.scaleY||0,qa),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){C.push(ln,0,o[ln]),u=h0(u),x.svg?Ka(e,u,0,E,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==x.zOrigin&&Gn(this,x,"zOrigin",x.zOrigin,d),Gn(this,o,m,Ts(l),Ts(u)));continue}else if(m==="svgOrigin"){Ka(e,u,1,E,0,this);continue}else if(m in zu){m0(this,x,m,f,S?Zi(f,S+u):u);continue}else if(m==="smoothOrigin"){Gn(this,x,"smooth",x.smooth,u);continue}else if(m==="force3D"){x[m]=u;continue}else if(m==="transform"){_0(this,u,e);continue}}else m in o||(m=cr(m)||m);if(M||(h||h===0)&&(f||f===0)&&!$g.test(u)&&m in o)_=(l+"").substr((f+"").length),h||(h=0),d=gt(u)||(m in Gt.units?Gt.units[m]:_),_!==d&&(f=jn(e,m,l,d)),this._pt=new Dt(this._pt,M?x:o,m,f,(S?Zi(f,S+h):h)-f,!M&&(d==="px"||m==="zIndex")&&t.autoRound!==!1?e0:qa),this._pt.u=d||0,_!==d&&d!=="%"&&(this._pt.b=l,this._pt.r=Qg);else if(m in o)u0.call(this,e,m,l,S?S+u:u);else if(m in e)this.add(e,m,l||e[m],S?S+u:u,i,r);else if(m!=="parseTransform"){oo(m,u);continue}M||(m in o?C.push(m,0,o[m]):C.push(m,1,l||e[m])),a.push(m)}}w&&Pu(this)},render:function(e,t){if(t.tween._time||!xo())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Rn,aliases:dn,getSetter:function(e,t,n){var i=dn[t];return i&&i.indexOf(",")<0&&(t=i),t in Un&&t!==ln&&(e._gsap.x||Rn(e,"x"))?n&&ac===n?t==="scale"?r0:i0:(ac=n||{})&&(t==="scale"?s0:a0):e.style&&!ro(e.style[t])?t0:~t.indexOf("-")?n0:mo(e,t)},core:{_removeProperty:Dr,_getMatrix:Mo}};Ut.utils.checkPrefix=cr;Ut.core.getStyleSaver=Ou;(function(s,e,t,n){var i=Lt(s+","+e+","+t,function(r){Un[r]=1});Lt(e,function(r){Gt.units[r]="deg",zu[r]=1}),dn[i[13]]=s+","+e,Lt(n,function(r){var a=r.split(":");dn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Lt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Gt.units[s]="px"});Ut.registerPlugin(Hu);var _s=Ut.registerPlugin(Hu)||Ut;_s.core.Tween;var Ea={exports:{}},pc;function g0(){return pc||(pc=1,function(s){(function(){function e(a,o){if(o&&o.multiple&&!Array.isArray(a))throw new Error("Invalid argument type: Expected an Array to serialize multiple values.");const c=4294967296;let l,u,h=new Uint8Array(128),f=0;if(o&&o.multiple)for(let g=0;g<a.length;g++)p(a[g]);else p(a);return h.subarray(0,f);function p(g,y){switch(typeof g){case"undefined":v();break;case"boolean":m(g);break;case"number":_(g);break;case"string":d(g);break;case"object":g===null?v():g instanceof Date?x(g):Array.isArray(g)?S(g):g instanceof Uint8Array||g instanceof Uint8ClampedArray?M(g):g instanceof Int8Array||g instanceof Int16Array||g instanceof Uint16Array||g instanceof Int32Array||g instanceof Uint32Array||g instanceof Float32Array||g instanceof Float64Array?S(g):T(g);break;default:if(!y&&o&&o.invalidTypeReplacement)typeof o.invalidTypeReplacement=="function"?p(o.invalidTypeReplacement(g),!0):p(o.invalidTypeReplacement,!0);else throw new Error("Invalid argument type: The type '"+typeof g+"' cannot be serialized.")}}function v(g){E(192)}function m(g){E(g?195:194)}function _(g){if(isFinite(g)&&Math.floor(g)===g)if(g>=0&&g<=127)E(g);else if(g<0&&g>=-32)E(g);else if(g>0&&g<=255)w([204,g]);else if(g>=-128&&g<=127)w([208,g]);else if(g>0&&g<=65535)w([205,g>>>8,g]);else if(g>=-32768&&g<=32767)w([209,g>>>8,g]);else if(g>0&&g<=4294967295)w([206,g>>>24,g>>>16,g>>>8,g]);else if(g>=-2147483648&&g<=2147483647)w([210,g>>>24,g>>>16,g>>>8,g]);else if(g>0&&g<=18446744073709552e3){let y=g/c,U=g%c;w([211,y>>>24,y>>>16,y>>>8,y,U>>>24,U>>>16,U>>>8,U])}else g>=-9223372036854776e3&&g<=9223372036854776e3?(E(211),C(g)):g<0?w([211,128,0,0,0,0,0,0,0]):w([207,255,255,255,255,255,255,255,255]);else u||(l=new ArrayBuffer(8),u=new DataView(l)),u.setFloat64(0,g),E(203),w(new Uint8Array(l))}function d(g){let y=n(g),U=y.length;U<=31?E(160+U):U<=255?w([217,U]):U<=65535?w([218,U>>>8,U]):w([219,U>>>24,U>>>16,U>>>8,U]),w(y)}function S(g){let y=g.length;y<=15?E(144+y):y<=65535?w([220,y>>>8,y]):w([221,y>>>24,y>>>16,y>>>8,y]);for(let U=0;U<y;U++)p(g[U])}function M(g){let y=g.length;y<=15?w([196,y]):y<=65535?w([197,y>>>8,y]):w([198,y>>>24,y>>>16,y>>>8,y]),w(g)}function T(g){let y=0;for(let U in g)g[U]!==void 0&&y++;y<=15?E(128+y):y<=65535?w([222,y>>>8,y]):w([223,y>>>24,y>>>16,y>>>8,y]);for(let U in g){let G=g[U];G!==void 0&&(p(U),p(G))}}function x(g){let y=g.getTime()/1e3;if(g.getMilliseconds()===0&&y>=0&&y<4294967296)w([214,255,y>>>24,y>>>16,y>>>8,y]);else if(y>=0&&y<17179869184){let U=g.getMilliseconds()*1e6;w([215,255,U>>>22,U>>>14,U>>>6,U<<2>>>0|y/c,y>>>24,y>>>16,y>>>8,y])}else{let U=g.getMilliseconds()*1e6;w([199,12,255,U>>>24,U>>>16,U>>>8,U]),C(y)}}function E(g){if(h.length<f+1){let y=h.length*2;for(;y<f+1;)y*=2;let U=new Uint8Array(y);U.set(h),h=U}h[f]=g,f++}function w(g){if(h.length<f+g.length){let y=h.length*2;for(;y<f+g.length;)y*=2;let U=new Uint8Array(y);U.set(h),h=U}h.set(g,f),f+=g.length}function C(g){let y,U;g>=0?(y=g/c,U=g%c):(g++,y=Math.abs(g)/c,U=Math.abs(g)%c,y=~y,U=~U),w([y>>>24,y>>>16,y>>>8,y,U>>>24,U>>>16,U>>>8,U])}}function t(a,o){let l=0;if(a instanceof ArrayBuffer&&(a=new Uint8Array(a)),typeof a!="object"||typeof a.length>"u")throw new Error("Invalid argument type: Expected a byte array (Array or Uint8Array) to deserialize.");if(!a.length)throw new Error("Invalid argument: The byte array to deserialize is empty.");a instanceof Uint8Array||(a=new Uint8Array(a));let u;if(o&&o.multiple)for(u=[];l<a.length;)u.push(h());else u=h();return u;function h(){const x=a[l++];if(x>=0&&x<=127)return x;if(x>=128&&x<=143)return _(x-128);if(x>=144&&x<=159)return d(x-144);if(x>=160&&x<=191)return S(x-160);if(x===192)return null;if(x===193)throw new Error("Invalid byte code 0xc1 found.");if(x===194)return!1;if(x===195)return!0;if(x===196)return m(-1,1);if(x===197)return m(-1,2);if(x===198)return m(-1,4);if(x===199)return M(-1,1);if(x===200)return M(-1,2);if(x===201)return M(-1,4);if(x===202)return v(4);if(x===203)return v(8);if(x===204)return p(1);if(x===205)return p(2);if(x===206)return p(4);if(x===207)return p(8);if(x===208)return f(1);if(x===209)return f(2);if(x===210)return f(4);if(x===211)return f(8);if(x===212)return M(1);if(x===213)return M(2);if(x===214)return M(4);if(x===215)return M(8);if(x===216)return M(16);if(x===217)return S(-1,1);if(x===218)return S(-1,2);if(x===219)return S(-1,4);if(x===220)return d(-1,2);if(x===221)return d(-1,4);if(x===222)return _(-1,2);if(x===223)return _(-1,4);if(x>=224&&x<=255)return x-256;throw console.debug("msgpack array:",a),new Error("Invalid byte value '"+x+"' at index "+(l-1)+" in the MessagePack binary data (length "+a.length+"): Expecting a range of 0 to 255. This is not a byte array.")}function f(x){let E=0,w=!0;for(;x-- >0;)if(w){let C=a[l++];E+=C&127,C&128&&(E-=128),w=!1}else E*=256,E+=a[l++];return E}function p(x){let E=0;for(;x-- >0;)E*=256,E+=a[l++];return E}function v(x){let E=new DataView(a.buffer,l+a.byteOffset,x);if(l+=x,x===4)return E.getFloat32(0,!1);if(x===8)return E.getFloat64(0,!1)}function m(x,E){x<0&&(x=p(E));let w=a.subarray(l,l+x);return l+=x,w}function _(x,E){x<0&&(x=p(E));let w={};for(;x-- >0;){let C=h();w[C]=h()}return w}function d(x,E){x<0&&(x=p(E));let w=[];for(;x-- >0;)w.push(h());return w}function S(x,E){x<0&&(x=p(E));let w=l;return l+=x,i(a,w,x)}function M(x,E){x<0&&(x=p(E));let w=p(1),C=m(x);switch(w){case 255:return T(C)}return{type:w,data:C}}function T(x){if(x.length===4){let E=(x[0]<<24>>>0)+(x[1]<<16>>>0)+(x[2]<<8>>>0)+x[3];return new Date(E*1e3)}if(x.length===8){let E=(x[0]<<22>>>0)+(x[1]<<14>>>0)+(x[2]<<6>>>0)+(x[3]>>>2),w=(x[3]&3)*4294967296+(x[4]<<24>>>0)+(x[5]<<16>>>0)+(x[6]<<8>>>0)+x[7];return new Date(w*1e3+E/1e6)}if(x.length===12){let E=(x[0]<<24>>>0)+(x[1]<<16>>>0)+(x[2]<<8>>>0)+x[3];l-=8;let w=f(8);return new Date(w*1e3+E/1e6)}throw new Error("Invalid data length for a date value.")}}function n(a){let o=!0,c=a.length;for(let h=0;h<c;h++)if(a.charCodeAt(h)>127){o=!1;break}let l=0,u=new Uint8Array(a.length*(o?1:4));for(let h=0;h!==c;h++){let f=a.charCodeAt(h);if(f<128){u[l++]=f;continue}if(f<2048)u[l++]=f>>6|192;else{if(f>55295&&f<56320){if(++h>=c)throw new Error("UTF-8 encode: incomplete surrogate pair");let p=a.charCodeAt(h);if(p<56320||p>57343)throw new Error("UTF-8 encode: second surrogate character 0x"+p.toString(16)+" at index "+h+" out of range");f=65536+((f&1023)<<10)+(p&1023),u[l++]=f>>18|240,u[l++]=f>>12&63|128}else u[l++]=f>>12|224;u[l++]=f>>6&63|128}u[l++]=f&63|128}return o?u:u.subarray(0,l)}function i(a,o,c){let l=o,u="";for(c+=o;l<c;){let h=a[l++];if(h>127)if(h>191&&h<224){if(l>=c)throw new Error("UTF-8 decode: incomplete 2-byte sequence");h=(h&31)<<6|a[l++]&63}else if(h>223&&h<240){if(l+1>=c)throw new Error("UTF-8 decode: incomplete 3-byte sequence");h=(h&15)<<12|(a[l++]&63)<<6|a[l++]&63}else if(h>239&&h<248){if(l+2>=c)throw new Error("UTF-8 decode: incomplete 4-byte sequence");h=(h&7)<<18|(a[l++]&63)<<12|(a[l++]&63)<<6|a[l++]&63}else throw new Error("UTF-8 decode: unknown multibyte start 0x"+h.toString(16)+" at index "+(l-1));if(h<=65535)u+=String.fromCharCode(h);else if(h<=1114111)h-=65536,u+=String.fromCharCode(h>>10|55296),u+=String.fromCharCode(h&1023|56320);else throw new Error("UTF-8 decode: code point 0x"+h.toString(16)+" exceeds UTF-16 reach")}return u}let r={serialize:e,deserialize:t,encode:e,decode:t};s?s.exports=r:window[window.msgpackJsName||"msgpack"]=r})()}(Ea)),Ea.exports}var x0=g0();class Za{constructor(){Ei(this,"parseReflectionTable",e=>{const t=new FileReader;return new Promise((n,i)=>{t.onerror=()=>{t.abort(),i(new DOMException("Problem parsing input file."))},t.onloadend=()=>{n(t.result);const r=x0.deserialize(new Uint8Array(t.result));this.reflTable=r[2].data,this.loadReflectionData()},t.readAsArrayBuffer(e),this.filename=e.name})});this.reflTable=null,this.panelReflData={},this.reflUnindexedDisplaySummary={},this.reflIndexedDisplaySummary={},this.filename=null,this.numReflections=null}hasReflTable(){return this.reflTable!=null}clearReflectionTable(){this.reflTable=null,this.panelReflData={},this.filename=null,this.numReflections=null}hasXYZObsData(){if(!this.hasReflTable())return!1;for(var e in this.panelReflData)if(this.panelReflData[e].count>0)return"xyzObs"in this.panelReflData[e][0];return!0}hasXYZCalData(){if(!this.hasReflTable())return!1;for(var e in this.panelReflData)if(this.panelReflData[e].count>0)return"xyzCal"in this.panelReflData[e][0];return!0}hasMillerIndicesData(){if(!this.hasReflTable())return!1;for(var e in this.panelReflData)if(this.panelReflData[e].count>0)return"millerIdx"in this.panelReflData[e][0];return!0}hasIndexedXYZObsData(){if(!this.hasReflTable())return!1;for(var e in this.panelReflData)if(this.panelReflData[e].count>0)return"xyzObs"in this.panelReflData[e][0]?"millerIdx"in this.panelReflData[e][0]:!1;return!0}containsColumn(e){return e in this.reflTable}getColumnBuffer(e){return this.reflTable[e][1][1]}getUint32Array(e){const t=this.getColumnBuffer(e),n=new DataView(t.buffer),i=new Uint32Array(t.byteLength/8);let r=0;for(let a=0;a<t.byteLength;a+=8)i[r]=n.getUint32(t.byteOffset+a,!0),r++;return i}getDoubleArray(e){const t=this.getColumnBuffer(e),n=new DataView(t.buffer),i=new Float64Array(t.length/8);let r=0;for(let a=0;a<t.byteLength;a+=8)i[r]=n.getFloat64(t.byteOffset+a,!0),r++;return i}getVec3DoubleArray(e){const t=this.getColumnBuffer(e),n=new DataView(t.buffer),i=new Array(t.length/(8*3));let r=0;for(let a=0;a<t.byteLength;a+=24){const o=new Float64Array(3);o[0]=n.getFloat64(t.byteOffset+a,!0),o[1]=n.getFloat64(t.byteOffset+a+8,!0),o[2]=n.getFloat64(t.byteOffset+a+16,!0),i[r]=o,r++}return i}getVec3Int32Array(e){const t=this.getColumnBuffer(e),n=new Array(t.length/(3*4)),i=new DataView(t.buffer);let r=0;for(let a=0;a<t.length;a+=12){const o=new Int32Array(3);o[0]=i.getInt32(t.byteOffset+a,!0),o[1]=i.getInt32(t.byteOffset+a+4,!0),o[2]=i.getInt32(t.byteOffset+a+8,!0),n[r]=o,r++}return n}getPanelNumbers(){return this.getUint32Array("panel")}getXYZObs(){return this.getVec3DoubleArray("xyzobs.px.value")}containsXYZObs(){return this.containsColumn("xyzobs.px.value")}containsRotationAnglesObs(){return this.containsColumn("xyzobs.mm.value")}getRotationAnglesObs(){const e=this.getVec3DoubleArray("xyzobs.mm.value"),t=[];for(var n=0;n<e.length;n++)t.push(e[n][2]);return t}containsRotationAnglesCal(){return this.containsColumn("xyzcal.mm")}getRotationAnglesCal(){const e=this.getVec3DoubleArray("xyzcal.mm"),t=[];for(var n=0;n<e.length;n++)t.push(e[n][2]);return t}getXYZCal(){return this.getVec3DoubleArray("xyzcal.px")}containsXYZCal(){return this.containsColumn("xyzcal.px")}containsMillerIndices(){return this.containsColumn("miller_index")}getMillerIndices(){return this.getVec3Int32Array("miller_index")}isValidMillerIndex(e){return Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)>.001}containsWavelengths(){return this.containsColumn("wavelength")}getWavelengths(){return this.getDoubleArray("wavelength")}containsWavelengthsCal(){return this.containsColumn("wavelength_cal")}getWavelengthsCal(){return this.getDoubleArray("wavelength_cal")}loadReflectionData(){const e=this.getPanelNumbers();var t,n,i,r,a,o,c;this.containsXYZObs()&&(t=this.getXYZObs()),this.containsXYZCal()&&(i=this.getXYZCal()),this.containsMillerIndices()&&(a=this.getMillerIndices()),this.containsWavelengths()&&(o=this.getWavelengths()),this.containsWavelengthsCal()&&(c=this.getWavelengthsCal()),this.containsRotationAnglesObs()&&(n=this.getRotationAnglesObs()),this.containsRotationAnglesCal()&&(r=this.getRotationAnglesCal()),console.assert(t||i);for(var l=0,u=0,h=0;h<e.length;h++){const p=e[h],v={indexed:!1};var f="<b>id: </b>"+h+" <b>panel: </b>"+p;t!=null&&(v.xyzObs=t[h],f+=" <b>xyzObs: </b> (",f+=t[h][0].toFixed(1)+", ",f+=t[h][1].toFixed(1)+", ",f+=t[h][2].toFixed(1)+")"),i!=null&&(v.xyzCal=i[h],f+=" <b>xyzCal: </b> (",f+=i[h][0].toFixed(1)+", ",f+=i[h][1].toFixed(1)+", ",f+=i[h][2].toFixed(1)+`)
`),a!=null?(v.millerIdx=a[h],this.isValidMillerIndex(a[h])?(v.indexed=!0,v.id=u,f+="<b>hkl </b>("+a[h]+")",this.reflIndexedDisplaySummary[u]=f,u++):(v.id=l,this.reflUnindexedDisplaySummary[l]=f,l++)):(v.id=l,this.reflUnindexedDisplaySummary[l]=f,l++),o!=null&&(v.wavelength=o[h]),c!=null&&(v.wavelengthCal=c[h]),n!=null&&(v.angleObs=n[h]),r!=null&&(v.angleCal=r[h]),p in this.panelReflData?this.panelReflData[p].push(v):this.panelReflData[p]=[v]}this.numReflections=e.length}getIndexedSummaryById(e){return this.reflIndexedDisplaySummary[e]}getUnindexedSummaryById(e){return this.reflUnindexedDisplaySummary[e]}getReflectionsForPanel(e){return console.assert(this.hasReflTable()),this.panelReflData[e]}}class An{constructor(e,t,n,i,r=null){Ei(this,"addExperiment",async e=>{this.clearExperiment(),this.clearObservedReflectionTable(),this.clearPredictedReflectionTable(),this.clearActivePredictedReflectionTable(),await this.expt.parseExperiment(e),console.assert(this.hasExperiment()),this.addBeam(),this.addSample(),this.setCameraToDefaultPositionWithExperiment(),this.showSidebar(),this.isStandalone&&this.showCloseExptButton(),this.requestRender()});Ei(this,"addExperimentFromJSONString",async(e,t=!0,n=!1)=>{this.clearExperiment(),this.hideErrorText(),this.clearObservedReflectionTable(),this.clearPredictedReflectionTable(),await this.expt.parseExperimentJSON(e),console.assert(this.hasExperiment()),this.addBeam(),this.addSample(),t&&this.showSidebar(),this.isStandalone&&this.showCloseExptButton(),this.requestRender()});Ei(this,"addObservedReflectionTable",async e=>{this.clearObservedReflectionTable(),await this.observedRefl.parseReflectionTable(e),this.addObservedReflections(),this.hasObservedReflectionTable()&&this.isStandalone&&this.showCloseReflButton(),this.requestRender()});this.isStandalone=i,this.serverWS=null,this.colors=null,r!=null?this.colors=r:this.colors=An.defaultColors(),this.expt=e,this.activePredictedRefl=t,this.storedPredictedRefls=[],this.storedObservedRefls=[],this.numInitialOrientations=0,this.lastExpPhi=null,this.observedRefl=n,this.headerText=document.getElementById("headerText"),this.errorText=document.getElementById("errorText"),this.sidebar=document.getElementById("sidebar"),this.closeExptButton=document.getElementById("closeExpt"),this.closeReflButton=document.getElementById("closeRefl"),this.reflectionSize=document.getElementById("reflectionSize"),this.goniometerPhi=document.getElementById("goniometerPhi"),this.reflPointsObsIndexed=[],this.reflPositionsIndexed=[],this.reflPointsCal=[],this.activeReflPointsCal=null,this.reflPositionsCal=[],this.activeReflPositionsCal=null,this.beamMeshes=[],this.sampleMesh=null,this.reciprocalCellMeshes=[],this.preventMouseClick=!1,this.hightlightColor=new ze(this.colors.highlight),this.reflectionInexedColor=new ze(this.colors.reflectionObsIndexed),this.reflectionCalculatedColor=new ze(this.colors.reflectionCal),this.rlpScaleFactor=1e3,this.reflSprite=new tg().load("disc.png"),this.displayingTextFromHTMLEvent=!1,this.lastDataFromExperiment=!1}static defaultColors(){return{background:2236962,sample:16643811,reflectionObsIndexed:15158332,reflectionCal:16755370,highlight:16777215,beam:16777215,reciprocalCell:16777215,RLVLabels:"white"}}static sizes(){return{minRLVLineWidth:1,maxRLVLineWidth:8,minRLVLabelSize:18,beamLength:800,sample:1,RLVLineWidthScaleFactor:15,RLVLabelScaleFactor:7}}static cameraPositions(){return{default:new P(0,0,-1e3),defaultWithExperiment:new P(-1e3,0,0),centre:new P(0,0,0)}}static text(){return{default:"To view an experiment, drag .expt and .refl files into the browser",defaultWithExpt:null}}toggleSidebar(){this.sidebar.style.display=this.sidebar.style.display==="block"?"none":"block"}showSidebar(){this.sidebar.style.display="block"}clearUserPredictedReflections(){this.clearActivePredictedReflectionTable(),this.clearUserReflPointsCal(),this.clearUserReflPositionsCal();for(let t=this.storedPredictedRefls.length-1;t>this.numInitialOrientations;t--)this.storedPredictedRefls[t].clearReflectionTable(),this.storedPredictedRefls.pop();const e=JSON.stringify({channel:"server",command:"clear_planner_user_predicted_reflections",num_initial_orientations:this.numInitialOrientations});this.serverWS.send(e),this.goniometerPhi.value=this.lastExpPhi,this.lastDataFromExperiment=!0,this.storeActiveReflections(),this.hideErrorText(),this.requestRender()}clearAllPredictedReflections(){this.clearActivePredictedReflectionTable(),this.clearReflPointsCal(),this.clearReflPositionsCal();for(var e=0;e<this.storedPredictedRefls.length;e++)this.storedPredictedRefls[e].clearReflectionTable();this.storedPredictedRefls=[],this.requestRender()}updateReflectionSize(){if(!this.hasObservedReflectionTable()&&!this.hasPredictedReflectionTable())return;if(this.observedRefl.hasXYZObsData()&&this.reflPositionsIndexed){const n=this.createPoints(this.reflPositionsIndexed[0],this.colors.reflectionObsIndexed,this.reflectionSize.value);this.clearReflPointsObsIndexed(),window.scene.add(n),this.reflPointsObsIndexed=[n]}const e=[];for(var t=0;t<this.storedPredictedRefls.length;t++)if(this.storedPredictedRefls[t].hasXYZCalData()&&this.reflPositionsCal[t]){const n=this.createPoints(this.reflPositionsCal[t],this.colors.reflectionCal[t],this.reflectionSize.value);window.scene.add(n),e.push(n)}if(this.activePredictedRefl.hasXYZCalData()&&this.activeReflPositionsCal){const n=this.createPoints(this.activeReflPositionsCal,this.colors.reflectionCal[e.length],this.reflectionSize.value);window.scene.add(n),this.clearActiveReflPointsCal(),this.activeReflPointsCal=n}this.clearReflPointsCal(),this.reflPointsCal=e,this.requestRender()}getS1(e,t,n,i=[1,1]){const r=new P(e[0]*i[0],e[1]*i[1],1);return r.applyMatrix3(t),r.normalize().multiplyScalar(1/n),r}hasExperiment(){return this.expt.hasExptJSON()}clearExperiment(){for(var e=0;e<this.beamMeshes.length;e++)window.scene.remove(this.beamMeshes[e]),this.beamMeshes[e].geometry.dispose(),this.beamMeshes[e].material.dispose();for(var e=0;e<this.reciprocalCellMeshes.length;e++)window.scene.remove(this.reciprocalCellMeshes[e]),this.reciprocalCellMeshes[e].geometry.dispose(),this.reciprocalCellMeshes[e].material.dispose();this.beamMeshes=[],this.sampleMesh&&(window.scene.remove(this.sampleMesh),this.sampleMesh.geometry.dispose(),this.sampleMesh.material.dispose(),this.sampleMesh=null),this.expt.clearExperiment(),this.hideCloseExptButton(),this.clearObservedReflectionTable(),this.clearPredictedReflectionTable(),this.hideErrorText(),this.requestRender()}showCloseExptButton(){this.closeExptButton.style.display="inline",this.closeExptButton.innerHTML="<b>"+this.expt.filename+' <i class="fa fa-trash"></i>'}hideCloseExptButton(){this.closeExptButton.style.display="none"}hasObservedReflectionTable(){return this.observedRefl.hasReflTable()}hasPredictedReflectionTable(){return this.activePredictedRefl.hasReflTable()}clearReflPointsObsIndexed(){for(var e=0;e<this.reflPointsObsIndexed.length;e++)window.scene.remove(this.reflPointsObsIndexed[e]),this.reflPointsObsIndexed[e].geometry.dispose(),this.reflPointsObsIndexed[e].material.dispose();this.reflPointsObsIndexed=[]}clearUserReflPointsCal(){for(let e=this.numInitialOrientations;e<this.reflPointsCal.length;e++)window.scene.remove(this.reflPointsCal[e]),this.reflPointsCal[e].geometry.dispose(),this.reflPointsCal[e].material.dispose()}clearReflPointsCal(){for(var e=0;e<this.reflPointsCal.length;e++)window.scene.remove(this.reflPointsCal[e]),this.reflPointsCal[e].geometry.dispose(),this.reflPointsCal[e].material.dispose();this.reflPointsCal=[]}clearUserReflPositionsCal(){this.reflPositionsCal=this.reflPositionsCal.splice(0,this.numInitialOrientations)}clearReflPositionsCal(){this.reflPositionsCal=[]}clearPredictedReflectionTable(){this.clearReflPointsCal(),this.clearReflPositionsCal();for(var e=0;e<this.storedPredictedRefls.length;e++)this.storedPredictedRefls[e].clearReflectionTable();this.requestRender()}clearActiveReflPointsCal(){this.activeReflPointsCal===null||this.activeReflPointsCal===void 0||(window.scene.remove(this.activeReflPointsCal),this.activeReflPointsCal.geometry.dispose(),this.activeReflPointsCal.material.dispose(),this.activeReflPointsCal=null)}clearActiveReflPositionsCal(){this.activeReflPositionsCal=null}clearActivePredictedReflectionTable(){this.activeReflPointsCal===null&&this.activeReflPositionsCal===null||(this.clearActiveReflPointsCal(),this.clearActiveReflPositionsCal(),this.activePredictedRefl.clearReflectionTable(),this.requestRender())}clearObservedReflectionTable(){this.clearReflPointsObsIndexed(),this.observedRefl.clearReflectionTable(),this.hideCloseReflButton(),this.requestRender()}createPoints(e,t,n){const i=new kt;i.setAttribute("position",new Zt(e,3));const r=new Hc({size:n,map:this.reflSprite,alphaTest:.5,transparent:!0,color:t}),a=new $_(i,r);return a.frustumCulled=!1,a}showCloseReflButton(){this.closeReflButton.style.display="inline",this.closeReflButton.innerHTML="<b>"+this.observedRefl.filename+' <i class="fa fa-trash"></i>'}hideCloseReflButton(){this.closeReflButton.style.display="none"}addExptOrientation(e){console.assert("expt_ids"in e),console.assert("predicted_refl_data"in e),console.assert("phi"in e),this.hideErrorText(),this.updateGoniometerPhi(e.phi),"refl_data"in e&&this.addObservedReflectionsFromData(e.refl_data),this.addPredictedReflectionsFromData(e.predicted_refl_data,!1),this.requestRender()}addObservedReflectionsFromData(e){function t(S,M,T,x,E,w,C,g){const y=S.clone().normalize().sub(T.clone().normalize()).multiplyScalar(1/M);if(!g)return y.multiplyScalar(x.rlpScaleFactor);if(w==null)return console.warn("Rotation angles not in reflection table. Cannot generate rlps correctly."),y.multiplyScalar(x.rlpScaleFactor);var U=E.fixedRotation;const G=E.settingRotation,O=E.rotationAxis;return U=U.clone().multiply(C),y.applyMatrix3(G.clone().invert()),y.applyAxisAngle(O,-w),y.applyMatrix3(U.clone().invert().transpose()),y.multiplyScalar(x.rlpScaleFactor)}if(!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded");return}this.hideErrorText(),this.observedRefl.panelReflData=e,this.observedRefl.reflTable="reflData";const n=new Array,i=Object.keys(e);var r;for(var a in e)if(e[a].length>0){r=e[a][0];break}if(r===void 0)return;const o="xyzObs"in r,c="millerIdx"in r,l="wavelength"in r;for(var u=this.expt.getBeamData(0).wavelength,h=this.expt.getBeamDirection(0).multiplyScalar(-1).normalize(),f=this.expt.goniometer,p=this.expt.scan,v=f!=null&&p!=null,a=0;a<this.expt.getNumDetectorPanels(0);a++){var m=e[i[a]];if(m==null)continue;const M=this.expt.getDetectorPanelDataByIdx(0,i[a]);v&&(m=this.expt.addAnglesToReflections(m));const T=[M.pxSize.x,M.pxSize.y],x=M.dMatrix;var _=null;this.expt.hasCrystal()&&(_=this.expt.getCrystalU());for(var d=0;d<m.length;d++)if(o){const E=m[d].xyzObs;if(l&&(u=m[d].wavelength),!u)continue;const w=this.getS1(E,x,u,T),C=m[d].angleObs,g=t(w,u,h,this,f,C,_,v);c&&m[d].indexed&&(n.push(g.x),n.push(g.y),n.push(g.z))}}if(o&&c){const S=this.createPoints(n,this.colors.reflectionObsIndexed,this.reflectionSize.value);window.scene.add(S),this.reflPointsObsIndexed.push(S),this.reflPositionsIndexed.push(n)}this.requestRender()}storeActiveReflections(){this.storedPredictedRefls.push(this.activePredictedRefl);var e=new Za;this.activePredictedRefl=e,this.reflPointsCal.push(this.activeReflPointsCal),this.reflPositionsCal.push(this.activeReflPositionsCal),this.activeReflPointsCal=null,this.activeReflPositionsCal=null}addPredictedReflectionsFromData(e,t=!0){function n(v,m,_,d,S,M,T){const x=v.clone().normalize().sub(_.clone().normalize()).multiplyScalar(1/m);if(M==null)return console.warn("Rotation angles not in reflection table. Cannot generate rlps correctly."),x.multiplyScalar(d.rlpScaleFactor);var E=S.fixedRotation;const w=S.settingRotation,C=S.rotationAxis;return E=E.clone().multiply(T),x.applyMatrix3(w.clone().invert()),x.applyAxisAngle(C,-M),x.applyMatrix3(E.clone().invert().transpose()),x.multiplyScalar(d.rlpScaleFactor)}if(t&&this.clearActivePredictedReflectionTable(),this.hideErrorText(),!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded");return}let i=this.goniometerPhi.value*Math.PI/180;this.activePredictedRefl.panelReflData=e,this.activePredictedRefl.reflTable="reflData";const r=[],a=Object.keys(e);var o=this.expt.getBeamData(0).wavelength,c=this.expt.getBeamDirection(0).multiplyScalar(-1).normalize();for(let v of a){var l=e[v];if(l==null)continue;const m=this.expt.getDetectorPanelDataByIdx(0,v),_=[m.pxSize.x,m.pxSize.y],d=m.dMatrix;for(var u=0;u<l.length;u++){let S=null,M=null;"exptID"in l[u]?(S=l[u].exptID,M=this.expt.getGoniometerForExptID(S)):M=this.expt.getGoniometerWithAngle(i);var h=null;"crystalID"in l[u]&&l[u].crystalID!=="-1"&&(h=this.expt.getCrystalU(parseInt(l[u].crystalID)));const T=l[u].xyzCal;if(o=l[u].wavelengthCal,!o)continue;var f=this.getS1(T,d,o,_);f.multiplyScalar(.1);const x=n(f,o,c,this,M,i,h);r.push(x.x),r.push(x.y),r.push(x.z)}}const p=this.createPoints(r,this.colors.reflectionCal[this.reflPointsCal.length],this.reflectionSize.value);window.scene.add(p),this.activeReflPointsCal=p,this.activeReflPositionsCal=r,t?this.lastDataFromExperiment=!1:(this.numInitialOrientations+=1,this.storeActiveReflections(),this.lastDataFromExperiment=!0,this.lastExpPhi=this.goniometerPhi.value),this.requestRender()}addObservedReflections(){function e(f,p,v,m,_,d,S){const M=f.clone().normalize().sub(v.clone().normalize()).multiplyScalar(1/p);if(_==null)return M.multiplyScalar(m.rlpScaleFactor);if(d==null)return console.warn("Rotation angles not in reflection table. Cannot generate rlps correctly."),M.multiplyScalar(m.rlpScaleFactor);var T=_.fixedRotation;const x=_.settingRotation,E=_.rotationAxis;return M.applyMatrix3(x.clone().invert()),M.applyAxisAngle(E,-d),M.applyMatrix3(T.clone().invert().transpose()),M.multiplyScalar(m.rlpScaleFactor)}if(!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded"),this.clearObservedReflectionTable(),this.clearPredictedReflectionTable();return}const t=new Array,n=this.observedRefl.containsXYZObs(),i=this.observedRefl.containsMillerIndices(),r=this.observedRefl.containsWavelengths();for(var a=this.expt.getBeamData(0).wavelength,o=this.expt.getBeamDirection(0).multiplyScalar(-1).normalize(),c=this.expt.goniometer,l=0;l<this.expt.getNumDetectorPanels(0);l++){var u=this.observedRefl.getReflectionsForPanel(l);const f=this.expt.getDetectorPanelDataByIdx(0,l);c!=null&&(!this.observedRefl.containsRotationAnglesObs()||!this.observedRefl.containsRotationAnglesCal())&&(u=this.expt.addAnglesToReflections(u));const p=[f.pxSize.x,f.pxSize.y],v=f.dMatrix;this.expt.hasCrystal()&&this.expt.getCrystalU();for(var h=0;h<u.length;h++)if(n){const m=u[h].xyzObs;if(r&&(a=u[h].wavelength),!a)continue;const _=this.getS1(m,v,a,p),d=u[h].angleObs,S=e(_,a,o,this,c,d);i&&u[h].indexed&&(t.push(S.x),t.push(S.y),t.push(S.z))}}if(n&&i){const f=this.createPoints(t,this.colors.reflectionObsIndexed,this.reflectionSize.value);window.scene.add(f),this.reflPointsObsIndexed=[f],this.reflPositionsIndexed=t}}addBeam(){var e=An.sizes().beamLength,t=this.expt.getBeamDirection(0),n=[];n.push(new P(t.x*-800,t.y*-800,t.z*-800)),n.push(new P(t.x*-800*.5,t.y*-800*.5,t.z*-800*.5)),n.push(new P(0,0,0));const i=new kt().setFromPoints(n),r=new Da({color:this.colors.beam,fog:!0,depthWrite:!1}),a=new Wl(i,r);this.beamMeshes.push(a),window.scene.add(a);var o=[];o.push(new P(0,0,0)),o.push(new P(t.x*e*.5,t.y*e*.5,t.z*e*.5)),o.push(new P(t.x*e,t.y*e,t.z*e));const c=new kt().setFromPoints(o),l=new Da({color:this.colors.beam,transparent:!0,opacity:.25,fog:!0,depthWrite:!1}),u=new Wl(c,l);this.beamMeshes.push(u),window.scene.add(u)}addSample(){const e=new no(An.sizes().sample),t=new Qa({color:this.colors.sample,transparent:!0,depthWrite:!1}),n=new Pn(e,t);n.name="sample",this.sampleMesh=n,window.scene.add(n)}setCameraSmooth(e){this.rotateToPos(e),this.resetCameraZoomSmooth()}setCameraToDefaultPosition(){this.setCameraSmooth(An.cameraPositions().default)}setCameraToDefaultPositionWithExperiment(){this.setCameraSmooth(An.cameraPositions().defaultWithExperiment)}setCameraToCentrePosition(){this.setCameraSmooth(An.cameraPositions().centre)}displayHeaderText(e){this.showHeaderText(),this.headerText.innerHTML=e}displayErrorText(e){this.showErrorText(),this.errorText.innerHTML=e}appendHeaderText(e){this.headerText.innerHTML+=e}hideHeaderText(){this.headerText.style.display="none"}showHeaderText(){this.headerText.style.display="block"}hideErrorText(){this.errorText.style.display="none"}showErrorText(){this.errorText.style.display="block"}displayDefaultHeaderText(){this.hasExperiment()||!this.isStandalone?this.hideHeaderText():this.displayHeaderText(An.text().default)}displayImageFilenames(){this.displayHeaderText(this.expt.imageFilenames),this.displayingTextFromHTMLEvent=!0}displayNumberOfReflections(){this.displayHeaderText(this.observedRefl.numReflections+" reflections"),this.displayingTextFromHTMLEvent=!0}stopDisplayingText(){this.displayingTextFromHTMLEvent=!1}highlightObject(e){e.material.color=new ze(this.colors.highlight)}beamHidden(){return this.beamMeshes.length===0?!0:this.beamMeshes[0].material.opacity<.01}sampleHidden(){return this.sampleMesh===null?!0:this.sampleMesh.material.opacity<.01}disableMouseClick(){this.preventMouseClick=!0}enableMouseClick(){this.preventMouseClick=!1}updateActivePredictedReflections(){const e=JSON.stringify({channel:"server",command:"update_planner_goniometer_phi",phi:parseFloat(this.goniometerPhi.value),last_data_from_experiment:this.lastDataFromExperiment});this.serverWS.send(e),this.requestRender()}updateGoniometerPhi(e){this.goniometerPhi.value=e,document.getElementById("goniometerValue").textContent=e+"°",this.requestRender()}updateGUIInfo(){function e(n){if(n.beamHidden())return;const i=window.rayCaster.intersectObjects(n.beamMeshes);if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),i.length>0){const r="<b>beam: </b>"+n.expt.getBeamSummary(0);n.displayHeaderText(r)}}function t(n){if(n.sampleHidden()||n.expt.getCrystalSummary()===null)return;const i=window.rayCaster.intersectObjects([n.sampleMesh]);if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),i.length>0){const r="<b>crystal: </b>"+n.expt.getCrystalSummary();n.displayHeaderText(r)}}this.displayingTextFromHTMLEvent||(this.displayDefaultHeaderText(),e(this),t(this))}rotateToPos(e){_s.to(window.camera.position,{duration:1,x:-e.x,y:-e.y,z:-e.z,onUpdate:function(){window.camera.lookAt(e),window.viewer.requestRender()}})}resetCameraZoomSmooth(){_s.to(window.camera,{duration:1,zoom:1,onUpdate:function(){window.camera.updateProjectionMatrix(),window.viewer.requestRender()}}),window.controls.update()}zoomInOnObject(e,t=.2){const n=new P,i=new P,r=new ur;r.makeEmpty(),r.expandByObject(e),r.getSize(n),r.getCenter(i);const o=[new P(i.x-n.x/2,i.y-n.y/2,i.z-n.z/2),new P(i.x-n.x/2,i.y-n.y/2,i.z+n.z/2),new P(i.x-n.x/2,i.y+n.y/2,i.z-n.z/2),new P(i.x-n.x/2,i.y+n.y/2,i.z+n.z/2),new P(i.x+n.x/2,i.y-n.y/2,i.z-n.z/2),new P(i.x+n.x/2,i.y-n.y/2,i.z+n.z/2),new P(i.x+n.x/2,i.y+n.y/2,i.z-n.z/2),new P(i.x+n.x/2,i.y+n.y/2,i.z+n.z/2)].map(u=>{const h=u.clone().project(camera);return h.x=(h.x+1)/2*window.innerWidth,h.y=(1-h.y)/2*window.innerHeight,h});let c=0;for(let u=0;u<o.length;u++)for(let h=u+1;h<o.length;h++){const f=o[u].distanceTo(o[h]);f>c&&(c=f)}const l=window.camera.zoom*(window.innerWidth*t)/c;_s.to(window.camera,{duration:1,zoom:l,onUpdate:function(){window.camera.updateProjectionMatrix(),window.viewer.requestRender()}}),window.controls.update()}animate(){this.renderRequested&&(window.viewer.updateGUIInfo(),window.controls.update(),window.renderer.render(window.scene,window.camera),this.renderRequested=!1,window.viewer.enableMouseClick())}requestRender(){typeof window<"u"&&!this.renderRequested&&(this.renderRequested=!0,window.requestAnimationFrame(this.animate.bind(this)))}}function v0(){if(!(typeof window.viewer>"u")){window.renderer=new Gc,window.renderer.setClearColor(window.viewer.colors.background),window.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(window.renderer.domElement),window.scene=new Z_;var s=500,e=window.innerWidth/window.innerHeight;window.camera=new Fc(s*e/-2,s*e/2,s/2,s/-2,1,5e4),window.renderer.render(window.scene,window.camera),window.rayCaster=new ng,window.controls=new ig(window.camera,window.renderer.domElement),window.controls.maxDistance=3e3,window.controls.enablePan=!1,window.controls.rotateSpeed=.2,window.controls.update(),window.controls.addEventListener("change",function(){window.viewer.requestRender()}),window.mousePosition=new we,window.addEventListener("mousemove",function(t){window.mousePosition.x=t.clientX/window.innerWidth*2-1,window.mousePosition.y=-(t.clientY/window.innerHeight)*2+1,window.viewer.requestRender()}),window.addEventListener("resize",function(){window.camera.aspect=window.innerWidth/window.innerHeight,window.camera.updateProjectionMatrix(),window.renderer.setSize(window.innerWidth,window.innerHeight),window.viewer.requestRender()}),window.addEventListener("dragstart",t=>{dragged=t.target}),window.addEventListener("dragover",t=>{t.preventDefault()}),window.addEventListener("drop",function(t){t.preventDefault(),t.stopPropagation();const n=t.dataTransfer.files[0],i=n.name.split(".").pop();i=="refl"&&window.viewer.isStandalone?window.viewer.addReflectionTable(n):i=="expt"&&window.viewer.isStandalone&&window.viewer.addExperiment(n)}),window.addEventListener("dblclick",function(t){}),window.addEventListener("mousedown",function(t){t.button==2&&window.viewer.setCameraToDefaultPositionWithExperiment()}),window.addEventListener("keydown",function(t){t.key==="s"&&window.viewer.toggleSidebar()}),window.viewer.setCameraToDefaultPosition(),window.viewer.requestRender()}}class mc{constructor(e,t,n,i,r,a,o){this.imageFilenames=e,this.crystalSummary=t,this.goniometer=n,this.crystal=i,this.scan=r,this.detectorPanelData=a,this.imageFilename=o}clearExperiment(){this.imageFilenames=null,this.crystalSummary=null,this.goniometer=null,this.crystal=null,this.scan=null,this.detectorPanelData=null,this.imageFilename=null}}class So{constructor(){Ei(this,"parseExperiment",e=>{const t=new FileReader;return new Promise((n,i)=>{t.onerror=()=>{t.abort(),i(new DOMException("Problem parsing .expt file."))},t.onloadend=()=>{if(n(t.result),So.isDIALSExpt(e,t.result)){this.exptJSON=JSON.parse(t.result);for(var r=0;r<this.numExperiments();r++)this.experiments.push(new mc(this.getImageFilenames(r),this.getCrystalSummary(r),this.getGoniometer(r),this.getCrystal(r),this.getScan(r),this.getDetectorPanelData(r),this.getImageFilenames(r)));this.filename=e.name}},t.readAsText(e)})});this.exptJSON=null,this.filename=null,this.experiments=[],this.crystals=[]}hasExptJSON(){return this.exptJSON!=null}static isDIALSExpt(e,t){return e.name.split(".").pop()==="expt"&&t[0]==="{"}clearExperiment(){this.exptJSON=null,this.filename=null,this.experiments.forEach(e=>e.clearExperiment()),this.experiments=[],this.crystals=[]}numExperiments(){return this.exptJSON==null?0:this.exptJSON.imageset.length}parseExperimentJSON(e){this.exptJSON=e,this.imageFilenames=[];for(var t=0;t<this.numExperiments();t++)this.experiments.push(new mc(this.getImageFilenames(t),this.getCrystalSummary(t),this.getGoniometer(t),this.getCrystal(t),this.getScan(t),this.getDetectorPanelData(t),this.getImageFilenames(t))),this.imageFilenames.push(this.getImageFilenames(t)),this.crystals=this.getAllCrystals()}getImageFilenames(e){const t=this.exptJSON.experiment[e].imageset;return this.exptJSON.imageset[t].template}getDetectorPanelData(e){const t=this.getRawDetectorPanelData(e);for(var n=this.getDetectorOrientationData(e),i=[],r=0;r<t.length;r++){const x=t[r];var a=new we(x.pixel_size[0],x.pixel_size[1]),o=new we(x.image_size[0],x.image_size[1]),c=new we(a.x*o.x,a.y*o.y),l=new P(x.fast_axis[0],x.fast_axis[1],x.fast_axis[2]),u=new P(x.slow_axis[0],x.slow_axis[1],x.slow_axis[2]),h=new P(x.origin[0],x.origin[1],x.origin[2]),f=new xe().set(l.x,u.x,h.x,l.y,u.y,h.y,l.z,u.z,h.z),p=new P(n.fast_axis[0],n.fast_axis[1],n.fast_axis[2]),v=new P(n.slow_axis[0],n.slow_axis[1],n.slow_axis[2]),m=p.clone().cross(v),_=new xe().set(p.x,v.x,m.x,p.y,v.y,m.y,p.z,v.z,m.z),d=new P(n.origin[0],n.origin[1],n.origin[2]),S=_.clone().multiply(f),M=S.elements;M[6]+=d.x,M[7]+=d.y,M[8]+=d.z;var T=new xe().fromArray(M);l.multiplyScalar(c.x),u.multiplyScalar(c.y),i.push({panelSize:c,pxSize:a,pxs:o,fastAxis:l,slowAxis:u,origin:h,dMatrix:T})}return i}getRawDetectorPanelData(e){const t=this.exptJSON.experiment[e].detector;return this.exptJSON.detector[t].panels}getBeamData(e){const t=this.exptJSON.experiment[e].beam;return this.exptJSON.beam[t]}getBeamSummary(e){const t=this.getBeamData(e);var n=t.direction;n=[n[0].toFixed(3),n[1].toFixed(3),n[2].toFixed(3)];const i=t.wavelength;var r="direction: ("+n+"), ";return i&&(r+=" wavelength: "+i.toFixed(3)),r}getGoniometerForExptID(e){return e!==null?this.experiments[e%this.experiments.length].goniometer:{fixedRotation:new xe().identity(),settingRotation:new xe().identity(),rotationAxis:new P(0,1,0)}}getGoniometerWithAngle(e){let t=new xe().identity(),n=new P(0,1,0);const i=new qn;i.setFromAxisAngle(n,e);const r=new xe().setFromMatrix4(new rt().makeRotationFromQuaternion(i));return t.premultiply(r),{fixedRotation:new xe().identity(),settingRotation:t,rotationAxis:n}}getGoniometer(e){function t(c){const l=["axes","angles","scan_axis"];for(var u=0;u<l.length;u++)if(!(l[u]in c))return!1;return!0}function n(c){const l=c.fixed_rotation,u=c.setting_rotation,h=c.rotation_axis;return{fixedRotation:new xe().set(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8]),settingRotation:new xe().set(u[0],u[1],u[2],u[3],u[4],u[5],u[6],u[7],u[8]),rotationAxis:new P(h[0],h[1],h[2])}}function i(c){function l(S,M){const T=new P(S[0],S[1],S[2]).normalize(),x=Math.cos(M*Math.PI/180),E=Math.sin(M*Math.PI/180),[w,C,g]=T.toArray(),y=x+(1-x)*w*w,U=(1-x)*w*C-E*g,G=(1-x)*w*g+E*C,O=(1-x)*w*C+E*g,B=x+(1-x)*C*C,z=(1-x)*C*g-E*w,K=(1-x)*w*g-E*C,H=(1-x)*C*g+E*w,V=x+(1-x)*g*g;return new xe().set(y,U,G,O,B,z,K,H,V).transpose()}const u=c.axes,h=c.angles,f=c.scan_axis,p=u[f],v=new P(p[0],p[1],p[2]);var m=new xe().set(1,0,0,0,1,0,0,0,1);const _=new xe().set(1,0,0,0,1,0,0,0,1);for(var d=0;d<f;d++){const S=l(u[d],h[d]);m=m.clone().multiply(S)}for(var d=f+1;d<u.length;d++){const M=l(u[d],h[d]);_.multiply(M)}return{fixedRotation:m,settingRotation:_,rotationAxis:v}}const r=this.exptJSON.goniometer;if(!r||r.length===0){this.goniometer=null;return}const a=this.exptJSON.experiment[e].goniometer,o=r[a];return t(o)?i(o):n(o)}getCrystalData(e){if(this.exptJSON.crystal.length===0||e===void 0)return null;var t=this.exptJSON.experiment[e].crystal;return this.exptJSON.crystal[t]}getAllCrystalData(){return this.exptJSON.crystal}hasCrystal(e){return this.exptJSON===null||this.experiments===void 0?!1:this.experiments[e].crystal!==null&&this.experiments[e].crystal!==void 0}latticeParameters(e,t,n){const i=e.length(),r=t.length(),a=n.length(),o=Math.acos(t.dot(n)/(r*a)),c=Math.acos(e.dot(n)/(i*a)),l=Math.acos(e.dot(t)/(i*r));return[i,r,a,o,c,l]}unitCellVolume(e,t,n,i,r,a){const o=Math.cos(i)**2,c=Math.cos(r)**2,l=Math.cos(a)**2,u=Math.cos(i),h=Math.cos(r),f=Math.cos(a);return e*t*n*Math.sqrt(1-o-c-l+2*u*h*f)}reciprocalLatticeConstants(e,t,n,i,r,a,o){const c=new Array(6);return c[0]=t*n*Math.sin(i)/o,c[1]=n*e*Math.sin(r)/o,c[2]=e*t*Math.sin(a)/o,c[3]=Math.cos(r)*Math.cos(a)-Math.cos(i),c[3]/=Math.sin(r)*Math.sin(a),c[4]=Math.cos(a)*Math.cos(i)-Math.cos(r),c[4]/=Math.sin(a)*Math.sin(i),c[5]=Math.cos(i)*Math.cos(r)-Math.cos(a),c[5]/=Math.sin(i)*Math.sin(r),c}getBMatrix(e,t,n){const[i,r,a,o,c,l]=this.latticeParameters(e,t,n),u=this.unitCellVolume(i,r,a,o,c,l),h=this.reciprocalLatticeConstants(i,r,a,o,c,l,u),f=Math.sqrt(1-h[3]*h[3]),p=new Array(9);p[0]=1/i,p[1]=-Math.cos(l)/(Math.sin(l)*i),p[2]=-(Math.cos(l)*Math.sin(c)*h[3]+Math.cos(c)*Math.sin(l)),p[2]/=Math.sin(c)*f*Math.sin(l)*i,p[3]=0,p[4]=1/(Math.sin(l)*r),p[5]=h[3]/(f*Math.sin(l)*r),p[6]=0,p[7]=0,p[8]=1/(Math.sin(c)*f*a);const v=new xe;return v.set(p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8]),v}getAllCrystals(){const e=this.getAllCrystalData();if(!e){this.crystalSummary=null;return}const t=[];for(let a=0;a<e.length;a++){const o=e[a];var n=o.real_space_a;n=new P(n[0],n[1],n[2]);var i=o.real_space_b;i=new P(i[0],i[1],i[2]);var r=o.real_space_c;r=new P(r[0],r[1],r[2]);const c=this.getBMatrix(n.clone(),i.clone(),r.clone()),l=new xe;l.set(n.x,n.y,n.z,i.x,i.y,i.z,r.x,r.y,r.z),l.invert();const u=l.elements;l.transpose();const h=new xe;h.multiplyMatrices(c.clone().invert(),l.clone());const f=[new P(u[0],u[3],u[6]),new P(u[1],u[4],u[7]),new P(u[2],u[5],u[8])];t.push({U:h,B:c,UB:l,reciprocalCell:f})}return t}getCrystal(e){const t=this.getCrystalData(e);if(!t){this.crystalSummary=null;return}var n=t.real_space_a;n=new P(n[0],n[1],n[2]);var i=t.real_space_b;i=new P(i[0],i[1],i[2]);var r=t.real_space_c;r=new P(r[0],r[1],r[2]);const a=this.getBMatrix(n.clone(),i.clone(),r.clone()),o=new xe().set(n.x,n.y,n.z,i.x,i.y,i.z,r.x,r.y,r.z).invert(),c=o.elements;o.transpose();const l=new xe;l.multiplyMatrices(a.clone().invert(),o.clone());const u=[new P(c[0],c[3],c[6]),new P(c[1],c[4],c[7]),new P(c[2],c[5],c[8])];return{U:l,B:a,UB:o,reciprocalCell:u,exptID:e}}getCrystalRLV(e){return this.experiments[e].crystal.reciprocalCell}getAllCrystalRLVs(){if(!this.crystals)return null;const e=[];for(let t=0;t<this.crystals.length;t++)e.push([this.crystals[t].reciprocalCell[0].clone(),this.crystals[t].reciprocalCell[1].clone(),this.crystals[t].reciprocalCell[2].clone()]);return e}getAllCrystalRCVs(){if(!this.crystals)return null;const e=[];for(let t=0;t<this.crystals.length;t++){const n=this.crystals[t].B.clone().elements;e.push([new P(n[0],n[3],n[6]),new P(n[1],n[4],n[7]),new P(n[2],n[5],n[8])])}return e}getCrystalU(e){return this.crystals[e].U.clone()}getCrystalSummary(e){if(this.experiments!==void 0&&this.experiments[e]!==void 0)return this.experiments[e].crystalSummary!==void 0?this.experiments[e].crystalSummary:null;const t=this.getCrystalData(e);if(!t)return null;const n=t.real_space_a,i=new P(n[0],n[1],n[2]),r=t.real_space_b,a=new P(r[0],r[1],r[2]),o=t.real_space_c,c=new P(o[0],o[1],o[2]),l=i.length().toFixed(3),u=a.length().toFixed(3),h=c.length().toFixed(3),f=(a.angleTo(c)*(180/Math.PI)).toFixed(3),p=(i.angleTo(c)*(180/Math.PI)).toFixed(3),v=(i.angleTo(a)*(180/Math.PI)).toFixed(3);var m="a: "+l+" b: "+u+" c: "+h;return m+=" alpha: "+f+" beta: "+p+" gamma: "+v,m+=" ("+t.space_group_hall_symbol+")",m}getDetectorOrientationData(e){const t=this.exptJSON.experiment[e].detector;return this.exptJSON.detector[t].hierarchy}getDetectorPanelDataByIdx(e,t){return this.experiments[e].detectorPanelData[t]}getBeamDirection(e){const t=this.getBeamData(e);return new P(t.direction[0],t.direction[1],t.direction[2])}getNumDetectorPanels(e){return this.experiments[e].detectorPanelData.length}getScanData(e){if(!("scan"in this.exptJSON))return null;var t=this.exptJSON.experiment[e].scan;return this.exptJSON.scan[t]}getScan(e){const t=this.getScanData(e);if(!t||!("oscillation"in t))return null;const n=new we(t.oscillation[0]*Math.PI/180,t.oscillation[1]*Math.PI/180),i=new we(t.image_range[0]-1,t.image_range[1]-1);return{oscillation:n,imageRange:i}}getAngleFromFrame(e,t){if(e===null)return null;const n=e.oscillation,i=e.imageRange;return n.x+(t-i.x)*n.y}addAnglesToReflections(e){for(var t=0;t<e.length;t++){var n=this.experiments[e[t].exptID].scan;if("xyzObs"in e[t]){var i;n==null?i=0:i=this.getAngleFromFrame(n,e[t].xyzObs[2]),e[t].angleObs=i}if("xyzCal"in e[t]){var r;n===null?r=0:r=this.getAngleFromFrame(n,e[t].xyzCal[2]),e[t].angleCal=r}}return e}getExptIDs(){for(var e=[],t=0;t<this.experiments.length;t++)e.push(t);return e}getExptLabels(){for(var e=window.navigator.oscpu?window.navigator.oscpu.indexOf("Windows")>-1:window.navigator.platform.indexOf("Win")>-1,t=[],n=0;n<this.experiments.length;n++){var i=this.experiments[n].imageFilename;e?t.push(i.split("\\").pop()):t.push(i.split("/").pop())}return t}}function M0(s){return"channel"in s&&s.channel=="experiment_planner"}const S0="ws://127.0.0.1:50010/",y0={background:133143,sample:16643811,reflectionObsIndexed:15158332,reflectionCal:[9894267,7715837,12548086,1305289,16756860,16765407,13696766,16777092,16777215,16749576,129478,11468140,16646146,10030923,7918006,16775447,16713609,13959167,6936655,5680727],highlight:16777215,beam:16777215,reciprocalCell:16777215,RLVLabels:"white"};document.addEventListener("DOMContentLoaded",function(){window.viewer=new An(new So,new Za,new Za,!1,y0),window.viewer.serverWS=new WebSocket(S0),window.viewer.serverWS.onopen=()=>{console.log("Experiment planner opened Connection to server"),window.viewer.serverWS.send(JSON.stringify({channel:"server",command:"record_connection",id:"experiment_planner"}))},window.viewer.serverWS.onclose=()=>{console.log("Experiment planner closed Connection to server")},window.viewer.serverWS.onmessage=s=>{console.log("msg received",s.data);const e=JSON.parse(s.data);if(!M0(e))return;const t=e.command;switch(t){case"update_experiment":"reindexed_cell"in e?window.viewer.addExperimentFromJSONString(e,!1,!0):window.viewer.addExperimentFromJSONString(e);break;case"add_exp_orientation":window.viewer.addExptOrientation(e);break;case"clear_experiment":window.viewer.clearExperiment();break;case"update_predicted_reflection_table":delete e.command,delete e.channel,window.viewer.addPredictedReflectionsFromData(e);break;case"update_observed_reflection_table":delete e.command,delete e.channel,window.viewer.addObservedReflectionsFromData(e);break;case"update_params":"phi"in e&&window.viewer.updateGoniometerPhi(e.phi);break;case"get_next_best_orientation":window.viewer.serverWS.send(JSON.stringify({channel:"server",command:"get_next_best_planner_orientation",orientations:e.orientations}));break;case"store_active_reflections":window.viewer.storeActiveReflections();break;case"clear_predicted_reflections":window.viewer.clearAllPredictedReflections();break;case"display_error":console.assert("error"in e),window.viewer.displayErrorText(e.error);break;case"toggle_sidebar":window.viewer.toggleSidebar();break;default:console.warn("Unrecognised command ",t)}},v0()});
