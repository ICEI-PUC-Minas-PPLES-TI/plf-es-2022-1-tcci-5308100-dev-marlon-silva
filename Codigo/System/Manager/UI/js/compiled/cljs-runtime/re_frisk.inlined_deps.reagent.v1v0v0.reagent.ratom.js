goog.provide('re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom');
goog.scope(function(){
  re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.debug !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.debug = false;
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.generation !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.generation = (0);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._running !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.reactive_QMARK_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$reactive_QMARK_(){
return (!((re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null)));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.running = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$running(){
return (cljs.core.deref(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._running));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_len = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_eq = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$arr_eq(x,y){
var len = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_len(x);
var and__5043__auto__ = (len === re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_len(y));
if(and__5043__auto__){
var i = (0);
while(true){
var or__5045__auto__ = (i === len);
if(or__5045__auto__){
return or__5045__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__40702 = (i + (1));
i = G__40702;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__5043__auto__;
}
});
/**
 * When f is executed, if (f) derefs any ratoms, they are then added to 'obj.captured'(*ratom-context*).
 * 
 *   See function notify-deref-watcher! to know how *ratom-context* is updated
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.in_context = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR__orig_val__40632 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__40633 = obj;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__40633);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__40632);
}});
/**
 * Returns `(in-context f r)`.  Calls `_update-watching` on r with any
 *   `deref`ed atoms captured during `in-context`, if any differ from the
 *   `watching` field of r.  Clears the `dirty?` flag on r.
 * 
 *   Inside '_update-watching' along with adding the ratoms in 'r.watching' of reaction,
 *   the reaction is also added to the list of watches on each ratoms f derefs.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$deref_capture(f,r){
(r.captured = null);

(r.ratomGeneration = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.generation = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.generation + (1))));


var res = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.in_context(r,f);
var c = r.captured;
(r.dirty_QMARK_ = false);

if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_eq(c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
/**
 * Add `derefed` to the `captured` field of `*ratom-context*`.
 * 
 *   See also `in-context`
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_deref_watcher_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5808__auto__ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto__ == null)){
return null;
} else {
var r = temp__5808__auto__;
var c = r.captured;
if((c == null)){
return (r.captured = [derefed]);
} else {
return c.push(derefed);
}
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.check_watches = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$check_watches(old,new$){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count(new$) - cljs.core.count(old)));
} else {
}

return new$;
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
(this$.watches = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.check_watches(w,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(w,key,f)));

return (this$.watchesArr = null);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$remove_w(this$,key){
var w = this$.watches;
(this$.watches = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.check_watches(w,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(w,key)));

return (this$.watchesArr = null);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?(this$.watchesArr = cljs.core.reduce_kv((function (p1__40634_SHARP_,p2__40635_SHARP_,p3__40636_SHARP_){
var G__40637 = p1__40634_SHARP_;
G__40637.push(p2__40635_SHARP_);

G__40637.push(p3__40636_SHARP_);

return G__40637;
}),[],this$.watches)):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_40703 = (a[i]);
var f_40704 = (a[(i + (1))]);
(f_40704.cljs$core$IFn$_invoke$arity$4 ? f_40704.cljs$core$IFn$_invoke$arity$4(k_40703,this$,old,new$) : f_40704.call(null,k_40703,this$,old,new$));

var G__40705 = ((2) + i);
i = G__40705;
continue;
} else {
return null;
}
break;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$pr_atom(a,writer,opts,s,v){
cljs.core._write(writer,["#object[re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer((function (){var _STAR_ratom_context_STAR__orig_val__40638 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__40639 = null;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__40639);

try{return v;
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__40638);
}})(),writer,opts);

return cljs.core._write(writer,"]");
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue = null;
}
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_enqueue = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$rea_enqueue(r){
if((re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue == null)){
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue = []);

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.schedule();
} else {
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue.push(r);
});

/**
 * @interface
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"RAtom",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null)], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(new_value) : self__.validator.call(null,new_value)))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
(self__.state = new_value);

if((self__.watches == null)){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(a__$1,old_value,new_value);
}

return new_value;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w(this$__$1,key);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/RAtom");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/RAtom");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/RAtom.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RAtom = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$atom(var_args){
var G__40643 = arguments.length;
switch (G__40643) {
case 1:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___40707 = arguments.length;
var i__5770__auto___40708 = (0);
while(true){
if((i__5770__auto___40708 < len__5769__auto___40707)){
args_arr__5794__auto__.push((arguments[i__5770__auto___40708]));

var G__40709 = (i__5770__auto___40708 + (1));
i__5770__auto___40708 = G__40709;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RAtom(x,null,null,null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40644){
var map__40645 = p__40644;
var map__40645__$1 = cljs.core.__destructure_map(map__40645);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40645__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40645__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RAtom(x,meta,validator,null);
}));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$lang$applyTo = (function (seq40641){
var G__40642 = cljs.core.first(seq40641);
var seq40641__$1 = cljs.core.next(seq40641);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40642,seq40641__$1);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$lang$maxFixedArity = (1));

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = o.reagReactionCache;
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = (m__$1.cljs$core$IFn$_invoke$arity$2 ? m__$1.cljs$core$IFn$_invoke$arity$2(k,null) : m__$1.call(null,k,null));
if((!((r == null)))){
return cljs.core._deref(r);
} else {
if((re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var r__$1 = (function (){var G__40646 = f;
var G__40647 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__40648 = (function (x){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._running,cljs.core.dec);
} else {
}

var __40711 = o.reagReactionCache;
var __40712__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(__40711,k);
(o.reagReactionCache = __40712__$1);

if((!((obj == null)))){
(obj.reaction = null);
} else {
}

if((!((destroy == null)))){
return (destroy.cljs$core$IFn$_invoke$arity$1 ? destroy.cljs$core$IFn$_invoke$arity$1(x) : destroy.call(null,x));
} else {
return null;
}
});
return (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__40646,G__40647,G__40648) : re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,G__40646,G__40647,G__40648));
})();
var v = cljs.core._deref(r__$1);
(o.reagReactionCache = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,r__$1));

if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._running,cljs.core.inc);
} else {
}

if((!((obj == null)))){
(obj.reaction = r__$1);
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5806__auto__ = self__.reaction;
if((temp__5806__auto__ == null)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.f,self__.args);
}),self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5806__auto__;
return cljs.core._deref(r);
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)))));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"Track",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"f","f",-1597136552),self__.f], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Track");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Track");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Track.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Track = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_Track(f,args,reaction){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track(f,args,reaction));
});

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$make_track(f,args){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track(f,args,null));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$make_track_BANG_(f,args){
var t = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track(f,args);
var r = (function (){var G__40649 = (function (){
return t.cljs$core$IDeref$_deref$arity$1(null);
});
var G__40650 = new cljs.core.Keyword(null,"auto-run","auto-run",1958400437);
var G__40651 = true;
return (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__40649,G__40650,G__40651) : re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,G__40649,G__40650,G__40651));
})();
cljs.core.deref(r);

return r;
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40714 = arguments.length;
var i__5770__auto___40715 = (0);
while(true){
if((i__5770__auto___40715 < len__5769__auto___40714)){
args__5775__auto__.push((arguments[i__5770__auto___40715]));

var G__40716 = (i__5770__auto___40715 + (1));
i__5770__auto___40715 = G__40716;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track(f,args);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$lang$applyTo = (function (seq40652){
var G__40653 = cljs.core.first(seq40652);
var seq40652__$1 = cljs.core.next(seq40652);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40653,seq40652__$1);
}));

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$track_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40717 = arguments.length;
var i__5770__auto___40718 = (0);
while(true){
if((i__5770__auto___40718 < len__5769__auto___40717)){
args__5775__auto__.push((arguments[i__5770__auto___40718]));

var G__40719 = (i__5770__auto___40718 + (1));
i__5770__auto___40718 = G__40719;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track_BANG_(f,args);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq40654){
var G__40655 = cljs.core.first(seq40654);
var seq40654__$1 = cljs.core.next(seq40654);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40655,seq40654__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__40658 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__40659 = null;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__40659);

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__40658);
}}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
(self__.state = newstate);

if((!((self__.watches == null)))){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$,oldstate,newstate);
} else {
return null;
}
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"RCursor",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"path","path",-188191168),self__.path], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom)))));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_(self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
(self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(self__.path,new_value) : self__.ratom.call(null,self__.path,new_value));
}

return new_value;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__40661 = a__$1._peek();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40661) : f.call(null,G__40661));
})());
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__40662 = a__$1._peek();
var G__40663 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__40662,G__40663) : f.call(null,G__40662,G__40663));
})());
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__40664 = a__$1._peek();
var G__40665 = x;
var G__40666 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__40664,G__40665,G__40666) : f.call(null,G__40664,G__40665,G__40666));
})());
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a__$1._peek(),x,y,more));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w(this$__$1,key);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5806__auto__ = self__.reaction;
if((temp__5806__auto__ == null)){
var f = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom)))?(function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.ratom),self__.path);
}):(function (){
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(self__.path) : self__.ratom.call(null,self__.path));
}));
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction(f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5806__auto__;
return cljs.core._deref(r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/RCursor");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/RCursor");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/RCursor.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RCursor = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.cursor = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$cursor(src,path){
if((function (){var or__5045__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom,src));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return ((cljs.core.ifn_QMARK_(src)) && ((!(cljs.core.vector_QMARK_(src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",["src must be a reactive atom or a function, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))," while attempting to get path: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))].join(''),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RCursor(src,path,null,null,null);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.with_let_destroy = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$with_let_destroy(v){
var temp__5808__auto__ = v.destroy;
if((temp__5808__auto__ == null)){
return null;
} else {
var f = temp__5808__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.with_let_values = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$with_let_values(key){
var temp__5806__auto__ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5806__auto__ == null)){
return [];
} else {
var c = temp__5806__auto__;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction(cljs.core.array,c,key,null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IDisposable = function(){};

var re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$dyn_40723 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
return re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$dyn_40723(this$);
}
});

var re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$dyn_40726 = (function (this$,f){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__5394__auto__.call(null,this$,f));
} else {
var m__5392__auto__ = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_on_dispose_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__5392__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IDisposable.add-on-dispose!",this$);
}
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_on_dispose_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$add_on_dispose_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))))){
return this$.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
return re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$dyn_40726(this$,f);
}
});


/**
 * @interface
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IRunnable = function(){};

var re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$dyn_40727 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.run[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.run["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.run = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$arity$1(this$);
} else {
return re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$dyn_40727(this$);
}
});

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.handle_reaction_change = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IDisposable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IRunnable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__40672 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__40673 = null;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__40673);

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__40672);
}}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
(self__.dirty_QMARK_ = true);

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_enqueue(this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return (self__.auto_run.cljs$core$IFn$_invoke$arity$1 ? self__.auto_run.cljs$core$IFn$_invoke$arity$1(this$) : self__.auto_run.call(null,this$));
}
}
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set(derefed);
var old = cljs.core.set(self__.watching);
(self__.watching = derefed);

var seq__40674_40729 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new$,old));
var chunk__40675_40730 = null;
var count__40676_40731 = (0);
var i__40677_40732 = (0);
while(true){
if((i__40677_40732 < count__40676_40731)){
var w_40733 = chunk__40675_40730.cljs$core$IIndexed$_nth$arity$2(null,i__40677_40732);
cljs.core._add_watch(w_40733,this$,re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.handle_reaction_change);


var G__40734 = seq__40674_40729;
var G__40735 = chunk__40675_40730;
var G__40736 = count__40676_40731;
var G__40737 = (i__40677_40732 + (1));
seq__40674_40729 = G__40734;
chunk__40675_40730 = G__40735;
count__40676_40731 = G__40736;
i__40677_40732 = G__40737;
continue;
} else {
var temp__5804__auto___40738 = cljs.core.seq(seq__40674_40729);
if(temp__5804__auto___40738){
var seq__40674_40739__$1 = temp__5804__auto___40738;
if(cljs.core.chunked_seq_QMARK_(seq__40674_40739__$1)){
var c__5568__auto___40740 = cljs.core.chunk_first(seq__40674_40739__$1);
var G__40741 = cljs.core.chunk_rest(seq__40674_40739__$1);
var G__40742 = c__5568__auto___40740;
var G__40743 = cljs.core.count(c__5568__auto___40740);
var G__40744 = (0);
seq__40674_40729 = G__40741;
chunk__40675_40730 = G__40742;
count__40676_40731 = G__40743;
i__40677_40732 = G__40744;
continue;
} else {
var w_40745 = cljs.core.first(seq__40674_40739__$1);
cljs.core._add_watch(w_40745,this$,re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.handle_reaction_change);


var G__40746 = cljs.core.next(seq__40674_40739__$1);
var G__40747 = null;
var G__40748 = (0);
var G__40749 = (0);
seq__40674_40729 = G__40746;
chunk__40675_40730 = G__40747;
count__40676_40731 = G__40748;
i__40677_40732 = G__40749;
continue;
}
} else {
}
}
break;
}

var seq__40678 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__40679 = null;
var count__40680 = (0);
var i__40681 = (0);
while(true){
if((i__40681 < count__40680)){
var w = chunk__40679.cljs$core$IIndexed$_nth$arity$2(null,i__40681);
cljs.core._remove_watch(w,this$);


var G__40750 = seq__40678;
var G__40751 = chunk__40679;
var G__40752 = count__40680;
var G__40753 = (i__40681 + (1));
seq__40678 = G__40750;
chunk__40679 = G__40751;
count__40680 = G__40752;
i__40681 = G__40753;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40678);
if(temp__5804__auto__){
var seq__40678__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40678__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40678__$1);
var G__40754 = cljs.core.chunk_rest(seq__40678__$1);
var G__40755 = c__5568__auto__;
var G__40756 = cljs.core.count(c__5568__auto__);
var G__40757 = (0);
seq__40678 = G__40754;
chunk__40679 = G__40755;
count__40680 = G__40756;
i__40681 = G__40757;
continue;
} else {
var w = cljs.core.first(seq__40678__$1);
cljs.core._remove_watch(w,this$);


var G__40758 = cljs.core.next(seq__40678__$1);
var G__40759 = null;
var G__40760 = (0);
var G__40761 = (0);
seq__40678 = G__40758;
chunk__40679 = G__40759;
count__40680 = G__40760;
i__40681 = G__40761;
continue;
}
} else {
return null;
}
}
break;
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && ((!((self__.watching == null)))))){
return this$._run(true);
} else {
return null;
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{(self__.caught = null);

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture(f__$1,this$);
}catch (e40682){var e = e40682;
(self__.state = e);

(self__.caught = e);

return (self__.dirty_QMARK_ = false);
}}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture(self__.f,this$));
if(self__.nocache_QMARK_){
} else {
(self__.state = res);

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate,res)))){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$,oldstate,res);
}
}

return res;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._set_opts = (function (p__40683){
var self__ = this;
var map__40684 = p__40683;
var map__40684__$1 = cljs.core.__destructure_map(map__40684);
var auto_run__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40684__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40684__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40684__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40684__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if((!((auto_run__$1 == null)))){
(this$.auto_run = auto_run__$1);
} else {
}

if((!((on_set == null)))){
(this$.on_set = on_set);
} else {
}

if((!((on_dispose == null)))){
(this$.on_dispose = on_dispose);
} else {
}

if((!((no_cache == null)))){
return (this$.nocache_QMARK_ = no_cache);
} else {
return null;
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"Reaction",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null)], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
(self__.watching = null);

(self__.state = null);

(self__.auto_run = null);

(self__.dirty_QMARK_ = true);

var seq__40685_40764 = cljs.core.seq(cljs.core.set(wg));
var chunk__40686_40765 = null;
var count__40687_40766 = (0);
var i__40688_40767 = (0);
while(true){
if((i__40688_40767 < count__40687_40766)){
var w_40768 = chunk__40686_40765.cljs$core$IIndexed$_nth$arity$2(null,i__40688_40767);
cljs.core._remove_watch(w_40768,this$__$1);


var G__40769 = seq__40685_40764;
var G__40770 = chunk__40686_40765;
var G__40771 = count__40687_40766;
var G__40772 = (i__40688_40767 + (1));
seq__40685_40764 = G__40769;
chunk__40686_40765 = G__40770;
count__40687_40766 = G__40771;
i__40688_40767 = G__40772;
continue;
} else {
var temp__5804__auto___40773 = cljs.core.seq(seq__40685_40764);
if(temp__5804__auto___40773){
var seq__40685_40774__$1 = temp__5804__auto___40773;
if(cljs.core.chunked_seq_QMARK_(seq__40685_40774__$1)){
var c__5568__auto___40775 = cljs.core.chunk_first(seq__40685_40774__$1);
var G__40776 = cljs.core.chunk_rest(seq__40685_40774__$1);
var G__40777 = c__5568__auto___40775;
var G__40778 = cljs.core.count(c__5568__auto___40775);
var G__40779 = (0);
seq__40685_40764 = G__40776;
chunk__40686_40765 = G__40777;
count__40687_40766 = G__40778;
i__40688_40767 = G__40779;
continue;
} else {
var w_40780 = cljs.core.first(seq__40685_40774__$1);
cljs.core._remove_watch(w_40780,this$__$1);


var G__40781 = cljs.core.next(seq__40685_40774__$1);
var G__40782 = null;
var G__40783 = (0);
var G__40784 = (0);
seq__40685_40764 = G__40781;
chunk__40686_40765 = G__40782;
count__40687_40766 = G__40783;
i__40688_40767 = G__40784;
continue;
}
} else {
}
}
break;
}

if((!((this$__$1.on_dispose == null)))){
this$__$1.on_dispose(s);
} else {
}

var temp__5808__auto__ = this$__$1.on_dispose_arr;
if((temp__5808__auto__ == null)){
return null;
} else {
var a = temp__5808__auto__;
var n__5636__auto__ = a.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var fexpr__40689_40785 = (a[i]);
(fexpr__40689_40785.cljs$core$IFn$_invoke$arity$1 ? fexpr__40689_40785.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__40689_40785.call(null,this$__$1));

var G__40786 = (i + (1));
i = G__40786;
continue;
} else {
return null;
}
break;
}
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5806__auto__ = this$__$1.on_dispose_arr;
if((temp__5806__auto__ == null)){
return (this$__$1.on_dispose_arr = [f__$1]);
} else {
var a = temp__5806__auto__;
return a.push(f__$1);
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_(a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
(self__.state = newval);

a__$1.on_set(oldval,newval);

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(a__$1,oldval,newval);

return newval;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__40690 = a__$1._peek_at();
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__40690) : f__$1.call(null,G__40690));
})());
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__40691 = a__$1._peek_at();
var G__40692 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__40691,G__40692) : f__$1.call(null,G__40691,G__40692));
})());
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__40693 = a__$1._peek_at();
var G__40694 = x;
var G__40695 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__40693,G__40694,G__40695) : f__$1.call(null,G__40693,G__40694,G__40695));
})());
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,a__$1._peek_at(),x,y,more));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.call(null));

return this$__$1._run(false);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w(this$__$1,key,f__$1);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_(self__.watches);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w(this$__$1,key);

if((((!(was_empty))) && (((cljs.core.empty_QMARK_(self__.watches)) && ((self__.auto_run == null)))))){
return this$__$1.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(null);
} else {
return null;
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5808__auto___40787 = self__.caught;
if((temp__5808__auto___40787 == null)){
} else {
var e_40788 = temp__5808__auto___40787;
throw e_40788;
}

var non_reactive_40789 = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_40789){
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.call(null));
} else {
}

if(((non_reactive_40789) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_40790 = self__.state;
(self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null)));

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate_40790,self__.state)))){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,oldstate_40790,self__.state);
}
} else {
}
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Reaction");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Reaction");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Reaction.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Reaction = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$flush_BANG_(){
while(true){
var q = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue = null);

var n__5636__auto___40791 = q.length;
var i_40792 = (0);
while(true){
if((i_40792 < n__5636__auto___40791)){
var r_40793 = (q[i_40792]);
r_40793._queued_run();

var G__40794 = (i_40792 + (1));
i_40792 = G__40794;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.ratom_flush = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$make_reaction(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40795 = arguments.length;
var i__5770__auto___40796 = (0);
while(true){
if((i__5770__auto___40796 < len__5769__auto___40795)){
args__5775__auto__.push((arguments[i__5770__auto___40796]));

var G__40797 = (i__5770__auto___40796 + (1));
i__5770__auto___40796 = G__40797;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__40698){
var map__40699 = p__40698;
var map__40699__$1 = cljs.core.__destructure_map(map__40699);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40699__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40699__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40699__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Reaction(f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq40696){
var G__40697 = cljs.core.first(seq40696);
var seq40696__$1 = cljs.core.next(seq40696);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40697,seq40696__$1);
}));

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.temp_reaction = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction(null);
/**
 * Evaluates `f` and returns the result.  If `f` calls `deref` on any ratoms,
 * creates a new Reaction that watches those atoms and calls `run` whenever
 * any of those watched ratoms change.  Also, the new reaction is added to
 * list of 'watches' of each of the ratoms. The `run` parameter is a function
 * that should expect one argument.  It is passed `obj` when run.  The `opts`
 * are any options accepted by a Reaction and will be set on the newly created
 * Reaction. Sets the newly created Reaction to the `key` on `obj`.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.run_in_reaction = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.temp_reaction;
var res = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture(f,r);
if((r.watching == null)){
} else {
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.temp_reaction = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction(null));

r._set_opts(opts);

(r.f = f);

(r.auto_run = (function (){
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(obj) : run.call(null,obj));
}));

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.goog$module$goog$object.set(obj,key,r);
}

return res;
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.check_derefs = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$check_derefs(f){
var ctx = ({});
var res = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.in_context(ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(!((ctx.captured == null)))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && ((!((re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null)))))){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.has_console){
((re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0))].join(''));
} else {
}
} else {
}


return self__.state;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
(self__.changed = true);

(self__.state = newval);

if((!((self__.watches == null)))){
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,oldval,newval);
} else {
}

(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(newval) : self__.callback.call(null,newval));

return newval;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper)) && ((((!(self__.changed))) && (((cljs.core.not(other.changed)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback)))))))));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w(this$__$1,key);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"Wrapper",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null)], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Wrapper");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Wrapper");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Wrapper.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Wrapper = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper(state,callback,changed,watches));
});

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_wrapper = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$make_wrapper(value,callback_fn,args){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Wrapper(value,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.make_partial_fn(callback_fn,args),false,null);
});

//# sourceMappingURL=re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.js.map
