goog.provide('manager.views.schemas.index');
if((typeof manager !== 'undefined') && (typeof manager.views !== 'undefined') && (typeof manager.views.schemas !== 'undefined') && (typeof manager.views.schemas.index !== 'undefined') && (typeof manager.views.schemas.index.form !== 'undefined')){
} else {
manager.views.schemas.index.form = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26857 = cljs.core.get_global_hierarchy;
return (fexpr__26857.cljs$core$IFn$_invoke$arity$0 ? fexpr__26857.cljs$core$IFn$_invoke$arity$0() : fexpr__26857.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("manager.views.schemas.index","form"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
manager.views.schemas.index.schemas_panel = (function manager$views$schemas$index$schemas_panel(){
var active_panel = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-active-panel","get-active-panel",1506046163)], null)));
var kind = cljs.core.second(manager.utils.panel__GT_vector(active_panel));
if(cljs.core.not(kind)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redirect","redirect",-1975673286),new cljs.core.Keyword(null,"schemas_types","schemas_types",-1370164575)], null));
} else {
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"manager/views/schemas/index.cljs",new cljs.core.Keyword(null,"line","line",212345235),15], null)),new cljs.core.Keyword(null,"padding","padding",1660304693),"3vh 5em 0 5em",new cljs.core.Keyword(null,"gap","gap",80255254),"5em",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.list.multi_resources,active_panel], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.views.schemas.index.form,kind], null)], null)], null);
}
});
manager.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.views.schemas.index.schemas_panel], null);
}));

//# sourceMappingURL=manager.views.schemas.index.js.map
