goog.provide('sci.impl.evaluator');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core. Note: and is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
var xs = cljs.core.next(args__$2);
if(xs){
var G__26318 = xs;
args__$2 = G__26318;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core. Note: or is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
return v;
} else {
var xs = cljs.core.next(args__$2);
if(xs){
var G__26319 = xs;
args__$2 = G__26319;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,bindings,let_bindings,exprs){
var vec__25250 = (function (){var ctx__$1 = ctx;
var bindings__$1 = bindings;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,let_val) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,let_val));
var bindings__$2 = cljs.core._assoc(bindings__$1,let_name,v);
if(cljs.core.not(rest_let_bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,bindings__$2], null);
} else {
var G__26320 = ctx__$1;
var G__26321 = bindings__$2;
var G__26322 = rest_let_bindings;
ctx__$1 = G__26320;
bindings__$1 = G__26321;
let_bindings__$1 = G__26322;
continue;
}
break;
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25250,(0),null);
var bindings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25250,(1),null);
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,e) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__26323 = nexprs;
exprs__$1 = G__26323;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,bindings,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5802__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5802__auto__)){
var mm = temp__5802__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,m) : sci.impl.evaluator.eval.call(null,ctx,bindings,m));
} else {
return m;
}
} else {
return m;
}
})(),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
});
sci.impl.evaluator.eval_map = (function sci$impl$evaluator$eval_map(ctx,bindings,expr){
var temp__5802__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
if(cljs.core.truth_((function (){var G__25262 = new cljs.core.Keyword(null,"eval","eval",-1103567905);
var G__25263 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(m);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25262,G__25263) : sci.impl.utils.kw_identical_QMARK_.call(null,G__25262,G__25263));
})())){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25258_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__25258_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__25258_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25259_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__25259_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__25259_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,bindings,m));
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,init) : sci.impl.evaluator.eval.call(null,ctx,bindings,init));
var m__$1 = (function (){var or__5045__auto__ = m;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(var_name);
}
})();
var m__$2 = sci.impl.evaluator.eval_map(ctx,bindings,m__$1);
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$2));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__25266 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25266,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return G__25266;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__25270 = arguments.length;
switch (G__25270) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__25275 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25275,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25275,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__25285 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25285,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25285,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_default) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_default));
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$){
try{var _STAR_in_try_STAR__orig_val__25300 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__25301 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__25301);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,body) : sci.impl.evaluator.eval.call(null,ctx,bindings,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__25300);
}}catch (e25293){if((e25293 instanceof Error)){
var e = e25293;
var temp__5802__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__5045__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),clazz) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),clazz));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if((clazz instanceof sci.impl.types.EvalFn)){
var c__5078__auto__ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,clazz) : sci.impl.evaluator.eval.call(null,ctx,bindings,clazz));
var x__5079__auto__ = e;
return (x__5079__auto__ instanceof c__5078__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){var G__25294 = ctx;
var G__25295 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c),e);
var G__25296 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25294,G__25295,G__25296) : sci.impl.evaluator.eval.call(null,G__25294,G__25295,G__25296));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__25297 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25297,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25297,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
} else {
throw e25293;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,finally$) : sci.impl.evaluator.eval.call(null,ctx,bindings,finally$));
}});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,bindings,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25302_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__25302_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__25302_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,instance_expr) : sci.impl.evaluator.eval.call(null,ctx,bindings,instance_expr));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.map_QMARK_(instance_expr_STAR_);
if(and__5043__auto__){
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(instance_expr_STAR_));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_str));
} else {
var instance_class = (function (){var or__5045__auto__ = tag_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(ctx);
var allowed_QMARK_ = (function (){var or__5045__auto__ = allowed;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str));
}
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,target_class,method_str);
} else {
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25304_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__25304_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__25304_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__25306 = arguments.length;
switch (G__25306) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4(ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not(env)) || ((!(cljs.core.contains_QMARK_(env,sym)))))){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,sym) : sci.impl.evaluator.eval.call(null,ctx,bindings,sym));
var res = cljs.core.second((function (){var fexpr__25307 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__25307.cljs$core$IFn$_invoke$arity$3 ? fexpr__25307.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__25307.call(null,ctx,sym__$1,false));
})());
if((res instanceof sci.impl.types.EvalFn)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26349 = arguments.length;
var i__5770__auto___26350 = (0);
while(true){
if((i__5770__auto___26350 < len__5769__auto___26349)){
args__5775__auto__.push((arguments[i__5770__auto___26350]));

var G__26351 = (i__5770__auto___26350 + (1));
i__5770__auto___26350 = G__26351;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25308_SHARP_){
if(((cljs.core.seq_QMARK_(p1__25308_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__25308_SHARP_))))){
return cljs.core.second(p1__25308_SHARP_);
} else {
return p1__25308_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__25311 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25311,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25311,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5802__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5802__auto__)){
var clazz = temp__5802__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5802__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5802__auto____$1)){
var rec = temp__5802__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq25309){
var G__25310 = cljs.core.first(seq25309);
var seq25309__$1 = cljs.core.next(seq25309);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25310,seq25309__$1);
}));

/**
 * Note: various arities of do have already been unrolled in the analyzer.
 */
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,bindings,exprs){
var exprs__$1 = cljs.core.seq(exprs);
var exprs__$2 = exprs__$1;
while(true){
if(exprs__$2){
var ret = (function (){var G__25314 = ctx;
var G__25315 = bindings;
var G__25316 = cljs.core.first(exprs__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25314,G__25315,G__25316) : sci.impl.evaluator.eval.call(null,G__25314,G__25315,G__25316));
})();
var temp__5802__auto__ = cljs.core.next(exprs__$2);
if(temp__5802__auto__){
var exprs__$3 = temp__5802__auto__;
var G__26363 = exprs__$3;
exprs__$2 = G__26363;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do);
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__25516 = cljs.core.count(args);
switch (G__25516) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg25323 = (function (){var G__25520 = ctx;
var G__25521 = bindings;
var G__25522 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25520,G__25521,G__25522) : sci.impl.evaluator.eval.call(null,G__25520,G__25521,G__25522));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg25323) : f.call(null,arg25323));

break;
case (2):
var arg25324 = (function (){var G__25526 = ctx;
var G__25527 = bindings;
var G__25528 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25526,G__25527,G__25528) : sci.impl.evaluator.eval.call(null,G__25526,G__25527,G__25528));
})();
var args__$1 = cljs.core.rest(args);
var arg25325 = (function (){var G__25531 = ctx;
var G__25532 = bindings;
var G__25533 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25531,G__25532,G__25533) : sci.impl.evaluator.eval.call(null,G__25531,G__25532,G__25533));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg25324,arg25325) : f.call(null,arg25324,arg25325));

break;
case (3):
var arg25326 = (function (){var G__25535 = ctx;
var G__25536 = bindings;
var G__25537 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25535,G__25536,G__25537) : sci.impl.evaluator.eval.call(null,G__25535,G__25536,G__25537));
})();
var args__$1 = cljs.core.rest(args);
var arg25327 = (function (){var G__25538 = ctx;
var G__25539 = bindings;
var G__25540 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25538,G__25539,G__25540) : sci.impl.evaluator.eval.call(null,G__25538,G__25539,G__25540));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25328 = (function (){var G__25541 = ctx;
var G__25542 = bindings;
var G__25543 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25541,G__25542,G__25543) : sci.impl.evaluator.eval.call(null,G__25541,G__25542,G__25543));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg25326,arg25327,arg25328) : f.call(null,arg25326,arg25327,arg25328));

break;
case (4):
var arg25329 = (function (){var G__25544 = ctx;
var G__25545 = bindings;
var G__25546 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25544,G__25545,G__25546) : sci.impl.evaluator.eval.call(null,G__25544,G__25545,G__25546));
})();
var args__$1 = cljs.core.rest(args);
var arg25330 = (function (){var G__25549 = ctx;
var G__25550 = bindings;
var G__25551 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25549,G__25550,G__25551) : sci.impl.evaluator.eval.call(null,G__25549,G__25550,G__25551));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25331 = (function (){var G__25552 = ctx;
var G__25553 = bindings;
var G__25554 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25552,G__25553,G__25554) : sci.impl.evaluator.eval.call(null,G__25552,G__25553,G__25554));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25332 = (function (){var G__25555 = ctx;
var G__25556 = bindings;
var G__25557 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25555,G__25556,G__25557) : sci.impl.evaluator.eval.call(null,G__25555,G__25556,G__25557));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg25329,arg25330,arg25331,arg25332) : f.call(null,arg25329,arg25330,arg25331,arg25332));

break;
case (5):
var arg25333 = (function (){var G__25559 = ctx;
var G__25560 = bindings;
var G__25561 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25559,G__25560,G__25561) : sci.impl.evaluator.eval.call(null,G__25559,G__25560,G__25561));
})();
var args__$1 = cljs.core.rest(args);
var arg25334 = (function (){var G__25562 = ctx;
var G__25563 = bindings;
var G__25564 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25562,G__25563,G__25564) : sci.impl.evaluator.eval.call(null,G__25562,G__25563,G__25564));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25335 = (function (){var G__25565 = ctx;
var G__25566 = bindings;
var G__25567 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25565,G__25566,G__25567) : sci.impl.evaluator.eval.call(null,G__25565,G__25566,G__25567));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25336 = (function (){var G__25582 = ctx;
var G__25583 = bindings;
var G__25584 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25582,G__25583,G__25584) : sci.impl.evaluator.eval.call(null,G__25582,G__25583,G__25584));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25337 = (function (){var G__25585 = ctx;
var G__25586 = bindings;
var G__25587 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25585,G__25586,G__25587) : sci.impl.evaluator.eval.call(null,G__25585,G__25586,G__25587));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg25333,arg25334,arg25335,arg25336,arg25337) : f.call(null,arg25333,arg25334,arg25335,arg25336,arg25337));

break;
case (6):
var arg25338 = (function (){var G__25590 = ctx;
var G__25591 = bindings;
var G__25592 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25590,G__25591,G__25592) : sci.impl.evaluator.eval.call(null,G__25590,G__25591,G__25592));
})();
var args__$1 = cljs.core.rest(args);
var arg25339 = (function (){var G__25595 = ctx;
var G__25596 = bindings;
var G__25597 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25595,G__25596,G__25597) : sci.impl.evaluator.eval.call(null,G__25595,G__25596,G__25597));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25340 = (function (){var G__25600 = ctx;
var G__25601 = bindings;
var G__25602 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25600,G__25601,G__25602) : sci.impl.evaluator.eval.call(null,G__25600,G__25601,G__25602));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25341 = (function (){var G__25607 = ctx;
var G__25608 = bindings;
var G__25609 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25607,G__25608,G__25609) : sci.impl.evaluator.eval.call(null,G__25607,G__25608,G__25609));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25342 = (function (){var G__25614 = ctx;
var G__25615 = bindings;
var G__25616 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25614,G__25615,G__25616) : sci.impl.evaluator.eval.call(null,G__25614,G__25615,G__25616));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg25343 = (function (){var G__25630 = ctx;
var G__25631 = bindings;
var G__25632 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25630,G__25631,G__25632) : sci.impl.evaluator.eval.call(null,G__25630,G__25631,G__25632));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg25338,arg25339,arg25340,arg25341,arg25342,arg25343) : f.call(null,arg25338,arg25339,arg25340,arg25341,arg25342,arg25343));

break;
case (7):
var arg25344 = (function (){var G__25642 = ctx;
var G__25643 = bindings;
var G__25644 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25642,G__25643,G__25644) : sci.impl.evaluator.eval.call(null,G__25642,G__25643,G__25644));
})();
var args__$1 = cljs.core.rest(args);
var arg25345 = (function (){var G__25645 = ctx;
var G__25646 = bindings;
var G__25647 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25645,G__25646,G__25647) : sci.impl.evaluator.eval.call(null,G__25645,G__25646,G__25647));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25346 = (function (){var G__25648 = ctx;
var G__25649 = bindings;
var G__25650 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25648,G__25649,G__25650) : sci.impl.evaluator.eval.call(null,G__25648,G__25649,G__25650));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25347 = (function (){var G__25652 = ctx;
var G__25653 = bindings;
var G__25654 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25652,G__25653,G__25654) : sci.impl.evaluator.eval.call(null,G__25652,G__25653,G__25654));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25348 = (function (){var G__25655 = ctx;
var G__25656 = bindings;
var G__25657 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25655,G__25656,G__25657) : sci.impl.evaluator.eval.call(null,G__25655,G__25656,G__25657));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg25349 = (function (){var G__25658 = ctx;
var G__25659 = bindings;
var G__25660 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25658,G__25659,G__25660) : sci.impl.evaluator.eval.call(null,G__25658,G__25659,G__25660));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg25350 = (function (){var G__25661 = ctx;
var G__25662 = bindings;
var G__25663 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25661,G__25662,G__25663) : sci.impl.evaluator.eval.call(null,G__25661,G__25662,G__25663));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg25344,arg25345,arg25346,arg25347,arg25348,arg25349,arg25350) : f.call(null,arg25344,arg25345,arg25346,arg25347,arg25348,arg25349,arg25350));

break;
case (8):
var arg25351 = (function (){var G__25676 = ctx;
var G__25677 = bindings;
var G__25678 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25676,G__25677,G__25678) : sci.impl.evaluator.eval.call(null,G__25676,G__25677,G__25678));
})();
var args__$1 = cljs.core.rest(args);
var arg25352 = (function (){var G__25679 = ctx;
var G__25680 = bindings;
var G__25681 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25679,G__25680,G__25681) : sci.impl.evaluator.eval.call(null,G__25679,G__25680,G__25681));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25353 = (function (){var G__25682 = ctx;
var G__25683 = bindings;
var G__25684 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25682,G__25683,G__25684) : sci.impl.evaluator.eval.call(null,G__25682,G__25683,G__25684));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25354 = (function (){var G__25685 = ctx;
var G__25686 = bindings;
var G__25687 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25685,G__25686,G__25687) : sci.impl.evaluator.eval.call(null,G__25685,G__25686,G__25687));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25355 = (function (){var G__25688 = ctx;
var G__25689 = bindings;
var G__25690 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25688,G__25689,G__25690) : sci.impl.evaluator.eval.call(null,G__25688,G__25689,G__25690));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg25356 = (function (){var G__25691 = ctx;
var G__25692 = bindings;
var G__25693 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25691,G__25692,G__25693) : sci.impl.evaluator.eval.call(null,G__25691,G__25692,G__25693));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg25357 = (function (){var G__25694 = ctx;
var G__25695 = bindings;
var G__25696 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25694,G__25695,G__25696) : sci.impl.evaluator.eval.call(null,G__25694,G__25695,G__25696));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg25358 = (function (){var G__25697 = ctx;
var G__25698 = bindings;
var G__25699 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25697,G__25698,G__25699) : sci.impl.evaluator.eval.call(null,G__25697,G__25698,G__25699));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg25351,arg25352,arg25353,arg25354,arg25355,arg25356,arg25357,arg25358) : f.call(null,arg25351,arg25352,arg25353,arg25354,arg25355,arg25356,arg25357,arg25358));

break;
case (9):
var arg25359 = (function (){var G__25701 = ctx;
var G__25702 = bindings;
var G__25703 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25701,G__25702,G__25703) : sci.impl.evaluator.eval.call(null,G__25701,G__25702,G__25703));
})();
var args__$1 = cljs.core.rest(args);
var arg25360 = (function (){var G__25704 = ctx;
var G__25705 = bindings;
var G__25706 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25704,G__25705,G__25706) : sci.impl.evaluator.eval.call(null,G__25704,G__25705,G__25706));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25361 = (function (){var G__25707 = ctx;
var G__25708 = bindings;
var G__25709 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25707,G__25708,G__25709) : sci.impl.evaluator.eval.call(null,G__25707,G__25708,G__25709));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25362 = (function (){var G__25724 = ctx;
var G__25725 = bindings;
var G__25726 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25724,G__25725,G__25726) : sci.impl.evaluator.eval.call(null,G__25724,G__25725,G__25726));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25363 = (function (){var G__25727 = ctx;
var G__25728 = bindings;
var G__25729 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25727,G__25728,G__25729) : sci.impl.evaluator.eval.call(null,G__25727,G__25728,G__25729));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg25364 = (function (){var G__25730 = ctx;
var G__25731 = bindings;
var G__25732 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25730,G__25731,G__25732) : sci.impl.evaluator.eval.call(null,G__25730,G__25731,G__25732));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg25365 = (function (){var G__25733 = ctx;
var G__25734 = bindings;
var G__25735 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25733,G__25734,G__25735) : sci.impl.evaluator.eval.call(null,G__25733,G__25734,G__25735));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg25366 = (function (){var G__25736 = ctx;
var G__25737 = bindings;
var G__25738 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25736,G__25737,G__25738) : sci.impl.evaluator.eval.call(null,G__25736,G__25737,G__25738));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg25367 = (function (){var G__25740 = ctx;
var G__25741 = bindings;
var G__25742 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25740,G__25741,G__25742) : sci.impl.evaluator.eval.call(null,G__25740,G__25741,G__25742));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg25359,arg25360,arg25361,arg25362,arg25363,arg25364,arg25365,arg25366,arg25367) : f.call(null,arg25359,arg25360,arg25361,arg25362,arg25363,arg25364,arg25365,arg25366,arg25367));

break;
case (10):
var arg25368 = (function (){var G__25749 = ctx;
var G__25750 = bindings;
var G__25751 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25749,G__25750,G__25751) : sci.impl.evaluator.eval.call(null,G__25749,G__25750,G__25751));
})();
var args__$1 = cljs.core.rest(args);
var arg25369 = (function (){var G__25753 = ctx;
var G__25754 = bindings;
var G__25755 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25753,G__25754,G__25755) : sci.impl.evaluator.eval.call(null,G__25753,G__25754,G__25755));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25370 = (function (){var G__25756 = ctx;
var G__25757 = bindings;
var G__25758 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25756,G__25757,G__25758) : sci.impl.evaluator.eval.call(null,G__25756,G__25757,G__25758));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25371 = (function (){var G__25759 = ctx;
var G__25760 = bindings;
var G__25761 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25759,G__25760,G__25761) : sci.impl.evaluator.eval.call(null,G__25759,G__25760,G__25761));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25372 = (function (){var G__25762 = ctx;
var G__25763 = bindings;
var G__25764 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25762,G__25763,G__25764) : sci.impl.evaluator.eval.call(null,G__25762,G__25763,G__25764));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg25373 = (function (){var G__25765 = ctx;
var G__25766 = bindings;
var G__25767 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25765,G__25766,G__25767) : sci.impl.evaluator.eval.call(null,G__25765,G__25766,G__25767));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg25374 = (function (){var G__25780 = ctx;
var G__25781 = bindings;
var G__25782 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25780,G__25781,G__25782) : sci.impl.evaluator.eval.call(null,G__25780,G__25781,G__25782));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg25375 = (function (){var G__25783 = ctx;
var G__25784 = bindings;
var G__25785 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25783,G__25784,G__25785) : sci.impl.evaluator.eval.call(null,G__25783,G__25784,G__25785));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg25376 = (function (){var G__25786 = ctx;
var G__25787 = bindings;
var G__25788 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25786,G__25787,G__25788) : sci.impl.evaluator.eval.call(null,G__25786,G__25787,G__25788));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg25377 = (function (){var G__25790 = ctx;
var G__25791 = bindings;
var G__25792 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25790,G__25791,G__25792) : sci.impl.evaluator.eval.call(null,G__25790,G__25791,G__25792));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg25368,arg25369,arg25370,arg25371,arg25372,arg25373,arg25374,arg25375,arg25376,arg25377) : f.call(null,arg25368,arg25369,arg25370,arg25371,arg25372,arg25373,arg25374,arg25375,arg25376,arg25377));

break;
case (11):
var arg25378 = (function (){var G__25795 = ctx;
var G__25796 = bindings;
var G__25797 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25795,G__25796,G__25797) : sci.impl.evaluator.eval.call(null,G__25795,G__25796,G__25797));
})();
var args__$1 = cljs.core.rest(args);
var arg25379 = (function (){var G__25799 = ctx;
var G__25800 = bindings;
var G__25801 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25799,G__25800,G__25801) : sci.impl.evaluator.eval.call(null,G__25799,G__25800,G__25801));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25380 = (function (){var G__25802 = ctx;
var G__25803 = bindings;
var G__25804 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25802,G__25803,G__25804) : sci.impl.evaluator.eval.call(null,G__25802,G__25803,G__25804));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25381 = (function (){var G__25805 = ctx;
var G__25806 = bindings;
var G__25807 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25805,G__25806,G__25807) : sci.impl.evaluator.eval.call(null,G__25805,G__25806,G__25807));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25382 = (function (){var G__25808 = ctx;
var G__25809 = bindings;
var G__25810 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25808,G__25809,G__25810) : sci.impl.evaluator.eval.call(null,G__25808,G__25809,G__25810));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg25383 = (function (){var G__25811 = ctx;
var G__25812 = bindings;
var G__25813 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25811,G__25812,G__25813) : sci.impl.evaluator.eval.call(null,G__25811,G__25812,G__25813));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg25384 = (function (){var G__25826 = ctx;
var G__25827 = bindings;
var G__25828 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25826,G__25827,G__25828) : sci.impl.evaluator.eval.call(null,G__25826,G__25827,G__25828));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg25385 = (function (){var G__25829 = ctx;
var G__25830 = bindings;
var G__25831 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25829,G__25830,G__25831) : sci.impl.evaluator.eval.call(null,G__25829,G__25830,G__25831));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg25386 = (function (){var G__25832 = ctx;
var G__25833 = bindings;
var G__25834 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25832,G__25833,G__25834) : sci.impl.evaluator.eval.call(null,G__25832,G__25833,G__25834));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg25387 = (function (){var G__25835 = ctx;
var G__25836 = bindings;
var G__25837 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25835,G__25836,G__25837) : sci.impl.evaluator.eval.call(null,G__25835,G__25836,G__25837));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg25388 = (function (){var G__25838 = ctx;
var G__25839 = bindings;
var G__25840 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25838,G__25839,G__25840) : sci.impl.evaluator.eval.call(null,G__25838,G__25839,G__25840));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg25378,arg25379,arg25380,arg25381,arg25382,arg25383,arg25384,arg25385,arg25386,arg25387,arg25388) : f.call(null,arg25378,arg25379,arg25380,arg25381,arg25382,arg25383,arg25384,arg25385,arg25386,arg25387,arg25388));

break;
case (12):
var arg25389 = (function (){var G__25847 = ctx;
var G__25848 = bindings;
var G__25849 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25847,G__25848,G__25849) : sci.impl.evaluator.eval.call(null,G__25847,G__25848,G__25849));
})();
var args__$1 = cljs.core.rest(args);
var arg25390 = (function (){var G__25853 = ctx;
var G__25854 = bindings;
var G__25856 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25853,G__25854,G__25856) : sci.impl.evaluator.eval.call(null,G__25853,G__25854,G__25856));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25391 = (function (){var G__25861 = ctx;
var G__25862 = bindings;
var G__25863 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25861,G__25862,G__25863) : sci.impl.evaluator.eval.call(null,G__25861,G__25862,G__25863));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25392 = (function (){var G__25876 = ctx;
var G__25877 = bindings;
var G__25878 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25876,G__25877,G__25878) : sci.impl.evaluator.eval.call(null,G__25876,G__25877,G__25878));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25393 = (function (){var G__25879 = ctx;
var G__25880 = bindings;
var G__25881 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25879,G__25880,G__25881) : sci.impl.evaluator.eval.call(null,G__25879,G__25880,G__25881));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg25394 = (function (){var G__25882 = ctx;
var G__25883 = bindings;
var G__25884 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25882,G__25883,G__25884) : sci.impl.evaluator.eval.call(null,G__25882,G__25883,G__25884));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg25395 = (function (){var G__25885 = ctx;
var G__25886 = bindings;
var G__25887 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25885,G__25886,G__25887) : sci.impl.evaluator.eval.call(null,G__25885,G__25886,G__25887));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg25396 = (function (){var G__25888 = ctx;
var G__25889 = bindings;
var G__25890 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25888,G__25889,G__25890) : sci.impl.evaluator.eval.call(null,G__25888,G__25889,G__25890));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg25397 = (function (){var G__25892 = ctx;
var G__25893 = bindings;
var G__25894 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25892,G__25893,G__25894) : sci.impl.evaluator.eval.call(null,G__25892,G__25893,G__25894));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg25398 = (function (){var G__25895 = ctx;
var G__25896 = bindings;
var G__25897 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25895,G__25896,G__25897) : sci.impl.evaluator.eval.call(null,G__25895,G__25896,G__25897));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg25399 = (function (){var G__25898 = ctx;
var G__25899 = bindings;
var G__25900 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25898,G__25899,G__25900) : sci.impl.evaluator.eval.call(null,G__25898,G__25899,G__25900));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg25400 = (function (){var G__25901 = ctx;
var G__25902 = bindings;
var G__25903 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25901,G__25902,G__25903) : sci.impl.evaluator.eval.call(null,G__25901,G__25902,G__25903));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg25389,arg25390,arg25391,arg25392,arg25393,arg25394,arg25395,arg25396,arg25397,arg25398,arg25399,arg25400) : f.call(null,arg25389,arg25390,arg25391,arg25392,arg25393,arg25394,arg25395,arg25396,arg25397,arg25398,arg25399,arg25400));

break;
case (13):
var arg25401 = (function (){var G__25919 = ctx;
var G__25920 = bindings;
var G__25921 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25919,G__25920,G__25921) : sci.impl.evaluator.eval.call(null,G__25919,G__25920,G__25921));
})();
var args__$1 = cljs.core.rest(args);
var arg25402 = (function (){var G__25922 = ctx;
var G__25923 = bindings;
var G__25924 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25922,G__25923,G__25924) : sci.impl.evaluator.eval.call(null,G__25922,G__25923,G__25924));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25403 = (function (){var G__25926 = ctx;
var G__25927 = bindings;
var G__25928 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25926,G__25927,G__25928) : sci.impl.evaluator.eval.call(null,G__25926,G__25927,G__25928));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25404 = (function (){var G__25931 = ctx;
var G__25932 = bindings;
var G__25933 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25931,G__25932,G__25933) : sci.impl.evaluator.eval.call(null,G__25931,G__25932,G__25933));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25405 = (function (){var G__25934 = ctx;
var G__25935 = bindings;
var G__25936 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25934,G__25935,G__25936) : sci.impl.evaluator.eval.call(null,G__25934,G__25935,G__25936));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg25406 = (function (){var G__25937 = ctx;
var G__25938 = bindings;
var G__25939 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25937,G__25938,G__25939) : sci.impl.evaluator.eval.call(null,G__25937,G__25938,G__25939));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg25407 = (function (){var G__25940 = ctx;
var G__25941 = bindings;
var G__25942 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25940,G__25941,G__25942) : sci.impl.evaluator.eval.call(null,G__25940,G__25941,G__25942));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg25408 = (function (){var G__25943 = ctx;
var G__25944 = bindings;
var G__25945 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25943,G__25944,G__25945) : sci.impl.evaluator.eval.call(null,G__25943,G__25944,G__25945));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg25409 = (function (){var G__25946 = ctx;
var G__25947 = bindings;
var G__25948 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25946,G__25947,G__25948) : sci.impl.evaluator.eval.call(null,G__25946,G__25947,G__25948));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg25410 = (function (){var G__25949 = ctx;
var G__25950 = bindings;
var G__25951 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25949,G__25950,G__25951) : sci.impl.evaluator.eval.call(null,G__25949,G__25950,G__25951));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg25411 = (function (){var G__25954 = ctx;
var G__25955 = bindings;
var G__25956 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25954,G__25955,G__25956) : sci.impl.evaluator.eval.call(null,G__25954,G__25955,G__25956));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg25412 = (function (){var G__25960 = ctx;
var G__25961 = bindings;
var G__25962 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25960,G__25961,G__25962) : sci.impl.evaluator.eval.call(null,G__25960,G__25961,G__25962));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg25413 = (function (){var G__25963 = ctx;
var G__25964 = bindings;
var G__25965 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25963,G__25964,G__25965) : sci.impl.evaluator.eval.call(null,G__25963,G__25964,G__25965));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg25401,arg25402,arg25403,arg25404,arg25405,arg25406,arg25407,arg25408,arg25409,arg25410,arg25411,arg25412,arg25413) : f.call(null,arg25401,arg25402,arg25403,arg25404,arg25405,arg25406,arg25407,arg25408,arg25409,arg25410,arg25411,arg25412,arg25413));

break;
case (14):
var arg25414 = (function (){var G__25966 = ctx;
var G__25967 = bindings;
var G__25968 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25966,G__25967,G__25968) : sci.impl.evaluator.eval.call(null,G__25966,G__25967,G__25968));
})();
var args__$1 = cljs.core.rest(args);
var arg25415 = (function (){var G__25974 = ctx;
var G__25975 = bindings;
var G__25976 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25974,G__25975,G__25976) : sci.impl.evaluator.eval.call(null,G__25974,G__25975,G__25976));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25416 = (function (){var G__25977 = ctx;
var G__25978 = bindings;
var G__25979 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25977,G__25978,G__25979) : sci.impl.evaluator.eval.call(null,G__25977,G__25978,G__25979));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25417 = (function (){var G__25980 = ctx;
var G__25981 = bindings;
var G__25982 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25980,G__25981,G__25982) : sci.impl.evaluator.eval.call(null,G__25980,G__25981,G__25982));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25418 = (function (){var G__25983 = ctx;
var G__25984 = bindings;
var G__25985 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25983,G__25984,G__25985) : sci.impl.evaluator.eval.call(null,G__25983,G__25984,G__25985));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg25419 = (function (){var G__25986 = ctx;
var G__25987 = bindings;
var G__25988 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25986,G__25987,G__25988) : sci.impl.evaluator.eval.call(null,G__25986,G__25987,G__25988));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg25420 = (function (){var G__25989 = ctx;
var G__25990 = bindings;
var G__25991 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25989,G__25990,G__25991) : sci.impl.evaluator.eval.call(null,G__25989,G__25990,G__25991));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg25421 = (function (){var G__25992 = ctx;
var G__25993 = bindings;
var G__25994 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25992,G__25993,G__25994) : sci.impl.evaluator.eval.call(null,G__25992,G__25993,G__25994));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg25422 = (function (){var G__25995 = ctx;
var G__25996 = bindings;
var G__25997 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25995,G__25996,G__25997) : sci.impl.evaluator.eval.call(null,G__25995,G__25996,G__25997));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg25423 = (function (){var G__25998 = ctx;
var G__25999 = bindings;
var G__26000 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__25998,G__25999,G__26000) : sci.impl.evaluator.eval.call(null,G__25998,G__25999,G__26000));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg25424 = (function (){var G__26001 = ctx;
var G__26002 = bindings;
var G__26003 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26001,G__26002,G__26003) : sci.impl.evaluator.eval.call(null,G__26001,G__26002,G__26003));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg25425 = (function (){var G__26004 = ctx;
var G__26005 = bindings;
var G__26006 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26004,G__26005,G__26006) : sci.impl.evaluator.eval.call(null,G__26004,G__26005,G__26006));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg25426 = (function (){var G__26007 = ctx;
var G__26008 = bindings;
var G__26009 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26007,G__26008,G__26009) : sci.impl.evaluator.eval.call(null,G__26007,G__26008,G__26009));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg25427 = (function (){var G__26010 = ctx;
var G__26011 = bindings;
var G__26012 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26010,G__26011,G__26012) : sci.impl.evaluator.eval.call(null,G__26010,G__26011,G__26012));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg25414,arg25415,arg25416,arg25417,arg25418,arg25419,arg25420,arg25421,arg25422,arg25423,arg25424,arg25425,arg25426,arg25427) : f.call(null,arg25414,arg25415,arg25416,arg25417,arg25418,arg25419,arg25420,arg25421,arg25422,arg25423,arg25424,arg25425,arg25426,arg25427));

break;
case (15):
var arg25428 = (function (){var G__26016 = ctx;
var G__26017 = bindings;
var G__26018 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26016,G__26017,G__26018) : sci.impl.evaluator.eval.call(null,G__26016,G__26017,G__26018));
})();
var args__$1 = cljs.core.rest(args);
var arg25429 = (function (){var G__26019 = ctx;
var G__26020 = bindings;
var G__26021 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26019,G__26020,G__26021) : sci.impl.evaluator.eval.call(null,G__26019,G__26020,G__26021));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25430 = (function (){var G__26024 = ctx;
var G__26025 = bindings;
var G__26026 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26024,G__26025,G__26026) : sci.impl.evaluator.eval.call(null,G__26024,G__26025,G__26026));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25431 = (function (){var G__26028 = ctx;
var G__26029 = bindings;
var G__26030 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26028,G__26029,G__26030) : sci.impl.evaluator.eval.call(null,G__26028,G__26029,G__26030));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25432 = (function (){var G__26031 = ctx;
var G__26032 = bindings;
var G__26033 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26031,G__26032,G__26033) : sci.impl.evaluator.eval.call(null,G__26031,G__26032,G__26033));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg25433 = (function (){var G__26034 = ctx;
var G__26035 = bindings;
var G__26036 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26034,G__26035,G__26036) : sci.impl.evaluator.eval.call(null,G__26034,G__26035,G__26036));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg25434 = (function (){var G__26038 = ctx;
var G__26039 = bindings;
var G__26040 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26038,G__26039,G__26040) : sci.impl.evaluator.eval.call(null,G__26038,G__26039,G__26040));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg25435 = (function (){var G__26041 = ctx;
var G__26042 = bindings;
var G__26043 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26041,G__26042,G__26043) : sci.impl.evaluator.eval.call(null,G__26041,G__26042,G__26043));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg25436 = (function (){var G__26044 = ctx;
var G__26045 = bindings;
var G__26046 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26044,G__26045,G__26046) : sci.impl.evaluator.eval.call(null,G__26044,G__26045,G__26046));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg25437 = (function (){var G__26047 = ctx;
var G__26048 = bindings;
var G__26049 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26047,G__26048,G__26049) : sci.impl.evaluator.eval.call(null,G__26047,G__26048,G__26049));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg25438 = (function (){var G__26050 = ctx;
var G__26051 = bindings;
var G__26052 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26050,G__26051,G__26052) : sci.impl.evaluator.eval.call(null,G__26050,G__26051,G__26052));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg25439 = (function (){var G__26053 = ctx;
var G__26054 = bindings;
var G__26055 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26053,G__26054,G__26055) : sci.impl.evaluator.eval.call(null,G__26053,G__26054,G__26055));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg25440 = (function (){var G__26056 = ctx;
var G__26057 = bindings;
var G__26058 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26056,G__26057,G__26058) : sci.impl.evaluator.eval.call(null,G__26056,G__26057,G__26058));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg25441 = (function (){var G__26060 = ctx;
var G__26061 = bindings;
var G__26062 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26060,G__26061,G__26062) : sci.impl.evaluator.eval.call(null,G__26060,G__26061,G__26062));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg25442 = (function (){var G__26063 = ctx;
var G__26064 = bindings;
var G__26065 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26063,G__26064,G__26065) : sci.impl.evaluator.eval.call(null,G__26063,G__26064,G__26065));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg25428,arg25429,arg25430,arg25431,arg25432,arg25433,arg25434,arg25435,arg25436,arg25437,arg25438,arg25439,arg25440,arg25441,arg25442) : f.call(null,arg25428,arg25429,arg25430,arg25431,arg25432,arg25433,arg25434,arg25435,arg25436,arg25437,arg25438,arg25439,arg25440,arg25441,arg25442));

break;
case (16):
var arg25443 = (function (){var G__26066 = ctx;
var G__26067 = bindings;
var G__26068 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26066,G__26067,G__26068) : sci.impl.evaluator.eval.call(null,G__26066,G__26067,G__26068));
})();
var args__$1 = cljs.core.rest(args);
var arg25444 = (function (){var G__26072 = ctx;
var G__26073 = bindings;
var G__26074 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26072,G__26073,G__26074) : sci.impl.evaluator.eval.call(null,G__26072,G__26073,G__26074));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25445 = (function (){var G__26078 = ctx;
var G__26079 = bindings;
var G__26080 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26078,G__26079,G__26080) : sci.impl.evaluator.eval.call(null,G__26078,G__26079,G__26080));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25446 = (function (){var G__26081 = ctx;
var G__26082 = bindings;
var G__26083 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26081,G__26082,G__26083) : sci.impl.evaluator.eval.call(null,G__26081,G__26082,G__26083));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25447 = (function (){var G__26084 = ctx;
var G__26085 = bindings;
var G__26086 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26084,G__26085,G__26086) : sci.impl.evaluator.eval.call(null,G__26084,G__26085,G__26086));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg25448 = (function (){var G__26087 = ctx;
var G__26088 = bindings;
var G__26089 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26087,G__26088,G__26089) : sci.impl.evaluator.eval.call(null,G__26087,G__26088,G__26089));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg25449 = (function (){var G__26090 = ctx;
var G__26091 = bindings;
var G__26092 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26090,G__26091,G__26092) : sci.impl.evaluator.eval.call(null,G__26090,G__26091,G__26092));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg25450 = (function (){var G__26093 = ctx;
var G__26094 = bindings;
var G__26095 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26093,G__26094,G__26095) : sci.impl.evaluator.eval.call(null,G__26093,G__26094,G__26095));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg25451 = (function (){var G__26098 = ctx;
var G__26099 = bindings;
var G__26100 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26098,G__26099,G__26100) : sci.impl.evaluator.eval.call(null,G__26098,G__26099,G__26100));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg25452 = (function (){var G__26102 = ctx;
var G__26103 = bindings;
var G__26104 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26102,G__26103,G__26104) : sci.impl.evaluator.eval.call(null,G__26102,G__26103,G__26104));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg25453 = (function (){var G__26105 = ctx;
var G__26106 = bindings;
var G__26107 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26105,G__26106,G__26107) : sci.impl.evaluator.eval.call(null,G__26105,G__26106,G__26107));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg25454 = (function (){var G__26111 = ctx;
var G__26112 = bindings;
var G__26113 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26111,G__26112,G__26113) : sci.impl.evaluator.eval.call(null,G__26111,G__26112,G__26113));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg25455 = (function (){var G__26114 = ctx;
var G__26115 = bindings;
var G__26116 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26114,G__26115,G__26116) : sci.impl.evaluator.eval.call(null,G__26114,G__26115,G__26116));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg25456 = (function (){var G__26117 = ctx;
var G__26118 = bindings;
var G__26119 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26117,G__26118,G__26119) : sci.impl.evaluator.eval.call(null,G__26117,G__26118,G__26119));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg25457 = (function (){var G__26120 = ctx;
var G__26121 = bindings;
var G__26122 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26120,G__26121,G__26122) : sci.impl.evaluator.eval.call(null,G__26120,G__26121,G__26122));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg25458 = (function (){var G__26123 = ctx;
var G__26124 = bindings;
var G__26125 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26123,G__26124,G__26125) : sci.impl.evaluator.eval.call(null,G__26123,G__26124,G__26125));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg25443,arg25444,arg25445,arg25446,arg25447,arg25448,arg25449,arg25450,arg25451,arg25452,arg25453,arg25454,arg25455,arg25456,arg25457,arg25458) : f.call(null,arg25443,arg25444,arg25445,arg25446,arg25447,arg25448,arg25449,arg25450,arg25451,arg25452,arg25453,arg25454,arg25455,arg25456,arg25457,arg25458));

break;
case (17):
var arg25459 = (function (){var G__26129 = ctx;
var G__26130 = bindings;
var G__26131 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26129,G__26130,G__26131) : sci.impl.evaluator.eval.call(null,G__26129,G__26130,G__26131));
})();
var args__$1 = cljs.core.rest(args);
var arg25460 = (function (){var G__26132 = ctx;
var G__26133 = bindings;
var G__26134 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26132,G__26133,G__26134) : sci.impl.evaluator.eval.call(null,G__26132,G__26133,G__26134));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25461 = (function (){var G__26135 = ctx;
var G__26136 = bindings;
var G__26137 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26135,G__26136,G__26137) : sci.impl.evaluator.eval.call(null,G__26135,G__26136,G__26137));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25462 = (function (){var G__26140 = ctx;
var G__26141 = bindings;
var G__26142 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26140,G__26141,G__26142) : sci.impl.evaluator.eval.call(null,G__26140,G__26141,G__26142));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25463 = (function (){var G__26144 = ctx;
var G__26145 = bindings;
var G__26146 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26144,G__26145,G__26146) : sci.impl.evaluator.eval.call(null,G__26144,G__26145,G__26146));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg25464 = (function (){var G__26147 = ctx;
var G__26148 = bindings;
var G__26149 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26147,G__26148,G__26149) : sci.impl.evaluator.eval.call(null,G__26147,G__26148,G__26149));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg25465 = (function (){var G__26150 = ctx;
var G__26151 = bindings;
var G__26152 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26150,G__26151,G__26152) : sci.impl.evaluator.eval.call(null,G__26150,G__26151,G__26152));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg25466 = (function (){var G__26153 = ctx;
var G__26154 = bindings;
var G__26155 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26153,G__26154,G__26155) : sci.impl.evaluator.eval.call(null,G__26153,G__26154,G__26155));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg25467 = (function (){var G__26156 = ctx;
var G__26157 = bindings;
var G__26158 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26156,G__26157,G__26158) : sci.impl.evaluator.eval.call(null,G__26156,G__26157,G__26158));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg25468 = (function (){var G__26162 = ctx;
var G__26163 = bindings;
var G__26164 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26162,G__26163,G__26164) : sci.impl.evaluator.eval.call(null,G__26162,G__26163,G__26164));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg25469 = (function (){var G__26165 = ctx;
var G__26166 = bindings;
var G__26167 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26165,G__26166,G__26167) : sci.impl.evaluator.eval.call(null,G__26165,G__26166,G__26167));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg25470 = (function (){var G__26168 = ctx;
var G__26169 = bindings;
var G__26170 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26168,G__26169,G__26170) : sci.impl.evaluator.eval.call(null,G__26168,G__26169,G__26170));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg25471 = (function (){var G__26171 = ctx;
var G__26172 = bindings;
var G__26173 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26171,G__26172,G__26173) : sci.impl.evaluator.eval.call(null,G__26171,G__26172,G__26173));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg25472 = (function (){var G__26174 = ctx;
var G__26175 = bindings;
var G__26176 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26174,G__26175,G__26176) : sci.impl.evaluator.eval.call(null,G__26174,G__26175,G__26176));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg25473 = (function (){var G__26180 = ctx;
var G__26181 = bindings;
var G__26182 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26180,G__26181,G__26182) : sci.impl.evaluator.eval.call(null,G__26180,G__26181,G__26182));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg25474 = (function (){var G__26183 = ctx;
var G__26184 = bindings;
var G__26185 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26183,G__26184,G__26185) : sci.impl.evaluator.eval.call(null,G__26183,G__26184,G__26185));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg25475 = (function (){var G__26186 = ctx;
var G__26187 = bindings;
var G__26188 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26186,G__26187,G__26188) : sci.impl.evaluator.eval.call(null,G__26186,G__26187,G__26188));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg25459,arg25460,arg25461,arg25462,arg25463,arg25464,arg25465,arg25466,arg25467,arg25468,arg25469,arg25470,arg25471,arg25472,arg25473,arg25474,arg25475) : f.call(null,arg25459,arg25460,arg25461,arg25462,arg25463,arg25464,arg25465,arg25466,arg25467,arg25468,arg25469,arg25470,arg25471,arg25472,arg25473,arg25474,arg25475));

break;
case (18):
var arg25476 = (function (){var G__26191 = ctx;
var G__26192 = bindings;
var G__26193 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26191,G__26192,G__26193) : sci.impl.evaluator.eval.call(null,G__26191,G__26192,G__26193));
})();
var args__$1 = cljs.core.rest(args);
var arg25477 = (function (){var G__26195 = ctx;
var G__26196 = bindings;
var G__26197 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26195,G__26196,G__26197) : sci.impl.evaluator.eval.call(null,G__26195,G__26196,G__26197));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25478 = (function (){var G__26198 = ctx;
var G__26199 = bindings;
var G__26200 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26198,G__26199,G__26200) : sci.impl.evaluator.eval.call(null,G__26198,G__26199,G__26200));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25479 = (function (){var G__26201 = ctx;
var G__26202 = bindings;
var G__26203 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26201,G__26202,G__26203) : sci.impl.evaluator.eval.call(null,G__26201,G__26202,G__26203));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25480 = (function (){var G__26205 = ctx;
var G__26206 = bindings;
var G__26207 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26205,G__26206,G__26207) : sci.impl.evaluator.eval.call(null,G__26205,G__26206,G__26207));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg25481 = (function (){var G__26209 = ctx;
var G__26210 = bindings;
var G__26211 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26209,G__26210,G__26211) : sci.impl.evaluator.eval.call(null,G__26209,G__26210,G__26211));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg25482 = (function (){var G__26214 = ctx;
var G__26215 = bindings;
var G__26216 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26214,G__26215,G__26216) : sci.impl.evaluator.eval.call(null,G__26214,G__26215,G__26216));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg25483 = (function (){var G__26218 = ctx;
var G__26219 = bindings;
var G__26220 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26218,G__26219,G__26220) : sci.impl.evaluator.eval.call(null,G__26218,G__26219,G__26220));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg25484 = (function (){var G__26222 = ctx;
var G__26223 = bindings;
var G__26224 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26222,G__26223,G__26224) : sci.impl.evaluator.eval.call(null,G__26222,G__26223,G__26224));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg25485 = (function (){var G__26225 = ctx;
var G__26226 = bindings;
var G__26227 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26225,G__26226,G__26227) : sci.impl.evaluator.eval.call(null,G__26225,G__26226,G__26227));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg25486 = (function (){var G__26228 = ctx;
var G__26229 = bindings;
var G__26230 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26228,G__26229,G__26230) : sci.impl.evaluator.eval.call(null,G__26228,G__26229,G__26230));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg25487 = (function (){var G__26232 = ctx;
var G__26233 = bindings;
var G__26234 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26232,G__26233,G__26234) : sci.impl.evaluator.eval.call(null,G__26232,G__26233,G__26234));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg25488 = (function (){var G__26235 = ctx;
var G__26236 = bindings;
var G__26237 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26235,G__26236,G__26237) : sci.impl.evaluator.eval.call(null,G__26235,G__26236,G__26237));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg25489 = (function (){var G__26238 = ctx;
var G__26239 = bindings;
var G__26240 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26238,G__26239,G__26240) : sci.impl.evaluator.eval.call(null,G__26238,G__26239,G__26240));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg25490 = (function (){var G__26241 = ctx;
var G__26242 = bindings;
var G__26243 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26241,G__26242,G__26243) : sci.impl.evaluator.eval.call(null,G__26241,G__26242,G__26243));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg25491 = (function (){var G__26244 = ctx;
var G__26245 = bindings;
var G__26246 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26244,G__26245,G__26246) : sci.impl.evaluator.eval.call(null,G__26244,G__26245,G__26246));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg25492 = (function (){var G__26248 = ctx;
var G__26249 = bindings;
var G__26250 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26248,G__26249,G__26250) : sci.impl.evaluator.eval.call(null,G__26248,G__26249,G__26250));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg25493 = (function (){var G__26251 = ctx;
var G__26252 = bindings;
var G__26253 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26251,G__26252,G__26253) : sci.impl.evaluator.eval.call(null,G__26251,G__26252,G__26253));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg25476,arg25477,arg25478,arg25479,arg25480,arg25481,arg25482,arg25483,arg25484,arg25485,arg25486,arg25487,arg25488,arg25489,arg25490,arg25491,arg25492,arg25493) : f.call(null,arg25476,arg25477,arg25478,arg25479,arg25480,arg25481,arg25482,arg25483,arg25484,arg25485,arg25486,arg25487,arg25488,arg25489,arg25490,arg25491,arg25492,arg25493));

break;
case (19):
var arg25494 = (function (){var G__26258 = ctx;
var G__26259 = bindings;
var G__26260 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26258,G__26259,G__26260) : sci.impl.evaluator.eval.call(null,G__26258,G__26259,G__26260));
})();
var args__$1 = cljs.core.rest(args);
var arg25495 = (function (){var G__26261 = ctx;
var G__26262 = bindings;
var G__26263 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26261,G__26262,G__26263) : sci.impl.evaluator.eval.call(null,G__26261,G__26262,G__26263));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg25496 = (function (){var G__26264 = ctx;
var G__26265 = bindings;
var G__26266 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26264,G__26265,G__26266) : sci.impl.evaluator.eval.call(null,G__26264,G__26265,G__26266));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg25497 = (function (){var G__26267 = ctx;
var G__26268 = bindings;
var G__26269 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26267,G__26268,G__26269) : sci.impl.evaluator.eval.call(null,G__26267,G__26268,G__26269));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg25498 = (function (){var G__26270 = ctx;
var G__26271 = bindings;
var G__26272 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26270,G__26271,G__26272) : sci.impl.evaluator.eval.call(null,G__26270,G__26271,G__26272));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg25499 = (function (){var G__26273 = ctx;
var G__26274 = bindings;
var G__26275 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26273,G__26274,G__26275) : sci.impl.evaluator.eval.call(null,G__26273,G__26274,G__26275));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg25500 = (function (){var G__26276 = ctx;
var G__26277 = bindings;
var G__26278 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26276,G__26277,G__26278) : sci.impl.evaluator.eval.call(null,G__26276,G__26277,G__26278));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg25501 = (function (){var G__26279 = ctx;
var G__26280 = bindings;
var G__26281 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26279,G__26280,G__26281) : sci.impl.evaluator.eval.call(null,G__26279,G__26280,G__26281));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg25502 = (function (){var G__26282 = ctx;
var G__26283 = bindings;
var G__26284 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26282,G__26283,G__26284) : sci.impl.evaluator.eval.call(null,G__26282,G__26283,G__26284));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg25503 = (function (){var G__26285 = ctx;
var G__26286 = bindings;
var G__26287 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26285,G__26286,G__26287) : sci.impl.evaluator.eval.call(null,G__26285,G__26286,G__26287));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg25504 = (function (){var G__26288 = ctx;
var G__26289 = bindings;
var G__26290 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26288,G__26289,G__26290) : sci.impl.evaluator.eval.call(null,G__26288,G__26289,G__26290));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg25505 = (function (){var G__26291 = ctx;
var G__26292 = bindings;
var G__26293 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26291,G__26292,G__26293) : sci.impl.evaluator.eval.call(null,G__26291,G__26292,G__26293));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg25506 = (function (){var G__26294 = ctx;
var G__26295 = bindings;
var G__26296 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26294,G__26295,G__26296) : sci.impl.evaluator.eval.call(null,G__26294,G__26295,G__26296));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg25507 = (function (){var G__26297 = ctx;
var G__26298 = bindings;
var G__26299 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26297,G__26298,G__26299) : sci.impl.evaluator.eval.call(null,G__26297,G__26298,G__26299));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg25508 = (function (){var G__26300 = ctx;
var G__26301 = bindings;
var G__26302 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26300,G__26301,G__26302) : sci.impl.evaluator.eval.call(null,G__26300,G__26301,G__26302));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg25509 = (function (){var G__26303 = ctx;
var G__26304 = bindings;
var G__26305 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26303,G__26304,G__26305) : sci.impl.evaluator.eval.call(null,G__26303,G__26304,G__26305));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg25510 = (function (){var G__26306 = ctx;
var G__26307 = bindings;
var G__26308 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26306,G__26307,G__26308) : sci.impl.evaluator.eval.call(null,G__26306,G__26307,G__26308));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg25511 = (function (){var G__26309 = ctx;
var G__26310 = bindings;
var G__26311 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26309,G__26310,G__26311) : sci.impl.evaluator.eval.call(null,G__26309,G__26310,G__26311));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg25512 = (function (){var G__26312 = ctx;
var G__26313 = bindings;
var G__26314 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__26312,G__26313,G__26314) : sci.impl.evaluator.eval.call(null,G__26312,G__26313,G__26314));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg25494,arg25495,arg25496,arg25497,arg25498,arg25499,arg25500,arg25501,arg25502,arg25503,arg25504,arg25505,arg25506,arg25507,arg25508,arg25509,arg25510,arg25511,arg25512) : f.call(null,arg25494,arg25495,arg25496,arg25497,arg25498,arg25499,arg25500,arg25501,arg25502,arg25503,arg25504,arg25505,arg25506,arg25507,arg25508,arg25509,arg25510,arg25511,arg25512));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25022_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__25022_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__25022_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,bindings,expr){
try{if((expr instanceof sci.impl.types.EvalFn)){
var f = expr.f;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ctx,bindings) : f.call(null,ctx,bindings));
} else {
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.v;
return cljs.core._deref(v);
} else {
if((((expr == null))?false:(((!((expr == null))))?(((((expr.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === expr.cljs$core$IMap$))))?true:(((!expr.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr)))){
return sci.impl.evaluator.eval_map(ctx,bindings,expr);
} else {
return expr;

}
}
}
}catch (e26316){if((e26316 instanceof Error)){
var e = e26316;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,expr);
} else {
throw e26316;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);

//# sourceMappingURL=sci.impl.evaluator.js.map
