(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{113:function(e,t,a){e.exports=a(226)},118:function(e,t,a){},120:function(e,t,a){},125:function(e,t,a){},222:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=(a(118),a(25)),i=a.n(s),l=a(42),d=a(10),u=a(265),p=a(266),m=a(269),f=a(255),h=a(258),v=a(270),g=a(264),b=a(104),y=a(263),E=a(4),w=a(259),_=(a(120),a(19));var x=function(e){var t=e.title,a=e.cases,n=e.total,o=e.isGreen,c=e.isOrange,s=e.isRed,i=e.active,l=e.onClick,d=Object(_.a)();return r.a.createElement(f.a,{className:"infoBox ".concat(i&&"infoBox--selected"," ").concat(s&&"infoBox--red"," ").concat(o&&"infoBox--green"," ").concat(c&&"infoBox--orange"," ").concat("dark"===d.palette.type&&"dark--stats"),onClick:l},r.a.createElement(h.a,null,r.a.createElement(w.a,{color:"textSecondary",className:"dark"===d.palette.type?"infoBox__title dark--title":"infoBox__title"},t),r.a.createElement("h2",{className:"infoBox__cases ".concat(s&&"infoBox__cases--red"," ").concat(o&&"infoBox__cases--green"," ").concat(c&&"infoBox__cases--orange")},a),r.a.createElement(w.a,{color:"textSecondary",className:"dark"===d.palette.type?"infoBox__total dark--total":"infoBox__total"},n," Total")))},k=a(262),C=a(268),O=(a(75),a(76),a(105)),j=a(13),S=a.n(j),N=a(267),B=a(260),I=a(261),T={cases:{hex:"#CC1034",rgb:"rgb(204,16,52)",half_op:"rgba(204,16,52,0.5)",multiplier:300},recovered:{hex:"#7dd71d",rgb:"rgb(125,215,29)",half_op:"rgba(125,215,29,0.5)",multiplier:400},deaths:{hex:"#fb4443",rgb:"rgb(258,68,67)",half_op:"rgba(258,68,67,0.5)",multiplier:1200}},D=function(e){var t=Object(O.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},A=function(e){return e?"+".concat(S()(e).format("0.0a")):"+0"},L=function(e,t,a){e.sort((function(e,a){return e[t]>a[t]?-1:1}));var n=e.slice(0,5).map((function(e){return e.countryInfo.iso3}));return e.map((function(e,o){return r.a.createElement(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],key:"map-circle-".concat(t,"-").concat(o),fillOpacity:.4,color:T[t].hex,fillColor:T[t].hex,radius:Math.sqrt(e[t])*T[t].multiplier,className:"".concat(n.includes(e.countryInfo.iso3)?"map__circle":null," ")},r.a.createElement(B.a,{className:"dark"===a?"dark--popup":null},r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"dark"===a?"info-name dark--name":"info-name"},e.country),r.a.createElement("div",{className:"dark"===a?"info-cases dark--cases":"info-cases"},"Cases: ",S()(e.cases).format("0,0")),r.a.createElement("div",{className:"dark"===a?"info-recovered dark--recovered":"info-recovered"},"Recovered: ",S()(e.recovered).format("0,0")),r.a.createElement("div",{className:"dark"===a?"info-deaths dark--deaths":"info-deaths"},"Deaths: ",S()(e.deaths).format("0,0")))))}))};function z(e){var t=e.coords,a=e.zoom;return Object(I.a)().setView(t,a),null}a(77);var R=function(e){var t=e.countries,a=e.casesType,n=e.center,o=e.zoom,c=e.minZoom,s=Object(_.a)();return r.a.createElement("div",{className:"map"},r.a.createElement(k.a,{fullscreenControl:!0,center:n,zoom:o,minZoom:c,bounceAtZoomLimits:!0,maxBoundsViscosity:.95,maxBounds:[[90,-180],[-90,180]]},r.a.createElement(C.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),L(t,a,s.palette.type),r.a.createElement(z,{zoom:o,coords:n})))};var W=function(e){var t=e.countries,a=e.casesType,n=e.center,o=e.zoom,c=e.minZoom,s=Object(_.a)();return r.a.createElement("div",{className:"map dark--map"},r.a.createElement(k.a,{fullscreenControl:!0,center:n,zoom:o,minZoom:c,maxBounds:[[90,-180],[-90,180]]},r.a.createElement(C.a,{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"}),L(t,a,s.palette.type),r.a.createElement(z,{zoom:o,coords:n})))};a(125);var Z=function(e){var t=e.countries,a=Object(_.a)();return r.a.createElement("div",{className:"light"===a.palette.type?"table":"table dark--table"},r.a.createElement("table",null,r.a.createElement("tbody",null,t.map((function(e,t){var a=e.country,n=e.cases;return r.a.createElement("tr",{key:"table-country-".concat(t)},r.a.createElement("td",null,a),r.a.createElement("td",null,r.a.createElement("strong",null,S()(n).format("0,0"))))})))))},M=a(23),G=a(99);var U=function(e){var t=e.casesType,a=void 0===t?"cases":t,o=e.theme,c=Object(M.a)(e,["casesType","theme"]),s=Object(n.useState)({}),u=Object(d.a)(s,2),p=u[0],m=u[1],f={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return S()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"},gridLines:{drawOnChartArea:!1,color:"light"===o?"rgba(0,0,0,0.35)":"#505050"}}],yAxes:[{gridLines:{drawOnChartArea:!1,color:"light"===o?"rgba(0,0,0,0.35)":"#505050"},ticks:{callback:function(e,t,a){return S()(e).format("0a")}}}]}},h=document.getElementById("chart");if(h){var v=h.getContext("2d"),g=v.createLinearGradient(0,0,0,430);"cases"===a?(g.addColorStop(0,"rgba(204,16,52,1)"),g.addColorStop(.1,"rgba(204,16,52,0.8)"),g.addColorStop(.2,"rgba(204,16,52,0.7)"),g.addColorStop(.3,"rgba(204,16,52,0.6)"),"dark"===o&&g.addColorStop(.6,"#303030"),"light"===o&&g.addColorStop(.6,"#fff")):"deaths"===a?(g.addColorStop(0,"rgba(258,68,67,0.8)"),g.addColorStop(.1,"rgba(258,68,67,0.6)"),g.addColorStop(.2,"rgba(258,68,67,0.5)"),g.addColorStop(.3,"rgba(258,68,67,0.3)"),"dark"===o&&g.addColorStop(.6,"#303030"),"light"===o&&g.addColorStop(.6,"#fff")):"recovered"===a&&((g=v.createLinearGradient(0,0,0,500)).addColorStop(0,"rgba(125,215,29,0.8)"),g.addColorStop(.1,"rgba(125,215,29,0.6)"),g.addColorStop(.2,"rgba(125,215,29,0.5)"),g.addColorStop(.3,"rgba(125,215,29,0.3)"),"dark"===o&&g.addColorStop(.6,"#303030"),"light"===o&&g.addColorStop(.6,"#fff"))}Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=90").then((function(e){return e.json()})).then((function(e){var t=b(e,a);m(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]);var b=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",n=[];for(var r in e.cases){if(t){var o={x:r,y:Math.abs(e[a][r]-t)};n.push(o)}t=e[a][r]}return n};return r.a.createElement("div",{className:c.className},(null===p||void 0===p?void 0:p.length)>0&&r.a.createElement(G.Line,{className:"line__chart",id:"chart",options:f,data:{datasets:[{backgroundColor:g,borderColor:"".concat(T[a].hex),data:p}]}}))},V=(a(222),a(223),a(100)),Y=a(101),J=function(){function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3;Object(V.a)(this,e),this.txtElement=t,this.words=a,this.txt="",this.wordIndex=0,this.wait=parseInt(n,10),this.type(),this.isDeleting=!1}return Object(Y.a)(e,[{key:"type",value:function(){var e=this,t=this.wordIndex%this.words.length,a=this.words[t];this.isDeleting?this.txt=a.substring(0,this.txt.length-1):this.txt=a.substring(0,this.txt.length+1),this.txtElement.innerHTML='<span className="app__header__text--txt">'.concat(this.txt,"</span>");var n=300;this.isDeleting&&(n/=2),this.isDeleting||this.txt!==a?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.wordIndex++,n=500):(n=this.wait,this.isDeleting=!0),setTimeout((function(){return e.type()}),n)}}]),e}(),q=a(103),P=a.n(q),F=a(102),H=a.n(F);var $=Object(v.a)()(Object(E.a)({withTheme:!0})((function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)("worldwide"),v=Object(d.a)(s,2),E=v[0],w=v[1],_=Object(n.useState)({}),k=Object(d.a)(_,2),C=k[0],O=k[1],j=Object(n.useState)([]),S=Object(d.a)(j,2),N=S[0],B=S[1],I=Object(n.useState)([0,0]),T=Object(d.a)(I,2),L=T[0],z=T[1],M=Object(n.useState)("xs"===e.width?2:3),G=Object(d.a)(M,2),V=G[0],Y=G[1],q=Object(n.useState)([]),F=Object(d.a)(q,2),$=F[0],K=F[1],Q=Object(n.useState)("cases"),X=Object(d.a)(Q,2),ee=X[0],te=X[1],ae=Object(n.useState)(!1),ne=Object(d.a)(ae,2),re=ne[0],oe=ne[1],ce=re?"dark":"light",se=Object(b.a)({palette:{type:ce}});Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){O(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=D(e);B(a),K(e),c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".app__header__text--type"),t=JSON.parse(e.getAttribute("data-words")),a=e.getAttribute("data-wait");new J(e,t,a)}))}),[]);var ie=function(){var t=Object(l.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target.value,w(n),r="worldwide"===n?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(n),t.next=5,fetch(r).then((function(e){return e.json()})).then((function(t){z("worldwide"===n?[0,0]:[t.countryInfo.lat,t.countryInfo.long]),O(t),Y("worldwide"===n?"xs"===e.width?2:3:"xs"===e.width?3:5)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(y.a,{theme:se},r.a.createElement("div",{className:"dark"===se.palette.type?"".concat("lg"===e.width?"app dark--main":"app--small dark--main"):"".concat("lg"===e.width?"app":"app--small")},r.a.createElement("div",{className:"app__left"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h1",{className:"app__header__text app__header__text--color-".concat(ee)},"COVID-19\xa0",r.a.createElement("span",{className:"app__header__text--type","data-wait":"3000","data-words":'["Tracker", "Confirmed Cases", "Recovered Cases" , "Death Cases"]'})),r.a.createElement(g.a,{style:{position:"absolute",right:"9em"},value:re,selected:re,onChange:function(){return oe(!re)},className:"app__toggle--margin"},re&&r.a.createElement(H.a,null),!re&&r.a.createElement(P.a,null)),r.a.createElement(u.a,{className:"light"===se.palette.type?"app__dropdown":"app__dropdown dark--dropdown"},r.a.createElement(p.a,{variant:"outlined",value:E,className:"light"===se.palette.type?"select":"select dark--select",onChange:ie},r.a.createElement(m.a,{value:"worldwide"},"WorldWide"),o.map((function(e,t){return r.a.createElement(m.a,{key:"country-dropdown-".concat(t),value:e.value},e.name)}))))),r.a.createElement("div",{className:"app__stats"},r.a.createElement(x,{isRed:!0,active:"cases"===ee,title:"Cases",cases:A(C.todayCases),total:A(C.cases),onClick:function(){return te("cases")}}),r.a.createElement(x,{isGreen:!0,active:"recovered"===ee,title:"Recovered",cases:A(C.todayRecovered),total:A(C.recovered),onClick:function(){return te("recovered")}}),r.a.createElement(x,{isOrange:!0,active:"deaths"===ee,title:"Deaths",cases:A(C.todayDeaths),total:A(C.deaths),onClick:function(){return te("deaths")}})),"light"===se.palette.type?r.a.createElement(R,{center:L,zoom:V,countries:$,casesType:ee,minZoom:V}):r.a.createElement(W,{center:L,zoom:V,countries:$,casesType:ee,minZoom:V})),r.a.createElement(f.a,{className:"dark"===se.palette.type?"app__right dark--right":"app__right"},r.a.createElement(h.a,null,r.a.createElement("h3",null,"LIVE CASES BY COUNTRY"),r.a.createElement(Z,{countries:N}),r.a.createElement("h3",{className:"app__graphTitle"},"Worldwide new ",ee),r.a.createElement(U,{className:"app__graph",casesType:ee,theme:se.palette.type})))))}))),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement($,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Q(t,e)}))}}()},76:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.4c0cb29d.chunk.js.map