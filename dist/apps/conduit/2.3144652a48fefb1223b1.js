(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/JVv":function(t,n,i){"use strict";i("ou5U");var l=i("J2pT");i.d(n,"b",function(){return l.a});var e=i("uqYu");i.d(n,"a",function(){return e.h}),i("OPhZ")},AqcY:function(t,n,i){"use strict";var l=i("LoAr"),e=i("WT9V"),u=(i("wxdu"),function(){function t(t){this.auhtFacade=t,this.favorite=new l.m,this.unFavorite=new l.m,this.navigateToArticle=new l.m}return t.prototype.ngOnInit=function(){this.user$=this.auhtFacade.user$},t.prototype.toggleFavorite=function(t){t.favorited?this.unFavorite.emit(t.slug):this.favorite.emit(t.slug)},t}()),r=i("pOUy"),a=l.nb({encapsulation:0,styles:[[""]],data:{}});function o(t){return l.Hb(0,[(t()(),l.pb(0,0,null,null,1,"li",[["class","tag-default tag-pill tag-outline"]],null,null,null,null,null)),(t()(),l.Fb(1,null,[" "," "]))],null,function(t,n){t(n,1,0,n.context.$implicit)})}function c(t){return l.Hb(2,[l.zb(0,e.e,[l.u]),(t()(),l.pb(1,0,null,null,25,"div",[["class","article-preview"]],null,null,null,null,null)),(t()(),l.pb(2,0,null,null,14,"div",[["class","article-meta"]],null,null,null,null,null)),(t()(),l.pb(3,0,null,null,1,"a",[],null,null,null,null,null)),(t()(),l.pb(4,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(t()(),l.pb(5,0,null,null,5,"div",[["class","info"]],null,null,null,null,null)),(t()(),l.pb(6,0,null,null,1,"span",[["class","author"]],null,null,null,null,null)),(t()(),l.Fb(7,null,[" "," "])),(t()(),l.pb(8,0,null,null,2,"span",[["class","date"]],null,null,null,null,null)),(t()(),l.Fb(9,null,[" "," "])),l.Bb(10,2),(t()(),l.pb(11,0,null,null,5,"button",[["class","btn btn-sm pull-xs-right"]],null,[[null,"click"]],function(t,n,i){var l=!0,e=t.component;return"click"===n&&(l=!1!==e.toggleFavorite(e.article)&&l),l},null,null)),l.ob(12,278528,null,0,e.j,[l.s,l.t,l.k,l.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Ab(13,{"btn-outline-primary":0,"btn-primary":1}),(t()(),l.pb(14,0,null,null,0,"i",[["class","ion-heart"]],null,null,null,null,null)),(t()(),l.pb(15,0,null,null,1,"div",[["class","info"]],null,null,null,null,null)),(t()(),l.Fb(16,null,["",""])),(t()(),l.pb(17,0,null,null,9,"a",[["class","preview-link"]],null,[[null,"click"]],function(t,n,i){var l=!0,e=t.component;return"click"===n&&(l=!1!==e.navigateToArticle.emit(e.article.slug)&&l),l},null,null)),(t()(),l.pb(18,0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),l.Fb(19,null,["",""])),(t()(),l.pb(20,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),l.Fb(21,null,["",""])),(t()(),l.pb(22,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),l.Fb(-1,null,["Ver m\xe1s..."])),(t()(),l.pb(24,0,null,null,2,"ul",[["class","tag-list"]],null,null,null,null,null)),(t()(),l.gb(16777216,null,null,1,null,o)),l.ob(26,278528,null,0,e.k,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){var i=n.component,l=t(n,13,0,!i.article.favorited,i.article.favorited);t(n,12,0,"btn btn-sm pull-xs-right",l),t(n,26,0,i.article.tagList)},function(t,n){var i=n.component;t(n,4,0,i.article.author.image),t(n,7,0,i.article.author.name);var e=l.Gb(n,9,0,t(n,10,0,l.xb(n,0),i.article.createdAt,"longDate"));t(n,9,0,e),t(n,16,0,i.article.favoritesCount),t(n,19,0,i.article.title),t(n,21,0,i.article.description)})}var s=function(){return function(){this.setPage=new l.m}}(),f=l.nb({encapsulation:0,styles:[[".page-link[_ngcontent-%COMP%]{cursor:pointer}"]],data:{}});function p(t){return l.Hb(0,[(t()(),l.pb(0,0,null,null,4,"li",[["class","page-item"]],null,[[null,"click"]],function(t,n,i){var l=!0;return"click"===n&&(l=!1!==t.component.setPage.emit(t.context.$implicit)&&l),l},null,null)),l.ob(1,278528,null,0,e.j,[l.s,l.t,l.k,l.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Ab(2,{active:0}),(t()(),l.pb(3,0,null,null,1,"a",[["class","page-link"]],null,null,null,null,null)),(t()(),l.Fb(4,null,["",""]))],function(t,n){var i=t(n,2,0,n.context.$implicit===n.component.currentPage);t(n,1,0,"page-item",i)},function(t,n){t(n,4,0,n.context.$implicit)})}function b(t){return l.Hb(2,[(t()(),l.pb(0,0,null,null,2,"ul",[["class","pagination"]],null,null,null,null,null)),(t()(),l.gb(16777216,null,null,1,null,p)),l.ob(2,278528,null,0,e.k,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){t(n,2,0,n.component.totalPages)},null)}i("XIOX"),i("OPhZ"),i.d(n,"a",function(){return d}),i.d(n,"b",function(){return h});var d=l.nb({encapsulation:0,styles:[[".app-article-preview[_ngcontent-%COMP%]{margin-top:1.5em}"]],data:{}});function g(t){return l.Hb(0,[(t()(),l.pb(0,0,null,null,2,"app-article-list-item",[],[[8,"hidden",0]],[[null,"navigateToArticle"],[null,"unFavorite"],[null,"favorite"]],function(t,n,i){var l=!0,e=t.component;return"navigateToArticle"===n&&(l=!1!==e.navigateToArticle(i)&&l),"unFavorite"===n&&(l=!1!==e.unFavorite(i)&&l),"favorite"===n&&(l=!1!==e.favorite(i)&&l),l},c,a)),l.ob(1,114688,null,0,u,[r.a],{article:[0,"article"]},{favorite:"favorite",unFavorite:"unFavorite",navigateToArticle:"navigateToArticle"}),l.zb(131072,e.b,[l.h])],function(t,n){t(n,1,0,n.context.$implicit)},function(t,n){var i=n.component;t(n,0,0,l.Gb(n,0,0,l.xb(n,2).transform(i.isLoading$)))})}function h(t){return l.Hb(2,[(t()(),l.pb(0,0,null,null,2,"div",[["class","app-article-preview"]],[[8,"hidden",0]],null,null,null,null)),l.zb(131072,e.b,[l.h]),(t()(),l.Fb(-1,null,[" Buscando libros...\n"])),(t()(),l.pb(3,0,null,null,3,"div",[["class","app-article-preview"]],[[8,"hidden",0]],null,null,null,null)),l.zb(131072,e.b,[l.h]),l.zb(131072,e.b,[l.h]),(t()(),l.Fb(-1,null,[" No hay libros aqu\xed... todav\xeda.\n"])),(t()(),l.gb(16777216,null,null,2,null,g)),l.ob(8,278528,null,0,e.k,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null),l.zb(131072,e.b,[l.h]),(t()(),l.pb(10,0,null,null,5,"app-pager",[],[[8,"hidden",0]],[[null,"setPage"]],function(t,n,i){var l=!0;return"setPage"===n&&(l=!1!==t.component.setPage(i)&&l),l},b,f)),l.ob(11,49152,null,0,s,[],{currentPage:[0,"currentPage"],totalPages:[1,"totalPages"]},{setPage:"setPage"}),l.zb(131072,e.b,[l.h]),l.zb(131072,e.b,[l.h]),l.zb(131072,e.b,[l.h]),l.zb(131072,e.b,[l.h])],function(t,n){var i=n.component;t(n,8,0,l.Gb(n,8,0,l.xb(n,9).transform(i.articles$))),t(n,11,0,l.Gb(n,11,0,l.xb(n,12).transform(i.listConfig$)).currentPage,l.Gb(n,11,1,l.xb(n,13).transform(i.totalPages$)))},function(t,n){var i,e=n.component;t(n,0,0,!l.Gb(n,0,0,l.xb(n,1).transform(e.isLoading$))),t(n,3,0,l.Gb(n,3,0,l.xb(n,4).transform(e.isLoading$))||l.Gb(n,3,0,l.xb(n,5).transform(e.articles$)).length>0),t(n,10,0,(null==(i=l.Gb(n,10,0,l.xb(n,14).transform(e.totalPages$)))?null:i.length)<=1||l.Gb(n,10,0,l.xb(n,15).transform(e.isLoading$)))})}},B0IM:function(t,n,i){"use strict";i.d(n,"a",function(){return f});var l=i("D57K"),e=i("D3xR"),u=i("pN2L"),r=i("Jg5f"),a=i("eb+u"),o=i("HswR"),c=i("IMYO"),s=i("uqYu"),f=function(){function t(t,n,i,l){var e=this;this.actions=t,this.articleListService=n,this.actionsService=i,this.facade=l,this.setListPage=this.actions.ofType(s.a.SET_LIST_PAGE).pipe(Object(r.a)(function(){return{type:s.a.LOAD_ARTICLES}})),this.setListTag=this.actions.ofType(s.a.SET_LIST_CONFIG).pipe(Object(r.a)(function(){return new s.e})),this.loadArticles=this.actions.ofType(s.a.LOAD_ARTICLES).pipe(Object(a.a)(this.facade.listConfig$),Object(o.a)(function(t){return e.articleListService.query(t[1]).pipe(Object(r.a)(function(t){return new s.g({articles:t.articles,articlesCount:t.articlesCount})}),Object(c.a)(function(t){return Object(u.a)(new s.f(t))}))})),this.favorite=this.actions.ofType(s.a.FAVORITE).pipe(Object(r.a)(function(t){return t.payload}),Object(o.a)(function(t){return e.actionsService.favorite(t).pipe(Object(r.a)(function(t){return new s.d(t)}),Object(c.a)(function(t){return Object(u.a)(new s.c(t))}))})),this.unFavorite=this.actions.ofType(s.a.UNFAVORITE).pipe(Object(r.a)(function(t){return t.payload}),Object(o.a)(function(t){return e.actionsService.unfavorite(t).pipe(Object(r.a)(function(t){return new s.l(t)}),Object(c.a)(function(t){return Object(u.a)(new s.k(t))}))}))}return l.b([Object(e.b)(),l.d("design:type",Object)],t.prototype,"setListPage",void 0),l.b([Object(e.b)(),l.d("design:type",Object)],t.prototype,"setListTag",void 0),l.b([Object(e.b)(),l.d("design:type",Object)],t.prototype,"loadArticles",void 0),l.b([Object(e.b)(),l.d("design:type",Object)],t.prototype,"favorite",void 0),l.b([Object(e.b)(),l.d("design:type",Object)],t.prototype,"unFavorite",void 0),t}()},Hep9:function(t,n,i){"use strict";i.d(n,"a",function(){return e}),i("Ecwh");var l=i("Jg5f"),e=function(){function t(t){this.apiService=t}return t.prototype.followUser=function(t){return this.apiService.post("/profiles/"+t+"/follow").pipe(Object(l.a)(function(t){return t.profile}))},t.prototype.unfollowUser=function(t){return this.apiService.delete("/profiles/"+t+"/follow").pipe(Object(l.a)(function(t){return t.profile}))},t.prototype.favorite=function(t){return this.apiService.post("/articles/"+t+"/favorite").pipe(Object(l.a)(function(t){return t.article}))},t.prototype.unfavorite=function(t){return this.apiService.delete("/articles/"+t+"/favorite").pipe(Object(l.a)(function(t){return t.article}))},t}()},J2pT:function(t,n,i){"use strict";i.d(n,"a",function(){return u}),i.d(n,"b",function(){return r});var l=i("D57K"),e=i("uqYu"),u={listConfig:{type:"ALL",currentPage:1,filters:{limit:10}},articles:{entities:[],articlesCount:0,loaded:!1,loading:!1}};function r(t,n){switch(n.type){case e.a.SET_LIST_PAGE:var i=l.a({},t.listConfig.filters,{offset:t.listConfig.filters.limit*(n.payload-1)}),u=l.a({},t.listConfig,{currentPage:n.payload,filters:i});return l.a({},t,{listConfig:u});case e.a.SET_LIST_CONFIG:return l.a({},t,{listConfig:n.payload});case e.a.LOAD_ARTICLES:var r=l.a({},t.articles,{loading:!0});return l.a({},t,{articles:r});case e.a.LOAD_ARTICLES_SUCCESS:return r=l.a({},t.articles,{entities:n.payload.articles,articlesCount:n.payload.articlesCount,loading:!1,loaded:!0}),l.a({},t,{articles:r});case e.a.LOAD_ARTICLES_FAIL:return r=l.a({},t.articles,{entities:[],articlesCount:0,loading:!1,loaded:!0}),l.a({},t,{articles:r});case e.a.FAVORITE_SUCCESS:case e.a.UNFAVORITE_SUCCESS:return l.a({},t,{articles:a(t.articles,n.payload)});default:return t}}function a(t,n){var i=t.entities.findIndex(function(t){return t.slug===n.slug}),e=t.entities.slice(0,i).concat([Object.assign({},t.entities[i],n)],t.entities.slice(i+1));return l.a({},t,{entities:e,loading:!1,loaded:!0})}},OPhZ:function(t,n,i){"use strict";var l=i("GovN"),e=Object(l.B)("articleList"),u={getListConfig:Object(l.D)(e,function(t){return t.listConfig}),getArticles:Object(l.D)(e,function(t){return t.articles.entities}),getArticlesCount:Object(l.D)(e,function(t){return t.articles.articlesCount}),isLoading:Object(l.D)(e,function(t){return t.articles.loading})},r=i("uqYu"),a=i("eb+u"),o=i("Jg5f");i.d(n,"a",function(){return c});var c=function(){function t(t){this.store=t,this.articles$=this.store.select(u.getArticles),this.listConfig$=this.store.select(u.getListConfig),this.isLoading$=this.store.select(u.isLoading),this.articlesCount$=this.store.select(u.getArticlesCount),this.totalPages$=this.articlesCount$.pipe(Object(a.a)(this.listConfig$),Object(o.a)(function(t){return Array.from(new Array(Math.ceil(t[0]/t[1].filters.limit)),function(t,n){return n+1})}))}return t.prototype.favorite=function(t){this.store.dispatch(new r.b(t))},t.prototype.unFavorite=function(t){this.store.dispatch(new r.j(t))},t.prototype.navigateToArticle=function(t){this.store.dispatch({type:"[router] Go",payload:{path:["/article",t]}})},t.prototype.setPage=function(t){this.store.dispatch(new r.i(t))},t.prototype.setListConfig=function(t){this.store.dispatch(new r.h(t))},t}()},XIOX:function(t,n,i){"use strict";i.d(n,"a",function(){return l}),i("OPhZ");var l=function(){function t(t){this.facade=t}return t.prototype.ngOnInit=function(){this.totalPages$=this.facade.totalPages$,this.articles$=this.facade.articles$,this.listConfig$=this.facade.listConfig$,this.isLoading$=this.facade.isLoading$},t.prototype.favorite=function(t){this.facade.favorite(t)},t.prototype.unFavorite=function(t){this.facade.unFavorite(t)},t.prototype.navigateToArticle=function(t){this.facade.navigateToArticle(t)},t.prototype.setPage=function(t){this.facade.setPage(t)},t}()},b2y2:function(t,n,i){"use strict";i.d(n,"a",function(){return l});var l=function(){return function(){}}()},ou5U:function(t,n,i){"use strict";i.d(n,"a",function(){return l});var l=function(){return function(){}}()},uqYu:function(t,n,i){"use strict";var l;i.d(n,"a",function(){return l}),i.d(n,"i",function(){return e}),i.d(n,"h",function(){return u}),i.d(n,"e",function(){return r}),i.d(n,"g",function(){return a}),i.d(n,"f",function(){return o}),i.d(n,"b",function(){return c}),i.d(n,"d",function(){return s}),i.d(n,"c",function(){return f}),i.d(n,"j",function(){return p}),i.d(n,"l",function(){return b}),i.d(n,"k",function(){return d}),function(t){t.SET_LIST_PAGE="[article-list] SET_LIST_PAGE",t.SET_LIST_CONFIG="[article-list] SET_LIST_CONFIG",t.LOAD_ARTICLES="[article-list] LOAD_ARTICLES",t.LOAD_ARTICLES_SUCCESS="[article-list] LOAD_ARTICLES_SUCCESS",t.LOAD_ARTICLES_FAIL="[article-list] LOAD_ARTICLES_FAIL",t.FAVORITE="[article-list] FAVORITE",t.FAVORITE_SUCCESS="[article-list] FAVORITE_SUCCESS",t.FAVORITE_FAIL="[article-list] FAVORITE_FAIL",t.UNFAVORITE="[article-list] UNFAVORITE",t.UNFAVORITE_SUCCESS="[article-list] UNFAVORITE_SUCCESS",t.UNFAVORITE_FAIL="[article-list] UNFAVORITE_FAIL"}(l||(l={}));var e=function(){return function(t){this.payload=t,this.type="[article-list] SET_LIST_PAGE"}}(),u=function(){return function(t){this.payload=t,this.type="[article-list] SET_LIST_CONFIG"}}(),r=function(){return function(){this.type="[article-list] LOAD_ARTICLES"}}(),a=function(){return function(t){this.payload=t,this.type="[article-list] LOAD_ARTICLES_SUCCESS"}}(),o=function(){return function(t){this.payload=t,this.type="[article-list] LOAD_ARTICLES_FAIL"}}(),c=function(){return function(t){this.payload=t,this.type="[article-list] FAVORITE"}}(),s=function(){return function(t){this.payload=t,this.type="[article-list] FAVORITE_SUCCESS"}}(),f=function(){return function(t){this.payload=t,this.type="[article-list] FAVORITE_FAIL"}}(),p=function(){return function(t){this.payload=t,this.type="[article-list] UNFAVORITE"}}(),b=function(){return function(t){this.payload=t,this.type="[article-list] UNFAVORITE_SUCCESS"}}(),d=function(){return function(t){this.payload=t,this.type="[article-list] UNFAVORITE_FAIL"}}()},zHMd:function(t,n,i){"use strict";i.d(n,"a",function(){return e}),i("Ecwh");var l=i("GiBk"),e=function(){function t(t){this.apiService=t}return t.prototype.query=function(t){return this.apiService.get("/articles"+("FEED"===t.type?"/feed":""),this.toHttpParams(t.filters))},t.prototype.toHttpParams=function(t){return Object.getOwnPropertyNames(t).reduce(function(n,i){return n.set(i,t[i])},new l.i)},t}()}}]);