goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__13207 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13208 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13208);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___13324 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13324)){
var new_db_13325 = temp__5804__auto___13324;
var fexpr__13211_13326 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13211_13326.cljs$core$IFn$_invoke$arity$1 ? fexpr__13211_13326.cljs$core$IFn$_invoke$arity$1(new_db_13325) : fexpr__13211_13326.call(null,new_db_13325));
} else {
}

var seq__13213 = cljs.core.seq(effects_without_db);
var chunk__13214 = null;
var count__13215 = (0);
var i__13216 = (0);
while(true){
if((i__13216 < count__13215)){
var vec__13226 = chunk__13214.cljs$core$IIndexed$_nth$arity$2(null,i__13216);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13226,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13226,(1),null);
var temp__5802__auto___13327 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13327)){
var effect_fn_13328 = temp__5802__auto___13327;
(effect_fn_13328.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13328.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13328.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13329 = seq__13213;
var G__13330 = chunk__13214;
var G__13331 = count__13215;
var G__13332 = (i__13216 + (1));
seq__13213 = G__13329;
chunk__13214 = G__13330;
count__13215 = G__13331;
i__13216 = G__13332;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13213);
if(temp__5804__auto__){
var seq__13213__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13213__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13213__$1);
var G__13333 = cljs.core.chunk_rest(seq__13213__$1);
var G__13334 = c__5568__auto__;
var G__13335 = cljs.core.count(c__5568__auto__);
var G__13336 = (0);
seq__13213 = G__13333;
chunk__13214 = G__13334;
count__13215 = G__13335;
i__13216 = G__13336;
continue;
} else {
var vec__13229 = cljs.core.first(seq__13213__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13229,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13229,(1),null);
var temp__5802__auto___13337 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13337)){
var effect_fn_13338 = temp__5802__auto___13337;
(effect_fn_13338.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13338.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13338.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13339 = cljs.core.next(seq__13213__$1);
var G__13340 = null;
var G__13341 = (0);
var G__13342 = (0);
seq__13213 = G__13339;
chunk__13214 = G__13340;
count__13215 = G__13341;
i__13216 = G__13342;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__12875__auto___13343 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__12876__auto___13344 = (end__12875__auto___13343 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12876__auto___13344,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__12875__auto___13343);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13207);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___13345 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13345)){
var new_db_13346 = temp__5804__auto___13345;
var fexpr__13237_13348 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13237_13348.cljs$core$IFn$_invoke$arity$1 ? fexpr__13237_13348.cljs$core$IFn$_invoke$arity$1(new_db_13346) : fexpr__13237_13348.call(null,new_db_13346));
} else {
}

var seq__13238 = cljs.core.seq(effects_without_db);
var chunk__13239 = null;
var count__13240 = (0);
var i__13241 = (0);
while(true){
if((i__13241 < count__13240)){
var vec__13253 = chunk__13239.cljs$core$IIndexed$_nth$arity$2(null,i__13241);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13253,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13253,(1),null);
var temp__5802__auto___13350 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13350)){
var effect_fn_13351 = temp__5802__auto___13350;
(effect_fn_13351.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13351.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13351.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13352 = seq__13238;
var G__13353 = chunk__13239;
var G__13354 = count__13240;
var G__13355 = (i__13241 + (1));
seq__13238 = G__13352;
chunk__13239 = G__13353;
count__13240 = G__13354;
i__13241 = G__13355;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13238);
if(temp__5804__auto__){
var seq__13238__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13238__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13238__$1);
var G__13356 = cljs.core.chunk_rest(seq__13238__$1);
var G__13357 = c__5568__auto__;
var G__13358 = cljs.core.count(c__5568__auto__);
var G__13359 = (0);
seq__13238 = G__13356;
chunk__13239 = G__13357;
count__13240 = G__13358;
i__13241 = G__13359;
continue;
} else {
var vec__13256 = cljs.core.first(seq__13238__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13256,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13256,(1),null);
var temp__5802__auto___13360 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13360)){
var effect_fn_13361 = temp__5802__auto___13360;
(effect_fn_13361.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13361.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13361.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13362 = cljs.core.next(seq__13238__$1);
var G__13363 = null;
var G__13364 = (0);
var G__13365 = (0);
seq__13238 = G__13362;
chunk__13239 = G__13363;
count__13240 = G__13364;
i__13241 = G__13365;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__13260){
var map__13261 = p__13260;
var map__13261__$1 = cljs.core.__destructure_map(map__13261);
var effect = map__13261__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13261__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13261__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__13264 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13265 = null;
var count__13266 = (0);
var i__13267 = (0);
while(true){
if((i__13267 < count__13266)){
var effect = chunk__13265.cljs$core$IIndexed$_nth$arity$2(null,i__13267);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__13370 = seq__13264;
var G__13371 = chunk__13265;
var G__13372 = count__13266;
var G__13373 = (i__13267 + (1));
seq__13264 = G__13370;
chunk__13265 = G__13371;
count__13266 = G__13372;
i__13267 = G__13373;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13264);
if(temp__5804__auto__){
var seq__13264__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13264__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13264__$1);
var G__13374 = cljs.core.chunk_rest(seq__13264__$1);
var G__13375 = c__5568__auto__;
var G__13376 = cljs.core.count(c__5568__auto__);
var G__13377 = (0);
seq__13264 = G__13374;
chunk__13265 = G__13375;
count__13266 = G__13376;
i__13267 = G__13377;
continue;
} else {
var effect = cljs.core.first(seq__13264__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__13379 = cljs.core.next(seq__13264__$1);
var G__13380 = null;
var G__13381 = (0);
var G__13382 = (0);
seq__13264 = G__13379;
chunk__13265 = G__13380;
count__13266 = G__13381;
i__13267 = G__13382;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__13285 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__13286 = null;
var count__13287 = (0);
var i__13288 = (0);
while(true){
if((i__13288 < count__13287)){
var vec__13295 = chunk__13286.cljs$core$IIndexed$_nth$arity$2(null,i__13288);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13295,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13295,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13386 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13386)){
var effect_fn_13387 = temp__5802__auto___13386;
(effect_fn_13387.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13387.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13387.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13388 = seq__13285;
var G__13389 = chunk__13286;
var G__13390 = count__13287;
var G__13391 = (i__13288 + (1));
seq__13285 = G__13388;
chunk__13286 = G__13389;
count__13287 = G__13390;
i__13288 = G__13391;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13285);
if(temp__5804__auto__){
var seq__13285__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13285__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13285__$1);
var G__13392 = cljs.core.chunk_rest(seq__13285__$1);
var G__13393 = c__5568__auto__;
var G__13394 = cljs.core.count(c__5568__auto__);
var G__13395 = (0);
seq__13285 = G__13392;
chunk__13286 = G__13393;
count__13287 = G__13394;
i__13288 = G__13395;
continue;
} else {
var vec__13303 = cljs.core.first(seq__13285__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13303,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13303,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13397 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13397)){
var effect_fn_13398 = temp__5802__auto___13397;
(effect_fn_13398.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13398.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13398.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13399 = cljs.core.next(seq__13285__$1);
var G__13400 = null;
var G__13401 = (0);
var G__13402 = (0);
seq__13285 = G__13399;
chunk__13286 = G__13400;
count__13287 = G__13401;
i__13288 = G__13402;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__13308 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13309 = null;
var count__13310 = (0);
var i__13311 = (0);
while(true){
if((i__13311 < count__13310)){
var event = chunk__13309.cljs$core$IIndexed$_nth$arity$2(null,i__13311);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__13412 = seq__13308;
var G__13413 = chunk__13309;
var G__13414 = count__13310;
var G__13415 = (i__13311 + (1));
seq__13308 = G__13412;
chunk__13309 = G__13413;
count__13310 = G__13414;
i__13311 = G__13415;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13308);
if(temp__5804__auto__){
var seq__13308__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13308__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13308__$1);
var G__13417 = cljs.core.chunk_rest(seq__13308__$1);
var G__13418 = c__5568__auto__;
var G__13419 = cljs.core.count(c__5568__auto__);
var G__13420 = (0);
seq__13308 = G__13417;
chunk__13309 = G__13418;
count__13310 = G__13419;
i__13311 = G__13420;
continue;
} else {
var event = cljs.core.first(seq__13308__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__13422 = cljs.core.next(seq__13308__$1);
var G__13423 = null;
var G__13424 = (0);
var G__13425 = (0);
seq__13308 = G__13422;
chunk__13309 = G__13423;
count__13310 = G__13424;
i__13311 = G__13425;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__13316 = cljs.core.seq(value);
var chunk__13317 = null;
var count__13318 = (0);
var i__13319 = (0);
while(true){
if((i__13319 < count__13318)){
var event = chunk__13317.cljs$core$IIndexed$_nth$arity$2(null,i__13319);
clear_event(event);


var G__13426 = seq__13316;
var G__13427 = chunk__13317;
var G__13428 = count__13318;
var G__13429 = (i__13319 + (1));
seq__13316 = G__13426;
chunk__13317 = G__13427;
count__13318 = G__13428;
i__13319 = G__13429;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13316);
if(temp__5804__auto__){
var seq__13316__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13316__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13316__$1);
var G__13432 = cljs.core.chunk_rest(seq__13316__$1);
var G__13433 = c__5568__auto__;
var G__13434 = cljs.core.count(c__5568__auto__);
var G__13435 = (0);
seq__13316 = G__13432;
chunk__13317 = G__13433;
count__13318 = G__13434;
i__13319 = G__13435;
continue;
} else {
var event = cljs.core.first(seq__13316__$1);
clear_event(event);


var G__13440 = cljs.core.next(seq__13316__$1);
var G__13441 = null;
var G__13442 = (0);
var G__13443 = (0);
seq__13316 = G__13440;
chunk__13317 = G__13441;
count__13318 = G__13442;
i__13319 = G__13443;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
