(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Md={exports:{}},_l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy;function PS(){if(zy)return _l;zy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return _l.Fragment=t,_l.jsx=n,_l.jsxs=n,_l}var By;function xS(){return By||(By=1,Md.exports=PS()),Md.exports}var J=xS(),Vd={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy;function LS(){if(jy)return bt;jy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),b=Symbol.iterator;function O(C){return C===null||typeof C!="object"?null:(C=b&&C[b]||C["@@iterator"],typeof C=="function"?C:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,et={};function W(C,$,it){this.props=C,this.context=$,this.refs=et,this.updater=it||q}W.prototype.isReactComponent={},W.prototype.setState=function(C,$){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,$,"setState")},W.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function Et(){}Et.prototype=W.prototype;function dt(C,$,it){this.props=C,this.context=$,this.refs=et,this.updater=it||q}var ot=dt.prototype=new Et;ot.constructor=dt,K(ot,W.prototype),ot.isPureReactComponent=!0;var _t=Array.isArray,mt={H:null,A:null,T:null,S:null,V:null},wt=Object.prototype.hasOwnProperty;function M(C,$,it,Z,ht,Ct){return it=Ct.ref,{$$typeof:r,type:C,key:$,ref:it!==void 0?it:null,props:Ct}}function S(C,$){return M(C.type,$,void 0,void 0,void 0,C.props)}function R(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function N(C){var $={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(it){return $[it]})}var V=/\/+/g;function k(C,$){return typeof C=="object"&&C!==null&&C.key!=null?N(""+C.key):$.toString(36)}function I(){}function Pe(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(I,I):(C.status="pending",C.then(function($){C.status==="pending"&&(C.status="fulfilled",C.value=$)},function($){C.status==="pending"&&(C.status="rejected",C.reason=$)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function ae(C,$,it,Z,ht){var Ct=typeof C;(Ct==="undefined"||Ct==="boolean")&&(C=null);var Tt=!1;if(C===null)Tt=!0;else switch(Ct){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(C.$$typeof){case r:case t:Tt=!0;break;case T:return Tt=C._init,ae(Tt(C._payload),$,it,Z,ht)}}if(Tt)return ht=ht(C),Tt=Z===""?"."+k(C,0):Z,_t(ht)?(it="",Tt!=null&&(it=Tt.replace(V,"$&/")+"/"),ae(ht,$,it,"",function(Gn){return Gn})):ht!=null&&(R(ht)&&(ht=S(ht,it+(ht.key==null||C&&C.key===ht.key?"":(""+ht.key).replace(V,"$&/")+"/")+Tt)),$.push(ht)),1;Tt=0;var De=Z===""?".":Z+":";if(_t(C))for(var Wt=0;Wt<C.length;Wt++)Z=C[Wt],Ct=De+k(Z,Wt),Tt+=ae(Z,$,it,Ct,ht);else if(Wt=O(C),typeof Wt=="function")for(C=Wt.call(C),Wt=0;!(Z=C.next()).done;)Z=Z.value,Ct=De+k(Z,Wt++),Tt+=ae(Z,$,it,Ct,ht);else if(Ct==="object"){if(typeof C.then=="function")return ae(Pe(C),$,it,Z,ht);throw $=String(C),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function H(C,$,it){if(C==null)return C;var Z=[],ht=0;return ae(C,Z,"","",function(Ct){return $.call(it,Ct,ht++)}),Z}function nt(C){if(C._status===-1){var $=C._result;$=$(),$.then(function(it){(C._status===0||C._status===-1)&&(C._status=1,C._result=it)},function(it){(C._status===0||C._status===-1)&&(C._status=2,C._result=it)}),C._status===-1&&(C._status=0,C._result=$)}if(C._status===1)return C._result.default;throw C._result}var ut=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function zt(){}return bt.Children={map:H,forEach:function(C,$,it){H(C,function(){$.apply(this,arguments)},it)},count:function(C){var $=0;return H(C,function(){$++}),$},toArray:function(C){return H(C,function($){return $})||[]},only:function(C){if(!R(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},bt.Component=W,bt.Fragment=n,bt.Profiler=o,bt.PureComponent=dt,bt.StrictMode=s,bt.Suspense=g,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mt,bt.__COMPILER_RUNTIME={__proto__:null,c:function(C){return mt.H.useMemoCache(C)}},bt.cache=function(C){return function(){return C.apply(null,arguments)}},bt.cloneElement=function(C,$,it){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var Z=K({},C.props),ht=C.key,Ct=void 0;if($!=null)for(Tt in $.ref!==void 0&&(Ct=void 0),$.key!==void 0&&(ht=""+$.key),$)!wt.call($,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&$.ref===void 0||(Z[Tt]=$[Tt]);var Tt=arguments.length-2;if(Tt===1)Z.children=it;else if(1<Tt){for(var De=Array(Tt),Wt=0;Wt<Tt;Wt++)De[Wt]=arguments[Wt+2];Z.children=De}return M(C.type,ht,void 0,void 0,Ct,Z)},bt.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:u,_context:C},C},bt.createElement=function(C,$,it){var Z,ht={},Ct=null;if($!=null)for(Z in $.key!==void 0&&(Ct=""+$.key),$)wt.call($,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ht[Z]=$[Z]);var Tt=arguments.length-2;if(Tt===1)ht.children=it;else if(1<Tt){for(var De=Array(Tt),Wt=0;Wt<Tt;Wt++)De[Wt]=arguments[Wt+2];ht.children=De}if(C&&C.defaultProps)for(Z in Tt=C.defaultProps,Tt)ht[Z]===void 0&&(ht[Z]=Tt[Z]);return M(C,Ct,void 0,void 0,null,ht)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(C){return{$$typeof:m,render:C}},bt.isValidElement=R,bt.lazy=function(C){return{$$typeof:T,_payload:{_status:-1,_result:C},_init:nt}},bt.memo=function(C,$){return{$$typeof:_,type:C,compare:$===void 0?null:$}},bt.startTransition=function(C){var $=mt.T,it={};mt.T=it;try{var Z=C(),ht=mt.S;ht!==null&&ht(it,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(zt,ut)}catch(Ct){ut(Ct)}finally{mt.T=$}},bt.unstable_useCacheRefresh=function(){return mt.H.useCacheRefresh()},bt.use=function(C){return mt.H.use(C)},bt.useActionState=function(C,$,it){return mt.H.useActionState(C,$,it)},bt.useCallback=function(C,$){return mt.H.useCallback(C,$)},bt.useContext=function(C){return mt.H.useContext(C)},bt.useDebugValue=function(){},bt.useDeferredValue=function(C,$){return mt.H.useDeferredValue(C,$)},bt.useEffect=function(C,$,it){var Z=mt.H;if(typeof it=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(C,$)},bt.useId=function(){return mt.H.useId()},bt.useImperativeHandle=function(C,$,it){return mt.H.useImperativeHandle(C,$,it)},bt.useInsertionEffect=function(C,$){return mt.H.useInsertionEffect(C,$)},bt.useLayoutEffect=function(C,$){return mt.H.useLayoutEffect(C,$)},bt.useMemo=function(C,$){return mt.H.useMemo(C,$)},bt.useOptimistic=function(C,$){return mt.H.useOptimistic(C,$)},bt.useReducer=function(C,$,it){return mt.H.useReducer(C,$,it)},bt.useRef=function(C){return mt.H.useRef(C)},bt.useState=function(C){return mt.H.useState(C)},bt.useSyncExternalStore=function(C,$,it){return mt.H.useSyncExternalStore(C,$,it)},bt.useTransition=function(){return mt.H.useTransition()},bt.version="19.1.0",bt}var qy;function Im(){return qy||(qy=1,Vd.exports=LS()),Vd.exports}var te=Im(),Ud={exports:{}},yl={},kd={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy;function zS(){return Hy||(Hy=1,function(r){function t(H,nt){var ut=H.length;H.push(nt);t:for(;0<ut;){var zt=ut-1>>>1,C=H[zt];if(0<o(C,nt))H[zt]=nt,H[ut]=C,ut=zt;else break t}}function n(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var nt=H[0],ut=H.pop();if(ut!==nt){H[0]=ut;t:for(var zt=0,C=H.length,$=C>>>1;zt<$;){var it=2*(zt+1)-1,Z=H[it],ht=it+1,Ct=H[ht];if(0>o(Z,ut))ht<C&&0>o(Ct,Z)?(H[zt]=Ct,H[ht]=ut,zt=ht):(H[zt]=Z,H[it]=ut,zt=it);else if(ht<C&&0>o(Ct,ut))H[zt]=Ct,H[ht]=ut,zt=ht;else break t}}return nt}function o(H,nt){var ut=H.sortIndex-nt.sortIndex;return ut!==0?ut:H.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var g=[],_=[],T=1,b=null,O=3,q=!1,K=!1,et=!1,W=!1,Et=typeof setTimeout=="function"?setTimeout:null,dt=typeof clearTimeout=="function"?clearTimeout:null,ot=typeof setImmediate<"u"?setImmediate:null;function _t(H){for(var nt=n(_);nt!==null;){if(nt.callback===null)s(_);else if(nt.startTime<=H)s(_),nt.sortIndex=nt.expirationTime,t(g,nt);else break;nt=n(_)}}function mt(H){if(et=!1,_t(H),!K)if(n(g)!==null)K=!0,wt||(wt=!0,k());else{var nt=n(_);nt!==null&&ae(mt,nt.startTime-H)}}var wt=!1,M=-1,S=5,R=-1;function N(){return W?!0:!(r.unstable_now()-R<S)}function V(){if(W=!1,wt){var H=r.unstable_now();R=H;var nt=!0;try{t:{K=!1,et&&(et=!1,dt(M),M=-1),q=!0;var ut=O;try{e:{for(_t(H),b=n(g);b!==null&&!(b.expirationTime>H&&N());){var zt=b.callback;if(typeof zt=="function"){b.callback=null,O=b.priorityLevel;var C=zt(b.expirationTime<=H);if(H=r.unstable_now(),typeof C=="function"){b.callback=C,_t(H),nt=!0;break e}b===n(g)&&s(g),_t(H)}else s(g);b=n(g)}if(b!==null)nt=!0;else{var $=n(_);$!==null&&ae(mt,$.startTime-H),nt=!1}}break t}finally{b=null,O=ut,q=!1}nt=void 0}}finally{nt?k():wt=!1}}}var k;if(typeof ot=="function")k=function(){ot(V)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Pe=I.port2;I.port1.onmessage=V,k=function(){Pe.postMessage(null)}}else k=function(){Et(V,0)};function ae(H,nt){M=Et(function(){H(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return O},r.unstable_next=function(H){switch(O){case 1:case 2:case 3:var nt=3;break;default:nt=O}var ut=O;O=nt;try{return H()}finally{O=ut}},r.unstable_requestPaint=function(){W=!0},r.unstable_runWithPriority=function(H,nt){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ut=O;O=H;try{return nt()}finally{O=ut}},r.unstable_scheduleCallback=function(H,nt,ut){var zt=r.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?zt+ut:zt):ut=zt,H){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=ut+C,H={id:T++,callback:nt,priorityLevel:H,startTime:ut,expirationTime:C,sortIndex:-1},ut>zt?(H.sortIndex=ut,t(_,H),n(g)===null&&H===n(_)&&(et?(dt(M),M=-1):et=!0,ae(mt,ut-zt))):(H.sortIndex=C,t(g,H),K||q||(K=!0,wt||(wt=!0,k()))),H},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(H){var nt=O;return function(){var ut=O;O=nt;try{return H.apply(this,arguments)}finally{O=ut}}}}(Pd)),Pd}var Fy;function BS(){return Fy||(Fy=1,kd.exports=zS()),kd.exports}var xd={exports:{}},Qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy;function jS(){if(Gy)return Qe;Gy=1;var r=Im();function t(g){var _="https://react.dev/errors/"+g;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)_+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+g+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,_,T){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:g,containerInfo:_,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,_){if(g==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Qe.createPortal=function(g,_){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return u(g,_,null,T)},Qe.flushSync=function(g){var _=f.T,T=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=_,s.p=T,s.d.f()}},Qe.preconnect=function(g,_){typeof g=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(g,_))},Qe.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Qe.preinit=function(g,_){if(typeof g=="string"&&_&&typeof _.as=="string"){var T=_.as,b=m(T,_.crossOrigin),O=typeof _.integrity=="string"?_.integrity:void 0,q=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;T==="style"?s.d.S(g,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:b,integrity:O,fetchPriority:q}):T==="script"&&s.d.X(g,{crossOrigin:b,integrity:O,fetchPriority:q,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Qe.preinitModule=function(g,_){if(typeof g=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var T=m(_.as,_.crossOrigin);s.d.M(g,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&s.d.M(g)},Qe.preload=function(g,_){if(typeof g=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var T=_.as,b=m(T,_.crossOrigin);s.d.L(g,T,{crossOrigin:b,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Qe.preloadModule=function(g,_){if(typeof g=="string")if(_){var T=m(_.as,_.crossOrigin);s.d.m(g,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else s.d.m(g)},Qe.requestFormReset=function(g){s.d.r(g)},Qe.unstable_batchedUpdates=function(g,_){return g(_)},Qe.useFormState=function(g,_,T){return f.H.useFormState(g,_,T)},Qe.useFormStatus=function(){return f.H.useHostTransitionStatus()},Qe.version="19.1.0",Qe}var Ky;function qS(){if(Ky)return xd.exports;Ky=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),xd.exports=jS(),xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy;function HS(){if(Qy)return yl;Qy=1;var r=BS(),t=Im(),n=qS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function g(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),e;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,l=d;break}if(E===l){v=!0,l=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,l=h;break}if(E===l){v=!0,l=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var T=Object.assign,b=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),Et=Symbol.for("react.provider"),dt=Symbol.for("react.consumer"),ot=Symbol.for("react.context"),_t=Symbol.for("react.forward_ref"),mt=Symbol.for("react.suspense"),wt=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function Pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case W:return"Profiler";case et:return"StrictMode";case mt:return"Suspense";case wt:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case ot:return(e.displayName||"Context")+".Provider";case dt:return(e._context.displayName||"Context")+".Consumer";case _t:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return i=e.displayName||null,i!==null?i:Pe(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return Pe(e(i))}catch{}}return null}var ae=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},zt=[],C=-1;function $(e){return{current:e}}function it(e){0>C||(e.current=zt[C],zt[C]=null,C--)}function Z(e,i){C++,zt[C]=e.current,e.current=i}var ht=$(null),Ct=$(null),Tt=$(null),De=$(null);function Wt(e,i){switch(Z(Tt,i),Z(Ct,e),Z(ht,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?dy(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=dy(i),e=my(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(ht),Z(ht,e)}function Gn(){it(ht),it(Ct),it(Tt)}function $i(e){e.memoizedState!==null&&Z(De,e);var i=ht.current,a=my(i,e.type);i!==a&&(Z(Ct,e),Z(ht,a))}function _i(e){Ct.current===e&&(it(ht),it(Ct)),De.current===e&&(it(De),fl._currentValue=ut)}var Yr=Object.prototype.hasOwnProperty,Xr=r.unstable_scheduleCallback,$r=r.unstable_cancelCallback,lo=r.unstable_shouldYield,tu=r.unstable_requestPaint,An=r.unstable_now,Nh=r.unstable_getCurrentPriorityLevel,uo=r.unstable_ImmediatePriority,Ys=r.unstable_UserBlockingPriority,Wr=r.unstable_NormalPriority,Mh=r.unstable_LowPriority,Xs=r.unstable_IdlePriority,co=r.log,eu=r.unstable_setDisableYieldValue,oe=null,Ht=null;function un(e){if(typeof co=="function"&&eu(e),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(oe,e)}catch{}}var Ge=Math.clz32?Math.clz32:Zr,nu=Math.log,Vh=Math.LN2;function Zr(e){return e>>>=0,e===0?32:31-(nu(e)/Vh|0)|0}var Jr=256,ts=4194304;function kn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $s(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=kn(l):(v&=E,v!==0?h=kn(v):a||(a=E&~e,a!==0&&(h=kn(a))))):(E=l&~d,E!==0?h=kn(E):v!==0?h=kn(v):a||(a=l&~e,a!==0&&(h=kn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function es(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ho(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fo(){var e=Jr;return Jr<<=1,(Jr&4194048)===0&&(Jr=256),e}function mo(){var e=ts;return ts<<=1,(ts&62914560)===0&&(ts=4194304),e}function yi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function vi(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function po(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,w=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var F=31-Ge(a),Q=1<<F;E[F]=0,w[F]=-1;var z=L[F];if(z!==null)for(L[F]=null,F=0;F<z.length;F++){var B=z[F];B!==null&&(B.lane&=-536870913)}a&=~Q}l!==0&&Kn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Kn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ge(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function go(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Ge(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function Wi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ws(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zi(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:Vy(e.type))}function iu(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var ee=Math.random().toString(36).slice(2),Se="__reactFiber$"+ee,ge="__reactProps$"+ee,Sn="__reactContainer$"+ee,_o="__reactEvents$"+ee,Uh="__reactListeners$"+ee,Ji="__reactHandles$"+ee,ru="__reactResources$"+ee,ns="__reactMarker$"+ee;function tr(e){delete e[Se],delete e[ge],delete e[_o],delete e[Uh],delete e[Ji]}function Ei(e){var i=e[Se];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Sn]||a[Se]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=yy(e);e!==null;){if(a=e[Se])return a;e=yy(e)}return i}e=a,a=e.parentNode}return null}function Qn(e){if(e=e[Se]||e[Sn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Yn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Ze(e){var i=e[ru];return i||(i=e[ru]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function fe(e){e[ns]=!0}var yo=new Set,Zs={};function Pn(e,i){Ti(e,i),Ti(e+"Capture",i)}function Ti(e,i){for(Zs[e]=i,e=0;e<i.length;e++)yo.add(i[e])}var su=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),au={},is={};function ou(e){return Yr.call(is,e)?!0:Yr.call(au,e)?!1:su.test(e)?is[e]=!0:(au[e]=!0,!1)}function er(e,i,a){if(ou(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Xn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function xe(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var rs,lu;function Ai(e){if(rs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);rs=i&&i[1]||"",lu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rs+e+lu}var Js=!1;function ta(e,i){if(!e||Js)return"";Js=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(B){var z=B}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(B){z=B}e.call(Q.prototype)}}else{try{throw Error()}catch(B){z=B}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var w=v.split(`
`),L=E.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===L.length)for(l=w.length-1,h=L.length-1;1<=l&&0<=h&&w[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==L[h]){var F=`
`+w[l].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=l&&0<=h);break}}}finally{Js=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ai(a):""}function vo(e){switch(e.tag){case 26:case 27:case 5:return Ai(e.type);case 16:return Ai("Lazy");case 13:return Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 15:return ta(e.type,!1);case 11:return ta(e.type.render,!1);case 1:return ta(e.type,!0);case 31:return Ai("Activity");default:return""}}function ea(e){try{var i="";do i+=vo(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Je(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Eo(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function kh(e){var i=Eo(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function na(e){e._valueTracker||(e._valueTracker=kh(e))}function To(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=Eo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function ss(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ph=/[\n"\\]/g;function _e(e){return e.replace(Ph,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function cn(e,i,a,l,h,d,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Je(i)):e.value!==""+Je(i)&&(e.value=""+Je(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?nr(e,v,Je(i)):a!=null?nr(e,v,Je(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Je(E):e.removeAttribute("name")}function as(e,i,a,l,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Je(a):"",i=i!=null?""+Je(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function nr(e,i,a){i==="number"&&ss(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Si(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Je(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Kt(e,i,a){if(i!=null&&(i=""+Je(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Je(a):""}function os(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(ae(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Je(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function bn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var ls=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uu(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||ls.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Ao(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&uu(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&uu(e,d,i[d])}function So(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ia(e){return Lh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var bi=null;function wn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wi=null,Ri=null;function bo(e){var i=Qn(e);if(i&&(e=i.stateNode)){var a=e[ge]||null;t:switch(e=i.stateNode,i.type){case"input":if(cn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_e(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[ge]||null;if(!h)throw Error(s(90));cn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&To(l)}break t;case"textarea":Kt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Si(e,!!a.multiple,i,!1)}}}var $n=!1;function cu(e,i,a){if($n)return e(i,a);$n=!0;try{var l=e(i);return l}finally{if($n=!1,(wi!==null||Ri!==null)&&(ic(),wi&&(i=wi,e=Ri,Ri=wi=null,bo(i),e)))for(i=0;i<e.length;i++)bo(e[i])}}function us(e,i){var a=e.stateNode;if(a===null)return null;var l=a[ge]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rn=!1;if(xn)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){Rn=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{Rn=!1}var Wn=null,ir=null,Ii=null;function wo(){if(Ii)return Ii;var e,i=ir,a=i.length,l,h="value"in Wn?Wn.value:Wn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Ii=h.slice(e,1<l?1-l:void 0)}function Zn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function Ro(){return!1}function Oe(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Jn:Ro,this.isPropagationStopped=Ro,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),i}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ra=Oe(jt),hs=T({},jt,{view:0,detail:0}),hu=Oe(hs),sa,aa,ti,fs=T({},hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(sa=e.screenX-ti.screenX,aa=e.screenY-ti.screenY):aa=sa=0,ti=e),sa)},movementY:function(e){return"movementY"in e?e.movementY:aa}}),In=Oe(fs),fu=T({},fs,{dataTransfer:0}),zh=Oe(fu),ds=T({},hs,{relatedTarget:0}),oa=Oe(ds),Io=T({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),la=Oe(Io),du=T({},jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ua=Oe(du),Bh=T({},jt,{data:0}),Co=Oe(Bh),ms={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Do(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=pu[e])?!!i[e]:!1}function ps(){return Do}var gu=T({},hs,{key:function(e){if(e.key){var i=ms[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(e){return e.type==="keypress"?Zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ca=Oe(gu),_u=T({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oo=Oe(_u),Ci=T({},hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),yu=Oe(Ci),vu=T({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eu=Oe(vu),Tu=T({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ha=Oe(Tu),tn=T({},jt,{newState:0,oldState:0}),Au=Oe(tn),Su=[9,13,27,32],ei=xn&&"CompositionEvent"in window,c=null;xn&&"documentMode"in document&&(c=document.documentMode);var p=xn&&"TextEvent"in window&&!c,y=xn&&(!ei||c&&8<c&&11>=c),A=" ",P=!1;function j(e,i){switch(e){case"keyup":return Su.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function be(e,i){switch(e){case"compositionend":return tt(i);case"keypress":return i.which!==32?null:(P=!0,A);case"textInput":return e=i.data,e===A&&P?null:e;default:return null}}function kt(e,i){if(Ut)return e==="compositionend"||!ei&&j(e,i)?(e=wo(),Ii=ir=Wn=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return y&&i.locale!=="ko"?null:i.data;default:return null}}var Ne={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function we(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ne[e.type]:i==="textarea"}function Di(e,i,a,l){wi?Ri?Ri.push(l):Ri=[l]:wi=l,i=uc(i,"onChange"),0<i.length&&(a=new ra("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var Le=null,ni=null;function No(e){ly(e,0)}function bu(e){var i=Yn(e);if(To(i))return e}function Dp(e,i){if(e==="change")return i}var Op=!1;if(xn){var jh;if(xn){var qh="oninput"in document;if(!qh){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),qh=typeof Np.oninput=="function"}jh=qh}else jh=!1;Op=jh&&(!document.documentMode||9<document.documentMode)}function Mp(){Le&&(Le.detachEvent("onpropertychange",Vp),ni=Le=null)}function Vp(e){if(e.propertyName==="value"&&bu(ni)){var i=[];Di(i,ni,e,wn(e)),cu(No,i)}}function fA(e,i,a){e==="focusin"?(Mp(),Le=i,ni=a,Le.attachEvent("onpropertychange",Vp)):e==="focusout"&&Mp()}function dA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bu(ni)}function mA(e,i){if(e==="click")return bu(i)}function pA(e,i){if(e==="input"||e==="change")return bu(i)}function gA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var hn=typeof Object.is=="function"?Object.is:gA;function Mo(e,i){if(hn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Yr.call(i,h)||!hn(e[h],i[h]))return!1}return!0}function Up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kp(e,i){var a=Up(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Up(a)}}function Pp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Pp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ss(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ss(e.document)}return i}function Hh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var _A=xn&&"documentMode"in document&&11>=document.documentMode,fa=null,Fh=null,Vo=null,Gh=!1;function Lp(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gh||fa==null||fa!==ss(l)||(l=fa,"selectionStart"in l&&Hh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Vo&&Mo(Vo,l)||(Vo=l,l=uc(Fh,"onSelect"),0<l.length&&(i=new ra("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=fa)))}function gs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var da={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},Kh={},zp={};xn&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete da.animationend.animation,delete da.animationiteration.animation,delete da.animationstart.animation),"TransitionEvent"in window||delete da.transitionend.transition);function _s(e){if(Kh[e])return Kh[e];if(!da[e])return e;var i=da[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in zp)return Kh[e]=i[a];return e}var Bp=_s("animationend"),jp=_s("animationiteration"),qp=_s("animationstart"),yA=_s("transitionrun"),vA=_s("transitionstart"),EA=_s("transitioncancel"),Hp=_s("transitionend"),Fp=new Map,Qh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qh.push("scrollEnd");function Ln(e,i){Fp.set(e,i),Pn(i,[e])}var Gp=new WeakMap;function Cn(e,i){if(typeof e=="object"&&e!==null){var a=Gp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:ea(i)},Gp.set(e,i),i)}return{value:e,source:i,stack:ea(i)}}var Dn=[],ma=0,Yh=0;function wu(){for(var e=ma,i=Yh=ma=0;i<e;){var a=Dn[i];Dn[i++]=null;var l=Dn[i];Dn[i++]=null;var h=Dn[i];Dn[i++]=null;var d=Dn[i];if(Dn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Kp(a,h,d)}}function Ru(e,i,a,l){Dn[ma++]=e,Dn[ma++]=i,Dn[ma++]=a,Dn[ma++]=l,Yh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Xh(e,i,a,l){return Ru(e,i,a,l),Iu(e)}function pa(e,i){return Ru(e,null,null,i),Iu(e)}function Kp(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Ge(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Iu(e){if(50<rl)throw rl=0,nd=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ga={};function TA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(e,i,a,l){return new TA(e,i,a,l)}function $h(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,i){var a=e.alternate;return a===null?(a=fn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Qp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Cu(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")$h(e)&&(v=1);else if(typeof e=="string")v=SS(e,a,ht.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=fn(31,a,i,h),e.elementType=R,e.lanes=d,e;case K:return ys(a.children,h,d,i);case et:v=8,h|=24;break;case W:return e=fn(12,a,i,h|2),e.elementType=W,e.lanes=d,e;case mt:return e=fn(13,a,i,h),e.elementType=mt,e.lanes=d,e;case wt:return e=fn(19,a,i,h),e.elementType=wt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Et:case ot:v=10;break t;case dt:v=9;break t;case _t:v=11;break t;case M:v=14;break t;case S:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=fn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function ys(e,i,a,l){return e=fn(7,e,l,i),e.lanes=a,e}function Wh(e,i,a){return e=fn(6,e,null,i),e.lanes=a,e}function Zh(e,i,a){return i=fn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var _a=[],ya=0,Du=null,Ou=0,On=[],Nn=0,vs=null,Ni=1,Mi="";function Es(e,i){_a[ya++]=Ou,_a[ya++]=Du,Du=e,Ou=i}function Yp(e,i,a){On[Nn++]=Ni,On[Nn++]=Mi,On[Nn++]=vs,vs=e;var l=Ni;e=Mi;var h=32-Ge(l)-1;l&=~(1<<h),a+=1;var d=32-Ge(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Ni=1<<32-Ge(i)+h|a<<h|l,Mi=d+e}else Ni=1<<d|a<<h|l,Mi=e}function Jh(e){e.return!==null&&(Es(e,1),Yp(e,1,0))}function tf(e){for(;e===Du;)Du=_a[--ya],_a[ya]=null,Ou=_a[--ya],_a[ya]=null;for(;e===vs;)vs=On[--Nn],On[Nn]=null,Mi=On[--Nn],On[Nn]=null,Ni=On[--Nn],On[Nn]=null}var en=null,le=null,Bt=!1,Ts=null,ii=!1,ef=Error(s(519));function As(e){var i=Error(s(418,""));throw Po(Cn(i,e)),ef}function Xp(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[Se]=e,i[ge]=l,a){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(a=0;a<al.length;a++)Nt(al[a],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":Nt("invalid",i),as(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),na(i);break;case"select":Nt("invalid",i);break;case"textarea":Nt("invalid",i),os(i,l.value,l.defaultValue,l.children),na(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||fy(i.textContent,a)?(l.popover!=null&&(Nt("beforetoggle",i),Nt("toggle",i)),l.onScroll!=null&&Nt("scroll",i),l.onScrollEnd!=null&&Nt("scrollend",i),l.onClick!=null&&(i.onclick=cc),i=!0):i=!1,i||As(e)}function $p(e){for(en=e.return;en;)switch(en.tag){case 5:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:en=en.return}}function Uo(e){if(e!==en)return!1;if(!Bt)return $p(e),Bt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yd(e.type,e.memoizedProps)),a=!a),a&&le&&As(e),$p(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){le=Bn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}le=null}}else i===27?(i=le,vr(e.type)?(e=Ad,Ad=null,le=e):le=i):le=en?Bn(e.stateNode.nextSibling):null;return!0}function ko(){le=en=null,Bt=!1}function Wp(){var e=Ts;return e!==null&&(an===null?an=e:an.push.apply(an,e),Ts=null),e}function Po(e){Ts===null?Ts=[e]:Ts.push(e)}var nf=$(null),Ss=null,Vi=null;function rr(e,i,a){Z(nf,i._currentValue),i._currentValue=a}function Ui(e){e._currentValue=nf.current,it(nf)}function rf(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function sf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var w=0;w<i.length;w++)if(E.context===i[w]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),rf(d.return,a,e),l||(v=null);break t}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),rf(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function xo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;hn(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===De.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(fl):e=[fl])}h=h.return}e!==null&&sf(i,e,a,l),i.flags|=262144}function Nu(e){for(e=e.firstContext;e!==null;){if(!hn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function bs(e){Ss=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return Zp(Ss,e)}function Mu(e,i){return Ss===null&&bs(e),Zp(e,i)}function Zp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(s(308));Vi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Vi=Vi.next=i;return a}var AA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},SA=r.unstable_scheduleCallback,bA=r.unstable_NormalPriority,Re={$$typeof:ot,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function af(){return{controller:new AA,data:new Map,refCount:0}}function Lo(e){e.refCount--,e.refCount===0&&SA(bA,function(){e.controller.abort()})}var zo=null,of=0,va=0,Ea=null;function wA(e,i){if(zo===null){var a=zo=[];of=0,va=ud(),Ea={status:"pending",value:void 0,then:function(l){a.push(l)}}}return of++,i.then(Jp,Jp),i}function Jp(){if(--of===0&&zo!==null){Ea!==null&&(Ea.status="fulfilled");var e=zo;zo=null,va=0,Ea=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function RA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var tg=H.S;H.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&wA(e,i),tg!==null&&tg(e,i)};var ws=$(null);function lf(){var e=ws.current;return e!==null?e:Zt.pooledCache}function Vu(e,i){i===null?Z(ws,ws.current):Z(ws,i.pool)}function eg(){var e=lf();return e===null?null:{parent:Re._currentValue,pool:e}}var Bo=Error(s(460)),ng=Error(s(474)),Uu=Error(s(542)),uf={then:function(){}};function ig(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ku(){}function rg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(ku,ku),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ag(e),e;default:if(typeof i.status=="string")i.then(ku,ku);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ag(e),e}throw jo=i,Bo}}var jo=null;function sg(){if(jo===null)throw Error(s(459));var e=jo;return jo=null,e}function ag(e){if(e===Bo||e===Uu)throw Error(s(483))}var sr=!1;function cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ar(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function or(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ft&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Iu(e),Kp(e,null,a),i}return Ru(e,l,i,a),Iu(e)}function qo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,go(e,a)}}function ff(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var df=!1;function Ho(){if(df){var e=Ea;if(e!==null)throw e}}function Fo(e,i,a,l){df=!1;var h=e.updateQueue;sr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var w=E,L=w.next;w.next=null,v===null?d=L:v.next=L,v=w;var F=e.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==v&&(E===null?F.firstBaseUpdate=L:E.next=L,F.lastBaseUpdate=w))}if(d!==null){var Q=h.baseState;v=0,F=L=w=null,E=d;do{var z=E.lane&-536870913,B=z!==E.lane;if(B?(Pt&z)===z:(l&z)===z){z!==0&&z===va&&(df=!0),F!==null&&(F=F.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var yt=e,ft=E;z=i;var Xt=a;switch(ft.tag){case 1:if(yt=ft.payload,typeof yt=="function"){Q=yt.call(Xt,Q,z);break t}Q=yt;break t;case 3:yt.flags=yt.flags&-65537|128;case 0:if(yt=ft.payload,z=typeof yt=="function"?yt.call(Xt,Q,z):yt,z==null)break t;Q=T({},Q,z);break t;case 2:sr=!0}}z=E.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(L=F=B,w=Q):F=F.next=B,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;B=E,E=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);F===null&&(w=Q),h.baseState=w,h.firstBaseUpdate=L,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),pr|=v,e.lanes=v,e.memoizedState=Q}}function og(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function lg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)og(a[e],i)}var Ta=$(null),Pu=$(0);function ug(e,i){e=ji,Z(Pu,e),Z(Ta,i),ji=e|i.baseLanes}function mf(){Z(Pu,ji),Z(Ta,Ta.current)}function pf(){ji=Pu.current,it(Ta),it(Pu)}var lr=0,Rt=null,Qt=null,ye=null,xu=!1,Aa=!1,Rs=!1,Lu=0,Go=0,Sa=null,IA=0;function de(){throw Error(s(321))}function gf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!hn(e[a],i[a]))return!1;return!0}function _f(e,i,a,l,h,d){return lr=d,Rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?Kg:Qg,Rs=!1,d=a(l,h),Rs=!1,Aa&&(d=hg(i,a,l,h)),cg(e),d}function cg(e){H.H=Fu;var i=Qt!==null&&Qt.next!==null;if(lr=0,ye=Qt=Rt=null,xu=!1,Go=0,Sa=null,i)throw Error(s(300));e===null||Me||(e=e.dependencies,e!==null&&Nu(e)&&(Me=!0))}function hg(e,i,a,l){Rt=e;var h=0;do{if(Aa&&(Sa=null),Go=0,Aa=!1,25<=h)throw Error(s(301));if(h+=1,ye=Qt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=UA,d=i(a,l)}while(Aa);return d}function CA(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?Ko(i):i,e=e.useState()[0],(Qt!==null?Qt.memoizedState:null)!==e&&(Rt.flags|=1024),i}function yf(){var e=Lu!==0;return Lu=0,e}function vf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Ef(e){if(xu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}xu=!1}lr=0,ye=Qt=Rt=null,Aa=!1,Go=Lu=0,Sa=null}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?Rt.memoizedState=ye=e:ye=ye.next=e,ye}function ve(){if(Qt===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var i=ye===null?Rt.memoizedState:ye.next;if(i!==null)ye=i,Qt=e;else{if(e===null)throw Rt.alternate===null?Error(s(467)):Error(s(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},ye===null?Rt.memoizedState=ye=e:ye=ye.next=e}return ye}function Tf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ko(e){var i=Go;return Go+=1,Sa===null&&(Sa=[]),e=rg(Sa,e,i),i=Rt,(ye===null?i.memoizedState:ye.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?Kg:Qg),e}function zu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ko(e);if(e.$$typeof===ot)return Ke(e)}throw Error(s(438,String(e)))}function Af(e){var i=null,a=Rt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Rt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Tf(),Rt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=N;return i.index++,a}function ki(e,i){return typeof i=="function"?i(e):i}function Bu(e){var i=ve();return Sf(i,Qt,e)}function Sf(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=v=null,w=null,L=i,F=!1;do{var Q=L.lane&-536870913;if(Q!==L.lane?(Pt&Q)===Q:(lr&Q)===Q){var z=L.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Q===va&&(F=!0);else if((lr&z)===z){L=L.next,z===va&&(F=!0);continue}else Q={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(E=w=Q,v=d):w=w.next=Q,Rt.lanes|=z,pr|=z;Q=L.action,Rs&&a(d,Q),d=L.hasEagerState?L.eagerState:a(d,Q)}else z={lane:Q,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(E=w=z,v=d):w=w.next=z,Rt.lanes|=Q,pr|=Q;L=L.next}while(L!==null&&L!==i);if(w===null?v=d:w.next=E,!hn(d,e.memoizedState)&&(Me=!0,F&&(a=Ea,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function bf(e){var i=ve(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);hn(d,i.memoizedState)||(Me=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function fg(e,i,a){var l=Rt,h=ve(),d=Bt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!hn((Qt||h).memoizedState,a);v&&(h.memoizedState=a,Me=!0),h=h.queue;var E=pg.bind(null,l,h,e);if(Qo(2048,8,E,[e]),h.getSnapshot!==i||v||ye!==null&&ye.memoizedState.tag&1){if(l.flags|=2048,ba(9,ju(),mg.bind(null,l,h,a,i),null),Zt===null)throw Error(s(349));d||(lr&124)!==0||dg(l,i,a)}return a}function dg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Rt.updateQueue,i===null?(i=Tf(),Rt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function mg(e,i,a,l){i.value=a,i.getSnapshot=l,gg(i)&&_g(e)}function pg(e,i,a){return a(function(){gg(i)&&_g(e)})}function gg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!hn(e,a)}catch{return!0}}function _g(e){var i=pa(e,2);i!==null&&_n(i,e,2)}function wf(e){var i=rn();if(typeof e=="function"){var a=e;if(e=a(),Rs){un(!0);try{a()}finally{un(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},i}function yg(e,i,a,l){return e.baseState=a,Sf(e,Qt,typeof l=="function"?l:ki)}function DA(e,i,a,l,h){if(Hu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};H.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,vg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function vg(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=H.T,v={};H.T=v;try{var E=a(h,l),w=H.S;w!==null&&w(v,E),Eg(e,i,E)}catch(L){Rf(e,i,L)}finally{H.T=d}}else try{d=a(h,l),Eg(e,i,d)}catch(L){Rf(e,i,L)}}function Eg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Tg(e,i,l)},function(l){return Rf(e,i,l)}):Tg(e,i,a)}function Tg(e,i,a){i.status="fulfilled",i.value=a,Ag(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,vg(e,a)))}function Rf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Ag(i),i=i.next;while(i!==l)}e.action=null}function Ag(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Sg(e,i){return i}function bg(e,i){if(Bt){var a=Zt.formState;if(a!==null){t:{var l=Rt;if(Bt){if(le){e:{for(var h=le,d=ii;h.nodeType!==8;){if(!d){h=null;break e}if(h=Bn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){le=Bn(h.nextSibling),l=h.data==="F!";break t}}As(l)}l=!1}l&&(i=a[0])}}return a=rn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sg,lastRenderedState:i},a.queue=l,a=Hg.bind(null,Rt,l),l.dispatch=a,l=wf(!1),d=Nf.bind(null,Rt,!1,l.queue),l=rn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=DA.bind(null,Rt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function wg(e){var i=ve();return Rg(i,Qt,e)}function Rg(e,i,a){if(i=Sf(e,i,Sg)[0],e=Bu(ki)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ko(i)}catch(v){throw v===Bo?Uu:v}else l=i;i=ve();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Rt.flags|=2048,ba(9,ju(),OA.bind(null,h,a),null)),[l,d,e]}function OA(e,i){e.action=i}function Ig(e){var i=ve(),a=Qt;if(a!==null)return Rg(i,a,e);ve(),i=i.memoizedState,a=ve();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function ba(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Rt.updateQueue,i===null&&(i=Tf(),Rt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function ju(){return{destroy:void 0,resource:void 0}}function Cg(){return ve().memoizedState}function qu(e,i,a,l){var h=rn();l=l===void 0?null:l,Rt.flags|=e,h.memoizedState=ba(1|i,ju(),a,l)}function Qo(e,i,a,l){var h=ve();l=l===void 0?null:l;var d=h.memoizedState.inst;Qt!==null&&l!==null&&gf(l,Qt.memoizedState.deps)?h.memoizedState=ba(i,d,a,l):(Rt.flags|=e,h.memoizedState=ba(1|i,d,a,l))}function Dg(e,i){qu(8390656,8,e,i)}function Og(e,i){Qo(2048,8,e,i)}function Ng(e,i){return Qo(4,2,e,i)}function Mg(e,i){return Qo(4,4,e,i)}function Vg(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Ug(e,i,a){a=a!=null?a.concat([e]):null,Qo(4,4,Vg.bind(null,i,e),a)}function If(){}function kg(e,i){var a=ve();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&gf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Pg(e,i){var a=ve();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&gf(i,l[1]))return l[0];if(l=e(),Rs){un(!0);try{e()}finally{un(!1)}}return a.memoizedState=[l,i],l}function Cf(e,i,a){return a===void 0||(lr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=z_(),Rt.lanes|=e,pr|=e,a)}function xg(e,i,a,l){return hn(a,i)?a:Ta.current!==null?(e=Cf(e,a,l),hn(e,i)||(Me=!0),e):(lr&42)===0?(Me=!0,e.memoizedState=a):(e=z_(),Rt.lanes|=e,pr|=e,i)}function Lg(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=H.T,E={};H.T=E,Nf(e,!1,i,a);try{var w=h(),L=H.S;if(L!==null&&L(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var F=RA(w,l);Yo(e,i,F,gn(e))}else Yo(e,i,l,gn(e))}catch(Q){Yo(e,i,{then:function(){},status:"rejected",reason:Q},gn())}finally{nt.p=d,H.T=v}}function NA(){}function Df(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=zg(e).queue;Lg(e,h,i,ut,a===null?NA:function(){return Bg(e),a(l)})}function zg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:ut},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Bg(e){var i=zg(e).next.queue;Yo(e,i,{},gn())}function Of(){return Ke(fl)}function jg(){return ve().memoizedState}function qg(){return ve().memoizedState}function MA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=gn();e=ar(a);var l=or(i,e,a);l!==null&&(_n(l,i,a),qo(l,i,a)),i={cache:af()},e.payload=i;return}i=i.return}}function VA(e,i,a){var l=gn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Hu(e)?Fg(i,a):(a=Xh(e,i,a,l),a!==null&&(_n(a,e,l),Gg(a,i,l)))}function Hg(e,i,a){var l=gn();Yo(e,i,a,l)}function Yo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hu(e))Fg(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,hn(E,v))return Ru(e,i,h,0),Zt===null&&wu(),!1}catch{}finally{}if(a=Xh(e,i,h,l),a!==null)return _n(a,e,l),Gg(a,i,l),!0}return!1}function Nf(e,i,a,l){if(l={lane:2,revertLane:ud(),action:l,hasEagerState:!1,eagerState:null,next:null},Hu(e)){if(i)throw Error(s(479))}else i=Xh(e,a,l,2),i!==null&&_n(i,e,2)}function Hu(e){var i=e.alternate;return e===Rt||i!==null&&i===Rt}function Fg(e,i){Aa=xu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Gg(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,go(e,a)}}var Fu={readContext:Ke,use:zu,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de},Kg={readContext:Ke,use:zu,useCallback:function(e,i){return rn().memoizedState=[e,i===void 0?null:i],e},useContext:Ke,useEffect:Dg,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,qu(4194308,4,Vg.bind(null,i,e),a)},useLayoutEffect:function(e,i){return qu(4194308,4,e,i)},useInsertionEffect:function(e,i){qu(4,2,e,i)},useMemo:function(e,i){var a=rn();i=i===void 0?null:i;var l=e();if(Rs){un(!0);try{e()}finally{un(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=rn();if(a!==void 0){var h=a(i);if(Rs){un(!0);try{a(i)}finally{un(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=VA.bind(null,Rt,e),[l.memoizedState,e]},useRef:function(e){var i=rn();return e={current:e},i.memoizedState=e},useState:function(e){e=wf(e);var i=e.queue,a=Hg.bind(null,Rt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:If,useDeferredValue:function(e,i){var a=rn();return Cf(a,e,i)},useTransition:function(){var e=wf(!1);return e=Lg.bind(null,Rt,e.queue,!0,!1),rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Rt,h=rn();if(Bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Zt===null)throw Error(s(349));(Pt&124)!==0||dg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Dg(pg.bind(null,l,d,e),[e]),l.flags|=2048,ba(9,ju(),mg.bind(null,l,d,a,i),null),a},useId:function(){var e=rn(),i=Zt.identifierPrefix;if(Bt){var a=Mi,l=Ni;a=(l&~(1<<32-Ge(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Lu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=IA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Of,useFormState:bg,useActionState:bg,useOptimistic:function(e){var i=rn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Nf.bind(null,Rt,!0,a),a.dispatch=i,[e,i]},useMemoCache:Af,useCacheRefresh:function(){return rn().memoizedState=MA.bind(null,Rt)}},Qg={readContext:Ke,use:zu,useCallback:kg,useContext:Ke,useEffect:Og,useImperativeHandle:Ug,useInsertionEffect:Ng,useLayoutEffect:Mg,useMemo:Pg,useReducer:Bu,useRef:Cg,useState:function(){return Bu(ki)},useDebugValue:If,useDeferredValue:function(e,i){var a=ve();return xg(a,Qt.memoizedState,e,i)},useTransition:function(){var e=Bu(ki)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:Ko(e),i]},useSyncExternalStore:fg,useId:jg,useHostTransitionStatus:Of,useFormState:wg,useActionState:wg,useOptimistic:function(e,i){var a=ve();return yg(a,Qt,e,i)},useMemoCache:Af,useCacheRefresh:qg},UA={readContext:Ke,use:zu,useCallback:kg,useContext:Ke,useEffect:Og,useImperativeHandle:Ug,useInsertionEffect:Ng,useLayoutEffect:Mg,useMemo:Pg,useReducer:bf,useRef:Cg,useState:function(){return bf(ki)},useDebugValue:If,useDeferredValue:function(e,i){var a=ve();return Qt===null?Cf(a,e,i):xg(a,Qt.memoizedState,e,i)},useTransition:function(){var e=bf(ki)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:Ko(e),i]},useSyncExternalStore:fg,useId:jg,useHostTransitionStatus:Of,useFormState:Ig,useActionState:Ig,useOptimistic:function(e,i){var a=ve();return Qt!==null?yg(a,Qt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Af,useCacheRefresh:qg},wa=null,Xo=0;function Gu(e){var i=Xo;return Xo+=1,wa===null&&(wa=[]),rg(wa,e,i)}function $o(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ku(e,i){throw i.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Yg(e){var i=e._init;return i(e._payload)}function Xg(e){function i(U,D){if(e){var x=U.deletions;x===null?(U.deletions=[D],U.flags|=16):x.push(D)}}function a(U,D){if(!e)return null;for(;D!==null;)i(U,D),D=D.sibling;return null}function l(U){for(var D=new Map;U!==null;)U.key!==null?D.set(U.key,U):D.set(U.index,U),U=U.sibling;return D}function h(U,D){return U=Oi(U,D),U.index=0,U.sibling=null,U}function d(U,D,x){return U.index=x,e?(x=U.alternate,x!==null?(x=x.index,x<D?(U.flags|=67108866,D):x):(U.flags|=67108866,D)):(U.flags|=1048576,D)}function v(U){return e&&U.alternate===null&&(U.flags|=67108866),U}function E(U,D,x,G){return D===null||D.tag!==6?(D=Wh(x,U.mode,G),D.return=U,D):(D=h(D,x),D.return=U,D)}function w(U,D,x,G){var at=x.type;return at===K?F(U,D,x.props.children,G,x.key):D!==null&&(D.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===S&&Yg(at)===D.type)?(D=h(D,x.props),$o(D,x),D.return=U,D):(D=Cu(x.type,x.key,x.props,null,U.mode,G),$o(D,x),D.return=U,D)}function L(U,D,x,G){return D===null||D.tag!==4||D.stateNode.containerInfo!==x.containerInfo||D.stateNode.implementation!==x.implementation?(D=Zh(x,U.mode,G),D.return=U,D):(D=h(D,x.children||[]),D.return=U,D)}function F(U,D,x,G,at){return D===null||D.tag!==7?(D=ys(x,U.mode,G,at),D.return=U,D):(D=h(D,x),D.return=U,D)}function Q(U,D,x){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Wh(""+D,U.mode,x),D.return=U,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case O:return x=Cu(D.type,D.key,D.props,null,U.mode,x),$o(x,D),x.return=U,x;case q:return D=Zh(D,U.mode,x),D.return=U,D;case S:var G=D._init;return D=G(D._payload),Q(U,D,x)}if(ae(D)||k(D))return D=ys(D,U.mode,x,null),D.return=U,D;if(typeof D.then=="function")return Q(U,Gu(D),x);if(D.$$typeof===ot)return Q(U,Mu(U,D),x);Ku(U,D)}return null}function z(U,D,x,G){var at=D!==null?D.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return at!==null?null:E(U,D,""+x,G);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case O:return x.key===at?w(U,D,x,G):null;case q:return x.key===at?L(U,D,x,G):null;case S:return at=x._init,x=at(x._payload),z(U,D,x,G)}if(ae(x)||k(x))return at!==null?null:F(U,D,x,G,null);if(typeof x.then=="function")return z(U,D,Gu(x),G);if(x.$$typeof===ot)return z(U,D,Mu(U,x),G);Ku(U,x)}return null}function B(U,D,x,G,at){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return U=U.get(x)||null,E(D,U,""+G,at);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case O:return U=U.get(G.key===null?x:G.key)||null,w(D,U,G,at);case q:return U=U.get(G.key===null?x:G.key)||null,L(D,U,G,at);case S:var Dt=G._init;return G=Dt(G._payload),B(U,D,x,G,at)}if(ae(G)||k(G))return U=U.get(x)||null,F(D,U,G,at,null);if(typeof G.then=="function")return B(U,D,x,Gu(G),at);if(G.$$typeof===ot)return B(U,D,x,Mu(D,G),at);Ku(D,G)}return null}function yt(U,D,x,G){for(var at=null,Dt=null,lt=D,pt=D=0,Ue=null;lt!==null&&pt<x.length;pt++){lt.index>pt?(Ue=lt,lt=null):Ue=lt.sibling;var Lt=z(U,lt,x[pt],G);if(Lt===null){lt===null&&(lt=Ue);break}e&&lt&&Lt.alternate===null&&i(U,lt),D=d(Lt,D,pt),Dt===null?at=Lt:Dt.sibling=Lt,Dt=Lt,lt=Ue}if(pt===x.length)return a(U,lt),Bt&&Es(U,pt),at;if(lt===null){for(;pt<x.length;pt++)lt=Q(U,x[pt],G),lt!==null&&(D=d(lt,D,pt),Dt===null?at=lt:Dt.sibling=lt,Dt=lt);return Bt&&Es(U,pt),at}for(lt=l(lt);pt<x.length;pt++)Ue=B(lt,U,pt,x[pt],G),Ue!==null&&(e&&Ue.alternate!==null&&lt.delete(Ue.key===null?pt:Ue.key),D=d(Ue,D,pt),Dt===null?at=Ue:Dt.sibling=Ue,Dt=Ue);return e&&lt.forEach(function(br){return i(U,br)}),Bt&&Es(U,pt),at}function ft(U,D,x,G){if(x==null)throw Error(s(151));for(var at=null,Dt=null,lt=D,pt=D=0,Ue=null,Lt=x.next();lt!==null&&!Lt.done;pt++,Lt=x.next()){lt.index>pt?(Ue=lt,lt=null):Ue=lt.sibling;var br=z(U,lt,Lt.value,G);if(br===null){lt===null&&(lt=Ue);break}e&&lt&&br.alternate===null&&i(U,lt),D=d(br,D,pt),Dt===null?at=br:Dt.sibling=br,Dt=br,lt=Ue}if(Lt.done)return a(U,lt),Bt&&Es(U,pt),at;if(lt===null){for(;!Lt.done;pt++,Lt=x.next())Lt=Q(U,Lt.value,G),Lt!==null&&(D=d(Lt,D,pt),Dt===null?at=Lt:Dt.sibling=Lt,Dt=Lt);return Bt&&Es(U,pt),at}for(lt=l(lt);!Lt.done;pt++,Lt=x.next())Lt=B(lt,U,pt,Lt.value,G),Lt!==null&&(e&&Lt.alternate!==null&&lt.delete(Lt.key===null?pt:Lt.key),D=d(Lt,D,pt),Dt===null?at=Lt:Dt.sibling=Lt,Dt=Lt);return e&&lt.forEach(function(kS){return i(U,kS)}),Bt&&Es(U,pt),at}function Xt(U,D,x,G){if(typeof x=="object"&&x!==null&&x.type===K&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case O:t:{for(var at=x.key;D!==null;){if(D.key===at){if(at=x.type,at===K){if(D.tag===7){a(U,D.sibling),G=h(D,x.props.children),G.return=U,U=G;break t}}else if(D.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===S&&Yg(at)===D.type){a(U,D.sibling),G=h(D,x.props),$o(G,x),G.return=U,U=G;break t}a(U,D);break}else i(U,D);D=D.sibling}x.type===K?(G=ys(x.props.children,U.mode,G,x.key),G.return=U,U=G):(G=Cu(x.type,x.key,x.props,null,U.mode,G),$o(G,x),G.return=U,U=G)}return v(U);case q:t:{for(at=x.key;D!==null;){if(D.key===at)if(D.tag===4&&D.stateNode.containerInfo===x.containerInfo&&D.stateNode.implementation===x.implementation){a(U,D.sibling),G=h(D,x.children||[]),G.return=U,U=G;break t}else{a(U,D);break}else i(U,D);D=D.sibling}G=Zh(x,U.mode,G),G.return=U,U=G}return v(U);case S:return at=x._init,x=at(x._payload),Xt(U,D,x,G)}if(ae(x))return yt(U,D,x,G);if(k(x)){if(at=k(x),typeof at!="function")throw Error(s(150));return x=at.call(x),ft(U,D,x,G)}if(typeof x.then=="function")return Xt(U,D,Gu(x),G);if(x.$$typeof===ot)return Xt(U,D,Mu(U,x),G);Ku(U,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,D!==null&&D.tag===6?(a(U,D.sibling),G=h(D,x),G.return=U,U=G):(a(U,D),G=Wh(x,U.mode,G),G.return=U,U=G),v(U)):a(U,D)}return function(U,D,x,G){try{Xo=0;var at=Xt(U,D,x,G);return wa=null,at}catch(lt){if(lt===Bo||lt===Uu)throw lt;var Dt=fn(29,lt,null,U.mode);return Dt.lanes=G,Dt.return=U,Dt}finally{}}}var Ra=Xg(!0),$g=Xg(!1),Mn=$(null),ri=null;function ur(e){var i=e.alternate;Z(Ie,Ie.current&1),Z(Mn,e),ri===null&&(i===null||Ta.current!==null||i.memoizedState!==null)&&(ri=e)}function Wg(e){if(e.tag===22){if(Z(Ie,Ie.current),Z(Mn,e),ri===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ri=e)}}else cr()}function cr(){Z(Ie,Ie.current),Z(Mn,Mn.current)}function Pi(e){it(Mn),ri===e&&(ri=null),it(Ie)}var Ie=$(0);function Qu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Td(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Mf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:T({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=gn(),h=ar(l);h.payload=i,a!=null&&(h.callback=a),i=or(e,h,l),i!==null&&(_n(i,e,l),qo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=gn(),h=ar(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=or(e,h,l),i!==null&&(_n(i,e,l),qo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=gn(),l=ar(a);l.tag=2,i!=null&&(l.callback=i),i=or(e,l,a),i!==null&&(_n(i,e,a),qo(i,e,a))}};function Zg(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Mo(a,l)||!Mo(h,d):!0}function Jg(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Vf.enqueueReplaceState(i,i.state,null)}function Is(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=T({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Yu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function t_(e){Yu(e)}function e_(e){console.error(e)}function n_(e){Yu(e)}function Xu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function i_(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Uf(e,i,a){return a=ar(a),a.tag=3,a.payload={element:null},a.callback=function(){Xu(e,i)},a}function r_(e){return e=ar(e),e.tag=3,e}function s_(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){i_(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){i_(i,a,l),typeof h!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function kA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&xo(i,a,h,!0),a=Mn.current,a!==null){switch(a.tag){case 13:return ri===null?rd():a.alternate===null&&ue===0&&(ue=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===uf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),ad(e,l,h)),!1;case 22:return a.flags|=65536,l===uf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),ad(e,l,h)),!1}throw Error(s(435,a.tag))}return ad(e,l,h),rd(),!1}if(Bt)return i=Mn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==ef&&(e=Error(s(422),{cause:l}),Po(Cn(e,a)))):(l!==ef&&(i=Error(s(423),{cause:l}),Po(Cn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Cn(l,a),h=Uf(e.stateNode,l,h),ff(e,h),ue!==4&&(ue=2)),!1;var d=Error(s(520),{cause:l});if(d=Cn(d,a),il===null?il=[d]:il.push(d),ue!==4&&(ue=2),i===null)return!0;l=Cn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Uf(a.stateNode,l,e),ff(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(gr===null||!gr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=r_(h),s_(h,e,a,l),ff(a,h),!1}a=a.return}while(a!==null);return!1}var a_=Error(s(461)),Me=!1;function ze(e,i,a,l){i.child=e===null?$g(i,null,a,l):Ra(i,e.child,a,l)}function o_(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var E in l)E!=="ref"&&(v[E]=l[E])}else v=l;return bs(i),l=_f(e,i,a,v,d,h),E=yf(),e!==null&&!Me?(vf(e,i,h),xi(e,i,h)):(Bt&&E&&Jh(i),i.flags|=1,ze(e,i,l,h),i.child)}function l_(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!$h(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,u_(e,i,d,l,h)):(e=Cu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!qf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Mo,a(v,l)&&e.ref===i.ref)return xi(e,i,h)}return i.flags|=1,e=Oi(d,l),e.ref=i.ref,e.return=i,i.child=e}function u_(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Mo(d,l)&&e.ref===i.ref)if(Me=!1,i.pendingProps=l=d,qf(e,h))(e.flags&131072)!==0&&(Me=!0);else return i.lanes=e.lanes,xi(e,i,h)}return kf(e,i,a,l,h)}function c_(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return h_(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vu(i,d!==null?d.cachePool:null),d!==null?ug(i,d):mf(),Wg(i);else return i.lanes=i.childLanes=536870912,h_(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Vu(i,d.cachePool),ug(i,d),cr(),i.memoizedState=null):(e!==null&&Vu(i,null),mf(),cr());return ze(e,i,h,a),i.child}function h_(e,i,a,l){var h=lf();return h=h===null?null:{parent:Re._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Vu(i,null),mf(),Wg(i),e!==null&&xo(e,i,l,!0),null}function $u(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function kf(e,i,a,l,h){return bs(i),a=_f(e,i,a,l,void 0,h),l=yf(),e!==null&&!Me?(vf(e,i,h),xi(e,i,h)):(Bt&&l&&Jh(i),i.flags|=1,ze(e,i,a,h),i.child)}function f_(e,i,a,l,h,d){return bs(i),i.updateQueue=null,a=hg(i,l,a,h),cg(e),l=yf(),e!==null&&!Me?(vf(e,i,d),xi(e,i,d)):(Bt&&l&&Jh(i),i.flags|=1,ze(e,i,a,d),i.child)}function d_(e,i,a,l,h){if(bs(i),i.stateNode===null){var d=ga,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ke(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Vf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},cf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ke(v):ga,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Mf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Vf.enqueueReplaceState(d,d.state,null),Fo(i,l,d,h),Ho(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,w=Is(a,E);d.props=w;var L=d.context,F=a.contextType;v=ga,typeof F=="object"&&F!==null&&(v=Ke(F));var Q=a.getDerivedStateFromProps;F=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||L!==v)&&Jg(i,d,l,v),sr=!1;var z=i.memoizedState;d.state=z,Fo(i,l,d,h),Ho(),L=i.memoizedState,E||z!==L||sr?(typeof Q=="function"&&(Mf(i,a,Q,l),L=i.memoizedState),(w=sr||Zg(i,a,w,l,z,L,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,hf(e,i),v=i.memoizedProps,F=Is(a,v),d.props=F,Q=i.pendingProps,z=d.context,L=a.contextType,w=ga,typeof L=="object"&&L!==null&&(w=Ke(L)),E=a.getDerivedStateFromProps,(L=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Q||z!==w)&&Jg(i,d,l,w),sr=!1,z=i.memoizedState,d.state=z,Fo(i,l,d,h),Ho();var B=i.memoizedState;v!==Q||z!==B||sr||e!==null&&e.dependencies!==null&&Nu(e.dependencies)?(typeof E=="function"&&(Mf(i,a,E,l),B=i.memoizedState),(F=sr||Zg(i,a,F,l,z,B,w)||e!==null&&e.dependencies!==null&&Nu(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,B,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,B,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=B),d.props=l,d.state=B,d.context=w,l=F):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,$u(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ra(i,e.child,null,h),i.child=Ra(i,null,a,h)):ze(e,i,a,h),i.memoizedState=d.state,e=i.child):e=xi(e,i,h),e}function m_(e,i,a,l){return ko(),i.flags|=256,ze(e,i,a,l),i.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(e){return{baseLanes:e,cachePool:eg()}}function Lf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Vn),e}function p_(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Bt){if(h?ur(i):cr(),Bt){var E=le,w;if(w=E){t:{for(w=E,E=ii;w.nodeType!==8;){if(!E){E=null;break t}if(w=Bn(w.nextSibling),w===null){E=null;break t}}E=w}E!==null?(i.memoizedState={dehydrated:E,treeContext:vs!==null?{id:Ni,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},w=fn(18,null,null,0),w.stateNode=E,w.return=i,i.child=w,en=i,le=null,w=!0):w=!1}w||As(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Td(E)?i.lanes=32:i.lanes=536870912,null;Pi(i)}return E=l.children,l=l.fallback,h?(cr(),h=i.mode,E=Wu({mode:"hidden",children:E},h),l=ys(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,h=i.child,h.memoizedState=xf(a),h.childLanes=Lf(e,v,a),i.memoizedState=Pf,l):(ur(i),zf(i,E))}if(w=e.memoizedState,w!==null&&(E=w.dehydrated,E!==null)){if(d)i.flags&256?(ur(i),i.flags&=-257,i=Bf(e,i,a)):i.memoizedState!==null?(cr(),i.child=e.child,i.flags|=128,i=null):(cr(),h=l.fallback,E=i.mode,l=Wu({mode:"visible",children:l.children},E),h=ys(h,E,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ra(i,e.child,null,a),l=i.child,l.memoizedState=xf(a),l.childLanes=Lf(e,v,a),i.memoizedState=Pf,i=h);else if(ur(i),Td(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,Po({value:l,source:null,stack:null}),i=Bf(e,i,a)}else if(Me||xo(e,i,a,!1),v=(a&e.childLanes)!==0,Me||v){if(v=Zt,v!==null&&(l=a&-a,l=(l&42)!==0?1:Wi(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==w.retryLane))throw w.retryLane=l,pa(e,l),_n(v,e,l),a_;E.data==="$?"||rd(),i=Bf(e,i,a)}else E.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=w.treeContext,le=Bn(E.nextSibling),en=i,Bt=!0,Ts=null,ii=!1,e!==null&&(On[Nn++]=Ni,On[Nn++]=Mi,On[Nn++]=vs,Ni=e.id,Mi=e.overflow,vs=i),i=zf(i,l.children),i.flags|=4096);return i}return h?(cr(),h=l.fallback,E=i.mode,w=e.child,L=w.sibling,l=Oi(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,L!==null?h=Oi(L,h):(h=ys(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=e.child.memoizedState,E===null?E=xf(a):(w=E.cachePool,w!==null?(L=Re._currentValue,w=w.parent!==L?{parent:L,pool:L}:w):w=eg(),E={baseLanes:E.baseLanes|a,cachePool:w}),h.memoizedState=E,h.childLanes=Lf(e,v,a),i.memoizedState=Pf,l):(ur(i),a=e.child,e=a.sibling,a=Oi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function zf(e,i){return i=Wu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Wu(e,i){return e=fn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Bf(e,i,a){return Ra(i,e.child,null,a),e=zf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function g_(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),rf(e.return,i,a)}function jf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function __(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(ze(e,i,l.children,a),l=Ie.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&g_(e,a,i);else if(e.tag===19)g_(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Z(Ie,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Qu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),jf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Qu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}jf(i,!0,a,null,d);break;case"together":jf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function xi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),pr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(xo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Oi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Oi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function qf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Nu(e)))}function PA(e,i,a){switch(i.tag){case 3:Wt(i,i.stateNode.containerInfo),rr(i,Re,e.memoizedState.cache),ko();break;case 27:case 5:$i(i);break;case 4:Wt(i,i.stateNode.containerInfo);break;case 10:rr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ur(i),i.flags|=128,null):(a&i.child.childLanes)!==0?p_(e,i,a):(ur(i),e=xi(e,i,a),e!==null?e.sibling:null);ur(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(xo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return __(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Z(Ie,Ie.current),l)break;return null;case 22:case 23:return i.lanes=0,c_(e,i,a);case 24:rr(i,Re,e.memoizedState.cache)}return xi(e,i,a)}function y_(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Me=!0;else{if(!qf(e,a)&&(i.flags&128)===0)return Me=!1,PA(e,i,a);Me=(e.flags&131072)!==0}else Me=!1,Bt&&(i.flags&1048576)!==0&&Yp(i,Ou,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")$h(l)?(e=Is(l,e),i.tag=1,i=d_(null,i,l,e,a)):(i.tag=0,i=kf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===_t){i.tag=11,i=o_(null,i,l,e,a);break t}else if(h===M){i.tag=14,i=l_(null,i,l,e,a);break t}}throw i=Pe(l)||l,Error(s(306,i,""))}}return i;case 0:return kf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Is(l,i.pendingProps),d_(e,i,l,h,a);case 3:t:{if(Wt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,hf(e,i),Fo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,rr(i,Re,l),l!==d.cache&&sf(i,[Re],a,!0),Ho(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=m_(e,i,l,a);break t}else if(l!==h){h=Cn(Error(s(424)),i),Po(h),i=m_(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(le=Bn(e.firstChild),en=i,Bt=!0,Ts=null,ii=!0,a=$g(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ko(),l===h){i=xi(e,i,a);break t}ze(e,i,l,a)}i=i.child}return i;case 26:return $u(e,i),e===null?(a=Ay(i.type,null,i.pendingProps,null))?i.memoizedState=a:Bt||(a=i.type,e=i.pendingProps,l=hc(Tt.current).createElement(a),l[Se]=i,l[ge]=e,je(l,a,e),fe(l),i.stateNode=l):i.memoizedState=Ay(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return $i(i),e===null&&Bt&&(l=i.stateNode=vy(i.type,i.pendingProps,Tt.current),en=i,ii=!0,h=le,vr(i.type)?(Ad=h,le=Bn(l.firstChild)):le=h),ze(e,i,i.pendingProps.children,a),$u(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Bt&&((h=l=le)&&(l=cS(l,i.type,i.pendingProps,ii),l!==null?(i.stateNode=l,en=i,le=Bn(l.firstChild),ii=!1,h=!0):h=!1),h||As(i)),$i(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,yd(h,d)?l=null:v!==null&&yd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=_f(e,i,CA,null,null,a),fl._currentValue=h),$u(e,i),ze(e,i,l,a),i.child;case 6:return e===null&&Bt&&((e=a=le)&&(a=hS(a,i.pendingProps,ii),a!==null?(i.stateNode=a,en=i,le=null,e=!0):e=!1),e||As(i)),null;case 13:return p_(e,i,a);case 4:return Wt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ra(i,null,l,a):ze(e,i,l,a),i.child;case 11:return o_(e,i,i.type,i.pendingProps,a);case 7:return ze(e,i,i.pendingProps,a),i.child;case 8:return ze(e,i,i.pendingProps.children,a),i.child;case 12:return ze(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,rr(i,i.type,l.value),ze(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,bs(i),h=Ke(h),l=l(h),i.flags|=1,ze(e,i,l,a),i.child;case 14:return l_(e,i,i.type,i.pendingProps,a);case 15:return u_(e,i,i.type,i.pendingProps,a);case 19:return __(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=Wu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Oi(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return c_(e,i,a);case 24:return bs(i),l=Ke(Re),e===null?(h=lf(),h===null&&(h=Zt,d=af(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},cf(i),rr(i,Re,h)):((e.lanes&a)!==0&&(hf(e,i),Fo(i,null,null,a),Ho()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),rr(i,Re,l)):(l=d.cache,rr(i,Re,l),l!==h.cache&&sf(i,[Re],a,!0))),ze(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Li(e){e.flags|=4}function v_(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Iy(i)){if(i=Mn.current,i!==null&&((Pt&4194048)===Pt?ri!==null:(Pt&62914560)!==Pt&&(Pt&536870912)===0||i!==ri))throw jo=uf,ng;e.flags|=8192}}function Zu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?mo():536870912,e.lanes|=i,Oa|=i)}function Wo(e,i){if(!Bt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ie(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function xA(e,i,a){var l=i.pendingProps;switch(tf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(i),null;case 1:return ie(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ui(Re),Gn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Uo(i)?Li(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Wp())),ie(i),null;case 26:return a=i.memoizedState,e===null?(Li(i),a!==null?(ie(i),v_(i,a)):(ie(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Li(i),ie(i),v_(i,a)):(ie(i),i.flags&=-16777217):(e.memoizedProps!==l&&Li(i),ie(i),i.flags&=-16777217),null;case 27:_i(i),a=Tt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Li(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ie(i),null}e=ht.current,Uo(i)?Xp(i):(e=vy(h,l,a),i.stateNode=e,Li(i))}return ie(i),null;case 5:if(_i(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Li(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ie(i),null}if(e=ht.current,Uo(i))Xp(i);else{switch(h=hc(Tt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[Se]=i,e[ge]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(je(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Li(i)}}return ie(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Li(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=Tt.current,Uo(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=en,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Se]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||fy(e.nodeValue,a)),e||As(i)}else e=hc(e).createTextNode(l),e[Se]=i,i.stateNode=e}return ie(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Uo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Se]=i}else ko(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ie(i),h=!1}else h=Wp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Pi(i),i):(Pi(i),null)}if(Pi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Zu(i,i.updateQueue),ie(i),null;case 4:return Gn(),e===null&&dd(i.stateNode.containerInfo),ie(i),null;case 10:return Ui(i.type),ie(i),null;case 19:if(it(Ie),h=i.memoizedState,h===null)return ie(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Wo(h,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Qu(e),d!==null){for(i.flags|=128,Wo(h,!1),e=d.updateQueue,i.updateQueue=e,Zu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Qp(a,e),a=a.sibling;return Z(Ie,Ie.current&1|2),i.child}e=e.sibling}h.tail!==null&&An()>ec&&(i.flags|=128,l=!0,Wo(h,!1),i.lanes=4194304)}else{if(!l)if(e=Qu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Zu(i,e),Wo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Bt)return ie(i),null}else 2*An()-h.renderingStartTime>ec&&a!==536870912&&(i.flags|=128,l=!0,Wo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=An(),i.sibling=null,e=Ie.current,Z(Ie,l?e&1|2:e&1),i):(ie(i),null);case 22:case 23:return Pi(i),pf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ie(i),i.subtreeFlags&6&&(i.flags|=8192)):ie(i),a=i.updateQueue,a!==null&&Zu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&it(ws),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ui(Re),ie(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function LA(e,i){switch(tf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ui(Re),Gn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return _i(i),null;case 13:if(Pi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));ko()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return it(Ie),null;case 4:return Gn(),null;case 10:return Ui(i.type),null;case 22:case 23:return Pi(i),pf(),e!==null&&it(ws),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ui(Re),null;case 25:return null;default:return null}}function E_(e,i){switch(tf(i),i.tag){case 3:Ui(Re),Gn();break;case 26:case 27:case 5:_i(i);break;case 4:Gn();break;case 13:Pi(i);break;case 19:it(Ie);break;case 10:Ui(i.type);break;case 22:case 23:Pi(i),pf(),e!==null&&it(ws);break;case 24:Ui(Re)}}function Zo(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(E){$t(i,i.return,E)}}function hr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var w=a,L=E;try{L()}catch(F){$t(h,w,F)}}}l=l.next}while(l!==d)}}catch(F){$t(i,i.return,F)}}function T_(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{lg(i,a)}catch(l){$t(e,e.return,l)}}}function A_(e,i,a){a.props=Is(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){$t(e,i,l)}}function Jo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){$t(e,i,h)}}function si(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){$t(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){$t(e,i,h)}else a.current=null}function S_(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){$t(e,e.return,h)}}function Hf(e,i,a){try{var l=e.stateNode;sS(l,e.type,a,i),l[ge]=i}catch(h){$t(e,e.return,h)}}function b_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vr(e.type)||e.tag===4}function Ff(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||b_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=cc));else if(l!==4&&(l===27&&vr(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Gf(e,i,a),e=e.sibling;e!==null;)Gf(e,i,a),e=e.sibling}function Ju(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&vr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ju(e,i,a),e=e.sibling;e!==null;)Ju(e,i,a),e=e.sibling}function w_(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);je(i,l,a),i[Se]=e,i[ge]=a}catch(d){$t(e,e.return,d)}}var zi=!1,me=!1,Kf=!1,R_=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function zA(e,i){if(e=e.containerInfo,gd=_c,e=xp(e),Hh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,E=-1,w=-1,L=0,F=0,Q=e,z=null;e:for(;;){for(var B;Q!==a||h!==0&&Q.nodeType!==3||(E=v+h),Q!==d||l!==0&&Q.nodeType!==3||(w=v+l),Q.nodeType===3&&(v+=Q.nodeValue.length),(B=Q.firstChild)!==null;)z=Q,Q=B;for(;;){if(Q===e)break e;if(z===a&&++L===h&&(E=v),z===d&&++F===l&&(w=v),(B=Q.nextSibling)!==null)break;Q=z,z=Q.parentNode}Q=B}a=E===-1||w===-1?null:{start:E,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(_d={focusedElem:e,selectionRange:a},_c=!1,Ve=i;Ve!==null;)if(i=Ve,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Ve=e;else for(;Ve!==null;){switch(i=Ve,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var yt=Is(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(yt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(ft){$t(a,a.return,ft)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Ed(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ed(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ve=e;break}Ve=i.return}}function I_(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:fr(e,a),l&4&&Zo(5,a);break;case 1:if(fr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){$t(a,a.return,v)}else{var h=Is(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){$t(a,a.return,v)}}l&64&&T_(a),l&512&&Jo(a,a.return);break;case 3:if(fr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{lg(e,i)}catch(v){$t(a,a.return,v)}}break;case 27:i===null&&l&4&&w_(a);case 26:case 5:fr(e,a),i===null&&l&4&&S_(a),l&512&&Jo(a,a.return);break;case 12:fr(e,a);break;case 13:fr(e,a),l&4&&O_(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=YA.bind(null,a),fS(e,a))));break;case 22:if(l=a.memoizedState!==null||zi,!l){i=i!==null&&i.memoizedState!==null||me,h=zi;var d=me;zi=l,(me=i)&&!d?dr(e,a,(a.subtreeFlags&8772)!==0):fr(e,a),zi=h,me=d}break;case 30:break;default:fr(e,a)}}function C_(e){var i=e.alternate;i!==null&&(e.alternate=null,C_(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&tr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ne=null,sn=!1;function Bi(e,i,a){for(a=a.child;a!==null;)D_(e,i,a),a=a.sibling}function D_(e,i,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(oe,a)}catch{}switch(a.tag){case 26:me||si(a,i),Bi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:me||si(a,i);var l=ne,h=sn;vr(a.type)&&(ne=a.stateNode,sn=!1),Bi(e,i,a),ll(a.stateNode),ne=l,sn=h;break;case 5:me||si(a,i);case 6:if(l=ne,h=sn,ne=null,Bi(e,i,a),ne=l,sn=h,ne!==null)if(sn)try{(ne.nodeType===9?ne.body:ne.nodeName==="HTML"?ne.ownerDocument.body:ne).removeChild(a.stateNode)}catch(d){$t(a,i,d)}else try{ne.removeChild(a.stateNode)}catch(d){$t(a,i,d)}break;case 18:ne!==null&&(sn?(e=ne,_y(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gl(e)):_y(ne,a.stateNode));break;case 4:l=ne,h=sn,ne=a.stateNode.containerInfo,sn=!0,Bi(e,i,a),ne=l,sn=h;break;case 0:case 11:case 14:case 15:me||hr(2,a,i),me||hr(4,a,i),Bi(e,i,a);break;case 1:me||(si(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&A_(a,i,l)),Bi(e,i,a);break;case 21:Bi(e,i,a);break;case 22:me=(l=me)||a.memoizedState!==null,Bi(e,i,a),me=l;break;default:Bi(e,i,a)}}function O_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gl(e)}catch(a){$t(i,i.return,a)}}function BA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new R_),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new R_),i;default:throw Error(s(435,e.tag))}}function Qf(e,i){var a=BA(e);i.forEach(function(l){var h=XA.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function dn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(vr(E.type)){ne=E.stateNode,sn=!1;break t}break;case 5:ne=E.stateNode,sn=!1;break t;case 3:case 4:ne=E.stateNode.containerInfo,sn=!0;break t}E=E.return}if(ne===null)throw Error(s(160));D_(d,v,h),ne=null,sn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)N_(i,e),i=i.sibling}var zn=null;function N_(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dn(i,e),mn(e),l&4&&(hr(3,e,e.return),Zo(3,e),hr(5,e,e.return));break;case 1:dn(i,e),mn(e),l&512&&(me||a===null||si(a,a.return)),l&64&&zi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=zn;if(dn(i,e),mn(e),l&512&&(me||a===null||si(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ns]||d[Se]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),je(d,l,a),d[Se]=e,fe(d),l=d;break t;case"link":var v=wy("link","href",h).get(l+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}d=h.createElement(l),je(d,l,a),h.head.appendChild(d);break;case"meta":if(v=wy("meta","content",h).get(l+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}d=h.createElement(l),je(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Se]=e,fe(d),l=d}e.stateNode=l}else Ry(h,e.type,e.stateNode);else e.stateNode=by(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Ry(h,e.type,e.stateNode):by(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:dn(i,e),mn(e),l&512&&(me||a===null||si(a,a.return)),a!==null&&l&4&&Hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(dn(i,e),mn(e),l&512&&(me||a===null||si(a,a.return)),e.flags&32){h=e.stateNode;try{bn(h,"")}catch(B){$t(e,e.return,B)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Hf(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Kf=!0);break;case 6:if(dn(i,e),mn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(B){$t(e,e.return,B)}}break;case 3:if(mc=null,h=zn,zn=fc(i.containerInfo),dn(i,e),zn=h,mn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{gl(i.containerInfo)}catch(B){$t(e,e.return,B)}Kf&&(Kf=!1,M_(e));break;case 4:l=zn,zn=fc(e.stateNode.containerInfo),dn(i,e),mn(e),zn=l;break;case 12:dn(i,e),mn(e);break;case 13:dn(i,e),mn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jf=An()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qf(e,l)));break;case 22:h=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,L=zi,F=me;if(zi=L||h,me=F||w,dn(i,e),me=F,zi=L,mn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||zi||me||Cs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=w.stateNode;var Q=w.memoizedProps.style,z=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){$t(w,w.return,B)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(B){$t(w,w.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Qf(e,a))));break;case 19:dn(i,e),mn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qf(e,l)));break;case 30:break;case 21:break;default:dn(i,e),mn(e)}}function mn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(b_(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Ff(e);Ju(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(bn(v,""),a.flags&=-33);var E=Ff(e);Ju(e,E,v);break;case 3:case 4:var w=a.stateNode.containerInfo,L=Ff(e);Gf(e,L,w);break;default:throw Error(s(161))}}catch(F){$t(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function M_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;M_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function fr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)I_(e,i.alternate,i),i=i.sibling}function Cs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:hr(4,i,i.return),Cs(i);break;case 1:si(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&A_(i,i.return,a),Cs(i);break;case 27:ll(i.stateNode);case 26:case 5:si(i,i.return),Cs(i);break;case 22:i.memoizedState===null&&Cs(i);break;case 30:Cs(i);break;default:Cs(i)}e=e.sibling}}function dr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:dr(h,d,a),Zo(4,d);break;case 1:if(dr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){$t(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)og(w[h],E)}catch(L){$t(l,l.return,L)}}a&&v&64&&T_(d),Jo(d,d.return);break;case 27:w_(d);case 26:case 5:dr(h,d,a),a&&l===null&&v&4&&S_(d),Jo(d,d.return);break;case 12:dr(h,d,a);break;case 13:dr(h,d,a),a&&v&4&&O_(h,d);break;case 22:d.memoizedState===null&&dr(h,d,a),Jo(d,d.return);break;case 30:break;default:dr(h,d,a)}i=i.sibling}}function Yf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Lo(a))}function Xf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Lo(e))}function ai(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)V_(e,i,a,l),i=i.sibling}function V_(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ai(e,i,a,l),h&2048&&Zo(9,i);break;case 1:ai(e,i,a,l);break;case 3:ai(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Lo(e)));break;case 12:if(h&2048){ai(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){$t(i,i.return,w)}}else ai(e,i,a,l);break;case 13:ai(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?ai(e,i,a,l):tl(e,i):d._visibility&2?ai(e,i,a,l):(d._visibility|=2,Ia(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Yf(v,i);break;case 24:ai(e,i,a,l),h&2048&&Xf(i.alternate,i);break;default:ai(e,i,a,l)}}function Ia(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,E=a,w=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:Ia(d,v,E,w,h),Zo(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&2?Ia(d,v,E,w,h):tl(d,v):(F._visibility|=2,Ia(d,v,E,w,h)),h&&L&2048&&Yf(v.alternate,v);break;case 24:Ia(d,v,E,w,h),h&&L&2048&&Xf(v.alternate,v);break;default:Ia(d,v,E,w,h)}i=i.sibling}}function tl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:tl(a,l),h&2048&&Yf(l.alternate,l);break;case 24:tl(a,l),h&2048&&Xf(l.alternate,l);break;default:tl(a,l)}i=i.sibling}}var el=8192;function Ca(e){if(e.subtreeFlags&el)for(e=e.child;e!==null;)U_(e),e=e.sibling}function U_(e){switch(e.tag){case 26:Ca(e),e.flags&el&&e.memoizedState!==null&&wS(zn,e.memoizedState,e.memoizedProps);break;case 5:Ca(e);break;case 3:case 4:var i=zn;zn=fc(e.stateNode.containerInfo),Ca(e),zn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=el,el=16777216,Ca(e),el=i):Ca(e));break;default:Ca(e)}}function k_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function nl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ve=l,x_(l,e)}k_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)P_(e),e=e.sibling}function P_(e){switch(e.tag){case 0:case 11:case 15:nl(e),e.flags&2048&&hr(9,e,e.return);break;case 3:nl(e);break;case 12:nl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,tc(e)):nl(e);break;default:nl(e)}}function tc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ve=l,x_(l,e)}k_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:hr(8,i,i.return),tc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,tc(i));break;default:tc(i)}e=e.sibling}}function x_(e,i){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:hr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Lo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ve=l;else t:for(a=e;Ve!==null;){l=Ve;var h=l.sibling,d=l.return;if(C_(l),l===a){Ve=null;break t}if(h!==null){h.return=d,Ve=h;break t}Ve=d}}}var jA={getCacheForType:function(e){var i=Ke(Re),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},qA=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Zt=null,Ot=null,Pt=0,Gt=0,pn=null,mr=!1,Da=!1,$f=!1,ji=0,ue=0,pr=0,Ds=0,Wf=0,Vn=0,Oa=0,il=null,an=null,Zf=!1,Jf=0,ec=1/0,nc=null,gr=null,Be=0,_r=null,Na=null,Ma=0,td=0,ed=null,L_=null,rl=0,nd=null;function gn(){if((Ft&2)!==0&&Pt!==0)return Pt&-Pt;if(H.T!==null){var e=va;return e!==0?e:ud()}return Zi()}function z_(){Vn===0&&(Vn=(Pt&536870912)===0||Bt?fo():536870912);var e=Mn.current;return e!==null&&(e.flags|=32),Vn}function _n(e,i,a){(e===Zt&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)&&(Va(e,0),yr(e,Pt,Vn,!1)),vi(e,a),((Ft&2)===0||e!==Zt)&&(e===Zt&&((Ft&2)===0&&(Ds|=a),ue===4&&yr(e,Pt,Vn,!1)),oi(e))}function B_(e,i,a){if((Ft&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||es(e,i),h=l?GA(e,i):sd(e,i,!0),d=l;do{if(h===0){Da&&!l&&yr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!HA(a)){h=sd(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var E=e;h=il;var w=E.current.memoizedState.isDehydrated;if(w&&(Va(E,v).flags|=256),v=sd(E,v,!1),v!==2){if($f&&!w){E.errorRecoveryDisabledLanes|=d,Ds|=d,h=4;break t}d=an,an=h,d!==null&&(an===null?an=d:an.push.apply(an,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Va(e,0),yr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:yr(l,i,Vn,!mr);break t;case 2:an=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Jf+300-An(),10<h)){if(yr(l,i,Vn,!mr),$s(l,0,!0)!==0)break t;l.timeoutHandle=py(j_.bind(null,l,a,an,nc,Zf,i,Vn,Ds,Oa,mr,d,2,-0,0),h);break t}j_(l,a,an,nc,Zf,i,Vn,Ds,Oa,mr,d,0,-0,0)}}break}while(!0);oi(e)}function j_(e,i,a,l,h,d,v,E,w,L,F,Q,z,B){if(e.timeoutHandle=-1,Q=i.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(hl={stylesheets:null,count:0,unsuspend:bS},U_(i),Q=RS(),Q!==null)){e.cancelPendingCommit=Q(Y_.bind(null,e,i,d,a,l,h,v,E,w,F,1,z,B)),yr(e,d,v,!L);return}Y_(e,i,d,a,l,h,v,E,w)}function HA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!hn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(e,i,a,l){i&=~Wf,i&=~Ds,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Ge(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Kn(e,a,i)}function ic(){return(Ft&6)===0?(sl(0),!1):!0}function id(){if(Ot!==null){if(Gt===0)var e=Ot.return;else e=Ot,Vi=Ss=null,Ef(e),wa=null,Xo=0,e=Ot;for(;e!==null;)E_(e.alternate,e),e=e.return;Ot=null}}function Va(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,oS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),id(),Zt=e,Ot=a=Oi(e.current,null),Pt=i,Gt=0,pn=null,mr=!1,Da=es(e,i),$f=!1,Oa=Vn=Wf=Ds=pr=ue=0,an=il=null,Zf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ge(l),d=1<<h;i|=e[h],l&=~d}return ji=i,wu(),a}function q_(e,i){Rt=null,H.H=Fu,i===Bo||i===Uu?(i=sg(),Gt=3):i===ng?(i=sg(),Gt=4):Gt=i===a_?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pn=i,Ot===null&&(ue=1,Xu(e,Cn(i,e.current)))}function H_(){var e=H.H;return H.H=Fu,e===null?Fu:e}function F_(){var e=H.A;return H.A=jA,e}function rd(){ue=4,mr||(Pt&4194048)!==Pt&&Mn.current!==null||(Da=!0),(pr&134217727)===0&&(Ds&134217727)===0||Zt===null||yr(Zt,Pt,Vn,!1)}function sd(e,i,a){var l=Ft;Ft|=2;var h=H_(),d=F_();(Zt!==e||Pt!==i)&&(nc=null,Va(e,i)),i=!1;var v=ue;t:do try{if(Gt!==0&&Ot!==null){var E=Ot,w=pn;switch(Gt){case 8:id(),v=6;break t;case 3:case 2:case 9:case 6:Mn.current===null&&(i=!0);var L=Gt;if(Gt=0,pn=null,Ua(e,E,w,L),a&&Da){v=0;break t}break;default:L=Gt,Gt=0,pn=null,Ua(e,E,w,L)}}FA(),v=ue;break}catch(F){q_(e,F)}while(!0);return i&&e.shellSuspendCounter++,Vi=Ss=null,Ft=l,H.H=h,H.A=d,Ot===null&&(Zt=null,Pt=0,wu()),v}function FA(){for(;Ot!==null;)G_(Ot)}function GA(e,i){var a=Ft;Ft|=2;var l=H_(),h=F_();Zt!==e||Pt!==i?(nc=null,ec=An()+500,Va(e,i)):Da=es(e,i);t:do try{if(Gt!==0&&Ot!==null){i=Ot;var d=pn;e:switch(Gt){case 1:Gt=0,pn=null,Ua(e,i,d,1);break;case 2:case 9:if(ig(d)){Gt=0,pn=null,K_(i);break}i=function(){Gt!==2&&Gt!==9||Zt!==e||(Gt=7),oi(e)},d.then(i,i);break t;case 3:Gt=7;break t;case 4:Gt=5;break t;case 7:ig(d)?(Gt=0,pn=null,K_(i)):(Gt=0,pn=null,Ua(e,i,d,7));break;case 5:var v=null;switch(Ot.tag){case 26:v=Ot.memoizedState;case 5:case 27:var E=Ot;if(!v||Iy(v)){Gt=0,pn=null;var w=E.sibling;if(w!==null)Ot=w;else{var L=E.return;L!==null?(Ot=L,rc(L)):Ot=null}break e}}Gt=0,pn=null,Ua(e,i,d,5);break;case 6:Gt=0,pn=null,Ua(e,i,d,6);break;case 8:id(),ue=6;break t;default:throw Error(s(462))}}KA();break}catch(F){q_(e,F)}while(!0);return Vi=Ss=null,H.H=l,H.A=h,Ft=a,Ot!==null?0:(Zt=null,Pt=0,wu(),ue)}function KA(){for(;Ot!==null&&!lo();)G_(Ot)}function G_(e){var i=y_(e.alternate,e,ji);e.memoizedProps=e.pendingProps,i===null?rc(e):Ot=i}function K_(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=f_(a,i,i.pendingProps,i.type,void 0,Pt);break;case 11:i=f_(a,i,i.pendingProps,i.type.render,i.ref,Pt);break;case 5:Ef(i);default:E_(a,i),i=Ot=Qp(i,ji),i=y_(a,i,ji)}e.memoizedProps=e.pendingProps,i===null?rc(e):Ot=i}function Ua(e,i,a,l){Vi=Ss=null,Ef(i),wa=null,Xo=0;var h=i.return;try{if(kA(e,h,i,a,Pt)){ue=1,Xu(e,Cn(a,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;ue=1,Xu(e,Cn(a,e.current)),Ot=null;return}i.flags&32768?(Bt||l===1?e=!0:Da||(Pt&536870912)!==0?e=!1:(mr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Mn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Q_(i,e)):rc(i)}function rc(e){var i=e;do{if((i.flags&32768)!==0){Q_(i,mr);return}e=i.return;var a=xA(i.alternate,i,ji);if(a!==null){Ot=a;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);ue===0&&(ue=5)}function Q_(e,i){do{var a=LA(e.alternate,e);if(a!==null){a.flags&=32767,Ot=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=a}while(e!==null);ue=6,Ot=null}function Y_(e,i,a,l,h,d,v,E,w){e.cancelPendingCommit=null;do sc();while(Be!==0);if((Ft&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Yh,po(e,a,d,v,E,w),e===Zt&&(Ot=Zt=null,Pt=0),Na=i,_r=e,Ma=a,td=d,ed=h,L_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$A(Wr,function(){return J_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,h=nt.p,nt.p=2,v=Ft,Ft|=4;try{zA(e,i,a)}finally{Ft=v,nt.p=h,H.T=l}}Be=1,X_(),$_(),W_()}}function X_(){if(Be===1){Be=0;var e=_r,i=Na,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var l=nt.p;nt.p=2;var h=Ft;Ft|=4;try{N_(i,e);var d=_d,v=xp(e.containerInfo),E=d.focusedElem,w=d.selectionRange;if(v!==E&&E&&E.ownerDocument&&Pp(E.ownerDocument.documentElement,E)){if(w!==null&&Hh(E)){var L=w.start,F=w.end;if(F===void 0&&(F=L),"selectionStart"in E)E.selectionStart=L,E.selectionEnd=Math.min(F,E.value.length);else{var Q=E.ownerDocument||document,z=Q&&Q.defaultView||window;if(z.getSelection){var B=z.getSelection(),yt=E.textContent.length,ft=Math.min(w.start,yt),Xt=w.end===void 0?ft:Math.min(w.end,yt);!B.extend&&ft>Xt&&(v=Xt,Xt=ft,ft=v);var U=kp(E,ft),D=kp(E,Xt);if(U&&D&&(B.rangeCount!==1||B.anchorNode!==U.node||B.anchorOffset!==U.offset||B.focusNode!==D.node||B.focusOffset!==D.offset)){var x=Q.createRange();x.setStart(U.node,U.offset),B.removeAllRanges(),ft>Xt?(B.addRange(x),B.extend(D.node,D.offset)):(x.setEnd(D.node,D.offset),B.addRange(x))}}}}for(Q=[],B=E;B=B.parentNode;)B.nodeType===1&&Q.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Q.length;E++){var G=Q[E];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}_c=!!gd,_d=gd=null}finally{Ft=h,nt.p=l,H.T=a}}e.current=i,Be=2}}function $_(){if(Be===2){Be=0;var e=_r,i=Na,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var l=nt.p;nt.p=2;var h=Ft;Ft|=4;try{I_(e,i.alternate,i)}finally{Ft=h,nt.p=l,H.T=a}}Be=3}}function W_(){if(Be===4||Be===3){Be=0,tu();var e=_r,i=Na,a=Ma,l=L_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Be=5:(Be=0,Na=_r=null,Z_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(gr=null),Ws(a),i=i.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(oe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=H.T,h=nt.p,nt.p=2,H.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var E=l[v];d(E.value,{componentStack:E.stack})}}finally{H.T=i,nt.p=h}}(Ma&3)!==0&&sc(),oi(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===nd?rl++:(rl=0,nd=e):rl=0,sl(0)}}function Z_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Lo(i)))}function sc(e){return X_(),$_(),W_(),J_()}function J_(){if(Be!==5)return!1;var e=_r,i=td;td=0;var a=Ws(Ma),l=H.T,h=nt.p;try{nt.p=32>a?32:a,H.T=null,a=ed,ed=null;var d=_r,v=Ma;if(Be=0,Na=_r=null,Ma=0,(Ft&6)!==0)throw Error(s(331));var E=Ft;if(Ft|=4,P_(d.current),V_(d,d.current,v,a),Ft=E,sl(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(oe,d)}catch{}return!0}finally{nt.p=h,H.T=l,Z_(e,i)}}function ty(e,i,a){i=Cn(a,i),i=Uf(e.stateNode,i,2),e=or(e,i,2),e!==null&&(vi(e,2),oi(e))}function $t(e,i,a){if(e.tag===3)ty(e,e,a);else for(;i!==null;){if(i.tag===3){ty(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(gr===null||!gr.has(l))){e=Cn(a,e),a=r_(2),l=or(i,a,2),l!==null&&(s_(a,l,i,e),vi(l,2),oi(l));break}}i=i.return}}function ad(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new qA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||($f=!0,h.add(a),e=QA.bind(null,e,i,a),i.then(e,e))}function QA(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Zt===e&&(Pt&a)===a&&(ue===4||ue===3&&(Pt&62914560)===Pt&&300>An()-Jf?(Ft&2)===0&&Va(e,0):Wf|=a,Oa===Pt&&(Oa=0)),oi(e)}function ey(e,i){i===0&&(i=mo()),e=pa(e,i),e!==null&&(vi(e,i),oi(e))}function YA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),ey(e,a)}function XA(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),ey(e,a)}function $A(e,i){return Xr(e,i)}var ac=null,ka=null,od=!1,oc=!1,ld=!1,Os=0;function oi(e){e!==ka&&e.next===null&&(ka===null?ac=ka=e:ka=ka.next=e),oc=!0,od||(od=!0,ZA())}function sl(e,i){if(!ld&&oc){ld=!0;do for(var a=!1,l=ac;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Ge(42|e)+1)-1,d&=h&~(v&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,sy(l,d))}else d=Pt,d=$s(l,l===Zt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||es(l,d)||(a=!0,sy(l,d));l=l.next}while(a);ld=!1}}function WA(){ny()}function ny(){oc=od=!1;var e=0;Os!==0&&(aS()&&(e=Os),Os=0);for(var i=An(),a=null,l=ac;l!==null;){var h=l.next,d=iy(l,i);d===0?(l.next=null,a===null?ac=h:a.next=h,h===null&&(ka=a)):(a=l,(e!==0||(d&3)!==0)&&(oc=!0)),l=h}sl(e)}function iy(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ge(d),E=1<<v,w=h[v];w===-1?((E&a)===0||(E&l)!==0)&&(h[v]=ho(E,i)):w<=i&&(e.expiredLanes|=E),d&=~E}if(i=Zt,a=Pt,a=$s(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&$r(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||es(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&$r(l),Ws(a)){case 2:case 8:a=Ys;break;case 32:a=Wr;break;case 268435456:a=Xs;break;default:a=Wr}return l=ry.bind(null,e),a=Xr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&$r(l),e.callbackPriority=2,e.callbackNode=null,2}function ry(e,i){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(sc()&&e.callbackNode!==a)return null;var l=Pt;return l=$s(e,e===Zt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(B_(e,l,i),iy(e,An()),e.callbackNode!=null&&e.callbackNode===a?ry.bind(null,e):null)}function sy(e,i){if(sc())return null;B_(e,i,!0)}function ZA(){lS(function(){(Ft&6)!==0?Xr(uo,WA):ny()})}function ud(){return Os===0&&(Os=fo()),Os}function ay(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ia(""+e)}function oy(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function JA(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=ay((h[ge]||null).action),v=l.submitter;v&&(i=(i=v[ge]||null)?ay(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var E=new ra("action","action",null,l,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Os!==0){var w=v?oy(h,v):new FormData(h);Df(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(E.preventDefault(),w=v?oy(h,v):new FormData(h),Df(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var cd=0;cd<Qh.length;cd++){var hd=Qh[cd],tS=hd.toLowerCase(),eS=hd[0].toUpperCase()+hd.slice(1);Ln(tS,"on"+eS)}Ln(Bp,"onAnimationEnd"),Ln(jp,"onAnimationIteration"),Ln(qp,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(yA,"onTransitionRun"),Ln(vA,"onTransitionStart"),Ln(EA,"onTransitionCancel"),Ln(Hp,"onTransitionEnd"),Ti("onMouseEnter",["mouseout","mouseover"]),Ti("onMouseLeave",["mouseout","mouseover"]),Ti("onPointerEnter",["pointerout","pointerover"]),Ti("onPointerLeave",["pointerout","pointerover"]),Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function ly(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var E=l[v],w=E.instance,L=E.currentTarget;if(E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(F){Yu(F)}h.currentTarget=null,d=w}else for(v=0;v<l.length;v++){if(E=l[v],w=E.instance,L=E.currentTarget,E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(F){Yu(F)}h.currentTarget=null,d=w}}}}function Nt(e,i){var a=i[_o];a===void 0&&(a=i[_o]=new Set);var l=e+"__bubble";a.has(l)||(uy(i,e,2,!1),a.add(l))}function fd(e,i,a){var l=0;i&&(l|=4),uy(a,e,l,i)}var lc="_reactListening"+Math.random().toString(36).slice(2);function dd(e){if(!e[lc]){e[lc]=!0,yo.forEach(function(a){a!=="selectionchange"&&(nS.has(a)||fd(a,!1,e),fd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[lc]||(i[lc]=!0,fd("selectionchange",!1,i))}}function uy(e,i,a,l){switch(Vy(i)){case 2:var h=DS;break;case 8:h=OS;break;default:h=Id}a=h.bind(null,i,a,e),h=void 0,!Rn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function md(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var E=l.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=l.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=Ei(E),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){l=d=v;continue t}E=E.parentNode}}l=l.return}cu(function(){var L=d,F=wn(a),Q=[];t:{var z=Fp.get(e);if(z!==void 0){var B=ra,yt=e;switch(e){case"keypress":if(Zn(a)===0)break t;case"keydown":case"keyup":B=ca;break;case"focusin":yt="focus",B=oa;break;case"focusout":yt="blur",B=oa;break;case"beforeblur":case"afterblur":B=oa;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=In;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=zh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=yu;break;case Bp:case jp:case qp:B=la;break;case Hp:B=Eu;break;case"scroll":case"scrollend":B=hu;break;case"wheel":B=ha;break;case"copy":case"cut":case"paste":B=ua;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Oo;break;case"toggle":case"beforetoggle":B=Au}var ft=(i&4)!==0,Xt=!ft&&(e==="scroll"||e==="scrollend"),U=ft?z!==null?z+"Capture":null:z;ft=[];for(var D=L,x;D!==null;){var G=D;if(x=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||x===null||U===null||(G=us(D,U),G!=null&&ft.push(ol(D,G,x))),Xt)break;D=D.return}0<ft.length&&(z=new B(z,yt,null,a,F),Q.push({event:z,listeners:ft}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&a!==bi&&(yt=a.relatedTarget||a.fromElement)&&(Ei(yt)||yt[Sn]))break t;if((B||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,B?(yt=a.relatedTarget||a.toElement,B=L,yt=yt?Ei(yt):null,yt!==null&&(Xt=u(yt),ft=yt.tag,yt!==Xt||ft!==5&&ft!==27&&ft!==6)&&(yt=null)):(B=null,yt=L),B!==yt)){if(ft=In,G="onMouseLeave",U="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(ft=Oo,G="onPointerLeave",U="onPointerEnter",D="pointer"),Xt=B==null?z:Yn(B),x=yt==null?z:Yn(yt),z=new ft(G,D+"leave",B,a,F),z.target=Xt,z.relatedTarget=x,G=null,Ei(F)===L&&(ft=new ft(U,D+"enter",yt,a,F),ft.target=x,ft.relatedTarget=Xt,G=ft),Xt=G,B&&yt)e:{for(ft=B,U=yt,D=0,x=ft;x;x=Pa(x))D++;for(x=0,G=U;G;G=Pa(G))x++;for(;0<D-x;)ft=Pa(ft),D--;for(;0<x-D;)U=Pa(U),x--;for(;D--;){if(ft===U||U!==null&&ft===U.alternate)break e;ft=Pa(ft),U=Pa(U)}ft=null}else ft=null;B!==null&&cy(Q,z,B,ft,!1),yt!==null&&Xt!==null&&cy(Q,Xt,yt,ft,!0)}}t:{if(z=L?Yn(L):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var at=Dp;else if(we(z))if(Op)at=pA;else{at=dA;var Dt=fA}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&So(L.elementType)&&(at=Dp):at=mA;if(at&&(at=at(e,L))){Di(Q,at,a,F);break t}Dt&&Dt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&nr(z,"number",z.value)}switch(Dt=L?Yn(L):window,e){case"focusin":(we(Dt)||Dt.contentEditable==="true")&&(fa=Dt,Fh=L,Vo=null);break;case"focusout":Vo=Fh=fa=null;break;case"mousedown":Gh=!0;break;case"contextmenu":case"mouseup":case"dragend":Gh=!1,Lp(Q,a,F);break;case"selectionchange":if(_A)break;case"keydown":case"keyup":Lp(Q,a,F)}var lt;if(ei)t:{switch(e){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else Ut?j(e,a)&&(pt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(y&&a.locale!=="ko"&&(Ut||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Ut&&(lt=wo()):(Wn=F,ir="value"in Wn?Wn.value:Wn.textContent,Ut=!0)),Dt=uc(L,pt),0<Dt.length&&(pt=new Co(pt,e,null,a,F),Q.push({event:pt,listeners:Dt}),lt?pt.data=lt:(lt=tt(a),lt!==null&&(pt.data=lt)))),(lt=p?be(e,a):kt(e,a))&&(pt=uc(L,"onBeforeInput"),0<pt.length&&(Dt=new Co("onBeforeInput","beforeinput",null,a,F),Q.push({event:Dt,listeners:pt}),Dt.data=lt)),JA(Q,e,L,a,F)}ly(Q,i)})}function ol(e,i,a){return{instance:e,listener:i,currentTarget:a}}function uc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=us(e,a),h!=null&&l.unshift(ol(e,h,d)),h=us(e,i),h!=null&&l.push(ol(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Pa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cy(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var E=a,w=E.alternate,L=E.stateNode;if(E=E.tag,w!==null&&w===l)break;E!==5&&E!==26&&E!==27||L===null||(w=L,h?(L=us(a,d),L!=null&&v.unshift(ol(a,L,w))):h||(L=us(a,d),L!=null&&v.push(ol(a,L,w)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var iS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function hy(e){return(typeof e=="string"?e:""+e).replace(iS,`
`).replace(rS,"")}function fy(e,i){return i=hy(i),hy(e)===i}function cc(){}function Yt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||bn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&bn(e,""+l);break;case"className":Xn(e,"class",l);break;case"tabIndex":Xn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xn(e,a,l);break;case"style":Ao(e,l,d);break;case"data":if(i!=="object"){Xn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ia(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Yt(e,i,"name",h.name,h,null),Yt(e,i,"formEncType",h.formEncType,h,null),Yt(e,i,"formMethod",h.formMethod,h,null),Yt(e,i,"formTarget",h.formTarget,h,null)):(Yt(e,i,"encType",h.encType,h,null),Yt(e,i,"method",h.method,h,null),Yt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ia(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=cc);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ia(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Nt("beforetoggle",e),Nt("toggle",e),er(e,"popover",l);break;case"xlinkActuate":xe(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":xe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":xe(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":xe(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":xe(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":xe(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":xe(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":xe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":xe(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":er(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xh.get(a)||a,er(e,a,l))}}function pd(e,i,a,l,h,d){switch(a){case"style":Ao(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?bn(e,l):(typeof l=="number"||typeof l=="bigint")&&bn(e,""+l);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=cc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[ge]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):er(e,a,l)}}}function je(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",e),Nt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Yt(e,i,d,v,a,null)}}h&&Yt(e,i,"srcSet",a.srcSet,a,null),l&&Yt(e,i,"src",a.src,a,null);return;case"input":Nt("invalid",e);var E=d=v=h=null,w=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var F=a[l];if(F!=null)switch(l){case"name":h=F;break;case"type":v=F;break;case"checked":w=F;break;case"defaultChecked":L=F;break;case"value":d=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:Yt(e,i,l,F,a,null)}}as(e,d,E,w,L,v,h,!1),na(e);return;case"select":Nt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":l=E;default:Yt(e,i,h,E,a,null)}i=d,a=v,e.multiple=!!l,i!=null?Si(e,!!l,i,!1):a!=null&&Si(e,!!l,a,!0);return;case"textarea":Nt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Yt(e,i,v,E,a,null)}os(e,l,h,d),na(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Yt(e,i,w,l,a,null)}return;case"dialog":Nt("beforetoggle",e),Nt("toggle",e),Nt("cancel",e),Nt("close",e);break;case"iframe":case"object":Nt("load",e);break;case"video":case"audio":for(l=0;l<al.length;l++)Nt(al[l],e);break;case"image":Nt("error",e),Nt("load",e);break;case"details":Nt("toggle",e);break;case"embed":case"source":case"link":Nt("error",e),Nt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Yt(e,i,L,l,a,null)}return;default:if(So(i)){for(F in a)a.hasOwnProperty(F)&&(l=a[F],l!==void 0&&pd(e,i,F,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&Yt(e,i,E,l,a,null))}function sS(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,w=null,L=null,F=null;for(B in a){var Q=a[B];if(a.hasOwnProperty(B)&&Q!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=Q;default:l.hasOwnProperty(B)||Yt(e,i,B,null,l,Q)}}for(var z in l){var B=l[z];if(Q=a[z],l.hasOwnProperty(z)&&(B!=null||Q!=null))switch(z){case"type":d=B;break;case"name":h=B;break;case"checked":L=B;break;case"defaultChecked":F=B;break;case"value":v=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==Q&&Yt(e,i,z,B,l,Q)}}cn(e,v,E,w,L,F,d,h);return;case"select":B=v=E=z=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":B=w;default:l.hasOwnProperty(d)||Yt(e,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==w&&Yt(e,i,h,d,l,w)}i=E,a=v,l=B,z!=null?Si(e,!!a,z,!1):!!l!=!!a&&(i!=null?Si(e,!!a,i,!0):Si(e,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Yt(e,i,E,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Yt(e,i,v,h,l,d)}Kt(e,z,B);return;case"option":for(var yt in a)if(z=a[yt],a.hasOwnProperty(yt)&&z!=null&&!l.hasOwnProperty(yt))switch(yt){case"selected":e.selected=!1;break;default:Yt(e,i,yt,null,l,z)}for(w in l)if(z=l[w],B=a[w],l.hasOwnProperty(w)&&z!==B&&(z!=null||B!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Yt(e,i,w,z,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in a)z=a[ft],a.hasOwnProperty(ft)&&z!=null&&!l.hasOwnProperty(ft)&&Yt(e,i,ft,null,l,z);for(L in l)if(z=l[L],B=a[L],l.hasOwnProperty(L)&&z!==B&&(z!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Yt(e,i,L,z,l,B)}return;default:if(So(i)){for(var Xt in a)z=a[Xt],a.hasOwnProperty(Xt)&&z!==void 0&&!l.hasOwnProperty(Xt)&&pd(e,i,Xt,void 0,l,z);for(F in l)z=l[F],B=a[F],!l.hasOwnProperty(F)||z===B||z===void 0&&B===void 0||pd(e,i,F,z,l,B);return}}for(var U in a)z=a[U],a.hasOwnProperty(U)&&z!=null&&!l.hasOwnProperty(U)&&Yt(e,i,U,null,l,z);for(Q in l)z=l[Q],B=a[Q],!l.hasOwnProperty(Q)||z===B||z==null&&B==null||Yt(e,i,Q,z,l,B)}var gd=null,_d=null;function hc(e){return e.nodeType===9?e:e.ownerDocument}function dy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function my(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function yd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var vd=null;function aS(){var e=window.event;return e&&e.type==="popstate"?e===vd?!1:(vd=e,!0):(vd=null,!1)}var py=typeof setTimeout=="function"?setTimeout:void 0,oS=typeof clearTimeout=="function"?clearTimeout:void 0,gy=typeof Promise=="function"?Promise:void 0,lS=typeof queueMicrotask=="function"?queueMicrotask:typeof gy<"u"?function(e){return gy.resolve(null).then(e).catch(uS)}:py;function uS(e){setTimeout(function(){throw e})}function vr(e){return e==="head"}function _y(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&ll(v.documentElement),a&2&&ll(v.body),a&4)for(a=v.head,ll(a),v=a.firstChild;v;){var E=v.nextSibling,w=v.nodeName;v[ns]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(h===0){e.removeChild(d),gl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);gl(i)}function Ed(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ed(a),tr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function cS(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ns])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Bn(e.nextSibling),e===null)break}return null}function hS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Bn(e.nextSibling),e===null))return null;return e}function Td(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function fS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Bn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Ad=null;function yy(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function vy(e,i,a){switch(i=hc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ll(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);tr(e)}var Un=new Map,Ey=new Set;function fc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qi=nt.d;nt.d={f:dS,r:mS,D:pS,C:gS,L:_S,m:yS,X:ES,S:vS,M:TS};function dS(){var e=qi.f(),i=ic();return e||i}function mS(e){var i=Qn(e);i!==null&&i.tag===5&&i.type==="form"?Bg(i):qi.r(e)}var xa=typeof document>"u"?null:document;function Ty(e,i,a){var l=xa;if(l&&typeof i=="string"&&i){var h=_e(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Ey.has(h)||(Ey.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),je(i,"link",e),fe(i),l.head.appendChild(i)))}}function pS(e){qi.D(e),Ty("dns-prefetch",e,null)}function gS(e,i){qi.C(e,i),Ty("preconnect",e,i)}function _S(e,i,a){qi.L(e,i,a);var l=xa;if(l&&e&&i){var h='link[rel="preload"][as="'+_e(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+_e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+_e(a.imageSizes)+'"]')):h+='[href="'+_e(e)+'"]';var d=h;switch(i){case"style":d=La(e);break;case"script":d=za(e)}Un.has(d)||(e=T({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Un.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(ul(d))||i==="script"&&l.querySelector(cl(d))||(i=l.createElement("link"),je(i,"link",e),fe(i),l.head.appendChild(i)))}}function yS(e,i){qi.m(e,i);var a=xa;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+_e(l)+'"][href="'+_e(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=za(e)}if(!Un.has(d)&&(e=T({rel:"modulepreload",href:e},i),Un.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(cl(d)))return}l=a.createElement("link"),je(l,"link",e),fe(l),a.head.appendChild(l)}}}function vS(e,i,a){qi.S(e,i,a);var l=xa;if(l&&e){var h=Ze(l).hoistableStyles,d=La(e);i=i||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=l.querySelector(ul(d)))E.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Un.get(d))&&Sd(e,a);var w=v=l.createElement("link");fe(w),je(w,"link",e),w._p=new Promise(function(L,F){w.onload=L,w.onerror=F}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,dc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function ES(e,i){qi.X(e,i);var a=xa;if(a&&e){var l=Ze(a).hoistableScripts,h=za(e),d=l.get(h);d||(d=a.querySelector(cl(h)),d||(e=T({src:e,async:!0},i),(i=Un.get(h))&&bd(e,i),d=a.createElement("script"),fe(d),je(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function TS(e,i){qi.M(e,i);var a=xa;if(a&&e){var l=Ze(a).hoistableScripts,h=za(e),d=l.get(h);d||(d=a.querySelector(cl(h)),d||(e=T({src:e,async:!0,type:"module"},i),(i=Un.get(h))&&bd(e,i),d=a.createElement("script"),fe(d),je(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Ay(e,i,a,l){var h=(h=Tt.current)?fc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=La(a.href),a=Ze(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=La(a.href);var d=Ze(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(ul(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Un.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Un.set(e,a),d||AS(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=za(a),a=Ze(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function La(e){return'href="'+_e(e)+'"'}function ul(e){return'link[rel="stylesheet"]['+e+"]"}function Sy(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function AS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),je(i,"link",a),fe(i),e.head.appendChild(i))}function za(e){return'[src="'+_e(e)+'"]'}function cl(e){return"script[async]"+e}function by(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+_e(a.href)+'"]');if(l)return i.instance=l,fe(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),fe(l),je(l,"style",h),dc(l,a.precedence,e),i.instance=l;case"stylesheet":h=La(a.href);var d=e.querySelector(ul(h));if(d)return i.state.loading|=4,i.instance=d,fe(d),d;l=Sy(a),(h=Un.get(h))&&Sd(l,h),d=(e.ownerDocument||e).createElement("link"),fe(d);var v=d;return v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),je(d,"link",l),i.state.loading|=4,dc(d,a.precedence,e),i.instance=d;case"script":return d=za(a.src),(h=e.querySelector(cl(d)))?(i.instance=h,fe(h),h):(l=a,(h=Un.get(d))&&(l=T({},a),bd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),fe(h),je(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,dc(l,a.precedence,e));return i.instance}function dc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var E=l[v];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Sd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function bd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var mc=null;function wy(e,i,a){if(mc===null){var l=new Map,h=mc=new Map;h.set(a,l)}else h=mc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[ns]||d[Se]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var E=l.get(v);E?E.push(d):l.set(v,[d])}}return l}function Ry(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function SS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Iy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var hl=null;function bS(){}function wS(e,i,a){if(hl===null)throw Error(s(475));var l=hl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=La(a.href),d=e.querySelector(ul(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=pc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,fe(d);return}d=e.ownerDocument||e,a=Sy(a),(h=Un.get(h))&&Sd(a,h),d=d.createElement("link"),fe(d);var v=d;v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),je(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=pc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function RS(){if(hl===null)throw Error(s(475));var e=hl;return e.stylesheets&&e.count===0&&wd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&wd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function pc(){if(this.count--,this.count===0){if(this.stylesheets)wd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gc=null;function wd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gc=new Map,i.forEach(IS,e),gc=null,pc.call(e))}function IS(e,i){if(!(i.state.loading&4)){var a=gc.get(e);if(a)var l=a.get(null);else{a=new Map,gc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=pc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var fl={$$typeof:ot,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function CS(e,i,a,l,h,d,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.hiddenUpdates=yi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Cy(e,i,a,l,h,d,v,E,w,L,F,Q){return e=new CS(e,i,a,v,E,w,L,Q),i=1,d===!0&&(i|=24),d=fn(3,null,null,i),e.current=d,d.stateNode=e,i=af(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},cf(d),e}function Dy(e){return e?(e=ga,e):ga}function Oy(e,i,a,l,h,d){h=Dy(h),l.context===null?l.context=h:l.pendingContext=h,l=ar(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=or(e,l,i),a!==null&&(_n(a,e,i),qo(a,e,i))}function Ny(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Rd(e,i){Ny(e,i),(e=e.alternate)&&Ny(e,i)}function My(e){if(e.tag===13){var i=pa(e,67108864);i!==null&&_n(i,e,67108864),Rd(e,67108864)}}var _c=!0;function DS(e,i,a,l){var h=H.T;H.T=null;var d=nt.p;try{nt.p=2,Id(e,i,a,l)}finally{nt.p=d,H.T=h}}function OS(e,i,a,l){var h=H.T;H.T=null;var d=nt.p;try{nt.p=8,Id(e,i,a,l)}finally{nt.p=d,H.T=h}}function Id(e,i,a,l){if(_c){var h=Cd(l);if(h===null)md(e,i,l,yc,a),Uy(e,l);else if(MS(h,e,i,a,l))l.stopPropagation();else if(Uy(e,l),i&4&&-1<NS.indexOf(e)){for(;h!==null;){var d=Qn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=kn(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var w=1<<31-Ge(v);E.entanglements[1]|=w,v&=~w}oi(d),(Ft&6)===0&&(ec=An()+500,sl(0))}}break;case 13:E=pa(d,2),E!==null&&_n(E,d,2),ic(),Rd(d,2)}if(d=Cd(l),d===null&&md(e,i,l,yc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else md(e,i,l,null,a)}}function Cd(e){return e=wn(e),Dd(e)}var yc=null;function Dd(e){if(yc=null,e=Ei(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return yc=e,null}function Vy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nh()){case uo:return 2;case Ys:return 8;case Wr:case Mh:return 32;case Xs:return 268435456;default:return 32}default:return 32}}var Od=!1,Er=null,Tr=null,Ar=null,dl=new Map,ml=new Map,Sr=[],NS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Uy(e,i){switch(e){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":dl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(i.pointerId)}}function pl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Qn(i),i!==null&&My(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function MS(e,i,a,l,h){switch(i){case"focusin":return Er=pl(Er,e,i,a,l,h),!0;case"dragenter":return Tr=pl(Tr,e,i,a,l,h),!0;case"mouseover":return Ar=pl(Ar,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return dl.set(d,pl(dl.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,ml.set(d,pl(ml.get(d)||null,e,i,a,l,h)),!0}return!1}function ky(e){var i=Ei(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,iu(e.priority,function(){if(a.tag===13){var l=gn();l=Wi(l);var h=pa(a,l);h!==null&&_n(h,a,l),Rd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Cd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);bi=l,a.target.dispatchEvent(l),bi=null}else return i=Qn(a),i!==null&&My(i),e.blockedOn=a,!1;i.shift()}return!0}function Py(e,i,a){vc(e)&&a.delete(i)}function VS(){Od=!1,Er!==null&&vc(Er)&&(Er=null),Tr!==null&&vc(Tr)&&(Tr=null),Ar!==null&&vc(Ar)&&(Ar=null),dl.forEach(Py),ml.forEach(Py)}function Ec(e,i){e.blockedOn===i&&(e.blockedOn=null,Od||(Od=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,VS)))}var Tc=null;function xy(e){Tc!==e&&(Tc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Tc===e&&(Tc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Dd(l||a)===null)continue;break}var d=Qn(a);d!==null&&(e.splice(i,3),i-=3,Df(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function gl(e){function i(w){return Ec(w,e)}Er!==null&&Ec(Er,e),Tr!==null&&Ec(Tr,e),Ar!==null&&Ec(Ar,e),dl.forEach(i),ml.forEach(i);for(var a=0;a<Sr.length;a++){var l=Sr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)ky(a),a.blockedOn===null&&Sr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[ge]||null;if(typeof d=="function")v||xy(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[ge]||null)E=v.formAction;else if(Dd(h)!==null)continue}else E=v.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),xy(a)}}}function Nd(e){this._internalRoot=e}Ac.prototype.render=Nd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=gn();Oy(a,l,e,i,null,null)},Ac.prototype.unmount=Nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Oy(e.current,2,null,e,null,null),ic(),i[Sn]=null}};function Ac(e){this._internalRoot=e}Ac.prototype.unstable_scheduleHydration=function(e){if(e){var i=Zi();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Sr.length&&i!==0&&i<Sr[a].priority;a++);Sr.splice(a,0,e),a===0&&ky(e)}};var Ly=t.version;if(Ly!=="19.1.0")throw Error(s(527,Ly,"19.1.0"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var US={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{oe=Sc.inject(US),Ht=Sc}catch{}}return yl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=t_,d=e_,v=n_,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=Cy(e,1,!1,null,null,a,l,h,d,v,E,null),e[Sn]=i.current,dd(e),new Nd(i)},yl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=t_,v=e_,E=n_,w=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=Cy(e,1,!0,i,a??null,l,h,d,v,E,w,L),i.context=Dy(null),a=i.current,l=gn(),l=Wi(l),h=ar(l),h.callback=null,or(a,h,l),a=l,i.current.lanes=a,vi(i,a),oi(i),e[Sn]=i.current,dd(e),new Ac(i)},yl.version="19.1.0",yl}var Yy;function FS(){if(Yy)return Ud.exports;Yy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ud.exports=HS(),Ud.exports}var GS=FS();const KS=()=>{};var Xy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},QS=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(g>>10)),t[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},DE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,T=u>>2,b=(u&3)<<4|m>>4;let O=(m&15)<<2|_>>6,q=_&63;g||(q=64,f||(O=64)),s.push(n[T],n[b],n[O],n[q])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(CE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):QS(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const _=o<r.length?n[r.charAt(o)]:64;++o;const b=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||b==null)throw new YS;const O=u<<2|m>>4;if(s.push(O),_!==64){const q=m<<4&240|_>>2;if(s.push(q),b!==64){const K=_<<6&192|b;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class YS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XS=function(r){const t=CE(r);return DE.encodeByteArray(t,!0)},Fc=function(r){return XS(r).replace(/\./g,"")},OE=function(r){try{return DE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=()=>$S().__FIREBASE_DEFAULTS__,ZS=()=>{if(typeof process>"u"||typeof Xy>"u")return;const r=Xy.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},JS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&OE(r[1]);return t&&JSON.parse(t)},uh=()=>{try{return KS()||WS()||ZS()||JS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},NE=r=>{var t,n;return(n=(t=uh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},ME=r=>{const t=NE(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},VE=()=>{var r;return(r=uh())===null||r===void 0?void 0:r.config},UE=r=>{var t;return(t=uh())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Fc(JSON.stringify(n)),Fc(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function nb(){var r;const t=(r=uh())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ib(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rb(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function sb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ab(){const r=We();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function ob(){return!nb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lb(){try{return typeof indexedDB=="object"}catch{return!1}}function ub(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="FirebaseError";class gi extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=cb,Object.setPrototypeOf(this,gi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ql.prototype.create)}}class ql{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?hb(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new gi(o,m,s)}}function hb(r,t){return r.replace(fb,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const fb=/\{\$([^}]+)}/g;function db(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function ks(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if($y(u)&&$y(f)){if(!ks(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function $y(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function El(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function Tl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function mb(r,t){const n=new pb(r,t);return n.subscribe.bind(n)}class pb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gb(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Ld),o.error===void 0&&(o.error=Ld),o.complete===void 0&&(o.complete=Ld);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gb(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Ld(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(r){return r&&r._delegate?r._delegate:r}class xr{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new tb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(vb(t))try{this.getOrInitializeService({instanceIdentifier:Ns})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Ns){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ns){return this.instances.has(t)}getOptions(t=Ns){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&t(f,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yb(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ns){return this.component?this.component.multipleInstances?t:Ns:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yb(r){return r===Ns?void 0:r}function vb(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new _b(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Mt||(Mt={}));const Tb={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},Ab=Mt.INFO,Sb={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},bb=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=Sb[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Cm{constructor(t){this.name=t,this._logLevel=Ab,this._logHandler=bb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Mt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Tb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...t),this._logHandler(this,Mt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...t),this._logHandler(this,Mt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...t),this._logHandler(this,Mt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...t),this._logHandler(this,Mt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...t),this._logHandler(this,Mt.ERROR,...t)}}const wb=(r,t)=>t.some(n=>r instanceof n);let Wy,Zy;function Rb(){return Wy||(Wy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ib(){return Zy||(Zy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const PE=new WeakMap,Wd=new WeakMap,xE=new WeakMap,zd=new WeakMap,Dm=new WeakMap;function Cb(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Mr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&PE.set(n,r)}).catch(()=>{}),Dm.set(t,r),t}function Db(r){if(Wd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Wd.set(r,t)}let Zd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Wd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||xE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Ob(r){Zd=r(Zd)}function Nb(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Bd(this),t,...n);return xE.set(s,t.sort?t.sort():[t]),Mr(s)}:Ib().includes(r)?function(...t){return r.apply(Bd(this),t),Mr(PE.get(this))}:function(...t){return Mr(r.apply(Bd(this),t))}}function Mb(r){return typeof r=="function"?Nb(r):(r instanceof IDBTransaction&&Db(r),wb(r,Rb())?new Proxy(r,Zd):r)}function Mr(r){if(r instanceof IDBRequest)return Cb(r);if(zd.has(r))return zd.get(r);const t=Mb(r);return t!==r&&(zd.set(r,t),Dm.set(t,r)),t}const Bd=r=>Dm.get(r);function Vb(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),m=Mr(f);return s&&f.addEventListener("upgradeneeded",g=>{s(Mr(f.result),g.oldVersion,g.newVersion,Mr(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const Ub=["get","getKey","getAll","getAllKeys","count"],kb=["put","add","delete","clear"],jd=new Map;function Jy(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(jd.get(t))return jd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=kb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Ub.includes(n)))return;const u=async function(f,...m){const g=this.transaction(f,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[n](...m),o&&g.done]))[0]};return jd.set(t,u),u}Ob(r=>({...r,get:(t,n,s)=>Jy(t,n)||r.get(t,n,s),has:(t,n)=>!!Jy(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xb(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jd="@firebase/app",tv="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new Cm("@firebase/app"),Lb="@firebase/app-compat",zb="@firebase/analytics-compat",Bb="@firebase/analytics",jb="@firebase/app-check-compat",qb="@firebase/app-check",Hb="@firebase/auth",Fb="@firebase/auth-compat",Gb="@firebase/database",Kb="@firebase/data-connect",Qb="@firebase/database-compat",Yb="@firebase/functions",Xb="@firebase/functions-compat",$b="@firebase/installations",Wb="@firebase/installations-compat",Zb="@firebase/messaging",Jb="@firebase/messaging-compat",tw="@firebase/performance",ew="@firebase/performance-compat",nw="@firebase/remote-config",iw="@firebase/remote-config-compat",rw="@firebase/storage",sw="@firebase/storage-compat",aw="@firebase/firestore",ow="@firebase/vertexai",lw="@firebase/firestore-compat",uw="firebase",cw="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="[DEFAULT]",hw={[Jd]:"fire-core",[Lb]:"fire-core-compat",[Bb]:"fire-analytics",[zb]:"fire-analytics-compat",[qb]:"fire-app-check",[jb]:"fire-app-check-compat",[Hb]:"fire-auth",[Fb]:"fire-auth-compat",[Gb]:"fire-rtdb",[Kb]:"fire-data-connect",[Qb]:"fire-rtdb-compat",[Yb]:"fire-fn",[Xb]:"fire-fn-compat",[$b]:"fire-iid",[Wb]:"fire-iid-compat",[Zb]:"fire-fcm",[Jb]:"fire-fcm-compat",[tw]:"fire-perf",[ew]:"fire-perf-compat",[nw]:"fire-rc",[iw]:"fire-rc-compat",[rw]:"fire-gcs",[sw]:"fire-gcs-compat",[aw]:"fire-fst",[lw]:"fire-fst-compat",[ow]:"fire-vertex","fire-js":"fire-js",[uw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new Map,fw=new Map,em=new Map;function ev(r,t){try{r.container.addComponent(t)}catch(n){Ki.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function Ps(r){const t=r.name;if(em.has(t))return Ki.debug(`There were multiple attempts to register component ${t}.`),!1;em.set(t,r);for(const n of Gc.values())ev(n,r);for(const n of fw.values())ev(n,r);return!0}function ch(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function yn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vr=new ql("app","Firebase",dw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=cw;function LE(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:tm,automaticDataCollectionEnabled:!1},t),o=s.name;if(typeof o!="string"||!o)throw Vr.create("bad-app-name",{appName:String(o)});if(n||(n=VE()),!n)throw Vr.create("no-options");const u=Gc.get(o);if(u){if(ks(n,u.options)&&ks(s,u.config))return u;throw Vr.create("duplicate-app",{appName:o})}const f=new Eb(o);for(const g of em.values())f.addComponent(g);const m=new mw(n,s,f);return Gc.set(o,m),m}function Om(r=tm){const t=Gc.get(r);if(!t&&r===tm&&VE())return LE();if(!t)throw Vr.create("no-app",{appName:r});return t}function ci(r,t,n){var s;let o=(s=hw[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${t}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ki.warn(m.join(" "));return}Ps(new xr(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="firebase-heartbeat-database",gw=1,Nl="firebase-heartbeat-store";let qd=null;function zE(){return qd||(qd=Vb(pw,gw,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Nl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Vr.create("idb-open",{originalErrorMessage:r.message})})),qd}async function _w(r){try{const n=(await zE()).transaction(Nl),s=await n.objectStore(Nl).get(BE(r));return await n.done,s}catch(t){if(t instanceof gi)Ki.warn(t.message);else{const n=Vr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ki.warn(n.message)}}}async function nv(r,t){try{const s=(await zE()).transaction(Nl,"readwrite");await s.objectStore(Nl).put(t,BE(r)),await s.done}catch(n){if(n instanceof gi)Ki.warn(n.message);else{const s=Vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ki.warn(s.message)}}}function BE(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=1024,vw=30;class Ew{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Aw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=iv();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>vw){const f=Sw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ki.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=iv(),{heartbeatsToSend:s,unsentEntries:o}=Tw(this._heartbeatsCache.heartbeats),u=Fc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Ki.warn(n),""}}}function iv(){return new Date().toISOString().substring(0,10)}function Tw(r,t=yw){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),rv(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),rv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Aw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lb()?ub().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _w(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return nv(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return nv(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function rv(r){return Fc(JSON.stringify({version:2,heartbeats:r})).length}function Sw(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(r){Ps(new xr("platform-logger",t=>new Pb(t),"PRIVATE")),Ps(new xr("heartbeat",t=>new Ew(t),"PRIVATE")),ci(Jd,tv,r),ci(Jd,tv,"esm2017"),ci("fire-js","")}bw("");function Nm(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function jE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ww=jE,qE=new ql("auth","Firebase",jE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new Cm("@firebase/auth");function Rw(r,...t){Kc.logLevel<=Mt.WARN&&Kc.warn(`Auth (${Hs}): ${r}`,...t)}function Vc(r,...t){Kc.logLevel<=Mt.ERROR&&Kc.error(`Auth (${Hs}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(r,...t){throw Mm(r,...t)}function hi(r,...t){return Mm(r,...t)}function HE(r,t,n){const s=Object.assign(Object.assign({},ww()),{[t]:n});return new ql("auth","Firebase",s).create(t,{appName:r.name})}function Gi(r){return HE(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mm(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return qE.create(r,...t)}function gt(r,t,...n){if(!r)throw Mm(t,...n)}function Hi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Vc(t),new Error(t)}function Qi(r,t){r||Hi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Iw(){return sv()==="http:"||sv()==="https:"}function sv(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Iw()||rb()||"connection"in navigator)?navigator.onLine:!0}function Dw(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,n){this.shortDelay=t,this.longDelay=n,Qi(n>t,"Short delay should be less than long delay!"),this.isMobile=eb()||sb()}get(){return Cw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(r,t){Qi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Mw=new Fl(3e4,6e4);function Fr(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Gr(r,t,n,s,o={}){return GE(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const m=Hl(Object.assign({key:r.config.apiKey},f)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:t,headers:g},u);return ib()||(_.referrerPolicy="no-referrer"),FE.fetch()(await KE(r,r.config.apiHost,n,m),_)})}async function GE(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ow),t);try{const o=new Uw(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw bc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw bc(r,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw bc(r,"email-already-in-use",f);if(g==="USER_DISABLED")throw bc(r,"user-disabled",f);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw HE(r,T,_);Hn(r,T)}}catch(o){if(o instanceof gi)throw o;Hn(r,"network-request-failed",{message:String(o)})}}async function Gl(r,t,n,s,o={}){const u=await Gr(r,t,n,s,o);return"mfaPendingCredential"in u&&Hn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function KE(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?Vm(r.config,o):`${r.config.apiScheme}://${o}`;return Nw.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function Vw(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Uw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(hi(this.auth,"network-request-failed")),Mw.get())})}}function bc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=hi(r,t,s);return o.customData._tokenResponse=n,o}function av(r){return r!==void 0&&r.enterprise!==void 0}class kw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Vw(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Pw(r,t){return Gr(r,"GET","/v2/recaptchaConfig",Fr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(r,t){return Gr(r,"POST","/v1/accounts:delete",t)}async function Qc(r,t){return Gr(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Lw(r,t=!1){const n=re(r),s=await n.getIdToken(t),o=Um(s);gt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:wl(Hd(o.auth_time)),issuedAtTime:wl(Hd(o.iat)),expirationTime:wl(Hd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Hd(r){return Number(r)*1e3}function Um(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Vc("JWT malformed, contained fewer than 3 sections"),null;try{const o=OE(n);return o?JSON.parse(o):(Vc("Failed to decode base64 JWT payload"),null)}catch(o){return Vc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ov(r){const t=Um(r);return gt(t,"internal-error"),gt(typeof t.exp<"u","internal-error"),gt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof gi&&zw(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function zw({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wl(this.lastLoginAt),this.creationTime=wl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yc(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Ml(r,Qc(n,{idToken:s}));gt(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?QE(u.providerUserInfo):[],m=qw(r.providerData,f),g=r.isAnonymous,_=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),T=g?_:!1,b={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new im(u.createdAt,u.lastLoginAt),isAnonymous:T};Object.assign(r,b)}async function jw(r){const t=re(r);await Yc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function qw(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function QE(r){return r.map(t=>{var{providerId:n}=t,s=Nm(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hw(r,t){const n=await GE(r,{},async()=>{const s=Hl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await KE(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",FE.fetch()(f,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Fw(r,t){return Gr(r,"POST","/v2/accounts:revokeToken",Fr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){gt(t.idToken,"internal-error"),gt(typeof t.idToken<"u","internal-error"),gt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ov(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){gt(t.length!==0,"internal-error");const n=ov(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(gt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await Hw(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Ga;return s&&(gt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(gt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(gt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ga,this.toJSON())}_performRefresh(){return Hi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(r,t){gt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class jn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,u=Nm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new im(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await Ml(this,this.stsTokenManager.getToken(this.auth,t));return gt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Lw(this,t)}reload(){return jw(this)}_assign(t){this!==t&&(gt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new jn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){gt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Yc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(Gi(this.auth));const t=await this.getIdToken();return await Ml(this,xw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,u,f,m,g,_,T;const b=(s=n.displayName)!==null&&s!==void 0?s:void 0,O=(o=n.email)!==null&&o!==void 0?o:void 0,q=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,K=(f=n.photoURL)!==null&&f!==void 0?f:void 0,et=(m=n.tenantId)!==null&&m!==void 0?m:void 0,W=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,Et=(_=n.createdAt)!==null&&_!==void 0?_:void 0,dt=(T=n.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:ot,emailVerified:_t,isAnonymous:mt,providerData:wt,stsTokenManager:M}=n;gt(ot&&M,t,"internal-error");const S=Ga.fromJSON(this.name,M);gt(typeof ot=="string",t,"internal-error"),wr(b,t.name),wr(O,t.name),gt(typeof _t=="boolean",t,"internal-error"),gt(typeof mt=="boolean",t,"internal-error"),wr(q,t.name),wr(K,t.name),wr(et,t.name),wr(W,t.name),wr(Et,t.name),wr(dt,t.name);const R=new jn({uid:ot,auth:t,email:O,emailVerified:_t,displayName:b,isAnonymous:mt,photoURL:K,phoneNumber:q,tenantId:et,stsTokenManager:S,createdAt:Et,lastLoginAt:dt});return wt&&Array.isArray(wt)&&(R.providerData=wt.map(N=>Object.assign({},N))),W&&(R._redirectEventId=W),R}static async _fromIdTokenResponse(t,n,s=!1){const o=new Ga;o.updateFromServerResponse(n);const u=new jn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await Yc(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];gt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?QE(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Ga;m.updateFromIdToken(s);const g=new jn({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:f}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new im(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=new Map;function Fi(r){Qi(r instanceof Function,"Expected a class definition");let t=lv.get(r);return t?(Qi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,lv.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}YE.type="NONE";const uv=YE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(r,t,n){return`firebase:${r}:${t}:${n}`}class Ka{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Uc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Uc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Qc(this.auth,{idToken:t}).catch(()=>{});return n?jn._fromGetAccountInfoResponse(this.auth,n,t):null}return jn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Ka(Fi(uv),t,s);const o=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Fi(uv);const f=Uc(s,t.config.apiKey,t.name);let m=null;for(const _ of n)try{const T=await _._get(f);if(T){let b;if(typeof T=="string"){const O=await Qc(t,{idToken:T}).catch(()=>{});if(!O)break;b=await jn._fromGetAccountInfoResponse(t,O,T)}else b=jn._fromJSON(t,T);_!==u&&(m=b),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Ka(u,t,s):(u=g[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async _=>{if(_!==u)try{await _._remove(f)}catch{}})),new Ka(u,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ZE(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(XE(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(tT(t))return"Blackberry";if(eT(t))return"Webos";if($E(t))return"Safari";if((t.includes("chrome/")||WE(t))&&!t.includes("edge/"))return"Chrome";if(JE(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function XE(r=We()){return/firefox\//i.test(r)}function $E(r=We()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function WE(r=We()){return/crios\//i.test(r)}function ZE(r=We()){return/iemobile/i.test(r)}function JE(r=We()){return/android/i.test(r)}function tT(r=We()){return/blackberry/i.test(r)}function eT(r=We()){return/webos/i.test(r)}function km(r=We()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Gw(r=We()){var t;return km(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Kw(){return ab()&&document.documentMode===10}function nT(r=We()){return km(r)||JE(r)||eT(r)||tT(r)||/windows phone/i.test(r)||ZE(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(r,t=[]){let n;switch(r){case"Browser":n=cv(We());break;case"Worker":n=`${cv(We())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,m)=>{try{const g=t(u);f(g)}catch(g){m(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(r,t={}){return Gr(r,"GET","/v2/passwordPolicy",Fr(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=6;class $w{constructor(t){var n,s,o,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:Xw,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,u,f,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,g),this.validatePasswordCharacterOptions(t,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(f=g.containsNumericCharacter)!==null&&f!==void 0?f:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hv(this),this.idTokenSubscription=new hv(this),this.beforeStateQueue=new Qw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Fi(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Ka.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Qc(this,{idToken:t}),s=await jn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(yn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(t);(!f||f===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return gt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Yc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Dw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(yn(this.app))return Promise.reject(Gi(this));const n=t?re(t):null;return n&&gt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&gt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(Gi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return yn(this.app)?Promise.reject(Gi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Yw(this),n=new $w(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new ql("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Fw(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Fi(t)||this._popupRedirectResolver;gt(n,this,"argument-error"),this.redirectPersistenceManager=await Ka.create(this,[Fi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(gt(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=t.addObserver(n,s,o);return()=>{f=!0,g()}}else{const g=t.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return gt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=iT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Rw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fs(r){return re(r)}class hv{constructor(t){this.auth=t,this.observer=null,this.addObserver=mb(n=>this.observer=n)}get next(){return gt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zw(r){hh=r}function rT(r){return hh.loadJS(r)}function Jw(){return hh.recaptchaEnterpriseScript}function tR(){return hh.gapiScript}function eR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class nR{constructor(){this.enterprise=new iR}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class iR{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const rR="recaptcha-enterprise",sT="NO_RECAPTCHA";class sR{constructor(t){this.type=rR,this.auth=Fs(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{Pw(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new kw(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,f(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,f,m){const g=window.grecaptcha;av(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:t}).then(_=>{f(_)}).catch(()=>{f(sT)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nR().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&av(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=Jw();g.length!==0&&(g+=m),rT(g).then(()=>{o(m,u,f)}).catch(_=>{f(_)})}}).catch(m=>{f(m)})})}}async function fv(r,t,n,s=!1,o=!1){const u=new sR(r);let f;if(o)f=sT;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function rm(r,t,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await fv(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await fv(r,t,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(r,t){const n=ch(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(ks(u,t??{}))return o;Hn(o,"already-initialized")}return n.initialize({options:t})}function oR(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Fi);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function lR(r,t,n){const s=Fs(r);gt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=aT(t),{host:f,port:m}=uR(t),g=m===null?"":`:${m}`,_={url:`${u}//${f}${g}/`},T=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){gt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),gt(ks(_,s.config.emulator)&&ks(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,cR()}function aT(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function uR(r){const t=aT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:dv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:dv(f)}}}function dv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function cR(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Hi("not implemented")}_getIdTokenResponse(t){return Hi("not implemented")}_linkToIdToken(t,n){return Hi("not implemented")}_getReauthenticationResolver(t){return Hi("not implemented")}}async function hR(r,t){return Gr(r,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(r,t){return Gl(r,"POST","/v1/accounts:signInWithPassword",Fr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(r,t){return Gl(r,"POST","/v1/accounts:signInWithEmailLink",Fr(r,t))}async function mR(r,t){return Gl(r,"POST","/v1/accounts:signInWithEmailLink",Fr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends Pm{constructor(t,n,s,o=null){super("password",s),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new Vl(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Vl(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rm(t,n,"signInWithPassword",fR);case"emailLink":return dR(t,{email:this._email,oobCode:this._password});default:Hn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rm(t,s,"signUpPassword",hR);case"emailLink":return mR(t,{idToken:n,email:this._email,oobCode:this._password});default:Hn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(r,t){return Gl(r,"POST","/v1/accounts:signInWithIdp",Fr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="http://localhost";class xs extends Pm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,u=Nm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new xs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Qa(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Qa(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Qa(t,n)}buildRequest(){const t={requestUri:pR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Hl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _R(r){const t=El(Tl(r)).link,n=t?El(Tl(t)).deep_link_id:null,s=El(Tl(r)).deep_link_id;return(s?El(Tl(s)).link:null)||s||n||t||r}class xm{constructor(t){var n,s,o,u,f,m;const g=El(Tl(t)),_=(n=g.apiKey)!==null&&n!==void 0?n:null,T=(s=g.oobCode)!==null&&s!==void 0?s:null,b=gR((o=g.mode)!==null&&o!==void 0?o:null);gt(_&&T&&b,"argument-error"),this.apiKey=_,this.operation=b,this.code=T,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=g.languageCode)!==null&&f!==void 0?f:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(t){const n=_R(t);try{return new xm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.providerId=no.PROVIDER_ID}static credential(t,n){return Vl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=xm.parseLink(n);return gt(s,"argument-error"),Vl._fromEmailAndCode(t,s.code,s.tenantId)}}no.PROVIDER_ID="password";no.EMAIL_PASSWORD_SIGN_IN_METHOD="password";no.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends oT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Kl{constructor(){super("facebook.com")}static credential(t){return xs._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rr.credentialFromTaggedObject(t)}static credentialFromError(t){return Rr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rr.credential(t.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Kl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xs._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ir.credentialFromTaggedObject(t)}static credentialFromError(t){return Ir.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Ir.credential(n,s)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Kl{constructor(){super("github.com")}static credential(t){return xs._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Cr.credentialFromTaggedObject(t)}static credentialFromError(t){return Cr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Cr.credential(t.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Kl{constructor(){super("twitter.com")}static credential(t,n){return xs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Dr.credentialFromTaggedObject(t)}static credentialFromError(t){return Dr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Dr.credential(n,s)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(r,t){return Gl(r,"POST","/v1/accounts:signUp",Fr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await jn._fromIdTokenResponse(t,s,o),f=mv(s);return new Ls({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=mv(s);return new Ls({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function mv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends gi{constructor(t,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Xc.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new Xc(t,n,s,o)}}function lT(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Xc._fromErrorAndOperation(r,u,t,s):u})}async function vR(r,t,n=!1){const s=await Ml(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Ls._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(r,t,n=!1){const{auth:s}=r;if(yn(s.app))return Promise.reject(Gi(s));const o="reauthenticate";try{const u=await Ml(r,lT(s,o,t,r),n);gt(u.idToken,s,"internal-error");const f=Um(u.idToken);gt(f,s,"internal-error");const{sub:m}=f;return gt(r.uid===m,s,"user-mismatch"),Ls._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Hn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(r,t,n=!1){if(yn(r.app))return Promise.reject(Gi(r));const s="signIn",o=await lT(r,s,t),u=await Ls._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function TR(r,t){return uT(Fs(r),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(r){const t=Fs(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function AR(r,t,n){if(yn(r.app))return Promise.reject(Gi(r));const s=Fs(r),f=await rm(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yR).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&cT(r),g}),m=await Ls._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function SR(r,t,n){return yn(r.app)?Promise.reject(Gi(r)):TR(re(r),no.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&cT(r),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(r,t){return re(r).setPersistence(t)}function wR(r,t,n,s){return re(r).onIdTokenChanged(t,n,s)}function RR(r,t,n){return re(r).beforeAuthStateChanged(t,n)}function IR(r,t,n,s){return re(r).onAuthStateChanged(t,n,s)}function CR(r){return re(r).signOut()}const $c="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($c,"1"),this.storage.removeItem($c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=1e3,OR=10;class fT extends hT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,m,g)=>{this.notifyListeners(f,g)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);Kw()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,OR):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},DR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}fT.type="LOCAL";const NR=fT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT extends hT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}dT.type="SESSION";const Lm=dT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new fh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async _=>_(n.origin,u)),g=await MR(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,g)=>{const _=zm("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(b){const O=b;if(O.data.eventId===_)switch(O.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(O.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:_,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(){return window}function UR(r){fi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(){return typeof fi().WorkerGlobalScope<"u"&&typeof fi().importScripts=="function"}async function kR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PR(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function xR(){return mT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="firebaseLocalStorageDb",LR=1,Wc="firebaseLocalStorage",gT="fbase_key";class Ql{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dh(r,t){return r.transaction([Wc],t?"readwrite":"readonly").objectStore(Wc)}function zR(){const r=indexedDB.deleteDatabase(pT);return new Ql(r).toPromise()}function sm(){const r=indexedDB.open(pT,LR);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Wc,{keyPath:gT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Wc)?t(s):(s.close(),await zR(),t(await sm()))})})}async function pv(r,t,n){const s=dh(r,!0).put({[gT]:t,value:n});return new Ql(s).toPromise()}async function BR(r,t){const n=dh(r,!1).get(t),s=await new Ql(n).toPromise();return s===void 0?null:s.value}function gv(r,t){const n=dh(r,!0).delete(t);return new Ql(n).toPromise()}const jR=800,qR=3;class _T{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>qR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fh._getInstance(xR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await kR(),!this.activeServiceWorker)return;this.sender=new VR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||PR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await sm();return await pv(t,$c,"1"),await gv(t,$c),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>pv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>BR(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>gv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=dh(o,!1).getAll();return new Ql(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_T.type="LOCAL";const HR=_T;new Fl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(r,t){return t?Fi(t):(gt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm extends Pm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Qa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Qa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Qa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function GR(r){return uT(r.auth,new Bm(r),r.bypassAuthState)}function KR(r){const{auth:t,user:n}=r;return gt(n,t,"internal-error"),ER(n,new Bm(r),r.bypassAuthState)}async function QR(r){const{auth:t,user:n}=r;return gt(n,t,"internal-error"),vR(n,new Bm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=t;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return GR;case"linkViaPopup":case"linkViaRedirect":return QR;case"reauthViaPopup":case"reauthViaRedirect":return KR;default:Hn(this.auth,"internal-error")}}resolve(t){Qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=new Fl(2e3,1e4);class Fa extends yT{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Fa.currentPopupAction&&Fa.currentPopupAction.cancel(),Fa.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return gt(t,this.auth,"internal-error"),t}async onExecution(){Qi(this.filter.length===1,"Popup operations only handle one event");const t=zm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(hi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fa.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,YR.get())};t()}}Fa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="pendingRedirect",kc=new Map;class $R extends yT{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=kc.get(this.auth._key());if(!t){try{const s=await WR(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}kc.set(this.auth._key(),t)}return this.bypassAuthState||kc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WR(r,t){const n=tI(t),s=JR(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function ZR(r,t){kc.set(r._key(),t)}function JR(r){return Fi(r._redirectPersistence)}function tI(r){return Uc(XR,r.config.apiKey,r.name)}async function eI(r,t,n=!1){if(yn(r.app))return Promise.reject(Gi(r));const s=Fs(r),o=FR(s,t),f=await new $R(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=10*60*1e3;class iI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!rI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!vT(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(hi(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=nI&&this.cachedEventUids.clear(),this.cachedEventUids.has(_v(t))}saveEventToCache(t){this.cachedEventUids.add(_v(t)),this.lastProcessedEventTime=Date.now()}}function _v(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function vT({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function rI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vT(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(r,t={}){return Gr(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oI=/^https?/;async function lI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await sI(r);for(const n of t)try{if(uI(n))return}catch{}Hn(r,"unauthorized-domain")}function uI(r){const t=nm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!oI.test(n))return!1;if(aI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=new Fl(3e4,6e4);function yv(){const r=fi().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function hI(r){return new Promise((t,n)=>{var s,o,u;function f(){yv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yv(),n(hi(r,"network-request-failed"))},timeout:cI.get()})}if(!((o=(s=fi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=fi().gapi)===null||u===void 0)&&u.load)f();else{const m=eR("iframefcb");return fi()[m]=()=>{gapi.load?f():n(hi(r,"network-request-failed"))},rT(`${tR()}?onload=${m}`).catch(g=>n(g))}}).catch(t=>{throw Pc=null,t})}let Pc=null;function fI(r){return Pc=Pc||hI(r),Pc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=new Fl(5e3,15e3),mI="__/auth/iframe",pI="emulator/auth/iframe",gI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_I=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yI(r){const t=r.config;gt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Vm(t,pI):`https://${r.config.authDomain}/${mI}`,s={apiKey:t.apiKey,appName:r.name,v:Hs},o=_I.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Hl(s).slice(1)}`}async function vI(r){const t=await fI(r),n=fi().gapi;return gt(n,r,"internal-error"),t.open({where:document.body,url:yI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=hi(r,"network-request-failed"),m=fi().setTimeout(()=>{u(f)},dI.get());function g(){fi().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TI=500,AI=600,SI="_blank",bI="http://localhost";class vv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wI(r,t,n,s=TI,o=AI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},EI),{width:s.toString(),height:o.toString(),top:u,left:f}),_=We().toLowerCase();n&&(m=WE(_)?SI:n),XE(_)&&(t=t||bI,g.scrollbars="yes");const T=Object.entries(g).reduce((O,[q,K])=>`${O}${q}=${K},`,"");if(Gw(_)&&m!=="_self")return RI(t||"",m),new vv(null);const b=window.open(t||"",m,T);gt(b,r,"popup-blocked");try{b.focus()}catch{}return new vv(b)}function RI(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="__/auth/handler",CI="emulator/auth/handler",DI=encodeURIComponent("fac");async function Ev(r,t,n,s,o,u){gt(r.config.authDomain,r,"auth-domain-config-required"),gt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Hs,eventId:o};if(t instanceof oT){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",db(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[T,b]of Object.entries({}))f[T]=b}if(t instanceof Kl){const T=t.getScopes().filter(b=>b!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const g=await r._getAppCheckToken(),_=g?`#${DI}=${encodeURIComponent(g)}`:"";return`${OI(r)}?${Hl(m).slice(1)}${_}`}function OI({config:r}){return r.emulator?Vm(r,CI):`https://${r.authDomain}/${II}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="webStorageSupport";class NI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lm,this._completeRedirectFn=eI,this._overrideRedirectResult=ZR}async _openPopup(t,n,s,o){var u;Qi((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await Ev(t,n,s,nm(),o);return wI(t,f,zm())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await Ev(t,n,s,nm(),o);return UR(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Qi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await vI(t),s=new iI(t);return n.register("authEvent",o=>(gt(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Fd,{type:Fd},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Fd];f!==void 0&&n(!!f),Hn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return nT()||$E()||km()}}const MI=NI;var Tv="@firebase/auth",Av="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){gt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kI(r){Ps(new xr("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;gt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iT(r)},_=new Ww(s,o,u,g);return oR(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Ps(new xr("auth-internal",t=>{const n=Fs(t.getProvider("auth").getImmediate());return(s=>new VI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ci(Tv,Av,UI(r)),ci(Tv,Av,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=5*60,xI=UE("authIdTokenMaxAge")||PI;let Sv=null;const LI=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>xI)return;const o=n==null?void 0:n.token;Sv!==o&&(Sv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function zI(r=Om()){const t=ch(r,"auth");if(t.isInitialized())return t.getImmediate();const n=aR(r,{popupRedirectResolver:MI,persistence:[HR,NR,Lm]}),s=UE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=LI(u.toString());RR(n,f,()=>f(n.currentUser)),wR(n,m=>f(m))}}const o=NE("auth");return o&&lR(n,`http://${o}`),n}function BI(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}Zw({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=hi("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",BI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kI("Browser");var jI="firebase",qI="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ci(jI,qI,"app");var bv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,ET;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(M,S){function R(){}R.prototype=S.prototype,M.D=S.prototype,M.prototype=new R,M.prototype.constructor=M,M.C=function(N,V,k){for(var I=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)I[Pe-2]=arguments[Pe];return S.prototype[V].apply(N,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,S,R){R||(R=0);var N=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)N[V]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(V=0;16>V;++V)N[V]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=M.g[0],R=M.g[1],V=M.g[2];var k=M.g[3],I=S+(k^R&(V^k))+N[0]+3614090360&4294967295;S=R+(I<<7&4294967295|I>>>25),I=k+(V^S&(R^V))+N[1]+3905402710&4294967295,k=S+(I<<12&4294967295|I>>>20),I=V+(R^k&(S^R))+N[2]+606105819&4294967295,V=k+(I<<17&4294967295|I>>>15),I=R+(S^V&(k^S))+N[3]+3250441966&4294967295,R=V+(I<<22&4294967295|I>>>10),I=S+(k^R&(V^k))+N[4]+4118548399&4294967295,S=R+(I<<7&4294967295|I>>>25),I=k+(V^S&(R^V))+N[5]+1200080426&4294967295,k=S+(I<<12&4294967295|I>>>20),I=V+(R^k&(S^R))+N[6]+2821735955&4294967295,V=k+(I<<17&4294967295|I>>>15),I=R+(S^V&(k^S))+N[7]+4249261313&4294967295,R=V+(I<<22&4294967295|I>>>10),I=S+(k^R&(V^k))+N[8]+1770035416&4294967295,S=R+(I<<7&4294967295|I>>>25),I=k+(V^S&(R^V))+N[9]+2336552879&4294967295,k=S+(I<<12&4294967295|I>>>20),I=V+(R^k&(S^R))+N[10]+4294925233&4294967295,V=k+(I<<17&4294967295|I>>>15),I=R+(S^V&(k^S))+N[11]+2304563134&4294967295,R=V+(I<<22&4294967295|I>>>10),I=S+(k^R&(V^k))+N[12]+1804603682&4294967295,S=R+(I<<7&4294967295|I>>>25),I=k+(V^S&(R^V))+N[13]+4254626195&4294967295,k=S+(I<<12&4294967295|I>>>20),I=V+(R^k&(S^R))+N[14]+2792965006&4294967295,V=k+(I<<17&4294967295|I>>>15),I=R+(S^V&(k^S))+N[15]+1236535329&4294967295,R=V+(I<<22&4294967295|I>>>10),I=S+(V^k&(R^V))+N[1]+4129170786&4294967295,S=R+(I<<5&4294967295|I>>>27),I=k+(R^V&(S^R))+N[6]+3225465664&4294967295,k=S+(I<<9&4294967295|I>>>23),I=V+(S^R&(k^S))+N[11]+643717713&4294967295,V=k+(I<<14&4294967295|I>>>18),I=R+(k^S&(V^k))+N[0]+3921069994&4294967295,R=V+(I<<20&4294967295|I>>>12),I=S+(V^k&(R^V))+N[5]+3593408605&4294967295,S=R+(I<<5&4294967295|I>>>27),I=k+(R^V&(S^R))+N[10]+38016083&4294967295,k=S+(I<<9&4294967295|I>>>23),I=V+(S^R&(k^S))+N[15]+3634488961&4294967295,V=k+(I<<14&4294967295|I>>>18),I=R+(k^S&(V^k))+N[4]+3889429448&4294967295,R=V+(I<<20&4294967295|I>>>12),I=S+(V^k&(R^V))+N[9]+568446438&4294967295,S=R+(I<<5&4294967295|I>>>27),I=k+(R^V&(S^R))+N[14]+3275163606&4294967295,k=S+(I<<9&4294967295|I>>>23),I=V+(S^R&(k^S))+N[3]+4107603335&4294967295,V=k+(I<<14&4294967295|I>>>18),I=R+(k^S&(V^k))+N[8]+1163531501&4294967295,R=V+(I<<20&4294967295|I>>>12),I=S+(V^k&(R^V))+N[13]+2850285829&4294967295,S=R+(I<<5&4294967295|I>>>27),I=k+(R^V&(S^R))+N[2]+4243563512&4294967295,k=S+(I<<9&4294967295|I>>>23),I=V+(S^R&(k^S))+N[7]+1735328473&4294967295,V=k+(I<<14&4294967295|I>>>18),I=R+(k^S&(V^k))+N[12]+2368359562&4294967295,R=V+(I<<20&4294967295|I>>>12),I=S+(R^V^k)+N[5]+4294588738&4294967295,S=R+(I<<4&4294967295|I>>>28),I=k+(S^R^V)+N[8]+2272392833&4294967295,k=S+(I<<11&4294967295|I>>>21),I=V+(k^S^R)+N[11]+1839030562&4294967295,V=k+(I<<16&4294967295|I>>>16),I=R+(V^k^S)+N[14]+4259657740&4294967295,R=V+(I<<23&4294967295|I>>>9),I=S+(R^V^k)+N[1]+2763975236&4294967295,S=R+(I<<4&4294967295|I>>>28),I=k+(S^R^V)+N[4]+1272893353&4294967295,k=S+(I<<11&4294967295|I>>>21),I=V+(k^S^R)+N[7]+4139469664&4294967295,V=k+(I<<16&4294967295|I>>>16),I=R+(V^k^S)+N[10]+3200236656&4294967295,R=V+(I<<23&4294967295|I>>>9),I=S+(R^V^k)+N[13]+681279174&4294967295,S=R+(I<<4&4294967295|I>>>28),I=k+(S^R^V)+N[0]+3936430074&4294967295,k=S+(I<<11&4294967295|I>>>21),I=V+(k^S^R)+N[3]+3572445317&4294967295,V=k+(I<<16&4294967295|I>>>16),I=R+(V^k^S)+N[6]+76029189&4294967295,R=V+(I<<23&4294967295|I>>>9),I=S+(R^V^k)+N[9]+3654602809&4294967295,S=R+(I<<4&4294967295|I>>>28),I=k+(S^R^V)+N[12]+3873151461&4294967295,k=S+(I<<11&4294967295|I>>>21),I=V+(k^S^R)+N[15]+530742520&4294967295,V=k+(I<<16&4294967295|I>>>16),I=R+(V^k^S)+N[2]+3299628645&4294967295,R=V+(I<<23&4294967295|I>>>9),I=S+(V^(R|~k))+N[0]+4096336452&4294967295,S=R+(I<<6&4294967295|I>>>26),I=k+(R^(S|~V))+N[7]+1126891415&4294967295,k=S+(I<<10&4294967295|I>>>22),I=V+(S^(k|~R))+N[14]+2878612391&4294967295,V=k+(I<<15&4294967295|I>>>17),I=R+(k^(V|~S))+N[5]+4237533241&4294967295,R=V+(I<<21&4294967295|I>>>11),I=S+(V^(R|~k))+N[12]+1700485571&4294967295,S=R+(I<<6&4294967295|I>>>26),I=k+(R^(S|~V))+N[3]+2399980690&4294967295,k=S+(I<<10&4294967295|I>>>22),I=V+(S^(k|~R))+N[10]+4293915773&4294967295,V=k+(I<<15&4294967295|I>>>17),I=R+(k^(V|~S))+N[1]+2240044497&4294967295,R=V+(I<<21&4294967295|I>>>11),I=S+(V^(R|~k))+N[8]+1873313359&4294967295,S=R+(I<<6&4294967295|I>>>26),I=k+(R^(S|~V))+N[15]+4264355552&4294967295,k=S+(I<<10&4294967295|I>>>22),I=V+(S^(k|~R))+N[6]+2734768916&4294967295,V=k+(I<<15&4294967295|I>>>17),I=R+(k^(V|~S))+N[13]+1309151649&4294967295,R=V+(I<<21&4294967295|I>>>11),I=S+(V^(R|~k))+N[4]+4149444226&4294967295,S=R+(I<<6&4294967295|I>>>26),I=k+(R^(S|~V))+N[11]+3174756917&4294967295,k=S+(I<<10&4294967295|I>>>22),I=V+(S^(k|~R))+N[2]+718787259&4294967295,V=k+(I<<15&4294967295|I>>>17),I=R+(k^(V|~S))+N[9]+3951481745&4294967295,M.g[0]=M.g[0]+S&4294967295,M.g[1]=M.g[1]+(V+(I<<21&4294967295|I>>>11))&4294967295,M.g[2]=M.g[2]+V&4294967295,M.g[3]=M.g[3]+k&4294967295}s.prototype.u=function(M,S){S===void 0&&(S=M.length);for(var R=S-this.blockSize,N=this.B,V=this.h,k=0;k<S;){if(V==0)for(;k<=R;)o(this,M,k),k+=this.blockSize;if(typeof M=="string"){for(;k<S;)if(N[V++]=M.charCodeAt(k++),V==this.blockSize){o(this,N),V=0;break}}else for(;k<S;)if(N[V++]=M[k++],V==this.blockSize){o(this,N),V=0;break}}this.h=V,this.o+=S},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var S=1;S<M.length-8;++S)M[S]=0;var R=8*this.o;for(S=M.length-8;S<M.length;++S)M[S]=R&255,R/=256;for(this.u(M),M=Array(16),S=R=0;4>S;++S)for(var N=0;32>N;N+=8)M[R++]=this.g[S]>>>N&255;return M};function u(M,S){var R=m;return Object.prototype.hasOwnProperty.call(R,M)?R[M]:R[M]=S(M)}function f(M,S){this.h=S;for(var R=[],N=!0,V=M.length-1;0<=V;V--){var k=M[V]|0;N&&k==S||(R[V]=k,N=!1)}this.g=R}var m={};function g(M){return-128<=M&&128>M?u(M,function(S){return new f([S|0],0>S?-1:0)}):new f([M|0],0>M?-1:0)}function _(M){if(isNaN(M)||!isFinite(M))return b;if(0>M)return W(_(-M));for(var S=[],R=1,N=0;M>=R;N++)S[N]=M/R|0,R*=4294967296;return new f(S,0)}function T(M,S){if(M.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(M.charAt(0)=="-")return W(T(M.substring(1),S));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(S,8)),N=b,V=0;V<M.length;V+=8){var k=Math.min(8,M.length-V),I=parseInt(M.substring(V,V+k),S);8>k?(k=_(Math.pow(S,k)),N=N.j(k).add(_(I))):(N=N.j(R),N=N.add(_(I)))}return N}var b=g(0),O=g(1),q=g(16777216);r=f.prototype,r.m=function(){if(et(this))return-W(this).m();for(var M=0,S=1,R=0;R<this.g.length;R++){var N=this.i(R);M+=(0<=N?N:4294967296+N)*S,S*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(K(this))return"0";if(et(this))return"-"+W(this).toString(M);for(var S=_(Math.pow(M,6)),R=this,N="";;){var V=_t(R,S).g;R=Et(R,V.j(S));var k=((0<R.g.length?R.g[0]:R.h)>>>0).toString(M);if(R=V,K(R))return k+N;for(;6>k.length;)k="0"+k;N=k+N}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function K(M){if(M.h!=0)return!1;for(var S=0;S<M.g.length;S++)if(M.g[S]!=0)return!1;return!0}function et(M){return M.h==-1}r.l=function(M){return M=Et(this,M),et(M)?-1:K(M)?0:1};function W(M){for(var S=M.g.length,R=[],N=0;N<S;N++)R[N]=~M.g[N];return new f(R,~M.h).add(O)}r.abs=function(){return et(this)?W(this):this},r.add=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0,V=0;V<=S;V++){var k=N+(this.i(V)&65535)+(M.i(V)&65535),I=(k>>>16)+(this.i(V)>>>16)+(M.i(V)>>>16);N=I>>>16,k&=65535,I&=65535,R[V]=I<<16|k}return new f(R,R[R.length-1]&-2147483648?-1:0)};function Et(M,S){return M.add(W(S))}r.j=function(M){if(K(this)||K(M))return b;if(et(this))return et(M)?W(this).j(W(M)):W(W(this).j(M));if(et(M))return W(this.j(W(M)));if(0>this.l(q)&&0>M.l(q))return _(this.m()*M.m());for(var S=this.g.length+M.g.length,R=[],N=0;N<2*S;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<M.g.length;V++){var k=this.i(N)>>>16,I=this.i(N)&65535,Pe=M.i(V)>>>16,ae=M.i(V)&65535;R[2*N+2*V]+=I*ae,dt(R,2*N+2*V),R[2*N+2*V+1]+=k*ae,dt(R,2*N+2*V+1),R[2*N+2*V+1]+=I*Pe,dt(R,2*N+2*V+1),R[2*N+2*V+2]+=k*Pe,dt(R,2*N+2*V+2)}for(N=0;N<S;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=S;N<2*S;N++)R[N]=0;return new f(R,0)};function dt(M,S){for(;(M[S]&65535)!=M[S];)M[S+1]+=M[S]>>>16,M[S]&=65535,S++}function ot(M,S){this.g=M,this.h=S}function _t(M,S){if(K(S))throw Error("division by zero");if(K(M))return new ot(b,b);if(et(M))return S=_t(W(M),S),new ot(W(S.g),W(S.h));if(et(S))return S=_t(M,W(S)),new ot(W(S.g),S.h);if(30<M.g.length){if(et(M)||et(S))throw Error("slowDivide_ only works with positive integers.");for(var R=O,N=S;0>=N.l(M);)R=mt(R),N=mt(N);var V=wt(R,1),k=wt(N,1);for(N=wt(N,2),R=wt(R,2);!K(N);){var I=k.add(N);0>=I.l(M)&&(V=V.add(R),k=I),N=wt(N,1),R=wt(R,1)}return S=Et(M,V.j(S)),new ot(V,S)}for(V=b;0<=M.l(S);){for(R=Math.max(1,Math.floor(M.m()/S.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),k=_(R),I=k.j(S);et(I)||0<I.l(M);)R-=N,k=_(R),I=k.j(S);K(k)&&(k=O),V=V.add(k),M=Et(M,I)}return new ot(V,M)}r.A=function(M){return _t(this,M).h},r.and=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)&M.i(N);return new f(R,this.h&M.h)},r.or=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)|M.i(N);return new f(R,this.h|M.h)},r.xor=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)^M.i(N);return new f(R,this.h^M.h)};function mt(M){for(var S=M.g.length+1,R=[],N=0;N<S;N++)R[N]=M.i(N)<<1|M.i(N-1)>>>31;return new f(R,M.h)}function wt(M,S){var R=S>>5;S%=32;for(var N=M.g.length-R,V=[],k=0;k<N;k++)V[k]=0<S?M.i(k+R)>>>S|M.i(k+R+1)<<32-S:M.i(k+R);return new f(V,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,ET=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=_,f.fromString=T,Ur=f}).apply(typeof bv<"u"?bv:typeof self<"u"?self:typeof window<"u"?window:{});var wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var TT,Al,AT,xc,am,ST,bT,wT;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,y){return c==Array.prototype||c==Object.prototype||(c[p]=y.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof wc=="object"&&wc];for(var p=0;p<c.length;++p){var y=c[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=n(this);function o(c,p){if(p)t:{var y=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var P=c[A];if(!(P in y))break t;y=y[P]}c=c[c.length-1],A=y[c],p=p(A),p!=A&&p!=null&&t(y,c,{configurable:!0,writable:!0,value:p})}}function u(c,p){c instanceof String&&(c+="");var y=0,A=!1,P={next:function(){if(!A&&y<c.length){var j=y++;return{value:p(j,c[j]),done:!1}}return A=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}o("Array.prototype.values",function(c){return c||function(){return u(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function g(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function _(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function T(c,p,y){return c.call.apply(c.bind,arguments)}function b(c,p,y){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,A),c.apply(p,P)}}return function(){return c.apply(p,arguments)}}function O(c,p,y){return O=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:b,O.apply(null,arguments)}function q(c,p){var y=Array.prototype.slice.call(arguments,1);return function(){var A=y.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function K(c,p){function y(){}y.prototype=p.prototype,c.aa=p.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(A,P,j){for(var tt=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)tt[Ut-2]=arguments[Ut];return p.prototype[P].apply(A,tt)}}function et(c){const p=c.length;if(0<p){const y=Array(p);for(let A=0;A<p;A++)y[A]=c[A];return y}return[]}function W(c,p){for(let y=1;y<arguments.length;y++){const A=arguments[y];if(g(A)){const P=c.length||0,j=A.length||0;c.length=P+j;for(let tt=0;tt<j;tt++)c[P+tt]=A[tt]}else c.push(A)}}class Et{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function dt(c){return/^[\s\xa0]*$/.test(c)}function ot(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function _t(c){return _t[" "](c),c}_t[" "]=function(){};var mt=ot().indexOf("Gecko")!=-1&&!(ot().toLowerCase().indexOf("webkit")!=-1&&ot().indexOf("Edge")==-1)&&!(ot().indexOf("Trident")!=-1||ot().indexOf("MSIE")!=-1)&&ot().indexOf("Edge")==-1;function wt(c,p,y){for(const A in c)p.call(y,c[A],A,c)}function M(c,p){for(const y in c)p.call(void 0,c[y],y,c)}function S(c){const p={};for(const y in c)p[y]=c[y];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,p){let y,A;for(let P=1;P<arguments.length;P++){A=arguments[P];for(y in A)c[y]=A[y];for(let j=0;j<R.length;j++)y=R[j],Object.prototype.hasOwnProperty.call(A,y)&&(c[y]=A[y])}}function V(c){var p=1;c=c.split(":");const y=[];for(;0<p&&c.length;)y.push(c.shift()),p--;return c.length&&y.push(c.join(":")),y}function k(c){m.setTimeout(()=>{throw c},0)}function I(){var c=zt;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class Pe{constructor(){this.h=this.g=null}add(p,y){const A=ae.get();A.set(p,y),this.h?this.h.next=A:this.g=A,this.h=A}}var ae=new Et(()=>new H,c=>c.reset());class H{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,ut=!1,zt=new Pe,C=()=>{const c=m.Promise.resolve(void 0);nt=()=>{c.then($)}};var $=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(y){k(y)}var p=ae;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}ut=!1};function it(){this.s=this.s,this.C=this.C}it.prototype.s=!1,it.prototype.ma=function(){this.s||(this.s=!0,this.N())},it.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Z(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var ht=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};m.addEventListener("test",y,p),m.removeEventListener("test",y,p)}catch{}return c}();function Ct(c,p){if(Z.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(mt){t:{try{_t(p.nodeName);var P=!0;break t}catch{}P=!1}P||(p=null)}}else y=="mouseover"?p=c.fromElement:y=="mouseout"&&(p=c.toElement);this.relatedTarget=p,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Tt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ct.aa.h.call(this)}}K(Ct,Z);var Tt={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Wt=0;function Gn(c,p,y,A,P){this.listener=c,this.proxy=null,this.src=p,this.type=y,this.capture=!!A,this.ha=P,this.key=++Wt,this.da=this.fa=!1}function $i(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function _i(c){this.src=c,this.g={},this.h=0}_i.prototype.add=function(c,p,y,A,P){var j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);var tt=Xr(c,p,A,P);return-1<tt?(p=c[tt],y||(p.fa=!1)):(p=new Gn(p,this.src,j,!!A,P),p.fa=y,c.push(p)),p};function Yr(c,p){var y=p.type;if(y in c.g){var A=c.g[y],P=Array.prototype.indexOf.call(A,p,void 0),j;(j=0<=P)&&Array.prototype.splice.call(A,P,1),j&&($i(p),c.g[y].length==0&&(delete c.g[y],c.h--))}}function Xr(c,p,y,A){for(var P=0;P<c.length;++P){var j=c[P];if(!j.da&&j.listener==p&&j.capture==!!y&&j.ha==A)return P}return-1}var $r="closure_lm_"+(1e6*Math.random()|0),lo={};function tu(c,p,y,A,P){if(Array.isArray(p)){for(var j=0;j<p.length;j++)tu(c,p[j],y,A,P);return null}return y=eu(y),c&&c[De]?c.K(p,y,_(A)?!!A.capture:!1,P):An(c,p,y,!1,A,P)}function An(c,p,y,A,P,j){if(!p)throw Error("Invalid event type");var tt=_(P)?!!P.capture:!!P,Ut=Xs(c);if(Ut||(c[$r]=Ut=new _i(c)),y=Ut.add(p,y,A,tt,j),y.proxy)return y;if(A=Nh(),y.proxy=A,A.src=c,A.listener=y,c.addEventListener)ht||(P=tt),P===void 0&&(P=!1),c.addEventListener(p.toString(),A,P);else if(c.attachEvent)c.attachEvent(Wr(p.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Nh(){function c(y){return p.call(c.src,c.listener,y)}const p=Mh;return c}function uo(c,p,y,A,P){if(Array.isArray(p))for(var j=0;j<p.length;j++)uo(c,p[j],y,A,P);else A=_(A)?!!A.capture:!!A,y=eu(y),c&&c[De]?(c=c.i,p=String(p).toString(),p in c.g&&(j=c.g[p],y=Xr(j,y,A,P),-1<y&&($i(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete c.g[p],c.h--)))):c&&(c=Xs(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Xr(p,y,A,P)),(y=-1<c?p[c]:null)&&Ys(y))}function Ys(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[De])Yr(p.i,c);else{var y=c.type,A=c.proxy;p.removeEventListener?p.removeEventListener(y,A,c.capture):p.detachEvent?p.detachEvent(Wr(y),A):p.addListener&&p.removeListener&&p.removeListener(A),(y=Xs(p))?(Yr(y,c),y.h==0&&(y.src=null,p[$r]=null)):$i(c)}}}function Wr(c){return c in lo?lo[c]:lo[c]="on"+c}function Mh(c,p){if(c.da)c=!0;else{p=new Ct(p,this);var y=c.listener,A=c.ha||c.src;c.fa&&Ys(c),c=y.call(A,p)}return c}function Xs(c){return c=c[$r],c instanceof _i?c:null}var co="__closure_events_fn_"+(1e9*Math.random()>>>0);function eu(c){return typeof c=="function"?c:(c[co]||(c[co]=function(p){return c.handleEvent(p)}),c[co])}function oe(){it.call(this),this.i=new _i(this),this.M=this,this.F=null}K(oe,it),oe.prototype[De]=!0,oe.prototype.removeEventListener=function(c,p,y,A){uo(this,c,p,y,A)};function Ht(c,p){var y,A=c.F;if(A)for(y=[];A;A=A.F)y.push(A);if(c=c.M,A=p.type||p,typeof p=="string")p=new Z(p,c);else if(p instanceof Z)p.target=p.target||c;else{var P=p;p=new Z(A,c),N(p,P)}if(P=!0,y)for(var j=y.length-1;0<=j;j--){var tt=p.g=y[j];P=un(tt,A,!0,p)&&P}if(tt=p.g=c,P=un(tt,A,!0,p)&&P,P=un(tt,A,!1,p)&&P,y)for(j=0;j<y.length;j++)tt=p.g=y[j],P=un(tt,A,!1,p)&&P}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var y=c.g[p],A=0;A<y.length;A++)$i(y[A]);delete c.g[p],c.h--}}this.F=null},oe.prototype.K=function(c,p,y,A){return this.i.add(String(c),p,!1,y,A)},oe.prototype.L=function(c,p,y,A){return this.i.add(String(c),p,!0,y,A)};function un(c,p,y,A){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var P=!0,j=0;j<p.length;++j){var tt=p[j];if(tt&&!tt.da&&tt.capture==y){var Ut=tt.listener,be=tt.ha||tt.src;tt.fa&&Yr(c.i,tt),P=Ut.call(be,A)!==!1&&P}}return P&&!A.defaultPrevented}function Ge(c,p,y){if(typeof c=="function")y&&(c=O(c,y));else if(c&&typeof c.handleEvent=="function")c=O(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:m.setTimeout(c,p||0)}function nu(c){c.g=Ge(()=>{c.g=null,c.i&&(c.i=!1,nu(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class Vh extends it{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:nu(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zr(c){it.call(this),this.h=c,this.g={}}K(Zr,it);var Jr=[];function ts(c){wt(c.g,function(p,y){this.g.hasOwnProperty(y)&&Ys(p)},c),c.g={}}Zr.prototype.N=function(){Zr.aa.N.call(this),ts(this)},Zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kn=m.JSON.stringify,$s=m.JSON.parse,es=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function ho(){}ho.prototype.h=null;function fo(c){return c.h||(c.h=c.i())}function mo(){}var yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vi(){Z.call(this,"d")}K(vi,Z);function po(){Z.call(this,"c")}K(po,Z);var Kn={},go=null;function Wi(){return go=go||new oe}Kn.La="serverreachability";function Ws(c){Z.call(this,Kn.La,c)}K(Ws,Z);function Zi(c){const p=Wi();Ht(p,new Ws(p))}Kn.STAT_EVENT="statevent";function iu(c,p){Z.call(this,Kn.STAT_EVENT,c),this.stat=p}K(iu,Z);function ee(c){const p=Wi();Ht(p,new iu(p,c))}Kn.Ma="timingevent";function Se(c,p){Z.call(this,Kn.Ma,c),this.size=p}K(Se,Z);function ge(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},p)}function Sn(){this.g=!0}Sn.prototype.xa=function(){this.g=!1};function _o(c,p,y,A,P,j){c.info(function(){if(c.g)if(j)for(var tt="",Ut=j.split("&"),be=0;be<Ut.length;be++){var kt=Ut[be].split("=");if(1<kt.length){var Ne=kt[0];kt=kt[1];var we=Ne.split("_");tt=2<=we.length&&we[1]=="type"?tt+(Ne+"="+kt+"&"):tt+(Ne+"=redacted&")}}else tt=null;else tt=j;return"XMLHTTP REQ ("+A+") [attempt "+P+"]: "+p+`
`+y+`
`+tt})}function Uh(c,p,y,A,P,j,tt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+P+"]: "+p+`
`+y+`
`+j+" "+tt})}function Ji(c,p,y,A){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+ns(c,y)+(A?" "+A:"")})}function ru(c,p){c.info(function(){return"TIMEOUT: "+p})}Sn.prototype.info=function(){};function ns(c,p){if(!c.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var A=y[c];if(!(2>A.length)){var P=A[1];if(Array.isArray(P)&&!(1>P.length)){var j=P[0];if(j!="noop"&&j!="stop"&&j!="close")for(var tt=1;tt<P.length;tt++)P[tt]=""}}}}return kn(y)}catch{return p}}var tr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ei={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qn;function Yn(){}K(Yn,ho),Yn.prototype.g=function(){return new XMLHttpRequest},Yn.prototype.i=function(){return{}},Qn=new Yn;function Ze(c,p,y,A){this.j=c,this.i=p,this.l=y,this.R=A||1,this.U=new Zr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fe}function fe(){this.i=null,this.g="",this.h=!1}var yo={},Zs={};function Pn(c,p,y){c.L=1,c.v=os(cn(p)),c.m=y,c.P=!0,Ti(c,null)}function Ti(c,p){c.F=Date.now(),is(c),c.A=cn(c.v);var y=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),bo(y.i,"t",A),c.C=0,y=c.j.J,c.h=new fe,c.g=Eu(c.j,y?p:null,!c.m),0<c.O&&(c.M=new Vh(O(c.Y,c,c.g),c.O)),p=c.U,y=c.g,A=c.ca;var P="readystatechange";Array.isArray(P)||(P&&(Jr[0]=P.toString()),P=Jr);for(var j=0;j<P.length;j++){var tt=tu(y,P[j],A||p.handleEvent,!1,p.h||p);if(!tt)break;p.g[tt.key]=tt}p=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),Zi(),_o(c.i,c.u,c.A,c.l,c.R,c.m)}Ze.prototype.ca=function(c){c=c.target;const p=this.M;p&&In(c)==3?p.j():this.Y(c)},Ze.prototype.Y=function(c){try{if(c==this.g)t:{const we=In(this.g);var p=this.g.Ba();const Di=this.g.Z();if(!(3>we)&&(we!=3||this.g&&(this.h.h||this.g.oa()||fu(this.g)))){this.J||we!=4||p==7||(p==8||0>=Di?Zi(3):Zi(2)),er(this);var y=this.g.Z();this.X=y;e:if(su(this)){var A=fu(this.g);c="";var P=A.length,j=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xe(this),Xn(this);var tt="";break e}this.h.i=new m.TextDecoder}for(p=0;p<P;p++)this.h.h=!0,c+=this.h.i.decode(A[p],{stream:!(j&&p==P-1)});A.length=0,this.h.g+=c,this.C=0,tt=this.h.g}else tt=this.g.oa();if(this.o=y==200,Uh(this.i,this.u,this.A,this.l,this.R,we,y),this.o){if(this.T&&!this.K){e:{if(this.g){var Ut,be=this.g;if((Ut=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dt(Ut)){var kt=Ut;break e}}kt=null}if(y=kt)Ji(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rs(this,y);else{this.o=!1,this.s=3,ee(12),xe(this),Xn(this);break t}}if(this.P){y=!0;let Le;for(;!this.J&&this.C<tt.length;)if(Le=au(this,tt),Le==Zs){we==4&&(this.s=4,ee(14),y=!1),Ji(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==yo){this.s=4,ee(15),Ji(this.i,this.l,tt,"[Invalid Chunk]"),y=!1;break}else Ji(this.i,this.l,Le,null),rs(this,Le);if(su(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||tt.length!=0||this.h.h||(this.s=1,ee(16),y=!1),this.o=this.o&&y,!y)Ji(this.i,this.l,tt,"[Invalid Chunked Response]"),xe(this),Xn(this);else if(0<tt.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+tt.length),ps(Ne),Ne.M=!0,ee(11))}}else Ji(this.i,this.l,tt,null),rs(this,tt);we==4&&xe(this),this.o&&!this.J&&(we==4?_u(this.j,this):(this.o=!1,is(this)))}else zh(this.g),y==400&&0<tt.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),xe(this),Xn(this)}}}catch{}finally{}};function su(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function au(c,p){var y=c.C,A=p.indexOf(`
`,y);return A==-1?Zs:(y=Number(p.substring(y,A)),isNaN(y)?yo:(A+=1,A+y>p.length?Zs:(p=p.slice(A,A+y),c.C=A+y,p)))}Ze.prototype.cancel=function(){this.J=!0,xe(this)};function is(c){c.S=Date.now()+c.I,ou(c,c.I)}function ou(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=ge(O(c.ba,c),p)}function er(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Ze.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(ru(this.i,this.A),this.L!=2&&(Zi(),ee(17)),xe(this),this.s=2,Xn(this)):ou(this,this.S-c)};function Xn(c){c.j.G==0||c.J||_u(c.j,c)}function xe(c){er(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,ts(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function rs(c,p){try{var y=c.j;if(y.G!=0&&(y.g==c||vo(y.h,c))){if(!c.K&&vo(y.h,c)&&y.G==3){try{var A=y.Da.g.parse(p)}catch{A=null}if(Array.isArray(A)&&A.length==3){var P=A;if(P[0]==0){t:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)ca(y),la(y);else break t;Do(y),ee(18)}}else y.za=P[1],0<y.za-y.T&&37500>P[2]&&y.F&&y.v==0&&!y.C&&(y.C=ge(O(y.Za,y),6e3));if(1>=ta(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Ci(y,11)}else if((c.K||y.g==c)&&ca(y),!dt(p))for(P=y.Da.g.parse(p),p=0;p<P.length;p++){let kt=P[p];if(y.T=kt[0],kt=kt[1],y.G==2)if(kt[0]=="c"){y.K=kt[1],y.ia=kt[2];const Ne=kt[3];Ne!=null&&(y.la=Ne,y.j.info("VER="+y.la));const we=kt[4];we!=null&&(y.Aa=we,y.j.info("SVER="+y.Aa));const Di=kt[5];Di!=null&&typeof Di=="number"&&0<Di&&(A=1.5*Di,y.L=A,y.j.info("backChannelRequestTimeoutMs_="+A)),A=y;const Le=c.g;if(Le){const ni=Le.g?Le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ni){var j=A.h;j.g||ni.indexOf("spdy")==-1&&ni.indexOf("quic")==-1&&ni.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(ea(j,j.h),j.h=null))}if(A.D){const No=Le.g?Le.g.getResponseHeader("X-HTTP-Session-Id"):null;No&&(A.ya=No,Kt(A.I,A.D,No))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),A=y;var tt=c;if(A.qa=vu(A,A.J?A.ia:null,A.W),tt.K){Je(A.h,tt);var Ut=tt,be=A.L;be&&(Ut.I=be),Ut.B&&(er(Ut),is(Ut)),A.g=tt}else pu(A);0<y.i.length&&ua(y)}else kt[0]!="stop"&&kt[0]!="close"||Ci(y,7);else y.G==3&&(kt[0]=="stop"||kt[0]=="close"?kt[0]=="stop"?Ci(y,7):Io(y):kt[0]!="noop"&&y.l&&y.l.ta(kt),y.v=0)}}Zi(4)}catch{}}var lu=class{constructor(c,p){this.g=c,this.map=p}};function Ai(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Js(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ta(c){return c.h?1:c.g?c.g.size:0}function vo(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function ea(c,p){c.g?c.g.add(p):c.h=p}function Je(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Ai.prototype.cancel=function(){if(this.i=Eo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Eo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const y of c.g.values())p=p.concat(y.D);return p}return et(c.i)}function kh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var p=[],y=c.length,A=0;A<y;A++)p.push(c[A]);return p}p=[],y=0;for(A in c)p[y++]=c[A];return p}function na(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var p=[];c=c.length;for(var y=0;y<c;y++)p.push(y);return p}p=[],y=0;for(const A in c)p[y++]=A;return p}}}function To(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var y=na(c),A=kh(c),P=A.length,j=0;j<P;j++)p.call(void 0,A[j],y&&y[j],c)}var ss=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ph(c,p){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var A=c[y].indexOf("="),P=null;if(0<=A){var j=c[y].substring(0,A);P=c[y].substring(A+1)}else j=c[y];p(j,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function _e(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof _e){this.h=c.h,as(this,c.j),this.o=c.o,this.g=c.g,nr(this,c.s),this.l=c.l;var p=c.i,y=new bi;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Si(this,y),this.m=c.m}else c&&(p=String(c).match(ss))?(this.h=!1,as(this,p[1]||"",!0),this.o=bn(p[2]||""),this.g=bn(p[3]||"",!0),nr(this,p[4]),this.l=bn(p[5]||"",!0),Si(this,p[6]||"",!0),this.m=bn(p[7]||"")):(this.h=!1,this.i=new bi(null,this.h))}_e.prototype.toString=function(){var c=[],p=this.j;p&&c.push(ls(p,Ao,!0),":");var y=this.g;return(y||p=="file")&&(c.push("//"),(p=this.o)&&c.push(ls(p,Ao,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(ls(y,y.charAt(0)=="/"?xh:So,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",ls(y,ia)),c.join("")};function cn(c){return new _e(c)}function as(c,p,y){c.j=y?bn(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function nr(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function Si(c,p,y){p instanceof bi?(c.i=p,cu(c.i,c.h)):(y||(p=ls(p,Lh)),c.i=new bi(p,c.h))}function Kt(c,p,y){c.i.set(p,y)}function os(c){return Kt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function bn(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ls(c,p,y){return typeof c=="string"?(c=encodeURI(c).replace(p,uu),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function uu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ao=/[#\/\?@]/g,So=/[#\?:]/g,xh=/[#\?]/g,Lh=/[#\?@]/g,ia=/#/g;function bi(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function wn(c){c.g||(c.g=new Map,c.h=0,c.i&&Ph(c.i,function(p,y){c.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=bi.prototype,r.add=function(c,p){wn(this),this.i=null,c=$n(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(p),this.h+=1,this};function wi(c,p){wn(c),p=$n(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function Ri(c,p){return wn(c),p=$n(c,p),c.g.has(p)}r.forEach=function(c,p){wn(this),this.g.forEach(function(y,A){y.forEach(function(P){c.call(p,P,A,this)},this)},this)},r.na=function(){wn(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let A=0;A<p.length;A++){const P=c[A];for(let j=0;j<P.length;j++)y.push(p[A])}return y},r.V=function(c){wn(this);let p=[];if(typeof c=="string")Ri(this,c)&&(p=p.concat(this.g.get($n(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)p=p.concat(c[y])}return p},r.set=function(c,p){return wn(this),this.i=null,c=$n(this,c),Ri(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},r.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function bo(c,p,y){wi(c,p),0<y.length&&(c.i=null,c.g.set($n(c,p),et(y)),c.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var A=p[y];const j=encodeURIComponent(String(A)),tt=this.V(A);for(A=0;A<tt.length;A++){var P=j;tt[A]!==""&&(P+="="+encodeURIComponent(String(tt[A]))),c.push(P)}}return this.i=c.join("&")};function $n(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function cu(c,p){p&&!c.j&&(wn(c),c.i=null,c.g.forEach(function(y,A){var P=A.toLowerCase();A!=P&&(wi(this,A),bo(this,P,y))},c)),c.j=p}function us(c,p){const y=new Sn;if(m.Image){const A=new Image;A.onload=q(Rn,y,"TestLoadImage: loaded",!0,p,A),A.onerror=q(Rn,y,"TestLoadImage: error",!1,p,A),A.onabort=q(Rn,y,"TestLoadImage: abort",!1,p,A),A.ontimeout=q(Rn,y,"TestLoadImage: timeout",!1,p,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else p(!1)}function xn(c,p){const y=new Sn,A=new AbortController,P=setTimeout(()=>{A.abort(),Rn(y,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:A.signal}).then(j=>{clearTimeout(P),j.ok?Rn(y,"TestPingServer: ok",!0,p):Rn(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(P),Rn(y,"TestPingServer: error",!1,p)})}function Rn(c,p,y,A,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),A(y)}catch{}}function cs(){this.g=new es}function Wn(c,p,y){const A=y||"";try{To(c,function(P,j){let tt=P;_(P)&&(tt=kn(P)),p.push(A+j+"="+encodeURIComponent(tt))})}catch(P){throw p.push(A+"type="+encodeURIComponent("_badmap")),P}}function ir(c){this.l=c.Ub||null,this.j=c.eb||!1}K(ir,ho),ir.prototype.g=function(){return new Ii(this.l,this.j)},ir.prototype.i=function(c){return function(){return c}}({});function Ii(c,p){oe.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K(Ii,oe),r=Ii.prototype,r.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,Jn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||m).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zn(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Jn(this)),this.g&&(this.readyState=3,Jn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function wo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?Zn(this):Jn(this),this.readyState==3&&wo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Zn(this))},r.Qa=function(c){this.g&&(this.response=c,Zn(this))},r.ga=function(){this.g&&Zn(this)};function Zn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Jn(c)}r.setRequestHeader=function(c,p){this.u.append(c,p)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=p.next();return c.join(`\r
`)};function Jn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ro(c){let p="";return wt(c,function(y,A){p+=A,p+=":",p+=y,p+=`\r
`}),p}function Oe(c,p,y){t:{for(A in y){var A=!1;break t}A=!0}A||(y=Ro(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Kt(c,p,y))}function jt(c){oe.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K(jt,oe);var ra=/^https?$/i,hs=["POST","PUT"];r=jt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,p,y,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qn.g(),this.v=this.o?fo(this.o):fo(Qn),this.g.onreadystatechange=O(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(j){hu(this,j);return}if(c=y||"",y=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var P in A)y.set(P,A[P]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const j of A.keys())y.set(j,A.get(j));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),P=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(hs,p,void 0))||A||P||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,tt]of y)this.g.setRequestHeader(j,tt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fs(this),this.u=!0,this.g.send(c),this.u=!1}catch(j){hu(this,j)}};function hu(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,sa(c),ti(c)}function sa(c){c.A||(c.A=!0,Ht(c,"complete"),Ht(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ht(this,"complete"),Ht(this,"abort"),ti(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),jt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?aa(this):this.bb())},r.bb=function(){aa(this)};function aa(c){if(c.h&&typeof f<"u"&&(!c.v[1]||In(c)!=4||c.Z()!=2)){if(c.u&&In(c)==4)Ge(c.Ea,0,c);else if(Ht(c,"readystatechange"),In(c)==4){c.h=!1;try{const tt=c.Z();t:switch(tt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var y;if(!(y=p)){var A;if(A=tt===0){var P=String(c.D).match(ss)[1]||null;!P&&m.self&&m.self.location&&(P=m.self.location.protocol.slice(0,-1)),A=!ra.test(P?P.toLowerCase():"")}y=A}if(y)Ht(c,"complete"),Ht(c,"success");else{c.m=6;try{var j=2<In(c)?c.g.statusText:""}catch{j=""}c.l=j+" ["+c.Z()+"]",sa(c)}}finally{ti(c)}}}}function ti(c,p){if(c.g){fs(c);const y=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||Ht(c,"ready");try{y.onreadystatechange=A}catch{}}}function fs(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function In(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),$s(p)}};function fu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function zh(c){const p={};c=(c.g&&2<=In(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(dt(c[A]))continue;var y=V(c[A]);const P=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=p[P]||[];p[P]=j,j.push(y)}M(p,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(c,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||p}function oa(c){this.Aa=0,this.i=[],this.j=new Sn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ds("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ds("baseRetryDelayMs",5e3,c),this.cb=ds("retryDelaySeedMs",1e4,c),this.Wa=ds("forwardChannelMaxRetries",2,c),this.wa=ds("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ai(c&&c.concurrentRequestLimit),this.Da=new cs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=oa.prototype,r.la=8,r.G=1,r.connect=function(c,p,y,A){ee(0),this.W=c,this.H=p||{},y&&A!==void 0&&(this.H.OSID=y,this.H.OAID=A),this.F=this.X,this.I=vu(this,null,this.W),ua(this)};function Io(c){if(du(c),c.G==3){var p=c.U++,y=cn(c.I);if(Kt(y,"SID",c.K),Kt(y,"RID",p),Kt(y,"TYPE","terminate"),ms(c,y),p=new Ze(c,c.j,p),p.L=2,p.v=os(cn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=p.v,y=!0),y||(p.g=Eu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),is(p)}yu(c)}function la(c){c.g&&(ps(c),c.g.cancel(),c.g=null)}function du(c){la(c),c.u&&(m.clearTimeout(c.u),c.u=null),ca(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ua(c){if(!Js(c.h)&&!c.s){c.s=!0;var p=c.Ga;nt||C(),ut||(nt(),ut=!0),zt.add(p,c),c.B=0}}function Bh(c,p){return ta(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=ge(O(c.Ga,c,p),Oo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const P=new Ze(this,this.j,c);let j=this.o;if(this.S&&(j?(j=S(j),N(j,this.S)):j=this.S),this.m!==null||this.O||(P.H=j,j=null),this.P)t:{for(var p=0,y=0;y<this.i.length;y++){e:{var A=this.i[y];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(p+=A,4096<p){p=y;break t}if(p===4096||y===this.i.length-1){p=y+1;break t}}p=1e3}else p=1e3;p=mu(this,P,p),y=cn(this.I),Kt(y,"RID",c),Kt(y,"CVER",22),this.D&&Kt(y,"X-HTTP-Session-Id",this.D),ms(this,y),j&&(this.O?p="headers="+encodeURIComponent(String(Ro(j)))+"&"+p:this.m&&Oe(y,this.m,j)),ea(this.h,P),this.Ua&&Kt(y,"TYPE","init"),this.P?(Kt(y,"$req",p),Kt(y,"SID","null"),P.T=!0,Pn(P,y,null)):Pn(P,y,p),this.G=2}}else this.G==3&&(c?Co(this,c):this.i.length==0||Js(this.h)||Co(this))};function Co(c,p){var y;p?y=p.l:y=c.U++;const A=cn(c.I);Kt(A,"SID",c.K),Kt(A,"RID",y),Kt(A,"AID",c.T),ms(c,A),c.m&&c.o&&Oe(A,c.m,c.o),y=new Ze(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),p&&(c.i=p.D.concat(c.i)),p=mu(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ea(c.h,y),Pn(y,A,p)}function ms(c,p){c.H&&wt(c.H,function(y,A){Kt(p,A,y)}),c.l&&To({},function(y,A){Kt(p,A,y)})}function mu(c,p,y){y=Math.min(c.i.length,y);var A=c.l?O(c.l.Na,c.l,c):null;t:{var P=c.i;let j=-1;for(;;){const tt=["count="+y];j==-1?0<y?(j=P[0].g,tt.push("ofs="+j)):j=0:tt.push("ofs="+j);let Ut=!0;for(let be=0;be<y;be++){let kt=P[be].g;const Ne=P[be].map;if(kt-=j,0>kt)j=Math.max(0,P[be].g-100),Ut=!1;else try{Wn(Ne,tt,"req"+kt+"_")}catch{A&&A(Ne)}}if(Ut){A=tt.join("&");break t}}}return c=c.i.splice(0,y),p.D=c,A}function pu(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;nt||C(),ut||(nt(),ut=!0),zt.add(p,c),c.v=0}}function Do(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=ge(O(c.Fa,c),Oo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,gu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=ge(O(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ee(10),la(this),gu(this))};function ps(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function gu(c){c.g=new Ze(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=cn(c.qa);Kt(p,"RID","rpc"),Kt(p,"SID",c.K),Kt(p,"AID",c.T),Kt(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&Kt(p,"TO",c.ja),Kt(p,"TYPE","xmlhttp"),ms(c,p),c.m&&c.o&&Oe(p,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=os(cn(p)),y.m=null,y.P=!0,Ti(y,c)}r.Za=function(){this.C!=null&&(this.C=null,la(this),Do(this),ee(19))};function ca(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function _u(c,p){var y=null;if(c.g==p){ca(c),ps(c),c.g=null;var A=2}else if(vo(c.h,p))y=p.D,Je(c.h,p),A=1;else return;if(c.G!=0){if(p.o)if(A==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var P=c.B;A=Wi(),Ht(A,new Se(A,y)),ua(c)}else pu(c);else if(P=p.s,P==3||P==0&&0<p.X||!(A==1&&Bh(c,p)||A==2&&Do(c)))switch(y&&0<y.length&&(p=c.h,p.i=p.i.concat(y)),P){case 1:Ci(c,5);break;case 4:Ci(c,10);break;case 3:Ci(c,6);break;default:Ci(c,2)}}}function Oo(c,p){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*p}function Ci(c,p){if(c.j.info("Error code "+p),p==2){var y=O(c.fb,c),A=c.Xa;const P=!A;A=new _e(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||as(A,"https"),os(A),P?us(A.toString(),y):xn(A.toString(),y)}else ee(2);c.G=0,c.l&&c.l.sa(p),yu(c),du(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function yu(c){if(c.G=0,c.ka=[],c.l){const p=Eo(c.h);(p.length!=0||c.i.length!=0)&&(W(c.ka,p),W(c.ka,c.i),c.h.i.length=0,et(c.i),c.i.length=0),c.l.ra()}}function vu(c,p,y){var A=y instanceof _e?cn(y):new _e(y);if(A.g!="")p&&(A.g=p+"."+A.g),nr(A,A.s);else{var P=m.location;A=P.protocol,p=p?p+"."+P.hostname:P.hostname,P=+P.port;var j=new _e(null);A&&as(j,A),p&&(j.g=p),P&&nr(j,P),y&&(j.l=y),A=j}return y=c.D,p=c.ya,y&&p&&Kt(A,y,p),Kt(A,"VER",c.la),ms(c,A),A}function Eu(c,p,y){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new jt(new ir({eb:y})):new jt(c.pa),p.Ha(c.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tu(){}r=Tu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ha(){}ha.prototype.g=function(c,p){return new tn(c,p)};function tn(c,p){oe.call(this),this.g=new oa(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!dt(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!dt(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new ei(this)}K(tn,oe),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Io(this.g)},tn.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=kn(c),c=y);p.i.push(new lu(p.Ya++,c)),p.G==3&&ua(p)},tn.prototype.N=function(){this.g.l=null,delete this.j,Io(this.g),delete this.g,tn.aa.N.call(this)};function Au(c){vi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){t:{for(const y in p){c=y;break t}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}K(Au,vi);function Su(){po.call(this),this.status=1}K(Su,po);function ei(c){this.g=c}K(ei,Tu),ei.prototype.ua=function(){Ht(this.g,"a")},ei.prototype.ta=function(c){Ht(this.g,new Au(c))},ei.prototype.sa=function(c){Ht(this.g,new Su)},ei.prototype.ra=function(){Ht(this.g,"b")},ha.prototype.createWebChannel=ha.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,wT=function(){return new ha},bT=function(){return Wi()},ST=Kn,am={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tr.NO_ERROR=0,tr.TIMEOUT=8,tr.HTTP_ERROR=6,xc=tr,Ei.COMPLETE="complete",AT=Ei,mo.EventType=yi,yi.OPEN="a",yi.CLOSE="b",yi.ERROR="c",yi.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Al=mo,jt.prototype.listenOnce=jt.prototype.L,jt.prototype.getLastError=jt.prototype.Ka,jt.prototype.getLastErrorCode=jt.prototype.Ba,jt.prototype.getStatus=jt.prototype.Z,jt.prototype.getResponseJson=jt.prototype.Oa,jt.prototype.getResponseText=jt.prototype.oa,jt.prototype.send=jt.prototype.ea,jt.prototype.setWithCredentials=jt.prototype.Ha,TT=jt}).apply(typeof wc<"u"?wc:typeof self<"u"?self:typeof window<"u"?window:{});const wv="@firebase/firestore",Rv="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Cm("@firebase/firestore");function Ba(){return zs.logLevel}function rt(r,...t){if(zs.logLevel<=Mt.DEBUG){const n=t.map(jm);zs.debug(`Firestore (${io}): ${r}`,...n)}}function Yi(r,...t){if(zs.logLevel<=Mt.ERROR){const n=t.map(jm);zs.error(`Firestore (${io}): ${r}`,...n)}}function Xa(r,...t){if(zs.logLevel<=Mt.WARN){const n=t.map(jm);zs.warn(`Firestore (${io}): ${r}`,...n)}}function jm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(r="Unexpected state"){const t=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: `+r;throw Yi(t),new Error(t)}function qt(r,t){r||vt()}function St(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class st extends gi{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class HI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class FI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GI{constructor(t){this.t=t,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){qt(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new kr,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=u;t.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new kr)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(qt(typeof s.accessToken=="string"),new RT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return qt(t===null||typeof t=="string"),new Xe(t)}}class KI{constructor(t,n,s){this.l=t,this.h=n,this.P=s,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class QI{constructor(t,n,s){this.l=t,this.h=n,this.P=s}getToken(){return Promise.resolve(new KI(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Iv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YI{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,yn(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){qt(this.o===void 0);const s=u=>{u.error!=null&&rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.R;return this.R=u.token,rt("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Iv(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(qt(typeof n.token=="string"),this.R=n.token,new Iv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=XI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function It(r,t){return r<t?-1:r>t?1:0}function om(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return It(s,o);{const u=IT(),f=$I(u.encode(Cv(r,n)),u.encode(Cv(t,n)));return f!==0?f:It(s,o)}}n+=s>65535?2:1}return It(r.length,t.length)}function Cv(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function $I(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return It(r[n],t[n]);return It(r.length,t.length)}function $a(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=-62135596800,Ov=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(t){return Ae.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*Ov);return new Ae(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new st(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new st(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Dv)throw new st(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new st(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ov}_compareTo(t){return this.seconds===t.seconds?It(this.nanoseconds,t.nanoseconds):It(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Dv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{static fromTimestamp(t){return new At(t)}static min(){return new At(new Ae(0,0))}static max(){return new At(new Ae(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="__name__";class li{constructor(t,n,s){n===void 0?n=0:n>t.length&&vt(),s===void 0?s=t.length-n:s>t.length-n&&vt(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return li.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof li?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=li.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return It(t.length,n.length)}static compareSegments(t,n){const s=li.isNumericId(t),o=li.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?li.extractNumericId(t).compare(li.extractNumericId(n)):om(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ur.fromString(t.substring(4,t.length-2))}}class Jt extends li{construct(t,n,s){return new Jt(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new st(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new Jt(n)}static emptyPath(){return new Jt([])}}const WI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends li{construct(t,n,s){return new He(t,n,s)}static isValidIdentifier(t){return WI.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nv}static keyField(){return new He([Nv])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new st(X.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new st(X.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new st(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=g,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new st(X.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.path=t}static fromPath(t){return new ct(Jt.fromString(t))}static fromName(t){return new ct(Jt.fromString(t).popFirst(5))}static empty(){return new ct(Jt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Jt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Jt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ct(new Jt(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=-1;function ZI(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=At.fromTimestamp(s===1e9?new Ae(n+1,0):new Ae(n,s));return new Lr(o,ct.empty(),t)}function JI(r){return new Lr(r.readTime,r.key,Ul)}class Lr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Lr(At.min(),ct.empty(),Ul)}static max(){return new Lr(At.max(),ct.empty(),Ul)}}function t1(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ct.comparator(r.documentKey,t.documentKey),n!==0?n:It(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class n1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(r){if(r.code!==X.FAILED_PRECONDITION||r.message!==e1)throw r;rt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&vt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Y((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Y.reject(n)}static resolve(t){return new Y((n,s)=>{n(t)})}static reject(t){return new Y((n,s)=>{s(t)})}static waitFor(t){return new Y((n,s)=>{let o=0,u=0,f=!1;t.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},g=>s(g))}),f=!0,u===o&&n()})}static or(t){let n=Y.resolve(!1);for(const s of t)n=n.next(o=>o?Y.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(t,n){return new Y((s,o)=>{const u=t.length,f=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;n(t[_]).next(T=>{f[_]=T,++m,m===u&&s(f)},T=>o(T))}})}static doWhile(t,n){return new Y((s,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):s()};u()})}}function i1(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function so(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}mh.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=-1;function ph(r){return r==null}function Zc(r){return r===0&&1/r==-1/0}function r1(r){return typeof r=="number"&&Number.isInteger(r)&&!Zc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="";function s1(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=Mv(t)),t=a1(r.get(n),t);return Mv(t)}function a1(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case DT:n+="";break;default:n+=u}}return n}function Mv(r){return r+DT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Kr(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function OT(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n){this.comparator=t,this.root=n||qe.EMPTY}insert(t,n){return new se(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(t){return new se(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Rc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Rc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Rc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Rc(this.root,t,this.comparator,!0)}}class Rc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class qe{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??qe.RED,this.left=o??qe.EMPTY,this.right=u??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new qe(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return qe.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw vt();const t=this.left.check();if(t!==this.right.check())throw vt();return t+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw vt()}get value(){throw vt()}get color(){throw vt()}get left(){throw vt()}get right(){throw vt()}copy(t,n,s,o,u){return this}insert(t,n,s){return new qe(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.comparator=t,this.data=new se(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uv(this.data.getIterator())}getIteratorFrom(t){return new Uv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ce(this.comparator);return n.data=t,n}}class Uv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t){this.fields=t,t.sort(He.comparator)}static empty(){return new vn([])}unionWith(t){let n=new Ce(He.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new vn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return $a(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new NT("Invalid base64 string: "+u):u}}(t);return new Fe(n)}static fromUint8Array(t){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(t);return new Fe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return It(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const o1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zr(r){if(qt(!!r),typeof r=="string"){let t=0;const n=o1.exec(r);if(qt(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:pe(r.seconds),nanos:pe(r.nanos)}}function pe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Br(r){return typeof r=="string"?Fe.fromBase64String(r):Fe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="server_timestamp",VT="__type__",UT="__previous_value__",kT="__local_write_time__";function Hm(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[VT])===null||n===void 0?void 0:n.stringValue)===MT}function gh(r){const t=r.mapValue.fields[UT];return Hm(t)?gh(t):t}function kl(r){const t=zr(r.mapValue.fields[kT].timestampValue);return new Ae(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(t,n,s,o,u,f,m,g,_){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_}}const Jc="(default)";class Pl{constructor(t,n){this.projectId=t,this.database=n||Jc}static empty(){return new Pl("","")}get isDefaultDatabase(){return this.database===Jc}isEqual(t){return t instanceof Pl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="__type__",u1="__max__",Ic={mapValue:{}},xT="__vector__",th="value";function jr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Hm(r)?4:h1(r)?9007199254740991:c1(r)?10:11:vt()}function pi(r,t){if(r===t)return!0;const n=jr(r);if(n!==jr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return kl(r).isEqual(kl(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=zr(o.timestampValue),m=zr(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return Br(o.bytesValue).isEqual(Br(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return pe(o.geoPointValue.latitude)===pe(u.geoPointValue.latitude)&&pe(o.geoPointValue.longitude)===pe(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return pe(o.integerValue)===pe(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=pe(o.doubleValue),m=pe(u.doubleValue);return f===m?Zc(f)===Zc(m):isNaN(f)&&isNaN(m)}return!1}(r,t);case 9:return $a(r.arrayValue.values||[],t.arrayValue.values||[],pi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Vv(f)!==Vv(m))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(m[g]===void 0||!pi(f[g],m[g])))return!1;return!0}(r,t);default:return vt()}}function xl(r,t){return(r.values||[]).find(n=>pi(n,t))!==void 0}function Wa(r,t){if(r===t)return 0;const n=jr(r),s=jr(t);if(n!==s)return It(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return It(r.booleanValue,t.booleanValue);case 2:return function(u,f){const m=pe(u.integerValue||u.doubleValue),g=pe(f.integerValue||f.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,t);case 3:return kv(r.timestampValue,t.timestampValue);case 4:return kv(kl(r),kl(t));case 5:return om(r.stringValue,t.stringValue);case 6:return function(u,f){const m=Br(u),g=Br(f);return m.compareTo(g)}(r.bytesValue,t.bytesValue);case 7:return function(u,f){const m=u.split("/"),g=f.split("/");for(let _=0;_<m.length&&_<g.length;_++){const T=It(m[_],g[_]);if(T!==0)return T}return It(m.length,g.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,f){const m=It(pe(u.latitude),pe(f.latitude));return m!==0?m:It(pe(u.longitude),pe(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Pv(r.arrayValue,t.arrayValue);case 10:return function(u,f){var m,g,_,T;const b=u.fields||{},O=f.fields||{},q=(m=b[th])===null||m===void 0?void 0:m.arrayValue,K=(g=O[th])===null||g===void 0?void 0:g.arrayValue,et=It(((_=q==null?void 0:q.values)===null||_===void 0?void 0:_.length)||0,((T=K==null?void 0:K.values)===null||T===void 0?void 0:T.length)||0);return et!==0?et:Pv(q,K)}(r.mapValue,t.mapValue);case 11:return function(u,f){if(u===Ic.mapValue&&f===Ic.mapValue)return 0;if(u===Ic.mapValue)return 1;if(f===Ic.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=f.fields||{},T=Object.keys(_);g.sort(),T.sort();for(let b=0;b<g.length&&b<T.length;++b){const O=om(g[b],T[b]);if(O!==0)return O;const q=Wa(m[g[b]],_[T[b]]);if(q!==0)return q}return It(g.length,T.length)}(r.mapValue,t.mapValue);default:throw vt()}}function kv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return It(r,t);const n=zr(r),s=zr(t),o=It(n.seconds,s.seconds);return o!==0?o:It(n.nanos,s.nanos)}function Pv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=Wa(n[o],s[o]);if(u)return u}return It(n.length,s.length)}function Za(r){return lm(r)}function lm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=zr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Br(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ct.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=lm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${lm(n.fields[f])}`;return o+"}"}(r.mapValue):vt()}function Lc(r){switch(jr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=gh(r);return t?16+Lc(t):16;case 5:return 2*r.stringValue.length;case 6:return Br(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Lc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Kr(s.fields,(u,f)=>{o+=u.length+Lc(f)}),o}(r.mapValue);default:throw vt()}}function xv(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function um(r){return!!r&&"integerValue"in r}function Fm(r){return!!r&&"arrayValue"in r}function Lv(r){return!!r&&"nullValue"in r}function zv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function zc(r){return!!r&&"mapValue"in r}function c1(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[PT])===null||n===void 0?void 0:n.stringValue)===xT}function Rl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Kr(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Rl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Rl(r.arrayValue.values[n]);return t}return Object.assign({},r)}function h1(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===u1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t){this.value=t}static empty(){return new ln({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!zc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Rl(n)}setAll(t){let n=He.emptyPath(),s={},o=[];t.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Rl(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());zc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return pi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];zc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Kr(n,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new ln(Rl(this.value))}}function LT(r){const t=[];return Kr(r.fields,(n,s)=>{const o=new He([n]);if(zc(s)){const u=LT(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)}),new vn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n,s,o,u,f,m){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new $e(t,0,At.min(),At.min(),At.min(),ln.empty(),0)}static newFoundDocument(t,n,s,o){return new $e(t,1,n,At.min(),s,o,0)}static newNoDocument(t,n){return new $e(t,2,n,At.min(),At.min(),ln.empty(),0)}static newUnknownDocument(t,n){return new $e(t,3,n,At.min(),At.min(),ln.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof $e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,n){this.position=t,this.inclusive=n}}function Bv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=ct.comparator(ct.fromName(f.referenceValue),n.key):s=Wa(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function jv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!pi(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,n="asc"){this.field=t,this.dir=n}}function f1(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{}class Te extends zT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new m1(t,n,s):n==="array-contains"?new _1(t,s):n==="in"?new y1(t,s):n==="not-in"?new v1(t,s):n==="array-contains-any"?new E1(t,s):new Te(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new p1(t,s):new g1(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wa(n,this.value)):n!==null&&jr(this.value)===jr(n)&&this.matchesComparison(Wa(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return vt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends zT{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Fn(t,n)}matches(t){return BT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function BT(r){return r.op==="and"}function jT(r){return d1(r)&&BT(r)}function d1(r){for(const t of r.filters)if(t instanceof Fn)return!1;return!0}function cm(r){if(r instanceof Te)return r.field.canonicalString()+r.op.toString()+Za(r.value);if(jT(r))return r.filters.map(t=>cm(t)).join(",");{const t=r.filters.map(n=>cm(n)).join(",");return`${r.op}(${t})`}}function qT(r,t){return r instanceof Te?function(s,o){return o instanceof Te&&s.op===o.op&&s.field.isEqual(o.field)&&pi(s.value,o.value)}(r,t):r instanceof Fn?function(s,o){return o instanceof Fn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&qT(f,o.filters[m]),!0):!1}(r,t):void vt()}function HT(r){return r instanceof Te?function(n){return`${n.field.canonicalString()} ${n.op} ${Za(n.value)}`}(r):r instanceof Fn?function(n){return n.op.toString()+" {"+n.getFilters().map(HT).join(" ,")+"}"}(r):"Filter"}class m1 extends Te{constructor(t,n,s){super(t,n,s),this.key=ct.fromName(s.referenceValue)}matches(t){const n=ct.comparator(t.key,this.key);return this.matchesComparison(n)}}class p1 extends Te{constructor(t,n){super(t,"in",n),this.keys=FT("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class g1 extends Te{constructor(t,n){super(t,"not-in",n),this.keys=FT("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function FT(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ct.fromName(s.referenceValue))}class _1 extends Te{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Fm(n)&&xl(n.arrayValue,this.value)}}class y1 extends Te{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&xl(this.value.arrayValue,n)}}class v1 extends Te{constructor(t,n){super(t,"not-in",n)}matches(t){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!xl(this.value.arrayValue,n)}}class E1 extends Te{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Fm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>xl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(t,n=null,s=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.le=null}}function qv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new T1(r,t,n,s,o,u,f)}function Gm(r){const t=St(r);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>cm(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),ph(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Za(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Za(s)).join(",")),t.le=n}return t.le}function Km(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!f1(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!qT(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!jv(r.startAt,t.startAt)&&jv(r.endAt,t.endAt)}function hm(r){return ct.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,n=null,s=[],o=[],u=null,f="F",m=null,g=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=g,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function A1(r,t,n,s,o,u,f,m){return new ao(r,t,n,s,o,u,f,m)}function GT(r){return new ao(r)}function Hv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function KT(r){return r.collectionGroup!==null}function Il(r){const t=St(r);if(t.he===null){t.he=[];const n=new Set;for(const u of t.explicitOrderBy)t.he.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Ce(He.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(m=m.add(_.field))})}),m})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.he.push(new Ll(u,s))}),n.has(He.keyField().canonicalString())||t.he.push(new Ll(He.keyField(),s))}return t.he}function di(r){const t=St(r);return t.Pe||(t.Pe=S1(t,Il(r))),t.Pe}function S1(r,t){if(r.limitType==="F")return qv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Ll(o.field,u)});const n=r.endAt?new eh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new eh(r.startAt.position,r.startAt.inclusive):null;return qv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function fm(r,t){const n=r.filters.concat([t]);return new ao(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function dm(r,t,n){return new ao(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function _h(r,t){return Km(di(r),di(t))&&r.limitType===t.limitType}function QT(r){return`${Gm(di(r))}|lt:${r.limitType}`}function ja(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>HT(o)).join(", ")}]`),ph(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Za(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Za(o)).join(",")),`Target(${s})`}(di(r))}; limitType=${r.limitType})`}function yh(r,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ct.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,t)&&function(s,o){for(const u of Il(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,m,g){const _=Bv(f,m,g);return f.inclusive?_<=0:_<0}(s.startAt,Il(s),o)||s.endAt&&!function(f,m,g){const _=Bv(f,m,g);return f.inclusive?_>=0:_>0}(s.endAt,Il(s),o))}(r,t)}function b1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function YT(r){return(t,n)=>{let s=!1;for(const o of Il(r)){const u=w1(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function w1(r,t,n){const s=r.field.isKeyField()?ct.comparator(t.key,n.key):function(u,f,m){const g=f.data.field(u),_=m.data.field(u);return g!==null&&_!==null?Wa(g,_):vt()}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return vt()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Kr(this.inner,(n,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return OT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=new se(ct.comparator);function Xi(){return R1}const XT=new se(ct.comparator);function Sl(...r){let t=XT;for(const n of r)t=t.insert(n.key,n);return t}function $T(r){let t=XT;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ms(){return Cl()}function WT(){return Cl()}function Cl(){return new Gs(r=>r.toString(),(r,t)=>r.isEqual(t))}const I1=new se(ct.comparator),C1=new Ce(ct.comparator);function Vt(...r){let t=C1;for(const n of r)t=t.add(n);return t}const D1=new Ce(It);function O1(){return D1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zc(t)?"-0":t}}function ZT(r){return{integerValue:""+r}}function N1(r,t){return r1(t)?ZT(t):Qm(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this._=void 0}}function M1(r,t,n){return r instanceof nh?function(o,u){const f={fields:{[VT]:{stringValue:MT},[kT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Hm(u)&&(u=gh(u)),u&&(f.fields[UT]=u),{mapValue:f}}(n,t):r instanceof zl?t0(r,t):r instanceof Bl?e0(r,t):function(o,u){const f=JT(o,u),m=Fv(f)+Fv(o.Ie);return um(f)&&um(o.Ie)?ZT(m):Qm(o.serializer,m)}(r,t)}function V1(r,t,n){return r instanceof zl?t0(r,t):r instanceof Bl?e0(r,t):n}function JT(r,t){return r instanceof ih?function(s){return um(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class nh extends vh{}class zl extends vh{constructor(t){super(),this.elements=t}}function t0(r,t){const n=n0(t);for(const s of r.elements)n.some(o=>pi(o,s))||n.push(s);return{arrayValue:{values:n}}}class Bl extends vh{constructor(t){super(),this.elements=t}}function e0(r,t){let n=n0(t);for(const s of r.elements)n=n.filter(o=>!pi(o,s));return{arrayValue:{values:n}}}class ih extends vh{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Fv(r){return pe(r.integerValue||r.doubleValue)}function n0(r){return Fm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function U1(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof zl&&o instanceof zl||s instanceof Bl&&o instanceof Bl?$a(s.elements,o.elements,pi):s instanceof ih&&o instanceof ih?pi(s.Ie,o.Ie):s instanceof nh&&o instanceof nh}(r.transform,t.transform)}class k1{constructor(t,n){this.version=t,this.transformResults=n}}class qn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new qn}static exists(t){return new qn(void 0,t)}static updateTime(t){return new qn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Bc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Eh{}function i0(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Ym(r.key,qn.none()):new Yl(r.key,r.data,qn.none());{const n=r.data,s=ln.empty();let o=new Ce(He.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Qr(r.key,s,new vn(o.toArray()),qn.none())}}function P1(r,t,n){r instanceof Yl?function(o,u,f){const m=o.value.clone(),g=Kv(o.fieldTransforms,u,f.transformResults);m.setAll(g),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,n):r instanceof Qr?function(o,u,f){if(!Bc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=Kv(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(r0(o)),g.setAll(m),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Dl(r,t,n,s){return r instanceof Yl?function(u,f,m,g){if(!Bc(u.precondition,f))return m;const _=u.value.clone(),T=Qv(u.fieldTransforms,g,f);return _.setAll(T),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),null}(r,t,n,s):r instanceof Qr?function(u,f,m,g){if(!Bc(u.precondition,f))return m;const _=Qv(u.fieldTransforms,g,f),T=f.data;return T.setAll(r0(u)),T.setAll(_),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(b=>b.field))}(r,t,n,s):function(u,f,m){return Bc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,t,n)}function x1(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=JT(s.transform,o||null);u!=null&&(n===null&&(n=ln.empty()),n.set(s.field,u))}return n||null}function Gv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&$a(s,o,(u,f)=>U1(u,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Yl extends Eh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Qr extends Eh{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function r0(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function Kv(r,t,n){const s=new Map;qt(r.length===n.length);for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=t.data.field(u.field);s.set(u.field,V1(f,m,n[o]))}return s}function Qv(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,M1(u,f,t))}return s}class Ym extends Eh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class L1 extends Eh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&P1(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Dl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Dl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=WT();return this.mutations.forEach(o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const g=i0(f,m);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(At.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Vt())}isEqual(t){return this.batchId===t.batchId&&$a(this.mutations,t.mutations,(n,s)=>Gv(n,s))&&$a(this.baseMutations,t.baseMutations,(n,s)=>Gv(n,s))}}class Xm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){qt(t.mutations.length===s.length);let o=function(){return I1}();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Xm(t,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,xt;function q1(r){switch(r){case X.OK:return vt();case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return vt()}}function s0(r){if(r===void 0)return Yi("GRPC error has no .code"),X.UNKNOWN;switch(r){case Ee.OK:return X.OK;case Ee.CANCELLED:return X.CANCELLED;case Ee.UNKNOWN:return X.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return X.INTERNAL;case Ee.UNAVAILABLE:return X.UNAVAILABLE;case Ee.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Ee.NOT_FOUND:return X.NOT_FOUND;case Ee.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Ee.ABORTED:return X.ABORTED;case Ee.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Ee.DATA_LOSS:return X.DATA_LOSS;default:return vt()}}(xt=Ee||(Ee={}))[xt.OK=0]="OK",xt[xt.CANCELLED=1]="CANCELLED",xt[xt.UNKNOWN=2]="UNKNOWN",xt[xt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xt[xt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xt[xt.NOT_FOUND=5]="NOT_FOUND",xt[xt.ALREADY_EXISTS=6]="ALREADY_EXISTS",xt[xt.PERMISSION_DENIED=7]="PERMISSION_DENIED",xt[xt.UNAUTHENTICATED=16]="UNAUTHENTICATED",xt[xt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xt[xt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xt[xt.ABORTED=10]="ABORTED",xt[xt.OUT_OF_RANGE=11]="OUT_OF_RANGE",xt[xt.UNIMPLEMENTED=12]="UNIMPLEMENTED",xt[xt.INTERNAL=13]="INTERNAL",xt[xt.UNAVAILABLE=14]="UNAVAILABLE",xt[xt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=new Ur([4294967295,4294967295],0);function Yv(r){const t=IT().encode(r),n=new ET;return n.update(t),new Uint8Array(n.digest())}function Xv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Ur([n,s],0),new Ur([o,u],0)]}class $m{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new bl(`Invalid padding: ${n}`);if(s<0)throw new bl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new bl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new bl(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=Ur.fromNumber(this.Ee)}Ae(t,n,s){let o=t.add(n.multiply(Ur.fromNumber(s)));return o.compare(H1)===1&&(o=new Ur([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const n=Yv(t),[s,o]=Xv(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);if(!this.Re(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new $m(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(t){if(this.Ee===0)return;const n=Yv(t),[s,o]=Xv(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);this.Ve(f)}}Ve(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class bl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Xl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Th(At.min(),o,new se(It),Xi(),Vt())}}class Xl{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Xl(s,n,Vt(),Vt(),Vt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,n,s,o){this.me=t,this.removedTargetIds=n,this.key=s,this.fe=o}}class a0{constructor(t,n){this.targetId=t,this.ge=n}}class o0{constructor(t,n,s=Fe.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class $v{constructor(){this.pe=0,this.ye=Wv(),this.we=Fe.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=Vt(),n=Vt(),s=Vt();return this.ye.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:vt()}}),new Xl(this.we,this.Se,t,n,s)}Me(){this.be=!1,this.ye=Wv()}xe(t,n){this.be=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,qt(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class F1{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Xi(),this.$e=Cc(),this.Ue=Cc(),this.Ke=new se(It)}We(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(const n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,n=>{const s=this.He(n);switch(t.state){case 0:this.Je(n)&&s.Ce(t.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(t.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(n);break;case 3:this.Je(n)&&(s.Le(),s.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Ce(t.resumeToken));break;default:vt()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((s,o)=>{this.Je(o)&&n(o)})}Ze(t){const n=t.targetId,s=t.ge.count,o=this.Xe(n);if(o){const u=o.target;if(hm(u))if(s===0){const f=new ct(u.path);this.ze(n,f,$e.newNoDocument(f,At.min()))}else qt(s===1);else{const f=this.et(n);if(f!==s){const m=this.tt(t),g=m?this.nt(m,t,f):1;if(g!==0){this.Ye(n);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,_)}}}}}tt(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=Br(s).toUint8Array()}catch(g){if(g instanceof NT)return Xa("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new $m(f,o,u)}catch(g){return Xa(g instanceof bl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.Ee===0?null:m}nt(t,n,s){return n.ge.count===s-this.st(t,n.targetId)?0:2}st(t,n){const s=this.ke.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ke.it(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.ze(n,u,null),o++)}),o}ot(t){const n=new Map;this.qe.forEach((u,f)=>{const m=this.Xe(f);if(m){if(u.current&&hm(m.target)){const g=new ct(m.target.path);this._t(g).has(f)||this.ut(f,g)||this.ze(f,g,$e.newNoDocument(g,t))}u.ve&&(n.set(f,u.Fe()),u.Me())}});let s=Vt();this.Ue.forEach((u,f)=>{let m=!0;f.forEachWhile(g=>{const _=this.Xe(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.Qe.forEach((u,f)=>f.setReadTime(t));const o=new Th(t,n,this.Ke,this.Qe,s);return this.Qe=Xi(),this.$e=Cc(),this.Ue=Cc(),this.Ke=new se(It),o}Ge(t,n){if(!this.Je(t))return;const s=this.ut(t,n.key)?2:0;this.He(t).xe(n.key,s),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}ze(t,n,s){if(!this.Je(t))return;const o=this.He(t);this.ut(t,n)?o.xe(n,1):o.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),this.Ue=this.Ue.insert(n,this.ct(n).add(t)),s&&(this.Qe=this.Qe.insert(n,s))}removeTarget(t){this.qe.delete(t)}et(t){const n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new $v,this.qe.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new Ce(It),this.Ue=this.Ue.insert(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new Ce(It),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||rt("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new $v),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function Cc(){return new se(ct.comparator)}function Wv(){return new se(ct.comparator)}const G1={asc:"ASCENDING",desc:"DESCENDING"},K1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Q1={and:"AND",or:"OR"};class Y1{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function mm(r,t){return r.useProto3Json||ph(t)?t:{value:t}}function rh(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function l0(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function X1(r,t){return rh(r,t.toTimestamp())}function mi(r){return qt(!!r),At.fromTimestamp(function(n){const s=zr(n);return new Ae(s.seconds,s.nanos)}(r))}function Wm(r,t){return pm(r,t).canonicalString()}function pm(r,t){const n=function(o){return new Jt(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function u0(r){const t=Jt.fromString(r);return qt(m0(t)),t}function gm(r,t){return Wm(r.databaseId,t.path)}function Gd(r,t){const n=u0(t);if(n.get(1)!==r.databaseId.projectId)throw new st(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new st(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ct(h0(n))}function c0(r,t){return Wm(r.databaseId,t)}function $1(r){const t=u0(r);return t.length===4?Jt.emptyPath():h0(t)}function _m(r){return new Jt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function h0(r){return qt(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Zv(r,t,n){return{name:gm(r,t),fields:n.value.mapValue.fields}}function W1(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:vt()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(_,T){return _.useProto3Json?(qt(T===void 0||typeof T=="string"),Fe.fromBase64String(T||"")):(qt(T===void 0||T instanceof Buffer||T instanceof Uint8Array),Fe.fromUint8Array(T||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&function(_){const T=_.code===void 0?X.UNKNOWN:s0(_.code);return new st(T,_.message||"")}(f);n=new o0(s,o,u,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Gd(r,s.document.name),u=mi(s.document.updateTime),f=s.document.createTime?mi(s.document.createTime):At.min(),m=new ln({mapValue:{fields:s.document.fields}}),g=$e.newFoundDocument(o,u,f,m),_=s.targetIds||[],T=s.removedTargetIds||[];n=new jc(_,T,g.key,g)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Gd(r,s.document),u=s.readTime?mi(s.readTime):At.min(),f=$e.newNoDocument(o,u),m=s.removedTargetIds||[];n=new jc([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Gd(r,s.document),u=s.removedTargetIds||[];n=new jc([],u,o,null)}else{if(!("filter"in t))return vt();{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new j1(o,u),m=s.targetId;n=new a0(m,f)}}return n}function Z1(r,t){let n;if(t instanceof Yl)n={update:Zv(r,t.key,t.value)};else if(t instanceof Ym)n={delete:gm(r,t.key)};else if(t instanceof Qr)n={update:Zv(r,t.key,t.data),updateMask:oC(t.fieldMask)};else{if(!(t instanceof L1))return vt();n={verify:gm(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof nh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof zl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Bl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ih)return{fieldPath:f.field.canonicalString(),increment:m.Ie};throw vt()}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:X1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:vt()}(r,t.precondition)),n}function J1(r,t){return r&&r.length>0?(qt(t!==void 0),r.map(n=>function(o,u){let f=o.updateTime?mi(o.updateTime):mi(u);return f.isEqual(At.min())&&(f=mi(u)),new k1(f,o.transformResults||[])}(n,t))):[]}function tC(r,t){return{documents:[c0(r,t.path)]}}function eC(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=c0(r,o);const u=function(_){if(_.length!==0)return d0(Fn.create(_,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const f=function(_){if(_.length!==0)return _.map(T=>function(O){return{field:qa(O.field),direction:rC(O.dir)}}(T))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const m=mm(r,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(t.endAt)),{ht:n,parent:o}}function nC(r){let t=$1(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){qt(s===1);const T=n.from[0];T.allDescendants?o=T.collectionId:t=t.child(T.collectionId)}let u=[];n.where&&(u=function(b){const O=f0(b);return O instanceof Fn&&jT(O)?O.getFilters():[O]}(n.where));let f=[];n.orderBy&&(f=function(b){return b.map(O=>function(K){return new Ll(Ha(K.field),function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(K.direction))}(O))}(n.orderBy));let m=null;n.limit&&(m=function(b){let O;return O=typeof b=="object"?b.value:b,ph(O)?null:O}(n.limit));let g=null;n.startAt&&(g=function(b){const O=!!b.before,q=b.values||[];return new eh(q,O)}(n.startAt));let _=null;return n.endAt&&(_=function(b){const O=!b.before,q=b.values||[];return new eh(q,O)}(n.endAt)),A1(t,o,f,u,m,"F",g,_)}function iC(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return vt()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function f0(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ha(n.unaryFilter.field);return Te.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ha(n.unaryFilter.field);return Te.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ha(n.unaryFilter.field);return Te.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ha(n.unaryFilter.field);return Te.create(f,"!=",{nullValue:"NULL_VALUE"});default:return vt()}}(r):r.fieldFilter!==void 0?function(n){return Te.create(Ha(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return vt()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Fn.create(n.compositeFilter.filters.map(s=>f0(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return vt()}}(n.compositeFilter.op))}(r):vt()}function rC(r){return G1[r]}function sC(r){return K1[r]}function aC(r){return Q1[r]}function qa(r){return{fieldPath:r.canonicalString()}}function Ha(r){return He.fromServerFormat(r.fieldPath)}function d0(r){return r instanceof Te?function(n){if(n.op==="=="){if(zv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NAN"}};if(Lv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(zv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NOT_NAN"}};if(Lv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qa(n.field),op:sC(n.op),value:n.value}}}(r):r instanceof Fn?function(n){const s=n.getFilters().map(o=>d0(o));return s.length===1?s[0]:{compositeFilter:{op:aC(n.op),filters:s}}}(r):vt()}function oC(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function m0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,n,s,o,u=At.min(),f=At.min(),m=Fe.EMPTY_BYTE_STRING,g=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(t){return new Nr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(t){this.Tt=t}}function uC(r){const t=nC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?dm(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.Tn=new hC}addToCollectionParentIndex(t,n){return this.Tn.add(n),Y.resolve()}getCollectionParents(t,n){return Y.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return Y.resolve()}deleteFieldIndex(t,n){return Y.resolve()}deleteAllFieldIndexes(t){return Y.resolve()}createTargetIndexes(t,n){return Y.resolve()}getDocumentsMatchingTarget(t,n){return Y.resolve(null)}getIndexType(t,n){return Y.resolve(0)}getFieldIndexes(t,n){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,n){return Y.resolve(Lr.min())}getMinOffsetFromCollectionGroup(t,n){return Y.resolve(Lr.min())}updateCollectionGroup(t,n,s){return Y.resolve()}updateIndexEntries(t,n){return Y.resolve()}}class hC{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Ce(Jt.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Ce(Jt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},p0=41943040;class on{static withCacheSize(t){return new on(t,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(p0,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Ja(0)}static Kn(){return new Ja(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="LruGarbageCollector",fC=1048576;function eE([r,t],[n,s]){const o=It(r,n);return o===0?It(t,s):o}class dC{constructor(t){this.Hn=t,this.buffer=new Ce(eE),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();eE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class mC{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){rt(tE,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){so(n)?rt(tE,"Ignoring IndexedDB error during garbage collection: ",n):await ro(n)}await this.er(3e5)})}}class pC{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return Y.resolve(mh.ae);const s=new dC(n);return this.tr.forEachTarget(t,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(t,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.tr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(rt("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(Jv)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(rt("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jv):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let s,o,u,f,m,g,_;const T=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(rt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(t,o))).next(b=>(s=b,m=Date.now(),this.removeTargets(t,s,n))).next(b=>(u=b,g=Date.now(),this.removeOrphanedDocuments(t,s))).next(b=>(_=Date.now(),Ba()<=Mt.DEBUG&&rt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${b} documents in `+(_-g)+`ms
Total Duration: ${_-T}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b})))}}function gC(r,t){return new pC(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this.changes=new Gs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,$e.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Dl(s.mutation,o,vn.empty(),Ae.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Vt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Vt()){const o=Ms();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(u=>{let f=Sl();return u.forEach((m,g)=>{f=f.insert(m,g.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Ms();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Vt()))}populateOverlays(t,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(t,n,s,o){let u=Xi();const f=Cl(),m=function(){return Cl()}();return n.forEach((g,_)=>{const T=s.get(_.key);o.has(_.key)&&(T===void 0||T.mutation instanceof Qr)?u=u.insert(_.key,_):T!==void 0?(f.set(_.key,T.mutation.getFieldMask()),Dl(T.mutation,_,T.mutation.getFieldMask(),Ae.now())):f.set(_.key,vn.empty())}),this.recalculateAndSaveOverlays(t,u).next(g=>(g.forEach((_,T)=>f.set(_,T)),n.forEach((_,T)=>{var b;return m.set(_,new yC(T,(b=f.get(_))!==null&&b!==void 0?b:null))}),m))}recalculateAndSaveOverlays(t,n){const s=Cl();let o=new se((f,m)=>f-m),u=Vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const m of f)m.keys().forEach(g=>{const _=n.get(g);if(_===null)return;let T=s.get(g)||vn.empty();T=m.applyToLocalView(_,T),s.set(g,T);const b=(o.get(m.batchId)||Vt()).add(g);o=o.insert(m.batchId,b)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,T=g.value,b=WT();T.forEach(O=>{if(!u.has(O)){const q=i0(n.get(O),s.get(O));q!==null&&b.set(O,q),u=u.add(O)}}),f.push(this.documentOverlayCache.saveOverlays(t,_,b))}return Y.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return ct.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):KT(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):Y.resolve(Ms());let m=Ul,g=u;return f.next(_=>Y.forEach(_,(T,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),u.get(T)?Y.resolve():this.remoteDocumentCache.getEntry(t,T).next(O=>{g=g.insert(T,O)}))).next(()=>this.populateOverlays(t,_,u)).next(()=>this.computeViews(t,g,_,Vt())).next(T=>({batchId:m,changes:$T(T)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ct(n)).next(s=>{let o=Sl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=Sl();return this.indexManager.getCollectionParents(t,u).next(m=>Y.forEach(m,g=>{const _=function(b,O){return new ao(O,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(t,_,s,o).next(T=>{T.forEach((b,O)=>{f=f.insert(b,O)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o))).next(f=>{u.forEach((g,_)=>{const T=_.getKey();f.get(T)===null&&(f=f.insert(T,$e.newInvalidDocument(T)))});let m=Sl();return f.forEach((g,_)=>{const T=u.get(g);T!==void 0&&Dl(T.mutation,_,vn.empty(),Ae.now()),yh(n,_)&&(m=m.insert(g,_))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return Y.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:mi(o.createTime)}}(n)),Y.resolve()}getNamedQuery(t,n){return Y.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(o){return{name:o.name,query:uC(o.bundledQuery),readTime:mi(o.readTime)}}(n)),Y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(){this.overlays=new se(ct.comparator),this.Rr=new Map}getOverlay(t,n){return Y.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ms();return Y.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,u)=>{this.Et(t,n,u)}),Y.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),Y.resolve()}getOverlaysForCollection(t,n,s){const o=Ms(),u=n.length+1,f=new ct(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!n.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return Y.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new se((_,T)=>_-T);const f=this.overlays.getIterator();for(;f.hasNext();){const _=f.getNext().value;if(_.getKey().getCollectionGroup()===n&&_.largestBatchId>s){let T=u.get(_.largestBatchId);T===null&&(T=Ms(),u=u.insert(_.largestBatchId,T)),T.set(_.getKey(),_)}}const m=Ms(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,T)=>m.set(_,T)),!(m.size()>=o)););return Y.resolve(m)}Et(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new B1(n,s));let u=this.Rr.get(n);u===void 0&&(u=Vt(),this.Rr.set(n,u)),this.Rr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(t){return Y.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,Y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.Vr=new Ce(ke.mr),this.gr=new Ce(ke.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const s=new ke(t,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.wr(new ke(t,n))}Sr(t,n){t.forEach(s=>this.removeReference(s,n))}br(t){const n=new ct(new Jt([])),s=new ke(n,t),o=new ke(n,t+1),u=[];return this.gr.forEachInRange([s,o],f=>{this.wr(f),u.push(f.key)}),u}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new ct(new Jt([])),s=new ke(n,t),o=new ke(n,t+1);let u=Vt();return this.gr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(t){const n=new ke(t,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ke{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return ct.comparator(t.key,n.key)||It(t.Cr,n.Cr)}static pr(t,n){return It(t.Cr,n.Cr)||ct.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ce(ke.mr)}checkEmpty(t){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new z1(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Mr=this.Mr.add(new ke(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return Y.resolve(f)}lookupMutationBatch(t,n){return Y.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.Nr(s),u=o<0?0:o;return Y.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?qm:this.Fr-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new ke(n,0),o=new ke(n,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],f=>{const m=this.Or(f.Cr);u.push(m)}),Y.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Ce(It);return n.forEach(o=>{const u=new ke(o,0),f=new ke(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,f],m=>{s=s.add(m.Cr)})}),Y.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;ct.isDocumentKey(u)||(u=u.child(""));const f=new ke(new ct(u),0);let m=new Ce(It);return this.Mr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Cr)),!0)},f),Y.resolve(this.Br(m))}Br(t){const n=[];return t.forEach(s=>{const o=this.Or(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){qt(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return Y.forEach(n.mutations,o=>{const u=new ke(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Mr=s})}qn(t){}containsKey(t,n){const s=new ke(n,0),o=this.Mr.firstAfterOrEqual(s);return Y.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(t){this.kr=t,this.docs=function(){return new se(ct.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(t,n){let s=Xi();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():$e.newInvalidDocument(o))}),Y.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=Xi();const f=n.path,m=new ct(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:T}}=g.getNext();if(!f.isPrefixOf(_.path))break;_.path.length>f.length+1||t1(JI(T),s)<=0||(o.has(T.key)||yh(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return Y.resolve(u)}getAllFromCollectionGroup(t,n,s,o){vt()}qr(t,n){return Y.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new wC(this)}getSize(t){return Y.resolve(this.size)}}class wC extends _C{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Ir.addEntry(t,o)):this.Ir.removeEntry(s)}),Y.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(t){this.persistence=t,this.Qr=new Gs(n=>Gm(n),Km),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Zm,this.targetCount=0,this.Kr=Ja.Un()}forEachTarget(t,n){return this.Qr.forEach((s,o)=>n(o)),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),Y.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Kr=new Ja(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,Y.resolve()}updateTargetData(t,n){return this.zn(n),Y.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.Qr.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.Qr.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)}),Y.waitFor(u).next(()=>o)}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,n){const s=this.Qr.get(n)||null;return Y.resolve(s)}addMatchingKeys(t,n,s){return this.Ur.yr(n,s),Y.resolve()}removeMatchingKeys(t,n,s){this.Ur.Sr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(t,f))}),Y.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.Ur.br(n),Y.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ur.vr(n);return Y.resolve(s)}containsKey(t,n){return Y.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new mh(0),this.zr=!1,this.zr=!0,this.jr=new AC,this.referenceDelegate=t(this),this.Hr=new RC(this),this.indexManager=new cC,this.remoteDocumentCache=function(o){return new bC(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new lC(n),this.Yr=new EC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new TC,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Wr[t.toKey()];return s||(s=new SC(n,this.referenceDelegate),this.Wr[t.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,s){rt("MemoryPersistence","Starting transaction:",t);const o=new IC(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(t,n){return Y.or(Object.values(this.Wr).map(s=>()=>s.containsKey(t,n)))}}class IC extends n1{constructor(t){super(),this.currentSequenceNumber=t}}class Jm{constructor(t){this.persistence=t,this.ti=new Zm,this.ni=null}static ri(t){return new Jm(t)}get ii(){if(this.ni)return this.ni;throw vt()}addReference(t,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),Y.resolve()}removeReference(t,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),Y.resolve()}removeTarget(t,n){this.ti.br(n.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.ii,s=>{const o=ct.fromPath(s);return this.si(t,o).next(u=>{u||n.removeEntry(o,At.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return Y.or([()=>Y.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class sh{constructor(t,n){this.persistence=t,this.oi=new Gs(s=>s1(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=gC(this,n)}static ri(t,n){return new sh(t,n)}Zr(){}Xr(t){return Y.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}sr(t){let n=0;return this.rr(t,s=>{n++}).next(()=>n)}rr(t,n){return Y.forEach(this.oi,(s,o)=>this.ar(t,s,o).next(u=>u?Y.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(t,f=>this.ar(t,f,n).next(m=>{m||(s++,u.removeEntry(f,At.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),Y.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.oi.set(s,t.currentSequenceNumber),Y.resolve()}removeReference(t,n,s){return this.oi.set(s,t.currentSequenceNumber),Y.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),Y.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Lc(t.data.value)),n}ar(t,n,s){return Y.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.oi.get(n);return Y.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Hi=s,this.Ji=o}static Yi(t,n){let s=Vt(),o=Vt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new tp(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return ob()?8:i1(We())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.rs(t,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ss(t,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new CC;return this._s(t,n,f).next(m=>{if(u.result=m,this.Xi)return this.us(t,n,f,m.size)})}).next(()=>u.result)}us(t,n,s,o){return s.documentReadCount<this.es?(Ba()<=Mt.DEBUG&&rt("QueryEngine","SDK will not create cache indexes for query:",ja(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),Y.resolve()):(Ba()<=Mt.DEBUG&&rt("QueryEngine","Query:",ja(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(Ba()<=Mt.DEBUG&&rt("QueryEngine","The SDK decides to create cache indexes for query:",ja(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,di(n))):Y.resolve())}rs(t,n){if(Hv(n))return Y.resolve(null);let s=di(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=dm(n,null,"F"),s=di(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const f=Vt(...u);return this.ns.getDocuments(t,f).next(m=>this.indexManager.getMinOffset(t,s).next(g=>{const _=this.cs(n,m);return this.ls(n,_,f,g.readTime)?this.rs(t,dm(n,null,"F")):this.hs(t,_,n,g)}))})))}ss(t,n,s,o){return Hv(n)||o.isEqual(At.min())?Y.resolve(null):this.ns.getDocuments(t,s).next(u=>{const f=this.cs(n,u);return this.ls(n,f,s,o)?Y.resolve(null):(Ba()<=Mt.DEBUG&&rt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ja(n)),this.hs(t,f,n,ZI(o,Ul)).next(m=>m))})}cs(t,n){let s=new Ce(YT(t));return n.forEach((o,u)=>{yh(t,u)&&(s=s.add(u))}),s}ls(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(t,n,s){return Ba()<=Mt.DEBUG&&rt("QueryEngine","Using full collection scan to execute query:",ja(n)),this.ns.getDocumentsMatchingQuery(t,n,Lr.min(),s)}hs(t,n,s,o){return this.ns.getDocumentsMatchingQuery(t,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="LocalStore",OC=3e8;class NC{constructor(t,n,s,o){this.persistence=t,this.Ps=n,this.serializer=o,this.Ts=new se(It),this.Is=new Gs(u=>Gm(u),Km),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(s)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vC(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function MC(r,t,n,s){return new NC(r,t,n,s)}async function _0(r,t){const n=St(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.As(t),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let g=Vt();for(const _ of o){f.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}for(const _ of u){m.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}return n.localDocuments.getDocuments(s,g).next(_=>({Rs:_,removedBatchIds:f,addedBatchIds:m}))})})}function VC(r,t){const n=St(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),u=n.ds.newChangeBuffer({trackRemovals:!0});return function(m,g,_,T){const b=_.batch,O=b.keys();let q=Y.resolve();return O.forEach(K=>{q=q.next(()=>T.getEntry(g,K)).next(et=>{const W=_.docVersions.get(K);qt(W!==null),et.version.compareTo(W)<0&&(b.applyToRemoteDocument(et,_),et.isValidDocument()&&(et.setReadTime(_.commitVersion),T.addEntry(et)))})}),q.next(()=>m.mutationQueue.removeMutationBatch(g,b))}(n,s,t,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Vt();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function y0(r){const t=St(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function UC(r,t){const n=St(r),s=t.snapshotVersion;let o=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.ds.newChangeBuffer({trackRemovals:!0});o=n.Ts;const m=[];t.targetChanges.forEach((T,b)=>{const O=o.get(b);if(!O)return;m.push(n.Hr.removeMatchingKeys(u,T.removedDocuments,b).next(()=>n.Hr.addMatchingKeys(u,T.addedDocuments,b)));let q=O.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(b)!==null?q=q.withResumeToken(Fe.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):T.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(T.resumeToken,s)),o=o.insert(b,q),function(et,W,Et){return et.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-et.snapshotVersion.toMicroseconds()>=OC?!0:Et.addedDocuments.size+Et.modifiedDocuments.size+Et.removedDocuments.size>0}(O,q,T)&&m.push(n.Hr.updateTargetData(u,q))});let g=Xi(),_=Vt();if(t.documentUpdates.forEach(T=>{t.resolvedLimboDocuments.has(T)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))}),m.push(kC(u,f,t.documentUpdates).next(T=>{g=T.Vs,_=T.fs})),!s.isEqual(At.min())){const T=n.Hr.getLastRemoteSnapshotVersion(u).next(b=>n.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(T)}return Y.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,g,_)).next(()=>g)}).then(u=>(n.Ts=o,u))}function kC(r,t,n){let s=Vt(),o=Vt();return n.forEach(u=>s=s.add(u)),t.getEntries(r,s).next(u=>{let f=Xi();return n.forEach((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(At.min())?(t.removeEntry(m,g.readTime),f=f.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(t.addEntry(g),f=f.insert(m,g)):rt(ep,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)}),{Vs:f,fs:o}})}function PC(r,t){const n=St(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=qm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function xC(r,t){const n=St(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Hr.getTargetData(s,t).next(u=>u?(o=u,Y.resolve(o)):n.Hr.allocateTargetId(s).next(f=>(o=new Nr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(s.targetId,s),n.Is.set(t,s.targetId)),s})}async function ym(r,t,n){const s=St(r),o=s.Ts.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!so(f))throw f;rt(ep,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ts=s.Ts.remove(t),s.Is.delete(o.target)}function nE(r,t,n){const s=St(r);let o=At.min(),u=Vt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(g,_,T){const b=St(g),O=b.Is.get(T);return O!==void 0?Y.resolve(b.Ts.get(O)):b.Hr.getTargetData(_,T)}(s,f,di(t)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,m.targetId).next(g=>{u=g})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,t,n?o:At.min(),n?u:Vt())).next(m=>(LC(s,b1(t),m),{documents:m,gs:u})))}function LC(r,t,n){let s=r.Es.get(t)||At.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Es.set(t,s)}class iE{constructor(){this.activeTargetIds=O1()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zC{constructor(){this.ho=new iE,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,s){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new iE,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="ConnectivityMonitor";class sE{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){rt(rE,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){rt(rE,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc=null;function vm(){return Dc===null?Dc=function(){return 268435456+Math.round(2147483648*Math.random())}():Dc++,"0x"+Dc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="RestConnection",jC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qC{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===Jc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(t,n,s,o,u){const f=vm(),m=this.bo(t,n.toUriEncodedString());rt(Kd,`Sending RPC '${t}' ${f}:`,m,s);const g={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(g,o,u),this.vo(t,m,g,s).then(_=>(rt(Kd,`Received RPC '${t}' ${f}: `,_),_),_=>{throw Xa(Kd,`RPC '${t}' ${f} failed with error: `,_,"url: ",m,"request:",s),_})}Co(t,n,s,o,u,f){return this.So(t,n,s,o,u)}Do(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+io}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}bo(t,n){const s=jC[t];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class FC extends qC{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,s,o){const u=vm();return new Promise((f,m)=>{const g=new TT;g.setWithCredentials(!0),g.listenOnce(AT.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case xc.NO_ERROR:const T=g.getResponseJson();rt(Ye,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(T)),f(T);break;case xc.TIMEOUT:rt(Ye,`RPC '${t}' ${u} timed out`),m(new st(X.DEADLINE_EXCEEDED,"Request time out"));break;case xc.HTTP_ERROR:const b=g.getStatus();if(rt(Ye,`RPC '${t}' ${u} failed with status:`,b,"response text:",g.getResponseText()),b>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const q=O==null?void 0:O.error;if(q&&q.status&&q.message){const K=function(W){const Et=W.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(Et)>=0?Et:X.UNKNOWN}(q.status);m(new st(K,q.message))}else m(new st(X.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new st(X.UNAVAILABLE,"Connection failed."));break;default:vt()}}finally{rt(Ye,`RPC '${t}' ${u} completed.`)}});const _=JSON.stringify(o);rt(Ye,`RPC '${t}' ${u} sending request:`,o),g.send(n,"POST",_,s,15)})}Wo(t,n,s){const o=vm(),u=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=wT(),m=bT(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Do(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const T=u.join("");rt(Ye,`Creating RPC '${t}' stream ${o}: ${T}`,g);const b=f.createWebChannel(T,g);let O=!1,q=!1;const K=new HC({Fo:W=>{q?rt(Ye,`Not sending because RPC '${t}' stream ${o} is closed:`,W):(O||(rt(Ye,`Opening RPC '${t}' stream ${o} transport.`),b.open(),O=!0),rt(Ye,`RPC '${t}' stream ${o} sending:`,W),b.send(W))},Mo:()=>b.close()}),et=(W,Et,dt)=>{W.listen(Et,ot=>{try{dt(ot)}catch(_t){setTimeout(()=>{throw _t},0)}})};return et(b,Al.EventType.OPEN,()=>{q||(rt(Ye,`RPC '${t}' stream ${o} transport opened.`),K.Qo())}),et(b,Al.EventType.CLOSE,()=>{q||(q=!0,rt(Ye,`RPC '${t}' stream ${o} transport closed`),K.Uo())}),et(b,Al.EventType.ERROR,W=>{q||(q=!0,Xa(Ye,`RPC '${t}' stream ${o} transport errored:`,W),K.Uo(new st(X.UNAVAILABLE,"The operation could not be completed")))}),et(b,Al.EventType.MESSAGE,W=>{var Et;if(!q){const dt=W.data[0];qt(!!dt);const ot=dt,_t=(ot==null?void 0:ot.error)||((Et=ot[0])===null||Et===void 0?void 0:Et.error);if(_t){rt(Ye,`RPC '${t}' stream ${o} received error:`,_t);const mt=_t.status;let wt=function(R){const N=Ee[R];if(N!==void 0)return s0(N)}(mt),M=_t.message;wt===void 0&&(wt=X.INTERNAL,M="Unknown error status: "+mt+" with message "+_t.message),q=!0,K.Uo(new st(wt,M)),b.close()}else rt(Ye,`RPC '${t}' stream ${o} received:`,dt),K.Ko(dt)}}),et(m,ST.STAT_EVENT,W=>{W.stat===am.PROXY?rt(Ye,`RPC '${t}' stream ${o} detected buffering proxy`):W.stat===am.NOPROXY&&rt(Ye,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{K.$o()},0),K}}function Qd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(r){return new Y1(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(t,n,s=1e3,o=1.5,u=6e4){this.Ti=t,this.timerId=n,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,n-s);o>0&&rt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="PersistentStream";class E0{constructor(t,n,s,o,u,f,m,g){this.Ti=t,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new v0(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(Yi(n.toString()),Yi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===n&&this.V_(s,o)},s=>{t(()=>{const o=new st(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(t,n){const s=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return rt(aE,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(rt(aE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GC extends E0{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const n=W1(this.serializer,t),s=function(u){if(!("targetChange"in u))return At.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?At.min():f.readTime?mi(f.readTime):At.min()}(t);return this.listener.p_(n,s)}y_(t){const n={};n.database=_m(this.serializer),n.addTarget=function(u,f){let m;const g=f.target;if(m=hm(g)?{documents:tC(u,g)}:{query:eC(u,g).ht},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=l0(u,f.resumeToken);const _=mm(u,f.expectedCount);_!==null&&(m.expectedCount=_)}else if(f.snapshotVersion.compareTo(At.min())>0){m.readTime=rh(u,f.snapshotVersion.toTimestamp());const _=mm(u,f.expectedCount);_!==null&&(m.expectedCount=_)}return m}(this.serializer,t);const s=iC(this.serializer,t);s&&(n.labels=s),this.I_(n)}w_(t){const n={};n.database=_m(this.serializer),n.removeTarget=t,this.I_(n)}}class KC extends E0{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return qt(!!t.streamToken),this.lastStreamToken=t.streamToken,qt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){qt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const n=J1(t.writeResults,t.commitTime),s=mi(t.commitTime);return this.listener.v_(s,n)}C_(){const t={};t.database=_m(this.serializer),this.I_(t)}b_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Z1(this.serializer,s))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{}class YC extends QC{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new st(X.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.So(t,pm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new st(X.UNKNOWN,u.toString())})}Co(t,n,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Co(t,pm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new st(X.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class XC{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Yi(n),this.N_=!1):rt("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="RemoteStore";class $C{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(f=>{s.enqueueAndForget(async()=>{Ks(this)&&(rt(Bs,"Restarting streams for network reachability change."),await async function(g){const _=St(g);_.W_.add(4),await $l(_),_.j_.set("Unknown"),_.W_.delete(4),await Sh(_)}(this))})}),this.j_=new XC(s,o)}}async function Sh(r){if(Ks(r))for(const t of r.G_)await t(!0)}async function $l(r){for(const t of r.G_)await t(!1)}function T0(r,t){const n=St(r);n.K_.has(t.targetId)||(n.K_.set(t.targetId,t),sp(n)?rp(n):oo(n).c_()&&ip(n,t))}function np(r,t){const n=St(r),s=oo(n);n.K_.delete(t),s.c_()&&A0(n,t),n.K_.size===0&&(s.c_()?s.P_():Ks(n)&&n.j_.set("Unknown"))}function ip(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}oo(r).y_(t)}function A0(r,t){r.H_.Ne(t),oo(r).w_(t)}function rp(r){r.H_=new F1({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.K_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),oo(r).start(),r.j_.B_()}function sp(r){return Ks(r)&&!oo(r).u_()&&r.K_.size>0}function Ks(r){return St(r).W_.size===0}function S0(r){r.H_=void 0}async function WC(r){r.j_.set("Online")}async function ZC(r){r.K_.forEach((t,n)=>{ip(r,t)})}async function JC(r,t){S0(r),sp(r)?(r.j_.q_(t),rp(r)):r.j_.set("Unknown")}async function tD(r,t,n){if(r.j_.set("Online"),t instanceof o0&&t.state===2&&t.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.K_.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.K_.delete(m),o.H_.removeTarget(m))}(r,t)}catch(s){rt(Bs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await ah(r,s)}else if(t instanceof jc?r.H_.We(t):t instanceof a0?r.H_.Ze(t):r.H_.je(t),!n.isEqual(At.min()))try{const s=await y0(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.H_.ot(f);return m.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const T=u.K_.get(_);T&&u.K_.set(_,T.withResumeToken(g.resumeToken,f))}}),m.targetMismatches.forEach((g,_)=>{const T=u.K_.get(g);if(!T)return;u.K_.set(g,T.withResumeToken(Fe.EMPTY_BYTE_STRING,T.snapshotVersion)),A0(u,g);const b=new Nr(T.target,g,_,T.sequenceNumber);ip(u,b)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){rt(Bs,"Failed to raise snapshot:",s),await ah(r,s)}}async function ah(r,t,n){if(!so(t))throw t;r.W_.add(1),await $l(r),r.j_.set("Offline"),n||(n=()=>y0(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{rt(Bs,"Retrying IndexedDB access"),await n(),r.W_.delete(1),await Sh(r)})}function b0(r,t){return t().catch(n=>ah(r,n,t))}async function bh(r){const t=St(r),n=qr(t);let s=t.U_.length>0?t.U_[t.U_.length-1].batchId:qm;for(;eD(t);)try{const o=await PC(t.localStore,s);if(o===null){t.U_.length===0&&n.P_();break}s=o.batchId,nD(t,o)}catch(o){await ah(t,o)}w0(t)&&R0(t)}function eD(r){return Ks(r)&&r.U_.length<10}function nD(r,t){r.U_.push(t);const n=qr(r);n.c_()&&n.S_&&n.b_(t.mutations)}function w0(r){return Ks(r)&&!qr(r).u_()&&r.U_.length>0}function R0(r){qr(r).start()}async function iD(r){qr(r).C_()}async function rD(r){const t=qr(r);for(const n of r.U_)t.b_(n.mutations)}async function sD(r,t,n){const s=r.U_.shift(),o=Xm.from(s,t,n);await b0(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await bh(r)}async function aD(r,t){t&&qr(r).S_&&await async function(s,o){if(function(f){return q1(f)&&f!==X.ABORTED}(o.code)){const u=s.U_.shift();qr(s).h_(),await b0(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await bh(s)}}(r,t),w0(r)&&R0(r)}async function oE(r,t){const n=St(r);n.asyncQueue.verifyOperationInProgress(),rt(Bs,"RemoteStore received new credentials");const s=Ks(n);n.W_.add(3),await $l(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await Sh(n)}async function oD(r,t){const n=St(r);t?(n.W_.delete(2),await Sh(n)):t||(n.W_.add(2),await $l(n),n.j_.set("Unknown"))}function oo(r){return r.J_||(r.J_=function(n,s,o){const u=St(n);return u.M_(),new GC(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:WC.bind(null,r),No:ZC.bind(null,r),Lo:JC.bind(null,r),p_:tD.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),sp(r)?rp(r):r.j_.set("Unknown")):(await r.J_.stop(),S0(r))})),r.J_}function qr(r){return r.Y_||(r.Y_=function(n,s,o){const u=St(n);return u.M_(),new KC(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:iD.bind(null,r),Lo:aD.bind(null,r),D_:rD.bind(null,r),v_:sD.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await bh(r)):(await r.Y_.stop(),r.U_.length>0&&(rt(Bs,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,m=new ap(t,n,f,o,u);return m.start(s),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new st(X.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function op(r,t){if(Yi("AsyncQueue",`${t}: ${r}`),so(r))return new st(X.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{static emptySet(t){return new Ya(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ct.comparator(n.key,s.key):(n,s)=>ct.comparator(n.key,s.key),this.keyedMap=Sl(),this.sortedSet=new se(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ya)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ya;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.Z_=new se(ct.comparator)}track(t){const n=t.doc.key,s=this.Z_.get(n);s?t.type!==0&&s.type===3?this.Z_=this.Z_.insert(n,t):t.type===3&&s.type!==1?this.Z_=this.Z_.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Z_=this.Z_.remove(n):t.type===1&&s.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):vt():this.Z_=this.Z_.insert(n,t)}X_(){const t=[];return this.Z_.inorderTraversal((n,s)=>{t.push(s)}),t}}class to{constructor(t,n,s,o,u,f,m,g,_){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new to(t,n,Ya.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_h(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class uD{constructor(){this.queries=uE(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const o=St(n),u=o.queries;o.queries=uE(),u.forEach((f,m)=>{for(const g of m.ta)g.onError(s)})})(this,new st(X.ABORTED,"Firestore shutting down"))}}function uE(){return new Gs(r=>QT(r),_h)}async function cD(r,t){const n=St(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.na()&&t.ra()&&(s=2):(u=new lD,s=t.ra()?0:1);try{switch(s){case 0:u.ea=await n.onListen(o,!0);break;case 1:u.ea=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=op(f,`Initialization of query '${ja(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.ta.push(t),t.sa(n.onlineState),u.ea&&t.oa(u.ea)&&lp(n)}async function hD(r,t){const n=St(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.ta.indexOf(t);f>=0&&(u.ta.splice(f,1),u.ta.length===0?o=t.ra()?0:1:!u.na()&&t.ra()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function fD(r,t){const n=St(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.ta)m.oa(o)&&(s=!0);f.ea=o}}s&&lp(n)}function dD(r,t,n){const s=St(r),o=s.queries.get(t);if(o)for(const u of o.ta)u.onError(n);s.queries.delete(t)}function lp(r){r.ia.forEach(t=>{t.next()})}var Em,cE;(cE=Em||(Em={}))._a="default",cE.Cache="cache";class mD{constructor(t,n,s){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new to(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){if(!t.fromCache||!this.ra())return!0;const s=n!=="Offline";return(!this.options.Ta||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}la(t){if(t.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(t){t=to.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Em.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(t){this.key=t}}class C0{constructor(t){this.key=t}}class pD{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Vt(),this.mutatedKeys=Vt(),this.ya=YT(t),this.wa=new Ya(this.ya)}get Sa(){return this.fa}ba(t,n){const s=n?n.Da:new lE,o=n?n.wa:this.wa;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((T,b)=>{const O=o.get(T),q=yh(this.query,b)?b:null,K=!!O&&this.mutatedKeys.has(O.key),et=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let W=!1;O&&q?O.data.isEqual(q.data)?K!==et&&(s.track({type:3,doc:q}),W=!0):this.va(O,q)||(s.track({type:2,doc:q}),W=!0,(g&&this.ya(q,g)>0||_&&this.ya(q,_)<0)&&(m=!0)):!O&&q?(s.track({type:0,doc:q}),W=!0):O&&!q&&(s.track({type:1,doc:O}),W=!0,(g||_)&&(m=!0)),W&&(q?(f=f.add(q),u=et?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{wa:f,Da:s,ls:m,mutatedKeys:u}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const f=t.Da.X_();f.sort((T,b)=>function(q,K){const et=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return vt()}};return et(q)-et(K)}(T.type,b.type)||this.ya(T.doc,b.doc)),this.Ca(s),o=o!=null&&o;const m=n&&!o?this.Fa():[],g=this.pa.size===0&&this.current&&!o?1:0,_=g!==this.ga;return this.ga=g,f.length!==0||_?{snapshot:new to(this.query,t.wa,u,f,t.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new lE,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Vt(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const n=[];return t.forEach(s=>{this.pa.has(s)||n.push(new C0(s))}),this.pa.forEach(s=>{t.has(s)||n.push(new I0(s))}),n}Oa(t){this.fa=t.gs,this.pa=Vt();const n=this.ba(t.documents);return this.applyChanges(n,!0)}Na(){return to.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const up="SyncEngine";class gD{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class _D{constructor(t){this.key=t,this.Ba=!1}}class yD{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new Gs(m=>QT(m),_h),this.qa=new Map,this.Qa=new Set,this.$a=new se(ct.comparator),this.Ua=new Map,this.Ka=new Zm,this.Wa={},this.Ga=new Map,this.za=Ja.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function vD(r,t,n=!0){const s=U0(r);let o;const u=s.ka.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await D0(s,t,n,!0),o}async function ED(r,t){const n=U0(r);await D0(n,t,!0,!1)}async function D0(r,t,n,s){const o=await xC(r.localStore,di(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await TD(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&T0(r.remoteStore,o),m}async function TD(r,t,n,s,o){r.Ha=(b,O,q)=>async function(et,W,Et,dt){let ot=W.view.ba(Et);ot.ls&&(ot=await nE(et.localStore,W.query,!1).then(({documents:M})=>W.view.ba(M,ot)));const _t=dt&&dt.targetChanges.get(W.targetId),mt=dt&&dt.targetMismatches.get(W.targetId)!=null,wt=W.view.applyChanges(ot,et.isPrimaryClient,_t,mt);return fE(et,W.targetId,wt.Ma),wt.snapshot}(r,b,O,q);const u=await nE(r.localStore,t,!0),f=new pD(t,u.gs),m=f.ba(u.documents),g=Xl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),_=f.applyChanges(m,r.isPrimaryClient,g);fE(r,n,_.Ma);const T=new gD(t,n,f);return r.ka.set(t,T),r.qa.has(n)?r.qa.get(n).push(t):r.qa.set(n,[t]),_.snapshot}async function AD(r,t,n){const s=St(r),o=s.ka.get(t),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(f=>!_h(f,t))),void s.ka.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await ym(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&np(s.remoteStore,o.targetId),Tm(s,o.targetId)}).catch(ro)):(Tm(s,o.targetId),await ym(s.localStore,o.targetId,!0))}async function SD(r,t){const n=St(r),s=n.ka.get(t),o=n.qa.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),np(n.remoteStore,s.targetId))}async function bD(r,t,n){const s=ND(r);try{const o=await function(f,m){const g=St(f),_=Ae.now(),T=m.reduce((q,K)=>q.add(K.key),Vt());let b,O;return g.persistence.runTransaction("Locally write mutations","readwrite",q=>{let K=Xi(),et=Vt();return g.ds.getEntries(q,T).next(W=>{K=W,K.forEach((Et,dt)=>{dt.isValidDocument()||(et=et.add(Et))})}).next(()=>g.localDocuments.getOverlayedDocuments(q,K)).next(W=>{b=W;const Et=[];for(const dt of m){const ot=x1(dt,b.get(dt.key).overlayedDocument);ot!=null&&Et.push(new Qr(dt.key,ot,LT(ot.value.mapValue),qn.exists(!0)))}return g.mutationQueue.addMutationBatch(q,_,Et,m)}).next(W=>{O=W;const Et=W.applyToLocalDocumentSet(b,et);return g.documentOverlayCache.saveOverlays(q,W.batchId,Et)})}).then(()=>({batchId:O.batchId,changes:$T(b)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,g){let _=f.Wa[f.currentUser.toKey()];_||(_=new se(It)),_=_.insert(m,g),f.Wa[f.currentUser.toKey()]=_}(s,o.batchId,n),await Wl(s,o.changes),await bh(s.remoteStore)}catch(o){const u=op(o,"Failed to persist write");n.reject(u)}}async function O0(r,t){const n=St(r);try{const s=await UC(n.localStore,t);t.targetChanges.forEach((o,u)=>{const f=n.Ua.get(u);f&&(qt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Ba=!0:o.modifiedDocuments.size>0?qt(f.Ba):o.removedDocuments.size>0&&(qt(f.Ba),f.Ba=!1))}),await Wl(n,s,t)}catch(s){await ro(s)}}function hE(r,t,n){const s=St(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.ka.forEach((u,f)=>{const m=f.view.sa(t);m.snapshot&&o.push(m.snapshot)}),function(f,m){const g=St(f);g.onlineState=m;let _=!1;g.queries.forEach((T,b)=>{for(const O of b.ta)O.sa(m)&&(_=!0)}),_&&lp(g)}(s.eventManager,t),o.length&&s.La.p_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function wD(r,t,n){const s=St(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Ua.get(t),u=o&&o.key;if(u){let f=new se(ct.comparator);f=f.insert(u,$e.newNoDocument(u,At.min()));const m=Vt().add(u),g=new Th(At.min(),new Map,new se(It),f,m);await O0(s,g),s.$a=s.$a.remove(u),s.Ua.delete(t),cp(s)}else await ym(s.localStore,t,!1).then(()=>Tm(s,t,n)).catch(ro)}async function RD(r,t){const n=St(r),s=t.batch.batchId;try{const o=await VC(n.localStore,t);M0(n,s,null),N0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Wl(n,o)}catch(o){await ro(o)}}async function ID(r,t,n){const s=St(r);try{const o=await function(f,m){const g=St(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let T;return g.mutationQueue.lookupMutationBatch(_,m).next(b=>(qt(b!==null),T=b.keys(),g.mutationQueue.removeMutationBatch(_,b))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,T,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,T)).next(()=>g.localDocuments.getDocuments(_,T))})}(s.localStore,t);M0(s,t,n),N0(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Wl(s,o)}catch(o){await ro(o)}}function N0(r,t){(r.Ga.get(t)||[]).forEach(n=>{n.resolve()}),r.Ga.delete(t)}function M0(r,t,n){const s=St(r);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Wa[s.currentUser.toKey()]=o}}function Tm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.qa.get(t))r.ka.delete(s),n&&r.La.Ja(s,n);r.qa.delete(t),r.isPrimaryClient&&r.Ka.br(t).forEach(s=>{r.Ka.containsKey(s)||V0(r,s)})}function V0(r,t){r.Qa.delete(t.path.canonicalString());const n=r.$a.get(t);n!==null&&(np(r.remoteStore,n),r.$a=r.$a.remove(t),r.Ua.delete(n),cp(r))}function fE(r,t,n){for(const s of n)s instanceof I0?(r.Ka.addReference(s.key,t),CD(r,s)):s instanceof C0?(rt(up,"Document no longer in limbo: "+s.key),r.Ka.removeReference(s.key,t),r.Ka.containsKey(s.key)||V0(r,s.key)):vt()}function CD(r,t){const n=t.key,s=n.path.canonicalString();r.$a.get(n)||r.Qa.has(s)||(rt(up,"New document in limbo: "+n),r.Qa.add(s),cp(r))}function cp(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const n=new ct(Jt.fromString(t)),s=r.za.next();r.Ua.set(s,new _D(n)),r.$a=r.$a.insert(n,s),T0(r.remoteStore,new Nr(di(GT(n.path)),s,"TargetPurposeLimboResolution",mh.ae))}}async function Wl(r,t,n){const s=St(r),o=[],u=[],f=[];s.ka.isEmpty()||(s.ka.forEach((m,g)=>{f.push(s.Ha(g,t,n).then(_=>{var T;if((_||n)&&s.isPrimaryClient){const b=_?!_.fromCache:(T=n==null?void 0:n.targetChanges.get(g.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(g.targetId,b?"current":"not-current")}if(_){o.push(_);const b=tp.Yi(g.targetId,_);u.push(b)}}))}),await Promise.all(f),s.La.p_(o),await async function(g,_){const T=St(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>Y.forEach(_,O=>Y.forEach(O.Hi,q=>T.persistence.referenceDelegate.addReference(b,O.targetId,q)).next(()=>Y.forEach(O.Ji,q=>T.persistence.referenceDelegate.removeReference(b,O.targetId,q)))))}catch(b){if(!so(b))throw b;rt(ep,"Failed to update sequence numbers: "+b)}for(const b of _){const O=b.targetId;if(!b.fromCache){const q=T.Ts.get(O),K=q.snapshotVersion,et=q.withLastLimboFreeSnapshotVersion(K);T.Ts=T.Ts.insert(O,et)}}}(s.localStore,u))}async function DD(r,t){const n=St(r);if(!n.currentUser.isEqual(t)){rt(up,"User change. New user:",t.toKey());const s=await _0(n.localStore,t);n.currentUser=t,function(u,f){u.Ga.forEach(m=>{m.forEach(g=>{g.reject(new st(X.CANCELLED,f))})}),u.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Wl(n,s.Rs)}}function OD(r,t){const n=St(r),s=n.Ua.get(t);if(s&&s.Ba)return Vt().add(s.key);{let o=Vt();const u=n.qa.get(t);if(!u)return o;for(const f of u){const m=n.ka.get(f);o=o.unionWith(m.view.Sa)}return o}}function U0(r){const t=St(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=O0.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=OD.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=wD.bind(null,t),t.La.p_=fD.bind(null,t.eventManager),t.La.Ja=dD.bind(null,t.eventManager),t}function ND(r){const t=St(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=RD.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ID.bind(null,t),t}class oh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ah(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return MC(this.persistence,new DC,t.initialUser,this.serializer)}Xa(t){return new g0(Jm.ri,this.serializer)}Za(t){return new zC}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oh.provider={build:()=>new oh};class MD extends oh{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){qt(this.persistence.referenceDelegate instanceof sh);const s=this.persistence.referenceDelegate.garbageCollector;return new mC(s,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new g0(s=>sh.ri(s,n),this.serializer)}}class Am{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=DD.bind(null,this.syncEngine),await oD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new uD}()}createDatastore(t){const n=Ah(t.databaseInfo.databaseId),s=function(u){return new FC(u)}(t.databaseInfo);return function(u,f,m,g){return new YC(u,f,m,g)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,u,f,m){return new $C(s,o,u,f,m)}(this.localStore,this.datastore,t.asyncQueue,n=>hE(this.syncEngine,n,0),function(){return sE.D()?new sE:new BC}())}createSyncEngine(t,n){return function(o,u,f,m,g,_,T){const b=new yD(o,u,f,m,g,_);return T&&(b.ja=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=St(o);rt(Bs,"RemoteStore shutting down."),u.W_.add(5),await $l(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Am.provider={build:()=>new Am};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Yi("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="FirestoreClient";class UD{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Xe.UNAUTHENTICATED,this.clientId=CT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{rt(Hr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(rt(Hr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=op(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Yd(r,t){r.asyncQueue.verifyOperationInProgress(),rt(Hr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await _0(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function dE(r,t){r.asyncQueue.verifyOperationInProgress();const n=await kD(r);rt(Hr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>oE(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>oE(t.remoteStore,o)),r._onlineComponents=t}async function kD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){rt(Hr,"Using user provided OfflineComponentProvider");try{await Yd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Xa("Error using user provided cache. Falling back to memory cache: "+n),await Yd(r,new oh)}}else rt(Hr,"Using default OfflineComponentProvider"),await Yd(r,new MD(void 0));return r._offlineComponents}async function k0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(rt(Hr,"Using user provided OnlineComponentProvider"),await dE(r,r._uninitializedComponentsProvider._online)):(rt(Hr,"Using default OnlineComponentProvider"),await dE(r,new Am))),r._onlineComponents}function PD(r){return k0(r).then(t=>t.syncEngine)}async function xD(r){const t=await k0(r),n=t.eventManager;return n.onListen=vD.bind(null,t.syncEngine),n.onUnlisten=AD.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=ED.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=SD.bind(null,t.syncEngine),n}function LD(r,t,n={}){const s=new kr;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,g,_){const T=new VD({next:O=>{T.su(),f.enqueueAndForget(()=>hD(u,b)),O.fromCache&&g.source==="server"?_.reject(new st(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(O)},error:O=>_.reject(O)}),b=new mD(m,T,{includeMetadataChanges:!0,Ta:!0});return cD(u,b)}(await xD(r),r.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(r,t,n){if(!n)throw new st(X.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function zD(r,t,n,s){if(t===!0&&s===!0)throw new st(X.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function pE(r){if(!ct.isDocumentKey(r))throw new st(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function gE(r){if(ct.isDocumentKey(r))throw new st(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function wh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":vt()}function js(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new st(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wh(r);throw new st(X.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="firestore.googleapis.com",_E=!0;class yE{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new st(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=L0,this.ssl=_E}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:_E;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=p0;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<fC)throw new st(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}zD("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=P0((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new st(X.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new st(X.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new st(X.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Rh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new st(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new st(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new HI;switch(s.type){case"firstParty":return new QI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new st(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=mE.get(n);s&&(rt("ComponentProvider","Removing Datastore"),mE.delete(n),s.terminate())}(this),Promise.resolve()}}function BD(r,t,n,s={}){var o;const u=(r=js(r,Rh))._getSettings(),f=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),m=`${t}:${n}`;u.host!==L0&&u.host!==m&&Xa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},u),{host:m,ssl:!1,emulatorOptions:s});if(!ks(g,f)&&(r._setSettings(g),s.mockUserToken)){let _,T;if(typeof s.mockUserToken=="string")_=s.mockUserToken,T=Xe.MOCK_USER;else{_=kE(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new st(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Xe(b)}r._authCredentials=new FI(new RT(_,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Qs(this.firestore,t,this._query)}}class Tn{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Tn(this.firestore,t,this._key)}}class Pr extends Qs{constructor(t,n,s){super(t,n,GT(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Tn(this.firestore,null,new ct(t))}withConverter(t){return new Pr(this.firestore,t,this._path)}}function hp(r,t,...n){if(r=re(r),x0("collection","path",t),r instanceof Rh){const s=Jt.fromString(t,...n);return gE(s),new Pr(r,null,s)}{if(!(r instanceof Tn||r instanceof Pr))throw new st(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Jt.fromString(t,...n));return gE(s),new Pr(r.firestore,null,s)}}function Sm(r,t,...n){if(r=re(r),arguments.length===1&&(t=CT.newId()),x0("doc","path",t),r instanceof Rh){const s=Jt.fromString(t,...n);return pE(s),new Tn(r,null,new ct(s))}{if(!(r instanceof Tn||r instanceof Pr))throw new st(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Jt.fromString(t,...n));return pE(s),new Tn(r.firestore,r instanceof Pr?r.converter:null,new ct(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="AsyncQueue";class EE{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new v0(this,"async_queue_retry"),this.Su=()=>{const s=Qd();s&&rt(vE,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=t;const n=Qd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=Qd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new kr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!so(t))throw t;rt(vE,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.bu.then(()=>(this.pu=!0,t().catch(s=>{this.gu=s,this.pu=!1;const o=function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m}(s);throw Yi("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.bu=n,n}enqueueAfterDelay(t,n,s){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const o=ap.createAndSchedule(this,t,n,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&vt()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}class Zl extends Rh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new EE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new EE(t),this._firestoreClient=void 0,await t}}}function jD(r,t){const n=typeof r=="object"?r:Om(),s=typeof r=="string"?r:Jc,o=ch(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=ME("firestore");u&&BD(o,...u)}return o}function z0(r){if(r._terminated)throw new st(X.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||qD(r),r._firestoreClient}function qD(r){var t,n,s;const o=r._freezeSettings(),u=function(m,g,_,T){return new l1(m,g,_,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,P0(T.experimentalLongPollingOptions),T.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new UD(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new eo(Fe.fromBase64String(t))}catch(n){throw new st(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new eo(Fe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new st(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new st(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new st(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return It(this._lat,t._lat)||It(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=/^__.*__$/;class FD{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Qr(t,this.data,this.fieldMask,n,this.fieldTransforms):new Yl(t,this.data,n,this.fieldTransforms)}}class B0{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Qr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function j0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw vt()}}class pp{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new pp(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ku({path:s,Qu:!1});return o.$u(t),o}Uu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return lh(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(j0(this.Lu)&&HD.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class GD{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Ah(t)}ju(t,n,s,o=!1){return new pp({Lu:t,methodName:n,zu:s,path:He.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gp(r){const t=r._freezeSettings(),n=Ah(r._databaseId);return new GD(r._databaseId,!!t.ignoreUndefinedProperties,n)}function KD(r,t,n,s,o,u={}){const f=r.ju(u.merge||u.mergeFields?2:0,t,n,o);_p("Data must be an object, but it was:",f,s);const m=q0(s,f);let g,_;if(u.merge)g=new vn(f.fieldMask),_=f.fieldTransforms;else if(u.mergeFields){const T=[];for(const b of u.mergeFields){const O=bm(t,b,n);if(!f.contains(O))throw new st(X.INVALID_ARGUMENT,`Field '${O}' is specified in your field mask but missing from your input data.`);F0(T,O)||T.push(O)}g=new vn(T),_=f.fieldTransforms.filter(b=>g.covers(b.field))}else g=null,_=f.fieldTransforms;return new FD(new ln(m),g,_)}class Ch extends fp{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ch}}function QD(r,t,n,s){const o=r.ju(1,t,n);_p("Data must be an object, but it was:",o,s);const u=[],f=ln.empty();Kr(s,(g,_)=>{const T=yp(t,g,n);_=re(_);const b=o.Uu(T);if(_ instanceof Ch)u.push(T);else{const O=Jl(_,b);O!=null&&(u.push(T),f.set(T,O))}});const m=new vn(u);return new B0(f,m,o.fieldTransforms)}function YD(r,t,n,s,o,u){const f=r.ju(1,t,n),m=[bm(t,s,n)],g=[o];if(u.length%2!=0)throw new st(X.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let O=0;O<u.length;O+=2)m.push(bm(t,u[O])),g.push(u[O+1]);const _=[],T=ln.empty();for(let O=m.length-1;O>=0;--O)if(!F0(_,m[O])){const q=m[O];let K=g[O];K=re(K);const et=f.Uu(q);if(K instanceof Ch)_.push(q);else{const W=Jl(K,et);W!=null&&(_.push(q),T.set(q,W))}}const b=new vn(_);return new B0(T,b,f.fieldTransforms)}function XD(r,t,n,s=!1){return Jl(n,r.ju(s?4:3,t))}function Jl(r,t){if(H0(r=re(r)))return _p("Unsupported field value:",t,r),q0(r,t);if(r instanceof fp)return function(s,o){if(!j0(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let g=Jl(m,o.Ku(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}}(r,t)}return function(s,o){if((s=re(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return N1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ae.fromDate(s);return{timestampValue:rh(o.serializer,u)}}if(s instanceof Ae){const u=new Ae(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:rh(o.serializer,u)}}if(s instanceof dp)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof eo)return{bytesValue:l0(o.serializer,s._byteString)};if(s instanceof Tn){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Wm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof mp)return function(f,m){return{mapValue:{fields:{[PT]:{stringValue:xT},[th]:{arrayValue:{values:f.toArray().map(_=>{if(typeof _!="number")throw m.Wu("VectorValues must only contain numeric values.");return Qm(m.serializer,_)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${wh(s)}`)}(r,t)}function q0(r,t){const n={};return OT(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Kr(r,(s,o)=>{const u=Jl(o,t.qu(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function H0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ae||r instanceof dp||r instanceof eo||r instanceof Tn||r instanceof fp||r instanceof mp)}function _p(r,t,n){if(!H0(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=wh(n);throw s==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+s)}}function bm(r,t,n){if((t=re(t))instanceof Ih)return t._internalPath;if(typeof t=="string")return yp(r,t);throw lh("Field path arguments must be of type string or ",r,!1,void 0,n)}const $D=new RegExp("[~\\*/\\[\\]]");function yp(r,t,n){if(t.search($D)>=0)throw lh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Ih(...t.split("."))._internalPath}catch{throw lh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function lh(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new st(X.INVALID_ARGUMENT,m+r+g)}function F0(r,t){return r.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new WD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Dh("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class WD extends G0{data(){return super.data()}}function Dh(r,t){return typeof t=="string"?yp(r,t):t instanceof Ih?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new st(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vp{}class K0 extends vp{}function qc(r,t,...n){let s=[];t instanceof vp&&s.push(t),s=s.concat(n),function(u){const f=u.filter(g=>g instanceof Ep).length,m=u.filter(g=>g instanceof Oh).length;if(f>1||f>0&&m>0)throw new st(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class Oh extends K0{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new Oh(t,n,s)}_apply(t){const n=this._parse(t);return Q0(t._query,n),new Qs(t.firestore,t.converter,fm(t._query,n))}_parse(t){const n=gp(t.firestore);return function(u,f,m,g,_,T,b){let O;if(_.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new st(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){AE(b,T);const K=[];for(const et of b)K.push(TE(g,u,et));O={arrayValue:{values:K}}}else O=TE(g,u,b)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||AE(b,T),O=XD(m,f,b,T==="in"||T==="not-in");return Te.create(_,T,O)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function wm(r,t,n){const s=t,o=Dh("where",r);return Oh._create(o,s,n)}class Ep extends vp{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Ep(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Fn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(o,u){let f=o;const m=u.getFlattenedFilters();for(const g of m)Q0(f,g),f=fm(f,g)}(t._query,n),new Qs(t.firestore,t.converter,fm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tp extends K0{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Tp(t,n)}_apply(t){const n=function(o,u,f){if(o.startAt!==null)throw new st(X.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new st(X.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ll(u,f)}(t._query,this._field,this._direction);return new Qs(t.firestore,t.converter,function(o,u){const f=o.explicitOrderBy.concat([u]);return new ao(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(t._query,n))}}function JD(r,t="asc"){const n=t,s=Dh("orderBy",r);return Tp._create(s,n)}function TE(r,t,n){if(typeof(n=re(n))=="string"){if(n==="")throw new st(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!KT(t)&&n.indexOf("/")!==-1)throw new st(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(Jt.fromString(n));if(!ct.isDocumentKey(s))throw new st(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return xv(r,new ct(s))}if(n instanceof Tn)return xv(r,n._key);throw new st(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wh(n)}.`)}function AE(r,t){if(!Array.isArray(r)||r.length===0)throw new st(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Q0(r,t){const n=function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new st(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new st(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class tO{convertValue(t,n="none"){switch(jr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return pe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Br(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw vt()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Kr(t,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(t){var n,s,o;const u=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[th].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>pe(f.doubleValue));return new mp(u)}convertGeoPoint(t){return new dp(pe(t.latitude),pe(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=gh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(kl(t));default:return null}}convertTimestamp(t){const n=zr(t);return new Ae(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=Jt.fromString(t);qt(m0(s));const o=new Pl(s.get(1),s.get(3)),u=new ct(s.popFirst(5));return o.isEqual(n)||Yi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(r,t,n){let s;return s=r?r.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class nO extends G0{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Hc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Dh("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Hc extends nO{data(t={}){return super.data(t)}}class iO{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Oc(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Hc(this._firestore,this._userDataWriter,s.key,s,new Oc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new st(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const g=new Hc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Oc(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new Hc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Oc(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,T=-1;return m.type!==0&&(_=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),T=f.indexOf(m.doc.key)),{type:rO(m.type),doc:g,oldIndex:_,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function rO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return vt()}}class sO extends tO{constructor(t){super(),this.firestore=t}convertBytes(t){return new eo(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Tn(this.firestore,null,n)}}function Y0(r){r=js(r,Qs);const t=js(r.firestore,Zl),n=z0(t),s=new sO(t);return ZD(r._query),LD(n,r._query).then(o=>new iO(t,s,r,o))}function aO(r,t,n,...s){r=js(r,Tn);const o=js(r.firestore,Zl),u=gp(o);let f;return f=typeof(t=re(t))=="string"||t instanceof Ih?YD(u,"updateDoc",r._key,t,n,s):QD(u,"updateDoc",r._key,t),Ap(o,[f.toMutation(r._key,qn.exists(!0))])}function oO(r){return Ap(js(r.firestore,Zl),[new Ym(r._key,qn.none())])}function lO(r,t){const n=js(r.firestore,Zl),s=Sm(r),o=eO(r.converter,t);return Ap(n,[KD(gp(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,qn.exists(!1))]).then(()=>s)}function Ap(r,t){return function(s,o){const u=new kr;return s.asyncQueue.enqueueAndForget(async()=>bD(await PD(s),o,u)),u.promise}(z0(r),t)}(function(t,n=!0){(function(o){io=o})(Hs),Ps(new xr("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Zl(new GI(s.getProvider("auth-internal")),new YI(f,s.getProvider("app-check-internal")),function(_,T){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new st(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pl(_.options.projectId,T)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),ci(wv,Rv,t),ci(wv,Rv,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="firebasestorage.googleapis.com",$0="storageBucket",uO=2*60*1e3,cO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends gi{constructor(t,n,s=0){super(Xd(t),`Firebase Storage: ${n} (${Xd(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,he.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Xd(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ce;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ce||(ce={}));function Xd(r){return"storage/"+r}function Sp(){const r="An unknown error occurred, please check the error payload for server response.";return new he(ce.UNKNOWN,r)}function hO(r){return new he(ce.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function fO(r){return new he(ce.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dO(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new he(ce.UNAUTHENTICATED,r)}function mO(){return new he(ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function pO(r){return new he(ce.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function gO(){return new he(ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _O(){return new he(ce.CANCELED,"User canceled the upload/download.")}function yO(r){return new he(ce.INVALID_URL,"Invalid URL '"+r+"'.")}function vO(r){return new he(ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function EO(){return new he(ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$0+"' property when initializing the app?")}function TO(){return new he(ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function AO(){return new he(ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function SO(r){return new he(ce.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Rm(r){return new he(ce.INVALID_ARGUMENT,r)}function W0(){return new he(ce.APP_DELETED,"The Firebase app was deleted.")}function bO(r){return new he(ce.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ol(r,t){return new he(ce.INVALID_FORMAT,"String does not match format '"+r+"': "+t)}function vl(r){throw new he(ce.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=En.makeFromUrl(t,n)}catch{return new En(t,"")}if(s.path==="")return s;throw vO(t)}static makeFromUrl(t,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(_t){_t.path.charAt(_t.path.length-1)==="/"&&(_t.path_=_t.path_.slice(0,-1))}const f="(/(.*))?$",m=new RegExp("^gs://"+o+f,"i"),g={bucket:1,path:3};function _(_t){_t.path_=decodeURIComponent(_t.path)}const T="v[A-Za-z0-9_]+",b=n.replace(/[.]/g,"\\."),O="(/([^?#]*).*)?$",q=new RegExp(`^https?://${b}/${T}/b/${o}/o${O}`,"i"),K={bucket:1,path:3},et=n===X0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,W="([^?#]*)",Et=new RegExp(`^https?://${et}/${o}/${W}`,"i"),ot=[{regex:m,indices:g,postModify:u},{regex:q,indices:K,postModify:_},{regex:Et,indices:{bucket:1,path:2},postModify:_}];for(let _t=0;_t<ot.length;_t++){const mt=ot[_t],wt=mt.regex.exec(t);if(wt){const M=wt[mt.indices.bucket];let S=wt[mt.indices.path];S||(S=""),s=new En(M,S),mt.postModify(s);break}}if(s==null)throw yO(t);return s}}class wO{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(r,t,n){let s=1,o=null,u=null,f=!1,m=0;function g(){return m===2}let _=!1;function T(...W){_||(_=!0,t.apply(null,W))}function b(W){o=setTimeout(()=>{o=null,r(q,g())},W)}function O(){u&&clearTimeout(u)}function q(W,...Et){if(_){O();return}if(W){O(),T.call(null,W,...Et);return}if(g()||f){O(),T.call(null,W,...Et);return}s<64&&(s*=2);let ot;m===1?(m=2,ot=0):ot=(s+Math.random())*1e3,b(ot)}let K=!1;function et(W){K||(K=!0,O(),!_&&(o!==null?(W||(m=2),clearTimeout(o),b(0)):W||(m=1)))}return b(0),u=setTimeout(()=>{f=!0,et(!0)},n),et}function IO(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(r){return r!==void 0}function DO(r){return typeof r=="object"&&!Array.isArray(r)}function bp(r){return typeof r=="string"||r instanceof String}function SE(r){return wp()&&r instanceof Blob}function wp(){return typeof Blob<"u"}function bE(r,t,n,s){if(s<t)throw Rm(`Invalid value for '${r}'. Expected ${t} or greater.`);if(s>n)throw Rm(`Invalid value for '${r}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(r,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${r}`}function Z0(r){const t=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const o=t(s)+"="+t(r[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var Us;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Us||(Us={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(r,t){const n=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,u=t.indexOf(r)!==-1;return n||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(t,n,s,o,u,f,m,g,_,T,b,O=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=m,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=T,this.connectionFactory_=b,this.retry=O,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((q,K)=>{this.resolve_=q,this.reject_=K,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new Nc(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=m=>{const g=m.loaded,_=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const m=u.getErrorCode()===Us.NO_ERROR,g=u.getStatus();if(!m||OO(g,this.additionalRetryCodes_)&&this.retry){const T=u.getErrorCode()===Us.ABORT;s(!1,new Nc(!1,null,T));return}const _=this.successCodes_.indexOf(g)!==-1;s(!0,new Nc(_,u))})},n=(s,o)=>{const u=this.resolve_,f=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(m,m.getResponse());CO(g)?u(g):u()}catch(g){f(g)}else if(m!==null){const g=Sp();g.serverResponse=m.getErrorText(),this.errorCallback_?f(this.errorCallback_(m,g)):f(g)}else if(o.canceled){const g=this.appDelete_?W0():_O();f(g)}else{const g=gO();f(g)}};this.canceled_?n(!1,new Nc(!1,null,!0)):this.backoffId_=RO(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&IO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Nc{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function MO(r,t){t!==null&&t.length>0&&(r.Authorization="Firebase "+t)}function VO(r,t){r["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function UO(r,t){t&&(r["X-Firebase-GMPID"]=t)}function kO(r,t){t!==null&&(r["X-Firebase-AppCheck"]=t)}function PO(r,t,n,s,o,u,f=!0){const m=Z0(r.urlParams),g=r.url+m,_=Object.assign({},r.headers);return UO(_,t),MO(_,n),VO(_,u),kO(_,s),new NO(g,r.method,_,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function LO(...r){const t=xO();if(t!==void 0){const n=new t;for(let s=0;s<r.length;s++)n.append(r[s]);return n.getBlob()}else{if(wp())return new Blob(r);throw new he(ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function zO(r,t,n){return r.webkitSlice?r.webkitSlice(t,n):r.mozSlice?r.mozSlice(t,n):r.slice?r.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(r){if(typeof atob>"u")throw SO("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class $d{constructor(t,n){this.data=t,this.contentType=n||null}}function jO(r,t){switch(r){case ui.RAW:return new $d(J0(t));case ui.BASE64:case ui.BASE64URL:return new $d(tA(r,t));case ui.DATA_URL:return new $d(HO(t),FO(t))}throw Sp()}function J0(r){const t=[];for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<r.length-1&&(r.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const u=s,f=r.charCodeAt(++n);s=65536|(u&1023)<<10|f&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function qO(r){let t;try{t=decodeURIComponent(r)}catch{throw Ol(ui.DATA_URL,"Malformed data URL.")}return J0(t)}function tA(r,t){switch(r){case ui.BASE64:{const o=t.indexOf("-")!==-1,u=t.indexOf("_")!==-1;if(o||u)throw Ol(r,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case ui.BASE64URL:{const o=t.indexOf("+")!==-1,u=t.indexOf("/")!==-1;if(o||u)throw Ol(r,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=BO(t)}catch(o){throw o.message.includes("polyfill")?o:Ol(r,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class eA{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Ol(ui.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=GO(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function HO(r){const t=new eA(r);return t.base64?tA(ui.BASE64,t.rest):qO(t.rest)}function FO(r){return new eA(r).contentType}function GO(r,t){return r.length>=t.length?r.substring(r.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,n){let s=0,o="";SE(t)?(this.data_=t,s=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(SE(this.data_)){const s=this.data_,o=zO(s,t,n);return o===null?null:new Or(o)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new Or(s,!0)}}static getBlob(...t){if(wp()){const n=t.map(s=>s instanceof Or?s.data_:s);return new Or(LO.apply(null,n))}else{const n=t.map(f=>bp(f)?jO(ui.RAW,f).data:f.data_);let s=0;n.forEach(f=>{s+=f.byteLength});const o=new Uint8Array(s);let u=0;return n.forEach(f=>{for(let m=0;m<f.length;m++)o[u++]=f[m]}),new Or(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(r){let t;try{t=JSON.parse(r)}catch{return null}return DO(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(r){if(r.length===0)return null;const t=r.lastIndexOf("/");return t===-1?"":r.slice(0,t)}function QO(r,t){const n=t.split("/").filter(s=>s.length>0).join("/");return r.length===0?n:r+"/"+n}function iA(r){const t=r.lastIndexOf("/",r.length-2);return t===-1?r:r.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(r,t){return t}class nn{constructor(t,n,s,o){this.server=t,this.local=n||t,this.writable=!!s,this.xform=o||YO}}let Mc=null;function XO(r){return!bp(r)||r.length<2?r:iA(r)}function rA(){if(Mc)return Mc;const r=[];r.push(new nn("bucket")),r.push(new nn("generation")),r.push(new nn("metageneration")),r.push(new nn("name","fullPath",!0));function t(u,f){return XO(f)}const n=new nn("name");n.xform=t,r.push(n);function s(u,f){return f!==void 0?Number(f):f}const o=new nn("size");return o.xform=s,r.push(o),r.push(new nn("timeCreated")),r.push(new nn("updated")),r.push(new nn("md5Hash",null,!0)),r.push(new nn("cacheControl",null,!0)),r.push(new nn("contentDisposition",null,!0)),r.push(new nn("contentEncoding",null,!0)),r.push(new nn("contentLanguage",null,!0)),r.push(new nn("contentType",null,!0)),r.push(new nn("metadata","customMetadata",!0)),Mc=r,Mc}function $O(r,t){function n(){const s=r.bucket,o=r.fullPath,u=new En(s,o);return t._makeStorageReference(u)}Object.defineProperty(r,"ref",{get:n})}function WO(r,t,n){const s={};s.type="file";const o=n.length;for(let u=0;u<o;u++){const f=n[u];s[f.local]=f.xform(s,t[f.server])}return $O(s,r),s}function sA(r,t,n){const s=nA(t);return s===null?null:WO(r,s,n)}function ZO(r,t,n,s){const o=nA(t);if(o===null||!bp(o.downloadTokens))return null;const u=o.downloadTokens;if(u.length===0)return null;const f=encodeURIComponent;return u.split(",").map(_=>{const T=r.bucket,b=r.fullPath,O="/b/"+f(T)+"/o/"+f(b),q=Rp(O,n,s),K=Z0({alt:"media",token:_});return q+K})[0]}function JO(r,t){const n={},s=t.length;for(let o=0;o<s;o++){const u=t[o];u.writable&&(n[u.server]=r[u.local])}return JSON.stringify(n)}class aA{constructor(t,n,s,o){this.url=t,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(r){if(!r)throw Sp()}function tN(r,t){function n(s,o){const u=sA(r,o,t);return oA(u!==null),u}return n}function eN(r,t){function n(s,o){const u=sA(r,o,t);return oA(u!==null),ZO(u,o,r.host,r._protocol)}return n}function lA(r){function t(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=mO():o=dO():n.getStatus()===402?o=fO(r.bucket):n.getStatus()===403?o=pO(r.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return t}function nN(r){const t=lA(r);function n(s,o){let u=t(s,o);return s.getStatus()===404&&(u=hO(r.path)),u.serverResponse=o.serverResponse,u}return n}function iN(r,t,n){const s=t.fullServerUrl(),o=Rp(s,r.host,r._protocol),u="GET",f=r.maxOperationRetryTime,m=new aA(o,u,eN(r,n),f);return m.errorHandler=nN(t),m}function rN(r,t){return r&&r.contentType||t&&t.type()||"application/octet-stream"}function sN(r,t,n){const s=Object.assign({},n);return s.fullPath=r.path,s.size=t.size(),s.contentType||(s.contentType=rN(null,t)),s}function aN(r,t,n,s,o){const u=t.bucketOnlyServerUrl(),f={"X-Goog-Upload-Protocol":"multipart"};function m(){let ot="";for(let _t=0;_t<2;_t++)ot=ot+Math.random().toString().slice(2);return ot}const g=m();f["Content-Type"]="multipart/related; boundary="+g;const _=sN(t,s,o),T=JO(_,n),b="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+T+`\r
--`+g+`\r
Content-Type: `+_.contentType+`\r
\r
`,O=`\r
--`+g+"--",q=Or.getBlob(b,s,O);if(q===null)throw TO();const K={name:_.fullPath},et=Rp(u,r.host,r._protocol),W="POST",Et=r.maxUploadRetryTime,dt=new aA(et,W,tN(r,n),Et);return dt.urlParams=K,dt.headers=f,dt.body=q.uploadData(),dt.errorHandler=lA(t),dt}class oN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Us.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Us.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Us.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,o){if(this.sent_)throw vl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const u in o)o.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,o[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw vl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class lN extends oN{initXhr(){this.xhr_.responseType="text"}}function uA(){return new lN}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,n){this._service=t,n instanceof En?this._location=n:this._location=En.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new qs(t,n)}get root(){const t=new En(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iA(this._location.path)}get storage(){return this._service}get parent(){const t=KO(this._location.path);if(t===null)return null;const n=new En(this._location.bucket,t);return new qs(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw bO(t)}}function uN(r,t,n){r._throwIfRoot("uploadBytes");const s=aN(r.storage,r._location,rA(),new Or(t,!0),n);return r.storage.makeRequestWithTokens(s,uA).then(o=>({metadata:o,ref:r}))}function cN(r){r._throwIfRoot("getDownloadURL");const t=iN(r.storage,r._location,rA());return r.storage.makeRequestWithTokens(t,uA).then(n=>{if(n===null)throw AO();return n})}function hN(r,t){const n=QO(r._location.path,t),s=new En(r._location.bucket,n);return new qs(r.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(r){return/^[A-Za-z]+:\/\//.test(r)}function dN(r,t){return new qs(r,t)}function cA(r,t){if(r instanceof Ip){const n=r;if(n._bucket==null)throw EO();const s=new qs(n,n._bucket);return t!=null?cA(s,t):s}else return t!==void 0?hN(r,t):r}function mN(r,t){if(t&&fN(t)){if(r instanceof Ip)return dN(r,t);throw Rm("To use ref(service, url), the first argument must be a Storage instance.")}else return cA(r,t)}function wE(r,t){const n=t==null?void 0:t[$0];return n==null?null:En.makeFromBucketSpec(n,r)}function pN(r,t,n,s={}){r.host=`${t}:${n}`,r._protocol="http";const{mockUserToken:o}=s;o&&(r._overrideAuthToken=typeof o=="string"?o:kE(o,r.app.options.projectId))}class Ip{constructor(t,n,s,o,u){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._bucket=null,this._host=X0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uO,this._maxUploadRetryTime=cO,this._requests=new Set,o!=null?this._bucket=En.makeFromBucketSpec(o,this._host):this._bucket=wE(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=En.makeFromBucketSpec(this._url,t):this._bucket=wE(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){bE("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){bE("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new qs(this,t)}_makeRequest(t,n,s,o,u=!0){if(this._deleted)return new wO(W0());{const f=PO(t,this._appId,s,o,n,this._firebaseVersion,u);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(t,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,o).getPromise()}}const RE="@firebase/storage",IE="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="storage";function gN(r,t,n){return r=re(r),uN(r,t,n)}function _N(r){return r=re(r),cN(r)}function yN(r,t){return r=re(r),mN(r,t)}function vN(r=Om(),t){r=re(r);const s=ch(r,hA).getImmediate({identifier:t}),o=ME("storage");return o&&EN(s,...o),s}function EN(r,t,n,s={}){pN(r,t,n,s)}function TN(r,{instanceIdentifier:t}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new Ip(n,s,o,t,Hs)}function AN(){Ps(new xr(hA,TN,"PUBLIC").setMultipleInstances(!0)),ci(RE,IE,""),ci(RE,IE,"esm2017")}AN();const SN={apiKey:"AIzaSyBvzkF5T6wEwBopwbBoCUAG4nmMrew_C5M",authDomain:"financeappuek.firebaseapp.com",databaseURL:"https://financeappuek-default-rtdb.europe-west1.firebasedatabase.app",projectId:"financeappuek",storageBucket:"financeappuek.firebasestorage.app",messagingSenderId:"1090939964421",appId:"1:1090939964421:web:37f1c58825515301ee206c"},Cp=LE(SN),jl=jD(Cp),Vs=zI(Cp),bN=vN(Cp);function wN({onLogin:r,goToRegister:t}){const[n,s]=te.useState(""),[o,u]=te.useState(""),f=async m=>{m.preventDefault();try{await bR(Vs,Lm),await SR(Vs,n,o),r()}catch(g){alert("Błąd logowania: "+g.message)}};return J.jsx("div",{className:"d-flex justify-content-center align-items-center vh-100",children:J.jsxs("div",{className:"card shadow-sm p-4",style:{width:"100%",maxWidth:"400px"},children:[J.jsx("h2",{className:"text-center mb-4",children:"Logowanie"}),J.jsxs("form",{onSubmit:f,children:[J.jsx("input",{type:"email",className:"form-control mb-3",placeholder:"Email",value:n,onChange:m=>s(m.target.value),required:!0}),J.jsx("input",{type:"password",className:"form-control mb-4",placeholder:"Hasło",value:o,onChange:m=>u(m.target.value),required:!0}),J.jsx("button",{type:"submit",className:"btn btn-primary w-100 mb-2",children:"Zaloguj się"}),J.jsx("button",{type:"button",className:"btn btn-outline-secondary w-100",onClick:t,children:"Nie masz konta? Zarejestruj się"})]})]})})}function RN({onRegister:r,goToLogin:t}){const[n,s]=te.useState(""),[o,u]=te.useState(""),f=async m=>{m.preventDefault();try{await AR(Vs,n,o),r()}catch(g){alert("Błąd rejestracji: "+g.message)}};return J.jsx("div",{className:"d-flex justify-content-center align-items-center vh-100",children:J.jsxs("div",{className:"card shadow-sm p-4",style:{width:"100%",maxWidth:"400px"},children:[J.jsx("h2",{className:"text-center mb-4",children:"Rejestracja"}),J.jsxs("form",{onSubmit:f,children:[J.jsx("input",{type:"email",className:"form-control mb-3",placeholder:"Email",value:n,onChange:m=>s(m.target.value),required:!0}),J.jsx("input",{type:"password",className:"form-control mb-4",placeholder:"Hasło",value:o,onChange:m=>u(m.target.value),required:!0}),J.jsx("button",{type:"submit",className:"btn btn-success w-100 mb-2",children:"Zarejestruj się"}),J.jsx("button",{type:"button",className:"btn btn-outline-secondary w-100",onClick:t,children:"Mam już konto"})]})]})})}function IN({onAdd:r}){const[t,n]=te.useState(""),[s,o]=te.useState(""),[u,f]=te.useState(null),[m,g]=te.useState(null),_=async b=>{if(b.preventDefault(),!t||!s){alert("Uzupełnij wszystkie pola!");return}try{let O="";if(u){const q=`${Date.now()}_${u.name}`,K=yN(bN,`receipts/${q}`);await gN(K,u),O=await _N(K)}await lO(hp(jl,"expenses"),{amount:parseFloat(t),description:s,receiptUrl:O,createdAt:Ae.now(),location:m}),"vibrate"in navigator&&navigator.vibrate(200),r&&r(),n(""),o(""),f(null),alert("Wydatek dodany!")}catch(O){console.error("Błąd przy zapisie:",O),alert("Wystąpił błąd przy zapisie")}},T=()=>{if(!navigator.geolocation){alert("Twoja przeglądarka nie obsługuje geolokalizacji");return}navigator.geolocation.getCurrentPosition(b=>{g({lat:b.coords.latitude,lng:b.coords.longitude})},b=>{console.error("Błąd geolokalizacji:",b),alert("Nie udało się pobrać lokalizacji")})};return J.jsxs("form",{className:"add-expense",onSubmit:_,children:[J.jsx("h2",{children:"Dodaj wydatek"}),J.jsx("input",{type:"number",placeholder:"Kwota",value:t,onChange:b=>n(b.target.value),required:!0}),J.jsx("br",{}),J.jsx("input",{type:"text",placeholder:"Opis",value:s,onChange:b=>o(b.target.value),required:!0}),J.jsx("br",{}),J.jsx("input",{type:"file",accept:"image/*",onChange:b=>f(b.target.files[0])}),J.jsx("br",{}),J.jsx("button",{type:"submit",children:"Dodaj"}),J.jsx("button",{type:"button",onClick:T,children:"Dodaj lokalizację"}),m&&J.jsx("p",{children:"Lokalizacja dodana ✅"})]})}function CN({refreshFlag:r,onChange:t}){const[n,s]=te.useState([]),[o,u]=te.useState(""),[f,m]=te.useState(""),g=async()=>{try{let _=qc(hp(jl,"expenses"),JD("createdAt","desc"));if(o&&(_=qc(_,wm("createdAt",">=",new Date(o)))),f){const O=new Date(f);O.setDate(O.getDate()+1),_=qc(_,wm("createdAt","<",O))}const b=(await Y0(_)).docs.map(O=>({id:O.id,...O.data()}));s(b)}catch(_){console.error("Błąd przy pobieraniu danych:",_)}};return te.useEffect(()=>{g()},[r,o,f]),J.jsxs("div",{children:[J.jsx("h2",{children:"Lista wydatków"}),J.jsxs("div",{style:{marginBottom:"1rem"},children:[J.jsxs("label",{children:["Od:"," ",J.jsx("input",{type:"date",value:o,onChange:_=>u(_.target.value)})]}),J.jsxs("label",{style:{marginLeft:"1rem"},children:["Do:"," ",J.jsx("input",{type:"date",value:f,onChange:_=>m(_.target.value)})]})]}),n.map(_=>J.jsx(DN,{item:_,refresh:g,onChange:t},_.id))]})}function DN({item:r,refresh:t,onChange:n}){var q;const[s,o]=te.useState(!1),[u,f]=te.useState(r.description),[m,g]=te.useState(r.amount),[_,T]=te.useState(null),b=async()=>{try{const K=Sm(jl,"expenses",r.id);await aO(K,{description:u,amount:parseFloat(m)}),o(!1),t()}catch(K){console.error("Błąd przy edycji:",K)}},O=async()=>{if(window.confirm("Na pewno chcesz usunąć ten wydatek?"))try{const et=Sm(jl,"expenses",r.id);await oO(et),t(),n&&n()}catch(et){console.error("Błąd przy usuwaniu:",et)}};return J.jsxs("div",{className:"expense-card",children:[s?J.jsxs(J.Fragment,{children:[J.jsx("input",{type:"text",value:u,onChange:K=>f(K.target.value)}),J.jsx("input",{type:"number",value:m,onChange:K=>g(K.target.value)}),J.jsx("button",{onClick:b,children:"Zapisz"})]}):J.jsxs(J.Fragment,{children:[J.jsxs("p",{children:[J.jsx("strong",{children:"Kwota:"})," ",r.amount," zł"]}),J.jsxs("p",{children:[J.jsx("strong",{children:"Opis:"})," ",r.description]}),J.jsxs("p",{children:[J.jsx("strong",{children:"Data:"})," ",(q=r.createdAt)==null?void 0:q.toDate().toLocaleString()]}),r.receiptUrl&&J.jsxs("div",{children:[J.jsx("strong",{children:"Paragon:"}),J.jsx("br",{}),J.jsx("img",{src:r.receiptUrl,alt:"Paragon",width:"200",onClick:()=>T(r.receiptUrl),style:{cursor:"pointer"}})]}),r.location&&J.jsxs("p",{children:["🌍"," ",J.jsx("a",{href:`https://www.google.com/maps?q=${r.location.lat},${r.location.lng}`,target:"_blank",rel:"noopener noreferrer",children:"Zobacz na mapie"})]}),J.jsx("button",{className:"edit",onClick:()=>o(!0),children:"Edytuj"}),J.jsx("button",{className:"delete",onClick:O,style:{marginLeft:"10px",color:"white"},children:"Usuń"})]}),_&&J.jsx("div",{className:"fullscreen-overlay",onClick:()=>T(null),children:J.jsx("img",{src:_,alt:"Powiększony paragon"})})]},r.id)}function ON({refreshFlag:r}){const[t,n]=te.useState(()=>{const m=localStorage.getItem("budgetLimit");return m?parseFloat(m):500}),[s,o]=te.useState(0);te.useEffect(()=>{(async()=>{const g=new Date,_=new Date(g.getFullYear(),g.getMonth(),1),T=qc(hp(jl,"expenses"),wm("createdAt",">=",_)),O=(await Y0(T)).docs.reduce((q,K)=>q+(K.data().amount||0),0);o(O)})()},[r]);const u=t-s,f=m=>{const g=parseFloat(m.target.value);isNaN(g)||(n(g),localStorage.setItem("budgetLimit",g))};return J.jsxs("div",{className:"budget-summary",children:[J.jsx("h2",{children:"Podsumowanie budżetu"}),J.jsxs("label",{children:[J.jsx("strong",{children:"Limit miesięczny:"})," ",J.jsx("input",{type:"number",value:t,onChange:f,style:{width:"80px"}})," zł"]}),J.jsxs("p",{children:[J.jsx("strong",{children:"Wydano:"})," ",s.toFixed(2)," zł"]}),J.jsxs("p",{style:{color:u>=0?"green":"red"},children:[J.jsx("strong",{children:"Pozostało:"})," ",u.toFixed(2)," zł"]})]})}function NN(){const[r,t]=te.useState("add"),[n,s]=te.useState(!1),[o,u]=te.useState(null),[f,m]=te.useState("login");te.useEffect(()=>{const _=IR(Vs,T=>{u(T)});return()=>_()},[]);const g=()=>s(_=>!_);return o?J.jsxs("div",{className:"container py-4",children:[J.jsx("h1",{className:"text-center mb-4",children:"BudżetApp"}),J.jsx("div",{className:"text-end mb-3",children:J.jsx("button",{className:"btn btn-outline-danger",onClick:()=>CR(Vs),children:"Wyloguj się"})}),J.jsxs("div",{className:"d-flex justify-content-center mb-4 gap-2",children:[J.jsx("button",{className:`btn btn-${r==="add"?"primary":"outline-primary"}`,onClick:()=>t("add"),children:"Dodaj wydatek"}),J.jsx("button",{className:`btn btn-${r==="list"?"primary":"outline-primary"}`,onClick:()=>t("list"),children:"Lista wydatków"})]}),J.jsx("div",{className:"row justify-content-center",children:J.jsxs("div",{className:"col-lg-8",children:[r==="add"&&J.jsxs(J.Fragment,{children:[J.jsx("div",{className:"card card-body shadow-sm mb-4",children:J.jsx(ON,{refreshFlag:n})}),J.jsx("div",{className:"card card-body shadow-sm",children:J.jsx(IN,{onAdd:g})})]}),r==="list"&&J.jsx(CN,{refreshFlag:n,onChange:g})]})})]}):J.jsx("div",{className:"container py-5",children:f==="login"?J.jsx(wN,{onLogin:()=>u(Vs.currentUser),goToRegister:()=>m("register")}):J.jsx(RN,{onRegister:()=>u(Vs.currentUser),goToLogin:()=>m("login")})})}GS.createRoot(document.getElementById("root")).render(J.jsx(te.StrictMode,{children:J.jsx(NN,{})}));
