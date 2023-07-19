"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6346:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},l=void 0,i={unversionedId:"tutorial-extras/Proxy",id:"tutorial-extras/Proxy",isDocsHomePage:!1,title:"Proxy",description:"Proxy \u4ee3\u7406\u5bf9\u8c61",source:"@site/docs/tutorial-extras/Proxy.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/Proxy",permalink:"/docs/tutorial-extras/Proxy",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Object",permalink:"/docs/tutorial-extras/Object"}},c=[{value:"Proxy \u4ee3\u7406\u5bf9\u8c61",id:"proxy-\u4ee3\u7406\u5bf9\u8c61",children:[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[],level:3},{value:"Reflect",id:"reflect",children:[{value:"\u4f5c\u7528",id:"\u4f5c\u7528",children:[],level:4}],level:3}],level:2},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",children:[],level:2},{value:"Build your localized site",id:"build-your-localized-site",children:[],level:2}],s={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"proxy-\u4ee3\u7406\u5bf9\u8c61"},"Proxy \u4ee3\u7406\u5bf9\u8c61"),(0,a.kt)("p",null,"Proxy \u5bf9\u8c61\u4e3b\u8981\u662f\u7528\u6765\u5bf9\u4e00\u4e2a\u5bf9\u8c61\u8fdb\u884c\u4ee3\u7406"),(0,a.kt)("h3",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,a.kt)("p",null,"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add support for the ",(0,a.kt)("inlineCode",{parentName:"p"},"fr")," locale:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const data = {\n  a:1,\n  b:2\n}\nconst proxy = new Proxy(data,{\n  get(target,property){\n    console.log(property);\n    return Reflect.get(target,property)\n  }\n});\n")),(0,a.kt)("h3",{id:"reflect"},"Reflect"),(0,a.kt)("p",null,"Reflect \u5185\u90e8\u5c01\u88c5\u4e86\u4e00\u7cfb\u5217\u5bf9\u5bf9\u8c61\u7684\u5e95\u5c42\u64cd\u4f5c\nReflect\u6210\u5458\u65b9\u6cd5\u5c31\u662fProxy\u5904\u7406\u5bf9\u8c61\u7684\u9ed8\u8ba4\u5b9e\u73b0"),(0,a.kt)("h4",{id:"\u4f5c\u7528"},"\u4f5c\u7528"),(0,a.kt)("p",null,"\u7edf\u4e00\u63d0\u4f9b\u4e00\u5957\u7528\u4e8e\u64cd\u4f5c\u5bf9\u8c61\u7684API"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In development, you can only use one locale at a same time."))),(0,a.kt)("h2",{id:"add-a-locale-dropdown"},"Add a Locale Dropdown"),(0,a.kt)("p",null,"To navigate seamlessly across languages, add a locale dropdown."),(0,a.kt)("p",null,"Modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,a.kt)("p",null,"The locale dropdown now appears in your navbar:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(322).Z})),(0,a.kt)("h2",{id:"build-your-localized-site"},"Build your localized site"),(0,a.kt)("p",null,"Build your site for a specific locale:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build -- --locale fr\n")),(0,a.kt)("p",null,"Or build your site to include all the locales at once:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))}p.isMDXComponent=!0},322:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/localeDropdown-0052c3f08ccaf802ac733b23e655f498.png"}}]);