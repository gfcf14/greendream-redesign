(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/greendream.fdce35cb.png"},function(e,t,n){e.exports=n.p+"static/media/programspic.489c86ea.svg"},function(e,t,n){e.exports=n.p+"static/media/vortex.f82de07f.svg"},function(e,t,n){e.exports=n.p+"static/media/profile-icon.739f162b.svg"},function(e,t,n){e.exports=n.p+"static/media/sandwhich-icon.51ff6115.svg"},function(e,t,n){e.exports=n.p+"static/media/sign-in-icon.17e99dcc.svg"},function(e,t,n){e.exports=n.p+"static/media/sign-out-icon.099d3414.svg"},function(e,t,n){e.exports=n.p+"static/media/sign-up-icon.e38e4834.svg"},,,,,,function(e,t,n){e.exports={lg:"1440px",md:"992px",sm:"768px"}},,,,,,,,,function(e,t,n){e.exports=n(76)},,,,,function(e,t,n){e.exports={lg:"1440px",md:"992px",sm:"768px"}},function(e,t,n){e.exports={lg:"1440px",md:"992px",sm:"768px"}},,,,,,function(e,t,n){e.exports={lg:"1440px",md:"992px",sm:"768px"}},,,,,,,,,function(e,t,n){e.exports={lg:"1440px",md:"992px",sm:"768px"}},function(e,t,n){e.exports={lg:"1440px",md:"992px",sm:"768px"}},function(e,t,n){e.exports={lg:"1440px",md:"992px",sm:"768px"}},function(e,t,n){e.exports={lg:"1440px",md:"992px",sm:"768px"}},function(e,t,n){e.exports={lg:"1440px",md:"992px",sm:"768px"}},function(e,t,n){e.exports={lg:"1440px",md:"992px",sm:"768px"}},function(e,t,n){e.exports={lg:"1440px",md:"992px",sm:"768px"}},function(e,t,n){e.exports={lg:"1440px",md:"992px",sm:"768px"}},function(e,t,n){e.exports={lg:"1440px",md:"992px",sm:"768px"}},function(e,t,n){e.exports={lg:"1440px",md:"992px",sm:"768px"}},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(25),c=n.n(r),m=n(1),s=n(16),i=n.n(s),l=n(17),p=n.n(l),u=n(18),d=n.n(u),g=n(19),x=n.n(g),f=n(20),E=n.n(f),b=n(21),h=n.n(b),N=n(22),v=n.n(N),y=n(23),w=n.n(y);n(43);function C(){return o.a.createElement("button",{className:"contact-button-rct-component"},"CONTACT")}n(44);function T(){return o.a.createElement(m.Flex,{as:"section",className:"home-page-rct-component"},o.a.createElement(m.Flex,{className:"home-page-rct-component__slideshow-container",style:{backgroundImage:"url(".concat(p.a,")")}},o.a.createElement("div",{className:"image-descriptor"},"PROGRAMS: Non-gaming programs I've developed")),o.a.createElement("span",{className:"home-page-rct-component__welcome-text"},"Welcome to GreenDream! Where it's all about software development and what the joy of creating means. May the programs, games and tutorials here inspire you to create! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"),o.a.createElement(X,{buttonText:"WHAT'S NEW?"}))}var k=n(34),O=n(6),F=n.n(O);n(50);function I(e){var t=e.bodyContent,n=e.titleContent;return o.a.createElement(m.Flex,{as:"section",className:"page-container-rct-component"},o.a.createElement($,n),o.a.createElement(z,t))}var _=n(37),G=n(28),A=n.n(G);function S(e){return Object(_.a)({},e,{key:A.a.generate()})}var P=[{name:"SIGN UP"},{name:"SIGN IN"}].map(S),j=[{name:"PROGRAMS",path:"/programs",contentComponent:o.a.createElement(I,{titleContent:{title:"PROGRAMS"},bodyContent:{content:"programs go here"}})},{name:"GAMES",path:"/games",contentComponent:o.a.createElement(I,{titleContent:{title:"GAMES"},bodyContent:{content:"games go here"}})},{name:"TUTORIALS",path:"/tutorials",contentComponent:o.a.createElement(I,{titleContent:{title:"TUTORIALS"},bodyContent:{content:"tutorials go here"}})},{name:"ABOUT",path:"/about",contentComponent:o.a.createElement(I,{titleContent:{title:"ABOUT"},bodyContent:{content:"about info goes here"}})}].map(S),B=n(29),R=n.n(B),U=(n(59),{buttonType:"sign-up",position:"left"}),L={buttonType:"sign-in",position:"right"};function M(e){return j.map(function(t){var n={itemName:t.name,itemPath:t.path,itemType:e};return o.a.createElement(V,Object.assign({key:t.key},n))})}function W(){var e=Object(a.useState)(!1),t=Object(k.a)(e,2),n=t[0],r=t[1];function c(e){r(e)}return Object(a.useEffect)(function(){window.addEventListener("resize",function(){window.innerWidth>=parseInt(R.a.md,10)&&n&&r(!1)})}),o.a.createElement(m.Flex,{as:"section",className:"menu-rct-component"},o.a.createElement(m.Flex,{as:"ul",className:"menu-list"},M("desktop")),o.a.createElement(C,null),o.a.createElement(m.Image,{src:E.a,className:"sandwhich-icon",alt:"sandwhich-icon",onClick:function(){return c(!n)}}),o.a.createElement("div",{className:"division"}),o.a.createElement(q,U),o.a.createElement(q,L),o.a.createElement(m.Box,{as:"ul",className:F()("tablet-menu",n?"open":"closed")},M("tablet")),o.a.createElement(m.Box,{className:F()("mobile-menu",n?"open":"closed")},o.a.createElement("button",{className:"close-button",onClick:function(){return c(!n)},tabIndex:"0"},"X"),o.a.createElement(m.Box,{className:"menus-container"},o.a.createElement(H,{separatorTitle:"MENU"}),o.a.createElement(m.Flex,{as:"ul",className:"main-menu"},M("mobile")),o.a.createElement(H,{separatorTitle:"ACCOUNT"}),o.a.createElement(m.Flex,{as:"ul",className:"account-menu"},P.map(function(e){var t={itemName:e.name,itemType:"mobile"};return o.a.createElement(V,Object.assign({key:e.key},t))})))),o.a.createElement(Y,{isVisible:n?"visible":"hidden",onClick:function(){return c(!n)}}))}n(60);function D(e){switch(e){case"profile":return x.a;case"sign-in":return h.a;case"sign-out":return v.a;case"sign-up":return w.a;default:return""}}function q(e){var t=e.buttonType,n=e.position;return o.a.createElement("button",{className:F()("menu-button-rct-component",n)},o.a.createElement(m.Image,{src:D(t),className:"menu-button-rct-component__icon",alt:"menu-button-icon"}))}n(61);function V(e){var t=e.itemName,n=e.itemPath,a=e.itemType;return o.a.createElement(m.Link,{className:F()("menu-item-rct-component",a),href:n},o.a.createElement("li",null,t))}V.defaultProps={itemPath:"#"};n(62);function H(e){var t=e.separatorTitle;return o.a.createElement(m.Flex,{className:"menu-separator-rct-component"},o.a.createElement("span",{className:"separator-title"},t),o.a.createElement("div",{className:"separator-bar"}))}n(63);function J(){return o.a.createElement(m.Flex,{as:"section",className:"not-found-rct-component"},o.a.createElement("section",{className:"not-found-rct-component__text-section"},o.a.createElement("p",{className:"center-text"},"404 page not found"),o.a.createElement(m.Link,{href:"/",className:"bottom-text"},"Don't worry! Click here to go back to the homepage")),o.a.createElement("section",{className:"not-found-rct-component__rotated-section"},o.a.createElement(m.Image,{src:d.a,className:"vortex",alt:"vortex"})),o.a.createElement("section",{className:"not-found-rct-component__logo-section"},o.a.createElement(m.Image,{src:i.a,className:"logo",alt:"logo"})))}n(64);function z(e){var t=e.content;return o.a.createElement(m.Flex,{as:"section",className:"page-body-rct-component"},t)}n(65);function X(e){var t=e.buttonText;return o.a.createElement("button",{className:"page-button-rct-component"},t)}n(66);function $(e){var t=e.title;return o.a.createElement(m.Flex,{as:"section",className:"page-title-rct-component"},t)}n(67);function K(e){var t=e.contentComponent;return o.a.createElement(m.Flex,{as:"section",className:"main-landing-rct-component"},o.a.createElement(m.Flex,{as:"section",className:"main-landing-rct-component__header"},o.a.createElement(m.Flex,{as:"section",className:"background"},o.a.createElement(m.Link,{href:"/"},o.a.createElement(m.Image,{src:i.a,className:"logo",alt:"logo"})),o.a.createElement(W,null))),t)}var Q=n(35);n(68);function Y(e){var t=e.isVisible,n=Object(Q.a)(e,["isVisible"]);return o.a.createElement(m.Box,Object.assign({as:"section",className:F()("modal-background-rct-component",t)},n))}var Z=n(30),ee=function(){return o.a.createElement(Z.Helmet,{defaultTitle:"GreenDream: Programming and Games",titleTemplate:"GreenDream: Programming and Games - %"},o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("meta",{name:"description",content:"This is a website for everyday use of programs and games"}),o.a.createElement("meta",{property:"og:site_name",content:"GreenDream: Programming and Games"}),o.a.createElement("meta",{property:"og:description",content:"This is a website for everyday use of programs and games"}),o.a.createElement("meta",{property:"og:image",content:""}),o.a.createElement("meta",{property:"og:url",content:"https://www.greendreampg.com/"}),o.a.createElement("meta",{property:"og:type",content:"article"}),o.a.createElement("meta",{name:"robots",content:"index,follow"}),o.a.createElement("link",{rel:"canonical",href:"https://www.greendreampg.com/"}))},te=n(33),ne=n(3);var ae=function(){return o.a.createElement(te.a,{basename:"/greendream-redesign"},o.a.createElement(ne.c,null,o.a.createElement(ne.a,{exact:!0,path:"/",render:function(){return o.a.createElement(K,{contentComponent:o.a.createElement(T,null)})}}),j.map(function(e){return o.a.createElement(ne.a,{key:e.key,exact:!0,path:e.path,render:function(){return o.a.createElement(K,{contentComponent:e.contentComponent})}})}),o.a.createElement(ne.a,{component:J})))};n(75);var oe=function(){return o.a.createElement(a.Fragment,null,o.a.createElement(ee,null),o.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[38,1,2]]]);
//# sourceMappingURL=main.35802cef.chunk.js.map