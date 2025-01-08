(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function s(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(d){if(d.ep)return;d.ep=!0;const f=s(d);fetch(d.href,f)}})();function Cp(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var hl={exports:{}},Br={},ml={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc;function Tp(){if(zc)return Z;zc=1;var o=Symbol.for("react.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),h=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),A=Symbol.iterator;function q(y){return y===null||typeof y!="object"?null:(y=A&&y[A]||y["@@iterator"],typeof y=="function"?y:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,S={};function O(y,T,Y){this.props=y,this.context=T,this.refs=S,this.updater=Y||J}O.prototype.isReactComponent={},O.prototype.setState=function(y,T){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,T,"setState")},O.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function G(){}G.prototype=O.prototype;function ee(y,T,Y){this.props=y,this.context=T,this.refs=S,this.updater=Y||J}var K=ee.prototype=new G;K.constructor=ee,N(K,O.prototype),K.isPureReactComponent=!0;var re=Array.isArray,te=Object.prototype.hasOwnProperty,ie={current:null},ue={key:!0,ref:!0,__self:!0,__source:!0};function ke(y,T,Y){var ne,ae={},le=null,pe=null;if(T!=null)for(ne in T.ref!==void 0&&(pe=T.ref),T.key!==void 0&&(le=""+T.key),T)te.call(T,ne)&&!ue.hasOwnProperty(ne)&&(ae[ne]=T[ne]);var ce=arguments.length-2;if(ce===1)ae.children=Y;else if(1<ce){for(var ye=Array(ce),en=0;en<ce;en++)ye[en]=arguments[en+2];ae.children=ye}if(y&&y.defaultProps)for(ne in ce=y.defaultProps,ce)ae[ne]===void 0&&(ae[ne]=ce[ne]);return{$$typeof:o,type:y,key:le,ref:pe,props:ae,_owner:ie.current}}function xe(y,T){return{$$typeof:o,type:y.type,key:T,ref:y.ref,props:y.props,_owner:y._owner}}function An(y){return typeof y=="object"&&y!==null&&y.$$typeof===o}function ct(y){var T={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Y){return T[Y]})}var En=/\/+/g;function Ze(y,T){return typeof y=="object"&&y!==null&&y.key!=null?ct(""+y.key):T.toString(36)}function hn(y,T,Y,ne,ae){var le=typeof y;(le==="undefined"||le==="boolean")&&(y=null);var pe=!1;if(y===null)pe=!0;else switch(le){case"string":case"number":pe=!0;break;case"object":switch(y.$$typeof){case o:case a:pe=!0}}if(pe)return pe=y,ae=ae(pe),y=ne===""?"."+Ze(pe,0):ne,re(ae)?(Y="",y!=null&&(Y=y.replace(En,"$&/")+"/"),hn(ae,T,Y,"",function(en){return en})):ae!=null&&(An(ae)&&(ae=xe(ae,Y+(!ae.key||pe&&pe.key===ae.key?"":(""+ae.key).replace(En,"$&/")+"/")+y)),T.push(ae)),1;if(pe=0,ne=ne===""?".":ne+":",re(y))for(var ce=0;ce<y.length;ce++){le=y[ce];var ye=ne+Ze(le,ce);pe+=hn(le,T,Y,ye,ae)}else if(ye=q(y),typeof ye=="function")for(y=ye.call(y),ce=0;!(le=y.next()).done;)le=le.value,ye=ne+Ze(le,ce++),pe+=hn(le,T,Y,ye,ae);else if(le==="object")throw T=String(y),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.");return pe}function On(y,T,Y){if(y==null)return y;var ne=[],ae=0;return hn(y,ne,"","",function(le){return T.call(Y,le,ae++)}),ne}function $e(y){if(y._status===-1){var T=y._result;T=T(),T.then(function(Y){(y._status===0||y._status===-1)&&(y._status=1,y._result=Y)},function(Y){(y._status===0||y._status===-1)&&(y._status=2,y._result=Y)}),y._status===-1&&(y._status=0,y._result=T)}if(y._status===1)return y._result.default;throw y._result}var Pe={current:null},L={transition:null},W={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:L,ReactCurrentOwner:ie};function j(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:On,forEach:function(y,T,Y){On(y,function(){T.apply(this,arguments)},Y)},count:function(y){var T=0;return On(y,function(){T++}),T},toArray:function(y){return On(y,function(T){return T})||[]},only:function(y){if(!An(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},Z.Component=O,Z.Fragment=s,Z.Profiler=d,Z.PureComponent=ee,Z.StrictMode=u,Z.Suspense=P,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,Z.act=j,Z.cloneElement=function(y,T,Y){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var ne=N({},y.props),ae=y.key,le=y.ref,pe=y._owner;if(T!=null){if(T.ref!==void 0&&(le=T.ref,pe=ie.current),T.key!==void 0&&(ae=""+T.key),y.type&&y.type.defaultProps)var ce=y.type.defaultProps;for(ye in T)te.call(T,ye)&&!ue.hasOwnProperty(ye)&&(ne[ye]=T[ye]===void 0&&ce!==void 0?ce[ye]:T[ye])}var ye=arguments.length-2;if(ye===1)ne.children=Y;else if(1<ye){ce=Array(ye);for(var en=0;en<ye;en++)ce[en]=arguments[en+2];ne.children=ce}return{$$typeof:o,type:y.type,key:ae,ref:le,props:ne,_owner:pe}},Z.createContext=function(y){return y={$$typeof:h,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:f,_context:y},y.Consumer=y},Z.createElement=ke,Z.createFactory=function(y){var T=ke.bind(null,y);return T.type=y,T},Z.createRef=function(){return{current:null}},Z.forwardRef=function(y){return{$$typeof:x,render:y}},Z.isValidElement=An,Z.lazy=function(y){return{$$typeof:_,_payload:{_status:-1,_result:y},_init:$e}},Z.memo=function(y,T){return{$$typeof:E,type:y,compare:T===void 0?null:T}},Z.startTransition=function(y){var T=L.transition;L.transition={};try{y()}finally{L.transition=T}},Z.unstable_act=j,Z.useCallback=function(y,T){return Pe.current.useCallback(y,T)},Z.useContext=function(y){return Pe.current.useContext(y)},Z.useDebugValue=function(){},Z.useDeferredValue=function(y){return Pe.current.useDeferredValue(y)},Z.useEffect=function(y,T){return Pe.current.useEffect(y,T)},Z.useId=function(){return Pe.current.useId()},Z.useImperativeHandle=function(y,T,Y){return Pe.current.useImperativeHandle(y,T,Y)},Z.useInsertionEffect=function(y,T){return Pe.current.useInsertionEffect(y,T)},Z.useLayoutEffect=function(y,T){return Pe.current.useLayoutEffect(y,T)},Z.useMemo=function(y,T){return Pe.current.useMemo(y,T)},Z.useReducer=function(y,T,Y){return Pe.current.useReducer(y,T,Y)},Z.useRef=function(y){return Pe.current.useRef(y)},Z.useState=function(y){return Pe.current.useState(y)},Z.useSyncExternalStore=function(y,T,Y){return Pe.current.useSyncExternalStore(y,T,Y)},Z.useTransition=function(){return Pe.current.useTransition()},Z.version="18.3.1",Z}var Rc;function Rl(){return Rc||(Rc=1,ml.exports=Tp()),ml.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc;function zp(){if(Nc)return Br;Nc=1;var o=Rl(),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function h(x,P,E){var _,A={},q=null,J=null;E!==void 0&&(q=""+E),P.key!==void 0&&(q=""+P.key),P.ref!==void 0&&(J=P.ref);for(_ in P)u.call(P,_)&&!f.hasOwnProperty(_)&&(A[_]=P[_]);if(x&&x.defaultProps)for(_ in P=x.defaultProps,P)A[_]===void 0&&(A[_]=P[_]);return{$$typeof:a,type:x,key:q,ref:J,props:A,_owner:d.current}}return Br.Fragment=s,Br.jsx=h,Br.jsxs=h,Br}var Dc;function Rp(){return Dc||(Dc=1,hl.exports=zp()),hl.exports}var fe=Rp(),er=Rl();const Zt=Cp(er);var ii={},gl={exports:{}},Je={},yl={exports:{}},vl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac;function Np(){return Ac||(Ac=1,function(o){function a(L,W){var j=L.length;L.push(W);e:for(;0<j;){var y=j-1>>>1,T=L[y];if(0<d(T,W))L[y]=W,L[j]=T,j=y;else break e}}function s(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var W=L[0],j=L.pop();if(j!==W){L[0]=j;e:for(var y=0,T=L.length,Y=T>>>1;y<Y;){var ne=2*(y+1)-1,ae=L[ne],le=ne+1,pe=L[le];if(0>d(ae,j))le<T&&0>d(pe,ae)?(L[y]=pe,L[le]=j,y=le):(L[y]=ae,L[ne]=j,y=ne);else if(le<T&&0>d(pe,j))L[y]=pe,L[le]=j,y=le;else break e}}return W}function d(L,W){var j=L.sortIndex-W.sortIndex;return j!==0?j:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,x=h.now();o.unstable_now=function(){return h.now()-x}}var P=[],E=[],_=1,A=null,q=3,J=!1,N=!1,S=!1,O=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(L){for(var W=s(E);W!==null;){if(W.callback===null)u(E);else if(W.startTime<=L)u(E),W.sortIndex=W.expirationTime,a(P,W);else break;W=s(E)}}function re(L){if(S=!1,K(L),!N)if(s(P)!==null)N=!0,$e(te);else{var W=s(E);W!==null&&Pe(re,W.startTime-L)}}function te(L,W){N=!1,S&&(S=!1,G(ke),ke=-1),J=!0;var j=q;try{for(K(W),A=s(P);A!==null&&(!(A.expirationTime>W)||L&&!ct());){var y=A.callback;if(typeof y=="function"){A.callback=null,q=A.priorityLevel;var T=y(A.expirationTime<=W);W=o.unstable_now(),typeof T=="function"?A.callback=T:A===s(P)&&u(P),K(W)}else u(P);A=s(P)}if(A!==null)var Y=!0;else{var ne=s(E);ne!==null&&Pe(re,ne.startTime-W),Y=!1}return Y}finally{A=null,q=j,J=!1}}var ie=!1,ue=null,ke=-1,xe=5,An=-1;function ct(){return!(o.unstable_now()-An<xe)}function En(){if(ue!==null){var L=o.unstable_now();An=L;var W=!0;try{W=ue(!0,L)}finally{W?Ze():(ie=!1,ue=null)}}else ie=!1}var Ze;if(typeof ee=="function")Ze=function(){ee(En)};else if(typeof MessageChannel<"u"){var hn=new MessageChannel,On=hn.port2;hn.port1.onmessage=En,Ze=function(){On.postMessage(null)}}else Ze=function(){O(En,0)};function $e(L){ue=L,ie||(ie=!0,Ze())}function Pe(L,W){ke=O(function(){L(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_continueExecution=function(){N||J||(N=!0,$e(te))},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return q},o.unstable_getFirstCallbackNode=function(){return s(P)},o.unstable_next=function(L){switch(q){case 1:case 2:case 3:var W=3;break;default:W=q}var j=q;q=W;try{return L()}finally{q=j}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var j=q;q=L;try{return W()}finally{q=j}},o.unstable_scheduleCallback=function(L,W,j){var y=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?y+j:y):j=y,L){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=j+T,L={id:_++,callback:W,priorityLevel:L,startTime:j,expirationTime:T,sortIndex:-1},j>y?(L.sortIndex=j,a(E,L),s(P)===null&&L===s(E)&&(S?(G(ke),ke=-1):S=!0,Pe(re,j-y))):(L.sortIndex=T,a(P,L),N||J||(N=!0,$e(te))),L},o.unstable_shouldYield=ct,o.unstable_wrapCallback=function(L){var W=q;return function(){var j=q;q=W;try{return L.apply(this,arguments)}finally{q=j}}}}(vl)),vl}var Lc;function Dp(){return Lc||(Lc=1,yl.exports=Np()),yl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc;function Ap(){if(Mc)return Je;Mc=1;var o=Rl(),a=Dp();function s(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,d={};function f(e,n){h(e,n),h(e+"Capture",n)}function h(e,n){for(d[e]=n,e=0;e<n.length;e++)u.add(n[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),P=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},A={};function q(e){return P.call(A,e)?!0:P.call(_,e)?!1:E.test(e)?A[e]=!0:(_[e]=!0,!1)}function J(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N(e,n,t,r){if(n===null||typeof n>"u"||J(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function S(e,n,t,r,i,l,c){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=c}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){O[e]=new S(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];O[n]=new S(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){O[e]=new S(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){O[e]=new S(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){O[e]=new S(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){O[e]=new S(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){O[e]=new S(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){O[e]=new S(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){O[e]=new S(e,5,!1,e.toLowerCase(),null,!1,!1)});var G=/[\-:]([a-z])/g;function ee(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(G,ee);O[n]=new S(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(G,ee);O[n]=new S(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(G,ee);O[n]=new S(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){O[e]=new S(e,1,!1,e.toLowerCase(),null,!1,!1)}),O.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){O[e]=new S(e,1,!1,e.toLowerCase(),null,!0,!0)});function K(e,n,t,r){var i=O.hasOwnProperty(n)?O[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(N(n,t,i,r)&&(t=null),r||i===null?q(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var re=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,te=Symbol.for("react.element"),ie=Symbol.for("react.portal"),ue=Symbol.for("react.fragment"),ke=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),An=Symbol.for("react.provider"),ct=Symbol.for("react.context"),En=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),hn=Symbol.for("react.suspense_list"),On=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),L=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,y;function T(e){if(y===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||""}return`
`+y+e}var Y=!1;function ne(e,n){if(!e||Y)return"";Y=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(k){var r=k}Reflect.construct(e,[],n)}else{try{n.call()}catch(k){r=k}e.call(n.prototype)}else{try{throw Error()}catch(k){r=k}e()}}catch(k){if(k&&r&&typeof k.stack=="string"){for(var i=k.stack.split(`
`),l=r.stack.split(`
`),c=i.length-1,p=l.length-1;1<=c&&0<=p&&i[c]!==l[p];)p--;for(;1<=c&&0<=p;c--,p--)if(i[c]!==l[p]){if(c!==1||p!==1)do if(c--,p--,0>p||i[c]!==l[p]){var m=`
`+i[c].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=c&&0<=p);break}}}finally{Y=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?T(e):""}function ae(e){switch(e.tag){case 5:return T(e.type);case 16:return T("Lazy");case 13:return T("Suspense");case 19:return T("SuspenseList");case 0:case 2:case 15:return e=ne(e.type,!1),e;case 11:return e=ne(e.type.render,!1),e;case 1:return e=ne(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ue:return"Fragment";case ie:return"Portal";case xe:return"Profiler";case ke:return"StrictMode";case Ze:return"Suspense";case hn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ct:return(e.displayName||"Context")+".Consumer";case An:return(e._context.displayName||"Context")+".Provider";case En:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case On:return n=e.displayName||null,n!==null?n:le(e.type)||"Memo";case $e:n=e._payload,e=e._init;try{return le(e(n))}catch{}}return null}function pe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(n);case 8:return n===ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function en(e){var n=ye(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(c){r=""+c,l.call(this,c)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xr(e){e._valueTracker||(e._valueTracker=en(e))}function Ml(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ye(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xi(e,n){var t=n.checked;return j({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Fl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ce(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function jl(e,n){n=n.checked,n!=null&&K(e,"checked",n,!1)}function wi(e,n){jl(e,n);var t=ce(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Si(e,n.type,t):n.hasOwnProperty("defaultValue")&&Si(e,n.type,ce(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Il(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Si(e,n,t){(n!=="number"||Kr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var rr=Array.isArray;function _t(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ce(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Pi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return j({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ql(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(s(92));if(rr(t)){if(1<t.length)throw Error(s(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ce(t)}}function Ul(e,n){var t=ce(n.value),r=ce(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Bl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Hl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ei(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Hl(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,Vl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function or(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nd=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(e){Nd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ir[n]=ir[e]})});function $l(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ir.hasOwnProperty(e)&&ir[e]?(""+n).trim():n+"px"}function Wl(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=$l(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Dd=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oi(e,n){if(n){if(Dd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function _i(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function Ti(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zi=null,Ct=null,Tt=null;function Ql(e){if(e=_r(e)){if(typeof zi!="function")throw Error(s(280));var n=e.stateNode;n&&(n=ko(n),zi(e.stateNode,e.type,n))}}function Xl(e){Ct?Tt?Tt.push(e):Tt=[e]:Ct=e}function Kl(){if(Ct){var e=Ct,n=Tt;if(Tt=Ct=null,Ql(e),n)for(e=0;e<n.length;e++)Ql(n[e])}}function Yl(e,n){return e(n)}function Jl(){}var Ri=!1;function Gl(e,n,t){if(Ri)return e(n,t);Ri=!0;try{return Yl(e,n,t)}finally{Ri=!1,(Ct!==null||Tt!==null)&&(Jl(),Kl())}}function ar(e,n){var t=e.stateNode;if(t===null)return null;var r=ko(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var Ni=!1;if(x)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Ni=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Ni=!1}function Ad(e,n,t,r,i,l,c,p,m){var k=Array.prototype.slice.call(arguments,3);try{n.apply(t,k)}catch(z){this.onError(z)}}var sr=!1,Jr=null,Gr=!1,Di=null,Ld={onError:function(e){sr=!0,Jr=e}};function Md(e,n,t,r,i,l,c,p,m){sr=!1,Jr=null,Ad.apply(Ld,arguments)}function Fd(e,n,t,r,i,l,c,p,m){if(Md.apply(this,arguments),sr){if(sr){var k=Jr;sr=!1,Jr=null}else throw Error(s(198));Gr||(Gr=!0,Di=k)}}function dt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Zl(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function es(e){if(dt(e)!==e)throw Error(s(188))}function jd(e){var n=e.alternate;if(!n){if(n=dt(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return es(i),e;if(l===r)return es(i),n;l=l.sibling}throw Error(s(188))}if(t.return!==r.return)t=i,r=l;else{for(var c=!1,p=i.child;p;){if(p===t){c=!0,t=i,r=l;break}if(p===r){c=!0,r=i,t=l;break}p=p.sibling}if(!c){for(p=l.child;p;){if(p===t){c=!0,t=l,r=i;break}if(p===r){c=!0,r=l,t=i;break}p=p.sibling}if(!c)throw Error(s(189))}}if(t.alternate!==r)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function ns(e){return e=jd(e),e!==null?ts(e):null}function ts(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ts(e);if(n!==null)return n;e=e.sibling}return null}var rs=a.unstable_scheduleCallback,os=a.unstable_cancelCallback,Id=a.unstable_shouldYield,qd=a.unstable_requestPaint,Oe=a.unstable_now,Ud=a.unstable_getCurrentPriorityLevel,Ai=a.unstable_ImmediatePriority,is=a.unstable_UserBlockingPriority,Zr=a.unstable_NormalPriority,Bd=a.unstable_LowPriority,as=a.unstable_IdlePriority,eo=null,_n=null;function Hd(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(eo,e,void 0,(e.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:Wd,Vd=Math.log,$d=Math.LN2;function Wd(e){return e>>>=0,e===0?32:31-(Vd(e)/$d|0)|0}var no=64,to=4194304;function ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ro(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,c=t&268435455;if(c!==0){var p=c&~i;p!==0?r=ur(p):(l&=c,l!==0&&(r=ur(l)))}else c=t&~i,c!==0?r=ur(c):l!==0&&(r=ur(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-mn(n),i=1<<t,r|=e[t],n&=~i;return r}function Qd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-mn(l),p=1<<c,m=i[c];m===-1?(!(p&t)||p&r)&&(i[c]=Qd(p,n)):m<=n&&(e.expiredLanes|=p),l&=~p}}function Li(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ls(){var e=no;return no<<=1,!(no&4194240)&&(no=64),e}function Mi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function cr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-mn(n),e[n]=t}function Kd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-mn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Fi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-mn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var de=0;function ss(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var us,ji,cs,ds,fs,Ii=!1,oo=[],Vn=null,$n=null,Wn=null,dr=new Map,fr=new Map,Qn=[],Yd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ps(e,n){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":dr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(n.pointerId)}}function pr(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=_r(n),n!==null&&ji(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Jd(e,n,t,r,i){switch(n){case"focusin":return Vn=pr(Vn,e,n,t,r,i),!0;case"dragenter":return $n=pr($n,e,n,t,r,i),!0;case"mouseover":return Wn=pr(Wn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return dr.set(l,pr(dr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,fr.set(l,pr(fr.get(l)||null,e,n,t,r,i)),!0}return!1}function hs(e){var n=ft(e.target);if(n!==null){var t=dt(n);if(t!==null){if(n=t.tag,n===13){if(n=Zl(t),n!==null){e.blockedOn=n,fs(e.priority,function(){cs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function io(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ui(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ci=r,t.target.dispatchEvent(r),Ci=null}else return n=_r(t),n!==null&&ji(n),e.blockedOn=t,!1;n.shift()}return!0}function ms(e,n,t){io(e)&&t.delete(n)}function Gd(){Ii=!1,Vn!==null&&io(Vn)&&(Vn=null),$n!==null&&io($n)&&($n=null),Wn!==null&&io(Wn)&&(Wn=null),dr.forEach(ms),fr.forEach(ms)}function hr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ii||(Ii=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Gd)))}function mr(e){function n(i){return hr(i,e)}if(0<oo.length){hr(oo[0],e);for(var t=1;t<oo.length;t++){var r=oo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Vn!==null&&hr(Vn,e),$n!==null&&hr($n,e),Wn!==null&&hr(Wn,e),dr.forEach(n),fr.forEach(n),t=0;t<Qn.length;t++)r=Qn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qn.length&&(t=Qn[0],t.blockedOn===null);)hs(t),t.blockedOn===null&&Qn.shift()}var zt=re.ReactCurrentBatchConfig,ao=!0;function Zd(e,n,t,r){var i=de,l=zt.transition;zt.transition=null;try{de=1,qi(e,n,t,r)}finally{de=i,zt.transition=l}}function ef(e,n,t,r){var i=de,l=zt.transition;zt.transition=null;try{de=4,qi(e,n,t,r)}finally{de=i,zt.transition=l}}function qi(e,n,t,r){if(ao){var i=Ui(e,n,t,r);if(i===null)oa(e,n,r,lo,t),ps(e,r);else if(Jd(i,e,n,t,r))r.stopPropagation();else if(ps(e,r),n&4&&-1<Yd.indexOf(e)){for(;i!==null;){var l=_r(i);if(l!==null&&us(l),l=Ui(e,n,t,r),l===null&&oa(e,n,r,lo,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else oa(e,n,r,null,t)}}var lo=null;function Ui(e,n,t,r){if(lo=null,e=Ti(r),e=ft(e),e!==null)if(n=dt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Zl(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return lo=e,null}function gs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ud()){case Ai:return 1;case is:return 4;case Zr:case Bd:return 16;case as:return 536870912;default:return 16}default:return 16}}var Xn=null,Bi=null,so=null;function ys(){if(so)return so;var e,n=Bi,t=n.length,r,i="value"in Xn?Xn.value:Xn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var c=t-e;for(r=1;r<=c&&n[t-r]===i[l-r];r++);return so=i.slice(e,1<r?1-r:void 0)}function uo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function co(){return!0}function vs(){return!1}function nn(e){function n(t,r,i,l,c){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(l):l[p]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?co:vs,this.isPropagationStopped=vs,this}return j(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),n}var Rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=nn(Rt),gr=j({},Rt,{view:0,detail:0}),nf=nn(gr),Vi,$i,yr,fo=j({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(Vi=e.screenX-yr.screenX,$i=e.screenY-yr.screenY):$i=Vi=0,yr=e),Vi)},movementY:function(e){return"movementY"in e?e.movementY:$i}}),bs=nn(fo),tf=j({},fo,{dataTransfer:0}),rf=nn(tf),of=j({},gr,{relatedTarget:0}),Wi=nn(of),af=j({},Rt,{animationName:0,elapsedTime:0,pseudoElement:0}),lf=nn(af),sf=j({},Rt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uf=nn(sf),cf=j({},Rt,{data:0}),ks=nn(cf),df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=pf[e])?!!n[e]:!1}function Qi(){return hf}var mf=j({},gr,{key:function(e){if(e.key){var n=df[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qi,charCode:function(e){return e.type==="keypress"?uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gf=nn(mf),yf=j({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xs=nn(yf),vf=j({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qi}),bf=nn(vf),kf=j({},Rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),xf=nn(kf),wf=j({},fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sf=nn(wf),Pf=[9,13,27,32],Xi=x&&"CompositionEvent"in window,vr=null;x&&"documentMode"in document&&(vr=document.documentMode);var Ef=x&&"TextEvent"in window&&!vr,ws=x&&(!Xi||vr&&8<vr&&11>=vr),Ss=" ",Ps=!1;function Es(e,n){switch(e){case"keyup":return Pf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Os(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nt=!1;function Of(e,n){switch(e){case"compositionend":return Os(n);case"keypress":return n.which!==32?null:(Ps=!0,Ss);case"textInput":return e=n.data,e===Ss&&Ps?null:e;default:return null}}function _f(e,n){if(Nt)return e==="compositionend"||!Xi&&Es(e,n)?(e=ys(),so=Bi=Xn=null,Nt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ws&&n.locale!=="ko"?null:n.data;default:return null}}var Cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _s(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Cf[e.type]:n==="textarea"}function Cs(e,n,t,r){Xl(r),n=yo(n,"onChange"),0<n.length&&(t=new Hi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var br=null,kr=null;function Tf(e){Ws(e,0)}function po(e){var n=Ft(e);if(Ml(n))return e}function zf(e,n){if(e==="change")return n}var Ts=!1;if(x){var Ki;if(x){var Yi="oninput"in document;if(!Yi){var zs=document.createElement("div");zs.setAttribute("oninput","return;"),Yi=typeof zs.oninput=="function"}Ki=Yi}else Ki=!1;Ts=Ki&&(!document.documentMode||9<document.documentMode)}function Rs(){br&&(br.detachEvent("onpropertychange",Ns),kr=br=null)}function Ns(e){if(e.propertyName==="value"&&po(kr)){var n=[];Cs(n,kr,e,Ti(e)),Gl(Tf,n)}}function Rf(e,n,t){e==="focusin"?(Rs(),br=n,kr=t,br.attachEvent("onpropertychange",Ns)):e==="focusout"&&Rs()}function Nf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return po(kr)}function Df(e,n){if(e==="click")return po(n)}function Af(e,n){if(e==="input"||e==="change")return po(n)}function Lf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var gn=typeof Object.is=="function"?Object.is:Lf;function xr(e,n){if(gn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!P.call(n,i)||!gn(e[i],n[i]))return!1}return!0}function Ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function As(e,n){var t=Ds(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ds(t)}}function Ls(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ls(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ms(){for(var e=window,n=Kr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Kr(e.document)}return n}function Ji(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Mf(e){var n=Ms(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ls(t.ownerDocument.documentElement,t)){if(r!==null&&Ji(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=As(t,l);var c=As(t,r);i&&c&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(c.node,c.offset)):(n.setEnd(c.node,c.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ff=x&&"documentMode"in document&&11>=document.documentMode,Dt=null,Gi=null,wr=null,Zi=!1;function Fs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Zi||Dt==null||Dt!==Kr(r)||(r=Dt,"selectionStart"in r&&Ji(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&xr(wr,r)||(wr=r,r=yo(Gi,"onSelect"),0<r.length&&(n=new Hi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Dt)))}function ho(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var At={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},ea={},js={};x&&(js=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function mo(e){if(ea[e])return ea[e];if(!At[e])return e;var n=At[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in js)return ea[e]=n[t];return e}var Is=mo("animationend"),qs=mo("animationiteration"),Us=mo("animationstart"),Bs=mo("transitionend"),Hs=new Map,Vs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,n){Hs.set(e,n),f(n,[e])}for(var na=0;na<Vs.length;na++){var ta=Vs[na],jf=ta.toLowerCase(),If=ta[0].toUpperCase()+ta.slice(1);Kn(jf,"on"+If)}Kn(Is,"onAnimationEnd"),Kn(qs,"onAnimationIteration"),Kn(Us,"onAnimationStart"),Kn("dblclick","onDoubleClick"),Kn("focusin","onFocus"),Kn("focusout","onBlur"),Kn(Bs,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));function $s(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Fd(r,n,void 0,e),e.currentTarget=null}function Ws(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var c=r.length-1;0<=c;c--){var p=r[c],m=p.instance,k=p.currentTarget;if(p=p.listener,m!==l&&i.isPropagationStopped())break e;$s(i,p,k),l=m}else for(c=0;c<r.length;c++){if(p=r[c],m=p.instance,k=p.currentTarget,p=p.listener,m!==l&&i.isPropagationStopped())break e;$s(i,p,k),l=m}}}if(Gr)throw e=Di,Gr=!1,Di=null,e}function me(e,n){var t=n[ca];t===void 0&&(t=n[ca]=new Set);var r=e+"__bubble";t.has(r)||(Qs(n,e,2,!1),t.add(r))}function ra(e,n,t){var r=0;n&&(r|=4),Qs(t,e,r,n)}var go="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[go]){e[go]=!0,u.forEach(function(t){t!=="selectionchange"&&(qf.has(t)||ra(t,!1,e),ra(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[go]||(n[go]=!0,ra("selectionchange",!1,n))}}function Qs(e,n,t,r){switch(gs(n)){case 1:var i=Zd;break;case 4:i=ef;break;default:i=qi}t=i.bind(null,n,t,e),i=void 0,!Ni||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function oa(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var p=r.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(c===4)for(c=r.return;c!==null;){var m=c.tag;if((m===3||m===4)&&(m=c.stateNode.containerInfo,m===i||m.nodeType===8&&m.parentNode===i))return;c=c.return}for(;p!==null;){if(c=ft(p),c===null)return;if(m=c.tag,m===5||m===6){r=l=c;continue e}p=p.parentNode}}r=r.return}Gl(function(){var k=l,z=Ti(t),R=[];e:{var C=Hs.get(e);if(C!==void 0){var M=Hi,I=e;switch(e){case"keypress":if(uo(t)===0)break e;case"keydown":case"keyup":M=gf;break;case"focusin":I="focus",M=Wi;break;case"focusout":I="blur",M=Wi;break;case"beforeblur":case"afterblur":M=Wi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=bf;break;case Is:case qs:case Us:M=lf;break;case Bs:M=xf;break;case"scroll":M=nf;break;case"wheel":M=Sf;break;case"copy":case"cut":case"paste":M=uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=xs}var U=(n&4)!==0,_e=!U&&e==="scroll",v=U?C!==null?C+"Capture":null:C;U=[];for(var g=k,b;g!==null;){b=g;var D=b.stateNode;if(b.tag===5&&D!==null&&(b=D,v!==null&&(D=ar(g,v),D!=null&&U.push(Er(g,D,b)))),_e)break;g=g.return}0<U.length&&(C=new M(C,I,null,t,z),R.push({event:C,listeners:U}))}}if(!(n&7)){e:{if(C=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",C&&t!==Ci&&(I=t.relatedTarget||t.fromElement)&&(ft(I)||I[Ln]))break e;if((M||C)&&(C=z.window===z?z:(C=z.ownerDocument)?C.defaultView||C.parentWindow:window,M?(I=t.relatedTarget||t.toElement,M=k,I=I?ft(I):null,I!==null&&(_e=dt(I),I!==_e||I.tag!==5&&I.tag!==6)&&(I=null)):(M=null,I=k),M!==I)){if(U=bs,D="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(U=xs,D="onPointerLeave",v="onPointerEnter",g="pointer"),_e=M==null?C:Ft(M),b=I==null?C:Ft(I),C=new U(D,g+"leave",M,t,z),C.target=_e,C.relatedTarget=b,D=null,ft(z)===k&&(U=new U(v,g+"enter",I,t,z),U.target=b,U.relatedTarget=_e,D=U),_e=D,M&&I)n:{for(U=M,v=I,g=0,b=U;b;b=Lt(b))g++;for(b=0,D=v;D;D=Lt(D))b++;for(;0<g-b;)U=Lt(U),g--;for(;0<b-g;)v=Lt(v),b--;for(;g--;){if(U===v||v!==null&&U===v.alternate)break n;U=Lt(U),v=Lt(v)}U=null}else U=null;M!==null&&Xs(R,C,M,U,!1),I!==null&&_e!==null&&Xs(R,_e,I,U,!0)}}e:{if(C=k?Ft(k):window,M=C.nodeName&&C.nodeName.toLowerCase(),M==="select"||M==="input"&&C.type==="file")var B=zf;else if(_s(C))if(Ts)B=Af;else{B=Nf;var V=Rf}else(M=C.nodeName)&&M.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(B=Df);if(B&&(B=B(e,k))){Cs(R,B,t,z);break e}V&&V(e,C,k),e==="focusout"&&(V=C._wrapperState)&&V.controlled&&C.type==="number"&&Si(C,"number",C.value)}switch(V=k?Ft(k):window,e){case"focusin":(_s(V)||V.contentEditable==="true")&&(Dt=V,Gi=k,wr=null);break;case"focusout":wr=Gi=Dt=null;break;case"mousedown":Zi=!0;break;case"contextmenu":case"mouseup":case"dragend":Zi=!1,Fs(R,t,z);break;case"selectionchange":if(Ff)break;case"keydown":case"keyup":Fs(R,t,z)}var $;if(Xi)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Nt?Es(e,t)&&(Q="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Q="onCompositionStart");Q&&(ws&&t.locale!=="ko"&&(Nt||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Nt&&($=ys()):(Xn=z,Bi="value"in Xn?Xn.value:Xn.textContent,Nt=!0)),V=yo(k,Q),0<V.length&&(Q=new ks(Q,e,null,t,z),R.push({event:Q,listeners:V}),$?Q.data=$:($=Os(t),$!==null&&(Q.data=$)))),($=Ef?Of(e,t):_f(e,t))&&(k=yo(k,"onBeforeInput"),0<k.length&&(z=new ks("onBeforeInput","beforeinput",null,t,z),R.push({event:z,listeners:k}),z.data=$))}Ws(R,n)})}function Er(e,n,t){return{instance:e,listener:n,currentTarget:t}}function yo(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ar(e,t),l!=null&&r.unshift(Er(e,l,i)),l=ar(e,n),l!=null&&r.push(Er(e,l,i))),e=e.return}return r}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xs(e,n,t,r,i){for(var l=n._reactName,c=[];t!==null&&t!==r;){var p=t,m=p.alternate,k=p.stateNode;if(m!==null&&m===r)break;p.tag===5&&k!==null&&(p=k,i?(m=ar(t,l),m!=null&&c.unshift(Er(t,m,p))):i||(m=ar(t,l),m!=null&&c.push(Er(t,m,p)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var Uf=/\r\n?/g,Bf=/\u0000|\uFFFD/g;function Ks(e){return(typeof e=="string"?e:""+e).replace(Uf,`
`).replace(Bf,"")}function vo(e,n,t){if(n=Ks(n),Ks(e)!==n&&t)throw Error(s(425))}function bo(){}var ia=null,aa=null;function la(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sa=typeof setTimeout=="function"?setTimeout:void 0,Hf=typeof clearTimeout=="function"?clearTimeout:void 0,Ys=typeof Promise=="function"?Promise:void 0,Vf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ys<"u"?function(e){return Ys.resolve(null).then(e).catch($f)}:sa;function $f(e){setTimeout(function(){throw e})}function ua(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),mr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);mr(n)}function Yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Js(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Mt=Math.random().toString(36).slice(2),Cn="__reactFiber$"+Mt,Or="__reactProps$"+Mt,Ln="__reactContainer$"+Mt,ca="__reactEvents$"+Mt,Wf="__reactListeners$"+Mt,Qf="__reactHandles$"+Mt;function ft(e){var n=e[Cn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ln]||t[Cn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Js(e);e!==null;){if(t=e[Cn])return t;e=Js(e)}return n}e=t,t=e.parentNode}return null}function _r(e){return e=e[Cn]||e[Ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function ko(e){return e[Or]||null}var da=[],jt=-1;function Jn(e){return{current:e}}function ge(e){0>jt||(e.current=da[jt],da[jt]=null,jt--)}function he(e,n){jt++,da[jt]=e.current,e.current=n}var Gn={},je=Jn(Gn),We=Jn(!1),pt=Gn;function It(e,n){var t=e.type.contextTypes;if(!t)return Gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(e){return e=e.childContextTypes,e!=null}function xo(){ge(We),ge(je)}function Gs(e,n,t){if(je.current!==Gn)throw Error(s(168));he(je,n),he(We,t)}function Zs(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(s(108,pe(e)||"Unknown",i));return j({},t,r)}function wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gn,pt=je.current,he(je,e),he(We,We.current),!0}function eu(e,n,t){var r=e.stateNode;if(!r)throw Error(s(169));t?(e=Zs(e,n,pt),r.__reactInternalMemoizedMergedChildContext=e,ge(We),ge(je),he(je,e)):ge(We),he(We,t)}var Mn=null,So=!1,fa=!1;function nu(e){Mn===null?Mn=[e]:Mn.push(e)}function Xf(e){So=!0,nu(e)}function Zn(){if(!fa&&Mn!==null){fa=!0;var e=0,n=de;try{var t=Mn;for(de=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Mn=null,So=!1}catch(i){throw Mn!==null&&(Mn=Mn.slice(e+1)),rs(Ai,Zn),i}finally{de=n,fa=!1}}return null}var qt=[],Ut=0,Po=null,Eo=0,sn=[],un=0,ht=null,Fn=1,jn="";function mt(e,n){qt[Ut++]=Eo,qt[Ut++]=Po,Po=e,Eo=n}function tu(e,n,t){sn[un++]=Fn,sn[un++]=jn,sn[un++]=ht,ht=e;var r=Fn;e=jn;var i=32-mn(r)-1;r&=~(1<<i),t+=1;var l=32-mn(n)+i;if(30<l){var c=i-i%5;l=(r&(1<<c)-1).toString(32),r>>=c,i-=c,Fn=1<<32-mn(n)+i|t<<i|r,jn=l+e}else Fn=1<<l|t<<i|r,jn=e}function pa(e){e.return!==null&&(mt(e,1),tu(e,1,0))}function ha(e){for(;e===Po;)Po=qt[--Ut],qt[Ut]=null,Eo=qt[--Ut],qt[Ut]=null;for(;e===ht;)ht=sn[--un],sn[un]=null,jn=sn[--un],sn[un]=null,Fn=sn[--un],sn[un]=null}var tn=null,rn=null,ve=!1,yn=null;function ru(e,n){var t=pn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ou(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,tn=e,rn=Yn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,tn=e,rn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ht!==null?{id:Fn,overflow:jn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=pn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,tn=e,rn=null,!0):!1;default:return!1}}function ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ga(e){if(ve){var n=rn;if(n){var t=n;if(!ou(e,n)){if(ma(e))throw Error(s(418));n=Yn(t.nextSibling);var r=tn;n&&ou(e,n)?ru(r,t):(e.flags=e.flags&-4097|2,ve=!1,tn=e)}}else{if(ma(e))throw Error(s(418));e.flags=e.flags&-4097|2,ve=!1,tn=e}}}function iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tn=e}function Oo(e){if(e!==tn)return!1;if(!ve)return iu(e),ve=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!la(e.type,e.memoizedProps)),n&&(n=rn)){if(ma(e))throw au(),Error(s(418));for(;n;)ru(e,n),n=Yn(n.nextSibling)}if(iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){rn=Yn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}rn=null}}else rn=tn?Yn(e.stateNode.nextSibling):null;return!0}function au(){for(var e=rn;e;)e=Yn(e.nextSibling)}function Bt(){rn=tn=null,ve=!1}function ya(e){yn===null?yn=[e]:yn.push(e)}var Kf=re.ReactCurrentBatchConfig;function Cr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(s(309));var r=t.stateNode}if(!r)throw Error(s(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(c){var p=i.refs;c===null?delete p[l]:p[l]=c},n._stringRef=l,n)}if(typeof e!="string")throw Error(s(284));if(!t._owner)throw Error(s(290,e))}return e}function _o(e,n){throw e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function lu(e){var n=e._init;return n(e._payload)}function su(e){function n(v,g){if(e){var b=v.deletions;b===null?(v.deletions=[g],v.flags|=16):b.push(g)}}function t(v,g){if(!e)return null;for(;g!==null;)n(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=lt(v,g),v.index=0,v.sibling=null,v}function l(v,g,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<g?(v.flags|=2,g):b):(v.flags|=2,g)):(v.flags|=1048576,g)}function c(v){return e&&v.alternate===null&&(v.flags|=2),v}function p(v,g,b,D){return g===null||g.tag!==6?(g=sl(b,v.mode,D),g.return=v,g):(g=i(g,b),g.return=v,g)}function m(v,g,b,D){var B=b.type;return B===ue?z(v,g,b.props.children,D,b.key):g!==null&&(g.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===$e&&lu(B)===g.type)?(D=i(g,b.props),D.ref=Cr(v,g,b),D.return=v,D):(D=Jo(b.type,b.key,b.props,null,v.mode,D),D.ref=Cr(v,g,b),D.return=v,D)}function k(v,g,b,D){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=ul(b,v.mode,D),g.return=v,g):(g=i(g,b.children||[]),g.return=v,g)}function z(v,g,b,D,B){return g===null||g.tag!==7?(g=St(b,v.mode,D,B),g.return=v,g):(g=i(g,b),g.return=v,g)}function R(v,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=sl(""+g,v.mode,b),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case te:return b=Jo(g.type,g.key,g.props,null,v.mode,b),b.ref=Cr(v,null,g),b.return=v,b;case ie:return g=ul(g,v.mode,b),g.return=v,g;case $e:var D=g._init;return R(v,D(g._payload),b)}if(rr(g)||W(g))return g=St(g,v.mode,b,null),g.return=v,g;_o(v,g)}return null}function C(v,g,b,D){var B=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return B!==null?null:p(v,g,""+b,D);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case te:return b.key===B?m(v,g,b,D):null;case ie:return b.key===B?k(v,g,b,D):null;case $e:return B=b._init,C(v,g,B(b._payload),D)}if(rr(b)||W(b))return B!==null?null:z(v,g,b,D,null);_o(v,b)}return null}function M(v,g,b,D,B){if(typeof D=="string"&&D!==""||typeof D=="number")return v=v.get(b)||null,p(g,v,""+D,B);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case te:return v=v.get(D.key===null?b:D.key)||null,m(g,v,D,B);case ie:return v=v.get(D.key===null?b:D.key)||null,k(g,v,D,B);case $e:var V=D._init;return M(v,g,b,V(D._payload),B)}if(rr(D)||W(D))return v=v.get(b)||null,z(g,v,D,B,null);_o(g,D)}return null}function I(v,g,b,D){for(var B=null,V=null,$=g,Q=g=0,Le=null;$!==null&&Q<b.length;Q++){$.index>Q?(Le=$,$=null):Le=$.sibling;var se=C(v,$,b[Q],D);if(se===null){$===null&&($=Le);break}e&&$&&se.alternate===null&&n(v,$),g=l(se,g,Q),V===null?B=se:V.sibling=se,V=se,$=Le}if(Q===b.length)return t(v,$),ve&&mt(v,Q),B;if($===null){for(;Q<b.length;Q++)$=R(v,b[Q],D),$!==null&&(g=l($,g,Q),V===null?B=$:V.sibling=$,V=$);return ve&&mt(v,Q),B}for($=r(v,$);Q<b.length;Q++)Le=M($,v,Q,b[Q],D),Le!==null&&(e&&Le.alternate!==null&&$.delete(Le.key===null?Q:Le.key),g=l(Le,g,Q),V===null?B=Le:V.sibling=Le,V=Le);return e&&$.forEach(function(st){return n(v,st)}),ve&&mt(v,Q),B}function U(v,g,b,D){var B=W(b);if(typeof B!="function")throw Error(s(150));if(b=B.call(b),b==null)throw Error(s(151));for(var V=B=null,$=g,Q=g=0,Le=null,se=b.next();$!==null&&!se.done;Q++,se=b.next()){$.index>Q?(Le=$,$=null):Le=$.sibling;var st=C(v,$,se.value,D);if(st===null){$===null&&($=Le);break}e&&$&&st.alternate===null&&n(v,$),g=l(st,g,Q),V===null?B=st:V.sibling=st,V=st,$=Le}if(se.done)return t(v,$),ve&&mt(v,Q),B;if($===null){for(;!se.done;Q++,se=b.next())se=R(v,se.value,D),se!==null&&(g=l(se,g,Q),V===null?B=se:V.sibling=se,V=se);return ve&&mt(v,Q),B}for($=r(v,$);!se.done;Q++,se=b.next())se=M($,v,Q,se.value,D),se!==null&&(e&&se.alternate!==null&&$.delete(se.key===null?Q:se.key),g=l(se,g,Q),V===null?B=se:V.sibling=se,V=se);return e&&$.forEach(function(_p){return n(v,_p)}),ve&&mt(v,Q),B}function _e(v,g,b,D){if(typeof b=="object"&&b!==null&&b.type===ue&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case te:e:{for(var B=b.key,V=g;V!==null;){if(V.key===B){if(B=b.type,B===ue){if(V.tag===7){t(v,V.sibling),g=i(V,b.props.children),g.return=v,v=g;break e}}else if(V.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===$e&&lu(B)===V.type){t(v,V.sibling),g=i(V,b.props),g.ref=Cr(v,V,b),g.return=v,v=g;break e}t(v,V);break}else n(v,V);V=V.sibling}b.type===ue?(g=St(b.props.children,v.mode,D,b.key),g.return=v,v=g):(D=Jo(b.type,b.key,b.props,null,v.mode,D),D.ref=Cr(v,g,b),D.return=v,v=D)}return c(v);case ie:e:{for(V=b.key;g!==null;){if(g.key===V)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){t(v,g.sibling),g=i(g,b.children||[]),g.return=v,v=g;break e}else{t(v,g);break}else n(v,g);g=g.sibling}g=ul(b,v.mode,D),g.return=v,v=g}return c(v);case $e:return V=b._init,_e(v,g,V(b._payload),D)}if(rr(b))return I(v,g,b,D);if(W(b))return U(v,g,b,D);_o(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(t(v,g.sibling),g=i(g,b),g.return=v,v=g):(t(v,g),g=sl(b,v.mode,D),g.return=v,v=g),c(v)):t(v,g)}return _e}var Ht=su(!0),uu=su(!1),Co=Jn(null),To=null,Vt=null,va=null;function ba(){va=Vt=To=null}function ka(e){var n=Co.current;ge(Co),e._currentValue=n}function xa(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function $t(e,n){To=e,va=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Xe=!0),e.firstContext=null)}function cn(e){var n=e._currentValue;if(va!==e)if(e={context:e,memoizedValue:n,next:null},Vt===null){if(To===null)throw Error(s(308));Vt=e,To.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return n}var gt=null;function wa(e){gt===null?gt=[e]:gt.push(e)}function cu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,wa(n)):(t.next=i.next,i.next=t),n.interleaved=t,In(e,r)}function In(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var et=!1;function Sa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function nt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,In(e,t)}return i=r.interleaved,i===null?(n.next=n,wa(r)):(n.next=i.next,i.next=n),r.interleaved=n,In(e,t)}function zo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Fi(e,t)}}function fu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var c={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=c:l=l.next=c,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ro(e,n,t,r){var i=e.updateQueue;et=!1;var l=i.firstBaseUpdate,c=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var m=p,k=m.next;m.next=null,c===null?l=k:c.next=k,c=m;var z=e.alternate;z!==null&&(z=z.updateQueue,p=z.lastBaseUpdate,p!==c&&(p===null?z.firstBaseUpdate=k:p.next=k,z.lastBaseUpdate=m))}if(l!==null){var R=i.baseState;c=0,z=k=m=null,p=l;do{var C=p.lane,M=p.eventTime;if((r&C)===C){z!==null&&(z=z.next={eventTime:M,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var I=e,U=p;switch(C=n,M=t,U.tag){case 1:if(I=U.payload,typeof I=="function"){R=I.call(M,R,C);break e}R=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=U.payload,C=typeof I=="function"?I.call(M,R,C):I,C==null)break e;R=j({},R,C);break e;case 2:et=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,C=i.effects,C===null?i.effects=[p]:C.push(p))}else M={eventTime:M,lane:C,tag:p.tag,payload:p.payload,callback:p.callback,next:null},z===null?(k=z=M,m=R):z=z.next=M,c|=C;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;C=p,p=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);if(z===null&&(m=R),i.baseState=m,i.firstBaseUpdate=k,i.lastBaseUpdate=z,n=i.shared.interleaved,n!==null){i=n;do c|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);bt|=c,e.lanes=c,e.memoizedState=R}}function pu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(s(191,i));i.call(r)}}}var Tr={},Tn=Jn(Tr),zr=Jn(Tr),Rr=Jn(Tr);function yt(e){if(e===Tr)throw Error(s(174));return e}function Pa(e,n){switch(he(Rr,n),he(zr,e),he(Tn,Tr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ei(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ei(n,e)}ge(Tn),he(Tn,n)}function Wt(){ge(Tn),ge(zr),ge(Rr)}function hu(e){yt(Rr.current);var n=yt(Tn.current),t=Ei(n,e.type);n!==t&&(he(zr,e),he(Tn,t))}function Ea(e){zr.current===e&&(ge(Tn),ge(zr))}var we=Jn(0);function No(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oa=[];function _a(){for(var e=0;e<Oa.length;e++)Oa[e]._workInProgressVersionPrimary=null;Oa.length=0}var Do=re.ReactCurrentDispatcher,Ca=re.ReactCurrentBatchConfig,vt=0,Se=null,ze=null,De=null,Ao=!1,Nr=!1,Dr=0,Yf=0;function Ie(){throw Error(s(321))}function Ta(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!gn(e[t],n[t]))return!1;return!0}function za(e,n,t,r,i,l){if(vt=l,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Do.current=e===null||e.memoizedState===null?ep:np,e=t(r,i),Nr){l=0;do{if(Nr=!1,Dr=0,25<=l)throw Error(s(301));l+=1,De=ze=null,n.updateQueue=null,Do.current=tp,e=t(r,i)}while(Nr)}if(Do.current=Fo,n=ze!==null&&ze.next!==null,vt=0,De=ze=Se=null,Ao=!1,n)throw Error(s(300));return e}function Ra(){var e=Dr!==0;return Dr=0,e}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Se.memoizedState=De=e:De=De.next=e,De}function dn(){if(ze===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=De===null?Se.memoizedState:De.next;if(n!==null)De=n,ze=e;else{if(e===null)throw Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},De===null?Se.memoizedState=De=e:De=De.next=e}return De}function Ar(e,n){return typeof n=="function"?n(e):n}function Na(e){var n=dn(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var r=ze,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var c=i.next;i.next=l.next,l.next=c}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var p=c=null,m=null,k=l;do{var z=k.lane;if((vt&z)===z)m!==null&&(m=m.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),r=k.hasEagerState?k.eagerState:e(r,k.action);else{var R={lane:z,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};m===null?(p=m=R,c=r):m=m.next=R,Se.lanes|=z,bt|=z}k=k.next}while(k!==null&&k!==l);m===null?c=r:m.next=p,gn(r,n.memoizedState)||(Xe=!0),n.memoizedState=r,n.baseState=c,n.baseQueue=m,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,Se.lanes|=l,bt|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Da(e){var n=dn(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var c=i=i.next;do l=e(l,c.action),c=c.next;while(c!==i);gn(l,n.memoizedState)||(Xe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function mu(){}function gu(e,n){var t=Se,r=dn(),i=n(),l=!gn(r.memoizedState,i);if(l&&(r.memoizedState=i,Xe=!0),r=r.queue,Aa(bu.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||De!==null&&De.memoizedState.tag&1){if(t.flags|=2048,Lr(9,vu.bind(null,t,r,i,n),void 0,null),Ae===null)throw Error(s(349));vt&30||yu(t,n,i)}return i}function yu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Se.updateQueue,n===null?(n={lastEffect:null,stores:null},Se.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function vu(e,n,t,r){n.value=t,n.getSnapshot=r,ku(n)&&xu(e)}function bu(e,n,t){return t(function(){ku(n)&&xu(e)})}function ku(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!gn(e,t)}catch{return!0}}function xu(e){var n=In(e,1);n!==null&&xn(n,e,1,-1)}function wu(e){var n=zn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:e},n.queue=e,e=e.dispatch=Zf.bind(null,Se,e),[n.memoizedState,e]}function Lr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Se.updateQueue,n===null?(n={lastEffect:null,stores:null},Se.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Su(){return dn().memoizedState}function Lo(e,n,t,r){var i=zn();Se.flags|=e,i.memoizedState=Lr(1|n,t,void 0,r===void 0?null:r)}function Mo(e,n,t,r){var i=dn();r=r===void 0?null:r;var l=void 0;if(ze!==null){var c=ze.memoizedState;if(l=c.destroy,r!==null&&Ta(r,c.deps)){i.memoizedState=Lr(n,t,l,r);return}}Se.flags|=e,i.memoizedState=Lr(1|n,t,l,r)}function Pu(e,n){return Lo(8390656,8,e,n)}function Aa(e,n){return Mo(2048,8,e,n)}function Eu(e,n){return Mo(4,2,e,n)}function Ou(e,n){return Mo(4,4,e,n)}function _u(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cu(e,n,t){return t=t!=null?t.concat([e]):null,Mo(4,4,_u.bind(null,n,e),t)}function La(){}function Tu(e,n){var t=dn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ta(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function zu(e,n){var t=dn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ta(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ru(e,n,t){return vt&21?(gn(t,n)||(t=ls(),Se.lanes|=t,bt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=t)}function Jf(e,n){var t=de;de=t!==0&&4>t?t:4,e(!0);var r=Ca.transition;Ca.transition={};try{e(!1),n()}finally{de=t,Ca.transition=r}}function Nu(){return dn().memoizedState}function Gf(e,n,t){var r=it(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Du(e))Au(n,t);else if(t=cu(e,n,t,r),t!==null){var i=Ve();xn(t,e,r,i),Lu(t,n,r)}}function Zf(e,n,t){var r=it(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Du(e))Au(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var c=n.lastRenderedState,p=l(c,t);if(i.hasEagerState=!0,i.eagerState=p,gn(p,c)){var m=n.interleaved;m===null?(i.next=i,wa(n)):(i.next=m.next,m.next=i),n.interleaved=i;return}}catch{}finally{}t=cu(e,n,i,r),t!==null&&(i=Ve(),xn(t,e,r,i),Lu(t,n,r))}}function Du(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function Au(e,n){Nr=Ao=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Lu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Fi(e,t)}}var Fo={readContext:cn,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},ep={readContext:cn,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:cn,useEffect:Pu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Lo(4194308,4,_u.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Lo(4194308,4,e,n)},useInsertionEffect:function(e,n){return Lo(4,2,e,n)},useMemo:function(e,n){var t=zn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=zn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Gf.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:wu,useDebugValue:La,useDeferredValue:function(e){return zn().memoizedState=e},useTransition:function(){var e=wu(!1),n=e[0];return e=Jf.bind(null,e[1]),zn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Se,i=zn();if(ve){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),Ae===null)throw Error(s(349));vt&30||yu(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Pu(bu.bind(null,r,l,e),[e]),r.flags|=2048,Lr(9,vu.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=zn(),n=Ae.identifierPrefix;if(ve){var t=jn,r=Fn;t=(r&~(1<<32-mn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Dr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Yf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},np={readContext:cn,useCallback:Tu,useContext:cn,useEffect:Aa,useImperativeHandle:Cu,useInsertionEffect:Eu,useLayoutEffect:Ou,useMemo:zu,useReducer:Na,useRef:Su,useState:function(){return Na(Ar)},useDebugValue:La,useDeferredValue:function(e){var n=dn();return Ru(n,ze.memoizedState,e)},useTransition:function(){var e=Na(Ar)[0],n=dn().memoizedState;return[e,n]},useMutableSource:mu,useSyncExternalStore:gu,useId:Nu,unstable_isNewReconciler:!1},tp={readContext:cn,useCallback:Tu,useContext:cn,useEffect:Aa,useImperativeHandle:Cu,useInsertionEffect:Eu,useLayoutEffect:Ou,useMemo:zu,useReducer:Da,useRef:Su,useState:function(){return Da(Ar)},useDebugValue:La,useDeferredValue:function(e){var n=dn();return ze===null?n.memoizedState=e:Ru(n,ze.memoizedState,e)},useTransition:function(){var e=Da(Ar)[0],n=dn().memoizedState;return[e,n]},useMutableSource:mu,useSyncExternalStore:gu,useId:Nu,unstable_isNewReconciler:!1};function vn(e,n){if(e&&e.defaultProps){n=j({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ma(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:j({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var jo={isMounted:function(e){return(e=e._reactInternals)?dt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ve(),i=it(e),l=qn(r,i);l.payload=n,t!=null&&(l.callback=t),n=nt(e,l,i),n!==null&&(xn(n,e,i,r),zo(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ve(),i=it(e),l=qn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=nt(e,l,i),n!==null&&(xn(n,e,i,r),zo(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ve(),r=it(e),i=qn(t,r);i.tag=2,n!=null&&(i.callback=n),n=nt(e,i,r),n!==null&&(xn(n,e,r,t),zo(n,e,r))}};function Mu(e,n,t,r,i,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,c):n.prototype&&n.prototype.isPureReactComponent?!xr(t,r)||!xr(i,l):!0}function Fu(e,n,t){var r=!1,i=Gn,l=n.contextType;return typeof l=="object"&&l!==null?l=cn(l):(i=Qe(n)?pt:je.current,r=n.contextTypes,l=(r=r!=null)?It(e,i):Gn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=jo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function ju(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&jo.enqueueReplaceState(n,n.state,null)}function Fa(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Sa(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=cn(l):(l=Qe(n)?pt:je.current,i.context=It(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Ma(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&jo.enqueueReplaceState(i,i.state,null),Ro(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qt(e,n){try{var t="",r=n;do t+=ae(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function ja(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ia(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var rp=typeof WeakMap=="function"?WeakMap:Map;function Iu(e,n,t){t=qn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){$o||($o=!0,el=r),Ia(e,n)},t}function qu(e,n,t){t=qn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Ia(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Ia(e,n),typeof r!="function"&&(rt===null?rt=new Set([this]):rt.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})}),t}function Uu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new rp;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=yp.bind(null,e,n,t),n.then(e,e))}function Bu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Hu(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=qn(-1,1),n.tag=2,nt(t,n,1))),t.lanes|=1),e)}var op=re.ReactCurrentOwner,Xe=!1;function He(e,n,t,r){n.child=e===null?uu(n,null,t,r):Ht(n,e.child,t,r)}function Vu(e,n,t,r,i){t=t.render;var l=n.ref;return $t(n,i),r=za(e,n,t,r,l,i),t=Ra(),e!==null&&!Xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Un(e,n,i)):(ve&&t&&pa(n),n.flags|=1,He(e,n,r,i),n.child)}function $u(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!ll(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Wu(e,n,l,r,i)):(e=Jo(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var c=l.memoizedProps;if(t=t.compare,t=t!==null?t:xr,t(c,r)&&e.ref===n.ref)return Un(e,n,i)}return n.flags|=1,e=lt(l,r),e.ref=n.ref,e.return=n,n.child=e}function Wu(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(xr(l,r)&&e.ref===n.ref)if(Xe=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Xe=!0);else return n.lanes=e.lanes,Un(e,n,i)}return qa(e,n,t,r,i)}function Qu(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Kt,on),on|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,he(Kt,on),on|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,he(Kt,on),on|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,he(Kt,on),on|=r;return He(e,n,i,t),n.child}function Xu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function qa(e,n,t,r,i){var l=Qe(t)?pt:je.current;return l=It(n,l),$t(n,i),t=za(e,n,t,r,l,i),r=Ra(),e!==null&&!Xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Un(e,n,i)):(ve&&r&&pa(n),n.flags|=1,He(e,n,t,i),n.child)}function Ku(e,n,t,r,i){if(Qe(t)){var l=!0;wo(n)}else l=!1;if($t(n,i),n.stateNode===null)qo(e,n),Fu(n,t,r),Fa(n,t,r,i),r=!0;else if(e===null){var c=n.stateNode,p=n.memoizedProps;c.props=p;var m=c.context,k=t.contextType;typeof k=="object"&&k!==null?k=cn(k):(k=Qe(t)?pt:je.current,k=It(n,k));var z=t.getDerivedStateFromProps,R=typeof z=="function"||typeof c.getSnapshotBeforeUpdate=="function";R||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==r||m!==k)&&ju(n,c,r,k),et=!1;var C=n.memoizedState;c.state=C,Ro(n,r,c,i),m=n.memoizedState,p!==r||C!==m||We.current||et?(typeof z=="function"&&(Ma(n,t,z,r),m=n.memoizedState),(p=et||Mu(n,t,p,r,C,m,k))?(R||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=m),c.props=r,c.state=m,c.context=k,r=p):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,du(e,n),p=n.memoizedProps,k=n.type===n.elementType?p:vn(n.type,p),c.props=k,R=n.pendingProps,C=c.context,m=t.contextType,typeof m=="object"&&m!==null?m=cn(m):(m=Qe(t)?pt:je.current,m=It(n,m));var M=t.getDerivedStateFromProps;(z=typeof M=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==R||C!==m)&&ju(n,c,r,m),et=!1,C=n.memoizedState,c.state=C,Ro(n,r,c,i);var I=n.memoizedState;p!==R||C!==I||We.current||et?(typeof M=="function"&&(Ma(n,t,M,r),I=n.memoizedState),(k=et||Mu(n,t,k,r,C,I,m)||!1)?(z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,I,m),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,I,m)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=I),c.props=r,c.state=I,c.context=m,r=k):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),r=!1)}return Ua(e,n,t,r,l,i)}function Ua(e,n,t,r,i,l){Xu(e,n);var c=(n.flags&128)!==0;if(!r&&!c)return i&&eu(n,t,!1),Un(e,n,l);r=n.stateNode,op.current=n;var p=c&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&c?(n.child=Ht(n,e.child,null,l),n.child=Ht(n,null,p,l)):He(e,n,p,l),n.memoizedState=r.state,i&&eu(n,t,!0),n.child}function Yu(e){var n=e.stateNode;n.pendingContext?Gs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Gs(e,n.context,!1),Pa(e,n.containerInfo)}function Ju(e,n,t,r,i){return Bt(),ya(i),n.flags|=256,He(e,n,t,r),n.child}var Ba={dehydrated:null,treeContext:null,retryLane:0};function Ha(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gu(e,n,t){var r=n.pendingProps,i=we.current,l=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(we,i&1),e===null)return ga(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(c=r.children,e=r.fallback,l?(r=n.mode,l=n.child,c={mode:"hidden",children:c},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=c):l=Go(c,r,0,null),e=St(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Ha(t),n.memoizedState=Ba,e):Va(n,c));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return ip(e,n,c,r,p,i,t);if(l){l=r.fallback,c=n.mode,i=e.child,p=i.sibling;var m={mode:"hidden",children:r.children};return!(c&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=m,n.deletions=null):(r=lt(i,m),r.subtreeFlags=i.subtreeFlags&14680064),p!==null?l=lt(p,l):(l=St(l,c,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,c=e.child.memoizedState,c=c===null?Ha(t):{baseLanes:c.baseLanes|t,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~t,n.memoizedState=Ba,r}return l=e.child,e=l.sibling,r=lt(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Va(e,n){return n=Go({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Io(e,n,t,r){return r!==null&&ya(r),Ht(n,e.child,null,t),e=Va(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ip(e,n,t,r,i,l,c){if(t)return n.flags&256?(n.flags&=-257,r=ja(Error(s(422))),Io(e,n,c,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Go({mode:"visible",children:r.children},i,0,null),l=St(l,i,c,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Ht(n,e.child,null,c),n.child.memoizedState=Ha(c),n.memoizedState=Ba,l);if(!(n.mode&1))return Io(e,n,c,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var p=r.dgst;return r=p,l=Error(s(419)),r=ja(l,r,void 0),Io(e,n,c,r)}if(p=(c&e.childLanes)!==0,Xe||p){if(r=Ae,r!==null){switch(c&-c){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|c)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,In(e,i),xn(r,e,i,-1))}return al(),r=ja(Error(s(421))),Io(e,n,c,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=vp.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,rn=Yn(i.nextSibling),tn=n,ve=!0,yn=null,e!==null&&(sn[un++]=Fn,sn[un++]=jn,sn[un++]=ht,Fn=e.id,jn=e.overflow,ht=n),n=Va(n,r.children),n.flags|=4096,n)}function Zu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),xa(e.return,n,t)}function $a(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function ec(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(He(e,n,r.children,t),r=we.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zu(e,t,n);else if(e.tag===19)Zu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(we,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&No(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),$a(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&No(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}$a(n,!0,t,null,l);break;case"together":$a(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Un(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),bt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=lt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=lt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ap(e,n,t){switch(n.tag){case 3:Yu(n),Bt();break;case 5:hu(n);break;case 1:Qe(n.type)&&wo(n);break;case 4:Pa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;he(Co,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),n.flags|=128,null):t&n.child.childLanes?Gu(e,n,t):(he(we,we.current&1),e=Un(e,n,t),e!==null?e.sibling:null);he(we,we.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return ec(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return n.lanes=0,Qu(e,n,t)}return Un(e,n,t)}var nc,Wa,tc,rc;nc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Wa=function(){},tc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,yt(Tn.current);var l=null;switch(t){case"input":i=xi(e,i),r=xi(e,r),l=[];break;case"select":i=j({},i,{value:void 0}),r=j({},r,{value:void 0}),l=[];break;case"textarea":i=Pi(e,i),r=Pi(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=bo)}Oi(t,r);var c;t=null;for(k in i)if(!r.hasOwnProperty(k)&&i.hasOwnProperty(k)&&i[k]!=null)if(k==="style"){var p=i[k];for(c in p)p.hasOwnProperty(c)&&(t||(t={}),t[c]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(d.hasOwnProperty(k)?l||(l=[]):(l=l||[]).push(k,null));for(k in r){var m=r[k];if(p=i!=null?i[k]:void 0,r.hasOwnProperty(k)&&m!==p&&(m!=null||p!=null))if(k==="style")if(p){for(c in p)!p.hasOwnProperty(c)||m&&m.hasOwnProperty(c)||(t||(t={}),t[c]="");for(c in m)m.hasOwnProperty(c)&&p[c]!==m[c]&&(t||(t={}),t[c]=m[c])}else t||(l||(l=[]),l.push(k,t)),t=m;else k==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,p=p?p.__html:void 0,m!=null&&p!==m&&(l=l||[]).push(k,m)):k==="children"?typeof m!="string"&&typeof m!="number"||(l=l||[]).push(k,""+m):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(d.hasOwnProperty(k)?(m!=null&&k==="onScroll"&&me("scroll",e),l||p===m||(l=[])):(l=l||[]).push(k,m))}t&&(l=l||[]).push("style",t);var k=l;(n.updateQueue=k)&&(n.flags|=4)}},rc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Mr(e,n){if(!ve)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function lp(e,n,t){var r=n.pendingProps;switch(ha(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return Qe(n.type)&&xo(),qe(n),null;case 3:return r=n.stateNode,Wt(),ge(We),ge(je),_a(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,yn!==null&&(rl(yn),yn=null))),Wa(e,n),qe(n),null;case 5:Ea(n);var i=yt(Rr.current);if(t=n.type,e!==null&&n.stateNode!=null)tc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(e=yt(Tn.current),Oo(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Cn]=n,r[Or]=l,e=(n.mode&1)!==0,t){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Sr.length;i++)me(Sr[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Fl(r,l),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},me("invalid",r);break;case"textarea":ql(r,l),me("invalid",r)}Oi(t,l),i=null;for(var c in l)if(l.hasOwnProperty(c)){var p=l[c];c==="children"?typeof p=="string"?r.textContent!==p&&(l.suppressHydrationWarning!==!0&&vo(r.textContent,p,e),i=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(l.suppressHydrationWarning!==!0&&vo(r.textContent,p,e),i=["children",""+p]):d.hasOwnProperty(c)&&p!=null&&c==="onScroll"&&me("scroll",r)}switch(t){case"input":Xr(r),Il(r,l,!0);break;case"textarea":Xr(r),Bl(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=bo)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{c=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(t,{is:r.is}):(e=c.createElement(t),t==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,t),e[Cn]=n,e[Or]=r,nc(e,n,!1,!1),n.stateNode=e;e:{switch(c=_i(t,r),t){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<Sr.length;i++)me(Sr[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":Fl(e,r),i=xi(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=j({},r,{value:void 0}),me("invalid",e);break;case"textarea":ql(e,r),i=Pi(e,r),me("invalid",e);break;default:i=r}Oi(t,i),p=i;for(l in p)if(p.hasOwnProperty(l)){var m=p[l];l==="style"?Wl(e,m):l==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Vl(e,m)):l==="children"?typeof m=="string"?(t!=="textarea"||m!=="")&&or(e,m):typeof m=="number"&&or(e,""+m):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(d.hasOwnProperty(l)?m!=null&&l==="onScroll"&&me("scroll",e):m!=null&&K(e,l,m,c))}switch(t){case"input":Xr(e),Il(e,r,!1);break;case"textarea":Xr(e),Bl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ce(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?_t(e,!!r.multiple,l,!1):r.defaultValue!=null&&_t(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=bo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return qe(n),null;case 6:if(e&&n.stateNode!=null)rc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=yt(Rr.current),yt(Tn.current),Oo(n)){if(r=n.stateNode,t=n.memoizedProps,r[Cn]=n,(l=r.nodeValue!==t)&&(e=tn,e!==null))switch(e.tag){case 3:vo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vo(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Cn]=n,n.stateNode=r}return qe(n),null;case 13:if(ge(we),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&rn!==null&&n.mode&1&&!(n.flags&128))au(),Bt(),n.flags|=98560,l=!1;else if(l=Oo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Cn]=n}else Bt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;qe(n),l=!1}else yn!==null&&(rl(yn),yn=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||we.current&1?Re===0&&(Re=3):al())),n.updateQueue!==null&&(n.flags|=4),qe(n),null);case 4:return Wt(),Wa(e,n),e===null&&Pr(n.stateNode.containerInfo),qe(n),null;case 10:return ka(n.type._context),qe(n),null;case 17:return Qe(n.type)&&xo(),qe(n),null;case 19:if(ge(we),l=n.memoizedState,l===null)return qe(n),null;if(r=(n.flags&128)!==0,c=l.rendering,c===null)if(r)Mr(l,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(c=No(e),c!==null){for(n.flags|=128,Mr(l,!1),r=c.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return he(we,we.current&1|2),n.child}e=e.sibling}l.tail!==null&&Oe()>Yt&&(n.flags|=128,r=!0,Mr(l,!1),n.lanes=4194304)}else{if(!r)if(e=No(c),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Mr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!ve)return qe(n),null}else 2*Oe()-l.renderingStartTime>Yt&&t!==1073741824&&(n.flags|=128,r=!0,Mr(l,!1),n.lanes=4194304);l.isBackwards?(c.sibling=n.child,n.child=c):(t=l.last,t!==null?t.sibling=c:n.child=c,l.last=c)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Oe(),n.sibling=null,t=we.current,he(we,r?t&1|2:t&1),n):(qe(n),null);case 22:case 23:return il(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?on&1073741824&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function sp(e,n){switch(ha(n),n.tag){case 1:return Qe(n.type)&&xo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wt(),ge(We),ge(je),_a(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ea(n),null;case 13:if(ge(we),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Bt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ge(we),null;case 4:return Wt(),null;case 10:return ka(n.type._context),null;case 22:case 23:return il(),null;case 24:return null;default:return null}}var Uo=!1,Ue=!1,up=typeof WeakSet=="function"?WeakSet:Set,F=null;function Xt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ee(e,n,r)}else t.current=null}function Qa(e,n,t){try{t()}catch(r){Ee(e,n,r)}}var oc=!1;function cp(e,n){if(ia=ao,e=Ms(),Ji(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var c=0,p=-1,m=-1,k=0,z=0,R=e,C=null;n:for(;;){for(var M;R!==t||i!==0&&R.nodeType!==3||(p=c+i),R!==l||r!==0&&R.nodeType!==3||(m=c+r),R.nodeType===3&&(c+=R.nodeValue.length),(M=R.firstChild)!==null;)C=R,R=M;for(;;){if(R===e)break n;if(C===t&&++k===i&&(p=c),C===l&&++z===r&&(m=c),(M=R.nextSibling)!==null)break;R=C,C=R.parentNode}R=M}t=p===-1||m===-1?null:{start:p,end:m}}else t=null}t=t||{start:0,end:0}}else t=null;for(aa={focusedElem:e,selectionRange:t},ao=!1,F=n;F!==null;)if(n=F,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,F=e;else for(;F!==null;){n=F;try{var I=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var U=I.memoizedProps,_e=I.memoizedState,v=n.stateNode,g=v.getSnapshotBeforeUpdate(n.elementType===n.type?U:vn(n.type,U),_e);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=n.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(D){Ee(n,n.return,D)}if(e=n.sibling,e!==null){e.return=n.return,F=e;break}F=n.return}return I=oc,oc=!1,I}function Fr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Qa(n,t,l)}i=i.next}while(i!==r)}}function Bo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Xa(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function ic(e){var n=e.alternate;n!==null&&(e.alternate=null,ic(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Cn],delete n[Or],delete n[ca],delete n[Wf],delete n[Qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ac(e){return e.tag===5||e.tag===3||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ac(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ka(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=bo));else if(r!==4&&(e=e.child,e!==null))for(Ka(e,n,t),e=e.sibling;e!==null;)Ka(e,n,t),e=e.sibling}function Ya(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ya(e,n,t),e=e.sibling;e!==null;)Ya(e,n,t),e=e.sibling}var Me=null,bn=!1;function tt(e,n,t){for(t=t.child;t!==null;)sc(e,n,t),t=t.sibling}function sc(e,n,t){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(eo,t)}catch{}switch(t.tag){case 5:Ue||Xt(t,n);case 6:var r=Me,i=bn;Me=null,tt(e,n,t),Me=r,bn=i,Me!==null&&(bn?(e=Me,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Me.removeChild(t.stateNode));break;case 18:Me!==null&&(bn?(e=Me,t=t.stateNode,e.nodeType===8?ua(e.parentNode,t):e.nodeType===1&&ua(e,t),mr(e)):ua(Me,t.stateNode));break;case 4:r=Me,i=bn,Me=t.stateNode.containerInfo,bn=!0,tt(e,n,t),Me=r,bn=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,c=l.destroy;l=l.tag,c!==void 0&&(l&2||l&4)&&Qa(t,n,c),i=i.next}while(i!==r)}tt(e,n,t);break;case 1:if(!Ue&&(Xt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(p){Ee(t,n,p)}tt(e,n,t);break;case 21:tt(e,n,t);break;case 22:t.mode&1?(Ue=(r=Ue)||t.memoizedState!==null,tt(e,n,t),Ue=r):tt(e,n,t);break;default:tt(e,n,t)}}function uc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new up),n.forEach(function(r){var i=bp.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function kn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,c=n,p=c;e:for(;p!==null;){switch(p.tag){case 5:Me=p.stateNode,bn=!1;break e;case 3:Me=p.stateNode.containerInfo,bn=!0;break e;case 4:Me=p.stateNode.containerInfo,bn=!0;break e}p=p.return}if(Me===null)throw Error(s(160));sc(l,c,i),Me=null,bn=!1;var m=i.alternate;m!==null&&(m.return=null),i.return=null}catch(k){Ee(i,n,k)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)cc(n,e),n=n.sibling}function cc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kn(n,e),Rn(e),r&4){try{Fr(3,e,e.return),Bo(3,e)}catch(U){Ee(e,e.return,U)}try{Fr(5,e,e.return)}catch(U){Ee(e,e.return,U)}}break;case 1:kn(n,e),Rn(e),r&512&&t!==null&&Xt(t,t.return);break;case 5:if(kn(n,e),Rn(e),r&512&&t!==null&&Xt(t,t.return),e.flags&32){var i=e.stateNode;try{or(i,"")}catch(U){Ee(e,e.return,U)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,c=t!==null?t.memoizedProps:l,p=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{p==="input"&&l.type==="radio"&&l.name!=null&&jl(i,l),_i(p,c);var k=_i(p,l);for(c=0;c<m.length;c+=2){var z=m[c],R=m[c+1];z==="style"?Wl(i,R):z==="dangerouslySetInnerHTML"?Vl(i,R):z==="children"?or(i,R):K(i,z,R,k)}switch(p){case"input":wi(i,l);break;case"textarea":Ul(i,l);break;case"select":var C=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var M=l.value;M!=null?_t(i,!!l.multiple,M,!1):C!==!!l.multiple&&(l.defaultValue!=null?_t(i,!!l.multiple,l.defaultValue,!0):_t(i,!!l.multiple,l.multiple?[]:"",!1))}i[Or]=l}catch(U){Ee(e,e.return,U)}}break;case 6:if(kn(n,e),Rn(e),r&4){if(e.stateNode===null)throw Error(s(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(U){Ee(e,e.return,U)}}break;case 3:if(kn(n,e),Rn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{mr(n.containerInfo)}catch(U){Ee(e,e.return,U)}break;case 4:kn(n,e),Rn(e);break;case 13:kn(n,e),Rn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Za=Oe())),r&4&&uc(e);break;case 22:if(z=t!==null&&t.memoizedState!==null,e.mode&1?(Ue=(k=Ue)||z,kn(n,e),Ue=k):kn(n,e),Rn(e),r&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!z&&e.mode&1)for(F=e,z=e.child;z!==null;){for(R=F=z;F!==null;){switch(C=F,M=C.child,C.tag){case 0:case 11:case 14:case 15:Fr(4,C,C.return);break;case 1:Xt(C,C.return);var I=C.stateNode;if(typeof I.componentWillUnmount=="function"){r=C,t=C.return;try{n=r,I.props=n.memoizedProps,I.state=n.memoizedState,I.componentWillUnmount()}catch(U){Ee(r,t,U)}}break;case 5:Xt(C,C.return);break;case 22:if(C.memoizedState!==null){pc(R);continue}}M!==null?(M.return=C,F=M):pc(R)}z=z.sibling}e:for(z=null,R=e;;){if(R.tag===5){if(z===null){z=R;try{i=R.stateNode,k?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(p=R.stateNode,m=R.memoizedProps.style,c=m!=null&&m.hasOwnProperty("display")?m.display:null,p.style.display=$l("display",c))}catch(U){Ee(e,e.return,U)}}}else if(R.tag===6){if(z===null)try{R.stateNode.nodeValue=k?"":R.memoizedProps}catch(U){Ee(e,e.return,U)}}else if((R.tag!==22&&R.tag!==23||R.memoizedState===null||R===e)&&R.child!==null){R.child.return=R,R=R.child;continue}if(R===e)break e;for(;R.sibling===null;){if(R.return===null||R.return===e)break e;z===R&&(z=null),R=R.return}z===R&&(z=null),R.sibling.return=R.return,R=R.sibling}}break;case 19:kn(n,e),Rn(e),r&4&&uc(e);break;case 21:break;default:kn(n,e),Rn(e)}}function Rn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ac(t)){var r=t;break e}t=t.return}throw Error(s(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(or(i,""),r.flags&=-33);var l=lc(e);Ya(e,l,i);break;case 3:case 4:var c=r.stateNode.containerInfo,p=lc(e);Ka(e,p,c);break;default:throw Error(s(161))}}catch(m){Ee(e,e.return,m)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function dp(e,n,t){F=e,dc(e)}function dc(e,n,t){for(var r=(e.mode&1)!==0;F!==null;){var i=F,l=i.child;if(i.tag===22&&r){var c=i.memoizedState!==null||Uo;if(!c){var p=i.alternate,m=p!==null&&p.memoizedState!==null||Ue;p=Uo;var k=Ue;if(Uo=c,(Ue=m)&&!k)for(F=i;F!==null;)c=F,m=c.child,c.tag===22&&c.memoizedState!==null?hc(i):m!==null?(m.return=c,F=m):hc(i);for(;l!==null;)F=l,dc(l),l=l.sibling;F=i,Uo=p,Ue=k}fc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,F=l):fc(e)}}function fc(e){for(;F!==null;){var n=F;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ue||Bo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ue)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:vn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&pu(n,l,r);break;case 3:var c=n.updateQueue;if(c!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}pu(n,c,t)}break;case 5:var p=n.stateNode;if(t===null&&n.flags&4){t=p;var m=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&t.focus();break;case"img":m.src&&(t.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var k=n.alternate;if(k!==null){var z=k.memoizedState;if(z!==null){var R=z.dehydrated;R!==null&&mr(R)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ue||n.flags&512&&Xa(n)}catch(C){Ee(n,n.return,C)}}if(n===e){F=null;break}if(t=n.sibling,t!==null){t.return=n.return,F=t;break}F=n.return}}function pc(e){for(;F!==null;){var n=F;if(n===e){F=null;break}var t=n.sibling;if(t!==null){t.return=n.return,F=t;break}F=n.return}}function hc(e){for(;F!==null;){var n=F;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Bo(4,n)}catch(m){Ee(n,t,m)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(m){Ee(n,i,m)}}var l=n.return;try{Xa(n)}catch(m){Ee(n,l,m)}break;case 5:var c=n.return;try{Xa(n)}catch(m){Ee(n,c,m)}}}catch(m){Ee(n,n.return,m)}if(n===e){F=null;break}var p=n.sibling;if(p!==null){p.return=n.return,F=p;break}F=n.return}}var fp=Math.ceil,Ho=re.ReactCurrentDispatcher,Ja=re.ReactCurrentOwner,fn=re.ReactCurrentBatchConfig,oe=0,Ae=null,Ce=null,Fe=0,on=0,Kt=Jn(0),Re=0,jr=null,bt=0,Vo=0,Ga=0,Ir=null,Ke=null,Za=0,Yt=1/0,Bn=null,$o=!1,el=null,rt=null,Wo=!1,ot=null,Qo=0,qr=0,nl=null,Xo=-1,Ko=0;function Ve(){return oe&6?Oe():Xo!==-1?Xo:Xo=Oe()}function it(e){return e.mode&1?oe&2&&Fe!==0?Fe&-Fe:Kf.transition!==null?(Ko===0&&(Ko=ls()),Ko):(e=de,e!==0||(e=window.event,e=e===void 0?16:gs(e.type)),e):1}function xn(e,n,t,r){if(50<qr)throw qr=0,nl=null,Error(s(185));cr(e,t,r),(!(oe&2)||e!==Ae)&&(e===Ae&&(!(oe&2)&&(Vo|=t),Re===4&&at(e,Fe)),Ye(e,r),t===1&&oe===0&&!(n.mode&1)&&(Yt=Oe()+500,So&&Zn()))}function Ye(e,n){var t=e.callbackNode;Xd(e,n);var r=ro(e,e===Ae?Fe:0);if(r===0)t!==null&&os(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&os(t),n===1)e.tag===0?Xf(gc.bind(null,e)):nu(gc.bind(null,e)),Vf(function(){!(oe&6)&&Zn()}),t=null;else{switch(ss(r)){case 1:t=Ai;break;case 4:t=is;break;case 16:t=Zr;break;case 536870912:t=as;break;default:t=Zr}t=Pc(t,mc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function mc(e,n){if(Xo=-1,Ko=0,oe&6)throw Error(s(327));var t=e.callbackNode;if(Jt()&&e.callbackNode!==t)return null;var r=ro(e,e===Ae?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Yo(e,r);else{n=r;var i=oe;oe|=2;var l=vc();(Ae!==e||Fe!==n)&&(Bn=null,Yt=Oe()+500,xt(e,n));do try{mp();break}catch(p){yc(e,p)}while(!0);ba(),Ho.current=l,oe=i,Ce!==null?n=0:(Ae=null,Fe=0,n=Re)}if(n!==0){if(n===2&&(i=Li(e),i!==0&&(r=i,n=tl(e,i))),n===1)throw t=jr,xt(e,0),at(e,r),Ye(e,Oe()),t;if(n===6)at(e,r);else{if(i=e.current.alternate,!(r&30)&&!pp(i)&&(n=Yo(e,r),n===2&&(l=Li(e),l!==0&&(r=l,n=tl(e,l))),n===1))throw t=jr,xt(e,0),at(e,r),Ye(e,Oe()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(s(345));case 2:wt(e,Ke,Bn);break;case 3:if(at(e,r),(r&130023424)===r&&(n=Za+500-Oe(),10<n)){if(ro(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sa(wt.bind(null,e,Ke,Bn),n);break}wt(e,Ke,Bn);break;case 4:if(at(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var c=31-mn(r);l=1<<c,c=n[c],c>i&&(i=c),r&=~l}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fp(r/1960))-r,10<r){e.timeoutHandle=sa(wt.bind(null,e,Ke,Bn),r);break}wt(e,Ke,Bn);break;case 5:wt(e,Ke,Bn);break;default:throw Error(s(329))}}}return Ye(e,Oe()),e.callbackNode===t?mc.bind(null,e):null}function tl(e,n){var t=Ir;return e.current.memoizedState.isDehydrated&&(xt(e,n).flags|=256),e=Yo(e,n),e!==2&&(n=Ke,Ke=t,n!==null&&rl(n)),e}function rl(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function pp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!gn(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function at(e,n){for(n&=~Ga,n&=~Vo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-mn(n),r=1<<t;e[t]=-1,n&=~r}}function gc(e){if(oe&6)throw Error(s(327));Jt();var n=ro(e,0);if(!(n&1))return Ye(e,Oe()),null;var t=Yo(e,n);if(e.tag!==0&&t===2){var r=Li(e);r!==0&&(n=r,t=tl(e,r))}if(t===1)throw t=jr,xt(e,0),at(e,n),Ye(e,Oe()),t;if(t===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,wt(e,Ke,Bn),Ye(e,Oe()),null}function ol(e,n){var t=oe;oe|=1;try{return e(n)}finally{oe=t,oe===0&&(Yt=Oe()+500,So&&Zn())}}function kt(e){ot!==null&&ot.tag===0&&!(oe&6)&&Jt();var n=oe;oe|=1;var t=fn.transition,r=de;try{if(fn.transition=null,de=1,e)return e()}finally{de=r,fn.transition=t,oe=n,!(oe&6)&&Zn()}}function il(){on=Kt.current,ge(Kt)}function xt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Hf(t)),Ce!==null)for(t=Ce.return;t!==null;){var r=t;switch(ha(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:Wt(),ge(We),ge(je),_a();break;case 5:Ea(r);break;case 4:Wt();break;case 13:ge(we);break;case 19:ge(we);break;case 10:ka(r.type._context);break;case 22:case 23:il()}t=t.return}if(Ae=e,Ce=e=lt(e.current,null),Fe=on=n,Re=0,jr=null,Ga=Vo=bt=0,Ke=Ir=null,gt!==null){for(n=0;n<gt.length;n++)if(t=gt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var c=l.next;l.next=i,r.next=c}t.pending=r}gt=null}return e}function yc(e,n){do{var t=Ce;try{if(ba(),Do.current=Fo,Ao){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ao=!1}if(vt=0,De=ze=Se=null,Nr=!1,Dr=0,Ja.current=null,t===null||t.return===null){Re=1,jr=n,Ce=null;break}e:{var l=e,c=t.return,p=t,m=n;if(n=Fe,p.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var k=m,z=p,R=z.tag;if(!(z.mode&1)&&(R===0||R===11||R===15)){var C=z.alternate;C?(z.updateQueue=C.updateQueue,z.memoizedState=C.memoizedState,z.lanes=C.lanes):(z.updateQueue=null,z.memoizedState=null)}var M=Bu(c);if(M!==null){M.flags&=-257,Hu(M,c,p,l,n),M.mode&1&&Uu(l,k,n),n=M,m=k;var I=n.updateQueue;if(I===null){var U=new Set;U.add(m),n.updateQueue=U}else I.add(m);break e}else{if(!(n&1)){Uu(l,k,n),al();break e}m=Error(s(426))}}else if(ve&&p.mode&1){var _e=Bu(c);if(_e!==null){!(_e.flags&65536)&&(_e.flags|=256),Hu(_e,c,p,l,n),ya(Qt(m,p));break e}}l=m=Qt(m,p),Re!==4&&(Re=2),Ir===null?Ir=[l]:Ir.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var v=Iu(l,m,n);fu(l,v);break e;case 1:p=m;var g=l.type,b=l.stateNode;if(!(l.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(rt===null||!rt.has(b)))){l.flags|=65536,n&=-n,l.lanes|=n;var D=qu(l,p,n);fu(l,D);break e}}l=l.return}while(l!==null)}kc(t)}catch(B){n=B,Ce===t&&t!==null&&(Ce=t=t.return);continue}break}while(!0)}function vc(){var e=Ho.current;return Ho.current=Fo,e===null?Fo:e}function al(){(Re===0||Re===3||Re===2)&&(Re=4),Ae===null||!(bt&268435455)&&!(Vo&268435455)||at(Ae,Fe)}function Yo(e,n){var t=oe;oe|=2;var r=vc();(Ae!==e||Fe!==n)&&(Bn=null,xt(e,n));do try{hp();break}catch(i){yc(e,i)}while(!0);if(ba(),oe=t,Ho.current=r,Ce!==null)throw Error(s(261));return Ae=null,Fe=0,Re}function hp(){for(;Ce!==null;)bc(Ce)}function mp(){for(;Ce!==null&&!Id();)bc(Ce)}function bc(e){var n=Sc(e.alternate,e,on);e.memoizedProps=e.pendingProps,n===null?kc(e):Ce=n,Ja.current=null}function kc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=sp(t,n),t!==null){t.flags&=32767,Ce=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Ce=null;return}}else if(t=lp(t,n,on),t!==null){Ce=t;return}if(n=n.sibling,n!==null){Ce=n;return}Ce=n=e}while(n!==null);Re===0&&(Re=5)}function wt(e,n,t){var r=de,i=fn.transition;try{fn.transition=null,de=1,gp(e,n,t,r)}finally{fn.transition=i,de=r}return null}function gp(e,n,t,r){do Jt();while(ot!==null);if(oe&6)throw Error(s(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Kd(e,l),e===Ae&&(Ce=Ae=null,Fe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Wo||(Wo=!0,Pc(Zr,function(){return Jt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=fn.transition,fn.transition=null;var c=de;de=1;var p=oe;oe|=4,Ja.current=null,cp(e,t),cc(t,e),Mf(aa),ao=!!ia,aa=ia=null,e.current=t,dp(t),qd(),oe=p,de=c,fn.transition=l}else e.current=t;if(Wo&&(Wo=!1,ot=e,Qo=i),l=e.pendingLanes,l===0&&(rt=null),Hd(t.stateNode),Ye(e,Oe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if($o)throw $o=!1,e=el,el=null,e;return Qo&1&&e.tag!==0&&Jt(),l=e.pendingLanes,l&1?e===nl?qr++:(qr=0,nl=e):qr=0,Zn(),null}function Jt(){if(ot!==null){var e=ss(Qo),n=fn.transition,t=de;try{if(fn.transition=null,de=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,Qo=0,oe&6)throw Error(s(331));var i=oe;for(oe|=4,F=e.current;F!==null;){var l=F,c=l.child;if(F.flags&16){var p=l.deletions;if(p!==null){for(var m=0;m<p.length;m++){var k=p[m];for(F=k;F!==null;){var z=F;switch(z.tag){case 0:case 11:case 15:Fr(8,z,l)}var R=z.child;if(R!==null)R.return=z,F=R;else for(;F!==null;){z=F;var C=z.sibling,M=z.return;if(ic(z),z===k){F=null;break}if(C!==null){C.return=M,F=C;break}F=M}}}var I=l.alternate;if(I!==null){var U=I.child;if(U!==null){I.child=null;do{var _e=U.sibling;U.sibling=null,U=_e}while(U!==null)}}F=l}}if(l.subtreeFlags&2064&&c!==null)c.return=l,F=c;else e:for(;F!==null;){if(l=F,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Fr(9,l,l.return)}var v=l.sibling;if(v!==null){v.return=l.return,F=v;break e}F=l.return}}var g=e.current;for(F=g;F!==null;){c=F;var b=c.child;if(c.subtreeFlags&2064&&b!==null)b.return=c,F=b;else e:for(c=g;F!==null;){if(p=F,p.flags&2048)try{switch(p.tag){case 0:case 11:case 15:Bo(9,p)}}catch(B){Ee(p,p.return,B)}if(p===c){F=null;break e}var D=p.sibling;if(D!==null){D.return=p.return,F=D;break e}F=p.return}}if(oe=i,Zn(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(eo,e)}catch{}r=!0}return r}finally{de=t,fn.transition=n}}return!1}function xc(e,n,t){n=Qt(t,n),n=Iu(e,n,1),e=nt(e,n,1),n=Ve(),e!==null&&(cr(e,1,n),Ye(e,n))}function Ee(e,n,t){if(e.tag===3)xc(e,e,t);else for(;n!==null;){if(n.tag===3){xc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rt===null||!rt.has(r))){e=Qt(t,e),e=qu(n,e,1),n=nt(n,e,1),e=Ve(),n!==null&&(cr(n,1,e),Ye(n,e));break}}n=n.return}}function yp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ve(),e.pingedLanes|=e.suspendedLanes&t,Ae===e&&(Fe&t)===t&&(Re===4||Re===3&&(Fe&130023424)===Fe&&500>Oe()-Za?xt(e,0):Ga|=t),Ye(e,n)}function wc(e,n){n===0&&(e.mode&1?(n=to,to<<=1,!(to&130023424)&&(to=4194304)):n=1);var t=Ve();e=In(e,n),e!==null&&(cr(e,n,t),Ye(e,t))}function vp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),wc(e,t)}function bp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(n),wc(e,t)}var Sc;Sc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||We.current)Xe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Xe=!1,ap(e,n,t);Xe=!!(e.flags&131072)}else Xe=!1,ve&&n.flags&1048576&&tu(n,Eo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;qo(e,n),e=n.pendingProps;var i=It(n,je.current);$t(n,t),i=za(null,n,r,e,i,t);var l=Ra();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Qe(r)?(l=!0,wo(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sa(n),i.updater=jo,n.stateNode=i,i._reactInternals=n,Fa(n,r,e,t),n=Ua(null,n,r,!0,l,t)):(n.tag=0,ve&&l&&pa(n),He(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(qo(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=xp(r),e=vn(r,e),i){case 0:n=qa(null,n,r,e,t);break e;case 1:n=Ku(null,n,r,e,t);break e;case 11:n=Vu(null,n,r,e,t);break e;case 14:n=$u(null,n,r,vn(r.type,e),t);break e}throw Error(s(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:vn(r,i),qa(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:vn(r,i),Ku(e,n,r,i,t);case 3:e:{if(Yu(n),e===null)throw Error(s(387));r=n.pendingProps,l=n.memoizedState,i=l.element,du(e,n),Ro(n,r,null,t);var c=n.memoizedState;if(r=c.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Qt(Error(s(423)),n),n=Ju(e,n,r,t,i);break e}else if(r!==i){i=Qt(Error(s(424)),n),n=Ju(e,n,r,t,i);break e}else for(rn=Yn(n.stateNode.containerInfo.firstChild),tn=n,ve=!0,yn=null,t=uu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Bt(),r===i){n=Un(e,n,t);break e}He(e,n,r,t)}n=n.child}return n;case 5:return hu(n),e===null&&ga(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,c=i.children,la(r,i)?c=null:l!==null&&la(r,l)&&(n.flags|=32),Xu(e,n),He(e,n,c,t),n.child;case 6:return e===null&&ga(n),null;case 13:return Gu(e,n,t);case 4:return Pa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ht(n,null,r,t):He(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:vn(r,i),Vu(e,n,r,i,t);case 7:return He(e,n,n.pendingProps,t),n.child;case 8:return He(e,n,n.pendingProps.children,t),n.child;case 12:return He(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,c=i.value,he(Co,r._currentValue),r._currentValue=c,l!==null)if(gn(l.value,c)){if(l.children===i.children&&!We.current){n=Un(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var p=l.dependencies;if(p!==null){c=l.child;for(var m=p.firstContext;m!==null;){if(m.context===r){if(l.tag===1){m=qn(-1,t&-t),m.tag=2;var k=l.updateQueue;if(k!==null){k=k.shared;var z=k.pending;z===null?m.next=m:(m.next=z.next,z.next=m),k.pending=m}}l.lanes|=t,m=l.alternate,m!==null&&(m.lanes|=t),xa(l.return,t,n),p.lanes|=t;break}m=m.next}}else if(l.tag===10)c=l.type===n.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=t,p=c.alternate,p!==null&&(p.lanes|=t),xa(c,t,n),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===n){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}He(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,$t(n,t),i=cn(i),r=r(i),n.flags|=1,He(e,n,r,t),n.child;case 14:return r=n.type,i=vn(r,n.pendingProps),i=vn(r.type,i),$u(e,n,r,i,t);case 15:return Wu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:vn(r,i),qo(e,n),n.tag=1,Qe(r)?(e=!0,wo(n)):e=!1,$t(n,t),Fu(n,r,i),Fa(n,r,i,t),Ua(null,n,r,!0,e,t);case 19:return ec(e,n,t);case 22:return Qu(e,n,t)}throw Error(s(156,n.tag))};function Pc(e,n){return rs(e,n)}function kp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,n,t,r){return new kp(e,n,t,r)}function ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return ll(e)?1:0;if(e!=null){if(e=e.$$typeof,e===En)return 11;if(e===On)return 14}return 2}function lt(e,n){var t=e.alternate;return t===null?(t=pn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Jo(e,n,t,r,i,l){var c=2;if(r=e,typeof e=="function")ll(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case ue:return St(t.children,i,l,n);case ke:c=8,i|=8;break;case xe:return e=pn(12,t,n,i|2),e.elementType=xe,e.lanes=l,e;case Ze:return e=pn(13,t,n,i),e.elementType=Ze,e.lanes=l,e;case hn:return e=pn(19,t,n,i),e.elementType=hn,e.lanes=l,e;case Pe:return Go(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case An:c=10;break e;case ct:c=9;break e;case En:c=11;break e;case On:c=14;break e;case $e:c=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return n=pn(c,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function St(e,n,t,r){return e=pn(7,e,r,n),e.lanes=t,e}function Go(e,n,t,r){return e=pn(22,e,r,n),e.elementType=Pe,e.lanes=t,e.stateNode={isHidden:!1},e}function sl(e,n,t){return e=pn(6,e,null,n),e.lanes=t,e}function ul(e,n,t){return n=pn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function wp(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mi(0),this.expirationTimes=Mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cl(e,n,t,r,i,l,c,p,m){return e=new wp(e,n,t,p,m),n===1?(n=1,l===!0&&(n|=8)):n=0,l=pn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sa(l),e}function Sp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ec(e){if(!e)return Gn;e=e._reactInternals;e:{if(dt(e)!==e||e.tag!==1)throw Error(s(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Qe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(e.tag===1){var t=e.type;if(Qe(t))return Zs(e,t,n)}return n}function Oc(e,n,t,r,i,l,c,p,m){return e=cl(t,r,!0,e,i,l,c,p,m),e.context=Ec(null),t=e.current,r=Ve(),i=it(t),l=qn(r,i),l.callback=n??null,nt(t,l,i),e.current.lanes=i,cr(e,i,r),Ye(e,r),e}function Zo(e,n,t,r){var i=n.current,l=Ve(),c=it(i);return t=Ec(t),n.context===null?n.context=t:n.pendingContext=t,n=qn(l,c),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=nt(i,n,c),e!==null&&(xn(e,i,c,l),zo(e,i,c)),c}function ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function dl(e,n){_c(e,n),(e=e.alternate)&&_c(e,n)}var Cc=typeof reportError=="function"?reportError:function(e){console.error(e)};function fl(e){this._internalRoot=e}ni.prototype.render=fl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));Zo(e,n,null,null)},ni.prototype.unmount=fl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;kt(function(){Zo(null,e,null,null)}),n[Ln]=null}};function ni(e){this._internalRoot=e}ni.prototype.unstable_scheduleHydration=function(e){if(e){var n=ds();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Qn.length&&n!==0&&n<Qn[t].priority;t++);Qn.splice(t,0,e),t===0&&hs(e)}};function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ti(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tc(){}function Pp(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var k=ei(c);l.call(k)}}var c=Oc(n,r,e,0,null,!1,!1,"",Tc);return e._reactRootContainer=c,e[Ln]=c.current,Pr(e.nodeType===8?e.parentNode:e),kt(),c}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var p=r;r=function(){var k=ei(m);p.call(k)}}var m=cl(e,0,!1,null,null,!1,!1,"",Tc);return e._reactRootContainer=m,e[Ln]=m.current,Pr(e.nodeType===8?e.parentNode:e),kt(function(){Zo(n,m,t,r)}),m}function ri(e,n,t,r,i){var l=t._reactRootContainer;if(l){var c=l;if(typeof i=="function"){var p=i;i=function(){var m=ei(c);p.call(m)}}Zo(n,c,e,i)}else c=Pp(t,n,e,i,r);return ei(c)}us=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=ur(n.pendingLanes);t!==0&&(Fi(n,t|1),Ye(n,Oe()),!(oe&6)&&(Yt=Oe()+500,Zn()))}break;case 13:kt(function(){var r=In(e,1);if(r!==null){var i=Ve();xn(r,e,1,i)}}),dl(e,1)}},ji=function(e){if(e.tag===13){var n=In(e,134217728);if(n!==null){var t=Ve();xn(n,e,134217728,t)}dl(e,134217728)}},cs=function(e){if(e.tag===13){var n=it(e),t=In(e,n);if(t!==null){var r=Ve();xn(t,e,n,r)}dl(e,n)}},ds=function(){return de},fs=function(e,n){var t=de;try{return de=e,n()}finally{de=t}},zi=function(e,n,t){switch(n){case"input":if(wi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ko(r);if(!i)throw Error(s(90));Ml(r),wi(r,i)}}}break;case"textarea":Ul(e,t);break;case"select":n=t.value,n!=null&&_t(e,!!t.multiple,n,!1)}},Yl=ol,Jl=kt;var Ep={usingClientEntryPoint:!1,Events:[_r,Ft,ko,Xl,Kl,ol]},Ur={findFiberByHostInstance:ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Op={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ns(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oi.isDisabled&&oi.supportsFiber)try{eo=oi.inject(Op),_n=oi}catch{}}return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ep,Je.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pl(n))throw Error(s(200));return Sp(e,n,null,t)},Je.createRoot=function(e,n){if(!pl(e))throw Error(s(299));var t=!1,r="",i=Cc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=cl(e,1,!1,null,null,t,!1,r,i),e[Ln]=n.current,Pr(e.nodeType===8?e.parentNode:e),new fl(n)},Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=ns(n),e=e===null?null:e.stateNode,e},Je.flushSync=function(e){return kt(e)},Je.hydrate=function(e,n,t){if(!ti(n))throw Error(s(200));return ri(null,e,n,!0,t)},Je.hydrateRoot=function(e,n,t){if(!pl(e))throw Error(s(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",c=Cc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),n=Oc(n,null,e,1,t??null,i,!1,l,c),e[Ln]=n.current,Pr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new ni(n)},Je.render=function(e,n,t){if(!ti(n))throw Error(s(200));return ri(null,e,n,!1,t)},Je.unmountComponentAtNode=function(e){if(!ti(e))throw Error(s(40));return e._reactRootContainer?(kt(function(){ri(null,null,e,!1,function(){e._reactRootContainer=null,e[Ln]=null})}),!0):!1},Je.unstable_batchedUpdates=ol,Je.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ti(t))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return ri(e,n,t,!1,r)},Je.version="18.3.1-next-f1338f8080-20240426",Je}var Fc;function Lp(){if(Fc)return gl.exports;Fc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),gl.exports=Ap(),gl.exports}var jc;function Mp(){if(jc)return ii;jc=1;var o=Lp();return ii.createRoot=o.createRoot,ii.hydrateRoot=o.hydrateRoot,ii}var Fp=Mp();function id(o,a){return function(){return o.apply(a,arguments)}}const{toString:jp}=Object.prototype,{getPrototypeOf:Nl}=Object,hi=(o=>a=>{const s=jp.call(a);return o[s]||(o[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),Pn=o=>(o=o.toLowerCase(),a=>hi(a)===o),mi=o=>a=>typeof a===o,{isArray:nr}=Array,$r=mi("undefined");function Ip(o){return o!==null&&!$r(o)&&o.constructor!==null&&!$r(o.constructor)&&ln(o.constructor.isBuffer)&&o.constructor.isBuffer(o)}const ad=Pn("ArrayBuffer");function qp(o){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(o):a=o&&o.buffer&&ad(o.buffer),a}const Up=mi("string"),ln=mi("function"),ld=mi("number"),gi=o=>o!==null&&typeof o=="object",Bp=o=>o===!0||o===!1,si=o=>{if(hi(o)!=="object")return!1;const a=Nl(o);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in o)&&!(Symbol.iterator in o)},Hp=Pn("Date"),Vp=Pn("File"),$p=Pn("Blob"),Wp=Pn("FileList"),Qp=o=>gi(o)&&ln(o.pipe),Xp=o=>{let a;return o&&(typeof FormData=="function"&&o instanceof FormData||ln(o.append)&&((a=hi(o))==="formdata"||a==="object"&&ln(o.toString)&&o.toString()==="[object FormData]"))},Kp=Pn("URLSearchParams"),[Yp,Jp,Gp,Zp]=["ReadableStream","Request","Response","Headers"].map(Pn),eh=o=>o.trim?o.trim():o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wr(o,a,{allOwnKeys:s=!1}={}){if(o===null||typeof o>"u")return;let u,d;if(typeof o!="object"&&(o=[o]),nr(o))for(u=0,d=o.length;u<d;u++)a.call(null,o[u],u,o);else{const f=s?Object.getOwnPropertyNames(o):Object.keys(o),h=f.length;let x;for(u=0;u<h;u++)x=f[u],a.call(null,o[x],x,o)}}function sd(o,a){a=a.toLowerCase();const s=Object.keys(o);let u=s.length,d;for(;u-- >0;)if(d=s[u],a===d.toLowerCase())return d;return null}const Pt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ud=o=>!$r(o)&&o!==Pt;function Pl(){const{caseless:o}=ud(this)&&this||{},a={},s=(u,d)=>{const f=o&&sd(a,d)||d;si(a[f])&&si(u)?a[f]=Pl(a[f],u):si(u)?a[f]=Pl({},u):nr(u)?a[f]=u.slice():a[f]=u};for(let u=0,d=arguments.length;u<d;u++)arguments[u]&&Wr(arguments[u],s);return a}const nh=(o,a,s,{allOwnKeys:u}={})=>(Wr(a,(d,f)=>{s&&ln(d)?o[f]=id(d,s):o[f]=d},{allOwnKeys:u}),o),th=o=>(o.charCodeAt(0)===65279&&(o=o.slice(1)),o),rh=(o,a,s,u)=>{o.prototype=Object.create(a.prototype,u),o.prototype.constructor=o,Object.defineProperty(o,"super",{value:a.prototype}),s&&Object.assign(o.prototype,s)},oh=(o,a,s,u)=>{let d,f,h;const x={};if(a=a||{},o==null)return a;do{for(d=Object.getOwnPropertyNames(o),f=d.length;f-- >0;)h=d[f],(!u||u(h,o,a))&&!x[h]&&(a[h]=o[h],x[h]=!0);o=s!==!1&&Nl(o)}while(o&&(!s||s(o,a))&&o!==Object.prototype);return a},ih=(o,a,s)=>{o=String(o),(s===void 0||s>o.length)&&(s=o.length),s-=a.length;const u=o.indexOf(a,s);return u!==-1&&u===s},ah=o=>{if(!o)return null;if(nr(o))return o;let a=o.length;if(!ld(a))return null;const s=new Array(a);for(;a-- >0;)s[a]=o[a];return s},lh=(o=>a=>o&&a instanceof o)(typeof Uint8Array<"u"&&Nl(Uint8Array)),sh=(o,a)=>{const u=(o&&o[Symbol.iterator]).call(o);let d;for(;(d=u.next())&&!d.done;){const f=d.value;a.call(o,f[0],f[1])}},uh=(o,a)=>{let s;const u=[];for(;(s=o.exec(a))!==null;)u.push(s);return u},ch=Pn("HTMLFormElement"),dh=o=>o.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,u,d){return u.toUpperCase()+d}),Ic=(({hasOwnProperty:o})=>(a,s)=>o.call(a,s))(Object.prototype),fh=Pn("RegExp"),cd=(o,a)=>{const s=Object.getOwnPropertyDescriptors(o),u={};Wr(s,(d,f)=>{let h;(h=a(d,f,o))!==!1&&(u[f]=h||d)}),Object.defineProperties(o,u)},ph=o=>{cd(o,(a,s)=>{if(ln(o)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const u=o[s];if(ln(u)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},hh=(o,a)=>{const s={},u=d=>{d.forEach(f=>{s[f]=!0})};return nr(o)?u(o):u(String(o).split(a)),s},mh=()=>{},gh=(o,a)=>o!=null&&Number.isFinite(o=+o)?o:a,bl="abcdefghijklmnopqrstuvwxyz",qc="0123456789",dd={DIGIT:qc,ALPHA:bl,ALPHA_DIGIT:bl+bl.toUpperCase()+qc},yh=(o=16,a=dd.ALPHA_DIGIT)=>{let s="";const{length:u}=a;for(;o--;)s+=a[Math.random()*u|0];return s};function vh(o){return!!(o&&ln(o.append)&&o[Symbol.toStringTag]==="FormData"&&o[Symbol.iterator])}const bh=o=>{const a=new Array(10),s=(u,d)=>{if(gi(u)){if(a.indexOf(u)>=0)return;if(!("toJSON"in u)){a[d]=u;const f=nr(u)?[]:{};return Wr(u,(h,x)=>{const P=s(h,d+1);!$r(P)&&(f[x]=P)}),a[d]=void 0,f}}return u};return s(o,0)},kh=Pn("AsyncFunction"),xh=o=>o&&(gi(o)||ln(o))&&ln(o.then)&&ln(o.catch),fd=((o,a)=>o?setImmediate:a?((s,u)=>(Pt.addEventListener("message",({source:d,data:f})=>{d===Pt&&f===s&&u.length&&u.shift()()},!1),d=>{u.push(d),Pt.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",ln(Pt.postMessage)),wh=typeof queueMicrotask<"u"?queueMicrotask.bind(Pt):typeof process<"u"&&process.nextTick||fd,w={isArray:nr,isArrayBuffer:ad,isBuffer:Ip,isFormData:Xp,isArrayBufferView:qp,isString:Up,isNumber:ld,isBoolean:Bp,isObject:gi,isPlainObject:si,isReadableStream:Yp,isRequest:Jp,isResponse:Gp,isHeaders:Zp,isUndefined:$r,isDate:Hp,isFile:Vp,isBlob:$p,isRegExp:fh,isFunction:ln,isStream:Qp,isURLSearchParams:Kp,isTypedArray:lh,isFileList:Wp,forEach:Wr,merge:Pl,extend:nh,trim:eh,stripBOM:th,inherits:rh,toFlatObject:oh,kindOf:hi,kindOfTest:Pn,endsWith:ih,toArray:ah,forEachEntry:sh,matchAll:uh,isHTMLForm:ch,hasOwnProperty:Ic,hasOwnProp:Ic,reduceDescriptors:cd,freezeMethods:ph,toObjectSet:hh,toCamelCase:dh,noop:mh,toFiniteNumber:gh,findKey:sd,global:Pt,isContextDefined:ud,ALPHABET:dd,generateString:yh,isSpecCompliantForm:vh,toJSONObject:bh,isAsyncFn:kh,isThenable:xh,setImmediate:fd,asap:wh};function X(o,a,s,u,d){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=o,this.name="AxiosError",a&&(this.code=a),s&&(this.config=s),u&&(this.request=u),d&&(this.response=d,this.status=d.status?d.status:null)}w.inherits(X,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.status}}});const pd=X.prototype,hd={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(o=>{hd[o]={value:o}});Object.defineProperties(X,hd);Object.defineProperty(pd,"isAxiosError",{value:!0});X.from=(o,a,s,u,d,f)=>{const h=Object.create(pd);return w.toFlatObject(o,h,function(P){return P!==Error.prototype},x=>x!=="isAxiosError"),X.call(h,o.message,a,s,u,d),h.cause=o,h.name=o.name,f&&Object.assign(h,f),h};const Sh=null;function El(o){return w.isPlainObject(o)||w.isArray(o)}function md(o){return w.endsWith(o,"[]")?o.slice(0,-2):o}function Uc(o,a,s){return o?o.concat(a).map(function(d,f){return d=md(d),!s&&f?"["+d+"]":d}).join(s?".":""):a}function Ph(o){return w.isArray(o)&&!o.some(El)}const Eh=w.toFlatObject(w,{},null,function(a){return/^is[A-Z]/.test(a)});function yi(o,a,s){if(!w.isObject(o))throw new TypeError("target must be an object");a=a||new FormData,s=w.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,O){return!w.isUndefined(O[S])});const u=s.metaTokens,d=s.visitor||_,f=s.dots,h=s.indexes,P=(s.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(a);if(!w.isFunction(d))throw new TypeError("visitor must be a function");function E(N){if(N===null)return"";if(w.isDate(N))return N.toISOString();if(!P&&w.isBlob(N))throw new X("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(N)||w.isTypedArray(N)?P&&typeof Blob=="function"?new Blob([N]):Buffer.from(N):N}function _(N,S,O){let G=N;if(N&&!O&&typeof N=="object"){if(w.endsWith(S,"{}"))S=u?S:S.slice(0,-2),N=JSON.stringify(N);else if(w.isArray(N)&&Ph(N)||(w.isFileList(N)||w.endsWith(S,"[]"))&&(G=w.toArray(N)))return S=md(S),G.forEach(function(K,re){!(w.isUndefined(K)||K===null)&&a.append(h===!0?Uc([S],re,f):h===null?S:S+"[]",E(K))}),!1}return El(N)?!0:(a.append(Uc(O,S,f),E(N)),!1)}const A=[],q=Object.assign(Eh,{defaultVisitor:_,convertValue:E,isVisitable:El});function J(N,S){if(!w.isUndefined(N)){if(A.indexOf(N)!==-1)throw Error("Circular reference detected in "+S.join("."));A.push(N),w.forEach(N,function(G,ee){(!(w.isUndefined(G)||G===null)&&d.call(a,G,w.isString(ee)?ee.trim():ee,S,q))===!0&&J(G,S?S.concat(ee):[ee])}),A.pop()}}if(!w.isObject(o))throw new TypeError("data must be an object");return J(o),a}function Bc(o){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(o).replace(/[!'()~]|%20|%00/g,function(u){return a[u]})}function Dl(o,a){this._pairs=[],o&&yi(o,this,a)}const gd=Dl.prototype;gd.append=function(a,s){this._pairs.push([a,s])};gd.toString=function(a){const s=a?function(u){return a.call(this,u,Bc)}:Bc;return this._pairs.map(function(d){return s(d[0])+"="+s(d[1])},"").join("&")};function Oh(o){return encodeURIComponent(o).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yd(o,a,s){if(!a)return o;const u=s&&s.encode||Oh;w.isFunction(s)&&(s={serialize:s});const d=s&&s.serialize;let f;if(d?f=d(a,s):f=w.isURLSearchParams(a)?a.toString():new Dl(a,s).toString(u),f){const h=o.indexOf("#");h!==-1&&(o=o.slice(0,h)),o+=(o.indexOf("?")===-1?"?":"&")+f}return o}class Hc{constructor(){this.handlers=[]}use(a,s,u){return this.handlers.push({fulfilled:a,rejected:s,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){w.forEach(this.handlers,function(u){u!==null&&a(u)})}}const vd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_h=typeof URLSearchParams<"u"?URLSearchParams:Dl,Ch=typeof FormData<"u"?FormData:null,Th=typeof Blob<"u"?Blob:null,zh={isBrowser:!0,classes:{URLSearchParams:_h,FormData:Ch,Blob:Th},protocols:["http","https","file","blob","url","data"]},Al=typeof window<"u"&&typeof document<"u",Ol=typeof navigator=="object"&&navigator||void 0,Rh=Al&&(!Ol||["ReactNative","NativeScript","NS"].indexOf(Ol.product)<0),Nh=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Dh=Al&&window.location.href||"http://localhost",Ah=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Al,hasStandardBrowserEnv:Rh,hasStandardBrowserWebWorkerEnv:Nh,navigator:Ol,origin:Dh},Symbol.toStringTag,{value:"Module"})),Be={...Ah,...zh};function Lh(o,a){return yi(o,new Be.classes.URLSearchParams,Object.assign({visitor:function(s,u,d,f){return Be.isNode&&w.isBuffer(s)?(this.append(u,s.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)}},a))}function Mh(o){return w.matchAll(/\w+|\[(\w*)]/g,o).map(a=>a[0]==="[]"?"":a[1]||a[0])}function Fh(o){const a={},s=Object.keys(o);let u;const d=s.length;let f;for(u=0;u<d;u++)f=s[u],a[f]=o[f];return a}function bd(o){function a(s,u,d,f){let h=s[f++];if(h==="__proto__")return!0;const x=Number.isFinite(+h),P=f>=s.length;return h=!h&&w.isArray(d)?d.length:h,P?(w.hasOwnProp(d,h)?d[h]=[d[h],u]:d[h]=u,!x):((!d[h]||!w.isObject(d[h]))&&(d[h]=[]),a(s,u,d[h],f)&&w.isArray(d[h])&&(d[h]=Fh(d[h])),!x)}if(w.isFormData(o)&&w.isFunction(o.entries)){const s={};return w.forEachEntry(o,(u,d)=>{a(Mh(u),d,s,0)}),s}return null}function jh(o,a,s){if(w.isString(o))try{return(a||JSON.parse)(o),w.trim(o)}catch(u){if(u.name!=="SyntaxError")throw u}return(0,JSON.stringify)(o)}const Qr={transitional:vd,adapter:["xhr","http","fetch"],transformRequest:[function(a,s){const u=s.getContentType()||"",d=u.indexOf("application/json")>-1,f=w.isObject(a);if(f&&w.isHTMLForm(a)&&(a=new FormData(a)),w.isFormData(a))return d?JSON.stringify(bd(a)):a;if(w.isArrayBuffer(a)||w.isBuffer(a)||w.isStream(a)||w.isFile(a)||w.isBlob(a)||w.isReadableStream(a))return a;if(w.isArrayBufferView(a))return a.buffer;if(w.isURLSearchParams(a))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let x;if(f){if(u.indexOf("application/x-www-form-urlencoded")>-1)return Lh(a,this.formSerializer).toString();if((x=w.isFileList(a))||u.indexOf("multipart/form-data")>-1){const P=this.env&&this.env.FormData;return yi(x?{"files[]":a}:a,P&&new P,this.formSerializer)}}return f||d?(s.setContentType("application/json",!1),jh(a)):a}],transformResponse:[function(a){const s=this.transitional||Qr.transitional,u=s&&s.forcedJSONParsing,d=this.responseType==="json";if(w.isResponse(a)||w.isReadableStream(a))return a;if(a&&w.isString(a)&&(u&&!this.responseType||d)){const h=!(s&&s.silentJSONParsing)&&d;try{return JSON.parse(a)}catch(x){if(h)throw x.name==="SyntaxError"?X.from(x,X.ERR_BAD_RESPONSE,this,null,this.response):x}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Be.classes.FormData,Blob:Be.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};w.forEach(["delete","get","head","post","put","patch"],o=>{Qr.headers[o]={}});const Ih=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qh=o=>{const a={};let s,u,d;return o&&o.split(`
`).forEach(function(h){d=h.indexOf(":"),s=h.substring(0,d).trim().toLowerCase(),u=h.substring(d+1).trim(),!(!s||a[s]&&Ih[s])&&(s==="set-cookie"?a[s]?a[s].push(u):a[s]=[u]:a[s]=a[s]?a[s]+", "+u:u)}),a},Vc=Symbol("internals");function Hr(o){return o&&String(o).trim().toLowerCase()}function ui(o){return o===!1||o==null?o:w.isArray(o)?o.map(ui):String(o)}function Uh(o){const a=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=s.exec(o);)a[u[1]]=u[2];return a}const Bh=o=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(o.trim());function kl(o,a,s,u,d){if(w.isFunction(u))return u.call(this,a,s);if(d&&(a=s),!!w.isString(a)){if(w.isString(u))return a.indexOf(u)!==-1;if(w.isRegExp(u))return u.test(a)}}function Hh(o){return o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,s,u)=>s.toUpperCase()+u)}function Vh(o,a){const s=w.toCamelCase(" "+a);["get","set","has"].forEach(u=>{Object.defineProperty(o,u+s,{value:function(d,f,h){return this[u].call(this,a,d,f,h)},configurable:!0})})}class Ge{constructor(a){a&&this.set(a)}set(a,s,u){const d=this;function f(x,P,E){const _=Hr(P);if(!_)throw new Error("header name must be a non-empty string");const A=w.findKey(d,_);(!A||d[A]===void 0||E===!0||E===void 0&&d[A]!==!1)&&(d[A||P]=ui(x))}const h=(x,P)=>w.forEach(x,(E,_)=>f(E,_,P));if(w.isPlainObject(a)||a instanceof this.constructor)h(a,s);else if(w.isString(a)&&(a=a.trim())&&!Bh(a))h(qh(a),s);else if(w.isHeaders(a))for(const[x,P]of a.entries())f(P,x,u);else a!=null&&f(s,a,u);return this}get(a,s){if(a=Hr(a),a){const u=w.findKey(this,a);if(u){const d=this[u];if(!s)return d;if(s===!0)return Uh(d);if(w.isFunction(s))return s.call(this,d,u);if(w.isRegExp(s))return s.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,s){if(a=Hr(a),a){const u=w.findKey(this,a);return!!(u&&this[u]!==void 0&&(!s||kl(this,this[u],u,s)))}return!1}delete(a,s){const u=this;let d=!1;function f(h){if(h=Hr(h),h){const x=w.findKey(u,h);x&&(!s||kl(u,u[x],x,s))&&(delete u[x],d=!0)}}return w.isArray(a)?a.forEach(f):f(a),d}clear(a){const s=Object.keys(this);let u=s.length,d=!1;for(;u--;){const f=s[u];(!a||kl(this,this[f],f,a,!0))&&(delete this[f],d=!0)}return d}normalize(a){const s=this,u={};return w.forEach(this,(d,f)=>{const h=w.findKey(u,f);if(h){s[h]=ui(d),delete s[f];return}const x=a?Hh(f):String(f).trim();x!==f&&delete s[f],s[x]=ui(d),u[x]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const s=Object.create(null);return w.forEach(this,(u,d)=>{u!=null&&u!==!1&&(s[d]=a&&w.isArray(u)?u.join(", "):u)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,s])=>a+": "+s).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...s){const u=new this(a);return s.forEach(d=>u.set(d)),u}static accessor(a){const u=(this[Vc]=this[Vc]={accessors:{}}).accessors,d=this.prototype;function f(h){const x=Hr(h);u[x]||(Vh(d,h),u[x]=!0)}return w.isArray(a)?a.forEach(f):f(a),this}}Ge.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.reduceDescriptors(Ge.prototype,({value:o},a)=>{let s=a[0].toUpperCase()+a.slice(1);return{get:()=>o,set(u){this[s]=u}}});w.freezeMethods(Ge);function xl(o,a){const s=this||Qr,u=a||s,d=Ge.from(u.headers);let f=u.data;return w.forEach(o,function(x){f=x.call(s,f,d.normalize(),a?a.status:void 0)}),d.normalize(),f}function kd(o){return!!(o&&o.__CANCEL__)}function tr(o,a,s){X.call(this,o??"canceled",X.ERR_CANCELED,a,s),this.name="CanceledError"}w.inherits(tr,X,{__CANCEL__:!0});function xd(o,a,s){const u=s.config.validateStatus;!s.status||!u||u(s.status)?o(s):a(new X("Request failed with status code "+s.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function $h(o){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(o);return a&&a[1]||""}function Wh(o,a){o=o||10;const s=new Array(o),u=new Array(o);let d=0,f=0,h;return a=a!==void 0?a:1e3,function(P){const E=Date.now(),_=u[f];h||(h=E),s[d]=P,u[d]=E;let A=f,q=0;for(;A!==d;)q+=s[A++],A=A%o;if(d=(d+1)%o,d===f&&(f=(f+1)%o),E-h<a)return;const J=_&&E-_;return J?Math.round(q*1e3/J):void 0}}function Qh(o,a){let s=0,u=1e3/a,d,f;const h=(E,_=Date.now())=>{s=_,d=null,f&&(clearTimeout(f),f=null),o.apply(null,E)};return[(...E)=>{const _=Date.now(),A=_-s;A>=u?h(E,_):(d=E,f||(f=setTimeout(()=>{f=null,h(d)},u-A)))},()=>d&&h(d)]}const di=(o,a,s=3)=>{let u=0;const d=Wh(50,250);return Qh(f=>{const h=f.loaded,x=f.lengthComputable?f.total:void 0,P=h-u,E=d(P),_=h<=x;u=h;const A={loaded:h,total:x,progress:x?h/x:void 0,bytes:P,rate:E||void 0,estimated:E&&x&&_?(x-h)/E:void 0,event:f,lengthComputable:x!=null,[a?"download":"upload"]:!0};o(A)},s)},$c=(o,a)=>{const s=o!=null;return[u=>a[0]({lengthComputable:s,total:o,loaded:u}),a[1]]},Wc=o=>(...a)=>w.asap(()=>o(...a)),Xh=Be.hasStandardBrowserEnv?((o,a)=>s=>(s=new URL(s,Be.origin),o.protocol===s.protocol&&o.host===s.host&&(a||o.port===s.port)))(new URL(Be.origin),Be.navigator&&/(msie|trident)/i.test(Be.navigator.userAgent)):()=>!0,Kh=Be.hasStandardBrowserEnv?{write(o,a,s,u,d,f){const h=[o+"="+encodeURIComponent(a)];w.isNumber(s)&&h.push("expires="+new Date(s).toGMTString()),w.isString(u)&&h.push("path="+u),w.isString(d)&&h.push("domain="+d),f===!0&&h.push("secure"),document.cookie=h.join("; ")},read(o){const a=document.cookie.match(new RegExp("(^|;\\s*)("+o+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove(o){this.write(o,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Yh(o){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(o)}function Jh(o,a){return a?o.replace(/\/?\/$/,"")+"/"+a.replace(/^\/+/,""):o}function wd(o,a){return o&&!Yh(a)?Jh(o,a):a}const Qc=o=>o instanceof Ge?{...o}:o;function Ot(o,a){a=a||{};const s={};function u(E,_,A,q){return w.isPlainObject(E)&&w.isPlainObject(_)?w.merge.call({caseless:q},E,_):w.isPlainObject(_)?w.merge({},_):w.isArray(_)?_.slice():_}function d(E,_,A,q){if(w.isUndefined(_)){if(!w.isUndefined(E))return u(void 0,E,A,q)}else return u(E,_,A,q)}function f(E,_){if(!w.isUndefined(_))return u(void 0,_)}function h(E,_){if(w.isUndefined(_)){if(!w.isUndefined(E))return u(void 0,E)}else return u(void 0,_)}function x(E,_,A){if(A in a)return u(E,_);if(A in o)return u(void 0,E)}const P={url:f,method:f,data:f,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:x,headers:(E,_,A)=>d(Qc(E),Qc(_),A,!0)};return w.forEach(Object.keys(Object.assign({},o,a)),function(_){const A=P[_]||d,q=A(o[_],a[_],_);w.isUndefined(q)&&A!==x||(s[_]=q)}),s}const Sd=o=>{const a=Ot({},o);let{data:s,withXSRFToken:u,xsrfHeaderName:d,xsrfCookieName:f,headers:h,auth:x}=a;a.headers=h=Ge.from(h),a.url=yd(wd(a.baseURL,a.url),o.params,o.paramsSerializer),x&&h.set("Authorization","Basic "+btoa((x.username||"")+":"+(x.password?unescape(encodeURIComponent(x.password)):"")));let P;if(w.isFormData(s)){if(Be.hasStandardBrowserEnv||Be.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if((P=h.getContentType())!==!1){const[E,..._]=P?P.split(";").map(A=>A.trim()).filter(Boolean):[];h.setContentType([E||"multipart/form-data",..._].join("; "))}}if(Be.hasStandardBrowserEnv&&(u&&w.isFunction(u)&&(u=u(a)),u||u!==!1&&Xh(a.url))){const E=d&&f&&Kh.read(f);E&&h.set(d,E)}return a},Gh=typeof XMLHttpRequest<"u",Zh=Gh&&function(o){return new Promise(function(s,u){const d=Sd(o);let f=d.data;const h=Ge.from(d.headers).normalize();let{responseType:x,onUploadProgress:P,onDownloadProgress:E}=d,_,A,q,J,N;function S(){J&&J(),N&&N(),d.cancelToken&&d.cancelToken.unsubscribe(_),d.signal&&d.signal.removeEventListener("abort",_)}let O=new XMLHttpRequest;O.open(d.method.toUpperCase(),d.url,!0),O.timeout=d.timeout;function G(){if(!O)return;const K=Ge.from("getAllResponseHeaders"in O&&O.getAllResponseHeaders()),te={data:!x||x==="text"||x==="json"?O.responseText:O.response,status:O.status,statusText:O.statusText,headers:K,config:o,request:O};xd(function(ue){s(ue),S()},function(ue){u(ue),S()},te),O=null}"onloadend"in O?O.onloadend=G:O.onreadystatechange=function(){!O||O.readyState!==4||O.status===0&&!(O.responseURL&&O.responseURL.indexOf("file:")===0)||setTimeout(G)},O.onabort=function(){O&&(u(new X("Request aborted",X.ECONNABORTED,o,O)),O=null)},O.onerror=function(){u(new X("Network Error",X.ERR_NETWORK,o,O)),O=null},O.ontimeout=function(){let re=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const te=d.transitional||vd;d.timeoutErrorMessage&&(re=d.timeoutErrorMessage),u(new X(re,te.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,o,O)),O=null},f===void 0&&h.setContentType(null),"setRequestHeader"in O&&w.forEach(h.toJSON(),function(re,te){O.setRequestHeader(te,re)}),w.isUndefined(d.withCredentials)||(O.withCredentials=!!d.withCredentials),x&&x!=="json"&&(O.responseType=d.responseType),E&&([q,N]=di(E,!0),O.addEventListener("progress",q)),P&&O.upload&&([A,J]=di(P),O.upload.addEventListener("progress",A),O.upload.addEventListener("loadend",J)),(d.cancelToken||d.signal)&&(_=K=>{O&&(u(!K||K.type?new tr(null,o,O):K),O.abort(),O=null)},d.cancelToken&&d.cancelToken.subscribe(_),d.signal&&(d.signal.aborted?_():d.signal.addEventListener("abort",_)));const ee=$h(d.url);if(ee&&Be.protocols.indexOf(ee)===-1){u(new X("Unsupported protocol "+ee+":",X.ERR_BAD_REQUEST,o));return}O.send(f||null)})},em=(o,a)=>{const{length:s}=o=o?o.filter(Boolean):[];if(a||s){let u=new AbortController,d;const f=function(E){if(!d){d=!0,x();const _=E instanceof Error?E:this.reason;u.abort(_ instanceof X?_:new tr(_ instanceof Error?_.message:_))}};let h=a&&setTimeout(()=>{h=null,f(new X(`timeout ${a} of ms exceeded`,X.ETIMEDOUT))},a);const x=()=>{o&&(h&&clearTimeout(h),h=null,o.forEach(E=>{E.unsubscribe?E.unsubscribe(f):E.removeEventListener("abort",f)}),o=null)};o.forEach(E=>E.addEventListener("abort",f));const{signal:P}=u;return P.unsubscribe=()=>w.asap(x),P}},nm=function*(o,a){let s=o.byteLength;if(s<a){yield o;return}let u=0,d;for(;u<s;)d=u+a,yield o.slice(u,d),u=d},tm=async function*(o,a){for await(const s of rm(o))yield*nm(s,a)},rm=async function*(o){if(o[Symbol.asyncIterator]){yield*o;return}const a=o.getReader();try{for(;;){const{done:s,value:u}=await a.read();if(s)break;yield u}}finally{await a.cancel()}},Xc=(o,a,s,u)=>{const d=tm(o,a);let f=0,h,x=P=>{h||(h=!0,u&&u(P))};return new ReadableStream({async pull(P){try{const{done:E,value:_}=await d.next();if(E){x(),P.close();return}let A=_.byteLength;if(s){let q=f+=A;s(q)}P.enqueue(new Uint8Array(_))}catch(E){throw x(E),E}},cancel(P){return x(P),d.return()}},{highWaterMark:2})},vi=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Pd=vi&&typeof ReadableStream=="function",om=vi&&(typeof TextEncoder=="function"?(o=>a=>o.encode(a))(new TextEncoder):async o=>new Uint8Array(await new Response(o).arrayBuffer())),Ed=(o,...a)=>{try{return!!o(...a)}catch{return!1}},im=Pd&&Ed(()=>{let o=!1;const a=new Request(Be.origin,{body:new ReadableStream,method:"POST",get duplex(){return o=!0,"half"}}).headers.has("Content-Type");return o&&!a}),Kc=64*1024,_l=Pd&&Ed(()=>w.isReadableStream(new Response("").body)),fi={stream:_l&&(o=>o.body)};vi&&(o=>{["text","arrayBuffer","blob","formData","stream"].forEach(a=>{!fi[a]&&(fi[a]=w.isFunction(o[a])?s=>s[a]():(s,u)=>{throw new X(`Response type '${a}' is not supported`,X.ERR_NOT_SUPPORT,u)})})})(new Response);const am=async o=>{if(o==null)return 0;if(w.isBlob(o))return o.size;if(w.isSpecCompliantForm(o))return(await new Request(Be.origin,{method:"POST",body:o}).arrayBuffer()).byteLength;if(w.isArrayBufferView(o)||w.isArrayBuffer(o))return o.byteLength;if(w.isURLSearchParams(o)&&(o=o+""),w.isString(o))return(await om(o)).byteLength},lm=async(o,a)=>{const s=w.toFiniteNumber(o.getContentLength());return s??am(a)},sm=vi&&(async o=>{let{url:a,method:s,data:u,signal:d,cancelToken:f,timeout:h,onDownloadProgress:x,onUploadProgress:P,responseType:E,headers:_,withCredentials:A="same-origin",fetchOptions:q}=Sd(o);E=E?(E+"").toLowerCase():"text";let J=em([d,f&&f.toAbortSignal()],h),N;const S=J&&J.unsubscribe&&(()=>{J.unsubscribe()});let O;try{if(P&&im&&s!=="get"&&s!=="head"&&(O=await lm(_,u))!==0){let te=new Request(a,{method:"POST",body:u,duplex:"half"}),ie;if(w.isFormData(u)&&(ie=te.headers.get("content-type"))&&_.setContentType(ie),te.body){const[ue,ke]=$c(O,di(Wc(P)));u=Xc(te.body,Kc,ue,ke)}}w.isString(A)||(A=A?"include":"omit");const G="credentials"in Request.prototype;N=new Request(a,{...q,signal:J,method:s.toUpperCase(),headers:_.normalize().toJSON(),body:u,duplex:"half",credentials:G?A:void 0});let ee=await fetch(N);const K=_l&&(E==="stream"||E==="response");if(_l&&(x||K&&S)){const te={};["status","statusText","headers"].forEach(xe=>{te[xe]=ee[xe]});const ie=w.toFiniteNumber(ee.headers.get("content-length")),[ue,ke]=x&&$c(ie,di(Wc(x),!0))||[];ee=new Response(Xc(ee.body,Kc,ue,()=>{ke&&ke(),S&&S()}),te)}E=E||"text";let re=await fi[w.findKey(fi,E)||"text"](ee,o);return!K&&S&&S(),await new Promise((te,ie)=>{xd(te,ie,{data:re,headers:Ge.from(ee.headers),status:ee.status,statusText:ee.statusText,config:o,request:N})})}catch(G){throw S&&S(),G&&G.name==="TypeError"&&/fetch/i.test(G.message)?Object.assign(new X("Network Error",X.ERR_NETWORK,o,N),{cause:G.cause||G}):X.from(G,G&&G.code,o,N)}}),Cl={http:Sh,xhr:Zh,fetch:sm};w.forEach(Cl,(o,a)=>{if(o){try{Object.defineProperty(o,"name",{value:a})}catch{}Object.defineProperty(o,"adapterName",{value:a})}});const Yc=o=>`- ${o}`,um=o=>w.isFunction(o)||o===null||o===!1,Od={getAdapter:o=>{o=w.isArray(o)?o:[o];const{length:a}=o;let s,u;const d={};for(let f=0;f<a;f++){s=o[f];let h;if(u=s,!um(s)&&(u=Cl[(h=String(s)).toLowerCase()],u===void 0))throw new X(`Unknown adapter '${h}'`);if(u)break;d[h||"#"+f]=u}if(!u){const f=Object.entries(d).map(([x,P])=>`adapter ${x} `+(P===!1?"is not supported by the environment":"is not available in the build"));let h=a?f.length>1?`since :
`+f.map(Yc).join(`
`):" "+Yc(f[0]):"as no adapter specified";throw new X("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return u},adapters:Cl};function wl(o){if(o.cancelToken&&o.cancelToken.throwIfRequested(),o.signal&&o.signal.aborted)throw new tr(null,o)}function Jc(o){return wl(o),o.headers=Ge.from(o.headers),o.data=xl.call(o,o.transformRequest),["post","put","patch"].indexOf(o.method)!==-1&&o.headers.setContentType("application/x-www-form-urlencoded",!1),Od.getAdapter(o.adapter||Qr.adapter)(o).then(function(u){return wl(o),u.data=xl.call(o,o.transformResponse,u),u.headers=Ge.from(u.headers),u},function(u){return kd(u)||(wl(o),u&&u.response&&(u.response.data=xl.call(o,o.transformResponse,u.response),u.response.headers=Ge.from(u.response.headers))),Promise.reject(u)})}const _d="1.7.9",bi={};["object","boolean","number","function","string","symbol"].forEach((o,a)=>{bi[o]=function(u){return typeof u===o||"a"+(a<1?"n ":" ")+o}});const Gc={};bi.transitional=function(a,s,u){function d(f,h){return"[Axios v"+_d+"] Transitional option '"+f+"'"+h+(u?". "+u:"")}return(f,h,x)=>{if(a===!1)throw new X(d(h," has been removed"+(s?" in "+s:"")),X.ERR_DEPRECATED);return s&&!Gc[h]&&(Gc[h]=!0,console.warn(d(h," has been deprecated since v"+s+" and will be removed in the near future"))),a?a(f,h,x):!0}};bi.spelling=function(a){return(s,u)=>(console.warn(`${u} is likely a misspelling of ${a}`),!0)};function cm(o,a,s){if(typeof o!="object")throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const u=Object.keys(o);let d=u.length;for(;d-- >0;){const f=u[d],h=a[f];if(h){const x=o[f],P=x===void 0||h(x,f,o);if(P!==!0)throw new X("option "+f+" must be "+P,X.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new X("Unknown option "+f,X.ERR_BAD_OPTION)}}const ci={assertOptions:cm,validators:bi},Nn=ci.validators;class Et{constructor(a){this.defaults=a,this.interceptors={request:new Hc,response:new Hc}}async request(a,s){try{return await this._request(a,s)}catch(u){if(u instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const f=d.stack?d.stack.replace(/^.+\n/,""):"";try{u.stack?f&&!String(u.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(u.stack+=`
`+f):u.stack=f}catch{}}throw u}}_request(a,s){typeof a=="string"?(s=s||{},s.url=a):s=a||{},s=Ot(this.defaults,s);const{transitional:u,paramsSerializer:d,headers:f}=s;u!==void 0&&ci.assertOptions(u,{silentJSONParsing:Nn.transitional(Nn.boolean),forcedJSONParsing:Nn.transitional(Nn.boolean),clarifyTimeoutError:Nn.transitional(Nn.boolean)},!1),d!=null&&(w.isFunction(d)?s.paramsSerializer={serialize:d}:ci.assertOptions(d,{encode:Nn.function,serialize:Nn.function},!0)),ci.assertOptions(s,{baseUrl:Nn.spelling("baseURL"),withXsrfToken:Nn.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let h=f&&w.merge(f.common,f[s.method]);f&&w.forEach(["delete","get","head","post","put","patch","common"],N=>{delete f[N]}),s.headers=Ge.concat(h,f);const x=[];let P=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(s)===!1||(P=P&&S.synchronous,x.unshift(S.fulfilled,S.rejected))});const E=[];this.interceptors.response.forEach(function(S){E.push(S.fulfilled,S.rejected)});let _,A=0,q;if(!P){const N=[Jc.bind(this),void 0];for(N.unshift.apply(N,x),N.push.apply(N,E),q=N.length,_=Promise.resolve(s);A<q;)_=_.then(N[A++],N[A++]);return _}q=x.length;let J=s;for(A=0;A<q;){const N=x[A++],S=x[A++];try{J=N(J)}catch(O){S.call(this,O);break}}try{_=Jc.call(this,J)}catch(N){return Promise.reject(N)}for(A=0,q=E.length;A<q;)_=_.then(E[A++],E[A++]);return _}getUri(a){a=Ot(this.defaults,a);const s=wd(a.baseURL,a.url);return yd(s,a.params,a.paramsSerializer)}}w.forEach(["delete","get","head","options"],function(a){Et.prototype[a]=function(s,u){return this.request(Ot(u||{},{method:a,url:s,data:(u||{}).data}))}});w.forEach(["post","put","patch"],function(a){function s(u){return function(f,h,x){return this.request(Ot(x||{},{method:a,headers:u?{"Content-Type":"multipart/form-data"}:{},url:f,data:h}))}}Et.prototype[a]=s(),Et.prototype[a+"Form"]=s(!0)});class Ll{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(f){s=f});const u=this;this.promise.then(d=>{if(!u._listeners)return;let f=u._listeners.length;for(;f-- >0;)u._listeners[f](d);u._listeners=null}),this.promise.then=d=>{let f;const h=new Promise(x=>{u.subscribe(x),f=x}).then(d);return h.cancel=function(){u.unsubscribe(f)},h},a(function(f,h,x){u.reason||(u.reason=new tr(f,h,x),s(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const s=this._listeners.indexOf(a);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const a=new AbortController,s=u=>{a.abort(u)};return this.subscribe(s),a.signal.unsubscribe=()=>this.unsubscribe(s),a.signal}static source(){let a;return{token:new Ll(function(d){a=d}),cancel:a}}}function dm(o){return function(s){return o.apply(null,s)}}function fm(o){return w.isObject(o)&&o.isAxiosError===!0}const Tl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Tl).forEach(([o,a])=>{Tl[a]=o});function Cd(o){const a=new Et(o),s=id(Et.prototype.request,a);return w.extend(s,Et.prototype,a,{allOwnKeys:!0}),w.extend(s,a,null,{allOwnKeys:!0}),s.create=function(d){return Cd(Ot(o,d))},s}const Te=Cd(Qr);Te.Axios=Et;Te.CanceledError=tr;Te.CancelToken=Ll;Te.isCancel=kd;Te.VERSION=_d;Te.toFormData=yi;Te.AxiosError=X;Te.Cancel=Te.CanceledError;Te.all=function(a){return Promise.all(a)};Te.spread=dm;Te.isAxiosError=fm;Te.mergeConfig=Ot;Te.AxiosHeaders=Ge;Te.formToJSON=o=>bd(w.isHTMLForm(o)?new FormData(o):o);Te.getAdapter=Od.getAdapter;Te.HttpStatusCode=Tl;Te.default=Te;const pm=({websites:o})=>fe.jsxs("div",{className:"container mx-auto p-4",children:[fe.jsx("h1",{className:"text-4xl font-bold mb-4 text-center",children:"Estado de Sitios Web CGIG"}),fe.jsx("div",{className:"overflow-x-auto",children:fe.jsxs("table",{className:"table-auto w-full border-collapse border border-gray-200",children:[fe.jsx("thead",{children:fe.jsxs("tr",{className:"bg-gray-100",children:[fe.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"Sitio Web"}),fe.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"Estado"}),fe.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"Tiempo de Respuesta"}),fe.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"Código de Estado"})]})}),fe.jsx("tbody",{children:o.map((a,s)=>fe.jsxs("tr",{className:"hover:bg-gray-50",children:[fe.jsx("td",{className:"border border-gray-300 px-4 py-2",children:fe.jsx("a",{href:`https://${a.website}`,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:a.website})}),fe.jsx("td",{className:`border border-gray-300 px-4 py-2 ${a.status==="Online"?"text-green-600 font-semibold":"text-red-600 font-semibold"}`,children:a.status}),fe.jsx("td",{className:"border border-gray-300 px-4 py-2",children:a.responseTime}),fe.jsx("td",{className:"border border-gray-300 px-4 py-2",children:a.statusCode||"N/A"})]},s))})]})})]});function Ne(o,a){a===void 0&&(a={});var s=a.insertAt;if(o&&typeof document<"u"){var u=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css",s==="top"&&u.firstChild?u.insertBefore(d,u.firstChild):u.appendChild(d),d.styleSheet?d.styleSheet.cssText=o:d.appendChild(document.createTextNode(o))}}Ne(`.react-loading-indicator-normalize,
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
}`);var Dn=function(){return Dn=Object.assign||function(o){for(var a,s=1,u=arguments.length;s<u;s++)for(var d in a=arguments[s])Object.prototype.hasOwnProperty.call(a,d)&&(o[d]=a[d]);return o},Dn.apply(this,arguments)};function pi(o){return pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},pi(o)}var hm=/^\s+/,mm=/\s+$/;function H(o,a){if(a=a||{},(o=o||"")instanceof H)return o;if(!(this instanceof H))return new H(o,a);var s=function(u){var d={r:0,g:0,b:0},f=1,h=null,x=null,P=null,E=!1,_=!1;typeof u=="string"&&(u=function(N){N=N.replace(hm,"").replace(mm,"").toLowerCase();var S,O=!1;if(zl[N])N=zl[N],O=!0;else if(N=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(S=wn.rgb.exec(N))?{r:S[1],g:S[2],b:S[3]}:(S=wn.rgba.exec(N))?{r:S[1],g:S[2],b:S[3],a:S[4]}:(S=wn.hsl.exec(N))?{h:S[1],s:S[2],l:S[3]}:(S=wn.hsla.exec(N))?{h:S[1],s:S[2],l:S[3],a:S[4]}:(S=wn.hsv.exec(N))?{h:S[1],s:S[2],v:S[3]}:(S=wn.hsva.exec(N))?{h:S[1],s:S[2],v:S[3],a:S[4]}:(S=wn.hex8.exec(N))?{r:an(S[1]),g:an(S[2]),b:an(S[3]),a:od(S[4]),format:O?"name":"hex8"}:(S=wn.hex6.exec(N))?{r:an(S[1]),g:an(S[2]),b:an(S[3]),format:O?"name":"hex"}:(S=wn.hex4.exec(N))?{r:an(S[1]+""+S[1]),g:an(S[2]+""+S[2]),b:an(S[3]+""+S[3]),a:od(S[4]+""+S[4]),format:O?"name":"hex8"}:(S=wn.hex3.exec(N))?{r:an(S[1]+""+S[1]),g:an(S[2]+""+S[2]),b:an(S[3]+""+S[3]),format:O?"name":"hex"}:!1}(u)),pi(u)=="object"&&(Hn(u.r)&&Hn(u.g)&&Hn(u.b)?(A=u.r,q=u.g,J=u.b,d={r:255*be(A,255),g:255*be(q,255),b:255*be(J,255)},E=!0,_=String(u.r).substr(-1)==="%"?"prgb":"rgb"):Hn(u.h)&&Hn(u.s)&&Hn(u.v)?(h=Vr(u.s),x=Vr(u.v),d=function(N,S,O){N=6*be(N,360),S=be(S,100),O=be(O,100);var G=Math.floor(N),ee=N-G,K=O*(1-S),re=O*(1-ee*S),te=O*(1-(1-ee)*S),ie=G%6,ue=[O,re,K,K,te,O][ie],ke=[te,O,O,re,K,K][ie],xe=[K,K,te,O,O,re][ie];return{r:255*ue,g:255*ke,b:255*xe}}(u.h,h,x),E=!0,_="hsv"):Hn(u.h)&&Hn(u.s)&&Hn(u.l)&&(h=Vr(u.s),P=Vr(u.l),d=function(N,S,O){var G,ee,K;function re(ue,ke,xe){return xe<0&&(xe+=1),xe>1&&(xe-=1),xe<1/6?ue+6*(ke-ue)*xe:xe<.5?ke:xe<2/3?ue+(ke-ue)*(2/3-xe)*6:ue}if(N=be(N,360),S=be(S,100),O=be(O,100),S===0)G=ee=K=O;else{var te=O<.5?O*(1+S):O+S-O*S,ie=2*O-te;G=re(ie,te,N+1/3),ee=re(ie,te,N),K=re(ie,te,N-1/3)}return{r:255*G,g:255*ee,b:255*K}}(u.h,h,P),E=!0,_="hsl"),u.hasOwnProperty("a")&&(f=u.a));var A,q,J;return f=Td(f),{ok:E,format:u.format||_,r:Math.min(255,Math.max(d.r,0)),g:Math.min(255,Math.max(d.g,0)),b:Math.min(255,Math.max(d.b,0)),a:f}}(o);this._originalInput=o,this._r=s.r,this._g=s.g,this._b=s.b,this._a=s.a,this._roundA=Math.round(100*this._a)/100,this._format=a.format||s.format,this._gradientType=a.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=s.ok}function Zc(o,a,s){o=be(o,255),a=be(a,255),s=be(s,255);var u,d,f=Math.max(o,a,s),h=Math.min(o,a,s),x=(f+h)/2;if(f==h)u=d=0;else{var P=f-h;switch(d=x>.5?P/(2-f-h):P/(f+h),f){case o:u=(a-s)/P+(a<s?6:0);break;case a:u=(s-o)/P+2;break;case s:u=(o-a)/P+4}u/=6}return{h:u,s:d,l:x}}function ed(o,a,s){o=be(o,255),a=be(a,255),s=be(s,255);var u,d,f=Math.max(o,a,s),h=Math.min(o,a,s),x=f,P=f-h;if(d=f===0?0:P/f,f==h)u=0;else{switch(f){case o:u=(a-s)/P+(a<s?6:0);break;case a:u=(s-o)/P+2;break;case s:u=(o-a)/P+4}u/=6}return{h:u,s:d,v:x}}function nd(o,a,s,u){var d=[Sn(Math.round(o).toString(16)),Sn(Math.round(a).toString(16)),Sn(Math.round(s).toString(16))];return u&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0):d.join("")}function td(o,a,s,u){return[Sn(zd(u)),Sn(Math.round(o).toString(16)),Sn(Math.round(a).toString(16)),Sn(Math.round(s).toString(16))].join("")}function gm(o,a){a=a===0?0:a||10;var s=H(o).toHsl();return s.s-=a/100,s.s=ki(s.s),H(s)}function ym(o,a){a=a===0?0:a||10;var s=H(o).toHsl();return s.s+=a/100,s.s=ki(s.s),H(s)}function vm(o){return H(o).desaturate(100)}function bm(o,a){a=a===0?0:a||10;var s=H(o).toHsl();return s.l+=a/100,s.l=ki(s.l),H(s)}function km(o,a){a=a===0?0:a||10;var s=H(o).toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(-a/100*255))),s.g=Math.max(0,Math.min(255,s.g-Math.round(-a/100*255))),s.b=Math.max(0,Math.min(255,s.b-Math.round(-a/100*255))),H(s)}function xm(o,a){a=a===0?0:a||10;var s=H(o).toHsl();return s.l-=a/100,s.l=ki(s.l),H(s)}function wm(o,a){var s=H(o).toHsl(),u=(s.h+a)%360;return s.h=u<0?360+u:u,H(s)}function Sm(o){var a=H(o).toHsl();return a.h=(a.h+180)%360,H(a)}function rd(o,a){if(isNaN(a)||a<=0)throw new Error("Argument to polyad must be a positive number");for(var s=H(o).toHsl(),u=[H(o)],d=360/a,f=1;f<a;f++)u.push(H({h:(s.h+f*d)%360,s:s.s,l:s.l}));return u}function Pm(o){var a=H(o).toHsl(),s=a.h;return[H(o),H({h:(s+72)%360,s:a.s,l:a.l}),H({h:(s+216)%360,s:a.s,l:a.l})]}function Em(o,a,s){a=a||6,s=s||30;var u=H(o).toHsl(),d=360/s,f=[H(o)];for(u.h=(u.h-(d*a>>1)+720)%360;--a;)u.h=(u.h+d)%360,f.push(H(u));return f}function Om(o,a){a=a||6;for(var s=H(o).toHsv(),u=s.h,d=s.s,f=s.v,h=[],x=1/a;a--;)h.push(H({h:u,s:d,v:f})),f=(f+x)%1;return h}H.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var o=this.toRgb();return(299*o.r+587*o.g+114*o.b)/1e3},getLuminance:function(){var o,a,s,u=this.toRgb();return o=u.r/255,a=u.g/255,s=u.b/255,.2126*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.7152*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.0722*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))},setAlpha:function(o){return this._a=Td(o),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var o=ed(this._r,this._g,this._b);return{h:360*o.h,s:o.s,v:o.v,a:this._a}},toHsvString:function(){var o=ed(this._r,this._g,this._b),a=Math.round(360*o.h),s=Math.round(100*o.s),u=Math.round(100*o.v);return this._a==1?"hsv("+a+", "+s+"%, "+u+"%)":"hsva("+a+", "+s+"%, "+u+"%, "+this._roundA+")"},toHsl:function(){var o=Zc(this._r,this._g,this._b);return{h:360*o.h,s:o.s,l:o.l,a:this._a}},toHslString:function(){var o=Zc(this._r,this._g,this._b),a=Math.round(360*o.h),s=Math.round(100*o.s),u=Math.round(100*o.l);return this._a==1?"hsl("+a+", "+s+"%, "+u+"%)":"hsla("+a+", "+s+"%, "+u+"%, "+this._roundA+")"},toHex:function(o){return nd(this._r,this._g,this._b,o)},toHexString:function(o){return"#"+this.toHex(o)},toHex8:function(o){return function(a,s,u,d,f){var h=[Sn(Math.round(a).toString(16)),Sn(Math.round(s).toString(16)),Sn(Math.round(u).toString(16)),Sn(zd(d))];return f&&h[0].charAt(0)==h[0].charAt(1)&&h[1].charAt(0)==h[1].charAt(1)&&h[2].charAt(0)==h[2].charAt(1)&&h[3].charAt(0)==h[3].charAt(1)?h[0].charAt(0)+h[1].charAt(0)+h[2].charAt(0)+h[3].charAt(0):h.join("")}(this._r,this._g,this._b,this._a,o)},toHex8String:function(o){return"#"+this.toHex8(o)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*be(this._r,255))+"%",g:Math.round(100*be(this._g,255))+"%",b:Math.round(100*be(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*be(this._r,255))+"%, "+Math.round(100*be(this._g,255))+"%, "+Math.round(100*be(this._b,255))+"%)":"rgba("+Math.round(100*be(this._r,255))+"%, "+Math.round(100*be(this._g,255))+"%, "+Math.round(100*be(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(_m[nd(this._r,this._g,this._b,!0)]||!1)},toFilter:function(o){var a="#"+td(this._r,this._g,this._b,this._a),s=a,u=this._gradientType?"GradientType = 1, ":"";if(o){var d=H(o);s="#"+td(d._r,d._g,d._b,d._a)}return"progid:DXImageTransform.Microsoft.gradient("+u+"startColorstr="+a+",endColorstr="+s+")"},toString:function(o){var a=!!o;o=o||this._format;var s=!1,u=this._a<1&&this._a>=0;return a||!u||o!=="hex"&&o!=="hex6"&&o!=="hex3"&&o!=="hex4"&&o!=="hex8"&&o!=="name"?(o==="rgb"&&(s=this.toRgbString()),o==="prgb"&&(s=this.toPercentageRgbString()),o!=="hex"&&o!=="hex6"||(s=this.toHexString()),o==="hex3"&&(s=this.toHexString(!0)),o==="hex4"&&(s=this.toHex8String(!0)),o==="hex8"&&(s=this.toHex8String()),o==="name"&&(s=this.toName()),o==="hsl"&&(s=this.toHslString()),o==="hsv"&&(s=this.toHsvString()),s||this.toHexString()):o==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return H(this.toString())},_applyModification:function(o,a){var s=o.apply(null,[this].concat([].slice.call(a)));return this._r=s._r,this._g=s._g,this._b=s._b,this.setAlpha(s._a),this},lighten:function(){return this._applyModification(bm,arguments)},brighten:function(){return this._applyModification(km,arguments)},darken:function(){return this._applyModification(xm,arguments)},desaturate:function(){return this._applyModification(gm,arguments)},saturate:function(){return this._applyModification(ym,arguments)},greyscale:function(){return this._applyModification(vm,arguments)},spin:function(){return this._applyModification(wm,arguments)},_applyCombination:function(o,a){return o.apply(null,[this].concat([].slice.call(a)))},analogous:function(){return this._applyCombination(Em,arguments)},complement:function(){return this._applyCombination(Sm,arguments)},monochromatic:function(){return this._applyCombination(Om,arguments)},splitcomplement:function(){return this._applyCombination(Pm,arguments)},triad:function(){return this._applyCombination(rd,[3])},tetrad:function(){return this._applyCombination(rd,[4])}},H.fromRatio=function(o,a){if(pi(o)=="object"){var s={};for(var u in o)o.hasOwnProperty(u)&&(s[u]=u==="a"?o[u]:Vr(o[u]));o=s}return H(o,a)},H.equals=function(o,a){return!(!o||!a)&&H(o).toRgbString()==H(a).toRgbString()},H.random=function(){return H.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},H.mix=function(o,a,s){s=s===0?0:s||50;var u=H(o).toRgb(),d=H(a).toRgb(),f=s/100;return H({r:(d.r-u.r)*f+u.r,g:(d.g-u.g)*f+u.g,b:(d.b-u.b)*f+u.b,a:(d.a-u.a)*f+u.a})},H.readability=function(o,a){var s=H(o),u=H(a);return(Math.max(s.getLuminance(),u.getLuminance())+.05)/(Math.min(s.getLuminance(),u.getLuminance())+.05)},H.isReadable=function(o,a,s){var u,d,f=H.readability(o,a);switch(d=!1,(u=function(h){var x,P;return x=((h=h||{level:"AA",size:"small"}).level||"AA").toUpperCase(),P=(h.size||"small").toLowerCase(),x!=="AA"&&x!=="AAA"&&(x="AA"),P!=="small"&&P!=="large"&&(P="small"),{level:x,size:P}}(s)).level+u.size){case"AAsmall":case"AAAlarge":d=f>=4.5;break;case"AAlarge":d=f>=3;break;case"AAAsmall":d=f>=7}return d},H.mostReadable=function(o,a,s){var u,d,f,h,x=null,P=0;d=(s=s||{}).includeFallbackColors,f=s.level,h=s.size;for(var E=0;E<a.length;E++)(u=H.readability(o,a[E]))>P&&(P=u,x=H(a[E]));return H.isReadable(o,x,{level:f,size:h})||!d?x:(s.includeFallbackColors=!1,H.mostReadable(o,["#fff","#000"],s))};var zl=H.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},_m=H.hexNames=function(o){var a={};for(var s in o)o.hasOwnProperty(s)&&(a[o[s]]=s);return a}(zl);function Td(o){return o=parseFloat(o),(isNaN(o)||o<0||o>1)&&(o=1),o}function be(o,a){(function(u){return typeof u=="string"&&u.indexOf(".")!=-1&&parseFloat(u)===1})(o)&&(o="100%");var s=function(u){return typeof u=="string"&&u.indexOf("%")!=-1}(o);return o=Math.min(a,Math.max(0,parseFloat(o))),s&&(o=parseInt(o*a,10)/100),Math.abs(o-a)<1e-6?1:o%a/parseFloat(a)}function ki(o){return Math.min(1,Math.max(0,o))}function an(o){return parseInt(o,16)}function Sn(o){return o.length==1?"0"+o:""+o}function Vr(o){return o<=1&&(o=100*o+"%"),o}function zd(o){return Math.round(255*parseFloat(o)).toString(16)}function od(o){return an(o)/255}var ut,ai,li,wn=(ai="[\\s|\\(]+("+(ut="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ut+")[,|\\s]+("+ut+")\\s*\\)?",li="[\\s|\\(]+("+ut+")[,|\\s]+("+ut+")[,|\\s]+("+ut+")[,|\\s]+("+ut+")\\s*\\)?",{CSS_UNIT:new RegExp(ut),rgb:new RegExp("rgb"+ai),rgba:new RegExp("rgba"+li),hsl:new RegExp("hsl"+ai),hsla:new RegExp("hsla"+li),hsv:new RegExp("hsv"+ai),hsva:new RegExp("hsva"+li),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Hn(o){return!!wn.CSS_UNIT.exec(o)}var Cm=function(o,a){var s=(typeof o=="string"?parseInt(o):o)||0;if(s>=-5&&s<=5){var u=s,d=parseFloat(a),f=d+u*(d/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:a}},Tm=function(o,a){var s=o||{},u="";switch(a){case"small":u="12px";break;case"medium":u="16px";break;case"large":u="20px";break;default:u=void 0}var d={};if(s.fontSize){var f=s.fontSize;d=function(h,x){var P={};for(var E in h)Object.prototype.hasOwnProperty.call(h,E)&&x.indexOf(E)<0&&(P[E]=h[E]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function"){var _=0;for(E=Object.getOwnPropertySymbols(h);_<E.length;_++)x.indexOf(E[_])<0&&Object.prototype.propertyIsEnumerable.call(h,E[_])&&(P[E[_]]=h[E[_]])}return P}(s,["fontSize"]),u=f}return{fontSize:u,styles:d}},zm={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Rm=function(o){var a=o.className,s=o.text,u=o.textColor,d=o.staticText,f=o.style;return s?Zt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(a||"").trim(),style:Dn(Dn(Dn({},d&&zm),u&&{color:u,mixBlendMode:"unset"}),f&&f)},typeof s=="string"&&s.length?s:"loading"):null},Rd="rgb(50, 205, 50)";function Nm(o,a){a===void 0&&(a=0);var s=[];return function u(d,f){return f===void 0&&(f=0),s.push.apply(s,d),s.length<f&&u(s,f),s.slice(0,f)}(o,a)}Ne(`.atom-rli-bounding-box {
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
}`);H(Rd).toRgb();Array.from({length:4},function(o,a){return"--atom-phase".concat(a+1,"-rgb")});Ne(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(o,a){return"--OP-annulus-phase".concat(a+1,"-color")});function Sl(o){return o&&o.Math===Math&&o}Ne(`.OP-dotted-rli-bounding-box {
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
}`);Sl(typeof window=="object"&&window)||Sl(typeof self=="object"&&self)||Sl(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(o,a){return"--OP-dotted-phase".concat(a+1,"-color")});Ne(`.OP-spokes-rli-bounding-box {
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
}`);var Gt=Array.from({length:4},function(o,a){return"--life-line-phase".concat(a+1,"-color")}),Dm=function(o){var a,s=Tm(o==null?void 0:o.style,o==null?void 0:o.size),u=s.styles,d=s.fontSize,f=o==null?void 0:o.easing,h=Cm(o==null?void 0:o.speedPlus,"2s").animationPeriod,x=function(P){var E={};if(P instanceof Array){for(var _=Nm(P,Gt.length),A=0;A<_.length&&!(A>=4);A++)E[Gt[A]]=_[A];return E}try{if(typeof P!="string")throw new Error("Color String expected");for(var q=0;q<Gt.length;q++)E[Gt[q]]=P}catch(J){for(J instanceof Error?console.warn("[".concat(J.message,']: Received "').concat(typeof P,'" instead with value, ').concat(JSON.stringify(P))):console.warn("".concat(JSON.stringify(P)," received in <LifeLine /> indicator cannot be processed. Using default instead!")),q=0;q<Gt.length;q++)E[Gt[q]]=Rd}return E}((a=o==null?void 0:o.color)!==null&&a!==void 0?a:"");return Zt.createElement("span",{className:"rli-d-i-b lifeline-rli-bounding-box",style:Dn(Dn(Dn(Dn(Dn({},d&&{fontSize:d}),h&&{"--rli-animation-duration":h}),f&&{"--rli-animation-function":f}),x),u),role:"status","aria-live":"polite","aria-label":"Loading"},Zt.createElement("span",{className:"rli-d-i-b lifeline-indicator"},Zt.createElement("svg",{width:"14em",height:"6.825000001em",xmlns:"http://www.w3.org/2000/svg",version:"1.2",viewBox:"0 0 350 50",preserveAspectRatio:"xMinYMin meet"},Zt.createElement("path",{className:"rli-lifeline",stroke:"currentColor",fill:"none",strokeLinejoin:"round",strokeWidth:"4px",d:"M-113 70h250q8-30 12-3t5 8 3-7 3 4 6 35 8-55 6 40 8-3s2-11 10-10 1 1 8-10l4 8c6 4 8-6 10-17s2 10 9 11h210"}))),Zt.createElement(Rm,{staticText:!0,text:o==null?void 0:o.text,textColor:o==null?void 0:o.textColor}))};const Am=()=>fe.jsx("div",{className:"flex flex-col items-center justify-center w-screen h-screen bg-gray-50",children:fe.jsx(Dm,{color:"#316dcc",size:"large",text:"Se están revisando las webs...",textColor:""})}),Lm=()=>{const[o,a]=er.useState([]),[s,u]=er.useState(!0),[d,f]=er.useState(null);return er.useEffect(()=>{const h=async()=>{try{const P=await Te.get("https://online-checker.onrender.com/api/check");a(P.data),u(!1)}catch(P){console.error("Error fetching data:",P),f("No se pudieron obtener los datos. Inténtalo de nuevo más tarde."),u(!1)}};h();const x=setInterval(h,6e4);return()=>clearInterval(x)},[]),s?fe.jsx(Am,{}):d?fe.jsx("div",{className:"text-red-500",children:d}):fe.jsx(pm,{websites:o})},Mm=()=>fe.jsx(fe.Fragment,{children:fe.jsx(Lm,{})});Fp.createRoot(document.getElementById("root")).render(fe.jsx(er.StrictMode,{children:fe.jsx(Mm,{})}));
