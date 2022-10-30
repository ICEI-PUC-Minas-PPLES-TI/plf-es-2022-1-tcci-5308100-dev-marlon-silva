goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28254 = arguments.length;
var i__5770__auto___28255 = (0);
while(true){
if((i__5770__auto___28255 < len__5769__auto___28254)){
args__5775__auto__.push((arguments[i__5770__auto___28255]));

var G__28256 = (i__5770__auto___28255 + (1));
i__5770__auto___28255 = G__28256;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq27964){
var G__27965 = cljs.core.first(seq27964);
var seq27964__$1 = cljs.core.next(seq27964);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27965,seq27964__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__27969 = cljs.core.seq(sources);
var chunk__27970 = null;
var count__27971 = (0);
var i__27972 = (0);
while(true){
if((i__27972 < count__27971)){
var map__27982 = chunk__27970.cljs$core$IIndexed$_nth$arity$2(null,i__27972);
var map__27982__$1 = cljs.core.__destructure_map(map__27982);
var src = map__27982__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27982__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27982__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27982__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27982__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e27983){var e_28257 = e27983;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_28257);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_28257.message)].join('')));
}

var G__28258 = seq__27969;
var G__28259 = chunk__27970;
var G__28260 = count__27971;
var G__28261 = (i__27972 + (1));
seq__27969 = G__28258;
chunk__27970 = G__28259;
count__27971 = G__28260;
i__27972 = G__28261;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27969);
if(temp__5804__auto__){
var seq__27969__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27969__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27969__$1);
var G__28262 = cljs.core.chunk_rest(seq__27969__$1);
var G__28263 = c__5568__auto__;
var G__28264 = cljs.core.count(c__5568__auto__);
var G__28265 = (0);
seq__27969 = G__28262;
chunk__27970 = G__28263;
count__27971 = G__28264;
i__27972 = G__28265;
continue;
} else {
var map__27984 = cljs.core.first(seq__27969__$1);
var map__27984__$1 = cljs.core.__destructure_map(map__27984);
var src = map__27984__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27984__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27984__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27984__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27984__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e27985){var e_28266 = e27985;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_28266);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_28266.message)].join('')));
}

var G__28267 = cljs.core.next(seq__27969__$1);
var G__28268 = null;
var G__28269 = (0);
var G__28270 = (0);
seq__27969 = G__28267;
chunk__27970 = G__28268;
count__27971 = G__28269;
i__27972 = G__28270;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__27987 = cljs.core.seq(js_requires);
var chunk__27988 = null;
var count__27989 = (0);
var i__27990 = (0);
while(true){
if((i__27990 < count__27989)){
var js_ns = chunk__27988.cljs$core$IIndexed$_nth$arity$2(null,i__27990);
var require_str_28271 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_28271);


var G__28272 = seq__27987;
var G__28273 = chunk__27988;
var G__28274 = count__27989;
var G__28275 = (i__27990 + (1));
seq__27987 = G__28272;
chunk__27988 = G__28273;
count__27989 = G__28274;
i__27990 = G__28275;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27987);
if(temp__5804__auto__){
var seq__27987__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27987__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27987__$1);
var G__28276 = cljs.core.chunk_rest(seq__27987__$1);
var G__28277 = c__5568__auto__;
var G__28278 = cljs.core.count(c__5568__auto__);
var G__28279 = (0);
seq__27987 = G__28276;
chunk__27988 = G__28277;
count__27989 = G__28278;
i__27990 = G__28279;
continue;
} else {
var js_ns = cljs.core.first(seq__27987__$1);
var require_str_28280 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_28280);


var G__28281 = cljs.core.next(seq__27987__$1);
var G__28282 = null;
var G__28283 = (0);
var G__28284 = (0);
seq__27987 = G__28281;
chunk__27988 = G__28282;
count__27989 = G__28283;
i__27990 = G__28284;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__27993){
var map__27994 = p__27993;
var map__27994__$1 = cljs.core.__destructure_map(map__27994);
var msg = map__27994__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27994__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27994__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27995(s__27996){
return (new cljs.core.LazySeq(null,(function (){
var s__27996__$1 = s__27996;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27996__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__28001 = cljs.core.first(xs__6360__auto__);
var map__28001__$1 = cljs.core.__destructure_map(map__28001);
var src = map__28001__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28001__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28001__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__27996__$1,map__28001,map__28001__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__27994,map__27994__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27995_$_iter__27997(s__27998){
return (new cljs.core.LazySeq(null,((function (s__27996__$1,map__28001,map__28001__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__27994,map__27994__$1,msg,info,reload_info){
return (function (){
var s__27998__$1 = s__27998;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27998__$1);
if(temp__5804__auto____$1){
var s__27998__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27998__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27998__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__28000 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27999 = (0);
while(true){
if((i__27999 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__27999);
cljs.core.chunk_append(b__28000,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__28285 = (i__27999 + (1));
i__27999 = G__28285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28000),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27995_$_iter__27997(cljs.core.chunk_rest(s__27998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28000),null);
}
} else {
var warning = cljs.core.first(s__27998__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27995_$_iter__27997(cljs.core.rest(s__27998__$2)));
}
} else {
return null;
}
break;
}
});})(s__27996__$1,map__28001,map__28001__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__27994,map__27994__$1,msg,info,reload_info))
,null,null));
});})(s__27996__$1,map__28001,map__28001__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__27994,map__27994__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27995(cljs.core.rest(s__27996__$1)));
} else {
var G__28286 = cljs.core.rest(s__27996__$1);
s__27996__$1 = G__28286;
continue;
}
} else {
var G__28287 = cljs.core.rest(s__27996__$1);
s__27996__$1 = G__28287;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__28002_28288 = cljs.core.seq(warnings);
var chunk__28003_28289 = null;
var count__28004_28290 = (0);
var i__28005_28291 = (0);
while(true){
if((i__28005_28291 < count__28004_28290)){
var map__28008_28292 = chunk__28003_28289.cljs$core$IIndexed$_nth$arity$2(null,i__28005_28291);
var map__28008_28293__$1 = cljs.core.__destructure_map(map__28008_28292);
var w_28294 = map__28008_28293__$1;
var msg_28295__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28008_28293__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_28296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28008_28293__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28008_28293__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_28298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28008_28293__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_28298)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_28296),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_28297),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_28295__$1)].join(''));


var G__28299 = seq__28002_28288;
var G__28300 = chunk__28003_28289;
var G__28301 = count__28004_28290;
var G__28302 = (i__28005_28291 + (1));
seq__28002_28288 = G__28299;
chunk__28003_28289 = G__28300;
count__28004_28290 = G__28301;
i__28005_28291 = G__28302;
continue;
} else {
var temp__5804__auto___28303 = cljs.core.seq(seq__28002_28288);
if(temp__5804__auto___28303){
var seq__28002_28304__$1 = temp__5804__auto___28303;
if(cljs.core.chunked_seq_QMARK_(seq__28002_28304__$1)){
var c__5568__auto___28305 = cljs.core.chunk_first(seq__28002_28304__$1);
var G__28306 = cljs.core.chunk_rest(seq__28002_28304__$1);
var G__28307 = c__5568__auto___28305;
var G__28308 = cljs.core.count(c__5568__auto___28305);
var G__28309 = (0);
seq__28002_28288 = G__28306;
chunk__28003_28289 = G__28307;
count__28004_28290 = G__28308;
i__28005_28291 = G__28309;
continue;
} else {
var map__28009_28310 = cljs.core.first(seq__28002_28304__$1);
var map__28009_28311__$1 = cljs.core.__destructure_map(map__28009_28310);
var w_28312 = map__28009_28311__$1;
var msg_28313__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28009_28311__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_28314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28009_28311__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28009_28311__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_28316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28009_28311__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_28316)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_28314),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_28315),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_28313__$1)].join(''));


var G__28317 = cljs.core.next(seq__28002_28304__$1);
var G__28318 = null;
var G__28319 = (0);
var G__28320 = (0);
seq__28002_28288 = G__28317;
chunk__28003_28289 = G__28318;
count__28004_28290 = G__28319;
i__28005_28291 = G__28320;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__27992_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__27992_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__28010){
var map__28011 = p__28010;
var map__28011__$1 = cljs.core.__destructure_map(map__28011);
var msg = map__28011__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28011__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28011__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__28012 = cljs.core.seq(updates);
var chunk__28014 = null;
var count__28015 = (0);
var i__28016 = (0);
while(true){
if((i__28016 < count__28015)){
var path = chunk__28014.cljs$core$IIndexed$_nth$arity$2(null,i__28016);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__28126_28321 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__28130_28322 = null;
var count__28131_28323 = (0);
var i__28132_28324 = (0);
while(true){
if((i__28132_28324 < count__28131_28323)){
var node_28325 = chunk__28130_28322.cljs$core$IIndexed$_nth$arity$2(null,i__28132_28324);
if(cljs.core.not(node_28325.shadow$old)){
var path_match_28326 = shadow.cljs.devtools.client.browser.match_paths(node_28325.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28326)){
var new_link_28327 = (function (){var G__28158 = node_28325.cloneNode(true);
G__28158.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28326),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28158;
})();
(node_28325.shadow$old = true);

(new_link_28327.onload = ((function (seq__28126_28321,chunk__28130_28322,count__28131_28323,i__28132_28324,seq__28012,chunk__28014,count__28015,i__28016,new_link_28327,path_match_28326,node_28325,path,map__28011,map__28011__$1,msg,updates,reload_info){
return (function (e){
var seq__28159_28328 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28161_28329 = null;
var count__28162_28330 = (0);
var i__28163_28331 = (0);
while(true){
if((i__28163_28331 < count__28162_28330)){
var map__28167_28332 = chunk__28161_28329.cljs$core$IIndexed$_nth$arity$2(null,i__28163_28331);
var map__28167_28333__$1 = cljs.core.__destructure_map(map__28167_28332);
var task_28334 = map__28167_28333__$1;
var fn_str_28335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28167_28333__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28167_28333__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28337 = goog.getObjectByName(fn_str_28335,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28336)].join(''));

(fn_obj_28337.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28337.cljs$core$IFn$_invoke$arity$2(path,new_link_28327) : fn_obj_28337.call(null,path,new_link_28327));


var G__28338 = seq__28159_28328;
var G__28339 = chunk__28161_28329;
var G__28340 = count__28162_28330;
var G__28341 = (i__28163_28331 + (1));
seq__28159_28328 = G__28338;
chunk__28161_28329 = G__28339;
count__28162_28330 = G__28340;
i__28163_28331 = G__28341;
continue;
} else {
var temp__5804__auto___28342 = cljs.core.seq(seq__28159_28328);
if(temp__5804__auto___28342){
var seq__28159_28343__$1 = temp__5804__auto___28342;
if(cljs.core.chunked_seq_QMARK_(seq__28159_28343__$1)){
var c__5568__auto___28344 = cljs.core.chunk_first(seq__28159_28343__$1);
var G__28345 = cljs.core.chunk_rest(seq__28159_28343__$1);
var G__28346 = c__5568__auto___28344;
var G__28347 = cljs.core.count(c__5568__auto___28344);
var G__28348 = (0);
seq__28159_28328 = G__28345;
chunk__28161_28329 = G__28346;
count__28162_28330 = G__28347;
i__28163_28331 = G__28348;
continue;
} else {
var map__28168_28349 = cljs.core.first(seq__28159_28343__$1);
var map__28168_28350__$1 = cljs.core.__destructure_map(map__28168_28349);
var task_28351 = map__28168_28350__$1;
var fn_str_28352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28168_28350__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28168_28350__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28354 = goog.getObjectByName(fn_str_28352,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28353)].join(''));

(fn_obj_28354.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28354.cljs$core$IFn$_invoke$arity$2(path,new_link_28327) : fn_obj_28354.call(null,path,new_link_28327));


var G__28355 = cljs.core.next(seq__28159_28343__$1);
var G__28356 = null;
var G__28357 = (0);
var G__28358 = (0);
seq__28159_28328 = G__28355;
chunk__28161_28329 = G__28356;
count__28162_28330 = G__28357;
i__28163_28331 = G__28358;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28325);
});})(seq__28126_28321,chunk__28130_28322,count__28131_28323,i__28132_28324,seq__28012,chunk__28014,count__28015,i__28016,new_link_28327,path_match_28326,node_28325,path,map__28011,map__28011__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28326], 0));

goog.dom.insertSiblingAfter(new_link_28327,node_28325);


var G__28359 = seq__28126_28321;
var G__28360 = chunk__28130_28322;
var G__28361 = count__28131_28323;
var G__28362 = (i__28132_28324 + (1));
seq__28126_28321 = G__28359;
chunk__28130_28322 = G__28360;
count__28131_28323 = G__28361;
i__28132_28324 = G__28362;
continue;
} else {
var G__28363 = seq__28126_28321;
var G__28364 = chunk__28130_28322;
var G__28365 = count__28131_28323;
var G__28366 = (i__28132_28324 + (1));
seq__28126_28321 = G__28363;
chunk__28130_28322 = G__28364;
count__28131_28323 = G__28365;
i__28132_28324 = G__28366;
continue;
}
} else {
var G__28367 = seq__28126_28321;
var G__28368 = chunk__28130_28322;
var G__28369 = count__28131_28323;
var G__28370 = (i__28132_28324 + (1));
seq__28126_28321 = G__28367;
chunk__28130_28322 = G__28368;
count__28131_28323 = G__28369;
i__28132_28324 = G__28370;
continue;
}
} else {
var temp__5804__auto___28371 = cljs.core.seq(seq__28126_28321);
if(temp__5804__auto___28371){
var seq__28126_28372__$1 = temp__5804__auto___28371;
if(cljs.core.chunked_seq_QMARK_(seq__28126_28372__$1)){
var c__5568__auto___28373 = cljs.core.chunk_first(seq__28126_28372__$1);
var G__28374 = cljs.core.chunk_rest(seq__28126_28372__$1);
var G__28375 = c__5568__auto___28373;
var G__28376 = cljs.core.count(c__5568__auto___28373);
var G__28377 = (0);
seq__28126_28321 = G__28374;
chunk__28130_28322 = G__28375;
count__28131_28323 = G__28376;
i__28132_28324 = G__28377;
continue;
} else {
var node_28378 = cljs.core.first(seq__28126_28372__$1);
if(cljs.core.not(node_28378.shadow$old)){
var path_match_28379 = shadow.cljs.devtools.client.browser.match_paths(node_28378.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28379)){
var new_link_28380 = (function (){var G__28169 = node_28378.cloneNode(true);
G__28169.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28379),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28169;
})();
(node_28378.shadow$old = true);

(new_link_28380.onload = ((function (seq__28126_28321,chunk__28130_28322,count__28131_28323,i__28132_28324,seq__28012,chunk__28014,count__28015,i__28016,new_link_28380,path_match_28379,node_28378,seq__28126_28372__$1,temp__5804__auto___28371,path,map__28011,map__28011__$1,msg,updates,reload_info){
return (function (e){
var seq__28170_28381 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28172_28382 = null;
var count__28173_28383 = (0);
var i__28174_28384 = (0);
while(true){
if((i__28174_28384 < count__28173_28383)){
var map__28178_28385 = chunk__28172_28382.cljs$core$IIndexed$_nth$arity$2(null,i__28174_28384);
var map__28178_28386__$1 = cljs.core.__destructure_map(map__28178_28385);
var task_28387 = map__28178_28386__$1;
var fn_str_28388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28178_28386__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28178_28386__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28390 = goog.getObjectByName(fn_str_28388,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28389)].join(''));

(fn_obj_28390.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28390.cljs$core$IFn$_invoke$arity$2(path,new_link_28380) : fn_obj_28390.call(null,path,new_link_28380));


var G__28391 = seq__28170_28381;
var G__28392 = chunk__28172_28382;
var G__28393 = count__28173_28383;
var G__28394 = (i__28174_28384 + (1));
seq__28170_28381 = G__28391;
chunk__28172_28382 = G__28392;
count__28173_28383 = G__28393;
i__28174_28384 = G__28394;
continue;
} else {
var temp__5804__auto___28395__$1 = cljs.core.seq(seq__28170_28381);
if(temp__5804__auto___28395__$1){
var seq__28170_28396__$1 = temp__5804__auto___28395__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28170_28396__$1)){
var c__5568__auto___28397 = cljs.core.chunk_first(seq__28170_28396__$1);
var G__28398 = cljs.core.chunk_rest(seq__28170_28396__$1);
var G__28399 = c__5568__auto___28397;
var G__28400 = cljs.core.count(c__5568__auto___28397);
var G__28401 = (0);
seq__28170_28381 = G__28398;
chunk__28172_28382 = G__28399;
count__28173_28383 = G__28400;
i__28174_28384 = G__28401;
continue;
} else {
var map__28179_28402 = cljs.core.first(seq__28170_28396__$1);
var map__28179_28403__$1 = cljs.core.__destructure_map(map__28179_28402);
var task_28404 = map__28179_28403__$1;
var fn_str_28405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28179_28403__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28179_28403__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28407 = goog.getObjectByName(fn_str_28405,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28406)].join(''));

(fn_obj_28407.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28407.cljs$core$IFn$_invoke$arity$2(path,new_link_28380) : fn_obj_28407.call(null,path,new_link_28380));


var G__28408 = cljs.core.next(seq__28170_28396__$1);
var G__28409 = null;
var G__28410 = (0);
var G__28411 = (0);
seq__28170_28381 = G__28408;
chunk__28172_28382 = G__28409;
count__28173_28383 = G__28410;
i__28174_28384 = G__28411;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28378);
});})(seq__28126_28321,chunk__28130_28322,count__28131_28323,i__28132_28324,seq__28012,chunk__28014,count__28015,i__28016,new_link_28380,path_match_28379,node_28378,seq__28126_28372__$1,temp__5804__auto___28371,path,map__28011,map__28011__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28379], 0));

goog.dom.insertSiblingAfter(new_link_28380,node_28378);


var G__28412 = cljs.core.next(seq__28126_28372__$1);
var G__28413 = null;
var G__28414 = (0);
var G__28415 = (0);
seq__28126_28321 = G__28412;
chunk__28130_28322 = G__28413;
count__28131_28323 = G__28414;
i__28132_28324 = G__28415;
continue;
} else {
var G__28416 = cljs.core.next(seq__28126_28372__$1);
var G__28417 = null;
var G__28418 = (0);
var G__28419 = (0);
seq__28126_28321 = G__28416;
chunk__28130_28322 = G__28417;
count__28131_28323 = G__28418;
i__28132_28324 = G__28419;
continue;
}
} else {
var G__28420 = cljs.core.next(seq__28126_28372__$1);
var G__28421 = null;
var G__28422 = (0);
var G__28423 = (0);
seq__28126_28321 = G__28420;
chunk__28130_28322 = G__28421;
count__28131_28323 = G__28422;
i__28132_28324 = G__28423;
continue;
}
}
} else {
}
}
break;
}


var G__28424 = seq__28012;
var G__28425 = chunk__28014;
var G__28426 = count__28015;
var G__28427 = (i__28016 + (1));
seq__28012 = G__28424;
chunk__28014 = G__28425;
count__28015 = G__28426;
i__28016 = G__28427;
continue;
} else {
var G__28428 = seq__28012;
var G__28429 = chunk__28014;
var G__28430 = count__28015;
var G__28431 = (i__28016 + (1));
seq__28012 = G__28428;
chunk__28014 = G__28429;
count__28015 = G__28430;
i__28016 = G__28431;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28012);
if(temp__5804__auto__){
var seq__28012__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28012__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28012__$1);
var G__28432 = cljs.core.chunk_rest(seq__28012__$1);
var G__28433 = c__5568__auto__;
var G__28434 = cljs.core.count(c__5568__auto__);
var G__28435 = (0);
seq__28012 = G__28432;
chunk__28014 = G__28433;
count__28015 = G__28434;
i__28016 = G__28435;
continue;
} else {
var path = cljs.core.first(seq__28012__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__28180_28436 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__28184_28437 = null;
var count__28185_28438 = (0);
var i__28186_28439 = (0);
while(true){
if((i__28186_28439 < count__28185_28438)){
var node_28440 = chunk__28184_28437.cljs$core$IIndexed$_nth$arity$2(null,i__28186_28439);
if(cljs.core.not(node_28440.shadow$old)){
var path_match_28441 = shadow.cljs.devtools.client.browser.match_paths(node_28440.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28441)){
var new_link_28442 = (function (){var G__28212 = node_28440.cloneNode(true);
G__28212.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28441),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28212;
})();
(node_28440.shadow$old = true);

(new_link_28442.onload = ((function (seq__28180_28436,chunk__28184_28437,count__28185_28438,i__28186_28439,seq__28012,chunk__28014,count__28015,i__28016,new_link_28442,path_match_28441,node_28440,path,seq__28012__$1,temp__5804__auto__,map__28011,map__28011__$1,msg,updates,reload_info){
return (function (e){
var seq__28213_28443 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28215_28444 = null;
var count__28216_28445 = (0);
var i__28217_28446 = (0);
while(true){
if((i__28217_28446 < count__28216_28445)){
var map__28221_28447 = chunk__28215_28444.cljs$core$IIndexed$_nth$arity$2(null,i__28217_28446);
var map__28221_28448__$1 = cljs.core.__destructure_map(map__28221_28447);
var task_28449 = map__28221_28448__$1;
var fn_str_28450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28221_28448__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28221_28448__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28452 = goog.getObjectByName(fn_str_28450,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28451)].join(''));

(fn_obj_28452.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28452.cljs$core$IFn$_invoke$arity$2(path,new_link_28442) : fn_obj_28452.call(null,path,new_link_28442));


var G__28453 = seq__28213_28443;
var G__28454 = chunk__28215_28444;
var G__28455 = count__28216_28445;
var G__28456 = (i__28217_28446 + (1));
seq__28213_28443 = G__28453;
chunk__28215_28444 = G__28454;
count__28216_28445 = G__28455;
i__28217_28446 = G__28456;
continue;
} else {
var temp__5804__auto___28457__$1 = cljs.core.seq(seq__28213_28443);
if(temp__5804__auto___28457__$1){
var seq__28213_28458__$1 = temp__5804__auto___28457__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28213_28458__$1)){
var c__5568__auto___28459 = cljs.core.chunk_first(seq__28213_28458__$1);
var G__28460 = cljs.core.chunk_rest(seq__28213_28458__$1);
var G__28461 = c__5568__auto___28459;
var G__28462 = cljs.core.count(c__5568__auto___28459);
var G__28463 = (0);
seq__28213_28443 = G__28460;
chunk__28215_28444 = G__28461;
count__28216_28445 = G__28462;
i__28217_28446 = G__28463;
continue;
} else {
var map__28222_28464 = cljs.core.first(seq__28213_28458__$1);
var map__28222_28465__$1 = cljs.core.__destructure_map(map__28222_28464);
var task_28466 = map__28222_28465__$1;
var fn_str_28467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222_28465__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222_28465__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28469 = goog.getObjectByName(fn_str_28467,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28468)].join(''));

(fn_obj_28469.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28469.cljs$core$IFn$_invoke$arity$2(path,new_link_28442) : fn_obj_28469.call(null,path,new_link_28442));


var G__28470 = cljs.core.next(seq__28213_28458__$1);
var G__28471 = null;
var G__28472 = (0);
var G__28473 = (0);
seq__28213_28443 = G__28470;
chunk__28215_28444 = G__28471;
count__28216_28445 = G__28472;
i__28217_28446 = G__28473;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28440);
});})(seq__28180_28436,chunk__28184_28437,count__28185_28438,i__28186_28439,seq__28012,chunk__28014,count__28015,i__28016,new_link_28442,path_match_28441,node_28440,path,seq__28012__$1,temp__5804__auto__,map__28011,map__28011__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28441], 0));

goog.dom.insertSiblingAfter(new_link_28442,node_28440);


var G__28474 = seq__28180_28436;
var G__28475 = chunk__28184_28437;
var G__28476 = count__28185_28438;
var G__28477 = (i__28186_28439 + (1));
seq__28180_28436 = G__28474;
chunk__28184_28437 = G__28475;
count__28185_28438 = G__28476;
i__28186_28439 = G__28477;
continue;
} else {
var G__28478 = seq__28180_28436;
var G__28479 = chunk__28184_28437;
var G__28480 = count__28185_28438;
var G__28481 = (i__28186_28439 + (1));
seq__28180_28436 = G__28478;
chunk__28184_28437 = G__28479;
count__28185_28438 = G__28480;
i__28186_28439 = G__28481;
continue;
}
} else {
var G__28482 = seq__28180_28436;
var G__28483 = chunk__28184_28437;
var G__28484 = count__28185_28438;
var G__28485 = (i__28186_28439 + (1));
seq__28180_28436 = G__28482;
chunk__28184_28437 = G__28483;
count__28185_28438 = G__28484;
i__28186_28439 = G__28485;
continue;
}
} else {
var temp__5804__auto___28486__$1 = cljs.core.seq(seq__28180_28436);
if(temp__5804__auto___28486__$1){
var seq__28180_28487__$1 = temp__5804__auto___28486__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28180_28487__$1)){
var c__5568__auto___28488 = cljs.core.chunk_first(seq__28180_28487__$1);
var G__28489 = cljs.core.chunk_rest(seq__28180_28487__$1);
var G__28490 = c__5568__auto___28488;
var G__28491 = cljs.core.count(c__5568__auto___28488);
var G__28492 = (0);
seq__28180_28436 = G__28489;
chunk__28184_28437 = G__28490;
count__28185_28438 = G__28491;
i__28186_28439 = G__28492;
continue;
} else {
var node_28493 = cljs.core.first(seq__28180_28487__$1);
if(cljs.core.not(node_28493.shadow$old)){
var path_match_28494 = shadow.cljs.devtools.client.browser.match_paths(node_28493.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28494)){
var new_link_28495 = (function (){var G__28223 = node_28493.cloneNode(true);
G__28223.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28494),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28223;
})();
(node_28493.shadow$old = true);

(new_link_28495.onload = ((function (seq__28180_28436,chunk__28184_28437,count__28185_28438,i__28186_28439,seq__28012,chunk__28014,count__28015,i__28016,new_link_28495,path_match_28494,node_28493,seq__28180_28487__$1,temp__5804__auto___28486__$1,path,seq__28012__$1,temp__5804__auto__,map__28011,map__28011__$1,msg,updates,reload_info){
return (function (e){
var seq__28224_28496 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28226_28497 = null;
var count__28227_28498 = (0);
var i__28228_28499 = (0);
while(true){
if((i__28228_28499 < count__28227_28498)){
var map__28232_28500 = chunk__28226_28497.cljs$core$IIndexed$_nth$arity$2(null,i__28228_28499);
var map__28232_28501__$1 = cljs.core.__destructure_map(map__28232_28500);
var task_28502 = map__28232_28501__$1;
var fn_str_28503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28232_28501__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28232_28501__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28505 = goog.getObjectByName(fn_str_28503,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28504)].join(''));

(fn_obj_28505.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28505.cljs$core$IFn$_invoke$arity$2(path,new_link_28495) : fn_obj_28505.call(null,path,new_link_28495));


var G__28506 = seq__28224_28496;
var G__28507 = chunk__28226_28497;
var G__28508 = count__28227_28498;
var G__28509 = (i__28228_28499 + (1));
seq__28224_28496 = G__28506;
chunk__28226_28497 = G__28507;
count__28227_28498 = G__28508;
i__28228_28499 = G__28509;
continue;
} else {
var temp__5804__auto___28510__$2 = cljs.core.seq(seq__28224_28496);
if(temp__5804__auto___28510__$2){
var seq__28224_28511__$1 = temp__5804__auto___28510__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28224_28511__$1)){
var c__5568__auto___28512 = cljs.core.chunk_first(seq__28224_28511__$1);
var G__28513 = cljs.core.chunk_rest(seq__28224_28511__$1);
var G__28514 = c__5568__auto___28512;
var G__28515 = cljs.core.count(c__5568__auto___28512);
var G__28516 = (0);
seq__28224_28496 = G__28513;
chunk__28226_28497 = G__28514;
count__28227_28498 = G__28515;
i__28228_28499 = G__28516;
continue;
} else {
var map__28233_28517 = cljs.core.first(seq__28224_28511__$1);
var map__28233_28518__$1 = cljs.core.__destructure_map(map__28233_28517);
var task_28519 = map__28233_28518__$1;
var fn_str_28520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28233_28518__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28233_28518__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28522 = goog.getObjectByName(fn_str_28520,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28521)].join(''));

(fn_obj_28522.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28522.cljs$core$IFn$_invoke$arity$2(path,new_link_28495) : fn_obj_28522.call(null,path,new_link_28495));


var G__28523 = cljs.core.next(seq__28224_28511__$1);
var G__28524 = null;
var G__28525 = (0);
var G__28526 = (0);
seq__28224_28496 = G__28523;
chunk__28226_28497 = G__28524;
count__28227_28498 = G__28525;
i__28228_28499 = G__28526;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28493);
});})(seq__28180_28436,chunk__28184_28437,count__28185_28438,i__28186_28439,seq__28012,chunk__28014,count__28015,i__28016,new_link_28495,path_match_28494,node_28493,seq__28180_28487__$1,temp__5804__auto___28486__$1,path,seq__28012__$1,temp__5804__auto__,map__28011,map__28011__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28494], 0));

goog.dom.insertSiblingAfter(new_link_28495,node_28493);


var G__28527 = cljs.core.next(seq__28180_28487__$1);
var G__28528 = null;
var G__28529 = (0);
var G__28530 = (0);
seq__28180_28436 = G__28527;
chunk__28184_28437 = G__28528;
count__28185_28438 = G__28529;
i__28186_28439 = G__28530;
continue;
} else {
var G__28531 = cljs.core.next(seq__28180_28487__$1);
var G__28532 = null;
var G__28533 = (0);
var G__28534 = (0);
seq__28180_28436 = G__28531;
chunk__28184_28437 = G__28532;
count__28185_28438 = G__28533;
i__28186_28439 = G__28534;
continue;
}
} else {
var G__28535 = cljs.core.next(seq__28180_28487__$1);
var G__28536 = null;
var G__28537 = (0);
var G__28538 = (0);
seq__28180_28436 = G__28535;
chunk__28184_28437 = G__28536;
count__28185_28438 = G__28537;
i__28186_28439 = G__28538;
continue;
}
}
} else {
}
}
break;
}


var G__28539 = cljs.core.next(seq__28012__$1);
var G__28540 = null;
var G__28541 = (0);
var G__28542 = (0);
seq__28012 = G__28539;
chunk__28014 = G__28540;
count__28015 = G__28541;
i__28016 = G__28542;
continue;
} else {
var G__28543 = cljs.core.next(seq__28012__$1);
var G__28544 = null;
var G__28545 = (0);
var G__28546 = (0);
seq__28012 = G__28543;
chunk__28014 = G__28544;
count__28015 = G__28545;
i__28016 = G__28546;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__28234){
var map__28235 = p__28234;
var map__28235__$1 = cljs.core.__destructure_map(map__28235);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28235__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__28236){
var map__28237 = p__28236;
var map__28237__$1 = cljs.core.__destructure_map(map__28237);
var _ = map__28237__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28237__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__28238,done,error){
var map__28239 = p__28238;
var map__28239__$1 = cljs.core.__destructure_map(map__28239);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28239__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__28240,done,error){
var map__28241 = p__28240;
var map__28241__$1 = cljs.core.__destructure_map(map__28241);
var msg = map__28241__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28241__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28241__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28241__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__28242){
var map__28243 = p__28242;
var map__28243__$1 = cljs.core.__destructure_map(map__28243);
var src = map__28243__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28243__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__28244 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__28244) : done.call(null,G__28244));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__28245){
var map__28246 = p__28245;
var map__28246__$1 = cljs.core.__destructure_map(map__28246);
var msg__$1 = map__28246__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28246__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e28247){var ex = e28247;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__28248){
var map__28249 = p__28248;
var map__28249__$1 = cljs.core.__destructure_map(map__28249);
var env = map__28249__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28249__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__28250){
var map__28251 = p__28250;
var map__28251__$1 = cljs.core.__destructure_map(map__28251);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28251__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28251__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__28252){
var map__28253 = p__28252;
var map__28253__$1 = cljs.core.__destructure_map(map__28253);
var svc = map__28253__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28253__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
