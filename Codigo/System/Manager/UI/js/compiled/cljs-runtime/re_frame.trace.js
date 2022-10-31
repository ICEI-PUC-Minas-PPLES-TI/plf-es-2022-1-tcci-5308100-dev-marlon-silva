goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__16233){
var map__16234 = p__16233;
var map__16234__$1 = cljs.core.__destructure_map(map__16234);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16234__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16234__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16234__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16234__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__16238_16271 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__16239_16272 = null;
var count__16240_16273 = (0);
var i__16241_16274 = (0);
while(true){
if((i__16241_16274 < count__16240_16273)){
var vec__16253_16275 = chunk__16239_16272.cljs$core$IIndexed$_nth$arity$2(null,i__16241_16274);
var k_16276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16253_16275,(0),null);
var cb_16277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16253_16275,(1),null);
try{var G__16258_16278 = cljs.core.deref(re_frame.trace.traces);
(cb_16277.cljs$core$IFn$_invoke$arity$1 ? cb_16277.cljs$core$IFn$_invoke$arity$1(G__16258_16278) : cb_16277.call(null,G__16258_16278));
}catch (e16256){var e_16279 = e16256;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_16276,"while storing",cljs.core.deref(re_frame.trace.traces),e_16279], 0));
}

var G__16280 = seq__16238_16271;
var G__16281 = chunk__16239_16272;
var G__16282 = count__16240_16273;
var G__16283 = (i__16241_16274 + (1));
seq__16238_16271 = G__16280;
chunk__16239_16272 = G__16281;
count__16240_16273 = G__16282;
i__16241_16274 = G__16283;
continue;
} else {
var temp__5804__auto___16284 = cljs.core.seq(seq__16238_16271);
if(temp__5804__auto___16284){
var seq__16238_16285__$1 = temp__5804__auto___16284;
if(cljs.core.chunked_seq_QMARK_(seq__16238_16285__$1)){
var c__5568__auto___16286 = cljs.core.chunk_first(seq__16238_16285__$1);
var G__16287 = cljs.core.chunk_rest(seq__16238_16285__$1);
var G__16288 = c__5568__auto___16286;
var G__16289 = cljs.core.count(c__5568__auto___16286);
var G__16290 = (0);
seq__16238_16271 = G__16287;
chunk__16239_16272 = G__16288;
count__16240_16273 = G__16289;
i__16241_16274 = G__16290;
continue;
} else {
var vec__16260_16292 = cljs.core.first(seq__16238_16285__$1);
var k_16293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16260_16292,(0),null);
var cb_16294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16260_16292,(1),null);
try{var G__16264_16295 = cljs.core.deref(re_frame.trace.traces);
(cb_16294.cljs$core$IFn$_invoke$arity$1 ? cb_16294.cljs$core$IFn$_invoke$arity$1(G__16264_16295) : cb_16294.call(null,G__16264_16295));
}catch (e16263){var e_16296 = e16263;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_16293,"while storing",cljs.core.deref(re_frame.trace.traces),e_16296], 0));
}

var G__16297 = cljs.core.next(seq__16238_16285__$1);
var G__16298 = null;
var G__16299 = (0);
var G__16300 = (0);
seq__16238_16271 = G__16297;
chunk__16239_16272 = G__16298;
count__16240_16273 = G__16299;
i__16241_16274 = G__16300;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
