!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=121)}({121:function(t,e){function s(t,e,n,r,o,u,c){try{var a=t[u](c),s=a.value}catch(t){return n(t),0}a.done?e(s):Promise.resolve(s).then(r,o)}function n(a){return function(){var t=this,c=arguments;return new Promise(function(e,n){var r=a.apply(t,c);function o(t){s(r,e,n,o,u,"next",t)}function u(t){s(r,e,n,o,u,"throw",t)}o(void 0)})}}function o(t,e){return r.apply(this,arguments)}function r(){return(r=n(regeneratorRuntime.mark(function t(e,n){var r,o,u,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://hq.sinajs.cn/list="+e,t.next=5,fetch(r,{method:"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"text/plain; charset=GB18030"}});case 5:return o=t.sent,t.next=8,o.text();case 8:if(u=t.sent,c=u.split(","),e.startsWith("hk"))return t.abrupt("return",c[6]);t.next=12;break;case 12:return t.abrupt("return",c[3]);case 15:return t.prev=15,t.t0=t.catch(0),t.abrupt("return",String(t.t0));case 18:case"end":return t.stop()}},t,null,[[0,15]])}))).apply(this,arguments)}function u(){return(u=n(regeneratorRuntime.mark(function t(e,n){var r,o,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.github.com/repos/"+e+"/"+n,t.next=4,fetch(r);case 4:if((o=t.sent).ok){t.next=7;break}throw new Error(o.statusText);case 7:return t.next=9,o.json();case 9:return u=t.sent,t.abrupt("return",u.watchers_count);case 13:return t.prev=13,t.t0=t.catch(0),t.abrupt("return",t.t0);case 16:case"end":return t.stop()}},t,null,[[0,13]])}))).apply(this,arguments)}CustomFunctions.associate("ADD",function(t,e){return t+e}),CustomFunctions.associate("CLOCK",function(e){var t=setInterval(function(){var t=(new Date).toLocaleTimeString();e.setResult(t)},1e3);e.onCanceled=function(){clearInterval(t)}}),CustomFunctions.associate("INCREMENT",function(t,e){var n=0,r=setInterval(function(){n+=t,e.setResult(n)},1e3);e.onCanceled=function(){clearInterval(r)}}),CustomFunctions.associate("UPDATESTOKEPRICE",function(t,e,n){var r=setInterval(function(){o(t,e).then(function(t){n.setResult(t)},function(t){})},6e4);n.onCanceled=function(){clearInterval(r)}}),CustomFunctions.associate("GETSTOCKPRICE",o),CustomFunctions.associate("GETSTARCOUNT",function(t,e){return u.apply(this,arguments)}),CustomFunctions.associate("LOG",function(t){return console.log(t),t})}});