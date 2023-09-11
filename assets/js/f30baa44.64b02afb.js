"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4707],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,b=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7438:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3,title:"\u4e8b\u4ef6\u5faa\u73af"},i="Event Loop",l={unversionedId:"tutorial-basics/event-loop",id:"tutorial-basics/event-loop",isDocsHomePage:!1,title:"\u4e8b\u4ef6\u5faa\u73af",description:"\u4efb\u52a1",source:"@site/docs/tutorial-basics/event-loop.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/event-loop",permalink:"/myblog/docs/tutorial-basics/event-loop",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u4e8b\u4ef6\u5faa\u73af"},sidebar:"tutorialSidebar",previous:{title:"Async Await \u65b9\u6848",permalink:"/myblog/docs/tutorial-basics/async-await"},next:{title:"Markdown Features",permalink:"/myblog/docs/tutorial-basics/markdown-features"}},c=[{value:"\u4efb\u52a1",id:"\u4efb\u52a1",children:[],level:2}],p={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"event-loop"},"Event Loop"),(0,o.kt)("h2",{id:"\u4efb\u52a1"},"\u4efb\u52a1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5fae\u4efb\u52a1"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"queueMicrotask()"),(0,o.kt)("li",{parentName:"ul"},"Promise.then"),(0,o.kt)("li",{parentName:"ul"},"MutationObserver"),(0,o.kt)("li",{parentName:"ul"},"process.nextTick"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5b8f\u4efb\u52a1"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"setTimeout"),(0,o.kt)("li",{parentName:"ul"},"setInterval"),(0,o.kt)("li",{parentName:"ul"},"setImmediate")))))}u.isMDXComponent=!0}}]);