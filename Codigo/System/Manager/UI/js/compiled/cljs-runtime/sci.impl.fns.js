goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(ctx,nsm,fn_name,macro_QMARK_,args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count),") passed to: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsm),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('')].join('');
})()));
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,bindings,fn_body,fn_name,macro_QMARK_){
var bindings_fn = new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951).cljs$core$IFn$_invoke$arity$1(fn_body);
var bindings__$1 = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var disable_arity_checks_QMARK_ = ctx.get(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__26931 = (fixed_arity | (0));
switch (G__26931) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
while(true){
var ret = sci.impl.evaluator.eval(ctx,bindings__$1,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
continue;
} else {
return ret;
}
break;
}
});

break;
case (1):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__26934 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__26933){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__26934,G__26933);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28188 = cljs.core._nth(recur_val,(0));
G__26933 = G__28188;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__26936 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__26935){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__26936,G__26935);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28189 = cljs.core._nth(recur_val,(0));
G__26935 = G__28189;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__26941 = cljs.core._nth(params,(0));
var G__26942 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__26939,G__26940){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__26941,G__26939);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__26942,G__26940);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28190 = cljs.core._nth(recur_val,(0));
var G__28191 = cljs.core._nth(recur_val,(1));
G__26939 = G__28190;
G__26940 = G__28191;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__26945 = cljs.core._nth(params,(0));
var G__26946 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__26943,G__26944){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__26945,G__26943);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__26946,G__26944);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28193 = cljs.core._nth(recur_val,(0));
var G__28194 = cljs.core._nth(recur_val,(1));
G__26943 = G__28193;
G__26944 = G__28194;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__26951 = cljs.core._nth(params,(0));
var G__26952 = cljs.core._nth(params,(1));
var G__26953 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__26948,G__26949,G__26950){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__26951,G__26948);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__26952,G__26949);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__26953,G__26950);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28195 = cljs.core._nth(recur_val,(0));
var G__28196 = cljs.core._nth(recur_val,(1));
var G__28197 = cljs.core._nth(recur_val,(2));
G__26948 = G__28195;
G__26949 = G__28196;
G__26950 = G__28197;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__26959 = cljs.core._nth(params,(0));
var G__26960 = cljs.core._nth(params,(1));
var G__26961 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__26956,G__26957,G__26958){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__26959,G__26956);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__26960,G__26957);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__26961,G__26958);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28200 = cljs.core._nth(recur_val,(0));
var G__28201 = cljs.core._nth(recur_val,(1));
var G__28202 = cljs.core._nth(recur_val,(2));
G__26956 = G__28200;
G__26957 = G__28201;
G__26958 = G__28202;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__26992 = cljs.core._nth(params,(0));
var G__26993 = cljs.core._nth(params,(1));
var G__26994 = cljs.core._nth(params,(2));
var G__26995 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__26988,G__26989,G__26990,G__26991){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__26992,G__26988);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__26993,G__26989);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__26994,G__26990);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__26995,G__26991);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28206 = cljs.core._nth(recur_val,(0));
var G__28207 = cljs.core._nth(recur_val,(1));
var G__28208 = cljs.core._nth(recur_val,(2));
var G__28209 = cljs.core._nth(recur_val,(3));
G__26988 = G__28206;
G__26989 = G__28207;
G__26990 = G__28208;
G__26991 = G__28209;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27001 = cljs.core._nth(params,(0));
var G__27002 = cljs.core._nth(params,(1));
var G__27003 = cljs.core._nth(params,(2));
var G__27004 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__26997,G__26998,G__26999,G__27000){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27001,G__26997);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27002,G__26998);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27003,G__26999);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27004,G__27000);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28213 = cljs.core._nth(recur_val,(0));
var G__28214 = cljs.core._nth(recur_val,(1));
var G__28215 = cljs.core._nth(recur_val,(2));
var G__28216 = cljs.core._nth(recur_val,(3));
G__26997 = G__28213;
G__26998 = G__28214;
G__26999 = G__28215;
G__27000 = G__28216;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__27014 = cljs.core._nth(params,(0));
var G__27015 = cljs.core._nth(params,(1));
var G__27016 = cljs.core._nth(params,(2));
var G__27017 = cljs.core._nth(params,(3));
var G__27018 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__27009,G__27010,G__27011,G__27012,G__27013){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__27014,G__27009);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27015,G__27010);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27016,G__27011);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27017,G__27012);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27018,G__27013);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28217 = cljs.core._nth(recur_val,(0));
var G__28218 = cljs.core._nth(recur_val,(1));
var G__28219 = cljs.core._nth(recur_val,(2));
var G__28220 = cljs.core._nth(recur_val,(3));
var G__28221 = cljs.core._nth(recur_val,(4));
G__27009 = G__28217;
G__27010 = G__28218;
G__27011 = G__28219;
G__27012 = G__28220;
G__27013 = G__28221;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27031 = cljs.core._nth(params,(0));
var G__27032 = cljs.core._nth(params,(1));
var G__27033 = cljs.core._nth(params,(2));
var G__27034 = cljs.core._nth(params,(3));
var G__27035 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__27026,G__27027,G__27028,G__27029,G__27030){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27031,G__27026);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27032,G__27027);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27033,G__27028);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27034,G__27029);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27035,G__27030);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28225 = cljs.core._nth(recur_val,(0));
var G__28226 = cljs.core._nth(recur_val,(1));
var G__28227 = cljs.core._nth(recur_val,(2));
var G__28228 = cljs.core._nth(recur_val,(3));
var G__28229 = cljs.core._nth(recur_val,(4));
G__27026 = G__28225;
G__27027 = G__28226;
G__27028 = G__28227;
G__27029 = G__28228;
G__27030 = G__28229;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__27043 = cljs.core._nth(params,(0));
var G__27044 = cljs.core._nth(params,(1));
var G__27045 = cljs.core._nth(params,(2));
var G__27046 = cljs.core._nth(params,(3));
var G__27047 = cljs.core._nth(params,(4));
var G__27048 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__27037,G__27038,G__27039,G__27040,G__27041,G__27042){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__27043,G__27037);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27044,G__27038);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27045,G__27039);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27046,G__27040);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27047,G__27041);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27048,G__27042);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28231 = cljs.core._nth(recur_val,(0));
var G__28232 = cljs.core._nth(recur_val,(1));
var G__28233 = cljs.core._nth(recur_val,(2));
var G__28234 = cljs.core._nth(recur_val,(3));
var G__28235 = cljs.core._nth(recur_val,(4));
var G__28236 = cljs.core._nth(recur_val,(5));
G__27037 = G__28231;
G__27038 = G__28232;
G__27039 = G__28233;
G__27040 = G__28234;
G__27041 = G__28235;
G__27042 = G__28236;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27059 = cljs.core._nth(params,(0));
var G__27060 = cljs.core._nth(params,(1));
var G__27061 = cljs.core._nth(params,(2));
var G__27062 = cljs.core._nth(params,(3));
var G__27063 = cljs.core._nth(params,(4));
var G__27064 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__27053,G__27054,G__27055,G__27056,G__27057,G__27058){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27059,G__27053);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27060,G__27054);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27061,G__27055);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27062,G__27056);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27063,G__27057);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27064,G__27058);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28243 = cljs.core._nth(recur_val,(0));
var G__28244 = cljs.core._nth(recur_val,(1));
var G__28245 = cljs.core._nth(recur_val,(2));
var G__28246 = cljs.core._nth(recur_val,(3));
var G__28247 = cljs.core._nth(recur_val,(4));
var G__28248 = cljs.core._nth(recur_val,(5));
G__27053 = G__28243;
G__27054 = G__28244;
G__27055 = G__28245;
G__27056 = G__28246;
G__27057 = G__28247;
G__27058 = G__28248;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__27081 = cljs.core._nth(params,(0));
var G__27082 = cljs.core._nth(params,(1));
var G__27083 = cljs.core._nth(params,(2));
var G__27084 = cljs.core._nth(params,(3));
var G__27085 = cljs.core._nth(params,(4));
var G__27086 = cljs.core._nth(params,(5));
var G__27087 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__27074,G__27075,G__27076,G__27077,G__27078,G__27079,G__27080){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__27081,G__27074);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27082,G__27075);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27083,G__27076);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27084,G__27077);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27085,G__27078);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27086,G__27079);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27087,G__27080);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28251 = cljs.core._nth(recur_val,(0));
var G__28252 = cljs.core._nth(recur_val,(1));
var G__28253 = cljs.core._nth(recur_val,(2));
var G__28254 = cljs.core._nth(recur_val,(3));
var G__28255 = cljs.core._nth(recur_val,(4));
var G__28256 = cljs.core._nth(recur_val,(5));
var G__28257 = cljs.core._nth(recur_val,(6));
G__27074 = G__28251;
G__27075 = G__28252;
G__27076 = G__28253;
G__27077 = G__28254;
G__27078 = G__28255;
G__27079 = G__28256;
G__27080 = G__28257;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27100 = cljs.core._nth(params,(0));
var G__27101 = cljs.core._nth(params,(1));
var G__27102 = cljs.core._nth(params,(2));
var G__27103 = cljs.core._nth(params,(3));
var G__27104 = cljs.core._nth(params,(4));
var G__27105 = cljs.core._nth(params,(5));
var G__27106 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__27093,G__27094,G__27095,G__27096,G__27097,G__27098,G__27099){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27100,G__27093);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27101,G__27094);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27102,G__27095);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27103,G__27096);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27104,G__27097);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27105,G__27098);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27106,G__27099);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28258 = cljs.core._nth(recur_val,(0));
var G__28259 = cljs.core._nth(recur_val,(1));
var G__28260 = cljs.core._nth(recur_val,(2));
var G__28261 = cljs.core._nth(recur_val,(3));
var G__28262 = cljs.core._nth(recur_val,(4));
var G__28263 = cljs.core._nth(recur_val,(5));
var G__28264 = cljs.core._nth(recur_val,(6));
G__27093 = G__28258;
G__27094 = G__28259;
G__27095 = G__28260;
G__27096 = G__28261;
G__27097 = G__28262;
G__27098 = G__28263;
G__27099 = G__28264;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__27125 = cljs.core._nth(params,(0));
var G__27126 = cljs.core._nth(params,(1));
var G__27127 = cljs.core._nth(params,(2));
var G__27128 = cljs.core._nth(params,(3));
var G__27129 = cljs.core._nth(params,(4));
var G__27130 = cljs.core._nth(params,(5));
var G__27131 = cljs.core._nth(params,(6));
var G__27132 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__27117,G__27118,G__27119,G__27120,G__27121,G__27122,G__27123,G__27124){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__27125,G__27117);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27126,G__27118);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27127,G__27119);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27128,G__27120);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27129,G__27121);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27130,G__27122);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27131,G__27123);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27132,G__27124);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28267 = cljs.core._nth(recur_val,(0));
var G__28268 = cljs.core._nth(recur_val,(1));
var G__28269 = cljs.core._nth(recur_val,(2));
var G__28270 = cljs.core._nth(recur_val,(3));
var G__28271 = cljs.core._nth(recur_val,(4));
var G__28272 = cljs.core._nth(recur_val,(5));
var G__28273 = cljs.core._nth(recur_val,(6));
var G__28274 = cljs.core._nth(recur_val,(7));
G__27117 = G__28267;
G__27118 = G__28268;
G__27119 = G__28269;
G__27120 = G__28270;
G__27121 = G__28271;
G__27122 = G__28272;
G__27123 = G__28273;
G__27124 = G__28274;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27141 = cljs.core._nth(params,(0));
var G__27142 = cljs.core._nth(params,(1));
var G__27143 = cljs.core._nth(params,(2));
var G__27144 = cljs.core._nth(params,(3));
var G__27145 = cljs.core._nth(params,(4));
var G__27146 = cljs.core._nth(params,(5));
var G__27147 = cljs.core._nth(params,(6));
var G__27148 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__27133,G__27134,G__27135,G__27136,G__27137,G__27138,G__27139,G__27140){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27141,G__27133);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27142,G__27134);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27143,G__27135);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27144,G__27136);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27145,G__27137);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27146,G__27138);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27147,G__27139);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27148,G__27140);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28281 = cljs.core._nth(recur_val,(0));
var G__28282 = cljs.core._nth(recur_val,(1));
var G__28283 = cljs.core._nth(recur_val,(2));
var G__28284 = cljs.core._nth(recur_val,(3));
var G__28285 = cljs.core._nth(recur_val,(4));
var G__28286 = cljs.core._nth(recur_val,(5));
var G__28287 = cljs.core._nth(recur_val,(6));
var G__28288 = cljs.core._nth(recur_val,(7));
G__27133 = G__28281;
G__27134 = G__28282;
G__27135 = G__28283;
G__27136 = G__28284;
G__27137 = G__28285;
G__27138 = G__28286;
G__27139 = G__28287;
G__27140 = G__28288;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__27163 = cljs.core._nth(params,(0));
var G__27164 = cljs.core._nth(params,(1));
var G__27165 = cljs.core._nth(params,(2));
var G__27166 = cljs.core._nth(params,(3));
var G__27167 = cljs.core._nth(params,(4));
var G__27168 = cljs.core._nth(params,(5));
var G__27169 = cljs.core._nth(params,(6));
var G__27170 = cljs.core._nth(params,(7));
var G__27171 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__27154,G__27155,G__27156,G__27157,G__27158,G__27159,G__27160,G__27161,G__27162){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__27163,G__27154);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27164,G__27155);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27165,G__27156);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27166,G__27157);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27167,G__27158);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27168,G__27159);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27169,G__27160);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27170,G__27161);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27171,G__27162);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28297 = cljs.core._nth(recur_val,(0));
var G__28298 = cljs.core._nth(recur_val,(1));
var G__28299 = cljs.core._nth(recur_val,(2));
var G__28300 = cljs.core._nth(recur_val,(3));
var G__28301 = cljs.core._nth(recur_val,(4));
var G__28302 = cljs.core._nth(recur_val,(5));
var G__28303 = cljs.core._nth(recur_val,(6));
var G__28304 = cljs.core._nth(recur_val,(7));
var G__28305 = cljs.core._nth(recur_val,(8));
G__27154 = G__28297;
G__27155 = G__28298;
G__27156 = G__28299;
G__27157 = G__28300;
G__27158 = G__28301;
G__27159 = G__28302;
G__27160 = G__28303;
G__27161 = G__28304;
G__27162 = G__28305;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27189 = cljs.core._nth(params,(0));
var G__27190 = cljs.core._nth(params,(1));
var G__27191 = cljs.core._nth(params,(2));
var G__27192 = cljs.core._nth(params,(3));
var G__27193 = cljs.core._nth(params,(4));
var G__27194 = cljs.core._nth(params,(5));
var G__27195 = cljs.core._nth(params,(6));
var G__27196 = cljs.core._nth(params,(7));
var G__27197 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__27180,G__27181,G__27182,G__27183,G__27184,G__27185,G__27186,G__27187,G__27188){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27189,G__27180);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27190,G__27181);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27191,G__27182);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27192,G__27183);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27193,G__27184);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27194,G__27185);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27195,G__27186);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27196,G__27187);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27197,G__27188);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28310 = cljs.core._nth(recur_val,(0));
var G__28311 = cljs.core._nth(recur_val,(1));
var G__28312 = cljs.core._nth(recur_val,(2));
var G__28313 = cljs.core._nth(recur_val,(3));
var G__28314 = cljs.core._nth(recur_val,(4));
var G__28315 = cljs.core._nth(recur_val,(5));
var G__28316 = cljs.core._nth(recur_val,(6));
var G__28317 = cljs.core._nth(recur_val,(7));
var G__28318 = cljs.core._nth(recur_val,(8));
G__27180 = G__28310;
G__27181 = G__28311;
G__27182 = G__28312;
G__27183 = G__28313;
G__27184 = G__28314;
G__27185 = G__28315;
G__27186 = G__28316;
G__27187 = G__28317;
G__27188 = G__28318;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__27219 = cljs.core._nth(params,(0));
var G__27220 = cljs.core._nth(params,(1));
var G__27221 = cljs.core._nth(params,(2));
var G__27222 = cljs.core._nth(params,(3));
var G__27223 = cljs.core._nth(params,(4));
var G__27224 = cljs.core._nth(params,(5));
var G__27225 = cljs.core._nth(params,(6));
var G__27226 = cljs.core._nth(params,(7));
var G__27227 = cljs.core._nth(params,(8));
var G__27228 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__27209,G__27210,G__27211,G__27212,G__27213,G__27214,G__27215,G__27216,G__27217,G__27218){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__27219,G__27209);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27220,G__27210);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27221,G__27211);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27222,G__27212);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27223,G__27213);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27224,G__27214);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27225,G__27215);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27226,G__27216);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27227,G__27217);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27228,G__27218);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28325 = cljs.core._nth(recur_val,(0));
var G__28326 = cljs.core._nth(recur_val,(1));
var G__28327 = cljs.core._nth(recur_val,(2));
var G__28328 = cljs.core._nth(recur_val,(3));
var G__28329 = cljs.core._nth(recur_val,(4));
var G__28330 = cljs.core._nth(recur_val,(5));
var G__28331 = cljs.core._nth(recur_val,(6));
var G__28332 = cljs.core._nth(recur_val,(7));
var G__28333 = cljs.core._nth(recur_val,(8));
var G__28334 = cljs.core._nth(recur_val,(9));
G__27209 = G__28325;
G__27210 = G__28326;
G__27211 = G__28327;
G__27212 = G__28328;
G__27213 = G__28329;
G__27214 = G__28330;
G__27215 = G__28331;
G__27216 = G__28332;
G__27217 = G__28333;
G__27218 = G__28334;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27246 = cljs.core._nth(params,(0));
var G__27247 = cljs.core._nth(params,(1));
var G__27248 = cljs.core._nth(params,(2));
var G__27249 = cljs.core._nth(params,(3));
var G__27250 = cljs.core._nth(params,(4));
var G__27251 = cljs.core._nth(params,(5));
var G__27252 = cljs.core._nth(params,(6));
var G__27253 = cljs.core._nth(params,(7));
var G__27254 = cljs.core._nth(params,(8));
var G__27255 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__27236,G__27237,G__27238,G__27239,G__27240,G__27241,G__27242,G__27243,G__27244,G__27245){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27246,G__27236);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27247,G__27237);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27248,G__27238);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27249,G__27239);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27250,G__27240);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27251,G__27241);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27252,G__27242);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27253,G__27243);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27254,G__27244);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27255,G__27245);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28336 = cljs.core._nth(recur_val,(0));
var G__28337 = cljs.core._nth(recur_val,(1));
var G__28338 = cljs.core._nth(recur_val,(2));
var G__28339 = cljs.core._nth(recur_val,(3));
var G__28340 = cljs.core._nth(recur_val,(4));
var G__28341 = cljs.core._nth(recur_val,(5));
var G__28342 = cljs.core._nth(recur_val,(6));
var G__28343 = cljs.core._nth(recur_val,(7));
var G__28344 = cljs.core._nth(recur_val,(8));
var G__28345 = cljs.core._nth(recur_val,(9));
G__27236 = G__28336;
G__27237 = G__28337;
G__27238 = G__28338;
G__27239 = G__28339;
G__27240 = G__28340;
G__27241 = G__28341;
G__27242 = G__28342;
G__27243 = G__28343;
G__27244 = G__28344;
G__27245 = G__28345;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__27283 = cljs.core._nth(params,(0));
var G__27284 = cljs.core._nth(params,(1));
var G__27285 = cljs.core._nth(params,(2));
var G__27286 = cljs.core._nth(params,(3));
var G__27287 = cljs.core._nth(params,(4));
var G__27288 = cljs.core._nth(params,(5));
var G__27289 = cljs.core._nth(params,(6));
var G__27290 = cljs.core._nth(params,(7));
var G__27291 = cljs.core._nth(params,(8));
var G__27292 = cljs.core._nth(params,(9));
var G__27293 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__27272,G__27273,G__27274,G__27275,G__27276,G__27277,G__27278,G__27279,G__27280,G__27281,G__27282){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__27283,G__27272);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27284,G__27273);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27285,G__27274);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27286,G__27275);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27287,G__27276);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27288,G__27277);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27289,G__27278);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27290,G__27279);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27291,G__27280);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27292,G__27281);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27293,G__27282);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28348 = cljs.core._nth(recur_val,(0));
var G__28349 = cljs.core._nth(recur_val,(1));
var G__28350 = cljs.core._nth(recur_val,(2));
var G__28351 = cljs.core._nth(recur_val,(3));
var G__28352 = cljs.core._nth(recur_val,(4));
var G__28353 = cljs.core._nth(recur_val,(5));
var G__28354 = cljs.core._nth(recur_val,(6));
var G__28355 = cljs.core._nth(recur_val,(7));
var G__28356 = cljs.core._nth(recur_val,(8));
var G__28357 = cljs.core._nth(recur_val,(9));
var G__28358 = cljs.core._nth(recur_val,(10));
G__27272 = G__28348;
G__27273 = G__28349;
G__27274 = G__28350;
G__27275 = G__28351;
G__27276 = G__28352;
G__27277 = G__28353;
G__27278 = G__28354;
G__27279 = G__28355;
G__27280 = G__28356;
G__27281 = G__28357;
G__27282 = G__28358;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27328 = cljs.core._nth(params,(0));
var G__27329 = cljs.core._nth(params,(1));
var G__27330 = cljs.core._nth(params,(2));
var G__27331 = cljs.core._nth(params,(3));
var G__27332 = cljs.core._nth(params,(4));
var G__27333 = cljs.core._nth(params,(5));
var G__27334 = cljs.core._nth(params,(6));
var G__27335 = cljs.core._nth(params,(7));
var G__27336 = cljs.core._nth(params,(8));
var G__27337 = cljs.core._nth(params,(9));
var G__27338 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__27317,G__27318,G__27319,G__27320,G__27321,G__27322,G__27323,G__27324,G__27325,G__27326,G__27327){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27328,G__27317);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27329,G__27318);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27330,G__27319);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27331,G__27320);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27332,G__27321);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27333,G__27322);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27334,G__27323);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27335,G__27324);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27336,G__27325);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27337,G__27326);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27338,G__27327);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28363 = cljs.core._nth(recur_val,(0));
var G__28364 = cljs.core._nth(recur_val,(1));
var G__28365 = cljs.core._nth(recur_val,(2));
var G__28366 = cljs.core._nth(recur_val,(3));
var G__28367 = cljs.core._nth(recur_val,(4));
var G__28368 = cljs.core._nth(recur_val,(5));
var G__28369 = cljs.core._nth(recur_val,(6));
var G__28370 = cljs.core._nth(recur_val,(7));
var G__28371 = cljs.core._nth(recur_val,(8));
var G__28372 = cljs.core._nth(recur_val,(9));
var G__28373 = cljs.core._nth(recur_val,(10));
G__27317 = G__28363;
G__27318 = G__28364;
G__27319 = G__28365;
G__27320 = G__28366;
G__27321 = G__28367;
G__27322 = G__28368;
G__27323 = G__28369;
G__27324 = G__28370;
G__27325 = G__28371;
G__27326 = G__28372;
G__27327 = G__28373;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__27358 = cljs.core._nth(params,(0));
var G__27359 = cljs.core._nth(params,(1));
var G__27360 = cljs.core._nth(params,(2));
var G__27361 = cljs.core._nth(params,(3));
var G__27362 = cljs.core._nth(params,(4));
var G__27363 = cljs.core._nth(params,(5));
var G__27364 = cljs.core._nth(params,(6));
var G__27365 = cljs.core._nth(params,(7));
var G__27366 = cljs.core._nth(params,(8));
var G__27367 = cljs.core._nth(params,(9));
var G__27368 = cljs.core._nth(params,(10));
var G__27369 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__27346,G__27347,G__27348,G__27349,G__27350,G__27351,G__27352,G__27353,G__27354,G__27355,G__27356,G__27357){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__27358,G__27346);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27359,G__27347);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27360,G__27348);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27361,G__27349);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27362,G__27350);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27363,G__27351);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27364,G__27352);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27365,G__27353);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27366,G__27354);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27367,G__27355);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27368,G__27356);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__27369,G__27357);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28377 = cljs.core._nth(recur_val,(0));
var G__28378 = cljs.core._nth(recur_val,(1));
var G__28379 = cljs.core._nth(recur_val,(2));
var G__28380 = cljs.core._nth(recur_val,(3));
var G__28381 = cljs.core._nth(recur_val,(4));
var G__28382 = cljs.core._nth(recur_val,(5));
var G__28383 = cljs.core._nth(recur_val,(6));
var G__28384 = cljs.core._nth(recur_val,(7));
var G__28385 = cljs.core._nth(recur_val,(8));
var G__28386 = cljs.core._nth(recur_val,(9));
var G__28387 = cljs.core._nth(recur_val,(10));
var G__28388 = cljs.core._nth(recur_val,(11));
G__27346 = G__28377;
G__27347 = G__28378;
G__27348 = G__28379;
G__27349 = G__28380;
G__27350 = G__28381;
G__27351 = G__28382;
G__27352 = G__28383;
G__27353 = G__28384;
G__27354 = G__28385;
G__27355 = G__28386;
G__27356 = G__28387;
G__27357 = G__28388;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27397 = cljs.core._nth(params,(0));
var G__27398 = cljs.core._nth(params,(1));
var G__27399 = cljs.core._nth(params,(2));
var G__27400 = cljs.core._nth(params,(3));
var G__27401 = cljs.core._nth(params,(4));
var G__27402 = cljs.core._nth(params,(5));
var G__27403 = cljs.core._nth(params,(6));
var G__27404 = cljs.core._nth(params,(7));
var G__27405 = cljs.core._nth(params,(8));
var G__27406 = cljs.core._nth(params,(9));
var G__27407 = cljs.core._nth(params,(10));
var G__27408 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__27385,G__27386,G__27387,G__27388,G__27389,G__27390,G__27391,G__27392,G__27393,G__27394,G__27395,G__27396){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27397,G__27385);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27398,G__27386);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27399,G__27387);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27400,G__27388);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27401,G__27389);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27402,G__27390);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27403,G__27391);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27404,G__27392);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27405,G__27393);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27406,G__27394);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27407,G__27395);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__27408,G__27396);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28395 = cljs.core._nth(recur_val,(0));
var G__28396 = cljs.core._nth(recur_val,(1));
var G__28397 = cljs.core._nth(recur_val,(2));
var G__28398 = cljs.core._nth(recur_val,(3));
var G__28399 = cljs.core._nth(recur_val,(4));
var G__28400 = cljs.core._nth(recur_val,(5));
var G__28401 = cljs.core._nth(recur_val,(6));
var G__28402 = cljs.core._nth(recur_val,(7));
var G__28403 = cljs.core._nth(recur_val,(8));
var G__28404 = cljs.core._nth(recur_val,(9));
var G__28405 = cljs.core._nth(recur_val,(10));
var G__28406 = cljs.core._nth(recur_val,(11));
G__27385 = G__28395;
G__27386 = G__28396;
G__27387 = G__28397;
G__27388 = G__28398;
G__27389 = G__28399;
G__27390 = G__28400;
G__27391 = G__28401;
G__27392 = G__28402;
G__27393 = G__28403;
G__27394 = G__28404;
G__27395 = G__28405;
G__27396 = G__28406;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__27434 = cljs.core._nth(params,(0));
var G__27436 = cljs.core._nth(params,(1));
var G__27437 = cljs.core._nth(params,(2));
var G__27438 = cljs.core._nth(params,(3));
var G__27439 = cljs.core._nth(params,(4));
var G__27440 = cljs.core._nth(params,(5));
var G__27441 = cljs.core._nth(params,(6));
var G__27442 = cljs.core._nth(params,(7));
var G__27443 = cljs.core._nth(params,(8));
var G__27444 = cljs.core._nth(params,(9));
var G__27445 = cljs.core._nth(params,(10));
var G__27446 = cljs.core._nth(params,(11));
var G__27447 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__27421,G__27422,G__27423,G__27424,G__27425,G__27426,G__27427,G__27428,G__27429,G__27430,G__27431,G__27432,G__27433){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__27434,G__27421);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27436,G__27422);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27437,G__27423);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27438,G__27424);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27439,G__27425);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27440,G__27426);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27441,G__27427);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27442,G__27428);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27443,G__27429);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27444,G__27430);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27445,G__27431);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__27446,G__27432);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__27447,G__27433);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28411 = cljs.core._nth(recur_val,(0));
var G__28412 = cljs.core._nth(recur_val,(1));
var G__28413 = cljs.core._nth(recur_val,(2));
var G__28414 = cljs.core._nth(recur_val,(3));
var G__28415 = cljs.core._nth(recur_val,(4));
var G__28416 = cljs.core._nth(recur_val,(5));
var G__28417 = cljs.core._nth(recur_val,(6));
var G__28418 = cljs.core._nth(recur_val,(7));
var G__28419 = cljs.core._nth(recur_val,(8));
var G__28420 = cljs.core._nth(recur_val,(9));
var G__28421 = cljs.core._nth(recur_val,(10));
var G__28422 = cljs.core._nth(recur_val,(11));
var G__28423 = cljs.core._nth(recur_val,(12));
G__27421 = G__28411;
G__27422 = G__28412;
G__27423 = G__28413;
G__27424 = G__28414;
G__27425 = G__28415;
G__27426 = G__28416;
G__27427 = G__28417;
G__27428 = G__28418;
G__27429 = G__28419;
G__27430 = G__28420;
G__27431 = G__28421;
G__27432 = G__28422;
G__27433 = G__28423;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27467 = cljs.core._nth(params,(0));
var G__27468 = cljs.core._nth(params,(1));
var G__27469 = cljs.core._nth(params,(2));
var G__27470 = cljs.core._nth(params,(3));
var G__27471 = cljs.core._nth(params,(4));
var G__27472 = cljs.core._nth(params,(5));
var G__27473 = cljs.core._nth(params,(6));
var G__27474 = cljs.core._nth(params,(7));
var G__27475 = cljs.core._nth(params,(8));
var G__27476 = cljs.core._nth(params,(9));
var G__27477 = cljs.core._nth(params,(10));
var G__27478 = cljs.core._nth(params,(11));
var G__27479 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__27454,G__27455,G__27456,G__27457,G__27458,G__27459,G__27460,G__27461,G__27462,G__27463,G__27464,G__27465,G__27466){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27467,G__27454);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27468,G__27455);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27469,G__27456);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27470,G__27457);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27471,G__27458);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27472,G__27459);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27473,G__27460);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27474,G__27461);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27475,G__27462);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27476,G__27463);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27477,G__27464);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__27478,G__27465);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__27479,G__27466);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28434 = cljs.core._nth(recur_val,(0));
var G__28435 = cljs.core._nth(recur_val,(1));
var G__28436 = cljs.core._nth(recur_val,(2));
var G__28437 = cljs.core._nth(recur_val,(3));
var G__28438 = cljs.core._nth(recur_val,(4));
var G__28439 = cljs.core._nth(recur_val,(5));
var G__28440 = cljs.core._nth(recur_val,(6));
var G__28441 = cljs.core._nth(recur_val,(7));
var G__28442 = cljs.core._nth(recur_val,(8));
var G__28443 = cljs.core._nth(recur_val,(9));
var G__28444 = cljs.core._nth(recur_val,(10));
var G__28445 = cljs.core._nth(recur_val,(11));
var G__28446 = cljs.core._nth(recur_val,(12));
G__27454 = G__28434;
G__27455 = G__28435;
G__27456 = G__28436;
G__27457 = G__28437;
G__27458 = G__28438;
G__27459 = G__28439;
G__27460 = G__28440;
G__27461 = G__28441;
G__27462 = G__28442;
G__27463 = G__28443;
G__27464 = G__28444;
G__27465 = G__28445;
G__27466 = G__28446;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__27508 = cljs.core._nth(params,(0));
var G__27509 = cljs.core._nth(params,(1));
var G__27510 = cljs.core._nth(params,(2));
var G__27511 = cljs.core._nth(params,(3));
var G__27512 = cljs.core._nth(params,(4));
var G__27513 = cljs.core._nth(params,(5));
var G__27514 = cljs.core._nth(params,(6));
var G__27515 = cljs.core._nth(params,(7));
var G__27516 = cljs.core._nth(params,(8));
var G__27517 = cljs.core._nth(params,(9));
var G__27518 = cljs.core._nth(params,(10));
var G__27519 = cljs.core._nth(params,(11));
var G__27520 = cljs.core._nth(params,(12));
var G__27521 = cljs.core._nth(params,(13));
var G__27522 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__27493,G__27494,G__27495,G__27496,G__27497,G__27498,G__27499,G__27500,G__27501,G__27502,G__27503,G__27504,G__27505,G__27506,G__27507){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__27508,G__27493);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27509,G__27494);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27510,G__27495);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27511,G__27496);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27512,G__27497);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27513,G__27498);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27514,G__27499);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27515,G__27500);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27516,G__27501);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27517,G__27502);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27518,G__27503);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__27519,G__27504);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__27520,G__27505);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__27521,G__27506);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__27522,G__27507);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28462 = cljs.core._nth(recur_val,(0));
var G__28463 = cljs.core._nth(recur_val,(1));
var G__28464 = cljs.core._nth(recur_val,(2));
var G__28465 = cljs.core._nth(recur_val,(3));
var G__28466 = cljs.core._nth(recur_val,(4));
var G__28467 = cljs.core._nth(recur_val,(5));
var G__28468 = cljs.core._nth(recur_val,(6));
var G__28469 = cljs.core._nth(recur_val,(7));
var G__28470 = cljs.core._nth(recur_val,(8));
var G__28471 = cljs.core._nth(recur_val,(9));
var G__28472 = cljs.core._nth(recur_val,(10));
var G__28473 = cljs.core._nth(recur_val,(11));
var G__28474 = cljs.core._nth(recur_val,(12));
var G__28475 = cljs.core._nth(recur_val,(13));
var G__28476 = cljs.core._nth(recur_val,(14));
G__27493 = G__28462;
G__27494 = G__28463;
G__27495 = G__28464;
G__27496 = G__28465;
G__27497 = G__28466;
G__27498 = G__28467;
G__27499 = G__28468;
G__27500 = G__28469;
G__27501 = G__28470;
G__27502 = G__28471;
G__27503 = G__28472;
G__27504 = G__28473;
G__27505 = G__28474;
G__27506 = G__28475;
G__27507 = G__28476;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27547 = cljs.core._nth(params,(0));
var G__27548 = cljs.core._nth(params,(1));
var G__27549 = cljs.core._nth(params,(2));
var G__27550 = cljs.core._nth(params,(3));
var G__27551 = cljs.core._nth(params,(4));
var G__27552 = cljs.core._nth(params,(5));
var G__27553 = cljs.core._nth(params,(6));
var G__27554 = cljs.core._nth(params,(7));
var G__27555 = cljs.core._nth(params,(8));
var G__27556 = cljs.core._nth(params,(9));
var G__27557 = cljs.core._nth(params,(10));
var G__27558 = cljs.core._nth(params,(11));
var G__27559 = cljs.core._nth(params,(12));
var G__27560 = cljs.core._nth(params,(13));
var G__27561 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__27532,G__27533,G__27534,G__27535,G__27536,G__27537,G__27538,G__27539,G__27540,G__27541,G__27542,G__27543,G__27544,G__27545,G__27546){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27547,G__27532);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27548,G__27533);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27549,G__27534);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27550,G__27535);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27551,G__27536);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27552,G__27537);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27553,G__27538);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27554,G__27539);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27555,G__27540);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27556,G__27541);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27557,G__27542);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__27558,G__27543);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__27559,G__27544);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__27560,G__27545);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__27561,G__27546);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28484 = cljs.core._nth(recur_val,(0));
var G__28485 = cljs.core._nth(recur_val,(1));
var G__28486 = cljs.core._nth(recur_val,(2));
var G__28487 = cljs.core._nth(recur_val,(3));
var G__28488 = cljs.core._nth(recur_val,(4));
var G__28489 = cljs.core._nth(recur_val,(5));
var G__28490 = cljs.core._nth(recur_val,(6));
var G__28491 = cljs.core._nth(recur_val,(7));
var G__28492 = cljs.core._nth(recur_val,(8));
var G__28493 = cljs.core._nth(recur_val,(9));
var G__28494 = cljs.core._nth(recur_val,(10));
var G__28495 = cljs.core._nth(recur_val,(11));
var G__28496 = cljs.core._nth(recur_val,(12));
var G__28497 = cljs.core._nth(recur_val,(13));
var G__28498 = cljs.core._nth(recur_val,(14));
G__27532 = G__28484;
G__27533 = G__28485;
G__27534 = G__28486;
G__27535 = G__28487;
G__27536 = G__28488;
G__27537 = G__28489;
G__27538 = G__28490;
G__27539 = G__28491;
G__27540 = G__28492;
G__27541 = G__28493;
G__27542 = G__28494;
G__27543 = G__28495;
G__27544 = G__28496;
G__27545 = G__28497;
G__27546 = G__28498;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__27591 = cljs.core._nth(params,(0));
var G__27592 = cljs.core._nth(params,(1));
var G__27593 = cljs.core._nth(params,(2));
var G__27594 = cljs.core._nth(params,(3));
var G__27595 = cljs.core._nth(params,(4));
var G__27596 = cljs.core._nth(params,(5));
var G__27597 = cljs.core._nth(params,(6));
var G__27598 = cljs.core._nth(params,(7));
var G__27599 = cljs.core._nth(params,(8));
var G__27600 = cljs.core._nth(params,(9));
var G__27601 = cljs.core._nth(params,(10));
var G__27602 = cljs.core._nth(params,(11));
var G__27603 = cljs.core._nth(params,(12));
var G__27604 = cljs.core._nth(params,(13));
var G__27605 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__27576,G__27577,G__27578,G__27579,G__27580,G__27581,G__27582,G__27583,G__27584,G__27585,G__27586,G__27587,G__27588,G__27589,G__27590){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__27591,G__27576);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27592,G__27577);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27593,G__27578);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27594,G__27579);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27595,G__27580);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27596,G__27581);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27597,G__27582);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27598,G__27583);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27599,G__27584);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27600,G__27585);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27601,G__27586);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__27602,G__27587);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__27603,G__27588);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__27604,G__27589);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__27605,G__27590);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28503 = cljs.core._nth(recur_val,(0));
var G__28504 = cljs.core._nth(recur_val,(1));
var G__28505 = cljs.core._nth(recur_val,(2));
var G__28506 = cljs.core._nth(recur_val,(3));
var G__28507 = cljs.core._nth(recur_val,(4));
var G__28508 = cljs.core._nth(recur_val,(5));
var G__28509 = cljs.core._nth(recur_val,(6));
var G__28510 = cljs.core._nth(recur_val,(7));
var G__28511 = cljs.core._nth(recur_val,(8));
var G__28512 = cljs.core._nth(recur_val,(9));
var G__28513 = cljs.core._nth(recur_val,(10));
var G__28514 = cljs.core._nth(recur_val,(11));
var G__28515 = cljs.core._nth(recur_val,(12));
var G__28516 = cljs.core._nth(recur_val,(13));
var G__28517 = cljs.core._nth(recur_val,(14));
G__27576 = G__28503;
G__27577 = G__28504;
G__27578 = G__28505;
G__27579 = G__28506;
G__27580 = G__28507;
G__27581 = G__28508;
G__27582 = G__28509;
G__27583 = G__28510;
G__27584 = G__28511;
G__27585 = G__28512;
G__27586 = G__28513;
G__27587 = G__28514;
G__27588 = G__28515;
G__27589 = G__28516;
G__27590 = G__28517;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27626 = cljs.core._nth(params,(0));
var G__27627 = cljs.core._nth(params,(1));
var G__27628 = cljs.core._nth(params,(2));
var G__27629 = cljs.core._nth(params,(3));
var G__27630 = cljs.core._nth(params,(4));
var G__27631 = cljs.core._nth(params,(5));
var G__27632 = cljs.core._nth(params,(6));
var G__27633 = cljs.core._nth(params,(7));
var G__27634 = cljs.core._nth(params,(8));
var G__27635 = cljs.core._nth(params,(9));
var G__27636 = cljs.core._nth(params,(10));
var G__27637 = cljs.core._nth(params,(11));
var G__27638 = cljs.core._nth(params,(12));
var G__27639 = cljs.core._nth(params,(13));
var G__27640 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__27611,G__27612,G__27613,G__27614,G__27615,G__27616,G__27617,G__27618,G__27619,G__27620,G__27621,G__27622,G__27623,G__27624,G__27625){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27626,G__27611);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27627,G__27612);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27628,G__27613);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27629,G__27614);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27630,G__27615);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27631,G__27616);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27632,G__27617);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27633,G__27618);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27634,G__27619);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27635,G__27620);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27636,G__27621);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__27637,G__27622);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__27638,G__27623);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__27639,G__27624);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__27640,G__27625);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28522 = cljs.core._nth(recur_val,(0));
var G__28523 = cljs.core._nth(recur_val,(1));
var G__28524 = cljs.core._nth(recur_val,(2));
var G__28525 = cljs.core._nth(recur_val,(3));
var G__28526 = cljs.core._nth(recur_val,(4));
var G__28527 = cljs.core._nth(recur_val,(5));
var G__28528 = cljs.core._nth(recur_val,(6));
var G__28529 = cljs.core._nth(recur_val,(7));
var G__28530 = cljs.core._nth(recur_val,(8));
var G__28531 = cljs.core._nth(recur_val,(9));
var G__28532 = cljs.core._nth(recur_val,(10));
var G__28533 = cljs.core._nth(recur_val,(11));
var G__28534 = cljs.core._nth(recur_val,(12));
var G__28535 = cljs.core._nth(recur_val,(13));
var G__28536 = cljs.core._nth(recur_val,(14));
G__27611 = G__28522;
G__27612 = G__28523;
G__27613 = G__28524;
G__27614 = G__28525;
G__27615 = G__28526;
G__27616 = G__28527;
G__27617 = G__28528;
G__27618 = G__28529;
G__27619 = G__28530;
G__27620 = G__28531;
G__27621 = G__28532;
G__27622 = G__28533;
G__27623 = G__28534;
G__27624 = G__28535;
G__27625 = G__28536;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__27666 = cljs.core._nth(params,(0));
var G__27667 = cljs.core._nth(params,(1));
var G__27668 = cljs.core._nth(params,(2));
var G__27669 = cljs.core._nth(params,(3));
var G__27670 = cljs.core._nth(params,(4));
var G__27671 = cljs.core._nth(params,(5));
var G__27672 = cljs.core._nth(params,(6));
var G__27673 = cljs.core._nth(params,(7));
var G__27674 = cljs.core._nth(params,(8));
var G__27675 = cljs.core._nth(params,(9));
var G__27676 = cljs.core._nth(params,(10));
var G__27677 = cljs.core._nth(params,(11));
var G__27678 = cljs.core._nth(params,(12));
var G__27679 = cljs.core._nth(params,(13));
var G__27680 = cljs.core._nth(params,(14));
var G__27681 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__27650,G__27651,G__27652,G__27653,G__27654,G__27655,G__27656,G__27657,G__27658,G__27659,G__27660,G__27661,G__27662,G__27663,G__27664,G__27665){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__27666,G__27650);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27667,G__27651);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27668,G__27652);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27669,G__27653);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27670,G__27654);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27671,G__27655);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27672,G__27656);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27673,G__27657);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27674,G__27658);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27675,G__27659);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27676,G__27660);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__27677,G__27661);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__27678,G__27662);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__27679,G__27663);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__27680,G__27664);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__27681,G__27665);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28548 = cljs.core._nth(recur_val,(0));
var G__28549 = cljs.core._nth(recur_val,(1));
var G__28550 = cljs.core._nth(recur_val,(2));
var G__28551 = cljs.core._nth(recur_val,(3));
var G__28552 = cljs.core._nth(recur_val,(4));
var G__28553 = cljs.core._nth(recur_val,(5));
var G__28554 = cljs.core._nth(recur_val,(6));
var G__28555 = cljs.core._nth(recur_val,(7));
var G__28556 = cljs.core._nth(recur_val,(8));
var G__28557 = cljs.core._nth(recur_val,(9));
var G__28558 = cljs.core._nth(recur_val,(10));
var G__28559 = cljs.core._nth(recur_val,(11));
var G__28560 = cljs.core._nth(recur_val,(12));
var G__28561 = cljs.core._nth(recur_val,(13));
var G__28562 = cljs.core._nth(recur_val,(14));
var G__28563 = cljs.core._nth(recur_val,(15));
G__27650 = G__28548;
G__27651 = G__28549;
G__27652 = G__28550;
G__27653 = G__28551;
G__27654 = G__28552;
G__27655 = G__28553;
G__27656 = G__28554;
G__27657 = G__28555;
G__27658 = G__28556;
G__27659 = G__28557;
G__27660 = G__28558;
G__27661 = G__28559;
G__27662 = G__28560;
G__27663 = G__28561;
G__27664 = G__28562;
G__27665 = G__28563;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27701 = cljs.core._nth(params,(0));
var G__27702 = cljs.core._nth(params,(1));
var G__27703 = cljs.core._nth(params,(2));
var G__27704 = cljs.core._nth(params,(3));
var G__27705 = cljs.core._nth(params,(4));
var G__27706 = cljs.core._nth(params,(5));
var G__27707 = cljs.core._nth(params,(6));
var G__27708 = cljs.core._nth(params,(7));
var G__27709 = cljs.core._nth(params,(8));
var G__27710 = cljs.core._nth(params,(9));
var G__27711 = cljs.core._nth(params,(10));
var G__27712 = cljs.core._nth(params,(11));
var G__27713 = cljs.core._nth(params,(12));
var G__27714 = cljs.core._nth(params,(13));
var G__27715 = cljs.core._nth(params,(14));
var G__27716 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__27685,G__27686,G__27687,G__27688,G__27689,G__27690,G__27691,G__27692,G__27693,G__27694,G__27695,G__27696,G__27697,G__27698,G__27699,G__27700){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27701,G__27685);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27702,G__27686);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27703,G__27687);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27704,G__27688);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27705,G__27689);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27706,G__27690);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27707,G__27691);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27708,G__27692);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27709,G__27693);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27710,G__27694);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27711,G__27695);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__27712,G__27696);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__27713,G__27697);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__27714,G__27698);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__27715,G__27699);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__27716,G__27700);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28570 = cljs.core._nth(recur_val,(0));
var G__28571 = cljs.core._nth(recur_val,(1));
var G__28572 = cljs.core._nth(recur_val,(2));
var G__28573 = cljs.core._nth(recur_val,(3));
var G__28574 = cljs.core._nth(recur_val,(4));
var G__28575 = cljs.core._nth(recur_val,(5));
var G__28576 = cljs.core._nth(recur_val,(6));
var G__28577 = cljs.core._nth(recur_val,(7));
var G__28578 = cljs.core._nth(recur_val,(8));
var G__28579 = cljs.core._nth(recur_val,(9));
var G__28580 = cljs.core._nth(recur_val,(10));
var G__28581 = cljs.core._nth(recur_val,(11));
var G__28582 = cljs.core._nth(recur_val,(12));
var G__28583 = cljs.core._nth(recur_val,(13));
var G__28584 = cljs.core._nth(recur_val,(14));
var G__28585 = cljs.core._nth(recur_val,(15));
G__27685 = G__28570;
G__27686 = G__28571;
G__27687 = G__28572;
G__27688 = G__28573;
G__27689 = G__28574;
G__27690 = G__28575;
G__27691 = G__28576;
G__27692 = G__28577;
G__27693 = G__28578;
G__27694 = G__28579;
G__27695 = G__28580;
G__27696 = G__28581;
G__27697 = G__28582;
G__27698 = G__28583;
G__27699 = G__28584;
G__27700 = G__28585;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__27735 = cljs.core._nth(params,(0));
var G__27736 = cljs.core._nth(params,(1));
var G__27737 = cljs.core._nth(params,(2));
var G__27738 = cljs.core._nth(params,(3));
var G__27739 = cljs.core._nth(params,(4));
var G__27740 = cljs.core._nth(params,(5));
var G__27741 = cljs.core._nth(params,(6));
var G__27742 = cljs.core._nth(params,(7));
var G__27743 = cljs.core._nth(params,(8));
var G__27744 = cljs.core._nth(params,(9));
var G__27745 = cljs.core._nth(params,(10));
var G__27746 = cljs.core._nth(params,(11));
var G__27747 = cljs.core._nth(params,(12));
var G__27748 = cljs.core._nth(params,(13));
var G__27749 = cljs.core._nth(params,(14));
var G__27750 = cljs.core._nth(params,(15));
var G__27751 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__27718,G__27719,G__27720,G__27721,G__27722,G__27723,G__27724,G__27725,G__27726,G__27727,G__27728,G__27729,G__27730,G__27731,G__27732,G__27733,G__27734){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__27735,G__27718);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27736,G__27719);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27737,G__27720);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27738,G__27721);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27739,G__27722);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27740,G__27723);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27741,G__27724);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27742,G__27725);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27743,G__27726);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27744,G__27727);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27745,G__27728);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__27746,G__27729);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__27747,G__27730);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__27748,G__27731);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__27749,G__27732);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__27750,G__27733);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__27751,G__27734);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28615 = cljs.core._nth(recur_val,(0));
var G__28616 = cljs.core._nth(recur_val,(1));
var G__28617 = cljs.core._nth(recur_val,(2));
var G__28618 = cljs.core._nth(recur_val,(3));
var G__28619 = cljs.core._nth(recur_val,(4));
var G__28620 = cljs.core._nth(recur_val,(5));
var G__28621 = cljs.core._nth(recur_val,(6));
var G__28622 = cljs.core._nth(recur_val,(7));
var G__28623 = cljs.core._nth(recur_val,(8));
var G__28624 = cljs.core._nth(recur_val,(9));
var G__28625 = cljs.core._nth(recur_val,(10));
var G__28626 = cljs.core._nth(recur_val,(11));
var G__28627 = cljs.core._nth(recur_val,(12));
var G__28628 = cljs.core._nth(recur_val,(13));
var G__28629 = cljs.core._nth(recur_val,(14));
var G__28630 = cljs.core._nth(recur_val,(15));
var G__28631 = cljs.core._nth(recur_val,(16));
G__27718 = G__28615;
G__27719 = G__28616;
G__27720 = G__28617;
G__27721 = G__28618;
G__27722 = G__28619;
G__27723 = G__28620;
G__27724 = G__28621;
G__27725 = G__28622;
G__27726 = G__28623;
G__27727 = G__28624;
G__27728 = G__28625;
G__27729 = G__28626;
G__27730 = G__28627;
G__27731 = G__28628;
G__27732 = G__28629;
G__27733 = G__28630;
G__27734 = G__28631;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27774 = cljs.core._nth(params,(0));
var G__27775 = cljs.core._nth(params,(1));
var G__27776 = cljs.core._nth(params,(2));
var G__27777 = cljs.core._nth(params,(3));
var G__27778 = cljs.core._nth(params,(4));
var G__27779 = cljs.core._nth(params,(5));
var G__27780 = cljs.core._nth(params,(6));
var G__27781 = cljs.core._nth(params,(7));
var G__27782 = cljs.core._nth(params,(8));
var G__27783 = cljs.core._nth(params,(9));
var G__27784 = cljs.core._nth(params,(10));
var G__27785 = cljs.core._nth(params,(11));
var G__27786 = cljs.core._nth(params,(12));
var G__27787 = cljs.core._nth(params,(13));
var G__27788 = cljs.core._nth(params,(14));
var G__27789 = cljs.core._nth(params,(15));
var G__27790 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__27757,G__27758,G__27759,G__27760,G__27761,G__27762,G__27763,G__27764,G__27765,G__27766,G__27767,G__27768,G__27769,G__27770,G__27771,G__27772,G__27773){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27774,G__27757);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27775,G__27758);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27776,G__27759);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27777,G__27760);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27778,G__27761);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27779,G__27762);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27780,G__27763);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27781,G__27764);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27782,G__27765);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27783,G__27766);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27784,G__27767);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__27785,G__27768);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__27786,G__27769);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__27787,G__27770);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__27788,G__27771);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__27789,G__27772);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__27790,G__27773);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28660 = cljs.core._nth(recur_val,(0));
var G__28661 = cljs.core._nth(recur_val,(1));
var G__28662 = cljs.core._nth(recur_val,(2));
var G__28663 = cljs.core._nth(recur_val,(3));
var G__28664 = cljs.core._nth(recur_val,(4));
var G__28665 = cljs.core._nth(recur_val,(5));
var G__28666 = cljs.core._nth(recur_val,(6));
var G__28667 = cljs.core._nth(recur_val,(7));
var G__28668 = cljs.core._nth(recur_val,(8));
var G__28669 = cljs.core._nth(recur_val,(9));
var G__28670 = cljs.core._nth(recur_val,(10));
var G__28671 = cljs.core._nth(recur_val,(11));
var G__28672 = cljs.core._nth(recur_val,(12));
var G__28673 = cljs.core._nth(recur_val,(13));
var G__28674 = cljs.core._nth(recur_val,(14));
var G__28675 = cljs.core._nth(recur_val,(15));
var G__28676 = cljs.core._nth(recur_val,(16));
G__27757 = G__28660;
G__27758 = G__28661;
G__27759 = G__28662;
G__27760 = G__28663;
G__27761 = G__28664;
G__27762 = G__28665;
G__27763 = G__28666;
G__27764 = G__28667;
G__27765 = G__28668;
G__27766 = G__28669;
G__27767 = G__28670;
G__27768 = G__28671;
G__27769 = G__28672;
G__27770 = G__28673;
G__27771 = G__28674;
G__27772 = G__28675;
G__27773 = G__28676;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__27844 = cljs.core._nth(params,(0));
var G__27845 = cljs.core._nth(params,(1));
var G__27846 = cljs.core._nth(params,(2));
var G__27847 = cljs.core._nth(params,(3));
var G__27848 = cljs.core._nth(params,(4));
var G__27849 = cljs.core._nth(params,(5));
var G__27850 = cljs.core._nth(params,(6));
var G__27851 = cljs.core._nth(params,(7));
var G__27852 = cljs.core._nth(params,(8));
var G__27853 = cljs.core._nth(params,(9));
var G__27854 = cljs.core._nth(params,(10));
var G__27855 = cljs.core._nth(params,(11));
var G__27856 = cljs.core._nth(params,(12));
var G__27857 = cljs.core._nth(params,(13));
var G__27858 = cljs.core._nth(params,(14));
var G__27859 = cljs.core._nth(params,(15));
var G__27860 = cljs.core._nth(params,(16));
var G__27861 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__27826,G__27827,G__27828,G__27829,G__27830,G__27831,G__27832,G__27833,G__27834,G__27835,G__27836,G__27837,G__27838,G__27839,G__27840,G__27841,G__27842,G__27843){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__27844,G__27826);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27845,G__27827);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27846,G__27828);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27847,G__27829);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27848,G__27830);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27849,G__27831);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27850,G__27832);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27851,G__27833);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27852,G__27834);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27853,G__27835);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27854,G__27836);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__27855,G__27837);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__27856,G__27838);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__27857,G__27839);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__27858,G__27840);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__27859,G__27841);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__27860,G__27842);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__27861,G__27843);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28695 = cljs.core._nth(recur_val,(0));
var G__28696 = cljs.core._nth(recur_val,(1));
var G__28697 = cljs.core._nth(recur_val,(2));
var G__28698 = cljs.core._nth(recur_val,(3));
var G__28699 = cljs.core._nth(recur_val,(4));
var G__28700 = cljs.core._nth(recur_val,(5));
var G__28701 = cljs.core._nth(recur_val,(6));
var G__28702 = cljs.core._nth(recur_val,(7));
var G__28703 = cljs.core._nth(recur_val,(8));
var G__28704 = cljs.core._nth(recur_val,(9));
var G__28705 = cljs.core._nth(recur_val,(10));
var G__28706 = cljs.core._nth(recur_val,(11));
var G__28707 = cljs.core._nth(recur_val,(12));
var G__28708 = cljs.core._nth(recur_val,(13));
var G__28709 = cljs.core._nth(recur_val,(14));
var G__28710 = cljs.core._nth(recur_val,(15));
var G__28711 = cljs.core._nth(recur_val,(16));
var G__28712 = cljs.core._nth(recur_val,(17));
G__27826 = G__28695;
G__27827 = G__28696;
G__27828 = G__28697;
G__27829 = G__28698;
G__27830 = G__28699;
G__27831 = G__28700;
G__27832 = G__28701;
G__27833 = G__28702;
G__27834 = G__28703;
G__27835 = G__28704;
G__27836 = G__28705;
G__27837 = G__28706;
G__27838 = G__28707;
G__27839 = G__28708;
G__27840 = G__28709;
G__27841 = G__28710;
G__27842 = G__28711;
G__27843 = G__28712;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__27919 = cljs.core._nth(params,(0));
var G__27920 = cljs.core._nth(params,(1));
var G__27921 = cljs.core._nth(params,(2));
var G__27922 = cljs.core._nth(params,(3));
var G__27923 = cljs.core._nth(params,(4));
var G__27924 = cljs.core._nth(params,(5));
var G__27925 = cljs.core._nth(params,(6));
var G__27926 = cljs.core._nth(params,(7));
var G__27927 = cljs.core._nth(params,(8));
var G__27928 = cljs.core._nth(params,(9));
var G__27929 = cljs.core._nth(params,(10));
var G__27930 = cljs.core._nth(params,(11));
var G__27931 = cljs.core._nth(params,(12));
var G__27932 = cljs.core._nth(params,(13));
var G__27933 = cljs.core._nth(params,(14));
var G__27934 = cljs.core._nth(params,(15));
var G__27935 = cljs.core._nth(params,(16));
var G__27936 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__27901,G__27902,G__27903,G__27904,G__27905,G__27906,G__27907,G__27908,G__27909,G__27910,G__27911,G__27912,G__27913,G__27914,G__27915,G__27916,G__27917,G__27918){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__27919,G__27901);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__27920,G__27902);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__27921,G__27903);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__27922,G__27904);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__27923,G__27905);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__27924,G__27906);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__27925,G__27907);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__27926,G__27908);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__27927,G__27909);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__27928,G__27910);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__27929,G__27911);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__27930,G__27912);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__27931,G__27913);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__27932,G__27914);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__27933,G__27915);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__27934,G__27916);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__27935,G__27917);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__27936,G__27918);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28719 = cljs.core._nth(recur_val,(0));
var G__28720 = cljs.core._nth(recur_val,(1));
var G__28721 = cljs.core._nth(recur_val,(2));
var G__28722 = cljs.core._nth(recur_val,(3));
var G__28723 = cljs.core._nth(recur_val,(4));
var G__28724 = cljs.core._nth(recur_val,(5));
var G__28725 = cljs.core._nth(recur_val,(6));
var G__28726 = cljs.core._nth(recur_val,(7));
var G__28727 = cljs.core._nth(recur_val,(8));
var G__28728 = cljs.core._nth(recur_val,(9));
var G__28729 = cljs.core._nth(recur_val,(10));
var G__28730 = cljs.core._nth(recur_val,(11));
var G__28731 = cljs.core._nth(recur_val,(12));
var G__28732 = cljs.core._nth(recur_val,(13));
var G__28733 = cljs.core._nth(recur_val,(14));
var G__28734 = cljs.core._nth(recur_val,(15));
var G__28735 = cljs.core._nth(recur_val,(16));
var G__28736 = cljs.core._nth(recur_val,(17));
G__27901 = G__28719;
G__27902 = G__28720;
G__27903 = G__28721;
G__27904 = G__28722;
G__27905 = G__28723;
G__27906 = G__28724;
G__27907 = G__28725;
G__27908 = G__28726;
G__27909 = G__28727;
G__27910 = G__28728;
G__27911 = G__28729;
G__27912 = G__28730;
G__27913 = G__28731;
G__27914 = G__28732;
G__27915 = G__28733;
G__27916 = G__28734;
G__27917 = G__28735;
G__27918 = G__28736;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__28000 = cljs.core._nth(params,(0));
var G__28001 = cljs.core._nth(params,(1));
var G__28002 = cljs.core._nth(params,(2));
var G__28003 = cljs.core._nth(params,(3));
var G__28004 = cljs.core._nth(params,(4));
var G__28005 = cljs.core._nth(params,(5));
var G__28006 = cljs.core._nth(params,(6));
var G__28007 = cljs.core._nth(params,(7));
var G__28008 = cljs.core._nth(params,(8));
var G__28009 = cljs.core._nth(params,(9));
var G__28010 = cljs.core._nth(params,(10));
var G__28011 = cljs.core._nth(params,(11));
var G__28012 = cljs.core._nth(params,(12));
var G__28013 = cljs.core._nth(params,(13));
var G__28014 = cljs.core._nth(params,(14));
var G__28015 = cljs.core._nth(params,(15));
var G__28016 = cljs.core._nth(params,(16));
var G__28017 = cljs.core._nth(params,(17));
var G__28018 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__27981,G__27982,G__27983,G__27984,G__27985,G__27986,G__27987,G__27988,G__27989,G__27990,G__27991,G__27992,G__27993,G__27994,G__27995,G__27996,G__27997,G__27998,G__27999){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__28000,G__27981);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__28001,G__27982);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__28002,G__27983);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__28003,G__27984);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__28004,G__27985);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__28005,G__27986);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__28006,G__27987);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__28007,G__27988);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__28008,G__27989);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__28009,G__27990);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__28010,G__27991);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__28011,G__27992);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__28012,G__27993);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__28013,G__27994);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__28014,G__27995);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__28015,G__27996);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__28016,G__27997);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__28017,G__27998);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__28018,G__27999);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28754 = cljs.core._nth(recur_val,(0));
var G__28755 = cljs.core._nth(recur_val,(1));
var G__28756 = cljs.core._nth(recur_val,(2));
var G__28757 = cljs.core._nth(recur_val,(3));
var G__28758 = cljs.core._nth(recur_val,(4));
var G__28759 = cljs.core._nth(recur_val,(5));
var G__28760 = cljs.core._nth(recur_val,(6));
var G__28761 = cljs.core._nth(recur_val,(7));
var G__28762 = cljs.core._nth(recur_val,(8));
var G__28763 = cljs.core._nth(recur_val,(9));
var G__28764 = cljs.core._nth(recur_val,(10));
var G__28765 = cljs.core._nth(recur_val,(11));
var G__28766 = cljs.core._nth(recur_val,(12));
var G__28767 = cljs.core._nth(recur_val,(13));
var G__28768 = cljs.core._nth(recur_val,(14));
var G__28769 = cljs.core._nth(recur_val,(15));
var G__28770 = cljs.core._nth(recur_val,(16));
var G__28771 = cljs.core._nth(recur_val,(17));
var G__28772 = cljs.core._nth(recur_val,(18));
G__27981 = G__28754;
G__27982 = G__28755;
G__27983 = G__28756;
G__27984 = G__28757;
G__27985 = G__28758;
G__27986 = G__28759;
G__27987 = G__28760;
G__27988 = G__28761;
G__27989 = G__28762;
G__27990 = G__28763;
G__27991 = G__28764;
G__27992 = G__28765;
G__27993 = G__28766;
G__27994 = G__28767;
G__27995 = G__28768;
G__27996 = G__28769;
G__27997 = G__28770;
G__27998 = G__28771;
G__27999 = G__28772;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__28043 = cljs.core._nth(params,(0));
var G__28044 = cljs.core._nth(params,(1));
var G__28045 = cljs.core._nth(params,(2));
var G__28046 = cljs.core._nth(params,(3));
var G__28047 = cljs.core._nth(params,(4));
var G__28048 = cljs.core._nth(params,(5));
var G__28049 = cljs.core._nth(params,(6));
var G__28050 = cljs.core._nth(params,(7));
var G__28051 = cljs.core._nth(params,(8));
var G__28052 = cljs.core._nth(params,(9));
var G__28053 = cljs.core._nth(params,(10));
var G__28054 = cljs.core._nth(params,(11));
var G__28055 = cljs.core._nth(params,(12));
var G__28056 = cljs.core._nth(params,(13));
var G__28057 = cljs.core._nth(params,(14));
var G__28058 = cljs.core._nth(params,(15));
var G__28059 = cljs.core._nth(params,(16));
var G__28060 = cljs.core._nth(params,(17));
var G__28061 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__28024,G__28025,G__28026,G__28027,G__28028,G__28029,G__28030,G__28031,G__28032,G__28033,G__28034,G__28035,G__28036,G__28037,G__28038,G__28039,G__28040,G__28041,G__28042){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__28043,G__28024);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__28044,G__28025);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__28045,G__28026);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__28046,G__28027);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__28047,G__28028);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__28048,G__28029);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__28049,G__28030);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__28050,G__28031);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__28051,G__28032);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__28052,G__28033);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__28053,G__28034);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__28054,G__28035);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__28055,G__28036);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__28056,G__28037);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__28057,G__28038);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__28058,G__28039);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__28059,G__28040);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__28060,G__28041);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__28061,G__28042);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28775 = cljs.core._nth(recur_val,(0));
var G__28776 = cljs.core._nth(recur_val,(1));
var G__28777 = cljs.core._nth(recur_val,(2));
var G__28778 = cljs.core._nth(recur_val,(3));
var G__28779 = cljs.core._nth(recur_val,(4));
var G__28780 = cljs.core._nth(recur_val,(5));
var G__28781 = cljs.core._nth(recur_val,(6));
var G__28782 = cljs.core._nth(recur_val,(7));
var G__28783 = cljs.core._nth(recur_val,(8));
var G__28784 = cljs.core._nth(recur_val,(9));
var G__28785 = cljs.core._nth(recur_val,(10));
var G__28786 = cljs.core._nth(recur_val,(11));
var G__28787 = cljs.core._nth(recur_val,(12));
var G__28788 = cljs.core._nth(recur_val,(13));
var G__28789 = cljs.core._nth(recur_val,(14));
var G__28790 = cljs.core._nth(recur_val,(15));
var G__28791 = cljs.core._nth(recur_val,(16));
var G__28792 = cljs.core._nth(recur_val,(17));
var G__28793 = cljs.core._nth(recur_val,(18));
G__28024 = G__28775;
G__28025 = G__28776;
G__28026 = G__28777;
G__28027 = G__28778;
G__28028 = G__28779;
G__28029 = G__28780;
G__28030 = G__28781;
G__28031 = G__28782;
G__28032 = G__28783;
G__28033 = G__28784;
G__28034 = G__28785;
G__28035 = G__28786;
G__28036 = G__28787;
G__28037 = G__28788;
G__28038 = G__28789;
G__28039 = G__28790;
G__28040 = G__28791;
G__28041 = G__28792;
G__28042 = G__28793;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
case (20):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__28092 = cljs.core._nth(params,(0));
var G__28093 = cljs.core._nth(params,(1));
var G__28094 = cljs.core._nth(params,(2));
var G__28095 = cljs.core._nth(params,(3));
var G__28096 = cljs.core._nth(params,(4));
var G__28097 = cljs.core._nth(params,(5));
var G__28098 = cljs.core._nth(params,(6));
var G__28099 = cljs.core._nth(params,(7));
var G__28100 = cljs.core._nth(params,(8));
var G__28101 = cljs.core._nth(params,(9));
var G__28102 = cljs.core._nth(params,(10));
var G__28103 = cljs.core._nth(params,(11));
var G__28104 = cljs.core._nth(params,(12));
var G__28105 = cljs.core._nth(params,(13));
var G__28106 = cljs.core._nth(params,(14));
var G__28107 = cljs.core._nth(params,(15));
var G__28108 = cljs.core._nth(params,(16));
var G__28109 = cljs.core._nth(params,(17));
var G__28110 = cljs.core._nth(params,(18));
var G__28111 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__28072,G__28073,G__28074,G__28075,G__28076,G__28077,G__28078,G__28079,G__28080,G__28081,G__28082,G__28083,G__28084,G__28085,G__28086,G__28087,G__28088,G__28089,G__28090,G__28091){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__28092,G__28072);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__28093,G__28073);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__28094,G__28074);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__28095,G__28075);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__28096,G__28076);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__28097,G__28077);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__28098,G__28078);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__28099,G__28079);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__28100,G__28080);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__28101,G__28081);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__28102,G__28082);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__28103,G__28083);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__28104,G__28084);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__28105,G__28085);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__28106,G__28086);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__28107,G__28087);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__28108,G__28088);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__28109,G__28089);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__28110,G__28090);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__28111,G__28091);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28806 = cljs.core._nth(recur_val,(0));
var G__28807 = cljs.core._nth(recur_val,(1));
var G__28808 = cljs.core._nth(recur_val,(2));
var G__28809 = cljs.core._nth(recur_val,(3));
var G__28810 = cljs.core._nth(recur_val,(4));
var G__28811 = cljs.core._nth(recur_val,(5));
var G__28812 = cljs.core._nth(recur_val,(6));
var G__28813 = cljs.core._nth(recur_val,(7));
var G__28814 = cljs.core._nth(recur_val,(8));
var G__28815 = cljs.core._nth(recur_val,(9));
var G__28816 = cljs.core._nth(recur_val,(10));
var G__28817 = cljs.core._nth(recur_val,(11));
var G__28818 = cljs.core._nth(recur_val,(12));
var G__28819 = cljs.core._nth(recur_val,(13));
var G__28820 = cljs.core._nth(recur_val,(14));
var G__28821 = cljs.core._nth(recur_val,(15));
var G__28822 = cljs.core._nth(recur_val,(16));
var G__28823 = cljs.core._nth(recur_val,(17));
var G__28824 = cljs.core._nth(recur_val,(18));
var G__28825 = cljs.core._nth(recur_val,(19));
G__28072 = G__28806;
G__28073 = G__28807;
G__28074 = G__28808;
G__28075 = G__28809;
G__28076 = G__28810;
G__28077 = G__28811;
G__28078 = G__28812;
G__28079 = G__28813;
G__28080 = G__28814;
G__28081 = G__28815;
G__28082 = G__28816;
G__28083 = G__28817;
G__28084 = G__28818;
G__28085 = G__28819;
G__28086 = G__28820;
G__28087 = G__28821;
G__28088 = G__28822;
G__28089 = G__28823;
G__28090 = G__28824;
G__28091 = G__28825;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
} else {
var G__28138 = cljs.core._nth(params,(0));
var G__28139 = cljs.core._nth(params,(1));
var G__28140 = cljs.core._nth(params,(2));
var G__28141 = cljs.core._nth(params,(3));
var G__28142 = cljs.core._nth(params,(4));
var G__28143 = cljs.core._nth(params,(5));
var G__28144 = cljs.core._nth(params,(6));
var G__28145 = cljs.core._nth(params,(7));
var G__28146 = cljs.core._nth(params,(8));
var G__28147 = cljs.core._nth(params,(9));
var G__28148 = cljs.core._nth(params,(10));
var G__28149 = cljs.core._nth(params,(11));
var G__28150 = cljs.core._nth(params,(12));
var G__28151 = cljs.core._nth(params,(13));
var G__28152 = cljs.core._nth(params,(14));
var G__28153 = cljs.core._nth(params,(15));
var G__28154 = cljs.core._nth(params,(16));
var G__28155 = cljs.core._nth(params,(17));
var G__28156 = cljs.core._nth(params,(18));
var G__28157 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__28118,G__28119,G__28120,G__28121,G__28122,G__28123,G__28124,G__28125,G__28126,G__28127,G__28128,G__28129,G__28130,G__28131,G__28132,G__28133,G__28134,G__28135,G__28136,G__28137){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__28138,G__28118);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__28139,G__28119);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__28140,G__28120);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__28141,G__28121);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__28142,G__28122);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__28143,G__28123);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__28144,G__28124);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__28145,G__28125);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__28146,G__28126);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__28147,G__28127);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__28148,G__28128);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__28149,G__28129);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__28150,G__28130);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__28151,G__28131);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__28152,G__28132);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__28153,G__28133);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__28154,G__28134);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__28155,G__28135);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__28156,G__28136);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__28157,G__28137);
var ret__26352__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___26353__auto__ = (ret__26352__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___26353__auto__){
var recur_val = sci.impl.types.getVal(ret__26352__auto__);
var G__28837 = cljs.core._nth(recur_val,(0));
var G__28838 = cljs.core._nth(recur_val,(1));
var G__28839 = cljs.core._nth(recur_val,(2));
var G__28840 = cljs.core._nth(recur_val,(3));
var G__28841 = cljs.core._nth(recur_val,(4));
var G__28842 = cljs.core._nth(recur_val,(5));
var G__28843 = cljs.core._nth(recur_val,(6));
var G__28844 = cljs.core._nth(recur_val,(7));
var G__28845 = cljs.core._nth(recur_val,(8));
var G__28846 = cljs.core._nth(recur_val,(9));
var G__28847 = cljs.core._nth(recur_val,(10));
var G__28848 = cljs.core._nth(recur_val,(11));
var G__28849 = cljs.core._nth(recur_val,(12));
var G__28850 = cljs.core._nth(recur_val,(13));
var G__28851 = cljs.core._nth(recur_val,(14));
var G__28852 = cljs.core._nth(recur_val,(15));
var G__28853 = cljs.core._nth(recur_val,(16));
var G__28854 = cljs.core._nth(recur_val,(17));
var G__28855 = cljs.core._nth(recur_val,(18));
var G__28856 = cljs.core._nth(recur_val,(19));
G__28118 = G__28837;
G__28119 = G__28838;
G__28120 = G__28839;
G__28121 = G__28840;
G__28122 = G__28841;
G__28123 = G__28842;
G__28124 = G__28843;
G__28125 = G__28844;
G__28126 = G__28845;
G__28127 = G__28846;
G__28128 = G__28847;
G__28129 = G__28848;
G__28130 = G__28849;
G__28131 = G__28850;
G__28132 = G__28851;
G__28133 = G__28852;
G__28134 = G__28853;
G__28135 = G__28854;
G__28136 = G__28855;
G__28137 = G__28856;
continue;
} else {
return ret__26352__auto__;
}
break;
}
});
}

break;
default:
return (function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__28862 = cljs.core.next(args_STAR_);
var G__28863 = cljs.core.next(params__$1);
var G__28864 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__28862;
params__$1 = G__28863;
ret = G__28864;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__28162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28162,(0),null);
var vec__28165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28162,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28165,(0),null);
var G__28866 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__28866;
continue;
} else {
var G__28868 = recur_val;
args = G__28868;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28869__i = 0, G__28869__a = new Array(arguments.length -  0);
while (G__28869__i < G__28869__a.length) {G__28869__a[G__28869__i] = arguments[G__28869__i + 0]; ++G__28869__i;}
  args = new cljs.core.IndexedSeq(G__28869__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__28870){
var args = cljs.core.seq(arglist__28870);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
;

}
})():(function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__28873 = cljs.core.next(args_STAR_);
var G__28874 = cljs.core.next(params__$1);
var G__28875 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__28873;
params__$1 = G__28874;
ret = G__28875;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__28168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28168,(0),null);
var vec__28171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28168,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28171,(0),null);
var G__28881 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__28881;
continue;
} else {
var G__28882 = recur_val;
args = G__28882;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28883__i = 0, G__28883__a = new Array(arguments.length -  0);
while (G__28883__i < G__28883__a.length) {G__28883__a[G__28883__i] = arguments[G__28883__i + 0]; ++G__28883__i;}
  args = new cljs.core.IndexedSeq(G__28883__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__28884){
var args = cljs.core.seq(arglist__28884);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
);
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref){
var self_ref__$1 = (cljs.core.truth_(self_ref)?cljs.core.volatile_BANG_(null):null);
var bindings__$1 = (cljs.core.truth_(self_ref__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,fn_name,self_ref__$1):bindings);
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,bindings__$1,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,bindings__$1,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__28890__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5802__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__28890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28892__i = 0, G__28892__a = new Array(arguments.length -  0);
while (G__28892__i < G__28892__a.length) {G__28892__a[G__28892__i] = arguments[G__28892__i + 0]; ++G__28892__i;}
  args = new cljs.core.IndexedSeq(G__28892__a,0,null);
} 
return G__28890__delegate.call(this,args);};
G__28890.cljs$lang$maxFixedArity = 0;
G__28890.cljs$lang$applyTo = (function (arglist__28893){
var args = cljs.core.seq(arglist__28893);
return G__28890__delegate(args);
});
G__28890.cljs$core$IFn$_invoke$arity$variadic = G__28890__delegate;
return G__28890;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__28174_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28174_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f);
if(cljs.core.truth_(self_ref__$1)){
cljs.core.vreset_BANG_(self_ref__$1,f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
