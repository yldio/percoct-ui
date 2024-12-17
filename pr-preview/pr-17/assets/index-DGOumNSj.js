var Z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Y(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S={exports:{}},o={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),x=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.iterator;function z(t){return t===null||typeof t!="object"?null:(t=m&&t[m]||t["@@iterator"],typeof t=="function"?t:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,H={};function l(t,e,n){this.props=t,this.context=e,this.refs=H,this.updater=n||j}l.prototype.isReactComponent={};l.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};l.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function P(){}P.prototype=l.prototype;function v(t,e,n){this.props=t,this.context=e,this.refs=H,this.updater=n||j}var d=v.prototype=new P;d.constructor=v;O(d,l.prototype);d.isPureReactComponent=!0;var C=Array.isArray,f={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function R(t,e,n,r,s,i){return n=i.ref,{$$typeof:E,type:t,key:e,ref:n!==void 0?n:null,props:i}}function G(t,e){return R(t.type,e,void 0,void 0,void 0,t.props)}function T(t){return typeof t=="object"&&t!==null&&t.$$typeof===E}function K(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var w=/\/+/g;function y(t,e){return typeof t=="object"&&t!==null&&t.key!=null?K(""+t.key):e.toString(36)}function g(){}function B(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(g,g):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function a(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(i){case"bigint":case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case E:case b:u=!0;break;case h:return u=t._init,a(u(t._payload),e,n,r,s)}}if(u)return s=s(t),u=r===""?"."+y(t,0):r,C(s)?(n="",u!=null&&(n=u.replace(w,"$&/")+"/"),a(s,e,n,"",function(N){return N})):s!=null&&(T(s)&&(s=G(s,n+(s.key==null||t&&t.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+u)),e.push(s)),1;u=0;var p=r===""?".":r+":";if(C(t))for(var c=0;c<t.length;c++)r=t[c],i=p+y(r,c),u+=a(r,e,n,i,s);else if(c=z(t),typeof c=="function")for(t=c.call(t),c=0;!(r=t.next()).done;)r=r.value,i=p+y(r,c++),u+=a(r,e,n,i,s);else if(i==="object"){if(typeof t.then=="function")return a(B(t),e,n,r,s);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return u}function _(t,e,n){if(t==null)return t;var r=[],s=0;return a(t,r,"","",function(i){return e.call(n,i,s++)}),r}function W(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var A=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Q(){}o.Children={map:_,forEach:function(t,e,n){_(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _(t,function(){e++}),e},toArray:function(t){return _(t,function(e){return e})||[]},only:function(t){if(!T(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};o.Component=l;o.Fragment=M;o.Profiler=I;o.PureComponent=v;o.StrictMode=k;o.Suspense=D;o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f;o.act=function(){throw Error("act(...) is not supported in production builds of React.")};o.cache=function(t){return function(){return t.apply(null,arguments)}};o.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var r=O({},t.props),s=t.key,i=void 0;if(e!=null)for(u in e.ref!==void 0&&(i=void 0),e.key!==void 0&&(s=""+e.key),e)!$.call(e,u)||u==="key"||u==="__self"||u==="__source"||u==="ref"&&e.ref===void 0||(r[u]=e[u]);var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){for(var p=Array(u),c=0;c<u;c++)p[c]=arguments[c+2];r.children=p}return R(t.type,s,void 0,void 0,i,r)};o.createContext=function(t){return t={$$typeof:x,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:L,_context:t},t};o.createElement=function(t,e,n){var r,s={},i=null;if(e!=null)for(r in e.key!==void 0&&(i=""+e.key),e)$.call(e,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(s[r]=e[r]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var p=Array(u),c=0;c<u;c++)p[c]=arguments[c+2];s.children=p}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)s[r]===void 0&&(s[r]=u[r]);return R(t,i,void 0,void 0,null,s)};o.createRef=function(){return{current:null}};o.forwardRef=function(t){return{$$typeof:U,render:t}};o.isValidElement=T;o.lazy=function(t){return{$$typeof:h,_payload:{_status:-1,_result:t},_init:W}};o.memo=function(t,e){return{$$typeof:q,type:t,compare:e===void 0?null:e}};o.startTransition=function(t){var e=f.T,n={};f.T=n;try{var r=t(),s=f.S;s!==null&&s(n,r),typeof r=="object"&&r!==null&&typeof r.then=="function"&&r.then(Q,A)}catch(i){A(i)}finally{f.T=e}};o.unstable_useCacheRefresh=function(){return f.H.useCacheRefresh()};o.use=function(t){return f.H.use(t)};o.useActionState=function(t,e,n){return f.H.useActionState(t,e,n)};o.useCallback=function(t,e){return f.H.useCallback(t,e)};o.useContext=function(t){return f.H.useContext(t)};o.useDebugValue=function(){};o.useDeferredValue=function(t,e){return f.H.useDeferredValue(t,e)};o.useEffect=function(t,e){return f.H.useEffect(t,e)};o.useId=function(){return f.H.useId()};o.useImperativeHandle=function(t,e,n){return f.H.useImperativeHandle(t,e,n)};o.useInsertionEffect=function(t,e){return f.H.useInsertionEffect(t,e)};o.useLayoutEffect=function(t,e){return f.H.useLayoutEffect(t,e)};o.useMemo=function(t,e){return f.H.useMemo(t,e)};o.useOptimistic=function(t,e){return f.H.useOptimistic(t,e)};o.useReducer=function(t,e,n){return f.H.useReducer(t,e,n)};o.useRef=function(t){return f.H.useRef(t)};o.useState=function(t){return f.H.useState(t)};o.useSyncExternalStore=function(t,e,n){return f.H.useSyncExternalStore(t,e,n)};o.useTransition=function(){return f.H.useTransition()};o.version="19.0.0";S.exports=o;var X=S.exports;const J=Y(X);export{J as R,Z as c,Y as g,X as r};
//# sourceMappingURL=index-DGOumNSj.js.map
