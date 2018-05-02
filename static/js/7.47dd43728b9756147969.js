webpackJsonp([7],{"/Z1Z":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"consulter"}},[s("nav",{staticClass:"navbar navbar-expand-md navbar-light"},[s("span",{staticClass:"navbar-brand mb-0 h1"},[this._v("Gestion des fournitures scolaires")]),this._v(" "),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),this._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"accueil"}},[this._v("Accueil")])]),this._v(" "),s("li",{staticClass:"nav-item dropdown active"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n                        Consulter\n                    ")]),this._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"inv-ele"}},[this._v("Inventaire d'un élève")]),this._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"inv-ens"}},[this._v("Inventaire d'un enseignant")])])]),this._v(" "),s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n                        Distribuer\n                    ")]),this._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"distr-cla"}},[this._v("A une classe")]),this._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"distr-ele"}},[this._v("A un élève")]),this._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"distr-ens"}},[this._v("A un enseignant")])])]),this._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"gerer-fourniture"}},[this._v("Gérer stock de fourniture")])]),this._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"gerer-categorie"}},[this._v("Gérer les catégories")])])]),this._v(" "),s("p",{staticClass:"utilisateur"},[this._v("Nom de l'utilisateur connecté")]),this._v(" "),s("a",{staticClass:"btn btn-danger",attrs:{href:"form_conn",role:"button"}},[this._v("Déconnexion")])])]),this._v(" "),s("div",{staticClass:"container-fluid col-md-11"},[s("h1",[this._v("Inventaire élève")]),this._v(" "),s("div",{staticClass:"row col-lg-12 bottom-buffer justify-content-center"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group row"},[s("select",{staticClass:"form-control col-md max-500"},[s("option",[this._v("-- Sélectionner une classe --")]),this._v(" "),s("option",[this._v("INF1a")]),this._v(" "),s("option",[this._v("INF1b")]),this._v(" "),s("option",[this._v("INF2b")]),this._v(" "),s("option",[this._v("INF3a")]),this._v(" "),s("option",[this._v("INF3b")])]),this._v(" "),s("select",{staticClass:"form-control col-md max-500"},[s("option",[this._v("-- Sélectionner un élève --")]),this._v(" "),s("option",[this._v("A...")]),this._v(" "),s("option",[this._v("A..")]),this._v(" "),s("option",[this._v("A.")]),this._v(" "),s("option",[this._v("B...")]),this._v(" "),s("option",[this._v("B..")]),this._v(" "),s("option",[this._v("C...")]),this._v(" "),s("option",[this._v("C..")])])])]),this._v(" "),s("div",{staticClass:"col-md-6 bottom-buffer d-flex justify-content-md-center"},[s("div",{staticClass:"input-group max-500"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Rechercher un élève..."}}),this._v(" "),s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn",attrs:{type:"submit",id:"search-btn"}},[s("i",{staticClass:"fa fa-search"})])])])])]),this._v(" "),s("h4",[this._v("Nom de l'élève")]),this._v(" "),s("label",{attrs:{id:"afficherFacture"}},[this._v("Seulement afficher les fournitures non facturées")]),this._v(" "),s("input",{attrs:{type:"checkbox",checked:"",name:"afficherFacture"}}),this._v(" "),s("div",{staticClass:"table-responsive justify-content-md-center"},[s("table",{staticClass:"table table-striped"},[s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{attrs:{scope:"col"}},[this._v("Désignation "),s("i",{staticClass:"fa fa-chevron-down"})]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Catégorie "),s("i",{staticClass:"fa fa-chevron-down"})]),this._v(" "),s("th",{attrs:{scope:"col",width:"170"}},[this._v("Date de reçu "),s("i",{staticClass:"fa fa-chevron-down"})]),this._v(" "),s("th",{attrs:{scope:"col",width:"140"}},[this._v("Quantité")]),this._v(" "),s("th",{attrs:{scope:"col",width:"200"}},[this._v("Prix")]),this._v(" "),s("th",{attrs:{scope:"col",width:"200"}},[this._v("Montant")]),this._v(" "),s("th",{attrs:{scope:"col",width:"220"}},[this._v("Annuler la distribution")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("\n                            Fourniture 1 \n                        ")]),this._v(" "),s("td",[this._v("\n                            Catégorie 1, catégorie 2, ...\n                        ")]),this._v(" "),s("td",[this._v("\n                            25 04 2018\n                        ")]),this._v(" "),s("td",[this._v("\n                            1\n                        ")]),this._v(" "),s("td",[s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{type:"number",name:"prix",id:"prix",value:"35",readonly:""}}),this._v(" "),s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[this._v("CHF")])])])]),this._v(" "),s("td",[this._v("\n                            =qte*prix\n                        ")]),this._v(" "),s("td",[s("button",{staticClass:"btn btn-outline-danger"},[this._v("\n                                Annuler "),s("i",{staticClass:"fa fa-times"})])])]),this._v(" "),s("tr",[s("td",[this._v("\n                            Fourniture 2\n                        ")]),this._v(" "),s("td",[this._v("\n                            Catégorie 1, catégorie 2, ...\n                        ")]),this._v(" "),s("td",[this._v("\n                            25 04 2018\n                        ")]),this._v(" "),s("td",[this._v("\n                            1\n                        ")]),this._v(" "),s("td",[s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{type:"number",name:"prix",id:"prix",value:"5"}}),this._v(" "),s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[this._v("CHF")])])])]),this._v(" "),s("td",[this._v("\n                            =qte*prix\n                        ")]),this._v(" "),s("td",[s("button",{staticClass:"btn btn-outline-danger"},[this._v("\n                                Annuler "),s("i",{staticClass:"fa fa-times"})])])]),this._v(" "),s("tr",[s("td",[this._v("\n                            Fourniture 3\n                        ")]),this._v(" "),s("td",[this._v("\n                            Catégorie 1, catégorie 2, ...\n                        ")]),this._v(" "),s("td",[this._v("\n                            25 04 2018\n                        ")]),this._v(" "),s("td",[this._v("\n                            1\n                        ")]),this._v(" "),s("td",[s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{type:"number",name:"prix",id:"prix",value:"24"}}),this._v(" "),s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[this._v("CHF")])])])]),this._v(" "),s("td",[this._v("\n                            =qte*prix\n                        ")]),this._v(" "),s("td",[s("button",{staticClass:"btn btn-outline-danger"},[this._v("\n                                Annuler "),s("i",{staticClass:"fa fa-times"})])])]),this._v(" "),s("tr",{staticClass:"table-active"},[s("td",{staticClass:"tdTotal",attrs:{colspan:"5"}},[this._v("\n                            Total :\n                        ")]),this._v(" "),s("td",{attrs:{colspan:"2"}},[this._v("=somme montant")])])])])])])])}]},n=i("VU/8")({name:"consulter"},a,!1,function(t){i("ktuM")},"data-v-49d4d138",null);s.default=n.exports},ktuM:function(t,s){}});
//# sourceMappingURL=7.47dd43728b9756147969.js.map