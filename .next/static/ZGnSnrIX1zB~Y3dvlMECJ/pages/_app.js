(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{135:function(e,t,n){"use strict";var r=n(17);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=v,t.default=void 0;var o=r(n(71)),a=r(n(20)),u=r(n(21)),i=r(n(30)),c=r(n(31)),f=r(n(32)),l=r(n(28)),s=r(n(0)),p=r(n(1)),d=r(n(136)),y=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return null}}]),t}(s.default.Component);(0,l.default)(y,"contextTypes",{headManager:p.default.object});var h="next-head";function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return[s.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}var b=["name","httpEquiv","charSet","itemProp","property"],m=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var g=(0,d.default)(function(e){return e.map(function(e){return s.default.Children.toArray(e.props.children)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return s.default.Fragment&&t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse().concat(v("")).filter(Boolean).filter((t=new o.default,n=new o.default,r=new o.default,a={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(t.has(e.key))return!1;t.add(e.key)}switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var u=0,i=b.length;u<i;u++){var c=b[u];if(e.props.hasOwnProperty(c))if("charSet"===c){if(r.has(c))return!1;r.add(c)}else{var f=e.props[c],l=a[c]||new o.default;if(l.has(f)&&-1===m.indexOf(f))return!1;l.add(f),a[c]=l}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+h,r=e.key||t;return s.default.cloneElement(e,{key:r,className:n})});var t,n,r,a},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(y);t.default=g},136:function(e,t,n){"use strict";var r=n(39),o=n(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var o,v=new d.default;function b(r){o=e((0,p.default)(v)),m.canUseDOM?t.call(r,o):n&&(o=n(o))}var m=function(e){function t(e){var n;return(0,a.default)(this,t),n=(0,u.default)(this,(0,i.default)(t).call(this,e)),t.canUseDOM||(v.add((0,l.default)((0,l.default)(n))),b((0,l.default)((0,l.default)(n)))),n}return(0,f.default)(t,e),(0,c.default)(t,null,[{key:"peek",value:function(){return o}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,v.clear(),e}}]),(0,c.default)(t,[{key:"componentDidMount",value:function(){v.add(this),b(this)}},{key:"componentDidUpdate",value:function(){b(this)}},{key:"componentWillUnmount",value:function(){v.delete(this),b(this)}},{key:"render",value:function(){return y.default.createElement(r,null,this.props.children)}}]),t}(y.Component);return(0,s.default)(m,"canUseDOM","undefined"!=typeof window),(0,s.default)(m,"contextTypes",r.contextTypes),(0,s.default)(m,"displayName","SideEffect(".concat((0,h.getDisplayName)(r),")")),m}};var a=o(n(20)),u=o(n(30)),i=o(n(31)),c=o(n(21)),f=o(n(32)),l=o(n(72)),s=o(n(28)),p=o(n(137)),d=o(n(71)),y=r(n(0)),h=n(41)},137:function(e,t,n){var r=n(138),o=n(139),a=n(147);e.exports=function(e){return r(e)||o(e)||a()}},138:function(e,t,n){var r=n(100);e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},139:function(e,t,n){var r=n(140),o=n(144);e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},140:function(e,t,n){e.exports=n(141)},141:function(e,t,n){n(40),n(142),e.exports=n(11).Array.from},142:function(e,t,n){"use strict";var r=n(36),o=n(16),a=n(63),u=n(124),i=n(125),c=n(81),f=n(143),l=n(99);o(o.S+o.F*!n(128)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,s,p=a(e),d="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,v=void 0!==h,b=0,m=l(p);if(v&&(h=r(h,y>2?arguments[2]:void 0,2)),null==m||d==Array&&i(m))for(n=new d(t=c(p.length));t>b;b++)f(n,b,v?h(p[b],b):p[b]);else for(s=m.call(p),n=new d;!(o=s.next()).done;b++)f(n,b,v?u(s,h,[o.value,b],!0):o.value);return n.length=b,n}})},143:function(e,t,n){"use strict";var r=n(27),o=n(69);e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},144:function(e,t,n){e.exports=n(145)},145:function(e,t,n){n(65),n(40),e.exports=n(146)},146:function(e,t,n){var r=n(83),o=n(19)("iterator"),a=n(64);e.exports=n(11).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||a.hasOwnProperty(r(t))}},147:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},174:function(e,t,n){e.exports=n(323)},225:function(e,t,n){e.exports=n(135)},228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(38))&&r.__esModule?r:{default:r},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n,r,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v="undefined"==typeof window,b=function(e){var t=e.makeStore,n=e.initialState,r=e.config,o=e.ctx,a=void 0===o?{}:o,u=r.storeKey,i=function(){return t(r.deserializeState(n),y({},a,r,{isServer:v}))};return v?i():(window[u]||(window[u]=i()),window[u])};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=y({storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(e){return e},deserializeState:function(e){return e}},t),function(n){var r,u,y,m;return u=r=function(r){function o(n,r){var a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),a=s(this,p(o).call(this,n,r));var u=n.initialState;return t.debug&&console.log("4. WrappedApp.render created new store with initialState",u),a.store=b({makeStore:e,initialState:u,config:t}),a}var u,i,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(o,a.Component),u=o,(i=[{key:"render",value:function(){var e=this.props,t=e.initialProps,r=(e.initialState,f(e,["initialProps","initialState"]));return a.default.createElement(n,c({},r,t,{store:this.store}))}}])&&l(u.prototype,i),y&&l(u,y),o}(),h(r,"displayName","withRedux(".concat(n.displayName||n.name||"App",")")),h(r,"getInitialProps",(y=o.default.mark(function r(a){var u,i;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(a){r.next=2;break}throw new Error("No app context");case 2:if(a.ctx){r.next=4;break}throw new Error("No page context");case 4:if(u=b({makeStore:e,config:t,ctx:a.ctx}),t.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",u.getState()),a.ctx.store=u,a.ctx.isServer=v,i={},!("getInitialProps"in n)){r.next=13;break}return r.next=12,n.getInitialProps.call(n,a);case 12:i=r.sent;case 13:return t.debug&&console.log("3. WrappedApp.getInitialProps has store state",u.getState()),r.abrupt("return",{isServer:v,initialState:t.serializeState(u.getState()),initialProps:i});case 15:case"end":return r.stop()}},r,this)}),m=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=y.apply(e,t);function a(e){i(o,n,r,a,u,"next",e)}function u(e){i(o,n,r,a,u,"throw",e)}a(void 0)})},function(e){return m.apply(this,arguments)})),u}}},320:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(413),{page:e.exports.default}})},323:function(e,t,n){"use strict";var r=n(39),o=n(17);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=O,t.Container=t.default=void 0;var a=o(n(96)),u=o(n(97)),i=o(n(324)),c=o(n(20)),f=o(n(21)),l=o(n(30)),s=o(n(31)),p=o(n(32)),d=o(n(28)),y=r(n(0)),h=o(n(1)),v=n(41),b=n(85),m=function(e){function t(){return(0,c.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}var n;return(0,p.default)(t,e),(0,f.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,b.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=O(t);return y.default.createElement(g,null,y.default.createElement(n,(0,i.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,u.default)(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,v.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(y.Component);t.default=m,(0,d.default)(m,"childContextTypes",{headManager:h.default.object,router:h.default.object});var g=function(e){function t(){return(0,c.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(y.Component);t.Container=g;var w=(0,v.execOnce)(function(){0});function O(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),t},get asPath(){return w(),n},back:function(){w(),e.back()},push:function(t,n){return w(),e.push(t,n)},pushTo:function(t,n){w();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return w(),e.replace(t,n)},replaceTo:function(t,n){w();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},324:function(e,t,n){var r=n(134);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o},413:function(e,t,n){"use strict";n.r(t);var r=n(38),o=n.n(r),a=n(0),u=n.n(a),i=n(225),c=n.n(i),f=n(76),l=n(174),s=n.n(l),p=n(228),d=n.n(p),y=n(54);function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var v=Object(y.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.text,o=t.todo;switch(n){case"ADD_TODO":return[].concat(h(e),[{id:Math.random().toString(36).substring(2),text:r}]);case"REMOVE_TODO":return e.filter(function(e){return e!==o});default:return e}}}),b=Object(y.d)(function(e){return e}),m=Object(y.a)()(y.e);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){O(e,t,n[t])})}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t,n,r,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.default=d()(function(e){return m(v,e,b)},{debug:"undefined"!=typeof window&&!1})(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,j(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,s.a),n=t,r=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,r=e.store;return u.a.createElement(l.Container,null,u.a.createElement(c.a,null,u.a.createElement("title",null,"Backpacker Deals | Tours, Activities and Travel Deals | Great Experiences At Backpackers Price ")),u.a.createElement(f.a,{store:r},u.a.createElement(t,n)))}}],a=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,r=t.ctx,e.t0=w,e.t1={},!n.getInitialProps){e.next=9;break}return e.next=6,n.getInitialProps(r);case 6:e.t2=e.sent,e.next=10;break;case 9:e.t2={};case 10:return e.t3=e.t2,e.t4=(0,e.t0)(e.t1,e.t3),e.abrupt("return",{pageProps:e.t4});case 13:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function u(e){x(a,r,o,u,i,"next",e)}function i(e){x(a,r,o,u,i,"throw",e)}u(void 0)})});return function(e){return t.apply(this,arguments)}}()}],r&&P(n.prototype,r),a&&P(n,a),t}())}},[[320,1,0]]]);