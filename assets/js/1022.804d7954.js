"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1022],{9960:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294),r=n(3727),l=n(2263),o=n(3919),c=n(412);const s=(0,a.createContext)({collectLink:()=>{}});var i=n(4996),m=n(8780);const u=function(e){let{isNavLink:t,to:n,href:u,activeClassName:d,isActive:h,"data-noBrokenLinkCheck":g,autoAddBaseUrl:f=!0,...b}=e;var v;const{siteConfig:{trailingSlash:E,baseUrl:p}}=(0,l.Z)(),{withBaseUrl:k}=(0,i.C)(),_=(0,a.useContext)(s),Z=n||u,w=(0,o.Z)(Z),y=null==Z?void 0:Z.replace("pathname://","");let N=void 0!==y?(C=y,f&&(e=>e.startsWith("/"))(C)?k(C):C):void 0;var C;N&&w&&(N=(0,m.applyTrailingSlash)(N,{trailingSlash:E,baseUrl:p}));const T=(0,a.useRef)(!1),L=t?r.OL:r.rU,S=c.Z.canUseIntersectionObserver,I=(0,a.useRef)();(0,a.useEffect)((()=>(!S&&w&&null!=N&&window.docusaurus.prefetch(N),()=>{S&&I.current&&I.current.disconnect()})),[I,N,S,w]);const D=null!==(v=null==N?void 0:N.startsWith("#"))&&void 0!==v&&v,B=!N||!w||D;return N&&w&&!D&&!g&&_.collectLink(N),B?a.createElement("a",{href:N,...Z&&!w&&{target:"_blank",rel:"noopener noreferrer"},...b}):a.createElement(L,{...b,onMouseEnter:()=>{T.current||null==N||(window.docusaurus.preload(N),T.current=!0)},innerRef:e=>{var t,n;S&&e&&w&&(t=e,n=()=>{null!=N&&window.docusaurus.prefetch(N)},I.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.current.unobserve(t),I.current.disconnect(),n())}))})),I.current.observe(t))},to:N||"",...t&&{isActive:h,activeClassName:d}})}},1875:(e,t,n)=>{n.d(t,{Z:()=>a});const a=()=>null},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{Z:()=>r,b:()=>a})},4996:(e,t,n)=>{n.d(t,{C:()=>l,Z:()=>o});var a=n(2263),r=n(3919);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,a){let{forcePrependBaseUrl:l=!1,absolute:o=!1}=void 0===a?{}:a;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,a)}}function o(e,t){void 0===t&&(t={});const{withBaseUrl:n}=l();return n(e,t)}},541:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r="iconExternalLink_wgqa",l=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},1022:(e,t,n)=>{n.d(t,{Z:()=>be});var a=n(7294),r=n(6010),l=n(6550),o=n(5999),c=n(9521);const s="skipToContent_OuoZ";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const m=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.k6)();return(0,c.SL)((n=>{let{location:a}=n;e.current&&!a.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var u=n(7462);function d(e){let{width:t=21,height:n=21,color:r="currentColor",strokeWidth:l=1.2,className:o,...c}=e;return a.createElement("svg",(0,u.Z)({viewBox:"0 0 15 15",width:t,height:n},c),a.createElement("g",{stroke:r,strokeWidth:l},a.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}const h="announcementBar_axC9",g="announcementBarPlaceholder_xYHE",f="announcementBarClose_A3A1",b="announcementBarContent_6uhP";const v=function(){const{isActive:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!e)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:m}=n;return a.createElement("div",{className:h,style:{backgroundColor:s,color:i},role:"banner"},m&&a.createElement("div",{className:g}),a.createElement("div",{className:b,dangerouslySetInnerHTML:{__html:l}}),m?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",f),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(d,{width:14,height:14,strokeWidth:3.1})):null)};var E=n(1875),p=n(2389);const k={toggle:"toggle_iYfV",toggleScreenReader:"toggleScreenReader_h9qa",toggleDisabled:"toggleDisabled_xj38",toggleTrack:"toggleTrack_t-f2",toggleTrackCheck:"toggleTrackCheck_mk7D",toggleChecked:"toggleChecked_a04y",toggleTrackX:"toggleTrackX_dm8H",toggleTrackThumb:"toggleTrackThumb_W6To",toggleFocused:"toggleFocused_pRSw",toggleIcon:"toggleIcon_pHJ9"},_=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(k.toggleIcon,k.dark),style:n},t)},Z=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(k.toggleIcon,k.light),style:n},t)},w=(0,a.memo)((e=>{let{className:t,icons:n,checked:l,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(l),[m,u]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)(k.toggle,t,{[k.toggleChecked]:s,[k.toggleFocused]:m,[k.toggleDisabled]:o})},a.createElement("div",{className:k.toggleTrack,role:"button",tabIndex:-1,onClick:()=>d.current?.click()},a.createElement("div",{className:k.toggleTrackCheck},n.checked),a.createElement("div",{className:k.toggleTrackX},n.unchecked),a.createElement("div",{className:k.toggleTrackThumb})),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:k.toggleScreenReader,"aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>u(!0),onBlur:()=>u(!1),onKeyDown:e=>{"Enter"===e.key&&d.current?.click()}}))}));function y(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.LU)(),o=(0,p.Z)();return a.createElement(w,(0,u.Z)({disabled:!o,icons:{checked:a.createElement(_,{icon:t,style:n}),unchecked:a.createElement(Z,{icon:r,style:l})}},e))}var N=n(5350);const C=e=>{const[t,n]=(0,a.useState)(e),r=(0,a.useRef)(!1),l=(0,a.useRef)(0),o=(0,a.useCallback)((e=>{null!==e&&(l.current=e.getBoundingClientRect().height)}),[]);return(0,c.RF)(((t,a)=>{if(!e)return;const o=t.scrollY;if(o<l.current)return void n(!0);if(r.current)return void(r.current=!1);const c=a?.scrollY,s=document.documentElement.scrollHeight-l.current,i=window.innerHeight;c&&o>=c?n(!1):o+i<s&&n(!0)})),(0,c.SL)((t=>{if(e)return t.location.hash?(r.current=!0,void n(!1)):void n(!0)})),{navbarRef:o,isNavbarVisible:t}};const T=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])};var L=n(3783),S=n(6730),I=n(2207),D=n(5537);const B=e=>{let{width:t=30,height:n=30,className:r,...l}=e;return a.createElement("svg",(0,u.Z)({className:r,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},l),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},A={toggle:"toggle_2i4l",navbarHideable:"navbarHideable_RReh",navbarHidden:"navbarHidden_FBwS",navbarSidebarToggle:"navbarSidebarToggle_AVbO"},U="right";function x(){return(0,c.LU)().navbar.items}function M(){const{colorMode:{disableSwitch:e}}=(0,c.LU)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=(0,N.Z)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?r():n()),[n,r]),disabled:e}}function R(e){let{sidebarShown:t,toggleSidebar:n}=e;T(t);const l=x(),s=M(),i=function(e){let{sidebarShown:t,toggleSidebar:n}=e;const r=(0,c.g8)()?.({toggleSidebar:n}),l=(0,c.D9)(r),[o,s]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{r&&!l&&s(!0)}),[r,l]);const i=!!r;return(0,a.useEffect)((()=>{i?t||s(!0):s(!1)}),[t,i]),{shown:o,hide:(0,a.useCallback)((()=>{s(!1)}),[]),content:r}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&a.createElement(y,{className:A.navbarSidebarToggle,checked:s.isDarkTheme,onChange:s.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(d,{color:"var(--ifm-color-emphasis-600)",className:A.navbarSidebarCloseSvg}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map(((e,t)=>a.createElement(I.Z,(0,u.Z)({mobile:!0},e,{onClick:n,key:t})))))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}const W=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.LU)(),n=function(){const e=(0,L.Z)(),t="mobile"===e,[n,r]=(0,a.useState)(!1);(0,c.Rb)((()=>{if(n)return r(!1),!1}));const l=(0,a.useCallback)((()=>{r((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:n}}(),l=M(),o=(0,S.gA)(),{navbarRef:s,isNavbarVisible:i}=C(e),m=x(),d=m.some((e=>"search"===e.type)),{leftItems:h,rightItems:g}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??U))),rightItems:e.filter((e=>"right"===(e.position??U)))}}(m);return a.createElement("nav",{ref:s,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[A.navbarHideable]:e,[A.navbarHidden]:e&&!i})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},(m?.length>0||o)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(B,null)),a.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),h.map(((e,t)=>a.createElement(I.Z,(0,u.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},g.map(((e,t)=>a.createElement(I.Z,(0,u.Z)({},e,{key:t})))),!l.disabled&&a.createElement(y,{className:A.toggle,checked:l.isDarkTheme,onChange:l.toggle}),!d&&a.createElement(E.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(R,{sidebarShown:n.shown,toggleSidebar:n.toggle}))};var P=n(9960),H=n(4996),O=n(3919);const V="footerLogoLink_SRtH";var z=n(9750),F=n(541);function $(e){let{to:t,href:n,label:r,prependBaseUrlToHref:l,...o}=e;const c=(0,H.Z)(t),s=(0,H.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(P.Z,(0,u.Z)({className:"footer__link-item"},n?{href:l?s:n}:{to:c},o),n&&!(0,O.Z)(n)?a.createElement("span",null,r,a.createElement(F.Z,null)):r)}const j=e=>{let{sources:t,alt:n,width:r,height:l}=e;return a.createElement(z.Z,{className:"footer__logo",alt:n,sources:t,width:r,height:l})};const q=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,H.Z)(l.src),dark:(0,H.Z)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement($,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(P.Z,{href:l.href,className:V},a.createElement(j,{alt:l.alt,sources:o,width:l.width,height:l.height})):a.createElement(j,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var G=n(412);const J=(0,c.WA)("theme"),K="light",X="dark",Y=e=>e===X?X:K,Q=e=>{(0,c.WA)("theme").set(Y(e))},ee=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[r,l]=(0,a.useState)((e=>G.Z.canUseDOM?Y(document.documentElement.getAttribute("data-theme")):Y(e))(e)),o=(0,a.useCallback)((()=>{l(K),Q(K)}),[]),s=(0,a.useCallback)((()=>{l(X),Q(X)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",Y(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=J.get();null!==e&&l(Y(e))}catch(e){console.error(e)}}),[t,l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;l(t?X:K)}))}),[t,n]),{isDarkTheme:r===X,setLightTheme:o,setDarkTheme:s}};var te=n(2924);const ne=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=ee();return a.createElement(te.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},ae="docusaurus.tab.",re=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)(`${ae}${e}`).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(ae)){const n=t.substring(15);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}};var le=n(9443);const oe=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=re();return a.createElement(le.Z.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function ce(e){let{children:t}=e;return a.createElement(ne,null,a.createElement(c.pl,null,a.createElement(oe,null,a.createElement(c.OC,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t))))))}var se=n(2859),ie=n(2263);function me(e){let{locale:t,version:n,tag:r}=e;return a.createElement(se.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var ue=n(1217);function de(){const{i18n:{defaultLocale:e,locales:t}}=(0,ie.Z)(),n=(0,c.l5)();return a.createElement(se.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function he(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,ie.Z)(),r=function(){const{siteConfig:{url:e}}=(0,ie.Z)(),{pathname:t}=(0,l.TH)();return e+(0,H.Z)(t)}(),o=t?`${n}${t}`:r;return a.createElement(se.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function ge(e){const{siteConfig:{favicon:t},i18n:{currentLocale:n,localeConfigs:r}}=(0,ie.Z)(),{metadatas:l,image:o}=(0,c.LU)(),{title:s,description:i,image:m,keywords:d,searchMetadatas:h}=e,g=(0,H.Z)(t),f=(0,c.pe)(s),b=n,v=r[n].direction;return a.createElement(a.Fragment,null,a.createElement(se.Z,null,a.createElement("html",{lang:b,dir:v}),t&&a.createElement("link",{rel:"shortcut icon",href:g}),a.createElement("title",null,f),a.createElement("meta",{property:"og:title",content:f}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o&&a.createElement(ue.Z,{image:o}),m&&a.createElement(ue.Z,{image:m}),a.createElement(ue.Z,{description:i,keywords:d}),a.createElement(he,null),a.createElement(de,null),a.createElement(me,(0,u.Z)({tag:c.HX,locale:n},h)),a.createElement(se.Z,null,l.map(((e,t)=>a.createElement("meta",(0,u.Z)({key:`metadata_${t}`},e))))))}const fe=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const be=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return fe(),a.createElement(ce,null,a.createElement(ge,e),a.createElement(m,null),a.createElement(v,null),a.createElement(W,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(q,null))}},5537:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(9960),o=n(9750),c=n(4996),s=n(2263),i=n(9521);const m=e=>{const{siteConfig:{title:t}}=(0,s.Z)(),{navbar:{title:n,logo:m={src:""}}}=(0,i.LU)(),{imageClassName:u,titleClassName:d,...h}=e,g=(0,c.Z)(m.href||"/"),f={light:(0,c.Z)(m.src),dark:(0,c.Z)(m.srcDark||m.src)},b=r.createElement(o.Z,{sources:f,height:m.height,width:m.width,alt:m.alt||n||t});return r.createElement(l.Z,(0,a.Z)({to:g},h,m.target&&{target:m.target}),m.src&&(u?r.createElement("div",{className:u},b):r.createElement(r.Fragment,null,b)),null!=n&&r.createElement("b",{className:d},n))}},5525:(e,t,n)=>{n.d(t,{O:()=>h,Z:()=>b});var a=n(7462),r=n(7294),l=n(6010),o=n(9960),c=n(4996),s=n(541),i=n(3919),m=n(9521),u=n(2207);const d="dropdown__link--active";function h(e){let{activeBasePath:t,activeBaseRegex:n,to:l,href:u,label:h,activeClassName:g="",prependBaseUrlToHref:f,...b}=e;const v=(0,c.Z)(l),E=(0,c.Z)(t),p=(0,c.Z)(u,{forcePrependBaseUrl:!0}),k=h&&u&&!(0,i.Z)(u),_=g===d;return r.createElement(o.Z,(0,a.Z)({},u?{href:f?p:u}:{isNavLink:!0,activeClassName:b.className?.includes(g)?"":g,to:v,...t||n?{isActive:(e,t)=>n?(0,m.Fx)(n,t.pathname):t.pathname.startsWith(E)}:null},b),k?r.createElement("span",null,h,r.createElement(s.Z,_&&{width:12,height:12})):h)}function g(e){let{className:t,isDropdownItem:n=!1,...o}=e;const c=r.createElement(h,(0,a.Z)({className:(0,l.Z)(n?"dropdown__link":"navbar__item navbar__link",t)},o));return n?r.createElement("li",null,c):c}function f(e){let{className:t,isDropdownItem:n,...o}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(h,(0,a.Z)({className:(0,l.Z)("menu__link",t)},o)))}const b=function(e){let{mobile:t=!1,position:n,...l}=e;const o=t?f:g;return r.createElement(o,(0,a.Z)({},l,{activeClassName:l.activeClassName??(0,u.E)(t)}))}},6400:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),l=n(5525),o=n(6730),c=n(6010),s=n(2207),i=n(9521),m=n(8780);function u(e){let{docId:t,label:n,docsPluginId:u,...d}=e;const{activeVersion:h,activeDoc:g}=(0,o.Iw)(u),{preferredVersion:f}=(0,i.J)(u),b=(0,o.yW)(u),v=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${a}`)}return a}((0,m.uniq)([h,f,b].filter(Boolean)),t),E=(0,s.E)(d.mobile);return r.createElement(l.Z,(0,a.Z)({exact:!0},d,{className:(0,c.Z)(d.className,{[E]:g?.sidebar&&g.sidebar===v.sidebar}),activeClassName:E,label:n??v.id,to:v.path}))}},9308:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),l=n(5525),o=n(3154),c=n(6730),s=n(9521),i=n(5999);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function u(e){let{mobile:t,docsPluginId:n,dropdownActiveClassDisabled:u,dropdownItemsBefore:d,dropdownItemsAfter:h,...g}=e;const f=(0,c.Iw)(n),b=(0,c.gB)(n),v=(0,c.yW)(n),{preferredVersion:E,savePreferredVersionName:p}=(0,s.J)(n);const k=function(){const e=b.map((e=>{const t=f?.alternateDocVersions[e.name]||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===f?.activeVersion,onClick:()=>{p(e.name)}}}));return[...d,...e,...h]}(),_=f.activeVersion??E??v,Z=t&&k?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):_.label,w=t&&k?void 0:m(_).path;return k.length<=1?r.createElement(l.Z,(0,a.Z)({},g,{mobile:t,label:Z,to:w,isActive:u?()=>!1:void 0})):r.createElement(o.Z,(0,a.Z)({},g,{mobile:t,label:Z,to:w,items:k,isActive:u?()=>!1:void 0}))}},7250:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(5525),o=n(6730),c=n(9521);const s=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){let{label:t,to:n,docsPluginId:i,...m}=e;const u=(0,o.zu)(i),{preferredVersion:d}=(0,c.J)(i),h=(0,o.yW)(i),g=u??d??h,f=t??g.label,b=n??s(g).path;return r.createElement(l.Z,(0,a.Z)({},m,{label:f,to:b}))}},3154:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),l=n(6010),o=n(9521),c=n(5525),s=n(2207);const i="dropdown__link--active";function m(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!!(0,o.Fx)(e.activeBaseRegex,t)||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function u(e){let{items:t,position:n,className:o,...m}=e;const u=(0,r.useRef)(null),d=(0,r.useRef)(null),[h,g]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]),r.createElement("div",{ref:u,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===n,"dropdown--show":h})},r.createElement(c.O,(0,a.Z)({className:(0,l.Z)("navbar__link",o)},m,{onClick:m.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),g(!h))}}),m.children??m.label),r.createElement("ul",{ref:d,className:"dropdown__menu"},t.map(((e,n)=>r.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:e=>{if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);const t=u.current.nextElementSibling;t&&t.focus()}},activeClassName:i},e,{key:n}))))))}function d(e){let{items:t,className:n,position:i,...u}=e;const d=(0,o.be)(),h=m(t,d),{collapsed:g,toggleCollapsed:f,setCollapsed:b}=(0,o.uR)({initialState:()=>!h});return(0,r.useEffect)((()=>{h&&b(!h)}),[d,h,b]),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":g})},r.createElement(c.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",n)},u,{onClick:e=>{e.preventDefault(),f()}}),u.children??u.label),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},t.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:u.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const h=function(e){let{mobile:t=!1,...n}=e;const a=t?d:u;return r.createElement(a,n)}},2207:(e,t,n)=>{n.d(t,{Z:()=>v,E:()=>b});var a=n(7294),r=n(5525),l=n(3154),o=n(7462);const c=e=>{let{width:t=20,height:n=20,...r}=e;return a.createElement("svg",(0,o.Z)({viewBox:"0 0 20 20",width:t,height:n,"aria-hidden":"true"},r),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var s=n(2263),i=n(9521);const m="iconLanguage_EbrZ";function u(e){let{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:r,...u}=e;const{i18n:{currentLocale:d,locales:h,localeConfigs:g}}=(0,s.Z)(),f=(0,i.l5)();function b(e){return g[e].label}const v=[...n,...h.map((e=>{const t=`pathname://${f.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:b(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],E=t?"Languages":b(d);return a.createElement(l.Z,(0,o.Z)({},u,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(c,{className:m}),a.createElement("span",null,E)),items:v}))}var d=n(1875);function h(e){let{mobile:t}=e;return t?null:a.createElement(d.Z,null)}const g={default:()=>r.Z,localeDropdown:()=>u,search:()=>h,dropdown:()=>l.Z,docsVersion:()=>n(7250).Z,docsVersionDropdown:()=>n(9308).Z,doc:()=>n(6400).Z},f=e=>{const t=g[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()};const b=e=>e?"menu__link--active":"navbar__link--active";function v(e){let{type:t,...n}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=f(r);return a.createElement(l,n)}},1217:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(2859),l=n(9521),o=n(4996);function c(e){let{title:t,description:n,keywords:c,image:s,children:i}=e;const m=(0,l.pe)(t),{withBaseUrl:u}=(0,o.C)(),d=s?u(s,{absolute:!0}):void 0;return a.createElement(r.Z,null,t&&a.createElement("title",null,m),t&&a.createElement("meta",{property:"og:title",content:m}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),c&&a.createElement("meta",{name:"keywords",content:Array.isArray(c)?c.join(","):c}),d&&a.createElement("meta",{property:"og:image",content:d}),d&&a.createElement("meta",{name:"twitter:image",content:d}),i)}},2924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(7294).createContext(void 0)},9750:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),c=n(5350);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const t=(0,o.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:m,alt:u="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:u,className:(0,l.Z)(s.themedImage,s[`themedImage--${e}`],m)},d)))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},5350:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(2924);const l=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},3783:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(412);const l={desktop:"desktop",mobile:"mobile",ssr:"ssr"},o=996;function c(){return r.Z.canUseDOM?window.innerWidth>o?l.desktop:l.mobile:l.ssr}const s=function(){const[e,t]=(0,a.useState)((()=>c()));return(0,a.useEffect)((()=>{function e(){t(c())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),e}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:a}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[r]=e.split(/[#?]/),l="/"===r||r===a?r:(o=r,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(r,l)}},8780:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(l).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);