goog.provide('manager.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("manager.events","initialize-db","manager.events/initialize-db",-2129467950),(function (_,___$1){
return manager.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("manager.events","navigate","manager.events/navigate",-1436012037),(function (_,p__23701){
var vec__23702 = p__23701;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23702,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23702,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),handler], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("manager.events","set-active-panel","manager.events/set-active-panel",1269830754),(function (p__23705,p__23706){
var map__23707 = p__23705;
var map__23707__$1 = cljs.core.__destructure_map(map__23707);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23707__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23708 = p__23706;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23708,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23708,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel)], null);
}));

//# sourceMappingURL=manager.events.js.map
