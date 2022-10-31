goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__16601 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16602 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16602);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16709 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16709)){
var new_db_16710 = temp__5804__auto___16709;
var fexpr__16616_16711 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16616_16711.cljs$core$IFn$_invoke$arity$1 ? fexpr__16616_16711.cljs$core$IFn$_invoke$arity$1(new_db_16710) : fexpr__16616_16711.call(null,new_db_16710));
} else {
}

var seq__16620 = cljs.core.seq(effects_without_db);
var chunk__16621 = null;
var count__16622 = (0);
var i__16623 = (0);
while(true){
if((i__16623 < count__16622)){
var vec__16635 = chunk__16621.cljs$core$IIndexed$_nth$arity$2(null,i__16623);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16635,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16635,(1),null);
var temp__5802__auto___16712 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16712)){
var effect_fn_16713 = temp__5802__auto___16712;
(effect_fn_16713.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16713.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16713.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16714 = seq__16620;
var G__16715 = chunk__16621;
var G__16716 = count__16622;
var G__16717 = (i__16623 + (1));
seq__16620 = G__16714;
chunk__16621 = G__16715;
count__16622 = G__16716;
i__16623 = G__16717;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16620);
if(temp__5804__auto__){
var seq__16620__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16620__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16620__$1);
var G__16718 = cljs.core.chunk_rest(seq__16620__$1);
var G__16719 = c__5568__auto__;
var G__16720 = cljs.core.count(c__5568__auto__);
var G__16721 = (0);
seq__16620 = G__16718;
chunk__16621 = G__16719;
count__16622 = G__16720;
i__16623 = G__16721;
continue;
} else {
var vec__16641 = cljs.core.first(seq__16620__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16641,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16641,(1),null);
var temp__5802__auto___16722 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16722)){
var effect_fn_16723 = temp__5802__auto___16722;
(effect_fn_16723.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16723.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16723.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16724 = cljs.core.next(seq__16620__$1);
var G__16725 = null;
var G__16726 = (0);
var G__16727 = (0);
seq__16620 = G__16724;
chunk__16621 = G__16725;
count__16622 = G__16726;
i__16623 = G__16727;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16211__auto___16728 = re_frame.interop.now();
var duration__16212__auto___16729 = (end__16211__auto___16728 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16212__auto___16729,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__16211__auto___16728);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16601);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16730 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16730)){
var new_db_16731 = temp__5804__auto___16730;
var fexpr__16645_16732 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16645_16732.cljs$core$IFn$_invoke$arity$1 ? fexpr__16645_16732.cljs$core$IFn$_invoke$arity$1(new_db_16731) : fexpr__16645_16732.call(null,new_db_16731));
} else {
}

var seq__16646 = cljs.core.seq(effects_without_db);
var chunk__16647 = null;
var count__16648 = (0);
var i__16649 = (0);
while(true){
if((i__16649 < count__16648)){
var vec__16656 = chunk__16647.cljs$core$IIndexed$_nth$arity$2(null,i__16649);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16656,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16656,(1),null);
var temp__5802__auto___16733 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16733)){
var effect_fn_16734 = temp__5802__auto___16733;
(effect_fn_16734.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16734.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16734.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16735 = seq__16646;
var G__16736 = chunk__16647;
var G__16737 = count__16648;
var G__16738 = (i__16649 + (1));
seq__16646 = G__16735;
chunk__16647 = G__16736;
count__16648 = G__16737;
i__16649 = G__16738;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16646);
if(temp__5804__auto__){
var seq__16646__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16646__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16646__$1);
var G__16740 = cljs.core.chunk_rest(seq__16646__$1);
var G__16741 = c__5568__auto__;
var G__16742 = cljs.core.count(c__5568__auto__);
var G__16743 = (0);
seq__16646 = G__16740;
chunk__16647 = G__16741;
count__16648 = G__16742;
i__16649 = G__16743;
continue;
} else {
var vec__16660 = cljs.core.first(seq__16646__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16660,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16660,(1),null);
var temp__5802__auto___16744 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16744)){
var effect_fn_16745 = temp__5802__auto___16744;
(effect_fn_16745.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16745.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16745.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16746 = cljs.core.next(seq__16646__$1);
var G__16747 = null;
var G__16748 = (0);
var G__16749 = (0);
seq__16646 = G__16746;
chunk__16647 = G__16747;
count__16648 = G__16748;
i__16649 = G__16749;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__16665){
var map__16666 = p__16665;
var map__16666__$1 = cljs.core.__destructure_map(map__16666);
var effect = map__16666__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16666__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16666__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__16668 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16669 = null;
var count__16670 = (0);
var i__16671 = (0);
while(true){
if((i__16671 < count__16670)){
var effect = chunk__16669.cljs$core$IIndexed$_nth$arity$2(null,i__16671);
re_frame.fx.dispatch_later(effect);


var G__16753 = seq__16668;
var G__16754 = chunk__16669;
var G__16755 = count__16670;
var G__16756 = (i__16671 + (1));
seq__16668 = G__16753;
chunk__16669 = G__16754;
count__16670 = G__16755;
i__16671 = G__16756;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16668);
if(temp__5804__auto__){
var seq__16668__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16668__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16668__$1);
var G__16758 = cljs.core.chunk_rest(seq__16668__$1);
var G__16759 = c__5568__auto__;
var G__16760 = cljs.core.count(c__5568__auto__);
var G__16761 = (0);
seq__16668 = G__16758;
chunk__16669 = G__16759;
count__16670 = G__16760;
i__16671 = G__16761;
continue;
} else {
var effect = cljs.core.first(seq__16668__$1);
re_frame.fx.dispatch_later(effect);


var G__16762 = cljs.core.next(seq__16668__$1);
var G__16763 = null;
var G__16764 = (0);
var G__16765 = (0);
seq__16668 = G__16762;
chunk__16669 = G__16763;
count__16670 = G__16764;
i__16671 = G__16765;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__16684 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16685 = null;
var count__16686 = (0);
var i__16687 = (0);
while(true){
if((i__16687 < count__16686)){
var vec__16694 = chunk__16685.cljs$core$IIndexed$_nth$arity$2(null,i__16687);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16694,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16694,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16767 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16767)){
var effect_fn_16768 = temp__5802__auto___16767;
(effect_fn_16768.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16768.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16768.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16769 = seq__16684;
var G__16770 = chunk__16685;
var G__16771 = count__16686;
var G__16772 = (i__16687 + (1));
seq__16684 = G__16769;
chunk__16685 = G__16770;
count__16686 = G__16771;
i__16687 = G__16772;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16684);
if(temp__5804__auto__){
var seq__16684__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16684__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16684__$1);
var G__16773 = cljs.core.chunk_rest(seq__16684__$1);
var G__16774 = c__5568__auto__;
var G__16775 = cljs.core.count(c__5568__auto__);
var G__16776 = (0);
seq__16684 = G__16773;
chunk__16685 = G__16774;
count__16686 = G__16775;
i__16687 = G__16776;
continue;
} else {
var vec__16697 = cljs.core.first(seq__16684__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16697,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16697,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16778 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16778)){
var effect_fn_16779 = temp__5802__auto___16778;
(effect_fn_16779.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16779.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16779.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16780 = cljs.core.next(seq__16684__$1);
var G__16781 = null;
var G__16782 = (0);
var G__16783 = (0);
seq__16684 = G__16780;
chunk__16685 = G__16781;
count__16686 = G__16782;
i__16687 = G__16783;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__16700 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16701 = null;
var count__16702 = (0);
var i__16703 = (0);
while(true){
if((i__16703 < count__16702)){
var event = chunk__16701.cljs$core$IIndexed$_nth$arity$2(null,i__16703);
re_frame.router.dispatch(event);


var G__16786 = seq__16700;
var G__16787 = chunk__16701;
var G__16788 = count__16702;
var G__16789 = (i__16703 + (1));
seq__16700 = G__16786;
chunk__16701 = G__16787;
count__16702 = G__16788;
i__16703 = G__16789;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16700);
if(temp__5804__auto__){
var seq__16700__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16700__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16700__$1);
var G__16790 = cljs.core.chunk_rest(seq__16700__$1);
var G__16791 = c__5568__auto__;
var G__16792 = cljs.core.count(c__5568__auto__);
var G__16793 = (0);
seq__16700 = G__16790;
chunk__16701 = G__16791;
count__16702 = G__16792;
i__16703 = G__16793;
continue;
} else {
var event = cljs.core.first(seq__16700__$1);
re_frame.router.dispatch(event);


var G__16794 = cljs.core.next(seq__16700__$1);
var G__16795 = null;
var G__16796 = (0);
var G__16797 = (0);
seq__16700 = G__16794;
chunk__16701 = G__16795;
count__16702 = G__16796;
i__16703 = G__16797;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__16705 = cljs.core.seq(value);
var chunk__16706 = null;
var count__16707 = (0);
var i__16708 = (0);
while(true){
if((i__16708 < count__16707)){
var event = chunk__16706.cljs$core$IIndexed$_nth$arity$2(null,i__16708);
clear_event(event);


var G__16802 = seq__16705;
var G__16803 = chunk__16706;
var G__16804 = count__16707;
var G__16805 = (i__16708 + (1));
seq__16705 = G__16802;
chunk__16706 = G__16803;
count__16707 = G__16804;
i__16708 = G__16805;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16705);
if(temp__5804__auto__){
var seq__16705__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16705__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16705__$1);
var G__16806 = cljs.core.chunk_rest(seq__16705__$1);
var G__16807 = c__5568__auto__;
var G__16808 = cljs.core.count(c__5568__auto__);
var G__16809 = (0);
seq__16705 = G__16806;
chunk__16706 = G__16807;
count__16707 = G__16808;
i__16708 = G__16809;
continue;
} else {
var event = cljs.core.first(seq__16705__$1);
clear_event(event);


var G__16810 = cljs.core.next(seq__16705__$1);
var G__16811 = null;
var G__16812 = (0);
var G__16813 = (0);
seq__16705 = G__16810;
chunk__16706 = G__16811;
count__16707 = G__16812;
i__16708 = G__16813;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
