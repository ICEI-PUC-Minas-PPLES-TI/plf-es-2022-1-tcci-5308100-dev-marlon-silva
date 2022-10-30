goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__26845,p__26846){
var map__26849 = p__26845;
var map__26849__$1 = cljs.core.__destructure_map(map__26849);
var svc = map__26849__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26849__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26849__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26849__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__26851 = p__26846;
var map__26851__$1 = cljs.core.__destructure_map(map__26851);
var msg = map__26851__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26851__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26851__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26851__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26851__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__26856,p__26857){
var map__26858 = p__26856;
var map__26858__$1 = cljs.core.__destructure_map(map__26858);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26858__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__26859 = p__26857;
var map__26859__$1 = cljs.core.__destructure_map(map__26859);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26859__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__26862,p__26863){
var map__26864 = p__26862;
var map__26864__$1 = cljs.core.__destructure_map(map__26864);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26864__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26864__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__26865 = p__26863;
var map__26865__$1 = cljs.core.__destructure_map(map__26865);
var msg = map__26865__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26865__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__26868,tid){
var map__26869 = p__26868;
var map__26869__$1 = cljs.core.__destructure_map(map__26869);
var svc = map__26869__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26869__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__26875 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__26876 = null;
var count__26877 = (0);
var i__26878 = (0);
while(true){
if((i__26878 < count__26877)){
var vec__26900 = chunk__26876.cljs$core$IIndexed$_nth$arity$2(null,i__26878);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26900,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26900,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__26942 = seq__26875;
var G__26943 = chunk__26876;
var G__26944 = count__26877;
var G__26945 = (i__26878 + (1));
seq__26875 = G__26942;
chunk__26876 = G__26943;
count__26877 = G__26944;
i__26878 = G__26945;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26875);
if(temp__5804__auto__){
var seq__26875__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26875__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26875__$1);
var G__26946 = cljs.core.chunk_rest(seq__26875__$1);
var G__26947 = c__5568__auto__;
var G__26948 = cljs.core.count(c__5568__auto__);
var G__26949 = (0);
seq__26875 = G__26946;
chunk__26876 = G__26947;
count__26877 = G__26948;
i__26878 = G__26949;
continue;
} else {
var vec__26907 = cljs.core.first(seq__26875__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26907,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26907,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__26998 = cljs.core.next(seq__26875__$1);
var G__26999 = null;
var G__27000 = (0);
var G__27001 = (0);
seq__26875 = G__26998;
chunk__26876 = G__26999;
count__26877 = G__27000;
i__26878 = G__27001;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__26871_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__26871_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__26872_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__26872_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__26873_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__26873_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__26874_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__26874_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__26922){
var map__26923 = p__26922;
var map__26923__$1 = cljs.core.__destructure_map(map__26923);
var svc = map__26923__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26923__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26923__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
