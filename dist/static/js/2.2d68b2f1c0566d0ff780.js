webpackJsonp([2],{439:function(n,e,t){"use strict";function s(n){t(447)}Object.defineProperty(e,"__esModule",{value:!0});var i=t(443),a=t(449),o=t(147),r=s,l=o(i.a,a.a,!1,r,null,null);e.default=l.exports},443:function(n,e,t){"use strict";e.a={name:"international",data:function(){return{msg:"Welcome to IdNews",newsid:""}},created:function(){var n=this;this.$newsapi.v2.topHeadlines({sources:"bbc-news,the-verge"}).then(function(e){n.newsid=e.articles,n.$loading=!1})}}},447:function(n,e,t){var s=t(448);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(438)("aa5c67c6",s,!0,{})},448:function(n,e,t){e=n.exports=t(437)(!0),e.push([n.i,"h1,h2{font-weight:400}.judul h4{font-size:.9rem;font-weight:600}.judul p{font-size:.8rem}ul{list-style-type:none;padding:0}li{display:inline-block;margin:0 10px}a{color:#35495e}","",{version:3,sources:["/var/www/html/idnews/src/components/International.vue"],names:[],mappings:"AACA,MACE,eAAoB,CACrB,AACD,UACI,gBAAkB,AAClB,eAAiB,CACpB,AACD,SACE,eAAkB,CACnB,AACD,GACE,qBAAsB,AACtB,SAAW,CACZ,AACD,GACE,qBAAsB,AACtB,aAAe,CAChB,AACD,EACE,aAAe,CAChB",file:"International.vue",sourcesContent:["\nh1, h2 {\n  font-weight: normal;\n}\n.judul h4{\n    font-size: 0.9rem;\n    font-weight: 600;\n}\n.judul p{\n  font-size: 0.8rem;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n}\nli {\n  display: inline-block;\n  margin: 0 10px;\n}\na {\n  color: #35495E;\n}\n"],sourceRoot:""}])},449:function(n,e,t){"use strict";var s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"international"},[n._m(0),n._v(" "),t("b-container",[t("b-row",[1==n.$loading?t("div",{staticClass:"m-auto"},[t("b-alert",{attrs:{variant:"danger",show:""}},[n._v("Loading...")])],1):n._e(),n._v(" "),n._l(n.newsid,function(e){return t("b-col",{key:e.id,attrs:{cols:"",lg:"4",xs:"auto"}},[t("b-card",{staticClass:"judul",attrs:{title:e.title,"img-src":e.urlToImage}},[t("sub",[n._v(n._s(e.publishedAt))]),n._v(" "),t("b-card-text",{staticClass:"konten",domProps:{innerHTML:n._s(e.content)}})],1)],1)})],2)],1)],1)},i=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("strong",[t("p",[n._v("Berita Internasional (powered by NewsAPI.org)")])])}],a={render:s,staticRenderFns:i};e.a=a}});
//# sourceMappingURL=2.2d68b2f1c0566d0ff780.js.map