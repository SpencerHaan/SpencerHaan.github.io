(self.webpackChunkoverthinking_blog=self.webpackChunkoverthinking_blog||[]).push([[682],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,c){return o()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),c=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),c=r(7316),s=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=c(e,s),l=f(t),d=i.useMemo((function(){if(!r)return null;var e=u({React:i,mdx:p},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return i.createElement(d,u({},a))}},1047:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children;return n.createElement("div",{className:"p-2 rounded-md bg-white shadow-md"},t)}},8678:function(e,t,r){"use strict";var n=r(7294),o=r(1597);t.Z=function(e){var t=e.pageTitle,r=e.children,a=(0,o.K2)("767768634");return console.log(a.site.siteMetadata),n.createElement("div",null,n.createElement("title",null,t," | ",a.site.siteMetadata.title),n.createElement("header",{className:"pt-2 pb-2 text-white bg-gradient-to-br from-teal-600 to-zinc-800"},n.createElement("div",{className:"mr-4 text-sm text-right uppercase space-x-2"},n.createElement(o.rU,{to:"/about"},"About")),n.createElement("div",{className:"mb-4 max-w-4xl mx-auto p-3 text-center space-y-2"},n.createElement(o.rU,{to:"/",className:"font-serif text-5xl font-bold"},a.site.siteMetadata.title),n.createElement("div",{className:"italic text-xs text-gray-300"},a.site.siteMetadata.tagline," by ",a.site.siteMetadata.author))),n.createElement("main",{className:"max-w-4xl flex-auto m-2 space-y-3"},r))}},5465:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(2102),a=r(8678),c=r(1047);t.default=function(e){var t=e.data;return n.createElement(a.Z,{pageTitle:"About"},n.createElement(c.Z,null,n.createElement("div",{className:"mdx p-2 space-y-3"},n.createElement(o.MDXRenderer,null,t.mdx.body))))}}}]);
//# sourceMappingURL=component---src-pages-about-js-9e623a47d9a3426e4d25.js.map