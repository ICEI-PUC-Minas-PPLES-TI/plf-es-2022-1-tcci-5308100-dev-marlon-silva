goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__26191,res){
var map__26192 = p__26191;
var map__26192__$1 = cljs.core.__destructure_map(map__26192);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26192__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26192__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__26193 = res;
var G__26193__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26193,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__26193);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26193__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__26193__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__26196 = arguments.length;
switch (G__26196) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__26198,msg,handlers,timeout_after_ms){
var map__26199 = p__26198;
var map__26199__$1 = cljs.core.__destructure_map(map__26199);
var runtime = map__26199__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26199__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26438 = arguments.length;
var i__5770__auto___26439 = (0);
while(true){
if((i__5770__auto___26439 < len__5769__auto___26438)){
args__5775__auto__.push((arguments[i__5770__auto___26439]));

var G__26440 = (i__5770__auto___26439 + (1));
i__5770__auto___26439 = G__26440;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__26208,ev,args){
var map__26209 = p__26208;
var map__26209__$1 = cljs.core.__destructure_map(map__26209);
var runtime = map__26209__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26209__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__26210 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__26213 = null;
var count__26214 = (0);
var i__26215 = (0);
while(true){
if((i__26215 < count__26214)){
var ext = chunk__26213.cljs$core$IIndexed$_nth$arity$2(null,i__26215);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__26444 = seq__26210;
var G__26445 = chunk__26213;
var G__26446 = count__26214;
var G__26447 = (i__26215 + (1));
seq__26210 = G__26444;
chunk__26213 = G__26445;
count__26214 = G__26446;
i__26215 = G__26447;
continue;
} else {
var G__26448 = seq__26210;
var G__26449 = chunk__26213;
var G__26450 = count__26214;
var G__26451 = (i__26215 + (1));
seq__26210 = G__26448;
chunk__26213 = G__26449;
count__26214 = G__26450;
i__26215 = G__26451;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26210);
if(temp__5804__auto__){
var seq__26210__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26210__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26210__$1);
var G__26453 = cljs.core.chunk_rest(seq__26210__$1);
var G__26454 = c__5568__auto__;
var G__26455 = cljs.core.count(c__5568__auto__);
var G__26456 = (0);
seq__26210 = G__26453;
chunk__26213 = G__26454;
count__26214 = G__26455;
i__26215 = G__26456;
continue;
} else {
var ext = cljs.core.first(seq__26210__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__26458 = cljs.core.next(seq__26210__$1);
var G__26459 = null;
var G__26460 = (0);
var G__26461 = (0);
seq__26210 = G__26458;
chunk__26213 = G__26459;
count__26214 = G__26460;
i__26215 = G__26461;
continue;
} else {
var G__26466 = cljs.core.next(seq__26210__$1);
var G__26467 = null;
var G__26468 = (0);
var G__26469 = (0);
seq__26210 = G__26466;
chunk__26213 = G__26467;
count__26214 = G__26468;
i__26215 = G__26469;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq26202){
var G__26203 = cljs.core.first(seq26202);
var seq26202__$1 = cljs.core.next(seq26202);
var G__26204 = cljs.core.first(seq26202__$1);
var seq26202__$2 = cljs.core.next(seq26202__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26203,G__26204,seq26202__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__26222,p__26223){
var map__26234 = p__26222;
var map__26234__$1 = cljs.core.__destructure_map(map__26234);
var runtime = map__26234__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26234__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__26235 = p__26223;
var map__26235__$1 = cljs.core.__destructure_map(map__26235);
var msg = map__26235__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26235__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__26236 = cljs.core.deref(state_ref);
var map__26236__$1 = cljs.core.__destructure_map(map__26236);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26236__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26236__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__26237){
var map__26238 = p__26237;
var map__26238__$1 = cljs.core.__destructure_map(map__26238);
var runtime = map__26238__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26238__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__26259,msg){
var map__26260 = p__26259;
var map__26260__$1 = cljs.core.__destructure_map(map__26260);
var runtime = map__26260__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26260__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__26274,key,p__26275){
var map__26276 = p__26274;
var map__26276__$1 = cljs.core.__destructure_map(map__26276);
var state = map__26276__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26276__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__26280 = p__26275;
var map__26280__$1 = cljs.core.__destructure_map(map__26280);
var spec = map__26280__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26280__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__26290,key,spec){
var map__26291 = p__26290;
var map__26291__$1 = cljs.core.__destructure_map(map__26291);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26291__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__26302_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__26302_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__26304_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__26304_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__26305_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__26305_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__26306_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__26306_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__26307_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__26307_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__26322,key){
var map__26323 = p__26322;
var map__26323__$1 = cljs.core.__destructure_map(map__26323);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26323__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__26327,msg){
var map__26328 = p__26327;
var map__26328__$1 = cljs.core.__destructure_map(map__26328);
var runtime = map__26328__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26328__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__26329,p__26330){
var map__26331 = p__26329;
var map__26331__$1 = cljs.core.__destructure_map(map__26331);
var runtime = map__26331__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26331__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__26332 = p__26330;
var map__26332__$1 = cljs.core.__destructure_map(map__26332);
var msg = map__26332__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26332__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26332__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__26358 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__26360 = null;
var count__26361 = (0);
var i__26362 = (0);
while(true){
if((i__26362 < count__26361)){
var map__26397 = chunk__26360.cljs$core$IIndexed$_nth$arity$2(null,i__26362);
var map__26397__$1 = cljs.core.__destructure_map(map__26397);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26397__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__26519 = seq__26358;
var G__26520 = chunk__26360;
var G__26521 = count__26361;
var G__26522 = (i__26362 + (1));
seq__26358 = G__26519;
chunk__26360 = G__26520;
count__26361 = G__26521;
i__26362 = G__26522;
continue;
} else {
var G__26523 = seq__26358;
var G__26524 = chunk__26360;
var G__26525 = count__26361;
var G__26526 = (i__26362 + (1));
seq__26358 = G__26523;
chunk__26360 = G__26524;
count__26361 = G__26525;
i__26362 = G__26526;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26358);
if(temp__5804__auto__){
var seq__26358__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26358__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26358__$1);
var G__26527 = cljs.core.chunk_rest(seq__26358__$1);
var G__26528 = c__5568__auto__;
var G__26529 = cljs.core.count(c__5568__auto__);
var G__26530 = (0);
seq__26358 = G__26527;
chunk__26360 = G__26528;
count__26361 = G__26529;
i__26362 = G__26530;
continue;
} else {
var map__26410 = cljs.core.first(seq__26358__$1);
var map__26410__$1 = cljs.core.__destructure_map(map__26410);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26410__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__26531 = cljs.core.next(seq__26358__$1);
var G__26532 = null;
var G__26533 = (0);
var G__26534 = (0);
seq__26358 = G__26531;
chunk__26360 = G__26532;
count__26361 = G__26533;
i__26362 = G__26534;
continue;
} else {
var G__26535 = cljs.core.next(seq__26358__$1);
var G__26536 = null;
var G__26537 = (0);
var G__26538 = (0);
seq__26358 = G__26535;
chunk__26360 = G__26536;
count__26361 = G__26537;
i__26362 = G__26538;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
