"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6573:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a=void 0,l={unversionedId:"tutorial-extras/Object",id:"tutorial-extras/Object",isDocsHomePage:!1,title:"Object",description:"Object \u5bf9\u8c61",source:"@site/docs/tutorial-extras/Object.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/Object",permalink:"/docs/tutorial-extras/Object",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Markdown Features",permalink:"/docs/tutorial-basics/markdown-features"},next:{title:"Proxy",permalink:"/docs/tutorial-extras/Proxy"}},s=[{value:"Object \u5bf9\u8c61",id:"object-\u5bf9\u8c61",children:[{value:"Object.assign",id:"objectassign",children:[],level:3},{value:"Object.is",id:"objectis",children:[],level:3},{value:"Object.defineProperty",id:"objectdefineproperty",children:[],level:3}],level:2},{value:"Update an existing version",id:"update-an-existing-version",children:[],level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"object-\u5bf9\u8c61"},"Object \u5bf9\u8c61"),(0,o.kt)("p",null,"Object \u5bf9\u8c61\u662fjavascript \u4e2d\u5185\u7f6e\u7684\u57fa\u7840\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u4e0a\u5305\u542b\u4e86\u5f88\u591a\u6709\u7528\u7684\u65b9\u6cd5\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u4e00\u8d77\u6765\u770b\u4e00\u4e0b\u5427"),(0,o.kt)("h3",{id:"objectassign"},"Object.assign"),(0,o.kt)("p",null,"Release a version 1.0 of your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,o.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,o.kt)("p",null,"Your docs now have 2 versions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1.0")," at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"current")," at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,o.kt)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,o.kt)("h3",{id:"objectis"},"Object.is"),(0,o.kt)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,o.kt)("h3",{id:"objectdefineproperty"},"Object.defineProperty"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docs Version Dropdown",src:n(8730).Z})),(0,o.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,o.kt)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}d.isMDXComponent=!0},8730:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docsVersionDropdown-dda80f009a926fb2dd92bab8faa6c4d8.png"}}]);