webpackJsonp([4],{i1Pi:function(t,i){},xBEA:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("mtWM"),r=e.n(s),n={name:"modifFourniture",data:function(){return{fournitures:[],errors:[]}},created:function(){var t=this;r.a.get("http://localhost:3000/fourniture").then(function(i){t.fournitures=i.data}).catch(function(i){t.errors.push(i)})}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"modifCategorie"}},[i("div",{staticClass:"container-fluid col-md-11"},[i("h1",[this._v("Créer une catégorie")]),this._v(" "),i("form",{staticClass:"row justify-content-md-center top-buffer",attrs:{action:"#"}},[this._m(0),this._v(" "),i("div",{staticClass:"col-md-12 row justify-content-md-center top-buffer"},[i("div",{staticClass:"col-md-2"},[i("router-link",{staticClass:"btn btn-primary",attrs:{to:"/gerer-categorie"}},[this._v("Annuler")])],1),this._v(" "),this._m(1)])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"col-md-12 row justify-content-md-center align-items-center top-buffer"},[i("div",{staticClass:"col-md-2"},[i("label",{attrs:{for:"designation"}},[this._v("Désignation :")])]),this._v(" "),i("div",{staticClass:"col-md-8 "},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"designation"}})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"col-md-2"},[i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Créer")])])}]},o=e("VU/8")(n,a,!1,function(t){e("i1Pi")},"data-v-6b0f91e5",null);i.default=o.exports}});
//# sourceMappingURL=4.001df8dfc8e9ab863ddf.js.map