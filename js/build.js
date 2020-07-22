/**
 * core-js 2.6.11
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2019 Denis Pushkarev
 */
!function(e,i,Jt){"use strict";!function(r){var e={};function __webpack_require__(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=r,__webpack_require__.c=e,__webpack_require__.d=function(t,n,r){__webpack_require__.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(t){var n=t&&t.__esModule?function getDefault(){return t["default"]}:function getModuleExports(){return t};return __webpack_require__.d(n,"a",n),n},__webpack_require__.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=134)}([function(t,n,r){var v=r(2),g=r(13),y=r(14),d=r(15),b=r(19),_="prototype",S=function(t,n,r){var e,i,o,u,c=t&S.F,f=t&S.G,a=t&S.P,s=t&S.B,l=f?v:t&S.S?v[n]||(v[n]={}):(v[n]||{})[_],h=f?g:g[n]||(g[n]={}),p=h[_]||(h[_]={});for(e in f&&(r=n),r)o=((i=!c&&l&&l[e]!==Jt)?l:r)[e],u=s&&i?b(o,v):a&&"function"==typeof o?b(Function.call,o):o,l&&d(l,e,o,t&S.U),h[e]!=o&&y(h,e,u),a&&p[e]!=o&&(p[e]=o)};v.core=g,S.F=1,S.G=2,S.S=4,S.P=8,S.B=16,S.W=32,S.U=64,S.R=128,t.exports=S},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof i&&(i=r)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n,r){var e=r(47)("wks"),i=r(37),o=r(2).Symbol,u="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},function(t,n,r){t.exports=!r(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(21),i=Math.min;t.exports=function(t){return 0<t?i(e(t),9007199254740991):0}},function(t,n,r){var i=r(1),o=r(98),u=r(23),c=Object.defineProperty;n.f=r(6)?Object.defineProperty:function defineProperty(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(24);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(48),i=r(24);t.exports=function(t){return e(i(t))}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){var r=t.exports={version:"2.6.11"};"number"==typeof e&&(e=r)},function(t,n,r){var e=r(8),i=r(31);t.exports=r(6)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var o=r(2),u=r(14),c=r(12),f=r(37)("src"),e=r(136),i="toString",a=(""+e).split(i);r(13).inspectSource=function(t){return e.call(t)},(t.exports=function(t,n,r,e){var i="function"==typeof r;i&&(c(r,"name")||u(r,"name",n)),t[n]!==r&&(i&&(c(r,f)||u(r,f,t[n]?""+t[n]:a.join(String(n)))),t===o?t[n]=r:e?t[n]?t[n]=r:u(t,n,r):(delete t[n],u(t,n,r)))})(Function.prototype,i,function toString(){return"function"==typeof this&&this[f]||e.call(this)})},function(t,n,r){var e=r(49),i=r(31),o=r(11),u=r(23),c=r(12),f=r(98),a=Object.getOwnPropertyDescriptor;n.f=r(6)?a:function getOwnPropertyDescriptor(t,n){if(t=o(t),n=u(n,!0),f)try{return a(t,n)}catch(r){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},function(t,n,r){var e=r(12),i=r(9),o=r(71)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var e=r(0),i=r(4),u=r(24),c=/"/g,o=function(t,n,r,e){var i=String(u(t)),o="<"+n;return""!==r&&(o+=" "+r+'="'+String(e).replace(c,"&quot;")+'"'),o+">"+i+"</"+n+">"};t.exports=function(n,t){var r={};r[n]=t(o),e(e.P+e.F*i(function(){var t=""[n]('"');return t!==t.toLowerCase()||3<t.split('"').length}),"String",r)}},function(t,n,r){var o=r(10);t.exports=function(e,i,t){if(o(e),i===Jt)return e;switch(t){case 1:return function(t){return e.call(i,t)};case 2:return function(t,n){return e.call(i,t,n)};case 3:return function(t,n,r){return e.call(i,t,n,r)}}return function(){return e.apply(i,arguments)}}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?e:r)(t)}},function(t,n,r){var e=r(4);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n,r){var i=r(3);t.exports=function(t,n){if(!i(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!i(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!i(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!i(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if(t==Jt)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var i=r(0),o=r(13),u=r(4);t.exports=function(t,n){var r=(o.Object||{})[t]||Object[t],e={};e[t]=n(r),i(i.S+i.F*u(function(){r(1)}),"Object",e)}},function(t,n,r){var _=r(19),S=r(48),x=r(9),m=r(7),e=r(86);t.exports=function(l,t){var h=1==l,p=2==l,v=3==l,g=4==l,y=6==l,d=5==l||y,b=t||e;return function(t,n,r){for(var e,i,o=x(t),u=S(o),c=_(n,r,3),f=m(u.length),a=0,s=h?b(t,f):p?b(t,0):Jt;a<f;a++)if((d||a in u)&&(i=c(e=u[a],a,o),l))if(h)s[a]=i;else if(i)switch(l){case 3:return!0;case 5:return e;case 6:return a;case 2:s.push(e)}else if(g)return!1;return y?-1:v||g?g:s}}},function(t,n,r){var e=r(100),i=r(72);t.exports=Object.keys||function keys(t){return e(t,i)}},function(t,n,e){var i=e(1),o=e(101),u=e(72),c=e(71)("IE_PROTO"),f=function(){},a="prototype",s=function(){var t,n=e(69)("iframe"),r=u.length;for(n.style.display="none",e(73).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s[a][u[r]];return s()};t.exports=Object.create||function create(t,n){var r;return null!==t?(f[a]=i(t),r=new f,f[a]=null,r[c]=t):r=s(),n===Jt?r:o(r,n)}},function(t,n,r){if(r(6)){var y=r(32),d=r(2),b=r(4),_=r(0),S=r(65),e=r(96),h=r(19),x=r(42),i=r(31),m=r(14),o=r(43),u=r(21),w=r(7),E=r(123),c=r(38),f=r(23),a=r(12),O=r(34),M=r(3),p=r(9),v=r(84),P=r(28),I=r(17),F=r(39).f,g=r(50),s=r(37),l=r(5),A=r(26),k=r(53),j=r(52),N=r(88),R=r(40),T=r(60),D=r(41),L=r(87),C=r(113),U=r(8),W=r(16),G=U.f,V=W.f,B=d.RangeError,q=d.TypeError,z=d.Uint8Array,K="ArrayBuffer",J="Shared"+K,$="BYTES_PER_ELEMENT",H="prototype",Y=Array[H],X=e.ArrayBuffer,Z=e.DataView,Q=A(0),tt=A(2),nt=A(3),rt=A(4),et=A(5),it=A(6),ot=k(!0),ut=k(!1),ct=N.values,ft=N.keys,at=N.entries,st=Y.lastIndexOf,lt=Y.reduce,ht=Y.reduceRight,pt=Y.join,vt=Y.sort,gt=Y.slice,yt=Y.toString,dt=Y.toLocaleString,bt=l("iterator"),_t=l("toStringTag"),St=s("typed_constructor"),xt=s("def_constructor"),mt=S.CONSTR,wt=S.TYPED,Et=S.VIEW,Ot="Wrong length!",Mt=A(1,function(t,n){return kt(j(t,t[xt]),n)}),Pt=b(function(){return 1===new z(new Uint16Array([1]).buffer)[0]}),It=!!z&&!!z[H].set&&b(function(){new z(1).set({})}),Ft=function(t,n){var r=u(t);if(r<0||r%n)throw B("Wrong offset!");return r},At=function(t){if(M(t)&&wt in t)return t;throw q(t+" is not a typed array!")},kt=function(t,n){if(!(M(t)&&St in t))throw q("It is not a typed array constructor!");return new t(n)},jt=function(t,n){return Nt(j(t,t[xt]),n)},Nt=function(t,n){for(var r=0,e=n.length,i=kt(t,e);r<e;)i[r]=n[r++];return i},Rt=function(t,n,r){G(t,n,{get:function(){return this._d[r]}})},Tt=function from(t){var n,r,e,i,o,u,c=p(t),f=arguments.length,a=1<f?arguments[1]:Jt,s=a!==Jt,l=g(c);if(l!=Jt&&!v(l)){for(u=l.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(s&&2<f&&(a=h(a,arguments[2],2)),n=0,r=w(c.length),i=kt(this,r);n<r;n++)i[n]=s?a(c[n],n):c[n];return i},Dt=function of(){for(var t=0,n=arguments.length,r=kt(this,n);t<n;)r[t]=arguments[t++];return r},Lt=!!z&&b(function(){dt.call(new z(1))}),Ct=function toLocaleString(){return dt.apply(Lt?gt.call(At(this)):At(this),arguments)},Ut={copyWithin:function copyWithin(t,n){return C.call(At(this),t,n,2<arguments.length?arguments[2]:Jt)},every:function every(t){return rt(At(this),t,1<arguments.length?arguments[1]:Jt)},fill:function fill(t){return L.apply(At(this),arguments)},filter:function filter(t){return jt(this,tt(At(this),t,1<arguments.length?arguments[1]:Jt))},find:function find(t){return et(At(this),t,1<arguments.length?arguments[1]:Jt)},findIndex:function findIndex(t){return it(At(this),t,1<arguments.length?arguments[1]:Jt)},forEach:function forEach(t){Q(At(this),t,1<arguments.length?arguments[1]:Jt)},indexOf:function indexOf(t){return ut(At(this),t,1<arguments.length?arguments[1]:Jt)},includes:function includes(t){return ot(At(this),t,1<arguments.length?arguments[1]:Jt)},join:function join(t){return pt.apply(At(this),arguments)},lastIndexOf:function lastIndexOf(t){return st.apply(At(this),arguments)},map:function map(t){return Mt(At(this),t,1<arguments.length?arguments[1]:Jt)},reduce:function reduce(t){return lt.apply(At(this),arguments)},reduceRight:function reduceRight(t){return ht.apply(At(this),arguments)},reverse:function reverse(){for(var t,n=this,r=At(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function some(t){return nt(At(this),t,1<arguments.length?arguments[1]:Jt)},sort:function sort(t){return vt.call(At(this),t)},subarray:function subarray(t,n){var r=At(this),e=r.length,i=c(t,e);return new(j(r,r[xt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,w((n===Jt?e:c(n,e))-i))}},Wt=function slice(t,n){return jt(this,gt.call(At(this),t,n))},Gt=function set(t){At(this);var n=Ft(arguments[1],1),r=this.length,e=p(t),i=w(e.length),o=0;if(r<i+n)throw B(Ot);for(;o<i;)this[n+o]=e[o++]},Vt={entries:function entries(){return at.call(At(this))},keys:function keys(){return ft.call(At(this))},values:function values(){return ct.call(At(this))}},Bt=function(t,n){return M(t)&&t[wt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},qt=function getOwnPropertyDescriptor(t,n){return Bt(t,n=f(n,!0))?i(2,t[n]):V(t,n)},zt=function defineProperty(t,n,r){return!(Bt(t,n=f(n,!0))&&M(r)&&a(r,"value"))||a(r,"get")||a(r,"set")||r.configurable||a(r,"writable")&&!r.writable||a(r,"enumerable")&&!r.enumerable?G(t,n,r):(t[n]=r.value,t)};mt||(W.f=qt,U.f=zt),_(_.S+_.F*!mt,"Object",{getOwnPropertyDescriptor:qt,defineProperty:zt}),b(function(){yt.call({})})&&(yt=dt=function toString(){return pt.call(this)});var Kt=o({},Ut);o(Kt,Vt),m(Kt,bt,Vt.values),o(Kt,{slice:Wt,set:Gt,constructor:function(){},toString:yt,toLocaleString:Ct}),Rt(Kt,"buffer","b"),Rt(Kt,"byteOffset","o"),Rt(Kt,"byteLength","l"),Rt(Kt,"length","e"),G(Kt,_t,{get:function(){return this[wt]}}),t.exports=function(t,l,n,o){var h=t+((o=!!o)?"Clamped":"")+"Array",r="get"+t,u="set"+t,p=d[h],c=p||{},e=p&&I(p),i={},f=p&&p[H],v=function(t,i){G(t,i,{get:function(){return(t=this._d).v[r](i*l+t.o,Pt);var t},set:function(t){return n=i,r=t,e=this._d,o&&(r=(r=Math.round(r))<0?0:255<r?255:255&r),void e.v[u](n*l+e.o,r,Pt);var n,r,e},enumerable:!0})};!p||!S.ABV?(p=n(function(t,n,r,e){x(t,p,h,"_d");var i,o,u,c,f=0,a=0;if(M(n)){if(!(n instanceof X||(c=O(n))==K||c==J))return wt in n?Nt(p,n):Tt.call(p,n);i=n,a=Ft(r,l);var s=n.byteLength;if(e===Jt){if(s%l)throw B(Ot);if((o=s-a)<0)throw B(Ot)}else if(s<(o=w(e)*l)+a)throw B(Ot);u=o/l}else u=E(n),i=new X(o=u*l);for(m(t,"_d",{b:i,o:a,l:o,e:u,v:new Z(i)});f<u;)v(t,f++)}),f=p[H]=P(Kt),m(f,"constructor",p)):b(function(){p(1)})&&b(function(){new p(-1)})&&T(function(t){new p,new p(null),new p(1.5),new p(t)},!0)||(p=n(function(t,n,r,e){var i;return x(t,p,h),M(n)?n instanceof X||(i=O(n))==K||i==J?e!==Jt?new c(n,Ft(r,l),e):r!==Jt?new c(n,Ft(r,l)):new c(n):wt in n?Nt(p,n):Tt.call(p,n):new c(E(n))}),Q(e!==Function.prototype?F(c).concat(F(e)):F(c),function(t){t in p||m(p,t,c[t])}),p[H]=f,y||(f.constructor=p));var a=f[bt],s=!!a&&("values"==a.name||a.name==Jt),g=Vt.values;m(p,St,!0),m(f,wt,h),m(f,Et,!0),m(f,xt,p),(o?new p(1)[_t]==h:_t in f)||G(f,_t,{get:function(){return h}}),_(_.G+_.W+_.F*((i[h]=p)!=c),i),_(_.S,h,{BYTES_PER_ELEMENT:l}),_(_.S+_.F*b(function(){c.of.call(p,1)}),h,{from:Tt,of:Dt}),$ in f||m(f,$,l),_(_.P,h,Ut),D(h),_(_.P+_.F*It,h,{set:Gt}),_(_.P+_.F*!s,h,Vt),y||f.toString==yt||(f.toString=yt),_(_.P+_.F*b(function(){new p(1).slice()}),h,{slice:Wt}),_(_.P+_.F*(b(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!b(function(){f.toLocaleString.call([1,2])})),h,{toLocaleString:Ct}),R[h]=s?a:g,y||s||m(f,bt,g)}}else t.exports=function(){}},function(t,n,r){var o=r(118),e=r(0),i=r(47)("metadata"),u=i.store||(i.store=new(r(121))),c=function(t,n,r){var e=u.get(t);if(!e){if(!r)return Jt;u.set(t,e=new o)}var i=e.get(n);if(!i){if(!r)return Jt;e.set(n,i=new o)}return i};t.exports={store:u,map:c,has:function(t,n,r){var e=c(n,r,!1);return e!==Jt&&e.has(t)},get:function(t,n,r){var e=c(n,r,!1);return e===Jt?Jt:e.get(t)},set:function(t,n,r,e){c(r,e,!0).set(t,n)},keys:function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},key:function(t){return t===Jt||"symbol"==typeof t?t:String(t)},exp:function(t){e(e.S,"Reflect",t)}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports=!1},function(t,n,r){var e=r(37)("meta"),i=r(3),o=r(12),u=r(8).f,c=0,f=Object.isExtensible||function(){return!0},a=!r(4)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!o(t,e)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return a&&l.NEED&&f(t)&&!o(t,e)&&s(t),t}}},function(t,n,r){var i=r(20),o=r(5)("toStringTag"),u="Arguments"==i(function(){return arguments}());t.exports=function(t){var n,r,e;return t===Jt?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(r){}}(n=Object(t),o))?r:u?i(n):"Object"==(e=i(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var e=r(5)("unscopables"),i=Array.prototype;i[e]==Jt&&r(14)(i,e,{}),t.exports=function(t){i[e][t]=!0}},function(t,n,r){var h=r(19),p=r(111),v=r(84),g=r(1),y=r(7),d=r(50),b={},_={};(n=t.exports=function(t,n,r,e,i){var o,u,c,f,a=i?function(){return t}:d(t),s=h(r,e,n?2:1),l=0;if("function"!=typeof a)throw TypeError(t+" is not iterable!");if(v(a)){for(o=y(t.length);l<o;l++)if((f=n?s(g(u=t[l])[0],u[1]):s(t[l]))===b||f===_)return f}else for(c=a.call(t);!(u=c.next()).done;)if((f=p(c,s,u.value,n))===b||f===_)return f}).BREAK=b,n.RETURN=_},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(t===Jt?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(21),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=e(t))<0?i(t+n,0):o(t,n)}},function(t,n,r){var e=r(100),i=r(72).concat("length","prototype");n.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return e(t,i)}},function(t,n){t.exports={}},function(t,n,r){var e=r(2),i=r(8),o=r(6),u=r(5)("species");t.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||e!==Jt&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){var i=r(15);t.exports=function(t,n,r){for(var e in n)i(t,e,n[e],r);return t}},function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,r){var e=r(8).f,i=r(12),o=r(5)("toStringTag");t.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},function(t,n,r){var u=r(0),e=r(24),c=r(4),f=r(78),i="["+f+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),s=function(t,n,r){var e={},i=c(function(){return!!f[t]()||"​"!="​"[t]()}),o=e[t]=i?n(l):f[t];r&&(e[r]=o),u(u.P+u.F*i,"String",e)},l=s.trim=function(t,n){return t=String(e(t)),1&n&&(t=t.replace(o,"")),2&n&&(t=t.replace(a,"")),t};t.exports=s},function(t,n,r){var e=r(13),i=r(2),o="__core-js_shared__",u=i[o]||(i[o]={});(t.exports=function(t,n){return u[t]||(u[t]=n!==Jt?n:{})})("versions",[]).push({version:e.version,mode:r(32)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(34),i=r(5)("iterator"),o=r(40);t.exports=r(13).getIteratorMethod=function(t){if(t!=Jt)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(1);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){var i=r(1),o=r(10),u=r(5)("species");t.exports=function(t,n){var r,e=i(t).constructor;return e===Jt||(r=i(e)[u])==Jt?n:o(r)}},function(t,n,r){var f=r(11),a=r(7),s=r(38);t.exports=function(c){return function(t,n,r){var e,i=f(t),o=a(i.length),u=s(r,o);if(c&&n!=n){for(;u<o;)if((e=i[u++])!=e)return!0}else for(;u<o;u++)if((c||u in i)&&i[u]===n)return c||u||0;return!c&&-1}}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(20);t.exports=Array.isArray||function isArray(t){return"Array"==e(t)}},function(t,n,r){var f=r(21),a=r(24);t.exports=function(c){return function(t,n){var r,e,i=String(a(t)),o=f(n),u=i.length;return o<0||u<=o?c?"":Jt:(r=i.charCodeAt(o))<55296||56319<r||o+1===u||(e=i.charCodeAt(o+1))<56320||57343<e?c?i.charAt(o):r:c?i.slice(o,o+2):e-56320+(r-55296<<10)+65536}}},function(t,n,r){var e=r(3),i=r(20),o=r(5)("match");t.exports=function(t){var n;return e(t)&&((n=t[o])!==Jt?!!n:"RegExp"==i(t))}},function(t,n,r){var _=r(32),S=r(0),x=r(15),m=r(14),w=r(40),E=r(59),O=r(45),M=r(17),P=r(5)("iterator"),I=!([].keys&&"next"in[].keys()),F="values",A=function(){return this};t.exports=function(t,n,r,e,i,o,u){E(r,n,e);var c,f,a,s=function(t){if(!I&&t in v)return v[t];switch(t){case"keys":return function keys(){return new r(this,t)};case F:return function values(){return new r(this,t)}}return function entries(){return new r(this,t)}},l=n+" Iterator",h=i==F,p=!1,v=t.prototype,g=v[P]||v["@@iterator"]||i&&v[i],y=g||s(i),d=i?h?s("entries"):y:Jt,b="Array"==n&&v.entries||g;if(b&&(a=M(b.call(new t)))!==Object.prototype&&a.next&&(O(a,l,!0),_||"function"==typeof a[P]||m(a,P,A)),h&&g&&g.name!==F&&(p=!0,y=function values(){return g.call(this)}),_&&!u||!I&&!p&&v[P]||m(v,P,y),w[n]=y,w[l]=A,i)if(c={values:h?y:s(F),keys:o?y:s("keys"),entries:d},u)for(f in c)f in v||x(v,f,c[f]);else S(S.P+S.F*(I||p),n,c);return c}},function(t,n,r){var e=r(28),i=r(31),o=r(45),u={};r(14)(u,r(5)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},function(t,n,r){var o=r(5)("iterator"),u=!1;try{var e=[7][o]();e["return"]=function(){u=!0},Array.from(e,function(){throw 2})}catch(c){}t.exports=function(t,n){if(!n&&!u)return!1;var r=!1;try{var e=[7],i=e[o]();i.next=function(){return{done:r=!0}},e[o]=function(){return i},t(e)}catch(c){}return r}},function(t,n,r){var i=r(34),o=RegExp.prototype.exec;t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var e=r.call(t,n);if("object"!=typeof e)throw new TypeError("RegExp exec method returned something other than an Object or null");return e}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,r){r(114);var a=r(15),s=r(14),l=r(4),h=r(24),p=r(5),v=r(90),g=p("species"),y=!l(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(r,t,n){var e=p(r),o=!l(function(){var t={};return t[e]=function(){return 7},7!=""[r](t)}),i=o?!l(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===r&&(n.constructor={},n.constructor[g]=function(){return n}),n[e](""),!t}):Jt;if(!o||!i||"replace"===r&&!y||"split"===r&&!d){var u=/./[e],c=n(h,e,""[r],function maybeCallNative(t,n,r,e,i){return n.exec===v?o&&!i?{done:!0,value:u.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}}),f=c[1];a(String.prototype,r,c[0]),s(RegExp.prototype,e,2==t?function(t,n){return f.call(t,this,n)}:function(t){return f.call(t,this)})}}},function(t,n,r){var e=r(2).navigator;t.exports=e&&e.userAgent||""},function(t,n,r){var d=r(2),b=r(0),_=r(15),S=r(43),x=r(33),m=r(36),w=r(42),E=r(3),O=r(4),M=r(60),P=r(45),I=r(77);t.exports=function(e,t,n,r,i,o){var u=d[e],c=u,f=i?"set":"add",a=c&&c.prototype,s={},l=function(t){var r=a[t];_(a,t,"delete"==t?function(t){return!(o&&!E(t))&&r.call(this,0===t?0:t)}:"has"==t?function has(t){return!(o&&!E(t))&&r.call(this,0===t?0:t)}:"get"==t?function get(t){return o&&!E(t)?Jt:r.call(this,0===t?0:t)}:"add"==t?function add(t){return r.call(this,0===t?0:t),this}:function set(t,n){return r.call(this,0===t?0:t,n),this})};if("function"==typeof c&&(o||a.forEach&&!O(function(){(new c).entries().next()}))){var h=new c,p=h[f](o?{}:-0,1)!=h,v=O(function(){h.has(1)}),g=M(function(t){new c(t)}),y=!o&&O(function(){for(var t=new c,n=5;n--;)t[f](n,n);return!t.has(-0)});g||(((c=t(function(t,n){w(t,c,e);var r=I(new u,t,c);return n!=Jt&&m(n,i,r[f],r),r})).prototype=a).constructor=c),(v||y)&&(l("delete"),l("has"),i&&l("get")),(y||p)&&l(f),o&&a.clear&&delete a.clear}else c=r.getConstructor(t,e,i,f),S(c.prototype,n),x.NEED=!0;return P(c,e),b(b.G+b.W+b.F*((s[e]=c)!=u),s),o||r.setStrong(c,e,i),c}},function(t,n,r){for(var e,i=r(2),o=r(14),u=r(37),c=u("typed_array"),f=u("view"),a=!(!i.ArrayBuffer||!i.DataView),s=a,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[h[l++]])?(o(e.prototype,c,!0),o(e.prototype,f,!0)):s=!1;t.exports={ABV:a,CONSTR:s,TYPED:c,VIEW:f}},function(t,n,r){t.exports=r(32)||!r(4)(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete r(2)[t]})},function(t,n,r){var e=r(0);t.exports=function(t){e(e.S,t,{of:function of(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,r){var e=r(0),u=r(10),c=r(19),f=r(36);t.exports=function(t){e(e.S,t,{from:function from(t){var n,r,e,i,o=arguments[1];return u(this),(n=o!==Jt)&&u(o),t==Jt?new this:(r=[],n?(e=0,i=c(o,arguments[2],2),f(t,!1,function(t){r.push(i(t,e++))})):f(t,!1,r.push,r),new this(r))}})}},function(t,n,r){var e=r(3),i=r(2).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,r){var e=r(2),i=r(13),o=r(32),u=r(99),c=r(8).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){var e=r(47)("keys"),i=r(37);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(2).document;t.exports=e&&e.documentElement},function(t,n,r){var h=r(6),p=r(27),v=r(54),g=r(49),y=r(9),d=r(48),i=Object.assign;t.exports=!i||r(4)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=i({},t)[r]||Object.keys(i({},n)).join("")!=e})?function assign(t,n){for(var r=y(t),e=arguments.length,i=1,o=v.f,u=g.f;i<e;)for(var c,f=d(arguments[i++]),a=o?p(f).concat(o(f)):p(f),s=a.length,l=0;l<s;)c=a[l++],h&&!u.call(f,c)||(r[c]=f[c]);return r}:i},function(t,n,i){var r=i(3),e=i(1),o=function(t,n){if(e(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,e){try{(e=i(19)(Function.call,i(16).f(Object.prototype,"__proto__").set,2))(t,[]),r=!(t instanceof Array)}catch(n){r=!0}return function setPrototypeOf(t,n){return o(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):Jt),check:o}},function(t,n){t.exports=function(t,n,r){var e=r===Jt;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},function(t,n,r){var o=r(3),u=r(75).set;t.exports=function(t,n,r){var e,i=n.constructor;return i!==r&&"function"==typeof i&&(e=i.prototype)!==r.prototype&&o(e)&&u&&u(t,e),t}},function(t,n){t.exports="\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,r){var i=r(21),o=r(24);t.exports=function repeat(t){var n=String(o(this)),r="",e=i(t);if(e<0||e==Infinity)throw RangeError("Count can't be negative");for(;0<e;(e>>>=1)&&(n+=n))1&e&&(r+=n);return r}},function(t,n){t.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n){var r=Math.expm1;t.exports=!r||22025.465794806718<r(10)||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function expm1(t){return 0==(t=+t)?t:-1e-6<t&&t<1e-6?t+t*t/2:Math.exp(t)-1}:r},function(t,n,r){var e=r(57),i=r(24);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},function(t,n,r){var i=r(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[i]=!1,!"/./"[t](n)}catch(e){}}return!0}},function(t,n,r){var e=r(40),i=r(5)("iterator"),o=Array.prototype;t.exports=function(t){return t!==Jt&&(e.Array===t||o[i]===t)}},function(t,n,r){var e=r(8),i=r(31);t.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},function(t,n,r){var e=r(218);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var c=r(9),f=r(38),a=r(7);t.exports=function fill(t){for(var n=c(this),r=a(n.length),e=arguments.length,i=f(1<e?arguments[1]:Jt,r),o=2<e?arguments[2]:Jt,u=o===Jt?r:f(o,r);i<u;)n[i++]=t;return n}},function(t,n,r){var e=r(35),i=r(89),o=r(40),u=r(11);t.exports=r(58)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||t.length<=r?(this._t=Jt,i(1)):i(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){var e,i,u=r(51),c=RegExp.prototype.exec,f=String.prototype.replace,o=c,a="lastIndex",s=(i=/b*/g,c.call(e=/a/,"a"),c.call(i,"a"),0!==e[a]||0!==i[a]),l=/()??/.exec("")[1]!==Jt;(s||l)&&(o=function exec(t){var n,r,e,i,o=this;return l&&(r=new RegExp("^"+o.source+"$(?!\\s)",u.call(o))),s&&(n=o[a]),e=c.call(o,t),s&&e&&(o[a]=o.global?e.index+e[0].length:n),l&&e&&1<e.length&&f.call(e[0],r,function(){for(i=1;i<arguments.length-2;i++)arguments[i]===Jt&&(e[i]=Jt)}),e}),t.exports=o},function(t,n,r){var e=r(56)(!0);t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var e,i,o,u=r(19),c=r(76),f=r(73),a=r(69),s=r(2),l=s.process,h=s.setImmediate,p=s.clearImmediate,v=s.MessageChannel,g=s.Dispatch,y=0,d={},b="onreadystatechange",_=function(){var t=+this;if(d.hasOwnProperty(t)){var n=d[t];delete d[t],n()}},S=function(t){_.call(t.data)};h&&p||(h=function setImmediate(t){for(var n=[],r=1;r<arguments.length;)n.push(arguments[r++]);return d[++y]=function(){c("function"==typeof t?t:Function(t),n)},e(y),y},p=function clearImmediate(t){delete d[t]},"process"==r(20)(l)?e=function(t){l.nextTick(u(_,t,1))}:g&&g.now?e=function(t){g.now(u(_,t,1))}:v?(o=(i=new v).port2,i.port1.onmessage=S,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",S,!1)):e=b in a("script")?function(t){f.appendChild(a("script"))[b]=function(){f.removeChild(this),_.call(t)}}:function(t){setTimeout(u(_,t,1),0)}),t.exports={set:h,clear:p}},function(t,n,r){var c=r(2),f=r(92).set,a=c.MutationObserver||c.WebKitMutationObserver,s=c.process,l=c.Promise,h="process"==r(20)(s);t.exports=function(){var e,i,o,t=function(){var t,n;for(h&&(t=s.domain)&&t.exit();e;){n=e.fn,e=e.next;try{n()}catch(r){throw e?o():i=Jt,r}}i=Jt,t&&t.enter()};if(h)o=function(){s.nextTick(t)};else if(!a||c.navigator&&c.navigator.standalone)if(l&&l.resolve){var n=l.resolve(Jt);o=function(){n.then(t)}}else o=function(){f.call(c,t)};else{var r=!0,u=document.createTextNode("");new a(t).observe(u,{characterData:!0}),o=function(){u.data=r=!r}}return function(t){var n={fn:t,next:Jt};i&&(i.next=n),e||(e=n,o()),i=n}}},function(t,n,r){var i=r(10);function PromiseCapability(t){var r,e;this.promise=new t(function(t,n){if(r!==Jt||e!==Jt)throw TypeError("Bad Promise constructor");r=t,e=n}),this.resolve=i(r),this.reject=i(e)}t.exports.f=function(t){return new PromiseCapability(t)}},function(t,n,r){var e=r(39),i=r(54),o=r(1),u=r(2).Reflect;t.exports=u&&u.ownKeys||function ownKeys(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(2),i=r(6),o=r(32),u=r(65),c=r(14),f=r(43),a=r(4),s=r(42),l=r(21),h=r(7),p=r(123),v=r(39).f,g=r(8).f,y=r(87),d=r(45),b="ArrayBuffer",_="DataView",S="prototype",x="Wrong index!",m=e[b],w=e[_],E=e.Math,O=e.RangeError,M=e.Infinity,P=m,I=E.abs,F=E.pow,A=E.floor,k=E.log,j=E.LN2,N="byteLength",R="byteOffset",T=i?"_b":"buffer",D=i?"_l":N,L=i?"_o":R;function packIEEE754(t,n,r){var e,i,o,u=new Array(r),c=8*r-n-1,f=(1<<c)-1,a=f>>1,s=23===n?F(2,-24)-F(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=I(t))!=t||t===M?(i=t!=t?1:0,e=f):(e=A(k(t)/j),t*(o=F(2,-e))<1&&(e--,o*=2),2<=(t+=1<=e+a?s/o:s*F(2,1-a))*o&&(e++,o/=2),f<=e+a?(i=0,e=f):1<=e+a?(i=(t*o-1)*F(2,n),e+=a):(i=t*F(2,a-1)*F(2,n),e=0));8<=n;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;0<c;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u}function unpackIEEE754(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,f=r-1,a=t[f--],s=127&a;for(a>>=7;0<c;s=256*s+t[f],f--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;0<c;e=256*e+t[f],f--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:a?-M:M;e+=F(2,n),s-=u}return(a?-1:1)*e*F(2,s-n)}function unpackI32(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function packI8(t){return[255&t]}function packI16(t){return[255&t,t>>8&255]}function packI32(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function packF64(t){return packIEEE754(t,52,8)}function packF32(t){return packIEEE754(t,23,4)}function addGetter(t,n,r){g(t[S],n,{get:function(){return this[r]}})}function get(t,n,r,e){var i=p(+r);if(t[D]<i+n)throw O(x);var o=i+t[L],u=t[T]._b.slice(o,o+n);return e?u:u.reverse()}function set(t,n,r,e,i,o){var u=p(+r);if(t[D]<u+n)throw O(x);for(var c=t[T]._b,f=u+t[L],a=e(+i),s=0;s<n;s++)c[f+s]=a[o?s:n-s-1]}if(u.ABV){if(!a(function(){m(1)})||!a(function(){new m(-1)})||a(function(){return new m,new m(1.5),new m(NaN),m.name!=b})){for(var C,U=(m=function ArrayBuffer(t){return s(this,m),new P(p(t))})[S]=P[S],W=v(P),G=0;G<W.length;)(C=W[G++])in m||c(m,C,P[C]);o||(U.constructor=m)}var V=new w(new m(2)),B=w[S].setInt8;V.setInt8(0,2147483648),V.setInt8(1,2147483649),!V.getInt8(0)&&V.getInt8(1)||f(w[S],{setInt8:function setInt8(t,n){B.call(this,t,n<<24>>24)},setUint8:function setUint8(t,n){B.call(this,t,n<<24>>24)}},!0)}else m=function ArrayBuffer(t){s(this,m,b);var n=p(t);this._b=y.call(new Array(n),0),this[D]=n},w=function DataView(t,n,r){s(this,w,_),s(t,m,_);var e=t[D],i=l(n);if(i<0||e<i)throw O("Wrong offset!");if(e<i+(r=r===Jt?e-i:h(r)))throw O("Wrong length!");this[T]=t,this[L]=i,this[D]=r},i&&(addGetter(m,N,"_l"),addGetter(w,"buffer","_b"),addGetter(w,N,"_l"),addGetter(w,R,"_o")),f(w[S],{getInt8:function getInt8(t){return get(this,1,t)[0]<<24>>24},getUint8:function getUint8(t){
return get(this,1,t)[0]},getInt16:function getInt16(t){var n=get(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function getUint16(t){var n=get(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function getInt32(t){return unpackI32(get(this,4,t,arguments[1]))},getUint32:function getUint32(t){return unpackI32(get(this,4,t,arguments[1]))>>>0},getFloat32:function getFloat32(t){return unpackIEEE754(get(this,4,t,arguments[1]),23,4)},getFloat64:function getFloat64(t){return unpackIEEE754(get(this,8,t,arguments[1]),52,8)},setInt8:function setInt8(t,n){set(this,1,t,packI8,n)},setUint8:function setUint8(t,n){set(this,1,t,packI8,n)},setInt16:function setInt16(t,n){set(this,2,t,packI16,n,arguments[2])},setUint16:function setUint16(t,n){set(this,2,t,packI16,n,arguments[2])},setInt32:function setInt32(t,n){set(this,4,t,packI32,n,arguments[2])},setUint32:function setUint32(t,n){set(this,4,t,packI32,n,arguments[2])},setFloat32:function setFloat32(t,n){set(this,4,t,packF32,n,arguments[2])},setFloat64:function setFloat64(t,n){set(this,8,t,packF64,n,arguments[2])}});d(m,b),d(w,_),c(w[S],u.VIEW,!0),n[b]=m,n[_]=w},function(t,n){t.exports=function(n,r){var e=r===Object(r)?function(t){return r[t]}:r;return function(t){return String(t).replace(n,e)}}},function(t,n,r){t.exports=!r(6)&&!r(4)(function(){return 7!=Object.defineProperty(r(69)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){n.f=r(5)},function(t,n,r){var u=r(12),c=r(11),f=r(53)(!1),a=r(71)("IE_PROTO");t.exports=function(t,n){var r,e=c(t),i=0,o=[];for(r in e)r!=a&&u(e,r)&&o.push(r);for(;i<n.length;)u(e,r=n[i++])&&(~f(o,r)||o.push(r));return o}},function(t,n,r){var u=r(8),c=r(1),f=r(27);t.exports=r(6)?Object.defineProperties:function defineProperties(t,n){c(t);for(var r,e=f(n),i=e.length,o=0;o<i;)u.f(t,r=e[o++],n[r]);return t}},function(t,n,r){var e=r(11),i=r(39).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function getOwnPropertyNames(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(n){return u.slice()}}(t):i(e(t))}},function(t,n){t.exports=Object.is||function is(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,r){var o=r(10),u=r(3),c=r(76),f=[].slice,a={};t.exports=Function.bind||function bind(n){var r=o(this),e=f.call(arguments,1),i=function(){var t=e.concat(f.call(arguments));return this instanceof i?function(t,n,r){if(!(n in a)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";a[n]=Function("F,a","return new F("+e.join(",")+")")}return a[n](t,r)}(r,t.length,t):c(r,t,n)};return u(r.prototype)&&(i.prototype=r.prototype),i}},function(t,n,r){var e=r(20);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},function(t,n,r){var e=r(3),i=Math.floor;t.exports=function isInteger(t){return!e(t)&&isFinite(t)&&i(t)===t}},function(t,n,r){var e=r(2).parseFloat,i=r(46).trim;t.exports=1/e(r(78)+"-0")!=-Infinity?function parseFloat(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},function(t,n,r){var e=r(2).parseInt,i=r(46).trim,o=r(78),u=/^[-+]?0[xX]/;t.exports=8!==e(o+"08")||22!==e(o+"0x16")?function parseInt(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},function(t,n){t.exports=Math.log1p||function log1p(t){return-1e-8<(t=+t)&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,r){var o=r(80),e=Math.pow,u=e(2,-52),c=e(2,-23),f=e(2,127)*(2-c),a=e(2,-126);t.exports=Math.fround||function fround(t){var n,r,e=Math.abs(t),i=o(t);return e<a?i*(e/a/c+1/u-1/u)*a*c:f<(r=(n=(1+c/u)*e)-(n-e))||r!=r?i*Infinity:i*r}},function(t,n,r){var u=r(1);t.exports=function(t,n,r,e){try{return e?n(u(r)[0],r[1]):n(r)}catch(o){var i=t["return"];throw i!==Jt&&u(i.call(t)),o}}},function(t,n,r){var s=r(10),l=r(9),h=r(48),p=r(7);t.exports=function(t,n,r,e,i){s(n);var o=l(t),u=h(o),c=p(o.length),f=i?c-1:0,a=i?-1:1;if(r<2)for(;;){if(f in u){e=u[f],f+=a;break}if(f+=a,i?f<0:c<=f)throw TypeError("Reduce of empty array with no initial value")}for(;i?0<=f:f<c;f+=a)f in u&&(e=n(e,u[f],f,o));return e}},function(t,n,r){var a=r(9),s=r(38),l=r(7);t.exports=[].copyWithin||function copyWithin(t,n){var r=a(this),e=l(r.length),i=s(t,e),o=s(n,e),u=2<arguments.length?arguments[2]:Jt,c=Math.min((u===Jt?e:s(u,e))-o,e-i),f=1;for(o<i&&i<o+c&&(f=-1,o+=c-1,i+=c-1);0<c--;)o in r?r[i]=r[o]:delete r[i],i+=f,o+=f;return r}},function(t,n,r){var e=r(90);r(0)({target:"RegExp",proto:!0,forced:e!==/./.exec},{exec:e})},function(t,n,r){r(6)&&"g"!=/./g.flags&&r(8).f(RegExp.prototype,"flags",{configurable:!0,get:r(51)})},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(n){return{e:!0,v:n}}}},function(t,n,r){var e=r(1),i=r(3),o=r(94);t.exports=function(t,n){if(e(t),i(n)&&n.constructor===t)return n;var r=o.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){var e=r(119),i=r(44);t.exports=r(64)("Map",function(t){return function Map(){return t(this,0<arguments.length?arguments[0]:Jt)}},{get:function get(t){var n=e.getEntry(i(this,"Map"),t);return n&&n.v},set:function set(t,n){return e.def(i(this,"Map"),0===t?0:t,n)}},e,!0)},function(t,n,r){var u=r(8).f,c=r(28),f=r(43),a=r(19),s=r(42),l=r(36),e=r(58),i=r(89),o=r(41),h=r(6),p=r(33).fastKey,v=r(44),g=h?"_s":"size",y=function(t,n){var r,e=p(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,o,r,e){var i=t(function(t,n){s(t,i,o,"_i"),t._t=o,t._i=c(null),t._f=Jt,t._l=Jt,t[g]=0,n!=Jt&&l(n,r,t[e],t)});return f(i.prototype,{clear:function clear(){for(var t=v(this,o),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=Jt),delete n[r.i];t._f=t._l=Jt,t[g]=0},"delete":function(t){var n=v(this,o),r=y(n,t);if(r){var e=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=e),e&&(e.p=i),n._f==r&&(n._f=e),n._l==r&&(n._l=i),n[g]--}return!!r},forEach:function forEach(t){v(this,o);for(var n,r=a(t,1<arguments.length?arguments[1]:Jt,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function has(t){return!!y(v(this,o),t)}}),h&&u(i.prototype,"size",{get:function(){return v(this,o)[g]}}),i},def:function(t,n,r){var e,i,o=y(t,n);return o?o.v=r:(t._l=o={i:i=p(n,!0),k:n,v:r,p:e=t._l,n:Jt,r:!1},t._f||(t._f=o),e&&(e.n=o),t[g]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,r,n){e(t,r,function(t,n){this._t=v(t,r),this._k=n,this._l=Jt},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?i(0,"keys"==n?r.k:"values"==n?r.v:[r.k,r.v]):(t._t=Jt,i(1))},n?"entries":"values",!n,!0),o(r)}}},function(t,n,r){var e=r(119),i=r(44);t.exports=r(64)("Set",function(t){return function Set(){return t(this,0<arguments.length?arguments[0]:Jt)}},{add:function add(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},function(t,n,r){var o,e=r(2),i=r(26)(0),u=r(15),c=r(33),f=r(74),a=r(122),s=r(3),l=r(44),h=r(44),p=!e.ActiveXObject&&"ActiveXObject"in e,v="WeakMap",g=c.getWeak,y=Object.isExtensible,d=a.ufstore,b=function(t){return function WeakMap(){return t(this,0<arguments.length?arguments[0]:Jt)}},_={get:function get(t){if(s(t)){var n=g(t);return!0===n?d(l(this,v)).get(t):n?n[this._i]:Jt}},set:function set(t,n){return a.def(l(this,v),t,n)}},S=t.exports=r(64)(v,b,_,a,!0,!0);h&&p&&(f((o=a.getConstructor(b,v)).prototype,_),c.NEED=!0,i(["delete","has","get","set"],function(e){var t=S.prototype,i=t[e];u(t,e,function(t,n){if(s(t)&&!y(t)){this._f||(this._f=new o);var r=this._f[e](t,n);return"set"==e?this:r}return i.call(this,t,n)})}))},function(t,n,r){var u=r(43),c=r(33).getWeak,i=r(1),f=r(3),a=r(42),s=r(36),e=r(26),l=r(12),h=r(44),o=e(5),p=e(6),v=0,g=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},d=function(t,n){return o(t.a,function(t){return t[0]===n})};y.prototype={get:function(t){var n=d(this,t);if(n)return n[1]},has:function(t){return!!d(this,t)},set:function(t,n){var r=d(this,t);r?r[1]=n:this.a.push([t,n])},"delete":function(n){var t=p(this.a,function(t){return t[0]===n});return~t&&this.a.splice(t,1),!!~t}},t.exports={getConstructor:function(t,r,e,i){var o=t(function(t,n){a(t,o,r,"_i"),t._t=r,t._i=v++,n!=(t._l=Jt)&&s(n,e,t[i],t)});return u(o.prototype,{"delete":function(t){if(!f(t))return!1;var n=c(t);return!0===n?g(h(this,r))["delete"](t):n&&l(n,this._i)&&delete n[this._i]},has:function has(t){if(!f(t))return!1;var n=c(t);return!0===n?g(h(this,r)).has(t):n&&l(n,this._i)}}),o},def:function(t,n,r){var e=c(i(n),!0);return!0===e?g(t).set(n,r):e[t._i]=r,t},ufstore:g}},function(t,n,r){var e=r(21),i=r(7);t.exports=function(t){if(t===Jt)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},function(t,n,r){var p=r(55),v=r(3),g=r(7),y=r(19),d=r(5)("isConcatSpreadable");t.exports=function flattenIntoArray(t,n,r,e,i,o,u,c){for(var f,a,s=i,l=0,h=!!u&&y(u,c,3);l<e;){if(l in r){if(f=h?h(r[l],l,n):r[l],a=!1,v(f)&&(a=(a=f[d])!==Jt?!!a:p(f)),a&&0<o)s=flattenIntoArray(t,n,f,g(f.length),s,o-1)-1;else{if(9007199254740991<=s)throw TypeError();t[s]=f}s++}l++}return s}},function(t,n,r){var s=r(7),l=r(79),h=r(24);t.exports=function(t,n,r,e){var i=String(h(t)),o=i.length,u=r===Jt?" ":String(r),c=s(n);if(c<=o||""==u)return i;var f=c-o,a=l.call(u,Math.ceil(f/u.length));return f<a.length&&(a=a.slice(0,f)),e?a+i:i+a}},function(t,n,r){var f=r(6),a=r(27),s=r(11),l=r(49).f;t.exports=function(c){return function(t){for(var n,r=s(t),e=a(r),i=e.length,o=0,u=[];o<i;)n=e[o++],f&&!l.call(r,n)||u.push(c?[n,r[n]]:r[n]);return u}}},function(t,n,r){var e=r(34),i=r(128);t.exports=function(t){return function toJSON(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,n,r){var e=r(36);t.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},function(t,n){t.exports=Math.scale||function scale(t,n,r,e,i){return 0===arguments.length||t!=t||n!=n||r!=r||e!=e||i!=i?NaN:t===Infinity||t===-Infinity?t:(t-n)*(i-e)/(r-n)+e}},function(t,n,r){var e=r(34),i=r(5)("iterator"),o=r(40);t.exports=r(13).isIterable=function(t){var n=Object(t);return n[i]!==Jt||"@@iterator"in n||o.hasOwnProperty(e(n))}},function(t,n,r){var e=r(132),a=r(76),s=r(10);t.exports=function(){for(var i=s(this),o=arguments.length,u=new Array(o),t=0,c=e._,f=!1;t<o;)(u[t]=arguments[t++])===c&&(f=!0);return function(){var t,n=arguments.length,r=0,e=0;if(!f&&!n)return a(i,u,this);if(t=u.slice(),f)for(;r<o;r++)t[r]===c&&(t[r]=arguments[e++]);for(;e<n;)t.push(arguments[e++]);return a(i,t,this)}}},function(t,n,r){t.exports=r(2)},function(t,n,r){var u=r(8),c=r(16),f=r(95),a=r(11);t.exports=function define(t,n){for(var r,e=f(a(n)),i=e.length,o=0;o<i;)u.f(t,r=e[o++],c.f(n,r));return t}},function(t,n,r){r(135),r(138),r(139),r(140),r(141),r(142),r(143),r(144),r(145),r(146),r(147),r(148),r(149),r(150),r(151),r(152),r(153),r(154),r(155),r(156),r(157),r(158),r(159),r(160),r(161),r(162),r(163),r(164),r(165),r(166),r(167),r(168),r(169),r(170),r(171),r(172),r(173),r(174),r(175),r(176),r(177),r(178),r(179),r(180),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(189),r(190),r(191),r(192),r(193),r(194),r(195),r(196),r(197),r(198),r(199),r(200),r(201),r(202),r(203),r(204),r(205),r(206),r(207),r(208),r(209),r(210),r(211),r(212),r(213),r(214),r(215),r(216),r(217),r(219),r(220),r(221),r(222),r(223),r(224),r(225),r(226),r(227),r(228),r(229),r(230),r(88),r(231),r(232),r(114),r(233),r(115),r(234),r(235),r(236),r(237),r(238),r(118),r(120),r(121),r(239),r(240),r(241),r(242),r(243),r(244),r(245),r(246),r(247),r(248),r(249),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(258),r(259),r(261),r(262),r(263),r(264),r(265),r(266),r(267),r(268),r(269),r(270),r(271),r(272),r(273),r(274),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(308),r(309),r(310),r(311),r(312),r(313),r(314),r(315),r(316),r(317),r(318),r(319),r(320),r(321),r(322),r(323),r(324),r(325),r(326),r(327),r(328),r(329),r(330),r(331),r(50),r(333),r(130),r(334),r(335),r(336),r(337),r(338),r(339),r(340),r(341),r(342),t.exports=r(343)},function(t,n,r){var e=r(2),u=r(12),i=r(6),o=r(0),c=r(15),f=r(33).KEY,a=r(4),s=r(47),l=r(45),h=r(37),p=r(5),v=r(99),g=r(70),y=r(137),d=r(55),b=r(1),_=r(3),S=r(9),x=r(11),m=r(23),w=r(31),E=r(28),O=r(102),M=r(16),P=r(54),I=r(8),F=r(27),A=M.f,k=I.f,j=O.f,N=e.Symbol,R=e.JSON,T=R&&R.stringify,D="prototype",L=p("_hidden"),C=p("toPrimitive"),U={}.propertyIsEnumerable,W=s("symbol-registry"),G=s("symbols"),V=s("op-symbols"),B=Object[D],q="function"==typeof N&&!!P.f,z=e.QObject,K=!z||!z[D]||!z[D].findChild,J=i&&a(function(){return 7!=E(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=A(B,n);e&&delete B[n],k(t,n,r),e&&t!==B&&k(B,n,e)}:k,$=function(t){var n=G[t]=E(N[D]);return n._k=t,n},H=q&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},Y=function defineProperty(t,n,r){return t===B&&Y(V,n,r),b(t),n=m(n,!0),b(r),u(G,n)?(r.enumerable?(u(t,L)&&t[L][n]&&(t[L][n]=!1),r=E(r,{enumerable:w(0,!1)})):(u(t,L)||k(t,L,w(1,{})),t[L][n]=!0),J(t,n,r)):k(t,n,r)},X=function defineProperties(t,n){b(t);for(var r,e=y(n=x(n)),i=0,o=e.length;i<o;)Y(t,r=e[i++],n[r]);return t},Z=function propertyIsEnumerable(t){var n=U.call(this,t=m(t,!0));return!(this===B&&u(G,t)&&!u(V,t))&&(!(n||!u(this,t)||!u(G,t)||u(this,L)&&this[L][t])||n)},Q=function getOwnPropertyDescriptor(t,n){if(t=x(t),n=m(n,!0),t!==B||!u(G,n)||u(V,n)){var r=A(t,n);return!r||!u(G,n)||u(t,L)&&t[L][n]||(r.enumerable=!0),r}},tt=function getOwnPropertyNames(t){for(var n,r=j(x(t)),e=[],i=0;i<r.length;)u(G,n=r[i++])||n==L||n==f||e.push(n);return e},nt=function getOwnPropertySymbols(t){for(var n,r=t===B,e=j(r?V:x(t)),i=[],o=0;o<e.length;)!u(G,n=e[o++])||r&&!u(B,n)||i.push(G[n]);return i};q||(c((N=function Symbol(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var n=h(0<arguments.length?arguments[0]:Jt),r=function(t){this===B&&r.call(V,t),u(this,L)&&u(this[L],n)&&(this[L][n]=!1),J(this,n,w(1,t))};return i&&K&&J(B,n,{configurable:!0,set:r}),$(n)})[D],"toString",function toString(){return this._k}),M.f=Q,I.f=Y,r(39).f=O.f=tt,r(49).f=Z,P.f=nt,i&&!r(32)&&c(B,"propertyIsEnumerable",Z,!0),v.f=function(t){return $(p(t))}),o(o.G+o.W+o.F*!q,{Symbol:N});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;et<rt.length;)p(rt[et++]);for(var it=F(p.store),ot=0;ot<it.length;)g(it[ot++]);o(o.S+o.F*!q,"Symbol",{"for":function(t){return u(W,t+="")?W[t]:W[t]=N(t)},keyFor:function keyFor(t){if(!H(t))throw TypeError(t+" is not a symbol!");for(var n in W)if(W[n]===t)return n},useSetter:function(){K=!0},useSimple:function(){K=!1}}),o(o.S+o.F*!q,"Object",{create:function create(t,n){return n===Jt?E(t):X(E(t),n)},defineProperty:Y,defineProperties:X,getOwnPropertyDescriptor:Q,getOwnPropertyNames:tt,getOwnPropertySymbols:nt});var ut=a(function(){P.f(1)});o(o.S+o.F*ut,"Object",{getOwnPropertySymbols:function getOwnPropertySymbols(t){return P.f(S(t))}}),R&&o(o.S+o.F*(!q||a(function(){var t=N();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function stringify(t){for(var n,r,e=[t],i=1;i<arguments.length;)e.push(arguments[i++]);if(r=n=e[1],(_(n)||t!==Jt)&&!H(t))return d(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!H(n))return n}),e[1]=n,T.apply(R,e)}}),N[D][C]||r(14)(N[D],C,N[D].valueOf),l(N,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n,r){t.exports=r(47)("native-function-to-string",Function.toString)},function(t,n,r){var c=r(27),f=r(54),a=r(49);t.exports=function(t){var n=c(t),r=f.f;if(r)for(var e,i=r(t),o=a.f,u=0;u<i.length;)o.call(t,e=i[u++])&&n.push(e);return n}},function(t,n,r){var e=r(0);e(e.S+e.F*!r(6),"Object",{defineProperty:r(8).f})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(6),"Object",{defineProperties:r(101)})},function(t,n,r){var e=r(11),i=r(16).f;r(25)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(t,n){return i(e(t),n)}})},function(t,n,r){var e=r(0);e(e.S,"Object",{create:r(28)})},function(t,n,r){var e=r(9),i=r(17);r(25)("getPrototypeOf",function(){return function getPrototypeOf(t){return i(e(t))}})},function(t,n,r){var e=r(9),i=r(27);r(25)("keys",function(){return function keys(t){return i(e(t))}})},function(t,n,r){r(25)("getOwnPropertyNames",function(){return r(102).f})},function(t,n,r){var e=r(3),i=r(33).onFreeze;r(25)("freeze",function(n){return function freeze(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(3),i=r(33).onFreeze;r(25)("seal",function(n){return function seal(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(3),i=r(33).onFreeze;r(25)("preventExtensions",function(n){return function preventExtensions(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(3);r(25)("isFrozen",function(n){return function isFrozen(t){return!e(t)||!!n&&n(t)}})},function(t,n,r){var e=r(3);r(25)("isSealed",function(n){return function isSealed(t){return!e(t)||!!n&&n(t)}})},function(t,n,r){var e=r(3);r(25)("isExtensible",function(n){return function isExtensible(t){return!!e(t)&&(!n||n(t))}})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{assign:r(74)})},function(t,n,r){var e=r(0);e(e.S,"Object",{is:r(103)})},function(t,n,r){var e=r(0);e(e.S,"Object",{setPrototypeOf:r(75).set})},function(t,n,r){var e=r(34),i={};i[r(5)("toStringTag")]="z",i+""!="[object z]"&&r(15)(Object.prototype,"toString",function toString(){return"[object "+e(this)+"]"},!0)},function(t,n,r){var e=r(0);e(e.P,"Function",{bind:r(104)})},function(t,n,r){var e=r(8).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||r(6)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,r){var e=r(3),i=r(17),o=r(5)("hasInstance"),u=Function.prototype;o in u||r(8).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,r){var e=r(2),i=r(12),o=r(20),u=r(77),s=r(23),c=r(4),f=r(39).f,a=r(16).f,l=r(8).f,h=r(46).trim,p="Number",v=e[p],g=v,y=v.prototype,d=o(r(28)(y))==p,b="trim"in String.prototype,_=function(t){var n=s(t,!1);if("string"==typeof n&&2<n.length){var r,e,i,o=(n=b?n.trim():h(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,c=n.slice(2),f=0,a=c.length;f<a;f++)if((u=c.charCodeAt(f))<48||i<u)return NaN;return parseInt(c,e)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function Number(t){var n=arguments.length<1?0:t,r=this;return r instanceof v&&(d?c(function(){y.valueOf.call(r)}):o(r)!=p)?u(new g(_(n)),r,v):_(n)};for(var S,x=r(6)?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),m=0;m<x.length;m++)i(g,S=x[m])&&!i(v,S)&&l(v,S,a(g,S));(v.prototype=y).constructor=v,r(15)(e,p,v)}},function(t,n,r){var e=r(0),a=r(21),s=r(105),l=r(79),i=1..toFixed,o=Math.floor,u=[0,0,0,0,0,0],h="Number.toFixed: incorrect invocation!",p=function(t,n){for(var r=-1,e=n;++r<6;)u[r]=(e+=t*u[r])%1e7,e=o(e/1e7)},v=function(t){for(var n=6,r=0;0<=--n;)u[n]=o((r+=u[n])/t),r=r%t*1e7},g=function(){for(var t=6,n="";0<=--t;)if(""!==n||0===t||0!==u[t]){var r=String(u[t]);n=""===n?r:n+l.call("0",7-r.length)+r}return n},y=function(t,n,r){return 0===n?r:n%2==1?y(t,n-1,r*t):y(t*t,n/2,r)};e(e.P+e.F*(!!i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(4)(function(){i.call({})})),"Number",{toFixed:function toFixed(t){var n,r,e,i,o=s(this,h),u=a(t),c="",f="0";if(u<0||20<u)throw RangeError(h);if(o!=o)return"NaN";if(o<=-1e21||1e21<=o)return String(o);if(o<0&&(c="-",o=-o),1e-21<o)if(r=(n=function(t){for(var n=0,r=t;4096<=r;)n+=12,r/=4096;for(;2<=r;)n+=1,r/=2;return n}(o*y(2,69,1))-69)<0?o*y(2,-n,1):o/y(2,n,1),r*=4503599627370496,0<(n=52-n)){for(p(0,r),e=u;7<=e;)p(1e7,0),e-=7;for(p(y(10,e,1),0),e=n-1;23<=e;)v(1<<23),e-=23;v(1<<e),p(1,1),v(2),f=g()}else p(0,r),p(1<<-n,0),f=g()+l.call("0",u);return f=0<u?c+((i=f.length)<=u?"0."+l.call("0",u-i)+f:f.slice(0,i-u)+"."+f.slice(i-u)):c+f}})},function(t,n,r){var e=r(0),i=r(4),o=r(105),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,Jt)})||!i(function(){u.call({})})),"Number",{toPrecision:function toPrecision(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return t===Jt?u.call(n):u.call(n,t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,r){var e=r(0),i=r(2).isFinite;e(e.S,"Number",{isFinite:function isFinite(t){return"number"==typeof t&&i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isInteger:r(106)})},function(t,n,r){var e=r(0);e(e.S,"Number",{isNaN:function isNaN(t){return t!=t}})},function(t,n,r){var e=r(0),i=r(106),o=Math.abs;e(e.S,"Number",{isSafeInteger:function isSafeInteger(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,r){var e=r(0);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,r){var e=r(0);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,r){var e=r(0),i=r(107);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,r){var e=r(0),i=r(108);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,r){var e=r(0),i=r(108);e(e.G+e.F*(parseInt!=i),{parseInt:i})},function(t,n,r){var e=r(0),i=r(107);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},function(t,n,r){var e=r(0),i=r(109),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(Infinity)==Infinity),"Math",{acosh:function acosh(t){return(t=+t)<1?NaN:94906265.62425156<t?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,r){var e=r(0),i=Math.asinh;e(e.S+e.F*!(i&&0<1/i(0)),"Math",{asinh:function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}})},function(t,n,r){var e=r(0),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,r){var e=r(0),i=r(80);e(e.S,"Math",{cbrt:function cbrt(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,r){var e=r(0),i=Math.exp;e(e.S,"Math",{cosh:function cosh(t){return(i(t=+t)+i(-t))/2}})},function(t,n,r){var e=r(0),i=r(81);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,r){var e=r(0);e(e.S,"Math",{fround:r(110)})},function(t,n,r){var e=r(0),f=Math.abs;e(e.S,"Math",{hypot:function hypot(t,n){for(var r,e,i=0,o=0,u=arguments.length,c=0;o<u;)c<(r=f(arguments[o++]))?(i=i*(e=c/r)*e+1,c=r):i+=0<r?(e=r/c)*e:r;return c===Infinity?Infinity:c*Math.sqrt(i)}})},function(t,n,r){var e=r(0),i=Math.imul;e(e.S+e.F*r(4)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function imul(t,n){var r=65535,e=+t,i=+n,o=r&e,u=r&i;return 0|o*u+((r&e>>>16)*u+o*(r&i>>>16)<<16>>>0)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log10:function log10(t){return Math.log(t)*Math.LOG10E}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log1p:r(109)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log2:function log2(t){return Math.log(t)/Math.LN2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{sign:r(80)})},function(t,n,r){var e=r(0),i=r(81),o=Math.exp;e(e.S+e.F*r(4)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function sinh(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,r){var e=r(0),i=r(81),o=Math.exp;e(e.S,"Math",{tanh:function tanh(t){var n=i(t=+t),r=i(-t);return n==Infinity?1:r==Infinity?-1:(n-r)/(o(t)+o(-t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{trunc:function trunc(t){return(0<t?Math.floor:Math.ceil)(t)}})},function(t,n,r){var e=r(0),o=r(38),u=String.fromCharCode,i=String.fromCodePoint;e(e.S+e.F*(!!i&&1!=i.length),"String",{fromCodePoint:function fromCodePoint(t){for(var n,r=[],e=arguments.length,i=0;i<e;){if(n=+arguments[i++],o(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?u(n):u(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},function(t,n,r){var e=r(0),u=r(11),c=r(7);e(e.S,"String",{raw:function raw(t){for(var n=u(t.raw),r=c(n.length),e=arguments.length,i=[],o=0;o<r;)i.push(String(n[o++])),o<e&&i.push(String(arguments[o]));return i.join("")}})},function(t,n,r){r(46)("trim",function(t){return function trim(){return t(this,3)}})},function(t,n,r){var e=r(0),i=r(56)(!1);e(e.P,"String",{codePointAt:function codePointAt(t){return i(this,t)}})},function(t,n,r){var e=r(0),u=r(7),c=r(82),f="endsWith",a=""[f];e(e.P+e.F*r(83)(f),"String",{endsWith:function endsWith(t){var n=c(this,t,f),r=1<arguments.length?arguments[1]:Jt,e=u(n.length),i=r===Jt?e:Math.min(u(r),e),o=String(t);return a?a.call(n,o,i):n.slice(i-o.length,i)===o}})},function(t,n,r){var e=r(0),i=r(82),o="includes";e(e.P+e.F*r(83)(o),"String",{includes:function includes(t){return!!~i(this,t,o).indexOf(t,1<arguments.length?arguments[1]:Jt)}})},function(t,n,r){var e=r(0);e(e.P,"String",{repeat:r(79)})},function(t,n,r){var e=r(0),i=r(7),o=r(82),u="startsWith",c=""[u];e(e.P+e.F*r(83)(u),"String",{startsWith:function startsWith(t){var n=o(this,t,u),r=i(Math.min(1<arguments.length?arguments[1]:Jt,n.length)),e=String(t);return c?c.call(n,e,r):n.slice(r,r+e.length)===e}})},function(t,n,r){var e=r(56)(!0);r(58)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return n.length<=r?{value:Jt,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){r(18)("anchor",function(n){return function anchor(t){return n(this,"a","name",t)}})},function(t,n,r){r(18)("big",function(t){return function big(){return t(this,"big","","")}})},function(t,n,r){r(18)("blink",function(t){return function blink(){return t(this,"blink","","")}})},function(t,n,r){r(18)("bold",function(t){return function bold(){return t(this,"b","","")}})},function(t,n,r){r(18)("fixed",function(t){return function fixed(){return t(this,"tt","","")}})},function(t,n,r){r(18)("fontcolor",function(n){return function fontcolor(t){return n(this,"font","color",t)}})},function(t,n,r){r(18)("fontsize",function(n){return function fontsize(t){return n(this,"font","size",t)}})},function(t,n,r){r(18)("italics",function(t){return function italics(){return t(this,"i","","")}})},function(t,n,r){r(18)("link",function(n){return function link(t){return n(this,"a","href",t)}})},function(t,n,r){r(18)("small",function(t){return function small(){return t(this,"small","","")}})},function(t,n,r){r(18)("strike",function(t){return function strike(){return t(this,"strike","","")}})},function(t,n,r){r(18)("sub",function(t){return function sub(){return t(this,"sub","","")}})},function(t,n,r){r(18)("sup",function(t){return function sup(){return t(this,"sup","","")}})},function(t,n,r){var e=r(0);e(e.S,"Array",{isArray:r(55)})},function(t,n,r){var h=r(19),e=r(0),p=r(9),v=r(111),g=r(84),y=r(7),d=r(85),b=r(50);e(e.S+e.F*!r(60)(function(t){Array.from(t)}),"Array",{from:function from(t){var n,r,e,i,o=p(t),u="function"==typeof this?this:Array,c=arguments.length,f=1<c?arguments[1]:Jt,a=f!==Jt,s=0,l=b(o);if(a&&(f=h(f,2<c?arguments[2]:Jt,2)),l==Jt||u==Array&&g(l))for(r=new u(n=y(o.length));s<n;s++)d(r,s,a?f(o[s],s):o[s]);else for(i=l.call(o),r=new u;!(e=i.next()).done;s++)d(r,s,a?v(i,f,[e.value,s],!0):e.value);return r.length=s,r}})},function(t,n,r){var e=r(0),i=r(85);e(e.S+e.F*r(4)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);t<n;)i(r,t,arguments[t++]);return r.length=n,r}})},function(t,n,r){var e=r(0),i=r(11),o=[].join;e(e.P+e.F*(r(48)!=Object||!r(22)(o)),"Array",{join:function join(t){return o.call(i(this),t===Jt?",":t)}})},function(t,n,r){var e=r(0),i=r(73),a=r(20),s=r(38),l=r(7),h=[].slice;e(e.P+e.F*r(4)(function(){i&&h.call(i)}),"Array",{slice:function slice(t,n){var r=l(this.length),e=a(this);if(n=n===Jt?r:n,"Array"==e)return h.call(this,t,n);for(var i=s(t,r),o=s(n,r),u=l(o-i),c=new Array(u),f=0;f<u;f++)c[f]="String"==e?this.charAt(i+f):this[i+f];return c}})},function(t,n,r){var e=r(0),i=r(10),o=r(9),u=r(4),c=[].sort,f=[1,2,3];e(e.P+e.F*(u(function(){f.sort(Jt)})||!u(function(){f.sort(null)})||!r(22)(c)),"Array",{sort:function sort(t){return t===Jt?c.call(o(this)):c.call(o(this),i(t))}})},function(t,n,r){var e=r(0),i=r(26)(0),o=r(22)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function forEach(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(3),i=r(55),o=r(5)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=Jt),e(n)&&null===(n=n[o])&&(n=Jt)),n===Jt?Array:n}},function(t,n,r){var e=r(0),i=r(26)(1);e(e.P+e.F*!r(22)([].map,!0),"Array",{map:function map(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(26)(2);e(e.P+e.F*!r(22)([].filter,!0),"Array",{filter:function filter(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(26)(3);e(e.P+e.F*!r(22)([].some,!0),"Array",{some:function some(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(26)(4);e(e.P+e.F*!r(22)([].every,!0),"Array",{every:function every(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(112);e(e.P+e.F*!r(22)([].reduce,!0),"Array",{reduce:function reduce(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,r){var e=r(0),i=r(112);e(e.P+e.F*!r(22)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,r){var e=r(0),i=r(53)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!r(22)(o)),"Array",{indexOf:function indexOf(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(11),o=r(21),u=r(7),c=[].lastIndexOf,f=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(f||!r(22)(c)),"Array",{lastIndexOf:function lastIndexOf(t){if(f)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(1<arguments.length&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);0<=e;e--)if(e in n&&n[e]===t)return e||0;return-1}})},function(t,n,r){var e=r(0);e(e.P,"Array",{copyWithin:r(113)}),r(35)("copyWithin")},function(t,n,r){var e=r(0);e(e.P,"Array",{fill:r(87)}),r(35)("fill")},function(t,n,r){var e=r(0),i=r(26)(5),o="find",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{find:function find(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(35)(o)},function(t,n,r){var e=r(0),i=r(26)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function findIndex(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(35)(o)},function(t,n,r){r(41)("Array")},function(t,n,r){var e=r(2),o=r(77),i=r(8).f,u=r(39).f,c=r(57),f=r(51),a=e.RegExp,s=a,l=a.prototype,h=/a/g,p=/a/g,v=new a(h)!==h;if(r(6)&&(!v||r(4)(function(){return p[r(5)("match")]=!1,a(h)!=h||a(p)==p||"/a/i"!=a(h,"i")}))){a=function RegExp(t,n){var r=this instanceof a,e=c(t),i=n===Jt;return!r&&e&&t.constructor===a&&i?t:o(v?new s(e&&!i?t.source:t,n):s((e=t instanceof a)?t.source:t,e&&i?f.call(t):n),r?this:l,a)};for(var g=function(n){n in a||i(a,n,{configurable:!0,get:function(){return s[n]},set:function(t){s[n]=t}})},y=u(s),d=0;d<y.length;)g(y[d++]);(l.constructor=a).prototype=l,r(15)(e,"RegExp",a)}r(41)("RegExp")},function(t,n,r){r(115);var e=r(1),i=r(51),o=r(6),u="toString",c=/./[u],f=function(t){r(15)(RegExp.prototype,u,t,!0)};r(4)(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?f(function toString(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):Jt)}):c.name!=u&&f(function toString(){return c.call(this)})},function(t,n,r){var l=r(1
),h=r(7),p=r(91),v=r(61);r(62)("match",1,function(e,i,a,s){return[function match(t){var n=e(this),r=t==Jt?Jt:t[i];return r!==Jt?r.call(t,n):new RegExp(t)[i](String(n))},function(t){var n=s(a,t,this);if(n.done)return n.value;var r=l(t),e=String(this);if(!r.global)return v(r,e);for(var i,o=r.unicode,u=[],c=r.lastIndex=0;null!==(i=v(r,e));){var f=String(i[0]);""===(u[c]=f)&&(r.lastIndex=p(e,h(r.lastIndex),o)),c++}return 0===c?null:u}]})},function(t,n,r){var w=r(1),e=r(9),E=r(7),O=r(21),M=r(91),P=r(61),I=Math.max,F=Math.min,h=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;r(62)("replace",2,function(i,o,x,m){return[function replace(t,n){var r=i(this),e=t==Jt?Jt:t[o];return e!==Jt?e.call(t,r,n):x.call(String(r),t,n)},function(t,n){var r=m(x,t,this,n);if(r.done)return r.value;var e=w(t),i=String(this),o="function"==typeof n;o||(n=String(n));var u=e.global;if(u){var c=e.unicode;e.lastIndex=0}for(var f=[];;){var a=P(e,i);if(null===a)break;if(f.push(a),!u)break;""===String(a[0])&&(e.lastIndex=M(i,E(e.lastIndex),c))}for(var s,l="",h=0,p=0;p<f.length;p++){a=f[p];for(var v=String(a[0]),g=I(F(O(a.index),i.length),0),y=[],d=1;d<a.length;d++)y.push((s=a[d])===Jt?s:String(s));var b=a.groups;if(o){var _=[v].concat(y,g,i);b!==Jt&&_.push(b);var S=String(n.apply(Jt,_))}else S=getSubstitution(v,i,g,y,b,n);h<=g&&(l+=i.slice(h,g)+S,h=g+v.length)}return l+i.slice(h)}];function getSubstitution(o,u,c,f,a,t){var s=c+o.length,l=f.length,n=v;return a!==Jt&&(a=e(a),n=p),x.call(t,n,function(t,n){var r;switch(n.charAt(0)){case"$":return"$";case"&":return o;case"`":return u.slice(0,c);case"'":return u.slice(s);case"<":r=a[n.slice(1,-1)];break;default:var e=+n;if(0===e)return t;if(l<e){var i=h(e/10);return 0===i?t:i<=l?f[i-1]===Jt?n.charAt(1):f[i-1]+n.charAt(1):t}r=f[e-1]}return r===Jt?"":r})}})},function(t,n,r){var f=r(1),a=r(103),s=r(61);r(62)("search",1,function(e,i,u,c){return[function search(t){var n=e(this),r=t==Jt?Jt:t[i];return r!==Jt?r.call(t,n):new RegExp(t)[i](String(n))},function(t){var n=c(u,t,this);if(n.done)return n.value;var r=f(t),e=String(this),i=r.lastIndex;a(i,0)||(r.lastIndex=0);var o=s(r,e);return a(r.lastIndex,i)||(r.lastIndex=i),null===o?-1:o.index}]})},function(t,n,r){var s=r(57),b=r(1),_=r(52),S=r(91),x=r(7),m=r(61),l=r(90),e=r(4),w=Math.min,h=[].push,u="split",p="length",v="lastIndex",E=4294967295,O=!e(function(){RegExp(E,"y")});r(62)("split",2,function(i,o,g,y){var d;return d="c"=="abbc"[u](/(b)*/)[1]||4!="test"[u](/(?:)/,-1)[p]||2!="ab"[u](/(?:ab)*/)[p]||4!="."[u](/(.?)(.?)/)[p]||1<"."[u](/()()/)[p]||""[u](/.?/)[p]?function(t,n){var r=String(this);if(t===Jt&&0===n)return[];if(!s(t))return g.call(r,t,n);for(var e,i,o,u=[],c=0,f=n===Jt?E:n>>>0,a=new RegExp(t.source,(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":"")+"g");(e=l.call(a,r))&&!(c<(i=a[v])&&(u.push(r.slice(c,e.index)),1<e[p]&&e.index<r[p]&&h.apply(u,e.slice(1)),o=e[0][p],c=i,f<=u[p]));)a[v]===e.index&&a[v]++;return c===r[p]?!o&&a.test("")||u.push(""):u.push(r.slice(c)),f<u[p]?u.slice(0,f):u}:"0"[u](Jt,0)[p]?function(t,n){return t===Jt&&0===n?[]:g.call(this,t,n)}:g,[function split(t,n){var r=i(this),e=t==Jt?Jt:t[o];return e!==Jt?e.call(t,r,n):d.call(String(r),t,n)},function(t,n){var r=y(d,t,this,n,d!==g);if(r.done)return r.value;var e=b(t),i=String(this),o=_(e,RegExp),u=e.unicode,c=new o(O?e:"^(?:"+e.source+")",(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(O?"y":"g")),f=n===Jt?E:n>>>0;if(0===f)return[];if(0===i.length)return null===m(c,i)?[i]:[];for(var a=0,s=0,l=[];s<i.length;){c.lastIndex=O?s:0;var h,p=m(c,O?i:i.slice(s));if(null===p||(h=w(x(c.lastIndex+(O?0:s)),i.length))===a)s=S(i,s,u);else{if(l.push(i.slice(a,s)),l.length===f)return l;for(var v=1;v<=p.length-1;v++)if(l.push(p[v]),l.length===f)return l;s=a=h}}return l.push(i.slice(a)),l}]})},function(t,n,e){var r,i,o,u,c=e(32),f=e(2),a=e(19),s=e(34),l=e(0),h=e(3),p=e(10),v=e(42),g=e(36),y=e(52),d=e(92).set,b=e(93)(),_=e(94),S=e(116),x=e(63),m=e(117),w="Promise",E=f.TypeError,O=f.process,M=O&&O.versions,P=M&&M.v8||"",I=f[w],F="process"==s(O),A=function(){},k=i=_.f,j=!!function(){try{var t=I.resolve(1),n=(t.constructor={})[e(5)("species")]=function(t){t(A,A)};return(F||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof n&&0!==P.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(r){}}(),N=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},R=function(l,r){if(!l._n){l._n=!0;var e=l._c;b(function(){for(var a=l._v,s=1==l._s,t=0,n=function(t){var n,r,e,i=s?t.ok:t.fail,o=t.resolve,u=t.reject,c=t.domain;try{i?(s||(2==l._h&&L(l),l._h=1),!0===i?n=a:(c&&c.enter(),n=i(a),c&&(c.exit(),e=!0)),n===t.promise?u(E("Promise-chain cycle")):(r=N(n))?r.call(n,o,u):o(n)):u(a)}catch(f){c&&!e&&c.exit(),u(f)}};t<e.length;)n(e[t++]);l._c=[],l._n=!1,r&&!l._h&&T(l)})}},T=function(o){d.call(f,function(){var t,n,r,e=o._v,i=D(o);if(i&&(t=S(function(){F?O.emit("unhandledRejection",e,o):(n=f.onunhandledrejection)?n({promise:o,reason:e}):(r=f.console)&&r.error&&r.error("Unhandled promise rejection",e)}),o._h=F||D(o)?2:1),o._a=Jt,i&&t.e)throw t.v})},D=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(n){d.call(f,function(){var t;F?O.emit("rejectionHandled",n):(t=f.onrejectionhandled)&&t({promise:n,reason:n._v})})},C=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},U=function(r){var e,i=this;if(!i._d){i._d=!0,i=i._w||i;try{if(i===r)throw E("Promise can't be resolved itself");(e=N(r))?b(function(){var t={_w:i,_d:!1};try{e.call(r,a(U,t,1),a(C,t,1))}catch(n){C.call(t,n)}}):(i._v=r,i._s=1,R(i,!1))}catch(t){C.call({_w:i,_d:!1},t)}}};j||(I=function Promise(t){v(this,I,w,"_h"),p(t),r.call(this);try{t(a(U,this,1),a(C,this,1))}catch(n){C.call(this,n)}},(r=function Promise(t){this._c=[],this._a=Jt,this._s=0,this._d=!1,this._v=Jt,this._h=0,this._n=!1}).prototype=e(43)(I.prototype,{then:function then(t,n){var r=k(y(this,I));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=F?O.domain:Jt,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},"catch":function(t){return this.then(Jt,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=a(U,t,1),this.reject=a(C,t,1)},_.f=k=function(t){return t===I||t===u?new o(t):i(t)}),l(l.G+l.W+l.F*!j,{Promise:I}),e(45)(I,w),e(41)(w),u=e(13)[w],l(l.S+l.F*!j,w,{reject:function reject(t){var n=k(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!j),w,{resolve:function resolve(t){return m(c&&this===u?I:this,t)}}),l(l.S+l.F*!(j&&e(60)(function(t){I.all(t)["catch"](A)})),w,{all:function all(t){var u=this,n=k(u),c=n.resolve,f=n.reject,r=S(function(){var e=[],i=0,o=1;g(t,!1,function(t){var n=i++,r=!1;e.push(Jt),o++,u.resolve(t).then(function(t){r||(r=!0,e[n]=t,--o||c(e))},f)}),--o||c(e)});return r.e&&f(r.v),n.promise},race:function race(t){var n=this,r=k(n),e=r.reject,i=S(function(){g(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}})},function(t,n,r){var e=r(122),i=r(44),o="WeakSet";r(64)(o,function(t){return function WeakSet(){return t(this,0<arguments.length?arguments[0]:Jt)}},{add:function add(t){return e.def(i(this,o),t,!0)}},e,!1,!0)},function(t,n,r){var e=r(0),o=r(10),u=r(1),c=(r(2).Reflect||{}).apply,f=Function.apply;e(e.S+e.F*!r(4)(function(){c(function(){})}),"Reflect",{apply:function apply(t,n,r){var e=o(t),i=u(r);return c?c(e,n,i):f.call(e,n,i)}})},function(t,n,r){var e=r(0),c=r(28),f=r(10),a=r(1),s=r(3),i=r(4),l=r(104),h=(r(2).Reflect||{}).construct,p=i(function(){function F(){}return!(h(function(){},[],F)instanceof F)}),v=!i(function(){h(function(){})});e(e.S+e.F*(p||v),"Reflect",{construct:function construct(t,n){f(t),a(n);var r=arguments.length<3?t:f(arguments[2]);if(v&&!p)return h(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(l.apply(t,e))}var i=r.prototype,o=c(s(i)?i:Object.prototype),u=Function.apply.call(t,o,n);return s(u)?u:o}})},function(t,n,r){var i=r(8),e=r(0),o=r(1),u=r(23);e(e.S+e.F*r(4)(function(){Reflect.defineProperty(i.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(t,n,r){o(t),n=u(n,!0),o(r);try{return i.f(t,n,r),!0}catch(e){return!1}}})},function(t,n,r){var e=r(0),i=r(16).f,o=r(1);e(e.S,"Reflect",{deleteProperty:function deleteProperty(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},function(t,n,r){var e=r(0),i=r(1),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};r(59)(o,"Object",function(){var t,n=this._k;do{if(n.length<=this._i)return{value:Jt,done:!0}}while(!((t=n[this._i++])in this._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function enumerate(t){return new o(t)}})},function(t,n,r){var o=r(16),u=r(17),c=r(12),e=r(0),f=r(3),a=r(1);e(e.S,"Reflect",{get:function get(t,n){var r,e,i=arguments.length<3?t:arguments[2];return a(t)===i?t[n]:(r=o.f(t,n))?c(r,"value")?r.value:r.get!==Jt?r.get.call(i):Jt:f(e=u(t))?get(e,n,i):void 0}})},function(t,n,r){var e=r(16),i=r(0),o=r(1);i(i.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,n){return e.f(o(t),n)}})},function(t,n,r){var e=r(0),i=r(17),o=r(1);e(e.S,"Reflect",{getPrototypeOf:function getPrototypeOf(t){return i(o(t))}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{has:function has(t,n){return n in t}})},function(t,n,r){var e=r(0),i=r(1),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function isExtensible(t){return i(t),!o||o(t)}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{ownKeys:r(95)})},function(t,n,r){var e=r(0),i=r(1),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function preventExtensions(t){i(t);try{return o&&o(t),!0}catch(n){return!1}}})},function(t,n,r){var c=r(8),f=r(16),a=r(17),s=r(12),e=r(0),l=r(31),h=r(1),p=r(3);e(e.S,"Reflect",{set:function set(t,n,r){var e,i,o=arguments.length<4?t:arguments[3],u=f.f(h(t),n);if(!u){if(p(i=a(t)))return set(i,n,r,o);u=l(0)}if(s(u,"value")){if(!1===u.writable||!p(o))return!1;if(e=f.f(o,n)){if(e.get||e.set||!1===e.writable)return!1;e.value=r,c.f(o,n,e)}else c.f(o,n,l(0,r));return!0}return u.set!==Jt&&(u.set.call(o,r),!0)}})},function(t,n,r){var e=r(0),i=r(75);i&&e(e.S,"Reflect",{setPrototypeOf:function setPrototypeOf(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(r){return!1}}})},function(t,n,r){var e=r(0);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,r){var e=r(0),i=r(9),o=r(23);e(e.P+e.F*r(4)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},function(t,n,r){var e=r(0),i=r(257);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,r){var e=r(4),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return 9<t?t:"0"+t};t.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!e(function(){o.call(new Date(NaN))})?function toISOString(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":9999<n?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(99<r?r:"0"+u(r))+"Z"}:o},function(t,n,r){var e=Date.prototype,i="Invalid Date",o="toString",u=e[o],c=e.getTime;new Date(NaN)+""!=i&&r(15)(e,o,function toString(){var t=c.call(this);return t==t?u.call(this):i})},function(t,n,r){var e=r(5)("toPrimitive"),i=Date.prototype;e in i||r(14)(i,e,r(260))},function(t,n,r){var e=r(1),i=r(23);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),"number"!=t)}},function(t,n,r){var e=r(0),i=r(65),o=r(96),a=r(1),s=r(38),l=r(7),u=r(3),c=r(2).ArrayBuffer,h=r(52),p=o.ArrayBuffer,v=o.DataView,f=i.ABV&&c.isView,g=p.prototype.slice,y=i.VIEW,d="ArrayBuffer";e(e.G+e.W+e.F*(c!==p),{ArrayBuffer:p}),e(e.S+e.F*!i.CONSTR,d,{isView:function isView(t){return f&&f(t)||u(t)&&y in t}}),e(e.P+e.U+e.F*r(4)(function(){return!new p(2).slice(1,Jt).byteLength}),d,{slice:function slice(t,n){if(g!==Jt&&n===Jt)return g.call(a(this),t);for(var r=a(this).byteLength,e=s(t,r),i=s(n===Jt?r:n,r),o=new(h(this,p))(l(i-e)),u=new v(this),c=new v(o),f=0;e<i;)c.setUint8(f++,u.getUint8(e++));return o}}),r(41)(d)},function(t,n,r){var e=r(0);e(e.G+e.W+e.F*!r(65).ABV,{DataView:r(96).DataView})},function(t,n,r){r(29)("Int8",1,function(e){return function Int8Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(29)("Uint8",1,function(e){return function Uint8Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(29)("Uint8",1,function(e){return function Uint8ClampedArray(t,n,r){return e(this,t,n,r)}},!0)},function(t,n,r){r(29)("Int16",2,function(e){return function Int16Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(29)("Uint16",2,function(e){return function Uint16Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(29)("Int32",4,function(e){return function Int32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(29)("Uint32",4,function(e){return function Uint32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(29)("Float32",4,function(e){return function Float32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(29)("Float64",8,function(e){return function Float64Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){var e=r(0),i=r(53)(!0);e(e.P,"Array",{includes:function includes(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(35)("includes")},function(t,n,r){var e=r(0),i=r(124),o=r(9),u=r(7),c=r(10),f=r(86);e(e.P,"Array",{flatMap:function flatMap(t){var n,r,e=o(this);return c(t),n=u(e.length),r=f(e,0),i(r,e,e,n,0,1,t,arguments[1]),r}}),r(35)("flatMap")},function(t,n,r){var e=r(0),i=r(124),o=r(9),u=r(7),c=r(21),f=r(86);e(e.P,"Array",{flatten:function flatten(){var t=arguments[0],n=o(this),r=u(n.length),e=f(n,0);return i(e,n,n,r,0,t===Jt?1:c(t)),e}}),r(35)("flatten")},function(t,n,r){var e=r(0),i=r(56)(!0);e(e.P,"String",{at:function at(t){return i(this,t)}})},function(t,n,r){var e=r(0),i=r(125),o=r(63),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);e(e.P+e.F*u,"String",{padStart:function padStart(t){return i(this,t,1<arguments.length?arguments[1]:Jt,!0)}})},function(t,n,r){var e=r(0),i=r(125),o=r(63),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);e(e.P+e.F*u,"String",{padEnd:function padEnd(t){return i(this,t,1<arguments.length?arguments[1]:Jt,!1)}})},function(t,n,r){r(46)("trimLeft",function(t){return function trimLeft(){return t(this,1)}},"trimStart")},function(t,n,r){r(46)("trimRight",function(t){return function trimRight(){return t(this,2)}},"trimEnd")},function(t,n,r){var e=r(0),i=r(24),o=r(7),u=r(57),c=r(51),f=RegExp.prototype,a=function(t,n){this._r=t,this._s=n};r(59)(a,"RegExp String",function next(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function matchAll(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in f?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new a(e,n)}})},function(t,n,r){r(70)("asyncIterator")},function(t,n,r){r(70)("observable")},function(t,n,r){var e=r(0),f=r(95),a=r(11),s=r(16),l=r(85);e(e.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var n,r,e=a(t),i=s.f,o=f(e),u={},c=0;c<o.length;)(r=i(e,n=o[c++]))!==Jt&&l(u,n,r);return u}})},function(t,n,r){var e=r(0),i=r(126)(!1);e(e.S,"Object",{values:function values(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(126)(!0);e(e.S,"Object",{entries:function entries(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(9),o=r(10),u=r(8);r(6)&&e(e.P+r(66),"Object",{__defineGetter__:function __defineGetter__(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(9),o=r(10),u=r(8);r(6)&&e(e.P+r(66),"Object",{__defineSetter__:function __defineSetter__(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(9),o=r(23),u=r(17),c=r(16).f;r(6)&&e(e.P+r(66),"Object",{__lookupGetter__:function __lookupGetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.get}while(r=u(r))}})},function(t,n,r){var e=r(0),i=r(9),o=r(23),u=r(17),c=r(16).f;r(6)&&e(e.P+r(66),"Object",{__lookupSetter__:function __lookupSetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.set}while(r=u(r))}})},function(t,n,r){var e=r(0);e(e.P+e.R,"Map",{toJSON:r(127)("Map")})},function(t,n,r){var e=r(0);e(e.P+e.R,"Set",{toJSON:r(127)("Set")})},function(t,n,r){r(67)("Map")},function(t,n,r){r(67)("Set")},function(t,n,r){r(67)("WeakMap")},function(t,n,r){r(67)("WeakSet")},function(t,n,r){r(68)("Map")},function(t,n,r){r(68)("Set")},function(t,n,r){r(68)("WeakMap")},function(t,n,r){r(68)("WeakSet")},function(t,n,r){var e=r(0);e(e.G,{global:r(2)})},function(t,n,r){var e=r(0);e(e.S,"System",{global:r(2)})},function(t,n,r){var e=r(0),i=r(20);e(e.S,"Error",{isError:function isError(t){return"Error"===i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clamp:function clamp(t,n,r){return Math.min(r,Math.max(n,t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,n,r){var e=r(0),i=180/Math.PI;e(e.S,"Math",{degrees:function degrees(t){return t*i}})},function(t,n,r){var e=r(0),o=r(129),u=r(110);e(e.S,"Math",{fscale:function fscale(t,n,r,e,i){return u(o(t,n,r,e,i))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{iaddh:function iaddh(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)+(e>>>0)+((i&o|(i|o)&~(i+o>>>0))>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{isubh:function isubh(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)-(e>>>0)-((~i&o|~(i^o)&i-o>>>0)>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{imulh:function imulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>16,c=e>>16,f=(u*o>>>0)+(i*o>>>16);return u*c+(f>>16)+((i*c>>>0)+(65535&f)>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,n,r){var e=r(0),i=Math.PI/180;e(e.S,"Math",{radians:function radians(t){return t*i}})},function(t,n,r){var e=r(0);e(e.S,"Math",{scale:r(129)})},function(t,n,r){var e=r(0);e(e.S,"Math",{umulh:function umulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>>16,c=e>>>16,f=(u*o>>>0)+(i*o>>>16);return u*c+(f>>>16)+((i*c>>>0)+(65535&f)>>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{signbit:function signbit(t){return(t=+t)!=t?t:0==t?1/t==Infinity:0<t}})},function(t,n,r){var e=r(0),i=r(13),o=r(2),u=r(52),c=r(117);e(e.P+e.R,"Promise",{"finally":function(n){var r=u(this,i.Promise||o.Promise),t="function"==typeof n;return this.then(t?function(t){return c(r,n()).then(function(){return t})}:n,t?function(t){return c(r,n()).then(function(){throw t})}:n)}})},function(t,n,r){var e=r(0),i=r(94),o=r(116);e(e.S,"Promise",{"try":function(t){var n=i.f(this),r=o(t);return(r.e?n.reject:n.resolve)(r.v),n.promise}})},function(t,n,r){var e=r(30),i=r(1),o=e.key,u=e.set;e.exp({defineMetadata:function defineMetadata(t,n,r,e){u(t,n,i(r),o(e))}})},function(t,n,r){var e=r(30),o=r(1),u=e.key,c=e.map,f=e.store;e.exp({deleteMetadata:function deleteMetadata(t,n){var r=arguments.length<3?Jt:u(arguments[2]),e=c(o(n),r,!1);if(e===Jt||!e["delete"](t))return!1;if(e.size)return!0;var i=f.get(n);return i["delete"](r),!!i.size||f["delete"](n)}})},function(t,n,r){var e=r(30),i=r(1),o=r(17),u=e.has,c=e.get,f=e.key,a=function(t,n,r){if(u(t,n,r))return c(t,n,r);var e=o(n);return null!==e?a(t,e,r):Jt};e.exp({getMetadata:function getMetadata(t,n){return a(t,i(n),arguments.length<3?Jt:f(arguments[2]))}})},function(t,n,r){var o=r(120),u=r(128),e=r(30),i=r(1),c=r(17),f=e.keys,a=e.key,s=function(t,n){var r=f(t,n),e=c(t);if(null===e)return r;var i=s(e,n);return i.length?r.length?u(new o(r.concat(i))):i:r};e.exp({getMetadataKeys:function getMetadataKeys(t){return s(i(t),arguments.length<2?Jt:a(arguments[1]))}})},function(t,n,r){var e=r(30),i=r(1),o=e.get,u=e.key;e.exp({getOwnMetadata:function getOwnMetadata(t,n){return o(t,i(n),arguments.length<3?Jt:u(arguments[2]))}})},function(t,n,r){var e=r(30),i=r(1),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function getOwnMetadataKeys(t){return o(i(t),arguments.length<2?Jt:u(arguments[1]))}})},function(t,n,r){var e=r(30),i=r(1),o=r(17),u=e.has,c=e.key,f=function(t,n,r){if(u(t,n,r))return!0;var e=o(n);return null!==e&&f(t,e,r)};e.exp({hasMetadata:function hasMetadata(t,n){return f(t,i(n),arguments.length<3?Jt:c(arguments[2]))}})},function(t,n,r){var e=r(30),i=r(1),o=e.has,u=e.key;e.exp({hasOwnMetadata:function hasOwnMetadata(t,n){return o(t,i(n),arguments.length<3?Jt:u(arguments[2]))}})},function(t,n,r){var e=r(30),i=r(1),o=r(10),u=e.key,c=e.set;e.exp({metadata:function metadata(r,e){return function decorator(t,n){c(r,e,(n!==Jt?i:o)(t),u(n))}}})},function(t,n,r){var e=r(0),i=r(93)(),o=r(2).process,u="process"==r(20)(o);e(e.G,{asap:function asap(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},function(t,n,r){var e=r(0),o=r(2),u=r(13),i=r(93)(),c=r(5)("observable"),f=r(10),a=r(1),s=r(42),l=r(43),h=r(14),p=r(36),v=p.RETURN,g=function(t){return null==t?Jt:f(t)},y=function(t){var n=t._c;n&&(t._c=Jt,n())},d=function(t){return t._o===Jt},b=function(t){d(t)||(t._o=Jt,y(t))},_=function(t,n){a(t),this._c=Jt,this._o=t,t=new S(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:f(r),this._c=r)}catch(i){return void t.error(i)}d(this)&&y(this)};_.prototype=l({},{unsubscribe:function unsubscribe(){b(this)}});var S=function(t){this._s=t};S.prototype=l({},{next:function next(t){var n=this._s;if(!d(n)){var r=n._o;try{var e=g(r.next);if(e)return e.call(r,t)}catch(i){try{b(n)}finally{throw i}}}},error:function error(t){var n=this._s;if(d(n))throw t;var r=n._o;n._o=Jt;try{var e=g(r.error);if(!e)throw t;t=e.call(r,t)}catch(i){try{y(n)}finally{throw i}}return y(n),t},complete:function complete(t){var n=this._s;if(!d(n)){var r=n._o;n._o=Jt;try{var e=g(r.complete);t=e?e.call(r,t):Jt}catch(i){try{y(n)}finally{throw i}}return y(n),t}}});var x=function Observable(t){s(this,x,"Observable","_f")._f=f(t)};l(x.prototype,{subscribe:function subscribe(t){return new _(t,this._f)},forEach:function forEach(i){var n=this;return new(u.Promise||o.Promise)(function(t,r){f(i);var e=n.subscribe({next:function(t){try{return i(t)}catch(n){r(n),e.unsubscribe()}},error:r,complete:t})})}}),l(x,{from:function from(e){var t="function"==typeof this?this:x,n=g(a(e)[c]);if(n){var r=a(n.call(e));return r.constructor===t?r:new t(function(t){return r.subscribe(t)})}return new t(function(n){var r=!1;return i(function(){if(!r){try{if(p(e,!1,function(t){if(n.next(t),r)return v})===v)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function of(){for(var t=0,n=arguments.length,e=new Array(n);t<n;)e[t]=arguments[t++];return new("function"==typeof this?this:x)(function(n){var r=!1;return i(function(){if(!r){for(var t=0;t<e.length;++t)if(n.next(e[t]),r)return;n.complete()}}),function(){r=!0}})}}),h(x.prototype,c,function(){return this}),e(e.G,{Observable:x}),r(41)("Observable")},function(t,n,r){var e=r(0),i=r(92);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,r){for(var e=r(88),i=r(27),o=r(15),u=r(2),c=r(14),f=r(40),a=r(5),s=a("iterator"),l=a("toStringTag"),h=f.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),g=0;g<v.length;g++){var y,d=v[g],b=p[d],_=u[d],S=_&&_.prototype;if(S&&(S[s]||c(S,s,h),S[l]||c(S,l,d),f[d]=h,b))for(y in e)S[y]||o(S,y,e[y],!0)}},function(t,n,r){var e=r(2),i=r(0),o=r(63),u=[].slice,c=/MSIE .\./.test(o),f=function(i){return function(t,n){var r=2<arguments.length,e=!!r&&u.call(arguments,2);return i(r?function(){("function"==typeof t?t:Function(t)).apply(this,e)}:t,n)}};i(i.G+i.B+i.F*c,{setTimeout:f(e.setTimeout),setInterval:f(e.setInterval)})},function(t,n,r){var h=r(19),e=r(0),i=r(31),o=r(74),u=r(28),c=r(17),a=r(27),f=r(8),s=r(332),l=r(10),p=r(36),v=r(130),g=r(59),y=r(89),d=r(3),b=r(11),_=r(6),S=r(12),x=function(a){var s=1==a,l=4==a;return function(t,n,r){var e,i,o,u=h(n,r,3),c=b(t),f=s||7==a||2==a?new("function"==typeof this?this:Dict):Jt;for(e in c)if(S(c,e)&&(o=u(i=c[e],e,t),a))if(s)f[e]=o;else if(o)switch(a){case 2:f[e]=i;break;case 3:return!0;case 5:return i;case 6:return e;case 7:f[o[0]]=o[1]}else if(l)return!1;return 3==a||l?l:f}},m=x(6),w=function(n){return function(t){return new E(t,n)}},E=function(t,n){this._t=b(t),this._a=a(t),this._i=0,this._k=n};function Dict(t){var r=u(null);return t!=Jt&&(v(t)?p(t,!0,function(t,n){r[t]=n}):o(r,t)),r}g(E,"Dict",function(){var t,n=this._t,r=this._a,e=this._k;do{if(r.length<=this._i)return this._t=Jt,y(1)}while(!S(n,t=r[this._i++]));return y(0,"keys"==e?t:"values"==e?n[t]:[t,n[t]])}),Dict.prototype=null,e(e.G+e.F,{Dict:Dict}),e(e.S,"Dict",{keys:w("keys"),values:w("values"),entries:w("entries"),forEach:x(0),map:x(1),filter:x(2),some:x(3),every:x(4),find:x(5),findKey:m,mapPairs:x(7),reduce:function reduce(t,n,r){l(n);var e,i,o=b(t),u=a(o),c=u.length,f=0;if(arguments.length<3){if(!c)throw TypeError("Reduce of empty object with no initial value");e=o[u[f++]]}else e=Object(r);for(;f<c;)S(o,i=u[f++])&&(e=n(e,o[i],i,t));return e},keyOf:s,includes:function includes(t,n){return(n==n?s(t,n):m(t,function(t){return t!=t}))!==Jt},has:S,get:function get(t,n){if(S(t,n))return t[n]},set:function set(t,n,r){return _&&n in Object?f.f(t,n,i(0,r)):t[n]=r,t},isDict:function isDict(t){return d(t)&&c(t)===Dict.prototype}})},function(t,n,r){var c=r(27),f=r(11);t.exports=function(t,n){for(var r,e=f(t),i=c(e),o=i.length,u=0;u<o;)if(e[r=i[u++]]===n)return r}},function(t,n,r){var e=r(1),i=r(50);t.exports=r(13).getIterator=function(t){var n=i(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return e(n.call(t))}},function(t,n,r){var e=r(2),i=r(13),o=r(0),u=r(131);o(o.G+o.F,{delay:function delay(n){return new(i.Promise||e.Promise)(function(t){setTimeout(u.call(t,!0),n)})}})},function(t,n,r){var e=r(132),i=r(0);r(13)._=e._=e._||{},i(i.P+i.F,"Function",{part:r(131)})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{isObject:r(3)})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{classof:r(34)})},function(t,n,r){var e=r(0),i=r(133);e(e.S+e.F,"Object",{define:i})},function(t,n,r){var e=r(0),i=r(133),o=r(28);e(e.S+e.F,"Object",{make:function(t,n){return i(o(t),n)}})},function(t,n,r){r(58)(Number,"Number",function(t){this._l=+t,this._i=0},function(){var t=this._i++,n=!(t<this._l);return{done:n,value:n?Jt:t}})},function(t,n,r){var e=r(0),i=r(97)(/[\\^$*+?.()|[\]{}]/g,"\\$&");e(e.S,"RegExp",{escape:function escape(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(97)(/[&<>"']/g,{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"});e(e.P+e.F,"String",{escapeHTML:function escapeHTML(){return i(this)}})},function(t,n,r){var e=r(0),i=r(97)(/&(?:amp|lt|gt|quot|apos);/g,{"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'"});e(e.P+e.F,"String",{unescapeHTML:function unescapeHTML(){return i(this)}})}]),"undefined"!=typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):i.core=e}(1,1);
//# sourceMappingURL=core.min.js.map
/**
 * core-js 2.6.11
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2019 Denis Pushkarev
 */
!function(e,i,Jt){"use strict";!function(r){var e={};function __webpack_require__(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=r,__webpack_require__.c=e,__webpack_require__.d=function(t,n,r){__webpack_require__.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(t){var n=t&&t.__esModule?function getDefault(){return t["default"]}:function getModuleExports(){return t};return __webpack_require__.d(n,"a",n),n},__webpack_require__.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=126)}([function(t,n,r){var y=r(2),g=r(12),d=r(16),_=r(17),b=r(15),S="prototype",m=function(t,n,r){var e,i,o,u=t&m.F,c=t&m.G,f=t&m.S,a=t&m.P,s=t&m.B,l=t&m.W,h=c?g:g[n]||(g[n]={}),p=h[S],v=c?y:f?y[n]:(y[n]||{})[S];for(e in c&&(r=n),r)(i=!u&&v&&v[e]!==Jt)&&b(h,e)||(o=i?v[e]:r[e],h[e]=c&&"function"!=typeof v[e]?r[e]:s&&i?d(o,y):l&&v[e]==o?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[S]=e[S],t}(o):a&&"function"==typeof o?d(Function.call,o):o,a&&((h.virtual||(h.virtual={}))[e]=o,t&m.R&&p&&!p[e]&&_(p,e,o)))};m.F=1,m.G=2,m.S=4,m.P=8,m.B=16,m.W=32,m.U=64,m.R=128,t.exports=m},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof i&&(i=r)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n,r){var e=r(49)("wks"),i=r(41),o=r(2).Symbol,u="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},function(t,n,r){var e=r(22),i=Math.min;t.exports=function(t){return 0<t?i(e(t),9007199254740991):0}},function(t,n,r){t.exports=!r(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var i=r(1),o=r(90),u=r(27),c=Object.defineProperty;n.f=r(7)?Object.defineProperty:function defineProperty(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(24);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(44),i=r(24);t.exports=function(t){return e(i(t))}},function(t,n){var r=t.exports={version:"2.6.11"};"number"==typeof e&&(e=r)},function(t,n,r){var e=r(15),i=r(9),o=r(65)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var e=r(0),i=r(4),u=r(24),c=/"/g,o=function(t,n,r,e){var i=String(u(t)),o="<"+n;return""!==r&&(o+=" "+r+'="'+String(e).replace(c,"&quot;")+'"'),o+">"+i+"</"+n+">"};t.exports=function(n,t){var r={};r[n]=t(o),e(e.P+e.F*i(function(){var t=""[n]('"');return t!==t.toLowerCase()||3<t.split('"').length}),"String",r)}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var o=r(10);t.exports=function(e,i,t){if(o(e),i===Jt)return e;switch(t){case 1:return function(t){return e.call(i,t)};case 2:return function(t,n){return e.call(i,t,n)};case 3:return function(t,n,r){return e.call(i,t,n,r)}}return function(){return e.apply(i,arguments)}}},function(t,n,r){var e=r(8),i=r(28);t.exports=r(7)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(45),i=r(28),o=r(11),u=r(27),c=r(15),f=r(90),a=Object.getOwnPropertyDescriptor;n.f=r(7)?a:function getOwnPropertyDescriptor(t,n){if(t=o(t),n=u(n,!0),f)try{return a(t,n)}catch(r){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},function(t,n,r){var e=r(4);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n,r){var b=r(16),S=r(44),m=r(9),w=r(6),e=r(80);t.exports=function(l,t){var h=1==l,p=2==l,v=3==l,y=4==l,g=6==l,d=5==l||g,_=t||e;return function(t,n,r){for(var e,i,o=m(t),u=S(o),c=b(n,r,3),f=w(u.length),a=0,s=h?_(t,f):p?_(t,0):Jt;a<f;a++)if((d||a in u)&&(i=c(e=u[a],a,o),l))if(h)s[a]=i;else if(i)switch(l){case 3:return!0;case 5:return e;case 6:return a;case 2:s.push(e)}else if(y)return!1;return g?-1:v||y?y:s}}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?e:r)(t)}},function(t,n,r){var i=r(0),o=r(12),u=r(4);t.exports=function(t,n){var r=(o.Object||{})[t]||Object[t],e={};e[t]=n(r),i(i.S+i.F*u(function(){r(1)}),"Object",e)}},function(t,n){t.exports=function(t){if(t==Jt)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){if(r(7)){var g=r(30),d=r(2),_=r(4),b=r(0),S=r(58),e=r(88),h=r(16),m=r(38),i=r(28),w=r(17),o=r(39),u=r(22),x=r(6),O=r(115),c=r(35),f=r(27),a=r(15),P=r(37),M=r(3),p=r(9),v=r(77),E=r(32),F=r(13),I=r(46).f,y=r(48),s=r(41),l=r(5),k=r(20),A=r(50),j=r(55),N=r(82),T=r(36),R=r(79),D=r(43),L=r(81),C=r(106),U=r(8),W=r(18),G=U.f,V=W.f,B=d.RangeError,q=d.TypeError,z=d.Uint8Array,K="ArrayBuffer",J="Shared"+K,H="BYTES_PER_ELEMENT",Y="prototype",X=Array[Y],$=e.ArrayBuffer,Z=e.DataView,Q=k(0),tt=k(2),nt=k(3),rt=k(4),et=k(5),it=k(6),ot=A(!0),ut=A(!1),ct=N.values,ft=N.keys,at=N.entries,st=X.lastIndexOf,lt=X.reduce,ht=X.reduceRight,pt=X.join,vt=X.sort,yt=X.slice,gt=X.toString,dt=X.toLocaleString,_t=l("iterator"),bt=l("toStringTag"),St=s("typed_constructor"),mt=s("def_constructor"),wt=S.CONSTR,xt=S.TYPED,Ot=S.VIEW,Pt="Wrong length!",Mt=k(1,function(t,n){return At(j(t,t[mt]),n)}),Et=_(function(){return 1===new z(new Uint16Array([1]).buffer)[0]}),Ft=!!z&&!!z[Y].set&&_(function(){new z(1).set({})}),It=function(t,n){var r=u(t);if(r<0||r%n)throw B("Wrong offset!");return r},kt=function(t){if(M(t)&&xt in t)return t;throw q(t+" is not a typed array!")},At=function(t,n){if(!(M(t)&&St in t))throw q("It is not a typed array constructor!");return new t(n)},jt=function(t,n){return Nt(j(t,t[mt]),n)},Nt=function(t,n){for(var r=0,e=n.length,i=At(t,e);r<e;)i[r]=n[r++];return i},Tt=function(t,n,r){G(t,n,{get:function(){return this._d[r]}})},Rt=function from(t){var n,r,e,i,o,u,c=p(t),f=arguments.length,a=1<f?arguments[1]:Jt,s=a!==Jt,l=y(c);if(l!=Jt&&!v(l)){for(u=l.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(s&&2<f&&(a=h(a,arguments[2],2)),n=0,r=x(c.length),i=At(this,r);n<r;n++)i[n]=s?a(c[n],n):c[n];return i},Dt=function of(){for(var t=0,n=arguments.length,r=At(this,n);t<n;)r[t]=arguments[t++];return r},Lt=!!z&&_(function(){dt.call(new z(1))}),Ct=function toLocaleString(){return dt.apply(Lt?yt.call(kt(this)):kt(this),arguments)},Ut={copyWithin:function copyWithin(t,n){return C.call(kt(this),t,n,2<arguments.length?arguments[2]:Jt)},every:function every(t){return rt(kt(this),t,1<arguments.length?arguments[1]:Jt)},fill:function fill(t){return L.apply(kt(this),arguments)},filter:function filter(t){return jt(this,tt(kt(this),t,1<arguments.length?arguments[1]:Jt))},find:function find(t){return et(kt(this),t,1<arguments.length?arguments[1]:Jt)},findIndex:function findIndex(t){return it(kt(this),t,1<arguments.length?arguments[1]:Jt)},forEach:function forEach(t){Q(kt(this),t,1<arguments.length?arguments[1]:Jt)},indexOf:function indexOf(t){return ut(kt(this),t,1<arguments.length?arguments[1]:Jt)},includes:function includes(t){return ot(kt(this),t,1<arguments.length?arguments[1]:Jt)},join:function join(t){return pt.apply(kt(this),arguments)},lastIndexOf:function lastIndexOf(t){return st.apply(kt(this),arguments)},map:function map(t){return Mt(kt(this),t,1<arguments.length?arguments[1]:Jt)},reduce:function reduce(t){return lt.apply(kt(this),arguments)},reduceRight:function reduceRight(t){return ht.apply(kt(this),arguments)},reverse:function reverse(){for(var t,n=this,r=kt(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function some(t){return nt(kt(this),t,1<arguments.length?arguments[1]:Jt)},sort:function sort(t){return vt.call(kt(this),t)},subarray:function subarray(t,n){var r=kt(this),e=r.length,i=c(t,e);return new(j(r,r[mt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,x((n===Jt?e:c(n,e))-i))}},Wt=function slice(t,n){return jt(this,yt.call(kt(this),t,n))},Gt=function set(t){kt(this);var n=It(arguments[1],1),r=this.length,e=p(t),i=x(e.length),o=0;if(r<i+n)throw B(Pt);for(;o<i;)this[n+o]=e[o++]},Vt={entries:function entries(){return at.call(kt(this))},keys:function keys(){return ft.call(kt(this))},values:function values(){return ct.call(kt(this))}},Bt=function(t,n){return M(t)&&t[xt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},qt=function getOwnPropertyDescriptor(t,n){return Bt(t,n=f(n,!0))?i(2,t[n]):V(t,n)},zt=function defineProperty(t,n,r){return!(Bt(t,n=f(n,!0))&&M(r)&&a(r,"value"))||a(r,"get")||a(r,"set")||r.configurable||a(r,"writable")&&!r.writable||a(r,"enumerable")&&!r.enumerable?G(t,n,r):(t[n]=r.value,t)};wt||(W.f=qt,U.f=zt),b(b.S+b.F*!wt,"Object",{getOwnPropertyDescriptor:qt,defineProperty:zt}),_(function(){gt.call({})})&&(gt=dt=function toString(){return pt.call(this)});var Kt=o({},Ut);o(Kt,Vt),w(Kt,_t,Vt.values),o(Kt,{slice:Wt,set:Gt,constructor:function(){},toString:gt,toLocaleString:Ct}),Tt(Kt,"buffer","b"),Tt(Kt,"byteOffset","o"),Tt(Kt,"byteLength","l"),Tt(Kt,"length","e"),G(Kt,bt,{get:function(){return this[xt]}}),t.exports=function(t,l,n,o){var h=t+((o=!!o)?"Clamped":"")+"Array",r="get"+t,u="set"+t,p=d[h],c=p||{},e=p&&F(p),i={},f=p&&p[Y],v=function(t,i){G(t,i,{get:function(){return(t=this._d).v[r](i*l+t.o,Et);var t},set:function(t){return n=i,r=t,e=this._d,o&&(r=(r=Math.round(r))<0?0:255<r?255:255&r),void e.v[u](n*l+e.o,r,Et);var n,r,e},enumerable:!0})};!p||!S.ABV?(p=n(function(t,n,r,e){m(t,p,h,"_d");var i,o,u,c,f=0,a=0;if(M(n)){if(!(n instanceof $||(c=P(n))==K||c==J))return xt in n?Nt(p,n):Rt.call(p,n);i=n,a=It(r,l);var s=n.byteLength;if(e===Jt){if(s%l)throw B(Pt);if((o=s-a)<0)throw B(Pt)}else if(s<(o=x(e)*l)+a)throw B(Pt);u=o/l}else u=O(n),i=new $(o=u*l);for(w(t,"_d",{b:i,o:a,l:o,e:u,v:new Z(i)});f<u;)v(t,f++)}),f=p[Y]=E(Kt),w(f,"constructor",p)):_(function(){p(1)})&&_(function(){new p(-1)})&&R(function(t){new p,new p(null),new p(1.5),new p(t)},!0)||(p=n(function(t,n,r,e){var i;return m(t,p,h),M(n)?n instanceof $||(i=P(n))==K||i==J?e!==Jt?new c(n,It(r,l),e):r!==Jt?new c(n,It(r,l)):new c(n):xt in n?Nt(p,n):Rt.call(p,n):new c(O(n))}),Q(e!==Function.prototype?I(c).concat(I(e)):I(c),function(t){t in p||w(p,t,c[t])}),p[Y]=f,g||(f.constructor=p));var a=f[_t],s=!!a&&("values"==a.name||a.name==Jt),y=Vt.values;w(p,St,!0),w(f,xt,h),w(f,Ot,!0),w(f,mt,p),(o?new p(1)[bt]==h:bt in f)||G(f,bt,{get:function(){return h}}),b(b.G+b.W+b.F*((i[h]=p)!=c),i),b(b.S,h,{BYTES_PER_ELEMENT:l}),b(b.S+b.F*_(function(){c.of.call(p,1)}),h,{from:Rt,of:Dt}),H in f||w(f,H,l),b(b.P,h,Ut),D(h),b(b.P+b.F*Ft,h,{set:Gt}),b(b.P+b.F*!s,h,Vt),g||f.toString==gt||(f.toString=gt),b(b.P+b.F*_(function(){new p(1).slice()}),h,{slice:Wt}),b(b.P+b.F*(_(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!_(function(){f.toLocaleString.call([1,2])})),h,{toLocaleString:Ct}),T[h]=s?a:y,g||s||w(f,_t,y)}}else t.exports=function(){}},function(t,n,r){var o=r(109),e=r(0),i=r(49)("metadata"),u=i.store||(i.store=new(r(112))),c=function(t,n,r){var e=u.get(t);if(!e){if(!r)return Jt;u.set(t,e=new o)}var i=e.get(n);if(!i){if(!r)return Jt;e.set(n,i=new o)}return i};t.exports={store:u,map:c,has:function(t,n,r){var e=c(n,r,!1);return e!==Jt&&e.has(t)},get:function(t,n,r){var e=c(n,r,!1);return e===Jt?Jt:e.get(t)},set:function(t,n,r,e){c(r,e,!0).set(t,n)},keys:function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},key:function(t){return t===Jt||"symbol"==typeof t?t:String(t)},exp:function(t){e(e.S,"Reflect",t)}}},function(t,n,r){var i=r(3);t.exports=function(t,n){if(!i(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!i(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!i(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!i(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(41)("meta"),i=r(3),o=r(15),u=r(8).f,c=0,f=Object.isExtensible||function(){return!0},a=!r(4)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!o(t,e)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return a&&l.NEED&&f(t)&&!o(t,e)&&s(t),t}}},function(t,n){t.exports=!0},function(t,n,r){var e=r(92),i=r(66);t.exports=Object.keys||function keys(t){return e(t,i)}},function(t,n,e){var i=e(1),o=e(93),u=e(66),c=e(65)("IE_PROTO"),f=function(){},a="prototype",s=function(){var t,n=e(62)("iframe"),r=u.length;for(n.style.display="none",e(67).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s[a][u[r]];return s()};t.exports=Object.create||function create(t,n){var r;return null!==t?(f[a]=i(t),r=new f,f[a]=null,r[c]=t):r=s(),n===Jt?r:o(r,n)}},function(t,n){t.exports=function(){}},function(t,n,r){var h=r(16),p=r(104),v=r(77),y=r(1),g=r(6),d=r(48),_={},b={};(n=t.exports=function(t,n,r,e,i){var o,u,c,f,a=i?function(){return t}:d(t),s=h(r,e,n?2:1),l=0;if("function"!=typeof a)throw TypeError(t+" is not iterable!");if(v(a)){for(o=g(t.length);l<o;l++)if((f=n?s(y(u=t[l])[0],u[1]):s(t[l]))===_||f===b)return f}else for(c=a.call(t);!(u=c.next()).done;)if((f=p(c,s,u.value,n))===_||f===b)return f}).BREAK=_,n.RETURN=b},function(t,n,r){var e=r(22),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=e(t))<0?i(t+n,0):o(t,n)}},function(t,n){t.exports={}},function(t,n,r){var i=r(21),o=r(5)("toStringTag"),u="Arguments"==i(function(){return arguments}());t.exports=function(t){var n,r,e;return t===Jt?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(r){}}(n=Object(t),o))?r:u?i(n):"Object"==(e=i(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||e!==Jt&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){var i=r(17);t.exports=function(t,n,r){for(var e in n)r&&t[e]?t[e]=n[e]:i(t,e,n[e]);return t}},function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(t===Jt?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(8).f,i=r(15),o=r(5)("toStringTag");t.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},function(t,n,r){var e=r(2),i=r(12),o=r(8),u=r(7),c=r(5)("species");t.exports=function(t){var n="function"==typeof i[t]?i[t]:e[t];u&&n&&!n[c]&&o.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,r){var e=r(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(92),i=r(66).concat("length","prototype");n.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return e(t,i)}},function(t,n,r){var u=r(0),e=r(24),c=r(4),f=r(71),i="["+f+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),s=function(t,n,r){var e={},i=c(function(){return!!f[t]()||"​"!="​"[t]()}),o=e[t]=i?n(l):f[t];r&&(e[r]=o),u(u.P+u.F*i,"String",e)},l=s.trim=function(t,n){return t=String(e(t)),1&n&&(t=t.replace(o,"")),2&n&&(t=t.replace(a,"")),t};t.exports=s},function(t,n,r){var e=r(37),i=r(5)("iterator"),o=r(36);t.exports=r(12).getIteratorMethod=function(t){if(t!=Jt)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(12),i=r(2),o="__core-js_shared__",u=i[o]||(i[o]={});(t.exports=function(t,n){return u[t]||(u[t]=n!==Jt?n:{})})("versions",[]).push({version:e.version,mode:r(30)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var f=r(11),a=r(6),s=r(35);t.exports=function(c){return function(t,n,r){var e,i=f(t),o=a(i.length),u=s(r,o);if(c&&n!=n){for(;u<o;)if((e=i[u++])!=e)return!0}else for(;u<o;u++)if((c||u in i)&&i[u]===n)return c||u||0;return!c&&-1}}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(21);t.exports=Array.isArray||function isArray(t){return"Array"==e(t)}},function(t,n,r){var b=r(30),S=r(0),m=r(63),w=r(17),x=r(36),O=r(54),P=r(42),M=r(13),E=r(5)("iterator"),F=!([].keys&&"next"in[].keys()),I="values",k=function(){return this};t.exports=function(t,n,r,e,i,o,u){O(r,n,e);var c,f,a,s=function(t){if(!F&&t in v)return v[t];switch(t){case"keys":return function keys(){return new r(this,t)};case I:return function values(){return new r(this,t)}}return function entries(){return new r(this,t)}},l=n+" Iterator",h=i==I,p=!1,v=t.prototype,y=v[E]||v["@@iterator"]||i&&v[i],g=y||s(i),d=i?h?s("entries"):g:Jt,_="Array"==n&&v.entries||y;if(_&&(a=M(_.call(new t)))!==Object.prototype&&a.next&&(P(a,l,!0),b||"function"==typeof a[E]||w(a,E,k)),h&&y&&y.name!==I&&(p=!0,g=function values(){return y.call(this)}),b&&!u||!F&&!p&&v[E]||w(v,E,g),x[n]=g,x[l]=k,i)if(c={values:h?g:s(I),keys:o?g:s("keys"),entries:d},u)for(f in c)f in v||m(v,f,c[f]);else S(S.P+S.F*(F||p),n,c);return c}},function(t,n,r){var e=r(32),i=r(28),o=r(42),u={};r(17)(u,r(5)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},function(t,n,r){var i=r(1),o=r(10),u=r(5)("species");t.exports=function(t,n){var r,e=i(t).constructor;return e===Jt||(r=i(e)[u])==Jt?n:o(r)}},function(t,n,r){var e=r(2).navigator;t.exports=e&&e.userAgent||""},function(t,n,r){var l=r(2),h=r(0),p=r(29),v=r(4),y=r(17),g=r(39),d=r(34),_=r(38),b=r(3),S=r(42),m=r(8).f,w=r(20)(0),x=r(7);t.exports=function(r,t,n,e,i,o){var u=l[r],c=u,f=i?"set":"add",a=c&&c.prototype,s={};return x&&"function"==typeof c&&(o||a.forEach&&!v(function(){(new c).entries().next()}))?(c=t(function(t,n){_(t,c,r,"_c"),t._c=new u,n!=Jt&&d(n,i,t[f],t)}),w("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(e){var i="add"==e||"set"==e;e in a&&(!o||"clear"!=e)&&y(c.prototype,e,function(t,n){if(_(this,c,e),!i&&o&&!b(t))return"get"==e&&Jt;var r=this._c[e](0===t?0:t,n);return i?this:r})}),o||m(c.prototype,"size",{get:function(){return this._c.size}})):(c=e.getConstructor(t,r,i,f),g(c.prototype,n),p.NEED=!0),S(c,r),s[r]=c,h(h.G+h.W+h.F,s),o||e.setStrong(c,r,i),c}},function(t,n,r){for(var e,i=r(2),o=r(17),u=r(41),c=u("typed_array"),f=u("view"),a=!(!i.ArrayBuffer||!i.DataView),s=a,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[h[l++]])?(o(e.prototype,c,!0),o(e.prototype,f,!0)):s=!1;t.exports={ABV:a,CONSTR:s,TYPED:c,VIEW:f}},function(t,n,r){t.exports=r(30)||!r(4)(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete r(2)[t]})},function(t,n,r){var e=r(0);t.exports=function(t){e(e.S,t,{of:function of(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,r){var e=r(0),u=r(10),c=r(16),f=r(34);t.exports=function(t){e(e.S,t,{from:function from(t){var n,r,e,i,o=arguments[1];return u(this),(n=o!==Jt)&&u(o),t==Jt?new this:(r=[],n?(e=0,i=c(o,arguments[2],2),f(t,!1,function(t){r.push(i(t,e++))})):f(t,!1,r.push,r),new this(r))}})}},function(t,n,r){var e=r(3),i=r(2).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,r){t.exports=r(17)},function(t,n,r){var e=r(2),i=r(12),o=r(30),u=r(91),c=r(8).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){var e=r(49)("keys"),i=r(41);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(2).document;t.exports=e&&e.documentElement},function(t,n,r){var h=r(7),p=r(31),v=r(51),y=r(45),g=r(9),d=r(44),i=Object.assign;t.exports=!i||r(4)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=i({},t)[r]||Object.keys(i({},n)).join("")!=e})?function assign(t,n){for(var r=g(t),e=arguments.length,i=1,o=v.f,u=y.f;i<e;)for(var c,f=d(arguments[i++]),a=o?p(f).concat(o(f)):p(f),s=a.length,l=0;l<s;)c=a[l++],h&&!u.call(f,c)||(r[c]=f[c]);return r}:i},function(t,n){t.exports=function(t,n,r){var e=r===Jt;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},function(t,n,r){var i=r(22),o=r(24);t.exports=function repeat(t){var n=String(o(this)),r="",e=i(t);if(e<0||e==Infinity)throw RangeError("Count can't be negative");for(;0<e;(e>>>=1)&&(n+=n))1&e&&(r+=n);return r}},function(t,n){t.exports="\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n){t.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n){var r=Math.expm1;t.exports=!r||22025.465794806718<r(10)||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function expm1(t){return 0==(t=+t)?t:-1e-6<t&&t<1e-6?t+t*t/2:Math.exp(t)-1}:r},function(t,n,r){var f=r(22),a=r(24);t.exports=function(c){return function(t,n){var r,e,i=String(a(t)),o=f(n),u=i.length;return o<0||u<=o?c?"":Jt:(r=i.charCodeAt(o))<55296||56319<r||o+1===u||(e=i.charCodeAt(o+1))<56320||57343<e?c?i.charAt(o):r:c?i.slice(o,o+2):e-56320+(r-55296<<10)+65536}}},function(t,n,r){var e=r(103),i=r(24);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},function(t,n,r){var i=r(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[i]=!1,!"/./"[t](n)}catch(e){}}return!0}},function(t,n,r){var e=r(36),i=r(5)("iterator"),o=Array.prototype;t.exports=function(t){return t!==Jt&&(e.Array===t||o[i]===t)}},function(t,n,r){var e=r(8),i=r(28);t.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},function(t,n,r){var o=r(5)("iterator"),u=!1;try{var e=[7][o]();e["return"]=function(){u=!0},Array.from(e,function(){throw 2})}catch(c){}t.exports=function(t,n){if(!n&&!u)return!1;var r=!1;try{var e=[7],i=e[o]();i.next=function(){return{done:r=!0}},e[o]=function(){return i},t(e)}catch(c){}return r}},function(t,n,r){var e=r(207);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var c=r(9),f=r(35),a=r(6);t.exports=function fill(t){for(var n=c(this),r=a(n.length),e=arguments.length,i=f(1<e?arguments[1]:Jt,r),o=2<e?arguments[2]:Jt,u=o===Jt?r:f(o,r);i<u;)n[i++]=t;return n}},function(t,n,r){var e=r(33),i=r(83),o=r(36),u=r(11);t.exports=r(53)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||t.length<=r?(this._t=Jt,i(1)):i(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){var e,i,o,u=r(16),c=r(69),f=r(67),a=r(62),s=r(2),l=s.process,h=s.setImmediate,p=s.clearImmediate,v=s.MessageChannel,y=s.Dispatch,g=0,d={},_="onreadystatechange",b=function(){var t=+this;if(d.hasOwnProperty(t)){var n=d[t];delete d[t],n()}},S=function(t){b.call(t.data)};h&&p||(h=function setImmediate(t){for(var n=[],r=1;r<arguments.length;)n.push(arguments[r++]);return d[++g]=function(){c("function"==typeof t?t:Function(t),n)},e(g),g},p=function clearImmediate(t){delete d[t]},"process"==r(21)(l)?e=function(t){l.nextTick(u(b,t,1))}:y&&y.now?e=function(t){y.now(u(b,t,1))}:v?(o=(i=new v).port2,i.port1.onmessage=S,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",S,!1)):e=_ in a("script")?function(t){f.appendChild(a("script"))[_]=function(){f.removeChild(this),b.call(t)}}:function(t){setTimeout(u(b,t,1),0)}),t.exports={set:h,clear:p}},function(t,n,r){var c=r(2),f=r(84).set,a=c.MutationObserver||c.WebKitMutationObserver,s=c.process,l=c.Promise,h="process"==r(21)(s);t.exports=function(){var e,i,o,t=function(){var t,n;for(h&&(t=s.domain)&&t.exit();e;){n=e.fn,e=e.next;try{n()}catch(r){throw e?o():i=Jt,r}}i=Jt,t&&t.enter()};if(h)o=function(){s.nextTick(t)};else if(!a||c.navigator&&c.navigator.standalone)if(l&&l.resolve){var n=l.resolve(Jt);o=function(){n.then(t)}}else o=function(){f.call(c,t)};else{var r=!0,u=document.createTextNode("");new a(t).observe(u,{characterData:!0}),o=function(){u.data=r=!r}}return function(t){var n={fn:t,next:Jt};i&&(i.next=n),e||(e=n,o()),i=n}}},function(t,n,r){var i=r(10);function PromiseCapability(t){var r,e;this.promise=new t(function(t,n){if(r!==Jt||e!==Jt)throw TypeError("Bad Promise constructor");r=t,e=n}),this.resolve=i(r),this.reject=i(e)}t.exports.f=function(t){return new PromiseCapability(t)}},function(t,n,r){var e=r(46),i=r(51),o=r(1),u=r(2).Reflect;t.exports=u&&u.ownKeys||function ownKeys(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(2),i=r(7),o=r(30),u=r(58),c=r(17),f=r(39),a=r(4),s=r(38),l=r(22),h=r(6),p=r(115),v=r(46).f,y=r(8).f,g=r(81),d=r(42),_="ArrayBuffer",b="DataView",S="prototype",m="Wrong index!",w=e[_],x=e[b],O=e.Math,P=e.RangeError,M=e.Infinity,E=w,F=O.abs,I=O.pow,k=O.floor,A=O.log,j=O.LN2,N="byteLength",T="byteOffset",R=i?"_b":"buffer",D=i?"_l":N,L=i?"_o":T;function packIEEE754(t,n,r){var e,i,o,u=new Array(r),c=8*r-n-1,f=(1<<c)-1,a=f>>1,s=23===n?I(2,-24)-I(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=F(t))!=t||t===M?(i=t!=t?1:0,e=f):(e=k(A(t)/j),t*(o=I(2,-e))<1&&(e--,o*=2),2<=(t+=1<=e+a?s/o:s*I(2,1-a))*o&&(e++,o/=2),f<=e+a?(i=0,e=f):1<=e+a?(i=(t*o-1)*I(2,n),e+=a):(i=t*I(2,a-1)*I(2,n),e=0));8<=n;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;0<c;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u}function unpackIEEE754(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,f=r-1,a=t[f--],s=127&a;for(a>>=7;0<c;s=256*s+t[f],f--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;0<c;e=256*e+t[f],f--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:a?-M:M;e+=I(2,n),s-=u}return(a?-1:1)*e*I(2,s-n)}function unpackI32(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function packI8(t){return[255&t]}function packI16(t){return[255&t,t>>8&255]}function packI32(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function packF64(t){return packIEEE754(t,52,8)}function packF32(t){return packIEEE754(t,23,4)}function addGetter(t,n,r){y(t[S],n,{get:function(){return this[r]}})}function get(t,n,r,e){var i=p(+r);if(t[D]<i+n)throw P(m);var o=i+t[L],u=t[R]._b.slice(o,o+n);return e?u:u.reverse()}function set(t,n,r,e,i,o){var u=p(+r);if(t[D]<u+n)throw P(m);for(var c=t[R]._b,f=u+t[L],a=e(+i),s=0;s<n;s++)c[f+s]=a[o?s:n-s-1]}if(u.ABV){if(!a(function(){w(1)})||!a(function(){new w(-1)})||a(function(){return new w,new w(1.5),new w(NaN),w.name!=_})){for(var C,U=(w=function ArrayBuffer(t){return s(this,w),new E(p(t))})[S]=E[S],W=v(E),G=0;G<W.length;)(C=W[G++])in w||c(w,C,E[C]);o||(U.constructor=w)}var V=new x(new w(2)),B=x[S].setInt8;V.setInt8(0,2147483648),V.setInt8(1,2147483649),!V.getInt8(0)&&V.getInt8(1)||f(x[S],{setInt8:function setInt8(t,n){B.call(this,t,n<<24>>24)},setUint8:function setUint8(t,n){B.call(this,t,n<<24>>24)}},!0)}else w=function ArrayBuffer(t){s(this,w,_);var n=p(t);this._b=g.call(new Array(n),0),this[D]=n},x=function DataView(t,n,r){s(this,x,b),s(t,w,b);var e=t[D],i=l(n);if(i<0||e<i)throw P("Wrong offset!");if(e<i+(r=r===Jt?e-i:h(r)))throw P("Wrong length!");this[R]=t,this[L]=i,this[D]=r},i&&(addGetter(w,N,"_l"),addGetter(x,"buffer","_b"),addGetter(x,N,"_l"),addGetter(x,T,"_o")),f(x[S],{getInt8:function getInt8(t){return get(this,1,t)[0]<<24>>24},getUint8:function getUint8(t){return get(this,1,t)[0]},getInt16:function getInt16(t){var n=get(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function getUint16(t){var n=get(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function getInt32(t){return unpackI32(get(this,4,t,arguments[1]))},getUint32:function getUint32(t){return unpackI32(get(this,4,t,arguments[1]))>>>0},getFloat32:function getFloat32(t){return unpackIEEE754(get(this,4,t,arguments[1]),23,4)},getFloat64:function getFloat64(t){return unpackIEEE754(get(this,8,t,arguments[1]),52,8)},setInt8:function setInt8(t,n){set(this,1,t,packI8,n)},setUint8:function setUint8(t,n){set(this,1,t,packI8,n)},setInt16:function setInt16(t,n){set(this,2,t,packI16,n,arguments[2])},setUint16:function setUint16(t,n){set(this,2,t,packI16,n,arguments[2])},setInt32:function setInt32(t,n){set(this,4,t,packI32,n,arguments[2])},setUint32:function setUint32(t,n){set(this,4,t,packI32,n,arguments[2])},setFloat32:function setFloat32(t,n){set(this,4,t,packF32,n,arguments[2])},setFloat64:function setFloat64(t,n){set(this,8,t,packF64,n,arguments[2])}});d(w,_),d(x,b),c(x[S],u.VIEW,!0),n[_]=w,n[b]=x},function(t,n){t.exports=function(n,r){var e=r===Object(r)?function(t){return r[t]}:r;return function(t){return String(t).replace(n,e)}}},function(t,n,r){t.exports=!r(7)&&!r(4)(function(){return 7!=Object.defineProperty(r(62)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){n.f=r(5)},function(t,n,r){var u=r(15),c=r(11),f=r(50)(!1),a=r(65)("IE_PROTO");t.exports=function(t,n){var r,e=c(t),i=0,o=[];for(r in e)r!=a&&u(e,r)&&o.push(r);for(;i<n.length;)u(e,r=n[i++])&&(~f(o,r)||o.push(r));return o}},function(t,n,r){var u=r(8),c=r(1),f=r(31);t.exports=r(7)?Object.defineProperties:function defineProperties(t,n){c(t);for(var r,e=f(n),i=e.length,o=0;o<i;)u.f(t,r=e[o++],n[r]);return t}},function(t,n,r){var e=r(11),i=r(46).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function getOwnPropertyNames(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(n){return u.slice()}}(t):i(e(t))}},function(t,n,i){var r=i(3),e=i(1),o=function(t,n){if(e(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,e){try{(e=i(16)(Function.call,i(18).f(Object.prototype,"__proto__").set,2))(t,[]),r=!(t instanceof Array)}catch(n){r=!0}return function setPrototypeOf(t,n){return o(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):Jt),check:o}},function(t,n,r){var o=r(10),u=r(3),c=r(69),f=[].slice,a={};t.exports=Function.bind||function bind(n){var r=o(this),e=f.call(arguments,1),i=function(){var t=e.concat(f.call(arguments));return this instanceof i?function(t,n,r){if(!(n in a)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";a[n]=Function("F,a","return new F("+e.join(",")+")")}return a[n](t,r)}(r,t.length,t):c(r,t,n)};return u(r.prototype)&&(i.prototype=r.prototype),i}},function(t,n,r){var e=r(21);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},function(t,n,r){var e=r(3),i=Math.floor;t.exports=function isInteger(t){return!e(t)&&isFinite(t)&&i(t)===t}},function(t,n,r){var e=r(2).parseFloat,i=r(47).trim;t.exports=1/e(r(71)+"-0"
)!=-Infinity?function parseFloat(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},function(t,n,r){var e=r(2).parseInt,i=r(47).trim,o=r(71),u=/^[-+]?0[xX]/;t.exports=8!==e(o+"08")||22!==e(o+"0x16")?function parseInt(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},function(t,n){t.exports=Math.log1p||function log1p(t){return-1e-8<(t=+t)&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,r){var o=r(72),e=Math.pow,u=e(2,-52),c=e(2,-23),f=e(2,127)*(2-c),a=e(2,-126);t.exports=Math.fround||function fround(t){var n,r,e=Math.abs(t),i=o(t);return e<a?i*(e/a/c+1/u-1/u)*a*c:f<(r=(n=(1+c/u)*e)-(n-e))||r!=r?i*Infinity:i*r}},function(t,n,r){var e=r(3),i=r(21),o=r(5)("match");t.exports=function(t){var n;return e(t)&&((n=t[o])!==Jt?!!n:"RegExp"==i(t))}},function(t,n,r){var u=r(1);t.exports=function(t,n,r,e){try{return e?n(u(r)[0],r[1]):n(r)}catch(o){var i=t["return"];throw i!==Jt&&u(i.call(t)),o}}},function(t,n,r){var s=r(10),l=r(9),h=r(44),p=r(6);t.exports=function(t,n,r,e,i){s(n);var o=l(t),u=h(o),c=p(o.length),f=i?c-1:0,a=i?-1:1;if(r<2)for(;;){if(f in u){e=u[f],f+=a;break}if(f+=a,i?f<0:c<=f)throw TypeError("Reduce of empty array with no initial value")}for(;i?0<=f:f<c;f+=a)f in u&&(e=n(e,u[f],f,o));return e}},function(t,n,r){var a=r(9),s=r(35),l=r(6);t.exports=[].copyWithin||function copyWithin(t,n){var r=a(this),e=l(r.length),i=s(t,e),o=s(n,e),u=2<arguments.length?arguments[2]:Jt,c=Math.min((u===Jt?e:s(u,e))-o,e-i),f=1;for(o<i&&i<o+c&&(f=-1,o+=c-1,i+=c-1);0<c--;)o in r?r[i]=r[o]:delete r[i],i+=f,o+=f;return r}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(n){return{e:!0,v:n}}}},function(t,n,r){var e=r(1),i=r(3),o=r(86);t.exports=function(t,n){if(e(t),i(n)&&n.constructor===t)return n;var r=o.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){var e=r(110),i=r(40);t.exports=r(57)("Map",function(t){return function Map(){return t(this,0<arguments.length?arguments[0]:Jt)}},{get:function get(t){var n=e.getEntry(i(this,"Map"),t);return n&&n.v},set:function set(t,n){return e.def(i(this,"Map"),0===t?0:t,n)}},e,!0)},function(t,n,r){var u=r(8).f,c=r(32),f=r(39),a=r(16),s=r(38),l=r(34),e=r(53),i=r(83),o=r(43),h=r(7),p=r(29).fastKey,v=r(40),y=h?"_s":"size",g=function(t,n){var r,e=p(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,o,r,e){var i=t(function(t,n){s(t,i,o,"_i"),t._t=o,t._i=c(null),t._f=Jt,t._l=Jt,t[y]=0,n!=Jt&&l(n,r,t[e],t)});return f(i.prototype,{clear:function clear(){for(var t=v(this,o),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=Jt),delete n[r.i];t._f=t._l=Jt,t[y]=0},"delete":function(t){var n=v(this,o),r=g(n,t);if(r){var e=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=e),e&&(e.p=i),n._f==r&&(n._f=e),n._l==r&&(n._l=i),n[y]--}return!!r},forEach:function forEach(t){v(this,o);for(var n,r=a(t,1<arguments.length?arguments[1]:Jt,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function has(t){return!!g(v(this,o),t)}}),h&&u(i.prototype,"size",{get:function(){return v(this,o)[y]}}),i},def:function(t,n,r){var e,i,o=g(t,n);return o?o.v=r:(t._l=o={i:i=p(n,!0),k:n,v:r,p:e=t._l,n:Jt,r:!1},t._f||(t._f=o),e&&(e.n=o),t[y]++,"F"!==i&&(t._i[i]=o)),t},getEntry:g,setStrong:function(t,r,n){e(t,r,function(t,n){this._t=v(t,r),this._k=n,this._l=Jt},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?i(0,"keys"==n?r.k:"values"==n?r.v:[r.k,r.v]):(t._t=Jt,i(1))},n?"entries":"values",!n,!0),o(r)}}},function(t,n,r){var e=r(110),i=r(40);t.exports=r(57)("Set",function(t){return function Set(){return t(this,0<arguments.length?arguments[0]:Jt)}},{add:function add(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},function(t,n,r){var o,e=r(2),i=r(20)(0),u=r(63),c=r(29),f=r(68),a=r(113),s=r(3),l=r(40),h=r(40),p=!e.ActiveXObject&&"ActiveXObject"in e,v="WeakMap",y=c.getWeak,g=Object.isExtensible,d=a.ufstore,_=function(t){return function WeakMap(){return t(this,0<arguments.length?arguments[0]:Jt)}},b={get:function get(t){if(s(t)){var n=y(t);return!0===n?d(l(this,v)).get(t):n?n[this._i]:Jt}},set:function set(t,n){return a.def(l(this,v),t,n)}},S=t.exports=r(57)(v,_,b,a,!0,!0);h&&p&&(f((o=a.getConstructor(_,v)).prototype,b),c.NEED=!0,i(["delete","has","get","set"],function(e){var t=S.prototype,i=t[e];u(t,e,function(t,n){if(s(t)&&!g(t)){this._f||(this._f=new o);var r=this._f[e](t,n);return"set"==e?this:r}return i.call(this,t,n)})}))},function(t,n,r){var u=r(39),c=r(29).getWeak,i=r(1),f=r(3),a=r(38),s=r(34),e=r(20),l=r(15),h=r(40),o=e(5),p=e(6),v=0,y=function(t){return t._l||(t._l=new g)},g=function(){this.a=[]},d=function(t,n){return o(t.a,function(t){return t[0]===n})};g.prototype={get:function(t){var n=d(this,t);if(n)return n[1]},has:function(t){return!!d(this,t)},set:function(t,n){var r=d(this,t);r?r[1]=n:this.a.push([t,n])},"delete":function(n){var t=p(this.a,function(t){return t[0]===n});return~t&&this.a.splice(t,1),!!~t}},t.exports={getConstructor:function(t,r,e,i){var o=t(function(t,n){a(t,o,r,"_i"),t._t=r,t._i=v++,n!=(t._l=Jt)&&s(n,e,t[i],t)});return u(o.prototype,{"delete":function(t){if(!f(t))return!1;var n=c(t);return!0===n?y(h(this,r))["delete"](t):n&&l(n,this._i)&&delete n[this._i]},has:function has(t){if(!f(t))return!1;var n=c(t);return!0===n?y(h(this,r)).has(t):n&&l(n,this._i)}}),o},def:function(t,n,r){var e=c(i(n),!0);return!0===e?y(t).set(n,r):e[t._i]=r,t},ufstore:y}},function(t,n,r){var e=r(4),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return 9<t?t:"0"+t};t.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!e(function(){o.call(new Date(NaN))})?function toISOString(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":9999<n?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(99<r?r:"0"+u(r))+"Z"}:o},function(t,n,r){var e=r(22),i=r(6);t.exports=function(t){if(t===Jt)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},function(t,n,r){var p=r(52),v=r(3),y=r(6),g=r(16),d=r(5)("isConcatSpreadable");t.exports=function flattenIntoArray(t,n,r,e,i,o,u,c){for(var f,a,s=i,l=0,h=!!u&&g(u,c,3);l<e;){if(l in r){if(f=h?h(r[l],l,n):r[l],a=!1,v(f)&&(a=(a=f[d])!==Jt?!!a:p(f)),a&&0<o)s=flattenIntoArray(t,n,f,y(f.length),s,o-1)-1;else{if(9007199254740991<=s)throw TypeError();t[s]=f}s++}l++}return s}},function(t,n,r){var s=r(6),l=r(70),h=r(24);t.exports=function(t,n,r,e){var i=String(h(t)),o=i.length,u=r===Jt?" ":String(r),c=s(n);if(c<=o||""==u)return i;var f=c-o,a=l.call(u,Math.ceil(f/u.length));return f<a.length&&(a=a.slice(0,f)),e?a+i:i+a}},function(t,n,r){var f=r(7),a=r(31),s=r(11),l=r(45).f;t.exports=function(c){return function(t){for(var n,r=s(t),e=a(r),i=e.length,o=0,u=[];o<i;)n=e[o++],f&&!l.call(r,n)||u.push(c?[n,r[n]]:r[n]);return u}}},function(t,n,r){var e=r(37),i=r(120);t.exports=function(t){return function toJSON(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,n,r){var e=r(34);t.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},function(t,n){t.exports=Math.scale||function scale(t,n,r,e,i){return 0===arguments.length||t!=t||n!=n||r!=r||e!=e||i!=i?NaN:t===Infinity||t===-Infinity?t:(t-n)*(i-e)/(r-n)+e}},function(t,n,r){var e=r(37),i=r(5)("iterator"),o=r(36);t.exports=r(12).isIterable=function(t){var n=Object(t);return n[i]!==Jt||"@@iterator"in n||o.hasOwnProperty(e(n))}},function(t,n,r){var e=r(124),a=r(69),s=r(10);t.exports=function(){for(var i=s(this),o=arguments.length,u=new Array(o),t=0,c=e._,f=!1;t<o;)(u[t]=arguments[t++])===c&&(f=!0);return function(){var t,n=arguments.length,r=0,e=0;if(!f&&!n)return a(i,u,this);if(t=u.slice(),f)for(;r<o;r++)t[r]===c&&(t[r]=arguments[e++]);for(;e<n;)t.push(arguments[e++]);return a(i,t,this)}}},function(t,n,r){t.exports=r(12)},function(t,n,r){var u=r(8),c=r(18),f=r(87),a=r(11);t.exports=function define(t,n){for(var r,e=f(a(n)),i=e.length,o=0;o<i;)u.f(t,r=e[o++],c.f(n,r));return t}},function(t,n,r){r(127),r(129),r(130),r(131),r(132),r(133),r(134),r(135),r(136),r(137),r(138),r(139),r(140),r(141),r(142),r(143),r(145),r(146),r(147),r(148),r(149),r(150),r(151),r(152),r(153),r(154),r(155),r(156),r(157),r(158),r(159),r(160),r(161),r(162),r(163),r(164),r(165),r(166),r(167),r(168),r(169),r(170),r(171),r(172),r(173),r(174),r(175),r(176),r(177),r(178),r(179),r(180),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(189),r(190),r(191),r(192),r(193),r(194),r(195),r(196),r(197),r(198),r(199),r(200),r(201),r(202),r(203),r(204),r(205),r(206),r(208),r(209),r(210),r(211),r(212),r(213),r(214),r(215),r(216),r(217),r(218),r(219),r(82),r(220),r(221),r(222),r(109),r(111),r(112),r(223),r(224),r(225),r(226),r(227),r(228),r(229),r(230),r(231),r(232),r(233),r(234),r(235),r(236),r(237),r(238),r(239),r(240),r(241),r(242),r(243),r(244),r(245),r(246),r(247),r(248),r(249),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(262),r(263),r(264),r(265),r(266),r(267),r(268),r(269),r(270),r(271),r(272),r(273),r(274),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(308),r(309),r(310),r(311),r(312),r(48),r(314),r(122),r(315),r(316),r(317),r(318),r(319),r(320),r(321),r(322),r(323),t.exports=r(324)},function(t,n,r){var e=r(2),u=r(15),i=r(7),o=r(0),c=r(63),f=r(29).KEY,a=r(4),s=r(49),l=r(42),h=r(41),p=r(5),v=r(91),y=r(64),g=r(128),d=r(52),_=r(1),b=r(3),S=r(9),m=r(11),w=r(27),x=r(28),O=r(32),P=r(94),M=r(18),E=r(51),F=r(8),I=r(31),k=M.f,A=F.f,j=P.f,N=e.Symbol,T=e.JSON,R=T&&T.stringify,D="prototype",L=p("_hidden"),C=p("toPrimitive"),U={}.propertyIsEnumerable,W=s("symbol-registry"),G=s("symbols"),V=s("op-symbols"),B=Object[D],q="function"==typeof N&&!!E.f,z=e.QObject,K=!z||!z[D]||!z[D].findChild,J=i&&a(function(){return 7!=O(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=k(B,n);e&&delete B[n],A(t,n,r),e&&t!==B&&A(B,n,e)}:A,H=function(t){var n=G[t]=O(N[D]);return n._k=t,n},Y=q&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},X=function defineProperty(t,n,r){return t===B&&X(V,n,r),_(t),n=w(n,!0),_(r),u(G,n)?(r.enumerable?(u(t,L)&&t[L][n]&&(t[L][n]=!1),r=O(r,{enumerable:x(0,!1)})):(u(t,L)||A(t,L,x(1,{})),t[L][n]=!0),J(t,n,r)):A(t,n,r)},$=function defineProperties(t,n){_(t);for(var r,e=g(n=m(n)),i=0,o=e.length;i<o;)X(t,r=e[i++],n[r]);return t},Z=function propertyIsEnumerable(t){var n=U.call(this,t=w(t,!0));return!(this===B&&u(G,t)&&!u(V,t))&&(!(n||!u(this,t)||!u(G,t)||u(this,L)&&this[L][t])||n)},Q=function getOwnPropertyDescriptor(t,n){if(t=m(t),n=w(n,!0),t!==B||!u(G,n)||u(V,n)){var r=k(t,n);return!r||!u(G,n)||u(t,L)&&t[L][n]||(r.enumerable=!0),r}},tt=function getOwnPropertyNames(t){for(var n,r=j(m(t)),e=[],i=0;i<r.length;)u(G,n=r[i++])||n==L||n==f||e.push(n);return e},nt=function getOwnPropertySymbols(t){for(var n,r=t===B,e=j(r?V:m(t)),i=[],o=0;o<e.length;)!u(G,n=e[o++])||r&&!u(B,n)||i.push(G[n]);return i};q||(c((N=function Symbol(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var n=h(0<arguments.length?arguments[0]:Jt),r=function(t){this===B&&r.call(V,t),u(this,L)&&u(this[L],n)&&(this[L][n]=!1),J(this,n,x(1,t))};return i&&K&&J(B,n,{configurable:!0,set:r}),H(n)})[D],"toString",function toString(){return this._k}),M.f=Q,F.f=X,r(46).f=P.f=tt,r(45).f=Z,E.f=nt,i&&!r(30)&&c(B,"propertyIsEnumerable",Z,!0),v.f=function(t){return H(p(t))}),o(o.G+o.W+o.F*!q,{Symbol:N});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;et<rt.length;)p(rt[et++]);for(var it=I(p.store),ot=0;ot<it.length;)y(it[ot++]);o(o.S+o.F*!q,"Symbol",{"for":function(t){return u(W,t+="")?W[t]:W[t]=N(t)},keyFor:function keyFor(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var n in W)if(W[n]===t)return n},useSetter:function(){K=!0},useSimple:function(){K=!1}}),o(o.S+o.F*!q,"Object",{create:function create(t,n){return n===Jt?O(t):$(O(t),n)},defineProperty:X,defineProperties:$,getOwnPropertyDescriptor:Q,getOwnPropertyNames:tt,getOwnPropertySymbols:nt});var ut=a(function(){E.f(1)});o(o.S+o.F*ut,"Object",{getOwnPropertySymbols:function getOwnPropertySymbols(t){return E.f(S(t))}}),T&&o(o.S+o.F*(!q||a(function(){var t=N();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))})),"JSON",{stringify:function stringify(t){for(var n,r,e=[t],i=1;i<arguments.length;)e.push(arguments[i++]);if(r=n=e[1],(b(n)||t!==Jt)&&!Y(t))return d(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!Y(n))return n}),e[1]=n,R.apply(T,e)}}),N[D][C]||r(17)(N[D],C,N[D].valueOf),l(N,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n,r){var c=r(31),f=r(51),a=r(45);t.exports=function(t){var n=c(t),r=f.f;if(r)for(var e,i=r(t),o=a.f,u=0;u<i.length;)o.call(t,e=i[u++])&&n.push(e);return n}},function(t,n,r){var e=r(0);e(e.S+e.F*!r(7),"Object",{defineProperty:r(8).f})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(7),"Object",{defineProperties:r(93)})},function(t,n,r){var e=r(11),i=r(18).f;r(23)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(t,n){return i(e(t),n)}})},function(t,n,r){var e=r(0);e(e.S,"Object",{create:r(32)})},function(t,n,r){var e=r(9),i=r(13);r(23)("getPrototypeOf",function(){return function getPrototypeOf(t){return i(e(t))}})},function(t,n,r){var e=r(9),i=r(31);r(23)("keys",function(){return function keys(t){return i(e(t))}})},function(t,n,r){r(23)("getOwnPropertyNames",function(){return r(94).f})},function(t,n,r){var e=r(3),i=r(29).onFreeze;r(23)("freeze",function(n){return function freeze(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(3),i=r(29).onFreeze;r(23)("seal",function(n){return function seal(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(3),i=r(29).onFreeze;r(23)("preventExtensions",function(n){return function preventExtensions(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(3);r(23)("isFrozen",function(n){return function isFrozen(t){return!e(t)||!!n&&n(t)}})},function(t,n,r){var e=r(3);r(23)("isSealed",function(n){return function isSealed(t){return!e(t)||!!n&&n(t)}})},function(t,n,r){var e=r(3);r(23)("isExtensible",function(n){return function isExtensible(t){return!!e(t)&&(!n||n(t))}})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{assign:r(68)})},function(t,n,r){var e=r(0);e(e.S,"Object",{is:r(144)})},function(t,n){t.exports=Object.is||function is(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,r){var e=r(0);e(e.S,"Object",{setPrototypeOf:r(95).set})},function(t,n,r){var e=r(0);e(e.P,"Function",{bind:r(96)})},function(t,n,r){var e=r(3),i=r(13),o=r(5)("hasInstance"),u=Function.prototype;o in u||r(8).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,r){var e=r(0),a=r(22),s=r(97),l=r(70),i=1..toFixed,o=Math.floor,u=[0,0,0,0,0,0],h="Number.toFixed: incorrect invocation!",p=function(t,n){for(var r=-1,e=n;++r<6;)u[r]=(e+=t*u[r])%1e7,e=o(e/1e7)},v=function(t){for(var n=6,r=0;0<=--n;)u[n]=o((r+=u[n])/t),r=r%t*1e7},y=function(){for(var t=6,n="";0<=--t;)if(""!==n||0===t||0!==u[t]){var r=String(u[t]);n=""===n?r:n+l.call("0",7-r.length)+r}return n},g=function(t,n,r){return 0===n?r:n%2==1?g(t,n-1,r*t):g(t*t,n/2,r)};e(e.P+e.F*(!!i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(4)(function(){i.call({})})),"Number",{toFixed:function toFixed(t){var n,r,e,i,o=s(this,h),u=a(t),c="",f="0";if(u<0||20<u)throw RangeError(h);if(o!=o)return"NaN";if(o<=-1e21||1e21<=o)return String(o);if(o<0&&(c="-",o=-o),1e-21<o)if(r=(n=function(t){for(var n=0,r=t;4096<=r;)n+=12,r/=4096;for(;2<=r;)n+=1,r/=2;return n}(o*g(2,69,1))-69)<0?o*g(2,-n,1):o/g(2,n,1),r*=4503599627370496,0<(n=52-n)){for(p(0,r),e=u;7<=e;)p(1e7,0),e-=7;for(p(g(10,e,1),0),e=n-1;23<=e;)v(1<<23),e-=23;v(1<<e),p(1,1),v(2),f=y()}else p(0,r),p(1<<-n,0),f=y()+l.call("0",u);return f=0<u?c+((i=f.length)<=u?"0."+l.call("0",u-i)+f:f.slice(0,i-u)+"."+f.slice(i-u)):c+f}})},function(t,n,r){var e=r(0),i=r(4),o=r(97),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,Jt)})||!i(function(){u.call({})})),"Number",{toPrecision:function toPrecision(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return t===Jt?u.call(n):u.call(n,t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,r){var e=r(0),i=r(2).isFinite;e(e.S,"Number",{isFinite:function isFinite(t){return"number"==typeof t&&i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isInteger:r(98)})},function(t,n,r){var e=r(0);e(e.S,"Number",{isNaN:function isNaN(t){return t!=t}})},function(t,n,r){var e=r(0),i=r(98),o=Math.abs;e(e.S,"Number",{isSafeInteger:function isSafeInteger(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,r){var e=r(0);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,r){var e=r(0);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,r){var e=r(0),i=r(99);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,r){var e=r(0),i=r(100);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,r){var e=r(0),i=r(100);e(e.G+e.F*(parseInt!=i),{parseInt:i})},function(t,n,r){var e=r(0),i=r(99);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},function(t,n,r){var e=r(0),i=r(101),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(Infinity)==Infinity),"Math",{acosh:function acosh(t){return(t=+t)<1?NaN:94906265.62425156<t?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,r){var e=r(0),i=Math.asinh;e(e.S+e.F*!(i&&0<1/i(0)),"Math",{asinh:function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}})},function(t,n,r){var e=r(0),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,r){var e=r(0),i=r(72);e(e.S,"Math",{cbrt:function cbrt(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,r){var e=r(0),i=Math.exp;e(e.S,"Math",{cosh:function cosh(t){return(i(t=+t)+i(-t))/2}})},function(t,n,r){var e=r(0),i=r(73);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,r){var e=r(0);e(e.S,"Math",{fround:r(102)})},function(t,n,r){var e=r(0),f=Math.abs;e(e.S,"Math",{hypot:function hypot(t,n){for(var r,e,i=0,o=0,u=arguments.length,c=0;o<u;)c<(r=f(arguments[o++]))?(i=i*(e=c/r)*e+1,c=r):i+=0<r?(e=r/c)*e:r;return c===Infinity?Infinity:c*Math.sqrt(i)}})},function(t,n,r){var e=r(0),i=Math.imul;e(e.S+e.F*r(4)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function imul(t,n){var r=65535,e=+t,i=+n,o=r&e,u=r&i;return 0|o*u+((r&e>>>16)*u+o*(r&i>>>16)<<16>>>0)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log10:function log10(t){return Math.log(t)*Math.LOG10E}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log1p:r(101)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log2:function log2(t){return Math.log(t)/Math.LN2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{sign:r(72)})},function(t,n,r){var e=r(0),i=r(73),o=Math.exp;e(e.S+e.F*r(4)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function sinh(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,r){var e=r(0),i=r(73),o=Math.exp;e(e.S,"Math",{tanh:function tanh(t){var n=i(t=+t),r=i(-t);return n==Infinity?1:r==Infinity?-1:(n-r)/(o(t)+o(-t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{trunc:function trunc(t){return(0<t?Math.floor:Math.ceil)(t)}})},function(t,n,r){var e=r(0),o=r(35),u=String.fromCharCode,i=String.fromCodePoint;e(e.S+e.F*(!!i&&1!=i.length),"String",{fromCodePoint:function fromCodePoint(t){for(var n,r=[],e=arguments.length,i=0;i<e;){if(n=+arguments[i++],o(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?u(n):u(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},function(t,n,r){var e=r(0),u=r(11),c=r(6);e(e.S,"String",{raw:function raw(t){for(var n=u(t.raw),r=c(n.length),e=arguments.length,i=[],o=0;o<r;)i.push(String(n[o++])),o<e&&i.push(String(arguments[o]));return i.join("")}})},function(t,n,r){r(47)("trim",function(t){return function trim(){return t(this,3)}})},function(t,n,r){var e=r(0),i=r(74)(!1);e(e.P,"String",{codePointAt:function codePointAt(t){return i(this,t)}})},function(t,n,r){var e=r(0),u=r(6),c=r(75),f="endsWith",a=""[f];e(e.P+e.F*r(76)(f),"String",{endsWith:function endsWith(t){var n=c(this,t,f),r=1<arguments.length?arguments[1]:Jt,e=u(n.length),i=r===Jt?e:Math.min(u(r),e),o=String(t);return a?a.call(n,o,i):n.slice(i-o.length,i)===o}})},function(t,n,r){var e=r(0),i=r(75),o="includes";e(e.P+e.F*r(76)(o),"String",{includes:function includes(t){return!!~i(this,t,o).indexOf(t,1<arguments.length?arguments[1]:Jt)}})},function(t,n,r){var e=r(0);e(e.P,"String",{repeat:r(70)})},function(t,n,r){var e=r(0),i=r(6),o=r(75),u="startsWith",c=""[u];e(e.P+e.F*r(76)(u),"String",{startsWith:function startsWith(t){var n=o(this,t,u),r=i(Math.min(1<arguments.length?arguments[1]:Jt,n.length)),e=String(t);return c?c.call(n,e,r):n.slice(r,r+e.length)===e}})},function(t,n,r){var e=r(74)(!0);r(53)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return n.length<=r?{value:Jt,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){r(14)("anchor",function(n){return function anchor(t){return n(this,"a","name",t)}})},function(t,n,r){r(14)("big",function(t){return function big(){return t(this,"big","","")}})},function(t,n,r){r(14)("blink",function(t){return function blink(){return t(this,"blink","","")}})},function(t,n,r){r(14)("bold",function(t){return function bold(){return t(this,"b","","")}})},function(t,n,r){r(14)("fixed",function(t){return function fixed(){return t(this,"tt","","")}})},function(t,n,r){r(14)("fontcolor",function(n){return function fontcolor(t){return n(this,"font","color",t)}})},function(t,n,r){r(14)("fontsize",function(n){return function fontsize(t){return n(this,"font","size",t)}})},function(t,n,r){r(14)("italics",function(t){return function italics(){return t(this,"i","","")}})},function(t,n,r){r(14)("link",function(n){return function link(t){return n(this,"a","href",t)}})},function(t,n,r){r(14)("small",function(t){return function small(){return t(this,"small","","")}})},function(t,n,r){r(14)("strike",function(t){return function strike(){return t(this,"strike","","")}})},function(t,n,r){r(14)("sub",function(t){return function sub(){return t(this,"sub","","")}})},function(t,n,r){r(14)("sup",function(t){return function sup(){return t(this,"sup","","")}})},function(t,n,r){var e=r(0);e(e.S,"Array",{isArray:r(52)})},function(t,n,r){var h=r(16),e=r(0),p=r(9),v=r(104),y=r(77),g=r(6),d=r(78),_=r(48);e(e.S+e.F*!r(79)(function(t){Array.from(t)}),"Array",{from:function from(t){var n,r,e,i,o=p(t),u="function"==typeof this?this:Array,c=arguments.length,f=1<c?arguments[1]:Jt,a=f!==Jt,s=0,l=_(o);if(a&&(f=h(f,2<c?arguments[2]:Jt,2)),l==Jt||u==Array&&y(l))for(r=new u(n=g(o.length));s<n;s++)d(r,s,a?f(o[s],s):o[s]);else for(i=l.call(o),r=new u;!(e=i.next()).done;s++)d(r,s,a?v(i,f,[e.value,s],!0):e.value);return r.length=s,r}})},function(t,n,r){var e=r(0),i=r(78);e(e.S+e.F*r(4)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);t<n;)i(r,t,arguments[t++]);return r.length=n,r}})},function(t,n,r){var e=r(0),i=r(11),o=[].join;e(e.P+e.F*(r(44)!=Object||!r(19)(o)),"Array",{join:function join(t){return o.call(i(this),t===Jt?",":t)}})},function(t,n,r){var e=r(0),i=r(67),a=r(21),s=r(35),l=r(6),h=[].slice;e(e.P+e.F*r(4)(function(){i&&h.call(i)}),"Array",{slice:function slice(t,n){var r=l(this.length),e=a(this);if(n=n===Jt?r:n,"Array"==e)return h.call(this,t,n);for(var i=s(t,r),o=s(n,r),u=l(o-i),c=new Array(u),f=0;f<u;f++)c[f]="String"==e?this.charAt(i+f):this[i+f];return c}})},function(t,n,r){var e=r(0),i=r(10),o=r(9),u=r(4),c=[].sort,f=[1,2,3];e(e.P+e.F*(u(function(){f.sort(Jt)})||!u(function(){f.sort(null)})||!r(19)(c)),"Array",{sort:function sort(t){return t===Jt?c.call(o(this)):c.call(o(this),i(t))}})},function(t,n,r){var e=r(0),i=r(20)(0),o=r(19)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function forEach(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(3),i=r(52),o=r(5)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=Jt),e(n)&&null===(n=n[o])&&(n=Jt)),n===Jt?Array:n}},function(t,n,r){var e=r(0),i=r(20)(1);e(e.P+e.F*!r(19)([].map,!0),"Array",{map:function map(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(20)(2);e(e.P+e.F*!r(19)([].filter,!0),"Array",{filter:function filter(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(20)(3);e(e.P+e.F*!r(19)([].some,!0),"Array",{some:function some(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(20)(4);e(e.P+e.F*!r(19)([].every,!0),"Array",{every:function every(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(105);e(e.P+e.F*!r(19)([].reduce,!0),"Array",{reduce:function reduce(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,r){var e=r(0),i=r(105);e(e.P+e.F*!r(19)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,r){var e=r(0),i=r(50)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!r(19)(o)),"Array",{indexOf:function indexOf(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(11),o=r(22),u=r(6),c=[].lastIndexOf,f=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(f||!r(19)(c)),"Array",{lastIndexOf:function lastIndexOf(t){if(f)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(1<arguments.length&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);0<=e;e--)if(e in n&&n[e]===t)return e||0;return-1}})},function(t,n,r){var e=r(0);e(e.P,"Array",{copyWithin:r(106)}),r(33)("copyWithin")},function(t,n,r){var e=r(0);e(e.P,"Array",{fill:r(81)}),r(33)("fill")},function(t,n,r){var e=r(0),i=r(20)(5),o="find",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{find:function find(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(33)(o)},function(t,n,r){var e=r(0),i=r(20)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function findIndex(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(33)(o)},function(t,n,r){r(43)("Array")},function(t,n){},function(t,n,e){var r,i,o,u,c=e(30),f=e(2),a=e(16),s=e(37),l=e(0),h=e(3),p=e(10),v=e(38),y=e(34),g=e(55),d=e(84).set,_=e(85)(),b=e(86),S=e(107),m=e(56),w=e(108),x="Promise",O=f.TypeError,P=f.process,M=P&&P.versions,E=M&&M.v8||"",F=f[x],I="process"==s(P),k=function(){},A=i=b.f,j=!!function(){try{var t=F.resolve(1),n=(t.constructor={})[e(5)("species")]=function(t){t(k,k)};return(I||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof n&&0!==E.indexOf("6.6")&&-1===m.indexOf("Chrome/66")}catch(r){}}(),N=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},T=function(l,r){if(!l._n){l._n=!0;var e=l._c;_(function(){for(var a=l._v,s=1==l._s,t=0,n=function(t){var n,r,e,i=s?t.ok:t.fail,o=t.resolve,u=t.reject,c=t.domain;try{i?(s||(2==l._h&&L(l),l._h=1),!0===i?n=a:(c&&c.enter(),n=i(a),c&&(c.exit(),e=!0)),n===t.promise?u(O("Promise-chain cycle")):(r=N(n))?r.call(n,o,u):o(n)):u(a)}catch(f){c&&!e&&c.exit(),u(f)}};t<e.length;)n(e[t++]);l._c=[],l._n=!1,r&&!l._h&&R(l)})}},R=function(o){d.call(f,function(){var t,n,r,e=o._v,i=D(o);if(i&&(t=S(function(){I?P.emit("unhandledRejection",e,o):(n=f.onunhandledrejection)?n({promise:o,reason:e}):(r=f.console)&&r.error&&r.error("Unhandled promise rejection",e)}),o._h=I||D(o)?2:1),o._a=Jt,i&&t.e)throw t.v})},D=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(n){d.call(f,function(){var t;I?P.emit("rejectionHandled",n):(t=f.onrejectionhandled)&&t({promise:n,reason:n._v})})},C=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),T(n,!0))},U=function(r){var e,i=this;if(!i._d){i._d=!0,i=i._w||i;try{if(i===r)throw O("Promise can't be resolved itself");(e=N(r))?_(function(){var t={_w:i,_d:!1};try{e.call(r,a(U,t,1),a(C,t,1))}catch(n){C.call(t,n)}}):(i._v=r,i._s=1,T(i,!1))}catch(t){C.call({_w:i,_d:!1},t)}}};j||(F=function Promise(t){v(this,F,x,"_h"),p(t),r.call(this);try{t(a(U,this,1),a(C,this,1))}catch(n){C.call(this,n)}},(r=function Promise(t){this._c=[],this._a=Jt,this._s=0,this._d=!1,this._v=Jt,this._h=0,this._n=!1}).prototype=e(39)(F.prototype,{then:function then(t,n){var r=A(g(this,F));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=I?P.domain:Jt,this._c.push(r),this._a&&this._a.push(r),this._s&&T(this,!1),r.promise},"catch":function(t){return this.then(Jt,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=a(U,t,1),this.reject=a(C,t,1)},b.f=A=function(t){return t===F||t===u?new o(t):i(t)}),l(l.G+l.W+l.F*!j,{Promise:F}),e(42)(F,x),e(43)(x),u=e(12)[x],l(l.S+l.F*!j,x,{reject:function reject(t){var n=A(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!j),x,{resolve:function resolve(t){return w(c&&this===u?F:this,t)}}),l(l.S+l.F*!(j&&e(79)(function(t){F.all(t)["catch"](k)})),x,{all:function all(t){var u=this,n=A(u),c=n.resolve,f=n.reject,r=S(function(){var e=[],i=0,o=1;y(t,!1,function(t){var n=i++,r=!1;e.push(Jt),o++,u.resolve(t).then(function(t){r||(r=!0,e[n]=t,--o||c(e))},f)}),--o||c(e)});return r.e&&f(r.v),n.promise},race:function race(t){var n=this,r=A(n),e=r.reject,i=S(function(){y(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}})},function(t,n,r){var e=r(113),i=r(40),o="WeakSet";r(57)(o,function(t){return function WeakSet(){return t(this,0<arguments.length?arguments[0]:Jt)}},{add:function add(t){return e.def(i(this,o),t,!0)}},e,!1,!0)},function(t,n,r){var e=r(0),o=r(10),u=r(1),c=(r(2).Reflect||{}).apply,f=Function.apply;e(e.S+e.F*!r(4)(function(){c(function(){})}),"Reflect",{apply:function apply(t,n,r){var e=o(t),i=u(r);return c?c(e,n,i):f.call(e,n,i)}})},function(t,n,r){var e=r(0),c=r(32),f=r(10),a=r(1),s=r(3),i=r(4),l=r(96),h=(r(2).Reflect||{}).construct,p=i(function(){function F(){}return!(h(function(){},[],F)instanceof F)}),v=!i(function(){h(function(){})});e(e.S+e.F*(p||v),"Reflect",{construct:function construct(t,n){f(t),a(n);var r=arguments.length<3?t:f(arguments[2]);if(v&&!p)return h(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(l.apply(t,e))}var i=r.prototype,o=c(s(i)?i:Object.prototype),u=Function.apply.call(t,o,n);return s(u)?u:o}})},function(t,n,r){var i=r(8),e=r(0),o=r(1),u=r(27);e(e.S+e.F*r(4)(function(){Reflect.defineProperty(i.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(t,n,r){o(t),n=u(n,!0),o(r);try{return i.f(t,n,r),!0}catch(e){return!1}}})},function(t,n,r){var e=r(0),i=r(18).f,o=r(1);e(e.S,"Reflect",{deleteProperty:function deleteProperty(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},function(t,n,r){var e=r(0),i=r(1),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};r(54)(o,"Object",function(){var t,n=this._k;do{if(n.length<=this._i)return{value:Jt,done:!0}}while(!((t=n[this._i++])in this._t));return{
value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function enumerate(t){return new o(t)}})},function(t,n,r){var o=r(18),u=r(13),c=r(15),e=r(0),f=r(3),a=r(1);e(e.S,"Reflect",{get:function get(t,n){var r,e,i=arguments.length<3?t:arguments[2];return a(t)===i?t[n]:(r=o.f(t,n))?c(r,"value")?r.value:r.get!==Jt?r.get.call(i):Jt:f(e=u(t))?get(e,n,i):void 0}})},function(t,n,r){var e=r(18),i=r(0),o=r(1);i(i.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,n){return e.f(o(t),n)}})},function(t,n,r){var e=r(0),i=r(13),o=r(1);e(e.S,"Reflect",{getPrototypeOf:function getPrototypeOf(t){return i(o(t))}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{has:function has(t,n){return n in t}})},function(t,n,r){var e=r(0),i=r(1),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function isExtensible(t){return i(t),!o||o(t)}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{ownKeys:r(87)})},function(t,n,r){var e=r(0),i=r(1),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function preventExtensions(t){i(t);try{return o&&o(t),!0}catch(n){return!1}}})},function(t,n,r){var c=r(8),f=r(18),a=r(13),s=r(15),e=r(0),l=r(28),h=r(1),p=r(3);e(e.S,"Reflect",{set:function set(t,n,r){var e,i,o=arguments.length<4?t:arguments[3],u=f.f(h(t),n);if(!u){if(p(i=a(t)))return set(i,n,r,o);u=l(0)}if(s(u,"value")){if(!1===u.writable||!p(o))return!1;if(e=f.f(o,n)){if(e.get||e.set||!1===e.writable)return!1;e.value=r,c.f(o,n,e)}else c.f(o,n,l(0,r));return!0}return u.set!==Jt&&(u.set.call(o,r),!0)}})},function(t,n,r){var e=r(0),i=r(95);i&&e(e.S,"Reflect",{setPrototypeOf:function setPrototypeOf(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(r){return!1}}})},function(t,n,r){var e=r(0);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,r){var e=r(0),i=r(9),o=r(27),u=r(114),c=r(37);e(e.P+e.F*r(4)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?"toISOString"in n||"Date"!=c(n)?n.toISOString():u.call(n):null}})},function(t,n,r){var e=r(0),i=r(114);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,r){var e=r(0),i=r(58),o=r(88),a=r(1),s=r(35),l=r(6),u=r(3),c=r(2).ArrayBuffer,h=r(55),p=o.ArrayBuffer,v=o.DataView,f=i.ABV&&c.isView,y=p.prototype.slice,g=i.VIEW,d="ArrayBuffer";e(e.G+e.W+e.F*(c!==p),{ArrayBuffer:p}),e(e.S+e.F*!i.CONSTR,d,{isView:function isView(t){return f&&f(t)||u(t)&&g in t}}),e(e.P+e.U+e.F*r(4)(function(){return!new p(2).slice(1,Jt).byteLength}),d,{slice:function slice(t,n){if(y!==Jt&&n===Jt)return y.call(a(this),t);for(var r=a(this).byteLength,e=s(t,r),i=s(n===Jt?r:n,r),o=new(h(this,p))(l(i-e)),u=new v(this),c=new v(o),f=0;e<i;)c.setUint8(f++,u.getUint8(e++));return o}}),r(43)(d)},function(t,n,r){var e=r(0);e(e.G+e.W+e.F*!r(58).ABV,{DataView:r(88).DataView})},function(t,n,r){r(25)("Int8",1,function(e){return function Int8Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(25)("Uint8",1,function(e){return function Uint8Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(25)("Uint8",1,function(e){return function Uint8ClampedArray(t,n,r){return e(this,t,n,r)}},!0)},function(t,n,r){r(25)("Int16",2,function(e){return function Int16Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(25)("Uint16",2,function(e){return function Uint16Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(25)("Int32",4,function(e){return function Int32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(25)("Uint32",4,function(e){return function Uint32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(25)("Float32",4,function(e){return function Float32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(25)("Float64",8,function(e){return function Float64Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){var e=r(0),i=r(50)(!0);e(e.P,"Array",{includes:function includes(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(33)("includes")},function(t,n,r){var e=r(0),i=r(116),o=r(9),u=r(6),c=r(10),f=r(80);e(e.P,"Array",{flatMap:function flatMap(t){var n,r,e=o(this);return c(t),n=u(e.length),r=f(e,0),i(r,e,e,n,0,1,t,arguments[1]),r}}),r(33)("flatMap")},function(t,n,r){var e=r(0),i=r(116),o=r(9),u=r(6),c=r(22),f=r(80);e(e.P,"Array",{flatten:function flatten(){var t=arguments[0],n=o(this),r=u(n.length),e=f(n,0);return i(e,n,n,r,0,t===Jt?1:c(t)),e}}),r(33)("flatten")},function(t,n,r){var e=r(0),i=r(74)(!0);e(e.P,"String",{at:function at(t){return i(this,t)}})},function(t,n,r){var e=r(0),i=r(117),o=r(56),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);e(e.P+e.F*u,"String",{padStart:function padStart(t){return i(this,t,1<arguments.length?arguments[1]:Jt,!0)}})},function(t,n,r){var e=r(0),i=r(117),o=r(56),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);e(e.P+e.F*u,"String",{padEnd:function padEnd(t){return i(this,t,1<arguments.length?arguments[1]:Jt,!1)}})},function(t,n,r){r(47)("trimLeft",function(t){return function trimLeft(){return t(this,1)}},"trimStart")},function(t,n,r){r(47)("trimRight",function(t){return function trimRight(){return t(this,2)}},"trimEnd")},function(t,n,r){var e=r(0),i=r(24),o=r(6),u=r(103),c=r(261),f=RegExp.prototype,a=function(t,n){this._r=t,this._s=n};r(54)(a,"RegExp String",function next(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function matchAll(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in f?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new a(e,n)}})},function(t,n,r){var e=r(1);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){r(64)("asyncIterator")},function(t,n,r){r(64)("observable")},function(t,n,r){var e=r(0),f=r(87),a=r(11),s=r(18),l=r(78);e(e.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var n,r,e=a(t),i=s.f,o=f(e),u={},c=0;c<o.length;)(r=i(e,n=o[c++]))!==Jt&&l(u,n,r);return u}})},function(t,n,r){var e=r(0),i=r(118)(!1);e(e.S,"Object",{values:function values(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(118)(!0);e(e.S,"Object",{entries:function entries(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(9),o=r(10),u=r(8);r(7)&&e(e.P+r(59),"Object",{__defineGetter__:function __defineGetter__(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(9),o=r(10),u=r(8);r(7)&&e(e.P+r(59),"Object",{__defineSetter__:function __defineSetter__(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(9),o=r(27),u=r(13),c=r(18).f;r(7)&&e(e.P+r(59),"Object",{__lookupGetter__:function __lookupGetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.get}while(r=u(r))}})},function(t,n,r){var e=r(0),i=r(9),o=r(27),u=r(13),c=r(18).f;r(7)&&e(e.P+r(59),"Object",{__lookupSetter__:function __lookupSetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.set}while(r=u(r))}})},function(t,n,r){var e=r(0);e(e.P+e.R,"Map",{toJSON:r(119)("Map")})},function(t,n,r){var e=r(0);e(e.P+e.R,"Set",{toJSON:r(119)("Set")})},function(t,n,r){r(60)("Map")},function(t,n,r){r(60)("Set")},function(t,n,r){r(60)("WeakMap")},function(t,n,r){r(60)("WeakSet")},function(t,n,r){r(61)("Map")},function(t,n,r){r(61)("Set")},function(t,n,r){r(61)("WeakMap")},function(t,n,r){r(61)("WeakSet")},function(t,n,r){var e=r(0);e(e.G,{global:r(2)})},function(t,n,r){var e=r(0);e(e.S,"System",{global:r(2)})},function(t,n,r){var e=r(0),i=r(21);e(e.S,"Error",{isError:function isError(t){return"Error"===i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clamp:function clamp(t,n,r){return Math.min(r,Math.max(n,t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,n,r){var e=r(0),i=180/Math.PI;e(e.S,"Math",{degrees:function degrees(t){return t*i}})},function(t,n,r){var e=r(0),o=r(121),u=r(102);e(e.S,"Math",{fscale:function fscale(t,n,r,e,i){return u(o(t,n,r,e,i))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{iaddh:function iaddh(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)+(e>>>0)+((i&o|(i|o)&~(i+o>>>0))>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{isubh:function isubh(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)-(e>>>0)-((~i&o|~(i^o)&i-o>>>0)>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{imulh:function imulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>16,c=e>>16,f=(u*o>>>0)+(i*o>>>16);return u*c+(f>>16)+((i*c>>>0)+(65535&f)>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,n,r){var e=r(0),i=Math.PI/180;e(e.S,"Math",{radians:function radians(t){return t*i}})},function(t,n,r){var e=r(0);e(e.S,"Math",{scale:r(121)})},function(t,n,r){var e=r(0);e(e.S,"Math",{umulh:function umulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>>16,c=e>>>16,f=(u*o>>>0)+(i*o>>>16);return u*c+(f>>>16)+((i*c>>>0)+(65535&f)>>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{signbit:function signbit(t){return(t=+t)!=t?t:0==t?1/t==Infinity:0<t}})},function(t,n,r){var e=r(0),i=r(12),o=r(2),u=r(55),c=r(108);e(e.P+e.R,"Promise",{"finally":function(n){var r=u(this,i.Promise||o.Promise),t="function"==typeof n;return this.then(t?function(t){return c(r,n()).then(function(){return t})}:n,t?function(t){return c(r,n()).then(function(){throw t})}:n)}})},function(t,n,r){var e=r(0),i=r(86),o=r(107);e(e.S,"Promise",{"try":function(t){var n=i.f(this),r=o(t);return(r.e?n.reject:n.resolve)(r.v),n.promise}})},function(t,n,r){var e=r(26),i=r(1),o=e.key,u=e.set;e.exp({defineMetadata:function defineMetadata(t,n,r,e){u(t,n,i(r),o(e))}})},function(t,n,r){var e=r(26),o=r(1),u=e.key,c=e.map,f=e.store;e.exp({deleteMetadata:function deleteMetadata(t,n){var r=arguments.length<3?Jt:u(arguments[2]),e=c(o(n),r,!1);if(e===Jt||!e["delete"](t))return!1;if(e.size)return!0;var i=f.get(n);return i["delete"](r),!!i.size||f["delete"](n)}})},function(t,n,r){var e=r(26),i=r(1),o=r(13),u=e.has,c=e.get,f=e.key,a=function(t,n,r){if(u(t,n,r))return c(t,n,r);var e=o(n);return null!==e?a(t,e,r):Jt};e.exp({getMetadata:function getMetadata(t,n){return a(t,i(n),arguments.length<3?Jt:f(arguments[2]))}})},function(t,n,r){var o=r(111),u=r(120),e=r(26),i=r(1),c=r(13),f=e.keys,a=e.key,s=function(t,n){var r=f(t,n),e=c(t);if(null===e)return r;var i=s(e,n);return i.length?r.length?u(new o(r.concat(i))):i:r};e.exp({getMetadataKeys:function getMetadataKeys(t){return s(i(t),arguments.length<2?Jt:a(arguments[1]))}})},function(t,n,r){var e=r(26),i=r(1),o=e.get,u=e.key;e.exp({getOwnMetadata:function getOwnMetadata(t,n){return o(t,i(n),arguments.length<3?Jt:u(arguments[2]))}})},function(t,n,r){var e=r(26),i=r(1),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function getOwnMetadataKeys(t){return o(i(t),arguments.length<2?Jt:u(arguments[1]))}})},function(t,n,r){var e=r(26),i=r(1),o=r(13),u=e.has,c=e.key,f=function(t,n,r){if(u(t,n,r))return!0;var e=o(n);return null!==e&&f(t,e,r)};e.exp({hasMetadata:function hasMetadata(t,n){return f(t,i(n),arguments.length<3?Jt:c(arguments[2]))}})},function(t,n,r){var e=r(26),i=r(1),o=e.has,u=e.key;e.exp({hasOwnMetadata:function hasOwnMetadata(t,n){return o(t,i(n),arguments.length<3?Jt:u(arguments[2]))}})},function(t,n,r){var e=r(26),i=r(1),o=r(10),u=e.key,c=e.set;e.exp({metadata:function metadata(r,e){return function decorator(t,n){c(r,e,(n!==Jt?i:o)(t),u(n))}}})},function(t,n,r){var e=r(0),i=r(85)(),o=r(2).process,u="process"==r(21)(o);e(e.G,{asap:function asap(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},function(t,n,r){var e=r(0),o=r(2),u=r(12),i=r(85)(),c=r(5)("observable"),f=r(10),a=r(1),s=r(38),l=r(39),h=r(17),p=r(34),v=p.RETURN,y=function(t){return null==t?Jt:f(t)},g=function(t){var n=t._c;n&&(t._c=Jt,n())},d=function(t){return t._o===Jt},_=function(t){d(t)||(t._o=Jt,g(t))},b=function(t,n){a(t),this._c=Jt,this._o=t,t=new S(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:f(r),this._c=r)}catch(i){return void t.error(i)}d(this)&&g(this)};b.prototype=l({},{unsubscribe:function unsubscribe(){_(this)}});var S=function(t){this._s=t};S.prototype=l({},{next:function next(t){var n=this._s;if(!d(n)){var r=n._o;try{var e=y(r.next);if(e)return e.call(r,t)}catch(i){try{_(n)}finally{throw i}}}},error:function error(t){var n=this._s;if(d(n))throw t;var r=n._o;n._o=Jt;try{var e=y(r.error);if(!e)throw t;t=e.call(r,t)}catch(i){try{g(n)}finally{throw i}}return g(n),t},complete:function complete(t){var n=this._s;if(!d(n)){var r=n._o;n._o=Jt;try{var e=y(r.complete);t=e?e.call(r,t):Jt}catch(i){try{g(n)}finally{throw i}}return g(n),t}}});var m=function Observable(t){s(this,m,"Observable","_f")._f=f(t)};l(m.prototype,{subscribe:function subscribe(t){return new b(t,this._f)},forEach:function forEach(i){var n=this;return new(u.Promise||o.Promise)(function(t,r){f(i);var e=n.subscribe({next:function(t){try{return i(t)}catch(n){r(n),e.unsubscribe()}},error:r,complete:t})})}}),l(m,{from:function from(e){var t="function"==typeof this?this:m,n=y(a(e)[c]);if(n){var r=a(n.call(e));return r.constructor===t?r:new t(function(t){return r.subscribe(t)})}return new t(function(n){var r=!1;return i(function(){if(!r){try{if(p(e,!1,function(t){if(n.next(t),r)return v})===v)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function of(){for(var t=0,n=arguments.length,e=new Array(n);t<n;)e[t]=arguments[t++];return new("function"==typeof this?this:m)(function(n){var r=!1;return i(function(){if(!r){for(var t=0;t<e.length;++t)if(n.next(e[t]),r)return;n.complete()}}),function(){r=!0}})}}),h(m.prototype,c,function(){return this}),e(e.G,{Observable:m}),r(43)("Observable")},function(t,n,r){var e=r(0),i=r(84);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,r){r(82);for(var e=r(2),i=r(17),o=r(36),u=r(5)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),f=0;f<c.length;f++){var a=c[f],s=e[a],l=s&&s.prototype;l&&!l[u]&&i(l,u,a),o[a]=o.Array}},function(t,n,r){var e=r(2),i=r(0),o=r(56),u=[].slice,c=/MSIE .\./.test(o),f=function(i){return function(t,n){var r=2<arguments.length,e=!!r&&u.call(arguments,2);return i(r?function(){("function"==typeof t?t:Function(t)).apply(this,e)}:t,n)}};i(i.G+i.B+i.F*c,{setTimeout:f(e.setTimeout),setInterval:f(e.setInterval)})},function(t,n,r){var h=r(16),e=r(0),i=r(28),o=r(68),u=r(32),c=r(13),a=r(31),f=r(8),s=r(313),l=r(10),p=r(34),v=r(122),y=r(54),g=r(83),d=r(3),_=r(11),b=r(7),S=r(15),m=function(a){var s=1==a,l=4==a;return function(t,n,r){var e,i,o,u=h(n,r,3),c=_(t),f=s||7==a||2==a?new("function"==typeof this?this:Dict):Jt;for(e in c)if(S(c,e)&&(o=u(i=c[e],e,t),a))if(s)f[e]=o;else if(o)switch(a){case 2:f[e]=i;break;case 3:return!0;case 5:return i;case 6:return e;case 7:f[o[0]]=o[1]}else if(l)return!1;return 3==a||l?l:f}},w=m(6),x=function(n){return function(t){return new O(t,n)}},O=function(t,n){this._t=_(t),this._a=a(t),this._i=0,this._k=n};function Dict(t){var r=u(null);return t!=Jt&&(v(t)?p(t,!0,function(t,n){r[t]=n}):o(r,t)),r}y(O,"Dict",function(){var t,n=this,r=n._t,e=n._a,i=n._k;do{if(e.length<=n._i)return n._t=Jt,g(1)}while(!S(r,t=e[n._i++]));return g(0,"keys"==i?t:"values"==i?r[t]:[t,r[t]])}),Dict.prototype=null,e(e.G+e.F,{Dict:Dict}),e(e.S,"Dict",{keys:x("keys"),values:x("values"),entries:x("entries"),forEach:m(0),map:m(1),filter:m(2),some:m(3),every:m(4),find:m(5),findKey:w,mapPairs:m(7),reduce:function reduce(t,n,r){l(n);var e,i,o=_(t),u=a(o),c=u.length,f=0;if(arguments.length<3){if(!c)throw TypeError("Reduce of empty object with no initial value");e=o[u[f++]]}else e=Object(r);for(;f<c;)S(o,i=u[f++])&&(e=n(e,o[i],i,t));return e},keyOf:s,includes:function includes(t,n){return(n==n?s(t,n):w(t,function(t){return t!=t}))!==Jt},has:S,get:function get(t,n){if(S(t,n))return t[n]},set:function set(t,n,r){return b&&n in Object?f.f(t,n,i(0,r)):t[n]=r,t},isDict:function isDict(t){return d(t)&&c(t)===Dict.prototype}})},function(t,n,r){var c=r(31),f=r(11);t.exports=function(t,n){for(var r,e=f(t),i=c(e),o=i.length,u=0;u<o;)if(e[r=i[u++]]===n)return r}},function(t,n,r){var e=r(1),i=r(48);t.exports=r(12).getIterator=function(t){var n=i(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return e(n.call(t))}},function(t,n,r){var e=r(2),i=r(12),o=r(0),u=r(123);o(o.G+o.F,{delay:function delay(n){return new(i.Promise||e.Promise)(function(t){setTimeout(u.call(t,!0),n)})}})},function(t,n,r){var e=r(124),i=r(0);r(12)._=e._=e._||{},i(i.P+i.F,"Function",{part:r(123)})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{isObject:r(3)})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{classof:r(37)})},function(t,n,r){var e=r(0),i=r(125);e(e.S+e.F,"Object",{define:i})},function(t,n,r){var e=r(0),i=r(125),o=r(32);e(e.S+e.F,"Object",{make:function(t,n){return i(o(t),n)}})},function(t,n,r){r(53)(Number,"Number",function(t){this._l=+t,this._i=0},function(){var t=this._i++,n=!(t<this._l);return{done:n,value:n?Jt:t}})},function(t,n,r){var e=r(0),i=r(89)(/[\\^$*+?.()|[\]{}]/g,"\\$&");e(e.S,"RegExp",{escape:function escape(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(89)(/[&<>"']/g,{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"});e(e.P+e.F,"String",{escapeHTML:function escapeHTML(){return i(this)}})},function(t,n,r){var e=r(0),i=r(89)(/&(?:amp|lt|gt|quot|apos);/g,{"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'"});e(e.P+e.F,"String",{unescapeHTML:function unescapeHTML(){return i(this)}})}]),"undefined"!=typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):i.core=e}(1,1);
//# sourceMappingURL=library.min.js.map
/**
 * core-js 2.6.11
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2019 Denis Pushkarev
 */
!function(e,i,Jt){"use strict";!function(r){var e={};function __webpack_require__(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=r,__webpack_require__.c=e,__webpack_require__.d=function(t,n,r){__webpack_require__.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(t){var n=t&&t.__esModule?function getDefault(){return t["default"]}:function getModuleExports(){return t};return __webpack_require__.d(n,"a",n),n},__webpack_require__.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=129)}([function(t,n,r){var v=r(2),g=r(26),y=r(11),d=r(12),b=r(18),S="prototype",_=function(t,n,r){var e,i,o,u,c=t&_.F,a=t&_.G,f=t&_.P,s=t&_.B,l=a?v:t&_.S?v[n]||(v[n]={}):(v[n]||{})[S],h=a?g:g[n]||(g[n]={}),p=h[S]||(h[S]={});for(e in a&&(r=n),r)o=((i=!c&&l&&l[e]!==Jt)?l:r)[e],u=s&&i?b(o,v):f&&"function"==typeof o?b(Function.call,o):o,l&&d(l,e,o,t&_.U),h[e]!=o&&y(h,e,u),f&&p[e]!=o&&(p[e]=o)};v.core=g,_.F=1,_.G=2,_.S=4,_.P=8,_.B=16,_.W=32,_.U=64,_.R=128,t.exports=_},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof i&&(i=r)},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(47)("wks"),i=r(33),o=r(2).Symbol,u="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},function(t,n,r){var e=r(20),i=Math.min;t.exports=function(t){return 0<t?i(e(t),9007199254740991):0}},function(t,n,r){t.exports=!r(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var i=r(1),o=r(93),u=r(22),c=Object.defineProperty;n.f=r(7)?Object.defineProperty:function defineProperty(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(23);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(8),i=r(32);t.exports=r(7)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var o=r(2),u=r(11),c=r(14),a=r(33)("src"),e=r(131),i="toString",f=(""+e).split(i);r(26).inspectSource=function(t){return e.call(t)},(t.exports=function(t,n,r,e){var i="function"==typeof r;i&&(c(r,"name")||u(r,"name",n)),t[n]!==r&&(i&&(c(r,a)||u(r,a,t[n]?""+t[n]:f.join(String(n)))),t===o?t[n]=r:e?t[n]?t[n]=r:u(t,n,r):(delete t[n],u(t,n,r)))})(Function.prototype,i,function toString(){return"function"==typeof this&&this[a]||e.call(this)})},function(t,n,r){var e=r(0),i=r(3),u=r(23),c=/"/g,o=function(t,n,r,e){var i=String(u(t)),o="<"+n;return""!==r&&(o+=" "+r+'="'+String(e).replace(c,"&quot;")+'"'),o+">"+i+"</"+n+">"};t.exports=function(n,t){var r={};r[n]=t(o),e(e.P+e.F*i(function(){var t=""[n]('"');return t!==t.toLowerCase()||3<t.split('"').length}),"String",r)}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(48),i=r(23);t.exports=function(t){return e(i(t))}},function(t,n,r){var e=r(49),i=r(32),o=r(15),u=r(22),c=r(14),a=r(93),f=Object.getOwnPropertyDescriptor;n.f=r(7)?f:function getOwnPropertyDescriptor(t,n){if(t=o(t),n=u(n,!0),a)try{return f(t,n)}catch(r){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},function(t,n,r){var e=r(14),i=r(9),o=r(68)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var o=r(10);t.exports=function(e,i,t){if(o(e),i===Jt)return e;switch(t){case 1:return function(t){return e.call(i,t)};case 2:return function(t,n){return e.call(i,t,n)};case 3:return function(t,n,r){return e.call(i,t,n,r)}}return function(){return e.apply(i,arguments)}}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?e:r)(t)}},function(t,n,r){var e=r(3);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n,r){var i=r(4);t.exports=function(t,n){if(!i(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!i(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!i(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!i(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if(t==Jt)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var i=r(0),o=r(26),u=r(3);t.exports=function(t,n){var r=(o.Object||{})[t]||Object[t],e={};e[t]=n(r),i(i.S+i.F*u(function(){r(1)}),"Object",e)}},function(t,n,r){var S=r(18),_=r(48),x=r(9),m=r(6),e=r(84);t.exports=function(l,t){var h=1==l,p=2==l,v=3==l,g=4==l,y=6==l,d=5==l||y,b=t||e;return function(t,n,r){for(var e,i,o=x(t),u=_(o),c=S(n,r,3),a=m(u.length),f=0,s=h?b(t,a):p?b(t,0):Jt;f<a;f++)if((d||f in u)&&(i=c(e=u[f],f,o),l))if(h)s[f]=i;else if(i)switch(l){case 3:return!0;case 5:return e;case 6:return f;case 2:s.push(e)}else if(g)return!1;return y?-1:v||g?g:s}}},function(t,n){var r=t.exports={version:"2.6.11"};"number"==typeof e&&(e=r)},function(t,n,r){if(r(7)){var y=r(29),d=r(2),b=r(3),S=r(0),_=r(62),e=r(92),h=r(18),x=r(39),i=r(32),m=r(11),o=r(41),u=r(20),w=r(6),E=r(122),c=r(35),a=r(22),f=r(14),O=r(44),M=r(4),p=r(9),v=r(81),I=r(36),P=r(17),F=r(37).f,g=r(83),s=r(33),l=r(5),A=r(25),k=r(52),N=r(51),j=r(86),R=r(46),T=r(57),L=r(38),D=r(85),C=r(110),U=r(8),W=r(16),G=U.f,V=W.f,B=d.RangeError,z=d.TypeError,q=d.Uint8Array,K="ArrayBuffer",J="Shared"+K,Y="BYTES_PER_ELEMENT",$="prototype",X=Array[$],H=e.ArrayBuffer,Z=e.DataView,Q=A(0),tt=A(2),nt=A(3),rt=A(4),et=A(5),it=A(6),ot=k(!0),ut=k(!1),ct=j.values,at=j.keys,ft=j.entries,st=X.lastIndexOf,lt=X.reduce,ht=X.reduceRight,pt=X.join,vt=X.sort,gt=X.slice,yt=X.toString,dt=X.toLocaleString,bt=l("iterator"),St=l("toStringTag"),_t=s("typed_constructor"),xt=s("def_constructor"),mt=_.CONSTR,wt=_.TYPED,Et=_.VIEW,Ot="Wrong length!",Mt=A(1,function(t,n){return kt(N(t,t[xt]),n)}),It=b(function(){return 1===new q(new Uint16Array([1]).buffer)[0]}),Pt=!!q&&!!q[$].set&&b(function(){new q(1).set({})}),Ft=function(t,n){var r=u(t);if(r<0||r%n)throw B("Wrong offset!");return r},At=function(t){if(M(t)&&wt in t)return t;throw z(t+" is not a typed array!")},kt=function(t,n){if(!(M(t)&&_t in t))throw z("It is not a typed array constructor!");return new t(n)},Nt=function(t,n){return jt(N(t,t[xt]),n)},jt=function(t,n){for(var r=0,e=n.length,i=kt(t,e);r<e;)i[r]=n[r++];return i},Rt=function(t,n,r){G(t,n,{get:function(){return this._d[r]}})},Tt=function from(t){var n,r,e,i,o,u,c=p(t),a=arguments.length,f=1<a?arguments[1]:Jt,s=f!==Jt,l=g(c);if(l!=Jt&&!v(l)){for(u=l.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(s&&2<a&&(f=h(f,arguments[2],2)),n=0,r=w(c.length),i=kt(this,r);n<r;n++)i[n]=s?f(c[n],n):c[n];return i},Lt=function of(){for(var t=0,n=arguments.length,r=kt(this,n);t<n;)r[t]=arguments[t++];return r},Dt=!!q&&b(function(){dt.call(new q(1))}),Ct=function toLocaleString(){return dt.apply(Dt?gt.call(At(this)):At(this),arguments)},Ut={copyWithin:function copyWithin(t,n){return C.call(At(this),t,n,2<arguments.length?arguments[2]:Jt)},every:function every(t){return rt(At(this),t,1<arguments.length?arguments[1]:Jt)},fill:function fill(t){return D.apply(At(this),arguments)},filter:function filter(t){return Nt(this,tt(At(this),t,1<arguments.length?arguments[1]:Jt))},find:function find(t){return et(At(this),t,1<arguments.length?arguments[1]:Jt)},findIndex:function findIndex(t){return it(At(this),t,1<arguments.length?arguments[1]:Jt)},forEach:function forEach(t){Q(At(this),t,1<arguments.length?arguments[1]:Jt)},indexOf:function indexOf(t){return ut(At(this),t,1<arguments.length?arguments[1]:Jt)},includes:function includes(t){return ot(At(this),t,1<arguments.length?arguments[1]:Jt)},join:function join(t){return pt.apply(At(this),arguments)},lastIndexOf:function lastIndexOf(t){return st.apply(At(this),arguments)},map:function map(t){return Mt(At(this),t,1<arguments.length?arguments[1]:Jt)},reduce:function reduce(t){return lt.apply(At(this),arguments)},reduceRight:function reduceRight(t){return ht.apply(At(this),arguments)},reverse:function reverse(){for(var t,n=this,r=At(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function some(t){return nt(At(this),t,1<arguments.length?arguments[1]:Jt)},sort:function sort(t){return vt.call(At(this),t)},subarray:function subarray(t,n){var r=At(this),e=r.length,i=c(t,e);return new(N(r,r[xt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,w((n===Jt?e:c(n,e))-i))}},Wt=function slice(t,n){return Nt(this,gt.call(At(this),t,n))},Gt=function set(t){At(this);var n=Ft(arguments[1],1),r=this.length,e=p(t),i=w(e.length),o=0;if(r<i+n)throw B(Ot);for(;o<i;)this[n+o]=e[o++]},Vt={entries:function entries(){return ft.call(At(this))},keys:function keys(){return at.call(At(this))},values:function values(){return ct.call(At(this))}},Bt=function(t,n){return M(t)&&t[wt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},zt=function getOwnPropertyDescriptor(t,n){return Bt(t,n=a(n,!0))?i(2,t[n]):V(t,n)},qt=function defineProperty(t,n,r){return!(Bt(t,n=a(n,!0))&&M(r)&&f(r,"value"))||f(r,"get")||f(r,"set")||r.configurable||f(r,"writable")&&!r.writable||f(r,"enumerable")&&!r.enumerable?G(t,n,r):(t[n]=r.value,t)};mt||(W.f=zt,U.f=qt),S(S.S+S.F*!mt,"Object",{getOwnPropertyDescriptor:zt,defineProperty:qt}),b(function(){yt.call({})})&&(yt=dt=function toString(){return pt.call(this)});var Kt=o({},Ut);o(Kt,Vt),m(Kt,bt,Vt.values),o(Kt,{slice:Wt,set:Gt,constructor:function(){},toString:yt,toLocaleString:Ct}),Rt(Kt,"buffer","b"),Rt(Kt,"byteOffset","o"),Rt(Kt,"byteLength","l"),Rt(Kt,"length","e"),G(Kt,St,{get:function(){return this[wt]}}),t.exports=function(t,l,n,o){var h=t+((o=!!o)?"Clamped":"")+"Array",r="get"+t,u="set"+t,p=d[h],c=p||{},e=p&&P(p),i={},a=p&&p[$],v=function(t,i){G(t,i,{get:function(){return(t=this._d).v[r](i*l+t.o,It);var t},set:function(t){return n=i,r=t,e=this._d,o&&(r=(r=Math.round(r))<0?0:255<r?255:255&r),void e.v[u](n*l+e.o,r,It);var n,r,e},enumerable:!0})};!p||!_.ABV?(p=n(function(t,n,r,e){x(t,p,h,"_d");var i,o,u,c,a=0,f=0;if(M(n)){if(!(n instanceof H||(c=O(n))==K||c==J))return wt in n?jt(p,n):Tt.call(p,n);i=n,f=Ft(r,l);var s=n.byteLength;if(e===Jt){if(s%l)throw B(Ot);if((o=s-f)<0)throw B(Ot)}else if(s<(o=w(e)*l)+f)throw B(Ot);u=o/l}else u=E(n),i=new H(o=u*l);for(m(t,"_d",{b:i,o:f,l:o,e:u,v:new Z(i)});a<u;)v(t,a++)}),a=p[$]=I(Kt),m(a,"constructor",p)):b(function(){p(1)})&&b(function(){new p(-1)})&&T(function(t){new p,new p(null),new p(1.5),new p(t)},!0)||(p=n(function(t,n,r,e){var i;return x(t,p,h),M(n)?n instanceof H||(i=O(n))==K||i==J?e!==Jt?new c(n,Ft(r,l),e):r!==Jt?new c(n,Ft(r,l)):new c(n):wt in n?jt(p,n):Tt.call(p,n):new c(E(n))}),Q(e!==Function.prototype?F(c).concat(F(e)):F(c),function(t){t in p||m(p,t,c[t])}),p[$]=a,y||(a.constructor=p));var f=a[bt],s=!!f&&("values"==f.name||f.name==Jt),g=Vt.values;m(p,_t,!0),m(a,wt,h),m(a,Et,!0),m(a,xt,p),(o?new p(1)[St]==h:St in a)||G(a,St,{get:function(){return h}}),S(S.G+S.W+S.F*((i[h]=p)!=c),i),S(S.S,h,{BYTES_PER_ELEMENT:l}),S(S.S+S.F*b(function(){c.of.call(p,1)}),h,{from:Tt,of:Lt}),Y in a||m(a,Y,l),S(S.P,h,Ut),L(h),S(S.P+S.F*Pt,h,{set:Gt}),S(S.P+S.F*!s,h,Vt),y||a.toString==yt||(a.toString=yt),S(S.P+S.F*b(function(){new p(1).slice()}),h,{slice:Wt}),S(S.P+S.F*(b(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!b(function(){a.toLocaleString.call([1,2])})),h,{toLocaleString:Ct}),R[h]=s?f:g,y||s||m(a,bt,g)}}else t.exports=function(){}},function(t,n,r){var o=r(116),e=r(0),i=r(47)("metadata"),u=i.store||(i.store=new(r(119))),c=function(t,n,r){var e=u.get(t);if(!e){if(!r)return Jt;u.set(t,e=new o)}var i=e.get(n);if(!i){if(!r)return Jt;e.set(n,i=new o)}return i};t.exports={store:u,map:c,has:function(t,n,r){var e=c(n,r,!1);return e!==Jt&&e.has(t)},get:function(t,n,r){var e=c(n,r,!1);return e===Jt?Jt:e.get(t)},set:function(t,n,r,e){c(r,e,!0).set(t,n)},keys:function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},key:function(t){return t===Jt||"symbol"==typeof t?t:String(t)},exp:function(t){e(e.S,"Reflect",t)}}},function(t,n){t.exports=!1},function(t,n,r){var e=r(33)("meta"),i=r(4),o=r(14),u=r(8).f,c=0,a=Object.isExtensible||function(){return!0},f=!r(3)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!a(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!o(t,e)){if(!a(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return f&&l.NEED&&a(t)&&!o(t,e)&&s(t),t}}},function(t,n,r){var e=r(5)("unscopables"),i=Array.prototype;i[e]==Jt&&r(11)(i,e,{}),t.exports=function(t){i[e][t]=!0}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(t===Jt?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(95),i=r(69);t.exports=Object.keys||function keys(t){return e(t,i)}},function(t,n,r){var e=r(20),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=e(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var i=e(1),o=e(96),u=e(69),c=e(68)("IE_PROTO"),a=function(){},f="prototype",s=function(){var t,n=e(66)("iframe"),r=u.length;for(n.style.display="none",e(70).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s[f][u[r]];return s()};t.exports=Object.create||function create(t,n){var r;return null!==t?(a[f]=i(t),r=new a,a[f]=null,r[c]=t):r=s(),n===Jt?r:o(r,n)}},function(t,n,r){var e=r(95),i=r(69).concat("length","prototype");n.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return e(t,i)}},function(t,n,r){var e=r(2),i=r(8),o=r(7),u=r(5)("species");t.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||e!==Jt&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){var h=r(18),p=r(108),v=r(81),g=r(1),y=r(6),d=r(83),b={},S={};(n=t.exports=function(t,n,r,e,i){var o,u,c,a,f=i?function(){return t}:d(t),s=h(r,e,n?2:1),l=0;if("function"!=typeof f)throw TypeError(t+" is not iterable!");if(v(f)){for(o=y(t.length);l<o;l++)if((a=n?s(g(u=t[l])[0],u[1]):s(t[l]))===b||a===S)return a}else for(c=f.call(t);!(u=c.next()).done;)if((a=p(c,s,u.value,n))===b||a===S)return a}).BREAK=b,n.RETURN=S},function(t,n,r){var i=r(12);t.exports=function(t,n,r){for(var e in n)i(t,e,n[e],r);return t}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,r){var e=r(8).f,i=r(14),o=r(5)("toStringTag");t.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},function(t,n,r){var i=r(19),o=r(5)("toStringTag"),u="Arguments"==i(function(){return arguments}());t.exports=function(t){var n,r,e;return t===Jt?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(r){}}(n=Object(t),o))?r:u?i(n):"Object"==(e=i(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var u=r(0),e=r(23),c=r(3),a=r(73),i="["+a+"]",o=RegExp("^"+i+i+"*"),f=RegExp(i+i+"*$"),s=function(t,n,r){var e={},i=c(function(){return!!a[t]()||"​"!="​"[t]()}),o=e[t]=i?n(l):a[t];r&&(e[r]=o),u(u.P+u.F*i,"String",e)},l=s.trim=function(t,n){return t=String(e(t)),1&n&&(t=t.replace(o,"")),2&n&&(t=t.replace(f,"")),t};t.exports=s},function(t,n){t.exports={}},function(t,n,r){var e=r(26),i=r(2),o="__core-js_shared__",u=i[o]||(i[o]={});(t.exports=function(t,n){return u[t]||(u[t]=n!==Jt?n:{})})("versions",[]).push({version:e.version,mode:r(29)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(1);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){var i=r(1),o=r(10),u=r(5)("species");t.exports=function(t,n){var r,e=i(t).constructor;return e===Jt||(r=i(e)[u])==Jt?n:o(r)}},function(t,n,r){var a=r(15),f=r(6),s=r(35);t.exports=function(c){return function(t,n,r){var e,i=a(t),o=f(i.length),u=s(r,o);if(c&&n!=n){for(;u<o;)if((e=i[u++])!=e)return!0}else for(;u<o;u++)if((c||u in i)&&i[u]===n)return c||u||0;return!c&&-1}}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(19);t.exports=Array.isArray||function isArray(t){return"Array"==e(t)}},function(t,n,r){var a=r(20),f=r(23);t.exports=function(c){return function(t,n){var r,e,i=String(f(t)),o=a(n),u=i.length;return o<0||u<=o?c?"":Jt:(r=i.charCodeAt(o))<55296||56319<r||o+1===u||(e=i.charCodeAt(o+1))<56320||57343<e?c?i.charAt(o):r:c?i.slice(o,o+2):e-56320+(r-55296<<10)+65536}}},function(t,n,r){var e=r(4),i=r(19),o=r(5)("match");t.exports=function(t){var n;return e(t)&&((n=t[o])!==Jt?!!n:"RegExp"==i(t))}},function(t,n,r){var o=r(5)("iterator"),u=!1;try{var e=[7][o]();e["return"]=function(){u=!0},Array.from(e,function(){throw 2})}catch(c){}t.exports=function(t,n){if(!n&&!u)return!1;var r=!1;try{var e=[7],i=e[o]();i.next=function(){return{done:r=!0}},e[o]=function(){return i},t(e)}catch(c){}return r}},function(t,n,r){var i=r(44),o=RegExp.prototype.exec;t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var e=r.call(t,n);if("object"!=typeof e)throw new TypeError("RegExp exec method returned something other than an Object or null");return e}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,r){r(112);var f=r(12),s=r(11),l=r(3),h=r(23),p=r(5),v=r(87),g=p("species"),y=!l(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(r,t,n){var e=p(r),o=!l(function(){var t={};return t[e]=function(){return 7},7!=""[r](t)}),i=o?!l(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===r&&(n.constructor={},n.constructor[g]=function(){return n}),n[e](""),!t}):Jt;if(!o||!i||"replace"===r&&!y||"split"===r&&!d){var u=/./[e],c=n(h,e,""[r],function maybeCallNative(t,n,r,e,i){return n.exec===v?o&&!i?{done:!0,value:u.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}}),a=c[1];f(String.prototype,r,c[0]),s(RegExp.prototype,e,2==t?function(t,n){return a.call(t,this,n)}:function(t){return a.call(t,this)})}}},function(t,n,r){var e=r(2).navigator;t.exports=e&&e.userAgent||""},function(t,n,r){var d=r(2),b=r(0),S=r(12),_=r(41),x=r(30),m=r(40),w=r(39),E=r(4),O=r(3),M=r(57),I=r(43),P=r(72);t.exports=function(e,t,n,r,i,o){var u=d[e],c=u,a=i?"set":"add",f=c&&c.prototype,s={},l=function(t){var r=f[t];S(f,t,"delete"==t?function(t){return!(o&&!E(t))&&r.call(this,0===t?0:t)}:"has"==t?function has(t){return!(o&&!E(t))&&r.call(this,0===t?0:t)}:"get"==t?function get(t){return o&&!E(t)?Jt:r.call(this,0===t?0:t)}:"add"==t?function add(t){return r.call(this,0===t?0:t),this}:function set(t,n){return r.call(this,0===t?0:t,n),this})};if("function"==typeof c&&(o||f.forEach&&!O(function(){(new c).entries().next()}))){var h=new c,p=h[a](o?{}:-0,1)!=h,v=O(function(){h.has(1)}),g=M(function(t){new c(t)}),y=!o&&O(function(){for(var t=new c,n=5;n--;)t[a](n,n);return!t.has(-0)});g||(((c=t(function(t,n){w(t,c,e);var r=P(new u,t,c);return n!=Jt&&m(n,i,r[a],r),r})).prototype=f).constructor=c),(v||y)&&(l("delete"),l("has"),i&&l("get")),(y||p)&&l(a),o&&f.clear&&delete f.clear}else c=r.getConstructor(t,e,i,a),_(c.prototype,n),x.NEED=!0;return I(c,e),b(b.G+b.W+b.F*((s[e]=c)!=u),s),o||r.setStrong(c,e,i),c}},function(t,n,r){for(var e,i=r(2),o=r(11),u=r(33),c=u("typed_array"),a=u("view"),f=!(!i.ArrayBuffer||!i.DataView),s=f,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[h[l++]])?(o(e.prototype,c,!0),o(e.prototype,a,!0)):s=!1;t.exports={ABV:f,CONSTR:s,TYPED:c,VIEW:a}},function(t,n,r){t.exports=r(29)||!r(3)(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete r(2)[t]})},function(t,n,r){var e=r(0);t.exports=function(t){e(e.S,t,{of:function of(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,r){var e=r(0),u=r(10),c=r(18),a=r(40);t.exports=function(t){e(e.S,t,{from:function from(t){var n,r,e,i,o=arguments[1];return u(this),(n=o!==Jt)&&u(o),t==Jt?new this:(r=[],n?(e=0,i=c(o,arguments[2],2),a(t,!1,function(t){r.push(i(t,e++))})):a(t,!1,r.push,r),new this(r))}})}},function(t,n,r){var e=r(4),i=r(2).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,r){var e=r(2),i=r(26),o=r(29),u=r(94),c=r(8).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){var e=r(47)("keys"),i=r(33);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(2).document;t.exports=e&&e.documentElement},function(t,n,i){var r=i(4),e=i(1),o=function(t,n){if(e(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,e){try{(e=i(18)(Function.call,i(16).f(Object.prototype,"__proto__").set,2))(t,[]),r=!(t instanceof Array)}catch(n){r=!0}return function setPrototypeOf(t,n){return o(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):Jt),check:o}},function(t,n,r){var o=r(4),u=r(71).set;t.exports=function(t,n,r){var e,i=n.constructor;return i!==r&&"function"==typeof i&&(e=i.prototype)!==r.prototype&&o(e)&&u&&u(t,e),t}},function(t,n){t.exports="\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,r){var i=r(20),o=r(23);t.exports=function repeat(t){var n=String(o(this)),r="",e=i(t);if(e<0||e==Infinity)throw RangeError("Count can't be negative");for(;0<e;(e>>>=1)&&(n+=n))1&e&&(r+=n);return r}},function(t,n){t.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n){var r=Math.expm1;t.exports=!r||22025.465794806718<r(10)||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function expm1(t){return 0==(t=+t)?t:-1e-6<t&&t<1e-6?t+t*t/2:Math.exp(t)-1}:r},function(t,n,r){var e=r(56),i=r(23);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},function(t,n,r){var i=r(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[i]=!1,!"/./"[t](n)}catch(e){}}return!0}},function(t,n,r){var S=r(29),_=r(0),x=r(12),m=r(11),w=r(46),E=r(80),O=r(43),M=r(17),I=r(5)("iterator"),P=!([].keys&&"next"in[].keys()),F="values",A=function(){return this};t.exports=function(t,n,r,e,i,o,u){E(r,n,e);var c,a,f,s=function(t){if(!P&&t in v)return v[t];switch(t){case"keys":return function keys(){return new r(this,t)};case F:return function values(){return new r(this,t)}}return function entries(){return new r(this,t)}},l=n+" Iterator",h=i==F,p=!1,v=t.prototype,g=v[I]||v["@@iterator"]||i&&v[i],y=g||s(i),d=i?h?s("entries"):y:Jt,b="Array"==n&&v.entries||g;if(b&&(f=M(b.call(new t)))!==Object.prototype&&f.next&&(O(f,l,!0),S||"function"==typeof f[I]||m(f,I,A)),h&&g&&g.name!==F&&(p=!0,y=function values(){return g.call(this)}),S&&!u||!P&&!p&&v[I]||m(v,I,y),w[n]=y,w[l]=A,i)if(c={values:h?y:s(F),keys:o?y:s("keys"),entries:d},u)for(a in c)a in v||x(v,a,c[a]);else _(_.P+_.F*(P||p),n,c);return c}},function(t,n,r){var e=r(36),i=r(32),o=r(43),u={};r(11)(u,r(5)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},function(t,n,r){var e=r(46),i=r(5)("iterator"),o=Array.prototype;t.exports=function(t){return t!==Jt&&(e.Array===t||o[i]===t)}},function(t,n,r){var e=r(8),i=r(32);t.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},function(t,n,r){var e=r(44),i=r(5)("iterator"),o=r(46);t.exports=r(26).getIteratorMethod=function(t){if(t!=Jt)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(213);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var c=r(9),a=r(35),f=r(6);t.exports=function fill(t){for(var n=c(this),r=f(n.length),e=arguments.length,i=a(1<e?arguments[1]:Jt,r),o=2<e?arguments[2]:Jt,u=o===Jt?r:a(o,r);i<u;)n[i++]=t;return n}},function(t,n,r){var e=r(31),i=r(111),o=r(46),u=r(15);t.exports=r(79)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||t.length<=r?(this._t=Jt,i(1)):i(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},function(t,n,r){var e,i,u=r(50),c=RegExp.prototype.exec,a=String.prototype.replace,o=c,f="lastIndex",s=(i=/b*/g,c.call(e=/a/,"a"),c.call(i,"a"),0!==e[f]||0!==i[f]),l=/()??/.exec("")[1]!==Jt;(s||l)&&(o=function exec(t){var n,r,e,i,o=this;return l&&(r=new RegExp("^"+o.source+"$(?!\\s)",u.call(o))),s&&(n=o[f]),e=c.call(o,t),s&&e&&(o[f]=o.global?e.index+e[0].length:n),l&&e&&1<e.length&&a.call(e[0],r,function(){for(i=1;i<arguments.length-2;i++)arguments[i]===Jt&&(e[i]=Jt)}),e}),t.exports=o},function(t,n,r){var e=r(55)(!0);t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var e,i,o,u=r(18),c=r(101),a=r(70),f=r(66),s=r(2),l=s.process,h=s.setImmediate,p=s.clearImmediate,v=s.MessageChannel,g=s.Dispatch,y=0,d={},b="onreadystatechange",S=function(){var t=+this;if(d.hasOwnProperty(t)){var n=d[t];delete d[t],n()}},_=function(t){S.call(t.data)};h&&p||(h=function setImmediate(t){for(var n=[],r=1;r<arguments.length;)n.push(arguments[r++]);return d[++y]=function(){c("function"==typeof t?t:Function(t),n)},e(y),y},p=function clearImmediate(t){delete d[t]},"process"==r(19)(l)?e=function(t){l.nextTick(u(S,t,1))}:g&&g.now?e=function(t){g.now(u(S,t,1))}:v?(o=(i=new v).port2,i.port1.onmessage=_,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",_,!1)):e=b in f("script")?function(t){a.appendChild(f("script"))[b]=function(){a.removeChild(this),S.call(t)}}:function(t){setTimeout(u(S,t,1),0)}),t.exports={set:h,clear:p}},function(t,n,r){var c=r(2),a=r(89).set,f=c.MutationObserver||c.WebKitMutationObserver,s=c.process,l=c.Promise,h="process"==r(19)(s);t.exports=function(){var e,i,o,t=function(){var t,n;for(h&&(t=s.domain)&&t.exit();e;){n=e.fn,e=e.next;try{n()}catch(r){throw e?o():i=Jt,r}}i=Jt,t&&t.enter()};if(h)o=function(){s.nextTick(t)};else if(!f||c.navigator&&c.navigator.standalone)if(l&&l.resolve){var n=l.resolve(Jt);o=function(){n.then(t)}}else o=function(){a.call(c,t)};else{var r=!0,u=document.createTextNode("");new f(t).observe(u,{characterData:!0}),o=function(){u.data=r=!r}}return function(t){var n={fn:t,next:Jt};i&&(i.next=n),e||(e=n,o()),i=n}}},function(t,n,r){var i=r(10);function PromiseCapability(t){var r,e;this.promise=new t(function(t,n){if(r!==Jt||e!==Jt)throw TypeError("Bad Promise constructor");r=t,e=n}),this.resolve=i(r),this.reject=i(e)}t.exports.f=function(t){return new PromiseCapability(t)}},function(t,n,r){var e=r(2),i=r(7),o=r(29),u=r(62),c=r(11),a=r(41),f=r(3),s=r(39),l=r(20),h=r(6),p=r(122),v=r(37).f,g=r(8).f,y=r(85),d=r(43),b="ArrayBuffer",S="DataView",_="prototype",x="Wrong index!",m=e[b],w=e[S],E=e.Math,O=e.RangeError,M=e.Infinity,I=m,P=E.abs,F=E.pow,A=E.floor,k=E.log,N=E.LN2,j="byteLength",R="byteOffset",T=i?"_b":"buffer",L=i?"_l":j,D=i?"_o":R;function packIEEE754(t,n,r){var e,i,o,u=new Array(r),c=8*r-n-1,a=(1<<c)-1,f=a>>1,s=23===n?F(2,-24)-F(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=P(t))!=t||t===M?(i=t!=t?1:0,e=a):(e=A(k(t)/N),t*(o=F(2,-e))<1&&(e--,o*=2),2<=(t+=1<=e+f?s/o:s*F(2,1-f))*o&&(e++,o/=2),a<=e+f?(i=0,e=a):1<=e+f?(i=(t*o-1)*F(2,n),e+=f):(i=t*F(2,f-1)*F(2,n),e=0));8<=n;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;0<c;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u}function unpackIEEE754(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,a=r-1,f=t[a--],s=127&f;for(f>>=7;0<c;s=256*s+t[a],a--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;0<c;e=256*e+t[a],a--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:f?-M:M;e+=F(2,n),s-=u}return(f?-1:1)*e*F(2,s-n)}function unpackI32(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function packI8(t){return[255&t]}function packI16(t){return[255&t,t>>8&255]}function packI32(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function packF64(t){return packIEEE754(t,52,8)}function packF32(t){return packIEEE754(t,23,4)}function addGetter(t,n,r){g(t[_],n,{get:function(){return this[r]}})}function get(t,n,r,e){var i=p(+r);if(t[L]<i+n)throw O(x);var o=i+t[D],u=t[T]._b.slice(o,o+n);return e?u:u.reverse()}function set(t,n,r,e,i,o){var u=p(+r);if(t[L]<u+n)throw O(x);for(var c=t[T]._b,a=u+t[D],f=e(+i),s=0;s<n;s++)c[a+s]=f[o?s:n-s-1]}if(u.ABV){if(!f(function(){m(1)})||!f(function(){new m(-1)})||f(function(){return new m,new m(1.5),new m(NaN),m.name!=b})){for(var C,U=(m=function ArrayBuffer(t){return s(this,m),new I(p(t))})[_]=I[_],W=v(I),G=0;G<W.length;)(C=W[G++])in m||c(m,C,I[C]);o||(U.constructor=m)}var V=new w(new m(2)),B=w[_].setInt8;V.setInt8(0,2147483648),V.setInt8(1,2147483649),!V.getInt8(0)&&V.getInt8(1)||a(w[_],{setInt8:function setInt8(t,n){B.call(this,t,n<<24>>24)},setUint8:function setUint8(t,n){B.call(this,t,n<<24>>24)}},!0)}else m=function ArrayBuffer(t){s(this,m,b);var n=p(t);this._b=y.call(new Array(n),0),this[L]=n},w=function DataView(t,n,r){s(this,w,S),s(t,m,S);var e=t[L],i=l(n);if(i<0||e<i)throw O("Wrong offset!");if(e<i+(r=r===Jt?e-i:h(r)))throw O("Wrong length!");this[T]=t,this[D]=i,this[L]=r},i&&(addGetter(m,j,"_l"),addGetter(w,"buffer","_b"),addGetter(w,j,"_l"),addGetter(w,R,"_o")),a(w[_],{getInt8:function getInt8(t){return get(this,1,t)[0]<<24>>24},getUint8:function getUint8(t){return get(this,1,t)[0]},getInt16:function getInt16(t){var n=get(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function getUint16(t){var n=get(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function getInt32(t){return unpackI32(get(this,4,t,arguments[1]))},getUint32:function getUint32(t){return unpackI32(get(this,4,t,arguments[1]))>>>0},getFloat32:function getFloat32(t){return unpackIEEE754(get(this,4,t,arguments[1]),23,4)},getFloat64:function getFloat64(t){return unpackIEEE754(get(this,8,t,arguments[1]),52,8)},setInt8:function setInt8(t,n){set(this,1,t,packI8,n)},setUint8:function setUint8(t,n){set(this,1,t,packI8,n)},setInt16:function setInt16(t,n){set(this,2,t,packI16,n,arguments[2])},setUint16:function setUint16(t,n){set(this,2,t,packI16,n,arguments[2])},setInt32:function setInt32(t,n){set(this,4,t,packI32,n,arguments[2])},setUint32:function setUint32(t,n){set(this,4,t,packI32,n,arguments[2])},setFloat32:function setFloat32(t,n){set(this,4,t,packF32,n,arguments[2])},
setFloat64:function setFloat64(t,n){set(this,8,t,packF64,n,arguments[2])}});d(m,b),d(w,S),c(w[_],u.VIEW,!0),n[b]=m,n[S]=w},function(t,n,r){t.exports=!r(7)&&!r(3)(function(){return 7!=Object.defineProperty(r(66)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){n.f=r(5)},function(t,n,r){var u=r(14),c=r(15),a=r(52)(!1),f=r(68)("IE_PROTO");t.exports=function(t,n){var r,e=c(t),i=0,o=[];for(r in e)r!=f&&u(e,r)&&o.push(r);for(;i<n.length;)u(e,r=n[i++])&&(~a(o,r)||o.push(r));return o}},function(t,n,r){var u=r(8),c=r(1),a=r(34);t.exports=r(7)?Object.defineProperties:function defineProperties(t,n){c(t);for(var r,e=a(n),i=e.length,o=0;o<i;)u.f(t,r=e[o++],n[r]);return t}},function(t,n,r){var e=r(15),i=r(37).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function getOwnPropertyNames(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(n){return u.slice()}}(t):i(e(t))}},function(t,n,r){var h=r(7),p=r(34),v=r(53),g=r(49),y=r(9),d=r(48),i=Object.assign;t.exports=!i||r(3)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=i({},t)[r]||Object.keys(i({},n)).join("")!=e})?function assign(t,n){for(var r=y(t),e=arguments.length,i=1,o=v.f,u=g.f;i<e;)for(var c,a=d(arguments[i++]),f=o?p(a).concat(o(a)):p(a),s=f.length,l=0;l<s;)c=f[l++],h&&!u.call(a,c)||(r[c]=a[c]);return r}:i},function(t,n){t.exports=Object.is||function is(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,r){var o=r(10),u=r(4),c=r(101),a=[].slice,f={};t.exports=Function.bind||function bind(n){var r=o(this),e=a.call(arguments,1),i=function(){var t=e.concat(a.call(arguments));return this instanceof i?function(t,n,r){if(!(n in f)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";f[n]=Function("F,a","return new F("+e.join(",")+")")}return f[n](t,r)}(r,t.length,t):c(r,t,n)};return u(r.prototype)&&(i.prototype=r.prototype),i}},function(t,n){t.exports=function(t,n,r){var e=r===Jt;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},function(t,n,r){var e=r(19);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},function(t,n,r){var e=r(4),i=Math.floor;t.exports=function isInteger(t){return!e(t)&&isFinite(t)&&i(t)===t}},function(t,n,r){var e=r(2).parseFloat,i=r(45).trim;t.exports=1/e(r(73)+"-0")!=-Infinity?function parseFloat(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},function(t,n,r){var e=r(2).parseInt,i=r(45).trim,o=r(73),u=/^[-+]?0[xX]/;t.exports=8!==e(o+"08")||22!==e(o+"0x16")?function parseInt(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},function(t,n){t.exports=Math.log1p||function log1p(t){return-1e-8<(t=+t)&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,r){var o=r(75),e=Math.pow,u=e(2,-52),c=e(2,-23),a=e(2,127)*(2-c),f=e(2,-126);t.exports=Math.fround||function fround(t){var n,r,e=Math.abs(t),i=o(t);return e<f?i*(e/f/c+1/u-1/u)*f*c:a<(r=(n=(1+c/u)*e)-(n-e))||r!=r?i*Infinity:i*r}},function(t,n,r){var u=r(1);t.exports=function(t,n,r,e){try{return e?n(u(r)[0],r[1]):n(r)}catch(o){var i=t["return"];throw i!==Jt&&u(i.call(t)),o}}},function(t,n,r){var s=r(10),l=r(9),h=r(48),p=r(6);t.exports=function(t,n,r,e,i){s(n);var o=l(t),u=h(o),c=p(o.length),a=i?c-1:0,f=i?-1:1;if(r<2)for(;;){if(a in u){e=u[a],a+=f;break}if(a+=f,i?a<0:c<=a)throw TypeError("Reduce of empty array with no initial value")}for(;i?0<=a:a<c;a+=f)a in u&&(e=n(e,u[a],a,o));return e}},function(t,n,r){var f=r(9),s=r(35),l=r(6);t.exports=[].copyWithin||function copyWithin(t,n){var r=f(this),e=l(r.length),i=s(t,e),o=s(n,e),u=2<arguments.length?arguments[2]:Jt,c=Math.min((u===Jt?e:s(u,e))-o,e-i),a=1;for(o<i&&i<o+c&&(a=-1,o+=c-1,i+=c-1);0<c--;)o in r?r[i]=r[o]:delete r[i],i+=a,o+=a;return r}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){var e=r(87);r(0)({target:"RegExp",proto:!0,forced:e!==/./.exec},{exec:e})},function(t,n,r){r(7)&&"g"!=/./g.flags&&r(8).f(RegExp.prototype,"flags",{configurable:!0,get:r(50)})},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(n){return{e:!0,v:n}}}},function(t,n,r){var e=r(1),i=r(4),o=r(91);t.exports=function(t,n){if(e(t),i(n)&&n.constructor===t)return n;var r=o.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){var e=r(117),i=r(42);t.exports=r(61)("Map",function(t){return function Map(){return t(this,0<arguments.length?arguments[0]:Jt)}},{get:function get(t){var n=e.getEntry(i(this,"Map"),t);return n&&n.v},set:function set(t,n){return e.def(i(this,"Map"),0===t?0:t,n)}},e,!0)},function(t,n,r){var u=r(8).f,c=r(36),a=r(41),f=r(18),s=r(39),l=r(40),e=r(79),i=r(111),o=r(38),h=r(7),p=r(30).fastKey,v=r(42),g=h?"_s":"size",y=function(t,n){var r,e=p(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,o,r,e){var i=t(function(t,n){s(t,i,o,"_i"),t._t=o,t._i=c(null),t._f=Jt,t._l=Jt,t[g]=0,n!=Jt&&l(n,r,t[e],t)});return a(i.prototype,{clear:function clear(){for(var t=v(this,o),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=Jt),delete n[r.i];t._f=t._l=Jt,t[g]=0},"delete":function(t){var n=v(this,o),r=y(n,t);if(r){var e=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=e),e&&(e.p=i),n._f==r&&(n._f=e),n._l==r&&(n._l=i),n[g]--}return!!r},forEach:function forEach(t){v(this,o);for(var n,r=f(t,1<arguments.length?arguments[1]:Jt,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function has(t){return!!y(v(this,o),t)}}),h&&u(i.prototype,"size",{get:function(){return v(this,o)[g]}}),i},def:function(t,n,r){var e,i,o=y(t,n);return o?o.v=r:(t._l=o={i:i=p(n,!0),k:n,v:r,p:e=t._l,n:Jt,r:!1},t._f||(t._f=o),e&&(e.n=o),t[g]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,r,n){e(t,r,function(t,n){this._t=v(t,r),this._k=n,this._l=Jt},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?i(0,"keys"==n?r.k:"values"==n?r.v:[r.k,r.v]):(t._t=Jt,i(1))},n?"entries":"values",!n,!0),o(r)}}},function(t,n,r){var e=r(117),i=r(42);t.exports=r(61)("Set",function(t){return function Set(){return t(this,0<arguments.length?arguments[0]:Jt)}},{add:function add(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},function(t,n,r){var o,e=r(2),i=r(25)(0),u=r(12),c=r(30),a=r(98),f=r(120),s=r(4),l=r(42),h=r(42),p=!e.ActiveXObject&&"ActiveXObject"in e,v="WeakMap",g=c.getWeak,y=Object.isExtensible,d=f.ufstore,b=function(t){return function WeakMap(){return t(this,0<arguments.length?arguments[0]:Jt)}},S={get:function get(t){if(s(t)){var n=g(t);return!0===n?d(l(this,v)).get(t):n?n[this._i]:Jt}},set:function set(t,n){return f.def(l(this,v),t,n)}},_=t.exports=r(61)(v,b,S,f,!0,!0);h&&p&&(a((o=f.getConstructor(b,v)).prototype,S),c.NEED=!0,i(["delete","has","get","set"],function(e){var t=_.prototype,i=t[e];u(t,e,function(t,n){if(s(t)&&!y(t)){this._f||(this._f=new o);var r=this._f[e](t,n);return"set"==e?this:r}return i.call(this,t,n)})}))},function(t,n,r){var u=r(41),c=r(30).getWeak,i=r(1),a=r(4),f=r(39),s=r(40),e=r(25),l=r(14),h=r(42),o=e(5),p=e(6),v=0,g=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},d=function(t,n){return o(t.a,function(t){return t[0]===n})};y.prototype={get:function(t){var n=d(this,t);if(n)return n[1]},has:function(t){return!!d(this,t)},set:function(t,n){var r=d(this,t);r?r[1]=n:this.a.push([t,n])},"delete":function(n){var t=p(this.a,function(t){return t[0]===n});return~t&&this.a.splice(t,1),!!~t}},t.exports={getConstructor:function(t,r,e,i){var o=t(function(t,n){f(t,o,r,"_i"),t._t=r,t._i=v++,n!=(t._l=Jt)&&s(n,e,t[i],t)});return u(o.prototype,{"delete":function(t){if(!a(t))return!1;var n=c(t);return!0===n?g(h(this,r))["delete"](t):n&&l(n,this._i)&&delete n[this._i]},has:function has(t){if(!a(t))return!1;var n=c(t);return!0===n?g(h(this,r)).has(t):n&&l(n,this._i)}}),o},def:function(t,n,r){var e=c(i(n),!0);return!0===e?g(t).set(n,r):e[t._i]=r,t},ufstore:g}},function(t,n,r){var e=r(37),i=r(53),o=r(1),u=r(2).Reflect;t.exports=u&&u.ownKeys||function ownKeys(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(20),i=r(6);t.exports=function(t){if(t===Jt)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},function(t,n,r){var p=r(54),v=r(4),g=r(6),y=r(18),d=r(5)("isConcatSpreadable");t.exports=function flattenIntoArray(t,n,r,e,i,o,u,c){for(var a,f,s=i,l=0,h=!!u&&y(u,c,3);l<e;){if(l in r){if(a=h?h(r[l],l,n):r[l],f=!1,v(a)&&(f=(f=a[d])!==Jt?!!f:p(a)),f&&0<o)s=flattenIntoArray(t,n,a,g(a.length),s,o-1)-1;else{if(9007199254740991<=s)throw TypeError();t[s]=a}s++}l++}return s}},function(t,n,r){var s=r(6),l=r(74),h=r(23);t.exports=function(t,n,r,e){var i=String(h(t)),o=i.length,u=r===Jt?" ":String(r),c=s(n);if(c<=o||""==u)return i;var a=c-o,f=l.call(u,Math.ceil(a/u.length));return a<f.length&&(f=f.slice(0,a)),e?f+i:i+f}},function(t,n,r){var a=r(7),f=r(34),s=r(15),l=r(49).f;t.exports=function(c){return function(t){for(var n,r=s(t),e=f(r),i=e.length,o=0,u=[];o<i;)n=e[o++],a&&!l.call(r,n)||u.push(c?[n,r[n]]:r[n]);return u}}},function(t,n,r){var e=r(44),i=r(127);t.exports=function(t){return function toJSON(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,n,r){var e=r(40);t.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},function(t,n){t.exports=Math.scale||function scale(t,n,r,e,i){return 0===arguments.length||t!=t||n!=n||r!=r||e!=e||i!=i?NaN:t===Infinity||t===-Infinity?t:(t-n)*(i-e)/(r-n)+e}},function(t,n,r){r(130),r(133),r(134),r(135),r(136),r(137),r(138),r(139),r(140),r(141),r(142),r(143),r(144),r(145),r(146),r(147),r(148),r(149),r(150),r(151),r(152),r(153),r(154),r(155),r(156),r(157),r(158),r(159),r(160),r(161),r(162),r(163),r(164),r(165),r(166),r(167),r(168),r(169),r(170),r(171),r(172),r(173),r(174),r(175),r(176),r(177),r(178),r(179),r(180),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(189),r(190),r(191),r(192),r(193),r(194),r(195),r(196),r(197),r(198),r(199),r(200),r(201),r(202),r(203),r(204),r(205),r(206),r(207),r(208),r(209),r(210),r(211),r(212),r(214),r(215),r(216),r(217),r(218),r(219),r(220),r(221),r(222),r(223),r(224),r(225),r(86),r(226),r(227),r(112),r(228),r(113),r(229),r(230),r(231),r(232),r(233),r(116),r(118),r(119),r(234),r(235),r(236),r(237),r(238),r(239),r(240),r(241),r(242),r(243),r(244),r(245),r(246),r(247),r(248),r(249),r(250),r(251),r(253),r(254),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(264),r(265),r(266),r(267),r(268),r(269),r(270),r(271),r(272),r(273),r(274),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(308),r(309),r(310),r(311),r(312),r(313),r(314),r(315),r(316),r(317),r(318),r(319),r(320),r(321),r(322),r(323),r(324),t.exports=r(325)},function(t,n,r){var e=r(2),u=r(14),i=r(7),o=r(0),c=r(12),a=r(30).KEY,f=r(3),s=r(47),l=r(43),h=r(33),p=r(5),v=r(94),g=r(67),y=r(132),d=r(54),b=r(1),S=r(4),_=r(9),x=r(15),m=r(22),w=r(32),E=r(36),O=r(97),M=r(16),I=r(53),P=r(8),F=r(34),A=M.f,k=P.f,N=O.f,j=e.Symbol,R=e.JSON,T=R&&R.stringify,L="prototype",D=p("_hidden"),C=p("toPrimitive"),U={}.propertyIsEnumerable,W=s("symbol-registry"),G=s("symbols"),V=s("op-symbols"),B=Object[L],z="function"==typeof j&&!!I.f,q=e.QObject,K=!q||!q[L]||!q[L].findChild,J=i&&f(function(){return 7!=E(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=A(B,n);e&&delete B[n],k(t,n,r),e&&t!==B&&k(B,n,e)}:k,Y=function(t){var n=G[t]=E(j[L]);return n._k=t,n},$=z&&"symbol"==typeof j.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof j},X=function defineProperty(t,n,r){return t===B&&X(V,n,r),b(t),n=m(n,!0),b(r),u(G,n)?(r.enumerable?(u(t,D)&&t[D][n]&&(t[D][n]=!1),r=E(r,{enumerable:w(0,!1)})):(u(t,D)||k(t,D,w(1,{})),t[D][n]=!0),J(t,n,r)):k(t,n,r)},H=function defineProperties(t,n){b(t);for(var r,e=y(n=x(n)),i=0,o=e.length;i<o;)X(t,r=e[i++],n[r]);return t},Z=function propertyIsEnumerable(t){var n=U.call(this,t=m(t,!0));return!(this===B&&u(G,t)&&!u(V,t))&&(!(n||!u(this,t)||!u(G,t)||u(this,D)&&this[D][t])||n)},Q=function getOwnPropertyDescriptor(t,n){if(t=x(t),n=m(n,!0),t!==B||!u(G,n)||u(V,n)){var r=A(t,n);return!r||!u(G,n)||u(t,D)&&t[D][n]||(r.enumerable=!0),r}},tt=function getOwnPropertyNames(t){for(var n,r=N(x(t)),e=[],i=0;i<r.length;)u(G,n=r[i++])||n==D||n==a||e.push(n);return e},nt=function getOwnPropertySymbols(t){for(var n,r=t===B,e=N(r?V:x(t)),i=[],o=0;o<e.length;)!u(G,n=e[o++])||r&&!u(B,n)||i.push(G[n]);return i};z||(c((j=function Symbol(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var n=h(0<arguments.length?arguments[0]:Jt),r=function(t){this===B&&r.call(V,t),u(this,D)&&u(this[D],n)&&(this[D][n]=!1),J(this,n,w(1,t))};return i&&K&&J(B,n,{configurable:!0,set:r}),Y(n)})[L],"toString",function toString(){return this._k}),M.f=Q,P.f=X,r(37).f=O.f=tt,r(49).f=Z,I.f=nt,i&&!r(29)&&c(B,"propertyIsEnumerable",Z,!0),v.f=function(t){return Y(p(t))}),o(o.G+o.W+o.F*!z,{Symbol:j});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;et<rt.length;)p(rt[et++]);for(var it=F(p.store),ot=0;ot<it.length;)g(it[ot++]);o(o.S+o.F*!z,"Symbol",{"for":function(t){return u(W,t+="")?W[t]:W[t]=j(t)},keyFor:function keyFor(t){if(!$(t))throw TypeError(t+" is not a symbol!");for(var n in W)if(W[n]===t)return n},useSetter:function(){K=!0},useSimple:function(){K=!1}}),o(o.S+o.F*!z,"Object",{create:function create(t,n){return n===Jt?E(t):H(E(t),n)},defineProperty:X,defineProperties:H,getOwnPropertyDescriptor:Q,getOwnPropertyNames:tt,getOwnPropertySymbols:nt});var ut=f(function(){I.f(1)});o(o.S+o.F*ut,"Object",{getOwnPropertySymbols:function getOwnPropertySymbols(t){return I.f(_(t))}}),R&&o(o.S+o.F*(!z||f(function(){var t=j();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function stringify(t){for(var n,r,e=[t],i=1;i<arguments.length;)e.push(arguments[i++]);if(r=n=e[1],(S(n)||t!==Jt)&&!$(t))return d(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!$(n))return n}),e[1]=n,T.apply(R,e)}}),j[L][C]||r(11)(j[L],C,j[L].valueOf),l(j,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n,r){t.exports=r(47)("native-function-to-string",Function.toString)},function(t,n,r){var c=r(34),a=r(53),f=r(49);t.exports=function(t){var n=c(t),r=a.f;if(r)for(var e,i=r(t),o=f.f,u=0;u<i.length;)o.call(t,e=i[u++])&&n.push(e);return n}},function(t,n,r){var e=r(0);e(e.S+e.F*!r(7),"Object",{defineProperty:r(8).f})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(7),"Object",{defineProperties:r(96)})},function(t,n,r){var e=r(15),i=r(16).f;r(24)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(t,n){return i(e(t),n)}})},function(t,n,r){var e=r(0);e(e.S,"Object",{create:r(36)})},function(t,n,r){var e=r(9),i=r(17);r(24)("getPrototypeOf",function(){return function getPrototypeOf(t){return i(e(t))}})},function(t,n,r){var e=r(9),i=r(34);r(24)("keys",function(){return function keys(t){return i(e(t))}})},function(t,n,r){r(24)("getOwnPropertyNames",function(){return r(97).f})},function(t,n,r){var e=r(4),i=r(30).onFreeze;r(24)("freeze",function(n){return function freeze(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(4),i=r(30).onFreeze;r(24)("seal",function(n){return function seal(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(4),i=r(30).onFreeze;r(24)("preventExtensions",function(n){return function preventExtensions(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(4);r(24)("isFrozen",function(n){return function isFrozen(t){return!e(t)||!!n&&n(t)}})},function(t,n,r){var e=r(4);r(24)("isSealed",function(n){return function isSealed(t){return!e(t)||!!n&&n(t)}})},function(t,n,r){var e=r(4);r(24)("isExtensible",function(n){return function isExtensible(t){return!!e(t)&&(!n||n(t))}})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{assign:r(98)})},function(t,n,r){var e=r(0);e(e.S,"Object",{is:r(99)})},function(t,n,r){var e=r(0);e(e.S,"Object",{setPrototypeOf:r(71).set})},function(t,n,r){var e=r(44),i={};i[r(5)("toStringTag")]="z",i+""!="[object z]"&&r(12)(Object.prototype,"toString",function toString(){return"[object "+e(this)+"]"},!0)},function(t,n,r){var e=r(0);e(e.P,"Function",{bind:r(100)})},function(t,n,r){var e=r(8).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||r(7)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,r){var e=r(4),i=r(17),o=r(5)("hasInstance"),u=Function.prototype;o in u||r(8).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,r){var e=r(2),i=r(14),o=r(19),u=r(72),s=r(22),c=r(3),a=r(37).f,f=r(16).f,l=r(8).f,h=r(45).trim,p="Number",v=e[p],g=v,y=v.prototype,d=o(r(36)(y))==p,b="trim"in String.prototype,S=function(t){var n=s(t,!1);if("string"==typeof n&&2<n.length){var r,e,i,o=(n=b?n.trim():h(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,c=n.slice(2),a=0,f=c.length;a<f;a++)if((u=c.charCodeAt(a))<48||i<u)return NaN;return parseInt(c,e)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function Number(t){var n=arguments.length<1?0:t,r=this;return r instanceof v&&(d?c(function(){y.valueOf.call(r)}):o(r)!=p)?u(new g(S(n)),r,v):S(n)};for(var _,x=r(7)?a(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),m=0;m<x.length;m++)i(g,_=x[m])&&!i(v,_)&&l(v,_,f(g,_));(v.prototype=y).constructor=v,r(12)(e,p,v)}},function(t,n,r){var e=r(0),f=r(20),s=r(102),l=r(74),i=1..toFixed,o=Math.floor,u=[0,0,0,0,0,0],h="Number.toFixed: incorrect invocation!",p=function(t,n){for(var r=-1,e=n;++r<6;)u[r]=(e+=t*u[r])%1e7,e=o(e/1e7)},v=function(t){for(var n=6,r=0;0<=--n;)u[n]=o((r+=u[n])/t),r=r%t*1e7},g=function(){for(var t=6,n="";0<=--t;)if(""!==n||0===t||0!==u[t]){var r=String(u[t]);n=""===n?r:n+l.call("0",7-r.length)+r}return n},y=function(t,n,r){return 0===n?r:n%2==1?y(t,n-1,r*t):y(t*t,n/2,r)};e(e.P+e.F*(!!i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(3)(function(){i.call({})})),"Number",{toFixed:function toFixed(t){var n,r,e,i,o=s(this,h),u=f(t),c="",a="0";if(u<0||20<u)throw RangeError(h);if(o!=o)return"NaN";if(o<=-1e21||1e21<=o)return String(o);if(o<0&&(c="-",o=-o),1e-21<o)if(r=(n=function(t){for(var n=0,r=t;4096<=r;)n+=12,r/=4096;for(;2<=r;)n+=1,r/=2;return n}(o*y(2,69,1))-69)<0?o*y(2,-n,1):o/y(2,n,1),r*=4503599627370496,0<(n=52-n)){for(p(0,r),e=u;7<=e;)p(1e7,0),e-=7;for(p(y(10,e,1),0),e=n-1;23<=e;)v(1<<23),e-=23;v(1<<e),p(1,1),v(2),a=g()}else p(0,r),p(1<<-n,0),a=g()+l.call("0",u);return a=0<u?c+((i=a.length)<=u?"0."+l.call("0",u-i)+a:a.slice(0,i-u)+"."+a.slice(i-u)):c+a}})},function(t,n,r){var e=r(0),i=r(3),o=r(102),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,Jt)})||!i(function(){u.call({})})),"Number",{toPrecision:function toPrecision(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return t===Jt?u.call(n):u.call(n,t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,r){var e=r(0),i=r(2).isFinite;e(e.S,"Number",{isFinite:function isFinite(t){return"number"==typeof t&&i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isInteger:r(103)})},function(t,n,r){var e=r(0);e(e.S,"Number",{isNaN:function isNaN(t){return t!=t}})},function(t,n,r){var e=r(0),i=r(103),o=Math.abs;e(e.S,"Number",{isSafeInteger:function isSafeInteger(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,r){var e=r(0);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,r){var e=r(0);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,r){var e=r(0),i=r(104);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,r){var e=r(0),i=r(105);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,r){var e=r(0),i=r(105);e(e.G+e.F*(parseInt!=i),{parseInt:i})},function(t,n,r){var e=r(0),i=r(104);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},function(t,n,r){var e=r(0),i=r(106),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(Infinity)==Infinity),"Math",{acosh:function acosh(t){return(t=+t)<1?NaN:94906265.62425156<t?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,r){var e=r(0),i=Math.asinh;e(e.S+e.F*!(i&&0<1/i(0)),"Math",{asinh:function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}})},function(t,n,r){var e=r(0),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,r){var e=r(0),i=r(75);e(e.S,"Math",{cbrt:function cbrt(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,r){var e=r(0),i=Math.exp;e(e.S,"Math",{cosh:function cosh(t){return(i(t=+t)+i(-t))/2}})},function(t,n,r){var e=r(0),i=r(76);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,r){var e=r(0);e(e.S,"Math",{fround:r(107)})},function(t,n,r){var e=r(0),a=Math.abs;e(e.S,"Math",{hypot:function hypot(t,n){for(var r,e,i=0,o=0,u=arguments.length,c=0;o<u;)c<(r=a(arguments[o++]))?(i=i*(e=c/r)*e+1,c=r):i+=0<r?(e=r/c)*e:r;return c===Infinity?Infinity:c*Math.sqrt(i)}})},function(t,n,r){var e=r(0),i=Math.imul;e(e.S+e.F*r(3)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function imul(t,n){var r=65535,e=+t,i=+n,o=r&e,u=r&i;return 0|o*u+((r&e>>>16)*u+o*(r&i>>>16)<<16>>>0)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log10:function log10(t){return Math.log(t)*Math.LOG10E}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log1p:r(106)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log2:function log2(t){return Math.log(t)/Math.LN2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{sign:r(75)})},function(t,n,r){var e=r(0),i=r(76),o=Math.exp;e(e.S+e.F*r(3)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function sinh(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,r){var e=r(0),i=r(76),o=Math.exp;e(e.S,"Math",{tanh:function tanh(t){var n=i(t=+t),r=i(-t);return n==Infinity?1:r==Infinity?-1:(n-r)/(o(t)+o(-t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{trunc:function trunc(t){return(0<t?Math.floor:Math.ceil)(t)}})},function(t,n,r){var e=r(0),o=r(35),u=String.fromCharCode,i=String.fromCodePoint;e(e.S+e.F*(!!i&&1!=i.length),"String",{fromCodePoint:function fromCodePoint(t){for(var n,r=[],e=arguments.length,i=0;i<e;){if(n=+arguments[i++],o(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?u(n):u(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},function(t,n,r){var e=r(0),u=r(15),c=r(6);e(e.S,"String",{raw:function raw(t){for(var n=u(t.raw),r=c(n.length),e=arguments.length,i=[],o=0;o<r;)i.push(String(n[o++])),o<e&&i.push(String(arguments[o]));return i.join("")}})},function(t,n,r){r(45)("trim",function(t){return function trim(){return t(this,3)}})},function(t,n,r){var e=r(0),i=r(55)(!1);e(e.P,"String",{codePointAt:function codePointAt(t){return i(this,t)}})},function(t,n,r){var e=r(0),u=r(6),c=r(77),a="endsWith",f=""[a];e(e.P+e.F*r(78)(a),"String",{endsWith:function endsWith(t){var n=c(this,t,a),r=1<arguments.length?arguments[1]:Jt,e=u(n.length),i=r===Jt?e:Math.min(u(r),e),o=String(t);return f?f.call(n,o,i):n.slice(i-o.length,i)===o}})},function(t,n,r){var e=r(0),i=r(77),o="includes";e(e.P+e.F*r(78)(o),"String",{includes:function includes(t){return!!~i(this,t,o).indexOf(t,1<arguments.length?arguments[1]:Jt)}})},function(t,n,r){var e=r(0);e(e.P,"String",{repeat:r(74)})},function(t,n,r){var e=r(0),i=r(6),o=r(77),u="startsWith",c=""[u];e(e.P+e.F*r(78)(u),"String",{startsWith:function startsWith(t){var n=o(this,t,u),r=i(Math.min(1<arguments.length?arguments[1]:Jt,n.length)),e=String(t);return c?c.call(n,e,r):n.slice(r,r+e.length)===e}})},function(t,n,r){var e=r(55)(!0);r(79)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return n.length<=r?{value:Jt,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){r(13)("anchor",function(n){return function anchor(t){return n(this,"a","name",t)}})},function(t,n,r){r(13)("big",function(t){return function big(){return t(this,"big","","")}})},function(t,n,r){r(13)("blink",function(t){return function blink(){return t(this,"blink","","")}})},function(t,n,r){r(13)("bold",function(t){return function bold(){return t(this,"b","","")}})},function(t,n,r){r(13)("fixed",function(t){return function fixed(){return t(this,"tt","","")}})},function(t,n,r){r(13)("fontcolor",function(n){return function fontcolor(t){return n(this,"font","color",t)}})},function(t,n,r){r(13)("fontsize",function(n){return function fontsize(t){return n(this,"font","size",t)}})},function(t,n,r){r(13)("italics",function(t){return function italics(){return t(this,"i","","")}})},function(t,n,r){r(13)("link",function(n){return function link(t){return n(this,"a","href",t)}})},function(t,n,r){r(13)("small",function(t){return function small(){return t(this,"small","","")}})},function(t,n,r){r(13)("strike",function(t){return function strike(){return t(this,"strike","","")}})},function(t,n,r){r(13)("sub",function(t){return function sub(){return t(this,"sub","","")}})},function(t,n,r){r(13)("sup",function(t){return function sup(){return t(this,"sup","","")}})},function(t,n,r){var e=r(0);e(e.S,"Array",{isArray:r(54)})},function(t,n,r){var h=r(18),e=r(0),p=r(9),v=r(108),g=r(81),y=r(6),d=r(82),b=r(83);e(e.S+e.F*!r(57)(function(t){Array.from(t)}),"Array",{from:function from(t){var n,r,e,i,o=p(t),u="function"==typeof this?this:Array,c=arguments.length,a=1<c?arguments[1]:Jt,f=a!==Jt,s=0,l=b(o);if(f&&(a=h(a,2<c?arguments[2]:Jt,2)),l==Jt||u==Array&&g(l))for(r=new u(n=y(o.length));s<n;s++)d(r,s,f?a(o[s],s):o[s]);else for(i=l.call(o),r=new u;!(e=i.next()).done;s++)d(r,s,f?v(i,a,[e.value,s],!0):e.value);return r.length=s,r}})},function(t,n,r){var e=r(0),i=r(82);e(e.S+e.F*r(3)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);t<n;)i(r,t,arguments[t++]);return r.length=n,r}})},function(t,n,r){var e=r(0),i=r(15),o=[].join;e(e.P+e.F*(r(48)!=Object||!r(21)(o)),"Array",{join:function join(t){return o.call(i(this),t===Jt?",":t)}})},function(t,n,r){var e=r(0),i=r(70),f=r(19),s=r(35),l=r(6),h=[].slice;e(e.P+e.F*r(3)(function(){i&&h.call(i)}),"Array",{slice:function slice(t,n){var r=l(this.length),e=f(this);if(n=n===Jt?r:n,"Array"==e)return h.call(this,t,n);for(var i=s(t,r),o=s(n,r),u=l(o-i),c=new Array(u),a=0;a<u;a++)c[a]="String"==e?this.charAt(i+a):this[i+a];return c}})},function(t,n,r){var e=r(0),i=r(10),o=r(9),u=r(3),c=[].sort,a=[1,2,3];e(e.P+e.F*(u(function(){a.sort(Jt)})||!u(function(){a.sort(null)})||!r(21)(c)),"Array",{sort:function sort(t){return t===Jt?c.call(o(this)):c.call(o(this),i(t))}})},function(t,n,r){var e=r(0),i=r(25)(0),o=r(21)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function forEach(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(4),i=r(54),o=r(5)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=Jt),e(n)&&null===(n=n[o])&&(n=Jt)),n===Jt?Array:n}},function(t,n,r){var e=r(0),i=r(25)(1);e(e.P+e.F*!r(21)([].map,!0),"Array",{map:function map(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(2);e(e.P+e.F*!r(21)([].filter,!0),"Array",{filter:function filter(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(3);e(e.P+e.F*!r(21)([].some,!0),"Array",{some:function some(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(4);e(e.P+e.F*!r(21)([].every,!0),"Array",{every:function every(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(109);e(e.P+e.F*!r(21)([].reduce,!0),"Array",{reduce:function reduce(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,r){var e=r(0),i=r(109);e(e.P+e.F*!r(21)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,r){var e=r(0),i=r(52)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!r(21)(o)),"Array",{indexOf:function indexOf(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(15),o=r(20),u=r(6),c=[].lastIndexOf,a=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(a||!r(21)(c)),"Array",{lastIndexOf:function lastIndexOf(t){if(a)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(1<arguments.length&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);0<=e;e--)if(e in n&&n[e]===t)return e||0;return-1}})},function(t,n,r){var e=r(0);e(e.P,"Array",{copyWithin:r(110)}),r(31)("copyWithin")},function(t,n,r){var e=r(0);e(e.P,"Array",{fill:r(85)}),r(31)("fill")},function(t,n,r){var e=r(0),i=r(25)(5),o="find",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{find:function find(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(31)(o)},function(t,n,r){var e=r(0),i=r(25)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function findIndex(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(31)(o)},function(t,n,r){r(38)("Array")},function(t,n,r){var e=r(2),o=r(72),i=r(8).f,u=r(37).f,c=r(56),a=r(50),f=e.RegExp,s=f,l=f.prototype,h=/a/g,p=/a/g,v=new f(h)!==h;if(r(7)&&(!v||r(3)(function(){return p[r(5)("match")]=!1,f(h)!=h||f(p)==p||"/a/i"!=f(h,"i")}))){f=function RegExp(t,n){var r=this instanceof f,e=c(t),i=n===Jt;return!r&&e&&t.constructor===f&&i?t:o(v?new s(e&&!i?t.source:t,n):s((e=t instanceof f)?t.source:t,e&&i?a.call(t):n),r?this:l,f)};for(var g=function(n){n in f||i(f,n,{configurable:!0,get:function(){return s[n]},set:function(t){s[n]=t}})},y=u(s),d=0;d<y.length;)g(y[d++]);(l.constructor=f).prototype=l,r(12)(e,"RegExp",f)}r(38)("RegExp")},function(t,n,r){r(113);var e=r(1),i=r(50),o=r(7),u="toString",c=/./[u],a=function(t){r(12)(RegExp.prototype,u,t,!0)};r(3)(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?a(function toString(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):Jt)}):c.name!=u&&a(function toString(){return c.call(this)})},function(t,n,r){var l=r(1),h=r(6),p=r(88),v=r(58);r(59)("match",1,function(e,i,f,s){return[function match(t){var n=e(this),r=t==Jt?Jt:t[i];return r!==Jt?r.call(t,n):new RegExp(t)[i](String(n))},function(t){var n=s(f,t,this);if(n.done)return n.value;var r=l(t),e=String(this);if(!r.global)return v(r,e);for(var i,o=r.unicode,u=[],c=r.lastIndex=0;null!==(i=v(r,e));){var a=String(i[0]);""===(u[c]=a)&&(r.lastIndex=p(e,h(r.lastIndex),o)),c++}return 0===c?null:u}]})},function(t,n,r){var w=r(1),e=r(9),E=r(6),O=r(20),M=r(88),I=r(58),P=Math.max,F=Math.min,h=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;r(59)("replace",2,function(i,o,x,m){return[function replace(t,n){var r=i(this),e=t==Jt?Jt:t[o];return e!==Jt?e.call(t,r,n):x.call(String(r),t,n)},function(t,n){var r=m(x,t,this,n);if(r.done)return r.value;var e=w(t),i=String(this),o="function"==typeof n;o||(n=String(n));var u=e.global;if(u){var c=e.unicode;e.lastIndex=0}for(var a=[];;){var f=I(e,i);if(
null===f)break;if(a.push(f),!u)break;""===String(f[0])&&(e.lastIndex=M(i,E(e.lastIndex),c))}for(var s,l="",h=0,p=0;p<a.length;p++){f=a[p];for(var v=String(f[0]),g=P(F(O(f.index),i.length),0),y=[],d=1;d<f.length;d++)y.push((s=f[d])===Jt?s:String(s));var b=f.groups;if(o){var S=[v].concat(y,g,i);b!==Jt&&S.push(b);var _=String(n.apply(Jt,S))}else _=getSubstitution(v,i,g,y,b,n);h<=g&&(l+=i.slice(h,g)+_,h=g+v.length)}return l+i.slice(h)}];function getSubstitution(o,u,c,a,f,t){var s=c+o.length,l=a.length,n=v;return f!==Jt&&(f=e(f),n=p),x.call(t,n,function(t,n){var r;switch(n.charAt(0)){case"$":return"$";case"&":return o;case"`":return u.slice(0,c);case"'":return u.slice(s);case"<":r=f[n.slice(1,-1)];break;default:var e=+n;if(0===e)return t;if(l<e){var i=h(e/10);return 0===i?t:i<=l?a[i-1]===Jt?n.charAt(1):a[i-1]+n.charAt(1):t}r=a[e-1]}return r===Jt?"":r})}})},function(t,n,r){var a=r(1),f=r(99),s=r(58);r(59)("search",1,function(e,i,u,c){return[function search(t){var n=e(this),r=t==Jt?Jt:t[i];return r!==Jt?r.call(t,n):new RegExp(t)[i](String(n))},function(t){var n=c(u,t,this);if(n.done)return n.value;var r=a(t),e=String(this),i=r.lastIndex;f(i,0)||(r.lastIndex=0);var o=s(r,e);return f(r.lastIndex,i)||(r.lastIndex=i),null===o?-1:o.index}]})},function(t,n,r){var s=r(56),b=r(1),S=r(51),_=r(88),x=r(6),m=r(58),l=r(87),e=r(3),w=Math.min,h=[].push,u="split",p="length",v="lastIndex",E=4294967295,O=!e(function(){RegExp(E,"y")});r(59)("split",2,function(i,o,g,y){var d;return d="c"=="abbc"[u](/(b)*/)[1]||4!="test"[u](/(?:)/,-1)[p]||2!="ab"[u](/(?:ab)*/)[p]||4!="."[u](/(.?)(.?)/)[p]||1<"."[u](/()()/)[p]||""[u](/.?/)[p]?function(t,n){var r=String(this);if(t===Jt&&0===n)return[];if(!s(t))return g.call(r,t,n);for(var e,i,o,u=[],c=0,a=n===Jt?E:n>>>0,f=new RegExp(t.source,(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":"")+"g");(e=l.call(f,r))&&!(c<(i=f[v])&&(u.push(r.slice(c,e.index)),1<e[p]&&e.index<r[p]&&h.apply(u,e.slice(1)),o=e[0][p],c=i,a<=u[p]));)f[v]===e.index&&f[v]++;return c===r[p]?!o&&f.test("")||u.push(""):u.push(r.slice(c)),a<u[p]?u.slice(0,a):u}:"0"[u](Jt,0)[p]?function(t,n){return t===Jt&&0===n?[]:g.call(this,t,n)}:g,[function split(t,n){var r=i(this),e=t==Jt?Jt:t[o];return e!==Jt?e.call(t,r,n):d.call(String(r),t,n)},function(t,n){var r=y(d,t,this,n,d!==g);if(r.done)return r.value;var e=b(t),i=String(this),o=S(e,RegExp),u=e.unicode,c=new o(O?e:"^(?:"+e.source+")",(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(O?"y":"g")),a=n===Jt?E:n>>>0;if(0===a)return[];if(0===i.length)return null===m(c,i)?[i]:[];for(var f=0,s=0,l=[];s<i.length;){c.lastIndex=O?s:0;var h,p=m(c,O?i:i.slice(s));if(null===p||(h=w(x(c.lastIndex+(O?0:s)),i.length))===f)s=_(i,s,u);else{if(l.push(i.slice(f,s)),l.length===a)return l;for(var v=1;v<=p.length-1;v++)if(l.push(p[v]),l.length===a)return l;s=f=h}}return l.push(i.slice(f)),l}]})},function(t,n,e){var r,i,o,u,c=e(29),a=e(2),f=e(18),s=e(44),l=e(0),h=e(4),p=e(10),v=e(39),g=e(40),y=e(51),d=e(89).set,b=e(90)(),S=e(91),_=e(114),x=e(60),m=e(115),w="Promise",E=a.TypeError,O=a.process,M=O&&O.versions,I=M&&M.v8||"",P=a[w],F="process"==s(O),A=function(){},k=i=S.f,N=!!function(){try{var t=P.resolve(1),n=(t.constructor={})[e(5)("species")]=function(t){t(A,A)};return(F||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof n&&0!==I.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(r){}}(),j=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},R=function(l,r){if(!l._n){l._n=!0;var e=l._c;b(function(){for(var f=l._v,s=1==l._s,t=0,n=function(t){var n,r,e,i=s?t.ok:t.fail,o=t.resolve,u=t.reject,c=t.domain;try{i?(s||(2==l._h&&D(l),l._h=1),!0===i?n=f:(c&&c.enter(),n=i(f),c&&(c.exit(),e=!0)),n===t.promise?u(E("Promise-chain cycle")):(r=j(n))?r.call(n,o,u):o(n)):u(f)}catch(a){c&&!e&&c.exit(),u(a)}};t<e.length;)n(e[t++]);l._c=[],l._n=!1,r&&!l._h&&T(l)})}},T=function(o){d.call(a,function(){var t,n,r,e=o._v,i=L(o);if(i&&(t=_(function(){F?O.emit("unhandledRejection",e,o):(n=a.onunhandledrejection)?n({promise:o,reason:e}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",e)}),o._h=F||L(o)?2:1),o._a=Jt,i&&t.e)throw t.v})},L=function(t){return 1!==t._h&&0===(t._a||t._c).length},D=function(n){d.call(a,function(){var t;F?O.emit("rejectionHandled",n):(t=a.onrejectionhandled)&&t({promise:n,reason:n._v})})},C=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},U=function(r){var e,i=this;if(!i._d){i._d=!0,i=i._w||i;try{if(i===r)throw E("Promise can't be resolved itself");(e=j(r))?b(function(){var t={_w:i,_d:!1};try{e.call(r,f(U,t,1),f(C,t,1))}catch(n){C.call(t,n)}}):(i._v=r,i._s=1,R(i,!1))}catch(t){C.call({_w:i,_d:!1},t)}}};N||(P=function Promise(t){v(this,P,w,"_h"),p(t),r.call(this);try{t(f(U,this,1),f(C,this,1))}catch(n){C.call(this,n)}},(r=function Promise(t){this._c=[],this._a=Jt,this._s=0,this._d=!1,this._v=Jt,this._h=0,this._n=!1}).prototype=e(41)(P.prototype,{then:function then(t,n){var r=k(y(this,P));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=F?O.domain:Jt,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},"catch":function(t){return this.then(Jt,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=f(U,t,1),this.reject=f(C,t,1)},S.f=k=function(t){return t===P||t===u?new o(t):i(t)}),l(l.G+l.W+l.F*!N,{Promise:P}),e(43)(P,w),e(38)(w),u=e(26)[w],l(l.S+l.F*!N,w,{reject:function reject(t){var n=k(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!N),w,{resolve:function resolve(t){return m(c&&this===u?P:this,t)}}),l(l.S+l.F*!(N&&e(57)(function(t){P.all(t)["catch"](A)})),w,{all:function all(t){var u=this,n=k(u),c=n.resolve,a=n.reject,r=_(function(){var e=[],i=0,o=1;g(t,!1,function(t){var n=i++,r=!1;e.push(Jt),o++,u.resolve(t).then(function(t){r||(r=!0,e[n]=t,--o||c(e))},a)}),--o||c(e)});return r.e&&a(r.v),n.promise},race:function race(t){var n=this,r=k(n),e=r.reject,i=_(function(){g(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}})},function(t,n,r){var e=r(120),i=r(42),o="WeakSet";r(61)(o,function(t){return function WeakSet(){return t(this,0<arguments.length?arguments[0]:Jt)}},{add:function add(t){return e.def(i(this,o),t,!0)}},e,!1,!0)},function(t,n,r){var e=r(0),o=r(10),u=r(1),c=(r(2).Reflect||{}).apply,a=Function.apply;e(e.S+e.F*!r(3)(function(){c(function(){})}),"Reflect",{apply:function apply(t,n,r){var e=o(t),i=u(r);return c?c(e,n,i):a.call(e,n,i)}})},function(t,n,r){var e=r(0),c=r(36),a=r(10),f=r(1),s=r(4),i=r(3),l=r(100),h=(r(2).Reflect||{}).construct,p=i(function(){function F(){}return!(h(function(){},[],F)instanceof F)}),v=!i(function(){h(function(){})});e(e.S+e.F*(p||v),"Reflect",{construct:function construct(t,n){a(t),f(n);var r=arguments.length<3?t:a(arguments[2]);if(v&&!p)return h(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(l.apply(t,e))}var i=r.prototype,o=c(s(i)?i:Object.prototype),u=Function.apply.call(t,o,n);return s(u)?u:o}})},function(t,n,r){var i=r(8),e=r(0),o=r(1),u=r(22);e(e.S+e.F*r(3)(function(){Reflect.defineProperty(i.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(t,n,r){o(t),n=u(n,!0),o(r);try{return i.f(t,n,r),!0}catch(e){return!1}}})},function(t,n,r){var e=r(0),i=r(16).f,o=r(1);e(e.S,"Reflect",{deleteProperty:function deleteProperty(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},function(t,n,r){var e=r(0),i=r(1),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};r(80)(o,"Object",function(){var t,n=this._k;do{if(n.length<=this._i)return{value:Jt,done:!0}}while(!((t=n[this._i++])in this._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function enumerate(t){return new o(t)}})},function(t,n,r){var o=r(16),u=r(17),c=r(14),e=r(0),a=r(4),f=r(1);e(e.S,"Reflect",{get:function get(t,n){var r,e,i=arguments.length<3?t:arguments[2];return f(t)===i?t[n]:(r=o.f(t,n))?c(r,"value")?r.value:r.get!==Jt?r.get.call(i):Jt:a(e=u(t))?get(e,n,i):void 0}})},function(t,n,r){var e=r(16),i=r(0),o=r(1);i(i.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,n){return e.f(o(t),n)}})},function(t,n,r){var e=r(0),i=r(17),o=r(1);e(e.S,"Reflect",{getPrototypeOf:function getPrototypeOf(t){return i(o(t))}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{has:function has(t,n){return n in t}})},function(t,n,r){var e=r(0),i=r(1),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function isExtensible(t){return i(t),!o||o(t)}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{ownKeys:r(121)})},function(t,n,r){var e=r(0),i=r(1),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function preventExtensions(t){i(t);try{return o&&o(t),!0}catch(n){return!1}}})},function(t,n,r){var c=r(8),a=r(16),f=r(17),s=r(14),e=r(0),l=r(32),h=r(1),p=r(4);e(e.S,"Reflect",{set:function set(t,n,r){var e,i,o=arguments.length<4?t:arguments[3],u=a.f(h(t),n);if(!u){if(p(i=f(t)))return set(i,n,r,o);u=l(0)}if(s(u,"value")){if(!1===u.writable||!p(o))return!1;if(e=a.f(o,n)){if(e.get||e.set||!1===e.writable)return!1;e.value=r,c.f(o,n,e)}else c.f(o,n,l(0,r));return!0}return u.set!==Jt&&(u.set.call(o,r),!0)}})},function(t,n,r){var e=r(0),i=r(71);i&&e(e.S,"Reflect",{setPrototypeOf:function setPrototypeOf(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(r){return!1}}})},function(t,n,r){var e=r(0);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,r){var e=r(0),i=r(9),o=r(22);e(e.P+e.F*r(3)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},function(t,n,r){var e=r(0),i=r(252);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,r){var e=r(3),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return 9<t?t:"0"+t};t.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!e(function(){o.call(new Date(NaN))})?function toISOString(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":9999<n?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(99<r?r:"0"+u(r))+"Z"}:o},function(t,n,r){var e=Date.prototype,i="Invalid Date",o="toString",u=e[o],c=e.getTime;new Date(NaN)+""!=i&&r(12)(e,o,function toString(){var t=c.call(this);return t==t?u.call(this):i})},function(t,n,r){var e=r(5)("toPrimitive"),i=Date.prototype;e in i||r(11)(i,e,r(255))},function(t,n,r){var e=r(1),i=r(22);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),"number"!=t)}},function(t,n,r){var e=r(0),i=r(62),o=r(92),f=r(1),s=r(35),l=r(6),u=r(4),c=r(2).ArrayBuffer,h=r(51),p=o.ArrayBuffer,v=o.DataView,a=i.ABV&&c.isView,g=p.prototype.slice,y=i.VIEW,d="ArrayBuffer";e(e.G+e.W+e.F*(c!==p),{ArrayBuffer:p}),e(e.S+e.F*!i.CONSTR,d,{isView:function isView(t){return a&&a(t)||u(t)&&y in t}}),e(e.P+e.U+e.F*r(3)(function(){return!new p(2).slice(1,Jt).byteLength}),d,{slice:function slice(t,n){if(g!==Jt&&n===Jt)return g.call(f(this),t);for(var r=f(this).byteLength,e=s(t,r),i=s(n===Jt?r:n,r),o=new(h(this,p))(l(i-e)),u=new v(this),c=new v(o),a=0;e<i;)c.setUint8(a++,u.getUint8(e++));return o}}),r(38)(d)},function(t,n,r){var e=r(0);e(e.G+e.W+e.F*!r(62).ABV,{DataView:r(92).DataView})},function(t,n,r){r(27)("Int8",1,function(e){return function Int8Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint8",1,function(e){return function Uint8Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint8",1,function(e){return function Uint8ClampedArray(t,n,r){return e(this,t,n,r)}},!0)},function(t,n,r){r(27)("Int16",2,function(e){return function Int16Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint16",2,function(e){return function Uint16Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Int32",4,function(e){return function Int32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint32",4,function(e){return function Uint32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Float32",4,function(e){return function Float32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Float64",8,function(e){return function Float64Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){var e=r(0),i=r(52)(!0);e(e.P,"Array",{includes:function includes(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(31)("includes")},function(t,n,r){var e=r(0),i=r(123),o=r(9),u=r(6),c=r(10),a=r(84);e(e.P,"Array",{flatMap:function flatMap(t){var n,r,e=o(this);return c(t),n=u(e.length),r=a(e,0),i(r,e,e,n,0,1,t,arguments[1]),r}}),r(31)("flatMap")},function(t,n,r){var e=r(0),i=r(123),o=r(9),u=r(6),c=r(20),a=r(84);e(e.P,"Array",{flatten:function flatten(){var t=arguments[0],n=o(this),r=u(n.length),e=a(n,0);return i(e,n,n,r,0,t===Jt?1:c(t)),e}}),r(31)("flatten")},function(t,n,r){var e=r(0),i=r(55)(!0);e(e.P,"String",{at:function at(t){return i(this,t)}})},function(t,n,r){var e=r(0),i=r(124),o=r(60),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);e(e.P+e.F*u,"String",{padStart:function padStart(t){return i(this,t,1<arguments.length?arguments[1]:Jt,!0)}})},function(t,n,r){var e=r(0),i=r(124),o=r(60),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);e(e.P+e.F*u,"String",{padEnd:function padEnd(t){return i(this,t,1<arguments.length?arguments[1]:Jt,!1)}})},function(t,n,r){r(45)("trimLeft",function(t){return function trimLeft(){return t(this,1)}},"trimStart")},function(t,n,r){r(45)("trimRight",function(t){return function trimRight(){return t(this,2)}},"trimEnd")},function(t,n,r){var e=r(0),i=r(23),o=r(6),u=r(56),c=r(50),a=RegExp.prototype,f=function(t,n){this._r=t,this._s=n};r(80)(f,"RegExp String",function next(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function matchAll(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in a?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new f(e,n)}})},function(t,n,r){r(67)("asyncIterator")},function(t,n,r){r(67)("observable")},function(t,n,r){var e=r(0),a=r(121),f=r(15),s=r(16),l=r(82);e(e.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var n,r,e=f(t),i=s.f,o=a(e),u={},c=0;c<o.length;)(r=i(e,n=o[c++]))!==Jt&&l(u,n,r);return u}})},function(t,n,r){var e=r(0),i=r(125)(!1);e(e.S,"Object",{values:function values(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(125)(!0);e(e.S,"Object",{entries:function entries(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(9),o=r(10),u=r(8);r(7)&&e(e.P+r(63),"Object",{__defineGetter__:function __defineGetter__(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(9),o=r(10),u=r(8);r(7)&&e(e.P+r(63),"Object",{__defineSetter__:function __defineSetter__(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(9),o=r(22),u=r(17),c=r(16).f;r(7)&&e(e.P+r(63),"Object",{__lookupGetter__:function __lookupGetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.get}while(r=u(r))}})},function(t,n,r){var e=r(0),i=r(9),o=r(22),u=r(17),c=r(16).f;r(7)&&e(e.P+r(63),"Object",{__lookupSetter__:function __lookupSetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.set}while(r=u(r))}})},function(t,n,r){var e=r(0);e(e.P+e.R,"Map",{toJSON:r(126)("Map")})},function(t,n,r){var e=r(0);e(e.P+e.R,"Set",{toJSON:r(126)("Set")})},function(t,n,r){r(64)("Map")},function(t,n,r){r(64)("Set")},function(t,n,r){r(64)("WeakMap")},function(t,n,r){r(64)("WeakSet")},function(t,n,r){r(65)("Map")},function(t,n,r){r(65)("Set")},function(t,n,r){r(65)("WeakMap")},function(t,n,r){r(65)("WeakSet")},function(t,n,r){var e=r(0);e(e.G,{global:r(2)})},function(t,n,r){var e=r(0);e(e.S,"System",{global:r(2)})},function(t,n,r){var e=r(0),i=r(19);e(e.S,"Error",{isError:function isError(t){return"Error"===i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clamp:function clamp(t,n,r){return Math.min(r,Math.max(n,t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,n,r){var e=r(0),i=180/Math.PI;e(e.S,"Math",{degrees:function degrees(t){return t*i}})},function(t,n,r){var e=r(0),o=r(128),u=r(107);e(e.S,"Math",{fscale:function fscale(t,n,r,e,i){return u(o(t,n,r,e,i))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{iaddh:function iaddh(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)+(e>>>0)+((i&o|(i|o)&~(i+o>>>0))>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{isubh:function isubh(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)-(e>>>0)-((~i&o|~(i^o)&i-o>>>0)>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{imulh:function imulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>16,c=e>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>16)+((i*c>>>0)+(65535&a)>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,n,r){var e=r(0),i=Math.PI/180;e(e.S,"Math",{radians:function radians(t){return t*i}})},function(t,n,r){var e=r(0);e(e.S,"Math",{scale:r(128)})},function(t,n,r){var e=r(0);e(e.S,"Math",{umulh:function umulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>>16,c=e>>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>>16)+((i*c>>>0)+(65535&a)>>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{signbit:function signbit(t){return(t=+t)!=t?t:0==t?1/t==Infinity:0<t}})},function(t,n,r){var e=r(0),i=r(26),o=r(2),u=r(51),c=r(115);e(e.P+e.R,"Promise",{"finally":function(n){var r=u(this,i.Promise||o.Promise),t="function"==typeof n;return this.then(t?function(t){return c(r,n()).then(function(){return t})}:n,t?function(t){return c(r,n()).then(function(){throw t})}:n)}})},function(t,n,r){var e=r(0),i=r(91),o=r(114);e(e.S,"Promise",{"try":function(t){var n=i.f(this),r=o(t);return(r.e?n.reject:n.resolve)(r.v),n.promise}})},function(t,n,r){var e=r(28),i=r(1),o=e.key,u=e.set;e.exp({defineMetadata:function defineMetadata(t,n,r,e){u(t,n,i(r),o(e))}})},function(t,n,r){var e=r(28),o=r(1),u=e.key,c=e.map,a=e.store;e.exp({deleteMetadata:function deleteMetadata(t,n){var r=arguments.length<3?Jt:u(arguments[2]),e=c(o(n),r,!1);if(e===Jt||!e["delete"](t))return!1;if(e.size)return!0;var i=a.get(n);return i["delete"](r),!!i.size||a["delete"](n)}})},function(t,n,r){var e=r(28),i=r(1),o=r(17),u=e.has,c=e.get,a=e.key,f=function(t,n,r){if(u(t,n,r))return c(t,n,r);var e=o(n);return null!==e?f(t,e,r):Jt};e.exp({getMetadata:function getMetadata(t,n){return f(t,i(n),arguments.length<3?Jt:a(arguments[2]))}})},function(t,n,r){var o=r(118),u=r(127),e=r(28),i=r(1),c=r(17),a=e.keys,f=e.key,s=function(t,n){var r=a(t,n),e=c(t);if(null===e)return r;var i=s(e,n);return i.length?r.length?u(new o(r.concat(i))):i:r};e.exp({getMetadataKeys:function getMetadataKeys(t){return s(i(t),arguments.length<2?Jt:f(arguments[1]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.get,u=e.key;e.exp({getOwnMetadata:function getOwnMetadata(t,n){return o(t,i(n),arguments.length<3?Jt:u(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function getOwnMetadataKeys(t){return o(i(t),arguments.length<2?Jt:u(arguments[1]))}})},function(t,n,r){var e=r(28),i=r(1),o=r(17),u=e.has,c=e.key,a=function(t,n,r){if(u(t,n,r))return!0;var e=o(n);return null!==e&&a(t,e,r)};e.exp({hasMetadata:function hasMetadata(t,n){return a(t,i(n),arguments.length<3?Jt:c(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.has,u=e.key;e.exp({hasOwnMetadata:function hasOwnMetadata(t,n){return o(t,i(n),arguments.length<3?Jt:u(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=r(10),u=e.key,c=e.set;e.exp({metadata:function metadata(r,e){return function decorator(t,n){c(r,e,(n!==Jt?i:o)(t),u(n))}}})},function(t,n,r){var e=r(0),i=r(90)(),o=r(2).process,u="process"==r(19)(o);e(e.G,{asap:function asap(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},function(t,n,r){var e=r(0),o=r(2),u=r(26),i=r(90)(),c=r(5)("observable"),a=r(10),f=r(1),s=r(39),l=r(41),h=r(11),p=r(40),v=p.RETURN,g=function(t){return null==t?Jt:a(t)},y=function(t){var n=t._c;n&&(t._c=Jt,n())},d=function(t){return t._o===Jt},b=function(t){d(t)||(t._o=Jt,y(t))},S=function(t,n){f(t),this._c=Jt,this._o=t,t=new _(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:a(r),this._c=r)}catch(i){return void t.error(i)}d(this)&&y(this)};S.prototype=l({},{unsubscribe:function unsubscribe(){b(this)}});var _=function(t){this._s=t};_.prototype=l({},{next:function next(t){var n=this._s;if(!d(n)){var r=n._o;try{var e=g(r.next);if(e)return e.call(r,t)}catch(i){try{b(n)}finally{throw i}}}},error:function error(t){var n=this._s;if(d(n))throw t;var r=n._o;n._o=Jt;try{var e=g(r.error);if(!e)throw t;t=e.call(r,t)}catch(i){try{y(n)}finally{throw i}}return y(n),t},complete:function complete(t){var n=this._s;if(!d(n)){var r=n._o;n._o=Jt;try{var e=g(r.complete);t=e?e.call(r,t):Jt}catch(i){try{y(n)}finally{throw i}}return y(n),t}}});var x=function Observable(t){s(this,x,"Observable","_f")._f=a(t)};l(x.prototype,{subscribe:function subscribe(t){return new S(t,this._f)},forEach:function forEach(i){var n=this;return new(u.Promise||o.Promise)(function(t,r){a(i);var e=n.subscribe({next:function(t){try{return i(t)}catch(n){r(n),e.unsubscribe()}},error:r,complete:t})})}}),l(x,{from:function from(e){var t="function"==typeof this?this:x,n=g(f(e)[c]);if(n){var r=f(n.call(e));return r.constructor===t?r:new t(function(t){return r.subscribe(t)})}return new t(function(n){var r=!1;return i(function(){if(!r){try{if(p(e,!1,function(t){if(n.next(t),r)return v})===v)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function of(){for(var t=0,n=arguments.length,e=new Array(n);t<n;)e[t]=arguments[t++];return new("function"==typeof this?this:x)(function(n){var r=!1;return i(function(){if(!r){for(var t=0;t<e.length;++t)if(n.next(e[t]),r)return;n.complete()}}),function(){r=!0}})}}),h(x.prototype,c,function(){return this}),e(e.G,{Observable:x}),r(38)("Observable")},function(t,n,r){var e=r(0),i=r(89);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,r){for(var e=r(86),i=r(34),o=r(12),u=r(2),c=r(11),a=r(46),f=r(5),s=f("iterator"),l=f("toStringTag"),h=a.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),g=0;g<v.length;g++){var y,d=v[g],b=p[d],S=u[d],_=S&&S.prototype;if(_&&(_[s]||c(_,s,h),_[l]||c(_,l,d),a[d]=h,b))for(y in e)_[y]||o(_,y,e[y],!0)}},function(t,n,r){var e=r(2),i=r(0),o=r(60),u=[].slice,c=/MSIE .\./.test(o),a=function(i){return function(t,n){var r=2<arguments.length,e=!!r&&u.call(arguments,2);return i(r?function(){("function"==typeof t?t:Function(t)).apply(this,e)}:t,n)}};i(i.G+i.B+i.F*c,{setTimeout:a(e.setTimeout),setInterval:a(e.setInterval)})}]),"undefined"!=typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):i.core=e}(1,1);
//# sourceMappingURL=shim.min.js.map
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).CodeMirror=t()}(this,function(){"use strict";var e=navigator.userAgent,t=navigator.platform,g=/gecko\/\d/i.test(e),r=/MSIE \d/.test(e),n=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),i=/Edge\/(\d+)/.exec(e),x=r||n||i,C=x&&(r?document.documentMode||6:+(i||n)[1]),b=!i&&/WebKit\//.test(e),o=b&&/Qt\/\d+\.\d+/.test(e),l=!i&&/Chrome\//.test(e),v=/Opera\//.test(e),a=/Apple Computer/.test(navigator.vendor),s=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),u=/PhantomJS/.test(e),c=!i&&/AppleWebKit/.test(e)&&/Mobile\/\w+/.test(e),h=/Android/.test(e),f=c||h||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),w=c||/Mac/.test(t),d=/\bCrOS\b/.test(e),p=/win/i.test(t),m=v&&e.match(/Version\/(\d*\.\d*)/);(m=m&&Number(m[1]))&&15<=m&&(b=!(v=!1));var y=w&&(o||v&&(null==m||m<12.11)),S=g||x&&9<=C;function L(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var k,T=function(e,t){var r=e.className,n=L(t).exec(r);if(n){var i=r.slice(n.index+n[0].length);e.className=r.slice(0,n.index)+(i?n[1]+i:"")}};function M(e){for(var t=e.childNodes.length;0<t;--t)e.removeChild(e.firstChild);return e}function N(e,t){return M(e).appendChild(t)}function A(e,t,r,n){var i=document.createElement(e);if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t));else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o]);return i}function O(e,t,r,n){var i=A(e,t,r,n);return i.setAttribute("role","presentation"),i}function D(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t);do{if(11==t.nodeType&&(t=t.host),t==e)return!0}while(t=t.parentNode)}function W(){var t;try{t=document.activeElement}catch(e){t=document.body||null}for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}function H(e,t){var r=e.className;L(t).test(r)||(e.className+=(r?" ":"")+t)}function F(e,t){for(var r=e.split(" "),n=0;n<r.length;n++)r[n]&&!L(r[n]).test(t)&&(t+=" "+r[n]);return t}k=document.createRange?function(e,t,r,n){var i=document.createRange();return i.setEnd(n||e,r),i.setStart(e,t),i}:function(e,t,r){var n=document.body.createTextRange();try{n.moveToElementText(e.parentNode)}catch(e){return n}return n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n};var P=function(e){e.select()};function E(e){var t=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,t)}}function I(e,t,r){for(var n in t=t||{},e)!e.hasOwnProperty(n)||!1===r&&t.hasOwnProperty(n)||(t[n]=e[n]);return t}function z(e,t,r,n,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length);for(var o=n||0,l=i||0;;){var s=e.indexOf("\t",o);if(s<0||t<=s)return l+(t-o);l+=s-o,l+=r-l%r,o=s+1}}c?P=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:x&&(P=function(e){try{e.select()}catch(e){}});var R=function(){this.id=null,this.f=null,this.time=0,this.handler=E(this.onTimeout,this)};function B(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r;return-1}R.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-new Date)},R.prototype.set=function(e,t){this.f=t;var r=+new Date+e;(!this.id||r<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=r)};var G=30,U={toString:function(){return"CodeMirror.Pass"}},V={scroll:!1},K={origin:"*mouse"},j={origin:"+move"};function X(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("\t",n);-1==o&&(o=e.length);var l=o-n;if(o==e.length||t<=i+l)return n+Math.min(l,t-i);if(i+=o-n,n=o+1,t<=(i+=r-i%r))return n}}var Y=[""];function _(e){for(;Y.length<=e;)Y.push($(Y)+" ");return Y[e]}function $(e){return e[e.length-1]}function q(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n);return r}function Z(){}function Q(e,t){var r;return r=Object.create?Object.create(e):(Z.prototype=e,new Z),t&&I(t,r),r}var J=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function ee(e){return/\w/.test(e)||""<e&&(e.toUpperCase()!=e.toLowerCase()||J.test(e))}function te(e,t){return t?!!(-1<t.source.indexOf("\\w")&&ee(e))||t.test(e):ee(e)}function re(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return;return 1}var ne=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function ie(e){return 768<=e.charCodeAt(0)&&ne.test(e)}function oe(e,t,r){for(;(r<0?0<t:t<e.length)&&ie(e.charAt(t));)t+=r;return t}function le(e,t,r){for(var n=r<t?-1:1;;){if(t==r)return t;var i=(t+r)/2,o=n<0?Math.ceil(i):Math.floor(i);if(o==t)return e(o)?t:r;e(o)?r=o:t=o+n}}var se=null;function ae(e,t,r){var n;se=null;for(var i=0;i<e.length;++i){var o=e[i];if(o.from<t&&o.to>t)return i;o.to==t&&(o.from!=o.to&&"before"==r?n=i:se=i),o.from==t&&(o.from!=o.to&&"before"!=r?n=i:se=i)}return null!=n?n:se}var ue,ce,he,fe,de,pe,ge,ve=(ue="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",ce="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",he=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,fe=/[stwN]/,de=/[LRr]/,pe=/[Lb1n]/,ge=/[1n]/,function(e,t){var r="ltr"==t?"L":"R";if(0==e.length||"ltr"==t&&!he.test(e))return!1;for(var n,i=e.length,o=[],l=0;l<i;++l)o.push((n=e.charCodeAt(l))<=247?ue.charAt(n):1424<=n&&n<=1524?"R":1536<=n&&n<=1785?ce.charAt(n-1536):1774<=n&&n<=2220?"r":8192<=n&&n<=8203?"w":8204==n?"b":"L");for(var s=0,a=r;s<i;++s){var u=o[s];"m"==u?o[s]=a:a=u}for(var c=0,h=r;c<i;++c){var f=o[c];"1"==f&&"r"==h?o[c]="n":de.test(f)&&"r"==(h=f)&&(o[c]="R")}for(var d=1,p=o[0];d<i-1;++d){var g=o[d];"+"==g&&"1"==p&&"1"==o[d+1]?o[d]="1":","!=g||p!=o[d+1]||"1"!=p&&"n"!=p||(o[d]=p),p=g}for(var v=0;v<i;++v){var m=o[v];if(","==m)o[v]="N";else if("%"==m){var y=void 0;for(y=v+1;y<i&&"%"==o[y];++y);for(var b=v&&"!"==o[v-1]||y<i&&"1"==o[y]?"1":"N",w=v;w<y;++w)o[w]=b;v=y-1}}for(var x=0,C=r;x<i;++x){var S=o[x];"L"==C&&"1"==S?o[x]="L":de.test(S)&&(C=S)}for(var L=0;L<i;++L)if(fe.test(o[L])){var k=void 0;for(k=L+1;k<i&&fe.test(o[k]);++k);for(var T="L"==(L?o[L-1]:r),M=T==("L"==(k<i?o[k]:r))?T?"L":"R":r,N=L;N<k;++N)o[N]=M;L=k-1}for(var O,A=[],D=0;D<i;)if(pe.test(o[D])){var W=D;for(++D;D<i&&pe.test(o[D]);++D);A.push(new me(0,W,D))}else{var H=D,F=A.length,P="rtl"==t?1:0;for(++D;D<i&&"L"!=o[D];++D);for(var E=H;E<D;)if(ge.test(o[E])){H<E&&(A.splice(F,0,new me(1,H,E)),F+=P);var I=E;for(++E;E<D&&ge.test(o[E]);++E);A.splice(F,0,new me(2,I,E)),F+=P,H=E}else++E;H<D&&A.splice(F,0,new me(1,H,D))}return"ltr"==t&&(1==A[0].level&&(O=e.match(/^\s+/))&&(A[0].from=O[0].length,A.unshift(new me(0,0,O[0].length))),1==$(A).level&&(O=e.match(/\s+$/))&&($(A).to-=O[0].length,A.push(new me(0,i-O[0].length,i)))),"rtl"==t?A.reverse():A});function me(e,t,r){this.level=e,this.from=t,this.to=r}function ye(e,t){var r=e.order;return null==r&&(r=e.order=ve(e.text,t)),r}var be=[],we=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1);else if(e.attachEvent)e.attachEvent("on"+t,r);else{var n=e._handlers||(e._handlers={});n[t]=(n[t]||be).concat(r)}};function xe(e,t){return e._handlers&&e._handlers[t]||be}function Ce(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1);else if(e.detachEvent)e.detachEvent("on"+t,r);else{var n=e._handlers,i=n&&n[t];if(i){var o=B(i,r);-1<o&&(n[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function Se(e,t){var r=xe(e,t);if(r.length)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n)}function Le(e,t,r){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),Se(e,r||t.type,e,t),Ae(t)||t.codemirrorIgnore}function ke(e){var t=e._handlers&&e._handlers.cursorActivity;if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)-1==B(r,t[n])&&r.push(t[n])}function Te(e,t){return 0<xe(e,t).length}function Me(e){e.prototype.on=function(e,t){we(this,e,t)},e.prototype.off=function(e,t){Ce(this,e,t)}}function Ne(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Oe(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function Ae(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function De(e){Ne(e),Oe(e)}function We(e){return e.target||e.srcElement}function He(e){var t=e.which;return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),w&&e.ctrlKey&&1==t&&(t=3),t}var Fe,Pe,Ee=function(){if(x&&C<9)return!1;var e=A("div");return"draggable"in e||"dragDrop"in e}();function Ie(e){if(null==Fe){var t=A("span","​");N(e,A("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Fe=t.offsetWidth<=1&&2<t.offsetHeight&&!(x&&C<8))}var r=Fe?A("span","​"):A("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return r.setAttribute("cm-text",""),r}function ze(e){if(null!=Pe)return Pe;var t=N(e,document.createTextNode("AخA")),r=k(t,0,1).getBoundingClientRect(),n=k(t,1,2).getBoundingClientRect();return M(e),r&&r.left!=r.right&&(Pe=n.right-r.right<3)}var Re,Be=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;t<=n;){var i=e.indexOf("\n",t);-1==i&&(i=e.length);var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),l=o.indexOf("\r");-1!=l?(r.push(o.slice(0,l)),t+=l+1):(r.push(o),t=i+1)}return r}:function(e){return e.split(/\r\n?|\n/)},Ge=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){var t;try{t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},Ue="oncopy"in(Re=A("div"))||(Re.setAttribute("oncopy","return;"),"function"==typeof Re.oncopy),Ve=null;var Ke={},je={};function Xe(e){if("string"==typeof e&&je.hasOwnProperty(e))e=je[e];else if(e&&"string"==typeof e.name&&je.hasOwnProperty(e.name)){var t=je[e.name];"string"==typeof t&&(t={name:t}),(e=Q(t,e)).name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Xe("application/xml");if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Xe("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function Ye(e,t){t=Xe(t);var r=Ke[t.name];if(!r)return Ye(e,"text/plain");var n=r(e,t);if(_e.hasOwnProperty(t.name)){var i=_e[t.name];for(var o in i)i.hasOwnProperty(o)&&(n.hasOwnProperty(o)&&(n["_"+o]=n[o]),n[o]=i[o])}if(n.name=t.name,t.helperType&&(n.helperType=t.helperType),t.modeProps)for(var l in t.modeProps)n[l]=t.modeProps[l];return n}var _e={};function $e(e,t){I(t,_e.hasOwnProperty(e)?_e[e]:_e[e]={})}function qe(e,t){if(!0===t)return t;if(e.copyState)return e.copyState(t);var r={};for(var n in t){var i=t[n];i instanceof Array&&(i=i.concat([])),r[n]=i}return r}function Ze(e,t){for(var r;e.innerMode&&(r=e.innerMode(t))&&r.mode!=e;)t=r.state,e=r.mode;return r||{mode:e,state:t}}function Qe(e,t,r){return!e.startState||e.startState(t,r)}var Je=function(e,t,r){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=r};function et(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.");for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize();if(t<o){r=i;break}t-=o}return r.lines[t]}function tt(e,r,n){var i=[],o=r.line;return e.iter(r.line,n.line+1,function(e){var t=e.text;o==n.line&&(t=t.slice(0,n.ch)),o==r.line&&(t=t.slice(r.ch)),i.push(t),++o}),i}function rt(e,t,r){var n=[];return e.iter(t,r,function(e){n.push(e.text)}),n}function nt(e,t){var r=t-e.height;if(r)for(var n=e;n;n=n.parent)n.height+=r}function it(e){if(null==e.parent)return null;for(var t=e.parent,r=B(t.lines,e),n=t.parent;n;n=(t=n).parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize();return r+t.first}function ot(e,t){var r=e.first;e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height;if(t<o){e=i;continue e}t-=o,r+=i.chunkSize()}return r}while(!e.lines);for(var l=0;l<e.lines.length;++l){var s=e.lines[l].height;if(t<s)break;t-=s}return r+l}function lt(e,t){return t>=e.first&&t<e.first+e.size}function st(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function at(e,t,r){if(void 0===r&&(r=null),!(this instanceof at))return new at(e,t,r);this.line=e,this.ch=t,this.sticky=r}function ut(e,t){return e.line-t.line||e.ch-t.ch}function ct(e,t){return e.sticky==t.sticky&&0==ut(e,t)}function ht(e){return at(e.line,e.ch)}function ft(e,t){return ut(e,t)<0?t:e}function dt(e,t){return ut(e,t)<0?e:t}function pt(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function gt(e,t){if(t.line<e.first)return at(e.first,0);var r,n,i,o=e.first+e.size-1;return t.line>o?at(o,et(e,o).text.length):(n=et(e,(r=t).line).text.length,null==(i=r.ch)||n<i?at(r.line,n):i<0?at(r.line,0):r)}function vt(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=gt(e,t[n]);return r}Je.prototype.eol=function(){return this.pos>=this.string.length},Je.prototype.sol=function(){return this.pos==this.lineStart},Je.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Je.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Je.prototype.eat=function(e){var t=this.string.charAt(this.pos);if("string"==typeof e?t==e:t&&(e.test?e.test(t):e(t)))return++this.pos,t},Je.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},Je.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Je.prototype.skipToEnd=function(){this.pos=this.string.length},Je.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos);if(-1<t)return this.pos=t,!0},Je.prototype.backUp=function(e){this.pos-=e},Je.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=z(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?z(this.string,this.lineStart,this.tabSize):0)},Je.prototype.indentation=function(){return z(this.string,null,this.tabSize)-(this.lineStart?z(this.string,this.lineStart,this.tabSize):0)},Je.prototype.match=function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e);return n&&0<n.index?null:(n&&!1!==t&&(this.pos+=n[0].length),n)}function i(e){return r?e.toLowerCase():e}if(i(this.string.substr(this.pos,e.length))==i(e))return!1!==t&&(this.pos+=e.length),!0},Je.prototype.current=function(){return this.string.slice(this.start,this.pos)},Je.prototype.hideFirstChars=function(e,t){this.lineStart+=e;try{return t()}finally{this.lineStart-=e}},Je.prototype.lookAhead=function(e){var t=this.lineOracle;return t&&t.lookAhead(e)},Je.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};var mt=function(e,t){this.state=e,this.lookAhead=t},yt=function(e,t,r,n){this.state=t,this.doc=e,this.line=r,this.maxLookAhead=n||0,this.baseTokens=null,this.baseTokenPos=1};function bt(t,r,n,e){var a=[t.state.modeGen],i={};Nt(t,r.text,t.doc.mode,n,function(e,t){return a.push(e,t)},i,e);for(var u=n.state,o=function(e){n.baseTokens=a;var o=t.state.overlays[e],l=1,s=0;n.state=!0,Nt(t,r.text,o.mode,n,function(e,t){for(var r=l;s<e;){var n=a[l];e<n&&a.splice(l,1,e,a[l+1],n),l+=2,s=Math.min(e,n)}if(t)if(o.opaque)a.splice(r,l-r,e,"overlay "+t),l=r+2;else for(;r<l;r+=2){var i=a[r+1];a[r+1]=(i?i+" ":"")+"overlay "+t}},i),n.state=u,n.baseTokens=null,n.baseTokenPos=1},l=0;l<t.state.overlays.length;++l)o(l);return{styles:a,classes:i.bgClass||i.textClass?i:null}}function wt(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=xt(e,it(t)),i=t.text.length>e.options.maxHighlightLength&&qe(e.doc.mode,n.state),o=bt(e,t,n);i&&(n.state=i),t.stateAfter=n.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return t.styles}function xt(r,n,e){var t=r.doc,i=r.display;if(!t.mode.startState)return new yt(t,!0,n);var o=function(e,t,r){for(var n,i,o=e.doc,l=r?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;l<s;--s){if(s<=o.first)return o.first;var a=et(o,s-1),u=a.stateAfter;if(u&&(!r||s+(u instanceof mt?u.lookAhead:0)<=o.modeFrontier))return s;var c=z(a.text,null,e.options.tabSize);(null==i||c<n)&&(i=s-1,n=c)}return i}(r,n,e),l=o>t.first&&et(t,o-1).stateAfter,s=l?yt.fromSaved(t,l,o):new yt(t,Qe(t.mode),o);return t.iter(o,n,function(e){Ct(r,e.text,s);var t=s.line;e.stateAfter=t==n-1||t%5==0||t>=i.viewFrom&&t<i.viewTo?s.save():null,s.nextLine()}),e&&(t.modeFrontier=s.line),s}function Ct(e,t,r,n){var i=e.doc.mode,o=new Je(t,e.options.tabSize,r);for(o.start=o.pos=n||0,""==t&&St(i,r.state);!o.eol();)Lt(i,o,r.state),o.start=o.pos}function St(e,t){if(e.blankLine)return e.blankLine(t);if(e.innerMode){var r=Ze(e,t);return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function Lt(e,t,r,n){for(var i=0;i<10;i++){n&&(n[0]=Ze(e,r).mode);var o=e.token(t,r);if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}yt.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e);return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},yt.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var t=this.baseTokens[this.baseTokenPos+1];return{type:t&&t.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},yt.prototype.nextLine=function(){this.line++,0<this.maxLookAhead&&this.maxLookAhead--},yt.fromSaved=function(e,t,r){return t instanceof mt?new yt(e,qe(e.mode,t.state),r,t.lookAhead):new yt(e,qe(e.mode,t),r)},yt.prototype.save=function(e){var t=!1!==e?qe(this.doc.mode,this.state):this.state;return 0<this.maxLookAhead?new mt(t,this.maxLookAhead):t};var kt=function(e,t,r){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=r};function Tt(e,t,r,n){var i,o,l=e.doc,s=l.mode,a=et(l,(t=gt(l,t)).line),u=xt(e,t.line,r),c=new Je(a.text,e.options.tabSize,u);for(n&&(o=[]);(n||c.pos<t.ch)&&!c.eol();)c.start=c.pos,i=Lt(s,c,u.state),n&&o.push(new kt(c,i,qe(l.mode,u.state)));return n?o:new kt(c,i,u.state)}function Mt(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!r)break;e=e.slice(0,r.index)+e.slice(r.index+r[0].length);var n=r[1]?"bgClass":"textClass";null==t[n]?t[n]=r[2]:new RegExp("(?:^|s)"+r[2]+"(?:$|s)").test(t[n])||(t[n]+=" "+r[2])}return e}function Nt(e,t,r,n,i,o,l){var s=r.flattenSpans;null==s&&(s=e.options.flattenSpans);var a,u=0,c=null,h=new Je(t,e.options.tabSize,n),f=e.options.addModeClass&&[null];for(""==t&&Mt(St(r,n.state),o);!h.eol();){if(a=h.pos>e.options.maxHighlightLength?(s=!1,l&&Ct(e,t,n,h.pos),h.pos=t.length,null):Mt(Lt(r,h,n.state,f),o),f){var d=f[0].name;d&&(a="m-"+(a?d+" "+a:d))}if(!s||c!=a){for(;u<h.start;)i(u=Math.min(h.start,u+5e3),c);c=a}h.start=h.pos}for(;u<h.pos;){var p=Math.min(h.pos,u+5e3);i(p,c),u=p}}var Ot=!1,At=!1;function Dt(e,t,r){this.marker=e,this.from=t,this.to=r}function Wt(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r];if(n.marker==t)return n}}function Ht(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r=r||[]).push(e[n]);return r}function Ft(e,t){if(t.full)return null;var r=lt(e,t.from.line)&&et(e,t.from.line).markedSpans,n=lt(e,t.to.line)&&et(e,t.to.line).markedSpans;if(!r&&!n)return null;var i=t.from.ch,o=t.to.ch,l=0==ut(t.from,t.to),s=function(e,t,r){var n;if(e)for(var i=0;i<e.length;++i){var o=e[i],l=o.marker;if(null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==l.type&&(!r||!o.marker.insertLeft)){var s=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t);(n=n||[]).push(new Dt(l,o.from,s?null:o.to))}}return n}(r,i,l),a=function(e,t,r){var n;if(e)for(var i=0;i<e.length;++i){var o=e[i],l=o.marker;if(null==o.to||(l.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==l.type&&(!r||o.marker.insertLeft)){var s=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t);(n=n||[]).push(new Dt(l,s?null:o.from-t,null==o.to?null:o.to-t))}}return n}(n,o,l),u=1==t.text.length,c=$(t.text).length+(u?i:0);if(s)for(var h=0;h<s.length;++h){var f=s[h];if(null==f.to){var d=Wt(a,f.marker);d?u&&(f.to=null==d.to?null:d.to+c):f.to=i}}if(a)for(var p=0;p<a.length;++p){var g=a[p];if(null!=g.to&&(g.to+=c),null==g.from)Wt(s,g.marker)||(g.from=c,u&&(s=s||[]).push(g));else g.from+=c,u&&(s=s||[]).push(g)}s=s&&Pt(s),a&&a!=s&&(a=Pt(a));var v=[s];if(!u){var m,y=t.text.length-2;if(0<y&&s)for(var b=0;b<s.length;++b)null==s[b].to&&(m=m||[]).push(new Dt(s[b].marker,null,null));for(var w=0;w<y;++w)v.push(m);v.push(a)}return v}function Pt(e){for(var t=0;t<e.length;++t){var r=e[t];null!=r.from&&r.from==r.to&&!1!==r.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function Et(e){var t=e.markedSpans;if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e);e.markedSpans=null}}function It(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e);e.markedSpans=t}}function zt(e){return e.inclusiveLeft?-1:0}function Rt(e){return e.inclusiveRight?1:0}function Bt(e,t){var r=e.lines.length-t.lines.length;if(0!=r)return r;var n=e.find(),i=t.find(),o=ut(n.from,i.from)||zt(e)-zt(t);if(o)return-o;var l=ut(n.to,i.to)||Rt(e)-Rt(t);return l||t.id-e.id}function Gt(e,t){var r,n=At&&e.markedSpans;if(n)for(var i=void 0,o=0;o<n.length;++o)(i=n[o]).marker.collapsed&&null==(t?i.from:i.to)&&(!r||Bt(r,i.marker)<0)&&(r=i.marker);return r}function Ut(e){return Gt(e,!0)}function Vt(e){return Gt(e,!1)}function Kt(e,t){var r,n=At&&e.markedSpans;if(n)for(var i=0;i<n.length;++i){var o=n[i];o.marker.collapsed&&(null==o.from||o.from<t)&&(null==o.to||o.to>t)&&(!r||Bt(r,o.marker)<0)&&(r=o.marker)}return r}function jt(e,t,r,n,i){var o=et(e,t),l=At&&o.markedSpans;if(l)for(var s=0;s<l.length;++s){var a=l[s];if(a.marker.collapsed){var u=a.marker.find(0),c=ut(u.from,r)||zt(a.marker)-zt(i),h=ut(u.to,n)||Rt(a.marker)-Rt(i);if(!(0<=c&&h<=0||c<=0&&0<=h)&&(c<=0&&(a.marker.inclusiveRight&&i.inclusiveLeft?0<=ut(u.to,r):0<ut(u.to,r))||0<=c&&(a.marker.inclusiveRight&&i.inclusiveLeft?ut(u.from,n)<=0:ut(u.from,n)<0)))return 1}}}function Xt(e){for(var t;t=Ut(e);)e=t.find(-1,!0).line;return e}function Yt(e,t){var r=et(e,t),n=Xt(r);return r==n?t:it(n)}function _t(e,t){if(t>e.lastLine())return t;var r,n=et(e,t);if(!$t(e,n))return t;for(;r=Vt(n);)n=r.find(1,!0).line;return it(n)+1}function $t(e,t){var r=At&&t.markedSpans;if(r)for(var n=void 0,i=0;i<r.length;++i)if((n=r[i]).marker.collapsed){if(null==n.from)return!0;if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&qt(e,t,n))return!0}}function qt(e,t,r){if(null==r.to){var n=r.marker.find(1,!0);return qt(e,n.line,Wt(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return!0;for(var i=void 0,o=0;o<t.markedSpans.length;++o)if((i=t.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&qt(e,t,i))return!0}function Zt(e){for(var t=0,r=(e=Xt(e)).parent,n=0;n<r.lines.length;++n){var i=r.lines[n];if(i==e)break;t+=i.height}for(var o=r.parent;o;o=(r=o).parent)for(var l=0;l<o.children.length;++l){var s=o.children[l];if(s==r)break;t+=s.height}return t}function Qt(e){if(0==e.height)return 0;for(var t,r=e.text.length,n=e;t=Ut(n);){var i=t.find(0,!0);n=i.from.line,r+=i.from.ch-i.to.ch}for(n=e;t=Vt(n);){var o=t.find(0,!0);r-=n.text.length-o.from.ch,r+=(n=o.to.line).text.length-o.to.ch}return r}function Jt(e){var r=e.display,t=e.doc;r.maxLine=et(t,t.first),r.maxLineLength=Qt(r.maxLine),r.maxLineChanged=!0,t.iter(function(e){var t=Qt(e);t>r.maxLineLength&&(r.maxLineLength=t,r.maxLine=e)})}var er=function(e,t,r){this.text=e,It(this,t),this.height=r?r(this):1};er.prototype.lineNo=function(){return it(this)},Me(er);var tr={},rr={};function nr(e,t){if(!e||/^\s*$/.test(e))return null;var r=t.addModeClass?rr:tr;return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function ir(e,t){var r=O("span",null,null,b?"padding-right: .1px":null),n={pre:O("pre",[r],"CodeMirror-line"),content:r,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};t.measure={};for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o=i?t.rest[i-1]:t.line,l=void 0;n.pos=0,n.addToken=lr,ze(e.display.measure)&&(l=ye(o,e.doc.direction))&&(n.addToken=sr(n.addToken,l)),n.map=[],ur(o,n,wt(e,o,t!=e.display.externalMeasured&&it(o))),o.styleClasses&&(o.styleClasses.bgClass&&(n.bgClass=F(o.styleClasses.bgClass,n.bgClass||"")),o.styleClasses.textClass&&(n.textClass=F(o.styleClasses.textClass,n.textClass||""))),0==n.map.length&&n.map.push(0,0,n.content.appendChild(Ie(e.display.measure))),0==i?(t.measure.map=n.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(n.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(b){var s=n.content.lastChild;(/\bcm-tab\b/.test(s.className)||s.querySelector&&s.querySelector(".cm-tab"))&&(n.content.className="cm-tab-wrap-hack")}return Se(e,"renderLine",e,t.line,n.pre),n.pre.className&&(n.textClass=F(n.pre.className,n.textClass||"")),n}function or(e){var t=A("span","•","cm-invalidchar");return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function lr(e,t,r,n,i,o,l){if(t){var s,a=e.splitSpaces?function(e,t){if(1<e.length&&!/  /.test(e))return e;for(var r=t,n="",i=0;i<e.length;i++){var o=e.charAt(i);" "!=o||!r||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),n+=o,r=" "==o}return n}(t,e.trailingSpace):t,u=e.cm.state.specialChars,c=!1;if(u.test(t)){s=document.createDocumentFragment();for(var h=0;;){u.lastIndex=h;var f=u.exec(t),d=f?f.index-h:t.length-h;if(d){var p=document.createTextNode(a.slice(h,h+d));x&&C<9?s.appendChild(A("span",[p])):s.appendChild(p),e.map.push(e.pos,e.pos+d,p),e.col+=d,e.pos+=d}if(!f)break;h+=1+d;var g=void 0;if("\t"==f[0]){var v=e.cm.options.tabSize,m=v-e.col%v;(g=s.appendChild(A("span",_(m),"cm-tab"))).setAttribute("role","presentation"),g.setAttribute("cm-text","\t"),e.col+=m}else"\r"==f[0]||"\n"==f[0]?(g=s.appendChild(A("span","\r"==f[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",f[0]):((g=e.cm.options.specialCharPlaceholder(f[0])).setAttribute("cm-text",f[0]),x&&C<9?s.appendChild(A("span",[g])):s.appendChild(g)),e.col+=1;e.map.push(e.pos,e.pos+1,g),e.pos++}}else e.col+=t.length,s=document.createTextNode(a),e.map.push(e.pos,e.pos+t.length,s),x&&C<9&&(c=!0),e.pos+=t.length;if(e.trailingSpace=32==a.charCodeAt(t.length-1),r||n||i||c||o){var y=r||"";n&&(y+=n),i&&(y+=i);var b=A("span",[s],y,o);if(l)for(var w in l)l.hasOwnProperty(w)&&"style"!=w&&"class"!=w&&b.setAttribute(w,l[w]);return e.content.appendChild(b)}e.content.appendChild(s)}}function sr(h,f){return function(e,t,r,n,i,o,l){r=r?r+" cm-force-border":"cm-force-border";for(var s=e.pos,a=s+t.length;;){for(var u=void 0,c=0;c<f.length&&!((u=f[c]).to>s&&u.from<=s);c++);if(u.to>=a)return h(e,t,r,n,i,o,l);h(e,t.slice(0,u.to-s),r,n,null,o,l),n=null,t=t.slice(u.to-s),s=u.to}}}function ar(e,t,r,n){var i=!n&&r.widgetNode;i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i=i||e.content.appendChild(document.createElement("span"))).setAttribute("cm-marker",r.id),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function ur(e,t,r){var n=e.markedSpans,i=e.text,o=0;if(n)for(var l,s,a,u,c,h,f,d=i.length,p=0,g=1,v="",m=0;;){if(m==p){a=u=c=s="",h=f=null,m=1/0;for(var y=[],b=void 0,w=0;w<n.length;++w){var x=n[w],C=x.marker;if("bookmark"==C.type&&x.from==p&&C.widgetNode)y.push(C);else if(x.from<=p&&(null==x.to||x.to>p||C.collapsed&&x.to==p&&x.from==p)){if(null!=x.to&&x.to!=p&&m>x.to&&(m=x.to,u=""),C.className&&(a+=" "+C.className),C.css&&(s=(s?s+";":"")+C.css),C.startStyle&&x.from==p&&(c+=" "+C.startStyle),C.endStyle&&x.to==m&&(b=b||[]).push(C.endStyle,x.to),C.title&&((f=f||{}).title=C.title),C.attributes)for(var S in C.attributes)(f=f||{})[S]=C.attributes[S];C.collapsed&&(!h||Bt(h.marker,C)<0)&&(h=x)}else x.from>p&&m>x.from&&(m=x.from)}if(b)for(var L=0;L<b.length;L+=2)b[L+1]==m&&(u+=" "+b[L]);if(!h||h.from==p)for(var k=0;k<y.length;++k)ar(t,0,y[k]);if(h&&(h.from||0)==p){if(ar(t,(null==h.to?d+1:h.to)-p,h.marker,null==h.from),null==h.to)return;h.to==p&&(h=!1)}}if(d<=p)break;for(var T=Math.min(d,m);;){if(v){var M=p+v.length;if(!h){var N=T<M?v.slice(0,T-p):v;t.addToken(t,N,l?l+a:a,c,p+N.length==m?u:"",s,f)}if(T<=M){v=v.slice(T-p),p=T;break}p=M,c=""}v=i.slice(o,o=r[g++]),l=nr(r[g++],t.cm.options)}}else for(var O=1;O<r.length;O+=2)t.addToken(t,i.slice(o,o=r[O]),nr(r[O+1],t.cm.options))}function cr(e,t,r){this.line=t,this.rest=function(e){for(var t,r;t=Vt(e);)e=t.find(1,!0).line,(r=r||[]).push(e);return r}(t),this.size=this.rest?it($(this.rest))-r+1:1,this.node=this.text=null,this.hidden=$t(e,t)}function hr(e,t,r){for(var n,i=[],o=t;o<r;o=n){var l=new cr(e.doc,et(e.doc,o),o);n=o+l.size,i.push(l)}return i}var fr=null;function dr(e,t){var r=e.ownsGroup;if(r)try{!function(e){var t=e.delayedCallbacks,r=0;do{for(;r<t.length;r++)t[r].call(null);for(var n=0;n<e.ops.length;n++){var i=e.ops[n];if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(r<t.length)}(r)}finally{fr=null,t(r)}}var pr=null;function gr(e,t){var r=xe(e,t);if(r.length){var n,i=Array.prototype.slice.call(arguments,2);fr?n=fr.delayedCallbacks:pr?n=pr:(n=pr=[],setTimeout(vr,0));for(var o=function(e){n.push(function(){return r[e].apply(null,i)})},l=0;l<r.length;++l)o(l)}}function vr(){var e=pr;pr=null;for(var t=0;t<e.length;++t)e[t]()}function mr(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i];"text"==o?wr(e,t):"gutter"==o?Cr(e,t,r,n):"class"==o?xr(e,t):"widget"==o&&Sr(e,t,n)}t.changes=null}function yr(e){return e.node==e.text&&(e.node=A("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),x&&C<8&&(e.node.style.zIndex=2)),e.node}function br(e,t){var r=e.display.externalMeasured;return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):ir(e,t)}function wr(e,t){var r=t.text.className,n=br(e,t);t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,xr(e,t)):r&&(t.text.className=r)}function xr(e,t){!function(e,t){var r=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass;if(r&&(r+=" CodeMirror-linebackground"),t.background)r?t.background.className=r:(t.background.parentNode.removeChild(t.background),t.background=null);else if(r){var n=yr(t);t.background=n.insertBefore(A("div",null,r),n.firstChild),e.display.input.setUneditable(t.background)}}(e,t),t.line.wrapClass?yr(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="");var r=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass;t.text.className=r||""}function Cr(e,t,r,n){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var i=yr(t);t.gutterBackground=A("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px; width: "+n.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),i.insertBefore(t.gutterBackground,t.text)}var o=t.line.gutterMarkers;if(e.options.lineNumbers||o){var l=yr(t),s=t.gutter=A("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px");if(e.display.input.setUneditable(s),l.insertBefore(s,t.text),t.line.gutterClass&&(s.className+=" "+t.line.gutterClass),!e.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(t.lineNumber=s.appendChild(A("div",st(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+n.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),o)for(var a=0;a<e.display.gutterSpecs.length;++a){var u=e.display.gutterSpecs[a].className,c=o.hasOwnProperty(u)&&o[u];c&&s.appendChild(A("div",[c],"CodeMirror-gutter-elt","left: "+n.gutterLeft[u]+"px; width: "+n.gutterWidth[u]+"px"))}}}function Sr(e,t,r){t.alignable&&(t.alignable=null);for(var n=L("CodeMirror-linewidget"),i=t.node.firstChild,o=void 0;i;i=o)o=i.nextSibling,n.test(i.className)&&t.node.removeChild(i);Lr(e,t,r)}function Lr(e,t,r){if(kr(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)kr(e,t.rest[n],t,r,!1)}function kr(e,t,r,n,i){if(t.widgets)for(var o=yr(r),l=0,s=t.widgets;l<s.length;++l){var a=s[l],u=A("div",[a.node],"CodeMirror-linewidget"+(a.className?" "+a.className:""));a.handleMouseEvents||u.setAttribute("cm-ignore-events","true"),Tr(a,u,r,n),e.display.input.setUneditable(u),i&&a.above?o.insertBefore(u,r.gutter||r.text):o.appendChild(u),gr(a,"redraw")}}function Tr(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t);var i=n.wrapperWidth;t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"))}function Mr(e){if(null!=e.height)return e.height;var t=e.doc.cm;if(!t)return 0;if(!D(document.body,e.node)){var r="position: relative;";e.coverGutter&&(r+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(r+="width: "+t.display.wrapper.clientWidth+"px;"),N(t.display.measure,A("div",[e.node],null,r))}return e.height=e.node.parentNode.offsetHeight}function Nr(e,t){for(var r=We(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&"true"==r.getAttribute("cm-ignore-events")||r.parentNode==e.sizer&&r!=e.mover)return 1}function Or(e){return e.lineSpace.offsetTop}function Ar(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Dr(e){if(e.cachedPaddingH)return e.cachedPaddingH;var t=N(e.measure,A("pre","x","CodeMirror-line-like")),r=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,n={left:parseInt(r.paddingLeft),right:parseInt(r.paddingRight)};return isNaN(n.left)||isNaN(n.right)||(e.cachedPaddingH=n),n}function Wr(e){return G-e.display.nativeBarWidth}function Hr(e){return e.display.scroller.clientWidth-Wr(e)-e.display.barWidth}function Fr(e){return e.display.scroller.clientHeight-Wr(e)-e.display.barHeight}function Pr(e,t,r){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache};for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return{map:e.measure.maps[n],cache:e.measure.caches[n]};for(var i=0;i<e.rest.length;i++)if(it(e.rest[i])>r)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function Er(e,t,r,n){return Rr(e,zr(e,t),r,n)}function Ir(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[gn(e,t)];var r=e.display.externalMeasured;return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function zr(e,t){var r=it(t),n=Ir(e,r);n&&!n.text?n=null:n&&n.changes&&(mr(e,n,r,cn(e)),e.curOp.forceUpdate=!0);var i=Pr(n=n||function(e,t){var r=it(t=Xt(t)),n=e.display.externalMeasured=new cr(e.doc,t,r);n.lineN=r;var i=n.built=ir(e,n);return n.text=i.pre,N(e.display.lineMeasure,i.pre),n}(e,t),t,r);return{line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Rr(e,t,r,n,i){t.before&&(r=-1);var o,l=r+(n||"");return t.cache.hasOwnProperty(l)?o=t.cache[l]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(function(e,t,r){var n=e.options.lineWrapping,i=n&&Hr(e);if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[];if(n){t.measure.width=i;for(var l=t.text.firstChild.getClientRects(),s=0;s<l.length-1;s++){var a=l[s],u=l[s+1];2<Math.abs(a.bottom-u.bottom)&&o.push((a.bottom+u.top)/2-r.top)}}o.push(r.bottom-r.top)}}(e,t.view,t.rect),t.hasHeights=!0),(o=function(e,t,r,n){var i,o=Ur(t.map,r,n),l=o.node,s=o.start,a=o.end,u=o.collapse;if(3==l.nodeType){for(var c=0;c<4;c++){for(;s&&ie(t.line.text.charAt(o.coverStart+s));)--s;for(;o.coverStart+a<o.coverEnd&&ie(t.line.text.charAt(o.coverStart+a));)++a;if((i=x&&C<9&&0==s&&a==o.coverEnd-o.coverStart?l.parentNode.getBoundingClientRect():Vr(k(l,s,a).getClientRects(),n)).left||i.right||0==s)break;a=s,--s,u="right"}x&&C<11&&(i=function(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(e){if(null!=Ve)return Ve;var t=N(e,A("span","x")),r=t.getBoundingClientRect(),n=k(t,0,1).getBoundingClientRect();return Ve=1<Math.abs(r.left-n.left)}(e))return t;var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI;return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}(e.display.measure,i))}else{var h;0<s&&(u=n="right"),i=e.options.lineWrapping&&1<(h=l.getClientRects()).length?h["right"==n?h.length-1:0]:l.getBoundingClientRect()}if(x&&C<9&&!s&&(!i||!i.left&&!i.right)){var f=l.parentNode.getClientRects()[0];i=f?{left:f.left,right:f.left+un(e.display),top:f.top,bottom:f.bottom}:Gr}for(var d=i.top-t.rect.top,p=i.bottom-t.rect.top,g=(d+p)/2,v=t.view.measure.heights,m=0;m<v.length-1&&!(g<v[m]);m++);var y=m?v[m-1]:0,b=v[m],w={left:("right"==u?i.right:i.left)-t.rect.left,right:("left"==u?i.left:i.right)-t.rect.left,top:y,bottom:b};i.left||i.right||(w.bogus=!0);e.options.singleCursorHeightPerLine||(w.rtop=d,w.rbottom=p);return w}(e,t,r,n)).bogus||(t.cache[l]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}var Br,Gr={left:0,right:0,top:0,bottom:0};function Ur(e,t,r){for(var n,i,o,l,s,a,u=0;u<e.length;u+=3)if(s=e[u],a=e[u+1],t<s?(i=0,o=1,l="left"):t<a?o=(i=t-s)+1:(u==e.length-3||t==a&&e[u+3]>t)&&(i=(o=a-s)-1,a<=t&&(l="right")),null!=i){if(n=e[u+2],s==a&&r==(n.insertLeft?"left":"right")&&(l=r),"left"==r&&0==i)for(;u&&e[u-2]==e[u-3]&&e[u-1].insertLeft;)n=e[2+(u-=3)],l="left";if("right"==r&&i==a-s)for(;u<e.length-3&&e[u+3]==e[u+4]&&!e[u+5].insertLeft;)n=e[(u+=3)+2],l="right";break}return{node:n,start:i,end:o,collapse:l,coverStart:s,coverEnd:a}}function Vr(e,t){var r=Gr;if("left"==t)for(var n=0;n<e.length&&(r=e[n]).left==r.right;n++);else for(var i=e.length-1;0<=i&&(r=e[i]).left==r.right;i--);return r}function Kr(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function jr(e){e.display.externalMeasure=null,M(e.display.lineMeasure);for(var t=0;t<e.display.view.length;t++)Kr(e.display.view[t])}function Xr(e){jr(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function Yr(){return l&&h?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function _r(){return l&&h?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function $r(e){var t=0;if(e.widgets)for(var r=0;r<e.widgets.length;++r)e.widgets[r].above&&(t+=Mr(e.widgets[r]));return t}function qr(e,t,r,n,i){if(!i){var o=$r(t);r.top+=o,r.bottom+=o}if("line"==n)return r;n=n||"local";var l=Zt(t);if("local"==n?l+=Or(e.display):l-=e.display.viewOffset,"page"==n||"window"==n){var s=e.display.lineSpace.getBoundingClientRect();l+=s.top+("window"==n?0:_r());var a=s.left+("window"==n?0:Yr());r.left+=a,r.right+=a}return r.top+=l,r.bottom+=l,r}function Zr(e,t,r){if("div"==r)return t;var n=t.left,i=t.top;if("page"==r)n-=Yr(),i-=_r();else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect();n+=o.left,i+=o.top}var l=e.display.lineSpace.getBoundingClientRect();return{left:n-l.left,top:i-l.top}}function Qr(e,t,r,n,i){return qr(e,n=n||et(e.doc,t.line),Er(e,n,t.ch,i),r)}function Jr(n,e,i,o,l,s){function a(e,t){var r=Rr(n,l,e,t?"right":"left",s);return t?r.left=r.right:r.right=r.left,qr(n,o,r,i)}o=o||et(n.doc,e.line),l=l||zr(n,o);var u=ye(o,n.doc.direction),t=e.ch,r=e.sticky;if(t>=o.text.length?(t=o.text.length,r="before"):t<=0&&(t=0,r="after"),!u)return a("before"==r?t-1:t,"before"==r);function c(e,t,r){return a(r?e-1:e,1==u[t].level!=r)}var h=ae(u,t,r),f=se,d=c(t,h,"before"==r);return null!=f&&(d.other=c(t,f,"before"!=r)),d}function en(e,t){var r=0;t=gt(e.doc,t),e.options.lineWrapping||(r=un(e.display)*t.ch);var n=et(e.doc,t.line),i=Zt(n)+Or(e.display);return{left:r,right:r,top:i,bottom:i+n.height}}function tn(e,t,r,n,i){var o=at(e,t,r);return o.xRel=i,n&&(o.outside=n),o}function rn(e,t,r){var n=e.doc;if((r+=e.display.viewOffset)<0)return tn(n.first,0,null,-1,-1);var i=ot(n,r),o=n.first+n.size-1;if(o<i)return tn(n.first+n.size-1,et(n,o).text.length,null,1,1);t<0&&(t=0);for(var l=et(n,i);;){var s=sn(e,l,i,t,r),a=Kt(l,s.ch+(0<s.xRel||0<s.outside?1:0));if(!a)return s;var u=a.find(1);if(u.line==i)return u;l=et(n,i=u.line)}}function nn(t,e,r,n){n-=$r(e);var i=e.text.length,o=le(function(e){return Rr(t,r,e-1).bottom<=n},i,0);return{begin:o,end:i=le(function(e){return Rr(t,r,e).top>n},o,i)}}function on(e,t,r,n){return nn(e,t,r=r||zr(e,t),qr(e,t,Rr(e,r,n),"line").top)}function ln(e,t,r,n){return!(e.bottom<=r)&&(e.top>r||(n?e.left:e.right)>t)}function sn(r,e,t,n,i){i-=Zt(e);var o=zr(r,e),l=$r(e),s=0,a=e.text.length,u=!0,c=ye(e,r.doc.direction);if(c){var h=(r.options.lineWrapping?function(e,t,r,n,i,o,l){var s=nn(e,t,n,l),a=s.begin,u=s.end;/\s/.test(t.text.charAt(u-1))&&u--;for(var c=null,h=null,f=0;f<i.length;f++){var d=i[f];if(!(d.from>=u||d.to<=a)){var p=1!=d.level,g=Rr(e,n,p?Math.min(u,d.to)-1:Math.max(a,d.from)).right,v=g<o?o-g+1e9:g-o;(!c||v<h)&&(c=d,h=v)}}c=c||i[i.length-1];c.from<a&&(c={from:a,to:c.to,level:c.level});c.to>u&&(c={from:c.from,to:u,level:c.level});return c}:function(n,i,o,l,s,a,u){var e=le(function(e){var t=s[e],r=1!=t.level;return ln(Jr(n,at(o,r?t.to:t.from,r?"before":"after"),"line",i,l),a,u,!0)},0,s.length-1),t=s[e];if(0<e){var r=1!=t.level,c=Jr(n,at(o,r?t.from:t.to,r?"after":"before"),"line",i,l);ln(c,a,u,!0)&&c.top>u&&(t=s[e-1])}return t})(r,e,t,o,c,n,i);s=(u=1!=h.level)?h.from:h.to-1,a=u?h.to:h.from-1}var f,d,p=null,g=null,v=le(function(e){var t=Rr(r,o,e);return t.top+=l,t.bottom+=l,ln(t,n,i,!1)&&(t.top<=i&&t.left<=n&&(p=e,g=t),1)},s,a),m=!1;if(g){var y=n-g.left<g.right-n,b=y==u;v=p+(b?0:1),d=b?"after":"before",f=y?g.left:g.right}else{u||v!=a&&v!=s||v++,d=0==v?"after":v==e.text.length?"before":Rr(r,o,v-(u?1:0)).bottom+l<=i==u?"after":"before";var w=Jr(r,at(t,v,d),"line",e,o);f=w.left,m=i<w.top?-1:i>=w.bottom?1:0}return tn(t,v=oe(e.text,v,1),d,m,n-f)}function an(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight;if(null==Br){Br=A("pre",null,"CodeMirror-line-like");for(var t=0;t<49;++t)Br.appendChild(document.createTextNode("x")),Br.appendChild(A("br"));Br.appendChild(document.createTextNode("x"))}N(e.measure,Br);var r=Br.offsetHeight/50;return 3<r&&(e.cachedTextHeight=r),M(e.measure),r||1}function un(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth;var t=A("span","xxxxxxxxxx"),r=A("pre",[t],"CodeMirror-line-like");N(e.measure,r);var n=t.getBoundingClientRect(),i=(n.right-n.left)/10;return 2<i&&(e.cachedCharWidth=i),i||10}function cn(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,l=0;o;o=o.nextSibling,++l){var s=e.display.gutterSpecs[l].className;r[s]=o.offsetLeft+o.clientLeft+i,n[s]=o.clientWidth}return{fixedPos:hn(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function hn(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function fn(n){var i=an(n.display),o=n.options.lineWrapping,l=o&&Math.max(5,n.display.scroller.clientWidth/un(n.display)-3);return function(e){if($t(n.doc,e))return 0;var t=0;if(e.widgets)for(var r=0;r<e.widgets.length;r++)e.widgets[r].height&&(t+=e.widgets[r].height);return o?t+(Math.ceil(e.text.length/l)||1)*i:t+i}}function dn(e){var t=e.doc,r=fn(e);t.iter(function(e){var t=r(e);t!=e.height&&nt(e,t)})}function pn(e,t,r,n){var i=e.display;if(!r&&"true"==We(t).getAttribute("cm-not-content"))return null;var o,l,s=i.lineSpace.getBoundingClientRect();try{o=t.clientX-s.left,l=t.clientY-s.top}catch(t){return null}var a,u=rn(e,o,l);if(n&&0<u.xRel&&(a=et(e.doc,u.line).text).length==u.ch){var c=z(a,a.length,e.options.tabSize)-a.length;u=at(u.line,Math.max(0,Math.round((o-Dr(e.display).left)/un(e.display))-c))}return u}function gn(e,t){if(t>=e.display.viewTo)return null;if((t-=e.display.viewFrom)<0)return null;for(var r=e.display.view,n=0;n<r.length;n++)if((t-=r[n].size)<0)return n}function vn(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n=n||0;var i=e.display;if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)At&&Yt(e.doc,t)<i.viewTo&&yn(e);else if(r<=i.viewFrom)At&&_t(e.doc,r+n)>i.viewFrom?yn(e):(i.viewFrom+=n,i.viewTo+=n);else if(t<=i.viewFrom&&r>=i.viewTo)yn(e);else if(t<=i.viewFrom){var o=bn(e,r,r+n,1);o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):yn(e)}else if(r>=i.viewTo){var l=bn(e,t,t,-1);l?(i.view=i.view.slice(0,l.index),i.viewTo=l.lineN):yn(e)}else{var s=bn(e,t,t,-1),a=bn(e,r,r+n,1);s&&a?(i.view=i.view.slice(0,s.index).concat(hr(e,s.lineN,a.lineN)).concat(i.view.slice(a.index)),i.viewTo+=n):yn(e)}var u=i.externalMeasured;u&&(r<u.lineN?u.lineN+=n:t<u.lineN+u.size&&(i.externalMeasured=null))}function mn(e,t,r){e.curOp.viewChanged=!0;var n=e.display,i=e.display.externalMeasured;if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[gn(e,t)];if(null!=o.node){var l=o.changes||(o.changes=[]);-1==B(l,r)&&l.push(r)}}}function yn(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function bn(e,t,r,n){var i,o=gn(e,t),l=e.display.view;if(!At||r==e.doc.first+e.doc.size)return{index:o,lineN:r};for(var s=e.display.viewFrom,a=0;a<o;a++)s+=l[a].size;if(s!=t){if(0<n){if(o==l.length-1)return null;i=s+l[o].size-t,o++}else i=s-t;t+=i,r+=i}for(;Yt(e.doc,r)!=r;){if(o==(n<0?0:l.length-1))return null;r+=n*l[o-(n<0?1:0)].size,o+=n}return{index:o,lineN:r}}function wn(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n];i.hidden||i.node&&!i.changes||++r}return r}function xn(e){e.display.input.showSelection(e.display.input.prepareSelection())}function Cn(e,t){void 0===t&&(t=!0);for(var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),l=0;l<r.sel.ranges.length;l++)if(t||l!=r.sel.primIndex){var s=r.sel.ranges[l];if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var a=s.empty();(a||e.options.showCursorWhenSelecting)&&Sn(e,s.head,i),a||kn(e,s,o)}}return n}function Sn(e,t,r){var n=Jr(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),i=r.appendChild(A("div"," ","CodeMirror-cursor"));if(i.style.left=n.left+"px",i.style.top=n.top+"px",i.style.height=Math.max(0,n.bottom-n.top)*e.options.cursorHeight+"px",n.other){var o=r.appendChild(A("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));o.style.display="",o.style.left=n.other.left+"px",o.style.top=n.other.top+"px",o.style.height=.85*(n.other.bottom-n.other.top)+"px"}}function Ln(e,t){return e.top-t.top||e.left-t.left}function kn(l,e,t){var r=l.display,n=l.doc,i=document.createDocumentFragment(),o=Dr(l.display),T=o.left,M=Math.max(r.sizerWidth,Hr(l)-r.sizer.offsetLeft)-o.right,N="ltr"==n.direction;function O(e,t,r,n){t<0&&(t=0),t=Math.round(t),n=Math.round(n),i.appendChild(A("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==r?M-e:r)+"px;\n                             height: "+(n-t)+"px"))}function s(r,y,b){var w,x,o=et(n,r),C=o.text.length;function S(e,t){return Qr(l,at(r,e),"div",o,t)}function L(e,t,r){var n=on(l,o,null,e),i="ltr"==t==("after"==r)?"left":"right";return S("after"==r?n.begin:n.end-(/\s/.test(o.text.charAt(n.end-1))?2:1),i)[i]}var k=ye(o,n.direction);return function(e,t,r,n){if(!e)return n(t,r,"ltr",0);for(var i=!1,o=0;o<e.length;++o){var l=e[o];(l.from<r&&l.to>t||t==r&&l.to==t)&&(n(Math.max(l.from,t),Math.min(l.to,r),1==l.level?"rtl":"ltr",o),i=!0)}i||n(t,r,"ltr")}(k,y||0,null==b?C:b,function(e,t,r,n){var i="ltr"==r,o=S(e,i?"left":"right"),l=S(t-1,i?"right":"left"),s=null==y&&0==e,a=null==b&&t==C,u=0==n,c=!k||n==k.length-1;if(l.top-o.top<=3){var h=(N?a:s)&&c,f=(N?s:a)&&u?T:(i?o:l).left,d=h?M:(i?l:o).right;O(f,o.top,d-f,o.bottom)}else{var p,g,v,m;m=i?(p=N&&s&&u?T:o.left,g=N?M:L(e,r,"before"),v=N?T:L(t,r,"after"),N&&a&&c?M:l.right):(p=N?L(e,r,"before"):T,g=!N&&s&&u?M:o.right,v=!N&&a&&c?T:l.left,N?L(t,r,"after"):M),O(p,o.top,g-p,o.bottom),o.bottom<l.top&&O(T,o.bottom,null,l.top),O(v,l.top,m-v,l.bottom)}(!w||Ln(o,w)<0)&&(w=o),Ln(l,w)<0&&(w=l),(!x||Ln(o,x)<0)&&(x=o),Ln(l,x)<0&&(x=l)}),{start:w,end:x}}var a=e.from(),u=e.to();if(a.line==u.line)s(a.line,a.ch,u.ch);else{var c=et(n,a.line),h=et(n,u.line),f=Xt(c)==Xt(h),d=s(a.line,a.ch,f?c.text.length+1:null).end,p=s(u.line,f?0:null,u.ch).start;f&&(d.top<p.top-2?(O(d.right,d.top,null,d.bottom),O(T,p.top,p.left,p.bottom)):O(d.right,d.top,p.left-d.right,d.bottom)),d.bottom<p.top&&O(T,d.bottom,null,p.top)}t.appendChild(i)}function Tn(e){if(e.state.focused){var t=e.display;clearInterval(t.blinker);var r=!0;t.cursorDiv.style.visibility="",0<e.options.cursorBlinkRate?t.blinker=setInterval(function(){return t.cursorDiv.style.visibility=(r=!r)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function Mn(e){e.state.focused||(e.display.input.focus(),On(e))}function Nn(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,An(e))},100)}function On(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(Se(e,"focus",e,t),e.state.focused=!0,H(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),b&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Tn(e))}function An(e,t){e.state.delayingBlurEvent||(e.state.focused&&(Se(e,"blur",e,t),e.state.focused=!1,T(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Dn(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=0;n<t.view.length;n++){var i=t.view[n],o=e.options.lineWrapping,l=void 0,s=0;if(!i.hidden){if(x&&C<8){var a=i.node.offsetTop+i.node.offsetHeight;l=a-r,r=a}else{var u=i.node.getBoundingClientRect();l=u.bottom-u.top,!o&&i.text.firstChild&&(s=i.text.firstChild.getBoundingClientRect().right-u.left-1)}var c=i.line.height-l;if((.005<c||c<-.005)&&(nt(i.line,l),Wn(i.line),i.rest))for(var h=0;h<i.rest.length;h++)Wn(i.rest[h]);if(s>e.display.sizerWidth){var f=Math.ceil(s/un(e.display));f>e.display.maxLineLength&&(e.display.maxLineLength=f,e.display.maxLine=i.line,e.display.maxLineChanged=!0)}}}}function Wn(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t){var r=e.widgets[t],n=r.node.parentNode;n&&(r.height=n.offsetHeight)}}function Hn(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop;n=Math.floor(n-Or(e));var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=ot(t,n),l=ot(t,i);if(r&&r.ensure){var s=r.ensure.from.line,a=r.ensure.to.line;s<o?l=ot(t,Zt(et(t,o=s))+e.wrapper.clientHeight):Math.min(a,t.lastLine())>=l&&(o=ot(t,Zt(et(t,a))-e.wrapper.clientHeight),l=a)}return{from:o,to:Math.max(l,o+1)}}function Fn(e,t){var r=e.display,n=an(e.display);t.top<0&&(t.top=0);var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:r.scroller.scrollTop,o=Fr(e),l={};t.bottom-t.top>o&&(t.bottom=t.top+o);var s=e.doc.height+Ar(r),a=t.top<n,u=t.bottom>s-n;if(t.top<i)l.scrollTop=a?0:t.top;else if(t.bottom>i+o){var c=Math.min(t.top,(u?s:t.bottom)-o);c!=i&&(l.scrollTop=c)}var h=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:r.scroller.scrollLeft,f=Hr(e)-(e.options.fixedGutter?r.gutters.offsetWidth:0),d=t.right-t.left>f;return d&&(t.right=t.left+f),t.left<10?l.scrollLeft=0:t.left<h?l.scrollLeft=Math.max(0,t.left-(d?0:10)):t.right>f+h-3&&(l.scrollLeft=t.right+(d?0:10)-f),l}function Pn(e,t){null!=t&&(zn(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t)}function En(e){zn(e);var t=e.getCursor();e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin}}function In(e,t,r){null==t&&null==r||zn(e),null!=t&&(e.curOp.scrollLeft=t),null!=r&&(e.curOp.scrollTop=r)}function zn(e){var t=e.curOp.scrollToPos;t&&(e.curOp.scrollToPos=null,Rn(e,en(e,t.from),en(e,t.to),t.margin))}function Rn(e,t,r,n){var i=Fn(e,{left:Math.min(t.left,r.left),top:Math.min(t.top,r.top)-n,right:Math.max(t.right,r.right),bottom:Math.max(t.bottom,r.bottom)+n});In(e,i.scrollLeft,i.scrollTop)}function Bn(e,t){Math.abs(e.doc.scrollTop-t)<2||(g||fi(e,{top:t}),Gn(e,t,!0),g&&fi(e),si(e,100))}function Gn(e,t,r){t=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t)),e.display.scroller.scrollTop==t&&!r||(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t))}function Un(e,t,r,n){t=Math.max(0,Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!n||(e.doc.scrollLeft=t,gi(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function Vn(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+Ar(e.display));return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+Wr(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r}}function Kn(e,t,r){this.cm=r;var n=this.vert=A("div",[A("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),i=this.horiz=A("div",[A("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");n.tabIndex=i.tabIndex=-1,e(n),e(i),we(n,"scroll",function(){n.clientHeight&&t(n.scrollTop,"vertical")}),we(i,"scroll",function(){i.clientWidth&&t(i.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,x&&C<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}Kn.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth;if(r){this.vert.style.display="block",this.vert.style.bottom=t?n+"px":"0";var i=e.viewHeight-(t?n:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0";if(t){this.horiz.style.display="block",this.horiz.style.right=r?n+"px":"0",this.horiz.style.left=e.barLeft+"px";var o=e.viewWidth-e.barLeft-(r?n:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&0<e.clientHeight&&(0==n&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:r?n:0,bottom:t?n:0}},Kn.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Kn.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Kn.prototype.zeroWidthHack=function(){var e=w&&!s?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new R,this.disableVert=new R},Kn.prototype.enableZeroWidthBar=function(r,n,i){r.style.pointerEvents="auto",n.set(1e3,function e(){var t=r.getBoundingClientRect();("vert"==i?document.elementFromPoint(t.right-1,(t.top+t.bottom)/2):document.elementFromPoint((t.right+t.left)/2,t.bottom-1))!=r?r.style.pointerEvents="none":n.set(1e3,e)})},Kn.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};function jn(){}function Xn(e,t){t=t||Vn(e);var r=e.display.barWidth,n=e.display.barHeight;Yn(e,t);for(var i=0;i<4&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&Dn(e),Yn(e,Vn(e)),r=e.display.barWidth,n=e.display.barHeight}function Yn(e,t){var r=e.display,n=r.scrollbars.update(t);r.sizer.style.paddingRight=(r.barWidth=n.right)+"px",r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+"px",r.heightForcer.style.borderBottom=n.bottom+"px solid transparent",n.right&&n.bottom?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=n.bottom+"px",r.scrollbarFiller.style.width=n.right+"px"):r.scrollbarFiller.style.display="",n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n.bottom+"px",r.gutterFiller.style.width=t.gutterWidth+"px"):r.gutterFiller.style.display=""}jn.prototype.update=function(){return{bottom:0,right:0}},jn.prototype.setScrollLeft=function(){},jn.prototype.setScrollTop=function(){},jn.prototype.clear=function(){};var _n={native:Kn,null:jn};function $n(r){r.display.scrollbars&&(r.display.scrollbars.clear(),r.display.scrollbars.addClass&&T(r.display.wrapper,r.display.scrollbars.addClass)),r.display.scrollbars=new _n[r.options.scrollbarStyle](function(e){r.display.wrapper.insertBefore(e,r.display.scrollbarFiller),we(e,"mousedown",function(){r.state.focused&&setTimeout(function(){return r.display.input.focus()},0)}),e.setAttribute("cm-not-content","true")},function(e,t){("horizontal"==t?Un:Bn)(r,e)},r),r.display.scrollbars.addClass&&H(r.display.wrapper,r.display.scrollbars.addClass)}var qn=0;function Zn(e){var t;e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++qn},t=e.curOp,fr?fr.ops.push(t):t.ownsGroup=fr={ops:[t],delayedCallbacks:[]}}function Qn(e){var t=e.curOp;t&&dr(t,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null;!function(e){for(var t=e.ops,r=0;r<t.length;r++)Jn(t[r]);for(var n=0;n<t.length;n++)(i=t[n]).updatedDisplay=i.mustUpdate&&ci(i.cm,i.update);var i;for(var o=0;o<t.length;o++)ei(t[o]);for(var l=0;l<t.length;l++)ti(t[l]);for(var s=0;s<t.length;s++)ri(t[s])}(e)})}function Jn(e){var t,r,n=e.cm,i=n.display;!(r=(t=n).display).scrollbarsClipped&&r.scroller.offsetWidth&&(r.nativeBarWidth=r.scroller.offsetWidth-r.scroller.clientWidth,r.heightForcer.style.height=Wr(t)+"px",r.sizer.style.marginBottom=-r.nativeBarWidth+"px",r.sizer.style.borderRightWidth=Wr(t)+"px",r.scrollbarsClipped=!0),e.updateMaxLine&&Jt(n),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<i.viewFrom||e.scrollToPos.to.line>=i.viewTo)||i.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new ui(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function ei(e){var t=e.cm,r=t.display;e.updatedDisplay&&Dn(t),e.barMeasure=Vn(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Er(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+Wr(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-Hr(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection())}function ti(e){var t=e.cm;null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Un(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1);var r=e.focus&&e.focus==W();e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,r),!e.updatedDisplay&&e.startHeight==t.doc.height||Xn(t,e.barMeasure),e.updatedDisplay&&pi(t,e.barMeasure),e.selectionChanged&&Tn(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),r&&Mn(e.cm)}function ri(e){var t=e.cm,r=t.display,n=t.doc;e.updatedDisplay&&hi(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null!=e.scrollTop&&Gn(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&Un(t,e.scrollLeft,!0,!0),e.scrollToPos&&function(e,t){if(!Le(e,"scrollCursorIntoView")){var r=e.display,n=r.sizer.getBoundingClientRect(),i=null;if(t.top+n.top<0?i=!0:t.bottom+n.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1),null!=i&&!u){var o=A("div","​",null,"position: absolute;\n                         top: "+(t.top-r.viewOffset-Or(e.display))+"px;\n                         height: "+(t.bottom-t.top+Wr(e)+r.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;");e.display.lineSpace.appendChild(o),o.scrollIntoView(i),e.display.lineSpace.removeChild(o)}}}(t,function(e,t,r,n){var i;null==n&&(n=0),e.options.lineWrapping||t!=r||(r="before"==(t=t.ch?at(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t).sticky?at(t.line,t.ch+1,"before"):t);for(var o=0;o<5;o++){var l=!1,s=Jr(e,t),a=r&&r!=t?Jr(e,r):s,u=Fn(e,i={left:Math.min(s.left,a.left),top:Math.min(s.top,a.top)-n,right:Math.max(s.left,a.left),bottom:Math.max(s.bottom,a.bottom)+n}),c=e.doc.scrollTop,h=e.doc.scrollLeft;if(null!=u.scrollTop&&(Bn(e,u.scrollTop),1<Math.abs(e.doc.scrollTop-c)&&(l=!0)),null!=u.scrollLeft&&(Un(e,u.scrollLeft),1<Math.abs(e.doc.scrollLeft-h)&&(l=!0)),!l)break}return i}(t,gt(n,e.scrollToPos.from),gt(n,e.scrollToPos.to),e.scrollToPos.margin));var i=e.maybeHiddenMarkers,o=e.maybeUnhiddenMarkers;if(i)for(var l=0;l<i.length;++l)i[l].lines.length||Se(i[l],"hide");if(o)for(var s=0;s<o.length;++s)o[s].lines.length&&Se(o[s],"unhide");r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&Se(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function ni(e,t){if(e.curOp)return t();Zn(e);try{return t()}finally{Qn(e)}}function ii(e,t){return function(){if(e.curOp)return t.apply(e,arguments);Zn(e);try{return t.apply(e,arguments)}finally{Qn(e)}}}function oi(e){return function(){if(this.curOp)return e.apply(this,arguments);Zn(this);try{return e.apply(this,arguments)}finally{Qn(this)}}}function li(t){return function(){var e=this.cm;if(!e||e.curOp)return t.apply(this,arguments);Zn(e);try{return t.apply(this,arguments)}finally{Qn(e)}}}function si(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,E(ai,e))}function ai(a){var u=a.doc;if(!(u.highlightFrontier>=a.display.viewTo)){var c=+new Date+a.options.workTime,h=xt(a,u.highlightFrontier),f=[];u.iter(h.line,Math.min(u.first+u.size,a.display.viewTo+500),function(e){if(h.line>=a.display.viewFrom){var t=e.styles,r=e.text.length>a.options.maxHighlightLength?qe(u.mode,h.state):null,n=bt(a,e,h,!0);r&&(h.state=r),e.styles=n.styles;var i=e.styleClasses,o=n.classes;o?e.styleClasses=o:i&&(e.styleClasses=null);for(var l=!t||t.length!=e.styles.length||i!=o&&(!i||!o||i.bgClass!=o.bgClass||i.textClass!=o.textClass),s=0;!l&&s<t.length;++s)l=t[s]!=e.styles[s];l&&f.push(h.line),e.stateAfter=h.save(),h.nextLine()}else e.text.length<=a.options.maxHighlightLength&&Ct(a,e.text,h),e.stateAfter=h.line%5==0?h.save():null,h.nextLine();if(+new Date>c)return si(a,a.options.workDelay),!0}),u.highlightFrontier=h.line,u.modeFrontier=Math.max(u.modeFrontier,h.line),f.length&&ni(a,function(){for(var e=0;e<f.length;e++)mn(a,f[e],"text")})}}var ui=function(e,t,r){var n=e.display;this.viewport=t,this.visible=Hn(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=Hr(e),this.force=r,this.dims=cn(e),this.events=[]};function ci(e,t){var r=e.display,n=e.doc;if(t.editorIsHidden)return yn(e),!1;if(!t.force&&t.visible.from>=r.viewFrom&&t.visible.to<=r.viewTo&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo)&&r.renderedView==r.view&&0==wn(e))return!1;vi(e)&&(yn(e),t.dims=cn(e));var i=n.first+n.size,o=Math.max(t.visible.from-e.options.viewportMargin,n.first),l=Math.min(i,t.visible.to+e.options.viewportMargin);r.viewFrom<o&&o-r.viewFrom<20&&(o=Math.max(n.first,r.viewFrom)),r.viewTo>l&&r.viewTo-l<20&&(l=Math.min(i,r.viewTo)),At&&(o=Yt(e.doc,o),l=_t(e.doc,l));var s,a,u,c,h=o!=r.viewFrom||l!=r.viewTo||r.lastWrapHeight!=t.wrapperHeight||r.lastWrapWidth!=t.wrapperWidth;a=o,u=l,0==(c=(s=e).display).view.length||a>=c.viewTo||u<=c.viewFrom?(c.view=hr(s,a,u),c.viewFrom=a):(c.viewFrom>a?c.view=hr(s,a,c.viewFrom).concat(c.view):c.viewFrom<a&&(c.view=c.view.slice(gn(s,a))),c.viewFrom=a,c.viewTo<u?c.view=c.view.concat(hr(s,c.viewTo,u)):c.viewTo>u&&(c.view=c.view.slice(0,gn(s,u)))),c.viewTo=u,r.viewOffset=Zt(et(e.doc,r.viewFrom)),e.display.mover.style.top=r.viewOffset+"px";var f=wn(e);if(!h&&0==f&&!t.force&&r.renderedView==r.view&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo))return!1;var d=function(e){if(e.hasFocus())return null;var t=W();if(!t||!D(e.display.lineDiv,t))return null;var r={activeElt:t};if(window.getSelection){var n=window.getSelection();n.anchorNode&&n.extend&&D(e.display.lineDiv,n.anchorNode)&&(r.anchorNode=n.anchorNode,r.anchorOffset=n.anchorOffset,r.focusNode=n.focusNode,r.focusOffset=n.focusOffset)}return r}(e);return 4<f&&(r.lineDiv.style.display="none"),function(r,e,t){var n=r.display,i=r.options.lineNumbers,o=n.lineDiv,l=o.firstChild;function s(e){var t=e.nextSibling;return b&&w&&r.display.currentWheelTarget==e?e.style.display="none":e.parentNode.removeChild(e),t}for(var a=n.view,u=n.viewFrom,c=0;c<a.length;c++){var h=a[c];if(!h.hidden)if(h.node&&h.node.parentNode==o){for(;l!=h.node;)l=s(l);var f=i&&null!=e&&e<=u&&h.lineNumber;h.changes&&(-1<B(h.changes,"gutter")&&(f=!1),mr(r,h,u,t)),f&&(M(h.lineNumber),h.lineNumber.appendChild(document.createTextNode(st(r.options,u)))),l=h.node.nextSibling}else{var d=(v=u,m=t,y=br(p=r,g=h),g.text=g.node=y.pre,y.bgClass&&(g.bgClass=y.bgClass),y.textClass&&(g.textClass=y.textClass),xr(p,g),Cr(p,g,v,m),Lr(p,g,m),g.node);o.insertBefore(d,l)}u+=h.size}var p,g,v,m,y;for(;l;)l=s(l)}(e,r.updateLineNumbers,t.dims),4<f&&(r.lineDiv.style.display=""),r.renderedView=r.view,function(e){if(e&&e.activeElt&&e.activeElt!=W()&&(e.activeElt.focus(),e.anchorNode&&D(document.body,e.anchorNode)&&D(document.body,e.focusNode))){var t=window.getSelection(),r=document.createRange();r.setEnd(e.anchorNode,e.anchorOffset),r.collapse(!1),t.removeAllRanges(),t.addRange(r),t.extend(e.focusNode,e.focusOffset)}}(d),M(r.cursorDiv),M(r.selectionDiv),r.gutters.style.height=r.sizer.style.minHeight=0,h&&(r.lastWrapHeight=t.wrapperHeight,r.lastWrapWidth=t.wrapperWidth,si(e,400)),!(r.updateLineNumbers=null)}function hi(e,t){for(var r=t.viewport,n=!0;;n=!1){if(n&&e.options.lineWrapping&&t.oldDisplayWidth!=Hr(e))n&&(t.visible=Hn(e.display,e.doc,r));else if(r&&null!=r.top&&(r={top:Math.min(e.doc.height+Ar(e.display)-Fr(e),r.top)}),t.visible=Hn(e.display,e.doc,r),t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)break;if(!ci(e,t))break;Dn(e);var i=Vn(e);xn(e),Xn(e,i),pi(e,i),t.force=!1}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function fi(e,t){var r=new ui(e,t);if(ci(e,r)){Dn(e),hi(e,r);var n=Vn(e);xn(e),Xn(e,n),pi(e,n),r.finish()}}function di(e){var t=e.gutters.offsetWidth;e.sizer.style.marginLeft=t+"px"}function pi(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Wr(e)+"px"}function gi(e){var t=e.display,r=t.view;if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=hn(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",l=0;l<r.length;l++)if(!r[l].hidden){e.options.fixedGutter&&(r[l].gutter&&(r[l].gutter.style.left=o),r[l].gutterBackground&&(r[l].gutterBackground.style.left=o));var s=r[l].alignable;if(s)for(var a=0;a<s.length;a++)s[a].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px")}}function vi(e){if(e.options.lineNumbers){var t=e.doc,r=st(e.options,t.first+t.size-1),n=e.display;if(r.length!=n.lineNumChars){var i=n.measure.appendChild(A("div",[A("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,l=i.offsetWidth-o;return n.lineGutter.style.width="",n.lineNumInnerWidth=Math.max(o,n.lineGutter.offsetWidth-l)+1,n.lineNumWidth=n.lineNumInnerWidth+l,n.lineNumChars=n.lineNumInnerWidth?r.length:-1,n.lineGutter.style.width=n.lineNumWidth+"px",di(e.display),1}}}function mi(e,t){for(var r=[],n=!1,i=0;i<e.length;i++){var o=e[i],l=null;if("string"!=typeof o&&(l=o.style,o=o.className),"CodeMirror-linenumbers"==o){if(!t)continue;n=!0}r.push({className:o,style:l})}return t&&!n&&r.push({className:"CodeMirror-linenumbers",style:null}),r}function yi(e){var t=e.gutters,r=e.gutterSpecs;M(t),e.lineGutter=null;for(var n=0;n<r.length;++n){var i=r[n],o=i.className,l=i.style,s=t.appendChild(A("div",null,"CodeMirror-gutter "+o));l&&(s.style.cssText=l),"CodeMirror-linenumbers"==o&&((e.lineGutter=s).style.width=(e.lineNumWidth||1)+"px")}t.style.display=r.length?"":"none",di(e)}function bi(e){yi(e.display),vn(e),gi(e)}function wi(e,t,r,n){var i=this;this.input=r,i.scrollbarFiller=A("div",null,"CodeMirror-scrollbar-filler"),i.scrollbarFiller.setAttribute("cm-not-content","true"),i.gutterFiller=A("div",null,"CodeMirror-gutter-filler"),i.gutterFiller.setAttribute("cm-not-content","true"),i.lineDiv=O("div",null,"CodeMirror-code"),i.selectionDiv=A("div",null,null,"position: relative; z-index: 1"),i.cursorDiv=A("div",null,"CodeMirror-cursors"),i.measure=A("div",null,"CodeMirror-measure"),i.lineMeasure=A("div",null,"CodeMirror-measure"),i.lineSpace=O("div",[i.measure,i.lineMeasure,i.selectionDiv,i.cursorDiv,i.lineDiv],null,"position: relative; outline: none");var o=O("div",[i.lineSpace],"CodeMirror-lines");i.mover=A("div",[o],null,"position: relative"),i.sizer=A("div",[i.mover],"CodeMirror-sizer"),i.sizerWidth=null,i.heightForcer=A("div",null,null,"position: absolute; height: "+G+"px; width: 1px;"),i.gutters=A("div",null,"CodeMirror-gutters"),i.lineGutter=null,i.scroller=A("div",[i.sizer,i.heightForcer,i.gutters],"CodeMirror-scroll"),i.scroller.setAttribute("tabIndex","-1"),i.wrapper=A("div",[i.scrollbarFiller,i.gutterFiller,i.scroller],"CodeMirror"),x&&C<8&&(i.gutters.style.zIndex=-1,i.scroller.style.paddingRight=0),b||g&&f||(i.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(i.wrapper):e(i.wrapper)),i.viewFrom=i.viewTo=t.first,i.reportedViewFrom=i.reportedViewTo=t.first,i.view=[],i.renderedView=null,i.externalMeasured=null,i.viewOffset=0,i.lastWrapHeight=i.lastWrapWidth=0,i.updateLineNumbers=null,i.nativeBarWidth=i.barHeight=i.barWidth=0,i.scrollbarsClipped=!1,i.lineNumWidth=i.lineNumInnerWidth=i.lineNumChars=null,i.alignWidgets=!1,i.cachedCharWidth=i.cachedTextHeight=i.cachedPaddingH=null,i.maxLine=null,i.maxLineLength=0,i.maxLineChanged=!1,i.wheelDX=i.wheelDY=i.wheelStartX=i.wheelStartY=null,i.shift=!1,i.selForContextMenu=null,i.activeTouch=null,i.gutterSpecs=mi(n.gutters,n.lineNumbers),yi(i),r.init(i)}ui.prototype.signal=function(e,t){Te(e,t)&&this.events.push(arguments)},ui.prototype.finish=function(){for(var e=0;e<this.events.length;e++)Se.apply(null,this.events[e])};var xi=0,Ci=null;function Si(e){var t=e.wheelDeltaX,r=e.wheelDeltaY;return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r}}function Li(e){var t=Si(e);return t.x*=Ci,t.y*=Ci,t}function ki(e,t){var r=Si(t),n=r.x,i=r.y,o=e.display,l=o.scroller,s=l.scrollWidth>l.clientWidth,a=l.scrollHeight>l.clientHeight;if(n&&s||i&&a){if(i&&w&&b)e:for(var u=t.target,c=o.view;u!=l;u=u.parentNode)for(var h=0;h<c.length;h++)if(c[h].node==u){e.display.currentWheelTarget=u;break e}if(n&&!g&&!v&&null!=Ci)return i&&a&&Bn(e,Math.max(0,l.scrollTop+i*Ci)),Un(e,Math.max(0,l.scrollLeft+n*Ci)),(!i||i&&a)&&Ne(t),void(o.wheelStartX=null);if(i&&null!=Ci){var f=i*Ci,d=e.doc.scrollTop,p=d+o.wrapper.clientHeight;f<0?d=Math.max(0,d+f-50):p=Math.min(e.doc.height,p+f+50),fi(e,{top:d,bottom:p})}xi<20&&(null==o.wheelStartX?(o.wheelStartX=l.scrollLeft,o.wheelStartY=l.scrollTop,o.wheelDX=n,o.wheelDY=i,setTimeout(function(){if(null!=o.wheelStartX){var e=l.scrollLeft-o.wheelStartX,t=l.scrollTop-o.wheelStartY,r=t&&o.wheelDY&&t/o.wheelDY||e&&o.wheelDX&&e/o.wheelDX;o.wheelStartX=o.wheelStartY=null,r&&(Ci=(Ci*xi+r)/(xi+1),++xi)}},200)):(o.wheelDX+=n,o.wheelDY+=i))}}x?Ci=-.53:g?Ci=15:l?Ci=-.7:a&&(Ci=-1/3);var Ti=function(e,t){this.ranges=e,this.primIndex=t};Ti.prototype.primary=function(){return this.ranges[this.primIndex]},Ti.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var t=0;t<this.ranges.length;t++){var r=this.ranges[t],n=e.ranges[t];if(!ct(r.anchor,n.anchor)||!ct(r.head,n.head))return!1}return!0},Ti.prototype.deepCopy=function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new Mi(ht(this.ranges[t].anchor),ht(this.ranges[t].head));return new Ti(e,this.primIndex)},Ti.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Ti.prototype.contains=function(e,t){t=t||e;for(var r=0;r<this.ranges.length;r++){var n=this.ranges[r];if(0<=ut(t,n.from())&&ut(e,n.to())<=0)return r}return-1};var Mi=function(e,t){this.anchor=e,this.head=t};function Ni(e,t,r){var n=e&&e.options.selectionsMayTouch,i=t[r];t.sort(function(e,t){return ut(e.from(),t.from())}),r=B(t,i);for(var o=1;o<t.length;o++){var l=t[o],s=t[o-1],a=ut(s.to(),l.from());if(n&&!l.empty()?0<a:0<=a){var u=dt(s.from(),l.from()),c=ft(s.to(),l.to()),h=s.empty()?l.from()==l.head:s.from()==s.head;o<=r&&--r,t.splice(--o,2,new Mi(h?c:u,h?u:c))}}return new Ti(t,r)}function Oi(e,t){return new Ti([new Mi(e,t||e)],0)}function Ai(e){return e.text?at(e.from.line+e.text.length-1,$(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function Di(e,t){if(ut(e,t.from)<0)return e;if(ut(e,t.to)<=0)return Ai(t);var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch;return e.line==t.to.line&&(n+=Ai(t).ch-t.to.ch),at(r,n)}function Wi(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n];r.push(new Mi(Di(i.anchor,t),Di(i.head,t)))}return Ni(e.cm,r,e.sel.primIndex)}function Hi(e,t,r){return e.line==t.line?at(r.line,e.ch-t.ch+r.ch):at(r.line+(e.line-t.line),e.ch)}function Fi(e){e.doc.mode=Ye(e.options,e.doc.modeOption),Pi(e)}function Pi(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,si(e,100),e.state.modeGen++,e.curOp&&vn(e)}function Ei(e,t){return 0==t.from.ch&&0==t.to.ch&&""==$(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Ii(e,n,t,i){function o(e){return t?t[e]:null}function r(e,t,r){!function(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),Et(e),It(e,r);var i=n?n(e):1;i!=e.height&&nt(e,i)}(e,t,r,i),gr(e,"change",e,n)}function l(e,t){for(var r=[],n=e;n<t;++n)r.push(new er(u[n],o(n),i));return r}var s=n.from,a=n.to,u=n.text,c=et(e,s.line),h=et(e,a.line),f=$(u),d=o(u.length-1),p=a.line-s.line;if(n.full)e.insert(0,l(0,u.length)),e.remove(u.length,e.size-u.length);else if(Ei(e,n)){var g=l(0,u.length-1);r(h,h.text,d),p&&e.remove(s.line,p),g.length&&e.insert(s.line,g)}else if(c==h)if(1==u.length)r(c,c.text.slice(0,s.ch)+f+c.text.slice(a.ch),d);else{var v=l(1,u.length-1);v.push(new er(f+c.text.slice(a.ch),d,i)),r(c,c.text.slice(0,s.ch)+u[0],o(0)),e.insert(s.line+1,v)}else if(1==u.length)r(c,c.text.slice(0,s.ch)+u[0]+h.text.slice(a.ch),o(0)),e.remove(s.line+1,p);else{r(c,c.text.slice(0,s.ch)+u[0],o(0)),r(h,f+h.text.slice(a.ch),d);var m=l(1,u.length-1);1<p&&e.remove(s.line+1,p-1),e.insert(s.line+1,m)}gr(e,"change",e,n)}function zi(e,s,a){!function e(t,r,n){if(t.linked)for(var i=0;i<t.linked.length;++i){var o=t.linked[i];if(o.doc!=r){var l=n&&o.sharedHist;a&&!l||(s(o.doc,l),e(o.doc,t,l))}}}(e,null,!0)}function Ri(e,t){if(t.cm)throw new Error("This document is already in use.");dn((e.doc=t).cm=e),Fi(e),Bi(e),e.options.lineWrapping||Jt(e),e.options.mode=t.modeOption,vn(e)}function Bi(e){("rtl"==e.doc.direction?H:T)(e.display.lineDiv,"CodeMirror-rtl")}function Gi(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function Ui(e,t){var r={from:ht(t.from),to:Ai(t),text:tt(e,t.from,t.to)};return Yi(e,r,t.from.line,t.to.line+1),zi(e,function(e){return Yi(e,r,t.from.line,t.to.line+1)},!0),r}function Vi(e){for(;e.length;){if(!$(e).ranges)break;e.pop()}}function Ki(e,t,r,n){var i=e.history;i.undone.length=0;var o,l,s,a=+new Date;if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&i.lastModTime>a-(e.cm?e.cm.options.historyEventDelay:500)||"*"==t.origin.charAt(0)))&&(o=(s=i).lastOp==n?(Vi(s.done),$(s.done)):s.done.length&&!$(s.done).ranges?$(s.done):1<s.done.length&&!s.done[s.done.length-2].ranges?(s.done.pop(),$(s.done)):void 0))l=$(o.changes),0==ut(t.from,t.to)&&0==ut(t.from,l.to)?l.to=Ai(t):o.changes.push(Ui(e,t));else{var u=$(i.done);for(u&&u.ranges||Xi(e.sel,i.done),o={changes:[Ui(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=a,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,l||Se(e,"historyAdded")}function ji(e,t,r,n){var i,o,l,s,a,u=e.history,c=n&&n.origin;r==u.lastSelOp||c&&u.lastSelOrigin==c&&(u.lastModTime==u.lastSelTime&&u.lastOrigin==c||(i=e,o=c,l=$(u.done),s=t,"*"==(a=o.charAt(0))||"+"==a&&l.ranges.length==s.ranges.length&&l.somethingSelected()==s.somethingSelected()&&new Date-i.history.lastSelTime<=(i.cm?i.cm.options.historyEventDelay:500)))?u.done[u.done.length-1]=t:Xi(t,u.done),u.lastSelTime=+new Date,u.lastSelOrigin=c,u.lastSelOp=r,n&&!1!==n.clearRedo&&Vi(u.undone)}function Xi(e,t){var r=$(t);r&&r.ranges&&r.equals(e)||t.push(e)}function Yi(t,r,e,n){var i=r["spans_"+t.id],o=0;t.iter(Math.max(t.first,e),Math.min(t.first+t.size,n),function(e){e.markedSpans&&((i=i||(r["spans_"+t.id]={}))[o]=e.markedSpans),++o})}function _i(e){if(!e)return null;for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t=t||e.slice(0,r):t&&t.push(e[r]);return t?t.length?t:null:e}function $i(e,t){var r=function(e,t){var r=t["spans_"+e.id];if(!r)return null;for(var n=[],i=0;i<t.text.length;++i)n.push(_i(r[i]));return n}(e,t),n=Ft(e,t);if(!r)return n;if(!n)return r;for(var i=0;i<r.length;++i){var o=r[i],l=n[i];if(o&&l)e:for(var s=0;s<l.length;++s){for(var a=l[s],u=0;u<o.length;++u)if(o[u].marker==a.marker)continue e;o.push(a)}else l&&(r[i]=l)}return r}function qi(e,t,r){for(var n=[],i=0;i<e.length;++i){var o=e[i];if(o.ranges)n.push(r?Ti.prototype.deepCopy.call(o):o);else{var l=o.changes,s=[];n.push({changes:s});for(var a=0;a<l.length;++a){var u=l[a],c=void 0;if(s.push({from:u.from,to:u.to,text:u.text}),t)for(var h in u)(c=h.match(/^spans_(\d+)$/))&&-1<B(t,Number(c[1]))&&($(s)[h]=u[h],delete u[h])}}}return n}function Zi(e,t,r,n){if(n){var i=e.anchor;if(r){var o=ut(t,i)<0;o!=ut(r,i)<0?(i=t,t=r):o!=ut(t,r)<0&&(t=r)}return new Mi(i,t)}return new Mi(r||t,t)}function Qi(e,t,r,n,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),no(e,new Ti([Zi(e.sel.primary(),t,r,i)],0),n)}function Ji(e,t,r){for(var n=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)n[o]=Zi(e.sel.ranges[o],t[o],null,i);no(e,Ni(e.cm,n,e.sel.primIndex),r)}function eo(e,t,r,n){var i=e.sel.ranges.slice(0);i[t]=r,no(e,Ni(e.cm,i,e.sel.primIndex),n)}function to(e,t,r,n){no(e,Oi(t,r),n)}function ro(e,t,r){var n=e.history.done,i=$(n);i&&i.ranges?io(e,n[n.length-1]=t,r):no(e,t,r)}function no(e,t,r){io(e,t,r),ji(e,e.sel,e.cm?e.cm.curOp.id:NaN,r)}function io(e,t,r){var n,i,o,l;(Te(e,"beforeSelectionChange")||e.cm&&Te(e.cm,"beforeSelectionChange"))&&(n=e,o=r,l={ranges:(i=t).ranges,update:function(e){this.ranges=[];for(var t=0;t<e.length;t++)this.ranges[t]=new Mi(gt(n,e[t].anchor),gt(n,e[t].head))},origin:o&&o.origin},Se(n,"beforeSelectionChange",n,l),n.cm&&Se(n.cm,"beforeSelectionChange",n.cm,l),t=l.ranges!=i.ranges?Ni(n.cm,l.ranges,l.ranges.length-1):i);var s=r&&r.bias||(ut(t.primary().head,e.sel.primary().head)<0?-1:1);oo(e,so(e,t,s,!0)),r&&!1===r.scroll||!e.cm||En(e.cm)}function oo(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,ke(e.cm)),gr(e,"cursorActivity",e))}function lo(e){oo(e,so(e,e.sel,null,!1))}function so(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var l=t.ranges[o],s=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],a=uo(e,l.anchor,s&&s.anchor,r,n),u=uo(e,l.head,s&&s.head,r,n);!i&&a==l.anchor&&u==l.head||((i=i||t.ranges.slice(0,o))[o]=new Mi(a,u))}return i?Ni(e.cm,i,t.primIndex):t}function ao(e,t,r,n,i){var o=et(e,t.line);if(o.markedSpans)for(var l=0;l<o.markedSpans.length;++l){var s=o.markedSpans[l],a=s.marker,u="selectLeft"in a?!a.selectLeft:a.inclusiveLeft,c="selectRight"in a?!a.selectRight:a.inclusiveRight;if((null==s.from||(u?s.from<=t.ch:s.from<t.ch))&&(null==s.to||(c?s.to>=t.ch:s.to>t.ch))){if(i&&(Se(a,"beforeCursorEnter"),a.explicitlyCleared)){if(o.markedSpans){--l;continue}break}if(!a.atomic)continue;if(r){var h=a.find(n<0?1:-1),f=void 0;if((n<0?c:u)&&(h=co(e,h,-n,h&&h.line==t.line?o:null)),h&&h.line==t.line&&(f=ut(h,r))&&(n<0?f<0:0<f))return ao(e,h,t,n,i)}var d=a.find(n<0?-1:1);return(n<0?u:c)&&(d=co(e,d,n,d.line==t.line?o:null)),d?ao(e,d,t,n,i):null}}return t}function uo(e,t,r,n,i){var o=n||1,l=ao(e,t,r,o,i)||!i&&ao(e,t,r,o,!0)||ao(e,t,r,-o,i)||!i&&ao(e,t,r,-o,!0);return l||(e.cantEdit=!0,at(e.first,0))}function co(e,t,r,n){return r<0&&0==t.ch?t.line>e.first?gt(e,at(t.line-1)):null:0<r&&t.ch==(n||et(e,t.line)).text.length?t.line<e.first+e.size-1?at(t.line+1,0):null:new at(t.line,t.ch+r)}function ho(e){e.setSelection(at(e.firstLine(),0),at(e.lastLine()),V)}function fo(i,e,t){var o={canceled:!1,from:e.from,to:e.to,text:e.text,origin:e.origin,cancel:function(){return o.canceled=!0}};return t&&(o.update=function(e,t,r,n){e&&(o.from=gt(i,e)),t&&(o.to=gt(i,t)),r&&(o.text=r),void 0!==n&&(o.origin=n)}),Se(i,"beforeChange",i,o),i.cm&&Se(i.cm,"beforeChange",i.cm,o),o.canceled?(i.cm&&(i.cm.curOp.updateInput=2),null):{from:o.from,to:o.to,text:o.text,origin:o.origin}}function po(e,t,r){if(e.cm){if(!e.cm.curOp)return ii(e.cm,po)(e,t,r);if(e.cm.state.suppressEdits)return}if(!(Te(e,"beforeChange")||e.cm&&Te(e.cm,"beforeChange"))||(t=fo(e,t,!0))){var n=Ot&&!r&&function(e,t,r){var n=null;if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker;!r.readOnly||n&&-1!=B(n,r)||(n=n||[]).push(r)}}),!n)return null;for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var l=n[o],s=l.find(0),a=0;a<i.length;++a){var u=i[a];if(!(ut(u.to,s.from)<0||0<ut(u.from,s.to))){var c=[a,1],h=ut(u.from,s.from),f=ut(u.to,s.to);(h<0||!l.inclusiveLeft&&!h)&&c.push({from:u.from,to:s.from}),(0<f||!l.inclusiveRight&&!f)&&c.push({from:s.to,to:u.to}),i.splice.apply(i,c),a+=c.length-3}}return i}(e,t.from,t.to);if(n)for(var i=n.length-1;0<=i;--i)go(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text,origin:t.origin});else go(e,t)}}function go(e,r){if(1!=r.text.length||""!=r.text[0]||0!=ut(r.from,r.to)){var t=Wi(e,r);Ki(e,r,t,e.cm?e.cm.curOp.id:NaN),yo(e,r,t,Ft(e,r));var n=[];zi(e,function(e,t){t||-1!=B(n,e.history)||(Co(e.history,r),n.push(e.history)),yo(e,r,null,Ft(e,r))})}}function vo(i,o,e){var t=i.cm&&i.cm.state.suppressEdits;if(!t||e){for(var l,r=i.history,n=i.sel,s="undo"==o?r.done:r.undone,a="undo"==o?r.undone:r.done,u=0;u<s.length&&(l=s[u],e?!l.ranges||l.equals(i.sel):l.ranges);u++);if(u!=s.length){for(r.lastOrigin=r.lastSelOrigin=null;;){if(!(l=s.pop()).ranges){if(t)return void s.push(l);break}if(Xi(l,a),e&&!l.equals(i.sel))return void no(i,l,{clearRedo:!1});n=l}var c=[];Xi(n,a),a.push({changes:c,generation:r.generation}),r.generation=l.generation||++r.maxGeneration;for(var h=Te(i,"beforeChange")||i.cm&&Te(i.cm,"beforeChange"),f=function(e){var r=l.changes[e];if(r.origin=o,h&&!fo(i,r,!1))return s.length=0,{};c.push(Ui(i,r));var t=e?Wi(i,r):$(s);yo(i,r,t,$i(i,r)),!e&&i.cm&&i.cm.scrollIntoView({from:r.from,to:Ai(r)});var n=[];zi(i,function(e,t){t||-1!=B(n,e.history)||(Co(e.history,r),n.push(e.history)),yo(e,r,null,$i(e,r))})},d=l.changes.length-1;0<=d;--d){var p=f(d);if(p)return p.v}}}}function mo(e,t){if(0!=t&&(e.first+=t,e.sel=new Ti(q(e.sel.ranges,function(e){return new Mi(at(e.anchor.line+t,e.anchor.ch),at(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){vn(e.cm,e.first,e.first-t,t);for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)mn(e.cm,n,"gutter")}}function yo(e,t,r,n){if(e.cm&&!e.cm.curOp)return ii(e.cm,yo)(e,t,r,n);if(t.to.line<e.first)mo(e,t.text.length-1-(t.to.line-t.from.line));else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line);mo(e,i),t={from:at(e.first,0),to:at(t.to.line+i,t.to.ch),text:[$(t.text)],origin:t.origin}}var o=e.lastLine();t.to.line>o&&(t={from:t.from,to:at(o,et(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=tt(e,t.from,t.to),r=r||Wi(e,t),e.cm?function(e,t,r){var n=e.doc,i=e.display,o=t.from,l=t.to,s=!1,a=o.line;e.options.lineWrapping||(a=it(Xt(et(n,o.line))),n.iter(a,l.line+1,function(e){if(e==i.maxLine)return s=!0}));-1<n.sel.contains(t.from,t.to)&&ke(e);Ii(n,t,r,fn(e)),e.options.lineWrapping||(n.iter(a,o.line+t.text.length,function(e){var t=Qt(e);t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,s=!1)}),s&&(e.curOp.updateMaxLine=!0));(function(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var r=e.first,n=t-1;r<n;n--){var i=et(e,n).stateAfter;if(i&&(!(i instanceof mt)||n+i.lookAhead<t)){r=n+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,r)}})(n,o.line),si(e,400);var u=t.text.length-(l.line-o.line)-1;t.full?vn(e):o.line!=l.line||1!=t.text.length||Ei(e.doc,t)?vn(e,o.line,l.line+1,u):mn(e,o.line,"text");var c=Te(e,"changes"),h=Te(e,"change");if(h||c){var f={from:o,to:l,text:t.text,removed:t.removed,origin:t.origin};h&&gr(e,"change",e,f),c&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(f)}e.display.selForContextMenu=null}(e.cm,t,n):Ii(e,t,n),io(e,r,V),e.cantEdit&&uo(e,at(e.firstLine(),0))&&(e.cantEdit=!1)}}function bo(e,t,r,n,i){var o;ut(n=n||r,r)<0&&(r=(o=[n,r])[0],n=o[1]),"string"==typeof t&&(t=e.splitLines(t)),po(e,{from:r,to:n,text:t,origin:i})}function wo(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0)}function xo(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],l=!0;if(o.ranges){o.copied||((o=e[i]=o.deepCopy()).copied=!0);for(var s=0;s<o.ranges.length;s++)wo(o.ranges[s].anchor,t,r,n),wo(o.ranges[s].head,t,r,n)}else{for(var a=0;a<o.changes.length;++a){var u=o.changes[a];if(r<u.from.line)u.from=at(u.from.line+n,u.from.ch),u.to=at(u.to.line+n,u.to.ch);else if(t<=u.to.line){l=!1;break}}l||(e.splice(0,i+1),i=0)}}}function Co(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1;xo(e.done,r,n,i),xo(e.undone,r,n,i)}function So(e,t,r,n){var i=t,o=t;return"number"==typeof t?o=et(e,pt(e,t)):i=it(t),null==i?null:(n(o,i)&&e.cm&&mn(e.cm,i,r),o)}function Lo(e){this.lines=e,this.parent=null;for(var t=0,r=0;r<e.length;++r)e[r].parent=this,t+=e[r].height;this.height=t}function ko(e){this.children=e;for(var t=0,r=0,n=0;n<e.length;++n){var i=e[n];t+=i.chunkSize(),r+=i.height,i.parent=this}this.size=t,this.height=r,this.parent=null}Mi.prototype.from=function(){return dt(this.anchor,this.head)},Mi.prototype.to=function(){return ft(this.anchor,this.head)},Mi.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},Lo.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var r=e,n=e+t;r<n;++r){var i=this.lines[r];this.height-=i.height,(o=i).parent=null,Et(o),gr(i,"delete")}var o;this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,r){this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e));for(var n=0;n<t.length;++n)t[n].parent=this},iterN:function(e,t,r){for(var n=e+t;e<n;++e)if(r(this.lines[e]))return!0}},ko.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t;for(var r=0;r<this.children.length;++r){var n=this.children[r],i=n.chunkSize();if(e<i){var o=Math.min(t,i-e),l=n.height;if(n.removeInner(e,o),this.height-=l-n.height,i==o&&(this.children.splice(r--,1),n.parent=null),0==(t-=o))break;e=0}else e-=i}if(this.size-t<25&&(1<this.children.length||!(this.children[0]instanceof Lo))){var s=[];this.collapse(s),this.children=[new Lo(s)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,r){this.size+=t.length,this.height+=r;for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize();if(e<=o){if(i.insertInner(e,t,r),i.lines&&50<i.lines.length){for(var l=i.lines.length%25+25,s=l;s<i.lines.length;){var a=new Lo(i.lines.slice(s,s+=25));i.height-=a.height,this.children.splice(++n,0,a),a.parent=this}i.lines=i.lines.slice(0,l),this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var t=new ko(e.children.splice(e.children.length-5,5));if(e.parent){e.size-=t.size,e.height-=t.height;var r=B(e.parent.children,e);e.parent.children.splice(r+1,0,t)}else{var n=new ko(e.children);(n.parent=e).children=[n,t],e=n}t.parent=e.parent}while(10<e.children.length);e.parent.maybeSpill()}},iterN:function(e,t,r){for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize();if(e<o){var l=Math.min(t,o-e);if(i.iterN(e,l,r))return!0;if(0==(t-=l))break;e=0}else e-=o}}};function To(e,t,r){if(r)for(var n in r)r.hasOwnProperty(n)&&(this[n]=r[n]);this.doc=e,this.node=t}function Mo(e,t,r){Zt(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Pn(e,r)}To.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,r=this.line,n=it(r);if(null!=n&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1);t.length||(r.widgets=null);var o=Mr(this);nt(r,Math.max(0,r.height-o)),e&&(ni(e,function(){Mo(e,r,-o),mn(e,n,"widget")}),gr(e,"lineWidgetCleared",e,this,n))}},To.prototype.changed=function(){var e=this,t=this.height,r=this.doc.cm,n=this.line;this.height=null;var i=Mr(this)-t;i&&($t(this.doc,n)||nt(n,n.height+i),r&&ni(r,function(){r.curOp.forceUpdate=!0,Mo(r,n,i),gr(r,"lineWidgetChanged",r,e,it(n))}))},Me(To);var No=0,Oo=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++No};function Ao(t,n,i,e,r){if(e&&e.shared)return function(e,r,n,i,o){(i=I(i)).shared=!1;var l=[Ao(e,r,n,i,o)],s=l[0],a=i.widgetNode;return zi(e,function(e){a&&(i.widgetNode=a.cloneNode(!0)),l.push(Ao(e,gt(e,r),gt(e,n),i,o));for(var t=0;t<e.linked.length;++t)if(e.linked[t].isParent)return;s=$(l)}),new Do(l,s)}(t,n,i,e,r);if(t.cm&&!t.cm.curOp)return ii(t.cm,Ao)(t,n,i,e,r);var o=new Oo(t,r),l=ut(n,i);if(e&&I(e,o,!1),0<l||0==l&&!1!==o.clearWhenEmpty)return o;if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=O("span",[o.replacedWith],"CodeMirror-widget"),e.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),e.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(jt(t,n.line,n,i,o)||n.line!=i.line&&jt(t,i.line,n,i,o))throw new Error("Inserting collapsed marker partially overlapping an existing one");At=!0}o.addToHistory&&Ki(t,{from:n,to:i,origin:"markText"},t.sel,NaN);var s,a=n.line,u=t.cm;if(t.iter(a,i.line+1,function(e){var t,r;u&&o.collapsed&&!u.options.lineWrapping&&Xt(e)==u.display.maxLine&&(s=!0),o.collapsed&&a!=n.line&&nt(e,0),t=e,r=new Dt(o,a==n.line?n.ch:null,a==i.line?i.ch:null),t.markedSpans=t.markedSpans?t.markedSpans.concat([r]):[r],r.marker.attachLine(t),++a}),o.collapsed&&t.iter(n.line,i.line+1,function(e){$t(t,e)&&nt(e,0)}),o.clearOnEnter&&we(o,"beforeCursorEnter",function(){return o.clear()}),o.readOnly&&(Ot=!0,(t.history.done.length||t.history.undone.length)&&t.clearHistory()),o.collapsed&&(o.id=++No,o.atomic=!0),u){if(s&&(u.curOp.updateMaxLine=!0),o.collapsed)vn(u,n.line,i.line+1);else if(o.className||o.startStyle||o.endStyle||o.css||o.attributes||o.title)for(var c=n.line;c<=i.line;c++)mn(u,c,"text");o.atomic&&lo(u.doc),gr(u,"markerAdded",u,o)}return o}Oo.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp;if(t&&Zn(e),Te(this,"clear")){var r=this.find();r&&gr(this,"clear",r.from,r.to)}for(var n=null,i=null,o=0;o<this.lines.length;++o){var l=this.lines[o],s=Wt(l.markedSpans,this);e&&!this.collapsed?mn(e,it(l),"text"):e&&(null!=s.to&&(i=it(l)),null!=s.from&&(n=it(l))),l.markedSpans=Ht(l.markedSpans,s),null==s.from&&this.collapsed&&!$t(this.doc,l)&&e&&nt(l,an(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var a=0;a<this.lines.length;++a){var u=Xt(this.lines[a]),c=Qt(u);c>e.display.maxLineLength&&(e.display.maxLine=u,e.display.maxLineLength=c,e.display.maxLineChanged=!0)}null!=n&&e&&this.collapsed&&vn(e,n,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&lo(e.doc)),e&&gr(e,"markerCleared",e,this,n,i),t&&Qn(e),this.parent&&this.parent.clear()}},Oo.prototype.find=function(e,t){var r,n;null==e&&"bookmark"==this.type&&(e=1);for(var i=0;i<this.lines.length;++i){var o=this.lines[i],l=Wt(o.markedSpans,this);if(null!=l.from&&(r=at(t?o:it(o),l.from),-1==e))return r;if(null!=l.to&&(n=at(t?o:it(o),l.to),1==e))return n}return r&&{from:r,to:n}},Oo.prototype.changed=function(){var o=this,l=this.find(-1,!0),s=this,a=this.doc.cm;l&&a&&ni(a,function(){var e=l.line,t=it(l.line),r=Ir(a,t);if(r&&(Kr(r),a.curOp.selectionChanged=a.curOp.forceUpdate=!0),a.curOp.updateMaxLine=!0,!$t(s.doc,e)&&null!=s.height){var n=s.height;s.height=null;var i=Mr(s)-n;i&&nt(e,e.height+i)}gr(a,"markerChanged",a,o)})},Oo.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;t.maybeHiddenMarkers&&-1!=B(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},Oo.prototype.detachLine=function(e){if(this.lines.splice(B(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},Me(Oo);var Do=function(e,t){this.markers=e,this.primary=t;for(var r=0;r<e.length;++r)e[r].parent=this};function Wo(e){return e.findMarks(at(e.first,0),e.clipPos(at(e.lastLine())),function(e){return e.parent})}function Ho(o){for(var e=function(e){var t=o[e],r=[t.primary.doc];zi(t.primary.doc,function(e){return r.push(e)});for(var n=0;n<t.markers.length;n++){var i=t.markers[n];-1==B(r,i.doc)&&(i.parent=null,t.markers.splice(n--,1))}},t=0;t<o.length;t++)e(t)}Do.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();gr(this,"clear")}},Do.prototype.find=function(e,t){return this.primary.find(e,t)},Me(Do);var Fo=0,Po=function(e,t,r,n,i){if(!(this instanceof Po))return new Po(e,t,r,n,i);null==r&&(r=0),ko.call(this,[new Lo([new er("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=r;var o=at(r,0);this.sel=Oi(o),this.history=new Gi(null),this.id=++Fo,this.modeOption=t,this.lineSep=n,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),Ii(this,{from:o,to:o,text:e}),no(this,Oi(o),V)};Po.prototype=Q(ko.prototype,{constructor:Po,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height;this.insertInner(e-this.first,t,r)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=rt(this,this.first,this.first+this.size);return!1===e?t:t.join(e||this.lineSeparator())},setValue:li(function(e){var t=at(this.first,0),r=this.first+this.size-1;po(this,{from:t,to:at(r,et(this,r).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&In(this.cm,0,0),no(this,Oi(t),V)}),replaceRange:function(e,t,r,n){bo(this,e,t=gt(this,t),r=r?gt(this,r):t,n)},getRange:function(e,t,r){var n=tt(this,gt(this,e),gt(this,t));return!1===r?n:n.join(r||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e);return t&&t.text},getLineHandle:function(e){if(lt(this,e))return et(this,e)},getLineNumber:function(e){return it(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=et(this,e)),Xt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return gt(this,e)},getCursor:function(e){var t=this.sel.primary();return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:li(function(e,t,r){to(this,gt(this,"number"==typeof e?at(e,t||0):e),null,r)}),setSelection:li(function(e,t,r){to(this,gt(this,e),gt(this,t||e),r)}),extendSelection:li(function(e,t,r){Qi(this,gt(this,e),t&&gt(this,t),r)}),extendSelections:li(function(e,t){Ji(this,vt(this,e),t)}),extendSelectionsBy:li(function(e,t){Ji(this,vt(this,q(this.sel.ranges,e)),t)}),setSelections:li(function(e,t,r){if(e.length){for(var n=[],i=0;i<e.length;i++)n[i]=new Mi(gt(this,e[i].anchor),gt(this,e[i].head));null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),no(this,Ni(this.cm,n,t),r)}}),addSelection:li(function(e,t,r){var n=this.sel.ranges.slice(0);n.push(new Mi(gt(this,e),gt(this,t||e))),no(this,Ni(this.cm,n,n.length-1),r)}),getSelection:function(e){for(var t,r=this.sel.ranges,n=0;n<r.length;n++){var i=tt(this,r[n].from(),r[n].to());t=t?t.concat(i):i}return!1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=[],r=this.sel.ranges,n=0;n<r.length;n++){var i=tt(this,r[n].from(),r[n].to());!1!==e&&(i=i.join(e||this.lineSeparator())),t[n]=i}return t},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e;this.replaceSelections(n,t,r||"+input")},replaceSelections:li(function(e,t,r){for(var n=[],i=this.sel,o=0;o<i.ranges.length;o++){var l=i.ranges[o];n[o]={from:l.from(),to:l.to(),text:this.splitLines(e[o]),origin:r}}for(var s=t&&"end"!=t&&function(e,t,r){for(var n=[],i=at(e.first,0),o=i,l=0;l<t.length;l++){var s=t[l],a=Hi(s.from,i,o),u=Hi(Ai(s),i,o);if(i=s.to,o=u,"around"==r){var c=e.sel.ranges[l],h=ut(c.head,c.anchor)<0;n[l]=new Mi(h?u:a,h?a:u)}else n[l]=new Mi(a,a)}return new Ti(n,e.sel.primIndex)}(this,n,t),a=n.length-1;0<=a;a--)po(this,n[a]);s?ro(this,s):this.cm&&En(this.cm)}),undo:li(function(){vo(this,"undo")}),redo:li(function(){vo(this,"redo")}),undoSelection:li(function(){vo(this,"undo",!0)}),redoSelection:li(function(){vo(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t;for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++r;return{undo:t,redo:r}},clearHistory:function(){var t=this;this.history=new Gi(this.history.maxGeneration),zi(this,function(e){return e.history=t.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:qi(this.history.done),undone:qi(this.history.undone)}},setHistory:function(e){var t=this.history=new Gi(this.history.maxGeneration);t.done=qi(e.done.slice(0),null,!0),t.undone=qi(e.undone.slice(0),null,!0)},setGutterMarker:li(function(e,r,n){return So(this,e,"gutter",function(e){var t=e.gutterMarkers||(e.gutterMarkers={});return!(t[r]=n)&&re(t)&&(e.gutterMarkers=null),1})}),clearGutter:li(function(t){var r=this;this.iter(function(e){e.gutterMarkers&&e.gutterMarkers[t]&&So(r,e,"gutter",function(){return e.gutterMarkers[t]=null,re(e.gutterMarkers)&&(e.gutterMarkers=null),1})})}),lineInfo:function(e){var t;if("number"==typeof e){if(!lt(this,e))return null;if(!(e=et(this,t=e)))return null}else if(null==(t=it(e)))return null;return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:li(function(e,r,n){return So(this,e,"gutter"==r?"gutter":"class",function(e){var t="text"==r?"textClass":"background"==r?"bgClass":"gutter"==r?"gutterClass":"wrapClass";if(e[t]){if(L(n).test(e[t]))return;e[t]+=" "+n}else e[t]=n;return 1})}),removeLineClass:li(function(e,o,l){return So(this,e,"gutter"==o?"gutter":"class",function(e){var t="text"==o?"textClass":"background"==o?"bgClass":"gutter"==o?"gutterClass":"wrapClass",r=e[t];if(r){if(null==l)e[t]=null;else{var n=r.match(L(l));if(!n)return;var i=n.index+n[0].length;e[t]=r.slice(0,n.index)+(n.index&&i!=r.length?" ":"")+r.slice(i)||null}return 1}})}),addLineWidget:li(function(e,t,r){return i=e,o=new To(n=this,t,r),(l=n.cm)&&o.noHScroll&&(l.display.alignWidgets=!0),So(n,i,"widget",function(e){var t=e.widgets||(e.widgets=[]);if(null==o.insertAt?t.push(o):t.splice(Math.min(t.length-1,Math.max(0,o.insertAt)),0,o),o.line=e,l&&!$t(n,e)){var r=Zt(e)<n.scrollTop;nt(e,e.height+Mr(o)),r&&Pn(l,o.height),l.curOp.forceUpdate=!0}return 1}),l&&gr(l,"lineWidgetAdded",l,o,"number"==typeof i?i:it(i)),o;var n,i,o,l}),removeLineWidget:function(e){e.clear()},markText:function(e,t,r){return Ao(this,gt(this,e),gt(this,t),r,r&&r.type||"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents};return Ao(this,e=gt(this,e),e,r,"bookmark")},findMarksAt:function(e){var t=[],r=et(this,(e=gt(this,e)).line).markedSpans;if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(i,o,l){i=gt(this,i),o=gt(this,o);var s=[],a=i.line;return this.iter(i.line,o.line+1,function(e){var t=e.markedSpans;if(t)for(var r=0;r<t.length;r++){var n=t[r];null!=n.to&&a==i.line&&i.ch>=n.to||null==n.from&&a!=i.line||null!=n.from&&a==o.line&&n.from>=o.ch||l&&!l(n.marker)||s.push(n.marker.parent||n.marker)}++a}),s},getAllMarks:function(){var n=[];return this.iter(function(e){var t=e.markedSpans;if(t)for(var r=0;r<t.length;++r)null!=t[r].from&&n.push(t[r].marker)}),n},posFromIndex:function(r){var n,i=this.first,o=this.lineSeparator().length;return this.iter(function(e){var t=e.text.length+o;if(r<t)return n=r,!0;r-=t,++i}),gt(this,at(i,n))},indexFromPos:function(e){var t=(e=gt(this,e)).ch;if(e.line<this.first||e.ch<0)return 0;var r=this.lineSeparator().length;return this.iter(this.first,e.line,function(e){t+=e.text.length+r}),t},copy:function(e){var t=new Po(rt(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e=e||{};var t=this.first,r=this.first+this.size;null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to);var n=new Po(rt(this,t,r),e.mode||this.modeOption,t,this.lineSep,this.direction);return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),l=e.clipPos(i.to);if(ut(o,l)){var s=Ao(e,o,l,n.primary,n.primary.type);n.markers.push(s),s.parent=n}}}(n,Wo(this)),n},unlinkDoc:function(e){if(e instanceof Wl&&(e=e.doc),this.linked)for(var t=0;t<this.linked.length;++t){if(this.linked[t].doc==e){this.linked.splice(t,1),e.unlinkDoc(this),Ho(Wo(this));break}}if(e.history==this.history){var r=[e.id];zi(e,function(e){return r.push(e.id)},!0),e.history=new Gi(null),e.history.done=qi(this.history.done,r),e.history.undone=qi(this.history.undone,r)}},iterLinkedDocs:function(e){zi(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):Be(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:li(function(e){var t;"rtl"!=e&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(e){return e.order=null}),this.cm&&ni(t=this.cm,function(){Bi(t),vn(t)}))})}),Po.prototype.eachLine=Po.prototype.iter;var Eo=0;function Io(e){var n=this;if(zo(n),!Le(n,e)&&!Nr(n.display,e)){Ne(e),x&&(Eo=+new Date);var t=pn(n,e,!0),r=e.dataTransfer.files;if(t&&!n.isReadOnly())if(r&&r.length&&window.FileReader&&window.File)for(var i=r.length,o=Array(i),l=0,s=function(){++l==i&&ii(n,function(){var e={from:t=gt(n.doc,t),to:t,text:n.doc.splitLines(o.filter(function(e){return null!=e}).join(n.doc.lineSeparator())),origin:"paste"};po(n.doc,e),ro(n.doc,Oi(gt(n.doc,t),gt(n.doc,Ai(e))))})()},a=function(e,t){if(n.options.allowDropFileTypes&&-1==B(n.options.allowDropFileTypes,e.type))s();else{var r=new FileReader;r.onerror=function(){return s()},r.onload=function(){var e=r.result;/[\x00-\x08\x0e-\x1f]{2}/.test(e)||(o[t]=e),s()},r.readAsText(e)}},u=0;u<r.length;u++)a(r[u],u);else{if(n.state.draggingText&&-1<n.doc.sel.contains(t))return n.state.draggingText(e),void setTimeout(function(){return n.display.input.focus()},20);try{var c=e.dataTransfer.getData("Text");if(c){var h;if(n.state.draggingText&&!n.state.draggingText.copy&&(h=n.listSelections()),io(n.doc,Oi(t,t)),h)for(var f=0;f<h.length;++f)bo(n.doc,"",h[f].anchor,h[f].head,"drag");n.replaceSelection(c,"around","paste"),n.display.input.focus()}}catch(e){}}}}function zo(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Ro(t){if(document.getElementsByClassName){for(var e=document.getElementsByClassName("CodeMirror"),r=[],n=0;n<e.length;n++){var i=e[n].CodeMirror;i&&r.push(i)}r.length&&r[0].operation(function(){for(var e=0;e<r.length;e++)t(r[e])})}}var Bo=!1;function Go(){var e;Bo||(we(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,Ro(Uo)},100))}),we(window,"blur",function(){return Ro(An)}),Bo=!0)}function Uo(e){var t=e.display;t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize()}for(var Vo={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Ko=0;Ko<10;Ko++)Vo[Ko+48]=Vo[Ko+96]=String(Ko);for(var jo=65;jo<=90;jo++)Vo[jo]=String.fromCharCode(jo);for(var Xo=1;Xo<=12;Xo++)Vo[Xo+111]=Vo[Xo+63235]="F"+Xo;var Yo={};function _o(e){var t,r,n,i,o=e.split(/-(?!$)/);e=o[o.length-1];for(var l=0;l<o.length-1;l++){var s=o[l];if(/^(cmd|meta|m)$/i.test(s))i=!0;else if(/^a(lt)?$/i.test(s))t=!0;else if(/^(c|ctrl|control)$/i.test(s))r=!0;else{if(!/^s(hift)?$/i.test(s))throw new Error("Unrecognized modifier name: "+s);n=!0}}return t&&(e="Alt-"+e),r&&(e="Ctrl-"+e),i&&(e="Cmd-"+e),n&&(e="Shift-"+e),e}function $o(e){var t={};for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue;if("..."==n){delete e[r];continue}for(var i=q(r.split(" "),_o),o=0;o<i.length;o++){var l=void 0,s=void 0;l=o==i.length-1?(s=i.join(" "),n):(s=i.slice(0,o+1).join(" "),"...");var a=t[s];if(a){if(a!=l)throw new Error("Inconsistent bindings for "+s)}else t[s]=l}delete e[r]}for(var u in t)e[u]=t[u];return e}function qo(e,t,r,n){var i=(t=el(t)).call?t.call(e,n):t[e];if(!1===i)return"nothing";if("..."===i)return"multi";if(null!=i&&r(i))return"handled";if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return qo(e,t.fallthrough,r,n);for(var o=0;o<t.fallthrough.length;o++){var l=qo(e,t.fallthrough[o],r,n);if(l)return l}}}function Zo(e){var t="string"==typeof e?e:Vo[e.keyCode];return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function Qo(e,t,r){var n=e;return t.altKey&&"Alt"!=n&&(e="Alt-"+e),(y?t.metaKey:t.ctrlKey)&&"Ctrl"!=n&&(e="Ctrl-"+e),(y?t.ctrlKey:t.metaKey)&&"Cmd"!=n&&(e="Cmd-"+e),!r&&t.shiftKey&&"Shift"!=n&&(e="Shift-"+e),e}function Jo(e,t){if(v&&34==e.keyCode&&e.char)return!1;var r=Vo[e.keyCode];return null!=r&&!e.altGraphKey&&(3==e.keyCode&&e.code&&(r=e.code),Qo(r,e,t))}function el(e){return"string"==typeof e?Yo[e]:e}function tl(t,e){for(var r=t.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=e(r[i]);n.length&&ut(o.from,$(n).to)<=0;){var l=n.pop();if(ut(l.from,o.from)<0){o.from=l.from;break}}n.push(o)}ni(t,function(){for(var e=n.length-1;0<=e;e--)bo(t.doc,"",n[e].from,n[e].to,"+delete");En(t)})}function rl(e,t,r){var n=oe(e.text,t+r,r);return n<0||n>e.text.length?null:n}function nl(e,t,r){var n=rl(e,t.ch,r);return null==n?null:new at(t.line,n,r<0?"after":"before")}function il(e,t,r,n,i){if(e){"rtl"==t.doc.direction&&(i=-i);var o=ye(r,t.doc.direction);if(o){var l,s=i<0?$(o):o[0],a=i<0==(1==s.level)?"after":"before";if(0<s.level||"rtl"==t.doc.direction){var u=zr(t,r);l=i<0?r.text.length-1:0;var c=Rr(t,u,l).top;l=le(function(e){return Rr(t,u,e).top==c},i<0==(1==s.level)?s.from:s.to-1,l),"before"==a&&(l=rl(r,l,1))}else l=i<0?s.to:s.from;return new at(n,l,a)}}return new at(n,i<0?r.text.length:0,i<0?"before":"after")}function ol(t,r,s,e){var a=ye(r,t.doc.direction);if(!a)return nl(r,s,e);s.ch>=r.text.length?(s.ch=r.text.length,s.sticky="before"):s.ch<=0&&(s.ch=0,s.sticky="after");var n=ae(a,s.ch,s.sticky),i=a[n];if("ltr"==t.doc.direction&&i.level%2==0&&(0<e?i.to>s.ch:i.from<s.ch))return nl(r,s,e);function u(e,t){return rl(r,e instanceof at?e.ch:e,t)}function o(e){return t.options.lineWrapping?(l=l||zr(t,r),on(t,r,l,e)):{begin:0,end:r.text.length}}var l,c=o("before"==s.sticky?u(s,-1):s.ch);if("rtl"==t.doc.direction||1==i.level){var h=1==i.level==e<0,f=u(s,h?1:-1);if(null!=f&&(h?f<=i.to&&f<=c.end:f>=i.from&&f>=c.begin)){var d=h?"before":"after";return new at(s.line,f,d)}}function p(e,t,r){for(var n=function(e,t){return t?new at(s.line,u(e,1),"before"):new at(s.line,e,"after")};0<=e&&e<a.length;e+=t){var i=a[e],o=0<t==(1!=i.level),l=o?r.begin:u(r.end,-1);if(i.from<=l&&l<i.to)return n(l,o);if(l=o?i.from:u(i.to,-1),r.begin<=l&&l<r.end)return n(l,o)}}var g=p(n+e,e,c);if(g)return g;var v=0<e?c.end:u(c.begin,-1);return null==v||0<e&&v==r.text.length||!(g=p(0<e?0:a.length-1,e,o(v)))?null:g}Yo.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Yo.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Yo.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Yo.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Yo.default=w?Yo.macDefault:Yo.pcDefault;var ll={selectAll:ho,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),V)},killLine:function(r){return tl(r,function(e){if(e.empty()){var t=et(r.doc,e.head.line).text.length;return e.head.ch==t&&e.head.line<r.lastLine()?{from:e.head,to:at(e.head.line+1,0)}:{from:e.head,to:at(e.head.line,t)}}return{from:e.from(),to:e.to()}})},deleteLine:function(t){return tl(t,function(e){return{from:at(e.from().line,0),to:gt(t.doc,at(e.to().line+1,0))}})},delLineLeft:function(e){return tl(e,function(e){return{from:at(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(r){return tl(r,function(e){var t=r.charCoords(e.head,"div").top+5;return{from:r.coordsChar({left:0,top:t},"div"),to:e.from()}})},delWrappedLineRight:function(n){return tl(n,function(e){var t=n.charCoords(e.head,"div").top+5,r=n.coordsChar({left:n.display.lineDiv.offsetWidth+100,top:t},"div");return{from:e.from(),to:r}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(at(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(at(e.lastLine()))},goLineStart:function(t){return t.extendSelectionsBy(function(e){return sl(t,e.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(t){return t.extendSelectionsBy(function(e){return al(t,e.head)},{origin:"+move",bias:1})},goLineEnd:function(t){return t.extendSelectionsBy(function(e){return function(e,t){var r=et(e.doc,t),n=function(e){for(var t;t=Vt(e);)e=t.find(1,!0).line;return e}(r);n!=r&&(t=it(n));return il(!0,e,r,t,-1)}(t,e.head.line)},{origin:"+move",bias:-1})},goLineRight:function(r){return r.extendSelectionsBy(function(e){var t=r.cursorCoords(e.head,"div").top+5;return r.coordsChar({left:r.display.lineDiv.offsetWidth+100,top:t},"div")},j)},goLineLeft:function(r){return r.extendSelectionsBy(function(e){var t=r.cursorCoords(e.head,"div").top+5;return r.coordsChar({left:0,top:t},"div")},j)},goLineLeftSmart:function(n){return n.extendSelectionsBy(function(e){var t=n.cursorCoords(e.head,"div").top+5,r=n.coordsChar({left:0,top:t},"div");return r.ch<n.getLine(r.line).search(/\S/)?al(n,e.head):r},j)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"char")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),l=z(e.getLine(o.line),o.ch,n);t.push(_(n-l%n))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(l){return ni(l,function(){for(var e=l.listSelections(),t=[],r=0;r<e.length;r++)if(e[r].empty()){var n=e[r].head,i=et(l.doc,n.line).text;if(i)if(n.ch==i.length&&(n=new at(n.line,n.ch-1)),0<n.ch)n=new at(n.line,n.ch+1),l.replaceRange(i.charAt(n.ch-1)+i.charAt(n.ch-2),at(n.line,n.ch-2),n,"+transpose");else if(n.line>l.doc.first){var o=et(l.doc,n.line-1).text;o&&(n=new at(n.line,1),l.replaceRange(i.charAt(0)+l.doc.lineSeparator()+o.charAt(o.length-1),at(n.line-1,o.length-1),n,"+transpose"))}t.push(new Mi(n,n))}l.setSelections(t)})},newlineAndIndent:function(n){return ni(n,function(){for(var e=n.listSelections(),t=e.length-1;0<=t;t--)n.replaceRange(n.doc.lineSeparator(),e[t].anchor,e[t].head,"+input");e=n.listSelections();for(var r=0;r<e.length;r++)n.indentLine(e[r].from().line,null,!0);En(n)})},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function sl(e,t){var r=et(e.doc,t),n=Xt(r);return n!=r&&(t=it(n)),il(!0,e,n,t,1)}function al(e,t){var r=sl(e,t.line),n=et(e.doc,r.line),i=ye(n,e.doc.direction);if(i&&0!=i[0].level)return r;var o=Math.max(r.ch,n.text.search(/\S/)),l=t.line==r.line&&t.ch<=o&&t.ch;return at(r.line,l?0:o,r.sticky)}function ul(e,t,r){if("string"==typeof t&&!(t=ll[t]))return!1;e.display.input.ensurePolled();var n=e.display.shift,i=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=U}finally{e.display.shift=n,e.state.suppressEdits=!1}return i}var cl=new R;function hl(e,t,r,n){var i=e.state.keySeq;if(i){if(Zo(t))return"handled";if(/\'$/.test(t)?e.state.keySeq=null:cl.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),fl(e,i+" "+t,r,n))return!0}return fl(e,t,r,n)}function fl(e,t,r,n){var i=function(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=qo(t,e.state.keyMaps[n],r,e);if(i)return i}return e.options.extraKeys&&qo(t,e.options.extraKeys,r,e)||qo(t,e.options.keyMap,r,e)}(e,t,n);return"multi"==i&&(e.state.keySeq=t),"handled"==i&&gr(e,"keyHandled",e,t,r),"handled"!=i&&"multi"!=i||(Ne(r),Tn(e)),!!i}function dl(t,e){var r=Jo(e,!0);return!!r&&(e.shiftKey&&!t.state.keySeq?hl(t,"Shift-"+r,e,function(e){return ul(t,e,!0)})||hl(t,r,e,function(e){if("string"==typeof e?/^go[A-Z]/.test(e):e.motion)return ul(t,e)}):hl(t,r,e,function(e){return ul(t,e)}))}var pl=null;function gl(e){var t=this;if(t.curOp.focus=W(),!Le(t,e)){x&&C<11&&27==e.keyCode&&(e.returnValue=!1);var r=e.keyCode;t.display.shift=16==r||e.shiftKey;var n,i=dl(t,e);v&&(pl=i?r:null,!i&&88==r&&!Ue&&(w?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),g&&!w&&!i&&46==r&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||(H(n=t.display.lineDiv,"CodeMirror-crosshair"),we(document,"keyup",o),we(document,"mouseover",o))}function o(e){18!=e.keyCode&&e.altKey||(T(n,"CodeMirror-crosshair"),Ce(document,"keyup",o),Ce(document,"mouseover",o))}}function vl(e){16==e.keyCode&&(this.doc.sel.shift=!1),Le(this,e)}function ml(e){var t=this;if(!(Nr(t.display,e)||Le(t,e)||e.ctrlKey&&!e.altKey||w&&e.metaKey)){var r=e.keyCode,n=e.charCode;if(v&&r==pl)return pl=null,void Ne(e);if(!v||e.which&&!(e.which<10)||!dl(t,e)){var i,o=String.fromCharCode(null==n?r:n);if("\b"!=o)if(!hl(i=t,"'"+o+"'",e,function(e){return ul(i,e,!0)}))t.display.input.onKeyPress(e)}}}var yl,bl,wl=function(e,t,r){this.time=e,this.pos=t,this.button=r};function xl(e){var t=this,r=t.display;if(!(Le(t,e)||r.activeTouch&&r.input.supportsTouch()))if(r.input.ensurePolled(),r.shift=e.shiftKey,Nr(r,e))b||(r.scroller.draggable=!1,setTimeout(function(){return r.scroller.draggable=!0},100));else if(!Ll(t,e)){var n,i,o,l=pn(t,e),s=He(e),a=l?(n=l,i=s,o=+new Date,bl&&bl.compare(o,n,i)?(yl=bl=null,"triple"):yl&&yl.compare(o,n,i)?(bl=new wl(o,n,i),yl=null,"double"):(yl=new wl(o,n,i),bl=null,"single")):"single";window.focus(),1==s&&t.state.selectingText&&t.state.selectingText(e),l&&function(r,e,n,t,i){var o="Click";"double"==t?o="Double"+o:"triple"==t&&(o="Triple"+o);return hl(r,Qo(o=(1==e?"Left":2==e?"Middle":"Right")+o,i),i,function(e){if("string"==typeof e&&(e=ll[e]),!e)return!1;var t=!1;try{r.isReadOnly()&&(r.state.suppressEdits=!0),t=e(r,n)!=U}finally{r.state.suppressEdits=!1}return t})}(t,s,l,a,e)||(1==s?l?function(e,t,r,n){x?setTimeout(E(Mn,e),0):e.curOp.focus=W();var i,o=function(e,t,r){var n=e.getOption("configureMouse"),i=n?n(e,t,r):{};if(null==i.unit){var o=d?r.shiftKey&&r.metaKey:r.altKey;i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}null!=i.extend&&!e.doc.extend||(i.extend=e.doc.extend||r.shiftKey);null==i.addNew&&(i.addNew=w?r.metaKey:r.ctrlKey);null==i.moveOnDrag&&(i.moveOnDrag=!(w?r.altKey:r.ctrlKey));return i}(e,r,n),l=e.doc.sel;(e.options.dragDrop&&Ee&&!e.isReadOnly()&&"single"==r&&-1<(i=l.contains(t))&&(ut((i=l.ranges[i]).from(),t)<0||0<t.xRel)&&(0<ut(i.to(),t)||t.xRel<0)?function(t,r,n,i){var o=t.display,l=!1,s=ii(t,function(e){b&&(o.scroller.draggable=!1),t.state.draggingText=!1,Ce(o.wrapper.ownerDocument,"mouseup",s),Ce(o.wrapper.ownerDocument,"mousemove",a),Ce(o.scroller,"dragstart",u),Ce(o.scroller,"drop",s),l||(Ne(e),i.addNew||Qi(t.doc,n,null,null,i.extend),b||x&&9==C?setTimeout(function(){o.wrapper.ownerDocument.body.focus(),o.input.focus()},20):o.input.focus())}),a=function(e){l=l||10<=Math.abs(r.clientX-e.clientX)+Math.abs(r.clientY-e.clientY)},u=function(){return l=!0};b&&(o.scroller.draggable=!0);(t.state.draggingText=s).copy=!i.moveOnDrag,o.scroller.dragDrop&&o.scroller.dragDrop();we(o.wrapper.ownerDocument,"mouseup",s),we(o.wrapper.ownerDocument,"mousemove",a),we(o.scroller,"dragstart",u),we(o.scroller,"drop",s),Nn(t),setTimeout(function(){return o.input.focus()},20)}:function(v,e,m,y){var l=v.display,b=v.doc;Ne(e);var w,x,C=b.sel,t=C.ranges;y.addNew&&!y.extend?(x=b.sel.contains(m),w=-1<x?t[x]:new Mi(m,m)):(w=b.sel.primary(),x=b.sel.primIndex);if("rectangle"==y.unit)y.addNew||(w=new Mi(m,m)),m=pn(v,e,!0,!0),x=-1;else{var r=Cl(v,m,y.unit);w=y.extend?Zi(w,r.anchor,r.head,y.extend):r}y.addNew?-1==x?(x=t.length,no(b,Ni(v,t.concat([w]),x),{scroll:!1,origin:"*mouse"})):1<t.length&&t[x].empty()&&"char"==y.unit&&!y.extend?(no(b,Ni(v,t.slice(0,x).concat(t.slice(x+1)),0),{scroll:!1,origin:"*mouse"}),C=b.sel):eo(b,x,w,K):(no(b,new Ti([w],x=0),K),C=b.sel);var S=m;function s(e){if(0!=ut(S,e))if(S=e,"rectangle"==y.unit){for(var t=[],r=v.options.tabSize,n=z(et(b,m.line).text,m.ch,r),i=z(et(b,e.line).text,e.ch,r),o=Math.min(n,i),l=Math.max(n,i),s=Math.min(m.line,e.line),a=Math.min(v.lastLine(),Math.max(m.line,e.line));s<=a;s++){var u=et(b,s).text,c=X(u,o,r);o==l?t.push(new Mi(at(s,c),at(s,c))):u.length>c&&t.push(new Mi(at(s,c),at(s,X(u,l,r))))}t.length||t.push(new Mi(m,m)),no(b,Ni(v,C.ranges.slice(0,x).concat(t),x),{origin:"*mouse",scroll:!1}),v.scrollIntoView(e)}else{var h,f=w,d=Cl(v,e,y.unit),p=f.anchor;p=0<ut(d.anchor,p)?(h=d.head,dt(f.from(),d.anchor)):(h=d.anchor,ft(f.to(),d.head));var g=C.ranges.slice(0);g[x]=function(e,t){var r=t.anchor,n=t.head,i=et(e.doc,r.line);if(0==ut(r,n)&&r.sticky==n.sticky)return t;var o=ye(i);if(!o)return t;var l=ae(o,r.ch,r.sticky),s=o[l];if(s.from!=r.ch&&s.to!=r.ch)return t;var a,u=l+(s.from==r.ch==(1!=s.level)?0:1);if(0==u||u==o.length)return t;if(n.line!=r.line)a=0<(n.line-r.line)*("ltr"==e.doc.direction?1:-1);else{var c=ae(o,n.ch,n.sticky),h=c-l||(n.ch-r.ch)*(1==s.level?-1:1);a=c==u-1||c==u?h<0:0<h}var f=o[u+(a?-1:0)],d=a==(1==f.level),p=d?f.from:f.to,g=d?"after":"before";return r.ch==p&&r.sticky==g?t:new Mi(new at(r.line,p,g),n)}(v,new Mi(gt(b,p),h)),no(b,Ni(v,g,x),K)}}var a=l.wrapper.getBoundingClientRect(),u=0;function n(e){v.state.selectingText=!1,u=1/0,e&&(Ne(e),l.input.focus()),Ce(l.wrapper.ownerDocument,"mousemove",i),Ce(l.wrapper.ownerDocument,"mouseup",o),b.history.lastSelOrigin=null}var i=ii(v,function(e){(0!==e.buttons&&He(e)?function e(t){var r=++u,n=pn(v,t,!0,"rectangle"==y.unit);if(n)if(0!=ut(n,S)){v.curOp.focus=W(),s(n);var i=Hn(l,b);(n.line>=i.to||n.line<i.from)&&setTimeout(ii(v,function(){u==r&&e(t)}),150)}else{var o=t.clientY<a.top?-20:t.clientY>a.bottom?20:0;o&&setTimeout(ii(v,function(){u==r&&(l.scroller.scrollTop+=o,e(t))}),50)}}:n)(e)}),o=ii(v,n);v.state.selectingText=o,we(l.wrapper.ownerDocument,"mousemove",i),we(l.wrapper.ownerDocument,"mouseup",o)})(e,n,t,o)}(t,l,a,e):We(e)==r.scroller&&Ne(e):2==s?(l&&Qi(t.doc,l),setTimeout(function(){return r.input.focus()},20)):3==s&&(S?t.display.input.onContextMenu(e):Nn(t)))}}function Cl(e,t,r){if("char"==r)return new Mi(t,t);if("word"==r)return e.findWordAt(t);if("line"==r)return new Mi(at(t.line,0),gt(e.doc,at(t.line+1,0)));var n=r(e,t);return new Mi(n.from,n.to)}function Sl(e,t,r,n){var i,o;if(t.touches)i=t.touches[0].clientX,o=t.touches[0].clientY;else try{i=t.clientX,o=t.clientY}catch(t){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;n&&Ne(t);var l=e.display,s=l.lineDiv.getBoundingClientRect();if(o>s.bottom||!Te(e,r))return Ae(t);o-=s.top-l.viewOffset;for(var a=0;a<e.display.gutterSpecs.length;++a){var u=l.gutters.childNodes[a];if(u&&u.getBoundingClientRect().right>=i)return Se(e,r,e,ot(e.doc,o),e.display.gutterSpecs[a].className,t),Ae(t)}}function Ll(e,t){return Sl(e,t,"gutterClick",!0)}function kl(e,t){var r,n;Nr(e.display,t)||(n=t,Te(r=e,"gutterContextMenu")&&Sl(r,n,"gutterContextMenu",!1))||Le(e,t,"contextmenu")||S||e.display.input.onContextMenu(t)}function Tl(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),Xr(e)}wl.prototype.compare=function(e,t,r){return this.time+400>e&&0==ut(t,this.pos)&&r==this.button};var Ml={toString:function(){return"CodeMirror.Init"}},Nl={},Ol={};function Al(e,t,r){if(!t!=!(r&&r!=Ml)){var n=e.display.dragFunctions,i=t?we:Ce;i(e.display.scroller,"dragstart",n.start),i(e.display.scroller,"dragenter",n.enter),i(e.display.scroller,"dragover",n.over),i(e.display.scroller,"dragleave",n.leave),i(e.display.scroller,"drop",n.drop)}}function Dl(e){e.options.lineWrapping?(H(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(T(e.display.wrapper,"CodeMirror-wrap"),Jt(e)),dn(e),vn(e),Xr(e),setTimeout(function(){return Xn(e)},100)}function Wl(e,t){var r=this;if(!(this instanceof Wl))return new Wl(e,t);this.options=t=t?I(t):{},I(Nl,t,!1);var n=t.value;"string"==typeof n?n=new Po(n,t.mode,null,t.lineSeparator,t.direction):t.mode&&(n.modeOption=t.mode),this.doc=n;var i=new Wl.inputStyles[t.inputStyle](this),o=this.display=new wi(e,n,i,t);for(var l in Tl(o.wrapper.CodeMirror=this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),$n(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new R,keySeq:null,specialChars:null},t.autofocus&&!f&&o.input.focus(),x&&C<11&&setTimeout(function(){return r.display.input.reset(!0)},20),function(i){var o=i.display;we(o.scroller,"mousedown",ii(i,xl)),we(o.scroller,"dblclick",x&&C<11?ii(i,function(e){if(!Le(i,e)){var t=pn(i,e);if(t&&!Ll(i,e)&&!Nr(i.display,e)){Ne(e);var r=i.findWordAt(t);Qi(i.doc,r.anchor,r.head)}}}):function(e){return Le(i,e)||Ne(e)});we(o.scroller,"contextmenu",function(e){return kl(i,e)}),we(o.input.getField(),"contextmenu",function(e){o.scroller.contains(e.target)||kl(i,e)});var r,n={end:0};function l(){o.activeTouch&&(r=setTimeout(function(){return o.activeTouch=null},1e3),(n=o.activeTouch).end=+new Date)}function s(e,t){if(null==t.left)return 1;var r=t.left-e.left,n=t.top-e.top;return 400<r*r+n*n}we(o.scroller,"touchstart",function(e){if(!Le(i,e)&&!function(e){if(1==e.touches.length){var t=e.touches[0];return t.radiusX<=1&&t.radiusY<=1}}(e)&&!Ll(i,e)){o.input.ensurePolled(),clearTimeout(r);var t=+new Date;o.activeTouch={start:t,moved:!1,prev:t-n.end<=300?n:null},1==e.touches.length&&(o.activeTouch.left=e.touches[0].pageX,o.activeTouch.top=e.touches[0].pageY)}}),we(o.scroller,"touchmove",function(){o.activeTouch&&(o.activeTouch.moved=!0)}),we(o.scroller,"touchend",function(e){var t=o.activeTouch;if(t&&!Nr(o,e)&&null!=t.left&&!t.moved&&new Date-t.start<300){var r,n=i.coordsChar(o.activeTouch,"page");r=!t.prev||s(t,t.prev)?new Mi(n,n):!t.prev.prev||s(t,t.prev.prev)?i.findWordAt(n):new Mi(at(n.line,0),gt(i.doc,at(n.line+1,0))),i.setSelection(r.anchor,r.head),i.focus(),Ne(e)}l()}),we(o.scroller,"touchcancel",l),we(o.scroller,"scroll",function(){o.scroller.clientHeight&&(Bn(i,o.scroller.scrollTop),Un(i,o.scroller.scrollLeft,!0),Se(i,"scroll",i))}),we(o.scroller,"mousewheel",function(e){return ki(i,e)}),we(o.scroller,"DOMMouseScroll",function(e){return ki(i,e)}),we(o.wrapper,"scroll",function(){return o.wrapper.scrollTop=o.wrapper.scrollLeft=0}),o.dragFunctions={enter:function(e){Le(i,e)||De(e)},over:function(e){Le(i,e)||(function(e,t){var r=pn(e,t);if(r){var n=document.createDocumentFragment();Sn(e,r,n),e.display.dragCursor||(e.display.dragCursor=A("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),N(e.display.dragCursor,n)}}(i,e),De(e))},start:function(e){return function(e,t){if(x&&(!e.state.draggingText||new Date-Eo<100))De(t);else if(!Le(e,t)&&!Nr(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!a)){var r=A("img",null,null,"position: fixed; left: 0; top: 0;");r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",v&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),v&&r.parentNode.removeChild(r)}}(i,e)},drop:ii(i,Io),leave:function(e){Le(i,e)||zo(i)}};var e=o.input.getField();we(e,"keyup",function(e){return vl.call(i,e)}),we(e,"keydown",ii(i,gl)),we(e,"keypress",ii(i,ml)),we(e,"focus",function(e){return On(i,e)}),we(e,"blur",function(e){return An(i,e)})}(this),Go(),Zn(this),this.curOp.forceUpdate=!0,Ri(this,n),t.autofocus&&!f||this.hasFocus()?setTimeout(E(On,this),20):An(this),Ol)Ol.hasOwnProperty(l)&&Ol[l](this,t[l],Ml);vi(this),t.finishInit&&t.finishInit(this);for(var s=0;s<Hl.length;++s)Hl[s](this);Qn(this),b&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}Wl.defaults=Nl,Wl.optionHandlers=Ol;var Hl=[];function Fl(e,t,r,n){var i,o=e.doc;null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=xt(e,t).state:r="prev");var l=e.options.tabSize,s=et(o,t),a=z(s.text,null,l);s.stateAfter&&(s.stateAfter=null);var u,c=s.text.match(/^\s*/)[0];if(n||/\S/.test(s.text)){if("smart"==r&&((u=o.mode.indent(i,s.text.slice(c.length),s.text))==U||150<u)){if(!n)return;r="prev"}}else u=0,r="not";"prev"==r?u=t>o.first?z(et(o,t-1).text,null,l):0:"add"==r?u=a+e.options.indentUnit:"subtract"==r?u=a-e.options.indentUnit:"number"==typeof r&&(u=a+r),u=Math.max(0,u);var h="",f=0;if(e.options.indentWithTabs)for(var d=Math.floor(u/l);d;--d)f+=l,h+="\t";if(f<u&&(h+=_(u-f)),h!=c)return bo(o,h,at(t,0),at(t,c.length),"+input"),!(s.stateAfter=null);for(var p=0;p<o.sel.ranges.length;p++){var g=o.sel.ranges[p];if(g.head.line==t&&g.head.ch<c.length){var v=at(t,c.length);eo(o,p,new Mi(v,v));break}}}Wl.defineInitHook=function(e){return Hl.push(e)};var Pl=null;function El(e){Pl=e}function Il(e,t,r,n,i){var o=e.doc;e.display.shift=!1,n=n||o.sel;var l=new Date-200,s="paste"==i||e.state.pasteIncoming>l,a=Be(t),u=null;if(s&&1<n.ranges.length)if(Pl&&Pl.text.join("\n")==t){if(n.ranges.length%Pl.text.length==0){u=[];for(var c=0;c<Pl.text.length;c++)u.push(o.splitLines(Pl.text[c]))}}else a.length==n.ranges.length&&e.options.pasteLinesPerSelection&&(u=q(a,function(e){return[e]}));for(var h=e.curOp.updateInput,f=n.ranges.length-1;0<=f;f--){var d=n.ranges[f],p=d.from(),g=d.to();d.empty()&&(r&&0<r?p=at(p.line,p.ch-r):e.state.overwrite&&!s?g=at(g.line,Math.min(et(o,g.line).text.length,g.ch+$(a).length)):s&&Pl&&Pl.lineWise&&Pl.text.join("\n")==t&&(p=g=at(p.line,0)));var v={from:p,to:g,text:u?u[f%u.length]:a,origin:i||(s?"paste":e.state.cutIncoming>l?"cut":"+input")};po(e.doc,v),gr(e,"inputRead",e,v)}t&&!s&&Rl(e,t),En(e),e.curOp.updateInput<2&&(e.curOp.updateInput=h),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function zl(e,t){var r=e.clipboardData&&e.clipboardData.getData("Text");return r&&(e.preventDefault(),t.isReadOnly()||t.options.disableInput||ni(t,function(){return Il(t,r,0,null,"paste")}),1)}function Rl(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var r=e.doc.sel,n=r.ranges.length-1;0<=n;n--){var i=r.ranges[n];if(!(100<i.head.ch||n&&r.ranges[n-1].head.line==i.head.line)){var o=e.getModeAt(i.head),l=!1;if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(-1<t.indexOf(o.electricChars.charAt(s))){l=Fl(e,i.head.line,"smart");break}}else o.electricInput&&o.electricInput.test(et(e.doc,i.head.line).text.slice(0,i.head.ch))&&(l=Fl(e,i.head.line,"smart"));l&&gr(e,"electricInput",e,i.head.line)}}}function Bl(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:at(i,0),head:at(i+1,0)};r.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:r}}function Gl(e,t,r,n){e.setAttribute("autocorrect",r?"":"off"),e.setAttribute("autocapitalize",n?"":"off"),e.setAttribute("spellcheck",!!t)}function Ul(){var e=A("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=A("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return b?e.style.width="1000px":e.setAttribute("wrap","off"),c&&(e.style.border="1px solid black"),Gl(e),t}function Vl(n,i,o,e,l){var t=i,r=o,s=et(n,i.line),a=l&&"rtl"==n.direction?-o:o;function u(e){var t,r;if(null==(t=l?ol(n.cm,s,i,o):nl(s,i,o))){if(e||(r=i.line+a)<n.first||r>=n.first+n.size||(i=new at(r,i.ch,i.sticky),!(s=et(n,r))))return;i=il(l,n.cm,s,i.line,a)}else i=t;return 1}if("char"==e)u();else if("column"==e)u(!0);else if("word"==e||"group"==e)for(var c=null,h="group"==e,f=n.cm&&n.cm.getHelper(i,"wordChars"),d=!0;!(o<0)||u(!d);d=!1){var p=s.text.charAt(i.ch)||"\n",g=te(p,f)?"w":h&&"\n"==p?"n":!h||/\s/.test(p)?null:"p";if(!h||d||g||(g="s"),c&&c!=g){o<0&&(o=1,u(),i.sticky="after");break}if(g&&(c=g),0<o&&!u(!d))break}var v=uo(n,i,t,r,!0);return ct(t,v)&&(v.hitSide=!0),v}function Kl(e,t,r,n){var i,o,l=e.doc,s=t.left;if("page"==n){var a=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),u=Math.max(a-.5*an(e.display),3);i=(0<r?t.bottom:t.top)+r*u}else"line"==n&&(i=0<r?t.bottom+3:t.top-3);for(;(o=rn(e,s,i)).outside;){if(r<0?i<=0:i>=l.height){o.hitSide=!0;break}i+=5*r}return o}function jl(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new R,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null}function Xl(e,t){var r=Ir(e,t.line);if(!r||r.hidden)return null;var n=et(e.doc,t.line),i=Pr(r,n,t.line),o=ye(n,e.doc.direction),l="left";o&&(l=ae(o,t.ch)%2?"right":"left");var s=Ur(i.map,t.ch,l);return s.offset="right"==s.collapse?s.end:s.start,s}function Yl(e,t){return t&&(e.bad=!0),e}function _l(e,t,r){var n;if(t==e.display.lineDiv){if(!(n=e.display.lineDiv.childNodes[r]))return Yl(e.clipPos(at(e.display.viewTo-1)),!0);t=null,r=0}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null;if(n.parentNode&&n.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i];if(o.node==n)return $l(o,t,r)}}function $l(u,e,t){var r=u.text.firstChild,n=!1;if(!e||!D(r,e))return Yl(at(it(u.line),0),!0);if(e==r&&(n=!0,e=r.childNodes[t],t=0,!e)){var i=u.rest?$(u.rest):u.line;return Yl(at(it(i),i.text.length),n)}var o=3==e.nodeType?e:null,l=e;for(o||1!=e.childNodes.length||3!=e.firstChild.nodeType||(o=e.firstChild,t=t&&o.nodeValue.length);l.parentNode!=r;)l=l.parentNode;var c=u.measure,h=c.maps;function s(e,t,r){for(var n=-1;n<(h?h.length:0);n++)for(var i=n<0?c.map:h[n],o=0;o<i.length;o+=3){var l=i[o+2];if(l==e||l==t){var s=it(n<0?u.line:u.rest[n]),a=i[o]+r;return(r<0||l!=e)&&(a=i[o+(r?1:0)]),at(s,a)}}}var a=s(o,l,t);if(a)return Yl(a,n);for(var f=l.nextSibling,d=o?o.nodeValue.length-t:0;f;f=f.nextSibling){if(a=s(f,f.firstChild,0))return Yl(at(a.line,a.ch-d),n);d+=f.textContent.length}for(var p=l.previousSibling,g=t;p;p=p.previousSibling){if(a=s(p,p.firstChild,-1))return Yl(at(a.line,a.ch+g),n);g+=p.textContent.length}}jl.prototype.init=function(e){var t=this,l=this,s=l.cm,a=l.div=e.lineDiv;function r(e){if(!Le(s,e)){if(s.somethingSelected())El({lineWise:!1,text:s.getSelections()}),"cut"==e.type&&s.replaceSelection("",null,"cut");else{if(!s.options.lineWiseCopyCut)return;var t=Bl(s);El({lineWise:!0,text:t.text}),"cut"==e.type&&s.operation(function(){s.setSelections(t.ranges,0,V),s.replaceSelection("",null,"cut")})}if(e.clipboardData){e.clipboardData.clearData();var r=Pl.text.join("\n");if(e.clipboardData.setData("Text",r),e.clipboardData.getData("Text")==r)return void e.preventDefault()}var n=Ul(),i=n.firstChild;s.display.lineSpace.insertBefore(n,s.display.lineSpace.firstChild),i.value=Pl.text.join("\n");var o=document.activeElement;P(i),setTimeout(function(){s.display.lineSpace.removeChild(n),o.focus(),o==a&&l.showPrimarySelection()},50)}}Gl(a,s.options.spellcheck,s.options.autocorrect,s.options.autocapitalize),we(a,"paste",function(e){Le(s,e)||zl(e,s)||C<=11&&setTimeout(ii(s,function(){return t.updateFromDOM()}),20)}),we(a,"compositionstart",function(e){t.composing={data:e.data,done:!1}}),we(a,"compositionupdate",function(e){t.composing||(t.composing={data:e.data,done:!1})}),we(a,"compositionend",function(e){t.composing&&(e.data!=t.composing.data&&t.readFromDOMSoon(),t.composing.done=!0)}),we(a,"touchstart",function(){return l.forceCompositionEnd()}),we(a,"input",function(){t.composing||t.readFromDOMSoon()}),we(a,"copy",r),we(a,"cut",r)},jl.prototype.prepareSelection=function(){var e=Cn(this.cm,!1);return e.focus=document.activeElement==this.div,e},jl.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},jl.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},jl.prototype.showPrimarySelection=function(){var e=this.getSelection(),t=this.cm,r=t.doc.sel.primary(),n=r.from(),i=r.to();if(t.display.viewTo==t.display.viewFrom||n.line>=t.display.viewTo||i.line<t.display.viewFrom)e.removeAllRanges();else{var o=_l(t,e.anchorNode,e.anchorOffset),l=_l(t,e.focusNode,e.focusOffset);if(!o||o.bad||!l||l.bad||0!=ut(dt(o,l),n)||0!=ut(ft(o,l),i)){var s=t.display.view,a=n.line>=t.display.viewFrom&&Xl(t,n)||{node:s[0].measure.map[2],offset:0},u=i.line<t.display.viewTo&&Xl(t,i);if(!u){var c=s[s.length-1].measure,h=c.maps?c.maps[c.maps.length-1]:c.map;u={node:h[h.length-1],offset:h[h.length-2]-h[h.length-3]}}if(a&&u){var f,d=e.rangeCount&&e.getRangeAt(0);try{f=k(a.node,a.offset,u.offset,u.node)}catch(e){}f&&(!g&&t.state.focused?(e.collapse(a.node,a.offset),f.collapsed||(e.removeAllRanges(),e.addRange(f))):(e.removeAllRanges(),e.addRange(f)),d&&null==e.anchorNode?e.addRange(d):g&&this.startGracePeriod()),this.rememberSelection()}else e.removeAllRanges()}}},jl.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},jl.prototype.showMultipleSelections=function(e){N(this.cm.display.cursorDiv,e.cursors),N(this.cm.display.selectionDiv,e.selection)},jl.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},jl.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var t=e.getRangeAt(0).commonAncestorContainer;return D(this.div,t)},jl.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()&&document.activeElement==this.div||this.showSelection(this.prepareSelection(),!0),this.div.focus())},jl.prototype.blur=function(){this.div.blur()},jl.prototype.getField=function(){return this.div},jl.prototype.supportsTouch=function(){return!0},jl.prototype.receivedFocus=function(){var t=this;this.selectionInEditor()?this.pollSelection():ni(this.cm,function(){return t.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))})},jl.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},jl.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=this.getSelection(),t=this.cm;if(h&&l&&this.cm.display.gutterSpecs.length&&function(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return 1;return}(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus();if(!this.composing){this.rememberSelection();var r=_l(t,e.anchorNode,e.anchorOffset),n=_l(t,e.focusNode,e.focusOffset);r&&n&&ni(t,function(){no(t.doc,Oi(r,n),V),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0)})}}},jl.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e,t,r,n=this.cm,i=n.display,o=n.doc.sel.primary(),l=o.from(),s=o.to();if(0==l.ch&&l.line>n.firstLine()&&(l=at(l.line-1,et(n.doc,l.line-1).length)),s.ch==et(n.doc,s.line).text.length&&s.line<n.lastLine()&&(s=at(s.line+1,0)),l.line<i.viewFrom||s.line>i.viewTo-1)return!1;r=l.line==i.viewFrom||0==(e=gn(n,l.line))?(t=it(i.view[0].line),i.view[0].node):(t=it(i.view[e].line),i.view[e-1].node.nextSibling);var a,u,c=gn(n,s.line);if(u=c==i.view.length-1?(a=i.viewTo-1,i.lineDiv.lastChild):(a=it(i.view[c+1].line)-1,i.view[c+1].node.previousSibling),!r)return!1;for(var h=n.doc.splitLines(function(a,e,t,u,c){var r="",h=!1,f=a.doc.lineSeparator(),d=!1;function p(){h&&(r+=f,d&&(r+=f),h=d=!1)}function g(e){e&&(p(),r+=e)}function v(e){if(1==e.nodeType){var t=e.getAttribute("cm-text");if(t)return void g(t);var r,n=e.getAttribute("cm-marker");if(n){var i=a.findMarks(at(u,0),at(c+1,0),(s=+n,function(e){return e.id==s}));return void(i.length&&(r=i[0].find(0))&&g(tt(a.doc,r.from,r.to).join(f)))}if("false"==e.getAttribute("contenteditable"))return;var o=/^(pre|div|p|li|table|br)$/i.test(e.nodeName);if(!/^br$/i.test(e.nodeName)&&0==e.textContent.length)return;o&&p();for(var l=0;l<e.childNodes.length;l++)v(e.childNodes[l]);/^(pre|p)$/i.test(e.nodeName)&&(d=!0),o&&(h=!0)}else 3==e.nodeType&&g(e.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "));var s}for(;v(e),e!=t;)e=e.nextSibling,d=!1;return r}(n,r,u,t,a)),f=tt(n.doc,at(t,0),at(a,et(n.doc,a).text.length));1<h.length&&1<f.length;)if($(h)==$(f))h.pop(),f.pop(),a--;else{if(h[0]!=f[0])break;h.shift(),f.shift(),t++}for(var d=0,p=0,g=h[0],v=f[0],m=Math.min(g.length,v.length);d<m&&g.charCodeAt(d)==v.charCodeAt(d);)++d;for(var y=$(h),b=$(f),w=Math.min(y.length-(1==h.length?d:0),b.length-(1==f.length?d:0));p<w&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)++p;if(1==h.length&&1==f.length&&t==l.line)for(;d&&d>l.ch&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)d--,p++;h[h.length-1]=y.slice(0,y.length-p).replace(/^\u200b+/,""),h[0]=h[0].slice(d).replace(/\u200b+$/,"");var x=at(t,d),C=at(a,f.length?$(f).length-p:0);return 1<h.length||h[0]||ut(x,C)?(bo(n.doc,h,x,C,"+input"),!0):void 0},jl.prototype.ensurePolled=function(){this.forceCompositionEnd()},jl.prototype.reset=function(){this.forceCompositionEnd()},jl.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},jl.prototype.readFromDOMSoon=function(){var e=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return;e.composing=null}e.updateFromDOM()},80))},jl.prototype.updateFromDOM=function(){var e=this;!this.cm.isReadOnly()&&this.pollContent()||ni(this.cm,function(){return vn(e.cm)})},jl.prototype.setUneditable=function(e){e.contentEditable="false"},jl.prototype.onKeyPress=function(e){0==e.charCode||this.composing||(e.preventDefault(),this.cm.isReadOnly()||ii(this.cm,Il)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},jl.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},jl.prototype.onContextMenu=function(){},jl.prototype.resetPosition=function(){},jl.prototype.needsContentAttribute=!0;function ql(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new R,this.hasSelection=!1,this.composing=null}var Zl,Ql,Jl,es,ts;function rs(e,t,n,r){Zl.defaults[e]=t,n&&(Ql[e]=r?function(e,t,r){r!=Ml&&n(e,t,r)}:n)}ql.prototype.init=function(r){var e=this,n=this,i=this.cm;this.createField(r);var o=this.textarea;function t(e){if(!Le(i,e)){if(i.somethingSelected())El({lineWise:!1,text:i.getSelections()});else{if(!i.options.lineWiseCopyCut)return;var t=Bl(i);El({lineWise:!0,text:t.text}),"cut"==e.type?i.setSelections(t.ranges,null,V):(n.prevInput="",o.value=t.text.join("\n"),P(o))}"cut"==e.type&&(i.state.cutIncoming=+new Date)}}r.wrapper.insertBefore(this.wrapper,r.wrapper.firstChild),c&&(o.style.width="0px"),we(o,"input",function(){x&&9<=C&&e.hasSelection&&(e.hasSelection=null),n.poll()}),we(o,"paste",function(e){Le(i,e)||zl(e,i)||(i.state.pasteIncoming=+new Date,n.fastPoll())}),we(o,"cut",t),we(o,"copy",t),we(r.scroller,"paste",function(e){if(!Nr(r,e)&&!Le(i,e)){if(!o.dispatchEvent)return i.state.pasteIncoming=+new Date,void n.focus();var t=new Event("paste");t.clipboardData=e.clipboardData,o.dispatchEvent(t)}}),we(r.lineSpace,"selectstart",function(e){Nr(r,e)||Ne(e)}),we(o,"compositionstart",function(){var e=i.getCursor("from");n.composing&&n.composing.range.clear(),n.composing={start:e,range:i.markText(e,i.getCursor("to"),{className:"CodeMirror-composing"})}}),we(o,"compositionend",function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)})},ql.prototype.createField=function(e){this.wrapper=Ul(),this.textarea=this.wrapper.firstChild},ql.prototype.prepareSelection=function(){var e=this.cm,t=e.display,r=e.doc,n=Cn(e);if(e.options.moveInputWithCursor){var i=Jr(e,r.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),l=t.lineDiv.getBoundingClientRect();n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+l.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+l.left-o.left))}return n},ql.prototype.showSelection=function(e){var t=this.cm.display;N(t.cursorDiv,e.cursors),N(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},ql.prototype.reset=function(e){if(!this.contextMenuPending&&!this.composing){var t=this.cm;if(t.somethingSelected()){this.prevInput="";var r=t.getSelection();this.textarea.value=r,t.state.focused&&P(this.textarea),x&&9<=C&&(this.hasSelection=r)}else e||(this.prevInput=this.textarea.value="",x&&9<=C&&(this.hasSelection=null))}},ql.prototype.getField=function(){return this.textarea},ql.prototype.supportsTouch=function(){return!1},ql.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!f||W()!=this.textarea))try{this.textarea.focus()}catch(e){}},ql.prototype.blur=function(){this.textarea.blur()},ql.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},ql.prototype.receivedFocus=function(){this.slowPoll()},ql.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},ql.prototype.fastPoll=function(){var t=!1,r=this;r.pollingFast=!0,r.polling.set(20,function e(){r.poll()||t?(r.pollingFast=!1,r.slowPoll()):(t=!0,r.polling.set(60,e))})},ql.prototype.poll=function(){var e=this,t=this.cm,r=this.textarea,n=this.prevInput;if(this.contextMenuPending||!t.state.focused||Ge(r)&&!n&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1;var i=r.value;if(i==n&&!t.somethingSelected())return!1;if(x&&9<=C&&this.hasSelection===i||w&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1;if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0);if(8203!=o||n||(n="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var l=0,s=Math.min(n.length,i.length);l<s&&n.charCodeAt(l)==i.charCodeAt(l);)++l;return ni(t,function(){Il(t,i.slice(l),n.length-l,null,e.composing?"*compose":null),1e3<i.length||-1<i.indexOf("\n")?r.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},ql.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},ql.prototype.onKeyPress=function(){x&&9<=C&&(this.hasSelection=null),this.fastPoll()},ql.prototype.onContextMenu=function(e){var r=this,n=r.cm,i=n.display,o=r.textarea;r.contextMenuPending&&r.contextMenuPending();var t=pn(n,e),l=i.scroller.scrollTop;if(t&&!v){n.options.resetSelectionOnContextMenu&&-1==n.doc.sel.contains(t)&&ii(n,no)(n.doc,Oi(t),V);var s,a=o.style.cssText,u=r.wrapper.style.cssText,c=r.wrapper.offsetParent.getBoundingClientRect();if(r.wrapper.style.cssText="position: static",o.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-c.top-5)+"px; left: "+(e.clientX-c.left-5)+"px;\n      z-index: 1000; background: "+(x?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",b&&(s=window.scrollY),i.input.focus(),b&&window.scrollTo(null,s),i.input.reset(),n.somethingSelected()||(o.value=r.prevInput=" "),r.contextMenuPending=d,i.selForContextMenu=n.doc.sel,clearTimeout(i.detectingSelectAll),x&&9<=C&&f(),S){De(e);var h=function(){Ce(window,"mouseup",h),setTimeout(d,20)};we(window,"mouseup",h)}else setTimeout(d,50)}function f(){if(null!=o.selectionStart){var e=n.somethingSelected(),t="​"+(e?o.value:"");o.value="⇚",o.value=t,r.prevInput=e?"":"​",o.selectionStart=1,o.selectionEnd=t.length,i.selForContextMenu=n.doc.sel}}function d(){if(r.contextMenuPending==d&&(r.contextMenuPending=!1,r.wrapper.style.cssText=u,o.style.cssText=a,x&&C<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=l),null!=o.selectionStart)){(!x||x&&C<9)&&f();var e=0,t=function(){i.selForContextMenu==n.doc.sel&&0==o.selectionStart&&0<o.selectionEnd&&"​"==r.prevInput?ii(n,ho)(n):e++<10?i.detectingSelectAll=setTimeout(t,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(t,200)}}},ql.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e},ql.prototype.setUneditable=function(){},ql.prototype.needsContentAttribute=!1,Ql=(Zl=Wl).optionHandlers,Zl.defineOption=rs,Zl.Init=Ml,rs("value","",function(e,t){return e.setValue(t)},!0),rs("mode",null,function(e,t){e.doc.modeOption=t,Fi(e)},!0),rs("indentUnit",2,Fi,!0),rs("indentWithTabs",!1),rs("smartIndent",!0),rs("tabSize",4,function(e){Pi(e),Xr(e),vn(e)},!0),rs("lineSeparator",null,function(e,n){if(e.doc.lineSep=n){var i=[],o=e.doc.first;e.doc.iter(function(e){for(var t=0;;){var r=e.text.indexOf(n,t);if(-1==r)break;t=r+n.length,i.push(at(o,r))}o++});for(var t=i.length-1;0<=t;t--)bo(e.doc,n,i[t],at(i[t].line,i[t].ch+n.length))}}),rs("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,function(e,t,r){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),r!=Ml&&e.refresh()}),rs("specialCharPlaceholder",or,function(e){return e.refresh()},!0),rs("electricChars",!0),rs("inputStyle",f?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),rs("spellcheck",!1,function(e,t){return e.getInputField().spellcheck=t},!0),rs("autocorrect",!1,function(e,t){return e.getInputField().autocorrect=t},!0),rs("autocapitalize",!1,function(e,t){return e.getInputField().autocapitalize=t},!0),rs("rtlMoveVisually",!p),rs("wholeLineUpdateBefore",!0),rs("theme","default",function(e){Tl(e),bi(e)},!0),rs("keyMap","default",function(e,t,r){var n=el(t),i=r!=Ml&&el(r);i&&i.detach&&i.detach(e,n),n.attach&&n.attach(e,i||null)}),rs("extraKeys",null),rs("configureMouse",null),rs("lineWrapping",!1,Dl,!0),rs("gutters",[],function(e,t){e.display.gutterSpecs=mi(t,e.options.lineNumbers),bi(e)},!0),rs("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?hn(e.display)+"px":"0",e.refresh()},!0),rs("coverGutterNextToScrollbar",!1,function(e){return Xn(e)},!0),rs("scrollbarStyle","native",function(e){$n(e),Xn(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),rs("lineNumbers",!1,function(e,t){e.display.gutterSpecs=mi(e.options.gutters,t),bi(e)},!0),rs("firstLineNumber",1,bi,!0),rs("lineNumberFormatter",function(e){return e},bi,!0),rs("showCursorWhenSelecting",!1,xn,!0),rs("resetSelectionOnContextMenu",!0),rs("lineWiseCopyCut",!0),rs("pasteLinesPerSelection",!0),rs("selectionsMayTouch",!1),rs("readOnly",!1,function(e,t){"nocursor"==t&&(An(e),e.display.input.blur()),e.display.input.readOnlyChanged(t)}),rs("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),rs("dragDrop",!0,Al),rs("allowDropFileTypes",null),rs("cursorBlinkRate",530),rs("cursorScrollMargin",0),rs("cursorHeight",1,xn,!0),rs("singleCursorHeightPerLine",!0,xn,!0),rs("workTime",100),rs("workDelay",100),rs("flattenSpans",!0,Pi,!0),rs("addModeClass",!1,Pi,!0),rs("pollInterval",100),rs("undoDepth",200,function(e,t){return e.doc.history.undoDepth=t}),rs("historyEventDelay",1250),rs("viewportMargin",10,function(e){return e.refresh()},!0),rs("maxHighlightLength",1e4,Pi,!0),rs("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),rs("tabindex",null,function(e,t){return e.display.input.getField().tabIndex=t||""}),rs("autofocus",null),rs("direction","ltr",function(e,t){return e.doc.setDirection(t)},!0),rs("phrases",null),es=(Jl=Wl).optionHandlers,ts=Jl.helpers={},Jl.prototype={constructor:Jl,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,t){var r=this.options,n=r[e];r[e]==t&&"mode"!=e||(r[e]=t,es.hasOwnProperty(e)&&ii(this,es[e])(this,t,n),Se(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](el(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0},addOverlay:oi(function(e,t){var r=e.token?e:Jl.getMode(this.options,e);if(r.startState)throw new Error("Overlays may not be stateful.");!function(e,t,r){for(var n=0,i=r(t);n<e.length&&r(e[n])<=i;)n++;e.splice(n,0,t)}(this.state.overlays,{mode:r,modeSpec:e,opaque:t&&t.opaque,priority:t&&t.priority||0},function(e){return e.priority}),this.state.modeGen++,vn(this)}),removeOverlay:oi(function(e){for(var t=this.state.overlays,r=0;r<t.length;++r){var n=t[r].modeSpec;if(n==e||"string"==typeof e&&n.name==e)return t.splice(r,1),this.state.modeGen++,void vn(this)}}),indentLine:oi(function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),lt(this.doc,e)&&Fl(this,e,t,r)}),indentSelection:oi(function(e){for(var t=this.doc.sel.ranges,r=-1,n=0;n<t.length;n++){var i=t[n];if(i.empty())i.head.line>r&&(Fl(this,i.head.line,e,!0),r=i.head.line,n==this.doc.sel.primIndex&&En(this));else{var o=i.from(),l=i.to(),s=Math.max(r,o.line);r=Math.min(this.lastLine(),l.line-(l.ch?0:1))+1;for(var a=s;a<r;++a)Fl(this,a,e);var u=this.doc.sel.ranges;0==o.ch&&t.length==u.length&&0<u[n].from().ch&&eo(this.doc,n,new Mi(o,u[n].to()),V)}}}),getTokenAt:function(e,t){return Tt(this,e,t)},getLineTokens:function(e,t){return Tt(this,at(e),t,!0)},getTokenTypeAt:function(e){e=gt(this.doc,e);var t,r=wt(this,et(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch;if(0==o)t=r[2];else for(;;){var l=n+i>>1;if((l?r[2*l-1]:0)>=o)i=l;else{if(!(r[2*l+1]<o)){t=r[2*l+2];break}n=1+l}}var s=t?t.indexOf("overlay "):-1;return s<0?t:0==s?null:t.slice(0,s-1)},getModeAt:function(e){var t=this.doc.mode;return t.innerMode?Jl.innerMode(t,this.getTokenAt(e).state).mode:t},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var r=[];if(!ts.hasOwnProperty(t))return r;var n=ts[t],i=this.getModeAt(e);if("string"==typeof i[t])n[i[t]]&&r.push(n[i[t]]);else if(i[t])for(var o=0;o<i[t].length;o++){var l=n[i[t][o]];l&&r.push(l)}else i.helperType&&n[i.helperType]?r.push(n[i.helperType]):n[i.name]&&r.push(n[i.name]);for(var s=0;s<n._global.length;s++){var a=n._global[s];a.pred(i,this)&&-1==B(r,a.val)&&r.push(a.val)}return r},getStateAfter:function(e,t){var r=this.doc;return xt(this,(e=pt(r,null==e?r.first+r.size-1:e))+1,t).state},cursorCoords:function(e,t){var r=this.doc.sel.primary();return Jr(this,null==e?r.head:"object"==typeof e?gt(this.doc,e):e?r.from():r.to(),t||"page")},charCoords:function(e,t){return Qr(this,gt(this.doc,e),t||"page")},coordsChar:function(e,t){return rn(this,(e=Zr(this,e,t||"page")).left,e.top)},lineAtHeight:function(e,t){return e=Zr(this,{top:e,left:0},t||"page").top,ot(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,r){var n,i=!1;if("number"==typeof e){var o=this.doc.first+this.doc.size-1;e<this.doc.first?e=this.doc.first:o<e&&(e=o,i=!0),n=et(this.doc,e)}else n=e;return qr(this,n,{top:0,left:0},t||"page",r||i).top+(i?this.doc.height-Zt(n):0)},defaultTextHeight:function(){return an(this.display)},defaultCharWidth:function(){return un(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o,l,s,a=this.display,u=(e=Jr(this,gt(this.doc,e))).bottom,c=e.left;if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),a.sizer.appendChild(t),"over"==n)u=e.top;else if("above"==n||"near"==n){var h=Math.max(a.wrapper.clientHeight,this.doc.height),f=Math.max(a.sizer.clientWidth,a.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>h)&&e.top>t.offsetHeight?u=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=h&&(u=e.bottom),c+t.offsetWidth>f&&(c=f-t.offsetWidth)}t.style.top=u+"px",t.style.left=t.style.right="","right"==i?(c=a.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?c=0:"middle"==i&&(c=(a.sizer.clientWidth-t.offsetWidth)/2),t.style.left=c+"px"),r&&(o=this,l={left:c,top:u,right:c+t.offsetWidth,bottom:u+t.offsetHeight},null!=(s=Fn(o,l)).scrollTop&&Bn(o,s.scrollTop),null!=s.scrollLeft&&Un(o,s.scrollLeft))},triggerOnKeyDown:oi(gl),triggerOnKeyPress:oi(ml),triggerOnKeyUp:vl,triggerOnMouseDown:oi(xl),execCommand:function(e){if(ll.hasOwnProperty(e))return ll[e].call(null,this)},triggerElectric:oi(function(e){Rl(this,e)}),findPosH:function(e,t,r,n){var i=1;t<0&&(i=-1,t=-t);for(var o=gt(this.doc,e),l=0;l<t&&!(o=Vl(this.doc,o,i,r,n)).hitSide;++l);return o},moveH:oi(function(t,r){var n=this;this.extendSelectionsBy(function(e){return n.display.shift||n.doc.extend||e.empty()?Vl(n.doc,e.head,t,r,n.options.rtlMoveVisually):t<0?e.from():e.to()},j)}),deleteH:oi(function(r,n){var e=this.doc.sel,i=this.doc;e.somethingSelected()?i.replaceSelection("",null,"+delete"):tl(this,function(e){var t=Vl(i,e.head,r,n,!1);return r<0?{from:t,to:e.head}:{from:e.head,to:t}})}),findPosV:function(e,t,r,n){var i=1,o=n;t<0&&(i=-1,t=-t);for(var l=gt(this.doc,e),s=0;s<t;++s){var a=Jr(this,l,"div");if(null==o?o=a.left:a.left=o,(l=Kl(this,a,i,r)).hitSide)break}return l},moveV:oi(function(n,i){var o=this,l=this.doc,s=[],a=!this.display.shift&&!l.extend&&l.sel.somethingSelected();if(l.extendSelectionsBy(function(e){if(a)return n<0?e.from():e.to();var t=Jr(o,e.head,"div");null!=e.goalColumn&&(t.left=e.goalColumn),s.push(t.left);var r=Kl(o,t,n,i);return"page"==i&&e==l.sel.primary()&&Pn(o,Qr(o,r,"div").top-t.top),r},j),s.length)for(var e=0;e<l.sel.ranges.length;e++)l.sel.ranges[e].goalColumn=s[e]}),findWordAt:function(e){var t=et(this.doc,e.line).text,r=e.ch,n=e.ch;if(t){var i=this.getHelper(e,"wordChars");"before"!=e.sticky&&n!=t.length||!r?++n:--r;for(var o=t.charAt(r),l=te(o,i)?function(e){return te(e,i)}:/\s/.test(o)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!te(e)};0<r&&l(t.charAt(r-1));)--r;for(;n<t.length&&l(t.charAt(n));)++n}return new Mi(at(e.line,r),at(e.line,n))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||(((this.state.overwrite=!this.state.overwrite)?H:T)(this.display.cursorDiv,"CodeMirror-overwrite"),Se(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==W()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:oi(function(e,t){In(this,e,t)}),getScrollInfo:function(){var e=this.display.scroller;return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Wr(this)-this.display.barHeight,width:e.scrollWidth-Wr(this)-this.display.barWidth,clientHeight:Fr(this),clientWidth:Hr(this)}},scrollIntoView:oi(function(e,t){var r,n;null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:at(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?(n=e,zn(r=this),r.curOp.scrollToPos=n):Rn(this,e.from,e.to,e.margin)}),setSize:oi(function(e,t){function r(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}var n=this;null!=e&&(this.display.wrapper.style.width=r(e)),null!=t&&(this.display.wrapper.style.height=r(t)),this.options.lineWrapping&&jr(this);var i=this.display.viewFrom;this.doc.iter(i,this.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){mn(n,i,"widget");break}++i}),this.curOp.forceUpdate=!0,Se(this,"refresh",this)}),operation:function(e){return ni(this,e)},startOperation:function(){return Zn(this)},endOperation:function(){return Qn(this)},refresh:oi(function(){var e=this.display.cachedTextHeight;vn(this),this.curOp.forceUpdate=!0,Xr(this),In(this,this.doc.scrollLeft,this.doc.scrollTop),di(this.display),(null==e||.5<Math.abs(e-an(this.display)))&&dn(this),Se(this,"refresh",this)}),swapDoc:oi(function(e){var t=this.doc;return t.cm=null,this.state.selectingText&&this.state.selectingText(),Ri(this,e),Xr(this),this.display.input.reset(),In(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,gr(this,"swapDoc",this,t),t}),phrase:function(e){var t=this.options.phrases;return t&&Object.prototype.hasOwnProperty.call(t,e)?t[e]:e},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Me(Jl),Jl.registerHelper=function(e,t,r){ts.hasOwnProperty(e)||(ts[e]=Jl[e]={_global:[]}),ts[e][t]=r},Jl.registerGlobalHelper=function(e,t,r,n){Jl.registerHelper(e,t,n),ts[e]._global.push({pred:r,val:n})};var ns,is="iter insert remove copy getEditor constructor".split(" ");for(var os in Po.prototype)Po.prototype.hasOwnProperty(os)&&B(is,os)<0&&(Wl.prototype[os]=function(e){return function(){return e.apply(this.doc,arguments)}}(Po.prototype[os]));return Me(Po),Wl.inputStyles={textarea:ql,contenteditable:jl},Wl.defineMode=function(e){Wl.defaults.mode||"null"==e||(Wl.defaults.mode=e),function(e,t){2<arguments.length&&(t.dependencies=Array.prototype.slice.call(arguments,2)),Ke[e]=t}.apply(this,arguments)},Wl.defineMIME=function(e,t){je[e]=t},Wl.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),Wl.defineMIME("text/plain","null"),Wl.defineExtension=function(e,t){Wl.prototype[e]=t},Wl.defineDocExtension=function(e,t){Po.prototype[e]=t},Wl.fromTextArea=function(t,r){if((r=r?I(r):{}).value=t.value,!r.tabindex&&t.tabIndex&&(r.tabindex=t.tabIndex),!r.placeholder&&t.placeholder&&(r.placeholder=t.placeholder),null==r.autofocus){var e=W();r.autofocus=e==t||null!=t.getAttribute("autofocus")&&e==document.body}function n(){t.value=s.getValue()}var i;if(t.form&&(we(t.form,"submit",n),!r.leaveSubmitMethodAlone)){var o=t.form;i=o.submit;try{var l=o.submit=function(){n(),o.submit=i,o.submit(),o.submit=l}}catch(e){}}r.finishInit=function(e){e.save=n,e.getTextArea=function(){return t},e.toTextArea=function(){e.toTextArea=isNaN,n(),t.parentNode.removeChild(e.getWrapperElement()),t.style.display="",t.form&&(Ce(t.form,"submit",n),r.leaveSubmitMethodAlone||"function"!=typeof t.form.submit||(t.form.submit=i))}},t.style.display="none";var s=Wl(function(e){return t.parentNode.insertBefore(e,t.nextSibling)},r);return s},(ns=Wl).off=Ce,ns.on=we,ns.wheelEventPixels=Li,ns.Doc=Po,ns.splitLines=Be,ns.countColumn=z,ns.findColumn=X,ns.isWordChar=ee,ns.Pass=U,ns.signal=Se,ns.Line=er,ns.changeEnd=Ai,ns.scrollbarModel=_n,ns.Pos=at,ns.cmpPos=ut,ns.modes=Ke,ns.mimeModes=je,ns.resolveMode=Xe,ns.getMode=Ye,ns.modeExtensions=_e,ns.extendMode=$e,ns.copyState=qe,ns.startState=Qe,ns.innerMode=Ze,ns.commands=ll,ns.keyMap=Yo,ns.keyName=Jo,ns.isModifierKey=Zo,ns.lookupKey=qo,ns.normalizeKeyMap=$o,ns.StringStream=Je,ns.SharedTextMarker=Do,ns.TextMarker=Oo,ns.LineWidget=To,ns.e_preventDefault=Ne,ns.e_stopPropagation=Oe,ns.e_stop=De,ns.addClass=H,ns.contains=D,ns.rmClass=T,ns.keyNames=Vo,Wl.version="5.52.2",Wl});
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var statementIndent = parserConfig.statementIndent;
  var jsonldMode = parserConfig.jsonld;
  var jsonMode = parserConfig.json || jsonldMode;
  var isTS = parserConfig.typescript;
  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

    return {
      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": D, "break": D, "continue": D, "new": kw("new"), "delete": C, "void": C, "throw": C,
      "debugger": kw("debugger"), "var": kw("var"), "const": kw("var"), "let": kw("var"),
      "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C,
      "await": C
    };
  }();

  var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

  function readRegexp(stream) {
    var escaped = false, next, inSet = false;
    while ((next = stream.next()) != null) {
      if (!escaped) {
        if (next == "/" && !inSet) return;
        if (next == "[") inSet = true;
        else if (inSet && next == "]") inSet = false;
      }
      escaped = !escaped && next == "\\";
    }
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }
  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "." && stream.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
      return ret("number", "number");
    } else if (ch == "." && stream.match("..")) {
      return ret("spread", "meta");
    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
      return ret(ch);
    } else if (ch == "=" && stream.eat(">")) {
      return ret("=>", "operator");
    } else if (ch == "0" && stream.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) {
      return ret("number", "number");
    } else if (/\d/.test(ch)) {
      stream.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
      return ret("number", "number");
    } else if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      } else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      } else if (expressionAllowed(stream, state, 1)) {
        readRegexp(stream);
        stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
        return ret("regexp", "string-2");
      } else {
        stream.eat("=");
        return ret("operator", "operator", stream.current());
      }
    } else if (ch == "`") {
      state.tokenize = tokenQuasi;
      return tokenQuasi(stream, state);
    } else if (ch == "#" && stream.peek() == "!") {
      stream.skipToEnd();
      return ret("meta", "meta");
    } else if (ch == "#" && stream.eatWhile(wordRE)) {
      return ret("variable", "property")
    } else if (ch == "<" && stream.match("!--") ||
               (ch == "-" && stream.match("->") && !/\S/.test(stream.string.slice(0, stream.start)))) {
      stream.skipToEnd()
      return ret("comment", "comment")
    } else if (isOperatorChar.test(ch)) {
      if (ch != ">" || !state.lexical || state.lexical.type != ">") {
        if (stream.eat("=")) {
          if (ch == "!" || ch == "=") stream.eat("=")
        } else if (/[<>*+\-]/.test(ch)) {
          stream.eat(ch)
          if (ch == ">") stream.eat(ch)
        }
      }
      if (ch == "?" && stream.eat(".")) return ret(".")
      return ret("operator", "operator", stream.current());
    } else if (wordRE.test(ch)) {
      stream.eatWhile(wordRE);
      var word = stream.current()
      if (state.lastType != ".") {
        if (keywords.propertyIsEnumerable(word)) {
          var kw = keywords[word]
          return ret(kw.type, kw.style, word)
        }
        if (word == "async" && stream.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, false))
          return ret("async", "keyword", word)
      }
      return ret("variable", "variable", word)
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next;
      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
        state.tokenize = tokenBase;
        return ret("jsonld-keyword", "meta");
      }
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) break;
        escaped = !escaped && next == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenQuasi(stream, state) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
        state.tokenize = tokenBase;
        break;
      }
      escaped = !escaped && next == "\\";
    }
    return ret("quasi", "string-2", stream.current());
  }

  var brackets = "([{}])";
  // This is a crude lookahead trick to try and notice that we're
  // parsing the argument patterns for a fat-arrow function before we
  // actually hit the arrow token. It only works if the arrow is on
  // the same line as the arguments and there's no strange noise
  // (comments) in between. Fallback is to only notice when we hit the
  // arrow, and not declare the arguments as locals for the arrow
  // body.
  function findFatArrow(stream, state) {
    if (state.fatArrowAt) state.fatArrowAt = null;
    var arrow = stream.string.indexOf("=>", stream.start);
    if (arrow < 0) return;

    if (isTS) { // Try to skip TypeScript return type declarations after the arguments
      var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow))
      if (m) arrow = m.index
    }

    var depth = 0, sawSomething = false;
    for (var pos = arrow - 1; pos >= 0; --pos) {
      var ch = stream.string.charAt(pos);
      var bracket = brackets.indexOf(ch);
      if (bracket >= 0 && bracket < 3) {
        if (!depth) { ++pos; break; }
        if (--depth == 0) { if (ch == "(") sawSomething = true; break; }
      } else if (bracket >= 3 && bracket < 6) {
        ++depth;
      } else if (wordRE.test(ch)) {
        sawSomething = true;
      } else if (/["'\/`]/.test(ch)) {
        for (;; --pos) {
          if (pos == 0) return
          var next = stream.string.charAt(pos - 1)
          if (next == ch && stream.string.charAt(pos - 2) != "\\") { pos--; break }
        }
      } else if (sawSomething && !depth) {
        ++pos;
        break;
      }
    }
    if (sawSomething && !depth) state.fatArrowAt = pos;
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
    for (var cx = state.context; cx; cx = cx.prev) {
      for (var v = cx.vars; v; v = v.next)
        if (v.name == varname) return true;
    }
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function inList(name, list) {
    for (var v = list; v; v = v.next) if (v.name == name) return true
    return false;
  }
  function register(varname) {
    var state = cx.state;
    cx.marked = "def";
    if (state.context) {
      if (state.lexical.info == "var" && state.context && state.context.block) {
        // FIXME function decls are also not block scoped
        var newContext = registerVarScoped(varname, state.context)
        if (newContext != null) {
          state.context = newContext
          return
        }
      } else if (!inList(varname, state.localVars)) {
        state.localVars = new Var(varname, state.localVars)
        return
      }
    }
    // Fall through means this is global
    if (parserConfig.globalVars && !inList(varname, state.globalVars))
      state.globalVars = new Var(varname, state.globalVars)
  }
  function registerVarScoped(varname, context) {
    if (!context) {
      return null
    } else if (context.block) {
      var inner = registerVarScoped(varname, context.prev)
      if (!inner) return null
      if (inner == context.prev) return context
      return new Context(inner, context.vars, true)
    } else if (inList(varname, context.vars)) {
      return context
    } else {
      return new Context(context.prev, new Var(varname, context.vars), false)
    }
  }

  function isModifier(name) {
    return name == "public" || name == "private" || name == "protected" || name == "abstract" || name == "readonly"
  }

  // Combinators

  function Context(prev, vars, block) { this.prev = prev; this.vars = vars; this.block = block }
  function Var(name, next) { this.name = name; this.next = next }

  var defaultVars = new Var("this", new Var("arguments", null))
  function pushcontext() {
    cx.state.context = new Context(cx.state.context, cx.state.localVars, false)
    cx.state.localVars = defaultVars
  }
  function pushblockcontext() {
    cx.state.context = new Context(cx.state.context, cx.state.localVars, true)
    cx.state.localVars = null
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars
    cx.state.context = cx.state.context.prev
  }
  popcontext.lex = true
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state, indent = state.indented;
      if (state.lexical.type == "stat") indent = state.lexical.indented;
      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
        indent = outer.indented;
      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    function exp(type) {
      if (type == wanted) return cont();
      else if (wanted == ";" || type == "}" || type == ")" || type == "]") return pass();
      else return cont(exp);
    };
    return exp;
  }

  function statement(type, value) {
    if (type == "var") return cont(pushlex("vardef", value), vardef, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "keyword d") return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect(";"), poplex);
    if (type == "debugger") return cont(expect(";"));
    if (type == "{") return cont(pushlex("}"), pushblockcontext, block, poplex, popcontext);
    if (type == ";") return cont();
    if (type == "if") {
      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
        cx.state.cc.pop()();
      return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
    }
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
    if (type == "class" || (isTS && value == "interface")) {
      cx.marked = "keyword"
      return cont(pushlex("form", type == "class" ? type : value), className, poplex)
    }
    if (type == "variable") {
      if (isTS && value == "declare") {
        cx.marked = "keyword"
        return cont(statement)
      } else if (isTS && (value == "module" || value == "enum" || value == "type") && cx.stream.match(/^\s*\w/, false)) {
        cx.marked = "keyword"
        if (value == "enum") return cont(enumdef);
        else if (value == "type") return cont(typename, expect("operator"), typeexpr, expect(";"));
        else return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex)
      } else if (isTS && value == "namespace") {
        cx.marked = "keyword"
        return cont(pushlex("form"), expression, statement, poplex)
      } else if (isTS && value == "abstract") {
        cx.marked = "keyword"
        return cont(statement)
      } else {
        return cont(pushlex("stat"), maybelabel);
      }
    }
    if (type == "switch") return cont(pushlex("form"), parenExpr, expect("{"), pushlex("}", "switch"), pushblockcontext,
                                      block, poplex, poplex, popcontext);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, maybeCatchBinding, statement, poplex, popcontext);
    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
    if (type == "async") return cont(statement)
    if (value == "@") return cont(expression, statement)
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function maybeCatchBinding(type) {
    if (type == "(") return cont(funarg, expect(")"))
  }
  function expression(type, value) {
    return expressionInner(type, value, false);
  }
  function expressionNoComma(type, value) {
    return expressionInner(type, value, true);
  }
  function parenExpr(type) {
    if (type != "(") return pass()
    return cont(pushlex(")"), maybeexpression, expect(")"), poplex)
  }
  function expressionInner(type, value, noComma) {
    if (cx.state.fatArrowAt == cx.stream.start) {
      var body = noComma ? arrowBodyNoComma : arrowBody;
      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect("=>"), body, popcontext);
      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
    }

    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
    if (type == "function") return cont(functiondef, maybeop);
    if (type == "class" || (isTS && value == "interface")) { cx.marked = "keyword"; return cont(pushlex("form"), classExpression, poplex); }
    if (type == "keyword c" || type == "async") return cont(noComma ? expressionNoComma : expression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
    if (type == "quasi") return pass(quasi, maybeop);
    if (type == "new") return cont(maybeTarget(noComma));
    if (type == "import") return cont(expression);
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }

  function maybeoperatorComma(type, value) {
    if (type == ",") return cont(maybeexpression);
    return maybeoperatorNoComma(type, value, false);
  }
  function maybeoperatorNoComma(type, value, noComma) {
    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
    var expr = noComma == false ? expression : expressionNoComma;
    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
    if (type == "operator") {
      if (/\+\+|--/.test(value) || isTS && value == "!") return cont(me);
      if (isTS && value == "<" && cx.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false))
        return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, me);
      if (value == "?") return cont(expression, expect(":"), expr);
      return cont(expr);
    }
    if (type == "quasi") { return pass(quasi, me); }
    if (type == ";") return;
    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
    if (type == ".") return cont(property, me);
    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
    if (isTS && value == "as") { cx.marked = "keyword"; return cont(typeexpr, me) }
    if (type == "regexp") {
      cx.state.lastType = cx.marked = "operator"
      cx.stream.backUp(cx.stream.pos - cx.stream.start - 1)
      return cont(expr)
    }
  }
  function quasi(type, value) {
    if (type != "quasi") return pass();
    if (value.slice(value.length - 2) != "${") return cont(quasi);
    return cont(expression, continueQuasi);
  }
  function continueQuasi(type) {
    if (type == "}") {
      cx.marked = "string-2";
      cx.state.tokenize = tokenQuasi;
      return cont(quasi);
    }
  }
  function arrowBody(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expression);
  }
  function arrowBodyNoComma(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expressionNoComma);
  }
  function maybeTarget(noComma) {
    return function(type) {
      if (type == ".") return cont(noComma ? targetNoComma : target);
      else if (type == "variable" && isTS) return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma)
      else return pass(noComma ? expressionNoComma : expression);
    };
  }
  function target(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
  }
  function targetNoComma(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperatorComma, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type, value) {
    if (type == "async") {
      cx.marked = "property";
      return cont(objprop);
    } else if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      if (value == "get" || value == "set") return cont(getterSetter);
      var m // Work around fat-arrow-detection complication for detecting typescript typed arrow params
      if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false)))
        cx.state.fatArrowAt = cx.stream.pos + m[0].length
      return cont(afterprop);
    } else if (type == "number" || type == "string") {
      cx.marked = jsonldMode ? "property" : (cx.style + " property");
      return cont(afterprop);
    } else if (type == "jsonld-keyword") {
      return cont(afterprop);
    } else if (isTS && isModifier(value)) {
      cx.marked = "keyword"
      return cont(objprop)
    } else if (type == "[") {
      return cont(expression, maybetype, expect("]"), afterprop);
    } else if (type == "spread") {
      return cont(expressionNoComma, afterprop);
    } else if (value == "*") {
      cx.marked = "keyword";
      return cont(objprop);
    } else if (type == ":") {
      return pass(afterprop)
    }
  }
  function getterSetter(type) {
    if (type != "variable") return pass(afterprop);
    cx.marked = "property";
    return cont(functiondef);
  }
  function afterprop(type) {
    if (type == ":") return cont(expressionNoComma);
    if (type == "(") return pass(functiondef);
  }
  function commasep(what, end, sep) {
    function proceed(type, value) {
      if (sep ? sep.indexOf(type) > -1 : type == ",") {
        var lex = cx.state.lexical;
        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
        return cont(function(type, value) {
          if (type == end || value == end) return pass()
          return pass(what)
        }, proceed);
      }
      if (type == end || value == end) return cont();
      if (sep && sep.indexOf(";") > -1) return pass(what)
      return cont(expect(end));
    }
    return function(type, value) {
      if (type == end || value == end) return cont();
      return pass(what, proceed);
    };
  }
  function contCommasep(what, end, info) {
    for (var i = 3; i < arguments.length; i++)
      cx.cc.push(arguments[i]);
    return cont(pushlex(end, info), commasep(what, end), poplex);
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function maybetype(type, value) {
    if (isTS) {
      if (type == ":") return cont(typeexpr);
      if (value == "?") return cont(maybetype);
    }
  }
  function maybetypeOrIn(type, value) {
    if (isTS && (type == ":" || value == "in")) return cont(typeexpr)
  }
  function mayberettype(type) {
    if (isTS && type == ":") {
      if (cx.stream.match(/^\s*\w+\s+is\b/, false)) return cont(expression, isKW, typeexpr)
      else return cont(typeexpr)
    }
  }
  function isKW(_, value) {
    if (value == "is") {
      cx.marked = "keyword"
      return cont()
    }
  }
  function typeexpr(type, value) {
    if (value == "keyof" || value == "typeof" || value == "infer") {
      cx.marked = "keyword"
      return cont(value == "typeof" ? expressionNoComma : typeexpr)
    }
    if (type == "variable" || value == "void") {
      cx.marked = "type"
      return cont(afterType)
    }
    if (value == "|" || value == "&") return cont(typeexpr)
    if (type == "string" || type == "number" || type == "atom") return cont(afterType);
    if (type == "[") return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType)
    if (type == "{") return cont(pushlex("}"), commasep(typeprop, "}", ",;"), poplex, afterType)
    if (type == "(") return cont(commasep(typearg, ")"), maybeReturnType, afterType)
    if (type == "<") return cont(commasep(typeexpr, ">"), typeexpr)
  }
  function maybeReturnType(type) {
    if (type == "=>") return cont(typeexpr)
  }
  function typeprop(type, value) {
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property"
      return cont(typeprop)
    } else if (value == "?" || type == "number" || type == "string") {
      return cont(typeprop)
    } else if (type == ":") {
      return cont(typeexpr)
    } else if (type == "[") {
      return cont(expect("variable"), maybetypeOrIn, expect("]"), typeprop)
    } else if (type == "(") {
      return pass(functiondecl, typeprop)
    }
  }
  function typearg(type, value) {
    if (type == "variable" && cx.stream.match(/^\s*[?:]/, false) || value == "?") return cont(typearg)
    if (type == ":") return cont(typeexpr)
    if (type == "spread") return cont(typearg)
    return pass(typeexpr)
  }
  function afterType(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
    if (value == "|" || type == "." || value == "&") return cont(typeexpr)
    if (type == "[") return cont(typeexpr, expect("]"), afterType)
    if (value == "extends" || value == "implements") { cx.marked = "keyword"; return cont(typeexpr) }
    if (value == "?") return cont(typeexpr, expect(":"), typeexpr)
  }
  function maybeTypeArgs(_, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
  }
  function typeparam() {
    return pass(typeexpr, maybeTypeDefault)
  }
  function maybeTypeDefault(_, value) {
    if (value == "=") return cont(typeexpr)
  }
  function vardef(_, value) {
    if (value == "enum") {cx.marked = "keyword"; return cont(enumdef)}
    return pass(pattern, maybetype, maybeAssign, vardefCont);
  }
  function pattern(type, value) {
    if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(pattern) }
    if (type == "variable") { register(value); return cont(); }
    if (type == "spread") return cont(pattern);
    if (type == "[") return contCommasep(eltpattern, "]");
    if (type == "{") return contCommasep(proppattern, "}");
  }
  function proppattern(type, value) {
    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
      register(value);
      return cont(maybeAssign);
    }
    if (type == "variable") cx.marked = "property";
    if (type == "spread") return cont(pattern);
    if (type == "}") return pass();
    if (type == "[") return cont(expression, expect(']'), expect(':'), proppattern);
    return cont(expect(":"), pattern, maybeAssign);
  }
  function eltpattern() {
    return pass(pattern, maybeAssign)
  }
  function maybeAssign(_type, value) {
    if (value == "=") return cont(expressionNoComma);
  }
  function vardefCont(type) {
    if (type == ",") return cont(vardef);
  }
  function maybeelse(type, value) {
    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
  }
  function forspec(type, value) {
    if (value == "await") return cont(forspec);
    if (type == "(") return cont(pushlex(")"), forspec1, poplex);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef, forspec2);
    if (type == "variable") return cont(forspec2);
    return pass(forspec2)
  }
  function forspec2(type, value) {
    if (type == ")") return cont()
    if (type == ";") return cont(forspec2)
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression, forspec2) }
    return pass(expression, forspec2)
  }
  function functiondef(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, statement, popcontext);
    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondef)
  }
  function functiondecl(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondecl);}
    if (type == "variable") {register(value); return cont(functiondecl);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, popcontext);
    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondecl)
  }
  function typename(type, value) {
    if (type == "keyword" || type == "variable") {
      cx.marked = "type"
      return cont(typename)
    } else if (value == "<") {
      return cont(pushlex(">"), commasep(typeparam, ">"), poplex)
    }
  }
  function funarg(type, value) {
    if (value == "@") cont(expression, funarg)
    if (type == "spread") return cont(funarg);
    if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(funarg); }
    if (isTS && type == "this") return cont(maybetype, maybeAssign)
    return pass(pattern, maybetype, maybeAssign);
  }
  function classExpression(type, value) {
    // Class expressions may have an optional name.
    if (type == "variable") return className(type, value);
    return classNameAfter(type, value);
  }
  function className(type, value) {
    if (type == "variable") {register(value); return cont(classNameAfter);}
  }
  function classNameAfter(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, classNameAfter)
    if (value == "extends" || value == "implements" || (isTS && type == ",")) {
      if (value == "implements") cx.marked = "keyword";
      return cont(isTS ? typeexpr : expression, classNameAfter);
    }
    if (type == "{") return cont(pushlex("}"), classBody, poplex);
  }
  function classBody(type, value) {
    if (type == "async" ||
        (type == "variable" &&
         (value == "static" || value == "get" || value == "set" || (isTS && isModifier(value))) &&
         cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false))) {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      return cont(classfield, classBody);
    }
    if (type == "number" || type == "string") return cont(classfield, classBody);
    if (type == "[")
      return cont(expression, maybetype, expect("]"), classfield, classBody)
    if (value == "*") {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (isTS && type == "(") return pass(functiondecl, classBody)
    if (type == ";" || type == ",") return cont(classBody);
    if (type == "}") return cont();
    if (value == "@") return cont(expression, classBody)
  }
  function classfield(type, value) {
    if (value == "?") return cont(classfield)
    if (type == ":") return cont(typeexpr, maybeAssign)
    if (value == "=") return cont(expressionNoComma)
    var context = cx.state.lexical.prev, isInterface = context && context.info == "interface"
    return pass(isInterface ? functiondecl : functiondef)
  }
  function afterExport(type, value) {
    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
    if (type == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
    return pass(statement);
  }
  function exportField(type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(expect("variable")); }
    if (type == "variable") return pass(expressionNoComma, exportField);
  }
  function afterImport(type) {
    if (type == "string") return cont();
    if (type == "(") return pass(expression);
    return pass(importSpec, maybeMoreImports, maybeFrom);
  }
  function importSpec(type, value) {
    if (type == "{") return contCommasep(importSpec, "}");
    if (type == "variable") register(value);
    if (value == "*") cx.marked = "keyword";
    return cont(maybeAs);
  }
  function maybeMoreImports(type) {
    if (type == ",") return cont(importSpec, maybeMoreImports)
  }
  function maybeAs(_type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
  }
  function maybeFrom(_type, value) {
    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
  }
  function arrayLiteral(type) {
    if (type == "]") return cont();
    return pass(commasep(expressionNoComma, "]"));
  }
  function enumdef() {
    return pass(pushlex("form"), pattern, expect("{"), pushlex("}"), commasep(enummember, "}"), poplex, poplex)
  }
  function enummember() {
    return pass(pattern, maybeAssign);
  }

  function isContinuedStatement(state, textAfter) {
    return state.lastType == "operator" || state.lastType == "," ||
      isOperatorChar.test(textAfter.charAt(0)) ||
      /[,.]/.test(textAfter.charAt(0));
  }

  function expressionAllowed(stream, state, backUp) {
    return state.tokenize == tokenBase &&
      /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
      (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
  }

  // Interface

  return {
    startState: function(basecolumn) {
      var state = {
        tokenize: tokenBase,
        lastType: "sof",
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: parserConfig.localVars,
        context: parserConfig.localVars && new Context(null, null, false),
        indented: basecolumn || 0
      };
      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
        state.globalVars = parserConfig.globalVars;
      return state;
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
        findFatArrow(stream, state);
      }
      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize == tokenComment) return CodeMirror.Pass;
      if (state.tokenize != tokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top
      // Kludge to prevent 'maybelse' from blocking lexical scope pops
      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
        var c = state.cc[i];
        if (c == poplex) lexical = lexical.prev;
        else if (c != maybeelse) break;
      }
      while ((lexical.type == "stat" || lexical.type == "form") &&
             (firstChar == "}" || ((top = state.cc[state.cc.length - 1]) &&
                                   (top == maybeoperatorComma || top == maybeoperatorNoComma) &&
                                   !/^[,\.=+\-*:?[\(]/.test(textAfter))))
        lexical = lexical.prev;
      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
        lexical = lexical.prev;
      var type = lexical.type, closing = firstChar == type;

      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info.length + 1 : 0);
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "form") return lexical.indented + indentUnit;
      else if (type == "stat")
        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: jsonMode ? null : "/*",
    blockCommentEnd: jsonMode ? null : "*/",
    blockCommentContinue: jsonMode ? null : " * ",
    lineComment: jsonMode ? null : "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``",

    helperType: jsonMode ? "json" : "javascript",
    jsonldMode: jsonldMode,
    jsonMode: jsonMode,

    expressionAllowed: expressionAllowed,

    skipExpression: function(state) {
      var top = state.cc[state.cc.length - 1]
      if (top == expression || top == expressionNoComma) state.cc.pop()
    }
  };
});

CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("text/ecmascript", "javascript");
CodeMirror.defineMIME("application/javascript", "javascript");
CodeMirror.defineMIME("application/x-javascript", "javascript");
CodeMirror.defineMIME("application/ecmascript", "javascript");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode('shell', function() {

  var words = {};
  function define(style, dict) {
    for(var i = 0; i < dict.length; i++) {
      words[dict[i]] = style;
    }
  };

  var commonAtoms = ["true", "false"];
  var commonKeywords = ["if", "then", "do", "else", "elif", "while", "until", "for", "in", "esac", "fi",
    "fin", "fil", "done", "exit", "set", "unset", "export", "function"];
  var commonCommands = ["ab", "awk", "bash", "beep", "cat", "cc", "cd", "chown", "chmod", "chroot", "clear",
    "cp", "curl", "cut", "diff", "echo", "find", "gawk", "gcc", "get", "git", "grep", "hg", "kill", "killall",
    "ln", "ls", "make", "mkdir", "openssl", "mv", "nc", "nl", "node", "npm", "ping", "ps", "restart", "rm",
    "rmdir", "sed", "service", "sh", "shopt", "shred", "source", "sort", "sleep", "ssh", "start", "stop",
    "su", "sudo", "svn", "tee", "telnet", "top", "touch", "vi", "vim", "wall", "wc", "wget", "who", "write",
    "yes", "zsh"];

  CodeMirror.registerHelper("hintWords", "shell", commonAtoms.concat(commonKeywords, commonCommands));

  define('atom', commonAtoms);
  define('keyword', commonKeywords);
  define('builtin', commonCommands);

  function tokenBase(stream, state) {
    if (stream.eatSpace()) return null;

    var sol = stream.sol();
    var ch = stream.next();

    if (ch === '\\') {
      stream.next();
      return null;
    }
    if (ch === '\'' || ch === '"' || ch === '`') {
      state.tokens.unshift(tokenString(ch, ch === "`" ? "quote" : "string"));
      return tokenize(stream, state);
    }
    if (ch === '#') {
      if (sol && stream.eat('!')) {
        stream.skipToEnd();
        return 'meta'; // 'comment'?
      }
      stream.skipToEnd();
      return 'comment';
    }
    if (ch === '$') {
      state.tokens.unshift(tokenDollar);
      return tokenize(stream, state);
    }
    if (ch === '+' || ch === '=') {
      return 'operator';
    }
    if (ch === '-') {
      stream.eat('-');
      stream.eatWhile(/\w/);
      return 'attribute';
    }
    if (/\d/.test(ch)) {
      stream.eatWhile(/\d/);
      if(stream.eol() || !/\w/.test(stream.peek())) {
        return 'number';
      }
    }
    stream.eatWhile(/[\w-]/);
    var cur = stream.current();
    if (stream.peek() === '=' && /\w+/.test(cur)) return 'def';
    return words.hasOwnProperty(cur) ? words[cur] : null;
  }

  function tokenString(quote, style) {
    var close = quote == "(" ? ")" : quote == "{" ? "}" : quote
    return function(stream, state) {
      var next, escaped = false;
      while ((next = stream.next()) != null) {
        if (next === close && !escaped) {
          state.tokens.shift();
          break;
        } else if (next === '$' && !escaped && quote !== "'" && stream.peek() != close) {
          escaped = true;
          stream.backUp(1);
          state.tokens.unshift(tokenDollar);
          break;
        } else if (!escaped && quote !== close && next === quote) {
          state.tokens.unshift(tokenString(quote, style))
          return tokenize(stream, state)
        } else if (!escaped && /['"]/.test(next) && !/['"]/.test(quote)) {
          state.tokens.unshift(tokenStringStart(next, "string"));
          stream.backUp(1);
          break;
        }
        escaped = !escaped && next === '\\';
      }
      return style;
    };
  };

  function tokenStringStart(quote, style) {
    return function(stream, state) {
      state.tokens[0] = tokenString(quote, style)
      stream.next()
      return tokenize(stream, state)
    }
  }

  var tokenDollar = function(stream, state) {
    if (state.tokens.length > 1) stream.eat('$');
    var ch = stream.next()
    if (/['"({]/.test(ch)) {
      state.tokens[0] = tokenString(ch, ch == "(" ? "quote" : ch == "{" ? "def" : "string");
      return tokenize(stream, state);
    }
    if (!/\d/.test(ch)) stream.eatWhile(/\w/);
    state.tokens.shift();
    return 'def';
  };

  function tokenize(stream, state) {
    return (state.tokens[0] || tokenBase) (stream, state);
  };

  return {
    startState: function() {return {tokens:[]};},
    token: function(stream, state) {
      return tokenize(stream, state);
    },
    closeBrackets: "()[]{}''\"\"``",
    lineComment: '#',
    fold: "brace"
  };
});

CodeMirror.defineMIME('text/x-sh', 'shell');
// Apache uses a slightly different Media Type for Shell scripts
// http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types
CodeMirror.defineMIME('application/x-sh', 'shell');

});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"))
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod)
  else // Plain browser env
    mod(CodeMirror)
})(function(CodeMirror) {
  "use strict"

  CodeMirror.defineOption("autoRefresh", false, function(cm, val) {
    if (cm.state.autoRefresh) {
      stopListening(cm, cm.state.autoRefresh)
      cm.state.autoRefresh = null
    }
    if (val && cm.display.wrapper.offsetHeight == 0)
      startListening(cm, cm.state.autoRefresh = {delay: val.delay || 250})
  })

  function startListening(cm, state) {
    function check() {
      if (cm.display.wrapper.offsetHeight) {
        stopListening(cm, state)
        if (cm.display.lastWrapHeight != cm.display.wrapper.clientHeight)
          cm.refresh()
      } else {
        state.timeout = setTimeout(check, state.delay)
      }
    }
    state.timeout = setTimeout(check, state.delay)
    state.hurry = function() {
      clearTimeout(state.timeout)
      state.timeout = setTimeout(check, 50)
    }
    CodeMirror.on(window, "mouseup", state.hurry)
    CodeMirror.on(window, "keyup", state.hurry)
  }

  function stopListening(_cm, state) {
    clearTimeout(state.timeout)
    CodeMirror.off(window, "mouseup", state.hurry)
    CodeMirror.off(window, "keyup", state.hurry)
  }
});

/* axios v0.19.2 | (c) 2020 by Matt Zabriskie */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){var t=new s(e),n=i(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(2),i=n(3),s=n(4),a=n(22),u=n(10),c=r(u);c.Axios=s,c.create=function(e){return r(a(c.defaults,e))},c.Cancel=n(23),c.CancelToken=n(24),c.isCancel=n(9),c.all=function(e){return Promise.all(e)},c.spread=n(25),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";function r(e){return"[object Array]"===j.call(e)}function o(e){return"undefined"==typeof e}function i(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function s(e){return"[object ArrayBuffer]"===j.call(e)}function a(e){return"undefined"!=typeof FormData&&e instanceof FormData}function u(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function c(e){return"string"==typeof e}function f(e){return"number"==typeof e}function p(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===j.call(e)}function l(e){return"[object File]"===j.call(e)}function h(e){return"[object Blob]"===j.call(e)}function m(e){return"[object Function]"===j.call(e)}function y(e){return p(e)&&m(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(e,t){if(null!==e&&"undefined"!=typeof e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function b(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=b(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function E(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=E(t[n],e):"object"==typeof e?t[n]=E({},e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function S(e,t,n){return w(t,function(t,r){n&&"function"==typeof t?e[r]=C(t,n):e[r]=t}),e}var C=n(3),j=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:s,isBuffer:i,isFormData:a,isArrayBufferView:u,isString:c,isNumber:f,isObject:p,isUndefined:o,isDate:d,isFile:l,isBlob:h,isFunction:m,isStream:y,isURLSearchParams:g,isStandardBrowserEnv:x,forEach:w,merge:b,deepMerge:E,extend:S,trim:v}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(2),i=n(5),s=n(6),a=n(7),u=n(22);r.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=u(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},r.prototype.getUri=function(e){return e=u(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),i=s.join("&")}if(i){var a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(2),i=n(8),s=n(9),a=n(10);e.exports=function(e){r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||a.adapter;return t(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(12):"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)&&(e=n(12)),e}var i=n(2),s=n(11),a={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:o(),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){u.headers[e]={}}),i.forEach(["post","put","patch"],function(e){u.headers[e]=i.merge(a)}),e.exports=u},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(2),o=n(13),i=n(5),s=n(16),a=n(19),u=n(20),c=n(14);e.exports=function(e){return new Promise(function(t,f){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";d.Authorization="Basic "+btoa(h+":"+m)}var y=s(e.baseURL,e.url);if(l.open(e.method.toUpperCase(),i(y,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?l.response:l.responseText,i={data:r,status:l.status,statusText:l.statusText,headers:n,config:e,request:l};o(t,f,i),l=null}},l.onabort=function(){l&&(f(c("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){f(c("Network Error",e,null,l)),l=null},l.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(c(t,e,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var g=n(21),v=(e.withCredentials||u(y))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;v&&(d[e.xsrfHeaderName]=v)}if("setRequestHeader"in l&&r.forEach(d,function(e,t){"undefined"==typeof p&&"content-type"===t.toLowerCase()?delete d[t]:l.setRequestHeader(t,e)}),r.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),f(e),l=null)}),void 0===p&&(p=null),l.send(p)})}},function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";var r=n(15);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},function(e,t){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(17),o=n(18);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(2),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;"set-cookie"===t?s[t]=(s[t]?s[t]:[]).concat([n]):s[t]=s[t]?s[t]+", "+n:n}}),s):s}},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,function(e){"undefined"!=typeof t[e]&&(n[e]=t[e])}),r.forEach(i,function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!=typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!=typeof e[o]&&(n[o]=e[o])}),r.forEach(s,function(r){"undefined"!=typeof t[r]?n[r]=t[r]:"undefined"!=typeof e[r]&&(n[r]=e[r])});var a=o.concat(i).concat(s),u=Object.keys(t).filter(function(e){return a.indexOf(e)===-1});return r.forEach(u,function(r){"undefined"!=typeof t[r]?n[r]=t[r]:"undefined"!=typeof e[r]&&(n[r]=e[r])}),n}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(23);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}])});
//# sourceMappingURL=axios.min.map
(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?module.exports=factory():typeof define==="function"&&define.amd?define(factory):(global=global||self,global.Mustache=factory())})(this,function(){"use strict";var objectToString=Object.prototype.toString;var isArray=Array.isArray||function isArrayPolyfill(object){return objectToString.call(object)==="[object Array]"};function isFunction(object){return typeof object==="function"}function typeStr(obj){return isArray(obj)?"array":typeof obj}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hasProperty(obj,propName){return obj!=null&&typeof obj==="object"&&propName in obj}function primitiveHasOwnProperty(primitive,propName){return primitive!=null&&typeof primitive!=="object"&&primitive.hasOwnProperty&&primitive.hasOwnProperty(propName)}var regExpTest=RegExp.prototype.test;function testRegExp(re,string){return regExpTest.call(re,string)}var nonSpaceRe=/\S/;function isWhitespace(string){return!testRegExp(nonSpaceRe,string)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(string){return String(string).replace(/[&<>"'`=\/]/g,function fromEntityMap(s){return entityMap[s]})}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){if(!template)return[];var lineHasNonSpace=false;var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;var indentation="";var tagIndex=0;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length)delete tokens[spaces.pop()]}else{spaces=[]}hasTag=false;nonSpace=false}var openingTagRe,closingTagRe,closingCurlyRe;function compileTags(tagsToCompile){if(typeof tagsToCompile==="string")tagsToCompile=tagsToCompile.split(spaceRe,2);if(!isArray(tagsToCompile)||tagsToCompile.length!==2)throw new Error("Invalid tags: "+tagsToCompile);openingTagRe=new RegExp(escapeRegExp(tagsToCompile[0])+"\\s*");closingTagRe=new RegExp("\\s*"+escapeRegExp(tagsToCompile[1]));closingCurlyRe=new RegExp("\\s*"+escapeRegExp("}"+tagsToCompile[1]))}compileTags(tags||mustache.tags);var scanner=new Scanner(template);var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(openingTagRe);if(value){for(var i=0,valueLength=value.length;i<valueLength;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length);indentation+=chr}else{nonSpace=true;lineHasNonSpace=true;indentation+=" "}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n"){stripSpace();indentation="";tagIndex=0;lineHasNonSpace=false}}}if(!scanner.scan(openingTagRe))break;hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe)}else if(type==="{"){value=scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type="&"}else{value=scanner.scanUntil(closingTagRe)}if(!scanner.scan(closingTagRe))throw new Error("Unclosed tag at "+scanner.pos);if(type==">"){token=[type,value,start,scanner.pos,indentation,tagIndex,lineHasNonSpace]}else{token=[type,value,start,scanner.pos]}tagIndex++;tokens.push(token);if(type==="#"||type==="^"){sections.push(token)}else if(type==="/"){openSection=sections.pop();if(!openSection)throw new Error('Unopened section "'+value+'" at '+start);if(openSection[1]!==value)throw new Error('Unclosed section "'+openSection[1]+'" at '+start)}else if(type==="name"||type==="{"||type==="&"){nonSpace=true}else if(type==="="){compileTags(value)}}stripSpace();openSection=sections.pop();if(openSection)throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);return nestTokens(squashTokens(tokens))}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3]}else{squashedTokens.push(token);lastToken=token}}}return squashedTokens}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token)}}return nestedTokens}function Scanner(string){this.string=string;this.tail=string;this.pos=0}Scanner.prototype.eos=function eos(){return this.tail===""};Scanner.prototype.scan=function scan(re){var match=this.tail.match(re);if(!match||match.index!==0)return"";var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string};Scanner.prototype.scanUntil=function scanUntil(re){var index=this.tail.search(re),match;switch(index){case-1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index)}this.pos+=match.length;return match};function Context(view,parentContext){this.view=view;this.cache={".":this.view};this.parent=parentContext}Context.prototype.push=function push(view){return new Context(view,this)};Context.prototype.lookup=function lookup(name){var cache=this.cache;var value;if(cache.hasOwnProperty(name)){value=cache[name]}else{var context=this,intermediateValue,names,index,lookupHit=false;while(context){if(name.indexOf(".")>0){intermediateValue=context.view;names=name.split(".");index=0;while(intermediateValue!=null&&index<names.length){if(index===names.length-1)lookupHit=hasProperty(intermediateValue,names[index])||primitiveHasOwnProperty(intermediateValue,names[index]);intermediateValue=intermediateValue[names[index++]]}}else{intermediateValue=context.view[name];lookupHit=hasProperty(context.view,name)}if(lookupHit){value=intermediateValue;break}context=context.parent}cache[name]=value}if(isFunction(value))value=value.call(this.view);return value};function Writer(){this.templateCache={_cache:{},set:function set(key,value){this._cache[key]=value},get:function get(key){return this._cache[key]},clear:function clear(){this._cache={}}}}Writer.prototype.clearCache=function clearCache(){if(typeof this.templateCache!=="undefined"){this.templateCache.clear()}};Writer.prototype.parse=function parse(template,tags){var cache=this.templateCache;var cacheKey=template+":"+(tags||mustache.tags).join(":");var isCacheEnabled=typeof cache!=="undefined";var tokens=isCacheEnabled?cache.get(cacheKey):undefined;if(tokens==undefined){tokens=parseTemplate(template,tags);isCacheEnabled&&cache.set(cacheKey,tokens)}return tokens};Writer.prototype.render=function render(template,view,partials,tags){var tokens=this.parse(template,tags);var context=view instanceof Context?view:new Context(view,undefined);return this.renderTokens(tokens,context,partials,template,tags)};Writer.prototype.renderTokens=function renderTokens(tokens,context,partials,originalTemplate,tags){var buffer="";var token,symbol,value;for(var i=0,numTokens=tokens.length;i<numTokens;++i){value=undefined;token=tokens[i];symbol=token[0];if(symbol==="#")value=this.renderSection(token,context,partials,originalTemplate);else if(symbol==="^")value=this.renderInverted(token,context,partials,originalTemplate);else if(symbol===">")value=this.renderPartial(token,context,partials,tags);else if(symbol==="&")value=this.unescapedValue(token,context);else if(symbol==="name")value=this.escapedValue(token,context);else if(symbol==="text")value=this.rawValue(token);if(value!==undefined)buffer+=value}return buffer};Writer.prototype.renderSection=function renderSection(token,context,partials,originalTemplate){var self=this;var buffer="";var value=context.lookup(token[1]);function subRender(template){return self.render(template,context,partials)}if(!value)return;if(isArray(value)){for(var j=0,valueLength=value.length;j<valueLength;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate)}}else if(typeof value==="object"||typeof value==="string"||typeof value==="number"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate)}else if(isFunction(value)){if(typeof originalTemplate!=="string")throw new Error("Cannot use higher-order sections without the original template");value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null)buffer+=value}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate)}return buffer};Writer.prototype.renderInverted=function renderInverted(token,context,partials,originalTemplate){var value=context.lookup(token[1]);if(!value||isArray(value)&&value.length===0)return this.renderTokens(token[4],context,partials,originalTemplate)};Writer.prototype.indentPartial=function indentPartial(partial,indentation,lineHasNonSpace){var filteredIndentation=indentation.replace(/[^ \t]/g,"");var partialByNl=partial.split("\n");for(var i=0;i<partialByNl.length;i++){if(partialByNl[i].length&&(i>0||!lineHasNonSpace)){partialByNl[i]=filteredIndentation+partialByNl[i]}}return partialByNl.join("\n")};Writer.prototype.renderPartial=function renderPartial(token,context,partials,tags){if(!partials)return;var value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null){var lineHasNonSpace=token[6];var tagIndex=token[5];var indentation=token[4];var indentedValue=value;if(tagIndex==0&&indentation){indentedValue=this.indentPartial(value,indentation,lineHasNonSpace)}return this.renderTokens(this.parse(indentedValue,tags),context,partials,indentedValue,tags)}};Writer.prototype.unescapedValue=function unescapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return value};Writer.prototype.escapedValue=function escapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return typeof value==="number"?String(value):mustache.escape(value)};Writer.prototype.rawValue=function rawValue(token){return token[1]};var mustache={name:"mustache.js",version:"4.0.1",tags:["{{","}}"],clearCache:undefined,escape:undefined,parse:undefined,render:undefined,Scanner:undefined,Context:undefined,Writer:undefined,set templateCache(cache){defaultWriter.templateCache=cache},get templateCache(){return defaultWriter.templateCache}};var defaultWriter=new Writer;mustache.clearCache=function clearCache(){return defaultWriter.clearCache()};mustache.parse=function parse(template,tags){return defaultWriter.parse(template,tags)};mustache.render=function render(template,view,partials,tags){if(typeof template!=="string"){throw new TypeError('Invalid template! Template should be a "string" '+'but "'+typeStr(template)+'" was given as the first '+"argument for mustache#render(template, view, partials)")}return defaultWriter.render(template,view,partials,tags)};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer;return mustache});

(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Dexie=t()})(this,function(){"use strict";var m=function(){return(m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function P(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],u=0,a=o.length;u<a;u++,i++)r[i]=o[u];return r}var _=Object.keys,d=Array.isArray,h="undefined"!=typeof self?self:"undefined"!=typeof window?window:global;function s(t,n){return"object"!=typeof n||_(n).forEach(function(e){t[e]=n[e]}),t}"undefined"==typeof Promise||h.Promise||(h.Promise=Promise);var i=Object.getPrototypeOf,n={}.hasOwnProperty;function c(e,t){return n.call(e,t)}function r(t,n){"function"==typeof n&&(n=n(i(t))),_(n).forEach(function(e){u(t,e,n[e])})}var o=Object.defineProperty;function u(e,t,n,r){o(e,t,s(n&&c(n,"get")&&"function"==typeof n.get?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function a(t){return{from:function(e){return t.prototype=Object.create(e.prototype),u(t.prototype,"constructor",t),{extend:r.bind(null,t.prototype)}}}}var l=Object.getOwnPropertyDescriptor;var f=[].slice;function p(e,t,n){return f.call(e,t,n)}function y(e,t){return t(e)}function v(e){if(!e)throw new Error("Assertion Failed")}function g(e){h.setImmediate?setImmediate(e):setTimeout(e,0)}function b(e,i){return e.reduce(function(e,t,n){var r=i(t,n);return r&&(e[r[0]]=r[1]),e},{})}function w(e,t){if(c(e,t))return e[t];if(!t)return e;if("string"!=typeof t){for(var n=[],r=0,i=t.length;r<i;++r){var o=w(e,t[r]);n.push(o)}return n}var u=t.indexOf(".");if(-1!==u){var a=e[t.substr(0,u)];return void 0===a?void 0:w(a,t.substr(u+1))}}function x(e,t,n){if(e&&void 0!==t&&!("isFrozen"in Object&&Object.isFrozen(e)))if("string"!=typeof t&&"length"in t){v("string"!=typeof n&&"length"in n);for(var r=0,i=t.length;r<i;++r)x(e,t[r],n[r])}else{var o,u,a=t.indexOf(".");-1!==a?(o=t.substr(0,a),""===(u=t.substr(a+1))?void 0===n?d(e)&&!isNaN(parseInt(o))?e.splice(o,1):delete e[o]:e[o]=n:x(e[o]||(e[o]={}),u,n)):void 0===n?d(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function k(e){var t={};for(var n in e)c(e,n)&&(t[n]=e[n]);return t}var t=[].concat;function E(e){return t.apply([],e)}var e="Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set".split(",").concat(E([8,16,32,64].map(function(t){return["Int","Uint","Float"].map(function(e){return e+t+"Array"})}))).filter(function(e){return h[e]}),O=e.map(function(e){return h[e]}),j=b(e,function(e){return[e,!0]});function A(e){if(!e||"object"!=typeof e)return e;var t;if(d(e)){t=[];for(var n=0,r=e.length;n<r;++n)t.push(A(e[n]))}else if(0<=O.indexOf(e.constructor))t=e;else for(var i in t=e.constructor?Object.create(e.constructor.prototype):{},e)c(e,i)&&(t[i]=A(e[i]));return t}var K={}.toString;function S(e){return K.call(e).slice(8,-1)}var C=function(e,t){return"Array"===t?""+e.map(function(e){return C(e,S(e))}):"ArrayBuffer"===t?""+new Uint8Array(e):"Date"===t?e.getTime():ArrayBuffer.isView(e)?""+new Uint8Array(e.buffer):e};function I(o,u,a,s){return a=a||{},s=s||"",_(o).forEach(function(e){var t,n,r,i;c(u,e)?(t=o[e],n=u[e],"object"==typeof t&&"object"==typeof n&&t&&n?(r=S(t))===(i=S(n))?j[r]?C(t,r)!==C(n,i)&&(a[s+e]=u[e]):I(t,n,a,s+e+"."):a[s+e]=u[e]:t!==n&&(a[s+e]=u[e])):a[s+e]=void 0}),_(u).forEach(function(e){c(o,e)||(a[s+e]=u[e])}),a}var T="undefined"!=typeof Symbol&&Symbol.iterator,B=T?function(e){var t;return null!=e&&(t=e[T])&&t.apply(e)}:function(){return null},D={};function R(e){var t,n,r,i;if(1===arguments.length){if(d(e))return e.slice();if(this===D&&"string"==typeof e)return[e];if(i=B(e)){for(n=[];!(r=i.next()).done;)n.push(r.value);return n}if(null==e)return[e];if("number"!=typeof(t=e.length))return[e];for(n=new Array(t);t--;)n[t]=e[t];return n}for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var F="undefined"!=typeof Symbol?function(e){return"AsyncFunction"===e[Symbol.toStringTag]}:function(){return!1},q="undefined"!=typeof location&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function M(e,t){q=e,N=t}var N=function(){return!0},U=!new Error("").stack;function V(){if(U)try{throw new Error}catch(e){return e}return new Error}function W(e,t){var n=e.stack;return n?(t=t||0,0===n.indexOf(e.name)&&(t+=(e.name+e.message).split("\n").length),n.split("\n").slice(t).filter(N).map(function(e){return"\n"+e}).join("")):""}var z=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],L=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(z),Y={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed"};function G(e,t){this._e=V(),this.name=e,this.message=t}function H(e,t){return e+". Errors: "+Object.keys(t).map(function(e){return t[e].toString()}).filter(function(e,t,n){return n.indexOf(e)===t}).join("\n")}function Q(e,t,n,r){this._e=V(),this.failures=t,this.failedKeys=r,this.successCount=n,this.message=H(e,t)}function X(e,t){this._e=V(),this.name="BulkError",this.failures=t,this.message=H(e,t)}a(G).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+W(this._e,2))}},toString:function(){return this.name+": "+this.message}}),a(Q).from(G),a(X).from(G);var J=L.reduce(function(e,t){return e[t]=t+"Error",e},{}),$=G,Z=L.reduce(function(e,n){var r=n+"Error";function t(e,t){this._e=V(),this.name=r,e?"string"==typeof e?(this.message=e+(t?"\n "+t:""),this.inner=t||null):"object"==typeof e&&(this.message=e.name+" "+e.message,this.inner=e):(this.message=Y[n]||r,this.inner=null)}return a(t).from($),e[n]=t,e},{});Z.Syntax=SyntaxError,Z.Type=TypeError,Z.Range=RangeError;var ee=z.reduce(function(e,t){return e[t+"Error"]=Z[t],e},{});var te=L.reduce(function(e,t){return-1===["Syntax","Type","Range"].indexOf(t)&&(e[t+"Error"]=Z[t]),e},{});function ne(){}function re(e){return e}function ie(t,n){return null==t||t===re?n:function(e){return n(t(e))}}function oe(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function ue(i,o){return i===ne?o:function(){var e=i.apply(this,arguments);void 0!==e&&(arguments[0]=e);var t=this.onsuccess,n=this.onerror;this.onsuccess=null,this.onerror=null;var r=o.apply(this,arguments);return t&&(this.onsuccess=this.onsuccess?oe(t,this.onsuccess):t),n&&(this.onerror=this.onerror?oe(n,this.onerror):n),void 0!==r?r:e}}function ae(n,r){return n===ne?r:function(){n.apply(this,arguments);var e=this.onsuccess,t=this.onerror;this.onsuccess=this.onerror=null,r.apply(this,arguments),e&&(this.onsuccess=this.onsuccess?oe(e,this.onsuccess):e),t&&(this.onerror=this.onerror?oe(t,this.onerror):t)}}function se(o,u){return o===ne?u:function(e){var t=o.apply(this,arguments);s(e,t);var n=this.onsuccess,r=this.onerror;this.onsuccess=null,this.onerror=null;var i=u.apply(this,arguments);return n&&(this.onsuccess=this.onsuccess?oe(n,this.onsuccess):n),r&&(this.onerror=this.onerror?oe(r,this.onerror):r),void 0===t?void 0===i?void 0:i:s(t,i)}}function ce(e,t){return e===ne?t:function(){return!1!==t.apply(this,arguments)&&e.apply(this,arguments)}}function le(i,o){return i===ne?o:function(){var e=i.apply(this,arguments);if(e&&"function"==typeof e.then){for(var t=this,n=arguments.length,r=new Array(n);n--;)r[n]=arguments[n];return e.then(function(){return o.apply(t,r)})}return o.apply(this,arguments)}}te.ModifyError=Q,te.DexieError=G,te.BulkError=X;var fe={},he=100,pe=100,de="undefined"==typeof Promise?[]:function(){var e=Promise.resolve();if("undefined"==typeof crypto||!crypto.subtle)return[e,e.__proto__,e];var t=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[t,t.__proto__,e]}(),ye=de[0],ve=de[1],me=de[2],ge=ve&&ve.then,be=ye&&ye.constructor,_e=!!me,we=!1,xe=me?function(){me.then(We)}:h.setImmediate?setImmediate.bind(null,We):h.MutationObserver?function(){var e=document.createElement("div");new MutationObserver(function(){We(),e=null}).observe(e,{attributes:!0}),e.setAttribute("i","1")}:function(){setTimeout(We,0)},ke=function(e,t){Ie.push([e,t]),Oe&&(xe(),Oe=!1)},Ee=!0,Oe=!0,Pe=[],je=[],Ae=null,Ke=re,Se={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ht,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(function(e){try{ht(e[0],e[1])}catch(e){}})}},Ce=Se,Ie=[],Te=0,Be=[];function De(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=ne,this._lib=!1;var t=this._PSD=Ce;if(q&&(this._stackHolder=V(),this._prev=null,this._numPrev=0),"function"!=typeof e){if(e!==fe)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(!1===this._state&&qe(this,this._value))}this._state=null,this._value=null,++t.ref,function t(r,e){try{e(function(n){if(null===r._state){if(n===r)throw new TypeError("A promise cannot be resolved with itself.");var e=r._lib&&ze();n&&"function"==typeof n.then?t(r,function(e,t){n instanceof De?n._then(e,t):n.then(e,t)}):(r._state=!0,r._value=n,Me(r)),e&&Le()}},qe.bind(null,r))}catch(e){qe(r,e)}}(this,e)}var Re={get:function(){var u=Ce,t=Ze;function e(n,r){var i=this,o=!u.global&&(u!==Ce||t!==Ze);o&&rt();var e=new De(function(e,t){Ne(i,new Fe(ct(n,u,o),ct(r,u,o),e,t,u))});return q&&Ve(e,this),e}return e.prototype=fe,e},set:function(e){u(this,"then",e&&e.prototype===fe?Re:{get:function(){return e},set:Re.set})}};function Fe(e,t,n,r,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r,this.psd=i}function qe(t,n){var e,r;je.push(n),null===t._state&&(e=t._lib&&ze(),n=Ke(n),t._state=!1,t._value=n,q&&null!==n&&"object"==typeof n&&!n._promise&&function(e,t,n){try{e.apply(null,n)}catch(e){t&&t(e)}}(function(){var e=function e(t,n){var r;return l(t,n)||(r=i(t))&&e(r,n)}(n,"stack");n._promise=t,u(n,"stack",{get:function(){return we?e&&(e.get?e.get.apply(n):e.value):t.stack}})}),r=t,Pe.some(function(e){return e._value===r._value})||Pe.push(r),Me(t),e&&Le())}function Me(e){var t=e._listeners;e._listeners=[];for(var n=0,r=t.length;n<r;++n)Ne(e,t[n]);var i=e._PSD;--i.ref||i.finalize(),0===Te&&(++Te,ke(function(){0==--Te&&Ye()},[]))}function Ne(e,t){if(null!==e._state){var n=e._state?t.onFulfilled:t.onRejected;if(null===n)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Te,ke(Ue,[n,e,t])}else e._listeners.push(t)}function Ue(e,t,n){try{var r,i=(Ae=t)._value;t._state?r=e(i):(je.length&&(je=[]),r=e(i),-1===je.indexOf(i)&&function(e){var t=Pe.length;for(;t;)if(Pe[--t]._value===e._value)return Pe.splice(t,1)}(t)),n.resolve(r)}catch(e){n.reject(e)}finally{Ae=null,0==--Te&&Ye(),--n.psd.ref||n.psd.finalize()}}function Ve(e,t){var n=t?t._numPrev+1:0;n<he&&(e._prev=t,e._numPrev=n)}function We(){ze()&&Le()}function ze(){var e=Ee;return Oe=Ee=!1,e}function Le(){var e,t,n;do{for(;0<Ie.length;)for(e=Ie,Ie=[],n=e.length,t=0;t<n;++t){var r=e[t];r[0].apply(null,r[1])}}while(0<Ie.length);Oe=Ee=!0}function Ye(){var e=Pe;Pe=[],e.forEach(function(e){e._PSD.onunhandled.call(null,e._value,e)});for(var t=Be.slice(0),n=t.length;n;)t[--n]()}function Ge(e){return new De(fe,!1,e)}function He(n,r){var i=Ce;return function(){var e=ze(),t=Ce;try{return ut(i,!0),n.apply(this,arguments)}catch(e){r&&r(e)}finally{ut(t,!1),e&&Le()}}}r(De.prototype,{then:Re,_then:function(e,t){Ne(this,new Fe(null,null,e,t,Ce))},catch:function(e){if(1===arguments.length)return this.then(null,e);var t=e,n=arguments[1];return"function"==typeof t?this.then(null,function(e){return(e instanceof t?n:Ge)(e)}):this.then(null,function(e){return(e&&e.name===t?n:Ge)(e)})},finally:function(t){return this.then(function(e){return t(),e},function(e){return t(),Ge(e)})},stack:{get:function(){if(this._stack)return this._stack;try{we=!0;var e=function e(t,n,r){if(n.length===r)return n;var i="";{var o,u,a;!1===t._state&&(null!=(o=t._value)?(u=o.name||"Error",a=o.message||o,i=W(o,0)):(u=o,a=""),n.push(u+(a?": "+a:"")+i))}q&&((i=W(t._stackHolder,2))&&-1===n.indexOf(i)&&n.push(i),t._prev&&e(t._prev,n,r));return n}(this,[],20).join("\nFrom previous: ");return null!==this._state&&(this._stack=e),e}finally{we=!1}}},timeout:function(r,i){var o=this;return r<1/0?new De(function(e,t){var n=setTimeout(function(){return t(new Z.Timeout(i))},r);o.then(e,t).finally(clearTimeout.bind(null,n))}):this}}),"undefined"!=typeof Symbol&&Symbol.toStringTag&&u(De.prototype,Symbol.toStringTag,"Dexie.Promise"),Se.env=at(),r(De,{all:function(){var o=R.apply(null,arguments).map(it);return new De(function(n,r){0===o.length&&n([]);var i=o.length;o.forEach(function(e,t){return De.resolve(e).then(function(e){o[t]=e,--i||n(o)},r)})})},resolve:function(n){if(n instanceof De)return n;if(n&&"function"==typeof n.then)return new De(function(e,t){n.then(e,t)});var e=new De(fe,!0,n);return Ve(e,Ae),e},reject:Ge,race:function(){var e=R.apply(null,arguments).map(it);return new De(function(t,n){e.map(function(e){return De.resolve(e).then(t,n)})})},PSD:{get:function(){return Ce},set:function(e){return Ce=e}},newPSD:tt,usePSD:st,scheduler:{get:function(){return ke},set:function(e){ke=e}},rejectionMapper:{get:function(){return Ke},set:function(e){Ke=e}},follow:function(i,n){return new De(function(e,t){return tt(function(n,r){var e=Ce;e.unhandleds=[],e.onunhandled=r,e.finalize=oe(function(){var t,e=this;t=function(){0===e.unhandleds.length?n():r(e.unhandleds[0])},Be.push(function e(){t(),Be.splice(Be.indexOf(e),1)}),++Te,ke(function(){0==--Te&&Ye()},[])},e.finalize),i()},n,e,t)})}}),be&&(be.allSettled&&u(De,"allSettled",function(){var e=R.apply(null,arguments).map(it);return new De(function(n){0===e.length&&n([]);var r=e.length,i=new Array(r);e.forEach(function(e,t){return De.resolve(e).then(function(e){return i[t]={status:"fulfilled",value:e}},function(e){return i[t]={status:"rejected",reason:e}}).then(function(){return--r||n(i)})})})}),be.any&&"undefined"!=typeof AggregateError&&u(De,"any",function(){var e=R.apply(null,arguments).map(it);return new De(function(n,r){0===e.length&&r(new AggregateError([]));var i=e.length,o=new Array(i);e.forEach(function(e,t){return De.resolve(e).then(function(e){return n(e)},function(e){o[t]=e,--i||r(new AggregateError(o))})})})}));var Qe={awaits:0,echoes:0,id:0},Xe=0,Je=[],$e=0,Ze=0,et=0;function tt(e,t,n,r){var i=Ce,o=Object.create(i);o.parent=i,o.ref=0,o.global=!1,o.id=++et;var u=Se.env;o.env=_e?{Promise:De,PromiseProp:{value:De,configurable:!0,writable:!0},all:De.all,race:De.race,allSettled:De.allSettled,any:De.any,resolve:De.resolve,reject:De.reject,nthen:lt(u.nthen,o),gthen:lt(u.gthen,o)}:{},t&&s(o,t),++i.ref,o.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=st(o,e,n,r);return 0===o.ref&&o.finalize(),a}function nt(){return Qe.id||(Qe.id=++Xe),++Qe.awaits,Qe.echoes+=pe,Qe.id}function rt(e){!Qe.awaits||e&&e!==Qe.id||(0==--Qe.awaits&&(Qe.id=0),Qe.echoes=Qe.awaits*pe)}function it(e){return Qe.echoes&&e&&e.constructor===be?(nt(),e.then(function(e){return rt(),e},function(e){return rt(),pt(e)})):e}function ot(){var e=Je[Je.length-1];Je.pop(),ut(e,!1)}function ut(e,t){var n,r,i,o=Ce;(t?!Qe.echoes||$e++&&e===Ce:!$e||--$e&&e===Ce)||(n=t?function(e){++Ze,Qe.echoes&&0!=--Qe.echoes||(Qe.echoes=Qe.id=0),Je.push(Ce),ut(e,!0)}.bind(null,e):ot,ge.call(ye,n)),e!==Ce&&(Ce=e,o===Se&&(Se.env=at()),_e&&(r=Se.env.Promise,i=e.env,ve.then=i.nthen,r.prototype.then=i.gthen,(o.global||e.global)&&(Object.defineProperty(h,"Promise",i.PromiseProp),r.all=i.all,r.race=i.race,r.resolve=i.resolve,r.reject=i.reject,i.allSettled&&(r.allSettled=i.allSettled),i.any&&(r.any=i.any))))}function at(){var e=h.Promise;return _e?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(h,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject,nthen:ve.then,gthen:e.prototype.then}:{}}function st(e,t,n,r,i){var o=Ce;try{return ut(e,!0),t(n,r,i)}finally{ut(o,!1)}}function ct(t,n,r){return"function"!=typeof t?t:function(){var e=Ce;r&&nt(),ut(n,!0);try{return t.apply(this,arguments)}finally{ut(e,!1)}}}function lt(n,r){return function(e,t){return n.call(this,ct(e,r,!1),ct(t,r,!1))}}-1===(""+ge).indexOf("[native code]")&&(nt=rt=ne);var ft="unhandledrejection";function ht(e,t){var n;try{n=t.onuncatched(e)}catch(e){}if(!1!==n)try{var r,i={promise:t,reason:e};if(h.document&&document.createEvent?((r=document.createEvent("Event")).initEvent(ft,!0,!0),s(r,i)):h.CustomEvent&&s(r=new CustomEvent(ft,{detail:i}),i),r&&h.dispatchEvent&&(dispatchEvent(r),!h.PromiseRejectionEvent&&h.onunhandledrejection))try{h.onunhandledrejection(r)}catch(e){}q&&r&&!r.defaultPrevented&&console.warn("Unhandled rejection: "+(e.stack||e))}catch(e){}}var pt=De.reject;function dt(e){return!/(dexie\.js|dexie\.min\.js)/.test(e)}var yt=String.fromCharCode(65535),vt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",mt="String expected.",gt=[],bt="undefined"!=typeof navigator&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),_t=bt,wt=bt,xt="__dbnames",kt="readonly",Et="readwrite";function Ot(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var Pt={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1},jt=(At.prototype._trans=function(e,r,t){var n=this._tx||Ce.trans,i=this.name;function o(e,t,n){if(!n.schema[i])throw new Z.NotFound("Table "+i+" not part of transaction");return r(n.idbtrans,n)}var u=ze();try{return n&&n.db===this.db?n===Ce.trans?n._promise(e,o,t):tt(function(){return n._promise(e,o,t)},{trans:n,transless:Ce.transless||Ce}):function e(t,n,r,i){if(t._state.openComplete||Ce.letThrough){var o=t._createTransaction(n,r,t._dbSchema);try{o.create()}catch(e){return pt(e)}return o._promise(n,function(e,t){return tt(function(){return Ce.trans=o,i(e,t,o)})}).then(function(e){return o._completion.then(function(){return e})})}if(!t._state.isBeingOpened){if(!t._options.autoOpen)return pt(new Z.DatabaseClosed);t.open().catch(ne)}return t._state.dbReadyPromise.then(function(){return e(t,n,r,i)})}(this.db,e,[this.name],o)}finally{u&&Le()}},At.prototype.get=function(t,e){var n=this;return t&&t.constructor===Object?this.where(t).first(e):this._trans("readonly",function(e){return n.core.get({trans:e,key:t}).then(function(e){return n.hook.reading.fire(e)})}).then(e)},At.prototype.where=function(u){if("string"==typeof u)return new this.db.WhereClause(this,u);if(d(u))return new this.db.WhereClause(this,"["+u.join("+")+"]");var n=_(u);if(1===n.length)return this.where(n[0]).equals(u[n[0]]);var e=this.schema.indexes.concat(this.schema.primKey).filter(function(t){return t.compound&&n.every(function(e){return 0<=t.keyPath.indexOf(e)})&&t.keyPath.every(function(e){return 0<=n.indexOf(e)})})[0];if(e&&this.db._maxKey!==yt)return this.where(e.name).equals(e.keyPath.map(function(e){return u[e]}));!e&&q&&console.warn("The query "+JSON.stringify(u)+" on "+this.name+" would benefit of a compound index ["+n.join("+")+"]");var a=this.schema.idxByName,r=this.db._deps.indexedDB;function s(e,t){try{return 0===r.cmp(e,t)}catch(e){return!1}}var t=n.reduce(function(e,n){var t=e[0],r=e[1],i=a[n],o=u[n];return[t||i,t||!i?Ot(r,i&&i.multi?function(e){var t=w(e,n);return d(t)&&t.some(function(e){return s(o,e)})}:function(e){return s(o,w(e,n))}):r]},[null,null]),i=t[0],o=t[1];return i?this.where(i.name).equals(u[i.keyPath]).filter(o):e?this.filter(o):this.where(n).equals("")},At.prototype.filter=function(e){return this.toCollection().and(e)},At.prototype.count=function(e){return this.toCollection().count(e)},At.prototype.offset=function(e){return this.toCollection().offset(e)},At.prototype.limit=function(e){return this.toCollection().limit(e)},At.prototype.each=function(e){return this.toCollection().each(e)},At.prototype.toArray=function(e){return this.toCollection().toArray(e)},At.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},At.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,d(e)?"["+e.join("+")+"]":e))},At.prototype.reverse=function(){return this.toCollection().reverse()},At.prototype.mapToClass=function(r){function e(e){if(!e)return e;var t=Object.create(r.prototype);for(var n in e)if(c(e,n))try{t[n]=e[n]}catch(e){}return t}return this.schema.mappedClass=r,this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=e,this.hook("reading",e),r},At.prototype.defineClass=function(){return this.mapToClass(function(e){s(this,e)})},At.prototype.add=function(t,n){var r=this;return this._trans("readwrite",function(e){return r.core.mutate({trans:e,type:"add",keys:null!=n?[n]:null,values:[t]})}).then(function(e){return e.numFailures?De.reject(e.failures[0]):e.lastResult}).then(function(e){if(!r.core.schema.primaryKey.outbound)try{x(t,r.core.schema.primaryKey.keyPath,e)}catch(e){}return e})},At.prototype.update=function(t,n){if("object"!=typeof n||d(n))throw new Z.InvalidArgument("Modifications must be an object.");if("object"!=typeof t||d(t))return this.where(":id").equals(t).modify(n);_(n).forEach(function(e){x(t,e,n[e])});var e=w(t,this.schema.primKey.keyPath);return void 0===e?pt(new Z.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(n)},At.prototype.put=function(t,n){var r=this;return this._trans("readwrite",function(e){return r.core.mutate({trans:e,type:"put",values:[t],keys:null!=n?[n]:null})}).then(function(e){return e.numFailures?De.reject(e.failures[0]):e.lastResult}).then(function(e){if(!r.core.schema.primaryKey.outbound)try{x(t,r.core.schema.primaryKey.keyPath,e)}catch(e){}return e})},At.prototype.delete=function(t){var n=this;return this._trans("readwrite",function(e){return n.core.mutate({trans:e,type:"delete",keys:[t]})}).then(function(e){return e.numFailures?De.reject(e.failures[0]):void 0})},At.prototype.clear=function(){var t=this;return this._trans("readwrite",function(e){return t.core.mutate({trans:e,type:"deleteRange",range:Pt})}).then(function(e){return e.numFailures?De.reject(e.failures[0]):void 0})},At.prototype.bulkGet=function(t){var n=this;return this._trans("readonly",function(e){return n.core.getMany({keys:t,trans:e})})},At.prototype.bulkAdd=function(t,e,n){var u=this,r=Array.isArray(e)?e:void 0,a=(n=n||(r?void 0:e))?n.allKeys:void 0;return this._trans("readwrite",function(e){if(!u.core.schema.primaryKey.outbound&&r)throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==t.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var o=t.length;return u.core.mutate({trans:e,type:"add",keys:r,values:t,wantResults:a}).then(function(e){var t=e.numFailures,n=e.results,r=e.lastResult,i=e.failures;if(0===t)return a?n:r;throw new X(u.name+".bulkAdd(): "+t+" of "+o+" operations failed",Object.keys(i).map(function(e){return i[e]}))})})},At.prototype.bulkPut=function(t,e,n){var u=this,r=Array.isArray(e)?e:void 0,a=(n=n||(r?void 0:e))?n.allKeys:void 0;return this._trans("readwrite",function(e){if(!u.core.schema.primaryKey.outbound&&r)throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==t.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var o=t.length;return u.core.mutate({trans:e,type:"put",keys:r,values:t,wantResults:a}).then(function(e){var t=e.numFailures,n=e.results,r=e.lastResult,i=e.failures;if(0===t)return a?n:r;throw new X(u.name+".bulkPut(): "+t+" of "+o+" operations failed",Object.keys(i).map(function(e){return i[e]}))})})},At.prototype.bulkDelete=function(t){var i=this,o=t.length;return this._trans("readwrite",function(e){return i.core.mutate({trans:e,type:"delete",keys:t})}).then(function(e){var t=e.numFailures,n=e.lastResult,r=e.failures;if(0===t)return n;throw new X(i.name+".bulkDelete(): "+t+" of "+o+" operations failed",r)})},At);function At(){}function Kt(i){var u={},t=function(e,t){if(t){for(var n=arguments.length,r=new Array(n-1);--n;)r[n-1]=arguments[n];return u[e].subscribe.apply(null,r),i}if("string"==typeof e)return u[e]};t.addEventType=a;for(var e=1,n=arguments.length;e<n;++e)a(arguments[e]);return t;function a(e,n,r){if("object"!=typeof e){var i;n=n||ce;var o={subscribers:[],fire:r=r||ne,subscribe:function(e){-1===o.subscribers.indexOf(e)&&(o.subscribers.push(e),o.fire=n(o.fire,e))},unsubscribe:function(t){o.subscribers=o.subscribers.filter(function(e){return e!==t}),o.fire=o.subscribers.reduce(n,r)}};return u[e]=t[e]=o,o}_(i=e).forEach(function(e){var t=i[e];if(d(t))a(e,i[e][0],i[e][1]);else{if("asap"!==t)throw new Z.InvalidArgument("Invalid event config");var n=a(e,re,function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];n.subscribers.forEach(function(e){g(function(){e.apply(null,t)})})})}})}}function St(e,t){return a(t).from({prototype:e}),t}function Ct(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function It(e,t){e.filter=Ot(e.filter,t)}function Tt(e,t,n){var r=e.replayFilter;e.replayFilter=r?function(){return Ot(r(),t())}:t,e.justLimit=n&&!r}function Bt(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(!n)throw new Z.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed");return n}function Dt(e,t,n){var r=Bt(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:"prev"===e.dir,unique:!!e.unique,query:{index:r,range:e.range}})}function Rt(e,o,t,n){var u=e.replayFilter?Ot(e.filter,e.replayFilter()):e.filter;if(e.or){var a={},r=function(e,t,n){var r,i;u&&!u(t,n,function(e){return t.stop(e)},function(e){return t.fail(e)})||("[object ArrayBuffer]"===(i=""+(r=t.primaryKey))&&(i=""+new Uint8Array(r)),c(a,i)||(a[i]=!0,o(e,t,n)))};return Promise.all([e.or._iterate(r,t),Ft(Dt(e,n,t),e.algorithm,r,!e.keysOnly&&e.valueMapper)])}return Ft(Dt(e,n,t),Ot(e.algorithm,u),o,!e.keysOnly&&e.valueMapper)}function Ft(e,r,i,o){var u=He(o?function(e,t,n){return i(o(e),t,n)}:i);return e.then(function(n){if(n)return n.start(function(){var t=function(){return n.continue()};r&&!r(n,function(e){return t=e},function(e){n.stop(e),t=ne},function(e){n.fail(e),t=ne})||u(n.value,n,function(e){return t=e}),t()})})}var qt=(Mt.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,pt.bind(null,n.error)):n.table._trans("readonly",e).then(t)},Mt.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,pt.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},Mt.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=Ot(t.algorithm,e)},Mt.prototype._iterate=function(e,t){return Rt(this._ctx,e,t,this._ctx.table.core)},Mt.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&s(n,e),t._ctx=n,t},Mt.prototype.raw=function(){return this._ctx.valueMapper=null,this},Mt.prototype.each=function(t){var n=this._ctx;return this._read(function(e){return Rt(n,t,e,n.table.core)})},Mt.prototype.count=function(e){var i=this;return this._read(function(e){var t=i._ctx,n=t.table.core;if(Ct(t,!0))return n.count({trans:e,query:{index:Bt(t,n.schema),range:t.range}}).then(function(e){return Math.min(e,t.limit)});var r=0;return Rt(t,function(){return++r,!1},e,n).then(function(){return r})}).then(e)},Mt.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),r=n[0],i=n.length-1;function o(e,t){return t?o(e[n[t]],t-1):e[r]}var u="next"===this._ctx.dir?1:-1;function a(e,t){var n=o(e,i),r=o(t,i);return n<r?-u:r<n?u:0}return this.toArray(function(e){return e.sort(a)}).then(t)},Mt.prototype.toArray=function(e){var o=this;return this._read(function(e){var t=o._ctx;if("next"===t.dir&&Ct(t,!0)&&0<t.limit){var n=t.valueMapper,r=Bt(t,t.table.core.schema);return t.table.core.query({trans:e,limit:t.limit,values:!0,query:{index:r,range:t.range}}).then(function(e){var t=e.result;return n?t.map(n):t})}var i=[];return Rt(t,function(e){return i.push(e)},e,t.table.core).then(function(){return i})},e)},Mt.prototype.offset=function(t){var e=this._ctx;return t<=0||(e.offset+=t,Ct(e)?Tt(e,function(){var n=t;return function(e,t){return 0===n||(1===n?--n:t(function(){e.advance(n),n=0}),!1)}}):Tt(e,function(){var e=t;return function(){return--e<0}})),this},Mt.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Tt(this._ctx,function(){var r=e;return function(e,t,n){return--r<=0&&t(n),0<=r}},!0),this},Mt.prototype.until=function(r,i){return It(this._ctx,function(e,t,n){return!r(e.value)||(t(n),i)}),this},Mt.prototype.first=function(e){return this.limit(1).toArray(function(e){return e[0]}).then(e)},Mt.prototype.last=function(e){return this.reverse().first(e)},Mt.prototype.filter=function(t){var e,n;return It(this._ctx,function(e){return t(e.value)}),e=this._ctx,n=t,e.isMatch=Ot(e.isMatch,n),this},Mt.prototype.and=function(e){return this.filter(e)},Mt.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},Mt.prototype.reverse=function(){return this._ctx.dir="prev"===this._ctx.dir?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Mt.prototype.desc=function(){return this.reverse()},Mt.prototype.eachKey=function(n){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(e,t){n(t.key,t)})},Mt.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},Mt.prototype.eachPrimaryKey=function(n){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(e,t){n(t.primaryKey,t)})},Mt.prototype.keys=function(e){var t=this._ctx;t.keysOnly=!t.isMatch;var n=[];return this.each(function(e,t){n.push(t.key)}).then(function(){return n}).then(e)},Mt.prototype.primaryKeys=function(e){var n=this._ctx;if("next"===n.dir&&Ct(n,!0)&&0<n.limit)return this._read(function(e){var t=Bt(n,n.table.core.schema);return n.table.core.query({trans:e,values:!1,limit:n.limit,query:{index:t,range:n.range}})}).then(function(e){return e.result}).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(e,t){r.push(t.primaryKey)}).then(function(){return r}).then(e)},Mt.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},Mt.prototype.firstKey=function(e){return this.limit(1).keys(function(e){return e[0]}).then(e)},Mt.prototype.lastKey=function(e){return this.reverse().firstKey(e)},Mt.prototype.distinct=function(){var e=this._ctx,t=e.index&&e.table.schema.idxByName[e.index];if(!t||!t.multi)return this;var r={};return It(this._ctx,function(e){var t=e.primaryKey.toString(),n=c(r,t);return r[t]=!0,!n}),this},Mt.prototype.modify=function(c){var n=this,r=this._ctx;return this._write(function(h){var o,u,p;function d(e,t){var n=t.failures,r=t.numFailures;s+=e-r;for(var i=0,o=_(n);i<o.length;i++){var u=o[i];a.push(n[u])}}p="function"==typeof c?c:(o=_(c),u=o.length,function(e){for(var t=!1,n=0;n<u;++n){var r=o[n],i=c[r];w(e,r)!==i&&(x(e,r,i),t=!0)}return t});var y=r.table.core,e=y.schema.primaryKey,v=e.outbound,m=e.extractKey,g="testmode"in Cn?1:2e3,b=n.db.core.cmp,a=[],s=0,t=[];return n.clone().primaryKeys().then(function(l){var f=function(s){var c=Math.min(g,l.length-s);return y.getMany({trans:h,keys:l.slice(s,s+c)}).then(function(e){for(var n=[],t=[],r=v?[]:null,i=[],o=0;o<c;++o){var u=e[o],a={value:A(u),primKey:l[s+o]};!1!==p.call(a,a.value,a)&&(null==a.value?i.push(l[s+o]):v||0===b(m(u),m(a.value))?(t.push(a.value),v&&r.push(l[s+o])):(i.push(l[s+o]),n.push(a.value)))}return Promise.resolve(0<n.length&&y.mutate({trans:h,type:"add",values:n}).then(function(e){for(var t in e.failures)i.splice(parseInt(t),1);d(n.length,e)})).then(function(e){return 0<t.length&&y.mutate({trans:h,type:"put",keys:r,values:t}).then(function(e){return d(t.length,e)})}).then(function(){return 0<i.length&&y.mutate({trans:h,type:"delete",keys:i}).then(function(e){return d(i.length,e)})}).then(function(){return l.length>s+c&&f(s+g)})})};return f(0).then(function(){if(0<a.length)throw new Q("Error modifying one or more objects",a,s,t);return l.length})})})},Mt.prototype.delete=function(){var i=this._ctx,r=i.range;return Ct(i)&&(i.isPrimKey&&!wt||3===r.type)?this._write(function(e){var t=i.table.core.schema.primaryKey,n=r;return i.table.core.count({trans:e,query:{index:t,range:n}}).then(function(r){return i.table.core.mutate({trans:e,type:"deleteRange",range:n}).then(function(e){var t=e.failures,n=(e.lastResult,e.results,e.numFailures);if(n)throw new Q("Could not delete some values",Object.keys(t).map(function(e){return t[e]}),r-n);return r-n})})}):this.modify(function(e,t){return t.value=null})},Mt);function Mt(){}function Nt(e,t){return e<t?-1:e===t?0:1}function Ut(e,t){return t<e?-1:e===t?0:1}function Vt(e,t,n){var r=e instanceof Ht?new e.Collection(e):e;return r._ctx.error=new(n||TypeError)(t),r}function Wt(e){return new e.Collection(e,function(){return Gt("")}).limit(0)}function zt(e,t,n,r,i,o){for(var u=Math.min(e.length,r.length),a=-1,s=0;s<u;++s){var c=t[s];if(c!==r[s])return i(e[s],n[s])<0?e.substr(0,s)+n[s]+n.substr(s+1):i(e[s],r[s])<0?e.substr(0,s)+r[s]+n.substr(s+1):0<=a?e.substr(0,a)+t[a]+n.substr(a+1):null;i(e[s],c)<0&&(a=s)}return u<r.length&&"next"===o?e+n.substr(e.length):u<e.length&&"prev"===o?e.substr(0,n.length):a<0?null:e.substr(0,a)+r[a]+n.substr(a+1)}function Lt(e,s,n,r){var i,c,l,f,h,p,d,y=n.length;if(!n.every(function(e){return"string"==typeof e}))return Vt(e,mt);function t(e){i="next"===e?function(e){return e.toUpperCase()}:function(e){return e.toLowerCase()},c="next"===e?function(e){return e.toLowerCase()}:function(e){return e.toUpperCase()},l="next"===e?Nt:Ut;var t=n.map(function(e){return{lower:c(e),upper:i(e)}}).sort(function(e,t){return l(e.lower,t.lower)});f=t.map(function(e){return e.upper}),h=t.map(function(e){return e.lower}),d="next"===(p=e)?"":r}t("next");var o=new e.Collection(e,function(){return Yt(f[0],h[y-1]+r)});o._ondirectionchange=function(e){t(e)};var v=0;return o._addAlgorithm(function(e,t,n){var r=e.key;if("string"!=typeof r)return!1;var i=c(r);if(s(i,h,v))return!0;for(var o=null,u=v;u<y;++u){var a=zt(r,i,f[u],h[u],l,p);null===a&&null===o?v=u+1:(null===o||0<l(o,a))&&(o=a)}return t(null!==o?function(){e.continue(o+d)}:n),!1}),o}function Yt(e,t,n,r){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:r}}function Gt(e){return{type:1,lower:e,upper:e}}var Ht=(Object.defineProperty(Qt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!0,configurable:!0}),Qt.prototype.between=function(e,t,n,r){n=!1!==n,r=!0===r;try{return 0<this._cmp(e,t)||0===this._cmp(e,t)&&(n||r)&&(!n||!r)?Wt(this):new this.Collection(this,function(){return Yt(e,t,!n,!r)})}catch(e){return Vt(this,vt)}},Qt.prototype.equals=function(e){return new this.Collection(this,function(){return Gt(e)})},Qt.prototype.above=function(e){return null==e?Vt(this,vt):new this.Collection(this,function(){return Yt(e,void 0,!0)})},Qt.prototype.aboveOrEqual=function(e){return null==e?Vt(this,vt):new this.Collection(this,function(){return Yt(e,void 0,!1)})},Qt.prototype.below=function(e){return null==e?Vt(this,vt):new this.Collection(this,function(){return Yt(void 0,e,!1,!0)})},Qt.prototype.belowOrEqual=function(e){return null==e?Vt(this,vt):new this.Collection(this,function(){return Yt(void 0,e)})},Qt.prototype.startsWith=function(e){return"string"!=typeof e?Vt(this,mt):this.between(e,e+yt,!0,!0)},Qt.prototype.startsWithIgnoreCase=function(e){return""===e?this.startsWith(e):Lt(this,function(e,t){return 0===e.indexOf(t[0])},[e],yt)},Qt.prototype.equalsIgnoreCase=function(e){return Lt(this,function(e,t){return e===t[0]},[e],"")},Qt.prototype.anyOfIgnoreCase=function(){var e=R.apply(D,arguments);return 0===e.length?Wt(this):Lt(this,function(e,t){return-1!==t.indexOf(e)},e,"")},Qt.prototype.startsWithAnyOfIgnoreCase=function(){var e=R.apply(D,arguments);return 0===e.length?Wt(this):Lt(this,function(t,e){return e.some(function(e){return 0===t.indexOf(e)})},e,yt)},Qt.prototype.anyOf=function(){var t=this,i=R.apply(D,arguments),o=this._cmp;try{i.sort(o)}catch(e){return Vt(this,vt)}if(0===i.length)return Wt(this);var e=new this.Collection(this,function(){return Yt(i[0],i[i.length-1])});e._ondirectionchange=function(e){o="next"===e?t._ascending:t._descending,i.sort(o)};var u=0;return e._addAlgorithm(function(e,t,n){for(var r=e.key;0<o(r,i[u]);)if(++u===i.length)return t(n),!1;return 0===o(r,i[u])||(t(function(){e.continue(i[u])}),!1)}),e},Qt.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Qt.prototype.noneOf=function(){var e=R.apply(D,arguments);if(0===e.length)return new this.Collection(this);try{e.sort(this._ascending)}catch(e){return Vt(this,vt)}var t=e.reduce(function(e,t){return e?e.concat([[e[e.length-1][1],t]]):[[-1/0,t]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},Qt.prototype.inAnyRange=function(e,t){var o=this,u=this._cmp,a=this._ascending,n=this._descending,s=this._min,c=this._max;if(0===e.length)return Wt(this);if(!e.every(function(e){return void 0!==e[0]&&void 0!==e[1]&&a(e[0],e[1])<=0}))return Vt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Z.InvalidArgument);var l,r=!t||!1!==t.includeLowers,i=t&&!0===t.includeUppers,f=a;function h(e,t){return f(e[0],t[0])}try{(l=e.reduce(function(e,t){for(var n=0,r=e.length;n<r;++n){var i=e[n];if(u(t[0],i[1])<0&&0<u(t[1],i[0])){i[0]=s(i[0],t[0]),i[1]=c(i[1],t[1]);break}}return n===r&&e.push(t),e},[])).sort(h)}catch(e){return Vt(this,vt)}var p=0,d=i?function(e){return 0<a(e,l[p][1])}:function(e){return 0<=a(e,l[p][1])},y=r?function(e){return 0<n(e,l[p][0])}:function(e){return 0<=n(e,l[p][0])},v=d,m=new this.Collection(this,function(){return Yt(l[0][0],l[l.length-1][1],!r,!i)});return m._ondirectionchange=function(e){f="next"===e?(v=d,a):(v=y,n),l.sort(h)},m._addAlgorithm(function(e,t,n){for(var r,i=e.key;v(i);)if(++p===l.length)return t(n),!1;return!d(r=i)&&!y(r)||(0===o._cmp(i,l[p][1])||0===o._cmp(i,l[p][0])||t(function(){f===a?e.continue(l[p][0]):e.continue(l[p][1])}),!1)}),m},Qt.prototype.startsWithAnyOf=function(){var e=R.apply(D,arguments);return e.every(function(e){return"string"==typeof e})?0===e.length?Wt(this):this.inAnyRange(e.map(function(e){return[e,e+yt]})):Vt(this,"startsWithAnyOf() only works with strings")},Qt);function Qt(){}function Xt(e){return 1===e.length?e[0]:e}function Jt(e){try{return e.only([[]]),[[]]}catch(e){return yt}}function $t(t){return He(function(e){return Zt(e),t(e.target.error),!1})}function Zt(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var en=(tn.prototype._lock=function(){return v(!Ce.global),++this._reculock,1!==this._reculock||Ce.global||(Ce.lockOwnerFor=this),this},tn.prototype._unlock=function(){if(v(!Ce.global),0==--this._reculock)for(Ce.global||(Ce.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{st(e[1],e[0])}catch(e){}}return this},tn.prototype._locked=function(){return this._reculock&&Ce.lockOwnerFor!==this},tn.prototype.create=function(t){var n=this;if(!this.mode)return this;var e=this.db.idbdb,r=this.db._state.dbOpenError;if(v(!this.idbtrans),!t&&!e)switch(r&&r.name){case"DatabaseClosedError":throw new Z.DatabaseClosed(r);case"MissingAPIError":throw new Z.MissingAPI(r.message,r);default:throw new Z.OpenFailed(r)}if(!this.active)throw new Z.TransactionInactive;return v(null===this._completion._state),(t=this.idbtrans=t||e.transaction(Xt(this.storeNames),this.mode)).onerror=He(function(e){Zt(e),n._reject(t.error)}),t.onabort=He(function(e){Zt(e),n.active&&n._reject(new Z.Abort(t.error)),n.active=!1,n.on("abort").fire(e)}),t.oncomplete=He(function(){n.active=!1,n._resolve()}),this},tn.prototype._promise=function(n,r,i){var o=this;if("readwrite"===n&&"readwrite"!==this.mode)return pt(new Z.ReadOnly("Transaction is readonly"));if(!this.active)return pt(new Z.TransactionInactive);if(this._locked())return new De(function(e,t){o._blockedFuncs.push([function(){o._promise(n,r,i).then(e,t)},Ce])});if(i)return tt(function(){var e=new De(function(e,t){o._lock();var n=r(e,t,o);n&&n.then&&n.then(e,t)});return e.finally(function(){return o._unlock()}),e._lib=!0,e});var e=new De(function(e,t){var n=r(e,t,o);n&&n.then&&n.then(e,t)});return e._lib=!0,e},tn.prototype._root=function(){return this.parent?this.parent._root():this},tn.prototype.waitFor=function(e){var t,r=this._root(),i=De.resolve(e);r._waitingFor?r._waitingFor=r._waitingFor.then(function(){return i}):(r._waitingFor=i,r._waitingQueue=[],t=r.idbtrans.objectStore(r.storeNames[0]),function e(){for(++r._spinCount;r._waitingQueue.length;)r._waitingQueue.shift()();r._waitingFor&&(t.get(-1/0).onsuccess=e)}());var o=r._waitingFor;return new De(function(t,n){i.then(function(e){return r._waitingQueue.push(He(t.bind(null,e)))},function(e){return r._waitingQueue.push(He(n.bind(null,e)))}).finally(function(){r._waitingFor===o&&(r._waitingFor=null)})})},tn.prototype.abort=function(){this.active&&this._reject(new Z.Abort),this.active=!1},tn.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(c(t,e))return t[e];var n=this.schema[e];if(!n)throw new Z.NotFound("Table "+e+" not part of transaction");var r=new this.db.Table(e,n,this);return r.core=this.db.core.table(e),t[e]=r},tn);function tn(){}function nn(e,t,n,r,i,o,u){return{name:e,keyPath:t,unique:n,multi:r,auto:i,compound:o,src:(n&&!u?"&":"")+(r?"*":"")+(i?"++":"")+rn(t)}}function rn(e){return"string"==typeof e?e:e?"["+[].join.call(e,"+")+"]":""}function on(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:b(n,function(e){return[e.name,e]})}}function un(t){return null==t?function(){}:"string"==typeof t?1===(n=t).split(".").length?function(e){return e[n]}:function(e){return w(e,n)}:function(e){return w(e,t)};var n}function an(e,t){return"delete"===t.type?t.keys:t.keys||t.values.map(e.extractKey)}function sn(e){return[].slice.call(e)}var cn=0;function ln(e){return null==e?":id":"string"==typeof e?e:"["+e.join("+")+"]"}function fn(e,t,o,n){var r=t.cmp.bind(t);function O(e){if(3===e.type)return null;if(4===e.type)throw new Error("Cannot convert never type to IDBKeyRange");var t=e.lower,n=e.upper,r=e.lowerOpen,i=e.upperOpen;return void 0===t?void 0===n?null:o.upperBound(n,!!i):void 0===n?o.lowerBound(t,!!r):o.bound(t,n,!!r,!!i)}function i(k){var m,E=k.name;return{name:E,schema:k,mutate:function(e){var m=e.trans,g=e.type,b=e.keys,_=e.values,w=e.range,x=e.wantResults;return new Promise(function(n,e){n=He(n);var t=m.objectStore(E),r=null==t.keyPath,i="put"===g||"add"===g;if(!i&&"delete"!==g&&"deleteRange"!==g)throw new Error("Invalid operation type: "+g);var o=(b||_||{length:1}).length;if(b&&_&&b.length!==_.length)throw new Error("Given keys array must have same length as given values array.");if(0===o)return n({numFailures:0,failures:{},results:[],lastResult:void 0});function u(e){++f,Zt(e),c&&(c[e.target._reqno]=void 0),l[e.target._reqno]=e.target.error}function a(e){var t=e.target;c[t._reqno]=t.result}var s,c=x&&P(b||an(k.primaryKey,{type:g,keys:b,values:_})),l=[],f=0;if("deleteRange"===g){if(4===w.type)return n({numFailures:f,failures:l,results:c,lastResult:void 0});s=3===w.type?t.clear():t.delete(O(w))}else{var h=i?r?[_,b]:[_,null]:[b,null],p=h[0],d=h[1];if(i)for(var y=0;y<o;++y)(s=d&&void 0!==d[y]?t[g](p[y],d[y]):t[g](p[y]))._reqno=y,c&&void 0===c[y]&&(s.onsuccess=a),s.onerror=u;else for(y=0;y<o;++y)(s=t[g](p[y]))._reqno=y,s.onerror=u}function v(e){var t=e.target.result;c&&(c[o-1]=t),n({numFailures:f,failures:l,results:c,lastResult:t})}s.onerror=function(e){u(e),v(e)},s.onsuccess=v})},getMany:function(e){var f=e.trans,h=e.keys;return new Promise(function(n,e){n=He(n);for(var t,r=f.objectStore(E),i=h.length,o=new Array(i),u=0,a=0,s=function(e){var t=e.target;null!=(o[t._pos]=t.result)&&0,++a===u&&n(o)},c=$t(e),l=0;l<i;++l){null!=h[l]&&((t=r.get(h[l]))._pos=l,t.onsuccess=s,t.onerror=c,++u)}0===u&&n(o)})},get:function(e){var r=e.trans,i=e.key;return new Promise(function(t,e){t=He(t);var n=r.objectStore(E).get(i);n.onsuccess=function(e){return t(e.target.result)},n.onerror=$t(e)})},query:(m=f,function(v){return new Promise(function(n,e){n=He(n);var t,r,i,o,u=v.trans,a=v.values,s=v.limit,c=v.query,l=s===1/0?void 0:s,f=c.index,h=c.range,p=u.objectStore(E),d=f.isPrimaryKey?p:p.index(f.name),y=O(h);if(0===s)return n({result:[]});m?((t=a?d.getAll(y,l):d.getAllKeys(y,l)).onsuccess=function(e){return n({result:e.target.result})},t.onerror=$t(e)):(r=0,i=!a&&"openKeyCursor"in d?d.openKeyCursor(y):d.openCursor(y),o=[],i.onsuccess=function(e){var t=i.result;return t?(o.push(a?t.value:t.primaryKey),++r===s?n({result:o}):void t.continue()):n({result:o})},i.onerror=$t(e))})}),openCursor:function(e){var c=e.trans,a=e.values,l=e.query,f=e.reverse,h=e.unique;return new Promise(function(t,n){t=He(t);var e=l.index,r=l.range,i=c.objectStore(E),o=e.isPrimaryKey?i:i.index(e.name),u=f?h?"prevunique":"prev":h?"nextunique":"next",s=!a&&"openKeyCursor"in o?o.openKeyCursor(O(r),u):o.openCursor(O(r),u);s.onerror=$t(n),s.onsuccess=He(function(e){var r,i,o,u,a=s.result;a?(a.___id=++cn,a.done=!1,r=a.continue.bind(a),i=(i=a.continuePrimaryKey)&&i.bind(a),o=a.advance.bind(a),u=function(){throw new Error("Cursor not stopped")},a.trans=c,a.stop=a.continue=a.continuePrimaryKey=a.advance=function(){throw new Error("Cursor not started")},a.fail=He(n),a.next=function(){var e=this,t=1;return this.start(function(){return t--?e.continue():e.stop()}).then(function(){return e})},a.start=function(e){function t(){if(s.result)try{e()}catch(e){a.fail(e)}else a.done=!0,a.start=function(){throw new Error("Cursor behind last entry")},a.stop()}var n=new Promise(function(t,e){t=He(t),s.onerror=$t(e),a.fail=e,a.stop=function(e){a.stop=a.continue=a.continuePrimaryKey=a.advance=u,t(e)}});return s.onsuccess=He(function(e){(s.onsuccess=t)()}),a.continue=r,a.continuePrimaryKey=i,a.advance=o,t(),n},t(a)):t(null)},n)})},count:function(e){var t=e.query,u=e.trans,a=t.index,s=t.range;return new Promise(function(t,e){var n=u.objectStore(E),r=a.isPrimaryKey?n:n.index(a.name),i=O(s),o=i?r.count(i):r.count();o.onsuccess=He(function(e){return t(e.target.result)}),o.onerror=$t(e)})}}}var u,a,s,c=(a=n,s=sn((u=e).objectStoreNames),{schema:{name:u.name,tables:s.map(function(e){return a.objectStore(e)}).map(function(t){var e=t.keyPath,n=t.autoIncrement,r=d(e),i=null==e,u={},o={name:t.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:i,compound:r,keyPath:e,autoIncrement:n,unique:!0,extractKey:un(e)},indexes:sn(t.indexNames).map(function(e){return t.index(e)}).map(function(e){var t=e.name,n=e.unique,r=e.multiEntry,i=e.keyPath,o={name:t,compound:d(i),keyPath:i,unique:n,multiEntry:r,extractKey:un(i)};return u[ln(i)]=o}),getIndexByKeyPath:function(e){return u[ln(e)]}};return u[":id"]=o.primaryKey,null!=e&&(u[ln(e)]=o.primaryKey),o})},hasGetAll:0<s.length&&"getAll"in a.objectStore(s[0])&&!("undefined"!=typeof navigator&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),l=c.schema,f=c.hasGetAll,h=l.tables.map(i),p={};return h.forEach(function(e){return p[e.name]=e}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(e){if(!p[e])throw new Error("Table '"+e+"' not found");return p[e]},cmp:r,MIN_KEY:-1/0,MAX_KEY:Jt(o),schema:l}}function hn(e,t,n,r){var i,o=n.IDBKeyRange,u=n.indexedDB;return{dbcore:(i=fn(t,u,o,r),e.dbcore.reduce(function(e,t){var n=t.create;return m(m({},e),n(e))},i))}}function pn(n,e){var t=e.db,r=hn(n._middlewares,t,n._deps,e);n.core=r.dbcore,n.tables.forEach(function(e){var t=e.name;n.core.schema.tables.some(function(e){return e.name===t})&&(e.core=n.core.table(t),n[t]instanceof n.Table&&(n[t].core=e.core))})}function dn(r,e,t,i){t.forEach(function(t){var n=i[t];e.forEach(function(e){t in e||(e===r.Transaction.prototype||e instanceof r.Transaction?u(e,t,{get:function(){return this.table(t)},set:function(e){o(this,t,{value:e,writable:!0,configurable:!0,enumerable:!0})}}):e[t]=new r.Table(t,n))})})}function yn(n,e){e.forEach(function(e){for(var t in e)e[t]instanceof n.Table&&delete e[t]})}function vn(e,t){return e._cfg.version-t._cfg.version}function mn(n,r,i,e){var o=n._dbSchema,u=n._createTransaction("readwrite",n._storeNames,o);u.create(i),u._completion.catch(e);var a=u._reject.bind(u),s=Ce.transless||Ce;tt(function(){var c,l,f,h,t,e,p,d;Ce.trans=u,Ce.transless=s,0===r?(_(o).forEach(function(e){gn(i,e,o[e].primKey,o[e].indexes)}),pn(n,i),De.follow(function(){return n.on.populate.fire(u)}).catch(a)):(l=r,f=u,h=i,t=[],e=(c=n)._versions,p=c._dbSchema=_n(0,c.idbdb,h),d=!1,e.filter(function(e){return e._cfg.version>=l}).forEach(function(s){t.push(function(){var t=p,e=s._cfg.dbschema;wn(c,t,h),wn(c,e,h),p=c._dbSchema=e;var n=function(e,t){var n,r={del:[],add:[],change:[]};for(n in e)t[n]||r.del.push(n);for(n in t){var i=e[n],o=t[n];if(i){var u={name:n,def:o,recreate:!1,del:[],add:[],change:[]};if(i.primKey.src===o.primKey.src||bt){var a=i.idxByName,s=o.idxByName,c=void 0;for(c in a)s[c]||u.del.push(c);for(c in s){var l=a[c],f=s[c];l?l.src!==f.src&&u.change.push(f):u.add.push(f)}(0<u.del.length||0<u.add.length||0<u.change.length)&&r.change.push(u)}else u.recreate=!0,r.change.push(u)}else r.add.push([n,o])}return r}(t,e);n.add.forEach(function(e){gn(h,e[0],e[1].primKey,e[1].indexes)}),n.change.forEach(function(e){if(e.recreate)throw new Z.Upgrade("Not yet support for changing primary key");var t=h.objectStore(e.name);e.add.forEach(function(e){return bn(t,e)}),e.change.forEach(function(e){t.deleteIndex(e.name),bn(t,e)}),e.del.forEach(function(e){return t.deleteIndex(e)})});var r=s._cfg.contentUpgrade;if(r&&s._cfg.version>l){pn(c,h),d=!0;var i=k(e);n.del.forEach(function(e){i[e]=t[e]}),yn(c,[c.Transaction.prototype]),dn(c,[c.Transaction.prototype],_(i),i),f.schema=i;var o,u=F(r);u&&nt();var a=De.follow(function(){var e;(o=r(f))&&u&&(e=rt.bind(null,null),o.then(e,e))});return o&&"function"==typeof o.then?De.resolve(o):a.then(function(){return o})}}),t.push(function(e){d&&_t||function(e,t){for(var n=0;n<t.db.objectStoreNames.length;++n){var r=t.db.objectStoreNames[n];null==e[r]&&t.db.deleteObjectStore(r)}}(s._cfg.dbschema,e),yn(c,[c.Transaction.prototype]),dn(c,[c.Transaction.prototype],c._storeNames,c._dbSchema),f.schema=c._dbSchema})}),function e(){return t.length?De.resolve(t.shift()(f.idbtrans)).then(e):De.resolve()}().then(function(){var t,n;n=h,_(t=p).forEach(function(e){n.db.objectStoreNames.contains(e)||gn(n,e,t[e].primKey,t[e].indexes)})}).catch(a))})}function gn(e,t,n,r){var i=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(function(e){return bn(i,e)}),i}function bn(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function _n(e,t,s){var c={};return p(t.objectStoreNames,0).forEach(function(e){for(var t=s.objectStore(e),n=nn(rn(u=t.keyPath),u||"",!1,!1,!!t.autoIncrement,u&&"string"!=typeof u,!0),r=[],i=0;i<t.indexNames.length;++i){var o=t.index(t.indexNames[i]),u=o.keyPath,a=nn(o.name,u,!!o.unique,!!o.multiEntry,!1,u&&"string"!=typeof u,!1);r.push(a)}c[e]=on(e,n,r)}),c}function wn(e,t,n){for(var r=n.db.objectStoreNames,i=0;i<r.length;++i){var o=r[i],u=n.objectStore(o);e._hasGetAll="getAll"in u;for(var a=0;a<u.indexNames.length;++a){var s,c=u.indexNames[a],l=u.index(c).keyPath,f="string"==typeof l?l:"["+p(l).join("+")+"]";!t[o]||(s=t[o].idxByName[f])&&(s.name=c,delete t[o].idxByName[f],t[o].idxByName[c]=s)}}"undefined"!=typeof navigator&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&h.WorkerGlobalScope&&h instanceof h.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}var xn,kn=(En.prototype._parseStoresSpec=function(r,i){_(r).forEach(function(e){if(null!==r[e]){var t=r[e].split(",").map(function(e,t){var n=(e=e.trim()).replace(/([&*]|\+\+)/g,""),r=/^\[/.test(n)?n.match(/^\[(.*)\]$/)[1].split("+"):n;return nn(n,r||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),d(r),0===t)}),n=t.shift();if(n.multi)throw new Z.Schema("Primary key cannot be multi-valued");t.forEach(function(e){if(e.auto)throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");if(!e.keyPath)throw new Z.Schema("Index must have a name and cannot be an empty string")}),i[e]=on(e,n,t)}})},En.prototype.stores=function(e){var t=this.db;this._cfg.storesSource=this._cfg.storesSource?s(this._cfg.storesSource,e):e;var n=t._versions,r={},i={};return n.forEach(function(e){s(r,e._cfg.storesSource),i=e._cfg.dbschema={},e._parseStoresSpec(r,i)}),t._dbSchema=i,yn(t,[t._allTables,t,t.Transaction.prototype]),dn(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],_(i),i),t._storeNames=_(i),this},En.prototype.upgrade=function(e){return this._cfg.contentUpgrade=e,this},En);function En(){}function On(e){return tt(function(){return Ce.letThrough=!0,e()})}function Pn(a){var s=a._state,c=a._deps.indexedDB;if(s.isBeingOpened||a.idbdb)return s.dbReadyPromise.then(function(){return s.dbOpenError?pt(s.dbOpenError):a});q&&(s.openCanceller._stackHolder=V()),s.isBeingOpened=!0,s.dbOpenError=null,s.openComplete=!1;var e=s.dbReadyResolve,l=null;return De.race([s.openCanceller,new De(function(r,i){if(!c)throw new Z.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill.");var o=a.name,u=s.autoSchema?c.open(o):c.open(o,Math.round(10*a.verno));if(!u)throw new Z.MissingAPI("IndexedDB API not available");u.onerror=$t(i),u.onblocked=He(a._fireOnBlocked),u.onupgradeneeded=He(function(e){var t,n;l=u.transaction,s.autoSchema&&!a._options.allowEmptyDB?(u.onerror=Zt,l.abort(),u.result.close(),(t=c.deleteDatabase(o)).onsuccess=t.onerror=He(function(){i(new Z.NoSuchDatabase("Database "+o+" doesnt exist"))})):(l.onerror=$t(i),n=e.oldVersion>Math.pow(2,62)?0:e.oldVersion,a.idbdb=u.result,mn(a,n/10,l,i))},i),u.onsuccess=He(function(){l=null;var e=a.idbdb=u.result,t=p(e.objectStoreNames);if(0<t.length)try{var n=e.transaction(Xt(t),"readonly");s.autoSchema?function(e,t,n){e.verno=t.version/10;var r=e._dbSchema=_n(0,t,n);e._storeNames=p(t.objectStoreNames,0),dn(e,[e._allTables],_(r),r)}(a,e,n):wn(a,a._dbSchema,n),pn(a,n)}catch(e){}gt.push(a),e.onversionchange=He(function(e){s.vcFired=!0,a.on("versionchange").fire(e)}),xn.add(o),r()},i)})]).then(function(){return s.onReadyBeingFired=[],De.resolve(On(a.on.ready.fire)).then(function e(){if(0<s.onReadyBeingFired.length){var t=s.onReadyBeingFired.reduce(le,ne);return s.onReadyBeingFired=[],De.resolve(On(t)).then(e)}})}).finally(function(){s.onReadyBeingFired=null}).then(function(){return s.isBeingOpened=!1,a}).catch(function(e){try{l&&l.abort()}catch(e){}return s.isBeingOpened=!1,a.close(),s.dbOpenError=e,pt(s.dbOpenError)}).finally(function(){s.openComplete=!0,e()})}function jn(t){function e(e){return t.next(e)}var i=n(e),o=n(function(e){return t.throw(e)});function n(r){return function(e){var t=r(e),n=t.value;return t.done?n:n&&"function"==typeof n.then?n.then(i,o):d(n)?Promise.all(n).then(i,o):i(n)}}return n(e)()}function An(e,t,n){for(var r=d(e)?e.slice():[e],i=0;i<n;++i)r.push(t);return r}var Kn={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(f){return m(m({},f),{table:function(e){var u=f.table(e),t=u.schema,s={},c=[];function l(e,t,n){var r=ln(e),i=s[r]=s[r]||[],o=null==e?0:"string"==typeof e?1:e.length,u=0<t,a=m(m({},n),{isVirtual:u,isPrimaryKey:!u&&n.isPrimaryKey,keyTail:t,keyLength:o,extractKey:un(e),unique:!u&&n.unique});return i.push(a),a.isPrimaryKey||c.push(a),1<o&&l(2===o?e[0]:e.slice(0,o-1),t+1,n),i.sort(function(e,t){return e.keyTail-t.keyTail}),a}var n=l(t.primaryKey.keyPath,0,t.primaryKey);s[":id"]=[n];for(var r=0,i=t.indexes;r<i.length;r++){var o=i[r];l(o.keyPath,0,o)}function a(e){var t,n,r=e.query.index;return r.isVirtual?m(m({},e),{query:{index:r,range:(t=e.query.range,n=r.keyTail,{type:1===t.type?2:t.type,lower:An(t.lower,t.lowerOpen?f.MAX_KEY:f.MIN_KEY,n),lowerOpen:!0,upper:An(t.upper,t.upperOpen?f.MIN_KEY:f.MAX_KEY,n),upperOpen:!0})}}):e}return m(m({},u),{schema:m(m({},t),{primaryKey:n,indexes:c,getIndexByKeyPath:function(e){var t=s[ln(e)];return t&&t[0]}}),count:function(e){return u.count(a(e))},query:function(e){return u.query(a(e))},openCursor:function(t){var e=t.query.index,r=e.keyTail,n=e.isVirtual,i=e.keyLength;if(!n)return u.openCursor(t);function o(n){return Object.create(n,{continue:{value:function(e){null!=e?n.continue(An(e,t.reverse?f.MAX_KEY:f.MIN_KEY,r)):t.unique?n.continue(An(n.key,t.reverse?f.MIN_KEY:f.MAX_KEY,r)):n.continue()}},continuePrimaryKey:{value:function(e,t){n.continuePrimaryKey(An(e,f.MAX_KEY,r),t)}},key:{get:function(){var e=n.key;return 1===i?e[0]:e.slice(0,i)}},value:{get:function(){return n.value}}})}return u.openCursor(a(t)).then(function(e){return e&&o(e)})}})}})}},Sn={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return m(m({},e),{table:function(r){var a=e.table(r),v=a.schema.primaryKey;return m(m({},a),{mutate:function(t){var e=Ce.trans,n=e.table(r).hook,p=n.deleting,d=n.creating,y=n.updating;switch(t.type){case"add":if(d.fire===ne)break;return e._promise("readwrite",function(){return u(t)},!0);case"put":if(d.fire===ne&&y.fire===ne)break;return e._promise("readwrite",function(){return u(t)},!0);case"delete":if(p.fire===ne)break;return e._promise("readwrite",function(){return u(t)},!0);case"deleteRange":if(p.fire===ne)break;return e._promise("readwrite",function(){return function n(r,i,o){return a.query({trans:r,values:!1,query:{index:v,range:i},limit:o}).then(function(e){var t=e.result;return u({type:"delete",keys:t,trans:r}).then(function(e){return 0<e.numFailures?Promise.reject(e.failures[0]):t.length<o?{failures:[],numFailures:0,lastResult:void 0}:n(r,m(m({},i),{lower:t[t.length-1],lowerOpen:!0}),o)})})}((e=t).trans,e.range,1e4);var e},!0)}return a.mutate(t);function u(l){var e,t,n,f=Ce.trans,h=l.keys||an(v,l);if(!h)throw new Error("Keys missing");return"delete"!==(l="add"===l.type||"put"===l.type?m(m({},l),{keys:h,wantResults:!0}):m({},l)).type&&(l.values=P(l.values)),l.keys&&(l.keys=P(l.keys)),e=a,n=h,("add"===(t=l).type?Promise.resolve(new Array(t.values.length)):e.getMany({trans:t.trans,keys:n})).then(function(s){var c=h.map(function(e,t){var n,r,i,o,u=s[t],a={onerror:null,onsuccess:null};return"delete"===l.type?p.fire.call(a,e,u,f):"add"===l.type||void 0===u?(n=d.fire.call(a,e,l.values[t],f),null==e&&null!=n&&(e=n,l.keys[t]=e,v.outbound||x(l.values[t],v.keyPath,e))):(r=I(u,l.values[t]),(i=y.fire.call(a,r,e,u,f))&&(o=l.values[t],Object.keys(i).forEach(function(e){x(o,e,i[e])}))),a});return a.mutate(l).then(function(e){for(var t=e.failures,n=e.results,r=e.numFailures,i=e.lastResult,o=0;o<h.length;++o){var u=n?n[o]:h[o],a=c[o];null==u?a.onerror&&a.onerror(t[o]):a.onsuccess&&a.onsuccess("put"===l.type&&s[o]?l.values[o]:u)}return{failures:t,results:n,numFailures:r,lastResult:i}}).catch(function(t){return c.forEach(function(e){return e.onerror&&e.onerror(t)}),Promise.reject(t)})})}}})}})}},Cn=(In.prototype.version=function(t){if(isNaN(t)||t<.1)throw new Z.Type("Given version is not a positive number");if(t=Math.round(10*t)/10,this.idbdb||this._state.isBeingOpened)throw new Z.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);var e=this._versions,n=e.filter(function(e){return e._cfg.version===t})[0];return n||(n=new this.Version(t),e.push(n),e.sort(vn),n.stores({}),this._state.autoSchema=!1,n)},In.prototype._whenReady=function(e){var n=this;return this._state.openComplete||Ce.letThrough?e():new De(function(e,t){if(!n._state.isBeingOpened){if(!n._options.autoOpen)return void t(new Z.DatabaseClosed);n.open().catch(ne)}n._state.dbReadyPromise.then(e,t)}).then(e)},In.prototype.use=function(e){var t=e.stack,n=e.create,r=e.level,i=e.name;i&&this.unuse({stack:t,name:i});var o=this._middlewares[t]||(this._middlewares[t]=[]);return o.push({stack:t,create:n,level:null==r?10:r,name:i}),o.sort(function(e,t){return e.level-t.level}),this},In.prototype.unuse=function(e){var t=e.stack,n=e.name,r=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(e){return r?e.create!==r:!!n&&e.name!==n})),this},In.prototype.open=function(){return Pn(this)},In.prototype.close=function(){var e=gt.indexOf(this),n=this._state;if(0<=e&&gt.splice(e,1),this.idbdb){try{this.idbdb.close()}catch(e){}this.idbdb=null}this._options.autoOpen=!1,n.dbOpenError=new Z.DatabaseClosed,n.isBeingOpened&&n.cancelOpen(n.dbOpenError),n.dbReadyPromise=new De(function(e){n.dbReadyResolve=e}),n.openCanceller=new De(function(e,t){n.cancelOpen=t})},In.prototype.delete=function(){var r=this,i=0<arguments.length,o=this._state;return new De(function(t,n){function e(){r.close();var e=r._deps.indexedDB.deleteDatabase(r.name);e.onsuccess=He(function(){xn.remove(r.name),t()}),e.onerror=$t(n),e.onblocked=r._fireOnBlocked}if(i)throw new Z.InvalidArgument("Arguments not allowed in db.delete()");o.isBeingOpened?o.dbReadyPromise.then(e):e()})},In.prototype.backendDB=function(){return this.idbdb},In.prototype.isOpen=function(){return null!==this.idbdb},In.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&"DatabaseClosed"===e.name},In.prototype.hasFailed=function(){return null!==this._state.dbOpenError},In.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(In.prototype,"tables",{get:function(){var t=this;return _(this._allTables).map(function(e){return t._allTables[e]})},enumerable:!0,configurable:!0}),In.prototype.transaction=function(){var e=function(e,t,n){var r=arguments.length;if(r<2)throw new Z.InvalidArgument("Too few arguments");for(var i=new Array(r-1);--r;)i[r-1]=arguments[r];return n=i.pop(),[e,E(i),n]}.apply(this,arguments);return this._transaction.apply(this,e)},In.prototype._transaction=function(e,t,n){var r=this,i=Ce.trans;i&&i.db===this&&-1===e.indexOf("!")||(i=null);var o,u,a=-1!==e.indexOf("?");e=e.replace("!","").replace("?","");try{if(u=t.map(function(e){var t=e instanceof r.Table?e.name:e;if("string"!=typeof t)throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return t}),"r"==e||e===kt)o=kt;else{if("rw"!=e&&e!=Et)throw new Z.InvalidArgument("Invalid transaction mode: "+e);o=Et}if(i){if(i.mode===kt&&o===Et){if(!a)throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");i=null}i&&u.forEach(function(e){if(i&&-1===i.storeNames.indexOf(e)){if(!a)throw new Z.SubTransaction("Table "+e+" not included in parent transaction.");i=null}}),a&&i&&!i.active&&(i=null)}}catch(n){return i?i._promise(null,function(e,t){t(n)}):pt(n)}var s=function(u,a,s,c,l){return De.resolve().then(function(){var e=Ce.transless||Ce,t=u._createTransaction(a,s,u._dbSchema,c),n={trans:t,transless:e};c?t.idbtrans=c.idbtrans:t.create();var r,i=F(l);i&&nt();var o=De.follow(function(){var e;(r=l.call(t,t))&&(i?(e=rt.bind(null,null),r.then(e,e)):"function"==typeof r.next&&"function"==typeof r.throw&&(r=jn(r)))},n);return(r&&"function"==typeof r.then?De.resolve(r).then(function(e){return t.active?e:pt(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):o.then(function(){return r})).then(function(e){return c&&t._resolve(),t._completion.then(function(){return e})}).catch(function(e){return t._reject(e),pt(e)})})}.bind(null,this,o,u,i,n);return i?i._promise(o,s,"lock"):Ce.trans?st(Ce.transless,function(){return r._whenReady(s)}):this._whenReady(s)},In.prototype.table=function(e){if(!c(this._allTables,e))throw new Z.InvalidTable("Table "+e+" does not exist");return this._allTables[e]},In);function In(e,t){var o=this;this._middlewares={},this.verno=0;var n=In.dependencies;this._options=t=m({addons:In.addons,autoOpen:!0,indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange};var r=t.addons;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={};var a,i,u,s,c,l={dbOpenError:this.idbdb=null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ne,dbReadyPromise:null,cancelOpen:ne,openCanceller:null,autoSchema:!0};l.dbReadyPromise=new De(function(e){l.dbReadyResolve=e}),l.openCanceller=new De(function(e,t){l.cancelOpen=t}),this._state=l,this.name=e,this.on=Kt(this,"populate","blocked","versionchange",{ready:[le,ne]}),this.on.ready.subscribe=y(this.on.ready.subscribe,function(i){return function(n,r){In.vip(function(){var t,e=o._state;e.openComplete?(e.dbOpenError||De.resolve().then(n),r&&i(n)):e.onReadyBeingFired?(e.onReadyBeingFired.push(n),r&&i(n)):(i(n),t=o,r||i(function e(){t.on.ready.unsubscribe(n),t.on.ready.unsubscribe(e)}))})}}),this.Collection=(a=this,St(qt.prototype,function(e,t){this.db=a;var n=Pt,r=null;if(t)try{n=t()}catch(e){r=e}var i=e._ctx,o=i.table,u=o.hook.reading.fire;this._ctx={table:o,index:i.index,isPrimKey:!i.index||o.schema.primKey.keyPath&&i.index===o.schema.primKey.name,range:n,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:r,or:i.or,valueMapper:u!==re?u:null}})),this.Table=(i=this,St(jt.prototype,function(e,t,n){this.db=i,this._tx=n,this.name=e,this.schema=t,this.hook=i._allTables[e]?i._allTables[e].hook:Kt(null,{creating:[ue,ne],reading:[ie,re],updating:[se,ne],deleting:[ae,ne]})})),this.Transaction=(u=this,St(en.prototype,function(e,t,n,r){var i=this;this.db=u,this.mode=e,this.storeNames=t,this.schema=n,this.idbtrans=null,this.on=Kt(this,"complete","error","abort"),this.parent=r||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new De(function(e,t){i._resolve=e,i._reject=t}),this._completion.then(function(){i.active=!1,i.on.complete.fire()},function(e){var t=i.active;return i.active=!1,i.on.error.fire(e),i.parent?i.parent._reject(e):t&&i.idbtrans&&i.idbtrans.abort(),pt(e)})})),this.Version=(s=this,St(kn.prototype,function(e){this.db=s,this._cfg={version:e,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,St(Ht.prototype,function(e,t,n){this.db=c,this._ctx={table:e,index:":id"===t?null:t,or:n};var r=c._deps.indexedDB;if(!r)throw new Z.MissingAPI("indexedDB API missing");this._cmp=this._ascending=r.cmp.bind(r),this._descending=function(e,t){return r.cmp(t,e)},this._max=function(e,t){return 0<r.cmp(e,t)?e:t},this._min=function(e,t){return r.cmp(e,t)<0?e:t},this._IDBKeyRange=c._deps.IDBKeyRange})),this.on("versionchange",function(e){0<e.newVersion?console.warn("Another connection wants to upgrade database '"+o.name+"'. Closing db now to resume the upgrade."):console.warn("Another connection wants to delete database '"+o.name+"'. Closing db now to resume the delete request."),o.close()}),this.on("blocked",function(e){!e.newVersion||e.newVersion<e.oldVersion?console.warn("Dexie.delete('"+o.name+"') was blocked"):console.warn("Upgrade '"+o.name+"' blocked by other connection holding version "+e.oldVersion/10)}),this._maxKey=Jt(t.IDBKeyRange),this._createTransaction=function(e,t,n,r){return new o.Transaction(e,t,n,r)},this._fireOnBlocked=function(t){o.on("blocked").fire(t),gt.filter(function(e){return e.name===o.name&&e!==o&&!e._state.vcFired}).map(function(e){return e.on("versionchange").fire(t)})},this.use(Kn),this.use(Sn),r.forEach(function(e){return e(o)})}var Tn=Cn;return r(Tn,m(m({},te),{delete:function(e){return new Tn(e).delete()},exists:function(e){return new Tn(e,{addons:[]}).open().then(function(e){return e.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){return xn?xn.getDatabaseNames().then(e):De.resolve([])},defineClass:function(){return function(e){s(this,e)}},ignoreTransaction:function(e){return Ce.trans?st(Ce.transless,e):e()},vip:On,async:function(t){return function(){try{var e=jn(t.apply(this,arguments));return e&&"function"==typeof e.then?e:De.resolve(e)}catch(e){return pt(e)}}},spawn:function(e,t,n){try{var r=jn(e.apply(n,t||[]));return r&&"function"==typeof r.then?r:De.resolve(r)}catch(e){return pt(e)}},currentTransaction:{get:function(){return Ce.trans||null}},waitFor:function(e,t){var n=De.resolve("function"==typeof e?Tn.ignoreTransaction(e):e).timeout(t||6e4);return Ce.trans?Ce.trans.waitFor(n):n},Promise:De,debug:{get:function(){return q},set:function(e){M(e,"dexie"===e?function(){return!0}:dt)}},derive:a,extend:s,props:r,override:y,Events:Kt,getByKeyPath:w,setByKeyPath:x,delByKeyPath:function(t,e){"string"==typeof e?x(t,e,void 0):"length"in e&&[].map.call(e,function(e){x(t,e,void 0)})},shallowClone:k,deepClone:A,getObjectDiff:I,asap:g,minKey:-1/0,addons:[],connections:gt,errnames:J,dependencies:function(){try{return{indexedDB:h.indexedDB||h.mozIndexedDB||h.webkitIndexedDB||h.msIndexedDB,IDBKeyRange:h.IDBKeyRange||h.webkitIDBKeyRange}}catch(e){return{indexedDB:null,IDBKeyRange:null}}}(),semVer:"3.0.1",version:"3.0.1".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)}),default:Tn,Dexie:Tn})),Tn.maxKey=Jt(Tn.dependencies.IDBKeyRange),function(e){try{(i=(t=e)&&"function"==typeof t.databases)||((r=new Cn(xt,{addons:[]})).version(1).stores({dbnames:"name"}),n=r.table("dbnames")),xn={getDatabaseNames:function(){return i?De.resolve(t.databases()).then(function(e){return e.map(function(e){return e.name}).filter(function(e){return e!==xt})}):n.toCollection().primaryKeys()},add:function(e){return!i&&e!==xt&&n.put({name:e}).catch(ne)},remove:function(e){return!i&&e!==xt&&n.delete(e).catch(ne)}}}catch(e){}var t,n,r,i}(Cn.dependencies.indexedDB),De.rejectionMapper=function(e,t){if(!e||e instanceof G||e instanceof TypeError||e instanceof SyntaxError||!e.name||!ee[e.name])return e;var n=new ee[e.name](t||e.message,e);return"stack"in e&&u(n,"stack",{get:function(){return this.inner.stack}}),n},M(q,dt),Cn});
function displayNotif(message, opts) {
    var p = document.createElement("p")
    p.classList.add("notif")
    if(opts) {
        p.classList.add("notif-" + opts.type || "info")
    } else {
        p.classList.add("notif-info")
    }
    p.classList.add("notif-bubble")

    var h4 = document.createElement("h4")
    h4.style.display = "flex"
    h4.style.justifyContent = "space-between"
    h4.style.margin = "2px 0"
    h4.appendChild(document.createTextNode("Heads up!"))

    var span = document.createElement("span")
    span.classList.add("icon-close")
    span.addEventListener("click", (e) => {
        document.body.removeChild(p)
    })

    h4.appendChild(span)
    p.appendChild(h4)
    p.appendChild(document.createTextNode(message))

    if(displayNotif.currentNotif) {
        clearTimeout(displayNotif.currentNotif.timeout)
        document.body.removeChild(displayNotif.currentNotif.node)
        delete displayNotif.currentNotif
    }
    document.body.appendChild(p)
    var timeout = setTimeout(() => {
        document.body.removeChild(p)
        delete displayNotif.currentNotif
    }, 5000)
    displayNotif.currentNotif = { timeout, node: p }
}

function showDropdown(className) {
    var node = document.querySelector(className)

    dropdownClicked = true

    if(node) {
        if(node.classList.contains("close")) {
            node.classList.remove("close")
            closeActiveDropdowns()    
            dropdownsActive.push( { node, dropdownClick: true })
        } else {
            node.classList.add("close")
            closeActiveDropdowns()
        }
        // classList.toggle function
        // true is when closed/invisible
        // false is when open/visible
    }
    new Event("click").stopPropagation()
    return
}

function closeActiveDropdowns() {
    dropdownsActive.forEach(dropD => {
        dropD.node.classList.add("close")
    })
    dropdownsActive = []
}

window.onclick = function (evt) {
      //log("window click:", evt)
      if(dropdownClicked) {
        dropdownClicked = false
      } else {
          dropdownClicked = false
          closeActiveDropdowns()
      }
}

function hexToRgba(hex) {
    hex = hex.replace("#", "")
    var r = parseInt(hex.substring(0,2), 16)
    var g = parseInt(hex.substring(2,4), 16)
    var b = parseInt(hex.substring(4,6), 16)
    return `rgb(${r},${g},${b});`
}

function hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}

function setTabs() {
    var tabNodes = document.querySelectorAll(".tab")
    for (var index = 0; index < tabNodes.length; index++) {
        var n = tabNodes[index];
        n.addEventListener("click", (e) => {
            if(e.target.parentNode.dataset.tab) {
                var parts = e.target.parentNode.dataset.tab.split(":")

                // Do tab action
                // 1. remove current active
                if(e.target.parentNode.classList.contains("tab-active")) {
                    e.target.parentNode.classList.remove("tab-active")
                } else {
                    var rN = document.querySelector(`.tab.tab-active.${parts[0]}`)
                    rN.classList.remove("tab-active")
                }

                // 2. set the clicked tab as active
                e.target.parentNode.classList.add("tab-active")

                // Do tab-content action
                // 1. remove current active
                var tbCntNode = document.querySelector(`.${parts[0]}.tab-content.tab-content-active`)
                tbCntNode.classList.remove("tab-content-active")

                // 2. set clicked active
                var tbCntNode2 = document.querySelectorAll(`.${parts[0]}.tab-content`)
                for (var i = 0; i < tbCntNode2.length; i++) {
                    var e = tbCntNode2[i];
                    var tabContentsParts = e.dataset.tab.split(":")
                    if(tabContentsParts[1] == parts[1]) {
                        e.classList.add("tab-content-active")
                    }                    
                }
            }
        })
    }
}

function showHis(event) {
    var n = document.querySelector(".historyCnt")
    n.classList.remove("mClose")
}

function showHistoryCnt(e) {
    var n = document.querySelector(".historyCnt")
    n.classList.add("mClose")
    /*
    var top = n.style.top;
    var bottom = n.style.bottom;
    
    if(top !== "0px" && bottom !== "0px") {
        if(top !== "85%" && bottom !== "-45%") {
            // log("empty string")
            n.style.top = "0px"
            n.style.bottom = "0px"
            return;
        }
    } 

    if(top == "0px" && bottom == "0px") {
        // log("top and bootm are 0px")
        n.style.top = "85%"
        n.style.bottom = "-45%"
    }
    else {
        // log("top is 85 bottom i -45")
        n.style.top = "0px"
        n.style.bottom = "0px"
    }
    */
}

function checkTeamIsPersonal() {
    if(currentTeam.id === "Personal") {
        return true
    } else {
        return false
    }
}

// stringify object
function objToStr(obj, format) {
    if(format)
        return JSON.stringify(obj, null, "\t")
    else
        return JSON.stringify(obj)
}

function closeActiveModals() {
    modalsActive.forEach(m => {
        try {
            document.body.removeChild(m)
        } catch(err) {

        }
    })
    modalsActive = []
}

function getFromWindow(name) {
    return window[name]
}

function getCurrTab() {
    return postData[currentTab]
}

/**
 * 
 * @param {*} tabId - The current tab
 * @param {*} editor - The editor to return
 */
function getCodeEditor(tabId, editor) {
    return currentEditors[tabId][editor] || false
}

function setCodeEditor(node, opts) {
    return CodeMirror(node, opts)
}

function setCodeSnippet(langKey, langVal, langMode) {
    var node = document.getElementById(`${currentTab}previewRequestCodeSnippet`)
    // ${tabId}postDataCntTabContentPreviewRequestEditor
    if(langKey == undefined || langVal == undefined) {
        var type = node.dataset.value
        var mode = node.dataset.mode
        currentEditors[currentTab]["previewrequest"].setOption({ mode: mode })
        currentEditors[currentTab]["previewrequest"].setValue(generateCode(type))
        // id="${tabId}previewRequestCodeSnippet" data-value="nodejsAxios"
    } else {
        node.dataset.value = langKey
        node.dataset.mode = langMode
        node.innerHTML = langVal
        currentEditors[currentTab]["previewrequest"].setOption({ mode: langMode })
        currentEditors[currentTab]["previewrequest"].setValue(generateCode(langKey))
    }
}

function generateCodeSnippet(lang) {
    return generateCode(lang)
}

function copyCodeSnippet(evt) {
    var node = evt.target
    node.innerText = "Copying..."
    node.setAttribute("disabled", null)

    navigator.clipboard.writeText(currentEditors[currentTab]["previewrequest"].getValue()).then(text => {
        node.removeAttribute("disabled")
        node.innerText = "Copied!!"   
        setTimeout(() => {
            node.innerText = "Copy"
        }, 1000)
    }).catch(err => {
        node.removeAttribute("disabled")
        node.innerText = "Copy"
    })
}

// TODO: Complete below
function setCurrentTabEditor(c) {
    currentEditors[c] = {}
}

function handleIdbError(err) {
    if ((err.name === "QuotaExceedeError") || err.inner && err.inner.name === "QuotaExceededError") {
        displayNotif("The storage quota for the current origin was exceeded.", { type: "danger" })
    } else if (err.name !== "ConstraintError") {
        // Any other error
        // displayNotif(err.toString(), { type: "danger" })        
    }
}

function setPostlyAPI(res) {
    var _postly = {}
    var data = res.data
    var headers = res.headers
    var status = res.status
    var statusText = res.statusText

    // set postly data
    _postly.config = res

    _postly.response = data

    // set postly responseCodeText
    _postly.responseCodeText = statusText

    // set postly responseCode
    _postly.responseCode = status

    // Set response headers to postly
    _postly.headers = headers

    return _postly
}

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

function setUpHistoryIdb() {
    var historyDb = new Dexie("historyDb");
    historyDb.version(2).stores({
        history: 'tabId'
    });
    postly["historyDb"] = historyDb
}

function addHistory(data) {
    postly.historyDb.history.add(data).then(function() {
        return postly.historyDb.history.get(data.tabId)
    }).then(function(returnedHistory) {
        return cb(true, returnedHistory)
    }).catch(function(err) {
        handleIdbError(err)
        return cb(false, err)
    })
}

function getAllHistory(cb) {
    var histories = []
    postly.historyDb.history.each(history => { 
        histories.push(history)
    }).then(function () {
        cb(histories)        
    })
}

function getHistory(tabId, cb) {
    postly.historyDb.history.get(tabId, function(history) {
        if(history) {
            if(history.requestId) {
                getRequest(history.requestId, (done, req) => {
                    if(done) {
                        return cb(true, req)
                    }
                })
            }
        }
        return cb(false, "History not found.")
    })
}

function updateHistory(data, cb) {
    postly.historyDb.history.put(data).then(function(res) {
        return cb(true, res)
    }).catch(function(err) {
        handleIdbError(err)
        return cb(false, err)
    })
}

function getAllHistoryByTeamId(teamId, cb) {
    var histories = []
    postly.historyDb.history.each(history => {
        if(history.teamId == teamId) {
            histories.push(history)
        }
    }).then(function () {
        var filHistories = []
        if(histories.length == 0)
            cb(true, histories)
        for (var index = 0; index < histories.length; index++) {
            var _history = histories[index];
            if(_history.requestId) {
                getRequest(_history.requestId, (done, req) => {
                    if(done) {
                        filHistories.push(req)
                    }
                    if(index == histories.length) {
                        cb(true, filHistories)
                    }
                })
            }
        }
    })
}

function deleteAllHistory(cb) {
    postly.historyDb.history.clear().then(function(res) {
        return cb(true, res)
    }).catch(function(err) {
        handleIdbError(err)
        return cb(false, err)
    })
}
function setUpCollectionsIdb() {
    var collectionsDb = new Dexie("collectionsDb");
    collectionsDb.version(2).stores({
        collections: 'collectionId'
    });
    postly["collectionsDb"] = collectionsDb
}

function addCollection(data, cb) {
    postly.collectionsDb.collections.add(data).then(function() {
        return postly.collectionsDb.collections.get(data.collectionId)
    }).then(function(returnedCollection) {
        return cb(true, returnedCollection)
    }).catch(function (err) {
        handleIdbError(err)
        return cb(false, err)
    })
}

function getAllCollection(cb) {
    var collections = []
    postly.collectionsDb.collections.each(collection => { 
        // log(collection)
        collections.push(collection)
    }).then(function () {
        cb(collections)        
    }).catch(err => {
        log(err)
        // handleIdbError(err)
    })
    // log("Exiting:", collections)
}

function getCollectionIdb(colId, cb) {
    postly.collectionsDb.collections.get(colId, function(col) {
        if(col) {
            return cb(true, col)
        }
        return cb(false, "Collection not found.")
    })
}

function updateCollection(data, cb) {
    postly.collectionsDb.collections.put(data).then(function(res) {
        return cb(true, res)
    }).catch(function(err) {
        handleIdbError(err)
        return cb(false, err)
    })
}

function deleteCollectionDb(data, cb) {
    postly.collectionsDb.collections.delete(data.collectionId).then(function(res) {
        return cb(true, res)
    }).catch(function(err) {
        handleIdbError(err)
        return cb(false, err)
    })
}

function setUpRequestsIdb() {
    var requestsDb = new Dexie("requestsDb");
    requestsDb.version(2).stores({
        requests: 'requestId'
    });
    postly["requestsDb"] = requestsDb
}

function addRequest(data, cb) {
    postly.requestsDb.requests.add(data).then(function() {
        return postly.requestsDb.requests.get(data.requestId)
    }).then(function(returnedRequest) {
        return cb(true, returnedRequest)
    }).catch(function(err) {
        handleIdbError(err)
        return cb(false, err)
    })
}

function getAllRequest(cb) {
    var requests = []
    postly.requestsDb.requests.each(request => { 
        requests.push(request)
    }).then(function () {
        cb(requests)        
    })
}

function getRequest(reqId, cb) {
    postly.requestsDb.requests.get(reqId, function(req) {
        if(req) {
            return cb(true, req)
        }
        return cb(false, "Request not found.")
    })
}

function getRequestsbyColId(colId, cb) {
    var requests = []
    postly.requestsDb.requests.each(request => { 
        if(request.collectionId == colId)
            requests.push(request)
    }).then(function () {
        cb(true, requests)        
    })
}

function updateRequest(data, cb) {
    postly.requestsDb.requests.put(data).then(function(res) {
        return cb(true, res)
    }).catch(function(err) {
        handleIdbError(err)
        return cb(false, err)
    })
}

function deleteRequest(data, cb) {
    postly.requestsDb.requests.delete(data).then(function(res) {
        return cb(true, res)
    }).catch(function(err) {
        handleIdbError(err)
        return cb(false, err)
    })
}
function setUpEnvIdb() {
    var EnvDb = new Dexie("EnvDb");
    EnvDb.version(2).stores({
        Env: 'EnvId'
    });
    postly["EnvDb"] = EnvDb
    createGlobalEnv()
}

function addEnvIdb(data, cb) {
    postly.EnvDb.Env.add(data).then(function() {
        return postly.EnvDb.Env.get(data.EnvId)
    }).then(function(returnedEnv) {
        return cb(true, returnedEnv)
    }).catch(function(err) {
        handleIdbError(err)
        return cb(false, err)
    })
}

function loadEnvsIdb(cb) {
    var Envs = []
    postly.EnvDb.Env.each(Env => { 
        Envs.push(Env)
    }).then(function () {
        cb(true, Envs)
    })
}


function deleteEnvIdb(EnvId, cb) {
    postly.EnvDb.Env.get(EnvId, function(Env) {
        if(Env) {
            postly.EnvDb.Env.delete(Env).then(function(res) {
                return cb(true, res)
            }).catch(function(err) {
                handleIdbError(err)
                return cb(false, err)
            })
        }
        handleIdbError("Env not found.")
        return cb(false, "Env not found.")
    })
}

function updateEnvIdb(data, cb) {
    postly.EnvDb.Env.put(data).then(function(res) {
        return cb(true, res)
    }).catch(function(err) {
        handleIdbError(err)
        return cb(false, err)
    })
}
function setupMockServersIdb() {
    var MockServerDb = new Dexie("MockServerDb");
    MockServerDb.version(2).stores({
        mockServers: 'mockServerId,name,endPoints'
    });
    postly["MockServerDb"] = MockServerDb
}

function addNewMockServerIdb(data, cb) {
    postly.MockServerDb.mockServers.add(data).then(function() {
        return postly.MockServerDb.mockServers.get(data.mockServerId)
    }).then(function(returnedMockServers) {
        return cb(true, returnedMockServers)
    }).catch(function(err) {
        handleIdbError(err)
        return cb(false, err)
    })
}

function getMockServerIdb(mockServerId, cb) {
    postly.MockServerDb.mockServers.get(mockServerId, function(mockServer) {
        if(mockServer) {
            return cb(true, mockServer)
        }
        return cb(false, "Mock Server not found.")
    })
}

function getMockServersIdb(cb) {
    var mockServers = []
    postly.MockServerDb.mockServers.each(mockServer => mockServers.push(mockServer)).
    then(function() {
        // log(mockServers)
        return cb(true, mockServers)
    })
}

function createAuthTabs(tabId, type) {
 return `
    <div class="authTabCnt">
        <div class="tabs" style="border-bottom: unset;">
            <ul style="border-bottom: unset;" class="tabul flex-wrap responseViews">
                <li data-tab="${tabId}AuthTab:apiKey" data-name="apikey" style="display: flex;align-items: center;" class="tab ${tabId}AuthTab tab-active"><a>API(Key)</a></li>
                <li data-tab="${tabId}AuthTab:basic" data-name="basic" style="display: flex;align-items: center;" class="tab ${tabId}AuthTab"><a>Basic</a></li>
                <!--
                <li data-tab="${tabId}AuthTab:digest" data-name="digest" style="display: flex;align-items: center;" class="tab ${tabId}AuthTab"><a>Digest</a></li>
                -->
                <li data-tab="${tabId}AuthTab:bearer" data-name="bearer" style="display: flex;align-items: center;" class="tab ${tabId}AuthTab"><a>Bearer</a></li>
                <!--
                <li class="tab ${tabId}AuthTab"><a>Hawk</a></li>
                <li class="tab ${tabId}AuthTab"><a>OAuth1</a></li>
                <li class="tab ${tabId}AuthTab"><a>OAuth2</a></li>-->
            </ul>
            <div>
                <div data-tab="${tabId}AuthTab:apiKey" data-name="apikey" class="tab-content ${tabId}AuthTab tab-content-active APIKey">
                    
                    <div style="margin: 9px 0;">
                        <button style="position: relative;" onclick="return showDropdown('.${tabId}setApiKeyAddToTypeDropdown')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">
                            <span>Add to: <span id="${tabId}setApiKeyAddToType" data-value="header">Header</span> <span class="icon-arrow-down"></span></span>
                            <div class="dropdown right-dropdown ${tabId}setApiKeyAddToTypeDropdown close">
                                <ul>
                                    <li><a onclick="return setApiKeyAddToType('params', 'Query Params', '${tabId}')">Query Params</a></li>
                                    <li><a onclick="return setApiKeyAddToType('header', 'Header', '${tabId}')">Header</a></li>
                                </ul>
                            </div>                            
                        </button>
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authAPIKey" placeholder="api_key" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="password" id="${tabId}authAPIValue" placeholder="api_value" />
                    </div>
                    <div style="margin: 4px 0;">
                        <button onclick="return setAsAuth(event, 'APIKey', '${tabId}', '${type}')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">Set As Auth.</button>
                    </div>
                </div> 
                <div data-tab="${tabId}AuthTab:basic" data-name="basic" class="tab-content ${tabId}AuthTab Basic">
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authBasicUsername" placeholder="Username" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="password" id="${tabId}authBasicPassword" placeholder="Password" />
                    </div>
                    <div style="margin: 4px 0;">
                        <button onclick="return setAsAuth(event, 'Basic', '${tabId}', '${type}')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">Set As Auth.</button>
                    </div>
                </div> 

                <!--
                <div data-tab="${tabId}AuthTab:digest" data-name="digest" class="tab-content ${tabId}AuthTab Digest">
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestUsername" placeholder="Username" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestPassword" placeholder="Password" />
                    </div>
                    
                    <div style="margin: 9px 0;">
                        <button style="position: relative;" onclick="return showDropdown('.${tabId}authDigestAlgortihmDropdown')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">
                            <span>Algorithm: <span id="${tabId}authDigestAlgorithm">MD5</span> <span class="icon-arrow-down"></span></span>
                            <div class="dropdown ${tabId}authDigestAlgortihmDropdown close">
                                <ul>
                                    <li><a onclick="return setAuthDigestAlgorithm('${tabId}', 'MD5', '${tabId}', '${type}')">MD5</a></li>
                                    <li><a onclick="return setAuthDigestAlgorithm('${tabId}', 'SHA-1', '${tabId}', '${type}')">SHA-1</a></li>
                                </ul>
                            </div>                            
                        </button>
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestRealm" placeholder="Realm" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestNonce" placeholder="Nonce" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestUri" placeholder="Uri" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestOpaque" placeholder="Opaque" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestQop" placeholder="Qop" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestNc" placeholder="NC" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestCnonce" placeholder="Cnonce" />
                    </div>
                    <div style="margin: 4px 0;">
                        <button onclick="return setAsAuth(event, 'Digest', '${tabId}', '${type}')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">Set As Auth.</button>
                    </div>
                </div> 
                -->

                <div data-tab="${tabId}AuthTab:bearer" data-name="bearer" class="tab-content ${tabId}AuthTab Bearer">
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authBearerToken" placeholder="Bearer token" />
                    </div>
                    <div style="margin: 4px 0;">
                        <button onclick="return setAsAuth(event, 'Bearer', '${tabId}', '${type}')" class="saveRequestUrlModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Set As Auth.</button>
                    </div>
                </div> <!--
                <div class="tab-content ${tabId}AuthTabContent Hawk">
                    <div>Hawk</div>
                </div> 
                <div class="tab-content ${tabId}AuthTabContent OAuth1">
                    <div>OAuth 1.0</div>
                </div> 
                <div class="tab-content ${tabId}AuthTabContent OAuth2">
                    <div>OAuth 2.0</div>
                </div> -->
            </div>
        </div>
    </div>
 `   
}

function setTabsInAuthTab(tabId) {
    var authTabNode = document.querySelectorAll("." + tabId + "AuthTab")
    for (var index = 0; index < authTabNode.length; index++) {
        var tab = authTabNode[index];
        tab.addEventListener("click", authTabHandler)        
    }
}

function authTabHandler(evt) {
    // get active tab
    var activeTab = document.querySelector(`.${currentTab}AuthTab.tab-active`)
    activeTab.classList.remove("tab-active")

    // switch tabs
    var newNode = evt.target.parentNode;
    newNode.classList.add("tab-active")

    // remove the already active tab content
    var tabName = newNode.dataset.name
    document.querySelector(`.${currentTab}AuthTabContent.tab-content-active`)
        .classList.remove("tab-content-active")

    // make the tab-content of the current selected tab active
    // log(`.${currentTab}postDataCntTabContent.tab-content`)
    var tabContents = document.querySelectorAll(`.${currentTab}AuthTabContent.tab-content`)
    for (var index = 0; index < tabContents.length; index++) {
        var t = tabContents[index];
        if(t.dataset.name == tabName) {
            t.classList.add("tab-content-active")
            return;
        }        
    }
}

function setAsAuth(evt, authName, tabId, type) {
    var strategy = {
        setAsAuthCollection,
        setAsAuthRequest
    }
    strategy["setAsAuth" + type](evt, authName, tabId)
}

function setAsAuthCollection(evt, authName, tabId) {
    switch (authName) {
        case 'Basic':
            var authBasicUsername =  getFromWindow(`${tabId}authBasicUsername`).value
            var authBasicPassword =  getFromWindow(`${tabId}authBasicPassword`).value
            setAsAuthCollection.authorization = {
                type: "Basic",
                password: authBasicPassword,
                username: authBasicUsername
            }
            break;
        case 'Bearer':
            var authBearerToken = getFromWindow(`${tabId}authBearerToken`).value
            setAsAuthCollection.authorization = {
                type: "Bearer",
                token: authBearerToken
            }
            break;

        case "APIKey":
            var auth_key = getFromWindow(`${tabId}authAPIKey`).value
            var auth_value = getFromWindow(`${tabId}authAPIValue`).value
            var whereToAdd = getFromWindow(`${tabId}setApiKeyAddToType`).dataset.value
            setAsAuthCollection.authorization = {
                type: "APIKey",
                auth_key: auth_key,
                auth_value: auth_value,
                whereToAdd: whereToAdd
            } 
            // postData[currentTab] = 
        break;
    
        default:
            break;
    }

    // check if icon-check exist and remove it
    var nodeExist = document.querySelector(`.${tabId}AuthTabCheck.icon-check`)
    if(nodeExist) {
        nodeExist.parentNode.removeChild(nodeExist)
    }
    // set this 
    document.querySelector(`.${tabId}AuthTab.tab-active`)
        .innerHTML += `<span class="${tabId}AuthTabCheck icon-check" style="padding-right: 8px; color: rgb(221,75,57); font-weight: 800;" class="icon-check"></span>`
}

function setAsAuthRequest(evt, authName, tabId) {
    switch (authName) {
        case 'Basic':
            var authBasicUsername =  getFromWindow(`${currentTab}authBasicUsername`).value
            var authBasicPassword =  getFromWindow(`${currentTab}authBasicPassword`).value
            postData[currentTab].authorization = {
                type: "Basic",
                password: authBasicPassword,
                username: authBasicUsername
            }
            break;
        case 'Bearer':
            var authBearerToken = getFromWindow(`${currentTab}authBearerToken`).value
            postData[currentTab].authorization = {
                type: "Bearer",
                token: authBearerToken
            }
            break;
        case "Digest":
            var authDigestFields = [ 
                "Username", 
                "Password",
                "Qop", "Uri", "Realm", "Nonce", "Cnonce", "Opaque", "Nc" ]

            // set to postData
            postData[currentTab].authorization = {
                type: "Digest"
            }

            authDigestFields.forEach(f => {
                var v = window[currentTab + "authDigest" + f].value
                postData[currentTab].authorization[f.toLocaleLowerCase()] = v
            })
        break;

        case "APIKey":
            var auth_key = getFromWindow(`${currentTab}authAPIKey`).value
            var auth_value = getFromWindow(`${currentTab}authAPIValue`).value
            var whereToAdd = getFromWindow(`${currentTab}setApiKeyAddToType`).dataset.value
            postData[currentTab].authorization = {
                type: "APIKey",
                auth_key: auth_key,
                auth_value: auth_value,
                whereToAdd: whereToAdd
            } 
            // postData[currentTab] = 
        break;
    
        default:
            break;
    }

    // check if icon-check exist and remove it
    var nodeExist = document.querySelector(`.${tabId}AuthTabCheck.icon-check`)
    if(nodeExist) {
        nodeExist.parentNode.removeChild(nodeExist)
    }
    // set this 
    document.querySelector(`.${tabId}AuthTab.tab-active`)
        .innerHTML += `<span class="${tabId}AuthTabCheck icon-check" style="padding-right: 8px; color: rgb(221,75,57); font-weight: 800;" class="icon-check"></span>`
}

function setAuthDigestAlgorithm(tabId, algo) {
    window[tabId + "authDigestAlgorithm"].innerText = algo
}

function generateAuth(headers, url, tabId, type) {
    var generateAuthStrategy = {
        generateAuthCollection,
        generateAuthRequest
    }

    return generateAuthStrategy["generateAuth" + type](headers, url, tabId)
}

function generateAuthCollection(req, authorization) {
    var authName = authorization.type
    var auth = ""
    switch (authName) {
        case 'Basic':
            var basicUsername = parseVarsAndReplace(authorization.username)
            var basicPassword = parseVarsAndReplace(authorization.password)
            auth = "Basic " + btoa(basicUsername + ":" + basicPassword)
            req.headers["Authorization"] = auth
            break;
        case 'Bearer':
            var bearerToken = parseVarsAndReplace(authorization.token)
            auth = `Bearer ${bearerToken}`
            req.headers["Authorization"] = auth
            break;

        case "APIKey":
            var whereToAdd = authorization.whereToAdd
            var auth_key  = parseVarsAndReplace(authorization.auth_key)
            var auth_value = parseVarsAndReplace(authorization.auth_value)
            auth = ""
            
            switch (whereToAdd) {
                case "params":
                    // check if it has params
                    req.params.push({
                        key: auth_key,
                        value: auth_value
                    })
                    break;
                case "header":
                    req.headers[auth_key] = auth_value
                    break;
                default:
                    break;
            }
            break;
    
        default:
            break;
    }    
    return req
}

function generateAuthRequest(headers, url, tabId) {
    var authName = postData[currentTab].authorization.type
    var auth = ""
    switch (authName) {
        case 'Basic':
            var basicUsername = parseVarsAndReplace(postData[currentTab].authorization.username)
            var basicPassword = parseVarsAndReplace(postData[currentTab].authorization.password)
            auth = "Basic " + btoa(basicUsername + ":" + basicPassword)
            break;
        case 'Bearer':
            var bearerToken = parseVarsAndReplace(postData[currentTab].authorization.token)
            auth = `Bearer ${bearerToken}`
            break;
        case "Digest":
            auth = "Digest "
            var postDataAuth = postData[currentTab].authorization
            var response = formulateResponse(postDataAuth)

            var digestUsername = postDataAuth.username
            var realm = postDataAuth.realm
            var uri = postDataAuth.uri
            var nonce = postDataAuth.nonce
            var qop = postDataAuth.qop
            var nc = postDataAuth.nc
            var cnonce = postDataAuth.cnonce

		    auth += 'username="' + digestUsername + '", ' +
			'realm="' + realm + '", ' +
			'nonce="' + nonce + '", ' +
			'uri="' + uri + '", ' +
			'response="' + response + '", ' +
			'opaque="' + opaque + '", ' +
			'qop=' + qop+', ' +
			'nc=' + ('00000000' + nc).slice(-8)+', ' +
			'cnonce="' + cnonce + '"';
        break;

        case "APIKey":
            var whereToAdd = postData[currentTab].authorization.whereToAdd
            var auth_key  = parseVarsAndReplace(postData[currentTab].authorization.auth_key)
            var auth_value = parseVarsAndReplace(postData[currentTab].authorization.auth_value)
            auth = ""
            
            switch (whereToAdd) {
                case "params":
                    // check if it has params
                    var urlUrl = new URL(url)
                    if(urlUrl.search.length > 0) {
                        // if yes, add to it
                        auth += "&" + auth_key + "=" + auth_value + "&"
                    } else {
                        // if no start with ?
                        auth = "?" + auth_key + "=" + auth_value + "&"
                    }
                    break;
                case "header":
                    headers[auth_key] = auth_value
                    break;
                default:
                    break;
            }
            break;
    
        default:
            break;
    }    
    return auth
}

// TODO: get md5(...) function.
function formulateResponse (opts) {
    var username = opts.username
    var password = opts.password
    var realm = opts.realm
    var uri = opts.uri
    var nonce = opts.nonce
    var qop = opts.qop
    var nc = opts.nc
    var cnonce = opts.cnonce

    var HA1 = md5(username + ':' + realm + ':' + password).toString();
    var HA2 = md5(method + ':' + uri).toString();
    var response = md5(
        HA1 + 
        ':' + 
        nonce + 
        ':' + 
        ('00000000' + nc).slice(-8) + 
        ':' + 
        cnonce + 
        ':' + 
        qop + 
        ':' + HA2).toString();
    return response;
}

// generate 16 char client nonce
function generateCnonce() {
    var characters = 'abcdef0123456789';
    var token = '';
    for (var i = 0; i < 16; i++) {
        var randNum = Math.round(Math.random() * characters.length);
        token += characters.substr(randNum, 1);
    }
    return token;
}

function setApiKeyAddToType(type, name, tabId) {
    // innnerText and dataset
    var node = getFromWindow(`${tabId}setApiKeyAddToType`)
    node.innerText = name
    node.dataset.value = type
}
function generateCode(type) {
    var snip = type[0].toUpperCase() + type.slice(1, type.length)
    return codeGenStrategies[`generate${snip}Code`]()
}

function generateNodejsAxiosCode() {
    var postFields = getAllPostFields()
    var url = postFields.url
    var methodType = postFields.methodType.toLowerCase()
    var headers = postFields.headers
    var params = postFields.params
    var body = postFields.body

    var code = `var axios = require("axios");\n\n`
    var configSnippet = "{\n"
    var dataSnippet = ""

    if(headers.length > 0) {
        configSnippet += "\theader: {\n"
        for (var index = 0; index < headers.length; index++) {
            var header = headers[index];
            configSnippet += "\t'"+ header.key + "':'" +header.value + "'"
            if(index != header.length-1) {
                configSnippet += ",\n"
            }
        }
        configSnippet += "\t},\n"
    }
    configSnippet += "}"

    if(body && isObject(body)) {
        dataSnippet += "\t{\n"
        var bodyKeys = Object.keys(body)
        for (var index = 0; index < bodyKeys.length; index++) {
            var bdyKey = bodyKeys[index];
            var bdyValue = body[bdyKey] 
            dataSnippet += "\t" + bdyKey + ":'" + bdyValue + "'"
            if(index != bodyKeys.length-1) {
                dataSnippet += ",\n"
            }
        }
        dataSnippet += "\t}\n"
    } else {
        if(body)
            dataSnippet += "\t" + body + "\n"
    }
    dataSnippet += ""

    if(methodType == "get"
        || methodType == "delete"
        || methodType == "head"
        || methodType == "options") {
            code += "axios." + methodType +"('" + url + "', " + configSnippet + ").\n"
        }
    if( methodType == "post"
        || methodType == "put"
        || methodType == "patch") {
            code += "axios." + methodType +"('" + url + "', " + dataSnippet + ", " + configSnippet + ").\n"            
        }

    code += `then(response => {
    console.log(response.data)
}).catch(err => {
    console.log(err)
})
`
    return code
}

function generateCurlCode() {
    var postFields = getAllPostFields()
    var url = postFields.url
    var methodType = postFields.methodType.toLowerCase()
    var headers = postFields.headers
    var params = postFields.params
    var body = postFields.body

    var code = "curl " + "--request " + methodType.toUpperCase() + " \\ \n" +
    " \t--url " + url + " \\ \n"

    if(headers.length > 0) {
        for (var index = 0; index < headers.length; index++) {
            var header = headers[index];
            code += "\t--header {"+ header.key + ":" +header.value + "} \\ \n"
        }
    }

    if(body && isObject(body)) {
        code += "\t--data {"
        var bodyKeys = Object.keys(body)
        for (var index = 0; index < bodyKeys.length; index++) {
            var bdyKey = bodyKeys[index];
            var bdyValue = body[bdyKey] 
            code += "" + bdyKey + ": '" + bdyValue + "'"
            if(index != bodyKeys.length-1) {
                code += ","
            }
        }
        code += "} \\ \n"
    } else {
        if(body)
            code += "\t--data " + body + "\\ \n"
    }

    return code
}

function generateFetchCode() {
    var postFields = getAllPostFields()
    var url = postFields.url
    var methodType = postFields.methodType.toLowerCase()
    var headers = postFields.headers
    var params = postFields.params
    var body = postFields.body
    
    var optsSnippet = "{\n"
    optsSnippet += "\tmethod: '" + methodType + "',\n"

    if(headers && headers.length > 0) {
        optsSnippet += "\theaders: new Headers({\n"
        for (var index = 0; index < headers.length; index++) {
            var header = headers[index];
            optsSnippet += `\t"${header.key}": "${header.value}"`
            if(index != headers.length-1) {
                optsSnippet += ",\n"
            }
        }
        optsSnippet += "}),"
    }

    if(body && isObject(body)) {
        optsSnippet += "\tbody: {\n"
        var bodyKeys = Object.keys(body)
        for (var index = 0; index < bodyKeys.length; index++) {
            var bdyKey = bodyKeys[index];
            var bdyValue = body[bdyKey] 
            optsSnippet += "\t'" + bdyKey + "':'" + bdyValue + "'"
            if(index != bodyKeys.length-1) {
                optsSnippet += ",\n"
            }
        }
        optsSnippet += "\t}\n"
    } else {
        if(body)
            optsSnippet += "\tbody: " + body + "\n"
    }
    
    optsSnippet += "}"

    var code = "fetch('" + url + "'," + optsSnippet + ")\n"
    code += ".then( response => { \n" + "\tconsole.log(response);\n})"
    code += ".catch( err => {\n" + "\tconsole.log(err);\n})"
    return code
}

function getAllPostFields() {
    var url = document.querySelector(`.${currentTab}UrlInput`).value
    var methodType = getFromWindow(`${currentTab}methodTypeButton`).innerText.toLowerCase()
    var headers = postData[currentTab].headers
    var params = postData[currentTab].params
    var body = bodyBuilder(postData[currentTab].body) /*postData[currentTab].body */
    return {
        url,
        methodType,
        headers,
        params,
        body
    }    
}

function createBinaryNode(tabId) {
    return `
        <div style="padding: 4px 0;">
            <input type="file" id="${tabId}BinaryBody" onchange="return setBinaryValue(event)" />
        </div>
    `
}

function setBinaryValue(event) {

}

function getBinaryValue(cb) {
    var files = postData[`${currentTab}BinaryBody`]
    var reader = new FileReader()
    reader.onload = function(e) {
        var res = e.target.result
        return res
    }
    reader.readAsDataURL(files.files[0])  
}
function graphQLTab() {

}

function createGraphQLDisplay(tabId) {
    return `
        <div style="display: flex; justify-content: space-between; padding: 4px 0;">
            <div style="flex-grow: 1;">
                <div style="padding: 5px 0; font-weight: 200;font-size: 15px;">QUERY</div>
                <div style="border: 1px solid rgb(221, 221, 221); margin-right: 3px;" id="${tabId}BodyGraphQLQueryEditor"></div>    
            </div>
            <div style="flex-grow: 1;">
                <div style="padding: 5px 0; font-weight: 200;font-size: 15px;">VARIABLES</div>
                <div style="border: 1px solid rgb(221, 221, 221);" id="${tabId}BodyGraphQLVariablesEditor"></div>    
            </div>
        </div>
    `
}

function setGraphQLEditor() {
    var currTab = getCurrTab()
    var query = ""
    var variables = ""

    if(currTab.body["graphql"]) {
        if(currTab.body["graphql"]["query"]) {
            query = currTab.body["graphql"]["query"]
        }

        if(currTab.body["graphql"]["variables"]) {
            variables = currTab.body["graphql"]["variables"]
        }
    }

    if(!currentEditors[currentTab][`${currentTab}BodyGraphQLQueryEditor`]) {
        currentEditors[currentTab][`${currentTab}BodyGraphQLQueryEditor`] = setCodeEditor(getFromWindow(`${currentTab}BodyGraphQLQueryEditor`), {
            value: query,
            lineNumbers: true, 
            tabSize: 2,
            mode: {
                name: "javascript"
            },
            lineWrapping: true,
            theme: "default",
            autoRefresh: true
        })
    }
    if(!currentEditors[currentTab][`${currentTab}BodyGraphQLVariablesEditor`]) {
        currentEditors[currentTab][`${currentTab}BodyGraphQLVariablesEditor`] = setCodeEditor(getFromWindow(`${currentTab}BodyGraphQLVariablesEditor`), {
            value: variables,
            lineNumbers: true, 
            tabSize: 2,
            mode: {
                name: "javascript"
            },
            lineWrapping: true,
            theme: "default",
            autoRefresh: true
        })
    }
}

function getGraphQLEditorValue(forSave) {
    var query = ""
    var variables = ""
    if(currentEditors[currentTab][`${currentTab}BodyGraphQLQueryEditor`]) {
        query = currentEditors[currentTab][`${currentTab}BodyGraphQLQueryEditor`].getValue().trim()
    }
    if(currentEditors[currentTab][`${currentTab}BodyGraphQLVariablesEditor`]) {
        variables = currentEditors[currentTab][`${currentTab}BodyGraphQLVariablesEditor`].getValue()
        if(!forSave) {
            variables = variables.trim()
                .replace("\\", "")
                .replace("\n", "")
                .replace("\t", "")
        }

        if(!forSave)
            if(variables.length <= 0)
                variables = "null"
    }
    if(!forSave) {
        // set appropriate headers
        postData[currentTab].headers.push({key: "content-type", value: "application/json"})
    }
    return {
        query,
        variables
    }
}

/**

2

Value of query parameter to be passed in request has to be string and names of variables passed to GraphQL queries should be prefixed by $. You have used string literals for variables in request instead. Also, variables can be passed in post request using variables key.

Changing your code to something like below should get it to working:

const data = await axios.post(API_URL, {
  query: `mutation updateUserCity($id: Int!, $city: String!) {
    updateUserCity(userID: $id, city: $city){
      id
      name
      age
      city
      knowledge{
        language
        frameworks
      }
    }
  }`,
  variables: {
    id: 2,
    city: 'Test'
  }
}, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

 */
function createRawNode(tabId) {
    return `
        <div style="font-size: 1.125em; padding: 4px 0; margin-top: 4px; border: 1px solid rgb(221, 221, 221);">
            <span style="cursor: pointer;" onclick="return setRawType('json', '${tabId}')">
                <input name="rawType" type="radio" id="${tabId}rawTypeJson">
                <label for="${tabId}rawTypeJson">JSON</label>
            </span>
            
            <span style="cursor: pointer;" onclick="return setRawType('text', '${tabId}')">
                <input name="rawType" type="radio" id="${tabId}rawTypeText">
                <label for="${tabId}rawTypeText">Text</label>
            </span>

            <span style="cursor: pointer;" onclick="return setRawType('xml', '${tabId}')">
                <input name="rawType" type="radio" id="${tabId}rawTypeXml">
                <label for="${tabId}rawTypeXml">XML</label>
            </span>

            <span style="cursor: pointer;" onclick="return setRawType('javascript', '${tabId}')">
                <input name="rawType" type="radio" id="${tabId}rawTypeJavascript">
                <label for="${tabId}rawTypeJavascript">JavaScript</label>
            </span>
            <span style="cursor: pointer;" onclick="return setRawType('html', '${tabId}')">
                <input name="rawType" type="radio" id="${tabId}rawTypeHtml">
                <label for="${tabId}rawTypeHtml">HTML</label>
            </span>
        </div>
        <div style="padding: 4px 0; margin-top: 4px; border: 1px solid rgb(221, 221, 221);" id="${tabId}BodyRawEditor"></div>
    `
}

function setRawEditor() {
    var value = "// \n"
    // check the mode type is raw.
    if(postData[currentTab].body.mode == "raw") {
        // set editor value
        var content = postData[currentTab].body["raw"].content
        if(content)
            value = content

        var lang = postData[currentTab].body["raw"].lang
        if(lang && lang.length > 0)
            getFromWindow(`${currentTab}rawType` + (lang[0].toUpperCase() + lang.slice(1))).checked = true
        // set radio type
    }

    if(!currentEditors[currentTab][`${currentTab}BodyRawEditor`]) {
        currentEditors[currentTab][`${currentTab}BodyRawEditor`] = setCodeEditor(getFromWindow(`${currentTab}BodyRawEditor`), {
            value: value,
            lineNumbers: true, 
            tabSize: 2,
            mode: {
                name: "javascript"
            },
            lineWrapping: true,
            theme: "default",
            autoRefresh: true
        })
    }
}

/**
 * Builds raw body before network request is sent
 */
function getRawEditorValue(forSave) {
    var value
    var lang
    var valType
    if(postData[currentTab].body.mode == "raw") {
        if(currentEditors[currentTab][`${currentTab}BodyRawEditor`]) {
            value =  currentEditors[currentTab][`${currentTab}BodyRawEditor`].getValue().trim()
        }
        lang = postData[currentTab].body["raw"].lang
    }
    if(!forSave)
        if(value)
            value = parseVarsAndReplace(value)

    switch (lang) {
        case "json":
            // set appropriate headers
            valType = "application/json"
            if(!forSave) {
                try {
                    value = JSON.parse(value)                    
                } catch (error) {
                    displayNotif(error, {type: "danger"})                
                    value = {}
                }
            }
            break;
        case "text":
            // set appropriate headers
            valType = "text/plain"
            break;
        case "xml":
            // set appropriate headers
            valType = "text/xml"
            break;
        case "javascript":
            // set appropriate headers
            valType = "application/javascript"
            break;
        case "html":
            // set appropriate headers
            valType = "text/html"
        default:
            break;
    }
    if(!forSave)
        postData[currentTab].headers.push({ key: "content-type", value: valType })

    if(forSave)
        return { content: value, lang: lang }
    return value
}

function setRawType(rawType, tabId) {
    // ${tabId}rawTypeText

    if(postData[currentTab].body) {
        if(postData[currentTab].body.mode && postData[currentTab].body.mode == "raw") {
            postData[currentTab].body["raw"].lang = rawType
        }
    }
}
function createFormNode(tabId) {
    return `
        <table>
            <thead>
                <th></th>
                <th>KEY</th>
                <th>VALUE</th>
            </thead>
            <tbody id="${tabId}bodyTr">
                <tr id="${tabId}bodyLast">
                    <td></td>
                    <td><input id="${tabId}bodyKey" type="text" placeholder="Key" /></td>
                    <td><input id="${tabId}bodyValue" type="text" placeholder="Value" /></td>
                    <td><button onclick="return addBody(${tabId}bodyKey, ${tabId}bodyValue)">+</button></td>
                </tr>
            </tbody>
        </table>    
    `
}
function setBodyType(type, name) {
    // <span id="${tabId}setBodyType" data-value="form">Form</span> <span class=

    // remove body tab currently active
    
    var spanNode = getFromWindow(`${currentTab}setBodyType`)
    var nodeToDeAct = getFromWindow(`${currentTab}Body${spanNode.dataset.value}`)
    nodeToDeAct.classList.add("close")

    spanNode.innerText = name
    spanNode.dataset.value = type

    // id="${tabId}Bodygraphql
    var nodeToAct = getFromWindow(`${currentTab}Body${type}`)
    nodeToAct.classList.remove("close")

    if(postData[currentTab].body) {
        postData[currentTab].body.mode = type
    }

    switch (type) {
        case "graphql":
            setGraphQLEditor()            
            break;
        case "raw":
            setRawEditor()
            break;
    
        default:
            break;
    }
}

function bodyBuilder(body) {
    var mode = body.mode
    var data
    switch (mode) {
        case "form":
            var _body = body["form"]
            data = {}
            for (var index = 0; index < _body.length; index++) {
                var bdy = _body[index];
                data[parseVarsAndReplace(bdy.key)] = parseVarsAndReplace(bdy.value)
            }
            break;
        case "raw":
            data = getRawEditorValue();
            break;
        case "graphql":
            /**
             * GraphQL query over HTTP:
             * {"query":"query { product(id: 1) { id, name, category, price }", "variables": null }
             */
            var queryVars = getGraphQLEditorValue()
            data = {
                query: queryVars.query.trim(),
                variables: queryVars.variables.trim()
            }
            break;
        case "binary":
            data = getBinaryValue()
            break;
        default:
            break;
    }
    return data
}

function setBodyForSave() {
    switch (postData[currentTab].body.mode) {
        case "raw":
            var t = getRawEditorValue(true)
            var currTab = getCurrTab()
            currTab.body.raw = t
            break;

        case "graphql":        
            var t = getGraphQLEditorValue(true)
            var currTab = getCurrTab()
            currTab.body.graphql = t
            break; 

        default:
            break;
    }
}
function buildParamsToUrl(params, url) {
    url = new URL(url)
    for (var index = 0; index < params.length; index++) {
        var param = params[index];
        var key = parseVarsAndReplace(param.key)
        var value = parseVarsAndReplace(param.value)
        url.searchParams.append(key, value)
    }
    return url.toString()
}

function buildParams(params) {
    var pB = {}
    for (var index = 0; index < params.length; index++) {
        var param = params[index];
        var key = parseVarsAndReplace(param.key)
        var value = parseVarsAndReplace(param.value)
        pB[key] = value
    }
    return pB
}
function setOptions(event, type) {
    var opts = postData[currentTab].options
    if(opts[type]) {
        opts[type] = false
    } else {
        opts[type] = true
    }
}
function createNewTab(tabId) {
    var newtab = `
                <div id="${tabId}ViewMode">
                    <div class="ViewModeRequest">
                        <div class="urlArea">
                            <div class="inputBox">
                                <div class="methodCnt">
                                    <div class="method">
                                        <a id="${tabId}methodTypeButton" class="${tabId}MethodType" onclick="return showDropdown('.${tabId}methodTypeDropdown')">POST</a>
                                    </div>
                                    <div class="dropdown right-dropdown ${tabId}methodTypeDropdown close">
                                        <ul>
                                            <li><a onclick="return setMethodType('${tabId}', 'POST')">POST</a></li>
                                            <li><a onclick="return setMethodType('${tabId}', 'GET')">GET</a></li>
                                            <li><a onclick="return setMethodType('${tabId}', 'DELETE')">DELETE</a></li>
                                            <li><a onclick="return setMethodType('${tabId}', 'OPTIONS')">OPTIONS</a></li>
                                            <li><a onclick="return setMethodType('${tabId}', 'PUT')">PUT</a></li>
                                            <li><a onclick="return setMethodType('${tabId}', 'PATCH')">PATCH</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <input class="${tabId}UrlInput" type="text" id="urlTextArea" placeholder="Enter request URL" />
                            </div>
                            <button onclick="return send(event, '${tabId}')">Send
                            <div id="${tabId}circleLoading" class="circle close">
                                <div class="circle-ring"></div>
                            </div>

                            </button>
                            <div class="btn-group">
                                <button class="bg-gray" onclick="return saveRequest('${tabId}')">
                                    Save
                                </button>
                                <button onclick="return showDropdown('.${tabId}btnDropdown')"><i class="icon-arrow-down"></i></button>
                                <div class="dropdown ${tabId}btnDropdown close" style="left: unset; right: 0;">
                                    <ul>
                                        <li><a onclick="return saveRequest('${tabId}', true)">Save As</a></li>
                                        <!--<li><a onclick="return deleteRequest('${tabId}')">Delete</a></li>-->
                                        <li><a onclick="return addToCollection('${tabId}')">Add to a collection</a></li>
                                        <li><a onclick="return removeReqFromCollection('${tabId}')">Remove from collection</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="postDataCnt">
                            <div class="tabs">
                                <ul class="tabul flex-wrap" style="display: flex;">
                                    <li data-name="authorization" class="tab ${tabId}postDataCntTab tab-active"><a>Authorization</a></li>
                                    <li data-name="headers" class="tab ${tabId}postDataCntTab"><a>Headers</a></li>
                                    <li data-name="body" class="tab ${tabId}postDataCntTab"><a>Body</a></li>
                                    <li data-name="params" class="tab ${tabId}postDataCntTab"><a>Params</a></li>
                                    <li data-name="tests" class="tab ${tabId}postDataCntTab"><a>Tests</a></li>
                                    <li data-name="prerequest" class="tab ${tabId}postDataCntTab"><a>Pre-Request</a></li>
                                    <li data-name="previewrequest" class="tab ${tabId}postDataCntTab"><a>Preview(Request)</a></li>
                                    <li data-name="visualizer" class="tab ${tabId}postDataCntTab"><a>Visualizer</a></li>
                                    <li data-name="more" class="tab ${tabId}postDataCntTab">
                                        <a>More</a>
                                    </li>
                                    <li style="flex-grow: 1;display: flex;justify-content: flex-end;align-items: center;">
                                        <span style="cursor: pointer;" title="Click to toggle Two-Side Column Layout" class="icon-screen-desktop" onclick="return toggleSideView(event, '${tabId}')"></span>
                                    </li>
                                </ul>
                                <div>
                                    <div data-name="authorization" class="tab-content ${tabId}postDataCntTabContent tab-content-active Authorization">
                                        ${createAuthTabs(tabId, "Request")}
                                    </div>
                                    <div data-name="headers" class="tab-content ${tabId}postDataCntTabContent Headers table-responsive">
                                        <table>
                                            <thead>
                                                <th></th>
                                                <th>KEY</th>
                                                <th>VALUE</th>
                                            </thead>
                                            <tbody id="${tabId}headersTr">
                                                <tr id="${tabId}headersLast">
                                                    <td></td>
                                                    <td class="headersTr">
                                                        <input id="${tabId}headersKey" type="text" placeholder="Key" onclick="return showDropdown('.${tabId}headersDropdown')" />
                                                        <div class="dropdown ${tabId}headersDropdown close">
                                                            <ul>
                                                                <li><a onclick="return addHeadersKey(event, ${tabId}headersKey)" onclick="">Accept</a></li>
                                                                <li><a onclick="return addHeadersKey(event, ${tabId}headersKey)">Content-Type</a></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td><input id="${tabId}headersValue" type="text" placeholder="Value" /></td>
                                                    <td><button onclick="return addHeaders(${tabId}headersKey, ${tabId}headersValue)">+</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div data-name="body" class="tab-content ${tabId}postDataCntTabContent Body">
                                        <div>
                                            <button style="position: relative;" onclick="return showDropdown('.${tabId}setBodyTypeDropdown')" class="bg-default color-white pad-6 pad-left-12 pad-right-12 btn-block">
                                                <span>Set Type: <span id="${tabId}setBodyType" data-value="form">Form</span> <span class="icon-arrow-down"></span></span>
                                                <div class="dropdown ${tabId}setBodyTypeDropdown close">
                                                    <ul>
                                                        <li><a onclick="return setBodyType('form', 'Form')">Form</a></li>
                                                        <li><a onclick="return setBodyType('graphql', 'GraphQL')">GraphQL</a></li>
                                                        <li><a onclick="return setBodyType('raw', 'Raw')">Raw</a></li>
                                                        <li><a onclick="return setBodyType('binary', 'Binary')">Binary</a></li>
                                                    </ul>
                                                </div>                            
                                            </button>
                                        </div>
                                        <div id="${tabId}Bodyform" class="table-responsive">
                                            ${createFormNode(tabId)}
                                        </div>
                                        <div id="${tabId}Bodygraphql" class="close">
                                            ${createGraphQLDisplay(tabId)}
                                        </div>
                                        <div id="${tabId}Bodyraw" class="close">
                                            ${createRawNode(tabId)}
                                        </div>
                                        <div id="${tabId}Bodybinary" class="close">
                                            ${createBinaryNode(tabId)}
                                        </div>
                                    </div>

                                    <div data-name="params" class="tab-content ${tabId}postDataCntTabContent Params table-responsive">
                                        <table>
                                            <thead>
                                                <th></th>
                                                <th>KEY</th>
                                                <th>VALUE</th>
                                            </thead>
                                            <tbody id="${tabId}paramsTr">
                                                <tr id="${tabId}paramsLast">
                                                    <td></td>
                                                    <td><input id="${tabId}paramsKey" type="text" placeholder="Key" /></td>
                                                    <td><input id="${tabId}paramsValue" type="text" placeholder="Value" /></td>
                                                    <td><button onclick="return addParams(${tabId}paramsKey, ${tabId}paramsValue)">+</button></td>
                                                    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div data-name="tests" class="tab-content ${tabId}postDataCntTabContent Tests">
                                        <div style="border: 1px solid rgb(221, 221, 221);" id="${tabId}postDataCntTabContentTestsEditor">
                                        </div>
                                        <!--<div>
                                            <textarea style="width: 100%; border: 1px solid rgb(221,75,57);" id="${tabId}TextTests"></textarea>
                                        </div>-->
                                    </div>
                                    <div data-name="prerequest" class="tab-content ${tabId}postDataCntTabContent Pre-Request">
                                        <div style="border: 1px solid rgb(221, 221, 221);" id="${tabId}postDataCntTabContentPreRequestScriptEditor">
                                        </div>
                                    </div>
                                    <div data-name="previewrequest" class="tab-content ${tabId}postDataCntTabContent PreviewRequest">
                                        <div>
                                            <button class="pad-6" style="position: relative;" onclick="return showDropdown('.${tabId}previewRequestDropdown')">
                                                <span id="${tabId}previewRequestCodeSnippet" data-value="nodejsAxios" data-mode="javascript">Nodejs(Axios)</span>
                                                <i style="padding-top: 2px;display: block;float: right;padding-left: 3px;" class="icon-arrow-down"></i>
                                                <div class="dropdown right-dropdown ${tabId}previewRequestDropdown close">
                                                    <ul>
                                                        <li><a onclick="return setCodeSnippet('nodejsAxios', 'Nodejs(Axios)', 'javascript')">Nodejs(Axios)</a></li>
                                                        <li><a onclick="return setCodeSnippet('curl', 'cURL', 'shell')">cURL</a></li>
                                                        <li><a onclick="return setCodeSnippet('fetch', 'Fetch', 'javascript')">Fetch</a></li>
                                                    </ul>
                                                </div>                                                                                    
                                            </button>
                                            <button class="pad-6 icon-reload" onclick="return setCodeSnippet()"></button>
                                            <button class="pad-6" onclick="return copyCodeSnippet(event)">Copy</button>
                                        </div>
                                        <div class="divider"></div>
                                        <div style="border: 1px solid rgb(221, 221, 221);" id="${tabId}postDataCntTabContentPreviewRequestEditor">
                                        </div>
                                    </div>
                                    <div data-name="visualizer" class="tab-content ${tabId}postDataCntTabContent Visualizer">
                                        <div style="border: 1px solid rgb(221, 221, 221);" id="${tabId}postDataCntTabContentVisualizerEditor">
                                        </div>
                                    </div>
                                    <div data-name="more" class="tab-content ${tabId}postDataCntTabContent More">
                                        <div class="tabs">
                                            <ul class="tabul responseViews">
                                                <li class="${tabId}moreViews tab tab-active" data-tab="${tabId}moreViews:options"><a>Options</a></li>
                                                <li class="${tabId}moreViews tab" data-tab="${tabId}moreViews:settings"><a>Settings</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div data-tab="${tabId}moreViews:options" class="${tabId}moreViews tab-content tab-content-active">
                                                <div style="padding: 10px 0;border-bottom: 1px solid rgb(221, 221, 221);">
                                                    <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>
                                                        This option will download the response of the request when successfull.
                                                    </p>
                                                    <input id="${tabId}downloadResponseOpt" type="checkbox" onchange="return setOptions(event, 'downloadres')" /> Download response
                                                </div>
                                                <div style="padding: 10px 0;border-bottom: 1px solid rgb(221, 221, 221);">
                                                    <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>
                                                        This will use the POSTly proxy server to proxy your request.
                                                    </p>
                                                    <input id="${tabId}useProxyOption" type="checkbox" onchange="return setOptions(event, 'useproxy')" /> Use proxy
                                                </div>
                                                <div style="padding: 10px 0;border-bottom: 1px solid rgb(221, 221, 221);">
                                                    <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>
                                                        This option will preview Image and Video response.
                                                    </p>
                                                    <input id="${tabId}previewImgVideoOpt" type="checkbox" onchange="return setOptions(event, 'previewimgvideo')" /> Preview(Image/Video)
                                                </div>
                                            </div>
                                            <div data-tab="${tabId}moreViews:settings" class="${tabId}moreViews tab-content">
                                                <div>
                                                    <div style="padding: 10px 0;border-bottom: 1px solid rgb(221, 221, 221);">
                                                        <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>
                                                            This defines the number of times a request retries itself when it errors out.
                                                        </p>
                                                        <div style="margin: 4px 0;">No of request retries:</div>
                                                        <input id="${tabId}noOfRequestRetries" type="text" placeholder="" />
                                                    </div>
                                                    <div style="padding: 10px 0;border-bottom: 1px solid rgb(221, 221, 221);">
                                                        <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>
                                                            This defines the maximum time for a request to timeout. This is very helful when a server takes long to return a response.
                                                        </p>
                                                        <div style="margin: 4px 0;">Request Timeout(ms):</div>
                                                        <input id="${tabId}requestTimeout" type="text" />
                                                    </div>
                                                    <div style="padding: 10px 0;border-bottom: 1px solid rgb(221, 221, 221);">
                                                        <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>
                                                            <strong>Max Redirects</strong> defines the maximum number of redirects to follow in node.js. If set to 0, no redirects will be followed.
                                                        </p>
                                                        <div style="margin: 4px 0;">Max Redirects:</div>
                                                        <input id="${tabId}maxRedirects" type="text" />
                                                    </div>
                                                    <div style="padding: 10px 0;border-bottom: 1px solid rgb(221, 221, 221);">
                                                        <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>
                                                            <strong>With Credentials</strong> indicates whether or not cross-site Access-Control requests should be made using credentials                                                        
                                                        </p>
                                                        <input id="${tabId}withCredentials" type="checkbox" onchange="return setOptions(event, 'withcredentials')" /> With Credentials
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ViewModeResponse">
                        <div class="response">
                            <h3 class="responseHeader">Response</h3>
                            <div id="display">
                            <div class="tabs">
                                <ul class="tabul responseTab flex-wrap">
                                    <li class="tab ${tabId}responseTab tab-active"><a onclick="return setResponseTab(event, '${tabId}', 'Body')">Body</a></li>
                                    <li class="tab ${tabId}responseTab"><a onclick="return setResponseTab(event, '${tabId}', 'Headers')">Headers</a></li>
                                    <li class="tab ${tabId}responseTab"><a onclick="return setResponseTab(event, '${tabId}', 'Tests')">Tests</a></li>
                                    <li class="${tabId}responseStats">
                                        <div class="float-right" style="display: flex;text-align: center;align-items: center;">Status: 
                                            <span style="margin: 0 2px;white-space: nowrap;" class="<!--bg-green--> color-white bd-rad-3 pad-3 ${tabId}responseStatus close"></span>
                                            <span style="white-space: nowrap;" class="<!--bg-green--> color-white bd-rad-3 pad-3 ${tabId}responseStatusText close"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                                <div>
                                    <div class="tab-content ${tabId}responseTabContent tab-content-active Body">
                                        <!--Response Body-->

                                        <div class="tabs" style="display: flex;align-items: center; border-bottom: unset;">
                                            <ul class="tabul responseViews" style=" border-bottom: unset;">
                                                <li class="${tabId}response tab tab-active" data-tab="${tabId}response:prettier"><a onclick="return refreshDisplay('Prettier')">Prettier</a></li>
                                                <li class="${tabId}response tab" data-tab="${tabId}response:raw"><a onclick="return refreshDisplay('Raw')">Raw</a></li>
                                                <li class="${tabId}response tab" data-tab="${tabId}response:preview"><a >Preview</a></li>
                                                <li class="${tabId}response tab" data-tab="${tabId}response:visualizerpreview"><a >Visualizer(Preview)</a></li>
                                            </ul>
                                            <ul class="tabul" style="margin-left: 2px; border-bottom: unset;">
                                                <li class="tab"><a onclick="return copyResponse(event, '${tabId}')" class="icon-docs" title="Copy response to Clipboard."></a></li>
                                                <li class="tab"><a onclick="return downloadResponseBtn(event, '${tabId}')" class="icon-cloud-download" title="Download response."></a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div data-tab="${tabId}response:prettier" class="${tabId}response tab-content tab-content-active">
                                                <div style="border: 1px solid rgb(221, 221, 221);" class="${tabId}responsePrettierDisplay"></div>
                                            </div>
                                            <div data-tab="${tabId}response:raw" class="${tabId}response tab-content">
                                                <div style="border: 1px solid rgb(221, 221, 221);" class="${tabId}responseRawDisplay"></div>
                                            </div>
                                            <div data-tab="${tabId}response:preview" class="${tabId}response tab-content">
                                                <div class="${tabId}responsePreviewDisplay">
                                                    <iframe class="previewFrame" id="${tabId}responsePreviewIframe"></iframe>
                                                </div>
                                            </div>
                                            <div data-tab="${tabId}response:visualizerpreview" class="${tabId}response tab-content">
                                                <div class="${tabId}responseVisualizerPreviewDisplay">
                                                    <iframe class="previewFrame" id="${tabId}responseVisualizerPreviewIframe"></iframe>
                                                </div>
                                            </div>
                                        </div>

                                        <!--Response Body-->
                                    </div>
                                    <div class="tab-content ${tabId}responseTabContent Headers">
                                        <!--Response Headers-->
                                    </div>
                                    <div class="tab-content ${tabId}responseTabContent Tests">
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
    `
    return newtab
}

function toggleSideView(event, tabId) {
    var node = getFromWindow(`${tabId}ViewMode`)
    node.classList.toggle("ViewModeTwoSideCol")
}

function copyResponse(evt, tabId) {
    var resEditor = getCodeEditor(tabId, `${tabId}responsePrettierDisplay`)
    navigator.clipboard.writeText(resEditor.getValue()).then(text => {
        displayNotif("Copied!!", {type: "success"})
    }).catch(err => {
        displayNotif("Error occured while attempting to copy the response", { type: "danger" })
    })
}

function downloadResponseBtn(evt, tabId) {
    var resEditor = getCodeEditor(tabId, `${tabId}responsePrettierDisplay`)
    if (resEditor) {
        var data = resEditor.getValue()
        /*
        var currTab = getCurrTab()
        var res = currTab.response || false
        var type = res.headers["content-type"] || undefined
        */

        var aNode = document.createElement("a")
        aNode.href = URL.createObjectURL(new Blob([data], { type: "text/plain" }))
        aNode.download = Date.now() + "response.txt"
        aNode.click()
    }
}
function send(event, tabId) {
    var dom = event.target
    dom.innerText = ""
    dom.setAttribute("disabled", null)
    dom.innerHTML = `
        <div id="${tabId}circleLoading" class="circle close">
            <div class="circle-ring"></div>
        </div>
    `
    window[`${tabId}circleLoading`].classList.toggle("close")

    var bdy = {}
    var headers = {}
    var params = ""
    var authorization = ""

    var METHOD = getMETHOD(tabId)
    var url = document.querySelector(`.${tabId}UrlInput`).value

    url = parseVarsAndReplace(url)
    url = processUrl(url)

    try {
        // process body
        if(postData[tabId].body) {
            bdy = bodyBuilder(postData[tabId].body)
        }
    } catch(e) {}

    try {
        // process headers
        if(postData[tabId].headers) {
            postData[tabId].headers.forEach(header => {
                headers[parseVarsAndReplace(header.key)] = parseVarsAndReplace(header.value)
            })
        }
    } catch(e) {}

    try {
        // process params. /:3000?q=90&s=nnamdi
        if(postData[tabId].params) {
            if(postData[tabId].params.length > 0) {
                url = buildParamsToUrl(postData[tabId].params, url)
                /*
                url += "?"
                postData[tabId].params.forEach(param => {
                    params += parseVarsAndReplace(param.key) + "=" + parseVarsAndReplace(param.value) + "&"
                })
                url += params */
                // postData[tabId].url = url
            }
        }
    } catch(e) {}

    try {
        if(postData[tabId].authorization) {
            if(postData[tabId].authorization.type == "APIKey") {
                url += generateAuth(headers, url, tabId, "Request")
            } else {
                headers["Authorization"] = generateAuth(headers, url, tabId, "Request")
            }
        }
    } catch (e) {}

    // check for mocking
    if(mockCalls && currentMockServer) {
        mockCall({
            method: METHOD.toLowerCase(),
            url: url,
            data: bdy,
            headers            
        }, tabId, event)
        return
    }

    // create an instance of axios
    var axiosInst = axios.create({
        timeout: getFromWindow(`${tabId}requestTimeout`).value || 0
    });

    // Set pre-request script
    setPreRequest(axiosInst)

    // Set pre-response
    axiosInst.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        // error.response - error response
        // error.request - instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
        processResponseError(error.request, tabId, event)
        return Promise.reject(error);
    });

    // before sending a request, we have to parse the Env variables to
    // replace them with their actual values.

    // set proxy if available
    if(postData[currentTab].options && postData[currentTab].options.useproxy) {
        switch (METHOD.toLowerCase()) {
            case "get":
                /*var v = new URL(url)
                v.searchParams.append("proxyUrl", url) */
                url = proxyUrl + "?proxyUrl=" + url
                break;
            default:
                break;
        }
    }

    axiosInst({
        method: METHOD.toLowerCase(),
        url: url,
        data: bdy,
        headers,
        maxRedirects: getFromWindow(`${tabId}maxRedirects`).value || 0,
        withCredentials: postData.withcredentials || false
    }).then( res => {
        processResponse(res, tabId, event)
    }).catch(e => {
        // process error response
    })
}

function addPostData() {
    var key = postDataKey.value
    var value = postDataValue.value
    var id = `postData${Date.now()}`
    var delButton = `<button onclick="delPostData(${id})">Del</button>`
    postDataDiv.innerHTML = postDataDiv.innerHTML + `<div id=${id}><span>${key}</span> <span>${value}</span> ${delButton}</div>`;
    postData.push({ id, key, value })

    postDataKey.value = ""
    postDataValue.value = ""
}

function getMETHOD(tabId) {
    return postData[tabId].methodType
}

function delPostData(domEl) {
    // remove from postData array
    var id = domEl.id
    postData = postData.filter(p => p.id !== id)

    // remove from DOM
    var pDom = domEl.parentNode;
    pDom.removeChild(domEl)
    console.log(domEl)
}

function setMethodType(tabId, method) {
    window[`${tabId}methodTypeButton`].innerText = method
    postData[tabId].methodType = method
    window[`${tabId}TabMethod`].innerHTML = method
    showDropdown("." + tabId + "methodTypeDropdown")
}

function addBody(bodyKey, bodyValue, r, r_id) {
    // log(bodyKey, bodyValue)
    if(!bodyKey.value.length > 0 || !bodyValue.value.length > 0)
        return

    var id = r_id ? r_id : "bodyForm" + Date.now()
    var data = {
        id,
        "key": bodyKey.value,
        "value": bodyValue.value        
    }

    var h = `
        <td><input type="checkbox" checked=true onchange="return toggleOpt(event, '${id}', 'form', '${bodyKey.value}', '${bodyValue.value}')" /></td>
        <td>${bodyKey.value}</td>
        <td>${bodyValue.value}</td>
        <td><button onclick="return delBody('${id}')">x</button></td>    
    `
    var tr = document.createElement("tr")
    tr.setAttribute("id", id)
    tr.innerHTML = h

    if(!r)
        postData[currentTab].body.form.push(data)

    bodyKey.value = ""
    bodyValue.value = ""

    window[`${currentTab}bodyTr`].insertBefore(tr, window[`${currentTab}bodyLast`]);
}

function delBody(id) {
    var res = postData[currentTab].body.form.filter(bdy => {
        return bdy.id !== id
    })

    postData[currentTab].body.form = res

    window[`${currentTab}bodyTr`].removeChild(window[id])
}

function addHeadersKey(evt, hdrsKey) {
    hdrsKey.value = evt.target.innerText
    showDropdown(`.${currentTab}headersDropdown`)
}

function addHeaders(hdrsKey, hdrsValue, r, r_id) {
    if(!hdrsKey.value.length > 0 || !hdrsValue.value.length > 0)
        return

    var id = r_id ? r_id : "headers" + Date.now()

    var hdrsKeyValue = hdrsKey.value
    var hdrsValueValue = hdrsValue.value

    var h = `
            <td><input type="checkbox" checked=true onchange="return toggleOpt(event, '${id}', 'headers', '${hdrsKeyValue}', '${hdrsValueValue}')" /></td>
            <td>${hdrsKeyValue}</td>
            <td>${hdrsValueValue}</td>
            <td><button onclick="return delHeaders('${id}')">x</button></td>
    `
    var tr = document.createElement("tr")
    tr.setAttribute("id", id)
    tr.innerHTML = h

    if (!r) {
        postData[currentTab].headers.push({
            "id": id,
            "key": hdrsKey.value,
            "value": hdrsValue.value
        })        
    }

    hdrsKey.value = ""
    hdrsValue.value = ""

    window[`${currentTab}headersTr`].insertBefore(tr, window[`${currentTab}headersLast`]);
}

function delHeaders(id) {
    var res = postData[currentTab].headers.filter(header => {
        return header.id !== id
    })

    postData[currentTab].headers = res

    window[`${currentTab}headersTr`].removeChild(window[id])
}

function addParams(paramsKey, paramsValue, r, r_id) {
    if(!paramsKey.value.length > 0 || !paramsValue.value.length > 0)
        return

    var id = r_id ? r_id : "params" + Date.now()

    var h = `
            <td><input type="checkbox" checked=true onchange="return toggleOpt(event, '${id}', 'params', '${paramsKey.value}', '${paramsValue.value}')" /></td>
            <td>${paramsKey.value}</td>
            <td>${paramsValue.value}</td>
            <td><button onclick="return delParams('${id}')">x</button></td>
    `
    var tr = document.createElement("tr")
    tr.setAttribute("id", id)
    tr.innerHTML = h

    if (!r) {
        postData[currentTab].params.push({
            "id": id,
            "key": paramsKey.value,
            "value": paramsValue.value
        })            
    }

    paramsKey.value = ""
    paramsValue.value = ""

    window[`${currentTab}paramsTr`].insertBefore(tr, window[`${currentTab}paramsLast`]);
}

function delParams(id) {
    var res = postData[currentTab].params.filter(param => {
        return param.id !== id
    })

    postData[currentTab].params = res

    window[`${currentTab}paramsTr`].removeChild(window[id])
}

function setResponseHeaders(headers, tabId) {
    if(headers) {
        // set response headers
        var responseHeadersHtml = ""
        for (var key in headers) {
            responseHeadersHtml += `<tr><td>${key}</td><td>${headers[key]}</td></tr>`
        }

        // Set response headers to postly
        // postly.headers = headers

        var responseHeadersHtmlFinal = `
            <table>
                ${responseHeadersHtml}
            </table>
        `
        document.querySelector(`.${tabId}responseTabContent.Headers`).innerHTML = responseHeadersHtmlFinal
    }
}

function setResponseStatus(status, tabId) {
    if(status) {
        // set response status
        var statusNode = document.querySelector(`.${tabId}responseStatus`)
        statusNode.innerHTML = status
        var bgColor

        // set postly responseCode
        // postly.responseCode = status

        status = status.toString()

        switch (status) {
            case "200":
                bgColor = "bg-green"
                break;    
            default:
                bgColor = "bg-default"
                break;
        }
        statusNode.classList.add(bgColor)
        statusNode.classList.remove("close")
    }
}

function setResponseStatusText(statusText, tabId) {
    if(statusText) {
        // set response status text
        var statusNode = document.querySelector(`.${tabId}responseStatusText`)
        statusNode.innerHTML = statusText

        // set postly responseCodeText
        // postly.responseCodeText = statusText

        statusNode.classList.add("bg-default")
        statusNode.classList.remove("close")
    }
}

function processResponse(res, tabId, event) {
    try {
        // set response headers
        setResponseHeaders(res.headers, tabId)

        // set response status
        setResponseStatus(res.status, tabId)

        // set response status text
        setResponseStatusText(res.statusText, tabId)

        var data = res.data
        // set postly data
        /*
        postly.config = res
        postly.response = data
        */

        setDisplay(data, res, false)
        if(postData[currentTab].options && postData[currentTab].options.downloadres) {
            downloadResponse(data, res)
        }
        var api = setPostlyAPI(res)
        setResponseToPostData(res)

        runTests(res, tabId, event, api)
        runVisualizer(res, tabId, api)

        var dom = event.target
        dom.removeAttribute("disabled")
        window[`${tabId}circleLoading`].classList.toggle("close")
        dom.innerText = "Send"        
    } catch (error) {

        setDisplay(error.toString(), error, true)
        var dom = event.target
        dom.removeAttribute("disabled")
        window[`${tabId}circleLoading`].classList.toggle("close")
        dom.innerText = "Send"                
    }
}

function processResponseError(e, tabId, event) {
    var dom = event.target
    dom.removeAttribute("disabled")
    window[`${tabId}circleLoading`].classList.toggle("close")
    dom.innerText = "Send"

    // set repsonse status
    setResponseStatus(e.status, tabId)
    setResponseStatusText(e.statusText, tabId)

    setDisplay(e.response, e, true)
    var api = setPostlyAPI(e)
    setResponseToPostData(e)

    runTests(e, tabId, event, api)
 }

 function toggleOpt(event, id, opt, optKey, optValue) {
    var targ = event.target
    var pD
    if(opt == "form")
        pD = postData[currentTab].body[opts]
    else
        pD = postData[currentTab][opt]

    // log(id, optKey, optValue)

    if(targ.checked == false) {
        targ.checked = false
        targ.setAttribute("checked", false)
        var res = pD.filter(bdy => {
            return bdy.id !== id
        })
        pD = res
    }
    else {
        pD.push({
            id,
            "key": optKey,
            "value": optValue
        })
        targ.checked = true
        targ.setAttribute("checked", true)
    }
}

function runTests(res, tabId, event, api) {
    if(currentEditors[currentTab]["tests"]) {
        var testScript = currentEditors[currentTab]["tests"].getValue()

        var testResult = testF(testScript, api)
        // log(testResult)
        displayTest(testResult)
    }
}

function handleResponseType(data, res) {
        var resData = {
            prettyData: data,
            rawData: data
        }

        if(res.headers && res.headers["content-type"]) {
            var contentType = res.headers["content-type"]
            if(contentType) {
                contentType = contentType.split(";")[0]
                switch (contentType) {
                    case "application/json":
                        resData.prettyData = objToStr(data, true)
                        resData.rawData = objToStr(data)
                        break;            
                    case "application/pdf":
                        resData = {
                            originalData: data,
                            prettyData: "This response is a PDF file. Use the 'Download response' \n" + 
                            "option to download the file or use the 'preview(Video/Image)' to preview this file.",
                            rawData: ""
                        }
                        break;
                    case "image/jpeg":
                    case "image/png":
                    case "image/jpg":
                    case "image/gif":
                        resData = {
                            originalData: data,
                            prettyData: "This response is an Image file. Use the 'Download response' \n" + 
                            "option to download the file or use the 'preview(Video/Image)' to preview this file.",
                            rawData: ""
                        }
                        break;
                    case "video/mp4":
                    case "video/avi":
                    case "video/mkv":
                    case "video/mpg":
                        resData = {
                            originalData: data,
                            prettyData: "This response is an Video file. Use the 'Download response' \n" + 
                            "option to download the file or use the 'preview(Video/Image)' to preview this file.",
                            rawData: ""
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        return resData

        /*if(isArray(data) 
            || isArrayBuffer(data) 
            || isString(data)
            || isNumber(data)
            || isUndefined(data)
            || isObject(data)) {
            return objToStr(data)
        }
        if(isFile(data) 
            || isBlob(data)) {
            }*/
}

function setDisplay(data, res, err) {
        var tabId = currentTab
        var responsePrettierDisplay = document.querySelector(`.${tabId}responsePrettierDisplay`)

        var responseRawDisplay = document.querySelector(`.${tabId}responseRawDisplay`)
        var resData = handleResponseType(data, res)
        var prettyData = resData.prettyData
        var rawData = resData.rawData

        // Handle Prettier display
        if(!currentEditors[currentTab][`${tabId}responsePrettierDisplay`]) {
            // clear it first
            responsePrettierDisplay.innerHTML = ""
            currentEditors[currentTab][`${tabId}responsePrettierDisplay`] = setCodeEditor(responsePrettierDisplay, {
                value: prettyData, 
                lineNumbers: true, 
                tabSize: 2,
                mode: {
                    name: "javascript",
                    json: true
                },
                readOnly: true,
                lineWrapping: true,
                theme: "default",
                autoRefresh: true,

                foldGutter: true,
                gutters: [ "CodeMirror-linenumbers", "CodeMirror-foldgutter" ],
                extraKeys: { "Ctrl-Q": function(cm) { cm.foldCode(cm.getCursor()) } }
            })
        } else {
            currentEditors[currentTab][`${tabId}responsePrettierDisplay`].setValue(prettyData)
            currentEditors[currentTab][`${tabId}responsePrettierDisplay`].refresh()
        }
                    
        // Handle Raw display
        if(!currentEditors[currentTab][`${tabId}responseRawDisplay`]) {
            // clear it first
            responseRawDisplay.innerHTML = ""
            currentEditors[currentTab][`${tabId}responseRawDisplay`] = setCodeEditor(responseRawDisplay, {
                value: rawData, 
                lineNumbers: true, 
                tabSize: 2,
                readOnly: true,
                lineWrapping: true,
                mode: null,
                autoRefresh: true
            })
        } else {
            currentEditors[currentTab][`${tabId}responseRawDisplay`].setValue(rawData)
            currentEditors[currentTab][`${tabId}responseRawDisplay`].refresh()
        }
        setPreview(resData, res)
}

function refreshDisplay(ty) {
    switch (ty) {
        case "Raw":
            if(currentEditors[currentTab][`${currentTab}responseRawDisplay`]) {
                currentEditors[currentTab][`${currentTab}responseRawDisplay`].refresh()
            }
            break;
        case "Prettier":
            if(currentEditors[currentTab][`${currentTab}responsePrettierDisplay`]) {
                currentEditors[currentTab][`${currentTab}responsePrettierDisplay`].refresh()
            }
            break;
        default:
            break;
    }
}

function setPreview(resData, res) {
    var data
    var preview = document.querySelector(`.${currentTab}responsePreviewDisplay`)
    if(res.headers && res.headers["content-type"]) {
        var contentType = res.headers["content-type"]
        if(contentType) {
            contentType = contentType.split(";")[0]
            var iFrame = document.getElementById(`${currentTab}responsePreviewIframe`).contentWindow.document
            iFrame.open()
            var discreteType = contentType.split("/")[0]
            switch (contentType) {
                case "application/pdf":
                    if(postData[currentTab].options && postData[currentTab].options.previewimgvideo) {
                        data = resData.originalData
                    } else {
                        data = "This is a PDF file."
                    }
                    break;
                case "image/jpeg":
                case "image/png":
                case "image/jpg":
                case "image/gif":
                    if(postData[currentTab].options && postData[currentTab].options.previewimgvideo) {
                        // resData.originalData
                        // data = `<img src="data:${contentType};base64,${hexToBase64(resData.originalData)}" />`
                        data = `<img src="${res.config.url}" />`
                    } else {
                        data = `This is an Image file.`                    
                    }
                    break;
                case "video/mp4":
                case "video/avi":
                case "video/mkv":
                case "video/mpg":
                case "video/3gp":
                    if(postData[currentTab].options && postData[currentTab].options.previewimgvideo) {
                        data = `<video autoplay controls src="${res.config.url}"></video>`
                    } else {
                        data = `This is a Video file.`                    
                    }
                    break;
                default:
                    data = resData.prettyData
                    break;
            }
            iFrame.writeln(data)
            iFrame.close()
        }
    }
}

function downloadResponse(data, res) {
        var responseHeaders = res.headers
        var contentType = responseHeaders["content-type"]
        if(contentType) {
            contentType = contentType.split(";")[0]
            var aNode = document.createElement("a")            
            switch (contentType) {
                case "text/html":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".html"
                    break;
                case "application/json":
                    aNode.href = URL.createObjectURL(new Blob([objToStr(data)], {type: contentType}))
                    aNode.download = Date.now() + ".json"
                    break;            
                case "application/javascript":
                    aNode.href = URL.createObjectURL(new Blob([objToStr(data)], {type: contentType}))
                    aNode.download = Date.now() + ".js"
                    break;            
                case "application/pdf":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".pdf"
                    break;

                case "image/jpeg":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".jpeg"
                    break;
                case "image/png":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".png"
                    break;
                case "image/jpg":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".jpg"
                    break;
                case "image/gif":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".gif"
                    break;
                case "video/mp4":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".mp4"
                    break;
                case "video/avi":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".avi"
                    break;
                case "video/mkv":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".mkv"
                    break;
                case "video/mpg":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".mpg"
                    break;
                case "video/3gp":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".3gp"
                    break;

                default:
                    data = objToStr(data)
                    break;
            }
            aNode.click()
        }
}

function setResponseToPostData(res) {
    var currTab = getCurrTab()
    currTab.response = {}
    
    var data = res.data
    var headers = res.headers
    var status = res.status
    var statusText = res.statusText

    // set config
    // currTab.response.config = res.config

    currTab.response.data = data

    // set statusText
    currTab.response.statusText = statusText

    // set status
    currTab.response.status = status

    // Set response headers
    currTab.response.headers = headers
}
function historyItemClick(evt, tabId) {
    evt.stopPropagation()
    getHistory(tabId, (found, data) => {
        if (found) {
            createNewReqTab(evt, tabId, data)            
        }
    })
}

function toggleHistoryTabs(evt, what) {
    // remove active tab
    document.querySelector(`.tab.history.tab-active`)
        .classList.remove("tab-active")

    // activate tab clicked
    evt.target.parentNode
        .classList.add("tab-active")

    // remove active tab content
    document.querySelector(`.history.tab-content.tab-content-active`)
        .classList.remove("tab-content-active")

    // activate tab content clicked
    document.querySelector(`.history.${what}.tab-content`)
        .classList.add("tab-content-active")
}


function refreshHistoryTab() {
    document.querySelector(".history.historyUl")
        .innerHTML = "<div>Loading history data...</div>"
    
    // get all histories belonging to the current team
    getAllHistoryByTeamId(currentTeam.id, (done, res) => {
        //log("Loading history:",done, res)
        if(done) {
            var htmlStr = ""
            res.forEach(r => {
                var h = `
                    <li class="historyLi" onclick="return historyItemClick(event, '${r.tabId}')"><span class="historyItem historyItemMethodType color-orangered bd-rad-3 pd-2">${r.methodType}</span><span class="historyItemName">${r.name}</span></li>
                `
                htmlStr += h
            })
            document.querySelector(".history.historyUl")
                .innerHTML = htmlStr
        }
    })
}

function clearAllHistory() {
    if(confirm("You sure you want to clear all your history?")) {
        deleteAllHistory((done) => {
            if(done) {
                //log("done")
            } else {
                //log("Not done")
            }
            refreshHistoryTab()
        })
    }
}

// addNewTab(null, true)

function addNewTab(evt, first) {
    var id = "requestTab" + Date.now()

    var h = `<a onclick="return requestTabClick(event, '${id}')" class="mainTabName"><b id="${id}TabMethod">POST</b> <span id="${id}TabName">Untitled request</span></a><span><a class="mainTabClose" onclick="return removeTab(event, '${id}')">X</a></span>`
    var li = document.createElement("li")
    li.classList.add("mainTab")
    li.classList.add("mainTabActive")
    li.classList.add(`${id}MainTab`)
    // li.setAttribute("id", id)
    li.innerHTML = h 
    mainTab.appendChild(li)

    first = tabs.length <= 0 ? true:  false;

    if(first) {

    } else {
        var mainTabActiveNode = document.querySelector(".mainTabActive")
        mainTabActiveNode.classList.remove("mainTabActive")

        var mainTabContentActiveNode = document.querySelector(".mainTabContentActive")
        mainTabContentActiveNode.classList.remove("mainTabContentActive")
        // mainTabContentActiveNode.classList.add("close")
    }

    var divNode = document.createElement("div")
    divNode.classList.add("mainTabContent")
    divNode.classList.add("mainTabContentActive")
    divNode.setAttribute("id", id)
    divNode.innerHTML = createNewTab(id)

    tabContainer.appendChild(divNode)
    tabs.push(id)
    currentTab = id
    setTabsInRequestTab(currentTab);
    // setTabsInAuthTab(currentTab);
    setCurrentTabEditor(currentTab)
    setTabs()

    // populate postData
    postData[currentTab] = {
        url: document.querySelector(`.${currentTab}UrlInput`).value,
        methodType: window[`${currentTab}methodTypeButton`].innerText,
        body: {
            mode: "form",
            form: [],
            raw: {
                lang: "json",
                content: null
            },
            graphql: {
                query: null,
                variables: null
            },
            binary: null
        },
        params: [],
        headers: [],
        tabId: id,
        name: "Untitled request",
        options: {
            previewimgvideo: false,
            downloadres: false,
            useproxy: false
        }
    }
}

function requestTabClick(evt, tabId) {
    currentTab = tabId

    if(tabs.length > 1) {
        var node = document.querySelector(".mainTabContentActive")
        node.classList.remove("mainTabContentActive")
        // node.classList.add("close")

        var mainTabActiveNode = document.querySelector(".mainTabActive")
        mainTabActiveNode.classList.remove("mainTabActive")

        document.querySelector(`.${currentTab}MainTab`)
            .classList.add("mainTabActive")

        // window[tabId].classList.remove("close")
        window[tabId].classList.add("mainTabContentActive")
    }
}

// TODO
function removeTab(evt, tabId) {
    tabs = tabs.filter(tab => tab != tabId)

    mainTab.removeChild(document.querySelector(`.${tabId}MainTab`))

    tabContainer.removeChild(window[tabId])

    if(tabs.length > 0) {

        // remove all active tabs and contents
        var mainTabActiveNode = document.querySelector(".mainTabActive")
        if(mainTabActiveNode)
            mainTabActiveNode.classList.remove("mainTabActive")

        var mainTabContentActiveNode = document.querySelector(".mainTabContentActive")
        if(mainTabContentActiveNode)
            mainTabContentActiveNode.classList.remove("mainTabContentActive")

        // set the current tab all actives
        currentTab = tabs[0]
        var node = document.querySelector(`.${currentTab}MainTab`)

        node.classList.add("mainTabActive")
        // node.classList.remove("close")
        window[currentTab].classList.add("mainTabContentActive")
    }
    // remove from postData
    delete postData[tabId]
}

function setTabsInRequestTab(tabId) {
    var nodePostDataCntTab = document.querySelectorAll("." + tabId + "postDataCntTab")
    for (var i = 0; i < nodePostDataCntTab.length; i++) {
        var tab = nodePostDataCntTab[i]
        tab.addEventListener("click", postDataTabHandler)
    }
}

function postDataTabHandler(evt) {
    // get active tab
    var activeTab = document.querySelector(`.${currentTab}postDataCntTab.tab-active`)
    activeTab.classList.remove("tab-active")

    // switch tabs
    var newNode = evt.target.parentNode;
    newNode.classList.add("tab-active")

    // remove the already active tab content
    var d = `.${currentTab}postDataCntTabContent.tab-content-active`
    var tabName = newNode.dataset.name
    document.querySelector(`.${currentTab}postDataCntTabContent.tab-content-active`)
        .classList.remove("tab-content-active")

    // make the tab-content of the current selected tab active
    // log(`.${currentTab}postDataCntTabContent.tab-content`)
    var tabContents = document.querySelectorAll(`.${currentTab}postDataCntTabContent.tab-content`)
    for (var i = 0; i < tabContents.length; i++) {
        var t = tabContents[i]
        if(t.dataset.name == tabName) {
            t.classList.add("tab-content-active")
            break
        }
    }

    switch (tabName) {
        case "tests":
            // check Tests has been set for this tab
            if(!currentEditors[currentTab][tabName]) {
                var value = "// Write your tests in JavaScript here.\n"
                if(postData[currentTab].tests) {
                    value = postData[currentTab].tests
                }
                currentEditors[currentTab][tabName] = setCodeEditor(document.getElementById(`${currentTab}postDataCntTabContentTestsEditor`), {
                    value: value,
                    lineNumbers: true, 
                    tabSize: 2,
                    mode: {
                        name: "javascript"
                    },
                    lineWrapping: true,
                    theme: "default",
                    autoRefresh: true
                })
                if(postData[currentTab].tests) {
                    currentEditors[currentTab][tabName].testSet = true
                }
            } else {
                var testScript = postData[currentTab].tests || "// Write your tests in JavaScript here.\n"
                var testEditor = getCodeEditor(currentTab, "tests")
                if(!testEditor.testSet) {
                    testEditor.testSet = true
                    testEditor.setValue(testScript)
                }
            }
            break;
        case "prerequest":
            if(!currentEditors[currentTab][tabName]) {
                var value = "// Pre-request script(JavaScript) goes here.\n"
                if(postData[currentTab].prerequest) {
                    value = postData[currentTab].prerequest
                }
                currentEditors[currentTab][tabName] = setCodeEditor(document.getElementById(`${currentTab}postDataCntTabContentPreRequestScriptEditor`), {
                    value: value,
                    lineNumbers: true, 
                    tabSize: 2,
                    mode: {
                        name: "javascript"
                    },
                    lineWrapping: true,
                    theme: "default",
                    autoRefresh: true
                })
                if(postData[currentTab].prerequest) {
                    currentEditors[currentTab][tabName].prerequestSet = true
                }
            } else {
                var prerequestScript = postData[currentTab].prerequest || "// Pre-request script(JavaScript) goes here.\n"
                var prerequestEditor = getCodeEditor(currentTab, "prerequest")
                if(!prerequestEditor.prerequestSet) {
                    prerequestEditor.prerequestSet = true
                    prerequestEditor.setValue(prerequestScript)
                }
            }
        break;
        case "previewrequest":
        // set code snippet here
        // ${tabId}postDataCntTabContentPreviewRequestEditor
        // ${tabId}previewRequestCodeSnippet
        if(!currentEditors[currentTab][tabName]) {
            var code = generateCodeSnippet(document.getElementById(`${currentTab}previewRequestCodeSnippet`).dataset.value)
            currentEditors[currentTab][tabName] = setCodeEditor(document.getElementById(`${currentTab}postDataCntTabContentPreviewRequestEditor`), {
                value: code,
                lineNumbers: true, 
                readOnly: true,
                tabSize: 2,
                mode: {
                    name: "javascript"
                },
                lineWrapping: true,
                theme: "default",
                autoRefresh: true
            })
        }
        break;
        case "visualizer":
            if(!currentEditors[currentTab][tabName]) {
                var value = "// Write your Visualizer code here. \n"
                if(postData[currentTab].visualizer) {
                    value = postData[currentTab].visualizer
                }
                currentEditors[currentTab][tabName] = setCodeEditor(document.getElementById(`${currentTab}postDataCntTabContentVisualizerEditor`), {
                    value: value,
                    lineNumbers: true, 
                    tabSize: 2,
                    mode: {
                        name: "javascript"
                    },
                    lineWrapping: true,
                    theme: "default",
                    autoRefresh: true
                })
                if(postData[currentTab].visualizer) {
                    currentEditors[currentTab][tabName].visualizerSet = true
                }
            } else {
                var visualizerScript = postData[currentTab].visualizer || "// Write your Visualizer code here. \n"
                var visualizerEditor = getCodeEditor(currentTab, "visualizer")
                if(!visualizerEditor.visualizerSet) {
                    visualizerEditor.visualizerSet = true
                    visualizerEditor.setValue(visualizerScript)
                }
            }
            break;
        default:
            break;
    }
}

function createNewReqTab(evt, tabId, data) {
        // check if tabId exist in the tabs
        var tabExists = false
        tabs.filter(tab => {
            if(tab == tabId)
                tabExists = true
        })

        // log(data, tabs, tabExists)

        // if the tab exist, make it active
        if(tabExists) {
            currentTab = tabId
            var node = document.querySelector(".mainTabContentActive")
            node.classList.remove("mainTabContentActive")
            // node.classList.add("close")

            var mainTabActiveNode = document.querySelector(".mainTabActive")
            mainTabActiveNode.classList.remove("mainTabActive")

            document.querySelector(`.${currentTab}MainTab`)
                .classList.add("mainTabActive")

            // window[tabId].classList.remove("close")
            window[tabId].classList.add("mainTabContentActive")
        } else {
            // if the tab does not exist, add it to the tab and make it active
            var id = tabId
            var h = `<a onclick="return requestTabClick(event, '${id}')" class="mainTabName"><b id="${id}TabMethod">${data.methodType}</b> <span id="${id}TabName">${data.name}</span></a><span><a class="mainTabClose" onclick="return removeTab(event, '${id}')">X</a></span>`
            var li = document.createElement("li")
            li.classList.add("mainTab")
            li.classList.add("mainTabActive")
            li.classList.add(`${id}MainTab`)
            // li.setAttribute("id", id)
            li.innerHTML = h 
            mainTab.appendChild(li)

            var first = tabs.length == 0 ? true : false

            if(first) {

            } else {
                var mainTabActiveNode = document.querySelector(".mainTabActive")
                mainTabActiveNode.classList.remove("mainTabActive")

                var mainTabContentActiveNode = document.querySelector(".mainTabContentActive")
                mainTabContentActiveNode.classList.remove("mainTabContentActive")
                // mainTabContentActiveNode.classList.add("close")
            }

            var divNode = document.createElement("div")
            divNode.classList.add("mainTabContent")
            divNode.classList.add("mainTabContentActive")
            divNode.setAttribute("id", id)
            divNode.innerHTML = createNewTab(id)

            tabContainer.appendChild(divNode)
            tabs.push(id)
            currentTab = id
            setTabsInRequestTab(currentTab)
            // setTabsInAuthTab(currentTab)
            setCurrentTabEditor(currentTab)
            setTabs()

            // populate postData
            postData[currentTab] = data
            postData[currentTab].methodType = data.methodType /* window[`${currentTab}methodTypeButton`].innerText */
            postData[currentTab].tabId = id
            postData[currentTab].name = data.name // set the request name

            /*
            if(!postData[currentTab].body)
                postData[currentTab]["body"] = []
            
            */

            if(!postData[currentTab].params)
                postData[currentTab]["params"] = []
            if(!postData[currentTab].headers)
                postData[currentTab]["headers"] = []

            // TODO: set visualizer, tests and pre-request scripts
            if(postData[currentTab].tests) {
                // getCodeEditor(currentTab) = postData[currentTab].tests
            }
            // ${tabId}postDataCntTabContentVisualizerEditor
            // ${tabId}postDataCntTabContentPreRequestScriptEditor
            // ${tabId}postDataCntTabContentTestsEditor
            
            // TODO: set settings
            getFromWindow(`${tabId}requestTimeout`).value = postData.timeout || 0
            getFromWindow(`${tabId}noOfRequestRetries`).value = postData.retries || 0
            
            // set url
            document.querySelector(`.${tabId}UrlInput`).value = data.url

            // set method type
            window[`${tabId}methodTypeButton`].innerText = data.methodType

            // set options
            if(postData[currentTab].options) {
                getFromWindow(`${tabId}previewImgVideoOpt`).checked = postData[currentTab].options.previewimgvideo
                getFromWindow(`${tabId}downloadResponseOpt`).checked = postData[currentTab].options.downloadres
                getFromWindow(`${tabId}useProxyOption`).checked = postData[currentTab].options.useproxy
            }

            // add body   
            if(data.body.form) {
                data.body.form.forEach(function(bdy) {
                    window[`${tabId}bodyKey`].value = bdy.key
                    window[`${tabId}bodyValue`].value = bdy.value
                    addBody(window[`${tabId}bodyKey`], window[`${tabId}bodyValue`], true, bdy.id)
                });
            }         

            // add headers
            data.headers.forEach(function(header) {
                window[`${tabId}headersKey`].value = header.key
                window[`${tabId}headersValue`].value = header.value
                addHeaders(window[`${tabId}headersKey`], window[`${tabId}headersValue`], true, header.id)
            });

            // add params
            data.params.forEach(function(_param) {
                window[`${tabId}paramsKey`].value = _param.key
                window[`${tabId}paramsValue`].value = _param.value
                addParams(window[`${tabId}paramsKey`], window[`${tabId}paramsValue`], true, _param.id)
            });            
        }
}

function setResponseTab(event, tabId, what) {
    // make the response tab active

    // remove the active response tab
    document.querySelector(`.${tabId}responseTab.tab-active`)
        .classList.remove("tab-active")

    // make the clicked tab active
    event.target.parentNode.classList.add("tab-active")

    // remove the active resonse tab content
    document.querySelector(`.tab-content.${tabId}responseTabContent.tab-content-active`)
        .classList.remove("tab-content-active")

    // make the cliked tab content active
    document.querySelector(`.tab-content.${tabId}responseTabContent.${what}`)
        .classList.add("tab-content-active")
}

/**
 * Fired from "Save" button in the request builder.
 * @param {*} tabId 
 * @param {*} openModal 
 */
function saveRequest(tabId, openModal) {
    if(openModal)
        attachSaveModal()
        /*document.querySelector(".saveModal")
            .classList.toggle("close") */
    else {

        collectAllRequestData(tabId)
        /*
        // collect all data
        postData[tabId].url = document.querySelector(`.${currentTab}UrlInput`).value
        postData[tabId].teamId = currentTeam.id

        // collection test, pre-request script, and visualizer
        var testsEditor = getCodeEditor(tabId, "tests")
        var prerequestEditor = getCodeEditor(tabId, "prerequest")
        var visualizerEditor = getCodeEditor(tabId, "visualizer")
        if(testsEditor) {
            postData[tabId].tests = testsEditor.getValue()
        }
        if(prerequestEditor) {
            postData[tabId].prerequest = prerequestEditor.getValue()
        }
        if(visualizerEditor) {
            postData[tabId].visualizer = visualizerEditor.getValue()
        }

        if(!postData[currentTab].requestId) {
            postData[currentTab].requestId = "requestId" + Date.now()
        }
        */

        // check if the request belongs to a collection
        if(!postData[currentTab].collectionId) {
            // if not display a add to collection modal
            addToCollection(tabId)
        } else {
            if(!checkTeamIsPersonal()) {
                // edit request on server
                axios.post(url + "").then(res => {

                })
            } else {
                updateRequest(postData[currentTab], (done, res) => {
                    log("saveRequest:",done, res)
                    if(done) {
                        
                    }
                })
            }
            refreshCollections()
        }
        getHistory(currentTab, (found, data) => {
            if(found == false) {
                addHistory({
                    teamId: postData[currentTab].teamId, 
                    tabId: postData[currentTab].tabId, 
                    requestId: postData[currentTab].requestId 
                }, (done, addedData) => {
                    if(done == true) {
                        //log("Added Data:", addedData)
                    }
                })
            } else {
                // update record
                updateHistory({
                    teamId: postData[currentTab].teamId, 
                    tabId: postData[currentTab].tabId, 
                    requestId: postData[currentTab].requestId                     
                }, (done, updateData) => {
                    if(done == true) {
                        //log("Updated Data:", updateData)
                    }
                })
            }
            window[`${currentTab}TabName`].innerHTML = postData[currentTab].name
            window[`${currentTab}TabMethod`].innerHTML = postData[currentTab].methodType

            refreshHistoryTab()
        })
    }
}

/**
 * Fired from "Save As" option in the request builder.
 * @param {*} evt 
 */
function saveRequestUrlName(evt) {
    var tabId = currentTab
    var requestName = requestUrlName.value
    if(requestName.length <= 0) {
        modalRequestError.innerHTML = "Please, enter a request name."
        modalRequestError.classList.remove("close")
        return;
    }
    evt.target.innerText = "saving..."
    evt.target.setAttribute("disabled", null)

    postData[currentTab]["name"] = requestName
    collectAllRequestData(currentTab)
    /*
    if(!postData[currentTab].requestId) {
        postData[currentTab].requestId = "requestId" + Date.now()
    }

    // TODO: gather all the tests and pre-request scripts.

    postData[currentTab]["teamId"] = currentTeam.id
    postData[currentTab]["name"] = requestName

    // collection test, pre-request script, and visualizer
    var testsEditor = getCodeEditor(tabId, "tests")
    var prerequestEditor = getCodeEditor(tabId, "prerequest")
    var visualizerEditor = getCodeEditor(tabId, "visualizer")
    if(testsEditor) {
        postData[tabId].tests = testsEditor.getValue()
    }
    if(prerequestEditor) {
        postData[tabId].prerequest = prerequestEditor.getValue()
    }
    if(visualizerEditor) {
        postData[tabId].visualizer = visualizerEditor.getValue()
    }

    postData[currentTab].url = document.querySelector(`.${currentTab}UrlInput`).value

    if(selectedColId) {
        postData[currentTab]["collectionId"] = selectedColId
    }
    */

    if(!checkTeamIsPersonal()) {
        // edit request on server
        axios.post(url + "").then(res => {

        })
    } else {
        updateRequest(postData[currentTab], (done, res) => {
            log(done, res)
            if(done) {
                
            }
            // reset the modal    
            evt.target.innerText = "Save"
            evt.target.removeAttribute("disabled")

            modalRequestError.innerHTML = ""
            modalRequestError.classList.add("close")
            requestUrlName.value = ""
            refreshCollections()
            window[`${currentTab}TabName`].innerHTML = requestName
            window[`${currentTab}TabMethod`].innerHTML = postData[currentTab].methodType
        })
    }

    // update and refresh history
    getHistory(currentTab, (found, data) => {
        if(found == false) {
            // log("Adding history")
            addHistory({
                    teamId: postData[currentTab].teamId, 
                    tabId: postData[currentTab].tabId, 
                    requestId: postData[currentTab].requestId 
            }, (done, addedData) => {
                    if(done == true) {
                        // log("Added Data:", updateData)
                    }
                })
        } else {
            // update record
            // log("Updating history")
            updateHistory({
                    teamId: postData[currentTab].teamId, 
                    tabId: postData[currentTab].tabId, 
                    requestId: postData[currentTab].requestId 
            }, (done, updateData) => {
                    if(done == true) {
                        // log("Updated Data:", updateData)
                    }
                })
        }
        window[`${currentTab}TabName`].innerHTML = requestName
        window[`${currentTab}TabMethod`].innerHTML = postData[currentTab].methodType
        refreshHistoryTab()
    })
}

function collectAllRequestData(tabId) {
    if(!postData[currentTab].requestId) {
        postData[currentTab].requestId = "requestId" + Date.now()
    }

    // TODO: gather all the tests and pre-request scripts.

    postData[currentTab]["teamId"] = currentTeam.id

    // collect all data
    postData[tabId].url = document.querySelector(`.${currentTab}UrlInput`).value
    postData[tabId].teamId = currentTeam.id

    // collection test, pre-request script, and visualizer
    var testsEditor = getCodeEditor(tabId, "tests")
    var prerequestEditor = getCodeEditor(tabId, "prerequest")
    var visualizerEditor = getCodeEditor(tabId, "visualizer")
    if(testsEditor) {
        postData[tabId].tests = testsEditor.getValue()
    }
    if(prerequestEditor) {
        postData[tabId].prerequest = prerequestEditor.getValue()
    }
    if(visualizerEditor) {
        postData[tabId].visualizer = visualizerEditor.getValue()
    }

    if(!postData[currentTab].requestId) {
        postData[currentTab].requestId = "requestId" + Date.now()
    }

    if(selectedColId) {
        postData[currentTab]["collectionId"] = selectedColId
    }

    setBodyForSave()
}
function Request() {
    this.body = {}
    this.headers = {}
    this.params = ""
    this.authorization = ""
    this.url = ""
    this.method = ""
}

Request.prototype.addHeaders = function (params) {
    
}

Request.prototype.addParams = function (params) {
    
}

Request.prototype.addBody = function (params) {
    
}

Request.prototype.setUrl = function name(params) {
    
}

function processUrl(url) {
    if(url.startsWith("localhost:")) {
        url = "http://" + url
    } else if(!url.startsWith("http://")) {
        if(!url.startsWith("https://")) {
            url = "https://" + url
        }
    }
    return url
}

function makeRequest(req, mockCall, cb) {
    var url = processUrl(req.url)
    var body = bodyBuilder(req.body)
    var headers = req.headers
    var method = req.methodType.toLowerCase()
    var params = buildParams(req.params)
    
    // create an instance of axios
    var axiosInst = axios.create(/*{
        timeout: 10000
    }*/);

    // Set pre-request script

    // Set pre-response
    axiosInst.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        // error.response - error response
        // error.request - instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        cb(error)
        return Promise.reject(error);
    });

    // before sending a request, we have to parse the Env variables to
    // replace them with their actual values.

    axiosInst({
        method,
        url,
        data: body,
        headers,
        params
    }).then( res => {
        cb(res)
    }).catch(e => {
        // process error response
    })
}
function newEnvTab(tabId) {
    return `
        <div>
            <h2 class="lightWeight">Create New Environment</h2>
            <div>
                <div style="margin: 9px 0;">
                    <input type="text" id="${tabId}EnvName" placeholder="Environment name" />
                    <button class="pad-6" onclick="createEnvName(event)">Create Env</button>
                </div>
                <div class="divider"></div>

                <div style="margin: 9px 0;">
                    <div style="display:flex; justify-content: space-evenly;">
                        <div class="EnvList">
                            <h3 class="lightWeight">All Envs</h3>
                            <ul id="${tabId}EnvsList">
                                <li class="EnvListItem">
                                    <div style="width: 100%; display: flex; align-items: center;" >
                                        <a style="padding: 0.4em 0.1em;">Prod</a><span class="icon-check color-default"></span>
                                    </div>
                                    <span class="icon-options" style="float: right; padding: 4px; position: relative;" onclick="return showDropdown('.${tabId}envOptionsDropdown')">
                                                <div class="dropdown ${tabId}envOptionsDropdown close" style="left: unset; right: 0;">
                                                    <ul>
                                                        <li><a onclick="return renameCollectionModal('')">Rename</a></li>
                                                        <li><a onclick="return deleteCollection('')">Delete</a></li>
                                                    </ul>
                                                </div>                        
                                    </span>
                                </li>
                                <li class="EnvListItem">
                                    <div style="width: 100%; display: flex; align-items: center;" >
                                        <a style="padding: 0.4em 0.1em;">Dev</a>
                                    </div>
                                    <span class="icon-options" style="float: right; padding: 4px; position: relative;" onclick="return showDropdown('.${tabId}envOptionsDropdown')">
                                                <div class="dropdown ${tabId}envOptionsDropdown close" style="left: unset; right: 0;">
                                                    <ul>
                                                        <li><a onclick="return renameCollectionModal('')">Rename</a></li>
                                                        <li><a onclick="return deleteCollection('')">Delete</a></li>
                                                    </ul>
                                                </div>                        
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div class="EnvVarsList">
                            <div style="white-space: nowrap;display: flex;justify-content: space-between;align-items: center;">
                                <span><h3 class="lightWeight">Variables</h3></span>
                                <span><button onclick="return createVarModal(event)">Create Variable</button></span>
                            </div>
                            <table>
                                <thead>
                                    <th>NAME</th>
                                    <th>VALUE</th>
                                    <th>ACTIONS</th>
                                </thead>
                                <tbody id="${tabId}EnvVarsList">
                                    <!--<tr>                                        
                                        <td><span>base_url</span></td>
                                        <td><span>localhost:5000/api/</span></td>
                                        <td style="box-sizing: border-box;display: flex;">  
                                            <span class="icon-note" style="padding: 0.3em;display: block;"></span>
                                            <span class="icon-trash" style="padding: 0.3em;display: block;"></span>
                                        </td>
                                    </tr>-->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    `
}

function createNewEnvTab() {
    // check type of Env already exist.
    var tabExist = false
    var tabExistId
    for (var index = 0; index < tabs.length; index++) {
        var tab = tabs[index];
        if(postData[tab] && postData[tab].type) {
            if(postData[tab].type == "New Env") {
                tabExist = true
                tabExistId = postData[tab].id
            }            
        }
    }

    if(tabExist){
        requestTabClick(null, tabExistId)
        return
    }
    var id = "requestTab" + Date.now()

    var h = `<a onclick="return requestTabClick(event, '${id}')" class="mainTabName">
    <b id="${id}TabMethod" class="icon-grid"></b> <span id="${id}TabName">Create New Env</span></a>
    <span><a class="mainTabClose" onclick="return removeTab(event, '${id}')">X</a></span>`

    var li = document.createElement("li")
    li.classList.add("mainTab")
    li.classList.add("mainTabActive")
    li.classList.add(`${id}MainTab`)
    // li.setAttribute("id", id)
    li.innerHTML = h 
    mainTab.appendChild(li)

    first = tabs.length <= 0 ? true:  false;

    if(first) {

    } else {
        var mainTabActiveNode = document.querySelector(".mainTabActive")
        mainTabActiveNode.classList.remove("mainTabActive")

        var mainTabContentActiveNode = document.querySelector(".mainTabContentActive")
        mainTabContentActiveNode.classList.remove("mainTabContentActive")
        // mainTabContentActiveNode.classList.add("close")
    }

    var divNode = document.createElement("div")
    divNode.classList.add("mainTabContent")
    divNode.classList.add("mainTabContentActive")
    divNode.setAttribute("id", id)
    divNode.innerHTML = newEnvTab(id)

    tabContainer.appendChild(divNode)
    tabs.push(id)
    currentTab = id
    setTabsInRequestTab(currentTab);
    setTabsInAuthTab(currentTab);
    setCurrentTabEditor(currentTab)

    // populate postData
    postData[currentTab] = {
        id: id,
        type: "New Env"
    }
    refreshEnvs()
}

function createGlobalEnv() {
    if(checkTeamIsPersonal()) {
        addEnvIdb({
            EnvId: "__globalEnv",
            name: "Global",
            vars: []
        }, (done, newEnv) => {
            // log(done, newEnv)
            // refreshEnvs()
        })
    } else {
        // network
    }
}

function createEnvName(evt) {
    evt.target.innerHTML = "Creating..."
    evt.target.setAttribute("disabled", null)

    if(getFromWindow(`${currentTab}EnvName`).value.length <= 0) {
        return
    }
    log(getFromWindow(`${currentTab}EnvName`).value)
    if(checkTeamIsPersonal()) {
        addEnvIdb({
            EnvId: "Env" + Date.now(),
            name: getFromWindow(`${currentTab}EnvName`).value,
            vars: []
        }, (done, newEnv) => {
            log(done, newEnv)
            refreshEnvs()
        })
    } else {
        // network
    }
    evt.target.innerHTML = "Create Env"
    evt.target.removeAttribute("disabled")
    refreshEnvs()
}

function refreshEnvs() {
    if(checkTeamIsPersonal()) {
        refreshEnvsIdb()
    } else {
        refreshEnvsNetwork()
    }
}

function refreshEnvsIdb() {
    var envsListNode = getFromWindow(`${currentTab}EnvsList`)
    envsListNode.innerHTML = "Loading Envs..."
    var htmlStr = ""
    loadEnvsIdb((done, envs) => {
        Envs = envs
        if(done) {
            for (var index = 0; index < envs.length; index++) {
                var env = envs[index];
                var id = "Env" + Date.now() + env.EnvId
                htmlStr += `
                            <li class="EnvListItem" onclick="return setEnvVars(event, '${env.EnvId}')">
                                <div style="width: 100%; display: flex; align-items: center;" >
                                    <a style="padding: 0.4em 0.1em;">${env.name}</a>
                                </div>
                                <span class="icon-options" style="float: right; padding: 4px; position: relative;" onclick="return showDropdown('.${currentTab}${id}envOptionsDropdown')">
                                            <div class="dropdown ${currentTab}${id}envOptionsDropdown close" style="left: unset; right: 0;">
                                                <ul>
                                                    <li><a onclick="return renameEnvModal(event, '${env.EnvId}')">Rename</a></li>
                                                    <li><a onclick="return deleteEnv(event, '${env.EnvId}')">Delete</a></li>
                                                </ul>
                                            </div>                        
                                </span>
                            </li>
                `
            }
        }
        envsListNode.innerHTML = htmlStr
        loadEnvsForDropdown()
    })
}

// TODO: implement
function refreshEnvsNetwork() {

}

function setEnvVars(event, envId) {
    // remove last clicked
    if(setEnvVars.lastClicked) {
        if(!event.target.isSameNode(setEnvVars.lastClicked.target)) {
            setEnvVars.lastClicked.target.style.backgroundColor = "unset"
        }
        setEnvVars.lastClicked = { envId, target: event.target }
    } else setEnvVars.lastClicked = {envId, target: event.target }

    if(event.target.style.backgroundColor !== "white" && event.target.style.backgroundColor !== "rgb(221, 221, 221)")
        event.target.style.backgroundColor = "rgb(221, 221, 221)"
    else event.target.style.backgroundColor = "unset"

    // find env in Envs
    for (var index = 0; index < Envs.length; index++) {
        var env = Envs[index]
        if(checkTeamIsPersonal()) {
            if(env.EnvId == envId) {
                var envVars = env.vars;
                var htmlStr = ""

                for (var i = 0; i < envVars.length; i++) {
                    var vars = envVars[i];
                    htmlStr += `
                        <tr>
                            <td><span id="${env.EnvId}NameVar">${vars.name}</span></td>
                            <td><span id="${env.EnvId}ValueVar">${vars.value}</span></td>
                            <td style="box-sizing: border-box;display: flex;">  
                                <span title="Click to Save Vars" id="${env.EnvId}saveEnvVars" onclick="return saveEnvVars(event, '${env.EnvId}', '${vars.id}')" class="close icon-check" style="color: green; padding: 0.3em;display: block;"></span>
                                <span title="Click to Inline Edit Vars" onclick="return editEnvVars(event, '${env.EnvId}')" class="icon-note" style="padding: 0.3em;display: block;"></span>
                                <span title="Click to Delete Vars" onclick="return deleteEnvVars(event, '${env.EnvId}', '${vars.id}')" class="icon-trash" style=" color: red; padding: 0.3em;display: block;"></span>
                            </td>
                        </tr>
                    `
                }
                getFromWindow(`${currentTab}EnvVarsList`).innerHTML = htmlStr
                return;
            }
        } else {}        
    }    
}

function deleteEnv(event, EnvId) {
    if(confirm("Do you want to delete this Env?")) {
        if(checkTeamIsPersonal()) {
            deleteRequestIdb(EnvId, (done, res) => {
                log(done, res)
            })
        } else {
            // network
        }
        refreshEnvs()
    }
}

function createVarModal(event) {
    var createVarModalStr = `

    <!-- <div class="modal"> -->
        <div class="modal-backdrop createVarModalBackdrop"></div>
        <div class="modal-body" style="">
            <div class="modal-head">
                <h4 style="padding: 0;margin: 0;">Create a Variable</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="createVarModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div class="table-responsive">
                    <table>
                        <thead>
                            <th>NAME</th>
                            <th>VALUE</th>
                            <th>ACTIONS</th>
                        </thead>
                        <tbody>
                            <tr>                                        
                                <td>
                                    <input type="text" id="varName" placeholder="Enter variable name" />
                                </td>
                                <td>
                                    <input type="text" id="varValue" placeholder="Enter variable value" />
                                </td>
                                <td style="box-sizing: border-box;display: flex;">  
                                    <span onclick="return addVar(event)" class="icon-plus" style="padding: 0.3em;display: block;"></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <ul class="listToAddVars" style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                    </ul>
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                <button onclick="return addAllVars(event)" class="createCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Create</button>
            </div>
        </div>

    <!-- </div> -->
    `
    var mo = document.createElement("div")
    mo.classList.add("modal")
    mo.classList.add("createVarModal")
    mo.innerHTML = createVarModalStr
    closeActiveModals()
    modalsActive.push(mo)
    document.body.appendChild(mo)

    document.querySelector(".modal-backdrop.createVarModalBackdrop").addEventListener("click", () => {
        document.body.removeChild(mo)
        closeActiveModals();
    })
}

function addVar(event) {
    if(!addVar.addedVars) {
        addVar.addedVars = []
    }
    var vName = getFromWindow(`varName`).value
    var vValue = getFromWindow(`varValue`).value
    var id = "var" + Date.now();

    addVar.addedVars.push({
        id: id,
        name: vName,
        value: vValue
    })

    // display
    var li = document.createElement("li")
    li.classList.add(["addedVars" + id])
    li.innerHTML = `
        <span class="pad-6" style="display: flex; justify-content: space-between; margin-top: 4px; width: 100%; background: lightgrey; box-sizing: border-box">
            <span>${vName}</span>
            <span>${vValue}</span>
            <span><button onclick="return removeAddedVar(event, '${id}');">X</button></span>
        </span>
    `
    document.querySelector(".listToAddVars").appendChild(li)
}

// This removes new vars added in the "create variable" modal.
function removeAddedVar(event, id) {
    // remove from array
    addVar.addedVars = addVar.addedVars.filter(v => v.id == id)

    // remove from node.
    document.querySelector(".listToAddVars").removeChild(document.querySelector(`.addedVars${id}`))
}

function addAllVars(evt) {
    evt.target.setAttribute("disabled", null)
    evt.target.innerText = "Creating"
    var envIdToLook = setEnvVars.lastClicked.envId

    // find the Env in Envs
    var resEnv = Envs.find(v => v.EnvId == envIdToLook)
    if(resEnv) {
        for (var index = 0; index < addVar.addedVars.length; index++) {
            var e = addVar.addedVars[index];
            resEnv.vars.push(e)               
        }
    }

    if(checkTeamIsPersonal()) {
        updateEnvIdb(resEnv, (done, d) => {

        })
    } else {
        // network
    }
    // refresh Env variables
    var htmlStr = ""
    for (var i = 0; i < resEnv.vars.length; i++) {
        var vars = resEnv.vars[i];
        htmlStr += `
            <tr>
                <td><span id="${resEnv.EnvId}NameVar">${vars.name}</span></td>
                <td><span id="${resEnv.EnvId}ValueVar">${vars.value}</span></td>
                <td style="box-sizing: border-box;display: flex;">
                    <span title="Click to Save Vars" id="${resEnv.EnvId}saveEnvVars" onclick="return saveEnvVars(event, '${resEnv.EnvId}', '${vars.id}')" class="close icon-check" style="color: green; padding: 0.3em;display: block;"></span>
                    <span title="Click to Inline Edit Vars" onclick="return editEnvVars(event, '${resEnv.EnvId}')" class="icon-note" style="padding: 0.3em;display: block;"></span>
                    <span title="Click to Delete Vars" onclick="return deleteEnvVars(event, '${resEnv.EnvId}', '${vars.id}')" class="icon-trash" style="color: red; padding: 0.3em;display: block;"></span>
                </td>
            </tr>
        `
    }
    getFromWindow(`${currentTab}EnvVarsList`).innerHTML = htmlStr

    evt.target.removeAttribute("disabled")
    evt.target.innerText = "Create"
    closeActiveModals()
}

function deleteEnvVars(evt, envId, varId) {
    if(confirm("Do you want to delete this variable?")) {
        if(checkTeamIsPersonal()) {
            var currEnv = Envs.find((v) => v.EnvId == envId)
            currEnv.vars = currEnv.vars.filter((v) => {
                if(v.id !== varId)
                    return true
                return false
            })
            updateEnvIdb(currEnv, (done, res) => {
                if(done)
                    refreshEnvs()
            })
        } else {
            // network
        }
    }
}

function editEnvVars(evt, envId) {
    var nameVar = window[`${envId}NameVar`]
    var valueVar = window[`${envId}ValueVar`]

    window[`${envId}saveEnvVars`].classList.remove("close")

    valueVar.setAttribute("contenteditable", true)
    valueVar.classList.add("EnvInlineEditVar")

    nameVar.setAttribute("contenteditable", true)
    nameVar.classList.add("EnvInlineEditVar")
    nameVar.focus()
}

function saveEnvVars(e, envId, varId) {
    var nameVar = window[`${envId}NameVar`]
    var valueVar = window[`${envId}ValueVar`]

    var name = nameVar.innerText
    var value = valueVar.innerText

    window[`${envId}saveEnvVars`].classList.add("close")

    valueVar.removeAttribute("contenteditable", null)
    valueVar.classList.remove("EnvInlineEditVar")

    nameVar.removeAttribute("contenteditable", null)
    nameVar.classList.remove("EnvInlineEditVar")

    // collect values from "nameVar" and "valueVar"
    if(checkTeamIsPersonal()) {
        var currEnv = Envs.find((v) => v.EnvId == envId)
        currEnv.vars = currEnv.vars.map((v) => {
            if(v.id == varId) {
                return {
                    id: varId,
                    name,
                    value
                }
            }
        } )
        updateEnvIdb(currEnv, (done, res) => {
            if(done)
                refreshEnvs()
        })
    } else {
        // network
    }
}

function loadEnvsForDropdown() {
    var envsListNode = getFromWindow(`envsList`)
    envsListNode.innerHTML = "Loading Envs..."
    var htmlStr = ""
    loadEnvsIdb((done, envs) => {
        Envs = envs
        if(done) {
            for (var index = 0; index < envs.length; index++) {
                var env = envs[index];
                htmlStr += `
                    <li><a onclick="return selectEnv(event, '${env.EnvId}')">${env.name}</a></li>
                `
            }
        }
        htmlStr += `
            <li class="divider"></li>
            <li><a onclick="return createNewEnvTab()">Create New Env</a></li>
        `
        envsListNode.innerHTML = htmlStr
    })
}

function selectEnv(event, envId) {
    //id="currentEnvDisplay"
    // set dataSet.value
    var currEnv = Envs.find(v => v.EnvId == envId)
    currentEnv = currEnv
    var currEnvDisplayNode = getFromWindow(`currentEnvDisplay`)
    currEnvDisplayNode.innerText = currentEnv.name
    currEnvDisplayNode.dataset.value = currentEnv.EnvId
}

function renameEnvModal(event, envId) {
    var renameEnvModalStr = `

    <!-- <div class="modal"> -->
        <div class="modal-backdrop renameEnvModalBackdrop"></div>
        <div class="modal-body" style="">
            <div class="modal-head">
                <h4 style="padding: 0;margin: 0;">Rename Env</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="renameEnvModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                    <div style="margin: 9px 0;">
                        <h4 style="margin: 4px 0;">Env name here:</h4>
                        <input type="text" id="${envId}EnvNewName" placeholder="Env new name here" />
                    </div>                
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                <button onclick="return renameEnv(event, '${envId}EnvNewName', '${envId}')" class="createCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Rename</button>
            </div>
        </div>

    <!-- </div> -->
    `
    var mo = document.createElement("div")
    mo.classList.add("modal")
    mo.classList.add("renameEnvModal")
    mo.innerHTML = renameEnvModalStr
    closeActiveModals()
    modalsActive.push(mo)
    document.body.appendChild(mo)

    document.querySelector(".modal-backdrop.renameEnvModalBackdrop").addEventListener("click", () => {
        document.body.removeChild(mo)
        closeActiveModals();
    })    
}

function renameEnv(event, envNewName, envId) {
    var targ = event.target
    targ.setAttribute("disabled", true)
    targ.innerText = "Renaming..."

    var newEnvName = window[envNewName].value
    if(newEnvName.length <= 0) {
        var errorNode = window["renameEnvModalError"]
        errorNode.innerText = "Please, type a name"
        errorNode.classList.remove("close")
        return
    }

    if(checkTeamIsPersonal()) {
        var cEnv = Envs.find(v => {
            return v.EnvId == envId
        })

        cEnv.name = newEnvName
        updateEnvIdb(cEnv, (done, res) => {
            if(done) {
                refreshEnvs()
                targ.removeAttribute("disabled", true)
                targ.innerText = "Rename"
                closeActiveModals()
            }
        })
    } else {
        // network
    }

}
function Regex (left, right, matchEmpty) {
    matchEmpty = matchEmpty === false ? false : true
    var _ = matchEmpty ? '*' : '+'
    var l = left //esc(left)
    var r = right //esc(right)
    var start = '(?:' + l + ')'
    var middle = '(.' + _ + '?)'
    var end = r
    return new RegExp(start + middle + end, 'g')
    // return new RegExp(`(?:${l})(.${_}?)${r}`, 'g')
}

function parseVarsAndReplace(str, localVars) {
    // {{url}}/api/local/{{endpoint}}
    var currVars
    var parsedStr
    
    // get current Env
    // search in current env
    if(currentEnv && currentEnv.vars) {
        currVars = currentEnv.vars
        parsedStr = findAndReplace(str, currVars)
    } else {
        parsedStr = str
    }

    // search in global
    if(Envs) {
        // get global Env by "__globalEnv"
        var globalEnv = Envs.find((v => v.EnvId == "__globalEnv"))
        if(globalEnv) {
            currVars = globalEnv.vars
            parsedStr = findAndReplace(parsedStr, currVars)
        }
    }
    return parsedStr
}

function findAndReplace(str, currVars) {
    var parsedStr = str.replace(Regex(envVarInterpolationStart, envVarInterpolationEnd), (_, contents) => {
        for (var index = 0; index < currVars.length; index++) {
            var _var = currVars[index];
            if(_var.name == contents) {
                return _var.value
            }
        }
        return envVarInterpolationStart + contents + envVarInterpolationEnd
    })
    return parsedStr
}

/**
 * 
 * @param {*} str 
 * @param {*} varOpts local vars -> collection vars -> env vars -> global vars
 * varOpts: props => env, collectionVars, localVars
 */
function parseVarsAndReplaceCollection(str, varOpts) {
    // precedence:
    // local vars -> collection vars -> env vars -> global vars

    var env =  varOpts.env || currentEnv || undefined // variables from the supplied env or current env
    var collectionVars = varOpts.collectionVars || undefined // variables from the collection.
    var localVars = varOpts.localVars || undefined // variables from file or JSON file.

    var currVars
    var parsedStr = str

    // search in selected vars from a file or JSON file.
    if(localVars) {
        currVars = localVars
        parsedStr = findAndReplace(parsedStr, currVars)        
    }

    // search in collection
    if(collectionVars) {
        currVars = collectionVars
        parsedStr = findAndReplace(parsedStr, currVars)                
    }

    // search in current Env or selected Env
    if(env) {
        if(env.vars) {
            currVars = env.vars
            parsedStr = findAndReplace(parsedStr, currVars)                            
        }
    }

    // search in global
    if(Envs) {
        // get global Env by "__globalEnv"
        var globalEnv = Envs.find((v => v.EnvId == "__globalEnv"))
        if(globalEnv) {
            currVars = globalEnv.vars
            parsedStr = findAndReplace(parsedStr, currVars)
        }
    }
    return parsedStr
}
/**
var data = {
  "stooges": [
    { "name": "Moe" },
    { "name": "Larry" },
    { "name": "Curly" }
  ]
}

var template = `
    {{#stooges}}
      <b>{{name}}</b>
{{/stooges}}`

postly.visualizer.setTemplate(template, data)

// Write your Visualizer code here. 

var template = `
    {{#response}}
      <b>{{name}}</b>
{{/response}}`

postly.visualizer.setTemplate(template, {response: postly.response})

// Write your Visualizer code here. 

var template = `
		<h1><u>Response</u></h1>
		<ul>
      {{#response}}
        <li><b>{{name}}</b></li>
      {{/response}}
		</ul>
`

postly.visualizer.setTemplate(template, {response: postly.response})

**/

/**
 * 
 * @param {*} template 
 */
function setTemplateFn(template, data) {
        var output = renderTemplate(template, data)/*Mustache.render(template, data) */
        var iFram = getFromWindow(`${currentTab}responseVisualizerPreviewIframe`).contentWindow.document
        iFram.open()
        iFram.writeln(output)
        iFram.close()
}

function renderTemplate(template, data) {
    return Mustache.render(template, data)    
}

function runVisualizer(res, tabId, api) {
    if (currentEditors[tabId]["visualizer"]) {
        var visualizerCode = currentEditors[tabId]["visualizer"].getValue()        
        new Function("postly", visualizerCode)(api)
    }
}

function setVisualizerData() {
    postly.visualizer = {
        setTemplate: setTemplateFn
    }
}
function mockServerHtml(tabId) {
    return `

        <div>
            <div style="margin: 9px 0;">
                <div style="display: flex;align-items: center;justify-content: space-between;">
                    <h2 class="lightWeight">Create New Mock Server</h2>
                    <button onclick="return viewMockServersModal(event)">View Mock Servers</button>
                </div>
            </div>
            <div>
                <div style="margin: 9px 0;">
                    <p id="createMockServerNotif" class="notif close"></p>
                    <input type="text" id="${tabId}mockServerName" placeholder="Mock server name" />
                </div>
                <div style="margin: 9px 0;">
                    <h3 class="lightWeight">Add Mock Server Endpoints:</h3>
                </div>
                <div style="margin: 9px 0;" class="table-responsive">
                    <table>
                        <thead>
                            <th>METHOD</th>
                            <th>URL</th>
                            <th>RESPONSE CODE</th>
                            <th>RESPONSE</th>
                            <th>ACTIONS</th>
                        </thead>
                        <tbody id="${tabId}mockServerTbody">
                            <tr>
                                <td>
                                    <button style="position: relative;" onclick="return showDropdown('.${tabId}setMockServerMethodTypeDropdown')" class="bg-default color-white pad-6 pad-left-12 pad-right-12 btn-block">
                                        <span><span id="${tabId}MockServerMethodType" data-value="get">GET</span> <span class="icon-arrow-down"></span></span>
                                        <div class="dropdown ${tabId}setMockServerMethodTypeDropdown close">
                                            <ul>
                                                <li><a onclick="return setMockServerMethodType('get', 'GET')">GET</a></li>
                                                <li><a onclick="return setMockServerMethodType('post', 'POST')">POST</a></li>
                                                <li><a onclick="return setMockServerMethodType('delete', 'DELETE')">DELETE</a></li>
                                                <li><a onclick="return setMockServerMethodType('options', 'OPTIONS')">OPTIONS</a></li>
                                                <li><a onclick="return setMockServerMethodType('put', 'PUT')">PUT</a></li>
                                                <li><a onclick="return setMockServerMethodType('patch', 'PATCH')">PATCH</a></li>
                                            </ul>
                                        </div>                            
                                    </button>
                                </td>
                                <td><input type="text" id="${tabId}mockServerUrlName" placeholder="URL" /></td>
                                <td><input type="text" id="${tabId}mockServerResponseCode" placeholder="Response code" /></td>
                                <td><input type="text" id="${tabId}mockServerResponse" placeholder="Response" /></td>
                                <td style="box-sizing: border-box;display: flex;">  
                                    <span class="icon-plus" style="padding: 0.3em;display: block;" onclick="return addToMockServerList(event)"></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <ul class="${tabId}listToAddMockServers" style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                    </ul>
                </div>
                <div style="margin: 9px 0;">
                    <button class="pad-6" onclick="createMockServer(event)">Create</button>
                </div>

                <div class="divider"></div>
            </div>
        </div>    

    `
}

function createMockServerTab(event) {
    // check type of MockServer already exist.
    var tabExist = false
    var tabExistId
    for (var index = 0; index < tabs.length; index++) {
        var tab = tabs[index];
        if(postData[tab] && postData[tab].type) {
            if(postData[tab].type == "New MockServer") {
                tabExist = true
                tabExistId = postData[tab].id
            }            
        }
    }

    if(tabExist){
        requestTabClick(null, tabExistId)
        return
    }

    var id = "requestTab" + Date.now()

    var h = `<a onclick="return requestTabClick(event, '${id}')" class="mainTabName">
    <b id="${id}TabMethod" class="icon-layers"></b> <span id="${id}TabName">Create New Mock Server</span></a>
    <span><a class="mainTabClose" onclick="return removeTab(event, '${id}')">X</a></span>`

    var li = document.createElement("li")
    li.classList.add("mainTab")
    li.classList.add("mainTabActive")
    li.classList.add(`${id}MainTab`)
    // li.setAttribute("id", id)
    li.innerHTML = h 
    mainTab.appendChild(li)

    first = tabs.length <= 0 ? true:  false;

    if(first) {

    } else {
        var mainTabActiveNode = document.querySelector(".mainTabActive")
        mainTabActiveNode.classList.remove("mainTabActive")

        var mainTabContentActiveNode = document.querySelector(".mainTabContentActive")
        mainTabContentActiveNode.classList.remove("mainTabContentActive")
        // mainTabContentActiveNode.classList.add("close")
    }

    var divNode = document.createElement("div")
    divNode.classList.add("mainTabContent")
    divNode.classList.add("mainTabContentActive")
    divNode.setAttribute("id", id)
    divNode.innerHTML = mockServerHtml(id)

    tabContainer.appendChild(divNode)
    tabs.push(id)
    currentTab = id
    setTabsInRequestTab(currentTab);
    setTabsInAuthTab(currentTab);
    setCurrentTabEditor(currentTab)

    // populate postData
    postData[currentTab] = {
        id: id,
        type: "New MockServer"
    }
    
}

function createMockServer(event) {
    var mockServerName = getFromWindow(`${currentTab}mockServerName`).value
    var endPoints = addToMockServerList.addedMocks

    log(mockServerName, endPoints)
    if(mockServerName.length <= 0) {
        createMockServerNotif.innerHTML = "Please, add the Mock Server name."        
        createMockServerNotif.classList.add("notif-danger")
        createMockServerNotif.classList.remove("close")
        return
    }

    if(!endPoints || endPoints.length <= 0) {
        createMockServerNotif.innerHTML = "Please, add atleast one endpoint to the Mock Server."
        createMockServerNotif.classList.add("notif-danger")
        createMockServerNotif.classList.remove("close")
        return        
    }

    var buttonNode = event.target
    buttonNode.setAttribute("disabled", true)
    buttonNode.innerText = "Creating..."

    if(checkTeamIsPersonal()) {
        addNewMockServerIdb({
            mockServerId: "mockServer" + Date.now(),
            name: mockServerName,
            endPoints: endPoints
        }, (done, res) => {
            if(done) {
                createMockServerNotif.innerHTML = "Successfully created a Mock Server"
                createMockServerNotif.classList.remove("notif-danger")
                createMockServerNotif.classList.add("notif-success")
                document.querySelector(`.${currentTab}listToAddMockServers`).innerHTML = ""
                getFromWindow(`${currentTab}mockServerName`).value = ""

                var methType = getFromWindow(`${currentTab}MockServerMethodType`)
                methType.innerText = "GET"
                methType.dataset.value = "get"

                getFromWindow(`${currentTab}mockServerUrlName`).value = ""
                getFromWindow(`${currentTab}mockServerResponseCode`).value = ""
                getFromWindow(`${currentTab}mockServerResponse`).value = ""
                addToMockServerList.addedMocks = []
            } else {
                createMockServerNotif.innerHTML = "Error occured while creating a Mock Server"                
                createMockServerNotif.classList.remove("notif-success")
                createMockServerNotif.classList.add("notif-danger")
            }
            createMockServerNotif.classList.remove("close")
            setTimeout(()=> {
                createMockServerNotif.innerHTML = ""                
                createMockServerNotif.classList.add("close")
            }, 5000)

            buttonNode.removeAttribute("disabled", null)
            buttonNode.innerText = "Create"
            log(done, res)
        })
    } else {
        // TODO: Add network implementation.
    }
}

function getAllMockServers() {
    getMockServersIdb()
}

function setMockServerMethodType(key, value) {
    var methodType = getFromWindow(`${currentTab}MockServerMethodType`)
    methodType.dataset.value = key
    methodType.innerText = value
}

function addToMockServerList(event) {
    if(!addToMockServerList.addedMocks) {
        addToMockServerList.addedMocks = []
    }

    var listToAddMocks = document.querySelector(`.${currentTab}listToAddMockServers`)

    var methodType = getFromWindow(`${currentTab}MockServerMethodType`).dataset.value
    var urlName = getFromWindow(`${currentTab}mockServerUrlName`).value
    var responseCode = getFromWindow(`${currentTab}mockServerResponseCode`).value
    var response = getFromWindow(`${currentTab}mockServerResponse`).value
    var mockServerName = getFromWindow(`${currentTab}mockServerName`)

    var id = "endPoint" + Date.now()
    addToMockServerList.addedMocks.push({
        id: id,
        methodType: methodType,
        url: urlName,
        response: response,
        responseCode: responseCode  
    })

    var li = document.createElement("li")
    li.classList.add(["addedMocks" + id])
    li.innerHTML = `
        <span class="pad-6" style="display: flex; justify-content: space-between; margin-top: 4px; width: 100%; background: lightgrey; box-sizing: border-box">
            <span style="padding: 0 4px;">${methodType.toUpperCase()}</span>
            <span style="padding: 0 4px;">${urlName}</span>
            <span style="padding: 0 4px;">${response}</span>
            <span style="padding: 0 4px;">${responseCode}</span>
            <span><button class="icon-trash" onclick="return removeAddedMock(event, '${id}');"></button></span>
        </span>
    `
    listToAddMocks.appendChild(li)
}

function removeAddedMock(event, id) {
    // remove from array
    addToMockServerList.addedMocks = addToMockServerList.addedMocks.filter(v => v.id == id)

    // remove from node.
    document.querySelector(`.${currentTab}listToAddMockServers`).removeChild(document.querySelector(`.addedMocks${id}`))
}

function viewMockServersModal(event) {
    var mockServersHtml = "Loading Mock Servers..."

    getMockServersIdb((done, mockServers) => {
        // log(done, mockServers)
        if(done) {
            mockServersHtml = ""
            mockServers.forEach(mS => {
                var buttonHtmlStr = `<button onclick="return setAsActiveMockServer(event, '${mS.mockServerId}')">Activate</button>`
                if(currentMockServer) {
                    if(mS.mockServerId == currentMockServer.mockServerId) {
                        buttonHtmlStr = `<button class="bg-green" onclick="return removeAsActiveMockServer(event, '${mS.mockServerId}')">Deactivate</button>`
                    }
                }

                mockServersHtml += `
                    <li style="display: flex; justify-content: space-between; padding: 10px 2px; padding-left: 5px; border-bottom: 1px solid rgb(221, 221, 221);">
                        <span>
                            ${mS.name}
                            <div>
                                <small style="padding: 3px 0;display: block;">${mS.endPoints.length} endpoint(s)</small>
                            </div>
                        </span>
                        <div>
                            ${buttonHtmlStr}                            
                        </div>
                    </li>
                `
            })
            document.querySelector(".mockServersList").innerHTML = mockServersHtml
        }
    })

    var viewMockServersModalStr = `
    <!-- <div class="modal"> -->
        <div class="modal-backdrop viewMockServersModalBackdrop"></div>
        <div class="modal-body" style="">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Mock Servers</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body" style="">
                <div>
                    <ul class="mockServersList" style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                        ${mockServersHtml}
                    </ul>
                </div>
            </idv>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
            </div>
        </div>

    <!-- </div> -->
    `
    var mo = document.createElement("div")
    mo.classList.add("modal")
    mo.classList.add("viewMockServersModal")
    mo.innerHTML = viewMockServersModalStr
    closeActiveModals()
    modalsActive.push(mo)
    document.body.appendChild(mo)

    document.querySelector(".modal-backdrop.viewMockServersModalBackdrop").addEventListener("click", () => {
        document.body.removeChild(mo)
        closeActiveModals();
    })
}

function setAsActiveMockServer(event, mockServerId) {
    getMockServerIdb(mockServerId, (done, mockServer) => {
        if(done) {
            mockCalls = true
            currentMockServer = mockServer
            event.target.classList.add("bg-green")
            event.target.removeEventListener("click", null)
            event.target.innerHTML = "Deactivate"
            event.target.addEventListener("click", (e) => removeAsActiveMockServer(e, mockServerId))
        }
    })
}

function removeAsActiveMockServer(evt, mockServerId) {
    mockCalls = false
    currentMockServer = null
    event.target.classList.remove("bg-green")
    event.target.removeEventListener("click", null)
    event.target.innerHTML = "Activate"
    event.target.addEventListener("click", (e) => setAsActiveMockServer(e, mockServerId))
}

function mockCall(callOpts, tabId, event) {
    var endPoints = currentMockServer.endPoints
    if(!endPoints) {
        processResponseError("API not found", tabId, event)
    }
    // processResponse(res, tabId, event)
    for (var index = 0; index < endPoints.length; index++) {
        var endPoint = endPoints[index];

        var url = endPoint.url
        var methodType = endPoint.methodType.toLowerCase()
        var response = endPoint.response
        var responseCode = endPoint.responseCode
        
        if(url == callOpts.url && methodType == callOpts.method.toLowerCase()) {
            processResponse({
                data: response,
                headers: {
                    "content-type": "application/json; utf-8"
                },
                status: responseCode
            }, tabId, event)
            return
        }
    }
    // var headers = postData[currentTab].headers
    // var params = postData[currentTab].params
    // var body = postData[currentTab].body
    
}
function setPreRequest(axiosInst) {
    if(currentEditors[currentTab]["Pre-Request"]) {
        var preReqCode = currentEditors[currentTab]["Pre-Request"].getValue()

        axiosInst.interceptors.request.use(function (config) {
            new Function("postly", "config", preReqCode)(postly, config)
            return config;
        }, function (err) {
            return Promise.reject(err);
        });
    }
}
// refreshHistoryTab()
// attachSaveModal()

function attachSaveModal() {
    var currentCol = "Request belongs to no collection."
    if(postData[currentTab].collectionId) {
        var res = collections.find(val => {
            return (val.collectionId == postData[currentTab].collectionId)
        })

        if(res)
            currentCol = res.name
    }

    var colStr = ""
    collections.forEach(col => {
        colStr += `
        <li>
            <div class="resultAddTeamItem">
                <div style="display: flex;">
                    <span><input type="checkbox" onchange="return checkboxOnChange(event, '${col.collectionId}')" /> </span>
                    <span style="padding: 0 6px;">${col.name}</span>
                </div>
            </div>
        </li>`
    })

    var saveModal = `

    <!-- <div class="modal"> -->
        <div class="modal-backdrop saveModalBackdrop"></div>
        <div class="modal-body">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Request Name</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body" style="">
                <p id="modalRequestError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div>
                    <input type="text" id="requestUrlName" placeholder="Type your request name..." />
                </div>
                <div style="padding: 11px 0;">
                    <span><b>Current Collection: </b>${currentCol}</span>
                </div>
                <div style="padding: 8px 0; border: 1px solid rgb(221, 221, 221); border-radius: 3px;">
                    <button class="bg-default color-white" onclick="return attachCollectionModal(event);">Create Collection</button>
                </div>
                <ul style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                    ${colStr}
                </ul>
            </div>

            <div class="modal-footer">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                <button onclick="return saveRequestUrlName(event)" class="saveRequestUrlModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Save</button>
            </div>
        </div>

    <!-- </div> -->
    `

    var modalNode = document.createElement("div")
    modalNode.setAttribute("class", "modal")
    // modalNode.classList.add("close")
    modalNode.classList.add("saveModal")
    modalNode.innerHTML = saveModal
    closeActiveModals()
    modalsActive.push(modalNode)
    document.body.appendChild(modalNode)
    
    document.querySelector(".modal-backdrop.saveModalBackdrop").addEventListener("click", () => {
        lastEl = null
        selectedColId = null
        document.body.removeChild(modalNode)
        closeActiveModals()

        // reset the modal
        /*var n = document.querySelector(`.saveRequestUrlModalBtn`)    
        n.innerText = "Save"
        n.removeAttribute("disabled")

        modalRequestError.innerHTML = ""
        modalRequestError.classList.add("close")
        requestUrlName.value = "" */

        /* document.querySelector(".saveModal") */
        // modalNode.classList.add("close")
    })

}



function editCollectionModal(colId) {
    var tabId = "editCollection" + Date.now()
    var editCollectionModalHtmlStr = `
        <div class="modal-backdrop editCollectionModalBackdrop"></div>
        <div class="modal-body modal-width-800">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Edit a Collection</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="addCollectionModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div>
                    <div>
                        <h4 style="margin: 4px 0;">Collection name:</h4>
                        <input style="background: rgb(235, 235, 228);" type="text" placeholder="Collection name" id="editCollectionName" />
                    </div>
                    <div>
                            <div class="tabs">
                                <ul class="tabul flex-wrap">
                                    <li onclick="return setCollection('auth', '${colId}')" data-tab="${tabId}collectionTab:collectionauthorization" data-name="collectionauthorization" class="tab ${tabId}collectionTab tab-active"><a>Authorization</a></li>
                                    <li onclick="return setCollection('tests', '${colId}')" data-tab="${tabId}collectionTab:collectiontests" data-name="collectiontests" class="tab ${tabId}collectionTab"><a>Tests</a></li>
                                    <li onclick="return setCollection('prerequest', '${colId}')" data-tab="${tabId}collectionTab:collectionprerequest" data-name="collectionprerequest" class="tab ${tabId}collectionTab"><a>Pre-Request</a></li>
                                    <li onclick="return setCollection('variables', '${colId}')" data-tab="${tabId}collectionTab:collectionvariables" data-name="collectionvariables" class="tab ${tabId}collectionTab"><a>Variables</a></li>
                                </ul>
                                <div>
                                    <div data-tab="${tabId}collectionTab:collectionauthorization" data-name="collectionauthorization" class="tab-content ${tabId}collectionTab tab-content-active">
                                        <div>
                                            <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>The Auth set here reflects on all requests in this collection.</p>
                                        </div>
                                        ${createAuthTabs(tabId, "Collection")}
                                    </div>
                                    <div data-tab="${tabId}collectionTab:collectiontests" data-name="collectiontests" class="tab-content ${tabId}collectionTab">
                                        <div>
                                            <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>The tests here runs after each request in this collection.</p>
                                        </div>
                                        <div style="border: 1px solid rgb(221, 221, 221);" class="collectionTestEditor"></div>
                                    </div>                     
                                    <div data-tab="${tabId}collectionTab:collectionprerequest" data-name="collectionprerequest" class="tab-content ${tabId}collectionTab">
                                        <div>
                                            <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>Pre-Request is run before each request in this collection.</p>
                                        </div>
                                        <div style="border: 1px solid rgb(221, 221, 221);" class="collectionPreRequestEditor"></div>
                                    </div>
                                    <div data-tab="${tabId}collectionTab:collectionvariables" data-name="collectionvariables" class="tab-content ${tabId}collectionTab">
                                        <div>
                                            <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>The variables added here belong to this collection.</p>
                                        </div>
                                        <div class="table-responsive">
                                            <table>
                                                <thead>
                                                    <th>NAME</th>
                                                    <th>VALUE</th>
                                                    <th>ACTIONS</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <input type="text" id="collectionVarName" placeholder="Enter variable name" />
                                                        </td>
                                                        <td>
                                                            <input type="text" id="collectionVarValue" placeholder="Enter variable value" />
                                                        </td>
                                                        <td style="box-sizing: border-box;display: flex;">
                                                            <span title="Click to add variable to collection" onclick="return addCollectionVar(event, '${colId}')" class="icon-plus" style="padding: 0.3em;display: block;"></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <ul class="listToAddCollectionVars" style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                    </div>
                 
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                <button onclick="return updateCollectionn(event, '${colId}')" class="updateCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Update</button>
            </div>
        </div>    
    `
    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = editCollectionModalHtmlStr
    closeActiveModals()
    modalsActive.push(modal)
    modal.querySelector(".editCollectionModalBackdrop").addEventListener("click", (e) => {
        document.body.removeChild(modal)
        closeActiveModals()

        // clear editors
        delete currentEditors["collectionTestEditor"]
        delete currentEditors["collectionPreRequestEditor"]
    })
    document.body.appendChild(modal)
    setTabs()
    // setTabsInAuthTab(tabId)

    // set collection editors
    setCollectionEditors(colId)

    // set auth
    setCollectionAuth(colId, tabId)

    // set collection name
    setCollectionName(colId)
}

function setCollectionEditors(colId) {
    var col = getCollection(colId)

    var testEditorNode = document.querySelector(".collectionTestEditor")
    var prerequestEditorNode = document.querySelector(".collectionPreRequestEditor")

    if(!currentEditors["collectionTestEditor"]) {
        currentEditors["collectionTestEditor"] = setCodeEditor(testEditorNode, {
            value: col.tests ? col.tests : "// Collection tests goes here. (JavaScript)",
            lineNumbers: true, 
            tabSize: 2,
            mode: {
                name: "javascript",
                json: true
            },
            lineWrapping: true,
            theme: "default",
            autoRefresh: true,

            foldGutter: true,
            gutters: [ "CodeMirror-linenumbers", "CodeMirror-foldgutter" ],
            extraKeys: { "Ctrl-Q": function(cm) { cm.foldCode(cm.getCursor()) } }
        })
    }

    if(!currentEditors["collectionPreRequestEditor"]) {
        currentEditors["collectionPreRequestEditor"] = setCodeEditor(prerequestEditorNode, {
            value: col.prerequest ? col.prerequest : "// Collection Pre-request script goes here. (JavaScript)",
            lineNumbers: true, 
            tabSize: 2,
            mode: {
                name: "javascript",
                json: true
            },
            lineWrapping: true,
            theme: "default",
            autoRefresh: true,

            foldGutter: true,
            gutters: [ "CodeMirror-linenumbers", "CodeMirror-foldgutter" ],
            extraKeys: { "Ctrl-Q": function(cm) { cm.foldCode(cm.getCursor()) } }
        })
    }
}

function addCollectionVar(evt, colId) {
    // get varName node
    // get varValue node
    var val = getFromWindow("collectionVarValue").value
    var name = getFromWindow("collectionVarName").value
    if(val.length <= 0 || name.length <= 0) {
        return
    }
    var id = "colVarId" + Date.now()

    var li = document.createElement("li")
    li.setAttribute("id", id)

    var collection = getCollection(colId)
    if(collection.variables) {
        collection.variables.push({
            id,
            name,
            value: val            
        })
    } else {
        collection.variables = [
            {
                id,
                name,
                value: val
            }
        ]
    }

    li.innerHTML = `
        <table>
            <tbody>
                <tr>
                    <td>
                        ${name}
                    </td>
                    <td>
                        ${val}
                    </td>
                    <td style="box-sizing: border-box;display: flex;">  
                        <span onclick="return removeCollectionVar(event, '${id}', '${colId}')" class="icon-trash" style="padding: 0.3em;display: block;"></span>
                    </td>
                </tr>
            </tbody>
        </table>
    `
    document.querySelector(".listToAddCollectionVars")
        .appendChild(li)
    getFromWindow("collectionVarValue").value = ""
    getFromWindow("collectionVarName").value = ""
}

function addCollectionVars(colId) {
    var collection = getCollection(colId)
    var listVarsNode = document.querySelector(".listToAddCollectionVars")
    listVarsNode.innerHTML = ""

    if(collection.variables) {
        for (var index = 0; index < collection.variables.length; index++) {
            var _var = collection.variables[index];

            var id = _var.id
            var name = _var.name
            var val = _var.value

            var li = document.createElement("li")
            li.setAttribute("id", id)

            li.innerHTML = `
                <table>
                    <tbody>
                        <tr>
                            <td>
                                ${name}
                            </td>
                            <td>
                                ${val}
                            </td>
                            <td style="box-sizing: border-box;display: flex;">  
                                <span onclick="return removeCollectionVar(event, '${id}', '${colId}')" class="icon-trash" style="padding: 0.3em;display: block;"></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `
            listVarsNode.appendChild(li)
        }
    }
}

function getCollection(id) {
    return collections.find(c => c.collectionId == id)
}

function updateCollectionn(evt, colId) {
    var targ = evt.target
    targ.setAttribute("disabled", true)
    targ.innerText = "Updating..."
    log(colId)   
    var col = getCollection(colId)
    log(col)

    // save the test script
    col.tests = currentEditors["collectionTestEditor"].getValue()
    // save the pre-request script
    col.prerequest = currentEditors["collectionPreRequestEditor"].getValue()

    // set auth
    col.authorization = setAsAuthCollection.authorization
    delete setAsAuthCollection.authorization

    if(checkTeamIsPersonal()) {

        updateCollectionIdb(col, (done, res) => {
            if(done) {

            }
            targ.removeAttribute("disabled", null)
            targ.innerText = "Update"
        })

    } else {
        // network
    }
}

function removeCollectionVar(event, varId, colId) {
    if(confirm("Do you want to delete this variable?")) {
        var collection = getCollection(colId)
        if(collection.variables) {
            collection.variables = collection.variables.filter(v => {
                if(v.id !== varId)
                    return true
                return false
            })
        }
    document.querySelector(".listToAddCollectionVars")
        .removeChild(getFromWindow(varId))
    }
}

function setCollection(type, colId) {
    switch (type) {
        case "variables":
            addCollectionVars(colId)
            break;
    
        default:
            break;
    }
}

function setCollectionName(colId) {
    window["editCollectionName"].value = getCollection(colId).name
}

function setCollectionAuth(colId, tabId) {
    var col = getCollection(colId)
    if(col.authorization) {
        var auth = col.authorization
        var authName = auth.type
        switch (authName) {
            case 'Basic':
                getFromWindow(`${tabId}authBasicUsername`).value = auth.username
                getFromWindow(`${tabId}authBasicPassword`).value = auth.password
                break;
            case 'Bearer':
                getFromWindow(`${tabId}authBearerToken`).value = auth.token
                break;
            case "Digest":
            break;

            case "APIKey":
                getFromWindow(`${tabId}authAPIKey`).value = auth.auth_key
                getFromWindow(`${tabId}authAPIValue`).value = auth.auth_value
                getFromWindow(`${tabId}setApiKeyAddToType`).dataset.value = auth.whereToAdd
                if(auth.whereToAdd == "params") {
                    getFromWindow(`${tabId}setApiKeyAddToType`).innerHTML = "Query Params"
                } else {
                    if(auth.whereToAdd == "header") {
                        getFromWindow(`${tabId}setApiKeyAddToType`).innerHTML = "Header"
                    }
                }
            break;
        
            default:
                break;
        }

        // remove the active tab and tab-content
        document.querySelector(`.${tabId}AuthTab.tab-active`).classList.remove(".tab-active")
        document.querySelector(`.${tabId}AuthTab.tab-content-active`).classList.remove(".tab-content-active")

        // data-tab="${tabId}AuthTab:apiKey"
        document.querySelectorAll(`.${tabId}AuthTab.tab`).forEach(n => {
            if(n.dataset.tab.toLowerCase() == authName.toLowerCase() ) {
                n.classList.add("tab-active")
            }
        })
        document.querySelectorAll(`.${tabId}AuthTab.tab-content`).forEach(n => {
            if(n.dataset.tab.toLowerCase() == authName.toLowerCase() ) {
                n.classList.add("tab-content-active")
            }
        })

        // check if icon-check exist and remove it
        var nodeExist = document.querySelector(`.${tabId}AuthTabCheck.icon-check`)
        if(nodeExist) {
            nodeExist.parentNode.removeChild(nodeExist)
        }
        // set this 
        document.querySelector(`.${tabId}AuthTab.tab-active`)
            .innerHTML += `<span class="${tabId}AuthTabCheck icon-check" style="padding-right: 8px; color: rgb(221,75,57); font-weight: 800;" class="icon-check"></span>`
        
    }
}
// TODO: Not yet implemented.

function viewCollectionModal(colId) {
    var tabId = "viewCollection" + Date.now()
    var col = getCollection(colId)

    var viewCollectionModalHtmlStr = `
        <div class="modal-backdrop viewCollectionModalBackdrop"></div>
        <div class="modal-body modal-width-800">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">View Collection</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="viewCollectionModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div>
                    <h3 class="lightWeight">${col.name}</h3>
                </div>
                <div style="border-bottom: 1px solid rgb(221, 221, 221); padding-bottom: 5px;">
                    <button onclick="return collectionRunnerModal(event, '${colId}')" title="Click to run this collection" style="font-size: 17px;padding: 10px 27px;" class="bg-default color-white pad-6 pad-left-12 pad-right-12"><span class="icon-control-play"></span></button>
                </div>
                <div>
                    <div class="tabs">
                        <ul class="tabul flex-wrap">
                            <li onclick="return setCollection('auth', '${colId}')" data-tab="collectionTab:collectionauthorization" data-name="collectionauthorization" class="tab ${tabId}collectionTab tab-active"><a>Requests</a></li>
                        </ul>
                        <div>
                            <div data-tab="collectionTab:collectionauthorization" data-name="collectionauthorization" class="tab-content ${tabId}collectionTab tab-content-active">
                                <div>
                                    <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>Requests in this collection.</p>
                                </div>
                                <ul class="viewCollectionRequests" style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                                </ul>
                            </div>
                        </div>                    
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
            </div>
        </div>    
    `
    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = viewCollectionModalHtmlStr
    closeActiveModals()
    modalsActive.push(modal);
    modal.querySelector(".viewCollectionModalBackdrop").addEventListener("click", (e) => {
        document.body.removeChild(modal)
        closeActiveModals()
    })
    document.body.appendChild(modal)

    setCollectionRequests(col)
}

function setCollectionRequests(col) {
    // viewCollectionRequests

    var html = ""

    for (var index = 0; index < col.requests.length; index++) {
        var req = col.requests[index];
        html += `
            <li style="border-bottom: 1px solid rgb(221, 221, 221);padding: 10px 3px;">
                <span><b>${req.methodType}</b></span>
                <span>${req.name}</span>
            </li>
        `        
    }
    document.querySelector(".viewCollectionRequests")
        .innerHTML = html.length > 0 ? html : "<p>This Collection has no requests yet.</p>"
}
// TODO: Not yet implemented.
function exportCollectionModal(colId) {
    var col = getCollection(colId)
    var colJSON = objToStr(col, true)
    exportCollectionModal.collection = col

    var exportCollectionModalHtmlStr = `
        <div class="modal-backdrop exportCollectionModalBackdrop"></div>
        <div class="modal-body modal-width-800">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Export Collection</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="exportCollectionModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div>
                    <div style="padding: 4px 0;">Export "${col.name}" as <b>JSON</b></div>
                    <div style="border: 1px solid rgb(221, 221, 221);" class="previewExportCollectionJSONEditor"></div>                 
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                <button onclick="return exportCollection(event)" class="updateCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Export</button>
            </div>
        </div>    
    `
    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = exportCollectionModalHtmlStr
    closeActiveModals()
    modalsActive.push(modal);
    var ed
    modal.querySelector(".exportCollectionModalBackdrop").addEventListener("click", (e) => {
        document.body.removeChild(modal)
        delete ed
        closeActiveModals()
    })
    document.body.appendChild(modal)
    ed = setCodeEditor(document.querySelector(".previewExportCollectionJSONEditor"), {
            value: colJSON,
                lineNumbers: true, 
                tabSize: 2,
                mode: {
                    name: "javascript",
                    json: true
                },
                readOnly: true,
                lineWrapping: true,
                theme: "default",
        })
}

function exportCollection(event, colJSON) {
    var targ = event.target
    targ.setAttribute("disabled", true)
    targ.innerText = "Exporting..."

    var aNode = document.createElement("a")
    aNode.href = URL.createObjectURL(new Blob([objToStr(exportCollectionModal.collection, true)], {type: "application/json"}))
    aNode.download = exportCollectionModal.collection.name + ".json"
    aNode.click()
    targ.removeAttribute("disabled", null)
    targ.innerText = "Export"
}
// Not yet implemented.
function addRequestCollectionModal(colId) {
    var tabId = "addRequestCollection" + Date.now()

    var addRequestCollectionModalHtmlStr = `
        <div class="modal-backdrop addRequestCollectionModalBackdrop"></div>
        <div class="modal-body">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Add New Request to Collection</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="addRequestCollectionModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>

                <div style="border-bottom: 1px solid rgb(221, 221, 221); padding-bottom: 5px;">
                    <h4 style="margin: 4px 0;">New Request name:</h4>
                    <input style="background: rgb(235, 235, 228);" type="text" placeholder="Request name" id="addRequestCollectionName" />
                </div>

                <div style="border-bottom: 1px solid rgb(221, 221, 221); padding-bottom: 5px;">
                    <span>Method Type:</span>
                        <button style="position: relative;" onclick="return showDropdown('.setNewRequestCollectionMethodTypeDropdown')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">
                            <span><span id="newRequestCollectionMethodType" data-value="get">GET</span> <span class="icon-arrow-down"></span></span>
                            <div class="dropdown right-dropdown setNewRequestCollectionMethodTypeDropdown close">
                                <ul>
                                    <li><a onclick="return setNewRequestCollectionMethodType('get', 'GET')">GET</a></li>
                                    <li><a onclick="return setNewRequestCollectionMethodType('post', 'POST')">POST</a></li>
                                </ul>
                            </div>                            
                        </button>                
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                <button onclick="return addNewRequestToCollection(event, '${colId}')" class="updateCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Add</button>
            </div>
        </div>    
    `
    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = addRequestCollectionModalHtmlStr
    closeActiveModals()
    modalsActive.push(modal);
    modal.querySelector(".addRequestCollectionModalBackdrop").addEventListener("click", (e) => {
        document.body.removeChild(modal)
        closeActiveModals()
    })
    document.body.appendChild(modal)
}

function setNewRequestCollectionMethodType(type, name) {
    var n = window["newRequestCollectionMethodType"]
    n.innerText = name
    n.dataset.value = type
}

function addNewRequestToCollection(evt, colId) {
    var errNode = window["addRequestCollectionModalError"]
    var col = getCollection(colId)
    var targ = evt.target

    var newReqName = window["addRequestCollectionName"].value

    if(newReqName.length <= 0) {
        errNode.innerText = "Please, type a name."
        errNode.classList.remove("close")
        return
    }

    var methodType = window["newRequestCollectionMethodType"].dataset.value

    targ.setAttribute("disabled", true)
    targ.innerText = "Creating..."

    if(checkTeamIsPersonal()) {
        var nReq = {
            url: "",
            methodType: methodType.toUpperCase(),
            body: {
                mode: "form",
                form: []
            },
            params: [],
            headers: [],

            tabId: "requestTab" + Date.now(),
            teamId: currentTeam.id,
            collectionId: col.collectionId,
            requestId: "requestId" + Date.now(),

            name: newReqName,
            options: {
                previewimgvideo: false,
                downloadres: false,
                useproxy: false
            }            
        }
        col.requests.push(nReq)
        addRequest(nReq, (done, newReq) => {
            if(done) {
                updateCollection(col, (_done, newCol) => {
                    if(_done) {
                        refreshCollections()
                        closeActiveModals()
                    } else {
                        errNode.innerText = "Error occured while creating a new request on a collection."
                        errNode.classList.remove("close")                        
                    }
                    targ.removeAttribute("disabled", null)
                    targ.innerText = "Add"
                })
            } else {
                errNode.innerText = "Error occured while creating a new request on a collection."
                errNode.classList.remove("close")                
            }
        })
    } else {
        // network.
    }
}

// Not yet implemented.

function importCollectionModal(event) {
    var importCollectionModalHtmlStr = `
        <div class="modal-backdrop importCollectionModalBackdrop"></div>
        <div class="modal-body">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Import a Collection</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="importCollectionModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div>
                    <input type="file" fileType="json" id="importCollectionFile" onchange="return handleFileImport(event)" />
                </div>
                <div style="padding: 5px 0;">
                    <div style="border: 1px solid rgb(221, 221, 221);" class="previewImportCollectionEditor"></div>
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                <button onclick="return importCollection(event)" class="updateCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Import</button>
            </div>
        </div>    
    `
    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = importCollectionModalHtmlStr
    closeActiveModals()
    modalsActive.push(modal);
    modal.querySelector(".importCollectionModalBackdrop").addEventListener("click", (e) => {
        document.body.removeChild(modal)
        closeActiveModals()
    })
    document.body.appendChild(modal)    
}

function handleFileImport(evt) {
    var iCF = window["importCollectionFile"]

    var input = evt.target
    var reader = new FileReader()
    reader.onload = function(e) {
        var res = e.target.result
        handleFileImport.collectionImport = res
        // .previewImportCollectionEditor
        
        if(!handleFileImport["previewImportCollectionEditor"]) {
            handleFileImport["previewImportCollectionEditor"] = setCodeEditor(document.querySelector(".previewImportCollectionEditor"), {
                value: res,
                lineNumbers: true, 
                tabSize: 2,
                mode: {
                    name: "javascript",
                    json: true
                },
                readOnly: true,
                lineWrapping: true,
                theme: "default",
                autoRefresh: true
            })
        } else {
            handleFileImport["previewImportCollectionEditor"].setValue(res)
            handleFileImport["previewImportCollectionEditor"].refresh()
        }
    }
    reader.readAsText(input.files[0])
}

function importCollection(evt) {
    var targ = evt.target
    targ.setAttribute("disabled", true)
    targ.innerText = "Importing..."

    if(checkTeamIsPersonal()) {
        var col = JSON.parse(handleFileImport.collectionImport)
        var colReqs = col.requests ? col.requests : []

        // add reqs
        for (var index = 0; index < colReqs.length; index++) {
            var colReq = colReqs[index];
            addRequest(colReq, (done, newReq) => {
                if(done) {}
            })
        }
        updateCollection(col, (_done, newCol) => {
            if(_done) {
                handleFileImport["previewImportCollectionEditor"].setValue("")
                handleFileImport["previewImportCollectionEditor"].refresh()
                delete handleFileImport.collectionImport
                delete handleFileImport["previewImportCollectionEditor"]
                window["importCollectionFile"].value = ""
                refreshCollections()
            }
            targ.removeAttribute("disabled", null)
            targ.innerText = "Import"
        })
    } else {
        // network
    }
}
function collectionRunnerModal(event, colId) {
    var col = getCollection(colId)
    var tabId = "collectionRunner" + Date.now()
    var envToUse = currentEnv

    collectionRunnerModal.state = function(action, payload) {
        switch (action) {
            case "GET_REQUESTS":
                return col.requests                
            case "EDIT_REQUEST":
                break;
            case "GET_COLLECTION":
                return col
            case "TOGGLE_RUNNABLE":
                var req = col.requests.filter((req, i) => i == payload)[0]
                if(req.collectionRun) {
                    req.collectionRun = false
                } else {
                    req.collectionRun = true
                }
                break;
            case "GET_COLLECTION_VARS":
                return col.variables
            case "GET_ENV":
                return envToUse
            case "SET_ENV":
                return envToUse = payload
            default:
                break;
        }
    }

    var collectionRunnerModalHtmlStr = `
        <div class="modal-backdrop collectionRunnerModalBackdrop"></div>
        <div class="modal-body modal-width-800">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Collection Runner</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="collectionRunnerModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div>
                    <div class="tabs">
                        <ul class="tabul flex-wrap">
                            <li data-tab="${tabId}collectionRunnerTab:runner" class="tab ${tabId}collectionRunnerTab tab-active"><a>Runner</a></li>
                            <li data-tab="${tabId}collectionRunnerTab:runnerResults" class="tab ${tabId}collectionRunnerTab"><a>Results</a></li>
                        </ul>
                        <div>
                            <div data-tab="${tabId}collectionRunnerTab:runner" class="tab-content ${tabId}collectionRunnerTab tab-content-active">
                                ${runnerHtml(tabId, colId)}
                            </div>
                            <div data-tab="${tabId}collectionRunnerTab:runnerResults" class="tab-content ${tabId}collectionRunnerTab">
                                <div id="collectionRunnerResults" style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                                    ${runnerResults(tabId, colId)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
            </div>
        </div>    
    `
    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = collectionRunnerModalHtmlStr
    closeActiveModals()
    modalsActive.push(modal)
    modal.querySelector(".collectionRunnerModalBackdrop").addEventListener("click", (e) => {
        delete collectionRunnerModal.state
        document.body.removeChild(modal)
        closeActiveModals()
    })
    document.body.appendChild(modal)
    setTabs()
}

function runnerHtml(tabId, colId) {
    var col = collectionRunnerModal.state("GET_COLLECTION")
    var envsHtml = ""
    Envs.forEach(function(env) {
        envsHtml += `
            <li style=" white-space: nowrap;"><a onclick="return setCollectionRunnerEnv('${env.name}', '${env.EnvId}')">${env.name}</a></li>        
        `
    });

    var reqsHtml = ""
    if(col.requests) {
        for (var index = 0; index < col.requests.length; index++) {
            var req = col.requests[index];
            req.collectionRun = true
            reqsHtml += `
                <li style="border-bottom: 1px solid rgb(221, 221, 221);padding: 10px 3px;">
                    <span><input type="checkbox" checked onchange="return toggleReqs('${index}')" /></span>
                    <span><b>${req.methodType}</b></span>
                    <span>${req.name}</span>
                </li>
            `        
        }
    }

    return `
        <div style="display: flex; justify-content: space-between;">
            <div style="flex-grow:1; margin: 0 2px; border: 1px solid rgb(221, 221, 221); padding: 5px;">
                <!-- settings for col run -->
                    <div style="margin: 9px 0; white-space: nowrap;">
                        <span>Env:</span>
                        <button style="position: relative;" onclick="return showDropdown('.${tabId}setCollectionRunnerEnvDropdown')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">
                            <span><span id="setCollectionRunnerEnvNode" data-value="none">No Env</span> <span class="icon-arrow-down"></span></span>
                            <div class="dropdown right-dropdown ${tabId}setCollectionRunnerEnvDropdown close">
                                <ul>
                                    ${envsHtml}
                                </ul>
                            </div>
                        </button>
                    </div>
                    <div style="margin: 9px 0; white-space: nowrap;">
                        <span>Delay(ms):</span>
                        <input type="text" id="${tabId}collectionRunnerSettingsDelay" placeholder="Delay" />
                    </div>
                    <div style="margin: 9px 0; white-space: nowrap;">
                        <span>Iterations:</span>
                        <input min="0" max="10" type="number" id="${tabId}collectionRunnerSettingsIterations" placeholder="Iterations" />
                    </div>
                    <div style="margin: 4px 0; white-space: nowrap; float: right;">
                        <button style="padding: 12px 26px;font-size: 0.9em;font-weight: 700;" onclick="return runCollection(event, '${tabId}', '${colId}')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">Run</button>
                    </div>
            </div>
            <div style="flex-grow:1; margin: 0 2px;">
                <h4 class="lightWeight" style="margin: 2px 0;padding-bottom: 5px;">Run Order</h4>
                <!-- list requests collection -->
                <ul style="border: 1px solid rgb(221, 221, 221);">
                    ${reqsHtml}
                </ul>
            </div>
        </div>
    `
}

function runnerResults(tabId, colId) {
    return `
    `
}

function renderRunnerResults(its) {
    var colRunnNode = window["collectionRunnerResults"]
    // log("renderResResult:", res )
    var itshtml = ""
    for (var i = 0; i < its.length; i++) {
        var res = its[i]
        itshtml += `
          <h2 style="margin: 4px 0;font-weight: 300;">${i+1} Iteration</h2>
        `
        for (var index = 0; index < res.length; index++) {
            var r = res[index];
            var status = r["response"].status || ""
            var statusText = r["response"].statusText || ""
            var bgC = ""
            if(status) {
                bgC = status == 200 ? "bg-green" : "bg-default"
            }

            var testHtml = ""
            if(r.testsResult) {
                var testRes = r.testsResult
                // aggregate test results
                for (var key in testRes) {
                    var describe = testRes[key];
                    testHtml += `<div style="padding: 9px 0; background: rgba(221, 221, 221, 0.32);">${describe.name}</div>`
                    describe.expects.forEach(expect => {
                        var col = expect.status ? "green" : "rgb(221,75,57)"
                        testHtml += `
                            <li style="border-top: 1px solid rgb(221, 221, 221); padding: 8px 0;">
                                <span><b style="color: ${col}; text-transform: uppercase;">${expect.status}</b> ${expect.name}</span>
                            </li>
                        `
                    })
                }
            }

            itshtml += `
                <div>
                    <div style="border-bottom: 1px solid rgb(221, 221, 221);padding: 10px 3px; white-space: nowrap;display: flex;justify-content: space-between;">
                        <div>
                            <span><b>${r.requests.methodType}</b></span>
                            <span>${r.requests.name}</span>
                        </div>
                        <div>
                            <span class="${bgC} color-white bd-rad-3 pad-3">${status}</span>
                            <span class="${bgC} color-white bd-rad-3 pad-3">${statusText}</span>
                        </div>
                    </div>
                        <ul style="padding-left: 16px;">
                            ${testHtml}
                        </ul>
                </div>
            `
        }
    }
    colRunnNode.innerHTML = itshtml
}

function setCollectionRunnerEnv(envName, envId) {
    // id="${tabId}setCollectionRunnerEnv" data-value="none"
    var n = window[`setCollectionRunnerEnvNode`]
    n.innerText = envName
    n.dataset.value = envId
}

function runCollection(event, tabId, colId) {
    var col = collectionRunnerModal.state("GET_COLLECTION")
    if(!col.requests || col.requests.length <= 0) {
        return false
    }
    var reqs = col.requests


    var targ = event.target
    targ.setAttribute("disabled", true)
    targ.innerText = "Running..."

    reqs = extractRunnableRequests(col.requests)

    // get settings.
    // ${tabId}collectionRunnerSettingsDelay
    // ${tabId}collectionRunnerSettingsIterations
    var envToUse = window[`setCollectionRunnerEnvNode`].dataset.value
    var delay = window[`${tabId}collectionRunnerSettingsDelay`].value
    var iterations = window[`${tabId}collectionRunnerSettingsIterations`].value

    delay = delay.length <= 0 ? 0 : delay
    iterations = iterations.length <= 0 ? 0 : iterations

    var runnerRes = []
    var currentIter = []
    var index = 0

    displayNotif("Running collections...", {type: "info"})
    iterationStart()
    // runnerResults()

    function runRequests() {
        var req = reqs[index]

        // evaluate variables in req
        evalVariables(req)

        // run pre-request in collection.

        // generate auth for collection
        if(col.authorization)
            req = generateAuthCollection(req, col.authorization)

        makeRequest(req, false, (res) => {
            // req["__response"] = res

            // set postly api and run collection tests
            var postlyApi = setPostlyAPI(res)
            var testRes = runCollectionTests(col.tests, postlyApi)
            // log(testRes)
            // currentIter.push(req)
            currentIter.push({
                "testsResult": testRes,
                "response": res,
                "requests": req
            })

            if(index == (reqs.length - 1)) {
                runnerRes.push(currentIter)
                currentIter = []
                index = 0
                iterationStart()
            } else {
                setTimeout(() => {
                    index++
                    runRequests()
                }, delay)
            }
        })
    }

    function iterationStart() {
        if(iterations < 0) {
            targ.removeAttribute("disabled", null)
            targ.innerText = "Run"
            displayNotif("Done running colections", {type: "success"})
            // log("Done running colections:",runnerRes)
            renderRunnerResults(runnerRes, tabId, colId)
        } else {
            iterations--
            runRequests()
        }
    }
}

function runCollectionTests(tests, api) {
    var testResult = testF(tests, api)
    return testResult
}

function extractRunnableRequests(reqs) {
    return reqs.filter(req => { 
        if(req.collectionRun) {
            return true
        } else
            return false
    })
}

function toggleReqs(requestId) {
    return collectionRunnerModal.state("TOGGLE_RUNNABLE", requestId)
}

function setCollectionRunnerEnv(envName, EnvId) {
    // ${tabId}setCollectionRunnerEnvNode" data-value="none"
    var envNode = getFromWindow("setCollectionRunnerEnvNode")
    envNode.dataset.value = EnvId
    envNode.innerText = envName
    collectionRunnerModal.state("SET_ENV", EnvId)
}

function evalVariables(req) {
    // parseVarsAndReplaceCollection()
    function parseVars(str) {
        return parseVarsAndReplaceCollection(str, {
            env: collectionRunnerModal.state("GET_ENV"),
            collectionVars:  collectionRunnerModal.state("GET_COLLECTION_VARS"),
        })        
    }

    // eval url
    req.url = parseVars(req.url)

    // eval params
    req.params = req.params.map(param => {
        param.key = parseVars(param.key)
        param.value = parseVars(param.value)
        return param
    })

    // eval body
    if(req.body.mode == "form") {
        req.body.form = req.body.form.map(bdy => {
            bdy.key = parseVars(bdy.key)
            bdy.value = parseVars(bdy.value)
            return bdy
        })
    }

    // eval headers
    req.headers = req.headers.map(header => {
        header.key = parseVars(header.key)
        header.value = parseVars(header.value)
        return header
    })

    // eval authorization
    var auth
    var authType
    if(req.authorization) {
        auth = req.authorization
        authType = auth.type

        switch (authType) {
            case 'Basic':
                auth.password = parseVars(auth.password)
                auth.username = parseVars(auth.username)
                break;
            case 'Bearer':
                auth.token = parseVars(auth.token)
                break;

            case "APIKey":
                auth.auth_key = parseVars(auth.auth_key)
                auth.auth_value = parseVars(auth.auth_value)
            break;
        
            default:
                break;
        }
    }

    return req
}
// refreshCollections()

var collectionModal = `

<!-- <div class="modal"> -->
    <div class="modal-backdrop collection-modal-backdrop"></div>
    <div class="modal-body" style="">
        <div class="modal-head" style="">
            <h4 style="padding: 0;margin: 0;">Create a Collection</h4>
            <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
        </div>
        <div class="modal-inner-body" style="">
            <p id="collectionModalRequestError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
            <div>
                <input type="text" id="collectionName" placeholder="Enter collection name" />
            </div>
        </idv>
        <div class="modal-footer" style="">
            <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
            <button onclick="return createCollection(event)" class="createCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Create</button>
        </div>
    </div>

<!-- </div> -->
`

function attachCollectionModal() {
    var mo = document.createElement("div")
    mo.classList.add("modal")
    mo.classList.add("collectionModal")
    // mo.classList.add("close")
    mo.innerHTML = collectionModal
    closeActiveModals()
    modalsActive.push(mo)
    document.body.appendChild(mo)

    document.querySelector(".modal-backdrop.collection-modal-backdrop").addEventListener("click", () => {
        // reset the modal    
        /*collectionModalRequestError.innerHTML = ""
        collectionModalRequestError.classList.add("close")        

        collectionName.value = ""

        var createCollectionModalBtnNode = document.querySelector(`.createCollectionModalBtn`)
        createCollectionModalBtnNode.removeAttribute("disabled")
        createCollectionModalBtnNode.innerHTML = "Create"

        document.querySelector(".collectionModal")
            .classList.add("close"); */
        document.body.removeChild(mo)
        closeActiveModals();
    })
}

// calls up the collection modal
function createNewCollection(event) {
    attachCollectionModal()
    /*document.querySelector(".collectionModal")
        .classList.remove("close")*/
}

// attachCollectionModal()

function createCollection(event) {
    var btnNode = event.target
    collectionModalRequestError

    var colName = collectionName.value
    if(colName.length <= 0) {
        collectionModalRequestError.innerHTML = "Please, type a collection name"
        collectionModalRequestError.classList.remove("close")        
        return
    }

    // var btnNode = document.querySelector(`.createCollectionModalBtn`)
    btnNode.setAttribute("disabled", null)
    btnNode.innerText = "Creating..."

    // log(colName)
    var id = "collectionId" + Date.now()

    if(checkTeamIsPersonal()) {
        addCollection({ collectionId: id, name: colName, teamId: currentTeam }, (done, res) => {
            if(!done) {
                collectionModalRequestError.innerText = res
            } else {
                document.querySelector(".modal-backdrop.collection-modal-backdrop").dispatchEvent(new Event("click"))
            }
        })
    } else {
        axios.post(url + "team/add/collection", {
            userId: user.id,
            teamId: currentTeam.id,
            collectionName: colName
        }).then(res => {
            var r = res.data
        })
    }
    
    btnNode.removeAttribute("disabled")
    btnNode.innerText = "Create"
    refreshCollections()
}

function refreshCollections() {
    if(checkTeamIsPersonal()) {
        // get all collections in indexeddb with teamid to teamname
        refreshCollectionsIdb()
    } else {

        // load the collections belonging to the team
        // for each collection, load its requests
        refreshCollectionsNetwork()
    }
}

function refreshCollectionsNetwork() {
    var ul = document.querySelector(`.collections.historyUl`)
    ul.innerHTML = "Loading collections..."

    var htmlStr = ""

    axios.get(url + "collections/" + currentTeam.id).then(res => {
        var cols = res.data
        collections = cols

        cols.forEach((col) => {
            var id = "historyCollectionsFolder" + Date.now() + col.id
            var h = `
                <li class="historyLi ${col.id}Collection" onclick="return historyCollectionsFolderClick(event, '.historyCollectionsFolder.${id}', '${col.id}')">
                    <span class="icon-folder-alt"></span><span> ${col.name}</span>
                    <ul class="historyCollectionsFolder ${id} close">
            `
            if(col.requests) {
                col.requests.forEach(req => {
                    // gen tabId and attach to req
                    // TODO: check if tabId exists
                    var tabId = "requestTab" + Date.now() + req.id
                    req.tabId = tabId
                    h += `
                        <li class="historyLi" onclick="return requestItemClick(event, '${req.id}', '${col.id}')"><span class="historyItem historyItemMethodType color-orangered bd-rad-3 pd-2">${req.methodType}</span><span class="historyItemName">${req.name}</span></li>
                    `
                })
            }

            h += `
                    </ul>
                </li>            
            `
            htmlStr += h
        })
        ul.innerHTML = htmlStr
    }).catch(e => {
        ul.innerHTML = e        
    })
}

function refreshCollectionsIdb() {
    var ul = document.querySelector(`.collections.historyUl`)
    ul.innerHTML = "Loading collections..."
    var htmlStr = ""

    getAllCollection((cols) => {
        //log("getAllCollection:",cols)
        collections = []
        cols.forEach((col) => {
            var id = "historyCollectionsFolder" + Date.now() + col.collectionId
            var h = `
                <li class="historyLi collectionFolder ${col.collectionId}Collection">
                    <div style="display: flex;width: 100%;">
                        <div style="width: 100%; display: flex; align-items: flex-start;" onclick="return historyCollectionsFolderClick(event, '.historyCollectionsFolder.${id}', '${col.collectionId}')">
                            <span class="icon-folder-alt" style="font-size: 24px;"><!-- &#128194 --></span>
                            <span style="padding-left: 6px;">
                                 ${col.name}
                                <div>
                                    <span style="font-size: 14px;/*! color: gray; */padding: 6px 0;display: block;" class="${id}noOfReqs"></span>
                                </div>
                             </span>
                        </div>
                        <span class="icon-options" style="float: right; padding: 4px; position: relative;" onclick="return showDropdown('.${currentTab}${id}collectionOptionsDropdown')">
                                    <div class="dropdown ${currentTab}${id}collectionOptionsDropdown close" style="left: unset; right: 0;">
                                        <ul>
                                            <li><a onclick="return renameCollectionModal('${col.collectionId}')"><span style="padding-right: 4px;" class="icon-note"></span>Rename</a></li>
                                            
                                            <li><a onclick="return editCollectionModal('${col.collectionId}')"><span style="padding-right: 4px;" class="icon-pencil"></span>Edit</a></li>

                                            
                                            <li><a onclick="return viewCollectionModal('${col.collectionId}')"><span style="padding-right: 4px;" class="icon-eye"></span>View</a></li>
                                            
                                            <li><a onclick="return exportCollectionModal('${col.collectionId}')"><span style="padding-right: 4px;" class="icon-cloud-download"></span>Export</a></li>
                                            <li><a onclick="return addRequestCollectionModal('${col.collectionId}')"><span style="padding-right: 4px;" class="icon-plus"></span>Add Request</a></li>
                                            <!--
                                            <li><a onclick="return shareCollectionModal('${col.collectionId}')"><span style="padding-right: 4px;" class="icon-share"></span>Share</a></li> -->
                                            
                                            
                                            <li><a onclick="return deleteCollection('${col.collectionId}')"><span style="padding-right: 4px;" class="icon-trash"></span>Delete</a></li>
                                        </ul>
                                    </div>                        
                        </span>
                    </div>
                    <ul class="historyCollectionsFolder ${id} close">
            `
            getRequestsbyColId(col.collectionId, (done, reqs) => {
                col.requests = reqs
                collections.push(col)
                // log("Collection:", col.name, reqs)
                document.querySelector(`.${id}noOfReqs`).innerText = reqs.length + " request(s)"

                // log(col.collectionId, done, reqs)

                var reqStr = ""
                if(done) {
                    reqs.forEach(req => {
                        // gen tabId and attach to req
                        var tabId = "requestTab" + Date.now() + req.requestId
                        req.tabId = req.tabId ? req.tabId : tabId
                        reqStr += `
                            <li class="historyLi" onclick="return requestItemClick(event, '${req.requestId}', '${col.collectionId}')">
                                <span class="historyItem historyItemMethodType color-orangered bd-rad-3 pd-2">${req.methodType}</span>
                                <span class="historyItemName">${req.name}</span>
                            </li>
                        `
                    })
                    h += reqStr
                    document.querySelector(`.historyCollectionsFolder.${id}`).innerHTML = reqStr
                }
            })
            h += `
                    </ul>
                </li>            
            `
            //log(h)
            htmlStr += h
        })
        ul.innerHTML = htmlStr
    })
}

function requestItemClick(evt, reqId, colId) {
    evt.stopPropagation()
    var data
    var filCols
    // generate tabId
    if(checkTeamIsPersonal()) {
        filCols = collections.filter(col => col.collectionId == colId)[0]
        data = filCols.requests.filter(req => req.requestId == reqId)[0]
         // log(data, filCols, reqId, colId)
    } else {
        filCols = collections.filter(col => col.id == colId)[0]
        data = filCols.requests.filter(req => req.id == reqId)[0]        
    }
    createNewReqTab(evt, data.tabId, data)
}

function historyCollectionsClick(evt, colId) {
    // log("Collection click", col)

    // fetch history id in col id

    // append the result to the col
}

function historyCollectionsFolderClick(evt, className) {
    document.querySelector(className).classList.toggle("close")
}

function checkboxOnChange(event, colId) {
    selectedColId = colId
    if(lastEl) {
        lastEl.checked = false
        lastEl.setAttribute("checked", false)
    }
    lastEl = event.target
}

function addReqCollection(event) {
    if(checkTeamIsPersonal()) {
        // if the request tab is not yet saved, save to request and collection.

        // check if request already exists, and attached to collection
        postData[currentTab].collectionId = selectedColId
        if(!postData[currentTab].requestId) {
            postData[currentTab].requestId = "requestId" + Date.now()
        }
        getRequest(postData[currentTab].requestId, (done, res) => {
            //log("addReqCollection:", done, res)
            // request exits
            if(done) {
                updateRequest(postData[currentTab], () => {})
            } else {
                addRequest(postData[currentTab], (doneReq, resReq) => {
                    //log("addRequest:", doneReq, resReq, postData[currentTab])
                })
            }
        })
    } else {
        // post to network
    }
    refreshCollections()
}

function addToCollection(tabId) {
    var colStr = ""
    collections.forEach(col => {
        colStr += `
        <li>
            <div class="resultAddTeamItem">
                <div style="display: flex;">
                    <span><input type="checkbox" onchange="return checkboxOnChange(event, '${col.collectionId}')" /> </span>
                    <span style="padding: 0 6px;">${col.name}</span>
                </div>
            </div>
        </li>`
    })

    var addToCollectionModal = `

    <!-- <div class="modal"> -->
        <div class="modal-backdrop addToCollectionModalBackdrop"></div>
        <div class="modal-body">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Select a Collection</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="addCollectionModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div>
                    <div style="padding: 8px 0; border: 1px solid rgb(221, 221, 221); border-radius: 3px;">
                        <button class="bg-default color-white" onclick="return attachCollectionModal(event);">Create Collection</button>
                    </div>
                    <ul style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                        ${colStr}
                    </ul>
                
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                <button onclick="return addReqCollection(event)" class="createCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Add To Collection</button>
            </div>
        </div>

    <!-- </div> -->
    `

    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = addToCollectionModal
    closeActiveModals()
    modalsActive.push(modal)
    modal.querySelector(".addToCollectionModalBackdrop").addEventListener("click", (e) => {
        lastEl = null
        selectedColId = null
        document.body.removeChild(modal)
        closeActiveModals()
    })
    document.body.appendChild(modal)
}

function removeReqFromCollection(tabId) {
    // log("Remove from collection")
    if(confirm("Do you really want to remove this request?")) {
        if(checkTeamIsPersonal()) {
            deleteRequest(postData[currentTab], (done, res) => {})
        } else {
            // network
        }
        refreshCollections()
    }
}

function renameCollectionModal(colId) {
    // pop up a modal
    var renameCollectionModal = `
        <!-- <div class="modal"> -->
            <div class="modal-backdrop renameCollectionModalBackdrop"></div>
            <div class="modal-body">
                <div class="modal-head" style="">
                    <h4 style="padding: 0;margin: 0;">Rename a Collection</h4>
                    <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
                </div>
                <div class="modal-inner-body" style="">
                    <p id="renameCollectionModalRequestError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                    <div>
                        <input type="text" id="renameCollectionName" placeholder="Enter collection name" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                    <button onclick="return renameCollection(event, '${colId}')" class="createCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Rename</button>
                </div>
            </div>

        <!-- </div> -->
    `

    var mo = document.createElement("div")
    mo.classList.add("modal")
    // mo.classList.add("renameCollectionModal")
    // mo.classList.add("close")
    closeActiveModals()
    modalsActive.push(mo)
    mo.innerHTML = renameCollectionModal

    document.body.appendChild(mo)

    document.querySelector(".modal-backdrop.renameCollectionModalBackdrop").addEventListener("click", () => {
        // reset the modal    
        document.body.removeChild(mo)
        closeActiveModals()
    })
}

function renameCollection(evt, colId) {
 // log(colId)
 var targ = evt.target
 targ.setAttribute("disabled", true)
 targ.innerText = "Renaming..."

 var colName = renameCollectionName.value

 if(colName.length <= 0) {
     renameCollectionModalRequestError.innerText = "Please, type a collection name."
     renameCollectionModalRequestError.classList.remove("close")
     return
 } else {
     if(checkTeamIsPersonal()) {
         getCollectionIdb(colId, (done, res) => {
             if(done) {
                 var col = res
                 col.name = colName
                updateCollection(col, (done, r) => {                                        
                    if(done) {
                        renameCollectionName.value = ""
                        displayNotif("Collection successfully renamed.", {type: "success"})
                        closeActiveModals()
                    } else {
                        displayNotif("Error occured.", {type: "danger"})                        
                    }
                    targ.removeAttribute("disabled", null)
                    targ.innerText = "Rename"
                    refreshCollections()
                })
             } else {
                displayNotif("Error occured.", {type: "danger"})                        
                targ.removeAttribute("disabled", null)
                targ.innerText = "Rename"                 
             }
         })
     } else {
         // network
     }
 }
}

function deleteCollection(colId) {
    if(confirm("Do you wish to delete this collection ?")) {
        if(checkTeamIsPersonal()) {
            deleteCollectionDb({
                collectionId: colId
            }, (done, res) => {
                getRequestsbyColId(colId, (done, res) => {
                    if(done) {
                        if(reqs)
                            reqs.forEach(req => {
                                deleteRequest(req, (done, r) => {
                                    refreshCollections()
                                })
                            })
                    }
                })
            })
        } else {
            // network
        }
        refreshCollections()
    }
}
var newTeamModal = `
<!-- <div class="modal"> -->
    <div class="modal-backdrop newTeamModalBackdrop"></div>
    <div class="modal-body">
        <h4>Create A New Team</h4>
        <p id="modalNewTeamError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
        <div>
            <input type="text" id="newTeamName" placeholder="Team name" />
        </div>
        <div style="margin: 4px 0;">
            <button onclick="return newTeam(event)" class="newTeamModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12 btn-block">Create Team</button>
        </div>
    </div>

<!-- </div> -->
`

function createTeam(event) {
    log("New Team Modal")
    var mo = document.createElement("div")
    mo.classList.add("modal")
    mo.classList.add("newTeamModal")
    //mo.classList.add("close")
    mo.innerHTML = newTeamModal

    document.body.appendChild(mo)

    document.querySelector(".modal-backdrop.newTeamModalBackdrop").addEventListener("click", () => {
        document.body.removeChild(mo)
    })
}

var addToTeamModal = `
<!-- <div class="modal"> -->
    <div class="modal-backdrop addToTeamModalBackdrop"></div>
    <div class="modal-body">
        <h4>Add New Team Member(s)</h4>
        <p id="modalAddNewTeamError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
        <div>
            <input type="text" id="newTeamMemberName" placeholder="Type member name" />
        </div>
        <div style="margin: 4px 0;">
            <h3 class="resultAddTeamHead">Results:</h3>
            <ul>
                <li>
                    <div class="resultAddTeamItem">
                        <span style="">Chidume</span>
                        <span style="display: flex; align-items: center;">
                            Action: 
                            <a onclick="return showDropdown('.addTeamDropdown')" style="position: relative;">
                                <span>Normal Member</span>
                                <span class="icon-arrow-down"></span>
                                <div class="dropdown addTeamDropdown close">
                                    <ul>
                                        <li><a onclick="return ">Owner</a></li>
                                        <li><a onclick="return ">Delete</a></li>
                                    </ul>
                                </div>
                            </a>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="resultAddTeamItem">
                        <span style="">Nnamdi</span>
                        <span style="display: flex; align-items: center;">
                            Action: 
                            <a>
                                <span>Normal Member</span>
                                <span class="icon-arrow-down"></span>
                            </a>
                        </span>
                    </div>
                </li>

            </ul>
        </div>
    </div>

<!-- </div> -->
`

function addToTeam(event) {
    var mo = document.createElement("div")
    mo.classList.add("modal")
    mo.classList.add("addNewTeamModal")
    // mo.classList.add("close")
    mo.innerHTML = addToTeamModal

    document.body.appendChild(mo)

    document.querySelector(".modal-backdrop.addToTeamModalBackdrop").addEventListener("click", () => {
        document.body.removeChild(mo)
    })
}

// This will fetch all the teams the user belongs to
function loadTeams() {
    var htmlStr = `
        <li><a onclick="return selectTeam('personal')">Personal</a></li>
    `
    axios.get(url + "teams/" + user.id).then((res) => {
        var _teams = res.data
        teams = _teams
        _teams.forEach(function(team) {
            htmlStr += `<li><a onclick="return selectTeam('${team.id}')">${team.name}</a></li>`
        });
        teamsList.innerHTML = htmlStr
    }).catch(e => {
        log(e)
    })
}



var testEx = `
describe("Test for Response code 1", () => {
    expect("Response to be 500", postly.responseCode).toBe(500)
})

describe("Test for Response code 2", () => {
    expect("Response to be 200", postly.responseCode).toBe(200)
    expect("Response to be 600", postly.responseCode).toBe(600)
})

describe("Test for Response Method", () => {
    expect("Method to be GET", postly.response.config.method).toBe("get")
})
`

/**
 * 
 */
function testF(testScript, api) {
    // log("testF")

    var testRes = {}
    var currDesc = null
    // var currentTab = "tabId233"

    function describe(desc, fn) {
        var id = "describe" + desc.split(" ").join("") + Date.now()
        currDesc = id
        if(!testRes[currDesc])
            testRes[currDesc] = {}
        testRes[currDesc] = {
            name: desc,
            expects: []
        }
        try {
            // call expect
            fn()            
        } catch (error) {
          // fn(error)  
        }
        currDesc = null
    }

    function expect(desc, test) {

        // matchers
        
        // toBe uses strict equality `===` for equality checking.
        function toBe(data) {
            var status
            if(data === test) {
                status = true
            } else {
                status = false
            }
            testRes[currDesc].expects.push({
                name: desc,
                status
            })
        }

        // deep equality comparison
        function toEqual(data) {

        }

        return {
            toBe,
            toEqual
        }
    }
    var funTest = new Function("describe", "expect", "postly", testScript)
    funTest(describe, expect, api)

    return testRes
}

function displayTest(testRes) {
    var node = document.querySelector(`.${currentTab}responseTabContent.Tests`)
    // console.log(testRes)    

    node.innerHTML = ""

    var h = `
        <ul>
    `

    // get describes
    for (var key in testRes) {
        var describe = testRes[key];
        h += `<div style="padding: 9px 0; background: rgba(221, 221, 221, 0.32);">${describe.name}</div>`
        describe.expects.forEach(expect => {
            var col = expect.status ? "green" : "rgb(221,75,57)"
            h += `
                <li style="border-top: 1px solid rgb(221, 221, 221); padding: 8px 0;">
                    <span><b style="color: ${col}; text-transform: uppercase;">${expect.status}</b> ${expect.name}</span>
                </li>
            `
        })
    }
    h += `</ul>`
    node.innerHTML = h
}

function aboutModal() {
    var aboutModalHtmlStr = `
        <div class="modal-backdrop aboutModalBackdrop"></div>
        <div class="modal-body">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">About POSTly</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <div>
                    <h1 style="display: flex;justify-content: center;" class="color-default">POSTly</h1>
                </div>
                <div style="padding: 10px;">
                    This app was built by <b class="color-default">Chidume Nnamdi</b>, a software developer from Nigeria.
                    \n

                    <p>
                        <h3>Social Media</h3>
                        You can reach me via:

                        <ul style="margin-left: 7px;">
                            <li style="padding: 3px 0;">Twitter: <a style="display:inline;" target="_blank" href="https://twitter.com/@ngarchangel">@ngArchangel</a></li>
                            <li style="padding: 3px 0;">Email: <a style="display:inline;" target="_blank" href="emailto:kurtwanger40@gmail.com">kurtwanger40@gmail.com</a></li>
                            <li style="padding: 3px 0;">Facebook: <a style="display:inline;" target="_blank" href="https://facebook.com/philip.david.5011">facebook.com/philip.david.5011</a></li>
                        </ul>
                    </p>
                    <div>
                        <h3>Feedback</h3>
                        <div>
                            Feel free to drop your issues, views and comments about this app on my email: <a style="display:inline;" target="_blank" href="emailto:kurtwanger40@gmail.com">kurtwanger40@gmail.com</a>\n
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
            </div>
        </div>    
    `
    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = aboutModalHtmlStr
    closeActiveModals()
    modalsActive.push(modal);
    modal.querySelector(".aboutModalBackdrop").addEventListener("click", (e) => {
        document.body.removeChild(modal)
        closeActiveModals()
    })
    document.body.appendChild(modal)
}

function signInModal(event) {
    var signInModalHtml = `

    <!-- <div class="modal"> -->
        <div class="modal-backdrop signInModalBackdrop"></div>
        <div class="modal-body">
            <h4>Sign In</h4>
            <div style="font-size: 14px; color: rgb(221,75,57);">
                <span>Don't have an account? <a style="display: inline; text-decoration: underline;" onclick="return signUpModal(event)">Sign up here</a></span>
            </div>
            <p id="signInModalRequestError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
            <div style="margin: 9px 0;">
                <input type="text" id="signInUsername" placeholder="Username" />
            </div>
            <div style="margin: 9px 0;">
                <input type="password" id="signInPassword" placeholder="Password" />
            </div>
            <div style="margin: 9px 0;">
                <button onclick="return signIn(event)" class="createCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12 btn-block">Sign In</button>
            </div>
        </div>

    <!-- </div> -->
    `
    closeActiveModals()
    var modalNode = document.createElement("div")
    modalNode.setAttribute("class", "modal")
    // modalNode.classList.add("close")
    modalNode.classList.add("saveModal")
    modalNode.innerHTML = signInModalHtml
    document.body.appendChild(modalNode)
    document.querySelector(".modal-backdrop.signInModalBackdrop").addEventListener("click", () => {
        document.body.removeChild(modalNode)
    })
    modalsActive.push(modalNode)
}

function signUpModal() {
    var registerModal = `

    <!-- <div class="modal"> -->
        <div class="modal-backdrop signUpModalBackdrop"></div>
        <div class="modal-body">
            <h4>Sign Up</h4>
            <div style="font-size: 14px; color: rgb(221,75,57);">
                <span>Have an account? <a style="display: inline; text-decoration: underline;" onclick="return signInModal(event)">Sign in here</a></span>
            </div>
            <p id="sighnUpModalRequestError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
            <div style="margin: 9px 0;">
                <input type="text" id="signUpUsername" placeholder="Username" />
            </div>
            <div style="margin: 9px 0;">
                <input type="email" id="signUpEmail" placeholder="Email" />
            </div>
            <div style="margin: 9px 0;">
                <input type="password" id="signUpPassword" placeholder="Password" />
            </div>
            <div style="margin: 9px 0;">
                <input type="password" id="signUpPassword2" placeholder="Retype Password" />
            </div>
            <div style="margin: 9px 0;">
                <button onclick="return signUp(event)" class="createCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12 btn-block">Sign Up</button>
            </div>
        </div>

    <!-- </div> -->
    `
    closeActiveModals()
    var modalNode = document.createElement("div")
    modalNode.setAttribute("class", "modal")
    // modalNode.classList.add("close")
    modalNode.classList.add("saveModal")
    modalNode.innerHTML = registerModal
    document.body.appendChild(modalNode)
    document.querySelector(".modal-backdrop.signUpModalBackdrop").addEventListener("click", () => {
        document.body.removeChild(modalNode)
    })
    modalsActive.push(modalNode)
}
var url = "http://localhost:5000/api/"
// var proxyUrl = "http://localhost:4000/proxy/"
var proxyUrl = "https://node-app08.herokuapp.com/proxy/"
var log = console.log.bind(console)

var modalsActive = []
var tabs = []
var currentTab
var postData = {}

var currentMockServer
var mockCalls = false

var currentEnv
var Envs = []
var envVarInterpolationStart = "{{"
var envVarInterpolationEnd = "}}"
var codeGenStrategies = {
    generateCurlCode: generateCurlCode,
    generateNodejsAxiosCode: generateNodejsAxiosCode,
    generateFetchCode: generateFetchCode
}

var teams = []
var collections = []
var postly = {
    // describe
}

var dropdownsActive = []
var dropdownClicked = false

var currentEditors = {}

var currentTeam
var user

var lastEl
var selectedColId

window.addEventListener("DOMContentLoaded", () => {

    // check the user is logged in
    try {
        user = JSON.parse(localStorage.getItem("user"))    
    } catch (err) {
        user = { name: "nnamdi chidu", id: 0 }
    }

    try {
        if(!user) {
            localStorage.setItem("user", JSON.stringify({ name: "nnamdi chidu", id: 0 }))
            user = { name: "nnamdi chidu", id: 0 }
        }
    } catch (err) {}

    // get the prev team the user is working on
    // localStorage.setItem("currentTeam", JSON.stringify({ id: 1, ​name: "forLoop Africa Team" }));
    try {
        currentTeam = JSON.parse(localStorage.getItem("currentTeam"));
        if(!currentTeam) currentTeam = { id: "Personal", name: "Personal Team" } 
    } catch(e) {
        currentTeam = { id: "Personal", name: "Personal Team" }         
    }
    // currentTeam = {id: 1}

    // attachCollectionModal()
    // attachSaveModal()

    setupMockServersIdb()
    setUpCollectionsIdb()
    setUpRequestsIdb()
    setUpHistoryIdb()
    setUpEnvIdb()

    loadTeams()
    loadEnvsForDropdown()

    addNewTab(null, true)
    setVisualizerData()

    refreshHistoryTab()
    refreshCollections()

    currentTeamDisplay.innerText = currentTeam.name

    /*OverlayScrollbars(document.getElementById("mainTab"), {
        overflowBehavior: {
            x: "scroll",
            y: "hide"
        },
        scrollbars : {
            visibility: "auto"
        }
    });*/
  /*var Scrollbar = window.Scrollbar;

  Scrollbar.init(document.querySelector('#mainTab'));*/

})

