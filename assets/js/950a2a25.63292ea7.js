"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7669],{2924:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a(7294).createContext(void 0)},5350:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(7294),s=a(2924);const o=function(){const t=(0,n.useContext)(s.Z);if(null==t)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return t}},7935:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>c,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(7462),s=(a(7294),a(3905)),o=a(9055);const i="function* main() {\n  const user = yield ajax('test1');\n  console.log(user);\n  const user1 = yield ajax('test2');\n  console.log(user1);\n}\nconst co = (generator) => {\n  const g = generator();\n  function recursionGenerator(result) {\n    if (result.done) return;\n    result.value.then(\n      (data) => {\n        recursionGenerator(g.next(data));\n      },\n      (error) => {\n        g.throw(error);\n      },\n    );\n  }\n  recursionGenerator(g.next());\n};\nco(main);\n",r={sidebar_position:2,title:"Async Await \u65b9\u6848",tags:["JavaScript","Async"]},c=void 0,l={unversionedId:"tutorial-basics/async-await",id:"tutorial-basics/async-await",isDocsHomePage:!1,title:"Async Await \u65b9\u6848",description:"async await \u539f\u7406\u5b9e\u73b0",source:"@site/docs/tutorial-basics/async-await.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/async-await",permalink:"/docs/tutorial-basics/async-await",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"},{label:"Async",permalink:"/docs/tags/async"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Async Await \u65b9\u6848",tags:["JavaScript","Async"]},sidebar:"tutorialSidebar",previous:{title:"Promise \u65b9\u6848",permalink:"/docs/tutorial-basics/jsasync"},next:{title:"\u4e8b\u4ef6\u5faa\u73af",permalink:"/docs/tutorial-basics/event-loop"}},u=[{value:"async await \u539f\u7406\u5b9e\u73b0",id:"async-await-\u539f\u7406\u5b9e\u73b0",children:[],level:2}],d={toc:u},p="wrapper";function y(t){let{components:e,...a}=t;return(0,s.kt)(p,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"async-await-\u539f\u7406\u5b9e\u73b0"},"async await \u539f\u7406\u5b9e\u73b0"),(0,s.kt)("p",null,"async await \u662f generator \u51fd\u6570\u548c Promise \u7684\u8bed\u6cd5\u7cd6\uff0c\u5177\u4f53\u6e90\u7801\u5b9e\u73b0\u5982\u4e0b"),(0,s.kt)(o.Z,{className:"language-js",title:"Promise \u539f\u7406\u5b9e\u73b0",mdxType:"CodeBlock"},i))}y.isMDXComponent=!0}}]);