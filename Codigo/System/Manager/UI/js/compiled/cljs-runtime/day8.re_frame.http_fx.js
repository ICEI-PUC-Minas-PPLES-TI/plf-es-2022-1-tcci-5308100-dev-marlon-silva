goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__23913){
var vec__23914 = p__23913;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23914,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23914,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__23920){
var map__23921 = p__23920;
var map__23921__$1 = cljs.core.__destructure_map(map__23921);
var request = map__23921__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23921__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23921__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__23918_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__23918_SHARP_));
}),(function (p1__23919_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__23919_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"on-request","on-request",972531605)], 0));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5802__auto__ = new cljs.core.Keyword(null,"on-request","on-request",972531605).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto__)){
var on_request = temp__5802__auto__;
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__23929 = cljs.core.seq(seq_request_maps);
var chunk__23930 = null;
var count__23931 = (0);
var i__23932 = (0);
while(true){
if((i__23932 < count__23931)){
var request__$1 = chunk__23930.cljs$core$IIndexed$_nth$arity$2(null,i__23932);
var xhrio_23959 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_23959);


var G__23960 = seq__23929;
var G__23961 = chunk__23930;
var G__23962 = count__23931;
var G__23963 = (i__23932 + (1));
seq__23929 = G__23960;
chunk__23930 = G__23961;
count__23931 = G__23962;
i__23932 = G__23963;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23929);
if(temp__5804__auto__){
var seq__23929__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23929__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23929__$1);
var G__23994 = cljs.core.chunk_rest(seq__23929__$1);
var G__23995 = c__5568__auto__;
var G__23996 = cljs.core.count(c__5568__auto__);
var G__23997 = (0);
seq__23929 = G__23994;
chunk__23930 = G__23995;
count__23931 = G__23996;
i__23932 = G__23997;
continue;
} else {
var request__$1 = cljs.core.first(seq__23929__$1);
var xhrio_23998 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_23998);


var G__23999 = cljs.core.next(seq__23929__$1);
var G__24000 = null;
var G__24001 = (0);
var G__24002 = (0);
seq__23929 = G__23999;
chunk__23930 = G__24000;
count__23931 = G__24001;
i__23932 = G__24002;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
