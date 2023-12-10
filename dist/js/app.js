(function(){"use strict";var e={2362:function(e,n,t){var o=t(9963),r=t(6252);function i(e,n,t,o,i,a){const s=(0,r.up)("AppMenu"),l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s),(0,r.Wm)(l)])}const a=(0,r._)("button",{type:"button",class:"callMenu btn","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},[(0,r._)("i",{class:"line"}),(0,r._)("i",{class:"line"}),(0,r._)("i",{class:"line"})],-1),s={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l={class:"modal-dialog"},u={class:"modal-content"},c=(0,r._)("div",{class:"modal-header"},[(0,r._)("h5",{class:"modal-title w-100",id:"exampleModalLabel"},"目錄"),(0,r._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),d={class:"modal-footer bg-dark"},f={class:"btn w-100 fs-2","data-bs-dismiss":"modal"},m={class:"btn w-100 fs-2","data-bs-dismiss":"modal"},p={class:"btn w-100 fs-2","data-bs-dismiss":"modal"},b={class:"btn w-100 fs-2","data-bs-dismiss":"modal"};function h(e,n,t,o,i,h){const v=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[a,(0,r._)("div",s,[(0,r._)("div",l,[(0,r._)("div",u,[c,(0,r._)("div",d,[(0,r._)("button",f,[(0,r.Wm)(v,{class:"fontCSS",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("簡介")])),_:1})]),(0,r._)("button",m,[(0,r.Wm)(v,{class:"fontCSS",to:"/SlicingCoding"},{default:(0,r.w5)((()=>[(0,r.Uk)("切版練習")])),_:1})]),(0,r._)("button",p,[(0,r.Wm)(v,{class:"fontCSS",to:"/MyComponents"},{default:(0,r.w5)((()=>[(0,r.Uk)("小元件練習")])),_:1})]),(0,r._)("button",b,[(0,r.Wm)(v,{class:"fontCSS",to:"/MyProject"},{default:(0,r.w5)((()=>[(0,r.Uk)("專案練習")])),_:1})])])])])])],64)}var v={},g=t(3744);const y=(0,g.Z)(v,[["render",h]]);var w=y,C={components:{AppMenu:w}};const _=(0,g.Z)(C,[["render",i]]);var S=_,k=t(2201);const P=[{path:"/",name:"home",component:()=>t.e(751).then(t.bind(t,5751))},{path:"/SlicingCoding",name:"SlicingCoding",component:()=>Promise.all([t.e(658),t.e(290)]).then(t.bind(t,7290))},{path:"/MyComponents",component:()=>Promise.all([t.e(658),t.e(911)]).then(t.bind(t,1911)),children:[{path:"",name:"MyComponents",component:()=>Promise.all([t.e(658),t.e(911)]).then(t.bind(t,1911))},{path:"animatedText",name:"animatedText",component:()=>t.e(434).then(t.bind(t,7434))},{path:"HomeViewSlide",name:"HomeViewSlide",component:()=>t.e(870).then(t.bind(t,5870))}]},{path:"/MyProject",component:()=>Promise.all([t.e(658),t.e(787)]).then(t.bind(t,787)),children:[{path:"",name:"MyProject",component:()=>Promise.all([t.e(658),t.e(787)]).then(t.bind(t,787))},{path:"AnimeList",name:"AnimeList",component:()=>Promise.all([t.e(658),t.e(965)]).then(t.bind(t,3042))}]}],M=(0,k.p7)({history:(0,k.PO)("/AnimeRecordVue/"),routes:P});var O=M,j=(t(8877),t(7852)),A=t(3907);const x=(0,A.MT)({state(){},mutations:{}});var T=x;const E=(0,o.ri)(S);E.use(O),E.use(j.ZP),E.use(T),E.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var u=r();void 0!==u&&(n=u)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="animerecordvue:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+i){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+i),s.src=o),e[o]=[r];var f=function(n,t){s.onerror=s.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/AnimeRecordVue/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=s,i.parentNode&&i.parentNode.removeChild(i),r(l)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),s=t.p+a;if(n(a,s))return r();e(o,s,null,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={434:1,751:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),s=new Error,l=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};t.l(a,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],s=o[1],l=o[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(l)var c=l(t)}for(n&&n(o);u<a.length;u++)i=a[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},o=self["webpackChunkanimerecordvue"]=self["webpackChunkanimerecordvue"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2362)}));o=t.O(o)})();
//# sourceMappingURL=app.js.map