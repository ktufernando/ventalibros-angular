(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/JVv":function(t,n,l){"use strict";l("ou5U");var i=l("J2pT");l.d(n,"b",function(){return i.a});var e=l("uqYu");l.d(n,"a",function(){return e.h}),l("OPhZ")},AqcY:function(t,n,l){"use strict";var i=l("LoAr"),e=l("WT9V"),u=function(){function t(){this.favorite=new i.m,this.unFavorite=new i.m,this.navigateToArticle=new i.m}return t.prototype.toggleFavorite=function(t){t.favorited?this.unFavorite.emit(t.slug):this.favorite.emit(t.slug)},t}(),r=i.nb({encapsulation:0,styles:[[""]],data:{}});function a(t){return i.Hb(0,[(t()(),i.pb(0,0,null,null,1,"li",[["class","tag-default tag-pill tag-outline"]],null,null,null,null,null)),(t()(),i.Fb(1,null,[" "," "]))],null,function(t,n){t(n,1,0,n.context.$implicit)})}function o(t){return i.Hb(2,[i.zb(0,e.e,[i.u]),(t()(),i.pb(1,0,null,null,25,"div",[["class","article-preview"]],null,null,null,null,null)),(t()(),i.pb(2,0,null,null,14,"div",[["class","article-meta"]],null,null,null,null,null)),(t()(),i.pb(3,0,null,null,1,"a",[],null,null,null,null,null)),(t()(),i.pb(4,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(t()(),i.pb(5,0,null,null,5,"div",[["class","info"]],null,null,null,null,null)),(t()(),i.pb(6,0,null,null,1,"span",[["class","author"]],null,null,null,null,null)),(t()(),i.Fb(7,null,[" "," "])),(t()(),i.pb(8,0,null,null,2,"span",[["class","date"]],null,null,null,null,null)),(t()(),i.Fb(9,null,[" "," "])),i.Bb(10,2),(t()(),i.pb(11,0,null,null,5,"button",[["class","btn btn-sm pull-xs-right"]],null,[[null,"click"]],function(t,n,l){var i=!0,e=t.component;return"click"===n&&(i=!1!==e.toggleFavorite(e.article)&&i),i},null,null)),i.ob(12,278528,null,0,e.j,[i.s,i.t,i.k,i.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Ab(13,{"btn-outline-primary":0,"btn-primary":1}),(t()(),i.pb(14,0,null,null,0,"i",[["class","ion-heart"]],null,null,null,null,null)),(t()(),i.pb(15,0,null,null,1,"div",[["class","info"]],null,null,null,null,null)),(t()(),i.Fb(16,null,["",""])),(t()(),i.pb(17,0,null,null,9,"a",[["class","preview-link"]],null,[[null,"click"]],function(t,n,l){var i=!0,e=t.component;return"click"===n&&(i=!1!==e.navigateToArticle.emit(e.article.slug)&&i),i},null,null)),(t()(),i.pb(18,0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),i.Fb(19,null,["",""])),(t()(),i.pb(20,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),i.Fb(21,null,["",""])),(t()(),i.pb(22,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),i.Fb(-1,null,["Ver m\xe1s..."])),(t()(),i.pb(24,0,null,null,2,"ul",[["class","tag-list"]],null,null,null,null,null)),(t()(),i.gb(16777216,null,null,1,null,a)),i.ob(26,278528,null,0,e.k,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){var l=n.component,i=t(n,13,0,!l.article.favorited,l.article.favorited);t(n,12,0,"btn btn-sm pull-xs-right",i),t(n,26,0,l.article.tagList)},function(t,n){var l=n.component;t(n,4,0,l.article.author.image),t(n,7,0,l.article.author.name);var e=i.Gb(n,9,0,t(n,10,0,i.xb(n,0),l.article.createdAt,"longDate"));t(n,9,0,e),t(n,16,0,l.article.favoritesCount),t(n,19,0,l.article.title),t(n,21,0,l.article.description)})}var c=function(){return function(){this.setPage=new i.m}}(),s=i.nb({encapsulation:0,styles:[[".page-link[_ngcontent-%COMP%]{cursor:pointer}"]],data:{}});function f(t){return i.Hb(0,[(t()(),i.pb(0,0,null,null,4,"li",[["class","page-item"]],null,[[null,"click"]],function(t,n,l){var i=!0;return"click"===n&&(i=!1!==t.component.setPage.emit(t.context.$implicit)&&i),i},null,null)),i.ob(1,278528,null,0,e.j,[i.s,i.t,i.k,i.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Ab(2,{active:0}),(t()(),i.pb(3,0,null,null,1,"a",[["class","page-link"]],null,null,null,null,null)),(t()(),i.Fb(4,null,["",""]))],function(t,n){var l=t(n,2,0,n.context.$implicit===n.component.currentPage);t(n,1,0,"page-item",l)},function(t,n){t(n,4,0,n.context.$implicit)})}function p(t){return i.Hb(2,[(t()(),i.pb(0,0,null,null,2,"ul",[["class","pagination"]],null,null,null,null,null)),(t()(),i.gb(16777216,null,null,1,null,f)),i.ob(2,278528,null,0,e.k,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){t(n,2,0,n.component.totalPages)},null)}l("XIOX"),l("OPhZ"),l.d(n,"a",function(){return b}),l.d(n,"b",function(){return g});var b=i.nb({encapsulation:0,styles:[[".app-article-preview[_ngcontent-%COMP%]{margin-top:1.5em}"]],data:{}});function d(t){return i.Hb(0,[(t()(),i.pb(0,0,null,null,2,"app-article-list-item",[],[[8,"hidden",0]],[[null,"navigateToArticle"],[null,"unFavorite"],[null,"favorite"]],function(t,n,l){var i=!0,e=t.component;return"navigateToArticle"===n&&(i=!1!==e.navigateToArticle(l)&&i),"unFavorite"===n&&(i=!1!==e.unFavorite(l)&&i),"favorite"===n&&(i=!1!==e.favorite(l)&&i),i},o,r)),i.ob(1,49152,null,0,u,[],{article:[0,"article"]},{favorite:"favorite",unFavorite:"unFavorite",navigateToArticle:"navigateToArticle"}),i.zb(131072,e.b,[i.h])],function(t,n){t(n,1,0,n.context.$implicit)},function(t,n){var l=n.component;t(n,0,0,i.Gb(n,0,0,i.xb(n,2).transform(l.isLoading$)))})}function g(t){return i.Hb(2,[(t()(),i.pb(0,0,null,null,2,"div",[["class","app-article-preview"]],[[8,"hidden",0]],null,null,null,null)),i.zb(131072,e.b,[i.h]),(t()(),i.Fb(-1,null,[" Buscando libros...\n"])),(t()(),i.pb(3,0,null,null,3,"div",[["class","app-article-preview"]],[[8,"hidden",0]],null,null,null,null)),i.zb(131072,e.b,[i.h]),i.zb(131072,e.b,[i.h]),(t()(),i.Fb(-1,null,[" No hay libros aqu\xed... todav\xeda.\n"])),(t()(),i.gb(16777216,null,null,2,null,d)),i.ob(8,278528,null,0,e.k,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null),i.zb(131072,e.b,[i.h]),(t()(),i.pb(10,0,null,null,5,"app-pager",[],[[8,"hidden",0]],[[null,"setPage"]],function(t,n,l){var i=!0;return"setPage"===n&&(i=!1!==t.component.setPage(l)&&i),i},p,s)),i.ob(11,49152,null,0,c,[],{currentPage:[0,"currentPage"],totalPages:[1,"totalPages"]},{setPage:"setPage"}),i.zb(131072,e.b,[i.h]),i.zb(131072,e.b,[i.h]),i.zb(131072,e.b,[i.h]),i.zb(131072,e.b,[i.h])],function(t,n){var l=n.component;t(n,8,0,i.Gb(n,8,0,i.xb(n,9).transform(l.articles$))),t(n,11,0,i.Gb(n,11,0,i.xb(n,12).transform(l.listConfig$)).currentPage,i.Gb(n,11,1,i.xb(n,13).transform(l.totalPages$)))},function(t,n){var l,e=n.component;t(n,0,0,!i.Gb(n,0,0,i.xb(n,1).transform(e.isLoading$))),t(n,3,0,i.Gb(n,3,0,i.xb(n,4).transform(e.isLoading$))||i.Gb(n,3,0,i.xb(n,5).transform(e.articles$)).length>0),t(n,10,0,(null==(l=i.Gb(n,10,0,i.xb(n,14).transform(e.totalPages$)))?null:l.length)<=1||i.Gb(n,10,0,i.xb(n,15).transform(e.isLoading$)))})}},B0IM:function(t,n,l){"use strict";l.d(n,"a",function(){return f});var i=l("D57K"),e=l("D3xR"),u=l("pN2L"),r=l("Jg5f"),a=l("eb+u"),o=l("HswR"),c=l("IMYO"),s=l("uqYu"),f=function(){function t(t,n,l,i){var e=this;this.actions=t,this.articleListService=n,this.actionsService=l,this.facade=i,this.setListPage=this.actions.ofType(s.a.SET_LIST_PAGE).pipe(Object(r.a)(function(){return{type:s.a.LOAD_ARTICLES}})),this.setListTag=this.actions.ofType(s.a.SET_LIST_CONFIG).pipe(Object(r.a)(function(){return new s.e})),this.loadArticles=this.actions.ofType(s.a.LOAD_ARTICLES).pipe(Object(a.a)(this.facade.listConfig$),Object(o.a)(function(t){return e.articleListService.query(t[1]).pipe(Object(r.a)(function(t){return new s.g({articles:t.articles,articlesCount:t.articlesCount})}),Object(c.a)(function(t){return Object(u.a)(new s.f(t))}))})),this.favorite=this.actions.ofType(s.a.FAVORITE).pipe(Object(r.a)(function(t){return t.payload}),Object(o.a)(function(t){return e.actionsService.favorite(t).pipe(Object(r.a)(function(t){return new s.d(t)}),Object(c.a)(function(t){return Object(u.a)(new s.c(t))}))})),this.unFavorite=this.actions.ofType(s.a.UNFAVORITE).pipe(Object(r.a)(function(t){return t.payload}),Object(o.a)(function(t){return e.actionsService.unfavorite(t).pipe(Object(r.a)(function(t){return new s.l(t)}),Object(c.a)(function(t){return Object(u.a)(new s.k(t))}))}))}return i.b([Object(e.b)(),i.d("design:type",Object)],t.prototype,"setListPage",void 0),i.b([Object(e.b)(),i.d("design:type",Object)],t.prototype,"setListTag",void 0),i.b([Object(e.b)(),i.d("design:type",Object)],t.prototype,"loadArticles",void 0),i.b([Object(e.b)(),i.d("design:type",Object)],t.prototype,"favorite",void 0),i.b([Object(e.b)(),i.d("design:type",Object)],t.prototype,"unFavorite",void 0),t}()},Hep9:function(t,n,l){"use strict";l.d(n,"a",function(){return e}),l("Ecwh");var i=l("Jg5f"),e=function(){function t(t){this.apiService=t}return t.prototype.followUser=function(t){return this.apiService.post("/profiles/"+t+"/follow").pipe(Object(i.a)(function(t){return t.profile}))},t.prototype.unfollowUser=function(t){return this.apiService.delete("/profiles/"+t+"/follow").pipe(Object(i.a)(function(t){return t.profile}))},t.prototype.favorite=function(t){return this.apiService.post("/articles/"+t+"/favorite").pipe(Object(i.a)(function(t){return t.article}))},t.prototype.unfavorite=function(t){return this.apiService.delete("/articles/"+t+"/favorite").pipe(Object(i.a)(function(t){return t.article}))},t}()},J2pT:function(t,n,l){"use strict";l.d(n,"a",function(){return u}),l.d(n,"b",function(){return r});var i=l("D57K"),e=l("uqYu"),u={listConfig:{type:"ALL",currentPage:1,filters:{limit:10}},articles:{entities:[],articlesCount:0,loaded:!1,loading:!1}};function r(t,n){switch(n.type){case e.a.SET_LIST_PAGE:var l=i.a({},t.listConfig.filters,{offset:t.listConfig.filters.limit*(n.payload-1)}),u=i.a({},t.listConfig,{currentPage:n.payload,filters:l});return i.a({},t,{listConfig:u});case e.a.SET_LIST_CONFIG:return i.a({},t,{listConfig:n.payload});case e.a.LOAD_ARTICLES:var r=i.a({},t.articles,{loading:!0});return i.a({},t,{articles:r});case e.a.LOAD_ARTICLES_SUCCESS:return r=i.a({},t.articles,{entities:n.payload.articles,articlesCount:n.payload.articlesCount,loading:!1,loaded:!0}),i.a({},t,{articles:r});case e.a.LOAD_ARTICLES_FAIL:return r=i.a({},t.articles,{entities:[],articlesCount:0,loading:!1,loaded:!0}),i.a({},t,{articles:r});case e.a.FAVORITE_SUCCESS:case e.a.UNFAVORITE_SUCCESS:return i.a({},t,{articles:a(t.articles,n.payload)});default:return t}}function a(t,n){var l=t.entities.findIndex(function(t){return t.slug===n.slug}),e=t.entities.slice(0,l).concat([Object.assign({},t.entities[l],n)],t.entities.slice(l+1));return i.a({},t,{entities:e,loading:!1,loaded:!0})}},OPhZ:function(t,n,l){"use strict";var i=l("GovN"),e=Object(i.B)("articleList"),u={getListConfig:Object(i.D)(e,function(t){return t.listConfig}),getArticles:Object(i.D)(e,function(t){return t.articles.entities}),getArticlesCount:Object(i.D)(e,function(t){return t.articles.articlesCount}),isLoading:Object(i.D)(e,function(t){return t.articles.loading})},r=l("uqYu"),a=l("eb+u"),o=l("Jg5f");l.d(n,"a",function(){return c});var c=function(){function t(t){this.store=t,this.articles$=this.store.select(u.getArticles),this.listConfig$=this.store.select(u.getListConfig),this.isLoading$=this.store.select(u.isLoading),this.articlesCount$=this.store.select(u.getArticlesCount),this.totalPages$=this.articlesCount$.pipe(Object(a.a)(this.listConfig$),Object(o.a)(function(t){return Array.from(new Array(Math.ceil(t[0]/t[1].filters.limit)),function(t,n){return n+1})}))}return t.prototype.favorite=function(t){this.store.dispatch(new r.b(t))},t.prototype.unFavorite=function(t){this.store.dispatch(new r.j(t))},t.prototype.navigateToArticle=function(t){this.store.dispatch({type:"[router] Go",payload:{path:["/article",t]}})},t.prototype.setPage=function(t){this.store.dispatch(new r.i(t))},t.prototype.setListConfig=function(t){this.store.dispatch(new r.h(t))},t}()},XIOX:function(t,n,l){"use strict";l.d(n,"a",function(){return i}),l("OPhZ");var i=function(){function t(t){this.facade=t}return t.prototype.ngOnInit=function(){this.totalPages$=this.facade.totalPages$,this.articles$=this.facade.articles$,this.listConfig$=this.facade.listConfig$,this.isLoading$=this.facade.isLoading$},t.prototype.favorite=function(t){this.facade.favorite(t)},t.prototype.unFavorite=function(t){this.facade.unFavorite(t)},t.prototype.navigateToArticle=function(t){this.facade.navigateToArticle(t)},t.prototype.setPage=function(t){this.facade.setPage(t)},t}()},b2y2:function(t,n,l){"use strict";l.d(n,"a",function(){return i});var i=function(){return function(){}}()},ou5U:function(t,n,l){"use strict";l.d(n,"a",function(){return i});var i=function(){return function(){}}()},uqYu:function(t,n,l){"use strict";var i;l.d(n,"a",function(){return i}),l.d(n,"i",function(){return e}),l.d(n,"h",function(){return u}),l.d(n,"e",function(){return r}),l.d(n,"g",function(){return a}),l.d(n,"f",function(){return o}),l.d(n,"b",function(){return c}),l.d(n,"d",function(){return s}),l.d(n,"c",function(){return f}),l.d(n,"j",function(){return p}),l.d(n,"l",function(){return b}),l.d(n,"k",function(){return d}),function(t){t.SET_LIST_PAGE="[article-list] SET_LIST_PAGE",t.SET_LIST_CONFIG="[article-list] SET_LIST_CONFIG",t.LOAD_ARTICLES="[article-list] LOAD_ARTICLES",t.LOAD_ARTICLES_SUCCESS="[article-list] LOAD_ARTICLES_SUCCESS",t.LOAD_ARTICLES_FAIL="[article-list] LOAD_ARTICLES_FAIL",t.FAVORITE="[article-list] FAVORITE",t.FAVORITE_SUCCESS="[article-list] FAVORITE_SUCCESS",t.FAVORITE_FAIL="[article-list] FAVORITE_FAIL",t.UNFAVORITE="[article-list] UNFAVORITE",t.UNFAVORITE_SUCCESS="[article-list] UNFAVORITE_SUCCESS",t.UNFAVORITE_FAIL="[article-list] UNFAVORITE_FAIL"}(i||(i={}));var e=function(){return function(t){this.payload=t,this.type="[article-list] SET_LIST_PAGE"}}(),u=function(){return function(t){this.payload=t,this.type="[article-list] SET_LIST_CONFIG"}}(),r=function(){return function(){this.type="[article-list] LOAD_ARTICLES"}}(),a=function(){return function(t){this.payload=t,this.type="[article-list] LOAD_ARTICLES_SUCCESS"}}(),o=function(){return function(t){this.payload=t,this.type="[article-list] LOAD_ARTICLES_FAIL"}}(),c=function(){return function(t){this.payload=t,this.type="[article-list] FAVORITE"}}(),s=function(){return function(t){this.payload=t,this.type="[article-list] FAVORITE_SUCCESS"}}(),f=function(){return function(t){this.payload=t,this.type="[article-list] FAVORITE_FAIL"}}(),p=function(){return function(t){this.payload=t,this.type="[article-list] UNFAVORITE"}}(),b=function(){return function(t){this.payload=t,this.type="[article-list] UNFAVORITE_SUCCESS"}}(),d=function(){return function(t){this.payload=t,this.type="[article-list] UNFAVORITE_FAIL"}}()},zHMd:function(t,n,l){"use strict";l.d(n,"a",function(){return e}),l("Ecwh");var i=l("GiBk"),e=function(){function t(t){this.apiService=t}return t.prototype.query=function(t){return this.apiService.get("/articles"+("FEED"===t.type?"/feed":""),this.toHttpParams(t.filters))},t.prototype.toHttpParams=function(t){return Object.getOwnPropertyNames(t).reduce(function(n,l){return n.set(l,t[l])},new i.i)},t}()}}]);