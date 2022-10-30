goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__25319 = arguments.length;
switch (G__25319) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__25513 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__25514 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__25514);

try{var G__25515 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__25515);

return G__25515;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__25513);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__25517 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__25518 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__25518);

try{var G__25519 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__25519);

return G__25519;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__25517);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__25523 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__25524 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__25524);

try{var G__25525 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__25525);

return G__25525;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__25523);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__25529 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__25530 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__25530);

try{var G__25534 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__25534);

return G__25534;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__25529);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__25547 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__25548 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25548);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25547);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26075 = arguments.length;
var i__5770__auto___26076 = (0);
while(true){
if((i__5770__auto___26076 < len__5769__auto___26075)){
args__5775__auto__.push((arguments[i__5770__auto___26076]));

var G__26077 = (i__5770__auto___26076 + (1));
i__5770__auto___26076 = G__26077;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__25568 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__25569 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__25570 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__25571 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__25572 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__25573 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__25574 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__25575 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__25576 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__25577 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__25578 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__25579 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__25580 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__25581 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25575);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__25576);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__25577);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__25578);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__25579);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__25580);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25581);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25574);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__25573);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__25572);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__25571);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__25570);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__25569);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25568);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq25558){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25558));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__25634 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__25635 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25635);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25634);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26096 = arguments.length;
var i__5770__auto___26097 = (0);
while(true){
if((i__5770__auto___26097 < len__5769__auto___26096)){
args__5775__auto__.push((arguments[i__5770__auto___26097]));

var G__26101 = (i__5770__auto___26097 + (1));
i__5770__auto___26097 = G__26101;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__25664 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__25665 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__25666 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__25667 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__25668 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__25669 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__25670 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__25671 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__25672 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__25673 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__25674 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__25675 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__25670);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__25671);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__25672);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__25673);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__25674);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25675);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25669);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__25668);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__25667);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__25666);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__25665);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__25664);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq25651){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25651));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26108 = arguments.length;
var i__5770__auto___26109 = (0);
while(true){
if((i__5770__auto___26109 < len__5769__auto___26108)){
args__5775__auto__.push((arguments[i__5770__auto___26109]));

var G__26110 = (i__5770__auto___26109 + (1));
i__5770__auto___26109 = G__26110;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__25710 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__25711 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__25712 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__25713 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__25714 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__25715 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__25716 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__25717 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__25718 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__25719 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__25720 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__25721 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__25722 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__25723 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25717);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__25718);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__25719);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__25720);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__25721);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__25722);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25723);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25716);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__25715);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__25714);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__25713);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__25712);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__25711);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25710);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq25700){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25700));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26126 = arguments.length;
var i__5770__auto___26127 = (0);
while(true){
if((i__5770__auto___26127 < len__5769__auto___26126)){
args__5775__auto__.push((arguments[i__5770__auto___26127]));

var G__26128 = (i__5770__auto___26127 + (1));
i__5770__auto___26127 = G__26128;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__25768 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__25769 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__25770 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__25771 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__25772 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__25773 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__25774 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__25775 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__25776 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__25777 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__25778 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__25779 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__25774);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__25775);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__25776);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__25777);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__25778);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25779);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25773);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__25772);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__25771);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__25770);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__25769);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__25768);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq25752){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25752));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26138 = arguments.length;
var i__5770__auto___26139 = (0);
while(true){
if((i__5770__auto___26139 < len__5769__auto___26138)){
args__5775__auto__.push((arguments[i__5770__auto___26139]));

var G__26143 = (i__5770__auto___26139 + (1));
i__5770__auto___26139 = G__26143;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__25814 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__25815 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__25816 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__25817 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__25818 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__25819 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__25820 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__25821 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__25822 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__25823 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__25824 = null;
var _STAR_print_newline_STAR__temp_val__25825 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25820);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__25821);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__25822);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__25823);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__25824);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25825);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25819);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__25818);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__25817);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__25816);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__25815);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25814);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq25798){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25798));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26159 = arguments.length;
var i__5770__auto___26160 = (0);
while(true){
if((i__5770__auto___26160 < len__5769__auto___26159)){
args__5775__auto__.push((arguments[i__5770__auto___26160]));

var G__26161 = (i__5770__auto___26160 + (1));
i__5770__auto___26160 = G__26161;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__25864 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__25865 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__25866 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__25867 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__25868 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__25869 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__25870 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__25871 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__25872 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__25873 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__25874 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__25875 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__25870);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__25871);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__25872);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__25873);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__25874);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25875);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25869);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__25868);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__25867);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__25866);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__25865);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__25864);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq25843){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25843));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26177 = arguments.length;
var i__5770__auto___26178 = (0);
while(true){
if((i__5770__auto___26178 < len__5769__auto___26177)){
args__5775__auto__.push((arguments[i__5770__auto___26178]));

var G__26179 = (i__5770__auto___26178 + (1));
i__5770__auto___26178 = G__26179;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__25905 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__25906 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__25907 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__25908 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__25909 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__25910 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__25911 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__25912 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__25913 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__25914 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__25915 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__25916 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__25917 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__25918 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25912);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__25913);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__25914);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__25915);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__25916);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__25917);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25918);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25911);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__25910);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__25909);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__25908);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__25907);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__25906);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25905);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq25891){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25891));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26189 = arguments.length;
var i__5770__auto___26190 = (0);
while(true){
if((i__5770__auto___26190 < len__5769__auto___26189)){
args__5775__auto__.push((arguments[i__5770__auto___26190]));

var G__26194 = (i__5770__auto___26190 + (1));
i__5770__auto___26190 = G__26194;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__25952__auto__","s__25952__auto__",1414220824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__25953__auto__","x__25953__auto__",1743550264,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__25952__auto__","s__25952__auto__",1414220824,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__25953__auto__","x__25953__auto__",1743550264,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__25952__auto__","s__25952__auto__",1414220824,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq25957){
var G__25958 = cljs.core.first(seq25957);
var seq25957__$1 = cljs.core.next(seq25957);
var G__25959 = cljs.core.first(seq25957__$1);
var seq25957__$2 = cljs.core.next(seq25957__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25958,G__25959,seq25957__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
