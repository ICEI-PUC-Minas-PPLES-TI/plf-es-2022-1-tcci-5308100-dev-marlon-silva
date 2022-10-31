goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27682 = arguments.length;
var i__5770__auto___27683 = (0);
while(true){
if((i__5770__auto___27683 < len__5769__auto___27682)){
args__5775__auto__.push((arguments[i__5770__auto___27683]));

var G__27684 = (i__5770__auto___27683 + (1));
i__5770__auto___27683 = G__27684;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__26912 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26912,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26912,(1),null);
var vec__26915 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26915,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26915,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26927){
var vec__26928 = p__26927;
var seq__26929 = cljs.core.seq(vec__26928);
var first__26930 = cljs.core.first(seq__26929);
var seq__26929__$1 = cljs.core.next(seq__26929);
var method_name = first__26930;
var ___$2 = seq__26929__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__26894__auto__","x__26894__auto__",-112321804,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__26895__auto__","args__26895__auto__",-225372301,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__26896__auto__","methods__26896__auto__",-942004385,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__26894__auto__","x__26894__auto__",-112321804,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__26896__auto__","methods__26896__auto__",-942004385,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__26894__auto__","x__26894__auto__",-112321804,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__26895__auto__","args__26895__auto__",-225372301,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__26897__auto__","x__26897__auto__",-2025165469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__26898__auto__","args__26898__auto__",-1546381223,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__26899__auto__","meta__26899__auto__",633963702,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__26897__auto__","x__26897__auto__",-2025165469,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__26900__auto__","method__26900__auto__",405346118,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__26899__auto__","meta__26899__auto__",633963702,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__26900__auto__","method__26900__auto__",405346118,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__26900__auto__","method__26900__auto__",405346118,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__26897__auto__","x__26897__auto__",-2025165469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__26898__auto__","args__26898__auto__",-1546381223,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__26897__auto__","x__26897__auto__",-2025165469,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq26904){
var G__26905 = cljs.core.first(seq26904);
var seq26904__$1 = cljs.core.next(seq26904);
var G__26909 = cljs.core.first(seq26904__$1);
var seq26904__$2 = cljs.core.next(seq26904__$1);
var G__26910 = cljs.core.first(seq26904__$2);
var seq26904__$3 = cljs.core.next(seq26904__$2);
var G__26911 = cljs.core.first(seq26904__$3);
var seq26904__$4 = cljs.core.next(seq26904__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26905,G__26909,G__26910,G__26911,seq26904__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27794 = arguments.length;
var i__5770__auto___27795 = (0);
while(true){
if((i__5770__auto___27795 < len__5769__auto___27794)){
args__5775__auto__.push((arguments[i__5770__auto___27795]));

var G__27796 = (i__5770__auto___27795 + (1));
i__5770__auto___27795 = G__27796;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__26972 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__26974 = null;
var count__26975 = (0);
var i__26976 = (0);
while(true){
if((i__26976 < count__26975)){
var vec__27206 = chunk__26974.cljs$core$IIndexed$_nth$arity$2(null,i__26976);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27206,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27206,(1),null);
var extend_via_metadata_27798 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_27799 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_27800 = sci.impl.vars.getName(proto_ns_27799);
var pns_str_27801 = (cljs.core.truth_(extend_via_metadata_27798)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_27800):null);
var seq__27229_27802 = cljs.core.seq(mmap);
var chunk__27230_27803 = null;
var count__27231_27804 = (0);
var i__27232_27805 = (0);
while(true){
if((i__27232_27805 < count__27231_27804)){
var vec__27263_27807 = chunk__27230_27803.cljs$core$IIndexed$_nth$arity$2(null,i__27232_27805);
var meth_name_27808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27263_27807,(0),null);
var f_27809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27263_27807,(1),null);
var meth_str_27810 = cljs.core.name(meth_name_27808);
var meth_sym_27811 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_27810);
var env_27812 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_27813 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_27812,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_27800,meth_sym_27811], null));
var multi_method_27814 = cljs.core.deref(multi_method_var_27813);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_27814,atype,(cljs.core.truth_(extend_via_metadata_27798)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_27801,meth_str_27810);
return ((function (seq__27229_27802,chunk__27230_27803,count__27231_27804,i__27232_27805,seq__26972,chunk__26974,count__26975,i__26976,fq,meth_str_27810,meth_sym_27811,env_27812,multi_method_var_27813,multi_method_27814,vec__27263_27807,meth_name_27808,f_27809,extend_via_metadata_27798,proto_ns_27799,pns_27800,pns_str_27801,vec__27206,proto,mmap){
return (function() { 
var G__27816__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_27809,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_27809,this$,args);
}
};
var G__27816 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__27818__i = 0, G__27818__a = new Array(arguments.length -  1);
while (G__27818__i < G__27818__a.length) {G__27818__a[G__27818__i] = arguments[G__27818__i + 1]; ++G__27818__i;}
  args = new cljs.core.IndexedSeq(G__27818__a,0,null);
} 
return G__27816__delegate.call(this,this$,args);};
G__27816.cljs$lang$maxFixedArity = 1;
G__27816.cljs$lang$applyTo = (function (arglist__27819){
var this$ = cljs.core.first(arglist__27819);
var args = cljs.core.rest(arglist__27819);
return G__27816__delegate(this$,args);
});
G__27816.cljs$core$IFn$_invoke$arity$variadic = G__27816__delegate;
return G__27816;
})()
;
;})(seq__27229_27802,chunk__27230_27803,count__27231_27804,i__27232_27805,seq__26972,chunk__26974,count__26975,i__26976,fq,meth_str_27810,meth_sym_27811,env_27812,multi_method_var_27813,multi_method_27814,vec__27263_27807,meth_name_27808,f_27809,extend_via_metadata_27798,proto_ns_27799,pns_27800,pns_str_27801,vec__27206,proto,mmap))
})():f_27809));


var G__27820 = seq__27229_27802;
var G__27821 = chunk__27230_27803;
var G__27822 = count__27231_27804;
var G__27823 = (i__27232_27805 + (1));
seq__27229_27802 = G__27820;
chunk__27230_27803 = G__27821;
count__27231_27804 = G__27822;
i__27232_27805 = G__27823;
continue;
} else {
var temp__5804__auto___27824 = cljs.core.seq(seq__27229_27802);
if(temp__5804__auto___27824){
var seq__27229_27825__$1 = temp__5804__auto___27824;
if(cljs.core.chunked_seq_QMARK_(seq__27229_27825__$1)){
var c__5568__auto___27862 = cljs.core.chunk_first(seq__27229_27825__$1);
var G__27863 = cljs.core.chunk_rest(seq__27229_27825__$1);
var G__27864 = c__5568__auto___27862;
var G__27865 = cljs.core.count(c__5568__auto___27862);
var G__27866 = (0);
seq__27229_27802 = G__27863;
chunk__27230_27803 = G__27864;
count__27231_27804 = G__27865;
i__27232_27805 = G__27866;
continue;
} else {
var vec__27298_27868 = cljs.core.first(seq__27229_27825__$1);
var meth_name_27869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27298_27868,(0),null);
var f_27870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27298_27868,(1),null);
var meth_str_27871 = cljs.core.name(meth_name_27869);
var meth_sym_27872 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_27871);
var env_27873 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_27874 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_27873,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_27800,meth_sym_27872], null));
var multi_method_27875 = cljs.core.deref(multi_method_var_27874);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_27875,atype,(cljs.core.truth_(extend_via_metadata_27798)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_27801,meth_str_27871);
return ((function (seq__27229_27802,chunk__27230_27803,count__27231_27804,i__27232_27805,seq__26972,chunk__26974,count__26975,i__26976,fq,meth_str_27871,meth_sym_27872,env_27873,multi_method_var_27874,multi_method_27875,vec__27298_27868,meth_name_27869,f_27870,seq__27229_27825__$1,temp__5804__auto___27824,extend_via_metadata_27798,proto_ns_27799,pns_27800,pns_str_27801,vec__27206,proto,mmap){
return (function() { 
var G__27876__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_27870,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_27870,this$,args);
}
};
var G__27876 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__27877__i = 0, G__27877__a = new Array(arguments.length -  1);
while (G__27877__i < G__27877__a.length) {G__27877__a[G__27877__i] = arguments[G__27877__i + 1]; ++G__27877__i;}
  args = new cljs.core.IndexedSeq(G__27877__a,0,null);
} 
return G__27876__delegate.call(this,this$,args);};
G__27876.cljs$lang$maxFixedArity = 1;
G__27876.cljs$lang$applyTo = (function (arglist__27879){
var this$ = cljs.core.first(arglist__27879);
var args = cljs.core.rest(arglist__27879);
return G__27876__delegate(this$,args);
});
G__27876.cljs$core$IFn$_invoke$arity$variadic = G__27876__delegate;
return G__27876;
})()
;
;})(seq__27229_27802,chunk__27230_27803,count__27231_27804,i__27232_27805,seq__26972,chunk__26974,count__26975,i__26976,fq,meth_str_27871,meth_sym_27872,env_27873,multi_method_var_27874,multi_method_27875,vec__27298_27868,meth_name_27869,f_27870,seq__27229_27825__$1,temp__5804__auto___27824,extend_via_metadata_27798,proto_ns_27799,pns_27800,pns_str_27801,vec__27206,proto,mmap))
})():f_27870));


var G__27880 = cljs.core.next(seq__27229_27825__$1);
var G__27881 = null;
var G__27882 = (0);
var G__27883 = (0);
seq__27229_27802 = G__27880;
chunk__27230_27803 = G__27881;
count__27231_27804 = G__27882;
i__27232_27805 = G__27883;
continue;
}
} else {
}
}
break;
}


var G__27884 = seq__26972;
var G__27885 = chunk__26974;
var G__27886 = count__26975;
var G__27887 = (i__26976 + (1));
seq__26972 = G__27884;
chunk__26974 = G__27885;
count__26975 = G__27886;
i__26976 = G__27887;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26972);
if(temp__5804__auto__){
var seq__26972__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26972__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26972__$1);
var G__27888 = cljs.core.chunk_rest(seq__26972__$1);
var G__27889 = c__5568__auto__;
var G__27890 = cljs.core.count(c__5568__auto__);
var G__27891 = (0);
seq__26972 = G__27888;
chunk__26974 = G__27889;
count__26975 = G__27890;
i__26976 = G__27891;
continue;
} else {
var vec__27304 = cljs.core.first(seq__26972__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27304,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27304,(1),null);
var extend_via_metadata_27893 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_27894 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_27895 = sci.impl.vars.getName(proto_ns_27894);
var pns_str_27896 = (cljs.core.truth_(extend_via_metadata_27893)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_27895):null);
var seq__27310_27897 = cljs.core.seq(mmap);
var chunk__27311_27898 = null;
var count__27312_27899 = (0);
var i__27313_27900 = (0);
while(true){
if((i__27313_27900 < count__27312_27899)){
var vec__27370_27937 = chunk__27311_27898.cljs$core$IIndexed$_nth$arity$2(null,i__27313_27900);
var meth_name_27938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27370_27937,(0),null);
var f_27939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27370_27937,(1),null);
var meth_str_27940 = cljs.core.name(meth_name_27938);
var meth_sym_27941 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_27940);
var env_27942 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_27943 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_27942,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_27895,meth_sym_27941], null));
var multi_method_27944 = cljs.core.deref(multi_method_var_27943);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_27944,atype,(cljs.core.truth_(extend_via_metadata_27893)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_27896,meth_str_27940);
return ((function (seq__27310_27897,chunk__27311_27898,count__27312_27899,i__27313_27900,seq__26972,chunk__26974,count__26975,i__26976,fq,meth_str_27940,meth_sym_27941,env_27942,multi_method_var_27943,multi_method_27944,vec__27370_27937,meth_name_27938,f_27939,extend_via_metadata_27893,proto_ns_27894,pns_27895,pns_str_27896,vec__27304,proto,mmap,seq__26972__$1,temp__5804__auto__){
return (function() { 
var G__27947__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_27939,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_27939,this$,args);
}
};
var G__27947 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__27949__i = 0, G__27949__a = new Array(arguments.length -  1);
while (G__27949__i < G__27949__a.length) {G__27949__a[G__27949__i] = arguments[G__27949__i + 1]; ++G__27949__i;}
  args = new cljs.core.IndexedSeq(G__27949__a,0,null);
} 
return G__27947__delegate.call(this,this$,args);};
G__27947.cljs$lang$maxFixedArity = 1;
G__27947.cljs$lang$applyTo = (function (arglist__27950){
var this$ = cljs.core.first(arglist__27950);
var args = cljs.core.rest(arglist__27950);
return G__27947__delegate(this$,args);
});
G__27947.cljs$core$IFn$_invoke$arity$variadic = G__27947__delegate;
return G__27947;
})()
;
;})(seq__27310_27897,chunk__27311_27898,count__27312_27899,i__27313_27900,seq__26972,chunk__26974,count__26975,i__26976,fq,meth_str_27940,meth_sym_27941,env_27942,multi_method_var_27943,multi_method_27944,vec__27370_27937,meth_name_27938,f_27939,extend_via_metadata_27893,proto_ns_27894,pns_27895,pns_str_27896,vec__27304,proto,mmap,seq__26972__$1,temp__5804__auto__))
})():f_27939));


var G__27951 = seq__27310_27897;
var G__27952 = chunk__27311_27898;
var G__27953 = count__27312_27899;
var G__27954 = (i__27313_27900 + (1));
seq__27310_27897 = G__27951;
chunk__27311_27898 = G__27952;
count__27312_27899 = G__27953;
i__27313_27900 = G__27954;
continue;
} else {
var temp__5804__auto___27955__$1 = cljs.core.seq(seq__27310_27897);
if(temp__5804__auto___27955__$1){
var seq__27310_27956__$1 = temp__5804__auto___27955__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27310_27956__$1)){
var c__5568__auto___27957 = cljs.core.chunk_first(seq__27310_27956__$1);
var G__27958 = cljs.core.chunk_rest(seq__27310_27956__$1);
var G__27959 = c__5568__auto___27957;
var G__27960 = cljs.core.count(c__5568__auto___27957);
var G__27961 = (0);
seq__27310_27897 = G__27958;
chunk__27311_27898 = G__27959;
count__27312_27899 = G__27960;
i__27313_27900 = G__27961;
continue;
} else {
var vec__27382_27962 = cljs.core.first(seq__27310_27956__$1);
var meth_name_27963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27382_27962,(0),null);
var f_27964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27382_27962,(1),null);
var meth_str_27965 = cljs.core.name(meth_name_27963);
var meth_sym_27966 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_27965);
var env_27967 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_27968 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_27967,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_27895,meth_sym_27966], null));
var multi_method_27969 = cljs.core.deref(multi_method_var_27968);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_27969,atype,(cljs.core.truth_(extend_via_metadata_27893)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_27896,meth_str_27965);
return ((function (seq__27310_27897,chunk__27311_27898,count__27312_27899,i__27313_27900,seq__26972,chunk__26974,count__26975,i__26976,fq,meth_str_27965,meth_sym_27966,env_27967,multi_method_var_27968,multi_method_27969,vec__27382_27962,meth_name_27963,f_27964,seq__27310_27956__$1,temp__5804__auto___27955__$1,extend_via_metadata_27893,proto_ns_27894,pns_27895,pns_str_27896,vec__27304,proto,mmap,seq__26972__$1,temp__5804__auto__){
return (function() { 
var G__27970__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_27964,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_27964,this$,args);
}
};
var G__27970 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__27971__i = 0, G__27971__a = new Array(arguments.length -  1);
while (G__27971__i < G__27971__a.length) {G__27971__a[G__27971__i] = arguments[G__27971__i + 1]; ++G__27971__i;}
  args = new cljs.core.IndexedSeq(G__27971__a,0,null);
} 
return G__27970__delegate.call(this,this$,args);};
G__27970.cljs$lang$maxFixedArity = 1;
G__27970.cljs$lang$applyTo = (function (arglist__27972){
var this$ = cljs.core.first(arglist__27972);
var args = cljs.core.rest(arglist__27972);
return G__27970__delegate(this$,args);
});
G__27970.cljs$core$IFn$_invoke$arity$variadic = G__27970__delegate;
return G__27970;
})()
;
;})(seq__27310_27897,chunk__27311_27898,count__27312_27899,i__27313_27900,seq__26972,chunk__26974,count__26975,i__26976,fq,meth_str_27965,meth_sym_27966,env_27967,multi_method_var_27968,multi_method_27969,vec__27382_27962,meth_name_27963,f_27964,seq__27310_27956__$1,temp__5804__auto___27955__$1,extend_via_metadata_27893,proto_ns_27894,pns_27895,pns_str_27896,vec__27304,proto,mmap,seq__26972__$1,temp__5804__auto__))
})():f_27964));


var G__27973 = cljs.core.next(seq__27310_27956__$1);
var G__27974 = null;
var G__27975 = (0);
var G__27976 = (0);
seq__27310_27897 = G__27973;
chunk__27311_27898 = G__27974;
count__27312_27899 = G__27975;
i__27313_27900 = G__27976;
continue;
}
} else {
}
}
break;
}


var G__27977 = cljs.core.next(seq__26972__$1);
var G__27978 = null;
var G__27979 = (0);
var G__27980 = (0);
seq__26972 = G__27977;
chunk__26974 = G__27978;
count__26975 = G__27979;
i__26976 = G__27980;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq26966){
var G__26967 = cljs.core.first(seq26966);
var seq26966__$1 = cljs.core.next(seq26966);
var G__26968 = cljs.core.first(seq26966__$1);
var seq26966__$2 = cljs.core.next(seq26966__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26967,G__26968,seq26966__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__27435){
var vec__27448 = p__27435;
var seq__27449 = cljs.core.seq(vec__27448);
var first__27450 = cljs.core.first(seq__27449);
var seq__27449__$1 = cljs.core.next(seq__27449);
var args = first__27450;
var body = seq__27449__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__27416__auto__","farg__27416__auto__",-1273562334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__27417__auto__","m__27417__auto__",864886147,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__27416__auto__","farg__27416__auto__",-1273562334,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__27418__auto__","meth__27418__auto__",1006155927,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__27417__auto__","m__27417__auto__",864886147,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__27418__auto__","meth__27418__auto__",1006155927,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(type,meths,protocol_ns,extend_via_metadata){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27480){
var vec__27481 = p__27480;
var seq__27482 = cljs.core.seq(vec__27481);
var first__27483 = cljs.core.first(seq__27482);
var seq__27482__$1 = cljs.core.next(seq__27482);
var meth_name = first__27483;
var fn_body = seq__27482__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body):cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__27453_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__27453_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_body], 0))):fn_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28062 = arguments.length;
var i__5770__auto___28063 = (0);
while(true){
if((i__5770__auto___28063 < len__5769__auto___28062)){
args__5775__auto__.push((arguments[i__5770__auto___28063]));

var G__28064 = (i__5770__auto___28063 + (1));
i__5770__auto___28063 = G__28064;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__27486_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__27486_SHARP_)));
}),impls);
var protocol_var = (function (){var G__27524 = ctx;
var G__27525 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__27526 = protocol_name;
var fexpr__27523 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__27523.cljs$core$IFn$_invoke$arity$3 ? fexpr__27523.cljs$core$IFn$_invoke$arity$3(G__27524,G__27525,G__27526) : fexpr__27523.call(null,G__27524,G__27525,G__27526));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27527){
var vec__27528 = p__27527;
var seq__27529 = cljs.core.seq(vec__27528);
var first__27530 = cljs.core.first(seq__27529);
var seq__27529__$1 = cljs.core.next(seq__27529);
var type = first__27530;
var meths = seq__27529__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq27487){
var G__27488 = cljs.core.first(seq27487);
var seq27487__$1 = cljs.core.next(seq27487);
var G__27489 = cljs.core.first(seq27487__$1);
var seq27487__$2 = cljs.core.next(seq27487__$1);
var G__27490 = cljs.core.first(seq27487__$2);
var seq27487__$3 = cljs.core.next(seq27487__$2);
var G__27491 = cljs.core.first(seq27487__$3);
var seq27487__$4 = cljs.core.next(seq27487__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27488,G__27489,G__27490,G__27491,seq27487__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28068 = arguments.length;
var i__5770__auto___28069 = (0);
while(true){
if((i__5770__auto___28069 < len__5769__auto___28068)){
args__5775__auto__.push((arguments[i__5770__auto___28069]));

var G__28070 = (i__5770__auto___28069 + (1));
i__5770__auto___28069 = G__28070;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__27531_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__27531_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27568){
var vec__27569 = p__27568;
var seq__27570 = cljs.core.seq(vec__27569);
var first__27571 = cljs.core.first(seq__27570);
var seq__27570__$1 = cljs.core.next(seq__27570);
var proto = first__27571;
var meths = seq__27570__$1;
var protocol_var = (function (){var G__27573 = ctx;
var G__27574 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__27575 = proto;
var fexpr__27572 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__27572.cljs$core$IFn$_invoke$arity$3 ? fexpr__27572.cljs$core$IFn$_invoke$arity$3(G__27573,G__27574,G__27575) : fexpr__27572.call(null,G__27573,G__27574,G__27575));
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq27563){
var G__27564 = cljs.core.first(seq27563);
var seq27563__$1 = cljs.core.next(seq27563);
var G__27565 = cljs.core.first(seq27563__$1);
var seq27563__$2 = cljs.core.next(seq27563__$1);
var G__27566 = cljs.core.first(seq27563__$2);
var seq27563__$3 = cljs.core.next(seq27563__$2);
var G__27567 = cljs.core.first(seq27563__$3);
var seq27563__$4 = cljs.core.next(seq27563__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27564,G__27565,G__27566,G__27567,seq27563__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__27606_SHARP_){
var temp__5804__auto__ = cljs.core.get_method(p1__27606_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var ms = cljs.core.methods$(p1__27606_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__5045__auto__ = (function (){var and__5043__auto__ = p;
if(cljs.core.truth_(and__5043__auto__)){
var pred__27607 = cljs.core._EQ_;
var expr__27608 = p;
if(cljs.core.truth_((pred__27607.cljs$core$IFn$_invoke$arity$2 ? pred__27607.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__27608) : pred__27607.call(null,cljs.core.IDeref,expr__27608)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__27607.cljs$core$IFn$_invoke$arity$2 ? pred__27607.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__27608) : pred__27607.call(null,cljs.core.ISwap,expr__27608)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__27607.cljs$core$IFn$_invoke$arity$2 ? pred__27607.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__27608) : pred__27607.call(null,cljs.core.IReset,expr__27608)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27608)].join('')));
}
}
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__5043__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__5043__auto__){
var G__27648 = clazz;
var G__27648__$1 = (((G__27648 == null))?null:cljs.core.meta(G__27648));
if((G__27648__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__27648__$1);
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__27649_SHARP_){
return cljs.core.get_method(p1__27649_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
