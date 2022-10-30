goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__25867 = libspec;
var seq__25868 = cljs.core.seq(vec__25867);
var first__25869 = cljs.core.first(seq__25868);
var seq__25868__$1 = cljs.core.next(seq__25868);
var lib = first__25869;
var spec = seq__25868__$1;
var libspec__$1 = vec__25867;
var vec__25870 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25870,(0),null);
var vec__25873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25870,(1),null);
var seq__25874 = cljs.core.seq(vec__25873);
var first__25875 = cljs.core.first(seq__25874);
var seq__25874__$1 = cljs.core.next(seq__25874);
var _ = first__25875;
var first__25875__$1 = cljs.core.first(seq__25874__$1);
var seq__25874__$2 = cljs.core.next(seq__25874__$1);
var alias = first__25875__$1;
var post_spec = seq__25874__$2;
var post = vec__25873;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__25879 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25879,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__25879;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__25886 = cljs.core.seq(new_as_aliases);
var chunk__25887 = null;
var count__25888 = (0);
var i__25889 = (0);
while(true){
if((i__25889 < count__25888)){
var vec__25898 = chunk__25887.cljs$core$IIndexed$_nth$arity$2(null,i__25889);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25898,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25898,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__25928 = seq__25886;
var G__25929 = chunk__25887;
var G__25930 = count__25888;
var G__25931 = (i__25889 + (1));
seq__25886 = G__25928;
chunk__25887 = G__25929;
count__25888 = G__25930;
i__25889 = G__25931;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25886);
if(temp__5804__auto__){
var seq__25886__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25886__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25886__$1);
var G__25932 = cljs.core.chunk_rest(seq__25886__$1);
var G__25933 = c__5568__auto__;
var G__25934 = cljs.core.count(c__5568__auto__);
var G__25935 = (0);
seq__25886 = G__25932;
chunk__25887 = G__25933;
count__25888 = G__25934;
i__25889 = G__25935;
continue;
} else {
var vec__25904 = cljs.core.first(seq__25886__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25904,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25904,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__25937 = cljs.core.next(seq__25886__$1);
var G__25938 = null;
var G__25939 = (0);
var G__25940 = (0);
seq__25886 = G__25937;
chunk__25887 = G__25938;
count__25888 = G__25939;
i__25889 = G__25940;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__25911 = arguments.length;
switch (G__25911) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__25914 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__25914__$1 = cljs.core.__destructure_map(map__25914);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25914__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25914__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__25916 = ret__$1;
var G__25916__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__25916,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__25916);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__25916__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__25916__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__25919,p__25920){
var map__25921 = p__25919;
var map__25921__$1 = cljs.core.__destructure_map(map__25921);
var ret__$1 = map__25921__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25921__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__25922 = p__25920;
var seq__25923 = cljs.core.seq(vec__25922);
var first__25924 = cljs.core.first(seq__25923);
var seq__25923__$1 = cljs.core.next(seq__25923);
var spec_key = first__25924;
var libspecs = seq__25923__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__25925 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__25925__$1 = cljs.core.__destructure_map(map__25925);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25925__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25925__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__25926 = ret__$1;
var G__25926__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__25926,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__25926);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__25926__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__25926__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
