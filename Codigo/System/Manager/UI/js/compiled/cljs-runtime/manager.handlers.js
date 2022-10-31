goog.provide('manager.handlers');
manager.handlers.load_all_resources_success = (function manager$handlers$load_all_resources_success(db,p__26828){
var vec__26829 = p__26828;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26829,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26829,(1),null);
var resource_path = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel->path","panel->path",-962772451),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db)], null));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"resource-list","resource-list",1498099584),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(response,resource_path,cljs.core.PersistentArrayMap.EMPTY)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"path","path",-188191168)], null),resource_path),new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"types","types",590030639),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"objects","objects",2099713734)], null))),new cljs.core.Keyword(null,"interfaces","interfaces",-171349120),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"interfaces","interfaces",-171349120)], null))),new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"input-objects","input-objects",-1133693097)], null))),new cljs.core.Keyword(null,"enums","enums",-1800115173),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"enums","enums",-1800115173)], null))),new cljs.core.Keyword(null,"unions","unions",347029800),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"unions","unions",347029800)], null))),new cljs.core.Keyword(null,"mutations","mutations",338814149),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"mutations","mutations",338814149)], null))),new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"queries","queries",1446291995)], null))),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword(null,"sources","sources",-321166424)))], null));
});
manager.handlers.load_all_resources_failure = (function manager$handlers$load_all_resources_failure(db,p__26834){
var vec__26835 = p__26834;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26835,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26835,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"response","response",-1068424192)], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)));
});
manager.handlers.save_resource_success = (function manager$handlers$save_resource_success(db,p__26838){
var vec__26839 = p__26838;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26839,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26839,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.Keyword(null,"resource","resource",251898836),cljs.core.assoc,new cljs.core.Keyword(null,"old-name","old-name",1289683869),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response","response",-1068424192),response,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906)], null));
});
manager.handlers.save_resource_failure = (function manager$handlers$save_resource_failure(db,p__26846){
var vec__26847 = p__26846;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26847,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26847,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"response","response",-1068424192)], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)));
});
manager.handlers.delete_resource_success = (function manager$handlers$delete_resource_success(db,p__26850){
var vec__26851 = p__26850;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26851,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26851,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response","response",-1068424192),response,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel->path","panel->path",-962772451),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db)], null)),new cljs.core.Keyword(null,"old-name","old-name",1289683869),null], null)], 0));
});
manager.handlers.delete_resource_failure = (function manager$handlers$delete_resource_failure(db,p__26854){
var vec__26855 = p__26854;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26855,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26855,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"response","response",-1068424192)], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)));
});
manager.handlers.reload_resources = (function manager$handlers$reload_resources(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-all-resources","load-all-resources",1030877775)], null)], null)], null)], null);
});
manager.handlers.new_resource = (function manager$handlers$new_resource(db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel->path","panel->path",-962772451),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db)], null)),new cljs.core.Keyword(null,"old-name","old-name",1289683869),null], null));
});
manager.handlers.new_resource_property = (function manager$handlers$new_resource_property(db,p__26861){
var vec__26862 = p__26861;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26862,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26862,(1),null);
var index_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26862,(2),null);
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"data","data",-232669377),kind], null);
var kind_name = cljs.core.name(kind);
var element_name = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(kind_name,(0),(((kind_name).length) - (1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path)) + (1)))].join('');
if(cljs.core.truth_(index_QMARK_)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum-value","enum-value",-1046516274),element_name], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,path,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(element_name),cljs.core.PersistentArrayMap.EMPTY);
}
});
manager.handlers.delete_resource_property = (function manager$handlers$delete_resource_property(db,p__26865){
var vec__26866 = p__26865;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26866,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26866,(1),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26866,(2),null);
var index_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26866,(3),null);
if(cljs.core.truth_(index_QMARK_)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"resource","resource",251898836),path),manager.utils.drop_nth,key);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"resource","resource",251898836),path),cljs.core.dissoc,key);
}
});
manager.handlers.get_resource = (function manager$handlers$get_resource(db,_){
return new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(db);
});
manager.handlers.get_resource_list = (function manager$handlers$get_resource_list(db,_){
return new cljs.core.Keyword(null,"resource-list","resource-list",1498099584).cljs$core$IFn$_invoke$arity$1(db);
});
manager.handlers.get_names = (function manager$handlers$get_names(db,p__26869){
var vec__26871 = p__26869;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26871,(0),null);
var kinds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26871,(1),null);
return cljs.core.select_keys(new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(db),kinds);
});
manager.handlers.get_result = (function manager$handlers$get_result(db,_){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(db);
});
manager.handlers.delete_result = (function manager$handlers$delete_result(db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"result","result",1415092211));
});
manager.handlers.update_resource = (function manager$handlers$update_resource(db,p__26878){
var vec__26879 = p__26878;
var seq__26880 = cljs.core.seq(vec__26879);
var first__26881 = cljs.core.first(seq__26880);
var seq__26880__$1 = cljs.core.next(seq__26880);
var _ = first__26881;
var first__26881__$1 = cljs.core.first(seq__26880__$1);
var seq__26880__$2 = cljs.core.next(seq__26880__$1);
var path = first__26881__$1;
var first__26881__$2 = cljs.core.first(seq__26880__$2);
var seq__26880__$3 = cljs.core.next(seq__26880__$2);
var function$ = first__26881__$2;
var args = seq__26880__$3;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,cljs.core.vec(cljs.core.cons(new cljs.core.Keyword(null,"resource","resource",251898836),path)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,function$),args);
});
manager.handlers.select_resource = (function manager$handlers$select_resource(db,p__26883){
var vec__26885 = p__26883;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26885,(0),null);
var resource_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26885,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"result","result",1415092211)),new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel->path","panel->path",-962772451),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db)], null)),new cljs.core.Keyword(null,"old-name","old-name",1289683869),cljs.core.name(resource_name),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(resource_name),new cljs.core.Keyword(null,"data","data",-232669377),manager.utils.wire__GT_internal((function (){var G__26888 = new cljs.core.Keyword(null,"resource-list","resource-list",1498099584).cljs$core$IFn$_invoke$arity$1(db);
return (resource_name.cljs$core$IFn$_invoke$arity$1 ? resource_name.cljs$core$IFn$_invoke$arity$1(G__26888) : resource_name.call(null,G__26888));
})())], null));
});
manager.handlers.check_resource = (function manager$handlers$check_resource(db,_){
return manager.utils.valid_resource_QMARK_(new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(db),cljs.core.last(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(db))));
});
manager.handlers.select_config = (function manager$handlers$select_config(db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"old-name","old-name",1289683869),"config",new cljs.core.Keyword(null,"name","name",1843675177),"config",new cljs.core.Keyword(null,"data","data",-232669377),manager.utils.wire__GT_internal(new cljs.core.Keyword(null,"resource-list","resource-list",1498099584).cljs$core$IFn$_invoke$arity$1(db))], null));
});

//# sourceMappingURL=manager.handlers.js.map
