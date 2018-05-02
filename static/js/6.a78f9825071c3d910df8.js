webpackJsonp([6],{GtSq:function(t,s){},JaTV:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("mtWM"),e=a.n(i),r={name:"gererFourniture",data:function(){return{fournitures:[],errors:[]}},created:function(){var t=this;e.a.get("http://localhost:3000/fourniture").then(function(s){t.fournitures=s.data}).catch(function(s){t.errors.push(s)})}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"gererFourniture"}},[t._m(0),t._v(" "),a("div",{staticClass:"container-fluid col-md-8"},[a("h1",[t._v("Gestion des fournitures")]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-striped"},[t._m(2),t._v(" "),a("tbody",t._l(t.fournitures,function(s){return a("tr",{key:s.index},[a("td",{attrs:{scope:"row",id:"col_fourniture"}},[t._v("\n                            "+t._s(s.nom)+"\n                        ")]),t._v(" "),a("td",[t._v("\n                            "+t._s(s.prix)+"\n                        ")]),t._v(" "),t._m(3,!0),t._v(" "),a("td",[t._v("\n                            catégorie 1, catégorie 2, ...\n                        ")]),t._v(" "),t._m(4,!0),t._v(" "),t._m(5,!0)])}))])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("nav",{staticClass:"navbar navbar-expand-md navbar-light"},[s("span",{staticClass:"navbar-brand mb-0 h1"},[this._v("Gestion des fournitures scolaires")]),this._v(" "),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),this._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"accueil"}},[this._v("Accueil")])]),this._v(" "),s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n                        Consulter\n                    ")]),this._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"inv-ele"}},[this._v("Inventaire d'un élève")]),this._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"inv-ens"}},[this._v("Inventaire d'un enseignant")])])]),this._v(" "),s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n                        Distribuer\n                    ")]),this._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"distr-cla"}},[this._v("A une classe")]),this._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"distr-ele"}},[this._v("A un élève")]),this._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"distr-ens"}},[this._v("A un enseignant")])])]),this._v(" "),s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:"gerer-fourniture"}},[this._v("Gérer stock de fourniture")])]),this._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"gerer-categorie"}},[this._v("Gérer les catégories")])])]),this._v(" "),s("p",{staticClass:"utilisateur"},[this._v("Nom de l'utilisateur connecté")]),this._v(" "),s("a",{staticClass:"btn btn-danger",attrs:{href:"form_conn",role:"button"}},[this._v("Déconnexion")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row justify-content-between bottom-buffer"},[s("div",{staticClass:"col-md-6 bottom-buffer"},[s("div",{staticClass:"row justify-content-md-start"},[s("div",{staticClass:"input-group search"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Rechercher une fourniture..."}}),this._v(" "),s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn",attrs:{type:"submit",id:"search-btn"}},[s("i",{staticClass:"fa fa-search"})])])])])]),this._v(" "),s("div",{staticClass:"col-md-5 justify-content-end"},[s("div",{staticClass:"d-flex bottom-buffer justify-content-end"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"nouvelle-fourniture"}},[this._v("Créer une nouvelle fourniture")])]),this._v(" "),s("div",{staticClass:"d-flex justify-content-end"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[this._v("Récupérer une fourniture supprimée")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{attrs:{scope:"col"}},[this._v("\n                            Désignation\n                            "),this._v(" "),s("i",{staticClass:"fa fa-chevron-down"})]),this._v(" "),s("th",{attrs:{scope:"col",width:"200"}},[this._v("Prix (CHF) "),s("i",{staticClass:"fa fa-chevron-down"})]),this._v(" "),s("th",{attrs:{scope:"col",width:"200"}},[this._v("A saisir")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Catégorie "),s("i",{staticClass:"fa fa-chevron-down"})]),this._v(" "),s("th",{attrs:{scope:"col",width:"150"}},[this._v("Modifier")]),this._v(" "),s("th",{attrs:{scope:"col",width:"150"}},[this._v("Supprimer")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("input",{staticClass:"form-check-input position-static",attrs:{type:"checkbox",disabled:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("a",{staticClass:"btn btn-outline-primary",attrs:{href:"modifier-fourniture"}},[this._v("\n                                Modifier "),s("i",{staticClass:"fa fa-pencil"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("button",{staticClass:"btn btn-outline-danger"},[this._v("\n                                Supprimer "),s("i",{staticClass:"fa fa-trash-o"})])])}]},o=a("VU/8")(r,n,!1,function(t){a("GtSq")},"data-v-80887a8e",null);s.default=o.exports}});
//# sourceMappingURL=6.a78f9825071c3d910df8.js.map