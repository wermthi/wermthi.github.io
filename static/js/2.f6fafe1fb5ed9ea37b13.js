webpackJsonp([2],{xBEA:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("mtWM"),n=s.n(e),r={name:"modifFourniture",data:function(){return{fournitures:[],errors:[]}},created:function(){var t=this;n.a.get("http://localhost:3000/fourniture").then(function(a){t.fournitures=a.data}).catch(function(a){t.errors.push(a)})}},i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"modifCategorie"}},[s("nav",{staticClass:"navbar navbar-expand-md navbar-light"},[s("span",{staticClass:"navbar-brand mb-0 h1"},[t._v("Gestion des fournitures scolaires")]),t._v(" "),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"accueil"}},[t._v("Accueil")])]),t._v(" "),s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                        Consulter\n                    ")]),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"inv-ele"}},[t._v("Inventaire d'un élève")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"inv-ens"}},[t._v("Inventaire d'un enseignant")])])]),t._v(" "),s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                        Distribuer\n                    ")]),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"distr-cla"}},[t._v("A une classe")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"distr-ele"}},[t._v("A un élève")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"distr-ens"}},[t._v("A un enseignant")])])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"gerer-fourniture"}},[t._v("Gérer stock de fourniture")])]),t._v(" "),s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:"gerer-categorie"}},[t._v("Gérer les fournitures")])])]),t._v(" "),s("p",{staticClass:"utilisateur"},[t._v("Nom de l'utilisateur connecté")]),t._v(" "),s("a",{staticClass:"btn btn-danger",attrs:{href:"form_conn",role:"button"}},[t._v("Déconnexion")])])]),t._v(" "),s("div",{staticClass:"container-fluid col-md-11"},[s("h1",[t._v("Créer une catégorie")]),t._v(" "),s("form",{staticClass:"row justify-content-md-center top-buffer",attrs:{action:"#"}},[s("div",{staticClass:"col-md-12 row justify-content-md-center align-items-center top-buffer"},[s("div",{staticClass:"col-md-2"},[s("label",{attrs:{for:"designation"}},[t._v("Désignation :")])]),t._v(" "),s("div",{staticClass:"col-md-8 "},[s("input",{staticClass:"form-control",attrs:{type:"text",id:"designation"}})])]),t._v(" "),s("div",{staticClass:"col-md-12 row justify-content-md-center top-buffer"},[s("div",{staticClass:"col-md-2"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"gerer-categorie"}},[t._v("Annuler")])]),t._v(" "),s("div",{staticClass:"col-md-2"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Créer")])])])])])])}]},o=s("VU/8")(r,i,!1,function(t){s("znag")},"data-v-dd39106c",null);a.default=o.exports},znag:function(t,a){}});
//# sourceMappingURL=2.f6fafe1fb5ed9ea37b13.js.map