"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8401],{5489:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(6540),l=a(4625),r=a(4586),i=a(6654),s=a(8193);const o=(0,n.createContext)({collectLink:()=>{}});var c=a(6025),d=a(440);const m=function(e){let{isNavLink:t,to:a,href:m,activeClassName:u,isActive:v,"data-noBrokenLinkCheck":p,autoAddBaseUrl:h=!0,...g}=e;var b;const{siteConfig:{trailingSlash:f,baseUrl:E}}=(0,r.A)(),{withBaseUrl:A}=(0,c.h)(),N=(0,n.useContext)(o),_=a||m,k=(0,i.A)(_),C=null==_?void 0:_.replace("pathname://","");let L=void 0!==C?(w=C,h&&(e=>e.startsWith("/"))(w)?A(w):w):void 0;var w;L&&k&&(L=(0,d.applyTrailingSlash)(L,{trailingSlash:f,baseUrl:E}));const U=(0,n.useRef)(!1),y=t?l.k2:l.N_,T=s.A.canUseIntersectionObserver,M=(0,n.useRef)();(0,n.useEffect)((()=>(!T&&k&&null!=L&&window.docusaurus.prefetch(L),()=>{T&&M.current&&M.current.disconnect()})),[M,L,T,k]);const x=null!==(b=null==L?void 0:L.startsWith("#"))&&void 0!==b&&b,B=!L||!k||x;return L&&k&&!x&&!p&&N.collectLink(L),B?n.createElement("a",{href:L,..._&&!k&&{target:"_blank",rel:"noopener noreferrer"},...g}):n.createElement(y,{...g,onMouseEnter:()=>{U.current||null==L||(window.docusaurus.preload(L),U.current=!0)},innerRef:e=>{var t,a;T&&e&&k&&(t=e,a=()=>{null!=L&&window.docusaurus.prefetch(L)},M.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),a())}))})),M.current.observe(t))},to:L||"",...t&&{isActive:v,activeClassName:u}})}},6654:(e,t,a)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function l(e){return void 0!==e&&!n(e)}a.d(t,{A:()=>l,z:()=>n})},6025:(e,t,a)=>{a.d(t,{A:()=>i,h:()=>r});var n=a(4586),l=a(6654);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.A)();return{withBaseUrl:(a,n)=>function(e,t,a,n){let{forcePrependBaseUrl:r=!1,absolute:i=!1}=void 0===n?{}:n;if(!a)return a;if(a.startsWith("#"))return a;if((0,l.z)(a))return a;if(r)return t+a;const s=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+s:s}(t,e,a,n)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:a}=r();return a(e,t)}},4578:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var n=a(6540),l=a(53),r=a(9312),i=a(5489),s=a(1312);const o=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(i.A,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(i.A,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var c=a(4586),d=a(727),m=a(5965);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(s.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.A,{to:a,onClick:l},n.createElement(s.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,c.A)(),{pluginId:r}=(0,d.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,m.g1)(r),{latestDocSuggestion:s,latestVersionSuggestion:o}=(0,d.HW)(r),u=s??(h=o).docs.find((e=>e.id===h.mainDocId));var h;return n.createElement("div",{className:(0,l.A)(m.GN.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:o.label,to:u.path,onClick:()=>i(o.name)})))}const g=function(e){let{versionMetadata:t}=e;return t.banner?n.createElement(h,{versionMetadata:t}):n.createElement(n.Fragment,null)};var b=a(8139);function f(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(s.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function E(e){let{lastUpdatedBy:t}=e;return n.createElement(s.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:m.GN.common.lastUpdated},n.createElement(s.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(E,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(1335),_=a(5137);const k={lastUpdated:"lastUpdated_mt2f"};function C(e){return n.createElement("div",{className:(0,l.A)(m.GN.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(_.A,e)))}function L(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:i}=e;return n.createElement("div",{className:(0,l.A)(m.GN.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(N.A,{editUrl:t})),n.createElement("div",{className:(0,l.A)("col",k.lastUpdated)},(a||r)&&n.createElement(A,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function w(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:i,formattedLastUpdatedAt:s,lastUpdatedBy:o,tags:c}=a,d=c.length>0,u=!!(r||i||o);return d||u?n.createElement("footer",{className:(0,l.A)(m.GN.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(C,{tags:c}),u&&n.createElement(L,{editUrl:r,lastUpdatedAt:i,lastUpdatedBy:o,formattedLastUpdatedAt:s})):n.createElement(n.Fragment,null)}var U=a(5751);const y={tocCollapsible:"tocCollapsible_aw-L",tocCollapsibleButton:"tocCollapsibleButton_zr6a",tocCollapsibleContent:"tocCollapsibleContent_0dom",tocCollapsibleExpanded:"tocCollapsibleExpanded_FSiv"};var T=a(5496);function M(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:i}=e;const{collapsed:o,toggleCollapsed:c}=(0,m.uW)({initialState:!0});return n.createElement("div",{className:(0,l.A)(y.tocCollapsible,{[y.tocCollapsibleExpanded]:!o},a)},n.createElement("button",{type:"button",className:(0,l.A)("clean-btn",y.tocCollapsibleButton),onClick:c},n.createElement(s.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.Nt,{lazy:!0,className:y.tocCollapsibleContent,collapsed:o},n.createElement(T.A,{toc:t,minHeadingLevel:r,maxHeadingLevel:i})))}var x=a(39);const B={docItemContainer:"docItemContainer_oiyr",docItemCol:"docItemCol_zHA2",tocMobile:"tocMobile_Tx6Y"};function S(e){const{content:t,versionMetadata:a}=e,{metadata:i,frontMatter:s}=t,{image:c,keywords:d,hide_title:u,hide_table_of_contents:v,toc_min_heading_level:p,toc_max_heading_level:h}=s,{description:f,title:E}=i,A=!u&&void 0===t.contentTitle,N=(0,r.A)(),_=!v&&t.toc&&t.toc.length>0,k=_&&("desktop"===N||"ssr"===N);return n.createElement(n.Fragment,null,n.createElement(b.A,{title:E,description:f,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.A)("col",{[B.docItemCol]:!v})},n.createElement(g,{versionMetadata:a}),n.createElement("div",{className:B.docItemContainer},n.createElement("article",null,a.badge&&n.createElement("span",{className:(0,l.A)(m.GN.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label),_&&n.createElement(M,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:h,className:(0,l.A)(m.GN.docs.docTocMobile,B.tocMobile)}),n.createElement("div",{className:(0,l.A)(m.GN.docs.docMarkdown,"markdown")},A&&n.createElement(x.e,null,E),n.createElement(t,null)),n.createElement(w,e)),n.createElement(o,{metadata:i}))),k&&n.createElement("div",{className:"col col--3"},n.createElement(U.A,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:h,className:m.GN.docs.docTocDesktop}))))}},1335:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(6540),l=a(1312),r=a(8168),i=a(53);const s="iconEdit_mS5F",o=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,r.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var c=a(5965);function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.GN.common.editThisPage},n.createElement(o,null),n.createElement(l.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},39:(e,t,a)=>{a.d(t,{e:()=>d,A:()=>m});var n=a(8168),l=a(6540),r=a(53),i=a(1312),s=a(5965);const o="anchorWithStickyNavbar_y2LR",c="anchorWithHideOnScrollNavbar_3ly5",d=function(e){let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.A)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,function(e){let{id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,s.pN)();return a?l.createElement(t,(0,n.A)({},d,{className:(0,r.A)("anchor",{[c]:m,[o]:!m}),id:a}),d.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:`#${a}`,title:(0,i.T)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)});var t}},8139:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(6540),l=a(8895),r=a(5965),i=a(6025);function s(e){let{title:t,description:a,keywords:s,image:o,children:c}=e;const d=(0,r.s$)(t),{withBaseUrl:m}=(0,i.h)(),u=o?m(o,{absolute:!0}):void 0;return n.createElement(l.A,null,t&&n.createElement("title",null,d),t&&n.createElement("meta",{property:"og:title",content:d}),a&&n.createElement("meta",{name:"description",content:a}),a&&n.createElement("meta",{property:"og:description",content:a}),s&&n.createElement("meta",{name:"keywords",content:Array.isArray(s)?s.join(","):s}),u&&n.createElement("meta",{property:"og:image",content:u}),u&&n.createElement("meta",{name:"twitter:image",content:u}),c)}},5751:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(8168),l=a(6540),r=a(53),i=a(5496);const s="tableOfContents_vrFS";const o=function(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.A)(s,"thin-scrollbar",t)},l.createElement(i.A,(0,n.A)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5496:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(8168),l=a(6540),r=a(5965);function i(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function s(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:d,...m}=e;const u=(0,r.pN)(),v=c??u.tableOfContents.minHeadingLevel,p=d??u.tableOfContents.maxHeadingLevel,h=(0,r.WQ)({toc:t,minHeadingLevel:v,maxHeadingLevel:p}),g=(0,l.useMemo)((()=>{if(s&&o)return{linkClassName:s,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:p}}),[s,o,v,p]);return(0,r.i3)(g),l.createElement(i,(0,n.A)({toc:h,className:a,linkClassName:s},m))}},5465:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(6540),l=a(53),r=a(5489);const i="tag_WK-t",s="tagRegular_LXbV",o="tagWithCount_S5Zl";const c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(r.A,{href:t,className:(0,l.A)(i,{[s]:!c,[o]:c})},a,c&&n.createElement("span",null,c))}},5137:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(6540),l=a(53),r=a(1312),i=a(5465);const s={tags:"tags_NBRY",tag:"tag_F03v"};function o(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.A)(s.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:s.tag},n.createElement(i.A,{name:t,permalink:a}))}))))}},9312:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(6540),l=a(8193);const r={desktop:"desktop",mobile:"mobile",ssr:"ssr"},i=996;function s(){return l.A.canUseDOM?window.innerWidth>i?r.desktop:r.mobile:r.ssr}const o=function(){const[e,t]=(0,n.useState)((()=>s()));return(0,n.useEffect)((()=>{function e(){t(s())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),e}},2983:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:a,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===a)return e;const[l]=e.split(/[#?]/),r="/"===l||l===n?l:(i=l,a?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(l,r)}},440:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var l=a(2983);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(l).default}});var r=a(5183);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(r).default}})},5183:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);