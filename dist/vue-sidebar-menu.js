!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-sidebar-menu"]=e():t["vue-sidebar-menu"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=8)}([function(t,e){t.exports=function(t,e,i,n,o,s){var r,a=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId=o);var c;if(s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):n&&(c=n),c){var d=u.functional,m=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),m(t,e)}):u.beforeCreate=m?[].concat(m,c):[c]}return{esModule:r,exports:a,options:u}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(5),o=i(16),s=i(0),r=s(n.a,o.a,!1,null,null,null);e.default=r.exports},function(t,e,i){"use strict";var n=i(6),o=i(15),s=i(0),r=s(n.a,o.a,!1,null,null,null);e.a=r.exports},function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n={methods:{toggleDropdown:function(){this.item.child&&(this.show=!this.show)},closeDropdown:function(){this.show=!1},isLinkActive:function(){if(this.item&&this.item.href&&this.item.href==window.location.pathname)return!0}}}},function(t,e,i){"use strict";var n=i(1),o=i(2),s=i(17);e.a={name:"SidebarMenu",components:{Item:n.default,SubItem:o.a,MobileItem:s.a},props:["menu"],data:function(){return{isCollapsed:!1,mobileItem:null,mobileItemPos:0}},created:function(){var t=this;this.$on("mouseEnterItem",function(e){t.mobileItem=e.item,t.mobileItemPos=e.pos})},methods:{mouseLeave:function(){this.mobileItem=null},toggleCollapse:function(){this.isCollapsed=!this.isCollapsed,this.$emit("toggleCollapse")}}}},function(t,e,i){"use strict";var n=i(2),o=i(3);e.a={data:function(){return{show:!1}},props:{item:{type:Object,required:!0},firstItem:{type:Boolean,default:!1},isCollapsed:{type:Boolean}},components:{SubItem:n.a},mixins:[o.a],created:function(){this.firstItem&&this.$parent.$on("toggleCollapse",this.closeDropdown)},methods:{mouseEnter:function(t){this.isCollapsed&&this.firstItem&&this.$parent.$emit("mouseEnterItem",{item:this.item,pos:t.currentTarget.getBoundingClientRect().top})}}}},function(t,e,i){"use strict";var n=i(1),o=i(3);e.a={data:function(){return{show:!1}},mixins:[o.a],props:{item:Object},components:{Item:n.default},beforeCreate:function(){this.$options.components.Item=i(1).default}}},function(t,e,i){"use strict";var n=i(2),o=i(3);e.a={props:{item:{type:Object},mobileItemPos:{type:Number,required:!0}},components:{SubItem:n.a},mixins:[o.a]}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(9);e.default={install:function(t){t.component("sidebar-menu",n.a)}}},function(t,e,i){"use strict";function n(t){i(10)}var o=i(4),s=i(19),r=i(0),a=n,l=r(o.a,s.a,!1,a,null,null);e.a=l.exports},function(t,e,i){var n=i(11);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(13)("f00c6d54",n,!0,{})},function(t,e,i){e=t.exports=i(12)(!1),e.push([t.i,'#sidebar-menu,#sidebar-menu *{box-sizing:border-box}#sidebar-menu{position:fixed;top:0;left:0;background-color:#2a2a2e;max-width:350px;width:100%;height:100vh;padding-bottom:50px;transition:max-width .3s}#sidebar-menu.collapsed{max-width:50px}#sidebar-menu .default-list{height:100%;overflow-y:auto;overflow-x:hidden}#sidebar-menu .menu-list{padding:0;margin:0;list-style:none}.menu-list li,.menu-list li>a{position:relative}.menu-list li>a{display:block;font-size:16px;font-weight:400;color:hsla(0,0%,100%,.8);padding:15px;text-decoration:none}.menu-list>li>a{color:#fff;height:50px;line-height:30px;padding:10px;z-index:20}.menu-list li>a:hover{color:#fff}.menu-list>li.active:before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:#4285f4;z-index:22}.menu-list li.active>a{font-weight:600;color:#fff}.menu-list li.has-dropdown>a>.item-text{padding-right:50px}.menu-list>li>a>.item-text{padding-left:50px}.menu-list>li>a>.item-text:after{content:"";position:absolute;top:0;left:0;background-color:#4285f4;height:50px;width:0;z-index:-1;transition:width .3s}.menu-list>li.has-dropdown.open>a>.item-text:after{width:100%}.menu-list>li>a>.item-text:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:#36363b;z-index:-1;opacity:0;visibility:hidden;transition:all .3s}.menu-list>li>a:hover>.item-text:before{opacity:1;visibility:visible}.menu-list li>a>.item-icon{font-size:14px;color:#fff;margin-right:10px}.menu-list>li>a>.item-icon{left:10px;top:10px;color:#fff;background:#1e1e21;border-radius:3px}.menu-list>li>a>.item-icon,.menu-list li.has-dropdown>a>.item-arrow{position:absolute;height:30px;line-height:30px;width:30px;text-align:center}.menu-list li.has-dropdown>a>.item-arrow{font-style:normal;font-weight:900;color:#ffff;right:10px;top:50%;transform:translateY(-50%);transition:transform .3s}.menu-list li.has-dropdown>a>.item-arrow:after{content:"\\F105";font-family:Font Awesome\\ 5 Free}.menu-list li.has-dropdown.open>a>.item-arrow{transform:translateY(-50%) rotate(90deg)}.menu-list .dropdown>ul{position:relative;padding:0;margin:0;list-style:none;background:#36363b;padding-left:15px}.menu-list .dropdown>ul li:before{content:"";height:5px;width:5px;border-radius:50%;background:#fff;position:absolute;left:0;top:23px;z-index:3}.show-animation-enter-active{animation:show-animation .2s}.show-animation-leave-active{animation:show-animation .2s reverse}@keyframes show-animation{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}#sidebar-menu .mobile-list{position:absolute;width:300px;padding-left:50px}.mobile-list>li>.dropdown{position:absolute;top:50px;left:0;right:0;overflow-y:auto}.mobile-list .item-bg{position:absolute;left:-50px;right:0;height:50px;top:0;z-index:-1}.mobile-list .item-bg>span{position:absolute;background-color:#4285f4;left:0;bottom:0;right:0;top:0}.slide-animation-enter-active{animation:slide-animation .2s}.slide-animation-leave-active{animation:slide-animation .2s reverse}@keyframes slide-animation{0%{width:0}to{width:100%}}#sidebar-menu .aside-toggle-btn{display:block;color:#fff;background-color:#1e1e21;text-align:center;font-style:normal;font-weight:900;position:absolute;height:50px;left:0;right:0;bottom:0;cursor:pointer;border:none;width:100%}#sidebar-menu .aside-toggle-btn:after{content:"\\F337";font-family:Font Awesome\\ 5 Free}',""])},function(t,e){function i(t,e){var i=t[1]||"",o=t[3];if(!o)return i;if(e&&"function"==typeof btoa){var s=n(o);return[i].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([s]).join("\n")}return[i].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=i(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(n[s]=!0)}for(o=0;o<t.length;o++){var r=t[o];"number"==typeof r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),e.push(r))}},e}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=c[i.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](i.parts[o]);for(;o<i.parts.length;o++)n.parts.push(s(i.parts[o]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var r=[],o=0;o<i.parts.length;o++)r.push(s(i.parts[o]));c[i.id]={id:i.id,refs:1,parts:r}}}}function o(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function s(t){var e,i,n=document.querySelector("style["+b+'~="'+t.id+'"]');if(n){if(p)return h;n.parentNode.removeChild(n)}if(g){var s=f++;n=m||(m=o()),e=r.bind(null,n,s,!1),i=r.bind(null,n,s,!0)}else n=o(),e=a.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function r(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var s=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function a(t,e){var i=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),v.ssrId&&t.setAttribute(b,e.id),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=i(14),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),m=null,f=0,p=!1,h=function(){},v=null,b="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i,o){p=i,v=o||{};var s=u(t,e);return n(s),function(e){for(var i=[],o=0;o<s.length;o++){var r=s[o],a=c[r.id];a.refs--,i.push(a)}e?(s=u(t,e),n(s)):s=[];for(var o=0;o<i.length;o++){var a=i[o];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete c[a.id]}}}};var x=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],n={},o=0;o<e.length;o++){var s=e[o],r=s[0],a=s[1],l=s[2],u=s[3],c={id:t+":"+o,css:a,media:l,sourceMap:u};n[r]?n[r].parts.push(c):i.push(n[r]={id:r,parts:[c]})}return i}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{class:[{"has-dropdown":t.item.child},{open:t.show},{active:t.isLinkActive()}]},[i("a",{attrs:{href:t.item.href},on:{click:t.toggleDropdown}},[t.item.icon?i("i",{staticClass:"item-icon",class:t.item.icon}):t._e(),t._v(" "),i("span",{staticClass:"item-text"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"item-arrow"}):t._e()]),t._v(" "),t.item.child?i("div",{staticClass:"dropdown"},[i("transition",{attrs:{name:"show-animation"}},[t.show?i("ul",t._l(t.item.child,function(t,e){return i("item",{key:e,attrs:{item:t}})})):t._e()])],1):t._e()])},o=[],s={render:n,staticRenderFns:o};e.a=s},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{class:[{"has-dropdown":t.item.child},{open:t.show},{active:t.isLinkActive()}],on:{mouseenter:function(e){t.mouseEnter(e)}}},[i("a",{attrs:{href:t.item.href},on:{click:t.toggleDropdown}},[t.item.icon?i("i",{staticClass:"item-icon",class:t.item.icon}):t._e(),t._v(" "),t.isCollapsed?t._e():[i("span",{staticClass:"item-text"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"item-arrow"}):t._e()]],2),t._v(" "),!t.isCollapsed&&t.item.child?i("div",{staticClass:"dropdown"},[i("transition",{attrs:{name:"show-animation"}},[t.show?i("ul",t._l(t.item.child,function(t,e){return i("sub-item",{key:e,attrs:{item:t}})})):t._e()])],1):t._e()])},o=[],s={render:n,staticRenderFns:o};e.a=s},function(t,e,i){"use strict";var n=i(7),o=i(18),s=i(0),r=s(n.a,o.a,!1,null,null,null);e.a=r.exports},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{class:[{"has-dropdown open":t.item&&t.item.child},{active:t.isLinkActive()}]},[i("transition",{attrs:{name:"show-animation"}},[t.item?i("a",{attrs:{href:t.item.href}},[t._v("\n            "+t._s(t.item.title)+"\n            "),t.item.child?i("i",{staticClass:"item-arrow"}):t._e()]):t._e()]),t._v(" "),i("div",{staticClass:"item-bg"},[i("transition",{attrs:{name:"slide-animation"}},[t.item?i("span"):t._e()])],1),t._v(" "),i("div",{staticClass:"dropdown",style:{"max-height":"calc(100vh - "+(t.mobileItemPos+50)+"px)"}},[i("transition",{attrs:{name:"show-animation"}},[t.item&&t.item.child?i("ul",t._l(t.item.child,function(t,e){return i("sub-item",{key:e,attrs:{item:t}})})):t._e()])],1)],1)},o=[],s={render:n,staticRenderFns:o};e.a=s},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{collapsed:t.isCollapsed},attrs:{id:"sidebar-menu"},on:{mouseleave:t.mouseLeave}},[i("ul",{staticClass:"default-list menu-list"},t._l(t.menu,function(e,n){return i("item",{key:n,attrs:{item:e,firstItem:!0,isCollapsed:t.isCollapsed}})})),t._v(" "),t.isCollapsed?i("ul",{staticClass:"mobile-list menu-list",style:{top:t.mobileItemPos+"px"}},[i("mobile-item",{attrs:{item:t.mobileItem,mobileItemPos:t.mobileItemPos}})],1):t._e(),t._v(" "),i("button",{staticClass:"aside-toggle-btn",on:{click:t.toggleCollapse}})])},o=[],s={render:n,staticRenderFns:o};e.a=s}])});
//# sourceMappingURL=vue-sidebar-menu.js.map