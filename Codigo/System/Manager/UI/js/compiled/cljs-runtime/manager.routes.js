goog.provide('manager.routes');
if((typeof manager !== 'undefined') && (typeof manager.routes !== 'undefined') && (typeof manager.routes.panels !== 'undefined')){
} else {
manager.routes.panels = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26832 = cljs.core.get_global_hierarchy;
return (fexpr__26832.cljs$core$IFn$_invoke$arity$0 ? fexpr__26832.cljs$core$IFn$_invoke$arity$0() : fexpr__26832.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("manager.routes","panels"),(function (panel){
return cljs.core.first(manager.utils.panel__GT_vector(panel));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
manager.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No panel found for this route."], null);
}));
manager.routes.routes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 6, ["",new cljs.core.Keyword(null,"home","home",-74557309),"schemas",new cljs.core.PersistentArrayMap(null, 6, ["",new cljs.core.Keyword(null,"schemas","schemas",575070579),"/types",new cljs.core.Keyword(null,"schemas_types","schemas_types",-1370164575),"/interfaces",new cljs.core.Keyword(null,"schemas_interfaces","schemas_interfaces",1263665363),"/inputs",new cljs.core.Keyword(null,"schemas_inputs","schemas_inputs",-2038101021),"/enums",new cljs.core.Keyword(null,"schemas_enums","schemas_enums",442571685),"/unions",new cljs.core.Keyword(null,"schemas_unions","schemas_unions",-1229572174)], null),"apis",new cljs.core.Keyword(null,"apis","apis",876742295),"queries",new cljs.core.Keyword(null,"queries","queries",1446291995),"mutations",new cljs.core.Keyword(null,"mutations","mutations",338814149),"settings",new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null));
manager.routes.parse = (function manager$routes$parse(url){
return bidi.bidi.match_route(cljs.core.deref(manager.routes.routes),url);
});
manager.routes.url_for = (function manager$routes$url_for(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26858 = arguments.length;
var i__5770__auto___26859 = (0);
while(true){
if((i__5770__auto___26859 < len__5769__auto___26858)){
args__5775__auto__.push((arguments[i__5770__auto___26859]));

var G__26860 = (i__5770__auto___26859 + (1));
i__5770__auto___26859 = G__26860;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return manager.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(manager.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(manager.routes.routes)], null),args));
}));

(manager.routes.url_for.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(manager.routes.url_for.cljs$lang$applyTo = (function (seq26833){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26833));
}));

manager.routes.dispatch = (function manager$routes$dispatch(route){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route)], null));
});
if((typeof manager !== 'undefined') && (typeof manager.routes !== 'undefined') && (typeof manager.routes.history !== 'undefined')){
} else {
manager.routes.history = pushy.core.pushy(manager.routes.dispatch,manager.routes.parse);
}
manager.routes.navigate_BANG_ = (function manager$routes$navigate_BANG_(handler){
return manager.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,manager.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler], 0)));
});
manager.routes.start_BANG_ = (function manager$routes$start_BANG_(){
return manager.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (handler){
return manager.routes.navigate_BANG_(handler);
}));

//# sourceMappingURL=manager.routes.js.map
