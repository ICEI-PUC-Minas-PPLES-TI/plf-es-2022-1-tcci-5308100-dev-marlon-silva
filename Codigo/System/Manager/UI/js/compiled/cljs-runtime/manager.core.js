goog.provide('manager.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),cljs.core.constantly(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"panel->path","panel->path",-962772451),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"schemas_types","schemas_types",-1370164575),new cljs.core.Keyword(null,"schemas_inputs","schemas_inputs",-2038101021),new cljs.core.Keyword(null,"mutations","mutations",338814149),new cljs.core.Keyword(null,"schemas_enums","schemas_enums",442571685),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"schemas_unions","schemas_unions",-1229572174),new cljs.core.Keyword(null,"schemas_interfaces","schemas_interfaces",1263665363),new cljs.core.Keyword(null,"apis","apis",876742295),new cljs.core.Keyword(null,"queries","queries",1446291995)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"objects","objects",2099713734)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"input-objects","input-objects",-1133693097)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"mutations","mutations",338814149)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"enums","enums",-1800115173)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"unions","unions",347029800)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"interfaces","interfaces",-171349120)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"queries","queries",1446291995)], null)]),new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dev","staging","prod"], null),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Int","Long","Boolean","ID"], null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["body","headers","params"], null),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GET","POST","PATCH","PUT","DELETE"], null)], null)], null)));
manager.core.debug_QMARK_ = goog.DEBUG;
manager.core.dev_setup = (function manager$core$dev_setup(){
if(manager.core.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
manager.core.mount_root = (function manager$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.views.page.main_panel], null),root_el);
});
manager.core.init = (function manager$core$init(){
manager.routes.start_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

manager.core.dev_setup();

return manager.core.mount_root();
});

//# sourceMappingURL=manager.core.js.map
