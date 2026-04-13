var Vm=Object.defineProperty;var Hm=(i,e,t)=>e in i?Vm(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var _i=(i,e,t)=>Hm(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ko="172",$r={ROTATE:0,DOLLY:1,PAN:2},qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gm=0,iu=1,Wm=2,vd=1,Xm=2,ii=3,ki=0,Qt=1,Bn=2,Di=0,Kr=1,ru=2,su=3,au=4,qm=5,er=100,Ym=101,Zm=102,jm=103,$m=104,Km=200,Jm=201,Qm=202,e_=203,Ql=204,ec=205,t_=206,n_=207,i_=208,r_=209,s_=210,a_=211,o_=212,l_=213,c_=214,tc=0,nc=1,ic=2,rs=3,rc=4,sc=5,ac=6,oc=7,yd=0,h_=1,u_=2,Pi=0,f_=1,d_=2,p_=3,m_=4,__=5,g_=6,x_=7,Sd=300,ss=301,as=302,lc=303,cc=304,zo=306,hc=1e3,nr=1001,uc=1002,On=1003,v_=1004,wa=1005,Wn=1006,$o=1007,ir=1008,ui=1009,bd=1010,Md=1011,Zs=1012,fh=1013,fr=1014,li=1015,fa=1016,dh=1017,ph=1018,os=1020,wd=35902,Ed=1021,Td=1022,Fn=1023,Ad=1024,Rd=1025,Jr=1026,ls=1027,Cd=1028,mh=1029,Dd=1030,_h=1031,gh=1033,oo=33776,lo=33777,co=33778,ho=33779,fc=35840,dc=35841,pc=35842,mc=35843,_c=36196,gc=37492,xc=37496,vc=37808,yc=37809,Sc=37810,bc=37811,Mc=37812,wc=37813,Ec=37814,Tc=37815,Ac=37816,Rc=37817,Cc=37818,Dc=37819,Pc=37820,Ic=37821,uo=36492,Lc=36494,Uc=36495,Pd=36283,Fc=36284,Oc=36285,Nc=36286,y_=3200,S_=3201,b_=0,M_=1,wi="",Mn="srgb",cs="srgb-linear",yo="linear",tt="srgb",wr=7680,ou=519,w_=512,E_=513,T_=514,Id=515,A_=516,R_=517,C_=518,D_=519,So=35044,lu="300 es",ci=2e3,bo=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fo=Math.PI/180,kc=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Be(i,e,t){return Math.max(e,Math.min(t,i))}function P_(i,e){return(i%e+e)%e}function Ko(i,e,t){return(1-t)*i+t*e}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const I_={DEG2RAD:fo};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class we{constructor(e,t,n,r,s,a,o,c,l){we.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],w=r[1],b=r[4],y=r[7],S=r[2],E=r[5],M=r[8];return s[0]=a*_+o*w+c*S,s[3]=a*m+o*b+c*E,s[6]=a*p+o*y+c*M,s[1]=l*_+h*w+u*S,s[4]=l*m+h*b+u*E,s[7]=l*p+h*y+u*M,s[2]=f*_+d*w+g*S,s[5]=f*m+d*b+g*E,s[8]=f*p+d*y+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,g=t*u+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*l-h*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new we;function Ld(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function L_(){const i=js("canvas");return i.style.display="block",i}const cu={};function Xr(i){i in cu||(cu[i]=!0,console.warn(i))}function U_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function F_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function O_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hu=new we().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new we().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function N_(){const i={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=Qr(r.r),r.g=Qr(r.g),r.b=Qr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?yo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cs]:{primaries:e,whitePoint:n,transfer:yo,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),i}const Ze=N_();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Er;class k_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Er===void 0&&(Er=js("canvas")),Er.width=e.width,Er.height=e.height;const n=Er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=hi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z_=0;class Ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qo(r[a].image)):s.push(Qo(r[a]))}else s=Qo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?k_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B_=0;class Vt extends vr{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=nr,r=nr,s=Wn,a=ir,o=Fn,c=ui,l=Vt.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Ii(),this.name="",this.source=new Ud(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new we,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hc:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hc:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Sd;Vt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,y=(d+1)/2,S=(p+1)/2,E=(h+f)/4,M=(u+_)/4,C=(g+m)/4;return b>y&&b>S?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=E/n,s=M/n):y>S?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=E/r,s=C/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=M/s,r=C/s),this.set(n,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(f-h)/w,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V_ extends vr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Vt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Ud(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends V_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fd extends Vt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H_ extends Vt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-o;const p=c*f+l*d+h*g+u*_,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const S=Math.sqrt(b),E=Math.atan2(S,p*w);m=Math.sin(m*E)/S,o=Math.sin(o*E)/S}const y=o*w;if(c=c*m+f*y,l=l*m+d*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),u=o(s/2),f=c(n/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new P,fu=new pr;class vs{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(s,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),Ta.subVectors(this.max,Es),Tr.subVectors(e.a,Es),Ar.subVectors(e.b,Es),Rr.subVectors(e.c,Es),gi.subVectors(Ar,Tr),xi.subVectors(Rr,Ar),Wi.subVectors(Tr,Rr);let t=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Wi.z,Wi.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Wi.z,0,-Wi.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Wi.y,Wi.x,0];return!tl(t,Tr,Ar,Rr,Ta)||(t=[1,0,0,0,1,0,0,0,1],!tl(t,Tr,Ar,Rr,Ta))?!1:(Aa.crossVectors(gi,xi),t=[Aa.x,Aa.y,Aa.z],tl(t,Tr,Ar,Rr,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new P,new P,new P,new P,new P,new P,new P,new P],Pn=new P,Ea=new vs,Tr=new P,Ar=new P,Rr=new P,gi=new P,xi=new P,Wi=new P,Es=new P,Ta=new P,Aa=new P,Xi=new P;function tl(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Xi.fromArray(i,s);const o=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),c=e.dot(Xi),l=t.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const G_=new vs,Ts=new P,nl=new P;class da{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):G_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ts,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(nl)),this.expandByPoint(Ts.copy(e.center).sub(nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new P,il=new P,Ra=new P,vi=new P,rl=new P,Ca=new P,sl=new P;class pa{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){il.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(il);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ra),o=vi.dot(this.direction),c=-vi.dot(Ra),l=vi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(il).addScaledVector(Ra,f),d}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),r=Jn.dot(Jn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,r,s){rl.subVectors(t,e),Ca.subVectors(n,e),sl.crossVectors(rl,Ca);let a=this.direction.dot(sl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,e);const c=o*this.direction.dot(Ca.crossVectors(vi,Ca));if(c<0)return null;const l=o*this.direction.dot(rl.cross(vi));if(l<0||c+l>a)return null;const h=-o*vi.dot(sl);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,r,s,a,o,c,l,h,u,f,d,g,_,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,u,f,d,g,_,m)}set(e,t,n,r,s,a,o,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),a=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W_,e,X_)}lookAt(e,t,n){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),yi.crossVectors(n,ln),yi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),yi.crossVectors(n,ln)),yi.normalize(),Da.crossVectors(ln,yi),r[0]=yi.x,r[4]=Da.x,r[8]=ln.x,r[1]=yi.y,r[5]=Da.y,r[9]=ln.y,r[2]=yi.z,r[6]=Da.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],b=n[7],y=n[11],S=n[15],E=r[0],M=r[4],C=r[8],x=r[12],v=r[1],R=r[5],z=r[9],k=r[13],G=r[2],Y=r[6],B=r[10],$=r[14],F=r[3],K=r[7],te=r[11],se=r[15];return s[0]=a*E+o*v+c*G+l*F,s[4]=a*M+o*R+c*Y+l*K,s[8]=a*C+o*z+c*B+l*te,s[12]=a*x+o*k+c*$+l*se,s[1]=h*E+u*v+f*G+d*F,s[5]=h*M+u*R+f*Y+d*K,s[9]=h*C+u*z+f*B+d*te,s[13]=h*x+u*k+f*$+d*se,s[2]=g*E+_*v+m*G+p*F,s[6]=g*M+_*R+m*Y+p*K,s[10]=g*C+_*z+m*B+p*te,s[14]=g*x+_*k+m*$+p*se,s[3]=w*E+b*v+y*G+S*F,s[7]=w*M+b*R+y*Y+S*K,s[11]=w*C+b*z+y*B+S*te,s[15]=w*x+b*k+y*$+S*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*u-r*l*u-s*o*f+n*l*f+r*o*d-n*c*d)+_*(+t*c*d-t*l*f+s*a*f-r*a*d+r*l*h-s*c*h)+m*(+t*l*u-t*o*d-s*a*u+n*a*d+s*o*h-n*l*h)+p*(-r*o*h-t*c*u+t*o*f+r*a*u-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=u*m*l-_*f*l+_*c*d-o*m*d-u*c*p+o*f*p,b=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,y=h*_*l-g*u*l+g*o*d-a*_*d-h*o*p+a*u*p,S=g*u*c-h*_*c-g*o*f+a*_*f+h*o*m-a*u*m,E=t*w+n*b+r*y+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=w*M,e[1]=(_*f*s-u*m*s-_*r*d+n*m*d+u*r*p-n*f*p)*M,e[2]=(o*m*s-_*c*s+_*r*l-n*m*l-o*r*p+n*c*p)*M,e[3]=(u*c*s-o*f*s-u*r*l+n*f*l+o*r*d-n*c*d)*M,e[4]=b*M,e[5]=(h*m*s-g*f*s+g*r*d-t*m*d-h*r*p+t*f*p)*M,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*M,e[7]=(a*f*s-h*c*s+h*r*l-t*f*l-a*r*d+t*c*d)*M,e[8]=y*M,e[9]=(g*u*s-h*_*s-g*n*d+t*_*d+h*n*p-t*u*p)*M,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*p+t*o*p)*M,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*d-t*o*d)*M,e[12]=S*M,e[13]=(h*_*r-g*u*r+g*n*f-t*_*f-h*n*m+t*u*m)*M,e[14]=(g*o*r-a*_*r-g*n*c+t*_*c+a*n*m-t*o*m)*M,e[15]=(a*u*r-h*o*r+h*n*c-t*u*c-a*n*f+t*o*f)*M,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,g=s*u,_=a*h,m=a*u,p=o*u,w=c*l,b=c*h,y=c*u,S=n.x,E=n.y,M=n.z;return r[0]=(1-(_+p))*S,r[1]=(d+y)*S,r[2]=(g-b)*S,r[3]=0,r[4]=(d-y)*E,r[5]=(1-(f+p))*E,r[6]=(m+w)*E,r[7]=0,r[8]=(g+b)*M,r[9]=(m-w)*M,r[10]=(1-(f+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Cr.set(r[0],r[1],r[2]).length();const a=Cr.set(r[4],r[5],r[6]).length(),o=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const l=1/s,h=1/a,u=1/o;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,t.setFromRotationMatrix(In),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=ci){const c=this.elements,l=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r);let d,g;if(o===ci)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===bo)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ci){const c=this.elements,l=1/(t-e),h=1/(n-r),u=1/(a-s),f=(t+e)*l,d=(n+r)*h;let g,_;if(o===ci)g=(a+s)*u,_=-2*u;else if(o===bo)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Cr=new P,In=new lt,W_=new P(0,0,0),X_=new P(1,1,1),yi=new P,Da=new P,ln=new P,du=new lt,pu=new pr;class fi{constructor(e=0,t=0,n=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pu.setFromEuler(this),this.setFromQuaternion(pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q_=0;const mu=new P,Dr=new pr,Qn=new lt,Pa=new P,As=new P,Y_=new P,Z_=new pr,_u=new P(1,0,0),gu=new P(0,1,0),xu=new P(0,0,1),vu={type:"added"},j_={type:"removed"},Pr={type:"childadded",child:null},al={type:"childremoved",child:null};class Ht extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new P,t=new fi,n=new pr,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new we}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(_u,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(xu,e)}translateOnAxis(e,t){return mu.copy(e).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_u,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(xu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pa.copy(e):Pa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(As,Pa,this.up):Qn.lookAt(Pa,As,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vu),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j_),al.child=e,this.dispatchEvent(al),al.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vu),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,Y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Z_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new P(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new P,ei=new P,ol=new P,ti=new P,Ir=new P,Lr=new P,yu=new P,ll=new P,cl=new P,hl=new P,ul=new yt,fl=new yt,dl=new yt;class wn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ln.subVectors(e,t),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ln.subVectors(r,t),ei.subVectors(n,t),ol.subVectors(e,t);const a=Ln.dot(Ln),o=Ln.dot(ei),c=Ln.dot(ol),l=ei.dot(ei),h=ei.dot(ol),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return ul.setScalar(0),fl.setScalar(0),dl.setScalar(0),ul.fromBufferAttribute(e,t),fl.fromBufferAttribute(e,n),dl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ul,s.x),a.addScaledVector(fl,s.y),a.addScaledVector(dl,s.z),a}static isFrontFacing(e,t,n,r){return Ln.subVectors(n,t),ei.subVectors(e,t),Ln.cross(ei).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Ln.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ir.subVectors(r,n),Lr.subVectors(s,n),ll.subVectors(e,n);const c=Ir.dot(ll),l=Lr.dot(ll);if(c<=0&&l<=0)return t.copy(n);cl.subVectors(e,r);const h=Ir.dot(cl),u=Lr.dot(cl);if(h>=0&&u<=h)return t.copy(r);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ir,a);hl.subVectors(e,s);const d=Ir.dot(hl),g=Lr.dot(hl);if(g>=0&&d<=g)return t.copy(s);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Lr,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return yu.subVectors(s,r),o=(u-h)/(u-h+(d-g)),t.copy(r).addScaledVector(yu,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(Ir,a).addScaledVector(Lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function pl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=P_(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=pl(a,s,e+1/3),this.g=pl(a,s,e),this.b=pl(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const n=Od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return Ze.fromWorkingColorSpace(kt.copy(this),e),Math.round(Be(kt.r*255,0,255))*65536+Math.round(Be(kt.g*255,0,255))*256+Math.round(Be(kt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,r=kt.g,s=kt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Mn){Ze.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,r=kt.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Ia);const n=Ko(Si.h,Ia.h,t),r=Ko(Si.s,Ia.s,t),s=Ko(Si.l,Ia.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ve;Ve.NAMES=Od;let $_=0;class yr extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Kr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=ec,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ql&&(n.blendSrc=this.blendSrc),this.blendDst!==ec&&(n.blendDst=this.blendDst),this.blendEquation!==er&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bs extends yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new P,La=new Ee;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=So,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==So&&(e.usage=this.usage),e}}class Nd extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kd extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class en extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let K_=0;const Sn=new lt,ml=new Ht,Ur=new P,cn=new vs,Rs=new vs,Ct=new P;class Tt extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?kd:Nd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new we().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new en(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(cn.min,Rs.min),cn.expandByPoint(Ct),Ct.addVectors(cn.max,Rs.max),cn.expandByPoint(Ct)):(cn.expandByPoint(Rs.min),cn.expandByPoint(Rs.max))}cn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ct.fromBufferAttribute(o,l),c&&(Ur.fromBufferAttribute(e,l),Ct.add(Ur)),r=Math.max(r,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new P,c[C]=new P;const l=new P,h=new P,u=new P,f=new Ee,d=new Ee,g=new Ee,_=new P,m=new P;function p(C,x,v){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,v),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,v),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),o[C].add(_),o[x].add(_),o[v].add(_),c[C].add(m),c[x].add(m),c[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,x=w.length;C<x;++C){const v=w[C],R=v.start,z=v.count;for(let k=R,G=R+z;k<G;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new P,y=new P,S=new P,E=new P;function M(C){S.fromBufferAttribute(r,C),E.copy(S);const x=o[C];b.copy(x),b.sub(S.multiplyScalar(S.dot(x))).normalize(),y.crossVectors(E,x);const R=y.dot(c[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,R)}for(let C=0,x=w.length;C<x;++C){const v=w[C],R=v.start,z=v.count;for(let k=R,G=R+z;k<G;k+=3)M(e.getX(k+0)),M(e.getX(k+1)),M(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new P,s=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new xt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Su=new lt,qi=new pa,Ua=new da,bu=new P,Fa=new P,Oa=new P,Na=new P,_l=new P,ka=new P,Mu=new P,za=new P;class dn extends Ht{constructor(e=new Tt,t=new Bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ka.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(_l.fromBufferAttribute(u,e),a?ka.addScaledVector(_l,h):ka.addScaledVector(_l.sub(t),h))}t.add(ka)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),qi.copy(e.ray).recast(e.near),!(Ua.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Ua,bu)===null||qi.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(Su.copy(s).invert(),qi.copy(e.ray).applyMatrix4(Su),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=w,S=b;y<S;y+=3){const E=o.getX(y),M=o.getX(y+1),C=o.getX(y+2);r=Ba(this,p,e,n,l,h,u,E,M,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const w=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);r=Ba(this,a,e,n,l,h,u,w,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),b=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=w,S=b;y<S;y+=3){const E=y,M=y+1,C=y+2;r=Ba(this,p,e,n,l,h,u,E,M,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const w=m,b=m+1,y=m+2;r=Ba(this,a,e,n,l,h,u,w,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function J_(i,e,t,n,r,s,a,o){let c;if(e.side===Qt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===ki,o),c===null)return null;za.copy(o),za.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(za);return l<t.near||l>t.far?null:{distance:l,point:za.clone(),object:i}}function Ba(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Fa),i.getVertexPosition(c,Oa),i.getVertexPosition(l,Na);const h=J_(i,e,t,n,Fa,Oa,Na,Mu);if(h){const u=new P;wn.getBarycoord(Mu,Fa,Oa,Na,u),r&&(h.uv=wn.getInterpolatedAttribute(r,o,c,l,u,new Ee)),s&&(h.uv1=wn.getInterpolatedAttribute(s,o,c,l,u,new Ee)),a&&(h.normal=wn.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new P,materialIndex:0};wn.getNormal(Fa,Oa,Na,f.normal),h.face=f,h.barycoord=u}return h}class ma extends Tt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(u,2));function g(_,m,p,w,b,y,S,E,M,C,x){const v=y/M,R=S/C,z=y/2,k=S/2,G=E/2,Y=M+1,B=C+1;let $=0,F=0;const K=new P;for(let te=0;te<B;te++){const se=te*R-k;for(let W=0;W<Y;W++){const ae=W*v-z;K[_]=ae*w,K[m]=se*b,K[p]=G,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=E>0?1:-1,h.push(K.x,K.y,K.z),u.push(W/M),u.push(1-te/C),$+=1}}for(let te=0;te<C;te++)for(let se=0;se<M;se++){const W=f+se+Y*te,ae=f+se+Y*(te+1),L=f+(se+1)+Y*(te+1),q=f+(se+1)+Y*te;c.push(W,ae,q),c.push(ae,L,q),F+=6}o.addGroup(d,F,x),d+=F,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=hs(i[t]);for(const r in n)e[r]=n[r]}return e}function Q_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const eg={clone:hs,merge:qt};var tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bd extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new P,wu=new Ee,Eu=new Ee;class Un extends Bd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kc*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Eu),t.subVectors(Eu,wu)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fr=-90,Or=1;class ig extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(Fr,Or,e,t);r.layers=this.layers,this.add(r);const s=new Un(Fr,Or,e,t);s.layers=this.layers,this.add(s);const a=new Un(Fr,Or,e,t);a.layers=this.layers,this.add(a);const o=new Un(Fr,Or,e,t);o.layers=this.layers,this.add(o);const c=new Un(Fr,Or,e,t);c.layers=this.layers,this.add(c);const l=new Un(Fr,Or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vd extends Vt{constructor(e,t,n,r,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rg extends dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Vd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ma(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Di});s.uniforms.tEquirect.value=t;const a=new dn(r,s),o=t.minFilter;return t.minFilter===ir&&(t.minFilter=Wn),new ig(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class vh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new vh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sg extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ag{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=So,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new P;class Mo{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yh extends yr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Nr;const Cs=new P,kr=new P,zr=new P,Br=new Ee,Ds=new Ee,Hd=new lt,Va=new P,Ps=new P,Ha=new P,Tu=new Ee,gl=new Ee,Au=new Ee;class Gd extends Ht{constructor(e=new yh){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ag(t,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new Mo(n,3,0,!1)),Nr.setAttribute("uv",new Mo(n,2,3,!1))}this.geometry=Nr,this.material=e,this.center=new Ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),kr.setFromMatrixScale(this.matrixWorld),Hd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&kr.multiplyScalar(-zr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Ga(Va.set(-.5,-.5,0),zr,a,kr,r,s),Ga(Ps.set(.5,-.5,0),zr,a,kr,r,s),Ga(Ha.set(.5,.5,0),zr,a,kr,r,s),Tu.set(0,0),gl.set(1,0),Au.set(1,1);let o=e.ray.intersectTriangle(Va,Ps,Ha,!1,Cs);if(o===null&&(Ga(Ps.set(-.5,.5,0),zr,a,kr,r,s),gl.set(0,1),o=e.ray.intersectTriangle(Va,Ha,Ps,!1,Cs),o===null))return;const c=e.ray.origin.distanceTo(Cs);c<e.near||c>e.far||t.push({distance:c,point:Cs.clone(),uv:wn.getInterpolation(Cs,Va,Ps,Ha,Tu,gl,Au,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ga(i,e,t,n,r,s){Br.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ds.x=s*Br.x-r*Br.y,Ds.y=r*Br.x+s*Br.y):Ds.copy(Br),i.copy(e),i.x+=Ds.x,i.y+=Ds.y,i.applyMatrix4(Hd)}const xl=new P,og=new P,lg=new we;class Mi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=xl.subVectors(n,t).cross(og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lg.getNormalMatrix(e),r=this.coplanarPoint(xl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new da,Wa=new P;class Wd{constructor(e=new Mi,t=new Mi,n=new Mi,r=new Mi,s=new Mi,a=new Mi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],u=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],w=r[13],b=r[14],y=r[15];if(n[0].setComponents(c-s,f-l,m-d,y-p).normalize(),n[1].setComponents(c+s,f+l,m+d,y+p).normalize(),n[2].setComponents(c+a,f+h,m+g,y+w).normalize(),n[3].setComponents(c-a,f-h,m-g,y-w).normalize(),n[4].setComponents(c-o,f-u,m-_,y-b).normalize(),t===ci)n[5].setComponents(c+o,f+u,m+_,y+b).normalize();else if(t===bo)n[5].setComponents(o,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Wa.x=r.normal.x>0?e.max.x:e.min.x,Wa.y=r.normal.y>0?e.max.y:e.min.y,Wa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wo extends yr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eo=new P,To=new P,Ru=new lt,Is=new pa,Xa=new da,vl=new P,Cu=new P;class yl extends Ht{constructor(e=new Tt,t=new wo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Eo.fromBufferAttribute(t,r-1),To.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Eo.distanceTo(To);e.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(r),Xa.radius+=s,e.ray.intersectsSphere(Xa)===!1)return;Ru.copy(r).invert(),Is.copy(e.ray).applyMatrix4(Ru);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=h.getX(_),w=h.getX(_+1),b=qa(this,e,Is,c,p,w);b&&t.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=qa(this,e,Is,c,_,m);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=qa(this,e,Is,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=qa(this,e,Is,c,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function qa(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(Eo.fromBufferAttribute(a,r),To.fromBufferAttribute(a,s),t.distanceSqToSegment(Eo,To,vl,Cu)>n)return;vl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(vl);if(!(c<e.near||c>e.far))return{distance:c,point:Cu.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}class Sh extends yr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Du=new lt,zc=new pa,Ya=new da,Za=new P;class Xd extends Ht{constructor(e=new Tt,t=new Sh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(r),Ya.radius+=s,e.ray.intersectsSphere(Ya)===!1)return;Du.copy(r).invert(),zc.copy(e.ray).applyMatrix4(Du);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);Za.fromBufferAttribute(u,m),Pu(Za,m,c,r,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Za.fromBufferAttribute(u,g),Pu(Za,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Pu(i,e,t,n,r,s,a){const o=zc.distanceSqToPoint(i);if(o<t){const c=new P;zc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ja extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}class qd extends Vt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yd extends Vt{constructor(e,t,n,r,s,a,o,c,l,h=Jr){if(h!==Jr&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Jr&&(n=fr),n===void 0&&h===ls&&(n=os),super(null,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:On,this.minFilter=c!==void 0?c:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bo extends Tt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const w=p*f-a;for(let b=0;b<l;b++){const y=b*u-s;g.push(y,-w,0),_.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const b=w+l*p,y=w+l*(p+1),S=w+1+l*(p+1),E=w+1+l*p;d.push(b,y,E),d.push(y,S,E)}this.setIndex(d),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(_,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ao extends Tt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new P,f=new P,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const w=[],b=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){const E=S/t;u.x=-e*Math.cos(r+E*s)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(r+E*s)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(E+y,1-b),w.push(l++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){const b=h[p][w+1],y=h[p][w],S=h[p+1][w],E=h[p+1][w+1];(p!==0||a>0)&&d.push(b,y,E),(p!==n-1||c<Math.PI)&&d.push(y,S,E)}this.setIndex(d),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(_,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cg extends yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hg extends yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ug extends wo{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Iu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class fg{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const dg=new fg;class bh{constructor(e){this.manager=e!==void 0?e:dg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bh.DEFAULT_MATERIAL_NAME="__DEFAULT";class pg extends bh{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Iu.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=js("img");function c(){h(),Iu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class mg extends bh{constructor(e){super(e)}load(e,t,n,r){const s=new Vt,a=new pg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Zd extends Bd{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _g extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Lu=new lt;class gg{constructor(e,t,n=0,r=1/0){this.ray=new pa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new xh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(e,t=!0,n=[]){return Bc(e,this,n,t),n.sort(Uu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Bc(e[r],this,n,t);return n.sort(Uu),n}}function Uu(i,e){return i.distance-e.distance}function Bc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Bc(s[a],e,t,!0)}}class Fu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xg extends vr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Ou(i,e,t,n){const r=vg(n);switch(t){case Ed:return i*e;case Ad:return i*e;case Rd:return i*e*2;case Cd:return i*e/r.components*r.byteLength;case mh:return i*e/r.components*r.byteLength;case Dd:return i*e*2/r.components*r.byteLength;case _h:return i*e*2/r.components*r.byteLength;case Td:return i*e*3/r.components*r.byteLength;case Fn:return i*e*4/r.components*r.byteLength;case gh:return i*e*4/r.components*r.byteLength;case oo:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case co:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dc:case mc:return Math.max(i,16)*Math.max(e,8)/4;case fc:case pc:return Math.max(i,8)*Math.max(e,8)/2;case _c:case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case uo:case Lc:case Uc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Pd:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oc:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vg(i){switch(i){case ui:case bd:return{byteLength:1,components:1};case Zs:case Md:case fa:return{byteLength:2,components:1};case dh:case ph:return{byteLength:2,components:4};case fr:case fh:case li:return{byteLength:4,components:1};case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jd(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function yg(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bg=`#ifdef USE_ALPHAHASH
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
#endif`,Mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ag=`#ifdef USE_AOMAP
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
#endif`,Rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cg=`#ifdef USE_BATCHING
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
#endif`,Dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ug=`#ifdef USE_IRIDESCENCE
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
#endif`,Fg=`#ifdef USE_BUMPMAP
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
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wg=`#define PI 3.141592653589793
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
} // validated`,Xg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qg=`vec3 transformedNormal = objectNormal;
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
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qg=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
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
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f0=`uniform bool receiveShadow;
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
#endif`,d0=`#ifdef USE_ENVMAP
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
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x0=`PhysicalMaterial material;
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
#endif`,v0=`struct PhysicalMaterial {
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
}`,y0=`
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
#endif`,S0=`#if defined( RE_IndirectDiffuse )
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D0=`#if defined( USE_POINTS_UV )
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
#endif`,P0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
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
#endif`,N0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
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
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sx=`float getShadowMask() {
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
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ox=`#ifdef USE_SKINNING
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
#endif`,lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cx=`#ifdef USE_SKINNING
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
#endif`,hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,px=`#ifdef USE_TRANSMISSION
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
#endif`,mx=`#ifdef USE_TRANSMISSION
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
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sx=`uniform sampler2D t2D;
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`#include <common>
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
}`,Ax=`#if DEPTH_PACKING == 3200
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
}`,Rx=`#define DISTANCE
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
}`,Cx=`#define DISTANCE
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`uniform float scale;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Ox=`#define LAMBERT
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
}`,Nx=`#define LAMBERT
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
}`,kx=`#define MATCAP
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
}`,zx=`#define MATCAP
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
}`,Bx=`#define NORMAL
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
}`,Vx=`#define NORMAL
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
}`,Hx=`#define PHONG
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
}`,Gx=`#define PHONG
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
}`,Wx=`#define STANDARD
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
}`,Xx=`#define STANDARD
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
}`,qx=`#define TOON
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
}`,Yx=`#define TOON
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
}`,Zx=`uniform float size;
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
}`,jx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,Kx=`uniform vec3 color;
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
}`,Jx=`uniform float rotation;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:Sg,alphahash_pars_fragment:bg,alphamap_fragment:Mg,alphamap_pars_fragment:wg,alphatest_fragment:Eg,alphatest_pars_fragment:Tg,aomap_fragment:Ag,aomap_pars_fragment:Rg,batching_pars_vertex:Cg,batching_vertex:Dg,begin_vertex:Pg,beginnormal_vertex:Ig,bsdfs:Lg,iridescence_fragment:Ug,bumpmap_pars_fragment:Fg,clipping_planes_fragment:Og,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:kg,clipping_planes_vertex:zg,color_fragment:Bg,color_pars_fragment:Vg,color_pars_vertex:Hg,color_vertex:Gg,common:Wg,cube_uv_reflection_fragment:Xg,defaultnormal_vertex:qg,displacementmap_pars_vertex:Yg,displacementmap_vertex:Zg,emissivemap_fragment:jg,emissivemap_pars_fragment:$g,colorspace_fragment:Kg,colorspace_pars_fragment:Jg,envmap_fragment:Qg,envmap_common_pars_fragment:e0,envmap_pars_fragment:t0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:d0,envmap_vertex:i0,fog_vertex:r0,fog_pars_vertex:s0,fog_fragment:a0,fog_pars_fragment:o0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:c0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:u0,lights_pars_begin:f0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:_0,lights_phong_pars_fragment:g0,lights_physical_fragment:x0,lights_physical_pars_fragment:v0,lights_fragment_begin:y0,lights_fragment_maps:S0,lights_fragment_end:b0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:E0,logdepthbuf_vertex:T0,map_fragment:A0,map_pars_fragment:R0,map_particle_fragment:C0,map_particle_pars_fragment:D0,metalnessmap_fragment:P0,metalnessmap_pars_fragment:I0,morphinstance_vertex:L0,morphcolor_vertex:U0,morphnormal_vertex:F0,morphtarget_pars_vertex:O0,morphtarget_vertex:N0,normal_fragment_begin:k0,normal_fragment_maps:z0,normal_pars_fragment:B0,normal_pars_vertex:V0,normal_vertex:H0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:Y0,opaque_fragment:Z0,packing:j0,premultiplied_alpha_fragment:$0,project_vertex:K0,dithering_fragment:J0,dithering_pars_fragment:Q0,roughnessmap_fragment:ex,roughnessmap_pars_fragment:tx,shadowmap_pars_fragment:nx,shadowmap_pars_vertex:ix,shadowmap_vertex:rx,shadowmask_pars_fragment:sx,skinbase_vertex:ax,skinning_pars_vertex:ox,skinning_vertex:lx,skinnormal_vertex:cx,specularmap_fragment:hx,specularmap_pars_fragment:ux,tonemapping_fragment:fx,tonemapping_pars_fragment:dx,transmission_fragment:px,transmission_pars_fragment:mx,uv_pars_fragment:_x,uv_pars_vertex:gx,uv_vertex:xx,worldpos_vertex:vx,background_vert:yx,background_frag:Sx,backgroundCube_vert:bx,backgroundCube_frag:Mx,cube_vert:wx,cube_frag:Ex,depth_vert:Tx,depth_frag:Ax,distanceRGBA_vert:Rx,distanceRGBA_frag:Cx,equirect_vert:Dx,equirect_frag:Px,linedashed_vert:Ix,linedashed_frag:Lx,meshbasic_vert:Ux,meshbasic_frag:Fx,meshlambert_vert:Ox,meshlambert_frag:Nx,meshmatcap_vert:kx,meshmatcap_frag:zx,meshnormal_vert:Bx,meshnormal_frag:Vx,meshphong_vert:Hx,meshphong_frag:Gx,meshphysical_vert:Wx,meshphysical_frag:Xx,meshtoon_vert:qx,meshtoon_frag:Yx,points_vert:Zx,points_frag:jx,shadow_vert:$x,shadow_frag:Kx,sprite_vert:Jx,sprite_frag:Qx},ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new we}},envmap:{envMap:{value:null},envMapRotation:{value:new we},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new we}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new we}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new we},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new we},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new we},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new we}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new we}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new we}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0},uvTransform:{value:new we}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}}},zn={basic:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:qt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:qt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:qt([ce.points,ce.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:qt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:qt([ce.common,ce.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:qt([ce.sprite,ce.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new we},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new we}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:qt([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:qt([ce.lights,ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};zn.physical={uniforms:qt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new we},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new we},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new we},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new we},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new we},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new we},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new we},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new we},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new we},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new we},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new we},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new we}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const $a={r:0,b:0,g:0},Zi=new fi,ev=new lt;function tv(i,e,t,n,r,s,a){const o=new Ve(0);let c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function _(b){let y=!1;const S=g(b);S===null?p(o,c):S&&S.isColor&&(p(S,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,y){const S=g(y);S&&(S.isCubeTexture||S.mapping===zo)?(h===void 0&&(h=new dn(new ma(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:hs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Zi.copy(y.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ev.makeRotationFromEuler(Zi)),h.material.toneMapped=Ze.getTransfer(S.colorSpace)!==tt,(u!==S||f!==S.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new dn(new Bo(2,2),new di({name:"BackgroundMaterial",uniforms:hs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(S.colorSpace)!==tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,y){b.getRGB($a,zd(i)),n.buffers.color.setClear($a.r,$a.g,$a.b,y,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:_,addToRenderList:m,dispose:w}}function nv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(v,R,z,k,G){let Y=!1;const B=u(k,z,R);s!==B&&(s=B,l(s.object)),Y=d(v,k,z,G),Y&&g(v,k,z,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(v,R,z,k),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,R,z){const k=z.wireframe===!0;let G=n[v.id];G===void 0&&(G={},n[v.id]=G);let Y=G[R.id];Y===void 0&&(Y={},G[R.id]=Y);let B=Y[k];return B===void 0&&(B=f(c()),Y[k]=B),B}function f(v){const R=[],z=[],k=[];for(let G=0;G<t;G++)R[G]=0,z[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:k,object:v,attributes:{},index:null}}function d(v,R,z,k){const G=s.attributes,Y=R.attributes;let B=0;const $=z.getAttributes();for(const F in $)if($[F].location>=0){const te=G[F];let se=Y[F];if(se===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),te===void 0||te.attribute!==se||se&&te.data!==se.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function g(v,R,z,k){const G={},Y=R.attributes;let B=0;const $=z.getAttributes();for(const F in $)if($[F].location>=0){let te=Y[F];te===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(te=v.instanceColor));const se={};se.attribute=te,te&&te.data&&(se.data=te.data),G[F]=se,B++}s.attributes=G,s.attributesNum=B,s.index=k}function _(){const v=s.newAttributes;for(let R=0,z=v.length;R<z;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){const z=s.newAttributes,k=s.enabledAttributes,G=s.attributeDivisors;z[v]=1,k[v]===0&&(i.enableVertexAttribArray(v),k[v]=1),G[v]!==R&&(i.vertexAttribDivisor(v,R),G[v]=R)}function w(){const v=s.newAttributes,R=s.enabledAttributes;for(let z=0,k=R.length;z<k;z++)R[z]!==v[z]&&(i.disableVertexAttribArray(z),R[z]=0)}function b(v,R,z,k,G,Y,B){B===!0?i.vertexAttribIPointer(v,R,z,G,Y):i.vertexAttribPointer(v,R,z,k,G,Y)}function y(v,R,z,k){_();const G=k.attributes,Y=z.getAttributes(),B=R.defaultAttributeValues;for(const $ in Y){const F=Y[$];if(F.location>=0){let K=G[$];if(K===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),K!==void 0){const te=K.normalized,se=K.itemSize,W=e.get(K);if(W===void 0)continue;const ae=W.buffer,L=W.type,q=W.bytesPerElement,ie=L===i.INT||L===i.UNSIGNED_INT||K.gpuType===fh;if(K.isInterleavedBufferAttribute){const ee=K.data,he=ee.stride,Se=K.offset;if(ee.isInstancedInterleavedBuffer){for(let Pe=0;Pe<F.locationSize;Pe++)p(F.location+Pe,ee.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Pe=0;Pe<F.locationSize;Pe++)m(F.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Pe=0;Pe<F.locationSize;Pe++)b(F.location+Pe,se/F.locationSize,L,te,he*q,(Se+se/F.locationSize*Pe)*q,ie)}else{if(K.isInstancedBufferAttribute){for(let ee=0;ee<F.locationSize;ee++)p(F.location+ee,K.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ee=0;ee<F.locationSize;ee++)m(F.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let ee=0;ee<F.locationSize;ee++)b(F.location+ee,se/F.locationSize,L,te,se*q,se/F.locationSize*ee*q,ie)}}else if(B!==void 0){const te=B[$];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(F.location,te);break;case 3:i.vertexAttrib3fv(F.location,te);break;case 4:i.vertexAttrib4fv(F.location,te);break;default:i.vertexAttrib1fv(F.location,te)}}}}w()}function S(){C();for(const v in n){const R=n[v];for(const z in R){const k=R[z];for(const G in k)h(k[G].object),delete k[G];delete R[z]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const z in R){const k=R[z];for(const G in k)h(k[G].object),delete k[G];delete R[z]}delete n[v.id]}function M(v){for(const R in n){const z=n[R];if(z[v.id]===void 0)continue;const k=z[v.id];for(const G in k)h(k[G].object),delete k[G];delete z[v.id]}}function C(){x(),a=!0,s!==r&&(s=r,l(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function iv(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function rv(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(M){return!(M!==Fn&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const C=M===fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ui&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==li&&!C)}function c(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:S,maxSamples:E}}function sv(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Mi,o=new we,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const w=s?0:n,b=w*4;let y=p.clippingState||null;c.value=y,y=h(g,f,b,d);for(let S=0;S!==b;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=d;b!==_;++b,y+=4)a.copy(u[b]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function av(i){let e=new WeakMap;function t(a,o){return o===lc?a.mapping=ss:o===cc&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===lc||o===cc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new rg(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Yr=4,Nu=[.125,.215,.35,.446,.526,.582],tr=20,Sl=new Zd,ku=new Ve;let bl=null,Ml=0,wl=0,El=!1;const Ji=(1+Math.sqrt(5))/2,Vr=1/Ji,zu=[new P(-Ji,Vr,0),new P(Ji,Vr,0),new P(-Vr,0,Ji),new P(Vr,0,Ji),new P(0,Ji,-Vr),new P(0,Ji,Vr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){bl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,Ml,wl),this._renderer.xr.enabled=El,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:fa,format:Fn,colorSpace:cs,depthBuffer:!1},r=Vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ov(s)),this._blurMaterial=lv(s,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,n,r){const o=new Un(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ku),h.toneMapping=Pi,h.autoClear=!1;const d=new Bs({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new dn(new ma,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(ku),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):w===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const b=this._cubeSize;Ka(r,w*b,p>2?b:0,b,b),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ss||e.mapping===as;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new dn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ka(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Sl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=zu[(r-s-1)%zu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dn(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*tr-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):tr;m>tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tr}`);const p=[];let w=0;for(let M=0;M<tr;++M){const C=M/_,x=Math.exp(-C*C/2);p.push(x),M===0?w+=x:M<m&&(w+=2*x)}for(let M=0;M<p.length;M++)p[M]=p[M]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const y=this._sizeLods[r],S=3*y*(r>b-Yr?r-b+Yr:0),E=4*(this._cubeSize-y);Ka(t,S,E,3*y,2*y),c.setRenderTarget(t),c.render(u,Sl)}}function ov(i){const e=[],t=[],n=[];let r=i;const s=i-Yr+1+Nu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Yr?c=Nu[a-i+Yr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*d),b=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let E=0;E<d;E++){const M=E%3*2/3-1,C=E>2?0:-1,x=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];w.set(x,_*g*E),b.set(f,m*g*E);const v=[E,E,E,E,E,E];y.set(v,p*g*E)}const S=new Tt;S.setAttribute("position",new xt(w,_)),S.setAttribute("uv",new xt(b,m)),S.setAttribute("faceIndex",new xt(y,p)),e.push(S),r>Yr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vu(i,e,t){const n=new dr(i,e,t);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ka(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function lv(i,e,t){const n=new Float32Array(tr),r=new P(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Hu(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Gu(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Mh(){return`

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
	`}function cv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===lc||c===cc,h=c===ss||c===as;if(l||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Bu(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new Bu(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function hv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Xr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function uv(i,e,t,n){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const w=d.array;_=d.version;for(let b=0,y=w.length;b<y;b+=3){const S=w[b+0],E=w[b+1],M=w[b+2];f.push(S,E,E,M,M,S)}}else if(g!==void 0){const w=g.array;_=g.version;for(let b=0,y=w.length/3-1;b<y;b+=3){const S=b+0,E=b+1,M=b+2;f.push(S,E,E,M,M,S)}}else return;const m=new(Ld(f)?kd:Nd)(f,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function fv(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*a),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*a,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w]*_[w];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function dv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function pv(i,e,t){const n=new WeakMap,r=new yt;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let x=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;d===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*S*4*u),M=new Fd(E,y,S,u);M.type=li,M.needsUpdate=!0;const C=b*4;for(let v=0;v<u;v++){const R=m[v],z=p[v],k=w[v],G=y*S*4*v;for(let Y=0;Y<R.count;Y++){const B=Y*C;d===!0&&(r.fromBufferAttribute(R,Y),E[G+B+0]=r.x,E[G+B+1]=r.y,E[G+B+2]=r.z,E[G+B+3]=0),g===!0&&(r.fromBufferAttribute(z,Y),E[G+B+4]=r.x,E[G+B+5]=r.y,E[G+B+6]=r.z,E[G+B+7]=0),_===!0&&(r.fromBufferAttribute(k,Y),E[G+B+8]=r.x,E[G+B+9]=r.y,E[G+B+10]=r.z,E[G+B+11]=k.itemSize===4?r.w:1)}}f={count:u,texture:M,size:new Ee(y,S)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function mv(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const $d=new Vt,Wu=new Yd(1,1),Kd=new Fd,Jd=new H_,Qd=new Vd,Xu=[],qu=[],Yu=new Float32Array(16),Zu=new Float32Array(9),ju=new Float32Array(4);function ys(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Xu[r];if(s===void 0&&(s=new Float32Array(r),Xu[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vo(i,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _v(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function yv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),Rt(t,n)}}function Sv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Zu.set(n),i.uniformMatrix3fv(this.addr,!1,Zu),Rt(t,n)}}function bv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),Rt(t,n)}}function Mv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function Tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function Av(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function Pv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Wu.compareFunction=Id,s=Wu):s=$d,t.setTexture2D(e||s,r)}function Iv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Jd,r)}function Lv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Qd,r)}function Uv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Kd,r)}function Fv(i){switch(i){case 5126:return _v;case 35664:return gv;case 35665:return xv;case 35666:return vv;case 35674:return yv;case 35675:return Sv;case 35676:return bv;case 5124:case 35670:return Mv;case 35667:case 35671:return wv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return Rv;case 36295:return Cv;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Uv}}function Ov(i,e){i.uniform1fv(this.addr,e)}function Nv(i,e){const t=ys(e,this.size,2);i.uniform2fv(this.addr,t)}function kv(i,e){const t=ys(e,this.size,3);i.uniform3fv(this.addr,t)}function zv(i,e){const t=ys(e,this.size,4);i.uniform4fv(this.addr,t)}function Bv(i,e){const t=ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vv(i,e){const t=ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hv(i,e){const t=ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gv(i,e){i.uniform1iv(this.addr,e)}function Wv(i,e){i.uniform2iv(this.addr,e)}function Xv(i,e){i.uniform3iv(this.addr,e)}function qv(i,e){i.uniform4iv(this.addr,e)}function Yv(i,e){i.uniform1uiv(this.addr,e)}function Zv(i,e){i.uniform2uiv(this.addr,e)}function jv(i,e){i.uniform3uiv(this.addr,e)}function $v(i,e){i.uniform4uiv(this.addr,e)}function Kv(i,e,t){const n=this.cache,r=e.length,s=Vo(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||$d,s[a])}function Jv(i,e,t){const n=this.cache,r=e.length,s=Vo(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Jd,s[a])}function Qv(i,e,t){const n=this.cache,r=e.length,s=Vo(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Qd,s[a])}function ey(i,e,t){const n=this.cache,r=e.length,s=Vo(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Kd,s[a])}function ty(i){switch(i){case 5126:return Ov;case 35664:return Nv;case 35665:return kv;case 35666:return zv;case 35674:return Bv;case 35675:return Vv;case 35676:return Hv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return qv;case 5125:return Yv;case 36294:return Zv;case 36295:return jv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return ey}}class ny{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fv(t.type)}}class iy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ty(t.type)}}class ry{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function $u(i,e){i.seq.push(e),i.map[e.id]=e}function sy(i,e,t){const n=i.name,r=n.length;for(Tl.lastIndex=0;;){const s=Tl.exec(n),a=Tl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){$u(t,l===void 0?new ny(o,i,e):new iy(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ry(o),$u(t,u)),t=u}}}class po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);sy(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Ku(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ay=37297;let oy=0;function ly(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ju=new we;function cy(i){Ze._getMatrix(Ju,Ze.workingColorSpace,i);const e=`mat3( ${Ju.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case yo:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ly(i.getShaderSource(e),a)}else return r}function hy(i,e){const t=cy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uy(i,e){let t;switch(e){case f_:t="Linear";break;case d_:t="Reinhard";break;case p_:t="Cineon";break;case m_:t="ACESFilmic";break;case g_:t="AgX";break;case x_:t="Neutral";break;case __:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ja=new P;function fy(){Ze.getLuminanceCoefficients(Ja);const i=Ja.x.toFixed(4),e=Ja.y.toFixed(4),t=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function py(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function my(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Fs(i){return i!==""}function ef(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _y=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(i){return i.replace(_y,xy)}const gy=new Map;function xy(i,e){let t=Ne[e];if(t===void 0){const n=gy.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vc(t)}const vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(i){return i.replace(vy,yy)}function yy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Sy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function by(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case as:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function My(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function wy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yd:e="ENVMAP_BLENDING_MULTIPLY";break;case h_:e="ENVMAP_BLENDING_MIX";break;case u_:e="ENVMAP_BLENDING_ADD";break}return e}function Ey(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ty(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Sy(t),l=by(t),h=My(t),u=wy(t),f=Ey(t),d=dy(t),g=py(s),_=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),p.length>0&&(p+=`
`)):(m=[rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),p=[rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Pi?uy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,hy("linearToOutputTexel",t.outputColorSpace),fy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),a=Vc(a),a=ef(a,t),a=tf(a,t),o=Vc(o),o=ef(o,t),o=tf(o,t),a=nf(a),o=nf(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+m+a,y=w+p+o,S=Ku(r,r.VERTEX_SHADER,b),E=Ku(r,r.FRAGMENT_SHADER,y);r.attachShader(_,S),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(R){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(S).trim(),G=r.getShaderInfoLog(E).trim();let Y=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,S,E);else{const $=Qu(r,S,"vertex"),F=Qu(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+$+`
`+F)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||G==="")&&(B=!1);B&&(R.diagnostics={runnable:Y,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(S),r.deleteShader(E),C=new po(r,_),x=my(r,_)}let C;this.getUniforms=function(){return C===void 0&&M(this),C};let x;this.getAttributes=function(){return x===void 0&&M(this),x};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,ay)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=E,this}let Ay=0;class Ry{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cy(e),t.set(e,n)),n}}class Cy{constructor(e){this.id=Ay++,this.code=e,this.usedTimes=0}}function Dy(i,e,t,n,r,s,a){const o=new xh,c=new Ry,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,v,R,z,k){const G=z.fog,Y=k.geometry,B=x.isMeshStandardMaterial?z.environment:null,$=(x.isMeshStandardMaterial?t:e).get(x.envMap||B),F=$&&$.mapping===zo?$.image.height:null,K=g[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const te=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,se=te!==void 0?te.length:0;let W=0;Y.morphAttributes.position!==void 0&&(W=1),Y.morphAttributes.normal!==void 0&&(W=2),Y.morphAttributes.color!==void 0&&(W=3);let ae,L,q,ie;if(K){const Qe=zn[K];ae=Qe.vertexShader,L=Qe.fragmentShader}else ae=x.vertexShader,L=x.fragmentShader,c.update(x),q=c.getVertexShaderID(x),ie=c.getFragmentShaderID(x);const ee=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Se=k.isInstancedMesh===!0,Pe=k.isBatchedMesh===!0,et=!!x.map,Ue=!!x.matcap,st=!!$,I=!!x.aoMap,Ft=!!x.lightMap,ke=!!x.bumpMap,Fe=!!x.normalMap,le=!!x.displacementMap,ot=!!x.emissiveMap,Me=!!x.metalnessMap,D=!!x.roughnessMap,T=x.anisotropy>0,V=x.clearcoat>0,J=x.dispersion>0,ne=x.iridescence>0,j=x.sheen>0,be=x.transmission>0,de=T&&!!x.anisotropyMap,ge=V&&!!x.clearcoatMap,Xe=V&&!!x.clearcoatNormalMap,oe=V&&!!x.clearcoatRoughnessMap,xe=ne&&!!x.iridescenceMap,Re=ne&&!!x.iridescenceThicknessMap,Ce=j&&!!x.sheenColorMap,ve=j&&!!x.sheenRoughnessMap,We=!!x.specularMap,Oe=!!x.specularColorMap,at=!!x.specularIntensityMap,U=be&&!!x.transmissionMap,ue=be&&!!x.thicknessMap,Z=!!x.gradientMap,Q=!!x.alphaMap,me=x.alphaTest>0,pe=!!x.alphaHash,Le=!!x.extensions;let pt=Pi;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(pt=i.toneMapping);const Ot={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:ae,fragmentShader:L,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&k._colorsTexture!==null,instancing:Se,instancingColor:Se&&k.instanceColor!==null,instancingMorph:Se&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:cs,alphaToCoverage:!!x.alphaToCoverage,map:et,matcap:Ue,envMap:st,envMapMode:st&&$.mapping,envMapCubeUVHeight:F,aoMap:I,lightMap:Ft,bumpMap:ke,normalMap:Fe,displacementMap:f&&le,emissiveMap:ot,normalMapObjectSpace:Fe&&x.normalMapType===M_,normalMapTangentSpace:Fe&&x.normalMapType===b_,metalnessMap:Me,roughnessMap:D,anisotropy:T,anisotropyMap:de,clearcoat:V,clearcoatMap:ge,clearcoatNormalMap:Xe,clearcoatRoughnessMap:oe,dispersion:J,iridescence:ne,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:j,sheenColorMap:Ce,sheenRoughnessMap:ve,specularMap:We,specularColorMap:Oe,specularIntensityMap:at,transmission:be,transmissionMap:U,thicknessMap:ue,gradientMap:Z,opaque:x.transparent===!1&&x.blending===Kr&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:me,alphaHash:pe,combine:x.combine,mapUv:et&&_(x.map.channel),aoMapUv:I&&_(x.aoMap.channel),lightMapUv:Ft&&_(x.lightMap.channel),bumpMapUv:ke&&_(x.bumpMap.channel),normalMapUv:Fe&&_(x.normalMap.channel),displacementMapUv:le&&_(x.displacementMap.channel),emissiveMapUv:ot&&_(x.emissiveMap.channel),metalnessMapUv:Me&&_(x.metalnessMap.channel),roughnessMapUv:D&&_(x.roughnessMap.channel),anisotropyMapUv:de&&_(x.anisotropyMap.channel),clearcoatMapUv:ge&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(x.sheenRoughnessMap.channel),specularMapUv:We&&_(x.specularMap.channel),specularColorMapUv:Oe&&_(x.specularColorMap.channel),specularIntensityMapUv:at&&_(x.specularIntensityMap.channel),transmissionMapUv:U&&_(x.transmissionMap.channel),thicknessMapUv:ue&&_(x.thicknessMap.channel),alphaMapUv:Q&&_(x.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Fe||T),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(et||Q),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:he,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:W,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:et&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:ot&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bn,flipSided:x.side===Qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Le&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&x.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function p(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)v.push(R),v.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(w(v,x),b(v,x),v.push(i.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function w(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function b(x,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),x.push(o.mask)}function y(x){const v=g[x.type];let R;if(v){const z=zn[v];R=eg.clone(z.uniforms)}else R=x.uniforms;return R}function S(x,v){let R;for(let z=0,k=h.length;z<k;z++){const G=h[z];if(G.cacheKey===v){R=G,++R.usedTimes;break}}return R===void 0&&(R=new Ty(i,v,x,s),h.push(R)),R}function E(x){if(--x.usedTimes===0){const v=h.indexOf(x);h[v]=h[h.length-1],h.pop(),x.destroy()}}function M(x){c.remove(x)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:E,releaseShaderCache:M,programs:h,dispose:C}}function Py(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Iy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function af(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function c(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||Iy),n.length>1&&n.sort(f||sf),r.length>1&&r.sort(f||sf)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function Ly(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new af,i.set(n,[a])):r>=s.length?(a=new af,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Uy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ve};break;case"SpotLight":t={position:new P,direction:new P,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Fy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Oy=0;function Ny(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ky(i){const e=new Uy,t=Fy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const r=new P,s=new lt,a=new lt;function o(l){let h=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,w=0,b=0,y=0,S=0,E=0,M=0;l.sort(Ny);for(let x=0,v=l.length;x<v;x++){const R=l[x],z=R.color,k=R.intensity,G=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*k,u+=z.g*k,f+=z.b*k;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],k);M++}else if(R.isDirectionalLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,F=t.get(R);F.shadowIntensity=$.intensity,F.shadowBias=$.bias,F.shadowNormalBias=$.normalBias,F.shadowRadius=$.radius,F.shadowMapSize=$.mapSize,n.directionalShadow[d]=F,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=R.shadow.matrix,w++}n.directional[d]=B,d++}else if(R.isSpotLight){const B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(z).multiplyScalar(k),B.distance=G,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[_]=B;const $=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,$.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=$.matrix,R.castShadow){const F=t.get(R);F.shadowIntensity=$.intensity,F.shadowBias=$.bias,F.shadowNormalBias=$.normalBias,F.shadowRadius=$.radius,F.shadowMapSize=$.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=Y,y++}_++}else if(R.isRectAreaLight){const B=e.get(R);B.color.copy(z).multiplyScalar(k),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=B,m++}else if(R.isPointLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const $=R.shadow,F=t.get(R);F.shadowIntensity=$.intensity,F.shadowBias=$.bias,F.shadowNormalBias=$.normalBias,F.shadowRadius=$.radius,F.shadowMapSize=$.mapSize,F.shadowCameraNear=$.camera.near,F.shadowCameraFar=$.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=B,g++}else if(R.isHemisphereLight){const B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(k),B.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==w||C.numPointShadows!==b||C.numSpotShadows!==y||C.numSpotMaps!==S||C.numLightProbes!==M)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=M,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=w,C.numPointShadows=b,C.numSpotShadows=y,C.numSpotMaps=S,C.numLightProbes=M,n.version=Oy++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const b=l[p];if(b.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),u++}else if(b.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function of(i){const e=new ky(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function zy(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new of(i),e.set(r,[o])):s>=a.length?(o=new of(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const By=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vy=`uniform sampler2D shadow_pass;
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
}`;function Hy(i,e,t){let n=new Wd;const r=new Ee,s=new Ee,a=new yt,o=new cg({depthPacking:S_}),c=new hg,l={},h=t.maxTextureSize,u={[ki]:Qt,[Qt]:ki,[Bn]:Bn},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:By,fragmentShader:Vy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd;let p=this.type;this.render=function(E,M,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const x=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Di),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=p!==ii&&this.type===ii,G=p===ii&&this.type!==ii;for(let Y=0,B=E.length;Y<B;Y++){const $=E[Y],F=$.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const K=F.getFrameExtents();if(r.multiply(K),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,F.mapSize.y=s.y)),F.map===null||k===!0||G===!0){const se=this.type!==ii?{minFilter:On,magFilter:On}:{};F.map!==null&&F.map.dispose(),F.map=new dr(r.x,r.y,se),F.map.texture.name=$.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const te=F.getViewportCount();for(let se=0;se<te;se++){const W=F.getViewport(se);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),z.viewport(a),F.updateMatrices($,se),n=F.getFrustum(),y(M,C,F.camera,$,this.type)}F.isPointLightShadow!==!0&&this.type===ii&&w(F,C),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,v,R)};function w(E,M){const C=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new dr(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(M,null,C,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(M,null,C,d,_,null)}function b(E,M,C,x){let v=null;const R=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)v=R;else if(v=C.isPointLight===!0?c:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const z=v.uuid,k=M.uuid;let G=l[z];G===void 0&&(G={},l[z]=G);let Y=G[k];Y===void 0&&(Y=v.clone(),G[k]=Y,M.addEventListener("dispose",S)),v=Y}if(v.visible=M.visible,v.wireframe=M.wireframe,x===ii?v.side=M.shadowSide!==null?M.shadowSide:M.side:v.side=M.shadowSide!==null?M.shadowSide:u[M.side],v.alphaMap=M.alphaMap,v.alphaTest=M.alphaTest,v.map=M.map,v.clipShadows=M.clipShadows,v.clippingPlanes=M.clippingPlanes,v.clipIntersection=M.clipIntersection,v.displacementMap=M.displacementMap,v.displacementScale=M.displacementScale,v.displacementBias=M.displacementBias,v.wireframeLinewidth=M.wireframeLinewidth,v.linewidth=M.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=i.properties.get(v);z.light=C}return v}function y(E,M,C,x,v){if(E.visible===!1)return;if(E.layers.test(M.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===ii)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const k=e.update(E),G=E.material;if(Array.isArray(G)){const Y=k.groups;for(let B=0,$=Y.length;B<$;B++){const F=Y[B],K=G[F.materialIndex];if(K&&K.visible){const te=b(E,K,x,v);E.onBeforeShadow(i,E,M,C,k,te,F),i.renderBufferDirect(C,null,k,te,E,F),E.onAfterShadow(i,E,M,C,k,te,F)}}}else if(G.visible){const Y=b(E,G,x,v);E.onBeforeShadow(i,E,M,C,k,Y,null),i.renderBufferDirect(C,null,k,Y,E,null),E.onAfterShadow(i,E,M,C,k,Y,null)}}const z=E.children;for(let k=0,G=z.length;k<G;k++)y(z[k],M,C,x,v)}function S(E){E.target.removeEventListener("dispose",S);for(const C in l){const x=l[C],v=E.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}const Gy={[tc]:nc,[ic]:ac,[rc]:oc,[rs]:sc,[nc]:tc,[ac]:ic,[oc]:rc,[sc]:rs};function Wy(i,e){function t(){let U=!1;const ue=new yt;let Z=null;const Q=new yt(0,0,0,0);return{setMask:function(me){Z!==me&&!U&&(i.colorMask(me,me,me,me),Z=me)},setLocked:function(me){U=me},setClear:function(me,pe,Le,pt,Ot){Ot===!0&&(me*=pt,pe*=pt,Le*=pt),ue.set(me,pe,Le,pt),Q.equals(ue)===!1&&(i.clearColor(me,pe,Le,pt),Q.copy(ue))},reset:function(){U=!1,Z=null,Q.set(-1,0,0,0)}}}function n(){let U=!1,ue=!1,Z=null,Q=null,me=null;return{setReversed:function(pe){if(ue!==pe){const Le=e.get("EXT_clip_control");ue?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const pt=me;me=null,this.setClear(pt)}ue=pe},getReversed:function(){return ue},setTest:function(pe){pe?ee(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(pe){Z!==pe&&!U&&(i.depthMask(pe),Z=pe)},setFunc:function(pe){if(ue&&(pe=Gy[pe]),Q!==pe){switch(pe){case tc:i.depthFunc(i.NEVER);break;case nc:i.depthFunc(i.ALWAYS);break;case ic:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case rc:i.depthFunc(i.EQUAL);break;case sc:i.depthFunc(i.GEQUAL);break;case ac:i.depthFunc(i.GREATER);break;case oc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=pe}},setLocked:function(pe){U=pe},setClear:function(pe){me!==pe&&(ue&&(pe=1-pe),i.clearDepth(pe),me=pe)},reset:function(){U=!1,Z=null,Q=null,me=null,ue=!1}}}function r(){let U=!1,ue=null,Z=null,Q=null,me=null,pe=null,Le=null,pt=null,Ot=null;return{setTest:function(Qe){U||(Qe?ee(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(Qe){ue!==Qe&&!U&&(i.stencilMask(Qe),ue=Qe)},setFunc:function(Qe,Cn,$n){(Z!==Qe||Q!==Cn||me!==$n)&&(i.stencilFunc(Qe,Cn,$n),Z=Qe,Q=Cn,me=$n)},setOp:function(Qe,Cn,$n){(pe!==Qe||Le!==Cn||pt!==$n)&&(i.stencilOp(Qe,Cn,$n),pe=Qe,Le=Cn,pt=$n)},setLocked:function(Qe){U=Qe},setClear:function(Qe){Ot!==Qe&&(i.clearStencil(Qe),Ot=Qe)},reset:function(){U=!1,ue=null,Z=null,Q=null,me=null,pe=null,Le=null,pt=null,Ot=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,b=null,y=null,S=null,E=null,M=new Ve(0,0,0),C=0,x=!1,v=null,R=null,z=null,k=null,G=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(F)[1]),B=$>=1):F.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),B=$>=2);let K=null,te={};const se=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),ae=new yt().fromArray(se),L=new yt().fromArray(W);function q(U,ue,Z,Q){const me=new Uint8Array(4),pe=i.createTexture();i.bindTexture(U,pe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<Z;Le++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ue+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return pe}const ie={};ie[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(rs),ke(!1),Fe(iu),ee(i.CULL_FACE),I(Di);function ee(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function he(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Se(U,ue){return u[U]!==ue?(i.bindFramebuffer(U,ue),u[U]=ue,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Pe(U,ue){let Z=d,Q=!1;if(U){Z=f.get(ue),Z===void 0&&(Z=[],f.set(ue,Z));const me=U.textures;if(Z.length!==me.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Le=me.length;pe<Le;pe++)Z[pe]=i.COLOR_ATTACHMENT0+pe;Z.length=me.length,Q=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Z)}function et(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Ue={[er]:i.FUNC_ADD,[Ym]:i.FUNC_SUBTRACT,[Zm]:i.FUNC_REVERSE_SUBTRACT};Ue[jm]=i.MIN,Ue[$m]=i.MAX;const st={[Km]:i.ZERO,[Jm]:i.ONE,[Qm]:i.SRC_COLOR,[Ql]:i.SRC_ALPHA,[s_]:i.SRC_ALPHA_SATURATE,[i_]:i.DST_COLOR,[t_]:i.DST_ALPHA,[e_]:i.ONE_MINUS_SRC_COLOR,[ec]:i.ONE_MINUS_SRC_ALPHA,[r_]:i.ONE_MINUS_DST_COLOR,[n_]:i.ONE_MINUS_DST_ALPHA,[a_]:i.CONSTANT_COLOR,[o_]:i.ONE_MINUS_CONSTANT_COLOR,[l_]:i.CONSTANT_ALPHA,[c_]:i.ONE_MINUS_CONSTANT_ALPHA};function I(U,ue,Z,Q,me,pe,Le,pt,Ot,Qe){if(U===Di){_===!0&&(he(i.BLEND),_=!1);return}if(_===!1&&(ee(i.BLEND),_=!0),U!==qm){if(U!==m||Qe!==x){if((p!==er||y!==er)&&(i.blendEquation(i.FUNC_ADD),p=er,y=er),Qe)switch(U){case Kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ru:i.blendFunc(i.ONE,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ru:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case au:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,b=null,S=null,E=null,M.set(0,0,0),C=0,m=U,x=Qe}return}me=me||ue,pe=pe||Z,Le=Le||Q,(ue!==p||me!==y)&&(i.blendEquationSeparate(Ue[ue],Ue[me]),p=ue,y=me),(Z!==w||Q!==b||pe!==S||Le!==E)&&(i.blendFuncSeparate(st[Z],st[Q],st[pe],st[Le]),w=Z,b=Q,S=pe,E=Le),(pt.equals(M)===!1||Ot!==C)&&(i.blendColor(pt.r,pt.g,pt.b,Ot),M.copy(pt),C=Ot),m=U,x=!1}function Ft(U,ue){U.side===Bn?he(i.CULL_FACE):ee(i.CULL_FACE);let Z=U.side===Qt;ue&&(Z=!Z),ke(Z),U.blending===Kr&&U.transparent===!1?I(Di):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Q=U.stencilWrite;o.setTest(Q),Q&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ot(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(U){v!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),v=U)}function Fe(U){U!==Gm?(ee(i.CULL_FACE),U!==R&&(U===iu?i.cullFace(i.BACK):U===Wm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),R=U}function le(U){U!==z&&(B&&i.lineWidth(U),z=U)}function ot(U,ue,Z){U?(ee(i.POLYGON_OFFSET_FILL),(k!==ue||G!==Z)&&(i.polygonOffset(ue,Z),k=ue,G=Z)):he(i.POLYGON_OFFSET_FILL)}function Me(U){U?ee(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function D(U){U===void 0&&(U=i.TEXTURE0+Y-1),K!==U&&(i.activeTexture(U),K=U)}function T(U,ue,Z){Z===void 0&&(K===null?Z=i.TEXTURE0+Y-1:Z=K);let Q=te[Z];Q===void 0&&(Q={type:void 0,texture:void 0},te[Z]=Q),(Q.type!==U||Q.texture!==ue)&&(K!==Z&&(i.activeTexture(Z),K=Z),i.bindTexture(U,ue||ie[U]),Q.type=U,Q.texture=ue)}function V(){const U=te[K];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(U){ae.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ae.copy(U))}function ve(U){L.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),L.copy(U))}function We(U,ue){let Z=l.get(ue);Z===void 0&&(Z=new WeakMap,l.set(ue,Z));let Q=Z.get(U);Q===void 0&&(Q=i.getUniformBlockIndex(ue,U.name),Z.set(U,Q))}function Oe(U,ue){const Q=l.get(ue).get(U);c.get(ue)!==Q&&(i.uniformBlockBinding(ue,Q,U.__bindingPointIndex),c.set(ue,Q))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,te={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,b=null,y=null,S=null,E=null,M=new Ve(0,0,0),C=0,x=!1,v=null,R=null,z=null,k=null,G=null,ae.set(0,0,i.canvas.width,i.canvas.height),L.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:he,bindFramebuffer:Se,drawBuffers:Pe,useProgram:et,setBlending:I,setMaterial:Ft,setFlipSided:ke,setCullFace:Fe,setLineWidth:le,setPolygonOffset:ot,setScissorTest:Me,activeTexture:D,bindTexture:T,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:xe,texImage3D:Re,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:Xe,texStorage3D:oe,texSubImage2D:j,texSubImage3D:be,compressedTexSubImage2D:de,compressedTexSubImage3D:ge,scissor:Ce,viewport:ve,reset:at}}function Xy(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return d?new OffscreenCanvas(D,T):js("canvas")}function _(D,T,V){let J=1;const ne=Me(D);if((ne.width>V||ne.height>V)&&(J=V/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const j=Math.floor(J*ne.width),be=Math.floor(J*ne.height);u===void 0&&(u=g(j,be));const de=T?g(j,be):u;return de.width=j,de.height=be,de.getContext("2d").drawImage(D,0,0,j,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+j+"x"+be+")."),de}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function w(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(D,T,V,J,ne=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let j=T;if(T===i.RED&&(V===i.FLOAT&&(j=i.R32F),V===i.HALF_FLOAT&&(j=i.R16F),V===i.UNSIGNED_BYTE&&(j=i.R8)),T===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.R8UI),V===i.UNSIGNED_SHORT&&(j=i.R16UI),V===i.UNSIGNED_INT&&(j=i.R32UI),V===i.BYTE&&(j=i.R8I),V===i.SHORT&&(j=i.R16I),V===i.INT&&(j=i.R32I)),T===i.RG&&(V===i.FLOAT&&(j=i.RG32F),V===i.HALF_FLOAT&&(j=i.RG16F),V===i.UNSIGNED_BYTE&&(j=i.RG8)),T===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RG8UI),V===i.UNSIGNED_SHORT&&(j=i.RG16UI),V===i.UNSIGNED_INT&&(j=i.RG32UI),V===i.BYTE&&(j=i.RG8I),V===i.SHORT&&(j=i.RG16I),V===i.INT&&(j=i.RG32I)),T===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGB8UI),V===i.UNSIGNED_SHORT&&(j=i.RGB16UI),V===i.UNSIGNED_INT&&(j=i.RGB32UI),V===i.BYTE&&(j=i.RGB8I),V===i.SHORT&&(j=i.RGB16I),V===i.INT&&(j=i.RGB32I)),T===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),V===i.UNSIGNED_INT&&(j=i.RGBA32UI),V===i.BYTE&&(j=i.RGBA8I),V===i.SHORT&&(j=i.RGBA16I),V===i.INT&&(j=i.RGBA32I)),T===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),T===i.RGBA){const be=ne?yo:Ze.getTransfer(J);V===i.FLOAT&&(j=i.RGBA32F),V===i.HALF_FLOAT&&(j=i.RGBA16F),V===i.UNSIGNED_BYTE&&(j=be===tt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(D,T){let V;return D?T===null||T===fr||T===os?V=i.DEPTH24_STENCIL8:T===li?V=i.DEPTH32F_STENCIL8:T===Zs&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===fr||T===os?V=i.DEPTH_COMPONENT24:T===li?V=i.DEPTH_COMPONENT32F:T===Zs&&(V=i.DEPTH_COMPONENT16),V}function S(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==On&&D.minFilter!==Wn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function E(D){const T=D.target;T.removeEventListener("dispose",E),C(T),T.isVideoTexture&&h.delete(T)}function M(D){const T=D.target;T.removeEventListener("dispose",M),v(T)}function C(D){const T=n.get(D);if(T.__webglInit===void 0)return;const V=D.source,J=f.get(V);if(J){const ne=J[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&x(D),Object.keys(J).length===0&&f.delete(V)}n.remove(D)}function x(D){const T=n.get(D);i.deleteTexture(T.__webglTexture);const V=D.source,J=f.get(V);delete J[T.__cacheKey],a.memory.textures--}function v(D){const T=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let ne=0;ne<T.__webglFramebuffer[J].length;ne++)i.deleteFramebuffer(T.__webglFramebuffer[J][ne]);else i.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)i.deleteFramebuffer(T.__webglFramebuffer[J]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=D.textures;for(let J=0,ne=V.length;J<ne;J++){const j=n.get(V[J]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(V[J])}n.remove(D)}let R=0;function z(){R=0}function k(){const D=R;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),R+=1,D}function G(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function Y(D,T){const V=n.get(D);if(D.isVideoTexture&&le(D),D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){const J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(V,D,T);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+T)}function B(D,T){const V=n.get(D);if(D.version>0&&V.__version!==D.version){L(V,D,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+T)}function $(D,T){const V=n.get(D);if(D.version>0&&V.__version!==D.version){L(V,D,T);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+T)}function F(D,T){const V=n.get(D);if(D.version>0&&V.__version!==D.version){q(V,D,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+T)}const K={[hc]:i.REPEAT,[nr]:i.CLAMP_TO_EDGE,[uc]:i.MIRRORED_REPEAT},te={[On]:i.NEAREST,[v_]:i.NEAREST_MIPMAP_NEAREST,[wa]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[$o]:i.LINEAR_MIPMAP_NEAREST,[ir]:i.LINEAR_MIPMAP_LINEAR},se={[w_]:i.NEVER,[D_]:i.ALWAYS,[E_]:i.LESS,[Id]:i.LEQUAL,[T_]:i.EQUAL,[C_]:i.GEQUAL,[A_]:i.GREATER,[R_]:i.NOTEQUAL};function W(D,T){if(T.type===li&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Wn||T.magFilter===$o||T.magFilter===wa||T.magFilter===ir||T.minFilter===Wn||T.minFilter===$o||T.minFilter===wa||T.minFilter===ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,K[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,K[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,K[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,te[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,te[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===On||T.minFilter!==wa&&T.minFilter!==ir||T.type===li&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ae(D,T){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",E));const J=T.source;let ne=f.get(J);ne===void 0&&(ne={},f.set(J,ne));const j=G(T);if(j!==D.__cacheKey){ne[j]===void 0&&(ne[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ne[j].usedTimes++;const be=ne[D.__cacheKey];be!==void 0&&(ne[D.__cacheKey].usedTimes--,be.usedTimes===0&&x(T)),D.__cacheKey=j,D.__webglTexture=ne[j].texture}return V}function L(D,T,V){let J=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=i.TEXTURE_3D);const ne=ae(D,T),j=T.source;t.bindTexture(J,D.__webglTexture,i.TEXTURE0+V);const be=n.get(j);if(j.version!==be.__version||ne===!0){t.activeTexture(i.TEXTURE0+V);const de=Ze.getPrimaries(Ze.workingColorSpace),ge=T.colorSpace===wi?null:Ze.getPrimaries(T.colorSpace),Xe=T.colorSpace===wi||de===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let oe=_(T.image,!1,r.maxTextureSize);oe=ot(T,oe);const xe=s.convert(T.format,T.colorSpace),Re=s.convert(T.type);let Ce=b(T.internalFormat,xe,Re,T.colorSpace,T.isVideoTexture);W(J,T);let ve;const We=T.mipmaps,Oe=T.isVideoTexture!==!0,at=be.__version===void 0||ne===!0,U=j.dataReady,ue=S(T,oe);if(T.isDepthTexture)Ce=y(T.format===ls,T.type),at&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,Ce,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ce,oe.width,oe.height,0,xe,Re,null));else if(T.isDataTexture)if(We.length>0){Oe&&at&&t.texStorage2D(i.TEXTURE_2D,ue,Ce,We[0].width,We[0].height);for(let Z=0,Q=We.length;Z<Q;Z++)ve=We[Z],Oe?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,xe,Re,ve.data):t.texImage2D(i.TEXTURE_2D,Z,Ce,ve.width,ve.height,0,xe,Re,ve.data);T.generateMipmaps=!1}else Oe?(at&&t.texStorage2D(i.TEXTURE_2D,ue,Ce,oe.width,oe.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,xe,Re,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,oe.width,oe.height,0,xe,Re,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Oe&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Ce,We[0].width,We[0].height,oe.depth);for(let Z=0,Q=We.length;Z<Q;Z++)if(ve=We[Z],T.format!==Fn)if(xe!==null)if(Oe){if(U)if(T.layerUpdates.size>0){const me=Ou(ve.width,ve.height,T.format,T.type);for(const pe of T.layerUpdates){const Le=ve.data.subarray(pe*me/ve.data.BYTES_PER_ELEMENT,(pe+1)*me/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,pe,ve.width,ve.height,1,xe,Le)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,oe.depth,xe,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ce,ve.width,ve.height,oe.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,oe.depth,xe,Re,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ce,ve.width,ve.height,oe.depth,0,xe,Re,ve.data)}else{Oe&&at&&t.texStorage2D(i.TEXTURE_2D,ue,Ce,We[0].width,We[0].height);for(let Z=0,Q=We.length;Z<Q;Z++)ve=We[Z],T.format!==Fn?xe!==null?Oe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Ce,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,xe,Re,ve.data):t.texImage2D(i.TEXTURE_2D,Z,Ce,ve.width,ve.height,0,xe,Re,ve.data)}else if(T.isDataArrayTexture)if(Oe){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Ce,oe.width,oe.height,oe.depth),U)if(T.layerUpdates.size>0){const Z=Ou(oe.width,oe.height,T.format,T.type);for(const Q of T.layerUpdates){const me=oe.data.subarray(Q*Z/oe.data.BYTES_PER_ELEMENT,(Q+1)*Z/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,oe.width,oe.height,1,xe,Re,me)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,Re,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,oe.width,oe.height,oe.depth,0,xe,Re,oe.data);else if(T.isData3DTexture)Oe?(at&&t.texStorage3D(i.TEXTURE_3D,ue,Ce,oe.width,oe.height,oe.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,Re,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,oe.width,oe.height,oe.depth,0,xe,Re,oe.data);else if(T.isFramebufferTexture){if(at)if(Oe)t.texStorage2D(i.TEXTURE_2D,ue,Ce,oe.width,oe.height);else{let Z=oe.width,Q=oe.height;for(let me=0;me<ue;me++)t.texImage2D(i.TEXTURE_2D,me,Ce,Z,Q,0,xe,Re,null),Z>>=1,Q>>=1}}else if(We.length>0){if(Oe&&at){const Z=Me(We[0]);t.texStorage2D(i.TEXTURE_2D,ue,Ce,Z.width,Z.height)}for(let Z=0,Q=We.length;Z<Q;Z++)ve=We[Z],Oe?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,xe,Re,ve):t.texImage2D(i.TEXTURE_2D,Z,Ce,xe,Re,ve);T.generateMipmaps=!1}else if(Oe){if(at){const Z=Me(oe);t.texStorage2D(i.TEXTURE_2D,ue,Ce,Z.width,Z.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Re,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ce,xe,Re,oe);m(T)&&p(J),be.__version=j.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function q(D,T,V){if(T.image.length!==6)return;const J=ae(D,T),ne=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+V);const j=n.get(ne);if(ne.version!==j.__version||J===!0){t.activeTexture(i.TEXTURE0+V);const be=Ze.getPrimaries(Ze.workingColorSpace),de=T.colorSpace===wi?null:Ze.getPrimaries(T.colorSpace),ge=T.colorSpace===wi||be===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Xe=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,xe=[];for(let Q=0;Q<6;Q++)!Xe&&!oe?xe[Q]=_(T.image[Q],!0,r.maxCubemapSize):xe[Q]=oe?T.image[Q].image:T.image[Q],xe[Q]=ot(T,xe[Q]);const Re=xe[0],Ce=s.convert(T.format,T.colorSpace),ve=s.convert(T.type),We=b(T.internalFormat,Ce,ve,T.colorSpace),Oe=T.isVideoTexture!==!0,at=j.__version===void 0||J===!0,U=ne.dataReady;let ue=S(T,Re);W(i.TEXTURE_CUBE_MAP,T);let Z;if(Xe){Oe&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,We,Re.width,Re.height);for(let Q=0;Q<6;Q++){Z=xe[Q].mipmaps;for(let me=0;me<Z.length;me++){const pe=Z[me];T.format!==Fn?Ce!==null?Oe?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,pe.width,pe.height,Ce,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,We,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,pe.width,pe.height,Ce,ve,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,We,pe.width,pe.height,0,Ce,ve,pe.data)}}}else{if(Z=T.mipmaps,Oe&&at){Z.length>0&&ue++;const Q=Me(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,We,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(oe){Oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xe[Q].width,xe[Q].height,Ce,ve,xe[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,xe[Q].width,xe[Q].height,0,Ce,ve,xe[Q].data);for(let me=0;me<Z.length;me++){const Le=Z[me].image[Q].image;Oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Le.width,Le.height,Ce,ve,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,We,Le.width,Le.height,0,Ce,ve,Le.data)}}else{Oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,ve,xe[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,Ce,ve,xe[Q]);for(let me=0;me<Z.length;me++){const pe=Z[me];Oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Ce,ve,pe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,We,Ce,ve,pe.image[Q])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),j.__version=ne.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ie(D,T,V,J,ne,j){const be=s.convert(V.format,V.colorSpace),de=s.convert(V.type),ge=b(V.internalFormat,be,de,V.colorSpace),Xe=n.get(T),oe=n.get(V);if(oe.__renderTarget=T,!Xe.__hasExternalTextures){const xe=Math.max(1,T.width>>j),Re=Math.max(1,T.height>>j);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,j,ge,xe,Re,T.depth,0,be,de,null):t.texImage2D(ne,j,ge,xe,Re,0,be,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Fe(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ne,oe.__webglTexture,0,ke(T)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ne,oe.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(D,T,V){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const J=T.depthTexture,ne=J&&J.isDepthTexture?J.type:null,j=y(T.stencilBuffer,ne),be=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=ke(T);Fe(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,j,T.width,T.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,j,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,j,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,D)}else{const J=T.textures;for(let ne=0;ne<J.length;ne++){const j=J[ne],be=s.convert(j.format,j.colorSpace),de=s.convert(j.type),ge=b(j.internalFormat,be,de,j.colorSpace),Xe=ke(T);V&&Fe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,ge,T.width,T.height):Fe(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,ge,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ge,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(T.depthTexture);J.__renderTarget=T,(!J.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y(T.depthTexture,0);const ne=J.__webglTexture,j=ke(T);if(T.depthTexture.format===Jr)Fe(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(T.depthTexture.format===ls)Fe(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Se(D){const T=n.get(D),V=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const J=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){const ne=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),T.__depthDisposeCallback=ne}T.__boundDepthTexture=J}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");he(T.__webglFramebuffer,D)}else if(V){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=i.createRenderbuffer(),ee(T.__webglDepthbuffer[J],D,!1);else{const ne=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ee(T.__webglDepthbuffer,D,!1);else{const J=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(D,T,V){const J=n.get(D);T!==void 0&&ie(J.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Se(D)}function et(D){const T=D.texture,V=n.get(D),J=n.get(T);D.addEventListener("dispose",M);const ne=D.textures,j=D.isWebGLCubeRenderTarget===!0,be=ne.length>1;if(be||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=T.version,a.memory.textures++),j){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let ge=0;ge<T.mipmaps.length;ge++)V.__webglFramebuffer[de][ge]=i.createFramebuffer()}else V.__webglFramebuffer[de]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)V.__webglFramebuffer[de]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(be)for(let de=0,ge=ne.length;de<ge;de++){const Xe=n.get(ne[de]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Fe(D)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const ge=ne[de];V.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[de]);const Xe=s.convert(ge.format,ge.colorSpace),oe=s.convert(ge.type),xe=b(ge.internalFormat,Xe,oe,ge.colorSpace,D.isXRRenderTarget===!0),Re=ke(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,xe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,V.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(V.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),W(i.TEXTURE_CUBE_MAP,T);for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)ie(V.__webglFramebuffer[de][ge],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else ie(V.__webglFramebuffer[de],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let de=0,ge=ne.length;de<ge;de++){const Xe=ne[de],oe=n.get(Xe);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),W(i.TEXTURE_2D,Xe),ie(V.__webglFramebuffer,D,Xe,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(Xe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,J.__webglTexture),W(de,T),T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)ie(V.__webglFramebuffer[ge],D,T,i.COLOR_ATTACHMENT0,de,ge);else ie(V.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,de,0);m(T)&&p(de),t.unbindTexture()}D.depthBuffer&&Se(D)}function Ue(D){const T=D.textures;for(let V=0,J=T.length;V<J;V++){const ne=T[V];if(m(ne)){const j=w(D),be=n.get(ne).__webglTexture;t.bindTexture(j,be),p(j),t.unbindTexture()}}}const st=[],I=[];function Ft(D){if(D.samples>0){if(Fe(D)===!1){const T=D.textures,V=D.width,J=D.height;let ne=i.COLOR_BUFFER_BIT;const j=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(D),de=T.length>1;if(de)for(let ge=0;ge<T.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ge=0;ge<T.length;ge++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);const Xe=n.get(T[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,ne,i.NEAREST),c===!0&&(st.length=0,I.length=0,st.push(i.COLOR_ATTACHMENT0+ge),D.depthBuffer&&D.resolveDepthBuffer===!1&&(st.push(j),I.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let ge=0;ge<T.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);const Xe=n.get(T[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ke(D){return Math.min(r.maxSamples,D.samples)}function Fe(D){const T=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function le(D){const T=a.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function ot(D,T){const V=D.colorSpace,J=D.format,ne=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==cs&&V!==wi&&(Ze.getTransfer(V)===tt?(J!==Fn||ne!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function Me(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=F,this.rebindTextures=Pe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Fe}function qy(i,e){function t(n,r=wi){let s;const a=Ze.getTransfer(r);if(n===ui)return i.UNSIGNED_BYTE;if(n===dh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ph)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bd)return i.BYTE;if(n===Md)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===fh)return i.INT;if(n===fr)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===fa)return i.HALF_FLOAT;if(n===Ed)return i.ALPHA;if(n===Td)return i.RGB;if(n===Fn)return i.RGBA;if(n===Ad)return i.LUMINANCE;if(n===Rd)return i.LUMINANCE_ALPHA;if(n===Jr)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===Cd)return i.RED;if(n===mh)return i.RED_INTEGER;if(n===Dd)return i.RG;if(n===_h)return i.RG_INTEGER;if(n===gh)return i.RGBA_INTEGER;if(n===oo||n===lo||n===co||n===ho)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fc||n===dc||n===pc||n===mc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_c||n===gc||n===xc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_c||n===gc)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vc||n===yc||n===Sc||n===bc||n===Mc||n===wc||n===Ec||n===Tc||n===Ac||n===Rc||n===Cc||n===Dc||n===Pc||n===Ic)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ec)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ac)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===Lc||n===Uc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===uo)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pd||n===Fc||n===Oc||n===Nc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===uo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Yy={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yy)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ja;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jy=`
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

}`;class $y{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Vt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:Zy,fragmentShader:jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new Bo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ky extends vr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=new $y,m=t.getContextAttributes();let p=null,w=null;const b=[],y=[],S=new Ee;let E=null;const M=new Un;M.viewport=new yt;const C=new Un;C.viewport=new yt;const x=[M,C],v=new _g;let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let q=b[L];return q===void 0&&(q=new Al,b[L]=q),q.getTargetRaySpace()},this.getControllerGrip=function(L){let q=b[L];return q===void 0&&(q=new Al,b[L]=q),q.getGripSpace()},this.getHand=function(L){let q=b[L];return q===void 0&&(q=new Al,b[L]=q),q.getHandSpace()};function k(L){const q=y.indexOf(L.inputSource);if(q===-1)return;const ie=b[q];ie!==void 0&&(ie.update(L.inputSource,L.frame,l||a),ie.dispatchEvent({type:L.type,data:L.inputSource}))}function G(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Y);for(let L=0;L<b.length;L++){const q=y[L];q!==null&&(y[L]=null,b[L].disconnect(q))}R=null,z=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,r=null,w=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(S),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let ie=null,ee=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?ls:Jr,ee=m.stencil?os:fr);const Se={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(Se),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new dr(f.textureWidth,f.textureHeight,{format:Fn,type:ui,depthTexture:new Yd(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new dr(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(L){for(let q=0;q<L.removed.length;q++){const ie=L.removed[q],ee=y.indexOf(ie);ee>=0&&(y[ee]=null,b[ee].disconnect(ie))}for(let q=0;q<L.added.length;q++){const ie=L.added[q];let ee=y.indexOf(ie);if(ee===-1){for(let Se=0;Se<b.length;Se++)if(Se>=y.length){y.push(ie),ee=Se;break}else if(y[Se]===null){y[Se]=ie,ee=Se;break}if(ee===-1)break}const he=b[ee];he&&he.connect(ie)}}const B=new P,$=new P;function F(L,q,ie){B.setFromMatrixPosition(q.matrixWorld),$.setFromMatrixPosition(ie.matrixWorld);const ee=B.distanceTo($),he=q.projectionMatrix.elements,Se=ie.projectionMatrix.elements,Pe=he[14]/(he[10]-1),et=he[14]/(he[10]+1),Ue=(he[9]+1)/he[5],st=(he[9]-1)/he[5],I=(he[8]-1)/he[0],Ft=(Se[8]+1)/Se[0],ke=Pe*I,Fe=Pe*Ft,le=ee/(-I+Ft),ot=le*-I;if(q.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(ot),L.translateZ(le),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),he[10]===-1)L.projectionMatrix.copy(q.projectionMatrix),L.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Me=Pe+le,D=et+le,T=ke-ot,V=Fe+(ee-ot),J=Ue*et/D*Me,ne=st*et/D*Me;L.projectionMatrix.makePerspective(T,V,J,ne,Me,D),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function K(L,q){q===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(q.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;let q=L.near,ie=L.far;_.texture!==null&&(_.depthNear>0&&(q=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),v.near=C.near=M.near=q,v.far=C.far=M.far=ie,(R!==v.near||z!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,z=v.far),M.layers.mask=L.layers.mask|2,C.layers.mask=L.layers.mask|4,v.layers.mask=M.layers.mask|C.layers.mask;const ee=L.parent,he=v.cameras;K(v,ee);for(let Se=0;Se<he.length;Se++)K(he[Se],ee);he.length===2?F(v,M,C):v.projectionMatrix.copy(M.projectionMatrix),te(L,v,ee)};function te(L,q,ie){ie===null?L.matrix.copy(q.matrixWorld):(L.matrix.copy(ie.matrixWorld),L.matrix.invert(),L.matrix.multiply(q.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(q.projectionMatrix),L.projectionMatrixInverse.copy(q.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=kc*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(L){c=L,f!==null&&(f.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let se=null;function W(L,q){if(h=q.getViewerPose(l||a),g=q,h!==null){const ie=h.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let ee=!1;ie.length!==v.cameras.length&&(v.cameras.length=0,ee=!0);for(let Se=0;Se<ie.length;Se++){const Pe=ie[Se];let et=null;if(d!==null)et=d.getViewport(Pe);else{const st=u.getViewSubImage(f,Pe);et=st.viewport,Se===0&&(e.setRenderTargetTextures(w,st.colorTexture,f.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(w))}let Ue=x[Se];Ue===void 0&&(Ue=new Un,Ue.layers.enable(Se),Ue.viewport=new yt,x[Se]=Ue),Ue.matrix.fromArray(Pe.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Pe.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(et.x,et.y,et.width,et.height),Se===0&&(v.matrix.copy(Ue.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ee===!0&&v.cameras.push(Ue)}const he=r.enabledFeatures;if(he&&he.includes("depth-sensing")){const Se=u.getDepthInformation(ie[0]);Se&&Se.isValid&&Se.texture&&_.init(e,Se,r.renderState)}}for(let ie=0;ie<b.length;ie++){const ee=y[ie],he=b[ie];ee!==null&&he!==void 0&&he.update(ee,q,l||a)}se&&se(L,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const ae=new jd;ae.setAnimationLoop(W),this.setAnimationLoop=function(L){se=L},this.dispose=function(){}}}const ji=new fi,Jy=new lt;function Qy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,w,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),b=w.envMap,y=w.envMapRotation;b&&(m.envMap.value=b,ji.copy(y),ji.x*=-1,ji.y*=-1,ji.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(ji)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function eS(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,b){const y=b.program;n.uniformBlockBinding(w,y)}function l(w,b){let y=r[w.id];y===void 0&&(g(w),y=h(w),r[w.id]=y,w.addEventListener("dispose",m));const S=b.program;n.updateUBOMapping(w,S);const E=e.render.frame;s[w.id]!==E&&(f(w),s[w.id]=E)}function h(w){const b=u();w.__bindingPointIndex=b;const y=i.createBuffer(),S=w.__size,E=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const b=r[w.id],y=w.uniforms,S=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,M=y.length;E<M;E++){const C=Array.isArray(y[E])?y[E]:[y[E]];for(let x=0,v=C.length;x<v;x++){const R=C[x];if(d(R,E,x,S)===!0){const z=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let Y=0;Y<k.length;Y++){const B=k[Y],$=_(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,z+G,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,b,y,S){const E=w.value,M=b+"_"+y;if(S[M]===void 0)return typeof E=="number"||typeof E=="boolean"?S[M]=E:S[M]=E.clone(),!0;{const C=S[M];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return S[M]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(w){const b=w.uniforms;let y=0;const S=16;for(let M=0,C=b.length;M<C;M++){const x=Array.isArray(b[M])?b[M]:[b[M]];for(let v=0,R=x.length;v<R;v++){const z=x[v],k=Array.isArray(z.value)?z.value:[z.value];for(let G=0,Y=k.length;G<Y;G++){const B=k[G],$=_(B),F=y%S,K=F%$.boundary,te=F+K;y+=K,te!==0&&S-te<$.storage&&(y+=S-te),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=$.storage}}}const E=y%S;return E>0&&(y+=S-E),w.__size=y,w.__cache={},this}function _(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class tS{constructor(e={}){const{canvas:t=L_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=Pi,this.toneMappingExposure=1;const y=this;let S=!1,E=0,M=0,C=null,x=-1,v=null;const R=new yt,z=new yt;let k=null;const G=new Ve(0);let Y=0,B=t.width,$=t.height,F=1,K=null,te=null;const se=new yt(0,0,B,$),W=new yt(0,0,B,$);let ae=!1;const L=new Wd;let q=!1,ie=!1;this.transmissionResolutionScale=1;const ee=new lt,he=new lt,Se=new P,Pe=new yt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function st(){return C===null?F:1}let I=n;function Ft(A,O){return t.getContext(A,O)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ko}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",pe,!1),I===null){const O="webgl2";if(I=Ft(O,A),I===null)throw Ft(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ke,Fe,le,ot,Me,D,T,V,J,ne,j,be,de,ge,Xe,oe,xe,Re,Ce,ve,We,Oe,at,U;function ue(){ke=new hv(I),ke.init(),Oe=new qy(I,ke),Fe=new rv(I,ke,e,Oe),le=new Wy(I,ke),Fe.reverseDepthBuffer&&f&&le.buffers.depth.setReversed(!0),ot=new dv(I),Me=new Py,D=new Xy(I,ke,le,Me,Fe,Oe,ot),T=new av(y),V=new cv(y),J=new yg(I),at=new nv(I,J),ne=new uv(I,J,ot,at),j=new mv(I,ne,J,ot),Ce=new pv(I,Fe,D),oe=new sv(Me),be=new Dy(y,T,V,ke,Fe,at,oe),de=new Qy(y,Me),ge=new Ly,Xe=new zy(ke),Re=new tv(y,T,V,le,j,d,c),xe=new Hy(y,j,Fe),U=new eS(I,ot,Fe,le),ve=new iv(I,ke,ot),We=new fv(I,ke,ot),ot.programs=be.programs,y.capabilities=Fe,y.extensions=ke,y.properties=Me,y.renderLists=ge,y.shadowMap=xe,y.state=le,y.info=ot}ue();const Z=new Ky(y,I);this.xr=Z,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(B,$,!1))},this.getSize=function(A){return A.set(B,$)},this.setSize=function(A,O,H=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,$=O,t.width=Math.floor(A*F),t.height=Math.floor(O*F),H===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(B*F,$*F).floor()},this.setDrawingBufferSize=function(A,O,H){B=A,$=O,F=H,t.width=Math.floor(A*H),t.height=Math.floor(O*H),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(se)},this.setViewport=function(A,O,H,X){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,O,H,X),le.viewport(R.copy(se).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,O,H,X){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,O,H,X),le.scissor(z.copy(W).multiplyScalar(F).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(A){le.setScissorTest(ae=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){te=A},this.getClearColor=function(A){return A.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(A=!0,O=!0,H=!0){let X=0;if(A){let N=!1;if(C!==null){const re=C.texture.format;N=re===gh||re===_h||re===mh}if(N){const re=C.texture.type,fe=re===ui||re===fr||re===Zs||re===os||re===dh||re===ph,_e=Re.getClearColor(),ye=Re.getClearAlpha(),De=_e.r,Ie=_e.g,Te=_e.b;fe?(g[0]=De,g[1]=Ie,g[2]=Te,g[3]=ye,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=De,_[1]=Ie,_[2]=Te,_[3]=ye,I.clearBufferiv(I.COLOR,0,_))}else X|=I.COLOR_BUFFER_BIT}O&&(X|=I.DEPTH_BUFFER_BIT),H&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Re.dispose(),ge.dispose(),Xe.dispose(),Me.dispose(),T.dispose(),V.dispose(),j.dispose(),at.dispose(),U.dispose(),be.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",$h),Z.removeEventListener("sessionend",Kh),Hi.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=ot.autoReset,O=xe.enabled,H=xe.autoUpdate,X=xe.needsUpdate,N=xe.type;ue(),ot.autoReset=A,xe.enabled=O,xe.autoUpdate=H,xe.needsUpdate=X,xe.type=N}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Le(A){const O=A.target;O.removeEventListener("dispose",Le),pt(O)}function pt(A){Ot(A),Me.remove(A)}function Ot(A){const O=Me.get(A).programs;O!==void 0&&(O.forEach(function(H){be.releaseProgram(H)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,H,X,N,re){O===null&&(O=et);const fe=N.isMesh&&N.matrixWorld.determinant()<0,_e=Fm(A,O,H,X,N);le.setMaterial(X,fe);let ye=H.index,De=1;if(X.wireframe===!0){if(ye=ne.getWireframeAttribute(H),ye===void 0)return;De=2}const Ie=H.drawRange,Te=H.attributes.position;let qe=Ie.start*De,Ke=(Ie.start+Ie.count)*De;re!==null&&(qe=Math.max(qe,re.start*De),Ke=Math.min(Ke,(re.start+re.count)*De)),ye!==null?(qe=Math.max(qe,0),Ke=Math.min(Ke,ye.count)):Te!=null&&(qe=Math.max(qe,0),Ke=Math.min(Ke,Te.count));const St=Ke-qe;if(St<0||St===1/0)return;at.setup(N,X,_e,H,ye);let mt,Ye=ve;if(ye!==null&&(mt=J.get(ye),Ye=We,Ye.setIndex(mt)),N.isMesh)X.wireframe===!0?(le.setLineWidth(X.wireframeLinewidth*st()),Ye.setMode(I.LINES)):Ye.setMode(I.TRIANGLES);else if(N.isLine){let Ae=X.linewidth;Ae===void 0&&(Ae=1),le.setLineWidth(Ae*st()),N.isLineSegments?Ye.setMode(I.LINES):N.isLineLoop?Ye.setMode(I.LINE_LOOP):Ye.setMode(I.LINE_STRIP)}else N.isPoints?Ye.setMode(I.POINTS):N.isSprite&&Ye.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ye.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Ye.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ae=N._multiDrawStarts,It=N._multiDrawCounts,Je=N._multiDrawCount,Dn=ye?J.get(ye).bytesPerElement:1,Mr=Me.get(X).currentProgram.getUniforms();for(let on=0;on<Je;on++)Mr.setValue(I,"_gl_DrawID",on),Ye.render(Ae[on]/Dn,It[on])}else if(N.isInstancedMesh)Ye.renderInstances(qe,St,N.count);else if(H.isInstancedBufferGeometry){const Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,It=Math.min(H.instanceCount,Ae);Ye.renderInstances(qe,St,It)}else Ye.render(qe,St)};function Qe(A,O,H){A.transparent===!0&&A.side===Bn&&A.forceSinglePass===!1?(A.side=Qt,A.needsUpdate=!0,Ma(A,O,H),A.side=ki,A.needsUpdate=!0,Ma(A,O,H),A.side=Bn):Ma(A,O,H)}this.compile=function(A,O,H=null){H===null&&(H=A),p=Xe.get(H),p.init(O),b.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),A!==H&&A.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const X=new Set;return A.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const re=N.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const _e=re[fe];Qe(_e,H,N),X.add(_e)}else Qe(re,H,N),X.add(re)}),b.pop(),p=null,X},this.compileAsync=function(A,O,H=null){const X=this.compile(A,O,H);return new Promise(N=>{function re(){if(X.forEach(function(fe){Me.get(fe).currentProgram.isReady()&&X.delete(fe)}),X.size===0){N(A);return}setTimeout(re,10)}ke.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Cn=null;function $n(A){Cn&&Cn(A)}function $h(){Hi.stop()}function Kh(){Hi.start()}const Hi=new jd;Hi.setAnimationLoop($n),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(A){Cn=A,Z.setAnimationLoop(A),A===null?Hi.stop():Hi.start()},Z.addEventListener("sessionstart",$h),Z.addEventListener("sessionend",Kh),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,O,C),p=Xe.get(A,b.length),p.init(O),b.push(p),he.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),L.setFromProjectionMatrix(he),ie=this.localClippingEnabled,q=oe.init(this.clippingPlanes,ie),m=ge.get(A,w.length),m.init(),w.push(m),Z.enabled===!0&&Z.isPresenting===!0){const re=y.xr.getDepthSensingMesh();re!==null&&Zo(re,O,-1/0,y.sortObjects)}Zo(A,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(K,te),Ue=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ue&&Re.addToRenderList(m,A),this.info.render.frame++,q===!0&&oe.beginShadows();const H=p.state.shadowsArray;xe.render(H,A,O),q===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,N=m.transmissive;if(p.setupLights(),O.isArrayCamera){const re=O.cameras;if(N.length>0)for(let fe=0,_e=re.length;fe<_e;fe++){const ye=re[fe];Qh(X,N,A,ye)}Ue&&Re.render(A);for(let fe=0,_e=re.length;fe<_e;fe++){const ye=re[fe];Jh(m,A,ye,ye.viewport)}}else N.length>0&&Qh(X,N,A,O),Ue&&Re.render(A),Jh(m,A,O);C!==null&&M===0&&(D.updateMultisampleRenderTarget(C),D.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(y,A,O),at.resetDefaultState(),x=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],q===!0&&oe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Zo(A,O,H,X){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||L.intersectsSprite(A)){X&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(he);const fe=j.update(A),_e=A.material;_e.visible&&m.push(A,fe,_e,H,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||L.intersectsObject(A))){const fe=j.update(A),_e=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Pe.copy(fe.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(he)),Array.isArray(_e)){const ye=fe.groups;for(let De=0,Ie=ye.length;De<Ie;De++){const Te=ye[De],qe=_e[Te.materialIndex];qe&&qe.visible&&m.push(A,fe,qe,H,Pe.z,Te)}}else _e.visible&&m.push(A,fe,_e,H,Pe.z,null)}}const re=A.children;for(let fe=0,_e=re.length;fe<_e;fe++)Zo(re[fe],O,H,X)}function Jh(A,O,H,X){const N=A.opaque,re=A.transmissive,fe=A.transparent;p.setupLightsView(H),q===!0&&oe.setGlobalState(y.clippingPlanes,H),X&&le.viewport(R.copy(X)),N.length>0&&ba(N,O,H),re.length>0&&ba(re,O,H),fe.length>0&&ba(fe,O,H),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Qh(A,O,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new dr(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?fa:ui,minFilter:ir,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const re=p.state.transmissionRenderTarget[X.id],fe=X.viewport||R;re.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);const _e=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(G),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Ue&&Re.render(H);const ye=y.toneMapping;y.toneMapping=Pi;const De=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),q===!0&&oe.setGlobalState(y.clippingPlanes,X),ba(A,H,X),D.updateMultisampleRenderTarget(re),D.updateRenderTargetMipmap(re),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Te=0,qe=O.length;Te<qe;Te++){const Ke=O[Te],St=Ke.object,mt=Ke.geometry,Ye=Ke.material,Ae=Ke.group;if(Ye.side===Bn&&St.layers.test(X.layers)){const It=Ye.side;Ye.side=Qt,Ye.needsUpdate=!0,eu(St,H,X,mt,Ye,Ae),Ye.side=It,Ye.needsUpdate=!0,Ie=!0}}Ie===!0&&(D.updateMultisampleRenderTarget(re),D.updateRenderTargetMipmap(re))}y.setRenderTarget(_e),y.setClearColor(G,Y),De!==void 0&&(X.viewport=De),y.toneMapping=ye}function ba(A,O,H){const X=O.isScene===!0?O.overrideMaterial:null;for(let N=0,re=A.length;N<re;N++){const fe=A[N],_e=fe.object,ye=fe.geometry,De=X===null?fe.material:X,Ie=fe.group;_e.layers.test(H.layers)&&eu(_e,O,H,ye,De,Ie)}}function eu(A,O,H,X,N,re){A.onBeforeRender(y,O,H,X,N,re),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),N.onBeforeRender(y,O,H,X,A,re),N.transparent===!0&&N.side===Bn&&N.forceSinglePass===!1?(N.side=Qt,N.needsUpdate=!0,y.renderBufferDirect(H,O,X,N,A,re),N.side=ki,N.needsUpdate=!0,y.renderBufferDirect(H,O,X,N,A,re),N.side=Bn):y.renderBufferDirect(H,O,X,N,A,re),A.onAfterRender(y,O,H,X,N,re)}function Ma(A,O,H){O.isScene!==!0&&(O=et);const X=Me.get(A),N=p.state.lights,re=p.state.shadowsArray,fe=N.state.version,_e=be.getParameters(A,N.state,re,O,H),ye=be.getProgramCacheKey(_e);let De=X.programs;X.environment=A.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(A.isMeshStandardMaterial?V:T).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,De===void 0&&(A.addEventListener("dispose",Le),De=new Map,X.programs=De);let Ie=De.get(ye);if(Ie!==void 0){if(X.currentProgram===Ie&&X.lightsStateVersion===fe)return nu(A,_e),Ie}else _e.uniforms=be.getUniforms(A),A.onBeforeCompile(_e,y),Ie=be.acquireProgram(_e,ye),De.set(ye,Ie),X.uniforms=_e.uniforms;const Te=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Te.clippingPlanes=oe.uniform),nu(A,_e),X.needsLights=Nm(A),X.lightsStateVersion=fe,X.needsLights&&(Te.ambientLightColor.value=N.state.ambient,Te.lightProbe.value=N.state.probe,Te.directionalLights.value=N.state.directional,Te.directionalLightShadows.value=N.state.directionalShadow,Te.spotLights.value=N.state.spot,Te.spotLightShadows.value=N.state.spotShadow,Te.rectAreaLights.value=N.state.rectArea,Te.ltc_1.value=N.state.rectAreaLTC1,Te.ltc_2.value=N.state.rectAreaLTC2,Te.pointLights.value=N.state.point,Te.pointLightShadows.value=N.state.pointShadow,Te.hemisphereLights.value=N.state.hemi,Te.directionalShadowMap.value=N.state.directionalShadowMap,Te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Te.spotShadowMap.value=N.state.spotShadowMap,Te.spotLightMatrix.value=N.state.spotLightMatrix,Te.spotLightMap.value=N.state.spotLightMap,Te.pointShadowMap.value=N.state.pointShadowMap,Te.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=Ie,X.uniformsList=null,Ie}function tu(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=po.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function nu(A,O){const H=Me.get(A);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Fm(A,O,H,X,N){O.isScene!==!0&&(O=et),D.resetTextureUnits();const re=O.fog,fe=X.isMeshStandardMaterial?O.environment:null,_e=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:cs,ye=(X.isMeshStandardMaterial?V:T).get(X.envMap||fe),De=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ie=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Te=!!H.morphAttributes.position,qe=!!H.morphAttributes.normal,Ke=!!H.morphAttributes.color;let St=Pi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(St=y.toneMapping);const mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ye=mt!==void 0?mt.length:0,Ae=Me.get(X),It=p.state.lights;if(q===!0&&(ie===!0||A!==v)){const Wt=A===v&&X.id===x;oe.setState(X,A,Wt)}let Je=!1;X.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==It.state.version||Ae.outputColorSpace!==_e||N.isBatchedMesh&&Ae.batching===!1||!N.isBatchedMesh&&Ae.batching===!0||N.isBatchedMesh&&Ae.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ae.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ae.instancing===!1||!N.isInstancedMesh&&Ae.instancing===!0||N.isSkinnedMesh&&Ae.skinning===!1||!N.isSkinnedMesh&&Ae.skinning===!0||N.isInstancedMesh&&Ae.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ae.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ae.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ae.instancingMorph===!1&&N.morphTexture!==null||Ae.envMap!==ye||X.fog===!0&&Ae.fog!==re||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==oe.numPlanes||Ae.numIntersection!==oe.numIntersection)||Ae.vertexAlphas!==De||Ae.vertexTangents!==Ie||Ae.morphTargets!==Te||Ae.morphNormals!==qe||Ae.morphColors!==Ke||Ae.toneMapping!==St||Ae.morphTargetsCount!==Ye)&&(Je=!0):(Je=!0,Ae.__version=X.version);let Dn=Ae.currentProgram;Je===!0&&(Dn=Ma(X,O,N));let Mr=!1,on=!1,ws=!1;const ct=Dn.getUniforms(),vn=Ae.uniforms;if(le.useProgram(Dn.program)&&(Mr=!0,on=!0,ws=!0),X.id!==x&&(x=X.id,on=!0),Mr||v!==A){le.buffers.depth.getReversed()?(ee.copy(A.projectionMatrix),F_(ee),O_(ee),ct.setValue(I,"projectionMatrix",ee)):ct.setValue(I,"projectionMatrix",A.projectionMatrix),ct.setValue(I,"viewMatrix",A.matrixWorldInverse);const jt=ct.map.cameraPosition;jt!==void 0&&jt.setValue(I,Se.setFromMatrixPosition(A.matrixWorld)),Fe.logarithmicDepthBuffer&&ct.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ct.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,on=!0,ws=!0)}if(N.isSkinnedMesh){ct.setOptional(I,N,"bindMatrix"),ct.setOptional(I,N,"bindMatrixInverse");const Wt=N.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ct.setValue(I,"boneTexture",Wt.boneTexture,D))}N.isBatchedMesh&&(ct.setOptional(I,N,"batchingTexture"),ct.setValue(I,"batchingTexture",N._matricesTexture,D),ct.setOptional(I,N,"batchingIdTexture"),ct.setValue(I,"batchingIdTexture",N._indirectTexture,D),ct.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(I,"batchingColorTexture",N._colorsTexture,D));const yn=H.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Ce.update(N,H,Dn),(on||Ae.receiveShadow!==N.receiveShadow)&&(Ae.receiveShadow=N.receiveShadow,ct.setValue(I,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(vn.envMap.value=ye,vn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(vn.envMapIntensity.value=O.environmentIntensity),on&&(ct.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&Om(vn,ws),re&&X.fog===!0&&de.refreshFogUniforms(vn,re),de.refreshMaterialUniforms(vn,X,F,$,p.state.transmissionRenderTarget[A.id]),po.upload(I,tu(Ae),vn,D)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(po.upload(I,tu(Ae),vn,D),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ct.setValue(I,"center",N.center),ct.setValue(I,"modelViewMatrix",N.modelViewMatrix),ct.setValue(I,"normalMatrix",N.normalMatrix),ct.setValue(I,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Wt=X.uniformsGroups;for(let jt=0,jo=Wt.length;jt<jo;jt++){const Gi=Wt[jt];U.update(Gi,Dn),U.bind(Gi,Dn)}}return Dn}function Om(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Nm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,O,H){Me.get(A.texture).__webglTexture=O,Me.get(A.depthTexture).__webglTexture=H;const X=Me.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=H===void 0,X.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const H=Me.get(A);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};const km=I.createFramebuffer();this.setRenderTarget=function(A,O=0,H=0){C=A,E=O,M=H;let X=!0,N=null,re=!1,fe=!1;if(A){const ye=Me.get(A);if(ye.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(ye.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(ye.__hasExternalTextures)D.rebindTextures(A,Me.get(A.texture).__webglTexture,Me.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Te=A.depthTexture;if(ye.__boundDepthTexture!==Te){if(Te!==null&&Me.has(Te)&&(A.width!==Te.image.width||A.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(fe=!0);const Ie=Me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ie[O])?N=Ie[O][H]:N=Ie[O],re=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?N=Me.get(A).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[H]:N=Ie,R.copy(A.viewport),z.copy(A.scissor),k=A.scissorTest}else R.copy(se).multiplyScalar(F).floor(),z.copy(W).multiplyScalar(F).floor(),k=ae;if(H!==0&&(N=km),le.bindFramebuffer(I.FRAMEBUFFER,N)&&X&&le.drawBuffers(A,N),le.viewport(R),le.scissor(z),le.setScissorTest(k),re){const ye=Me.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,ye.__webglTexture,H)}else if(fe){const ye=Me.get(A.texture),De=O;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.__webglTexture,H,De)}else if(A!==null&&H!==0){const ye=Me.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ye.__webglTexture,H)}x=-1},this.readRenderTargetPixels=function(A,O,H,X,N,re,fe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){le.bindFramebuffer(I.FRAMEBUFFER,_e);try{const ye=A.texture,De=ye.format,Ie=ye.type;if(!Fe.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-X&&H>=0&&H<=A.height-N&&I.readPixels(O,H,X,N,Oe.convert(De),Oe.convert(Ie),re)}finally{const ye=C!==null?Me.get(C).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(A,O,H,X,N,re,fe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){const ye=A.texture,De=ye.format,Ie=ye.type;if(!Fe.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-X&&H>=0&&H<=A.height-N){le.bindFramebuffer(I.FRAMEBUFFER,_e);const Te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.bufferData(I.PIXEL_PACK_BUFFER,re.byteLength,I.STREAM_READ),I.readPixels(O,H,X,N,Oe.convert(De),Oe.convert(Ie),0);const qe=C!==null?Me.get(C).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,qe);const Ke=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await U_(I,Ke,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,re),I.deleteBuffer(Te),I.deleteSync(Ke),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,O=null,H=0){A.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);const X=Math.pow(2,-H),N=Math.floor(A.image.width*X),re=Math.floor(A.image.height*X),fe=O!==null?O.x:0,_e=O!==null?O.y:0;D.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,fe,_e,N,re),le.unbindTexture()};const zm=I.createFramebuffer(),Bm=I.createFramebuffer();this.copyTextureToTexture=function(A,O,H=null,X=null,N=0,re=null){A.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],O=arguments[2],re=arguments[3]||0,H=null),re===null&&(N!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=N,N=0):re=0);let fe,_e,ye,De,Ie,Te,qe,Ke,St;const mt=A.isCompressedTexture?A.mipmaps[re]:A.image;if(H!==null)fe=H.max.x-H.min.x,_e=H.max.y-H.min.y,ye=H.isBox3?H.max.z-H.min.z:1,De=H.min.x,Ie=H.min.y,Te=H.isBox3?H.min.z:0;else{const yn=Math.pow(2,-N);fe=Math.floor(mt.width*yn),_e=Math.floor(mt.height*yn),A.isDataArrayTexture?ye=mt.depth:A.isData3DTexture?ye=Math.floor(mt.depth*yn):ye=1,De=0,Ie=0,Te=0}X!==null?(qe=X.x,Ke=X.y,St=X.z):(qe=0,Ke=0,St=0);const Ye=Oe.convert(O.format),Ae=Oe.convert(O.type);let It;O.isData3DTexture?(D.setTexture3D(O,0),It=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(D.setTexture2DArray(O,0),It=I.TEXTURE_2D_ARRAY):(D.setTexture2D(O,0),It=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Je=I.getParameter(I.UNPACK_ROW_LENGTH),Dn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Mr=I.getParameter(I.UNPACK_SKIP_PIXELS),on=I.getParameter(I.UNPACK_SKIP_ROWS),ws=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,De),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Te);const ct=A.isDataArrayTexture||A.isData3DTexture,vn=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){const yn=Me.get(A),Wt=Me.get(O),jt=Me.get(yn.__renderTarget),jo=Me.get(Wt.__renderTarget);le.bindFramebuffer(I.READ_FRAMEBUFFER,jt.__webglFramebuffer),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,jo.__webglFramebuffer);for(let Gi=0;Gi<ye;Gi++)ct&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(A).__webglTexture,N,Te+Gi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(O).__webglTexture,re,St+Gi)),I.blitFramebuffer(De,Ie,fe,_e,qe,Ke,fe,_e,I.DEPTH_BUFFER_BIT,I.NEAREST);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||A.isRenderTargetTexture||Me.has(A)){const yn=Me.get(A),Wt=Me.get(O);le.bindFramebuffer(I.READ_FRAMEBUFFER,zm),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,Bm);for(let jt=0;jt<ye;jt++)ct?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yn.__webglTexture,N,Te+jt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yn.__webglTexture,N),vn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.__webglTexture,re,St+jt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Wt.__webglTexture,re),N!==0?I.blitFramebuffer(De,Ie,fe,_e,qe,Ke,fe,_e,I.COLOR_BUFFER_BIT,I.NEAREST):vn?I.copyTexSubImage3D(It,re,qe,Ke,St+jt,De,Ie,fe,_e):I.copyTexSubImage2D(It,re,qe,Ke,De,Ie,fe,_e);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else vn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(It,re,qe,Ke,St,fe,_e,ye,Ye,Ae,mt.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(It,re,qe,Ke,St,fe,_e,ye,Ye,mt.data):I.texSubImage3D(It,re,qe,Ke,St,fe,_e,ye,Ye,Ae,mt):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,re,qe,Ke,fe,_e,Ye,Ae,mt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,re,qe,Ke,mt.width,mt.height,Ye,mt.data):I.texSubImage2D(I.TEXTURE_2D,re,qe,Ke,fe,_e,Ye,Ae,mt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Je),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Dn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mr),I.pixelStorei(I.UNPACK_SKIP_ROWS,on),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ws),re===0&&O.generateMipmaps&&I.generateMipmap(It),le.unbindTexture()},this.copyTextureToTexture3D=function(A,O,H=null,X=null,N=0){return A.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,X=arguments[1]||null,A=arguments[2],O=arguments[3],N=arguments[4]||0),Xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,O,H,X,N)},this.initRenderTarget=function(A){Me.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),le.unbindTexture()},this.resetState=function(){E=0,M=0,C=null,le.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const lf={type:"change"},wh={type:"start"},ep={type:"end"},Qa=new pa,cf=new Mi,nS=Math.cos(70*I_.DEG2RAD),Et=new P,$t=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rl=1e-6;class iS extends xg{constructor(e,t=null){super(e,t),this.state=it.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$r.ROTATE,MIDDLE:$r.DOLLY,RIGHT:$r.PAN},this.touches={ONE:qr.ROTATE,TWO:qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new pr,this._lastTargetPosition=new P,this._quat=new pr().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fu,this._sphericalDelta=new Fu,this._scale=1,this._panOffset=new P,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new P,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sS.bind(this),this._onPointerDown=rS.bind(this),this._onPointerUp=aS.bind(this),this._onContextMenu=dS.bind(this),this._onMouseWheel=cS.bind(this),this._onKeyDown=hS.bind(this),this._onTouchStart=uS.bind(this),this._onTouchMove=fS.bind(this),this._onMouseDown=oS.bind(this),this._onMouseMove=lS.bind(this),this._interceptControlDown=pS.bind(this),this._interceptControlUp=mS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lf),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;Et.copy(t).sub(this.target),Et.applyQuaternion(this._quat),this._spherical.setFromVector3(Et),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=$t:n>Math.PI&&(n-=$t),r<-Math.PI?r+=$t:r>Math.PI&&(r-=$t),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Et.setFromSpherical(this._spherical),Et.applyQuaternion(this._quatInverse),t.copy(this.target).add(Et),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Et.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Et.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Qa.origin.copy(this.object.position),Qa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qa.direction))<nS?this.object.lookAt(this.target):(cf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qa.intersectPlane(cf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Rl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rl||this._lastTargetPosition.distanceToSquared(this.target)>Rl?(this.dispatchEvent(lf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$t/60*this.autoRotateSpeed*e:$t/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Et.setFromMatrixColumn(t,0),Et.multiplyScalar(-e),this._panOffset.add(Et)}_panUp(e,t){this.screenSpacePanning===!0?Et.setFromMatrixColumn(t,1):(Et.setFromMatrixColumn(t,0),Et.crossVectors(this.object.up,Et)),Et.multiplyScalar(e),this._panOffset.add(Et)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Et.copy(r).sub(this.target);let s=Et.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function rS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function sS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function aS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ep),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function oS(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=it.DOLLY;break;case $r.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}break;case $r.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(wh)}function lS(i){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function cS(i){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(i.preventDefault(),this.dispatchEvent(wh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ep))}function hS(i){this.enabled!==!1&&this._handleKeyDown(i)}function uS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=it.TOUCH_ROTATE;break;case qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=it.TOUCH_DOLLY_PAN;break;case qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(wh)}function fS(i){switch(this._trackPointer(i),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=it.NONE}}function dS(i){this.enabled!==!1&&i.preventDefault()}function pS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ri(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function tp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},us={duration:.5,overwrite:!1,delay:0},Eh,Ut,ut,qn=1e8,Bt=1/qn,Hc=Math.PI*2,_S=Hc/4,gS=0,np=Math.sqrt,xS=Math.cos,vS=Math.sin,Pt=function(e){return typeof e=="string"},gt=function(e){return typeof e=="function"},pi=function(e){return typeof e=="number"},Th=function(e){return typeof e>"u"},jn=function(e){return typeof e=="object"},tn=function(e){return e!==!1},Ah=function(){return typeof window<"u"},eo=function(e){return gt(e)||Pt(e)},ip=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gt=Array.isArray,Gc=/(?:-?\.?\d|\.)+/gi,rp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sp=/[+-]=-?[.\d]+/,ap=/[^,'"\[\]\s]+/gi,yS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ft,kn,Wc,Rh,gn={},Ro={},op,lp=function(e){return(Ro=fs(e,gn))&&an},Ch=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},$s=function(e,t){return!t&&console.warn(e)},cp=function(e,t){return e&&(gn[e]=t)&&Ro&&(Ro[e]=t)||gn},Ks=function(){return 0},SS={suppressEvents:!0,isStart:!0,kill:!1},mo={suppressEvents:!0,kill:!1},bS={suppressEvents:!0},Dh={},Li=[],Xc={},hp,un={},Dl={},hf=30,_o=[],Ph="",Ih=function(e){var t=e[0],n,r;if(jn(t)||gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=_o.length;r--&&!_o[r].targetTest(t););n=_o[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Up(e[r],n)))||e.splice(r,1);return e},lr=function(e){return e._gsap||Ih(Tn(e))[0]._gsap},up=function(e,t,n){return(n=e[t])&&gt(n)?e[t]():Th(n)&&e.getAttribute&&e.getAttribute(t)||n},nn=function(e,t){return(e=e.split(",")).forEach(t)||e},vt=function(e){return Math.round(e*1e5)/1e5||0},wt=function(e){return Math.round(e*1e7)/1e7||0},es=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},MS=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Co=function(){var e=Li.length,t=Li.slice(0),n,r;for(Xc={},Li.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Lh=function(e){return!!(e._initted||e._startAt||e.add)},fp=function(e,t,n,r){Li.length&&!Ut&&Co(),e.render(t,n,!!(Ut&&t<0&&Lh(e))),Li.length&&!Ut&&Co()},dp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ap).length<2?t:Pt(e)?e.trim():e},pp=function(e){return e},xn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},wS=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},fs=function(e,t){for(var n in t)e[n]=t[n];return e},uf=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=jn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Do=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Vs=function(e){var t=e.parent||ft,n=e.keyframes?wS(Gt(e.keyframes)):xn;if(tn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ES=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},mp=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ho=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},zi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},cr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},TS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qc=function(e,t,n,r){return e._startAt&&(Ut?e._startAt.revert(mo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},AS=function i(e){return!e||e._ts&&i(e.parent)},ff=function(e){return e._repeat?ds(e._tTime,e=e.duration()+e._rDelay)*e:0},ds=function(e,t){var n=Math.floor(e=wt(e/t));return e&&n===e?n-1:n},Po=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Go=function(e){return e._end=wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Bt)||0))},Wo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Go(e),n._dirty||cr(n,e)),e},_p=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Po(e.rawTime(),t),(!t._dur||_a(0,t.totalDuration(),n)-t._tTime>Bt)&&t.render(n,!0)),cr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},Hn=function(e,t,n,r){return t.parent&&zi(t),t._start=wt((pi(n)?n:n||e!==ft?bn(e,n,t):e._time)+t._delay),t._end=wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mp(e,t,"_first","_last",e._sort?"_start":0),Yc(t)||(e._recent=t),r||_p(e,t),e._ts<0&&Wo(e,e._tTime),e},gp=function(e,t){return(gn.ScrollTrigger||Ch("scrollTrigger",t))&&gn.ScrollTrigger.create(t,e)},xp=function(e,t,n,r,s){if(Fh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&hp!==fn.frame)return Li.push(e),e._lazy=[s,r],1},RS=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Yc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},CS=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&RS(e)&&!(!e._initted&&Yc(e))||(e._ts<0||e._dp._ts<0)&&!Yc(e))?0:1,o=e._rDelay,c=0,l,h,u;if(o&&e._repeat&&(c=_a(0,e._tDur,t),h=ds(c,o),e._yoyo&&h&1&&(a=1-a),h!==ds(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Ut||r||e._zTime===Bt||!t&&e._zTime){if(!e._initted&&xp(e,t,r,n,c))return;for(u=e._zTime,e._zTime=t||(n?Bt:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&qc(e,t,n,!0),e._onUpdate&&!n&&pn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&pn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&zi(e,1),!n&&!Ut&&(pn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},DS=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ps=function(e,t,n,r){var s=e._repeat,a=wt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:wt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Wo(e,e._tTime=e._tDur*o),e.parent&&Go(e),n||cr(e.parent,e),e},df=function(e){return e instanceof Yt?cr(e):ps(e,e._dur)},PS={_start:0,endTime:Ks,totalDuration:Ks},bn=function i(e,t,n){var r=e.labels,s=e._recent||PS,a=e.duration()>=qn?s.endTime(!1):e._dur,o,c,l;return Pt(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(Gt(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},Hs=function(e,t,n){var r=pi(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,c;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=tn(c.vars.inherit)&&c.parent;a.immediateRender=tn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Mt(t[0],a,t[s+1])},Vi=function(e,t){return e||e===0?t(e):t},_a=function(e,t,n){return n<e?e:n>t?t:n},zt=function(e,t){return!Pt(e)||!(t=yS.exec(e))?"":t[1]},IS=function(e,t,n){return Vi(n,function(r){return _a(e,t,r)})},Zc=[].slice,vp=function(e,t){return e&&jn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&jn(e[0]))&&!e.nodeType&&e!==kn},LS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Pt(r)&&!t||vp(r,1)?(s=n).push.apply(s,Tn(r)):n.push(r)})||n},Tn=function(e,t,n){return ut&&!t&&ut.selector?ut.selector(e):Pt(e)&&!n&&(Wc||!ms())?Zc.call((t||Rh).querySelectorAll(e),0):Gt(e)?LS(e,n):vp(e)?Zc.call(e,0):e?[e]:[]},jc=function(e){return e=Tn(e)[0]||$s("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Tn(t,n.querySelectorAll?n:n===e?$s("Invalid scope")||Rh.createElement("div"):e)}},yp=function(e){return e.sort(function(){return .5-Math.random()})},Sp=function(e){if(gt(e))return e;var t=jn(e)?e:{each:e},n=hr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,c=isNaN(r)||o,l=t.axis,h=r,u=r;return Pt(r)?h=u={center:.5,edges:.5,end:1}[r]||0:!o&&c&&(h=r[0],u=r[1]),function(f,d,g){var _=(g||t).length,m=a[_],p,w,b,y,S,E,M,C,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,qn])[1],!x){for(M=-1e8;M<(M=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],p=c?Math.min(x,_)*h-.5:r%x,w=x===qn?0:c?_*u/x-.5:r/x|0,M=0,C=qn,E=0;E<_;E++)b=E%x-p,y=w-(E/x|0),m[E]=S=l?Math.abs(l==="y"?y:b):np(b*b+y*y),S>M&&(M=S),S<C&&(C=S);r==="random"&&yp(m),m.max=M-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:l?l==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=zt(t.amount||t.each)||0,n=n&&_<0?Pp(n):n}return _=(m[f]-m.min)/m.max||0,wt(m.b+(n?n(_):_)*m.v)+m.u}},$c=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=wt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(pi(n)?0:zt(n))}},bp=function(e,t){var n=Gt(e),r,s;return!n&&jn(e)&&(r=n=e.radius||qn,e.values?(e=Tn(e.values),(s=!pi(e[0]))&&(r*=r)):e=$c(e.increment)),Vi(t,n?gt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=qn,h=0,u=e.length,f,d;u--;)s?(f=e[u].x-o,d=e[u].y-c,f=f*f+d*d):f=Math.abs(e[u]-o),f<l&&(l=f,h=u);return h=!r||l<=r?e[h]:a,s||h===a||pi(a)?h:h+zt(a)}:$c(e))},Mp=function(e,t,n,r){return Vi(Gt(e)?!t:n===!0?!!(n=0):!r,function(){return Gt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},US=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},FS=function(e,t){return function(n){return e(parseFloat(n))+(t||zt(n))}},OS=function(e,t,n){return Ep(e,t,0,1,n)},wp=function(e,t,n){return Vi(n,function(r){return e[~~t(r)]})},NS=function i(e,t,n){var r=t-e;return Gt(e)?wp(e,i(0,e.length),t):Vi(n,function(s){return(r+(s-e)%r)%r+e})},kS=function i(e,t,n){var r=t-e,s=r*2;return Gt(e)?wp(e,i(0,e.length-1),t):Vi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Js=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?ap:Gc),n+=e.substr(t,r-t)+Mp(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Ep=function(e,t,n,r,s){var a=t-e,o=r-n;return Vi(s,function(c){return n+((c-e)/a*o||0)})},zS=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=Pt(e),o={},c,l,h,u,f;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(Gt(e)&&!Gt(t)){for(h=[],u=e.length,f=u-2,l=1;l<u;l++)h.push(i(e[l-1],e[l]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=t}else r||(e=fs(Gt(e)?[]:{},e));if(!h){for(c in t)Uh.call(o,e,c,"get",t[c]);s=function(g){return kh(g,o)||(a?e.p:e)}}}return Vi(n,s)},pf=function(e,t,n){var r=e.labels,s=qn,a,o,c;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},pn=function(e,t,n){var r=e.vars,s=r[t],a=ut,o=e._ctx,c,l,h;if(s)return c=r[t+"Params"],l=r.callbackScope||e,n&&Li.length&&Co(),o&&(ut=o),h=c?s.apply(l,c):s.call(l),ut=a,h},Os=function(e){return zi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&pn(e,"onInterrupt"),e},jr,Tp=[],Ap=function(e){if(e)if(e=!e.name&&e.default||e,Ah()||e.headless){var t=e.name,n=gt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ks,render:kh,add:Uh,kill:tb,modifier:eb,rawVars:0},a={targetTest:0,get:0,getSetter:Nh,aliases:{},register:0};if(ms(),e!==r){if(un[t])return;xn(r,xn(Do(e,s),a)),fs(r.prototype,fs(s,Do(e,a))),un[r.prop=t]=r,e.targetTest&&(_o.push(r),Dh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}cp(t,r),e.register&&e.register(an,r,rn)}else Tp.push(e)},rt=255,Ns={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},Pl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*rt+.5|0},Rp=function(e,t,n){var r=e?pi(e)?[e>>16,e>>8&rt,e&rt]:0:Ns.black,s,a,o,c,l,h,u,f,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ns[e])r=Ns[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&rt,r&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Gc),!t)c=+r[0]%360/360,l=+r[1]/100,h=+r[2]/100,a=h<=.5?h*(l+1):h+l-h*l,s=h*2-a,r.length>3&&(r[3]*=1),r[0]=Pl(c+1/3,s,a),r[1]=Pl(c,s,a),r[2]=Pl(c-1/3,s,a);else if(~e.indexOf("="))return r=e.match(rp),n&&r.length<4&&(r[3]=1),r}else r=e.match(Gc)||Ns.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/rt,a=r[1]/rt,o=r[2]/rt,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?c=l=0:(d=u-f,l=h>.5?d/(2-u-f):d/(u+f),c=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},Cp=function(e){var t=[],n=[],r=-1;return e.split(Ui).forEach(function(s){var a=s.match(Zr)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},mf=function(e,t,n){var r="",s=(e+r).match(Ui),a=t?"hsla(":"rgba(",o=0,c,l,h,u;if(!s)return e;if(s=s.map(function(f){return(f=Rp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Cp(e),c=n.c,c.join(r)!==h.c.join(r)))for(l=e.replace(Ui,"1").split(Zr),u=l.length-1;o<u;o++)r+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=e.split(Ui),u=l.length-1;o<u;o++)r+=l[o]+s[o];return r+l[u]},Ui=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ns)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),BS=/hsl[a]?\(/,Dp=function(e){var t=e.join(" "),n;if(Ui.lastIndex=0,Ui.test(t))return n=BS.test(t),e[1]=mf(e[1],n),e[0]=mf(e[0],n,Cp(e[1])),!0},Qs,fn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],c,l,h,u,f,d,g=function _(m){var p=i()-r,w=m===!0,b,y,S,E;if((p>e||p<0)&&(n+=p-t),r+=p,S=r-n,b=S-a,(b>0||w)&&(E=++u.frame,f=S-u.time*1e3,u.time=S=S/1e3,a+=b+(b>=s?4:s-b),y=1),w||(c=l(_)),y)for(d=0;d<o.length;d++)o[d](S,f,E,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){op&&(!Wc&&Ah()&&(kn=Wc=window,Rh=kn.document||{},gn.gsap=an,(kn.gsapVersions||(kn.gsapVersions=[])).push(an.version),lp(Ro||kn.GreenSockGlobals||!kn.gsap&&kn||{}),Tp.forEach(Ap)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Qs=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),Qs=0,l=Ks},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,w){var b=p?function(y,S,E,M){m(y,S,E,M),u.remove(b)}:m;return u.remove(m),o[w?"unshift":"push"](b),ms(),b},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},u}(),ms=function(){return!Qs&&fn.wake()},Ge={},VS=/^[\d.\-M][\d.\-,\s]/,HS=/["']/g,GS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[r]=isNaN(l)?l.replace(HS,"").trim():+l,r=c.substr(o+1).trim();return t},WS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},XS=function(e){var t=(e+"").split("("),n=Ge[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[GS(t[1])]:WS(e).split(",").map(dp)):Ge._CE&&VS.test(e)?Ge._CE("",e):n},Pp=function(e){return function(t){return 1-e(1-t)}},Ip=function i(e,t){for(var n=e._first,r;n;)n instanceof Yt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},hr=function(e,t){return e&&(gt(e)?e:Ge[e]||XS(e))||t},Sr=function(e,t,n,r){n===void 0&&(n=function(c){return 1-t(1-c)}),r===void 0&&(r=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return nn(e,function(o){Ge[o]=gn[o]=s,Ge[a=o.toLowerCase()]=n;for(var c in s)Ge[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ge[o+"."+c]=s[c]}),s},Lp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Il=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Hc*(Math.asin(1/r)||0),o=function(h){return h===1?1:r*Math.pow(2,-10*h)*vS((h-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Lp(o);return s=Hc/s,c.config=function(l,h){return i(e,l,h)},c},Ll=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Lp(n);return r.config=function(s){return i(e,s)},r};nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Sr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ge.Linear.easeNone=Ge.none=Ge.Linear.easeIn;Sr("Elastic",Il("in"),Il("out"),Il());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Sr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Sr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Sr("Circ",function(i){return-(np(1-i*i)-1)});Sr("Sine",function(i){return i===1?1:-xS(i*_S)+1});Sr("Back",Ll("in"),Ll("out"),Ll());Ge.SteppedEase=Ge.steps=gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-Bt;return function(o){return((r*_a(0,a,o)|0)+s)*n}}};us.ease=Ge["quad.out"];nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Ph+=i+","+i+"Params,"});var Up=function(e,t){this.id=gS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:up,this.set=t?t.getSetter:Nh},ea=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ps(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),Qs||fn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ps(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ms(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Wo(this,n),!s._dp||s.parent||_p(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Bt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),fp(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ff(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ff(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ds(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Po(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(_a(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Go(this),TS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bt&&(this._tTime-=Bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Hn(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Po(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=bS);var r=Ut;return Ut=n,Lh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ut=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,df(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,df(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(bn(this,n),tn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,tn(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Bt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=gt(n)?n:pp,o=function(){var l=r.then;r.then=null,gt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=l),s(a),r.then=l};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){Os(this)},i}();xn(ea.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Yt=function(i){tp(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=tn(n.sortChildren),ft&&Hn(n.parent||ft,ri(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&gp(ri(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Hs(0,arguments,this),this},t.from=function(r,s,a){return Hs(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Hs(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Vs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Mt(r,s,bn(this,a),1),this},t.call=function(r,s,a){return Hn(this,Mt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,c,l,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new Mt(r,a,bn(this,c)),this},t.staggerFrom=function(r,s,a,o,c,l,h){return a.runBackwards=1,Vs(a).immediateRender=tn(a.immediateRender),this.staggerTo(r,s,a,o,c,l,h)},t.staggerFromTo=function(r,s,a,o,c,l,h,u){return o.startAt=a,Vs(o).immediateRender=tn(o.immediateRender),this.staggerTo(r,s,o,c,l,h,u)},t.render=function(r,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=r<=0?0:wt(r),u=this._zTime<0!=r<0&&(this._initted||!l),f,d,g,_,m,p,w,b,y,S,E,M;if(this!==ft&&h>c&&r>=0&&(h=c),h!==this._tTime||a||u){if(o!==this._time&&l&&(h+=this._time-o,r+=this._time-o),f=h,y=this._start,b=this._ts,p=!b,u&&(l||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,m=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(f=wt(h%m),h===c?(_=this._repeat,f=l):(S=wt(h/m),_=~~S,_&&_===S&&(f=l,_--),f>l&&(f=l)),S=ds(this._tTime,m),!o&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),E&&_&1&&(f=l-f,M=1),_!==S&&!this._lock){var C=E&&S&1,x=C===(E&&_&1);if(_<S&&(C=!C),o=C?0:h%l?l:h,this._lock=1,this.render(o||(M?0:wt(_*m)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&pn(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,o=C?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Ip(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=DS(this,wt(o),wt(f)),w&&(h-=f-(f=w._start))),this._tTime=h,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&h&&!s&&!S&&(pn(this,"onStart"),this._tTime!==h))return this;if(f>=o&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&w!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){w=0,g&&(h+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var v=r<0?r:f;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&w!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,a||Ut&&Lh(d)),f!==this._time||!this._ts&&!p){w=0,g&&(h+=this._zTime=v?-1e-8:Bt);break}}d=g}}if(w&&!s&&(this.pause(),w.render(f>=o?0:-1e-8)._zTime=f>=o?1:-1,this._ts))return this._start=y,Go(this),this.render(r,s,a);this._onUpdate&&!s&&pn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&zi(this,1),!s&&!(r<0&&!o)&&(h||o||!c)&&(pn(this,h===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(pi(s)||(s=bn(this,s,r)),!(r instanceof ea)){if(Gt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Pt(r))return this.addLabel(r,s);if(gt(r))r=Mt.delayedCall(0,r);else return this}return this!==r?Hn(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Mt?s&&c.push(l):(a&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Pt(r)?this.removeLabel(r):gt(r)?this.killTweensOf(r):(r.parent===this&&Ho(this,r),r===this._recent&&(this._recent=this._last),cr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wt(fn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=bn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Mt.delayedCall(0,s||Ks,a);return o.data="isPause",this._hasPause=1,Hn(this,o,bn(this,r))},t.removePause=function(r){var s=this._first;for(r=bn(this,r);s;)s._start===r&&s.data==="isPause"&&zi(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),c=o.length;c--;)Ti!==o[c]&&o[c].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Tn(r),c=this._first,l=pi(s),h;c;)c instanceof Mt?MS(c._targets,o)&&(l?(!Ti||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(h=c.getTweensOf(o,s)).length&&a.push.apply(a,h),c=c._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=bn(a,r),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,f=c.immediateRender,d,g=Mt.to(a,xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||Bt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==m&&ps(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,xn({startAt:{time:bn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),pf(this,bn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),pf(this,bn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Bt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=r);return cr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),cr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,c=qn,l,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(u=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Hn(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;ps(a,a===ft&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(ft._ts&&(fp(ft,Po(r,ft)),hp=fn.frame),fn.frame>=hf){hf+=_n.autoSleep||120;var s=ft._first;if((!s||!s._ts)&&_n.autoSleep&&fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||fn.sleep()}}},e}(ea);xn(Yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var qS=function(e,t,n,r,s,a,o){var c=new rn(this._pt,e,t,0,1,Bp,null,s),l=0,h=0,u,f,d,g,_,m,p,w;for(c.b=n,c.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Js(r)),a&&(w=[n,r],a(w,e,t),n=w[0],r=w[1]),f=n.match(Cl)||[];u=Cl.exec(r);)g=u[0],_=r.substring(l,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?es(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},l=Cl.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=o,(sp.test(r)||p)&&(c.e=0),this._pt=c,c},Uh=function(e,t,n,r,s,a,o,c,l,h){gt(r)&&(r=r(s||0,e,a));var u=e[t],f=n!=="get"?n:gt(u)?l?e[t.indexOf("set")||!gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():u,d=gt(u)?l?KS:kp:Oh,g;if(Pt(r)&&(~r.indexOf("random(")&&(r=Js(r)),r.charAt(1)==="="&&(g=es(f,r)+(zt(f)||0),(g||g===0)&&(r=g))),!h||f!==r||Kc)return!isNaN(f*r)&&r!==""?(g=new rn(this._pt,e,t,+f||0,r-(f||0),typeof u=="boolean"?QS:zp,0,d),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!u&&!(t in e)&&Ch(t,r),qS.call(this,e,t,f,r,d,c||_n.stringFilter,l))},YS=function(e,t,n,r,s){if(gt(e)&&(e=Gs(e,s,t,n,r)),!jn(e)||e.style&&e.nodeType||Gt(e)||ip(e))return Pt(e)?Gs(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Gs(e[o],s,t,n,r);return a},Fp=function(e,t,n,r,s,a){var o,c,l,h;if(un[e]&&(o=new un[e]).init(s,o.rawVars?t[e]:YS(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=c=new rn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==jr))for(l=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)l[o._props[h]]=c;return o},Ti,Kc,Fh=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,c=r.lazy,l=r.onUpdate,h=r.runBackwards,u=r.yoyoEase,f=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,w=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!Eh,y=e.timeline,S,E,M,C,x,v,R,z,k,G,Y,B,$;if(y&&(!f||!s)&&(s="none"),e._ease=hr(s,us.ease),e._yEase=u?Pp(hr(u===!0?s:u,us.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!r.runBackwards,!y||f&&!r.stagger){if(z=m[0]?lr(m[0]).harness:0,B=z&&r[z.prop],S=Do(r,Dh),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&g?mo:SS),_._lazy=0),a){if(zi(e._startAt=Mt.set(m,xn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&tn(c),startAt:null,delay:0,onUpdate:l&&function(){return pn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut||!o&&!d)&&e._startAt.revert(mo),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(o=!1),M=xn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&tn(c),immediateRender:o,stagger:0,parent:p},S),B&&(M[z.prop]=B),zi(e._startAt=Mt.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut?e._startAt.revert(mo):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,Bt,Bt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&tn(c)||c&&!g,E=0;E<m.length;E++){if(x=m[E],R=x._gsap||Ih(m)[E]._gsap,e._ptLookup[E]=G={},Xc[R.id]&&Li.length&&Co(),Y=w===m?E:w.indexOf(x),z&&(k=new z).init(x,B||S,e,Y,w)!==!1&&(e._pt=C=new rn(e._pt,x,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(F){G[F]=C}),k.priority&&(v=1)),!z||B)for(M in S)un[M]&&(k=Fp(M,S,e,Y,x,w))?k.priority&&(v=1):G[M]=C=Uh.call(e,x,M,"get",S[M],Y,w,0,r.stringFilter);e._op&&e._op[E]&&e.kill(x,e._op[E]),b&&e._pt&&(Ti=e,ft.killTweensOf(x,G,e.globalTime(t)),$=!e.parent,Ti=0),e._pt&&c&&(Xc[R.id]=1)}v&&Vp(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!$,f&&t<=0&&y.render(qn,!0,!0)},ZS=function(e,t,n,r,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Kc=1,e.vars[t]="+=0",Fh(e,o),Kc=0,c?$s(t+" not eligible for reset"):1;l.push(h)}for(d=l.length;d--;)u=l[d],h=u._pt||u,h.s=(r||r===0)&&!s?r:h.s+(r||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=vt(n)+zt(u.e)),u.b&&(u.b=h.s+zt(u.b))},jS=function(e,t){var n=e[0]?lr(e[0]).harness:0,r=n&&n.aliases,s,a,o,c;if(!r)return t;s=fs({},t);for(a in r)if(a in s)for(c=r[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},$S=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(Gt(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Gs=function(e,t,n,r,s){return gt(e)?e.call(t,n,r,s):Pt(e)&&~e.indexOf("random(")?Js(e):e},Op=Ph+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Np={};nn(Op+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Np[i]=1});var Mt=function(i){tp(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Vs(r))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,f=c.stagger,d=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,w=r.parent||ft,b=(Gt(n)||ip(n)?pi(n[0]):"length"in r)?[n]:Tn(n),y,S,E,M,C,x,v,R;if(o._targets=b.length?Ih(b):$s("GSAP target "+n+" not found. https://gsap.com",!_n.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||eo(l)||eo(h)){if(r=o.vars,y=o.timeline=new Yt({data:"nested",defaults:_||{},targets:w&&w.data==="nested"?w.vars.targets:b}),y.kill(),y.parent=y._dp=ri(o),y._start=0,f||eo(l)||eo(h)){if(M=b.length,v=f&&Sp(f),jn(f))for(C in f)~Op.indexOf(C)&&(R||(R={}),R[C]=f[C]);for(S=0;S<M;S++)E=Do(r,Np),E.stagger=0,p&&(E.yoyoEase=p),R&&fs(E,R),x=b[S],E.duration=+Gs(l,ri(o),S,x,b),E.delay=(+Gs(h,ri(o),S,x,b)||0)-o._delay,!f&&M===1&&E.delay&&(o._delay=h=E.delay,o._start+=h,E.delay=0),y.to(x,E,v?v(S,x,b):0),y._ease=Ge.none;y.duration()?l=h=0:o.timeline=0}else if(g){Vs(xn(y.vars.defaults,{ease:"none"})),y._ease=hr(g.ease||r.ease||"none");var z=0,k,G,Y;if(Gt(g))g.forEach(function(B){return y.to(b,B,">")}),y.duration();else{E={};for(C in g)C==="ease"||C==="easeEach"||$S(C,g[C],E,g.easeEach);for(C in E)for(k=E[C].sort(function(B,$){return B.t-$.t}),z=0,S=0;S<k.length;S++)G=k[S],Y={ease:G.e,duration:(G.t-(S?k[S-1].t:0))/100*l},Y[C]=G.v,y.to(b,Y,z),z+=Y.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||o.duration(l=y.duration())}else o.timeline=0;return d===!0&&!Eh&&(Ti=ri(o),ft.killTweensOf(b),Ti=0),Hn(w,ri(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(u||!l&&!g&&o._start===wt(w._time)&&tn(u)&&AS(ri(o))&&w.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-h)||0)),m&&gp(ri(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,c=this._tDur,l=this._dur,h=r<0,u=r>c-Bt&&!h?c:r<Bt?0:r,f,d,g,_,m,p,w,b,y;if(!l)CS(this,r,s,a);else if(u!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,b=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+r,s,a);if(f=wt(u%_),u===c?(g=this._repeat,f=l):(m=wt(u/_),g=~~m,g&&g===m?(f=l,g--):f>l&&(f=l)),p=this._yoyo&&g&1,p&&(y=this._yEase,f=l-f),m=ds(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(b&&this._yEase&&Ip(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(wt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(xp(this,h?r:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(r,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(y||this._ease)(f/l),this._from&&(this.ratio=w=1-w),!o&&u&&!s&&!m&&(pn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(w,d.d),d=d._next;b&&b.render(r<0?r:b._dur*b._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&qc(this,r,s,a),pn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&pn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&qc(this,r,!0,!0),(r||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&zi(this,1),!s&&!(h&&!o)&&(u||o||p)&&(pn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,c){Qs||fn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Fh(this,l),h=this._ease(l/this._dur),ZS(this,r,s,a,o,h,l,c)?this.resetTo(r,s,a,o,1):(Wo(this,0),this.parent||mp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Os(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ut),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ti&&Ti.vars.overwrite!==!0)._first||Os(this),this.parent&&a!==this.timeline.totalDuration()&&ps(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=r?Tn(r):o,l=this._ptLookup,h=this._pt,u,f,d,g,_,m,p;if((!s||s==="all")&&ES(o,c))return s==="all"&&(this._pt=0),Os(this);for(u=this._op=this._op||[],s!=="all"&&(Pt(s)&&(_={},nn(s,function(w){return _[w]=1}),s=_),s=jS(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){f=l[p],s==="all"?(u[p]=s,g=f,d={}):(d=u[p]=u[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ho(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Os(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Hs(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Hs(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return ft.killTweensOf(r,s,a)},e}(ea);xn(Mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});nn("staggerTo,staggerFrom,staggerFromTo",function(i){Mt[i]=function(){var e=new Yt,t=Zc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Oh=function(e,t,n){return e[t]=n},kp=function(e,t,n){return e[t](n)},KS=function(e,t,n,r){return e[t](r.fp,n)},JS=function(e,t,n){return e.setAttribute(t,n)},Nh=function(e,t){return gt(e[t])?kp:Th(e[t])&&e.setAttribute?JS:Oh},zp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},QS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Bp=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},kh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},eb=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},tb=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ho(this,t,"_pt"):t.dep||(n=1),t=r;return!n},nb=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Vp=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},rn=function(){function i(t,n,r,s,a,o,c,l,h){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||zp,this.d=c||this,this.set=l||Oh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=nb,this.m=n,this.mt=s,this.tween=r},i}();nn(Ph+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Dh[i]=1});gn.TweenMax=gn.TweenLite=Mt;gn.TimelineLite=gn.TimelineMax=Yt;ft=new Yt({sortChildren:!1,defaults:us,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_n.stringFilter=Dp;var ur=[],go={},ib=[],_f=0,rb=0,Ul=function(e){return(go[e]||ib).map(function(t){return t()})},Jc=function(){var e=Date.now(),t=[];e-_f>2&&(Ul("matchMediaInit"),ur.forEach(function(n){var r=n.queries,s=n.conditions,a,o,c,l;for(o in r)a=kn.matchMedia(r[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),Ul("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),_f=e,Ul("matchMedia"))},Hp=function(){function i(t,n){this.selector=n&&jc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=rb++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){gt(n)&&(s=r,r=n,n=gt);var a=this,o=function(){var l=ut,h=a.selector,u;return l&&l!==a&&l.data.push(a),s&&(a.selector=jc(s)),ut=a,u=r.apply(a,arguments),gt(u)&&a._r.push(u),ut=l,a.selector=h,a.isReverted=!1,u};return a.last=o,n===gt?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var r=ut;ut=null,n(this),ut=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Mt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Yt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Mt)&&l.revert&&l.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=ur.length;a--;)ur[a].id===this.id&&ur.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),sb=function(){function i(t){this.contexts=[],this.scope=t,ut&&ut.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){jn(n)||(n={matches:n});var a=new Hp(0,s||this.scope),o=a.conditions={},c,l,h;ut&&!a.selector&&(a.selector=ut.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(l in n)l==="all"?h=1:(c=kn.matchMedia(n[l]),c&&(ur.indexOf(a)<0&&ur.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(Jc):c.addEventListener("change",Jc)));return h&&r(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Io={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Ap(r)})},timeline:function(e){return new Yt(e)},getTweensOf:function(e,t){return ft.getTweensOf(e,t)},getProperty:function(e,t,n,r){Pt(e)&&(e=Tn(e)[0]);var s=lr(e||{}).get,a=n?pp:dp;return n==="native"&&(n=""),e&&(t?a((un[t]&&un[t].get||s)(e,t,n,r)):function(o,c,l){return a((un[o]&&un[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=Tn(e),e.length>1){var r=e.map(function(h){return an.quickSetter(h,t,n)}),s=r.length;return function(h){for(var u=s;u--;)r[u](h)}}e=e[0]||{};var a=un[t],o=lr(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(h){var u=new a;jr._pt=0,u.init(e,n?h+n:h,jr,0,[e]),u.render(1,u),jr._pt&&kh(1,jr)}:o.set(e,c);return a?l:function(h){return l(e,c,n?h+n:h,o,1)}},quickTo:function(e,t,n){var r,s=an.to(e,xn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(c,l,h){return s.resetTo(t,c,l,h)};return a.tween=s,a},isTweening:function(e){return ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=hr(e.ease,us.ease)),uf(us,e||{})},config:function(e){return uf(_n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!un[o]&&!gn[o]&&$s(t+" effect requires "+o+" plugin.")}),Dl[t]=function(o,c,l){return n(Tn(o),xn(c||{},s),l)},a&&(Yt.prototype[t]=function(o,c,l){return this.add(Dl[t](o,jn(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Ge[e]=hr(t)},parseEase:function(e,t){return arguments.length?hr(e,t):Ge},getById:function(e){return ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yt(e),r,s;for(n.smoothChildTiming=tn(e.smoothChildTiming),ft.remove(n),n._dp=0,n._time=n._tTime=ft._time,r=ft._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Mt&&r.vars.onComplete===r._targets[0]))&&Hn(n,r,r._start-r._delay),r=s;return Hn(ft,n,0),n},context:function(e,t){return e?new Hp(e,t):ut},matchMedia:function(e){return new sb(e)},matchMediaRefresh:function(){return ur.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Jc()},addEventListener:function(e,t){var n=go[e]||(go[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=go[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:NS,wrapYoyo:kS,distribute:Sp,random:Mp,snap:bp,normalize:OS,getUnit:zt,clamp:IS,splitColor:Rp,toArray:Tn,selector:jc,mapRange:Ep,pipe:US,unitize:FS,interpolate:zS,shuffle:yp},install:lp,effects:Dl,ticker:fn,updateRoot:Yt.updateRoot,plugins:un,globalTimeline:ft,core:{PropTween:rn,globals:cp,Tween:Mt,Timeline:Yt,Animation:ea,getCache:lr,_removeLinkedListItem:Ho,reverting:function(){return Ut},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return Eh=e}}};nn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Io[i]=Mt[i]});fn.add(Yt.updateRoot);jr=Io.to({},{duration:0});var ab=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ob=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=ab(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},Fl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var c,l;if(Pt(s)&&(c={},nn(s,function(h){return c[h]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}ob(o,s)}}}},an=Io.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ut?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Fl("roundProps",$c),Fl("modifiers"),Fl("snap",bp))||Io;Mt.version=Yt.version=an.version="3.13.0";op=1;Ah()&&ms();Ge.Power0;Ge.Power1;Ge.Power2;Ge.Power3;Ge.Power4;Ge.Linear;Ge.Quad;Ge.Cubic;Ge.Quart;Ge.Quint;Ge.Strong;Ge.Elastic;Ge.Back;Ge.SteppedEase;Ge.Bounce;Ge.Sine;Ge.Expo;Ge.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gf,Ai,ts,zh,rr,xf,Bh,lb=function(){return typeof window<"u"},mi={},Qi=180/Math.PI,ns=Math.PI/180,Hr=Math.atan2,vf=1e8,Vh=/([A-Z])/g,cb=/(left|right|width|margin|padding|x)/i,hb=/[\s,\(]\S/,Xn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ub=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},db=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Gp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Wp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},pb=function(e,t,n){return e.style[t]=n},mb=function(e,t,n){return e.style.setProperty(t,n)},_b=function(e,t,n){return e._gsap[t]=n},gb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},xb=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},vb=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},dt="transform",sn=dt+"Origin",yb=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in mi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Xn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=si(r,o)}):this.tfm[e]=a.x?a[e]:si(r,e),e===sn&&(this.tfm.zOrigin=a.zOrigin);else return Xn.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(dt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(sn,t,"")),e=dt}(s||t)&&this.props.push(e,t,s[e])},Xp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Sb=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Vh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Bh(),(!s||!s.isStart)&&!n[dt]&&(Xp(n),r.zOrigin&&n[sn]&&(n[sn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},qp=function(e,t){var n={target:e,props:[],revert:Sb,save:yb};return e._gsap||an.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Yp,eh=function(e,t){var n=Ai.createElementNS?Ai.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ai.createElement(e);return n&&n.style?n:Ai.createElement(e)},An=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Vh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,_s(t)||t,1)||""},yf="O,Moz,ms,Ms,Webkit".split(","),_s=function(e,t,n){var r=t||rr,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(yf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?yf[a]:"")+e},th=function(){lb()&&window.document&&(gf=window,Ai=gf.document,ts=Ai.documentElement,rr=eh("div")||{style:{}},eh("div"),dt=_s(dt),sn=dt+"Origin",rr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Yp=!!_s("perspective"),Bh=an.core.reverting,zh=1)},Sf=function(e){var t=e.ownerSVGElement,n=eh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),ts.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),ts.removeChild(n),s},bf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Zp=function(e){var t,n;try{t=e.getBBox()}catch{t=Sf(e),n=1}return t&&(t.width||t.height)||n||(t=Sf(e)),t&&!t.width&&!t.x&&!t.y?{x:+bf(e,["x","cx","x1"])||0,y:+bf(e,["y","cy","y1"])||0,width:0,height:0}:t},jp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Zp(e))},mr=function(e,t){if(t){var n=e.style,r;t in mi&&t!==sn&&(t=dt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Vh,"-$1").toLowerCase())):n.removeAttribute(t)}},Ri=function(e,t,n,r,s,a){var o=new rn(e._pt,t,n,0,1,a?Wp:Gp);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Mf={deg:1,rad:1,turn:1},bb={grid:1,flex:1},Bi=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=rr.style,c=cb.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=r==="px",d=r==="%",g,_,m,p;if(r===a||!s||Mf[r]||Mf[a])return s;if(a!=="px"&&!f&&(s=i(e,t,n,"px")),p=e.getCTM&&jp(e),(d||a==="%")&&(mi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[c?"width":"height"]:e[h],vt(d?s/g*u:s/100*g);if(o[c?"width":"height"]=u+(f?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ai||!_.appendChild)&&(_=Ai.body),m=_._gsap,m&&d&&m.width&&c&&m.time===fn.time&&!m.uncache)return vt(s/m.width*u);if(d&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=u+r,g=e[h],w?e.style[t]=w:mr(e,t)}else(d||a==="%")&&!bb[An(_,"display")]&&(o.position=An(e,"position")),_===e&&(o.position="static"),_.appendChild(rr),g=rr[h],_.removeChild(rr),o.position="absolute";return c&&d&&(m=lr(_),m.time=fn.time,m.width=_[h]),vt(f?g*s/u:g&&s?u/g*s:0)},si=function(e,t,n,r){var s;return zh||th(),t in Xn&&t!=="transform"&&(t=Xn[t],~t.indexOf(",")&&(t=t.split(",")[0])),mi[t]&&t!=="transform"?(s=na(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Uo(An(e,sn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Lo[t]&&Lo[t](e,t,n)||An(e,t)||up(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Bi(e,t,s,n)+n:s},Mb=function(e,t,n,r){if(!n||n==="none"){var s=_s(t,e,1),a=s&&An(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=An(e,"borderTopColor"))}var o=new rn(this._pt,e.style,t,0,1,Bp),c=0,l=0,h,u,f,d,g,_,m,p,w,b,y,S;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=An(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=An(e,t)||r,_?e.style[t]=_:mr(e,t)),h=[n,r],Dp(h),n=h[0],r=h[1],f=n.match(Zr)||[],S=r.match(Zr)||[],S.length){for(;u=Zr.exec(r);)m=u[0],w=r.substring(c,u.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),m!==(_=f[l++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=es(d,m)+y),p=parseFloat(m),b=m.substr((p+"").length),c=Zr.lastIndex-b.length,b||(b=b||_n.units[t]||y,c===r.length&&(r+=b,o.e+=b)),y!==b&&(d=Bi(e,t,_,b)||0),o._pt={_next:o._pt,p:w||l===1?w:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<r.length?r.substring(c,r.length):""}else o.r=t==="display"&&r==="none"?Wp:Gp;return sp.test(r)&&(o.e=0),this._pt=o,o},wf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wb=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=wf[n]||n,t[1]=wf[r]||r,t.join(" ")},Eb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)r.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],mi[o]&&(c=1,o=o==="transformOrigin"?sn:dt),mr(n,o);c&&(mr(n,dt),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",na(n,1),a.uncache=1,Xp(r)))}},Lo={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new rn(e._pt,t,n,0,0,Eb);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},ta=[1,0,0,1,0,0],$p={},Kp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ef=function(e){var t=An(e,dt);return Kp(t)?ta:t.substr(7).match(rp).map(vt)},Hh=function(e,t){var n=e._gsap||lr(e),r=e.style,s=Ef(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?ta:s):(s===ta&&!e.offsetParent&&e!==ts&&!n.svg&&(c=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,ts.appendChild(e)),s=Ef(e),c?r.display=c:mr(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):ts.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nh=function(e,t,n,r,s,a){var o=e._gsap,c=s||Hh(e,!0),l=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=c[0],g=c[1],_=c[2],m=c[3],p=c[4],w=c[5],b=t.split(" "),y=parseFloat(b[0])||0,S=parseFloat(b[1])||0,E,M,C,x;n?c!==ta&&(M=d*m-g*_)&&(C=y*(m/M)+S*(-_/M)+(_*w-m*p)/M,x=y*(-g/M)+S*(d/M)-(d*w-g*p)/M,y=C,S=x):(E=Zp(e),y=E.x+(~b[0].indexOf("%")?y/100*E.width:y),S=E.y+(~(b[1]||b[0]).indexOf("%")?S/100*E.height:S)),r||r!==!1&&o.smooth?(p=y-l,w=S-h,o.xOffset=u+(p*d+w*_)-p,o.yOffset=f+(p*g+w*m)-w):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=S,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[sn]="0px 0px",a&&(Ri(a,o,"xOrigin",l,y),Ri(a,o,"yOrigin",h,S),Ri(a,o,"xOffset",u,o.xOffset),Ri(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},na=function(e,t){var n=e._gsap||new Up(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=An(e,sn)||"0",h,u,f,d,g,_,m,p,w,b,y,S,E,M,C,x,v,R,z,k,G,Y,B,$,F,K,te,se,W,ae,L,q;return h=u=f=_=m=p=w=b=y=0,d=g=1,n.svg=!!(e.getCTM&&jp(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[dt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[dt]!=="none"?c[dt]:"")),r.scale=r.rotate=r.translate="none"),M=Hh(e,n.svg),n.svg&&(n.uncache?(F=e.getBBox(),l=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),nh(e,$||l,!!$||n.originIsAbsolute,n.smooth!==!1,M)),S=n.xOrigin||0,E=n.yOrigin||0,M!==ta&&(R=M[0],z=M[1],k=M[2],G=M[3],h=Y=M[4],u=B=M[5],M.length===6?(d=Math.sqrt(R*R+z*z),g=Math.sqrt(G*G+k*k),_=R||z?Hr(z,R)*Qi:0,w=k||G?Hr(k,G)*Qi+_:0,w&&(g*=Math.abs(Math.cos(w*ns))),n.svg&&(h-=S-(S*R+E*k),u-=E-(S*z+E*G))):(q=M[6],ae=M[7],te=M[8],se=M[9],W=M[10],L=M[11],h=M[12],u=M[13],f=M[14],C=Hr(q,W),m=C*Qi,C&&(x=Math.cos(-C),v=Math.sin(-C),$=Y*x+te*v,F=B*x+se*v,K=q*x+W*v,te=Y*-v+te*x,se=B*-v+se*x,W=q*-v+W*x,L=ae*-v+L*x,Y=$,B=F,q=K),C=Hr(-k,W),p=C*Qi,C&&(x=Math.cos(-C),v=Math.sin(-C),$=R*x-te*v,F=z*x-se*v,K=k*x-W*v,L=G*v+L*x,R=$,z=F,k=K),C=Hr(z,R),_=C*Qi,C&&(x=Math.cos(C),v=Math.sin(C),$=R*x+z*v,F=Y*x+B*v,z=z*x-R*v,B=B*x-Y*v,R=$,Y=F),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=vt(Math.sqrt(R*R+z*z+k*k)),g=vt(Math.sqrt(B*B+q*q)),C=Hr(Y,B),w=Math.abs(C)>2e-4?C*Qi:0,y=L?1/(L<0?-L:L):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Kp(An(e,dt)),$&&e.setAttribute("transform",$))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(d*=-1,w+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=vt(d),n.scaleY=vt(g),n.rotation=vt(_)+o,n.rotationX=vt(m)+o,n.rotationY=vt(p)+o,n.skewX=w+o,n.skewY=b+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(r[sn]=Uo(l)),n.xOffset=n.yOffset=0,n.force3D=_n.force3D,n.renderTransform=n.svg?Ab:Yp?Jp:Tb,n.uncache=0,n},Uo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ol=function(e,t,n){var r=zt(t);return vt(parseFloat(t)+parseFloat(Bi(e,"x",n+"px",r)))+r},Tb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Jp(e,t)},$i="0deg",Ls="0px",Ki=") ",Jp=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,w=n.target,b=n.zOrigin,y="",S=p==="auto"&&e&&e!==1||p===!0;if(b&&(u!==$i||h!==$i)){var E=parseFloat(h)*ns,M=Math.sin(E),C=Math.cos(E),x;E=parseFloat(u)*ns,x=Math.cos(E),a=Ol(w,a,M*x*-b),o=Ol(w,o,-Math.sin(E)*-b),c=Ol(w,c,C*x*-b+b)}m!==Ls&&(y+="perspective("+m+Ki),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(S||a!==Ls||o!==Ls||c!==Ls)&&(y+=c!==Ls||S?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Ki),l!==$i&&(y+="rotate("+l+Ki),h!==$i&&(y+="rotateY("+h+Ki),u!==$i&&(y+="rotateX("+u+Ki),(f!==$i||d!==$i)&&(y+="skew("+f+", "+d+Ki),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ki),w.style[dt]=y||"translate(0, 0)"},Ab=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,w=n.forceCSS,b=parseFloat(a),y=parseFloat(o),S,E,M,C,x;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=ns,l*=ns,S=Math.cos(c)*u,E=Math.sin(c)*u,M=Math.sin(c-l)*-f,C=Math.cos(c-l)*f,l&&(h*=ns,x=Math.tan(l-h),x=Math.sqrt(1+x*x),M*=x,C*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),S*=x,E*=x)),S=vt(S),E=vt(E),M=vt(M),C=vt(C)):(S=u,C=f,E=M=0),(b&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(b=Bi(d,"x",a,"px"),y=Bi(d,"y",o,"px")),(g||_||m||p)&&(b=vt(b+g-(g*S+_*M)+m),y=vt(y+_-(g*E+_*C)+p)),(r||s)&&(x=d.getBBox(),b=vt(b+r/100*x.width),y=vt(y+s/100*x.height)),x="matrix("+S+","+E+","+M+","+C+","+b+","+y+")",d.setAttribute("transform",x),w&&(d.style[dt]=x)},Rb=function(e,t,n,r,s){var a=360,o=Pt(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Qi:1),l=c-r,h=r+l+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-360)),u==="cw"&&l<0?l=(l+a*vf)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*vf)%a-~~(l/a)*a)),e._pt=f=new rn(e._pt,t,n,r,l,ub),f.e=h,f.u="deg",e._props.push(n),f},Tf=function(e,t){for(var n in t)e[n]=t[n];return e},Cb=function(e,t,n){var r=Tf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,h,u,f,d,g;r.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[dt]=t,o=na(n,1),mr(n,dt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[dt],a[dt]=t,o=na(n,1),a[dt]=l);for(c in mi)l=r[c],h=o[c],l!==h&&s.indexOf(c)<0&&(d=zt(l),g=zt(h),u=d!==g?Bi(n,c,l,g):parseFloat(l),f=parseFloat(h),e._pt=new rn(e._pt,o,c,u,f-u,Qc),e._pt.u=g||0,e._props.push(c));Tf(o,r)};nn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});Lo[e>1?"border"+i:i]=function(o,c,l,h,u){var f,d;if(arguments.length<4)return f=a.map(function(g){return si(o,g,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(c,d,u)}});var Qp={name:"css",register:th,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,c=n.vars.startAt,l,h,u,f,d,g,_,m,p,w,b,y,S,E,M,C;zh||th(),this.styles=this.styles||qp(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(un[_]&&Fp(_,t,n,r,e,s)))){if(d=typeof h,g=Lo[_],d==="function"&&(h=h.call(n,r,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Js(h)),g)g(this,e,_,h,n)&&(M=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Ui.lastIndex=0,Ui.test(l)||(m=zt(l),p=zt(h)),p?m!==p&&(l=Bi(e,_,l,p)+p):m&&(h+=m),this.add(o,"setProperty",l,h,r,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(d!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,r,e,s):c[_],Pt(l)&&~l.indexOf("random(")&&(l=Js(l)),zt(l+"")||l==="auto"||(l+=_n.units[_]||zt(si(e,_))||""),(l+"").charAt(1)==="="&&(l=si(e,_))):l=si(e,_),f=parseFloat(l),w=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),u=parseFloat(h),_ in Xn&&(_==="autoAlpha"&&(f===1&&si(e,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,o.visibility),Ri(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Xn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in mi,b){if(this.styles.save(_),d==="string"&&h.substring(0,6)==="var(--"&&(h=An(e,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),y||(S=e._gsap,S.renderTransform&&!t.parseTransform||na(e,t.parseTransform),E=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new rn(this._pt,o,dt,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new rn(this._pt,S,"scaleY",S.scaleY,(w?es(S.scaleY,w+u):u)-S.scaleY||0,Qc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(sn,0,o[sn]),h=wb(h),S.svg?nh(e,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==S.zOrigin&&Ri(this,S,"zOrigin",S.zOrigin,p),Ri(this,o,_,Uo(l),Uo(h)));continue}else if(_==="svgOrigin"){nh(e,h,1,E,0,this);continue}else if(_ in $p){Rb(this,S,_,f,w?es(f,w+h):h);continue}else if(_==="smoothOrigin"){Ri(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){Cb(this,h,e);continue}}else _ in o||(_=_s(_)||_);if(b||(u||u===0)&&(f||f===0)&&!hb.test(h)&&_ in o)m=(l+"").substr((f+"").length),u||(u=0),p=zt(h)||(_ in _n.units?_n.units[_]:m),m!==p&&(f=Bi(e,_,l,p)),this._pt=new rn(this._pt,b?S:o,_,f,(w?es(f,w+u):u)-f,!b&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?db:Qc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=fb);else if(_ in o)Mb.call(this,e,_,l,w?w+h:h);else if(_ in e)this.add(e,_,l||e[_],w?w+h:h,r,s);else if(_!=="parseTransform"){Ch(_,h);continue}b||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,l||e[_])),a.push(_)}}M&&Vp(this)},render:function(e,t){if(t.tween._time||!Bh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:si,aliases:Xn,getSetter:function(e,t,n){var r=Xn[t];return r&&r.indexOf(",")<0&&(t=r),t in mi&&t!==sn&&(e._gsap.x||si(e,"x"))?n&&xf===n?t==="scale"?gb:_b:(xf=n||{})&&(t==="scale"?xb:vb):e.style&&!Th(e.style[t])?pb:~t.indexOf("-")?mb:Nh(e,t)},core:{_removeProperty:mr,_getMatrix:Hh}};an.utils.checkPrefix=_s;an.core.getStyleSaver=qp;(function(i,e,t,n){var r=nn(i+","+e+","+t,function(s){mi[s]=1});nn(e,function(s){_n.units[s]="deg",$p[s]=1}),Xn[r[13]]=i+","+e,nn(n,function(s){var a=s.split(":");Xn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){_n.units[i]="px"});an.registerPlugin(Qp);var xo=an.registerPlugin(Qp)||an;xo.core.Tween;var Db=Object.defineProperty,Pb=(i,e,t)=>e in i?Db(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,$e=(i,e,t)=>(Pb(i,typeof e!="symbol"?e+"":e,t),t);function Nl(i,e,t,n,r){let s;if(i=i.subarray||i.slice?i:i.buffer,t=t.subarray||t.slice?t:t.buffer,i=e?i.subarray?i.subarray(e,r&&e+r):i.slice(e,r&&e+r):i,t.set)t.set(i,n);else for(s=0;s<i.length;s++)t[s+n]=i[s];return t}function Ib(i){return i instanceof Float32Array?i:i instanceof Tt?i.getAttribute("position").array:i.map(e=>{const t=Array.isArray(e);return e instanceof P?[e.x,e.y,e.z]:e instanceof Ee?[e.x,e.y,0]:t&&e.length===3?[e[0],e[1],e[2]]:t&&e.length===2?[e[0],e[1],0]:e}).flat()}class Lb extends Tt{constructor(){super(),$e(this,"type","MeshLine"),$e(this,"isMeshLine",!0),$e(this,"positions",[]),$e(this,"previous",[]),$e(this,"next",[]),$e(this,"side",[]),$e(this,"width",[]),$e(this,"indices_array",[]),$e(this,"uvs",[]),$e(this,"counters",[]),$e(this,"widthCallback",null),$e(this,"_attributes"),$e(this,"_points",[]),$e(this,"points"),$e(this,"matrixWorld",new lt),Object.defineProperties(this,{points:{enumerable:!0,get(){return this._points},set(e){this.setPoints(e,this.widthCallback)}}})}setMatrixWorld(e){this.matrixWorld=e}setPoints(e,t){if(e=Ib(e),this._points=e,this.widthCallback=t??null,this.positions=[],this.counters=[],e.length&&e[0]instanceof P)for(let n=0;n<e.length;n++){const r=e[n],s=n/(e.length-1);this.positions.push(r.x,r.y,r.z),this.positions.push(r.x,r.y,r.z),this.counters.push(s),this.counters.push(s)}else for(let n=0;n<e.length;n+=3){const r=n/(e.length-1);this.positions.push(e[n],e[n+1],e[n+2]),this.positions.push(e[n],e[n+1],e[n+2]),this.counters.push(r),this.counters.push(r)}this.process()}compareV3(e,t){const n=e*6,r=t*6;return this.positions[n]===this.positions[r]&&this.positions[n+1]===this.positions[r+1]&&this.positions[n+2]===this.positions[r+2]}copyV3(e){const t=e*6;return[this.positions[t],this.positions[t+1],this.positions[t+2]]}process(){const e=this.positions.length/6;this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[];let t,n;this.compareV3(0,e-1)?n=this.copyV3(e-2):n=this.copyV3(0),this.previous.push(n[0],n[1],n[2]),this.previous.push(n[0],n[1],n[2]);for(let r=0;r<e;r++){if(this.side.push(1),this.side.push(-1),this.widthCallback?t=this.widthCallback(r/(e-1)):t=1,this.width.push(t),this.width.push(t),this.uvs.push(r/(e-1),0),this.uvs.push(r/(e-1),1),r<e-1){n=this.copyV3(r),this.previous.push(n[0],n[1],n[2]),this.previous.push(n[0],n[1],n[2]);const s=r*2;this.indices_array.push(s,s+1,s+2),this.indices_array.push(s+2,s+1,s+3)}r>0&&(n=this.copyV3(r),this.next.push(n[0],n[1],n[2]),this.next.push(n[0],n[1],n[2]))}this.compareV3(e-1,0)?n=this.copyV3(1):n=this.copyV3(e-1),this.next.push(n[0],n[1],n[2]),this.next.push(n[0],n[1],n[2]),!this._attributes||this._attributes.position.count!==this.counters.length?this._attributes={position:new xt(new Float32Array(this.positions),3),previous:new xt(new Float32Array(this.previous),3),next:new xt(new Float32Array(this.next),3),side:new xt(new Float32Array(this.side),1),width:new xt(new Float32Array(this.width),1),uv:new xt(new Float32Array(this.uvs),2),index:new xt(new Uint16Array(this.indices_array),1),counters:new xt(new Float32Array(this.counters),1)}:(this._attributes.position.copyArray(new Float32Array(this.positions)),this._attributes.position.needsUpdate=!0,this._attributes.previous.copyArray(new Float32Array(this.previous)),this._attributes.previous.needsUpdate=!0,this._attributes.next.copyArray(new Float32Array(this.next)),this._attributes.next.needsUpdate=!0,this._attributes.side.copyArray(new Float32Array(this.side)),this._attributes.side.needsUpdate=!0,this._attributes.width.copyArray(new Float32Array(this.width)),this._attributes.width.needsUpdate=!0,this._attributes.uv.copyArray(new Float32Array(this.uvs)),this._attributes.uv.needsUpdate=!0,this._attributes.index.copyArray(new Uint16Array(this.indices_array)),this._attributes.index.needsUpdate=!0),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setIndex(this._attributes.index),this.computeBoundingSphere(),this.computeBoundingBox()}advance({x:e,y:t,z:n}){const r=this._attributes.position.array,s=this._attributes.previous.array,a=this._attributes.next.array,o=r.length;Nl(r,0,s,0,o),Nl(r,6,r,0,o-6),r[o-6]=e,r[o-5]=t,r[o-4]=n,r[o-3]=e,r[o-2]=t,r[o-1]=n,Nl(r,6,a,0,o-6),a[o-6]=e,a[o-5]=t,a[o-4]=n,a[o-3]=e,a[o-2]=t,a[o-1]=n,this._attributes.position.needsUpdate=!0,this._attributes.previous.needsUpdate=!0,this._attributes.next.needsUpdate=!0}}const Ub=`
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
`,Fb=parseInt(ko.replace(/\D+/g,"")),Ob=Fb>=154?"colorspace_fragment":"encodings_fragment",Nb=`
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
    #include <${Ob}>
  }
`;class kb extends di{constructor(e){super({uniforms:{...ce.fog,lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},color:{value:new Ve(16777215)},gradient:{value:[new Ve(16711680),new Ve(65280)]},opacity:{value:1},resolution:{value:new Ee(1,1)},sizeAttenuation:{value:1},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:0},useGradient:{value:0},visibility:{value:1},alphaTest:{value:0},repeat:{value:new Ee(1,1)}},vertexShader:Ub,fragmentShader:Nb}),$e(this,"lineWidth"),$e(this,"map"),$e(this,"useMap"),$e(this,"alphaMap"),$e(this,"useAlphaMap"),$e(this,"color"),$e(this,"gradient"),$e(this,"resolution"),$e(this,"sizeAttenuation"),$e(this,"dashArray"),$e(this,"dashOffset"),$e(this,"dashRatio"),$e(this,"useDash"),$e(this,"useGradient"),$e(this,"visibility"),$e(this,"repeat"),this.type="MeshLineMaterial",Object.defineProperties(this,{lineWidth:{enumerable:!0,get(){return this.uniforms.lineWidth.value},set(t){this.uniforms.lineWidth.value=t}},map:{enumerable:!0,get(){return this.uniforms.map.value},set(t){this.uniforms.map.value=t}},useMap:{enumerable:!0,get(){return this.uniforms.useMap.value},set(t){this.uniforms.useMap.value=t}},alphaMap:{enumerable:!0,get(){return this.uniforms.alphaMap.value},set(t){this.uniforms.alphaMap.value=t}},useAlphaMap:{enumerable:!0,get(){return this.uniforms.useAlphaMap.value},set(t){this.uniforms.useAlphaMap.value=t}},color:{enumerable:!0,get(){return this.uniforms.color.value},set(t){this.uniforms.color.value=t}},gradient:{enumerable:!0,get(){return this.uniforms.gradient.value},set(t){this.uniforms.gradient.value=t}},opacity:{enumerable:!0,get(){return this.uniforms.opacity.value},set(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get(){return this.uniforms.resolution.value},set(t){this.uniforms.resolution.value.copy(t)}},sizeAttenuation:{enumerable:!0,get(){return this.uniforms.sizeAttenuation.value},set(t){this.uniforms.sizeAttenuation.value=t}},dashArray:{enumerable:!0,get(){return this.uniforms.dashArray.value},set(t){this.uniforms.dashArray.value=t,this.useDash=t!==0?1:0}},dashOffset:{enumerable:!0,get(){return this.uniforms.dashOffset.value},set(t){this.uniforms.dashOffset.value=t}},dashRatio:{enumerable:!0,get(){return this.uniforms.dashRatio.value},set(t){this.uniforms.dashRatio.value=t}},useDash:{enumerable:!0,get(){return this.uniforms.useDash.value},set(t){this.uniforms.useDash.value=t}},useGradient:{enumerable:!0,get(){return this.uniforms.useGradient.value},set(t){this.uniforms.useGradient.value=t}},visibility:{enumerable:!0,get(){return this.uniforms.visibility.value},set(t){this.uniforms.visibility.value=t}},alphaTest:{enumerable:!0,get(){return this.uniforms.alphaTest.value},set(t){this.uniforms.alphaTest.value=t}},repeat:{enumerable:!0,get(){return this.uniforms.repeat.value},set(t){this.uniforms.repeat.value.copy(t)}}}),this.setValues(e)}copy(e){return super.copy(e),this.lineWidth=e.lineWidth,this.map=e.map,this.useMap=e.useMap,this.alphaMap=e.alphaMap,this.useAlphaMap=e.useAlphaMap,this.color.copy(e.color),this.gradient=e.gradient,this.opacity=e.opacity,this.resolution.copy(e.resolution),this.sizeAttenuation=e.sizeAttenuation,this.dashArray=e.dashArray,this.dashOffset=e.dashOffset,this.dashRatio=e.dashRatio,this.useDash=e.useDash,this.useGradient=e.useGradient,this.visibility=e.visibility,this.alphaTest=e.alphaTest,this.repeat.copy(e.repeat),this}}class ze{constructor(e){this.collection=e}[Symbol.iterator](){const e=Object.entries(this.collection);let t=0;return{next:()=>{if(t<e.length){const n=e[t];return t++,{value:n,done:!1}}else return{done:!0}}}}keys(){return Object.keys(this.collection)}empty(){return Object.keys(this.collection).length===0}hide(e=null){if(e&&e in this.collection)this.collection[e].hide();else{let t=Object.keys(this.collection);for(let n of t)this.collection[n].hide()}}show(e=null){if(e&&e in this.collection)this.collection[e].show();else{let t=Object.keys(this.collection);for(let n of t)this.collection[n].show()}}showVisibleIDs(e){let t=Object.keys(e);for(let n of t)n in this.collection&&(e[n]?this.collection[n].show():this.collection[n].hide())}destroy(e=null){if(e&&e in this.collection)this.collection[e].destroy();else{let t=Object.keys(this.collection);for(let n of t)this.collection[n].destroy()}this.collection={}}resize(e,t=null){if(t&&t in this.collection)this.collection[t].resize(e);else{let n=Object.keys(this.collection);for(let r of n)this.collection[r].resize(e)}}}function Af(i,e){let t=1/0,n=0;for(const r of Object.values(i))for(let s=0;s<r.length;s+=3){const a=r[s]/e,o=r[s+1]/e,c=r[s+2]/e,l=Math.sqrt(a*a+o*o+c*c);if(l>0){const h=1/l;h<t&&(t=h),h>n&&(n=h)}}return{dMin:t===1/0?1:t,dMax:n===0?50:n}}function to(i,e,t,n){const r=i.length/3,s=new Float32Array(r*3),a=new Ve,o=n-t||1;for(let c=0;c<r;c++){const l=i[3*c]/e,h=i[3*c+1]/e,u=i[3*c+2]/e,f=Math.sqrt(l*l+h*h+u*u),d=f>0?1/f:n,g=Math.max(0,Math.min(1,(d-t)/o));a.setHSL(g*.667,1,.5),s[3*c]=a.r,s[3*c+1]=a.g,s[3*c+2]=a.b}return s}class _t{constructor(e,t,n,r,s,a,o=null){this.positions=e,this.color=t,this.sprite=r,this.rLPScaleFactor=a,this.vertexColors=o;const c=this.createPoints(e,t,n,r,o);window.scene.add(c),this.points=c,s||this.hide()}createPoints(e,t,n,r,s=null){const a=new Tt;a.setAttribute("position",new en(e,3));const o={size:n,map:r,alphaTest:.5,transparent:!0};s?(a.setAttribute("color",new en(s,3)),o.vertexColors=!0):o.color=t;const c=new Sh(o);return new Xd(a,c)}hide(){this.points.visible=!1}show(){this.points.visible=!0}isVisible(){return this.points.visible}destroy(){window.scene.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose()}resize(e){const t=this.points.visible;this.destroy();const n=this.createPoints(this.positions,this.color,e,this.sprite,this.vertexColors);window.scene.add(n),this.points=n,this.size=e,t||this.hide()}}class Rf{constructor(e,t,n,r){this.vectors=e,this.color=t,this.lineWidth=n,this.fontSize=r,this.meshes=this.createMeshes(e,t,n,r)}createMeshes(e,t,n,r){const s=e[0].clone(),a=e[1].clone(),o=e[2].clone(),c=new P(0,0,0),l=`#${t.toString(16).padStart(6,"0")}`,h=this.getRLVLabel("a*",c.clone().add(s).multiplyScalar(.5),l,r),u=this.getRLVLabel("b*",c.clone().add(a).multiplyScalar(.5),l,r),f=this.getRLVLabel("c*",c.clone().add(o).multiplyScalar(.5),l,r),d=[c,s,s.clone().add(a),a,c,o,o.clone().add(s),s,s.clone().add(a),s.clone().add(a).add(o),s.clone().add(o),o,a.clone().add(o),s.clone().add(a).add(o),a.clone().add(o),a,c],g=new Lb,_=d.map(w=>new P(w.x,w.y,w.z));g.setPoints(_);const m=new kb({lineWidth:.005,color:t}),p=new dn(g,m);return window.scene.add(p),window.scene.add(h),window.scene.add(u),window.scene.add(f),window.viewer.requestRender(),[p,h,u,f]}getRLVLabel(e,t,n,r){var s=document.createElement("canvas");s.width=256,s.height=128;var a=s.getContext("2d");a.font="Bold "+r.toString()+"px Tahoma",a.fillStyle=n,a.textAlign="center",a.textBaseline="middle",a.fillText(e,s.width/2,s.height/2);var o=new qd(s),c=new yh({map:o,transparent:!0,alphaTest:.5,depthWrite:!1,depthTest:!1,sizeAttenuation:!0}),l=new Gd(c);return l.scale.set(100,50,1),l.position.copy(t),l}destroy(){for(let e=0;e<this.meshes.length;e++)window.scene.remove(this.meshes[e]),this.meshes[e].geometry.dispose(),this.meshes[e].material.dispose();this.meshes=[]}hide(){for(let e=0;e<this.meshes.length;e++)this.meshes[e].visible=!1}show(){for(let e=0;e<this.meshes.length;e++)this.meshes[e].visible=!0}resize(e){for(let t=1;t<this.meshes.length;t++)this.meshes[t].scale.set(e*12.5,e*6.25,1);window.viewer.requestRender()}}class Cf{constructor(e,t,n,r){this.positions=e,this.millerIndices=t,this.sprites=[],this.createSprites(e,t,n),r||this.hide()}createSprite(e,t,n,r,s){const a=document.createElement("canvas");a.width=128,a.height=48;const o=a.getContext("2d");o.font="Bold 24px Tahoma",o.fillStyle="white",o.textAlign="center",o.textBaseline="middle",o.fillText(e,a.width/2,a.height/2);const c=new qd(a),l=new yh({map:c,transparent:!0,alphaTest:.01,depthWrite:!1,depthTest:!1,sizeAttenuation:!0}),h=new Gd(l);return h.scale.set(s*2,s,1),h.position.set(t,n+s*.6,r),h}createSprites(e,t,n){const r=n*4;for(let s=0;s<t.length;s++){const a=t[s],o=`${a[0]} ${a[1]} ${a[2]}`,c=this.createSprite(o,e[3*s],e[3*s+1],e[3*s+2],r);window.scene.add(c),this.sprites.push(c)}}hide(){for(const e of this.sprites)e.visible=!1}show(){for(const e of this.sprites)e.visible=!0}isVisible(){return this.sprites.length>0&&this.sprites[0].visible}destroy(){for(const e of this.sprites)window.scene.remove(e),e.material.map.dispose(),e.material.dispose();this.sprites=[]}resize(e){const t=e*4;for(const n of this.sprites)n.scale.set(t*2,t,1)}}class Kt{constructor(e,t,n,r,s=null){_i(this,"addExperiment",async e=>{this.clearExperiment(),this.clearReflectionTable(),await this.expt.parseExperiment(e),console.assert(this.hasExperiment()),this.addBeam(),this.addSample(),this.addEwaldSpheres(),this.addReciprocalCells(),this.setCameraToDefaultPositionWithExperiment(),this.showSidebar(),this.isStandalone&&this.showCloseExptButton(),this.setSelectionDropdownToOrientations(),this.requestRender()});_i(this,"addExperimentFromJSONString",async(e,t=!1)=>{t||this.saveUserState(),this.clearExperiment(),await this.expt.parseExperimentJSON(e),console.assert(this.hasExperiment()),this.addBeam(),this.addSample(),this.addEwaldSpheres(),this.addReciprocalCells(),t&&(this.setCameraToDefaultPositionWithExperiment(),this.showSidebar()),this.isStandalone&&this.showCloseExptButton(),this.crystalView?this.setSelectionDropdownToCrystals():this.setSelectionDropdownToOrientations(),t||(this.applySavedUserState(),this.clearSavedUserState()),this.requestRender()});_i(this,"addReflectionTable",async e=>{this.clearReflectionTable(),await this.refl.parseReflectionTable(e),this.addReflections(),this.hasReflectionTable()&&this.isStandalone&&this.showCloseReflButton(),this.requestRender()});this.isStandalone=r,this.serverWS=null,this.colors=null,s!=null?this.colors=s:this.colors=Kt.defaultColors(),this.expt=e,this.refl=t,this.calculatedIntegratedRefl=n,this.headerText=window.document.getElementById("headerText"),this.sidebar=window.document.getElementById("sidebar"),this.closeExptButton=document.getElementById("closeExpt"),this.closeReflButton=document.getElementById("closeRefl"),this.indexedReflectionsCheckbox=document.getElementById("indexedReflectionsCheckbox"),this.unindexedReflectionsCheckbox=document.getElementById("unindexedReflectionsCheckbox"),this.calculatedReflectionsCheckbox=document.getElementById("calculatedReflectionsCheckbox"),this.integratedReflectionsCheckbox=document.getElementById("integratedReflectionsCheckbox"),this.reciprocalCellCheckbox=document.getElementById("reciprocalCellCheckbox"),this.crystalFrameCheckbox=document.getElementById("crystalFrameCheckbox"),this.ewaldSphereCheckbox=document.getElementById("ewaldSphereCheckbox"),this.reflectionSize=document.getElementById("reflectionSizeSlider"),this.millerIndexLabelsCheckbox=document.getElementById("millerIndexLabelsCheckbox"),this.millerIndexLabelSizeSlider=document.getElementById("millerIndexLabelSizeSlider"),this.unitCellAlignContainer=document.getElementById("unitCellAlignContainer"),this.unitCellAlignCrystalIdx=[0,0,0],this.currentMesh=null,this.meshData=null,this.meshWorker=null,this.meshShape=null,this.rLPMin=null,this.rLPMax=null,this.rLPStep=null,this.beamMeshes=[],this.ewaldSphereMeshes=[],this.sampleMesh=null,this.reciprocalMeshVisible=!1,this.resolutionCircleMeshes=[],this.millerIndexLabels=new ze({}),this.unindexedReflections=new ze({}),this.indexedReflections=new ze({}),this.calculatedReflections=new ze({}),this.integratedReflections=new ze({}),this.crystalIndexedReflections=new ze({}),this.crystalCalculatedReflections=new ze({}),this.crystalIntegratedReflections=new ze({}),this.resolutionIndexedReflections=new ze({}),this.resolutionUnindexedReflections=new ze({}),this.orientationReciprocalCells=new ze({}),this.crystalReciprocalCells=new ze({}),this.visibleExptIDs={},this.visibleCrystalIDs={},this.beamMeshes=[],this.ewaldSphereMeshes=[],this.sampleMesh=null,this.crystalView=!1,this.resolutionView=!1,this.crystalFrame=!1,this.integratedReflectionsFromCalculated=!1,this.preventMouseClick=!1,this.reflHighlight=null,this.savedUserState=null,this.rLPScaleFactor=1e3,this.reflSprite=new mg().load("disc.png"),this.displayingTextFromHTMLEvent=!1,this.updateReflectionCheckboxStatus(),this.setDefaultReflectionsDisplay(),this.initDefaultSideBarText(),this.updateMeshVisibility(!1)}static defaultColors(){return{background:2236962,sample:16643811,reflectionUnindexed:[9894267,7715837,12548086,1305289,16756860,16765407,13696766,16777092,16777215,16749576,129478,11468140,16646146,10030923,7918006,16775447,16713609,13959167,6936655,5680727],reflectionCrystalIndexed:[9894267,7715837,12548086,1305289,16756860,16765407,13696766,16777092,16777215,16749576,129478,11468140,16646146,10030923,7918006,16775447,16713609,13959167,6936655,5680727],reflectionIndexed:15158332,reflectionCrystalUnindexed:6977160,reciprocalMesh:6977160,reflectionCalculated:16755370,reflectionIntegrated:16761436,highlight:16777215,resolutionCircle:6977160,beam:16777215,ewaldSphere:8965375,reciprocalCell:16777215}}static sizes(){return{minRLVLineWidth:1,maxRLVLineWidth:8,minRLVLabelSize:12,beamLength:800,sample:1,RLVLineWidthScaleFactor:15,RLVLabelScaleFactor:30,meshScaleFactor:1e3}}static cameraPositions(){return{default:new P(0,0,-1e3),defaultWithExperiment:new P(-1e3,0,0),centre:new P(0,0,0)}}static text(){return{default:"To view an experiment, drag .expt and .refl files into the browser",defaultWithExpt:null}}initDefaultSideBarText(){this.updateMaxResolutionValue(!1),this.updateMeshThresholdValue(),this.updateMeshGridSizeValue()}saveUserState(){this.savedUserState={unindexedReflectionsCheckbox:this.unindexedReflectionsCheckbox.checked,indexedReflectionsCheckbox:this.indexedReflectionsCheckbox.checked,calculatedReflectionsCheckbox:this.calculatedReflectionsCheckbox.checked,integratedReflectionsCheckbox:this.integratedReflectionsCheckbox.checked,crystalFrameCheckbox:this.crystalFrameCheckbox.checked,reciprocalCellCheckbox:this.reciprocalCellCheckbox.checked,millerIndexLabelsCheckbox:this.millerIndexLabelsCheckbox.checked,visibleExptIDs:this.visibleExptIDs,visibleCrystalIDs:this.visibleCrystalIDs}}applySavedUserState(){if(this.savedUserState===null)return;const e=this.savedUserState;this.unindexedReflectionsCheckbox.checked=e.unindexedReflectionsCheckbox,this.indexedReflectionsCheckbox.checked=e.indexedReflectionsCheckbox,this.calculatedReflectionsCheckbox.checked=e.calculatedReflectionsCheckbox,this.integratedReflectionsCheckbox.checked=e.integratedReflectionsCheckbox,this.crystalFrameCheckbox.checked=e.crystalFrameCheckbox,this.reciprocalCellCheckbox.checked=e.reciprocalCellCheckbox,e.millerIndexLabelsCheckbox!==void 0&&(this.millerIndexLabelsCheckbox.checked=e.millerIndexLabelsCheckbox),this.visibleExptIDs=e.visibleExptIDs,this.visibleCrystalIDs=e.visibleCrystalIDs,this.updateReciprocalCellsVisibility(),this.updateExptIDVisibility(),this.updateCrystalIDVisibility(),this.updateReflectionsVisibility()}clearSavedUserState(){this.savedUserState=null}toggleSidebar(){this.sidebar.classList.toggle("hidden")}showSidebar(){this.sidebar.style.display="block"}updateCrystalFrame(){this.saveUserState(),this.expt.hasCrystal(0)&&(this.crystalFrame=this.crystalFrameCheckbox.checked,this.addReciprocalCells(),this.refl.hasReflTable()&&(this.addReflectionsFromJSONMsgpack(this.refl.rawReflData,this.integratedReflectionsFromCalculated),this.integratedReflectionsFromCalculated&&this.addCalculatedIntegratedReflectionsFromJSONMsgpack(this.calculatedIntegratedRefl.rawReflData),this.applySavedUserState(),this.clearSavedUserState()))}updateReflectionsVisibility(){this.updateUnindexedReflectionsVisibility(),this.updateIndexedReflectionsVisibility(),this.updateCalculatedReflectionsVisibility(),this.updateIntegratedReflectionsVisibility(),this.updateMillerIndexLabelsVisibility()}updateIndexedReflectionsVisibility(){this.indexedReflectionsCheckbox.checked?this.resolutionView?(this.resolutionIndexedReflections.show(),this.indexedReflections.hide(),this.crystalIndexedReflections.hide()):this.crystalView?(this.crystalIndexedReflections.showVisibleIDs(this.visibleCrystalIDs),this.indexedReflections.hide(),this.resolutionIndexedReflections.hide()):(this.indexedReflections.showVisibleIDs(this.visibleExptIDs),this.crystalIndexedReflections.hide(),this.resolutionIndexedReflections.hide()):(this.crystalIndexedReflections.hide(),this.indexedReflections.hide(),this.resolutionIndexedReflections.hide(),this.unindexedReflectionsCheckbox.checked&&this.crystalView&&this.crystalIndexedReflections.show("-1")),this.requestRender()}updateUnindexedReflectionsVisibility(){this.unindexedReflectionsCheckbox.checked?this.resolutionView?(this.resolutionUnindexedReflections.show(),this.unindexedReflections.hide(),this.crystalIndexedReflections.hide("-1")):this.crystalView?(this.crystalIndexedReflections.show("-1"),this.unindexedReflections.hide(),this.resolutionUnindexedReflections.hide()):(this.unindexedReflections.showVisibleIDs(this.visibleExptIDs),this.crystalIndexedReflections.hide("-1"),this.resolutionUnindexedReflections.hide()):(this.unindexedReflections.hide(),this.crystalIndexedReflections.hide("-1"),this.resolutionUnindexedReflections.hide()),this.requestRender()}updateCalculatedReflectionsVisibility(){this.calculatedReflectionsCheckbox.checked?this.crystalView?(this.crystalCalculatedReflections.showVisibleIDs(this.visibleCrystalIDs),this.calculatedReflections.hide()):(this.calculatedReflections.showVisibleIDs(this.visibleExptIDs),this.crystalCalculatedReflections.hide()):(this.calculatedReflections.hide(),this.crystalCalculatedReflections.hide()),this.requestRender()}updateIntegratedReflectionsVisibility(){this.integratedReflectionsCheckbox.checked?this.crystalView?(this.crystalIntegratedReflections.showVisibleIDs(this.visibleCrystalIDs),this.integratedReflections.hide()):(this.integratedReflections.showVisibleIDs(this.visibleExptIDs),this.crystalIntegratedReflections.hide()):(this.integratedReflections.hide(),this.crystalIntegratedReflections.hide()),this.requestRender()}updateReciprocalCellsVisibility(){if(!this.reciprocalCellCheckbox.checked){this.orientationReciprocalCells.hide(),this.crystalReciprocalCells.hide(),this.requestRender();return}this.crystalView?(this.crystalReciprocalCells.showVisibleIDs(this.visibleCrystalIDs),this.orientationReciprocalCells.hide()):(this.orientationReciprocalCells.show(),this.crystalReciprocalCells.hide()),this.requestRender()}switchToCrystalView(){this.crystalView=!0,this.resolutionView=!1,document.querySelector(".dropdown").style.display="";const e=document.getElementById("selectionDropdownButton");e.innerHTML='<b>Crystals</b> <i class="fa fa-chevron-right" id="dropdownIcon"></i>',this.setSelectionDropdownToCrystals(),this.updateReflectionsVisibility(),this.updateReciprocalCellsVisibility()}switchToOrientationView(){this.crystalView=!1,this.resolutionView=!1,document.querySelector(".dropdown").style.display="";const e=document.getElementById("selectionDropdownButton");e.innerHTML='<b>Orientations</b> <i class="fa fa-chevron-right" id="dropdownIcon"></i>',this.setSelectionDropdownToOrientations(),this.updateReflectionsVisibility(),this.updateReciprocalCellsVisibility()}switchToResolutionView(){this.resolutionView=!0,this.crystalView=!1,document.querySelector(".dropdown").style.display="none",this.updateReflectionsVisibility(),this.updateReciprocalCellsVisibility()}updateReflectionSize(){if(!this.hasReflectionTable())return;const e=this.reflectionSize.value;this.unindexedReflections.resize(e),this.indexedReflections.resize(e),this.calculatedReflections.resize(e),this.integratedReflections.resize(e),this.crystalIndexedReflections.resize(e),this.crystalCalculatedReflections.resize(e),this.crystalIntegratedReflections.resize(e),this.resolutionIndexedReflections.resize(e),this.resolutionUnindexedReflections.resize(e),this.requestRender()}getS1(e,t,n,r=[1,1]){const s=new P(e[0]*r[0],e[1]*r[1],1);return s.applyMatrix3(t),s.normalize().multiplyScalar(1/n),s}hasExperiment(){return this.expt.hasExptJSON()}clearExperiment(){for(var e=0;e<this.beamMeshes.length;e++)window.scene.remove(this.beamMeshes[e]),this.beamMeshes[e].geometry.dispose(),this.beamMeshes[e].material.dispose();this.beamMeshes=[],this.clearEwaldSpheres(),this.sampleMesh&&(window.scene.remove(this.sampleMesh),this.sampleMesh.geometry.dispose(),this.sampleMesh.material.dispose(),this.sampleMesh=null),this.expt.clearExperiment(),this.hideCloseExptButton(),this.clearReflectionTable(),this.clearReciprocalCells(),this.clearSelectionDropdown(),this.clearMesh(),this.requestRender()}showCloseExptButton(){this.closeExptButton.style.display="inline",this.closeExptButton.innerHTML="<b>"+this.expt.filename+' <i class="fa fa-trash"></i>'}hideCloseExptButton(){this.closeExptButton.style.display="none"}hasReflectionTable(){return this.refl.hasReflTable()}clearReflectionTable(){this.millerIndexLabels.destroy(),this.unindexedReflections.destroy(),this.indexedReflections.destroy(),this.calculatedReflections.destroy(),this.integratedReflections.destroy(),this.crystalIndexedReflections.destroy(),this.crystalCalculatedReflections.destroy(),this.crystalIntegratedReflections.destroy(),this.resolutionIndexedReflections.destroy(),this.resolutionUnindexedReflections.destroy(),this.refl.clearReflectionTable(),this.updateReflectionCheckboxStatus(),this.setDefaultReflectionsDisplay(),this.isStandalone&&this.hideCloseReflButton(),this.requestRender()}showCloseReflButton(){this.closeReflButton.style.display="inline",this.closeReflButton.innerHTML="<b>"+this.refl.filename+' <i class="fa fa-trash"></i>'}hideCloseReflButton(){this.closeReflButton.style.display="none"}addReflectionsFromData(e,t=!1){function n(F,K,te,se,W,ae,L,q){const ie=F.clone().normalize().sub(te.clone().normalize()).multiplyScalar(1/K);if(!q)return ie.multiplyScalar(se.rLPScaleFactor);if(ae==null)return console.warn("Rotation angles not in reflection table. Cannot generate rlps correctly if rotation experiment."),ie.multiplyScalar(se.rLPScaleFactor);var ee=W.fixedRotation;const he=W.settingRotation,Se=W.rotationAxis;return window.viewer.crystalFrame&&L!==null&&(ee=ee.clone().multiply(L)),ie.applyMatrix3(he.clone().invert()),ie.applyAxisAngle(Se,-ae),ie.applyMatrix3(ee.clone().invert().transpose()),ie.multiplyScalar(se.rLPScaleFactor)}if(this.clearReflectionTable(),t||(this.refl.calculatedIntegratedPanelReflData={},this.integratedReflectionsFromCalculated=!1),!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded");return}this.refl.panelReflData=e,this.refl.reflTable="reflData";const r=Object.keys(e),s={},a={},o={},c={},l={},h={},u={};this.millerIndicesIndexed={};var f=this.expt.scan;const d=y!==null&&f!==null;for(var g=0;g<r.length;g++){const F=parseInt(r[g]);var _=e[r[g]];if(_===void 0)continue;const K=this.expt.getDetectorPanelDataByIdx(0,F);d&&(_=this.expt.addAnglesToReflections(_));const te=[K.pxSize.x,K.pxSize.y],se=K.dMatrix;for(var m=0;m<_.length;m++){const W=_[m],ae=W.exptID;var p=this.expt.getBeamData(ae).wavelength,w=this.expt.getBeamData(ae).wavelength,b=this.expt.getBeamDirection(ae).multiplyScalar(-1).normalize(),y=this.expt.experiments[ae].goniometer;if("xyzObs"in W){const L=W.xyzObs;if("wavelength"in W&&(p=W.wavelength),!p)continue;const q=this.getS1(L,se,p,te),ie=W.angleObs;var S=null;"crystalID"in W&&W.crystalID!=="-1"&&(S=this.expt.getCrystalU(parseInt(W.crystalID)));const ee=n(q,p,b,this,y,ie,S,d);if("millerIdx"in W&&W.indexed?(a[ae]||(a[ae]=[],this.millerIndicesIndexed[ae]=[]),a[ae].push(ee.x),a[ae].push(ee.y),a[ae].push(ee.z),this.millerIndicesIndexed[ae].push(W.millerIdx)):(s[ae]||(s[ae]=[]),s[ae].push(ee.x),s[ae].push(ee.y),s[ae].push(ee.z)),"crystalID"in W){const he=W.crystalID;he in l||(l[he]=[]),l[he].push(ee.x),l[he].push(ee.y),l[he].push(ee.z)}}if("xyzCal"in W){const L=W.xyzCal;if("wavelengthCal"in W&&(w=W.wavelengthCal),!w)continue;const q=this.getS1(L,se,w,te),ie=W.angleCal,ee=n(q,w,b,this,y,ie,S,d);if(o[ae]||(o[ae]=[]),o[ae].push(ee.x),o[ae].push(ee.y),o[ae].push(ee.z),"crystalID"in W){const he=W.crystalID;he in h||(h[he]=[]),h[he].push(ee.x),h[he].push(ee.y),h[he].push(ee.z)}if("summedIntensity"in W&&(Object.keys(this.refl.calculatedIntegratedPanelReflData).length!==0&&!t&&(this.refl.calculatedIntegratedPanelReflData={}),c[ae]||(c[ae]=[]),c[ae].push(ee.x),c[ae].push(ee.y),c[ae].push(ee.z),"crystalID"in W)){const he=W.crystalID;he in u||(u[he]=[]),u[he].push(ee.x),u[he].push(ee.y),u[he].push(ee.z)}}}}const E={};for(const[F,K]of Object.entries(s)){const te=this.colors.reflectionUnindexed[parseInt(F)%this.colors.reflectionUnindexed.length],se=this.unindexedReflectionsCheckbox.checked&&this.visibleExptIDs[F],W=new _t(K,te,this.reflectionSize.value,this.reflSprite,se);E[F]=W}this.unindexedReflections=new ze(E);const M={};for(const[F,K]of Object.entries(a)){const te=this.colors.reflectionIndexed,se=this.indexedReflectionsCheckbox.checked&&this.visibleExptIDs[F],W=new _t(K,te,this.reflectionSize.value,this.reflSprite,se);M[F]=W}this.indexedReflections=new ze(M);const C={};for(const[F,K]of Object.entries(o)){const te=this.colors.reflectionCalculated,se=this.calculatedReflectionsCheckbox.checked&&this.visibleExptIDs[F],W=new _t(K,te,this.reflectionSize.value,this.reflSprite,se);C[F]=W}this.calculatedReflections=new ze(C);const x={};for(const[F,K]of Object.entries(c)){const te=this.colors.reflectionIntegrated,se=this.integratedReflectionsCheckbox.checked&&this.visibleExptIDs[F],W=new _t(K,te,this.reflectionSize.value,this.reflSprite,se);x[F]=W}this.integratedReflections=new ze(x);const v={};for(const[F,K]of Object.entries(l)){let te;F==="-1"?te=this.colors.reflectionCrystalUnindexed:te=this.colors.reflectionCrystalIndexed[parseInt(F)%this.colors.reflectionCrystalIndexed.length];const se=this.unindexedReflectionsCheckbox.checked&&this.visibleCrystalIDs[F],W=new _t(K,te,this.reflectionSize.value,this.reflSprite,se);v[F]=W}this.crystalIndexedReflections=new ze(v);const R={};for(const[F,K]of Object.entries(h)){const te=this.colors.reflectionCalculated,se=this.calculatedReflectionsCheckbox.checked&&this.visibleCrystalIDs[F],W=new _t(K,te,this.reflectionSize.value,this.reflSprite,se);R[F]=W}this.crystalCalculatedReflections=new ze(R);const z={};for(const[F,K]of Object.entries(u)){const te=this.colors.reflectionIntegrated,se=this.integratedReflectionsCheckbox.checked&&this.visibleCrystalIDs[F],W=new _t(K,te,this.reflectionSize.value,this.reflSprite,se);z[F]=W}this.crystalIntegratedReflections=new ze(z);const{dMin:k,dMax:G}=Af(Object.assign({},a,s),this.rLPScaleFactor),Y={};for(const[F,K]of Object.entries(a)){const te=to(K,this.rLPScaleFactor,k,G),se=this.indexedReflectionsCheckbox.checked&&this.visibleExptIDs[F]&&this.resolutionView;Y[F]=new _t(K,null,this.reflectionSize.value,this.reflSprite,se,this.rLPScaleFactor,te)}this.resolutionIndexedReflections=new ze(Y);const B={};for(const[F,K]of Object.entries(s)){const te=to(K,this.rLPScaleFactor,k,G),se=this.unindexedReflectionsCheckbox.checked&&this.visibleExptIDs[F]&&this.resolutionView;B[F]=new _t(K,null,this.reflectionSize.value,this.reflSprite,se,this.rLPScaleFactor,te)}this.resolutionUnindexedReflections=new ze(B);const $={};for(const[F,K]of Object.entries(a)){const te=this.millerIndicesIndexed[F];if(!te||te.length===0)continue;const se=parseInt(this.millerIndexLabelSizeSlider.value),W=this.millerIndexLabelsCheckbox.checked&&this.indexedReflectionsCheckbox.checked&&!!this.visibleExptIDs[F];$[F]=new Cf(K,te,se,W)}this.millerIndexLabels=new ze($),this.updateReflectionCheckboxStatus(),this.setDefaultReflectionsDisplay(),this.updateReflectionsVisibility(),this.resolutionView?this.switchToResolutionView():this.crystalView?this.switchToCrystalView():this.switchToOrientationView(),this.requestRender()}addReflectionsFromJSONMsgpack(e,t=!1){function n(W,ae,L,q,ie,ee,he){const Se=W.clone().normalize().sub(L.clone().normalize()).multiplyScalar(1/ae);if(ee==null||ie==null)return Se.multiplyScalar(q.rLPScaleFactor);var Pe=ie.fixedRotation;const et=ie.settingRotation,Ue=ie.rotationAxis;return window.viewer.crystalFrame&&he!==null&&(Pe=Pe.clone().multiply(he)),Se.applyMatrix3(et.clone().invert()),Se.applyAxisAngle(Ue,-ee),Se.applyMatrix3(Pe.clone().invert().transpose()),Se.multiplyScalar(q.rLPScaleFactor)}if(this.clearReflectionTable(),this.refl.parseReflectionTableFromJSONMsgpack(e),t||(this.refl.calculatedIntegratedPanelReflData={},this.integratedReflectionsFromCalculated=!1),!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded");return}this.refl.parseReflectionTableFromJSONMsgpack(e);const r=this.refl.getPanelNumbers();r===null&&console.warn("Tried to add reflections but no data was parsed in refl file");const s=this.refl.getXYZObs(),a=this.refl.getXYZObsMm(),o=this.refl.getXYZCal(),c=this.refl.getXYZCalMm(),l=this.refl.getMillerIndices(),h=this.refl.getExperimentIDs();let u=this.refl.getImagesetIDs();u===null&&(u=h);const f=this.refl.getWavelengths(),d=this.refl.getCalculatedWavelengths(),g=this.refl.getFlags(),_={},m={},p={},w={},b={},y={},S={};this.millerIndicesIndexed={};const E=this.expt.getCrystalIDsMap(),M=new Set(r);let C={};for(const W of M)C[W]=this.expt.getDetectorPanelDataByIdx(0,W);for(let W=0;W<r.length;W++){let ae;h!==null?ae=h[W]:ae=0;let L;u!==null?L=u[W]:L=0;let q=E[ae];q==null&&(q="-1");const ie=this.expt.experiments[L].scan,ee=this.expt.experiments[L].goniometer,he=ee!==null&&ie!==null,Se=parseInt(r[W]),Pe=[C[Se].pxSize.x,C[Se].pxSize.y],et=C[Se].dMatrix;let Ue=this.expt.getBeamData(L).wavelength,st=this.expt.getBeamData(L).wavelength;const I=this.expt.getBeamDirection(L).multiplyScalar(-1).normalize();if(s!==null){const Ft=s[W];if(f!==null&&(Ue=f[W]),!Ue)continue;const ke=this.getS1(Ft,et,Ue,Pe);let Fe=0;a!==null&&he&&(Fe=a[W][2]);var x=null;q!=="-1"&&(x=this.expt.getCrystalU(q));const le=n(ke,Ue,I,this,ee,Fe,x);l!==null&&this.refl.isValidMillerIndex(l[W])?(m[L]||(m[L]=[],this.millerIndicesIndexed[L]=[]),m[L].push(le.x),m[L].push(le.y),m[L].push(le.z),this.millerIndicesIndexed[L].push(l[W])):(_[L]||(_[L]=[]),_[L].push(le.x),_[L].push(le.y),_[L].push(le.z)),q in b||(b[q]=[]),b[q].push(le.x),b[q].push(le.y),b[q].push(le.z)}if(o!==null&&c!==null){const Ft=o[W];if(d!==null&&(st=d[W]),!st)continue;const ke=this.getS1(Ft,et,st,Pe);let Fe=0;c!==null&&he&&(Fe=c[W][2]);const le=n(ke,st,I,this,ee,Fe,x);p[L]||(p[L]=[]),p[L].push(le.x),p[L].push(le.y),p[L].push(le.z),q!=="-1"&&(q in y||(y[q]=[]),y[q].push(le.x),y[q].push(le.y),y[q].push(le.z)),this.refl.isSummationIntegrated(g[W])&&(Object.keys(this.refl.calculatedIntegratedPanelReflData).length!==0&&!t&&(this.refl.calculatedIntegratedPanelReflData={}),w[L]||(w[L]=[]),w[L].push(le.x),w[L].push(le.y),w[L].push(le.z),q!=="-1"&&(q in S||(S[q]=[]),S[q].push(le.x),S[q].push(le.y),S[q].push(le.z)))}}const v={};for(const[W,ae]of Object.entries(_)){const L=this.colors.reflectionUnindexed[parseInt(W)%this.colors.reflectionUnindexed.length],q=this.unindexedReflectionsCheckbox.checked&&this.visibleExptIDs[W],ie=new _t(ae,L,this.reflectionSize.value,this.reflSprite,q);v[W]=ie}this.unindexedReflections=new ze(v);const R={};for(const[W,ae]of Object.entries(m)){const L=this.colors.reflectionIndexed,q=this.indexedReflectionsCheckbox.checked&&this.visibleExptIDs[W],ie=new _t(ae,L,this.reflectionSize.value,this.reflSprite,q);R[W]=ie}this.indexedReflections=new ze(R);const z={};for(const[W,ae]of Object.entries(p)){const L=this.colors.reflectionCalculated,q=this.calculatedReflectionsCheckbox.checked&&this.visibleExptIDs[W],ie=new _t(ae,L,this.reflectionSize.value,this.reflSprite,q);z[W]=ie}this.calculatedReflections=new ze(z);const k={};for(const[W,ae]of Object.entries(w)){const L=this.colors.reflectionIntegrated,q=this.integratedReflectionsCheckbox.checked&&this.visibleExptIDs[W],ie=new _t(ae,L,this.reflectionSize.value,this.reflSprite,q);k[W]=ie}this.integratedReflections=new ze(k);const G={};for(const[W,ae]of Object.entries(b)){let L;W==="-1"?L=this.colors.reflectionCrystalUnindexed:L=this.colors.reflectionCrystalIndexed[parseInt(W)%this.colors.reflectionCrystalIndexed.length];const q=this.unindexedReflectionsCheckbox.checked&&this.visibleCrystalIDs[W],ie=new _t(ae,L,this.reflectionSize.value,this.reflSprite,q);G[W]=ie}this.crystalIndexedReflections=new ze(G);const Y={};for(const[W,ae]of Object.entries(y)){const L=this.colors.reflectionCalculated,q=this.calculatedReflectionsCheckbox.checked&&this.visibleCrystalIDs[W],ie=new _t(ae,L,this.reflectionSize.value,this.reflSprite,q);Y[W]=ie}this.crystalCalculatedReflections=new ze(Y);const B={};for(const[W,ae]of Object.entries(S)){const L=this.colors.reflectionIntegrated,q=this.integratedReflectionsCheckbox.checked&&this.visibleCrystalIDs[W],ie=new _t(ae,L,this.reflectionSize.value,this.reflSprite,q);B[W]=ie}this.crystalIntegratedReflections=new ze(B);const{dMin:$,dMax:F}=Af(Object.assign({},m,_),this.rLPScaleFactor),K={};for(const[W,ae]of Object.entries(m)){const L=to(ae,this.rLPScaleFactor,$,F),q=this.indexedReflectionsCheckbox.checked&&this.visibleExptIDs[W]&&this.resolutionView;K[W]=new _t(ae,null,this.reflectionSize.value,this.reflSprite,q,this.rLPScaleFactor,L)}this.resolutionIndexedReflections=new ze(K);const te={};for(const[W,ae]of Object.entries(_)){const L=to(ae,this.rLPScaleFactor,$,F),q=this.unindexedReflectionsCheckbox.checked&&this.visibleExptIDs[W]&&this.resolutionView;te[W]=new _t(ae,null,this.reflectionSize.value,this.reflSprite,q,this.rLPScaleFactor,L)}this.resolutionUnindexedReflections=new ze(te);const se={};for(const[W,ae]of Object.entries(m)){const L=this.millerIndicesIndexed[W];if(!L||L.length===0)continue;const q=parseInt(this.millerIndexLabelSizeSlider.value),ie=this.millerIndexLabelsCheckbox.checked&&this.indexedReflectionsCheckbox.checked&&!this.crystalView&&!this.resolutionView&&!!this.visibleExptIDs[W];se[W]=new Cf(ae,L,q,ie)}this.millerIndexLabels=new ze(se),this.updateReflectionCheckboxStatus(),this.setDefaultReflectionsDisplay(),this.updateReflectionsVisibility(),this.resolutionView?this.switchToResolutionView():this.crystalView?this.switchToCrystalView():this.switchToOrientationView(),this.requestRender()}addCalculatedIntegratedReflectionsFromJSONMsgpack(e){function t(p,w,b,y,S,E,M){const C=p.clone().normalize().sub(b.clone().normalize()).multiplyScalar(1/w);if(E==null||S==null)return C.multiplyScalar(y.rLPScaleFactor);var x=S.fixedRotation;const v=S.settingRotation,R=S.rotationAxis;return window.viewer.crystalFrame&&M!==null&&(x=x.clone().multiply(M)),C.applyMatrix3(v.clone().invert()),C.applyAxisAngle(R,-E),C.applyMatrix3(x.clone().invert().transpose()),C.multiplyScalar(y.rLPScaleFactor)}if(this.integratedReflections.destroy(),this.crystalIntegratedReflections.destroy(),!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded");return}this.calculatedIntegratedRefl.parseReflectionTableFromJSONMsgpack(e);const n=this.calculatedIntegratedRefl.getPanelNumbers();n===null&&console.warn("Tried to add reflections but no data was parsed in refl file");const r=this.calculatedIntegratedRefl.getXYZCal(),s=this.calculatedIntegratedRefl.getXYZCalMm(),a=this.calculatedIntegratedRefl.getExperimentIDs(),o=this.calculatedIntegratedRefl.getImagesetIDs(),c=this.calculatedIntegratedRefl.getCalculatedWavelengths(),l=this.expt.getCrystalIDsMap(),h={},u={},f=new Set(n);let d={};for(const p of f)d[p]=this.expt.getDetectorPanelDataByIdx(0,p);for(let p=0;p<n.length;p++){let w;a!==null?w=a[p]:w=0;let b;o!==null?b=o[p]:b=0;const y=l[w],S=this.expt.experiments[b].scan,E=this.expt.experiments[b].goniometer,M=E!==null&&S!==null,C=parseInt(n[p]),x=[d[C].pxSize.x,d[C].pxSize.y],v=d[C].dMatrix;let R=this.expt.getBeamData(b).wavelength;const z=this.expt.getBeamDirection(b).multiplyScalar(-1).normalize();if(r!==null&&s!==null){const k=r[p];if(c!==null&&(R=c[p]),!R)continue;const G=this.getS1(k,v,R,x);let Y=0;s!==null&&M&&(Y=s[p][2]);var g=null;y!=="-1"&&(g=this.expt.getCrystalU(y));const B=t(G,R,z,this,E,Y,g);h[b]||(h[b]=[]),h[b].push(B.x),h[b].push(B.y),h[b].push(B.z),y!=="-1"&&(y in u||(u[y]=[]),u[y].push(B.x),u[y].push(B.y),u[y].push(B.z))}}const _={};for(const[p,w]of Object.entries(h)){const b=this.colors.reflectionIntegrated,y=this.integratedReflectionsCheckbox.checked&&this.visibleExptIDs[p],S=new _t(w,b,this.reflectionSize.value,this.reflSprite,y);_[p]=S}this.integratedReflections=new ze(_);const m={};for(const[p,w]of Object.entries(u)){const b=this.colors.reflectionIntegrated,y=this.integratedReflectionsCheckbox.checked&&this.visibleCrystalIDs[p],S=new _t(w,b,this.reflectionSize.value,this.reflSprite,y);m[p]=S}this.crystalIntegratedReflections=new ze(m),this.updateReflectionCheckboxStatus(),this.updateReflectionsVisibility(),this.crystalView?this.switchToCrystalView():this.switchToOrientationView(),this.integratedReflectionsFromCalculated=!0,this.requestRender()}addCalculatedIntegratedReflectionsFromData(e){function t(p,w,b,y,S,E,M,C){const x=p.clone().normalize().sub(b.clone().normalize()).multiplyScalar(1/w);if(!C)return x.multiplyScalar(y.rLPScaleFactor);if(E==null)return console.warn("Rotation angles not in reflection table. Cannot generate rlps correctly if rotation experiment."),x.multiplyScalar(y.rLPScaleFactor);var v=S.fixedRotation;const R=S.settingRotation,z=S.rotationAxis;return window.viewer.crystalFrame&&M!==null&&(v=v.clone().multiply(M)),x.applyMatrix3(R.clone().invert()),x.applyAxisAngle(z,-E),x.applyMatrix3(v.clone().invert().transpose()),x.multiplyScalar(y.rLPScaleFactor)}if(Object.keys(e).length==0)return;if(this.integratedReflections.destroy(),this.crystalIntegratedReflections.destroy(),this.refl.calculatedIntegratedPanelReflData=e,this.integratedReflectionsFromCalculated=!0,!this.hasExperiment()){console.warn("Tried to add reflections but no experiment has been loaded");return}const n=Object.keys(e),r={},s={};var a=this.expt.scan;const o=d!==null&&a!==null;for(var c=0;c<n.length;c++){const p=parseInt(n[c]);var l=e[n[c]];if(l===void 0)continue;const w=this.expt.getDetectorPanelDataByIdx(0,p);o&&(l=this.expt.addAnglesToReflections(l));const b=[w.pxSize.x,w.pxSize.y],y=w.dMatrix;for(var h=0;h<l.length;h++){const S=l[h],E=S.exptID;this.expt.getBeamData(E).wavelength;var u=this.expt.getBeamData(E).wavelength,f=this.expt.getBeamDirection(E).multiplyScalar(-1).normalize(),d=this.expt.experiments[E].goniometer;if("xyzCal"in S){const M=S.xyzCal;if("wavelengthCal"in S&&(u=S.wavelengthCal),!u)continue;const C=this.getS1(M,y,u,b),x=S.angleCal;var g=null;"crystalID"in S&&S.crystalID!=="-1"&&(g=this.expt.getCrystalU(parseInt(S.crystalID)));const v=t(C,u,f,this,d,x,g,o);if(r[E]||(r[E]=[]),r[E].push(v.x),r[E].push(v.y),r[E].push(v.z),"crystalID"in S){const R=S.crystalID;R in s||(s[R]=[]),s[R].push(v.x),s[R].push(v.y),s[R].push(v.z)}}}}const _={};for(const[p,w]of Object.entries(r)){const b=this.colors.reflectionIntegrated,y=this.integratedReflectionsCheckbox.checked&&this.visibleExptIDs[p],S=new _t(w,b,this.reflectionSize.value,this.reflSprite,y);_[p]=S}this.integratedReflections=new ze(_);const m={};for(const[p,w]of Object.entries(s)){const b=this.colors.reflectionIntegrated,y=this.integratedReflectionsCheckbox.checked&&this.visibleCrystalIDs[p],S=new _t(w,b,this.reflectionSize.value,this.reflSprite,y);m[p]=S}this.crystalIntegratedReflections=new ze(m),this.updateReflectionCheckboxStatus(),this.updateReflectionsVisibility(),this.crystalView?this.switchToCrystalView():this.switchToOrientationView(),this.requestRender()}addReflections(){this.addReflectionsFromData(this.refl.reflData)}clearMesh(){this.currentMesh!==null&&(window.scene.remove(this.currentMesh),this.currentMesh.geometry.dispose(),this.currentMesh.material.dispose(),this.currentMesh.isInstancedMesh&&(this.currentMesh.count=0,this.currentMesh.instanceMatrix.setUsage(So),this.currentMesh.instanceMatrix.needsUpdate=!0),this.currentMesh=null,this.clearResolutionCirlces()),this.meshData=null,this.meshShape=null,this.rLPMin=null,this.rLPMax=null,this.rLPStep=null,this.requestRender()}cancelMesh(){this.meshWorker&&(this.meshWorker.terminate(),this.meshWorker=null),this.loading=!1,this.clearMesh()}createSignedDistanceFunction(e,t,n){return function(r,s,a){let o=Math.floor(r),c=Math.floor(s),l=Math.floor(a);return o<0||c<0||l<0||o>=t[0]||c>=t[1]||l>=t[2]?-1:e[l][c][o]-n}}recalculateMesh(){this.clearMesh();const e=document.getElementById("maxResolutionSlider").value,t=document.querySelector('input[name="meshGridSize"]:checked').value,n=JSON.stringify({channel:"server",command:"update_rs_mapper_mesh",max_resolution:e,grid_size:t});this.serverWS.send(n)}clearResolutionCirlces(){if(this.resolutionCircleMeshes.length!==0){for(let e=0;e<this.resolutionCircleMeshes.length;e++)window.scene.remove(this.resolutionCircleMeshes[e]),this.resolutionCircleMeshes[e].geometry.dispose(),this.resolutionCircleMeshes[e].material.dispose();this.resolutionCircleMeshes=[]}}drawResolutionCircles(e){this.clearResolutionCirlces();const t=64,n=1/e*this.rLPScaleFactor,r=new ug({color:this.colors.resolutionCircle,dashSize:20,gapSize:8}),s=(l,h)=>{const u=new Tt,f=[];for(let g=0;g<=t;g++){const _=g/t*Math.PI*2,m=l*Math.cos(_),p=l*Math.sin(_);h==="XY"?f.push(new P(m,p,0)):h==="YZ"?f.push(new P(0,m,p)):h==="XZ"&&f.push(new P(m,0,p))}u.setFromPoints(f);const d=new yl(u,r);return d.computeLineDistances(),d},a=s(n,"XY"),o=s(n,"YZ"),c=s(n,"XZ");window.scene.add(a),window.scene.add(o),window.scene.add(c),this.resolutionCircleMeshes=[a,o,c],this.requestRender()}updateMeshVisibility(e){this.currentMesh!==null&&(this.currentMesh.visible=e,this.requestRender());const t=document.getElementById("meshThresholdContainer"),n=document.getElementById("maxResolutionContainer"),r=document.getElementById("meshGridSizeContainer"),s=e?"":"none",a=document.getElementById("meshRecalculateContainer");t&&(t.style.display=s),n&&(n.style.display=s),r&&(r.style.display=s),a&&(a.style.display=s),this.reciprocalMeshVisible=e;for(let o=0;o<this.resolutionCircleMeshes.length;o++)this.resolutionCircleMeshes[o].visible=e}updateMaxResolutionValue(e=!0){var t=document.getElementById("maxResolutionSlider"),n=document.getElementById("maxResolutionValue");n.innerHTML=t.value+" Å",e&&this.drawResolutionCircles(t.value),this.requestRender()}updateMeshGridSizeValue(){this.requestRender()}updateMeshThresholdValue(){var e=document.getElementById("meshThresholdSlider"),t=document.getElementById("meshThresholdValue");t.innerHTML=e.value,this.requestRender()}updateMesh(){if(this.meshData===null||this.meshShape===null||this.rLPMin===null||this.rLPMax===null||this.rLPStep===null)return;const e=this.meshData,t=this.meshShape,n=this.rLPMin,r=this.rLPMax,s=this.rLPStep;this.clearMesh(),this.addContourMeshFromData(e,t,n,r,s)}async addContourMeshFromData(e,t,n,r,s){this.meshData=e,this.meshShape=t,this.rLPMin=n,this.rLPMax=r,this.rLPStep=s;const a=document.getElementById("meshThresholdSlider").value;this.loading=!0;const o=t[0],c=[[0,0,0],[t[0],t[1],t[2]]],l=await new Promise((p,w)=>{const b=new Worker(new URL(""+new URL("MeshWorker-CD0QuVHm.js",import.meta.url).href,import.meta.url),{type:"module"});this.meshWorker=b,b.onmessage=y=>{y.data.type==="marchingResult"&&(this.meshWorker=null,p(y.data.result),b.terminate())},b.onerror=y=>{this.meshWorker=null,console.error("Worker error:",y),w(y),b.terminate()},b.postMessage({data:e,meshShape:t,isovalue:a,resolution:o,scanBounds:c})}),h=l.positions,u=this.rLPScaleFactor;for(let p=0;p<h.length;p++){const w=h[p][0],b=h[p][1],y=h[p][2];h[p][0]=(y-t[2]/2)*s*u,h[p][1]=(b-t[1]/2)*s*u,h[p][2]=(w-t[0]/2)*s*u}const f=new Float32Array(h.flat()),d=new Tt,g=new Uint32Array(l.cells.flat());d.setAttribute("position",new xt(f,3)),d.setIndex(new xt(g,1)),d.computeVertexNormals(),d.computeBoundingBox();const _=new Bs({color:this.colors.reciprocalMesh,wireframe:!0}),m=new dn(d,_);window.scene.add(m),this.currentMesh=m,this.loading=!1,this.requestRender(),this.serverWS&&this.serverWS.readyState===WebSocket.OPEN&&this.serverWS.send(JSON.stringify({channel:"server",command:"rlv_mesh_ready"}))}setDefaultReflectionsDisplay(){this.indexedReflectionsCheckbox.checked=!1,this.unindexedReflectionsCheckbox.checked=!1,this.calculatedReflectionsCheckbox.checked=!1,this.integratedReflectionsCheckbox.checked=!1,this.crystalFrameCheckbox.checked=!1,this.hasReflectionTable()&&(this.unindexedReflections.empty()||(this.unindexedReflectionsCheckbox.checked=!0),this.indexedReflections.empty()||(this.indexedReflectionsCheckbox.checked=!0),this.crystalFrameCheckbox.checked=this.crystalFrame,this.updateReflectionsVisibility())}updateReflectionCheckboxStatus(){if(!this.hasReflectionTable()){this.indexedReflectionsCheckbox.disabled=!0,this.unindexedReflectionsCheckbox.disabled=!0,this.calculatedReflectionsCheckbox.disabled=!0,this.integratedReflectionsCheckbox.disabled=!0,this.crystalFrameCheckbox.disabled=!0,this.millerIndexLabelsCheckbox.disabled=!0;return}this.indexedReflectionsCheckbox.disabled=this.indexedReflections.empty(),this.unindexedReflectionsCheckbox.disabled=this.unindexedReflections.empty(),this.calculatedReflectionsCheckbox.disabled=this.calculatedReflections.empty(),this.integratedReflectionsCheckbox.disabled=this.integratedReflections.empty(),this.crystalFrameCheckbox.disabled=this.indexedReflections.empty(),this.millerIndexLabelsCheckbox.disabled=this.millerIndexLabels.empty(),this.updateUnitCellAlignButtonsVisibility()}updateReciprocalCellCheckboxStatus(){this.hasExperiment()?(this.reciprocalCellCheckbox.disabled=this.orientationReciprocalCells.empty()&&this.crystalReciprocalCells.empty(),this.crystalFrameCheckbox.disabled=this.orientationReciprocalCells.empty()&&this.crystalReciprocalCells.empty()):(this.reciprocalCellCheckbox.disabled=!0,this.crystalFrameCheckbox.disabled=!0)}updateMillerIndexLabelsVisibility(){if(!this.millerIndexLabelsCheckbox.checked){this.millerIndexLabels.hide(),this.requestRender();return}this.crystalView?this.millerIndexLabels.showVisibleIDs(this.visibleCrystalIDs):this.resolutionView?this.millerIndexLabels.show():this.millerIndexLabels.showVisibleIDs(this.visibleExptIDs),this.requestRender()}updateMillerIndexLabelSize(){if(this.millerIndexLabels.empty())return;const e=parseInt(this.millerIndexLabelSizeSlider.value);this.millerIndexLabels.resize(e),this.orientationReciprocalCells.resize(e),this.crystalReciprocalCells.resize(e),this.requestRender()}updateUnitCellAlignButtonsVisibility(){const e=this.expt.crystals&&this.expt.crystals.length>0,t=!this.indexedReflections.empty(),n=e&&t;this.unitCellAlignContainer.style.display=n?"block":"none",n||(this.unitCellAlignCrystalIdx=[0,0,0])}alignCameraToRealSpaceAxis(e){if(!this.expt.crystals||this.expt.crystals.length===0)return;const t=this.expt.crystals.length,n=this.unitCellAlignCrystalIdx[e]%t;this.unitCellAlignCrystalIdx[e]=(n+1)%t;const r=this.expt.crystals[n].reciprocalCell[e].clone();this.crystalFrame&&r.applyMatrix3(this.expt.getCrystalU(n)),r.normalize().multiplyScalar(1e3),this.setCameraSmooth(r)}addBeam(){var e=Kt.sizes().beamLength,t=this.expt.getBeamDirection(0),n=[];n.push(new P(t.x*-800,t.y*-800,t.z*-800)),n.push(new P(t.x*-800*.5,t.y*-800*.5,t.z*-800*.5)),n.push(new P(0,0,0));const r=new Tt().setFromPoints(n),s=new wo({color:this.colors.beam,fog:!0,depthWrite:!1}),a=new yl(r,s);this.beamMeshes.push(a),window.scene.add(a);var o=[];o.push(new P(0,0,0)),o.push(new P(t.x*e*.5,t.y*e*.5,t.z*e*.5)),o.push(new P(t.x*e,t.y*e,t.z*e));const c=new Tt().setFromPoints(o),l=new wo({color:this.colors.beam,transparent:!0,opacity:.25,fog:!0,depthWrite:!1}),h=new yl(c,l);this.beamMeshes.push(h),window.scene.add(h)}addSample(){const e=new Ao(Kt.sizes().sample),t=new Bs({color:this.colors.sample,transparent:!0,depthWrite:!1}),n=new dn(e,t);n.name="sample",this.sampleMesh=n,window.scene.add(n)}clearEwaldSpheres(){for(const e of this.ewaldSphereMeshes)window.scene.remove(e),e.geometry.dispose(),e.material.dispose();this.ewaldSphereMeshes=[],this.ewaldSphereCheckbox.checked=!1,this.ewaldSphereCheckbox.disabled=!0}addEwaldSpheres(){const t=this.expt.getBeamData(0).wavelength_range;if(!t)return;const n=this.expt.getBeamDirection(0).normalize(),r=new Bs({color:this.colors.ewaldSphere,transparent:!0,opacity:.1,side:Bn,depthWrite:!1});for(const s of t){const a=1/s*this.rLPScaleFactor,o=n.clone().multiplyScalar(a),c=new Ao(a,32,32),l=new dn(c,r);l.position.copy(o),l.visible=!1,window.scene.add(l),this.ewaldSphereMeshes.push(l)}this.ewaldSphereCheckbox.disabled=!1}updateEwaldSpheresVisibility(){const e=this.ewaldSphereCheckbox.checked;for(const t of this.ewaldSphereMeshes)t.visible=e;this.requestRender()}clearReciprocalCells(){this.orientationReciprocalCells.destroy(),this.crystalReciprocalCells.destroy(),this.reciprocalCellCheckbox.checked=!1,this.reciprocalCellCheckbox.disabled=!0,this.crystalFrameCheckbox.checked=!1,this.crystalFrameCheckbox.disabled=!0}addReciprocalCells(){if(!this.expt.hasCrystal(0))return;const e=this.reciprocalCellCheckbox.checked,t=this.crystalFrameCheckbox.checked;this.clearReciprocalCells();var n;this.crystalFrame?n=this.expt.getAllCrystalRCVs():n=this.expt.getAllCrystalRLVs();var r={},s={};for(let o=0;o<n.length;o++){let c=n[o];const l=(c[0].length()+c[1].length()+c[2].length())/3,h=Kt.sizes().minRLVLineWidth,u=Kt.sizes().maxRLVLineWidth,f=Kt.sizes().RLVLineWidthScaleFactor,d=Math.min(Math.max(l*f,h),u),g=Math.max(l*Kt.sizes().RLVLabelScaleFactor,1);var a=Kt.sizes().minRLVLabelSize;a*=g,c[0].multiplyScalar(this.rLPScaleFactor),c[1].multiplyScalar(this.rLPScaleFactor),c[2].multiplyScalar(this.rLPScaleFactor),s[o]=new Rf(c,this.colors.reflectionCrystalIndexed[o%this.colors.reflectionCrystalIndexed.length],d,a),r[o]=new Rf(c,this.colors.reciprocalCell,d,a)}this.orientationReciprocalCells=new ze(r),this.crystalReciprocalCells=new ze(s),this.updateReciprocalCellCheckboxStatus(),this.reciprocalCellCheckbox.checked=e,this.crystalFrameCheckbox.checked=t,this.updateReciprocalCellsVisibility(),this.requestRender()}setCameraSmooth(e){this.rotateToPos(e),this.resetCameraZoomSmooth()}setCameraToDefaultPosition(){this.setCameraSmooth(Kt.cameraPositions().default)}setCameraToDefaultPositionWithExperiment(){this.setCameraSmooth(Kt.cameraPositions().defaultWithExperiment)}setCameraToCentrePosition(){this.setCameraSmooth(Kt.cameraPositions().centre)}displayHeaderText(e){this.showHeaderText(),this.headerText.innerHTML=e}appendHeaderText(e){this.headerText.innerHTML+=e}hideHeaderText(){this.headerText.style.display="none"}showHeaderText(){this.headerText.style.display="block"}displayDefaultHeaderText(){this.hasExperiment()||!this.isStandalone?this.hideHeaderText():this.displayHeaderText(Kt.text().default)}displayImageFilenames(e){this.displayHeaderText(this.expt.experiments[e].imageFilename),this.displayingTextFromHTMLEvent=!0}displayNumberOfReflections(){this.displayHeaderText(this.refl.numReflections+" reflections"),this.displayingTextFromHTMLEvent=!0}stopDisplayingText(){this.displayingTextFromHTMLEvent=!1}highlightObject(e){e.material.color=new Ve(this.colors.highlight)}clickOnReflection(){if(this.preventMouseClick)return;const e=[];if(this.indexedReflectionsCheckbox.checked){const t=this.crystalView?this.crystalIndexedReflections:this.indexedReflections;for(const[n,r]of t)e.push({id:n,reflectionSet:r})}if(this.unindexedReflectionsCheckbox.checked)for(const[t,n]of this.unindexedReflections)e.push({id:t,reflectionSet:n});for(const{id:t,reflectionSet:n}of e){window.rayCaster.setFromCamera(window.mousePosition,window.camera);const r=window.rayCaster.intersectObject(n.points);if(r.length>0){const s=r[0].index,a=[n.positions[3*s]/this.rLPScaleFactor,n.positions[3*s+1]/this.rLPScaleFactor,n.positions[3*s+2]/this.rLPScaleFactor];this.serverWS.send(JSON.stringify({channel:"server",command:"clicked_reflection_rlv",rlp:a,expt_id:t}));return}}}highlightReflection(e){if(this.reflHighlight&&(window.scene.remove(this.reflHighlight),this.reflHighlight.geometry.dispose(),this.reflHighlight.material.dispose(),this.reflHighlight=null),!e||e.length!==3)return;const t=new Tt;t.setAttribute("position",new en([e[0]*this.rLPScaleFactor,e[1]*this.rLPScaleFactor,e[2]*this.rLPScaleFactor],3));const n=new Sh({size:15,color:this.colors.highlight,map:this.reflSprite,alphaTest:.5,transparent:!0,depthTest:!1});this.reflHighlight=new Xd(t,n),window.scene.add(this.reflHighlight),this.requestRender()}beamHidden(){return this.beamMeshes.length===0?!0:this.beamMeshes[0].material.opacity<.01}sampleHidden(){return this.sampleMesh===null?!0:this.sampleMesh.material.opacity<.01}disableMouseClick(){this.preventMouseClick=!0}enableMouseClick(){this.preventMouseClick=!1}updateGUIInfo(){function e(r){function s(o,c,l){return(1/new P(o[3*c]/l.rLPScaleFactor,o[3*c+1]/l.rLPScaleFactor,o[3*c+2]/l.rLPScaleFactor).length()).toFixed(3)}if(r.indexedReflectionsCheckbox.checked){let o;r.crystalView?o=r.crystalIndexedReflections:o=r.indexedReflections;for(const[c,l]of o){window.rayCaster.setFromCamera(window.mousePosition,window.camera);const h=window.rayCaster.intersectObject(l.points);if(h.length>0)for(var a=0;a<h.length;a++){const u=h[a].index,f=r.millerIndicesIndexed[c],d=f?f[u]:null,g=d?" <b>hkl: </b>("+d+")":"";r.displayHeaderText("<b>expt: </b>"+c+g+" <b>res: </b>"+s(l.positions,u,r)+" Å")}}}if(r.unindexedReflectionsCheckbox.checked)for(const[o,c]of r.unindexedReflections){window.rayCaster.setFromCamera(window.mousePosition,window.camera);const l=window.rayCaster.intersectObject(c.points);if(l.length>0)for(var a=0;a<l.length;a++)r.displayHeaderText("<b>expt: </b>"+o+" <b>unindexed</b> <b>res: </b>"+s(c.positions,l[a].index,r)+" Å")}}function t(r){if(r.beamHidden())return;if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),window.rayCaster.intersectObjects(r.beamMeshes).length>0){const a="<b>beam: </b>"+r.expt.getBeamSummary(0);r.displayHeaderText(a)}}function n(r){if(r.sampleHidden()||r.expt.getCrystalSummary()===null)return;if(window.rayCaster.setFromCamera(window.mousePosition,window.camera),window.rayCaster.intersectObjects([r.sampleMesh]).length>0){const a="<b>crystal: </b>"+r.expt.getCrystalSummary();r.displayHeaderText(a)}}if(!this.displayingTextFromHTMLEvent){if(this.loading){this.displayHeaderText("Loading..");return}this.displayDefaultHeaderText(),e(this),t(this),n(this)}}rotateToPos(e){xo.to(window.camera.position,{duration:1,x:-e.x,y:-e.y,z:-e.z,onUpdate:function(){window.camera.lookAt(e),window.viewer.requestRender()}})}resetCameraZoomSmooth(){xo.to(window.camera,{duration:1,zoom:1,onUpdate:function(){window.camera.updateProjectionMatrix(),window.viewer.requestRender()}}),window.controls.update()}zoomInOnObject(e,t=.2){const n=new P,r=new P,s=new vs;s.makeEmpty(),s.expandByObject(e),s.getSize(n),s.getCenter(r);const o=[new P(r.x-n.x/2,r.y-n.y/2,r.z-n.z/2),new P(r.x-n.x/2,r.y-n.y/2,r.z+n.z/2),new P(r.x-n.x/2,r.y+n.y/2,r.z-n.z/2),new P(r.x-n.x/2,r.y+n.y/2,r.z+n.z/2),new P(r.x+n.x/2,r.y-n.y/2,r.z-n.z/2),new P(r.x+n.x/2,r.y-n.y/2,r.z+n.z/2),new P(r.x+n.x/2,r.y+n.y/2,r.z-n.z/2),new P(r.x+n.x/2,r.y+n.y/2,r.z+n.z/2)].map(h=>{const u=h.clone().project(camera);return u.x=(u.x+1)/2*window.innerWidth,u.y=(1-u.y)/2*window.innerHeight,u});let c=0;for(let h=0;h<o.length;h++)for(let u=h+1;u<o.length;u++){const f=o[h].distanceTo(o[u]);f>c&&(c=f)}const l=window.camera.zoom*(window.innerWidth*t)/c;xo.to(window.camera,{duration:1,zoom:l,onUpdate:function(){window.camera.updateProjectionMatrix(),window.viewer.requestRender()}}),window.controls.update()}toggleExperimentList(){document.getElementById("selectionDropdown").classList.toggle("show");var e=document.getElementById("dropdownIcon");e.classList.toggle("fa-chevron-down"),e.classList.toggle("fa-chevron-right")}toggleCrystalVisibility(e){var t=parseInt(e.split("-").pop());this.visibleCrystalIDs[t]=!this.visibleCrystalIDs[t],this.updateReflectionsVisibility(),this.updateReciprocalCellsVisibility();var n=document.getElementById("crystalID-dropdown-icon-"+t.toString());n.classList.toggle("fa-check")}toggleAllCrystalVisibility(){var e=document.getElementById("crystalID-dropdown-icon-all");e.classList.toggle("fa-check");var t=e.classList.contains("fa-check"),n=Object.keys(this.visibleCrystalIDs);for(var r of n){this.visibleCrystalIDs[r]=t;var e=document.getElementById("crystalID-dropdown-icon-"+r.toString());e.classList.contains("fa-check")!==t&&e.classList.toggle("fa-check")}this.updateReflectionsVisibility()}updateExptIDVisibility(){if(!this.crystalView)for(const[e,t]of Object.entries(this.visibleExptIDs)){let n=document.getElementById("exptID-dropdown-icon-"+e.toString());(!n.classList.contains("fa-check")&&t||n.classList.contains("fa-check")&&!t)&&n.classList.toggle("fa-check")}}updateCrystalIDVisibility(){if(this.crystalView)for(const[e,t]of Object.entries(this.visibleCrystalIDs)){let n=document.getElementById("crystalID-dropdown-icon-"+e.toString());(!n.classList.contains("fa-check")&&t||n.classList.contains("fa-check")&&!t)&&n.classList.toggle("fa-check")}}toggleExptVisibility(e){var t=parseInt(e.split("-").pop());this.visibleExptIDs[t]=!this.visibleExptIDs[t],this.updateReflectionsVisibility();var n=document.getElementById("exptID-dropdown-icon-"+t.toString());n.classList.toggle("fa-check")}toggleAllExptVisibility(){var e=document.getElementById("exptID-dropdown-icon-all");e.classList.toggle("fa-check");for(var t=e.classList.contains("fa-check"),n=0;n<this.visibleExptIDs.length;n++){this.visibleExptIDs[n]=t;var e=document.getElementById("exptID-dropdown-icon-"+n.toString());e.classList.contains("fa-check")!==t&&e.classList.toggle("fa-check")}this.updateReflectionsVisibility()}clearSelectionDropdown(){var e=document.getElementById("selectionDropdown");e.innerHTML=""}getCrystalIDs(){return this.crystalIndexedReflections.empty()?["-1"]:this.crystalIndexedReflections.keys()}getCrystalLabels(){var e=this.getCrystalIDs();return e=e.map(t=>t==="-1"?"unindexed":t),e}setSelectionDropdownToCrystals(){var e=22,t=4,n=this.getCrystalLabels(),r=n.length>t,s=null;const a={};var o=document.getElementById("selectionDropdown");o.innerHTML="";for(var c=0;c<n.length;c++)if(n[c]!=="unindexed"){var l=document.createElement("label");l.classList.add("experiment-label");var h=null;h=this.colors.reflectionCrystalIndexed[parseInt(c)%this.colors.reflectionCrystalIndexed.length];var u="#"+h.toString(16).padStart(6,"0");l.style.color=u;var f=document.createElement("i");f.classList.add("fa","fa-check"),f.style.float="right",f.id="crystalID-dropdown-icon-"+c;var d=n[c];d.length>e&&(d=d.slice(0,19)+"..."),l.textContent=d,l.id="crystalID-"+c,l.appendChild(f),l.addEventListener("click",g=>{this.toggleCrystalVisibility(g.target.id)}),r&&s===null&&(s=l),o.appendChild(l),o.appendChild(document.createElement("br")),a[c]=!0}if(r){console.assert(s!==null);var l=document.createElement("label");l.classList.add("experiment-label");var f=document.createElement("i");f.classList.add("fa","fa-check"),f.style.float="right",f.id="crystalID-dropdown-icon-all";var d="All";l.textContent=d,l.id="crystalID-all",l.appendChild(f),l.addEventListener("click",p=>{this.toggleAllCrystalVisibility()}),o.insertBefore(l,s),o.insertBefore(l,s)}this.visibleCrystalIDs=a}setSelectionDropdownToOrientations(){var e=22,t=4,n=this.expt.getImagesetIDs(),r=this.expt.getExptLabels(),s=r.length>t,a=null;const o=[];var c=document.getElementById("selectionDropdown");c.innerHTML="";for(var l=0;l<n.length;l++){var h=document.createElement("label");h.classList.add("experiment-label");var u="#"+this.colors.reflectionUnindexed[n[l]%this.colors.reflectionUnindexed.length].toString(16).padStart(6,"0");h.style.color=u;var f=document.createElement("i");f.classList.add("fa","fa-check"),f.style.float="right",f.id="exptID-dropdown-icon-"+n[l];var d=r[l];d.length>e&&(d=d.slice(0,19)+"..."),h.textContent=d,h.id="exptID-"+n[l],h.appendChild(f),h.addEventListener("click",_=>{this.toggleExptVisibility(_.target.id)}),s&&a===null&&(a=h),c.appendChild(h),c.appendChild(document.createElement("br")),o.push(!0)}if(s){console.assert(a!==null);var h=document.createElement("label");h.classList.add("experiment-label");var f=document.createElement("i");f.classList.add("fa","fa-check"),f.style.float="right",f.id="exptID-dropdown-icon-all";var d="All";h.textContent=d,h.id="exptID-all",h.appendChild(f),h.addEventListener("click",p=>{this.toggleAllExptVisibility()}),c.insertBefore(h,a),c.insertBefore(h,a)}this.visibleExptIDs=o}animate(){this.renderRequested&&(window.viewer.updateGUIInfo(),window.controls.update(),window.renderer.render(window.scene,window.camera),this.renderRequested=!1,window.viewer.enableMouseClick())}requestRender(){typeof window<"u"&&!this.renderRequested&&(this.renderRequested=!0,window.requestAnimationFrame(this.animate.bind(this)))}}function zb(){if(typeof window.viewer>"u")return;window.renderer=new tS,window.renderer.setClearColor(window.viewer.colors.background),window.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(window.renderer.domElement),window.scene=new sg,window.scene.fog=new vh(window.viewer.colors.background,500,8e3);var i=500,e=window.innerWidth/window.innerHeight;window.camera=new Zd(i*e/-2,i*e/2,i/2,i/-2,1,5e4),window.renderer.render(window.scene,window.camera),window.rayCaster=new gg,window.rayCaster.params.Points.threshold=10,window.controls=new iS(window.camera,window.renderer.domElement),window.controls.maxDistance=3e3,window.controls.enablePan=!1,window.controls.rotateSpeed=.2,window.controls.update(),window.controls.addEventListener("change",function(){window.viewer.requestRender()}),window.mousePosition=new Ee,window.addEventListener("mousemove",function(n){window.mousePosition.x=n.clientX/window.innerWidth*2-1,window.mousePosition.y=-(n.clientY/window.innerHeight)*2+1,window.viewer.requestRender()}),window.addEventListener("resize",function(){window.camera.aspect=window.innerWidth/window.innerHeight,window.camera.updateProjectionMatrix(),window.renderer.setSize(window.innerWidth,window.innerHeight),window.viewer.requestRender()}),window.addEventListener("dragstart",n=>{dragged=n.target}),window.addEventListener("dragover",n=>{n.preventDefault()}),window.addEventListener("drop",function(n){n.preventDefault(),n.stopPropagation();const r=n.dataTransfer.files[0],s=r.name.split(".").pop();s=="refl"&&window.viewer.isStandalone?window.viewer.addReflectionTable(r):s=="expt"&&window.viewer.isStandalone&&window.viewer.addExperiment(r)}),window.addEventListener("dblclick",function(n){});let t={x:0,y:0};window.addEventListener("mousedown",function(n){t={x:n.clientX,y:n.clientY},n.button==2&&window.viewer.setCameraToDefaultPositionWithExperiment()}),window.addEventListener("click",function(n){const r=n.clientX-t.x,s=n.clientY-t.y;Math.sqrt(r*r+s*s)<5&&window.viewer.clickOnReflection()}),window.addEventListener("keydown",function(n){n.key==="s"&&window.viewer.toggleSidebar()}),window.viewer.setCameraToDefaultPosition(),window.viewer.requestRender()}/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const Bb=4,Df=0,Pf=1,Vb=2;function Ss(i){let e=i.length;for(;--e>=0;)i[e]=0}const Hb=0,em=1,Gb=2,Wb=3,Xb=258,Gh=29,ga=256,ia=ga+1+Gh,is=30,Wh=19,tm=2*ia+1,sr=15,kl=16,qb=7,Xh=256,nm=16,im=17,rm=18,ih=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),vo=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),Yb=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),sm=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Zb=512,ai=new Array((ia+2)*2);Ss(ai);const Ws=new Array(is*2);Ss(Ws);const ra=new Array(Zb);Ss(ra);const sa=new Array(Xb-Wb+1);Ss(sa);const qh=new Array(Gh);Ss(qh);const Fo=new Array(is);Ss(Fo);function zl(i,e,t,n,r){this.static_tree=i,this.extra_bits=e,this.extra_base=t,this.elems=n,this.max_length=r,this.has_stree=i&&i.length}let am,om,lm;function Bl(i,e){this.dyn_tree=i,this.max_code=0,this.stat_desc=e}const cm=i=>i<256?ra[i]:ra[256+(i>>>7)],aa=(i,e)=>{i.pending_buf[i.pending++]=e&255,i.pending_buf[i.pending++]=e>>>8&255},Jt=(i,e,t)=>{i.bi_valid>kl-t?(i.bi_buf|=e<<i.bi_valid&65535,aa(i,i.bi_buf),i.bi_buf=e>>kl-i.bi_valid,i.bi_valid+=t-kl):(i.bi_buf|=e<<i.bi_valid&65535,i.bi_valid+=t)},Gn=(i,e,t)=>{Jt(i,t[e*2],t[e*2+1])},hm=(i,e)=>{let t=0;do t|=i&1,i>>>=1,t<<=1;while(--e>0);return t>>>1},jb=i=>{i.bi_valid===16?(aa(i,i.bi_buf),i.bi_buf=0,i.bi_valid=0):i.bi_valid>=8&&(i.pending_buf[i.pending++]=i.bi_buf&255,i.bi_buf>>=8,i.bi_valid-=8)},$b=(i,e)=>{const t=e.dyn_tree,n=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,h,u,f,d,g,_=0;for(f=0;f<=sr;f++)i.bl_count[f]=0;for(t[i.heap[i.heap_max]*2+1]=0,l=i.heap_max+1;l<tm;l++)h=i.heap[l],f=t[t[h*2+1]*2+1]+1,f>c&&(f=c,_++),t[h*2+1]=f,!(h>n)&&(i.bl_count[f]++,d=0,h>=o&&(d=a[h-o]),g=t[h*2],i.opt_len+=g*(f+d),s&&(i.static_len+=g*(r[h*2+1]+d)));if(_!==0){do{for(f=c-1;i.bl_count[f]===0;)f--;i.bl_count[f]--,i.bl_count[f+1]+=2,i.bl_count[c]--,_-=2}while(_>0);for(f=c;f!==0;f--)for(h=i.bl_count[f];h!==0;)u=i.heap[--l],!(u>n)&&(t[u*2+1]!==f&&(i.opt_len+=(f-t[u*2+1])*t[u*2],t[u*2+1]=f),h--)}},um=(i,e,t)=>{const n=new Array(sr+1);let r=0,s,a;for(s=1;s<=sr;s++)r=r+t[s-1]<<1,n[s]=r;for(a=0;a<=e;a++){let o=i[a*2+1];o!==0&&(i[a*2]=hm(n[o]++,o))}},Kb=()=>{let i,e,t,n,r;const s=new Array(sr+1);for(t=0,n=0;n<Gh-1;n++)for(qh[n]=t,i=0;i<1<<ih[n];i++)sa[t++]=n;for(sa[t-1]=n,r=0,n=0;n<16;n++)for(Fo[n]=r,i=0;i<1<<vo[n];i++)ra[r++]=n;for(r>>=7;n<is;n++)for(Fo[n]=r<<7,i=0;i<1<<vo[n]-7;i++)ra[256+r++]=n;for(e=0;e<=sr;e++)s[e]=0;for(i=0;i<=143;)ai[i*2+1]=8,i++,s[8]++;for(;i<=255;)ai[i*2+1]=9,i++,s[9]++;for(;i<=279;)ai[i*2+1]=7,i++,s[7]++;for(;i<=287;)ai[i*2+1]=8,i++,s[8]++;for(um(ai,ia+1,s),i=0;i<is;i++)Ws[i*2+1]=5,Ws[i*2]=hm(i,5);am=new zl(ai,ih,ga+1,ia,sr),om=new zl(Ws,vo,0,is,sr),lm=new zl(new Array(0),Yb,0,Wh,qb)},fm=i=>{let e;for(e=0;e<ia;e++)i.dyn_ltree[e*2]=0;for(e=0;e<is;e++)i.dyn_dtree[e*2]=0;for(e=0;e<Wh;e++)i.bl_tree[e*2]=0;i.dyn_ltree[Xh*2]=1,i.opt_len=i.static_len=0,i.sym_next=i.matches=0},dm=i=>{i.bi_valid>8?aa(i,i.bi_buf):i.bi_valid>0&&(i.pending_buf[i.pending++]=i.bi_buf),i.bi_buf=0,i.bi_valid=0},If=(i,e,t,n)=>{const r=e*2,s=t*2;return i[r]<i[s]||i[r]===i[s]&&n[e]<=n[t]},Vl=(i,e,t)=>{const n=i.heap[t];let r=t<<1;for(;r<=i.heap_len&&(r<i.heap_len&&If(e,i.heap[r+1],i.heap[r],i.depth)&&r++,!If(e,n,i.heap[r],i.depth));)i.heap[t]=i.heap[r],t=r,r<<=1;i.heap[t]=n},Lf=(i,e,t)=>{let n,r,s=0,a,o;if(i.sym_next!==0)do n=i.pending_buf[i.sym_buf+s++]&255,n+=(i.pending_buf[i.sym_buf+s++]&255)<<8,r=i.pending_buf[i.sym_buf+s++],n===0?Gn(i,r,e):(a=sa[r],Gn(i,a+ga+1,e),o=ih[a],o!==0&&(r-=qh[a],Jt(i,r,o)),n--,a=cm(n),Gn(i,a,t),o=vo[a],o!==0&&(n-=Fo[a],Jt(i,n,o)));while(s<i.sym_next);Gn(i,Xh,e)},rh=(i,e)=>{const t=e.dyn_tree,n=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let a,o,c=-1,l;for(i.heap_len=0,i.heap_max=tm,a=0;a<s;a++)t[a*2]!==0?(i.heap[++i.heap_len]=c=a,i.depth[a]=0):t[a*2+1]=0;for(;i.heap_len<2;)l=i.heap[++i.heap_len]=c<2?++c:0,t[l*2]=1,i.depth[l]=0,i.opt_len--,r&&(i.static_len-=n[l*2+1]);for(e.max_code=c,a=i.heap_len>>1;a>=1;a--)Vl(i,t,a);l=s;do a=i.heap[1],i.heap[1]=i.heap[i.heap_len--],Vl(i,t,1),o=i.heap[1],i.heap[--i.heap_max]=a,i.heap[--i.heap_max]=o,t[l*2]=t[a*2]+t[o*2],i.depth[l]=(i.depth[a]>=i.depth[o]?i.depth[a]:i.depth[o])+1,t[a*2+1]=t[o*2+1]=l,i.heap[1]=l++,Vl(i,t,1);while(i.heap_len>=2);i.heap[--i.heap_max]=i.heap[1],$b(i,e),um(t,c,i.bl_count)},Uf=(i,e,t)=>{let n,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(t+1)*2+1]=65535,n=0;n<=t;n++)s=a,a=e[(n+1)*2+1],!(++o<c&&s===a)&&(o<l?i.bl_tree[s*2]+=o:s!==0?(s!==r&&i.bl_tree[s*2]++,i.bl_tree[nm*2]++):o<=10?i.bl_tree[im*2]++:i.bl_tree[rm*2]++,o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4))},Ff=(i,e,t)=>{let n,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),n=0;n<=t;n++)if(s=a,a=e[(n+1)*2+1],!(++o<c&&s===a)){if(o<l)do Gn(i,s,i.bl_tree);while(--o!==0);else s!==0?(s!==r&&(Gn(i,s,i.bl_tree),o--),Gn(i,nm,i.bl_tree),Jt(i,o-3,2)):o<=10?(Gn(i,im,i.bl_tree),Jt(i,o-3,3)):(Gn(i,rm,i.bl_tree),Jt(i,o-11,7));o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4)}},Jb=i=>{let e;for(Uf(i,i.dyn_ltree,i.l_desc.max_code),Uf(i,i.dyn_dtree,i.d_desc.max_code),rh(i,i.bl_desc),e=Wh-1;e>=3&&i.bl_tree[sm[e]*2+1]===0;e--);return i.opt_len+=3*(e+1)+5+5+4,e},Qb=(i,e,t,n)=>{let r;for(Jt(i,e-257,5),Jt(i,t-1,5),Jt(i,n-4,4),r=0;r<n;r++)Jt(i,i.bl_tree[sm[r]*2+1],3);Ff(i,i.dyn_ltree,e-1),Ff(i,i.dyn_dtree,t-1)},eM=i=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&i.dyn_ltree[t*2]!==0)return Df;if(i.dyn_ltree[9*2]!==0||i.dyn_ltree[10*2]!==0||i.dyn_ltree[13*2]!==0)return Pf;for(t=32;t<ga;t++)if(i.dyn_ltree[t*2]!==0)return Pf;return Df};let Of=!1;const tM=i=>{Of||(Kb(),Of=!0),i.l_desc=new Bl(i.dyn_ltree,am),i.d_desc=new Bl(i.dyn_dtree,om),i.bl_desc=new Bl(i.bl_tree,lm),i.bi_buf=0,i.bi_valid=0,fm(i)},pm=(i,e,t,n)=>{Jt(i,(Hb<<1)+(n?1:0),3),dm(i),aa(i,t),aa(i,~t),t&&i.pending_buf.set(i.window.subarray(e,e+t),i.pending),i.pending+=t},nM=i=>{Jt(i,em<<1,3),Gn(i,Xh,ai),jb(i)},iM=(i,e,t,n)=>{let r,s,a=0;i.level>0?(i.strm.data_type===Vb&&(i.strm.data_type=eM(i)),rh(i,i.l_desc),rh(i,i.d_desc),a=Jb(i),r=i.opt_len+3+7>>>3,s=i.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?pm(i,e,t,n):i.strategy===Bb||s===r?(Jt(i,(em<<1)+(n?1:0),3),Lf(i,ai,Ws)):(Jt(i,(Gb<<1)+(n?1:0),3),Qb(i,i.l_desc.max_code+1,i.d_desc.max_code+1,a+1),Lf(i,i.dyn_ltree,i.dyn_dtree)),fm(i),n&&dm(i)},rM=(i,e,t)=>(i.pending_buf[i.sym_buf+i.sym_next++]=e,i.pending_buf[i.sym_buf+i.sym_next++]=e>>8,i.pending_buf[i.sym_buf+i.sym_next++]=t,e===0?i.dyn_ltree[t*2]++:(i.matches++,e--,i.dyn_ltree[(sa[t]+ga+1)*2]++,i.dyn_dtree[cm(e)*2]++),i.sym_next===i.sym_end);var sM=tM,aM=pm,oM=iM,lM=rM,cM=nM,hM={_tr_init:sM,_tr_stored_block:aM,_tr_flush_block:oM,_tr_tally:lM,_tr_align:cM};const uM=(i,e,t,n)=>{let r=i&65535|0,s=i>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+e[n++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0};var oa=uM;const fM=()=>{let i,e=[];for(var t=0;t<256;t++){i=t;for(var n=0;n<8;n++)i=i&1?3988292384^i>>>1:i>>>1;e[t]=i}return e},dM=new Uint32Array(fM()),pM=(i,e,t,n)=>{const r=dM,s=n+t;i^=-1;for(let a=n;a<s;a++)i=i>>>8^r[(i^e[a])&255];return i^-1};var Dt=pM,_r={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},xa={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:mM,_tr_stored_block:sh,_tr_flush_block:_M,_tr_tally:Fi,_tr_align:gM}=hM,{Z_NO_FLUSH:Oi,Z_PARTIAL_FLUSH:xM,Z_FULL_FLUSH:vM,Z_FINISH:En,Z_BLOCK:Nf,Z_OK:Lt,Z_STREAM_END:kf,Z_STREAM_ERROR:Yn,Z_DATA_ERROR:yM,Z_BUF_ERROR:Hl,Z_DEFAULT_COMPRESSION:SM,Z_FILTERED:bM,Z_HUFFMAN_ONLY:no,Z_RLE:MM,Z_FIXED:wM,Z_DEFAULT_STRATEGY:EM,Z_UNKNOWN:TM,Z_DEFLATED:Xo}=xa,AM=9,RM=15,CM=8,DM=29,PM=256,ah=PM+1+DM,IM=30,LM=19,UM=2*ah+1,FM=15,He=3,Ci=258,Zn=Ci+He+1,OM=32,gs=42,Yh=57,oh=69,lh=73,ch=91,hh=103,ar=113,ks=666,Zt=1,bs=2,gr=3,Ms=4,NM=3,or=(i,e)=>(i.msg=_r[e],e),zf=i=>i*2-(i>4?9:0),Ei=i=>{let e=i.length;for(;--e>=0;)i[e]=0},kM=i=>{let e,t,n,r=i.w_size;e=i.hash_size,n=e;do t=i.head[--n],i.head[n]=t>=r?t-r:0;while(--e);e=r,n=e;do t=i.prev[--n],i.prev[n]=t>=r?t-r:0;while(--e)};let zM=(i,e,t)=>(e<<i.hash_shift^t)&i.hash_mask,Ni=zM;const hn=i=>{const e=i.state;let t=e.pending;t>i.avail_out&&(t=i.avail_out),t!==0&&(i.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),i.next_out),i.next_out+=t,e.pending_out+=t,i.total_out+=t,i.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},mn=(i,e)=>{_M(i,i.block_start>=0?i.block_start:-1,i.strstart-i.block_start,e),i.block_start=i.strstart,hn(i.strm)},je=(i,e)=>{i.pending_buf[i.pending++]=e},Us=(i,e)=>{i.pending_buf[i.pending++]=e>>>8&255,i.pending_buf[i.pending++]=e&255},uh=(i,e,t,n)=>{let r=i.avail_in;return r>n&&(r=n),r===0?0:(i.avail_in-=r,e.set(i.input.subarray(i.next_in,i.next_in+r),t),i.state.wrap===1?i.adler=oa(i.adler,e,r,t):i.state.wrap===2&&(i.adler=Dt(i.adler,e,r,t)),i.next_in+=r,i.total_in+=r,r)},mm=(i,e)=>{let t=i.max_chain_length,n=i.strstart,r,s,a=i.prev_length,o=i.nice_match;const c=i.strstart>i.w_size-Zn?i.strstart-(i.w_size-Zn):0,l=i.window,h=i.w_mask,u=i.prev,f=i.strstart+Ci;let d=l[n+a-1],g=l[n+a];i.prev_length>=i.good_match&&(t>>=2),o>i.lookahead&&(o=i.lookahead);do if(r=e,!(l[r+a]!==g||l[r+a-1]!==d||l[r]!==l[n]||l[++r]!==l[n+1])){n+=2,r++;do;while(l[++n]===l[++r]&&l[++n]===l[++r]&&l[++n]===l[++r]&&l[++n]===l[++r]&&l[++n]===l[++r]&&l[++n]===l[++r]&&l[++n]===l[++r]&&l[++n]===l[++r]&&n<f);if(s=Ci-(f-n),n=f-Ci,s>a){if(i.match_start=e,a=s,s>=o)break;d=l[n+a-1],g=l[n+a]}}while((e=u[e&h])>c&&--t!==0);return a<=i.lookahead?a:i.lookahead},xs=i=>{const e=i.w_size;let t,n,r;do{if(n=i.window_size-i.lookahead-i.strstart,i.strstart>=e+(e-Zn)&&(i.window.set(i.window.subarray(e,e+e-n),0),i.match_start-=e,i.strstart-=e,i.block_start-=e,i.insert>i.strstart&&(i.insert=i.strstart),kM(i),n+=e),i.strm.avail_in===0)break;if(t=uh(i.strm,i.window,i.strstart+i.lookahead,n),i.lookahead+=t,i.lookahead+i.insert>=He)for(r=i.strstart-i.insert,i.ins_h=i.window[r],i.ins_h=Ni(i,i.ins_h,i.window[r+1]);i.insert&&(i.ins_h=Ni(i,i.ins_h,i.window[r+He-1]),i.prev[r&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=r,r++,i.insert--,!(i.lookahead+i.insert<He)););}while(i.lookahead<Zn&&i.strm.avail_in!==0)},_m=(i,e)=>{let t=i.pending_buf_size-5>i.w_size?i.w_size:i.pending_buf_size-5,n,r,s,a=0,o=i.strm.avail_in;do{if(n=65535,s=i.bi_valid+42>>3,i.strm.avail_out<s||(s=i.strm.avail_out-s,r=i.strstart-i.block_start,n>r+i.strm.avail_in&&(n=r+i.strm.avail_in),n>s&&(n=s),n<t&&(n===0&&e!==En||e===Oi||n!==r+i.strm.avail_in)))break;a=e===En&&n===r+i.strm.avail_in?1:0,sh(i,0,0,a),i.pending_buf[i.pending-4]=n,i.pending_buf[i.pending-3]=n>>8,i.pending_buf[i.pending-2]=~n,i.pending_buf[i.pending-1]=~n>>8,hn(i.strm),r&&(r>n&&(r=n),i.strm.output.set(i.window.subarray(i.block_start,i.block_start+r),i.strm.next_out),i.strm.next_out+=r,i.strm.avail_out-=r,i.strm.total_out+=r,i.block_start+=r,n-=r),n&&(uh(i.strm,i.strm.output,i.strm.next_out,n),i.strm.next_out+=n,i.strm.avail_out-=n,i.strm.total_out+=n)}while(a===0);return o-=i.strm.avail_in,o&&(o>=i.w_size?(i.matches=2,i.window.set(i.strm.input.subarray(i.strm.next_in-i.w_size,i.strm.next_in),0),i.strstart=i.w_size,i.insert=i.strstart):(i.window_size-i.strstart<=o&&(i.strstart-=i.w_size,i.window.set(i.window.subarray(i.w_size,i.w_size+i.strstart),0),i.matches<2&&i.matches++,i.insert>i.strstart&&(i.insert=i.strstart)),i.window.set(i.strm.input.subarray(i.strm.next_in-o,i.strm.next_in),i.strstart),i.strstart+=o,i.insert+=o>i.w_size-i.insert?i.w_size-i.insert:o),i.block_start=i.strstart),i.high_water<i.strstart&&(i.high_water=i.strstart),a?Ms:e!==Oi&&e!==En&&i.strm.avail_in===0&&i.strstart===i.block_start?bs:(s=i.window_size-i.strstart,i.strm.avail_in>s&&i.block_start>=i.w_size&&(i.block_start-=i.w_size,i.strstart-=i.w_size,i.window.set(i.window.subarray(i.w_size,i.w_size+i.strstart),0),i.matches<2&&i.matches++,s+=i.w_size,i.insert>i.strstart&&(i.insert=i.strstart)),s>i.strm.avail_in&&(s=i.strm.avail_in),s&&(uh(i.strm,i.window,i.strstart,s),i.strstart+=s,i.insert+=s>i.w_size-i.insert?i.w_size-i.insert:s),i.high_water<i.strstart&&(i.high_water=i.strstart),s=i.bi_valid+42>>3,s=i.pending_buf_size-s>65535?65535:i.pending_buf_size-s,t=s>i.w_size?i.w_size:s,r=i.strstart-i.block_start,(r>=t||(r||e===En)&&e!==Oi&&i.strm.avail_in===0&&r<=s)&&(n=r>s?s:r,a=e===En&&i.strm.avail_in===0&&n===r?1:0,sh(i,i.block_start,n,a),i.block_start+=n,hn(i.strm)),a?gr:Zt)},Gl=(i,e)=>{let t,n;for(;;){if(i.lookahead<Zn){if(xs(i),i.lookahead<Zn&&e===Oi)return Zt;if(i.lookahead===0)break}if(t=0,i.lookahead>=He&&(i.ins_h=Ni(i,i.ins_h,i.window[i.strstart+He-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),t!==0&&i.strstart-t<=i.w_size-Zn&&(i.match_length=mm(i,t)),i.match_length>=He)if(n=Fi(i,i.strstart-i.match_start,i.match_length-He),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=He){i.match_length--;do i.strstart++,i.ins_h=Ni(i,i.ins_h,i.window[i.strstart+He-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart;while(--i.match_length!==0);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.ins_h=i.window[i.strstart],i.ins_h=Ni(i,i.ins_h,i.window[i.strstart+1]);else n=Fi(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(n&&(mn(i,!1),i.strm.avail_out===0))return Zt}return i.insert=i.strstart<He-1?i.strstart:He-1,e===En?(mn(i,!0),i.strm.avail_out===0?gr:Ms):i.sym_next&&(mn(i,!1),i.strm.avail_out===0)?Zt:bs},Gr=(i,e)=>{let t,n,r;for(;;){if(i.lookahead<Zn){if(xs(i),i.lookahead<Zn&&e===Oi)return Zt;if(i.lookahead===0)break}if(t=0,i.lookahead>=He&&(i.ins_h=Ni(i,i.ins_h,i.window[i.strstart+He-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=He-1,t!==0&&i.prev_length<i.max_lazy_match&&i.strstart-t<=i.w_size-Zn&&(i.match_length=mm(i,t),i.match_length<=5&&(i.strategy===bM||i.match_length===He&&i.strstart-i.match_start>4096)&&(i.match_length=He-1)),i.prev_length>=He&&i.match_length<=i.prev_length){r=i.strstart+i.lookahead-He,n=Fi(i,i.strstart-1-i.prev_match,i.prev_length-He),i.lookahead-=i.prev_length-1,i.prev_length-=2;do++i.strstart<=r&&(i.ins_h=Ni(i,i.ins_h,i.window[i.strstart+He-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart);while(--i.prev_length!==0);if(i.match_available=0,i.match_length=He-1,i.strstart++,n&&(mn(i,!1),i.strm.avail_out===0))return Zt}else if(i.match_available){if(n=Fi(i,0,i.window[i.strstart-1]),n&&mn(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return Zt}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(n=Fi(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<He-1?i.strstart:He-1,e===En?(mn(i,!0),i.strm.avail_out===0?gr:Ms):i.sym_next&&(mn(i,!1),i.strm.avail_out===0)?Zt:bs},BM=(i,e)=>{let t,n,r,s;const a=i.window;for(;;){if(i.lookahead<=Ci){if(xs(i),i.lookahead<=Ci&&e===Oi)return Zt;if(i.lookahead===0)break}if(i.match_length=0,i.lookahead>=He&&i.strstart>0&&(r=i.strstart-1,n=a[r],n===a[++r]&&n===a[++r]&&n===a[++r])){s=i.strstart+Ci;do;while(n===a[++r]&&n===a[++r]&&n===a[++r]&&n===a[++r]&&n===a[++r]&&n===a[++r]&&n===a[++r]&&n===a[++r]&&r<s);i.match_length=Ci-(s-r),i.match_length>i.lookahead&&(i.match_length=i.lookahead)}if(i.match_length>=He?(t=Fi(i,1,i.match_length-He),i.lookahead-=i.match_length,i.strstart+=i.match_length,i.match_length=0):(t=Fi(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++),t&&(mn(i,!1),i.strm.avail_out===0))return Zt}return i.insert=0,e===En?(mn(i,!0),i.strm.avail_out===0?gr:Ms):i.sym_next&&(mn(i,!1),i.strm.avail_out===0)?Zt:bs},VM=(i,e)=>{let t;for(;;){if(i.lookahead===0&&(xs(i),i.lookahead===0)){if(e===Oi)return Zt;break}if(i.match_length=0,t=Fi(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++,t&&(mn(i,!1),i.strm.avail_out===0))return Zt}return i.insert=0,e===En?(mn(i,!0),i.strm.avail_out===0?gr:Ms):i.sym_next&&(mn(i,!1),i.strm.avail_out===0)?Zt:bs};function Nn(i,e,t,n,r){this.good_length=i,this.max_lazy=e,this.nice_length=t,this.max_chain=n,this.func=r}const zs=[new Nn(0,0,0,0,_m),new Nn(4,4,8,4,Gl),new Nn(4,5,16,8,Gl),new Nn(4,6,32,32,Gl),new Nn(4,4,16,16,Gr),new Nn(8,16,32,32,Gr),new Nn(8,16,128,128,Gr),new Nn(8,32,128,256,Gr),new Nn(32,128,258,1024,Gr),new Nn(32,258,258,4096,Gr)],HM=i=>{i.window_size=2*i.w_size,Ei(i.head),i.max_lazy_match=zs[i.level].max_lazy,i.good_match=zs[i.level].good_length,i.nice_match=zs[i.level].nice_length,i.max_chain_length=zs[i.level].max_chain,i.strstart=0,i.block_start=0,i.lookahead=0,i.insert=0,i.match_length=i.prev_length=He-1,i.match_available=0,i.ins_h=0};function GM(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Xo,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(UM*2),this.dyn_dtree=new Uint16Array((2*IM+1)*2),this.bl_tree=new Uint16Array((2*LM+1)*2),Ei(this.dyn_ltree),Ei(this.dyn_dtree),Ei(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(FM+1),this.heap=new Uint16Array(2*ah+1),Ei(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*ah+1),Ei(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const va=i=>{if(!i)return 1;const e=i.state;return!e||e.strm!==i||e.status!==gs&&e.status!==Yh&&e.status!==oh&&e.status!==lh&&e.status!==ch&&e.status!==hh&&e.status!==ar&&e.status!==ks?1:0},gm=i=>{if(va(i))return or(i,Yn);i.total_in=i.total_out=0,i.data_type=TM;const e=i.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?Yh:e.wrap?gs:ar,i.adler=e.wrap===2?0:1,e.last_flush=-2,mM(e),Lt},xm=i=>{const e=gm(i);return e===Lt&&HM(i.state),e},WM=(i,e)=>va(i)||i.state.wrap!==2?Yn:(i.state.gzhead=e,Lt),vm=(i,e,t,n,r,s)=>{if(!i)return Yn;let a=1;if(e===SM&&(e=6),n<0?(a=0,n=-n):n>15&&(a=2,n-=16),r<1||r>AM||t!==Xo||n<8||n>15||e<0||e>9||s<0||s>wM||n===8&&a!==1)return or(i,Yn);n===8&&(n=9);const o=new GM;return i.state=o,o.strm=i,o.status=gs,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=r+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+He-1)/He),o.window=new Uint8Array(o.w_size*2),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<r+6,o.pending_buf_size=o.lit_bufsize*4,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=(o.lit_bufsize-1)*3,o.level=e,o.strategy=s,o.method=t,xm(i)},XM=(i,e)=>vm(i,e,Xo,RM,CM,EM),qM=(i,e)=>{if(va(i)||e>Nf||e<0)return i?or(i,Yn):Yn;const t=i.state;if(!i.output||i.avail_in!==0&&!i.input||t.status===ks&&e!==En)return or(i,i.avail_out===0?Hl:Yn);const n=t.last_flush;if(t.last_flush=e,t.pending!==0){if(hn(i),i.avail_out===0)return t.last_flush=-1,Lt}else if(i.avail_in===0&&zf(e)<=zf(n)&&e!==En)return or(i,Hl);if(t.status===ks&&i.avail_in!==0)return or(i,Hl);if(t.status===gs&&t.wrap===0&&(t.status=ar),t.status===gs){let r=Xo+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=no||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=OM),r+=31-r%31,Us(t,r),t.strstart!==0&&(Us(t,i.adler>>>16),Us(t,i.adler&65535)),i.adler=1,t.status=ar,hn(i),t.pending!==0)return t.last_flush=-1,Lt}if(t.status===Yh){if(i.adler=0,je(t,31),je(t,139),je(t,8),t.gzhead)je(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),je(t,t.gzhead.time&255),je(t,t.gzhead.time>>8&255),je(t,t.gzhead.time>>16&255),je(t,t.gzhead.time>>24&255),je(t,t.level===9?2:t.strategy>=no||t.level<2?4:0),je(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(je(t,t.gzhead.extra.length&255),je(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(i.adler=Dt(i.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=oh;else if(je(t,0),je(t,0),je(t,0),je(t,0),je(t,0),je(t,t.level===9?2:t.strategy>=no||t.level<2?4:0),je(t,NM),t.status=ar,hn(i),t.pending!==0)return t.last_flush=-1,Lt}if(t.status===oh){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(i.adler=Dt(i.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=o,hn(i),t.pending!==0)return t.last_flush=-1,Lt;r=0,s-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(i.adler=Dt(i.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=lh}if(t.status===lh){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(i.adler=Dt(i.adler,t.pending_buf,t.pending-r,r)),hn(i),t.pending!==0)return t.last_flush=-1,Lt;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,je(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(i.adler=Dt(i.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=ch}if(t.status===ch){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(i.adler=Dt(i.adler,t.pending_buf,t.pending-r,r)),hn(i),t.pending!==0)return t.last_flush=-1,Lt;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,je(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(i.adler=Dt(i.adler,t.pending_buf,t.pending-r,r))}t.status=hh}if(t.status===hh){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(hn(i),t.pending!==0))return t.last_flush=-1,Lt;je(t,i.adler&255),je(t,i.adler>>8&255),i.adler=0}if(t.status=ar,hn(i),t.pending!==0)return t.last_flush=-1,Lt}if(i.avail_in!==0||t.lookahead!==0||e!==Oi&&t.status!==ks){let r=t.level===0?_m(t,e):t.strategy===no?VM(t,e):t.strategy===MM?BM(t,e):zs[t.level].func(t,e);if((r===gr||r===Ms)&&(t.status=ks),r===Zt||r===gr)return i.avail_out===0&&(t.last_flush=-1),Lt;if(r===bs&&(e===xM?gM(t):e!==Nf&&(sh(t,0,0,!1),e===vM&&(Ei(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),hn(i),i.avail_out===0))return t.last_flush=-1,Lt}return e!==En?Lt:t.wrap<=0?kf:(t.wrap===2?(je(t,i.adler&255),je(t,i.adler>>8&255),je(t,i.adler>>16&255),je(t,i.adler>>24&255),je(t,i.total_in&255),je(t,i.total_in>>8&255),je(t,i.total_in>>16&255),je(t,i.total_in>>24&255)):(Us(t,i.adler>>>16),Us(t,i.adler&65535)),hn(i),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?Lt:kf)},YM=i=>{if(va(i))return Yn;const e=i.state.status;return i.state=null,e===ar?or(i,yM):Lt},ZM=(i,e)=>{let t=e.length;if(va(i))return Yn;const n=i.state,r=n.wrap;if(r===2||r===1&&n.status!==gs||n.lookahead)return Yn;if(r===1&&(i.adler=oa(i.adler,e,t,0)),n.wrap=0,t>=n.w_size){r===0&&(Ei(n.head),n.strstart=0,n.block_start=0,n.insert=0);let c=new Uint8Array(n.w_size);c.set(e.subarray(t-n.w_size,t),0),e=c,t=n.w_size}const s=i.avail_in,a=i.next_in,o=i.input;for(i.avail_in=t,i.next_in=0,i.input=e,xs(n);n.lookahead>=He;){let c=n.strstart,l=n.lookahead-(He-1);do n.ins_h=Ni(n,n.ins_h,n.window[c+He-1]),n.prev[c&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=c,c++;while(--l);n.strstart=c,n.lookahead=He-1,xs(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=He-1,n.match_available=0,i.next_in=a,i.input=o,i.avail_in=s,n.wrap=r,Lt};var jM=XM,$M=vm,KM=xm,JM=gm,QM=WM,ew=qM,tw=YM,nw=ZM,iw="pako deflate (from Nodeca project)",Xs={deflateInit:jM,deflateInit2:$M,deflateReset:KM,deflateResetKeep:JM,deflateSetHeader:QM,deflate:ew,deflateEnd:tw,deflateSetDictionary:nw,deflateInfo:iw};const rw=(i,e)=>Object.prototype.hasOwnProperty.call(i,e);var sw=function(i){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const n in t)rw(t,n)&&(i[n]=t[n])}}return i},aw=i=>{let e=0;for(let n=0,r=i.length;n<r;n++)e+=i[n].length;const t=new Uint8Array(e);for(let n=0,r=0,s=i.length;n<s;n++){let a=i[n];t.set(a,r),r+=a.length}return t},qo={assign:sw,flattenChunks:aw};let ym=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{ym=!1}const la=new Uint8Array(256);for(let i=0;i<256;i++)la[i]=i>=252?6:i>=248?5:i>=240?4:i>=224?3:i>=192?2:1;la[254]=la[254]=1;var ow=i=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(i);let e,t,n,r,s,a=i.length,o=0;for(r=0;r<a;r++)t=i.charCodeAt(r),(t&64512)===55296&&r+1<a&&(n=i.charCodeAt(r+1),(n&64512)===56320&&(t=65536+(t-55296<<10)+(n-56320),r++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),s=0,r=0;s<o;r++)t=i.charCodeAt(r),(t&64512)===55296&&r+1<a&&(n=i.charCodeAt(r+1),(n&64512)===56320&&(t=65536+(t-55296<<10)+(n-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const lw=(i,e)=>{if(e<65534&&i.subarray&&ym)return String.fromCharCode.apply(null,i.length===e?i:i.subarray(0,e));let t="";for(let n=0;n<e;n++)t+=String.fromCharCode(i[n]);return t};var cw=(i,e)=>{const t=e||i.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(i.subarray(0,e));let n,r;const s=new Array(t*2);for(r=0,n=0;n<t;){let a=i[n++];if(a<128){s[r++]=a;continue}let o=la[a];if(o>4){s[r++]=65533,n+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&n<t;)a=a<<6|i[n++]&63,o--;if(o>1){s[r++]=65533;continue}a<65536?s[r++]=a:(a-=65536,s[r++]=55296|a>>10&1023,s[r++]=56320|a&1023)}return lw(s,r)},hw=(i,e)=>{e=e||i.length,e>i.length&&(e=i.length);let t=e-1;for(;t>=0&&(i[t]&192)===128;)t--;return t<0||t===0?e:t+la[i[t]]>e?t:e},ca={string2buf:ow,buf2string:cw,utf8border:hw};function uw(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Sm=uw;const bm=Object.prototype.toString,{Z_NO_FLUSH:fw,Z_SYNC_FLUSH:dw,Z_FULL_FLUSH:pw,Z_FINISH:mw,Z_OK:Oo,Z_STREAM_END:_w,Z_DEFAULT_COMPRESSION:gw,Z_DEFAULT_STRATEGY:xw,Z_DEFLATED:vw}=xa;function ya(i){this.options=qo.assign({level:gw,method:vw,chunkSize:16384,windowBits:15,memLevel:8,strategy:xw},i||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Sm,this.strm.avail_out=0;let t=Xs.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==Oo)throw new Error(_r[t]);if(e.header&&Xs.deflateSetHeader(this.strm,e.header),e.dictionary){let n;if(typeof e.dictionary=="string"?n=ca.string2buf(e.dictionary):bm.call(e.dictionary)==="[object ArrayBuffer]"?n=new Uint8Array(e.dictionary):n=e.dictionary,t=Xs.deflateSetDictionary(this.strm,n),t!==Oo)throw new Error(_r[t]);this._dict_set=!0}}ya.prototype.push=function(i,e){const t=this.strm,n=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?mw:fw,typeof i=="string"?t.input=ca.string2buf(i):bm.call(i)==="[object ArrayBuffer]"?t.input=new Uint8Array(i):t.input=i,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(n),t.next_out=0,t.avail_out=n),(s===dw||s===pw)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=Xs.deflate(t,s),r===_w)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=Xs.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===Oo;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};ya.prototype.onData=function(i){this.chunks.push(i)};ya.prototype.onEnd=function(i){i===Oo&&(this.result=qo.flattenChunks(this.chunks)),this.chunks=[],this.err=i,this.msg=this.strm.msg};function Zh(i,e){const t=new ya(e);if(t.push(i,!0),t.err)throw t.msg||_r[t.err];return t.result}function yw(i,e){return e=e||{},e.raw=!0,Zh(i,e)}function Sw(i,e){return e=e||{},e.gzip=!0,Zh(i,e)}var bw=ya,Mw=Zh,ww=yw,Ew=Sw,Tw={Deflate:bw,deflate:Mw,deflateRaw:ww,gzip:Ew};const io=16209,Aw=16191;var Rw=function(e,t){let n,r,s,a,o,c,l,h,u,f,d,g,_,m,p,w,b,y,S,E,M,C,x,v;const R=e.state;n=e.next_in,x=e.input,r=n+(e.avail_in-5),s=e.next_out,v=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),c=R.dmax,l=R.wsize,h=R.whave,u=R.wnext,f=R.window,d=R.hold,g=R.bits,_=R.lencode,m=R.distcode,p=(1<<R.lenbits)-1,w=(1<<R.distbits)-1;e:do{g<15&&(d+=x[n++]<<g,g+=8,d+=x[n++]<<g,g+=8),b=_[d&p];t:for(;;){if(y=b>>>24,d>>>=y,g-=y,y=b>>>16&255,y===0)v[s++]=b&65535;else if(y&16){S=b&65535,y&=15,y&&(g<y&&(d+=x[n++]<<g,g+=8),S+=d&(1<<y)-1,d>>>=y,g-=y),g<15&&(d+=x[n++]<<g,g+=8,d+=x[n++]<<g,g+=8),b=m[d&w];n:for(;;){if(y=b>>>24,d>>>=y,g-=y,y=b>>>16&255,y&16){if(E=b&65535,y&=15,g<y&&(d+=x[n++]<<g,g+=8,g<y&&(d+=x[n++]<<g,g+=8)),E+=d&(1<<y)-1,E>c){e.msg="invalid distance too far back",R.mode=io;break e}if(d>>>=y,g-=y,y=s-a,E>y){if(y=E-y,y>h&&R.sane){e.msg="invalid distance too far back",R.mode=io;break e}if(M=0,C=f,u===0){if(M+=l-y,y<S){S-=y;do v[s++]=f[M++];while(--y);M=s-E,C=v}}else if(u<y){if(M+=l+u-y,y-=u,y<S){S-=y;do v[s++]=f[M++];while(--y);if(M=0,u<S){y=u,S-=y;do v[s++]=f[M++];while(--y);M=s-E,C=v}}}else if(M+=u-y,y<S){S-=y;do v[s++]=f[M++];while(--y);M=s-E,C=v}for(;S>2;)v[s++]=C[M++],v[s++]=C[M++],v[s++]=C[M++],S-=3;S&&(v[s++]=C[M++],S>1&&(v[s++]=C[M++]))}else{M=s-E;do v[s++]=v[M++],v[s++]=v[M++],v[s++]=v[M++],S-=3;while(S>2);S&&(v[s++]=v[M++],S>1&&(v[s++]=v[M++]))}}else if((y&64)===0){b=m[(b&65535)+(d&(1<<y)-1)];continue n}else{e.msg="invalid distance code",R.mode=io;break e}break}}else if((y&64)===0){b=_[(b&65535)+(d&(1<<y)-1)];continue t}else if(y&32){R.mode=Aw;break e}else{e.msg="invalid literal/length code",R.mode=io;break e}break}}while(n<r&&s<o);S=g>>3,n-=S,g-=S<<3,d&=(1<<g)-1,e.next_in=n,e.next_out=s,e.avail_in=n<r?5+(r-n):5-(n-r),e.avail_out=s<o?257+(o-s):257-(s-o),R.hold=d,R.bits=g};const Wr=15,Bf=852,Vf=592,Hf=0,Wl=1,Gf=2,Cw=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Dw=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),Pw=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Iw=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Lw=(i,e,t,n,r,s,a,o)=>{const c=o.bits;let l=0,h=0,u=0,f=0,d=0,g=0,_=0,m=0,p=0,w=0,b,y,S,E,M,C=null,x;const v=new Uint16Array(Wr+1),R=new Uint16Array(Wr+1);let z=null,k,G,Y;for(l=0;l<=Wr;l++)v[l]=0;for(h=0;h<n;h++)v[e[t+h]]++;for(d=c,f=Wr;f>=1&&v[f]===0;f--);if(d>f&&(d=f),f===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,o.bits=1,0;for(u=1;u<f&&v[u]===0;u++);for(d<u&&(d=u),m=1,l=1;l<=Wr;l++)if(m<<=1,m-=v[l],m<0)return-1;if(m>0&&(i===Hf||f!==1))return-1;for(R[1]=0,l=1;l<Wr;l++)R[l+1]=R[l]+v[l];for(h=0;h<n;h++)e[t+h]!==0&&(a[R[e[t+h]]++]=h);if(i===Hf?(C=z=a,x=20):i===Wl?(C=Cw,z=Dw,x=257):(C=Pw,z=Iw,x=0),w=0,h=0,l=u,M=s,g=d,_=0,S=-1,p=1<<d,E=p-1,i===Wl&&p>Bf||i===Gf&&p>Vf)return 1;for(;;){k=l-_,a[h]+1<x?(G=0,Y=a[h]):a[h]>=x?(G=z[a[h]-x],Y=C[a[h]-x]):(G=96,Y=0),b=1<<l-_,y=1<<g,u=y;do y-=b,r[M+(w>>_)+y]=k<<24|G<<16|Y|0;while(y!==0);for(b=1<<l-1;w&b;)b>>=1;if(b!==0?(w&=b-1,w+=b):w=0,h++,--v[l]===0){if(l===f)break;l=e[t+a[h]]}if(l>d&&(w&E)!==S){for(_===0&&(_=d),M+=u,g=l-_,m=1<<g;g+_<f&&(m-=v[g+_],!(m<=0));)g++,m<<=1;if(p+=1<<g,i===Wl&&p>Bf||i===Gf&&p>Vf)return 1;S=w&E,r[S]=d<<24|g<<16|M-s|0}}return w!==0&&(r[M+w]=l-_<<24|64<<16|0),o.bits=d,0};var qs=Lw;const Uw=0,Mm=1,wm=2,{Z_FINISH:Wf,Z_BLOCK:Fw,Z_TREES:ro,Z_OK:xr,Z_STREAM_END:Ow,Z_NEED_DICT:Nw,Z_STREAM_ERROR:Rn,Z_DATA_ERROR:Em,Z_MEM_ERROR:Tm,Z_BUF_ERROR:kw,Z_DEFLATED:Xf}=xa,Yo=16180,qf=16181,Yf=16182,Zf=16183,jf=16184,$f=16185,Kf=16186,Jf=16187,Qf=16188,ed=16189,No=16190,ni=16191,Xl=16192,td=16193,ql=16194,nd=16195,id=16196,rd=16197,sd=16198,so=16199,ao=16200,ad=16201,od=16202,ld=16203,cd=16204,hd=16205,Yl=16206,ud=16207,fd=16208,ht=16209,Am=16210,Rm=16211,zw=852,Bw=592,Vw=15,Hw=Vw,dd=i=>(i>>>24&255)+(i>>>8&65280)+((i&65280)<<8)+((i&255)<<24);function Gw(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const br=i=>{if(!i)return 1;const e=i.state;return!e||e.strm!==i||e.mode<Yo||e.mode>Rm?1:0},Cm=i=>{if(br(i))return Rn;const e=i.state;return i.total_in=i.total_out=e.total=0,i.msg="",e.wrap&&(i.adler=e.wrap&1),e.mode=Yo,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(zw),e.distcode=e.distdyn=new Int32Array(Bw),e.sane=1,e.back=-1,xr},Dm=i=>{if(br(i))return Rn;const e=i.state;return e.wsize=0,e.whave=0,e.wnext=0,Cm(i)},Pm=(i,e)=>{let t;if(br(i))return Rn;const n=i.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?Rn:(n.window!==null&&n.wbits!==e&&(n.window=null),n.wrap=t,n.wbits=e,Dm(i))},Im=(i,e)=>{if(!i)return Rn;const t=new Gw;i.state=t,t.strm=i,t.window=null,t.mode=Yo;const n=Pm(i,e);return n!==xr&&(i.state=null),n},Ww=i=>Im(i,Hw);let pd=!0,Zl,jl;const Xw=i=>{if(pd){Zl=new Int32Array(512),jl=new Int32Array(32);let e=0;for(;e<144;)i.lens[e++]=8;for(;e<256;)i.lens[e++]=9;for(;e<280;)i.lens[e++]=7;for(;e<288;)i.lens[e++]=8;for(qs(Mm,i.lens,0,288,Zl,0,i.work,{bits:9}),e=0;e<32;)i.lens[e++]=5;qs(wm,i.lens,0,32,jl,0,i.work,{bits:5}),pd=!1}i.lencode=Zl,i.lenbits=9,i.distcode=jl,i.distbits=5},Lm=(i,e,t,n)=>{let r;const s=i.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),n>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>n&&(r=n),s.window.set(e.subarray(t-n,t-n+r),s.wnext),n-=r,n?(s.window.set(e.subarray(t-n,t),0),s.wnext=n,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},qw=(i,e)=>{let t,n,r,s,a,o,c,l,h,u,f,d,g,_,m=0,p,w,b,y,S,E,M,C;const x=new Uint8Array(4);let v,R;const z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(br(i)||!i.output||!i.input&&i.avail_in!==0)return Rn;t=i.state,t.mode===ni&&(t.mode=Xl),a=i.next_out,r=i.output,c=i.avail_out,s=i.next_in,n=i.input,o=i.avail_in,l=t.hold,h=t.bits,u=o,f=c,C=xr;e:for(;;)switch(t.mode){case Yo:if(t.wrap===0){t.mode=Xl;break}for(;h<16;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,x[0]=l&255,x[1]=l>>>8&255,t.check=Dt(t.check,x,2,0),l=0,h=0,t.mode=qf;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){i.msg="incorrect header check",t.mode=ht;break}if((l&15)!==Xf){i.msg="unknown compression method",t.mode=ht;break}if(l>>>=4,h-=4,M=(l&15)+8,t.wbits===0&&(t.wbits=M),M>15||M>t.wbits){i.msg="invalid window size",t.mode=ht;break}t.dmax=1<<t.wbits,t.flags=0,i.adler=t.check=1,t.mode=l&512?ed:ni,l=0,h=0;break;case qf:for(;h<16;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(t.flags=l,(t.flags&255)!==Xf){i.msg="unknown compression method",t.mode=ht;break}if(t.flags&57344){i.msg="unknown header flags set",t.mode=ht;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,t.check=Dt(t.check,x,2,0)),l=0,h=0,t.mode=Yf;case Yf:for(;h<32;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,x[2]=l>>>16&255,x[3]=l>>>24&255,t.check=Dt(t.check,x,4,0)),l=0,h=0,t.mode=Zf;case Zf:for(;h<16;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,t.check=Dt(t.check,x,2,0)),l=0,h=0,t.mode=jf;case jf:if(t.flags&1024){for(;h<16;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,t.check=Dt(t.check,x,2,0)),l=0,h=0}else t.head&&(t.head.extra=null);t.mode=$f;case $f:if(t.flags&1024&&(d=t.length,d>o&&(d=o),d&&(t.head&&(M=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(n.subarray(s,s+d),M)),t.flags&512&&t.wrap&4&&(t.check=Dt(t.check,n,d,s)),o-=d,s+=d,t.length-=d),t.length))break e;t.length=0,t.mode=Kf;case Kf:if(t.flags&2048){if(o===0)break e;d=0;do M=n[s+d++],t.head&&M&&t.length<65536&&(t.head.name+=String.fromCharCode(M));while(M&&d<o);if(t.flags&512&&t.wrap&4&&(t.check=Dt(t.check,n,d,s)),o-=d,s+=d,M)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=Jf;case Jf:if(t.flags&4096){if(o===0)break e;d=0;do M=n[s+d++],t.head&&M&&t.length<65536&&(t.head.comment+=String.fromCharCode(M));while(M&&d<o);if(t.flags&512&&t.wrap&4&&(t.check=Dt(t.check,n,d,s)),o-=d,s+=d,M)break e}else t.head&&(t.head.comment=null);t.mode=Qf;case Qf:if(t.flags&512){for(;h<16;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(t.wrap&4&&l!==(t.check&65535)){i.msg="header crc mismatch",t.mode=ht;break}l=0,h=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),i.adler=t.check=0,t.mode=ni;break;case ed:for(;h<32;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}i.adler=t.check=dd(l),l=0,h=0,t.mode=No;case No:if(t.havedict===0)return i.next_out=a,i.avail_out=c,i.next_in=s,i.avail_in=o,t.hold=l,t.bits=h,Nw;i.adler=t.check=1,t.mode=ni;case ni:if(e===Fw||e===ro)break e;case Xl:if(t.last){l>>>=h&7,h-=h&7,t.mode=Yl;break}for(;h<3;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}switch(t.last=l&1,l>>>=1,h-=1,l&3){case 0:t.mode=td;break;case 1:if(Xw(t),t.mode=so,e===ro){l>>>=2,h-=2;break e}break;case 2:t.mode=id;break;case 3:i.msg="invalid block type",t.mode=ht}l>>>=2,h-=2;break;case td:for(l>>>=h&7,h-=h&7;h<32;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if((l&65535)!==(l>>>16^65535)){i.msg="invalid stored block lengths",t.mode=ht;break}if(t.length=l&65535,l=0,h=0,t.mode=ql,e===ro)break e;case ql:t.mode=nd;case nd:if(d=t.length,d){if(d>o&&(d=o),d>c&&(d=c),d===0)break e;r.set(n.subarray(s,s+d),a),o-=d,s+=d,c-=d,a+=d,t.length-=d;break}t.mode=ni;break;case id:for(;h<14;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(t.nlen=(l&31)+257,l>>>=5,h-=5,t.ndist=(l&31)+1,l>>>=5,h-=5,t.ncode=(l&15)+4,l>>>=4,h-=4,t.nlen>286||t.ndist>30){i.msg="too many length or distance symbols",t.mode=ht;break}t.have=0,t.mode=rd;case rd:for(;t.have<t.ncode;){for(;h<3;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}t.lens[z[t.have++]]=l&7,l>>>=3,h-=3}for(;t.have<19;)t.lens[z[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,v={bits:t.lenbits},C=qs(Uw,t.lens,0,19,t.lencode,0,t.work,v),t.lenbits=v.bits,C){i.msg="invalid code lengths set",t.mode=ht;break}t.have=0,t.mode=sd;case sd:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,w=m>>>16&255,b=m&65535,!(p<=h);){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(b<16)l>>>=p,h-=p,t.lens[t.have++]=b;else{if(b===16){for(R=p+2;h<R;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(l>>>=p,h-=p,t.have===0){i.msg="invalid bit length repeat",t.mode=ht;break}M=t.lens[t.have-1],d=3+(l&3),l>>>=2,h-=2}else if(b===17){for(R=p+3;h<R;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}l>>>=p,h-=p,M=0,d=3+(l&7),l>>>=3,h-=3}else{for(R=p+7;h<R;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}l>>>=p,h-=p,M=0,d=11+(l&127),l>>>=7,h-=7}if(t.have+d>t.nlen+t.ndist){i.msg="invalid bit length repeat",t.mode=ht;break}for(;d--;)t.lens[t.have++]=M}}if(t.mode===ht)break;if(t.lens[256]===0){i.msg="invalid code -- missing end-of-block",t.mode=ht;break}if(t.lenbits=9,v={bits:t.lenbits},C=qs(Mm,t.lens,0,t.nlen,t.lencode,0,t.work,v),t.lenbits=v.bits,C){i.msg="invalid literal/lengths set",t.mode=ht;break}if(t.distbits=6,t.distcode=t.distdyn,v={bits:t.distbits},C=qs(wm,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,v),t.distbits=v.bits,C){i.msg="invalid distances set",t.mode=ht;break}if(t.mode=so,e===ro)break e;case so:t.mode=ao;case ao:if(o>=6&&c>=258){i.next_out=a,i.avail_out=c,i.next_in=s,i.avail_in=o,t.hold=l,t.bits=h,Rw(i,f),a=i.next_out,r=i.output,c=i.avail_out,s=i.next_in,n=i.input,o=i.avail_in,l=t.hold,h=t.bits,t.mode===ni&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,w=m>>>16&255,b=m&65535,!(p<=h);){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(w&&(w&240)===0){for(y=p,S=w,E=b;m=t.lencode[E+((l&(1<<y+S)-1)>>y)],p=m>>>24,w=m>>>16&255,b=m&65535,!(y+p<=h);){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}l>>>=y,h-=y,t.back+=y}if(l>>>=p,h-=p,t.back+=p,t.length=b,w===0){t.mode=hd;break}if(w&32){t.back=-1,t.mode=ni;break}if(w&64){i.msg="invalid literal/length code",t.mode=ht;break}t.extra=w&15,t.mode=ad;case ad:if(t.extra){for(R=t.extra;h<R;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=od;case od:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,w=m>>>16&255,b=m&65535,!(p<=h);){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if((w&240)===0){for(y=p,S=w,E=b;m=t.distcode[E+((l&(1<<y+S)-1)>>y)],p=m>>>24,w=m>>>16&255,b=m&65535,!(y+p<=h);){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}l>>>=y,h-=y,t.back+=y}if(l>>>=p,h-=p,t.back+=p,w&64){i.msg="invalid distance code",t.mode=ht;break}t.offset=b,t.extra=w&15,t.mode=ld;case ld:if(t.extra){for(R=t.extra;h<R;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){i.msg="invalid distance too far back",t.mode=ht;break}t.mode=cd;case cd:if(c===0)break e;if(d=f-c,t.offset>d){if(d=t.offset-d,d>t.whave&&t.sane){i.msg="invalid distance too far back",t.mode=ht;break}d>t.wnext?(d-=t.wnext,g=t.wsize-d):g=t.wnext-d,d>t.length&&(d=t.length),_=t.window}else _=r,g=a-t.offset,d=t.length;d>c&&(d=c),c-=d,t.length-=d;do r[a++]=_[g++];while(--d);t.length===0&&(t.mode=ao);break;case hd:if(c===0)break e;r[a++]=t.length,c--,t.mode=ao;break;case Yl:if(t.wrap){for(;h<32;){if(o===0)break e;o--,l|=n[s++]<<h,h+=8}if(f-=c,i.total_out+=f,t.total+=f,t.wrap&4&&f&&(i.adler=t.check=t.flags?Dt(t.check,r,f,a-f):oa(t.check,r,f,a-f)),f=c,t.wrap&4&&(t.flags?l:dd(l))!==t.check){i.msg="incorrect data check",t.mode=ht;break}l=0,h=0}t.mode=ud;case ud:if(t.wrap&&t.flags){for(;h<32;){if(o===0)break e;o--,l+=n[s++]<<h,h+=8}if(t.wrap&4&&l!==(t.total&4294967295)){i.msg="incorrect length check",t.mode=ht;break}l=0,h=0}t.mode=fd;case fd:C=Ow;break e;case ht:C=Em;break e;case Am:return Tm;case Rm:default:return Rn}return i.next_out=a,i.avail_out=c,i.next_in=s,i.avail_in=o,t.hold=l,t.bits=h,(t.wsize||f!==i.avail_out&&t.mode<ht&&(t.mode<Yl||e!==Wf))&&Lm(i,i.output,i.next_out,f-i.avail_out),u-=i.avail_in,f-=i.avail_out,i.total_in+=u,i.total_out+=f,t.total+=f,t.wrap&4&&f&&(i.adler=t.check=t.flags?Dt(t.check,r,f,i.next_out-f):oa(t.check,r,f,i.next_out-f)),i.data_type=t.bits+(t.last?64:0)+(t.mode===ni?128:0)+(t.mode===so||t.mode===ql?256:0),(u===0&&f===0||e===Wf)&&C===xr&&(C=kw),C},Yw=i=>{if(br(i))return Rn;let e=i.state;return e.window&&(e.window=null),i.state=null,xr},Zw=(i,e)=>{if(br(i))return Rn;const t=i.state;return(t.wrap&2)===0?Rn:(t.head=e,e.done=!1,xr)},jw=(i,e)=>{const t=e.length;let n,r,s;return br(i)||(n=i.state,n.wrap!==0&&n.mode!==No)?Rn:n.mode===No&&(r=1,r=oa(r,e,t,0),r!==n.check)?Em:(s=Lm(i,e,t,t),s?(n.mode=Am,Tm):(n.havedict=1,xr))};var $w=Dm,Kw=Pm,Jw=Cm,Qw=Ww,eE=Im,tE=qw,nE=Yw,iE=Zw,rE=jw,sE="pako inflate (from Nodeca project)",oi={inflateReset:$w,inflateReset2:Kw,inflateResetKeep:Jw,inflateInit:Qw,inflateInit2:eE,inflate:tE,inflateEnd:nE,inflateGetHeader:iE,inflateSetDictionary:rE,inflateInfo:sE};function aE(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var oE=aE;const Um=Object.prototype.toString,{Z_NO_FLUSH:lE,Z_FINISH:cE,Z_OK:ha,Z_STREAM_END:$l,Z_NEED_DICT:Kl,Z_STREAM_ERROR:hE,Z_DATA_ERROR:md,Z_MEM_ERROR:uE}=xa;function Sa(i){this.options=qo.assign({chunkSize:1024*64,windowBits:15,to:""},i||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(i&&i.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15)===0&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Sm,this.strm.avail_out=0;let t=oi.inflateInit2(this.strm,e.windowBits);if(t!==ha)throw new Error(_r[t]);if(this.header=new oE,oi.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=ca.string2buf(e.dictionary):Um.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=oi.inflateSetDictionary(this.strm,e.dictionary),t!==ha)))throw new Error(_r[t])}Sa.prototype.push=function(i,e){const t=this.strm,n=this.options.chunkSize,r=this.options.dictionary;let s,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?cE:lE,Um.call(i)==="[object ArrayBuffer]"?t.input=new Uint8Array(i):t.input=i,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(n),t.next_out=0,t.avail_out=n),s=oi.inflate(t,a),s===Kl&&r&&(s=oi.inflateSetDictionary(t,r),s===ha?s=oi.inflate(t,a):s===md&&(s=Kl));t.avail_in>0&&s===$l&&t.state.wrap>0&&i[t.next_in]!==0;)oi.inflateReset(t),s=oi.inflate(t,a);switch(s){case hE:case md:case Kl:case uE:return this.onEnd(s),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||s===$l))if(this.options.to==="string"){let c=ca.utf8border(t.output,t.next_out),l=t.next_out-c,h=ca.buf2string(t.output,c);t.next_out=l,t.avail_out=n-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(h)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(s===ha&&o===0)){if(s===$l)return s=oi.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};Sa.prototype.onData=function(i){this.chunks.push(i)};Sa.prototype.onEnd=function(i){i===ha&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=qo.flattenChunks(this.chunks)),this.chunks=[],this.err=i,this.msg=this.strm.msg};function jh(i,e){const t=new Sa(e);if(t.push(i),t.err)throw t.msg||_r[t.err];return t.result}function fE(i,e){return e=e||{},e.raw=!0,jh(i,e)}var dE=Sa,pE=jh,mE=fE,_E=jh,gE={Inflate:dE,inflate:pE,inflateRaw:mE,ungzip:_E};const{Deflate:xE,deflate:vE,deflateRaw:yE,gzip:SE}=Tw,{Inflate:bE,inflate:ME,inflateRaw:wE,ungzip:EE}=gE;var TE=xE,AE=vE,RE=yE,CE=SE,DE=bE,PE=ME,IE=wE,LE=EE,UE=xa,FE={Deflate:TE,deflate:AE,deflateRaw:RE,gzip:CE,Inflate:DE,inflate:PE,inflateRaw:IE,ungzip:LE,constants:UE},Jl={exports:{}},_d;function OE(){return _d||(_d=1,function(i){(function(){function e(a,o){if(o&&o.multiple&&!Array.isArray(a))throw new Error("Invalid argument type: Expected an Array to serialize multiple values.");const c=4294967296;let l,h,u=new Uint8Array(128),f=0;if(o&&o.multiple)for(let x=0;x<a.length;x++)d(a[x]);else d(a);return u.subarray(0,f);function d(x,v){switch(typeof x){case"undefined":g();break;case"boolean":_(x);break;case"number":m(x);break;case"string":p(x);break;case"object":x===null?g():x instanceof Date?S(x):Array.isArray(x)?w(x):x instanceof Uint8Array||x instanceof Uint8ClampedArray?b(x):x instanceof Int8Array||x instanceof Int16Array||x instanceof Uint16Array||x instanceof Int32Array||x instanceof Uint32Array||x instanceof Float32Array||x instanceof Float64Array?w(x):y(x);break;default:if(!v&&o&&o.invalidTypeReplacement)typeof o.invalidTypeReplacement=="function"?d(o.invalidTypeReplacement(x),!0):d(o.invalidTypeReplacement,!0);else throw new Error("Invalid argument type: The type '"+typeof x+"' cannot be serialized.")}}function g(x){E(192)}function _(x){E(x?195:194)}function m(x){if(isFinite(x)&&Math.floor(x)===x)if(x>=0&&x<=127)E(x);else if(x<0&&x>=-32)E(x);else if(x>0&&x<=255)M([204,x]);else if(x>=-128&&x<=127)M([208,x]);else if(x>0&&x<=65535)M([205,x>>>8,x]);else if(x>=-32768&&x<=32767)M([209,x>>>8,x]);else if(x>0&&x<=4294967295)M([206,x>>>24,x>>>16,x>>>8,x]);else if(x>=-2147483648&&x<=2147483647)M([210,x>>>24,x>>>16,x>>>8,x]);else if(x>0&&x<=18446744073709552e3){let v=x/c,R=x%c;M([211,v>>>24,v>>>16,v>>>8,v,R>>>24,R>>>16,R>>>8,R])}else x>=-9223372036854776e3&&x<=9223372036854776e3?(E(211),C(x)):x<0?M([211,128,0,0,0,0,0,0,0]):M([207,255,255,255,255,255,255,255,255]);else h||(l=new ArrayBuffer(8),h=new DataView(l)),h.setFloat64(0,x),E(203),M(new Uint8Array(l))}function p(x){let v=n(x),R=v.length;R<=31?E(160+R):R<=255?M([217,R]):R<=65535?M([218,R>>>8,R]):M([219,R>>>24,R>>>16,R>>>8,R]),M(v)}function w(x){let v=x.length;v<=15?E(144+v):v<=65535?M([220,v>>>8,v]):M([221,v>>>24,v>>>16,v>>>8,v]);for(let R=0;R<v;R++)d(x[R])}function b(x){let v=x.length;v<=15?M([196,v]):v<=65535?M([197,v>>>8,v]):M([198,v>>>24,v>>>16,v>>>8,v]),M(x)}function y(x){let v=0;for(let R in x)x[R]!==void 0&&v++;v<=15?E(128+v):v<=65535?M([222,v>>>8,v]):M([223,v>>>24,v>>>16,v>>>8,v]);for(let R in x){let z=x[R];z!==void 0&&(d(R),d(z))}}function S(x){let v=x.getTime()/1e3;if(x.getMilliseconds()===0&&v>=0&&v<4294967296)M([214,255,v>>>24,v>>>16,v>>>8,v]);else if(v>=0&&v<17179869184){let R=x.getMilliseconds()*1e6;M([215,255,R>>>22,R>>>14,R>>>6,R<<2>>>0|v/c,v>>>24,v>>>16,v>>>8,v])}else{let R=x.getMilliseconds()*1e6;M([199,12,255,R>>>24,R>>>16,R>>>8,R]),C(v)}}function E(x){if(u.length<f+1){let v=u.length*2;for(;v<f+1;)v*=2;let R=new Uint8Array(v);R.set(u),u=R}u[f]=x,f++}function M(x){if(u.length<f+x.length){let v=u.length*2;for(;v<f+x.length;)v*=2;let R=new Uint8Array(v);R.set(u),u=R}u.set(x,f),f+=x.length}function C(x){let v,R;x>=0?(v=x/c,R=x%c):(x++,v=Math.abs(x)/c,R=Math.abs(x)%c,v=~v,R=~R),M([v>>>24,v>>>16,v>>>8,v,R>>>24,R>>>16,R>>>8,R])}}function t(a,o){let l=0;if(a instanceof ArrayBuffer&&(a=new Uint8Array(a)),typeof a!="object"||typeof a.length>"u")throw new Error("Invalid argument type: Expected a byte array (Array or Uint8Array) to deserialize.");if(!a.length)throw new Error("Invalid argument: The byte array to deserialize is empty.");a instanceof Uint8Array||(a=new Uint8Array(a));let h;if(o&&o.multiple)for(h=[];l<a.length;)h.push(u());else h=u();return h;function u(){const S=a[l++];if(S>=0&&S<=127)return S;if(S>=128&&S<=143)return m(S-128);if(S>=144&&S<=159)return p(S-144);if(S>=160&&S<=191)return w(S-160);if(S===192)return null;if(S===193)throw new Error("Invalid byte code 0xc1 found.");if(S===194)return!1;if(S===195)return!0;if(S===196)return _(-1,1);if(S===197)return _(-1,2);if(S===198)return _(-1,4);if(S===199)return b(-1,1);if(S===200)return b(-1,2);if(S===201)return b(-1,4);if(S===202)return g(4);if(S===203)return g(8);if(S===204)return d(1);if(S===205)return d(2);if(S===206)return d(4);if(S===207)return d(8);if(S===208)return f(1);if(S===209)return f(2);if(S===210)return f(4);if(S===211)return f(8);if(S===212)return b(1);if(S===213)return b(2);if(S===214)return b(4);if(S===215)return b(8);if(S===216)return b(16);if(S===217)return w(-1,1);if(S===218)return w(-1,2);if(S===219)return w(-1,4);if(S===220)return p(-1,2);if(S===221)return p(-1,4);if(S===222)return m(-1,2);if(S===223)return m(-1,4);if(S>=224&&S<=255)return S-256;throw console.debug("msgpack array:",a),new Error("Invalid byte value '"+S+"' at index "+(l-1)+" in the MessagePack binary data (length "+a.length+"): Expecting a range of 0 to 255. This is not a byte array.")}function f(S){let E=0,M=!0;for(;S-- >0;)if(M){let C=a[l++];E+=C&127,C&128&&(E-=128),M=!1}else E*=256,E+=a[l++];return E}function d(S){let E=0;for(;S-- >0;)E*=256,E+=a[l++];return E}function g(S){let E=new DataView(a.buffer,l+a.byteOffset,S);if(l+=S,S===4)return E.getFloat32(0,!1);if(S===8)return E.getFloat64(0,!1)}function _(S,E){S<0&&(S=d(E));let M=a.subarray(l,l+S);return l+=S,M}function m(S,E){S<0&&(S=d(E));let M={};for(;S-- >0;){let C=u();M[C]=u()}return M}function p(S,E){S<0&&(S=d(E));let M=[];for(;S-- >0;)M.push(u());return M}function w(S,E){S<0&&(S=d(E));let M=l;return l+=S,r(a,M,S)}function b(S,E){S<0&&(S=d(E));let M=d(1),C=_(S);switch(M){case 255:return y(C)}return{type:M,data:C}}function y(S){if(S.length===4){let E=(S[0]<<24>>>0)+(S[1]<<16>>>0)+(S[2]<<8>>>0)+S[3];return new Date(E*1e3)}if(S.length===8){let E=(S[0]<<22>>>0)+(S[1]<<14>>>0)+(S[2]<<6>>>0)+(S[3]>>>2),M=(S[3]&3)*4294967296+(S[4]<<24>>>0)+(S[5]<<16>>>0)+(S[6]<<8>>>0)+S[7];return new Date(M*1e3+E/1e6)}if(S.length===12){let E=(S[0]<<24>>>0)+(S[1]<<16>>>0)+(S[2]<<8>>>0)+S[3];l-=8;let M=f(8);return new Date(M*1e3+E/1e6)}throw new Error("Invalid data length for a date value.")}}function n(a){let o=!0,c=a.length;for(let u=0;u<c;u++)if(a.charCodeAt(u)>127){o=!1;break}let l=0,h=new Uint8Array(a.length*(o?1:4));for(let u=0;u!==c;u++){let f=a.charCodeAt(u);if(f<128){h[l++]=f;continue}if(f<2048)h[l++]=f>>6|192;else{if(f>55295&&f<56320){if(++u>=c)throw new Error("UTF-8 encode: incomplete surrogate pair");let d=a.charCodeAt(u);if(d<56320||d>57343)throw new Error("UTF-8 encode: second surrogate character 0x"+d.toString(16)+" at index "+u+" out of range");f=65536+((f&1023)<<10)+(d&1023),h[l++]=f>>18|240,h[l++]=f>>12&63|128}else h[l++]=f>>12|224;h[l++]=f>>6&63|128}h[l++]=f&63|128}return o?h:h.subarray(0,l)}function r(a,o,c){let l=o,h="";for(c+=o;l<c;){let u=a[l++];if(u>127)if(u>191&&u<224){if(l>=c)throw new Error("UTF-8 decode: incomplete 2-byte sequence");u=(u&31)<<6|a[l++]&63}else if(u>223&&u<240){if(l+1>=c)throw new Error("UTF-8 decode: incomplete 3-byte sequence");u=(u&15)<<12|(a[l++]&63)<<6|a[l++]&63}else if(u>239&&u<248){if(l+2>=c)throw new Error("UTF-8 decode: incomplete 4-byte sequence");u=(u&7)<<18|(a[l++]&63)<<12|(a[l++]&63)<<6|a[l++]&63}else throw new Error("UTF-8 decode: unknown multibyte start 0x"+u.toString(16)+" at index "+(l-1));if(u<=65535)h+=String.fromCharCode(u);else if(u<=1114111)u-=65536,h+=String.fromCharCode(u>>10|55296),h+=String.fromCharCode(u&1023|56320);else throw new Error("UTF-8 decode: code point 0x"+u.toString(16)+" exceeds UTF-16 reach")}return h}let s={serialize:e,deserialize:t,encode:e,decode:t};i?i.exports=s:window[window.msgpackJsName||"msgpack"]=s})()}(Jl)),Jl.exports}var Ys=OE();class gd{constructor(e,t,n,r,s,a,o){this.imageFilenames=e,this.crystalSummary=t,this.goniometer=n,this.crystal=r,this.scan=s,this.detectorPanelData=a,this.imageFilename=o,this.imageData={}}parseImageData(e,t){const n=ua.decompressImageData(e);this.imageData[t]=n}parseExptImageData(e){for(let t=0;t<e.length;t++){const n=ua.decompressImageData(e[t]);this.imageData[t]=n}}clearExperiment(){this.imageFilenames=null,this.crystalSummary=null,this.goniometer=null,this.crystal=null,this.scan=null,this.detectorPanelData=null,this.imageFilename=null,this.imageData={}}}class ua{constructor(){_i(this,"parseExperiment",e=>{const t=new FileReader;return new Promise((n,r)=>{t.onerror=()=>{t.abort(),r(new DOMException("Problem parsing .expt file."))},t.onloadend=()=>{if(n(t.result),ua.isDIALSExpt(e,t.result)){this.exptJSON=JSON.parse(t.result);for(var s=0;s<this.numExperiments();s++)this.experiments[s]=new gd(this.getImageFilenames(s),this.getCrystalSummary(s),this.getGoniometer(s),this.getCrystal(s),this.getScan(s),this.getDetectorData(s),this.getImageFilenames(s));this.filename=e.name}},t.readAsText(e)})});this.exptJSON=null,this.filename=null,this.experiments={},this.crystals={}}hasExptJSON(){return this.exptJSON!=null}static isDIALSExpt(e,t){return e.name.split(".").pop()==="expt"&&t[0]==="{"}static isExptJSON(e){try{return e.__id__=="ExperimentList"}catch{return!1}}static decompressImageData(e){e=Ys.decode(e);const{data:t,shape:n,dtype:r}=e,s=FE.inflate(t);let a;switch(r){case"float32":a=Float32Array;break;case"float64":a=Float64Array;break;case"int32":a=Int32Array;break;default:throw new Error(`Unsupported data type: ${r}`)}const o=new a(s.buffer,s.byteOffset,s.byteLength/a.BYTES_PER_ELEMENT);if(n.length===2){const[c,l]=n;if(o.length!==c*l)throw new Error("Data length mismatch for 2D reshape");return Array.from({length:c},(h,u)=>o.slice(u*l,(u+1)*l))}else if(n.length===3){const[c,l,h]=n;if(o.length!==c*l*h)throw new Error("Data length mismatch for 3D reshape");return Array.from({length:c},(u,f)=>Array.from({length:l},(d,g)=>o.slice(f*l*h+g*h,f*l*h+(g+1)*h)))}else throw new Error("Only 2D and 3D arrays are supported")}clearExperiment(){this.exptJSON=null,this.filename=null,Object.values(this.experiments).forEach(e=>e.clearExperiment()),this.experiments={},this.crystals={}}numExperiments(){return this.exptJSON==null?0:this.exptJSON.imageset.length}parseExperimentJSON(e){this.exptJSON=e,this.imageFilenames=[];for(var t=0;t<this.numExperiments();t++)this.experiments[t]=new gd(this.getImageFilenames(t),this.getCrystalSummary(t),this.getGoniometer(t),this.getCrystal(t),this.getScan(t),this.getDetectorData(t),this.getImageFilenames(t)),this.imageFilenames.push(this.getImageFilenames(t)),this.crystals=this.getAllCrystals()}parseImageData(e,t,n){this.experiments[n].parseImageData(e,t)}parseExptImageData(e,t){this.experiments[t].parseExptImageData(e)}getImageFilenames(e){const t=this.exptJSON.experiment[e].imageset;return this.exptJSON.imageset[t].template}getDetectorData(e){const t=this.getRawDetectorPanelData(e);for(var n=this.getDetectorOrientationData(e),r=[],s=0;s<t.length;s++){const M=t[s];var a=new Ee(M.pixel_size[0],M.pixel_size[1]),o=new Ee(M.image_size[0],M.image_size[1]),c=new Ee(a.x*o.x,a.y*o.y),l=new P(M.fast_axis[0],M.fast_axis[1],M.fast_axis[2]),h=new P(M.slow_axis[0],M.slow_axis[1],M.slow_axis[2]),u=new P(M.origin[0],M.origin[1],M.origin[2]),f=new we(l.x,h.x,u.x,l.y,h.y,u.y,l.z,h.z,u.z),d=new P(n.fast_axis[0],n.fast_axis[1],n.fast_axis[2]),g=new P(n.slow_axis[0],n.slow_axis[1],n.slow_axis[2]),_=d.clone().cross(g),m=new we(d.x,g.x,_.x,d.y,g.y,_.y,d.z,g.z,_.z),p=new P(n.origin[0],n.origin[1],n.origin[2]),w=m.clone().multiply(f),b=w.elements;b[6]+=p.x,b[7]+=p.y,b[8]+=p.z;var y=new we().fromArray(b),S=l.clone().multiplyScalar(c.x),E=h.clone().multiplyScalar(c.y);let C=u.clone();C.add(S.clone().multiplyScalar(.5)),C.add(E.clone().multiplyScalar(.5)),r.push({panelSize:c,pxSize:a,pxs:o,fastAxis:l,slowAxis:h,scaledFastAxis:S,scaledSlowAxis:E,origin:u,dMatrix:y,centroid:C,name:M.name})}return r}getRawDetectorPanelData(e){const t=this.exptJSON.experiment[e].detector;return this.exptJSON.detector[t].panels}getBeamData(e){const t=this.exptJSON.experiment[e].beam;return this.exptJSON.beam[t]}getBeamSummary(e){const t=this.getBeamData(e);var n=t.direction;n=[n[0].toFixed(3),n[1].toFixed(3),n[2].toFixed(3)];const r=t.wavelength;var s="direction: ("+n+"), ";return r&&(s+=" wavelength: "+r.toFixed(3)),s}getGoniometer(e){function t(c){const l=["axes","angles","scan_axis"];for(var h=0;h<l.length;h++)if(!(l[h]in c))return!1;return!0}function n(c){const l=c.fixed_rotation,h=c.setting_rotation,u=c.rotation_axis;return{fixedRotation:new we(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8]),settingRotation:new we(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8]),rotationAxis:new P(u[0],u[1],u[2])}}function r(c){function l(w,b){const y=new P(w[0],w[1],w[2]).normalize(),S=Math.cos(b*Math.PI/180),E=Math.sin(b*Math.PI/180),[M,C,x]=y.toArray(),v=S+(1-S)*M*M,R=(1-S)*M*C-E*x,z=(1-S)*M*x+E*C,k=(1-S)*M*C+E*x,G=S+(1-S)*C*C,Y=(1-S)*C*x-E*M,B=(1-S)*M*x-E*C,$=(1-S)*C*x+E*M,F=S+(1-S)*x*x;return new we().set(v,R,z,k,G,Y,B,$,F).transpose()}const h=c.axes,u=c.angles,f=c.scan_axis,d=h[f],g=new P(d[0],d[1],d[2]);var _=new we(1,0,0,0,1,0,0,0,1);const m=new we(1,0,0,0,1,0,0,0,1);for(var p=0;p<f;p++){const w=l(h[p],u[p]);_=_.clone().multiply(w)}for(var p=f+1;p<h.length;p++){const b=l(h[p],u[p]);m.multiply(b)}return{fixedRotation:_,settingRotation:m,rotationAxis:g}}const s=this.exptJSON.goniometer;if(!s||s.length===0){this.goniometer=null;return}const a=this.exptJSON.experiment[e].goniometer,o=s[a];return t(o)?r(o):n(o)}getCrystalData(e){if(this.exptJSON.crystal.length===0||e===void 0)return null;var t=this.exptJSON.experiment[e].crystal;return this.exptJSON.crystal[t]}getAllCrystalData(){return this.exptJSON.crystal}hasCrystal(e){return this.exptJSON===null||this.experiments===void 0?!1:this.experiments[e].crystal!==null&&this.experiments[e].crystal!==void 0}latticeParameters(e,t,n){const r=e.length(),s=t.length(),a=n.length(),o=Math.acos(t.dot(n)/(s*a)),c=Math.acos(e.dot(n)/(r*a)),l=Math.acos(e.dot(t)/(r*s));return[r,s,a,o,c,l]}unitCellVolume(e,t,n,r,s,a){const o=Math.cos(r)**2,c=Math.cos(s)**2,l=Math.cos(a)**2,h=Math.cos(r),u=Math.cos(s),f=Math.cos(a);return e*t*n*Math.sqrt(1-o-c-l+2*h*u*f)}reciprocalLatticeConstants(e,t,n,r,s,a,o){const c=new Array(6);return c[0]=t*n*Math.sin(r)/o,c[1]=n*e*Math.sin(s)/o,c[2]=e*t*Math.sin(a)/o,c[3]=Math.cos(s)*Math.cos(a)-Math.cos(r),c[3]/=Math.sin(s)*Math.sin(a),c[4]=Math.cos(a)*Math.cos(r)-Math.cos(s),c[4]/=Math.sin(a)*Math.sin(r),c[5]=Math.cos(r)*Math.cos(s)-Math.cos(a),c[5]/=Math.sin(r)*Math.sin(s),c}getBMatrix(e,t,n){const[r,s,a,o,c,l]=this.latticeParameters(e,t,n),h=this.unitCellVolume(r,s,a,o,c,l),u=this.reciprocalLatticeConstants(r,s,a,o,c,l,h),f=Math.sqrt(1-u[3]*u[3]),d=new Array(9);return d[0]=1/r,d[1]=-Math.cos(l)/(Math.sin(l)*r),d[2]=-(Math.cos(l)*Math.sin(c)*u[3]+Math.cos(c)*Math.sin(l)),d[2]/=Math.sin(c)*f*Math.sin(l)*r,d[3]=0,d[4]=1/(Math.sin(l)*s),d[5]=u[3]/(f*Math.sin(l)*s),d[6]=0,d[7]=0,d[8]=1/(Math.sin(c)*f*a),new we(d[0],d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8])}getAllCrystals(){const e=this.getAllCrystalData();if(!e){this.crystalSummary=null;return}const t=[];for(let a=0;a<e.length;a++){const o=e[a];var n=o.real_space_a;n=new P(n[0],n[1],n[2]);var r=o.real_space_b;r=new P(r[0],r[1],r[2]);var s=o.real_space_c;s=new P(s[0],s[1],s[2]);const c=this.getBMatrix(n.clone(),r.clone(),s.clone()),l=new we(n.x,n.y,n.z,r.x,r.y,r.z,s.x,s.y,s.z).invert(),h=l.elements;l.transpose();const u=new we;u.multiplyMatrices(c.clone().invert(),l.clone());const f=[new P(h[0],h[3],h[6]),new P(h[1],h[4],h[7]),new P(h[2],h[5],h[8])];t.push({U:u,B:c,UB:l,reciprocalCell:f})}return t}getCrystal(e){const t=this.getCrystalData(e);if(!t){this.crystalSummary=null;return}var n=t.real_space_a;n=new P(n[0],n[1],n[2]);var r=t.real_space_b;r=new P(r[0],r[1],r[2]);var s=t.real_space_c;s=new P(s[0],s[1],s[2]);const a=this.getBMatrix(n.clone(),r.clone(),s.clone()),o=new we(n.x,n.y,n.z,r.x,r.y,r.z,s.x,s.y,s.z).invert(),c=o.elements;o.transpose();const l=new we;l.multiplyMatrices(a.clone().invert(),o.clone());const h=[new P(c[0],c[3],c[6]),new P(c[1],c[4],c[7]),new P(c[2],c[5],c[8])];return{U:l,B:a,UB:o,reciprocalCell:h,exptID:e}}getCrystalRLV(e){return this.experiments[e].crystal.reciprocalCell}getAllCrystalRLVs(){if(!this.crystals)return null;const e=[];for(let t=0;t<this.crystals.length;t++)e.push([this.crystals[t].reciprocalCell[0].clone(),this.crystals[t].reciprocalCell[1].clone(),this.crystals[t].reciprocalCell[2].clone()]);return e}getAllCrystalRCVs(){if(!this.crystals)return null;const e=[];for(let t=0;t<this.crystals.length;t++){const n=this.crystals[t].B.clone().elements;e.push([new P(n[0],n[3],n[6]),new P(n[1],n[4],n[7]),new P(n[2],n[5],n[8])])}return e}getCrystalU(e){return this.crystals[e].U.clone()}getCrystalSummary(e){if(this.experiments!==void 0&&this.experiments[e]!==void 0)return this.experiments[e].crystalSummary!==void 0?this.experiments[e].crystalSummary:null;const t=this.getCrystalData(e);if(!t)return null;const n=t.real_space_a,r=new P(n[0],n[1],n[2]),s=t.real_space_b,a=new P(s[0],s[1],s[2]),o=t.real_space_c,c=new P(o[0],o[1],o[2]),l=r.length().toFixed(3),h=a.length().toFixed(3),u=c.length().toFixed(3),f=(a.angleTo(c)*(180/Math.PI)).toFixed(3),d=(r.angleTo(c)*(180/Math.PI)).toFixed(3),g=(r.angleTo(a)*(180/Math.PI)).toFixed(3);var _="a: "+l+" b: "+h+" c: "+u;return _+=" alpha: "+f+" beta: "+d+" gamma: "+g,_+=" ("+t.space_group_hall_symbol+")",_}getDetectorOrientationData(e){const t=this.exptJSON.experiment[e].detector;return this.exptJSON.detector[t].hierarchy}getDetectorPanelDataByIdx(e,t){return this.experiments[e].detectorPanelData[t]}getDetectorPanelName(e,t){return this.getDetectorPanelDataByIdx(e,t).name}getDetectorPanelCorners(e,t){const n=this.getDetectorPanelDataByIdx(e,t);var r=n.origin.clone(),s=n.origin.clone().add(n.scaledFastAxis),a=n.origin.clone().add(n.scaledFastAxis).add(n.scaledSlowAxis),o=n.origin.clone().add(n.scaledSlowAxis);return[r,s,a,o]}getDetectorPanelNormal(e,t){const n=this.getDetectorPanelDataByIdx(e,t);return n.scaledFastAxis.clone().cross(n.scaledSlowAxis.clone()).normalize()}getDetectorPanelIdxByName(e,t){const n=this.experiments[e].detectorPanelData;for(let r=0;r<n.length;r++)if(n[r].name===t)return r;return null}getDetectorPanelDataByName(e,t){const n=this.experiments[e].detectorPanelData;for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}getDetectorPanelCentroidByName(e,t){const n=this.getDetectorPanelDataByName(e,t);return n!==null?n.centroid:null}getDetectorPanelSize(e,t){return this.experiments[e].detectorPanelData[t].pxs}getBeamDirection(e){const t=this.getBeamData(e);return new P(t.direction[0],t.direction[1],t.direction[2])}getNumDetectorPanels(e){return this.experiments[e].detectorPanelData.length}getScanData(e){if(!("scan"in this.exptJSON))return null;var t=this.exptJSON.experiment[e].scan;return this.exptJSON.scan[t]}getScan(e){const t=this.getScanData(e);if(!t||!("oscillation"in t.properties))return null;const n=new Ee(t.properties.oscillation[0]*Math.PI/180,t.properties.oscillation[1]*Math.PI/180),r=new Ee(t.image_range[0]-1,t.image_range[1]-1);return{oscillation:n,imageRange:r}}getAngleFromFrame(e,t){if(e===null)return null;const n=e.oscillation,r=e.imageRange;return n.x+(t-r.x)*n.y}addAnglesToReflections(e){for(var t=0;t<e.length;t++){var n=this.experiments[e[t].exptID].scan;if("xyzObs"in e[t]){var r;n==null?r=0:r=this.getAngleFromFrame(n,e[t].xyzObs[2]),e[t].angleObs=r}if("xyzCal"in e[t]){var s;n===null?s=0:s=this.getAngleFromFrame(n,e[t].xyzCal[2]),e[t].angleCal=s}}return e}getExptIDs(){let e=[];return this.exptJSON.experiment.forEach((t,n)=>{e.push(n)}),e}getImagesetIDs(){return Object.keys(this.experiments)}getExptLabels(){var e=window.navigator.oscpu?window.navigator.oscpu.indexOf("Windows")>-1:window.navigator.platform.indexOf("Win")>-1,t=[];for(let r in this.experiments){var n=this.experiments[r].imageFilename;e?t.push(n.split("\\").pop()):t.push(n.split("/").pop())}return t}getCrystalIDsMap(){const e={"-1":"-1"};return this.exptJSON.experiment.forEach((t,n)=>{"crystal"in t?e[n.toString()]=t.crystal.toString():e[n.toString()]="-1"}),e}}class xd{constructor(){_i(this,"parseReflectionTableFromMsgpackFile",e=>{const t=new FileReader;return new Promise((n,r)=>{t.onerror=()=>{t.abort(),r(new DOMException("Problem parsing input file."))},t.onloadend=()=>{n(t.result);const s=Ys.deserialize(new Uint8Array(t.result));this.refl=s[2].data},t.readAsArrayBuffer(e),this.filename=e.name})});_i(this,"parseReflectionTableFromMsgpack",e=>{const t=Ys.deserialize(new Uint8Array(e));this.refl=t[2].data,this.rawReflData=e});_i(this,"parseReflectionTableFromJSONMsgpack",e=>{const t=Uint8Array.from(atob(e),r=>r.charCodeAt(0)),n=Ys.decode(t);this.refl=n[2].data,this.rawReflData=e});this.refl=null,this.indexedMap={},this.unindexedMap={},this.filename=null,this.rawReflData=null}hasReflTable(){return this.refl!=null}clearReflectionTable(){this.refl=null,this.rawReflData=null,this.indexedMap={},this.unindexedMap={},this.filename=null}containsColumn(e){return e in this.refl}getColumnBuffer(e){return this.refl[e][1][1]}getUint32Array(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new DataView(t.buffer),r=new Uint32Array(t.byteLength/8);let s=0;for(let a=0;a<t.byteLength;a+=8)r[s]=n.getUint32(t.byteOffset+a,!0),s++;return r}getInt32Array(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new DataView(t.buffer),r=new Int32Array(t.byteLength/4);let s=0;for(let a=0;a<t.byteLength;a+=4)r[s]=n.getInt32(t.byteOffset+a,!0),s++;return r}getDoubleArray(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new DataView(t.buffer),r=new Float64Array(t.length/8);let s=0;for(let a=0;a<t.byteLength;a+=8)r[s]=n.getFloat64(t.byteOffset+a,!0),s++;return r}getVec3DoubleArray(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new DataView(t.buffer),r=new Array(t.length/(8*3));let s=0;for(let a=0;a<t.byteLength;a+=24){const o=new Float64Array(3);o[0]=n.getFloat64(t.byteOffset+a,!0),o[1]=n.getFloat64(t.byteOffset+a+8,!0),o[2]=n.getFloat64(t.byteOffset+a+16,!0),r[s]=o,s++}return r}getVec6Int32Array(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new Array(t.length/(6*4)),r=new DataView(t.buffer);let s=0;for(let a=0;a<t.length;a+=24){const o=new Int32Array(6);o[0]=r.getInt32(t.byteOffset+a,!0),o[1]=r.getInt32(t.byteOffset+a+4,!0),o[2]=r.getInt32(t.byteOffset+a+8,!0),o[3]=r.getInt32(t.byteOffset+a+12,!0),o[4]=r.getInt32(t.byteOffset+a+16,!0),o[5]=r.getInt32(t.byteOffset+a+20,!0),n[s]=o,s++}return n}getVec3Int32Array(e){if(!this.containsColumn(e))return null;const t=this.getColumnBuffer(e),n=new Array(t.length/(3*4)),r=new DataView(t.buffer);let s=0;for(let a=0;a<t.length;a+=12){const o=new Int32Array(3);o[0]=r.getInt32(t.byteOffset+a,!0),o[1]=r.getInt32(t.byteOffset+a+4,!0),o[2]=r.getInt32(t.byteOffset+a+8,!0),n[s]=o,s++}return n}getPanelNumbers(){return this.getUint32Array("panel")}getFlags(){return this.getUint32Array("flags")}isSummationIntegrated(e){return(e&256)===256}isPrfIntegrated(e){return(e&512)===512}isIndexed(e){return(e&4)===4}isObserved(e){return(e&2)===2}isPredicted(e){return(e&1)===1}getXYZObs(){return this.getVec3DoubleArray("xyzobs.px.value")}containsXYZObs(){return this.containsColumn("xyzobs.px.value")}getXYZObsMm(){return this.getVec3DoubleArray("xyzobs.mm.value")}containsXYZObsMm(){return this.containsColumn("xyzobs.mm.value")}getCrystalIDs(){return this.getInt32Array("crystal_id")}getWavelengths(){return this.getDoubleArray("wavelength")}containsWavelengths(){return this.containsColumn("wavelength")}getCalculatedWavelengths(){return this.getDoubleArray("wavelength_cal")}containsCalculatedWavelengths(){return this.containsColumn("wavelength_cal")}getXYZCal(){return this.getVec3DoubleArray("xyzcal.px")}containsXYZCal(){return this.containsColumn("xyzcal.px")}getXYZCalMm(){return this.getVec3DoubleArray("xyzcal.mm")}containsXYZCalMm(){return this.containsColumn("xyzcal.mm")}containsSummationIntensities(){return this.containsColumn("intensity.sum.value")}containsProfileIntensities(){return this.containsColumn("intensity.prf.value")}containsBoundingBoxes(){return this.containsColumn("bbox")}getBoundingBoxes(){return this.getVec6Int32Array("bbox")}containsMillerIndices(){return this.containsColumn("miller_index")}getMillerIndices(){return this.getVec3Int32Array("miller_index")}isValidMillerIndex(e){return Math.abs(e[0])+Math.abs(e[1])+Math.abs(e[2])>0}containsExperimentIDs(){return this.containsColumn("id")}getExperimentIDs(){return this.getInt32Array("id")}getImagesetIDs(){return this.getInt32Array("imageset_id")}getMillerIndexById(e){return this.indexedMap[e]}}function NE(i){return"channel"in i&&i.channel=="rlv"}const kE={background:133143,sample:16643811,reflectionUnindexed:[9894267,7715837,12548086,1305289,16756860,16765407,13696766,16777092,16777215,16749576,129478,11468140,16646146,10030923,7918006,16775447,16713609,13959167,6936655,5680727],reflectionCrystalIndexed:[9894267,7715837,12548086,1305289,16756860,16765407,13696766,16777092,16777215,16749576,129478,11468140,16646146,10030923,7918006,16775447,16713609,13959167,6936655,5680727],reflectionIndexed:15158332,reflectionCrystalUnindexed:6977160,reciprocalMesh:16777215,reflectionCalculated:16755370,reflectionIntegrated:16761436,highlight:16777215,resolutionCircle:6977160,beam:16777215,reciprocalCell:16777215,rlVLabels:"white"};window.onload=function(){window.viewer=new Kt(new ua,new xd,new xd,!1,kE);const i="ws://127.0.0.1:50010/";window.viewer.serverWS=new WebSocket(i),window.viewer.serverWS.binaryType="arraybuffer",window.viewer.serverWS.onopen=()=>{console.log("Reciprocal lattice viewer opened Connection to server"),window.viewer.serverWS.send(JSON.stringify({channel:"server",command:"record_connection",id:"rlv"}))},window.viewer.serverWS.onclose=()=>{console.log("Reciprocal lattice viewer closed Connection to server")},window.viewer.serverWS.onmessage=e=>{let t=e.data;if(console.log("msg received",t),t instanceof ArrayBuffer){const s=new Uint8Array(t);try{const a=Ys.decode(s);let o=a.command;switch(console.log("Command: ",o),o){case"update_mesh":window.viewer.addContourMeshFromData(a.mesh_data,a.mesh_dimensions,a.rlp_min,a.rlp_max,a.rlp_step);break}return}catch(a){console.error("Invalid Msgpack",a);return}}const n=JSON.parse(e.data);if(!NE(n))return;const r=n.command;switch(console.log("Command: ",r),r){case"new_experiment":window.viewer.addExperimentFromJSONString(n,!0);break;case"update_experiment":window.viewer.addExperimentFromJSONString(n,!1);break;case"clear_experiment":window.viewer.clearExperiment();break;case"update_reflection_table":window.viewer.addReflectionsFromJSONMsgpack(n.refl_msgpack);break;case"update_calculated_integrated_reflection_table":window.viewer.addCalculatedIntegratedReflectionsFromJSONMsgpack(n.refl_msgpack);break;case"show_rlv_orientation_view":window.viewer.switchToOrientationView();break;case"show_rlv_crystal_view":window.viewer.switchToCrystalView();break;case"show_rlv_resolution_view":window.viewer.switchToResolutionView();break;case"toggle_sidebar":window.viewer.toggleSidebar();break;case"update_mesh":window.viewer.addContourMeshFromData(n.mesh_data,n.mesh_dimensions,n.rlp_min,n.rlp_max,n.rlp_step);break;case"show_mesh":window.viewer.updateMeshVisibility(!0);break;case"hide_mesh":window.viewer.updateMeshVisibility(!1);break;case"cancel_mesh":window.viewer.cancelMesh();break;case"highlight_reflection":window.viewer.highlightReflection(n.rlp);break;default:console.warn("Unrecognised command ",r)}},zb()};
