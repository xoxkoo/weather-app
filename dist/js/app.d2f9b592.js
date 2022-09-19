(function(){"use strict";var t={3439:function(t,n,e){var o=e(9242),a=e(3396),i=e(7139),r=e.p+"img/27.c9ad127f.png";const c={class:"main-content"},s=(0,a._)("img",{src:r,alt:"",class:"current-weather-img"},null,-1),l={class:"weather-info"};function u(t,n,e,o,r,u){const d=(0,a.up)("AppHeader"),p=(0,a.up)("InfoGroup"),f=(0,a.up)("PartModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(d),(0,a._)("div",c,[s,(0,a._)("h1",l,(0,i.zw)(u.capitalize(r.weatherInfo)),1),(0,a.Wm)(p)]),(0,a.Wm)(f)],64)}var d=e.p+"img/location-pin.83ce3147.png";const p=t=>((0,a.dD)("data-v-1eb45c13"),t=t(),(0,a.Cn)(),t),f={class:"col"},v={class:"date"},h=p((()=>(0,a._)("div",{class:"city-name"},[(0,a._)("img",{src:d,alt:"location pin",class:"location-pin"}),(0,a.Uk)(" Copenhagen")],-1))),m=p((()=>(0,a._)("div",{class:"person"}," 👨‍💻 ",-1)));function g(t,n,e,o,r,c){return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("div",f,[(0,a._)("div",v,(0,i.zw)(r.date)+".",1),h]),m])}var w={name:"AppHeader",data(){return{date:""}},methods:{getTime(){const t={weekday:"long",month:"long",day:"numeric"},n=new Date;this.date=n.toLocaleDateString("en-US",t)}},mounted(){this.getTime()}},b=e(89);const y=(0,b.Z)(w,[["render",g],["__scopeId","data-v-1eb45c13"]]);var _=y,D=e.p+"img/location-2969395.072929e8.png";const O={class:"modal"},k={class:"forecast-group"},H={for:"search",class:"form-group"},I=(0,a._)("img",{src:D,alt:"image"},null,-1),x=(0,a._)("label",{for:"search",class:"label"},"Enter Location",-1),C=(0,a._)("button",{class:"btn btn-primary",type:"submit"},"search",-1);function F(t,n,e,r,c,s){const l=(0,a.up)("ForecastItem");return(0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("div",k,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(4,(t=>(0,a.Wm)(l,{key:t}))),64))]),(0,a._)("div",{class:(0,i.C_)(["searchResults-group",{active:c.locations.length}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.locations,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"search-item",key:t},(0,i.zw)(t),1)))),128))],2),(0,a._)("form",{action:"#",onSubmit:n[3]||(n[3]=(0,o.iM)((t=>s.getLocation()),["prevent"]))},[(0,a._)("label",H,[I,x,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>c.input=t),type:"text",class:"input",id:"search",name:"search",onFocus:n[1]||(n[1]=t=>s.focusHandler(t)),onFocusout:n[2]||(n[2]=t=>s.focusHandler(t))},null,544),[[o.nr,c.input]]),C])],32)])}e(7658);const L={class:"item"};function E(t,n,e,o,i,r){return(0,a.wg)(),(0,a.iD)("div",L)}var P={name:"ForecastItem"};const j=(0,b.Z)(P,[["render",E]]);var W=j,Z=e(6265),z=e.n(Z),A={name:"PartModal",data(){return{items:["","",""],input:"",apiKey:"n5Sme4fIP18KlbuwOfEPZGWwqfssaxsx",locations:[]}},methods:{focusHandler:t=>{const n=t.target.name,e=document.querySelector(".label",`for="${n}"`);"focusout"!==t.type?e.classList.add("active"):""==t.target.value&&e.classList.remove("active")},getLocation(){z().get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=${this.input}`).then((t=>{this.locations=[],t.data.forEach((t=>{this.locations.push(this.extractDataFromLocation(t))}))})).catch((t=>{this.locations=[],this.locations.push("No results found 🙁"),console.log(t)}))},extractDataFromLocation(t){let n=`${t.EnglishName}, ${t.Country.EnglishName}`;return n}},components:{ForecastItem:W}};const K=(0,b.Z)(A,[["render",F]]);var M=K;const S={class:"info-group"},T=(0,a.uE)('<div class="info-item col"><div>Wind 💨</div><div class="f-highlight">155</div></div><div class="info-item col"><div>Temp. 🌡</div><div class="f-highlight">30ºC</div></div><div class="info-item col"><div>Humid. 💧</div><div class="f-highlight">10%</div></div>',3),$=[T];function G(t,n,e,o,i,r){return(0,a.wg)(),(0,a.iD)("div",S,$)}var U={name:"InfoGroup"};const q=(0,b.Z)(U,[["render",G]]);var N=q,Y={name:"App",data(){return{weatherInfo:"sunny"}},methods:{capitalize:t=>t.charAt(0).toUpperCase()+t.slice(1)},components:{AppHeader:_,PartModal:M,InfoGroup:N}};const R=(0,b.Z)(Y,[["render",u]]);var V=R;(0,o.ri)(V).mount("#app")}},n={};function e(o){var a=n[o];if(void 0!==a)return a.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,a,i){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],i=t[u][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||r>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[s])}))?o.splice(s--,1):(c=!1,i<r&&(r=i));if(c){t.splice(u--,1);var l=a();void 0!==l&&(n=l)}}return n}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,a,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var a,i,r=o[0],c=o[1],s=o[2],l=0;if(r.some((function(n){return 0!==t[n]}))){for(a in c)e.o(c,a)&&(e.m[a]=c[a]);if(s)var u=s(e)}for(n&&n(o);l<r.length;l++)i=r[l],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(u)},o=self["webpackChunkweather_app"]=self["webpackChunkweather_app"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(3439)}));o=e.O(o)})();
//# sourceMappingURL=app.d2f9b592.js.map