(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Pd={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy;function KS(){if(jy)return El;jy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return El.Fragment=t,El.jsx=n,El.jsxs=n,El}var qy;function QS(){return qy||(qy=1,Pd.exports=KS()),Pd.exports}var Z=QS(),xd={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy;function YS(){if(Hy)return bt;Hy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.iterator;function O(C){return C===null||typeof C!="object"?null:(C=b&&C[b]||C["@@iterator"],typeof C=="function"?C:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,tt={};function $(C,W,it){this.props=C,this.context=W,this.refs=tt,this.updater=it||L}$.prototype.isReactComponent={},$.prototype.setState=function(C,W){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,W,"setState")},$.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function Et(){}Et.prototype=$.prototype;function dt(C,W,it){this.props=C,this.context=W,this.refs=tt,this.updater=it||L}var ot=dt.prototype=new Et;ot.constructor=dt,H(ot,$.prototype),ot.isPureReactComponent=!0;var _t=Array.isArray,mt={H:null,A:null,T:null,S:null,V:null},wt=Object.prototype.hasOwnProperty;function M(C,W,it,J,ht,Ct){return it=Ct.ref,{$$typeof:r,type:C,key:W,ref:it!==void 0?it:null,props:Ct}}function S(C,W){return M(C.type,W,void 0,void 0,void 0,C.props)}function R(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function N(C){var W={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(it){return W[it]})}var V=/\/+/g;function U(C,W){return typeof C=="object"&&C!==null&&C.key!=null?N(""+C.key):W.toString(36)}function I(){}function Pe(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(I,I):(C.status="pending",C.then(function(W){C.status==="pending"&&(C.status="fulfilled",C.value=W)},function(W){C.status==="pending"&&(C.status="rejected",C.reason=W)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function ae(C,W,it,J,ht){var Ct=typeof C;(Ct==="undefined"||Ct==="boolean")&&(C=null);var Tt=!1;if(C===null)Tt=!0;else switch(Ct){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(C.$$typeof){case r:case t:Tt=!0;break;case E:return Tt=C._init,ae(Tt(C._payload),W,it,J,ht)}}if(Tt)return ht=ht(C),Tt=J===""?"."+U(C,0):J,_t(ht)?(it="",Tt!=null&&(it=Tt.replace(V,"$&/")+"/"),ae(ht,W,it,"",function(Qn){return Qn})):ht!=null&&(R(ht)&&(ht=S(ht,it+(ht.key==null||C&&C.key===ht.key?"":(""+ht.key).replace(V,"$&/")+"/")+Tt)),W.push(ht)),1;Tt=0;var De=J===""?".":J+":";if(_t(C))for(var Zt=0;Zt<C.length;Zt++)J=C[Zt],Ct=De+U(J,Zt),Tt+=ae(J,W,it,Ct,ht);else if(Zt=O(C),typeof Zt=="function")for(C=Zt.call(C),Zt=0;!(J=C.next()).done;)J=J.value,Ct=De+U(J,Zt++),Tt+=ae(J,W,it,Ct,ht);else if(Ct==="object"){if(typeof C.then=="function")return ae(Pe(C),W,it,J,ht);throw W=String(C),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function F(C,W,it){if(C==null)return C;var J=[],ht=0;return ae(C,J,"","",function(Ct){return W.call(it,Ct,ht++)}),J}function nt(C){if(C._status===-1){var W=C._result;W=W(),W.then(function(it){(C._status===0||C._status===-1)&&(C._status=1,C._result=it)},function(it){(C._status===0||C._status===-1)&&(C._status=2,C._result=it)}),C._status===-1&&(C._status=0,C._result=W)}if(C._status===1)return C._result.default;throw C._result}var ut=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function zt(){}return bt.Children={map:F,forEach:function(C,W,it){F(C,function(){W.apply(this,arguments)},it)},count:function(C){var W=0;return F(C,function(){W++}),W},toArray:function(C){return F(C,function(W){return W})||[]},only:function(C){if(!R(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},bt.Component=$,bt.Fragment=n,bt.Profiler=o,bt.PureComponent=dt,bt.StrictMode=s,bt.Suspense=g,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mt,bt.__COMPILER_RUNTIME={__proto__:null,c:function(C){return mt.H.useMemoCache(C)}},bt.cache=function(C){return function(){return C.apply(null,arguments)}},bt.cloneElement=function(C,W,it){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var J=H({},C.props),ht=C.key,Ct=void 0;if(W!=null)for(Tt in W.ref!==void 0&&(Ct=void 0),W.key!==void 0&&(ht=""+W.key),W)!wt.call(W,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&W.ref===void 0||(J[Tt]=W[Tt]);var Tt=arguments.length-2;if(Tt===1)J.children=it;else if(1<Tt){for(var De=Array(Tt),Zt=0;Zt<Tt;Zt++)De[Zt]=arguments[Zt+2];J.children=De}return M(C.type,ht,void 0,void 0,Ct,J)},bt.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:u,_context:C},C},bt.createElement=function(C,W,it){var J,ht={},Ct=null;if(W!=null)for(J in W.key!==void 0&&(Ct=""+W.key),W)wt.call(W,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ht[J]=W[J]);var Tt=arguments.length-2;if(Tt===1)ht.children=it;else if(1<Tt){for(var De=Array(Tt),Zt=0;Zt<Tt;Zt++)De[Zt]=arguments[Zt+2];ht.children=De}if(C&&C.defaultProps)for(J in Tt=C.defaultProps,Tt)ht[J]===void 0&&(ht[J]=Tt[J]);return M(C,Ct,void 0,void 0,null,ht)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(C){return{$$typeof:m,render:C}},bt.isValidElement=R,bt.lazy=function(C){return{$$typeof:E,_payload:{_status:-1,_result:C},_init:nt}},bt.memo=function(C,W){return{$$typeof:_,type:C,compare:W===void 0?null:W}},bt.startTransition=function(C){var W=mt.T,it={};mt.T=it;try{var J=C(),ht=mt.S;ht!==null&&ht(it,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(zt,ut)}catch(Ct){ut(Ct)}finally{mt.T=W}},bt.unstable_useCacheRefresh=function(){return mt.H.useCacheRefresh()},bt.use=function(C){return mt.H.use(C)},bt.useActionState=function(C,W,it){return mt.H.useActionState(C,W,it)},bt.useCallback=function(C,W){return mt.H.useCallback(C,W)},bt.useContext=function(C){return mt.H.useContext(C)},bt.useDebugValue=function(){},bt.useDeferredValue=function(C,W){return mt.H.useDeferredValue(C,W)},bt.useEffect=function(C,W,it){var J=mt.H;if(typeof it=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(C,W)},bt.useId=function(){return mt.H.useId()},bt.useImperativeHandle=function(C,W,it){return mt.H.useImperativeHandle(C,W,it)},bt.useInsertionEffect=function(C,W){return mt.H.useInsertionEffect(C,W)},bt.useLayoutEffect=function(C,W){return mt.H.useLayoutEffect(C,W)},bt.useMemo=function(C,W){return mt.H.useMemo(C,W)},bt.useOptimistic=function(C,W){return mt.H.useOptimistic(C,W)},bt.useReducer=function(C,W,it){return mt.H.useReducer(C,W,it)},bt.useRef=function(C){return mt.H.useRef(C)},bt.useState=function(C){return mt.H.useState(C)},bt.useSyncExternalStore=function(C,W,it){return mt.H.useSyncExternalStore(C,W,it)},bt.useTransition=function(){return mt.H.useTransition()},bt.version="19.1.0",bt}var Fy;function Dm(){return Fy||(Fy=1,xd.exports=YS()),xd.exports}var Wt=Dm(),Ld={exports:{}},Tl={},zd={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy;function XS(){return Gy||(Gy=1,function(r){function t(F,nt){var ut=F.length;F.push(nt);t:for(;0<ut;){var zt=ut-1>>>1,C=F[zt];if(0<o(C,nt))F[zt]=nt,F[ut]=C,ut=zt;else break t}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var nt=F[0],ut=F.pop();if(ut!==nt){F[0]=ut;t:for(var zt=0,C=F.length,W=C>>>1;zt<W;){var it=2*(zt+1)-1,J=F[it],ht=it+1,Ct=F[ht];if(0>o(J,ut))ht<C&&0>o(Ct,J)?(F[zt]=Ct,F[ht]=ut,zt=ht):(F[zt]=J,F[it]=ut,zt=it);else if(ht<C&&0>o(Ct,ut))F[zt]=Ct,F[ht]=ut,zt=ht;else break t}}return nt}function o(F,nt){var ut=F.sortIndex-nt.sortIndex;return ut!==0?ut:F.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var g=[],_=[],E=1,b=null,O=3,L=!1,H=!1,tt=!1,$=!1,Et=typeof setTimeout=="function"?setTimeout:null,dt=typeof clearTimeout=="function"?clearTimeout:null,ot=typeof setImmediate<"u"?setImmediate:null;function _t(F){for(var nt=n(_);nt!==null;){if(nt.callback===null)s(_);else if(nt.startTime<=F)s(_),nt.sortIndex=nt.expirationTime,t(g,nt);else break;nt=n(_)}}function mt(F){if(tt=!1,_t(F),!H)if(n(g)!==null)H=!0,wt||(wt=!0,U());else{var nt=n(_);nt!==null&&ae(mt,nt.startTime-F)}}var wt=!1,M=-1,S=5,R=-1;function N(){return $?!0:!(r.unstable_now()-R<S)}function V(){if($=!1,wt){var F=r.unstable_now();R=F;var nt=!0;try{t:{H=!1,tt&&(tt=!1,dt(M),M=-1),L=!0;var ut=O;try{e:{for(_t(F),b=n(g);b!==null&&!(b.expirationTime>F&&N());){var zt=b.callback;if(typeof zt=="function"){b.callback=null,O=b.priorityLevel;var C=zt(b.expirationTime<=F);if(F=r.unstable_now(),typeof C=="function"){b.callback=C,_t(F),nt=!0;break e}b===n(g)&&s(g),_t(F)}else s(g);b=n(g)}if(b!==null)nt=!0;else{var W=n(_);W!==null&&ae(mt,W.startTime-F),nt=!1}}break t}finally{b=null,O=ut,L=!1}nt=void 0}}finally{nt?U():wt=!1}}}var U;if(typeof ot=="function")U=function(){ot(V)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Pe=I.port2;I.port1.onmessage=V,U=function(){Pe.postMessage(null)}}else U=function(){Et(V,0)};function ae(F,nt){M=Et(function(){F(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return O},r.unstable_next=function(F){switch(O){case 1:case 2:case 3:var nt=3;break;default:nt=O}var ut=O;O=nt;try{return F()}finally{O=ut}},r.unstable_requestPaint=function(){$=!0},r.unstable_runWithPriority=function(F,nt){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ut=O;O=F;try{return nt()}finally{O=ut}},r.unstable_scheduleCallback=function(F,nt,ut){var zt=r.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?zt+ut:zt):ut=zt,F){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=ut+C,F={id:E++,callback:nt,priorityLevel:F,startTime:ut,expirationTime:C,sortIndex:-1},ut>zt?(F.sortIndex=ut,t(_,F),n(g)===null&&F===n(_)&&(tt?(dt(M),M=-1):tt=!0,ae(mt,ut-zt))):(F.sortIndex=C,t(g,F),H||L||(H=!0,wt||(wt=!0,U()))),F},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(F){var nt=O;return function(){var ut=O;O=nt;try{return F.apply(this,arguments)}finally{O=ut}}}}(Bd)),Bd}var Ky;function $S(){return Ky||(Ky=1,zd.exports=XS()),zd.exports}var jd={exports:{}},Qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy;function WS(){if(Qy)return Qe;Qy=1;var r=Dm();function t(g){var _="https://react.dev/errors/"+g;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)_+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,_,E){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:g,containerInfo:_,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,_){if(g==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Qe.createPortal=function(g,_){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return u(g,_,null,E)},Qe.flushSync=function(g){var _=f.T,E=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=_,s.p=E,s.d.f()}},Qe.preconnect=function(g,_){typeof g=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(g,_))},Qe.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Qe.preinit=function(g,_){if(typeof g=="string"&&_&&typeof _.as=="string"){var E=_.as,b=m(E,_.crossOrigin),O=typeof _.integrity=="string"?_.integrity:void 0,L=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;E==="style"?s.d.S(g,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:b,integrity:O,fetchPriority:L}):E==="script"&&s.d.X(g,{crossOrigin:b,integrity:O,fetchPriority:L,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Qe.preinitModule=function(g,_){if(typeof g=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var E=m(_.as,_.crossOrigin);s.d.M(g,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&s.d.M(g)},Qe.preload=function(g,_){if(typeof g=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var E=_.as,b=m(E,_.crossOrigin);s.d.L(g,E,{crossOrigin:b,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Qe.preloadModule=function(g,_){if(typeof g=="string")if(_){var E=m(_.as,_.crossOrigin);s.d.m(g,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else s.d.m(g)},Qe.requestFormReset=function(g){s.d.r(g)},Qe.unstable_batchedUpdates=function(g,_){return g(_)},Qe.useFormState=function(g,_,E){return f.H.useFormState(g,_,E)},Qe.useFormStatus=function(){return f.H.useHostTransitionStatus()},Qe.version="19.1.0",Qe}var Yy;function ZS(){if(Yy)return jd.exports;Yy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),jd.exports=WS(),jd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy;function JS(){if(Xy)return Tl;Xy=1;var r=$S(),t=Dm(),n=ZS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function g(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),e;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var E=Object.assign,b=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),Et=Symbol.for("react.provider"),dt=Symbol.for("react.consumer"),ot=Symbol.for("react.context"),_t=Symbol.for("react.forward_ref"),mt=Symbol.for("react.suspense"),wt=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function U(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function Pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case $:return"Profiler";case tt:return"StrictMode";case mt:return"Suspense";case wt:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case ot:return(e.displayName||"Context")+".Provider";case dt:return(e._context.displayName||"Context")+".Consumer";case _t:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return i=e.displayName||null,i!==null?i:Pe(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return Pe(e(i))}catch{}}return null}var ae=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},zt=[],C=-1;function W(e){return{current:e}}function it(e){0>C||(e.current=zt[C],zt[C]=null,C--)}function J(e,i){C++,zt[C]=e.current,e.current=i}var ht=W(null),Ct=W(null),Tt=W(null),De=W(null);function Zt(e,i){switch(J(Tt,i),J(Ct,e),J(ht,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?py(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=py(i),e=gy(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(ht),J(ht,e)}function Qn(){it(ht),it(Ct),it(Tt)}function Ji(e){e.memoizedState!==null&&J(De,e);var i=ht.current,a=gy(i,e.type);i!==a&&(J(Ct,e),J(ht,a))}function vi(e){Ct.current===e&&(it(ht),it(Ct)),De.current===e&&(it(De),pl._currentValue=ut)}var Wr=Object.prototype.hasOwnProperty,Zr=r.unstable_scheduleCallback,Jr=r.unstable_cancelCallback,ho=r.unstable_shouldYield,nu=r.unstable_requestPaint,An=r.unstable_now,Uh=r.unstable_getCurrentPriorityLevel,fo=r.unstable_ImmediatePriority,$s=r.unstable_UserBlockingPriority,ts=r.unstable_NormalPriority,Ph=r.unstable_LowPriority,Ws=r.unstable_IdlePriority,mo=r.log,iu=r.unstable_setDisableYieldValue,oe=null,Ht=null;function cn(e){if(typeof mo=="function"&&iu(e),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(oe,e)}catch{}}var Ge=Math.clz32?Math.clz32:es,ru=Math.log,xh=Math.LN2;function es(e){return e>>>=0,e===0?32:31-(ru(e)/xh|0)|0}var ns=256,is=4194304;function Pn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zs(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Pn(l):(v&=T,v!==0?h=Pn(v):a||(a=T&~e,a!==0&&(h=Pn(a))))):(T=l&~d,T!==0?h=Pn(T):v!==0?h=Pn(v):a||(a=l&~e,a!==0&&(h=Pn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function rs(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function po(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function go(){var e=ns;return ns<<=1,(ns&4194048)===0&&(ns=256),e}function _o(){var e=is;return is<<=1,(is&62914560)===0&&(is=4194304),e}function Ei(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Ti(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yo(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,w=e.expirationTimes,z=e.hiddenUpdates;for(a=v&~a;0<a;){var G=31-Ge(a),Q=1<<G;T[G]=0,w[G]=-1;var B=z[G];if(B!==null)for(z[G]=null,G=0;G<B.length;G++){var j=B[G];j!==null&&(j.lane&=-536870913)}a&=~Q}l!==0&&Yn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Yn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ge(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function vo(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Ge(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function tr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Js(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function er(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:Uy(e.type))}function su(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var ee=Math.random().toString(36).slice(2),Se="__reactFiber$"+ee,ge="__reactProps$"+ee,Sn="__reactContainer$"+ee,Eo="__reactEvents$"+ee,Lh="__reactListeners$"+ee,nr="__reactHandles$"+ee,au="__reactResources$"+ee,ss="__reactMarker$"+ee;function ir(e){delete e[Se],delete e[ge],delete e[Eo],delete e[Lh],delete e[nr]}function Ai(e){var i=e[Se];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Sn]||a[Se]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=Ey(e);e!==null;){if(a=e[Se])return a;e=Ey(e)}return i}e=a,a=e.parentNode}return null}function Xn(e){if(e=e[Se]||e[Sn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function $n(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Ze(e){var i=e[au];return i||(i=e[au]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function fe(e){e[ss]=!0}var To=new Set,ta={};function xn(e,i){Si(e,i),Si(e+"Capture",i)}function Si(e,i){for(ta[e]=i,e=0;e<i.length;e++)To.add(i[e])}var ou=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lu={},as={};function uu(e){return Wr.call(as,e)?!0:Wr.call(lu,e)?!1:ou.test(e)?as[e]=!0:(lu[e]=!0,!1)}function rr(e,i,a){if(uu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Wn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function xe(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var os,cu;function bi(e){if(os===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);os=i&&i[1]||"",cu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+os+e+cu}var ea=!1;function na(e,i){if(!e||ea)return"";ea=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(j){var B=j}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(j){B=j}e.call(Q.prototype)}}else{try{throw Error()}catch(j){B=j}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(j){if(j&&B&&typeof j.stack=="string")return[j.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var w=v.split(`
`),z=T.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===z.length)for(l=w.length-1,h=z.length-1;1<=l&&0<=h&&w[l]!==z[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==z[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==z[h]){var G=`
`+w[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=h);break}}}finally{ea=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?bi(a):""}function Ao(e){switch(e.tag){case 26:case 27:case 5:return bi(e.type);case 16:return bi("Lazy");case 13:return bi("Suspense");case 19:return bi("SuspenseList");case 0:case 15:return na(e.type,!1);case 11:return na(e.type.render,!1);case 1:return na(e.type,!0);case 31:return bi("Activity");default:return""}}function ia(e){try{var i="";do i+=Ao(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Je(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function So(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function zh(e){var i=So(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ra(e){e._valueTracker||(e._valueTracker=zh(e))}function bo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=So(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bh=/[\n"\\]/g;function _e(e){return e.replace(Bh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function hn(e,i,a,l,h,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Je(i)):e.value!==""+Je(i)&&(e.value=""+Je(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?sr(e,v,Je(i)):a!=null?sr(e,v,Je(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Je(T):e.removeAttribute("name")}function us(e,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Je(a):"",i=i!=null?""+Je(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function sr(e,i,a){i==="number"&&ls(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function wi(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Je(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Kt(e,i,a){if(i!=null&&(i=""+Je(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Je(a):""}function cs(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(ae(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Je(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function bn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var hs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hu(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||hs.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function wo(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&hu(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&hu(e,d,i[d])}function Ro(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sa(e){return qh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ri=null;function wn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ii=null,Ci=null;function Io(e){var i=Xn(e);if(i&&(e=i.stateNode)){var a=e[ge]||null;t:switch(e=i.stateNode,i.type){case"input":if(hn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_e(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[ge]||null;if(!h)throw Error(s(90));hn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&bo(l)}break t;case"textarea":Kt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&wi(e,!!a.multiple,i,!1)}}}var Zn=!1;function fu(e,i,a){if(Zn)return e(i,a);Zn=!0;try{var l=e(i);return l}finally{if(Zn=!1,(Ii!==null||Ci!==null)&&(sc(),Ii&&(i=Ii,e=Ci,Ci=Ii=null,Io(i),e)))for(i=0;i<e.length;i++)Io(e[i])}}function fs(e,i){var a=e.stateNode;if(a===null)return null;var l=a[ge]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rn=!1;if(Ln)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){Rn=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{Rn=!1}var Jn=null,ar=null,Di=null;function Co(){if(Di)return Di;var e,i=ar,a=i.length,l,h="value"in Jn?Jn.value:Jn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Di=h.slice(e,1<l?1-l:void 0)}function ti(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ei(){return!0}function Do(){return!1}function Oe(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ei:Do,this.isPropagationStopped=Do,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),i}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=Oe(jt),ms=E({},jt,{view:0,detail:0}),du=Oe(ms),oa,la,ni,ps=E({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ni&&(ni&&e.type==="mousemove"?(oa=e.screenX-ni.screenX,la=e.screenY-ni.screenY):la=oa=0,ni=e),oa)},movementY:function(e){return"movementY"in e?e.movementY:la}}),In=Oe(ps),mu=E({},ps,{dataTransfer:0}),Hh=Oe(mu),gs=E({},ms,{relatedTarget:0}),ua=Oe(gs),Oo=E({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),ca=Oe(Oo),pu=E({},jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ha=Oe(pu),Fh=E({},jt,{data:0}),No=Oe(Fh),_s={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_u={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mo(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=_u[e])?!!i[e]:!1}function ys(){return Mo}var yu=E({},ms,{key:function(e){if(e.key){var i=_s[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fa=Oe(yu),vu=E({},ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vo=Oe(vu),Oi=E({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),Eu=Oe(Oi),Tu=E({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Au=Oe(Tu),Su=E({},ps,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),da=Oe(Su),tn=E({},jt,{newState:0,oldState:0}),bu=Oe(tn),wu=[9,13,27,32],ii=Ln&&"CompositionEvent"in window,c=null;Ln&&"documentMode"in document&&(c=document.documentMode);var p=Ln&&"TextEvent"in window&&!c,y=Ln&&(!ii||c&&8<c&&11>=c),A=" ",P=!1;function q(e,i){switch(e){case"keyup":return wu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function et(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kt=!1;function be(e,i){switch(e){case"compositionend":return et(i);case"keypress":return i.which!==32?null:(P=!0,A);case"textInput":return e=i.data,e===A&&P?null:e;default:return null}}function Ut(e,i){if(kt)return e==="compositionend"||!ii&&q(e,i)?(e=Co(),Di=ar=Jn=null,kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return y&&i.locale!=="ko"?null:i.data;default:return null}}var Ne={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function we(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ne[e.type]:i==="textarea"}function Ni(e,i,a,l){Ii?Ci?Ci.push(l):Ci=[l]:Ii=l,i=hc(i,"onChange"),0<i.length&&(a=new aa("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var Le=null,ri=null;function ko(e){cy(e,0)}function Ru(e){var i=$n(e);if(bo(i))return e}function Np(e,i){if(e==="change")return i}var Mp=!1;if(Ln){var Gh;if(Ln){var Kh="oninput"in document;if(!Kh){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),Kh=typeof Vp.oninput=="function"}Gh=Kh}else Gh=!1;Mp=Gh&&(!document.documentMode||9<document.documentMode)}function kp(){Le&&(Le.detachEvent("onpropertychange",Up),ri=Le=null)}function Up(e){if(e.propertyName==="value"&&Ru(ri)){var i=[];Ni(i,ri,e,wn(e)),fu(ko,i)}}function AA(e,i,a){e==="focusin"?(kp(),Le=i,ri=a,Le.attachEvent("onpropertychange",Up)):e==="focusout"&&kp()}function SA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ru(ri)}function bA(e,i){if(e==="click")return Ru(i)}function wA(e,i){if(e==="input"||e==="change")return Ru(i)}function RA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var fn=typeof Object.is=="function"?Object.is:RA;function Uo(e,i){if(fn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Wr.call(i,h)||!fn(e[h],i[h]))return!1}return!0}function Pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xp(e,i){var a=Pp(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Pp(a)}}function Lp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Lp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ls(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ls(e.document)}return i}function Qh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var IA=Ln&&"documentMode"in document&&11>=document.documentMode,ma=null,Yh=null,Po=null,Xh=!1;function Bp(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xh||ma==null||ma!==ls(l)||(l=ma,"selectionStart"in l&&Qh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Po&&Uo(Po,l)||(Po=l,l=hc(Yh,"onSelect"),0<l.length&&(i=new aa("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=ma)))}function vs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var pa={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},$h={},jp={};Ln&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function Es(e){if($h[e])return $h[e];if(!pa[e])return e;var i=pa[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in jp)return $h[e]=i[a];return e}var qp=Es("animationend"),Hp=Es("animationiteration"),Fp=Es("animationstart"),CA=Es("transitionrun"),DA=Es("transitionstart"),OA=Es("transitioncancel"),Gp=Es("transitionend"),Kp=new Map,Wh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wh.push("scrollEnd");function zn(e,i){Kp.set(e,i),xn(i,[e])}var Qp=new WeakMap;function Cn(e,i){if(typeof e=="object"&&e!==null){var a=Qp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:ia(i)},Qp.set(e,i),i)}return{value:e,source:i,stack:ia(i)}}var Dn=[],ga=0,Zh=0;function Iu(){for(var e=ga,i=Zh=ga=0;i<e;){var a=Dn[i];Dn[i++]=null;var l=Dn[i];Dn[i++]=null;var h=Dn[i];Dn[i++]=null;var d=Dn[i];if(Dn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Yp(a,h,d)}}function Cu(e,i,a,l){Dn[ga++]=e,Dn[ga++]=i,Dn[ga++]=a,Dn[ga++]=l,Zh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Jh(e,i,a,l){return Cu(e,i,a,l),Du(e)}function _a(e,i){return Cu(e,null,null,i),Du(e)}function Yp(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Ge(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Du(e){if(50<ol)throw ol=0,ad=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ya={};function NA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,i,a,l){return new NA(e,i,a,l)}function tf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mi(e,i){var a=e.alternate;return a===null?(a=dn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ou(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")tf(e)&&(v=1);else if(typeof e=="string")v=VS(e,a,ht.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=dn(31,a,i,h),e.elementType=R,e.lanes=d,e;case H:return Ts(a.children,h,d,i);case tt:v=8,h|=24;break;case $:return e=dn(12,a,i,h|2),e.elementType=$,e.lanes=d,e;case mt:return e=dn(13,a,i,h),e.elementType=mt,e.lanes=d,e;case wt:return e=dn(19,a,i,h),e.elementType=wt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Et:case ot:v=10;break t;case dt:v=9;break t;case _t:v=11;break t;case M:v=14;break t;case S:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=dn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function Ts(e,i,a,l){return e=dn(7,e,l,i),e.lanes=a,e}function ef(e,i,a){return e=dn(6,e,null,i),e.lanes=a,e}function nf(e,i,a){return i=dn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var va=[],Ea=0,Nu=null,Mu=0,On=[],Nn=0,As=null,Vi=1,ki="";function Ss(e,i){va[Ea++]=Mu,va[Ea++]=Nu,Nu=e,Mu=i}function $p(e,i,a){On[Nn++]=Vi,On[Nn++]=ki,On[Nn++]=As,As=e;var l=Vi;e=ki;var h=32-Ge(l)-1;l&=~(1<<h),a+=1;var d=32-Ge(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Vi=1<<32-Ge(i)+h|a<<h|l,ki=d+e}else Vi=1<<d|a<<h|l,ki=e}function rf(e){e.return!==null&&(Ss(e,1),$p(e,1,0))}function sf(e){for(;e===Nu;)Nu=va[--Ea],va[Ea]=null,Mu=va[--Ea],va[Ea]=null;for(;e===As;)As=On[--Nn],On[Nn]=null,ki=On[--Nn],On[Nn]=null,Vi=On[--Nn],On[Nn]=null}var en=null,le=null,Bt=!1,bs=null,si=!1,af=Error(s(519));function ws(e){var i=Error(s(418,""));throw zo(Cn(i,e)),af}function Wp(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[Se]=e,i[ge]=l,a){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(a=0;a<ul.length;a++)Nt(ul[a],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":Nt("invalid",i),us(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ra(i);break;case"select":Nt("invalid",i);break;case"textarea":Nt("invalid",i),cs(i,l.value,l.defaultValue,l.children),ra(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||my(i.textContent,a)?(l.popover!=null&&(Nt("beforetoggle",i),Nt("toggle",i)),l.onScroll!=null&&Nt("scroll",i),l.onScrollEnd!=null&&Nt("scrollend",i),l.onClick!=null&&(i.onclick=fc),i=!0):i=!1,i||ws(e)}function Zp(e){for(en=e.return;en;)switch(en.tag){case 5:case 13:si=!1;return;case 27:case 3:si=!0;return;default:en=en.return}}function xo(e){if(e!==en)return!1;if(!Bt)return Zp(e),Bt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ad(e.type,e.memoizedProps)),a=!a),a&&le&&ws(e),Zp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){le=jn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}le=null}}else i===27?(i=le,Ar(e.type)?(e=Rd,Rd=null,le=e):le=i):le=en?jn(e.stateNode.nextSibling):null;return!0}function Lo(){le=en=null,Bt=!1}function Jp(){var e=bs;return e!==null&&(on===null?on=e:on.push.apply(on,e),bs=null),e}function zo(e){bs===null?bs=[e]:bs.push(e)}var of=W(null),Rs=null,Ui=null;function or(e,i,a){J(of,i._currentValue),i._currentValue=a}function Pi(e){e._currentValue=of.current,it(of)}function lf(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function uf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var w=0;w<i.length;w++)if(T.context===i[w]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),lf(d.return,a,e),l||(v=null);break t}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),lf(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Bo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;fn(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===De.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(pl):e=[pl])}h=h.return}e!==null&&uf(i,e,a,l),i.flags|=262144}function Vu(e){for(e=e.firstContext;e!==null;){if(!fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Is(e){Rs=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return tg(Rs,e)}function ku(e,i){return Rs===null&&Is(e),tg(e,i)}function tg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Ui===null){if(e===null)throw Error(s(308));Ui=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ui=Ui.next=i;return a}var MA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},VA=r.unstable_scheduleCallback,kA=r.unstable_NormalPriority,Re={$$typeof:ot,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new MA,data:new Map,refCount:0}}function jo(e){e.refCount--,e.refCount===0&&VA(kA,function(){e.controller.abort()})}var qo=null,hf=0,Ta=0,Aa=null;function UA(e,i){if(qo===null){var a=qo=[];hf=0,Ta=dd(),Aa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return hf++,i.then(eg,eg),i}function eg(){if(--hf===0&&qo!==null){Aa!==null&&(Aa.status="fulfilled");var e=qo;qo=null,Ta=0,Aa=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function PA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var ng=F.S;F.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&UA(e,i),ng!==null&&ng(e,i)};var Cs=W(null);function ff(){var e=Cs.current;return e!==null?e:Jt.pooledCache}function Uu(e,i){i===null?J(Cs,Cs.current):J(Cs,i.pool)}function ig(){var e=ff();return e===null?null:{parent:Re._currentValue,pool:e}}var Ho=Error(s(460)),rg=Error(s(474)),Pu=Error(s(542)),df={then:function(){}};function sg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xu(){}function ag(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(xu,xu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,lg(e),e;default:if(typeof i.status=="string")i.then(xu,xu);else{if(e=Jt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,lg(e),e}throw Fo=i,Ho}}var Fo=null;function og(){if(Fo===null)throw Error(s(459));var e=Fo;return Fo=null,e}function lg(e){if(e===Ho||e===Pu)throw Error(s(483))}var lr=!1;function mf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ur(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ft&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Du(e),Yp(e,null,a),i}return Cu(e,l,i,a),Du(e)}function Go(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,vo(e,a)}}function gf(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var _f=!1;function Ko(){if(_f){var e=Aa;if(e!==null)throw e}}function Qo(e,i,a,l){_f=!1;var h=e.updateQueue;lr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var w=T,z=w.next;w.next=null,v===null?d=z:v.next=z,v=w;var G=e.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==v&&(T===null?G.firstBaseUpdate=z:T.next=z,G.lastBaseUpdate=w))}if(d!==null){var Q=h.baseState;v=0,G=z=w=null,T=d;do{var B=T.lane&-536870913,j=B!==T.lane;if(j?(Pt&B)===B:(l&B)===B){B!==0&&B===Ta&&(_f=!0),G!==null&&(G=G.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var yt=e,ft=T;B=i;var Xt=a;switch(ft.tag){case 1:if(yt=ft.payload,typeof yt=="function"){Q=yt.call(Xt,Q,B);break t}Q=yt;break t;case 3:yt.flags=yt.flags&-65537|128;case 0:if(yt=ft.payload,B=typeof yt=="function"?yt.call(Xt,Q,B):yt,B==null)break t;Q=E({},Q,B);break t;case 2:lr=!0}}B=T.callback,B!==null&&(e.flags|=64,j&&(e.flags|=8192),j=h.callbacks,j===null?h.callbacks=[B]:j.push(B))}else j={lane:B,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(z=G=j,w=Q):G=G.next=j,v|=B;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;j=T,T=j.next,j.next=null,h.lastBaseUpdate=j,h.shared.pending=null}}while(!0);G===null&&(w=Q),h.baseState=w,h.firstBaseUpdate=z,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),yr|=v,e.lanes=v,e.memoizedState=Q}}function ug(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function cg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ug(a[e],i)}var Sa=W(null),Lu=W(0);function hg(e,i){e=Hi,J(Lu,e),J(Sa,i),Hi=e|i.baseLanes}function yf(){J(Lu,Hi),J(Sa,Sa.current)}function vf(){Hi=Lu.current,it(Sa),it(Lu)}var hr=0,Rt=null,Qt=null,ye=null,zu=!1,ba=!1,Ds=!1,Bu=0,Yo=0,wa=null,xA=0;function de(){throw Error(s(321))}function Ef(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!fn(e[a],i[a]))return!1;return!0}function Tf(e,i,a,l,h,d){return hr=d,Rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?Yg:Xg,Ds=!1,d=a(l,h),Ds=!1,ba&&(d=dg(i,a,l,h)),fg(e),d}function fg(e){F.H=Ku;var i=Qt!==null&&Qt.next!==null;if(hr=0,ye=Qt=Rt=null,zu=!1,Yo=0,wa=null,i)throw Error(s(300));e===null||Me||(e=e.dependencies,e!==null&&Vu(e)&&(Me=!0))}function dg(e,i,a,l){Rt=e;var h=0;do{if(ba&&(wa=null),Yo=0,ba=!1,25<=h)throw Error(s(301));if(h+=1,ye=Qt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=FA,d=i(a,l)}while(ba);return d}function LA(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?Xo(i):i,e=e.useState()[0],(Qt!==null?Qt.memoizedState:null)!==e&&(Rt.flags|=1024),i}function Af(){var e=Bu!==0;return Bu=0,e}function Sf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function bf(e){if(zu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}zu=!1}hr=0,ye=Qt=Rt=null,ba=!1,Yo=Bu=0,wa=null}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?Rt.memoizedState=ye=e:ye=ye.next=e,ye}function ve(){if(Qt===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var i=ye===null?Rt.memoizedState:ye.next;if(i!==null)ye=i,Qt=e;else{if(e===null)throw Rt.alternate===null?Error(s(467)):Error(s(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},ye===null?Rt.memoizedState=ye=e:ye=ye.next=e}return ye}function wf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(e){var i=Yo;return Yo+=1,wa===null&&(wa=[]),e=ag(wa,e,i),i=Rt,(ye===null?i.memoizedState:ye.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Yg:Xg),e}function ju(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xo(e);if(e.$$typeof===ot)return Ke(e)}throw Error(s(438,String(e)))}function Rf(e){var i=null,a=Rt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Rt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=wf(),Rt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=N;return i.index++,a}function xi(e,i){return typeof i=="function"?i(e):i}function qu(e){var i=ve();return If(i,Qt,e)}function If(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=v=null,w=null,z=i,G=!1;do{var Q=z.lane&-536870913;if(Q!==z.lane?(Pt&Q)===Q:(hr&Q)===Q){var B=z.revertLane;if(B===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Q===Ta&&(G=!0);else if((hr&B)===B){z=z.next,B===Ta&&(G=!0);continue}else Q={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},w===null?(T=w=Q,v=d):w=w.next=Q,Rt.lanes|=B,yr|=B;Q=z.action,Ds&&a(d,Q),d=z.hasEagerState?z.eagerState:a(d,Q)}else B={lane:Q,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},w===null?(T=w=B,v=d):w=w.next=B,Rt.lanes|=Q,yr|=Q;z=z.next}while(z!==null&&z!==i);if(w===null?v=d:w.next=T,!fn(d,e.memoizedState)&&(Me=!0,G&&(a=Aa,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Cf(e){var i=ve(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);fn(d,i.memoizedState)||(Me=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function mg(e,i,a){var l=Rt,h=ve(),d=Bt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!fn((Qt||h).memoizedState,a);v&&(h.memoizedState=a,Me=!0),h=h.queue;var T=_g.bind(null,l,h,e);if($o(2048,8,T,[e]),h.getSnapshot!==i||v||ye!==null&&ye.memoizedState.tag&1){if(l.flags|=2048,Ra(9,Hu(),gg.bind(null,l,h,a,i),null),Jt===null)throw Error(s(349));d||(hr&124)!==0||pg(l,i,a)}return a}function pg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Rt.updateQueue,i===null?(i=wf(),Rt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function gg(e,i,a,l){i.value=a,i.getSnapshot=l,yg(i)&&vg(e)}function _g(e,i,a){return a(function(){yg(i)&&vg(e)})}function yg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!fn(e,a)}catch{return!0}}function vg(e){var i=_a(e,2);i!==null&&yn(i,e,2)}function Df(e){var i=sn();if(typeof e=="function"){var a=e;if(e=a(),Ds){cn(!0);try{a()}finally{cn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},i}function Eg(e,i,a,l){return e.baseState=a,If(e,Qt,typeof l=="function"?l:xi)}function zA(e,i,a,l,h){if(Gu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};F.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Tg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Tg(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=F.T,v={};F.T=v;try{var T=a(h,l),w=F.S;w!==null&&w(v,T),Ag(e,i,T)}catch(z){Of(e,i,z)}finally{F.T=d}}else try{d=a(h,l),Ag(e,i,d)}catch(z){Of(e,i,z)}}function Ag(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Sg(e,i,l)},function(l){return Of(e,i,l)}):Sg(e,i,a)}function Sg(e,i,a){i.status="fulfilled",i.value=a,bg(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Tg(e,a)))}function Of(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,bg(i),i=i.next;while(i!==l)}e.action=null}function bg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function wg(e,i){return i}function Rg(e,i){if(Bt){var a=Jt.formState;if(a!==null){t:{var l=Rt;if(Bt){if(le){e:{for(var h=le,d=si;h.nodeType!==8;){if(!d){h=null;break e}if(h=jn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){le=jn(h.nextSibling),l=h.data==="F!";break t}}ws(l)}l=!1}l&&(i=a[0])}}return a=sn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wg,lastRenderedState:i},a.queue=l,a=Gg.bind(null,Rt,l),l.dispatch=a,l=Df(!1),d=Uf.bind(null,Rt,!1,l.queue),l=sn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=zA.bind(null,Rt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function Ig(e){var i=ve();return Cg(i,Qt,e)}function Cg(e,i,a){if(i=If(e,i,wg)[0],e=qu(xi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Xo(i)}catch(v){throw v===Ho?Pu:v}else l=i;i=ve();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Rt.flags|=2048,Ra(9,Hu(),BA.bind(null,h,a),null)),[l,d,e]}function BA(e,i){e.action=i}function Dg(e){var i=ve(),a=Qt;if(a!==null)return Cg(i,a,e);ve(),i=i.memoizedState,a=ve();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Ra(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Rt.updateQueue,i===null&&(i=wf(),Rt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Hu(){return{destroy:void 0,resource:void 0}}function Og(){return ve().memoizedState}function Fu(e,i,a,l){var h=sn();l=l===void 0?null:l,Rt.flags|=e,h.memoizedState=Ra(1|i,Hu(),a,l)}function $o(e,i,a,l){var h=ve();l=l===void 0?null:l;var d=h.memoizedState.inst;Qt!==null&&l!==null&&Ef(l,Qt.memoizedState.deps)?h.memoizedState=Ra(i,d,a,l):(Rt.flags|=e,h.memoizedState=Ra(1|i,d,a,l))}function Ng(e,i){Fu(8390656,8,e,i)}function Mg(e,i){$o(2048,8,e,i)}function Vg(e,i){return $o(4,2,e,i)}function kg(e,i){return $o(4,4,e,i)}function Ug(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Pg(e,i,a){a=a!=null?a.concat([e]):null,$o(4,4,Ug.bind(null,i,e),a)}function Nf(){}function xg(e,i){var a=ve();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Ef(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Lg(e,i){var a=ve();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Ef(i,l[1]))return l[0];if(l=e(),Ds){cn(!0);try{e()}finally{cn(!1)}}return a.memoizedState=[l,i],l}function Mf(e,i,a){return a===void 0||(hr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=j_(),Rt.lanes|=e,yr|=e,a)}function zg(e,i,a,l){return fn(a,i)?a:Sa.current!==null?(e=Mf(e,a,l),fn(e,i)||(Me=!0),e):(hr&42)===0?(Me=!0,e.memoizedState=a):(e=j_(),Rt.lanes|=e,yr|=e,i)}function Bg(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=F.T,T={};F.T=T,Uf(e,!1,i,a);try{var w=h(),z=F.S;if(z!==null&&z(T,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var G=PA(w,l);Wo(e,i,G,_n(e))}else Wo(e,i,l,_n(e))}catch(Q){Wo(e,i,{then:function(){},status:"rejected",reason:Q},_n())}finally{nt.p=d,F.T=v}}function jA(){}function Vf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=jg(e).queue;Bg(e,h,i,ut,a===null?jA:function(){return qg(e),a(l)})}function jg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:ut},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function qg(e){var i=jg(e).next.queue;Wo(e,i,{},_n())}function kf(){return Ke(pl)}function Hg(){return ve().memoizedState}function Fg(){return ve().memoizedState}function qA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=_n();e=ur(a);var l=cr(i,e,a);l!==null&&(yn(l,i,a),Go(l,i,a)),i={cache:cf()},e.payload=i;return}i=i.return}}function HA(e,i,a){var l=_n();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Gu(e)?Kg(i,a):(a=Jh(e,i,a,l),a!==null&&(yn(a,e,l),Qg(a,i,l)))}function Gg(e,i,a){var l=_n();Wo(e,i,a,l)}function Wo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gu(e))Kg(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,fn(T,v))return Cu(e,i,h,0),Jt===null&&Iu(),!1}catch{}finally{}if(a=Jh(e,i,h,l),a!==null)return yn(a,e,l),Qg(a,i,l),!0}return!1}function Uf(e,i,a,l){if(l={lane:2,revertLane:dd(),action:l,hasEagerState:!1,eagerState:null,next:null},Gu(e)){if(i)throw Error(s(479))}else i=Jh(e,a,l,2),i!==null&&yn(i,e,2)}function Gu(e){var i=e.alternate;return e===Rt||i!==null&&i===Rt}function Kg(e,i){ba=zu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Qg(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,vo(e,a)}}var Ku={readContext:Ke,use:ju,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de},Yg={readContext:Ke,use:ju,useCallback:function(e,i){return sn().memoizedState=[e,i===void 0?null:i],e},useContext:Ke,useEffect:Ng,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Fu(4194308,4,Ug.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Fu(4194308,4,e,i)},useInsertionEffect:function(e,i){Fu(4,2,e,i)},useMemo:function(e,i){var a=sn();i=i===void 0?null:i;var l=e();if(Ds){cn(!0);try{e()}finally{cn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=sn();if(a!==void 0){var h=a(i);if(Ds){cn(!0);try{a(i)}finally{cn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=HA.bind(null,Rt,e),[l.memoizedState,e]},useRef:function(e){var i=sn();return e={current:e},i.memoizedState=e},useState:function(e){e=Df(e);var i=e.queue,a=Gg.bind(null,Rt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Nf,useDeferredValue:function(e,i){var a=sn();return Mf(a,e,i)},useTransition:function(){var e=Df(!1);return e=Bg.bind(null,Rt,e.queue,!0,!1),sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Rt,h=sn();if(Bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Jt===null)throw Error(s(349));(Pt&124)!==0||pg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Ng(_g.bind(null,l,d,e),[e]),l.flags|=2048,Ra(9,Hu(),gg.bind(null,l,d,a,i),null),a},useId:function(){var e=sn(),i=Jt.identifierPrefix;if(Bt){var a=ki,l=Vi;a=(l&~(1<<32-Ge(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Bu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=xA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:kf,useFormState:Rg,useActionState:Rg,useOptimistic:function(e){var i=sn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Uf.bind(null,Rt,!0,a),a.dispatch=i,[e,i]},useMemoCache:Rf,useCacheRefresh:function(){return sn().memoizedState=qA.bind(null,Rt)}},Xg={readContext:Ke,use:ju,useCallback:xg,useContext:Ke,useEffect:Mg,useImperativeHandle:Pg,useInsertionEffect:Vg,useLayoutEffect:kg,useMemo:Lg,useReducer:qu,useRef:Og,useState:function(){return qu(xi)},useDebugValue:Nf,useDeferredValue:function(e,i){var a=ve();return zg(a,Qt.memoizedState,e,i)},useTransition:function(){var e=qu(xi)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:Xo(e),i]},useSyncExternalStore:mg,useId:Hg,useHostTransitionStatus:kf,useFormState:Ig,useActionState:Ig,useOptimistic:function(e,i){var a=ve();return Eg(a,Qt,e,i)},useMemoCache:Rf,useCacheRefresh:Fg},FA={readContext:Ke,use:ju,useCallback:xg,useContext:Ke,useEffect:Mg,useImperativeHandle:Pg,useInsertionEffect:Vg,useLayoutEffect:kg,useMemo:Lg,useReducer:Cf,useRef:Og,useState:function(){return Cf(xi)},useDebugValue:Nf,useDeferredValue:function(e,i){var a=ve();return Qt===null?Mf(a,e,i):zg(a,Qt.memoizedState,e,i)},useTransition:function(){var e=Cf(xi)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:Xo(e),i]},useSyncExternalStore:mg,useId:Hg,useHostTransitionStatus:kf,useFormState:Dg,useActionState:Dg,useOptimistic:function(e,i){var a=ve();return Qt!==null?Eg(a,Qt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:Fg},Ia=null,Zo=0;function Qu(e){var i=Zo;return Zo+=1,Ia===null&&(Ia=[]),ag(Ia,e,i)}function Jo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Yu(e,i){throw i.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function $g(e){var i=e._init;return i(e._payload)}function Wg(e){function i(k,D){if(e){var x=k.deletions;x===null?(k.deletions=[D],k.flags|=16):x.push(D)}}function a(k,D){if(!e)return null;for(;D!==null;)i(k,D),D=D.sibling;return null}function l(k){for(var D=new Map;k!==null;)k.key!==null?D.set(k.key,k):D.set(k.index,k),k=k.sibling;return D}function h(k,D){return k=Mi(k,D),k.index=0,k.sibling=null,k}function d(k,D,x){return k.index=x,e?(x=k.alternate,x!==null?(x=x.index,x<D?(k.flags|=67108866,D):x):(k.flags|=67108866,D)):(k.flags|=1048576,D)}function v(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function T(k,D,x,K){return D===null||D.tag!==6?(D=ef(x,k.mode,K),D.return=k,D):(D=h(D,x),D.return=k,D)}function w(k,D,x,K){var at=x.type;return at===H?G(k,D,x.props.children,K,x.key):D!==null&&(D.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===S&&$g(at)===D.type)?(D=h(D,x.props),Jo(D,x),D.return=k,D):(D=Ou(x.type,x.key,x.props,null,k.mode,K),Jo(D,x),D.return=k,D)}function z(k,D,x,K){return D===null||D.tag!==4||D.stateNode.containerInfo!==x.containerInfo||D.stateNode.implementation!==x.implementation?(D=nf(x,k.mode,K),D.return=k,D):(D=h(D,x.children||[]),D.return=k,D)}function G(k,D,x,K,at){return D===null||D.tag!==7?(D=Ts(x,k.mode,K,at),D.return=k,D):(D=h(D,x),D.return=k,D)}function Q(k,D,x){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=ef(""+D,k.mode,x),D.return=k,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case O:return x=Ou(D.type,D.key,D.props,null,k.mode,x),Jo(x,D),x.return=k,x;case L:return D=nf(D,k.mode,x),D.return=k,D;case S:var K=D._init;return D=K(D._payload),Q(k,D,x)}if(ae(D)||U(D))return D=Ts(D,k.mode,x,null),D.return=k,D;if(typeof D.then=="function")return Q(k,Qu(D),x);if(D.$$typeof===ot)return Q(k,ku(k,D),x);Yu(k,D)}return null}function B(k,D,x,K){var at=D!==null?D.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return at!==null?null:T(k,D,""+x,K);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case O:return x.key===at?w(k,D,x,K):null;case L:return x.key===at?z(k,D,x,K):null;case S:return at=x._init,x=at(x._payload),B(k,D,x,K)}if(ae(x)||U(x))return at!==null?null:G(k,D,x,K,null);if(typeof x.then=="function")return B(k,D,Qu(x),K);if(x.$$typeof===ot)return B(k,D,ku(k,x),K);Yu(k,x)}return null}function j(k,D,x,K,at){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return k=k.get(x)||null,T(D,k,""+K,at);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case O:return k=k.get(K.key===null?x:K.key)||null,w(D,k,K,at);case L:return k=k.get(K.key===null?x:K.key)||null,z(D,k,K,at);case S:var Dt=K._init;return K=Dt(K._payload),j(k,D,x,K,at)}if(ae(K)||U(K))return k=k.get(x)||null,G(D,k,K,at,null);if(typeof K.then=="function")return j(k,D,x,Qu(K),at);if(K.$$typeof===ot)return j(k,D,x,ku(D,K),at);Yu(D,K)}return null}function yt(k,D,x,K){for(var at=null,Dt=null,lt=D,pt=D=0,ke=null;lt!==null&&pt<x.length;pt++){lt.index>pt?(ke=lt,lt=null):ke=lt.sibling;var Lt=B(k,lt,x[pt],K);if(Lt===null){lt===null&&(lt=ke);break}e&&lt&&Lt.alternate===null&&i(k,lt),D=d(Lt,D,pt),Dt===null?at=Lt:Dt.sibling=Lt,Dt=Lt,lt=ke}if(pt===x.length)return a(k,lt),Bt&&Ss(k,pt),at;if(lt===null){for(;pt<x.length;pt++)lt=Q(k,x[pt],K),lt!==null&&(D=d(lt,D,pt),Dt===null?at=lt:Dt.sibling=lt,Dt=lt);return Bt&&Ss(k,pt),at}for(lt=l(lt);pt<x.length;pt++)ke=j(lt,k,pt,x[pt],K),ke!==null&&(e&&ke.alternate!==null&&lt.delete(ke.key===null?pt:ke.key),D=d(ke,D,pt),Dt===null?at=ke:Dt.sibling=ke,Dt=ke);return e&&lt.forEach(function(Ir){return i(k,Ir)}),Bt&&Ss(k,pt),at}function ft(k,D,x,K){if(x==null)throw Error(s(151));for(var at=null,Dt=null,lt=D,pt=D=0,ke=null,Lt=x.next();lt!==null&&!Lt.done;pt++,Lt=x.next()){lt.index>pt?(ke=lt,lt=null):ke=lt.sibling;var Ir=B(k,lt,Lt.value,K);if(Ir===null){lt===null&&(lt=ke);break}e&&lt&&Ir.alternate===null&&i(k,lt),D=d(Ir,D,pt),Dt===null?at=Ir:Dt.sibling=Ir,Dt=Ir,lt=ke}if(Lt.done)return a(k,lt),Bt&&Ss(k,pt),at;if(lt===null){for(;!Lt.done;pt++,Lt=x.next())Lt=Q(k,Lt.value,K),Lt!==null&&(D=d(Lt,D,pt),Dt===null?at=Lt:Dt.sibling=Lt,Dt=Lt);return Bt&&Ss(k,pt),at}for(lt=l(lt);!Lt.done;pt++,Lt=x.next())Lt=j(lt,k,pt,Lt.value,K),Lt!==null&&(e&&Lt.alternate!==null&&lt.delete(Lt.key===null?pt:Lt.key),D=d(Lt,D,pt),Dt===null?at=Lt:Dt.sibling=Lt,Dt=Lt);return e&&lt.forEach(function(GS){return i(k,GS)}),Bt&&Ss(k,pt),at}function Xt(k,D,x,K){if(typeof x=="object"&&x!==null&&x.type===H&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case O:t:{for(var at=x.key;D!==null;){if(D.key===at){if(at=x.type,at===H){if(D.tag===7){a(k,D.sibling),K=h(D,x.props.children),K.return=k,k=K;break t}}else if(D.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===S&&$g(at)===D.type){a(k,D.sibling),K=h(D,x.props),Jo(K,x),K.return=k,k=K;break t}a(k,D);break}else i(k,D);D=D.sibling}x.type===H?(K=Ts(x.props.children,k.mode,K,x.key),K.return=k,k=K):(K=Ou(x.type,x.key,x.props,null,k.mode,K),Jo(K,x),K.return=k,k=K)}return v(k);case L:t:{for(at=x.key;D!==null;){if(D.key===at)if(D.tag===4&&D.stateNode.containerInfo===x.containerInfo&&D.stateNode.implementation===x.implementation){a(k,D.sibling),K=h(D,x.children||[]),K.return=k,k=K;break t}else{a(k,D);break}else i(k,D);D=D.sibling}K=nf(x,k.mode,K),K.return=k,k=K}return v(k);case S:return at=x._init,x=at(x._payload),Xt(k,D,x,K)}if(ae(x))return yt(k,D,x,K);if(U(x)){if(at=U(x),typeof at!="function")throw Error(s(150));return x=at.call(x),ft(k,D,x,K)}if(typeof x.then=="function")return Xt(k,D,Qu(x),K);if(x.$$typeof===ot)return Xt(k,D,ku(k,x),K);Yu(k,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,D!==null&&D.tag===6?(a(k,D.sibling),K=h(D,x),K.return=k,k=K):(a(k,D),K=ef(x,k.mode,K),K.return=k,k=K),v(k)):a(k,D)}return function(k,D,x,K){try{Zo=0;var at=Xt(k,D,x,K);return Ia=null,at}catch(lt){if(lt===Ho||lt===Pu)throw lt;var Dt=dn(29,lt,null,k.mode);return Dt.lanes=K,Dt.return=k,Dt}finally{}}}var Ca=Wg(!0),Zg=Wg(!1),Mn=W(null),ai=null;function fr(e){var i=e.alternate;J(Ie,Ie.current&1),J(Mn,e),ai===null&&(i===null||Sa.current!==null||i.memoizedState!==null)&&(ai=e)}function Jg(e){if(e.tag===22){if(J(Ie,Ie.current),J(Mn,e),ai===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ai=e)}}else dr()}function dr(){J(Ie,Ie.current),J(Mn,Mn.current)}function Li(e){it(Mn),ai===e&&(ai=null),it(Ie)}var Ie=W(0);function Xu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||wd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Pf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var xf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=_n(),h=ur(l);h.payload=i,a!=null&&(h.callback=a),i=cr(e,h,l),i!==null&&(yn(i,e,l),Go(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=_n(),h=ur(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=cr(e,h,l),i!==null&&(yn(i,e,l),Go(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=_n(),l=ur(a);l.tag=2,i!=null&&(l.callback=i),i=cr(e,l,a),i!==null&&(yn(i,e,a),Go(i,e,a))}};function t_(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Uo(a,l)||!Uo(h,d):!0}function e_(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&xf.enqueueReplaceState(i,i.state,null)}function Os(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=E({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var $u=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function n_(e){$u(e)}function i_(e){console.error(e)}function r_(e){$u(e)}function Wu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function s_(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Lf(e,i,a){return a=ur(a),a.tag=3,a.payload={element:null},a.callback=function(){Wu(e,i)},a}function a_(e){return e=ur(e),e.tag=3,e}function o_(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){s_(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){s_(i,a,l),typeof h!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function GA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Bo(i,a,h,!0),a=Mn.current,a!==null){switch(a.tag){case 13:return ai===null?ld():a.alternate===null&&ue===0&&(ue=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===df?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),cd(e,l,h)),!1;case 22:return a.flags|=65536,l===df?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),cd(e,l,h)),!1}throw Error(s(435,a.tag))}return cd(e,l,h),ld(),!1}if(Bt)return i=Mn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==af&&(e=Error(s(422),{cause:l}),zo(Cn(e,a)))):(l!==af&&(i=Error(s(423),{cause:l}),zo(Cn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Cn(l,a),h=Lf(e.stateNode,l,h),gf(e,h),ue!==4&&(ue=2)),!1;var d=Error(s(520),{cause:l});if(d=Cn(d,a),al===null?al=[d]:al.push(d),ue!==4&&(ue=2),i===null)return!0;l=Cn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Lf(a.stateNode,l,e),gf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(vr===null||!vr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=a_(h),o_(h,e,a,l),gf(a,h),!1}a=a.return}while(a!==null);return!1}var l_=Error(s(461)),Me=!1;function ze(e,i,a,l){i.child=e===null?Zg(i,null,a,l):Ca(i,e.child,a,l)}function u_(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Is(i),l=Tf(e,i,a,v,d,h),T=Af(),e!==null&&!Me?(Sf(e,i,h),zi(e,i,h)):(Bt&&T&&rf(i),i.flags|=1,ze(e,i,l,h),i.child)}function c_(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!tf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,h_(e,i,d,l,h)):(e=Ou(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Kf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Uo,a(v,l)&&e.ref===i.ref)return zi(e,i,h)}return i.flags|=1,e=Mi(d,l),e.ref=i.ref,e.return=i,i.child=e}function h_(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Uo(d,l)&&e.ref===i.ref)if(Me=!1,i.pendingProps=l=d,Kf(e,h))(e.flags&131072)!==0&&(Me=!0);else return i.lanes=e.lanes,zi(e,i,h)}return zf(e,i,a,l,h)}function f_(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return d_(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Uu(i,d!==null?d.cachePool:null),d!==null?hg(i,d):yf(),Jg(i);else return i.lanes=i.childLanes=536870912,d_(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Uu(i,d.cachePool),hg(i,d),dr(),i.memoizedState=null):(e!==null&&Uu(i,null),yf(),dr());return ze(e,i,h,a),i.child}function d_(e,i,a,l){var h=ff();return h=h===null?null:{parent:Re._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Uu(i,null),yf(),Jg(i),e!==null&&Bo(e,i,l,!0),null}function Zu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function zf(e,i,a,l,h){return Is(i),a=Tf(e,i,a,l,void 0,h),l=Af(),e!==null&&!Me?(Sf(e,i,h),zi(e,i,h)):(Bt&&l&&rf(i),i.flags|=1,ze(e,i,a,h),i.child)}function m_(e,i,a,l,h,d){return Is(i),i.updateQueue=null,a=dg(i,l,a,h),fg(e),l=Af(),e!==null&&!Me?(Sf(e,i,d),zi(e,i,d)):(Bt&&l&&rf(i),i.flags|=1,ze(e,i,a,d),i.child)}function p_(e,i,a,l,h){if(Is(i),i.stateNode===null){var d=ya,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ke(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},mf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ke(v):ya,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Pf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&xf.enqueueReplaceState(d,d.state,null),Qo(i,l,d,h),Ko(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,w=Os(a,T);d.props=w;var z=d.context,G=a.contextType;v=ya,typeof G=="object"&&G!==null&&(v=Ke(G));var Q=a.getDerivedStateFromProps;G=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||z!==v)&&e_(i,d,l,v),lr=!1;var B=i.memoizedState;d.state=B,Qo(i,l,d,h),Ko(),z=i.memoizedState,T||B!==z||lr?(typeof Q=="function"&&(Pf(i,a,Q,l),z=i.memoizedState),(w=lr||t_(i,a,w,l,B,z,v))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),d.props=l,d.state=z,d.context=v,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,pf(e,i),v=i.memoizedProps,G=Os(a,v),d.props=G,Q=i.pendingProps,B=d.context,z=a.contextType,w=ya,typeof z=="object"&&z!==null&&(w=Ke(z)),T=a.getDerivedStateFromProps,(z=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Q||B!==w)&&e_(i,d,l,w),lr=!1,B=i.memoizedState,d.state=B,Qo(i,l,d,h),Ko();var j=i.memoizedState;v!==Q||B!==j||lr||e!==null&&e.dependencies!==null&&Vu(e.dependencies)?(typeof T=="function"&&(Pf(i,a,T,l),j=i.memoizedState),(G=lr||t_(i,a,G,l,B,j,w)||e!==null&&e.dependencies!==null&&Vu(e.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,j,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,j,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=w,l=G):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Zu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ca(i,e.child,null,h),i.child=Ca(i,null,a,h)):ze(e,i,a,h),i.memoizedState=d.state,e=i.child):e=zi(e,i,h),e}function g_(e,i,a,l){return Lo(),i.flags|=256,ze(e,i,a,l),i.child}var Bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(e){return{baseLanes:e,cachePool:ig()}}function qf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Vn),e}function __(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Bt){if(h?fr(i):dr(),Bt){var T=le,w;if(w=T){t:{for(w=T,T=si;w.nodeType!==8;){if(!T){T=null;break t}if(w=jn(w.nextSibling),w===null){T=null;break t}}T=w}T!==null?(i.memoizedState={dehydrated:T,treeContext:As!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},w=dn(18,null,null,0),w.stateNode=T,w.return=i,i.child=w,en=i,le=null,w=!0):w=!1}w||ws(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return wd(T)?i.lanes=32:i.lanes=536870912,null;Li(i)}return T=l.children,l=l.fallback,h?(dr(),h=i.mode,T=Ju({mode:"hidden",children:T},h),l=Ts(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=jf(a),h.childLanes=qf(e,v,a),i.memoizedState=Bf,l):(fr(i),Hf(i,T))}if(w=e.memoizedState,w!==null&&(T=w.dehydrated,T!==null)){if(d)i.flags&256?(fr(i),i.flags&=-257,i=Ff(e,i,a)):i.memoizedState!==null?(dr(),i.child=e.child,i.flags|=128,i=null):(dr(),h=l.fallback,T=i.mode,l=Ju({mode:"visible",children:l.children},T),h=Ts(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ca(i,e.child,null,a),l=i.child,l.memoizedState=jf(a),l.childLanes=qf(e,v,a),i.memoizedState=Bf,i=h);else if(fr(i),wd(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var z=v.dgst;v=z,l=Error(s(419)),l.stack="",l.digest=v,zo({value:l,source:null,stack:null}),i=Ff(e,i,a)}else if(Me||Bo(e,i,a,!1),v=(a&e.childLanes)!==0,Me||v){if(v=Jt,v!==null&&(l=a&-a,l=(l&42)!==0?1:tr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==w.retryLane))throw w.retryLane=l,_a(e,l),yn(v,e,l),l_;T.data==="$?"||ld(),i=Ff(e,i,a)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=w.treeContext,le=jn(T.nextSibling),en=i,Bt=!0,bs=null,si=!1,e!==null&&(On[Nn++]=Vi,On[Nn++]=ki,On[Nn++]=As,Vi=e.id,ki=e.overflow,As=i),i=Hf(i,l.children),i.flags|=4096);return i}return h?(dr(),h=l.fallback,T=i.mode,w=e.child,z=w.sibling,l=Mi(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,z!==null?h=Mi(z,h):(h=Ts(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=jf(a):(w=T.cachePool,w!==null?(z=Re._currentValue,w=w.parent!==z?{parent:z,pool:z}:w):w=ig(),T={baseLanes:T.baseLanes|a,cachePool:w}),h.memoizedState=T,h.childLanes=qf(e,v,a),i.memoizedState=Bf,l):(fr(i),a=e.child,e=a.sibling,a=Mi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Hf(e,i){return i=Ju({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Ju(e,i){return e=dn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ff(e,i,a){return Ca(i,e.child,null,a),e=Hf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function y_(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),lf(e.return,i,a)}function Gf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function v_(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(ze(e,i,l.children,a),l=Ie.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&y_(e,a,i);else if(e.tag===19)y_(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(J(Ie,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Xu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Gf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Xu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Gf(i,!0,a,null,d);break;case"together":Gf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),yr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Bo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Mi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Mi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Kf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Vu(e)))}function KA(e,i,a){switch(i.tag){case 3:Zt(i,i.stateNode.containerInfo),or(i,Re,e.memoizedState.cache),Lo();break;case 27:case 5:Ji(i);break;case 4:Zt(i,i.stateNode.containerInfo);break;case 10:or(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(fr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?__(e,i,a):(fr(i),e=zi(e,i,a),e!==null?e.sibling:null);fr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Bo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return v_(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),J(Ie,Ie.current),l)break;return null;case 22:case 23:return i.lanes=0,f_(e,i,a);case 24:or(i,Re,e.memoizedState.cache)}return zi(e,i,a)}function E_(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Me=!0;else{if(!Kf(e,a)&&(i.flags&128)===0)return Me=!1,KA(e,i,a);Me=(e.flags&131072)!==0}else Me=!1,Bt&&(i.flags&1048576)!==0&&$p(i,Mu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")tf(l)?(e=Os(l,e),i.tag=1,i=p_(null,i,l,e,a)):(i.tag=0,i=zf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===_t){i.tag=11,i=u_(null,i,l,e,a);break t}else if(h===M){i.tag=14,i=c_(null,i,l,e,a);break t}}throw i=Pe(l)||l,Error(s(306,i,""))}}return i;case 0:return zf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Os(l,i.pendingProps),p_(e,i,l,h,a);case 3:t:{if(Zt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,pf(e,i),Qo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,or(i,Re,l),l!==d.cache&&uf(i,[Re],a,!0),Ko(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=g_(e,i,l,a);break t}else if(l!==h){h=Cn(Error(s(424)),i),zo(h),i=g_(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(le=jn(e.firstChild),en=i,Bt=!0,bs=null,si=!0,a=Zg(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Lo(),l===h){i=zi(e,i,a);break t}ze(e,i,l,a)}i=i.child}return i;case 26:return Zu(e,i),e===null?(a=by(i.type,null,i.pendingProps,null))?i.memoizedState=a:Bt||(a=i.type,e=i.pendingProps,l=dc(Tt.current).createElement(a),l[Se]=i,l[ge]=e,je(l,a,e),fe(l),i.stateNode=l):i.memoizedState=by(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ji(i),e===null&&Bt&&(l=i.stateNode=Ty(i.type,i.pendingProps,Tt.current),en=i,si=!0,h=le,Ar(i.type)?(Rd=h,le=jn(l.firstChild)):le=h),ze(e,i,i.pendingProps.children,a),Zu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Bt&&((h=l=le)&&(l=ES(l,i.type,i.pendingProps,si),l!==null?(i.stateNode=l,en=i,le=jn(l.firstChild),si=!1,h=!0):h=!1),h||ws(i)),Ji(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,Ad(h,d)?l=null:v!==null&&Ad(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Tf(e,i,LA,null,null,a),pl._currentValue=h),Zu(e,i),ze(e,i,l,a),i.child;case 6:return e===null&&Bt&&((e=a=le)&&(a=TS(a,i.pendingProps,si),a!==null?(i.stateNode=a,en=i,le=null,e=!0):e=!1),e||ws(i)),null;case 13:return __(e,i,a);case 4:return Zt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ca(i,null,l,a):ze(e,i,l,a),i.child;case 11:return u_(e,i,i.type,i.pendingProps,a);case 7:return ze(e,i,i.pendingProps,a),i.child;case 8:return ze(e,i,i.pendingProps.children,a),i.child;case 12:return ze(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,or(i,i.type,l.value),ze(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Is(i),h=Ke(h),l=l(h),i.flags|=1,ze(e,i,l,a),i.child;case 14:return c_(e,i,i.type,i.pendingProps,a);case 15:return h_(e,i,i.type,i.pendingProps,a);case 19:return v_(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=Ju(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Mi(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return f_(e,i,a);case 24:return Is(i),l=Ke(Re),e===null?(h=ff(),h===null&&(h=Jt,d=cf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},mf(i),or(i,Re,h)):((e.lanes&a)!==0&&(pf(e,i),Qo(i,null,null,a),Ko()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),or(i,Re,l)):(l=d.cache,or(i,Re,l),l!==h.cache&&uf(i,[Re],a,!0))),ze(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Bi(e){e.flags|=4}function T_(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dy(i)){if(i=Mn.current,i!==null&&((Pt&4194048)===Pt?ai!==null:(Pt&62914560)!==Pt&&(Pt&536870912)===0||i!==ai))throw Fo=df,rg;e.flags|=8192}}function tc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?_o():536870912,e.lanes|=i,Ma|=i)}function tl(e,i){if(!Bt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ie(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function QA(e,i,a){var l=i.pendingProps;switch(sf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(i),null;case 1:return ie(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Pi(Re),Qn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(xo(i)?Bi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jp())),ie(i),null;case 26:return a=i.memoizedState,e===null?(Bi(i),a!==null?(ie(i),T_(i,a)):(ie(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Bi(i),ie(i),T_(i,a)):(ie(i),i.flags&=-16777217):(e.memoizedProps!==l&&Bi(i),ie(i),i.flags&=-16777217),null;case 27:vi(i),a=Tt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Bi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ie(i),null}e=ht.current,xo(i)?Wp(i):(e=Ty(h,l,a),i.stateNode=e,Bi(i))}return ie(i),null;case 5:if(vi(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Bi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ie(i),null}if(e=ht.current,xo(i))Wp(i);else{switch(h=dc(Tt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[Se]=i,e[ge]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(je(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Bi(i)}}return ie(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Bi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=Tt.current,xo(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=en,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Se]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||my(e.nodeValue,a)),e||ws(i)}else e=dc(e).createTextNode(l),e[Se]=i,i.stateNode=e}return ie(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=xo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Se]=i}else Lo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ie(i),h=!1}else h=Jp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Li(i),i):(Li(i),null)}if(Li(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),tc(i,i.updateQueue),ie(i),null;case 4:return Qn(),e===null&&_d(i.stateNode.containerInfo),ie(i),null;case 10:return Pi(i.type),ie(i),null;case 19:if(it(Ie),h=i.memoizedState,h===null)return ie(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)tl(h,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Xu(e),d!==null){for(i.flags|=128,tl(h,!1),e=d.updateQueue,i.updateQueue=e,tc(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Xp(a,e),a=a.sibling;return J(Ie,Ie.current&1|2),i.child}e=e.sibling}h.tail!==null&&An()>ic&&(i.flags|=128,l=!0,tl(h,!1),i.lanes=4194304)}else{if(!l)if(e=Xu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,tc(i,e),tl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Bt)return ie(i),null}else 2*An()-h.renderingStartTime>ic&&a!==536870912&&(i.flags|=128,l=!0,tl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=An(),i.sibling=null,e=Ie.current,J(Ie,l?e&1|2:e&1),i):(ie(i),null);case 22:case 23:return Li(i),vf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ie(i),i.subtreeFlags&6&&(i.flags|=8192)):ie(i),a=i.updateQueue,a!==null&&tc(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&it(Cs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Pi(Re),ie(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function YA(e,i){switch(sf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Pi(Re),Qn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return vi(i),null;case 13:if(Li(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Lo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return it(Ie),null;case 4:return Qn(),null;case 10:return Pi(i.type),null;case 22:case 23:return Li(i),vf(),e!==null&&it(Cs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Pi(Re),null;case 25:return null;default:return null}}function A_(e,i){switch(sf(i),i.tag){case 3:Pi(Re),Qn();break;case 26:case 27:case 5:vi(i);break;case 4:Qn();break;case 13:Li(i);break;case 19:it(Ie);break;case 10:Pi(i.type);break;case 22:case 23:Li(i),vf(),e!==null&&it(Cs);break;case 24:Pi(Re)}}function el(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){$t(i,i.return,T)}}function mr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var w=a,z=T;try{z()}catch(G){$t(h,w,G)}}}l=l.next}while(l!==d)}}catch(G){$t(i,i.return,G)}}function S_(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{cg(i,a)}catch(l){$t(e,e.return,l)}}}function b_(e,i,a){a.props=Os(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){$t(e,i,l)}}function nl(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){$t(e,i,h)}}function oi(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){$t(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){$t(e,i,h)}else a.current=null}function w_(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){$t(e,e.return,h)}}function Qf(e,i,a){try{var l=e.stateNode;pS(l,e.type,a,i),l[ge]=i}catch(h){$t(e,e.return,h)}}function R_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ar(e.type)||e.tag===4}function Yf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||R_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ar(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=fc));else if(l!==4&&(l===27&&Ar(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Xf(e,i,a),e=e.sibling;e!==null;)Xf(e,i,a),e=e.sibling}function ec(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Ar(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ec(e,i,a),e=e.sibling;e!==null;)ec(e,i,a),e=e.sibling}function I_(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);je(i,l,a),i[Se]=e,i[ge]=a}catch(d){$t(e,e.return,d)}}var ji=!1,me=!1,$f=!1,C_=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function XA(e,i){if(e=e.containerInfo,Ed=vc,e=zp(e),Qh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,w=-1,z=0,G=0,Q=e,B=null;e:for(;;){for(var j;Q!==a||h!==0&&Q.nodeType!==3||(T=v+h),Q!==d||l!==0&&Q.nodeType!==3||(w=v+l),Q.nodeType===3&&(v+=Q.nodeValue.length),(j=Q.firstChild)!==null;)B=Q,Q=j;for(;;){if(Q===e)break e;if(B===a&&++z===h&&(T=v),B===d&&++G===l&&(w=v),(j=Q.nextSibling)!==null)break;Q=B,B=Q.parentNode}Q=j}a=T===-1||w===-1?null:{start:T,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(Td={focusedElem:e,selectionRange:a},vc=!1,Ve=i;Ve!==null;)if(i=Ve,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Ve=e;else for(;Ve!==null;){switch(i=Ve,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var yt=Os(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(yt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(ft){$t(a,a.return,ft)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)bd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ve=e;break}Ve=i.return}}function D_(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:pr(e,a),l&4&&el(5,a);break;case 1:if(pr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){$t(a,a.return,v)}else{var h=Os(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){$t(a,a.return,v)}}l&64&&S_(a),l&512&&nl(a,a.return);break;case 3:if(pr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{cg(e,i)}catch(v){$t(a,a.return,v)}}break;case 27:i===null&&l&4&&I_(a);case 26:case 5:pr(e,a),i===null&&l&4&&w_(a),l&512&&nl(a,a.return);break;case 12:pr(e,a);break;case 13:pr(e,a),l&4&&M_(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=rS.bind(null,a),AS(e,a))));break;case 22:if(l=a.memoizedState!==null||ji,!l){i=i!==null&&i.memoizedState!==null||me,h=ji;var d=me;ji=l,(me=i)&&!d?gr(e,a,(a.subtreeFlags&8772)!==0):pr(e,a),ji=h,me=d}break;case 30:break;default:pr(e,a)}}function O_(e){var i=e.alternate;i!==null&&(e.alternate=null,O_(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ir(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ne=null,an=!1;function qi(e,i,a){for(a=a.child;a!==null;)N_(e,i,a),a=a.sibling}function N_(e,i,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(oe,a)}catch{}switch(a.tag){case 26:me||oi(a,i),qi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:me||oi(a,i);var l=ne,h=an;Ar(a.type)&&(ne=a.stateNode,an=!1),qi(e,i,a),hl(a.stateNode),ne=l,an=h;break;case 5:me||oi(a,i);case 6:if(l=ne,h=an,ne=null,qi(e,i,a),ne=l,an=h,ne!==null)if(an)try{(ne.nodeType===9?ne.body:ne.nodeName==="HTML"?ne.ownerDocument.body:ne).removeChild(a.stateNode)}catch(d){$t(a,i,d)}else try{ne.removeChild(a.stateNode)}catch(d){$t(a,i,d)}break;case 18:ne!==null&&(an?(e=ne,vy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vl(e)):vy(ne,a.stateNode));break;case 4:l=ne,h=an,ne=a.stateNode.containerInfo,an=!0,qi(e,i,a),ne=l,an=h;break;case 0:case 11:case 14:case 15:me||mr(2,a,i),me||mr(4,a,i),qi(e,i,a);break;case 1:me||(oi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&b_(a,i,l)),qi(e,i,a);break;case 21:qi(e,i,a);break;case 22:me=(l=me)||a.memoizedState!==null,qi(e,i,a),me=l;break;default:qi(e,i,a)}}function M_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vl(e)}catch(a){$t(i,i.return,a)}}function $A(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new C_),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new C_),i;default:throw Error(s(435,e.tag))}}function Wf(e,i){var a=$A(e);i.forEach(function(l){var h=sS.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function mn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Ar(T.type)){ne=T.stateNode,an=!1;break t}break;case 5:ne=T.stateNode,an=!1;break t;case 3:case 4:ne=T.stateNode.containerInfo,an=!0;break t}T=T.return}if(ne===null)throw Error(s(160));N_(d,v,h),ne=null,an=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)V_(i,e),i=i.sibling}var Bn=null;function V_(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mn(i,e),pn(e),l&4&&(mr(3,e,e.return),el(3,e),mr(5,e,e.return));break;case 1:mn(i,e),pn(e),l&512&&(me||a===null||oi(a,a.return)),l&64&&ji&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Bn;if(mn(i,e),pn(e),l&512&&(me||a===null||oi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ss]||d[Se]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),je(d,l,a),d[Se]=e,fe(d),l=d;break t;case"link":var v=Iy("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=h.createElement(l),je(d,l,a),h.head.appendChild(d);break;case"meta":if(v=Iy("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=h.createElement(l),je(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Se]=e,fe(d),l=d}e.stateNode=l}else Cy(h,e.type,e.stateNode);else e.stateNode=Ry(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Cy(h,e.type,e.stateNode):Ry(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Qf(e,e.memoizedProps,a.memoizedProps)}break;case 27:mn(i,e),pn(e),l&512&&(me||a===null||oi(a,a.return)),a!==null&&l&4&&Qf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(mn(i,e),pn(e),l&512&&(me||a===null||oi(a,a.return)),e.flags&32){h=e.stateNode;try{bn(h,"")}catch(j){$t(e,e.return,j)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Qf(e,h,a!==null?a.memoizedProps:h)),l&1024&&($f=!0);break;case 6:if(mn(i,e),pn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(j){$t(e,e.return,j)}}break;case 3:if(gc=null,h=Bn,Bn=mc(i.containerInfo),mn(i,e),Bn=h,pn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{vl(i.containerInfo)}catch(j){$t(e,e.return,j)}$f&&($f=!1,k_(e));break;case 4:l=Bn,Bn=mc(e.stateNode.containerInfo),mn(i,e),pn(e),Bn=l;break;case 12:mn(i,e),pn(e);break;case 13:mn(i,e),pn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(id=An()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wf(e,l)));break;case 22:h=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,z=ji,G=me;if(ji=z||h,me=G||w,mn(i,e),me=G,ji=z,pn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||ji||me||Ns(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=w.stateNode;var Q=w.memoizedProps.style,B=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;T.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(j){$t(w,w.return,j)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(j){$t(w,w.return,j)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Wf(e,a))));break;case 19:mn(i,e),pn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wf(e,l)));break;case 30:break;case 21:break;default:mn(i,e),pn(e)}}function pn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(R_(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Yf(e);ec(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(bn(v,""),a.flags&=-33);var T=Yf(e);ec(e,T,v);break;case 3:case 4:var w=a.stateNode.containerInfo,z=Yf(e);Xf(e,z,w);break;default:throw Error(s(161))}}catch(G){$t(e,e.return,G)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function k_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;k_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function pr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)D_(e,i.alternate,i),i=i.sibling}function Ns(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:mr(4,i,i.return),Ns(i);break;case 1:oi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&b_(i,i.return,a),Ns(i);break;case 27:hl(i.stateNode);case 26:case 5:oi(i,i.return),Ns(i);break;case 22:i.memoizedState===null&&Ns(i);break;case 30:Ns(i);break;default:Ns(i)}e=e.sibling}}function gr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:gr(h,d,a),el(4,d);break;case 1:if(gr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){$t(l,l.return,z)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)ug(w[h],T)}catch(z){$t(l,l.return,z)}}a&&v&64&&S_(d),nl(d,d.return);break;case 27:I_(d);case 26:case 5:gr(h,d,a),a&&l===null&&v&4&&w_(d),nl(d,d.return);break;case 12:gr(h,d,a);break;case 13:gr(h,d,a),a&&v&4&&M_(h,d);break;case 22:d.memoizedState===null&&gr(h,d,a),nl(d,d.return);break;case 30:break;default:gr(h,d,a)}i=i.sibling}}function Zf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&jo(a))}function Jf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&jo(e))}function li(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)U_(e,i,a,l),i=i.sibling}function U_(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:li(e,i,a,l),h&2048&&el(9,i);break;case 1:li(e,i,a,l);break;case 3:li(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&jo(e)));break;case 12:if(h&2048){li(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){$t(i,i.return,w)}}else li(e,i,a,l);break;case 13:li(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?li(e,i,a,l):il(e,i):d._visibility&2?li(e,i,a,l):(d._visibility|=2,Da(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Zf(v,i);break;case 24:li(e,i,a,l),h&2048&&Jf(i.alternate,i);break;default:li(e,i,a,l)}}function Da(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,T=a,w=l,z=v.flags;switch(v.tag){case 0:case 11:case 15:Da(d,v,T,w,h),el(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&2?Da(d,v,T,w,h):il(d,v):(G._visibility|=2,Da(d,v,T,w,h)),h&&z&2048&&Zf(v.alternate,v);break;case 24:Da(d,v,T,w,h),h&&z&2048&&Jf(v.alternate,v);break;default:Da(d,v,T,w,h)}i=i.sibling}}function il(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:il(a,l),h&2048&&Zf(l.alternate,l);break;case 24:il(a,l),h&2048&&Jf(l.alternate,l);break;default:il(a,l)}i=i.sibling}}var rl=8192;function Oa(e){if(e.subtreeFlags&rl)for(e=e.child;e!==null;)P_(e),e=e.sibling}function P_(e){switch(e.tag){case 26:Oa(e),e.flags&rl&&e.memoizedState!==null&&US(Bn,e.memoizedState,e.memoizedProps);break;case 5:Oa(e);break;case 3:case 4:var i=Bn;Bn=mc(e.stateNode.containerInfo),Oa(e),Bn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=rl,rl=16777216,Oa(e),rl=i):Oa(e));break;default:Oa(e)}}function x_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function sl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ve=l,z_(l,e)}x_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)L_(e),e=e.sibling}function L_(e){switch(e.tag){case 0:case 11:case 15:sl(e),e.flags&2048&&mr(9,e,e.return);break;case 3:sl(e);break;case 12:sl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,nc(e)):sl(e);break;default:sl(e)}}function nc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ve=l,z_(l,e)}x_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:mr(8,i,i.return),nc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,nc(i));break;default:nc(i)}e=e.sibling}}function z_(e,i){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:mr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:jo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ve=l;else t:for(a=e;Ve!==null;){l=Ve;var h=l.sibling,d=l.return;if(O_(l),l===a){Ve=null;break t}if(h!==null){h.return=d,Ve=h;break t}Ve=d}}}var WA={getCacheForType:function(e){var i=Ke(Re),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},ZA=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Jt=null,Ot=null,Pt=0,Gt=0,gn=null,_r=!1,Na=!1,td=!1,Hi=0,ue=0,yr=0,Ms=0,ed=0,Vn=0,Ma=0,al=null,on=null,nd=!1,id=0,ic=1/0,rc=null,vr=null,Be=0,Er=null,Va=null,ka=0,rd=0,sd=null,B_=null,ol=0,ad=null;function _n(){if((Ft&2)!==0&&Pt!==0)return Pt&-Pt;if(F.T!==null){var e=Ta;return e!==0?e:dd()}return er()}function j_(){Vn===0&&(Vn=(Pt&536870912)===0||Bt?go():536870912);var e=Mn.current;return e!==null&&(e.flags|=32),Vn}function yn(e,i,a){(e===Jt&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)&&(Ua(e,0),Tr(e,Pt,Vn,!1)),Ti(e,a),((Ft&2)===0||e!==Jt)&&(e===Jt&&((Ft&2)===0&&(Ms|=a),ue===4&&Tr(e,Pt,Vn,!1)),ui(e))}function q_(e,i,a){if((Ft&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||rs(e,i),h=l?eS(e,i):ud(e,i,!0),d=l;do{if(h===0){Na&&!l&&Tr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!JA(a)){h=ud(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=al;var w=T.current.memoizedState.isDehydrated;if(w&&(Ua(T,v).flags|=256),v=ud(T,v,!1),v!==2){if(td&&!w){T.errorRecoveryDisabledLanes|=d,Ms|=d,h=4;break t}d=on,on=h,d!==null&&(on===null?on=d:on.push.apply(on,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Ua(e,0),Tr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Tr(l,i,Vn,!_r);break t;case 2:on=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=id+300-An(),10<h)){if(Tr(l,i,Vn,!_r),Zs(l,0,!0)!==0)break t;l.timeoutHandle=_y(H_.bind(null,l,a,on,rc,nd,i,Vn,Ms,Ma,_r,d,2,-0,0),h);break t}H_(l,a,on,rc,nd,i,Vn,Ms,Ma,_r,d,0,-0,0)}}break}while(!0);ui(e)}function H_(e,i,a,l,h,d,v,T,w,z,G,Q,B,j){if(e.timeoutHandle=-1,Q=i.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(ml={stylesheets:null,count:0,unsuspend:kS},P_(i),Q=PS(),Q!==null)){e.cancelPendingCommit=Q($_.bind(null,e,i,d,a,l,h,v,T,w,G,1,B,j)),Tr(e,d,v,!z);return}$_(e,i,d,a,l,h,v,T,w)}function JA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!fn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Tr(e,i,a,l){i&=~ed,i&=~Ms,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Ge(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Yn(e,a,i)}function sc(){return(Ft&6)===0?(ll(0),!1):!0}function od(){if(Ot!==null){if(Gt===0)var e=Ot.return;else e=Ot,Ui=Rs=null,bf(e),Ia=null,Zo=0,e=Ot;for(;e!==null;)A_(e.alternate,e),e=e.return;Ot=null}}function Ua(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,_S(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),od(),Jt=e,Ot=a=Mi(e.current,null),Pt=i,Gt=0,gn=null,_r=!1,Na=rs(e,i),td=!1,Ma=Vn=ed=Ms=yr=ue=0,on=al=null,nd=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ge(l),d=1<<h;i|=e[h],l&=~d}return Hi=i,Iu(),a}function F_(e,i){Rt=null,F.H=Ku,i===Ho||i===Pu?(i=og(),Gt=3):i===rg?(i=og(),Gt=4):Gt=i===l_?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,gn=i,Ot===null&&(ue=1,Wu(e,Cn(i,e.current)))}function G_(){var e=F.H;return F.H=Ku,e===null?Ku:e}function K_(){var e=F.A;return F.A=WA,e}function ld(){ue=4,_r||(Pt&4194048)!==Pt&&Mn.current!==null||(Na=!0),(yr&134217727)===0&&(Ms&134217727)===0||Jt===null||Tr(Jt,Pt,Vn,!1)}function ud(e,i,a){var l=Ft;Ft|=2;var h=G_(),d=K_();(Jt!==e||Pt!==i)&&(rc=null,Ua(e,i)),i=!1;var v=ue;t:do try{if(Gt!==0&&Ot!==null){var T=Ot,w=gn;switch(Gt){case 8:od(),v=6;break t;case 3:case 2:case 9:case 6:Mn.current===null&&(i=!0);var z=Gt;if(Gt=0,gn=null,Pa(e,T,w,z),a&&Na){v=0;break t}break;default:z=Gt,Gt=0,gn=null,Pa(e,T,w,z)}}tS(),v=ue;break}catch(G){F_(e,G)}while(!0);return i&&e.shellSuspendCounter++,Ui=Rs=null,Ft=l,F.H=h,F.A=d,Ot===null&&(Jt=null,Pt=0,Iu()),v}function tS(){for(;Ot!==null;)Q_(Ot)}function eS(e,i){var a=Ft;Ft|=2;var l=G_(),h=K_();Jt!==e||Pt!==i?(rc=null,ic=An()+500,Ua(e,i)):Na=rs(e,i);t:do try{if(Gt!==0&&Ot!==null){i=Ot;var d=gn;e:switch(Gt){case 1:Gt=0,gn=null,Pa(e,i,d,1);break;case 2:case 9:if(sg(d)){Gt=0,gn=null,Y_(i);break}i=function(){Gt!==2&&Gt!==9||Jt!==e||(Gt=7),ui(e)},d.then(i,i);break t;case 3:Gt=7;break t;case 4:Gt=5;break t;case 7:sg(d)?(Gt=0,gn=null,Y_(i)):(Gt=0,gn=null,Pa(e,i,d,7));break;case 5:var v=null;switch(Ot.tag){case 26:v=Ot.memoizedState;case 5:case 27:var T=Ot;if(!v||Dy(v)){Gt=0,gn=null;var w=T.sibling;if(w!==null)Ot=w;else{var z=T.return;z!==null?(Ot=z,ac(z)):Ot=null}break e}}Gt=0,gn=null,Pa(e,i,d,5);break;case 6:Gt=0,gn=null,Pa(e,i,d,6);break;case 8:od(),ue=6;break t;default:throw Error(s(462))}}nS();break}catch(G){F_(e,G)}while(!0);return Ui=Rs=null,F.H=l,F.A=h,Ft=a,Ot!==null?0:(Jt=null,Pt=0,Iu(),ue)}function nS(){for(;Ot!==null&&!ho();)Q_(Ot)}function Q_(e){var i=E_(e.alternate,e,Hi);e.memoizedProps=e.pendingProps,i===null?ac(e):Ot=i}function Y_(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=m_(a,i,i.pendingProps,i.type,void 0,Pt);break;case 11:i=m_(a,i,i.pendingProps,i.type.render,i.ref,Pt);break;case 5:bf(i);default:A_(a,i),i=Ot=Xp(i,Hi),i=E_(a,i,Hi)}e.memoizedProps=e.pendingProps,i===null?ac(e):Ot=i}function Pa(e,i,a,l){Ui=Rs=null,bf(i),Ia=null,Zo=0;var h=i.return;try{if(GA(e,h,i,a,Pt)){ue=1,Wu(e,Cn(a,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;ue=1,Wu(e,Cn(a,e.current)),Ot=null;return}i.flags&32768?(Bt||l===1?e=!0:Na||(Pt&536870912)!==0?e=!1:(_r=e=!0,(l===2||l===9||l===3||l===6)&&(l=Mn.current,l!==null&&l.tag===13&&(l.flags|=16384))),X_(i,e)):ac(i)}function ac(e){var i=e;do{if((i.flags&32768)!==0){X_(i,_r);return}e=i.return;var a=QA(i.alternate,i,Hi);if(a!==null){Ot=a;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);ue===0&&(ue=5)}function X_(e,i){do{var a=YA(e.alternate,e);if(a!==null){a.flags&=32767,Ot=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=a}while(e!==null);ue=6,Ot=null}function $_(e,i,a,l,h,d,v,T,w){e.cancelPendingCommit=null;do oc();while(Be!==0);if((Ft&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Zh,yo(e,a,d,v,T,w),e===Jt&&(Ot=Jt=null,Pt=0),Va=i,Er=e,ka=a,rd=d,sd=h,B_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,aS(ts,function(){return ey(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=nt.p,nt.p=2,v=Ft,Ft|=4;try{XA(e,i,a)}finally{Ft=v,nt.p=h,F.T=l}}Be=1,W_(),Z_(),J_()}}function W_(){if(Be===1){Be=0;var e=Er,i=Va,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=nt.p;nt.p=2;var h=Ft;Ft|=4;try{V_(i,e);var d=Td,v=zp(e.containerInfo),T=d.focusedElem,w=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&Lp(T.ownerDocument.documentElement,T)){if(w!==null&&Qh(T)){var z=w.start,G=w.end;if(G===void 0&&(G=z),"selectionStart"in T)T.selectionStart=z,T.selectionEnd=Math.min(G,T.value.length);else{var Q=T.ownerDocument||document,B=Q&&Q.defaultView||window;if(B.getSelection){var j=B.getSelection(),yt=T.textContent.length,ft=Math.min(w.start,yt),Xt=w.end===void 0?ft:Math.min(w.end,yt);!j.extend&&ft>Xt&&(v=Xt,Xt=ft,ft=v);var k=xp(T,ft),D=xp(T,Xt);if(k&&D&&(j.rangeCount!==1||j.anchorNode!==k.node||j.anchorOffset!==k.offset||j.focusNode!==D.node||j.focusOffset!==D.offset)){var x=Q.createRange();x.setStart(k.node,k.offset),j.removeAllRanges(),ft>Xt?(j.addRange(x),j.extend(D.node,D.offset)):(x.setEnd(D.node,D.offset),j.addRange(x))}}}}for(Q=[],j=T;j=j.parentNode;)j.nodeType===1&&Q.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Q.length;T++){var K=Q[T];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}vc=!!Ed,Td=Ed=null}finally{Ft=h,nt.p=l,F.T=a}}e.current=i,Be=2}}function Z_(){if(Be===2){Be=0;var e=Er,i=Va,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=nt.p;nt.p=2;var h=Ft;Ft|=4;try{D_(e,i.alternate,i)}finally{Ft=h,nt.p=l,F.T=a}}Be=3}}function J_(){if(Be===4||Be===3){Be=0,nu();var e=Er,i=Va,a=ka,l=B_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Be=5:(Be=0,Va=Er=null,ty(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(vr=null),Js(a),i=i.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(oe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=nt.p,nt.p=2,F.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{F.T=i,nt.p=h}}(ka&3)!==0&&oc(),ui(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===ad?ol++:(ol=0,ad=e):ol=0,ll(0)}}function ty(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,jo(i)))}function oc(e){return W_(),Z_(),J_(),ey()}function ey(){if(Be!==5)return!1;var e=Er,i=rd;rd=0;var a=Js(ka),l=F.T,h=nt.p;try{nt.p=32>a?32:a,F.T=null,a=sd,sd=null;var d=Er,v=ka;if(Be=0,Va=Er=null,ka=0,(Ft&6)!==0)throw Error(s(331));var T=Ft;if(Ft|=4,L_(d.current),U_(d,d.current,v,a),Ft=T,ll(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(oe,d)}catch{}return!0}finally{nt.p=h,F.T=l,ty(e,i)}}function ny(e,i,a){i=Cn(a,i),i=Lf(e.stateNode,i,2),e=cr(e,i,2),e!==null&&(Ti(e,2),ui(e))}function $t(e,i,a){if(e.tag===3)ny(e,e,a);else for(;i!==null;){if(i.tag===3){ny(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(vr===null||!vr.has(l))){e=Cn(a,e),a=a_(2),l=cr(i,a,2),l!==null&&(o_(a,l,i,e),Ti(l,2),ui(l));break}}i=i.return}}function cd(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new ZA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(td=!0,h.add(a),e=iS.bind(null,e,i,a),i.then(e,e))}function iS(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Jt===e&&(Pt&a)===a&&(ue===4||ue===3&&(Pt&62914560)===Pt&&300>An()-id?(Ft&2)===0&&Ua(e,0):ed|=a,Ma===Pt&&(Ma=0)),ui(e)}function iy(e,i){i===0&&(i=_o()),e=_a(e,i),e!==null&&(Ti(e,i),ui(e))}function rS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),iy(e,a)}function sS(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),iy(e,a)}function aS(e,i){return Zr(e,i)}var lc=null,xa=null,hd=!1,uc=!1,fd=!1,Vs=0;function ui(e){e!==xa&&e.next===null&&(xa===null?lc=xa=e:xa=xa.next=e),uc=!0,hd||(hd=!0,lS())}function ll(e,i){if(!fd&&uc){fd=!0;do for(var a=!1,l=lc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Ge(42|e)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,oy(l,d))}else d=Pt,d=Zs(l,l===Jt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||rs(l,d)||(a=!0,oy(l,d));l=l.next}while(a);fd=!1}}function oS(){ry()}function ry(){uc=hd=!1;var e=0;Vs!==0&&(gS()&&(e=Vs),Vs=0);for(var i=An(),a=null,l=lc;l!==null;){var h=l.next,d=sy(l,i);d===0?(l.next=null,a===null?lc=h:a.next=h,h===null&&(xa=a)):(a=l,(e!==0||(d&3)!==0)&&(uc=!0)),l=h}ll(e)}function sy(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ge(d),T=1<<v,w=h[v];w===-1?((T&a)===0||(T&l)!==0)&&(h[v]=po(T,i)):w<=i&&(e.expiredLanes|=T),d&=~T}if(i=Jt,a=Pt,a=Zs(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Jr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||rs(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Jr(l),Js(a)){case 2:case 8:a=$s;break;case 32:a=ts;break;case 268435456:a=Ws;break;default:a=ts}return l=ay.bind(null,e),a=Zr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Jr(l),e.callbackPriority=2,e.callbackNode=null,2}function ay(e,i){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(oc()&&e.callbackNode!==a)return null;var l=Pt;return l=Zs(e,e===Jt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(q_(e,l,i),sy(e,An()),e.callbackNode!=null&&e.callbackNode===a?ay.bind(null,e):null)}function oy(e,i){if(oc())return null;q_(e,i,!0)}function lS(){yS(function(){(Ft&6)!==0?Zr(fo,oS):ry()})}function dd(){return Vs===0&&(Vs=go()),Vs}function ly(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sa(""+e)}function uy(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function uS(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=ly((h[ge]||null).action),v=l.submitter;v&&(i=(i=v[ge]||null)?ly(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new aa("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Vs!==0){var w=v?uy(h,v):new FormData(h);Vf(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(T.preventDefault(),w=v?uy(h,v):new FormData(h),Vf(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var md=0;md<Wh.length;md++){var pd=Wh[md],cS=pd.toLowerCase(),hS=pd[0].toUpperCase()+pd.slice(1);zn(cS,"on"+hS)}zn(qp,"onAnimationEnd"),zn(Hp,"onAnimationIteration"),zn(Fp,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(CA,"onTransitionRun"),zn(DA,"onTransitionStart"),zn(OA,"onTransitionCancel"),zn(Gp,"onTransitionEnd"),Si("onMouseEnter",["mouseout","mouseover"]),Si("onMouseLeave",["mouseout","mouseover"]),Si("onPointerEnter",["pointerout","pointerover"]),Si("onPointerLeave",["pointerout","pointerover"]),xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function cy(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],w=T.instance,z=T.currentTarget;if(T=T.listener,w!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=z;try{d(h)}catch(G){$u(G)}h.currentTarget=null,d=w}else for(v=0;v<l.length;v++){if(T=l[v],w=T.instance,z=T.currentTarget,T=T.listener,w!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=z;try{d(h)}catch(G){$u(G)}h.currentTarget=null,d=w}}}}function Nt(e,i){var a=i[Eo];a===void 0&&(a=i[Eo]=new Set);var l=e+"__bubble";a.has(l)||(hy(i,e,2,!1),a.add(l))}function gd(e,i,a){var l=0;i&&(l|=4),hy(a,e,l,i)}var cc="_reactListening"+Math.random().toString(36).slice(2);function _d(e){if(!e[cc]){e[cc]=!0,To.forEach(function(a){a!=="selectionchange"&&(fS.has(a)||gd(a,!1,e),gd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[cc]||(i[cc]=!0,gd("selectionchange",!1,i))}}function hy(e,i,a,l){switch(Uy(i)){case 2:var h=zS;break;case 8:h=BS;break;default:h=Nd}a=h.bind(null,i,a,e),h=void 0,!Rn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function yd(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=Ai(T),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){l=d=v;continue t}T=T.parentNode}}l=l.return}fu(function(){var z=d,G=wn(a),Q=[];t:{var B=Kp.get(e);if(B!==void 0){var j=aa,yt=e;switch(e){case"keypress":if(ti(a)===0)break t;case"keydown":case"keyup":j=fa;break;case"focusin":yt="focus",j=ua;break;case"focusout":yt="blur",j=ua;break;case"beforeblur":case"afterblur":j=ua;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=In;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Eu;break;case qp:case Hp:case Fp:j=ca;break;case Gp:j=Au;break;case"scroll":case"scrollend":j=du;break;case"wheel":j=da;break;case"copy":case"cut":case"paste":j=ha;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Vo;break;case"toggle":case"beforetoggle":j=bu}var ft=(i&4)!==0,Xt=!ft&&(e==="scroll"||e==="scrollend"),k=ft?B!==null?B+"Capture":null:B;ft=[];for(var D=z,x;D!==null;){var K=D;if(x=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||x===null||k===null||(K=fs(D,k),K!=null&&ft.push(cl(D,K,x))),Xt)break;D=D.return}0<ft.length&&(B=new j(B,yt,null,a,G),Q.push({event:B,listeners:ft}))}}if((i&7)===0){t:{if(B=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",B&&a!==Ri&&(yt=a.relatedTarget||a.fromElement)&&(Ai(yt)||yt[Sn]))break t;if((j||B)&&(B=G.window===G?G:(B=G.ownerDocument)?B.defaultView||B.parentWindow:window,j?(yt=a.relatedTarget||a.toElement,j=z,yt=yt?Ai(yt):null,yt!==null&&(Xt=u(yt),ft=yt.tag,yt!==Xt||ft!==5&&ft!==27&&ft!==6)&&(yt=null)):(j=null,yt=z),j!==yt)){if(ft=In,K="onMouseLeave",k="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(ft=Vo,K="onPointerLeave",k="onPointerEnter",D="pointer"),Xt=j==null?B:$n(j),x=yt==null?B:$n(yt),B=new ft(K,D+"leave",j,a,G),B.target=Xt,B.relatedTarget=x,K=null,Ai(G)===z&&(ft=new ft(k,D+"enter",yt,a,G),ft.target=x,ft.relatedTarget=Xt,K=ft),Xt=K,j&&yt)e:{for(ft=j,k=yt,D=0,x=ft;x;x=La(x))D++;for(x=0,K=k;K;K=La(K))x++;for(;0<D-x;)ft=La(ft),D--;for(;0<x-D;)k=La(k),x--;for(;D--;){if(ft===k||k!==null&&ft===k.alternate)break e;ft=La(ft),k=La(k)}ft=null}else ft=null;j!==null&&fy(Q,B,j,ft,!1),yt!==null&&Xt!==null&&fy(Q,Xt,yt,ft,!0)}}t:{if(B=z?$n(z):window,j=B.nodeName&&B.nodeName.toLowerCase(),j==="select"||j==="input"&&B.type==="file")var at=Np;else if(we(B))if(Mp)at=wA;else{at=SA;var Dt=AA}else j=B.nodeName,!j||j.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&Ro(z.elementType)&&(at=Np):at=bA;if(at&&(at=at(e,z))){Ni(Q,at,a,G);break t}Dt&&Dt(e,B,z),e==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&sr(B,"number",B.value)}switch(Dt=z?$n(z):window,e){case"focusin":(we(Dt)||Dt.contentEditable==="true")&&(ma=Dt,Yh=z,Po=null);break;case"focusout":Po=Yh=ma=null;break;case"mousedown":Xh=!0;break;case"contextmenu":case"mouseup":case"dragend":Xh=!1,Bp(Q,a,G);break;case"selectionchange":if(IA)break;case"keydown":case"keyup":Bp(Q,a,G)}var lt;if(ii)t:{switch(e){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else kt?q(e,a)&&(pt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(y&&a.locale!=="ko"&&(kt||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&kt&&(lt=Co()):(Jn=G,ar="value"in Jn?Jn.value:Jn.textContent,kt=!0)),Dt=hc(z,pt),0<Dt.length&&(pt=new No(pt,e,null,a,G),Q.push({event:pt,listeners:Dt}),lt?pt.data=lt:(lt=et(a),lt!==null&&(pt.data=lt)))),(lt=p?be(e,a):Ut(e,a))&&(pt=hc(z,"onBeforeInput"),0<pt.length&&(Dt=new No("onBeforeInput","beforeinput",null,a,G),Q.push({event:Dt,listeners:pt}),Dt.data=lt)),uS(Q,e,z,a,G)}cy(Q,i)})}function cl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function hc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=fs(e,a),h!=null&&l.unshift(cl(e,h,d)),h=fs(e,i),h!=null&&l.push(cl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function La(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function fy(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,w=T.alternate,z=T.stateNode;if(T=T.tag,w!==null&&w===l)break;T!==5&&T!==26&&T!==27||z===null||(w=z,h?(z=fs(a,d),z!=null&&v.unshift(cl(a,z,w))):h||(z=fs(a,d),z!=null&&v.push(cl(a,z,w)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var dS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function dy(e){return(typeof e=="string"?e:""+e).replace(dS,`
`).replace(mS,"")}function my(e,i){return i=dy(i),dy(e)===i}function fc(){}function Yt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||bn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&bn(e,""+l);break;case"className":Wn(e,"class",l);break;case"tabIndex":Wn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Wn(e,a,l);break;case"style":wo(e,l,d);break;case"data":if(i!=="object"){Wn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=sa(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Yt(e,i,"name",h.name,h,null),Yt(e,i,"formEncType",h.formEncType,h,null),Yt(e,i,"formMethod",h.formMethod,h,null),Yt(e,i,"formTarget",h.formTarget,h,null)):(Yt(e,i,"encType",h.encType,h,null),Yt(e,i,"method",h.method,h,null),Yt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=sa(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=fc);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=sa(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Nt("beforetoggle",e),Nt("toggle",e),rr(e,"popover",l);break;case"xlinkActuate":xe(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":xe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":xe(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":xe(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":xe(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":xe(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":xe(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":xe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":xe(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":rr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=jh.get(a)||a,rr(e,a,l))}}function vd(e,i,a,l,h,d){switch(a){case"style":wo(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?bn(e,l):(typeof l=="number"||typeof l=="bigint")&&bn(e,""+l);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=fc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ta.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[ge]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):rr(e,a,l)}}}function je(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",e),Nt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Yt(e,i,d,v,a,null)}}h&&Yt(e,i,"srcSet",a.srcSet,a,null),l&&Yt(e,i,"src",a.src,a,null);return;case"input":Nt("invalid",e);var T=d=v=h=null,w=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":v=G;break;case"checked":w=G;break;case"defaultChecked":z=G;break;case"value":d=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:Yt(e,i,l,G,a,null)}}us(e,d,T,w,z,v,h,!1),ra(e);return;case"select":Nt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Yt(e,i,h,T,a,null)}i=d,a=v,e.multiple=!!l,i!=null?wi(e,!!l,i,!1):a!=null&&wi(e,!!l,a,!0);return;case"textarea":Nt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Yt(e,i,v,T,a,null)}cs(e,l,h,d),ra(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Yt(e,i,w,l,a,null)}return;case"dialog":Nt("beforetoggle",e),Nt("toggle",e),Nt("cancel",e),Nt("close",e);break;case"iframe":case"object":Nt("load",e);break;case"video":case"audio":for(l=0;l<ul.length;l++)Nt(ul[l],e);break;case"image":Nt("error",e),Nt("load",e);break;case"details":Nt("toggle",e);break;case"embed":case"source":case"link":Nt("error",e),Nt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Yt(e,i,z,l,a,null)}return;default:if(Ro(i)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&vd(e,i,G,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Yt(e,i,T,l,a,null))}function pS(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,w=null,z=null,G=null;for(j in a){var Q=a[j];if(a.hasOwnProperty(j)&&Q!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":w=Q;default:l.hasOwnProperty(j)||Yt(e,i,j,null,l,Q)}}for(var B in l){var j=l[B];if(Q=a[B],l.hasOwnProperty(B)&&(j!=null||Q!=null))switch(B){case"type":d=j;break;case"name":h=j;break;case"checked":z=j;break;case"defaultChecked":G=j;break;case"value":v=j;break;case"defaultValue":T=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:j!==Q&&Yt(e,i,B,j,l,Q)}}hn(e,v,T,w,z,G,d,h);return;case"select":j=v=T=B=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":j=w;default:l.hasOwnProperty(d)||Yt(e,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":B=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==w&&Yt(e,i,h,d,l,w)}i=T,a=v,l=j,B!=null?wi(e,!!a,B,!1):!!l!=!!a&&(i!=null?wi(e,!!a,i,!0):wi(e,!!a,a?[]:"",!1));return;case"textarea":j=B=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Yt(e,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":B=h;break;case"defaultValue":j=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Yt(e,i,v,h,l,d)}Kt(e,B,j);return;case"option":for(var yt in a)if(B=a[yt],a.hasOwnProperty(yt)&&B!=null&&!l.hasOwnProperty(yt))switch(yt){case"selected":e.selected=!1;break;default:Yt(e,i,yt,null,l,B)}for(w in l)if(B=l[w],j=a[w],l.hasOwnProperty(w)&&B!==j&&(B!=null||j!=null))switch(w){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Yt(e,i,w,B,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in a)B=a[ft],a.hasOwnProperty(ft)&&B!=null&&!l.hasOwnProperty(ft)&&Yt(e,i,ft,null,l,B);for(z in l)if(B=l[z],j=a[z],l.hasOwnProperty(z)&&B!==j&&(B!=null||j!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:Yt(e,i,z,B,l,j)}return;default:if(Ro(i)){for(var Xt in a)B=a[Xt],a.hasOwnProperty(Xt)&&B!==void 0&&!l.hasOwnProperty(Xt)&&vd(e,i,Xt,void 0,l,B);for(G in l)B=l[G],j=a[G],!l.hasOwnProperty(G)||B===j||B===void 0&&j===void 0||vd(e,i,G,B,l,j);return}}for(var k in a)B=a[k],a.hasOwnProperty(k)&&B!=null&&!l.hasOwnProperty(k)&&Yt(e,i,k,null,l,B);for(Q in l)B=l[Q],j=a[Q],!l.hasOwnProperty(Q)||B===j||B==null&&j==null||Yt(e,i,Q,B,l,j)}var Ed=null,Td=null;function dc(e){return e.nodeType===9?e:e.ownerDocument}function py(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gy(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Ad(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Sd=null;function gS(){var e=window.event;return e&&e.type==="popstate"?e===Sd?!1:(Sd=e,!0):(Sd=null,!1)}var _y=typeof setTimeout=="function"?setTimeout:void 0,_S=typeof clearTimeout=="function"?clearTimeout:void 0,yy=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof yy<"u"?function(e){return yy.resolve(null).then(e).catch(vS)}:_y;function vS(e){setTimeout(function(){throw e})}function Ar(e){return e==="head"}function vy(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&hl(v.documentElement),a&2&&hl(v.body),a&4)for(a=v.head,hl(a),v=a.firstChild;v;){var T=v.nextSibling,w=v.nodeName;v[ss]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){e.removeChild(d),vl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);vl(i)}function bd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bd(a),ir(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ES(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ss])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=jn(e.nextSibling),e===null)break}return null}function TS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=jn(e.nextSibling),e===null))return null;return e}function wd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function AS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function jn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Rd=null;function Ey(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function Ty(e,i,a){switch(i=dc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function hl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ir(e)}var kn=new Map,Ay=new Set;function mc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fi=nt.d;nt.d={f:SS,r:bS,D:wS,C:RS,L:IS,m:CS,X:OS,S:DS,M:NS};function SS(){var e=Fi.f(),i=sc();return e||i}function bS(e){var i=Xn(e);i!==null&&i.tag===5&&i.type==="form"?qg(i):Fi.r(e)}var za=typeof document>"u"?null:document;function Sy(e,i,a){var l=za;if(l&&typeof i=="string"&&i){var h=_e(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Ay.has(h)||(Ay.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),je(i,"link",e),fe(i),l.head.appendChild(i)))}}function wS(e){Fi.D(e),Sy("dns-prefetch",e,null)}function RS(e,i){Fi.C(e,i),Sy("preconnect",e,i)}function IS(e,i,a){Fi.L(e,i,a);var l=za;if(l&&e&&i){var h='link[rel="preload"][as="'+_e(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+_e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+_e(a.imageSizes)+'"]')):h+='[href="'+_e(e)+'"]';var d=h;switch(i){case"style":d=Ba(e);break;case"script":d=ja(e)}kn.has(d)||(e=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),kn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(fl(d))||i==="script"&&l.querySelector(dl(d))||(i=l.createElement("link"),je(i,"link",e),fe(i),l.head.appendChild(i)))}}function CS(e,i){Fi.m(e,i);var a=za;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+_e(l)+'"][href="'+_e(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ja(e)}if(!kn.has(d)&&(e=E({rel:"modulepreload",href:e},i),kn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(dl(d)))return}l=a.createElement("link"),je(l,"link",e),fe(l),a.head.appendChild(l)}}}function DS(e,i,a){Fi.S(e,i,a);var l=za;if(l&&e){var h=Ze(l).hoistableStyles,d=Ba(e);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(fl(d)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},a),(a=kn.get(d))&&Id(e,a);var w=v=l.createElement("link");fe(w),je(w,"link",e),w._p=new Promise(function(z,G){w.onload=z,w.onerror=G}),w.addEventListener("load",function(){T.loading|=1}),w.addEventListener("error",function(){T.loading|=2}),T.loading|=4,pc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function OS(e,i){Fi.X(e,i);var a=za;if(a&&e){var l=Ze(a).hoistableScripts,h=ja(e),d=l.get(h);d||(d=a.querySelector(dl(h)),d||(e=E({src:e,async:!0},i),(i=kn.get(h))&&Cd(e,i),d=a.createElement("script"),fe(d),je(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function NS(e,i){Fi.M(e,i);var a=za;if(a&&e){var l=Ze(a).hoistableScripts,h=ja(e),d=l.get(h);d||(d=a.querySelector(dl(h)),d||(e=E({src:e,async:!0,type:"module"},i),(i=kn.get(h))&&Cd(e,i),d=a.createElement("script"),fe(d),je(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function by(e,i,a,l){var h=(h=Tt.current)?mc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ba(a.href),a=Ze(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ba(a.href);var d=Ze(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(fl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),kn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kn.set(e,a),d||MS(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ja(a),a=Ze(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ba(e){return'href="'+_e(e)+'"'}function fl(e){return'link[rel="stylesheet"]['+e+"]"}function wy(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function MS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),je(i,"link",a),fe(i),e.head.appendChild(i))}function ja(e){return'[src="'+_e(e)+'"]'}function dl(e){return"script[async]"+e}function Ry(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+_e(a.href)+'"]');if(l)return i.instance=l,fe(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),fe(l),je(l,"style",h),pc(l,a.precedence,e),i.instance=l;case"stylesheet":h=Ba(a.href);var d=e.querySelector(fl(h));if(d)return i.state.loading|=4,i.instance=d,fe(d),d;l=wy(a),(h=kn.get(h))&&Id(l,h),d=(e.ownerDocument||e).createElement("link"),fe(d);var v=d;return v._p=new Promise(function(T,w){v.onload=T,v.onerror=w}),je(d,"link",l),i.state.loading|=4,pc(d,a.precedence,e),i.instance=d;case"script":return d=ja(a.src),(h=e.querySelector(dl(d)))?(i.instance=h,fe(h),h):(l=a,(h=kn.get(d))&&(l=E({},a),Cd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),fe(h),je(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,pc(l,a.precedence,e));return i.instance}function pc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Id(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Cd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var gc=null;function Iy(e,i,a){if(gc===null){var l=new Map,h=gc=new Map;h.set(a,l)}else h=gc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[ss]||d[Se]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function Cy(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function VS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Dy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ml=null;function kS(){}function US(e,i,a){if(ml===null)throw Error(s(475));var l=ml;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Ba(a.href),d=e.querySelector(fl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=_c.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,fe(d);return}d=e.ownerDocument||e,a=wy(a),(h=kn.get(h))&&Id(a,h),d=d.createElement("link"),fe(d);var v=d;v._p=new Promise(function(T,w){v.onload=T,v.onerror=w}),je(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=_c.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function PS(){if(ml===null)throw Error(s(475));var e=ml;return e.stylesheets&&e.count===0&&Dd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Dd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function _c(){if(this.count--,this.count===0){if(this.stylesheets)Dd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yc=null;function Dd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yc=new Map,i.forEach(xS,e),yc=null,_c.call(e))}function xS(e,i){if(!(i.state.loading&4)){var a=yc.get(e);if(a)var l=a.get(null);else{a=new Map,yc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=_c.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var pl={$$typeof:ot,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function LS(e,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ei(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.hiddenUpdates=Ei(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Oy(e,i,a,l,h,d,v,T,w,z,G,Q){return e=new LS(e,i,a,v,T,w,z,Q),i=1,d===!0&&(i|=24),d=dn(3,null,null,i),e.current=d,d.stateNode=e,i=cf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},mf(d),e}function Ny(e){return e?(e=ya,e):ya}function My(e,i,a,l,h,d){h=Ny(h),l.context===null?l.context=h:l.pendingContext=h,l=ur(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=cr(e,l,i),a!==null&&(yn(a,e,i),Go(a,e,i))}function Vy(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Od(e,i){Vy(e,i),(e=e.alternate)&&Vy(e,i)}function ky(e){if(e.tag===13){var i=_a(e,67108864);i!==null&&yn(i,e,67108864),Od(e,67108864)}}var vc=!0;function zS(e,i,a,l){var h=F.T;F.T=null;var d=nt.p;try{nt.p=2,Nd(e,i,a,l)}finally{nt.p=d,F.T=h}}function BS(e,i,a,l){var h=F.T;F.T=null;var d=nt.p;try{nt.p=8,Nd(e,i,a,l)}finally{nt.p=d,F.T=h}}function Nd(e,i,a,l){if(vc){var h=Md(l);if(h===null)yd(e,i,l,Ec,a),Py(e,l);else if(qS(h,e,i,a,l))l.stopPropagation();else if(Py(e,l),i&4&&-1<jS.indexOf(e)){for(;h!==null;){var d=Xn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Pn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var w=1<<31-Ge(v);T.entanglements[1]|=w,v&=~w}ui(d),(Ft&6)===0&&(ic=An()+500,ll(0))}}break;case 13:T=_a(d,2),T!==null&&yn(T,d,2),sc(),Od(d,2)}if(d=Md(l),d===null&&yd(e,i,l,Ec,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else yd(e,i,l,null,a)}}function Md(e){return e=wn(e),Vd(e)}var Ec=null;function Vd(e){if(Ec=null,e=Ai(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Ec=e,null}function Uy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Uh()){case fo:return 2;case $s:return 8;case ts:case Ph:return 32;case Ws:return 268435456;default:return 32}default:return 32}}var kd=!1,Sr=null,br=null,wr=null,gl=new Map,_l=new Map,Rr=[],jS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Py(e,i){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":gl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(i.pointerId)}}function yl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Xn(i),i!==null&&ky(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function qS(e,i,a,l,h){switch(i){case"focusin":return Sr=yl(Sr,e,i,a,l,h),!0;case"dragenter":return br=yl(br,e,i,a,l,h),!0;case"mouseover":return wr=yl(wr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return gl.set(d,yl(gl.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,_l.set(d,yl(_l.get(d)||null,e,i,a,l,h)),!0}return!1}function xy(e){var i=Ai(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,su(e.priority,function(){if(a.tag===13){var l=_n();l=tr(l);var h=_a(a,l);h!==null&&yn(h,a,l),Od(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Md(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ri=l,a.target.dispatchEvent(l),Ri=null}else return i=Xn(a),i!==null&&ky(i),e.blockedOn=a,!1;i.shift()}return!0}function Ly(e,i,a){Tc(e)&&a.delete(i)}function HS(){kd=!1,Sr!==null&&Tc(Sr)&&(Sr=null),br!==null&&Tc(br)&&(br=null),wr!==null&&Tc(wr)&&(wr=null),gl.forEach(Ly),_l.forEach(Ly)}function Ac(e,i){e.blockedOn===i&&(e.blockedOn=null,kd||(kd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,HS)))}var Sc=null;function zy(e){Sc!==e&&(Sc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Sc===e&&(Sc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Vd(l||a)===null)continue;break}var d=Xn(a);d!==null&&(e.splice(i,3),i-=3,Vf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function vl(e){function i(w){return Ac(w,e)}Sr!==null&&Ac(Sr,e),br!==null&&Ac(br,e),wr!==null&&Ac(wr,e),gl.forEach(i),_l.forEach(i);for(var a=0;a<Rr.length;a++){var l=Rr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Rr.length&&(a=Rr[0],a.blockedOn===null);)xy(a),a.blockedOn===null&&Rr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[ge]||null;if(typeof d=="function")v||zy(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[ge]||null)T=v.formAction;else if(Vd(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),zy(a)}}}function Ud(e){this._internalRoot=e}bc.prototype.render=Ud.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=_n();My(a,l,e,i,null,null)},bc.prototype.unmount=Ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;My(e.current,2,null,e,null,null),sc(),i[Sn]=null}};function bc(e){this._internalRoot=e}bc.prototype.unstable_scheduleHydration=function(e){if(e){var i=er();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Rr.length&&i!==0&&i<Rr[a].priority;a++);Rr.splice(a,0,e),a===0&&xy(e)}};var By=t.version;if(By!=="19.1.0")throw Error(s(527,By,"19.1.0"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var FS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{oe=wc.inject(FS),Ht=wc}catch{}}return Tl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=n_,d=i_,v=r_,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=Oy(e,1,!1,null,null,a,l,h,d,v,T,null),e[Sn]=i.current,_d(e),new Ud(i)},Tl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=n_,v=i_,T=r_,w=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),i=Oy(e,1,!0,i,a??null,l,h,d,v,T,w,z),i.context=Ny(null),a=i.current,l=_n(),l=tr(l),h=ur(l),h.callback=null,cr(a,h,l),a=l,i.current.lanes=a,Ti(i,a),ui(i),e[Sn]=i.current,_d(e),new bc(i)},Tl.version="19.1.0",Tl}var $y;function tb(){if($y)return Ld.exports;$y=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ld.exports=JS(),Ld.exports}var eb=tb();const nb=()=>{};var Wy={};/**
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
 */const OE=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},ib=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(g>>10)),t[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},NE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=u>>2,b=(u&3)<<4|m>>4;let O=(m&15)<<2|_>>6,L=_&63;g||(L=64,f||(O=64)),s.push(n[E],n[b],n[O],n[L])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(OE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):ib(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const _=o<r.length?n[r.charAt(o)]:64;++o;const b=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||b==null)throw new rb;const O=u<<2|m>>4;if(s.push(O),_!==64){const L=m<<4&240|_>>2;if(s.push(L),b!==64){const H=_<<6&192|b;s.push(H)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class rb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sb=function(r){const t=OE(r);return NE.encodeByteArray(t,!0)},Kc=function(r){return sb(r).replace(/\./g,"")},ME=function(r){try{return NE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ab(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ob=()=>ab().__FIREBASE_DEFAULTS__,lb=()=>{if(typeof process>"u"||typeof Wy>"u")return;const r=Wy.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ub=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&ME(r[1]);return t&&JSON.parse(t)},hh=()=>{try{return nb()||ob()||lb()||ub()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},VE=r=>{var t,n;return(n=(t=hh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},kE=r=>{const t=VE(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},UE=()=>{var r;return(r=hh())===null||r===void 0?void 0:r.config},PE=r=>{var t;return(t=hh())===null||t===void 0?void 0:t[`_${r}`]};/**
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
 */class cb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function xE(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Kc(JSON.stringify(n)),Kc(JSON.stringify(f)),""].join(".")}/**
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
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function fb(){var r;const t=(r=hh())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function db(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mb(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function pb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gb(){const r=We();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function _b(){return!fb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yb(){try{return typeof indexedDB=="object"}catch{return!1}}function vb(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}/**
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
 */const Eb="FirebaseError";class yi extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Eb,Object.setPrototypeOf(this,yi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gl.prototype.create)}}class Gl{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?Tb(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new yi(o,m,s)}}function Tb(r,t){return r.replace(Ab,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const Ab=/\{\$([^}]+)}/g;function Sb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function xs(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(Zy(u)&&Zy(f)){if(!xs(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Zy(r){return r!==null&&typeof r=="object"}/**
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
 */function Kl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Sl(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function bl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function bb(r,t){const n=new wb(r,t);return n.subscribe.bind(n)}class wb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Rb(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=qd),o.error===void 0&&(o.error=qd),o.complete===void 0&&(o.complete=qd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rb(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function qd(){}/**
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
 */function re(r){return r&&r._delegate?r._delegate:r}class Br{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ks="[DEFAULT]";/**
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
 */class Ib{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new cb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Db(t))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=ks){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ks){return this.instances.has(t)}getOptions(t=ks){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&t(f,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cb(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=ks){return this.component?this.component.multipleInstances?t:ks:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cb(r){return r===ks?void 0:r}function Db(r){return r.instantiationMode==="EAGER"}/**
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
 */class Ob{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ib(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Mt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Mt||(Mt={}));const Nb={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},Mb=Mt.INFO,Vb={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},kb=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=Vb[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Om{constructor(t){this.name=t,this._logLevel=Mb,this._logHandler=kb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Mt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...t),this._logHandler(this,Mt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...t),this._logHandler(this,Mt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...t),this._logHandler(this,Mt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...t),this._logHandler(this,Mt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...t),this._logHandler(this,Mt.ERROR,...t)}}const Ub=(r,t)=>t.some(n=>r instanceof n);let Jy,tv;function Pb(){return Jy||(Jy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xb(){return tv||(tv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const LE=new WeakMap,em=new WeakMap,zE=new WeakMap,Hd=new WeakMap,Nm=new WeakMap;function Lb(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Ur(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&LE.set(n,r)}).catch(()=>{}),Nm.set(t,r),t}function zb(r){if(em.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});em.set(r,t)}let nm={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return em.get(r);if(t==="objectStoreNames")return r.objectStoreNames||zE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ur(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Bb(r){nm=r(nm)}function jb(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Fd(this),t,...n);return zE.set(s,t.sort?t.sort():[t]),Ur(s)}:xb().includes(r)?function(...t){return r.apply(Fd(this),t),Ur(LE.get(this))}:function(...t){return Ur(r.apply(Fd(this),t))}}function qb(r){return typeof r=="function"?jb(r):(r instanceof IDBTransaction&&zb(r),Ub(r,Pb())?new Proxy(r,nm):r)}function Ur(r){if(r instanceof IDBRequest)return Lb(r);if(Hd.has(r))return Hd.get(r);const t=qb(r);return t!==r&&(Hd.set(r,t),Nm.set(t,r)),t}const Fd=r=>Nm.get(r);function Hb(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),m=Ur(f);return s&&f.addEventListener("upgradeneeded",g=>{s(Ur(f.result),g.oldVersion,g.newVersion,Ur(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const Fb=["get","getKey","getAll","getAllKeys","count"],Gb=["put","add","delete","clear"],Gd=new Map;function ev(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Gd.get(t))return Gd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=Gb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Fb.includes(n)))return;const u=async function(f,...m){const g=this.transaction(f,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[n](...m),o&&g.done]))[0]};return Gd.set(t,u),u}Bb(r=>({...r,get:(t,n,s)=>ev(t,n)||r.get(t,n,s),has:(t,n)=>!!ev(t,n)||r.has(t,n)}));/**
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
 */class Kb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Qb(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const im="@firebase/app",nv="0.11.4";/**
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
 */const Xi=new Om("@firebase/app"),Yb="@firebase/app-compat",Xb="@firebase/analytics-compat",$b="@firebase/analytics",Wb="@firebase/app-check-compat",Zb="@firebase/app-check",Jb="@firebase/auth",tw="@firebase/auth-compat",ew="@firebase/database",nw="@firebase/data-connect",iw="@firebase/database-compat",rw="@firebase/functions",sw="@firebase/functions-compat",aw="@firebase/installations",ow="@firebase/installations-compat",lw="@firebase/messaging",uw="@firebase/messaging-compat",cw="@firebase/performance",hw="@firebase/performance-compat",fw="@firebase/remote-config",dw="@firebase/remote-config-compat",mw="@firebase/storage",pw="@firebase/storage-compat",gw="@firebase/firestore",_w="@firebase/vertexai",yw="@firebase/firestore-compat",vw="firebase",Ew="11.6.0";/**
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
 */const rm="[DEFAULT]",Tw={[im]:"fire-core",[Yb]:"fire-core-compat",[$b]:"fire-analytics",[Xb]:"fire-analytics-compat",[Zb]:"fire-app-check",[Wb]:"fire-app-check-compat",[Jb]:"fire-auth",[tw]:"fire-auth-compat",[ew]:"fire-rtdb",[nw]:"fire-data-connect",[iw]:"fire-rtdb-compat",[rw]:"fire-fn",[sw]:"fire-fn-compat",[aw]:"fire-iid",[ow]:"fire-iid-compat",[lw]:"fire-fcm",[uw]:"fire-fcm-compat",[cw]:"fire-perf",[hw]:"fire-perf-compat",[fw]:"fire-rc",[dw]:"fire-rc-compat",[mw]:"fire-gcs",[pw]:"fire-gcs-compat",[gw]:"fire-fst",[yw]:"fire-fst-compat",[_w]:"fire-vertex","fire-js":"fire-js",[vw]:"fire-js-all"};/**
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
 */const Qc=new Map,Aw=new Map,sm=new Map;function iv(r,t){try{r.container.addComponent(t)}catch(n){Xi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function Ls(r){const t=r.name;if(sm.has(t))return Xi.debug(`There were multiple attempts to register component ${t}.`),!1;sm.set(t,r);for(const n of Qc.values())iv(n,r);for(const n of Aw.values())iv(n,r);return!0}function fh(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function vn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Sw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new Gl("app","Firebase",Sw);/**
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
 */class bw{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const Fs=Ew;function BE(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:rm,automaticDataCollectionEnabled:!1},t),o=s.name;if(typeof o!="string"||!o)throw Pr.create("bad-app-name",{appName:String(o)});if(n||(n=UE()),!n)throw Pr.create("no-options");const u=Qc.get(o);if(u){if(xs(n,u.options)&&xs(s,u.config))return u;throw Pr.create("duplicate-app",{appName:o})}const f=new Ob(o);for(const g of sm.values())f.addComponent(g);const m=new bw(n,s,f);return Qc.set(o,m),m}function Mm(r=rm){const t=Qc.get(r);if(!t&&r===rm&&UE())return BE();if(!t)throw Pr.create("no-app",{appName:r});return t}function fi(r,t,n){var s;let o=(s=Tw[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${t}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Xi.warn(m.join(" "));return}Ls(new Br(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const ww="firebase-heartbeat-database",Rw=1,Ul="firebase-heartbeat-store";let Kd=null;function jE(){return Kd||(Kd=Hb(ww,Rw,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Ul)}catch(n){console.warn(n)}}}}).catch(r=>{throw Pr.create("idb-open",{originalErrorMessage:r.message})})),Kd}async function Iw(r){try{const n=(await jE()).transaction(Ul),s=await n.objectStore(Ul).get(qE(r));return await n.done,s}catch(t){if(t instanceof yi)Xi.warn(t.message);else{const n=Pr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Xi.warn(n.message)}}}async function rv(r,t){try{const s=(await jE()).transaction(Ul,"readwrite");await s.objectStore(Ul).put(t,qE(r)),await s.done}catch(n){if(n instanceof yi)Xi.warn(n.message);else{const s=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xi.warn(s.message)}}}function qE(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Cw=1024,Dw=30;class Ow{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=sv();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>Dw){const f=Vw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Xi.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sv(),{heartbeatsToSend:s,unsentEntries:o}=Nw(this._heartbeatsCache.heartbeats),u=Kc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Xi.warn(n),""}}}function sv(){return new Date().toISOString().substring(0,10)}function Nw(r,t=Cw){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),av(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),av(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Mw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yb()?vb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Iw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return rv(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return rv(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function av(r){return Kc(JSON.stringify({version:2,heartbeats:r})).length}function Vw(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function kw(r){Ls(new Br("platform-logger",t=>new Kb(t),"PRIVATE")),Ls(new Br("heartbeat",t=>new Ow(t),"PRIVATE")),fi(im,nv,r),fi(im,nv,"esm2017"),fi("fire-js","")}kw("");function Vm(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function HE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uw=HE,FE=new Gl("auth","Firebase",HE());/**
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
 */const Yc=new Om("@firebase/auth");function Pw(r,...t){Yc.logLevel<=Mt.WARN&&Yc.warn(`Auth (${Fs}): ${r}`,...t)}function kc(r,...t){Yc.logLevel<=Mt.ERROR&&Yc.error(`Auth (${Fs}): ${r}`,...t)}/**
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
 */function Fn(r,...t){throw km(r,...t)}function di(r,...t){return km(r,...t)}function GE(r,t,n){const s=Object.assign(Object.assign({},Uw()),{[t]:n});return new Gl("auth","Firebase",s).create(t,{appName:r.name})}function Qi(r){return GE(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function km(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return FE.create(r,...t)}function gt(r,t,...n){if(!r)throw km(t,...n)}function Gi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw kc(t),new Error(t)}function $i(r,t){r||Gi(t)}/**
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
 */function am(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function xw(){return ov()==="http:"||ov()==="https:"}function ov(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Lw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xw()||mb()||"connection"in navigator)?navigator.onLine:!0}function zw(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ql{constructor(t,n){this.shortDelay=t,this.longDelay=n,$i(n>t,"Short delay should be less than long delay!"),this.isMobile=hb()||pb()}get(){return Lw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Um(r,t){$i(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class KE{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qw=new Ql(3e4,6e4);function Qr(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Yr(r,t,n,s,o={}){return QE(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const m=Kl(Object.assign({key:r.config.apiKey},f)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:t,headers:g},u);return db()||(_.referrerPolicy="no-referrer"),KE.fetch()(await YE(r,r.config.apiHost,n,m),_)})}async function QE(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},Bw),t);try{const o=new Fw(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Rc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rc(r,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw Rc(r,"email-already-in-use",f);if(g==="USER_DISABLED")throw Rc(r,"user-disabled",f);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw GE(r,E,_);Fn(r,E)}}catch(o){if(o instanceof yi)throw o;Fn(r,"network-request-failed",{message:String(o)})}}async function Yl(r,t,n,s,o={}){const u=await Yr(r,t,n,s,o);return"mfaPendingCredential"in u&&Fn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function YE(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?Um(r.config,o):`${r.config.apiScheme}://${o}`;return jw.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function Hw(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(di(this.auth,"network-request-failed")),qw.get())})}}function Rc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=di(r,t,s);return o.customData._tokenResponse=n,o}function lv(r){return r!==void 0&&r.enterprise!==void 0}class Gw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Hw(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Kw(r,t){return Yr(r,"GET","/v2/recaptchaConfig",Qr(r,t))}/**
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
 */async function Qw(r,t){return Yr(r,"POST","/v1/accounts:delete",t)}async function Xc(r,t){return Yr(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Dl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Yw(r,t=!1){const n=re(r),s=await n.getIdToken(t),o=Pm(s);gt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Dl(Qd(o.auth_time)),issuedAtTime:Dl(Qd(o.iat)),expirationTime:Dl(Qd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Qd(r){return Number(r)*1e3}function Pm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return kc("JWT malformed, contained fewer than 3 sections"),null;try{const o=ME(n);return o?JSON.parse(o):(kc("Failed to decode base64 JWT payload"),null)}catch(o){return kc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function uv(r){const t=Pm(r);return gt(t,"internal-error"),gt(typeof t.exp<"u","internal-error"),gt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Pl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof yi&&Xw(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function Xw({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class $w{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class om{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dl(this.lastLoginAt),this.creationTime=Dl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $c(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Pl(r,Xc(n,{idToken:s}));gt(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?XE(u.providerUserInfo):[],m=Zw(r.providerData,f),g=r.isAnonymous,_=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),E=g?_:!1,b={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new om(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,b)}async function Ww(r){const t=re(r);await $c(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Zw(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function XE(r){return r.map(t=>{var{providerId:n}=t,s=Vm(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Jw(r,t){const n=await QE(r,{},async()=>{const s=Kl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await YE(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",KE.fetch()(f,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tR(r,t){return Yr(r,"POST","/v2/accounts:revokeToken",Qr(r,t))}/**
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
 */class Qa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){gt(t.idToken,"internal-error"),gt(typeof t.idToken<"u","internal-error"),gt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):uv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){gt(t.length!==0,"internal-error");const n=uv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(gt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await Jw(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Qa;return s&&(gt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(gt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(gt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Qa,this.toJSON())}_performRefresh(){return Gi("not implemented")}}/**
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
 */function Cr(r,t){gt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class qn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,u=Vm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $w(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new om(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await Pl(this,this.stsTokenManager.getToken(this.auth,t));return gt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Yw(this,t)}reload(){return Ww(this)}_assign(t){this!==t&&(gt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new qn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){gt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await $c(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Qi(this.auth));const t=await this.getIdToken();return await Pl(this,Qw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,u,f,m,g,_,E;const b=(s=n.displayName)!==null&&s!==void 0?s:void 0,O=(o=n.email)!==null&&o!==void 0?o:void 0,L=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,H=(f=n.photoURL)!==null&&f!==void 0?f:void 0,tt=(m=n.tenantId)!==null&&m!==void 0?m:void 0,$=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,Et=(_=n.createdAt)!==null&&_!==void 0?_:void 0,dt=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ot,emailVerified:_t,isAnonymous:mt,providerData:wt,stsTokenManager:M}=n;gt(ot&&M,t,"internal-error");const S=Qa.fromJSON(this.name,M);gt(typeof ot=="string",t,"internal-error"),Cr(b,t.name),Cr(O,t.name),gt(typeof _t=="boolean",t,"internal-error"),gt(typeof mt=="boolean",t,"internal-error"),Cr(L,t.name),Cr(H,t.name),Cr(tt,t.name),Cr($,t.name),Cr(Et,t.name),Cr(dt,t.name);const R=new qn({uid:ot,auth:t,email:O,emailVerified:_t,displayName:b,isAnonymous:mt,photoURL:H,phoneNumber:L,tenantId:tt,stsTokenManager:S,createdAt:Et,lastLoginAt:dt});return wt&&Array.isArray(wt)&&(R.providerData=wt.map(N=>Object.assign({},N))),$&&(R._redirectEventId=$),R}static async _fromIdTokenResponse(t,n,s=!1){const o=new Qa;o.updateFromServerResponse(n);const u=new qn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await $c(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];gt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?XE(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Qa;m.updateFromIdToken(s);const g=new qn({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:f}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new om(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const cv=new Map;function Ki(r){$i(r instanceof Function,"Expected a class definition");let t=cv.get(r);return t?($i(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,cv.set(r,t),t)}/**
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
 */class $E{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}$E.type="NONE";const hv=$E;/**
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
 */function Uc(r,t,n){return`firebase:${r}:${t}:${n}`}class Ya{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Uc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Uc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Xc(this.auth,{idToken:t}).catch(()=>{});return n?qn._fromGetAccountInfoResponse(this.auth,n,t):null}return qn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Ya(Ki(hv),t,s);const o=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Ki(hv);const f=Uc(s,t.config.apiKey,t.name);let m=null;for(const _ of n)try{const E=await _._get(f);if(E){let b;if(typeof E=="string"){const O=await Xc(t,{idToken:E}).catch(()=>{});if(!O)break;b=await qn._fromGetAccountInfoResponse(t,O,E)}else b=qn._fromJSON(t,E);_!==u&&(m=b),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Ya(u,t,s):(u=g[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async _=>{if(_!==u)try{await _._remove(f)}catch{}})),new Ya(u,t,s))}}/**
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
 */function fv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(tT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(WE(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(nT(t))return"Blackberry";if(iT(t))return"Webos";if(ZE(t))return"Safari";if((t.includes("chrome/")||JE(t))&&!t.includes("edge/"))return"Chrome";if(eT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function WE(r=We()){return/firefox\//i.test(r)}function ZE(r=We()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function JE(r=We()){return/crios\//i.test(r)}function tT(r=We()){return/iemobile/i.test(r)}function eT(r=We()){return/android/i.test(r)}function nT(r=We()){return/blackberry/i.test(r)}function iT(r=We()){return/webos/i.test(r)}function xm(r=We()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function eR(r=We()){var t;return xm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function nR(){return gb()&&document.documentMode===10}function rT(r=We()){return xm(r)||eT(r)||iT(r)||nT(r)||/windows phone/i.test(r)||tT(r)}/**
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
 */function sT(r,t=[]){let n;switch(r){case"Browser":n=fv(We());break;case"Worker":n=`${fv(We())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fs}/${s}`}/**
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
 */class iR{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,m)=>{try{const g=t(u);f(g)}catch(g){m(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function rR(r,t={}){return Yr(r,"GET","/v2/passwordPolicy",Qr(r,t))}/**
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
 */const sR=6;class aR{constructor(t){var n,s,o,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:sR,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,u,f,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,g),this.validatePasswordCharacterOptions(t,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(f=g.containsNumericCharacter)!==null&&f!==void 0?f:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
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
 */class oR{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dv(this),this.idTokenSubscription=new dv(this),this.beforeStateQueue=new iR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=FE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ki(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Ya.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Xc(this,{idToken:t}),s=await qn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(vn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(t);(!f||f===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return gt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await $c(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=zw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(vn(this.app))return Promise.reject(Qi(this));const n=t?re(t):null;return n&&gt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&gt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Qi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return vn(this.app)?Promise.reject(Qi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ki(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await rR(this),n=new aR(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Gl("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await tR(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ki(t)||this._popupRedirectResolver;gt(n,this,"argument-error"),this.redirectPersistenceManager=await Ya.create(this,[Ki(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(gt(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=t.addObserver(n,s,o);return()=>{f=!0,g()}}else{const g=t.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return gt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=sT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Pw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gs(r){return re(r)}class dv{constructor(t){this.auth=t,this.observer=null,this.addObserver=bb(n=>this.observer=n)}get next(){return gt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let dh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lR(r){dh=r}function aT(r){return dh.loadJS(r)}function uR(){return dh.recaptchaEnterpriseScript}function cR(){return dh.gapiScript}function hR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class fR{constructor(){this.enterprise=new dR}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class dR{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const mR="recaptcha-enterprise",oT="NO_RECAPTCHA";class pR{constructor(t){this.type=mR,this.auth=Gs(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{Kw(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new Gw(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,f(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,f,m){const g=window.grecaptcha;lv(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:t}).then(_=>{f(_)}).catch(()=>{f(oT)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fR().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&lv(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=uR();g.length!==0&&(g+=m),aT(g).then(()=>{o(m,u,f)}).catch(_=>{f(_)})}}).catch(m=>{f(m)})})}}async function mv(r,t,n,s=!1,o=!1){const u=new pR(r);let f;if(o)f=oT;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function lm(r,t,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await mv(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await mv(r,t,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
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
 */function gR(r,t){const n=fh(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(xs(u,t??{}))return o;Fn(o,"already-initialized")}return n.initialize({options:t})}function _R(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ki);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function yR(r,t,n){const s=Gs(r);gt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=lT(t),{host:f,port:m}=vR(t),g=m===null?"":`:${m}`,_={url:`${u}//${f}${g}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){gt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),gt(xs(_,s.config.emulator)&&xs(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,ER()}function lT(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function vR(r){const t=lT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:pv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:pv(f)}}}function pv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function ER(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Lm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Gi("not implemented")}_getIdTokenResponse(t){return Gi("not implemented")}_linkToIdToken(t,n){return Gi("not implemented")}_getReauthenticationResolver(t){return Gi("not implemented")}}async function TR(r,t){return Yr(r,"POST","/v1/accounts:signUp",t)}/**
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
 */async function AR(r,t){return Yl(r,"POST","/v1/accounts:signInWithPassword",Qr(r,t))}/**
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
 */async function SR(r,t){return Yl(r,"POST","/v1/accounts:signInWithEmailLink",Qr(r,t))}async function bR(r,t){return Yl(r,"POST","/v1/accounts:signInWithEmailLink",Qr(r,t))}/**
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
 */class xl extends Lm{constructor(t,n,s,o=null){super("password",s),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new xl(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new xl(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lm(t,n,"signInWithPassword",AR);case"emailLink":return SR(t,{email:this._email,oobCode:this._password});default:Fn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lm(t,s,"signUpPassword",TR);case"emailLink":return bR(t,{idToken:n,email:this._email,oobCode:this._password});default:Fn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Xa(r,t){return Yl(r,"POST","/v1/accounts:signInWithIdp",Qr(r,t))}/**
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
 */const wR="http://localhost";class zs extends Lm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new zs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,u=Vm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new zs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Xa(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Xa(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Xa(t,n)}buildRequest(){const t={requestUri:wR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Kl(n)}return t}}/**
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
 */function RR(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function IR(r){const t=Sl(bl(r)).link,n=t?Sl(bl(t)).deep_link_id:null,s=Sl(bl(r)).deep_link_id;return(s?Sl(bl(s)).link:null)||s||n||t||r}class zm{constructor(t){var n,s,o,u,f,m;const g=Sl(bl(t)),_=(n=g.apiKey)!==null&&n!==void 0?n:null,E=(s=g.oobCode)!==null&&s!==void 0?s:null,b=RR((o=g.mode)!==null&&o!==void 0?o:null);gt(_&&E&&b,"argument-error"),this.apiKey=_,this.operation=b,this.code=E,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=g.languageCode)!==null&&f!==void 0?f:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(t){const n=IR(t);try{return new zm(n)}catch{return null}}}/**
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
 */class so{constructor(){this.providerId=so.PROVIDER_ID}static credential(t,n){return xl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=zm.parseLink(n);return gt(s,"argument-error"),xl._fromEmailAndCode(t,s.code,s.tenantId)}}so.PROVIDER_ID="password";so.EMAIL_PASSWORD_SIGN_IN_METHOD="password";so.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class uT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xl extends uT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dr extends Xl{constructor(){super("facebook.com")}static credential(t){return zs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dr.credentialFromTaggedObject(t)}static credentialFromError(t){return Dr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dr.credential(t.oauthAccessToken)}catch{return null}}}Dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dr.PROVIDER_ID="facebook.com";/**
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
 */class Or extends Xl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return zs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Or.credentialFromTaggedObject(t)}static credentialFromError(t){return Or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Or.credential(n,s)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
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
 */class Nr extends Xl{constructor(){super("github.com")}static credential(t){return zs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Nr.credentialFromTaggedObject(t)}static credentialFromError(t){return Nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Nr.credential(t.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
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
 */class Mr extends Xl{constructor(){super("twitter.com")}static credential(t,n){return zs._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Mr.credentialFromTaggedObject(t)}static credentialFromError(t){return Mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Mr.credential(n,s)}catch{return null}}}Mr.TWITTER_SIGN_IN_METHOD="twitter.com";Mr.PROVIDER_ID="twitter.com";/**
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
 */async function CR(r,t){return Yl(r,"POST","/v1/accounts:signUp",Qr(r,t))}/**
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
 */class Bs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await qn._fromIdTokenResponse(t,s,o),f=gv(s);return new Bs({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=gv(s);return new Bs({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function gv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Wc extends yi{constructor(t,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Wc.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new Wc(t,n,s,o)}}function cT(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Wc._fromErrorAndOperation(r,u,t,s):u})}async function DR(r,t,n=!1){const s=await Pl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Bs._forOperation(r,"link",s)}/**
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
 */async function OR(r,t,n=!1){const{auth:s}=r;if(vn(s.app))return Promise.reject(Qi(s));const o="reauthenticate";try{const u=await Pl(r,cT(s,o,t,r),n);gt(u.idToken,s,"internal-error");const f=Pm(u.idToken);gt(f,s,"internal-error");const{sub:m}=f;return gt(r.uid===m,s,"user-mismatch"),Bs._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Fn(s,"user-mismatch"),u}}/**
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
 */async function hT(r,t,n=!1){if(vn(r.app))return Promise.reject(Qi(r));const s="signIn",o=await cT(r,s,t),u=await Bs._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function NR(r,t){return hT(Gs(r),t)}/**
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
 */async function fT(r){const t=Gs(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function MR(r,t,n){if(vn(r.app))return Promise.reject(Qi(r));const s=Gs(r),f=await lm(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CR).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&fT(r),g}),m=await Bs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function VR(r,t,n){return vn(r.app)?Promise.reject(Qi(r)):NR(re(r),so.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&fT(r),s})}/**
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
 */function kR(r,t){return re(r).setPersistence(t)}function UR(r,t,n,s){return re(r).onIdTokenChanged(t,n,s)}function PR(r,t,n){return re(r).beforeAuthStateChanged(t,n)}function xR(r,t,n,s){return re(r).onAuthStateChanged(t,n,s)}function LR(r){return re(r).signOut()}const Zc="__sak";/**
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
 */class dT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zc,"1"),this.storage.removeItem(Zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const zR=1e3,BR=10;class mT extends dT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,m,g)=>{this.notifyListeners(f,g)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);nR()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,BR):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},zR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}mT.type="LOCAL";const jR=mT;/**
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
 */class pT extends dT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}pT.type="SESSION";const Bm=pT;/**
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
 */function qR(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class mh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new mh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async _=>_(n.origin,u)),g=await qR(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mh.receivers=[];/**
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
 */function jm(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class HR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,g)=>{const _=jm("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(b){const O=b;if(O.data.eventId===_)switch(O.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(O.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:_,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function mi(){return window}function FR(r){mi().location.href=r}/**
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
 */function gT(){return typeof mi().WorkerGlobalScope<"u"&&typeof mi().importScripts=="function"}async function GR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KR(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function QR(){return gT()?self:null}/**
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
 */const _T="firebaseLocalStorageDb",YR=1,Jc="firebaseLocalStorage",yT="fbase_key";class $l{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ph(r,t){return r.transaction([Jc],t?"readwrite":"readonly").objectStore(Jc)}function XR(){const r=indexedDB.deleteDatabase(_T);return new $l(r).toPromise()}function um(){const r=indexedDB.open(_T,YR);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Jc,{keyPath:yT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Jc)?t(s):(s.close(),await XR(),t(await um()))})})}async function _v(r,t,n){const s=ph(r,!0).put({[yT]:t,value:n});return new $l(s).toPromise()}async function $R(r,t){const n=ph(r,!1).get(t),s=await new $l(n).toPromise();return s===void 0?null:s.value}function yv(r,t){const n=ph(r,!0).delete(t);return new $l(n).toPromise()}const WR=800,ZR=3;class vT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await um(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>ZR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mh._getInstance(QR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await GR(),!this.activeServiceWorker)return;this.sender=new HR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||KR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await um();return await _v(t,Zc,"1"),await yv(t,Zc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>_v(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>$R(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>yv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=ph(o,!1).getAll();return new $l(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vT.type="LOCAL";const JR=vT;new Ql(3e4,6e4);/**
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
 */function tI(r,t){return t?Ki(t):(gt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class qm extends Lm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Xa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Xa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Xa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function eI(r){return hT(r.auth,new qm(r),r.bypassAuthState)}function nI(r){const{auth:t,user:n}=r;return gt(n,t,"internal-error"),OR(n,new qm(r),r.bypassAuthState)}async function iI(r){const{auth:t,user:n}=r;return gt(n,t,"internal-error"),DR(n,new qm(r),r.bypassAuthState)}/**
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
 */class ET{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=t;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return eI;case"linkViaPopup":case"linkViaRedirect":return iI;case"reauthViaPopup":case"reauthViaRedirect":return nI;default:Fn(this.auth,"internal-error")}}resolve(t){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rI=new Ql(2e3,1e4);class Ka extends ET{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Ka.currentPopupAction&&Ka.currentPopupAction.cancel(),Ka.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return gt(t,this.auth,"internal-error"),t}async onExecution(){$i(this.filter.length===1,"Popup operations only handle one event");const t=jm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(di(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(di(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ka.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(di(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,rI.get())};t()}}Ka.currentPopupAction=null;/**
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
 */const sI="pendingRedirect",Pc=new Map;class aI extends ET{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Pc.get(this.auth._key());if(!t){try{const s=await oI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Pc.set(this.auth._key(),t)}return this.bypassAuthState||Pc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oI(r,t){const n=cI(t),s=uI(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function lI(r,t){Pc.set(r._key(),t)}function uI(r){return Ki(r._redirectPersistence)}function cI(r){return Uc(sI,r.config.apiKey,r.name)}async function hI(r,t,n=!1){if(vn(r.app))return Promise.reject(Qi(r));const s=Gs(r),o=tI(s,t),f=await new aI(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const fI=10*60*1e3;class dI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!mI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!TT(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(di(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=fI&&this.cachedEventUids.clear(),this.cachedEventUids.has(vv(t))}saveEventToCache(t){this.cachedEventUids.add(vv(t)),this.lastProcessedEventTime=Date.now()}}function vv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function TT({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function mI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return TT(r);default:return!1}}/**
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
 */async function pI(r,t={}){return Yr(r,"GET","/v1/projects",t)}/**
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
 */const gI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_I=/^https?/;async function yI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await pI(r);for(const n of t)try{if(vI(n))return}catch{}Fn(r,"unauthorized-domain")}function vI(r){const t=am(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!_I.test(n))return!1;if(gI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const EI=new Ql(3e4,6e4);function Ev(){const r=mi().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function TI(r){return new Promise((t,n)=>{var s,o,u;function f(){Ev(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ev(),n(di(r,"network-request-failed"))},timeout:EI.get()})}if(!((o=(s=mi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=mi().gapi)===null||u===void 0)&&u.load)f();else{const m=hR("iframefcb");return mi()[m]=()=>{gapi.load?f():n(di(r,"network-request-failed"))},aT(`${cR()}?onload=${m}`).catch(g=>n(g))}}).catch(t=>{throw xc=null,t})}let xc=null;function AI(r){return xc=xc||TI(r),xc}/**
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
 */const SI=new Ql(5e3,15e3),bI="__/auth/iframe",wI="emulator/auth/iframe",RI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},II=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CI(r){const t=r.config;gt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Um(t,wI):`https://${r.config.authDomain}/${bI}`,s={apiKey:t.apiKey,appName:r.name,v:Fs},o=II.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Kl(s).slice(1)}`}async function DI(r){const t=await AI(r),n=mi().gapi;return gt(n,r,"internal-error"),t.open({where:document.body,url:CI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=di(r,"network-request-failed"),m=mi().setTimeout(()=>{u(f)},SI.get());function g(){mi().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
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
 */const OI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NI=500,MI=600,VI="_blank",kI="http://localhost";class Tv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UI(r,t,n,s=NI,o=MI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},OI),{width:s.toString(),height:o.toString(),top:u,left:f}),_=We().toLowerCase();n&&(m=JE(_)?VI:n),WE(_)&&(t=t||kI,g.scrollbars="yes");const E=Object.entries(g).reduce((O,[L,H])=>`${O}${L}=${H},`,"");if(eR(_)&&m!=="_self")return PI(t||"",m),new Tv(null);const b=window.open(t||"",m,E);gt(b,r,"popup-blocked");try{b.focus()}catch{}return new Tv(b)}function PI(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const xI="__/auth/handler",LI="emulator/auth/handler",zI=encodeURIComponent("fac");async function Av(r,t,n,s,o,u){gt(r.config.authDomain,r,"auth-domain-config-required"),gt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Fs,eventId:o};if(t instanceof uT){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",Sb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,b]of Object.entries({}))f[E]=b}if(t instanceof Xl){const E=t.getScopes().filter(b=>b!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await r._getAppCheckToken(),_=g?`#${zI}=${encodeURIComponent(g)}`:"";return`${BI(r)}?${Kl(m).slice(1)}${_}`}function BI({config:r}){return r.emulator?Um(r,LI):`https://${r.authDomain}/${xI}`}/**
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
 */const Yd="webStorageSupport";class jI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bm,this._completeRedirectFn=hI,this._overrideRedirectResult=lI}async _openPopup(t,n,s,o){var u;$i((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await Av(t,n,s,am(),o);return UI(t,f,jm())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await Av(t,n,s,am(),o);return FR(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):($i(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await DI(t),s=new dI(t);return n.register("authEvent",o=>(gt(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Yd,{type:Yd},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Yd];f!==void 0&&n(!!f),Fn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return rT()||ZE()||xm()}}const qI=jI;var Sv="@firebase/auth",bv="1.10.0";/**
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
 */class HI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){gt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function FI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GI(r){Ls(new Br("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;gt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sT(r)},_=new oR(s,o,u,g);return _R(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Ls(new Br("auth-internal",t=>{const n=Gs(t.getProvider("auth").getImmediate());return(s=>new HI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fi(Sv,bv,FI(r)),fi(Sv,bv,"esm2017")}/**
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
 */const KI=5*60,QI=PE("authIdTokenMaxAge")||KI;let wv=null;const YI=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>QI)return;const o=n==null?void 0:n.token;wv!==o&&(wv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function XI(r=Mm()){const t=fh(r,"auth");if(t.isInitialized())return t.getImmediate();const n=gR(r,{popupRedirectResolver:qI,persistence:[JR,jR,Bm]}),s=PE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=YI(u.toString());PR(n,f,()=>f(n.currentUser)),UR(n,m=>f(m))}}const o=VE("auth");return o&&yR(n,`http://${o}`),n}function $I(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}lR({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=di("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",$I().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GI("Browser");var Rv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xr,AT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(M,S){function R(){}R.prototype=S.prototype,M.D=S.prototype,M.prototype=new R,M.prototype.constructor=M,M.C=function(N,V,U){for(var I=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)I[Pe-2]=arguments[Pe];return S.prototype[V].apply(N,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,S,R){R||(R=0);var N=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)N[V]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(V=0;16>V;++V)N[V]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=M.g[0],R=M.g[1],V=M.g[2];var U=M.g[3],I=S+(U^R&(V^U))+N[0]+3614090360&4294967295;S=R+(I<<7&4294967295|I>>>25),I=U+(V^S&(R^V))+N[1]+3905402710&4294967295,U=S+(I<<12&4294967295|I>>>20),I=V+(R^U&(S^R))+N[2]+606105819&4294967295,V=U+(I<<17&4294967295|I>>>15),I=R+(S^V&(U^S))+N[3]+3250441966&4294967295,R=V+(I<<22&4294967295|I>>>10),I=S+(U^R&(V^U))+N[4]+4118548399&4294967295,S=R+(I<<7&4294967295|I>>>25),I=U+(V^S&(R^V))+N[5]+1200080426&4294967295,U=S+(I<<12&4294967295|I>>>20),I=V+(R^U&(S^R))+N[6]+2821735955&4294967295,V=U+(I<<17&4294967295|I>>>15),I=R+(S^V&(U^S))+N[7]+4249261313&4294967295,R=V+(I<<22&4294967295|I>>>10),I=S+(U^R&(V^U))+N[8]+1770035416&4294967295,S=R+(I<<7&4294967295|I>>>25),I=U+(V^S&(R^V))+N[9]+2336552879&4294967295,U=S+(I<<12&4294967295|I>>>20),I=V+(R^U&(S^R))+N[10]+4294925233&4294967295,V=U+(I<<17&4294967295|I>>>15),I=R+(S^V&(U^S))+N[11]+2304563134&4294967295,R=V+(I<<22&4294967295|I>>>10),I=S+(U^R&(V^U))+N[12]+1804603682&4294967295,S=R+(I<<7&4294967295|I>>>25),I=U+(V^S&(R^V))+N[13]+4254626195&4294967295,U=S+(I<<12&4294967295|I>>>20),I=V+(R^U&(S^R))+N[14]+2792965006&4294967295,V=U+(I<<17&4294967295|I>>>15),I=R+(S^V&(U^S))+N[15]+1236535329&4294967295,R=V+(I<<22&4294967295|I>>>10),I=S+(V^U&(R^V))+N[1]+4129170786&4294967295,S=R+(I<<5&4294967295|I>>>27),I=U+(R^V&(S^R))+N[6]+3225465664&4294967295,U=S+(I<<9&4294967295|I>>>23),I=V+(S^R&(U^S))+N[11]+643717713&4294967295,V=U+(I<<14&4294967295|I>>>18),I=R+(U^S&(V^U))+N[0]+3921069994&4294967295,R=V+(I<<20&4294967295|I>>>12),I=S+(V^U&(R^V))+N[5]+3593408605&4294967295,S=R+(I<<5&4294967295|I>>>27),I=U+(R^V&(S^R))+N[10]+38016083&4294967295,U=S+(I<<9&4294967295|I>>>23),I=V+(S^R&(U^S))+N[15]+3634488961&4294967295,V=U+(I<<14&4294967295|I>>>18),I=R+(U^S&(V^U))+N[4]+3889429448&4294967295,R=V+(I<<20&4294967295|I>>>12),I=S+(V^U&(R^V))+N[9]+568446438&4294967295,S=R+(I<<5&4294967295|I>>>27),I=U+(R^V&(S^R))+N[14]+3275163606&4294967295,U=S+(I<<9&4294967295|I>>>23),I=V+(S^R&(U^S))+N[3]+4107603335&4294967295,V=U+(I<<14&4294967295|I>>>18),I=R+(U^S&(V^U))+N[8]+1163531501&4294967295,R=V+(I<<20&4294967295|I>>>12),I=S+(V^U&(R^V))+N[13]+2850285829&4294967295,S=R+(I<<5&4294967295|I>>>27),I=U+(R^V&(S^R))+N[2]+4243563512&4294967295,U=S+(I<<9&4294967295|I>>>23),I=V+(S^R&(U^S))+N[7]+1735328473&4294967295,V=U+(I<<14&4294967295|I>>>18),I=R+(U^S&(V^U))+N[12]+2368359562&4294967295,R=V+(I<<20&4294967295|I>>>12),I=S+(R^V^U)+N[5]+4294588738&4294967295,S=R+(I<<4&4294967295|I>>>28),I=U+(S^R^V)+N[8]+2272392833&4294967295,U=S+(I<<11&4294967295|I>>>21),I=V+(U^S^R)+N[11]+1839030562&4294967295,V=U+(I<<16&4294967295|I>>>16),I=R+(V^U^S)+N[14]+4259657740&4294967295,R=V+(I<<23&4294967295|I>>>9),I=S+(R^V^U)+N[1]+2763975236&4294967295,S=R+(I<<4&4294967295|I>>>28),I=U+(S^R^V)+N[4]+1272893353&4294967295,U=S+(I<<11&4294967295|I>>>21),I=V+(U^S^R)+N[7]+4139469664&4294967295,V=U+(I<<16&4294967295|I>>>16),I=R+(V^U^S)+N[10]+3200236656&4294967295,R=V+(I<<23&4294967295|I>>>9),I=S+(R^V^U)+N[13]+681279174&4294967295,S=R+(I<<4&4294967295|I>>>28),I=U+(S^R^V)+N[0]+3936430074&4294967295,U=S+(I<<11&4294967295|I>>>21),I=V+(U^S^R)+N[3]+3572445317&4294967295,V=U+(I<<16&4294967295|I>>>16),I=R+(V^U^S)+N[6]+76029189&4294967295,R=V+(I<<23&4294967295|I>>>9),I=S+(R^V^U)+N[9]+3654602809&4294967295,S=R+(I<<4&4294967295|I>>>28),I=U+(S^R^V)+N[12]+3873151461&4294967295,U=S+(I<<11&4294967295|I>>>21),I=V+(U^S^R)+N[15]+530742520&4294967295,V=U+(I<<16&4294967295|I>>>16),I=R+(V^U^S)+N[2]+3299628645&4294967295,R=V+(I<<23&4294967295|I>>>9),I=S+(V^(R|~U))+N[0]+4096336452&4294967295,S=R+(I<<6&4294967295|I>>>26),I=U+(R^(S|~V))+N[7]+1126891415&4294967295,U=S+(I<<10&4294967295|I>>>22),I=V+(S^(U|~R))+N[14]+2878612391&4294967295,V=U+(I<<15&4294967295|I>>>17),I=R+(U^(V|~S))+N[5]+4237533241&4294967295,R=V+(I<<21&4294967295|I>>>11),I=S+(V^(R|~U))+N[12]+1700485571&4294967295,S=R+(I<<6&4294967295|I>>>26),I=U+(R^(S|~V))+N[3]+2399980690&4294967295,U=S+(I<<10&4294967295|I>>>22),I=V+(S^(U|~R))+N[10]+4293915773&4294967295,V=U+(I<<15&4294967295|I>>>17),I=R+(U^(V|~S))+N[1]+2240044497&4294967295,R=V+(I<<21&4294967295|I>>>11),I=S+(V^(R|~U))+N[8]+1873313359&4294967295,S=R+(I<<6&4294967295|I>>>26),I=U+(R^(S|~V))+N[15]+4264355552&4294967295,U=S+(I<<10&4294967295|I>>>22),I=V+(S^(U|~R))+N[6]+2734768916&4294967295,V=U+(I<<15&4294967295|I>>>17),I=R+(U^(V|~S))+N[13]+1309151649&4294967295,R=V+(I<<21&4294967295|I>>>11),I=S+(V^(R|~U))+N[4]+4149444226&4294967295,S=R+(I<<6&4294967295|I>>>26),I=U+(R^(S|~V))+N[11]+3174756917&4294967295,U=S+(I<<10&4294967295|I>>>22),I=V+(S^(U|~R))+N[2]+718787259&4294967295,V=U+(I<<15&4294967295|I>>>17),I=R+(U^(V|~S))+N[9]+3951481745&4294967295,M.g[0]=M.g[0]+S&4294967295,M.g[1]=M.g[1]+(V+(I<<21&4294967295|I>>>11))&4294967295,M.g[2]=M.g[2]+V&4294967295,M.g[3]=M.g[3]+U&4294967295}s.prototype.u=function(M,S){S===void 0&&(S=M.length);for(var R=S-this.blockSize,N=this.B,V=this.h,U=0;U<S;){if(V==0)for(;U<=R;)o(this,M,U),U+=this.blockSize;if(typeof M=="string"){for(;U<S;)if(N[V++]=M.charCodeAt(U++),V==this.blockSize){o(this,N),V=0;break}}else for(;U<S;)if(N[V++]=M[U++],V==this.blockSize){o(this,N),V=0;break}}this.h=V,this.o+=S},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var S=1;S<M.length-8;++S)M[S]=0;var R=8*this.o;for(S=M.length-8;S<M.length;++S)M[S]=R&255,R/=256;for(this.u(M),M=Array(16),S=R=0;4>S;++S)for(var N=0;32>N;N+=8)M[R++]=this.g[S]>>>N&255;return M};function u(M,S){var R=m;return Object.prototype.hasOwnProperty.call(R,M)?R[M]:R[M]=S(M)}function f(M,S){this.h=S;for(var R=[],N=!0,V=M.length-1;0<=V;V--){var U=M[V]|0;N&&U==S||(R[V]=U,N=!1)}this.g=R}var m={};function g(M){return-128<=M&&128>M?u(M,function(S){return new f([S|0],0>S?-1:0)}):new f([M|0],0>M?-1:0)}function _(M){if(isNaN(M)||!isFinite(M))return b;if(0>M)return $(_(-M));for(var S=[],R=1,N=0;M>=R;N++)S[N]=M/R|0,R*=4294967296;return new f(S,0)}function E(M,S){if(M.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(M.charAt(0)=="-")return $(E(M.substring(1),S));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(S,8)),N=b,V=0;V<M.length;V+=8){var U=Math.min(8,M.length-V),I=parseInt(M.substring(V,V+U),S);8>U?(U=_(Math.pow(S,U)),N=N.j(U).add(_(I))):(N=N.j(R),N=N.add(_(I)))}return N}var b=g(0),O=g(1),L=g(16777216);r=f.prototype,r.m=function(){if(tt(this))return-$(this).m();for(var M=0,S=1,R=0;R<this.g.length;R++){var N=this.i(R);M+=(0<=N?N:4294967296+N)*S,S*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(H(this))return"0";if(tt(this))return"-"+$(this).toString(M);for(var S=_(Math.pow(M,6)),R=this,N="";;){var V=_t(R,S).g;R=Et(R,V.j(S));var U=((0<R.g.length?R.g[0]:R.h)>>>0).toString(M);if(R=V,H(R))return U+N;for(;6>U.length;)U="0"+U;N=U+N}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function H(M){if(M.h!=0)return!1;for(var S=0;S<M.g.length;S++)if(M.g[S]!=0)return!1;return!0}function tt(M){return M.h==-1}r.l=function(M){return M=Et(this,M),tt(M)?-1:H(M)?0:1};function $(M){for(var S=M.g.length,R=[],N=0;N<S;N++)R[N]=~M.g[N];return new f(R,~M.h).add(O)}r.abs=function(){return tt(this)?$(this):this},r.add=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0,V=0;V<=S;V++){var U=N+(this.i(V)&65535)+(M.i(V)&65535),I=(U>>>16)+(this.i(V)>>>16)+(M.i(V)>>>16);N=I>>>16,U&=65535,I&=65535,R[V]=I<<16|U}return new f(R,R[R.length-1]&-2147483648?-1:0)};function Et(M,S){return M.add($(S))}r.j=function(M){if(H(this)||H(M))return b;if(tt(this))return tt(M)?$(this).j($(M)):$($(this).j(M));if(tt(M))return $(this.j($(M)));if(0>this.l(L)&&0>M.l(L))return _(this.m()*M.m());for(var S=this.g.length+M.g.length,R=[],N=0;N<2*S;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<M.g.length;V++){var U=this.i(N)>>>16,I=this.i(N)&65535,Pe=M.i(V)>>>16,ae=M.i(V)&65535;R[2*N+2*V]+=I*ae,dt(R,2*N+2*V),R[2*N+2*V+1]+=U*ae,dt(R,2*N+2*V+1),R[2*N+2*V+1]+=I*Pe,dt(R,2*N+2*V+1),R[2*N+2*V+2]+=U*Pe,dt(R,2*N+2*V+2)}for(N=0;N<S;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=S;N<2*S;N++)R[N]=0;return new f(R,0)};function dt(M,S){for(;(M[S]&65535)!=M[S];)M[S+1]+=M[S]>>>16,M[S]&=65535,S++}function ot(M,S){this.g=M,this.h=S}function _t(M,S){if(H(S))throw Error("division by zero");if(H(M))return new ot(b,b);if(tt(M))return S=_t($(M),S),new ot($(S.g),$(S.h));if(tt(S))return S=_t(M,$(S)),new ot($(S.g),S.h);if(30<M.g.length){if(tt(M)||tt(S))throw Error("slowDivide_ only works with positive integers.");for(var R=O,N=S;0>=N.l(M);)R=mt(R),N=mt(N);var V=wt(R,1),U=wt(N,1);for(N=wt(N,2),R=wt(R,2);!H(N);){var I=U.add(N);0>=I.l(M)&&(V=V.add(R),U=I),N=wt(N,1),R=wt(R,1)}return S=Et(M,V.j(S)),new ot(V,S)}for(V=b;0<=M.l(S);){for(R=Math.max(1,Math.floor(M.m()/S.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),U=_(R),I=U.j(S);tt(I)||0<I.l(M);)R-=N,U=_(R),I=U.j(S);H(U)&&(U=O),V=V.add(U),M=Et(M,I)}return new ot(V,M)}r.A=function(M){return _t(this,M).h},r.and=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)&M.i(N);return new f(R,this.h&M.h)},r.or=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)|M.i(N);return new f(R,this.h|M.h)},r.xor=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)^M.i(N);return new f(R,this.h^M.h)};function mt(M){for(var S=M.g.length+1,R=[],N=0;N<S;N++)R[N]=M.i(N)<<1|M.i(N-1)>>>31;return new f(R,M.h)}function wt(M,S){var R=S>>5;S%=32;for(var N=M.g.length-R,V=[],U=0;U<N;U++)V[U]=0<S?M.i(U+R)>>>S|M.i(U+R+1)<<32-S:M.i(U+R);return new f(V,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,AT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=_,f.fromString=E,xr=f}).apply(typeof Rv<"u"?Rv:typeof self<"u"?self:typeof window<"u"?window:{});var Ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ST,wl,bT,Lc,cm,wT,RT,IT;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,y){return c==Array.prototype||c==Object.prototype||(c[p]=y.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ic=="object"&&Ic];for(var p=0;p<c.length;++p){var y=c[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=n(this);function o(c,p){if(p)t:{var y=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var P=c[A];if(!(P in y))break t;y=y[P]}c=c[c.length-1],A=y[c],p=p(A),p!=A&&p!=null&&t(y,c,{configurable:!0,writable:!0,value:p})}}function u(c,p){c instanceof String&&(c+="");var y=0,A=!1,P={next:function(){if(!A&&y<c.length){var q=y++;return{value:p(q,c[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}o("Array.prototype.values",function(c){return c||function(){return u(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function g(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function _(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function E(c,p,y){return c.call.apply(c.bind,arguments)}function b(c,p,y){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,A),c.apply(p,P)}}return function(){return c.apply(p,arguments)}}function O(c,p,y){return O=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:b,O.apply(null,arguments)}function L(c,p){var y=Array.prototype.slice.call(arguments,1);return function(){var A=y.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function H(c,p){function y(){}y.prototype=p.prototype,c.aa=p.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(A,P,q){for(var et=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)et[kt-2]=arguments[kt];return p.prototype[P].apply(A,et)}}function tt(c){const p=c.length;if(0<p){const y=Array(p);for(let A=0;A<p;A++)y[A]=c[A];return y}return[]}function $(c,p){for(let y=1;y<arguments.length;y++){const A=arguments[y];if(g(A)){const P=c.length||0,q=A.length||0;c.length=P+q;for(let et=0;et<q;et++)c[P+et]=A[et]}else c.push(A)}}class Et{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function dt(c){return/^[\s\xa0]*$/.test(c)}function ot(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function _t(c){return _t[" "](c),c}_t[" "]=function(){};var mt=ot().indexOf("Gecko")!=-1&&!(ot().toLowerCase().indexOf("webkit")!=-1&&ot().indexOf("Edge")==-1)&&!(ot().indexOf("Trident")!=-1||ot().indexOf("MSIE")!=-1)&&ot().indexOf("Edge")==-1;function wt(c,p,y){for(const A in c)p.call(y,c[A],A,c)}function M(c,p){for(const y in c)p.call(void 0,c[y],y,c)}function S(c){const p={};for(const y in c)p[y]=c[y];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,p){let y,A;for(let P=1;P<arguments.length;P++){A=arguments[P];for(y in A)c[y]=A[y];for(let q=0;q<R.length;q++)y=R[q],Object.prototype.hasOwnProperty.call(A,y)&&(c[y]=A[y])}}function V(c){var p=1;c=c.split(":");const y=[];for(;0<p&&c.length;)y.push(c.shift()),p--;return c.length&&y.push(c.join(":")),y}function U(c){m.setTimeout(()=>{throw c},0)}function I(){var c=zt;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class Pe{constructor(){this.h=this.g=null}add(p,y){const A=ae.get();A.set(p,y),this.h?this.h.next=A:this.g=A,this.h=A}}var ae=new Et(()=>new F,c=>c.reset());class F{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,ut=!1,zt=new Pe,C=()=>{const c=m.Promise.resolve(void 0);nt=()=>{c.then(W)}};var W=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(y){U(y)}var p=ae;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}ut=!1};function it(){this.s=this.s,this.C=this.C}it.prototype.s=!1,it.prototype.ma=function(){this.s||(this.s=!0,this.N())},it.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var ht=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};m.addEventListener("test",y,p),m.removeEventListener("test",y,p)}catch{}return c}();function Ct(c,p){if(J.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(mt){t:{try{_t(p.nodeName);var P=!0;break t}catch{}P=!1}P||(p=null)}}else y=="mouseover"?p=c.fromElement:y=="mouseout"&&(p=c.toElement);this.relatedTarget=p,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Tt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ct.aa.h.call(this)}}H(Ct,J);var Tt={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Zt=0;function Qn(c,p,y,A,P){this.listener=c,this.proxy=null,this.src=p,this.type=y,this.capture=!!A,this.ha=P,this.key=++Zt,this.da=this.fa=!1}function Ji(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function vi(c){this.src=c,this.g={},this.h=0}vi.prototype.add=function(c,p,y,A,P){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var et=Zr(c,p,A,P);return-1<et?(p=c[et],y||(p.fa=!1)):(p=new Qn(p,this.src,q,!!A,P),p.fa=y,c.push(p)),p};function Wr(c,p){var y=p.type;if(y in c.g){var A=c.g[y],P=Array.prototype.indexOf.call(A,p,void 0),q;(q=0<=P)&&Array.prototype.splice.call(A,P,1),q&&(Ji(p),c.g[y].length==0&&(delete c.g[y],c.h--))}}function Zr(c,p,y,A){for(var P=0;P<c.length;++P){var q=c[P];if(!q.da&&q.listener==p&&q.capture==!!y&&q.ha==A)return P}return-1}var Jr="closure_lm_"+(1e6*Math.random()|0),ho={};function nu(c,p,y,A,P){if(Array.isArray(p)){for(var q=0;q<p.length;q++)nu(c,p[q],y,A,P);return null}return y=iu(y),c&&c[De]?c.K(p,y,_(A)?!!A.capture:!1,P):An(c,p,y,!1,A,P)}function An(c,p,y,A,P,q){if(!p)throw Error("Invalid event type");var et=_(P)?!!P.capture:!!P,kt=Ws(c);if(kt||(c[Jr]=kt=new vi(c)),y=kt.add(p,y,A,et,q),y.proxy)return y;if(A=Uh(),y.proxy=A,A.src=c,A.listener=y,c.addEventListener)ht||(P=et),P===void 0&&(P=!1),c.addEventListener(p.toString(),A,P);else if(c.attachEvent)c.attachEvent(ts(p.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Uh(){function c(y){return p.call(c.src,c.listener,y)}const p=Ph;return c}function fo(c,p,y,A,P){if(Array.isArray(p))for(var q=0;q<p.length;q++)fo(c,p[q],y,A,P);else A=_(A)?!!A.capture:!!A,y=iu(y),c&&c[De]?(c=c.i,p=String(p).toString(),p in c.g&&(q=c.g[p],y=Zr(q,y,A,P),-1<y&&(Ji(q[y]),Array.prototype.splice.call(q,y,1),q.length==0&&(delete c.g[p],c.h--)))):c&&(c=Ws(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Zr(p,y,A,P)),(y=-1<c?p[c]:null)&&$s(y))}function $s(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[De])Wr(p.i,c);else{var y=c.type,A=c.proxy;p.removeEventListener?p.removeEventListener(y,A,c.capture):p.detachEvent?p.detachEvent(ts(y),A):p.addListener&&p.removeListener&&p.removeListener(A),(y=Ws(p))?(Wr(y,c),y.h==0&&(y.src=null,p[Jr]=null)):Ji(c)}}}function ts(c){return c in ho?ho[c]:ho[c]="on"+c}function Ph(c,p){if(c.da)c=!0;else{p=new Ct(p,this);var y=c.listener,A=c.ha||c.src;c.fa&&$s(c),c=y.call(A,p)}return c}function Ws(c){return c=c[Jr],c instanceof vi?c:null}var mo="__closure_events_fn_"+(1e9*Math.random()>>>0);function iu(c){return typeof c=="function"?c:(c[mo]||(c[mo]=function(p){return c.handleEvent(p)}),c[mo])}function oe(){it.call(this),this.i=new vi(this),this.M=this,this.F=null}H(oe,it),oe.prototype[De]=!0,oe.prototype.removeEventListener=function(c,p,y,A){fo(this,c,p,y,A)};function Ht(c,p){var y,A=c.F;if(A)for(y=[];A;A=A.F)y.push(A);if(c=c.M,A=p.type||p,typeof p=="string")p=new J(p,c);else if(p instanceof J)p.target=p.target||c;else{var P=p;p=new J(A,c),N(p,P)}if(P=!0,y)for(var q=y.length-1;0<=q;q--){var et=p.g=y[q];P=cn(et,A,!0,p)&&P}if(et=p.g=c,P=cn(et,A,!0,p)&&P,P=cn(et,A,!1,p)&&P,y)for(q=0;q<y.length;q++)et=p.g=y[q],P=cn(et,A,!1,p)&&P}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var y=c.g[p],A=0;A<y.length;A++)Ji(y[A]);delete c.g[p],c.h--}}this.F=null},oe.prototype.K=function(c,p,y,A){return this.i.add(String(c),p,!1,y,A)},oe.prototype.L=function(c,p,y,A){return this.i.add(String(c),p,!0,y,A)};function cn(c,p,y,A){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var P=!0,q=0;q<p.length;++q){var et=p[q];if(et&&!et.da&&et.capture==y){var kt=et.listener,be=et.ha||et.src;et.fa&&Wr(c.i,et),P=kt.call(be,A)!==!1&&P}}return P&&!A.defaultPrevented}function Ge(c,p,y){if(typeof c=="function")y&&(c=O(c,y));else if(c&&typeof c.handleEvent=="function")c=O(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:m.setTimeout(c,p||0)}function ru(c){c.g=Ge(()=>{c.g=null,c.i&&(c.i=!1,ru(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class xh extends it{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:ru(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(c){it.call(this),this.h=c,this.g={}}H(es,it);var ns=[];function is(c){wt(c.g,function(p,y){this.g.hasOwnProperty(y)&&$s(p)},c),c.g={}}es.prototype.N=function(){es.aa.N.call(this),is(this)},es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pn=m.JSON.stringify,Zs=m.JSON.parse,rs=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function po(){}po.prototype.h=null;function go(c){return c.h||(c.h=c.i())}function _o(){}var Ei={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ti(){J.call(this,"d")}H(Ti,J);function yo(){J.call(this,"c")}H(yo,J);var Yn={},vo=null;function tr(){return vo=vo||new oe}Yn.La="serverreachability";function Js(c){J.call(this,Yn.La,c)}H(Js,J);function er(c){const p=tr();Ht(p,new Js(p))}Yn.STAT_EVENT="statevent";function su(c,p){J.call(this,Yn.STAT_EVENT,c),this.stat=p}H(su,J);function ee(c){const p=tr();Ht(p,new su(p,c))}Yn.Ma="timingevent";function Se(c,p){J.call(this,Yn.Ma,c),this.size=p}H(Se,J);function ge(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},p)}function Sn(){this.g=!0}Sn.prototype.xa=function(){this.g=!1};function Eo(c,p,y,A,P,q){c.info(function(){if(c.g)if(q)for(var et="",kt=q.split("&"),be=0;be<kt.length;be++){var Ut=kt[be].split("=");if(1<Ut.length){var Ne=Ut[0];Ut=Ut[1];var we=Ne.split("_");et=2<=we.length&&we[1]=="type"?et+(Ne+"="+Ut+"&"):et+(Ne+"=redacted&")}}else et=null;else et=q;return"XMLHTTP REQ ("+A+") [attempt "+P+"]: "+p+`
`+y+`
`+et})}function Lh(c,p,y,A,P,q,et){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+P+"]: "+p+`
`+y+`
`+q+" "+et})}function nr(c,p,y,A){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+ss(c,y)+(A?" "+A:"")})}function au(c,p){c.info(function(){return"TIMEOUT: "+p})}Sn.prototype.info=function(){};function ss(c,p){if(!c.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var A=y[c];if(!(2>A.length)){var P=A[1];if(Array.isArray(P)&&!(1>P.length)){var q=P[0];if(q!="noop"&&q!="stop"&&q!="close")for(var et=1;et<P.length;et++)P[et]=""}}}}return Pn(y)}catch{return p}}var ir={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ai={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xn;function $n(){}H($n,po),$n.prototype.g=function(){return new XMLHttpRequest},$n.prototype.i=function(){return{}},Xn=new $n;function Ze(c,p,y,A){this.j=c,this.i=p,this.l=y,this.R=A||1,this.U=new es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fe}function fe(){this.i=null,this.g="",this.h=!1}var To={},ta={};function xn(c,p,y){c.L=1,c.v=cs(hn(p)),c.m=y,c.P=!0,Si(c,null)}function Si(c,p){c.F=Date.now(),as(c),c.A=hn(c.v);var y=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Io(y.i,"t",A),c.C=0,y=c.j.J,c.h=new fe,c.g=Au(c.j,y?p:null,!c.m),0<c.O&&(c.M=new xh(O(c.Y,c,c.g),c.O)),p=c.U,y=c.g,A=c.ca;var P="readystatechange";Array.isArray(P)||(P&&(ns[0]=P.toString()),P=ns);for(var q=0;q<P.length;q++){var et=nu(y,P[q],A||p.handleEvent,!1,p.h||p);if(!et)break;p.g[et.key]=et}p=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),er(),Eo(c.i,c.u,c.A,c.l,c.R,c.m)}Ze.prototype.ca=function(c){c=c.target;const p=this.M;p&&In(c)==3?p.j():this.Y(c)},Ze.prototype.Y=function(c){try{if(c==this.g)t:{const we=In(this.g);var p=this.g.Ba();const Ni=this.g.Z();if(!(3>we)&&(we!=3||this.g&&(this.h.h||this.g.oa()||mu(this.g)))){this.J||we!=4||p==7||(p==8||0>=Ni?er(3):er(2)),rr(this);var y=this.g.Z();this.X=y;e:if(ou(this)){var A=mu(this.g);c="";var P=A.length,q=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xe(this),Wn(this);var et="";break e}this.h.i=new m.TextDecoder}for(p=0;p<P;p++)this.h.h=!0,c+=this.h.i.decode(A[p],{stream:!(q&&p==P-1)});A.length=0,this.h.g+=c,this.C=0,et=this.h.g}else et=this.g.oa();if(this.o=y==200,Lh(this.i,this.u,this.A,this.l,this.R,we,y),this.o){if(this.T&&!this.K){e:{if(this.g){var kt,be=this.g;if((kt=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dt(kt)){var Ut=kt;break e}}Ut=null}if(y=Ut)nr(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,os(this,y);else{this.o=!1,this.s=3,ee(12),xe(this),Wn(this);break t}}if(this.P){y=!0;let Le;for(;!this.J&&this.C<et.length;)if(Le=lu(this,et),Le==ta){we==4&&(this.s=4,ee(14),y=!1),nr(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==To){this.s=4,ee(15),nr(this.i,this.l,et,"[Invalid Chunk]"),y=!1;break}else nr(this.i,this.l,Le,null),os(this,Le);if(ou(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||et.length!=0||this.h.h||(this.s=1,ee(16),y=!1),this.o=this.o&&y,!y)nr(this.i,this.l,et,"[Invalid Chunked Response]"),xe(this),Wn(this);else if(0<et.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+et.length),ys(Ne),Ne.M=!0,ee(11))}}else nr(this.i,this.l,et,null),os(this,et);we==4&&xe(this),this.o&&!this.J&&(we==4?vu(this.j,this):(this.o=!1,as(this)))}else Hh(this.g),y==400&&0<et.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),xe(this),Wn(this)}}}catch{}finally{}};function ou(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function lu(c,p){var y=c.C,A=p.indexOf(`
`,y);return A==-1?ta:(y=Number(p.substring(y,A)),isNaN(y)?To:(A+=1,A+y>p.length?ta:(p=p.slice(A,A+y),c.C=A+y,p)))}Ze.prototype.cancel=function(){this.J=!0,xe(this)};function as(c){c.S=Date.now()+c.I,uu(c,c.I)}function uu(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=ge(O(c.ba,c),p)}function rr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Ze.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(au(this.i,this.A),this.L!=2&&(er(),ee(17)),xe(this),this.s=2,Wn(this)):uu(this,this.S-c)};function Wn(c){c.j.G==0||c.J||vu(c.j,c)}function xe(c){rr(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,is(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function os(c,p){try{var y=c.j;if(y.G!=0&&(y.g==c||Ao(y.h,c))){if(!c.K&&Ao(y.h,c)&&y.G==3){try{var A=y.Da.g.parse(p)}catch{A=null}if(Array.isArray(A)&&A.length==3){var P=A;if(P[0]==0){t:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)fa(y),ca(y);else break t;Mo(y),ee(18)}}else y.za=P[1],0<y.za-y.T&&37500>P[2]&&y.F&&y.v==0&&!y.C&&(y.C=ge(O(y.Za,y),6e3));if(1>=na(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Oi(y,11)}else if((c.K||y.g==c)&&fa(y),!dt(p))for(P=y.Da.g.parse(p),p=0;p<P.length;p++){let Ut=P[p];if(y.T=Ut[0],Ut=Ut[1],y.G==2)if(Ut[0]=="c"){y.K=Ut[1],y.ia=Ut[2];const Ne=Ut[3];Ne!=null&&(y.la=Ne,y.j.info("VER="+y.la));const we=Ut[4];we!=null&&(y.Aa=we,y.j.info("SVER="+y.Aa));const Ni=Ut[5];Ni!=null&&typeof Ni=="number"&&0<Ni&&(A=1.5*Ni,y.L=A,y.j.info("backChannelRequestTimeoutMs_="+A)),A=y;const Le=c.g;if(Le){const ri=Le.g?Le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ri){var q=A.h;q.g||ri.indexOf("spdy")==-1&&ri.indexOf("quic")==-1&&ri.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(ia(q,q.h),q.h=null))}if(A.D){const ko=Le.g?Le.g.getResponseHeader("X-HTTP-Session-Id"):null;ko&&(A.ya=ko,Kt(A.I,A.D,ko))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),A=y;var et=c;if(A.qa=Tu(A,A.J?A.ia:null,A.W),et.K){Je(A.h,et);var kt=et,be=A.L;be&&(kt.I=be),kt.B&&(rr(kt),as(kt)),A.g=et}else _u(A);0<y.i.length&&ha(y)}else Ut[0]!="stop"&&Ut[0]!="close"||Oi(y,7);else y.G==3&&(Ut[0]=="stop"||Ut[0]=="close"?Ut[0]=="stop"?Oi(y,7):Oo(y):Ut[0]!="noop"&&y.l&&y.l.ta(Ut),y.v=0)}}er(4)}catch{}}var cu=class{constructor(c,p){this.g=c,this.map=p}};function bi(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ea(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function na(c){return c.h?1:c.g?c.g.size:0}function Ao(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function ia(c,p){c.g?c.g.add(p):c.h=p}function Je(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}bi.prototype.cancel=function(){if(this.i=So(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function So(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const y of c.g.values())p=p.concat(y.D);return p}return tt(c.i)}function zh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var p=[],y=c.length,A=0;A<y;A++)p.push(c[A]);return p}p=[],y=0;for(A in c)p[y++]=c[A];return p}function ra(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var p=[];c=c.length;for(var y=0;y<c;y++)p.push(y);return p}p=[],y=0;for(const A in c)p[y++]=A;return p}}}function bo(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var y=ra(c),A=zh(c),P=A.length,q=0;q<P;q++)p.call(void 0,A[q],y&&y[q],c)}var ls=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bh(c,p){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var A=c[y].indexOf("="),P=null;if(0<=A){var q=c[y].substring(0,A);P=c[y].substring(A+1)}else q=c[y];p(q,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function _e(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof _e){this.h=c.h,us(this,c.j),this.o=c.o,this.g=c.g,sr(this,c.s),this.l=c.l;var p=c.i,y=new Ri;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),wi(this,y),this.m=c.m}else c&&(p=String(c).match(ls))?(this.h=!1,us(this,p[1]||"",!0),this.o=bn(p[2]||""),this.g=bn(p[3]||"",!0),sr(this,p[4]),this.l=bn(p[5]||"",!0),wi(this,p[6]||"",!0),this.m=bn(p[7]||"")):(this.h=!1,this.i=new Ri(null,this.h))}_e.prototype.toString=function(){var c=[],p=this.j;p&&c.push(hs(p,wo,!0),":");var y=this.g;return(y||p=="file")&&(c.push("//"),(p=this.o)&&c.push(hs(p,wo,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(hs(y,y.charAt(0)=="/"?jh:Ro,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",hs(y,sa)),c.join("")};function hn(c){return new _e(c)}function us(c,p,y){c.j=y?bn(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function sr(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function wi(c,p,y){p instanceof Ri?(c.i=p,fu(c.i,c.h)):(y||(p=hs(p,qh)),c.i=new Ri(p,c.h))}function Kt(c,p,y){c.i.set(p,y)}function cs(c){return Kt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function bn(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function hs(c,p,y){return typeof c=="string"?(c=encodeURI(c).replace(p,hu),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function hu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var wo=/[#\/\?@]/g,Ro=/[#\?:]/g,jh=/[#\?]/g,qh=/[#\?@]/g,sa=/#/g;function Ri(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function wn(c){c.g||(c.g=new Map,c.h=0,c.i&&Bh(c.i,function(p,y){c.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Ri.prototype,r.add=function(c,p){wn(this),this.i=null,c=Zn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(p),this.h+=1,this};function Ii(c,p){wn(c),p=Zn(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function Ci(c,p){return wn(c),p=Zn(c,p),c.g.has(p)}r.forEach=function(c,p){wn(this),this.g.forEach(function(y,A){y.forEach(function(P){c.call(p,P,A,this)},this)},this)},r.na=function(){wn(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let A=0;A<p.length;A++){const P=c[A];for(let q=0;q<P.length;q++)y.push(p[A])}return y},r.V=function(c){wn(this);let p=[];if(typeof c=="string")Ci(this,c)&&(p=p.concat(this.g.get(Zn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)p=p.concat(c[y])}return p},r.set=function(c,p){return wn(this),this.i=null,c=Zn(this,c),Ci(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},r.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function Io(c,p,y){Ii(c,p),0<y.length&&(c.i=null,c.g.set(Zn(c,p),tt(y)),c.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var A=p[y];const q=encodeURIComponent(String(A)),et=this.V(A);for(A=0;A<et.length;A++){var P=q;et[A]!==""&&(P+="="+encodeURIComponent(String(et[A]))),c.push(P)}}return this.i=c.join("&")};function Zn(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function fu(c,p){p&&!c.j&&(wn(c),c.i=null,c.g.forEach(function(y,A){var P=A.toLowerCase();A!=P&&(Ii(this,A),Io(this,P,y))},c)),c.j=p}function fs(c,p){const y=new Sn;if(m.Image){const A=new Image;A.onload=L(Rn,y,"TestLoadImage: loaded",!0,p,A),A.onerror=L(Rn,y,"TestLoadImage: error",!1,p,A),A.onabort=L(Rn,y,"TestLoadImage: abort",!1,p,A),A.ontimeout=L(Rn,y,"TestLoadImage: timeout",!1,p,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else p(!1)}function Ln(c,p){const y=new Sn,A=new AbortController,P=setTimeout(()=>{A.abort(),Rn(y,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:A.signal}).then(q=>{clearTimeout(P),q.ok?Rn(y,"TestPingServer: ok",!0,p):Rn(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(P),Rn(y,"TestPingServer: error",!1,p)})}function Rn(c,p,y,A,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),A(y)}catch{}}function ds(){this.g=new rs}function Jn(c,p,y){const A=y||"";try{bo(c,function(P,q){let et=P;_(P)&&(et=Pn(P)),p.push(A+q+"="+encodeURIComponent(et))})}catch(P){throw p.push(A+"type="+encodeURIComponent("_badmap")),P}}function ar(c){this.l=c.Ub||null,this.j=c.eb||!1}H(ar,po),ar.prototype.g=function(){return new Di(this.l,this.j)},ar.prototype.i=function(c){return function(){return c}}({});function Di(c,p){oe.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}H(Di,oe),r=Di.prototype,r.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,ei(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||m).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Co(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Co(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?ti(this):ei(this),this.readyState==3&&Co(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ti(this))},r.Qa=function(c){this.g&&(this.response=c,ti(this))},r.ga=function(){this.g&&ti(this)};function ti(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ei(c)}r.setRequestHeader=function(c,p){this.u.append(c,p)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=p.next();return c.join(`\r
`)};function ei(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Do(c){let p="";return wt(c,function(y,A){p+=A,p+=":",p+=y,p+=`\r
`}),p}function Oe(c,p,y){t:{for(A in y){var A=!1;break t}A=!0}A||(y=Do(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Kt(c,p,y))}function jt(c){oe.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}H(jt,oe);var aa=/^https?$/i,ms=["POST","PUT"];r=jt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,p,y,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xn.g(),this.v=this.o?go(this.o):go(Xn),this.g.onreadystatechange=O(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(q){du(this,q);return}if(c=y||"",y=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var P in A)y.set(P,A[P]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())y.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(y.keys()).find(q=>q.toLowerCase()=="content-type"),P=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ms,p,void 0))||A||P||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,et]of y)this.g.setRequestHeader(q,et);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ps(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){du(this,q)}};function du(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,oa(c),ni(c)}function oa(c){c.A||(c.A=!0,Ht(c,"complete"),Ht(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ht(this,"complete"),Ht(this,"abort"),ni(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ni(this,!0)),jt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?la(this):this.bb())},r.bb=function(){la(this)};function la(c){if(c.h&&typeof f<"u"&&(!c.v[1]||In(c)!=4||c.Z()!=2)){if(c.u&&In(c)==4)Ge(c.Ea,0,c);else if(Ht(c,"readystatechange"),In(c)==4){c.h=!1;try{const et=c.Z();t:switch(et){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var y;if(!(y=p)){var A;if(A=et===0){var P=String(c.D).match(ls)[1]||null;!P&&m.self&&m.self.location&&(P=m.self.location.protocol.slice(0,-1)),A=!aa.test(P?P.toLowerCase():"")}y=A}if(y)Ht(c,"complete"),Ht(c,"success");else{c.m=6;try{var q=2<In(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",oa(c)}}finally{ni(c)}}}}function ni(c,p){if(c.g){ps(c);const y=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||Ht(c,"ready");try{y.onreadystatechange=A}catch{}}}function ps(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function In(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),Zs(p)}};function mu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Hh(c){const p={};c=(c.g&&2<=In(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(dt(c[A]))continue;var y=V(c[A]);const P=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const q=p[P]||[];p[P]=q,q.push(y)}M(p,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gs(c,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||p}function ua(c){this.Aa=0,this.i=[],this.j=new Sn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gs("baseRetryDelayMs",5e3,c),this.cb=gs("retryDelaySeedMs",1e4,c),this.Wa=gs("forwardChannelMaxRetries",2,c),this.wa=gs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new bi(c&&c.concurrentRequestLimit),this.Da=new ds,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ua.prototype,r.la=8,r.G=1,r.connect=function(c,p,y,A){ee(0),this.W=c,this.H=p||{},y&&A!==void 0&&(this.H.OSID=y,this.H.OAID=A),this.F=this.X,this.I=Tu(this,null,this.W),ha(this)};function Oo(c){if(pu(c),c.G==3){var p=c.U++,y=hn(c.I);if(Kt(y,"SID",c.K),Kt(y,"RID",p),Kt(y,"TYPE","terminate"),_s(c,y),p=new Ze(c,c.j,p),p.L=2,p.v=cs(hn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=p.v,y=!0),y||(p.g=Au(p.j,null),p.g.ea(p.v)),p.F=Date.now(),as(p)}Eu(c)}function ca(c){c.g&&(ys(c),c.g.cancel(),c.g=null)}function pu(c){ca(c),c.u&&(m.clearTimeout(c.u),c.u=null),fa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ha(c){if(!ea(c.h)&&!c.s){c.s=!0;var p=c.Ga;nt||C(),ut||(nt(),ut=!0),zt.add(p,c),c.B=0}}function Fh(c,p){return na(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=ge(O(c.Ga,c,p),Vo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const P=new Ze(this,this.j,c);let q=this.o;if(this.S&&(q?(q=S(q),N(q,this.S)):q=this.S),this.m!==null||this.O||(P.H=q,q=null),this.P)t:{for(var p=0,y=0;y<this.i.length;y++){e:{var A=this.i[y];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(p+=A,4096<p){p=y;break t}if(p===4096||y===this.i.length-1){p=y+1;break t}}p=1e3}else p=1e3;p=gu(this,P,p),y=hn(this.I),Kt(y,"RID",c),Kt(y,"CVER",22),this.D&&Kt(y,"X-HTTP-Session-Id",this.D),_s(this,y),q&&(this.O?p="headers="+encodeURIComponent(String(Do(q)))+"&"+p:this.m&&Oe(y,this.m,q)),ia(this.h,P),this.Ua&&Kt(y,"TYPE","init"),this.P?(Kt(y,"$req",p),Kt(y,"SID","null"),P.T=!0,xn(P,y,null)):xn(P,y,p),this.G=2}}else this.G==3&&(c?No(this,c):this.i.length==0||ea(this.h)||No(this))};function No(c,p){var y;p?y=p.l:y=c.U++;const A=hn(c.I);Kt(A,"SID",c.K),Kt(A,"RID",y),Kt(A,"AID",c.T),_s(c,A),c.m&&c.o&&Oe(A,c.m,c.o),y=new Ze(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),p&&(c.i=p.D.concat(c.i)),p=gu(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ia(c.h,y),xn(y,A,p)}function _s(c,p){c.H&&wt(c.H,function(y,A){Kt(p,A,y)}),c.l&&bo({},function(y,A){Kt(p,A,y)})}function gu(c,p,y){y=Math.min(c.i.length,y);var A=c.l?O(c.l.Na,c.l,c):null;t:{var P=c.i;let q=-1;for(;;){const et=["count="+y];q==-1?0<y?(q=P[0].g,et.push("ofs="+q)):q=0:et.push("ofs="+q);let kt=!0;for(let be=0;be<y;be++){let Ut=P[be].g;const Ne=P[be].map;if(Ut-=q,0>Ut)q=Math.max(0,P[be].g-100),kt=!1;else try{Jn(Ne,et,"req"+Ut+"_")}catch{A&&A(Ne)}}if(kt){A=et.join("&");break t}}}return c=c.i.splice(0,y),p.D=c,A}function _u(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;nt||C(),ut||(nt(),ut=!0),zt.add(p,c),c.v=0}}function Mo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=ge(O(c.Fa,c),Vo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,yu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=ge(O(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ee(10),ca(this),yu(this))};function ys(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function yu(c){c.g=new Ze(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=hn(c.qa);Kt(p,"RID","rpc"),Kt(p,"SID",c.K),Kt(p,"AID",c.T),Kt(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&Kt(p,"TO",c.ja),Kt(p,"TYPE","xmlhttp"),_s(c,p),c.m&&c.o&&Oe(p,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=cs(hn(p)),y.m=null,y.P=!0,Si(y,c)}r.Za=function(){this.C!=null&&(this.C=null,ca(this),Mo(this),ee(19))};function fa(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function vu(c,p){var y=null;if(c.g==p){fa(c),ys(c),c.g=null;var A=2}else if(Ao(c.h,p))y=p.D,Je(c.h,p),A=1;else return;if(c.G!=0){if(p.o)if(A==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var P=c.B;A=tr(),Ht(A,new Se(A,y)),ha(c)}else _u(c);else if(P=p.s,P==3||P==0&&0<p.X||!(A==1&&Fh(c,p)||A==2&&Mo(c)))switch(y&&0<y.length&&(p=c.h,p.i=p.i.concat(y)),P){case 1:Oi(c,5);break;case 4:Oi(c,10);break;case 3:Oi(c,6);break;default:Oi(c,2)}}}function Vo(c,p){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*p}function Oi(c,p){if(c.j.info("Error code "+p),p==2){var y=O(c.fb,c),A=c.Xa;const P=!A;A=new _e(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||us(A,"https"),cs(A),P?fs(A.toString(),y):Ln(A.toString(),y)}else ee(2);c.G=0,c.l&&c.l.sa(p),Eu(c),pu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function Eu(c){if(c.G=0,c.ka=[],c.l){const p=So(c.h);(p.length!=0||c.i.length!=0)&&($(c.ka,p),$(c.ka,c.i),c.h.i.length=0,tt(c.i),c.i.length=0),c.l.ra()}}function Tu(c,p,y){var A=y instanceof _e?hn(y):new _e(y);if(A.g!="")p&&(A.g=p+"."+A.g),sr(A,A.s);else{var P=m.location;A=P.protocol,p=p?p+"."+P.hostname:P.hostname,P=+P.port;var q=new _e(null);A&&us(q,A),p&&(q.g=p),P&&sr(q,P),y&&(q.l=y),A=q}return y=c.D,p=c.ya,y&&p&&Kt(A,y,p),Kt(A,"VER",c.la),_s(c,A),A}function Au(c,p,y){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new jt(new ar({eb:y})):new jt(c.pa),p.Ha(c.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Su(){}r=Su.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function da(){}da.prototype.g=function(c,p){return new tn(c,p)};function tn(c,p){oe.call(this),this.g=new ua(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!dt(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!dt(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new ii(this)}H(tn,oe),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Oo(this.g)},tn.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=Pn(c),c=y);p.i.push(new cu(p.Ya++,c)),p.G==3&&ha(p)},tn.prototype.N=function(){this.g.l=null,delete this.j,Oo(this.g),delete this.g,tn.aa.N.call(this)};function bu(c){Ti.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){t:{for(const y in p){c=y;break t}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}H(bu,Ti);function wu(){yo.call(this),this.status=1}H(wu,yo);function ii(c){this.g=c}H(ii,Su),ii.prototype.ua=function(){Ht(this.g,"a")},ii.prototype.ta=function(c){Ht(this.g,new bu(c))},ii.prototype.sa=function(c){Ht(this.g,new wu)},ii.prototype.ra=function(){Ht(this.g,"b")},da.prototype.createWebChannel=da.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,IT=function(){return new da},RT=function(){return tr()},wT=Yn,cm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ir.NO_ERROR=0,ir.TIMEOUT=8,ir.HTTP_ERROR=6,Lc=ir,Ai.COMPLETE="complete",bT=Ai,_o.EventType=Ei,Ei.OPEN="a",Ei.CLOSE="b",Ei.ERROR="c",Ei.MESSAGE="d",oe.prototype.listen=oe.prototype.K,wl=_o,jt.prototype.listenOnce=jt.prototype.L,jt.prototype.getLastError=jt.prototype.Ka,jt.prototype.getLastErrorCode=jt.prototype.Ba,jt.prototype.getStatus=jt.prototype.Z,jt.prototype.getResponseJson=jt.prototype.Oa,jt.prototype.getResponseText=jt.prototype.oa,jt.prototype.send=jt.prototype.ea,jt.prototype.setWithCredentials=jt.prototype.Ha,ST=jt}).apply(typeof Ic<"u"?Ic:typeof self<"u"?self:typeof window<"u"?window:{});const Iv="@firebase/firestore",Cv="4.7.10";/**
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
 */let ao="11.5.0";/**
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
 */const js=new Om("@firebase/firestore");function qa(){return js.logLevel}function rt(r,...t){if(js.logLevel<=Mt.DEBUG){const n=t.map(Hm);js.debug(`Firestore (${ao}): ${r}`,...n)}}function Wi(r,...t){if(js.logLevel<=Mt.ERROR){const n=t.map(Hm);js.error(`Firestore (${ao}): ${r}`,...n)}}function Wa(r,...t){if(js.logLevel<=Mt.WARN){const n=t.map(Hm);js.warn(`Firestore (${ao}): ${r}`,...n)}}function Hm(r){if(typeof r=="string")return r;try{/**
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
 */function vt(r="Unexpected state"){const t=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: `+r;throw Wi(t),new Error(t)}function qt(r,t){r||vt()}function St(r,t){return r}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class st extends yi{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yi{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class CT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class WI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class ZI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JI{constructor(t){this.t=t,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){qt(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new Yi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Yi,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=u;t.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Yi)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(qt(typeof s.accessToken=="string"),new CT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return qt(t===null||typeof t=="string"),new Xe(t)}}class t1{constructor(t,n,s){this.l=t,this.h=n,this.P=s,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class e1{constructor(t,n,s){this.l=t,this.h=n,this.P=s}getToken(){return Promise.resolve(new t1(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n1{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,vn(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){qt(this.o===void 0);const s=u=>{u.error!=null&&rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.R;return this.R=u.token,rt("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Dv(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(qt(typeof n.token=="string"),this.R=n.token,new Dv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function i1(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function DT(){return new TextEncoder}/**
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
 */class OT{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=i1(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function It(r,t){return r<t?-1:r>t?1:0}function hm(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return It(s,o);{const u=DT(),f=r1(u.encode(Ov(r,n)),u.encode(Ov(t,n)));return f!==0?f:It(s,o)}}n+=s>65535?2:1}return It(r.length,t.length)}function Ov(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function r1(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return It(r[n],t[n]);return It(r.length,t.length)}function Za(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
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
 */const Nv=-62135596800,Mv=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(t){return Ae.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*Mv);return new Ae(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new st(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new st(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Nv)throw new st(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new st(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mv}_compareTo(t){return this.seconds===t.seconds?It(this.nanoseconds,t.nanoseconds):It(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Nv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const Vv="__name__";class ci{constructor(t,n,s){n===void 0?n=0:n>t.length&&vt(),s===void 0?s=t.length-n:s>t.length-n&&vt(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ci.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ci?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=ci.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return It(t.length,n.length)}static compareSegments(t,n){const s=ci.isNumericId(t),o=ci.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?ci.extractNumericId(t).compare(ci.extractNumericId(n)):hm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return xr.fromString(t.substring(4,t.length-2))}}class te extends ci{construct(t,n,s){return new te(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new st(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new te(n)}static emptyPath(){return new te([])}}const s1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends ci{construct(t,n,s){return new He(t,n,s)}static isValidIdentifier(t){return s1.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vv}static keyField(){return new He([Vv])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new st(Y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new st(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new st(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=g,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new st(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class ct{constructor(t){this.path=t}static fromPath(t){return new ct(te.fromString(t))}static fromName(t){return new ct(te.fromString(t).popFirst(5))}static empty(){return new ct(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&te.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return te.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ct(new te(t.slice()))}}/**
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
 */const Ll=-1;function a1(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=At.fromTimestamp(s===1e9?new Ae(n+1,0):new Ae(n,s));return new jr(o,ct.empty(),t)}function o1(r){return new jr(r.readTime,r.key,Ll)}class jr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new jr(At.min(),ct.empty(),Ll)}static max(){return new jr(At.max(),ct.empty(),Ll)}}function l1(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ct.comparator(r.documentKey,t.documentKey),n!==0?n:It(r.largestBatchId,t.largestBatchId))}/**
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
 */const u1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class c1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function oo(r){if(r.code!==Y.FAILED_PRECONDITION||r.message!==u1)throw r;rt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class X{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&vt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new X((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):X.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):X.reject(n)}static resolve(t){return new X((n,s)=>{n(t)})}static reject(t){return new X((n,s)=>{s(t)})}static waitFor(t){return new X((n,s)=>{let o=0,u=0,f=!1;t.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},g=>s(g))}),f=!0,u===o&&n()})}static or(t){let n=X.resolve(!1);for(const s of t)n=n.next(o=>o?X.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(t,n){return new X((s,o)=>{const u=t.length,f=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;n(t[_]).next(E=>{f[_]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(t,n){return new X((s,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):s()};u()})}}function h1(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function lo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class gh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}gh.ae=-1;/**
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
 */const Fm=-1;function _h(r){return r==null}function th(r){return r===0&&1/r==-1/0}function f1(r){return typeof r=="number"&&Number.isInteger(r)&&!th(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const NT="";function d1(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=kv(t)),t=m1(r.get(n),t);return kv(t)}function m1(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case NT:n+="";break;default:n+=u}}return n}function kv(r){return r+NT+""}/**
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
 */function Uv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Xr(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function MT(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class se{constructor(t,n){this.comparator=t,this.root=n||qe.EMPTY}insert(t,n){return new se(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(t){return new se(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cc(this.root,t,this.comparator,!0)}}class Cc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class qe{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??qe.RED,this.left=o??qe.EMPTY,this.right=u??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new qe(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return qe.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw vt();const t=this.left.check();if(t!==this.right.check())throw vt();return t+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw vt()}get value(){throw vt()}get color(){throw vt()}get left(){throw vt()}get right(){throw vt()}copy(t,n,s,o,u){return this}insert(t,n,s){return new qe(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(t){this.comparator=t,this.data=new se(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pv(this.data.getIterator())}getIteratorFrom(t){return new Pv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ce(this.comparator);return n.data=t,n}}class Pv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class En{constructor(t){this.fields=t,t.sort(He.comparator)}static empty(){return new En([])}unionWith(t){let n=new Ce(He.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new En(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Za(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class VT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Fe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new VT("Invalid base64 string: "+u):u}}(t);return new Fe(n)}static fromUint8Array(t){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(t);return new Fe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return It(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const p1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(r){if(qt(!!r),typeof r=="string"){let t=0;const n=p1.exec(r);if(qt(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:pe(r.seconds),nanos:pe(r.nanos)}}function pe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Hr(r){return typeof r=="string"?Fe.fromBase64String(r):Fe.fromUint8Array(r)}/**
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
 */const kT="server_timestamp",UT="__type__",PT="__previous_value__",xT="__local_write_time__";function Gm(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[UT])===null||n===void 0?void 0:n.stringValue)===kT}function yh(r){const t=r.mapValue.fields[PT];return Gm(t)?yh(t):t}function zl(r){const t=qr(r.mapValue.fields[xT].timestampValue);return new Ae(t.seconds,t.nanos)}/**
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
 */class g1{constructor(t,n,s,o,u,f,m,g,_){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_}}const eh="(default)";class Bl{constructor(t,n){this.projectId=t,this.database=n||eh}static empty(){return new Bl("","")}get isDefaultDatabase(){return this.database===eh}isEqual(t){return t instanceof Bl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const LT="__type__",_1="__max__",Dc={mapValue:{}},zT="__vector__",nh="value";function Fr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Gm(r)?4:v1(r)?9007199254740991:y1(r)?10:11:vt()}function _i(r,t){if(r===t)return!0;const n=Fr(r);if(n!==Fr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return zl(r).isEqual(zl(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=qr(o.timestampValue),m=qr(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return Hr(o.bytesValue).isEqual(Hr(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return pe(o.geoPointValue.latitude)===pe(u.geoPointValue.latitude)&&pe(o.geoPointValue.longitude)===pe(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return pe(o.integerValue)===pe(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=pe(o.doubleValue),m=pe(u.doubleValue);return f===m?th(f)===th(m):isNaN(f)&&isNaN(m)}return!1}(r,t);case 9:return Za(r.arrayValue.values||[],t.arrayValue.values||[],_i);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Uv(f)!==Uv(m))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(m[g]===void 0||!_i(f[g],m[g])))return!1;return!0}(r,t);default:return vt()}}function jl(r,t){return(r.values||[]).find(n=>_i(n,t))!==void 0}function Ja(r,t){if(r===t)return 0;const n=Fr(r),s=Fr(t);if(n!==s)return It(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return It(r.booleanValue,t.booleanValue);case 2:return function(u,f){const m=pe(u.integerValue||u.doubleValue),g=pe(f.integerValue||f.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,t);case 3:return xv(r.timestampValue,t.timestampValue);case 4:return xv(zl(r),zl(t));case 5:return hm(r.stringValue,t.stringValue);case 6:return function(u,f){const m=Hr(u),g=Hr(f);return m.compareTo(g)}(r.bytesValue,t.bytesValue);case 7:return function(u,f){const m=u.split("/"),g=f.split("/");for(let _=0;_<m.length&&_<g.length;_++){const E=It(m[_],g[_]);if(E!==0)return E}return It(m.length,g.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,f){const m=It(pe(u.latitude),pe(f.latitude));return m!==0?m:It(pe(u.longitude),pe(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Lv(r.arrayValue,t.arrayValue);case 10:return function(u,f){var m,g,_,E;const b=u.fields||{},O=f.fields||{},L=(m=b[nh])===null||m===void 0?void 0:m.arrayValue,H=(g=O[nh])===null||g===void 0?void 0:g.arrayValue,tt=It(((_=L==null?void 0:L.values)===null||_===void 0?void 0:_.length)||0,((E=H==null?void 0:H.values)===null||E===void 0?void 0:E.length)||0);return tt!==0?tt:Lv(L,H)}(r.mapValue,t.mapValue);case 11:return function(u,f){if(u===Dc.mapValue&&f===Dc.mapValue)return 0;if(u===Dc.mapValue)return 1;if(f===Dc.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=f.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let b=0;b<g.length&&b<E.length;++b){const O=hm(g[b],E[b]);if(O!==0)return O;const L=Ja(m[g[b]],_[E[b]]);if(L!==0)return L}return It(g.length,E.length)}(r.mapValue,t.mapValue);default:throw vt()}}function xv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return It(r,t);const n=qr(r),s=qr(t),o=It(n.seconds,s.seconds);return o!==0?o:It(n.nanos,s.nanos)}function Lv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=Ja(n[o],s[o]);if(u)return u}return It(n.length,s.length)}function to(r){return fm(r)}function fm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=qr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Hr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ct.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=fm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${fm(n.fields[f])}`;return o+"}"}(r.mapValue):vt()}function zc(r){switch(Fr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=yh(r);return t?16+zc(t):16;case 5:return 2*r.stringValue.length;case 6:return Hr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+zc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Xr(s.fields,(u,f)=>{o+=u.length+zc(f)}),o}(r.mapValue);default:throw vt()}}function zv(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function dm(r){return!!r&&"integerValue"in r}function Km(r){return!!r&&"arrayValue"in r}function Bv(r){return!!r&&"nullValue"in r}function jv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Bc(r){return!!r&&"mapValue"in r}function y1(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[LT])===null||n===void 0?void 0:n.stringValue)===zT}function Ol(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Xr(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ol(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ol(r.arrayValue.values[n]);return t}return Object.assign({},r)}function v1(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===_1}/**
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
 */class un{constructor(t){this.value=t}static empty(){return new un({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Bc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ol(n)}setAll(t){let n=He.emptyPath(),s={},o=[];t.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Ol(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());Bc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return _i(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Bc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Xr(n,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new un(Ol(this.value))}}function BT(r){const t=[];return Xr(r.fields,(n,s)=>{const o=new He([n]);if(Bc(s)){const u=BT(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)}),new En(t)}/**
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
 */class $e{constructor(t,n,s,o,u,f,m){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new $e(t,0,At.min(),At.min(),At.min(),un.empty(),0)}static newFoundDocument(t,n,s,o){return new $e(t,1,n,At.min(),s,o,0)}static newNoDocument(t,n){return new $e(t,2,n,At.min(),At.min(),un.empty(),0)}static newUnknownDocument(t,n){return new $e(t,3,n,At.min(),At.min(),un.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof $e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ih{constructor(t,n){this.position=t,this.inclusive=n}}function qv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=ct.comparator(ct.fromName(f.referenceValue),n.key):s=Ja(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Hv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!_i(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class ql{constructor(t,n="asc"){this.field=t,this.dir=n}}function E1(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class jT{}class Te extends jT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new A1(t,n,s):n==="array-contains"?new w1(t,s):n==="in"?new R1(t,s):n==="not-in"?new I1(t,s):n==="array-contains-any"?new C1(t,s):new Te(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new S1(t,s):new b1(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ja(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(Ja(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return vt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gn extends jT{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Gn(t,n)}matches(t){return qT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function qT(r){return r.op==="and"}function HT(r){return T1(r)&&qT(r)}function T1(r){for(const t of r.filters)if(t instanceof Gn)return!1;return!0}function mm(r){if(r instanceof Te)return r.field.canonicalString()+r.op.toString()+to(r.value);if(HT(r))return r.filters.map(t=>mm(t)).join(",");{const t=r.filters.map(n=>mm(n)).join(",");return`${r.op}(${t})`}}function FT(r,t){return r instanceof Te?function(s,o){return o instanceof Te&&s.op===o.op&&s.field.isEqual(o.field)&&_i(s.value,o.value)}(r,t):r instanceof Gn?function(s,o){return o instanceof Gn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&FT(f,o.filters[m]),!0):!1}(r,t):void vt()}function GT(r){return r instanceof Te?function(n){return`${n.field.canonicalString()} ${n.op} ${to(n.value)}`}(r):r instanceof Gn?function(n){return n.op.toString()+" {"+n.getFilters().map(GT).join(" ,")+"}"}(r):"Filter"}class A1 extends Te{constructor(t,n,s){super(t,n,s),this.key=ct.fromName(s.referenceValue)}matches(t){const n=ct.comparator(t.key,this.key);return this.matchesComparison(n)}}class S1 extends Te{constructor(t,n){super(t,"in",n),this.keys=KT("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class b1 extends Te{constructor(t,n){super(t,"not-in",n),this.keys=KT("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function KT(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ct.fromName(s.referenceValue))}class w1 extends Te{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Km(n)&&jl(n.arrayValue,this.value)}}class R1 extends Te{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&jl(this.value.arrayValue,n)}}class I1 extends Te{constructor(t,n){super(t,"not-in",n)}matches(t){if(jl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!jl(this.value.arrayValue,n)}}class C1 extends Te{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Km(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>jl(this.value.arrayValue,s))}}/**
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
 */class D1{constructor(t,n=null,s=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.le=null}}function Fv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new D1(r,t,n,s,o,u,f)}function Qm(r){const t=St(r);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>mm(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),_h(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>to(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>to(s)).join(",")),t.le=n}return t.le}function Ym(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!E1(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!FT(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Hv(r.startAt,t.startAt)&&Hv(r.endAt,t.endAt)}function pm(r){return ct.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class uo{constructor(t,n=null,s=[],o=[],u=null,f="F",m=null,g=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=g,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function O1(r,t,n,s,o,u,f,m){return new uo(r,t,n,s,o,u,f,m)}function Xm(r){return new uo(r)}function Gv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function QT(r){return r.collectionGroup!==null}function Nl(r){const t=St(r);if(t.he===null){t.he=[];const n=new Set;for(const u of t.explicitOrderBy)t.he.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Ce(He.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(m=m.add(_.field))})}),m})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.he.push(new ql(u,s))}),n.has(He.keyField().canonicalString())||t.he.push(new ql(He.keyField(),s))}return t.he}function pi(r){const t=St(r);return t.Pe||(t.Pe=N1(t,Nl(r))),t.Pe}function N1(r,t){if(r.limitType==="F")return Fv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new ql(o.field,u)});const n=r.endAt?new ih(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ih(r.startAt.position,r.startAt.inclusive):null;return Fv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function gm(r,t){const n=r.filters.concat([t]);return new uo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function _m(r,t,n){return new uo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function vh(r,t){return Ym(pi(r),pi(t))&&r.limitType===t.limitType}function YT(r){return`${Qm(pi(r))}|lt:${r.limitType}`}function Ha(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>GT(o)).join(", ")}]`),_h(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>to(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>to(o)).join(",")),`Target(${s})`}(pi(r))}; limitType=${r.limitType})`}function Eh(r,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ct.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,t)&&function(s,o){for(const u of Nl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,m,g){const _=qv(f,m,g);return f.inclusive?_<=0:_<0}(s.startAt,Nl(s),o)||s.endAt&&!function(f,m,g){const _=qv(f,m,g);return f.inclusive?_>=0:_>0}(s.endAt,Nl(s),o))}(r,t)}function M1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function XT(r){return(t,n)=>{let s=!1;for(const o of Nl(r)){const u=V1(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function V1(r,t,n){const s=r.field.isKeyField()?ct.comparator(t.key,n.key):function(u,f,m){const g=f.data.field(u),_=m.data.field(u);return g!==null&&_!==null?Ja(g,_):vt()}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return vt()}}/**
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
 */class Ks{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Xr(this.inner,(n,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return MT(this.inner)}size(){return this.innerSize}}/**
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
 */const k1=new se(ct.comparator);function Zi(){return k1}const $T=new se(ct.comparator);function Rl(...r){let t=$T;for(const n of r)t=t.insert(n.key,n);return t}function WT(r){let t=$T;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Us(){return Ml()}function ZT(){return Ml()}function Ml(){return new Ks(r=>r.toString(),(r,t)=>r.isEqual(t))}const U1=new se(ct.comparator),P1=new Ce(ct.comparator);function Vt(...r){let t=P1;for(const n of r)t=t.add(n);return t}const x1=new Ce(It);function L1(){return x1}/**
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
 */function $m(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:th(t)?"-0":t}}function JT(r){return{integerValue:""+r}}function z1(r,t){return f1(t)?JT(t):$m(r,t)}/**
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
 */class Th{constructor(){this._=void 0}}function B1(r,t,n){return r instanceof rh?function(o,u){const f={fields:{[UT]:{stringValue:kT},[xT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Gm(u)&&(u=yh(u)),u&&(f.fields[PT]=u),{mapValue:f}}(n,t):r instanceof Hl?e0(r,t):r instanceof Fl?n0(r,t):function(o,u){const f=t0(o,u),m=Kv(f)+Kv(o.Ie);return dm(f)&&dm(o.Ie)?JT(m):$m(o.serializer,m)}(r,t)}function j1(r,t,n){return r instanceof Hl?e0(r,t):r instanceof Fl?n0(r,t):n}function t0(r,t){return r instanceof sh?function(s){return dm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class rh extends Th{}class Hl extends Th{constructor(t){super(),this.elements=t}}function e0(r,t){const n=i0(t);for(const s of r.elements)n.some(o=>_i(o,s))||n.push(s);return{arrayValue:{values:n}}}class Fl extends Th{constructor(t){super(),this.elements=t}}function n0(r,t){let n=i0(t);for(const s of r.elements)n=n.filter(o=>!_i(o,s));return{arrayValue:{values:n}}}class sh extends Th{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Kv(r){return pe(r.integerValue||r.doubleValue)}function i0(r){return Km(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function q1(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof Hl&&o instanceof Hl||s instanceof Fl&&o instanceof Fl?Za(s.elements,o.elements,_i):s instanceof sh&&o instanceof sh?_i(s.Ie,o.Ie):s instanceof rh&&o instanceof rh}(r.transform,t.transform)}class H1{constructor(t,n){this.version=t,this.transformResults=n}}class Un{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Un}static exists(t){return new Un(void 0,t)}static updateTime(t){return new Un(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Ah{}function r0(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Wm(r.key,Un.none()):new Wl(r.key,r.data,Un.none());{const n=r.data,s=un.empty();let o=new Ce(He.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new $r(r.key,s,new En(o.toArray()),Un.none())}}function F1(r,t,n){r instanceof Wl?function(o,u,f){const m=o.value.clone(),g=Yv(o.fieldTransforms,u,f.transformResults);m.setAll(g),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,n):r instanceof $r?function(o,u,f){if(!jc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=Yv(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(s0(o)),g.setAll(m),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Vl(r,t,n,s){return r instanceof Wl?function(u,f,m,g){if(!jc(u.precondition,f))return m;const _=u.value.clone(),E=Xv(u.fieldTransforms,g,f);return _.setAll(E),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),null}(r,t,n,s):r instanceof $r?function(u,f,m,g){if(!jc(u.precondition,f))return m;const _=Xv(u.fieldTransforms,g,f),E=f.data;return E.setAll(s0(u)),E.setAll(_),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(b=>b.field))}(r,t,n,s):function(u,f,m){return jc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,t,n)}function G1(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=t0(s.transform,o||null);u!=null&&(n===null&&(n=un.empty()),n.set(s.field,u))}return n||null}function Qv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Za(s,o,(u,f)=>q1(u,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Wl extends Ah{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class $r extends Ah{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function s0(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function Yv(r,t,n){const s=new Map;qt(r.length===n.length);for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=t.data.field(u.field);s.set(u.field,j1(f,m,n[o]))}return s}function Xv(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,B1(u,f,t))}return s}class Wm extends Ah{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class K1 extends Ah{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Q1{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&F1(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Vl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Vl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=ZT();return this.mutations.forEach(o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const g=r0(f,m);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(At.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Vt())}isEqual(t){return this.batchId===t.batchId&&Za(this.mutations,t.mutations,(n,s)=>Qv(n,s))&&Za(this.baseMutations,t.baseMutations,(n,s)=>Qv(n,s))}}class Zm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){qt(t.mutations.length===s.length);let o=function(){return U1}();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Zm(t,n,s,o)}}/**
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
 */class Y1{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class X1{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Ee,xt;function $1(r){switch(r){case Y.OK:return vt();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return vt()}}function a0(r){if(r===void 0)return Wi("GRPC error has no .code"),Y.UNKNOWN;switch(r){case Ee.OK:return Y.OK;case Ee.CANCELLED:return Y.CANCELLED;case Ee.UNKNOWN:return Y.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return Y.INTERNAL;case Ee.UNAVAILABLE:return Y.UNAVAILABLE;case Ee.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case Ee.NOT_FOUND:return Y.NOT_FOUND;case Ee.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case Ee.ABORTED:return Y.ABORTED;case Ee.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case Ee.DATA_LOSS:return Y.DATA_LOSS;default:return vt()}}(xt=Ee||(Ee={}))[xt.OK=0]="OK",xt[xt.CANCELLED=1]="CANCELLED",xt[xt.UNKNOWN=2]="UNKNOWN",xt[xt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xt[xt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xt[xt.NOT_FOUND=5]="NOT_FOUND",xt[xt.ALREADY_EXISTS=6]="ALREADY_EXISTS",xt[xt.PERMISSION_DENIED=7]="PERMISSION_DENIED",xt[xt.UNAUTHENTICATED=16]="UNAUTHENTICATED",xt[xt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xt[xt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xt[xt.ABORTED=10]="ABORTED",xt[xt.OUT_OF_RANGE=11]="OUT_OF_RANGE",xt[xt.UNIMPLEMENTED=12]="UNIMPLEMENTED",xt[xt.INTERNAL=13]="INTERNAL",xt[xt.UNAVAILABLE=14]="UNAVAILABLE",xt[xt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const W1=new xr([4294967295,4294967295],0);function $v(r){const t=DT().encode(r),n=new AT;return n.update(t),new Uint8Array(n.digest())}function Wv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new xr([n,s],0),new xr([o,u],0)]}class Jm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Il(`Invalid padding: ${n}`);if(s<0)throw new Il(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Il(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Il(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=xr.fromNumber(this.Ee)}Ae(t,n,s){let o=t.add(n.multiply(xr.fromNumber(s)));return o.compare(W1)===1&&(o=new xr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const n=$v(t),[s,o]=Wv(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);if(!this.Re(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Jm(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(t){if(this.Ee===0)return;const n=$v(t),[s,o]=Wv(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);this.Ve(f)}}Ve(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Il extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Sh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Zl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Sh(At.min(),o,new se(It),Zi(),Vt())}}class Zl{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Zl(s,n,Vt(),Vt(),Vt())}}/**
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
 */class qc{constructor(t,n,s,o){this.me=t,this.removedTargetIds=n,this.key=s,this.fe=o}}class o0{constructor(t,n){this.targetId=t,this.ge=n}}class l0{constructor(t,n,s=Fe.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Zv{constructor(){this.pe=0,this.ye=Jv(),this.we=Fe.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=Vt(),n=Vt(),s=Vt();return this.ye.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:vt()}}),new Zl(this.we,this.Se,t,n,s)}Me(){this.be=!1,this.ye=Jv()}xe(t,n){this.be=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,qt(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Z1{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Zi(),this.$e=Oc(),this.Ue=Oc(),this.Ke=new se(It)}We(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(const n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,n=>{const s=this.He(n);switch(t.state){case 0:this.Je(n)&&s.Ce(t.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(t.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(n);break;case 3:this.Je(n)&&(s.Le(),s.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Ce(t.resumeToken));break;default:vt()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((s,o)=>{this.Je(o)&&n(o)})}Ze(t){const n=t.targetId,s=t.ge.count,o=this.Xe(n);if(o){const u=o.target;if(pm(u))if(s===0){const f=new ct(u.path);this.ze(n,f,$e.newNoDocument(f,At.min()))}else qt(s===1);else{const f=this.et(n);if(f!==s){const m=this.tt(t),g=m?this.nt(m,t,f):1;if(g!==0){this.Ye(n);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,_)}}}}}tt(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=Hr(s).toUint8Array()}catch(g){if(g instanceof VT)return Wa("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Jm(f,o,u)}catch(g){return Wa(g instanceof Il?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.Ee===0?null:m}nt(t,n,s){return n.ge.count===s-this.st(t,n.targetId)?0:2}st(t,n){const s=this.ke.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ke.it(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.ze(n,u,null),o++)}),o}ot(t){const n=new Map;this.qe.forEach((u,f)=>{const m=this.Xe(f);if(m){if(u.current&&pm(m.target)){const g=new ct(m.target.path);this._t(g).has(f)||this.ut(f,g)||this.ze(f,g,$e.newNoDocument(g,t))}u.ve&&(n.set(f,u.Fe()),u.Me())}});let s=Vt();this.Ue.forEach((u,f)=>{let m=!0;f.forEachWhile(g=>{const _=this.Xe(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.Qe.forEach((u,f)=>f.setReadTime(t));const o=new Sh(t,n,this.Ke,this.Qe,s);return this.Qe=Zi(),this.$e=Oc(),this.Ue=Oc(),this.Ke=new se(It),o}Ge(t,n){if(!this.Je(t))return;const s=this.ut(t,n.key)?2:0;this.He(t).xe(n.key,s),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}ze(t,n,s){if(!this.Je(t))return;const o=this.He(t);this.ut(t,n)?o.xe(n,1):o.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),this.Ue=this.Ue.insert(n,this.ct(n).add(t)),s&&(this.Qe=this.Qe.insert(n,s))}removeTarget(t){this.qe.delete(t)}et(t){const n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new Zv,this.qe.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new Ce(It),this.Ue=this.Ue.insert(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new Ce(It),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||rt("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Zv),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function Oc(){return new se(ct.comparator)}function Jv(){return new se(ct.comparator)}const J1={asc:"ASCENDING",desc:"DESCENDING"},tC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eC={and:"AND",or:"OR"};class nC{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ym(r,t){return r.useProto3Json||_h(t)?t:{value:t}}function ah(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function u0(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function iC(r,t){return ah(r,t.toTimestamp())}function gi(r){return qt(!!r),At.fromTimestamp(function(n){const s=qr(n);return new Ae(s.seconds,s.nanos)}(r))}function tp(r,t){return vm(r,t).canonicalString()}function vm(r,t){const n=function(o){return new te(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function c0(r){const t=te.fromString(r);return qt(p0(t)),t}function Em(r,t){return tp(r.databaseId,t.path)}function Xd(r,t){const n=c0(t);if(n.get(1)!==r.databaseId.projectId)throw new st(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new st(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ct(f0(n))}function h0(r,t){return tp(r.databaseId,t)}function rC(r){const t=c0(r);return t.length===4?te.emptyPath():f0(t)}function Tm(r){return new te(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function f0(r){return qt(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function tE(r,t,n){return{name:Em(r,t),fields:n.value.mapValue.fields}}function sC(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:vt()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(_,E){return _.useProto3Json?(qt(E===void 0||typeof E=="string"),Fe.fromBase64String(E||"")):(qt(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Fe.fromUint8Array(E||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&function(_){const E=_.code===void 0?Y.UNKNOWN:a0(_.code);return new st(E,_.message||"")}(f);n=new l0(s,o,u,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Xd(r,s.document.name),u=gi(s.document.updateTime),f=s.document.createTime?gi(s.document.createTime):At.min(),m=new un({mapValue:{fields:s.document.fields}}),g=$e.newFoundDocument(o,u,f,m),_=s.targetIds||[],E=s.removedTargetIds||[];n=new qc(_,E,g.key,g)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Xd(r,s.document),u=s.readTime?gi(s.readTime):At.min(),f=$e.newNoDocument(o,u),m=s.removedTargetIds||[];n=new qc([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Xd(r,s.document),u=s.removedTargetIds||[];n=new qc([],u,o,null)}else{if(!("filter"in t))return vt();{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new X1(o,u),m=s.targetId;n=new o0(m,f)}}return n}function aC(r,t){let n;if(t instanceof Wl)n={update:tE(r,t.key,t.value)};else if(t instanceof Wm)n={delete:Em(r,t.key)};else if(t instanceof $r)n={update:tE(r,t.key,t.data),updateMask:pC(t.fieldMask)};else{if(!(t instanceof K1))return vt();n={verify:Em(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof rh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Hl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Fl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof sh)return{fieldPath:f.field.canonicalString(),increment:m.Ie};throw vt()}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:iC(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:vt()}(r,t.precondition)),n}function oC(r,t){return r&&r.length>0?(qt(t!==void 0),r.map(n=>function(o,u){let f=o.updateTime?gi(o.updateTime):gi(u);return f.isEqual(At.min())&&(f=gi(u)),new H1(f,o.transformResults||[])}(n,t))):[]}function lC(r,t){return{documents:[h0(r,t.path)]}}function uC(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=h0(r,o);const u=function(_){if(_.length!==0)return m0(Gn.create(_,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const f=function(_){if(_.length!==0)return _.map(E=>function(O){return{field:Fa(O.field),direction:fC(O.dir)}}(E))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const m=ym(r,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(t.endAt)),{ht:n,parent:o}}function cC(r){let t=rC(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){qt(s===1);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=function(b){const O=d0(b);return O instanceof Gn&&HT(O)?O.getFilters():[O]}(n.where));let f=[];n.orderBy&&(f=function(b){return b.map(O=>function(H){return new ql(Ga(H.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(H.direction))}(O))}(n.orderBy));let m=null;n.limit&&(m=function(b){let O;return O=typeof b=="object"?b.value:b,_h(O)?null:O}(n.limit));let g=null;n.startAt&&(g=function(b){const O=!!b.before,L=b.values||[];return new ih(L,O)}(n.startAt));let _=null;return n.endAt&&(_=function(b){const O=!b.before,L=b.values||[];return new ih(L,O)}(n.endAt)),O1(t,o,f,u,m,"F",g,_)}function hC(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return vt()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function d0(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ga(n.unaryFilter.field);return Te.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ga(n.unaryFilter.field);return Te.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ga(n.unaryFilter.field);return Te.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ga(n.unaryFilter.field);return Te.create(f,"!=",{nullValue:"NULL_VALUE"});default:return vt()}}(r):r.fieldFilter!==void 0?function(n){return Te.create(Ga(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return vt()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Gn.create(n.compositeFilter.filters.map(s=>d0(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return vt()}}(n.compositeFilter.op))}(r):vt()}function fC(r){return J1[r]}function dC(r){return tC[r]}function mC(r){return eC[r]}function Fa(r){return{fieldPath:r.canonicalString()}}function Ga(r){return He.fromServerFormat(r.fieldPath)}function m0(r){return r instanceof Te?function(n){if(n.op==="=="){if(jv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NAN"}};if(Bv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NOT_NAN"}};if(Bv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fa(n.field),op:dC(n.op),value:n.value}}}(r):r instanceof Gn?function(n){const s=n.getFilters().map(o=>m0(o));return s.length===1?s[0]:{compositeFilter:{op:mC(n.op),filters:s}}}(r):vt()}function pC(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function p0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class kr{constructor(t,n,s,o,u=At.min(),f=At.min(),m=Fe.EMPTY_BYTE_STRING,g=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(t){return new kr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class gC{constructor(t){this.Tt=t}}function _C(r){const t=cC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?_m(t,t.limit,"L"):t}/**
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
 */class yC{constructor(){this.Tn=new vC}addToCollectionParentIndex(t,n){return this.Tn.add(n),X.resolve()}getCollectionParents(t,n){return X.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return X.resolve()}deleteFieldIndex(t,n){return X.resolve()}deleteAllFieldIndexes(t){return X.resolve()}createTargetIndexes(t,n){return X.resolve()}getDocumentsMatchingTarget(t,n){return X.resolve(null)}getIndexType(t,n){return X.resolve(0)}getFieldIndexes(t,n){return X.resolve([])}getNextCollectionGroupToUpdate(t){return X.resolve(null)}getMinOffset(t,n){return X.resolve(jr.min())}getMinOffsetFromCollectionGroup(t,n){return X.resolve(jr.min())}updateCollectionGroup(t,n,s){return X.resolve()}updateIndexEntries(t,n){return X.resolve()}}class vC{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Ce(te.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Ce(te.comparator)).toArray()}}/**
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
 */const eE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},g0=41943040;class ln{static withCacheSize(t){return new ln(t,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(g0,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
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
 */class eo{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new eo(0)}static Kn(){return new eo(-1)}}/**
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
 */const nE="LruGarbageCollector",EC=1048576;function iE([r,t],[n,s]){const o=It(r,n);return o===0?It(t,s):o}class TC{constructor(t){this.Hn=t,this.buffer=new Ce(iE),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();iE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class AC{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){rt(nE,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){lo(n)?rt(nE,"Ignoring IndexedDB error during garbage collection: ",n):await oo(n)}await this.er(3e5)})}}class SC{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return X.resolve(gh.ae);const s=new TC(n);return this.tr.forEachTarget(t,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(t,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.tr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(rt("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(eE)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(rt("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eE):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let s,o,u,f,m,g,_;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(rt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(t,o))).next(b=>(s=b,m=Date.now(),this.removeTargets(t,s,n))).next(b=>(u=b,g=Date.now(),this.removeOrphanedDocuments(t,s))).next(b=>(_=Date.now(),qa()<=Mt.DEBUG&&rt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${b} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b})))}}function bC(r,t){return new SC(r,t)}/**
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
 */class wC{constructor(){this.changes=new Ks(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,$e.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?X.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class RC{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class IC{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Vl(s.mutation,o,En.empty(),Ae.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Vt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Vt()){const o=Us();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(u=>{let f=Rl();return u.forEach((m,g)=>{f=f.insert(m,g.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Us();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Vt()))}populateOverlays(t,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(t,n,s,o){let u=Zi();const f=Ml(),m=function(){return Ml()}();return n.forEach((g,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof $r)?u=u.insert(_.key,_):E!==void 0?(f.set(_.key,E.mutation.getFieldMask()),Vl(E.mutation,_,E.mutation.getFieldMask(),Ae.now())):f.set(_.key,En.empty())}),this.recalculateAndSaveOverlays(t,u).next(g=>(g.forEach((_,E)=>f.set(_,E)),n.forEach((_,E)=>{var b;return m.set(_,new RC(E,(b=f.get(_))!==null&&b!==void 0?b:null))}),m))}recalculateAndSaveOverlays(t,n){const s=Ml();let o=new se((f,m)=>f-m),u=Vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const m of f)m.keys().forEach(g=>{const _=n.get(g);if(_===null)return;let E=s.get(g)||En.empty();E=m.applyToLocalView(_,E),s.set(g,E);const b=(o.get(m.batchId)||Vt()).add(g);o=o.insert(m.batchId,b)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,E=g.value,b=ZT();E.forEach(O=>{if(!u.has(O)){const L=r0(n.get(O),s.get(O));L!==null&&b.set(O,L),u=u.add(O)}}),f.push(this.documentOverlayCache.saveOverlays(t,_,b))}return X.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return ct.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):QT(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):X.resolve(Us());let m=Ll,g=u;return f.next(_=>X.forEach(_,(E,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),u.get(E)?X.resolve():this.remoteDocumentCache.getEntry(t,E).next(O=>{g=g.insert(E,O)}))).next(()=>this.populateOverlays(t,_,u)).next(()=>this.computeViews(t,g,_,Vt())).next(E=>({batchId:m,changes:WT(E)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ct(n)).next(s=>{let o=Rl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=Rl();return this.indexManager.getCollectionParents(t,u).next(m=>X.forEach(m,g=>{const _=function(b,O){return new uo(O,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(t,_,s,o).next(E=>{E.forEach((b,O)=>{f=f.insert(b,O)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o))).next(f=>{u.forEach((g,_)=>{const E=_.getKey();f.get(E)===null&&(f=f.insert(E,$e.newInvalidDocument(E)))});let m=Rl();return f.forEach((g,_)=>{const E=u.get(g);E!==void 0&&Vl(E.mutation,_,En.empty(),Ae.now()),Eh(n,_)&&(m=m.insert(g,_))}),m})}}/**
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
 */class CC{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return X.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:gi(o.createTime)}}(n)),X.resolve()}getNamedQuery(t,n){return X.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(o){return{name:o.name,query:_C(o.bundledQuery),readTime:gi(o.readTime)}}(n)),X.resolve()}}/**
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
 */class DC{constructor(){this.overlays=new se(ct.comparator),this.Rr=new Map}getOverlay(t,n){return X.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Us();return X.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,u)=>{this.Et(t,n,u)}),X.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),X.resolve()}getOverlaysForCollection(t,n,s){const o=Us(),u=n.length+1,f=new ct(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!n.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return X.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new se((_,E)=>_-E);const f=this.overlays.getIterator();for(;f.hasNext();){const _=f.getNext().value;if(_.getKey().getCollectionGroup()===n&&_.largestBatchId>s){let E=u.get(_.largestBatchId);E===null&&(E=Us(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const m=Us(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,E)=>m.set(_,E)),!(m.size()>=o)););return X.resolve(m)}Et(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new Y1(n,s));let u=this.Rr.get(n);u===void 0&&(u=Vt(),this.Rr.set(n,u)),this.Rr.set(n,u.add(s.key))}}/**
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
 */class OC{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(t){return X.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,X.resolve()}}/**
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
 */class ep{constructor(){this.Vr=new Ce(Ue.mr),this.gr=new Ce(Ue.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const s=new Ue(t,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.wr(new Ue(t,n))}Sr(t,n){t.forEach(s=>this.removeReference(s,n))}br(t){const n=new ct(new te([])),s=new Ue(n,t),o=new Ue(n,t+1),u=[];return this.gr.forEachInRange([s,o],f=>{this.wr(f),u.push(f.key)}),u}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new ct(new te([])),s=new Ue(n,t),o=new Ue(n,t+1);let u=Vt();return this.gr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(t){const n=new Ue(t,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Ue{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return ct.comparator(t.key,n.key)||It(t.Cr,n.Cr)}static pr(t,n){return It(t.Cr,n.Cr)||ct.comparator(t.key,n.key)}}/**
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
 */class NC{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ce(Ue.mr)}checkEmpty(t){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new Q1(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Mr=this.Mr.add(new Ue(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return X.resolve(f)}lookupMutationBatch(t,n){return X.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.Nr(s),u=o<0?0:o;return X.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Fm:this.Fr-1)}getAllMutationBatches(t){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Ue(n,0),o=new Ue(n,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],f=>{const m=this.Or(f.Cr);u.push(m)}),X.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Ce(It);return n.forEach(o=>{const u=new Ue(o,0),f=new Ue(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,f],m=>{s=s.add(m.Cr)})}),X.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;ct.isDocumentKey(u)||(u=u.child(""));const f=new Ue(new ct(u),0);let m=new Ce(It);return this.Mr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Cr)),!0)},f),X.resolve(this.Br(m))}Br(t){const n=[];return t.forEach(s=>{const o=this.Or(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){qt(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return X.forEach(n.mutations,o=>{const u=new Ue(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Mr=s})}qn(t){}containsKey(t,n){const s=new Ue(n,0),o=this.Mr.firstAfterOrEqual(s);return X.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,X.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class MC{constructor(t){this.kr=t,this.docs=function(){return new se(ct.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return X.resolve(s?s.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(t,n){let s=Zi();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():$e.newInvalidDocument(o))}),X.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=Zi();const f=n.path,m=new ct(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!f.isPrefixOf(_.path))break;_.path.length>f.length+1||l1(o1(E),s)<=0||(o.has(E.key)||Eh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return X.resolve(u)}getAllFromCollectionGroup(t,n,s,o){vt()}qr(t,n){return X.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new VC(this)}getSize(t){return X.resolve(this.size)}}class VC extends wC{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Ir.addEntry(t,o)):this.Ir.removeEntry(s)}),X.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
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
 */class kC{constructor(t){this.persistence=t,this.Qr=new Ks(n=>Qm(n),Ym),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this.$r=0,this.Ur=new ep,this.targetCount=0,this.Kr=eo.Un()}forEachTarget(t,n){return this.Qr.forEach((s,o)=>n(o)),X.resolve()}getLastRemoteSnapshotVersion(t){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return X.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),X.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Kr=new eo(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,X.resolve()}updateTargetData(t,n){return this.zn(n),X.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.Qr.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.Qr.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)}),X.waitFor(u).next(()=>o)}getTargetCount(t){return X.resolve(this.targetCount)}getTargetData(t,n){const s=this.Qr.get(n)||null;return X.resolve(s)}addMatchingKeys(t,n,s){return this.Ur.yr(n,s),X.resolve()}removeMatchingKeys(t,n,s){this.Ur.Sr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(t,f))}),X.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.Ur.br(n),X.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ur.vr(n);return X.resolve(s)}containsKey(t,n){return X.resolve(this.Ur.containsKey(n))}}/**
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
 */class _0{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new gh(0),this.zr=!1,this.zr=!0,this.jr=new OC,this.referenceDelegate=t(this),this.Hr=new kC(this),this.indexManager=new yC,this.remoteDocumentCache=function(o){return new MC(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new gC(n),this.Yr=new CC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new DC,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Wr[t.toKey()];return s||(s=new NC(n,this.referenceDelegate),this.Wr[t.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,s){rt("MemoryPersistence","Starting transaction:",t);const o=new UC(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(t,n){return X.or(Object.values(this.Wr).map(s=>()=>s.containsKey(t,n)))}}class UC extends c1{constructor(t){super(),this.currentSequenceNumber=t}}class np{constructor(t){this.persistence=t,this.ti=new ep,this.ni=null}static ri(t){return new np(t)}get ii(){if(this.ni)return this.ni;throw vt()}addReference(t,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),X.resolve()}removeReference(t,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),X.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),X.resolve()}removeTarget(t,n){this.ti.br(n.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.ii,s=>{const o=ct.fromPath(s);return this.si(t,o).next(u=>{u||n.removeEntry(o,At.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return X.or([()=>X.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class oh{constructor(t,n){this.persistence=t,this.oi=new Ks(s=>d1(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=bC(this,n)}static ri(t,n){return new oh(t,n)}Zr(){}Xr(t){return X.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}sr(t){let n=0;return this.rr(t,s=>{n++}).next(()=>n)}rr(t,n){return X.forEach(this.oi,(s,o)=>this.ar(t,s,o).next(u=>u?X.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(t,f=>this.ar(t,f,n).next(m=>{m||(s++,u.removeEntry(f,At.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),X.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.oi.set(s,t.currentSequenceNumber),X.resolve()}removeReference(t,n,s){return this.oi.set(s,t.currentSequenceNumber),X.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),X.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=zc(t.data.value)),n}ar(t,n,s){return X.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.oi.get(n);return X.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ip{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Hi=s,this.Ji=o}static Yi(t,n){let s=Vt(),o=Vt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new ip(t,n.fromCache,s,o)}}/**
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
 */class PC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class xC{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return _b()?8:h1(We())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.rs(t,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ss(t,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new PC;return this._s(t,n,f).next(m=>{if(u.result=m,this.Xi)return this.us(t,n,f,m.size)})}).next(()=>u.result)}us(t,n,s,o){return s.documentReadCount<this.es?(qa()<=Mt.DEBUG&&rt("QueryEngine","SDK will not create cache indexes for query:",Ha(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),X.resolve()):(qa()<=Mt.DEBUG&&rt("QueryEngine","Query:",Ha(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(qa()<=Mt.DEBUG&&rt("QueryEngine","The SDK decides to create cache indexes for query:",Ha(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,pi(n))):X.resolve())}rs(t,n){if(Gv(n))return X.resolve(null);let s=pi(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=_m(n,null,"F"),s=pi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const f=Vt(...u);return this.ns.getDocuments(t,f).next(m=>this.indexManager.getMinOffset(t,s).next(g=>{const _=this.cs(n,m);return this.ls(n,_,f,g.readTime)?this.rs(t,_m(n,null,"F")):this.hs(t,_,n,g)}))})))}ss(t,n,s,o){return Gv(n)||o.isEqual(At.min())?X.resolve(null):this.ns.getDocuments(t,s).next(u=>{const f=this.cs(n,u);return this.ls(n,f,s,o)?X.resolve(null):(qa()<=Mt.DEBUG&&rt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ha(n)),this.hs(t,f,n,a1(o,Ll)).next(m=>m))})}cs(t,n){let s=new Ce(XT(t));return n.forEach((o,u)=>{Eh(t,u)&&(s=s.add(u))}),s}ls(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(t,n,s){return qa()<=Mt.DEBUG&&rt("QueryEngine","Using full collection scan to execute query:",Ha(n)),this.ns.getDocumentsMatchingQuery(t,n,jr.min(),s)}hs(t,n,s,o){return this.ns.getDocumentsMatchingQuery(t,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
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
 */const rp="LocalStore",LC=3e8;class zC{constructor(t,n,s,o){this.persistence=t,this.Ps=n,this.serializer=o,this.Ts=new se(It),this.Is=new Ks(u=>Qm(u),Ym),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(s)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new IC(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function BC(r,t,n,s){return new zC(r,t,n,s)}async function y0(r,t){const n=St(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.As(t),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let g=Vt();for(const _ of o){f.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of u){m.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return n.localDocuments.getDocuments(s,g).next(_=>({Rs:_,removedBatchIds:f,addedBatchIds:m}))})})}function jC(r,t){const n=St(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),u=n.ds.newChangeBuffer({trackRemovals:!0});return function(m,g,_,E){const b=_.batch,O=b.keys();let L=X.resolve();return O.forEach(H=>{L=L.next(()=>E.getEntry(g,H)).next(tt=>{const $=_.docVersions.get(H);qt($!==null),tt.version.compareTo($)<0&&(b.applyToRemoteDocument(tt,_),tt.isValidDocument()&&(tt.setReadTime(_.commitVersion),E.addEntry(tt)))})}),L.next(()=>m.mutationQueue.removeMutationBatch(g,b))}(n,s,t,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Vt();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function v0(r){const t=St(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function qC(r,t){const n=St(r),s=t.snapshotVersion;let o=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.ds.newChangeBuffer({trackRemovals:!0});o=n.Ts;const m=[];t.targetChanges.forEach((E,b)=>{const O=o.get(b);if(!O)return;m.push(n.Hr.removeMatchingKeys(u,E.removedDocuments,b).next(()=>n.Hr.addMatchingKeys(u,E.addedDocuments,b)));let L=O.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(b)!==null?L=L.withResumeToken(Fe.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):E.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(E.resumeToken,s)),o=o.insert(b,L),function(tt,$,Et){return tt.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-tt.snapshotVersion.toMicroseconds()>=LC?!0:Et.addedDocuments.size+Et.modifiedDocuments.size+Et.removedDocuments.size>0}(O,L,E)&&m.push(n.Hr.updateTargetData(u,L))});let g=Zi(),_=Vt();if(t.documentUpdates.forEach(E=>{t.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(HC(u,f,t.documentUpdates).next(E=>{g=E.Vs,_=E.fs})),!s.isEqual(At.min())){const E=n.Hr.getLastRemoteSnapshotVersion(u).next(b=>n.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return X.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,g,_)).next(()=>g)}).then(u=>(n.Ts=o,u))}function HC(r,t,n){let s=Vt(),o=Vt();return n.forEach(u=>s=s.add(u)),t.getEntries(r,s).next(u=>{let f=Zi();return n.forEach((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(At.min())?(t.removeEntry(m,g.readTime),f=f.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(t.addEntry(g),f=f.insert(m,g)):rt(rp,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)}),{Vs:f,fs:o}})}function FC(r,t){const n=St(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=Fm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function GC(r,t){const n=St(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Hr.getTargetData(s,t).next(u=>u?(o=u,X.resolve(o)):n.Hr.allocateTargetId(s).next(f=>(o=new kr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(s.targetId,s),n.Is.set(t,s.targetId)),s})}async function Am(r,t,n){const s=St(r),o=s.Ts.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!lo(f))throw f;rt(rp,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ts=s.Ts.remove(t),s.Is.delete(o.target)}function rE(r,t,n){const s=St(r);let o=At.min(),u=Vt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(g,_,E){const b=St(g),O=b.Is.get(E);return O!==void 0?X.resolve(b.Ts.get(O)):b.Hr.getTargetData(_,E)}(s,f,pi(t)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,m.targetId).next(g=>{u=g})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,t,n?o:At.min(),n?u:Vt())).next(m=>(KC(s,M1(t),m),{documents:m,gs:u})))}function KC(r,t,n){let s=r.Es.get(t)||At.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Es.set(t,s)}class sE{constructor(){this.activeTargetIds=L1()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class QC{constructor(){this.ho=new sE,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,s){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new sE,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class YC{To(t){}shutdown(){}}/**
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
 */const aE="ConnectivityMonitor";class oE{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){rt(aE,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){rt(aE,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Nc=null;function Sm(){return Nc===null?Nc=function(){return 268435456+Math.round(2147483648*Math.random())}():Nc++,"0x"+Nc.toString(16)}/**
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
 */const $d="RestConnection",XC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class $C{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===eh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(t,n,s,o,u){const f=Sm(),m=this.bo(t,n.toUriEncodedString());rt($d,`Sending RPC '${t}' ${f}:`,m,s);const g={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(g,o,u),this.vo(t,m,g,s).then(_=>(rt($d,`Received RPC '${t}' ${f}: `,_),_),_=>{throw Wa($d,`RPC '${t}' ${f} failed with error: `,_,"url: ",m,"request:",s),_})}Co(t,n,s,o,u,f){return this.So(t,n,s,o,u)}Do(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ao}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}bo(t,n){const s=XC[t];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
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
 */class WC{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const Ye="WebChannelConnection";class ZC extends $C{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,s,o){const u=Sm();return new Promise((f,m)=>{const g=new ST;g.setWithCredentials(!0),g.listenOnce(bT.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Lc.NO_ERROR:const E=g.getResponseJson();rt(Ye,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(E)),f(E);break;case Lc.TIMEOUT:rt(Ye,`RPC '${t}' ${u} timed out`),m(new st(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Lc.HTTP_ERROR:const b=g.getStatus();if(rt(Ye,`RPC '${t}' ${u} failed with status:`,b,"response text:",g.getResponseText()),b>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const L=O==null?void 0:O.error;if(L&&L.status&&L.message){const H=function($){const Et=$.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(Et)>=0?Et:Y.UNKNOWN}(L.status);m(new st(H,L.message))}else m(new st(Y.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new st(Y.UNAVAILABLE,"Connection failed."));break;default:vt()}}finally{rt(Ye,`RPC '${t}' ${u} completed.`)}});const _=JSON.stringify(o);rt(Ye,`RPC '${t}' ${u} sending request:`,o),g.send(n,"POST",_,s,15)})}Wo(t,n,s){const o=Sm(),u=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=IT(),m=RT(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Do(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const E=u.join("");rt(Ye,`Creating RPC '${t}' stream ${o}: ${E}`,g);const b=f.createWebChannel(E,g);let O=!1,L=!1;const H=new WC({Fo:$=>{L?rt(Ye,`Not sending because RPC '${t}' stream ${o} is closed:`,$):(O||(rt(Ye,`Opening RPC '${t}' stream ${o} transport.`),b.open(),O=!0),rt(Ye,`RPC '${t}' stream ${o} sending:`,$),b.send($))},Mo:()=>b.close()}),tt=($,Et,dt)=>{$.listen(Et,ot=>{try{dt(ot)}catch(_t){setTimeout(()=>{throw _t},0)}})};return tt(b,wl.EventType.OPEN,()=>{L||(rt(Ye,`RPC '${t}' stream ${o} transport opened.`),H.Qo())}),tt(b,wl.EventType.CLOSE,()=>{L||(L=!0,rt(Ye,`RPC '${t}' stream ${o} transport closed`),H.Uo())}),tt(b,wl.EventType.ERROR,$=>{L||(L=!0,Wa(Ye,`RPC '${t}' stream ${o} transport errored:`,$),H.Uo(new st(Y.UNAVAILABLE,"The operation could not be completed")))}),tt(b,wl.EventType.MESSAGE,$=>{var Et;if(!L){const dt=$.data[0];qt(!!dt);const ot=dt,_t=(ot==null?void 0:ot.error)||((Et=ot[0])===null||Et===void 0?void 0:Et.error);if(_t){rt(Ye,`RPC '${t}' stream ${o} received error:`,_t);const mt=_t.status;let wt=function(R){const N=Ee[R];if(N!==void 0)return a0(N)}(mt),M=_t.message;wt===void 0&&(wt=Y.INTERNAL,M="Unknown error status: "+mt+" with message "+_t.message),L=!0,H.Uo(new st(wt,M)),b.close()}else rt(Ye,`RPC '${t}' stream ${o} received:`,dt),H.Ko(dt)}}),tt(m,wT.STAT_EVENT,$=>{$.stat===cm.PROXY?rt(Ye,`RPC '${t}' stream ${o} detected buffering proxy`):$.stat===cm.NOPROXY&&rt(Ye,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{H.$o()},0),H}}function Wd(){return typeof document<"u"?document:null}/**
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
 */function bh(r){return new nC(r,!0)}/**
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
 */class E0{constructor(t,n,s=1e3,o=1.5,u=6e4){this.Ti=t,this.timerId=n,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,n-s);o>0&&rt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const lE="PersistentStream";class T0{constructor(t,n,s,o,u,f,m,g){this.Ti=t,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new E0(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===Y.RESOURCE_EXHAUSTED?(Wi(n.toString()),Wi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===n&&this.V_(s,o)},s=>{t(()=>{const o=new st(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(t,n){const s=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return rt(lE,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(rt(lE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JC extends T0{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const n=sC(this.serializer,t),s=function(u){if(!("targetChange"in u))return At.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?At.min():f.readTime?gi(f.readTime):At.min()}(t);return this.listener.p_(n,s)}y_(t){const n={};n.database=Tm(this.serializer),n.addTarget=function(u,f){let m;const g=f.target;if(m=pm(g)?{documents:lC(u,g)}:{query:uC(u,g).ht},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=u0(u,f.resumeToken);const _=ym(u,f.expectedCount);_!==null&&(m.expectedCount=_)}else if(f.snapshotVersion.compareTo(At.min())>0){m.readTime=ah(u,f.snapshotVersion.toTimestamp());const _=ym(u,f.expectedCount);_!==null&&(m.expectedCount=_)}return m}(this.serializer,t);const s=hC(this.serializer,t);s&&(n.labels=s),this.I_(n)}w_(t){const n={};n.database=Tm(this.serializer),n.removeTarget=t,this.I_(n)}}class tD extends T0{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return qt(!!t.streamToken),this.lastStreamToken=t.streamToken,qt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){qt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const n=oC(t.writeResults,t.commitTime),s=gi(t.commitTime);return this.listener.v_(s,n)}C_(){const t={};t.database=Tm(this.serializer),this.I_(t)}b_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>aC(this.serializer,s))};this.I_(n)}}/**
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
 */class eD{}class nD extends eD{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new st(Y.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.So(t,vm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new st(Y.UNKNOWN,u.toString())})}Co(t,n,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Co(t,vm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new st(Y.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class iD{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Wi(n),this.N_=!1):rt("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const qs="RemoteStore";class rD{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(f=>{s.enqueueAndForget(async()=>{Qs(this)&&(rt(qs,"Restarting streams for network reachability change."),await async function(g){const _=St(g);_.W_.add(4),await Jl(_),_.j_.set("Unknown"),_.W_.delete(4),await wh(_)}(this))})}),this.j_=new iD(s,o)}}async function wh(r){if(Qs(r))for(const t of r.G_)await t(!0)}async function Jl(r){for(const t of r.G_)await t(!1)}function A0(r,t){const n=St(r);n.K_.has(t.targetId)||(n.K_.set(t.targetId,t),lp(n)?op(n):co(n).c_()&&ap(n,t))}function sp(r,t){const n=St(r),s=co(n);n.K_.delete(t),s.c_()&&S0(n,t),n.K_.size===0&&(s.c_()?s.P_():Qs(n)&&n.j_.set("Unknown"))}function ap(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}co(r).y_(t)}function S0(r,t){r.H_.Ne(t),co(r).w_(t)}function op(r){r.H_=new Z1({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.K_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),co(r).start(),r.j_.B_()}function lp(r){return Qs(r)&&!co(r).u_()&&r.K_.size>0}function Qs(r){return St(r).W_.size===0}function b0(r){r.H_=void 0}async function sD(r){r.j_.set("Online")}async function aD(r){r.K_.forEach((t,n)=>{ap(r,t)})}async function oD(r,t){b0(r),lp(r)?(r.j_.q_(t),op(r)):r.j_.set("Unknown")}async function lD(r,t,n){if(r.j_.set("Online"),t instanceof l0&&t.state===2&&t.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.K_.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.K_.delete(m),o.H_.removeTarget(m))}(r,t)}catch(s){rt(qs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await lh(r,s)}else if(t instanceof qc?r.H_.We(t):t instanceof o0?r.H_.Ze(t):r.H_.je(t),!n.isEqual(At.min()))try{const s=await v0(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.H_.ot(f);return m.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=u.K_.get(_);E&&u.K_.set(_,E.withResumeToken(g.resumeToken,f))}}),m.targetMismatches.forEach((g,_)=>{const E=u.K_.get(g);if(!E)return;u.K_.set(g,E.withResumeToken(Fe.EMPTY_BYTE_STRING,E.snapshotVersion)),S0(u,g);const b=new kr(E.target,g,_,E.sequenceNumber);ap(u,b)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){rt(qs,"Failed to raise snapshot:",s),await lh(r,s)}}async function lh(r,t,n){if(!lo(t))throw t;r.W_.add(1),await Jl(r),r.j_.set("Offline"),n||(n=()=>v0(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{rt(qs,"Retrying IndexedDB access"),await n(),r.W_.delete(1),await wh(r)})}function w0(r,t){return t().catch(n=>lh(r,n,t))}async function Rh(r){const t=St(r),n=Gr(t);let s=t.U_.length>0?t.U_[t.U_.length-1].batchId:Fm;for(;uD(t);)try{const o=await FC(t.localStore,s);if(o===null){t.U_.length===0&&n.P_();break}s=o.batchId,cD(t,o)}catch(o){await lh(t,o)}R0(t)&&I0(t)}function uD(r){return Qs(r)&&r.U_.length<10}function cD(r,t){r.U_.push(t);const n=Gr(r);n.c_()&&n.S_&&n.b_(t.mutations)}function R0(r){return Qs(r)&&!Gr(r).u_()&&r.U_.length>0}function I0(r){Gr(r).start()}async function hD(r){Gr(r).C_()}async function fD(r){const t=Gr(r);for(const n of r.U_)t.b_(n.mutations)}async function dD(r,t,n){const s=r.U_.shift(),o=Zm.from(s,t,n);await w0(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Rh(r)}async function mD(r,t){t&&Gr(r).S_&&await async function(s,o){if(function(f){return $1(f)&&f!==Y.ABORTED}(o.code)){const u=s.U_.shift();Gr(s).h_(),await w0(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Rh(s)}}(r,t),R0(r)&&I0(r)}async function uE(r,t){const n=St(r);n.asyncQueue.verifyOperationInProgress(),rt(qs,"RemoteStore received new credentials");const s=Qs(n);n.W_.add(3),await Jl(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await wh(n)}async function pD(r,t){const n=St(r);t?(n.W_.delete(2),await wh(n)):t||(n.W_.add(2),await Jl(n),n.j_.set("Unknown"))}function co(r){return r.J_||(r.J_=function(n,s,o){const u=St(n);return u.M_(),new JC(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:sD.bind(null,r),No:aD.bind(null,r),Lo:oD.bind(null,r),p_:lD.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),lp(r)?op(r):r.j_.set("Unknown")):(await r.J_.stop(),b0(r))})),r.J_}function Gr(r){return r.Y_||(r.Y_=function(n,s,o){const u=St(n);return u.M_(),new tD(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:hD.bind(null,r),Lo:mD.bind(null,r),D_:fD.bind(null,r),v_:dD.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await Rh(r)):(await r.Y_.stop(),r.U_.length>0&&(rt(qs,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
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
 */class up{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,m=new up(t,n,f,o,u);return m.start(s),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new st(Y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cp(r,t){if(Wi("AsyncQueue",`${t}: ${r}`),lo(r))return new st(Y.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class $a{static emptySet(t){return new $a(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ct.comparator(n.key,s.key):(n,s)=>ct.comparator(n.key,s.key),this.keyedMap=Rl(),this.sortedSet=new se(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof $a)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new $a;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class cE{constructor(){this.Z_=new se(ct.comparator)}track(t){const n=t.doc.key,s=this.Z_.get(n);s?t.type!==0&&s.type===3?this.Z_=this.Z_.insert(n,t):t.type===3&&s.type!==1?this.Z_=this.Z_.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Z_=this.Z_.remove(n):t.type===1&&s.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):vt():this.Z_=this.Z_.insert(n,t)}X_(){const t=[];return this.Z_.inorderTraversal((n,s)=>{t.push(s)}),t}}class no{constructor(t,n,s,o,u,f,m,g,_){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new no(t,n,$a.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&vh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class gD{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class _D{constructor(){this.queries=hE(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const o=St(n),u=o.queries;o.queries=hE(),u.forEach((f,m)=>{for(const g of m.ta)g.onError(s)})})(this,new st(Y.ABORTED,"Firestore shutting down"))}}function hE(){return new Ks(r=>YT(r),vh)}async function C0(r,t){const n=St(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.na()&&t.ra()&&(s=2):(u=new gD,s=t.ra()?0:1);try{switch(s){case 0:u.ea=await n.onListen(o,!0);break;case 1:u.ea=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=cp(f,`Initialization of query '${Ha(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.ta.push(t),t.sa(n.onlineState),u.ea&&t.oa(u.ea)&&hp(n)}async function D0(r,t){const n=St(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.ta.indexOf(t);f>=0&&(u.ta.splice(f,1),u.ta.length===0?o=t.ra()?0:1:!u.na()&&t.ra()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function yD(r,t){const n=St(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.ta)m.oa(o)&&(s=!0);f.ea=o}}s&&hp(n)}function vD(r,t,n){const s=St(r),o=s.queries.get(t);if(o)for(const u of o.ta)u.onError(n);s.queries.delete(t)}function hp(r){r.ia.forEach(t=>{t.next()})}var bm,fE;(fE=bm||(bm={}))._a="default",fE.Cache="cache";class O0{constructor(t,n,s){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new no(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){if(!t.fromCache||!this.ra())return!0;const s=n!=="Offline";return(!this.options.Ta||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}la(t){if(t.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(t){t=no.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==bm.Cache}}/**
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
 */class N0{constructor(t){this.key=t}}class M0{constructor(t){this.key=t}}class ED{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Vt(),this.mutatedKeys=Vt(),this.ya=XT(t),this.wa=new $a(this.ya)}get Sa(){return this.fa}ba(t,n){const s=n?n.Da:new cE,o=n?n.wa:this.wa;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((E,b)=>{const O=o.get(E),L=Eh(this.query,b)?b:null,H=!!O&&this.mutatedKeys.has(O.key),tt=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let $=!1;O&&L?O.data.isEqual(L.data)?H!==tt&&(s.track({type:3,doc:L}),$=!0):this.va(O,L)||(s.track({type:2,doc:L}),$=!0,(g&&this.ya(L,g)>0||_&&this.ya(L,_)<0)&&(m=!0)):!O&&L?(s.track({type:0,doc:L}),$=!0):O&&!L&&(s.track({type:1,doc:O}),$=!0,(g||_)&&(m=!0)),$&&(L?(f=f.add(L),u=tt?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{wa:f,Da:s,ls:m,mutatedKeys:u}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const f=t.Da.X_();f.sort((E,b)=>function(L,H){const tt=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return vt()}};return tt(L)-tt(H)}(E.type,b.type)||this.ya(E.doc,b.doc)),this.Ca(s),o=o!=null&&o;const m=n&&!o?this.Fa():[],g=this.pa.size===0&&this.current&&!o?1:0,_=g!==this.ga;return this.ga=g,f.length!==0||_?{snapshot:new no(this.query,t.wa,u,f,t.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new cE,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Vt(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const n=[];return t.forEach(s=>{this.pa.has(s)||n.push(new M0(s))}),this.pa.forEach(s=>{t.has(s)||n.push(new N0(s))}),n}Oa(t){this.fa=t.gs,this.pa=Vt();const n=this.ba(t.documents);return this.applyChanges(n,!0)}Na(){return no.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const fp="SyncEngine";class TD{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class AD{constructor(t){this.key=t,this.Ba=!1}}class SD{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new Ks(m=>YT(m),vh),this.qa=new Map,this.Qa=new Set,this.$a=new se(ct.comparator),this.Ua=new Map,this.Ka=new ep,this.Wa={},this.Ga=new Map,this.za=eo.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function bD(r,t,n=!0){const s=L0(r);let o;const u=s.ka.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await V0(s,t,n,!0),o}async function wD(r,t){const n=L0(r);await V0(n,t,!0,!1)}async function V0(r,t,n,s){const o=await GC(r.localStore,pi(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await RD(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&A0(r.remoteStore,o),m}async function RD(r,t,n,s,o){r.Ha=(b,O,L)=>async function(tt,$,Et,dt){let ot=$.view.ba(Et);ot.ls&&(ot=await rE(tt.localStore,$.query,!1).then(({documents:M})=>$.view.ba(M,ot)));const _t=dt&&dt.targetChanges.get($.targetId),mt=dt&&dt.targetMismatches.get($.targetId)!=null,wt=$.view.applyChanges(ot,tt.isPrimaryClient,_t,mt);return mE(tt,$.targetId,wt.Ma),wt.snapshot}(r,b,O,L);const u=await rE(r.localStore,t,!0),f=new ED(t,u.gs),m=f.ba(u.documents),g=Zl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),_=f.applyChanges(m,r.isPrimaryClient,g);mE(r,n,_.Ma);const E=new TD(t,n,f);return r.ka.set(t,E),r.qa.has(n)?r.qa.get(n).push(t):r.qa.set(n,[t]),_.snapshot}async function ID(r,t,n){const s=St(r),o=s.ka.get(t),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(f=>!vh(f,t))),void s.ka.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Am(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&sp(s.remoteStore,o.targetId),wm(s,o.targetId)}).catch(oo)):(wm(s,o.targetId),await Am(s.localStore,o.targetId,!0))}async function CD(r,t){const n=St(r),s=n.ka.get(t),o=n.qa.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),sp(n.remoteStore,s.targetId))}async function DD(r,t,n){const s=PD(r);try{const o=await function(f,m){const g=St(f),_=Ae.now(),E=m.reduce((L,H)=>L.add(H.key),Vt());let b,O;return g.persistence.runTransaction("Locally write mutations","readwrite",L=>{let H=Zi(),tt=Vt();return g.ds.getEntries(L,E).next($=>{H=$,H.forEach((Et,dt)=>{dt.isValidDocument()||(tt=tt.add(Et))})}).next(()=>g.localDocuments.getOverlayedDocuments(L,H)).next($=>{b=$;const Et=[];for(const dt of m){const ot=G1(dt,b.get(dt.key).overlayedDocument);ot!=null&&Et.push(new $r(dt.key,ot,BT(ot.value.mapValue),Un.exists(!0)))}return g.mutationQueue.addMutationBatch(L,_,Et,m)}).next($=>{O=$;const Et=$.applyToLocalDocumentSet(b,tt);return g.documentOverlayCache.saveOverlays(L,$.batchId,Et)})}).then(()=>({batchId:O.batchId,changes:WT(b)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,g){let _=f.Wa[f.currentUser.toKey()];_||(_=new se(It)),_=_.insert(m,g),f.Wa[f.currentUser.toKey()]=_}(s,o.batchId,n),await tu(s,o.changes),await Rh(s.remoteStore)}catch(o){const u=cp(o,"Failed to persist write");n.reject(u)}}async function k0(r,t){const n=St(r);try{const s=await qC(n.localStore,t);t.targetChanges.forEach((o,u)=>{const f=n.Ua.get(u);f&&(qt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Ba=!0:o.modifiedDocuments.size>0?qt(f.Ba):o.removedDocuments.size>0&&(qt(f.Ba),f.Ba=!1))}),await tu(n,s,t)}catch(s){await oo(s)}}function dE(r,t,n){const s=St(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.ka.forEach((u,f)=>{const m=f.view.sa(t);m.snapshot&&o.push(m.snapshot)}),function(f,m){const g=St(f);g.onlineState=m;let _=!1;g.queries.forEach((E,b)=>{for(const O of b.ta)O.sa(m)&&(_=!0)}),_&&hp(g)}(s.eventManager,t),o.length&&s.La.p_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function OD(r,t,n){const s=St(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Ua.get(t),u=o&&o.key;if(u){let f=new se(ct.comparator);f=f.insert(u,$e.newNoDocument(u,At.min()));const m=Vt().add(u),g=new Sh(At.min(),new Map,new se(It),f,m);await k0(s,g),s.$a=s.$a.remove(u),s.Ua.delete(t),dp(s)}else await Am(s.localStore,t,!1).then(()=>wm(s,t,n)).catch(oo)}async function ND(r,t){const n=St(r),s=t.batch.batchId;try{const o=await jC(n.localStore,t);P0(n,s,null),U0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await tu(n,o)}catch(o){await oo(o)}}async function MD(r,t,n){const s=St(r);try{const o=await function(f,m){const g=St(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let E;return g.mutationQueue.lookupMutationBatch(_,m).next(b=>(qt(b!==null),E=b.keys(),g.mutationQueue.removeMutationBatch(_,b))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E)).next(()=>g.localDocuments.getDocuments(_,E))})}(s.localStore,t);P0(s,t,n),U0(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await tu(s,o)}catch(o){await oo(o)}}function U0(r,t){(r.Ga.get(t)||[]).forEach(n=>{n.resolve()}),r.Ga.delete(t)}function P0(r,t,n){const s=St(r);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Wa[s.currentUser.toKey()]=o}}function wm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.qa.get(t))r.ka.delete(s),n&&r.La.Ja(s,n);r.qa.delete(t),r.isPrimaryClient&&r.Ka.br(t).forEach(s=>{r.Ka.containsKey(s)||x0(r,s)})}function x0(r,t){r.Qa.delete(t.path.canonicalString());const n=r.$a.get(t);n!==null&&(sp(r.remoteStore,n),r.$a=r.$a.remove(t),r.Ua.delete(n),dp(r))}function mE(r,t,n){for(const s of n)s instanceof N0?(r.Ka.addReference(s.key,t),VD(r,s)):s instanceof M0?(rt(fp,"Document no longer in limbo: "+s.key),r.Ka.removeReference(s.key,t),r.Ka.containsKey(s.key)||x0(r,s.key)):vt()}function VD(r,t){const n=t.key,s=n.path.canonicalString();r.$a.get(n)||r.Qa.has(s)||(rt(fp,"New document in limbo: "+n),r.Qa.add(s),dp(r))}function dp(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const n=new ct(te.fromString(t)),s=r.za.next();r.Ua.set(s,new AD(n)),r.$a=r.$a.insert(n,s),A0(r.remoteStore,new kr(pi(Xm(n.path)),s,"TargetPurposeLimboResolution",gh.ae))}}async function tu(r,t,n){const s=St(r),o=[],u=[],f=[];s.ka.isEmpty()||(s.ka.forEach((m,g)=>{f.push(s.Ha(g,t,n).then(_=>{var E;if((_||n)&&s.isPrimaryClient){const b=_?!_.fromCache:(E=n==null?void 0:n.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,b?"current":"not-current")}if(_){o.push(_);const b=ip.Yi(g.targetId,_);u.push(b)}}))}),await Promise.all(f),s.La.p_(o),await async function(g,_){const E=St(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>X.forEach(_,O=>X.forEach(O.Hi,L=>E.persistence.referenceDelegate.addReference(b,O.targetId,L)).next(()=>X.forEach(O.Ji,L=>E.persistence.referenceDelegate.removeReference(b,O.targetId,L)))))}catch(b){if(!lo(b))throw b;rt(rp,"Failed to update sequence numbers: "+b)}for(const b of _){const O=b.targetId;if(!b.fromCache){const L=E.Ts.get(O),H=L.snapshotVersion,tt=L.withLastLimboFreeSnapshotVersion(H);E.Ts=E.Ts.insert(O,tt)}}}(s.localStore,u))}async function kD(r,t){const n=St(r);if(!n.currentUser.isEqual(t)){rt(fp,"User change. New user:",t.toKey());const s=await y0(n.localStore,t);n.currentUser=t,function(u,f){u.Ga.forEach(m=>{m.forEach(g=>{g.reject(new st(Y.CANCELLED,f))})}),u.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await tu(n,s.Rs)}}function UD(r,t){const n=St(r),s=n.Ua.get(t);if(s&&s.Ba)return Vt().add(s.key);{let o=Vt();const u=n.qa.get(t);if(!u)return o;for(const f of u){const m=n.ka.get(f);o=o.unionWith(m.view.Sa)}return o}}function L0(r){const t=St(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=k0.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=UD.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=OD.bind(null,t),t.La.p_=yD.bind(null,t.eventManager),t.La.Ja=vD.bind(null,t.eventManager),t}function PD(r){const t=St(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ND.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=MD.bind(null,t),t}class uh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=bh(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return BC(this.persistence,new xC,t.initialUser,this.serializer)}Xa(t){return new _0(np.ri,this.serializer)}Za(t){return new QC}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uh.provider={build:()=>new uh};class xD extends uh{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){qt(this.persistence.referenceDelegate instanceof oh);const s=this.persistence.referenceDelegate.garbageCollector;return new AC(s,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new _0(s=>oh.ri(s,n),this.serializer)}}class Rm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>dE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=kD.bind(null,this.syncEngine),await pD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new _D}()}createDatastore(t){const n=bh(t.databaseInfo.databaseId),s=function(u){return new ZC(u)}(t.databaseInfo);return function(u,f,m,g){return new nD(u,f,m,g)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,u,f,m){return new rD(s,o,u,f,m)}(this.localStore,this.datastore,t.asyncQueue,n=>dE(this.syncEngine,n,0),function(){return oE.D()?new oE:new YC}())}createSyncEngine(t,n){return function(o,u,f,m,g,_,E){const b=new SD(o,u,f,m,g,_);return E&&(b.ja=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=St(o);rt(qs,"RemoteStore shutting down."),u.W_.add(5),await Jl(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Rm.provider={build:()=>new Rm};/**
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
 */class z0{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Wi("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Kr="FirestoreClient";class LD{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Xe.UNAUTHENTICATED,this.clientId=OT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{rt(Kr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(rt(Kr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=cp(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Zd(r,t){r.asyncQueue.verifyOperationInProgress(),rt(Kr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await y0(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function pE(r,t){r.asyncQueue.verifyOperationInProgress();const n=await zD(r);rt(Kr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>uE(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>uE(t.remoteStore,o)),r._onlineComponents=t}async function zD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){rt(Kr,"Using user provided OfflineComponentProvider");try{await Zd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Wa("Error using user provided cache. Falling back to memory cache: "+n),await Zd(r,new uh)}}else rt(Kr,"Using default OfflineComponentProvider"),await Zd(r,new xD(void 0));return r._offlineComponents}async function B0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(rt(Kr,"Using user provided OnlineComponentProvider"),await pE(r,r._uninitializedComponentsProvider._online)):(rt(Kr,"Using default OnlineComponentProvider"),await pE(r,new Rm))),r._onlineComponents}function BD(r){return B0(r).then(t=>t.syncEngine)}async function j0(r){const t=await B0(r),n=t.eventManager;return n.onListen=bD.bind(null,t.syncEngine),n.onUnlisten=ID.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=wD.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=CD.bind(null,t.syncEngine),n}function jD(r,t,n={}){const s=new Yi;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,g,_){const E=new z0({next:O=>{E.su(),f.enqueueAndForget(()=>D0(u,b));const L=O.docs.has(m);!L&&O.fromCache?_.reject(new st(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):L&&O.fromCache&&g&&g.source==="server"?_.reject(new st(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(O)},error:O=>_.reject(O)}),b=new O0(Xm(m.path),E,{includeMetadataChanges:!0,Ta:!0});return C0(u,b)}(await j0(r),r.asyncQueue,t,n,s)),s.promise}function qD(r,t,n={}){const s=new Yi;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,g,_){const E=new z0({next:O=>{E.su(),f.enqueueAndForget(()=>D0(u,b)),O.fromCache&&g.source==="server"?_.reject(new st(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(O)},error:O=>_.reject(O)}),b=new O0(m,E,{includeMetadataChanges:!0,Ta:!0});return C0(u,b)}(await j0(r),r.asyncQueue,t,n,s)),s.promise}/**
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
 */function q0(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const gE=new Map;/**
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
 */function H0(r,t,n){if(!n)throw new st(Y.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function HD(r,t,n,s){if(t===!0&&s===!0)throw new st(Y.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function _E(r){if(!ct.isDocumentKey(r))throw new st(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function yE(r){if(ct.isDocumentKey(r))throw new st(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ih(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":vt()}function Kn(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new st(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ih(r);throw new st(Y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
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
 */const F0="firestore.googleapis.com",vE=!0;class EE{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new st(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=F0,this.ssl=vE}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:vE;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=g0;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<EC)throw new st(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}HD("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=q0((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new st(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new st(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new st(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ch{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new EE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new st(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new st(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new EE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new WI;switch(s.type){case"firstParty":return new e1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new st(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=gE.get(n);s&&(rt("ComponentProvider","Removing Datastore"),gE.delete(n),s.terminate())}(this),Promise.resolve()}}function FD(r,t,n,s={}){var o;const u=(r=Kn(r,Ch))._getSettings(),f=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),m=`${t}:${n}`;u.host!==F0&&u.host!==m&&Wa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},u),{host:m,ssl:!1,emulatorOptions:s});if(!xs(g,f)&&(r._setSettings(g),s.mockUserToken)){let _,E;if(typeof s.mockUserToken=="string")_=s.mockUserToken,E=Xe.MOCK_USER;else{_=xE(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new st(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Xe(b)}r._authCredentials=new ZI(new CT(_,E))}}/**
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
 */class Ys{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ys(this.firestore,t,this._query)}}class rn{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rn(this.firestore,t,this._key)}}class Lr extends Ys{constructor(t,n,s){super(t,n,Xm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rn(this.firestore,null,new ct(t))}withConverter(t){return new Lr(this.firestore,t,this._path)}}function mp(r,t,...n){if(r=re(r),H0("collection","path",t),r instanceof Ch){const s=te.fromString(t,...n);return yE(s),new Lr(r,null,s)}{if(!(r instanceof rn||r instanceof Lr))throw new st(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(te.fromString(t,...n));return yE(s),new Lr(r.firestore,null,s)}}function io(r,t,...n){if(r=re(r),arguments.length===1&&(t=OT.newId()),H0("doc","path",t),r instanceof Ch){const s=te.fromString(t,...n);return _E(s),new rn(r,null,new ct(s))}{if(!(r instanceof rn||r instanceof Lr))throw new st(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(te.fromString(t,...n));return _E(s),new rn(r.firestore,r instanceof Lr?r.converter:null,new ct(s))}}/**
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
 */const TE="AsyncQueue";class AE{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new E0(this,"async_queue_retry"),this.Su=()=>{const s=Wd();s&&rt(TE,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=t;const n=Wd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=Wd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Yi;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!lo(t))throw t;rt(TE,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.bu.then(()=>(this.pu=!0,t().catch(s=>{this.gu=s,this.pu=!1;const o=function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m}(s);throw Wi("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.bu=n,n}enqueueAfterDelay(t,n,s){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const o=up.createAndSchedule(this,t,n,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&vt()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}class Xs extends Ch{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new AE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new AE(t),this._firestoreClient=void 0,await t}}}function GD(r,t){const n=typeof r=="object"?r:Mm(),s=typeof r=="string"?r:eh,o=fh(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=kE("firestore");u&&FD(o,...u)}return o}function pp(r){if(r._terminated)throw new st(Y.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||KD(r),r._firestoreClient}function KD(r){var t,n,s;const o=r._freezeSettings(),u=function(m,g,_,E){return new g1(m,g,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,q0(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new LD(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class ro{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ro(Fe.fromBase64String(t))}catch(n){throw new st(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ro(Fe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Dh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new st(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class gp{constructor(t){this._methodName=t}}/**
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
 */class _p{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new st(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new st(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return It(this._lat,t._lat)||It(this._long,t._long)}}/**
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
 */class yp{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}}/**
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
 */const QD=/^__.*__$/;class YD{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new $r(t,this.data,this.fieldMask,n,this.fieldTransforms):new Wl(t,this.data,n,this.fieldTransforms)}}class G0{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new $r(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function K0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw vt()}}class vp{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new vp(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ku({path:s,Qu:!1});return o.$u(t),o}Uu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return ch(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(K0(this.Lu)&&QD.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class XD{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||bh(t)}ju(t,n,s,o=!1){return new vp({Lu:t,methodName:n,zu:s,path:He.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oh(r){const t=r._freezeSettings(),n=bh(r._databaseId);return new XD(r._databaseId,!!t.ignoreUndefinedProperties,n)}function Q0(r,t,n,s,o,u={}){const f=r.ju(u.merge||u.mergeFields?2:0,t,n,o);Ep("Data must be an object, but it was:",f,s);const m=Y0(s,f);let g,_;if(u.merge)g=new En(f.fieldMask),_=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const b of u.mergeFields){const O=Im(t,b,n);if(!f.contains(O))throw new st(Y.INVALID_ARGUMENT,`Field '${O}' is specified in your field mask but missing from your input data.`);$0(E,O)||E.push(O)}g=new En(E),_=f.fieldTransforms.filter(b=>g.covers(b.field))}else g=null,_=f.fieldTransforms;return new YD(new un(m),g,_)}class Nh extends gp{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Nh}}function $D(r,t,n,s){const o=r.ju(1,t,n);Ep("Data must be an object, but it was:",o,s);const u=[],f=un.empty();Xr(s,(g,_)=>{const E=Tp(t,g,n);_=re(_);const b=o.Uu(E);if(_ instanceof Nh)u.push(E);else{const O=eu(_,b);O!=null&&(u.push(E),f.set(E,O))}});const m=new En(u);return new G0(f,m,o.fieldTransforms)}function WD(r,t,n,s,o,u){const f=r.ju(1,t,n),m=[Im(t,s,n)],g=[o];if(u.length%2!=0)throw new st(Y.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let O=0;O<u.length;O+=2)m.push(Im(t,u[O])),g.push(u[O+1]);const _=[],E=un.empty();for(let O=m.length-1;O>=0;--O)if(!$0(_,m[O])){const L=m[O];let H=g[O];H=re(H);const tt=f.Uu(L);if(H instanceof Nh)_.push(L);else{const $=eu(H,tt);$!=null&&(_.push(L),E.set(L,$))}}const b=new En(_);return new G0(E,b,f.fieldTransforms)}function ZD(r,t,n,s=!1){return eu(n,r.ju(s?4:3,t))}function eu(r,t){if(X0(r=re(r)))return Ep("Unsupported field value:",t,r),Y0(r,t);if(r instanceof gp)return function(s,o){if(!K0(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let g=eu(m,o.Ku(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}}(r,t)}return function(s,o){if((s=re(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return z1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ae.fromDate(s);return{timestampValue:ah(o.serializer,u)}}if(s instanceof Ae){const u=new Ae(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ah(o.serializer,u)}}if(s instanceof _p)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ro)return{bytesValue:u0(o.serializer,s._byteString)};if(s instanceof rn){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:tp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof yp)return function(f,m){return{mapValue:{fields:{[LT]:{stringValue:zT},[nh]:{arrayValue:{values:f.toArray().map(_=>{if(typeof _!="number")throw m.Wu("VectorValues must only contain numeric values.");return $m(m.serializer,_)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${Ih(s)}`)}(r,t)}function Y0(r,t){const n={};return MT(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xr(r,(s,o)=>{const u=eu(o,t.qu(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function X0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ae||r instanceof _p||r instanceof ro||r instanceof rn||r instanceof gp||r instanceof yp)}function Ep(r,t,n){if(!X0(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=Ih(n);throw s==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+s)}}function Im(r,t,n){if((t=re(t))instanceof Dh)return t._internalPath;if(typeof t=="string")return Tp(r,t);throw ch("Field path arguments must be of type string or ",r,!1,void 0,n)}const JD=new RegExp("[~\\*/\\[\\]]");function Tp(r,t,n){if(t.search(JD)>=0)throw ch(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Dh(...t.split("."))._internalPath}catch{throw ch(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function ch(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new st(Y.INVALID_ARGUMENT,m+r+g)}function $0(r,t){return r.some(n=>n.isEqual(t))}/**
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
 */class W0{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new rn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new tO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Mh("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tO extends W0{data(){return super.data()}}function Mh(r,t){return typeof t=="string"?Tp(r,t):t instanceof Dh?t._internalPath:t._delegate._internalPath}/**
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
 */function eO(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new st(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ap{}class Z0 extends Ap{}function Hc(r,t,...n){let s=[];t instanceof Ap&&s.push(t),s=s.concat(n),function(u){const f=u.filter(g=>g instanceof Sp).length,m=u.filter(g=>g instanceof Vh).length;if(f>1||f>0&&m>0)throw new st(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class Vh extends Z0{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new Vh(t,n,s)}_apply(t){const n=this._parse(t);return J0(t._query,n),new Ys(t.firestore,t.converter,gm(t._query,n))}_parse(t){const n=Oh(t.firestore);return function(u,f,m,g,_,E,b){let O;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new st(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){bE(b,E);const H=[];for(const tt of b)H.push(SE(g,u,tt));O={arrayValue:{values:H}}}else O=SE(g,u,b)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||bE(b,E),O=ZD(m,f,b,E==="in"||E==="not-in");return Te.create(_,E,O)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Fc(r,t,n){const s=t,o=Mh("where",r);return Vh._create(o,s,n)}class Sp extends Ap{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Sp(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Gn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(o,u){let f=o;const m=u.getFlattenedFilters();for(const g of m)J0(f,g),f=gm(f,g)}(t._query,n),new Ys(t.firestore,t.converter,gm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bp extends Z0{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new bp(t,n)}_apply(t){const n=function(o,u,f){if(o.startAt!==null)throw new st(Y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new st(Y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ql(u,f)}(t._query,this._field,this._direction);return new Ys(t.firestore,t.converter,function(o,u){const f=o.explicitOrderBy.concat([u]);return new uo(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(t._query,n))}}function nO(r,t="asc"){const n=t,s=Mh("orderBy",r);return bp._create(s,n)}function SE(r,t,n){if(typeof(n=re(n))=="string"){if(n==="")throw new st(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!QT(t)&&n.indexOf("/")!==-1)throw new st(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(te.fromString(n));if(!ct.isDocumentKey(s))throw new st(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return zv(r,new ct(s))}if(n instanceof rn)return zv(r,n._key);throw new st(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ih(n)}.`)}function bE(r,t){if(!Array.isArray(r)||r.length===0)throw new st(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function J0(r,t){const n=function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new st(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new st(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class iO{convertValue(t,n="none"){switch(Fr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return pe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Hr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw vt()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Xr(t,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(t){var n,s,o;const u=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[nh].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>pe(f.doubleValue));return new yp(u)}convertGeoPoint(t){return new _p(pe(t.latitude),pe(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=yh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(zl(t));default:return null}}convertTimestamp(t){const n=qr(t);return new Ae(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=te.fromString(t);qt(p0(s));const o=new Bl(s.get(1),s.get(3)),u=new ct(s.popFirst(5));return o.isEqual(n)||Wi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */function tA(r,t,n){let s;return s=r?r.toFirestore(t):t,s}/**
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
 */class Cl{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class eA extends W0{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Gc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Mh("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Gc extends eA{data(t={}){return super.data(t)}}class rO{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Cl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Gc(this._firestore,this._userDataWriter,s.key,s,new Cl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new st(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const g=new Gc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Cl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new Gc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Cl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return m.type!==0&&(_=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:sO(m.type),doc:g,oldIndex:_,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return vt()}}/**
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
 */function aO(r){r=Kn(r,rn);const t=Kn(r.firestore,Xs);return jD(pp(t),r._key).then(n=>cO(t,r,n))}class nA extends iO{constructor(t){super(),this.firestore=t}convertBytes(t){return new ro(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new rn(this.firestore,null,n)}}function iA(r){r=Kn(r,Ys);const t=Kn(r.firestore,Xs),n=pp(t),s=new nA(t);return eO(r._query),qD(n,r._query).then(o=>new rO(t,s,r,o))}function rA(r,t,n){r=Kn(r,rn);const s=Kn(r.firestore,Xs),o=tA(r.converter,t);return kh(s,[Q0(Oh(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Un.none())])}function oO(r,t,n,...s){r=Kn(r,rn);const o=Kn(r.firestore,Xs),u=Oh(o);let f;return f=typeof(t=re(t))=="string"||t instanceof Dh?WD(u,"updateDoc",r._key,t,n,s):$D(u,"updateDoc",r._key,t),kh(o,[f.toMutation(r._key,Un.exists(!0))])}function lO(r){return kh(Kn(r.firestore,Xs),[new Wm(r._key,Un.none())])}function uO(r,t){const n=Kn(r.firestore,Xs),s=io(r),o=tA(r.converter,t);return kh(n,[Q0(Oh(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Un.exists(!1))]).then(()=>s)}function kh(r,t){return function(s,o){const u=new Yi;return s.asyncQueue.enqueueAndForget(async()=>DD(await BD(s),o,u)),u.promise}(pp(r),t)}function cO(r,t,n){const s=n.docs.get(t._key),o=new nA(r);return new eA(r,o,t._key,s,new Cl(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(o){ao=o})(Fs),Ls(new Br("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Xs(new JI(s.getProvider("auth-internal")),new n1(f,s.getProvider("app-check-internal")),function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new st(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bl(_.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),fi(Iv,Cv,t),fi(Iv,Cv,"esm2017")})();var hO="firebase",fO="11.6.0";/**
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
 */fi(hO,fO,"app");/**
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
 */const sA="firebasestorage.googleapis.com",aA="storageBucket",dO=2*60*1e3,mO=10*60*1e3;/**
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
 */class he extends yi{constructor(t,n,s=0){super(Jd(t),`Firebase Storage: ${n} (${Jd(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,he.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Jd(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ce;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ce||(ce={}));function Jd(r){return"storage/"+r}function wp(){const r="An unknown error occurred, please check the error payload for server response.";return new he(ce.UNKNOWN,r)}function pO(r){return new he(ce.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function gO(r){return new he(ce.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _O(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new he(ce.UNAUTHENTICATED,r)}function yO(){return new he(ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vO(r){return new he(ce.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function EO(){return new he(ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function TO(){return new he(ce.CANCELED,"User canceled the upload/download.")}function AO(r){return new he(ce.INVALID_URL,"Invalid URL '"+r+"'.")}function SO(r){return new he(ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function bO(){return new he(ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+aA+"' property when initializing the app?")}function wO(){return new he(ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function RO(){return new he(ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function IO(r){return new he(ce.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Cm(r){return new he(ce.INVALID_ARGUMENT,r)}function oA(){return new he(ce.APP_DELETED,"The Firebase app was deleted.")}function CO(r){return new he(ce.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function kl(r,t){return new he(ce.INVALID_FORMAT,"String does not match format '"+r+"': "+t)}function Al(r){throw new he(ce.INTERNAL_ERROR,"Internal error: "+r)}/**
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
 */class Tn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=Tn.makeFromUrl(t,n)}catch{return new Tn(t,"")}if(s.path==="")return s;throw SO(t)}static makeFromUrl(t,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(_t){_t.path.charAt(_t.path.length-1)==="/"&&(_t.path_=_t.path_.slice(0,-1))}const f="(/(.*))?$",m=new RegExp("^gs://"+o+f,"i"),g={bucket:1,path:3};function _(_t){_t.path_=decodeURIComponent(_t.path)}const E="v[A-Za-z0-9_]+",b=n.replace(/[.]/g,"\\."),O="(/([^?#]*).*)?$",L=new RegExp(`^https?://${b}/${E}/b/${o}/o${O}`,"i"),H={bucket:1,path:3},tt=n===sA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,$="([^?#]*)",Et=new RegExp(`^https?://${tt}/${o}/${$}`,"i"),ot=[{regex:m,indices:g,postModify:u},{regex:L,indices:H,postModify:_},{regex:Et,indices:{bucket:1,path:2},postModify:_}];for(let _t=0;_t<ot.length;_t++){const mt=ot[_t],wt=mt.regex.exec(t);if(wt){const M=wt[mt.indices.bucket];let S=wt[mt.indices.path];S||(S=""),s=new Tn(M,S),mt.postModify(s);break}}if(s==null)throw AO(t);return s}}class DO{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function OO(r,t,n){let s=1,o=null,u=null,f=!1,m=0;function g(){return m===2}let _=!1;function E(...$){_||(_=!0,t.apply(null,$))}function b($){o=setTimeout(()=>{o=null,r(L,g())},$)}function O(){u&&clearTimeout(u)}function L($,...Et){if(_){O();return}if($){O(),E.call(null,$,...Et);return}if(g()||f){O(),E.call(null,$,...Et);return}s<64&&(s*=2);let ot;m===1?(m=2,ot=0):ot=(s+Math.random())*1e3,b(ot)}let H=!1;function tt($){H||(H=!0,O(),!_&&(o!==null?($||(m=2),clearTimeout(o),b(0)):$||(m=1)))}return b(0),u=setTimeout(()=>{f=!0,tt(!0)},n),tt}function NO(r){r(!1)}/**
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
 */function MO(r){return r!==void 0}function VO(r){return typeof r=="object"&&!Array.isArray(r)}function Rp(r){return typeof r=="string"||r instanceof String}function wE(r){return Ip()&&r instanceof Blob}function Ip(){return typeof Blob<"u"}function RE(r,t,n,s){if(s<t)throw Cm(`Invalid value for '${r}'. Expected ${t} or greater.`);if(s>n)throw Cm(`Invalid value for '${r}'. Expected ${n} or less.`)}/**
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
 */function Cp(r,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${r}`}function lA(r){const t=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const o=t(s)+"="+t(r[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var Ps;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Ps||(Ps={}));/**
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
 */function kO(r,t){const n=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,u=t.indexOf(r)!==-1;return n||o||u}/**
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
 */class UO{constructor(t,n,s,o,u,f,m,g,_,E,b,O=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=m,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=E,this.connectionFactory_=b,this.retry=O,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((L,H)=>{this.resolve_=L,this.reject_=H,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new Mc(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=m=>{const g=m.loaded,_=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const m=u.getErrorCode()===Ps.NO_ERROR,g=u.getStatus();if(!m||kO(g,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===Ps.ABORT;s(!1,new Mc(!1,null,E));return}const _=this.successCodes_.indexOf(g)!==-1;s(!0,new Mc(_,u))})},n=(s,o)=>{const u=this.resolve_,f=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(m,m.getResponse());MO(g)?u(g):u()}catch(g){f(g)}else if(m!==null){const g=wp();g.serverResponse=m.getErrorText(),this.errorCallback_?f(this.errorCallback_(m,g)):f(g)}else if(o.canceled){const g=this.appDelete_?oA():TO();f(g)}else{const g=EO();f(g)}};this.canceled_?n(!1,new Mc(!1,null,!0)):this.backoffId_=OO(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&NO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Mc{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function PO(r,t){t!==null&&t.length>0&&(r.Authorization="Firebase "+t)}function xO(r,t){r["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function LO(r,t){t&&(r["X-Firebase-GMPID"]=t)}function zO(r,t){t!==null&&(r["X-Firebase-AppCheck"]=t)}function BO(r,t,n,s,o,u,f=!0){const m=lA(r.urlParams),g=r.url+m,_=Object.assign({},r.headers);return LO(_,t),PO(_,n),xO(_,u),zO(_,s),new UO(g,r.method,_,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,f)}/**
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
 */function jO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qO(...r){const t=jO();if(t!==void 0){const n=new t;for(let s=0;s<r.length;s++)n.append(r[s]);return n.getBlob()}else{if(Ip())return new Blob(r);throw new he(ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function HO(r,t,n){return r.webkitSlice?r.webkitSlice(t,n):r.mozSlice?r.mozSlice(t,n):r.slice?r.slice(t,n):null}/**
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
 */function FO(r){if(typeof atob>"u")throw IO("base-64");return atob(r)}/**
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
 */const hi={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class tm{constructor(t,n){this.data=t,this.contentType=n||null}}function GO(r,t){switch(r){case hi.RAW:return new tm(uA(t));case hi.BASE64:case hi.BASE64URL:return new tm(cA(r,t));case hi.DATA_URL:return new tm(QO(t),YO(t))}throw wp()}function uA(r){const t=[];for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<r.length-1&&(r.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const u=s,f=r.charCodeAt(++n);s=65536|(u&1023)<<10|f&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function KO(r){let t;try{t=decodeURIComponent(r)}catch{throw kl(hi.DATA_URL,"Malformed data URL.")}return uA(t)}function cA(r,t){switch(r){case hi.BASE64:{const o=t.indexOf("-")!==-1,u=t.indexOf("_")!==-1;if(o||u)throw kl(r,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case hi.BASE64URL:{const o=t.indexOf("+")!==-1,u=t.indexOf("/")!==-1;if(o||u)throw kl(r,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=FO(t)}catch(o){throw o.message.includes("polyfill")?o:kl(r,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class hA{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw kl(hi.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=XO(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function QO(r){const t=new hA(r);return t.base64?cA(hi.BASE64,t.rest):KO(t.rest)}function YO(r){return new hA(r).contentType}function XO(r,t){return r.length>=t.length?r.substring(r.length-t.length)===t:!1}/**
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
 */class Vr{constructor(t,n){let s=0,o="";wE(t)?(this.data_=t,s=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(wE(this.data_)){const s=this.data_,o=HO(s,t,n);return o===null?null:new Vr(o)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new Vr(s,!0)}}static getBlob(...t){if(Ip()){const n=t.map(s=>s instanceof Vr?s.data_:s);return new Vr(qO.apply(null,n))}else{const n=t.map(f=>Rp(f)?GO(hi.RAW,f).data:f.data_);let s=0;n.forEach(f=>{s+=f.byteLength});const o=new Uint8Array(s);let u=0;return n.forEach(f=>{for(let m=0;m<f.length;m++)o[u++]=f[m]}),new Vr(o,!0)}}uploadData(){return this.data_}}/**
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
 */function fA(r){let t;try{t=JSON.parse(r)}catch{return null}return VO(t)?t:null}/**
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
 */function $O(r){if(r.length===0)return null;const t=r.lastIndexOf("/");return t===-1?"":r.slice(0,t)}function WO(r,t){const n=t.split("/").filter(s=>s.length>0).join("/");return r.length===0?n:r+"/"+n}function dA(r){const t=r.lastIndexOf("/",r.length-2);return t===-1?r:r.slice(t+1)}/**
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
 */function ZO(r,t){return t}class nn{constructor(t,n,s,o){this.server=t,this.local=n||t,this.writable=!!s,this.xform=o||ZO}}let Vc=null;function JO(r){return!Rp(r)||r.length<2?r:dA(r)}function mA(){if(Vc)return Vc;const r=[];r.push(new nn("bucket")),r.push(new nn("generation")),r.push(new nn("metageneration")),r.push(new nn("name","fullPath",!0));function t(u,f){return JO(f)}const n=new nn("name");n.xform=t,r.push(n);function s(u,f){return f!==void 0?Number(f):f}const o=new nn("size");return o.xform=s,r.push(o),r.push(new nn("timeCreated")),r.push(new nn("updated")),r.push(new nn("md5Hash",null,!0)),r.push(new nn("cacheControl",null,!0)),r.push(new nn("contentDisposition",null,!0)),r.push(new nn("contentEncoding",null,!0)),r.push(new nn("contentLanguage",null,!0)),r.push(new nn("contentType",null,!0)),r.push(new nn("metadata","customMetadata",!0)),Vc=r,Vc}function tN(r,t){function n(){const s=r.bucket,o=r.fullPath,u=new Tn(s,o);return t._makeStorageReference(u)}Object.defineProperty(r,"ref",{get:n})}function eN(r,t,n){const s={};s.type="file";const o=n.length;for(let u=0;u<o;u++){const f=n[u];s[f.local]=f.xform(s,t[f.server])}return tN(s,r),s}function pA(r,t,n){const s=fA(t);return s===null?null:eN(r,s,n)}function nN(r,t,n,s){const o=fA(t);if(o===null||!Rp(o.downloadTokens))return null;const u=o.downloadTokens;if(u.length===0)return null;const f=encodeURIComponent;return u.split(",").map(_=>{const E=r.bucket,b=r.fullPath,O="/b/"+f(E)+"/o/"+f(b),L=Cp(O,n,s),H=lA({alt:"media",token:_});return L+H})[0]}function iN(r,t){const n={},s=t.length;for(let o=0;o<s;o++){const u=t[o];u.writable&&(n[u.server]=r[u.local])}return JSON.stringify(n)}class gA{constructor(t,n,s,o){this.url=t,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _A(r){if(!r)throw wp()}function rN(r,t){function n(s,o){const u=pA(r,o,t);return _A(u!==null),u}return n}function sN(r,t){function n(s,o){const u=pA(r,o,t);return _A(u!==null),nN(u,o,r.host,r._protocol)}return n}function yA(r){function t(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=yO():o=_O():n.getStatus()===402?o=gO(r.bucket):n.getStatus()===403?o=vO(r.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return t}function aN(r){const t=yA(r);function n(s,o){let u=t(s,o);return s.getStatus()===404&&(u=pO(r.path)),u.serverResponse=o.serverResponse,u}return n}function oN(r,t,n){const s=t.fullServerUrl(),o=Cp(s,r.host,r._protocol),u="GET",f=r.maxOperationRetryTime,m=new gA(o,u,sN(r,n),f);return m.errorHandler=aN(t),m}function lN(r,t){return r&&r.contentType||t&&t.type()||"application/octet-stream"}function uN(r,t,n){const s=Object.assign({},n);return s.fullPath=r.path,s.size=t.size(),s.contentType||(s.contentType=lN(null,t)),s}function cN(r,t,n,s,o){const u=t.bucketOnlyServerUrl(),f={"X-Goog-Upload-Protocol":"multipart"};function m(){let ot="";for(let _t=0;_t<2;_t++)ot=ot+Math.random().toString().slice(2);return ot}const g=m();f["Content-Type"]="multipart/related; boundary="+g;const _=uN(t,s,o),E=iN(_,n),b="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+g+`\r
Content-Type: `+_.contentType+`\r
\r
`,O=`\r
--`+g+"--",L=Vr.getBlob(b,s,O);if(L===null)throw wO();const H={name:_.fullPath},tt=Cp(u,r.host,r._protocol),$="POST",Et=r.maxUploadRetryTime,dt=new gA(tt,$,rN(r,n),Et);return dt.urlParams=H,dt.headers=f,dt.body=L.uploadData(),dt.errorHandler=yA(t),dt}class hN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ps.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ps.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ps.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,o){if(this.sent_)throw Al("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const u in o)o.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,o[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Al("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Al("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Al("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Al("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class fN extends hN{initXhr(){this.xhr_.responseType="text"}}function vA(){return new fN}/**
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
 */class Hs{constructor(t,n){this._service=t,n instanceof Tn?this._location=n:this._location=Tn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Hs(t,n)}get root(){const t=new Tn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dA(this._location.path)}get storage(){return this._service}get parent(){const t=$O(this._location.path);if(t===null)return null;const n=new Tn(this._location.bucket,t);return new Hs(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw CO(t)}}function dN(r,t,n){r._throwIfRoot("uploadBytes");const s=cN(r.storage,r._location,mA(),new Vr(t,!0),n);return r.storage.makeRequestWithTokens(s,vA).then(o=>({metadata:o,ref:r}))}function mN(r){r._throwIfRoot("getDownloadURL");const t=oN(r.storage,r._location,mA());return r.storage.makeRequestWithTokens(t,vA).then(n=>{if(n===null)throw RO();return n})}function pN(r,t){const n=WO(r._location.path,t),s=new Tn(r._location.bucket,n);return new Hs(r.storage,s)}/**
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
 */function gN(r){return/^[A-Za-z]+:\/\//.test(r)}function _N(r,t){return new Hs(r,t)}function EA(r,t){if(r instanceof Dp){const n=r;if(n._bucket==null)throw bO();const s=new Hs(n,n._bucket);return t!=null?EA(s,t):s}else return t!==void 0?pN(r,t):r}function yN(r,t){if(t&&gN(t)){if(r instanceof Dp)return _N(r,t);throw Cm("To use ref(service, url), the first argument must be a Storage instance.")}else return EA(r,t)}function IE(r,t){const n=t==null?void 0:t[aA];return n==null?null:Tn.makeFromBucketSpec(n,r)}function vN(r,t,n,s={}){r.host=`${t}:${n}`,r._protocol="http";const{mockUserToken:o}=s;o&&(r._overrideAuthToken=typeof o=="string"?o:xE(o,r.app.options.projectId))}class Dp{constructor(t,n,s,o,u){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._bucket=null,this._host=sA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dO,this._maxUploadRetryTime=mO,this._requests=new Set,o!=null?this._bucket=Tn.makeFromBucketSpec(o,this._host):this._bucket=IE(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Tn.makeFromBucketSpec(this._url,t):this._bucket=IE(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){RE("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){RE("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Hs(this,t)}_makeRequest(t,n,s,o,u=!0){if(this._deleted)return new DO(oA());{const f=BO(t,this._appId,s,o,n,this._firebaseVersion,u);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(t,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,o).getPromise()}}const CE="@firebase/storage",DE="0.13.7";/**
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
 */const TA="storage";function EN(r,t,n){return r=re(r),dN(r,t,n)}function TN(r){return r=re(r),mN(r)}function AN(r,t){return r=re(r),yN(r,t)}function SN(r=Mm(),t){r=re(r);const s=fh(r,TA).getImmediate({identifier:t}),o=kE("storage");return o&&bN(s,...o),s}function bN(r,t,n,s={}){vN(r,t,n,s)}function wN(r,{instanceIdentifier:t}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new Dp(n,s,o,t,Fs)}function RN(){Ls(new Br(TA,wN,"PUBLIC").setMultipleInstances(!0)),fi(CE,DE,""),fi(CE,DE,"esm2017")}RN();const IN={apiKey:"AIzaSyBvzkF5T6wEwBopwbBoCUAG4nmMrew_C5M",authDomain:"financeappuek.firebaseapp.com",databaseURL:"https://financeappuek-default-rtdb.europe-west1.firebasedatabase.app",projectId:"financeappuek",storageBucket:"financeappuek.firebasestorage.app",messagingSenderId:"1090939964421",appId:"1:1090939964421:web:37f1c58825515301ee206c"},Op=BE(IN),zr=GD(Op),Hn=XI(Op),CN=SN(Op),DN=async r=>{if(!r)return;console.log("ZAPISUJĘ UŻYTKOWNIKA DO FIRESTORE:",r);const t=io(zr,"users",r.uid);await rA(t,{uid:r.uid,email:r.email,displayName:r.displayName||"",createdAt:new Date})};function ON({onLogin:r,goToRegister:t}){const[n,s]=Wt.useState(""),[o,u]=Wt.useState(""),f=async m=>{m.preventDefault();try{await kR(Hn,Bm),await VR(Hn,n,o),r()}catch(g){alert("Błąd logowania: "+g.message)}};return Z.jsx("div",{className:"d-flex justify-content-center align-items-center vh-100",children:Z.jsxs("div",{className:"card shadow-sm p-4",style:{width:"100%",maxWidth:"400px"},children:[Z.jsx("h2",{className:"text-center mb-4",children:"Logowanie"}),Z.jsxs("form",{onSubmit:f,children:[Z.jsx("input",{type:"email",className:"form-control mb-3",placeholder:"Email",value:n,onChange:m=>s(m.target.value),required:!0}),Z.jsx("input",{type:"password",className:"form-control mb-4",placeholder:"Hasło",value:o,onChange:m=>u(m.target.value),required:!0}),Z.jsx("button",{type:"submit",className:"btn btn-primary w-100 mb-2",children:"Zaloguj się"}),Z.jsx("button",{type:"button",className:"btn btn-outline-secondary w-100",onClick:t,children:"Nie masz konta? Zarejestruj się"})]})]})})}function NN({onRegister:r,goToLogin:t}){const[n,s]=Wt.useState(""),[o,u]=Wt.useState(""),f=async m=>{m.preventDefault();try{await MR(Hn,n,o),r()}catch(g){alert("Błąd rejestracji: "+g.message)}};return Z.jsx("div",{className:"d-flex justify-content-center align-items-center vh-100",children:Z.jsxs("div",{className:"card shadow-sm p-4",style:{width:"100%",maxWidth:"400px"},children:[Z.jsx("h2",{className:"text-center mb-4",children:"Rejestracja"}),Z.jsxs("form",{onSubmit:f,children:[Z.jsx("input",{type:"email",className:"form-control mb-3",placeholder:"Email",value:n,onChange:m=>s(m.target.value),required:!0}),Z.jsx("input",{type:"password",className:"form-control mb-4",placeholder:"Hasło",value:o,onChange:m=>u(m.target.value),required:!0}),Z.jsx("button",{type:"submit",className:"btn btn-success w-100 mb-2",children:"Zarejestruj się"}),Z.jsx("button",{type:"button",className:"btn btn-outline-secondary w-100",onClick:t,children:"Mam już konto"})]})]})})}function MN({onAdd:r}){const[t,n]=Wt.useState(""),[s,o]=Wt.useState(""),[u,f]=Wt.useState(null),[m,g]=Wt.useState(null),[_,E]=Wt.useState(""),b=async L=>{if(L.preventDefault(),"vibrate"in navigator&&navigator.vibrate([100,50,100]),!t||!s){alert("Uzupełnij wszystkie pola!");return}try{let H="";if(u){const tt=`${Date.now()}_${u.name}`,$=AN(CN,`receipts/${tt}`);await EN($,u),H=await TN($)}await uO(mp(zr,"expenses"),{amount:parseFloat(t),description:s,category:_,receiptUrl:H,createdAt:Ae.now(),location:m,uid:Hn.currentUser.uid}),"vibrate"in navigator&&navigator.vibrate(200),r&&r(),n(""),o(""),f(null),alert("Wydatek dodany!")}catch(H){console.error("Błąd przy zapisie:",H),alert("Wystąpił błąd przy zapisie")}},O=()=>{if(!navigator.geolocation){alert("Twoja przeglądarka nie obsługuje geolokalizacji");return}navigator.geolocation.getCurrentPosition(L=>{g({lat:L.coords.latitude,lng:L.coords.longitude})},L=>{console.error("Błąd geolokalizacji:",L),alert("Nie udało się pobrać lokalizacji")})};return Z.jsxs("form",{className:"add-expense",onSubmit:b,children:[Z.jsx("h2",{children:"Dodaj wydatek"}),Z.jsx("input",{type:"number",placeholder:"Kwota",value:t,onChange:L=>n(L.target.value),required:!0}),Z.jsx("br",{}),Z.jsx("input",{type:"text",placeholder:"Opis",value:s,onChange:L=>o(L.target.value),required:!0}),Z.jsxs("select",{className:"form-control mb-3",value:_,onChange:L=>E(L.target.value),required:!0,children:[Z.jsx("option",{value:"",children:"Wybierz kategorię"}),Z.jsx("option",{value:"jedzenie",children:"Jedzenie"}),Z.jsx("option",{value:"transport",children:"Transport"}),Z.jsx("option",{value:"rozrywka",children:"Rozrywka"}),Z.jsx("option",{value:"inne",children:"Inne"})]}),Z.jsxs("div",{className:"mb-3",children:[Z.jsx("label",{className:"form-label",children:"Wybierz zdjęcie z galerii:"}),Z.jsx("input",{type:"file",accept:"image/*",className:"form-control mb-3",onChange:L=>{var H;return f(((H=L.target.files)==null?void 0:H[0])||null)}}),Z.jsx("label",{className:"form-label",children:"Zrób zdjęcie aparatem:"}),Z.jsx("input",{type:"file",accept:"image/*",capture:"environment",className:"form-control",onChange:L=>{var H;return f(((H=L.target.files)==null?void 0:H[0])||null)}})]}),Z.jsx("br",{}),Z.jsx("button",{type:"submit",children:"Dodaj"}),Z.jsx("button",{type:"button",onClick:O,children:"Dodaj lokalizację"}),m&&Z.jsx("p",{children:"Lokalizacja dodana ✅"})]})}function VN({refreshFlag:r,onChange:t}){const[n,s]=Wt.useState([]),[o,u]=Wt.useState(""),[f,m]=Wt.useState(""),g=async()=>{try{const _=Hn.currentUser;if(!_)return;let E=Hc(mp(zr,"expenses"),Fc("uid","==",_.uid),nO("createdAt","desc"));if(o&&(E=Hc(E,Fc("createdAt",">=",new Date(o)))),f){const L=new Date(f);L.setDate(L.getDate()+1),E=Hc(E,Fc("createdAt","<",L))}const O=(await iA(E)).docs.map(L=>({id:L.id,...L.data()}));s(O)}catch(_){console.error("Błąd przy pobieraniu danych:",_)}};return Wt.useEffect(()=>{g()},[r,o,f]),Z.jsxs("div",{children:[Z.jsx("h2",{children:"Lista wydatków"}),Z.jsxs("div",{style:{marginBottom:"1rem"},children:[Z.jsxs("label",{children:["Od:"," ",Z.jsx("input",{type:"date",value:o,onChange:_=>u(_.target.value)})]}),Z.jsxs("label",{style:{marginLeft:"1rem"},children:["Do:"," ",Z.jsx("input",{type:"date",value:f,onChange:_=>m(_.target.value)})]})]}),n.map(_=>Z.jsx(kN,{item:_,refresh:g,onChange:t},_.id))]})}function kN({item:r,refresh:t,onChange:n}){var L;const[s,o]=Wt.useState(!1),[u,f]=Wt.useState(r.description),[m,g]=Wt.useState(r.amount),[_,E]=Wt.useState(null),b=async()=>{try{const H=io(zr,"expenses",r.id);await oO(H,{description:u,amount:parseFloat(m)}),o(!1),t()}catch(H){console.error("Błąd przy edycji:",H)}},O=async()=>{if(window.confirm("Na pewno chcesz usunąć ten wydatek?"))try{const tt=io(zr,"expenses",r.id);await lO(tt),t(),n&&n()}catch(tt){console.error("Błąd przy usuwaniu:",tt)}};return Z.jsxs("div",{className:"expense-card",children:[s?Z.jsxs(Z.Fragment,{children:[Z.jsx("input",{type:"text",value:u,onChange:H=>f(H.target.value)}),Z.jsx("input",{type:"number",value:m,onChange:H=>g(H.target.value)}),Z.jsx("button",{onClick:b,children:"Zapisz"})]}):Z.jsxs(Z.Fragment,{children:[Z.jsxs("p",{children:[Z.jsx("strong",{children:"Kwota:"})," ",r.amount," zł"]}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Opis:"})," ",r.description]}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Kategoria:"})," ",r.category]}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Data:"})," ",(L=r.createdAt)==null?void 0:L.toDate().toLocaleString()]}),r.receiptUrl&&Z.jsxs("div",{children:[Z.jsx("strong",{children:"Paragon:"}),Z.jsx("br",{}),Z.jsx("img",{src:r.receiptUrl,alt:"Paragon",width:"200",onClick:()=>E(r.receiptUrl),style:{cursor:"pointer"}})]}),r.location&&Z.jsxs("p",{children:["🌍"," ",Z.jsx("a",{href:`https://www.google.com/maps?q=${r.location.lat},${r.location.lng}`,target:"_blank",rel:"noopener noreferrer",children:"Zobacz na mapie"})]}),Z.jsx("button",{className:"edit",onClick:()=>o(!0),children:"Edytuj"}),Z.jsx("button",{className:"delete",onClick:O,style:{marginLeft:"10px",color:"white"},children:"Usuń"})]}),_&&Z.jsx("div",{className:"fullscreen-overlay",onClick:()=>E(null),children:Z.jsx("img",{src:_,alt:"Powiększony paragon"})})]},r.id)}function UN({refreshFlag:r}){const[t,n]=Wt.useState(500),[s,o]=Wt.useState(0),u=async g=>{const _=Hn.currentUser;if(!_)return;const E=new Date,b=`${E.getFullYear()}-${String(E.getMonth()+1).padStart(2,"0")}`;await rA(io(zr,"budgetLimits",`${_.uid}_${b}`),{uid:_.uid,month:b,limit:g,updatedAt:new Date})};Wt.useEffect(()=>{(async()=>{const _=new Date,E=new Date(_.getFullYear(),_.getMonth(),1),b=Hc(mp(zr,"expenses"),Fc("createdAt",">=",E)),L=(await iA(b)).docs.reduce((H,tt)=>H+(tt.data().amount||0),0);o(L)})()},[r]),Wt.useEffect(()=>{(async()=>{const _=Hn.currentUser;if(!_)return;const E=new Date,b=`${E.getFullYear()}-${String(E.getMonth()+1).padStart(2,"0")}`,O=io(zr,"budgetLimits",`${_.uid}_${b}`),L=await aO(O);if(L.exists()){const H=L.data();n(H.limit||500)}})()},[]);const f=t-s,m=async g=>{const _=parseFloat(g.target.value);isNaN(_)||(n(_),localStorage.setItem("budgetLimit",_),await u(_))};return Z.jsxs("div",{className:"budget-summary",children:[Z.jsx("h2",{children:"Podsumowanie budżetu"}),Z.jsxs("label",{children:[Z.jsx("strong",{children:"Limit miesięczny:"})," ",Z.jsx("input",{type:"number",value:t,onChange:m,style:{width:"80px"}})," zł"]}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Wydano:"})," ",s.toFixed(2)," zł"]}),Z.jsxs("p",{style:{color:f>=0?"green":"red"},children:[Z.jsx("strong",{children:"Pozostało:"})," ",f.toFixed(2)," zł"]})]})}function PN(){const[r,t]=Wt.useState("add"),[n,s]=Wt.useState(!1),[o,u]=Wt.useState(null),[f,m]=Wt.useState("login");Wt.useEffect(()=>{const _=xR(Hn,async E=>{if(E)try{console.log("Użytkownik zalogowany:",E),await DN(E),u(E)}catch(b){console.error("Błąd przy zapisie użytkownika:",b)}else console.log("Użytkownik wylogowany"),u(null)});return()=>_()},[]);const g=()=>s(_=>!_);return o?Z.jsxs("div",{className:"container py-4",children:[Z.jsx("h1",{className:"text-center mb-4",children:"BudżetApp"}),Z.jsx("div",{className:"text-end mb-3",children:Z.jsx("button",{className:"btn btn-outline-danger",onClick:()=>LR(Hn),children:"Wyloguj się"})}),Z.jsxs("div",{className:"d-flex justify-content-center mb-4 gap-2",children:[Z.jsx("button",{className:`btn btn-${r==="add"?"primary":"outline-primary"}`,onClick:()=>t("add"),children:"Dodaj wydatek"}),Z.jsx("button",{className:`btn btn-${r==="list"?"primary":"outline-primary"}`,onClick:()=>t("list"),children:"Lista wydatków"})]}),Z.jsx("div",{className:"row justify-content-center",children:Z.jsxs("div",{className:"col-lg-8",children:[r==="add"&&Z.jsxs(Z.Fragment,{children:[Z.jsx("div",{className:"card card-body shadow-sm mb-4",children:Z.jsx(UN,{refreshFlag:n})}),Z.jsx("div",{className:"card card-body shadow-sm",children:Z.jsx(MN,{onAdd:g})})]}),r==="list"&&Z.jsx(VN,{refreshFlag:n,onChange:g})]})})]}):Z.jsx("div",{className:"container py-5",children:f==="login"?Z.jsx(ON,{onLogin:()=>u(Hn.currentUser),goToRegister:()=>m("register")}):Z.jsx(NN,{onRegister:()=>u(Hn.currentUser),goToLogin:()=>m("login")})})}eb.createRoot(document.getElementById("root")).render(Z.jsx(Wt.StrictMode,{children:Z.jsx(PN,{})}));
