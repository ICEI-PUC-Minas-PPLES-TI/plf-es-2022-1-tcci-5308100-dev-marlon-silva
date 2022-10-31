goog.provide('manager.utils');
manager.utils.maybe_parse_int = (function manager$utils$maybe_parse_int(val){
if(cljs.core.int_QMARK_(parseInt(val))){
return parseInt(val);
} else {
return val;
}
});
manager.utils.format_type = (function manager$utils$format_type(type){
var type__$1 = ((cljs.core.vector_QMARK_(type))?type:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26615_SHARP_,p2__26614_SHARP_){
return (new cljs.core.List(null,p2__26614_SHARP_,(new cljs.core.List(null,p1__26615_SHARP_,null,(1),null)),(2),null));
}),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.last(type__$1)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.reverse(cljs.core.butlast(type__$1))));
});
manager.utils.maybe_format_values = (function manager$utils$maybe_format_values(m){
var G__26618 = m;
var G__26618__$1 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__26616_SHARP_){
return ((typeof p1__26616_SHARP_ === 'string') || (cljs.core.vector_QMARK_(p1__26616_SHARP_)));
}),new cljs.core.Keyword(null,"type","type",1174270348))(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26618,new cljs.core.Keyword(null,"type","type",1174270348),manager.utils.format_type):G__26618);
var G__26618__$2 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"implements","implements",1804973047))(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26618__$1,new cljs.core.Keyword(null,"implements","implements",1804973047),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.keyword)):G__26618__$1);
var G__26618__$3 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"members","members",159001018))(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26618__$2,new cljs.core.Keyword(null,"members","members",159001018),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.keyword)):G__26618__$2);
var G__26618__$4 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"env","env",-1815813235))(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26618__$3,new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.keyword):G__26618__$3);
var G__26618__$5 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"method","method",55703592))(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26618__$4,new cljs.core.Keyword(null,"method","method",55703592),cljs.core.keyword):G__26618__$4);
var G__26618__$6 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"resolve","resolve",-1584445482))(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26618__$5,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),cljs.core.keyword):G__26618__$5);
if(cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"resolve","resolve",-1584445482))(m))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__26618__$6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(0)], null),cljs.core.keyword),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(1)], null),cljs.core.keyword),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(2)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__26617_SHARP_){
if((!(cljs.core.int_QMARK_(p1__26617_SHARP_)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__26617_SHARP_);
} else {
return p1__26617_SHARP_;
}
})));
} else {
return G__26618__$6;
}
});
manager.utils.__GT_edn = (function manager$utils$__GT_edn(data){
return clojure.walk.postwalk((function (p1__26619_SHARP_){
if(cljs.core.map_QMARK_(p1__26619_SHARP_)){
return manager.utils.maybe_format_values(p1__26619_SHARP_);
} else {
return p1__26619_SHARP_;
}
}),data);
});
manager.utils.available_QMARK_ = (function manager$utils$available_QMARK_(m,k){
return (cljs.core.some(k,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.tree_seq(cljs.core.map_QMARK_,cljs.core.vals,m))) == null);
});
manager.utils.referenced_QMARK_ = (function manager$utils$referenced_QMARK_(m,val){
return cljs.core.some((function (p1__26620_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(cljs.core.flatten(cljs.core.vals(p1__26620_SHARP_))),val);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.tree_seq(cljs.core.map_QMARK_,cljs.core.vals,m)));
});
manager.utils.active_panel_QMARK_ = (function manager$utils$active_panel_QMARK_(active_panel,panel){
if(clojure.string.includes_QMARK_(cljs.core.name(active_panel),cljs.core.name(panel))){
return new cljs.core.Keyword(null,"active","active",1895962068);
} else {
return null;
}
});
manager.utils.panel__GT_vector = (function manager$utils$panel__GT_vector(panel){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(panel),/_/));
});
manager.utils.filter_characteres = (function manager$utils$filter_characteres(t){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26621_SHARP_){
return cljs.core.re_matches(/(\w|-|\?|>|<|\!)/,p1__26621_SHARP_);
}),clojure.string.trim(t)));
});
manager.utils.drop_nth = (function manager$utils$drop_nth(coll,n){
return cljs.core.vec(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__26622_SHARP_,p2__26623_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__26622_SHARP_,n)){
return p2__26623_SHARP_;
} else {
return null;
}
}),coll));
});
manager.utils.field_resolve__GT_internal = (function manager$utils$field_resolve__GT_internal(m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"response-path","response-path",-145925456),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" > ",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(2)], null)))),new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(1)], null))),new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
});
manager.utils.maybe_format_resource = (function manager$utils$maybe_format_resource(m){
var G__26626 = m;
var G__26626__$1 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__26624_SHARP_){
return ((typeof p1__26624_SHARP_ === 'string') || (cljs.core.vector_QMARK_(p1__26624_SHARP_)));
}),new cljs.core.Keyword(null,"type","type",1174270348))(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26626,new cljs.core.Keyword(null,"type","type",1174270348),(function (p1__26625_SHARP_){
return cljs.core.set(cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__26625_SHARP_],null))));
})):G__26626);
var G__26626__$2 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"cors","cors",1066181665))(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26626__$1,new cljs.core.Keyword(null,"cors","cors",1066181665),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join,", ")):G__26626__$1);
var G__26626__$3 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"resolve","resolve",-1584445482))(m))?manager.utils.field_resolve__GT_internal(G__26626__$2):G__26626__$2);
if(cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"method","method",55703592))(m))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26626__$3,new cljs.core.Keyword(null,"method","method",55703592),clojure.string.upper_case);
} else {
return G__26626__$3;
}
});
manager.utils.wire__GT_internal = (function manager$utils$wire__GT_internal(m){
return clojure.walk.postwalk((function (p1__26627_SHARP_){
if(cljs.core.map_QMARK_(p1__26627_SHARP_)){
return manager.utils.maybe_format_resource(p1__26627_SHARP_);
} else {
return p1__26627_SHARP_;
}
}),m);
});
manager.utils.sort_types_comparator = (function manager$utils$sort_types_comparator(t1,t2){
var order = new cljs.core.PersistentArrayMap(null, 2, ["non-null",(1),"list",(2)], null);
var t1_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(order,t1,(3));
var t2_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(order,t2,(3));
return cljs.core.compare(t1_weight,t2_weight);
});
manager.utils.field_resolve__GT_wire = (function manager$utils$field_resolve__GT_wire(m){
var response_path = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(manager.utils.maybe_parse_int,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-path","response-path",-145925456).cljs$core$IFn$_invoke$arity$1(m),/>/));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-in","get-in",688791704),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(m),response_path], null)),new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"response-path","response-path",-145925456)], 0));
});
manager.utils.maybe_prepare_json = (function manager$utils$maybe_prepare_json(m){
var G__26630 = m;
var G__26630__$1 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348))(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26630,new cljs.core.Keyword(null,"type","type",1174270348),(function (p1__26628_SHARP_){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(manager.utils.sort_types_comparator,cljs.core.vec(p1__26628_SHARP_));
})):G__26630);
var G__26630__$2 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,new cljs.core.Keyword(null,"implements","implements",1804973047))(m))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26630__$1,new cljs.core.Keyword(null,"implements","implements",1804973047)):G__26630__$1);
var G__26630__$3 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.Keyword(null,"isDeprecated","isDeprecated",1354226910))(m))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26630__$2,new cljs.core.Keyword(null,"isDeprecated","isDeprecated",1354226910)):G__26630__$2);
var G__26630__$4 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"response-path","response-path",-145925456))(m))?manager.utils.field_resolve__GT_wire(G__26630__$3):G__26630__$3);
var G__26630__$5 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.Keyword(null,"cors","cors",1066181665))(m))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26630__$4,new cljs.core.Keyword(null,"cors","cors",1066181665)):G__26630__$4);
var G__26630__$6 = (cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,clojure.string.blank_QMARK_,new cljs.core.Keyword(null,"cors","cors",1066181665))(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26630__$5,new cljs.core.Keyword(null,"cors","cors",1066181665),(function (p1__26629_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26629_SHARP_,/,/));
})):G__26630__$5);
if(cljs.core.truth_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"method","method",55703592))(m))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26630__$6,new cljs.core.Keyword(null,"method","method",55703592),clojure.string.lower_case);
} else {
return G__26630__$6;
}
});
manager.utils.internal__GT_wire = (function manager$utils$internal__GT_wire(m){
return clojure.walk.postwalk((function (p1__26631_SHARP_){
if(cljs.core.map_QMARK_(p1__26631_SHARP_)){
return manager.utils.maybe_prepare_json(p1__26631_SHARP_);
} else {
return p1__26631_SHARP_;
}
}),m);
});
manager.utils.valid_resource_QMARK_ = (function manager$utils$valid_resource_QMARK_(resource,kind){
return (schema.core.check((function (){var G__26632 = kind;
var G__26632__$1 = (((G__26632 instanceof cljs.core.Keyword))?G__26632.fqn:null);
switch (G__26632__$1) {
case "objects":
return manager.validations.Object;

break;
case "input-objects":
return manager.validations.InputObject;

break;
case "interfaces":
return manager.validations.Interface;

break;
case "unions":
return manager.validations.Union;

break;
case "enums":
return manager.validations.Enum;

break;
case "queries":
return manager.validations.Query;

break;
case "mutations":
return manager.validations.Mutation;

break;
case "sources":
return manager.validations.Source;

break;
default:
return manager.validations.Config;

}
})(),resource) == null);
});

//# sourceMappingURL=manager.utils.js.map
