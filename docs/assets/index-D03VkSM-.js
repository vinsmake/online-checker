(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function s(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(d){if(d.ep)return;d.ep=!0;const f=s(d);fetch(d.href,f)}})();function Lp(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var gl={exports:{}},$r={},yl={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc;function Mp(){if(Nc)return Z;Nc=1;var o=Symbol.for("react.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),h=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),C=Symbol.iterator;function L(y){return y===null||typeof y!="object"?null:(y=C&&y[C]||y["@@iterator"],typeof y=="function"?y:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,S={};function O(y,R,G){this.props=y,this.context=R,this.refs=S,this.updater=G||W}O.prototype.isReactComponent={},O.prototype.setState=function(y,R){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,R,"setState")},O.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function K(){}K.prototype=O.prototype;function ee(y,R,G){this.props=y,this.context=R,this.refs=S,this.updater=G||W}var J=ee.prototype=new K;J.constructor=ee,z(J,O.prototype),J.isPureReactComponent=!0;var oe=Array.isArray,re=Object.prototype.hasOwnProperty,ae={current:null},ce={key:!0,ref:!0,__self:!0,__source:!0};function xe(y,R,G){var ne,le={},se=null,pe=null;if(R!=null)for(ne in R.ref!==void 0&&(pe=R.ref),R.key!==void 0&&(se=""+R.key),R)re.call(R,ne)&&!ce.hasOwnProperty(ne)&&(le[ne]=R[ne]);var de=arguments.length-2;if(de===1)le.children=G;else if(1<de){for(var ye=Array(de),nn=0;nn<de;nn++)ye[nn]=arguments[nn+2];le.children=ye}if(y&&y.defaultProps)for(ne in de=y.defaultProps,de)le[ne]===void 0&&(le[ne]=de[ne]);return{$$typeof:o,type:y,key:se,ref:pe,props:le,_owner:ae.current}}function ke(y,R){return{$$typeof:o,type:y.type,key:R,ref:y.ref,props:y.props,_owner:y._owner}}function Ln(y){return typeof y=="object"&&y!==null&&y.$$typeof===o}function dt(y){var R={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(G){return R[G]})}var _n=/\/+/g;function en(y,R){return typeof y=="object"&&y!==null&&y.key!=null?dt(""+y.key):R.toString(36)}function gn(y,R,G,ne,le){var se=typeof y;(se==="undefined"||se==="boolean")&&(y=null);var pe=!1;if(y===null)pe=!0;else switch(se){case"string":case"number":pe=!0;break;case"object":switch(y.$$typeof){case o:case a:pe=!0}}if(pe)return pe=y,le=le(pe),y=ne===""?"."+en(pe,0):ne,oe(le)?(G="",y!=null&&(G=y.replace(_n,"$&/")+"/"),gn(le,R,G,"",function(nn){return nn})):le!=null&&(Ln(le)&&(le=ke(le,G+(!le.key||pe&&pe.key===le.key?"":(""+le.key).replace(_n,"$&/")+"/")+y)),R.push(le)),1;if(pe=0,ne=ne===""?".":ne+":",oe(y))for(var de=0;de<y.length;de++){se=y[de];var ye=ne+en(se,de);pe+=gn(se,R,G,ye,le)}else if(ye=L(y),typeof ye=="function")for(y=ye.call(y),de=0;!(se=y.next()).done;)se=se.value,ye=ne+en(se,de++),pe+=gn(se,R,G,ye,le);else if(se==="object")throw R=String(y),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return pe}function Cn(y,R,G){if(y==null)return y;var ne=[],le=0;return gn(y,ne,"","",function(se){return R.call(G,se,le++)}),ne}function We(y){if(y._status===-1){var R=y._result;R=R(),R.then(function(G){(y._status===0||y._status===-1)&&(y._status=1,y._result=G)},function(G){(y._status===0||y._status===-1)&&(y._status=2,y._result=G)}),y._status===-1&&(y._status=0,y._result=R)}if(y._status===1)return y._result.default;throw y._result}var Pe={current:null},M={transition:null},Q={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:M,ReactCurrentOwner:ae};function I(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:Cn,forEach:function(y,R,G){Cn(y,function(){R.apply(this,arguments)},G)},count:function(y){var R=0;return Cn(y,function(){R++}),R},toArray:function(y){return Cn(y,function(R){return R})||[]},only:function(y){if(!Ln(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},Z.Component=O,Z.Fragment=s,Z.Profiler=d,Z.PureComponent=ee,Z.StrictMode=u,Z.Suspense=E,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Z.act=I,Z.cloneElement=function(y,R,G){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var ne=z({},y.props),le=y.key,se=y.ref,pe=y._owner;if(R!=null){if(R.ref!==void 0&&(se=R.ref,pe=ae.current),R.key!==void 0&&(le=""+R.key),y.type&&y.type.defaultProps)var de=y.type.defaultProps;for(ye in R)re.call(R,ye)&&!ce.hasOwnProperty(ye)&&(ne[ye]=R[ye]===void 0&&de!==void 0?de[ye]:R[ye])}var ye=arguments.length-2;if(ye===1)ne.children=G;else if(1<ye){de=Array(ye);for(var nn=0;nn<ye;nn++)de[nn]=arguments[nn+2];ne.children=de}return{$$typeof:o,type:y.type,key:le,ref:se,props:ne,_owner:pe}},Z.createContext=function(y){return y={$$typeof:h,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:f,_context:y},y.Consumer=y},Z.createElement=xe,Z.createFactory=function(y){var R=xe.bind(null,y);return R.type=y,R},Z.createRef=function(){return{current:null}},Z.forwardRef=function(y){return{$$typeof:x,render:y}},Z.isValidElement=Ln,Z.lazy=function(y){return{$$typeof:_,_payload:{_status:-1,_result:y},_init:We}},Z.memo=function(y,R){return{$$typeof:w,type:y,compare:R===void 0?null:R}},Z.startTransition=function(y){var R=M.transition;M.transition={};try{y()}finally{M.transition=R}},Z.unstable_act=I,Z.useCallback=function(y,R){return Pe.current.useCallback(y,R)},Z.useContext=function(y){return Pe.current.useContext(y)},Z.useDebugValue=function(){},Z.useDeferredValue=function(y){return Pe.current.useDeferredValue(y)},Z.useEffect=function(y,R){return Pe.current.useEffect(y,R)},Z.useId=function(){return Pe.current.useId()},Z.useImperativeHandle=function(y,R,G){return Pe.current.useImperativeHandle(y,R,G)},Z.useInsertionEffect=function(y,R){return Pe.current.useInsertionEffect(y,R)},Z.useLayoutEffect=function(y,R){return Pe.current.useLayoutEffect(y,R)},Z.useMemo=function(y,R){return Pe.current.useMemo(y,R)},Z.useReducer=function(y,R,G){return Pe.current.useReducer(y,R,G)},Z.useRef=function(y){return Pe.current.useRef(y)},Z.useState=function(y){return Pe.current.useState(y)},Z.useSyncExternalStore=function(y,R,G){return Pe.current.useSyncExternalStore(y,R,G)},Z.useTransition=function(){return Pe.current.useTransition()},Z.version="18.3.1",Z}var Dc;function Dl(){return Dc||(Dc=1,yl.exports=Mp()),yl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac;function Fp(){if(Ac)return $r;Ac=1;var o=Dl(),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function h(x,E,w){var _,C={},L=null,W=null;w!==void 0&&(L=""+w),E.key!==void 0&&(L=""+E.key),E.ref!==void 0&&(W=E.ref);for(_ in E)u.call(E,_)&&!f.hasOwnProperty(_)&&(C[_]=E[_]);if(x&&x.defaultProps)for(_ in E=x.defaultProps,E)C[_]===void 0&&(C[_]=E[_]);return{$$typeof:a,type:x,key:L,ref:W,props:C,_owner:d.current}}return $r.Fragment=s,$r.jsx=h,$r.jsxs=h,$r}var Lc;function jp(){return Lc||(Lc=1,gl.exports=Fp()),gl.exports}var te=jp(),Ot=Dl();const mn=Lp(Ot);var li={},vl={exports:{}},Ge={},bl={exports:{}},xl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc;function Ip(){return Mc||(Mc=1,function(o){function a(M,Q){var I=M.length;M.push(Q);e:for(;0<I;){var y=I-1>>>1,R=M[y];if(0<d(R,Q))M[y]=Q,M[I]=R,I=y;else break e}}function s(M){return M.length===0?null:M[0]}function u(M){if(M.length===0)return null;var Q=M[0],I=M.pop();if(I!==Q){M[0]=I;e:for(var y=0,R=M.length,G=R>>>1;y<G;){var ne=2*(y+1)-1,le=M[ne],se=ne+1,pe=M[se];if(0>d(le,I))se<R&&0>d(pe,le)?(M[y]=pe,M[se]=I,y=se):(M[y]=le,M[ne]=I,y=ne);else if(se<R&&0>d(pe,I))M[y]=pe,M[se]=I,y=se;else break e}}return Q}function d(M,Q){var I=M.sortIndex-Q.sortIndex;return I!==0?I:M.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,x=h.now();o.unstable_now=function(){return h.now()-x}}var E=[],w=[],_=1,C=null,L=3,W=!1,z=!1,S=!1,O=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(M){for(var Q=s(w);Q!==null;){if(Q.callback===null)u(w);else if(Q.startTime<=M)u(w),Q.sortIndex=Q.expirationTime,a(E,Q);else break;Q=s(w)}}function oe(M){if(S=!1,J(M),!z)if(s(E)!==null)z=!0,We(re);else{var Q=s(w);Q!==null&&Pe(oe,Q.startTime-M)}}function re(M,Q){z=!1,S&&(S=!1,K(xe),xe=-1),W=!0;var I=L;try{for(J(Q),C=s(E);C!==null&&(!(C.expirationTime>Q)||M&&!dt());){var y=C.callback;if(typeof y=="function"){C.callback=null,L=C.priorityLevel;var R=y(C.expirationTime<=Q);Q=o.unstable_now(),typeof R=="function"?C.callback=R:C===s(E)&&u(E),J(Q)}else u(E);C=s(E)}if(C!==null)var G=!0;else{var ne=s(w);ne!==null&&Pe(oe,ne.startTime-Q),G=!1}return G}finally{C=null,L=I,W=!1}}var ae=!1,ce=null,xe=-1,ke=5,Ln=-1;function dt(){return!(o.unstable_now()-Ln<ke)}function _n(){if(ce!==null){var M=o.unstable_now();Ln=M;var Q=!0;try{Q=ce(!0,M)}finally{Q?en():(ae=!1,ce=null)}}else ae=!1}var en;if(typeof ee=="function")en=function(){ee(_n)};else if(typeof MessageChannel<"u"){var gn=new MessageChannel,Cn=gn.port2;gn.port1.onmessage=_n,en=function(){Cn.postMessage(null)}}else en=function(){O(_n,0)};function We(M){ce=M,ae||(ae=!0,en())}function Pe(M,Q){xe=O(function(){M(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(M){M.callback=null},o.unstable_continueExecution=function(){z||W||(z=!0,We(re))},o.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<M?Math.floor(1e3/M):5},o.unstable_getCurrentPriorityLevel=function(){return L},o.unstable_getFirstCallbackNode=function(){return s(E)},o.unstable_next=function(M){switch(L){case 1:case 2:case 3:var Q=3;break;default:Q=L}var I=L;L=Q;try{return M()}finally{L=I}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(M,Q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var I=L;L=M;try{return Q()}finally{L=I}},o.unstable_scheduleCallback=function(M,Q,I){var y=o.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?y+I:y):I=y,M){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=I+R,M={id:_++,callback:Q,priorityLevel:M,startTime:I,expirationTime:R,sortIndex:-1},I>y?(M.sortIndex=I,a(w,M),s(E)===null&&M===s(w)&&(S?(K(xe),xe=-1):S=!0,Pe(oe,I-y))):(M.sortIndex=R,a(E,M),z||W||(z=!0,We(re))),M},o.unstable_shouldYield=dt,o.unstable_wrapCallback=function(M){var Q=L;return function(){var I=L;L=Q;try{return M.apply(this,arguments)}finally{L=I}}}}(xl)),xl}var Fc;function qp(){return Fc||(Fc=1,bl.exports=Ip()),bl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc;function Up(){if(jc)return Ge;jc=1;var o=Dl(),a=qp();function s(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,d={};function f(e,n){h(e,n),h(e+"Capture",n)}function h(e,n){for(d[e]=n,e=0;e<n.length;e++)u.add(n[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),E=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},C={};function L(e){return E.call(C,e)?!0:E.call(_,e)?!1:w.test(e)?C[e]=!0:(_[e]=!0,!1)}function W(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z(e,n,t,r){if(n===null||typeof n>"u"||W(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function S(e,n,t,r,i,l,c){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=c}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){O[e]=new S(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];O[n]=new S(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){O[e]=new S(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){O[e]=new S(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){O[e]=new S(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){O[e]=new S(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){O[e]=new S(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){O[e]=new S(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){O[e]=new S(e,5,!1,e.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function ee(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(K,ee);O[n]=new S(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(K,ee);O[n]=new S(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(K,ee);O[n]=new S(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){O[e]=new S(e,1,!1,e.toLowerCase(),null,!1,!1)}),O.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){O[e]=new S(e,1,!1,e.toLowerCase(),null,!0,!0)});function J(e,n,t,r){var i=O.hasOwnProperty(n)?O[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(z(n,t,i,r)&&(t=null),r||i===null?L(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var oe=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),ae=Symbol.for("react.portal"),ce=Symbol.for("react.fragment"),xe=Symbol.for("react.strict_mode"),ke=Symbol.for("react.profiler"),Ln=Symbol.for("react.provider"),dt=Symbol.for("react.context"),_n=Symbol.for("react.forward_ref"),en=Symbol.for("react.suspense"),gn=Symbol.for("react.suspense_list"),Cn=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),M=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,y;function R(e){if(y===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||""}return`
`+y+e}var G=!1;function ne(e,n){if(!e||G)return"";G=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(k){var r=k}Reflect.construct(e,[],n)}else{try{n.call()}catch(k){r=k}e.call(n.prototype)}else{try{throw Error()}catch(k){r=k}e()}}catch(k){if(k&&r&&typeof k.stack=="string"){for(var i=k.stack.split(`
`),l=r.stack.split(`
`),c=i.length-1,p=l.length-1;1<=c&&0<=p&&i[c]!==l[p];)p--;for(;1<=c&&0<=p;c--,p--)if(i[c]!==l[p]){if(c!==1||p!==1)do if(c--,p--,0>p||i[c]!==l[p]){var m=`
`+i[c].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=c&&0<=p);break}}}finally{G=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?R(e):""}function le(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=ne(e.type,!1),e;case 11:return e=ne(e.type.render,!1),e;case 1:return e=ne(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ce:return"Fragment";case ae:return"Portal";case ke:return"Profiler";case xe:return"StrictMode";case en:return"Suspense";case gn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dt:return(e.displayName||"Context")+".Consumer";case Ln:return(e._context.displayName||"Context")+".Provider";case _n:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cn:return n=e.displayName||null,n!==null?n:se(e.type)||"Memo";case We:n=e._payload,e=e._init;try{return se(e(n))}catch{}}return null}function pe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(n);case 8:return n===xe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nn(e){var n=ye(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(c){r=""+c,l.call(this,c)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Yr(e){e._valueTracker||(e._valueTracker=nn(e))}function jl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ye(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Si(e,n){var t=n.checked;return I({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Il(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=de(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ql(e,n){n=n.checked,n!=null&&J(e,"checked",n,!1)}function Pi(e,n){ql(e,n);var t=de(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ei(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ei(e,n.type,de(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ul(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ei(e,n,t){(n!=="number"||Jr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ir=Array.isArray;function zt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+de(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Oi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return I({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(s(92));if(ir(t)){if(1<t.length)throw Error(s(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:de(t)}}function Hl(e,n){var t=de(n.value),r=de(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function $l(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Vl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _i(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Vl(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gr,Wl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ar(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Id=["Webkit","ms","Moz","O"];Object.keys(lr).forEach(function(e){Id.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),lr[n]=lr[e]})});function Ql(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||lr.hasOwnProperty(e)&&lr[e]?(""+n).trim():n+"px"}function Xl(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Ql(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var qd=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ci(e,n){if(n){if(qd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function Ti(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=null;function Ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ni=null,Rt=null,Nt=null;function Kl(e){if(e=Tr(e)){if(typeof Ni!="function")throw Error(s(280));var n=e.stateNode;n&&(n=wo(n),Ni(e.stateNode,e.type,n))}}function Yl(e){Rt?Nt?Nt.push(e):Nt=[e]:Rt=e}function Jl(){if(Rt){var e=Rt,n=Nt;if(Nt=Rt=null,Kl(e),n)for(e=0;e<n.length;e++)Kl(n[e])}}function Gl(e,n){return e(n)}function Zl(){}var Di=!1;function es(e,n,t){if(Di)return e(n,t);Di=!0;try{return Gl(e,n,t)}finally{Di=!1,(Rt!==null||Nt!==null)&&(Zl(),Jl())}}function sr(e,n){var t=e.stateNode;if(t===null)return null;var r=wo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var Ai=!1;if(x)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){Ai=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Ai=!1}function Ud(e,n,t,r,i,l,c,p,m){var k=Array.prototype.slice.call(arguments,3);try{n.apply(t,k)}catch(N){this.onError(N)}}var cr=!1,Zr=null,eo=!1,Li=null,Bd={onError:function(e){cr=!0,Zr=e}};function Hd(e,n,t,r,i,l,c,p,m){cr=!1,Zr=null,Ud.apply(Bd,arguments)}function $d(e,n,t,r,i,l,c,p,m){if(Hd.apply(this,arguments),cr){if(cr){var k=Zr;cr=!1,Zr=null}else throw Error(s(198));eo||(eo=!0,Li=k)}}function ft(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ns(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ts(e){if(ft(e)!==e)throw Error(s(188))}function Vd(e){var n=e.alternate;if(!n){if(n=ft(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return ts(i),e;if(l===r)return ts(i),n;l=l.sibling}throw Error(s(188))}if(t.return!==r.return)t=i,r=l;else{for(var c=!1,p=i.child;p;){if(p===t){c=!0,t=i,r=l;break}if(p===r){c=!0,r=i,t=l;break}p=p.sibling}if(!c){for(p=l.child;p;){if(p===t){c=!0,t=l,r=i;break}if(p===r){c=!0,r=l,t=i;break}p=p.sibling}if(!c)throw Error(s(189))}}if(t.alternate!==r)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function rs(e){return e=Vd(e),e!==null?os(e):null}function os(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=os(e);if(n!==null)return n;e=e.sibling}return null}var is=a.unstable_scheduleCallback,as=a.unstable_cancelCallback,Wd=a.unstable_shouldYield,Qd=a.unstable_requestPaint,Oe=a.unstable_now,Xd=a.unstable_getCurrentPriorityLevel,Mi=a.unstable_ImmediatePriority,ls=a.unstable_UserBlockingPriority,no=a.unstable_NormalPriority,Kd=a.unstable_LowPriority,ss=a.unstable_IdlePriority,to=null,Tn=null;function Yd(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(to,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:Zd,Jd=Math.log,Gd=Math.LN2;function Zd(e){return e>>>=0,e===0?32:31-(Jd(e)/Gd|0)|0}var ro=64,oo=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function io(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,c=t&268435455;if(c!==0){var p=c&~i;p!==0?r=dr(p):(l&=c,l!==0&&(r=dr(l)))}else c=t&~i,c!==0?r=dr(c):l!==0&&(r=dr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-yn(n),i=1<<t,r|=e[t],n&=~i;return r}function ef(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-yn(l),p=1<<c,m=i[c];m===-1?(!(p&t)||p&r)&&(i[c]=ef(p,n)):m<=n&&(e.expiredLanes|=p),l&=~p}}function Fi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function us(){var e=ro;return ro<<=1,!(ro&4194240)&&(ro=64),e}function ji(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function fr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-yn(n),e[n]=t}function tf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-yn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Ii(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-yn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var fe=0;function cs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ds,qi,fs,ps,hs,Ui=!1,ao=[],Vn=null,Wn=null,Qn=null,pr=new Map,hr=new Map,Xn=[],rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ms(e,n){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":pr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(n.pointerId)}}function mr(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Tr(n),n!==null&&qi(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function of(e,n,t,r,i){switch(n){case"focusin":return Vn=mr(Vn,e,n,t,r,i),!0;case"dragenter":return Wn=mr(Wn,e,n,t,r,i),!0;case"mouseover":return Qn=mr(Qn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return pr.set(l,mr(pr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,hr.set(l,mr(hr.get(l)||null,e,n,t,r,i)),!0}return!1}function gs(e){var n=pt(e.target);if(n!==null){var t=ft(n);if(t!==null){if(n=t.tag,n===13){if(n=ns(t),n!==null){e.blockedOn=n,hs(e.priority,function(){fs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Hi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);zi=r,t.target.dispatchEvent(r),zi=null}else return n=Tr(t),n!==null&&qi(n),e.blockedOn=t,!1;n.shift()}return!0}function ys(e,n,t){lo(e)&&t.delete(n)}function af(){Ui=!1,Vn!==null&&lo(Vn)&&(Vn=null),Wn!==null&&lo(Wn)&&(Wn=null),Qn!==null&&lo(Qn)&&(Qn=null),pr.forEach(ys),hr.forEach(ys)}function gr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ui||(Ui=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,af)))}function yr(e){function n(i){return gr(i,e)}if(0<ao.length){gr(ao[0],e);for(var t=1;t<ao.length;t++){var r=ao[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Vn!==null&&gr(Vn,e),Wn!==null&&gr(Wn,e),Qn!==null&&gr(Qn,e),pr.forEach(n),hr.forEach(n),t=0;t<Xn.length;t++)r=Xn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xn.length&&(t=Xn[0],t.blockedOn===null);)gs(t),t.blockedOn===null&&Xn.shift()}var Dt=oe.ReactCurrentBatchConfig,so=!0;function lf(e,n,t,r){var i=fe,l=Dt.transition;Dt.transition=null;try{fe=1,Bi(e,n,t,r)}finally{fe=i,Dt.transition=l}}function sf(e,n,t,r){var i=fe,l=Dt.transition;Dt.transition=null;try{fe=4,Bi(e,n,t,r)}finally{fe=i,Dt.transition=l}}function Bi(e,n,t,r){if(so){var i=Hi(e,n,t,r);if(i===null)aa(e,n,r,uo,t),ms(e,r);else if(of(i,e,n,t,r))r.stopPropagation();else if(ms(e,r),n&4&&-1<rf.indexOf(e)){for(;i!==null;){var l=Tr(i);if(l!==null&&ds(l),l=Hi(e,n,t,r),l===null&&aa(e,n,r,uo,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else aa(e,n,r,null,t)}}var uo=null;function Hi(e,n,t,r){if(uo=null,e=Ri(r),e=pt(e),e!==null)if(n=ft(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ns(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return uo=e,null}function vs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xd()){case Mi:return 1;case ls:return 4;case no:case Kd:return 16;case ss:return 536870912;default:return 16}default:return 16}}var Kn=null,$i=null,co=null;function bs(){if(co)return co;var e,n=$i,t=n.length,r,i="value"in Kn?Kn.value:Kn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var c=t-e;for(r=1;r<=c&&n[t-r]===i[l-r];r++);return co=i.slice(e,1<r?1-r:void 0)}function fo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function xs(){return!1}function tn(e){function n(t,r,i,l,c){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(l):l[p]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?po:xs,this.isPropagationStopped=xs,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),n}var At={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=tn(At),vr=I({},At,{view:0,detail:0}),uf=tn(vr),Wi,Qi,br,ho=I({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ki,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Wi=e.screenX-br.screenX,Qi=e.screenY-br.screenY):Qi=Wi=0,br=e),Wi)},movementY:function(e){return"movementY"in e?e.movementY:Qi}}),ks=tn(ho),cf=I({},ho,{dataTransfer:0}),df=tn(cf),ff=I({},vr,{relatedTarget:0}),Xi=tn(ff),pf=I({},At,{animationName:0,elapsedTime:0,pseudoElement:0}),hf=tn(pf),mf=I({},At,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gf=tn(mf),yf=I({},At,{data:0}),ws=tn(yf),vf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xf[e])?!!n[e]:!1}function Ki(){return kf}var wf=I({},vr,{key:function(e){if(e.key){var n=vf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ki,charCode:function(e){return e.type==="keypress"?fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sf=tn(wf),Pf=I({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ss=tn(Pf),Ef=I({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ki}),Of=tn(Ef),_f=I({},At,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cf=tn(_f),Tf=I({},ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zf=tn(Tf),Rf=[9,13,27,32],Yi=x&&"CompositionEvent"in window,xr=null;x&&"documentMode"in document&&(xr=document.documentMode);var Nf=x&&"TextEvent"in window&&!xr,Ps=x&&(!Yi||xr&&8<xr&&11>=xr),Es=" ",Os=!1;function _s(e,n){switch(e){case"keyup":return Rf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lt=!1;function Df(e,n){switch(e){case"compositionend":return Cs(n);case"keypress":return n.which!==32?null:(Os=!0,Es);case"textInput":return e=n.data,e===Es&&Os?null:e;default:return null}}function Af(e,n){if(Lt)return e==="compositionend"||!Yi&&_s(e,n)?(e=bs(),co=$i=Kn=null,Lt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ps&&n.locale!=="ko"?null:n.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ts(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Lf[e.type]:n==="textarea"}function zs(e,n,t,r){Yl(r),n=bo(n,"onChange"),0<n.length&&(t=new Vi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var kr=null,wr=null;function Mf(e){Xs(e,0)}function mo(e){var n=qt(e);if(jl(n))return e}function Ff(e,n){if(e==="change")return n}var Rs=!1;if(x){var Ji;if(x){var Gi="oninput"in document;if(!Gi){var Ns=document.createElement("div");Ns.setAttribute("oninput","return;"),Gi=typeof Ns.oninput=="function"}Ji=Gi}else Ji=!1;Rs=Ji&&(!document.documentMode||9<document.documentMode)}function Ds(){kr&&(kr.detachEvent("onpropertychange",As),wr=kr=null)}function As(e){if(e.propertyName==="value"&&mo(wr)){var n=[];zs(n,wr,e,Ri(e)),es(Mf,n)}}function jf(e,n,t){e==="focusin"?(Ds(),kr=n,wr=t,kr.attachEvent("onpropertychange",As)):e==="focusout"&&Ds()}function If(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mo(wr)}function qf(e,n){if(e==="click")return mo(n)}function Uf(e,n){if(e==="input"||e==="change")return mo(n)}function Bf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var vn=typeof Object.is=="function"?Object.is:Bf;function Sr(e,n){if(vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!E.call(n,i)||!vn(e[i],n[i]))return!1}return!0}function Ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ms(e,n){var t=Ls(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ls(t)}}function Fs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function js(){for(var e=window,n=Jr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Jr(e.document)}return n}function Zi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Hf(e){var n=js(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Fs(t.ownerDocument.documentElement,t)){if(r!==null&&Zi(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ms(t,l);var c=Ms(t,r);i&&c&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(c.node,c.offset)):(n.setEnd(c.node,c.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $f=x&&"documentMode"in document&&11>=document.documentMode,Mt=null,ea=null,Pr=null,na=!1;function Is(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;na||Mt==null||Mt!==Jr(r)||(r=Mt,"selectionStart"in r&&Zi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&Sr(Pr,r)||(Pr=r,r=bo(ea,"onSelect"),0<r.length&&(n=new Vi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Mt)))}function go(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ft={animationend:go("Animation","AnimationEnd"),animationiteration:go("Animation","AnimationIteration"),animationstart:go("Animation","AnimationStart"),transitionend:go("Transition","TransitionEnd")},ta={},qs={};x&&(qs=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function yo(e){if(ta[e])return ta[e];if(!Ft[e])return e;var n=Ft[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in qs)return ta[e]=n[t];return e}var Us=yo("animationend"),Bs=yo("animationiteration"),Hs=yo("animationstart"),$s=yo("transitionend"),Vs=new Map,Ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,n){Vs.set(e,n),f(n,[e])}for(var ra=0;ra<Ws.length;ra++){var oa=Ws[ra],Vf=oa.toLowerCase(),Wf=oa[0].toUpperCase()+oa.slice(1);Yn(Vf,"on"+Wf)}Yn(Us,"onAnimationEnd"),Yn(Bs,"onAnimationIteration"),Yn(Hs,"onAnimationStart"),Yn("dblclick","onDoubleClick"),Yn("focusin","onFocus"),Yn("focusout","onBlur"),Yn($s,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function Qs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,$d(r,n,void 0,e),e.currentTarget=null}function Xs(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var c=r.length-1;0<=c;c--){var p=r[c],m=p.instance,k=p.currentTarget;if(p=p.listener,m!==l&&i.isPropagationStopped())break e;Qs(i,p,k),l=m}else for(c=0;c<r.length;c++){if(p=r[c],m=p.instance,k=p.currentTarget,p=p.listener,m!==l&&i.isPropagationStopped())break e;Qs(i,p,k),l=m}}}if(eo)throw e=Li,eo=!1,Li=null,e}function me(e,n){var t=n[fa];t===void 0&&(t=n[fa]=new Set);var r=e+"__bubble";t.has(r)||(Ks(n,e,2,!1),t.add(r))}function ia(e,n,t){var r=0;n&&(r|=4),Ks(t,e,r,n)}var vo="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[vo]){e[vo]=!0,u.forEach(function(t){t!=="selectionchange"&&(Qf.has(t)||ia(t,!1,e),ia(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[vo]||(n[vo]=!0,ia("selectionchange",!1,n))}}function Ks(e,n,t,r){switch(vs(n)){case 1:var i=lf;break;case 4:i=sf;break;default:i=Bi}t=i.bind(null,n,t,e),i=void 0,!Ai||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function aa(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var p=r.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(c===4)for(c=r.return;c!==null;){var m=c.tag;if((m===3||m===4)&&(m=c.stateNode.containerInfo,m===i||m.nodeType===8&&m.parentNode===i))return;c=c.return}for(;p!==null;){if(c=pt(p),c===null)return;if(m=c.tag,m===5||m===6){r=l=c;continue e}p=p.parentNode}}r=r.return}es(function(){var k=l,N=Ri(t),D=[];e:{var T=Vs.get(e);if(T!==void 0){var F=Vi,q=e;switch(e){case"keypress":if(fo(t)===0)break e;case"keydown":case"keyup":F=Sf;break;case"focusin":q="focus",F=Xi;break;case"focusout":q="blur",F=Xi;break;case"beforeblur":case"afterblur":F=Xi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Of;break;case Us:case Bs:case Hs:F=hf;break;case $s:F=Cf;break;case"scroll":F=uf;break;case"wheel":F=zf;break;case"copy":case"cut":case"paste":F=gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Ss}var U=(n&4)!==0,_e=!U&&e==="scroll",v=U?T!==null?T+"Capture":null:T;U=[];for(var g=k,b;g!==null;){b=g;var A=b.stateNode;if(b.tag===5&&A!==null&&(b=A,v!==null&&(A=sr(g,v),A!=null&&U.push(_r(g,A,b)))),_e)break;g=g.return}0<U.length&&(T=new F(T,q,null,t,N),D.push({event:T,listeners:U}))}}if(!(n&7)){e:{if(T=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",T&&t!==zi&&(q=t.relatedTarget||t.fromElement)&&(pt(q)||q[Mn]))break e;if((F||T)&&(T=N.window===N?N:(T=N.ownerDocument)?T.defaultView||T.parentWindow:window,F?(q=t.relatedTarget||t.toElement,F=k,q=q?pt(q):null,q!==null&&(_e=ft(q),q!==_e||q.tag!==5&&q.tag!==6)&&(q=null)):(F=null,q=k),F!==q)){if(U=ks,A="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(U=Ss,A="onPointerLeave",v="onPointerEnter",g="pointer"),_e=F==null?T:qt(F),b=q==null?T:qt(q),T=new U(A,g+"leave",F,t,N),T.target=_e,T.relatedTarget=b,A=null,pt(N)===k&&(U=new U(v,g+"enter",q,t,N),U.target=b,U.relatedTarget=_e,A=U),_e=A,F&&q)n:{for(U=F,v=q,g=0,b=U;b;b=jt(b))g++;for(b=0,A=v;A;A=jt(A))b++;for(;0<g-b;)U=jt(U),g--;for(;0<b-g;)v=jt(v),b--;for(;g--;){if(U===v||v!==null&&U===v.alternate)break n;U=jt(U),v=jt(v)}U=null}else U=null;F!==null&&Ys(D,T,F,U,!1),q!==null&&_e!==null&&Ys(D,_e,q,U,!0)}}e:{if(T=k?qt(k):window,F=T.nodeName&&T.nodeName.toLowerCase(),F==="select"||F==="input"&&T.type==="file")var B=Ff;else if(Ts(T))if(Rs)B=Uf;else{B=If;var $=jf}else(F=T.nodeName)&&F.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(B=qf);if(B&&(B=B(e,k))){zs(D,B,t,N);break e}$&&$(e,T,k),e==="focusout"&&($=T._wrapperState)&&$.controlled&&T.type==="number"&&Ei(T,"number",T.value)}switch($=k?qt(k):window,e){case"focusin":(Ts($)||$.contentEditable==="true")&&(Mt=$,ea=k,Pr=null);break;case"focusout":Pr=ea=Mt=null;break;case"mousedown":na=!0;break;case"contextmenu":case"mouseup":case"dragend":na=!1,Is(D,t,N);break;case"selectionchange":if($f)break;case"keydown":case"keyup":Is(D,t,N)}var V;if(Yi)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Lt?_s(e,t)&&(X="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(X="onCompositionStart");X&&(Ps&&t.locale!=="ko"&&(Lt||X!=="onCompositionStart"?X==="onCompositionEnd"&&Lt&&(V=bs()):(Kn=N,$i="value"in Kn?Kn.value:Kn.textContent,Lt=!0)),$=bo(k,X),0<$.length&&(X=new ws(X,e,null,t,N),D.push({event:X,listeners:$}),V?X.data=V:(V=Cs(t),V!==null&&(X.data=V)))),(V=Nf?Df(e,t):Af(e,t))&&(k=bo(k,"onBeforeInput"),0<k.length&&(N=new ws("onBeforeInput","beforeinput",null,t,N),D.push({event:N,listeners:k}),N.data=V))}Xs(D,n)})}function _r(e,n,t){return{instance:e,listener:n,currentTarget:t}}function bo(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=sr(e,t),l!=null&&r.unshift(_r(e,l,i)),l=sr(e,n),l!=null&&r.push(_r(e,l,i))),e=e.return}return r}function jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ys(e,n,t,r,i){for(var l=n._reactName,c=[];t!==null&&t!==r;){var p=t,m=p.alternate,k=p.stateNode;if(m!==null&&m===r)break;p.tag===5&&k!==null&&(p=k,i?(m=sr(t,l),m!=null&&c.unshift(_r(t,m,p))):i||(m=sr(t,l),m!=null&&c.push(_r(t,m,p)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var Xf=/\r\n?/g,Kf=/\u0000|\uFFFD/g;function Js(e){return(typeof e=="string"?e:""+e).replace(Xf,`
`).replace(Kf,"")}function xo(e,n,t){if(n=Js(n),Js(e)!==n&&t)throw Error(s(425))}function ko(){}var la=null,sa=null;function ua(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ca=typeof setTimeout=="function"?setTimeout:void 0,Yf=typeof clearTimeout=="function"?clearTimeout:void 0,Gs=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Gs<"u"?function(e){return Gs.resolve(null).then(e).catch(Gf)}:ca;function Gf(e){setTimeout(function(){throw e})}function da(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),yr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);yr(n)}function Jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Zs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var It=Math.random().toString(36).slice(2),zn="__reactFiber$"+It,Cr="__reactProps$"+It,Mn="__reactContainer$"+It,fa="__reactEvents$"+It,Zf="__reactListeners$"+It,ep="__reactHandles$"+It;function pt(e){var n=e[zn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Mn]||t[zn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Zs(e);e!==null;){if(t=e[zn])return t;e=Zs(e)}return n}e=t,t=e.parentNode}return null}function Tr(e){return e=e[zn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function wo(e){return e[Cr]||null}var pa=[],Ut=-1;function Gn(e){return{current:e}}function ge(e){0>Ut||(e.current=pa[Ut],pa[Ut]=null,Ut--)}function he(e,n){Ut++,pa[Ut]=e.current,e.current=n}var Zn={},je=Gn(Zn),Qe=Gn(!1),ht=Zn;function Bt(e,n){var t=e.type.contextTypes;if(!t)return Zn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function So(){ge(Qe),ge(je)}function eu(e,n,t){if(je.current!==Zn)throw Error(s(168));he(je,n),he(Qe,t)}function nu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(s(108,pe(e)||"Unknown",i));return I({},t,r)}function Po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zn,ht=je.current,he(je,e),he(Qe,Qe.current),!0}function tu(e,n,t){var r=e.stateNode;if(!r)throw Error(s(169));t?(e=nu(e,n,ht),r.__reactInternalMemoizedMergedChildContext=e,ge(Qe),ge(je),he(je,e)):ge(Qe),he(Qe,t)}var Fn=null,Eo=!1,ha=!1;function ru(e){Fn===null?Fn=[e]:Fn.push(e)}function np(e){Eo=!0,ru(e)}function et(){if(!ha&&Fn!==null){ha=!0;var e=0,n=fe;try{var t=Fn;for(fe=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Fn=null,Eo=!1}catch(i){throw Fn!==null&&(Fn=Fn.slice(e+1)),is(Mi,et),i}finally{fe=n,ha=!1}}return null}var Ht=[],$t=0,Oo=null,_o=0,un=[],cn=0,mt=null,jn=1,In="";function gt(e,n){Ht[$t++]=_o,Ht[$t++]=Oo,Oo=e,_o=n}function ou(e,n,t){un[cn++]=jn,un[cn++]=In,un[cn++]=mt,mt=e;var r=jn;e=In;var i=32-yn(r)-1;r&=~(1<<i),t+=1;var l=32-yn(n)+i;if(30<l){var c=i-i%5;l=(r&(1<<c)-1).toString(32),r>>=c,i-=c,jn=1<<32-yn(n)+i|t<<i|r,In=l+e}else jn=1<<l|t<<i|r,In=e}function ma(e){e.return!==null&&(gt(e,1),ou(e,1,0))}function ga(e){for(;e===Oo;)Oo=Ht[--$t],Ht[$t]=null,_o=Ht[--$t],Ht[$t]=null;for(;e===mt;)mt=un[--cn],un[cn]=null,In=un[--cn],un[cn]=null,jn=un[--cn],un[cn]=null}var rn=null,on=null,ve=!1,bn=null;function iu(e,n){var t=hn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function au(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,rn=e,on=Jn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,rn=e,on=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=mt!==null?{id:jn,overflow:In}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=hn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,rn=e,on=null,!0):!1;default:return!1}}function ya(e){return(e.mode&1)!==0&&(e.flags&128)===0}function va(e){if(ve){var n=on;if(n){var t=n;if(!au(e,n)){if(ya(e))throw Error(s(418));n=Jn(t.nextSibling);var r=rn;n&&au(e,n)?iu(r,t):(e.flags=e.flags&-4097|2,ve=!1,rn=e)}}else{if(ya(e))throw Error(s(418));e.flags=e.flags&-4097|2,ve=!1,rn=e}}}function lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rn=e}function Co(e){if(e!==rn)return!1;if(!ve)return lu(e),ve=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ua(e.type,e.memoizedProps)),n&&(n=on)){if(ya(e))throw su(),Error(s(418));for(;n;)iu(e,n),n=Jn(n.nextSibling)}if(lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){on=Jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}on=null}}else on=rn?Jn(e.stateNode.nextSibling):null;return!0}function su(){for(var e=on;e;)e=Jn(e.nextSibling)}function Vt(){on=rn=null,ve=!1}function ba(e){bn===null?bn=[e]:bn.push(e)}var tp=oe.ReactCurrentBatchConfig;function zr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(s(309));var r=t.stateNode}if(!r)throw Error(s(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(c){var p=i.refs;c===null?delete p[l]:p[l]=c},n._stringRef=l,n)}if(typeof e!="string")throw Error(s(284));if(!t._owner)throw Error(s(290,e))}return e}function To(e,n){throw e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function uu(e){var n=e._init;return n(e._payload)}function cu(e){function n(v,g){if(e){var b=v.deletions;b===null?(v.deletions=[g],v.flags|=16):b.push(g)}}function t(v,g){if(!e)return null;for(;g!==null;)n(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=st(v,g),v.index=0,v.sibling=null,v}function l(v,g,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<g?(v.flags|=2,g):b):(v.flags|=2,g)):(v.flags|=1048576,g)}function c(v){return e&&v.alternate===null&&(v.flags|=2),v}function p(v,g,b,A){return g===null||g.tag!==6?(g=cl(b,v.mode,A),g.return=v,g):(g=i(g,b),g.return=v,g)}function m(v,g,b,A){var B=b.type;return B===ce?N(v,g,b.props.children,A,b.key):g!==null&&(g.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===We&&uu(B)===g.type)?(A=i(g,b.props),A.ref=zr(v,g,b),A.return=v,A):(A=Zo(b.type,b.key,b.props,null,v.mode,A),A.ref=zr(v,g,b),A.return=v,A)}function k(v,g,b,A){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=dl(b,v.mode,A),g.return=v,g):(g=i(g,b.children||[]),g.return=v,g)}function N(v,g,b,A,B){return g===null||g.tag!==7?(g=Pt(b,v.mode,A,B),g.return=v,g):(g=i(g,b),g.return=v,g)}function D(v,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=cl(""+g,v.mode,b),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case re:return b=Zo(g.type,g.key,g.props,null,v.mode,b),b.ref=zr(v,null,g),b.return=v,b;case ae:return g=dl(g,v.mode,b),g.return=v,g;case We:var A=g._init;return D(v,A(g._payload),b)}if(ir(g)||Q(g))return g=Pt(g,v.mode,b,null),g.return=v,g;To(v,g)}return null}function T(v,g,b,A){var B=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return B!==null?null:p(v,g,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case re:return b.key===B?m(v,g,b,A):null;case ae:return b.key===B?k(v,g,b,A):null;case We:return B=b._init,T(v,g,B(b._payload),A)}if(ir(b)||Q(b))return B!==null?null:N(v,g,b,A,null);To(v,b)}return null}function F(v,g,b,A,B){if(typeof A=="string"&&A!==""||typeof A=="number")return v=v.get(b)||null,p(g,v,""+A,B);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case re:return v=v.get(A.key===null?b:A.key)||null,m(g,v,A,B);case ae:return v=v.get(A.key===null?b:A.key)||null,k(g,v,A,B);case We:var $=A._init;return F(v,g,b,$(A._payload),B)}if(ir(A)||Q(A))return v=v.get(b)||null,N(g,v,A,B,null);To(g,A)}return null}function q(v,g,b,A){for(var B=null,$=null,V=g,X=g=0,Le=null;V!==null&&X<b.length;X++){V.index>X?(Le=V,V=null):Le=V.sibling;var ue=T(v,V,b[X],A);if(ue===null){V===null&&(V=Le);break}e&&V&&ue.alternate===null&&n(v,V),g=l(ue,g,X),$===null?B=ue:$.sibling=ue,$=ue,V=Le}if(X===b.length)return t(v,V),ve&&gt(v,X),B;if(V===null){for(;X<b.length;X++)V=D(v,b[X],A),V!==null&&(g=l(V,g,X),$===null?B=V:$.sibling=V,$=V);return ve&&gt(v,X),B}for(V=r(v,V);X<b.length;X++)Le=F(V,v,X,b[X],A),Le!==null&&(e&&Le.alternate!==null&&V.delete(Le.key===null?X:Le.key),g=l(Le,g,X),$===null?B=Le:$.sibling=Le,$=Le);return e&&V.forEach(function(ut){return n(v,ut)}),ve&&gt(v,X),B}function U(v,g,b,A){var B=Q(b);if(typeof B!="function")throw Error(s(150));if(b=B.call(b),b==null)throw Error(s(151));for(var $=B=null,V=g,X=g=0,Le=null,ue=b.next();V!==null&&!ue.done;X++,ue=b.next()){V.index>X?(Le=V,V=null):Le=V.sibling;var ut=T(v,V,ue.value,A);if(ut===null){V===null&&(V=Le);break}e&&V&&ut.alternate===null&&n(v,V),g=l(ut,g,X),$===null?B=ut:$.sibling=ut,$=ut,V=Le}if(ue.done)return t(v,V),ve&&gt(v,X),B;if(V===null){for(;!ue.done;X++,ue=b.next())ue=D(v,ue.value,A),ue!==null&&(g=l(ue,g,X),$===null?B=ue:$.sibling=ue,$=ue);return ve&&gt(v,X),B}for(V=r(v,V);!ue.done;X++,ue=b.next())ue=F(V,v,X,ue.value,A),ue!==null&&(e&&ue.alternate!==null&&V.delete(ue.key===null?X:ue.key),g=l(ue,g,X),$===null?B=ue:$.sibling=ue,$=ue);return e&&V.forEach(function(Ap){return n(v,Ap)}),ve&&gt(v,X),B}function _e(v,g,b,A){if(typeof b=="object"&&b!==null&&b.type===ce&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case re:e:{for(var B=b.key,$=g;$!==null;){if($.key===B){if(B=b.type,B===ce){if($.tag===7){t(v,$.sibling),g=i($,b.props.children),g.return=v,v=g;break e}}else if($.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===We&&uu(B)===$.type){t(v,$.sibling),g=i($,b.props),g.ref=zr(v,$,b),g.return=v,v=g;break e}t(v,$);break}else n(v,$);$=$.sibling}b.type===ce?(g=Pt(b.props.children,v.mode,A,b.key),g.return=v,v=g):(A=Zo(b.type,b.key,b.props,null,v.mode,A),A.ref=zr(v,g,b),A.return=v,v=A)}return c(v);case ae:e:{for($=b.key;g!==null;){if(g.key===$)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){t(v,g.sibling),g=i(g,b.children||[]),g.return=v,v=g;break e}else{t(v,g);break}else n(v,g);g=g.sibling}g=dl(b,v.mode,A),g.return=v,v=g}return c(v);case We:return $=b._init,_e(v,g,$(b._payload),A)}if(ir(b))return q(v,g,b,A);if(Q(b))return U(v,g,b,A);To(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(t(v,g.sibling),g=i(g,b),g.return=v,v=g):(t(v,g),g=cl(b,v.mode,A),g.return=v,v=g),c(v)):t(v,g)}return _e}var Wt=cu(!0),du=cu(!1),zo=Gn(null),Ro=null,Qt=null,xa=null;function ka(){xa=Qt=Ro=null}function wa(e){var n=zo.current;ge(zo),e._currentValue=n}function Sa(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Xt(e,n){Ro=e,xa=Qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ke=!0),e.firstContext=null)}function dn(e){var n=e._currentValue;if(xa!==e)if(e={context:e,memoizedValue:n,next:null},Qt===null){if(Ro===null)throw Error(s(308));Qt=e,Ro.dependencies={lanes:0,firstContext:e}}else Qt=Qt.next=e;return n}var yt=null;function Pa(e){yt===null?yt=[e]:yt.push(e)}function fu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Pa(n)):(t.next=i.next,i.next=t),n.interleaved=t,qn(e,r)}function qn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var nt=!1;function Ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Un(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function tt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,qn(e,t)}return i=r.interleaved,i===null?(n.next=n,Pa(r)):(n.next=i.next,i.next=n),r.interleaved=n,qn(e,t)}function No(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ii(e,t)}}function hu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var c={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=c:l=l.next=c,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Do(e,n,t,r){var i=e.updateQueue;nt=!1;var l=i.firstBaseUpdate,c=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var m=p,k=m.next;m.next=null,c===null?l=k:c.next=k,c=m;var N=e.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==c&&(p===null?N.firstBaseUpdate=k:p.next=k,N.lastBaseUpdate=m))}if(l!==null){var D=i.baseState;c=0,N=k=m=null,p=l;do{var T=p.lane,F=p.eventTime;if((r&T)===T){N!==null&&(N=N.next={eventTime:F,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var q=e,U=p;switch(T=n,F=t,U.tag){case 1:if(q=U.payload,typeof q=="function"){D=q.call(F,D,T);break e}D=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=U.payload,T=typeof q=="function"?q.call(F,D,T):q,T==null)break e;D=I({},D,T);break e;case 2:nt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,T=i.effects,T===null?i.effects=[p]:T.push(p))}else F={eventTime:F,lane:T,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(k=N=F,m=D):N=N.next=F,c|=T;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;T=p,p=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);if(N===null&&(m=D),i.baseState=m,i.firstBaseUpdate=k,i.lastBaseUpdate=N,n=i.shared.interleaved,n!==null){i=n;do c|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);xt|=c,e.lanes=c,e.memoizedState=D}}function mu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(s(191,i));i.call(r)}}}var Rr={},Rn=Gn(Rr),Nr=Gn(Rr),Dr=Gn(Rr);function vt(e){if(e===Rr)throw Error(s(174));return e}function Oa(e,n){switch(he(Dr,n),he(Nr,e),he(Rn,Rr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:_i(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=_i(n,e)}ge(Rn),he(Rn,n)}function Kt(){ge(Rn),ge(Nr),ge(Dr)}function gu(e){vt(Dr.current);var n=vt(Rn.current),t=_i(n,e.type);n!==t&&(he(Nr,e),he(Rn,t))}function _a(e){Nr.current===e&&(ge(Rn),ge(Nr))}var we=Gn(0);function Ao(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ca=[];function Ta(){for(var e=0;e<Ca.length;e++)Ca[e]._workInProgressVersionPrimary=null;Ca.length=0}var Lo=oe.ReactCurrentDispatcher,za=oe.ReactCurrentBatchConfig,bt=0,Se=null,ze=null,De=null,Mo=!1,Ar=!1,Lr=0,rp=0;function Ie(){throw Error(s(321))}function Ra(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!vn(e[t],n[t]))return!1;return!0}function Na(e,n,t,r,i,l){if(bt=l,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Lo.current=e===null||e.memoizedState===null?lp:sp,e=t(r,i),Ar){l=0;do{if(Ar=!1,Lr=0,25<=l)throw Error(s(301));l+=1,De=ze=null,n.updateQueue=null,Lo.current=up,e=t(r,i)}while(Ar)}if(Lo.current=Io,n=ze!==null&&ze.next!==null,bt=0,De=ze=Se=null,Mo=!1,n)throw Error(s(300));return e}function Da(){var e=Lr!==0;return Lr=0,e}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Se.memoizedState=De=e:De=De.next=e,De}function fn(){if(ze===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=De===null?Se.memoizedState:De.next;if(n!==null)De=n,ze=e;else{if(e===null)throw Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},De===null?Se.memoizedState=De=e:De=De.next=e}return De}function Mr(e,n){return typeof n=="function"?n(e):n}function Aa(e){var n=fn(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var r=ze,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var c=i.next;i.next=l.next,l.next=c}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var p=c=null,m=null,k=l;do{var N=k.lane;if((bt&N)===N)m!==null&&(m=m.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),r=k.hasEagerState?k.eagerState:e(r,k.action);else{var D={lane:N,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};m===null?(p=m=D,c=r):m=m.next=D,Se.lanes|=N,xt|=N}k=k.next}while(k!==null&&k!==l);m===null?c=r:m.next=p,vn(r,n.memoizedState)||(Ke=!0),n.memoizedState=r,n.baseState=c,n.baseQueue=m,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,Se.lanes|=l,xt|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function La(e){var n=fn(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var c=i=i.next;do l=e(l,c.action),c=c.next;while(c!==i);vn(l,n.memoizedState)||(Ke=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function yu(){}function vu(e,n){var t=Se,r=fn(),i=n(),l=!vn(r.memoizedState,i);if(l&&(r.memoizedState=i,Ke=!0),r=r.queue,Ma(ku.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||De!==null&&De.memoizedState.tag&1){if(t.flags|=2048,Fr(9,xu.bind(null,t,r,i,n),void 0,null),Ae===null)throw Error(s(349));bt&30||bu(t,n,i)}return i}function bu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Se.updateQueue,n===null?(n={lastEffect:null,stores:null},Se.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function xu(e,n,t,r){n.value=t,n.getSnapshot=r,wu(n)&&Su(e)}function ku(e,n,t){return t(function(){wu(n)&&Su(e)})}function wu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!vn(e,t)}catch{return!0}}function Su(e){var n=qn(e,1);n!==null&&Sn(n,e,1,-1)}function Pu(e){var n=Nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},n.queue=e,e=e.dispatch=ap.bind(null,Se,e),[n.memoizedState,e]}function Fr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Se.updateQueue,n===null?(n={lastEffect:null,stores:null},Se.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Eu(){return fn().memoizedState}function Fo(e,n,t,r){var i=Nn();Se.flags|=e,i.memoizedState=Fr(1|n,t,void 0,r===void 0?null:r)}function jo(e,n,t,r){var i=fn();r=r===void 0?null:r;var l=void 0;if(ze!==null){var c=ze.memoizedState;if(l=c.destroy,r!==null&&Ra(r,c.deps)){i.memoizedState=Fr(n,t,l,r);return}}Se.flags|=e,i.memoizedState=Fr(1|n,t,l,r)}function Ou(e,n){return Fo(8390656,8,e,n)}function Ma(e,n){return jo(2048,8,e,n)}function _u(e,n){return jo(4,2,e,n)}function Cu(e,n){return jo(4,4,e,n)}function Tu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zu(e,n,t){return t=t!=null?t.concat([e]):null,jo(4,4,Tu.bind(null,n,e),t)}function Fa(){}function Ru(e,n){var t=fn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ra(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Nu(e,n){var t=fn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ra(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Du(e,n,t){return bt&21?(vn(t,n)||(t=us(),Se.lanes|=t,xt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=t)}function op(e,n){var t=fe;fe=t!==0&&4>t?t:4,e(!0);var r=za.transition;za.transition={};try{e(!1),n()}finally{fe=t,za.transition=r}}function Au(){return fn().memoizedState}function ip(e,n,t){var r=at(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Lu(e))Mu(n,t);else if(t=fu(e,n,t,r),t!==null){var i=$e();Sn(t,e,r,i),Fu(t,n,r)}}function ap(e,n,t){var r=at(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Mu(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var c=n.lastRenderedState,p=l(c,t);if(i.hasEagerState=!0,i.eagerState=p,vn(p,c)){var m=n.interleaved;m===null?(i.next=i,Pa(n)):(i.next=m.next,m.next=i),n.interleaved=i;return}}catch{}finally{}t=fu(e,n,i,r),t!==null&&(i=$e(),Sn(t,e,r,i),Fu(t,n,r))}}function Lu(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function Mu(e,n){Ar=Mo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Fu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ii(e,t)}}var Io={readContext:dn,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},lp={readContext:dn,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:dn,useEffect:Ou,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Fo(4194308,4,Tu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Fo(4194308,4,e,n)},useInsertionEffect:function(e,n){return Fo(4,2,e,n)},useMemo:function(e,n){var t=Nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Nn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ip.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:Pu,useDebugValue:Fa,useDeferredValue:function(e){return Nn().memoizedState=e},useTransition:function(){var e=Pu(!1),n=e[0];return e=op.bind(null,e[1]),Nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Se,i=Nn();if(ve){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),Ae===null)throw Error(s(349));bt&30||bu(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Ou(ku.bind(null,r,l,e),[e]),r.flags|=2048,Fr(9,xu.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Nn(),n=Ae.identifierPrefix;if(ve){var t=In,r=jn;t=(r&~(1<<32-yn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Lr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=rp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},sp={readContext:dn,useCallback:Ru,useContext:dn,useEffect:Ma,useImperativeHandle:zu,useInsertionEffect:_u,useLayoutEffect:Cu,useMemo:Nu,useReducer:Aa,useRef:Eu,useState:function(){return Aa(Mr)},useDebugValue:Fa,useDeferredValue:function(e){var n=fn();return Du(n,ze.memoizedState,e)},useTransition:function(){var e=Aa(Mr)[0],n=fn().memoizedState;return[e,n]},useMutableSource:yu,useSyncExternalStore:vu,useId:Au,unstable_isNewReconciler:!1},up={readContext:dn,useCallback:Ru,useContext:dn,useEffect:Ma,useImperativeHandle:zu,useInsertionEffect:_u,useLayoutEffect:Cu,useMemo:Nu,useReducer:La,useRef:Eu,useState:function(){return La(Mr)},useDebugValue:Fa,useDeferredValue:function(e){var n=fn();return ze===null?n.memoizedState=e:Du(n,ze.memoizedState,e)},useTransition:function(){var e=La(Mr)[0],n=fn().memoizedState;return[e,n]},useMutableSource:yu,useSyncExternalStore:vu,useId:Au,unstable_isNewReconciler:!1};function xn(e,n){if(e&&e.defaultProps){n=I({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ja(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:I({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var qo={isMounted:function(e){return(e=e._reactInternals)?ft(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=$e(),i=at(e),l=Un(r,i);l.payload=n,t!=null&&(l.callback=t),n=tt(e,l,i),n!==null&&(Sn(n,e,i,r),No(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=$e(),i=at(e),l=Un(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=tt(e,l,i),n!==null&&(Sn(n,e,i,r),No(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=$e(),r=at(e),i=Un(t,r);i.tag=2,n!=null&&(i.callback=n),n=tt(e,i,r),n!==null&&(Sn(n,e,r,t),No(n,e,r))}};function ju(e,n,t,r,i,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,c):n.prototype&&n.prototype.isPureReactComponent?!Sr(t,r)||!Sr(i,l):!0}function Iu(e,n,t){var r=!1,i=Zn,l=n.contextType;return typeof l=="object"&&l!==null?l=dn(l):(i=Xe(n)?ht:je.current,r=n.contextTypes,l=(r=r!=null)?Bt(e,i):Zn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=qo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function qu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&qo.enqueueReplaceState(n,n.state,null)}function Ia(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ea(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=dn(l):(l=Xe(n)?ht:je.current,i.context=Bt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(ja(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&qo.enqueueReplaceState(i,i.state,null),Do(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yt(e,n){try{var t="",r=n;do t+=le(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function qa(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ua(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var cp=typeof WeakMap=="function"?WeakMap:Map;function Uu(e,n,t){t=Un(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Qo||(Qo=!0,tl=r),Ua(e,n)},t}function Bu(e,n,t){t=Un(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Ua(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Ua(e,n),typeof r!="function"&&(ot===null?ot=new Set([this]):ot.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})}),t}function Hu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new cp;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Pp.bind(null,e,n,t),n.then(e,e))}function $u(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Vu(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Un(-1,1),n.tag=2,tt(t,n,1))),t.lanes|=1),e)}var dp=oe.ReactCurrentOwner,Ke=!1;function He(e,n,t,r){n.child=e===null?du(n,null,t,r):Wt(n,e.child,t,r)}function Wu(e,n,t,r,i){t=t.render;var l=n.ref;return Xt(n,i),r=Na(e,n,t,r,l,i),t=Da(),e!==null&&!Ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Bn(e,n,i)):(ve&&t&&ma(n),n.flags|=1,He(e,n,r,i),n.child)}function Qu(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!ul(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Xu(e,n,l,r,i)):(e=Zo(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var c=l.memoizedProps;if(t=t.compare,t=t!==null?t:Sr,t(c,r)&&e.ref===n.ref)return Bn(e,n,i)}return n.flags|=1,e=st(l,r),e.ref=n.ref,e.return=n,n.child=e}function Xu(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Sr(l,r)&&e.ref===n.ref)if(Ke=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ke=!0);else return n.lanes=e.lanes,Bn(e,n,i)}return Ba(e,n,t,r,i)}function Ku(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Gt,an),an|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,he(Gt,an),an|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,he(Gt,an),an|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,he(Gt,an),an|=r;return He(e,n,i,t),n.child}function Yu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ba(e,n,t,r,i){var l=Xe(t)?ht:je.current;return l=Bt(n,l),Xt(n,i),t=Na(e,n,t,r,l,i),r=Da(),e!==null&&!Ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Bn(e,n,i)):(ve&&r&&ma(n),n.flags|=1,He(e,n,t,i),n.child)}function Ju(e,n,t,r,i){if(Xe(t)){var l=!0;Po(n)}else l=!1;if(Xt(n,i),n.stateNode===null)Bo(e,n),Iu(n,t,r),Ia(n,t,r,i),r=!0;else if(e===null){var c=n.stateNode,p=n.memoizedProps;c.props=p;var m=c.context,k=t.contextType;typeof k=="object"&&k!==null?k=dn(k):(k=Xe(t)?ht:je.current,k=Bt(n,k));var N=t.getDerivedStateFromProps,D=typeof N=="function"||typeof c.getSnapshotBeforeUpdate=="function";D||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==r||m!==k)&&qu(n,c,r,k),nt=!1;var T=n.memoizedState;c.state=T,Do(n,r,c,i),m=n.memoizedState,p!==r||T!==m||Qe.current||nt?(typeof N=="function"&&(ja(n,t,N,r),m=n.memoizedState),(p=nt||ju(n,t,p,r,T,m,k))?(D||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=m),c.props=r,c.state=m,c.context=k,r=p):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,pu(e,n),p=n.memoizedProps,k=n.type===n.elementType?p:xn(n.type,p),c.props=k,D=n.pendingProps,T=c.context,m=t.contextType,typeof m=="object"&&m!==null?m=dn(m):(m=Xe(t)?ht:je.current,m=Bt(n,m));var F=t.getDerivedStateFromProps;(N=typeof F=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==D||T!==m)&&qu(n,c,r,m),nt=!1,T=n.memoizedState,c.state=T,Do(n,r,c,i);var q=n.memoizedState;p!==D||T!==q||Qe.current||nt?(typeof F=="function"&&(ja(n,t,F,r),q=n.memoizedState),(k=nt||ju(n,t,k,r,T,q,m)||!1)?(N||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,q,m),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,q,m)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&T===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&T===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=q),c.props=r,c.state=q,c.context=m,r=k):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&T===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&T===e.memoizedState||(n.flags|=1024),r=!1)}return Ha(e,n,t,r,l,i)}function Ha(e,n,t,r,i,l){Yu(e,n);var c=(n.flags&128)!==0;if(!r&&!c)return i&&tu(n,t,!1),Bn(e,n,l);r=n.stateNode,dp.current=n;var p=c&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&c?(n.child=Wt(n,e.child,null,l),n.child=Wt(n,null,p,l)):He(e,n,p,l),n.memoizedState=r.state,i&&tu(n,t,!0),n.child}function Gu(e){var n=e.stateNode;n.pendingContext?eu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&eu(e,n.context,!1),Oa(e,n.containerInfo)}function Zu(e,n,t,r,i){return Vt(),ba(i),n.flags|=256,He(e,n,t,r),n.child}var $a={dehydrated:null,treeContext:null,retryLane:0};function Va(e){return{baseLanes:e,cachePool:null,transitions:null}}function ec(e,n,t){var r=n.pendingProps,i=we.current,l=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(we,i&1),e===null)return va(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(c=r.children,e=r.fallback,l?(r=n.mode,l=n.child,c={mode:"hidden",children:c},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=c):l=ei(c,r,0,null),e=Pt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Va(t),n.memoizedState=$a,e):Wa(n,c));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return fp(e,n,c,r,p,i,t);if(l){l=r.fallback,c=n.mode,i=e.child,p=i.sibling;var m={mode:"hidden",children:r.children};return!(c&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=m,n.deletions=null):(r=st(i,m),r.subtreeFlags=i.subtreeFlags&14680064),p!==null?l=st(p,l):(l=Pt(l,c,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,c=e.child.memoizedState,c=c===null?Va(t):{baseLanes:c.baseLanes|t,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~t,n.memoizedState=$a,r}return l=e.child,e=l.sibling,r=st(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Wa(e,n){return n=ei({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Uo(e,n,t,r){return r!==null&&ba(r),Wt(n,e.child,null,t),e=Wa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fp(e,n,t,r,i,l,c){if(t)return n.flags&256?(n.flags&=-257,r=qa(Error(s(422))),Uo(e,n,c,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=ei({mode:"visible",children:r.children},i,0,null),l=Pt(l,i,c,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Wt(n,e.child,null,c),n.child.memoizedState=Va(c),n.memoizedState=$a,l);if(!(n.mode&1))return Uo(e,n,c,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var p=r.dgst;return r=p,l=Error(s(419)),r=qa(l,r,void 0),Uo(e,n,c,r)}if(p=(c&e.childLanes)!==0,Ke||p){if(r=Ae,r!==null){switch(c&-c){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|c)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,qn(e,i),Sn(r,e,i,-1))}return sl(),r=qa(Error(s(421))),Uo(e,n,c,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Ep.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,on=Jn(i.nextSibling),rn=n,ve=!0,bn=null,e!==null&&(un[cn++]=jn,un[cn++]=In,un[cn++]=mt,jn=e.id,In=e.overflow,mt=n),n=Wa(n,r.children),n.flags|=4096,n)}function nc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Sa(e.return,n,t)}function Qa(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function tc(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(He(e,n,r.children,t),r=we.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nc(e,t,n);else if(e.tag===19)nc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(we,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Ao(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Qa(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Ao(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Qa(n,!0,t,null,l);break;case"together":Qa(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Bn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),xt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=st(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=st(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function pp(e,n,t){switch(n.tag){case 3:Gu(n),Vt();break;case 5:gu(n);break;case 1:Xe(n.type)&&Po(n);break;case 4:Oa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;he(zo,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),n.flags|=128,null):t&n.child.childLanes?ec(e,n,t):(he(we,we.current&1),e=Bn(e,n,t),e!==null?e.sibling:null);he(we,we.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return tc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return n.lanes=0,Ku(e,n,t)}return Bn(e,n,t)}var rc,Xa,oc,ic;rc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Xa=function(){},oc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,vt(Rn.current);var l=null;switch(t){case"input":i=Si(e,i),r=Si(e,r),l=[];break;case"select":i=I({},i,{value:void 0}),r=I({},r,{value:void 0}),l=[];break;case"textarea":i=Oi(e,i),r=Oi(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ko)}Ci(t,r);var c;t=null;for(k in i)if(!r.hasOwnProperty(k)&&i.hasOwnProperty(k)&&i[k]!=null)if(k==="style"){var p=i[k];for(c in p)p.hasOwnProperty(c)&&(t||(t={}),t[c]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(d.hasOwnProperty(k)?l||(l=[]):(l=l||[]).push(k,null));for(k in r){var m=r[k];if(p=i!=null?i[k]:void 0,r.hasOwnProperty(k)&&m!==p&&(m!=null||p!=null))if(k==="style")if(p){for(c in p)!p.hasOwnProperty(c)||m&&m.hasOwnProperty(c)||(t||(t={}),t[c]="");for(c in m)m.hasOwnProperty(c)&&p[c]!==m[c]&&(t||(t={}),t[c]=m[c])}else t||(l||(l=[]),l.push(k,t)),t=m;else k==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,p=p?p.__html:void 0,m!=null&&p!==m&&(l=l||[]).push(k,m)):k==="children"?typeof m!="string"&&typeof m!="number"||(l=l||[]).push(k,""+m):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(d.hasOwnProperty(k)?(m!=null&&k==="onScroll"&&me("scroll",e),l||p===m||(l=[])):(l=l||[]).push(k,m))}t&&(l=l||[]).push("style",t);var k=l;(n.updateQueue=k)&&(n.flags|=4)}},ic=function(e,n,t,r){t!==r&&(n.flags|=4)};function jr(e,n){if(!ve)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function hp(e,n,t){var r=n.pendingProps;switch(ga(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return Xe(n.type)&&So(),qe(n),null;case 3:return r=n.stateNode,Kt(),ge(Qe),ge(je),Ta(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Co(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,bn!==null&&(il(bn),bn=null))),Xa(e,n),qe(n),null;case 5:_a(n);var i=vt(Dr.current);if(t=n.type,e!==null&&n.stateNode!=null)oc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(e=vt(Rn.current),Co(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[zn]=n,r[Cr]=l,e=(n.mode&1)!==0,t){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Er.length;i++)me(Er[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Il(r,l),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},me("invalid",r);break;case"textarea":Bl(r,l),me("invalid",r)}Ci(t,l),i=null;for(var c in l)if(l.hasOwnProperty(c)){var p=l[c];c==="children"?typeof p=="string"?r.textContent!==p&&(l.suppressHydrationWarning!==!0&&xo(r.textContent,p,e),i=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(l.suppressHydrationWarning!==!0&&xo(r.textContent,p,e),i=["children",""+p]):d.hasOwnProperty(c)&&p!=null&&c==="onScroll"&&me("scroll",r)}switch(t){case"input":Yr(r),Ul(r,l,!0);break;case"textarea":Yr(r),$l(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ko)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{c=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(t,{is:r.is}):(e=c.createElement(t),t==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,t),e[zn]=n,e[Cr]=r,rc(e,n,!1,!1),n.stateNode=e;e:{switch(c=Ti(t,r),t){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<Er.length;i++)me(Er[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":Il(e,r),i=Si(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=I({},r,{value:void 0}),me("invalid",e);break;case"textarea":Bl(e,r),i=Oi(e,r),me("invalid",e);break;default:i=r}Ci(t,i),p=i;for(l in p)if(p.hasOwnProperty(l)){var m=p[l];l==="style"?Xl(e,m):l==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Wl(e,m)):l==="children"?typeof m=="string"?(t!=="textarea"||m!=="")&&ar(e,m):typeof m=="number"&&ar(e,""+m):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(d.hasOwnProperty(l)?m!=null&&l==="onScroll"&&me("scroll",e):m!=null&&J(e,l,m,c))}switch(t){case"input":Yr(e),Ul(e,r,!1);break;case"textarea":Yr(e),$l(e);break;case"option":r.value!=null&&e.setAttribute("value",""+de(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?zt(e,!!r.multiple,l,!1):r.defaultValue!=null&&zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ko)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return qe(n),null;case 6:if(e&&n.stateNode!=null)ic(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=vt(Dr.current),vt(Rn.current),Co(n)){if(r=n.stateNode,t=n.memoizedProps,r[zn]=n,(l=r.nodeValue!==t)&&(e=rn,e!==null))switch(e.tag){case 3:xo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xo(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[zn]=n,n.stateNode=r}return qe(n),null;case 13:if(ge(we),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&on!==null&&n.mode&1&&!(n.flags&128))su(),Vt(),n.flags|=98560,l=!1;else if(l=Co(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[zn]=n}else Vt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;qe(n),l=!1}else bn!==null&&(il(bn),bn=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||we.current&1?Re===0&&(Re=3):sl())),n.updateQueue!==null&&(n.flags|=4),qe(n),null);case 4:return Kt(),Xa(e,n),e===null&&Or(n.stateNode.containerInfo),qe(n),null;case 10:return wa(n.type._context),qe(n),null;case 17:return Xe(n.type)&&So(),qe(n),null;case 19:if(ge(we),l=n.memoizedState,l===null)return qe(n),null;if(r=(n.flags&128)!==0,c=l.rendering,c===null)if(r)jr(l,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(c=Ao(e),c!==null){for(n.flags|=128,jr(l,!1),r=c.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return he(we,we.current&1|2),n.child}e=e.sibling}l.tail!==null&&Oe()>Zt&&(n.flags|=128,r=!0,jr(l,!1),n.lanes=4194304)}else{if(!r)if(e=Ao(c),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),jr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!ve)return qe(n),null}else 2*Oe()-l.renderingStartTime>Zt&&t!==1073741824&&(n.flags|=128,r=!0,jr(l,!1),n.lanes=4194304);l.isBackwards?(c.sibling=n.child,n.child=c):(t=l.last,t!==null?t.sibling=c:n.child=c,l.last=c)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Oe(),n.sibling=null,t=we.current,he(we,r?t&1|2:t&1),n):(qe(n),null);case 22:case 23:return ll(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?an&1073741824&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function mp(e,n){switch(ga(n),n.tag){case 1:return Xe(n.type)&&So(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Kt(),ge(Qe),ge(je),Ta(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return _a(n),null;case 13:if(ge(we),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Vt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ge(we),null;case 4:return Kt(),null;case 10:return wa(n.type._context),null;case 22:case 23:return ll(),null;case 24:return null;default:return null}}var Ho=!1,Ue=!1,gp=typeof WeakSet=="function"?WeakSet:Set,j=null;function Jt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ee(e,n,r)}else t.current=null}function Ka(e,n,t){try{t()}catch(r){Ee(e,n,r)}}var ac=!1;function yp(e,n){if(la=so,e=js(),Zi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var c=0,p=-1,m=-1,k=0,N=0,D=e,T=null;n:for(;;){for(var F;D!==t||i!==0&&D.nodeType!==3||(p=c+i),D!==l||r!==0&&D.nodeType!==3||(m=c+r),D.nodeType===3&&(c+=D.nodeValue.length),(F=D.firstChild)!==null;)T=D,D=F;for(;;){if(D===e)break n;if(T===t&&++k===i&&(p=c),T===l&&++N===r&&(m=c),(F=D.nextSibling)!==null)break;D=T,T=D.parentNode}D=F}t=p===-1||m===-1?null:{start:p,end:m}}else t=null}t=t||{start:0,end:0}}else t=null;for(sa={focusedElem:e,selectionRange:t},so=!1,j=n;j!==null;)if(n=j,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,j=e;else for(;j!==null;){n=j;try{var q=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var U=q.memoizedProps,_e=q.memoizedState,v=n.stateNode,g=v.getSnapshotBeforeUpdate(n.elementType===n.type?U:xn(n.type,U),_e);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=n.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(A){Ee(n,n.return,A)}if(e=n.sibling,e!==null){e.return=n.return,j=e;break}j=n.return}return q=ac,ac=!1,q}function Ir(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Ka(n,t,l)}i=i.next}while(i!==r)}}function $o(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ya(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function lc(e){var n=e.alternate;n!==null&&(e.alternate=null,lc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[zn],delete n[Cr],delete n[fa],delete n[Zf],delete n[ep])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sc(e){return e.tag===5||e.tag===3||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ja(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ko));else if(r!==4&&(e=e.child,e!==null))for(Ja(e,n,t),e=e.sibling;e!==null;)Ja(e,n,t),e=e.sibling}function Ga(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ga(e,n,t),e=e.sibling;e!==null;)Ga(e,n,t),e=e.sibling}var Me=null,kn=!1;function rt(e,n,t){for(t=t.child;t!==null;)cc(e,n,t),t=t.sibling}function cc(e,n,t){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(to,t)}catch{}switch(t.tag){case 5:Ue||Jt(t,n);case 6:var r=Me,i=kn;Me=null,rt(e,n,t),Me=r,kn=i,Me!==null&&(kn?(e=Me,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Me.removeChild(t.stateNode));break;case 18:Me!==null&&(kn?(e=Me,t=t.stateNode,e.nodeType===8?da(e.parentNode,t):e.nodeType===1&&da(e,t),yr(e)):da(Me,t.stateNode));break;case 4:r=Me,i=kn,Me=t.stateNode.containerInfo,kn=!0,rt(e,n,t),Me=r,kn=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,c=l.destroy;l=l.tag,c!==void 0&&(l&2||l&4)&&Ka(t,n,c),i=i.next}while(i!==r)}rt(e,n,t);break;case 1:if(!Ue&&(Jt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(p){Ee(t,n,p)}rt(e,n,t);break;case 21:rt(e,n,t);break;case 22:t.mode&1?(Ue=(r=Ue)||t.memoizedState!==null,rt(e,n,t),Ue=r):rt(e,n,t);break;default:rt(e,n,t)}}function dc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new gp),n.forEach(function(r){var i=Op.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function wn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,c=n,p=c;e:for(;p!==null;){switch(p.tag){case 5:Me=p.stateNode,kn=!1;break e;case 3:Me=p.stateNode.containerInfo,kn=!0;break e;case 4:Me=p.stateNode.containerInfo,kn=!0;break e}p=p.return}if(Me===null)throw Error(s(160));cc(l,c,i),Me=null,kn=!1;var m=i.alternate;m!==null&&(m.return=null),i.return=null}catch(k){Ee(i,n,k)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)fc(n,e),n=n.sibling}function fc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wn(n,e),Dn(e),r&4){try{Ir(3,e,e.return),$o(3,e)}catch(U){Ee(e,e.return,U)}try{Ir(5,e,e.return)}catch(U){Ee(e,e.return,U)}}break;case 1:wn(n,e),Dn(e),r&512&&t!==null&&Jt(t,t.return);break;case 5:if(wn(n,e),Dn(e),r&512&&t!==null&&Jt(t,t.return),e.flags&32){var i=e.stateNode;try{ar(i,"")}catch(U){Ee(e,e.return,U)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,c=t!==null?t.memoizedProps:l,p=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{p==="input"&&l.type==="radio"&&l.name!=null&&ql(i,l),Ti(p,c);var k=Ti(p,l);for(c=0;c<m.length;c+=2){var N=m[c],D=m[c+1];N==="style"?Xl(i,D):N==="dangerouslySetInnerHTML"?Wl(i,D):N==="children"?ar(i,D):J(i,N,D,k)}switch(p){case"input":Pi(i,l);break;case"textarea":Hl(i,l);break;case"select":var T=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var F=l.value;F!=null?zt(i,!!l.multiple,F,!1):T!==!!l.multiple&&(l.defaultValue!=null?zt(i,!!l.multiple,l.defaultValue,!0):zt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Cr]=l}catch(U){Ee(e,e.return,U)}}break;case 6:if(wn(n,e),Dn(e),r&4){if(e.stateNode===null)throw Error(s(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(U){Ee(e,e.return,U)}}break;case 3:if(wn(n,e),Dn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(U){Ee(e,e.return,U)}break;case 4:wn(n,e),Dn(e);break;case 13:wn(n,e),Dn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(nl=Oe())),r&4&&dc(e);break;case 22:if(N=t!==null&&t.memoizedState!==null,e.mode&1?(Ue=(k=Ue)||N,wn(n,e),Ue=k):wn(n,e),Dn(e),r&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!N&&e.mode&1)for(j=e,N=e.child;N!==null;){for(D=j=N;j!==null;){switch(T=j,F=T.child,T.tag){case 0:case 11:case 14:case 15:Ir(4,T,T.return);break;case 1:Jt(T,T.return);var q=T.stateNode;if(typeof q.componentWillUnmount=="function"){r=T,t=T.return;try{n=r,q.props=n.memoizedProps,q.state=n.memoizedState,q.componentWillUnmount()}catch(U){Ee(r,t,U)}}break;case 5:Jt(T,T.return);break;case 22:if(T.memoizedState!==null){mc(D);continue}}F!==null?(F.return=T,j=F):mc(D)}N=N.sibling}e:for(N=null,D=e;;){if(D.tag===5){if(N===null){N=D;try{i=D.stateNode,k?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(p=D.stateNode,m=D.memoizedProps.style,c=m!=null&&m.hasOwnProperty("display")?m.display:null,p.style.display=Ql("display",c))}catch(U){Ee(e,e.return,U)}}}else if(D.tag===6){if(N===null)try{D.stateNode.nodeValue=k?"":D.memoizedProps}catch(U){Ee(e,e.return,U)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;N===D&&(N=null),D=D.return}N===D&&(N=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:wn(n,e),Dn(e),r&4&&dc(e);break;case 21:break;default:wn(n,e),Dn(e)}}function Dn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(sc(t)){var r=t;break e}t=t.return}throw Error(s(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ar(i,""),r.flags&=-33);var l=uc(e);Ga(e,l,i);break;case 3:case 4:var c=r.stateNode.containerInfo,p=uc(e);Ja(e,p,c);break;default:throw Error(s(161))}}catch(m){Ee(e,e.return,m)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vp(e,n,t){j=e,pc(e)}function pc(e,n,t){for(var r=(e.mode&1)!==0;j!==null;){var i=j,l=i.child;if(i.tag===22&&r){var c=i.memoizedState!==null||Ho;if(!c){var p=i.alternate,m=p!==null&&p.memoizedState!==null||Ue;p=Ho;var k=Ue;if(Ho=c,(Ue=m)&&!k)for(j=i;j!==null;)c=j,m=c.child,c.tag===22&&c.memoizedState!==null?gc(i):m!==null?(m.return=c,j=m):gc(i);for(;l!==null;)j=l,pc(l),l=l.sibling;j=i,Ho=p,Ue=k}hc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,j=l):hc(e)}}function hc(e){for(;j!==null;){var n=j;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ue||$o(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ue)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:xn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&mu(n,l,r);break;case 3:var c=n.updateQueue;if(c!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}mu(n,c,t)}break;case 5:var p=n.stateNode;if(t===null&&n.flags&4){t=p;var m=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&t.focus();break;case"img":m.src&&(t.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var k=n.alternate;if(k!==null){var N=k.memoizedState;if(N!==null){var D=N.dehydrated;D!==null&&yr(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ue||n.flags&512&&Ya(n)}catch(T){Ee(n,n.return,T)}}if(n===e){j=null;break}if(t=n.sibling,t!==null){t.return=n.return,j=t;break}j=n.return}}function mc(e){for(;j!==null;){var n=j;if(n===e){j=null;break}var t=n.sibling;if(t!==null){t.return=n.return,j=t;break}j=n.return}}function gc(e){for(;j!==null;){var n=j;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{$o(4,n)}catch(m){Ee(n,t,m)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(m){Ee(n,i,m)}}var l=n.return;try{Ya(n)}catch(m){Ee(n,l,m)}break;case 5:var c=n.return;try{Ya(n)}catch(m){Ee(n,c,m)}}}catch(m){Ee(n,n.return,m)}if(n===e){j=null;break}var p=n.sibling;if(p!==null){p.return=n.return,j=p;break}j=n.return}}var bp=Math.ceil,Vo=oe.ReactCurrentDispatcher,Za=oe.ReactCurrentOwner,pn=oe.ReactCurrentBatchConfig,ie=0,Ae=null,Ce=null,Fe=0,an=0,Gt=Gn(0),Re=0,qr=null,xt=0,Wo=0,el=0,Ur=null,Ye=null,nl=0,Zt=1/0,Hn=null,Qo=!1,tl=null,ot=null,Xo=!1,it=null,Ko=0,Br=0,rl=null,Yo=-1,Jo=0;function $e(){return ie&6?Oe():Yo!==-1?Yo:Yo=Oe()}function at(e){return e.mode&1?ie&2&&Fe!==0?Fe&-Fe:tp.transition!==null?(Jo===0&&(Jo=us()),Jo):(e=fe,e!==0||(e=window.event,e=e===void 0?16:vs(e.type)),e):1}function Sn(e,n,t,r){if(50<Br)throw Br=0,rl=null,Error(s(185));fr(e,t,r),(!(ie&2)||e!==Ae)&&(e===Ae&&(!(ie&2)&&(Wo|=t),Re===4&&lt(e,Fe)),Je(e,r),t===1&&ie===0&&!(n.mode&1)&&(Zt=Oe()+500,Eo&&et()))}function Je(e,n){var t=e.callbackNode;nf(e,n);var r=io(e,e===Ae?Fe:0);if(r===0)t!==null&&as(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&as(t),n===1)e.tag===0?np(vc.bind(null,e)):ru(vc.bind(null,e)),Jf(function(){!(ie&6)&&et()}),t=null;else{switch(cs(r)){case 1:t=Mi;break;case 4:t=ls;break;case 16:t=no;break;case 536870912:t=ss;break;default:t=no}t=Oc(t,yc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function yc(e,n){if(Yo=-1,Jo=0,ie&6)throw Error(s(327));var t=e.callbackNode;if(er()&&e.callbackNode!==t)return null;var r=io(e,e===Ae?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Go(e,r);else{n=r;var i=ie;ie|=2;var l=xc();(Ae!==e||Fe!==n)&&(Hn=null,Zt=Oe()+500,wt(e,n));do try{wp();break}catch(p){bc(e,p)}while(!0);ka(),Vo.current=l,ie=i,Ce!==null?n=0:(Ae=null,Fe=0,n=Re)}if(n!==0){if(n===2&&(i=Fi(e),i!==0&&(r=i,n=ol(e,i))),n===1)throw t=qr,wt(e,0),lt(e,r),Je(e,Oe()),t;if(n===6)lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!xp(i)&&(n=Go(e,r),n===2&&(l=Fi(e),l!==0&&(r=l,n=ol(e,l))),n===1))throw t=qr,wt(e,0),lt(e,r),Je(e,Oe()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(s(345));case 2:St(e,Ye,Hn);break;case 3:if(lt(e,r),(r&130023424)===r&&(n=nl+500-Oe(),10<n)){if(io(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ca(St.bind(null,e,Ye,Hn),n);break}St(e,Ye,Hn);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var c=31-yn(r);l=1<<c,c=n[c],c>i&&(i=c),r&=~l}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bp(r/1960))-r,10<r){e.timeoutHandle=ca(St.bind(null,e,Ye,Hn),r);break}St(e,Ye,Hn);break;case 5:St(e,Ye,Hn);break;default:throw Error(s(329))}}}return Je(e,Oe()),e.callbackNode===t?yc.bind(null,e):null}function ol(e,n){var t=Ur;return e.current.memoizedState.isDehydrated&&(wt(e,n).flags|=256),e=Go(e,n),e!==2&&(n=Ye,Ye=t,n!==null&&il(n)),e}function il(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function xp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!vn(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function lt(e,n){for(n&=~el,n&=~Wo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-yn(n),r=1<<t;e[t]=-1,n&=~r}}function vc(e){if(ie&6)throw Error(s(327));er();var n=io(e,0);if(!(n&1))return Je(e,Oe()),null;var t=Go(e,n);if(e.tag!==0&&t===2){var r=Fi(e);r!==0&&(n=r,t=ol(e,r))}if(t===1)throw t=qr,wt(e,0),lt(e,n),Je(e,Oe()),t;if(t===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,St(e,Ye,Hn),Je(e,Oe()),null}function al(e,n){var t=ie;ie|=1;try{return e(n)}finally{ie=t,ie===0&&(Zt=Oe()+500,Eo&&et())}}function kt(e){it!==null&&it.tag===0&&!(ie&6)&&er();var n=ie;ie|=1;var t=pn.transition,r=fe;try{if(pn.transition=null,fe=1,e)return e()}finally{fe=r,pn.transition=t,ie=n,!(ie&6)&&et()}}function ll(){an=Gt.current,ge(Gt)}function wt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Yf(t)),Ce!==null)for(t=Ce.return;t!==null;){var r=t;switch(ga(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&So();break;case 3:Kt(),ge(Qe),ge(je),Ta();break;case 5:_a(r);break;case 4:Kt();break;case 13:ge(we);break;case 19:ge(we);break;case 10:wa(r.type._context);break;case 22:case 23:ll()}t=t.return}if(Ae=e,Ce=e=st(e.current,null),Fe=an=n,Re=0,qr=null,el=Wo=xt=0,Ye=Ur=null,yt!==null){for(n=0;n<yt.length;n++)if(t=yt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var c=l.next;l.next=i,r.next=c}t.pending=r}yt=null}return e}function bc(e,n){do{var t=Ce;try{if(ka(),Lo.current=Io,Mo){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mo=!1}if(bt=0,De=ze=Se=null,Ar=!1,Lr=0,Za.current=null,t===null||t.return===null){Re=1,qr=n,Ce=null;break}e:{var l=e,c=t.return,p=t,m=n;if(n=Fe,p.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var k=m,N=p,D=N.tag;if(!(N.mode&1)&&(D===0||D===11||D===15)){var T=N.alternate;T?(N.updateQueue=T.updateQueue,N.memoizedState=T.memoizedState,N.lanes=T.lanes):(N.updateQueue=null,N.memoizedState=null)}var F=$u(c);if(F!==null){F.flags&=-257,Vu(F,c,p,l,n),F.mode&1&&Hu(l,k,n),n=F,m=k;var q=n.updateQueue;if(q===null){var U=new Set;U.add(m),n.updateQueue=U}else q.add(m);break e}else{if(!(n&1)){Hu(l,k,n),sl();break e}m=Error(s(426))}}else if(ve&&p.mode&1){var _e=$u(c);if(_e!==null){!(_e.flags&65536)&&(_e.flags|=256),Vu(_e,c,p,l,n),ba(Yt(m,p));break e}}l=m=Yt(m,p),Re!==4&&(Re=2),Ur===null?Ur=[l]:Ur.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var v=Uu(l,m,n);hu(l,v);break e;case 1:p=m;var g=l.type,b=l.stateNode;if(!(l.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ot===null||!ot.has(b)))){l.flags|=65536,n&=-n,l.lanes|=n;var A=Bu(l,p,n);hu(l,A);break e}}l=l.return}while(l!==null)}wc(t)}catch(B){n=B,Ce===t&&t!==null&&(Ce=t=t.return);continue}break}while(!0)}function xc(){var e=Vo.current;return Vo.current=Io,e===null?Io:e}function sl(){(Re===0||Re===3||Re===2)&&(Re=4),Ae===null||!(xt&268435455)&&!(Wo&268435455)||lt(Ae,Fe)}function Go(e,n){var t=ie;ie|=2;var r=xc();(Ae!==e||Fe!==n)&&(Hn=null,wt(e,n));do try{kp();break}catch(i){bc(e,i)}while(!0);if(ka(),ie=t,Vo.current=r,Ce!==null)throw Error(s(261));return Ae=null,Fe=0,Re}function kp(){for(;Ce!==null;)kc(Ce)}function wp(){for(;Ce!==null&&!Wd();)kc(Ce)}function kc(e){var n=Ec(e.alternate,e,an);e.memoizedProps=e.pendingProps,n===null?wc(e):Ce=n,Za.current=null}function wc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=mp(t,n),t!==null){t.flags&=32767,Ce=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Ce=null;return}}else if(t=hp(t,n,an),t!==null){Ce=t;return}if(n=n.sibling,n!==null){Ce=n;return}Ce=n=e}while(n!==null);Re===0&&(Re=5)}function St(e,n,t){var r=fe,i=pn.transition;try{pn.transition=null,fe=1,Sp(e,n,t,r)}finally{pn.transition=i,fe=r}return null}function Sp(e,n,t,r){do er();while(it!==null);if(ie&6)throw Error(s(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(tf(e,l),e===Ae&&(Ce=Ae=null,Fe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Xo||(Xo=!0,Oc(no,function(){return er(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=pn.transition,pn.transition=null;var c=fe;fe=1;var p=ie;ie|=4,Za.current=null,yp(e,t),fc(t,e),Hf(sa),so=!!la,sa=la=null,e.current=t,vp(t),Qd(),ie=p,fe=c,pn.transition=l}else e.current=t;if(Xo&&(Xo=!1,it=e,Ko=i),l=e.pendingLanes,l===0&&(ot=null),Yd(t.stateNode),Je(e,Oe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qo)throw Qo=!1,e=tl,tl=null,e;return Ko&1&&e.tag!==0&&er(),l=e.pendingLanes,l&1?e===rl?Br++:(Br=0,rl=e):Br=0,et(),null}function er(){if(it!==null){var e=cs(Ko),n=pn.transition,t=fe;try{if(pn.transition=null,fe=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,Ko=0,ie&6)throw Error(s(331));var i=ie;for(ie|=4,j=e.current;j!==null;){var l=j,c=l.child;if(j.flags&16){var p=l.deletions;if(p!==null){for(var m=0;m<p.length;m++){var k=p[m];for(j=k;j!==null;){var N=j;switch(N.tag){case 0:case 11:case 15:Ir(8,N,l)}var D=N.child;if(D!==null)D.return=N,j=D;else for(;j!==null;){N=j;var T=N.sibling,F=N.return;if(lc(N),N===k){j=null;break}if(T!==null){T.return=F,j=T;break}j=F}}}var q=l.alternate;if(q!==null){var U=q.child;if(U!==null){q.child=null;do{var _e=U.sibling;U.sibling=null,U=_e}while(U!==null)}}j=l}}if(l.subtreeFlags&2064&&c!==null)c.return=l,j=c;else e:for(;j!==null;){if(l=j,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Ir(9,l,l.return)}var v=l.sibling;if(v!==null){v.return=l.return,j=v;break e}j=l.return}}var g=e.current;for(j=g;j!==null;){c=j;var b=c.child;if(c.subtreeFlags&2064&&b!==null)b.return=c,j=b;else e:for(c=g;j!==null;){if(p=j,p.flags&2048)try{switch(p.tag){case 0:case 11:case 15:$o(9,p)}}catch(B){Ee(p,p.return,B)}if(p===c){j=null;break e}var A=p.sibling;if(A!==null){A.return=p.return,j=A;break e}j=p.return}}if(ie=i,et(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(to,e)}catch{}r=!0}return r}finally{fe=t,pn.transition=n}}return!1}function Sc(e,n,t){n=Yt(t,n),n=Uu(e,n,1),e=tt(e,n,1),n=$e(),e!==null&&(fr(e,1,n),Je(e,n))}function Ee(e,n,t){if(e.tag===3)Sc(e,e,t);else for(;n!==null;){if(n.tag===3){Sc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ot===null||!ot.has(r))){e=Yt(t,e),e=Bu(n,e,1),n=tt(n,e,1),e=$e(),n!==null&&(fr(n,1,e),Je(n,e));break}}n=n.return}}function Pp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=$e(),e.pingedLanes|=e.suspendedLanes&t,Ae===e&&(Fe&t)===t&&(Re===4||Re===3&&(Fe&130023424)===Fe&&500>Oe()-nl?wt(e,0):el|=t),Je(e,n)}function Pc(e,n){n===0&&(e.mode&1?(n=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):n=1);var t=$e();e=qn(e,n),e!==null&&(fr(e,n,t),Je(e,t))}function Ep(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Pc(e,t)}function Op(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(n),Pc(e,t)}var Ec;Ec=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Qe.current)Ke=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ke=!1,pp(e,n,t);Ke=!!(e.flags&131072)}else Ke=!1,ve&&n.flags&1048576&&ou(n,_o,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Bo(e,n),e=n.pendingProps;var i=Bt(n,je.current);Xt(n,t),i=Na(null,n,r,e,i,t);var l=Da();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Xe(r)?(l=!0,Po(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ea(n),i.updater=qo,n.stateNode=i,i._reactInternals=n,Ia(n,r,e,t),n=Ha(null,n,r,!0,l,t)):(n.tag=0,ve&&l&&ma(n),He(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Bo(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Cp(r),e=xn(r,e),i){case 0:n=Ba(null,n,r,e,t);break e;case 1:n=Ju(null,n,r,e,t);break e;case 11:n=Wu(null,n,r,e,t);break e;case 14:n=Qu(null,n,r,xn(r.type,e),t);break e}throw Error(s(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:xn(r,i),Ba(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:xn(r,i),Ju(e,n,r,i,t);case 3:e:{if(Gu(n),e===null)throw Error(s(387));r=n.pendingProps,l=n.memoizedState,i=l.element,pu(e,n),Do(n,r,null,t);var c=n.memoizedState;if(r=c.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Yt(Error(s(423)),n),n=Zu(e,n,r,t,i);break e}else if(r!==i){i=Yt(Error(s(424)),n),n=Zu(e,n,r,t,i);break e}else for(on=Jn(n.stateNode.containerInfo.firstChild),rn=n,ve=!0,bn=null,t=du(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Vt(),r===i){n=Bn(e,n,t);break e}He(e,n,r,t)}n=n.child}return n;case 5:return gu(n),e===null&&va(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,c=i.children,ua(r,i)?c=null:l!==null&&ua(r,l)&&(n.flags|=32),Yu(e,n),He(e,n,c,t),n.child;case 6:return e===null&&va(n),null;case 13:return ec(e,n,t);case 4:return Oa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Wt(n,null,r,t):He(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:xn(r,i),Wu(e,n,r,i,t);case 7:return He(e,n,n.pendingProps,t),n.child;case 8:return He(e,n,n.pendingProps.children,t),n.child;case 12:return He(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,c=i.value,he(zo,r._currentValue),r._currentValue=c,l!==null)if(vn(l.value,c)){if(l.children===i.children&&!Qe.current){n=Bn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var p=l.dependencies;if(p!==null){c=l.child;for(var m=p.firstContext;m!==null;){if(m.context===r){if(l.tag===1){m=Un(-1,t&-t),m.tag=2;var k=l.updateQueue;if(k!==null){k=k.shared;var N=k.pending;N===null?m.next=m:(m.next=N.next,N.next=m),k.pending=m}}l.lanes|=t,m=l.alternate,m!==null&&(m.lanes|=t),Sa(l.return,t,n),p.lanes|=t;break}m=m.next}}else if(l.tag===10)c=l.type===n.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=t,p=c.alternate,p!==null&&(p.lanes|=t),Sa(c,t,n),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===n){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}He(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Xt(n,t),i=dn(i),r=r(i),n.flags|=1,He(e,n,r,t),n.child;case 14:return r=n.type,i=xn(r,n.pendingProps),i=xn(r.type,i),Qu(e,n,r,i,t);case 15:return Xu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:xn(r,i),Bo(e,n),n.tag=1,Xe(r)?(e=!0,Po(n)):e=!1,Xt(n,t),Iu(n,r,i),Ia(n,r,i,t),Ha(null,n,r,!0,e,t);case 19:return tc(e,n,t);case 22:return Ku(e,n,t)}throw Error(s(156,n.tag))};function Oc(e,n){return is(e,n)}function _p(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,n,t,r){return new _p(e,n,t,r)}function ul(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cp(e){if(typeof e=="function")return ul(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_n)return 11;if(e===Cn)return 14}return 2}function st(e,n){var t=e.alternate;return t===null?(t=hn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Zo(e,n,t,r,i,l){var c=2;if(r=e,typeof e=="function")ul(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case ce:return Pt(t.children,i,l,n);case xe:c=8,i|=8;break;case ke:return e=hn(12,t,n,i|2),e.elementType=ke,e.lanes=l,e;case en:return e=hn(13,t,n,i),e.elementType=en,e.lanes=l,e;case gn:return e=hn(19,t,n,i),e.elementType=gn,e.lanes=l,e;case Pe:return ei(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ln:c=10;break e;case dt:c=9;break e;case _n:c=11;break e;case Cn:c=14;break e;case We:c=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return n=hn(c,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Pt(e,n,t,r){return e=hn(7,e,r,n),e.lanes=t,e}function ei(e,n,t,r){return e=hn(22,e,r,n),e.elementType=Pe,e.lanes=t,e.stateNode={isHidden:!1},e}function cl(e,n,t){return e=hn(6,e,null,n),e.lanes=t,e}function dl(e,n,t){return n=hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Tp(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ji(0),this.expirationTimes=ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fl(e,n,t,r,i,l,c,p,m){return e=new Tp(e,n,t,p,m),n===1?(n=1,l===!0&&(n|=8)):n=0,l=hn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ea(l),e}function zp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ae,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function _c(e){if(!e)return Zn;e=e._reactInternals;e:{if(ft(e)!==e||e.tag!==1)throw Error(s(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(e.tag===1){var t=e.type;if(Xe(t))return nu(e,t,n)}return n}function Cc(e,n,t,r,i,l,c,p,m){return e=fl(t,r,!0,e,i,l,c,p,m),e.context=_c(null),t=e.current,r=$e(),i=at(t),l=Un(r,i),l.callback=n??null,tt(t,l,i),e.current.lanes=i,fr(e,i,r),Je(e,r),e}function ni(e,n,t,r){var i=n.current,l=$e(),c=at(i);return t=_c(t),n.context===null?n.context=t:n.pendingContext=t,n=Un(l,c),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=tt(i,n,c),e!==null&&(Sn(e,i,c,l),No(e,i,c)),c}function ti(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function pl(e,n){Tc(e,n),(e=e.alternate)&&Tc(e,n)}var zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function hl(e){this._internalRoot=e}ri.prototype.render=hl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));ni(e,n,null,null)},ri.prototype.unmount=hl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;kt(function(){ni(null,e,null,null)}),n[Mn]=null}};function ri(e){this._internalRoot=e}ri.prototype.unstable_scheduleHydration=function(e){if(e){var n=ps();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Xn.length&&n!==0&&n<Xn[t].priority;t++);Xn.splice(t,0,e),t===0&&gs(e)}};function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rc(){}function Rp(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var k=ti(c);l.call(k)}}var c=Cc(n,r,e,0,null,!1,!1,"",Rc);return e._reactRootContainer=c,e[Mn]=c.current,Or(e.nodeType===8?e.parentNode:e),kt(),c}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var p=r;r=function(){var k=ti(m);p.call(k)}}var m=fl(e,0,!1,null,null,!1,!1,"",Rc);return e._reactRootContainer=m,e[Mn]=m.current,Or(e.nodeType===8?e.parentNode:e),kt(function(){ni(n,m,t,r)}),m}function ii(e,n,t,r,i){var l=t._reactRootContainer;if(l){var c=l;if(typeof i=="function"){var p=i;i=function(){var m=ti(c);p.call(m)}}ni(n,c,e,i)}else c=Rp(t,n,e,i,r);return ti(c)}ds=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=dr(n.pendingLanes);t!==0&&(Ii(n,t|1),Je(n,Oe()),!(ie&6)&&(Zt=Oe()+500,et()))}break;case 13:kt(function(){var r=qn(e,1);if(r!==null){var i=$e();Sn(r,e,1,i)}}),pl(e,1)}},qi=function(e){if(e.tag===13){var n=qn(e,134217728);if(n!==null){var t=$e();Sn(n,e,134217728,t)}pl(e,134217728)}},fs=function(e){if(e.tag===13){var n=at(e),t=qn(e,n);if(t!==null){var r=$e();Sn(t,e,n,r)}pl(e,n)}},ps=function(){return fe},hs=function(e,n){var t=fe;try{return fe=e,n()}finally{fe=t}},Ni=function(e,n,t){switch(n){case"input":if(Pi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=wo(r);if(!i)throw Error(s(90));jl(r),Pi(r,i)}}}break;case"textarea":Hl(e,t);break;case"select":n=t.value,n!=null&&zt(e,!!t.multiple,n,!1)}},Gl=al,Zl=kt;var Np={usingClientEntryPoint:!1,Events:[Tr,qt,wo,Yl,Jl,al]},Hr={findFiberByHostInstance:pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dp={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rs(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{to=ai.inject(Dp),Tn=ai}catch{}}return Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Np,Ge.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ml(n))throw Error(s(200));return zp(e,n,null,t)},Ge.createRoot=function(e,n){if(!ml(e))throw Error(s(299));var t=!1,r="",i=zc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=fl(e,1,!1,null,null,t,!1,r,i),e[Mn]=n.current,Or(e.nodeType===8?e.parentNode:e),new hl(n)},Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=rs(n),e=e===null?null:e.stateNode,e},Ge.flushSync=function(e){return kt(e)},Ge.hydrate=function(e,n,t){if(!oi(n))throw Error(s(200));return ii(null,e,n,!0,t)},Ge.hydrateRoot=function(e,n,t){if(!ml(e))throw Error(s(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",c=zc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),n=Cc(n,null,e,1,t??null,i,!1,l,c),e[Mn]=n.current,Or(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new ri(n)},Ge.render=function(e,n,t){if(!oi(n))throw Error(s(200));return ii(null,e,n,!1,t)},Ge.unmountComponentAtNode=function(e){if(!oi(e))throw Error(s(40));return e._reactRootContainer?(kt(function(){ii(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1},Ge.unstable_batchedUpdates=al,Ge.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!oi(t))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return ii(e,n,t,!1,r)},Ge.version="18.3.1-next-f1338f8080-20240426",Ge}var Ic;function Bp(){if(Ic)return vl.exports;Ic=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),vl.exports=Up(),vl.exports}var qc;function Hp(){if(qc)return li;qc=1;var o=Bp();return li.createRoot=o.createRoot,li.hydrateRoot=o.hydrateRoot,li}var $p=Hp();function ld(o,a){return function(){return o.apply(a,arguments)}}const{toString:Vp}=Object.prototype,{getPrototypeOf:Al}=Object,gi=(o=>a=>{const s=Vp.call(a);return o[s]||(o[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),On=o=>(o=o.toLowerCase(),a=>gi(a)===o),yi=o=>a=>typeof a===o,{isArray:rr}=Array,Qr=yi("undefined");function Wp(o){return o!==null&&!Qr(o)&&o.constructor!==null&&!Qr(o.constructor)&&sn(o.constructor.isBuffer)&&o.constructor.isBuffer(o)}const sd=On("ArrayBuffer");function Qp(o){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(o):a=o&&o.buffer&&sd(o.buffer),a}const Xp=yi("string"),sn=yi("function"),ud=yi("number"),vi=o=>o!==null&&typeof o=="object",Kp=o=>o===!0||o===!1,ci=o=>{if(gi(o)!=="object")return!1;const a=Al(o);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in o)&&!(Symbol.iterator in o)},Yp=On("Date"),Jp=On("File"),Gp=On("Blob"),Zp=On("FileList"),eh=o=>vi(o)&&sn(o.pipe),nh=o=>{let a;return o&&(typeof FormData=="function"&&o instanceof FormData||sn(o.append)&&((a=gi(o))==="formdata"||a==="object"&&sn(o.toString)&&o.toString()==="[object FormData]"))},th=On("URLSearchParams"),[rh,oh,ih,ah]=["ReadableStream","Request","Response","Headers"].map(On),lh=o=>o.trim?o.trim():o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Xr(o,a,{allOwnKeys:s=!1}={}){if(o===null||typeof o>"u")return;let u,d;if(typeof o!="object"&&(o=[o]),rr(o))for(u=0,d=o.length;u<d;u++)a.call(null,o[u],u,o);else{const f=s?Object.getOwnPropertyNames(o):Object.keys(o),h=f.length;let x;for(u=0;u<h;u++)x=f[u],a.call(null,o[x],x,o)}}function cd(o,a){a=a.toLowerCase();const s=Object.keys(o);let u=s.length,d;for(;u-- >0;)if(d=s[u],a===d.toLowerCase())return d;return null}const _t=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,dd=o=>!Qr(o)&&o!==_t;function Ol(){const{caseless:o}=dd(this)&&this||{},a={},s=(u,d)=>{const f=o&&cd(a,d)||d;ci(a[f])&&ci(u)?a[f]=Ol(a[f],u):ci(u)?a[f]=Ol({},u):rr(u)?a[f]=u.slice():a[f]=u};for(let u=0,d=arguments.length;u<d;u++)arguments[u]&&Xr(arguments[u],s);return a}const sh=(o,a,s,{allOwnKeys:u}={})=>(Xr(a,(d,f)=>{s&&sn(d)?o[f]=ld(d,s):o[f]=d},{allOwnKeys:u}),o),uh=o=>(o.charCodeAt(0)===65279&&(o=o.slice(1)),o),ch=(o,a,s,u)=>{o.prototype=Object.create(a.prototype,u),o.prototype.constructor=o,Object.defineProperty(o,"super",{value:a.prototype}),s&&Object.assign(o.prototype,s)},dh=(o,a,s,u)=>{let d,f,h;const x={};if(a=a||{},o==null)return a;do{for(d=Object.getOwnPropertyNames(o),f=d.length;f-- >0;)h=d[f],(!u||u(h,o,a))&&!x[h]&&(a[h]=o[h],x[h]=!0);o=s!==!1&&Al(o)}while(o&&(!s||s(o,a))&&o!==Object.prototype);return a},fh=(o,a,s)=>{o=String(o),(s===void 0||s>o.length)&&(s=o.length),s-=a.length;const u=o.indexOf(a,s);return u!==-1&&u===s},ph=o=>{if(!o)return null;if(rr(o))return o;let a=o.length;if(!ud(a))return null;const s=new Array(a);for(;a-- >0;)s[a]=o[a];return s},hh=(o=>a=>o&&a instanceof o)(typeof Uint8Array<"u"&&Al(Uint8Array)),mh=(o,a)=>{const u=(o&&o[Symbol.iterator]).call(o);let d;for(;(d=u.next())&&!d.done;){const f=d.value;a.call(o,f[0],f[1])}},gh=(o,a)=>{let s;const u=[];for(;(s=o.exec(a))!==null;)u.push(s);return u},yh=On("HTMLFormElement"),vh=o=>o.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,u,d){return u.toUpperCase()+d}),Uc=(({hasOwnProperty:o})=>(a,s)=>o.call(a,s))(Object.prototype),bh=On("RegExp"),fd=(o,a)=>{const s=Object.getOwnPropertyDescriptors(o),u={};Xr(s,(d,f)=>{let h;(h=a(d,f,o))!==!1&&(u[f]=h||d)}),Object.defineProperties(o,u)},xh=o=>{fd(o,(a,s)=>{if(sn(o)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const u=o[s];if(sn(u)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},kh=(o,a)=>{const s={},u=d=>{d.forEach(f=>{s[f]=!0})};return rr(o)?u(o):u(String(o).split(a)),s},wh=()=>{},Sh=(o,a)=>o!=null&&Number.isFinite(o=+o)?o:a,kl="abcdefghijklmnopqrstuvwxyz",Bc="0123456789",pd={DIGIT:Bc,ALPHA:kl,ALPHA_DIGIT:kl+kl.toUpperCase()+Bc},Ph=(o=16,a=pd.ALPHA_DIGIT)=>{let s="";const{length:u}=a;for(;o--;)s+=a[Math.random()*u|0];return s};function Eh(o){return!!(o&&sn(o.append)&&o[Symbol.toStringTag]==="FormData"&&o[Symbol.iterator])}const Oh=o=>{const a=new Array(10),s=(u,d)=>{if(vi(u)){if(a.indexOf(u)>=0)return;if(!("toJSON"in u)){a[d]=u;const f=rr(u)?[]:{};return Xr(u,(h,x)=>{const E=s(h,d+1);!Qr(E)&&(f[x]=E)}),a[d]=void 0,f}}return u};return s(o,0)},_h=On("AsyncFunction"),Ch=o=>o&&(vi(o)||sn(o))&&sn(o.then)&&sn(o.catch),hd=((o,a)=>o?setImmediate:a?((s,u)=>(_t.addEventListener("message",({source:d,data:f})=>{d===_t&&f===s&&u.length&&u.shift()()},!1),d=>{u.push(d),_t.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",sn(_t.postMessage)),Th=typeof queueMicrotask<"u"?queueMicrotask.bind(_t):typeof process<"u"&&process.nextTick||hd,P={isArray:rr,isArrayBuffer:sd,isBuffer:Wp,isFormData:nh,isArrayBufferView:Qp,isString:Xp,isNumber:ud,isBoolean:Kp,isObject:vi,isPlainObject:ci,isReadableStream:rh,isRequest:oh,isResponse:ih,isHeaders:ah,isUndefined:Qr,isDate:Yp,isFile:Jp,isBlob:Gp,isRegExp:bh,isFunction:sn,isStream:eh,isURLSearchParams:th,isTypedArray:hh,isFileList:Zp,forEach:Xr,merge:Ol,extend:sh,trim:lh,stripBOM:uh,inherits:ch,toFlatObject:dh,kindOf:gi,kindOfTest:On,endsWith:fh,toArray:ph,forEachEntry:mh,matchAll:gh,isHTMLForm:yh,hasOwnProperty:Uc,hasOwnProp:Uc,reduceDescriptors:fd,freezeMethods:xh,toObjectSet:kh,toCamelCase:vh,noop:wh,toFiniteNumber:Sh,findKey:cd,global:_t,isContextDefined:dd,ALPHABET:pd,generateString:Ph,isSpecCompliantForm:Eh,toJSONObject:Oh,isAsyncFn:_h,isThenable:Ch,setImmediate:hd,asap:Th};function Y(o,a,s,u,d){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=o,this.name="AxiosError",a&&(this.code=a),s&&(this.config=s),u&&(this.request=u),d&&(this.response=d,this.status=d.status?d.status:null)}P.inherits(Y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.status}}});const md=Y.prototype,gd={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(o=>{gd[o]={value:o}});Object.defineProperties(Y,gd);Object.defineProperty(md,"isAxiosError",{value:!0});Y.from=(o,a,s,u,d,f)=>{const h=Object.create(md);return P.toFlatObject(o,h,function(E){return E!==Error.prototype},x=>x!=="isAxiosError"),Y.call(h,o.message,a,s,u,d),h.cause=o,h.name=o.name,f&&Object.assign(h,f),h};const zh=null;function _l(o){return P.isPlainObject(o)||P.isArray(o)}function yd(o){return P.endsWith(o,"[]")?o.slice(0,-2):o}function Hc(o,a,s){return o?o.concat(a).map(function(d,f){return d=yd(d),!s&&f?"["+d+"]":d}).join(s?".":""):a}function Rh(o){return P.isArray(o)&&!o.some(_l)}const Nh=P.toFlatObject(P,{},null,function(a){return/^is[A-Z]/.test(a)});function bi(o,a,s){if(!P.isObject(o))throw new TypeError("target must be an object");a=a||new FormData,s=P.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,O){return!P.isUndefined(O[S])});const u=s.metaTokens,d=s.visitor||_,f=s.dots,h=s.indexes,E=(s.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(a);if(!P.isFunction(d))throw new TypeError("visitor must be a function");function w(z){if(z===null)return"";if(P.isDate(z))return z.toISOString();if(!E&&P.isBlob(z))throw new Y("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(z)||P.isTypedArray(z)?E&&typeof Blob=="function"?new Blob([z]):Buffer.from(z):z}function _(z,S,O){let K=z;if(z&&!O&&typeof z=="object"){if(P.endsWith(S,"{}"))S=u?S:S.slice(0,-2),z=JSON.stringify(z);else if(P.isArray(z)&&Rh(z)||(P.isFileList(z)||P.endsWith(S,"[]"))&&(K=P.toArray(z)))return S=yd(S),K.forEach(function(J,oe){!(P.isUndefined(J)||J===null)&&a.append(h===!0?Hc([S],oe,f):h===null?S:S+"[]",w(J))}),!1}return _l(z)?!0:(a.append(Hc(O,S,f),w(z)),!1)}const C=[],L=Object.assign(Nh,{defaultVisitor:_,convertValue:w,isVisitable:_l});function W(z,S){if(!P.isUndefined(z)){if(C.indexOf(z)!==-1)throw Error("Circular reference detected in "+S.join("."));C.push(z),P.forEach(z,function(K,ee){(!(P.isUndefined(K)||K===null)&&d.call(a,K,P.isString(ee)?ee.trim():ee,S,L))===!0&&W(K,S?S.concat(ee):[ee])}),C.pop()}}if(!P.isObject(o))throw new TypeError("data must be an object");return W(o),a}function $c(o){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(o).replace(/[!'()~]|%20|%00/g,function(u){return a[u]})}function Ll(o,a){this._pairs=[],o&&bi(o,this,a)}const vd=Ll.prototype;vd.append=function(a,s){this._pairs.push([a,s])};vd.toString=function(a){const s=a?function(u){return a.call(this,u,$c)}:$c;return this._pairs.map(function(d){return s(d[0])+"="+s(d[1])},"").join("&")};function Dh(o){return encodeURIComponent(o).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function bd(o,a,s){if(!a)return o;const u=s&&s.encode||Dh;P.isFunction(s)&&(s={serialize:s});const d=s&&s.serialize;let f;if(d?f=d(a,s):f=P.isURLSearchParams(a)?a.toString():new Ll(a,s).toString(u),f){const h=o.indexOf("#");h!==-1&&(o=o.slice(0,h)),o+=(o.indexOf("?")===-1?"?":"&")+f}return o}class Vc{constructor(){this.handlers=[]}use(a,s,u){return this.handlers.push({fulfilled:a,rejected:s,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){P.forEach(this.handlers,function(u){u!==null&&a(u)})}}const xd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ah=typeof URLSearchParams<"u"?URLSearchParams:Ll,Lh=typeof FormData<"u"?FormData:null,Mh=typeof Blob<"u"?Blob:null,Fh={isBrowser:!0,classes:{URLSearchParams:Ah,FormData:Lh,Blob:Mh},protocols:["http","https","file","blob","url","data"]},Ml=typeof window<"u"&&typeof document<"u",Cl=typeof navigator=="object"&&navigator||void 0,jh=Ml&&(!Cl||["ReactNative","NativeScript","NS"].indexOf(Cl.product)<0),Ih=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",qh=Ml&&window.location.href||"http://localhost",Uh=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ml,hasStandardBrowserEnv:jh,hasStandardBrowserWebWorkerEnv:Ih,navigator:Cl,origin:qh},Symbol.toStringTag,{value:"Module"})),Be={...Uh,...Fh};function Bh(o,a){return bi(o,new Be.classes.URLSearchParams,Object.assign({visitor:function(s,u,d,f){return Be.isNode&&P.isBuffer(s)?(this.append(u,s.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)}},a))}function Hh(o){return P.matchAll(/\w+|\[(\w*)]/g,o).map(a=>a[0]==="[]"?"":a[1]||a[0])}function $h(o){const a={},s=Object.keys(o);let u;const d=s.length;let f;for(u=0;u<d;u++)f=s[u],a[f]=o[f];return a}function kd(o){function a(s,u,d,f){let h=s[f++];if(h==="__proto__")return!0;const x=Number.isFinite(+h),E=f>=s.length;return h=!h&&P.isArray(d)?d.length:h,E?(P.hasOwnProp(d,h)?d[h]=[d[h],u]:d[h]=u,!x):((!d[h]||!P.isObject(d[h]))&&(d[h]=[]),a(s,u,d[h],f)&&P.isArray(d[h])&&(d[h]=$h(d[h])),!x)}if(P.isFormData(o)&&P.isFunction(o.entries)){const s={};return P.forEachEntry(o,(u,d)=>{a(Hh(u),d,s,0)}),s}return null}function Vh(o,a,s){if(P.isString(o))try{return(a||JSON.parse)(o),P.trim(o)}catch(u){if(u.name!=="SyntaxError")throw u}return(0,JSON.stringify)(o)}const Kr={transitional:xd,adapter:["xhr","http","fetch"],transformRequest:[function(a,s){const u=s.getContentType()||"",d=u.indexOf("application/json")>-1,f=P.isObject(a);if(f&&P.isHTMLForm(a)&&(a=new FormData(a)),P.isFormData(a))return d?JSON.stringify(kd(a)):a;if(P.isArrayBuffer(a)||P.isBuffer(a)||P.isStream(a)||P.isFile(a)||P.isBlob(a)||P.isReadableStream(a))return a;if(P.isArrayBufferView(a))return a.buffer;if(P.isURLSearchParams(a))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let x;if(f){if(u.indexOf("application/x-www-form-urlencoded")>-1)return Bh(a,this.formSerializer).toString();if((x=P.isFileList(a))||u.indexOf("multipart/form-data")>-1){const E=this.env&&this.env.FormData;return bi(x?{"files[]":a}:a,E&&new E,this.formSerializer)}}return f||d?(s.setContentType("application/json",!1),Vh(a)):a}],transformResponse:[function(a){const s=this.transitional||Kr.transitional,u=s&&s.forcedJSONParsing,d=this.responseType==="json";if(P.isResponse(a)||P.isReadableStream(a))return a;if(a&&P.isString(a)&&(u&&!this.responseType||d)){const h=!(s&&s.silentJSONParsing)&&d;try{return JSON.parse(a)}catch(x){if(h)throw x.name==="SyntaxError"?Y.from(x,Y.ERR_BAD_RESPONSE,this,null,this.response):x}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Be.classes.FormData,Blob:Be.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],o=>{Kr.headers[o]={}});const Wh=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qh=o=>{const a={};let s,u,d;return o&&o.split(`
`).forEach(function(h){d=h.indexOf(":"),s=h.substring(0,d).trim().toLowerCase(),u=h.substring(d+1).trim(),!(!s||a[s]&&Wh[s])&&(s==="set-cookie"?a[s]?a[s].push(u):a[s]=[u]:a[s]=a[s]?a[s]+", "+u:u)}),a},Wc=Symbol("internals");function Vr(o){return o&&String(o).trim().toLowerCase()}function di(o){return o===!1||o==null?o:P.isArray(o)?o.map(di):String(o)}function Xh(o){const a=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=s.exec(o);)a[u[1]]=u[2];return a}const Kh=o=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(o.trim());function wl(o,a,s,u,d){if(P.isFunction(u))return u.call(this,a,s);if(d&&(a=s),!!P.isString(a)){if(P.isString(u))return a.indexOf(u)!==-1;if(P.isRegExp(u))return u.test(a)}}function Yh(o){return o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,s,u)=>s.toUpperCase()+u)}function Jh(o,a){const s=P.toCamelCase(" "+a);["get","set","has"].forEach(u=>{Object.defineProperty(o,u+s,{value:function(d,f,h){return this[u].call(this,a,d,f,h)},configurable:!0})})}class Ze{constructor(a){a&&this.set(a)}set(a,s,u){const d=this;function f(x,E,w){const _=Vr(E);if(!_)throw new Error("header name must be a non-empty string");const C=P.findKey(d,_);(!C||d[C]===void 0||w===!0||w===void 0&&d[C]!==!1)&&(d[C||E]=di(x))}const h=(x,E)=>P.forEach(x,(w,_)=>f(w,_,E));if(P.isPlainObject(a)||a instanceof this.constructor)h(a,s);else if(P.isString(a)&&(a=a.trim())&&!Kh(a))h(Qh(a),s);else if(P.isHeaders(a))for(const[x,E]of a.entries())f(E,x,u);else a!=null&&f(s,a,u);return this}get(a,s){if(a=Vr(a),a){const u=P.findKey(this,a);if(u){const d=this[u];if(!s)return d;if(s===!0)return Xh(d);if(P.isFunction(s))return s.call(this,d,u);if(P.isRegExp(s))return s.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,s){if(a=Vr(a),a){const u=P.findKey(this,a);return!!(u&&this[u]!==void 0&&(!s||wl(this,this[u],u,s)))}return!1}delete(a,s){const u=this;let d=!1;function f(h){if(h=Vr(h),h){const x=P.findKey(u,h);x&&(!s||wl(u,u[x],x,s))&&(delete u[x],d=!0)}}return P.isArray(a)?a.forEach(f):f(a),d}clear(a){const s=Object.keys(this);let u=s.length,d=!1;for(;u--;){const f=s[u];(!a||wl(this,this[f],f,a,!0))&&(delete this[f],d=!0)}return d}normalize(a){const s=this,u={};return P.forEach(this,(d,f)=>{const h=P.findKey(u,f);if(h){s[h]=di(d),delete s[f];return}const x=a?Yh(f):String(f).trim();x!==f&&delete s[f],s[x]=di(d),u[x]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const s=Object.create(null);return P.forEach(this,(u,d)=>{u!=null&&u!==!1&&(s[d]=a&&P.isArray(u)?u.join(", "):u)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,s])=>a+": "+s).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...s){const u=new this(a);return s.forEach(d=>u.set(d)),u}static accessor(a){const u=(this[Wc]=this[Wc]={accessors:{}}).accessors,d=this.prototype;function f(h){const x=Vr(h);u[x]||(Jh(d,h),u[x]=!0)}return P.isArray(a)?a.forEach(f):f(a),this}}Ze.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(Ze.prototype,({value:o},a)=>{let s=a[0].toUpperCase()+a.slice(1);return{get:()=>o,set(u){this[s]=u}}});P.freezeMethods(Ze);function Sl(o,a){const s=this||Kr,u=a||s,d=Ze.from(u.headers);let f=u.data;return P.forEach(o,function(x){f=x.call(s,f,d.normalize(),a?a.status:void 0)}),d.normalize(),f}function wd(o){return!!(o&&o.__CANCEL__)}function or(o,a,s){Y.call(this,o??"canceled",Y.ERR_CANCELED,a,s),this.name="CanceledError"}P.inherits(or,Y,{__CANCEL__:!0});function Sd(o,a,s){const u=s.config.validateStatus;!s.status||!u||u(s.status)?o(s):a(new Y("Request failed with status code "+s.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function Gh(o){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(o);return a&&a[1]||""}function Zh(o,a){o=o||10;const s=new Array(o),u=new Array(o);let d=0,f=0,h;return a=a!==void 0?a:1e3,function(E){const w=Date.now(),_=u[f];h||(h=w),s[d]=E,u[d]=w;let C=f,L=0;for(;C!==d;)L+=s[C++],C=C%o;if(d=(d+1)%o,d===f&&(f=(f+1)%o),w-h<a)return;const W=_&&w-_;return W?Math.round(L*1e3/W):void 0}}function em(o,a){let s=0,u=1e3/a,d,f;const h=(w,_=Date.now())=>{s=_,d=null,f&&(clearTimeout(f),f=null),o.apply(null,w)};return[(...w)=>{const _=Date.now(),C=_-s;C>=u?h(w,_):(d=w,f||(f=setTimeout(()=>{f=null,h(d)},u-C)))},()=>d&&h(d)]}const pi=(o,a,s=3)=>{let u=0;const d=Zh(50,250);return em(f=>{const h=f.loaded,x=f.lengthComputable?f.total:void 0,E=h-u,w=d(E),_=h<=x;u=h;const C={loaded:h,total:x,progress:x?h/x:void 0,bytes:E,rate:w||void 0,estimated:w&&x&&_?(x-h)/w:void 0,event:f,lengthComputable:x!=null,[a?"download":"upload"]:!0};o(C)},s)},Qc=(o,a)=>{const s=o!=null;return[u=>a[0]({lengthComputable:s,total:o,loaded:u}),a[1]]},Xc=o=>(...a)=>P.asap(()=>o(...a)),nm=Be.hasStandardBrowserEnv?((o,a)=>s=>(s=new URL(s,Be.origin),o.protocol===s.protocol&&o.host===s.host&&(a||o.port===s.port)))(new URL(Be.origin),Be.navigator&&/(msie|trident)/i.test(Be.navigator.userAgent)):()=>!0,tm=Be.hasStandardBrowserEnv?{write(o,a,s,u,d,f){const h=[o+"="+encodeURIComponent(a)];P.isNumber(s)&&h.push("expires="+new Date(s).toGMTString()),P.isString(u)&&h.push("path="+u),P.isString(d)&&h.push("domain="+d),f===!0&&h.push("secure"),document.cookie=h.join("; ")},read(o){const a=document.cookie.match(new RegExp("(^|;\\s*)("+o+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove(o){this.write(o,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function rm(o){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(o)}function om(o,a){return a?o.replace(/\/?\/$/,"")+"/"+a.replace(/^\/+/,""):o}function Pd(o,a){return o&&!rm(a)?om(o,a):a}const Kc=o=>o instanceof Ze?{...o}:o;function Tt(o,a){a=a||{};const s={};function u(w,_,C,L){return P.isPlainObject(w)&&P.isPlainObject(_)?P.merge.call({caseless:L},w,_):P.isPlainObject(_)?P.merge({},_):P.isArray(_)?_.slice():_}function d(w,_,C,L){if(P.isUndefined(_)){if(!P.isUndefined(w))return u(void 0,w,C,L)}else return u(w,_,C,L)}function f(w,_){if(!P.isUndefined(_))return u(void 0,_)}function h(w,_){if(P.isUndefined(_)){if(!P.isUndefined(w))return u(void 0,w)}else return u(void 0,_)}function x(w,_,C){if(C in a)return u(w,_);if(C in o)return u(void 0,w)}const E={url:f,method:f,data:f,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:x,headers:(w,_,C)=>d(Kc(w),Kc(_),C,!0)};return P.forEach(Object.keys(Object.assign({},o,a)),function(_){const C=E[_]||d,L=C(o[_],a[_],_);P.isUndefined(L)&&C!==x||(s[_]=L)}),s}const Ed=o=>{const a=Tt({},o);let{data:s,withXSRFToken:u,xsrfHeaderName:d,xsrfCookieName:f,headers:h,auth:x}=a;a.headers=h=Ze.from(h),a.url=bd(Pd(a.baseURL,a.url),o.params,o.paramsSerializer),x&&h.set("Authorization","Basic "+btoa((x.username||"")+":"+(x.password?unescape(encodeURIComponent(x.password)):"")));let E;if(P.isFormData(s)){if(Be.hasStandardBrowserEnv||Be.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if((E=h.getContentType())!==!1){const[w,..._]=E?E.split(";").map(C=>C.trim()).filter(Boolean):[];h.setContentType([w||"multipart/form-data",..._].join("; "))}}if(Be.hasStandardBrowserEnv&&(u&&P.isFunction(u)&&(u=u(a)),u||u!==!1&&nm(a.url))){const w=d&&f&&tm.read(f);w&&h.set(d,w)}return a},im=typeof XMLHttpRequest<"u",am=im&&function(o){return new Promise(function(s,u){const d=Ed(o);let f=d.data;const h=Ze.from(d.headers).normalize();let{responseType:x,onUploadProgress:E,onDownloadProgress:w}=d,_,C,L,W,z;function S(){W&&W(),z&&z(),d.cancelToken&&d.cancelToken.unsubscribe(_),d.signal&&d.signal.removeEventListener("abort",_)}let O=new XMLHttpRequest;O.open(d.method.toUpperCase(),d.url,!0),O.timeout=d.timeout;function K(){if(!O)return;const J=Ze.from("getAllResponseHeaders"in O&&O.getAllResponseHeaders()),re={data:!x||x==="text"||x==="json"?O.responseText:O.response,status:O.status,statusText:O.statusText,headers:J,config:o,request:O};Sd(function(ce){s(ce),S()},function(ce){u(ce),S()},re),O=null}"onloadend"in O?O.onloadend=K:O.onreadystatechange=function(){!O||O.readyState!==4||O.status===0&&!(O.responseURL&&O.responseURL.indexOf("file:")===0)||setTimeout(K)},O.onabort=function(){O&&(u(new Y("Request aborted",Y.ECONNABORTED,o,O)),O=null)},O.onerror=function(){u(new Y("Network Error",Y.ERR_NETWORK,o,O)),O=null},O.ontimeout=function(){let oe=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const re=d.transitional||xd;d.timeoutErrorMessage&&(oe=d.timeoutErrorMessage),u(new Y(oe,re.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,o,O)),O=null},f===void 0&&h.setContentType(null),"setRequestHeader"in O&&P.forEach(h.toJSON(),function(oe,re){O.setRequestHeader(re,oe)}),P.isUndefined(d.withCredentials)||(O.withCredentials=!!d.withCredentials),x&&x!=="json"&&(O.responseType=d.responseType),w&&([L,z]=pi(w,!0),O.addEventListener("progress",L)),E&&O.upload&&([C,W]=pi(E),O.upload.addEventListener("progress",C),O.upload.addEventListener("loadend",W)),(d.cancelToken||d.signal)&&(_=J=>{O&&(u(!J||J.type?new or(null,o,O):J),O.abort(),O=null)},d.cancelToken&&d.cancelToken.subscribe(_),d.signal&&(d.signal.aborted?_():d.signal.addEventListener("abort",_)));const ee=Gh(d.url);if(ee&&Be.protocols.indexOf(ee)===-1){u(new Y("Unsupported protocol "+ee+":",Y.ERR_BAD_REQUEST,o));return}O.send(f||null)})},lm=(o,a)=>{const{length:s}=o=o?o.filter(Boolean):[];if(a||s){let u=new AbortController,d;const f=function(w){if(!d){d=!0,x();const _=w instanceof Error?w:this.reason;u.abort(_ instanceof Y?_:new or(_ instanceof Error?_.message:_))}};let h=a&&setTimeout(()=>{h=null,f(new Y(`timeout ${a} of ms exceeded`,Y.ETIMEDOUT))},a);const x=()=>{o&&(h&&clearTimeout(h),h=null,o.forEach(w=>{w.unsubscribe?w.unsubscribe(f):w.removeEventListener("abort",f)}),o=null)};o.forEach(w=>w.addEventListener("abort",f));const{signal:E}=u;return E.unsubscribe=()=>P.asap(x),E}},sm=function*(o,a){let s=o.byteLength;if(s<a){yield o;return}let u=0,d;for(;u<s;)d=u+a,yield o.slice(u,d),u=d},um=async function*(o,a){for await(const s of cm(o))yield*sm(s,a)},cm=async function*(o){if(o[Symbol.asyncIterator]){yield*o;return}const a=o.getReader();try{for(;;){const{done:s,value:u}=await a.read();if(s)break;yield u}}finally{await a.cancel()}},Yc=(o,a,s,u)=>{const d=um(o,a);let f=0,h,x=E=>{h||(h=!0,u&&u(E))};return new ReadableStream({async pull(E){try{const{done:w,value:_}=await d.next();if(w){x(),E.close();return}let C=_.byteLength;if(s){let L=f+=C;s(L)}E.enqueue(new Uint8Array(_))}catch(w){throw x(w),w}},cancel(E){return x(E),d.return()}},{highWaterMark:2})},xi=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Od=xi&&typeof ReadableStream=="function",dm=xi&&(typeof TextEncoder=="function"?(o=>a=>o.encode(a))(new TextEncoder):async o=>new Uint8Array(await new Response(o).arrayBuffer())),_d=(o,...a)=>{try{return!!o(...a)}catch{return!1}},fm=Od&&_d(()=>{let o=!1;const a=new Request(Be.origin,{body:new ReadableStream,method:"POST",get duplex(){return o=!0,"half"}}).headers.has("Content-Type");return o&&!a}),Jc=64*1024,Tl=Od&&_d(()=>P.isReadableStream(new Response("").body)),hi={stream:Tl&&(o=>o.body)};xi&&(o=>{["text","arrayBuffer","blob","formData","stream"].forEach(a=>{!hi[a]&&(hi[a]=P.isFunction(o[a])?s=>s[a]():(s,u)=>{throw new Y(`Response type '${a}' is not supported`,Y.ERR_NOT_SUPPORT,u)})})})(new Response);const pm=async o=>{if(o==null)return 0;if(P.isBlob(o))return o.size;if(P.isSpecCompliantForm(o))return(await new Request(Be.origin,{method:"POST",body:o}).arrayBuffer()).byteLength;if(P.isArrayBufferView(o)||P.isArrayBuffer(o))return o.byteLength;if(P.isURLSearchParams(o)&&(o=o+""),P.isString(o))return(await dm(o)).byteLength},hm=async(o,a)=>{const s=P.toFiniteNumber(o.getContentLength());return s??pm(a)},mm=xi&&(async o=>{let{url:a,method:s,data:u,signal:d,cancelToken:f,timeout:h,onDownloadProgress:x,onUploadProgress:E,responseType:w,headers:_,withCredentials:C="same-origin",fetchOptions:L}=Ed(o);w=w?(w+"").toLowerCase():"text";let W=lm([d,f&&f.toAbortSignal()],h),z;const S=W&&W.unsubscribe&&(()=>{W.unsubscribe()});let O;try{if(E&&fm&&s!=="get"&&s!=="head"&&(O=await hm(_,u))!==0){let re=new Request(a,{method:"POST",body:u,duplex:"half"}),ae;if(P.isFormData(u)&&(ae=re.headers.get("content-type"))&&_.setContentType(ae),re.body){const[ce,xe]=Qc(O,pi(Xc(E)));u=Yc(re.body,Jc,ce,xe)}}P.isString(C)||(C=C?"include":"omit");const K="credentials"in Request.prototype;z=new Request(a,{...L,signal:W,method:s.toUpperCase(),headers:_.normalize().toJSON(),body:u,duplex:"half",credentials:K?C:void 0});let ee=await fetch(z);const J=Tl&&(w==="stream"||w==="response");if(Tl&&(x||J&&S)){const re={};["status","statusText","headers"].forEach(ke=>{re[ke]=ee[ke]});const ae=P.toFiniteNumber(ee.headers.get("content-length")),[ce,xe]=x&&Qc(ae,pi(Xc(x),!0))||[];ee=new Response(Yc(ee.body,Jc,ce,()=>{xe&&xe(),S&&S()}),re)}w=w||"text";let oe=await hi[P.findKey(hi,w)||"text"](ee,o);return!J&&S&&S(),await new Promise((re,ae)=>{Sd(re,ae,{data:oe,headers:Ze.from(ee.headers),status:ee.status,statusText:ee.statusText,config:o,request:z})})}catch(K){throw S&&S(),K&&K.name==="TypeError"&&/fetch/i.test(K.message)?Object.assign(new Y("Network Error",Y.ERR_NETWORK,o,z),{cause:K.cause||K}):Y.from(K,K&&K.code,o,z)}}),zl={http:zh,xhr:am,fetch:mm};P.forEach(zl,(o,a)=>{if(o){try{Object.defineProperty(o,"name",{value:a})}catch{}Object.defineProperty(o,"adapterName",{value:a})}});const Gc=o=>`- ${o}`,gm=o=>P.isFunction(o)||o===null||o===!1,Cd={getAdapter:o=>{o=P.isArray(o)?o:[o];const{length:a}=o;let s,u;const d={};for(let f=0;f<a;f++){s=o[f];let h;if(u=s,!gm(s)&&(u=zl[(h=String(s)).toLowerCase()],u===void 0))throw new Y(`Unknown adapter '${h}'`);if(u)break;d[h||"#"+f]=u}if(!u){const f=Object.entries(d).map(([x,E])=>`adapter ${x} `+(E===!1?"is not supported by the environment":"is not available in the build"));let h=a?f.length>1?`since :
`+f.map(Gc).join(`
`):" "+Gc(f[0]):"as no adapter specified";throw new Y("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return u},adapters:zl};function Pl(o){if(o.cancelToken&&o.cancelToken.throwIfRequested(),o.signal&&o.signal.aborted)throw new or(null,o)}function Zc(o){return Pl(o),o.headers=Ze.from(o.headers),o.data=Sl.call(o,o.transformRequest),["post","put","patch"].indexOf(o.method)!==-1&&o.headers.setContentType("application/x-www-form-urlencoded",!1),Cd.getAdapter(o.adapter||Kr.adapter)(o).then(function(u){return Pl(o),u.data=Sl.call(o,o.transformResponse,u),u.headers=Ze.from(u.headers),u},function(u){return wd(u)||(Pl(o),u&&u.response&&(u.response.data=Sl.call(o,o.transformResponse,u.response),u.response.headers=Ze.from(u.response.headers))),Promise.reject(u)})}const Td="1.7.9",ki={};["object","boolean","number","function","string","symbol"].forEach((o,a)=>{ki[o]=function(u){return typeof u===o||"a"+(a<1?"n ":" ")+o}});const ed={};ki.transitional=function(a,s,u){function d(f,h){return"[Axios v"+Td+"] Transitional option '"+f+"'"+h+(u?". "+u:"")}return(f,h,x)=>{if(a===!1)throw new Y(d(h," has been removed"+(s?" in "+s:"")),Y.ERR_DEPRECATED);return s&&!ed[h]&&(ed[h]=!0,console.warn(d(h," has been deprecated since v"+s+" and will be removed in the near future"))),a?a(f,h,x):!0}};ki.spelling=function(a){return(s,u)=>(console.warn(`${u} is likely a misspelling of ${a}`),!0)};function ym(o,a,s){if(typeof o!="object")throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const u=Object.keys(o);let d=u.length;for(;d-- >0;){const f=u[d],h=a[f];if(h){const x=o[f],E=x===void 0||h(x,f,o);if(E!==!0)throw new Y("option "+f+" must be "+E,Y.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new Y("Unknown option "+f,Y.ERR_BAD_OPTION)}}const fi={assertOptions:ym,validators:ki},An=fi.validators;class Ct{constructor(a){this.defaults=a,this.interceptors={request:new Vc,response:new Vc}}async request(a,s){try{return await this._request(a,s)}catch(u){if(u instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const f=d.stack?d.stack.replace(/^.+\n/,""):"";try{u.stack?f&&!String(u.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(u.stack+=`
`+f):u.stack=f}catch{}}throw u}}_request(a,s){typeof a=="string"?(s=s||{},s.url=a):s=a||{},s=Tt(this.defaults,s);const{transitional:u,paramsSerializer:d,headers:f}=s;u!==void 0&&fi.assertOptions(u,{silentJSONParsing:An.transitional(An.boolean),forcedJSONParsing:An.transitional(An.boolean),clarifyTimeoutError:An.transitional(An.boolean)},!1),d!=null&&(P.isFunction(d)?s.paramsSerializer={serialize:d}:fi.assertOptions(d,{encode:An.function,serialize:An.function},!0)),fi.assertOptions(s,{baseUrl:An.spelling("baseURL"),withXsrfToken:An.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let h=f&&P.merge(f.common,f[s.method]);f&&P.forEach(["delete","get","head","post","put","patch","common"],z=>{delete f[z]}),s.headers=Ze.concat(h,f);const x=[];let E=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(s)===!1||(E=E&&S.synchronous,x.unshift(S.fulfilled,S.rejected))});const w=[];this.interceptors.response.forEach(function(S){w.push(S.fulfilled,S.rejected)});let _,C=0,L;if(!E){const z=[Zc.bind(this),void 0];for(z.unshift.apply(z,x),z.push.apply(z,w),L=z.length,_=Promise.resolve(s);C<L;)_=_.then(z[C++],z[C++]);return _}L=x.length;let W=s;for(C=0;C<L;){const z=x[C++],S=x[C++];try{W=z(W)}catch(O){S.call(this,O);break}}try{_=Zc.call(this,W)}catch(z){return Promise.reject(z)}for(C=0,L=w.length;C<L;)_=_.then(w[C++],w[C++]);return _}getUri(a){a=Tt(this.defaults,a);const s=Pd(a.baseURL,a.url);return bd(s,a.params,a.paramsSerializer)}}P.forEach(["delete","get","head","options"],function(a){Ct.prototype[a]=function(s,u){return this.request(Tt(u||{},{method:a,url:s,data:(u||{}).data}))}});P.forEach(["post","put","patch"],function(a){function s(u){return function(f,h,x){return this.request(Tt(x||{},{method:a,headers:u?{"Content-Type":"multipart/form-data"}:{},url:f,data:h}))}}Ct.prototype[a]=s(),Ct.prototype[a+"Form"]=s(!0)});class Fl{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(f){s=f});const u=this;this.promise.then(d=>{if(!u._listeners)return;let f=u._listeners.length;for(;f-- >0;)u._listeners[f](d);u._listeners=null}),this.promise.then=d=>{let f;const h=new Promise(x=>{u.subscribe(x),f=x}).then(d);return h.cancel=function(){u.unsubscribe(f)},h},a(function(f,h,x){u.reason||(u.reason=new or(f,h,x),s(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const s=this._listeners.indexOf(a);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const a=new AbortController,s=u=>{a.abort(u)};return this.subscribe(s),a.signal.unsubscribe=()=>this.unsubscribe(s),a.signal}static source(){let a;return{token:new Fl(function(d){a=d}),cancel:a}}}function vm(o){return function(s){return o.apply(null,s)}}function bm(o){return P.isObject(o)&&o.isAxiosError===!0}const Rl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Rl).forEach(([o,a])=>{Rl[a]=o});function zd(o){const a=new Ct(o),s=ld(Ct.prototype.request,a);return P.extend(s,Ct.prototype,a,{allOwnKeys:!0}),P.extend(s,a,null,{allOwnKeys:!0}),s.create=function(d){return zd(Tt(o,d))},s}const Te=zd(Kr);Te.Axios=Ct;Te.CanceledError=or;Te.CancelToken=Fl;Te.isCancel=wd;Te.VERSION=Td;Te.toFormData=bi;Te.AxiosError=Y;Te.Cancel=Te.CanceledError;Te.all=function(a){return Promise.all(a)};Te.spread=vm;Te.isAxiosError=bm;Te.mergeConfig=Tt;Te.AxiosHeaders=Ze;Te.formToJSON=o=>kd(P.isHTMLForm(o)?new FormData(o):o);Te.getAdapter=Cd.getAdapter;Te.HttpStatusCode=Rl;Te.default=Te;const xm=({websites:o})=>te.jsx("section",{className:"background",children:te.jsxs("div",{className:"container mx-auto p-4",children:[te.jsxs("h1",{className:`mb-4 text-3xl font-extrabold text-orange-500 md:text-5xl lg:text-6xl text-center drop-shadow-[0_1px_1.2px_rgba(0,0,0,1)]\r
\r
`,children:["Estado de sitios",te.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 ",children:" CGIG"})]}),te.jsx("div",{className:"bg-white border-8 rounded-xl border-gray-600",children:o.map((a,s)=>te.jsxs("div",{className:`border border-gray-200  p-4 hover:transform hover:scale-105 transition-transform hover:rounded-xl

                                ${a.status==="Online"?" bg-green-50 hover:bg-green-100 hover:border-green-300":a.status==="Danger"?"bg-yellow-50 hover:bg-yellow-100 hover:border-yellow-300":"bg-red-50 hover:bg-red-100 hover:border-red-300"}`,children:[te.jsxs("div",{className:"hidden md:grid grid-cols-4",children:[te.jsx("div",{className:"col-span-1 text-blue-500 font-bold hover:underline",children:te.jsx("a",{href:`https://${a.website}`,target:"_blank",rel:"noopener noreferrer",children:a.website})}),te.jsx("div",{className:"col-span-1 text-black font-semibold",children:te.jsx("span",{className:`px-4 py-2 rounded ${a.status==="Online"?"text-green-700 bg-green-200":a.status==="Danger"?"text-yellow-700 bg-yellow-200":"text-red-700 bg-red-200"}`,children:a.status})}),te.jsx("div",{className:"col-span-1 text-black",children:a.responseTime==="N/A"?"Sin respuesta":a.responseTime}),te.jsx("div",{className:"col-span-1 text-black",children:a.status==="Online"?a.statusCode:a.error||"Error no listado"})]}),te.jsxs("div",{className:"grid grid-cols-2 md:hidden gap-2",children:[te.jsx("div",{className:"text-blue-500 font-bold hover:underline",children:te.jsx("a",{href:`https://${a.website}`,target:"_blank",rel:"noopener noreferrer",children:a.website})}),te.jsx("div",{className:"text-black font-semibold text-right",children:te.jsx("span",{className:`px-4 py-2 rounded ${a.status==="Online"?"text-green-700 bg-green-200":a.status==="Danger"?"text-yellow-700 bg-yellow-200":"text-red-700 bg-red-200"}`,children:a.status})}),te.jsx("div",{className:"text-black ",children:a.responseTime==="N/A"?"Sin respuesta":a.responseTime}),te.jsx("div",{className:"text-black text-right",children:a.status==="Online"?a.statusCode:a.error||"Error no listado"})]})]},s))})]})});function Ne(o,a){a===void 0&&(a={});var s=a.insertAt;if(o&&typeof document<"u"){var u=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css",s==="top"&&u.firstChild?u.insertBefore(d,u.firstChild):u.appendChild(d),d.styleSheet?d.styleSheet.cssText=o:d.appendChild(document.createTextNode(o))}}Ne(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Ve=function(){return Ve=Object.assign||function(o){for(var a,s=1,u=arguments.length;s<u;s++)for(var d in a=arguments[s])Object.prototype.hasOwnProperty.call(a,d)&&(o[d]=a[d]);return o},Ve.apply(this,arguments)};function mi(o){return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},mi(o)}var km=/^\s+/,wm=/\s+$/;function H(o,a){if(a=a||{},(o=o||"")instanceof H)return o;if(!(this instanceof H))return new H(o,a);var s=function(u){var d={r:0,g:0,b:0},f=1,h=null,x=null,E=null,w=!1,_=!1;typeof u=="string"&&(u=function(z){z=z.replace(km,"").replace(wm,"").toLowerCase();var S,O=!1;if(Nl[z])z=Nl[z],O=!0;else if(z=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(S=Pn.rgb.exec(z))?{r:S[1],g:S[2],b:S[3]}:(S=Pn.rgba.exec(z))?{r:S[1],g:S[2],b:S[3],a:S[4]}:(S=Pn.hsl.exec(z))?{h:S[1],s:S[2],l:S[3]}:(S=Pn.hsla.exec(z))?{h:S[1],s:S[2],l:S[3],a:S[4]}:(S=Pn.hsv.exec(z))?{h:S[1],s:S[2],v:S[3]}:(S=Pn.hsva.exec(z))?{h:S[1],s:S[2],v:S[3],a:S[4]}:(S=Pn.hex8.exec(z))?{r:ln(S[1]),g:ln(S[2]),b:ln(S[3]),a:ad(S[4]),format:O?"name":"hex8"}:(S=Pn.hex6.exec(z))?{r:ln(S[1]),g:ln(S[2]),b:ln(S[3]),format:O?"name":"hex"}:(S=Pn.hex4.exec(z))?{r:ln(S[1]+""+S[1]),g:ln(S[2]+""+S[2]),b:ln(S[3]+""+S[3]),a:ad(S[4]+""+S[4]),format:O?"name":"hex8"}:(S=Pn.hex3.exec(z))?{r:ln(S[1]+""+S[1]),g:ln(S[2]+""+S[2]),b:ln(S[3]+""+S[3]),format:O?"name":"hex"}:!1}(u)),mi(u)=="object"&&($n(u.r)&&$n(u.g)&&$n(u.b)?(C=u.r,L=u.g,W=u.b,d={r:255*be(C,255),g:255*be(L,255),b:255*be(W,255)},w=!0,_=String(u.r).substr(-1)==="%"?"prgb":"rgb"):$n(u.h)&&$n(u.s)&&$n(u.v)?(h=Wr(u.s),x=Wr(u.v),d=function(z,S,O){z=6*be(z,360),S=be(S,100),O=be(O,100);var K=Math.floor(z),ee=z-K,J=O*(1-S),oe=O*(1-ee*S),re=O*(1-(1-ee)*S),ae=K%6,ce=[O,oe,J,J,re,O][ae],xe=[re,O,O,oe,J,J][ae],ke=[J,J,re,O,O,oe][ae];return{r:255*ce,g:255*xe,b:255*ke}}(u.h,h,x),w=!0,_="hsv"):$n(u.h)&&$n(u.s)&&$n(u.l)&&(h=Wr(u.s),E=Wr(u.l),d=function(z,S,O){var K,ee,J;function oe(ce,xe,ke){return ke<0&&(ke+=1),ke>1&&(ke-=1),ke<1/6?ce+6*(xe-ce)*ke:ke<.5?xe:ke<2/3?ce+(xe-ce)*(2/3-ke)*6:ce}if(z=be(z,360),S=be(S,100),O=be(O,100),S===0)K=ee=J=O;else{var re=O<.5?O*(1+S):O+S-O*S,ae=2*O-re;K=oe(ae,re,z+1/3),ee=oe(ae,re,z),J=oe(ae,re,z-1/3)}return{r:255*K,g:255*ee,b:255*J}}(u.h,h,E),w=!0,_="hsl"),u.hasOwnProperty("a")&&(f=u.a));var C,L,W;return f=Rd(f),{ok:w,format:u.format||_,r:Math.min(255,Math.max(d.r,0)),g:Math.min(255,Math.max(d.g,0)),b:Math.min(255,Math.max(d.b,0)),a:f}}(o);this._originalInput=o,this._r=s.r,this._g=s.g,this._b=s.b,this._a=s.a,this._roundA=Math.round(100*this._a)/100,this._format=a.format||s.format,this._gradientType=a.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=s.ok}function nd(o,a,s){o=be(o,255),a=be(a,255),s=be(s,255);var u,d,f=Math.max(o,a,s),h=Math.min(o,a,s),x=(f+h)/2;if(f==h)u=d=0;else{var E=f-h;switch(d=x>.5?E/(2-f-h):E/(f+h),f){case o:u=(a-s)/E+(a<s?6:0);break;case a:u=(s-o)/E+2;break;case s:u=(o-a)/E+4}u/=6}return{h:u,s:d,l:x}}function td(o,a,s){o=be(o,255),a=be(a,255),s=be(s,255);var u,d,f=Math.max(o,a,s),h=Math.min(o,a,s),x=f,E=f-h;if(d=f===0?0:E/f,f==h)u=0;else{switch(f){case o:u=(a-s)/E+(a<s?6:0);break;case a:u=(s-o)/E+2;break;case s:u=(o-a)/E+4}u/=6}return{h:u,s:d,v:x}}function rd(o,a,s,u){var d=[En(Math.round(o).toString(16)),En(Math.round(a).toString(16)),En(Math.round(s).toString(16))];return u&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0):d.join("")}function od(o,a,s,u){return[En(Nd(u)),En(Math.round(o).toString(16)),En(Math.round(a).toString(16)),En(Math.round(s).toString(16))].join("")}function Sm(o,a){a=a===0?0:a||10;var s=H(o).toHsl();return s.s-=a/100,s.s=wi(s.s),H(s)}function Pm(o,a){a=a===0?0:a||10;var s=H(o).toHsl();return s.s+=a/100,s.s=wi(s.s),H(s)}function Em(o){return H(o).desaturate(100)}function Om(o,a){a=a===0?0:a||10;var s=H(o).toHsl();return s.l+=a/100,s.l=wi(s.l),H(s)}function _m(o,a){a=a===0?0:a||10;var s=H(o).toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(-a/100*255))),s.g=Math.max(0,Math.min(255,s.g-Math.round(-a/100*255))),s.b=Math.max(0,Math.min(255,s.b-Math.round(-a/100*255))),H(s)}function Cm(o,a){a=a===0?0:a||10;var s=H(o).toHsl();return s.l-=a/100,s.l=wi(s.l),H(s)}function Tm(o,a){var s=H(o).toHsl(),u=(s.h+a)%360;return s.h=u<0?360+u:u,H(s)}function zm(o){var a=H(o).toHsl();return a.h=(a.h+180)%360,H(a)}function id(o,a){if(isNaN(a)||a<=0)throw new Error("Argument to polyad must be a positive number");for(var s=H(o).toHsl(),u=[H(o)],d=360/a,f=1;f<a;f++)u.push(H({h:(s.h+f*d)%360,s:s.s,l:s.l}));return u}function Rm(o){var a=H(o).toHsl(),s=a.h;return[H(o),H({h:(s+72)%360,s:a.s,l:a.l}),H({h:(s+216)%360,s:a.s,l:a.l})]}function Nm(o,a,s){a=a||6,s=s||30;var u=H(o).toHsl(),d=360/s,f=[H(o)];for(u.h=(u.h-(d*a>>1)+720)%360;--a;)u.h=(u.h+d)%360,f.push(H(u));return f}function Dm(o,a){a=a||6;for(var s=H(o).toHsv(),u=s.h,d=s.s,f=s.v,h=[],x=1/a;a--;)h.push(H({h:u,s:d,v:f})),f=(f+x)%1;return h}H.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var o=this.toRgb();return(299*o.r+587*o.g+114*o.b)/1e3},getLuminance:function(){var o,a,s,u=this.toRgb();return o=u.r/255,a=u.g/255,s=u.b/255,.2126*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.7152*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.0722*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))},setAlpha:function(o){return this._a=Rd(o),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var o=td(this._r,this._g,this._b);return{h:360*o.h,s:o.s,v:o.v,a:this._a}},toHsvString:function(){var o=td(this._r,this._g,this._b),a=Math.round(360*o.h),s=Math.round(100*o.s),u=Math.round(100*o.v);return this._a==1?"hsv("+a+", "+s+"%, "+u+"%)":"hsva("+a+", "+s+"%, "+u+"%, "+this._roundA+")"},toHsl:function(){var o=nd(this._r,this._g,this._b);return{h:360*o.h,s:o.s,l:o.l,a:this._a}},toHslString:function(){var o=nd(this._r,this._g,this._b),a=Math.round(360*o.h),s=Math.round(100*o.s),u=Math.round(100*o.l);return this._a==1?"hsl("+a+", "+s+"%, "+u+"%)":"hsla("+a+", "+s+"%, "+u+"%, "+this._roundA+")"},toHex:function(o){return rd(this._r,this._g,this._b,o)},toHexString:function(o){return"#"+this.toHex(o)},toHex8:function(o){return function(a,s,u,d,f){var h=[En(Math.round(a).toString(16)),En(Math.round(s).toString(16)),En(Math.round(u).toString(16)),En(Nd(d))];return f&&h[0].charAt(0)==h[0].charAt(1)&&h[1].charAt(0)==h[1].charAt(1)&&h[2].charAt(0)==h[2].charAt(1)&&h[3].charAt(0)==h[3].charAt(1)?h[0].charAt(0)+h[1].charAt(0)+h[2].charAt(0)+h[3].charAt(0):h.join("")}(this._r,this._g,this._b,this._a,o)},toHex8String:function(o){return"#"+this.toHex8(o)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*be(this._r,255))+"%",g:Math.round(100*be(this._g,255))+"%",b:Math.round(100*be(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*be(this._r,255))+"%, "+Math.round(100*be(this._g,255))+"%, "+Math.round(100*be(this._b,255))+"%)":"rgba("+Math.round(100*be(this._r,255))+"%, "+Math.round(100*be(this._g,255))+"%, "+Math.round(100*be(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Am[rd(this._r,this._g,this._b,!0)]||!1)},toFilter:function(o){var a="#"+od(this._r,this._g,this._b,this._a),s=a,u=this._gradientType?"GradientType = 1, ":"";if(o){var d=H(o);s="#"+od(d._r,d._g,d._b,d._a)}return"progid:DXImageTransform.Microsoft.gradient("+u+"startColorstr="+a+",endColorstr="+s+")"},toString:function(o){var a=!!o;o=o||this._format;var s=!1,u=this._a<1&&this._a>=0;return a||!u||o!=="hex"&&o!=="hex6"&&o!=="hex3"&&o!=="hex4"&&o!=="hex8"&&o!=="name"?(o==="rgb"&&(s=this.toRgbString()),o==="prgb"&&(s=this.toPercentageRgbString()),o!=="hex"&&o!=="hex6"||(s=this.toHexString()),o==="hex3"&&(s=this.toHexString(!0)),o==="hex4"&&(s=this.toHex8String(!0)),o==="hex8"&&(s=this.toHex8String()),o==="name"&&(s=this.toName()),o==="hsl"&&(s=this.toHslString()),o==="hsv"&&(s=this.toHsvString()),s||this.toHexString()):o==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return H(this.toString())},_applyModification:function(o,a){var s=o.apply(null,[this].concat([].slice.call(a)));return this._r=s._r,this._g=s._g,this._b=s._b,this.setAlpha(s._a),this},lighten:function(){return this._applyModification(Om,arguments)},brighten:function(){return this._applyModification(_m,arguments)},darken:function(){return this._applyModification(Cm,arguments)},desaturate:function(){return this._applyModification(Sm,arguments)},saturate:function(){return this._applyModification(Pm,arguments)},greyscale:function(){return this._applyModification(Em,arguments)},spin:function(){return this._applyModification(Tm,arguments)},_applyCombination:function(o,a){return o.apply(null,[this].concat([].slice.call(a)))},analogous:function(){return this._applyCombination(Nm,arguments)},complement:function(){return this._applyCombination(zm,arguments)},monochromatic:function(){return this._applyCombination(Dm,arguments)},splitcomplement:function(){return this._applyCombination(Rm,arguments)},triad:function(){return this._applyCombination(id,[3])},tetrad:function(){return this._applyCombination(id,[4])}},H.fromRatio=function(o,a){if(mi(o)=="object"){var s={};for(var u in o)o.hasOwnProperty(u)&&(s[u]=u==="a"?o[u]:Wr(o[u]));o=s}return H(o,a)},H.equals=function(o,a){return!(!o||!a)&&H(o).toRgbString()==H(a).toRgbString()},H.random=function(){return H.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},H.mix=function(o,a,s){s=s===0?0:s||50;var u=H(o).toRgb(),d=H(a).toRgb(),f=s/100;return H({r:(d.r-u.r)*f+u.r,g:(d.g-u.g)*f+u.g,b:(d.b-u.b)*f+u.b,a:(d.a-u.a)*f+u.a})},H.readability=function(o,a){var s=H(o),u=H(a);return(Math.max(s.getLuminance(),u.getLuminance())+.05)/(Math.min(s.getLuminance(),u.getLuminance())+.05)},H.isReadable=function(o,a,s){var u,d,f=H.readability(o,a);switch(d=!1,(u=function(h){var x,E;return x=((h=h||{level:"AA",size:"small"}).level||"AA").toUpperCase(),E=(h.size||"small").toLowerCase(),x!=="AA"&&x!=="AAA"&&(x="AA"),E!=="small"&&E!=="large"&&(E="small"),{level:x,size:E}}(s)).level+u.size){case"AAsmall":case"AAAlarge":d=f>=4.5;break;case"AAlarge":d=f>=3;break;case"AAAsmall":d=f>=7}return d},H.mostReadable=function(o,a,s){var u,d,f,h,x=null,E=0;d=(s=s||{}).includeFallbackColors,f=s.level,h=s.size;for(var w=0;w<a.length;w++)(u=H.readability(o,a[w]))>E&&(E=u,x=H(a[w]));return H.isReadable(o,x,{level:f,size:h})||!d?x:(s.includeFallbackColors=!1,H.mostReadable(o,["#fff","#000"],s))};var Nl=H.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Am=H.hexNames=function(o){var a={};for(var s in o)o.hasOwnProperty(s)&&(a[o[s]]=s);return a}(Nl);function Rd(o){return o=parseFloat(o),(isNaN(o)||o<0||o>1)&&(o=1),o}function be(o,a){(function(u){return typeof u=="string"&&u.indexOf(".")!=-1&&parseFloat(u)===1})(o)&&(o="100%");var s=function(u){return typeof u=="string"&&u.indexOf("%")!=-1}(o);return o=Math.min(a,Math.max(0,parseFloat(o))),s&&(o=parseInt(o*a,10)/100),Math.abs(o-a)<1e-6?1:o%a/parseFloat(a)}function wi(o){return Math.min(1,Math.max(0,o))}function ln(o){return parseInt(o,16)}function En(o){return o.length==1?"0"+o:""+o}function Wr(o){return o<=1&&(o=100*o+"%"),o}function Nd(o){return Math.round(255*parseFloat(o)).toString(16)}function ad(o){return ln(o)/255}var ct,si,ui,Pn=(si="[\\s|\\(]+("+(ct="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ct+")[,|\\s]+("+ct+")\\s*\\)?",ui="[\\s|\\(]+("+ct+")[,|\\s]+("+ct+")[,|\\s]+("+ct+")[,|\\s]+("+ct+")\\s*\\)?",{CSS_UNIT:new RegExp(ct),rgb:new RegExp("rgb"+si),rgba:new RegExp("rgba"+ui),hsl:new RegExp("hsl"+si),hsla:new RegExp("hsla"+ui),hsv:new RegExp("hsv"+si),hsva:new RegExp("hsva"+ui),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function $n(o){return!!Pn.CSS_UNIT.exec(o)}var Dd=function(o,a){var s=(typeof o=="string"?parseInt(o):o)||0;if(s>=-5&&s<=5){var u=s,d=parseFloat(a),f=d+u*(d/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:a}},Ad=function(o,a){var s=o||{},u="";switch(a){case"small":u="12px";break;case"medium":u="16px";break;case"large":u="20px";break;default:u=void 0}var d={};if(s.fontSize){var f=s.fontSize;d=function(h,x){var E={};for(var w in h)Object.prototype.hasOwnProperty.call(h,w)&&x.indexOf(w)<0&&(E[w]=h[w]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function"){var _=0;for(w=Object.getOwnPropertySymbols(h);_<w.length;_++)x.indexOf(w[_])<0&&Object.prototype.propertyIsEnumerable.call(h,w[_])&&(E[w[_]]=h[w[_]])}return E}(s,["fontSize"]),u=f}return{fontSize:u,styles:d}},Lm={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Ld=function(o){var a=o.className,s=o.text,u=o.textColor,d=o.staticText,f=o.style;return s?mn.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(a||"").trim(),style:Ve(Ve(Ve({},d&&Lm),u&&{color:u,mixBlendMode:"unset"}),f&&f)},typeof s=="string"&&s.length?s:"loading"):null},Md="rgb(50, 205, 50)";function Fd(o,a){a===void 0&&(a=0);var s=[];return function u(d,f){return f===void 0&&(f=0),s.push.apply(s,d),s.length<f&&u(s,f),s.slice(0,f)}(o,a)}Ne(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);var nr=H(Md).toRgb(),Et=Array.from({length:4},function(o,a){return"--atom-phase".concat(a+1,"-rgb")}),Mm=function(o){var a,s=Ad(o==null?void 0:o.style,o==null?void 0:o.size),u=s.styles,d=s.fontSize,f=o==null?void 0:o.easing,h=Dd(o==null?void 0:o.speedPlus,"1s").animationPeriod,x=function(E){var w={};if(E instanceof Array){for(var _=Fd(E,Et.length),C=0;C<_.length&&!(C>=4);C++)try{if(!(S=H(_[C])).isValid())throw new Error("invalid color");var L=(O=S.toRgb()).r,W=O.g,z=O.b;w[Et[C]]="".concat(L,", ").concat(W,", ").concat(z)}catch{L=nr.r,W=nr.g,z=nr.b,w[Et[C]]="".concat(L,", ").concat(W,", ").concat(z),console.warn("Possibly an invalid color( ".concat(_[C]," ) passed to Atom indicator!"))}return w}try{if(typeof E!="string")throw new Error("Color String expected");var S;if(!(S=H(E)).isValid())throw new Error("Invalid color");var O;for(L=(O=S.toRgb()).r,W=O.g,z=O.b,C=0;C<Et.length;C++)w[Et[C]]="".concat(L,", ").concat(W,", ").concat(z)}catch(K){for(K instanceof Error?console.warn("[".concat(K.message,']: Received "').concat(typeof E,'" instead with value, ').concat(JSON.stringify(E))):console.warn("".concat(JSON.stringify(E)," received in <Atom /> indicator cannot be processed. Using default instead!")),C=0;C<Et.length;C++)L=nr.r,W=nr.g,z=nr.b,w[Et[C]]="".concat(L,", ").concat(W,", ").concat(z)}return w}((a=o==null?void 0:o.color)!==null&&a!==void 0?a:"");return mn.createElement("span",{className:"rli-d-i-b atom-rli-bounding-box",style:Ve(Ve(Ve(Ve(Ve({},d&&{fontSize:d}),h&&{"--rli-animation-duration":h}),f&&{"--rli-animation-function":f}),x),u),role:"status","aria-live":"polite","aria-label":"Loading"},mn.createElement("span",{className:"rli-d-i-b atom-indicator"},mn.createElement("span",{className:"rli-d-i-b electron-orbit"}),mn.createElement("span",{className:"rli-d-i-b electron-orbit"}),mn.createElement("span",{className:"rli-d-i-b electron-orbit"})),mn.createElement(Ld,{className:"atom-text",staticText:!0,text:o==null?void 0:o.text,textColor:o==null?void 0:o.textColor}))};Ne(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(o,a){return"--commet-phase".concat(a+1,"-color")});Ne(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(o,a){return"--OP-annulus-phase".concat(a+1,"-color")});function El(o){return o&&o.Math===Math&&o}Ne(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);El(typeof window=="object"&&window)||El(typeof self=="object"&&self)||El(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(o,a){return"--OP-dotted-phase".concat(a+1,"-color")});Ne(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(o,a){return"--OP-spokes-phase".concat(a+1,"-color")});Ne(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(o,a){return"--OP-annulus-dual-sectors-phase".concat(a+1,"-color")});Ne(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(o,a){return["--OP-annulus-track-phase".concat(a+1,"-color"),"--OP-annulus-sector-phase".concat(a+1,"-color")]});Ne(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(o,a){return"--four-square-phase".concat(a+1,"-color")});Ne(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(o,a){return"--mosaic-phase".concat(a+1,"-color")});Ne(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(o,a){return"--riple-phase".concat(a+1,"-color")});Ne(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(o,a){return"--TD-pulsate-phase".concat(a+1,"-color")});Ne(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(o,a){return"--TD-brick-stack-phase".concat(a+1,"-color")});Ne(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(o,a){return"--TD-bob-phase".concat(a+1,"-color")});Ne(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(o,a){return"--TD-bounce-phase".concat(a+1,"-color")});Ne(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(o,a){return"--shape-phase".concat(a+1,"-color")});Ne(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(o,a){return"--trophySpin-phase".concat(a+1,"-color")});Ne(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(o,a){return"--slab-phase".concat(a+1,"-color")});Ne(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);var tr=Array.from({length:4},function(o,a){return"--life-line-phase".concat(a+1,"-color")}),jd=function(o){var a,s=Ad(o==null?void 0:o.style,o==null?void 0:o.size),u=s.styles,d=s.fontSize,f=o==null?void 0:o.easing,h=Dd(o==null?void 0:o.speedPlus,"2s").animationPeriod,x=function(E){var w={};if(E instanceof Array){for(var _=Fd(E,tr.length),C=0;C<_.length&&!(C>=4);C++)w[tr[C]]=_[C];return w}try{if(typeof E!="string")throw new Error("Color String expected");for(var L=0;L<tr.length;L++)w[tr[L]]=E}catch(W){for(W instanceof Error?console.warn("[".concat(W.message,']: Received "').concat(typeof E,'" instead with value, ').concat(JSON.stringify(E))):console.warn("".concat(JSON.stringify(E)," received in <LifeLine /> indicator cannot be processed. Using default instead!")),L=0;L<tr.length;L++)w[tr[L]]=Md}return w}((a=o==null?void 0:o.color)!==null&&a!==void 0?a:"");return mn.createElement("span",{className:"rli-d-i-b lifeline-rli-bounding-box",style:Ve(Ve(Ve(Ve(Ve({},d&&{fontSize:d}),h&&{"--rli-animation-duration":h}),f&&{"--rli-animation-function":f}),x),u),role:"status","aria-live":"polite","aria-label":"Loading"},mn.createElement("span",{className:"rli-d-i-b lifeline-indicator"},mn.createElement("svg",{width:"14em",height:"6.825000001em",xmlns:"http://www.w3.org/2000/svg",version:"1.2",viewBox:"0 0 350 50",preserveAspectRatio:"xMinYMin meet"},mn.createElement("path",{className:"rli-lifeline",stroke:"currentColor",fill:"none",strokeLinejoin:"round",strokeWidth:"4px",d:"M-113 70h250q8-30 12-3t5 8 3-7 3 4 6 35 8-55 6 40 8-3s2-11 10-10 1 1 8-10l4 8c6 4 8-6 10-17s2 10 9 11h210"}))),mn.createElement(Ld,{staticText:!0,text:o==null?void 0:o.text,textColor:o==null?void 0:o.textColor}))};const Fm=()=>te.jsx("div",{className:"flex flex-col items-center justify-center w-screen h-screen bg-gray-50 text-center",children:te.jsx(jd,{color:"#3030cc",size:"large",text:"Se están revisando las webs...",textColor:""})}),jm=()=>te.jsx("div",{className:"flex flex-col items-center justify-center w-screen h-screen bg-gray-50 text-center",children:te.jsx(jd,{color:"#cc3030",size:"large",text:"Ha ocurrido un error, reinentando...",textColor:""})}),Im=()=>te.jsxs("div",{className:"flex flex-col items-center justify-center w-screen h-screen bg-gray-50 text-center text-red-600 text-xl font-medium	",children:[te.jsx(Mm,{color:"#cc3030",size:"large",text:"Error en el servidor, reinentando...",textColor:""}),te.jsx("p",{children:"Si el error persiste"}),te.jsx("p",{children:"Favor de contactar al administrador"})]}),qm=()=>{const o="https://online-checker.onrender.com",[a,s]=Ot.useState([]),[u,d]=Ot.useState(!0),[f,h]=Ot.useState(!1),[x,E]=Ot.useState(),w=Ot.useRef(0),_=3,C=6;return Ot.useEffect(()=>{const L=async()=>{try{const W=await Te.get(`${o}/api/check`);s(W.data),w.current=0,d(!1),h(!1),E(!1),setTimeout(L,3e4),console.log("Data fetched")}catch(W){console.error("Error fetching data:",W),w.current<=_?(console.log(`Reintentando... (${w.current+1}/${_})`),setTimeout(L,3e3),w.current+=1):w.current<=C?(h(!0),d(!1),console.log(`Reintentando... (${w.current+1}/${C})`),setTimeout(L,3e3),w.current+=1):(E(!0),h(!1),console.log(`Reintentando... (${w.current+1} veces)`),setTimeout(L,3e3),w.current+=1)}};L()},[]),u?te.jsx(Fm,{}):f?te.jsx(jm,{}):x?te.jsx(Im,{}):te.jsx(xm,{websites:a})},Um=()=>te.jsx(te.Fragment,{children:te.jsx(qm,{})});$p.createRoot(document.getElementById("root")).render(te.jsx(Um,{}));
