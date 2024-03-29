"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9312],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),g=i,f=p["".concat(l,".").concat(g)]||p[g]||m[g]||o;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=g;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4099:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(8168),i=(t(6540),t(5680));const o={slug:"long-blog-post",title:"\u56fe\u7247\u7684\u6309\u9700\u52a0\u8f7d&\u5217\u8868\u6309\u9700\u52a0\u8f7d",authors:"shuxin",tags:["hello","docusaurus"]},s=void 0,a={permalink:"/myblog/blog/long-blog-post",source:"@site/blog/2021-05-29-partial-load.mdx",title:"\u56fe\u7247\u7684\u6309\u9700\u52a0\u8f7d&\u5217\u8868\u6309\u9700\u52a0\u8f7d",description:"",date:"2021-05-29T00:00:00.000Z",formattedDate:"May 29, 2021",tags:[{label:"hello",permalink:"/myblog/blog/tags/hello"},{label:"docusaurus",permalink:"/myblog/blog/tags/docusaurus"}],readingTime:1.095,truncated:!1,authors:[{name:"\u5218\u8ff0\u65b0",title:"Maintainer of shuxinBlog",url:"https://github.com/endiliey",imageURL:"https://github.com/endiliey.png",key:"shuxin"}],prevItem:{title:"\u5927\u6587\u4ef6\u5206\u7247\u4e0b\u8f7d\u4e0e\u4e0a\u4f20",permalink:"/myblog/blog/mdx-blog-post"},nextItem:{title:"\u524d\u7aef\u7406\u89e3\u7684\u767b\u5f55\u4e0e\u9274\u6743",permalink:"/myblog/blog/JQ"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"import React, { FC, useRef, useEffect, useState, CSSProperties } from 'react';\nimport ResizeObserver from 'resize-observer-polyfill';\nimport { Transition } from 'react-transition-group';\nimport type { Property } from 'csstype';\nimport { debounce } from 'lodash';\n/**\n *\n * @returns \u52a8\u753b\u7248\u663e\u793a\u9690\u85cf\u7ec4\u4ef6\n */\ninterface AnimationShowProps {\n  // default 300ms\n  duration?: number;\n  // whether visible\n  visible: boolean;\n  timingFunction?: Property.AnimationTimingFunction;\n  style?: CSSProperties;\n}\nconst resize = (setConHeight: () => void) => debounce(setConHeight, 300);\n\nconst AnimationShow: FC<AnimationShowProps> = ({\n  duration = 300,\n  timingFunction = 'linear',\n  visible,\n  children,\n  style,\n}) => {\n  const [height, setHeight] = useState(0);\n  const divRef = useRef<HTMLDivElement>(null);\n  useEffect(() => {\n    // listen container resize\n    const setConHeight = (): void => {\n      const clientRect = divRef.current?.getBoundingClientRect();\n      if (clientRect) {\n        setHeight(clientRect ? clientRect.height : 0);\n      }\n    };\n\n    const resizeObserver = new ResizeObserver(resize(setConHeight));\n\n    resizeObserver.observe(divRef.current as HTMLDivElement);\n\n    return function cleanup() {\n      resizeObserver.disconnect();\n    };\n  }, []);\n\n  //css transition\n\n  const defaultStyle = {\n    transition: `height ${duration}ms ${timingFunction}`,\n    height: 0,\n    overflow: 'hidden',\n  };\n\n  const transitionStyles = {\n    entering: {\n      height,\n    },\n    entered: {\n      height,\n    },\n    exiting: { height: 0 },\n    exited: { height: 0 },\n  };\n  // css transition\n  return (\n    <Transition in={visible} timeout={duration}>\n      {(state) => (\n        <div\n          style={{\n            ...style,\n            ...defaultStyle,\n            ...transitionStyles[state],\n          }}\n        >\n          <div ref={divRef} style={{ overflow: 'hidden' }}>\n            {children}\n          </div>\n        </div>\n      )}\n    </Transition>\n  );\n};\n\nexport default AnimationShow;\n\n")))}m.isMDXComponent=!0}}]);