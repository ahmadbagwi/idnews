webpackJsonp([3],{442:function(t,n,a){"use strict";function e(t){a(456)}Object.defineProperty(n,"__esModule",{value:!0});var i=a(446),o=a(458),s=a(147),r=e,c=s(i.a,o.a,!1,r,null,null);n.default=c.exports},446:function(t,n,a){"use strict";n.a={name:"covid",data:function(){return{indonesia:"",itemsdata:[]}},created:function(){var t=this;this.axios.get("https://covid19.mathdro.id/api/countries/Indonesia/confirmed").then(function(n){t.indonesia=n.data[0]}).catch(function(t){console.log(t)}),this.axios.get("https://covid19.mathdro.id/api/confirmed").then(function(n){t.items=n.data,t.items.forEach(function(n){t.itemsdata.push({Negara:n.countryRegion,"Negara Bagian/Provinsi":n.provinceState,Kasus:n.confirmed,Sembuh:n.recovered,Meninggal:n.deaths}),t.$loading=!1})}).catch(function(t){console.log(t)})}}},456:function(t,n,a){var e=a(457);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(438)("91c6e25c",e,!0,{})},457:function(t,n,a){n=t.exports=a(437)(!0),n.push([t.i,"h1,h2{font-weight:400}ul{list-style-type:none;padding:0}li{display:inline-block;margin:0 10px}a{color:#35495e}","",{version:3,sources:["/var/www/html/idnews/src/components/Covid.vue"],names:[],mappings:"AACA,MACE,eAAoB,CACrB,AACD,GACE,qBAAsB,AACtB,SAAW,CACZ,AACD,GACE,qBAAsB,AACtB,aAAe,CAChB,AACD,EACE,aAAe,CAChB",file:"Covid.vue",sourcesContent:["\nh1, h2 {\n  font-weight: normal;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n}\nli {\n  display: inline-block;\n  margin: 0 10px;\n}\na {\n  color: #35495E;\n}\n"],sourceRoot:""}])},458:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"covid"},[t._m(0),t._v(" "),a("b-container",[a("b-row",[a("b-col",{attrs:{col:"",lg:"12",xs:"12"}},[a("div",{staticClass:"mt-3"},[a("p",[t._v("Data Covid Indonesia")]),t._v(" "),a("b-button-group",[a("b-button",{attrs:{variant:"info"}},[t._v("Total Kasus "+t._s(t.indonesia.confirmed))]),t._v(" "),a("b-button",{attrs:{variant:"success"}},[t._v("Sembuh "+t._s(t.indonesia.recovered))]),t._v(" "),a("b-button",{attrs:{variant:"danger"}},[t._v("Meninggal "+t._s(t.indonesia.deaths))])],1)],1)])],1),t._v(" "),a("b-row",[a("b-col",{attrs:{col:"",lg:"12",xs:"6"}},[a("br"),a("br"),t._v(" "),a("p",[t._v("Data Covid Global")]),t._v(" "),1==t.$loading?a("div",{staticClass:"m-auto"},[a("b-alert",{attrs:{variant:"danger",show:""}},[t._v("Loading...")])],1):t._e(),t._v(" "),a("b-table",{attrs:{responsive:"",striped:"",hover:"",items:t.itemsdata}})],1)],1)],1)],1)},i=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("strong",[a("p",[t._v("Data https://covid19.mathdro.id/api")])])}],o={render:e,staticRenderFns:i};n.a=o}});
//# sourceMappingURL=3.8e77e5e46d8c330b3406.js.map