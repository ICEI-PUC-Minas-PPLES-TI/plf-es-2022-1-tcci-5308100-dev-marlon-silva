goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26221){
var map__26224 = p__26221;
var map__26224__$1 = cljs.core.__destructure_map(map__26224);
var m = map__26224__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26224__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26224__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26226_26545 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26227_26546 = null;
var count__26228_26547 = (0);
var i__26229_26548 = (0);
while(true){
if((i__26229_26548 < count__26228_26547)){
var f_26549 = chunk__26227_26546.cljs$core$IIndexed$_nth$arity$2(null,i__26229_26548);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26549], 0));


var G__26550 = seq__26226_26545;
var G__26551 = chunk__26227_26546;
var G__26552 = count__26228_26547;
var G__26553 = (i__26229_26548 + (1));
seq__26226_26545 = G__26550;
chunk__26227_26546 = G__26551;
count__26228_26547 = G__26552;
i__26229_26548 = G__26553;
continue;
} else {
var temp__5804__auto___26558 = cljs.core.seq(seq__26226_26545);
if(temp__5804__auto___26558){
var seq__26226_26559__$1 = temp__5804__auto___26558;
if(cljs.core.chunked_seq_QMARK_(seq__26226_26559__$1)){
var c__5568__auto___26560 = cljs.core.chunk_first(seq__26226_26559__$1);
var G__26561 = cljs.core.chunk_rest(seq__26226_26559__$1);
var G__26562 = c__5568__auto___26560;
var G__26563 = cljs.core.count(c__5568__auto___26560);
var G__26564 = (0);
seq__26226_26545 = G__26561;
chunk__26227_26546 = G__26562;
count__26228_26547 = G__26563;
i__26229_26548 = G__26564;
continue;
} else {
var f_26565 = cljs.core.first(seq__26226_26559__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26565], 0));


var G__26566 = cljs.core.next(seq__26226_26559__$1);
var G__26567 = null;
var G__26568 = (0);
var G__26569 = (0);
seq__26226_26545 = G__26566;
chunk__26227_26546 = G__26567;
count__26228_26547 = G__26568;
i__26229_26548 = G__26569;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26571 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_26571], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_26571)))?cljs.core.second(arglists_26571):arglists_26571)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26239_26572 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26240_26573 = null;
var count__26241_26574 = (0);
var i__26242_26575 = (0);
while(true){
if((i__26242_26575 < count__26241_26574)){
var vec__26267_26576 = chunk__26240_26573.cljs$core$IIndexed$_nth$arity$2(null,i__26242_26575);
var name_26577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26267_26576,(0),null);
var map__26270_26578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26267_26576,(1),null);
var map__26270_26579__$1 = cljs.core.__destructure_map(map__26270_26578);
var doc_26580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26270_26579__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26270_26579__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_26577], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_26581], 0));

if(cljs.core.truth_(doc_26580)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_26580], 0));
} else {
}


var G__26583 = seq__26239_26572;
var G__26584 = chunk__26240_26573;
var G__26585 = count__26241_26574;
var G__26586 = (i__26242_26575 + (1));
seq__26239_26572 = G__26583;
chunk__26240_26573 = G__26584;
count__26241_26574 = G__26585;
i__26242_26575 = G__26586;
continue;
} else {
var temp__5804__auto___26587 = cljs.core.seq(seq__26239_26572);
if(temp__5804__auto___26587){
var seq__26239_26588__$1 = temp__5804__auto___26587;
if(cljs.core.chunked_seq_QMARK_(seq__26239_26588__$1)){
var c__5568__auto___26589 = cljs.core.chunk_first(seq__26239_26588__$1);
var G__26590 = cljs.core.chunk_rest(seq__26239_26588__$1);
var G__26591 = c__5568__auto___26589;
var G__26592 = cljs.core.count(c__5568__auto___26589);
var G__26593 = (0);
seq__26239_26572 = G__26590;
chunk__26240_26573 = G__26591;
count__26241_26574 = G__26592;
i__26242_26575 = G__26593;
continue;
} else {
var vec__26277_26594 = cljs.core.first(seq__26239_26588__$1);
var name_26595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26277_26594,(0),null);
var map__26281_26596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26277_26594,(1),null);
var map__26281_26597__$1 = cljs.core.__destructure_map(map__26281_26596);
var doc_26598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26281_26597__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26281_26597__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_26595], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_26599], 0));

if(cljs.core.truth_(doc_26598)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_26598], 0));
} else {
}


var G__26600 = cljs.core.next(seq__26239_26588__$1);
var G__26601 = null;
var G__26602 = (0);
var G__26603 = (0);
seq__26239_26572 = G__26600;
chunk__26240_26573 = G__26601;
count__26241_26574 = G__26602;
i__26242_26575 = G__26603;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__26286 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26287 = null;
var count__26288 = (0);
var i__26289 = (0);
while(true){
if((i__26289 < count__26288)){
var role = chunk__26287.cljs$core$IIndexed$_nth$arity$2(null,i__26289);
var temp__5804__auto___26608__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___26608__$1)){
var spec_26609 = temp__5804__auto___26608__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_26609)], 0));
} else {
}


var G__26610 = seq__26286;
var G__26611 = chunk__26287;
var G__26612 = count__26288;
var G__26613 = (i__26289 + (1));
seq__26286 = G__26610;
chunk__26287 = G__26611;
count__26288 = G__26612;
i__26289 = G__26613;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__26286);
if(temp__5804__auto____$1){
var seq__26286__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__26286__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26286__$1);
var G__26614 = cljs.core.chunk_rest(seq__26286__$1);
var G__26615 = c__5568__auto__;
var G__26616 = cljs.core.count(c__5568__auto__);
var G__26617 = (0);
seq__26286 = G__26614;
chunk__26287 = G__26615;
count__26288 = G__26616;
i__26289 = G__26617;
continue;
} else {
var role = cljs.core.first(seq__26286__$1);
var temp__5804__auto___26618__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___26618__$2)){
var spec_26619 = temp__5804__auto___26618__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_26619)], 0));
} else {
}


var G__26620 = cljs.core.next(seq__26286__$1);
var G__26621 = null;
var G__26622 = (0);
var G__26623 = (0);
seq__26286 = G__26620;
chunk__26287 = G__26621;
count__26288 = G__26622;
i__26289 = G__26623;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__26628 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__26629 = cljs.core.ex_cause(t);
via = G__26628;
t = G__26629;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__26393 = datafied_throwable;
var map__26393__$1 = cljs.core.__destructure_map(map__26393);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26393__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26393__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26393__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26394 = cljs.core.last(via);
var map__26394__$1 = cljs.core.__destructure_map(map__26394);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26394__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26394__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26394__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26395 = data;
var map__26395__$1 = cljs.core.__destructure_map(map__26395);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26395__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26395__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26395__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26396 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__26396__$1 = cljs.core.__destructure_map(map__26396);
var top_data = map__26396__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26396__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__26403 = phase;
var G__26403__$1 = (((G__26403 instanceof cljs.core.Keyword))?G__26403.fqn:null);
switch (G__26403__$1) {
case "read-source":
var map__26422 = data;
var map__26422__$1 = cljs.core.__destructure_map(map__26422);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26422__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26422__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26423 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__26423__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26423,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26423);
var G__26423__$2 = (cljs.core.truth_((function (){var fexpr__26424 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26424.cljs$core$IFn$_invoke$arity$1 ? fexpr__26424.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26424.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26423__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26423__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26423__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26423__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26425 = top_data;
var G__26425__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26425,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26425);
var G__26425__$2 = (cljs.core.truth_((function (){var fexpr__26426 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26426.cljs$core$IFn$_invoke$arity$1 ? fexpr__26426.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26426.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26425__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26425__$1);
var G__26425__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26425__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26425__$2);
var G__26425__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26425__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26425__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26425__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26425__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26429 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26429,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26429,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26429,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26429,(3),null);
var G__26437 = top_data;
var G__26437__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26437,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26437);
var G__26437__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26437__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26437__$1);
var G__26437__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26437__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26437__$2);
var G__26437__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26437__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26437__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26437__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26437__$4;
}

break;
case "execution":
var vec__26441 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26441,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26441,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26441,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26441,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26370_SHARP_){
var or__5045__auto__ = (p1__26370_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__26452 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26452.cljs$core$IFn$_invoke$arity$1 ? fexpr__26452.cljs$core$IFn$_invoke$arity$1(p1__26370_SHARP_) : fexpr__26452.call(null,p1__26370_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__26457 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26457__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26457,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26457);
var G__26457__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26457__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26457__$1);
var G__26457__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26457__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26457__$2);
var G__26457__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26457__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26457__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26457__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26457__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26403__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__26481){
var map__26482 = p__26481;
var map__26482__$1 = cljs.core.__destructure_map(map__26482);
var triage_data = map__26482__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__26486 = phase;
var G__26486__$1 = (((G__26486 instanceof cljs.core.Keyword))?G__26486.fqn:null);
switch (G__26486__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__26488 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__26489 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26490 = loc;
var G__26491 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26492_26643 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26493_26644 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26494_26645 = true;
var _STAR_print_fn_STAR__temp_val__26495_26646 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26494_26645);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26495_26646);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26478_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26478_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26493_26644);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26492_26643);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__26488,G__26489,G__26490,G__26491) : format.call(null,G__26488,G__26489,G__26490,G__26491));

break;
case "macroexpansion":
var G__26496 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__26497 = cause_type;
var G__26498 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26499 = loc;
var G__26500 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26496,G__26497,G__26498,G__26499,G__26500) : format.call(null,G__26496,G__26497,G__26498,G__26499,G__26500));

break;
case "compile-syntax-check":
var G__26501 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__26502 = cause_type;
var G__26503 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26504 = loc;
var G__26505 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26501,G__26502,G__26503,G__26504,G__26505) : format.call(null,G__26501,G__26502,G__26503,G__26504,G__26505));

break;
case "compilation":
var G__26506 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__26507 = cause_type;
var G__26508 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26509 = loc;
var G__26510 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26506,G__26507,G__26508,G__26509,G__26510) : format.call(null,G__26506,G__26507,G__26508,G__26509,G__26510));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__26511 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__26512 = symbol;
var G__26513 = loc;
var G__26514 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26515_26651 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26516_26652 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26517_26653 = true;
var _STAR_print_fn_STAR__temp_val__26518_26654 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26517_26653);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26518_26654);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26480_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26480_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26516_26652);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26515_26651);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__26511,G__26512,G__26513,G__26514) : format.call(null,G__26511,G__26512,G__26513,G__26514));
} else {
var G__26539 = "Execution error%s at %s(%s).\n%s\n";
var G__26540 = cause_type;
var G__26541 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26542 = loc;
var G__26543 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26539,G__26540,G__26541,G__26542,G__26543) : format.call(null,G__26539,G__26540,G__26541,G__26542,G__26543));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26486__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
