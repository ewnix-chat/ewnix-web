(function(){"use strict";var e={4947:function(e,n,t){var o=t(9242),a=t(3396);function r(e,n,t,o,r,i){const s=(0,a.up)("HeaderPage"),u=(0,a.up)("MenuPage"),c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(s),(0,a.Wm)(u),(0,a.Wm)(c)])}const i=e=>((0,a.dD)("data-v-1d70ab19"),e=e(),(0,a.Cn)(),e),s={class:"header"},u=i((()=>(0,a._)("h1",null,"Ewnix Chat Server",-1))),c=[u];function l(e,n){return(0,a.wg)(),(0,a.iD)("div",s,c)}var d=t(89);const h={},f=(0,d.Z)(h,[["render",l],["__scopeId","data-v-1d70ab19"]]);var v=f;const p=e=>((0,a.dD)("data-v-1f914a36"),e=e(),(0,a.Cn)(),e),w={class:"menu"},g=p((()=>(0,a._)("a",{href:"/RequestAccess"},"Request Access",-1))),b=[g],m=p((()=>(0,a._)("a",{href:"https://chat.ewnix.net"},"Chat Now",-1))),_=[m];function k(e,n,t,o,r,i){const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("ul",null,[(0,a._)("li",{onClick:n[0]||(n[0]=e=>i.navigateTo("/"))},[(0,a.Wm)(s,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1})]),(0,a._)("li",{onClick:n[1]||(n[1]=e=>i.navigateTo("/about"))},[(0,a.Wm)(s,{to:"/about"},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1})]),(0,a._)("li",{onClick:n[2]||(n[2]=e=>i.navigateTo("/RequestAccess"))},b),(0,a._)("li",{onClick:n[3]||(n[3]=e=>i.navigateTo("https://chat.ewnix.net"))},_)])])}var y={methods:{navigateTo(e){window.location.href=e}}};const x=(0,d.Z)(y,[["render",k],["__scopeId","data-v-1f914a36"]]);var C=x,D={components:{HeaderPage:v,MenuPage:C}};const O=(0,d.Z)(D,[["render",r]]);var T=O,I=t(2483);const R=e=>((0,a.dD)("data-v-18df4ee4"),e=e(),(0,a.Cn)(),e),j={class:"content"},q=R((()=>(0,a._)("p",null,"Welcome to the Ewnix Chat Server's home page!",-1))),A=R((()=>(0,a._)("p",null,[(0,a.Uk)("Ewnix is an LDAP-authenticated IRCv3 server aimed at bringing you the most unique, fun, and new IRCv3 features available today. To request access, please "),(0,a._)("a",{class:"content-link",href:"https://ldap.ewnix.net/request"},"click here"),(0,a.Uk)(" or select the appropriate menu item to your right. To learn more about us, please see the "),(0,a._)("a",{class:"content-link",href:"/about"},"About"),(0,a.Uk)(" page!")],-1))),E=R((()=>(0,a._)("p",null,"We look forward to seeing you soon!",-1))),P=[q,A,E];function W(e,n){return(0,a.wg)(),(0,a.iD)("div",j,P)}const U={},M=(0,d.Z)(U,[["render",W],["__scopeId","data-v-18df4ee4"]]);var Z=M;const H=e=>((0,a.dD)("data-v-4b2e844f"),e=e(),(0,a.Cn)(),e),S={class:"content"},Y=H((()=>(0,a._)("p",null,"Ewnix was founded in 2003 by Eric Yoakum (eric) and Kevin Thompson (phlux/phluxeternus) in an effort to provide a safe place for chats about sensitive subjects such as politics and religion. Ewnix's goals at the time were to provide a forum for free speech, and those values are still held true today.",-1))),z=H((()=>(0,a._)("p",null,"Over the years, IRC has changed. Many have considered it long dead due to the advantages that Discord and Slack brings. Ewnix aims to bring an end to the reign of Discord's dominance of our Twitch and gaming communities by implementing several new IRCv3 capabilities that we believe will compete directly with Discord's stack.",-1))),B=H((()=>(0,a._)("p",null,"In addition to IRCv3 capabilities, we plan to implement voice and video conferencing into the client as well, but we plan to handle the encoding for such events server-side. We do not believe the brunt of resources should be placed on the user, but rather, the server should serve the user in the way it was always designed to do so.",-1))),F=H((()=>(0,a._)("p",null,"The idea came to phluxeternus when he caught Discord using over 4GB of RAM without conducting any voice or video conferencing activities. This is an absolutely absurd amount of RAM for what equates to a glorified chat client.",-1))),G=H((()=>(0,a._)("p",null,[(0,a.Uk)("You can check the status of our project by visiting "),(0,a._)("a",{class:"content-link",href:"https://bugzilla.ewnix.net"},"our issue tracker"),(0,a.Uk)(", which will include up-to-date feature requests, bug reports, and statuses on those projects.")],-1))),K=[Y,z,B,F,G];function L(e,n){return(0,a.wg)(),(0,a.iD)("div",S,K)}const N={},J=(0,d.Z)(N,[["render",L],["__scopeId","data-v-4b2e844f"]]);var Q=J;const V=[{path:"/",name:"home",component:Z},{path:"/about",name:"about",component:Q}],X=(0,I.p7)({history:(0,I.PO)("/"),routes:V});var $=X;(0,o.ri)(T).use($).mount("#app")}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={exports:{}};return e[o].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,o,a,r){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],a=e[l][1],r=e[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(s=!1,r<i&&(i=r));if(s){e.splice(l--,1);var c=a();void 0!==c&&(n=c)}}return n}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,a,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var a,r,i=o[0],s=o[1],u=o[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(u)var l=u(t)}for(n&&n(o);c<i.length;c++)r=i[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(l)},o=self["webpackChunkewnix_new_new"]=self["webpackChunkewnix_new_new"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(4947)}));o=t.O(o)})();
//# sourceMappingURL=app.5628138d.js.map