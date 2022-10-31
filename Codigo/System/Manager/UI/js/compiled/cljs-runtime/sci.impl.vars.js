goog.provide('sci.impl.vars');

/**
 * @interface
 */
sci.impl.vars.HasName = function(){};

var sci$impl$vars$HasName$getName$dyn_24347 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (sci.impl.vars.getName[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (sci.impl.vars.getName["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("HasName.getName",_);
}
}
});
sci.impl.vars.getName = (function sci$impl$vars$getName(_){
if((((!((_ == null)))) && ((!((_.sci$impl$vars$HasName$getName$arity$1 == null)))))){
return _.sci$impl$vars$HasName$getName$arity$1(_);
} else {
return sci$impl$vars$HasName$getName$dyn_24347(_);
}
});


/**
* @constructor
 * @implements {sci.impl.vars.HasName}
 * @implements {cljs.core.IMeta}
*/
sci.impl.vars.SciNamespace = (function (name,meta){
this.name = name;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 131072;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.vars.SciNamespace.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name);
}));

(sci.impl.vars.SciNamespace.prototype.sci$impl$vars$HasName$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciNamespace.prototype.sci$impl$vars$HasName$getName$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
}));

(sci.impl.vars.SciNamespace.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(sci.impl.vars.SciNamespace.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),cljs.core.with_meta(new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.impl.vars.SciNamespace.cljs$lang$type = true);

(sci.impl.vars.SciNamespace.cljs$lang$ctorStr = "sci.impl.vars/SciNamespace");

(sci.impl.vars.SciNamespace.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.impl.vars/SciNamespace");
}));

/**
 * Positional factory function for sci.impl.vars/SciNamespace.
 */
sci.impl.vars.__GT_SciNamespace = (function sci$impl$vars$__GT_SciNamespace(name,meta){
return (new sci.impl.vars.SciNamespace(name,meta));
});

sci.impl.vars.namespace_QMARK_ = (function sci$impl$vars$namespace_QMARK_(x){
return (x instanceof sci.impl.vars.SciNamespace);
});

/**
* @constructor
*/
sci.impl.vars.Frame = (function (bindings,prev){
this.bindings = bindings;
this.prev = prev;
});

(sci.impl.vars.Frame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"prev","prev",43462301,null)], null);
}));

(sci.impl.vars.Frame.cljs$lang$type = true);

(sci.impl.vars.Frame.cljs$lang$ctorStr = "sci.impl.vars/Frame");

(sci.impl.vars.Frame.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.impl.vars/Frame");
}));

/**
 * Positional factory function for sci.impl.vars/Frame.
 */
sci.impl.vars.__GT_Frame = (function sci$impl$vars$__GT_Frame(bindings,prev){
return (new sci.impl.vars.Frame(bindings,prev));
});

sci.impl.vars.top_frame = (new sci.impl.vars.Frame(cljs.core.PersistentArrayMap.EMPTY,null));
sci.impl.vars.dvals = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.top_frame);
sci.impl.vars.get_thread_binding_frame = (function sci$impl$vars$get_thread_binding_frame(){
return cljs.core.deref(sci.impl.vars.dvals);
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.vars.TBox = (function (thread,val){
this.thread = thread;
this.val = val;
});
(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$setVal$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (self__.val = v);
}));

(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.val;
}));

(sci.impl.vars.TBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"thread","thread",-1707434245,null),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.impl.vars.TBox.cljs$lang$type = true);

(sci.impl.vars.TBox.cljs$lang$ctorStr = "sci.impl.vars/TBox");

(sci.impl.vars.TBox.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.impl.vars/TBox");
}));

/**
 * Positional factory function for sci.impl.vars/TBox.
 */
sci.impl.vars.__GT_TBox = (function sci$impl$vars$__GT_TBox(thread,val){
return (new sci.impl.vars.TBox(thread,val));
});

sci.impl.vars.clone_thread_binding_frame = (function sci$impl$vars$clone_thread_binding_frame(){
var f = cljs.core.deref(sci.impl.vars.dvals);
return (new sci.impl.vars.Frame(f.bindings,null));
});
sci.impl.vars.reset_thread_binding_frame = (function sci$impl$vars$reset_thread_binding_frame(frame){
return cljs.core.reset_BANG_(sci.impl.vars.dvals,frame);
});
sci.impl.vars.dynamic_var_QMARK_ = (function sci$impl$vars$dynamic_var_QMARK_(v){
var and__5043__auto__ = (sci.impl.vars.var_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sci.impl.vars.var_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : sci.impl.vars.var_QMARK_.call(null,v));
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
} else {
return and__5043__auto__;
}
});

/**
 * @interface
 */
sci.impl.vars.IVar = function(){};

var sci$impl$vars$IVar$bindRoot$dyn_24356 = (function (this$,v){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (sci.impl.vars.bindRoot[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__5394__auto__.call(null,this$,v));
} else {
var m__5392__auto__ = (sci.impl.vars.bindRoot["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__5392__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IVar.bindRoot",this$);
}
}
});
sci.impl.vars.bindRoot = (function sci$impl$vars$bindRoot(this$,v){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$bindRoot$arity$2 == null)))))){
return this$.sci$impl$vars$IVar$bindRoot$arity$2(this$,v);
} else {
return sci$impl$vars$IVar$bindRoot$dyn_24356(this$,v);
}
});

var sci$impl$vars$IVar$getRawRoot$dyn_24362 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (sci.impl.vars.getRawRoot[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (sci.impl.vars.getRawRoot["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.getRawRoot",this$);
}
}
});
sci.impl.vars.getRawRoot = (function sci$impl$vars$getRawRoot(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$getRawRoot$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$getRawRoot$arity$1(this$);
} else {
return sci$impl$vars$IVar$getRawRoot$dyn_24362(this$);
}
});

var sci$impl$vars$IVar$toSymbol$dyn_24379 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (sci.impl.vars.toSymbol[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (sci.impl.vars.toSymbol["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.toSymbol",this$);
}
}
});
sci.impl.vars.toSymbol = (function sci$impl$vars$toSymbol(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$toSymbol$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$toSymbol$arity$1(this$);
} else {
return sci$impl$vars$IVar$toSymbol$dyn_24379(this$);
}
});

var sci$impl$vars$IVar$isMacro$dyn_24381 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (sci.impl.vars.isMacro[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (sci.impl.vars.isMacro["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.isMacro",this$);
}
}
});
sci.impl.vars.isMacro = (function sci$impl$vars$isMacro(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$isMacro$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$isMacro$arity$1(this$);
} else {
return sci$impl$vars$IVar$isMacro$dyn_24381(this$);
}
});

var sci$impl$vars$IVar$hasRoot$dyn_24383 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (sci.impl.vars.hasRoot[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (sci.impl.vars.hasRoot["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.hasRoot",this$);
}
}
});
sci.impl.vars.hasRoot = (function sci$impl$vars$hasRoot(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$hasRoot$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$hasRoot$arity$1(this$);
} else {
return sci$impl$vars$IVar$hasRoot$dyn_24383(this$);
}
});

var sci$impl$vars$IVar$setThreadBound$dyn_24386 = (function (this$,v){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (sci.impl.vars.setThreadBound[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__5394__auto__.call(null,this$,v));
} else {
var m__5392__auto__ = (sci.impl.vars.setThreadBound["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__5392__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IVar.setThreadBound",this$);
}
}
});
sci.impl.vars.setThreadBound = (function sci$impl$vars$setThreadBound(this$,v){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$setThreadBound$arity$2 == null)))))){
return this$.sci$impl$vars$IVar$setThreadBound$arity$2(this$,v);
} else {
return sci$impl$vars$IVar$setThreadBound$dyn_24386(this$,v);
}
});

var sci$impl$vars$IVar$unbind$dyn_24387 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (sci.impl.vars.unbind[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (sci.impl.vars.unbind["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.unbind",this$);
}
}
});
sci.impl.vars.unbind = (function sci$impl$vars$unbind(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$unbind$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$unbind$arity$1(this$);
} else {
return sci$impl$vars$IVar$unbind$dyn_24387(this$);
}
});

sci.impl.vars.push_thread_bindings = (function sci$impl$vars$push_thread_bindings(bindings){
var frame = sci.impl.vars.get_thread_binding_frame();
var bmap = frame.bindings;
var bmap__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__24058){
var vec__24059 = p__24058;
var var_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24059,(0),null);
var val_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24059,(1),null);
if(cljs.core.truth_(sci.impl.vars.dynamic_var_QMARK_(var_STAR_))){
} else {
throw (new Error(["Can't dynamically bind non-dynamic var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_STAR_)].join('')));
}

sci.impl.vars.setThreadBound(var_STAR_,true);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,var_STAR_,(new sci.impl.vars.TBox(null,val_STAR_)));
}),bmap,bindings);
return sci.impl.vars.reset_thread_binding_frame((new sci.impl.vars.Frame(bmap__$1,frame)));
});
sci.impl.vars.pop_thread_bindings = (function sci$impl$vars$pop_thread_bindings(){
var temp__5802__auto__ = sci.impl.vars.get_thread_binding_frame().prev;
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
if((sci.impl.vars.top_frame === f)){
return cljs.core.reset_BANG_(sci.impl.vars.dvals,sci.impl.vars.top_frame);
} else {
return sci.impl.vars.reset_thread_binding_frame(f);
}
} else {
throw (new Error("No frame to pop."));
}
});
sci.impl.vars.get_thread_bindings = (function sci$impl$vars$get_thread_bindings(){
var f = sci.impl.vars.get_thread_binding_frame();
var ret = cljs.core.PersistentArrayMap.EMPTY;
var kvs = cljs.core.seq(f.bindings);
while(true){
if(kvs){
var vec__24074 = cljs.core.first(kvs);
var var_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24074,(0),null);
var tbox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24074,(1),null);
var tbox_val = tbox.sci$impl$types$IBox$getVal$arity$1(null);
var G__24392 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,var_STAR_,tbox_val);
var G__24393 = cljs.core.next(kvs);
ret = G__24392;
kvs = G__24393;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.vars.get_thread_binding = (function sci$impl$vars$get_thread_binding(sci_var){
var temp__5804__auto__ = cljs.core.deref(sci.impl.vars.dvals);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return f.bindings.get(sci_var);
} else {
return null;
}
});
sci.impl.vars.binding_conveyor_fn = (function sci$impl$vars$binding_conveyor_fn(f){
var frame = sci.impl.vars.clone_thread_binding_frame();
return (function() {
var G__24394 = null;
var G__24394__0 = (function (){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__24394__1 = (function (x){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
});
var G__24394__2 = (function (x,y){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
});
var G__24394__3 = (function (x,y,z){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null,x,y,z));
});
var G__24394__4 = (function() { 
var G__24397__delegate = function (x,y,z,args){
sci.impl.vars.reset_thread_binding_frame(frame);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args);
};
var G__24397 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__24398__i = 0, G__24398__a = new Array(arguments.length -  3);
while (G__24398__i < G__24398__a.length) {G__24398__a[G__24398__i] = arguments[G__24398__i + 3]; ++G__24398__i;}
  args = new cljs.core.IndexedSeq(G__24398__a,0,null);
} 
return G__24397__delegate.call(this,x,y,z,args);};
G__24397.cljs$lang$maxFixedArity = 3;
G__24397.cljs$lang$applyTo = (function (arglist__24399){
var x = cljs.core.first(arglist__24399);
arglist__24399 = cljs.core.next(arglist__24399);
var y = cljs.core.first(arglist__24399);
arglist__24399 = cljs.core.next(arglist__24399);
var z = cljs.core.first(arglist__24399);
var args = cljs.core.rest(arglist__24399);
return G__24397__delegate(x,y,z,args);
});
G__24397.cljs$core$IFn$_invoke$arity$variadic = G__24397__delegate;
return G__24397;
})()
;
G__24394 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__24394__0.call(this);
case 1:
return G__24394__1.call(this,x);
case 2:
return G__24394__2.call(this,x,y);
case 3:
return G__24394__3.call(this,x,y,z);
default:
var G__24400 = null;
if (arguments.length > 3) {
var G__24401__i = 0, G__24401__a = new Array(arguments.length -  3);
while (G__24401__i < G__24401__a.length) {G__24401__a[G__24401__i] = arguments[G__24401__i + 3]; ++G__24401__i;}
G__24400 = new cljs.core.IndexedSeq(G__24401__a,0,null);
}
return G__24394__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__24400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24394.cljs$lang$maxFixedArity = 3;
G__24394.cljs$lang$applyTo = G__24394__4.cljs$lang$applyTo;
G__24394.cljs$core$IFn$_invoke$arity$0 = G__24394__0;
G__24394.cljs$core$IFn$_invoke$arity$1 = G__24394__1;
G__24394.cljs$core$IFn$_invoke$arity$2 = G__24394__2;
G__24394.cljs$core$IFn$_invoke$arity$3 = G__24394__3;
G__24394.cljs$core$IFn$_invoke$arity$variadic = G__24394__4.cljs$core$IFn$_invoke$arity$variadic;
return G__24394;
})()
});
sci.impl.vars.throw_unbound_call_exception = (function sci$impl$vars$throw_unbound_call_exception(the_var){
throw (new Error(["Attempting to call unbound fn: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_var)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
sci.impl.vars.SciUnbound = (function (the_var){
this.the_var = the_var;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.vars.SciUnbound.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["Unbound: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.the_var)].join('');
}));

(sci.impl.vars.SciUnbound.prototype.call = (function() {
var G__24403 = null;
var G__24403__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__24403__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
G__24403 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__24403__1.call(this,self__);
case 2:
return G__24403__2.call(this,self__,a);
case 3:
return G__24403__3.call(this,self__,a,b);
case 4:
return G__24403__4.call(this,self__,a,b,c);
case 5:
return G__24403__5.call(this,self__,a,b,c,d);
case 6:
return G__24403__6.call(this,self__,a,b,c,d,e);
case 7:
return G__24403__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__24403__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__24403__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__24403__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__24403__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__24403__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__24403__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__24403__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__24403__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__24403__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__24403__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__24403__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__24403__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__24403__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__24403__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__24403__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__24403.cljs$core$IFn$_invoke$arity$1 = G__24403__1;
G__24403.cljs$core$IFn$_invoke$arity$2 = G__24403__2;
G__24403.cljs$core$IFn$_invoke$arity$3 = G__24403__3;
G__24403.cljs$core$IFn$_invoke$arity$4 = G__24403__4;
G__24403.cljs$core$IFn$_invoke$arity$5 = G__24403__5;
G__24403.cljs$core$IFn$_invoke$arity$6 = G__24403__6;
G__24403.cljs$core$IFn$_invoke$arity$7 = G__24403__7;
G__24403.cljs$core$IFn$_invoke$arity$8 = G__24403__8;
G__24403.cljs$core$IFn$_invoke$arity$9 = G__24403__9;
G__24403.cljs$core$IFn$_invoke$arity$10 = G__24403__10;
G__24403.cljs$core$IFn$_invoke$arity$11 = G__24403__11;
G__24403.cljs$core$IFn$_invoke$arity$12 = G__24403__12;
G__24403.cljs$core$IFn$_invoke$arity$13 = G__24403__13;
G__24403.cljs$core$IFn$_invoke$arity$14 = G__24403__14;
G__24403.cljs$core$IFn$_invoke$arity$15 = G__24403__15;
G__24403.cljs$core$IFn$_invoke$arity$16 = G__24403__16;
G__24403.cljs$core$IFn$_invoke$arity$17 = G__24403__17;
G__24403.cljs$core$IFn$_invoke$arity$18 = G__24403__18;
G__24403.cljs$core$IFn$_invoke$arity$19 = G__24403__19;
G__24403.cljs$core$IFn$_invoke$arity$20 = G__24403__20;
G__24403.cljs$core$IFn$_invoke$arity$21 = G__24403__21;
G__24403.cljs$core$IFn$_invoke$arity$22 = G__24403__22;
return G__24403;
})()
);

(sci.impl.vars.SciUnbound.prototype.apply = (function (self__,args24184){
var self__ = this;
var self____$1 = this;
var args__5260__auto__ = cljs.core.aclone(args24184);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5260__auto__.length > (20)))?(function (){var G__24209 = args__5260__auto__.slice((0),(20));
G__24209.push(args__5260__auto__.slice((20)));

return G__24209;
})():args__5260__auto__)));
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"the-var","the-var",-1226020156,null)], null);
}));

(sci.impl.vars.SciUnbound.cljs$lang$type = true);

(sci.impl.vars.SciUnbound.cljs$lang$ctorStr = "sci.impl.vars/SciUnbound");

(sci.impl.vars.SciUnbound.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.impl.vars/SciUnbound");
}));

/**
 * Positional factory function for sci.impl.vars/SciUnbound.
 */
sci.impl.vars.__GT_SciUnbound = (function sci$impl$vars$__GT_SciUnbound(the_var){
return (new sci.impl.vars.SciUnbound(the_var));
});

sci.impl.vars.built_in_var_QMARK_ = (function sci$impl$vars$built_in_var_QMARK_(var_meta){
return new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599).cljs$core$IFn$_invoke$arity$1(var_meta);
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {sci.impl.vars.HasName}
 * @implements {cljs.core.IMeta}
 * @implements {sci.impl.vars.IVar}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {sci.impl.types.IBox}
*/
sci.impl.vars.SciVar = (function (root,sym,meta,thread_bound){
this.root = root;
this.sym = sym;
this.meta = meta;
this.thread_bound = thread_bound;
this.cljs$lang$protocol_mask$partition0$ = 2147647489;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.vars.SciVar.prototype.sci$impl$vars$HasName$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciVar.prototype.sci$impl$vars$HasName$getName$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.sym;
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$bindRoot$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var vm__23890__auto__ = self__.meta;
if(cljs.core.truth_((function (){var or__5045__auto__ = sci.impl.unrestrict._STAR_unrestricted_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599).cljs$core$IFn$_invoke$arity$1(vm__23890__auto__));
}
})())){
return (this$__$1.root = v);
} else {
var the_var__23891__auto__ = this$__$1;
var ns__23892__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(vm__23890__auto__);
var ns_name__23893__auto__ = sci.impl.vars.getName(ns__23892__auto__);
var name__23894__auto__ = the_var__23891__auto__.sci$impl$vars$HasName$getName$arity$1(null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Built-in var #'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name__23893__auto__),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__23894__auto__)," is read-only."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var","var",-769682797),this$__$1], null));
}
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$getRawRoot$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.root;
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$toSymbol$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.sym;
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$isMacro$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(self__.root));
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$setThreadBound$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (this$__$1.thread_bound = v);
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$unbind$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vm__23890__auto__ = self__.meta;
if(cljs.core.truth_((function (){var or__5045__auto__ = sci.impl.unrestrict._STAR_unrestricted_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599).cljs$core$IFn$_invoke$arity$1(vm__23890__auto__));
}
})())){
return (this$__$1.root = (new sci.impl.vars.SciUnbound(this$__$1)));
} else {
var the_var__23891__auto__ = this$__$1;
var ns__23892__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(vm__23890__auto__);
var ns_name__23893__auto__ = sci.impl.vars.getName(ns__23892__auto__);
var name__23894__auto__ = the_var__23891__auto__.sci$impl$vars$HasName$getName$arity$1(null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Built-in var #'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name__23893__auto__),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__23894__auto__)," is read-only."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var","var",-769682797),this$__$1], null));
}
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$hasRoot$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (!((self__.root instanceof sci.impl.vars.SciUnbound)));
}));

(sci.impl.vars.SciVar.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciVar.prototype.sci$impl$types$IBox$setVal$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var temp__5802__auto__ = sci.impl.vars.get_thread_binding(this$__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var b = temp__5802__auto__;
return sci.impl.types.setVal(b,v);
} else {
throw (new Error(["Can't change/establish root binding of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," with set"].join('')));
}
}));

(sci.impl.vars.SciVar.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.root;
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.thread_bound)){
var temp__5802__auto__ = sci.impl.vars.get_thread_binding(this$__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var tbox = temp__5802__auto__;
return sci.impl.types.getVal(tbox);
} else {
return self__.root;
}
} else {
return self__.root;
}
}));

(sci.impl.vars.SciVar.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.sym)].join('');
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#'");

return cljs.core.pr_writer(self__.sym,writer,opts);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(sci.impl.vars.SciVar.prototype.call = (function() {
var G__24428 = null;
var G__24428__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24258 = cljs.core.deref(this$);
return (fexpr__24258.cljs$core$IFn$_invoke$arity$0 ? fexpr__24258.cljs$core$IFn$_invoke$arity$0() : fexpr__24258.call(null));
});
var G__24428__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24259 = cljs.core.deref(this$);
return (fexpr__24259.cljs$core$IFn$_invoke$arity$1 ? fexpr__24259.cljs$core$IFn$_invoke$arity$1(a) : fexpr__24259.call(null,a));
});
var G__24428__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24260 = cljs.core.deref(this$);
return (fexpr__24260.cljs$core$IFn$_invoke$arity$2 ? fexpr__24260.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__24260.call(null,a,b));
});
var G__24428__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24261 = cljs.core.deref(this$);
return (fexpr__24261.cljs$core$IFn$_invoke$arity$3 ? fexpr__24261.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__24261.call(null,a,b,c));
});
var G__24428__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24264 = cljs.core.deref(this$);
return (fexpr__24264.cljs$core$IFn$_invoke$arity$4 ? fexpr__24264.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__24264.call(null,a,b,c,d));
});
var G__24428__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24265 = cljs.core.deref(this$);
return (fexpr__24265.cljs$core$IFn$_invoke$arity$5 ? fexpr__24265.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__24265.call(null,a,b,c,d,e));
});
var G__24428__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24266 = cljs.core.deref(this$);
return (fexpr__24266.cljs$core$IFn$_invoke$arity$6 ? fexpr__24266.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : fexpr__24266.call(null,a,b,c,d,e,f));
});
var G__24428__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24267 = cljs.core.deref(this$);
return (fexpr__24267.cljs$core$IFn$_invoke$arity$7 ? fexpr__24267.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : fexpr__24267.call(null,a,b,c,d,e,f,g));
});
var G__24428__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24268 = cljs.core.deref(this$);
return (fexpr__24268.cljs$core$IFn$_invoke$arity$8 ? fexpr__24268.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : fexpr__24268.call(null,a,b,c,d,e,f,g,h));
});
var G__24428__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24269 = cljs.core.deref(this$);
return (fexpr__24269.cljs$core$IFn$_invoke$arity$9 ? fexpr__24269.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : fexpr__24269.call(null,a,b,c,d,e,f,g,h,i));
});
var G__24428__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24271 = cljs.core.deref(this$);
return (fexpr__24271.cljs$core$IFn$_invoke$arity$10 ? fexpr__24271.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : fexpr__24271.call(null,a,b,c,d,e,f,g,h,i,j));
});
var G__24428__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24272 = cljs.core.deref(this$);
return (fexpr__24272.cljs$core$IFn$_invoke$arity$11 ? fexpr__24272.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : fexpr__24272.call(null,a,b,c,d,e,f,g,h,i,j,k));
});
var G__24428__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24273 = cljs.core.deref(this$);
return (fexpr__24273.cljs$core$IFn$_invoke$arity$12 ? fexpr__24273.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : fexpr__24273.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
});
var G__24428__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24274 = cljs.core.deref(this$);
return (fexpr__24274.cljs$core$IFn$_invoke$arity$13 ? fexpr__24274.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : fexpr__24274.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
});
var G__24428__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24275 = cljs.core.deref(this$);
return (fexpr__24275.cljs$core$IFn$_invoke$arity$14 ? fexpr__24275.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : fexpr__24275.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
});
var G__24428__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24276 = cljs.core.deref(this$);
return (fexpr__24276.cljs$core$IFn$_invoke$arity$15 ? fexpr__24276.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : fexpr__24276.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
});
var G__24428__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24277 = cljs.core.deref(this$);
return (fexpr__24277.cljs$core$IFn$_invoke$arity$16 ? fexpr__24277.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : fexpr__24277.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
});
var G__24428__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24278 = cljs.core.deref(this$);
return (fexpr__24278.cljs$core$IFn$_invoke$arity$17 ? fexpr__24278.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : fexpr__24278.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
});
var G__24428__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24279 = cljs.core.deref(this$);
return (fexpr__24279.cljs$core$IFn$_invoke$arity$18 ? fexpr__24279.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__24279.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
});
var G__24428__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24280 = cljs.core.deref(this$);
return (fexpr__24280.cljs$core$IFn$_invoke$arity$19 ? fexpr__24280.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__24280.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
});
var G__24428__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__24281 = cljs.core.deref(this$);
return (fexpr__24281.cljs$core$IFn$_invoke$arity$20 ? fexpr__24281.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__24281.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});
var G__24428__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__24428 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__24428__1.call(this,self__);
case 2:
return G__24428__2.call(this,self__,a);
case 3:
return G__24428__3.call(this,self__,a,b);
case 4:
return G__24428__4.call(this,self__,a,b,c);
case 5:
return G__24428__5.call(this,self__,a,b,c,d);
case 6:
return G__24428__6.call(this,self__,a,b,c,d,e);
case 7:
return G__24428__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__24428__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__24428__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__24428__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__24428__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__24428__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__24428__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__24428__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__24428__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__24428__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__24428__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__24428__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__24428__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__24428__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__24428__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__24428__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__24428.cljs$core$IFn$_invoke$arity$1 = G__24428__1;
G__24428.cljs$core$IFn$_invoke$arity$2 = G__24428__2;
G__24428.cljs$core$IFn$_invoke$arity$3 = G__24428__3;
G__24428.cljs$core$IFn$_invoke$arity$4 = G__24428__4;
G__24428.cljs$core$IFn$_invoke$arity$5 = G__24428__5;
G__24428.cljs$core$IFn$_invoke$arity$6 = G__24428__6;
G__24428.cljs$core$IFn$_invoke$arity$7 = G__24428__7;
G__24428.cljs$core$IFn$_invoke$arity$8 = G__24428__8;
G__24428.cljs$core$IFn$_invoke$arity$9 = G__24428__9;
G__24428.cljs$core$IFn$_invoke$arity$10 = G__24428__10;
G__24428.cljs$core$IFn$_invoke$arity$11 = G__24428__11;
G__24428.cljs$core$IFn$_invoke$arity$12 = G__24428__12;
G__24428.cljs$core$IFn$_invoke$arity$13 = G__24428__13;
G__24428.cljs$core$IFn$_invoke$arity$14 = G__24428__14;
G__24428.cljs$core$IFn$_invoke$arity$15 = G__24428__15;
G__24428.cljs$core$IFn$_invoke$arity$16 = G__24428__16;
G__24428.cljs$core$IFn$_invoke$arity$17 = G__24428__17;
G__24428.cljs$core$IFn$_invoke$arity$18 = G__24428__18;
G__24428.cljs$core$IFn$_invoke$arity$19 = G__24428__19;
G__24428.cljs$core$IFn$_invoke$arity$20 = G__24428__20;
G__24428.cljs$core$IFn$_invoke$arity$21 = G__24428__21;
G__24428.cljs$core$IFn$_invoke$arity$22 = G__24428__22;
return G__24428;
})()
);

(sci.impl.vars.SciVar.prototype.apply = (function (self__,args24239){
var self__ = this;
var self____$1 = this;
var args__5260__auto__ = cljs.core.aclone(args24239);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5260__auto__.length > (20)))?(function (){var G__24283 = args__5260__auto__.slice((0),(20));
G__24283.push(args__5260__auto__.slice((20)));

return G__24283;
})():args__5260__auto__)));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var fexpr__24284 = cljs.core.deref(this$);
return (fexpr__24284.cljs$core$IFn$_invoke$arity$0 ? fexpr__24284.cljs$core$IFn$_invoke$arity$0() : fexpr__24284.call(null));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var fexpr__24285 = cljs.core.deref(this$);
return (fexpr__24285.cljs$core$IFn$_invoke$arity$1 ? fexpr__24285.cljs$core$IFn$_invoke$arity$1(a) : fexpr__24285.call(null,a));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var fexpr__24286 = cljs.core.deref(this$);
return (fexpr__24286.cljs$core$IFn$_invoke$arity$2 ? fexpr__24286.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__24286.call(null,a,b));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var fexpr__24287 = cljs.core.deref(this$);
return (fexpr__24287.cljs$core$IFn$_invoke$arity$3 ? fexpr__24287.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__24287.call(null,a,b,c));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var fexpr__24288 = cljs.core.deref(this$);
return (fexpr__24288.cljs$core$IFn$_invoke$arity$4 ? fexpr__24288.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__24288.call(null,a,b,c,d));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var fexpr__24289 = cljs.core.deref(this$);
return (fexpr__24289.cljs$core$IFn$_invoke$arity$5 ? fexpr__24289.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__24289.call(null,a,b,c,d,e));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
var fexpr__24291 = cljs.core.deref(this$);
return (fexpr__24291.cljs$core$IFn$_invoke$arity$6 ? fexpr__24291.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : fexpr__24291.call(null,a,b,c,d,e,f));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
var fexpr__24292 = cljs.core.deref(this$);
return (fexpr__24292.cljs$core$IFn$_invoke$arity$7 ? fexpr__24292.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : fexpr__24292.call(null,a,b,c,d,e,f,g));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
var fexpr__24293 = cljs.core.deref(this$);
return (fexpr__24293.cljs$core$IFn$_invoke$arity$8 ? fexpr__24293.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : fexpr__24293.call(null,a,b,c,d,e,f,g,h));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
var fexpr__24294 = cljs.core.deref(this$);
return (fexpr__24294.cljs$core$IFn$_invoke$arity$9 ? fexpr__24294.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : fexpr__24294.call(null,a,b,c,d,e,f,g,h,i));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
var fexpr__24295 = cljs.core.deref(this$);
return (fexpr__24295.cljs$core$IFn$_invoke$arity$10 ? fexpr__24295.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : fexpr__24295.call(null,a,b,c,d,e,f,g,h,i,j));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
var fexpr__24296 = cljs.core.deref(this$);
return (fexpr__24296.cljs$core$IFn$_invoke$arity$11 ? fexpr__24296.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : fexpr__24296.call(null,a,b,c,d,e,f,g,h,i,j,k));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var fexpr__24297 = cljs.core.deref(this$);
return (fexpr__24297.cljs$core$IFn$_invoke$arity$12 ? fexpr__24297.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : fexpr__24297.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
var fexpr__24298 = cljs.core.deref(this$);
return (fexpr__24298.cljs$core$IFn$_invoke$arity$13 ? fexpr__24298.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : fexpr__24298.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
var fexpr__24299 = cljs.core.deref(this$);
return (fexpr__24299.cljs$core$IFn$_invoke$arity$14 ? fexpr__24299.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : fexpr__24299.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
var fexpr__24300 = cljs.core.deref(this$);
return (fexpr__24300.cljs$core$IFn$_invoke$arity$15 ? fexpr__24300.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : fexpr__24300.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
var fexpr__24302 = cljs.core.deref(this$);
return (fexpr__24302.cljs$core$IFn$_invoke$arity$16 ? fexpr__24302.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : fexpr__24302.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
var fexpr__24303 = cljs.core.deref(this$);
return (fexpr__24303.cljs$core$IFn$_invoke$arity$17 ? fexpr__24303.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : fexpr__24303.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
var fexpr__24304 = cljs.core.deref(this$);
return (fexpr__24304.cljs$core$IFn$_invoke$arity$18 ? fexpr__24304.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__24304.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var fexpr__24305 = cljs.core.deref(this$);
return (fexpr__24305.cljs$core$IFn$_invoke$arity$19 ? fexpr__24305.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__24305.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var fexpr__24306 = cljs.core.deref(this$);
return (fexpr__24306.cljs$core$IFn$_invoke$arity$20 ? fexpr__24306.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__24306.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
}));

(sci.impl.vars.SciVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"sym","sym",195671222,null),cljs.core.with_meta(new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"thread-bound","thread-bound",1232527493,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.impl.vars.SciVar.cljs$lang$type = true);

(sci.impl.vars.SciVar.cljs$lang$ctorStr = "sci.impl.vars/SciVar");

(sci.impl.vars.SciVar.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.impl.vars/SciVar");
}));

/**
 * Positional factory function for sci.impl.vars/SciVar.
 */
sci.impl.vars.__GT_SciVar = (function sci$impl$vars$__GT_SciVar(root,sym,meta,thread_bound){
return (new sci.impl.vars.SciVar(root,sym,meta,thread_bound));
});

sci.impl.vars.var_get = (function sci$impl$vars$var_get(v){
return cljs.core.deref(v);
});
sci.impl.vars.var_set = (function sci$impl$vars$var_set(v,val){
return sci.impl.types.setVal(v,val);
});
sci.impl.vars.var_QMARK_ = (function sci$impl$vars$var_QMARK_(x){
return (x instanceof sci.impl.vars.SciVar);
});
sci.impl.vars.dynamic_var = (function sci$impl$vars$dynamic_var(var_args){
var G__24312 = arguments.length;
switch (G__24312) {
case 1:
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,null,cljs.core.meta(name));
}));

(sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.meta(name));
}));

(sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,meta){
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true);
return (new sci.impl.vars.SciVar(init_val,name,meta__$1,false));
}));

(sci.impl.vars.dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.vars.user_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"user","user",-1122004413,null),null);
sci.impl.vars.clojure_core_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),null);
sci.impl.vars.current_file = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"*file*","*file*",624866474,null),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
sci.impl.vars.current_ns = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),sci.impl.vars.user_ns,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
sci.impl.vars.current_ns_name = (function sci$impl$vars$current_ns_name(){
return sci.impl.vars.getName(cljs.core.deref(sci.impl.vars.current_ns));
});
sci.impl.vars.alter_var_root = (function sci$impl$vars$alter_var_root(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24461 = arguments.length;
var i__5770__auto___24462 = (0);
while(true){
if((i__5770__auto___24462 < len__5769__auto___24461)){
args__5775__auto__.push((arguments[i__5770__auto___24462]));

var G__24463 = (i__5770__auto___24462 + (1));
i__5770__auto___24462 = G__24463;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$variadic = (function (v,f,args){
return sci.impl.vars.bindRoot(v,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,sci.impl.vars.getRawRoot(v),args));
}));

(sci.impl.vars.alter_var_root.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.vars.alter_var_root.cljs$lang$applyTo = (function (seq24318){
var G__24319 = cljs.core.first(seq24318);
var seq24318__$1 = cljs.core.next(seq24318);
var G__24320 = cljs.core.first(seq24318__$1);
var seq24318__$2 = cljs.core.next(seq24318__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24319,G__24320,seq24318__$2);
}));

/**
 * Returns a new sci var.
 */
sci.impl.vars.new_var = (function sci$impl$vars$new_var(var_args){
var G__24332 = arguments.length;
switch (G__24332) {
case 1:
return sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
var G__24337 = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(name,null,null);
sci.impl.vars.unbind(G__24337);

return G__24337;
}));

(sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.meta(name));
}));

(sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,meta){
return sci.impl.vars.__GT_SciVar(init_val,name,meta,false);
}));

(sci.impl.vars.new_var.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sci.impl.vars.js.map
